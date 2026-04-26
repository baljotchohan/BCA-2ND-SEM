/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Clock,
  CalendarDays,
  Download,
  FileText,
  Terminal,
  TrendingUp,
  X,
  Filter,
  Lock,
  type LucideIcon,
} from "lucide-react";

// --- Types & Data ---
type Subject = {
  id: string;
  name: string;
  code: string;
  progress: number;
  displayDate: string;
  examDate: string;
  time?: string;
  color: string;
  icon: LucideIcon;
  locked: boolean;
  syllabus?: {
    imageUrl?: string;
  };
};

const subjects: Subject[] = [
  {
    id: "s1",
    name: "Management Info Systems",
    code: "MIS-201",
    progress: 95,
    displayDate: "April 27",
    examDate: "2026-04-27T09:30:00",
    time: "9:30 AM",
    color: "from-cyan-500/20 to-transparent",
    icon: TrendingUp,
    locked: false,
    syllabus: {
      imageUrl: "/BCA-2ND-SEM/MIS.jpeg"
    }
  },
  {
    id: "s2",
    name: "Digital Empowerment",
    code: "DE-202",
    progress: 0,
    displayDate: "April 30",
    examDate: "2026-04-30T09:30:00",
    time: "9:30 AM",
    color: "from-blue-500/20 to-transparent",
    icon: BookOpen,
    locked: true,
  },
  {
    id: "s3",
    name: "Computer Organization",
    code: "CO-203",
    progress: 0,
    displayDate: "May 02",
    examDate: "2026-05-02T14:00:00",
    time: "2:00 PM",
    color: "from-purple-500/20 to-transparent",
    icon: Terminal,
    locked: true,
  },

  {
    id: "s5",
    name: "Intro to AI & Data Science",
    code: "AI-205",
    progress: 0,
    displayDate: "May 06",
    examDate: "2026-05-06T09:30:00",
    color: "from-cyan-400/20 to-transparent",
    icon: BookOpen,
    locked: true,
  },
  {
    id: "s6",
    name: "OOPs using C++",
    code: "CPP-206",
    progress: 0,
    displayDate: "May 08",
    examDate: "2026-05-08T09:30:00",
    color: "from-emerald-500/20 to-transparent",
    icon: Terminal,
    locked: true,
  },
  {
    id: "s7",
    name: "Punjabi",
    code: "PBI-207",
    progress: 0,
    displayDate: "May 11",
    examDate: "2026-05-11T09:30:00",
    color: "from-orange-500/20 to-transparent",
    icon: FileText,
    locked: true,
  },
  {
    id: "s8",
    name: "English",
    code: "ENG-208",
    progress: 0,
    displayDate: "May 15",
    examDate: "2026-05-15T09:30:00",
    color: "from-slate-500/20 to-transparent",
    icon: BookOpen,
    locked: true,
  },
];

const misQuestions = [
  {
    category: "Section A (Short Definitions & Concepts)",
    items: [
      "Define MIS, DSS, TPS, and ERP with examples.",
      "Distinguish between Data and Information. What are the dimensions of high-quality information?",
      "Define the characteristics of a system (Organization, Interaction, Interdependence, Integration, Central Objective).",
      "What is the difference between an Open System and a Closed System? Give organizational examples.",
      "List and explain the four types of system maintenance (Corrective, Adaptive, Perfective, Preventive)."
    ]
  },
  {
    category: "Section B & C (Long Answers & Core Models)",
    items: [
      "Explain Herbert Simon's Model of Decision-Making. Draw the Intelligence-Design-Choice flow and explain 'Bounded Rationality'.",
      "Detail the phases of the System Development Life Cycle (SDLC). Emphasize the importance of Requirement Analysis and the SRS document.",
      "Discuss the structural hierarchy of MIS across management levels (TPS for Operational, DSS for Middle Management, EIS for Executives).",
      "Explain the strict rules for constructing Data Flow Diagrams (DFDs) and the difference between Context Diagram (Level 0) and subsequent levels.",
      "What is the strategic role of a Systems Analyst in bridging the gap between business users and technologists?",
      "Discuss the functional information needs of Marketing (Marketing MIS) and Human Resources (HRIS).",
      "What is Enterprise Resource Planning (ERP)? Discuss its benefits over conventional systems and its implementation lifecycle.",
      "How does a Data Warehouse differ from an Operational Database (TPS)? Explain its role alongside Data Mining in Business Intelligence.",
      "Explain Michael Porter's Competitive Forces Model in the context of achieving strategic advantage through Information Systems."
    ]
  }
];

const misTopics = [
  { title: "Theoretical Foundations", desc: "System characteristics (Organization, Interaction, Interdependence, Integration, Central Objective). Open vs Closed, Physical vs Abstract systems." },
  { title: "Structural Hierarchy of MIS", desc: "Transaction Processing Systems (TPS) for operational staff, Decision Support Systems (DSS) for middle management, and Executive Information Systems (EIS) for top executives." },
  { title: "Simon's Decision-Making Model", desc: "Intelligence Phase (problem identification), Design Phase (developing alternatives), Choice Phase (selecting solution), and the concept of 'Bounded Rationality' (satisficing)." },
  { title: "System Development Life Cycle (SDLC)", desc: "Phases: Requirement Analysis (SRS), System Design (HLD/LLD), Coding, Testing, and Maintenance (Corrective, Adaptive, Perfective, Preventive)." },
  { title: "Functional MIS & ERP", desc: "Integration of Marketing, HRIS, FIS, and Production systems. Enterprise Resource Planning (ERP) for a unified view of organizational processes." },
  { title: "Advanced Topics", desc: "Data Warehousing vs Operational Databases, Data Mining, E-commerce models (B2B, B2C), GDSS, and Expert Systems." }
];

import Link from "next/link";
import { Target } from "lucide-react";
import AIFab from "./components/AIFab";

function CountdownDisplay({ nextExam, accentColor }: { nextExam: Subject; accentColor: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const targetDate = new Date(nextExam.examDate).getTime();
    
    const updateTime = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
      return distance;
    };
    
    if (updateTime() < 0) return;

    const interval = setInterval(() => {
      if (updateTime() < 0) clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  }, [nextExam]);

  return (
    <div className="flex gap-4">
      <div className="text-center">
        <div
          className="text-xl md:text-2xl font-mono font-bold"
          style={{ color: accentColor }}
        >
          {timeLeft.days.toString().padStart(2, "0")}
        </div>
        <div className="text-[10px] uppercase tracking-wider text-slate-500">
          Days
        </div>
      </div>
      <div className="text-center">
        <div className="text-xl md:text-2xl font-mono font-bold">
          {timeLeft.hours.toString().padStart(2, "0")}
        </div>
        <div className="text-[10px] uppercase tracking-wider text-slate-500">
          Hrs
        </div>
      </div>
      <div className="text-center">
        <div className="text-xl md:text-2xl font-mono font-bold">
          {timeLeft.mins.toString().padStart(2, "0")}
        </div>
        <div className="text-[10px] uppercase tracking-wider text-slate-500">
          Min
        </div>
      </div>
      <div className="text-center">
        <div className="text-xl md:text-2xl font-mono font-bold">
          {timeLeft.secs.toString().padStart(2, "0")}
        </div>
        <div className="text-[10px] uppercase tracking-wider text-slate-500">
          Sec
        </div>
      </div>
    </div>
  );
}

export default function StudyDashboard() {
  const [tradingMode, setTradingMode] = useState(false);
  const [activeSubject, setActiveSubject] = useState<Subject | null>(null);
  const [activeTab, setActiveTab] = useState("questions");
  const [mounted, setMounted] = useState(false);
  const [upcomingExams, setUpcomingExams] = useState<Subject[]>([]);

  const [nextExam, setNextExam] = useState<Subject | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Filter exams that are in the future
    const nowTime = new Date().getTime();
    const futureExams = subjects.filter(
      (s) => new Date(s.examDate).getTime() > nowTime
    );
    futureExams.sort(
      (a, b) => new Date(a.examDate).getTime() - new Date(b.examDate).getTime()
    );

    setUpcomingExams(futureExams);

    if (futureExams.length > 0) {
      setNextExam(futureExams[0]);
    }
  }, [mounted]);

  const accentColor = tradingMode ? "var(--trade-green)" : "var(--accent-cyan)";
  const accentGlow = tradingMode
    ? "rgba(34, 197, 94, 0.5)"
    : "var(--accent-cyan-glow)";

  if (!mounted) return null; // Prevent hydration errors

  return (
    <div className="min-h-screen bg-[#050505] text-[#f8fafc] font-sans selection:bg-cyan-500/30 overflow-hidden relative pb-20 md:pb-0">
      {/* Background Glow */}
      <div
        className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-20 pointer-events-none transition-colors duration-1000 z-0"
        style={{ backgroundColor: accentColor, transform: 'translateZ(0)', willChange: 'transform' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 flex flex-col md:flex-row gap-6 md:gap-8 relative z-10">
        {/* LEFT COLUMN: Main Content */}
        <div className="flex-1 space-y-6 md:space-y-8 min-w-0">
          
          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="relative overflow-hidden glass-panel rounded-3xl p-6 md:p-8 border-l-4 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6"
            style={{ borderLeftColor: accentColor }}
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
                BCA 2nd Sem <span style={{ color: accentColor }}>Prep Hub</span>
              </h1>
              <p className="text-slate-400 text-sm md:text-base">
                Your ultimate study arsenal. Master your exams with structured materials.
              </p>
            </div>

            {/* Countdown Clock */}
            {nextExam && (
              <div className="bg-black/50 border border-white/5 rounded-2xl p-4 flex flex-col sm:flex-row gap-4 items-center backdrop-blur-md w-full xl:w-auto">
                <div className="text-xs text-slate-400 font-medium tracking-wide sm:border-r border-white/10 sm:pr-4 uppercase">
                  Next Exam:
                  <br />
                  <span className="text-white normal-case text-sm">
                    {nextExam.name}
                  </span>
                </div>
                <CountdownDisplay nextExam={nextExam} accentColor={accentColor} />
              </div>
            )}
          </motion.div>

          {/* Subject Grid */}
          <div>
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h2 className="text-xl font-medium text-slate-200">Modules</h2>
              <Filter className="w-4 h-4 text-slate-500 hover:text-white cursor-pointer transition-colors" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {subjects.map((subject, idx) => (
                <motion.div
                  key={subject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  whileHover={!subject.locked ? { y: -4, scale: 1.02 } : {}}
                  onClick={() => !subject.locked && setActiveSubject(subject)}
                  className={`glass-panel rounded-2xl p-5 relative overflow-hidden group border border-white/5 transition-all duration-300 ${
                    subject.locked
                      ? "opacity-60 cursor-not-allowed"
                      : "cursor-pointer hover:border-white/20"
                  }`}
                >
                  {/* Subtle gradient background based on subject */}
                  {!subject.locked && (
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${subject.color} blur-2xl opacity-40 group-hover:opacity-70 transition-opacity`}
                    />
                  )}

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

                    {/* Status / Progress */}
                    {subject.locked ? (
                      <div className="flex items-center gap-2 text-xs text-slate-500 bg-black/30 w-max px-2 py-1 rounded-md border border-white/5">
                        <Lock className="w-3 h-3" /> Locked
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-500">Progress</span>
                          <span className="text-slate-300 font-mono">
                            {subject.progress}%
                          </span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${subject.progress}%` }}
                            transition={{
                              duration: 1,
                              delay: 0.2 + idx * 0.1,
                            }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: accentColor }}
                          />
                        </div>
                      </div>
                    )}
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
              <CalendarDays
                className="w-5 h-5"
                style={{ color: accentColor }}
              />
              <h2 className="font-medium text-lg tracking-wide">
                Upcoming Exams
              </h2>
            </div>

            {upcomingExams.length > 0 ? (
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-white/10 before:to-transparent">
                {upcomingExams.map((sub, i) => (
                  <div
                    key={i}
                    className="relative flex items-center group is-active"
                  >
                    {/* Timeline Dot */}
                    <div
                      className="flex items-center justify-center w-6 h-6 rounded-full border border-white/10 bg-[#050505] shadow shrink-0 z-10 transition-colors duration-300"
                      style={{
                        boxShadow: i === 0 ? `0 0 10px ${accentGlow}` : "none",
                        borderColor:
                          i === 0 ? accentColor : "rgba(255,255,255,0.1)",
                      }}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          i === 0 ? "animate-pulse" : ""
                        }`}
                        style={{
                          backgroundColor: i === 0 ? accentColor : "#334155",
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="w-[calc(100%-2rem)] glass-panel border border-white/5 p-3 rounded-xl ml-4 shadow-sm group-hover:border-white/10 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-1">
                        <span className="text-[10px] font-mono text-slate-400">
                          {sub.displayDate}
                        </span>
                        {sub.time && (
                          <span className="text-[9px] w-max px-1.5 py-0.5 bg-white/5 rounded text-slate-300">
                            {sub.time}
                          </span>
                        )}
                      </div>
                      <h4 className="text-xs font-medium text-slate-200 truncate">
                        {sub.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-sm text-slate-500 py-8">
                All exams completed! 🎉
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Footer / Trading Mode Toggle */}
      <div className="fixed bottom-6 left-0 right-0 z-40 flex justify-center pointer-events-none">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="glass-panel border border-white/10 rounded-full p-1.5 flex items-center gap-2 pointer-events-auto backdrop-blur-xl shadow-2xl"
        >
          <button
            onClick={() => setTradingMode(false)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              !tradingMode
                ? "bg-white/10 text-white"
                : "text-slate-500 hover:text-white"
            }`}
          >
            Study Mode
          </button>
          <button
            onClick={() => setTradingMode(true)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1 ${
              tradingMode ? "bg-white/10" : "text-slate-500 hover:text-white"
            }`}
            style={{ color: tradingMode ? "var(--trade-green)" : undefined }}
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
            className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6"
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setActiveSubject(null)}
            />

            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              className="glass-panel border border-white/10 rounded-t-3xl md:rounded-3xl w-full max-w-4xl h-[90vh] md:max-h-[85vh] md:h-auto flex flex-col overflow-hidden relative z-10 shadow-2xl mt-auto md:mt-0"
            >
              {/* Modal Header */}
              <div className="p-5 md:p-6 border-b border-white/5 flex justify-between items-start bg-gradient-to-r from-white/[0.02] to-transparent shrink-0">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] md:text-xs font-mono px-2 py-1 bg-white/10 rounded-md text-slate-300">
                      {activeSubject.code}
                    </span>
                    <span className="text-[10px] md:text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {activeSubject.displayDate}{" "}
                      {activeSubject.time && `• ${activeSubject.time}`}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold text-white">
                    {activeSubject.name}
                  </h2>
                </div>
                <button
                  onClick={() => setActiveSubject(null)}
                  className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex overflow-x-auto border-b border-white/5 px-2 md:px-6 hide-scrollbar shrink-0">
                {[
                  { id: "questions", label: "Important Questions" },
                  { id: "notes", label: "PDF Notes" },
                  { id: "units", label: "Syllabus" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-4 text-xs md:text-sm font-medium transition-colors relative whitespace-nowrap ${
                      activeTab === tab.id
                        ? "text-white"
                        : "text-slate-500 hover:text-slate-300"
                    }`}
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
              <div className="p-4 md:p-6 overflow-y-auto flex-1 bg-[#050505]/40 custom-scrollbar relative">
                <AnimatePresence mode="wait">
                  {activeTab === "questions" && (
                    <motion.div
                      key="questions"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-6 pb-6"
                    >
                      {activeSubject.id === "s1" ? (
                        <div className="pt-2">
                          <Link href="/mis/questions">
                            <div className="border border-emerald-500/30 rounded-2xl p-6 bg-gradient-to-br from-emerald-900/20 to-transparent hover:border-emerald-400/50 hover:from-emerald-900/30 transition-all cursor-pointer group relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full -z-10 group-hover:bg-emerald-500/20 transition-colors"></div>
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                  <div className="bg-emerald-500/20 text-emerald-400 p-2 rounded-lg">
                                    <Target className="w-6 h-6" />
                                  </div>
                                  <h3 className="text-xl font-bold text-white tracking-wide">IMPORTANT Q's (IMPQ)</h3>
                                </div>
                                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider border border-emerald-500/20">
                                  100% Sure Topics
                                </span>
                              </div>
                              <p className="text-sm text-emerald-100/70 mb-4 font-medium">Complete Question Bank & Detailed Analysis. Formatted for print.</p>
                              <div className="flex items-center gap-4 text-xs font-mono text-emerald-400/80 uppercase">
                                <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5" /> Detailed Answers</span>
                                <span>•</span>
                                <span className="flex items-center gap-1.5">Exam Oriented</span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ) : (
                        <div className="text-center py-12 border border-dashed border-white/10 rounded-2xl bg-white/[0.01]">
                          <FileText className="w-8 h-8 text-slate-600 mx-auto mb-3" />
                          <h3 className="text-slate-300 font-medium">
                            No questions added yet
                          </h3>
                          <p className="text-sm text-slate-500 mt-1">
                            Provide the material to populate the important
                            questions for {activeSubject.code}.
                          </p>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {activeTab === "notes" && (
                    <motion.div
                      key="notes"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4 pb-6"
                    >
                      {activeSubject.id === "s1" ? (
                        <div className="pt-2">
                          <Link href="/mis/notes">
                            <div className="border border-emerald-500/30 rounded-2xl p-6 bg-gradient-to-br from-emerald-900/20 to-transparent hover:border-emerald-400/50 hover:from-emerald-900/30 transition-all cursor-pointer group relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full -z-10 group-hover:bg-emerald-500/20 transition-colors"></div>
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                  <div className="bg-emerald-500/20 text-emerald-400 p-2 rounded-lg">
                                    <BookOpen className="w-6 h-6" />
                                  </div>
                                  <h3 className="text-xl font-bold text-white tracking-wide">MIS MASTER NOTES</h3>
                                </div>
                                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider border border-emerald-500/20">
                                  BCA-DSC-4
                                </span>
                              </div>
                              <p className="text-sm text-emerald-100/70 mb-4 font-medium">Complete Theory Notes & Syllabus Master Document. Formatted for print.</p>
                              <div className="flex items-center gap-4 text-xs font-mono text-emerald-400/80 uppercase">
                                <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5" /> Theory Notes</span>
                                <span>•</span>
                                <span className="flex items-center gap-1.5">Complete Syllabus</span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ) : (
                        <div className="col-span-full text-center py-12 border border-dashed border-white/10 rounded-2xl bg-white/[0.01]">
                          <Download className="w-8 h-8 text-slate-600 mx-auto mb-3" />
                          <h3 className="text-slate-300 font-medium">
                            Notes vault empty
                          </h3>
                          <p className="text-sm text-slate-500 mt-1">
                            Awaiting PDF uploads and module materials.
                          </p>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {activeTab === "units" && (
                    <motion.div
                      key="units"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-6 pb-6"
                    >
                      {activeSubject.syllabus?.imageUrl ? (
                        <div className="glass-panel p-2 rounded-2xl border border-white/5 bg-white/[0.01]">
                          <img 
                            src={activeSubject.syllabus.imageUrl} 
                            alt={`${activeSubject.name} Syllabus`} 
                            className="w-full h-auto rounded-xl"
                          />
                        </div>
                      ) : (
                        <div className="text-center py-12 border border-dashed border-white/10 rounded-2xl bg-white/[0.01]">
                          <BookOpen className="w-8 h-8 text-slate-600 mx-auto mb-3" />
                          <h3 className="text-slate-300 font-medium">
                            Syllabus missing
                          </h3>
                          <p className="text-sm text-slate-500 mt-1">
                            Provide the unit-wise syllabus to generate study tracks.
                          </p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AIFab />
    </div>
  );
}

