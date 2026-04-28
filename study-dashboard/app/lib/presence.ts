import { ref, set, onDisconnect, update, get, query, orderByChild, equalTo } from "firebase/database";
import { db } from "../lib/firebase";

/**
 * Writes/Updates the user in "onlineUsers/{uniqueKey}" in Firebase Realtime Database.
 * Returns the key used for the user.
 */
export async function joinExam(userName: string): Promise<string> {
  const usersRef = ref(db, "onlineUsers");
  let key = sessionStorage.getItem("presenceKey");

  // If no session key, check if a user with this name already exists
  if (!key) {
    const nameQuery = query(usersRef, orderByChild("name"), equalTo(userName.trim()));
    const snapshot = await get(nameQuery);
    
    if (snapshot.exists()) {
      // Re-use existing key for this name
      key = Object.keys(snapshot.val())[0];
    } else {
      // Generate new unique ID
      key = `user_${Math.random().toString(36).slice(2, 11)}`;
    }
    sessionStorage.setItem("presenceKey", key!);
  }

  const userRef = ref(db, `onlineUsers/${key}`);

  // Schedule auto-removal on disconnect
  await onDisconnect(userRef).remove();

  // Initial presence record
  await update(userRef, {
    name: userName.trim(),
    joinedAt: Date.now(),
    status: "active",
    examStarted: false
  });

  return key!;
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
    await update(userRef, updates);
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
}
