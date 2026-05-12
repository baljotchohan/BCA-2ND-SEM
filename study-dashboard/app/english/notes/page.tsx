"use client";
import { ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";
import React from "react";
import { topicsData } from "./data";

export default function EnglishNotesPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-orange-200">
      <div className="print:hidden fixed top-0 left-0 right-0 p-4 md:p-6 flex z-50 pointer-events-none">
        <Link href="/" className="pointer-events-auto flex items-center justify-center bg-white w-10 h-10 rounded-full shadow-sm border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
      </div>

      <main className="max-w-5xl mx-auto bg-white min-h-screen shadow-[0_0_40px_rgba(0,0,0,0.05)] print:shadow-none print:w-full print:max-w-none px-6 py-20 md:px-12 md:py-24 mt-0 md:mt-8 print:mt-0 print:p-0">
        <div className="text-center mb-16 print:mb-8">
          <div className="bg-[#fff7ed] text-[#ea580c] text-xs font-black uppercase tracking-[0.2em] py-2 px-6 rounded-full inline-block mb-6 print:border print:border-orange-300">
            PUNJAB UNIVERSITY FORMAT • BCA-16-201 / ENG-208
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#0f172a] tracking-tight mb-4 leading-tight">
            English (Compulsory)
          </h1>
          <h2 className="text-xl md:text-2xl text-[#ea580c] font-medium italic mb-6 flex items-center justify-center gap-2">
            <BookOpen className="w-6 h-6" /> Master Notes & Summaries
          </h2>
        </div>

        <hr className="border-t-2 border-slate-100 mb-12 print:mb-8" />

        <div className="space-y-16">
          {topicsData.map((topic, idx) => (
            <section key={topic.id} className="print:break-inside-avoid">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-slate-900 text-white w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg shadow-sm shrink-0 mt-1">
                  {idx + 1}
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight leading-snug">
                  {topic.title}
                </h3>
              </div>
              
              <div className="ml-0 lg:ml-14 border border-slate-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm prose prose-slate max-w-none prose-headings:font-black prose-headings:text-slate-800 prose-h4:text-[#ea580c] prose-h4:uppercase prose-h4:tracking-widest prose-h4:text-sm prose-p:text-slate-700 prose-p:leading-relaxed prose-strong:text-slate-900 prose-strong:font-black prose-li:text-slate-700 prose-table:border prose-td:border-slate-200 prose-th:bg-slate-50">
                {topic.content}
              </div>
            </section>
          ))}
        </div>

      </main>
    </div>
  );
}
