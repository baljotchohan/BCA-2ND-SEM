"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, Loader2, AlertTriangle, CheckCircle2, Target, Bot, Sparkles, User, Copy, Settings2, Code2, Infinity as InfinityIcon, Aperture, BrainCircuit } from "lucide-react";
import * as webllm from "@mlc-ai/web-llm";

// --- Configuration ---
const MODELS = [
  { id: "Qwen2.5-0.5B-Instruct-q4f16_1-MLC", name: "Mobile Nano 0.5B", size: "~350MB", desc: "Ultra-fast and light. Best for mobile phones." },
  { id: "Llama-3.2-1B-Instruct-q4f16_1-MLC", name: "Llama Fast 1B", size: "~500MB", desc: "Lightning fast, great for quick definitions." },
  { id: "gemma-2-2b-it-q4f16_1-MLC", name: "Gemma Pro 2B", size: "~700MB", desc: "Balanced smarts. The default academic mentor." },
  { id: "Qwen2.5-1.5B-Instruct-q4f16_1-MLC", name: "Qwen Logic 1.5B", size: "~900MB", desc: "Strong reasoning and coding abilities." }
];

const MODES = [
  { id: "fast", name: "⚡ Fast", prompt: "Be brief. Max 3 bullets.", maxTokens: 256 },
  { id: "pro", name: "🧠 Pro", prompt: "Detailed academic answer with examples.", maxTokens: 512 },
  { id: "thinking", name: "🤔 Think", prompt: "MODE = THINKING. Think step-by-step. Analyze the question deeply across multiple logic levels. Break down complex concepts level-by-level to deliver an exhaustive response.", maxTokens: 1024 }
];

function parseResponse(text: string) {
  const marksMatch = text.match(/MARKS:\s*([\d.]+)\/10/i);
  const feedbackMatch = text.match(/FEEDBACK:\s*(.*)/i);
  const marks = marksMatch ? marksMatch[1] : null;
  const feedback = feedbackMatch ? feedbackMatch[1].trim() : null;
  
  let mainText = text.replace(/MARKS:\s*[\d.]+\/10/i, "");
  mainText = mainText.replace(/FEEDBACK:\s*.*/i, "");
  return { mainText: mainText.trim(), marks, feedback };
}

const GeminiLogo = ({ className }: { className?: string }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 24 24" fill="url(#gemini-gradient)" className="w-full h-full drop-shadow-[0_0_10px_rgba(155,114,203,0.5)]">
        <defs>
          <linearGradient id="gemini-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4285f4" />
            <stop offset="50%" stopColor="#9b72cb" />
            <stop offset="100%" stopColor="#d96570" />
          </linearGradient>
        </defs>
        <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
      </svg>
    </div>
  );
};

// --- UI Components ---

const CodeBlock = ({ lang, code }: { lang: string, code: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="my-4 rounded-xl overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
      <div className="bg-[#0a0a0a] px-4 py-2.5 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-2 text-cyan-500">
          <Code2 className="w-4 h-4" />
          <span className="text-[10px] uppercase font-mono tracking-wider font-bold">{lang || "CODE"}</span>
        </div>
        <button 
          onClick={handleCopy} 
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-md"
        >
          {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? "COPIED" : "COPY"}
        </button>
      </div>
      <div className="bg-[#1e1e24] p-4 overflow-x-auto custom-scrollbar">
        <pre className="text-[13px] font-mono text-cyan-50 leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

const TextRenderer = ({ text }: { text: string }) => {
  const lines = text.split('\n');
  return (
    <div className="space-y-1.5 text-[13px] leading-relaxed">
      {lines.map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={i} className="h-1.5" />;
        
        let isList = false;
        let content = trimmed;
        
        if (content.startsWith('* ') || content.startsWith('- ')) {
          isList = true;
          content = content.substring(2);
        }
        
        let isHeading = false;
        if (content.startsWith('#')) {
          isHeading = true;
          content = content.replace(/^#+\s/, '');
        }

        const parts = content.split(/(\*\*.*?\*\*)/g);
        const formattedNodes = parts.map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j} className="text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">{part.slice(2, -2)}</strong>;
          }
          return part;
        });

        if (isHeading) {
          return <div key={i} className="font-bold text-cyan-400 mt-4 mb-2 text-sm uppercase tracking-widest">{formattedNodes}</div>;
        }

        if (isList) {
          return (
            <div key={i} className="flex items-start gap-2 ml-1">
              <span className="text-cyan-500 font-bold mt-0.5">•</span>
              <div className="flex-1">{formattedNodes}</div>
            </div>
          );
        }

        return <div key={i}>{formattedNodes}</div>;
      })}
    </div>
  );
};

const FormattedMessage = ({ text }: { text: string }) => {
  // Regex to extract code blocks: ```lang \n code ```
  const codeRegex = /```([^\n]*)\n([\s\S]*?)```/g;
  type Part = { type: 'text', content: string } | { type: 'code', lang: string, content: string };
  const parts: Part[] = [];
  let lastIndex = 0;
  let match;
  
  while ((match = codeRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
       parts.push({ type: 'text', content: text.slice(lastIndex, match.index) });
    }
    parts.push({ type: 'code', lang: match[1].trim(), content: match[2] });
    lastIndex = codeRegex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push({ type: 'text', content: text.slice(lastIndex) });
  }

  return (
    <div className="space-y-2">
       {parts.map((part, index) => {
         if (part.type === 'code') {
           return <CodeBlock key={index} lang={part.lang} code={part.content.trim()} />
         } else {
           return <TextRenderer key={index} text={part.content} />
         }
       })}
    </div>
  );
};

// --- AI Manager (Singleton) ---
let _aiManagerInstance: AIManager | null = null;

class AIManager {
  engine: webllm.MLCEngine | null = null;
  currentModelId: string | null = null;
  aborted = false;
  
  static getInstance() {
    if (!_aiManagerInstance) _aiManagerInstance = new AIManager();
    return _aiManagerInstance;
  }
  
  async loadModel(modelId: string, onProgress: (progress: string) => void) {
    this.currentModelId = modelId;
    if (this.engine) {
      try { await this.engine.unload(); } catch (_) {}
    }
    // Using CreateMLCEngine factory is more stable than 'new MLCEngine'
    this.engine = await webllm.CreateMLCEngine(modelId, {
      initProgressCallback: (report) => onProgress(report.text)
    });
  }

  abort() { this.aborted = true; }

  async resetEngine() {
    try { if (this.engine) await this.engine.unload(); } catch (_) {}
    this.engine = null;
    this.currentModelId = null;
  }
  
  async askQuestion(
    history: {role: "user"|"ai", content: string}[], 
    newQuestion: string, 
    userName: string, 
    modePrompt: string, 
    maxTokens: number, 
    onUpdate: (text: string) => void,
    isRetry = false
  ): Promise<string> {
    if (!this.engine) throw new Error("AI not initialized");
    this.aborted = false;
    
    const messages: webllm.ChatCompletionMessageParam[] = [
      { 
        role: "system", 
        content: `You are ${userName}'s academic AI. ${modePrompt} Rules: No greetings. Use bullet points, bold, emojis. Code in \`\`\`lang blocks.`
      }
    ];

    const recentHistory = history.slice(-4);
    for (const msg of recentHistory) {
      messages.push({ role: msg.role === "ai" ? "assistant" : "user", content: msg.content });
    }
    messages.push({ role: "user", content: newQuestion });

    try {
      const chunks = await this.engine.chat.completions.create({
        messages,
        temperature: 0.7,
        max_tokens: maxTokens,
        stream: true,
      });
      
      let fullReply = "";
      let lastUpdate = 0;
      for await (const chunk of chunks) {
        if (this.aborted) break;
        const delta = chunk.choices[0]?.delta.content || "";
        fullReply += delta;
        const now = Date.now();
        if (now - lastUpdate > 100) {
          lastUpdate = now;
          onUpdate(fullReply);
        }
      }
      onUpdate(fullReply);
      return fullReply;
    } catch (err: any) {
      // ADVANCED: Auto-Retry on Tokenizer Crash
      if (err?.message?.includes("deleted") && !isRetry && this.currentModelId) {
        onUpdate("🔄 Critical Error: Tokenizer lost. Attempting auto-recovery...");
        await this.loadModel(this.currentModelId, (p) => onUpdate(`🔄 Recovering: ${p}`));
        return this.askQuestion(history, newQuestion, userName, modePrompt, maxTokens, onUpdate, true);
      }
      throw err;
    }
  }
}

export default function AIFab() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  
  const [userName, setUserName] = useState("");
  const [tempName, setTempName] = useState("");
  const [step, setStep] = useState<"greeting" | "consent" | "loading" | "chat">("greeting");
  
  const [progressText, setProgressText] = useState("");
  const [isReady, setIsReady] = useState(false);
  
  // Settings
  const [selectedModel, setSelectedModel] = useState(MODELS[1].id);
  const [selectedMode, setSelectedMode] = useState(MODES[1].id);
  
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [messages, setMessages] = useState<{role: "user"|"ai", content: string, parsed?: any}[]>([]);
  
  const [hasWebGPU, setHasWebGPU] = useState<boolean>(true);
  const [gpuError, setGpuError] = useState<string | null>(null);

  const aiRef = useRef<AIManager>(AIManager.getInstance());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof navigator !== 'undefined' && !(navigator as any).gpu) {
      setHasWebGPU(false);
    }
    
    // Check if on mobile device, if so, default to the smallest model
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      setSelectedModel(MODELS[0].id); // Mobile Nano 0.5B
    }

    const savedName = localStorage.getItem("ai_user_name");
    if (savedName) {
      setUserName(savedName);
      setStep("consent");
    } else {
      const timer = setTimeout(() => setShowTooltip(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen, step]);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setShowTooltip(false);
  };

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tempName.trim()) return;
    setUserName(tempName.trim());
    localStorage.setItem("ai_user_name", tempName.trim());
    setStep("consent");
  };

  const handleStartAI = async (modelIdToLoad: string = selectedModel) => {
    if (!hasWebGPU) {
      setGpuError("WebGPU is not supported by your browser. Please use Chrome on Android, desktop, or enable WebGPU flags.");
      return;
    }
    setStep("loading");
    setIsReady(false);
    setGpuError(null);
    try {
      await aiRef.current.loadModel(modelIdToLoad, (text) => setProgressText(text));
      setIsReady(true);
      setStep("chat");
    } catch (err: any) {
      console.error(err);
      setProgressText(`Failed to load: ${err.message || "Unknown error"}`);
      setGpuError(`Error initializing AI: ${err.message || "Unknown error"}. Try 'Mobile Nano 0.5B' or refresh.`);
      setStep("consent"); // Fallback to consent screen to show error
    }
  };

  const switchModel = (newModelId: string) => {
    setSelectedModel(newModelId);
    handleStartAI(newModelId); // triggers reload screen
  };

  const handleAsk = useCallback(async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || !isReady || isGenerating) return;
    
    const question = input.trim();
    setInput("");
    
    const historyToPass = messages.map(m => ({ role: m.role, content: m.content }));
    setMessages(prev => [...prev, { role: "user", content: question }]);
    setIsGenerating(true);
    setMessages(prev => [...prev, { role: "ai", content: "⏳ Generating..." }]);
    
    const mode = MODES.find(m => m.id === selectedMode);
    const modePrompt = mode?.prompt || "";
    const maxTokens = (mode as any)?.maxTokens || 512;
    
    try {
      const fullResponse = await aiRef.current.askQuestion(historyToPass, question, userName, modePrompt, maxTokens, (partial) => {
        setMessages(prev => {
          const newMsgs = [...prev];
          newMsgs[newMsgs.length - 1] = { role: "ai", content: partial };
          return newMsgs;
        });
      });
      
      const parsed = parseResponse(fullResponse);
      setMessages(prev => {
        const newMsgs = [...prev];
        newMsgs[newMsgs.length - 1] = { role: "ai", content: fullResponse, parsed };
        return newMsgs;
      });
    } catch (err: any) {
      console.error("Generation error:", err);
      const errorMsg = err?.message || "Unknown error";
      setMessages(prev => {
        const newMsgs = [...prev];
        newMsgs[newMsgs.length - 1] = { role: "ai", content: `⚠️ Error: ${errorMsg}. Try asking again or switch to a smaller model.` };
        return newMsgs;
      });
      // If engine crashed, reset it so next attempt reloads
      if (errorMsg.includes("lost") || errorMsg.includes("destroy") || errorMsg.includes("GPU")) {
        await aiRef.current.resetEngine();
        setIsReady(false);
        setStep("consent");
        setGpuError("The AI engine crashed during generation. Please re-initialize with a smaller model.");
      }
    } finally {
      setIsGenerating(false);
    }
  }, [input, isReady, isGenerating, messages, selectedMode, userName]);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-4 pointer-events-none">
        <AnimatePresence>
          {!isOpen && showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-cyan-500 text-black px-4 py-3 rounded-2xl rounded-br-sm shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center gap-3 cursor-pointer pointer-events-auto"
              onClick={handleOpen}
            >
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="text-sm font-bold pr-2">Hi! I'm here to assist you.</span>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={handleOpen}
          className="w-14 h-14 bg-black border-2 border-white/10 hover:border-white/20 hover:bg-[#0a0a0a] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-transform hover:scale-105 active:scale-95 relative pointer-events-auto"
        >
          {isOpen ? (
            <X className="w-6 h-6 absolute" />
          ) : (
            <div className="w-6 h-6 absolute flex items-center justify-center">
              <GeminiLogo className="w-full h-full" />
            </div>
          )}
          {!isOpen && !isReady && !showTooltip && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-[#050505] animate-pulse"></span>
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", bounce: 0.3 }}
            className="fixed bottom-24 left-4 right-4 md:left-auto md:right-4 md:w-[400px] h-[650px] max-h-[85vh] glass-panel rounded-3xl shadow-2xl flex flex-col overflow-hidden z-[60]"
          >
            {/* Header */}
            <div className="border-b border-white/5 p-4 flex items-center justify-between bg-gradient-to-r from-white/[0.02] to-transparent shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <GeminiLogo className="w-full h-full" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-200">AI Prep Assistant</h3>
                  <p className="text-[10px] text-cyan-500 font-mono flex items-center gap-1">
                    <Settings2 className="w-3 h-3" /> Configurable Engine
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-hidden flex flex-col relative bg-[#050505]/40">
              
              {/* STEP 1: GREETING & NAME INPUT */}
              {step === "greeting" && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6 overflow-y-auto custom-scrollbar"
                >
                  <div className="w-24 h-24 mx-auto bg-cyan-500/10 rounded-full flex items-center justify-center border-2 border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                    <GeminiLogo className="w-12 h-12" />
                  </div>
                  
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-white tracking-tight flex items-center justify-center gap-2">
                      Hello there! <Sparkles className="w-5 h-5 text-amber-400" />
                    </h2>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                      I'm your personal AI Study Mentor. I'm here to help you understand concepts, solve queries, and ace your BCA exams.
                    </p>
                  </div>

                  <form onSubmit={handleSaveName} className="w-full max-w-sm mt-4 space-y-4">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <input
                        type="text"
                        value={tempName}
                        onChange={(e) => setTempName(e.target.value)}
                        placeholder="What should I call you?"
                        className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-white placeholder:text-slate-500"
                        autoFocus
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={!tempName.trim()}
                      className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all disabled:opacity-50 disabled:shadow-none"
                    >
                      Let's Begin
                    </button>
                  </form>
                </motion.div>
              )}

              {/* STEP 2: CONSENT (DOWNLOAD WARNING) */}
              {step === "consent" && (
                <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-4 overflow-y-auto custom-scrollbar">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mb-2 border border-cyan-500/20">
                    <Target className="w-8 h-8 text-cyan-500" />
                  </div>
                  <h2 className="text-lg font-semibold text-slate-200">
                    Nice to meet you, <span className="text-cyan-400">{userName}</span>!
                  </h2>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    To give you instant, private answers, my brain runs entirely in your browser. No data goes to the cloud.
                  </p>
                  
                  {!hasWebGPU ? (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl text-xs text-left w-full">
                      <div className="flex items-center gap-2 mb-2 font-bold text-sm">
                        <AlertTriangle className="w-4 h-4" /> WebGPU Unsupported
                      </div>
                      Your browser does not support WebGPU, which is required to run the AI engine locally. <br/><br/>
                      <b>Mobile Users:</b> Please try using Google Chrome on Android. For iOS/Safari, you may need to enable WebGPU in Experimental Features.
                    </div>
                  ) : (
                    <>
                      {gpuError && (
                        <div className="bg-amber-500/10 border border-amber-500/30 text-amber-400 p-3 rounded-xl text-xs text-left w-full mb-2 flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                          <span>{gpuError}</span>
                        </div>
                      )}
                      <div className="w-full text-left mt-4 space-y-2">
                        <label className="text-xs font-semibold text-slate-400 ml-1">Select Engine Model:</label>
                        <select 
                          value={selectedModel} 
                          onChange={(e) => setSelectedModel(e.target.value)}
                          className="w-full bg-black/50 text-sm text-cyan-400 p-3 rounded-xl outline-none border border-white/10 appearance-none"
                        >
                          {MODELS.map(m => <option key={m.id} value={m.id}>{m.name} ({m.size})</option>)}
                        </select>
                        <p className="text-[10px] text-slate-500 italic ml-1">
                          {MODELS.find(m => m.id === selectedModel)?.desc}
                        </p>
                      </div>

                      <button
                        onClick={() => handleStartAI()}
                        className="w-full py-3 mt-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
                      >
                        Download & Initialize AI
                      </button>
                    </>
                  )}
                </div>
              )}

              {/* STEP 3: LOADING */}
              {step === "loading" && (
                <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full" />
                    <Loader2 className="w-10 h-10 text-cyan-500 animate-spin relative z-10" />
                  </div>
                  <h2 className="text-sm font-semibold text-slate-200">Downloading Weights...</h2>
                  <p className="text-[10px] text-cyan-400 font-mono bg-black/50 p-3 rounded-lg w-full break-words border border-white/5">
                    {progressText || "Loading WebLLM..."}
                  </p>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 w-1/2 animate-pulse rounded-full" />
                  </div>
                </div>
              )}

              {/* STEP 4: CHAT */}
              {step === "chat" && (
                <div className="flex-1 flex flex-col overflow-hidden">
                  
                  {/* Active Configuration Bar */}
                  <div className="bg-white/[0.02] border-b border-white/5 p-2 flex gap-2 shrink-0">
                    <select 
                      value={selectedModel} 
                      onChange={(e) => switchModel(e.target.value)}
                      className="bg-black/40 text-[11px] font-semibold text-slate-300 p-2 rounded-lg outline-none flex-1 border border-white/5 hover:border-white/10 transition-colors"
                    >
                      {MODELS.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                    </select>
                    <select 
                      value={selectedMode} 
                      onChange={(e) => setSelectedMode(e.target.value)}
                      className="bg-cyan-500/10 text-[11px] font-bold text-cyan-400 p-2 rounded-lg outline-none flex-1 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors"
                    >
                      {MODES.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                    </select>
                  </div>

                  <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                    {messages.length === 0 && (
                      <div className="h-full flex flex-col items-center justify-center text-center text-slate-400 space-y-4">
                        <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                          <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                        </div>
                        <p className="text-xs font-medium">I'm ready, {userName}! Let's tackle your syllabus.</p>
                        <div className="flex flex-col gap-2 w-full mt-2">
                          {["Write a C++ class for a Car", "Explain Normalization in DBMS", "Difference between MIS and DSS"].map(q => (
                            <button 
                              key={q}
                              onClick={() => setInput(q)}
                              className="text-[11px] glass-panel hover:bg-white/5 border border-white/10 rounded-xl px-4 py-3 transition-colors text-left text-slate-300"
                            >
                              {q}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {messages.map((msg, i) => (
                      <div key={i} className={`flex w-full ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[90%] md:max-w-[85%] rounded-2xl p-3 text-sm text-left ${
                          msg.role === "user" 
                            ? "bg-cyan-500 text-black rounded-tr-sm font-medium" 
                            : "glass-panel border border-white/10 rounded-tl-sm text-slate-200 shadow-lg"
                        }`}>
                          {msg.role === "user" ? (
                            <p>{msg.content}</p>
                          ) : (
                            <div className="space-y-3">
                              <FormattedMessage text={msg.parsed ? msg.parsed.mainText : msg.content} />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input Area */}
                  <div className="p-3 border-t border-white/5 bg-black/40 shrink-0 backdrop-blur-md">
                    <form onSubmit={handleAsk} className="relative flex items-center">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask a syllabus query..."
                        disabled={isGenerating}
                        className="w-full bg-white/5 border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-white placeholder:text-slate-500 disabled:opacity-50"
                      />
                      <button
                        type="submit"
                        disabled={!input.trim() || isGenerating}
                        className="absolute right-1.5 p-2 bg-cyan-500 rounded-full text-black hover:bg-cyan-400 disabled:opacity-50 disabled:bg-white/10 disabled:text-slate-500 transition-colors"
                      >
                        {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
