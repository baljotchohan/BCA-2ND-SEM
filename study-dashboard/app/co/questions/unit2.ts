export const unit2 = {
  unit: "UNIT II — BOOLEAN ALGEBRA, LOGIC GATES, K-MAP",
  questions: [
    {
      id: "Q10",
      title: "Explain the characteristics of logic gates: Fan-in, Fan-out, Propagation Delay, Power Dissipation, Noise Margin. Compare TTL and CMOS.",
      en: `**Fan-in:**
The max number of input signals a gate can accept while operating correctly.

**Fan-out:**
The max number of other gate inputs that one gate's output can drive simultaneously without voltage drop.

**Propagation Delay (t_p):**
The time delay between input changing and output responding. Lower = faster CPU clock speed.

**Power Dissipation:**
Electrical power consumed by a gate per unit time (turns to heat).

**Noise Margin:**
The ability to tolerate electrical interference without misinterpreting 0s and 1s.

**TTL vs CMOS:**
| Parameter | TTL (7400 Series) | CMOS (4000 Series) |
|-----------|-------------------|-------------------|
| Technology | Bipolar transistors | MOSFETs |
| Speed | Fast (≈10ns) | Medium |
| Power | High (≈10 mW/gate) | Near zero static |
| Fan-out | 10 | Very high |
| Best use | Lab circuits | Battery devices |`,
      pa: `**Fan-in (ਫੈਨ-ਇਨ):**
ਇੱਕ ਗੇਟ ਕਿੰਨੀਆਂ ਇਨਪੁੱਟ ਤਾਰਾਂ ਨੂੰ ਸਹੀ ਢੰਗ ਨਾਲ ਸੰਭਾਲ ਸਕਦਾ ਹੈ।

**Fan-out (ਫੈਨ-ਆਊਟ):**
ਇੱਕ ਗੇਟ ਦਾ ਆਉਟਪੁੱਟ ਅੱਗੇ ਹੋਰ ਕਿੰਨੇ ਗੇਟਾਂ ਨੂੰ ਚਲਾਉਣ ਦੀ ਤਾਕਤ ਰੱਖਦਾ ਹੈ।

**Propagation Delay (ਪ੍ਰਸਾਰ ਦੇਰੀ):**
ਇਨਪੁੱਟ ਦੇਣ ਤੋਂ ਲੈ ਕੇ ਆਉਟਪੁੱਟ ਆਉਣ ਤੱਕ ਲੱਗਣ ਵਾਲਾ ਸਮਾਂ। ਇਹ ਜਿੰਨਾ ਘੱਟ ਹੋਵੇਗਾ, ਕੰਪਿਊਟਰ ਉਨਾ ਤੇਜ਼ ਹੋਵੇਗਾ।

**Power Dissipation (ਬਿਜਲੀ ਦੀ ਖਪਤ):**
ਗੇਟ ਕਿੰਨੀ ਬਿਜਲੀ ਖਾਂਦਾ ਹੈ ਅਤੇ ਗਰਮੀ ਪੈਦਾ ਕਰਦਾ ਹੈ।

**Noise Margin:**
ਗੇਟ ਦੀ ਬਾਹਰੀ ਖਰਾਬੀ ਜਾਂ ਸਿਗਨਲ ਦੀ ਗੜਬੜ ਨੂੰ ਬਰਦਾਸ਼ਤ ਕਰਨ ਦੀ ਸਮਰੱਥਾ।

**TTL ਅਤੇ CMOS ਦੀ ਤੁਲਨਾ:**
- TTL ਤੇਜ਼ ਹੁੰਦੇ ਹਨ ਪਰ ਬਿਜਲੀ ਜ਼ਿਆਦਾ ਖਾਂਦੇ ਹਨ (ਗਰਮ ਹੁੰਦੇ ਹਨ)।
- CMOS ਬੈਟਰੀ ਘੱਟ ਖਾਂਦੇ ਹਨ, ਇਸ ਲਈ ਇਹ ਮੋਬਾਈਲ ਅਤੇ ਲੈਪਟਾਪਾਂ ਵਿੱਚ ਵਰਤੇ ਜਾਂਦੇ ਹਨ।`
    },
    {
      id: "Q11",
      title: "State and prove De Morgan's theorems using truth tables. Also explain duality principle.",
      en: `**Duality Principle:**
Swap AND (·) with OR (+), and swap 0 with 1. If the original equation is valid, its dual is also valid (e.g. A+1=1 → A·0=0).

**De Morgan's Theorem 1: (A + B)' = A' · B'**
The complement of an OR expression equals the AND of the individual complements.

| A | B | A+B | (A+B)' | A' | B' | A'·B' |
|---|---|-----|--------|----|----|-------|
| 0 | 0 | 0 | **1** | 1 | 1 | **1** ✓ |
| 0 | 1 | 1 | **0** | 1 | 0 | **0** ✓ |
| 1 | 0 | 1 | **0** | 0 | 1 | **0** ✓ |
| 1 | 1 | 1 | **0** | 0 | 0 | **0** ✓ |

**De Morgan's Theorem 2: (A · B)' = A' + B'**
The complement of an AND expression equals the OR of the individual complements.

| A | B | A·B | (A·B)' | A' | B' | A'+B' |
|---|---|-----|--------|----|----|-------|
| 0 | 0 | 0 | **1** | 1 | 1 | **1** ✓ |
| 1 | 1 | 1 | **0** | 0 | 0 | **0** ✓ |`,
      pa: `**Duality Principle (ਦੋਹਰਾਪਣ ਦਾ ਸਿਧਾਂਤ):**
ਜੇਕਰ AND ਦੀ ਜਗ੍ਹਾ OR ਲਿਖੋ, ਅਤੇ 0 ਦੀ ਜਗ੍ਹਾ 1 ਲਿਖੋ, ਤਾਂ ਨਵੀਂ ਸਮੀਕਰਨ ਵੀ ਸਹੀ ਹੁੰਦੀ ਹੈ।

**De Morgan ਦਾ ਪਹਿਲਾ ਨਿਯਮ: (A + B)' = A' · B'**
ਜੋੜ ਦਾ ਉਲਟਾ, ਅਲੱਗ-ਅਲੱਗ ਦੀ ਗੁਣਾ ਦੇ ਬਰਾਬਰ ਹੁੰਦਾ ਹੈ।
*ਸਬੂਤ:* ਜਦੋਂ A=0 ਅਤੇ B=0 ਹੋਵੇ, ਤਾਂ (0+0)' = 1 ਹੁੰਦਾ ਹੈ। ਦੂਜੇ ਪਾਸੇ 1·1 = 1 ਹੁੰਦਾ ਹੈ। ਦੋਵੇਂ ਪਾਸੇ ਬਰਾਬਰ ਹਨ।

**De Morgan ਦਾ ਦੂਜਾ ਨਿਯਮ: (A · B)' = A' + B'**
ਗੁਣਾ ਦਾ ਉਲਟਾ, ਅਲੱਗ-ਅਲੱਗ ਦੇ ਜੋੜ ਦੇ ਬਰਾਬਰ ਹੁੰਦਾ ਹੈ।
*ਸਬੂਤ:* ਜਦੋਂ A=1 ਅਤੇ B=1 ਹੋਵੇ, ਤਾਂ (1·1)' = 0 ਹੁੰਦਾ ਹੈ। ਦੂਜੇ ਪਾਸੇ 0+0 = 0 ਹੁੰਦਾ ਹੈ।`
    },
    {
      id: "Q12",
      title: "Explain minterms, maxterms, SOP, POS, canonical and standard forms.",
      en: `**Minterms:**
A product (AND) term where every variable appears exactly once. Evaluates to 1 for exactly ONE input combination.
- Symbol: m₀, m₁, m₂...

**Maxterms:**
A sum (OR) term where every variable appears exactly once. Evaluates to 0 for exactly ONE input.
- Symbol: M₀, M₁, M₂...

**Canonical SOP (Sum of Products):**
List all minterms where output = 1, then OR them.
- Example: F = Σm(1,3) = A'B + AB

**Canonical POS (Product of Sums):**
List all maxterms where output = 0, then AND them.
- Example: F = ΠM(0,2) = (A+B)(A'+B)

**Standard vs Canonical:**
- Canonical means EVERY term contains EVERY variable.
- Standard forms can have simplified terms missing some variables (e.g. F = B + A'C).`,
      pa: `**Minterms (ਮਿਨ-ਟਰਮ):**
ਅੱਖਰਾਂ ਦੀ ਗੁਣਾ (AND) ਜਿਸਦਾ ਜਵਾਬ ਸਿਰਫ਼ ਇੱਕ ਵਾਰ 1 ਆਉਂਦਾ ਹੈ।

**Maxterms (ਮੈਕਸ-ਟਰਮ):**
ਅੱਖਰਾਂ ਦਾ ਜੋੜ (OR) ਜਿਸਦਾ ਜਵਾਬ ਸਿਰਫ਼ ਇੱਕ ਵਾਰ 0 ਆਉਂਦਾ ਹੈ।

**SOP (Sum of Products):**
Minterms ਨੂੰ ਆਪਸ ਵਿੱਚ ਜੋੜਨਾ (OR ਕਰਨਾ)।
ਉਦਾਹਰਣ: A'B + AB

**POS (Product of Sums):**
Maxterms ਨੂੰ ਆਪਸ ਵਿੱਚ ਗੁਣਾ ਕਰਨਾ (AND ਕਰਨਾ)।
ਉਦਾਹਰਣ: (A+B)·(A'+B)

**Canonical ਫਾਰਮ:**
ਜਿਸ ਵਿੱਚ ਹਰੇਕ ਹਿੱਸੇ ਵਿੱਚ ਸਾਰੇ ਅੱਖਰ ਮੌਜੂਦ ਹੋਣ। Standard ਫਾਰਮ ਵਿੱਚ ਅੱਖਰ ਘੱਟ ਵੀ ਹੋ ਸਕਦੇ ਹਨ (ਜਿਵੇਂ ਛੋਟੀ ਕੀਤੀ ਗਈ ਸਮੀਕਰਨ)।`
    },
    {
      id: "Q13",
      title: "Simplify using Karnaugh Map: F(A, B, C, D) = Σ(0, 1, 3, 5, 7, 8, 9, 11, 15)",
      en: `**Step 1:** Draw 4-variable K-Map. Place 1s at minterms 0,1,3,5,7,8,9,11,15.

\`\`\`
         CD
AB    00  01  11  10
00  [  1 | 1 | 1 | 0 ]
01  [  0 | 1 | 1 | 0 ]
11  [  0 | 0 | 1 | 0 ]
10  [  1 | 1 | 1 | 0 ]
\`\`\`

**Step 2: Form groups**
- Group 1: Quad of {0, 1, 8, 9} (Corners/edges left) → **B'C'**
- Group 2: Quad of {1, 3, 5, 7} → **A'D**
- Group 3: Quad of {3, 7, 11, 15} (Vertical column) → **CD**

**Simplified Expression: F = B'C' + A'D + CD**`,
      pa: `4 ਅੱਖਰਾਂ ਵਾਲੇ K-Map ਵਿੱਚ 16 ਡੱਬੇ ਹੁੰਦੇ ਹਨ। ਦਿੱਤੇ ਗਏ ਨੰਬਰਾਂ ਵਾਲੇ ਡੱਬਿਆਂ ਵਿੱਚ 1 ਲਿਖੋ।

ਗਰੁੱਪ ਬਣਾਉਣਾ:
- ਗਰੁੱਪ 1: 0, 1, 8, 9 ਵਾਲੇ ਡੱਬਿਆਂ ਦਾ ਗਰੁੱਪ ਮਿਲ ਕੇ **B'C'** ਬਣਾਉਂਦਾ ਹੈ।
- ਗਰੁੱਪ 2: 1, 3, 5, 7 ਵਾਲੇ ਡੱਬੇ ਮਿਲ ਕੇ **A'D** ਬਣਾਉਂਦੇ ਹਨ।
- ਗਰੁੱਪ 3: 3, 7, 11, 15 ਵਾਲੇ ਡੱਬਿਆਂ ਦਾ ਲੰਬਾ ਗਰੁੱਪ **CD** ਬਣਾਉਂਦਾ ਹੈ।

**ਫਾਈਨਲ ਜਵਾਬ: F = B'C' + A'D + CD**`
    },
    {
      id: "Q14",
      title: "Simplify using K-Map: F(A, B, C, D) = Σ(1, 2, 3, 5, 7, 9, 11, 13)",
      en: `**K-Map:**
\`\`\`
         CD
AB    00  01  11  10
00  [  0 | 1 | 1 | 1 ]
01  [  0 | 1 | 1 | 0 ]
11  [  0 | 1 | 0 | 0 ]
10  [  0 | 1 | 1 | 0 ]
\`\`\`

**Groups:**
- Group 1: {1,3,5,7} → **A'D**
- Group 2: {1,5,9,13} → **C'D**
- Group 3: {1,3,9,11} → **B'D**
- Group 4: {2,3} → **A'B'C**

**F = A'D + C'D + B'D + A'B'C**`,
      pa: `ਦਿੱਤੇ ਗਏ ਨੰਬਰਾਂ 'ਤੇ 1 ਰੱਖ ਕੇ K-Map ਬਣਾਓ।

ਗਰੁੱਪ:
- ਗਰੁੱਪ 1: 1, 3, 5, 7 (4 ਦਾ ਗਰੁੱਪ) → **A'D**
- ਗਰੁੱਪ 2: 1, 5, 9, 13 (4 ਦਾ ਗਰੁੱਪ) → **C'D**
- ਗਰੁੱਪ 3: 1, 3, 9, 11 (4 ਦਾ ਗਰੁੱਪ) → **B'D**
- ਗਰੁੱਪ 4: 2, 3 (2 ਦਾ ਗਰੁੱਪ) → **A'B'C**

**ਫਾਈਨਲ ਜਵਾਬ: F = A'D + C'D + B'D + A'B'C**`
    },
    {
      id: "Q15",
      title: "Explain the working of universal gates with diagrams and conversions (NAND and NOR).",
      en: `**Universal Gate:** A gate that can implement any other Boolean function. NAND and NOR are universal.

**NAND as Universal Gate:**
- **NOT from NAND:** Tie both inputs together. NAND(A,A) = A'
- **AND from NAND:** Put a NAND gate, then invert its output using a second NOT-NAND.
- **OR from NAND:** Invert A and B using NOT-NANDs, then feed both into a third NAND.

**NOR as Universal Gate:**
- **NOT:** Tie inputs together. NOR(A,A) = A'
- **OR:** Invert the output of a NOR using a second NOR.
- **AND:** Invert A and B, then feed into a third NOR.

*Manufacturing importance: Factories can build entire computers using just millions of NAND gates, standardizing production.*`,
      pa: `**ਯੂਨੀਵਰਸਲ ਗੇਟ:** ਉਹ ਗੇਟ ਜਿਨ੍ਹਾਂ ਦੀ ਮਦਦ ਨਾਲ ਅਸੀਂ ਕੋਈ ਵੀ ਹੋਰ ਗੇਟ ਬਣਾ ਸਕਦੇ ਹਾਂ। NAND ਅਤੇ NOR ਯੂਨੀਵਰਸਲ ਹਨ।

**NAND ਗੇਟ ਦੀ ਵਰਤੋਂ:**
- **NOT ਬਣਾਉਣਾ:** NAND ਗੇਟ ਦੀਆਂ ਦੋਵੇਂ ਇਨਪੁੱਟ ਤਾਰਾਂ ਨੂੰ ਇਕੱਠਾ ਜੋੜ ਦਿਓ।
- **AND ਬਣਾਉਣਾ:** ਇੱਕ NAND ਗੇਟ ਦੇ ਆਉਟਪੁੱਟ 'ਤੇ ਇੱਕ ਹੋਰ NOT-NAND ਲਗਾ ਦਿਓ।
- **OR ਬਣਾਉਣਾ:** ਪਹਿਲਾਂ ਇਨਪੁੱਟਾਂ ਨੂੰ NOT-NAND ਨਾਲ ਉਲਟਾਓ, ਫਿਰ ਉਨ੍ਹਾਂ ਨੂੰ ਤੀਜੇ NAND ਗੇਟ ਵਿੱਚ ਦਿਓ।

ਫੈਕਟਰੀਆਂ ਵਿੱਚ ਇਹ ਬਹੁਤ ਜ਼ਰੂਰੀ ਹਨ ਕਿਉਂਕਿ ਕੰਪਨੀਆਂ ਸਿਰਫ਼ ਇੱਕੋ ਤਰ੍ਹਾਂ ਦੀ ਚਿੱਪ (NAND) ਬਣਾ ਕੇ ਪੂਰਾ ਕੰਪਿਊਟਰ ਤਿਆਰ ਕਰ ਸਕਦੀਆਂ ਹਨ, ਜਿਸ ਨਾਲ ਪੈਸਾ ਬਚਦਾ ਹੈ।`
    }
  ]
};
