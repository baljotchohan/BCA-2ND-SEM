import { useEffect, useState } from "react";
import { ref, onValue, off } from "firebase/database";
import { db } from "../lib/firebase";

export interface OnlineUser {
  id: string;
  name: string;
  joinedAt: number;
  status: "active" | "idle";
  examStarted: boolean;
}

/**
 * Subscribes to the "onlineUsers" node in Firebase Realtime Database
 * and returns a live-updating array of online users.
 * Cleans up the listener on unmount.
 */
export function useOnlineUsers(): OnlineUser[] {
  const [users, setUsers] = useState<OnlineUser[]>([]);

  useEffect(() => {
    const usersRef = ref(db, "onlineUsers");

    const unsubscribe = onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        setUsers([]);
        return;
      }
      // data is { [key: string]: { name: string, joinedAt: number } }
      const parsed: OnlineUser[] = Object.entries(data).map(([id, entry]) => ({
        id,
        name: (entry as any).name,
        joinedAt: (entry as any).joinedAt,
        status: (entry as any).status || "active",
        examStarted: (entry as any).examStarted || false,
      }));
      setUsers(parsed);
    });

    // Cleanup: detach the listener
    return () => off(usersRef);
  }, []);

  return users;
}
