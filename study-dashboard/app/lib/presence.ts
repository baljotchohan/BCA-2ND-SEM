import { ref, onDisconnect, update } from "firebase/database";
import { db } from "../lib/firebase";

// ─── Visibility-Aware Heartbeat ────────────────────────────────────────────
// We track a local "session open time" so we only accumulate time while the
// tab is actually visible. When the tab goes to the background the heartbeat
// timer is paused, and the time gap is NOT counted.

let _heartbeatTimer: ReturnType<typeof setInterval> | null = null;
let _lastTickAt: number | null = null; // when the current visible-tick started

/** Returns the current user's key, or null if not registered. */
function getKey(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("persistentUserId");
}

/** True if the page is currently visible to the user. */
function isTabVisible(): boolean {
  if (typeof document === "undefined") return true;
  return document.visibilityState === "visible";
}

// ─── Public API ─────────────────────────────────────────────────────────────

/**
 * Writes/Updates the user in "onlineUsers/{key}" in Firebase.
 * Safe to call multiple times — it always UPSERTs.
 * Returns the key used.
 */
export async function joinExam(userName: string): Promise<string> {
  const safeName = userName.trim().toLowerCase().replace(/[^a-z0-9]/g, "");

  // ── Persist a stable ID across page navigations ──
  let key = "";
  if (typeof window !== "undefined") {
    const savedId = localStorage.getItem("persistentStudentId");
    if (savedId && savedId.startsWith(`user_${safeName}`)) {
      key = savedId;
    } else {
      const suffix = Math.random().toString(36).substring(2, 6);
      key = `user_${safeName}_${suffix}`;
      localStorage.setItem("persistentStudentId", key);
    }
    localStorage.setItem("persistentUserId", key);
  } else {
    key = `user_${safeName}`;
  }

  const userRef = ref(db, `onlineUsers/${key}`);

  // ── Non-blocking IP fetch ──
  fetch("https://api.ipify.org?format=json")
    .then((r) => r.json())
    .then((d) => { if (d.ip) update(userRef, { ip: d.ip }); })
    .catch(() => {});

  // ── Device info ──
  const userAgent =
    typeof navigator !== "undefined" ? navigator.userAgent : "Unknown";
  const platform =
    typeof navigator !== "undefined"
      ? (navigator as any).platform || "Unknown"
      : "Unknown";

  let deviceModel = "Unknown";
  if (typeof window !== "undefined") {
    if ("userAgentData" in navigator) {
      try {
        const uaData: any = navigator.userAgentData;
        const hi = await uaData.getHighEntropyValues(["model"]);
        if (hi.model) deviceModel = hi.model;
      } catch {}
    }
    if (deviceModel === "Unknown" && userAgent !== "Unknown") {
      const androidMatch = userAgent.match(/Android [^;]+; ([^;]+)\s+Build/);
      if (androidMatch?.[1]) deviceModel = androidMatch[1].trim();
      else if (userAgent.includes("iPhone"))
        deviceModel = `iPhone (${window.screen.width}x${window.screen.height})`;
      else if (userAgent.includes("iPad"))
        deviceModel = `iPad (${window.screen.width}x${window.screen.height})`;
      else if (userAgent.includes("Macintosh") || userAgent.includes("Mac OS X"))
        deviceModel = "Mac / MacBook";
      else if (userAgent.includes("Windows NT 10.0"))
        deviceModel = "Windows 10/11 PC";
      else if (userAgent.includes("Windows"))
        deviceModel = "Windows PC";
    }
  }

  // ── onDisconnect: mark offline with a plain timestamp ──
  // NOTE: serverTimestamp() cannot be used here because the Firebase
  // validate rule on 'lastSeen' uses isNumber(), and serverTimestamp()
  // is a special sentinel object — not a number — so it fails validation.
  // Date.now() is a plain number and passes correctly.
  try {
    await onDisconnect(userRef).cancel();
    await onDisconnect(userRef).update({
      status: "offline",
      lastSeen: Date.now(),
    });
  } catch (e) {
    console.warn("onDisconnect setup failed:", e);
  }

  // ── Read existing data to preserve history / visits ──
  const { get } = await import("firebase/database");
  const snapshot = await get(userRef);
  const existingData = snapshot.exists() ? snapshot.val() : {};

  const totalVisits = (existingData.totalVisits || 0) + 1;
  const firstSeen = existingData.firstSeen || Date.now();

  const now = Date.now();
  const readableNow = new Date(now).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  // ── UPSERT ──
  await update(userRef, {
    name: userName.trim(),
    joinedAt: firstSeen,
    joinedAtReadable: new Date(firstSeen).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    }),
    currentSessionStart: now,
    currentSessionStartReadable: readableNow,
    lastSeen: now,
    lastSeenReadable: readableNow,
    firstSeen,
    totalVisits,
    totalStudyTime: existingData.totalStudyTime || 0,
    status: "active",
    examStarted: existingData.examStarted || false,
    userAgent,
    platform,
    deviceModel,
    ip: existingData.ip || "Unknown",
  });

  // ── Log visit in history ──
  const { push } = await import("firebase/database");
  await push(ref(db, `onlineUsers/${key}/history`), {
    action: snapshot.exists() ? "Returned to Site" : "First Visit",
    timestamp: now,
    device: deviceModel,
  });

  // ── Start the visibility-aware heartbeat ──
  _startHeartbeat();

  return key;
}

/**
 * Tracks a user page/action. Safe to call from any route.
 */
export async function trackActivity(actionName: string): Promise<void> {
  const key = getKey();
  if (!key) return;

  const now = Date.now();
  const readableNow = new Date(now).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  try {
    const { push } = await import("firebase/database");
    await push(ref(db, `onlineUsers/${key}/history`), {
      action: actionName,
      timestamp: now,
    });
    await update(ref(db, `onlineUsers/${key}`), {
      lastSeen: now,
      lastSeenReadable: readableNow,
      currentActivity: actionName,
      status: "active",
    });
  } catch (e) {
    console.warn("trackActivity failed:", e);
  }
}

/**
 * Heartbeat — only counts time while the tab is visible.
 * Called internally; also exported so page.tsx can call it on init.
 */
export async function sendHeartbeat(): Promise<void> {
  // Skip if tab is hidden — don't accumulate background time
  if (!isTabVisible()) return;

  const key = getKey();
  if (!key) return;

  const userRef = ref(db, `onlineUsers/${key}`);
  const { get, increment } = await import("firebase/database");

  try {
    const snapshot = await get(userRef);
    if (!snapshot.exists()) return;

    const data = snapshot.val();
    const now = Date.now();
    const lastSeen: number = data.lastSeen || now;
    const elapsed = now - lastSeen;

    const readableNow = new Date(now).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    // Only accumulate if elapsed is between 5s and 5min
    // (guards against stale heartbeats after sleep/wake)
    if (elapsed > 5000 && elapsed < 300000) {
      await update(userRef, {
        lastSeen: now,
        lastSeenReadable: readableNow,
        status: "active",
        totalStudyTime: increment(elapsed),
      });
    } else {
      // Just ping — don't accumulate time if gap is too large or too small
      await update(userRef, {
        lastSeen: now,
        lastSeenReadable: readableNow,
        status: "active",
      });
    }
  } catch (e) {
    console.warn("Heartbeat failed:", e);
  }
}

/**
 * Updates the user's status (active/idle) without affecting study time.
 */
export async function updateUserStatus(
  status?: "active" | "idle",
  examStarted?: boolean
): Promise<void> {
  const key = getKey();
  if (!key) return;

  const updates: Record<string, any> = {};
  if (status) {
    updates.status = status;
    updates.lastSeen = Date.now();
    updates.lastSeenReadable = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });
  }
  if (examStarted !== undefined) updates.examStarted = examStarted;

  if (Object.keys(updates).length === 0) return;

  try {
    await update(ref(db, `onlineUsers/${key}`), updates);
  } catch (e) {
    console.warn("updateUserStatus failed:", e);
  }
}

/**
 * Checks whether a user key still exists in the database.
 */
export async function validateSession(userId: string): Promise<boolean> {
  if (!userId) return false;
  try {
    const { get } = await import("firebase/database");
    const snapshot = await get(ref(db, `onlineUsers/${userId}`));
    return snapshot.exists();
  } catch {
    return false;
  }
}

/**
 * Marks the user as offline (soft-leave). Does NOT delete data.
 */
export async function leaveExam(): Promise<void> {
  const key = getKey();
  if (!key) return;

  _stopHeartbeat();

  try {
    await update(ref(db, `onlineUsers/${key}`), {
      status: "offline",
      lastSeen: Date.now(),
    });
  } catch {}
}

// ─── Internal Heartbeat Management ──────────────────────────────────────────

function _startHeartbeat() {
  _stopHeartbeat(); // clear any existing timer first

  // Fire every 30 seconds, but only accumulate when visible
  _lastTickAt = isTabVisible() ? Date.now() : null;
  _heartbeatTimer = setInterval(() => {
    sendHeartbeat().catch(() => {});
  }, 30000);

  // Also listen to visibility changes to pause/resume counting
  if (typeof document !== "undefined") {
    document.removeEventListener("visibilitychange", _handleVisibility);
    document.addEventListener("visibilitychange", _handleVisibility);
  }
}

function _stopHeartbeat() {
  if (_heartbeatTimer) {
    clearInterval(_heartbeatTimer);
    _heartbeatTimer = null;
  }
}

function _handleVisibility() {
  if (document.visibilityState === "visible") {
    // Tab came back — reset tick so we don't count the hidden gap
    _lastTickAt = Date.now();
    // Update status to active immediately
    updateUserStatus("active").catch(() => {});
    // Send a heartbeat right away with lastSeen refreshed (won't add gap time)
    sendHeartbeat().catch(() => {});
  } else {
    // Tab hidden — mark idle immediately (no time accumulated until visible again)
    updateUserStatus("idle").catch(() => {});
  }
}
