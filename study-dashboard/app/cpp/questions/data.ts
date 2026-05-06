export const questionsData = [
  {
    unit: "UNIT-I: OOP Concepts and C++ Basics",
    questions: [
      {
        id: "U1-Q1",
        title: "Differentiate between OOP and POP.",
        en: `**Procedure-Oriented (POP, e.g., C)** focuses on functions, while **Object-Oriented (OOP, e.g., C++)** focuses on data and objects.

| Feature | Procedure-Oriented (POP) | Object-Oriented (OOP) |
|---|---|---|
| **Approach** | Top-down | Bottom-up |
| **Basic Unit** | Function | Object (instance of class) |
| **Data** | Global, freely shared | Encapsulated inside objects |
| **Data Security** | Poor (data exposed) | High (private/protected) |
| **Code Reuse** | Limited (functions only) | High (inheritance, templates) |
| **Polymorphism** | Not supported directly | Supported (overloading + virtual) |
| **Real-world modeling** | Difficult | Natural (objects = entities) |
| **Example** | C, Pascal, FORTRAN | C++, Java, C#, Python |

OOP is a modern programming approach that focuses on objects rather than functions. This makes it much easier to model real-world entities, secure data from outside interference, and reuse code.`,
        pa: `**Procedure-Oriented (POP)** ਫੰਕਸ਼ਨਾਂ 'ਤੇ ਧਿਆਨ ਦਿੰਦਾ ਹੈ, ਜਦਕਿ **Object-Oriented (OOP)** ਡਾਟਾ ਅਤੇ ਆਬਜੈਕਟਸ 'ਤੇ ਧਿਆਨ ਦਿੰਦਾ ਹੈ।

| ਫੀਚਰ (Feature) | Procedure-Oriented | Object-Oriented |
|---|---|---|
| **Approach** | Top-down (ਉੱਪਰ ਤੋਂ ਹੇਠਾਂ) | Bottom-up (ਹੇਠਾਂ ਤੋਂ ਉੱਪਰ) |
| **Basic Unit** | Function (ਫੰਕਸ਼ਨ) | Object (ਆਬਜੈਕਟ) |
| **Data** | Global, ਆਸਾਨੀ ਨਾਲ ਸ਼ੇਅਰ ਹੁੰਦਾ ਹੈ | ਆਬਜੈਕਟਸ ਦੇ ਅੰਦਰ ਲੁਕਿਆ (Encapsulated) |
| **Data Security** | ਘੱਟ (ਡਾਟਾ ਸੁਰੱਖਿਅਤ ਨਹੀਂ) | ਵੱਧ (Private/Protected ਰਾਹੀਂ ਸੁਰੱਖਿਅਤ) |
| **Code Reuse** | ਘੱਟ (ਸਿਰਫ਼ ਫੰਕਸ਼ਨ) | ਵੱਧ (Inheritance ਰਾਹੀਂ) |
| **Polymorphism** | ਸਿੱਧੇ ਤੌਰ 'ਤੇ ਸਪੋਰਟ ਨਹੀਂ ਕਰਦਾ | ਸਪੋਰਟ ਕਰਦਾ ਹੈ (Overloading, Virtual) |
| **Real-world** | ਅਸਲ ਦੁਨੀਆ ਨੂੰ ਦਰਸਾਉਣਾ ਔਖਾ ਹੈ | ਆਸਾਨ ਹੈ (Objects = Entities) |
| **Example** | C, Pascal, FORTRAN | C++, Java, C#, Python |

OOP ਇੱਕ ਆਧੁਨਿਕ ਤਰੀਕਾ ਹੈ ਜੋ ਅਸਲ ਦੁਨੀਆ ਦੀਆਂ ਚੀਜ਼ਾਂ ਨੂੰ ਦਰਸਾਉਣਾ ਆਸਾਨ ਬਣਾਉਂਦਾ ਹੈ ਅਤੇ ਡਾਟਾ ਨੂੰ ਸੁਰੱਖਿਅਤ ਰੱਖਦਾ ਹੈ।`
      },
      {
        id: "U1-Q2",
        title: "Explain the main Concepts of OOP (Class, Object, Encapsulation, Abstraction, Inheritance, Polymorphism).",
        en: `Here are the core concepts of Object-Oriented Programming:

**1. Class:** A user-defined data type that binds data members and member functions together. It acts as a blueprint or template.
**2. Object:** An instance of a class. It represents a real-world entity that takes up memory and has state (data) and behavior (functions).
**3. Encapsulation:** Wrapping data and functions into a single unit (class). It achieves Data Hiding by keeping data \`private\`.
**4. Abstraction:** Showing only essential features and hiding the background details. It reduces complexity and increases security.
**5. Inheritance:** Deriving new classes (child) from existing ones (parent) to reuse code.
**6. Polymorphism:** The ability to take "many forms". It means using a single interface for different types of actions (e.g., function overloading).

**Turbo C++ Program for Encapsulation & Abstraction:**
\`\`\`cpp
#include<iostream.h>
#include<conio.h>

class BankAccount {
private:
    // Encapsulation: data is hidden
    double balance;
public:
    BankAccount(double b=0) {
        balance = b;
    }
    // Abstraction: user only knows how to deposit, not internal workings
    void deposit(double amount) {
        if(amount > 0) balance += amount;
    }
    double getBalance() {
        return balance;
    }
};

void main() {
    clrscr();
    BankAccount acc(1000);
    acc.deposit(500);
    cout << "Final Balance = " << acc.getBalance();
    getch();
}
\`\`\``,
        pa: `ਆਬਜੈਕਟ-ਓਰੀਐਂਟਿਡ ਪ੍ਰੋਗਰਾਮਿੰਗ (OOP) ਦੇ ਮੁੱਖ ਸੰਕਲਪ:

**1. Class (ਕਲਾਸ):** ਇਹ ਇੱਕ ਯੂਜ਼ਰ-ਡਿਫਾਈਨਡ ਡੇਟਾ ਟਾਈਪ ਹੈ ਜੋ ਡੇਟਾ ਅਤੇ ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਇਕੱਠਾ ਬੰਨ੍ਹਦਾ ਹੈ। ਇਹ ਇੱਕ ਬਲੂਪ੍ਰਿੰਟ (ਨਕਸ਼ਾ) ਵਾਂਗ ਕੰਮ ਕਰਦਾ ਹੈ।
**2. Object (ਆਬਜੈਕਟ):** ਇਹ ਕਲਾਸ ਦਾ ਇੱਕ ਹਿੱਸਾ (instance) ਹੈ। ਇਹ ਅਸਲ ਦੁਨੀਆ ਦੀ ਚੀਜ਼ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ, ਮੈਮੋਰੀ ਲੈਂਦਾ ਹੈ, ਅਤੇ ਇਸਦਾ ਡੇਟਾ ਅਤੇ ਕੰਮ ਕਰਨ ਦਾ ਤਰੀਕਾ ਹੁੰਦਾ ਹੈ।
**3. Encapsulation (ਐਨਕੈਪਸੂਲੇਸ਼ਨ):** ਡੇਟਾ ਅਤੇ ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਇੱਕ ਸਿੰਗਲ ਯੂਨਿਟ (ਕਲਾਸ) ਵਿੱਚ ਲਪੇਟਣਾ। ਇਹ ਡੇਟਾ ਨੂੰ \`private\` ਰੱਖ ਕੇ ਲੁਕਾਉਣ (Data Hiding) ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।
**4. Abstraction (ਐਬਸਟ੍ਰੈਕਸ਼ਨ):** ਸਿਰਫ਼ ਜ਼ਰੂਰੀ ਜਾਣਕਾਰੀ ਦਿਖਾਉਣਾ ਅਤੇ ਅੰਦਰੂਨੀ ਡਿਟੇਲ ਲੁਕਾਉਣਾ। ਇਹ ਸਿਸਟਮ ਨੂੰ ਸਮਝਣ ਵਿੱਚ ਆਸਾਨ ਬਣਾਉਂਦਾ ਹੈ।
**5. Inheritance (ਇਨਹੈਰੀਟੈਂਸ):** ਪੁਰਾਣੀਆਂ ਕਲਾਸਾਂ (parent) ਤੋਂ ਨਵੀਆਂ ਕਲਾਸਾਂ (child) ਬਣਾਉਣਾ, ਤਾਂ ਜੋ ਕੋਡ ਨੂੰ ਦੁਬਾਰਾ ਵਰਤਿਆ ਜਾ ਸਕੇ।
**6. Polymorphism (ਪੋਲੀਮੋਰਫਿਜ਼ਮ):** ਇਸਦਾ ਮਤਲਬ ਹੈ "ਕਈ ਰੂਪ"। ਇੱਕੋ ਨਾਮ ਜਾਂ ਇੰਟਰਫੇਸ ਨੂੰ ਵੱਖ-ਵੱਖ ਕੰਮਾਂ ਲਈ ਵਰਤਣਾ (ਜਿਵੇਂ ਕਿ ਫੰਕਸ਼ਨ ਓਵਰਲੋਡਿੰਗ)।

*(ਪ੍ਰੋਗਰਾਮ ਲਈ English ਭਾਗ ਦੇਖੋ, Turbo C++ ਵਿੱਚ ਲਿਖਿਆ ਗਿਆ ਹੈ)*`
      },
      {
        id: "U1-Q3",
        title: "What are the Applications of OOP?",
        en: `Object-Oriented Programming is used in various fields because it is secure, reliable, and easy to maintain. 

Key applications include:
1. **Real-time systems:** Systems that require quick responses (like air traffic control).
2. **Simulation and modeling:** Creating digital copies of physical objects.
3. **GUI design:** Building graphical user interfaces like Windows or macOS.
4. **AI and Expert systems:** Artificial intelligence programs.
5. **CAD/CAM systems:** Computer-Aided Design for engineering.
6. **Object-oriented databases:** Databases that store objects directly.
7. **Telecom systems:** Managing telecommunication networks.`,
        pa: `Object-Oriented Programming (OOP) ਦੀ ਵਰਤੋਂ ਕਈ ਖੇਤਰਾਂ ਵਿੱਚ ਕੀਤੀ ਜਾਂਦੀ ਹੈ ਕਿਉਂਕਿ ਇਹ ਸੁਰੱਖਿਅਤ, ਭਰੋਸੇਯੋਗ, ਅਤੇ maintain ਕਰਨਾ ਆਸਾਨ ਹੈ।

ਮੁੱਖ ਉਪਯੋਗ (Applications):
1. **Real-time systems:** ਉਹ ਸਿਸਟਮ ਜਿਨ੍ਹਾਂ ਨੂੰ ਤੁਰੰਤ ਜਵਾਬ ਦੇਣਾ ਪੈਂਦਾ ਹੈ (ਜਿਵੇਂ ਏਅਰ ਟ੍ਰੈਫਿਕ ਕੰਟਰੋਲ)।
2. **Simulation ਅਤੇ modeling:** ਅਸਲ ਦੁਨੀਆ ਦੀਆਂ ਚੀਜ਼ਾਂ ਦੇ ਡਿਜੀਟਲ ਮਾਡਲ ਬਣਾਉਣਾ।
3. **GUI design:** ਗ੍ਰਾਫਿਕਲ ਯੂਜ਼ਰ ਇੰਟਰਫੇਸ (ਜਿਵੇਂ ਵਿੰਡੋਜ਼) ਬਣਾਉਣਾ।
4. **AI ਅਤੇ Expert systems:** ਆਰਟੀਫੀਸ਼ੀਅਲ ਇੰਟੈਲੀਜੈਂਸ ਪ੍ਰੋਗਰਾਮ।
5. **CAD/CAM systems:** ਇੰਜੀਨੀਅਰਿੰਗ ਡਿਜ਼ਾਈਨ ਲਈ ਵਰਤੋਂ।
6. **Object-oriented databases:** ਅਜਿਹੇ ਡਾਟਾਬੇਸ ਜੋ ਸਿੱਧੇ ਆਬਜੈਕਟ ਸਟੋਰ ਕਰਦੇ ਹਨ।
7. **Telecom systems:** ਟੈਲੀਕਾਮ ਨੈੱਟਵਰਕਾਂ ਦਾ ਪ੍ਰਬੰਧਨ।`
      },
      {
        id: "U1-Q4",
        title: "Explain Special Operators in C++ (Scope resolution, new, delete, manipulators).",
        en: `C++ has special operators that give extra power to the programmer.

| Operator | Symbol | Purpose | Example |
|---|---|---|---|
| **Scope Resolution** | \`::\` | Define member functions outside a class or access global variables. | \`void Box::area(){}\` |
| **Member Dereferencing** | \`::*\`, \`->*\`, \`.*\` | Pointer to class members. | \`obj.*p;\` |
| **Memory Management** | \`new\` / \`delete\` | Allocate/free memory on the heap dynamically. | \`int* p = new int;\` |
| **Manipulators** | \`endl\`, \`setw\` | Format input/output streams. | \`cout << setw(10) << x;\` |
| **Type Cast** | \`(int)x\` | Convert one data type into another. | \`float y = (float)x / 2;\` |

**Advantages of \`new\` operator:**
1. Allocates memory dynamically at runtime.
2. Returns the correct pointer type (no casting needed).
3. Automatically calls the **constructor** for objects.`,
        pa: `C++ ਵਿੱਚ ਕੁਝ ਖਾਸ ਓਪਰੇਟਰ (Special Operators) ਹੁੰਦੇ ਹਨ।

| ਓਪਰੇਟਰ | ਚਿੰਨ੍ਹ (Symbol) | ਮਕਸਦ (Purpose) | ਉਦਾਹਰਨ |
|---|---|---|---|
| **Scope Resolution** | \`::\` | ਕਲਾਸ ਦੇ ਬਾਹਰ ਫੰਕਸ਼ਨ ਡਿਫਾਈਨ ਕਰਨਾ ਜਾਂ ਗਲੋਬਲ ਵੇਰੀਏਬਲ ਨੂੰ ਐਕਸੈਸ ਕਰਨਾ। | \`void Box::area(){}\` |
| **Member Dereferencing** | \`::*\`, \`->*\`, \`.*\` | ਕਲਾਸ ਮੈਂਬਰਾਂ ਦੇ ਪੁਆਇੰਟਰ। | \`obj.*p;\` |
| **Memory Management** | \`new\` / \`delete\` | ਰਨ-ਟਾਈਮ 'ਤੇ ਮੈਮੋਰੀ ਲੈਣਾ ਅਤੇ ਫ੍ਰੀ ਕਰਨਾ। | \`int* p = new int;\` |
| **Manipulators** | \`endl\`, \`setw\` | ਆਉਟਪੁੱਟ ਨੂੰ ਸਹੀ ਫਾਰਮੈਟ ਵਿੱਚ ਦਿਖਾਉਣਾ। | \`cout << setw(10) << x;\` |
| **Type Cast** | \`(int)x\` | ਇੱਕ ਡਾਟਾ ਟਾਈਪ ਨੂੰ ਦੂਜੇ ਵਿੱਚ ਬਦਲਣਾ। | \`float y = (float)x / 2;\` |

**\`new\` ਓਪਰੇਟਰ ਦੇ ਫਾਇਦੇ:**
1. ਰਨ-ਟਾਈਮ 'ਤੇ ਮੈਮੋਰੀ ਲੈਂਦਾ ਹੈ।
2. ਸਹੀ ਪੁਆਇੰਟਰ ਟਾਈਪ ਵਾਪਸ ਕਰਦਾ ਹੈ (ਕਿਸੇ ਕਾਸਟਿੰਗ ਦੀ ਲੋੜ ਨਹੀਂ)।
3. ਆਬਜੈਕਟਸ ਲਈ ਆਪਣੇ ਆਪ ਕੰਸਟਰਕਟਰ (constructor) ਕਾਲ ਕਰਦਾ ਹੈ।`
      },
      {
        id: "U1-Q5",
        title: "How to define Member Functions in C++?",
        en: `There are two ways to define member functions in C++:

**1. Inside Class Declaration:**
Functions defined inside the class are automatically treated as \`inline\` functions. This is fast but increases program size.
\`\`\`cpp
class A {
public:
    void show() {
        cout << "Inside Class";
    }
};
\`\`\`

**2. Outside Class Declaration:**
Using the **Scope Resolution Operator** (\`::\`). This is preferred for large functions.
\`\`\`cpp
class A {
public:
    void show(); // Declaration
};

// Definition outside
void A::show() {
    cout << "Outside Class";
}
\`\`\``,
        pa: `C++ ਵਿੱਚ ਮੈਂਬਰ ਫੰਕਸ਼ਨਾਂ ਨੂੰ ਡਿਫਾਈਨ ਕਰਨ ਦੇ ਦੋ ਤਰੀਕੇ ਹਨ:

**1. ਕਲਾਸ ਦੇ ਅੰਦਰ (Inside Class):**
ਕਲਾਸ ਦੇ ਅੰਦਰ ਡਿਫਾਈਨ ਕੀਤੇ ਫੰਕਸ਼ਨ ਆਟੋਮੈਟਿਕ \`inline\` ਬਣ ਜਾਂਦੇ ਹਨ। ਇਹ ਤੇਜ਼ ਹੁੰਦੇ ਹਨ ਪਰ ਪ੍ਰੋਗਰਾਮ ਦਾ ਸਾਈਜ਼ ਵਧਾ ਸਕਦੇ ਹਨ।
\`\`\`cpp
class A {
public:
    void show() {
        cout << "Inside Class";
    }
};
\`\`\`

**2. ਕਲਾਸ ਦੇ ਬਾਹਰ (Outside Class):**
Scope Resolution Operator (\`::\`) ਦੀ ਵਰਤੋਂ ਕਰਕੇ। ਵੱਡੇ ਫੰਕਸ਼ਨਾਂ ਲਈ ਇਹ ਤਰੀਕਾ ਵਧੀਆ ਹੈ।
\`\`\`cpp
class A {
public:
    void show(); // ਸਿਰਫ਼ ਘੋਸ਼ਣਾ (Declaration)
};

// ਬਾਹਰ ਡਿਫਾਈਨ ਕਰਨਾ
void A::show() {
    cout << "Outside Class";
}
\`\`\``
      }
    ]
  },
  {
    unit: "UNIT-II: Functions, Constructors & Operator Overloading",
    questions: [
      {
        id: "U2-Q1",
        title: "What is a Friend Function? Explain its rules and need.",
        en: `A **Friend Function** is a non-member function that has access to the \`private\` and \`protected\` members of a class. It is declared inside the class using the \`friend\` keyword.

**Need for Friend Function:**
Sometimes, a function needs to access the private data of two different classes (e.g., adding objects of two different classes). A friend function makes this possible.

**Rules:**
1. It is declared inside the class with the \`friend\` keyword but defined outside without \`friend\` and without \`::\`.
2. It is not a member function, so it has no \`this\` pointer.
3. It cannot access members directly; it must use an object (e.g., \`obj.x\`).
4. It is called like a normal function, not with the dot operator.
5. Friendship is not inherited and not transitive.

**Turbo C++ Program:**
\`\`\`cpp
#include<iostream.h>
#include<conio.h>

class B; // Forward declaration

class A {
    int x;
public:
    A(int a) { x = a; }
    friend int sum(A, B); // Friend declaration
};

class B {
    int y;
public:
    B(int b) { y = b; }
    friend int sum(A, B); // Friend declaration
};

// Definition outside (No :: used)
int sum(A a, B b) {
    return a.x + b.y; // Accessing private data
}

void main() {
    clrscr();
    A objA(10);
    B objB(20);
    cout << "Sum = " << sum(objA, objB); // Prints 30
    getch();
}
\`\`\``,
        pa: `**Friend Function** ਇੱਕ ਅਜਿਹਾ ਫੰਕਸ਼ਨ ਹੈ ਜੋ ਕਲਾਸ ਦਾ ਮੈਂਬਰ ਨਹੀਂ ਹੁੰਦਾ, ਪਰ ਫਿਰ ਵੀ ਇਹ ਕਲਾਸ ਦੇ \`private\` ਅਤੇ \`protected\` ਡਾਟਾ ਨੂੰ ਐਕਸੈਸ ਕਰ ਸਕਦਾ ਹੈ। ਇਸਨੂੰ ਕਲਾਸ ਦੇ ਅੰਦਰ \`friend\` ਕੀਵਰਡ ਨਾਲ ਘੋਸ਼ਿਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।

**ਜ਼ਰੂਰਤ (Need):**
ਜਦੋਂ ਸਾਨੂੰ ਦੋ ਵੱਖ-ਵੱਖ ਕਲਾਸਾਂ ਦੇ ਪ੍ਰਾਈਵੇਟ ਡਾਟਾ ਨੂੰ ਇੱਕੋ ਫੰਕਸ਼ਨ ਵਿੱਚ ਵਰਤਣਾ ਹੋਵੇ (ਜਿਵੇਂ ਦੋ ਕਲਾਸਾਂ ਦੇ ਆਬਜੈਕਟਸ ਨੂੰ ਜੋੜਨਾ), ਤਾਂ ਫ੍ਰੈਂਡ ਫੰਕਸ਼ਨ ਦੀ ਲੋੜ ਪੈਂਦੀ ਹੈ।

**ਨਿਯਮ (Rules):**
1. ਇਸਨੂੰ ਕਲਾਸ ਦੇ ਅੰਦਰ \`friend\` ਕੀਵਰਡ ਨਾਲ ਲਿਖਿਆ ਜਾਂਦਾ ਹੈ, ਪਰ ਬਾਹਰ ਡਿਫਾਈਨ ਕਰਨ ਵੇਲੇ \`friend\` ਜਾਂ \`::\` ਨਹੀਂ ਲੱਗਦਾ।
2. ਇਹ ਮੈਂਬਰ ਫੰਕਸ਼ਨ ਨਹੀਂ ਹੈ, ਇਸ ਲਈ ਇਸ ਕੋਲ \`this\` ਪੁਆਇੰਟਰ ਨਹੀਂ ਹੁੰਦਾ।
3. ਇਹ ਡਾਟਾ ਨੂੰ ਸਿੱਧਾ ਐਕਸੈਸ ਨਹੀਂ ਕਰ ਸਕਦਾ; ਇਸਨੂੰ ਆਬਜੈਕਟ ਦੀ ਵਰਤੋਂ ਕਰਨੀ ਪੈਂਦੀ ਹੈ (ਜਿਵੇਂ \`obj.x\`)।
4. ਇਸਨੂੰ ਨਾਰਮਲ ਫੰਕਸ਼ਨ ਵਾਂਗ ਕਾਲ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।
5. ਫ੍ਰੈਂਡਸ਼ਿਪ ਵਿਰਾਸਤ ਵਿੱਚ ਨਹੀਂ ਮਿਲਦੀ (not inherited)।

*(ਪ੍ਰੋਗਰਾਮ ਲਈ English ਭਾਗ ਦੇਖੋ, Turbo C++ ਵਿੱਚ ਲਿਖਿਆ ਗਿਆ ਹੈ)*`
      },
      {
        id: "U2-Q2",
        title: "What is an Inline Function? Why is it faster?",
        en: `An **Inline Function** is a function that is expanded in a line when it is called. When the compiler compiles the code, it replaces the function call with the actual code of the function.

It is defined using the \`inline\` keyword.

**Why is it faster?**
It eliminates the function-call overhead (saving the current state, jumping to the function, and returning back). It is highly recommended for very short, frequently called functions. 

*(Note: If a function is too large or contains loops/recursion, the compiler will ignore the \`inline\` request.)*

**Example:**
\`\`\`cpp
inline int square(int x) {
    return x * x;
}
\`\`\``,
        pa: `**Inline Function** ਇੱਕ ਅਜਿਹਾ ਫੰਕਸ਼ਨ ਹੈ ਜਿਸਦਾ ਕੋਡ ਕੰਪਾਈਲਰ ਦੁਆਰਾ ਫੰਕਸ਼ਨ ਕਾਲ ਵਾਲੀ ਜਗ੍ਹਾ 'ਤੇ ਸਿੱਧਾ ਰੱਖ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ। ਇਸਨੂੰ \`inline\` ਕੀਵਰਡ ਨਾਲ ਬਣਾਇਆ ਜਾਂਦਾ ਹੈ।

**ਇਹ ਤੇਜ਼ ਕਿਉਂ ਹੈ?**
ਕਿਉਂਕਿ ਇਸ ਨਾਲ ਫੰਕਸ਼ਨ-ਕਾਲ ਓਵਰਹੈੱਡ (ਜਿਵੇਂ ਮੈਮੋਰੀ ਵਿੱਚ ਛਾਲ ਮਾਰਨਾ ਅਤੇ ਵਾਪਸ ਆਉਣਾ) ਬਚ ਜਾਂਦਾ ਹੈ। ਇਹ ਛੋਟੇ ਅਤੇ ਵਾਰ-ਵਾਰ ਕਾਲ ਹੋਣ ਵਾਲੇ ਫੰਕਸ਼ਨਾਂ ਲਈ ਬਹੁਤ ਵਧੀਆ ਹੈ।

*(ਨੋਟ: ਜੇਕਰ ਫੰਕਸ਼ਨ ਬਹੁਤ ਵੱਡਾ ਹੋਵੇ ਜਾਂ ਉਸ ਵਿੱਚ ਲੂਪ ਹੋਵੇ, ਤਾਂ ਕੰਪਾਈਲਰ ਇਸਨੂੰ ਇਨਲਾਈਨ ਨਹੀਂ ਮੰਨਦਾ।)*`
      },
      {
        id: "U2-Q3",
        title: "Explain Constructor and its Types (Default, Parameterized, Copy).",
        en: `A **Constructor** is a special member function having the exact same name as the class. It is called automatically when an object is created. Its main purpose is to initialize the object. It has no return type (not even \`void\`).

**Types of Constructors:**

**1. Default Constructor:** Takes no arguments. Initializes objects with default values.
**2. Parameterized Constructor:** Takes arguments to initialize objects with specific values.
**3. Copy Constructor:** Initializes a new object using an existing object of the same class. Used when passing objects by value or returning them.

**Turbo C++ Program:**
\`\`\`cpp
#include<iostream.h>
#include<conio.h>

class Distance {
    int feet, inches;
public:
    // 1. Default Constructor
    Distance() { 
        feet = 0; inches = 0; 
    }
    
    // 2. Parameterized Constructor
    Distance(int f, int i) { 
        feet = f; inches = i; 
    }
    
    // 3. Copy Constructor
    Distance(Distance &d) { 
        feet = d.feet; 
        inches = d.inches; 
        cout << "Copy Constructor Called\\n"; 
    }
    
    void show() { 
        cout << feet << "' " << inches << "\\"" << endl; 
    }
};

void main() {
    clrscr();
    Distance d1;           // Calls Default
    Distance d2(5, 4);     // Calls Parameterized
    Distance d3(d2);       // Calls Copy (d3 is copy of d2)
    
    d1.show();
    d2.show();
    d3.show();
    getch();
}
\`\`\``,
        pa: `**Constructor (ਕੰਸਟਰਕਟਰ)** ਇੱਕ ਖਾਸ ਮੈਂਬਰ ਫੰਕਸ਼ਨ ਹੈ ਜਿਸਦਾ ਨਾਮ ਕਲਾਸ ਦੇ ਨਾਮ ਵਰਗਾ ਹੀ ਹੁੰਦਾ ਹੈ। ਜਦੋਂ ਵੀ ਕੋਈ ਨਵਾਂ ਆਬਜੈਕਟ ਬਣਦਾ ਹੈ, ਇਹ ਆਪਣੇ ਆਪ ਚੱਲ ਪੈਂਦਾ ਹੈ। ਇਸਦਾ ਮੁੱਖ ਕੰਮ ਆਬਜੈਕਟ ਨੂੰ ਸ਼ੁਰੂਆਤੀ ਵੈਲਿਊ ਦੇਣਾ ਹੈ। ਇਸਦੀ ਕੋਈ ਰਿਟਰਨ ਟਾਈਪ (void ਵੀ ਨਹੀਂ) ਨਹੀਂ ਹੁੰਦੀ।

**ਕੰਸਟਰਕਟਰ ਦੀਆਂ ਕਿਸਮਾਂ (Types):**
**1. Default Constructor:** ਕੋਈ ਆਰਗੂਮੈਂਟ ਨਹੀਂ ਲੈਂਦਾ। ਇਹ ਆਬਜੈਕਟ ਨੂੰ ਡਿਫਾਲਟ ਵੈਲਿਊ ਦਿੰਦਾ ਹੈ।
**2. Parameterized Constructor:** ਇਹ ਆਰਗੂਮੈਂਟ ਲੈਂਦਾ ਹੈ ਤਾਂ ਜੋ ਆਬਜੈਕਟ ਨੂੰ ਖਾਸ ਵੈਲਿਊ ਦਿੱਤੀ ਜਾ ਸਕੇ।
**3. Copy Constructor:** ਇਹ ਪਹਿਲਾਂ ਤੋਂ ਬਣੇ ਆਬਜੈਕਟ ਦੀ ਕਾਪੀ ਕਰਕੇ ਨਵਾਂ ਆਬਜੈਕਟ ਬਣਾਉਂਦਾ ਹੈ।

*(ਪ੍ਰੋਗਰਾਮ ਲਈ English ਭਾਗ ਦੇਖੋ, Turbo C++ ਵਿੱਚ ਲਿਖਿਆ ਗਿਆ ਹੈ)*`
      },
      {
        id: "U2-Q4",
        title: "Write a program to overload binary operators > and < to compare area of two squares.",
        en: `**Operator Overloading** gives special meaning to existing C++ operators when applied to objects. 
This program demonstrates binary operator overloading to compare two \`Square\` objects.

**Turbo C++ Program:**
\`\`\`cpp
#include<iostream.h>
#include<conio.h>

class Square {
    int side;
public:
    Square(int s = 0) { side = s; }
    
    int area() { return side * side; }
    
    // Overload >
    int operator > (Square s) {
        if (area() > s.area()) return 1;
        return 0;
    }
    
    // Overload <
    int operator < (Square s) {
        if (area() < s.area()) return 1;
        return 0;
    }
    
    void show() {
        cout << "Side=" << side << " Area=" << area() << endl;
    }
};

void main() {
    clrscr();
    Square s1(4), s2(7);
    
    s1.show();
    s2.show();
    
    if (s1 > s2) {
        cout << "S1 area is greater\\n";
    } else if (s1 < s2) {
        cout << "S2 area is greater\\n";
    } else {
        cout << "Both areas are equal\\n";
    }
    getch();
}
\`\`\``,
        pa: `**Operator Overloading** C++ ਦੇ ਮੌਜੂਦਾ ਓਪਰੇਟਰਾਂ (ਜਿਵੇਂ > ਜਾਂ <) ਨੂੰ ਆਬਜੈਕਟਸ 'ਤੇ ਕੰਮ ਕਰਨ ਦੀ ਤਾਕਤ ਦਿੰਦਾ ਹੈ।
ਇਹ ਪ੍ਰੋਗਰਾਮ ਦਿਖਾਉਂਦਾ ਹੈ ਕਿ ਅਸੀਂ ਦੋ \`Square\` ਕਲਾਸ ਦੇ ਆਬਜੈਕਟਸ ਦਾ Area (ਖੇਤਰਫਲ) ਕਿਵੇਂ ਚੈੱਕ ਕਰ ਸਕਦੇ ਹਾਂ ਕਿ ਕਿਹੜਾ ਵੱਡਾ ਹੈ ਜਾਂ ਛੋਟਾ।

*(ਪ੍ਰੋਗਰਾਮ ਲਈ English ਭਾਗ ਦੇਖੋ, Turbo C++ ਵਿੱਚ ਲਿਖਿਆ ਗਿਆ ਹੈ)*`
      },
      {
        id: "U2-Q5",
        title: "Write a program to add two matrices using Operator Overloading.",
        en: `This is a highly repeated exam question where we overload the \`+\` operator to add two matrices.

**Turbo C++ Program:**
\`\`\`cpp
#include<iostream.h>
#include<conio.h>

class Matrix {
    int m[2][2];
public:
    void read() {
        cout << "Enter 4 elements:\\n";
        for(int i=0; i<2; i++) {
            for(int j=0; j<2; j++) {
                cin >> m[i][j];
            }
        }
    }
    
    void show() {
        for(int i=0; i<2; i++) {
            for(int j=0; j<2; j++) {
                cout << m[i][j] << " ";
            }
            cout << endl;
        }
    }
    
    // Overloading + operator
    Matrix operator + (Matrix x) {
        Matrix r;
        for(int i=0; i<2; i++) {
            for(int j=0; j<2; j++) {
                r.m[i][j] = m[i][j] + x.m[i][j];
            }
        }
        return r;
    }
};

void main() {
    clrscr();
    Matrix a, b, c;
    cout << "Matrix A:\\n";
    a.read();
    cout << "Matrix B:\\n";
    b.read();
    
    c = a + b; // '+' operator is overloaded
    
    cout << "Sum Matrix:\\n";
    c.show();
    getch();
}
\`\`\``,
        pa: `ਇਹ ਪ੍ਰੀਖਿਆ ਵਿੱਚ ਬਾਰ-ਬਾਰ ਪੁੱਛਿਆ ਜਾਣ ਵਾਲਾ ਪ੍ਰਸ਼ਨ ਹੈ, ਜਿੱਥੇ ਅਸੀਂ \`+\` ਓਪਰੇਟਰ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਦੋ ਮੈਟ੍ਰਿਕਸ (Matrices) ਨੂੰ ਜੋੜਦੇ ਹਾਂ।

ਅਸੀਂ \`operator +\` ਫੰਕਸ਼ਨ ਬਣਾਉਂਦੇ ਹਾਂ, ਜੋ ਦੋਵਾਂ ਮੈਟ੍ਰਿਕਸ ਦੇ ਹਰੇਕ ਐਲੀਮੈਂਟ ਨੂੰ ਆਪਸ ਵਿੱਚ ਜੋੜ ਕੇ ਇੱਕ ਨਵਾਂ ਮੈਟ੍ਰਿਕਸ ਵਾਪਸ ਕਰਦਾ ਹੈ। 

*(ਪ੍ਰੋਗਰਾਮ ਲਈ English ਭਾਗ ਦੇਖੋ, Turbo C++ ਵਿੱਚ ਲਿਖਿਆ ਗਿਆ ਹੈ)*`
      },
      {
        id: "U2-Q6",
        title: "Explain Static Data Members in C++.",
        en: `**Static Data Members** are variables declared with the \`static\` keyword inside a class. 
Only **one single copy** of that member is created for the entire class, and it is shared by all objects of that class.

**Properties:**
1. It is initialized to zero when the first object is created (if no other initialization is present).
2. It must be defined outside the class using the scope resolution operator (\`::\`).
3. It can be accessed using the class name, like \`ClassName::memberName\`.

**Turbo C++ Example:**
\`\`\`cpp
#include<iostream.h>
#include<conio.h>

class Counter {
public:
    static int count; // Declaration
    
    Counter() {
        count++; // Increment shared variable
    }
};

// Definition outside class
int Counter::count = 0;

void main() {
    clrscr();
    Counter c1;
    Counter c2;
    Counter c3;
    cout << "Total objects created = " << Counter::count; // Prints 3
    getch();
}
\`\`\``,
        pa: `**Static Data Members** ਉਹ ਵੇਰੀਏਬਲ ਹੁੰਦੇ ਹਨ ਜਿਨ੍ਹਾਂ ਦੇ ਅੱਗੇ \`static\` ਲਿਖਿਆ ਹੁੰਦਾ ਹੈ। ਪੂਰੀ ਕਲਾਸ ਲਈ ਇਸਦੀ ਸਿਰਫ਼ **ਇੱਕ ਹੀ ਕਾਪੀ** ਬਣਦੀ ਹੈ ਅਤੇ ਸਾਰੇ ਆਬਜੈਕਟਸ ਉਸੇ ਨੂੰ ਸਾਂਝਾ (share) ਕਰਦੇ ਹਨ।

**ਖਾਸੀਅਤਾਂ:**
1. ਇਸਨੂੰ ਕਲਾਸ ਦੇ ਬਾਹਰ Scope Resolution Operator (\`::\`) ਰਾਹੀਂ ਡਿਫਾਈਨ ਕਰਨਾ ਜ਼ਰੂਰੀ ਹੈ।
2. ਜਦੋਂ ਪਹਿਲਾ ਆਬਜੈਕਟ ਬਣਦਾ ਹੈ ਤਾਂ ਇਸਦੀ ਵੈਲਿਊ 0 ਹੋ ਜਾਂਦੀ ਹੈ।
3. ਇਸਨੂੰ ਆਬਜੈਕਟ ਤੋਂ ਬਿਨਾਂ ਵੀ ਐਕਸੈਸ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ (ਜਿਵੇਂ \`Counter::count\`)।

*(ਪ੍ਰੋਗਰਾਮ ਲਈ English ਭਾਗ ਦੇਖੋ)*`
      },
      {
        id: "U2-Q7",
        title: "What is a Destructor? Explain its purpose.",
        en: `A **Destructor** is a special member function with the same name as the class, preceded by a tilde (\`~\`). 

**Purpose:**
It is called **automatically** when an object goes out of scope or is destroyed. Its main purpose is to release dynamically allocated memory and free up resources before the object is completely deleted.

**Rules:**
1. No return type and no parameters.
2. Cannot be overloaded.
3. Order of destruction is the **reverse** of construction (Last-in, First-out).

**Example:**
\`\`\`cpp
class A {
public:
    A() { cout << "Constructor called"; }
    ~A() { cout << "Destructor called"; }
};
\`\`\``,
        pa: `**Destructor (ਡਿਸਟਰਕਟਰ)** ਵੀ ਇੱਕ ਖਾਸ ਫੰਕਸ਼ਨ ਹੈ ਜਿਸਦਾ ਨਾਮ ਕਲਾਸ ਵਰਗਾ ਹੀ ਹੁੰਦਾ ਹੈ, ਪਰ ਇਸਦੇ ਅੱਗੇ (\`~\`) ਦਾ ਨਿਸ਼ਾਨ ਲੱਗਦਾ ਹੈ।

**ਮਕਸਦ:**
ਇਹ ਆਪਣੇ ਆਪ ਉਦੋਂ ਚੱਲਦਾ ਹੈ ਜਦੋਂ ਆਬਜੈਕਟ ਦਾ ਕੰਮ ਖਤਮ ਹੋ ਜਾਂਦਾ ਹੈ (scope ਤੋਂ ਬਾਹਰ ਹੋ ਜਾਂਦਾ ਹੈ)। ਇਸਦਾ ਕੰਮ ਮੈਮੋਰੀ ਨੂੰ ਫ੍ਰੀ (free) ਕਰਨਾ ਹੈ ਤਾਂ ਜੋ ਕੰਪਿਊਟਰ 'ਤੇ ਬੋਝ ਨਾ ਪਵੇ।

**ਨਿਯਮ:**
1. ਇਹ ਕੋਈ ਆਰਗੂਮੈਂਟ ਨਹੀਂ ਲੈਂਦਾ।
2. ਇਹ ਓਵਰਲੋਡ ਨਹੀਂ ਹੋ ਸਕਦਾ।
3. ਜੋ ਆਬਜੈਕਟ ਸਭ ਤੋਂ ਅਖੀਰ ਵਿੱਚ ਬਣਦਾ ਹੈ, ਉਹ ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਨਸ਼ਟ (destroy) ਹੁੰਦਾ ਹੈ।`
      }
    ]
  },
  {
    unit: "UNIT-III: Inheritance & Polymorphism",
    questions: [
      {
        id: "U3-Q1",
        title: "What is Inheritance? What is its importance?",
        en: `**Inheritance** is the mechanism of deriving a new class (derived/child) from an existing class (base/parent) so that the new class acquires the properties (data + methods) of the existing one.

**Importance:**
1. **Reusability:** Write code once, reuse it everywhere; saves time.
2. **Extensibility:** Extend an old class without modifying its core code.
3. **Real-world mapping:** Models "is-a" hierarchies perfectly (e.g., A Dog "is-a" Animal).
4. **Polymorphism:** It supports runtime polymorphism through virtual functions.
5. **Less redundancy:** Decreases duplicated code and improves maintainability.

**Syntax:**
\`\`\`cpp
class DerivedClass : visibility_mode BaseClass { 
    // code
};
\`\`\``,
        pa: `**Inheritance** ਇੱਕ ਅਜਿਹਾ ਤਰੀਕਾ ਹੈ ਜਿਸ ਨਾਲ ਪੁਰਾਣੀ ਕਲਾਸ (Base) ਤੋਂ ਇੱਕ ਨਵੀਂ ਕਲਾਸ (Derived) ਬਣਾਈ ਜਾਂਦੀ ਹੈ, ਤਾਂ ਜੋ ਨਵੀਂ ਕਲਾਸ ਪੁਰਾਣੀ ਕਲਾਸ ਦੇ ਫੀਚਰ (data ਅਤੇ functions) ਪ੍ਰਾਪਤ ਕਰ ਸਕੇ।

**ਮਹੱਤਤਾ (Importance):**
1. **Reusability (ਦੁਬਾਰਾ ਵਰਤੋਂ):** ਇੱਕ ਵਾਰ ਕੋਡ ਲਿਖੋ, ਬਾਰ ਬਾਰ ਵਰਤੋ।
2. **Extensibility:** ਬਿਨਾਂ ਪੁਰਾਣੇ ਕੋਡ ਨੂੰ ਛੇੜੇ, ਨਵੇਂ ਫੀਚਰ ਜੋੜਨਾ।
3. **Real-world mapping:** ਇਹ "is-a" ਰਿਸ਼ਤੇ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ (ਜਿਵੇਂ ਕਿ ਕੁੱਤਾ "ਇੱਕ" ਜਾਨਵਰ ਹੈ)।
4. **Polymorphism:** ਇਹ ਵਰਚੁਅਲ ਫੰਕਸ਼ਨਾਂ ਰਾਹੀਂ ਰਨਟਾਈਮ ਪੋਲੀਮੋਰਫਿਜ਼ਮ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।
5. **ਕੋਡ ਘੱਟ ਕਰਨਾ:** ਇਸ ਨਾਲ ਵਾਧੂ ਕੋਡ ਲਿਖਣ ਤੋਂ ਬਚਤ ਹੁੰਦੀ ਹੈ।`
      },
      {
        id: "U3-Q2",
        title: "Explain the types of Inheritance with Visibility Modes.",
        en: `There are **5 main types of inheritance**:
1. **Single:** One base class, one derived class (A → B).
2. **Multilevel:** A chain of inheritance (A → B → C).
3. **Multiple:** One derived class from many base classes (A + B → C).
4. **Hierarchical:** Many derived classes from one root base class (A branches to B, C, D).
5. **Hybrid:** Combination of two or more types (e.g., Multiple + Hierarchical forms a diamond shape).

**Visibility Modes Table (Must-Memorize):**
| Base Member | Public Inheritance | Private Inheritance | Protected Inheritance |
|---|---|---|---|
| **Public** | Public in derived | Private in derived | Protected in derived |
| **Protected** | Protected | Private | Protected |
| **Private** | **Not inheritable** | Not inheritable | Not inheritable |

*Note: Private members of a base class are NEVER inherited directly. To make them accessible to child classes, change their access specifier to \`protected\`.*`,
        pa: `Inheritance ਦੀਆਂ **5 ਮੁੱਖ ਕਿਸਮਾਂ** ਹੁੰਦੀਆਂ ਹਨ:
1. **Single:** ਇੱਕ Base ਅਤੇ ਇੱਕ Derived ਕਲਾਸ (A → B)।
2. **Multilevel:** ਵਿਰਾਸਤ ਦੀ ਇੱਕ ਲੜੀ (A → B → C)।
3. **Multiple:** ਕਈ Base ਕਲਾਸਾਂ ਤੋਂ ਇੱਕ Derived ਕਲਾਸ (A + B → C)।
4. **Hierarchical:** ਇੱਕ Base ਕਲਾਸ ਤੋਂ ਕਈ Derived ਕਲਾਸਾਂ ਨਿਕਲਦੀਆਂ ਹਨ।
5. **Hybrid:** ਦੋ ਜਾਂ ਵੱਧ ਕਿਸਮਾਂ ਦਾ ਸੁਮੇਲ (ਜਿਵੇਂ Diamond shape)।

**Visibility Modes ਦਾ ਟੇਬਲ:**
| Base ਕਲਾਸ ਮੈਂਬਰ | Public Inheritance | Private Inheritance | Protected Inheritance |
|---|---|---|---|
| **Public** | Derived ਵਿੱਚ Public | Derived ਵਿੱਚ Private | Derived ਵਿੱਚ Protected |
| **Protected** | Protected | Private | Protected |
| **Private** | **Inherit ਨਹੀਂ ਹੁੰਦੇ** | Inherit ਨਹੀਂ ਹੁੰਦੇ | Inherit ਨਹੀਂ ਹੁੰਦੇ |

*ਨੋਟ: Base ਕਲਾਸ ਦੇ Private ਮੈਂਬਰ ਕਦੇ ਵੀ inherit ਨਹੀਂ ਹੁੰਦੇ। ਉਹਨਾਂ ਨੂੰ ਬੱਚਿਆਂ (child class) ਲਈ ਉਪਲਬਧ ਕਰਵਾਉਣ ਲਈ, ਉਹਨਾਂ ਨੂੰ \`protected\` ਬਣਾਉਣਾ ਪੈਂਦਾ ਹੈ।*`
      },
      {
        id: "U3-Q3",
        title: "What is Ambiguity in Multiple Inheritance? How is it resolved?",
        en: `**Multiple Inheritance** means a class inherits from more than one base class. 
**Ambiguity (Diamond Problem):** If Class \`D\` derives from \`B\` and \`C\`, and both \`B\` and \`C\` derive from \`A\`, then \`D\` gets *two copies* of \`A\`'s members. If we call a member of \`A\` from \`D\`, the compiler gets confused about which copy to use.

**Resolution:**
We solve this by declaring \`A\` as a **virtual base class**. This ensures only a single copy of \`A\` is inherited by \`D\`.

**Turbo C++ Example:**
\`\`\`cpp
class A { public: int x; };

// Use virtual keyword
class B : virtual public A {};
class C : virtual public A {};

class D : public B, public C {};

void main() {
    D obj;
    obj.x = 10; // Unambiguous, only one copy of x exists
}
\`\`\``,
        pa: `**Multiple Inheritance** ਦਾ ਮਤਲਬ ਹੈ ਕਿ ਇੱਕ ਕਲਾਸ ਦੋ ਜਾਂ ਵੱਧ ਕਲਾਸਾਂ ਤੋਂ ਬਣਦੀ ਹੈ।
**Ambiguity (ਦੁਬਿਧਾ):** ਜੇਕਰ ਕਲਾਸ \`D\`, ਕਲਾਸ \`B\` ਅਤੇ \`C\` ਤੋਂ ਬਣੀ ਹੈ, ਅਤੇ \`B\` ਅਤੇ \`C\` ਦੋਵੇਂ \`A\` ਤੋਂ ਬਣੀਆਂ ਹਨ, ਤਾਂ \`D\` ਕੋਲ \`A\` ਦੀਆਂ ਦੋ ਕਾਪੀਆਂ ਆ ਜਾਣਗੀਆਂ। ਕੰਪਾਈਲਰ ਉਲਝ ਜਾਂਦਾ ਹੈ ਕਿ ਕਿਹੜੀ ਕਾਪੀ ਵਰਤਣੀ ਹੈ।

**ਹੱਲ (Resolution):**
ਇਸਨੂੰ ਠੀਕ ਕਰਨ ਲਈ ਅਸੀਂ \`A\` ਨੂੰ **virtual base class** ਬਣਾਉਂਦੇ ਹਾਂ। ਇਸ ਨਾਲ \`D\` ਕੋਲ \`A\` ਦੀ ਸਿਰਫ਼ ਇੱਕ ਹੀ ਕਾਪੀ ਆਉਂਦੀ ਹੈ।

*(ਕੋਡ ਲਈ English ਭਾਗ ਦੇਖੋ, \`virtual public A\` ਦੀ ਵਰਤੋਂ ਕੀਤੀ ਗਈ ਹੈ)*`
      },
      {
        id: "U3-Q4",
        title: "Explain Virtual Function and Late Binding. Give program of Base-pointer to Derived-object.",
        en: `**Polymorphism** means many forms. **Run-time polymorphism (Late Binding)** is achieved using **Virtual Functions**.
A virtual function is declared in the base class using the \`virtual\` keyword and is overridden in the derived class. When called via a base-class pointer, the compiler decides at runtime which function to execute based on the actual object type.

**Turbo C++ Program:**
\`\`\`cpp
#include<iostream.h>
#include<conio.h>

class Shape {
public:
    virtual void area() { 
        cout << "Shape area\\n"; 
    }
};

class Circle : public Shape {
    int r;
public:
    Circle(int x) { r = x; }
    void area() { 
        cout << "Circle area = " << (3.14 * r * r) << "\\n"; 
    }
};

class Rectangle : public Shape {
    int l, b;
public:
    Rectangle(int x, int y) { l = x; b = y; }
    void area() { 
        cout << "Rectangle area = " << (l * b) << "\\n"; 
    }
};

void main() {
    clrscr();
    Shape *p; // Base class pointer
    
    Circle c(5);
    Rectangle r(4, 6);
    
    p = &c;
    p->area(); // Calls Circle's area (Late Binding)
    
    p = &r;
    p->area(); // Calls Rectangle's area
    
    getch();
}
\`\`\``,
        pa: `**Polymorphism** ਦਾ ਮਤਲਬ ਹੈ ਕਈ ਰੂਪ। **Run-time polymorphism (Late Binding)** ਨੂੰ **Virtual Functions** ਦੀ ਮਦਦ ਨਾਲ ਲਾਗੂ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।
ਵਰਚੁਅਲ ਫੰਕਸ਼ਨ Base ਕਲਾਸ ਵਿੱਚ \`virtual\` ਕੀਵਰਡ ਨਾਲ ਲਿਖਿਆ ਜਾਂਦਾ ਹੈ। ਜਦੋਂ ਅਸੀਂ Base ਕਲਾਸ ਦੇ ਪੁਆਇੰਟਰ ਰਾਹੀਂ ਇਸਨੂੰ ਕਾਲ ਕਰਦੇ ਹਾਂ, ਤਾਂ ਕੰਪਾਈਲਰ ਰਨਟਾਈਮ 'ਤੇ ਫੈਸਲਾ ਕਰਦਾ ਹੈ ਕਿ ਕਿਹੜਾ ਫੰਕਸ਼ਨ ਚੱਲੇਗਾ (ਜੋ ਅਸਲ ਆਬਜੈਕਟ ਹੋਵੇਗਾ)।

*(ਪ੍ਰੋਗਰਾਮ ਲਈ English ਭਾਗ ਦੇਖੋ, ਜਿੱਥੇ \`Shape *p\` ਪੁਆਇੰਟਰ \`Circle\` ਅਤੇ \`Rectangle\` ਦੋਵਾਂ ਨੂੰ ਪੁਆਇੰਟ ਕਰਦਾ ਹੈ। Turbo C++ ਵਿੱਚ ਲਿਖਿਆ ਗਿਆ ਹੈ)*`
      },
      {
        id: "U3-Q5",
        title: "What is a Pure Virtual Function and an Abstract Class?",
        en: `**Pure Virtual Function:**
A virtual function that is declared with \`= 0\` in the base class and has no body. It forces the derived class to provide the implementation.
\`virtual void draw() = 0;\`

**Abstract Class:**
A class that contains at least one pure virtual function is called an Abstract Class. 
- You **cannot create objects (instantiate)** of an abstract class. 
- It is used only as a base class to define a common interface for its derived classes.`,
        pa: `**Pure Virtual Function:**
ਇਹ ਇੱਕ ਅਜਿਹਾ ਵਰਚੁਅਲ ਫੰਕਸ਼ਨ ਹੈ ਜਿਸਦੇ ਪਿੱਛੇ \`= 0\` ਲਿਖਿਆ ਹੁੰਦਾ ਹੈ ਅਤੇ ਇਸਦੀ ਕੋਈ ਬਾਡੀ (ਕੋਡ) ਨਹੀਂ ਹੁੰਦੀ। (ਜਿਵੇਂ \`virtual void draw() = 0;\`)। ਬੱਚਿਆਂ ਦੀ ਕਲਾਸ ਨੂੰ ਇਸਦਾ ਕੋਡ ਲਿਖਣਾ ਹੀ ਪੈਂਦਾ ਹੈ।

**Abstract Class:**
ਜਿਸ ਕਲਾਸ ਵਿੱਚ ਘੱਟੋ-ਘੱਟ ਇੱਕ Pure Virtual Function ਹੋਵੇ, ਉਸਨੂੰ ਐਬਸਟ੍ਰੈਕਟ (Abstract) ਕਲਾਸ ਕਿਹਾ ਜਾਂਦਾ ਹੈ।
- ਅਸੀਂ ਇਸ ਕਲਾਸ ਦਾ ਆਬਜੈਕਟ (Object) ਨਹੀਂ ਬਣਾ ਸਕਦੇ। ਇਹ ਸਿਰਫ਼ ਹੋਰ ਕਲਾਸਾਂ ਬਣਾਉਣ ਲਈ ਇੱਕ ਬੇਸ ਵਜੋਂ ਵਰਤੀ ਜਾਂਦੀ ਹੈ।`
      }
    ]
  },
  {
    unit: "UNIT-IV: Exception Handling & File Stream",
    questions: [
      {
        id: "U4-Q1",
        title: "What is Exception Handling? Explain try-throw-catch mechanism.",
        en: `**Exception Handling** is a mechanism to handle runtime errors (like divide-by-zero, out-of-bounds) gracefully, without crashing the program.

C++ uses 3 keywords:
1. **try:** The \`try\` block contains code that might generate an error.
2. **throw:** When an error occurs, the \`throw\` statement throws an exception (an object/value).
3. **catch:** The \`catch\` block catches the thrown exception and handles it.

**Turbo C++ Program:**
\`\`\`cpp
#include<iostream.h>
#include<conio.h>

void main() {
    int a, b;
    clrscr();
    cout << "Enter a and b: ";
    cin >> a >> b;
    
    try {
        if (b == 0) {
            throw "Divide by zero error!"; // throw
        }
        cout << "Result: " << (a / b) << endl;
    }
    catch (const char* msg) { // catch
        cout << "Exception caught: " << msg << endl;
    }
    
    cout << "Program continues smoothly...\\n";
    getch();
}
\`\`\``,
        pa: `**Exception Handling** ਇੱਕ ਤਰੀਕਾ ਹੈ ਜਿਸ ਨਾਲ ਅਸੀਂ ਪ੍ਰੋਗਰਾਮ ਚੱਲਦੇ ਸਮੇਂ ਆਉਣ ਵਾਲੀਆਂ ਐਰਰਜ਼ (errors) ਨੂੰ ਸੰਭਾਲਦੇ ਹਾਂ (ਜਿਵੇਂ 0 ਨਾਲ ਭਾਗ ਕਰਨਾ), ਤਾਂ ਜੋ ਪ੍ਰੋਗਰਾਮ ਕਰੈਸ਼ ਨਾ ਹੋਵੇ।

C++ 3 ਕੀਵਰਡ ਵਰਤਦਾ ਹੈ:
1. **try:** ਇਸ ਵਿੱਚ ਉਹ ਕੋਡ ਰੱਖਿਆ ਜਾਂਦਾ ਹੈ ਜਿਸ ਵਿੱਚ ਐਰਰ ਆ ਸਕਦੀ ਹੈ।
2. **throw:** ਜਦੋਂ ਐਰਰ ਆਉਂਦੀ ਹੈ, ਤਾਂ ਇਹ ਐਕਸੈਪਸ਼ਨ ਸੁੱਟਦਾ (throw ਕਰਦਾ) ਹੈ।
3. **catch:** ਇਹ throw ਕੀਤੀ ਐਕਸੈਪਸ਼ਨ ਨੂੰ ਫੜਦਾ (catch ਕਰਦਾ) ਹੈ ਅਤੇ ਠੀਕ ਕਰਦਾ ਹੈ।

*(ਪ੍ਰੋਗਰਾਮ ਲਈ English ਭਾਗ ਦੇਖੋ, Turbo C++ ਵਿੱਚ ਲਿਖਿਆ ਗਿਆ ਹੈ)*`
      },
      {
        id: "U4-Q2",
        title: "Explain Multiple Catch Handlers and Re-throwing.",
        en: `**Multiple Catch Handlers:**
A single \`try\` block can have multiple \`catch\` blocks to handle different types of exceptions (e.g., int, char, double). Specific handlers are written first, and a generic \`catch(...)\` can be used at the end to catch anything else.

**Re-throwing an Exception:**
A \`catch\` block can re-throw the same exception using simply \`throw;\`. It sends the exception to the next outer \`try-catch\` block. This is useful when the inner catch can only do partial cleanup and wants the outer level to fully handle it.

**Turbo C++ Code Example:**
\`\`\`cpp
try {
    throw 10;
}
catch (int e) {
    cout << "Caught int: " << e;
    throw; // Re-throws '10' to an outer try-catch block
}
\`\`\``,
        pa: `**Multiple Catch Handlers:**
ਇੱਕ \`try\` ਬਲਾਕ ਦੇ ਹੇਠਾਂ ਕਈ \`catch\` ਬਲਾਕ ਹੋ ਸਕਦੇ ਹਨ, ਜੋ ਵੱਖ-ਵੱਖ ਤਰ੍ਹਾਂ ਦੀਆਂ ਐਕਸੈਪਸ਼ਨਜ਼ (ਜਿਵੇਂ int, char) ਨੂੰ ਫੜਦੇ ਹਨ। ਸਭ ਤੋਂ ਅੰਤ ਵਿੱਚ \`catch(...)\` ਲਿਖਿਆ ਜਾਂਦਾ ਹੈ ਜੋ ਕਿਸੇ ਵੀ ਬਚੀ ਹੋਈ ਐਕਸੈਪਸ਼ਨ ਨੂੰ ਫੜ ਲੈਂਦਾ ਹੈ।

**Re-throwing an Exception:**
ਇੱਕ \`catch\` ਬਲਾਕ ਐਕਸੈਪਸ਼ਨ ਨੂੰ ਮੁੜ ਤੋਂ ਬਾਹਰ ਵਾਲੇ (outer) ਟਰਾਈ-ਕੈਚ ਬਲਾਕ ਵੱਲ ਭੇਜ ਸਕਦਾ ਹੈ। ਇਸ ਲਈ ਸਿਰਫ਼ \`throw;\` ਲਿਖਿਆ ਜਾਂਦਾ ਹੈ। ਇਹ ਉਦੋਂ ਕੰਮ ਆਉਂਦਾ ਹੈ ਜਦੋਂ ਅੰਦਰੂਨੀ ਕੈਚ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸਮੱਸਿਆ ਹੱਲ ਨਹੀਂ ਕਰ ਸਕਦਾ।`
      },
      {
        id: "U4-Q3",
        title: "Explain File Stream Classes and File Modes.",
        en: `C++ uses the \`<fstream.h>\` header for file operations. The main stream classes are:
1. **ifstream:** Used to read data *from* a file (Input).
2. **ofstream:** Used to write data *to* a file (Output).
3. **fstream:** Used for both reading and writing.

**File Opening Modes (Bit-flags in \`ios\`):**
| Mode | Purpose |
|---|---|
| \`ios::in\` | Open for reading (default for ifstream). |
| \`ios::out\` | Open for writing (truncates file, default for ofstream). |
| \`ios::app\` | Append data at the end of the file. |
| \`ios::binary\` | Open the file in binary mode (raw bytes). |
| \`ios::trunc\` | Erase existing contents of the file. |

Modes can be combined using the bitwise OR operator \`|\`.
Example: \`fstream f("data.dat", ios::in | ios::out | ios::binary);\` `,
        pa: `C++ ਵਿੱਚ ਫਾਈਲਾਂ ਨਾਲ ਕੰਮ ਕਰਨ ਲਈ \`<fstream.h>\` ਦੀ ਵਰਤੋਂ ਕੀਤੀ ਜਾਂਦੀ ਹੈ। ਮੁੱਖ ਕਲਾਸਾਂ ਇਹ ਹਨ:
1. **ifstream:** ਫਾਈਲ ਵਿੱਚੋਂ ਪੜ੍ਹਨ (Read) ਲਈ।
2. **ofstream:** ਫਾਈਲ ਵਿੱਚ ਲਿਖਣ (Write) ਲਈ।
3. **fstream:** ਪੜ੍ਹਨ ਅਤੇ ਲਿਖਣ ਦੋਵਾਂ ਲਈ।

**File Opening Modes (ਫਾਈਲ ਖੋਲ੍ਹਣ ਦੇ ਤਰੀਕੇ):**
| ਮੋਡ (Mode) | ਮਕਸਦ (Purpose) |
|---|---|
| \`ios::in\` | ਫਾਈਲ ਪੜ੍ਹਨ ਲਈ। |
| \`ios::out\` | ਫਾਈਲ ਵਿੱਚ ਲਿਖਣ ਲਈ (ਪੁਰਾਣਾ ਡਾਟਾ ਮਿਟਾ ਦਿੰਦਾ ਹੈ)। |
| \`ios::app\` | ਫਾਈਲ ਦੇ ਅਖੀਰ ਵਿੱਚ ਨਵਾਂ ਡਾਟਾ ਜੋੜਨ ਲਈ। |
| \`ios::binary\` | ਫਾਈਲ ਨੂੰ ਬਾਈਨਰੀ ਰੂਪ ਵਿੱਚ ਖੋਲ੍ਹਣ ਲਈ। |

ਇਹਨਾਂ ਮੋਡਜ਼ ਨੂੰ \`|\` ਨਾਲ ਇਕੱਠੇ ਜੋੜਿਆ ਜਾ ਸਕਦਾ ਹੈ।
ਜਿਵੇਂ: \`fstream f("data.dat", ios::in | ios::out | ios::binary);\` `
      },
      {
        id: "U4-Q4",
        title: "Why are Binary Files needed? Write a program to write a Class Object to a binary file.",
        en: `**Why Binary Files?**
1. **Speed:** Faster to read/write because data is saved in raw bytes, needing no text parsing.
2. **Size:** Takes up less space on the disk.
3. **Accuracy:** No loss of precision for floating-point numbers.
4. **Direct Objects:** We can write entire class objects or structures directly into the file in one go using \`read()\` and \`write()\`.

**Turbo C++ Program:**
\`\`\`cpp
#include<iostream.h>
#include<fstream.h>
#include<conio.h>

class Student {
    int roll;
    float marks;
public:
    void getData() {
        cout << "Enter Roll and Marks: ";
        cin >> roll >> marks;
    }
    void showData() {
        cout << "Roll: " << roll << " Marks: " << marks << endl;
    }
};

void main() {
    clrscr();
    Student s;
    
    // Writing to binary file
    ofstream fout("stu.dat", ios::binary | ios::app);
    s.getData();
    fout.write((char*)&s, sizeof(s)); // write object
    fout.close();
    
    cout << "\\nReading from file:\\n";
    // Reading from binary file
    ifstream fin("stu.dat", ios::binary);
    while (fin.read((char*)&s, sizeof(s))) { // read object
        s.showData();
    }
    fin.close();
    
    getch();
}
\`\`\``,
        pa: `**Binary Files ਦੀ ਜ਼ਰੂਰਤ ਕਿਉਂ ਹੈ?**
1. **ਸਪੀਡ (Speed):** ਇਹ ਟੈਕਸਟ ਫਾਈਲਾਂ ਨਾਲੋਂ ਬਹੁਤ ਤੇਜ਼ ਪੜ੍ਹੀਆਂ/ਲਿਖੀਆਂ ਜਾਂਦੀਆਂ ਹਨ ਕਿਉਂਕਿ ਡਾਟਾ ਕੱਚੇ (raw) ਬਾਈਟਸ ਵਿੱਚ ਹੁੰਦਾ ਹੈ।
2. **ਸਾਈਜ਼ (Size):** ਇਹ ਡਿਸਕ 'ਤੇ ਘੱਟ ਜਗ੍ਹਾ ਲੈਂਦੀਆਂ ਹਨ।
3. **ਸਿੱਧਾ ਆਬਜੈਕਟ (Direct Objects):** ਅਸੀਂ ਪੂਰੇ ਕਲਾਸ ਆਬਜੈਕਟ ਨੂੰ ਇੱਕੋ ਵਾਰ ਫਾਈਲ ਵਿੱਚ \`read()\` ਅਤੇ \`write()\` ਫੰਕਸ਼ਨ ਰਾਹੀਂ ਲਿਖ/ਪੜ੍ਹ ਸਕਦੇ ਹਾਂ।

*(ਕਲਾਸ ਆਬਜੈਕਟ ਨੂੰ ਫਾਈਲ ਵਿੱਚ ਲਿਖਣ ਦਾ Turbo C++ ਪ੍ਰੋਗਰਾਮ English ਭਾਗ ਵਿੱਚ ਦੇਖੋ)*`
      },
      {
        id: "U4-Q5",
        title: "Explain Random Access in Files using file pointers (seekg, seekp).",
        en: `Sequential access means reading a file line-by-line from the start. **Random Access** means jumping directly to any specific location in a file.

C++ provides two file pointers for this:
1. **get pointer (for reading):** Managed by \`seekg()\` and \`tellg()\`.
2. **put pointer (for writing):** Managed by \`seekp()\` and \`tellp()\`.

- **tellg() / tellp():** Returns the current byte position of the pointer.
- **seekg(offset, direction):** Moves the get pointer. Directions can be \`ios::beg\` (beginning), \`ios::cur\` (current), or \`ios::end\` (end of file).

**Example of jumping to the 3rd record in a binary file:**
\`\`\`cpp
fstream f("data.dat", ios::in | ios::binary);
// Jump to the 3rd record (skipping first 2)
f.seekg(2 * sizeof(Student), ios::beg); 
f.read((char*)&s, sizeof(s)); // Read the 3rd record directly
\`\`\``,
        pa: `**Random Access** ਦਾ ਮਤਲਬ ਹੈ ਫਾਈਲ ਦੇ ਕਿਸੇ ਵੀ ਹਿੱਸੇ ਵਿੱਚ ਸਿੱਧਾ (Direct) ਪਹੁੰਚਣਾ। (Sequential access ਵਿੱਚ ਸਾਨੂੰ ਸ਼ੁਰੂ ਤੋਂ ਲਾਈਨ-ਦਰ-ਲਾਈਨ ਪੜ੍ਹਨਾ ਪੈਂਦਾ ਹੈ)।

C++ ਵਿੱਚ ਇਸ ਲਈ 2 ਪੁਆਇੰਟਰ (pointers) ਹੁੰਦੇ ਹਨ:
1. **get pointer (ਪੜ੍ਹਨ ਲਈ):** ਇਸਨੂੰ \`seekg()\` ਅਤੇ \`tellg()\` ਫੰਕਸ਼ਨ ਕੰਟਰੋਲ ਕਰਦੇ ਹਨ।
2. **put pointer (ਲਿਖਣ ਲਈ):** ਇਸਨੂੰ \`seekp()\` ਅਤੇ \`tellp()\` ਕੰਟਰੋਲ ਕਰਦੇ ਹਨ।

- **tellg()** ਮੌਜੂਦਾ ਜਗ੍ਹਾ (position) ਦੱਸਦਾ ਹੈ।
- **seekg()** ਪੁਆਇੰਟਰ ਨੂੰ ਅੱਗੇ-ਪਿੱਛੇ ਕਰਨ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ (ਜਿਵੇਂ \`ios::beg\` ਸ਼ੁਰੂ ਤੋਂ, ਜਾਂ \`ios::end\` ਅਖੀਰ ਤੋਂ)।`
      }
    ]
  }
];
