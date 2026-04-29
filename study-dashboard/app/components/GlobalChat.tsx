"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { db } from "../lib/firebase";
import { ref, push, onValue, query, limitToLast, set, onDisconnect, remove } from "firebase/database";
import { Send, MessageSquare, X, MessageCircle, Sparkles, Smile } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ChatMessage {
  id: string;
  senderName: string;
  senderId: string;
  text: string;
  timestamp: number;
}

const COMMON_EMOJIS = ["❤️", "🔥", "😂", "😮", "🙌", "👍", "✨", "📚", "💯", "✅"];

// CRITICAL: Chat data lives under /onlineUsers/globalChat/ because
// Firebase rules only grant read/write to the /onlineUsers path.
const CHAT_MESSAGES_PATH = "onlineUsers/globalChat/messages";
const CHAT_TYPING_PATH = "onlineUsers/globalChat/typing";

export default function GlobalChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState<{ [key: string]: string }>({});
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Poll localStorage for login state changes (handles async joinExam)
  useEffect(() => {
    const checkLogin = () => {
      const storedName = localStorage.getItem("examUserName");
      const storedId = localStorage.getItem("persistentUserId");

      if (storedName && storedId) {
        setUserName(storedName);
        setUserId(storedId);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    checkLogin();
    const interval = setInterval(checkLogin, 2000);
    return () => clearInterval(interval);
  }, []);

  // Listen for messages from Firebase
  useEffect(() => {
    const chatRef = ref(db, CHAT_MESSAGES_PATH);
    const chatQuery = query(chatRef, limitToLast(50));

    const unsubscribeMessages = onValue(chatQuery, (snapshot) => {
      setIsConnected(true);
      setError(null);
      const data = snapshot.val();
      if (data) {
        const msgList: ChatMessage[] = Object.entries(data).map(([id, val]: [string, any]) => ({
          id,
          senderName: val.senderName || "Unknown",
          senderId: val.senderId || "unknown",
          text: val.text || "",
          timestamp: val.timestamp || 0,
        }));
        setMessages(msgList.sort((a, b) => a.timestamp - b.timestamp));
      } else {
        setMessages([]);
      }
    }, (err) => {
      console.error("Chat listener error:", err);
      setIsConnected(true);
      if (err.message.includes("permission_denied")) {
        setError("Database Access Denied. Please update Firebase Rules.");
      } else {
        setError("Connection failed. Retrying...");
      }
    });

    return () => unsubscribeMessages();
  }, []);

  // Listen for typing status
  useEffect(() => {
    if (!userId) return;

    const typingRef = ref(db, CHAT_TYPING_PATH);
    const unsubscribeTyping = onValue(typingRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const typingList = { ...data };
        delete typingList[userId];
        setIsTyping(typingList);
      } else {
        setIsTyping({});
      }
    });

    return () => unsubscribeTyping();
  }, [userId]);

  // Auto-scroll to bottom
  const scrollToBottom = useCallback(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, isOpen, isTyping, scrollToBottom]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleTyping = (text: string) => {
    setMessage(text);
    if (!userId) return;

    const typingRef = ref(db, `${CHAT_TYPING_PATH}/${userId}`);
    if (text.trim().length > 0) {
      set(typingRef, "Someone").catch(() => {}); // Identity hidden
      onDisconnect(typingRef).remove().catch(() => {});
    } else {
      remove(typingRef).catch(() => {});
    }
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmedMsg = message.trim();
    if (!trimmedMsg || isSending) return;

    const currentName = localStorage.getItem("examUserName") || userName;
    const currentId = localStorage.getItem("persistentUserId") || userId;

    if (!currentName || !currentId) {
      console.error("Cannot send: not logged in");
      return;
    }

    setIsSending(true);
    const chatRef = ref(db, CHAT_MESSAGES_PATH);
    const typingRef = ref(db, `${CHAT_TYPING_PATH}/${currentId}`);

    try {
      await push(chatRef, {
        senderName: "BCA Student", // Identity hidden
        senderId: currentId,
        text: trimmedMsg,
        timestamp: Date.now(),
      });
      setMessage("");
      remove(typingRef).catch(() => {});
      setShowEmojiPicker(false);
    } catch (error) {
      console.error("Send message error:", error);
    } finally {
      setIsSending(false);
    }
  };

  const addEmoji = (emoji: string) => {
    setMessage(prev => prev + emoji);
    setShowEmojiPicker(false);
    inputRef.current?.focus();
  };

  // Greeting pop-up
  useEffect(() => {
    if (!isLoggedIn) return;
    const timer = setTimeout(() => {
      setShowGreeting(true);
      setTimeout(() => setShowGreeting(false), 5000);
    }, 1500);
    return () => clearTimeout(timer);
  }, [isLoggedIn]);

  const formatTime = (timestamp: number) => {
    try {
      return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch {
      return "";
    }
  };

  if (!isLoggedIn) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[70] flex flex-col items-end" style={{ maxWidth: 'calc(100vw - 32px)' }}>
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
            className="mb-3 bg-[#0c0c0c]/95 backdrop-blur-3xl border border-white/10 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col ring-1 ring-white/5"
            style={{
              width: 'min(380px, calc(100vw - 32px))',
              height: 'min(520px, calc(100vh - 100px))',
              borderRadius: '1.5rem',
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-4 py-3 flex justify-between items-center text-white relative overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,rgba(255,255,255,0.2),transparent)] pointer-events-none" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="bg-white/10 p-2 rounded-xl border border-white/10 backdrop-blur-md flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-indigo-100" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-bold text-sm tracking-tight leading-tight">Public Terminal</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
                    <p className="text-[9px] text-indigo-100/80 font-black uppercase tracking-widest leading-none">
                      Live Pulse
                    </p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-xl transition-all border border-white/5 active:scale-90 relative z-10 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div 
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#050505]/50"
              style={{ 
                overscrollBehavior: 'contain',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {!isConnected ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-500">
                  <div className="w-8 h-8 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mb-3" />
                  <p className="text-[10px] font-bold uppercase tracking-widest">Connecting Terminal...</p>
                </div>
              ) : error ? (
                <div className="h-full flex flex-col items-center justify-center text-rose-500 text-center p-6">
                  <div className="w-12 h-12 bg-rose-500/10 rounded-2xl flex items-center justify-center mb-3">
                    <X className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-bold">{error}</p>
                  <p className="text-[10px] opacity-50 uppercase tracking-widest mt-2">Waiting for Permission</p>
                </div>
              ) : messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-500 text-center p-6">
                  <div className="w-14 h-14 bg-white/[0.02] border border-white/5 rounded-2xl flex items-center justify-center mb-3">
                    <MessageCircle className="w-7 h-7 text-slate-700" />
                  </div>
                  <p className="text-sm font-bold text-slate-300">Channel Initialized</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Send the first message!</p>
                </div>
              ) : (
                messages.map((msg, i) => {
                  const isMe = msg.senderId === userId;
                  const isSameAsPrev = i > 0 && messages[i-1].senderId === msg.senderId;
                  
                  return (
                    <div 
                      key={msg.id}
                      className={`flex flex-col ${isMe ? "items-end" : "items-start"} ${isSameAsPrev ? "-mt-1" : ""}`}
                    >
                      {!isSameAsPrev && (
                        <div className={`flex items-center gap-2 mb-1 px-1 ${isMe ? "flex-row-reverse" : "flex-row"}`}>
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                            {isMe ? "You" : "BCA Student"}
                          </span>
                          <span className="text-[9px] text-slate-600 font-mono">
                            {formatTime(msg.timestamp)}
                          </span>
                        </div>
                      )}
                      <div 
                        className={`max-w-[80%] px-3.5 py-2.5 text-[13px] leading-relaxed border break-words ${
                          isMe 
                            ? "bg-gradient-to-br from-indigo-600 to-violet-700 text-white rounded-2xl rounded-tr-md border-indigo-400/20" 
                            : "bg-white/[0.03] text-slate-200 rounded-2xl rounded-tl-md border-white/5 backdrop-blur-sm"
                        }`}
                        style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}
                      >
                        {msg.text}
                      </div>
                    </div>
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
                    {Object.keys(isTyping).length > 1 ? "Multiple people are" : "Someone is"} typing...
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="px-3 py-3 bg-[#0c0c0c] border-t border-white/5 shrink-0">
              {/* Emoji Quick Bar */}
              <AnimatePresence>
                {showEmojiPicker && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex gap-1.5 pb-2 overflow-x-auto"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {COMMON_EMOJIS.map(emoji => (
                      <button
                        key={emoji}
                        type="button"
                        onClick={() => addEmoji(emoji)}
                        className="w-8 h-8 shrink-0 flex items-center justify-center rounded-lg bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-all text-sm active:scale-90"
                      >
                        {emoji}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSendMessage} className="flex gap-2 items-center">
                <div className="flex-1 relative min-w-0">
                  <input 
                    ref={inputRef}
                    type="text"
                    value={message}
                    onChange={(e) => handleTyping(e.target.value)}
                    placeholder="Message..."
                    maxLength={500}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-3 pr-10 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/10 transition-all"
                    style={{ fontSize: '16px' }}
                  />
                  <button 
                    type="button"
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-500 hover:text-indigo-400 transition-colors"
                  >
                    <Smile className={`w-4 h-4 ${showEmojiPicker ? "text-indigo-400" : ""}`} />
                  </button>
                </div>
                <button 
                  type="submit"
                  disabled={!message.trim() || isSending}
                  className="bg-gradient-to-br from-indigo-500 to-violet-600 text-white p-3 rounded-xl hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] disabled:opacity-30 disabled:hover:shadow-none transition-all active:scale-95 shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
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

        {/* Hover Tooltip - hidden on mobile */}
        <span className="hidden md:block absolute right-full mr-4 px-4 py-2 bg-[#0c0c0c] border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none translate-x-4 group-hover:translate-x-0 backdrop-blur-xl">
          {isOpen ? "Close Chat" : "Network Chat"}
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
      `}</style>
    </div>
  );
}
