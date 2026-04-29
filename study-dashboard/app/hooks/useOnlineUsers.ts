import { useEffect, useState } from "react";
import { ref, onValue, off } from "firebase/database";
import { db } from "../lib/firebase";

export interface OnlineUser {
  id: string;
  name: string;
  joinedAt: number;
  status: "active" | "idle" | "offline";
  examStarted: boolean;
  userAgent?: string;
  platform?: string;
  deviceModel?: string;
  ip?: string;
  totalVisits?: number;
  history?: Array<{ action: string; timestamp: number }>;
  currentActivity?: string;
}

/**
 * Subscribes to the "onlineUsers" node in Firebase Realtime Database
 * and returns a live-updating array of online users.
 * Cleans up the listener on unmount.
 */
export function useOnlineUsers(includeIdle = false): OnlineUser[] {
  const [users, setUsers] = useState<OnlineUser[]>([]);

  useEffect(() => {
    const usersRef = ref(db, "onlineUsers");

    const unsubscribe = onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        setUsers([]);
        return;
      }
      // data is { [key: string]: { name: string, joinedAt: number, status: string } }
      const parsed: OnlineUser[] = Object.entries(data)
        .map(([id, entry]) => ({
          id,
          name: (entry as any).name,
          joinedAt: (entry as any).joinedAt,
          status: (entry as any).status || "active",
          examStarted: (entry as any).examStarted || false,
          userAgent: (entry as any).userAgent || "Unknown",
          platform: (entry as any).platform || "Unknown",
          deviceModel: (entry as any).deviceModel || "Unknown",
          ip: (entry as any).ip || "Unknown",
          totalVisits: (entry as any).totalVisits || 1,
          history: (entry as any).history || [],
          currentActivity: (entry as any).currentActivity || "Browsing Dashboard"
        }))
        .filter((user) => includeIdle || user.status === "active"); // Filter by active if not including idle
      setUsers(parsed);
    });

    // Cleanup: detach the listener
    return () => unsubscribe();
  }, []);

  return users;
}
