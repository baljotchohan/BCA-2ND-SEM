"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, Star, MessageSquare, Check } from "lucide-react";
import { ref, set, get, serverTimestamp } from "firebase/database";
import { db } from "../lib/firebase";

const BEST_PART_OPTIONS = [
  "Dark Mode UI", 
  "AI Tutor", 
  "Exam Questions", 
  "Global Chat", 
  "Fast Performance", 
  "Everything!"
];

const IMPROVEMENT_OPTIONS = [
  "More Subjects", 
  "Better AI", 
  "More Practice Tests", 
  "Mobile App", 
  "Nothing, it's perfect"
];

export default function EndSemesterFeedback() {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [selectedBestParts, setSelectedBestParts] = useState<string[]>([]);
  const [selectedImprovements, setSelectedImprovements] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const checkStatus = async () => {
      // Check local storage first
      const localSubmitted = localStorage.getItem("bca_end_sem_feedback_submitted");
      if (localSubmitted) return;

      const userId = localStorage.getItem("persistentUserId_v2");
      
      // If they have an ID, check Firebase to see if they already submitted from another device
      if (userId) {
        try {
          const snapshot = await get(ref(db, `semester_feedback/${userId}`));
          if (snapshot.exists()) {
            localStorage.setItem("bca_end_sem_feedback_submitted", "true");
            return;
          }
        } catch (e) {
          console.error("Failed to check feedback status", e);
        }
      }

      // If not submitted locally or in Firebase, show after a delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    };

    checkStatus();
  }, []);

  const toggleSelection = (
    option: string, 
    current: string[], 
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (current.includes(option)) {
      setter(current.filter(item => item !== option));
    } else {
      setter([...current, option]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please select a rating before submitting!");
      return;
    }
    if (selectedBestParts.length === 0) {
      alert("Please select at least one thing you liked!");
      return;
    }
    if (selectedImprovements.length === 0) {
      alert("Please select at least one improvement area!");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const userId = localStorage.getItem("persistentUserId_v2") || `anon_${Date.now()}`;
      const userName = localStorage.getItem("examUserName_v2") || "Anonymous";

      const feedbackRef = ref(db, `semester_feedback/${userId}`);
      await set(feedbackRef, {
        userId,
        userName,
        rating,
        bestParts: selectedBestParts,
        improvements: selectedImprovements,
        message,
        timestamp: serverTimestamp(),
        userAgent: navigator.userAgent
      });

      setIsSubmitted(true);
      localStorage.setItem("bca_end_sem_feedback_submitted", "true");
      
      // Close after showing thank you message
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Failed to submit feedback. Have you updated your Firebase Rules?");
      
      // We'll let them bypass if Firebase fails due to rules so they don't get stuck forever
      setIsSubmitted(true);
      localStorage.setItem("bca_end_sem_feedback_submitted", "true");
      setTimeout(() => setIsOpen(false), 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="w-full max-w-lg glass-panel rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 pb-4 border-b border-white/5 bg-gradient-to-br from-white/5 to-transparent shrink-0">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-[var(--accent-cyan)]/20 rounded-lg text-[var(--accent-cyan)]">
                  <Sparkles size={24} />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  The Final Stretch! 🚀
                </h2>
              </div>
              <p className="text-sm text-gray-400">
                You've made it to the end of the 2nd Semester! We'd love to hear how StudIQ helped you and how we can make it even better.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-10 text-center flex flex-col items-center justify-center flex-1"
              >
                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-4">
                  <Star size={32} fill="currentColor" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-gray-400">Your feedback is super valuable to us. Good luck with your exams!</p>
              </motion.div>
            ) : (
              <div className="overflow-y-auto custom-scrollbar flex-1">
                <form onSubmit={handleSubmit} className="p-6 space-y-8">
                  
                  {/* Rating */}
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-white">1. How was your overall experience?</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          className={`transition-colors p-2 rounded-xl bg-white/5 border ${
                            (hoveredRating || rating) >= star 
                              ? "border-yellow-400/50 text-yellow-400 bg-yellow-400/10" 
                              : "border-white/10 text-gray-500 hover:border-white/20 hover:text-gray-300"
                          }`}
                        >
                          <Star 
                            size={32} 
                            fill={(hoveredRating || rating) >= star ? "currentColor" : "none"} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* What they liked */}
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-white">
                      2. What did you like the most? (Select multiple)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {BEST_PART_OPTIONS.map((option) => {
                        const isSelected = selectedBestParts.includes(option);
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => toggleSelection(option, selectedBestParts, setSelectedBestParts)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 border ${
                              isSelected
                                ? "bg-[var(--accent-cyan)]/20 border-[var(--accent-cyan)]/50 text-[var(--accent-cyan)]"
                                : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            {isSelected && <Check size={14} />}
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Improvements */}
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-white">
                      3. What should we improve for next semester?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {IMPROVEMENT_OPTIONS.map((option) => {
                        const isSelected = selectedImprovements.includes(option);
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => toggleSelection(option, selectedImprovements, setSelectedImprovements)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 border ${
                              isSelected
                                ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400"
                                : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            {isSelected && <Check size={14} />}
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div className="space-y-3">
                    <label htmlFor="message" className="text-sm font-bold text-white flex items-center gap-2">
                      <MessageSquare size={16} className="text-gray-400" /> 
                      4. Anything else to add? (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Drop a message for the creators..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent-cyan)]/50 transition-all resize-none text-sm"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)]/80 text-black font-bold py-4 px-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          Submit Feedback <Send size={20} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
