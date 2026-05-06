export const compulsory = {
  unit: "COMPULSORY QUESTION (Q9) — SHORT ANSWER TOPICS",
  questions: [
    {
      id: "CQ1",
      title: "Function Overloading (2 marks)",
      en: `Two or more functions having the same name but different parameter lists. The compiler resolves which function to call at compile time based on arguments (Compile-time polymorphism).`,
      pa: `ਜਦੋਂ ਦੋ ਜਾਂ ਵੱਧ ਫੰਕਸ਼ਨਾਂ ਦਾ ਨਾਮ ਇੱਕੋ ਹੁੰਦਾ ਹੈ ਪਰ ਉਹਨਾਂ ਦੇ ਪੈਰਾਮੀਟਰ ਵੱਖਰੇ ਹੁੰਦੇ ਹਨ। ਕੰਪਾਈਲਰ ਆਰਗੂਮੈਂਟਸ ਦੇ ਆਧਾਰ 'ਤੇ ਫੈਸਲਾ ਕਰਦਾ ਹੈ ਕਿ ਕਿਹੜਾ ਫੰਕਸ਼ਨ ਚੱਲੇਗਾ।`
    },
    {
      id: "CQ2",
      title: "Inline function — why is it faster? (2 marks)",
      en: `An inline function is faster because the compiler inserts the function's body directly at the place of the call. This eliminates function-call overhead (like pushing parameters, jumping to memory, and returning).`,
      pa: `Inline ਫੰਕਸ਼ਨ ਤੇਜ਼ ਹੁੰਦਾ ਹੈ ਕਿਉਂਕਿ ਕੰਪਾਈਲਰ ਫੰਕਸ਼ਨ ਦਾ ਕੋਡ ਸਿੱਧਾ ਉੱਥੇ ਰੱਖ ਦਿੰਦਾ ਹੈ ਜਿੱਥੇ ਉਸਨੂੰ ਕਾਲ ਕੀਤਾ ਗਿਆ ਹੋਵੇ। ਇਸ ਨਾਲ ਮੈਮੋਰੀ ਵਿੱਚ ਛਾਲ ਮਾਰਨ ਦਾ ਸਮਾਂ ਬਚ ਜਾਂਦਾ ਹੈ।`
    },
    {
      id: "CQ3",
      title: "Rules for Friend Function (2 marks)",
      en: `1. Declared inside with \`friend\`, defined outside without \`friend\` or \`::\`.\n2. Not a member function; has no \`this\` pointer.\n3. Called like a normal function.\n4. Friendship is not inherited and not transitive.`,
      pa: `1. ਕਲਾਸ ਦੇ ਅੰਦਰ \`friend\` ਲਿਖਿਆ ਜਾਂਦਾ ਹੈ, ਬਾਹਰ ਨਹੀਂ।\n2. ਇਹ ਕਲਾਸ ਦਾ ਮੈਂਬਰ ਨਹੀਂ ਹੁੰਦਾ, ਇਸ ਲਈ \`this\` ਪੁਆਇੰਟਰ ਨਹੀਂ ਹੁੰਦਾ।\n3. ਨਾਰਮਲ ਫੰਕਸ਼ਨ ਵਾਂਗ ਕਾਲ ਹੁੰਦਾ ਹੈ।\n4. ਇਹ ਵਿਰਾਸਤ (inherit) ਵਿੱਚ ਨਹੀਂ ਮਿਲਦਾ।`
    },
    {
      id: "CQ4",
      title: "Operators that cannot use Friend Functions (2 marks)",
      en: `The operators \`=\`, \`()\`, \`[]\`, and \`->\` MUST be member functions. They cannot be overloaded using friend functions.\n*(Note: \`.\`, \`::\`, \`?:\`, \`sizeof\` cannot be overloaded at all).*`,
      pa: `ਓਪਰੇਟਰ \`=\`, \`()\`, \`[]\`, ਅਤੇ \`->\` ਸਿਰਫ਼ ਮੈਂਬਰ ਫੰਕਸ਼ਨ ਹੋ ਸਕਦੇ ਹਨ। ਇਹਨਾਂ ਲਈ ਫ੍ਰੈਂਡ ਫੰਕਸ਼ਨ ਨਹੀਂ ਵਰਤਿਆ ਜਾ ਸਕਦਾ।`
    },
    {
      id: "CQ5",
      title: "What is Late Binding? What are its advantages? (2 marks)",
      en: `Late binding (Dynamic Binding) means the compiler decides which function to call at run-time, not compile-time. It is achieved using Virtual Functions.\n\n**Advantages:** Achieves run-time polymorphism and allows new derived classes to work perfectly with old code (extensibility).`,
      pa: `ਲੇਟ ਬਾਈਂਡਿੰਗ ਦਾ ਮਤਲਬ ਹੈ ਕਿ ਕਿਹੜਾ ਫੰਕਸ਼ਨ ਚੱਲੇਗਾ, ਇਹ ਫੈਸਲਾ ਪ੍ਰੋਗਰਾਮ ਚੱਲਣ ਵੇਲੇ (Run-time) ਹੁੰਦਾ ਹੈ। ਇਹ Virtual Functions ਰਾਹੀਂ ਹੁੰਦਾ ਹੈ।\n\n**ਫਾਇਦਾ:** ਇਹ ਨਵੀਆਂ ਬਣਾਈਆਂ ਕਲਾਸਾਂ ਨੂੰ ਪੁਰਾਣੇ ਕੋਡ ਨਾਲ ਆਸਾਨੀ ਨਾਲ ਕੰਮ ਕਰਨ ਦਿੰਦਾ ਹੈ।`
    },
    {
      id: "CQ6",
      title: "Why is a Virtual Function used? (2 marks)",
      en: `It is used to achieve Run-Time Polymorphism. When a function is called through a base class pointer, the virtual function ensures that the function of the *actual* object type executes, rather than the pointer's type.`,
      pa: `ਇਹ ਰਨ-ਟਾਈਮ ਪੋਲੀਮੋਰਫਿਜ਼ਮ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ। ਇਹ ਯਕੀਨੀ ਬਣਾਉਂਦਾ ਹੈ ਕਿ Base ਪੁਆਇੰਟਰ ਰਾਹੀਂ ਕਾਲ ਕਰਨ 'ਤੇ ਹਮੇਸ਼ਾ ਅਸਲ ਆਬਜੈਕਟ (ਜੋ ਉਸ ਸਮੇਂ ਪੁਆਇੰਟਰ ਕੋਲ ਹੈ) ਦਾ ਫੰਕਸ਼ਨ ਹੀ ਚੱਲੇ।`
    },
    {
      id: "CQ7",
      title: "How to make a protected member inheritable? (2 marks)",
      en: `Protected members are *already* inheritable. When a class is inherited publicly or protectedly, the base's protected members remain protected in the derived class. (If a member is *private*, you must change its specifier to \`protected\` in the base class to make it inheritable).`,
      pa: `Protected ਮੈਂਬਰ ਪਹਿਲਾਂ ਤੋਂ ਹੀ ਇਨਹੈਰਿਟ (ਵਿਰਾਸਤ ਵਿੱਚ) ਹੋ ਸਕਦੇ ਹਨ। ਜੇਕਰ ਕੋਈ ਮੈਂਬਰ *Private* ਹੈ, ਤਾਂ ਉਸਨੂੰ ਬੱਚਿਆਂ ਦੀ ਕਲਾਸ ਵਿੱਚ ਭੇਜਣ ਲਈ ਬੇਸ ਕਲਾਸ ਵਿੱਚ \`protected\` ਬਣਾਉਣਾ ਪੈਂਦਾ ਹੈ।`
    },
    {
      id: "CQ8",
      title: "What are File Modes? (2 marks)",
      en: `A file opening mode is an argument (bit flag) that tells the compiler the intent of opening a file. \nExamples: \`ios::in\` (read), \`ios::out\` (write), \`ios::app\` (append), \`ios::binary\` (raw binary mode). They can be combined using \`|\`.`,
      pa: `ਫਾਈਲ ਮੋਡ ਦੱਸਦਾ ਹੈ ਕਿ ਫਾਈਲ ਨੂੰ ਕਿਸ ਮਕਸਦ ਲਈ ਖੋਲ੍ਹਿਆ ਜਾ ਰਿਹਾ ਹੈ। \nਉਦਾਹਰਣ: \`ios::in\` (ਪੜ੍ਹਨ ਲਈ), \`ios::out\` (ਲਿਖਣ ਲਈ), \`ios::app\` (ਨਵਾਂ ਡਾਟਾ ਜੋੜਨ ਲਈ)।`
    },
    {
      id: "CQ9",
      title: "Explain Manipulators. (2 marks)",
      en: `Manipulators are I/O formatting tools defined in the \`<iomanip.h>\` header. They control how data is displayed.\nExamples: \`endl\` (new line), \`setw\` (set width), \`setfill\` (fill character), \`setprecision\` (decimal points).`,
      pa: `ਮੈਨੀਪੁਲੇਟਰਸ ਦੀ ਵਰਤੋਂ ਆਉਟਪੁੱਟ ਨੂੰ ਸਹੀ ਫਾਰਮੈਟ ਵਿੱਚ ਦਿਖਾਉਣ ਲਈ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।\nਉਦਾਹਰਣ: \`endl\` (ਨਵੀਂ ਲਾਈਨ ਲਈ), \`setw\` (ਚੌੜਾਈ ਸੈੱਟ ਕਰਨ ਲਈ)।`
    },
    {
      id: "CQ10",
      title: "What is the Scope Resolution Operator (::)? (2 marks)",
      en: `The \`::\` operator is used to:\n1. Define member functions outside a class.\n2. Access a global variable when a local variable has the same name.\n3. Resolve ambiguity in multiple inheritance.`,
      pa: `\`::\` ਓਪਰੇਟਰ ਦੀ ਵਰਤੋਂ:\n1. ਕਲਾਸ ਦੇ ਬਾਹਰ ਫੰਕਸ਼ਨ ਡਿਫਾਈਨ ਕਰਨ ਲਈ।\n2. ਗਲੋਬਲ ਵੇਰੀਏਬਲ ਨੂੰ ਐਕਸੈਸ ਕਰਨ ਲਈ (ਜੇ ਲੋਕਲ ਨਾਮ ਵੀ ਸੇਮ ਹੋਵੇ)।\n3. ਮਲਟੀਪਲ ਇਨਹੈਰੀਟੈਂਸ ਦੀ ਦੁਬਿਧਾ ਦੂਰ ਕਰਨ ਲਈ।`
    },
    {
      id: "CQ11",
      title: "Difference between struct and class. (2 marks)",
      en: `In C++, the only difference is the default access specifier. Members of a \`struct\` default to \`public\`, whereas members of a \`class\` default to \`private\`. Otherwise, they are identical.`,
      pa: `C++ ਵਿੱਚ ਇੱਕੋ ਫਰਕ ਹੈ: \`struct\` ਦੇ ਮੈਂਬਰ ਡਿਫਾਲਟ ਰੂਪ ਵਿੱਚ \`public\` ਹੁੰਦੇ ਹਨ, ਜਦਕਿ \`class\` ਦੇ ਮੈਂਬਰ ਡਿਫਾਲਟ ਰੂਪ ਵਿੱਚ \`private\` ਹੁੰਦੇ ਹਨ।`
    },
    {
      id: "CQ12",
      title: "What is the 'this' pointer? (2 marks)",
      en: `\`this\` is an implicit, hidden pointer passed to all non-static member functions. It points to the specific object that called the member function.`,
      pa: `\`this\` ਇੱਕ ਲੁਕਿਆ ਹੋਇਆ ਪੁਆਇੰਟਰ ਹੈ ਜੋ ਹਰ ਮੈਂਬਰ ਫੰਕਸ਼ਨ ਕੋਲ ਹੁੰਦਾ ਹੈ। ਇਹ ਉਸ ਆਬਜੈਕਟ ਵੱਲ ਇਸ਼ਾਰਾ ਕਰਦਾ ਹੈ ਜਿਸਨੇ ਫੰਕਸ਼ਨ ਨੂੰ ਕਾਲ ਕੀਤਾ ਹੈ।`
    },
    {
      id: "CQ13",
      title: "What is a Pure Virtual Function? (2 marks)",
      en: `A pure virtual function is a function declared with \`= 0\` in the base class (e.g., \`virtual void draw() = 0;\`). It has no body. A class containing it becomes an Abstract Class.`,
      pa: `ਇਹ ਇੱਕ ਅਜਿਹਾ ਫੰਕਸ਼ਨ ਹੈ ਜਿਸਦੇ ਪਿੱਛੇ \`= 0\` ਲਿਖਿਆ ਹੁੰਦਾ ਹੈ ਅਤੇ ਇਸਦੀ ਕੋਈ ਬਾਡੀ ਨਹੀਂ ਹੁੰਦੀ। ਜਿਸ ਕਲਾਸ ਵਿੱਚ ਇਹ ਹੋਵੇ, ਉਹ ਐਬਸਟ੍ਰੈਕਟ (Abstract) ਕਲਾਸ ਬਣ ਜਾਂਦੀ ਹੈ।`
    },
    {
      id: "CQ14",
      title: "Memory management operators in C++ (new and delete). (2 marks)",
      en: `\`new\` allocates memory dynamically on the heap and automatically calls the constructor.\n\`delete\` frees the allocated memory and automatically calls the destructor.`,
      pa: `\`new\` ਰਨ-ਟਾਈਮ 'ਤੇ ਮੈਮੋਰੀ ਲੈਂਦਾ ਹੈ ਅਤੇ ਕੰਸਟਰਕਟਰ ਕਾਲ ਕਰਦਾ ਹੈ।\n\`delete\` ਮੈਮੋਰੀ ਨੂੰ ਫ੍ਰੀ ਕਰਦਾ ਹੈ ਅਤੇ ਡਿਸਟਰਕਟਰ (destructor) ਕਾਲ ਕਰਦਾ ਹੈ।`
    },
    {
      id: "CQ15",
      title: "Pass by Value vs Pass by Reference. (2 marks)",
      en: `In **Pass by Value**, a copy of the argument is passed to the function; changes do not affect the original. In **Pass by Reference**, an alias (reference \`&\`) is passed; changes made inside the function directly affect the original variable.`,
      pa: `**Pass by Value** ਵਿੱਚ ਵੇਰੀਏਬਲ ਦੀ ਕਾਪੀ ਭੇਜੀ ਜਾਂਦੀ ਹੈ, ਇਸ ਲਈ ਅਸਲ ਵੈਲਿਊ ਨਹੀਂ ਬਦਲਦੀ। **Pass by Reference** ਵਿੱਚ ਵੇਰੀਏਬਲ ਦਾ ਐਡਰੈੱਸ (\`&\`) ਭੇਜਿਆ ਜਾਂਦਾ ਹੈ, ਇਸ ਲਈ ਫੰਕਸ਼ਨ ਅੰਦਰ ਕੀਤਾ ਬਦਲਾਅ ਅਸਲ ਵੇਰੀਏਬਲ ਨੂੰ ਵੀ ਬਦਲ ਦਿੰਦਾ ਹੈ।`
    },
    {
      id: "CQ16",
      title: "Unary Operator Overloading. (2 marks)",
      en: `Unary operators operate on a single operand (e.g., \`++\`, \`--\`). When overloading a unary operator as a member function, it takes no arguments (for prefix) or a dummy \`int\` argument (for postfix).`,
      pa: `Unary ਓਪਰੇਟਰ ਸਿਰਫ਼ ਇੱਕ ਹੀ ਆਬਜੈਕਟ 'ਤੇ ਕੰਮ ਕਰਦੇ ਹਨ (ਜਿਵੇਂ \`++\`)। ਜਦੋਂ ਇਹਨਾਂ ਨੂੰ ਮੈਂਬਰ ਫੰਕਸ਼ਨ ਵਜੋਂ ਓਵਰਲੋਡ ਕੀਤਾ ਜਾਂਦਾ ਹੈ, ਤਾਂ Prefix ਲਈ ਕੋਈ ਆਰਗੂਮੈਂਟ ਨਹੀਂ ਦਿੱਤਾ ਜਾਂਦਾ, ਅਤੇ Postfix ਲਈ ਇੱਕ ਡੰਮੀ (dummy) \`int\` ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ।`
    }
  ]
};
