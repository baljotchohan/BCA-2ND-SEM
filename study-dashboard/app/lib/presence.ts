import { ref, set, onDisconnect, update, get } from "firebase/database";
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

  try {
    // Schedule auto-removal on disconnect
    // Calling this safely (cancel any previous onDisconnect on this ref first just in case)
    await onDisconnect(userRef).cancel();
    await onDisconnect(userRef).remove();
  } catch (e) {
    console.error("Firebase onDisconnect error (safe to ignore in dev):", e);
  }

  // Initial presence record using set to ensure complete node creation
  await set(userRef, {
    name: userName.trim(),
    joinedAt: Date.now(),
    status: "active",
    examStarted: false
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
      const name = sessionStorage.getItem("examUserName");
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
  sessionStorage.removeItem("examUserName");
}
