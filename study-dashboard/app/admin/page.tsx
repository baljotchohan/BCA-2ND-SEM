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
  AlertCircle
} from "lucide-react";
import Link from "next/link";
import { ref, remove } from "firebase/database";
import { db } from "../lib/firebase";
import { useOnlineUsers, OnlineUser } from "../hooks/useOnlineUsers";

export default function AdminDashboard() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const users = useOnlineUsers();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "baljot2007") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid password");
    }
  };

  // Auto-cleanup logic
  useEffect(() => {
    if (!isAuthenticated || users.length === 0) return;

    const cleanup = async () => {
      const now = Date.now();
      const IDLE_LIMIT = 30 * 60 * 1000; // 30 minutes
      const TOTAL_LIMIT = 3 * 60 * 60 * 1000; // 3 hours

      for (const user of users) {
        const duration = now - user.joinedAt;

        // This is a bit simplified; real idle time tracking would need a 'lastActive' timestamp.
        // For now, if status is 'idle' and they were joined long ago, or just total time limit.
        if (user.status === "idle" && duration > IDLE_LIMIT) {
          console.log(`Cleaning up idle user: ${user.name}`);
          await remove(ref(db, `onlineUsers/${user.id}`));
        } else if (duration > TOTAL_LIMIT) {
          console.log(`Cleaning up stale user: ${user.name}`);
          await remove(ref(db, `onlineUsers/${user.id}`));
        }
      }
    };

    const interval = setInterval(cleanup, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [isAuthenticated, users]);

  const removeUser = async (id: string) => {
    if (confirm("Are you sure you want to remove this user?")) {
      await remove(ref(db, `onlineUsers/${id}`));
    }
  };

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const calculateDuration = (joinedAt: number) => {
    const minutes = Math.floor((Date.now() - joinedAt) / 60000);
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h ${minutes % 60}m`;
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
                <div className="text-2xl font-bold">{users.length}</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">Total Online</div>
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
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Joined At</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Status</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Exam</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Duration</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <AnimatePresence>
                  {users.map((user) => (
                    <motion.tr
                      key={user.id}
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
                      <td className="px-6 py-4 text-sm text-slate-400">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5" /> {formatTime(user.joinedAt)}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${user.status === "active"
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                            : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                          }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${user.status === "active" ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {user.examStarted ? (
                          <span className="text-[10px] font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2 py-1 rounded-md uppercase">In Progress</span>
                        ) : (
                          <span className="text-[10px] text-slate-500 font-medium">Not Started</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-400">
                        <div className="flex items-center gap-2">
                          <Activity className="w-3.5 h-3.5" /> {calculateDuration(user.joinedAt)}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => removeUser(user.id)}
                          className="p-2 text-slate-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
                          title="Remove User"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
                {users.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-slate-500 italic">
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
