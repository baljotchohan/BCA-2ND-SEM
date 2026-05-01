export const additional = {
  unit: "ADDITIONAL HIGH-PROBABILITY NUMERICAL QUESTIONS",
  questions: [
    {
      id: "Q27",
      title: "Find Hamming code for data bits 1101 using even parity.",
      en: `Data bits: D4 D3 D2 D1 = 1 1 0 1 (4 data bits, need 3 parity bits)
Total codeword length = 7. Parity positions: 1, 2, 4. Data positions: 3, 5, 6, 7.

Assign data bits:
- Pos 3: D1 = 1
- Pos 5: D2 = 0
- Pos 6: D3 = 1
- Pos 7: D4 = 1

Calculate parity bits (even parity):
- P1 (checks 1,3,5,7): P1 ⊕ 1 ⊕ 0 ⊕ 1 = 0 → **P1 = 0**
- P2 (checks 2,3,6,7): P2 ⊕ 1 ⊕ 1 ⊕ 1 = 0 → **P2 = 1**
- P4 (checks 4,5,6,7): P4 ⊕ 0 ⊕ 1 ⊕ 1 = 0 → **P4 = 0**

**Complete codeword: P1 P2 D1 P4 D2 D3 D4 = 0 1 1 0 0 1 1**`,
      pa: `ਡਾਟਾ: 1101. ਸਾਨੂੰ 3 ਪੈਰਿਟੀ (Parity) ਬਿੱਟ ਚਾਹੀਦੇ ਹਨ। ਕੁੱਲ ਲੰਬਾਈ 7 ਹੋਵੇਗੀ।
ਪੈਰਿਟੀ ਨੂੰ 1, 2, 4 ਨੰਬਰ 'ਤੇ ਰੱਖਾਂਗੇ।

ਡਾਟਾ ਰੱਖਣਾ:
- ਨੰਬਰ 3 'ਤੇ = 1
- ਨੰਬਰ 5 'ਤੇ = 0
- ਨੰਬਰ 6 'ਤੇ = 1
- ਨੰਬਰ 7 'ਤੇ = 1

ਪੈਰਿਟੀ ਕੱਢਣਾ:
- P1 (1,3,5,7 ਦੀ ਜਾਂਚ): P1 ⊕ 1 ⊕ 0 ⊕ 1 = 0 → **P1 = 0**
- P2 (2,3,6,7 ਦੀ ਜਾਂਚ): P2 ⊕ 1 ⊕ 1 ⊕ 1 = 0 → **P2 = 1**
- P4 (4,5,6,7 ਦੀ ਜਾਂਚ): P4 ⊕ 0 ⊕ 1 ⊕ 1 = 0 → **P4 = 0**

**ਫਾਈਨਲ ਜਵਾਬ: 0 1 1 0 0 1 1**`
    },
    {
      id: "Q28",
      title: "Convert the following: (i) (0.6875)₁₀ to Binary (ii) (47)₁₀ to BCD and Excess-3",
      en: `**(i) Fractional Decimal to Binary (multiply by 2):**
- 0.6875 × 2 = **1**.375 → bit 1
- 0.375 × 2 = **0**.75 → bit 0
- 0.75 × 2 = **1**.5 → bit 1
- 0.5 × 2 = **1**.0 → bit 1
- **Answer: (0.1011)₂**

**(ii) (47)₁₀ to BCD:**
- 4 → 0100, 7 → 0111
- **BCD: 0100 0111**

**(iii) (47)₁₀ to Excess-3:**
- 4 in BCD = 0100, add 0011 = **0111**
- 7 in BCD = 0111, add 0011 = **1010**
- **XS-3: 0111 1010**`,
      pa: `**(i) ਦਸ਼ਮਲਵ ਨੂੰ ਬਾਈਨਰੀ ਵਿੱਚ ਬਦਲਣਾ (2 ਨਾਲ ਗੁਣਾ):**
- 0.6875 × 2 = 1.375 → 1
- 0.375 × 2 = 0.75 → 0
- 0.75 × 2 = 1.5 → 1
- 0.5 × 2 = 1.0 → 1
- **ਜਵਾਬ: (0.1011)₂**

**(ii) 47 ਨੂੰ BCD ਵਿੱਚ ਲਿਖਣਾ:**
- 4 ਨੂੰ 0100 ਲਿਖੋ, 7 ਨੂੰ 0111 ਲਿਖੋ।
- **ਜਵਾਬ: 0100 0111**

**(iii) 47 ਨੂੰ Excess-3 ਵਿੱਚ ਲਿਖਣਾ:**
- BCD ਵਿੱਚ 0011 (3) ਜੋੜੋ।
- **ਜਵਾਬ: 0111 1010**`
    },
    {
      id: "Q29",
      title: "Simplify: F = A'B'C' + A'B'C + A'BC + ABC using Boolean algebra and K-map.",
      en: `**Boolean Algebra:**
F = A'B'(C'+C) + BC(A'+A)
= A'B'(1) + BC(1)
= **A'B' + BC**

**K-Map verification (3 variables):**
\`\`\`
      BC
A   00  01  11  10
0 [  1 | 1 | 1 | 0 ]
1 [  0 | 0 | 1 | 0 ]
\`\`\`
Groups:
- {m0, m1} = A'B'
- {m3, m7} = BC
**Minimal SOP: F = A'B' + BC** ✓`,
      pa: `**ਸਮੀਕਰਨ ਰਾਹੀਂ (Boolean Algebra):**
F = A'B'C' + A'B'C + A'BC + ABC
= A'B'(C'+C) + BC(A'+A)
= A'B'(1) + BC(1)
= **A'B' + BC**

**K-Map ਰਾਹੀਂ ਜਾਂਚ:**
ਦਿੱਤੇ ਗਏ ਨੰਬਰਾਂ (0, 1, 3, 7) 'ਤੇ ਡੱਬਿਆਂ ਵਿੱਚ 1 ਲਿਖੋ।
- 0, 1 ਦਾ ਗਰੁੱਪ ਮਿਲ ਕੇ A'B' ਬਣਦਾ ਹੈ।
- 3, 7 ਦਾ ਗਰੁੱਪ ਮਿਲ ਕੇ BC ਬਣਦਾ ਹੈ।
**ਫਾਈਨਲ ਜਵਾਬ: F = A'B' + BC**`
    },
    {
      id: "Q30",
      title: "Perform: 8-bit signed representation of +73 and −73, then add them in 2's complement.",
      en: `**+73:** **0100 1001**

**−73 in 2's complement:**
- Flip bits: 1011 0110
- Add 1: **1011 0111**

**Adding +73 and −73:**
\`\`\`
  0100 1001   (+73)
+ 1011 0111   (−73 in 2's complement)
-----------
1 0000 0000
\`\`\`
Discard carry: **0000 0000 = 0** ✓`,
      pa: `**+73 ਬਾਈਨਰੀ ਵਿੱਚ:** **0100 1001**

**−73 (2's complement ਵਿੱਚ):**
- ਸਾਰੇ ਬਿੱਟ ਉਲਟਾਓ: 1011 0110
- 1 ਜੋੜੋ: **1011 0111**

**ਦੋਵਾਂ ਨੂੰ ਜੋੜਨਾ:**
0100 1001 (+73) ਅਤੇ 1011 0111 (-73) ਨੂੰ ਜੋੜਨ 'ਤੇ ਜਵਾਬ 1 0000 0000 ਆਉਂਦਾ ਹੈ।
ਫਾਲਤੂ 1 ਨੂੰ ਛੱਡਣ 'ਤੇ ਫਾਈਨਲ ਜਵਾਬ **0000 0000 = 0** ਆਵੇਗਾ। ✓`
    },
    {
      id: "Q31",
      title: "Show how XOR gate is implemented using only NAND gates.",
      en: `Boolean: A⊕B = A'B + AB'

**4-NAND implementation:**
- G1 = NAND(A,B) = (AB)'
- G2 = NAND(A, G1) = (A·(AB)')' = A'+AB
- G3 = NAND(B, G1) = (B·(AB)')' = B'+AB
- Output = NAND(G2, G3) = ((A'+AB)·(B'+AB))'
- Simplifies to: (A'B')' = A⊕B ✓

**Circuit Diagram:**
\`\`\`
A, B → [NAND1] → G1
A, G1 → [NAND2] → G2
B, G1 → [NAND3] → G3
G2, G3 → [NAND4] → OUTPUT = A⊕B
\`\`\``,
      pa: `XOR ਸਮੀਕਰਨ: A⊕B = A'B + AB'

**NAND ਗੇਟ ਨਾਲ ਬਣਾਉਣਾ (4 ਗੇਟ ਚਾਹੀਦੇ ਹਨ):**
- ਪਹਿਲਾ ਗੇਟ: G1 = A ਅਤੇ B ਨੂੰ NAND ਕਰੋ = (AB)'
- ਦੂਜਾ ਗੇਟ: G2 = A ਅਤੇ G1 ਨੂੰ NAND ਕਰੋ।
- ਤੀਜਾ ਗੇਟ: G3 = B ਅਤੇ G1 ਨੂੰ NAND ਕਰੋ।
- ਚੌਥਾ ਗੇਟ: G2 ਅਤੇ G3 ਨੂੰ NAND ਕਰੋ, ਇਹ ਸਿੱਧਾ A⊕B ਬਣ ਜਾਵੇਗਾ।

**ਸਰਕਟ ਦਾ ਨਕਸ਼ਾ:**
A ਅਤੇ B ਪਹਿਲੇ ਗੇਟ (NAND1) ਵਿੱਚ ਜਾਂਦੇ ਹਨ। ਫਿਰ ਇਸਦਾ ਜਵਾਬ ਅਤੇ A ਦੂਜੇ ਗੇਟ ਵਿੱਚ, ਜਵਾਬ ਅਤੇ B ਤੀਜੇ ਗੇਟ ਵਿੱਚ। ਅਖੀਰ 'ਤੇ ਦੂਜੇ ਅਤੇ ਤੀਜੇ ਗੇਟ ਦਾ ਜਵਾਬ ਚੌਥੇ ਗੇਟ (NAND4) ਵਿੱਚ ਜਾ ਕੇ ਫਾਈਨਲ XOR ਜਵਾਬ ਦਿੰਦਾ ਹੈ।`
    }
  ]
};
