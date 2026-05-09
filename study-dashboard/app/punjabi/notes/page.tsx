"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { topicsData } from "./data";

export default function PunjabiNotesPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-orange-200">
      
      <div className="print:hidden fixed top-0 left-0 right-0 p-4 md:p-6 flex z-50 pointer-events-none">
        <Link 
          href="/" 
          className="pointer-events-auto flex items-center justify-center bg-white w-10 h-10 rounded-full shadow-sm border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
      </div>

      <main className="max-w-5xl mx-auto bg-white min-h-screen shadow-[0_0_40px_rgba(0,0,0,0.05)] print:shadow-none print:w-full print:max-w-none px-6 py-20 md:px-12 md:py-24 mt-0 md:mt-8 print:mt-0 print:p-0">
        
        <div className="text-center mb-12 print:mb-8">
          <div className="bg-[#fff7ed] text-[#ea580c] text-xs font-black uppercase tracking-[0.2em] py-2 px-6 rounded-full inline-block mb-8 print:border print:border-orange-300">
            ANTIGRAVITY • GURMUKHI EDITION
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#0f172a] tracking-tight mb-4 leading-tight">
            ਪੰਜਾਬੀ (PUNJABI)
          </h1>
          <h2 className="text-xl md:text-2xl text-[#ea580c] font-medium italic mb-8">
            Complete Master Notes (Syllabus Coverage)
          </h2>
          <div className="flex items-center justify-center gap-6 text-xs font-black text-slate-400 uppercase tracking-widest">
            <span>Code: PBI-207</span>
            <span>•</span>
            <span>May 2026 Exams</span>
          </div>
        </div>

        <hr className="border-t-2 border-slate-100 mb-12 print:mb-8" />

        <div className="space-y-12">
          {topicsData.map((topic) => (
            <div key={topic.id} className="print:break-inside-avoid">
              
              <div className="flex items-start gap-4 mb-5">
                <div className="bg-[#0f172a] text-white w-10 h-10 rounded-lg flex items-center justify-center font-black text-xl shadow-sm shrink-0">
                  {topic.id}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight uppercase pt-1">
                    {topic.title}
                  </h3>
                </div>
              </div>
              
              <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm print:shadow-none print:border-slate-300 ml-0 lg:ml-14">
                {topic.content}
              </div>

            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
