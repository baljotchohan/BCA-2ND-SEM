export const compulsory = {
  unit: "COMPULSORY QUESTION (Q9) — SHORT ANSWER TOPICS",
  questions: [
    {
      id: "CQ1",
      title: "What is BCD code? Give an example. (4 marks)",
      en: `BCD (Binary Coded Decimal) is a coding system where each individual decimal digit (0 through 9) is separately represented by its 4-bit binary equivalent.

Key points:
- Weighted code (weights are 8, 4, 2, 1)
- Only 10 of 16 possible 4-bit codes are used (0000 to 1001)
- Codes 1010 to 1111 are INVALID in BCD

Example:
- (49)₁₀ in BCD = **0100 1001** (two groups of 4 bits)
- (256)₁₀ in BCD = **0010 0101 0110** (three groups)

Applications: Digital clocks, calculators, ATMs.`,
      pa: `BCD (ਬਾਈਨਰੀ ਕੋਡਿਡ ਡੈਸੀਮਲ) ਇੱਕ ਅਜਿਹਾ ਤਰੀਕਾ ਹੈ ਜਿਸ ਵਿੱਚ ਡੈਸੀਮਲ ਨੰਬਰ ਦੇ ਹਰੇਕ ਅੰਕ ਨੂੰ ਅਲੱਗ ਤੋਂ 4-ਬਿੱਟ ਬਾਈਨਰੀ ਵਿੱਚ ਲਿਖਿਆ ਜਾਂਦਾ ਹੈ।

ਮੁੱਖ ਗੱਲਾਂ:
- ਇਸ ਵਿੱਚ ਸਿਰਫ਼ 0 ਤੋਂ 9 ਤੱਕ ਦੇ ਅੰਕ ਵਰਤੇ ਜਾਂਦੇ ਹਨ (0000 ਤੋਂ 1001)।
- 1010 ਤੋਂ 1111 ਤੱਕ ਦੇ ਕੋਡ BCD ਵਿੱਚ ਗਲਤ (Invalid) ਮੰਨੇ ਜਾਂਦੇ ਹਨ।

ਉਦਾਹਰਣ:
- 49 ਨੂੰ BCD ਵਿੱਚ ਲਿਖਣ ਲਈ: 4 ਦਾ ਕੋਡ 0100 ਅਤੇ 9 ਦਾ 1001. ਜਵਾਬ: **0100 1001**

ਵਰਤੋਂ: ਕੈਲਕੁਲੇਟਰ, ਡਿਜੀਟਲ ਘੜੀਆਂ, ATM ਮਸ਼ੀਨਾਂ।`
    },
    {
      id: "CQ2",
      title: "Explain the working of Excess-3 code. (4 marks)",
      en: `Excess-3 (XS-3) is an unweighted binary code derived by adding 3 (binary 0011) to the BCD value of each decimal digit.

How it works: Decimal digit → Find BCD value → Add 0011 → Result is XS-3.
Example: 4 → BCD 0100 → Add 0011 = **0111**.

Key property: **Self-complementing**. The 1's complement of an XS-3 digit gives the XS-3 code of its 9's complement. This makes decimal subtraction trivial in hardware.`,
      pa: `Excess-3 (XS-3) ਕੋਡ BCD ਕੋਡ ਵਿੱਚ 3 (ਬਾਈਨਰੀ ਵਿੱਚ 0011) ਜੋੜ ਕੇ ਬਣਾਇਆ ਜਾਂਦਾ ਹੈ।

ਕੰਮ ਕਰਨ ਦਾ ਤਰੀਕਾ: ਡੈਸੀਮਲ ਅੰਕ ਲਓ → ਉਸਦਾ BCD ਲਿਖੋ → 0011 ਜੋੜ ਦਿਓ।
ਉਦਾਹਰਣ: 4 ਦਾ BCD 0100 ਹੈ। ਇਸ ਵਿੱਚ 0011 ਜੋੜਨ 'ਤੇ **0111** ਬਣਦਾ ਹੈ, ਜੋ ਕਿ 4 ਦਾ XS-3 ਕੋਡ ਹੈ।

ਮੁੱਖ ਖਾਸੀਅਤ: ਇਹ Self-complementing ਹੁੰਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਕੰਪਿਊਟਰ ਲਈ ਗਣਿਤ ਦੀ ਘਟਾਓ (Subtraction) ਕਰਨੀ ਬਹੁਤ ਆਸਾਨ ਹੋ ਜਾਂਦੀ ਹੈ।`
    },
    {
      id: "CQ3",
      title: "Define propagation delay in logic gates. (4 marks)",
      en: `Propagation delay (t_p) is the time interval between when an input signal changes to a new logic level and when the output signal responds and settles at its new logic level.

- **t_pHL**: delay when output transitions from HIGH to LOW.
- **t_pLH**: delay when output transitions from LOW to HIGH.

Importance: It sets the maximum operating frequency of a processor. A faster processor requires gates with smaller propagation delays (measured in nanoseconds or picoseconds).`,
      pa: `ਪ੍ਰੋਪੈਗੇਸ਼ਨ ਡਿਲੇਅ (Propagation Delay) ਉਹ ਸਮਾਂ ਹੈ ਜੋ ਇਨਪੁੱਟ ਸਿਗਨਲ ਬਦਲਣ ਤੋਂ ਲੈ ਕੇ ਗੇਟ ਦੇ ਆਉਟਪੁੱਟ ਦੇ ਬਦਲਣ ਤੱਕ ਲੱਗਦਾ ਹੈ।

ਮਹੱਤਵ: ਇਹ ਕੰਪਿਊਟਰ ਦੀ ਸਪੀਡ ਤੈਅ ਕਰਦਾ ਹੈ। ਜਿੰਨਾ ਇਹ ਸਮਾਂ ਘੱਟ ਹੋਵੇਗਾ (ਨੈਨੋਸੈਕਿੰਡਸ ਵਿੱਚ), ਪ੍ਰੋਸੈਸਰ (CPU) ਓਨਾ ਹੀ ਤੇਜ਼ ਕੰਮ ਕਰੇਗਾ।`
    },
    {
      id: "CQ4",
      title: "Differentiate between combinational and sequential circuits. (4 marks)",
      en: `**Combinational Circuit:**
- Output depends ONLY on present inputs.
- No memory elements.
- No clock required.
- Faster.
- Examples: Adder, MUX, Decoder.

**Sequential Circuit:**
- Output depends on present inputs AND past states.
- Contains memory elements (flip-flops).
- Clock required to synchronize operations.
- Examples: Registers, Counters.`,
      pa: `**ਕੰਬੀਨੇਸ਼ਨਲ (Combinational) ਸਰਕਟ:**
- ਆਉਟਪੁੱਟ ਸਿਰਫ਼ ਮੌਜੂਦਾ ਇਨਪੁੱਟ 'ਤੇ ਨਿਰਭਰ ਕਰਦਾ ਹੈ।
- ਇਸ ਵਿੱਚ ਮੈਮਰੀ ਨਹੀਂ ਹੁੰਦੀ।
- ਉਦਾਹਰਣ: ਐਡਰ (Adder), ਡੀਕੋਡਰ।

**ਸਿਕੁਐਂਸ਼ਲ (Sequential) ਸਰਕਟ:**
- ਆਉਟਪੁੱਟ ਮੌਜੂਦਾ ਇਨਪੁੱਟ ਅਤੇ ਪੁਰਾਣੇ ਡਾਟਾ (Past state) 'ਤੇ ਨਿਰਭਰ ਕਰਦਾ ਹੈ।
- ਇਸ ਵਿੱਚ ਮੈਮਰੀ ਹੁੰਦੀ ਹੈ।
- ਇਸ ਨੂੰ ਕੰਮ ਕਰਨ ਲਈ ਕਲੌਕ (Clock) ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ।
- ਉਦਾਹਰਣ: ਰਜਿਸਟਰ, ਕਾਊਂਟਰ।`
    },
    {
      id: "CQ5",
      title: "What is the significance of parity bits? (2 marks)",
      en: `A parity bit is an extra bit appended to a group of data bits to make the total count of 1s either EVEN (even parity) or ODD (odd parity).

Significance:
- **Error detection:** If a bit flips during transmission due to noise, the parity count changes (e.g., from even to odd), alerting the receiver that an error occurred.
- **Low overhead:** Requires only 1 extra bit per word.`,
      pa: `ਪੈਰਿਟੀ ਬਿੱਟ (Parity Bit) ਇੱਕ ਵਾਧੂ ਬਿੱਟ ਹੁੰਦਾ ਹੈ ਜੋ ਡਾਟਾ ਨਾਲ ਜੋੜਿਆ ਜਾਂਦਾ ਹੈ ਤਾਂ ਜੋ 1 ਦੀ ਗਿਣਤੀ ਜਿਸਤ (Even) ਜਾਂ ਟਾਂਕ (Odd) ਰਹੇ।

ਮਹੱਤਵ:
- ਜਦੋਂ ਡਾਟਾ ਭੇਜਿਆ ਜਾਂਦਾ ਹੈ ਤਾਂ ਰਸਤੇ ਵਿੱਚ ਖਰਾਬੀ (Error) ਕਾਰਨ ਜੇਕਰ ਕੋਈ ਬਿੱਟ ਬਦਲ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਗਿਣਤੀ ਬਦਲ ਜਾਂਦੀ ਹੈ। ਇਸ ਨਾਲ ਪ੍ਰਾਪਤ ਕਰਨ ਵਾਲੇ ਨੂੰ ਪਤਾ ਲੱਗ ਜਾਂਦਾ ਹੈ ਕਿ ਡਾਟਾ ਵਿੱਚ ਗਲਤੀ ਹੈ।`
    },
    {
      id: "CQ6",
      title: "Define fan-in and fan-out. (2 marks)",
      en: `**Fan-in:** The maximum number of input signals a logic gate can accept while still producing a valid output without voltage drop.
**Fan-out:** The maximum number of other gates' inputs that one gate's output can simultaneously drive while maintaining valid logic levels.`,
      pa: `**Fan-in:** ਇੱਕ ਗੇਟ ਦੀਆਂ ਕਿੰਨੀਆਂ ਇਨਪੁੱਟ ਤਾਰਾਂ ਹੋ ਸਕਦੀਆਂ ਹਨ ਜਿਸ ਨਾਲ ਉਹ ਸਹੀ ਕੰਮ ਕਰ ਸਕੇ।
**Fan-out:** ਇੱਕ ਗੇਟ ਦਾ ਆਉਟਪੁੱਟ ਅੱਗੇ ਹੋਰ ਕਿੰਨੇ ਗੇਟਾਂ ਨੂੰ ਸਹੀ ਸਿਗਨਲ ਭੇਜ ਕੇ ਚਲਾ ਸਕਦਾ ਹੈ।`
    },
    {
      id: "CQ7",
      title: "What is Gray Code? How is it different from BCD? (4 marks)",
      en: `**Gray Code (Reflected Binary Code):**
A binary code where only ONE bit changes between any two consecutive numbers. (e.g., 001 → 011 → 010).

**Difference from BCD:**
- Gray code is unweighted; BCD is weighted (8421).
- In Gray code, exactly 1 bit changes per step. In BCD, multiple bits can change (e.g., 7 to 8 is 0111 to 1000 — 4 bits change).
- Gray code is used in hardware encoders to prevent mechanical errors; BCD is used for digital displays.`,
      pa: `**ਗ੍ਰੇ ਕੋਡ (Gray Code):**
ਇਹ ਇੱਕ ਅਜਿਹਾ ਕੋਡ ਹੈ ਜਿਸ ਵਿੱਚ ਲਗਾਤਾਰ ਆਉਣ ਵਾਲੇ ਨੰਬਰਾਂ ਦੇ ਵਿਚਕਾਰ ਸਿਰਫ਼ ਇੱਕ ਬਿੱਟ ਹੀ ਬਦਲਦਾ ਹੈ।

**BCD ਤੋਂ ਵੱਖਰਾ ਕਿਵੇਂ ਹੈ:**
- BCD ਵਿੱਚ ਅੰਕਾਂ ਦਾ ਭਾਰ (Weight - 8,4,2,1) ਹੁੰਦਾ ਹੈ, ਗ੍ਰੇ ਕੋਡ ਵਿੱਚ ਕੋਈ ਭਾਰ ਨਹੀਂ ਹੁੰਦਾ।
- BCD ਵਿੱਚ ਇੱਕ ਨੰਬਰ ਬਦਲਣ ਨਾਲ ਕਈ ਬਿੱਟ ਬਦਲ ਸਕਦੇ ਹਨ, ਪਰ ਗ੍ਰੇ ਕੋਡ ਵਿੱਚ ਹਮੇਸ਼ਾ ਸਿਰਫ਼ 1 ਬਿੱਟ ਬਦਲਦਾ ਹੈ।
- ਗ੍ਰੇ ਕੋਡ ਮਸ਼ੀਨਾਂ ਵਿੱਚ ਗਲਤੀਆਂ ਰੋਕਣ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ, ਜਦਕਿ BCD ਕੈਲਕੁਲੇਟਰਾਂ ਦੀ ਡਿਸਪਲੇ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।`
    },
    {
      id: "CQ8",
      title: "What is ASCII? How is it different from EBCDIC? (4 marks)",
      en: `**ASCII:** American Standard Code for Information Interchange. A 7-bit code (128 characters) standard for PC keyboards and internet text. Letters are strictly sequential.

**EBCDIC:** Extended Binary Coded Decimal Interchange Code. An 8-bit code (256 characters) developed by IBM. Letters are not perfectly sequential. Used ONLY in IBM mainframe computers.`,
      pa: `**ASCII (ਆਸਕੀ):** ਇਹ 7-ਬਿੱਟ ਦਾ ਕੋਡ ਹੈ ਜੋ 128 ਅੱਖਰਾਂ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ। ਇਹ ਸਾਰੇ ਆਮ ਕੰਪਿਊਟਰਾਂ, ਕੀਬੋਰਡਾਂ, ਅਤੇ ਇੰਟਰਨੈੱਟ 'ਤੇ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।

**EBCDIC:** ਇਹ 8-ਬਿੱਟ ਦਾ ਕੋਡ ਹੈ (256 ਅੱਖਰ)। ਇਸਨੂੰ IBM ਕੰਪਨੀ ਨੇ ਬਣਾਇਆ ਸੀ ਅਤੇ ਇਹ ਸਿਰਫ਼ ਉਨ੍ਹਾਂ ਦੇ ਵੱਡੇ ਮੇਨਫ੍ਰੇਮ (Mainframe) ਕੰਪਿਊਟਰਾਂ ਵਿੱਚ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ। ਇਹ ASCII ਨਾਲ ਮੇਲ ਨਹੀਂ ਖਾਂਦਾ।`
    },
    {
      id: "CQ9",
      title: "Define setup time and hold time of a flip-flop. (4 marks)",
      en: `**Setup Time (t_su):**
The minimum time period during which the data input D must be stable and unchanged BEFORE the active clock edge occurs.

**Hold Time (t_h):**
The minimum time period during which the data input D must remain stable and unchanged AFTER the active clock edge occurs.

*If data changes in this forbidden window, the flip-flop crashes (metastability).*`,
      pa: `**Setup Time:**
ਕਲੌਕ ਸਿਗਨਲ ਦੇ ਪਹੁੰਚਣ ਤੋਂ ਕੁਝ ਸਮਾਂ ਪਹਿਲਾਂ ਡਾਟਾ (D) ਨੂੰ ਸਥਿਰ (Stable) ਰਹਿਣਾ ਚਾਹੀਦਾ ਹੈ। ਇਸ ਸਮੇਂ ਨੂੰ ਸੈੱਟਅੱਪ ਟਾਈਮ ਕਹਿੰਦੇ ਹਨ।

**Hold Time:**
ਕਲੌਕ ਸਿਗਨਲ ਦੇ ਪਹੁੰਚਣ ਤੋਂ ਬਾਅਦ ਵੀ ਡਾਟਾ ਨੂੰ ਕੁਝ ਦੇਰ ਲਈ ਸਥਿਰ ਰਹਿਣਾ ਚਾਹੀਦਾ ਹੈ। ਇਸਨੂੰ ਹੋਲਡ ਟਾਈਮ ਕਹਿੰਦੇ ਹਨ।
ਜੇਕਰ ਡਾਟਾ ਇਸ ਸਮੇਂ ਦੌਰਾਨ ਹਿੱਲ ਜਾਵੇ, ਤਾਂ ਗਲਤ ਸੇਵ ਹੋ ਜਾਵੇਗਾ।`
    },
    {
      id: "CQ10",
      title: "Differentiate between synchronous and asynchronous counters. (4 marks)",
      en: `1. **Clock:** Async counters only clock the 1st flip-flop. Sync counters clock ALL flip-flops simultaneously.
2. **Speed:** Async is slow due to ripple delay. Sync is extremely fast.
3. **Glitches:** Async produces momentary glitches. Sync produces clean outputs.
4. **Complexity:** Async is easy to wire. Sync requires complex logic gates.`,
      pa: `1. **ਕਲੌਕ:** ਅਸਿੰਕ੍ਰੋਨਸ ਵਿੱਚ ਮੁੱਖ ਕਲੌਕ ਸਿਰਫ਼ ਪਹਿਲੇ ਫਲਿੱਪ-ਫਲੌਪ ਨੂੰ ਮਿਲਦੀ ਹੈ। ਸਿੰਕ੍ਰੋਨਸ ਵਿੱਚ ਸਾਰਿਆਂ ਨੂੰ ਇਕੱਠੀ ਮਿਲਦੀ ਹੈ।
2. **ਸਪੀਡ:** ਅਸਿੰਕ੍ਰੋਨਸ ਹੌਲੀ ਕੰਮ ਕਰਦਾ ਹੈ। ਸਿੰਕ੍ਰੋਨਸ ਬਹੁਤ ਤੇਜ਼ ਕੰਮ ਕਰਦਾ ਹੈ।
3. **ਗਲਤੀਆਂ:** ਅਸਿੰਕ੍ਰੋਨਸ ਵਿੱਚ ਥੋੜ੍ਹੀ ਦੇਰ ਲਈ ਗਲਤ ਨਤੀਜੇ (Glitches) ਦਿਖ ਸਕਦੇ ਹਨ। ਸਿੰਕ੍ਰੋਨਸ ਬਿਲਕੁਲ ਸਹੀ ਕੰਮ ਕਰਦਾ ਹੈ।`
    },
    {
      id: "CQ11",
      title: "What is race-around condition in JK flip-flop? (4 marks)",
      en: `When J=K=1 and the clock pulse remains HIGH for longer than the propagation delay of the flip-flop, the output toggles repeatedly in an endless loop during that single clock period. 
Result: The final state is unpredictable.
Solution: Edge-triggering or Master-Slave configuration.`,
      pa: `ਜਦੋਂ JK ਫਲਿੱਪ-ਫਲੌਪ ਵਿੱਚ J=1 ਅਤੇ K=1 ਹੁੰਦਾ ਹੈ, ਤਾਂ ਇਹ ਟੌਗਲ (Toggle) ਹੁੰਦਾ ਹੈ। ਪਰ ਜੇਕਰ ਕਲੌਕ ਲੰਬੇ ਸਮੇਂ ਲਈ ON ਰਹੇ, ਤਾਂ ਆਉਟਪੁੱਟ ਬਹੁਤ ਤੇਜ਼ੀ ਨਾਲ ਵਾਰ-ਵਾਰ ਬਦਲਦੀ ਹੈ (0-1-0-1)।
ਇਸ ਨਾਲ ਫਾਈਨਲ ਜਵਾਬ ਗਲਤ ਆਉਂਦਾ ਹੈ। ਇਸਨੂੰ ਮਾਸਟਰ-ਸਲੇਵ ਫਲਿੱਪ-ਫਲੌਪ ਵਰਤ ਕੇ ਠੀਕ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।`
    },
    {
      id: "CQ12",
      title: "Explain the four types of shift registers briefly. (4 marks)",
      en: `- **SISO:** Data in one bit at a time, out one bit at a time. Slowest.
- **SIPO:** Data in serially, read out simultaneously (parallel).
- **PISO:** All bits loaded at once in parallel, shifted out serially.
- **PIPO:** All bits loaded and read simultaneously. Fastest.`,
      pa: `- **SISO:** ਡਾਟਾ ਇੱਕ-ਇੱਕ ਬਿੱਟ ਕਰਕੇ ਅੰਦਰ ਜਾਂਦਾ ਹੈ ਅਤੇ ਇੱਕ-ਇੱਕ ਕਰਕੇ ਬਾਹਰ ਆਉਂਦਾ ਹੈ।
- **SIPO:** ਅੰਦਰ ਇੱਕ-ਇੱਕ ਕਰਕੇ, ਪਰ ਸਾਰਾ ਇਕੱਠਾ ਬਾਹਰ।
- **PISO:** ਸਾਰਾ ਡਾਟਾ ਇਕੱਠਾ ਅੰਦਰ, ਪਰ ਇੱਕ-ਇੱਕ ਕਰਕੇ ਬਾਹਰ।
- **PIPO:** ਸਾਰਾ ਡਾਟਾ ਇਕੱਠਾ ਅੰਦਰ ਅਤੇ ਇਕੱਠਾ ਬਾਹਰ (ਸਭ ਤੋਂ ਤੇਜ਼)।`
    },
    {
      id: "CQ13",
      title: "What is a decoder? How is it different from an encoder? (4 marks)",
      en: `**Decoder:** Takes n binary inputs and activates EXACTLY ONE of 2ⁿ output lines. (E.g. input 101 → output line 5 is HIGH).
**Encoder:** The reverse. Takes 2ⁿ inputs (where only one is active) and outputs the n-bit binary code. (E.g. input line 5 is HIGH → outputs 101).`,
      pa: `**ਡੀਕੋਡਰ (Decoder):** ਇਹ ਇਨਪੁੱਟ ਲੈਂਦਾ ਹੈ ਅਤੇ ਕਈ ਆਉਟਪੁੱਟ ਲਾਈਨਾਂ ਵਿੱਚੋਂ ਸਿਰਫ਼ ਇੱਕ ਲਾਈਨ ਨੂੰ ਚਾਲੂ ਕਰਦਾ ਹੈ।
**ਐਨਕੋਡਰ (Encoder):** ਇਹ ਬਿਲਕੁਲ ਉਲਟ ਹੈ। ਇਹ ਕਈ ਇਨਪੁੱਟ ਲਾਈਨਾਂ ਲੈਂਦਾ ਹੈ (ਜਿਨ੍ਹਾਂ ਵਿੱਚੋਂ ਇੱਕ ਚਾਲੂ ਹੁੰਦੀ ਹੈ) ਅਤੇ ਉਸਦਾ ਬਾਈਨਰੀ ਕੋਡ ਆਉਟਪੁੱਟ ਦਿੰਦਾ ਹੈ।`
    },
    {
      id: "CQ14",
      title: "What is a Multiplexer? How does it implement Boolean functions? (4 marks)",
      en: `**Multiplexer:** Selects one of 2ⁿ input data lines and routes it to a single output based on select lines.
**Implementation:** Any function can be made using a MUX. You connect the function's truth table results (0 or 1) directly to the MUX data inputs, and connect the variables (A, B) to the select lines. The MUX automatically outputs the correct logic result.`,
      pa: `**ਮਲਟੀਪਲੈਕਸਰ (MUX):** ਇਹ ਕਈ ਇਨਪੁੱਟ ਲਾਈਨਾਂ ਵਿੱਚੋਂ ਕਿਸੇ ਇੱਕ ਨੂੰ ਚੁਣ ਕੇ ਉਸਦਾ ਡਾਟਾ ਅੱਗੇ ਆਉਟਪੁੱਟ 'ਤੇ ਭੇਜਦਾ ਹੈ।
**Boolean Function ਬਣਾਉਣਾ:** ਅਸੀਂ Truth Table ਦੇ ਜਵਾਬਾਂ (0 ਜਾਂ 1) ਨੂੰ ਸਿੱਧਾ MUX ਦੇ ਇਨਪੁੱਟ 'ਤੇ ਲਗਾ ਸਕਦੇ ਹਾਂ। MUX ਆਪਣੇ ਆਪ ਸਹੀ ਨਤੀਜਾ ਆਉਟਪੁੱਟ ਕਰ ਦੇਵੇਗਾ।`
    }
  ]
};
