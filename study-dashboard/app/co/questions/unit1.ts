export const unit1 = {
  unit: "UNIT I — NUMBER SYSTEMS, CODES, ERROR DETECTION",
  questions: [
    {
      id: "Q1",
      title: "Convert the following numbers as directed:\\n(i) (110110.101)₂ to Decimal\\n(ii) (237)₈ to Binary\\n(iii) (3F)₁₆ to Decimal\\n(iv) (1001101)₂ to Octal",
      en: `**(i) Binary (110110.101)₂ → Decimal**
Split at the binary point:
- Integer part: 1×2⁵ + 1×2⁴ + 0×2³ + 1×2² + 1×2¹ + 0×2⁰
- = 32 + 16 + 0 + 4 + 2 + 0 = **54**
- Fractional part: 1×2⁻¹ + 0×2⁻² + 1×2⁻³
- = 0.5 + 0 + 0.125 = **0.625**
- **Answer: (54.625)₁₀**

**(ii) Octal (237)₈ → Binary**
Convert each octal digit to its 3-bit binary equivalent:
- 2 → 010
- 3 → 011
- 7 → 111
- **Answer: (010011111)₂**

**(iii) Hexadecimal (3F)₁₆ → Decimal**
- 3 × 16¹ + F × 16⁰
- = 3 × 16 + 15 × 1
- = 48 + 15
- **Answer: (63)₁₀**

**(iv) Binary (1001101)₂ → Octal**
Group bits in 3s from RIGHT to LEFT (pad left with 0s if needed):
- 001 | 001 | 101
- 1 | 1 | 5
- **Answer: (115)₈**`,
      pa: `**(i) ਬਾਈਨਰੀ (110110.101)₂ → ਡੈਸੀਮਲ**
ਬਾਈਨਰੀ ਪੁਆਇੰਟ 'ਤੇ ਵੰਡੋ:
- ਪੂਰਨ ਅੰਕ ਹਿੱਸਾ: 1×32 + 1×16 + 0×8 + 1×4 + 1×2 + 0×1 = **54**
- ਦਸ਼ਮਲਵ ਹਿੱਸਾ: 1×0.5 + 0×0.25 + 1×0.125 = **0.625**
- **ਜਵਾਬ: (54.625)₁₀**

**(ii) ਓਕਟਲ (237)₈ → ਬਾਈਨਰੀ**
ਹਰੇਕ ਓਕਟਲ ਅੰਕ ਨੂੰ 3-ਬਿੱਟ ਬਾਈਨਰੀ ਵਿੱਚ ਬਦਲੋ:
- 2 → 010
- 3 → 011
- 7 → 111
- **ਜਵਾਬ: (010011111)₂**

**(iii) ਹੈਕਸਾਡੈਸੀਮਲ (3F)₁₆ → ਡੈਸੀਮਲ**
- 3 × 16 + 15 × 1
- = 48 + 15
- **ਜਵਾਬ: (63)₁₀**

**(iv) ਬਾਈਨਰੀ (1001101)₂ → ਓਕਟਲ**
ਸੱਜੇ ਤੋਂ ਖੱਬੇ 3-3 ਦੇ ਜੋੜੇ ਬਣਾਓ:
- 001 | 001 | 101
- 1 | 1 | 5
- **ਜਵਾਬ: (115)₈**`
    },
    {
      id: "Q2",
      title: "Convert the following numbers:\\n(i) (101101.011)₂ to Decimal\\n(ii) (725)₈ to Binary\\n(iii) (2AF)₁₆ to Decimal\\n(iv) (1110010)₂ to Hexadecimal",
      en: `**(i) (101101.011)₂ → Decimal**
- Integer: 1×32 + 0×16 + 1×8 + 1×4 + 0×2 + 1×1 = 32+8+4+1 = **45**
- Fraction: 0×0.5 + 1×0.25 + 1×0.125 = 0.375
- **Answer: (45.375)₁₀**

**(ii) (725)₈ → Binary**
- 7 → 111, 2 → 010, 5 → 101
- **Answer: (111010101)₂**

**(iii) (2AF)₁₆ → Decimal**
- 2×256 + A(10)×16 + F(15)×1
- = 512 + 160 + 15
- **Answer: (687)₁₀**

**(iv) (1110010)₂ → Hexadecimal**
- Group in 4s from right: 0111 | 0010
- 7 | 2
- **Answer: (72)₁₆**`,
      pa: `**(i) (101101.011)₂ → ਡੈਸੀਮਲ**
- ਪੂਰਨ ਅੰਕ: 1×32 + 1×8 + 1×4 + 1×1 = 45
- ਦਸ਼ਮਲਵ: 0.25 + 0.125 = 0.375
- **ਜਵਾਬ: (45.375)₁₀**

**(ii) (725)₈ → ਬਾਈਨਰੀ**
- 7 → 111, 2 → 010, 5 → 101
- **ਜਵਾਬ: (111010101)₂**

**(iii) (2AF)₁₆ → ਡੈਸੀਮਲ**
- 2×256 + 10×16 + 15×1 = 512 + 160 + 15
- **ਜਵਾਬ: (687)₁₀**

**(iv) (1110010)₂ → ਹੈਕਸਾਡੈਸੀਮਲ**
- ਸੱਜੇ ਪਾਸੇ ਤੋਂ 4-4 ਦੇ ਜੋੜੇ ਬਣਾਓ: 0111 | 0010
- 7 | 2
- **ਜਵਾਬ: (72)₁₆**`
    },
    {
      id: "Q3",
      title: "Convert (237)₁₀ to Binary, Octal, and Hexadecimal.",
      en: `**Decimal (237)₁₀ → Binary (Repeated Division by 2):**
- 237 ÷ 2 = 118 R **1**
- 118 ÷ 2 = 59 R **0**
- 59 ÷ 2 = 29 R **1**
- 29 ÷ 2 = 14 R **1**
- 14 ÷ 2 = 7 R **0**
- 7 ÷ 2 = 3 R **1**
- 3 ÷ 2 = 1 R **1**
- 1 ÷ 2 = 0 R **1**
- Read remainders bottom to top: **(11101101)₂**

**Binary → Octal (group in 3s):**
- 011 | 101 | 101
- 3 | 5 | 5
- **(355)₈**

**Binary → Hex (group in 4s):**
- 1110 | 1101
- E | D
- **(ED)₁₆**`,
      pa: `**ਡੈਸੀਮਲ (237)₁₀ → ਬਾਈਨਰੀ (2 ਨਾਲ ਵਾਰ-ਵਾਰ ਭਾਗ ਕਰਨਾ):**
- 237 ਨੂੰ 2 ਨਾਲ ਭਾਗ ਕਰਨ 'ਤੇ ਬਾਕੀ ਬਚਦਾ ਹੈ: 1, 0, 1, 1, 0, 1, 1, 1
- ਬਾਕੀਆਂ ਨੂੰ ਹੇਠਾਂ ਤੋਂ ਉੱਪਰ ਪੜ੍ਹੋ: **(11101101)₂**

**ਬਾਈਨਰੀ → ਓਕਟਲ (3-3 ਦੇ ਜੋੜੇ):**
- 011 | 101 | 101
- 3 | 5 | 5
- **(355)₈**

**ਬਾਈਨਰੀ → ਹੈਕਸਾਡੈਸੀਮਲ (4-4 ਦੇ ਜੋੜੇ):**
- 1110 | 1101
- E | D
- **(ED)₁₆**`
    },
    {
      id: "Q4",
      title: "Explain the 1's Complement and 2's Complement method for representing negative numbers with examples.",
      en: `Computers only have addition circuits. To perform subtraction A − B, the computer computes A + (−B). To represent −B in binary, we use complement methods.

**1's Complement Method:**
- Keep the sign bit as MSB (0 = positive, 1 = negative)
- To get negative: Flip ALL bits (0 becomes 1, 1 becomes 0)

| Number | 1's Complement |
|--------|----------------|
| +5 = 00000101 | −5 = 11111010 |
| +25 = 00011001 | −25 = 11100110 |

Disadvantage: Two representations of zero — (+0) and (−0).

**2's Complement Method (The Standard Used by All Computers):**
- Step 1: Find the 1's complement (flip all bits)
- Step 2: Add 1 to the result

| Number | 1's Comp | 2's Comp (= −ve) |
|--------|----------|------------------|
| +5 = 00000101 | 11111010 | **11111011** |
| +25 = 00011001 | 11100110 | **11100111** |

**Subtraction using 2's complement:**
To compute 13 − 9 = ?
- A = 1101 (13), B = 1001 (9)
- 2's complement of B: flip = 0110, add 1 = **0111**
- 1101 + 0111 = 1**0100**
- Discard carry bit: **0100 = 4** ✓`,
      pa: `ਕੰਪਿਊਟਰ ਕੋਲ ਸਿਰਫ਼ ਜੋੜ ਕਰਨ ਵਾਲੇ ਸਰਕਟ ਹੁੰਦੇ ਹਨ। ਘਟਾਓ (A − B) ਕਰਨ ਲਈ, ਇਹ A + (−B) ਕਰਦਾ ਹੈ। ਨੈਗੇਟਿਵ ਨੰਬਰ ਦਰਸਾਉਣ ਲਈ complement ਤਰੀਕੇ ਵਰਤੇ ਜਾਂਦੇ ਹਨ।

**1's Complement ਤਰੀਕਾ:**
- ਸਾਰੇ ਬਿੱਟਸ ਨੂੰ ਉਲਟਾ ਦਿਓ (0 ਨੂੰ 1 ਬਣਾਓ ਅਤੇ 1 ਨੂੰ 0)।
- ਉਦਾਹਰਣ: +5 = 00000101, ਤਾਂ −5 = 11111010
- ਨੁਕਸਾਨ: ਇਸ ਵਿੱਚ ਜ਼ੀਰੋ ਦੇ ਦੋ ਰੂਪ ਹੁੰਦੇ ਹਨ (+0 ਅਤੇ −0), ਜੋ ਕਿ ਗਣਿਤ ਵਿੱਚ ਗਲਤ ਹੈ।

**2's Complement ਤਰੀਕਾ (ਸਾਰੇ ਕੰਪਿਊਟਰਾਂ ਵਿੱਚ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ):**
- ਕਦਮ 1: 1's complement ਕੱਢੋ (ਸਾਰੇ ਬਿੱਟ ਉਲਟਾਓ)।
- ਕਦਮ 2: ਉਸ ਵਿੱਚ 1 ਜੋੜ ਦਿਓ।
- ਉਦਾਹਰਣ: +5 = 00000101, 1's Comp = 11111010, 1 ਜੋੜਨ 'ਤੇ = **11111011** (−5)

**2's complement ਨਾਲ ਘਟਾਓ:**
13 − 9 = ?
- 13 = 1101, 9 = 1001
- 9 ਦਾ 2's complement = 0111
- 1101 + 0111 = 1**0100**
- ਫਾਲਤੂ 1 ਨੂੰ ਛੱਡ ਦਿਓ। ਜਵਾਬ: **0100 = 4** ✓`
    },
    {
      id: "Q5",
      title: "Represent +45 and −45 in 8-bit: (i) Signed Magnitude, (ii) 1's Complement, (iii) 2's Complement.",
      en: `First, +45 in binary = **00101101**

| Method | +45 | −45 |
|--------|-----|-----|
| Signed Magnitude | 00101101 | **10101101** (flip MSB only) |
| 1's Complement | 00101101 | **11010010** (flip all bits) |
| 2's Complement | 00101101 | **11010011** (1's comp + 1) |

Verification of 2's complement:
- 1's comp of 00101101 = 11010010
- 11010010 + 1 = **11010011** ✓

To verify: Add +45 and −45 (2's complement) should give 0.
- 00101101 + 11010011 = 1**00000000** → discard carry → 00000000 ✓`,
      pa: `ਸਭ ਤੋਂ ਪਹਿਲਾਂ, +45 ਬਾਈਨਰੀ ਵਿੱਚ = **00101101**

| ਤਰੀਕਾ | +45 | −45 |
|--------|-----|-----|
| Signed Magnitude | 00101101 | **10101101** (ਸਿਰਫ਼ ਪਹਿਲਾ ਬਿੱਟ ਬਦਲੋ) |
| 1's Complement | 00101101 | **11010010** (ਸਾਰੇ ਬਿੱਟ ਉਲਟਾਓ) |
| 2's Complement | 00101101 | **11010011** (1's comp ਵਿੱਚ 1 ਜੋੜੋ) |

ਜਾਂਚ:
ਜੇਕਰ ਅਸੀਂ +45 ਅਤੇ −45 (2's complement) ਨੂੰ ਜੋੜਦੇ ਹਾਂ, ਤਾਂ ਜਵਾਬ 0 ਆਉਣਾ ਚਾਹੀਦਾ ਹੈ।
- 00101101 + 11010011 = 1**00000000** → ਫਾਲਤੂ 1 ਛੱਡੋ → 00000000 ✓`
    },
    {
      id: "Q6",
      title: "Perform the following binary arithmetic operations:\\n(i) (1101)₂ + (1011)₂\\n(ii) (1100)₂ − (1001)₂ using 2's complement\\n(iii) (101)₂ × (11)₂\\n(iv) (1100)₂ ÷ (10)₂",
      en: `**(i) Binary Addition: 1101 + 1011**
\`\`\`
  1 1 0 1    (13)
+ 1 0 1 1    (11)
-----------
1 1 0 0 0    (24)
\`\`\`
**Answer: (11000)₂ = 24** ✓

**(ii) Subtraction 1100 − 1001 using 2's complement**
- 1001's 1's complement = 0110
- 0110 + 1 = **0111** (2's complement of 1001)
- Add: 1100 + 0111 = 10011
- Discard the 5th carry bit
- **Answer: 0011 = 3** ✓

**(iii) Binary Multiplication: 101 × 11**
\`\`\`
      1 0 1    (5)
    ×   1 1    (3)
  ---------
      1 0 1
    1 0 1 0
  ---------
    1 1 1 1
\`\`\`
**Answer: (1111)₂ = 15** ✓

**(iv) Binary Division: 1100 ÷ 10**
\`\`\`
   110       ← quotient
  -----
10 ) 1100
     10
     ---
      10
      10
      ---
       00
\`\`\`
**Answer: Quotient = (110)₂ = 6** ✓`,
      pa: `**(i) ਬਾਈਨਰੀ ਜੋੜ: 1101 + 1011**
13 + 11 = 24
**ਜਵਾਬ: (11000)₂** ✓

**(ii) 2's complement ਨਾਲ ਘਟਾਓ: 1100 − 1001**
- 1001 ਦਾ 2's complement = 0111
- ਜੋੜੋ: 1100 + 0111 = 10011
- 5ਵੇਂ ਕੈਰੀ ਬਿੱਟ ਨੂੰ ਛੱਡ ਦਿਓ।
- **ਜਵਾਬ: 0011 = 3** ✓

**(iii) ਬਾਈਨਰੀ ਗੁਣਾ: 101 × 11**
5 × 3 = 15
**ਜਵਾਬ: (1111)₂** ✓

**(iv) ਬਾਈਨਰੀ ਭਾਗ: 1100 ÷ 10**
12 ÷ 2 = 6
**ਜਵਾਬ: ਭਾਗਫਲ (Quotient) = (110)₂ = 6** ✓`
    },
    {
      id: "Q7",
      title: "Explain the computer codes: BCD, Excess-3, Gray Code, ASCII, and EBCDIC with examples.",
      en: `**BCD (Binary Coded Decimal):**
Each decimal digit (0–9) is individually converted into 4-bit binary.
- Example: (49)₁₀ = **0100 1001**
- Invalid codes: 1010 to 1111. Used in digital clocks and ATM displays.

**Excess-3 (XS-3) Code:**
An unweighted, self-complementing code. Formula: XS-3 = BCD + 0011.
- Example: (4)₁₀ = 0100 + 0011 = **0111**
- Makes 9's complement subtraction automatic.

**Gray Code:**
Reflected binary code where only ONE bit changes between consecutive numbers.
- Prevents false readings during mechanical transitions.
- Example: 2 = 011, 3 = 010.

**ASCII:**
- 7-bit code → 128 characters (A=65, a=97, 0=48, Space=32).
- Standard for PC keyboards and text files.

**EBCDIC:**
- 8-bit code → 256 characters.
- Developed by IBM, used exclusively in IBM mainframe computers.`,
      pa: `**BCD (ਬਾਈਨਰੀ ਕੋਡਿਡ ਡੈਸੀਮਲ):**
ਡੈਸੀਮਲ ਦੇ ਹਰੇਕ ਅੰਕ ਨੂੰ ਅਲੱਗ-ਅਲੱਗ 4-ਬਿੱਟ ਬਾਈਨਰੀ ਵਿੱਚ ਬਦਲਿਆ ਜਾਂਦਾ ਹੈ।
- ਉਦਾਹਰਣ: (49)₁₀ = **0100 1001**
- ਵਰਤੋਂ: ਡਿਜੀਟਲ ਘੜੀਆਂ, ਕੈਲਕੁਲੇਟਰਾਂ ਵਿੱਚ।

**Excess-3 (XS-3) ਕੋਡ:**
ਇਹ BCD ਵਿੱਚ 3 (0011) ਜੋੜ ਕੇ ਬਣਾਇਆ ਜਾਂਦਾ ਹੈ।
- ਉਦਾਹਰਣ: 4 = 0100 + 0011 = **0111**

**ਗ੍ਰੇ ਕੋਡ (Gray Code):**
ਇਸ ਵਿੱਚ ਲਗਾਤਾਰ ਨੰਬਰਾਂ ਦੇ ਵਿਚਕਾਰ ਸਿਰਫ਼ ਇੱਕ ਬਿੱਟ ਬਦਲਦਾ ਹੈ।
- ਵਰਤੋਂ: ਮਸ਼ੀਨਾਂ ਅਤੇ ਸੈਂਸਰਾਂ ਵਿੱਚ ਗਲਤ ਰੀਡਿੰਗ ਰੋਕਣ ਲਈ।

**ASCII (ਆਸਕੀ):**
- 7-ਬਿੱਟ ਕੋਡ (128 ਅੱਖਰ)। ਕੰਪਿਊਟਰ ਕੀਬੋਰਡਾਂ ਅਤੇ ਇੰਟਰਨੈੱਟ ਲਈ ਵਿਸ਼ਵ ਪੱਧਰ 'ਤੇ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।

**EBCDIC:**
- 8-ਬਿੱਟ ਕੋਡ (256 ਅੱਖਰ)। ਸਿਰਫ਼ IBM ਦੇ ਵੱਡੇ ਮੇਨਫ੍ਰੇਮ ਕੰਪਿਊਟਰਾਂ ਵਿੱਚ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।`
    },
    {
      id: "Q8",
      title: "What is fixed-point and floating-point representation? Explain IEEE 754 single-precision format.",
      en: `**Fixed-Point Representation:**
The binary point is fixed at a predetermined position. Simple, but cannot handle very large and very small numbers at the same time.

**Floating-Point Representation:**
Like scientific notation. Format: ±M × 2^E (Mantissa × 2 to the power Exponent). The point "floats".

**IEEE 754 Single Precision (32 bits):**
| Sign | Exponent | Mantissa |
|------|----------|---------|
| 1 bit | 8 bits | 23 bits |
| 0=pos, 1=neg | Biased by 127 | Fractional part |

**Example: Represent (0.5)₁₀:**
- 0.5 = 1.0 × 2⁻¹
- Sign = 0 (positive)
- Exponent = −1 + 127 = 126 = 01111110
- Mantissa = 000...0 (23 zeros, since the leading "1." is implicit)
- **Final: 0 01111110 00000000000000000000000**`,
      pa: `**ਫਿਕਸਡ-ਪੁਆਇੰਟ ਨੁਮਾਇੰਦਗੀ:**
ਇਸ ਵਿੱਚ ਬਾਈਨਰੀ ਪੁਆਇੰਟ (ਦਸ਼ਮਲਵ) ਇੱਕ ਪੱਕੀ ਜਗ੍ਹਾ 'ਤੇ ਹੁੰਦਾ ਹੈ। ਇਹ ਸਧਾਰਨ ਹੈ ਪਰ ਬਹੁਤ ਵੱਡੇ ਜਾਂ ਬਹੁਤ ਛੋਟੇ ਨੰਬਰਾਂ ਨੂੰ ਸਹੀ ਢੰਗ ਨਾਲ ਨਹੀਂ ਸੰਭਾਲ ਸਕਦਾ।

**ਫਲੋਟਿੰਗ-ਪੁਆਇੰਟ ਨੁਮਾਇੰਦਗੀ:**
ਇਹ ਵਿਗਿਆਨਕ ਨੋਟੇਸ਼ਨ ਵਾਂਗ ਹੈ। ਪੁਆਇੰਟ "ਤੈਰਦਾ" (Float) ਹੈ।

**IEEE 754 Single Precision (32 ਬਿੱਟਸ):**
| Sign | Exponent | Mantissa |
|------|----------|---------|
| 1 ਬਿੱਟ | 8 ਬਿੱਟ | 23 ਬਿੱਟ |
| (0=+, 1=-) | (+127 ਬਾਇਸ) | ਬਾਕੀ ਦਾ ਹਿੱਸਾ |

**ਉਦਾਹਰਣ: (0.5)₁₀ ਨੂੰ ਲਿਖਣਾ:**
- 0.5 ਦਾ ਮਤਲਬ 1.0 × 2⁻¹
- Sign = 0
- Exponent = −1 + 127 = 126 (01111110)
- Mantissa = 23 ਜ਼ੀਰੋਜ਼
- **ਜਵਾਬ: 0 01111110 00000000000000000000000**`
    },
    {
      id: "Q9",
      title: "Explain error detection and correction codes with examples: Parity, Hamming Code, CRC, Checksum.",
      en: `Data transmitted over networks can get corrupted. Error codes detect/correct this.

**1. Parity Bit (Detection only):**
Adds one extra bit to make total 1s EVEN or ODD.
- Data 1011001 (four 1s) → Even Parity bit = 0 → Send 10110010.
- If one bit flips, receiver sees odd count and detects error.

**2. Checksum:**
Used in TCP/IP. Adds segments of data using 1's complement math. Receiver adds again; if sum is all 1s, data is valid.

**3. CRC (Cyclic Redundancy Check):**
Highly robust. Treats data as a polynomial and divides by a fixed generator. The remainder is attached to data. Detects burst errors (used in Ethernet, ZIP files).

**4. Hamming Code (Error Correction):**
Inserts parity bits at positions that are powers of 2 (1, 2, 4, 8...). 
If an error occurs, checking the parity bits generates a "syndrome" number which indicates the EXACT position of the corrupted bit, allowing the system to flip it back and correct it automatically.`,
      pa: `ਨੈੱਟਵਰਕ 'ਤੇ ਡਾਟਾ ਭੇਜਦੇ ਸਮੇਂ ਉਹ ਖਰਾਬ ਹੋ ਸਕਦਾ ਹੈ। ਇਸ ਨੂੰ ਲੱਭਣ ਅਤੇ ਠੀਕ ਕਰਨ ਲਈ ਕੋਡ ਵਰਤੇ ਜਾਂਦੇ ਹਨ।

**1. Parity Bit (ਸਿਰਫ਼ ਲੱਭਣ ਲਈ):**
ਇੱਕ ਵਾਧੂ ਬਿੱਟ ਜੋੜਿਆ ਜਾਂਦਾ ਹੈ ਤਾਂ ਜੋ 1 ਦੀ ਗਿਣਤੀ ਜਿਸਤ (Even) ਜਾਂ ਟਾਂਕ (Odd) ਰਹੇ। ਜੇ ਰਸਤੇ ਵਿੱਚ ਕੋਈ ਬਿੱਟ ਬਦਲਦਾ ਹੈ, ਤਾਂ ਗਿਣਤੀ ਬਦਲ ਜਾਂਦੀ ਹੈ ਅਤੇ ਗਲਤੀ ਫੜੀ ਜਾਂਦੀ ਹੈ।

**2. Checksum:**
ਡਾਟਾ ਦੇ ਛੋਟੇ ਹਿੱਸੇ ਬਣਾ ਕੇ ਉਨ੍ਹਾਂ ਦਾ ਜੋੜ ਭੇਜਿਆ ਜਾਂਦਾ ਹੈ। ਪ੍ਰਾਪਤ ਕਰਨ ਵਾਲਾ ਦੁਬਾਰਾ ਜੋੜ ਕਰਦਾ ਹੈ, ਜੇ ਜੋੜ ਸਹੀ ਹੋਵੇ ਤਾਂ ਡਾਟਾ ਠੀਕ ਹੈ (ਇੰਟਰਨੈੱਟ TCP/IP ਵਿੱਚ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ)।

**3. CRC:**
ਇਹ ਗਣਿਤ ਦੇ ਭਾਗ (Division) ਫਾਰਮੂਲੇ 'ਤੇ ਅਧਾਰਿਤ ਹੈ। ਇਹ ਬਹੁਤ ਸ਼ਕਤੀਸ਼ਾਲੀ ਹੈ ਅਤੇ ਹਾਰਡ ਡਰਾਈਵਾਂ/ਵਾਈ-ਫਾਈ ਵਿੱਚ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।

**4. Hamming Code (ਗਲਤੀ ਠੀਕ ਕਰਨ ਲਈ):**
ਕਈ ਪੈਰਿਟੀ ਬਿੱਟਸ ਨੂੰ 1, 2, 4, 8 ਨੰਬਰ ਦੀਆਂ ਥਾਵਾਂ 'ਤੇ ਰੱਖਿਆ ਜਾਂਦਾ ਹੈ। ਜੇਕਰ ਕੋਈ ਬਿੱਟ ਖਰਾਬ ਹੁੰਦਾ ਹੈ, ਤਾਂ ਇਹ ਕੋਡ ਬਿਲਕੁਲ ਸਹੀ ਜਗ੍ਹਾ ਲੱਭ ਕੇ ਉਸ ਬਿੱਟ ਨੂੰ ਆਪਣੇ ਆਪ ਠੀਕ (ਉਲਟਾ) ਕਰ ਦਿੰਦਾ ਹੈ।`
    }
  ]
};
