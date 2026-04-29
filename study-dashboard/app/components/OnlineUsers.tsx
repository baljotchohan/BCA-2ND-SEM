"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Wifi, Timer } from "lucide-react";
import { useOnlineUsers } from "../hooks/useOnlineUsers";

/**
 * Displays a live count and list of users currently studying/online.
 * Uses the useOnlineUsers hook which subscribes to Firebase Realtime Database.
 */
export default function OnlineUsers() {
  const [now, setNow] = useState(Date.now());
  const users = useOnlineUsers();

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 10000);
    return () => clearInterval(interval);
  }, []);

  // Filter out users that are stale based on the current 'now' ticker
  const activeUsers = users.filter(user => {
    const STALE_THRESHOLD = 90000;
    const isStale = user.lastSeen && (now - user.lastSeen > STALE_THRESHOLD);
    return !isStale;
  });

  const count = activeUsers.length;

  const formatDuration = (ms: number) => {
    if (!ms) return "0m";
    const minutes = Math.floor(ms / 60000);
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h ${minutes % 60}m`;
  };

  return (
    <div className="glass-panel rounded-3xl border border-white/5 p-5 space-y-5 bg-[#070707]/50 shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-3xl rounded-full -mr-12 -mt-12 group-hover:bg-emerald-500/10 transition-colors" />
      
      {/* Header */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
            <Wifi className="w-4 h-4 text-emerald-400" />
          </div>
          <span className="text-sm font-bold text-slate-200 tracking-tight">Active Pulse</span>
        </div>
        
        <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">
            {count} LIVE
          </span>
        </div>
      </div>

      {/* User list */}
      <div className="relative z-10">
        {count === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-6 border border-dashed border-white/10 rounded-2xl bg-white/[0.01]"
          >
            <p className="text-xs text-slate-500 font-medium italic">
              Station is empty. Start studying!
            </p>
          </motion.div>
        ) : (
          <ul className="space-y-2">
            <AnimatePresence initial={false} mode="popLayout">
              {activeUsers.slice(0, 8).map((user, i) => (
                <motion.li
                  key={`${user.name}-${user.joinedAt}`}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between gap-3 text-xs text-slate-300 bg-white/[0.02] hover:bg-white/[0.05] rounded-[1.25rem] px-4 py-3 border border-white/5 transition-all group/item"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-black flex items-center justify-center shrink-0 uppercase shadow-inner">
                      {user.name.charAt(0)}
                    </span>
                    <span className="font-bold truncate max-w-[100px]">{user.name}</span>
                  </div>
                  {user.totalStudyTime && user.totalStudyTime > 60000 && (
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 group-hover/item:text-cyan-400 transition-colors">
                      <Timer className="w-3 h-3" />
                      {formatDuration(user.totalStudyTime)}
                    </div>
                  )}
                </motion.li>
              ))}
            </AnimatePresence>
            {count > 8 && (
              <p className="text-[10px] text-center text-slate-500 font-bold uppercase tracking-widest pt-2">
                + {count - 8} more students
              </p>
            )}
          </ul>
        )}
      </div>

      <div className="pt-2 border-t border-white/5 relative z-10">
        <p className="text-[9px] text-slate-600 text-center font-bold uppercase tracking-widest leading-relaxed">
          Real-time metrics enabled <br/> 
          <span className="text-emerald-500/50">Tracking active engagement</span>
        </p>
      </div>
    </div>
  );
}
