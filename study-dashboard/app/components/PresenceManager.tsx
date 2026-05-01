"use client";
/**
 * PresenceManager — mounts on every page.
 *
 * Responsibilities:
 *  1. On mount: restore the session from localStorage and re-register with
 *     Firebase so navigation between pages does NOT mark the user offline.
 *  2. Send a heartbeat every 30s — but ONLY while the tab is visible.
 *  3. On visibility change: mark active/idle without accumulating time.
 *
 * This component renders nothing; it is purely a side-effect runner.
 */
import { useEffect } from "react";
import { joinExam, sendHeartbeat, updateUserStatus } from "../lib/presence";

export default function PresenceManager() {
  useEffect(() => {
    const userName = localStorage.getItem("examUserName_v2");
    const userId   = localStorage.getItem("persistentUserId_v2");

    if (!userName || !userId) return; // User hasn't entered their name yet

    // Re-join (upsert) on every navigation so Firebase's onDisconnect
    // is re-registered and status goes back to "active".
    joinExam(userName).catch(console.error);

    // Visibility handler — pause time counting when tab is hidden
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        updateUserStatus("active").catch(() => {});
        sendHeartbeat().catch(() => {});
      } else {
        updateUserStatus("idle").catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    // Heartbeat every 30s — presence.ts already skips hidden tabs
    const heartbeat = setInterval(() => {
      sendHeartbeat().catch(() => {});
    }, 30_000);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      clearInterval(heartbeat);
    };
  }, []);

  return null;
}
