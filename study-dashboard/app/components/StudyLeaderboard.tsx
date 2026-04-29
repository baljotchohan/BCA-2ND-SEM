"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Trophy, Medal, Target, Flame, TrendingUp } from "lucide-react";
import { useOnlineUsers } from "../hooks/useOnlineUsers";

export default function StudyLeaderboard() {
  const allUsers = useOnlineUsers(true); // Include everyone to rank them

  const leaderboard = useMemo(() => {
    return [...allUsers]
      .filter(u => u.totalStudyTime && u.totalStudyTime > 0)
      .sort((a, b) => (b.totalStudyTime || 0) - (a.totalStudyTime || 0))
      .slice(0, 5);
  }, [allUsers]);

  const formatDuration = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h ${minutes % 60}m`;
  };

  return (
    <div className="glass-panel rounded-3xl border border-white/5 p-6 bg-white/[0.01] shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-amber-500/10 transition-colors" />
      
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 rounded-2xl">
            <Trophy className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight">Hall of Fame</h2>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Top Contributors</p>
          </div>
        </div>
        <div className="bg-white/5 px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
          <TrendingUp className="w-3 h-3 text-cyan-400" />
          <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Live Ranking</span>
        </div>
      </div>

      <div className="space-y-3 relative z-10">
        {leaderboard.length > 0 ? (
          leaderboard.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                index === 0 
                  ? "bg-amber-500/5 border-amber-500/20 shadow-lg shadow-amber-900/10" 
                  : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04]"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  {index === 0 ? (
                    <div className="absolute -top-2 -left-2 rotate-[-20deg]">
                      <Medal className="w-5 h-5 text-amber-400 fill-amber-400/20" />
                    </div>
                  ) : (
                    <span className="absolute -left-1 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-600">
                      #{index + 1}
                    </span>
                  )}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-xs border ${
                    index === 0 ? "border-amber-500/40 bg-amber-500/20 text-amber-400" : "border-white/10 bg-white/5 text-slate-400"
                  }`}>
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                </div>
                <div>
                  <h4 className={`text-sm font-bold ${index === 0 ? "text-amber-200" : "text-slate-200"}`}>
                    {user.name}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-medium">Verified Student</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-sm font-black ${index === 0 ? "text-amber-400" : "text-slate-300"}`}>
                  {formatDuration(user.totalStudyTime || 0)}
                </p>
                <p className="text-[9px] text-slate-600 font-bold uppercase tracking-wider">Total Focus</p>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-10 border border-dashed border-white/5 rounded-3xl">
            <Target className="w-8 h-8 text-slate-700 mx-auto mb-3" />
            <p className="text-xs text-slate-500 font-medium italic">Ranking will update soon...</p>
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-white/5">
        <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
          <Flame className="w-3 h-3 text-orange-500" />
          <span>Competition is heating up</span>
        </div>
      </div>
    </div>
  );
}
