"use client";
import { Printer, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const topicsData = [
  {
    id: 1,
    inExam: false,
    title: "VISION OF DIGITAL INDIA",
    english: (
      <>
        <div className="mb-2"><span className="font-bold text-slate-900">Definition:</span> The Digital India programme, launched in 2015, envisions transforming India into a digitally empowered society and knowledge economy. It aims to provide seamless governance, digital identity, and internet access to all citizens.</div>
        <div className="mb-3"><span className="font-bold text-slate-900">Pillars:</span> It rests on three core pillars: 1. Digital Infrastructure as a Core Utility (High-speed internet, Aadhaar), 2. Governance & Services on Demand (Real-time online services), and 3. Digital Empowerment of Citizens (Digital literacy).</div>
      </>
    ),
    punjabi: (
      <>
        <div className="mb-2 font-medium leading-relaxed">ਡਿਜੀਟਲ ਇੰਡੀਆ (Digital India) ਪ੍ਰੋਗਰਾਮ 2015 ਵਿੱਚ ਸ਼ੁਰੂ ਕੀਤਾ ਗਿਆ ਸੀ। ਇਸਦਾ ਮੁੱਖ ਟੀਚਾ ਭਾਰਤ ਨੂੰ ਇੱਕ ਡਿਜੀਟਲ ਤੌਰ 'ਤੇ ਤਾਕਤਵਰ ਸਮਾਜ ਬਣਾਉਣਾ ਹੈ।</div>
        <div className="mb-3 leading-relaxed">ਇਸਦੇ ਤਿੰਨ ਮੁੱਖ ਥੰਮ (Pillars) ਹਨ: 1. ਡਿਜੀਟਲ ਬੁਨਿਆਦੀ ਢਾਂਚਾ (ਹਾਈ-ਸਪੀਡ ਇੰਟਰਨੈੱਟ, ਆਧਾਰ), 2. ਆਨਲਾਈਨ ਸਰਕਾਰੀ ਸੇਵਾਵਾਂ (e-Governance), ਅਤੇ 3. ਨਾਗਰਿਕਾਂ ਦਾ ਡਿਜੀਟਲ ਸਸ਼ਕਤੀਕਰਨ (Digital Literacy)।</div>
      </>
    )
  },
  {
    id: 2,
    title: "DIGILOCKER & BHIM",
    inExam: false,
    english: (
      <>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li><strong>DigiLocker:</strong> A digital wallet for storing authentic government-issued documents (Aadhaar, Marksheets). Documents are legally valid under the IT Act. It promotes a paperless economy and reduces the risk of document loss.</li>
          <li><strong>BHIM:</strong> Bharat Interface for Money (BHIM) is a UPI-based app developed by NPCI. It allows instant, 24/7 money transfers using a mobile number or Virtual Payment Address (VPA), enabling financial inclusion.</li>
        </ul>
      </>
    ),
    punjabi: (
      <>
        <ul className="list-disc pl-5 space-y-1 mb-3 text-slate-700">
          <li><strong>DigiLocker:</strong> ਇਹ ਇੱਕ ਡਿਜੀਟਲ ਵਾਲਿਟ (Digital Wallet) ਹੈ ਜਿੱਥੇ ਅਸੀਂ ਆਪਣੇ ਜ਼ਰੂਰੀ ਦਸਤਾਵੇਜ਼ (ਜਿਵੇਂ ਆਧਾਰ ਕਾਰਡ, ਮਾਰਕਸ਼ੀਟ) ਸੁਰੱਖਿਅਤ ਰੱਖ ਸਕਦੇ ਹਾਂ। ਇਹ IT ਐਕਟ ਦੇ ਤਹਿਤ ਕਾਨੂੰਨੀ ਤੌਰ 'ਤੇ ਜਾਇਜ਼ ਹਨ।</li>
          <li><strong>BHIM:</strong> ਇਹ ਪੈਸੇ ਭੇਜਣ ਵਾਲੀ ਇੱਕ UPI ਐਪ ਹੈ ਜਿਸ ਰਾਹੀਂ ਅਸੀਂ 24/7 ਕਿਸੇ ਨੂੰ ਵੀ ਮੋਬਾਈਲ ਨੰਬਰ ਜਾਂ VPA ਰਾਹੀਂ ਤੁਰੰਤ ਪੈਸੇ ਭੇਜ ਸਕਦੇ ਹਾਂ।</li>
        </ul>
      </>
    )
  },
  {
    id: 3,
    inExam: false,
    title: "E-KRANTI & E-PATHSHALA",
    english: (
      <>
        <div className="mb-2"><span className="font-bold text-slate-900">e-Kranti:</span> Focuses on the electronic delivery of services to citizens, such as e-Education, e-Healthcare, and e-Courts, ensuring transparency and reducing corruption.</div>
        <div><span className="font-bold text-slate-900">e-Pathshala:</span> A free multilingual platform providing NCERT e-textbooks (Class 1-12) and educational resources for students, teachers, and parents.</div>
      </>
    ),
    punjabi: (
      <>
        <div className="mb-2 leading-relaxed"><strong>e-Kranti:</strong> ਇਸਦਾ ਮਕਸਦ ਸਰਕਾਰੀ ਸੇਵਾਵਾਂ ਨੂੰ ਇਲੈਕਟ੍ਰਾਨਿਕ ਤਰੀਕੇ ਨਾਲ ਲੋਕਾਂ ਤੱਕ ਪਹੁੰਚਾਉਣਾ ਹੈ (ਜਿਵੇਂ ਆਨਲਾਈਨ ਸਿੱਖਿਆ, ਸਿਹਤ ਸੇਵਾਵਾਂ)। ਇਹ ਭ੍ਰਿਸ਼ਟਾਚਾਰ ਨੂੰ ਘਟਾਉਂਦਾ ਹੈ।</div>
        <div className="font-medium mb-1"><strong>e-Pathshala:</strong> ਇਹ ਵਿਦਿਆਰਥੀਆਂ ਅਤੇ ਅਧਿਆਪਕਾਂ ਲਈ ਇੱਕ ਮੁਫਤ ਪਲੇਟਫਾਰਮ ਹੈ ਜਿੱਥੇ NCERT ਦੀਆਂ ਕਿਤਾਬਾਂ ਵੱਖ-ਵੱਖ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਆਨਲਾਈਨ ਉਪਲਬਧ ਹਨ।</div>
      </>
    )
  },
  {
    id: 4,
    title: "CYBERSECURITY THREATS",
    inExam: false,
    english: (
      <>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Phishing:</strong> Fraudulent emails/messages pretending to be from banks to steal login credentials.</li>
          <li><strong>Malware:</strong> Malicious software, including Viruses (self-replicating), Worms, and Trojans (disguised as legitimate apps).</li>
          <li><strong>Ransomware:</strong> Encrypts user data and demands payment for decryption (e.g., WannaCry).</li>
          <li><strong>DoS (Denial of Service):</strong> Flooding a network/server with traffic to crash it and make it unavailable to legitimate users.</li>
        </ul>
      </>
    ),
    punjabi: (
      <>
        <div className="font-medium mb-2">ਸਾਈਬਰ ਸੁਰੱਖਿਆ ਲਈ ਮੁੱਖ ਖਤਰੇ:</div>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li><strong>Phishing (ਫਿਸ਼ਿੰਗ):</strong> ਬੈਂਕ ਦੇ ਨਾਮ 'ਤੇ ਨਕਲੀ ਈਮੇਲ ਜਾਂ ਮੈਸੇਜ ਭੇਜ ਕੇ ਪਾਸਵਰਡ ਚੋਰੀ ਕਰਨਾ।</li>
          <li><strong>Malware (ਮਾਲਵੇਅਰ):</strong> ਖਤਰਨਾਕ ਸਾਫਟਵੇਅਰ ਜਿਵੇਂ ਵਾਇਰਸ (Virus) ਜਾਂ ਟਰੋਜਨ (Trojan) ਜੋ ਕੰਪਿਊਟਰ ਨੂੰ ਨੁਕਸਾਨ ਪਹੁੰਚਾਉਂਦੇ ਹਨ।</li>
          <li><strong>Ransomware (ਰੈਨਸਮਵੇਅਰ):</strong> ਯੂਜ਼ਰ ਦਾ ਡਾਟਾ ਲੌਕ (Lock) ਕਰ ਦੇਣਾ ਅਤੇ ਉਸਨੂੰ ਖੋਲ੍ਹਣ ਲਈ ਪੈਸੇ (ਫਿਰੌਤੀ) ਮੰਗਣਾ।</li>
          <li><strong>DoS Attack:</strong> ਕਿਸੇ ਵੈੱਬਸਾਈਟ 'ਤੇ ਇੰਨਾ ਜ਼ਿਆਦਾ ਟ੍ਰੈਫਿਕ ਭੇਜਣਾ ਕਿ ਉਹ ਕਰੈਸ਼ (Crash) ਹੋ ਜਾਵੇ।</li>
        </ul>
      </>
    )
  },
  {
    id: 5,
    inExam: false,
    title: "GOVERNMENT SECURITY INITIATIVES",
    english: (
      <>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>CERT-In:</strong> (Indian Computer Emergency Response Team) The national agency handling cyber incidents, issuing security alerts, and conducting drills.</li>
          <li><strong>Cyber Swachhta Kendra:</strong> A botnet cleaning and malware analysis center providing free malware removal tools to citizens.</li>
          <li><strong>I4C:</strong> (Indian Cyber Crime Coordination Centre) Focuses on tracking online fraud, especially crimes against women and children.</li>
        </ul>
      </>
    ),
    punjabi: (
      <>
        <div className="font-medium mb-2">ਸਰਕਾਰ ਵੱਲੋਂ ਸਾਈਬਰ ਸੁਰੱਖਿਆ ਲਈ ਕਦਮ:</div>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li><strong>CERT-In:</strong> ਇਹ ਭਾਰਤ ਦੀ ਮੁੱਖ ਏਜੰਸੀ ਹੈ ਜੋ ਸਾਈਬਰ ਹਮਲਿਆਂ ਨਾਲ ਨਜਿੱਠਦੀ ਹੈ ਅਤੇ ਸੁਰੱਖਿਆ ਅਲਰਟ ਜਾਰੀ ਕਰਦੀ ਹੈ।</li>
          <li><strong>Cyber Swachhta Kendra:</strong> ਇਹ ਇੱਕ ਕੇਂਦਰ ਹੈ ਜੋ ਲੋਕਾਂ ਨੂੰ ਮੁਫਤ ਵਿੱਚ ਵਾਇਰਸ (Malware) ਕੱਢਣ ਵਾਲੇ ਟੂਲ ਦਿੰਦਾ ਹੈ।</li>
          <li><strong>I4C:</strong> ਇਹ ਏਜੰਸੀ ਆਨਲਾਈਨ ਧੋਖਾਧੜੀ ਅਤੇ ਖਾਸ ਕਰਕੇ ਔਰਤਾਂ/ਬੱਚਿਆਂ ਖਿਲਾਫ ਹੁੰਦੇ ਸਾਈਬਰ ਕ੍ਰਾਈਮ 'ਤੇ ਨਜ਼ਰ ਰੱਖਦੀ ਹੈ।</li>
        </ul>
      </>
    )
  },
  {
    id: 6,
    inExam: false,
    title: "BLOCKCHAIN TECHNOLOGY",
    english: (
      <>
        <div className="mb-2"><span className="font-bold text-slate-900">Definition:</span> A decentralized, transparent digital ledger where data is stored in cryptographic "blocks" chained together. Once data is added, it is immutable (cannot be changed).</div>
        <div className="mb-2"><span className="font-bold text-slate-900">Features:</span> Decentralization (no central authority/bank), Immutability (secure data), and Transparency (visible to all network participants).</div>
        <div><span className="font-bold text-slate-900">Consensus:</span> Uses mechanisms like Proof of Work (PoW) or Proof of Stake (PoS) to validate transactions.</div>
      </>
    ),
    punjabi: (
      <>
        <div className="mb-2 font-medium leading-relaxed"><strong>ਬਲਾਕਚੈਨ (Blockchain):</strong> ਇਹ ਇੱਕ ਡਿਜੀਟਲ ਖਾਤਾ (Ledger) ਹੈ ਜਿਸ ਵਿੱਚ ਡਾਟਾ "ਬਲਾਕਾਂ" (Blocks) ਦੇ ਰੂਪ ਵਿੱਚ ਸੇਵ ਹੁੰਦਾ ਹੈ ਅਤੇ ਇਹ ਬਲਾਕ ਆਪਸ ਵਿੱਚ ਜੁੜੇ ਹੁੰਦੇ ਹਨ। ਇਸ ਵਿੱਚ ਸੇਵ ਕੀਤਾ ਡਾਟਾ ਕਦੇ ਬਦਲਿਆ (Immutable) ਨਹੀਂ ਜਾ ਸਕਦਾ।</div>
        <div className="mb-1 font-medium">ਇਸਦੀਆਂ ਮੁੱਖ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਹਨ:</div>
        <ul className="list-disc pl-5 space-y-1 text-slate-700">
          <li><strong>Decentralization:</strong> ਇਸਦਾ ਕੋਈ ਇੱਕ ਮਾਲਕ ਜਾਂ ਬੈਂਕ ਨਹੀਂ ਹੁੰਦਾ।</li>
          <li><strong>Immutability:</strong> ਡਾਟਾ ਨੂੰ ਹੈਕ ਕਰਕੇ ਬਦਲਿਆ ਨਹੀਂ ਜਾ ਸਕਦਾ।</li>
          <li><strong>Transparency:</strong> ਸਾਰੇ ਲੈਣ-ਦੇਣ ਪਾਰਦਰਸ਼ੀ ਹੁੰਦੇ ਹਨ।</li>
        </ul>
      </>
    )
  },
  {
    id: 7,
    inExam: false,
    title: "ETHICS & NETIQUETTES",
    english: (
      <>
        <div className="mb-2"><span className="font-bold text-slate-900">Netiquettes:</span> Good manners for the digital world. Rules include: avoiding "ALL CAPS" (shouting), verifying facts before sharing to stop misinformation, respecting others' privacy, and not spamming.</div>
        <div className="mb-2"><span className="font-bold text-slate-900">IPR (Intellectual Property Rights):</span> Legal rights protecting creators against digital piracy and copyright infringement. Essential for safeguarding original digital content.</div>
      </>
    ),
    punjabi: (
      <>
        <div className="font-medium mb-2 leading-relaxed"><strong>Netiquettes (ਨੈਟੀਕੇਟਸ):</strong> ਇੰਟਰਨੈੱਟ ਦੀ ਵਰਤੋਂ ਕਰਨ ਦੇ ਚੰਗੇ ਸੰਸਕਾਰ। ਜਿਵੇਂ: ਵੱਡੇ ਅੱਖਰਾਂ (ALL CAPS) ਵਿੱਚ ਨਾ ਲਿਖਣਾ (ਕਿਉਂਕਿ ਇਸਨੂੰ ਚੀਕਣਾ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ), ਮੈਸੇਜ ਅੱਗੇ ਭੇਜਣ ਤੋਂ ਪਹਿਲਾਂ ਸੱਚਾਈ ਚੈੱਕ ਕਰਨਾ, ਅਤੇ ਦੂਜਿਆਂ ਦੀ ਪ੍ਰਾਈਵੇਸੀ ਦਾ ਸਤਿਕਾਰ ਕਰਨਾ।</div>
        <div className="text-slate-700 leading-relaxed"><strong>IPR (ਬੌਧਿਕ ਸੰਪਤੀ ਅਧਿਕਾਰ):</strong> ਇਹ ਕਾਨੂੰਨੀ ਹੱਕ ਹਨ ਜੋ ਕਿਸੇ ਦੀ ਅਸਲੀ ਮਿਹਨਤ (ਜਿਵੇਂ ਕੋਈ ਸਾਫਟਵੇਅਰ ਜਾਂ ਗੀਤ) ਨੂੰ ਇੰਟਰਨੈੱਟ 'ਤੇ ਚੋਰੀ ਹੋਣ (Piracy) ਤੋਂ ਬਚਾਉਂਦੇ ਹਨ।</div>
      </>
    )
  },
  {
    id: 8,
    title: "SECURITY VS PRIVACY & VPN",
    english: (
      <>
        <div className="mb-2"><span className="font-bold text-slate-900">Security vs Privacy:</span> Security is protection from external threats (hackers, malware) preventing unauthorized access. Privacy is the individual's right to control how their personal data is collected, used, and shared.</div>
        <div><span className="font-bold text-slate-900">VPN (Virtual Private Network):</span> A tool that encrypts the user's internet connection and hides their IP address, ensuring privacy and secure data transfer, especially on public Wi-Fi networks.</div>
      </>
    ),
    punjabi: (
      <>
        <div className="font-medium leading-relaxed mb-2"><strong>Security vs Privacy:</strong> ਸੁਰੱਖਿਆ (Security) ਦਾ ਮਤਲਬ ਹੈ ਆਪਣੇ ਡਾਟੇ ਨੂੰ ਹੈਕਰਾਂ ਅਤੇ ਵਾਇਰਸਾਂ ਤੋਂ ਬਚਾਉਣਾ। ਪ੍ਰਾਈਵੇਸੀ (Privacy) ਦਾ ਮਤਲਬ ਹੈ ਕਿ ਸਾਡਾ ਨਿੱਜੀ ਡਾਟਾ ਸਾਡੀ ਮਰਜ਼ੀ ਤੋਂ ਬਿਨਾਂ ਕਿਸੇ ਹੋਰ ਨਾਲ ਸਾਂਝਾ ਨਾ ਕੀਤਾ ਜਾਵੇ।</div>
        <div className="text-slate-700 leading-relaxed"><strong>VPN:</strong> ਇਹ ਇੰਟਰਨੈੱਟ 'ਤੇ ਇੱਕ ਸੁਰੱਖਿਅਤ ਸੁਰੰਗ (Tunnel) ਬਣਾਉਂਦਾ ਹੈ ਜੋ ਸਾਡੇ ਡਾਟੇ ਨੂੰ ਲੁਕਾਉਂਦਾ (Encrypt) ਹੈ, ਤਾਂ ਜੋ ਪਬਲਿਕ ਵਾਈ-ਫਾਈ ਵਰਤਣ ਵੇਲੇ ਕੋਈ ਸਾਡੀ ਜਾਣਕਾਰੀ ਚੋਰੀ ਨਾ ਕਰ ਸਕੇ।</div>
      </>
    )
  }
];

export default function DigitalEmpowermentNotesPage() {
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
            DIGITAL EMPOWERMENT
          </h1>
          <h2 className="text-xl md:text-2xl text-[#10b981] font-medium italic mb-8">
            Complete Master Notes (English + ਪੰਜਾਬੀ)
          </h2>
          <div className="flex items-center justify-center gap-6 text-xs font-black text-slate-400 uppercase tracking-widest">
            <span>Code: CSA-VAC-103/203/303/403</span>
            <span>•</span>
            <span>Max Marks: 45</span>
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
