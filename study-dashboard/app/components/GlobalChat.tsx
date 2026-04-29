"use client";

import React, { useState, useEffect, useRef } from "react";
import { db } from "../lib/firebase";
import { ref, push, onValue, query, limitToLast, set, onDisconnect, remove } from "firebase/database";
import { Send, MessageSquare, X, Users, MessageCircle, Sparkles, Smile, Image as ImageIcon, MoreHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ChatMessage {
  id: string;
  senderName: string;
  senderId: string;
  text: string;
  timestamp: number;
}

const COMMON_EMOJIS = ["❤️", "🔥", "😂", "😮", "🙌", "👍", "✨", "📚", "💯", "✅"];

export default function GlobalChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isTyping, setIsTyping] = useState<{ [key: string]: string }>({});
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load user info
    const storedName = localStorage.getItem("examUserName");
    const storedId = localStorage.getItem("persistentUserId") || "guest";
    
    if (storedName) {
      setUserName(storedName);
      setUserId(storedId);
      setIsLoggedIn(true);
    }

    // Listen for messages
    const chatRef = ref(db, "globalChat/messages");
    const chatQuery = query(chatRef, limitToLast(50));

    const unsubscribeMessages = onValue(chatQuery, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const msgList: ChatMessage[] = Object.entries(data).map(([id, val]: [string, any]) => ({
          id,
          ...val,
        }));
        setMessages(msgList.sort((a, b) => a.timestamp - b.timestamp));
      } else {
        setMessages([]);
      }
    });

    // Listen for typing status
    const typingRef = ref(db, "globalChat/typing");
    const unsubscribeTyping = onValue(typingRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const typingList = { ...data };
        delete typingList[storedId]; // Don't show "You are typing"
        setIsTyping(typingList);
      } else {
        setIsTyping({});
      }
    });

    return () => {
      unsubscribeMessages();
      unsubscribeTyping();
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTyping = (text: string) => {
    setMessage(text);
    if (!userId) return;

    const typingRef = ref(db, `globalChat/typing/${userId}`);
    if (text.trim().length > 0) {
      set(typingRef, userName);
      onDisconnect(typingRef).remove();
    } else {
      remove(typingRef);
    }
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!message.trim()) return;

    const chatRef = ref(db, "globalChat/messages");
    const typingRef = ref(db, `globalChat/typing/${userId}`);
    
    try {
      await push(chatRef, {
        senderName: userName,
        senderId: userId,
        text: message.trim(),
        timestamp: Date.now(),
      });
      setMessage("");
      remove(typingRef);
      setShowEmojiPicker(false);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const addEmoji = (emoji: string) => {
    setMessage(prev => prev + emoji);
    setShowEmojiPicker(false);
  };

  const [showGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    // Show greeting after a short delay on mount
    const timer = setTimeout(() => {
      setShowGreeting(true);
      // Hide after 5 seconds
      setTimeout(() => setShowGreeting(false), 5000);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoggedIn) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[70] flex flex-col items-end">
      {/* Greeting Pop-up */}
      <AnimatePresence>
        {showGreeting && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            className="mb-3 px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-2xl shadow-xl flex items-center gap-2 border border-indigo-400/30 whitespace-nowrap"
          >
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Chat with friends!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-[380px] h-[550px] bg-[#0c0c0c]/90 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col flex-grow ring-1 ring-white/5"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-5 flex justify-between items-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,rgba(255,255,255,0.2),transparent)] pointer-events-none" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="bg-white/10 p-2.5 rounded-2xl border border-white/10 backdrop-blur-md">
                  <Sparkles className="w-5 h-5 text-indigo-100" />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-tight">Public Terminal</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                    <p className="text-[10px] text-indigo-100/80 font-bold uppercase tracking-widest">
                      Live Pulse
                    </p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2.5 hover:bg-white/10 rounded-2xl transition-all border border-white/5 active:scale-90"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-[#050505]/50">
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-500 text-center p-10">
                  <div className="w-16 h-16 bg-white/[0.02] border border-white/5 rounded-[2rem] flex items-center justify-center mb-4">
                    <MessageCircle className="w-8 h-8 text-slate-700" />
                  </div>
                  <p className="text-sm font-bold text-slate-300">Channel Initialized</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Waiting for first transmission...</p>
                </div>
              ) : (
                messages.map((msg, i) => {
                  const isMe = msg.senderId === userId;
                  const isSameAsPrev = i > 0 && messages[i-1].senderId === msg.senderId;
                  
                  return (
                    <motion.div 
                      key={msg.id}
                      initial={{ opacity: 0, x: isMe ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`flex flex-col ${isMe ? "items-end" : "items-start"} ${isSameAsPrev ? "mt-[-16px]" : ""}`}
                    >
                      {!isSameAsPrev && (
                        <div className={`flex items-center gap-2 mb-1.5 px-1 ${isMe ? "flex-row-reverse" : "flex-row"}`}>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                            {isMe ? "You" : msg.senderName}
                          </span>
                          <span className="text-[9px] text-slate-600 font-mono">
                            {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                      )}
                      <div 
                        className={`max-w-[85%] px-4 py-3 rounded-2xl text-[13px] leading-relaxed shadow-sm transition-all hover:shadow-md border ${
                          isMe 
                            ? "bg-gradient-to-br from-indigo-600 to-violet-700 text-white rounded-tr-none border-indigo-400/20" 
                            : "bg-white/[0.03] text-slate-200 rounded-tl-none border-white/5 backdrop-blur-sm"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  );
                })
              )}
              
              {/* Typing Indicators */}
              <AnimatePresence>
                {Object.keys(isTyping).length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest pl-2"
                  >
                    <div className="flex gap-0.5">
                      <span className="w-1 h-1 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1 h-1 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1 h-1 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                    {Object.values(isTyping)[0]} is typing...
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-5 bg-[#0c0c0c] border-t border-white/5 space-y-3">
              {/* Emoji Quick Bar */}
              <AnimatePresence>
                {showEmojiPicker && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex gap-2 pb-2 overflow-x-auto no-scrollbar"
                  >
                    {COMMON_EMOJIS.map(emoji => (
                      <button
                        key={emoji}
                        type="button"
                        onClick={() => addEmoji(emoji)}
                        className="w-9 h-9 shrink-0 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-all text-base active:scale-90"
                      >
                        {emoji}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSendMessage} className="flex gap-3 relative">
                <div className="flex-1 relative group">
                  <input 
                    type="text"
                    value={message}
                    onChange={(e) => handleTyping(e.target.value)}
                    placeholder="Message the network..."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl pl-4 pr-12 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-500 hover:text-indigo-400 transition-colors"
                  >
                    <Smile className={`w-5 h-5 ${showEmojiPicker ? "text-indigo-400" : ""}`} />
                  </button>
                </div>
                <button 
                  type="submit"
                  disabled={!message.trim()}
                  className="bg-gradient-to-br from-indigo-500 to-violet-600 text-white p-3.5 rounded-2xl hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] disabled:opacity-30 disabled:hover:shadow-none transition-all active:scale-95 shrink-0"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Advanced Floating Logo / Toggle */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-12 h-12 rounded-[1.25rem] shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex items-center justify-center group transition-all duration-300 overflow-hidden ${
          isOpen 
            ? "bg-white text-indigo-600" 
            : "bg-gradient-to-tr from-indigo-600 via-violet-600 to-purple-600 text-white"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent)]" />
        
        {isOpen ? (
          <X className="w-6 h-6 relative z-10" />
        ) : (
          <MessageSquare className="w-6 h-6 relative z-10" />
        )}

        {/* Hover Tooltip */}
        <span className="absolute right-full mr-4 px-4 py-2 bg-[#0c0c0c] border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none translate-x-4 group-hover:translate-x-0 backdrop-blur-xl">
          {isOpen ? "Close Link" : "Network Chat"}
        </span>
      </motion.button>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
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
