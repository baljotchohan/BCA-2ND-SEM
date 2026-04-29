import { useEffect, useState } from "react";
import { ref, onValue, off } from "firebase/database";
import { db } from "../lib/firebase";

export interface OnlineUser {
  id: string;
  name: string;
  joinedAt: number;
  currentSessionStart?: number;
  lastSeen?: number;
  status: "active" | "idle" | "offline";
  examStarted: boolean;
  userAgent?: string;
  platform?: string;
  deviceModel?: string;
  ip?: string;
  totalVisits?: number;
  totalStudyTime?: number;
  history?: Array<{ action: string; timestamp: number }>;
  currentActivity?: string;
  isHidden?: boolean;
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
          currentSessionStart: (entry as any).currentSessionStart,
          lastSeen: (entry as any).lastSeen,
          status: (entry as any).status || "active",
          examStarted: (entry as any).examStarted || false,
          userAgent: (entry as any).userAgent || "Unknown",
          platform: (entry as any).platform || "Unknown",
          deviceModel: (entry as any).deviceModel || "Unknown",
          ip: (entry as any).ip || "Unknown",
          totalVisits: (entry as any).totalVisits || 1,
          totalStudyTime: (entry as any).totalStudyTime || 0,
          history: (entry as any).history ? Object.entries((entry as any).history).map(([hid, h]: [string, any]) => ({
            action: h.action,
            timestamp: h.timestamp
          })).sort((a, b) => b.timestamp - a.timestamp) : [],
          currentActivity: (entry as any).currentActivity || "Browsing Dashboard",
          isHidden: (entry as any).isHidden || false
        }))
        .filter((user) => {
          const STALE_THRESHOLD = 90000; // 90 seconds
          const isStale = user.lastSeen && (Date.now() - user.lastSeen > STALE_THRESHOLD);
          
          if (includeIdle) return true; // Keep everything for admin
          return user.status === "active" && !isStale && !user.isHidden;
        });
      setUsers(parsed);
    });

    // Cleanup: detach the listener
    return () => unsubscribe();
  }, []);

  return users;
}
