export const unit4 = {
  unit: "UNIT IV — SEQUENTIAL CIRCUITS",
  questions: [
    {
      id: "Q21",
      title: "Explain the working of SR, D, JK, and T flip-flops with truth tables.",
      en: `**SR Flip-Flop (Set-Reset):**
The fundamental memory element.
- S=1, R=0 → Set (Q=1)
- S=0, R=1 → Reset (Q=0)
- S=1, R=1 → Forbidden (causes system crash).

**D Flip-Flop (Data):**
Eliminates SR's forbidden state. Output simply follows D at each clock edge. Used in all CPU memory/registers.
- D=0 → Q=0
- D=1 → Q=1

**JK Flip-Flop:**
Most versatile. Fixes SR by making J=K=1 a "Toggle" state instead of crashing.
- J=1, K=1 → Toggles output (0 becomes 1, 1 becomes 0).

**T Flip-Flop (Toggle):**
Simplified JK with J=K=T. 
- T=1 → Toggles on every clock edge. Used in counting circuits.`,
      pa: `**SR ਫਲਿੱਪ-ਫਲੌਪ (Set-Reset):**
ਇਹ ਮੁੱਢਲਾ ਮੈਮਰੀ ਐਲੀਮੈਂਟ ਹੈ।
- ਜਦੋਂ S=1, R=0 ਹੋਵੇ ਤਾਂ ਆਉਟਪੁੱਟ 1 (Set) ਹੁੰਦਾ ਹੈ।
- ਜਦੋਂ S=1, R=1 ਹੋਵੇ ਤਾਂ ਗਲਤੀ (Forbidden state) ਆਉਂਦੀ ਹੈ।

**D ਫਲਿੱਪ-ਫਲੌਪ (Data):**
ਇਸ ਵਿੱਚ SR ਵਾਲੀ ਗਲਤੀ ਨਹੀਂ ਆਉਂਦੀ। ਜੋ ਡਾਟਾ ਅਸੀਂ D 'ਤੇ ਦਿੰਦੇ ਹਾਂ, ਉਹੀ ਆਉਟਪੁੱਟ Q 'ਤੇ ਆ ਜਾਂਦਾ ਹੈ। ਇਹ CPU ਦੀ ਮੈਮਰੀ ਵਿੱਚ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।

**JK ਫਲਿੱਪ-ਫਲੌਪ:**
ਇਹ ਸਭ ਤੋਂ ਵਧੀਆ ਹੈ। ਜਦੋਂ J=1 ਅਤੇ K=1 ਹੁੰਦਾ ਹੈ, ਤਾਂ ਇਹ ਗਲਤੀ ਨਹੀਂ ਦਿੰਦਾ, ਸਗੋਂ ਡਾਟਾ ਨੂੰ ਉਲਟਾ ਦਿੰਦਾ ਹੈ (Toggle ਕਰਦਾ ਹੈ)।

**T ਫਲਿੱਪ-ਫਲੌਪ (Toggle):**
ਇਹ ਸਿਰਫ਼ Toggle ਕਰਨ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ (0 ਨੂੰ 1, ਅਤੇ 1 ਨੂੰ 0)। ਇਹ ਡਿਜੀਟਲ ਘੜੀਆਂ ਅਤੇ ਕਾਊਂਟਰਾਂ ਵਿੱਚ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।`
    },
    {
      id: "Q22",
      title: "Describe the JK Flip-Flop. Explain race-around condition and how to avoid it using Master-Slave configuration.",
      en: `**Race-Around Condition:**
When J=K=1 and the clock pulse is HIGH, the output Q toggles. However, if the clock stays HIGH longer than the gate's delay, the output feeds back and toggles *again* endlessly (racing 0-1-0-1...).
Result: Unpredictable output when clock finally goes LOW.

**Solution: Master-Slave JK Flip-Flop**
Uses two flip-flops in series.
- **Master** takes J, K inputs only when clock is HIGH.
- **Slave** outputs only when clock is LOW.
- Because they never operate simultaneously, the output can only toggle EXACTLY once per clock cycle. Race-around is eliminated.`,
      pa: `**ਰੇਸ-ਅਰਾਊਂਡ ਸਮੱਸਿਆ (Race-Around Condition):**
ਜਦੋਂ JK ਫਲਿੱਪ-ਫਲੌਪ ਵਿੱਚ J=1 ਅਤੇ K=1 ਹੁੰਦਾ ਹੈ, ਤਾਂ ਇਹ ਟੌਗਲ (ਉਲਟ) ਹੁੰਦਾ ਹੈ। ਪਰ ਜੇਕਰ ਕਲੌਕ ਲੰਬੇ ਸਮੇਂ ਲਈ ON ਰਹੇ, ਤਾਂ ਆਉਟਪੁੱਟ ਬਹੁਤ ਤੇਜ਼ੀ ਨਾਲ ਵਾਰ-ਵਾਰ ਬਦਲਦੀ ਹੈ (0-1-0-1)। ਇਸ ਨਾਲ ਫਾਈਨਲ ਜਵਾਬ ਗਲਤ ਆਉਂਦਾ ਹੈ।

**ਹੱਲ: ਮਾਸਟਰ-ਸਲੇਵ (Master-Slave) ਫਲਿੱਪ-ਫਲੌਪ**
ਇਸ ਵਿੱਚ ਦੋ ਫਲਿੱਪ-ਫਲੌਪ ਹੁੰਦੇ ਹਨ।
- **ਮਾਸਟਰ** ਉਦੋਂ ਕੰਮ ਕਰਦਾ ਹੈ ਜਦੋਂ ਕਲੌਕ HIGH (1) ਹੁੰਦੀ ਹੈ।
- **ਸਲੇਵ** ਉਦੋਂ ਕੰਮ ਕਰਦਾ ਹੈ ਜਦੋਂ ਕਲੌਕ LOW (0) ਹੁੰਦੀ ਹੈ।
ਦੋਵੇਂ ਕਦੇ ਵੀ ਇਕੱਠੇ ਕੰਮ ਨਹੀਂ ਕਰਦੇ, ਇਸ ਲਈ ਆਉਟਪੁੱਟ ਸਿਰਫ਼ ਇੱਕ ਵਾਰ ਬਦਲਦੀ ਹੈ ਅਤੇ ਰੇਸ-ਅਰਾਊਂਡ ਦੀ ਸਮੱਸਿਆ ਖਤਮ ਹੋ ਜਾਂਦੀ ਹੈ।`
    },
    {
      id: "Q23",
      title: "Explain setup time, hold time, and propagation delay of flip-flops.",
      en: `**Setup Time (t_su):**
The minimum time the data input must remain stable BEFORE the clock edge arrives. (Like holding still before a camera shutter).

**Hold Time (t_h):**
The minimum time the data input must remain stable AFTER the clock edge occurs. (Holding still just after the flash).
- If violated: Flip-flop enters metastability (crashes).

**Propagation Delay (t_p):**
The time it takes for the new value to actually appear at the output Q after the clock edge hits. Defines the maximum CPU clock speed.`,
      pa: `**Setup Time (ਸੈੱਟਅੱਪ ਟਾਈਮ):**
ਕਲੌਕ ਸਿਗਨਲ ਦੇ ਆਉਣ ਤੋਂ ਠੀਕ ਪਹਿਲਾਂ ਡਾਟਾ ਨੂੰ ਕਿੰਨੀ ਦੇਰ ਤੱਕ ਸਥਿਰ (Stable) ਰਹਿਣਾ ਚਾਹੀਦਾ ਹੈ। (ਜਿਵੇਂ ਫੋਟੋ ਖਿੱਚਣ ਤੋਂ ਪਹਿਲਾਂ ਸਿੱਧੇ ਖੜ੍ਹਨਾ)।

**Hold Time (ਹੋਲਡ ਟਾਈਮ):**
ਕਲੌਕ ਸਿਗਨਲ ਦੇ ਆਉਣ ਤੋਂ ਠੀਕ ਬਾਅਦ ਡਾਟਾ ਨੂੰ ਕਿੰਨੀ ਦੇਰ ਤੱਕ ਸਥਿਰ ਰਹਿਣਾ ਚਾਹੀਦਾ ਹੈ।
ਜੇਕਰ ਡਾਟਾ ਹਿੱਲ ਜਾਵੇ, ਤਾਂ ਗਲਤ ਸੇਵ ਹੋ ਜਾਵੇਗਾ।

**Propagation Delay (ਪ੍ਰਸਾਰ ਦੇਰੀ):**
ਕਲੌਕ ਦੇ ਆਉਣ ਤੋਂ ਬਾਅਦ ਆਉਟਪੁੱਟ (ਨਤੀਜਾ) ਬਾਹਰ ਆਉਣ ਵਿੱਚ ਲੱਗਣ ਵਾਲਾ ਸਮਾਂ। ਇਹ ਕੰਪਿਊਟਰ ਦੀ ਸਪੀਡ ਤੈਅ ਕਰਦਾ ਹੈ।`
    },
    {
      id: "Q24",
      title: "Explain the four types of shift registers (SISO, SIPO, PISO, PIPO) with diagrams.",
      en: `A shift register is a chain of D flip-flops that moves bits left or right.

**SISO (Serial-In Serial-Out):**
- Data enters one bit at a time, exits one bit at a time. Slowest. Used for time delays.

**SIPO (Serial-In Parallel-Out):**
- Enters serially, but all bits can be read simultaneously at the end. Used to convert serial streams to parallel CPU data.

**PISO (Parallel-In Serial-Out):**
- All bits loaded instantly via parallel bus, then shifted out one by one.

**PIPO (Parallel-In Parallel-Out):**
- All bits enter and exit instantly. Fastest. Used as standard CPU registers.`,
      pa: `ਸ਼ਿਫਟ ਰਜਿਸਟਰ ਡਾਟਾ ਨੂੰ ਸਟੋਰ ਕਰਨ ਅਤੇ ਖੱਬੇ/ਸੱਜੇ ਖਿਸਕਾਉਣ ਦਾ ਕੰਮ ਕਰਦੇ ਹਨ।

**SISO:**
ਡਾਟਾ ਇੱਕ-ਇੱਕ ਬਿੱਟ ਕਰਕੇ ਅੰਦਰ ਜਾਂਦਾ ਹੈ ਅਤੇ ਇੱਕ-ਇੱਕ ਕਰਕੇ ਬਾਹਰ ਆਉਂਦਾ ਹੈ। ਇਹ ਸਭ ਤੋਂ ਹੌਲੀ ਹੈ।

**SIPO:**
ਡਾਟਾ ਇੱਕ-ਇੱਕ ਕਰਕੇ ਅੰਦਰ ਜਾਂਦਾ ਹੈ, ਪਰ ਬਾਹਰ ਸਾਰਾ ਡਾਟਾ ਇਕੱਠਾ (Parallel) ਪੜ੍ਹਿਆ ਜਾ ਸਕਦਾ ਹੈ।

**PISO:**
ਸਾਰਾ ਡਾਟਾ ਇਕੱਠਾ ਅੰਦਰ ਪਾਇਆ ਜਾਂਦਾ ਹੈ, ਪਰ ਬਾਹਰ ਇੱਕ-ਇੱਕ ਕਰਕੇ ਕੱਢਿਆ ਜਾਂਦਾ ਹੈ।

**PIPO:**
ਸਾਰਾ ਡਾਟਾ ਇਕੱਠਾ ਅੰਦਰ ਜਾਂਦਾ ਹੈ ਅਤੇ ਇਕੱਠਾ ਬਾਹਰ ਆਉਂਦਾ ਹੈ। ਇਹ ਸਭ ਤੋਂ ਤੇਜ਼ ਹੈ ਅਤੇ CPU ਵਿੱਚ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।`
    },
    {
      id: "Q25",
      title: "Differentiate between Synchronous and Asynchronous counters. Draw a 4-bit asynchronous up-counter.",
      en: `**Asynchronous (Ripple) Counter:**
- Clock only connects to the first flip-flop.
- The next flip-flop waits for the previous one to toggle.
- Slower due to "ripple" delay. Produces momentary glitches.
- Simple wiring.

**Synchronous Counter:**
- The master clock connects to ALL flip-flops simultaneously.
- They all toggle at the exact same millisecond.
- Lightning fast, no glitches.
- Complex wiring (requires extra AND gates to determine who toggles).`,
      pa: `**ਅਸਿੰਕ੍ਰੋਨਸ (Asynchronous) ਕਾਊਂਟਰ:**
- ਮੁੱਖ ਕਲੌਕ ਸਿਰਫ਼ ਪਹਿਲੇ ਫਲਿੱਪ-ਫਲੌਪ ਨੂੰ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ।
- ਅਗਲਾ ਫਲਿੱਪ-ਫਲੌਪ ਪਿਛਲੇ ਦੇ ਆਉਟਪੁੱਟ 'ਤੇ ਨਿਰਭਰ ਕਰਦਾ ਹੈ।
- ਇਹ ਹੌਲੀ ਕੰਮ ਕਰਦਾ ਹੈ (Ripple Delay ਕਾਰਨ) ਪਰ ਬਣਾਉਣਾ ਆਸਾਨ ਹੈ।

**ਸਿੰਕ੍ਰੋਨਸ (Synchronous) ਕਾਊਂਟਰ:**
- ਇਸ ਵਿੱਚ ਸਾਰੇ ਫਲਿੱਪ-ਫਲੌਪਾਂ ਨੂੰ ਮੁੱਖ ਕਲੌਕ ਨਾਲ ਸਿੱਧਾ ਜੋੜਿਆ ਜਾਂਦਾ ਹੈ।
- ਸਾਰੇ ਇਕੱਠੇ ਕੰਮ ਕਰਦੇ ਹਨ, ਇਸ ਲਈ ਇਹ ਬਹੁਤ ਤੇਜ਼ ਹੁੰਦਾ ਹੈ ਅਤੇ ਕੋਈ ਗਲਤੀ (Glitch) ਨਹੀਂ ਆਉਂਦੀ। ਪਰ ਇਸਨੂੰ ਬਣਾਉਣਾ ਮੁਸ਼ਕਲ ਹੈ।`
    },
    {
      id: "Q26",
      title: "Design an Up-Down Counter and explain its operation.",
      en: `**Up-Down Counter:**
Counts upward (0,1,2,3) or downward (3,2,1,0) based on a control signal MODE (M).

**Principle:**
- In an up-counter, the next bit toggles when the lower bits are 1.
- In a down-counter, the next bit toggles when the lower bits are 0.
- We use a Mode wire 'M'. 
- When M=0, logic gates route the Q output to trigger the next flip-flop (counts UP).
- When M=1, logic gates route the Q' (inverted) output to trigger the next flip-flop (counts DOWN).

**Applications:**
Elevators, stepper motors, game score counters.`,
      pa: `**ਅੱਪ-ਡਾਊਨ (Up-Down) ਕਾਊਂਟਰ:**
ਇਹ ਸਿੱਧੀ ਗਿਣਤੀ (0,1,2,3) ਅਤੇ ਪੁੱਠੀ ਗਿਣਤੀ (3,2,1,0) ਦੋਵੇਂ ਕਰ ਸਕਦਾ ਹੈ।

**ਕੰਮ ਕਰਨ ਦਾ ਤਰੀਕਾ:**
ਇਸ ਵਿੱਚ ਇੱਕ ਕੰਟਰੋਲ ਤਾਰ (Mode M) ਹੁੰਦੀ ਹੈ।
- ਜੇਕਰ **M = 0** ਹੋਵੇ, ਤਾਂ ਅੰਦਰਲੇ ਗੇਟ ਸਿੱਧੇ (Q) ਆਉਟਪੁੱਟ ਨੂੰ ਅੱਗੇ ਭੇਜਦੇ ਹਨ, ਜਿਸ ਨਾਲ ਇਹ ਉੱਪਰ ਵੱਲ ਗਿਣਦਾ ਹੈ (UP)।
- ਜੇਕਰ **M = 1** ਹੋਵੇ, ਤਾਂ ਗੇਟ ਉਲਟੇ (Q') ਆਉਟਪੁੱਟ ਨੂੰ ਅੱਗੇ ਭੇਜਦੇ ਹਨ, ਜਿਸ ਨਾਲ ਇਹ ਹੇਠਾਂ ਵੱਲ ਗਿਣਦਾ ਹੈ (DOWN)।

**ਵਰਤੋਂ:**
ਲਿਫਟਾਂ (Elevators) ਵਿੱਚ, ਮੋਟਰਾਂ ਨੂੰ ਕੰਟਰੋਲ ਕਰਨ ਲਈ।`
    }
  ]
};
