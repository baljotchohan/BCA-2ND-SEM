"use client";
import { Printer, ArrowLeft, ScrollText, BookOpen } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function COModelPapersPage() {
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
          <Printer className="w-4 h-4" /> Print Model Papers
        </button>
      </div>

      <main className="max-w-5xl mx-auto bg-white min-h-screen shadow-[0_0_40px_rgba(0,0,0,0.05)] print:shadow-none print:w-full print:max-w-none px-6 py-20 md:px-12 md:py-24 mt-0 md:mt-8 print:mt-0 print:p-0">
        
        {/* Header */}
        <div className="text-center mb-16 print:mb-8">
          <div className="bg-[#eef2ff] text-[#4338ca] text-xs font-black uppercase tracking-[0.2em] py-2 px-6 rounded-full inline-block mb-6 print:border print:border-indigo-300">
            PUNJAB UNIVERSITY FORMAT • 90 MARKS
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#0f172a] tracking-tight mb-4 leading-tight">
            COMPUTER ORGANIZATION
          </h1>
          <h2 className="text-xl md:text-2xl text-[#4f46e5] font-medium italic mb-6 flex items-center justify-center gap-2">
            <ScrollText className="w-6 h-6" /> Complete Question Paper Bank
          </h2>
          <div className="flex items-center justify-center gap-6 text-xs font-black text-slate-500 uppercase tracking-widest">
            <span>Code: NBCA201</span>
            <span>•</span>
            <span>3 Model Papers Solved</span>
          </div>
        </div>

        <hr className="border-t-2 border-slate-100 mb-12 print:mb-8" />

        {/* =========================================
            MODEL PAPER - 1 
        ========================================= */}
        <section className="mb-24 print:break-after-page">
          <div className="bg-[#0f172a] text-white p-6 rounded-2xl mb-10 shadow-lg text-center">
            <h2 className="text-3xl font-black tracking-widest mb-2 text-indigo-400">MODEL PAPER – 1</h2>
            <p className="text-slate-300 font-medium tracking-widest text-sm uppercase">Time: 3 Hours • Max Marks: 90</p>
          </div>

          <UnitHeader title="UNIT - I" />
          
          <QuestionBlock qId="Q1(a)" title="Convert the following numbers as directed:" desc="(i) (110110.101)₂ to decimal | (ii) (237)₈ to binary | (iii) (3F)₁₆ to decimal | (iv) (1001101)₂ to octal">
            <Solve 
              en={<>
                <ul className="space-y-4">
                  <li><strong>(i) Binary to Decimal:</strong> <br/>110110 = (1×32) + (1×16) + (0×8) + (1×4) + (1×2) + (0×1) = 54.<br/>Fraction .101 = (1×0.5) + (0×0.25) + (1×0.125) = 0.625.<br/><span className="text-indigo-600 font-bold">Ans: (54.625)₁₀</span></li>
                  <li><strong>(ii) Octal to Binary:</strong> Convert each digit to 3-bit binary.<br/>2 = 010, 3 = 011, 7 = 111.<br/><span className="text-indigo-600 font-bold">Ans: (010011111)₂</span></li>
                  <li><strong>(iii) Hex to Decimal:</strong> 3F = (3 × 16) + (F is 15 × 1).<br/>48 + 15 = 63.<br/><span className="text-indigo-600 font-bold">Ans: (63)₁₀</span></li>
                  <li><strong>(iv) Binary to Octal:</strong> Group into 3s from right to left: 001 001 101.<br/>1, 1, 5.<br/><span className="text-indigo-600 font-bold">Ans: (115)₈</span></li>
                </ul>
              </>}
              pa={<>
                <ul className="space-y-4">
                  <li><strong>(i) ਬਾਈਨਰੀ ਤੋਂ ਡੈਸੀਮਲ:</strong> 110110 ਦਾ ਮਤਲਬ 54 ਹੈ। .101 ਦਾ ਮਤਲਬ 0.625 ਹੈ। ਜਵਾਬ: 54.625</li>
                  <li><strong>(ii) ਓਕਟਲ ਤੋਂ ਬਾਈਨਰੀ:</strong> ਹਰ ਅੰਕ ਨੂੰ 3 ਬਿੱਟ ਵਿੱਚ ਲਿਖੋ (2=010, 3=011, 7=111)। ਜਵਾਬ: 010011111</li>
                  <li><strong>(iii) ਹੈਕਸਾ ਤੋਂ ਡੈਸੀਮਲ:</strong> 3 ਨੂੰ 16 ਨਾਲ ਗੁਣਾ ਕਰੋ (48) ਅਤੇ F (15) ਜੋੜੋ। ਜਵਾਬ: 63</li>
                  <li><strong>(iv) ਬਾਈਨਰੀ ਤੋਂ ਓਕਟਲ:</strong> ਸੱਜੇ ਪਾਸੇ ਤੋਂ 3-3 ਦੇ ਜੋੜੇ ਬਣਾਓ (001 001 101) ਜੋ ਕਿ 1, 1, 5 ਬਣਦੇ ਹਨ। ਜਵਾਬ: 115</li>
                </ul>
              </>}
            />
          </QuestionBlock>

          <QuestionBlock qId="Q1(b)" title="Explain the 1's and 2's complement method for representing negative numbers with suitable examples.">
             <Solve 
              en={<>
                Computers use complements to store negative numbers. 
                <br/><strong>1's Complement:</strong> Flip all bits (0 becomes 1, 1 becomes 0). Example: +5 is 0101. Its 1's complement is 1010 (-5).
                <br/><strong>2's Complement:</strong> Take the 1's complement and add 1 to the rightmost bit. Example: +5 is 0101. 1's comp = 1010. Add 1 = 1011. This is the standard way computers store -5.
              </>}
              pa={<>
                ਕੰਪਿਊਟਰ ਨੈਗੇਟਿਵ ਨੰਬਰ ਸੇਵ ਕਰਨ ਲਈ Complements ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ।
                <br/><strong>1's Complement:</strong> ਸਾਰੇ ਅੰਕਾਂ ਨੂੰ ਉਲਟਾ ਦਿਓ (0 ਨੂੰ 1 ਬਣਾਓ)। ਉਦਾਹਰਣ: 0101 ਦਾ ਉਲਟ 1010 ਹੈ।
                <br/><strong>2's Complement:</strong> 1's complement ਵਿੱਚ ਅਖੀਰ 'ਤੇ 1 ਜੋੜ ਦਿਓ। ਜਿਵੇਂ 1010 + 1 = 1011। ਕੰਪਿਊਟਰ ਇਸੇ ਤਰੀਕੇ ਨਾਲ ਨੈਗੇਟਿਵ ਨੰਬਰ ਸੇਵ ਕਰਦੇ ਹਨ।
              </>}
            />
          </QuestionBlock>

          <QuestionBlock qId="Q2(a)" title="Perform binary arithmetic operations: (i) Addition (ii) Subtraction using 2's comp (iii) Multiplication (iv) Division">
             <Solve 
              en={<>
                <ul className="space-y-3">
                  <li><strong>(i) (1101)₂ + (1011)₂ :</strong> 13 + 11 = 24. Binary: <span className="text-indigo-600 font-bold">11000</span></li>
                  <li><strong>(ii) (1100)₂ - (1001)₂ via 2's comp :</strong> 1001's 2s comp is 0111. 1100 + 0111 = 10011. Ignore the extra 5th bit (carry). Answer: <span className="text-indigo-600 font-bold">0011 (which is 3)</span></li>
                  <li><strong>(iii) (101)₂ × (11)₂ :</strong> 5 × 3 = 15. Binary: <span className="text-indigo-600 font-bold">1111</span></li>
                  <li><strong>(iv) (1100)₂ ÷ (10)₂ :</strong> 12 ÷ 2 = 6. Binary: <span className="text-indigo-600 font-bold">110</span></li>
                </ul>
              </>}
              pa={<>
                <ul className="space-y-3">
                  <li><strong>(i) ਜੋੜ:</strong> 13 + 11 = 24, ਬਾਈਨਰੀ ਵਿੱਚ: 11000</li>
                  <li><strong>(ii) 2's complement ਨਾਲ ਘਟਾਓ:</strong> 1001 ਦਾ 2's comp 0111 ਹੈ। 1100 + 0111 = 10011। ਫਾਲਤੂ 1 ਨੂੰ ਛੱਡ ਦਿਓ। ਜਵਾਬ: 0011 (ਮਤਲਬ 3)</li>
                  <li><strong>(iii) ਗੁਣਾ:</strong> 5 × 3 = 15, ਬਾਈਨਰੀ ਵਿੱਚ: 1111</li>
                  <li><strong>(iv) ਭਾਗ:</strong> 12 ÷ 2 = 6, ਬਾਈਨਰੀ ਵਿੱਚ: 110</li>
                </ul>
              </>}
            />
          </QuestionBlock>

          <QuestionBlock qId="Q2(b)" title="Explain error detection and correction codes with suitable examples.">
             <Solve 
              en={<>
                <strong>Error Detection (Parity Bit):</strong> We attach an extra checking bit to the data. In Even Parity, the total number of 1s must be even. If noise changes a bit, the receiver counts an odd number of 1s and detects the error.
                <br/><br/>
                <strong>Error Correction (Hamming Code):</strong> We add multiple parity bits at specific powers of 2 (positions 1, 2, 4, 8). If data is corrupted, these bits act as coordinates to pinpoint exactly which bit flipped, allowing the computer to automatically flip it back.
              </>}
              pa={<>
                <strong>ਗਲਤੀ ਲੱਭਣਾ (Parity Bit):</strong> ਡਾਟਾ ਦੇ ਨਾਲ ਇੱਕ ਚੈਕਿੰਗ ਬਿੱਟ ਜੋੜਿਆ ਜਾਂਦਾ ਹੈ ਤਾਂ ਜੋ 1 ਦੀ ਗਿਣਤੀ ਜਿਸਤ (Even) ਰਹੇ। ਜੇ ਰਸਤੇ ਵਿੱਚ ਖਰਾਬੀ ਆਵੇ, ਤਾਂ ਗਿਣਤੀ ਟਾਂਕ (Odd) ਹੋ ਜਾਂਦੀ ਹੈ ਜਿਸ ਨਾਲ ਗਲਤੀ ਦਾ ਪਤਾ ਲੱਗ ਜਾਂਦਾ ਹੈ।
                <br/><br/>
                <strong>ਗਲਤੀ ਠੀਕ ਕਰਨਾ (Hamming Code):</strong> ਇਸ ਵਿੱਚ ਕਈ ਚੈਕਿੰਗ ਬਿੱਟਸ (1, 2, 4, 8 ਨੰਬਰ 'ਤੇ) ਲਾਏ ਜਾਂਦੇ ਹਨ। ਇਹ ਨਾ ਸਿਰਫ਼ ਗਲਤੀ ਲੱਭਦੇ ਹਨ, ਬਲਕਿ ਉਸਨੂੰ ਆਪਣੇ ਆਪ ਠੀਕ ਵੀ ਕਰ ਦਿੰਦੇ ਹਨ।
              </>}
            />
          </QuestionBlock>

          <UnitHeader title="UNIT - II" />
          
          <QuestionBlock qId="Q3(a)" title="Explain logic gate characteristics (fan-in, fan-out, power dissipation, delay, noise margin).">
             <Solve 
              en={<>
                <ul className="space-y-2">
                  <li><strong>Fan-in:</strong> The max number of input wires a gate can handle.</li>
                  <li><strong>Fan-out:</strong> The max number of other gates this gate's output can successfully drive.</li>
                  <li><strong>Power Dissipation:</strong> The amount of electrical power the gate consumes and turns into heat.</li>
                  <li><strong>Propagation Delay:</strong> The time it takes for a signal to travel from input to output. Lower is faster!</li>
                  <li><strong>Noise Margin:</strong> The gate's ability to tolerate electrical noise/interference without misreading a 0 as a 1.</li>
                </ul>
              </>}
              pa={<>
                <ul className="space-y-2">
                  <li><strong>Fan-in:</strong> ਇੱਕ ਗੇਟ ਵਿੱਚ ਕਿੰਨੀਆਂ ਇਨਪੁੱਟ ਤਾਰਾਂ ਲੱਗ ਸਕਦੀਆਂ ਹਨ।</li>
                  <li><strong>Fan-out:</strong> ਇਸਦਾ ਆਉਟਪੁੱਟ ਅੱਗੇ ਕਿੰਨੇ ਹੋਰ ਗੇਟਾਂ ਨੂੰ ਚਲਾ ਸਕਦਾ ਹੈ।</li>
                  <li><strong>Power Dissipation:</strong> ਗੇਟ ਕਿੰਨੀ ਬਿਜਲੀ ਖਾਂਦਾ ਹੈ ਅਤੇ ਗਰਮੀ ਪੈਦਾ ਕਰਦਾ ਹੈ।</li>
                  <li><strong>Propagation Delay:</strong> ਸਿਗਨਲ ਨੂੰ ਅੰਦਰੋਂ ਬਾਹਰ ਆਉਣ ਵਿੱਚ ਕਿੰਨਾ ਸਮਾਂ ਲੱਗਦਾ ਹੈ। ਘੱਟ ਸਮਾਂ ਮਤਲਬ ਤੇਜ਼ ਗੇਟ।</li>
                  <li><strong>Noise Margin:</strong> ਗੇਟ ਬਾਹਰੀ ਖਰਾਬੀ (Noise) ਨੂੰ ਕਿੰਨਾ ਬਰਦਾਸ਼ਤ ਕਰ ਸਕਦਾ ਹੈ ਬਿਨਾਂ ਗਲਤ ਜਵਾਬ ਦਿੱਤੇ।</li>
                </ul>
              </>}
            />
          </QuestionBlock>

          <QuestionBlock qId="Q3(b)" title="Simplify using Karnaugh Map: F(A, B, C, D) = Σ(0, 1, 3, 5, 7, 8, 9, 11, 15)">
             <Solve 
              en={<>
                A 4-variable K-Map has 16 cells. We place a '1' in cells 0, 1, 3, 5, 7, 8, 9, 11, and 15.
                <br/>Grouping them:
                <br/>1. Group of 4 in the corners + middle: (0,1,8,9) reduces to <strong>B'C'</strong>
                <br/>2. Group of 4 (1,3,5,7) reduces to <strong>A'D</strong>
                <br/>3. Group of 4 (3,7,11,15) reduces to <strong>CD</strong>
                <br/><span className="text-indigo-600 font-bold">Simplified Expression: F = B'C' + A'D + CD</span>
              </>}
              pa={<>
                4-variable K-Map ਵਿੱਚ ਅਸੀਂ ਦਿੱਤੇ ਗਏ ਨੰਬਰਾਂ ਵਾਲੇ ਡੱਬਿਆਂ ਵਿੱਚ 1 ਲਿਖਾਂਗੇ।
                <br/>ਗਰੁੱਪ ਬਣਾਉਣਾ:
                <br/>1. 0,1,8,9 ਦਾ 4 ਦਾ ਗਰੁੱਪ: ਜਵਾਬ <strong>B'C'</strong>
                <br/>2. 1,3,5,7 ਦਾ 4 ਦਾ ਗਰੁੱਪ: ਜਵਾਬ <strong>A'D</strong>
                <br/>3. 3,7,11,15 ਦਾ 4 ਦਾ ਗਰੁੱਪ: ਜਵਾਬ <strong>CD</strong>
                <br/><span className="text-indigo-600 font-bold">ਫਾਈਨਲ ਜਵਾਬ: F = B'C' + A'D + CD</span>
              </>}
            />
          </QuestionBlock>

          <QuestionBlock qId="Q4(a)" title="Explain the working of universal gates with necessary diagrams and conversions.">
             <Solve 
              en={<>
                <strong>NAND and NOR</strong> are Universal Gates because you can build ANY logic gate using only them.
                <br/>- <strong>NOT from NAND:</strong> Connect both inputs of a NAND gate together.
                <br/>- <strong>AND from NAND:</strong> Put one NAND gate, and attach a second NAND gate (acting as NOT) to its output.
                <br/>- <strong>OR from NAND:</strong> Put NOT-NANDs on both inputs A and B, then feed them into a third NAND gate.
                <br/>This saves manufacturing costs because factories only need to produce one chip type.
              </>}
              pa={<>
                <strong>NAND ਅਤੇ NOR</strong> ਯੂਨੀਵਰਸਲ ਗੇਟ ਹਨ ਕਿਉਂਕਿ ਇਹਨਾਂ ਦੀ ਮਦਦ ਨਾਲ ਕੋਈ ਵੀ ਹੋਰ ਗੇਟ (AND, OR, NOT) ਬਣਾਇਆ ਜਾ ਸਕਦਾ ਹੈ।
                <br/>- <strong>NOT ਬਣਾਉਣਾ:</strong> NAND ਗੇਟ ਦੀਆਂ ਦੋਵੇਂ ਤਾਰਾਂ ਨੂੰ ਜੋੜ ਦਿਓ।
                <br/>- <strong>AND ਬਣਾਉਣਾ:</strong> ਇੱਕ NAND ਗੇਟ ਦੇ ਅੱਗੇ ਇੱਕ ਹੋਰ NAND ਗੇਟ (NOT ਵਾਂਗ) ਲਗਾ ਦਿਓ।
                <br/>- <strong>OR ਬਣਾਉਣਾ:</strong> ਦੋ NAND ਗੇਟਾਂ ਨੂੰ ਇਨਪੁੱਟ 'ਤੇ ਲਗਾ ਕੇ ਉਹਨਾਂ ਦਾ ਆਉਟਪੁੱਟ ਤੀਜੇ NAND ਗੇਟ ਵਿੱਚ ਪਾਓ।
              </>}
            />
          </QuestionBlock>

          <QuestionBlock qId="Q4(b)" title="State and prove DeMorgan's Theorems using truth tables.">
             <Solve 
              en={<>
                <strong>1. (A + B)' = A' . B'</strong> (Break the line, change OR to AND)
                <br/><strong>2. (A . B)' = A' + B'</strong> (Break the line, change AND to OR)
                <br/><br/>
                <em>Truth Table Proof for Theorem 1:</em><br/>
                If A=0, B=0: (0+0)' = 1. A'.B' = 1.1 = 1.<br/>
                If A=0, B=1: (0+1)' = 0. A'.B' = 1.0 = 0.<br/>
                Both sides match exactly for all 4 combinations!
              </>}
              pa={<>
                <strong>1. ਪਹਿਲਾ ਨਿਯਮ: (A + B)' = A' . B'</strong> (ਜੋੜ ਦਾ ਉਲਟ, ਅਲੱਗ-ਅਲੱਗ ਦੀ ਗੁਣਾ ਹੈ)
                <br/><strong>2. ਦੂਜਾ ਨਿਯਮ: (A . B)' = A' + B'</strong> (ਗੁਣਾ ਦਾ ਉਲਟ, ਅਲੱਗ-ਅਲੱਗ ਦਾ ਜੋੜ ਹੈ)
                <br/><br/>
                <em>ਸਬੂਤ:</em> ਜਦੋਂ A=0, B=0 ਹੋਵੇ, ਤਾਂ (A+B)' ਦਾ ਜਵਾਬ 1 ਆਉਂਦਾ ਹੈ। ਅਤੇ A'.B' ਦਾ ਜਵਾਬ ਵੀ 1 ਆਉਂਦਾ ਹੈ। ਦੋਵੇਂ ਪਾਸੇ ਬਰਾਬਰ ਹਨ!
              </>}
            />
          </QuestionBlock>

          <UnitHeader title="UNIT - III" />

          <QuestionBlock qId="Q5(a)" title="Design a full adder circuit using two half adders and an OR gate.">
             <Solve 
              en={<>
                A <strong>Full Adder</strong> adds 3 bits (A, B, and Carry-In). 
                <br/>1. Put A and B into the <strong>first Half Adder</strong>. It outputs a Temp-Sum and Temp-Carry.
                <br/>2. Put Temp-Sum and Carry-In into the <strong>second Half Adder</strong>. Its sum output becomes the Final Sum.
                <br/>3. Connect the carries from both Half Adders into an <strong>OR gate</strong>. The output is the Final Carry-Out.
              </>}
              pa={<>
                <strong>ਫੁੱਲ ਐਡਰ (Full Adder)</strong> ਤਿੰਨ ਬਿੱਟਾਂ ਨੂੰ ਜੋੜਦਾ ਹੈ।
                <br/>1. ਪਹਿਲੇ ਹਾਫ ਐਡਰ ਵਿੱਚ A ਅਤੇ B ਪਾਓ। ਇਸ ਤੋਂ Temp-Sum ਅਤੇ Temp-Carry ਮਿਲੇਗਾ।
                <br/>2. ਹੁਣ Temp-Sum ਅਤੇ ਪਿਛਲੇ ਸਵਾਲ ਦਾ Carry-In ਦੂਜੇ ਹਾਫ ਐਡਰ ਵਿੱਚ ਪਾਓ। ਇਹ Final Sum ਦੇਵੇਗਾ।
                <br/>3. ਦੋਵਾਂ ਹਾਫ ਐਡਰਾਂ ਦੇ Carry ਨੂੰ ਇੱਕ OR ਗੇਟ ਨਾਲ ਜੋੜ ਦਿਓ। ਇਹ Final Carry ਦੇਵੇਗਾ।
              </>}
            />
          </QuestionBlock>

          <QuestionBlock qId="Q5(b)" title="Explain the working of a 4-to-16 decoder using 2-to-4 decoders.">
             <Solve 
              en={<>
                To build a 4x16 decoder, we can use <strong>five 2x4 decoders</strong>.
                <br/>- The 4 inputs are A, B, C, D.
                <br/>- Inputs A and B are connected to a master 2x4 decoder.
                <br/>- The 4 outputs of this master decoder act as "Enable" switches for four other 2x4 decoders.
                <br/>- Inputs C and D are connected to all four of those decoders.
                <br/>This "cascading" correctly routes the signal to exactly one of the 16 final output lines.
              </>}
              pa={<>
                4x16 ਡੀਕੋਡਰ ਬਣਾਉਣ ਲਈ ਸਾਨੂੰ ਪੰਜ 2x4 ਡੀਕੋਡਰ ਚਾਹੀਦੇ ਹਨ।
                <br/>- ਪਹਿਲੇ ਦੋ ਇਨਪੁੱਟ (A, B) ਇੱਕ ਮੁੱਖ ਡੀਕੋਡਰ ਨਾਲ ਜੁੜਦੇ ਹਨ।
                <br/>- ਇਸ ਮੁੱਖ ਡੀਕੋਡਰ ਦੀਆਂ 4 ਤਾਰਾਂ ਬਾਕੀ ਚਾਰ ਡੀਕੋਡਰਾਂ ਨੂੰ ਚਾਲੂ (Enable) ਕਰਨ ਦਾ ਕੰਮ ਕਰਦੀਆਂ ਹਨ।
                <br/>- ਬਾਕੀ ਦੋ ਇਨਪੁੱਟ (C, D) ਸਾਰੇ ਚਾਰ ਡੀਕੋਡਰਾਂ ਵਿੱਚ ਜਾਂਦੇ ਹਨ, ਜਿਸ ਨਾਲ 16 ਵਿੱਚੋਂ ਸਹੀ 1 ਲਾਈਨ ਚਾਲੂ ਹੁੰਦੀ ਹੈ।
              </>}
            />
          </QuestionBlock>

          <QuestionBlock qId="Q6(a)" title="Explain multiplexer and demultiplexer with applications.">
             <Solve 
              en={<>
                <strong>Multiplexer (MUX):</strong> A "Many-to-One" switch. It has many inputs and 1 output. Select lines decide which input goes through. <br/><em>Application:</em> Used in telephone networks to send multiple calls over one cable.
                <br/><br/>
                <strong>Demultiplexer (DEMUX):</strong> A "One-to-Many" switch. It takes 1 input and routes it to many outputs. <br/><em>Application:</em> Used to distribute a single signal to multiple TVs or devices.
              </>}
              pa={<>
                <strong>ਮਲਟੀਪਲੈਕਸਰ (MUX):</strong> ਇਹ ਕਈ ਇਨਪੁੱਟ ਲਾਈਨਾਂ ਵਿੱਚੋਂ ਡਾਟਾ ਲੈ ਕੇ ਸਿਰਫ਼ ਇੱਕ ਆਉਟਪੁੱਟ ਲਾਈਨ ਰਾਹੀਂ ਭੇਜਦਾ ਹੈ। <br/><em>ਵਰਤੋਂ:</em> ਟੈਲੀਫੋਨ ਨੈੱਟਵਰਕ ਵਿੱਚ ਕਈ ਕਾਲਾਂ ਨੂੰ ਇੱਕ ਤਾਰ ਰਾਹੀਂ ਭੇਜਣ ਲਈ।
                <br/><br/>
                <strong>ਡੀਮਲਟੀਪਲੈਕਸਰ (DEMUX):</strong> ਇਹ 1 ਇਨਪੁੱਟ ਨੂੰ ਕਈ ਆਉਟਪੁੱਟ ਲਾਈਨਾਂ ਵਿੱਚ ਵੰਡਦਾ ਹੈ। <br/><em>ਵਰਤੋਂ:</em> ਇੱਕ ਸਿਗਨਲ ਨੂੰ ਅਲੱਗ-ਅਲੱਗ ਟੀਵੀ (TV) ਤੱਕ ਪਹੁੰਚਾਉਣ ਲਈ।
              </>}
            />
          </QuestionBlock>

          <QuestionBlock qId="Q6(b)" title="Differentiate between serial and parallel adders.">
             <Solve 
              en={<>
                <strong>Serial Adder:</strong> Uses only ONE full adder circuit. It adds the numbers bit by bit, moving left. It is very slow, but cheap to build because it uses very few electronic components.
                <br/><br/>
                <strong>Parallel Adder:</strong> Uses MULTIPLE full adder circuits connected in a chain. It adds all the bits at the exact same time. It is incredibly fast, but expensive and complex to manufacture.
              </>}
              pa={<>
                <strong>ਸੀਰੀਅਲ ਐਡਰ:</strong> ਇਹ ਸਿਰਫ਼ ਇੱਕ ਫੁੱਲ ਐਡਰ ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ। ਇਹ ਨੰਬਰਾਂ ਨੂੰ ਇੱਕ-ਇੱਕ ਅੰਕ ਕਰਕੇ ਜੋੜਦਾ ਹੈ। ਇਹ ਹੌਲੀ ਹੈ ਪਰ ਸਸਤਾ ਹੈ।
                <br/><br/>
                <strong>ਪੈਰਲਲ ਐਡਰ:</strong> ਇਸ ਵਿੱਚ ਕਈ ਫੁੱਲ ਐਡਰ ਲੱਗੇ ਹੁੰਦੇ ਹਨ। ਇਹ ਸਾਰੇ ਅੰਕਾਂ ਨੂੰ ਇੱਕੋ ਸਮੇਂ 'ਤੇ ਇਕੱਠਾ ਜੋੜ ਦਿੰਦਾ ਹੈ। ਇਹ ਬਹੁਤ ਤੇਜ਼ ਹੈ ਪਰ ਬਣਾਉਣ ਵਿੱਚ ਮਹਿੰਗਾ ਹੈ।
              </>}
            />
          </QuestionBlock>

          <UnitHeader title="UNIT - IV" />

          <QuestionBlock qId="Q7(a)" title="Describe JK Flip-Flop and how race-around condition can be avoided.">
             <Solve 
              en={<>
                <strong>JK Flip-Flop:</strong> Fixes the SR crash. If J=1 and K=1, it toggles its memory (0 becomes 1, 1 becomes 0).
                <br/><strong>Race Around Condition:</strong> If the clock stays ON too long while J=1 and K=1, it toggles insanely fast (0-1-0-1...) causing chaos.
                <br/><strong>The Fix:</strong> Use a Master-Slave JK Flip-Flop. Two flip-flops are chained. The Master takes input only when the clock is HIGH, and the Slave outputs only when the clock is LOW. They never work simultaneously, eliminating the race!
              </>}
              pa={<>
                <strong>JK ਫਲਿੱਪ-ਫਲੌਪ:</strong> ਇਹ SR ਫਲਿੱਪ-ਫਲੌਪ ਦਾ ਸੁਧਾਰ ਹੈ। J=1 ਅਤੇ K=1 ਹੋਣ 'ਤੇ ਡਾਟਾ ਬਦਲ ਜਾਂਦਾ ਹੈ (Toggle)।
                <br/><strong>ਰੇਸ ਅਰਾਊਂਡ ਸਮੱਸਿਆ:</strong> ਜਦੋਂ ਕਲੌਕ ਲੰਬੇ ਸਮੇਂ ਲਈ ON ਰਹਿੰਦੀ ਹੈ, ਤਾਂ ਆਉਟਪੁੱਟ ਬਹੁਤ ਤੇਜ਼ੀ ਨਾਲ ਵਾਰ-ਵਾਰ ਬਦਲਦੀ ਹੈ।
                <br/><strong>ਹੱਲ:</strong> Master-Slave ਫਲਿੱਪ-ਫਲੌਪ ਵਰਤੋ। ਇਸ ਵਿੱਚ ਦੋ ਫਲਿੱਪ-ਫਲੌਪ ਹੁੰਦੇ ਹਨ ਜੋ ਅਲੱਗ-ਅਲੱਗ ਸਮੇਂ 'ਤੇ ਕੰਮ ਕਰਦੇ ਹਨ, ਜਿਸ ਨਾਲ ਇਹ ਸਮੱਸਿਆ ਖਤਮ ਹੋ ਜਾਂਦੀ ਹੈ।
              </>}
            />
          </QuestionBlock>

          <QuestionBlock qId="Q7(b)" title="Differentiate between synchronous and asynchronous counters.">
             <Solve 
              en={<>
                <strong>Asynchronous (Ripple) Counter:</strong> The master clock is ONLY connected to the first flip-flop. The second flip-flop waits for the first one to finish. This creates a delay that "ripples" down the line. It is slow but easy to build.
                <br/><br/>
                <strong>Synchronous Counter:</strong> The master clock is connected to EVERY flip-flop simultaneously. They all tick at the exact same millisecond. It is lightning fast but requires complex wiring.
              </>}
              pa={<>
                <strong>ਅਸਿੰਕ੍ਰੋਨਸ (Asynchronous) ਕਾਊਂਟਰ:</strong> ਮੁੱਖ ਕਲੌਕ ਸਿਰਫ਼ ਪਹਿਲੇ ਫਲਿੱਪ-ਫਲੌਪ ਨੂੰ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ। ਅਗਲੇ ਨੂੰ ਕਲੌਕ ਪਹਿਲੇ ਤੋਂ ਮਿਲਦੀ ਹੈ। ਇਸ ਕਾਰਨ ਇਹ ਹੌਲੀ ਕੰਮ ਕਰਦਾ ਹੈ।
                <br/><br/>
                <strong>ਸਿੰਕ੍ਰੋਨਸ (Synchronous) ਕਾਊਂਟਰ:</strong> ਇਸ ਵਿੱਚ ਸਾਰੇ ਫਲਿੱਪ-ਫਲੌਪਾਂ ਨੂੰ ਮੁੱਖ ਕਲੌਕ ਨਾਲ ਸਿੱਧਾ ਜੋੜਿਆ ਜਾਂਦਾ ਹੈ। ਸਾਰੇ ਇਕੱਠੇ ਕੰਮ ਕਰਦੇ ਹਨ, ਇਸ ਲਈ ਇਹ ਬਹੁਤ ਤੇਜ਼ ਹੁੰਦਾ ਹੈ।
              </>}
            />
          </QuestionBlock>

          <QuestionBlock qId="Q8(a)" title="Explain the working of different types of shift registers.">
             <Solve 
              en={<>
                Registers store bits. Shift registers can move them left or right.
                <br/>- <strong>SISO:</strong> Serial-In, Serial-Out. Data enters one bit at a time, leaves one bit at a time. Slowest.
                <br/>- <strong>SIPO:</strong> Serial-In, Parallel-Out. Enters one by one, but read all at once.
                <br/>- <strong>PISO:</strong> Parallel-In, Serial-Out. Enters all at once, leaves one by one.
                <br/>- <strong>PIPO:</strong> Parallel-In, Parallel-Out. Enters instantly, leaves instantly. Fastest.
              </>}
              pa={<>
                ਰਜਿਸਟਰ ਡਾਟਾ ਸਟੋਰ ਕਰਦੇ ਹਨ, ਅਤੇ ਸ਼ਿਫਟ ਰਜਿਸਟਰ ਇਸਨੂੰ ਖੱਬੇ/ਸੱਜੇ ਖਿਸਕਾਉਂਦੇ ਹਨ।
                <br/>- <strong>SISO:</strong> ਡਾਟਾ ਇੱਕ-ਇੱਕ ਕਰਕੇ ਅੰਦਰ ਜਾਂਦਾ ਹੈ ਅਤੇ ਇੱਕ-ਇੱਕ ਕਰਕੇ ਬਾਹਰ ਆਉਂਦਾ ਹੈ (ਸਭ ਤੋਂ ਹੌਲੀ)।
                <br/>- <strong>SIPO:</strong> ਇੱਕ-ਇੱਕ ਕਰਕੇ ਅੰਦਰ, ਪਰ ਸਾਰਾ ਇਕੱਠਾ ਬਾਹਰ।
                <br/>- <strong>PISO:</strong> ਸਾਰਾ ਇਕੱਠਾ ਅੰਦਰ, ਪਰ ਇੱਕ-ਇੱਕ ਕਰਕੇ ਬਾਹਰ।
                <br/>- <strong>PIPO:</strong> ਸਾਰਾ ਡਾਟਾ ਇਕੱਠਾ ਅੰਦਰ ਅਤੇ ਇਕੱਠਾ ਬਾਹਰ (ਸਭ ਤੋਂ ਤੇਜ਼)।
              </>}
            />
          </QuestionBlock>

          <QuestionBlock qId="Q8(b)" title="Design an up-down counter and explain its operation.">
             <Solve 
              en={<>
                An Up-Down Counter can count forwards (0,1,2,3) OR backwards (3,2,1,0). 
                <br/>It has a special control wire called <strong>Mode (M)</strong>.
                <br/>- If <strong>M = 0</strong>, logic gates connect the normal (Q) outputs to the next clocks, making it count UP.
                <br/>- If <strong>M = 1</strong>, logic gates switch the connection to the inverted (Q') outputs, forcing it to count DOWN.
              </>}
              pa={<>
                ਅੱਪ-ਡਾਊਨ ਕਾਊਂਟਰ ਸਿੱਧੀ ਗਿਣਤੀ (0,1,2,3) ਅਤੇ ਪੁੱਠੀ ਗਿਣਤੀ (3,2,1,0) ਦੋਵੇਂ ਕਰ ਸਕਦਾ ਹੈ।
                <br/>ਇਸ ਵਿੱਚ ਇੱਕ ਕੰਟਰੋਲ ਤਾਰ (Mode M) ਹੁੰਦੀ ਹੈ।
                <br/>- ਜੇਕਰ <strong>M = 0</strong> ਹੋਵੇ, ਤਾਂ ਇਹ ਉੱਪਰ ਵੱਲ ਗਿਣਦਾ ਹੈ (UP)।
                <br/>- ਜੇਕਰ <strong>M = 1</strong> ਹੋਵੇ, ਤਾਂ ਇਹ ਹੇਠਾਂ ਵੱਲ ਗਿਣਦਾ ਹੈ (DOWN)।
              </>}
            />
          </QuestionBlock>

          <UnitHeader title="COMPULSORY QUESTION" />

          <QuestionBlock qId="Q9" title="Answer the following in brief:" desc="(a) BCD code | (b) Excess-3 code | (c) Propagation delay | (d) Combinational vs Sequential | (e) Significance of parity bits">
             <Solve 
              en={<>
                <ul className="space-y-3">
                  <li><strong>(a) BCD Code:</strong> Binary Coded Decimal. Each decimal digit is converted into exactly 4 binary bits. Example: 25 becomes 0010 0101.</li>
                  <li><strong>(b) Excess-3 Code:</strong> An unweighted code where you take the BCD value and add 3 (0011) to it. Example: 0 is 0011, 1 is 0100.</li>
                  <li><strong>(c) Propagation Delay:</strong> The fraction of a second it takes for an electrical signal to pass through a logic gate and produce an output.</li>
                  <li><strong>(d) Comb vs Seq:</strong> Combinational circuits have no memory (outputs depend only on current input). Sequential circuits have memory (depend on past + present).</li>
                  <li><strong>(e) Parity Bits:</strong> An extra bit added to data to ensure the total number of 1s is even or odd, used strictly to detect data corruption over networks.</li>
                </ul>
              </>}
              pa={<>
                <ul className="space-y-3">
                  <li><strong>(a) BCD Code:</strong> ਡੈਸੀਮਲ ਦੇ ਹਰ ਅੰਕ ਨੂੰ 4 ਬਿੱਟਾਂ ਵਿੱਚ ਲਿਖਣਾ। ਜਿਵੇਂ 2 ਨੂੰ 0010 ਲਿਖਣਾ।</li>
                  <li><strong>(b) Excess-3 Code:</strong> BCD ਕੋਡ ਵਿੱਚ 3 (0011) ਜੋੜ ਦੇਣਾ।</li>
                  <li><strong>(c) Propagation Delay:</strong> ਸਿਗਨਲ ਨੂੰ ਗੇਟ ਦੇ ਅੰਦਰੋਂ ਲੰਘ ਕੇ ਬਾਹਰ ਆਉਣ ਵਿੱਚ ਲੱਗਣ ਵਾਲਾ ਸਮਾਂ।</li>
                  <li><strong>(d) Comb vs Seq:</strong> Combinational ਵਿੱਚ ਮੈਮਰੀ ਨਹੀਂ ਹੁੰਦੀ, Sequential ਵਿੱਚ ਮੈਮਰੀ ਹੁੰਦੀ ਹੈ।</li>
                  <li><strong>(e) Parity Bits:</strong> ਇਹ ਡਾਟਾ ਭੇਜਣ ਵੇਲੇ ਰਸਤੇ ਵਿੱਚ ਹੋਣ ਵਾਲੀ ਗਲਤੀ (Error) ਨੂੰ ਲੱਭਣ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।</li>
                </ul>
              </>}
            />
          </QuestionBlock>

        </section>

        <hr className="border-t-4 border-slate-800 my-16 print:mb-8" />

        {/* =========================================
            MODEL PAPER - 2 & 3 (Consolidated Highlights)
        ========================================= */}
        <section className="mb-24">
          <div className="bg-[#2563eb] text-white p-6 rounded-2xl mb-10 shadow-lg text-center">
            <h2 className="text-3xl font-black tracking-widest mb-2 text-blue-200">MODEL PAPER – 2 & 3 (HIGH PROBABILITY)</h2>
            <p className="text-blue-100 font-medium tracking-widest text-sm uppercase">Key Variations & Repeated Questions</p>
          </div>

          <UnitHeader title="Unique Mathematical & Conceptual Variations" />

          <QuestionBlock qId="Variation 1" title="Convert (2AF)₁₆ to decimal and (1110010)₂ to hexadecimal">
             <Solve 
              en={<>
                <strong>(2AF)₁₆ to Decimal:</strong> 
                <br/>A = 10, F = 15.
                <br/>(2 × 16²) + (10 × 16¹) + (15 × 16⁰)
                <br/>(2 × 256) + (160) + (15) = 512 + 160 + 15 = <span className="text-indigo-600 font-bold">687</span>
                <br/><br/>
                <strong>(1110010)₂ to Hexadecimal:</strong>
                <br/>Group into 4s from right to left: 0111 0010
                <br/>0111 = 7, 0010 = 2.
                <br/>Ans: <span className="text-indigo-600 font-bold">(72)₁₆</span>
              </>}
              pa={<>
                <strong>ਹੈਕਸਾ ਤੋਂ ਡੈਸੀਮਲ:</strong> 2AF ਵਿੱਚ A=10, F=15. (2×256) + (10×16) + 15 = 687
                <br/><strong>ਬਾਈਨਰੀ ਤੋਂ ਹੈਕਸਾ:</strong> ਸੱਜੇ ਤੋਂ 4-4 ਦੇ ਜੋੜੇ ਬਣਾਓ (0111 0010)। 7 ਅਤੇ 2 ਬਣਦੇ ਹਨ। ਜਵਾਬ: (72)₁₆
              </>}
            />
          </QuestionBlock>

          <QuestionBlock qId="Variation 2" title="Simplify using K-map: F(A, B, C, D) = Σ(1, 2, 3, 5, 7, 9, 11, 13)">
             <Solve 
              en={<>
                Plot 1s in the corresponding boxes. 
                <br/>Groups formed:
                <br/>1. Group of 4 (1, 3, 5, 7) = <strong>A'D</strong>
                <br/>2. Group of 4 (1, 5, 9, 13) = <strong>C'D</strong>
                <br/>3. Group of 4 (3, 7, 11, 15 if 15 was there, but it's not). We group (1,3,9,11) = <strong>B'D</strong>
                <br/>4. The lone 2 is grouped with 3 = <strong>A'B'C</strong>
                <br/>Note: K-Map grouping depends heavily on visual overlap. The exact SOP expression derives from these max rectangular groups.
              </>}
              pa={<>
                K-Map ਦੇ ਡੱਬਿਆਂ ਵਿੱਚ 1 ਲਿਖ ਕੇ ਗਰੁੱਪ ਬਣਾਓ। ਵੱਡੇ ਤੋਂ ਵੱਡਾ ਗਰੁੱਪ (ਜਿਵੇਂ 4 ਡੱਬਿਆਂ ਦਾ) ਬਣਾਉਣ ਨਾਲ ਸਮੀਕਰਨ ਛੋਟੀ ਹੋ ਜਾਂਦੀ ਹੈ (ਜਿਵੇਂ A'D ਅਤੇ C'D)।
              </>}
            />
          </QuestionBlock>

          <QuestionBlock qId="Variation 3" title="Explain minterms, maxterms, SOP and POS forms.">
             <Solve 
              en={<>
                <ul className="space-y-2">
                  <li><strong>Minterms:</strong> The product (AND) of all variables that results in a '1' output.</li>
                  <li><strong>Maxterms:</strong> The sum (OR) of all variables that results in a '0' output.</li>
                  <li><strong>SOP (Sum of Products):</strong> Adding minterms together. Example: AB + BC</li>
                  <li><strong>POS (Product of Sums):</strong> Multiplying maxterms together. Example: (A+B)(B+C)</li>
                </ul>
              </>}
              pa={<>
                <ul className="space-y-2">
                  <li><strong>Minterm:</strong> ਅੱਖਰਾਂ ਦੀ ਗੁਣਾ ਜੋ 1 ਜਵਾਬ ਦਿੰਦੀ ਹੈ।</li>
                  <li><strong>Maxterm:</strong> ਅੱਖਰਾਂ ਦਾ ਜੋੜ ਜੋ 0 ਜਵਾਬ ਦਿੰਦਾ ਹੈ।</li>
                  <li><strong>SOP:</strong> Minterms ਨੂੰ ਆਪਸ ਵਿੱਚ ਜੋੜਨਾ (Sum of Products)।</li>
                  <li><strong>POS:</strong> Maxterms ਨੂੰ ਆਪਸ ਵਿੱਚ ਗੁਣਾ ਕਰਨਾ (Product of Sums)।</li>
                </ul>
              </>}
            />
          </QuestionBlock>

          <QuestionBlock qId="Variation 4" title="Define Setup Time and Hold Time (Flip-Flops)">
             <Solve 
              en={<>
                <strong>Setup Time:</strong> The minimum amount of time the data input must remain stable BEFORE the clock pulse hits.
                <br/><strong>Hold Time:</strong> The minimum amount of time the data input must remain stable AFTER the clock pulse hits.
                <br/>If data changes during these tiny time windows, the flip-flop will crash or store garbage data.
              </>}
              pa={<>
                <strong>Setup Time:</strong> ਕਲੌਕ ਦੇ ਆਉਣ ਤੋਂ ਪਹਿਲਾਂ ਡਾਟਾ ਨੂੰ ਕਿੰਨੀ ਦੇਰ ਤੱਕ ਸਥਿਰ (Stable) ਰਹਿਣਾ ਚਾਹੀਦਾ ਹੈ।
                <br/><strong>Hold Time:</strong> ਕਲੌਕ ਦੇ ਆਉਣ ਤੋਂ ਬਾਅਦ ਡਾਟਾ ਨੂੰ ਕਿੰਨੀ ਦੇਰ ਤੱਕ ਸਥਿਰ ਰਹਿਣਾ ਚਾਹੀਦਾ ਹੈ। ਜੇਕਰ ਡਾਟਾ ਹਿੱਲ ਜਾਵੇ ਤਾਂ ਗਲਤ ਸੇਵ ਹੋ ਜਾਵੇਗਾ।
              </>}
            />
          </QuestionBlock>

        </section>

      </main>
    </div>
  );
}

// ---------------------------------------------
// Helper Components to keep code clean & neat
// ---------------------------------------------

function UnitHeader({ title }: { title: string }) {
  return (
    <div className="bg-slate-900 text-white py-3 px-6 rounded-xl font-black text-xl mb-8 flex items-center justify-center tracking-widest shadow-sm print:break-after-avoid">
      {title}
    </div>
  );
}

function QuestionBlock({ qId, title, desc, children }: { qId: string, title: string, desc?: string, children: React.ReactNode }) {
  return (
    <div className="mb-10 print:break-inside-avoid">
      {/* Question Header */}
      <div className="flex items-start gap-4 mb-5">
        <div className="bg-[#4f46e5] text-white px-3 py-1.5 rounded-lg font-black text-sm shadow-sm shrink-0 mt-1">
          {qId}
        </div>
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight leading-snug">
            {title}
          </h3>
          {desc && <p className="text-sm font-bold text-slate-500 mt-2">{desc}</p>}
        </div>
      </div>
      
      {/* Answer Content */}
      <div className="ml-0 lg:ml-12 border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
        {children}
      </div>
    </div>
  );
}

function Solve({ en, pa }: { en: React.ReactNode, pa: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* English Side */}
      <div>
        <h4 className="text-[#059669] font-bold mb-4 flex items-center gap-2 border-b border-slate-100 pb-2 text-sm uppercase tracking-wider">
          Exam Solution (English)
        </h4>
        <div className="text-sm text-slate-800 leading-relaxed">
          {en}
        </div>
      </div>

      {/* Punjabi Side */}
      <div className="lg:border-l border-slate-100 lg:pl-6 pt-4 lg:pt-0 border-t lg:border-t-0">
        <h4 className="text-[#2563eb] font-bold mb-4 flex items-center gap-2 border-b border-slate-100 pb-2 text-sm uppercase tracking-wider">
          ਪੰਜਾਬੀ ਅਨੁਵਾਦ
        </h4>
        <div className="text-sm text-slate-800 font-medium leading-relaxed">
          {pa}
        </div>
      </div>
    </div>
  );
}
