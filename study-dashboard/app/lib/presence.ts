import { ref, set, onDisconnect, update } from "firebase/database";
import { db } from "../lib/firebase";

/**
 * Writes/Updates the user in "onlineUsers/{uniqueKey}" in Firebase Realtime Database.
 * Returns the key used for the user.
 */
export async function joinExam(userName: string): Promise<string> {
  let key = sessionStorage.getItem("presenceKey");

  // If no session key, generate a new unique ID
  if (!key) {
    key = `user_${Math.random().toString(36).slice(2, 11)}`;
    sessionStorage.setItem("presenceKey", key);
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
    // Schedule auto-removal on disconnect
    // Calling this safely (cancel any previous onDisconnect on this ref first just in case)
    await onDisconnect(userRef).cancel();
    // Instead of remove(), we update the status so the DB keeps a record!
    await onDisconnect(userRef).update({ status: "idle" });
  } catch (e) {
    console.error("Firebase onDisconnect error (safe to ignore in dev):", e);
  }

  // Initial presence record using set to ensure complete node creation
  await set(userRef, {
    name: userName.trim(),
    joinedAt: Date.now(),
    status: "active",
    examStarted: false,
    userAgent,
    platform,
    deviceModel,
    ip
  });

  return key;
}

/**
 * Updates the user's status (active/idle) or exam state.
 */
export async function updateUserStatus(status?: "active" | "idle", examStarted?: boolean): Promise<void> {
  const key = sessionStorage.getItem("presenceKey");
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
  const key = sessionStorage.getItem("presenceKey");
  if (!key) return;

  const { remove } = await import("firebase/database");
  const userRef = ref(db, `onlineUsers/${key}`);
  await remove(userRef);
  sessionStorage.removeItem("presenceKey");
  localStorage.removeItem("examUserName");
}
