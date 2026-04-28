"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Users, Wifi } from "lucide-react";
import { useOnlineUsers } from "../hooks/useOnlineUsers";

/**
 * Displays a live count and list of users currently studying/online.
 * Uses the useOnlineUsers hook which subscribes to Firebase Realtime Database.
 */
export default function OnlineUsers() {
  const users = useOnlineUsers();
  const count = users.length;

  return (
    <div className="glass-panel rounded-2xl border border-white/5 p-4 space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Wifi className="w-4 h-4 text-emerald-400" />
          <span className="text-sm font-medium text-slate-200">Studying Now</span>
        </div>
        {/* Live pill */}
        <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
            {count} live
          </span>
        </div>
      </div>

      {/* User list */}
      {count === 0 ? (
        <p className="text-xs text-slate-500 text-center py-2">
          No one online yet. Be the first!
        </p>
      ) : (
        <ul className="space-y-1.5">
          <AnimatePresence initial={false}>
            {users.map((user, i) => (
              <motion.li
                key={`${user.name}-${user.joinedAt}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ delay: i * 0.04 }}
                className="flex items-center gap-2 text-xs text-slate-300 bg-white/[0.03] rounded-lg px-3 py-2 border border-white/5"
              >
                {/* Avatar initial */}
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[9px] font-bold flex items-center justify-center shrink-0 uppercase">
                  {user.name.charAt(0)}
                </span>
                <span className="truncate">{user.name}</span>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}

      {/* Footer hint */}
      <p className="text-[10px] text-slate-600 text-center border-t border-white/5 pt-2">
        Auto-removed when tab closes
      </p>
    </div>
  );
}
