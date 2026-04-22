"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, BookOpen, Clock, CalendarDays, ChevronRight, 
  Download, Eye, FileText, Terminal, TrendingUp, X, Filter 
} from "lucide-react";

// --- Types & Data ---
type Subject = {
  id: string;
  name: string;
  code: string;
  progress: number;
  date: string;
  time?: string;
  color: string;
  icon: any;
};

const subjects: Subject[] = [
  { id: "s1", name: "Management Info Systems", code: "MIS-201", progress: 65, date: "April 27", time: "9:30 AM", color: "from-cyan-500/20 to-transparent", icon: TrendingUp },
  { id: "s2", name: "Digital Empowerment", code: "DE-202", progress: 80, date: "April 30", time: "9:30 AM", color: "from-blue-500/20 to-transparent", icon: BookOpen },
  { id: "s3", name: "Computer Organization", code: "CO-203", progress: 40, date: "May 02", time: "2:00 PM", color: "from-purple-500/20 to-transparent", icon: Terminal },
  { id: "s4", name: "History of Punjab", code: "HOP-204", progress: 90, date: "May 04", color: "from-amber-500/20 to-transparent", icon: FileText },
  { id: "s5", name: "Intro to AI & Data Science", code: "AI-205", progress: 50, date: "May 06", color: "from-cyan-400/20 to-transparent", icon: BookOpen },
  { id: "s6", name: "OOPs using C++", code: "CPP-206", progress: 30, date: "May 08", color: "from-emerald-500/20 to-transparent", icon: Terminal },
  { id: "s7", name: "Punjabi", code: "PBI-207", progress: 95, date: "May 11", color: "from-orange-500/20 to-transparent", icon: FileText },
  { id: "s8", name: "English", code: "ENG-208", progress: 85, date: "May 15", color: "from-slate-500/20 to-transparent", icon: BookOpen },
];

export default function StudyDashboard() {
  const [tradingMode, setTradingMode] = useState(false);
  const [activeSubject, setActiveSubject] = useState<Subject | null>(null);
  const [activeTab, setActiveTab] = useState("questions");
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  // Countdown timer logic for MIS exam (April 27)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date("2026-04-27T09:30:00").getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const accentColor = tradingMode ? "var(--trade-green)" : "var(--accent-cyan)";
  const accentGlow = tradingMode ? "rgba(34, 197, 94, 0.5)" : "var(--accent-cyan-glow)";

  if (!mounted) return null; // Prevent hydration errors

  return (
    <div className="min-h-screen bg-[#050505] text-[#f8fafc] font-sans selection:bg-cyan-500/30 overflow-hidden relative">
      
      {/* Background Glow */}
      <div 
        className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-20 pointer-events-none transition-colors duration-1000"
        style={{ backgroundColor: accentColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8 relative z-10">
        
        {/* LEFT COLUMN: Main Content */}
        <div className="flex-1 space-y-8">
          
          {/* Top Bar: Search */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="glass-panel rounded-2xl p-2 flex items-center relative group"
          >
            <Search className="w-5 h-5 text-slate-400 ml-3" />
            <input 
              type="text" 
              placeholder="Search syllabus, notes, or questions... (Cmd+K)" 
              className="bg-transparent border-none outline-none flex-1 px-4 py-2 text-sm text-slate-200 placeholder:text-slate-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="hidden sm:flex items-center gap-1 mr-3">
              <kbd className="bg-white/5 border border-white/10 rounded px-2 py-1 text-xs text-slate-400">⌘</kbd>
              <kbd className="bg-white/5 border border-white/10 rounded px-2 py-1 text-xs text-slate-400">K</kbd>
            </div>
          </motion.div>

          {/* Hero Header */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="relative overflow-hidden glass-panel rounded-3xl p-8 border-l-4"
            style={{ borderLeftColor: accentColor }}
          >
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-4xl font-semibold tracking-tight mb-2">
                  Welcome, <span style={{ color: accentColor }}>Baljot</span>
                </h1>
                <p className="text-slate-400 text-sm md:text-base">
                  BCA 2nd Semester • System activated. Focus mode enabled.
                </p>
              </div>
              
              {/* Countdown Clock */}
              <div className="bg-black/50 border border-white/5 rounded-2xl p-4 flex gap-4 backdrop-blur-md">
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold" style={{ color: accentColor }}>{timeLeft.days.toString().padStart(2, '0')}</div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500">Hrs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold">{timeLeft.mins.toString().padStart(2, '0')}</div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500">Min</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold">{timeLeft.secs.toString().padStart(2, '0')}</div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500">Sec</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Subject Grid */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-medium text-slate-200">Your Modules</h2>
              <Filter className="w-4 h-4 text-slate-500 hover:text-white cursor-pointer transition-colors" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {subjects.map((subject, idx) => (
                <motion.div
                  key={subject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  onClick={() => setActiveSubject(subject)}
                  className="glass-panel rounded-2xl p-5 cursor-pointer relative overflow-hidden group border border-white/5 hover:border-white/20 transition-all duration-300"
                >
                  {/* Subtle gradient background based on subject */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${subject.color} blur-2xl opacity-40 group-hover:opacity-70 transition-opacity`} />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                        <subject.icon className="w-5 h-5 text-slate-300" />
                      </div>
                      <span className="text-[10px] font-mono tracking-wider px-2 py-1 bg-white/5 rounded-full text-slate-400">
                        {subject.code}
                      </span>
                    </div>
                    
                    <h3 className="font-medium text-sm text-slate-200 mb-6 leading-tight h-10 line-clamp-2">
                      {subject.name}
                    </h3>
                    
                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Progress</span>
                        <span className="text-slate-300 font-mono">{subject.progress}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${subject.progress}%` }}
                          transition={{ duration: 1, delay: 0.2 + (idx * 0.1) }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: subject.progress < 50 ? 'var(--trade-red)' : subject.progress > 85 ? 'var(--trade-green)' : accentColor }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Sidebar Ticker */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:w-80 space-y-6 shrink-0"
        >
          <div className="glass-panel rounded-3xl p-6 h-full border border-white/5">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/5">
              <CalendarDays className="w-5 h-5" style={{ color: accentColor }} />
              <h2 className="font-medium text-lg tracking-wide">Upcoming Exams</h2>
            </div>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-white/10 before:to-transparent">
              {subjects.map((sub, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  {/* Timeline Dot */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white/10 bg-[#050505] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors duration-300" style={{ boxShadow: i === 0 ? `0 0 10px ${accentGlow}` : 'none', borderColor: i === 0 ? accentColor : 'rgba(255,255,255,0.1)' }}>
                    <div className={`w-2 h-2 rounded-full ${i === 0 ? 'animate-pulse' : ''}`} style={{ backgroundColor: i === 0 ? accentColor : '#334155' }} />
                  </div>
                  
                  {/* Content */}
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] glass-panel border border-white/5 p-3 rounded-xl ml-4 md:ml-0 shadow-sm group-hover:border-white/10 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono text-slate-400">{sub.date}</span>
                      {sub.time && <span className="text-[9px] px-1.5 py-0.5 bg-white/5 rounded text-slate-300">{sub.time}</span>}
                    </div>
                    <h4 className="text-xs font-medium text-slate-200 truncate">{sub.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      {/* Footer / Trading Mode Toggle */}
      <div className="fixed bottom-6 left-0 right-0 z-40 flex justify-center pointer-events-none">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="glass-panel border border-white/10 rounded-full p-1.5 flex items-center gap-2 pointer-events-auto backdrop-blur-xl"
        >
          <button 
            onClick={() => setTradingMode(false)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${!tradingMode ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-white'}`}
          >
            Study Mode
          </button>
          <button 
            onClick={() => setTradingMode(true)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1 ${tradingMode ? 'bg-white/10' : 'text-slate-500 hover:text-white'}`}
            style={{ color: tradingMode ? 'var(--trade-green)' : undefined }}
          >
            <TrendingUp className="w-3 h-3" /> Trading Mode
          </button>
        </motion.div>
      </div>

      {/* RESOURCE VAULT MODAL */}
      <AnimatePresence>
        {activeSubject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setActiveSubject(null)} />
            
            <motion.div 
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              className="glass-panel border border-white/10 rounded-3xl w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden relative z-10 shadow-2xl"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-white/5 flex justify-between items-start bg-gradient-to-r from-white/[0.02] to-transparent">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono px-2 py-1 bg-white/10 rounded-md text-slate-300">
                      {activeSubject.code}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {activeSubject.date} {activeSubject.time && `• ${activeSubject.time}`}
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold text-white">{activeSubject.name}</h2>
                </div>
                <button 
                  onClick={() => setActiveSubject(null)}
                  className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-white/5 px-6">
                {[
                  { id: 'questions', label: 'Important Questions' },
                  { id: 'notes', label: 'PDF Notes' },
                  { id: 'units', label: 'Unit-wise Breakdown' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-4 text-sm font-medium transition-colors relative ${activeTab === tab.id ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5"
                        style={{ backgroundColor: accentColor }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Content Area */}
              <div className="p-6 overflow-y-auto flex-1 bg-[#050505]/40 custom-scrollbar">
                <AnimatePresence mode="wait">
                  
                  {activeTab === 'questions' && (
                    <motion.div 
                      key="questions"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-3"
                    >
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="group p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors flex items-start gap-4">
                          <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${i <= 2 ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]' : i === 3 ? 'bg-amber-500' : 'bg-green-500'}`} />
                          <div className="flex-1">
                            <p className="text-sm text-slate-200 group-hover:text-white transition-colors">
                              {activeSubject.code === 'CO-203' && i === 1 ? "Explain the von Neumann architecture with a block diagram." : 
                               activeSubject.code === 'CPP-206' && i === 1 ? "What is Polymorphism? Differentiate between compile-time and run-time polymorphism with code examples." : 
                               "Loading important question from syllabus context..."}
                            </p>
                            <div className="flex gap-2 mt-2">
                              <span className="text-[10px] uppercase tracking-wider text-slate-500 border border-white/10 rounded px-1.5 py-0.5">
                                {i <= 2 ? 'High Priority' : i === 3 ? 'Medium Priority' : 'Low Priority'}
                              </span>
                              {(activeSubject.code === 'CO-203' || activeSubject.code === 'CPP-206') && i === 1 && (
                                <span className="text-[10px] uppercase tracking-wider text-cyan-500/80 border border-cyan-500/20 bg-cyan-500/10 rounded px-1.5 py-0.5 flex items-center gap-1">
                                  <Terminal className="w-3 h-3" /> Code Required
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === 'notes' && (
                    <motion.div 
                      key="notes"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="p-4 rounded-xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent flex items-center justify-between group hover:border-white/10 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
                              <FileText className="w-5 h-5" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-slate-200">Unit {i} Complete Notes.pdf</p>
                              <p className="text-xs text-slate-500">2.4 MB • Updated 2d ago</p>
                            </div>
                          </div>
                          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors">
                              <Download className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === 'units' && (
                    <motion.div 
                      key="units"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4"
                    >
                      {[1, 2, 3, 4].map((i) => (
                        <details key={i} className="group border border-white/5 rounded-xl bg-white/[0.01] overflow-hidden">
                          <summary className="p-4 cursor-pointer list-none flex justify-between items-center hover:bg-white/[0.02] transition-colors">
                            <h3 className="text-sm font-medium text-slate-200">Unit {i}: Syllabus Topics</h3>
                            <ChevronRight className="w-4 h-4 text-slate-500 group-open:rotate-90 transition-transform" />
                          </summary>
                          <div className="p-4 border-t border-white/5 text-sm text-slate-400 bg-[#050505]/50 leading-relaxed">
                            <p>Awaiting specific syllabus context. Paste syllabus here to generate dynamic study tracks, code snippets (for C++ & CO), and detailed breakdowns.</p>
                          </div>
                        </details>
                      ))}
                    </motion.div>
                  )}
                  
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}
