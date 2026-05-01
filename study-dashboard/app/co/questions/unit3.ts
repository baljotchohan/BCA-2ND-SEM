export const unit3 = {
  unit: "UNIT III — COMBINATIONAL CIRCUITS",
  questions: [
    {
      id: "Q16",
      title: "Design a full adder circuit using two half adders and an OR gate. Draw the block diagram.",
      en: `**Half Adder Review:** Outputs are Sum = A⊕B, Carry = A·B.

**Full Adder Requirements:** Inputs A, B, Carry-in (Cin).

**Construction Using 2 HAs + 1 OR:**
1. **Half Adder 1 (HA1):** Takes inputs A and B. Outputs TempSum and TempCarry.
2. **Half Adder 2 (HA2):** Takes TempSum and Cin. Outputs Final Sum (A⊕B⊕Cin) and SecondCarry.
3. **OR Gate:** Connects TempCarry and SecondCarry to produce Final Carry-Out.

**Block Diagram:**
\`\`\`
A ─┬──────────────→ [HA1] ──→ TempSum ─────→ [HA2] ──→ FINAL SUM
B ─┘                    └──→ TempCarry ──┐
                                          ├──→ [OR] ──→ FINAL CARRY-OUT
Cin ──────────────────────────────────→ [HA2]
                                    └──→ SecondCarry ─┘
\`\`\``,
      pa: `**ਹਾਫ ਐਡਰ (Half Adder):** ਇਸਦੇ ਦੋ ਆਉਟਪੁੱਟ ਹੁੰਦੇ ਹਨ: Sum = A⊕B ਅਤੇ Carry = A·B.

**ਫੁੱਲ ਐਡਰ (Full Adder):** ਇਸਦੇ ਤਿੰਨ ਇਨਪੁੱਟ ਹੁੰਦੇ ਹਨ: A, B ਅਤੇ Carry-in.

**ਬਣਾਉਣ ਦਾ ਤਰੀਕਾ:**
1. **ਪਹਿਲਾ ਹਾਫ ਐਡਰ:** ਇਨਪੁੱਟ A ਅਤੇ B ਲੈਂਦਾ ਹੈ, ਅਤੇ TempSum ਅਤੇ TempCarry ਕੱਢਦਾ ਹੈ।
2. **ਦੂਜਾ ਹਾਫ ਐਡਰ:** ਇਹ TempSum ਅਤੇ Carry-in ਨੂੰ ਇਨਪੁੱਟ ਵਜੋਂ ਲੈਂਦਾ ਹੈ ਅਤੇ Final Sum ਬਣਾਉਂਦਾ ਹੈ।
3. **OR ਗੇਟ:** ਦੋਵਾਂ ਹਾਫ ਐਡਰਾਂ ਦੇ ਕੈਰੀ (Carry) ਨੂੰ OR ਗੇਟ ਨਾਲ ਜੋੜ ਕੇ Final Carry ਬਣਾਇਆ ਜਾਂਦਾ ਹੈ।`
    },
    {
      id: "Q17",
      title: "Explain Half Subtractor and Full Subtractor with truth tables.",
      en: `**Half Subtractor:**
Subtracts two single bits. Produces Difference (D) and Borrow (Bout).
- D = A ⊕ B
- Bout = A' · B
- Rule: 0−1 requires borrowing 1.

| A | B | D = A−B | Borrow_out |
|---|---|---------|-----------|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 1 (borrow needed) |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 |

**Full Subtractor:**
Subtracts two bits AND a borrow-in from the previous column.
- D = A ⊕ B ⊕ Bin
- Bout = A'B + A'Bin + BBin
*(Note: Real CPUs don't use subtractors; they use 2's complement adders to perform subtraction.)*`,
      pa: `**ਹਾਫ ਸਬਟਰੈਕਟਰ (Half Subtractor):**
ਇਹ ਦੋ ਬਿੱਟਾਂ ਦੀ ਘਟਾਓ ਕਰਦਾ ਹੈ। ਜਵਾਬ ਵਿੱਚ Difference (D) ਅਤੇ Borrow (ਉਧਾਰ) ਮਿਲਦਾ ਹੈ।
- 0 ਵਿੱਚੋਂ 1 ਘਟਾਉਣ ਲਈ ਉਧਾਰ ਲੈਣਾ ਪੈਂਦਾ ਹੈ।
- ਸਮੀਕਰਨ: D = A ⊕ B, Borrow = A' · B

**ਫੁੱਲ ਸਬਟਰੈਕਟਰ (Full Subtractor):**
ਇਹ ਤਿੰਨ ਬਿੱਟਾਂ ਦੀ ਘਟਾਓ ਕਰਦਾ ਹੈ (ਦੋ ਨੰਬਰ + ਇੱਕ ਪਿਛਲਾ ਉਧਾਰ)।
- ਅਸਲ ਕੰਪਿਊਟਰਾਂ ਵਿੱਚ ਘਟਾਓ ਲਈ ਸਬਟਰੈਕਟਰ ਦੀ ਵਰਤੋਂ ਨਹੀਂ ਹੁੰਦੀ, ਸਗੋਂ 2's complement ਐਡਰ ਦੀ ਵਰਤੋਂ ਹੁੰਦੀ ਹੈ।`
    },
    {
      id: "Q18",
      title: "Explain 4×16 decoder using 2×4 decoders with a diagram.",
      en: `A **Decoder** takes n binary inputs and activates exactly ONE of 2ⁿ output lines.

**Building 4×16 Decoder Using 5 Two-to-Four Decoders:**
We have 4 inputs: A (MSB), B, C, D (LSB). Need 16 outputs.

**Architecture:**
- **1 Master** 2×4 decoder takes the 2 MSBs: A and B.
- **4 Slave** 2×4 decoders, each taking C and D.
- Master's 4 outputs (Y0, Y1, Y2, Y3) connect to the **Enable** pins of the 4 slave decoders.

**How it works:**
- If AB = 00, Master enables Slave 0. Slave 0 decodes CD to activate exactly one line between Y0 and Y3.
- If AB = 11, Master enables Slave 3. Slave 3 decodes CD to activate a line between Y12 and Y15.`,
      pa: `**ਡੀਕੋਡਰ (Decoder):** ਇਹ ਇਨਪੁੱਟ ਲੈ ਕੇ ਆਉਟਪੁੱਟ ਦੀਆਂ ਕਈ ਲਾਈਨਾਂ ਵਿੱਚੋਂ ਸਿਰਫ਼ ਇੱਕ ਲਾਈਨ ਨੂੰ ਚਾਲੂ (High) ਕਰਦਾ ਹੈ।

**4×16 ਡੀਕੋਡਰ ਬਣਾਉਣਾ:**
ਇਸ ਨੂੰ ਬਣਾਉਣ ਲਈ ਸਾਨੂੰ ਪੰਜ 2×4 ਡੀਕੋਡਰ ਚਾਹੀਦੇ ਹਨ।

- ਪਹਿਲੇ ਦੋ ਇਨਪੁੱਟ (A, B) ਇੱਕ ਮੁੱਖ (Master) ਡੀਕੋਡਰ ਨੂੰ ਦਿੱਤੇ ਜਾਂਦੇ ਹਨ।
- ਇਸ ਮੁੱਖ ਡੀਕੋਡਰ ਦੀਆਂ 4 ਆਉਟਪੁੱਟ ਤਾਰਾਂ, ਬਾਕੀ ਦੇ 4 ਛੋਟੇ (Slave) ਡੀਕੋਡਰਾਂ ਨੂੰ ਚਾਲੂ (Enable) ਕਰਨ ਲਈ ਵਰਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ।
- ਬਾਕੀ ਦੇ ਦੋ ਇਨਪੁੱਟ (C, D) ਸਾਰੇ ਛੋਟੇ ਡੀਕੋਡਰਾਂ ਵਿੱਚ ਜਾਂਦੇ ਹਨ।
- ਇਸ ਤਰ੍ਹਾਂ 16 ਵਿੱਚੋਂ ਸਿਰਫ਼ ਇੱਕ ਲਾਈਨ 'ਤੇ ਸਿਗਨਲ ਪਹੁੰਚਦਾ ਹੈ।`
    },
    {
      id: "Q19",
      title: "Explain the working of Multiplexer and Demultiplexer with applications.",
      en: `**Multiplexer (MUX) — Data Selector:**
Selects one of many input lines and routes it to a single output line based on select signals.
- "Many inputs → Select lines → One output"
- **Applications:** Data bus sharing in CPU, parallel-to-serial conversion, radio frequency selection.

**Demultiplexer (DEMUX) — Data Distributor:**
Routes one input to one of many outputs based on select signals.
- "One input → Select lines → Many outputs"
- **Applications:** Serial-to-parallel conversion, routing memory addresses, distributing clock signals.`,
      pa: `**ਮਲਟੀਪਲੈਕਸਰ (MUX) — ਡਾਟਾ ਸਿਲੈਕਟਰ:**
ਇਹ ਕਈ ਇਨਪੁੱਟ ਲਾਈਨਾਂ ਵਿੱਚੋਂ ਡਾਟਾ ਲੈ ਕੇ ਸਿਰਫ਼ ਇੱਕ ਆਉਟਪੁੱਟ ਲਾਈਨ ਰਾਹੀਂ ਭੇਜਦਾ ਹੈ।
- **ਵਰਤੋਂ:** CPU ਵਿੱਚ ਡਾਟਾ ਬੱਸ ਸ਼ੇਅਰ ਕਰਨ ਲਈ, ਕਈ ਕਾਲਾਂ ਨੂੰ ਇੱਕ ਟੈਲੀਫੋਨ ਤਾਰ ਰਾਹੀਂ ਭੇਜਣ ਲਈ।

**ਡੀਮਲਟੀਪਲੈਕਸਰ (DEMUX) — ਡਾਟਾ ਡਿਸਟ੍ਰੀਬਿਊਟਰ:**
ਇਹ 1 ਇਨਪੁੱਟ ਲਾਈਨ ਤੋਂ ਡਾਟਾ ਲੈਂਦਾ ਹੈ ਅਤੇ ਉਸਨੂੰ ਕਈ ਆਉਟਪੁੱਟ ਲਾਈਨਾਂ ਵਿੱਚੋਂ ਕਿਸੇ ਇੱਕ 'ਤੇ ਭੇਜਦਾ ਹੈ।
- **ਵਰਤੋਂ:** ਇੱਕ ਸਿਗਨਲ ਨੂੰ ਅਲੱਗ-ਅਲੱਗ ਹਿੱਸਿਆਂ ਤੱਕ ਪਹੁੰਚਾਉਣ ਲਈ (ਜਿਵੇਂ ਮੈਮਰੀ ਐਡਰੈੱਸ ਰਾਊਟਿੰਗ)।`
    },
    {
      id: "Q20",
      title: "Differentiate between Serial Adder and Parallel Adder.",
      en: `**Serial Adder:**
Uses only ONE full adder. Adds one pair of bits per clock cycle. A D flip-flop stores the carry between cycles.
- **Speed:** Very slow (takes n clock cycles for n bits).
- **Cost:** Very cheap (minimum hardware).

**n-bit Parallel (Ripple Carry) Adder:**
Uses n full adders connected in cascade.
- **Speed:** All bits added simultaneously. Fast, but has a slight "ripple" delay as carry moves from right to left.
- **Cost:** Expensive (needs many gates).
- **Use:** Used in modern CPUs and ALUs.`,
      pa: `**ਸੀਰੀਅਲ ਐਡਰ (Serial Adder):**
ਇਹ ਸਿਰਫ਼ ਇੱਕ ਫੁੱਲ ਐਡਰ ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ। ਇਹ ਨੰਬਰਾਂ ਨੂੰ ਇੱਕ-ਇੱਕ ਅੰਕ ਕਰਕੇ ਜੋੜਦਾ ਹੈ ਅਤੇ ਹਾਸਲ (Carry) ਨੂੰ ਸਟੋਰ ਕਰਨ ਲਈ ਫਲਿੱਪ-ਫਲੌਪ ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ।
- **ਸਪੀਡ:** ਬਹੁਤ ਹੌਲੀ ਹੈ ਕਿਉਂਕਿ ਇਹ ਇੱਕ-ਇੱਕ ਕਰਕੇ ਕੰਮ ਕਰਦਾ ਹੈ।
- **ਖਰਚਾ:** ਬਣਾਉਣ ਵਿੱਚ ਬਹੁਤ ਸਸਤਾ ਹੈ।

**ਪੈਰਲਲ ਐਡਰ (Parallel Adder):**
ਇਸ ਵਿੱਚ ਕਈ ਫੁੱਲ ਐਡਰ ਲੱਗੇ ਹੁੰਦੇ ਹਨ।
- **ਸਪੀਡ:** ਇਹ ਸਾਰੇ ਅੰਕਾਂ ਨੂੰ ਇੱਕੋ ਸਮੇਂ 'ਤੇ ਇਕੱਠਾ ਜੋੜ ਦਿੰਦਾ ਹੈ, ਇਸ ਲਈ ਇਹ ਬਹੁਤ ਤੇਜ਼ ਹੈ।
- **ਖਰਚਾ:** ਬਣਾਉਣ ਵਿੱਚ ਮਹਿੰਗਾ ਹੈ।
- **ਵਰਤੋਂ:** ਅੱਜਕੱਲ੍ਹ ਦੇ ਸਾਰੇ ਕੰਪਿਊਟਰ ਪ੍ਰੋਸੈਸਰਾਂ (CPU) ਵਿੱਚ ਇਹੀ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।`
    }
  ]
};
