"use client";

import { useState, useEffect, useMemo } from "react";
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
  ChevronRight,
  History,
  LayoutDashboard,
  Search,
  Timer,
  Smartphone,
  Globe,
  MoreVertical,
  LogOut,
  Zap,
  User,
  ExternalLink,
  MessageSquare,
  Archive
} from "lucide-react";
import React, { Fragment } from "react";
import Link from "next/link";
import { ref, remove, update, get, set } from "firebase/database";
import { db } from "../lib/firebase";
import { useOnlineUsers, OnlineUser } from "../hooks/useOnlineUsers";

export default function AdminDashboard() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const users = useOnlineUsers(true); // true to include idle/offline users
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [now, setNow] = useState(Date.now());

  // Force re-render every 5 seconds to update "time ago" and "stale" status
  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 5000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "baljot2007") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid password");
    }
  };

  const toggleHideUser = async (id: string, currentHidden: boolean) => {
    await update(ref(db, `onlineUsers/${id}`), { isHidden: !currentHidden });
  };

  const removeUser = async (id: string) => {
    if (confirm("DANGER: This will permanently DELETE this student's data. They will have to re-enter their name if they return. Proceed?")) {
      await remove(ref(db, `onlineUsers/${id}`));
      if (selectedUserId === id) setSelectedUserId(null);
    }
  };

  const clearAllUsers = async () => {
    if (confirm("DANGER: This will permanently delete ALL student data. This cannot be undone. Proceed?")) {
      await remove(ref(db, "onlineUsers"));
      setSelectedUserId(null);
    }
  };

  const clearGlobalChat = async () => {
    if (confirm("Are you sure you want to clear ALL global chat messages?")) {
      await remove(ref(db, "onlineUsers/globalChat/messages"));
      await remove(ref(db, "onlineUsers/globalChat/typing"));
    }
  };

  const archiveSession = async () => {
    if (confirm("Archive current live session to memory? This will save all current data and start a fresh session.")) {
      try {
        const usersRef = ref(db, "onlineUsers");
        const snapshot = await get(usersRef);
        
        if (snapshot.exists()) {
          const data = snapshot.val();
          const timestamp = Date.now();
          const archiveRef = ref(db, `archives/session_${timestamp}`);
          
          await set(archiveRef, {
            timestamp,
            date: new Date().toISOString(),
            data: data
          });
          
          await remove(usersRef);
          setSelectedUserId(null);
          alert("Session successfully archived! Live database is now clean.");
        } else {
          alert("No data to archive.");
        }
      } catch (err) {
        console.error("Archive failed:", err);
        alert("Failed to archive data. Check Firebase permissions.");
      }
    }
  };

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatFullDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString([], { 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatDuration = (ms: number) => {
    if (!ms) return "0m";
    const minutes = Math.floor(ms / 60000);
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours < 24) return `${hours}h ${mins}m`;
    const days = Math.floor(hours / 24);
    return `${days}d ${hours % 24}h`;
  };

  const calculateDuration = (startTime: number, status?: string, lastSeen?: number) => {
    const STALE_THRESHOLD = 90000; // 90 seconds
    const isStale = lastSeen && (now - lastSeen > STALE_THRESHOLD);
    
    const end = (status === "offline" || isStale) && lastSeen ? lastSeen : now;
    if (end < startTime) return "0m";

    const minutes = Math.floor((end - startTime) / 60000);
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h ${minutes % 60}m`;
  };

  const getBrowserInfo = (user: OnlineUser) => {
    const ua = user.userAgent;
    if (!ua || ua === "Unknown") return user.deviceModel !== "Unknown" ? user.deviceModel : "Unknown Device";
    
    let browser = "Unknown";
    if (ua.includes("Firefox")) browser = "Firefox";
    else if (ua.includes("SamsungBrowser")) browser = "Samsung";
    else if (ua.includes("Opera") || ua.includes("OPR")) browser = "Opera";
    else if (ua.includes("Edge") || ua.includes("Edg")) browser = "Edge";
    else if (ua.includes("Chrome")) browser = "Chrome";
    else if (ua.includes("Safari")) browser = "Safari";

    let os = "Unknown";
    if (ua.includes("Win")) os = "Windows";
    else if (ua.includes("like Mac")) os = "iOS";
    else if (ua.includes("Mac")) os = "MacOS";
    else if (ua.includes("Android")) os = "Android";
    else if (ua.includes("Linux")) os = "Linux";

    return { os, browser, model: user.deviceModel };
  };

  const filteredUsers = useMemo(() => {
    return users.filter(u => 
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (u.ip || "").includes(searchQuery)
    ).sort((a, b) => {
      // Sort by active first, then by last seen
      if (a.status === "active" && b.status !== "active") return -1;
      if (a.status !== "active" && b.status === "active") return 1;
      return (b.lastSeen || 0) - (a.lastSeen || 0);
    });
  }, [users, searchQuery]);

  const stats = useMemo(() => {
    const active = users.filter(u => {
      const isStale = u.lastSeen && (now - u.lastSeen > 90000);
      return u.status === "active" && !isStale;
    }).length;

    const totalTime = users.reduce((acc, u) => acc + (u.totalStudyTime || 0), 0);
    const totalVisits = users.reduce((acc, u) => acc + (u.totalVisits || 0), 0);

    return { active, totalTime, totalVisits, totalUsers: users.length };
  }, [users]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 selection:bg-emerald-500/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_50%)]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel border border-white/10 rounded-[2.5rem] p-10 w-full max-w-md text-center space-y-8 relative z-10 backdrop-blur-2xl shadow-2xl"
        >
          <div className="mx-auto w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center shadow-inner">
            <ShieldCheck className="w-10 h-10 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Access Control</h1>
            <p className="text-slate-400 mt-2 text-sm">Security credentials required for terminal access</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-emerald-400 transition-colors" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Secure Key"
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 transition-all placeholder:text-slate-600"
                autoFocus
              />
            </div>
            {error && (
              <motion.p 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }}
                className="text-xs text-red-400 flex items-center justify-center gap-2"
              >
                <AlertCircle className="w-3.5 h-3.5" /> {error}
              </motion.p>
            )}
            <button className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-[0_8px_30px_rgb(5,150,105,0.2)] active:scale-[0.98]">
              Authenticate Session
            </button>
          </form>
          <Link href="/" className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-white transition-colors group">
            <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" /> Return to Terminal
          </Link>
        </motion.div>
      </div>
    );
  }

  const selectedUser = users.find(u => u.id === selectedUserId);

  return (
    <div className="min-h-screen bg-[#050505] text-[#f8fafc] flex flex-col md:flex-row selection:bg-cyan-500/30">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-72 border-r border-white/5 bg-[#070707] p-6 flex flex-col gap-8 shrink-0">
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Zap className="w-6 h-6 text-white fill-current" />
          </div>
          <div>
            <h2 className="font-bold text-xl tracking-tight">ANTIGRAVITY</h2>
            <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-[0.2em]">Command Center</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium shadow-sm transition-all">
            <LayoutDashboard className="w-5 h-5 text-emerald-400" /> Dashboard
          </button>
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-white/5 hover:text-white transition-all">
            <Users className="w-5 h-5" /> All Students
          </button>
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-white/5 hover:text-white transition-all">
            <History className="w-5 h-5" /> System Logs
          </button>
          <button 
            onClick={archiveSession}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-indigo-400 hover:bg-indigo-500/10 hover:text-indigo-300 transition-all mt-4 border border-dashed border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.1)]"
          >
            <Archive className="w-5 h-5" /> Archive to Memory
          </button>
          <button 
            onClick={clearAllUsers}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-500/70 hover:bg-red-500/10 hover:text-red-400 transition-all border border-dashed border-red-500/20 mt-2"
          >
            <Trash2 className="w-5 h-5" /> Clear All Data
          </button>
          <button 
            onClick={clearGlobalChat}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-orange-500/70 hover:bg-orange-500/10 hover:text-orange-400 transition-all border border-dashed border-orange-500/20 mt-2"
          >
            <MessageSquare className="w-5 h-5" /> Clear Global Chat
          </button>
        </nav>

        <div className="mt-auto space-y-4">
          <div className="glass-panel border border-white/5 rounded-2xl p-4 bg-emerald-500/5">
            <p className="text-[10px] text-emerald-500/70 font-bold uppercase tracking-widest mb-2">System Status</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-300">Live Engine</span>
              <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online
              </span>
            </div>
          </div>
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-white/5 text-slate-400 hover:text-red-400 hover:bg-red-400/5 transition-all text-sm font-medium"
          >
            <LogOut className="w-4 h-4" /> Terminate Access
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col md:h-screen md:overflow-hidden bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.03),transparent_50%)]">
        {/* Header Bar */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-4 md:px-8 bg-black/20 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-6 flex-1 max-w-2xl">
            <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-emerald-400 transition-colors" />
              <input 
                type="text" 
                placeholder="Search by student name or IP..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-2.5 text-sm focus:outline-none focus:border-white/20 transition-all placeholder:text-slate-600"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/" className="px-4 py-2 rounded-xl border border-white/10 text-xs font-bold hover:bg-white/5 transition-all">
              LIVE SITE
            </Link>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center p-[1px]">
              <div className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center overflow-hidden">
                <User className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Active Now", value: stats.active, icon: Activity, color: "text-emerald-400", bg: "bg-emerald-400/10" },
                { label: "Total Students", value: stats.totalUsers, icon: Users, color: "text-blue-400", bg: "bg-blue-400/10" },
                { label: "Total Study Time", value: formatDuration(stats.totalTime), icon: Timer, color: "text-amber-400", bg: "bg-amber-400/10" },
                { label: "Site Visits", value: stats.totalVisits, icon: Zap, color: "text-cyan-400", bg: "bg-cyan-400/10" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel border border-white/5 p-6 rounded-[2rem] flex items-center gap-5 hover:border-white/10 transition-all group"
                >
                  <div className={`w-14 h-14 rounded-2xl ${stat.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <stat.icon className={`w-7 h-7 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-white tracking-tight">{stat.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Students List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <Activity className="w-5 h-5 text-emerald-400" /> Live Traffic
                  <span className="text-[10px] bg-white/5 text-slate-400 px-2 py-1 rounded-md ml-2">{filteredUsers.length} Recorded</span>
                </h3>
                <div className="flex gap-2">
                  <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[10px] font-bold text-slate-400">STATUS: ALL</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                <AnimatePresence mode="popLayout">
                  {filteredUsers.map((user) => {
                    const STALE_THRESHOLD = 90000;
                    const isStale = user.lastSeen && (now - user.lastSeen > STALE_THRESHOLD);
                    const effectiveStatus = isStale ? "offline" : user.status;
                    const browser = getBrowserInfo(user);

                    return (
                      <motion.div
                        layout
                        key={user.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        whileHover={{ y: -4 }}
                        onClick={() => setSelectedUserId(user.id)}
                        className={`glass-panel border group cursor-pointer relative overflow-hidden transition-all rounded-[2rem] p-6 ${
                          selectedUserId === user.id ? 'border-emerald-500/50 ring-1 ring-emerald-500/20' : 'border-white/5 hover:border-white/10'
                        }`}
                      >
                        {/* Status Indicator Bar */}
                        <div className={`absolute top-0 left-0 w-full h-1 ${
                          effectiveStatus === "active" ? "bg-emerald-500" : effectiveStatus === "idle" ? "bg-amber-500" : "bg-slate-700"
                        }`} />

                        <div className="flex justify-between items-start mb-6">
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg uppercase shadow-inner ${
                              effectiveStatus === "active" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-slate-800 text-slate-500 border border-white/5"
                            }`}>
                              {user.name.charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-bold text-white text-lg leading-tight truncate max-w-[150px]">{user.name}</h4>
                              <div className="flex flex-col gap-0.5 mt-1">
                                <p className="text-[9px] text-emerald-500/60 font-mono tracking-tighter uppercase font-bold">
                                  UUID: {user.id.split('_').pop()}
                                </p>
                                <p className="text-[10px] text-slate-500 font-mono flex items-center gap-1">
                                  <Globe className="w-2.5 h-2.5" /> {user.ip || 'Hidden IP'}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <div className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                              effectiveStatus === "active" ? "bg-emerald-500/10 text-emerald-400" : effectiveStatus === "idle" ? "bg-amber-500/10 text-amber-400" : "bg-white/5 text-slate-500"
                            }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${
                                effectiveStatus === "active" ? "bg-emerald-400 animate-pulse" : effectiveStatus === "idle" ? "bg-amber-400" : "bg-slate-600"
                              }`} />
                              {isStale ? "Away" : user.status}
                            </div>
                            <span className="text-[9px] text-slate-600 font-bold uppercase tracking-tighter">
                              Joined {new Date(user.joinedAt).toLocaleDateString()}
                            </span>
                            {(user as any).isHidden && (
                              <span className="text-[8px] bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded font-black uppercase">Hidden</span>
                            )}
                          </div>
                        </div>

                        <div className="space-y-4">
                          {/* Current Activity */}
                          <div className="bg-black/40 border border-white/5 rounded-2xl p-3">
                            <p className="text-[9px] text-slate-500 uppercase font-bold tracking-widest mb-1.5">Last Seen Doing</p>
                            <p className="text-xs text-cyan-400 font-medium line-clamp-1 flex items-center gap-2">
                              <ExternalLink className="w-3 h-3" /> {user.currentActivity || "Browsing Hub"}
                            </p>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-3">
                              <p className="text-[9px] text-slate-500 uppercase font-bold tracking-widest mb-1">Total Time</p>
                              <p className="text-sm font-bold text-white flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                                {formatDuration(user.totalStudyTime || 0)}
                              </p>
                            </div>
                            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-3">
                              <p className="text-[9px] text-slate-500 uppercase font-bold tracking-widest mb-1">Live Time</p>
                              <p className="text-sm font-bold text-white flex items-center gap-1.5">
                                <Timer className="w-3.5 h-3.5 text-cyan-400" />
                                {effectiveStatus === "offline" ? "0m" : calculateDuration(user.currentSessionStart || user.joinedAt, user.status, user.lastSeen)}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Device Info */}
                        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium">
                            <MonitorSmartphone className="w-3 h-3" />
                            {typeof browser === 'object' ? `${browser.model !== 'Unknown' ? browser.model : browser.os}` : browser}
                          </div>
                          <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                            {user.totalVisits} VISITS
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
                {filteredUsers.length === 0 && (
                  <div className="col-span-full py-20 text-center space-y-4">
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto">
                      <Search className="w-8 h-8 text-slate-600" />
                    </div>
                    <p className="text-slate-500 font-medium">No students found matching your search</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Right Drawer: User Detail & History */}
      <AnimatePresence>
        {selectedUserId && selectedUser && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full md:w-[450px] bg-[#09090b] border-l border-white/10 shadow-2xl z-50 flex flex-col p-4 md:p-8 gap-4 md:gap-8"
          >
            <div className="flex items-center justify-between">
              <button 
                onClick={() => setSelectedUserId(null)}
                className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <h3 className="font-bold text-xl">Student Intelligence</h3>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => toggleHideUser(selectedUser.id, (selectedUser as any).isHidden)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    (selectedUser as any).isHidden 
                      ? "bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30" 
                      : "bg-white/5 text-slate-400 hover:bg-white/10"
                  }`}
                >
                  {(selectedUser as any).isHidden ? "Unhide from Live" : "Hide from Live"}
                </button>
                <button 
                  onClick={() => removeUser(selectedUser.id)}
                  className="p-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-2xl transition-all"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Profile Header */}
            <div className="flex flex-col items-center text-center gap-4 py-6 border-b border-white/5">
              <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center text-3xl font-bold text-emerald-400 uppercase shadow-2xl shadow-emerald-500/10">
                {selectedUser.name.charAt(0)}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{selectedUser.name}</h2>
                <p className="text-slate-500 font-mono text-xs flex items-center justify-center gap-2 mt-1">
                  ID: {selectedUser.id.replace('user_', '')} • {selectedUser.ip || 'No IP'}
                </p>
              </div>
            </div>

            {/* Comprehensive History */}
            <div className="flex-1 flex flex-col gap-6 overflow-hidden">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-slate-300 flex items-center gap-2">
                  <History className="w-4 h-4 text-emerald-400" /> Activity Timeline
                </h4>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  {selectedUser.history?.length || 0} Events
                </span>
              </div>

              <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-4">
                {selectedUser.history && selectedUser.history.length > 0 ? (
                  selectedUser.history.map((h, i) => (
                    <div key={i} className="relative pl-8 before:absolute before:left-[11px] before:top-8 before:bottom-[-20px] before:w-px before:bg-white/5 last:before:hidden">
                      <div className="absolute left-0 top-1 w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>
                      <div className="glass-panel border border-white/5 p-4 rounded-2xl hover:border-white/10 transition-all">
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-xs font-bold text-slate-200">{h.action}</span>
                          <span className="text-[10px] text-slate-500 font-mono">{formatFullDate(h.timestamp)}</span>
                        </div>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">System Record</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-slate-600 text-sm italic">No timeline data available</p>
                  </div>
                )}
              </div>
            </div>

            {/* Footer Stats */}
            <div className="mt-auto pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
              <div className="glass-panel border border-white/5 p-4 rounded-2xl bg-white/[0.02]">
                <p className="text-[9px] text-slate-500 uppercase font-bold tracking-widest mb-1">First Seen</p>
                <p className="text-xs font-bold text-white">{new Date(selectedUser.joinedAt).toLocaleDateString()}</p>
              </div>
              <div className="glass-panel border border-white/5 p-4 rounded-2xl bg-white/[0.02]">
                <p className="text-[9px] text-slate-500 uppercase font-bold tracking-widest mb-1">Total Visits</p>
                <p className="text-xs font-bold text-white">{selectedUser.totalVisits} Sessions</p>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .glass-panel {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
}
