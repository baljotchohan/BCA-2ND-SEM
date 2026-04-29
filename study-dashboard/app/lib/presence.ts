import { ref, set, onDisconnect, update } from "firebase/database";
import { db } from "../lib/firebase";

/**
 * Writes/Updates the user in "onlineUsers/{uniqueKey}" in Firebase Realtime Database.
 * Returns the key used for the user.
 */
export async function joinExam(userName: string): Promise<string> {
  const safeName = userName.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
  
  let key = "";
  if (typeof window !== 'undefined') {
    const savedId = localStorage.getItem("persistentStudentId");
    if (savedId && savedId.startsWith(`user_${safeName}`)) {
      key = savedId;
    } else {
      // Generate a new unique ID for this student/device
      const suffix = Math.random().toString(36).substring(2, 6);
      key = `user_${safeName}_${suffix}`;
      localStorage.setItem("persistentStudentId", key);
    }
    localStorage.setItem("persistentUserId", key);
  } else {
    key = `user_${safeName}`;
  }

  const userRef = ref(db, `onlineUsers/${key}`);

  let ip = "Unknown";
  try {
    const res = await fetch("https://api.ipify.org?format=json");
    const data = await res.json();
    if (data.ip) ip = data.ip;
  } catch (e) {
    console.warn("Failed to fetch IP", e);
  }

  const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : "Unknown";
  const platform = typeof navigator !== 'undefined' ? (navigator as any).platform || "Unknown" : "Unknown";
  
  let deviceModel = "Unknown";
  if (typeof window !== 'undefined') {
    // 1. Try to get exact model from User-Agent Client Hints API (Modern Android/Chrome)
    if ('userAgentData' in navigator) {
      try {
        const uaData: any = navigator.userAgentData;
        const highEntropy = await uaData.getHighEntropyValues(['model']);
        if (highEntropy.model) {
          deviceModel = highEntropy.model;
        }
      } catch (e) {}
    }

    // 2. Fallback to Regex extraction from User Agent string
    if (deviceModel === "Unknown" && userAgent !== "Unknown") {
      const androidMatch = userAgent.match(/Android [^;]+; ([^;]+)\s+Build/);
      if (androidMatch && androidMatch[1]) {
        deviceModel = androidMatch[1].trim(); // e.g., "SM-G998B" or "Redmi Note 8"
      } else if (userAgent.includes('iPhone')) {
        // iOS hides the exact model (e.g. iPhone 12 vs 13) in the User Agent.
        // The best we can do is specify the screen resolution to differentiate users.
        deviceModel = `iPhone (${window.screen.width}x${window.screen.height})`;
      } else if (userAgent.includes('iPad')) {
        deviceModel = `iPad (${window.screen.width}x${window.screen.height})`;
      } else if (userAgent.includes('Macintosh') || userAgent.includes('Mac OS X')) {
        deviceModel = "Mac / MacBook";
      } else if (userAgent.includes('Windows NT 10.0')) {
        deviceModel = "Windows 10/11 PC";
      } else if (userAgent.includes('Windows')) {
        deviceModel = "Windows PC";
      }
    }
  }

  try {
    // Schedule auto-status change on disconnect
    await onDisconnect(userRef).cancel();
    // Use 'offline' instead of 'idle' for actual tab closure
    await onDisconnect(userRef).update({ status: "offline", lastActive: Date.now() });
  } catch (e) {
    console.error("Firebase onDisconnect error (safe to ignore in dev):", e);
  }

  // Fetch existing data to keep history and increment visits
  const { get } = await import("firebase/database");
  const snapshot = await get(userRef);
  
  const existingData = snapshot.exists() ? snapshot.val() : {};
  let totalVisits = (existingData.totalVisits || 0) + 1;
  let firstSeen = existingData.firstSeen || Date.now();
  let history: any[] = existingData.history || [];
  
  if (snapshot.exists()) {
    // Add login event
    history.push({ action: "Logged In", timestamp: Date.now() });
    if (history.length > 50) history = history.slice(history.length - 50);
  } else {
    history = [{ action: "First Visit", timestamp: Date.now() }];
  }

  const now = Date.now();
  const readableNow = new Date(now).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const readableFirstSeen = new Date(firstSeen).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  // Initial presence record using update to preserve existing fields like 'history' if we just updated it
  await update(userRef, {
    name: userName.trim(),
    joinedAt: firstSeen, 
    joinedAtReadable: readableFirstSeen,
    currentSessionStart: now,
    currentSessionStartReadable: readableNow,
    lastActive: now,
    lastActiveReadable: readableNow,
    lastSeen: now,
    lastSeenReadable: readableNow,
    firstSeen,
    totalVisits,
    totalStudyTime: existingData.totalStudyTime || 0,
    status: "active",
    examStarted: false,
    userAgent,
    platform,
    deviceModel,
    ip
  });

  // Log the visit in history
  const historyRef = ref(db, `onlineUsers/${key}/history`);
  const { push } = await import("firebase/database");
  await push(historyRef, {
    action: "Logged In",
    timestamp: Date.now(),
    ip,
    device: deviceModel
  });

  return key;
}

/**
 * Tracks when a user views a specific page or takes an action
 */
export async function trackActivity(actionName: string): Promise<void> {
  const key = typeof window !== 'undefined' ? localStorage.getItem("persistentUserId") : null;
  if (!key) return;

  const userRef = ref(db, `onlineUsers/${key}`);
  const historyRef = ref(db, `onlineUsers/${key}/history`);
  const { push } = await import("firebase/database");
  
  try {
    // 1. Log to history (atomic push)
    await push(historyRef, {
      action: actionName,
      timestamp: Date.now()
    });

    const now = Date.now();
    const readableNow = new Date(now).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // 2. Update status
    await update(userRef, { 
      lastActive: now,
      lastActiveReadable: readableNow,
      lastSeen: now,
      lastSeenReadable: readableNow,
      currentActivity: actionName
    });
  } catch (e) {
    console.warn("Failed to track activity:", e);
  }
}

/**
 * Updates the 'lastSeen' timestamp periodically (Heartbeat)
 * Also increments totalStudyTime based on elapsed time
 */
export async function sendHeartbeat(): Promise<void> {
  const key = typeof window !== 'undefined' ? localStorage.getItem("persistentUserId") : null;
  if (!key) return;

  const userRef = ref(db, `onlineUsers/${key}`);
  const { get, increment } = await import("firebase/database");
  
  try {
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const now = Date.now();
      const lastSeen = data.lastSeen || now;
      const elapsed = now - lastSeen;

      const readableNow = new Date(now).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

      // Only increment if elapsed time is reasonable (e.g., less than 5 minutes)
      // to avoid jumping time if a laptop wakes up from sleep
      if (elapsed > 0 && elapsed < 300000) {
        await update(userRef, {
          lastSeen: now,
          lastSeenReadable: readableNow,
          totalStudyTime: increment(elapsed)
        });
      } else {
        await update(userRef, { 
          lastSeen: now,
          lastSeenReadable: readableNow
        });
      }
    }
  } catch (e) {
    console.warn("Heartbeat failed:", e);
  }
}

/**
 * Updates the user's status (active/idle) or exam state.
 */
export async function updateUserStatus(status?: "active" | "idle", examStarted?: boolean): Promise<void> {
  const key = typeof window !== 'undefined' ? localStorage.getItem("persistentUserId") : null;
  if (!key) return;

  const userRef = ref(db, `onlineUsers/${key}`);
  const updates: any = {};
  if (status) {
    const now = Date.now();
    updates.status = status;
    updates.lastSeen = now;
    updates.lastSeenReadable = new Date(now).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  }
  if (examStarted !== undefined) updates.examStarted = examStarted;

  if (Object.keys(updates).length > 0) {
    try {
      await update(userRef, updates);
    } catch (e) {
      console.warn("Failed to update status, node might be deleted. Re-joining...", e);
      // If update fails due to validation (missing parent node), recreate it!
      const name = localStorage.getItem("examUserName");
      if (name) {
        await joinExam(name);
      }
    }
  }
}

/**
 * Checks if a user exists in the database.
 */
export async function validateSession(userId: string): Promise<boolean> {
  if (!userId) return false;
  try {
    const { get } = await import("firebase/database");
    const userRef = ref(db, `onlineUsers/${userId}`);
    const snapshot = await get(userRef);
    return snapshot.exists();
  } catch (e) {
    console.error("Failed to validate session:", e);
    return false;
  }
}

/**
 * Manually removes a user from the onlineUsers node.
 */
export async function leaveExam(): Promise<void> {
  const key = typeof window !== 'undefined' ? localStorage.getItem("persistentUserId") : null;
  if (!key) return;

  const { remove } = await import("firebase/database");
  const userRef = ref(db, `onlineUsers/${key}`);
  await remove(userRef);
  if (typeof window !== 'undefined') {
    localStorage.removeItem("persistentUserId");
    localStorage.removeItem("examUserName");
    localStorage.removeItem("persistentStudentId");
  }
}
