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

// Keys under /onlineUsers that are NOT actual users — they are system data nodes.
const SYSTEM_KEYS = new Set(["globalChat"]);

/**
 * Subscribes to the "onlineUsers" node in Firebase Realtime Database
 * and returns a live-updating array of online users.
 *
 * @param includeAll - If true, returns ALL users (for leaderboard/admin).
 *                     If false (default), returns only active, non-stale users.
 */
export function useOnlineUsers(includeAll = false): OnlineUser[] {
  const [rawUsers, setRawUsers] = useState<OnlineUser[]>([]);
  const [users, setUsers]       = useState<OnlineUser[]>([]);
  const [tick, setTick]         = useState(0);

  // ── Subscribe to Firebase ────────────────────────────────────────────────
  useEffect(() => {
    const usersRef = ref(db, "onlineUsers");

    const unsubscribe = onValue(
      usersRef,
      (snapshot) => {
        const data = snapshot.val();
        if (!data) {
          setRawUsers([]);
          return;
        }

        // Build a typed array — skip nulls at the source so no null leaks in
        const parsed: OnlineUser[] = [];

        for (const [id, entry] of Object.entries(data)) {
          // Skip system keys (e.g. globalChat)
          if (SYSTEM_KEYS.has(id)) continue;

          const e = entry as any;
          // Skip non-user nodes (must have a name field)
          if (!e || typeof e !== "object" || !e.name) continue;

          const user: OnlineUser = {
            id,
            name:                e.name              ?? "Unknown",
            joinedAt:            e.joinedAt           ?? 0,
            currentSessionStart: e.currentSessionStart,
            lastSeen:            e.lastSeen,
            status:              e.status             ?? "active",
            examStarted:         e.examStarted        ?? false,
            userAgent:           e.userAgent          ?? "Unknown",
            platform:            e.platform           ?? "Unknown",
            deviceModel:         e.deviceModel        ?? "Unknown",
            ip:                  e.ip                 ?? "Unknown",
            totalVisits:         e.totalVisits        ?? 1,
            totalStudyTime:      e.totalStudyTime     ?? 0,
            currentActivity:     e.currentActivity    ?? "Browsing Dashboard",
            isHidden:            e.isHidden           ?? false,
            history: e.history
              ? Object.entries(e.history)
                  .map(([, h]: [string, any]) => ({
                    action:    h?.action    ?? "Unknown",
                    timestamp: h?.timestamp ?? 0,
                  }))
                  .sort((a, b) => b.timestamp - a.timestamp)
              : [],
          };

          parsed.push(user);
        }

        setRawUsers(parsed);
      },
      (error) => {
        console.error("Error listening to online users:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  // ── Periodic tick to re-evaluate staleness every 15s ────────────────────
  useEffect(() => {
    if (includeAll) return;
    const interval = setInterval(() => setTick((t) => t + 1), 15000);
    return () => clearInterval(interval);
  }, [includeAll]);

  // ── Apply active-user filter ─────────────────────────────────────────────
  useEffect(() => {
    if (includeAll) {
      setUsers(rawUsers);
      return;
    }

    // A user is considered "live" if:
    //   - they are not hidden
    //   - their status is "active"
    //   - their lastSeen is within the last 90 seconds
    const STALE_THRESHOLD = 90_000; // ms
    const now = Date.now();

    const live = rawUsers.filter((user) => {
      if (user.isHidden) return false;
      if (user.status !== "active") return false;
      if (user.lastSeen && now - user.lastSeen > STALE_THRESHOLD) return false;
      return true;
    });

    setUsers(live);
  }, [rawUsers, tick, includeAll]);

  return users;
}
