"use client";
import { Printer, ArrowLeft, AlertTriangle, BookOpen, Flame, CheckCircle2, Check } from "lucide-react";
import Link from "next/link";
import React from "react";

const questionsData = [
  // ----------- SECTION A -----------
  {
    id: "Q1",
    section: "SECTION A",
    inExam: true,
    question: "What is Information System? Explain its characteristics in detail.",
    english: (
      <>
        <div className="mb-3"><span className="font-bold text-slate-900">Definition:</span> An Information System (IS) is a formal, sociotechnical organizational system designed to collect, process, store, and distribute information. From a business perspective, IS provides a solution to a problem or challenge facing a firm and supports strategic decision-making.</div>
        <div className="mb-2 font-bold text-slate-900">Characteristics of Information System:</div>
        <ul className="list-decimal pl-5 space-y-3 mb-4 text-slate-700">
          <li><strong>Organization:</strong> Refers to the formal structure and arrangement of components that helps achieve objectives. No system can function if its parts are randomly scattered.</li>
          <li><strong>Interaction:</strong> Refers to the manner in which each component functions with other components. For example, the purchasing department must interact with the production department.</li>
          <li><strong>Interdependence:</strong> Parts of the organization or computer system depend on one another. If one part fails, the entire system can collapse.</li>
          <li><strong>Integration:</strong> How parts are tied together. It produces a synergistic effect where the whole is greater than the sum of its parts.</li>
          <li><strong>Central Objective:</strong> Every system has a central, driving goal. The system must be designed specifically to achieve this objective.</li>
        </ul>
        <div className="bg-emerald-50 text-emerald-800 p-3 rounded-lg text-sm border border-emerald-100 font-medium">
          <span className="font-bold">Conclusion:</span> A robust Information System bridges the gap between raw data and actionable business intelligence, securing a competitive advantage for the organization.
        </div>
      </>
    ),
    punjabi: (
      <>
        <div className="mb-3 leading-relaxed"><span className="font-bold">ਪਰਿਭਾਸ਼ਾ:</span> Information System (ਸੂਚਨਾ ਪ੍ਰਣਾਲੀ) ਇੱਕ ਅਜਿਹਾ ਢਾਂਚਾ ਹੈ ਜੋ ਡਾਟਾ ਨੂੰ ਇਕੱਠਾ ਕਰਦਾ ਹੈ, ਉਸਨੂੰ ਪ੍ਰੋਸੈਸ ਕਰਦਾ ਹੈ, ਅਤੇ ਫੈਸਲੇ ਲੈਣ ਲਈ ਸਹੀ ਜਾਣਕਾਰੀ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।</div>
        <div className="mb-2 font-bold">ਮੁੱਖ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ:</div>
        <ol className="list-decimal pl-5 space-y-3 text-slate-700">
          <li><strong>ਸੰਰਚਨਾ (Organization):</strong> ਸਿਸਟਮ ਦੇ ਹਿੱਸਿਆਂ ਦੀ ਸਹੀ ਤਰਤੀਬ, ਜਿਸ ਬਿਨਾਂ ਸਿਸਟਮ ਕੰਮ ਨਹੀਂ ਕਰ ਸਕਦਾ।</li>
          <li><strong>ਪਰਸਪਰ ਸੰਪਰਕ (Interaction):</strong> ਸਾਰੇ ਹਿੱਸਿਆਂ ਦਾ ਆਪਸ ਵਿੱਚ ਲਗਾਤਾਰ ਸੰਚਾਰ (Communication) ਕਰਨਾ।</li>
          <li><strong>ਨਿਰਭਰਤਾ (Interdependence):</strong> ਇੱਕ ਹਿੱਸੇ ਦਾ ਦੂਜੇ 'ਤੇ ਪੂਰੀ ਤਰ੍ਹਾਂ ਨਿਰਭਰ ਹੋਣਾ। ਜੇਕਰ ਇੱਕ ਖਰਾਬ ਹੋਵੇ ਤਾਂ ਦੂਜਾ ਵੀ ਰੁਕ ਜਾਂਦਾ ਹੈ।</li>
          <li><strong>ਇਕਤਾ (Integration):</strong> ਸਾਰੇ ਹਿੱਸਿਆਂ ਦਾ ਮਿਲ ਕੇ ਇੱਕ ਤਾਕਤ ਵਜੋਂ ਕੰਮ ਕਰਨਾ (Synergy)।</li>
          <li><strong>ਲਕਸ਼ (Objective):</strong> ਹਰ ਸਿਸਟਮ ਦਾ ਇੱਕ ਅੰਤਿਮ ਅਤੇ ਸਾਂਝਾ ਟੀਚਾ ਹੁੰਦਾ ਹੈ।</li>
        </ol>
      </>
    )
  },
  {
    id: "Q2",
    section: "SECTION A",
    inExam: true,
    question: "What is Information? Describe its types with relevant examples.",
    english: (
      <>
        <div className="mb-3"><span className="font-bold text-slate-900">Definition:</span> Information is data that has been processed, structured, and presented in a given context so that it becomes meaningful and useful to the person who receives it. While data is raw facts, information reduces uncertainty in decision-making.</div>
        <div className="mb-2 font-bold text-slate-900">Types of Information based on Management Levels:</div>
        <ul className="list-decimal pl-5 space-y-3 mb-4 text-slate-700">
          <li><strong>Strategic Information:</strong> Required by top management (CEOs, Directors) for long-term planning and policy formulation. It is highly unstructured and relies on external data.<br/><span className="italic text-sm">Example: Predicting 5-year market trends or planning a company merger.</span></li>
          <li><strong>Tactical Information:</strong> Required by middle management (Department Heads) for short-term planning, resource allocation, and controlling operations. It is semi-structured.<br/><span className="italic text-sm">Example: Monthly sales variance reports, annual departmental budgets.</span></li>
          <li><strong>Operational Information:</strong> Required by lower management (Supervisors/Clerks) for day-to-day execution of tasks. It is highly structured and detailed.<br/><span className="italic text-sm">Example: Daily attendance records, daily inventory count, individual sales receipts.</span></li>
        </ul>
        <div className="bg-emerald-50 text-emerald-800 p-3 rounded-lg text-sm border border-emerald-100 font-medium">
          <span className="font-bold">Conclusion:</span> Accurate delivery of the right type of information to the right management level is critical for organizational success.
        </div>
      </>
    ),
    punjabi: (
      <>
         <div className="mb-3 leading-relaxed"><span className="font-bold">ਪਰਿਭਾਸ਼ਾ:</span> ਜਾਣਕਾਰੀ (Information) ਉਹ ਡਾਟਾ ਹੈ ਜਿਸਨੂੰ ਪ੍ਰੋਸੈਸ ਕਰਕੇ ਅਰਥਪੂਰਨ (Meaningful) ਬਣਾਇਆ ਗਿਆ ਹੋਵੇ। ਇਹ ਫੈਸਲੇ ਲੈਣ ਵਿੱਚ ਸ਼ੱਕ (Uncertainty) ਨੂੰ ਘਟਾਉਂਦੀ ਹੈ।</div>
         <div className="mb-2 font-bold">ਜਾਣਕਾਰੀ ਦੀਆਂ ਕਿਸਮਾਂ (ਮੈਨੇਜਮੈਂਟ ਦੇ ਅਨੁਸਾਰ):</div>
         <ul className="list-disc pl-5 space-y-3 text-slate-700">
           <li><strong>ਸਟ੍ਰੈਟਜਿਕ (Strategic):</strong> ਇਹ ਟੌਪ ਮੈਨੇਜਮੈਂਟ (CEO) ਦੁਆਰਾ ਵਰਤੀ ਜਾਂਦੀ ਹੈ ਤਾਂ ਜੋ ਕੰਪਨੀ ਦਾ ਭਵਿੱਖ (Long-term) ਤੈਅ ਕੀਤਾ ਜਾ ਸਕੇ। (ਉਦਾਹਰਣ: ਨਵੀਂ ਕੰਪਨੀ ਖਰੀਦਣਾ)।</li>
           <li><strong>ਟੈਕਟਿਕਲ (Tactical):</strong> ਮਿਡਲ ਮੈਨੇਜਮੈਂਟ ਦੁਆਰਾ ਵਰਤੀ ਜਾਂਦੀ ਹੈ ਤਾਂ ਜੋ ਵਿਭਾਗਾਂ (Departments) ਦਾ ਕੰਟਰੋਲ ਅਤੇ ਬਜਟ ਸੰਭਾਲਿਆ ਜਾ ਸਕੇ। (ਉਦਾਹਰਣ: ਮਹੀਨੇਵਾਰ ਸੇਲਜ਼ ਰਿਪੋਰਟ)।</li>
           <li><strong>ਓਪਰੇਸ਼ਨਲ (Operational):</strong> ਹੇਠਲੇ ਪੱਧਰ ਦੇ ਮੁਲਾਜ਼ਮਾਂ ਦੁਆਰਾ ਰੋਜ਼ਾਨਾ ਦੇ ਕੰਮਾਂ ਲਈ ਵਰਤੀ ਜਾਂਦੀ ਹੈ। (ਉਦਾਹਰਣ: ਰੋਜ਼ਾਨਾ ਹਾਜ਼ਰੀ, ਰੋਜ਼ਾਨਾ ਸੇਲਜ਼ ਬਿੱਲ)।</li>
         </ul>
      </>
    )
  },
  
  // ----------- SECTION B -----------
  {
    id: "Q3",
    section: "SECTION B",
    inExam: true,
    question: "Define MIS. What are the core components of MIS?",
    english: (
      <>
        <div className="mb-3"><span className="font-bold text-slate-900">Definition:</span> Management Information System (MIS) is a formally designed computerized system that provides managers with periodic, pre-planned reports based on data extracted from daily transaction systems. It primarily supports structured and semi-structured decision-making.</div>
        <div className="mb-2 font-bold text-slate-900">The 5 Core Components of MIS:</div>
        <ul className="list-decimal pl-5 space-y-3 mb-4 text-slate-700">
          <li><strong>Hardware:</strong> The physical computer equipment and network infrastructure (Servers, PCs, Routers) that provide processing power and storage.</li>
          <li><strong>Software:</strong> The broad classes of computer programs that direct hardware operations. This includes System Software (OS) and Application Software (ERP/CRM).</li>
          <li><strong>Data/Database:</strong> The raw facts stored systematically in databases (using SQL/NoSQL). Data is the lifeblood of any MIS.</li>
          <li><strong>Procedures:</strong> The physical and logical rules, policies, and manuals that govern the operation of the computer system (e.g., backup procedures, security protocols).</li>
          <li><strong>People:</strong> The most crucial component. It includes IT professionals (System Analysts, DBAs, Programmers) who build the system, and end-users (Managers, Clerks) who utilize the generated information.</li>
        </ul>
      </>
    ),
    punjabi: (
       <>
         <div className="mb-3 leading-relaxed"><span className="font-bold">ਪਰਿਭਾਸ਼ਾ:</span> MIS ਇੱਕ ਕੰਪਿਊਟਰਾਈਜ਼ਡ ਸਿਸਟਮ ਹੈ ਜੋ ਵੱਖ-ਵੱਖ ਵਿਭਾਗਾਂ ਤੋਂ ਡਾਟਾ ਇਕੱਠਾ ਕਰਕੇ ਮੈਨੇਜਰਾਂ ਨੂੰ ਸਹੀ ਰਿਪੋਰਟਾਂ ਦਿੰਦਾ ਹੈ ਤਾਂ ਜੋ ਉਹ ਵਧੀਆ ਫੈਸਲੇ ਲੈ ਸਕਣ।</div>
         <div className="mb-2 font-bold">MIS ਦੇ 5 ਮੁੱਖ ਹਿੱਸੇ (Components):</div>
         <ul className="list-disc pl-5 space-y-2 text-slate-700">
           <li><strong>ਹਾਰਡਵੇਅਰ (Hardware):</strong> ਕੰਪਿਊਟਰ, ਸਰਵਰ (Servers), ਅਤੇ ਨੈੱਟਵਰਕ ਮਸ਼ੀਨਾਂ।</li>
           <li><strong>ਸਾਫਟਵੇਅਰ (Software):</strong> ਪ੍ਰੋਗਰਾਮ ਜੋ ਹਾਰਡਵੇਅਰ ਨੂੰ ਚਲਾਉਂਦੇ ਹਨ (ਜਿਵੇਂ Windows, ERP)।</li>
           <li><strong>ਡਾਟਾ (Data):</strong> ਕੱਚੇ ਤੱਥ ਅਤੇ ਅੰਕੜੇ ਜੋ ਡਾਟਾਬੇਸ ਵਿੱਚ ਸਟੋਰ ਕੀਤੇ ਜਾਂਦੇ ਹਨ।</li>
           <li><strong>ਪ੍ਰਕਿਰਿਆ (Procedures):</strong> ਸਿਸਟਮ ਨੂੰ ਚਲਾਉਣ ਦੇ ਨਿਯਮ ਅਤੇ ਨਿਰਦੇਸ਼ (Rules & Policies)।</li>
           <li><strong>ਲੋਕ (People):</strong> ਸਭ ਤੋਂ ਜ਼ਰੂਰੀ ਹਿੱਸਾ—ਸਿਸਟਮ ਬਣਾਉਣ ਵਾਲੇ ਇੰਜੀਨੀਅਰ ਅਤੇ ਸਿਸਟਮ ਨੂੰ ਵਰਤਣ ਵਾਲੇ ਮੈਨੇਜਰ।</li>
         </ul>
       </>
    )
  },
  {
    id: "Q4",
    section: "SECTION B",
    inExam: true,
    question: "Explain the process of Decision Making. Differentiate between Structured and Unstructured decisions.",
    english: (
      <>
        <div className="mb-3"><span className="font-bold text-slate-900">Decision Making:</span> According to Herbert Simon, decision making involves evaluating multiple alternatives and selecting the best one. It spans four phases: Intelligence (finding problems), Design (developing solutions), Choice (selecting one), and Implementation.</div>
        <div className="mb-2 font-bold text-slate-900">Structured vs Unstructured Decisions:</div>
        <div className="overflow-hidden rounded-lg border border-slate-200 mb-3">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 font-bold text-slate-900 border-r border-slate-200">Structured (Programmed) Decisions</th>
                <th className="px-4 py-3 font-bold text-slate-900">Unstructured (Non-Programmed) Decisions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr>
                <td className="px-4 py-3 border-r border-slate-200">Repetitive and routine in nature.</td>
                <td className="px-4 py-3">Novel, complex, and non-repetitive in nature.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-r border-slate-200">A definite standard procedure (algorithm) exists to handle them.</td>
                <td className="px-4 py-3">No cut-and-dried method exists; relies heavily on human intuition and judgment.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-r border-slate-200">Handled mostly by lower/operational level management (using TPS).</td>
                <td className="px-4 py-3">Handled mostly by top/strategic level management (using EIS).</td>
              </tr>
              <tr className="bg-slate-50/50 italic font-medium">
                <td className="px-4 py-3 border-r border-slate-200">Example: Calculating overtime pay, reordering inventory.</td>
                <td className="px-4 py-3">Example: Launching a new product, entering a foreign market.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
    punjabi: (
       <>
         <div className="mb-3 leading-relaxed"><span className="font-bold">ਫੈਸਲਾ ਕਰਨ ਦੀ ਪ੍ਰਕਿਰਿਆ:</span> ਵੱਖ-ਵੱਖ ਬਦਲਵਾਂ (Options) ਵਿੱਚੋਂ ਸਭ ਤੋਂ ਵਧੀਆ ਰਾਹ ਚੁਣਨਾ ਫੈਸਲਾ ਕਹਾਉਂਦਾ ਹੈ।</div>
         <div className="mb-2 font-bold">Structured ਅਤੇ Unstructured ਫੈਸਲਿਆਂ ਵਿੱਚ ਅੰਤਰ:</div>
         <ul className="list-disc pl-5 space-y-3 text-slate-700">
           <li><strong>Structured (ਸਧਾਰਣ ਫੈਸਲੇ):</strong> ਇਹ ਰੋਜ਼ਾਨਾ ਦੇ ਆਮ ਫੈਸਲੇ ਹੁੰਦੇ ਹਨ ਜਿਨ੍ਹਾਂ ਲਈ ਪਹਿਲਾਂ ਤੋਂ ਹੀ ਨਿਯਮ ਬਣੇ ਹੁੰਦੇ ਹਨ। ਇਹਨਾਂ ਨੂੰ ਕਲਰਕ ਜਾਂ ਹੇਠਲੇ ਮੈਨੇਜਰ ਲੈਂਦੇ ਹਨ। (ਉਦਾਹਰਣ: ਮੁਲਾਜ਼ਮਾਂ ਦੀ ਤਨਖਾਹ ਕੱਢਣਾ, ਖਤਮ ਹੋਇਆ ਸਾਮਾਨ ਦੁਬਾਰਾ ਮੰਗਵਾਉਣਾ)।</li>
           <li><strong>Unstructured (ਜਟਿਲ ਫੈਸਲੇ):</strong> ਇਹ ਬਹੁਤ ਗੁੰਝਲਦਾਰ ਫੈਸਲੇ ਹੁੰਦੇ ਹਨ ਜੋ ਕਦੇ-ਕਦੇ ਲਏ ਜਾਂਦੇ ਹਨ। ਇਹਨਾਂ ਲਈ ਕੋਈ ਪੱਕਾ ਨਿਯਮ ਨਹੀਂ ਹੁੰਦਾ, ਮੈਨੇਜਰ ਨੂੰ ਆਪਣੇ ਦਿਮਾਗ ਅਤੇ ਤਜ਼ੁਰਬੇ ਦੀ ਵਰਤੋਂ ਕਰਨੀ ਪੈਂਦੀ ਹੈ। (ਉਦਾਹਰਣ: ਨਵੀਂ ਫੈਕਟਰੀ ਖੋਲ੍ਹਣੀ, ਕੰਪਨੀ ਦੀ ਵੱਡੀ ਰਣਨੀਤੀ ਬਣਾਉਣੀ)।</li>
         </ul>
       </>
    )
  },
  
  // ----------- SECTION C -----------
  {
    id: "Q5",
    section: "SECTION C",
    inExam: true,
    question: "Describe MIS Development. What are the common pitfalls in MIS implementation?",
    english: (
      <>
        <div className="mb-3"><span className="font-bold text-slate-900">MIS Development:</span> The systematic process of analyzing, designing, testing, and implementing an information system to meet organizational goals. It strictly follows the System Development Life Cycle (SDLC) to ensure quality and budget compliance.</div>
        <div className="mb-3 font-bold text-red-600 flex items-center gap-1">
          <AlertTriangle className="w-5 h-5" /> Major Pitfalls (Reasons for System Failure):
        </div>
        <ul className="list-disc pl-5 space-y-3 text-slate-700">
          <li><strong>Lack of Management Support:</strong> If top executives do not sponsor or care about the project, it loses funding and momentum.</li>
          <li><strong>Poor Requirement Analysis:</strong> Failing to clearly understand what the end-users actually need leads to building the "wrong system".</li>
          <li><strong>Lack of User Involvement:</strong> If actual employees aren't consulted during design, the system will be non-intuitive and face heavy resistance.</li>
          <li><strong>Inadequate Training:</strong> Deploying the system without teaching employees how to use it leads to frustration and abandonment.</li>
          <li><strong>Cost & Time Overruns:</strong> Unrealistic deadlines and budgets cause developers to rush, leading to critical software bugs.</li>
        </ul>
      </>
    ),
    punjabi: (
       <>
         <div className="mb-3 leading-relaxed"><span className="font-bold">MIS ਬਣਾਉਣਾ (Development):</span> ਕੰਪਨੀ ਦੀਆਂ ਲੋੜਾਂ ਪੂਰੀਆਂ ਕਰਨ ਲਈ ਇੱਕ ਨਵਾਂ ਸਿਸਟਮ ਡਿਜ਼ਾਈਨ ਕਰਨਾ ਅਤੇ ਲਾਗੂ ਕਰਨਾ।</div>
         <div className="mb-2 font-bold text-red-600">ਸਿਸਟਮ ਫੇਲ੍ਹ ਹੋਣ ਦੇ ਮੁੱਖ ਕਾਰਨ (Pitfalls):</div>
         <ul className="list-disc pl-5 space-y-3 text-slate-700">
           <li><strong>ਗਲਤ ਯੋਜਨਾ (Poor Planning):</strong> ਜੇਕਰ ਸ਼ੁਰੂਆਤੀ ਯੋਜਨਾ ਹੀ ਗਲਤ ਹੋਵੇ ਤਾਂ ਪੂਰਾ ਪ੍ਰੋਜੈਕਟ ਡੁੱਬ ਜਾਂਦਾ ਹੈ।</li>
           <li><strong>ਯੂਜ਼ਰ ਨੂੰ ਸ਼ਾਮਲ ਨਾ ਕਰਨਾ:</strong> ਜੇਕਰ ਸਿਸਟਮ ਵਰਤਣ ਵਾਲੇ ਮੁਲਾਜ਼ਮਾਂ ਦੀ ਰਾਏ ਨਾ ਲਈ ਜਾਵੇ, ਤਾਂ ਉਹ ਸਿਸਟਮ ਨੂੰ ਪਸੰਦ ਨਹੀਂ ਕਰਨਗੇ।</li>
           <li><strong>ਟ੍ਰੇਨਿੰਗ ਦੀ ਘਾਟ (Lack of Training):</strong> ਨਵਾਂ ਸਿਸਟਮ ਲਗਾਉਣ ਤੋਂ ਬਾਅਦ ਮੁਲਾਜ਼ਮਾਂ ਨੂੰ ਸਿਖਲਾਈ ਨਾ ਦੇਣਾ।</li>
           <li><strong>ਖਰਚਾ ਅਤੇ ਸਮਾਂ ਵਧਣਾ:</strong> ਪ੍ਰੋਜੈਕਟ ਦਾ ਬਜਟ ਤੋਂ ਬਾਹਰ ਹੋ ਜਾਣਾ ਜਾਂ ਬਹੁਤ ਜ਼ਿਆਦਾ ਸਮਾਂ ਲੈਣਾ।</li>
           <li><strong>ਤਬਦੀਲੀ ਦਾ ਵਿਰੋਧ (Resistance to Change):</strong> ਲੋਕ ਪੁਰਾਣੇ ਤਰੀਕੇ ਨਹੀਂ ਛੱਡਣਾ ਚਾਹੁੰਦੇ ਅਤੇ ਨਵੀਂ ਤਕਨੀਕ ਦਾ ਵਿਰੋਧ ਕਰਦੇ ਹਨ।</li>
         </ul>
       </>
    )
  },
  {
    id: "Q6",
    section: "SECTION C",
    inExam: true,
    question: "Discuss the Analysis and Design phases of Information Systems.",
    english: (
      <>
        <div className="mb-3"><span className="font-bold text-slate-900">System Analysis:</span> The process of investigating the current system, identifying its problems, and specifying the requirements for a new system. The analyst conducts interviews, observations, and document reviews to understand the exact business rules. The final output is a formal <strong>Software Requirement Specification (SRS)</strong> document.</div>
        <div className="mb-3"><span className="font-bold text-slate-900">System Design:</span> Translating the SRS requirements into a blueprint for constructing the system. It acts as the architecture phase.</div>
        <ul className="list-disc pl-5 space-y-3 mb-4 text-slate-700">
          <li><strong>Logical Design:</strong> Deals with <em>"What"</em> the system will do. It is independent of hardware or software. Tools used include Data Flow Diagrams (DFDs), Entity-Relationship (ER) Diagrams, and Decision Trees.</li>
          <li><strong>Physical Design:</strong> Deals with <em>"How"</em> the system will do it. It specifies actual hardware servers, specific database platforms (e.g., Oracle, MySQL), and network topologies.</li>
        </ul>
      </>
    ),
    punjabi: (
       <>
         <div className="mb-3 leading-relaxed">ਸਿਸਟਮ ਬਣਾਉਣ ਵਿੱਚ ਦੋ ਸਭ ਤੋਂ ਜ਼ਰੂਰੀ ਚਰਨ ਹੁੰਦੇ ਹਨ: <strong>Analysis</strong> ਅਤੇ <strong>Design</strong>।</div>
         <ul className="list-disc pl-5 space-y-3 text-slate-700">
           <li><strong>Analysis (ਵਿਸ਼ਲੇਸ਼ਣ):</strong> ਇਸ ਵਿੱਚ ਪੁਰਾਣੇ ਸਿਸਟਮ ਦੀਆਂ ਕਮੀਆਂ ਲੱਭੀਆਂ ਜਾਂਦੀਆਂ ਹਨ ਅਤੇ ਯੂਜ਼ਰ ਦੀਆਂ ਨਵੀਆਂ ਜ਼ਰੂਰਤਾਂ (Requirements) ਨੂੰ ਸਮਝਿਆ ਜਾਂਦਾ ਹੈ। ਇਸਦਾ ਅੰਤਿਮ ਨਤੀਜਾ SRS ਡਾਕੂਮੈਂਟ ਹੁੰਦਾ ਹੈ।</li>
           <li><strong>Design (ਡਿਜ਼ਾਈਨ):</strong> ਲੋੜਾਂ ਸਮਝਣ ਤੋਂ ਬਾਅਦ ਸਿਸਟਮ ਦਾ ਨਕਸ਼ਾ (Blueprint) ਤਿਆਰ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।
             <ul className="list-circle pl-5 mt-2 space-y-1">
               <li><strong>Logical Design:</strong> ਇਹ ਕਾਗਜ਼ 'ਤੇ ਬਣਿਆ ਨਕਸ਼ਾ ਹੈ (ਜਿਵੇਂ DFD), ਜੋ ਦੱਸਦਾ ਹੈ ਕਿ ਸਿਸਟਮ <em>"ਕੀ"</em> ਕਰੇਗਾ।</li>
               <li><strong>Physical Design:</strong> ਇਹ ਦੱਸਦਾ ਹੈ ਕਿ ਸਿਸਟਮ <em>"ਕਿਵੇਂ"</em> ਕੰਮ ਕਰੇਗਾ (ਯਾਨੀ ਕਿਹੜਾ ਕੰਪਿਊਟਰ, ਕਿਹੜਾ ਡਾਟਾਬੇਸ ਵਰਤਿਆ ਜਾਵੇਗਾ)।</li>
             </ul>
           </li>
         </ul>
       </>
    )
  },
  
  // ----------- SECTION D -----------
  {
    id: "Q7",
    section: "SECTION D",
    inExam: true,
    question: "What is E-Commerce? Discuss its major applications in the modern world.",
    english: (
      <>
        <div className="mb-3"><span className="font-bold text-slate-900">Definition:</span> Electronic Commerce (E-Commerce) is the process of buying, selling, transferring, or exchanging products, services, and information via computer networks, primarily the Internet. It removes geographical boundaries and enables 24/7 business operations.</div>
        <div className="mb-2 font-bold text-slate-900">Major Applications of E-Commerce:</div>
        <ul className="list-decimal pl-5 space-y-3 text-slate-700">
          <li><strong>Retail and Shopping (E-Tailing):</strong> Direct selling to consumers through digital storefronts (e.g., Amazon, Flipkart, Myntra).</li>
          <li><strong>Online Banking (E-Banking):</strong> Electronic Funds Transfer (EFT), checking account balances, and paying utility bills online without visiting a physical branch.</li>
          <li><strong>Digital Booking & Ticketing:</strong> Reserving flights, trains, movies, or hotel rooms instantly from anywhere (e.g., MakeMyTrip, IRCTC).</li>
          <li><strong>Online Auctions:</strong> Consumer-to-Consumer (C2C) bidding platforms where users sell used items to the highest bidder (e.g., eBay).</li>
          <li><strong>Digital Goods Distribution:</strong> Direct downloading of software, e-books, music, and streaming services (e.g., Spotify, Netflix).</li>
        </ul>
      </>
    ),
    punjabi: (
       <>
         <div className="mb-3 leading-relaxed"><span className="font-bold">ਪਰਿਭਾਸ਼ਾ:</span> ਇੰਟਰਨੈੱਟ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਸਾਮਾਨ ਖਰੀਦਣਾ ਜਾਂ ਵੇਚਣਾ E-Commerce (ਈ-ਕਾਮਰਸ) ਕਹਾਉਂਦਾ ਹੈ। ਇਹ ਦੁਕਾਨਾਂ ਨੂੰ 24 ਘੰਟੇ ਖੁੱਲ੍ਹਾ ਰੱਖਦਾ ਹੈ ਅਤੇ ਦੁਨੀਆ ਭਰ ਵਿੱਚ ਵਪਾਰ ਕਰਨ ਦੀ ਤਾਕਤ ਦਿੰਦਾ ਹੈ।</div>
         <div className="mb-2 font-bold">E-Commerce ਦੇ ਮੁੱਖ ਉਪਯੋਗ (Applications):</div>
         <ul className="list-disc pl-5 space-y-2 text-slate-700">
           <li><strong>ਆਨਲਾਈਨ ਸ਼ਾਪਿੰਗ:</strong> ਐਮਾਜ਼ਾਨ (Amazon) ਜਾਂ ਫਲਿੱਪਕਾਰਟ ਰਾਹੀਂ ਘਰ ਬੈਠੇ ਸਾਮਾਨ ਮੰਗਵਾਉਣਾ।</li>
           <li><strong>ਈ-ਬੈਂਕਿੰਗ (E-Banking):</strong> ਬੈਂਕ ਜਾਣ ਦੀ ਬਜਾਏ ਮੋਬਾਈਲ ਰਾਹੀਂ ਪੈਸੇ ਭੇਜਣਾ (Google Pay) ਅਤੇ ਬਿੱਲ ਭਰਨਾ।</li>
           <li><strong>ਟਿਕਟ ਬੁਕਿੰਗ:</strong> ਇੰਟਰਨੈੱਟ ਰਾਹੀਂ ਰੇਲਗੱਡੀ, ਹਵਾਈ ਜਹਾਜ਼ ਜਾਂ ਫਿਲਮ ਦੀ ਟਿਕਟ ਬੁੱਕ ਕਰਨਾ (ਜਿਵੇਂ IRCTC)।</li>
           <li><strong>ਆਨਲਾਈਨ ਨਿਲਾਮੀ (Auctions):</strong> ਪੁਰਾਣਾ ਸਾਮਾਨ ਇੰਟਰਨੈੱਟ 'ਤੇ ਵੇਚਣਾ (ਜਿਵੇਂ OLX, eBay)।</li>
           <li><strong>ਡਿਜੀਟਲ ਮੀਡੀਆ:</strong> ਗਾਣੇ ਸੁਣਨਾ (Spotify) ਜਾਂ ਫਿਲਮਾਂ ਦੇਖਣਾ (Netflix) ਬਿਨਾਂ ਕੋਈ CD ਖਰੀਦੇ।</li>
         </ul>
       </>
    )
  },
  {
    id: "Q8",
    section: "SECTION D",
    inExam: true,
    question: "What is DSS? Explain its features and how it supports business planning.",
    english: (
      <>
        <div className="mb-3"><span className="font-bold text-slate-900">Definition:</span> Decision Support System (DSS) is a highly interactive, computer-based information system that utilizes sophisticated mathematical models and specialized databases to assist management in solving semi-structured and unstructured problems.</div>
        <div className="mb-2 font-bold text-slate-900">Key Features of DSS:</div>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
          <li><strong>What-If Analysis:</strong> Allows managers to change variables and see the impact on outcomes (e.g., "What if we increase product price by 5%?").</li>
          <li><strong>Goal-Seeking Analysis:</strong> Calculates the necessary inputs to reach a desired target (e.g., "How many units must we sell to hit $1M revenue?").</li>
          <li><strong>Interactive UI:</strong> Unlike MIS (which prints rigid reports), DSS is highly interactive and allows deep data drill-downs.</li>
        </ul>
        <div className="mb-2 font-bold text-slate-900">Planning Support:</div>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li><strong>Forecasting:</strong> Predicting future sales and market trends based on historical data.</li>
          <li><strong>Budgeting:</strong> Allocating capital efficiently across departments.</li>
          <li><strong>Risk Analysis:</strong> Simulating worst-case scenarios to prepare contingency plans.</li>
        </ul>
      </>
    ),
    punjabi: (
       <>
         <div className="mb-3 leading-relaxed"><span className="font-bold">ਪਰਿਭਾਸ਼ਾ:</span> DSS ਇੱਕ ਅਜਿਹਾ ਕੰਪਿਊਟਰ ਸਿਸਟਮ ਹੈ ਜੋ ਗਣਿਤ ਦੇ ਮਾਡਲਾਂ (Mathematical Models) ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਮੈਨੇਜਰਾਂ ਨੂੰ ਔਖੇ ਅਤੇ ਗੁੰਝਲਦਾਰ ਫੈਸਲੇ ਲੈਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।</div>
         <div className="mb-2 font-bold">DSS ਦੀਆਂ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ:</div>
         <ul className="list-disc pl-5 space-y-2 mb-3 text-slate-700">
           <li><strong>What-If Analysis (ਕੀ ਹੋਵੇਗਾ ਜੇਕਰ...):</strong> ਜੇਕਰ ਅਸੀਂ ਸਾਮਾਨ ਦੀ ਕੀਮਤ 5% ਵਧਾ ਦਈਏ ਤਾਂ ਸਾਡੀ ਸੇਲਜ਼ 'ਤੇ ਕੀ ਅਸਰ ਪਵੇਗਾ? DSS ਇਸਦਾ ਜਵਾਬ ਦਿੰਦਾ ਹੈ।</li>
           <li><strong>Interactive:</strong> ਇਹ MIS ਵਾਂਗ ਸਿਰਫ ਰਿਪੋਰਟਾਂ ਨਹੀਂ ਦਿੰਦਾ, ਬਲਕਿ ਯੂਜ਼ਰ ਨੂੰ ਸਿਸਟਮ ਨਾਲ ਸਵਾਲ-ਜਵਾਬ ਕਰਨ ਦੀ ਆਜ਼ਾਦੀ ਦਿੰਦਾ ਹੈ।</li>
         </ul>
         <div className="mb-2 font-bold">ਯੋਜਨਾਵਾਂ (Planning) ਵਿੱਚ ਮਦਦ:</div>
         <ul className="list-disc pl-5 space-y-2 text-slate-700">
           <li><strong>Forecasting:</strong> ਪੁਰਾਣੇ ਡਾਟੇ ਤੋਂ ਭਵਿੱਖ ਦਾ ਅੰਦਾਜ਼ਾ ਲਗਾਉਣਾ (ਜਿਵੇਂ ਅਗਲੇ ਸਾਲ ਕਿੰਨੀ ਸੇਲ ਹੋਵੇਗੀ)।</li>
           <li><strong>Budgeting:</strong> ਕੰਪਨੀ ਦਾ ਵਿੱਤੀ ਬਜਟ ਤਿਆਰ ਕਰਨਾ।</li>
           <li><strong>Risk Analysis:</strong> ਖਤਰਿਆਂ ਦਾ ਅੰਦਾਜ਼ਾ ਲਗਾਉਣਾ ਅਤੇ ਬਚਾਅ ਕਰਨਾ।</li>
         </ul>
       </>
    )
  },
  
  // ----------- ADVANCED & EXPECTED -----------
  {
    id: "Q9",
    section: "ADVANCED & EXPECTED",
    question: "Explain the complete hierarchy: TPS, MIS, DSS, and EIS in detail.",
    english: (
      <>
        <div className="mb-4 text-slate-700">The organizational pyramid consists of four major IS types serving different management levels:</div>
        
        <div className="mb-1 font-bold text-slate-900">1. Transaction Processing System (TPS)</div>
        <div className="mb-3 text-slate-700">The bedrock of all systems. It handles high-volume, day-to-day routine transactions. Used by <strong>Operational Clerks</strong>. Features extreme accuracy and high-speed processing (e.g., POS billing systems, Payroll generation, Airline reservations).</div>
        
        <div className="mb-1 font-bold text-slate-900">2. Management Information System (MIS)</div>
        <div className="mb-3 text-slate-700">Extracts data from the TPS to create structured, periodic reports (Weekly/Monthly). Used by <strong>Middle Management</strong> for monitoring performance and controlling current operations (e.g., Monthly Sales Variance Report).</div>
        
        <div className="mb-1 font-bold text-slate-900">3. Decision Support System (DSS)</div>
        <div className="mb-3 text-slate-700">Uses mathematical models to help solve semi-structured problems. Used by <strong>Senior Analysts & Middle Managers</strong>. Focuses on "What-If" analysis rather than standard reporting (e.g., Supply Chain Optimization models).</div>
        
        <div className="mb-1 font-bold text-slate-900">4. Executive Information System (EIS)</div>
        <div className="mb-4 text-slate-700">Provides high-level, dashboard-style visualizations summarizing enterprise-wide performance. Used by <strong>Top Management (CEOs)</strong>. It heavily integrates external market data (competitor actions, government laws) with internal data for long-term strategic planning.</div>
      </>
    ),
    punjabi: (
      <>
        <div className="mb-3 font-medium">ਇਹ ਸਿਸਟਮ ਕੰਪਨੀ ਦੇ ਹੇਠਲੇ ਪੱਧਰ ਤੋਂ ਲੈ ਕੇ ਉੱਪਰਲੇ ਪੱਧਰ ਤੱਕ ਕੰਮ ਕਰਦੇ ਹਨ:</div>
        <ul className="list-disc pl-5 space-y-4 text-slate-700">
           <li><strong>TPS (Operational Level):</strong> ਇਹ ਸਭ ਤੋਂ ਹੇਠਲੇ ਪੱਧਰ ਦੇ ਮੁਲਾਜ਼ਮਾਂ ਲਈ ਹੈ। ਇਹ ਰੋਜ਼ਾਨਾ ਦੇ ਕੰਮ (ਜਿਵੇਂ ਬਿੱਲ ਕੱਟਣਾ, ਤਨਖਾਹ ਬਣਾਉਣਾ) ਬਹੁਤ ਤੇਜ਼ੀ ਅਤੇ ਸਹੀ ਢੰਗ ਨਾਲ ਕਰਦਾ ਹੈ।</li>
           <li><strong>MIS (Middle Level):</strong> ਇਹ TPS ਤੋਂ ਡਾਟਾ ਲੈ ਕੇ ਮਿਡਲ ਮੈਨੇਜਰਾਂ ਲਈ ਰਿਪੋਰਟਾਂ ਤਿਆਰ ਕਰਦਾ ਹੈ। ਇਸ ਨਾਲ ਕੰਮਕਾਜ ਨੂੰ ਕੰਟਰੋਲ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।</li>
           <li><strong>DSS (Middle/Upper Level):</strong> ਇਹ ਗੁੰਝਲਦਾਰ ਫੈਸਲੇ ਲੈਣ ਲਈ ਗਣਿਤ ਅਤੇ ਐਨਾਲਿਸਿਸ (Analysis) ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ।</li>
           <li><strong>EIS (Strategic Level):</strong> ਇਹ ਸਭ ਤੋਂ ਉੱਪਰਲੇ ਮੈਨੇਜਰਾਂ (CEOs) ਲਈ ਹੁੰਦਾ ਹੈ। ਇਹ ਕੰਪਨੀ ਦੀਆਂ ਰਿਪੋਰਟਾਂ ਨੂੰ ਗ੍ਰਾਫ (Graphs) ਰਾਹੀਂ ਦਿਖਾਉਂਦਾ ਹੈ ਅਤੇ ਬਾਹਰੀ ਮਾਰਕੀਟ ਦੀ ਜਾਣਕਾਰੀ ਵੀ ਦਿੰਦਾ ਹੈ ਤਾਂ ਜੋ ਲੰਬੇ ਸਮੇਂ ਦੀ ਰਣਨੀਤੀ ਬਣਾਈ ਜਾ ਸਕੇ।</li>
         </ul>
      </>
    )
  },
  {
    id: "Q10",
    section: "ADVANCED & EXPECTED",
    inExam: true,
    question: "Provide a detailed breakdown of the System Development Life Cycle (SDLC).",
    english: (
      <>
        <div className="mb-3"><span className="font-bold text-slate-900">Definition:</span> SDLC is a structured, engineering-based framework used by software development teams to design, build, test, and deploy high-quality information systems.</div>
        <div className="mb-2 font-bold text-slate-900">The 6 Core Phases:</div>
        <ul className="list-decimal pl-5 space-y-3 mb-3 text-slate-700">
          <li><strong>Planning & Feasibility:</strong> Defining the problem scope. The team checks if the project is Technically, Economically, and Operationally feasible.</li>
          <li><strong>System Analysis:</strong> Gathering detailed requirements from the client. The final output is the Software Requirement Specification (SRS) document.</li>
          <li><strong>System Design:</strong> Creating the blueprint. This involves drawing DFDs, designing database tables, and planning the User Interface (UI).</li>
          <li><strong>Coding (Development):</strong> Programmers write the actual source code using languages like Java, Python, or C++ to bring the design to life.</li>
          <li><strong>Testing:</strong> Software Quality Assurance (QA) engineers test the code to find and fix bugs. Includes Unit Testing, Integration Testing, and User Acceptance Testing (UAT).</li>
          <li><strong>Maintenance:</strong> The longest phase. Occurs after the software is deployed. Involves fixing post-launch bugs and upgrading features over time.</li>
        </ul>
      </>
    ),
    punjabi: (
      <>
         <div className="mb-3 leading-relaxed"><span className="font-bold">SDLC (ਸਿਸਟਮ ਡਿਵੈਲਪਮੈਂਟ ਲਾਈਫ ਸਾਈਕਲ)</span> ਇੱਕ ਸਹੀ ਤਰੀਕਾ ਹੈ ਜਿਸ ਰਾਹੀਂ ਇੰਜੀਨੀਅਰ ਨਵਾਂ ਸਾਫਟਵੇਅਰ ਬਣਾਉਂਦੇ ਹਨ।</div>
         <div className="mb-2 font-bold">ਇਸਦੇ 6 ਮੁੱਖ ਚਰਨ ਹਨ:</div>
         <ol className="list-decimal pl-5 space-y-3 text-slate-700">
           <li><strong>ਯੋਜਨਾ (Planning):</strong> ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਦੇਖਿਆ ਜਾਂਦਾ ਹੈ ਕਿ ਕੀ ਸਾਫਟਵੇਅਰ ਬਣਾਉਣਾ ਤਕਨੀਕੀ ਅਤੇ ਵਿੱਤੀ (ਬਜਟ) ਪੱਖੋਂ ਸੰਭਵ ਹੈ ਜਾਂ ਨਹੀਂ।</li>
           <li><strong>ਵਿਸ਼ਲੇਸ਼ਣ (Analysis):</strong> ਗਾਹਕ ਨਾਲ ਗੱਲ ਕਰਕੇ ਉਸਦੀਆਂ ਸਾਰੀਆਂ ਜ਼ਰੂਰਤਾਂ ਨੂੰ ਲਿਖਿਆ ਜਾਂਦਾ ਹੈ (SRS document)।</li>
           <li><strong>ਡਿਜ਼ਾਈਨ (Design):</strong> ਸਾਫਟਵੇਅਰ ਦਾ ਨਕਸ਼ਾ (Blueprint), ਸਕਰੀਨ ਡਿਜ਼ਾਈਨ ਅਤੇ DFD ਬਣਾਏ ਜਾਂਦੇ ਹਨ।</li>
           <li><strong>ਕੋਡਿੰਗ (Coding):</strong> ਕੰਪਿਊਟਰ ਪ੍ਰੋਗਰਾਮਰ ਅਸਲੀ ਕੋਡ (Code) ਲਿਖ ਕੇ ਸਾਫਟਵੇਅਰ ਤਿਆਰ ਕਰਦੇ ਹਨ।</li>
           <li><strong>ਟੈਸਟਿੰਗ (Testing):</strong> ਸਾਫਟਵੇਅਰ ਨੂੰ ਚਲਾ ਕੇ ਦੇਖਿਆ ਜਾਂਦਾ ਹੈ ਕਿ ਕੋਈ ਗਲਤੀ (Bug) ਤਾਂ ਨਹੀਂ ਹੈ।</li>
           <li><strong>ਮੇਨਟੇਨੈਂਸ (Maintenance):</strong> ਸਾਫਟਵੇਅਰ ਗਾਹਕ ਨੂੰ ਦੇਣ ਤੋਂ ਬਾਅਦ ਉਸਦਾ ਧਿਆਨ ਰੱਖਣਾ ਅਤੇ ਸਮੇਂ-ਸਮੇਂ 'ਤੇ ਅੱਪਡੇਟ (Update) ਕਰਨਾ।</li>
         </ol>
      </>
    )
  },
  {
    id: "Q11",
    section: "ADVANCED & EXPECTED",
    question: "Explain the concept of an ERP system and its core benefits.",
    english: (
      <>
        <div className="mb-3"><span className="font-bold text-slate-900">Definition:</span> Enterprise Resource Planning (ERP) is a massive suite of integrated business management software applications. It uses a single, massive centralized database to collect, store, and manage data from all departments (HR, Finance, Sales, Manufacturing).</div>
        <div className="mb-2 font-bold text-slate-900">Core Features & Benefits:</div>
        <ul className="list-disc pl-5 space-y-3 mb-3 text-slate-700">
          <li><strong>Total Integration:</strong> Breaks down departmental silos. When Sales enters an order, Inventory reduces stock, and Finance updates revenue automatically.</li>
          <li><strong>Elimination of Data Redundancy:</strong> Because there is only one central database, data is never duplicated across different departments, ensuring "one single source of truth".</li>
          <li><strong>Real-Time Information:</strong> Managers instantly see the live status of global supply chains and financial health.</li>
          <li><strong>Improved Efficiency:</strong> Automates standard workflows, severely reducing manual paperwork and administrative overhead.</li>
        </ul>
        <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg text-sm text-slate-700 italic">Popular ERP Vendors: SAP, Oracle NetSuite, Microsoft Dynamics.</div>
      </>
    ),
    punjabi: (
      <>
        <div className="mb-3 leading-relaxed"><span className="font-bold">ERP (ਐਂਟਰਪ੍ਰਾਈਜ਼ ਰਿਸੋਰਸ ਪਲਾਨਿੰਗ):</span> ਇਹ ਇੱਕ ਬਹੁਤ ਵੱਡਾ ਸਾਫਟਵੇਅਰ ਹੈ ਜੋ ਕੰਪਨੀ ਦੇ ਸਾਰੇ ਵੱਖ-ਵੱਖ ਵਿਭਾਗਾਂ (ਜਿਵੇਂ Sales, HR, Finance, Production) ਨੂੰ ਇੱਕ ਹੀ ਕੇਂਦਰੀ ਸਿਸਟਮ ਅਤੇ ਡਾਟਾਬੇਸ (Database) ਨਾਲ ਜੋੜਦਾ ਹੈ।</div>
        <div className="mb-2 font-bold">ਮੁੱਖ ਫਾਇਦੇ:</div>
        <ul className="list-disc pl-5 space-y-3 text-slate-700">
           <li><strong>ਵਿਭਾਗਾਂ ਦਾ ਮੇਲ (Integration):</strong> ਜਿਵੇਂ ਹੀ Sales ਵਿਭਾਗ ਕੋਈ ਆਰਡਰ ਲੈਂਦਾ ਹੈ, ਤਾਂ ਗੋਦਾਮ (Inventory) ਵਿੱਚੋਂ ਸਾਮਾਨ ਆਪਣੇ ਆਪ ਘੱਟ ਜਾਂਦਾ ਹੈ ਅਤੇ Finance ਵਿਭਾਗ ਦਾ ਖਾਤਾ ਆਪਣੇ ਆਪ ਅੱਪਡੇਟ ਹੋ ਜਾਂਦਾ ਹੈ।</li>
           <li><strong>ਡਾਟਾ ਦੁਹਰਾਅ ਦਾ ਖਾਤਮਾ (No Redundancy):</strong> ਸਾਰਾ ਡਾਟਾ ਇੱਕ ਹੀ ਜਗ੍ਹਾ ਹੁੰਦਾ ਹੈ, ਇਸ ਲਈ ਕੋਈ ਵੀ ਜਾਣਕਾਰੀ ਡੁਪਲੀਕੇਟ (Duplicate) ਨਹੀਂ ਹੁੰਦੀ।</li>
           <li><strong>ਰੀਅਲ-ਟਾਈਮ ਜਾਣਕਾਰੀ (Real-time):</strong> ਮਾਲਕ ਕਿਸੇ ਵੀ ਸਮੇਂ ਕੰਪਨੀ ਦਾ ਸਹੀ ਮੁਨਾਫਾ ਜਾਂ ਨੁਕਸਾਨ ਲਾਈਵ (Live) ਦੇਖ ਸਕਦਾ ਹੈ।</li>
           <li><strong>ਰਫਤਾਰ (Efficiency):</strong> ਕਾਗਜ਼ਾਂ ਦਾ ਕੰਮ ਖਤਮ ਹੋ ਜਾਂਦਾ ਹੈ ਅਤੇ ਕੰਮ ਬਹੁਤ ਤੇਜ਼ੀ ਨਾਲ ਹੁੰਦਾ ਹੈ।</li>
         </ul>
      </>
    )
  },
  {
    id: "Q12",
    section: "ADVANCED & EXPECTED",
    question: "Differentiate between Data Warehouse and Data Mining.",
    english: (
      <>
        <div className="mb-2 font-bold text-slate-900">1. Data Warehouse (The Storage):</div>
        <div className="mb-4 text-slate-700">A Data Warehouse is a massive, centralized, non-volatile repository of historical data gathered from multiple operational databases (TPS). It is specifically structured for <strong>OLAP (Online Analytical Processing)</strong> to run complex queries without slowing down daily business operations. It does not delete data; it accumulates it over years for trend analysis.</div>
        
        <div className="mb-2 font-bold text-slate-900">2. Data Mining (The Process):</div>
        <div className="mb-4 text-slate-700">Data Mining is the advanced analytical process of deploying Artificial Intelligence and Statistical Algorithms to dig through the Data Warehouse. The goal is to discover hidden patterns, unmapped correlations, and association rules. <br/><strong>Famous Example:</strong> Market Basket Analysis (e.g., Target discovering that customers who buy diapers on Friday evenings also frequently buy beer).</div>
      </>
    ),
    punjabi: (
      <>
        <ul className="list-disc pl-5 space-y-4 text-slate-700">
           <li><strong>ਡਾਟਾ ਵੇਅਰਹਾਊਸ (Data Warehouse):</strong> ਇਹ ਡਾਟਾ ਸਟੋਰ ਕਰਨ ਦਾ ਇੱਕ ਬਹੁਤ ਵੱਡਾ ਗੋਦਾਮ ਹੈ। ਇੱਥੇ ਕੰਪਨੀ ਦੇ ਪਿਛਲੇ 10-20 ਸਾਲਾਂ ਦਾ ਰਿਕਾਰਡ ਸਾਂਭ ਕੇ ਰੱਖਿਆ ਜਾਂਦਾ ਹੈ। ਰੋਜ਼ਾਨਾ ਦੇ ਡਾਟਾਬੇਸ (ਜੋ ਤੇਜ਼ ਕੰਮ ਲਈ ਹੁੰਦੇ ਹਨ) ਤੋਂ ਡਾਟਾ ਕੱਢ ਕੇ ਇੱਥੇ ਰੱਖਿਆ ਜਾਂਦਾ ਹੈ ਤਾਂ ਜੋ ਬਾਅਦ ਵਿੱਚ ਵਿਸ਼ਲੇਸ਼ਣ (Analysis) ਕੀਤਾ ਜਾ ਸਕੇ। ਇੱਥੋਂ ਡਾਟਾ ਕਦੇ ਡਿਲੀਟ ਨਹੀਂ ਹੁੰਦਾ।</li>
           <li><strong>ਡਾਟਾ ਮਾਈਨਿੰਗ (Data Mining):</strong> ਇਹ ਉਸ ਵੱਡੇ ਗੋਦਾਮ (ਵੇਅਰਹਾਊਸ) ਵਿੱਚੋਂ ਛੁਪੇ ਹੋਏ ਪੈਟਰਨ (Patterns) ਅਤੇ ਨਵੇਂ ਰਿਸ਼ਤੇ ਲੱਭਣ ਦਾ ਤਰੀਕਾ ਹੈ। ਇਸ ਵਿੱਚ AI ਅਤੇ ਗਣਿਤ ਦੀ ਵਰਤੋਂ ਹੁੰਦੀ ਹੈ। <strong>ਉਦਾਹਰਣ:</strong> ਮਾਈਨਿੰਗ ਰਾਹੀਂ ਇਹ ਪਤਾ ਲਗਾਉਣਾ ਕਿ ਜੋ ਗਾਹਕ ਲੈਪਟਾਪ ਖਰੀਦਦਾ ਹੈ, ਉਹ ਜ਼ਿਆਦਾਤਰ ਵਾਇਰਲੈੱਸ ਮਾਊਸ (Wireless Mouse) ਵੀ ਖਰੀਦਦਾ ਹੈ। ਇਹ ਜਾਣਕਾਰੀ ਸੇਲਜ਼ ਵਧਾਉਣ ਲਈ ਬਹੁਤ ਲਾਭਦਾਇਕ ਹੁੰਦੀ ਹੈ।</li>
         </ul>
      </>
    )
  },
  {
    id: "Q13",
    section: "ADVANCED & EXPECTED",
    question: "What is a DFD? Explain its components, levels, and core rules.",
    english: (
      <>
        <div className="mb-3"><span className="font-bold text-slate-900">Definition:</span> A Data Flow Diagram (DFD) is a purely logical graphical representation of how data moves through an information system. It maps out exactly where data comes from, how it gets transformed, and where it goes, completely ignoring hardware configurations.</div>
        <div className="mb-2 font-bold text-slate-900">The 4 Core Symbols:</div>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
          <li><strong>Process (Circle or Rounded Rectangle):</strong> An action that transforms incoming data into outgoing data (e.g., "Calculate Tax").</li>
          <li><strong>Data Flow (Arrow):</strong> The path that data takes between processes, stores, or entities.</li>
          <li><strong>Data Store (Open Rectangle):</strong> A repository where data is held at rest (e.g., Database, Filing Cabinet).</li>
          <li><strong>External Entity (Square):</strong> Outside actors (users, other systems) that supply data to or receive data from the system (e.g., "Customer").</li>
        </ul>
        <div className="mb-2 font-bold text-slate-900">Levels and Rules:</div>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li><strong>Context Diagram (Level 0):</strong> The highest level overview. Shows the entire system as a <em>single</em> giant process interacting with external entities.</li>
          <li><strong>Level 1/2:</strong> Decomposes the main process into detailed sub-processes.</li>
          <li><strong>Golden Rule:</strong> A Data Store cannot directly send data to another Data Store or an External Entity. Data MUST pass through a Process first.</li>
        </ul>
      </>
    ),
    punjabi: (
      <>
        <div className="mb-3 leading-relaxed"><span className="font-bold">ਪਰਿਭਾਸ਼ਾ:</span> DFD ਇੱਕ ਨਕਸ਼ਾ (Graphical Diagram) ਹੈ ਜੋ ਇਹ ਦਿਖਾਉਂਦਾ ਹੈ ਕਿ ਸਿਸਟਮ ਵਿੱਚ ਡਾਟਾ ਕਿੱਥੋਂ ਆ ਰਿਹਾ ਹੈ, ਕਿਵੇਂ ਬਦਲ ਰਿਹਾ ਹੈ, ਅਤੇ ਕਿੱਥੇ ਸੇਵ ਹੋ ਰਿਹਾ ਹੈ।</div>
        <div className="mb-2 font-bold">DFD ਦੇ 4 ਮੁੱਖ ਹਿੱਸੇ:</div>
        <ul className="list-disc pl-5 space-y-2 mb-3 text-slate-700">
           <li><strong>ਪ੍ਰੋਸੈਸ (Process):</strong> ਜਿੱਥੇ ਕੰਮ ਹੁੰਦਾ ਹੈ ਅਤੇ ਡਾਟਾ ਬਦਲਦਾ ਹੈ (ਜਿਵੇਂ ਬਿੱਲ ਬਣਾਉਣਾ)। ਇਸਨੂੰ ਗੋਲ ਚੱਕਰ ਨਾਲ ਦਿਖਾਇਆ ਜਾਂਦਾ ਹੈ।</li>
           <li><strong>ਡਾਟਾ ਫਲੋਅ (Data Flow):</strong> ਇਹ ਤੀਰ (Arrow) ਹੁੰਦੇ ਹਨ ਜੋ ਦੱਸਦੇ ਹਨ ਕਿ ਡਾਟਾ ਕਿਸ ਦਿਸ਼ਾ ਵੱਲ ਜਾ ਰਿਹਾ ਹੈ।</li>
           <li><strong>ਡਾਟਾ ਸਟੋਰ (Data Store):</strong> ਜਿੱਥੇ ਡਾਟਾ ਪੱਕੇ ਤੌਰ 'ਤੇ ਸੇਵ (Save) ਹੁੰਦਾ ਹੈ (ਜਿਵੇਂ Database)।</li>
           <li><strong>ਬਾਹਰੀ ਐਂਟਿਟੀ (External Entity):</strong> ਸਿਸਟਮ ਤੋਂ ਬਾਹਰਲੇ ਲੋਕ ਜੋ ਡਾਟਾ ਦਿੰਦੇ ਜਾਂ ਲੈਂਦੇ ਹਨ (ਜਿਵੇਂ ਗਾਹਕ)। ਇਸਨੂੰ ਡੱਬੇ (Square) ਨਾਲ ਦਿਖਾਇਆ ਜਾਂਦਾ ਹੈ।</li>
         </ul>
         <div className="mb-2 font-bold">ਖਾਸ ਨਿਯਮ:</div>
         <p className="text-slate-700 leading-relaxed">Level 0 DFD ਪੂਰੇ ਸਿਸਟਮ ਨੂੰ ਸਿਰਫ ਇੱਕ ਵੱਡੇ ਪ੍ਰੋਸੈਸ ਵਜੋਂ ਦਿਖਾਉਂਦਾ ਹੈ। ਸਭ ਤੋਂ ਵੱਡਾ ਨਿਯਮ ਇਹ ਹੈ ਕਿ ਕੋਈ ਵੀ ਡਾਟਾ ਸਿੱਧਾ ਡਾਟਾਬੇਸ ਤੋਂ ਗਾਹਕ ਕੋਲ ਨਹੀਂ ਜਾ ਸਕਦਾ, ਉਸਨੂੰ ਪਹਿਲਾਂ ਕਿਸੇ ਪ੍ਰੋਸੈਸ (Process) ਵਿੱਚੋਂ ਲੰਘਣਾ ਪਵੇਗਾ।</p>
      </>
    )
  },
  {
    id: "Q14",
    section: "ADVANCED & EXPECTED",
    inExam: true,
    question: "Explain the comprehensive role of MIS in modern organizations.",
    english: (
      <>
        <div className="mb-3 text-slate-700">In the digital era, an organization without an MIS operates blindly. The roles of MIS span across all managerial functions:</div>
        <ul className="list-decimal pl-5 space-y-3 mb-4 text-slate-700">
          <li><strong>Decision Making:</strong> Replaces intuition-based management with data-driven facts, significantly reducing the risk of bad decisions.</li>
          <li><strong>Strategic Planning:</strong> Analyzes historical trends and external market data to help CEOs forecast future scenarios and set 5-year goals.</li>
          <li><strong>Operational Control:</strong> Continuously compares actual performance against planned budgets. If deviations occur (e.g., excessive overtime costs), MIS flags it immediately via Exception Reports.</li>
          <li><strong>Coordination (Silo Busting):</strong> Bridges the gap between disparate departments, ensuring Sales, Manufacturing, and HR are looking at the same synchronized data.</li>
          <li><strong>Competitive Advantage:</strong> Fast, high-quality information allows a company to react to market changes faster than competitors.</li>
        </ul>
      </>
    ),
    punjabi: (
      <>
        <div className="mb-3 font-medium">ਅੱਜ ਦੇ ਸਮੇਂ ਵਿੱਚ ਕੋਈ ਵੀ ਵੱਡੀ ਕੰਪਨੀ MIS ਤੋਂ ਬਿਨਾਂ ਕੰਮ ਨਹੀਂ ਕਰ ਸਕਦੀ। ਇਸਦੇ ਮੁੱਖ ਰੋਲ ਹੇਠ ਲਿਖੇ ਹਨ:</div>
         <ul className="list-disc pl-5 space-y-3 text-slate-700">
           <li><strong>ਫੈਸਲੇ ਲੈਣ ਵਿੱਚ (Decision Making):</strong> ਇਹ ਅੰਦਾਜ਼ੇ ਲਗਾਉਣ ਦੀ ਬਜਾਏ ਅਸਲੀ ਅੰਕੜਿਆਂ (Data) ਦੇ ਆਧਾਰ 'ਤੇ ਸਹੀ ਫੈਸਲੇ ਲੈਣ ਦੀ ਤਾਕਤ ਦਿੰਦਾ ਹੈ।</li>
           <li><strong>ਯੋਜਨਾ ਬਣਾਉਣ ਵਿੱਚ (Planning):</strong> ਪੁਰਾਣੇ ਰਿਕਾਰਡ ਦੇਖ ਕੇ ਮੈਨੇਜਰ ਭਵਿੱਖ ਦੀਆਂ ਰਣਨੀਤੀਆਂ (Future Strategies) ਬਣਾ ਸਕਦੇ ਹਨ।</li>
           <li><strong>ਕੰਟਰੋਲ (Control):</strong> MIS ਕੰਪਨੀ ਦੇ ਰੋਜ਼ਾਨਾ ਖਰਚਿਆਂ 'ਤੇ ਨਜ਼ਰ ਰੱਖਦਾ ਹੈ। ਜੇਕਰ ਕੋਈ ਵਿਭਾਗ ਬਜਟ ਤੋਂ ਜ਼ਿਆਦਾ ਖਰਚਾ ਕਰਦਾ ਹੈ, ਤਾਂ MIS ਤੁਰੰਤ ਰਿਪੋਰਟ ਦਿੰਦਾ ਹੈ।</li>
           <li><strong>ਸਹਿਯੋਗ (Coordination):</strong> ਇਹ ਵੱਖ-ਵੱਖ ਵਿਭਾਗਾਂ (Sales, HR, Production) ਨੂੰ ਆਪਸ ਵਿੱਚ ਜੋੜਦਾ ਹੈ ਤਾਂ ਜੋ ਸਾਰੇ ਮਿਲ ਕੇ ਕੰਮ ਕਰ ਸਕਣ।</li>
           <li><strong>ਮੁਕਾਬਲੇ ਵਿੱਚ ਜਿੱਤ (Competitive Advantage):</strong> ਤੇਜ਼ ਅਤੇ ਸਹੀ ਜਾਣਕਾਰੀ ਨਾਲ ਕੰਪਨੀ ਆਪਣੇ ਵਿਰੋਧੀਆਂ (Competitors) ਤੋਂ ਅੱਗੇ ਨਿਕਲ ਸਕਦੀ ਹੈ।</li>
         </ul>
      </>
    )
  },
  {
    id: "Q15",
    section: "ADVANCED & EXPECTED",
    inExam: true,
    question: "Define a System Analyst. Discuss their primary responsibilities and required skill sets.",
    english: (
      <>
        <div className="mb-3"><span className="font-bold text-slate-900">Definition:</span> A System Analyst is an IT professional who acts as the ultimate bridge between non-technical business stakeholders (clients) and highly technical software developers (programmers). They analyze business problems and design computer-based solutions.</div>
        <div className="mb-2 font-bold text-slate-900">Primary Responsibilities:</div>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
          <li>Conducting thorough interviews to gather exact user requirements.</li>
          <li>Performing Feasibility Studies (Is the project worth the money?).</li>
          <li>Authoring the complex Software Requirement Specification (SRS) document.</li>
          <li>Designing logical architectures (DFDs, UI wireframes, DB schemas).</li>
          <li>Acting as a project manager, overseeing coding, testing, and final system deployment.</li>
        </ul>
        <div className="mb-2 font-bold text-slate-900">Required Skills (The Trifecta):</div>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li><strong>Technical Skills:</strong> Deep understanding of databases, programming logic, and networking.</li>
          <li><strong>Interpersonal/Communication Skills:</strong> Ability to talk to non-technical clients and extract what they truly want, not just what they say.</li>
          <li><strong>Analytical Skills:</strong> Breaking down massive, complex problems into small, solvable logical steps.</li>
        </ul>
      </>
    ),
    punjabi: (
      <>
        <div className="mb-3 leading-relaxed"><span className="font-bold">ਪਰਿਭਾਸ਼ਾ:</span> ਸਿਸਟਮ ਐਨਾਲਿਸਟ (System Analyst) ਉਹ ਵਿਅਕਤੀ ਹੈ ਜੋ ਕੰਪਨੀ ਦੇ ਮਾਲਕਾਂ (ਜਿਨ੍ਹਾਂ ਨੂੰ ਕੋਡਿੰਗ ਨਹੀਂ ਆਉਂਦੀ) ਅਤੇ ਪ੍ਰੋਗਰਾਮਰਾਂ (ਜੋ ਕੋਡਿੰਗ ਕਰਦੇ ਹਨ) ਦੇ ਵਿਚਕਾਰ ਇੱਕ ਪੁਲ (Bridge) ਦਾ ਕੰਮ ਕਰਦਾ ਹੈ। ਉਹ ਕੰਪਨੀ ਦੀਆਂ ਸਮੱਸਿਆਵਾਂ ਨੂੰ ਸਮਝ ਕੇ ਸਾਫਟਵੇਅਰ ਰਾਹੀਂ ਹੱਲ ਕੱਢਦਾ ਹੈ।</div>
        <div className="mb-2 font-bold">ਮੁੱਖ ਜ਼ਿੰਮੇਵਾਰੀਆਂ (Responsibilities):</div>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
           <li>ਗਾਹਕਾਂ ਨਾਲ ਮੀਟਿੰਗ ਕਰਕੇ ਉਹਨਾਂ ਦੀਆਂ ਜ਼ਰੂਰਤਾਂ (Requirements) ਲਿਖਣਾ।</li>
           <li>ਇਹ ਚੈੱਕ ਕਰਨਾ ਕਿ ਪ੍ਰੋਜੈਕਟ ਬਣਾਉਣਾ ਫਾਇਦੇਮੰਦ (Feasible) ਹੈ ਜਾਂ ਨਹੀਂ।</li>
           <li>ਸਾਫਟਵੇਅਰ ਦਾ ਨਕਸ਼ਾ (DFD) ਅਤੇ ਡਿਜ਼ਾਈਨ ਤਿਆਰ ਕਰਨਾ।</li>
           <li>ਸਾਫਟਵੇਅਰ ਬਣਨ ਤੋਂ ਬਾਅਦ ਉਸਦੀ ਟੈਸਟਿੰਗ (Testing) ਕਰਵਾਉਣਾ।</li>
        </ul>
        <div className="mb-2 font-bold">ਜ਼ਰੂਰੀ ਹੁਨਰ (Skills):</div>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
           <li><strong>ਤਕਨੀਕੀ ਗਿਆਨ:</strong> ਕੰਪਿਊਟਰ ਅਤੇ ਸਾਫਟਵੇਅਰ ਦੀ ਪੂਰੀ ਜਾਣਕਾਰੀ।</li>
           <li><strong>ਬੋਲਚਾਲ ਦਾ ਤਰੀਕਾ (Communication):</strong> ਲੋਕਾਂ ਦੀਆਂ ਗੱਲਾਂ ਨੂੰ ਸਹੀ ਢੰਗ ਨਾਲ ਸਮਝਣਾ ਅਤੇ ਪ੍ਰੋਗਰਾਮਰਾਂ ਨੂੰ ਸਮਝਾਉਣਾ।</li>
           <li><strong>ਸਮੱਸਿਆ ਹੱਲ ਕਰਨਾ:</strong> ਵੱਡੀਆਂ ਮੁਸ਼ਕਿਲਾਂ ਨੂੰ ਛੋਟੇ ਹਿੱਸਿਆਂ ਵਿੱਚ ਵੰਡ ਕੇ ਹੱਲ ਕੱਢਣਾ।</li>
        </ul>
      </>
    )
  },
  {
    id: "Q16",
    section: "ADVANCED & EXPECTED",
    question: "Differentiate critically between E-Business and E-Commerce.",
    english: (
      <>
        <div className="mb-3 text-slate-700">While often used interchangeably, E-Commerce is merely a subset of the massive E-Business umbrella.</div>
        <div className="overflow-hidden rounded-lg border border-slate-200 mb-3">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 font-bold text-slate-900 border-r border-slate-200">E-Commerce</th>
                <th className="px-4 py-3 font-bold text-slate-900">E-Business</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr>
                <td className="px-4 py-3 border-r border-slate-200">Strictly focused on the buying, selling, and financial transactions over the Internet.</td>
                <td className="px-4 py-3">Encompasses ALL business activities conducted digitally (Sales, HR, Production, Logistics).</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-r border-slate-200">Requires an external connection (Internet) to reach customers.</td>
                <td className="px-4 py-3">Utilizes both external (Internet) and internal networks (Intranets/Extranets) for operations.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-r border-slate-200">Narrow scope (Subset).</td>
                <td className="px-4 py-3">Much wider, overarching scope (Superset).</td>
              </tr>
              <tr className="bg-slate-50/50 italic font-medium">
                <td className="px-4 py-3 border-r border-slate-200">Example: A user buying a laptop on Amazon using a credit card.</td>
                <td className="px-4 py-3">Example: Amazon tracking its warehouse inventory via internal software networks.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
    punjabi: (
      <>
         <div className="mb-3 leading-relaxed">ਅਕਸਰ ਲੋਕ ਇਹਨਾਂ ਦੋਵਾਂ ਨੂੰ ਇੱਕ ਹੀ ਸਮਝਦੇ ਹਨ, ਪਰ E-Commerce ਅਸਲ ਵਿੱਚ E-Business ਦਾ ਸਿਰਫ ਇੱਕ ਛੋਟਾ ਹਿੱਸਾ ਹੈ।</div>
         <ul className="list-disc pl-5 space-y-4 text-slate-700">
           <li><strong>E-Commerce (ਈ-ਕਾਮਰਸ):</strong> ਇਸਦਾ ਮਤਲਬ ਸਿਰਫ ਇੰਟਰਨੈੱਟ ਰਾਹੀਂ ਸਾਮਾਨ ਖਰੀਦਣਾ, ਵੇਚਣਾ ਅਤੇ ਪੈਸਿਆਂ ਦਾ ਲੈਣ-ਦੇਣ ਕਰਨਾ ਹੈ। ਇਹ ਗਾਹਕਾਂ ਨਾਲ ਜੁੜਨ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ। (ਉਦਾਹਰਣ: Amazon ਤੋਂ ਮੋਬਾਈਲ ਖਰੀਦਣਾ)।</li>
           <li><strong>E-Business (ਈ-ਬਿਜ਼ਨਸ):</strong> ਇਹ ਬਹੁਤ ਵੱਡਾ ਸ਼ਬਦ ਹੈ। ਇਸ ਵਿੱਚ ਸਾਮਾਨ ਵੇਚਣ ਤੋਂ ਇਲਾਵਾ ਕੰਪਨੀ ਦੇ ਸਾਰੇ ਅੰਦਰੂਨੀ ਕੰਮ (ਜਿਵੇਂ ਮੁਲਾਜ਼ਮਾਂ ਦੀ ਭਰਤੀ, ਗੋਦਾਮ ਦਾ ਹਿਸਾਬ ਰੱਖਣਾ, ਕੰਪਨੀਆਂ ਦਾ ਆਪਸ ਵਿੱਚ ਸੰਪਰਕ) ਵੀ ਸ਼ਾਮਲ ਹੁੰਦੇ ਹਨ ਜੋ ਕੰਪਿਊਟਰ ਨੈੱਟਵਰਕ ਰਾਹੀਂ ਕੀਤੇ ਜਾਂਦੇ ਹਨ। (ਉਦਾਹਰਣ: Amazon ਦਾ ਆਪਣੇ ਗੋਦਾਮ ਦੇ ਸਾਮਾਨ ਨੂੰ ਆਨਲਾਈਨ ਟ੍ਰੈਕ ਕਰਨਾ)।</li>
         </ul>
      </>
    )
  },
  {
    id: "Q17",
    section: "ADVANCED & EXPECTED",
    question: "Explain the types of decisions faced by managers.",
    english: (
      <>
        <div className="mb-3 text-slate-700">Managers encounter problems ranging from simple to highly complex. These are categorized into three levels of decision-making:</div>
        <ul className="list-decimal pl-5 space-y-4 mb-3 text-slate-700">
          <li><strong>Structured Decisions (Programmed):</strong> Highly routine, predictable, and repetitive decisions. A clear, defined mathematical procedure exists for handling them. They do not require human intuition and are often fully automated by TPS.<br/><span className="italic text-sm text-slate-500">Example: Rejecting a loan if a credit score is below 600, or issuing weekly payroll.</span></li>
          <li><strong>Semi-Structured Decisions:</strong> Decisions where only part of the problem has a clear-cut answer provided by an accepted procedure. It requires a mix of computer-generated data and human judgment. Usually supported by DSS.<br/><span className="italic text-sm text-slate-500">Example: Setting the marketing budget for a new quarter. Data shows past ROI, but intuition is needed for future trends.</span></li>
          <li><strong>Unstructured Decisions (Non-Programmed):</strong> Highly novel, complex, and non-routine decisions. There is no predefined rule or algorithm to solve them. They require deep insight, intuition, and experience from Top Management, supported by EIS.<br/><span className="italic text-sm text-slate-500">Example: Deciding to merge with a rival company or pivoting the entire business model.</span></li>
        </ul>
      </>
    ),
    punjabi: (
      <>
         <div className="mb-3 leading-relaxed">ਮੈਨੇਜਰਾਂ ਨੂੰ ਆਮ ਤੋਂ ਲੈ ਕੇ ਬਹੁਤ ਮੁਸ਼ਕਿਲ ਫੈਸਲੇ ਲੈਣੇ ਪੈਂਦੇ ਹਨ। ਇਹਨਾਂ ਨੂੰ 3 ਹਿੱਸਿਆਂ ਵਿੱਚ ਵੰਡਿਆ ਗਿਆ ਹੈ:</div>
         <ul className="list-disc pl-5 space-y-4 text-slate-700">
           <li><strong>Structured (ਸਧਾਰਣ ਫੈਸਲੇ):</strong> ਇਹ ਰੋਜ਼ਾਨਾ ਦੇ ਅਤੇ ਵਾਰ-ਵਾਰ ਹੋਣ ਵਾਲੇ ਫੈਸਲੇ ਹੁੰਦੇ ਹਨ। ਇਹਨਾਂ ਲਈ ਪੱਕੇ ਨਿਯਮ ਬਣੇ ਹੁੰਦੇ ਹਨ ਅਤੇ ਕੰਪਿਊਟਰ ਇਹ ਫੈਸਲੇ ਖੁਦ ਲੈ ਸਕਦਾ ਹੈ। (ਉਦਾਹਰਣ: ਕ੍ਰੈਡਿਟ ਕਾਰਡ ਦਾ ਬਿੱਲ ਲੇਟ ਹੋਣ 'ਤੇ ਫਾਈਨ (Fine) ਲਗਾਉਣਾ)।</li>
           <li><strong>Semi-Structured (ਅੱਧ-ਜਟਿਲ ਫੈਸਲੇ):</strong> ਇਹਨਾਂ ਵਿੱਚ ਕੁਝ ਹਿੱਸਾ ਕੰਪਿਊਟਰ ਦੇ ਡਾਟੇ 'ਤੇ ਅਤੇ ਕੁਝ ਹਿੱਸਾ ਮੈਨੇਜਰ ਦੇ ਤਜ਼ੁਰਬੇ 'ਤੇ ਨਿਰਭਰ ਕਰਦਾ ਹੈ। (ਉਦਾਹਰਣ: ਅਗਲੇ ਮਹੀਨੇ ਵਿਗਿਆਪਨ (Ads) 'ਤੇ ਕਿੰਨਾ ਪੈਸਾ ਖਰਚਣਾ ਹੈ)।</li>
           <li><strong>Unstructured (ਬਿਲਕੁਲ ਜਟਿਲ ਫੈਸਲੇ):</strong> ਇਹ ਬਹੁਤ ਵੱਡੇ ਅਤੇ ਨਵੇਂ ਫੈਸਲੇ ਹੁੰਦੇ ਹਨ ਜਿਨ੍ਹਾਂ ਲਈ ਕੋਈ ਨਿਯਮ ਨਹੀਂ ਹੁੰਦੇ। ਇਹ ਟੌਪ ਮੈਨੇਜਰਾਂ (CEOs) ਦੁਆਰਾ ਲਏ ਜਾਂਦੇ ਹਨ। (ਉਦਾਹਰਣ: ਕੰਪਨੀ ਦਾ ਕੋਈ ਨਵਾਂ ਪ੍ਰੋਡਕਟ ਲਾਂਚ ਕਰਨਾ)।</li>
         </ul>
      </>
    )
  },
  {
    id: "Q18",
    section: "ADVANCED & EXPECTED",
    question: "What is Information Quality? What are the key dimensions of good information?",
    english: (
      <>
        <div className="mb-3"><span className="font-bold text-slate-900">Definition:</span> Information Quality refers to the degree to which information meets the precise needs of its end-users for decision-making. Garbage In, Garbage Out (GIGO) states that bad data guarantees bad decisions.</div>
        <div className="mb-2 font-bold text-slate-900">Dimensions of High-Quality Information:</div>
        <ul className="list-disc pl-5 space-y-3 mb-4 text-slate-700">
          <li><strong>Accuracy:</strong> Information must be 100% free from errors. Even a single misplaced decimal in financial reporting can cause catastrophic losses.</li>
          <li><strong>Timeliness:</strong> Information is only valuable if it is delivered <em>before</em> the decision needs to be made. Yesterday's stock prices are useless for today's live trading.</li>
          <li><strong>Relevance:</strong> Information must directly apply to the specific problem at hand. A Marketing Manager does not need to see server hardware temperatures.</li>
          <li><strong>Completeness:</strong> All necessary facts must be included. Partial information leads to dangerously skewed conclusions.</li>
          <li><strong>Conciseness:</strong> Information must be summarized to prevent cognitive overload. Executives prefer visual dashboards over 500-page data dumps.</li>
        </ul>
        <div className="bg-emerald-50 text-emerald-800 p-3 rounded-lg text-sm border border-emerald-100 font-medium">
          <span className="font-bold">Importance:</span> Maintaining these dimensions ensures that an organization can trust its MIS, leading to confident, fast, and profitable business decisions.
        </div>
      </>
    ),
    punjabi: (
      <>
         <div className="mb-3 leading-relaxed"><span className="font-bold">ਜਾਣਕਾਰੀ ਦੀ ਗੁਣਵੱਤਾ (Information Quality):</span> ਇਸਦਾ ਮਤਲਬ ਹੈ ਕਿ ਜਾਣਕਾਰੀ ਕਿੰਨੀ ਭਰੋਸੇਮੰਦ ਅਤੇ ਫਾਇਦੇਮੰਦ ਹੈ। ਜੇਕਰ ਕੰਪਿਊਟਰ ਵਿੱਚ ਗਲਤ ਡਾਟਾ ਪਾਇਆ ਜਾਵੇਗਾ, ਤਾਂ ਨਤੀਜਾ (ਰਿਪੋਰਟ) ਵੀ ਗਲਤ ਹੀ ਆਵੇਗਾ (ਜਿਸਨੂੰ GIGO - Garbage In, Garbage Out ਕਹਿੰਦੇ ਹਨ)।</div>
         <div className="mb-2 font-bold">ਵਧੀਆ ਜਾਣਕਾਰੀ ਦੀਆਂ ਮੁੱਖ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ:</div>
         <ul className="list-disc pl-5 space-y-3 text-slate-700">
           <li><strong>ਸਹੀ ਹੋਣਾ (Accuracy):</strong> ਜਾਣਕਾਰੀ ਵਿੱਚ ਕੋਈ ਗਲਤੀ ਨਹੀਂ ਹੋਣੀ ਚਾਹੀਦੀ। ਵਿੱਤੀ ਰਿਪੋਰਟਾਂ ਵਿੱਚ ਇੱਕ ਛੋਟੀ ਜਿਹੀ ਗਲਤੀ ਵੀ ਵੱਡਾ ਨੁਕਸਾਨ ਕਰ ਸਕਦੀ ਹੈ।</li>
           <li><strong>ਸਹੀ ਸਮੇਂ ਤੇ ਮਿਲਣਾ (Timeliness):</strong> ਜਾਣਕਾਰੀ ਫੈਸਲਾ ਲੈਣ ਤੋਂ ਪਹਿਲਾਂ ਮਿਲਣੀ ਚਾਹੀਦੀ ਹੈ। ਫੈਸਲਾ ਹੋਣ ਤੋਂ ਬਾਅਦ ਮਿਲੀ ਸਹੀ ਜਾਣਕਾਰੀ ਵੀ ਬੇਕਾਰ ਹੈ।</li>
           <li><strong>ਲਾਭਦਾਇਕ ਹੋਣਾ (Relevance):</strong> ਜਾਣਕਾਰੀ ਉਸ ਸਮੱਸਿਆ ਨਾਲ ਸਬੰਧਤ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ ਜਿਸਨੂੰ ਹੱਲ ਕਰਨਾ ਹੈ। ਫਾਲਤੂ ਜਾਣਕਾਰੀ ਨਹੀਂ ਹੋਣੀ ਚਾਹੀਦੀ।</li>
           <li><strong>ਪੂਰੀ ਹੋਣਾ (Completeness):</strong> ਅੱਧੀ-ਅਧੂਰੀ ਜਾਣਕਾਰੀ ਖਤਰਨਾਕ ਹੁੰਦੀ ਹੈ, ਸਾਰੇ ਜ਼ਰੂਰੀ ਤੱਥ ਸ਼ਾਮਲ ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ।</li>
           <li><strong>ਸੰਖੇਪ ਹੋਣਾ (Conciseness):</strong> ਟੌਪ ਮੈਨੇਜਰਾਂ ਕੋਲ ਸਮਾਂ ਘੱਟ ਹੁੰਦਾ ਹੈ, ਇਸ ਲਈ ਜਾਣਕਾਰੀ ਬਹੁਤ ਲੰਬੀ ਹੋਣ ਦੀ ਬਜਾਏ ਛੋਟੀ ਅਤੇ ਟੂ-ਦੀ-ਪੁਆਇੰਟ (To-the-point) ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ।</li>
         </ul>
      </>
    )
  }
];

const shortNotesData = [
  {
    title: "(a) Production MIS",
    en: "Specifically designed to manage manufacturing operations. It oversees raw material inventory, assembly line scheduling, quality control, and CAD/CAM processes to ensure products are built efficiently.",
    pa: "ਇਹ ਫੈਕਟਰੀ ਵਿੱਚ ਸਾਮਾਨ ਬਣਾਉਣ (Manufacturing) ਦੀਆਂ ਗਤੀਵਿਧੀਆਂ ਨੂੰ ਸੰਭਾਲਦਾ ਹੈ, ਜਿਵੇਂ ਕੱਚਾ ਮਾਲ ਕਿੰਨਾ ਹੈ ਅਤੇ ਮਸ਼ੀਨਾਂ ਕਿਵੇਂ ਕੰਮ ਕਰਨਗੀਆਂ।"
  },
  {
    title: "(b) Formal & Informal System",
    en: "Formal systems follow strict, documented official rules (e.g., standard MIS reports). Informal systems are the unofficial grapevine communications (e.g., employees chatting in the cafeteria).",
    pa: "ਸਰਕਾਰੀ (Formal) ਸਿਸਟਮ ਕੰਪਨੀ ਦੇ ਲਿਖਤੀ ਨਿਯਮਾਂ 'ਤੇ ਚੱਲਦਾ ਹੈ। ਗੈਰ-ਸਰਕਾਰੀ (Informal) ਸਿਸਟਮ ਮੁਲਾਜ਼ਮਾਂ ਦੀ ਆਪਸੀ ਗੱਲਬਾਤ ਅਤੇ ਦੋਸਤੀ 'ਤੇ ਚੱਲਦਾ ਹੈ।"
  },
  {
    title: "(c) Role of Information",
    en: "Information is the lifeblood of business. It reduces uncertainty, supports strategic planning, enables operational control, and grants a competitive edge in the market.",
    pa: "ਜਾਣਕਾਰੀ ਕੰਪਨੀ ਲਈ ਖੂਨ ਵਾਂਗ ਹੈ। ਇਹ ਫੈਸਲੇ ਲੈਣ ਵਿੱਚ ਸ਼ੱਕ ਨੂੰ ਖਤਮ ਕਰਦੀ ਹੈ ਅਤੇ ਕੰਪਨੀ ਨੂੰ ਵਿਰੋਧੀਆਂ ਤੋਂ ਅੱਗੇ ਰੱਖਣ ਵਿੱਚ ਮਦਦ ਕਰਦੀ ਹੈ।"
  },
  {
    title: "(d) E-Business",
    en: "The integration of Internet technologies into ALL core business processes, encompassing everything from supply chain management to HR, not just online selling.",
    pa: "ਕੰਪਨੀ ਦੇ ਸਾਰੇ ਕੰਮਾਂ (ਜਿਵੇਂ HR, Supply Chain, ਸੇਲਜ਼) ਨੂੰ ਇੰਟਰਨੈੱਟ ਅਤੇ ਕੰਪਿਊਟਰ ਨੈੱਟਵਰਕ ਰਾਹੀਂ ਆਨਲਾਈਨ ਚਲਾਉਣਾ।"
  },
  {
    title: "(e) Simon Model",
    inExam: true,
    en: "Herbert Simon's 4-step decision-making model: Intelligence (searching for problems), Design (inventing solutions), Choice (selecting the best), and Implementation.",
    pa: "ਫੈਸਲਾ ਲੈਣ ਦੇ 4 ਕਦਮ: ਸਮੱਸਿਆ ਲੱਭਣਾ (Intelligence), ਹੱਲ ਬਣਾਉਣਾ (Design), ਸਹੀ ਹੱਲ ਚੁਣਨਾ (Choice), ਅਤੇ ਉਸਨੂੰ ਲਾਗੂ ਕਰਨਾ (Implementation)।"
  }
];

export default function MISQuestionsPage() {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-indigo-200">
      
      {/* Top Navigation */}
      <div className="print:hidden fixed top-0 left-0 right-0 p-4 md:p-6 flex justify-between items-center z-50 pointer-events-none">
        <Link 
          href="/" 
          className="pointer-events-auto flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-sm border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Dashboard
        </Link>
        <button 
          onClick={handlePrint}
          className="pointer-events-auto flex items-center gap-2 bg-[#4f46e5] text-white px-5 py-2.5 rounded-full shadow-md hover:bg-[#4338ca] transition-colors text-sm font-bold tracking-wide"
        >
          <Printer className="w-4 h-4" /> Export to PDF
        </button>
      </div>

      <main className="max-w-5xl mx-auto bg-white min-h-screen shadow-[0_0_40px_rgba(0,0,0,0.05)] print:shadow-none print:w-full print:max-w-none px-6 py-20 md:px-12 md:py-24 mt-0 md:mt-8 print:mt-0 print:p-0">
        
        {/* Header */}
        <div className="text-center mb-12 print:mb-8">
          <div className="bg-[#eef2ff] text-[#4338ca] text-xs font-black uppercase tracking-[0.2em] py-2 px-6 rounded-full inline-block mb-8 print:border print:border-indigo-300">
            ANTIGRAVITY • EXAM PREPARATION
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#0f172a] tracking-tight mb-4 leading-tight">
            MIS 100% EXAM QUESTIONS
          </h1>
          <h2 className="text-xl md:text-2xl text-[#4f46e5] font-medium italic mb-8 flex items-center justify-center gap-2">
            <BookOpen className="w-6 h-6" /> Detailed 15-Mark University Answers
          </h2>
          <div className="flex items-center justify-center gap-6 text-xs font-black text-slate-400 uppercase tracking-widest">
            <span>Code: BCA-DSC-4</span>
            <span>•</span>
            <span>Max Marks: 100</span>
          </div>
        </div>

        <hr className="border-t-2 border-slate-100 mb-12 print:mb-8" />

        {/* Dynamic Question Render */}
        {["SECTION A", "SECTION B", "SECTION C", "SECTION D", "ADVANCED & EXPECTED"].map(sectionName => (
          <div key={sectionName} className="mb-16 print:mb-12">
            
            <div className={`text-white py-3 px-6 rounded-xl font-black text-xl mb-8 flex items-center justify-center tracking-widest shadow-sm print:break-after-avoid ${sectionName === 'ADVANCED & EXPECTED' ? 'bg-amber-600' : 'bg-slate-900'}`}>
              {sectionName === 'ADVANCED & EXPECTED' && <Flame className="w-6 h-6 mr-3 text-amber-200 fill-amber-200" />}
              {sectionName}
            </div>
            
            <div className="space-y-10">
              {questionsData.filter(q => q.section === sectionName).map(q => (
                <div key={q.id} className="print:break-inside-avoid">
                  
                  {/* Question Title */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`${sectionName === 'ADVANCED & EXPECTED' ? 'bg-amber-500' : 'bg-[#4f46e5]'} text-white px-3 py-1.5 rounded-lg font-black text-sm shadow-sm shrink-0 mt-1`}>
                      {q.id}
                    </div>
                    <div className="flex-1">
                      {/* @ts-ignore */}
                      {q.inExam && (
                        <div className="inline-flex items-center gap-1.5 bg-emerald-500 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2 print:border print:border-emerald-500 print:text-emerald-700 print:bg-emerald-50 shadow-sm">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Appeared in Exam
                        </div>
                      )}
                      <h3 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight leading-snug">
                        {q.question}
                      </h3>
                    </div>
                  </div>

                  {/* Bilingual Grid */}
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 border rounded-2xl p-6 bg-white shadow-sm print:shadow-none ml-0 lg:ml-12 ${sectionName === 'ADVANCED & EXPECTED' ? 'border-amber-200 print:border-amber-300' : 'border-slate-200 print:border-slate-300'}`}>
                    
                    {/* English Side */}
                    <div>
                      <h4 className="text-[#059669] font-bold mb-4 flex items-center gap-2 border-b border-slate-100 pb-2 text-sm uppercase tracking-wider">
                        Detailed English Answer
                      </h4>
                      <div className="text-sm text-slate-800 leading-relaxed">
                        {q.english}
                      </div>
                    </div>

                    {/* Punjabi Side */}
                    <div className="lg:border-l border-slate-100 lg:pl-6 pt-4 lg:pt-0 border-t lg:border-t-0">
                      <h4 className="text-[#2563eb] font-bold mb-4 flex items-center gap-2 border-b border-slate-100 pb-2 text-sm uppercase tracking-wider">
                        ਵਿਸਤ੍ਰਿਤ ਪੰਜਾਬੀ ਅਨੁਵਾਦ
                      </h4>
                      <div className="text-sm text-slate-800 font-medium leading-relaxed">
                        {q.punjabi}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* SECTION E: Short Notes */}
        <div className="mb-16 print:mb-12 print:break-inside-avoid">
          <div className="bg-slate-900 text-white py-3 px-6 rounded-xl font-black text-xl mb-8 flex items-center justify-center tracking-widest shadow-sm print:break-after-avoid">
            SECTION E (SHORT NOTES)
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shortNotesData.map((note, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                {/* @ts-ignore */}
                {note.inExam && (
                  <div className="inline-flex items-center gap-1.5 bg-emerald-500 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 print:border print:border-emerald-500 print:text-emerald-700 print:bg-emerald-50 shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Appeared in Exam
                  </div>
                )}
                <h4 className="font-bold text-slate-900 mb-3 text-lg">{note.title}</h4>
                <p className="text-sm text-slate-700 mb-4 leading-relaxed">{note.en}</p>
                <div className="bg-blue-50 text-blue-800 p-3 rounded-lg text-sm font-medium border border-blue-100 leading-relaxed">
                  {note.pa}
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
