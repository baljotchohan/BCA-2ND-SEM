"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const topicsData = [
  {
    id: 1,
    title: "OOP VS POP & CORE CONCEPTS",
    english: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900">What is the difference between OOP and POP?</h4>
          <p><strong>Procedure-Oriented (POP, e.g., C)</strong> focuses on functions, whereas <strong>Object-Oriented (OOP, e.g., C++)</strong> focuses on data and objects. POP follows a Top-down approach and its data is globally shared, making it less secure. OOP follows a Bottom-up approach, encapsulating data inside objects, which offers high security.</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Core Concepts of OOP</h4>
          <ul className="list-disc pl-5 space-y-2 mt-2 text-sm">
            <li><strong>Class:</strong> A blueprint or user-defined data type that binds data and functions together.</li>
            <li><strong>Object:</strong> An instance of a class taking up memory, representing a real-world entity.</li>
            <li><strong>Encapsulation:</strong> Wrapping data and functions into a single unit to hide and secure data (Data Hiding).</li>
            <li><strong>Abstraction:</strong> Showing only essential features while hiding complex background details.</li>
            <li><strong>Inheritance:</strong> Reusing code by deriving new child classes from existing parent classes.</li>
            <li><strong>Polymorphism:</strong> The ability for a single interface to take many forms (e.g., function overloading).</li>
          </ul>
        </div>
      </div>
    ),
    punjabi: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#2563eb]">OOP ਅਤੇ POP ਵਿੱਚ ਕੀ ਫਰਕ ਹੈ?</h4>
          <p><strong>Procedure-Oriented (POP)</strong> ਫੰਕਸ਼ਨਾਂ 'ਤੇ ਧਿਆਨ ਦਿੰਦਾ ਹੈ ਅਤੇ ਡਾਟਾ ਸੁਰੱਖਿਅਤ ਨਹੀਂ ਰੱਖਦਾ (ਉਦਾਹਰਣ: C ਭਾਸ਼ਾ)। <strong>Object-Oriented (OOP)</strong> ਡਾਟਾ ਅਤੇ ਆਬਜੈਕਟਸ 'ਤੇ ਧਿਆਨ ਦਿੰਦਾ ਹੈ ਅਤੇ ਡਾਟਾ ਨੂੰ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸੁਰੱਖਿਅਤ ਰੱਖਦਾ ਹੈ (ਉਦਾਹਰਣ: C++)।</p>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">OOP ਦੇ ਮੁੱਖ ਸੰਕਲਪ:</h4>
          <ul className="list-disc pl-5 space-y-2 mt-2 text-sm">
            <li><strong>Class (ਕਲਾਸ):</strong> ਇਹ ਇੱਕ ਨਕਸ਼ੇ (blueprint) ਵਾਂਗ ਹੈ ਜੋ ਡੇਟਾ ਅਤੇ ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਇਕੱਠਾ ਬੰਨ੍ਹਦਾ ਹੈ।</li>
            <li><strong>Object (ਆਬਜੈਕਟ):</strong> ਇਹ ਕਲਾਸ ਦਾ ਇੱਕ ਹਿੱਸਾ ਹੈ ਜੋ ਮੈਮੋਰੀ ਲੈਂਦਾ ਹੈ ਅਤੇ ਅਸਲ ਦੁਨੀਆ ਦੀ ਚੀਜ਼ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ।</li>
            <li><strong>Encapsulation:</strong> ਡੇਟਾ ਅਤੇ ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਇੱਕ ਯੂਨਿਟ ਵਿੱਚ ਲਪੇਟਣਾ ਤਾਂ ਜੋ ਡੇਟਾ ਬਾਹਰੋਂ ਲੁਕਿਆ ਰਹੇ।</li>
            <li><strong>Abstraction:</strong> ਸਿਰਫ਼ ਜ਼ਰੂਰੀ ਜਾਣਕਾਰੀ ਦਿਖਾਉਣਾ ਅਤੇ ਅੰਦਰੂਨੀ ਗੁੰਝਲਾਂ ਲੁਕਾਉਣਾ।</li>
            <li><strong>Inheritance:</strong> ਪੁਰਾਣੀ ਕਲਾਸ ਤੋਂ ਨਵੀਂ ਕਲਾਸ ਬਣਾਉਣਾ, ਤਾਂ ਜੋ ਕੋਡ ਨੂੰ ਦੁਬਾਰਾ ਵਰਤਿਆ ਜਾ ਸਕੇ।</li>
            <li><strong>Polymorphism:</strong> ਇੱਕੋ ਨਾਮ ਵਾਲੇ ਫੰਕਸ਼ਨ ਨੂੰ ਵੱਖ-ਵੱਖ ਕੰਮਾਂ ਲਈ ਵਰਤਣਾ।</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "APPLICATIONS OF OOP & SPECIAL OPERATORS",
    english: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900">Applications of OOP</h4>
          <p>OOP is secure, reliable, and easy to maintain. Key applications include Real-time systems, Simulation and modeling, GUI design (Windows/macOS), AI & Expert systems, and Object-oriented databases.</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Special Operators in C++</h4>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Scope Resolution (::)</strong> Used to define member functions outside a class or access global variables.</li>
            <li><strong>new / delete:</strong> For dynamic memory management on the heap. <code>new</code> allocates memory and calls constructors, while <code>delete</code> frees it.</li>
            <li><strong>Manipulators (endl, setw):</strong> Used to format input/output streams.</li>
            <li><strong>Type Cast ((int)x):</strong> Converts one data type into another.</li>
          </ul>
        </div>
      </div>
    ),
    punjabi: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#2563eb]">OOP ਦੇ ਉਪਯੋਗ (Applications)</h4>
          <p>OOP ਸੁਰੱਖਿਅਤ ਅਤੇ ਭਰੋਸੇਯੋਗ ਹੈ। ਇਸਦੀ ਵਰਤੋਂ Real-time ਸਿਸਟਮ, ਡਿਜੀਟਲ ਮਾਡਲਿੰਗ, GUI (ਗ੍ਰਾਫਿਕਲ ਇੰਟਰਫੇਸ), ਆਰਟੀਫੀਸ਼ੀਅਲ ਇੰਟੈਲੀਜੈਂਸ, ਅਤੇ ਆਬਜੈਕਟ-ਓਰੀਐਂਟਿਡ ਡਾਟਾਬੇਸ ਬਣਾਉਣ ਲਈ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।</p>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">C++ ਵਿੱਚ ਖਾਸ ਓਪਰੇਟਰ:</h4>
          <ul className="list-disc pl-5 space-y-2 mt-2 text-sm">
            <li><strong>Scope Resolution (::)</strong> ਕਲਾਸ ਦੇ ਬਾਹਰ ਫੰਕਸ਼ਨ ਡਿਫਾਈਨ ਕਰਨ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।</li>
            <li><strong>new / delete:</strong> ਰਨ-ਟਾਈਮ 'ਤੇ ਮੈਮੋਰੀ ਲੈਣ (new) ਅਤੇ ਵਾਪਸ ਕਰਨ (delete) ਲਈ।</li>
            <li><strong>Manipulators:</strong> ਜਿਵੇਂ ਕਿ <code>endl</code>, ਆਉਟਪੁੱਟ ਨੂੰ ਸਹੀ ਫਾਰਮੈਟ ਵਿੱਚ ਦਿਖਾਉਣ ਲਈ।</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "FUNCTIONS & STATIC MEMBERS",
    english: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900">Inline Function</h4>
          <p>A function that is expanded in a line when it is called, eliminating function-call overhead. The compiler replaces the call with the actual code. It is extremely fast and recommended for short functions.</p>
          <pre className="bg-slate-50 p-2 rounded mt-1 text-xs font-mono">inline int square(int x) {"{"} return x * x; {"}"}</pre>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Friend Function</h4>
          <p>A non-member function that has access to the <code>private</code> and <code>protected</code> members of a class. It is declared inside the class using the <code>friend</code> keyword.</p>
          <ul className="list-disc pl-5 space-y-1 text-sm mt-1">
            <li>Needs an object to access members (e.g., <code>obj.x</code>).</li>
            <li>Useful when a function needs to access private data of two different classes (like adding two objects).</li>
            <li>Friendship is not inherited.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Static Data Members</h4>
          <p>Variables declared with the <code>static</code> keyword inside a class. Only <strong>one shared copy</strong> exists for all objects. They must be defined outside the class using <code>::</code> and initialized to 0 by default.</p>
        </div>
      </div>
    ),
    punjabi: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#2563eb]">Inline Function</h4>
          <p>ਇਹ ਉਹ ਫੰਕਸ਼ਨ ਹੈ ਜਿਸਦਾ ਕੋਡ ਕੰਪਾਈਲਰ ਦੁਆਰਾ ਸਿੱਧਾ ਫੰਕਸ਼ਨ ਕਾਲ ਵਾਲੀ ਜਗ੍ਹਾ 'ਤੇ ਰੱਖ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ। ਇਸ ਨਾਲ ਪ੍ਰੋਗਰਾਮ ਬਹੁਤ ਤੇਜ਼ ਚੱਲਦਾ ਹੈ ਕਿਉਂਕਿ ਫੰਕਸ਼ਨ-ਕਾਲ ਦਾ ਸਮਾਂ ਬਚ ਜਾਂਦਾ ਹੈ। (ਛੋਟੇ ਫੰਕਸ਼ਨਾਂ ਲਈ ਵਧੀਆ ਹੈ)।</p>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">Friend Function</h4>
          <p>ਇਹ ਕਲਾਸ ਦਾ ਮੈਂਬਰ ਨਹੀਂ ਹੁੰਦਾ, ਪਰ ਫਿਰ ਵੀ ਇਹ ਕਲਾਸ ਦੇ <code>private</code> ਡਾਟਾ ਨੂੰ ਐਕਸੈਸ ਕਰ ਸਕਦਾ ਹੈ।</p>
          <ul className="list-disc pl-5 space-y-1 mt-1 text-sm">
            <li>ਜਦੋਂ ਦੋ ਵੱਖ-ਵੱਖ ਕਲਾਸਾਂ ਦੇ ਪ੍ਰਾਈਵੇਟ ਡਾਟਾ ਨੂੰ ਜੋੜਨਾ ਹੋਵੇ, ਤਾਂ ਇਹ ਬਹੁਤ ਕੰਮ ਆਉਂਦਾ ਹੈ।</li>
            <li>ਇਸਨੂੰ ਕਾਲ ਕਰਨ ਲਈ ਆਬਜੈਕਟ ਦੀ ਲੋੜ ਪੈਂਦੀ ਹੈ (ਜਿਵੇਂ <code>obj.x</code>)।</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">Static Data Members</h4>
          <p>ਉਹ ਵੇਰੀਏਬਲ ਜਿਨ੍ਹਾਂ ਦੇ ਅੱਗੇ <code>static</code> ਲੱਗਦਾ ਹੈ। ਪੂਰੀ ਕਲਾਸ ਲਈ ਇਸਦੀ ਸਿਰਫ਼ <strong>ਇੱਕ ਹੀ ਕਾਪੀ</strong> ਬਣਦੀ ਹੈ ਜੋ ਸਾਰੇ ਆਬਜੈਕਟਸ ਸਾਂਝੀ ਕਰਦੇ ਹਨ। ਇਸਨੂੰ ਕਲਾਸ ਦੇ ਬਾਹਰ <code>::</code> ਨਾਲ ਡਿਫਾਈਨ ਕਰਨਾ ਪੈਂਦਾ ਹੈ।</p>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "CONSTRUCTORS & DESTRUCTORS",
    english: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900">What is a Constructor?</h4>
          <p>A special member function with the exact same name as the class. It is called automatically when an object is created to initialize it. It has no return type.</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Types of Constructors:</h4>
          <ul className="list-disc pl-5 space-y-2 text-sm mt-1">
            <li><strong>Default Constructor:</strong> Takes no arguments. Initializes objects with default/zero values.</li>
            <li><strong>Parameterized Constructor:</strong> Takes arguments to initialize objects with specific values passed by the user.</li>
            <li><strong>Copy Constructor:</strong> Initializes a new object using an existing object of the same class (e.g., <code>Distance d3(d2);</code>).</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">What is a Destructor?</h4>
          <p>A special member function with the same name as the class but preceded by a tilde (<code>~</code>). It is called automatically when an object goes out of scope to release memory. It takes no arguments and cannot be overloaded.</p>
        </div>
      </div>
    ),
    punjabi: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#2563eb]">Constructor (ਕੰਸਟਰਕਟਰ) ਕੀ ਹੈ?</h4>
          <p>ਇਹ ਇੱਕ ਖਾਸ ਫੰਕਸ਼ਨ ਹੈ ਜਿਸਦਾ ਨਾਮ ਕਲਾਸ ਦੇ ਨਾਮ ਵਰਗਾ ਹੀ ਹੁੰਦਾ ਹੈ। ਜਦੋਂ ਵੀ ਨਵਾਂ ਆਬਜੈਕਟ ਬਣਦਾ ਹੈ, ਇਹ ਆਪਣੇ ਆਪ ਚੱਲ ਪੈਂਦਾ ਹੈ ਤਾਂ ਜੋ ਆਬਜੈਕਟ ਨੂੰ ਸ਼ੁਰੂਆਤੀ ਵੈਲਿਊ ਮਿਲ ਸਕੇ।</p>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">ਇਸਦੀਆਂ ਕਿਸਮਾਂ (Types):</h4>
          <ul className="list-disc pl-5 space-y-2 mt-1 text-sm">
            <li><strong>Default:</strong> ਕੋਈ ਆਰਗੂਮੈਂਟ ਨਹੀਂ ਲੈਂਦਾ (ਡਿਫਾਲਟ ਵੈਲਿਊ ਦਿੰਦਾ ਹੈ)।</li>
            <li><strong>Parameterized:</strong> ਇਹ ਆਰਗੂਮੈਂਟ ਲੈਂਦਾ ਹੈ (ਯੂਜ਼ਰ ਆਪਣੀ ਮਰਜ਼ੀ ਦੀ ਵੈਲਿਊ ਦੇ ਸਕਦਾ ਹੈ)।</li>
            <li><strong>Copy:</strong> ਇਹ ਪਹਿਲਾਂ ਤੋਂ ਬਣੇ ਆਬਜੈਕਟ ਦੀ ਕਾਪੀ ਕਰਕੇ ਨਵਾਂ ਆਬਜੈਕਟ ਬਣਾਉਂਦਾ ਹੈ।</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">Destructor ਕੀ ਹੈ?</h4>
          <p>ਇਹ ਵੀ ਕਲਾਸ ਦੇ ਨਾਮ ਵਰਗਾ ਹੀ ਹੁੰਦਾ ਹੈ ਪਰ ਇਸਦੇ ਅੱਗੇ (<code>~</code>) ਨਿਸ਼ਾਨ ਲੱਗਦਾ ਹੈ। ਜਦੋਂ ਆਬਜੈਕਟ ਦਾ ਕੰਮ ਖਤਮ ਹੋ ਜਾਂਦਾ ਹੈ ਤਾਂ ਇਹ ਆਪਣੇ ਆਪ ਚੱਲਦਾ ਹੈ ਅਤੇ ਮੈਮੋਰੀ ਨੂੰ ਫ੍ਰੀ (free) ਕਰਦਾ ਹੈ।</p>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "OPERATOR OVERLOADING",
    english: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900">What is Operator Overloading?</h4>
          <p>It gives special meaning to existing C++ operators so they can work on user-defined objects. For example, using <code>+</code> to add two Matrix objects.</p>
        </div>
        <div className="bg-slate-50 p-3 rounded border border-slate-200">
          <h4 className="font-bold text-slate-900 text-sm mb-1">Matrix Addition Example</h4>
          <pre className="text-xs font-mono">
{`Matrix operator + (Matrix x) {
    Matrix r;
    for(int i=0; i<2; i++) {
        for(int j=0; j<2; j++) {
            r.m[i][j] = m[i][j] + x.m[i][j];
        }
    }
    return r;
}`}
          </pre>
          <p className="text-sm mt-2">When we write <code>c = a + b;</code>, the overloaded operator adds each individual element of the 2x2 matrices automatically.</p>
        </div>
      </div>
    ),
    punjabi: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#2563eb]">Operator Overloading ਕੀ ਹੈ?</h4>
          <p>ਇਹ C++ ਦੇ ਮੌਜੂਦਾ ਓਪਰੇਟਰਾਂ (ਜਿਵੇਂ +, -, &gt;) ਨੂੰ ਆਬਜੈਕਟਸ 'ਤੇ ਕੰਮ ਕਰਨ ਦੀ ਤਾਕਤ ਦਿੰਦਾ ਹੈ। ਜਿਵੇਂ ਕਿ <code>+</code> ਓਪਰੇਟਰ ਨਾਲ ਦੋ ਮੈਟ੍ਰਿਕਸ (Matrices) ਨੂੰ ਜੋੜਨਾ।</p>
        </div>
        <div className="bg-blue-50 p-3 rounded border border-blue-100">
          <h4 className="font-bold text-[#2563eb] text-sm mb-1">ਮੈਟ੍ਰਿਕਸ ਜੋੜਨ ਦਾ ਤਰੀਕਾ:</h4>
          <p className="text-sm">ਅਸੀਂ ਇੱਕ <code>operator +</code> ਫੰਕਸ਼ਨ ਬਣਾਉਂਦੇ ਹਾਂ, ਜੋ ਦੋਵਾਂ ਮੈਟ੍ਰਿਕਸ ਦੇ ਹਰੇਕ ਐਲੀਮੈਂਟ ਨੂੰ ਆਪਸ ਵਿੱਚ ਜੋੜ ਕੇ ਇੱਕ ਨਵਾਂ ਮੈਟ੍ਰਿਕਸ ਵਾਪਸ ਕਰਦਾ ਹੈ। ਜਦੋਂ ਅਸੀਂ <code>c = a + b;</code> ਲਿਖਦੇ ਹਾਂ, ਤਾਂ ਇਹ ਆਪਣੇ ਆਪ ਕੰਮ ਕਰਦਾ ਹੈ।</p>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "INHERITANCE TYPES & VISIBILITY",
    english: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900">Types of Inheritance</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li><strong>Single:</strong> One base class, one derived class.</li>
            <li><strong>Multilevel:</strong> A chain of inheritance (A → B → C).</li>
            <li><strong>Multiple:</strong> One derived class inherits from multiple base classes.</li>
            <li><strong>Hierarchical:</strong> Many derived classes from one root base class.</li>
            <li><strong>Hybrid:</strong> Combination of multiple and hierarchical types.</li>
          </ul>
        </div>
        <div className="mt-3">
          <h4 className="font-bold text-slate-900">Visibility Modes</h4>
          <table className="w-full text-left text-sm border-collapse mt-1 border border-slate-300">
            <thead>
              <tr className="bg-slate-100"><th className="border p-2">Base Member</th><th className="border p-2">Inherited as Public</th><th className="border p-2">Inherited as Private</th></tr>
            </thead>
            <tbody>
              <tr><td className="border p-2 font-semibold text-green-700">Public</td><td className="border p-2">Public</td><td className="border p-2">Private</td></tr>
              <tr><td className="border p-2 font-semibold text-yellow-600">Protected</td><td className="border p-2">Protected</td><td className="border p-2">Private</td></tr>
              <tr><td className="border p-2 font-semibold text-red-600">Private</td><td className="border p-2">Not Inherited</td><td className="border p-2">Not Inherited</td></tr>
            </tbody>
          </table>
          <p className="text-xs text-red-600 mt-1 font-bold">Private members of a base class are NEVER inherited!</p>
        </div>
      </div>
    ),
    punjabi: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#2563eb]">Inheritance ਦੀਆਂ ਕਿਸਮਾਂ</h4>
          <ul className="list-disc pl-5 space-y-1 mt-1 text-sm">
            <li><strong>Single:</strong> ਇੱਕ Base ਅਤੇ ਇੱਕ Derived ਕਲਾਸ।</li>
            <li><strong>Multilevel:</strong> ਵਿਰਾਸਤ ਦੀ ਇੱਕ ਲੜੀ (A ਤੋਂ B, ਫਿਰ B ਤੋਂ C)।</li>
            <li><strong>Multiple:</strong> ਕਈ Base ਕਲਾਸਾਂ ਤੋਂ ਇੱਕ Derived ਕਲਾਸ ਬਣਨੀ।</li>
            <li><strong>Hierarchical:</strong> ਇੱਕ Base ਕਲਾਸ ਤੋਂ ਕਈ ਨਵੀਆਂ ਕਲਾਸਾਂ ਨਿਕਲਣੀਆਂ।</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">Visibility Modes (ਧਿਆਨ ਦੇਣ ਯੋਗ ਗੱਲ):</h4>
          <p className="text-sm">Base ਕਲਾਸ ਦੇ <strong>Private ਮੈਂਬਰ ਕਦੇ ਵੀ ਅਗਲੀ ਕਲਾਸ ਵਿੱਚ inherit ਨਹੀਂ ਹੁੰਦੇ</strong>। ਜੇਕਰ ਤੁਸੀਂ ਚਾਹੁੰਦੇ ਹੋ ਕਿ ਬੱਚੇ (child class) ਪੇਰੈਂਟ ਦਾ ਡਾਟਾ ਵਰਤ ਸਕਣ ਪਰ ਬਾਹਰਲਾ ਕੋਈ ਨਾ ਵਰਤ ਸਕੇ, ਤਾਂ <code>protected</code> ਵਰਤੋਂ।</p>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: "AMBIGUITY & VIRTUAL BASE CLASS",
    english: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900">The Diamond Problem (Ambiguity)</h4>
          <p>In Multiple Inheritance, if Class <code>D</code> derives from <code>B</code> and <code>C</code>, and both <code>B</code> and <code>C</code> derive from <code>A</code>, then <code>D</code> receives <strong>two copies</strong> of <code>A</code>'s members. The compiler gets confused about which copy to use when a member of <code>A</code> is called from <code>D</code>.</p>
        </div>
        <div className="bg-slate-50 p-3 rounded border border-slate-200">
          <h4 className="font-bold text-slate-900 text-sm mb-1">Resolution: Virtual Base Class</h4>
          <p className="text-sm">By declaring <code>A</code> as a <code>virtual</code> base class for <code>B</code> and <code>C</code>, C++ ensures that only a single, shared copy of <code>A</code> is passed down to <code>D</code>.</p>
          <pre className="text-xs font-mono mt-2">
{`class A { public: int x; };
class B : virtual public A {};
class C : virtual public A {};
class D : public B, public C {}; // D gets only 1 copy of x`}
          </pre>
        </div>
      </div>
    ),
    punjabi: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#2563eb]">Ambiguity (ਦੁਬਿਧਾ) ਕੀ ਹੈ?</h4>
          <p>Multiple Inheritance ਵਿੱਚ, ਜੇਕਰ ਕਲਾਸ <code>D</code> ਦੋ ਕਲਾਸਾਂ <code>B</code> ਅਤੇ <code>C</code> ਤੋਂ ਬਣੀ ਹੈ, ਅਤੇ ਉਹ ਦੋਵੇਂ <code>A</code> ਤੋਂ ਬਣੀਆਂ ਹਨ, ਤਾਂ <code>D</code> ਕੋਲ <code>A</code> ਦੇ ਡਾਟਾ ਦੀਆਂ ਦੋ ਕਾਪੀਆਂ ਆ ਜਾਣਗੀਆਂ। ਕੰਪਾਈਲਰ ਉਲਝ ਜਾਂਦਾ ਹੈ ਕਿ ਕਿਹੜੀ ਕਾਪੀ ਵਰਤਣੀ ਹੈ।</p>
        </div>
        <div className="bg-blue-50 p-3 rounded border border-blue-100">
          <h4 className="font-bold text-[#2563eb] text-sm mb-1">ਹੱਲ: Virtual Base Class</h4>
          <p className="text-sm">ਇਸਨੂੰ ਠੀਕ ਕਰਨ ਲਈ ਅਸੀਂ <code>A</code> ਨੂੰ <code>virtual base class</code> ਬਣਾਉਂਦੇ ਹਾਂ। ਇਸ ਨਾਲ <code>D</code> ਕੋਲ <code>A</code> ਦੀ ਸਿਰਫ਼ ਇੱਕ ਹੀ ਸਾਂਝੀ ਕਾਪੀ ਆਉਂਦੀ ਹੈ ਅਤੇ ਕੰਪਾਈਲਰ ਦੀ ਉਲਝਣ ਖਤਮ ਹੋ ਜਾਂਦੀ ਹੈ।</p>
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: "POLYMORPHISM & VIRTUAL FUNCTIONS",
    english: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900">Run-time Polymorphism (Late Binding)</h4>
          <p>Achieved using <strong>Virtual Functions</strong>. A virtual function is declared in the base class using the <code>virtual</code> keyword and overridden in the derived class. The decision of which function to execute is made at runtime based on the actual object type, not the pointer type.</p>
        </div>
        <div className="bg-slate-50 p-3 rounded border border-slate-200">
          <h4 className="font-bold text-slate-900 text-sm mb-1">Base Pointer to Derived Object</h4>
          <p className="text-sm">If <code>Shape *p</code> points to a <code>Circle</code> object, calling <code>p-&gt;area()</code> will correctly execute the Circle's area function (if it's virtual).</p>
          <pre className="text-xs font-mono mt-2">
{`Shape *p;
Circle c(5);
p = &c;
p->area(); // Calls Circle's area automatically`}
          </pre>
        </div>
      </div>
    ),
    punjabi: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#2563eb]">Run-time Polymorphism (Late Binding)</h4>
          <p>ਇਸਨੂੰ <strong>Virtual Functions</strong> ਦੀ ਮਦਦ ਨਾਲ ਲਾਗੂ ਕੀਤਾ ਜਾਂਦਾ ਹੈ। ਜਦੋਂ ਅਸੀਂ Base ਕਲਾਸ ਦੇ ਪੁਆਇੰਟਰ ਰਾਹੀਂ ਕਿਸੇ ਫੰਕਸ਼ਨ ਨੂੰ ਕਾਲ ਕਰਦੇ ਹਾਂ, ਤਾਂ ਕੰਪਾਈਲਰ ਰਨਟਾਈਮ 'ਤੇ ਫੈਸਲਾ ਕਰਦਾ ਹੈ ਕਿ ਅਸਲ ਆਬਜੈਕਟ ਕਿਹੜਾ ਹੈ ਅਤੇ ਉਸਦਾ ਹੀ ਫੰਕਸ਼ਨ ਚਲਾਉਂਦਾ ਹੈ।</p>
        </div>
        <div className="bg-blue-50 p-3 rounded border border-blue-100">
          <h4 className="font-bold text-[#2563eb] text-sm mb-1">ਸੌਖੀ ਉਦਾਹਰਣ:</h4>
          <p className="text-sm">ਜੇਕਰ ਸਾਡੇ ਕੋਲ <code>Shape</code> ਦਾ ਪੁਆਇੰਟਰ ਹੈ ਜੋ <code>Circle</code> ਵੱਲ ਇਸ਼ਾਰਾ ਕਰ ਰਿਹਾ ਹੈ, ਤਾਂ <code>p-&gt;area()</code> ਕਾਲ ਕਰਨ 'ਤੇ Circle ਦਾ ਹੀ Area ਨਿਕਲੇਗਾ (ਜੇਕਰ ਫੰਕਸ਼ਨ virtual ਹੈ)।</p>
        </div>
      </div>
    )
  },
  {
    id: 9,
    title: "EXCEPTION HANDLING",
    english: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900">What is Exception Handling?</h4>
          <p>It gracefully handles runtime errors (like divide-by-zero) without crashing the program using three keywords:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm mt-1">
            <li><strong>try:</strong> Contains the code that might generate an error.</li>
            <li><strong>throw:</strong> Throws an exception object when an error occurs.</li>
            <li><strong>catch:</strong> Catches the thrown exception and handles the error gracefully.</li>
          </ul>
        </div>
        <div className="mt-2">
          <h4 className="font-bold text-slate-900">Multiple Catches & Re-throwing</h4>
          <p className="text-sm">A <code>try</code> block can have multiple <code>catch</code> blocks to handle different types of exceptions (int, char). A catch block can also use <code>throw;</code> to re-throw the exception to an outer try-catch block if it cannot fully handle it.</p>
        </div>
      </div>
    ),
    punjabi: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#2563eb]">Exception Handling (ਐਰਰਜ਼ ਨੂੰ ਸੰਭਾਲਣਾ)</h4>
          <p>ਇਹ ਪ੍ਰੋਗਰਾਮ ਚੱਲਦੇ ਸਮੇਂ ਆਉਣ ਵਾਲੀਆਂ ਐਰਰਜ਼ (ਜਿਵੇਂ 0 ਨਾਲ ਭਾਗ ਕਰਨਾ) ਨੂੰ ਸੰਭਾਲਦਾ ਹੈ ਤਾਂ ਜੋ ਪ੍ਰੋਗਰਾਮ ਕਰੈਸ਼ ਨਾ ਹੋਵੇ। ਇਸਦੇ 3 ਹਿੱਸੇ ਹਨ:</p>
          <ul className="list-disc pl-5 space-y-1 mt-1 text-sm">
            <li><strong>try:</strong> ਇਸ ਵਿੱਚ ਉਹ ਕੋਡ ਰੱਖਿਆ ਜਾਂਦਾ ਹੈ ਜਿਸ ਵਿੱਚ ਐਰਰ ਆ ਸਕਦੀ ਹੈ।</li>
            <li><strong>throw:</strong> ਐਰਰ ਆਉਣ 'ਤੇ ਇਹ ਐਕਸੈਪਸ਼ਨ (ਸਮੱਸਿਆ ਦਾ ਸੁਨੇਹਾ) ਸੁੱਟਦਾ ਹੈ।</li>
            <li><strong>catch:</strong> ਇਹ ਸੁੱਟੀ ਗਈ ਐਕਸੈਪਸ਼ਨ ਨੂੰ ਫੜ ਕੇ ਠੀਕ ਕਰਦਾ ਹੈ।</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">Re-throwing:</h4>
          <p className="text-sm">ਜੇਕਰ ਅੰਦਰਲਾ ਕੈਚ ਬਲਾਕ ਐਰਰ ਨੂੰ ਪੂਰੀ ਤਰ੍ਹਾਂ ਠੀਕ ਨਹੀਂ ਕਰ ਸਕਦਾ, ਤਾਂ ਉਹ <code>throw;</code> ਲਿਖ ਕੇ ਉਸ ਐਰਰ ਨੂੰ ਬਾਹਰ ਵਾਲੇ ਕੈਚ ਬਲਾਕ ਵੱਲ ਭੇਜ ਸਕਦਾ ਹੈ।</p>
        </div>
      </div>
    )
  },
  {
    id: 10,
    title: "FILE STREAM & BINARY FILES",
    english: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900">File Stream Classes</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li><strong>ifstream:</strong> Used to read data <em>from</em> a file.</li>
            <li><strong>ofstream:</strong> Used to write data <em>to</em> a file.</li>
            <li><strong>fstream:</strong> Used for both reading and writing operations.</li>
          </ul>
        </div>
        <div className="mt-2">
          <h4 className="font-bold text-slate-900">File Modes</h4>
          <p className="text-sm"><code>ios::in</code> (Read), <code>ios::out</code> (Write), <code>ios::app</code> (Append), <code>ios::binary</code> (Binary mode).</p>
        </div>
        <div className="bg-slate-50 p-3 rounded border border-slate-200 mt-2">
          <h4 className="font-bold text-slate-900 text-sm mb-1">Why Binary Files?</h4>
          <p className="text-sm">Binary files are extremely fast because data is saved in raw bytes. They take up less disk space. We can write entire class objects directly using <code>fout.write((char*)&amp;obj, sizeof(obj));</code> instead of writing variable by variable.</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Random Access File Pointers</h4>
          <p className="text-sm">Functions like <code>seekg()</code> and <code>seekp()</code> are used to jump directly to any byte location in a file without reading it sequentially. <code>tellg()</code> and <code>tellp()</code> return the current position.</p>
        </div>
      </div>
    ),
    punjabi: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#2563eb]">ਫਾਈਲਾਂ ਨਾਲ ਕੰਮ ਕਰਨਾ (File Streams)</h4>
          <ul className="list-disc pl-5 space-y-1 mt-1 text-sm">
            <li><strong>ifstream:</strong> ਫਾਈਲ ਵਿੱਚੋਂ ਪੜ੍ਹਨ (Read) ਲਈ।</li>
            <li><strong>ofstream:</strong> ਫਾਈਲ ਵਿੱਚ ਲਿਖਣ (Write) ਲਈ।</li>
            <li><strong>fstream:</strong> ਪੜ੍ਹਨ ਅਤੇ ਲਿਖਣ ਦੋਵਾਂ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-3 rounded border border-blue-100 mt-2">
          <h4 className="font-bold text-[#2563eb] text-sm mb-1">ਬਾਈਨਰੀ ਫਾਈਲਾਂ (Binary Files) ਕਿਉਂ?</h4>
          <p className="text-sm">ਬਾਈਨਰੀ ਫਾਈਲਾਂ ਬਹੁਤ ਤੇਜ਼ ਹੁੰਦੀਆਂ ਹਨ ਅਤੇ ਘੱਟ ਜਗ੍ਹਾ ਲੈਂਦੀਆਂ ਹਨ। ਸਭ ਤੋਂ ਵੱਡਾ ਫਾਇਦਾ ਇਹ ਹੈ ਕਿ ਅਸੀਂ ਪੂਰੇ ਦੇ ਪੂਰੇ ਕਲਾਸ ਆਬਜੈਕਟ ਨੂੰ ਇੱਕੋ ਵਾਰ ਵਿੱਚ <code>write()</code> ਫੰਕਸ਼ਨ ਰਾਹੀਂ ਫਾਈਲ ਵਿੱਚ ਸੇਵ ਕਰ ਸਕਦੇ ਹਾਂ (ਟੈਕਸਟ ਫਾਈਲਾਂ ਵਾਂਗ ਇੱਕ-ਇੱਕ ਕਰਕੇ ਲਿਖਣ ਦੀ ਲੋੜ ਨਹੀਂ)।</p>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">Random Access Pointers</h4>
          <p className="text-sm"><code>seekg()</code> ਅਤੇ <code>seekp()</code> ਦੀ ਮਦਦ ਨਾਲ ਅਸੀਂ ਫਾਈਲ ਦੇ ਕਿਸੇ ਵੀ ਹਿੱਸੇ ਵਿੱਚ ਸਿੱਧਾ (direct) ਛਾਲ (jump) ਮਾਰ ਸਕਦੇ ਹਾਂ। <code>tellg()</code> ਅਤੇ <code>tellp()</code> ਸਾਨੂੰ ਮੌਜੂਦਾ ਜਗ੍ਹਾ ਦੱਸਦੇ ਹਨ।</p>
        </div>
      </div>
    )
  },
  {
    id: 11,
    title: "IMPORTANT QUICK FACTS (FOR SHORT ANSWERS)",
    english: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-slate-900">Struct vs Class</h4>
          <p className="text-sm">In C++, the only difference is the default visibility. Members of a <code>struct</code> default to <code>public</code>, whereas members of a <code>class</code> default to <code>private</code>.</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">The 'this' Pointer</h4>
          <p className="text-sm">An implicit, hidden pointer passed to all non-static member functions. It always points to the exact object that invoked the function.</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Pure Virtual Function & Abstract Class</h4>
          <p className="text-sm">A virtual function declared with <code>= 0</code> (e.g., <code>virtual void draw() = 0;</code>) that has no body. Any class containing a pure virtual function becomes an <strong>Abstract Class</strong> and cannot be instantiated.</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Operators that CANNOT use Friend Functions</h4>
          <p className="text-sm">The Assignment <code>=</code>, Function Call <code>()</code>, Subscript <code>[]</code>, and Arrow <code>-&gt;</code> operators MUST be member functions. They cannot be overloaded using friend functions.</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Pass by Value vs Reference</h4>
          <p className="text-sm">In Pass by Value, a copy is passed. In Pass by Reference (using <code>&amp;</code>), an alias is passed, so changes directly affect the original variable.</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Unary Operator Overloading</h4>
          <p className="text-sm">When overloaded as a member function, a prefix unary operator takes no arguments, while a postfix unary operator takes a dummy <code>int</code> argument.</p>
        </div>
      </div>
    ),
    punjabi: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#2563eb]">Struct ਅਤੇ Class ਵਿੱਚ ਫਰਕ</h4>
          <p className="text-sm">C++ ਵਿੱਚ, <code>struct</code> ਦੇ ਮੈਂਬਰ ਡਿਫਾਲਟ ਰੂਪ ਵਿੱਚ <code>public</code> ਹੁੰਦੇ ਹਨ, ਜਦਕਿ <code>class</code> ਦੇ ਮੈਂਬਰ ਡਿਫਾਲਟ ਰੂਪ ਵਿੱਚ <code>private</code> ਹੁੰਦੇ ਹਨ।</p>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">'this' ਪੁਆਇੰਟਰ (Pointer)</h4>
          <p className="text-sm">ਇਹ ਇੱਕ ਲੁਕਿਆ ਹੋਇਆ ਪੁਆਇੰਟਰ ਹੈ ਜੋ ਹਰ ਮੈਂਬਰ ਫੰਕਸ਼ਨ ਕੋਲ ਹੁੰਦਾ ਹੈ। ਇਹ ਉਸ ਆਬਜੈਕਟ ਵੱਲ ਇਸ਼ਾਰਾ ਕਰਦਾ ਹੈ ਜਿਸਨੇ ਫੰਕਸ਼ਨ ਨੂੰ ਕਾਲ ਕੀਤਾ ਹੈ।</p>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">Pure Virtual Function ਅਤੇ Abstract Class</h4>
          <p className="text-sm">ਜਿਸ ਵਰਚੁਅਲ ਫੰਕਸ਼ਨ ਦੇ ਪਿੱਛੇ <code>= 0</code> ਲਿਖਿਆ ਹੋਵੇ, ਉਸਨੂੰ Pure Virtual Function ਕਿਹਾ ਜਾਂਦਾ ਹੈ। ਜਿਸ ਕਲਾਸ ਵਿੱਚ ਇਹ ਹੋਵੇ, ਉਹ 'Abstract' ਬਣ ਜਾਂਦੀ ਹੈ ਅਤੇ ਉਸਦਾ ਆਬਜੈਕਟ ਨਹੀਂ ਬਣਾਇਆ ਜਾ ਸਕਦਾ।</p>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">ਓਪਰੇਟਰ ਜੋ Friend ਫੰਕਸ਼ਨ ਨਹੀਂ ਵਰਤ ਸਕਦੇ</h4>
          <p className="text-sm">ਓਪਰੇਟਰ <code>=</code>, <code>()</code>, <code>[]</code>, ਅਤੇ <code>-&gt;</code> ਸਿਰਫ਼ ਮੈਂਬਰ ਫੰਕਸ਼ਨ ਹੋ ਸਕਦੇ ਹਨ। ਇਹਨਾਂ ਲਈ ਫ੍ਰੈਂਡ ਫੰਕਸ਼ਨ ਨਹੀਂ ਵਰਤਿਆ ਜਾ ਸਕਦਾ।</p>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">Pass by Value vs Reference</h4>
          <p className="text-sm">Value ਵਿੱਚ ਵੇਰੀਏਬਲ ਦੀ ਕਾਪੀ ਭੇਜੀ ਜਾਂਦੀ ਹੈ। Reference (<code>&amp;</code>) ਵਿੱਚ ਅਸਲ ਵੇਰੀਏਬਲ ਦਾ ਐਡਰੈੱਸ ਭੇਜਿਆ ਜਾਂਦਾ ਹੈ, ਇਸ ਲਈ ਫੰਕਸ਼ਨ ਅੰਦਰ ਕੀਤਾ ਬਦਲਾਅ ਅਸਲ ਵੇਰੀਏਬਲ ਵਿੱਚ ਵੀ ਹੁੰਦਾ ਹੈ।</p>
        </div>
        <div>
          <h4 className="font-bold text-[#2563eb]">Unary Operator Overloading</h4>
          <p className="text-sm">ਜਦੋਂ ਇੱਕਲੇ (Unary) ਓਪਰੇਟਰ ਨੂੰ ਮੈਂਬਰ ਫੰਕਸ਼ਨ ਵਜੋਂ ਬਣਾਇਆ ਜਾਂਦਾ ਹੈ, ਤਾਂ Prefix ਲਈ ਕੋਈ ਆਰਗੂਮੈਂਟ ਨਹੀਂ ਹੁੰਦਾ, ਅਤੇ Postfix ਲਈ ਇੱਕ ਡੰਮੀ (dummy) <code>int</code> ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ।</p>
        </div>
      </div>
    )
  }
];

export default function CPPNotesPage() {

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-emerald-200">
      
      {/* Top Navigation Bar */}
      <div className="print:hidden fixed top-0 left-0 right-0 p-4 md:p-6 flex z-50 pointer-events-none">
        <Link 
          href="/" 
          className="pointer-events-auto flex items-center justify-center bg-white w-10 h-10 rounded-full shadow-sm border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
      </div>

      {/* Main Document */}
      <main className="max-w-5xl mx-auto bg-white min-h-screen shadow-[0_0_40px_rgba(0,0,0,0.05)] print:shadow-none print:w-full print:max-w-none px-6 py-20 md:px-12 md:py-24 mt-0 md:mt-8 print:mt-0 print:p-0">
        
        {/* Document Header */}
        <div className="text-center mb-12 print:mb-8">
          <div className="bg-[#ecfdf5] text-[#059669] text-xs font-black uppercase tracking-[0.2em] py-2 px-6 rounded-full inline-block mb-8 print:border print:border-emerald-300">
            ANTIGRAVITY • BILINGUAL EDITION
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#0f172a] tracking-tight mb-4 leading-tight">
            OOPs using C++
          </h1>
          <h2 className="text-xl md:text-2xl text-[#10b981] font-medium italic mb-8">
            Complete Master Notes (English + ਪੰਜਾਬੀ)
          </h2>
          <div className="flex items-center justify-center gap-6 text-xs font-black text-slate-400 uppercase tracking-widest">
            <span>Code: CPP-206</span>
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
                  <h4 className="text-[#10b981] font-bold mb-3 flex items-center gap-2 border-b border-slate-100 pb-2 text-sm uppercase tracking-wider">
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
