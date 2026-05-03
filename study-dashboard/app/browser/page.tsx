"use client";
import React, { useState, useEffect } from "react";
import { Search, ArrowLeft, Globe, Loader2, ShieldAlert, X, RefreshCw, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function BrowserPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [aiOverview, setAiOverview] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [source, setSource] = useState<string>("");
  
  // State for the inbuilt browser view
  const [activeUrl, setActiveUrl] = useState<string | null>(null);
  const [iframeLoading, setIframeLoading] = useState(false);

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;

    // Reset iframe view if searching again
    setActiveUrl(null);
    setLoading(true);
    setHasSearched(true);
    
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      if (data.results) {
        setResults(data.results);
        setAiOverview(data.aiOverview || "");
        setSource(data.source || "DuckDuckGo");
      } else {
        setResults([]);
        setAiOverview("");
      }
    } catch (error) {
      console.error("Search failed", error);
      setResults([]);
    }
    setLoading(false);
  };

  const openInbuiltBrowser = (url: string) => {
    setActiveUrl(url);
    setIframeLoading(true);
  };

  const closeBrowser = () => {
    setActiveUrl(null);
    setIframeLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-indigo-200 flex flex-col h-screen overflow-hidden">
      {/* Top Navigation / Address Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-3 p-3 md:p-4 bg-white border-b border-slate-200 shadow-sm shrink-0 z-50">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          {activeUrl ? (
            <button 
              onClick={closeBrowser}
              className="flex items-center justify-center bg-slate-50 w-10 h-10 rounded-full shadow-sm border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors shrink-0"
              title="Back to Search Results"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          ) : (
            <Link 
              href="/" 
              className="flex items-center justify-center bg-slate-50 w-10 h-10 rounded-full shadow-sm border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors shrink-0"
              title="Back to Dashboard"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
          )}
          
          {/* Active URL Address Bar (when in browser mode) */}
          {activeUrl && (
            <div className="flex-1 flex items-center bg-slate-100 rounded-full px-4 py-2 border border-slate-200 gap-2 min-w-0">
              <ShieldAlert className="w-4 h-4 text-emerald-500 shrink-0" />
              <div className="text-xs text-slate-600 truncate flex-1 font-mono">{activeUrl}</div>
              <button onClick={() => setIframeLoading(true)} className="text-slate-400 hover:text-slate-700 transition-colors">
                <RefreshCw className={`w-4 h-4 ${iframeLoading ? "animate-spin" : ""}`} />
              </button>
              <a href={activeUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors ml-1" title="Open in New Tab">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* Search Bar (always visible) */}
        {!activeUrl && (
          <form onSubmit={handleSearch} className="flex-1 w-full max-w-3xl relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the web securely..."
              className="w-full bg-slate-50 border border-slate-200 rounded-full py-2.5 px-6 pl-12 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all shadow-sm text-sm"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <button 
              type="submit" 
              disabled={loading}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-1.5 rounded-full hover:bg-indigo-700 transition-colors disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Globe className="w-4 h-4" />}
            </button>
          </form>
        )}
      </div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden relative bg-slate-50">
        
        {/* Inbuilt Browser View (Iframe) */}
        {activeUrl ? (
          <div className="w-full h-full relative">
            {iframeLoading && (
              <div className="absolute inset-0 bg-slate-50/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center">
                <Loader2 className="w-10 h-10 text-indigo-500 animate-spin mb-4" />
                <p className="text-slate-600 font-medium animate-pulse">Loading webpage securely...</p>
                <p className="text-xs text-slate-400 mt-2 max-w-sm text-center">Bypassing restrictions and establishing proxy connection to {new URL(activeUrl).hostname}</p>
              </div>
            )}
            <iframe 
              src={`/api/proxy?url=${encodeURIComponent(activeUrl)}`} 
              className="w-full h-full border-none bg-white"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
              onLoad={() => setIframeLoading(false)}
              onError={() => setIframeLoading(false)}
            />
          </div>
        ) : (
          
          /* Search Results View */
          <div className="h-full overflow-y-auto p-4 md:p-8">
            <div className="max-w-4xl mx-auto pb-20">
              {!hasSearched ? (
                <div className="flex flex-col items-center justify-center h-[50vh] text-center px-4">
                  <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-indigo-100">
                    <Globe className="w-10 h-10 text-indigo-500" />
                  </div>
                  <h1 className="text-2xl md:text-3xl font-black text-slate-800 mb-2 tracking-tight">
                    Integrated Web Browser
                  </h1>
                  <p className="text-slate-500 max-w-md text-sm">
                    Search the web and open any website directly inside your dashboard. Powered by proxy bypass technology.
                  </p>
                </div>
              ) : loading ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <Loader2 className="w-10 h-10 text-indigo-500 animate-spin mb-4" />
                  <p className="text-slate-500 animate-pulse font-medium">Fetching real-time results...</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-6 ml-2">
                    <ShieldAlert className="w-4 h-4 text-emerald-500" />
                    Results from {source}
                  </div>

                  {aiOverview && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-indigo-50 p-6 rounded-3xl border border-indigo-100 shadow-sm relative overflow-hidden mb-8"
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Globe className="w-24 h-24 text-indigo-600" />
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                          <span className="text-white text-[10px] font-black">AI</span>
                        </div>
                        <h3 className="font-bold text-indigo-900 tracking-tight">AI Overview</h3>
                      </div>
                      <p className="text-indigo-800/80 text-sm leading-relaxed relative z-10 font-medium">
                        {aiOverview}
                      </p>
                    </motion.div>
                  )}

                  <AnimatePresence>
                    {results.length > 0 ? (
                      results.map((result, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
                          onClick={() => openInbuiltBrowser(result.url)}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="text-xs text-slate-400 mb-1 truncate max-w-xl flex items-center gap-1 font-mono">
                                {new URL(result.url).hostname}
                              </div>
                              <h2 className="text-lg font-bold text-indigo-600 group-hover:text-indigo-800 group-hover:underline mb-2 leading-tight">
                                {result.title}
                              </h2>
                              <p className="text-sm text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: result.snippet }} />
                            </div>
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-700 mb-2">No results found</h3>
                        <p className="text-slate-500 text-sm">Try adjusting your search query.</p>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
