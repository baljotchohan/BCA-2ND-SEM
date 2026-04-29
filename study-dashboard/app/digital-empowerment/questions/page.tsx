"use client";
import { Printer, ArrowLeft, AlertTriangle, BookOpen, Flame, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const questionsData = [
  // ----------- SECTION A -----------
  {
    id: "Q1",
    section: "SECTION A",
    inExam: false,
    question: "Discuss the vision and 9 pillars of Digital India. How does it empower citizens?",
    english: (
      <>
        <div className="mb-3"><span className="font-bold text-slate-900">Digital India Vision:</span> Launched in 2015, the vision is to transform India into a digitally empowered society and knowledge economy. It focuses on three core components: providing digital infrastructure as a utility to every citizen, governance and services on demand, and digital empowerment of citizens.</div>
        <div className="mb-2 font-bold text-slate-900">The 9 Pillars:</div>
        <ul className="list-decimal pl-5 space-y-3 mb-4 text-slate-700">
          <li><strong>Broadband Highways:</strong> High-speed internet across rural and urban areas.</li>
          <li><strong>Universal Access to Mobile Connectivity:</strong> Penetration to the remotest villages.</li>
          <li><strong>Public Internet Access Programme:</strong> Common Service Centres (CSCs) and post offices as multi-service centres.</li>
          <li><strong>e-Governance:</strong> Reforming government through technology (online databases, IT to simplify processes).</li>
          <li><strong>e-Kranti:</strong> Electronic delivery of services (e-Education, e-Healthcare, e-Courts).</li>
          <li><strong>Information for All:</strong> Open data platforms and proactive online hosting of information.</li>
          <li><strong>Electronics Manufacturing:</strong> Target NET ZERO Imports by focusing on domestic production.</li>
          <li><strong>IT for Jobs:</strong> Training youth in smaller towns for IT-sector jobs.</li>
          <li><strong>Early Harvest Programmes:</strong> Short-term projects like biometric attendance, public Wi-Fi, and secure email.</li>
        </ul>
        <div className="bg-emerald-50 text-emerald-800 p-3 rounded-lg text-sm border border-emerald-100 font-medium">
          <span className="font-bold">Citizen Empowerment:</span> It bridges the digital divide, provides universal digital literacy, ensures availability of digital resources in Indian languages, and provides participatory governance without physical boundaries.
        </div>
      </>
    ),
    punjabi: (
      <>
        <div className="mb-3 leading-relaxed"><span className="font-bold">ਡਿਜੀਟਲ ਇੰਡੀਆ (Digital India):</span> ਇਹ 2015 ਵਿੱਚ ਸ਼ੁਰੂ ਕੀਤਾ ਗਿਆ ਇੱਕ ਪ੍ਰੋਗਰਾਮ ਹੈ ਜਿਸਦਾ ਮਕਸਦ ਭਾਰਤ ਨੂੰ ਡਿਜੀਟਲ ਤੌਰ 'ਤੇ ਤਾਕਤਵਰ ਬਣਾਉਣਾ ਹੈ। ਇਸਦੇ 3 ਮੁੱਖ ਹਿੱਸੇ ਹਨ: ਸਾਰਿਆਂ ਲਈ ਇੰਟਰਨੈੱਟ, ਆਨਲਾਈਨ ਸਰਕਾਰੀ ਸੇਵਾਵਾਂ, ਅਤੇ ਡਿਜੀਟਲ ਸਾਖਰਤਾ (ਪੜ੍ਹਾਈ)।</div>
        <div className="mb-2 font-bold">9 ਮੁੱਖ ਥੰਮ (Pillars):</div>
        <ol className="list-decimal pl-5 space-y-3 text-slate-700">
          <li><strong>Broadband Highways:</strong> ਪਿੰਡਾਂ ਅਤੇ ਸ਼ਹਿਰਾਂ ਵਿੱਚ ਤੇਜ਼ ਇੰਟਰਨੈੱਟ।</li>
          <li><strong>Mobile Connectivity:</strong> ਹਰ ਪਿੰਡ ਤੱਕ ਮੋਬਾਈਲ ਨੈੱਟਵਰਕ ਪਹੁੰਚਾਉਣਾ।</li>
          <li><strong>Public Internet:</strong> ਪਿੰਡਾਂ ਵਿੱਚ ਇੰਟਰਨੈੱਟ ਸਹੂਲਤ ਕੇਂਦਰ (CSCs) ਖੋਲ੍ਹਣੇ।</li>
          <li><strong>e-Governance:</strong> ਤਕਨੀਕ ਰਾਹੀਂ ਸਰਕਾਰੀ ਕੰਮਾਂ ਨੂੰ ਸੌਖਾ ਬਣਾਉਣਾ।</li>
          <li><strong>e-Kranti:</strong> ਆਨਲਾਈਨ ਸਿੱਖਿਆ, ਸਿਹਤ ਅਤੇ ਅਦਾਲਤਾਂ।</li>
          <li><strong>Information for All:</strong> ਸਰਕਾਰੀ ਜਾਣਕਾਰੀ ਆਨਲਾਈਨ ਉਪਲਬਧ ਕਰਵਾਉਣਾ।</li>
          <li><strong>Electronics Manufacturing:</strong> ਦੇਸ਼ ਦੇ ਅੰਦਰ ਇਲੈਕਟ੍ਰਾਨਿਕ ਸਾਮਾਨ ਬਣਾਉਣਾ (ਤਾਂ ਜੋ ਬਾਹਰੋਂ ਨਾ ਮੰਗਵਾਉਣਾ ਪਵੇ)।</li>
          <li><strong>IT for Jobs:</strong> ਨੌਜਵਾਨਾਂ ਨੂੰ IT ਨੌਕਰੀਆਂ ਲਈ ਸਿਖਲਾਈ ਦੇਣਾ।</li>
          <li><strong>Early Harvest:</strong> ਛੋਟੇ ਪ੍ਰੋਜੈਕਟ ਜਿਵੇਂ ਬਾਇਓਮੈਟ੍ਰਿਕ ਹਾਜ਼ਰੀ ਅਤੇ ਪਬਲਿਕ ਵਾਈ-ਫਾਈ।</li>
        </ol>
      </>
    )
  },
  {
    id: "Q2",
    section: "SECTION A",
    inExam: false,
    question: "Explain the purpose and significance of DigiLocker and BHIM in e-governance.",
    english: (
      <>
        <div className="mb-2 font-bold text-slate-900">1. DigiLocker:</div>
        <div className="mb-3 text-slate-700">DigiLocker is a secure cloud-based platform for storage, sharing, and verification of documents and certificates. It provides an account with dedicated cloud storage space linked to the user's Aadhaar.</div>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
          <li><strong>Purpose:</strong> To eliminate the use of physical documents and enable paperless governance.</li>
          <li><strong>Significance:</strong> Documents issued directly to DigiLocker are considered legally on par with original physical documents under the IT Act. It prevents forgery, reduces administrative overhead, and ensures citizens never "lose" their vital records (marksheet, driving license).</li>
        </ul>
        <div className="mb-2 font-bold text-slate-900">2. BHIM (Bharat Interface for Money):</div>
        <div className="mb-3 text-slate-700">An NPCI-developed payment app that lets users make simple, easy, and quick payment transactions using Unified Payments Interface (UPI).</div>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li><strong>Purpose:</strong> To facilitate direct bank-to-bank electronic transfers instantly, 24/7.</li>
          <li><strong>Significance:</strong> It empowers the unbanked and rural populations by providing financial inclusion. Users only need a mobile number or a Virtual Payment Address (VPA) to transact, removing the need for cash and promoting a digital economy.</li>
        </ul>
      </>
    ),
    punjabi: (
      <>
        <div className="mb-2 font-bold">1. ਡਿਜੀਲਾਕਰ (DigiLocker):</div>
        <ul className="list-disc pl-5 space-y-3 mb-4 text-slate-700">
           <li>ਇਹ ਇੱਕ ਡਿਜੀਟਲ ਵਾਲਿਟ (ਬਟੂਆ) ਹੈ ਜੋ ਆਧਾਰ ਕਾਰਡ ਨਾਲ ਜੁੜਿਆ ਹੁੰਦਾ ਹੈ।</li>
           <li>ਇਸਦਾ ਮਕਸਦ ਕਾਗਜ਼ੀ ਦਸਤਾਵੇਜ਼ਾਂ ਦੀ ਵਰਤੋਂ ਨੂੰ ਖਤਮ ਕਰਨਾ ਹੈ।</li>
           <li>ਇਸ ਵਿੱਚ ਰੱਖੇ ਗਏ ਡਾਕੂਮੈਂਟ (ਜਿਵੇਂ ਲਾਇਸੈਂਸ, ਮਾਰਕਸ਼ੀਟ) ਕਾਨੂੰਨੀ ਤੌਰ 'ਤੇ ਅਸਲੀ ਮੰਨੇ ਜਾਂਦੇ ਹਨ। ਇਸ ਨਾਲ ਕਾਗਜ਼ ਗੁੰਮ ਹੋਣ ਦਾ ਡਰ ਨਹੀਂ ਰਹਿੰਦਾ ਅਤੇ ਨਕਲੀ ਕਾਗਜ਼ ਬਣਾਉਣ 'ਤੇ ਰੋਕ ਲੱਗਦੀ ਹੈ।</li>
        </ul>
        <div className="mb-2 font-bold">2. ਭੀਮ (BHIM):</div>
        <ul className="list-disc pl-5 space-y-3 text-slate-700">
           <li>ਇਹ UPI 'ਤੇ ਆਧਾਰਿਤ ਇੱਕ ਐਪ ਹੈ ਜੋ ਪੈਸੇ ਭੇਜਣ ਅਤੇ ਮੰਗਵਾਉਣ ਲਈ ਵਰਤੀ ਜਾਂਦੀ ਹੈ।</li>
           <li>ਇਸਦਾ ਮਕਸਦ 24 ਘੰਟੇ, ਤੁਰੰਤ ਬੈਂਕ ਤੋਂ ਬੈਂਕ ਪੈਸੇ ਟ੍ਰਾਂਸਫਰ ਕਰਨਾ ਹੈ।</li>
           <li>ਇਸ ਨਾਲ ਕੈਸ਼ (ਨਕਦ) ਦੀ ਲੋੜ ਖਤਮ ਹੋ ਜਾਂਦੀ ਹੈ। ਪੈਸੇ ਭੇਜਣ ਲਈ ਸਿਰਫ ਮੋਬਾਈਲ ਨੰਬਰ ਜਾਂ VPA ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ।</li>
        </ul>
      </>
    )
  },
  
  // ----------- SECTION B -----------
  {
    id: "Q3",
    section: "SECTION B",
    inExam: false,
    question: "Define Cybersecurity. Discuss four major cyber threats with examples.",
    english: (
      <>
        <div className="mb-3"><span className="font-bold text-slate-900">Definition:</span> Cybersecurity is the practice of protecting systems, networks, devices, and programs from digital attacks. These cyberattacks usually aim to access, change, or destroy sensitive information, extort money from users, or interrupt normal business processes.</div>
        <div className="mb-2 font-bold text-slate-900">Major Cyber Threats:</div>
        <ul className="list-decimal pl-5 space-y-3 mb-4 text-slate-700">
          <li><strong>Phishing:</strong> The fraudulent practice of sending emails or messages purporting to be from reputable companies to induce individuals to reveal personal info (passwords, credit cards).<br/><span className="italic text-sm">Example: An email claiming "Your HDFC bank account is locked. Click here to verify."</span></li>
          <li><strong>Malware:</strong> "Malicious Software" designed to gain unauthorized access or cause damage. Includes Viruses (attach to files and self-replicate), Worms (spread across networks independently), and Trojans (disguise as legit software).</li>
          <li><strong>Ransomware:</strong> A type of malware that permanently blocks access to the victim's data by encrypting it unless a ransom (usually in Bitcoin) is paid.<br/><span className="italic text-sm">Example: The 2017 WannaCry attack that crippled global hospitals and businesses.</span></li>
          <li><strong>DoS/DDoS (Denial of Service):</strong> An attack meant to shut down a machine or network, making it inaccessible to its intended users by flooding the target with superficial requests so it crashes.<br/><span className="italic text-sm">Example: Flooding a university website during results declaration so legitimate students cannot access it.</span></li>
        </ul>
      </>
    ),
    punjabi: (
       <>
         <div className="mb-3 leading-relaxed"><span className="font-bold">ਸਾਈਬਰ ਸੁਰੱਖਿਆ (Cybersecurity):</span> ਕੰਪਿਊਟਰ, ਨੈੱਟਵਰਕ ਅਤੇ ਡਾਟੇ ਨੂੰ ਹੈਕਰਾਂ (Hackers) ਅਤੇ ਡਿਜੀਟਲ ਹਮਲਿਆਂ ਤੋਂ ਬਚਾਉਣਾ ਸਾਈਬਰ ਸੁਰੱਖਿਆ ਅਖਵਾਉਂਦਾ ਹੈ।</div>
         <div className="mb-2 font-bold">4 ਮੁੱਖ ਖਤਰੇ (Threats):</div>
         <ul className="list-disc pl-5 space-y-3 text-slate-700">
           <li><strong>Phishing (ਫਿਸ਼ਿੰਗ):</strong> ਬੈਂਕ ਜਾਂ ਕਿਸੇ ਵੱਡੀ ਕੰਪਨੀ ਦੇ ਨਾਮ 'ਤੇ ਨਕਲੀ ਈਮੇਲ ਭੇਜ ਕੇ ਲੋਕਾਂ ਤੋਂ ਪਾਸਵਰਡ ਜਾਂ ATM ਪਿੰਨ ਚੋਰੀ ਕਰਨਾ।</li>
           <li><strong>Malware (ਮਾਲਵੇਅਰ):</strong> ਖਤਰਨਾਕ ਸਾਫਟਵੇਅਰ (ਵਾਇਰਸ, ਟਰੋਜਨ) ਜੋ ਕੰਪਿਊਟਰ ਵਿੱਚ ਵੜ ਕੇ ਫਾਈਲਾਂ ਨੂੰ ਖਰਾਬ ਕਰਦੇ ਹਨ ਜਾਂ ਡਾਟਾ ਚੋਰੀ ਕਰਦੇ ਹਨ।</li>
           <li><strong>Ransomware (ਰੈਨਸਮਵੇਅਰ):</strong> ਹੈਕਰ ਯੂਜ਼ਰ ਦਾ ਸਾਰਾ ਡਾਟਾ ਲੌਕ (Lock/Encrypt) ਕਰ ਦਿੰਦੇ ਹਨ ਅਤੇ ਉਸਨੂੰ ਖੋਲ੍ਹਣ ਲਈ ਪੈਸੇ (ਫਿਰੌਤੀ) ਮੰਗਦੇ ਹਨ। ਜਿਵੇਂ 'WannaCry' ਵਾਇਰਸ।</li>
           <li><strong>DoS Attack:</strong> ਕਿਸੇ ਵੈੱਬਸਾਈਟ 'ਤੇ ਇੱਕੋ ਸਮੇਂ ਇੰਨਾ ਜ਼ਿਆਦਾ ਨਕਲੀ ਟ੍ਰੈਫਿਕ (Traffic) ਭੇਜਣਾ ਕਿ ਵੈੱਬਸਾਈਟ ਹੈਂਗ (Crash) ਹੋ ਜਾਵੇ ਅਤੇ ਅਸਲੀ ਯੂਜ਼ਰ ਉਸਨੂੰ ਨਾ ਖੋਲ੍ਹ ਸਕਣ।</li>
         </ul>
       </>
    )
  },
  {
    id: "Q4",
    section: "SECTION B",
    inExam: false,
    question: "What is Blockchain technology? Explain its features and applications.",
    english: (
      <>
        <div className="mb-3"><span className="font-bold text-slate-900">Definition:</span> Blockchain is a decentralized, distributed, and public digital ledger that is used to record transactions across many computers so that the record cannot be altered retroactively without the alteration of all subsequent blocks and the consensus of the network.</div>
        <div className="mb-2 font-bold text-slate-900">Key Features:</div>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-700">
          <li><strong>Decentralization:</strong> There is no central authority (like a bank or government) controlling the data. The network is maintained by peer-to-peer nodes.</li>
          <li><strong>Immutability:</strong> Once data is mathematically written into a "block" and added to the "chain", it is permanently locked and cannot be edited, deleted, or tampered with.</li>
          <li><strong>Transparency:</strong> Every participant in the network has a full copy of the ledger and can see the entire history of transactions.</li>
          <li><strong>Consensus Algorithms:</strong> Nodes must agree on the validity of a transaction (e.g., via Proof of Work or Proof of Stake) before it is permanently recorded.</li>
        </ul>
        <div className="mb-2 font-bold text-slate-900">Applications:</div>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li><strong>Cryptocurrencies:</strong> The foundational technology for Bitcoin, Ethereum, etc.</li>
          <li><strong>Smart Contracts:</strong> Self-executing contracts where the terms are directly written into lines of code.</li>
          <li><strong>Supply Chain:</strong> Tracking the exact origin and journey of goods (e.g., verifying organic food sources).</li>
          <li><strong>Secure Voting:</strong> Creating un-hackable, transparent electronic voting systems.</li>
        </ul>
      </>
    ),
    punjabi: (
       <>
         <div className="mb-3 leading-relaxed"><span className="font-bold">ਬਲਾਕਚੈਨ (Blockchain):</span> ਇਹ ਇੱਕ ਡਿਜੀਟਲ ਖਾਤਾ (Ledger) ਹੈ ਜਿਸ ਵਿੱਚ ਡਾਟਾ "ਬਲਾਕਾਂ" (Blocks) ਵਿੱਚ ਸੇਵ ਹੁੰਦਾ ਹੈ। ਇਹ ਸਾਰੇ ਬਲਾਕ ਆਪਸ ਵਿੱਚ ਜੁੜ ਕੇ ਇੱਕ ਚੈਨ (Chain) ਬਣਾਉਂਦੇ ਹਨ। ਖਾਸ ਗੱਲ ਇਹ ਹੈ ਕਿ ਇਸ ਵਿੱਚ ਸੇਵ ਕੀਤਾ ਡਾਟਾ ਕਦੇ ਬਦਲਿਆ ਨਹੀਂ ਜਾ ਸਕਦਾ।</div>
         <div className="mb-2 font-bold">ਮੁੱਖ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ:</div>
         <ul className="list-disc pl-5 space-y-2 mb-3 text-slate-700">
           <li><strong>Decentralization:</strong> ਇਸਦਾ ਕੋਈ ਇੱਕ ਮਾਲਕ, ਸਰਕਾਰ ਜਾਂ ਬੈਂਕ ਨਹੀਂ ਹੁੰਦਾ।</li>
           <li><strong>Immutability:</strong> ਇੱਕ ਵਾਰ ਡਾਟਾ ਸੇਵ ਹੋ ਗਿਆ, ਤਾਂ ਉਸਨੂੰ ਕੋਈ ਹੈਕਰ ਡਿਲੀਟ ਜਾਂ ਐਡਿਟ (Edit) ਨਹੀਂ ਕਰ ਸਕਦਾ।</li>
           <li><strong>Transparency:</strong> ਇਸ ਵਿੱਚ ਸਾਰੇ ਲੈਣ-ਦੇਣ ਪਾਰਦਰਸ਼ੀ ਹੁੰਦੇ ਹਨ, ਕੋਈ ਵੀ ਦੇਖ ਸਕਦਾ ਹੈ ਕਿ ਪੈਸਾ ਕਿੱਥੇ ਗਿਆ।</li>
         </ul>
         <div className="mb-2 font-bold">ਉਪਯੋਗ (Applications):</div>
         <ul className="list-disc pl-5 space-y-2 text-slate-700">
           <li>ਕ੍ਰਿਪਟੋਕਰੰਸੀ (ਜਿਵੇਂ Bitcoin) ਵਿੱਚ।</li>
           <li>ਸਪਲਾਈ ਚੈਨ ਮੈਨੇਜਮੈਂਟ (ਫੈਕਟਰੀ ਤੋਂ ਸਾਮਾਨ ਕਿਵੇਂ ਪਹੁੰਚਿਆ, ਉਸਦੀ ਟਰੈਕਿੰਗ)।</li>
           <li>ਸੁਰੱਖਿਅਤ ਡਿਜੀਟਲ ਵੋਟਿੰਗ (ਚੋਣਾਂ) ਕਰਵਾਉਣ ਲਈ।</li>
         </ul>
       </>
    )
  },
  
  // ----------- SECTION C -----------
  {
    id: "Q5",
    section: "SECTION C",
    inExam: false,
    question: "Short Notes: (a) e-Hospital, (b) DIKSHA, (c) Cyber Swachhta Kendra",
    english: (
      <>
        <div className="mb-2 font-bold text-slate-900">(a) e-Hospital / ORS:</div>
        <div className="mb-4 text-slate-700">The Online Registration System (ORS) is a portal facilitating a digital healthcare environment. It allows citizens to book OPD appointments online, pay fees, view lab reports, and check blood availability across various government hospitals. It eliminates long physical queues and streamlines healthcare delivery.</div>
        
        <div className="mb-2 font-bold text-slate-900">(b) DIKSHA:</div>
        <div className="mb-4 text-slate-700">Digital Infrastructure for Knowledge Sharing is a national platform under the Ministry of Education. It provides a massive repository of e-learning content, lesson plans, and worksheets for students and teachers across India in multiple languages, bridging the educational digital divide.</div>

        <div className="mb-2 font-bold text-slate-900">(c) Cyber Swachhta Kendra:</div>
        <div className="mb-4 text-slate-700">Part of the Digital India initiative, it is a Botnet Cleaning and Malware Analysis Centre. It operates closely with internet service providers and antivirus companies to detect malicious software on citizens' devices and provides free tools to clean and secure their computers and mobile phones.</div>
      </>
    ),
    punjabi: (
       <>
         <div className="mb-2 font-bold">(a) e-Hospital (ਈ-ਹਸਪਤਾਲ):</div>
         <div className="mb-4 text-slate-700 leading-relaxed">ਇਹ ਸਰਕਾਰੀ ਹਸਪਤਾਲਾਂ ਦੀ ਆਨਲਾਈਨ ਸਹੂਲਤ ਹੈ। ਇਸ ਰਾਹੀਂ ਮਰੀਜ਼ ਘਰ ਬੈਠੇ ਡਾਕਟਰ ਦੀ ਅਪਾਇੰਟਮੈਂਟ (Appointment) ਬੁੱਕ ਕਰ ਸਕਦੇ ਹਨ, ਫੀਸ ਭਰ ਸਕਦੇ ਹਨ, ਅਤੇ ਆਪਣੀ ਬਲੱਡ ਰਿਪੋਰਟ ਆਨਲਾਈਨ ਦੇਖ ਸਕਦੇ ਹਨ। ਇਸ ਨਾਲ ਹਸਪਤਾਲਾਂ ਵਿੱਚ ਲੰਬੀਆਂ ਲਾਈਨਾਂ ਘਟਦੀਆਂ ਹਨ।</div>

         <div className="mb-2 font-bold">(b) DIKSHA (ਦੀਕਸ਼ਾ):</div>
         <div className="mb-4 text-slate-700 leading-relaxed">ਇਹ ਸਿੱਖਿਆ ਮੰਤਰਾਲੇ ਦਾ ਇੱਕ ਵੱਡਾ ਡਿਜੀਟਲ ਪਲੇਟਫਾਰਮ ਹੈ। ਇਸ 'ਤੇ ਅਧਿਆਪਕਾਂ ਅਤੇ ਵਿਦਿਆਰਥੀਆਂ ਲਈ ਕਈ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਆਨਲਾਈਨ ਕਿਤਾਬਾਂ, ਵੀਡੀਓ ਲੈਕਚਰ, ਅਤੇ ਪੜ੍ਹਾਈ ਦਾ ਸਾਮਾਨ ਮੁਫਤ ਵਿੱਚ ਉਪਲਬਧ ਹੈ।</div>

         <div className="mb-2 font-bold">(c) Cyber Swachhta Kendra (ਸਾਈਬਰ ਸਵੱਛਤਾ ਕੇਂਦਰ):</div>
         <div className="mb-4 text-slate-700 leading-relaxed">ਇਹ ਭਾਰਤ ਸਰਕਾਰ ਦਾ ਇੱਕ ਕੇਂਦਰ ਹੈ ਜੋ ਆਮ ਲੋਕਾਂ ਦੇ ਕੰਪਿਊਟਰ ਅਤੇ ਮੋਬਾਈਲ ਫੋਨਾਂ ਵਿੱਚੋਂ ਖਤਰਨਾਕ ਵਾਇਰਸ (Botnet/Malware) ਕੱਢਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ। ਇਹ ਲੋਕਾਂ ਨੂੰ ਵਾਇਰਸ ਹਟਾਉਣ ਵਾਲੇ ਟੂਲ (Tools) ਮੁਫਤ ਦਿੰਦਾ ਹੈ।</div>
       </>
    )
  },
  {
    id: "Q6",
    section: "SECTION C",
    inExam: false,
    question: "Difference between Privacy and Security. Explain VPN.",
    english: (
      <>
        <div className="mb-3"><span className="font-bold text-slate-900">Privacy vs Security:</span></div>
        <div className="overflow-hidden rounded-lg border border-slate-200 mb-4">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 font-bold text-slate-900 border-r border-slate-200">Security</th>
                <th className="px-4 py-3 font-bold text-slate-900">Privacy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr>
                <td className="px-4 py-3 border-r border-slate-200">The act of protecting data from unauthorized access, breaches, and hackers.</td>
                <td className="px-4 py-3">The right of the user to control how their personal data is collected, shared, and used by legitimate entities.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-r border-slate-200">Focuses on technical safeguards (firewalls, encryption, passwords).</td>
                <td className="px-4 py-3">Focuses on policies, consent, and user rights (terms of service, data selling).</td>
              </tr>
              <tr className="bg-slate-50/50 italic font-medium">
                <td className="px-4 py-3 border-r border-slate-200">Example: A hacker stealing your bank password.</td>
                <td className="px-4 py-3">Example: Facebook legally selling your browsing habits to ad agencies without your clear consent.</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mb-2 font-bold text-slate-900">VPN (Virtual Private Network):</div>
        <div className="mb-3 text-slate-700">A VPN establishes a secure, encrypted connection (a "tunnel") between your computer and the internet.</div>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li><strong>How it works:</strong> It routes your traffic through a remote server, masking your real IP address.</li>
          <li><strong>Importance:</strong> It protects your data from being intercepted by hackers on public Wi-Fi networks and hides your browsing activity from ISPs and government surveillance.</li>
        </ul>
      </>
    ),
    punjabi: (
       <>
         <div className="mb-3 font-bold">Privacy ਅਤੇ Security ਵਿੱਚ ਅੰਤਰ:</div>
         <ul className="list-disc pl-5 space-y-3 mb-4 text-slate-700">
           <li><strong>Security (ਸੁਰੱਖਿਆ):</strong> ਇਸਦਾ ਮਤਲਬ ਹੈ ਆਪਣੇ ਡਾਟੇ ਨੂੰ ਹੈਕਰਾਂ ਅਤੇ ਚੋਰਾਂ ਤੋਂ ਬਚਾਉਣਾ (ਜਿਵੇਂ ਪਾਸਵਰਡ ਲਗਾਉਣਾ, ਐਂਟੀਵਾਇਰਸ ਵਰਤਣਾ)।</li>
           <li><strong>Privacy (ਨਿੱਜਤਾ):</strong> ਇਸਦਾ ਮਤਲਬ ਹੈ ਕਿ ਸਾਡੀ ਨਿੱਜੀ ਜਾਣਕਾਰੀ (ਫੋਟੋਆਂ, ਮੈਸੇਜ, ਲੋਕੇਸ਼ਨ) ਸਾਡੀ ਮਰਜ਼ੀ ਤੋਂ ਬਿਨਾਂ ਕਿਸੇ ਕੰਪਨੀ (ਜਿਵੇਂ Google/Facebook) ਦੁਆਰਾ ਵਰਤੀ ਜਾਂ ਵੇਚੀ ਨਾ ਜਾਵੇ।</li>
         </ul>
         <div className="mb-2 font-bold">VPN (ਵਰਚੁਅਲ ਪ੍ਰਾਈਵੇਟ ਨੈੱਟਵਰਕ):</div>
         <ul className="list-disc pl-5 space-y-3 text-slate-700">
           <li>VPN ਇੰਟਰਨੈੱਟ 'ਤੇ ਇੱਕ ਸੁਰੱਖਿਅਤ ਸੁਰੰਗ (Tunnel) ਬਣਾਉਂਦਾ ਹੈ।</li>
           <li>ਇਹ ਸਾਡੇ ਡਾਟੇ ਨੂੰ ਲੁਕਾਉਂਦਾ (Encrypt) ਹੈ ਅਤੇ ਸਾਡੀ ਅਸਲੀ ਲੋਕੇਸ਼ਨ (IP Address) ਨੂੰ ਬਦਲ ਦਿੰਦਾ ਹੈ।</li>
           <li>ਜਦੋਂ ਅਸੀਂ ਰੇਲਵੇ ਸਟੇਸ਼ਨ ਜਾਂ ਕੈਫੇ ਦਾ ਫ੍ਰੀ ਵਾਈ-ਫਾਈ (Public Wi-Fi) ਵਰਤਦੇ ਹਾਂ, ਤਾਂ VPN ਸਾਨੂੰ ਹੈਕਰਾਂ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ।</li>
         </ul>
       </>
    )
  }
];

const shortNotesData = [
  {
    title: "(a) CERT-In",
    inExam: false,
    en: "Indian Computer Emergency Response Team. The national nodal agency responding to cybersecurity threats, issuing guidelines, and analyzing cyber attacks on critical infrastructure.",
    pa: "ਭਾਰਤ ਦੀ ਮੁੱਖ ਸਰਕਾਰੀ ਏਜੰਸੀ ਜੋ ਸਾਈਬਰ ਹਮਲਿਆਂ (ਹੈਕਿੰਗ) ਦਾ ਪਤਾ ਲਗਾਉਂਦੀ ਹੈ ਅਤੇ ਲੋਕਾਂ ਨੂੰ ਅਲਰਟ (Alert) ਕਰਦੀ ਹੈ।"
  },
  {
    title: "(b) Digital Citizenship",
    inExam: false,
    en: "The responsible, ethical, and safe use of technology. It involves respecting others online, protecting one's digital footprint, and understanding digital rights.",
    pa: "ਇੰਟਰਨੈੱਟ ਦੀ ਜ਼ਿੰਮੇਵਾਰੀ ਅਤੇ ਸਮਝਦਾਰੀ ਨਾਲ ਵਰਤੋਂ ਕਰਨਾ। ਇਸ ਵਿੱਚ ਆਨਲਾਈਨ ਕਿਸੇ ਨੂੰ ਤੰਗ ਨਾ ਕਰਨਾ ਅਤੇ ਆਪਣੀ ਜਾਣਕਾਰੀ ਸੁਰੱਖਿਅਤ ਰੱਖਣਾ ਸ਼ਾਮਲ ਹੈ।"
  },
  {
    title: "(c) Netiquettes",
    inExam: false,
    en: "Etiquettes for the internet. Includes avoiding spam, not typing in ALL CAPS (shouting), verifying facts before forwarding, and respecting privacy.",
    pa: "ਇੰਟਰਨੈੱਟ 'ਤੇ ਵਰਤਾਓ ਕਰਨ ਦੇ ਚੰਗੇ ਸੰਸਕਾਰ। ਜਿਵੇਂ: ਝੂਠੀਆਂ ਖਬਰਾਂ (Fake News) ਅੱਗੇ ਨਾ ਭੇਜਣਾ ਅਤੇ ਪੂਰਾ ਮੈਸੇਜ ਵੱਡੇ ਅੱਖਰਾਂ (ALL CAPS) ਵਿੱਚ ਨਾ ਲਿਖਣਾ।"
  },
  {
    title: "(d) Phishing",
    en: "A social engineering attack where criminals send deceptive emails masquerading as legitimate entities to trick victims into revealing sensitive info like passwords.",
    pa: "ਬੈਂਕ ਜਾਂ ਕੰਪਨੀ ਦੇ ਨਾਮ 'ਤੇ ਝੂਠੀ ਈਮੇਲ ਭੇਜ ਕੇ ਲੋਕਾਂ ਨੂੰ ਡਰਾਉਣਾ ਅਤੇ ਉਹਨਾਂ ਦਾ ਪਾਸਵਰਡ ਜਾਂ ਬੈਂਕ ਡਿਟੇਲ ਚੋਰੀ ਕਰਨਾ।"
  }
];

export default function DigitalEmpowermentQuestionsPage() {
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
            DIGITAL EMPOWERMENT
          </h1>
          <h2 className="text-xl md:text-2xl text-[#4f46e5] font-medium italic mb-8 flex items-center justify-center gap-2">
            <BookOpen className="w-6 h-6" /> Detailed University Answers
          </h2>
          <div className="flex items-center justify-center gap-6 text-xs font-black text-slate-400 uppercase tracking-widest">
            <span>Code: CSA-VAC-103/203/303/403</span>
            <span>•</span>
            <span>Max Marks: 45</span>
          </div>
        </div>

        <hr className="border-t-2 border-slate-100 mb-12 print:mb-8" />

        {/* Dynamic Question Render */}
        {["SECTION A", "SECTION B", "SECTION C"].map(sectionName => (
          <div key={sectionName} className="mb-16 print:mb-12">
            
            <div className={`text-white py-3 px-6 rounded-xl font-black text-xl mb-8 flex items-center justify-center tracking-widest shadow-sm print:break-after-avoid bg-slate-900`}>
              {sectionName}
            </div>
            
            <div className="space-y-10">
              {questionsData.filter(q => q.section === sectionName).map(q => (
                <div key={q.id} className="print:break-inside-avoid">
                  
                  {/* Question Title */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="bg-[#4f46e5] text-white px-3 py-1.5 rounded-lg font-black text-sm shadow-sm shrink-0 mt-1">
                      {q.id}
                    </div>
                    <div className="flex-1">
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
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 border rounded-2xl p-6 bg-white shadow-sm print:shadow-none ml-0 lg:ml-12 border-slate-200 print:border-slate-300">
                    
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

        {/* SECTION D: Short Notes */}
        <div className="mb-16 print:mb-12 print:break-inside-avoid">
          <div className="bg-slate-900 text-white py-3 px-6 rounded-xl font-black text-xl mb-8 flex items-center justify-center tracking-widest shadow-sm print:break-after-avoid">
            SECTION D (SHORT NOTES)
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shortNotesData.map((note, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
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
