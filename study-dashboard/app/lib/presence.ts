import { ref, set, onDisconnect, update } from "firebase/database";
import { db } from "../lib/firebase";

/**
 * Writes/Updates the user in "onlineUsers/{uniqueKey}" in Firebase Realtime Database.
 * Returns the key used for the user.
 */
export async function joinExam(userName: string): Promise<string> {
  // Create a predictable key based on the user's name so multiple devices or 
  // sessions with the same name update the same database record instead of creating duplicates.
  const safeName = userName.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
  const key = `user_${safeName}`;

  if (typeof window !== 'undefined') {
    localStorage.setItem("persistentUserId", key);
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
  
  let totalVisits = 1;
  let firstSeen = Date.now();
  let history: any[] = [];
  
  if (snapshot.exists()) {
    const data = snapshot.val();
    totalVisits = (data.totalVisits || 0) + 1;
    firstSeen = data.firstSeen || Date.now();
    history = data.history || [];
    
    // Add login event
    history.push({ action: "Logged In", timestamp: Date.now() });
    if (history.length > 50) history = history.slice(history.length - 50);
  } else {
    history = [{ action: "First Visit", timestamp: Date.now() }];
  }

  // Initial presence record using update to preserve existing fields like 'history' if we just updated it
  await update(userRef, {
    name: userName.trim(),
    joinedAt: firstSeen, // Keep the very first join time for this identity
    currentSessionStart: Date.now(),
    lastActive: Date.now(),
    lastSeen: Date.now(),
    firstSeen,
    totalVisits,
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

    // 2. Update status
    await update(userRef, { 
      lastActive: Date.now(),
      lastSeen: Date.now(),
      currentActivity: actionName
    });
  } catch (e) {
    console.warn("Failed to track activity:", e);
  }
}

/**
 * Updates the 'lastSeen' timestamp periodically (Heartbeat)
 */
export async function sendHeartbeat(): Promise<void> {
  const key = typeof window !== 'undefined' ? localStorage.getItem("persistentUserId") : null;
  if (!key) return;

  const userRef = ref(db, `onlineUsers/${key}`);
  try {
    await update(userRef, { lastSeen: Date.now() });
  } catch (e) {}
}

/**
 * Updates the user's status (active/idle) or exam state.
 */
export async function updateUserStatus(status?: "active" | "idle", examStarted?: boolean): Promise<void> {
  const key = typeof window !== 'undefined' ? localStorage.getItem("persistentUserId") : null;
  if (!key) return;

  const userRef = ref(db, `onlineUsers/${key}`);
  const updates: any = {};
  if (status) updates.status = status;
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
  }
}
