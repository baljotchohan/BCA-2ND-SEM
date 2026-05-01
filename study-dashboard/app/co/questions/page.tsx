"use client";
import { Printer, ArrowLeft, BookOpen, ScrollText } from "lucide-react";
import Link from "next/link";
import React from "react";
import { questionsData } from "./data";

export default function COQuestionsPage() {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-indigo-200">
      <div className="print:hidden fixed top-0 left-0 right-0 p-4 md:p-6 flex justify-between items-center z-50 pointer-events-none">
        <Link href="/" className="pointer-events-auto flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-sm border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Dashboard
        </Link>
        <button onClick={handlePrint} className="pointer-events-auto flex items-center gap-2 bg-[#4f46e5] text-white px-5 py-2.5 rounded-full shadow-md hover:bg-[#4338ca] transition-colors text-sm font-bold tracking-wide">
          <Printer className="w-4 h-4" /> Print Question Bank
        </button>
      </div>

      <main className="max-w-5xl mx-auto bg-white min-h-screen shadow-[0_0_40px_rgba(0,0,0,0.05)] print:shadow-none print:w-full print:max-w-none px-6 py-20 md:px-12 md:py-24 mt-0 md:mt-8 print:mt-0 print:p-0">
        <div className="text-center mb-16 print:mb-8">
          <div className="bg-[#eef2ff] text-[#4338ca] text-xs font-black uppercase tracking-[0.2em] py-2 px-6 rounded-full inline-block mb-6 print:border print:border-indigo-300">
            PUNJAB UNIVERSITY FORMAT • NBCA201
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#0f172a] tracking-tight mb-4 leading-tight">
            COMPUTER ORGANIZATION
          </h1>
          <h2 className="text-xl md:text-2xl text-[#4f46e5] font-medium italic mb-6 flex items-center justify-center gap-2">
            <ScrollText className="w-6 h-6" /> Complete Question Bank (Solved)
          </h2>
        </div>

        <hr className="border-t-2 border-slate-100 mb-12 print:mb-8" />

        {questionsData.map((unit, idx) => (
          <section key={idx} className="mb-16 print:break-after-page">
            <UnitHeader title={unit.unit} />
            {unit.questions.map((q, qIdx) => (
              <QuestionBlock key={qIdx} qId={q.id} title={q.title}>
                <Solve en={q.en} pa={q.pa} />
              </QuestionBlock>
            ))}
          </section>
        ))}
      </main>
    </div>
  );
}

function UnitHeader({ title }: { title: string }) {
  return (
    <div className="bg-slate-900 text-white py-3 px-6 rounded-xl font-black text-xl mb-8 flex items-center justify-center tracking-widest shadow-sm print:break-after-avoid text-center">
      {title}
    </div>
  );
}

function QuestionBlock({ qId, title, children }: { qId: string, title: string, children: React.ReactNode }) {
  return (
    <div className="mb-10 print:break-inside-avoid">
      <div className="flex items-start gap-4 mb-5">
        <div className="bg-[#4f46e5] text-white px-3 py-1.5 rounded-lg font-black text-sm shadow-sm shrink-0 mt-1">
          {qId}
        </div>
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight leading-snug whitespace-pre-wrap">
            {title}
          </h3>
        </div>
      </div>
      <div className="ml-0 lg:ml-12 border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
        {children}
      </div>
    </div>
  );
}

function FormattedContent({ text }: { text: string }) {
  const processTable = (tableText: string) => {
    const rows = tableText.trim().split('\n').filter(r => r.includes('|') && !r.includes('---'));
    if (rows.length === 0) return null;
    return (
      <div className="overflow-x-auto my-4 rounded-lg border border-slate-200">
        <table className="min-w-full text-sm text-left">
          <tbody className="divide-y divide-slate-200">
            {rows.map((row, i) => (
              <tr key={i} className={i === 0 ? "bg-slate-50 font-bold" : "bg-white"}>
                {row.split('|').filter(c => c.trim()).map((cell, j) => (
                  <td key={j} className="px-4 py-2 border-r border-slate-200 last:border-r-0 whitespace-pre-wrap" dangerouslySetInnerHTML={{__html: parseLine(cell.trim())}} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  const parseLine = (line: string) => {
    return line
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>')
      .replace(/_(.*?)_/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code class="bg-slate-100 px-1 py-0.5 rounded text-indigo-600 font-mono text-xs">$1</code>');
  };

  const segments = text.split('```');
  
  return (
    <div className="space-y-3 text-sm text-slate-800 leading-relaxed">
      {segments.map((segment, index) => {
        if (index % 2 === 1) {
          // This is a code block
          const codeContent = segment.replace(/^\n|\n$/g, '');
          return (
            <pre key={index} className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-xs overflow-x-auto my-4 whitespace-pre">
              {codeContent}
            </pre>
          );
        }
        
        // This is regular text
        const blocks = segment.split(/\n\n+/);
        return (
          <React.Fragment key={index}>
            {blocks.map((block, i) => {
              if (!block.trim()) return null;
              if (block.includes('|') && block.includes('---')) {
                const lines = block.split('\n');
                const textLines = lines.filter(l => !l.includes('|'));
                const tableLines = lines.filter(l => l.includes('|'));
                
                return (
                  <div key={i}>
                    {textLines.length > 0 && (
                      <p className="mb-3" dangerouslySetInnerHTML={{__html: textLines.map(l => parseLine(l)).join('<br/>')}} />
                    )}
                    {processTable(tableLines.join('\n'))}
                  </div>
                );
              }
              const parsedHtml = block.split('\n').map(line => parseLine(line)).join('<br/>');
              return <p key={i} dangerouslySetInnerHTML={{__html: parsedHtml}} />;
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
}

function Solve({ en, pa }: { en: string, pa: string }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <h4 className="text-[#059669] font-bold mb-4 flex items-center gap-2 border-b border-slate-100 pb-2 text-sm uppercase tracking-wider">
          Exam Solution (English)
        </h4>
        <FormattedContent text={en} />
      </div>
      <div className="lg:border-l border-slate-100 lg:pl-6 pt-4 lg:pt-0 border-t lg:border-t-0">
        <h4 className="text-[#2563eb] font-bold mb-4 flex items-center gap-2 border-b border-slate-100 pb-2 text-sm uppercase tracking-wider">
          ਪੰਜਾਬੀ ਅਨੁਵਾਦ
        </h4>
        <FormattedContent text={pa} />
      </div>
    </div>
  );
}
