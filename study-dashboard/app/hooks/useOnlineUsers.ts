import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
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
 * 
 * @param includeAll - If true, returns ALL users (for leaderboard/admin).
 *                     If false (default), returns only currently active + non-stale users.
 */
export function useOnlineUsers(includeAll = false): OnlineUser[] {
  const [rawUsers, setRawUsers] = useState<OnlineUser[]>([]);
  const [users, setUsers] = useState<OnlineUser[]>([]);
  const [tick, setTick] = useState(0);

  // Subscribe to Firebase data
  useEffect(() => {
    const usersRef = ref(db, "onlineUsers");

    const unsubscribe = onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        setRawUsers([]);
        return;
      }
      
      const parsed: OnlineUser[] = Object.entries(data)
        .map(([id, entry]) => {
          const e = entry as any;
          return {
            id,
            name: e.name || "Unknown",
            joinedAt: e.joinedAt || 0,
            currentSessionStart: e.currentSessionStart,
            lastSeen: e.lastSeen,
            status: e.status || "active",
            examStarted: e.examStarted || false,
            userAgent: e.userAgent || "Unknown",
            platform: e.platform || "Unknown",
            deviceModel: e.deviceModel || "Unknown",
            ip: e.ip || "Unknown",
            totalVisits: e.totalVisits || 1,
            totalStudyTime: e.totalStudyTime || 0,
            history: e.history ? Object.entries(e.history).map(([, h]: [string, any]) => ({
              action: h.action,
              timestamp: h.timestamp
            })).sort((a, b) => b.timestamp - a.timestamp) : [],
            currentActivity: e.currentActivity || "Browsing Dashboard",
            isHidden: e.isHidden || false,
          };
        });
      setRawUsers(parsed);
    }, (error) => {
      console.error("Error listening to online users:", error);
    });

    return () => unsubscribe();
  }, []);

  // Periodic tick to re-evaluate staleness
  useEffect(() => {
    if (includeAll) return; // No need to tick for leaderboard
    const interval = setInterval(() => setTick(t => t + 1), 15000);
    return () => clearInterval(interval);
  }, [includeAll]);

  // Apply filtering based on tick and includeAll
  useEffect(() => {
    if (includeAll) {
      setUsers(rawUsers);
      return;
    }

    const STALE_THRESHOLD = 90000; // 90 seconds
    const now = Date.now();
    
    const filtered = rawUsers.filter((user) => {
      if (user.isHidden) return false;
      const isStale = user.lastSeen && (now - user.lastSeen > STALE_THRESHOLD);
      return user.status === "active" && !isStale;
    });
    
    setUsers(filtered);
  }, [rawUsers, tick, includeAll]);

  return users;
}
