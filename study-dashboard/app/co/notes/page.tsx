"use client";
import { Printer, ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const topicsData = [
  {
    id: 1,
    title: "NUMBER SYSTEMS",
    english: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900">What Is a Number System?</h4>
          <p>A number system is simply a way to count and represent values. You already know decimal (10 fingers = base 10). Computers use different bases because their circuits only understand ON (1) or OFF (0).</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">The 4 Systems You Need to Know</h4>
          <div className="space-y-2 mt-2">
            <div>
              <strong>Decimal (Base 10)</strong>
              <ul className="list-disc pl-5">
                <li>Digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9</li>
                <li>Real life: Everything you count daily — your age, money, marks.</li>
                <li>Position values: ...1000, 100, 10, 1</li>
              </ul>
            </div>
            <div>
              <strong>Binary (Base 2)</strong>
              <ul className="list-disc pl-5">
                <li>Digits: 0 and 1 only</li>
                <li>Why computers use it: A transistor is either ON (1) or OFF (0). That's it. No in-between.</li>
                <li>Real example: When you save a photo, it becomes millions of 0s and 1s stored in memory chips.</li>
                <li>Position values: ...8, 4, 2, 1</li>
              </ul>
            </div>
            <div>
              <strong>Octal (Base 8)</strong>
              <ul className="list-disc pl-5">
                <li>Digits: 0, 1, 2, 3, 4, 5, 6, 7</li>
                <li>Why it exists: Writing long binary numbers is error-prone. Every 3 binary bits = 1 octal digit. Shortcut!</li>
                <li>Real example: Old UNIX file permissions use octal (chmod 755 = 111 101 101 in binary).</li>
                <li>Position values: ...512, 64, 8, 1</li>
              </ul>
            </div>
            <div>
              <strong>Hexadecimal (Base 16)</strong>
              <ul className="list-disc pl-5">
                <li>Digits: 0–9, then A=10, B=11, C=12, D=13, E=14, F=15</li>
                <li>Why it exists: Every 4 binary bits = 1 hex digit. Even shorter!</li>
                <li>Real example: Your screen color #FF5733 is hexadecimal. Memory addresses like 0x0040AB are hex.</li>
                <li>Position values: ...4096, 256, 16, 1</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg">
          <h4 className="font-bold text-slate-900 mb-2">Conversion Methods (With Full Worked Examples)</h4>
          <div className="space-y-3 text-sm">
            <div>
              <strong>Method 1: Binary → Decimal</strong>
              <p>Write position weights (8,4,2,1), multiply each bit, add up.</p>
              <p><em>Example: (1101.101)₂ → Decimal</em></p>
              <ul className="list-disc pl-5">
                <li>Integer part: 1×8 + 1×4 + 0×2 + 1×1 = 8+4+0+1 = <strong>13</strong></li>
                <li>Fractional part: 1×(1/2) + 0×(1/4) + 1×(1/8) = 0.5+0+0.125 = <strong>0.625</strong></li>
                <li><strong>Answer: (13.625)₁₀</strong></li>
              </ul>
            </div>
            <div>
              <strong>Method 2: Decimal → Binary (Repeated Division)</strong>
              <p>Divide by 2, collect remainders bottom to top.</p>
              <p><em>Example: (25)₁₀ → Binary</em></p>
              <ul className="list-disc pl-5">
                <li>25÷2 = 12 remainder <strong>1</strong></li>
                <li>12÷2 = 6 remainder <strong>0</strong></li>
                <li>6÷2 = 3 remainder <strong>0</strong></li>
                <li>3÷2 = 1 remainder <strong>1</strong></li>
                <li>1÷2 = 0 remainder <strong>1</strong></li>
                <li>Read remainders upward: <strong>Answer: (11001)₂</strong></li>
              </ul>
            </div>
            <div>
              <strong>Method 3: Octal ↔ Binary (3 bits per digit)</strong>
              <p><em>Example: (237)₈ → Binary</em></p>
              <ul className="list-disc pl-5">
                <li>2 = 010, 3 = 011, 7 = 111</li>
                <li><strong>Answer: (010011111)₂</strong></li>
              </ul>
              <p className="mt-1"><em>Example: (10110110)₂ → Octal</em></p>
              <ul className="list-disc pl-5">
                <li>Group from right in 3s: 010 110 110</li>
                <li>010=2, 110=6, 110=6</li>
                <li><strong>Answer: (266)₈</strong></li>
              </ul>
            </div>
            <div>
              <strong>Method 4: Hex ↔ Binary (4 bits per digit)</strong>
              <p><em>Example: (3F)₁₆ → Decimal</em></p>
              <ul className="list-disc pl-5">
                <li>3×16 + 15×1 = 48 + 15 = <strong>63</strong></li>
              </ul>
              <p className="mt-1"><em>Example: (2AF)₁₆ → Decimal</em></p>
              <ul className="list-disc pl-5">
                <li>2×256 + 10×16 + 15×1 = 512+160+15 = <strong>687</strong></li>
              </ul>
              <p className="mt-1"><em>Example: (1110010)₂ → Hex</em></p>
              <ul className="list-disc pl-5">
                <li>Group in 4s from right: 0111 0010</li>
                <li>0111=7, 0010=2</li>
                <li><strong>Answer: (72)₁₆</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
    punjabi: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#2563eb]">ਨੰਬਰ ਸਿਸਟਮ ਕੀ ਹੈ?</h4>
          <p>ਇਹ ਗਿਣਤੀ ਕਰਨ ਅਤੇ ਮੁੱਲ ਦਰਸਾਉਣ ਦਾ ਇੱਕ ਤਰੀਕਾ ਹੈ। ਅਸੀਂ ਰੋਜ਼ਾਨਾ ਡੈਸੀਮਲ (base 10) ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਾਂ। ਕੰਪਿਊਟਰ ਵੱਖਰੇ ਬੇਸ ਵਰਤਦੇ ਹਨ ਕਿਉਂਕਿ ਉਨ੍ਹਾਂ ਦੇ ਸਰਕਟ ਸਿਰਫ਼ ON (1) ਅਤੇ OFF (0) ਸਮਝਦੇ ਹਨ।</p>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">4 ਸਿਸਟਮ ਜੋ ਤੁਹਾਨੂੰ ਪਤਾ ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ:</h4>
          <div className="space-y-2 mt-2">
            <div>
              <strong>ਡੈਸੀਮਲ (Base 10):</strong> ਅੰਕ 0 ਤੋਂ 9। ਅਸੀਂ ਰੋਜ਼ਾਨਾ ਇਸ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਾਂ (ਜਿਵੇਂ ਉਮਰ, ਪੈਸੇ, ਨੰਬਰ ਗਿਣਨ ਲਈ)।
            </div>
            <div>
              <strong>ਬਾਈਨਰੀ (Base 2):</strong> ਸਿਰਫ਼ 0 ਅਤੇ 1। ਕੰਪਿਊਟਰ ਦਾ ਹਰ ਟਰਾਂਜ਼ਿਸਟਰ ਜਾਂ ਤਾਂ ON (1) ਹੁੰਦਾ ਹੈ ਜਾਂ OFF (0)। ਜਦੋਂ ਤੁਸੀਂ ਫੋਟੋ ਸੇਵ ਕਰਦੇ ਹੋ, ਤਾਂ ਇਹ ਮੈਮਰੀ ਵਿੱਚ ਲੱਖਾਂ 0 ਅਤੇ 1 ਬਣ ਜਾਂਦੀ ਹੈ।
            </div>
            <div>
              <strong>ਓਕਟਲ (Base 8):</strong> ਅੰਕ 0-7। ਇਹ ਲੰਬੇ ਬਾਈਨਰੀ ਨੰਬਰਾਂ ਨੂੰ ਛੋਟਾ ਲਿਖਣ ਦਾ ਤਰੀਕਾ ਹੈ (ਹਰ 3 ਬਾਈਨਰੀ ਬਿੱਟ = 1 ਓਕਟਲ ਅੰਕ)। ਪੁਰਾਣੇ UNIX ਸਿਸਟਮਾਂ ਵਿੱਚ ਵਰਤਿਆ ਜਾਂਦਾ ਸੀ।
            </div>
            <div>
              <strong>ਹੈਕਸਾਡੈਸੀਮਲ (Base 16):</strong> ਅੰਕ 0-9 ਅਤੇ A-F। ਇਹ ਹੋਰ ਵੀ ਛੋਟਾ ਹੈ (ਹਰ 4 ਬਾਈਨਰੀ ਬਿੱਟ = 1 ਹੈਕਸਾ ਅੰਕ)। ਉਦਾਹਰਣ ਲਈ, ਰੰਗਾਂ ਦੇ ਕੋਡ (#FF5733) ਜਾਂ ਮੈਮਰੀ ਐਡਰੈੱਸ।
            </div>
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg">
          <h4 className="font-bold text-[#2563eb] mb-2">ਬਦਲਣ ਦੇ ਤਰੀਕੇ (Conversion Methods)</h4>
          <div className="space-y-2 text-sm">
            <p><strong>Method 1 (ਬਾਈਨਰੀ ਤੋਂ ਡੈਸੀਮਲ):</strong> ਭਾਰ (8,4,2,1) ਨਾਲ ਗੁਣਾ ਕਰਕੇ ਜੋੜੋ। ਉਦਾਹਰਣ: (1101.101)₂ = 8+4+0+1 + 0.5+0+0.125 = 13.625</p>
            <p><strong>Method 2 (ਡੈਸੀਮਲ ਤੋਂ ਬਾਈਨਰੀ):</strong> 2 ਨਾਲ ਵਾਰ-ਵਾਰ ਭਾਗ ਕਰਕੇ ਬਾਕੀ ਬਚੇ ਅੰਕਾਂ ਨੂੰ ਹੇਠਾਂ ਤੋਂ ਉੱਪਰ ਪੜ੍ਹੋ। ਉਦਾਹਰਣ: 25 ਨੂੰ ਬਦਲਣ 'ਤੇ 11001 ਆਵੇਗਾ।</p>
            <p><strong>Method 3 (ਓਕਟਲ ਅਤੇ ਬਾਈਨਰੀ):</strong> ਹਰ ਓਕਟਲ ਅੰਕ ਨੂੰ 3 ਬਿੱਟਾਂ ਵਿੱਚ ਬਦਲੋ। ਉਦਾਹਰਣ: 237 = 010 011 111</p>
            <p><strong>Method 4 (ਹੈਕਸਾ ਅਤੇ ਬਾਈਨਰੀ):</strong> ਹਰ ਹੈਕਸਾ ਅੰਕ ਨੂੰ 4 ਬਿੱਟਾਂ ਵਿੱਚ ਬਦਲੋ। ਉਦਾਹਰਣ: 3F = 3x16 + 15x1 = 63</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "BINARY ARITHMETIC",
    english: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900">Why Binary Arithmetic?</h4>
          <p>Everything your CPU does — adding your bank balance, rendering a game — ultimately comes down to binary addition. Subtraction, multiplication and division are all built from addition tricks.</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Binary Addition Rules</h4>
          <table className="w-full max-w-sm border-collapse border border-slate-300 text-sm mt-2">
            <thead>
              <tr className="bg-slate-100"><th className="border p-1">A</th><th className="border p-1">B</th><th className="border p-1">Sum</th><th className="border p-1">Carry</th></tr>
            </thead>
            <tbody className="text-center">
              <tr><td className="border p-1">0</td><td className="border p-1">0</td><td className="border p-1">0</td><td className="border p-1">0</td></tr>
              <tr><td className="border p-1">0</td><td className="border p-1">1</td><td className="border p-1">1</td><td className="border p-1">0</td></tr>
              <tr><td className="border p-1">1</td><td className="border p-1">0</td><td className="border p-1">1</td><td className="border p-1">0</td></tr>
              <tr><td className="border p-1">1</td><td className="border p-1">1</td><td className="border p-1">0</td><td className="border p-1">1</td></tr>
            </tbody>
          </table>
          <pre className="bg-slate-50 p-2 rounded mt-2 text-xs font-mono">
{`  1101
+ 1011
------
 11000   (carry ripples left)
(Decimal check: 13 + 11 = 24 = 11000)`}
          </pre>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Binary Subtraction (Direct Method)</h4>
          <p>Rules: 0-0=0, 1-0=1, 1-1=0, 0-1=1 (borrow 1 from next column)</p>
          <p className="mt-1 text-sm bg-slate-50 p-2 rounded">Example: (1101)₂ − (0100)₂ = (1001)₂ (Decimal: 13 - 4 = 9)</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Binary Multiplication (Shift-and-Add)</h4>
          <p>Like decimal multiplication but simpler — multiply by 0 (result=0) or by 1 (result= same number), then shift left.</p>
          <pre className="bg-slate-50 p-2 rounded mt-2 text-xs font-mono">
{`    101   (101 × 1, shift 0)
   101    (101 × 1, shift 1)
  -----
   1111   (Decimal check: 5 × 3 = 15)`}
          </pre>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Binary Division (Long Division)</h4>
          <p>Like decimal long division using subtraction. Go digit by digit, subtract divisor when possible, write 1 in quotient; else write 0.</p>
          <p className="mt-1 text-sm bg-slate-50 p-2 rounded">Example: (1100)₂ ÷ (10)₂ = (110)₂ (Decimal: 12 ÷ 2 = 6)</p>
        </div>
      </div>
    ),
    punjabi: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#2563eb]">ਬਾਈਨਰੀ ਹਿਸਾਬ ਕਿਉਂ?</h4>
          <p>ਕੰਪਿਊਟਰ ਦਾ CPU ਹਰ ਕੰਮ (ਬੈਂਕ ਬੈਲੰਸ ਜੋੜਨਾ ਜਾਂ ਗੇਮ ਚਲਾਉਣਾ) ਆਖਰਕਾਰ ਬਾਈਨਰੀ ਜੋੜ ਦੇ ਤਰੀਕਿਆਂ ਨਾਲ ਹੀ ਕਰਦਾ ਹੈ। ਘਟਾਓ, ਗੁਣਾ, ਅਤੇ ਭਾਗ ਸਾਰੇ ਜੋੜ ਦੀਆਂ ਤਕਨੀਕਾਂ ਤੋਂ ਹੀ ਬਣੇ ਹਨ।</p>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">ਨਿਯਮ ਅਤੇ ਤਰੀਕੇ:</h4>
          <div className="space-y-3 mt-2">
            <div>
              <strong>ਜੋੜ (Addition):</strong> ਨਿਯਮ 0+0=0, 0+1=1, 1+0=1, 1+1=0 (ਅਤੇ 1 ਹਾਸਲ/Carry ਅੱਗੇ ਜਾਂਦਾ ਹੈ)। 
              ਉਦਾਹਰਣ: 1101 + 1011 ਕਰਾਂਗੇ ਤਾਂ 11000 ਆਵੇਗਾ।
            </div>
            <div>
              <strong>ਘਟਾਓ (Subtraction):</strong> ਨਿਯਮ 0-0=0, 1-0=1, 1-1=0, ਅਤੇ 0-1 ਕਰਨ ਲਈ ਅਗਲੇ ਅੰਕ ਤੋਂ 1 ਉਧਾਰ (Borrow) ਲੈਣਾ ਪੈਂਦਾ ਹੈ। 
              ਉਦਾਹਰਣ: 1101 (13) ਵਿੱਚੋਂ 0100 (4) ਘਟਾਓ ਤਾਂ 1001 (9) ਆਵੇਗਾ।
            </div>
            <div>
              <strong>ਗੁਣਾ (Multiplication):</strong> ਬਿਲਕੁਲ ਆਮ ਗੁਣਾ ਵਾਂਗ। 0 ਨਾਲ ਗੁਣਾ ਕਰਨ 'ਤੇ 0 ਆਵੇਗਾ ਅਤੇ 1 ਨਾਲ ਗੁਣਾ ਕਰਨ 'ਤੇ ਉਹੀ ਨੰਬਰ ਆਵੇਗਾ। ਫਿਰ ਖੱਬੇ ਪਾਸੇ ਸ਼ਿਫਟ ਕਰਕੇ ਜੋੜ ਦਿਓ।
            </div>
            <div>
              <strong>ਭਾਗ (Division):</strong> ਇਹ ਵੀ ਆਮ ਲੰਬੀ ਭਾਗ (Long Division) ਵਾਂਗ ਹੀ ਹੁੰਦਾ ਹੈ, ਜਿਸ ਵਿੱਚ ਅਸੀਂ ਘਟਾਓ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਾਂ।
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "SIGNED NUMBERS (1'S AND 2'S COMPLEMENT)",
    english: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900">The Real Problem</h4>
          <p>Computers only have ADD circuits. They have no SUBTRACT circuit. So to do 9−5, a computer actually computes 9 + (negative 5). To represent negative numbers in binary, we use complementing.</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Method 1: Signed Magnitude</h4>
          <ul className="list-disc pl-5">
            <li>MSB (leftmost bit) = sign bit: 0 means positive, 1 means negative</li>
            <li>Remaining bits = actual magnitude</li>
            <li>Example (8-bit): +25 = <strong>0</strong>001 1001, −25 = <strong>1</strong>001 1001</li>
          </ul>
          <p className="mt-1 text-sm bg-red-50 text-red-800 p-2 rounded">Problem: Two representations of zero (00000000 and 10000000). Arithmetic is messy. Not used in modern computers.</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Method 2: 1's Complement</h4>
          <ul className="list-disc pl-5">
            <li>Positive number stays the same.</li>
            <li>Negative: Flip ALL bits (0→1, 1→0).</li>
            <li>Example: +5 = 0000 0101, −5 = <strong>1111 1010</strong></li>
          </ul>
          <p className="mt-1 text-sm bg-red-50 text-red-800 p-2 rounded">Problem: Still has two zeros (00000000 and 11111111).</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Method 3: 2's Complement (The Standard)</h4>
          <ul className="list-disc pl-5">
            <li>Positive: same binary.</li>
            <li>Negative: Flip all bits, then add 1.</li>
          </ul>
          <div className="bg-slate-50 p-2 rounded mt-2 text-sm">
            <p>Example: Represent −25 in 8-bit</p>
            <ul className="list-disc pl-5">
              <li>+25 = 0001 1001</li>
              <li>Flip bits: 1110 0110</li>
              <li>Add 1: <strong>1110 0111</strong> = (−25 in 2's complement)</li>
            </ul>
          </div>
          <p className="mt-2 font-bold">Why 2's complement is best:</p>
          <ul className="list-disc pl-5">
            <li>Only ONE representation of zero.</li>
            <li>Subtraction works automatically using addition.</li>
            <li>Range: 8-bit → −128 to +127</li>
          </ul>
          <div className="bg-slate-50 p-2 rounded mt-2 text-sm">
            <p><strong>Subtraction using 2's complement:</strong> To compute A − B: Find 2's complement of B, then add to A. Discard any extra carry bit.</p>
            <p>Example: 1100 − 1001</p>
            <ul className="list-disc pl-5">
              <li>2's comp of 1001 = 0111</li>
              <li>1100 + 0111 = 1<strong>0011</strong> (Discard carry) = <strong>0011</strong> (which is 3)</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    punjabi: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#2563eb]">ਅਸਲ ਸਮੱਸਿਆ ਕੀ ਹੈ?</h4>
          <p>ਕੰਪਿਊਟਰ ਕੋਲ ਸਿਰਫ਼ ਜੋੜ (ADD) ਕਰਨ ਵਾਲੇ ਸਰਕਟ ਹੁੰਦੇ ਹਨ। ਘਟਾਓ ਦਾ ਕੋਈ ਸਰਕਟ ਨਹੀਂ ਹੁੰਦਾ। 9-5 ਕਰਨ ਲਈ ਕੰਪਿਊਟਰ 9 ਵਿੱਚ (-5) ਜੋੜਦਾ ਹੈ। ਨੈਗੇਟਿਵ ਨੰਬਰਾਂ ਨੂੰ ਲਿਖਣ ਲਈ Complements ਵਰਤੇ ਜਾਂਦੇ ਹਨ।</p>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">ਨੈਗੇਟਿਵ ਨੰਬਰ ਲਿਖਣ ਦੇ ਤਰੀਕੇ:</h4>
          <div className="space-y-2 mt-2">
            <div>
              <strong>1. Signed Magnitude:</strong> ਸਭ ਤੋਂ ਖੱਬਾ ਅੰਕ ਨਿਸ਼ਾਨ ਲਈ ਹੁੰਦਾ ਹੈ (0 ਮਤਲਬ +, 1 ਮਤਲਬ -)। ਸਮੱਸਿਆ ਇਹ ਹੈ ਕਿ ਇਸ ਵਿੱਚ '0' ਨੂੰ ਦੋ ਤਰੀਕਿਆਂ ਨਾਲ ਲਿਖਿਆ ਜਾ ਸਕਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਹਿਸਾਬ ਕਰਨਾ ਔਖਾ ਹੋ ਜਾਂਦਾ ਹੈ।
            </div>
            <div>
              <strong>2. 1's Complement:</strong> ਪਲੱਸ (+) ਵਾਲੇ ਨੰਬਰ ਉਹੀ ਰਹਿੰਦੇ ਹਨ, ਪਰ ਮਾਈਨਸ (-) ਵਾਲੇ ਨੰਬਰਾਂ ਦੇ ਸਾਰੇ ਅੰਕਾਂ ਨੂੰ ਉਲਟਾ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ (0 ਨੂੰ 1, 1 ਨੂੰ 0)। ਇਸ ਵਿੱਚ ਵੀ '0' ਦੋ ਤਰ੍ਹਾਂ ਦੀ ਹੁੰਦੀ ਹੈ।
            </div>
            <div>
              <strong>3. 2's Complement (ਸਭ ਤੋਂ ਵਧੀਆ ਤਰੀਕਾ):</strong> ਪਹਿਲਾਂ 1's complement ਕੱਢੋ (ਬਿੱਟਸ ਉਲਟਾਓ) ਅਤੇ ਫਿਰ ਅਖੀਰ ਵਿੱਚ 1 ਜੋੜ ਦਿਓ। 
              <br/><br/><strong>ਇਹ ਸਭ ਤੋਂ ਵਧੀਆ ਕਿਉਂ ਹੈ?</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>ਇਸ ਵਿੱਚ '0' ਲਿਖਣ ਦਾ ਸਿਰਫ਼ ਇੱਕ ਹੀ ਤਰੀਕਾ ਹੈ।</li>
                <li>ਇਸ ਨਾਲ ਜੋੜ ਵਾਲੇ ਸਰਕਟ ਰਾਹੀਂ ਹੀ ਆਪਣੇ ਆਪ ਘਟਾਓ (Subtraction) ਹੋ ਜਾਂਦੀ ਹੈ। ਸਾਰੇ ਆਧੁਨਿਕ ਕੰਪਿਊਟਰ ਇਸੇ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਨ।</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "INFORMATION REPRESENTATION (Fixed & Floating Point)",
    english: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900">Fixed-Point Numbers</h4>
          <p>The binary point is at a fixed, predetermined position. Simple but limited range.</p>
          <p className="mt-1 text-sm bg-slate-50 p-2 rounded">Example: If point is after bit 4: 00101100 = 0010.1100 = 2.75 in decimal.<br/>Problem: Can't represent very large or very small numbers (like distance to the Sun).</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Floating-Point Numbers (IEEE 754)</h4>
          <p>Like scientific notation (6.022 × 10²³). The binary point "floats" to wherever it needs to be.</p>
          
          <div className="mt-3">
            <strong>Single Precision (32 bits):</strong>
            <table className="w-full max-w-lg border-collapse border border-slate-300 text-sm mt-1">
              <thead>
                <tr className="bg-slate-100"><th className="border p-2">Sign (1 bit)</th><th className="border p-2">Exponent (8 bits)</th><th className="border p-2">Mantissa (23 bits)</th></tr>
              </thead>
              <tbody className="text-center">
                <tr><td className="border p-2">0=pos, 1=neg</td><td className="border p-2">Stored with bias of 127</td><td className="border p-2">Fractional part after "1."</td></tr>
              </tbody>
            </table>
            <p className="mt-2 text-sm font-mono">Formula: Value = (−1)^Sign × 1.Mantissa × 2^(Exponent − 127)</p>
          </div>

          <div className="bg-slate-50 p-3 rounded mt-3 text-sm">
            <p><strong>Real example: Float 0.5</strong></p>
            <ul className="list-disc pl-5">
              <li>Sign = 0 (positive)</li>
              <li>0.5 = 1.0 × 2⁻¹, so Exponent = −1+127 = 126 = 01111110</li>
              <li>Mantissa = 000...0 (the .0 after 1.)</li>
              <li><strong>Final: 0 01111110 00000000000000000000000</strong></li>
            </ul>
          </div>
          <p className="mt-3"><strong>Double Precision (64 bits):</strong> 1 sign + 11 exponent (bias 1023) + 52 mantissa.</p>
        </div>
      </div>
    ),
    punjabi: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#2563eb]">ਦਸ਼ਮਲਵ (Decimal point) ਵਾਲੇ ਨੰਬਰ ਕਿਵੇਂ ਸੇਵ ਕੀਤੇ ਜਾਂਦੇ ਹਨ?</h4>
          <p>ਕੰਪਿਊਟਰ ਵਿੱਚ ਦਸ਼ਮਲਵ ਵਾਲੇ ਨੰਬਰ ਸੇਵ ਕਰਨ ਦੇ ਦੋ ਤਰੀਕੇ ਹਨ:</p>
        </div>
        <div className="space-y-3 mt-2">
          <div>
            <strong>1. Fixed-Point Numbers:</strong> ਇਸ ਵਿੱਚ ਪੁਆਇੰਟ ਦੀ ਜਗ੍ਹਾ ਪੱਕੀ (fixed) ਹੁੰਦੀ ਹੈ (ਜਿਵੇਂ ਕਿ ਚੌਥੇ ਅੰਕ ਤੋਂ ਬਾਅਦ)। ਇਹ ਤਰੀਕਾ ਸੌਖਾ ਹੈ ਪਰ ਇਸ ਨਾਲ ਅਸੀਂ ਬਹੁਤ ਵੱਡੇ (ਜਿਵੇਂ ਧਰਤੀ ਤੋਂ ਸੂਰਜ ਦੀ ਦੂਰੀ) ਜਾਂ ਬਹੁਤ ਛੋਟੇ ਨੰਬਰ ਸੇਵ ਨਹੀਂ ਕਰ ਸਕਦੇ।
          </div>
          <div>
            <strong>2. Floating-Point Numbers (IEEE 754):</strong> ਇਹ ਸਾਇੰਟੀਫਿਕ ਨੋਟੇਸ਼ਨ (ਜਿਵੇਂ 6.022 × 10²³) ਵਾਂਗ ਕੰਮ ਕਰਦਾ ਹੈ। ਇਸ ਵਿੱਚ ਪੁਆਇੰਟ ਆਪਣੀ ਲੋੜ ਅਨੁਸਾਰ ਅੱਗੇ-ਪਿੱਛੇ ਜਾ ਸਕਦਾ ਹੈ (float ਕਰਦਾ ਹੈ)।
          </div>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">Floating-Point ਦੇ ਦੋ ਫਾਰਮੈਟ:</h4>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Single Precision (32 bits):</strong> ਇਸ ਵਿੱਚ 1 ਬਿੱਟ ਨਿਸ਼ਾਨ (+ ਜਾਂ -) ਲਈ ਹੁੰਦੀ ਹੈ, 8 ਬਿੱਟਾਂ Exponent (ਪਾਵਰ) ਲਈ (bias 127 ਨਾਲ), ਅਤੇ 23 ਬਿੱਟਾਂ Mantissa (ਨੰਬਰ ਦਾ ਬਾਕੀ ਹਿੱਸਾ) ਲਈ ਹੁੰਦੀਆਂ ਹਨ।</li>
            <li><strong>Double Precision (64 bits):</strong> ਇਹ ਹੋਰ ਵੀ ਵੱਡੇ ਨੰਬਰ ਸੇਵ ਕਰਨ ਲਈ ਹੈ। ਇਸ ਵਿੱਚ 1 Sign, 11 Exponent, ਅਤੇ 52 Mantissa ਬਿੱਟਾਂ ਹੁੰਦੀਆਂ ਹਨ।</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "COMPUTER CODES",
    english: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900">BCD (Binary Coded Decimal)</h4>
          <p>Each decimal digit (0–9) is separately converted to its 4-bit binary equivalent.</p>
          <p className="text-sm mt-1">Note: Codes 1010 to 1111 (10–15) are INVALID in BCD.</p>
          <p className="mt-1 text-sm bg-slate-50 p-2 rounded">Example: Convert (47)₁₀ to BCD → 4=0100, 7=0111 → <strong>0100 0111</strong></p>
          <p className="text-sm">Real use: Digital clocks, calculators, cash registers.</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Excess-3 Code (XS-3)</h4>
          <p>Take the BCD value and add 3 (0011) to it.</p>
          <p className="mt-1 text-sm bg-slate-50 p-2 rounded">Example: Convert (49)₁₀ to Excess-3<br/>4 in BCD=0100 (+3) = 0111, 9 in BCD=1001 (+3) = 1100 → <strong>0111 1100</strong></p>
          <p className="text-sm">Key property: <strong>Self-complementing</strong> — very useful for subtraction without extra circuitry.</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Gray Code</h4>
          <p>Only ONE bit changes between consecutive numbers. Prevents errors during transitions.</p>
          <div className="mt-1 text-sm bg-slate-50 p-2 rounded">
            <strong>Binary → Gray:</strong> MSB stays same. Each other bit = XOR of corresponding binary bit and its left neighbor.
          </div>
          <p className="text-sm">Real use: Shaft encoders in motors — prevents wrong readings during rotation.</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">ASCII & EBCDIC</h4>
          <ul className="list-disc pl-5 text-sm">
            <li><strong>ASCII:</strong> 7-bit code = 128 characters (A-Z, a-z, 0-9). Example: 'A' = 65 = 1000001. Used in every PC keyboard.</li>
            <li><strong>EBCDIC:</strong> 8-bit code = 256 characters. Invented by IBM, used only in large bank/government mainframes.</li>
          </ul>
        </div>
      </div>
    ),
    punjabi: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#2563eb]">ਕੰਪਿਊਟਰ ਅੱਖਰਾਂ ਅਤੇ ਨੰਬਰਾਂ ਨੂੰ ਕਿਵੇਂ ਸਮਝਦਾ ਹੈ?</h4>
          <div className="space-y-3 mt-2">
            <div>
              <strong>1. BCD (Binary Coded Decimal):</strong> ਇਸ ਵਿੱਚ ਡੈਸੀਮਲ ਦੇ ਹਰ ਅੰਕ ਨੂੰ ਅਲੱਗ ਤੋਂ 4-ਬਿੱਟ ਬਾਈਨਰੀ ਵਿੱਚ ਬਦਲਿਆ ਜਾਂਦਾ ਹੈ। (10 ਤੋਂ 15 ਤੱਕ ਦੇ ਨੰਬਰ ਇਸ ਵਿੱਚ ਗਲਤ/invalid ਮੰਨੇ ਜਾਂਦੇ ਹਨ)। ਡਿਜੀਟਲ ਘੜੀਆਂ ਅਤੇ ਕੈਲਕੁਲੇਟਰਾਂ ਵਿੱਚ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।
              <br/><span className="text-sm text-slate-600">ਉਦਾਹਰਣ: 47 → 4=0100, 7=0111 → 0100 0111</span>
            </div>
            <div>
              <strong>2. Excess-3 Code (XS-3):</strong> BCD ਕੱਢ ਕੇ ਉਸ ਵਿੱਚ 3 (0011) ਜੋੜਿਆ ਜਾਂਦਾ ਹੈ। ਇਹ "Self-complementing" ਹੈ, ਜੋ ਘਟਾਓ ਕਰਨ ਵਾਲੇ ਸਰਕਟਾਂ ਵਿੱਚ ਬਹੁਤ ਮਦਦਗਾਰ ਹੈ।
            </div>
            <div>
              <strong>3. Gray Code:</strong> ਇਸ ਵਿੱਚ ਲਗਾਤਾਰ ਆਉਣ ਵਾਲੇ ਨੰਬਰਾਂ ਵਿੱਚ ਸਿਰਫ਼ 1 ਬਿੱਟ ਹੀ ਬਦਲਦੀ ਹੈ। ਇਸ ਨਾਲ ਮੋਟਰਾਂ ਅਤੇ ਹਾਰਡਵੇਅਰ ਮਸ਼ੀਨਾਂ ਵਿੱਚ ਗਲਤੀਆਂ ਨਹੀਂ ਹੁੰਦੀਆਂ।
            </div>
            <div>
              <strong>4. ASCII ਅਤੇ EBCDIC:</strong> 
              <br/>- <strong>ASCII:</strong> 7-ਬਿੱਟ ਦਾ ਕੋਡ ਹੈ। ਅੰਗਰੇਜ਼ੀ ਦੇ ਅੱਖਰ (A-Z) ਅਤੇ ਨੰਬਰ ਲਿਖਣ ਲਈ। ਜਿਵੇਂ 'A' ਦਾ ਕੋਡ 65 ਹੁੰਦਾ ਹੈ। ਸਾਡੇ ਕੀ-ਬੋਰਡ ਇਸੇ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਨ।
              <br/>- <strong>EBCDIC:</strong> 8-ਬਿੱਟ ਕੋਡ ਹੈ ਜੋ IBM ਨੇ ਬਣਾਇਆ ਸੀ। ਇਹ ਸਿਰਫ਼ ਵੱਡੇ ਬੈਂਕਾਂ ਦੇ ਸਰਵਰਾਂ (Mainframes) ਵਿੱਚ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "ERROR DETECTION AND CORRECTION CODES",
    english: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900">Why Errors Happen</h4>
          <p>Data travels through wires, Wi-Fi, USB. Electrical noise can flip a 0 to 1 or 1 to 0. We need ways to catch (detect) and fix (correct) these errors.</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Detection Methods</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Parity Bit:</strong> Add one extra bit to make the total count of 1s either EVEN or ODD. Detects odd number of errors, but can't correct. (E.g. Data 1011001 has four 1s. For Even Parity, add 0 → 1011001<strong>0</strong>).</li>
            <li><strong>Block Parity (2D):</strong> Arrange data in a grid. Calculate parity for each row AND column. Can LOCATE the error but not fix it.</li>
            <li><strong>Checksum:</strong> Used in internet (TCP/IP). Add data segments, transmit sum. Receiver checks if totals match.</li>
            <li><strong>CRC (Cyclic Redundancy Check):</strong> Most powerful detection. Data is treated as a polynomial, divided by a generator. Remainder is checked. Used in Hard Drives and Ethernet.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Hamming Code (Error Correction)</h4>
          <p>The smart method — not just detects but CORRECTS single-bit errors automatically.</p>
          <ul className="list-disc pl-5">
            <li>Insert parity bits at powers of 2 positions: 1, 2, 4, 8...</li>
            <li>Formula for parity bits needed: 2^p ≥ d + p + 1</li>
          </ul>
          <div className="bg-slate-50 p-3 rounded mt-2 text-sm">
            <p><strong>Full Example: Encode data 1011 with even parity</strong></p>
            <ul className="list-disc pl-5">
              <li>4 data bits → need 3 parity bits (2³ = 8 ≥ 4+3+1=8)</li>
              <li>Total 7 bits. Positions: 1(P1), 2(P2), 3(D1=1), 4(P4), 5(D2=0), 6(D3=1), 7(D4=1)</li>
              <li>P1 covers 1,3,5,7 → P1 ⊕ 1 ⊕ 0 ⊕ 1 = 0 → P1=0</li>
              <li>P2 covers 2,3,6,7 → P2 ⊕ 1 ⊕ 1 ⊕ 1 = 0 → P2=1</li>
              <li>P4 covers 4,5,6,7 → P4 ⊕ 0 ⊕ 1 ⊕ 1 = 0 → P4=0</li>
              <li><strong>Final codeword: 0 1 1 0 0 1 1</strong></li>
            </ul>
            <p className="mt-2 text-green-700"><strong>Correction:</strong> At receiver, recalculate parities. If result (syndrome) = 101 (binary 5), it means bit 5 is wrong! Just flip it.</p>
          </div>
        </div>
      </div>
    ),
    punjabi: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#2563eb]">ਖਰਾਬ ਡਾਟਾ ਨੂੰ ਲੱਭਣਾ ਅਤੇ ਠੀਕ ਕਰਨਾ</h4>
          <p>ਜਦੋਂ ਡਾਟਾ ਤਾਰਾਂ ਜਾਂ Wi-Fi ਰਾਹੀਂ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਬਿਜਲੀ ਦੀ ਗੜਬੜ (Noise) ਕਾਰਨ 0 ਦਾ 1 ਬਣ ਸਕਦਾ ਹੈ। ਸਾਨੂੰ ਇਹ ਗਲਤੀਆਂ ਲੱਭਣ ਅਤੇ ਠੀਕ ਕਰਨ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ।</p>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">ਗਲਤੀਆਂ ਲੱਭਣ ਦੇ ਤਰੀਕੇ:</h4>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Parity Bit:</strong> ਅਖੀਰ ਵਿੱਚ ਇੱਕ ਹੋਰ ਬਿੱਟ ਲਾਈ ਜਾਂਦੀ ਹੈ ਤਾਂ ਜੋ 1 ਦੀ ਗਿਣਤੀ ਹਮੇਸ਼ਾ ਜਿਸਤ (Even) ਜਾਂ ਟਾਂਕ (Odd) ਰਹੇ। ਇਸ ਨਾਲ ਗਲਤੀ ਦਾ ਪਤਾ ਲੱਗ ਜਾਂਦਾ ਹੈ, ਪਰ ਠੀਕ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਦਾ।</li>
            <li><strong>CRC ਅਤੇ Checksum:</strong> ਇੰਟਰਨੈੱਟ, USB ਅਤੇ ਹਾਰਡ ਡਰਾਈਵਾਂ ਵਿੱਚ ਡਾਟਾ ਸਹੀ ਸਲਾਮਤ ਪਹੁੰਚਣ ਦੀ ਜਾਂਚ ਕਰਨ ਲਈ ਸਭ ਤੋਂ ਤਾਕਤਵਰ ਤਰੀਕੇ ਹਨ।</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">Hamming Code (ਗਲਤੀ ਠੀਕ ਕਰਨਾ):</h4>
          <p>ਇਹ ਸਭ ਤੋਂ ਸਮਝਦਾਰ ਤਰੀਕਾ ਹੈ। ਇਹ ਗਲਤੀ ਸਿਰਫ਼ ਲੱਭਦਾ ਹੀ ਨਹੀਂ, ਸਗੋਂ ਉਸਨੂੰ ਆਪਣੇ ਆਪ ਠੀਕ (Correct) ਵੀ ਕਰ ਦਿੰਦਾ ਹੈ।</p>
          <ul className="list-disc pl-5 mt-2">
            <li>ਇਹ ਚੈਕਿੰਗ ਬਿੱਟਸ ਨੂੰ ਖਾਸ ਜਗ੍ਹਾ 'ਤੇ ਰੱਖਦਾ ਹੈ (ਜਿਵੇਂ 1, 2, 4, 8 ਨੰਬਰ ਪੁਜ਼ੀਸ਼ਨਾਂ 'ਤੇ)।</li>
            <li>ਜੇਕਰ ਡਾਟਾ ਪ੍ਰਾਪਤ ਕਰਨ ਵਾਲੇ ਨੂੰ ਕੋਈ ਗਲਤੀ ਮਿਲਦੀ ਹੈ, ਤਾਂ ਇਹ ਤਰੀਕਾ ਸਹੀ ਪੁਜ਼ੀਸ਼ਨ ਦੱਸ ਦਿੰਦਾ ਹੈ (ਜਿਵੇਂ ਕਿ 5ਵੇਂ ਨੰਬਰ ਵਾਲੀ ਬਿੱਟ ਗਲਤ ਹੈ)। ਫਿਰ ਕੰਪਿਊਟਰ ਉਸ 5ਵੇਂ ਬਿੱਟ ਨੂੰ ਉਲਟਾ ਕੇ ਠੀਕ ਕਰ ਲੈਂਦਾ ਹੈ।</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: "LOGIC GATE CHARACTERISTICS",
    english: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900">What Are Logic Gates?</h4>
          <p>Physical electronic components (tiny chips) that make yes/no decisions. They are the building blocks of every computer circuit.</p>
        </div>
        <div className="space-y-3">
          <div>
            <h4 className="font-bold text-slate-900">Fan-In</h4>
            <p>The maximum number of INPUTS a gate can handle reliably. If a 4-input AND gate connects to 5 inputs, the voltage drops and output is garbage.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900">Fan-Out</h4>
            <p>The maximum number of OTHER gate inputs that one gate's output can drive simultaneously. (TTL fan-out is usually 10).</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900">Propagation Delay (tₚ)</h4>
            <p>The time gap between when an input changes and when the output actually responds (in nanoseconds). Sets your CPU's max clock speed! Faster gates = faster computer.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900">Power Dissipation</h4>
            <p>Electrical power a gate converts into heat. Dynamic power increases with frequency (which is why your phone gets hot when playing heavy games).</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900">Noise Margin</h4>
            <p>The gate's ability to tolerate electrical interference (noise spikes) without mistaking a 0 for a 1.</p>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">IC Logic Families</h4>
          <ul className="list-disc pl-5 text-sm">
            <li><strong>TTL (7400 series):</strong> Fast, medium power (10mW). Common in labs.</li>
            <li><strong>CMOS (4000 series):</strong> Very low power, used in mobile phones/watches.</li>
            <li><strong>ECL:</strong> Fastest but uses very high power.</li>
          </ul>
        </div>
      </div>
    ),
    punjabi: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#2563eb]">ਲੋਜਿਕ ਗੇਟਾਂ ਦੀਆਂ ਖਾਸੀਅਤਾਂ (Properties)</h4>
          <p>ਲੋਜਿਕ ਗੇਟ ਛੋਟੀਆਂ ਇਲੈਕਟ੍ਰਾਨਿਕ ਚਿੱਪਾਂ ਹੁੰਦੀਆਂ ਹਨ ਜੋ ਫੈਸਲੇ ਕਰਦੀਆਂ ਹਨ। ਕੰਪਿਊਟਰ ਇਹਨਾਂ ਤੋਂ ਹੀ ਬਣਿਆ ਹੈ। ਇਹਨਾਂ ਦੀਆਂ ਮੁੱਖ ਖਾਸੀਅਤਾਂ ਹਨ:</p>
        </div>
        <div className="space-y-3 mt-2">
          <div>
            <strong>1. Fan-In:</strong> ਇੱਕ ਗੇਟ ਵਿੱਚ ਵੱਧ ਤੋਂ ਵੱਧ ਕਿੰਨੀਆਂ ਇਨਪੁੱਟ ਤਾਰਾਂ (Inputs) ਲੱਗ ਸਕਦੀਆਂ ਹਨ ਬਿਨਾਂ ਸਿਗਨਲ ਖਰਾਬ ਕੀਤੇ।
          </div>
          <div>
            <strong>2. Fan-Out:</strong> ਇੱਕ ਗੇਟ ਦਾ ਆਉਟਪੁੱਟ ਅੱਗੇ ਕਿੰਨੇ ਹੋਰ ਗੇਟਾਂ ਨੂੰ ਚਲਾ ਸਕਦਾ ਹੈ। ਜੇਕਰ ਲਿਮਿਟ 10 ਹੈ, ਤਾਂ 11ਵਾਂ ਗੇਟ ਲਗਾਉਣ 'ਤੇ ਕਰੰਟ ਘੱਟ ਜਾਵੇਗਾ।
          </div>
          <div>
            <strong>3. Propagation Delay:</strong> ਸਿਗਨਲ ਨੂੰ ਗੇਟ ਦੇ ਅੰਦਰੋਂ ਲੰਘ ਕੇ ਬਾਹਰ ਆਉਣ ਵਿੱਚ ਕਿੰਨਾ ਸਮਾਂ ਲੱਗਦਾ ਹੈ। ਇਹ ਸਮਾਂ ਨੈਨੋ-ਸੈਕਿੰਡਸ ਵਿੱਚ ਹੁੰਦਾ ਹੈ। ਘੱਟ ਸਮਾਂ = ਤੇਜ਼ ਕੰਪਿਊਟਰ।
          </div>
          <div>
            <strong>4. Power Dissipation:</strong> ਗੇਟ ਕਿੰਨੀ ਬਿਜਲੀ ਖਾਂਦਾ ਹੈ ਅਤੇ ਗਰਮੀ ਛੱਡਦਾ ਹੈ। (ਜਦੋਂ ਕੰਪਿਊਟਰ ਤੇਜ਼ ਚੱਲਦਾ ਹੈ, ਤਾਂ ਗੇਟ ਜ਼ਿਆਦਾ ਬਿਜਲੀ ਖਾ ਕੇ ਗਰਮ ਹੋ ਜਾਂਦੇ ਹਨ)।
          </div>
          <div>
            <strong>5. Noise Margin:</strong> ਗੇਟ ਬਾਹਰੋਂ ਆਉਣ ਵਾਲੇ ਖਰਾਬ ਸਿਗਨਲ (Noise) ਨੂੰ ਕਿੰਨਾ ਬਰਦਾਸ਼ਤ ਕਰ ਸਕਦਾ ਹੈ ਬਿਨਾਂ ਗਲਤੀ ਕੀਤੇ।
          </div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: "BOOLEAN ALGEBRA & K-MAPS",
    english: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900">Boolean Laws</h4>
          <p className="text-sm">Identity (A+0=A), Null (A+1=1), Idempotent (A+A=A), Complement (A+A'=1).</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">De Morgan's Theorems (The Most Important)</h4>
          <ul className="list-disc pl-5">
            <li><strong>Theorem 1:</strong> (A + B)' = A' · B'</li>
            <li><strong>Theorem 2:</strong> (A · B)' = A' + B'</li>
            <li><em>Memory trick: "Break the bar over the whole thing, change the sign (+ becomes ·)"</em></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Minterms and Maxterms</h4>
          <ul className="list-disc pl-5">
            <li><strong>Minterm (SOP):</strong> A product (AND) term giving output = 1. (e.g. F = A'B + AB)</li>
            <li><strong>Maxterm (POS):</strong> A sum (OR) term giving output = 0.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">K-Map Simplification (Karnaugh Map)</h4>
          <p>A visual grid method to simplify Boolean expressions without algebra.</p>
          <ul className="list-disc pl-5 text-sm mt-1">
            <li>Label rows/cols in Gray code order: 00, 01, <strong>11</strong>, 10</li>
            <li>Place 1s in cells corresponding to minterms.</li>
            <li>Circle groups of 1s in sizes 1, 2, 4, 8, 16. Groups must be rectangular and CAN wrap around edges.</li>
            <li>Make each group as large as possible. Variables that change within a group drop out!</li>
          </ul>
          <pre className="bg-slate-50 p-2 rounded mt-2 text-xs font-mono">
{`Example: F(A,B,C,D) = Σ(0,1,8,9)
         CD
AB    00  01  11  10
00  [  1 | 1 | 0 | 0 ]
01  [  0 | 0 | 0 | 0 ]
11  [  0 | 0 | 0 | 0 ]
10  [  1 | 1 | 0 | 0 ]

Group: {0,1,8,9} — a quad across top & bottom edges!
Result: B'C'`}
          </pre>
        </div>
      </div>
    ),
    punjabi: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#2563eb]">ਬੂਲੀਅਨ ਅਲਜਬਰਾ ਅਤੇ De Morgan's ਨਿਯਮ</h4>
          <p>ਇਹ ਨਿਯਮ ਵੱਡੇ ਸਰਕਟਾਂ ਦੀਆਂ ਸਮੀਕਰਨਾਂ ਨੂੰ ਛੋਟਾ ਕਰਨ ਲਈ ਵਰਤੇ ਜਾਂਦੇ ਹਨ।</p>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>De Morgan ਦਾ ਨਿਯਮ:</strong> ਜਦੋਂ ਅਸੀਂ ਉੱਪਰਲੀ ਲਾਈਨ (NOT Bar) ਨੂੰ ਤੋੜਦੇ ਹਾਂ, ਤਾਂ ਵਿਚਲਾ ਨਿਸ਼ਾਨ ਬਦਲ ਜਾਂਦਾ ਹੈ (AND ਦਾ OR ਬਣ ਜਾਂਦਾ ਹੈ ਅਤੇ OR ਦਾ AND)।<br/>ਉਦਾਹਰਣ: (A + B)' ਬਣ ਜਾਂਦਾ ਹੈ A' · B'</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">SOP ਅਤੇ POS:</h4>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Minterm (SOP - Sum of Products):</strong> ਜਦੋਂ ਅਸੀਂ ਉਹ ਸਮੀਕਰਨ ਲਿਖਦੇ ਹਾਂ ਜਿੱਥੇ ਆਉਟਪੁੱਟ 1 ਹੁੰਦੀ ਹੈ।</li>
            <li><strong>Maxterm (POS):</strong> ਜਦੋਂ ਆਉਟਪੁੱਟ 0 ਹੁੰਦੀ ਹੈ।</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">K-Map (Karnaugh Map):</h4>
          <p>ਵੱਡੀਆਂ ਸਮੀਕਰਨਾਂ ਨੂੰ ਹੱਲ ਕੀਤੇ ਬਿਨਾਂ, ਨਕਸ਼ੇ ਰਾਹੀਂ ਛੋਟਾ ਕਰਨ ਦਾ ਤਰੀਕਾ।</p>
          <ul className="list-disc pl-5 mt-2">
            <li>ਇਸਦੇ ਡੱਬਿਆਂ (Cells) 'ਤੇ Gray Code ਲਿਖਿਆ ਹੁੰਦਾ ਹੈ (00, 01, 11, 10)। ਧਿਆਨ ਦਿਓ ਕਿ 11 ਪਹਿਲਾਂ ਆਉਂਦਾ ਹੈ!</li>
            <li>ਡੱਬਿਆਂ ਵਿੱਚ ਲਿਖੇ '1' ਦੇ ਵੱਡੇ ਤੋਂ ਵੱਡੇ ਗਰੁੱਪ ਬਣਾਏ ਜਾਂਦੇ ਹਨ। ਗਰੁੱਪ ਦਾ ਸਾਈਜ਼ 1, 2, 4, 8 ਜਾਂ 16 ਹੀ ਹੋ ਸਕਦਾ ਹੈ।</li>
            <li>ਗਰੁੱਪ ਨਕਸ਼ੇ ਦੇ ਕਿਨਾਰਿਆਂ ਤੋਂ ਮੁੜ ਕੇ (wrap around) ਵੀ ਬਣ ਸਕਦੇ ਹਨ।</li>
            <li>ਜੋ ਅੱਖਰ ਗਰੁੱਪ ਦੇ ਅੰਦਰ ਬਦਲ ਜਾਂਦਾ ਹੈ (0 ਤੋਂ 1), ਉਹ ਕੱਟਿਆ ਜਾਂਦਾ ਹੈ ਅਤੇ ਬਾਕੀ ਬਚਿਆ ਹੋਇਆ ਛੋਟਾ ਜਵਾਬ ਮਿਲ ਜਾਂਦਾ ਹੈ।</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 9,
    title: "UNIVERSAL GATES (NAND and NOR)",
    english: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900">What Makes a Gate "Universal"?</h4>
          <p>A gate is universal if you can build ANY other logic gate using ONLY that type of gate. NAND and NOR are the only two universal gates.</p>
          <p className="mt-1 text-sm bg-slate-50 p-2 rounded">Real example: Chip manufacturers build circuits using only NAND gates because they only need to make ONE type of chip on their factory line. Simpler, cheaper.</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Implementing Gates Using Only NAND</h4>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong>NOT from NAND:</strong> Connect both inputs of a 2-input NAND to the same signal A. → (A·A)' = A'</li>
            <li><strong>AND from NAND:</strong> NAND output → feed into NOT-NAND. → ((AB)')' = AB</li>
            <li><strong>OR from NAND:</strong> Invert both inputs separately (using NOT-NANDs), then NAND them. → (A'·B')' = A+B</li>
            <li><strong>XOR from NAND:</strong> Requires 4 NAND gates.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Implementing Gates Using Only NOR</h4>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong>NOT from NOR:</strong> NOR(A,A) = (A+A)' = A'</li>
            <li><strong>OR from NOR:</strong> NOR output → NOT-NOR. → ((A+B)')' = A+B</li>
            <li><strong>AND from NOR:</strong> Invert both inputs, then NOR them. → (A'+B')' = A·B</li>
          </ul>
        </div>
      </div>
    ),
    punjabi: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#2563eb]">ਯੂਨੀਵਰਸਲ ਗੇਟ (Universal Gates) ਕੀ ਹਨ?</h4>
          <p>NAND ਅਤੇ NOR ਨੂੰ ਯੂਨੀਵਰਸਲ ਗੇਟ ਕਿਹਾ ਜਾਂਦਾ ਹੈ, ਕਿਉਂਕਿ ਤੁਸੀਂ ਸਿਰਫ਼ NAND ਜਾਂ ਸਿਰਫ਼ NOR ਗੇਟਾਂ ਦੀ ਮਦਦ ਨਾਲ ਦੁਨੀਆ ਦਾ ਕੋਈ ਵੀ ਹੋਰ ਗੇਟ (AND, OR, NOT) ਬਣਾ ਸਕਦੇ ਹੋ।</p>
          <p className="mt-1 text-sm bg-blue-50 text-blue-900 p-2 rounded">ਫੈਕਟਰੀਆਂ ਵਿੱਚ ਇਹਨਾਂ ਦੀ ਵਰਤੋਂ ਹੁੰਦੀ ਹੈ ਕਿਉਂਕਿ ਵੱਖ-ਵੱਖ ਗੇਟ ਬਣਾਉਣ ਦੀ ਬਜਾਏ ਲੱਖਾਂ ਇੱਕੋ ਜਿਹੇ NAND ਗੇਟ ਬਣਾਉਣਾ ਸਸਤਾ ਪੈਂਦਾ ਹੈ।</p>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">ਸਿਰਫ਼ NAND ਗੇਟ ਨਾਲ ਬਾਕੀ ਗੇਟ ਬਣਾਉਣਾ:</h4>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>NOT ਬਣਾਉਣਾ:</strong> NAND ਗੇਟ ਦੀਆਂ ਦੋਵੇਂ ਤਾਰਾਂ ਨੂੰ ਇੱਕਠੇ ਜੋੜ ਦਿਓ।</li>
            <li><strong>AND ਬਣਾਉਣਾ:</strong> ਇੱਕ NAND ਗੇਟ ਦੇ ਅੱਗੇ ਇੱਕ ਹੋਰ NAND ਗੇਟ (NOT ਵਾਂਗ) ਲਗਾ ਦਿਓ।</li>
            <li><strong>OR ਬਣਾਉਣਾ:</strong> ਦੋਵਾਂ ਇਨਪੁੱਟ ਤਾਰਾਂ 'ਤੇ ਵੱਖਰੇ-ਵੱਖਰੇ NOT-NAND ਲਗਾ ਕੇ, ਫਿਰ ਉਹਨਾਂ ਨੂੰ ਤੀਜੇ NAND ਵਿੱਚ ਪਾਓ।</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">ਸਿਰਫ਼ NOR ਗੇਟ ਨਾਲ ਬਾਕੀ ਗੇਟ ਬਣਾਉਣਾ:</h4>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>NOT:</strong> ਦੋਵੇਂ ਤਾਰਾਂ ਇਕੱਠੀਆਂ ਜੋੜੋ।</li>
            <li><strong>OR:</strong> NOR ਦੇ ਅੱਗੇ ਇੱਕ NOT-NOR ਲਗਾਓ।</li>
            <li><strong>AND:</strong> ਦੋਵੇਂ ਇਨਪੁੱਟ ਉਲਟਾ (invert) ਕੇ NOR ਵਿੱਚ ਪਾਓ।</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 10,
    title: "HALF ADDER AND FULL ADDER",
    english: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900">Half Adder</h4>
          <p>Adds two single bits. Produces a Sum and a Carry. Built with 1 XOR gate + 1 AND gate.</p>
          <ul className="list-disc pl-5 text-sm mt-1">
            <li>Sum = A ⊕ B</li>
            <li>Carry = A · B</li>
          </ul>
          <p className="mt-1 text-sm text-red-700 font-bold">Problem: It cannot handle a carry coming in from a previous column. Useless beyond the first column of multi-bit addition.</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Full Adder</h4>
          <p>Adds three bits — two input bits PLUS a carry-in (Cin) from the previous column.</p>
          <ul className="list-disc pl-5 text-sm mt-1">
            <li>Sum = A ⊕ B ⊕ Cin</li>
            <li>Cout = AB + BCin + ACin</li>
          </ul>
        </div>
        <div className="bg-slate-50 p-3 rounded border border-slate-200">
          <h4 className="font-bold text-slate-900 text-sm mb-1">Full Adder from Two Half Adders + OR Gate (Exam Favourite)</h4>
          <ul className="list-disc pl-5 text-sm">
            <li>First Half Adder: Adds A and B → TempSum = A⊕B, TempCarry = A·B</li>
            <li>Second Half Adder: Adds TempSum and Cin → Final Sum = TempSum⊕Cin, SecondCarry = TempSum·Cin</li>
            <li>OR Gate: Combines TempCarry and SecondCarry to get Final Cout.</li>
          </ul>
        </div>
      </div>
    ),
    punjabi: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#2563eb]">ਹਾਫ ਐਡਰ (Half Adder)</h4>
          <p>ਇਹ ਸਿਰਫ਼ ਦੋ ਬਿੱਟਾਂ (A ਅਤੇ B) ਨੂੰ ਜੋੜਦਾ ਹੈ। ਇਹ ਸਾਨੂੰ ਜੋੜ (Sum) ਅਤੇ ਹਾਸਲ (Carry) ਦਿੰਦਾ ਹੈ। ਇਹ 1 XOR ਗੇਟ ਅਤੇ 1 AND ਗੇਟ ਨਾਲ ਬਣਦਾ ਹੈ।</p>
          <p className="mt-1 text-sm bg-red-50 text-red-800 p-2 rounded">ਕਮੀ: ਇਹ ਪਿਛਲੇ ਕਾਲਮ ਦਾ ਬਚਿਆ ਹੋਇਆ ਹਾਸਲ (Carry-in) ਆਪਣੇ ਵਿੱਚ ਨਹੀਂ ਜੋੜ ਸਕਦਾ। ਇਸ ਲਈ ਇਹ ਵੱਡੇ ਜੋੜ ਲਈ ਕੰਮ ਨਹੀਂ ਆਉਂਦਾ।</p>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">ਫੁੱਲ ਐਡਰ (Full Adder)</h4>
          <p>ਇਹ ਤਿੰਨ ਬਿੱਟਾਂ (A, B ਅਤੇ ਪਿਛਲਾ Carry-in) ਨੂੰ ਇਕੱਠਾ ਜੋੜ ਸਕਦਾ ਹੈ।</p>
        </div>
        <div className="bg-blue-50 p-3 rounded border border-blue-100">
          <h4 className="font-bold text-[#2563eb] text-sm mb-1">2 ਹਾਫ ਐਡਰਾਂ ਤੋਂ 1 ਫੁੱਲ ਐਡਰ ਬਣਾਉਣਾ (ਪੇਪਰ ਲਈ ਬਹੁਤ ਜ਼ਰੂਰੀ):</h4>
          <ul className="list-disc pl-5 text-sm">
            <li>ਪਹਿਲਾ ਹਾਫ ਐਡਰ A ਅਤੇ B ਨੂੰ ਜੋੜਦਾ ਹੈ।</li>
            <li>ਦੂਜਾ ਹਾਫ ਐਡਰ ਪਹਿਲੇ ਦੇ ਜਵਾਬ ਅਤੇ ਤੀਜੀ ਬਿੱਟ (Carry-in) ਨੂੰ ਜੋੜਦਾ ਹੈ, ਜਿਸ ਨਾਲ Final Sum ਆਉਂਦਾ ਹੈ।</li>
            <li>ਦੋਵਾਂ ਹਾਫ ਐਡਰਾਂ ਦੀਆਂ Carry ਤਾਰਾਂ ਨੂੰ ਇੱਕ OR ਗੇਟ ਰਾਹੀਂ ਕੱਢਿਆ ਜਾਂਦਾ ਹੈ, ਜਿਸਤੋਂ ਫਾਈਨਲ Carry (Cout) ਮਿਲਦਾ ਹੈ।</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 11,
    title: "SUBTRACTORS",
    english: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900">Half Subtractor</h4>
          <p>Subtracts two single bits. Produces a Difference and a Borrow.</p>
          <ul className="list-disc pl-5 text-sm mt-1">
            <li>Difference D = A ⊕ B</li>
            <li>Borrow_out = A' · B</li>
          </ul>
          <table className="min-w-[200px] border-collapse border border-slate-300 text-sm mt-2 text-center">
            <thead>
              <tr className="bg-slate-100"><th className="border p-1">A</th><th className="border p-1">B</th><th className="border p-1">Diff</th><th className="border p-1">Borrow</th></tr>
            </thead>
            <tbody>
              <tr><td className="border p-1">0</td><td className="border p-1">0</td><td className="border p-1">0</td><td className="border p-1">0</td></tr>
              <tr className="bg-slate-50"><td className="border p-1">0</td><td className="border p-1">1</td><td className="border p-1 font-bold">1</td><td className="border p-1 font-bold">1</td></tr>
              <tr><td className="border p-1">1</td><td className="border p-1">0</td><td className="border p-1">1</td><td className="border p-1">0</td></tr>
              <tr><td className="border p-1">1</td><td className="border p-1">1</td><td className="border p-1">0</td><td className="border p-1">0</td></tr>
            </tbody>
          </table>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Full Subtractor</h4>
          <p>Subtracts two bits and a borrow-in from the previous column.</p>
          <ul className="list-disc pl-5 text-sm mt-1">
            <li>D = A ⊕ B ⊕ Bin</li>
            <li>Bout = A'B + A'Bin + BBin</li>
          </ul>
        </div>
      </div>
    ),
    punjabi: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#2563eb]">ਹਾਫ ਸਬਟਰੈਕਟਰ (Half Subtractor)</h4>
          <p>ਇਹ ਦੋ ਬਿੱਟਾਂ ਦੀ ਘਟਾਓ ਕਰਦਾ ਹੈ। ਇਹ ਸਾਨੂੰ ਜਵਾਬ (Difference) ਅਤੇ ਉਧਾਰ (Borrow) ਦਿੰਦਾ ਹੈ।</p>
          <p className="mt-2 text-sm bg-blue-50 p-2 rounded">
            <strong>ਖਾਸ ਧਿਆਨ ਦੇਣ ਵਾਲੀ ਗੱਲ:</strong> ਜਦੋਂ A=0 ਅਤੇ B=1 ਹੋਵੇ, ਤਾਂ ਸਾਨੂੰ 0 ਵਿੱਚੋਂ 1 ਘਟਾਉਣਾ ਪੈਂਦਾ ਹੈ, ਜਿਸ ਲਈ ਉਧਾਰ (Borrow) ਲੈਣਾ ਜ਼ਰੂਰੀ ਹੈ। ਇਸ ਲਈ Difference ਵੀ 1 ਆਵੇਗਾ ਅਤੇ Borrow ਵੀ 1 ਆਵੇਗਾ।
          </p>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">ਫੁੱਲ ਸਬਟਰੈਕਟਰ (Full Subtractor)</h4>
          <p>ਇਹ ਦੋ ਬਿੱਟਾਂ ਦੀ ਘਟਾਓ ਕਰਦਾ ਹੈ, ਪਰ ਇਹ ਪਿਛਲੇ ਕਾਲਮ ਤੋਂ ਲਏ ਗਏ ਉਧਾਰ (Borrow-in) ਨੂੰ ਵੀ ਧਿਆਨ ਵਿੱਚ ਰੱਖਦਾ ਹੈ। ਵੱਡੇ ਨੰਬਰਾਂ ਦੀ ਘਟਾਓ ਲਈ ਇਹ ਹੀ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।</p>
        </div>
      </div>
    )
  },
  {
    id: 12,
    title: "DECODERS AND ENCODERS",
    english: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900">Decoder</h4>
          <p>An n-to-2ⁿ circuit. Takes n binary inputs and activates exactly ONE of 2ⁿ outputs — the output whose number matches the binary input.</p>
          <p className="text-sm mt-1">Real example: When CPU writes to RAM address 0101, the decoder activates memory row 5 and ignores all others.</p>
          <ul className="list-disc pl-5 text-sm mt-1">
            <li><strong>2×4 Decoder:</strong> 2 inputs (A,B), 4 outputs (Y0 to Y3). Has an Enable pin (E) to turn the whole chip on/off.</li>
          </ul>
        </div>
        <div className="bg-slate-50 p-3 rounded border border-slate-200">
          <h4 className="font-bold text-slate-900 text-sm mb-1">4×16 Decoder Using Five 2×4 Decoders</h4>
          <p className="text-sm">Why: A 4-input chip doesn't exist easily, we cascade smaller ones.</p>
          <ul className="list-disc pl-5 text-sm">
            <li>A and B go into a MASTER 2×4 decoder.</li>
            <li>Master's 4 outputs act as ENABLE signals for four LOWER 2×4 decoders.</li>
            <li>C and D go into all four lower decoders simultaneously.</li>
            <li>Result: Only one lower decoder is enabled, giving 1 active output out of 16.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Encoder</h4>
          <p>The REVERSE of a decoder. Has 2ⁿ inputs, n outputs. Takes one active input and outputs its binary code.</p>
          <p className="text-sm mt-1"><strong>Priority Encoder:</strong> If multiple inputs are active simultaneously, it outputs the code of the highest-priority active input.</p>
        </div>
      </div>
    ),
    punjabi: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#2563eb]">ਡੀਕੋਡਰ (Decoder)</h4>
          <p>ਇਹ ਬਾਈਨਰੀ ਨੰਬਰ ਪੜ੍ਹ ਕੇ ਕਈ ਆਉਟਪੁੱਟ ਤਾਰਾਂ ਵਿੱਚੋਂ ਸਿਰਫ਼ ਇੱਕ ਖਾਸ ਤਾਰ ਨੂੰ ਚਾਲੂ ਕਰਦਾ ਹੈ (ਜਿਸਦਾ ਨੰਬਰ ਬਾਈਨਰੀ ਨਾਲ ਮਿਲਦਾ ਹੋਵੇ)।</p>
          <p className="text-sm mt-1 bg-blue-50 p-2 rounded">ਅਸਲੀ ਉਦਾਹਰਣ: ਜਦੋਂ ਕੰਪਿਊਟਰ RAM ਵਿੱਚੋਂ ਕੁਝ ਪੜ੍ਹਨਾ ਚਾਹੁੰਦਾ ਹੈ, ਤਾਂ ਡੀਕੋਡਰ ਸਹੀ ਮੈਮਰੀ ਐਡਰੈੱਸ ਵਾਲੀ ਲਾਈਨ ਨੂੰ ਚਾਲੂ ਕਰਦਾ ਹੈ ਅਤੇ ਬਾਕੀਆਂ ਨੂੰ ਬੰਦ ਰੱਖਦਾ ਹੈ।</p>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">4×16 ਡੀਕੋਡਰ ਕਿਵੇਂ ਬਣਾਈਏ?</h4>
          <p>ਬਜ਼ਾਰ ਵਿੱਚ 4 ਇਨਪੁੱਟ ਵਾਲਾ ਡੀਕੋਡਰ ਨਹੀਂ ਮਿਲਦਾ, ਇਸ ਲਈ ਅਸੀਂ ਛੋਟੇ (2×4 ਵਾਲੇ) ਪੰਜ ਡੀਕੋਡਰ ਜੋੜਦੇ ਹਾਂ:</p>
          <ul className="list-disc pl-5 text-sm mt-1">
            <li>ਇੱਕ ਡੀਕੋਡਰ ਨੂੰ 'Master' ਬਣਾਇਆ ਜਾਂਦਾ ਹੈ।</li>
            <li>ਇਸਦੇ ਚਾਰ ਆਉਟਪੁੱਟ, ਹੇਠਾਂ ਲੱਗੇ ਚਾਰ ਹੋਰ ਡੀਕੋਡਰਾਂ ਨੂੰ ਚਾਲੂ (Enable) ਕਰਨ ਲਈ ਤਾਰਾਂ ਵਜੋਂ ਵਰਤੇ ਜਾਂਦੇ ਹਨ।</li>
            <li>ਇਸ ਤਰ੍ਹਾਂ 16 ਤਾਰਾਂ ਵਿੱਚੋਂ ਸਿਰਫ਼ 1 ਤਾਰ ਚਾਲੂ ਹੁੰਦੀ ਹੈ।</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">ਐਨਕੋਡਰ (Encoder)</h4>
          <p>ਇਹ ਡੀਕੋਡਰ ਦਾ ਬਿਲਕੁਲ ਉਲਟਾ ਹੈ। ਜਦੋਂ ਕਈ ਤਾਰਾਂ ਵਿੱਚੋਂ ਕੋਈ ਇੱਕ ਚਾਲੂ ਹੁੰਦੀ ਹੈ, ਤਾਂ ਐਨਕੋਡਰ ਉਸਦਾ ਬਾਈਨਰੀ ਨੰਬਰ (ਕੋਡ) ਬਣਾ ਕੇ ਬਾਹਰ ਭੇਜ ਦਿੰਦਾ ਹੈ। ਜੇਕਰ ਇੱਕੋ ਸਮੇਂ ਦੋ ਤਾਰਾਂ ਚਾਲੂ ਹੋਣ, ਤਾਂ 'Priority Encoder' ਵੱਡੇ ਨੰਬਰ ਵਾਲੀ ਤਾਰ ਦਾ ਕੋਡ ਬਾਹਰ ਭੇਜਦਾ ਹੈ।</p>
        </div>
      </div>
    )
  },
  {
    id: 13,
    title: "MULTIPLEXER AND DEMULTIPLEXER",
    english: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900">Multiplexer (MUX) — "Many to One"</h4>
          <p>Selects one of several input lines and routes it to a single output line, based on select lines.</p>
          <p className="text-sm mt-1">Real example: 8 phone calls sharing one cable. MUX picks which call goes through.</p>
          <ul className="list-disc pl-5 text-sm mt-1">
            <li><strong>4:1 MUX:</strong> 4 data inputs, 2 select lines, 1 output.</li>
            <li>Applications: Parallel-to-serial conversion (USB), data routing on buses.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Demultiplexer (DEMUX) — "One to Many"</h4>
          <p>Takes one input and routes it to one of several outputs, based on select lines.</p>
          <p className="text-sm mt-1">Real example: TV transmitter sends one signal. Your set-top box (DEMUX) routes it to the correct channel.</p>
          <ul className="list-disc pl-5 text-sm mt-1">
            <li>Applications: Serial-to-parallel conversion, acting as a decoder (when input Data=1).</li>
          </ul>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded p-3">
          <h4 className="font-bold text-slate-900 text-sm mb-2">Serial vs Parallel Adder</h4>
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b bg-slate-100"><th className="p-1">Feature</th><th className="p-1">Serial Adder</th><th className="p-1">Parallel Adder</th></tr>
            </thead>
            <tbody>
              <tr className="border-b"><td className="p-1">Hardware</td><td className="p-1">1 Full Adder</td><td className="p-1">n Full Adders</td></tr>
              <tr className="border-b"><td className="p-1">Speed</td><td className="p-1">Slow (adds bit by bit)</td><td className="p-1">Fast (adds all at once)</td></tr>
              <tr><td className="p-1">Cost</td><td className="p-1">Cheap</td><td className="p-1">Expensive</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    punjabi: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#2563eb]">ਮਲਟੀਪਲੈਕਸਰ (MUX) — "ਕਈਆਂ ਤੋਂ ਇੱਕ"</h4>
          <p>ਕਈ ਇਨਪੁੱਟ ਲਾਈਨਾਂ ਵਿੱਚੋਂ ਡਾਟਾ ਲੈ ਕੇ, Select ਤਾਰਾਂ ਦੀ ਮਦਦ ਨਾਲ, ਸਿਰਫ਼ ਇੱਕ ਆਉਟਪੁੱਟ ਲਾਈਨ ਰਾਹੀਂ ਭੇਜਦਾ ਹੈ।</p>
          <p className="text-sm mt-1 bg-blue-50 p-2 rounded">ਅਸਲੀ ਉਦਾਹਰਣ: ਜਿਵੇਂ ਇੱਕ ਟੈਲੀਫੋਨ ਦੀ ਤਾਰ 'ਤੇ 8 ਲੋਕਾਂ ਦੀ ਆਵਾਜ਼ ਜਾ ਰਹੀ ਹੋਵੇ, ਤਾਂ MUX ਚੁਣਦਾ ਹੈ ਕਿ ਕਿਸਦੀ ਆਵਾਜ਼ ਪਹਿਲਾਂ ਜਾਵੇਗੀ। (USB ਕੇਬਲ ਵਿੱਚ ਵੀ ਇਹ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ)।</p>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">ਡੀਮਲਟੀਪਲੈਕਸਰ (DEMUX) — "ਇੱਕ ਤੋਂ ਕਈ"</h4>
          <p>ਇਹ MUX ਦਾ ਉਲਟਾ ਹੈ। ਇਹ 1 ਇਨਪੁੱਟ ਤਾਰ ਤੋਂ ਡਾਟਾ ਲੈ ਕੇ ਅੱਗੇ ਕਈ ਆਉਟਪੁੱਟ ਲਾਈਨਾਂ ਵਿੱਚ ਵੰਡਦਾ ਹੈ।</p>
          <p className="text-sm mt-1 bg-blue-50 p-2 rounded">ਅਸਲੀ ਉਦਾਹਰਣ: ਜਿਵੇਂ ਟੀਵੀ ਦਾ ਸੈੱਟ-ਟਾਪ ਬਾਕਸ ਇੱਕ ਤਾਰ ਤੋਂ ਸਿਗਨਲ ਲੈ ਕੇ ਅਲੱਗ-ਅਲੱਗ ਚੈਨਲਾਂ 'ਤੇ ਭੇਜਦਾ ਹੈ।</p>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">Serial vs Parallel Adder (ਫਰਕ):</h4>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Serial Adder:</strong> ਇਸ ਕੋਲ ਸਿਰਫ਼ 1 ਗੇਟ ਹੁੰਦਾ ਹੈ, ਇਹ ਬਿੱਟ-ਦਰ-ਬਿੱਟ ਹੌਲੀ-ਹੌਲੀ ਜੋੜਦਾ ਹੈ। ਇਹ ਸਸਤਾ ਹੁੰਦਾ ਹੈ।</li>
            <li><strong>Parallel Adder:</strong> ਇਹ ਸਾਰੇ ਅੰਕਾਂ ਨੂੰ ਇਕੱਠੇ ਜੋੜ ਦਿੰਦਾ ਹੈ ਕਿਉਂਕਿ ਇਸ ਕੋਲ ਬਹੁਤ ਸਾਰੇ ਗੇਟ ਹੁੰਦੇ ਹਨ। ਇਹ ਬਹੁਤ ਤੇਜ਼ ਹੁੰਦਾ ਹੈ ਪਰ ਮਹਿੰਗਾ ਬਣਦਾ ਹੈ। CPU ਵਿੱਚ ਇਹੀ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 14,
    title: "FLIP FLOPS",
    english: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900">What Is a Flip-Flop?</h4>
          <p>The smallest memory unit in a computer. Stores exactly ONE bit (0 or 1) and holds it until told to change. Millions of these make up registers and RAM.</p>
        </div>
        <div className="space-y-2">
          <div>
            <h4 className="font-bold text-slate-900">Types of Flip-Flops:</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li><strong>SR Flip-Flop (Set-Reset):</strong> S=1 sets to 1. R=1 resets to 0. <em>Forbidden state:</em> S=1, R=1 crashes it.</li>
              <li><strong>D Flip-Flop (Data):</strong> Fixes SR by connecting D to S, and D' to R. Output Q simply follows input D on clock edge. Used in CPU registers.</li>
              <li><strong>T Flip-Flop (Toggle):</strong> Toggles (flips) output every time clock ticks if T=1. Used in counters.</li>
              <li><strong>JK Flip-Flop (The Best):</strong> Fixes SR's forbidden state. If J=1, K=1, instead of crashing, it safely TOGGLES.</li>
            </ul>
          </div>
        </div>
        <div className="bg-slate-50 p-3 rounded border border-slate-200">
          <h4 className="font-bold text-slate-900 text-sm mb-1">Race-Around Condition (JK Flip-Flop)</h4>
          <p className="text-sm">Problem: If J=K=1 and clock is HIGH for too long, output toggles multiple times insanely fast (0→1→0→1). Final state is unpredictable.</p>
          <p className="text-sm mt-1"><strong>Solution: Master-Slave JK Flip-Flop.</strong> Two FFs connected in series. Master captures input when clock is HIGH, Slave outputs when clock is LOW. They never operate simultaneously, ensuring exactly ONE toggle per cycle.</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Important Timings</h4>
          <ul className="list-disc pl-5 text-sm">
            <li><strong>Setup Time:</strong> Data must be stable BEFORE clock edge arrives (like staying still before camera shutter).</li>
            <li><strong>Hold Time:</strong> Data must remain stable AFTER clock edge.</li>
            <li>Violating these causes a <em>metastable state</em> (system crash).</li>
          </ul>
        </div>
      </div>
    ),
    punjabi: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#2563eb]">ਫਲਿੱਪ-ਫਲੌਪ (Flip-Flop) ਕੀ ਹੈ?</h4>
          <p>ਇਹ ਕੰਪਿਊਟਰ ਦੀ ਸਭ ਤੋਂ ਛੋਟੀ ਮੈਮਰੀ ਹੈ ਜੋ ਸਿਰਫ਼ 1 ਬਿੱਟ (0 ਜਾਂ 1) ਸਟੋਰ ਕਰ ਸਕਦੀ ਹੈ। ਇਹਨਾਂ ਨੂੰ ਜੋੜ ਕੇ ਹੀ ਰਜਿਸਟਰ ਅਤੇ RAM ਬਣਦੀ ਹੈ। (ਜਿਵੇਂ ਇੱਕ ਬਿਜਲੀ ਦਾ ਬਟਨ ਜੋ ਆਪਣੀ ਜਗ੍ਹਾ ਯਾਦ ਰੱਖਦਾ ਹੈ)।</p>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">ਫਲਿੱਪ-ਫਲੌਪ ਦੀਆਂ ਕਿਸਮਾਂ:</h4>
          <ul className="list-disc pl-5 space-y-1 mt-2 text-sm">
            <li><strong>SR (Set-Reset):</strong> S=1 ਡਾਟਾ ਸੇਵ ਕਰਦਾ ਹੈ, R=1 ਡਾਟਾ ਡਿਲੀਟ ਕਰਦਾ ਹੈ। ਜੇਕਰ ਦੋਵੇਂ 1 ਹੋ ਜਾਣ ਤਾਂ ਇਹ ਕੰਮ ਕਰਨਾ ਬੰਦ (Crash) ਕਰ ਦਿੰਦਾ ਹੈ।</li>
            <li><strong>D (Data):</strong> ਇਸ ਵਿੱਚ ਡਾਟਾ ਬਿਲਕੁਲ ਉਸੇ ਤਰ੍ਹਾਂ ਸੇਵ ਹੁੰਦਾ ਹੈ ਜਿਵੇਂ ਅਸੀਂ ਇਨਪੁੱਟ ਦਿੰਦੇ ਹਾਂ। CPU ਰਜਿਸਟਰਾਂ ਵਿੱਚ ਇਹੀ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।</li>
            <li><strong>T (Toggle):</strong> ਇਹ ਹਰ ਕਲੌਕ ਆਉਣ 'ਤੇ ਆਪਣਾ ਡਾਟਾ ਉਲਟਾ ਦਿੰਦਾ ਹੈ (0 ਨੂੰ 1, 1 ਨੂੰ 0)। ਇਹ ਗਿਣਤੀ (Counters) ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।</li>
            <li><strong>JK ਫਲਿੱਪ-ਫਲੌਪ (ਸਭ ਤੋਂ ਵਧੀਆ):</strong> ਇਸ ਵਿੱਚ SR ਵਾਲੀ ਖਰਾਬੀ ਠੀਕ ਕੀਤੀ ਗਈ ਹੈ। ਜੇਕਰ J=1 ਅਤੇ K=1 ਹੋ ਜਾਵੇ, ਤਾਂ ਇਹ ਕਰੈਸ਼ ਹੋਣ ਦੀ ਬਜਾਏ ਆਰਾਮ ਨਾਲ Toggle (ਡਾਟਾ ਉਲਟਾ) ਕਰਦਾ ਹੈ।</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-3 rounded border border-blue-100">
          <h4 className="font-bold text-[#2563eb] text-sm mb-1">ਰੇਸ-ਅਰਾਊਂਡ ਸਮੱਸਿਆ (Race-Around Condition):</h4>
          <p className="text-sm">ਸਮੱਸਿਆ: ਜੇਕਰ JK ਫਲਿੱਪ-ਫਲੌਪ ਵਿੱਚ ਕਲੌਕ ਲੰਬੇ ਸਮੇਂ ਲਈ ਚਾਲੂ ਰਹੇ, ਤਾਂ ਇਹ ਬਹੁਤ ਤੇਜ਼ੀ ਨਾਲ ਵਾਰ-ਵਾਰ ਬਦਲਦਾ ਹੈ (0-1-0-1), ਜਿਸ ਨਾਲ ਗਲਤ ਜਵਾਬ ਆਉਂਦਾ ਹੈ।</p>
          <p className="text-sm mt-1"><strong>ਹੱਲ: Master-Slave JK ਫਲਿੱਪ-ਫਲੌਪ।</strong> ਇਸ ਵਿੱਚ ਦੋ ਫਲਿੱਪ-ਫਲੌਪ ਵਾਰੀ-ਵਾਰੀ ਕੰਮ ਕਰਦੇ ਹਨ। ਇੱਕ ਕਲੌਕ ਦੇ ਚਾਲੂ ਹੋਣ 'ਤੇ ਡਾਟਾ ਲੈਂਦਾ ਹੈ ਅਤੇ ਦੂਜਾ ਕਲੌਕ ਬੰਦ ਹੋਣ 'ਤੇ ਬਾਹਰ ਕੱਢਦਾ ਹੈ।</p>
        </div>
      </div>
    )
  },
  {
    id: 15,
    title: "SHIFT REGISTERS",
    english: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900">What Is a Shift Register?</h4>
          <p>A register is a row of flip-flops sharing a clock (n flip-flops = n-bit register). A Shift Register can hold and MOVE (shift) its bits left or right.</p>
        </div>
        <div className="space-y-3">
          <div>
            <h4 className="font-bold text-slate-900">1. SISO (Serial-In Serial-Out)</h4>
            <p className="text-sm">Data enters 1 bit at a time, shifts down the chain, exits 1 bit at a time. Slowest. Used for time delay lines.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900">2. SIPO (Serial-In Parallel-Out)</h4>
            <p className="text-sm">Data enters serially, but all bits are available simultaneously at the end. Most common in communication (like USB packets to parallel computer data).</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900">3. PISO (Parallel-In Serial-Out)</h4>
            <p className="text-sm">All bits load at once in one clock cycle, then shift out one bit per clock. Used in keyboards (parallel press → serial cable).</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900">4. PIPO (Parallel-In Parallel-Out)</h4>
            <p className="text-sm">Loads instantly, reads instantly. Fastest. Used for CPU registers and temporary buffers.</p>
          </div>
        </div>
        <table className="w-full text-left text-sm border-collapse mt-3 border border-slate-300">
          <thead>
            <tr className="bg-slate-100"><th className="border p-1">Type</th><th className="border p-1">Speed</th><th className="border p-1">Clocks to Load+Read</th><th className="border p-1">Main Use</th></tr>
          </thead>
          <tbody>
            <tr><td className="border p-1">SISO</td><td className="border p-1">Slowest</td><td className="border p-1">2n</td><td className="border p-1">Delay line</td></tr>
            <tr><td className="border p-1">SIPO</td><td className="border p-1">Medium</td><td className="border p-1">n + 1</td><td className="border p-1">Serial→Parallel</td></tr>
            <tr><td className="border p-1">PISO</td><td className="border p-1">Medium</td><td className="border p-1">1 + n</td><td className="border p-1">Parallel→Serial</td></tr>
            <tr><td className="border p-1">PIPO</td><td className="border p-1">Fastest</td><td className="border p-1">1 + 1</td><td className="border p-1">CPU Registers</td></tr>
          </tbody>
        </table>
      </div>
    ),
    punjabi: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#2563eb]">ਸ਼ਿਫਟ ਰਜਿਸਟਰ (Shift Register) ਕੀ ਹੈ?</h4>
          <p>ਰਜਿਸਟਰ ਕਈ ਫਲਿੱਪ-ਫਲੌਪਾਂ ਦੀ ਇੱਕ ਲਾਈਨ ਹੁੰਦੀ ਹੈ। ਸ਼ਿਫਟ ਰਜਿਸਟਰ ਇਸ ਵਿੱਚ ਪਏ ਡਾਟੇ ਨੂੰ ਖੱਬੇ ਜਾਂ ਸੱਜੇ ਖਿਸਕਾਉਂਦਾ (Shift) ਹੈ।</p>
        </div>
        <div className="space-y-3 mt-2">
          <div>
            <strong>1. SISO:</strong> ਡਾਟਾ ਇੱਕ-ਇੱਕ ਬਿੱਟ ਕਰਕੇ ਅੰਦਰ ਜਾਂਦਾ ਹੈ ਅਤੇ ਇੱਕ-ਇੱਕ ਕਰਕੇ ਹੀ ਬਾਹਰ ਆਉਂਦਾ ਹੈ। ਇਹ ਸਭ ਤੋਂ ਹੌਲੀ ਹੈ, ਇਸਦੀ ਵਰਤੋਂ ਸਿਗਨਲ ਨੂੰ ਰੋਕਣ (Delay) ਲਈ ਹੁੰਦੀ ਹੈ।
          </div>
          <div>
            <strong>2. SIPO:</strong> ਡਾਟਾ ਇੱਕ-ਇੱਕ ਕਰਕੇ ਅੰਦਰ ਜਾਂਦਾ ਹੈ, ਪਰ ਸਾਰਾ ਡਾਟਾ ਇਕੱਠਾ (Parallel) ਪੜ੍ਹਿਆ ਜਾ ਸਕਦਾ ਹੈ। ਇੰਟਰਨੈੱਟ ਅਤੇ USB ਦੀ ਤਾਰ ਤੋਂ ਡਾਟਾ ਲੈ ਕੇ ਕੰਪਿਊਟਰ ਨੂੰ ਦੇਣ ਲਈ ਇਹੀ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।
          </div>
          <div>
            <strong>3. PISO:</strong> ਸਾਰਾ ਡਾਟਾ ਇਕੱਠਾ ਅੰਦਰ ਆਉਂਦਾ ਹੈ, ਪਰ ਤਾਰ ਰਾਹੀਂ ਇੱਕ-ਇੱਕ ਕਰਕੇ ਬਾਹਰ ਜਾਂਦਾ ਹੈ (ਜਿਵੇਂ ਕੀ-ਬੋਰਡ ਤੋਂ ਟਾਈਪਿੰਗ)।
          </div>
          <div>
            <strong>4. PIPO:</strong> ਸਾਰਾ ਡਾਟਾ ਇਕੱਠਾ ਅੰਦਰ ਅਤੇ ਇਕੱਠਾ ਬਾਹਰ। ਇਹ ਸਭ ਤੋਂ ਤੇਜ਼ ਹੈ। CPU ਵਿੱਚ ਮੈਮਰੀ ਸੇਵ ਕਰਨ ਲਈ ਇਹੀ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।
          </div>
        </div>
      </div>
    )
  },
  {
    id: 16,
    title: "COUNTERS",
    english: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900">What Is a Counter?</h4>
          <p>Sequential circuits made of flip-flops that count clock pulses (0, 1, 2... up to 2ⁿ−1). E.g. digital clock seconds.</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Asynchronous (Ripple) Counter</h4>
          <ul className="list-disc pl-5 text-sm">
            <li>First FF gets the main clock. Subsequent FFs get their clock from the Q output of the PREVIOUS FF.</li>
            <li>Effect: A "ripple" delay down the line.</li>
            <li>Problem: Each FF adds delay. At high speeds, outputs read wrong values (glitches) during the ripple period.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Synchronous Counter</h4>
          <ul className="list-disc pl-5 text-sm">
            <li>ALL flip-flops share the same clock directly. They tick instantly together.</li>
            <li>Advantage: No ripple delay, no glitches. Very fast.</li>
            <li>Disadvantage: Needs extra AND gates for the counting logic (more complex wiring).</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Up-Down Counter</h4>
          <p className="text-sm">Counts upward (0,1,2,3) OR downward (3,2,1,0) depending on a MODE (M) control signal. Implemented with extra AND/OR logic at each flip-flop. Used in elevator floors or stepper motors.</p>
        </div>
      </div>
    ),
    punjabi: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#2563eb]">ਕਾਊਂਟਰ (Counters) ਕੀ ਹਨ?</h4>
          <p>ਇਹ ਉਹ ਸਰਕਟ ਹਨ ਜੋ ਕਲੌਕ ਦੀਆਂ ਧੜਕਣਾਂ (Pulses) ਨੂੰ ਗਿਣਦੇ ਹਨ, ਜਿਵੇਂ ਡਿਜੀਟਲ ਘੜੀ ਵਿੱਚ ਸਕਿੰਟ ਚੱਲਦੇ ਹਨ।</p>
        </div>
        <div className="space-y-3 mt-2">
          <div>
            <strong>1. Asynchronous (Ripple) ਕਾਊਂਟਰ:</strong> ਮੁੱਖ ਕਲੌਕ ਸਿਰਫ਼ ਪਹਿਲੇ ਫਲਿੱਪ-ਫਲੌਪ ਨੂੰ ਮਿਲਦੀ ਹੈ। ਅਗਲਾ ਫਲਿੱਪ-ਫਲੌਪ ਪਹਿਲੇ ਦੇ ਬਦਲਣ ਦਾ ਇੰਤਜ਼ਾਰ ਕਰਦਾ ਹੈ। ਇਸ ਕਾਰਨ ਦੇਰੀ (Delay) ਹੁੰਦੀ ਹੈ ਅਤੇ ਤੇਜ਼ ਸਪੀਡ 'ਤੇ ਡਾਟਾ ਗਲਤ ਦਿਖਾਈ ਦੇ ਸਕਦਾ ਹੈ।
          </div>
          <div>
            <strong>2. Synchronous ਕਾਊਂਟਰ:</strong> ਇਸ ਵਿੱਚ ਸਾਰੇ ਫਲਿੱਪ-ਫਲੌਪਾਂ ਨੂੰ ਮੁੱਖ ਕਲੌਕ ਇਕੱਠੀ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ। ਇਹ ਬਹੁਤ ਤੇਜ਼ ਕੰਮ ਕਰਦਾ ਹੈ ਅਤੇ ਕੋਈ ਦੇਰੀ ਨਹੀਂ ਹੁੰਦੀ। ਪਰ ਇਸਨੂੰ ਬਣਾਉਣਾ ਥੋੜ੍ਹਾ ਔਖਾ ਹੁੰਦਾ ਹੈ (ਕਿਉਂਕਿ ਹੋਰ AND ਗੇਟ ਲਗਾਉਣੇ ਪੈਂਦੇ ਹਨ)।
          </div>
          <div>
            <strong>3. Up-Down ਕਾਊਂਟਰ:</strong> ਇਹ ਸਿੱਧੀ ਗਿਣਤੀ (0,1,2,3) ਅਤੇ ਪੁੱਠੀ ਗਿਣਤੀ (3,2,1,0) ਦੋਵੇਂ ਕਰ ਸਕਦਾ ਹੈ। ਇਸ ਵਿੱਚ ਇੱਕ Mode (M) ਬਟਨ ਹੁੰਦਾ ਹੈ ਜੋ ਤੈਅ ਕਰਦਾ ਹੈ ਕਿ ਗਿਣਤੀ ਉੱਪਰ ਜਾਵੇਗੀ ਜਾਂ ਹੇਠਾਂ (ਜਿਵੇਂ ਲਿਫਟ ਵਿੱਚ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ)।
          </div>
        </div>
      </div>
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
                  <div className="text-sm text-slate-800 leading-relaxed font-medium">
                    {topic.english}
                  </div>
                </div>
                
                {/* Punjabi Section */}
                <div className="lg:border-l border-slate-100 lg:pl-6 pt-4 lg:pt-0 border-t lg:border-t-0">
                  <h4 className="text-[#2563eb] font-bold mb-3 flex items-center gap-2 border-b border-slate-100 pb-2 text-sm uppercase tracking-wider">
                    ਆਸਾਨ ਪੰਜਾਬੀ ਅਨੁਵਾਦ
                  </h4>
                  <div className="text-sm text-slate-800 leading-relaxed font-medium">
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
