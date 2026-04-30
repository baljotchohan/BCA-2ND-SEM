"use client";
import { Printer, ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const topicsData = [
  {
    id: 1,
    title: "NUMBER SYSTEMS",
    english: (
      <>
        <div className="mb-2"><span className="font-bold text-slate-900">What is it?</span> A number system is just a way for computers and humans to count and represent data.</div>
        <ul className="list-disc pl-5 space-y-2 mb-3">
          <li><strong>Decimal (Base 10):</strong> The system you learned in school. It uses 10 numbers (0 to 9).</li>
          <li><strong>Binary (Base 2):</strong> The system computers use. It only uses 2 numbers (0 and 1). Why? Because a computer's circuits only understand two states: Electricity ON (1) or Electricity OFF (0).</li>
          <li><strong>Octal (Base 8):</strong> Uses 8 numbers (0 to 7). It's used as a shortcut to write long binary numbers. Every 3 binary digits can be written as 1 octal digit.</li>
          <li><strong>Hexadecimal (Base 16):</strong> Uses 16 symbols. It uses 0-9, and then A, B, C, D, E, F (where A is 10, and F is 15). It's used as an even bigger shortcut. Every 4 binary digits can be written as 1 hexadecimal digit. You often see this used in memory addresses and Wi-Fi passwords.</li>
        </ul>
      </>
    ),
    punjabi: (
      <>
        <div className="mb-2 font-medium leading-relaxed">ਨੰਬਰ ਸਿਸਟਮ ਕੀ ਹੈ? ਇਹ ਗਿਣਤੀ ਕਰਨ ਅਤੇ ਡਾਟਾ ਲਿਖਣ ਦਾ ਤਰੀਕਾ ਹੈ।</div>
        <ul className="list-disc pl-5 space-y-2 mb-3 text-slate-700">
          <li><strong>ਡੈਸੀਮਲ (Base 10):</strong> ਜੋ ਅਸੀਂ ਰੋਜ਼ਾਨਾ ਵਰਤਦੇ ਹਾਂ (0 ਤੋਂ 9 ਤੱਕ)।</li>
          <li><strong>ਬਾਈਨਰੀ (Base 2):</strong> ਕੰਪਿਊਟਰ ਸਿਰਫ਼ ਇਸਨੂੰ ਸਮਝਦਾ ਹੈ। ਇਸ ਵਿੱਚ ਸਿਰਫ਼ 0 ਅਤੇ 1 ਹੁੰਦਾ ਹੈ। ਕੰਪਿਊਟਰ ਦੇ ਸਰਕਟ ਸਿਰਫ਼ ਕਰੰਟ ਬੰਦ (0) ਜਾਂ ਚਾਲੂ (1) ਹੋਣਾ ਹੀ ਸਮਝਦੇ ਹਨ।</li>
          <li><strong>ਓਕਟਲ (Base 8):</strong> ਇਸ ਵਿੱਚ 8 ਅੰਕ (0-7) ਹੁੰਦੇ ਹਨ। ਵੱਡੇ ਬਾਈਨਰੀ ਨੰਬਰਾਂ ਨੂੰ ਛੋਟਾ ਲਿਖਣ ਲਈ 3-3 ਦੇ ਜੋੜੇ ਬਣਾ ਕੇ ਓਕਟਲ ਵਿੱਚ ਬਦਲਿਆ ਜਾਂਦਾ ਹੈ।</li>
          <li><strong>ਹੈਕਸਾਡੈਸੀਮਲ (Base 16):</strong> ਇਸ ਵਿੱਚ 16 ਚਿੰਨ੍ਹ ਹੁੰਦੇ ਹਨ: 0-9 ਅਤੇ A-F। ਇਹ ਮੈਮਰੀ ਐਡਰੈੱਸ ਲਿਖਣ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।</li>
        </ul>
      </>
    )
  },
  {
    id: 2,
    title: "1'S AND 2'S COMPLEMENT",
    english: (
      <>
        <div className="mb-2"><span className="font-bold text-slate-900">Why do we need this?</span> Computers are actually not very smart. They only know how to ADD numbers together. They don't have special circuits to SUBTRACT. So, if a computer wants to do <code className="bg-slate-100 px-1">A - B</code>, it actually does <code className="bg-slate-100 px-1">A + (-B)</code>. To turn a positive binary number into a negative binary number, it uses Complements.</div>
        <ul className="list-disc pl-5 space-y-2 mb-3">
          <li><strong>1's Complement:</strong> Super easy. Just flip the bits! Every 0 becomes a 1, and every 1 becomes a 0. <br/><em>Example: 1100 becomes 0011.</em></li>
          <li><strong>2's Complement:</strong> Find the 1's complement first, and then simply add '1' to the far-right side of the number.</li>
        </ul>
        <div className="text-slate-700 font-medium">To subtract, the computer finds the 2's complement of the second number and adds it to the first number. If an extra carry bit spills out at the end, it just throws it in the trash!</div>
      </>
    ),
    punjabi: (
      <>
        <div className="font-medium mb-2">ਕੰਪਿਊਟਰ ਸਿੱਧੀ ਘਟਾਓ (Subtraction) ਨਹੀਂ ਕਰ ਸਕਦਾ, ਇਹ ਸਿਰਫ਼ ਜੋੜ (Addition) ਕਰ ਸਕਦਾ ਹੈ। ਘਟਾਓ ਕਰਨ ਲਈ ਇਹ Complements ਦਾ ਜਾਦੂ ਵਰਤਦਾ ਹੈ।</div>
        <ul className="list-disc pl-5 space-y-2 mb-3 text-slate-700">
          <li><strong>1's Complement:</strong> ਇਹ ਬਹੁਤ ਸੌਖਾ ਹੈ। ਸਾਰੇ ਅੰਕਾਂ ਨੂੰ ਉਲਟਾ ਦਿਓ। (0 ਨੂੰ 1 ਅਤੇ 1 ਨੂੰ 0 ਬਣਾ ਦਿਓ)।</li>
          <li><strong>2's Complement:</strong> 1's complement ਕੱਢਣ ਤੋਂ ਬਾਅਦ, ਅਖੀਰਲੇ ਅੰਕ (ਸੱਜੇ ਪਾਸੇ) ਵਿੱਚ 1 ਜੋੜ ਦਿਓ।</li>
        </ul>
        <div className="text-slate-700">ਘਟਾਓ ਕਰਨ ਲਈ ਕੰਪਿਊਟਰ ਦੂਜੇ ਨੰਬਰ ਦਾ 2's Complement ਕੱਢ ਕੇ ਪਹਿਲੇ ਵਿੱਚ ਜੋੜ ਦਿੰਦਾ ਹੈ। ਜੇ ਕੋਈ ਫਾਲਤੂ ਅੰਕ (Carry) ਬਚੇ, ਤਾਂ ਉਸਨੂੰ ਸੁੱਟ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ।</div>
      </>
    )
  },
  {
    id: 3,
    title: "ERROR DETECTING & CORRECTING CODES",
    english: (
      <>
        <div className="mb-2"><span className="font-bold text-slate-900">The Problem:</span> When you send a picture or message over the internet, electrical noise can corrupt the data, turning a 0 into a 1.</div>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Error Detection (Parity Bit):</strong> We add one extra security guard bit to the end of our data. In "Even Parity", we make sure the total number of 1s in our data is always an EVEN number (2, 4, 6...). If the receiver counts an ODD number of 1s, they know the data got corrupted. However, it only tells you an error happened; it doesn't tell you exactly which bit is broken.</li>
          <li><strong>Error Correction (Hamming Code):</strong> This is much smarter. It adds multiple security bits at specific spots (positions 1, 2, 4, 8). If data gets corrupted, the receiver can look at these bits and mathematically calculate EXACTLY which bit was flipped. Then, it just flips it back to fix the error!</li>
        </ul>
      </>
    ),
    punjabi: (
      <>
        <div className="font-medium mb-2">ਸਮੱਸਿਆ: ਇੰਟਰਨੈੱਟ 'ਤੇ ਡਾਟਾ ਭੇਜਣ ਵੇਲੇ ਰਸਤੇ ਵਿੱਚ ਖਰਾਬੀ (Noise) ਕਾਰਨ ਕੋਈ 0 ਬਦਲ ਕੇ 1 ਹੋ ਸਕਦਾ ਹੈ।</div>
        <ul className="list-disc pl-5 space-y-3 text-slate-700">
          <li><strong>Parity Bit (ਗਲਤੀ ਲੱਭਣਾ):</strong> ਅਸਲੀ ਡਾਟਾ ਦੇ ਨਾਲ ਇੱਕ ਹੋਰ ਚੈਕਿੰਗ ਬਿੱਟ ਜੋੜਿਆ ਜਾਂਦਾ ਹੈ ਤਾਂ ਜੋ 1 ਦੀ ਗਿਣਤੀ ਹਮੇਸ਼ਾ ਜਿਸਤ (Even) ਰਹੇ। ਜੇਕਰ ਡਾਟਾ ਮਿਲਣ 'ਤੇ 1 ਦੀ ਗਿਣਤੀ ਟਾਂਕ (Odd) ਆਉਂਦੀ ਹੈ, ਤਾਂ ਮਤਲਬ ਡਾਟਾ ਖਰਾਬ ਹੋ ਚੁੱਕਾ ਹੈ।</li>
          <li><strong>Hamming Code (ਗਲਤੀ ਠੀਕ ਕਰਨਾ):</strong> ਇਹ ਬਹੁਤ ਸਮਝਦਾਰ ਤਰੀਕਾ ਹੈ। ਇਸ ਵਿੱਚ ਕਈ ਬਿੱਟਸ ਜੋੜੇ ਜਾਂਦੇ ਹਨ। ਇਹ ਨਾ ਸਿਰਫ਼ ਇਹ ਦੱਸਦਾ ਹੈ ਕਿ ਗਲਤੀ ਹੈ, ਬਲਕਿ ਇਹ ਵੀ ਦੱਸਦਾ ਹੈ ਕਿ ਗਲਤੀ ਕਿਹੜੀ ਜਗ੍ਹਾ 'ਤੇ ਹੈ, ਅਤੇ ਫਿਰ ਉਸਨੂੰ ਆਪਣੇ ਆਪ ਠੀਕ ਕਰ ਦਿੰਦਾ ਹੈ!</li>
        </ul>
      </>
    )
  },
  {
    id: 4,
    title: "CHARACTER CODES (ASCII, EBCDIC, BCD)",
    english: (
      <>
        <div className="mb-2"><span className="font-bold text-slate-900">What are they?</span> Computers only understand numbers (0s and 1s). So, how do they understand letters like 'A', 'B', or symbols like '@'? We use translation dictionaries called Character Codes.</div>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>ASCII:</strong> (American Standard Code for Information Interchange). This is the most famous code in the world. It uses 7 or 8 bits. For example, in ASCII, the capital letter 'A' is represented by the number 65 (which is 1000001 in binary).</li>
          <li><strong>EBCDIC:</strong> Very similar to ASCII, but it was invented by IBM. It is mostly used in massive, powerful computers called Mainframes.</li>
          <li><strong>BCD (Binary Coded Decimal):</strong> A very simple code where each digit of a normal number (like 1, 2, 3) is translated into exactly 4 binary bits. It's used a lot in digital clocks and calculators.</li>
        </ul>
      </>
    ),
    punjabi: (
      <>
        <div className="font-medium mb-2">ਕੰਪਿਊਟਰ ਸਿਰਫ਼ ਬਾਈਨਰੀ ਨੰਬਰ ਸਮਝਦਾ ਹੈ, ਅੰਗਰੇਜ਼ੀ ਦੇ ਅੱਖਰ (A, B, C) ਨਹੀਂ। ਇਹਨਾਂ ਅੱਖਰਾਂ ਨੂੰ ਨੰਬਰਾਂ ਵਿੱਚ ਬਦਲਣ ਵਾਲੇ ਤਰੀਕਿਆਂ ਨੂੰ Character Codes ਕਹਿੰਦੇ ਹਨ।</div>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li><strong>ASCII:</strong> ਇਹ ਪੂਰੀ ਦੁਨੀਆ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਵਰਤਿਆ ਜਾਣ ਵਾਲਾ 7 ਜਾਂ 8-ਬਿੱਟ ਕੋਡ ਹੈ। ਉਦਾਹਰਣ ਵਜੋਂ, ASCII ਵਿੱਚ ਵੱਡੇ ਅੱਖਰ 'A' ਦਾ ਮਤਲਬ ਨੰਬਰ 65 ਹੈ।</li>
          <li><strong>EBCDIC:</strong> ਇਹ IBM ਕੰਪਨੀ ਦੁਆਰਾ ਬਣਾਇਆ ਗਿਆ ਕੋਡ ਹੈ ਜੋ ਸਿਰਫ਼ ਵੱਡੇ ਕੰਪਿਊਟਰਾਂ (Mainframes) ਵਿੱਚ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।</li>
          <li><strong>BCD:</strong> ਇਸ ਵਿੱਚ ਹਰ ਡੈਸੀਮਲ ਅੰਕ (0 ਤੋਂ 9) ਨੂੰ 4-ਬਿੱਟ ਬਾਈਨਰੀ ਵਿੱਚ ਬਦਲਿਆ ਜਾਂਦਾ ਹੈ। ਡਿਜੀਟਲ ਘੜੀਆਂ ਇਸਦੀ ਵਰਤੋਂ ਕਰਦੀਆਂ ਹਨ।</li>
        </ul>
      </>
    )
  },
  {
    id: 5,
    title: "DE MORGAN'S THEOREMS",
    english: (
      <>
        <div className="mb-2"><span className="font-bold text-slate-900">The Rules:</span> Just like algebra has rules for math, Boolean Algebra has rules for logic. De Morgan's theorems are two cheat codes to simplify complex logic problems.</div>
        <div className="mb-2 text-slate-700">The trick to remembering them is: <strong>"Break the line, change the sign."</strong></div>
        <ul className="list-decimal pl-5 space-y-3">
          <li><strong>Theorem 1:</strong> If you NOT an OR operation, it is the exact same as doing an AND operation on two NOTs. <br/><code className="bg-slate-100 px-1 text-indigo-700 font-bold">(A + B)' = A' . B'</code></li>
          <li><strong>Theorem 2:</strong> If you NOT an AND operation, it is the exact same as doing an OR operation on two NOTs. <br/><code className="bg-slate-100 px-1 text-indigo-700 font-bold">(A . B)' = A' + B'</code></li>
        </ul>
      </>
    ),
    punjabi: (
      <>
        <div className="font-medium mb-2">ਇਹ ਬੂਲੀਅਨ ਅਲਜਬਰਾ ਦੇ ਦੋ ਸਭ ਤੋਂ ਜ਼ਰੂਰੀ ਨਿਯਮ ਹਨ ਜੋ ਔਖੇ ਸਰਕਟਾਂ ਨੂੰ ਸੌਖਾ ਕਰਦੇ ਹਨ। ਯਾਦ ਰੱਖਣ ਦਾ ਤਰੀਕਾ ਹੈ: ਜੇਕਰ ਤੁਸੀਂ ਉੱਪਰਲੀ ਲਾਈਨ (NOT) ਤੋੜਦੇ ਹੋ, ਤਾਂ ਹੇਠਾਂ ਵਾਲਾ ਨਿਸ਼ਾਨ (+ ਤੋਂ ਗੁਣਾ, ਜਾਂ ਗੁਣਾ ਤੋਂ +) ਬਦਲ ਜਾਂਦਾ ਹੈ।</div>
        <ul className="list-decimal pl-5 space-y-3 text-slate-700">
          <li><strong>ਪਹਿਲਾ ਨਿਯਮ:</strong> ਜੇਕਰ ਅਸੀਂ ਜੋੜ ਦਾ ਉਲਟ ਕਰੀਏ, ਤਾਂ ਉਹ ਅਲੱਗ-ਅਲੱਗ ਉਲਟਾਂ ਦੀ ਗੁਣਾ ਬਣ ਜਾਂਦਾ ਹੈ। <br/><code className="bg-slate-100 px-1 font-bold">(A + B)' = A' . B'</code></li>
          <li><strong>ਦੂਜਾ ਨਿਯਮ:</strong> ਜੇਕਰ ਅਸੀਂ ਗੁਣਾ ਦਾ ਉਲਟ ਕਰੀਏ, ਤਾਂ ਉਹ ਅਲੱਗ-ਅਲੱਗ ਉਲਟਾਂ ਦਾ ਜੋੜ ਬਣ ਜਾਂਦਾ ਹੈ। <br/><code className="bg-slate-100 px-1 font-bold">(A . B)' = A' + B'</code></li>
        </ul>
      </>
    )
  },
  {
    id: 6,
    title: "LOGIC GATES & UNIVERSAL GATES",
    english: (
      <>
        <div className="mb-2"><span className="font-bold text-slate-900">Basic Logic Gates:</span> These are physical electronic components that make decisions.</div>
        <ul className="list-disc pl-5 space-y-1 mb-3 text-slate-700">
          <li><strong>AND Gate:</strong> Like multiplication. Output is ON only if Input 1 AND Input 2 are ON.</li>
          <li><strong>OR Gate:</strong> Like addition. Output is ON if Input 1 OR Input 2 (or both) are ON.</li>
          <li><strong>NOT Gate:</strong> An inverter. Whatever goes in, the exact opposite comes out.</li>
        </ul>
        <div className="mb-2"><span className="font-bold text-slate-900">Universal Gates (NAND & NOR):</span></div>
        <div className="text-slate-700">A NAND gate is an AND gate with a NOT attached. A NOR gate is an OR gate with a NOT attached. They are called <strong>"Universal"</strong> because they are magical. You can literally build ANY other gate (even AND, OR, NOT) using ONLY a big pile of NAND gates, or ONLY a big pile of NOR gates. Computer companies love this because they only need to manufacture one type of part!</div>
      </>
    ),
    punjabi: (
      <>
        <div className="font-medium mb-2">ਬੇਸਿਕ ਲੋਜਿਕ ਗੇਟ (Basic Logic Gates):</div>
        <ul className="list-disc pl-5 space-y-1 mb-3 text-slate-700">
          <li><strong>AND ਗੇਟ:</strong> ਇਹ ਗੁਣਾ (Multiply) ਵਾਂਗ ਕੰਮ ਕਰਦਾ ਹੈ। ਜਵਾਬ 1 ਉਦੋਂ ਆਵੇਗਾ ਜਦੋਂ ਸਾਰੇ ਇਨਪੁੱਟ 1 ਹੋਣਗੇ।</li>
          <li><strong>OR ਗੇਟ:</strong> ਇਹ ਜੋੜ (Add) ਵਾਂਗ ਕੰਮ ਕਰਦਾ ਹੈ। ਜੇਕਰ ਕੋਈ ਇੱਕ ਵੀ ਇਨਪੁੱਟ 1 ਹੈ, ਤਾਂ ਜਵਾਬ 1 ਆਵੇਗਾ।</li>
          <li><strong>NOT ਗੇਟ:</strong> ਇਹ ਚੀਜ਼ਾਂ ਨੂੰ ਉਲਟਾ ਦਿੰਦਾ ਹੈ (0 ਨੂੰ 1, ਅਤੇ 1 ਨੂੰ 0)।</li>
        </ul>
        <div className="font-medium mb-2">ਯੂਨੀਵਰਸਲ ਗੇਟਸ (NAND ਅਤੇ NOR):</div>
        <div className="text-slate-700">NAND ਅਤੇ NOR ਨੂੰ ਯੂਨੀਵਰਸਲ ਇਸ ਲਈ ਕਿਹਾ ਜਾਂਦਾ ਹੈ ਕਿਉਂਕਿ ਤੁਸੀਂ ਦੁਨੀਆ ਦਾ ਕੋਈ ਵੀ ਹੋਰ ਗੇਟ ਸਿਰਫ਼ NAND ਜਾਂ ਸਿਰਫ਼ NOR ਗੇਟਾਂ ਨੂੰ ਜੋੜ ਕੇ ਬਣਾ ਸਕਦੇ ਹੋ।</div>
      </>
    )
  },
  {
    id: 7,
    title: "KARNAUGH MAP (K-MAP)",
    english: (
      <>
        <div className="mb-2"><span className="font-bold text-slate-900">What is it?</span> It's a visual game to simplify crazy-long math equations. Instead of doing algebra, you draw a grid and play a game of "connect the dots" with the number 1.</div>
        <ul className="list-disc pl-5 space-y-2 mb-3 text-slate-700">
          <li><strong>How it looks:</strong> For an equation with 4 variables (A,B,C,D), you draw a big square with 16 smaller boxes inside (2⁴ = 16).</li>
          <li><strong>Gray Code:</strong> The labels on the edges don't go in normal order (00, 01, 10, 11). They go 00, 01, 11, 10. This is super important because it makes sure that boxes next to each other only have a difference of ONE bit.</li>
          <li><strong>How to play:</strong> You put a '1' in the boxes where your equation is true. Then, you draw giant rectangles around groups of 1s. You can only group them in sizes of 1, 2, 4, 8, or 16. The bigger the rectangle you can draw, the simpler your final equation becomes!</li>
        </ul>
      </>
    ),
    punjabi: (
      <>
        <div className="font-medium mb-2">K-Map ਵੱਡੀਆਂ ਸਮੀਕਰਨਾਂ (equations) ਨੂੰ ਛੋਟਾ ਕਰਨ ਦਾ ਇੱਕ ਸੌਖਾ ਨਕਸ਼ੇ ਵਾਲਾ ਤਰੀਕਾ ਹੈ।</div>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li><strong>ਬਣਤਰ:</strong> 4-Variable K-Map ਵਿੱਚ 16 ਡੱਬੇ (Cells) ਹੁੰਦੇ ਹਨ। ਕਿਨਾਰਿਆਂ 'ਤੇ ਨਾਮ Gray Code (00, 01, 11, 10) ਅਨੁਸਾਰ ਲਿਖੇ ਜਾਂਦੇ ਹਨ। ਧਿਆਨ ਰੱਖੋ 11 ਪਹਿਲਾਂ ਆਉਂਦਾ ਹੈ।</li>
          <li><strong>ਗਰੁੱਪ ਬਣਾਉਣਾ:</strong> ਅਸੀਂ ਡੱਬਿਆਂ ਵਿੱਚ '1' ਲਿਖਦੇ ਹਾਂ ਅਤੇ ਫਿਰ ਉਹਨਾਂ ਦੇ ਆਲੇ-ਦੁਆਲੇ ਡੱਬੇ (Groups) ਬਣਾਉਂਦੇ ਹਾਂ।</li>
          <li><strong>ਨਿਯਮ:</strong> ਅਸੀਂ ਸਿਰਫ਼ 1, 2, 4, 8, ਜਾਂ 16 ਦਾ ਗਰੁੱਪ ਬਣਾ ਸਕਦੇ ਹਾਂ। ਗਰੁੱਪ ਸਿੱਧੀ ਲਾਈਨ ਵਿੱਚ ਬਣਨਾ ਚਾਹੀਦਾ ਹੈ। ਜਿੰਨਾ ਵੱਡਾ ਗਰੁੱਪ ਹੋਵੇਗਾ, ਸਮੀਕਰਨ ਓਨੀ ਹੀ ਜ਼ਿਆਦਾ ਛੋਟੀ ਹੋਵੇਗੀ।</li>
        </ul>
      </>
    )
  },
  {
    id: 8,
    title: "ADDERS (HALF AND FULL)",
    english: (
      <>
        <div className="mb-2"><span className="font-bold text-slate-900">What are they?</span> Inside every calculator and CPU, there are circuits whose only job in life is to add binary numbers together. These are called Adders.</div>
        <ul className="list-disc pl-5 space-y-3 text-slate-700">
          <li><strong>Half Adder:</strong> A very simple circuit. You give it two bits (like 1 and 1), and it outputs a Sum (0) and a Carry (1). The problem? If you are adding huge numbers, a Half Adder is too stupid to accept a "Carry" from the previous column.</li>
          <li><strong>Full Adder:</strong> This is the smart version. It takes THREE inputs: two bits, AND the carry from the previous column. It outputs the final Sum and a new Carry-out.</li>
          <li><strong>The Trick:</strong> You can actually build 1 Full Adder by connecting 2 Half Adders together and adding an OR gate at the end!</li>
        </ul>
      </>
    ),
    punjabi: (
      <>
        <div className="font-medium mb-2">ਐਡਰ (Adder) ਉਹ ਸਰਕਟ ਹੁੰਦੇ ਹਨ ਜੋ ਕੰਪਿਊਟਰ ਦੇ ਅੰਦਰ ਨੰਬਰਾਂ ਦਾ ਜੋੜ ਕਰਦੇ ਹਨ।</div>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li><strong>ਹਾਫ ਐਡਰ (Half Adder):</strong> ਇਹ ਸਭ ਤੋਂ ਸੌਖਾ ਸਰਕਟ ਹੈ। ਇਹ ਸਿਰਫ਼ ਦੋ ਬਿੱਟਾਂ ਨੂੰ ਜੋੜਦਾ ਹੈ ਅਤੇ ਸਾਨੂੰ Sum (ਜੋੜ) ਅਤੇ Carry (ਹਾਸਲ) ਦਿੰਦਾ ਹੈ। ਪਰ ਇਹ ਪਿਛਲੇ ਸਵਾਲ ਦੇ ਬਚੇ ਹੋਏ ਹਾਸਲ ਨੂੰ ਆਪਣੇ ਵਿੱਚ ਨਹੀਂ ਜੋੜ ਸਕਦਾ।</li>
          <li><strong>ਫੁੱਲ ਐਡਰ (Full Adder):</strong> ਇਹ ਤਿੰਨ ਬਿੱਟਾਂ ਨੂੰ ਜੋੜਦਾ ਹੈ (ਦੋ ਨੰਬਰ ਅਤੇ ਪਿਛਲਾ ਬਚਿਆ ਹੋਇਆ ਹਾਸਲ)। ਇਹ ਸਹੀ ਅਤੇ ਪੂਰਾ ਜੋੜ ਕਰਦਾ ਹੈ।</li>
          <li>ਅਸੀਂ 2 ਹਾਫ ਐਡਰਾਂ ਅਤੇ 1 OR ਗੇਟ ਨੂੰ ਜੋੜ ਕੇ 1 ਫੁੱਲ ਐਡਰ ਬਣਾ ਸਕਦੇ ਹਾਂ।</li>
        </ul>
      </>
    )
  },
  {
    id: 9,
    title: "MULTIPLEXER (MUX) & DEMUX",
    english: (
      <>
        <ul className="list-disc pl-5 space-y-4 text-slate-700">
          <li><strong>Multiplexer (MUX):</strong> Think of a MUX as an old-school telephone operator. There are many wires (inputs) trying to call in, but only ONE wire going out (output). The MUX uses special "select lines" to decide which input is allowed to go through the single output wire. It's often called a <strong>Data Selector</strong> or "Many-to-One" circuit.</li>
          <li><strong>Demultiplexer (DEMUX):</strong> This is the exact opposite. There is only ONE wire coming in, and many wires going out. The DEMUX takes the single input and routes it to one specific output wire. It is called a <strong>Data Distributor</strong> or "One-to-Many" circuit.</li>
        </ul>
      </>
    ),
    punjabi: (
      <>
        <ul className="list-disc pl-5 space-y-3 text-slate-700">
          <li><strong>ਮਲਟੀਪਲੈਕਸਰ (MUX):</strong> ਇਹ ਇੱਕ ਸਵਿੱਚਬੋਰਡ ਵਾਂਗ ਕੰਮ ਕਰਦਾ ਹੈ। ਇਸ ਵਿੱਚ ਕਈ ਇਨਪੁੱਟ ਲਾਈਨਾਂ ਹੁੰਦੀਆਂ ਹਨ, ਪਰ ਆਉਟਪੁੱਟ ਸਿਰਫ਼ ਇੱਕ ਹੁੰਦਾ ਹੈ। ਇਹ "Select Lines" ਦੀ ਮਦਦ ਨਾਲ ਫੈਸਲਾ ਕਰਦਾ ਹੈ ਕਿ ਕਿਹੜਾ ਡਾਟਾ ਅੱਗੇ ਜਾਵੇਗਾ। ਇਸਨੂੰ "Many-to-One" ਕਹਿੰਦੇ ਹਨ।</li>
          <li><strong>ਡੀਮਲਟੀਪਲੈਕਸਰ (DEMUX):</strong> ਇਹ MUX ਦਾ ਬਿਲਕੁਲ ਉਲਟ ਹੈ। ਇਸ ਵਿੱਚ ਸਿਰਫ਼ 1 ਇਨਪੁੱਟ ਲਾਈਨ ਆਉਂਦੀ ਹੈ ਅਤੇ ਇਹ ਉਸਨੂੰ ਕਈ ਆਉਟਪੁੱਟ ਲਾਈਨਾਂ ਵਿੱਚੋਂ ਕਿਸੇ ਇੱਕ 'ਤੇ ਭੇਜ ਦਿੰਦਾ ਹੈ। ਇਸਨੂੰ "One-to-Many" ਕਹਿੰਦੇ ਹਨ।</li>
        </ul>
      </>
    )
  },
  {
    id: 10,
    title: "FLIP FLOPS",
    english: (
      <>
        <div className="mb-2"><span className="font-bold text-slate-900">What is a Flip-Flop?</span> A flip-flop isn't a shoe! It is the smallest possible memory chip in a computer. It is an electronic circuit that can store exactly ONE bit of data (a 0 or a 1) forever, as long as the computer is turned on.</div>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li><strong>SR Flip-Flop:</strong> The oldest type. S stands for Set (make it 1). R stands for Reset (make it 0). The problem is, if you push both S and R at the same time, the circuit crashes!</li>
          <li><strong>JK Flip-Flop:</strong> This fixes the SR crash. If you push both J and K at the same time, instead of crashing, it just "toggles" (flips its memory. If it was storing a 0, it becomes 1. If it was 1, it becomes 0).</li>
          <li><strong>Master-Slave JK:</strong> Even the JK flip-flop has a glitch called the "Race Around Condition" where it toggles way too fast and loses track. To fix this, engineers put TWO flip-flops inside one chip. The Master captures the data first, and then hands it safely to the Slave.</li>
        </ul>
      </>
    ),
    punjabi: (
      <>
        <div className="font-medium mb-2">ਫਲਿੱਪ-ਫਲੌਪ (Flip-Flop) ਕੰਪਿਊਟਰ ਦੀ ਸਭ ਤੋਂ ਛੋਟੀ ਮੈਮਰੀ ਹੈ ਜੋ 1 ਬਿੱਟ ਡਾਟਾ ਸਟੋਰ ਕਰਦੀ ਹੈ।</div>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li><strong>SR ਫਲਿੱਪ-ਫਲੌਪ:</strong> S (Set) ਕਰਨ ਨਾਲ 1 ਸੇਵ ਹੁੰਦਾ ਹੈ, R (Reset) ਕਰਨ ਨਾਲ 0। ਪਰ ਜੇਕਰ ਦੋਵੇਂ ਇਕੱਠੇ ਦਬਾਏ ਜਾਣ, ਤਾਂ ਇਹ ਕੰਮ ਕਰਨਾ ਬੰਦ ਕਰ ਦਿੰਦਾ ਹੈ।</li>
          <li><strong>JK ਫਲਿੱਪ-ਫਲੌਪ:</strong> ਇਹ SR ਦਾ ਸੁਧਾਰ ਹੈ। ਦੋਵੇਂ ਬਟਨ (J ਅਤੇ K) ਇਕੱਠੇ ਦਬਾਉਣ 'ਤੇ ਇਹ ਖਰਾਬ ਨਹੀਂ ਹੁੰਦਾ, ਬਲਕਿ ਆਪਣੀ ਪੁਰਾਣੀ ਵੈਲਯੂ ਨੂੰ ਬਦਲ ਲੈਂਦਾ ਹੈ (Toggle ਕਰਦਾ ਹੈ)।</li>
          <li><strong>Master-Slave JK:</strong> JK ਵਿੱਚ ਕਦੇ-ਕਦੇ ਡਾਟਾ ਬਹੁਤ ਤੇਜ਼ੀ ਨਾਲ ਬਦਲਣ ਲੱਗਦਾ ਹੈ। ਇਸ ਸਮੱਸਿਆ ਨੂੰ ਰੋਕਣ ਲਈ ਦੋ ਫਲਿੱਪ-ਫਲੌਪਾਂ ਦਾ ਜੋੜਾ ਬਣਾਇਆ ਗਿਆ ਹੈ। ਇੱਕ Master ਹੁੰਦਾ ਹੈ ਜੋ ਡਾਟਾ ਲੈਂਦਾ ਹੈ, ਅਤੇ ਦੂਜਾ Slave ਹੁੰਦਾ ਹੈ ਜੋ ਡਾਟਾ ਅੱਗੇ ਦਿੰਦਾ ਹੈ।</li>
        </ul>
      </>
    )
  },
  {
    id: 11,
    title: "SHIFT REGISTERS",
    english: (
      <>
        <div className="mb-2"><span className="font-bold text-slate-900">What are they?</span> Since one flip-flop only holds 1 tiny bit of data, we line up several flip-flops in a row to hold bigger numbers (like 8 bits). This line-up is called a "Register". A "Shift Register" can not only hold the data, but it can push the data left or right along the line.</div>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li><strong>SISO (Serial-In Serial-Out):</strong> Data is pushed into the register one bit at a time, and pushed out one bit at a time. It's like people entering a room through a single door and leaving through a single door. It is very slow.</li>
          <li><strong>PIPO (Parallel-In Parallel-Out):</strong> Data is loaded into ALL flip-flops instantly at the exact same time, and read out instantly. It's incredibly fast.</li>
          <li><strong>SIPO & PISO:</strong> Combinations where data enters slowly but leaves instantly (SIPO), or enters instantly but leaves slowly (PISO).</li>
        </ul>
      </>
    ),
    punjabi: (
      <>
        <div className="font-medium mb-2">ਰਜਿਸਟਰ ਕਈ ਫਲਿੱਪ-ਫਲੌਪਾਂ ਦੀ ਇੱਕ ਲਾਈਨ ਹੁੰਦੀ ਹੈ ਜੋ ਜ਼ਿਆਦਾ ਡਾਟਾ ਸਟੋਰ ਕਰਨ ਲਈ ਵਰਤੀ ਜਾਂਦੀ ਹੈ। ਸ਼ਿਫਟ ਰਜਿਸਟਰ ਇਸ ਡਾਟੇ ਨੂੰ ਖੱਬੇ ਜਾਂ ਸੱਜੇ ਖਿਸਕਾ (Shift) ਵੀ ਸਕਦਾ ਹੈ।</div>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li><strong>SISO:</strong> ਡਾਟਾ ਲਾਈਨ ਵਿੱਚ ਇੱਕ-ਇੱਕ ਕਰਕੇ ਅੰਦਰ ਜਾਂਦਾ ਹੈ ਅਤੇ ਇੱਕ-ਇੱਕ ਕਰਕੇ ਬਾਹਰ ਆਉਂਦਾ ਹੈ। ਇਹ ਸਭ ਤੋਂ ਹੌਲੀ ਤਰੀਕਾ ਹੈ।</li>
          <li><strong>PIPO:</strong> ਸਾਰਾ ਡਾਟਾ ਇਕੱਠਾ (ਇੱਕੋ ਸਮੇਂ) ਅੰਦਰ ਜਾਂਦਾ ਹੈ ਅਤੇ ਇਕੱਠਾ ਹੀ ਬਾਹਰ ਆਉਂਦਾ ਹੈ। ਇਹ ਸਭ ਤੋਂ ਤੇਜ਼ ਤਰੀਕਾ ਹੈ।</li>
          <li><strong>SIPO & PISO:</strong> ਇਹਨਾਂ ਵਿੱਚ ਇੱਕ ਪਾਸੇ ਡਾਟਾ ਹੌਲੀ (ਇੱਕ-ਇੱਕ ਕਰਕੇ) ਚੱਲਦਾ ਹੈ ਅਤੇ ਦੂਜੇ ਪਾਸੇ ਇਕੱਠਾ।</li>
        </ul>
      </>
    )
  },
  {
    id: 12,
    title: "COUNTERS",
    english: (
      <>
        <div className="mb-2"><span className="font-bold text-slate-900">What is a Counter?</span> It is a digital circuit made of flip-flops that counts the number of clock pulses it receives (0, 1, 2, 3...). Think of it like a digital stopwatch.</div>
        <ul className="list-disc pl-5 space-y-3 text-slate-700">
          <li><strong>Asynchronous (Ripple) Counter:</strong> In this setup, only the very first flip-flop is connected to the main clock. The second flip-flop has to wait for the first one to finish counting before it gets triggered. This waiting causes a delay that "ripples" down the line. It's easy to build, but slow.</li>
          <li><strong>Synchronous Counter:</strong> In this setup, EVERY single flip-flop is connected directly to the master clock. They all tick at the exact same millisecond. There is absolutely no waiting, so it is incredibly fast, but much more complicated to wire up.</li>
        </ul>
      </>
    ),
    punjabi: (
      <>
        <div className="font-medium mb-2">ਕਾਊਂਟਰ (Counter) ਇੱਕ ਅਜਿਹਾ ਸਰਕਟ ਹੈ ਜੋ ਫਲਿੱਪ-ਫਲੌਪਾਂ ਨਾਲ ਬਣਿਆ ਹੁੰਦਾ ਹੈ ਅਤੇ ਇਹ ਕਲੌਕ (Clock) ਦੀਆਂ ਧੜਕਣਾਂ ਨੂੰ ਗਿਣਦਾ ਹੈ।</div>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li><strong>Asynchronous ਕਾਊਂਟਰ:</strong> ਇਸ ਵਿੱਚ ਮੁੱਖ ਕਲੌਕ ਸਿਰਫ਼ ਪਹਿਲੇ ਫਲਿੱਪ-ਫਲੌਪ ਨੂੰ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ। ਅਗਲੇ ਫਲਿੱਪ-ਫਲੌਪ ਨੂੰ ਪਹਿਲੇ ਦੇ ਪੂਰਾ ਹੋਣ ਦਾ ਇੰਤਜ਼ਾਰ ਕਰਨਾ ਪੈਂਦਾ ਹੈ। ਇਸ ਕਾਰਨ ਇਹ ਹੌਲੀ ਕੰਮ ਕਰਦਾ ਹੈ।</li>
          <li><strong>Synchronous ਕਾਊਂਟਰ:</strong> ਇਸ ਵਿੱਚ ਸਾਰੇ ਫਲਿੱਪ-ਫਲੌਪਾਂ ਨੂੰ ਮੁੱਖ ਕਲੌਕ ਨਾਲ ਸਿੱਧਾ ਜੋੜਿਆ ਜਾਂਦਾ ਹੈ। ਸਾਰੇ ਇਕੱਠੇ ਕੰਮ ਕਰਦੇ ਹਨ, ਇਸ ਲਈ ਇਹ ਬਹੁਤ ਤੇਜ਼ ਹੁੰਦਾ ਹੈ।</li>
        </ul>
      </>
    )
  }
];

export default function CONotesPage() {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-indigo-200">
      
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
          className="pointer-events-auto flex items-center gap-2 bg-[#4f46e5] text-white px-5 py-2.5 rounded-full shadow-md hover:bg-[#4338ca] transition-colors text-sm font-bold tracking-wide"
        >
          <Printer className="w-4 h-4" /> Print Notes
        </button>
      </div>

      {/* Main Document */}
      <main className="max-w-5xl mx-auto bg-white min-h-screen shadow-[0_0_40px_rgba(0,0,0,0.05)] print:shadow-none print:w-full print:max-w-none px-6 py-20 md:px-12 md:py-24 mt-0 md:mt-8 print:mt-0 print:p-0">
        
        {/* Document Header */}
        <div className="text-center mb-12 print:mb-8">
          <div className="bg-[#eef2ff] text-[#4338ca] text-xs font-black uppercase tracking-[0.2em] py-2 px-6 rounded-full inline-block mb-8 print:border print:border-indigo-300">
            ANTIGRAVITY • BILINGUAL EDITION
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#0f172a] tracking-tight mb-4 leading-tight">
            COMPUTER ORGANIZATION
          </h1>
          <h2 className="text-xl md:text-2xl text-[#4f46e5] font-medium italic mb-8">
            Complete Master Notes (English + ਪੰਜਾਬੀ)
          </h2>
          <div className="flex items-center justify-center gap-6 text-xs font-black text-slate-400 uppercase tracking-widest">
            <span>Code: BCA-DSC-2(Maj)-201</span>
            <span>•</span>
            <span>Easy Language Guide</span>
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
                  <h3 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight uppercase pt-1">
                    {topic.title}
                  </h3>
                </div>
              </div>
              
              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 border border-slate-200 rounded-2xl p-6 bg-white shadow-sm print:shadow-none print:border-slate-300">
                
                {/* English Section */}
                <div>
                  <h4 className="text-[#4f46e5] font-bold mb-3 flex items-center gap-2 border-b border-slate-100 pb-2 text-sm uppercase tracking-wider">
                    Easy English Notes
                  </h4>
                  <div className="text-sm text-slate-800 leading-relaxed space-y-2">
                    {topic.english}
                  </div>
                </div>
                
                {/* Punjabi Section */}
                <div className="lg:border-l border-slate-100 lg:pl-6 pt-4 lg:pt-0 border-t lg:border-t-0">
                  <h4 className="text-[#2563eb] font-bold mb-3 flex items-center gap-2 border-b border-slate-100 pb-2 text-sm uppercase tracking-wider">
                    ਆਸਾਨ ਪੰਜਾਬੀ ਅਨੁਵਾਦ
                  </h4>
                  <div className="text-sm text-slate-800 leading-relaxed space-y-2 font-medium">
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
