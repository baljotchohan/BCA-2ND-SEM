"use client";
import { Printer, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const topicsData = [
  {
    id: 1,
    inExam: true,
    title: "INTRODUCTION TO MIS",
    english: (
      <>
        <div className="mb-2"><span className="font-bold text-slate-900">Definition:</span> Management Information System (MIS) is a comprehensive, integrated system consisting of hardware, software, data, procedures, and personnel. It is designed to capture, process, store, and distribute information from both internal and external sources.</div>
        <div className="mb-3"><span className="font-bold text-slate-900">Explanation:</span> MIS bridges the gap between raw operational data and high-level strategy. It takes raw facts, structures them, and generates periodic, exception, and demand reports. These reports help managers at all levels plan future strategies, control current operations, and make efficient data-driven decisions rather than relying on pure intuition.</div>
        <div className="bg-emerald-50 text-emerald-800 font-bold p-3 rounded-lg text-sm border border-emerald-100 flex items-center justify-center">👉 MIS = Data → Processing → Information → Decision</div>
      </>
    ),
    punjabi: (
      <>
        <div className="mb-2 font-medium leading-relaxed">MIS (ਮੈਨੇਜਮੈਂਟ ਇਨਫਰਮੇਸ਼ਨ ਸਿਸਟਮ) ਹਾਰਡਵੇਅਰ, ਸਾਫਟਵੇਅਰ, ਡਾਟਾ, ਅਤੇ ਲੋਕਾਂ ਦਾ ਇੱਕ ਸੰਪੂਰਨ ਸਿਸਟਮ ਹੈ। ਇਹ ਕੱਚੇ ਡਾਟੇ ਨੂੰ ਇਕੱਠਾ ਕਰਦਾ ਹੈ ਅਤੇ ਉਸਨੂੰ ਕੀਮਤੀ ਰਿਪੋਰਟਾਂ ਵਿੱਚ ਬਦਲਦਾ ਹੈ।</div>
        <div className="mb-3 leading-relaxed">ਇਹ ਰਿਪੋਰਟਾਂ ਮੈਨੇਜਰਾਂ ਨੂੰ ਕੰਪਨੀ ਦਾ ਭਵਿੱਖ ਤੈਅ ਕਰਨ, ਕੰਮਕਾਜ ਨੂੰ ਕੰਟਰੋਲ ਕਰਨ, ਅਤੇ ਸਹੀ ਡਾਟਾ-ਅਧਾਰਿਤ ਫੈਸਲੇ ਲੈਣ ਵਿੱਚ ਮਦਦ ਕਰਦੀਆਂ ਹਨ। ਇਹ ਸਿਰਫ਼ ਅੰਦਾਜ਼ੇ ਲਗਾਉਣ ਦੀ ਬਜਾਏ, ਅਸਲੀ ਤੱਥਾਂ ਦੇ ਆਧਾਰ 'ਤੇ ਫੈਸਲੇ ਕਰਨ ਦੀ ਤਾਕਤ ਦਿੰਦਾ ਹੈ।</div>
        <ul className="list-disc pl-5 space-y-1 mb-3 text-slate-700">
          <li>ਡਾਟਾ ਇਕੱਠਾ ਕਰਦਾ ਹੈ</li>
          <li>ਉਸਨੂੰ ਪ੍ਰੋਸੈਸ ਕਰਦਾ ਹੈ</li>
          <li>ਜਾਣਕਾਰੀ ਵਿੱਚ ਬਦਲਦਾ ਹੈ</li>
          <li>ਅਤੇ ਫੈਸਲੇ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ</li>
        </ul>
        <div className="bg-blue-50 text-blue-800 font-bold p-3 rounded-lg text-sm border border-blue-100 flex items-center justify-center">👉 MIS = ਡਾਟਾ → ਪ੍ਰੋਸੈਸ → ਜਾਣਕਾਰੀ → ਫੈਸਲਾ</div>
      </>
    )
  },
  {
    id: 2,
    title: "DATA vs INFORMATION",
    english: (
      <>
        <div className="mb-2"><span className="font-bold text-slate-900">Definition:</span></div>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li><strong>Data:</strong> Represents raw, unorganized facts, figures, and symbols with no context.</li>
          <li><strong>Information:</strong> Processed, contextualized data structured into a meaningful form.</li>
        </ul>
        <div><span className="font-bold text-slate-900">Explanation:</span> The true value of information lies in its ability to reduce uncertainty. High-quality information must possess five key dimensions: <strong>Accuracy</strong>, <strong>Timeliness</strong> (available when needed), <strong>Relevance</strong>, <strong>Completeness</strong>, and <strong>Conciseness</strong> (to prevent information overload).</div>
      </>
    ),
    punjabi: (
      <>
        <ul className="list-disc pl-5 space-y-1 mb-3 text-slate-700">
          <li><strong>ਡਾਟਾ (Data):</strong> ਕੱਚੇ ਤੱਥ ਅਤੇ ਅੰਕੜੇ ਜਿਨ੍ਹਾਂ ਦਾ ਇਕੱਲੇ ਕੋਈ ਖਾਸ ਮਤਲਬ ਨਹੀਂ ਹੁੰਦਾ।</li>
          <li><strong>ਜਾਣਕਾਰੀ (Information):</strong> ਪ੍ਰੋਸੈਸ ਕੀਤਾ ਹੋਇਆ ਡਾਟਾ ਜਿਸਦਾ ਕੋਈ ਅਰਥ ਹੁੰਦਾ ਹੈ।</li>
        </ul>
        <div className="font-medium leading-relaxed">ਜਾਣਕਾਰੀ ਦੀ ਕੁਆਲਿਟੀ 5 ਚੀਜ਼ਾਂ 'ਤੇ ਨਿਰਭਰ ਕਰਦੀ ਹੈ: ਸਹੀ ਹੋਣਾ (Accuracy), ਸਮੇਂ 'ਤੇ ਮਿਲਣਾ (Timeliness), ਸੰਬੰਧਿਤ ਹੋਣਾ (Relevance), ਪੂਰਾ ਹੋਣਾ (Completeness), ਅਤੇ ਸੰਖੇਪ ਹੋਣਾ (Conciseness)। ਸਹੀ ਜਾਣਕਾਰੀ ਫੈਸਲੇ ਲੈਣ ਵਿੱਚ ਸ਼ੱਕ (uncertainty) ਨੂੰ ਘਟਾਉਂਦੀ ਹੈ।</div>
      </>
    )
  },
  {
    id: 3,
    inExam: true,
    title: "SYSTEM CONCEPT",
    english: (
      <>
        <div className="mb-2"><span className="font-bold text-slate-900">Definition:</span> A system is a logical grouping of interrelated, interdependent components that interact harmoniously to achieve a predefined central objective.</div>
        <div><span className="font-bold text-slate-900">Explanation:</span> Every functional system exists within an 'environment' separated by a 'boundary'. It takes resources (Input), transforms them (Process), delivers results (Output), and uses performance monitoring (Feedback) to self-correct and avoid 'entropy' (system failure or decay).</div>
      </>
    ),
    punjabi: (
      <>
        <div className="mb-2 leading-relaxed">ਸਿਸਟਮ ਇੱਕ ਅਜਿਹਾ ਢਾਂਚਾ ਹੈ ਜਿੱਥੇ ਵੱਖ-ਵੱਖ ਹਿੱਸੇ ਮਿਲ ਕੇ ਇੱਕ ਸਾਂਝੇ ਲਕਸ਼ (Target) ਲਈ ਕੰਮ ਕਰਦੇ ਹਨ।</div>
        <div className="font-medium mb-1">ਹਰ ਸਿਸਟਮ ਇੱਕ ਖਾਸ ਵਾਤਾਵਰਣ (Environment) ਵਿੱਚ ਕੰਮ ਕਰਦਾ ਹੈ:</div>
        <ul className="list-disc pl-5 space-y-1 text-slate-700">
          <li><strong>ਇਨਪੁੱਟ (Input):</strong> ਬਾਹਰੋਂ ਕੱਚਾ ਮਾਲ ਜਾਂ ਡਾਟਾ ਲੈਣਾ।</li>
          <li><strong>ਪ੍ਰੋਸੈਸ (Process):</strong> ਉਸ ਕੱਚੇ ਮਾਲ ਨੂੰ ਬਦਲਣਾ।</li>
          <li><strong>ਆਉਟਪੁੱਟ (Output):</strong> ਫਾਈਨਲ ਨਤੀਜਾ ਦੇਣਾ।</li>
          <li><strong>ਫੀਡਬੈਕ (Feedback):</strong> ਆਪਣੀ ਕਾਰਗੁਜ਼ਾਰੀ ਸੁਧਾਰਨ ਲਈ ਜਾਣਕਾਰੀ ਲੈਣਾ ਤਾਂ ਜੋ ਸਿਸਟਮ ਫੇਲ੍ਹ (Entropy) ਨਾ ਹੋਵੇ।</li>
        </ul>
      </>
    )
  },
  {
    id: 4,
    inExam: true,
    title: "CHARACTERISTICS OF SYSTEM",
    english: (
      <>
        <div className="mb-2"><span className="font-bold text-slate-900">Core Attributes:</span></div>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Organization:</strong> A strict hierarchical structure and arrangement of components.</li>
          <li><strong>Interaction:</strong> Continuous communication and data exchange between parts.</li>
          <li><strong>Interdependence:</strong> If one component fails (e.g., procurement), others (e.g., production) are heavily affected.</li>
          <li><strong>Integration:</strong> A holistic synergy where the whole is greater than the sum of its parts.</li>
          <li><strong>Central Objective:</strong> The ultimate mission statement driving the system.</li>
        </ul>
      </>
    ),
    punjabi: (
      <>
        <div className="font-medium mb-2">ਸਿਸਟਮ ਦੀਆਂ 5 ਮੁੱਖ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ:</div>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li><strong>ਸੰਰਚਨਾ (Organization):</strong> ਹਿੱਸਿਆਂ ਦੀ ਸਹੀ ਤਰਤੀਬ ਅਤੇ ਢਾਂਚਾ।</li>
          <li><strong>ਸੰਪਰਕ (Interaction):</strong> ਹਿੱਸਿਆਂ ਦਾ ਆਪਸ ਵਿੱਚ ਲਗਾਤਾਰ ਸੰਚਾਰ ਅਤੇ ਤਾਲਮੇਲ।</li>
          <li><strong>ਨਿਰਭਰਤਾ (Interdependence):</strong> ਇੱਕ ਹਿੱਸੇ ਦਾ ਦੂਜੇ 'ਤੇ ਨਿਰਭਰ ਹੋਣਾ (ਜਿਵੇਂ ਕੱਚਾ ਮਾਲ ਨਾ ਆਉਣ 'ਤੇ ਉਤਪਾਦਨ ਰੁਕ ਜਾਣਾ)।</li>
          <li><strong>ਇਕਤਾ (Integration):</strong> ਸਾਰੇ ਹਿੱਸਿਆਂ ਦਾ ਮਿਲ ਕੇ ਇੱਕ ਤਾਕਤ ਵਜੋਂ ਕੰਮ ਕਰਨਾ।</li>
          <li><strong>ਲਕਸ਼ (Objective):</strong> ਸਿਸਟਮ ਦਾ ਅੰਤਿਮ ਅਤੇ ਮੁੱਖ ਟੀਚਾ।</li>
        </ul>
      </>
    )
  },
  {
    id: 5,
    inExam: true,
    title: "TYPES OF SYSTEM",
    english: (
      <>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Physical System:</strong> Tangible entities like computer hardware, machinery, or buildings.</li>
          <li><strong>Abstract System:</strong> Conceptual, theoretical models like organizational charts or software architecture.</li>
          <li><strong>Open System:</strong> Actively interacts with its environment (e.g., business organizations).</li>
          <li><strong>Closed System:</strong> Completely self-contained with no environmental interaction (e.g., theoretical lab experiments).</li>
          <li><strong>Deterministic vs Probabilistic:</strong> Deterministic yields perfectly predictable results (computer programs), while Probabilistic involves uncertainty (inventory forecasting).</li>
        </ul>
      </>
    ),
    punjabi: (
      <>
        <div className="font-medium mb-2">ਸਿਸਟਮ ਦੇ ਪ੍ਰਕਾਰ:</div>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li><strong>ਭੌਤਿਕ (Physical):</strong> ਉਹ ਚੀਜ਼ਾਂ ਜਿਨ੍ਹਾਂ ਨੂੰ ਛੂਹਿਆ ਜਾ ਸਕਦਾ ਹੈ (ਜਿਵੇਂ ਮਸ਼ੀਨਾਂ, ਕੰਪਿਊਟਰ)।</li>
          <li><strong>ਧਾਰਨਾ (Abstract):</strong> ਵਿਚਾਰ ਜਾਂ ਨਕਸ਼ੇ (ਜਿਵੇਂ ਕੰਪਨੀ ਦਾ ਪਲਾਨ)।</li>
          <li><strong>ਖੁੱਲਾ (Open):</strong> ਜੋ ਬਾਹਰੀ ਵਾਤਾਵਰਣ ਨਾਲ ਤਾਲਮੇਲ ਰੱਖਦਾ ਹੈ (ਜਿਵੇਂ ਬਿਜ਼ਨਸ)।</li>
          <li><strong>ਬੰਦ (Closed):</strong> ਜਿਸਦਾ ਬਾਹਰਲੀ ਦੁਨੀਆ ਨਾਲ ਕੋਈ ਸੰਪਰਕ ਨਹੀਂ ਹੁੰਦਾ।</li>
          <li><strong>Deterministic / Probabilistic:</strong> ਜਿੱਥੇ ਨਤੀਜਾ ਪੱਕਾ ਪਤਾ ਹੋਵੇ (Deterministic) ਅਤੇ ਜਿੱਥੇ ਨਤੀਜੇ ਵਿੱਚ ਅਨਿਸ਼ਚਿਤਤਾ ਹੋਵੇ (Probabilistic)।</li>
        </ul>
      </>
    )
  },
  {
    id: 6,
    title: "TYPES OF INFORMATION SYSTEM",
    english: (
      <>
        <ul className="list-none space-y-3">
          <li><strong>TPS (Transaction Processing System):</strong> Bedrock systems for operational staff tracking daily, high-volume routine events (sales, payroll).</li>
          <li><strong>MIS:</strong> Serves middle management by consolidating TPS data into summary and exception reports.</li>
          <li><strong>DSS (Decision Support System):</strong> Highly interactive systems for middle/upper management using analytical models and "What-If" scenarios for semi-structured problems.</li>
          <li><strong>EIS (Executive Information System):</strong> Top-level dashboards focusing on long-term strategy, aggregating internal data with external market trends.</li>
        </ul>
      </>
    ),
    punjabi: (
      <>
        <ul className="list-disc pl-5 space-y-3 text-slate-700">
          <li><strong>TPS:</strong> ਕਲਰਕ ਜਾਂ ਵਰਕਰ ਇਸਨੂੰ ਰੋਜ਼ਾਨਾ ਦੇ ਕੰਮਾਂ (ਜਿਵੇਂ ਸੇਲਜ਼, ਤਨਖਾਹ) ਦਾ ਰਿਕਾਰਡ ਰੱਖਣ ਲਈ ਵਰਤਦੇ ਹਨ।</li>
          <li><strong>MIS:</strong> ਮਿਡਲ ਮੈਨੇਜਮੈਂਟ ਲਈ TPS ਦੇ ਡਾਟੇ ਤੋਂ ਰਿਪੋਰਟਾਂ ਤਿਆਰ ਕਰਦਾ ਹੈ।</li>
          <li><strong>DSS:</strong> ਗੁੰਝਲਦਾਰ ਫੈਸਲੇ ਲੈਣ ਲਈ ਵਿਸ਼ਲੇਸ਼ਣ (Analysis) ਅਤੇ ਵੱਖ-ਵੱਖ ਹਾਲਾਤਾਂ (What-If) ਦੀ ਜਾਂਚ ਕਰਦਾ ਹੈ।</li>
          <li><strong>EIS:</strong> ਟੌਪ ਮੈਨੇਜਮੈਂਟ (CEO) ਲਈ ਲੰਬੇ ਸਮੇਂ ਦੀ ਰਣਨੀਤੀ ਅਤੇ ਬਾਹਰੀ ਮਾਰਕੀਟ ਟਰੈਂਡਸ ਨੂੰ ਸਮਝਣ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।</li>
        </ul>
      </>
    )
  },
  {
    id: 7,
    inExam: true,
    title: "DECISION MAKING (HERBERT SIMON MODEL)",
    english: (
      <>
        <div className="mb-2"><span className="font-bold text-slate-900">Phases of Decision Making:</span></div>
        <ul className="list-decimal pl-5 space-y-2 mb-2">
          <li><strong>Intelligence:</strong> Scanning the internal/external environment to identify deviations (problems) or raw opportunities.</li>
          <li><strong>Design:</strong> Inventing, developing, and mathematically analyzing possible courses of action or alternative solutions.</li>
          <li><strong>Choice:</strong> Selecting the optimal or most feasible course of action from the generated alternatives.</li>
          <li><strong>Implementation:</strong> Putting the chosen solution into action and monitoring its real-world performance.</li>
        </ul>
      </>
    ),
    punjabi: (
      <>
        <div className="font-medium mb-2">ਫੈਸਲਾ ਕਰਨ ਦੇ 4 ਚਰਨ:</div>
        <ul className="list-decimal pl-5 space-y-2 text-slate-700">
          <li><strong>Intelligence (ਸਮੱਸਿਆ ਦੀ ਪਛਾਣ):</strong> ਵਾਤਾਵਰਣ ਦੀ ਜਾਂਚ ਕਰਨਾ ਤਾਂ ਜੋ ਸਮੱਸਿਆਵਾਂ ਜਾਂ ਨਵੇਂ ਮੌਕਿਆਂ ਦਾ ਪਤਾ ਲਗਾਇਆ ਜਾ ਸਕੇ।</li>
          <li><strong>Design (ਹੱਲ ਬਣਾਉਣਾ):</strong> ਸਮੱਸਿਆ ਨੂੰ ਹੱਲ ਕਰਨ ਲਈ ਵੱਖ-ਵੱਖ ਤਰੀਕੇ ਜਾਂ ਆਪਸ਼ਨਜ਼ (Options) ਬਣਾਉਣਾ ਅਤੇ ਉਨ੍ਹਾਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਨਾ।</li>
          <li><strong>Choice (ਚੋਣ ਕਰਨਾ):</strong> ਸਾਰੀਆਂ ਆਪਸ਼ਨਜ਼ ਵਿੱਚੋਂ ਸਭ ਤੋਂ ਵਧੀਆ ਹੱਲ ਦੀ ਚੋਣ ਕਰਨਾ।</li>
          <li><strong>Implementation (ਲਾਗੂ ਕਰਨਾ):</strong> ਚੁਣੇ ਹੋਏ ਫੈਸਲੇ ਨੂੰ ਅਮਲੀ ਰੂਪ ਵਿੱਚ ਲਾਗੂ ਕਰਨਾ ਅਤੇ ਨਤੀਜੇ ਦੇਖਣਾ।</li>
        </ul>
      </>
    )
  },
  {
    id: 8,
    title: "BOUNDED RATIONALITY",
    english: (
      <>
        <div className="mb-2"><span className="font-bold text-slate-900">Definition:</span> Herbert Simon argued against the classical "Economic Rational Man" theory which assumes humans can make mathematically perfect decisions.</div>
        <div><span className="font-bold text-slate-900">Explanation:</span> Bounded Rationality states that managerial cognition is severely limited by strict time constraints, lack of complete information, and human mental capacity. Instead of "optimizing" (finding the absolute best solution), managers <strong>"satisfice"</strong>—they accept the first available solution that meets their minimum threshold of satisfaction.</div>
      </>
    ),
    punjabi: (
      <>
        <div className="font-medium leading-relaxed">ਹਰਬਰਟ ਸਾਈਮਨ ਦੇ ਅਨੁਸਾਰ, ਕੋਈ ਵੀ ਇਨਸਾਨ 100% ਮੁਕੰਮਲ ਫੈਸਲਾ ਨਹੀਂ ਲੈ ਸਕਦਾ। ਮੈਨੇਜਰਾਂ ਕੋਲ ਸਮੇਂ ਦੀ ਕਮੀ ਹੁੰਦੀ ਹੈ, ਪੂਰੀ ਜਾਣਕਾਰੀ ਨਹੀਂ ਹੁੰਦੀ, ਅਤੇ ਇਨਸਾਨੀ ਦਿਮਾਗ ਦੀ ਸੋਚਣ ਦੀ ਇੱਕ ਹੱਦ ਹੁੰਦੀ ਹੈ।</div>
        <div className="mt-2 leading-relaxed">ਇਸ ਲਈ, ਉਹ ਸਭ ਤੋਂ "ਸਰਵੋਤਮ" (Best) ਹੱਲ ਲੱਭਣ ਦੀ ਬਜਾਏ ਇੱਕ "ਸੰਤੁਸ਼ਟੀਜਨਕ" (Good Enough) ਹੱਲ ਚੁਣ ਲੈਂਦੇ ਹਨ ਜਿਸ ਨਾਲ ਕੰਮ ਚੱਲ ਸਕੇ। ਇਸਨੂੰ <strong>"Satisficing"</strong> ਕਿਹਾ ਜਾਂਦਾ ਹੈ।</div>
      </>
    )
  },
  {
    id: 9,
    inExam: true,
    title: "SDLC (SYSTEM DEVELOPMENT LIFE CYCLE)",
    english: (
      <>
        <div className="mb-2"><span className="font-bold text-slate-900">Phases of Software Engineering:</span></div>
        <ul className="list-disc pl-5 space-y-1 mb-2">
          <li><strong>Planning/Feasibility:</strong> Assessing technical, economic, and operational viability.</li>
          <li><strong>Analysis:</strong> Gathering user requirements to generate the Software Requirement Specification (SRS).</li>
          <li><strong>Design:</strong> Creating High-Level (Architecture) and Low-Level (Algorithms/DFD) designs.</li>
          <li><strong>Coding:</strong> Writing actual source code.</li>
          <li><strong>Testing:</strong> Unit, Integration, and User Acceptance Testing (UAT) to squash bugs.</li>
          <li><strong>Maintenance:</strong> Post-deployment updates and support.</li>
        </ul>
      </>
    ),
    punjabi: (
      <>
        <div className="font-medium mb-2">SDLC (ਸਾਫਟਵੇਅਰ ਬਣਾਉਣ ਦਾ ਤਰੀਕਾ) ਦੇ ਚਰਨ:</div>
        <ul className="list-disc pl-5 space-y-1 text-slate-700">
          <li><strong>ਯੋਜਨਾ (Planning):</strong> ਦੇਖਣਾ ਕਿ ਕੀ ਪ੍ਰੋਜੈਕਟ ਤਕਨੀਕੀ ਅਤੇ ਵਿੱਤੀ ਤੌਰ 'ਤੇ ਸੰਭਵ ਹੈ।</li>
          <li><strong>ਵਿਸ਼ਲੇਸ਼ਣ (Analysis):</strong> ਯੂਜ਼ਰ ਦੀਆਂ ਜ਼ਰੂਰਤਾਂ ਨੂੰ ਸਮਝਣਾ ਅਤੇ SRS ਦਸਤਾਵੇਜ਼ ਤਿਆਰ ਕਰਨਾ।</li>
          <li><strong>ਡਿਜ਼ਾਈਨ (Design):</strong> ਸਿਸਟਮ ਦਾ ਨਕਸ਼ਾ ਅਤੇ ਢਾਂਚਾ (DFD) ਬਣਾਉਣਾ।</li>
          <li><strong>ਕੋਡਿੰਗ (Coding):</strong> ਕੰਪਿਊਟਰ ਭਾਸ਼ਾ (ਜਿਵੇਂ Java, C++) ਵਿੱਚ ਪ੍ਰੋਗਰਾਮ ਲਿਖਣਾ।</li>
          <li><strong>ਟੈਸਟਿੰਗ (Testing):</strong> ਗਲਤੀਆਂ ਲੱਭਣ ਅਤੇ ਠੀਕ ਕਰਨ ਲਈ ਸਿਸਟਮ ਦੀ ਜਾਂਚ ਕਰਨਾ।</li>
          <li><strong>ਮੇਨਟੇਨੈਂਸ (Maintenance):</strong> ਸਿਸਟਮ ਦੇ ਚਾਲੂ ਹੋਣ ਤੋਂ ਬਾਅਦ ਉਸਦੀ ਦੇਖਭਾਲ ਕਰਨਾ।</li>
        </ul>
      </>
    )
  },
  {
    id: 10,
    title: "TYPES OF MAINTENANCE",
    english: (
      <>
        <div className="mb-2"><span className="font-bold text-slate-900">Post-Deployment Care:</span></div>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Corrective:</strong> Fixing critical errors, bugs, or crashes discovered after the software is deployed.</li>
          <li><strong>Adaptive:</strong> Modifying the system to accommodate environmental shifts (e.g., a new OS version, new tax laws).</li>
          <li><strong>Perfective:</strong> Enhancing system performance, processing speed, or adding new user-requested features.</li>
          <li><strong>Preventive:</strong> Routine code refactoring and clean-up to prevent potential future failures before they occur.</li>
        </ul>
      </>
    ),
    punjabi: (
      <>
        <ul className="list-disc pl-5 space-y-3 text-slate-700">
          <li><strong>Corrective (ਗਲਤੀਆਂ ਠੀਕ ਕਰਨਾ):</strong> ਸਿਸਟਮ ਚੱਲਣ ਤੋਂ ਬਾਅਦ ਆਉਣ ਵਾਲੀਆਂ ਖਰਾਬੀਆਂ (Bugs) ਨੂੰ ਠੀਕ ਕਰਨਾ।</li>
          <li><strong>Adaptive (ਤਬਦੀਲੀਆਂ ਕਰਨਾ):</strong> ਨਵੇਂ ਵਾਤਾਵਰਣ (ਜਿਵੇਂ ਨਵਾਂ ਕਾਨੂੰਨ ਜਾਂ ਨਵਾਂ ਸਾਫਟਵੇਅਰ) ਮੁਤਾਬਕ ਸਿਸਟਮ ਨੂੰ ਬਦਲਣਾ।</li>
          <li><strong>Perfective (ਸੁਧਾਰ ਕਰਨਾ):</strong> ਸਿਸਟਮ ਦੀ ਸਪੀਡ ਵਧਾਉਣਾ ਅਤੇ ਨਵੇਂ ਫੀਚਰ (Features) ਸ਼ਾਮਲ ਕਰਨਾ।</li>
          <li><strong>Preventive (ਪਹਿਲਾਂ ਬਚਾਵ ਕਰਨਾ):</strong> ਕੋਡ ਨੂੰ ਸਾਫ ਕਰਨਾ ਤਾਂ ਜੋ ਭਵਿੱਖ ਵਿੱਚ ਕੋਈ ਵੱਡੀ ਸਮੱਸਿਆ ਨਾ ਆਵੇ।</li>
        </ul>
      </>
    )
  },
  {
    id: 11,
    title: "DFD (DATA FLOW DIAGRAM)",
    english: (
      <>
        <div className="mb-2"><span className="font-bold text-slate-900">Definition:</span> A graphical representation of how data moves through an information system. DFDs are strictly logical, ignoring hardware.</div>
        <div className="mb-2"><span className="font-bold text-slate-900">Elements:</span> External Entities (Sources/Sinks), Processes (Actions that transform data), Data Stores (Databases/Files), and Data Flow Lines.</div>
        <div><span className="font-bold text-slate-900">Note:</span> Context Diagram (Level 0) shows the entire system as a single major process interacting with external entities.</div>
      </>
    ),
    punjabi: (
      <>
        <div className="font-medium mb-2 leading-relaxed">DFD (ਡਾਟਾ ਫਲੋਅ ਡਾਇਗ੍ਰਾਮ) ਇੱਕ ਨਕਸ਼ਾ ਹੈ ਜੋ ਦਿਖਾਉਂਦਾ ਹੈ ਕਿ ਡਾਟਾ ਕਿੱਥੋਂ ਆਉਂਦਾ ਹੈ, ਕਿਵੇਂ ਬਦਲਦਾ ਹੈ, ਅਤੇ ਕਿੱਥੇ ਸੇਵ (Save) ਹੁੰਦਾ ਹੈ।</div>
        <div className="mb-1 font-medium">ਇਸਦੇ ਮੁੱਖ ਹਿੱਸੇ:</div>
        <ul className="list-decimal pl-5 space-y-1 text-slate-700">
          <li><strong>Process:</strong> ਜਿੱਥੇ ਡਾਟਾ ਪ੍ਰੋਸੈਸ ਹੁੰਦਾ ਹੈ।</li>
          <li><strong>Data Flow:</strong> ਡਾਟਾ ਦੇ ਆਉਣ-ਜਾਣ ਦਾ ਰਸਤਾ (ਤੀਰ ਰਾਹੀਂ)।</li>
          <li><strong>Data Store:</strong> ਜਿੱਥੇ ਡਾਟਾ ਸਟੋਰ ਹੁੰਦਾ ਹੈ (ਜਿਵੇਂ Database)।</li>
          <li><strong>External Entity:</strong> ਬਾਹਰੀ ਲੋਕ ਜਾਂ ਸਿਸਟਮ ਜੋ ਡਾਟਾ ਦਿੰਦੇ/ਲੈਂਦੇ ਹਨ (ਜਿਵੇਂ ਗਾਹਕ)।</li>
        </ul>
      </>
    )
  },
  {
    id: 12,
    title: "ERP (ENTERPRISE RESOURCE PLANNING)",
    english: (
      <>
        <div className="mb-2"><span className="font-bold text-slate-900">Definition:</span> Enterprise Resource Planning represents a massive paradigm shift from siloed departments to full organizational integration.</div>
        <div><span className="font-bold text-slate-900">Explanation:</span> ERP uses a massive, centralized database so that when Sales registers an order, Inventory and Finance are instantly updated. It severely reduces data redundancy and boosts inter-departmental communication, though implementations require massive Business Process Reengineering (BPR).</div>
      </>
    ),
    punjabi: (
      <>
        <div className="font-medium leading-relaxed mb-2">ERP (ਐਂਟਰਪ੍ਰਾਈਜ਼ ਰਿਸੋਰਸ ਪਲਾਨਿੰਗ) ਇੱਕ ਬਹੁਤ ਵੱਡਾ ਸਾਫਟਵੇਅਰ ਹੈ ਜੋ ਕੰਪਨੀ ਦੇ ਸਾਰੇ ਵਿਭਾਗਾਂ (Sales, HR, Finance) ਨੂੰ ਇੱਕ ਸਾਂਝੇ ਡਾਟਾਬੇਸ (Database) ਨਾਲ ਜੋੜਦਾ ਹੈ।</div>
        <div className="text-slate-700 leading-relaxed"><strong>ਉਦਾਹਰਣ:</strong> ਜਿਵੇਂ ਹੀ ਸੇਲਜ਼ ਵਿਭਾਗ ਕੋਈ ਆਰਡਰ ਲੈਂਦਾ ਹੈ, ਤਾਂ ਗੋਦਾਮ (Inventory) ਅਤੇ ਖਾਤਾ (Finance) ਵਿਭਾਗ ਨੂੰ ਆਪਣੇ ਆਪ ਪਤਾ ਲੱਗ ਜਾਂਦਾ ਹੈ। ਇਹ ਜਾਣਕਾਰੀ ਦੇ ਦੁਹਰਾਅ (Duplication) ਨੂੰ ਖਤਮ ਕਰਦਾ ਹੈ ਅਤੇ ਕੰਮ ਦੀ ਰਫਤਾਰ ਵਧਾਉਂਦਾ ਹੈ।</div>
      </>
    )
  },
  {
    id: 13,
    title: "FUNCTIONAL MIS",
    english: (
      <>
        <div className="mb-2"><span className="font-bold text-slate-900">Types & Purposes:</span></div>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Marketing MIS:</strong> Tracks market research, CRM, targeted ad campaigns, and competitor pricing.</li>
          <li><strong>HR MIS:</strong> Manages employee lifecycles—recruitment, payroll compliance, performance appraisals, and retirement.</li>
          <li><strong>Financial MIS:</strong> Monitors capital assets, investment ROI, budgeting, and automated auditing.</li>
          <li><strong>Production MIS:</strong> Oversees manufacturing schedules, supply chain logistics, CAD/CAM, and inventory control (Just-In-Time).</li>
        </ul>
      </>
    ),
    punjabi: (
      <>
        <div className="font-medium mb-2">ਹਰ ਵਿਭਾਗ ਆਪਣੀ ਲੋੜ ਮੁਤਾਬਕ MIS ਵਰਤਦਾ ਹੈ:</div>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li><strong>ਮਾਰਕੀਟਿੰਗ (Marketing):</strong> ਗਾਹਕਾਂ ਦੀਆਂ ਪਸੰਦਾਂ, ਵਿਗਿਆਪਨ (Ads) ਅਤੇ ਮਾਰਕੀਟ ਰਿਸਰਚ ਦਾ ਰਿਕਾਰਡ ਰੱਖਦਾ ਹੈ।</li>
          <li><strong>HR (Human Resource):</strong> ਮੁਲਾਜ਼ਮਾਂ ਦੀ ਭਰਤੀ, ਤਨਖਾਹ, ਅਤੇ ਉਨ੍ਹਾਂ ਦੀ ਕਾਰਗੁਜ਼ਾਰੀ (Performance) ਦਾ ਹਿਸਾਬ ਰੱਖਦਾ ਹੈ।</li>
          <li><strong>ਫਾਇਨੈਂਸ (Finance):</strong> ਕੰਪਨੀ ਦੇ ਪੈਸੇ, ਬਜਟ ਅਤੇ ਨਿਵੇਸ਼ (Investments) ਨੂੰ ਕੰਟਰੋਲ ਕਰਦਾ ਹੈ।</li>
          <li><strong>ਪ੍ਰੋਡਕਸ਼ਨ (Production):</strong> ਕੱਚੇ ਮਾਲ, ਫੈਕਟਰੀ ਮਸ਼ੀਨਾਂ, ਅਤੇ ਤਿਆਰ ਸਾਮਾਨ ਦੀ ਗਿਣਤੀ (Inventory) ਨੂੰ ਮੈਨੇਜ ਕਰਦਾ ਹੈ।</li>
        </ul>
      </>
    )
  },
  {
    id: 14,
    title: "DATA WAREHOUSE",
    english: (
      <>
        <div><span className="font-bold text-slate-900">Definition:</span> Unlike an operational database (TPS) designed for fast, high-volume daily transactions, a Data Warehouse is a massive, centralized, and non-volatile repository storing years of historical data aggregated from multiple disparate sources. It is specifically structured and de-normalized for complex OLAP (Online Analytical Processing) queries to assist top-level strategic forecasting.</div>
      </>
    ),
    punjabi: (
      <>
        <div className="font-medium leading-relaxed mb-2">ਡਾਟਾ ਵੇਅਰਹਾਊਸ ਇੱਕ ਬਹੁਤ ਵੱਡਾ ਗੋਦਾਮ ਹੁੰਦਾ ਹੈ ਜਿੱਥੇ ਕੰਪਨੀ ਦੇ ਪਿਛਲੇ ਕਈ ਸਾਲਾਂ ਦਾ ਇਤਿਹਾਸਕ (Historical) ਡਾਟਾ ਇਕੱਠਾ ਕਰਕੇ ਰੱਖਿਆ ਜਾਂਦਾ ਹੈ।</div>
        <div className="text-slate-700 leading-relaxed">ਰੋਜ਼ਾਨਾ ਦੇ ਡਾਟਾਬੇਸ (TPS) ਤੇਜ਼ ਕੰਮ ਲਈ ਹੁੰਦੇ ਹਨ, ਪਰ ਵੇਅਰਹਾਊਸ ਦੀ ਵਰਤੋਂ ਪੁਰਾਣੇ ਡਾਟੇ ਦੀ ਡੂੰਘਾਈ ਨਾਲ ਜਾਂਚ (Analysis) ਕਰਨ ਅਤੇ ਭਵਿੱਖ ਦੀਆਂ ਰਣਨੀਤੀਆਂ ਬਣਾਉਣ ਲਈ ਕੀਤੀ ਜਾਂਦੀ ਹੈ। ਇਹ ਡਾਟਾ ਕਦੇ ਡਿਲੀਟ (Delete) ਨਹੀਂ ਕੀਤਾ ਜਾਂਦਾ।</div>
      </>
    )
  },
  {
    id: 15,
    inExam: true,
    title: "DATA MINING",
    english: (
      <>
        <div><span className="font-bold text-slate-900">Definition:</span> The highly automated process of deploying sophisticated statistical algorithms and artificial intelligence to sift through the Data Warehouse. The goal is to discover hidden patterns, unmapped correlations, clustering, and association rules (e.g., Market Basket Analysis—identifying that people who buy diapers on Fridays also buy beer).</div>
      </>
    ),
    punjabi: (
      <>
        <div className="font-medium leading-relaxed mb-2">ਡਾਟਾ ਮਾਈਨਿੰਗ (Data Mining) ਦਾ ਮਤਲਬ ਹੈ ਵੱਡੇ ਡਾਟਾ ਵੇਅਰਹਾਊਸ ਵਿੱਚੋਂ ਛੁਪੇ ਹੋਏ ਪੈਟਰਨ (Patterns) ਅਤੇ ਨਵੇਂ ਰਿਸ਼ਤੇ ਲੱਭਣਾ।</div>
        <div className="text-slate-700 leading-relaxed">ਆਰਟੀਫੀਸ਼ੀਅਲ ਇੰਟੈਲੀਜੈਂਸ (AI) ਦੀ ਮਦਦ ਨਾਲ ਇਹ ਪਤਾ ਲਗਾਇਆ ਜਾਂਦਾ ਹੈ ਕਿ ਗਾਹਕਾਂ ਦੀ ਖਰੀਦਦਾਰੀ ਦਾ ਕੀ ਰੁਝਾਨ ਹੈ। <strong>ਉਦਾਹਰਣ:</strong> ਜੇ ਕੋਈ ਲੈਪਟਾਪ ਖਰੀਦਦਾ ਹੈ, ਤਾਂ ਉਹ ਮਾਊਸ (Mouse) ਵੀ ਖਰੀਦ ਸਕਦਾ ਹੈ—ਇਹ ਜਾਣਕਾਰੀ ਸੇਲਜ਼ ਵਧਾਉਣ ਲਈ ਵਰਤੀ ਜਾਂਦੀ ਹੈ।</div>
      </>
    )
  },
  {
    id: 16,
    title: "E-COMMERCE",
    english: (
      <>
        <div className="mb-2"><span className="font-bold text-slate-900">Definition:</span> The digital buying and selling of goods/services across global electronic networks.</div>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>B2B (Business-to-Business):</strong> Heavy volume wholesale trades (e.g., Alibaba, auto manufacturers buying steel).</li>
          <li><strong>B2C (Business-to-Consumer):</strong> Direct retail transactions to the end user (e.g., Amazon, Flipkart).</li>
          <li><strong>C2C (Consumer-to-Consumer):</strong> Peer-to-peer marketplaces (e.g., eBay, OLX) where individuals trade directly.</li>
        </ul>
      </>
    ),
    punjabi: (
      <>
        <div className="font-medium mb-2">ਈ-ਕਾਮਰਸ ਦਾ ਮਤਲਬ ਹੈ ਇੰਟਰਨੈੱਟ ਰਾਹੀਂ ਵਪਾਰ ਕਰਨਾ। ਇਸਦੇ 3 ਮੁੱਖ ਪ੍ਰਕਾਰ ਹਨ:</div>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li><strong>B2B (ਬਿਜ਼ਨਸ ਟੂ ਬਿਜ਼ਨਸ):</strong> ਜਦੋਂ ਇੱਕ ਕੰਪਨੀ ਦੂਜੀ ਕੰਪਨੀ ਨਾਲ ਵਪਾਰ ਕਰਦੀ ਹੈ (ਜਿਵੇਂ Alibaba 'ਤੇ ਥੋਕ ਸਾਮਾਨ)।</li>
          <li><strong>B2C (ਬਿਜ਼ਨਸ ਟੂ ਕੰਜ਼ਿਊਮਰ):</strong> ਜਦੋਂ ਕੰਪਨੀ ਸਿੱਧਾ ਗਾਹਕ ਨੂੰ ਸਾਮਾਨ ਵੇਚਦੀ ਹੈ (ਜਿਵੇਂ Amazon, Flipkart)।</li>
          <li><strong>C2C (ਕੰਜ਼ਿਊਮਰ ਟੂ ਕੰਜ਼ਿਊਮਰ):</strong> ਜਦੋਂ ਇੱਕ ਆਮ ਆਦਮੀ ਦੂਜੇ ਆਦਮੀ ਨੂੰ ਸਾਮਾਨ ਵੇਚਦਾ ਹੈ (ਜਿਵੇਂ OLX, eBay)।</li>
        </ul>
      </>
    )
  },
  {
    id: 17,
    title: "ETHICAL ISSUES",
    english: (
      <>
        <div className="mb-2"><span className="font-bold text-slate-900">The digital dilemmas:</span></div>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Privacy:</strong> Corporations secretly tracking user behavior, selling personal data, and data breaches.</li>
          <li><strong>Security:</strong> Protecting systems against malicious hacking, ransomware, and cyber espionage.</li>
          <li><strong>Intellectual Property:</strong> The digital replication of software, music, and art violates copyrights, leading to piracy.</li>
        </ul>
      </>
    ),
    punjabi: (
      <>
        <div className="font-medium mb-2">ਤਕਨਾਲੋਜੀ ਦੇ ਵਧਣ ਨਾਲ ਕਈ ਨੈਤਿਕ (Ethical) ਅਤੇ ਕਾਨੂੰਨੀ ਮੁੱਦੇ ਖੜ੍ਹੇ ਹੋ ਗਏ ਹਨ:</div>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li><strong>ਨਿੱਜਤਾ (Privacy):</strong> ਕੰਪਨੀਆਂ ਦੁਆਰਾ ਯੂਜ਼ਰਸ ਦਾ ਨਿੱਜੀ ਡਾਟਾ ਚੋਰੀ ਕਰਨਾ ਜਾਂ ਵੇਚਣਾ।</li>
          <li><strong>ਸੁਰੱਖਿਆ (Security):</strong> ਹੈਕਰਾਂ (Hackers) ਤੋਂ ਕੰਪਨੀ ਦੇ ਡਾਟੇ ਅਤੇ ਪੈਸੇ ਨੂੰ ਬਚਾਉਣਾ।</li>
          <li><strong>ਕਾਪੀਰਾਈਟ (Intellectual Property):</strong> ਕਿਸੇ ਦੂਜੇ ਦੇ ਸਾਫਟਵੇਅਰ, ਗੀਤ ਜਾਂ ਡਿਜ਼ਾਈਨ ਨੂੰ ਚੋਰੀ ਕਰਕੇ ਆਪਣਾ ਕਹਿਣਾ (ਪਾਇਰੇਸੀ)।</li>
        </ul>
      </>
    )
  },
  {
    id: 18,
    inExam: true,
    title: "SYSTEM ANALYST",
    english: (
      <>
        <div><span className="font-bold text-slate-900">Definition:</span> A crucial intermediary role acting as the primary bridge between non-technical business stakeholders and highly technical software developers. A system analyst conducts initial feasibility studies, gathers requirements, authors the SRS document, architectures DFDs, and supervises final testing. They require a rare blend of deep technical IT knowledge and excellent soft communication/management skills.</div>
      </>
    ),
    punjabi: (
      <>
        <div className="font-medium leading-relaxed mb-2">ਸਿਸਟਮ ਐਨਾਲਿਸਟ (System Analyst) ਇੱਕ ਅਹਿਮ ਵਿਅਕਤੀ ਹੁੰਦਾ ਹੈ ਜੋ ਕੰਪਨੀ ਦੇ ਮਾਲਕਾਂ (ਜਿਨ੍ਹਾਂ ਨੂੰ ਤਕਨੀਕੀ ਗਿਆਨ ਨਹੀਂ ਹੁੰਦਾ) ਅਤੇ ਸਾਫਟਵੇਅਰ ਡਿਵੈਲਪਰਾਂ (ਕੋਡਰਾਂ) ਵਿਚਕਾਰ ਇੱਕ ਪੁਲ (Bridge) ਦਾ ਕੰਮ ਕਰਦਾ ਹੈ।</div>
        <div className="text-slate-700 leading-relaxed">ਉਹ ਕੰਪਨੀ ਦੀਆਂ ਲੋੜਾਂ ਨੂੰ ਸਮਝਦਾ ਹੈ, ਯੋਜਨਾਵਾਂ (SRS) ਬਣਾਉਂਦਾ ਹੈ, ਅਤੇ ਫਿਰ ਕੋਡਰਾਂ ਤੋਂ ਉਸ ਅਨੁਸਾਰ ਸਾਫਟਵੇਅਰ ਤਿਆਰ ਕਰਵਾਉਂਦਾ ਹੈ। ਉਸਨੂੰ ਤਕਨੀਕੀ ਗਿਆਨ ਦੇ ਨਾਲ-ਨਾਲ ਲੋਕਾਂ ਨਾਲ ਗੱਲਬਾਤ ਕਰਨ ਦਾ ਚੰਗਾ ਹੁਨਰ ਵੀ ਆਉਣਾ ਚਾਹੀਦਾ ਹੈ।</div>
      </>
    )
  }
];

export default function MISNotesPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#f0fdf4] text-slate-900 font-sans selection:bg-emerald-200">
      {/* Top Navigation Bar */}
      <div className="print:hidden fixed top-0 left-0 right-0 p-4 md:p-6 flex justify-between items-center z-50 pointer-events-none">
        <Link 
          href="/" 
          className="pointer-events-auto flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-sm border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Dashboard
        </Link>
        <button 
          onClick={handlePrint}
          className="pointer-events-auto flex items-center gap-2 bg-[#059669] text-white px-5 py-2.5 rounded-full shadow-md hover:bg-[#047857] transition-colors text-sm font-bold tracking-wide"
        >
          <Printer className="w-4 h-4" /> Print Notes
        </button>
      </div>

      {/* Main Document */}
      <main className="max-w-5xl mx-auto bg-white min-h-screen shadow-[0_0_40px_rgba(0,0,0,0.05)] print:shadow-none print:w-full print:max-w-none px-6 py-20 md:px-12 md:py-24 mt-0 md:mt-8 print:mt-0 print:p-0">
        
        {/* Document Header */}
        <div className="text-center mb-12 print:mb-8">
          <div className="bg-[#dcfce7] text-[#166534] text-xs font-black uppercase tracking-[0.2em] py-2 px-6 rounded-full inline-block mb-8 print:border print:border-emerald-300">
            ANTIGRAVITY • BILINGUAL EDITION
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#0f172a] tracking-tight mb-4 leading-tight">
            MANAGEMENT INFORMATION SYSTEM
          </h1>
          <h2 className="text-xl md:text-2xl text-[#10b981] font-medium italic mb-8">
            Complete Master Notes (English + ਪੰਜਾਬੀ)
          </h2>
          <div className="flex items-center justify-center gap-6 text-xs font-black text-slate-400 uppercase tracking-widest">
            <span>Code: BCA-DSC-4</span>
            <span>•</span>
            <span>Max Marks: 100</span>
          </div>
        </div>

        <hr className="border-t-2 border-slate-100 mb-12 print:mb-8" />

        {/* Topics List */}
        <div className="space-y-12">
          {topicsData.map((topic) => (
            <div key={topic.id} className="print:break-inside-avoid">
              
              {/* Topic Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className="bg-[#0f172a] text-white w-10 h-10 rounded-lg flex items-center justify-center font-black text-xl shadow-sm shrink-0">
                  {topic.id}
                </div>
                <div className="flex-1">
                  {/* @ts-ignore */}
                  {topic.inExam && (
                    <div className="inline-flex items-center gap-1.5 bg-emerald-500 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2 print:border print:border-emerald-500 print:text-emerald-700 print:bg-emerald-50 shadow-sm mt-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Appeared in Exam
                    </div>
                  )}
                  <h3 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight uppercase">
                    {topic.title}
                  </h3>
                </div>
              </div>
              
              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 border border-slate-200 rounded-2xl p-6 bg-white shadow-sm print:shadow-none print:border-slate-300">
                
                {/* English Section */}
                <div>
                  <h4 className="text-[#059669] font-bold mb-3 flex items-center gap-2 border-b border-slate-100 pb-2 text-sm uppercase tracking-wider">
                    English Notes
                  </h4>
                  <div className="text-sm text-slate-700 leading-relaxed space-y-2">
                    {topic.english}
                  </div>
                </div>
                
                {/* Punjabi Section */}
                <div className="lg:border-l border-slate-100 lg:pl-6 pt-4 lg:pt-0 border-t lg:border-t-0">
                  <h4 className="text-[#2563eb] font-bold mb-3 flex items-center gap-2 border-b border-slate-100 pb-2 text-sm uppercase tracking-wider">
                    ਪੰਜਾਬੀ (Gurmukhi)
                  </h4>
                  <div className="text-sm text-slate-700 leading-relaxed space-y-2 font-medium">
                    {topic.punjabi}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
