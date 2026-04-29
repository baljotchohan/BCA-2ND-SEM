"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Trash2,
  Clock,
  Activity,
  ShieldCheck,
  Lock,
  ArrowLeft,
  AlertCircle,
  MonitorSmartphone,
  ChevronDown,
  ChevronUp,
  History
} from "lucide-react";
import React, { Fragment } from "react";
import Link from "next/link";
import { ref, remove } from "firebase/database";
import { db } from "../lib/firebase";
import { useOnlineUsers, OnlineUser } from "../hooks/useOnlineUsers";

export default function AdminDashboard() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const users = useOnlineUsers(true); // true to include idle users
  const [expandedUserId, setExpandedUserId] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "baljot2007") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid password");
    }
  };

  // Persistent dashboard - users stay in list until manually removed


  const removeUser = async (id: string) => {
    if (confirm("Are you sure you want to remove this user?")) {
      await remove(ref(db, `onlineUsers/${id}`));
    }
  };

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const calculateDuration = (joinedAt: number, status?: string, lastSeen?: number) => {
    const end = (status === "offline" && lastSeen) ? lastSeen : Date.now();
    const minutes = Math.floor((end - joinedAt) / 60000);
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h ${minutes % 60}m`;
  };

  const getBrowserInfo = (user: OnlineUser) => {
    const ua = user.userAgent;
    if (!ua || ua === "Unknown") return user.deviceModel !== "Unknown" ? user.deviceModel : "Unknown Device";
    
    let browser = "Unknown Browser";
    if (ua.includes("Firefox")) browser = "Firefox";
    else if (ua.includes("SamsungBrowser")) browser = "Samsung Internet";
    else if (ua.includes("Opera") || ua.includes("OPR")) browser = "Opera";
    else if (ua.includes("Trident")) browser = "IE";
    else if (ua.includes("Edge") || ua.includes("Edg")) browser = "Edge";
    else if (ua.includes("Chrome")) browser = "Chrome";
    else if (ua.includes("Safari")) browser = "Safari";

    let os = "Unknown OS";
    if (ua.includes("Win")) os = "Windows";
    else if (ua.includes("like Mac")) os = "iOS";
    else if (ua.includes("Mac")) os = "MacOS";
    else if (ua.includes("Android")) os = "Android";
    else if (ua.includes("Linux")) os = "Linux";

    const baseInfo = `${os} • ${browser}`;
    
    // If we successfully extracted a specific device model, show it alongside!
    if (user.deviceModel && user.deviceModel !== "Unknown") {
      return `${user.deviceModel} (${browser})`;
    }

    return baseInfo;
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel border border-white/10 rounded-3xl p-8 w-full max-w-sm text-center space-y-6"
        >
          <div className="mx-auto w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <Lock className="w-8 h-8 text-emerald-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Admin Access</h1>
            <p className="text-sm text-slate-400">Enter password to manage users</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-all"
              autoFocus
            />
            {error && <p className="text-xs text-red-400 flex items-center justify-center gap-1"><AlertCircle className="w-3 h-3" /> {error}</p>}
            <button className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all shadow-lg shadow-emerald-900/20">
              Login
            </button>
          </form>
          <Link href="/" className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-white transition-colors">
            <ArrowLeft className="w-3 h-3" /> Back to Dashboard
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#f8fafc] p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-3">
                <ShieldCheck className="text-emerald-400" /> Admin Dashboard
              </h1>
              <p className="text-slate-400 text-sm">Real-time presence management</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="glass-panel border border-white/5 rounded-2xl px-6 py-3 flex items-center gap-3">
              <Users className="text-emerald-400 w-5 h-5" />
              <div>
                <div className="text-2xl font-bold">{users.filter(u => u.status === "active").length}</div>
                <div className="text-[10px] text-emerald-500 uppercase tracking-wider font-bold">Online Now</div>
              </div>
            </div>

            <div className="glass-panel border border-white/5 rounded-2xl px-6 py-3 flex items-center gap-3">
              <Activity className="text-slate-400 w-5 h-5" />
              <div>
                <div className="text-2xl font-bold">{users.length}</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Total Tracked</div>
              </div>
            </div>
          </div>
        </header>

        <div className="glass-panel border border-white/5 rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Name</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Device & IP</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Last Seen</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Status & Visits</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Live Activity</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Session / Total</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <AnimatePresence>
                  {users.map((user) => (
                    <Fragment key={user.id}>
                      <motion.tr
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="hover:bg-white/[0.02] transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold uppercase text-xs">
                              {user.name.charAt(0)}
                            </div>
                            <span className="font-medium">{user.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-1">
                            <span className="text-[11px] font-medium text-slate-300 flex items-center gap-1.5">
                              <MonitorSmartphone className="w-3 h-3 text-slate-400" />
                              {getBrowserInfo(user)}
                            </span>
                            <span className="text-[10px] text-slate-500 font-mono tracking-wider">
                              {user.ip !== "Unknown" ? user.ip : (user.platform || 'Unknown')}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-400">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 text-white font-medium">
                              <Clock className="w-3.5 h-3.5 text-emerald-400" /> {formatTime((user as any).lastSeen || user.joinedAt)}
                            </div>
                            <div className="text-[10px] text-slate-500 uppercase ml-5">
                              Joined {new Date(user.joinedAt).toLocaleDateString()}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-2">
                            <span className={`w-max inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
                                user.status === "active"
                                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                                  : user.status === "idle"
                                  ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                                  : "bg-slate-500/10 text-slate-400 border-white/10"
                              }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${
                                user.status === "active" 
                                  ? "bg-emerald-400 animate-pulse" 
                                  : user.status === "idle"
                                  ? "bg-amber-400"
                                  : "bg-slate-500"
                              }`} />
                              {user.status}
                            </span>
                            <span className="text-[10px] text-slate-400 font-medium">
                              {user.totalVisits} Total Visits
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-1 max-w-[200px]">
                            <span className="text-[11px] font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2 py-1 rounded-md uppercase w-max truncate">
                              {user.currentActivity || (user.examStarted ? "Exam In Progress" : "Browsing")}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-400">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 text-cyan-400">
                              <Activity className="w-3.5 h-3.5" /> {calculateDuration((user as any).currentSessionStart || user.joinedAt, user.status, (user as any).lastSeen)}
                            </div>
                            <div className="text-[10px] text-slate-500 ml-5">
                              Total: {calculateDuration(user.joinedAt, user.status, (user as any).lastSeen)}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button
                            onClick={() => setExpandedUserId(expandedUserId === user.id ? null : user.id)}
                            className="p-2 text-emerald-400 hover:bg-emerald-400/10 rounded-lg transition-all mr-2"
                            title={expandedUserId === user.id ? "Hide History" : "View History"}
                          >
                            {expandedUserId === user.id ? <ChevronUp className="w-4 h-4" /> : <History className="w-4 h-4" />}
                          </button>
                          <button
                            onClick={() => removeUser(user.id)}
                            className="p-2 text-slate-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
                            title="Remove User"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </motion.tr>
                      {expandedUserId === user.id && (
                        <motion.tr
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="bg-white/[0.01]"
                        >
                          <td colSpan={7} className="px-6 py-6 border-t border-white/5">
                            <div className="flex flex-col gap-4">
                              <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                                <History className="w-4 h-4 text-emerald-400" /> Activity History
                              </h4>
                              {user.history && user.history.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                  {user.history.map((h, i) => (
                                    <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl p-3 border border-white/5">
                                      <div className="mt-0.5 w-2 h-2 rounded-full bg-emerald-500/50" />
                                      <div className="flex flex-col">
                                        <span className="text-xs font-medium text-slate-200">{h.action}</span>
                                        <span className="text-[10px] text-slate-500">{new Date(h.timestamp).toLocaleString()}</span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <p className="text-xs text-slate-500 italic">No history available for this user.</p>
                              )}
                            </div>
                          </td>
                        </motion.tr>
                      )}
                    </Fragment>
                  ))}
                </AnimatePresence>
                {users.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-slate-500 italic">
                      No online users currently tracking
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
