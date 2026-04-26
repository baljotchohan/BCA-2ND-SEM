"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Send, ArrowLeft, Loader2, AlertTriangle, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import * as webllm from "@mlc-ai/web-llm";

// --- Helper Functions ---
function detectSubject(query: string): string {
  const q = query.toLowerCase();
  if (q.includes("database") || q.includes("sql") || q.includes("dbms") || q.includes("normalization")) return "DBMS";
  if (q.includes("object") || q.includes("class") || q.includes("inheritance") || q.includes("oop")) return "OOP";
  return "MIS";
}

function parseResponse(text: string) {
  const marksMatch = text.match(/MARKS:\s*([\d.]+)\/10/i);
  const feedbackMatch = text.match(/FEEDBACK:\s*(.*)/i);
  
  const marks = marksMatch ? marksMatch[1] : null;
  const feedback = feedbackMatch ? feedbackMatch[1].trim() : null;
  
  // Remove MARKS and FEEDBACK from main text
  let mainText = text.replace(/MARKS:\s*[\d.]+\/10/i, "");
  mainText = mainText.replace(/FEEDBACK:\s*.*/i, "");
  
  return { mainText: mainText.trim(), marks, feedback };
}

// --- AI Manager ---
class AIManager {
  engine: webllm.MLCEngine | null = null;
  
  async init(onProgress: (progress: string) => void) {
    if (this.engine) return;
    this.engine = new webllm.MLCEngine();
    this.engine.setInitProgressCallback((report: webllm.InitProgressReport) => {
      onProgress(report.text);
    });
    
    // 700MB model for 4GB RAM phones
    await this.engine.reload("gemma-2-2b-it-q4f16_1-MLC");
  }
  
  async askQuestion(question: string, onUpdate: (text: string) => void) {
    if (!this.engine) throw new Error("AI not initialized");
    
    const subject = detectSubject(question);
    const prompt = `You are a university examiner for BCA students in India.

Subject: ${subject}

Question: ${question}

Instructions:
1. Answer in clear exam format
2. Include: Definition, Explanation, Example
3. Keep answer under 200 words
4. At the end, provide:
   MARKS: 8/10 (rate the typical student answer if the question implies one, otherwise grade the theoretical concept explanation)
   FEEDBACK: [one sentence improvement]

Answer:`;

    const messages: webllm.ChatCompletionMessageParam[] = [
      { role: "user", content: prompt }
    ];
    
    const chunks = await this.engine.chat.completions.create({
      messages,
      temperature: 0.7,
      stream: true,
    });
    
    let fullReply = "";
    for await (const chunk of chunks) {
      const delta = chunk.choices[0]?.delta.content || "";
      fullReply += delta;
      onUpdate(fullReply);
    }
    
    return fullReply;
  }
}

// --- Main Component ---
export default function AIExamPage() {
  const [consentGiven, setConsentGiven] = useState(false);
  const [isLoadingModel, setIsLoadingModel] = useState(false);
  const [progressText, setProgressText] = useState("");
  const [isReady, setIsReady] = useState(false);
  
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [messages, setMessages] = useState<{role: "user"|"ai", content: string, parsed?: any}[]>([]);
  
  const aiRef = useRef<AIManager>(new AIManager());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleStartAI = async () => {
    setConsentGiven(true);
    setIsLoadingModel(true);
    try {
      await aiRef.current.init((text) => setProgressText(text));
      setIsReady(true);
    } catch (err) {
      console.error(err);
      setProgressText("Failed to load AI model. Please try again or use a supported browser.");
    } finally {
      setIsLoadingModel(false);
    }
  };

  const handleAsk = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || !isReady || isGenerating) return;
    
    const question = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: question }]);
    
    setIsGenerating(true);
    
    // Add placeholder for AI response
    setMessages(prev => [...prev, { role: "ai", content: "" }]);
    
    try {
      const fullResponse = await aiRef.current.askQuestion(question, (partial) => {
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
    } catch (err) {
      console.error(err);
      setMessages(prev => {
        const newMsgs = [...prev];
        newMsgs[newMsgs.length - 1] = { role: "ai", content: "Sorry, an error occurred while generating the answer." };
        return newMsgs;
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-emerald-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 px-4 py-4 flex items-center gap-4">
        <Link href="/" className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div className="flex items-center gap-2">
          <Brain className="w-6 h-6 text-emerald-500" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            AI Exam Simulator
          </h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto p-4 flex flex-col h-[calc(100vh-73px)]">
        {!consentGiven ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 flex flex-col items-center justify-center text-center max-w-md mx-auto space-y-6"
          >
            <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4">
              <Brain className="w-10 h-10 text-emerald-500" />
            </div>
            <h2 className="text-2xl font-bold">Local AI Exam Simulator</h2>
            <p className="text-gray-400 text-sm">
              This simulator runs an AI model (Gemma 2B) directly in your browser. 
              No data is sent to the cloud.
            </p>
            <div className="bg-white/5 border border-amber-500/30 p-4 rounded-xl text-left flex gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div className="text-sm text-gray-300">
                <p className="font-semibold text-amber-500 mb-1">Important:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Downloads ~700MB on first run</li>
                  <li>Requires a device with at least 4GB RAM</li>
                  <li>Works offline after initial download</li>
                </ul>
              </div>
            </div>
            <button
              onClick={handleStartAI}
              className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
            >
              Load AI Engine
            </button>
          </motion.div>
        ) : !isReady ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center max-w-md mx-auto space-y-6">
            <Loader2 className="w-12 h-12 text-emerald-500 animate-spin" />
            <h2 className="text-xl font-semibold">Initializing AI...</h2>
            <p className="text-sm text-gray-400 font-mono bg-black/50 p-4 rounded-lg w-full break-words border border-white/10">
              {progressText || "Starting WebLLM engine..."}
            </p>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-1/2 animate-pulse rounded-full" />
            </div>
          </div>
        ) : (
          <>
            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto space-y-6 pb-6 scrollbar-hide">
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500/50" />
                  <p>AI is ready! Ask an exam question.</p>
                  <div className="flex flex-wrap gap-2 justify-center mt-4">
                    {["What is MIS?", "Explain 3NF in DBMS", "What is Inheritance in OOP?"].map(q => (
                      <button 
                        key={q}
                        onClick={() => setInput(q)}
                        className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`max-w-[85%] rounded-2xl p-4 ${
                      msg.role === "user" 
                        ? "bg-emerald-600 text-white rounded-tr-sm" 
                        : "bg-white/10 border border-white/10 rounded-tl-sm text-gray-200"
                    }`}>
                      {msg.role === "user" ? (
                        <p>{msg.content}</p>
                      ) : (
                        <div className="space-y-4">
                          <div className="whitespace-pre-wrap text-sm leading-relaxed">
                            {msg.parsed ? msg.parsed.mainText : msg.content}
                          </div>
                          
                          {msg.parsed && (msg.parsed.marks || msg.parsed.feedback) && (
                            <div className="mt-4 pt-4 border-t border-white/10 space-y-2 bg-black/20 -mx-4 -mb-4 p-4 rounded-b-2xl">
                              {msg.parsed.marks && (
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Marks:</span>
                                  <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">{msg.parsed.marks}/10</span>
                                </div>
                              )}
                              {msg.parsed.feedback && (
                                <div className="flex items-start gap-2">
                                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-0.5">Feedback:</span>
                                  <span className="text-sm text-gray-300 italic">{msg.parsed.feedback}</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="pt-4">
              <form onSubmit={handleAsk} className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask an exam question..."
                  disabled={isGenerating}
                  className="w-full bg-white/5 border border-white/20 rounded-full pl-6 pr-14 py-4 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-white placeholder:text-gray-500 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isGenerating}
                  className="absolute right-2 p-3 bg-emerald-600 rounded-full text-white hover:bg-emerald-500 disabled:opacity-50 disabled:bg-white/10 disabled:text-gray-500 transition-colors"
                >
                  {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                </button>
              </form>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
