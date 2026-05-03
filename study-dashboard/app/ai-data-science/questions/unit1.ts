export const unit1 = {
  unit: "UNIT I — INTRODUCTION TO AI & AGENTS",
  questions: [
    {
      id: "Q1",
      title: "Define Artificial Intelligence. Discuss its types with examples.",
      en: `**Artificial Intelligence (AI)** is the simulation of human intelligence processes by machines, especially computer systems. These processes include learning, reasoning, problem-solving, perception, and language understanding.

**Types of AI (Based on Capabilities):**
1. **Narrow AI (Weak AI):** AI designed and trained for a specific task. It cannot perform outside its defined limitations. 
   - *Example:* Apple Siri, Google Assistant, Self-driving cars, Chess-playing programs.
2. **General AI (Strong AI):** AI that can understand, learn, and apply intelligence across a broad range of tasks, at a level equal to a human. 
   - *Example:* Currently theoretical. Does not exist yet.
3. **Super AI:** AI that surpasses human intelligence and ability. 
   - *Example:* Theoretical concept (often seen in sci-fi movies).

**Types of AI (Based on Functionality):**
1. **Reactive Machines:** The most basic type of AI. They do not store memories or use past experiences to determine future actions. They only react to currently existing situations.
   - *Example:* IBM's Deep Blue (chess playing computer).
2. **Limited Memory:** Can look into the past and use historical data/memories to make decisions.
   - *Example:* Self-driving cars (they observe other cars' speed and direction over time).
3. **Theory of Mind:** AI that can understand human emotions, beliefs, and thoughts, and can interact socially. (Still in research phase).
4. **Self-Aware AI:** The future of AI, where machines have their own consciousness, self-awareness, and sentiments. (Theoretical).`,
      pa: `**ਆਰਟੀਫੀਸ਼ੀਅਲ ਇੰਟੈਲੀਜੈਂਸ (AI)** ਮਸ਼ੀਨਾਂ (ਖਾਸ ਕਰਕੇ ਕੰਪਿਊਟਰ ਸਿਸਟਮਾਂ) ਦੁਆਰਾ ਮਨੁੱਖੀ ਬੁੱਧੀ ਦੀ ਨਕਲ ਕਰਨਾ ਹੈ। ਇਸ ਵਿੱਚ ਸਿੱਖਣਾ (learning), ਤਰਕ ਕਰਨਾ (reasoning), ਅਤੇ ਸਮੱਸਿਆਵਾਂ ਹੱਲ ਕਰਨਾ ਸ਼ਾਮਲ ਹੈ।

**AI ਦੀਆਂ ਕਿਸਮਾਂ (ਸਮਰੱਥਾ ਦੇ ਆਧਾਰ 'ਤੇ):**
1. **Narrow AI (ਕਮਜ਼ੋਰ AI):** ਇਹ AI ਸਿਰਫ਼ ਇੱਕ ਖਾਸ ਕੰਮ ਕਰਨ ਲਈ ਬਣਾਈ ਜਾਂਦੀ ਹੈ। ਇਹ ਆਪਣੀ ਹੱਦ ਤੋਂ ਬਾਹਰ ਕੰਮ ਨਹੀਂ ਕਰ ਸਕਦੀ।
   - *ਉਦਾਹਰਣ:* Apple Siri, ਗੂਗਲ ਅਸਿਸਟੈਂਟ (Google Assistant), ਸੈਲਫ-ਡਰਾਈਵਿੰਗ ਕਾਰਾਂ।
2. **General AI (ਮਜ਼ਬੂਤ AI):** ਅਜਿਹੀ AI ਜੋ ਮਨੁੱਖ ਵਾਂਗ ਹਰ ਤਰ੍ਹਾਂ ਦੇ ਕੰਮ ਸਮਝਣ ਅਤੇ ਸਿੱਖਣ ਦੇ ਯੋਗ ਹੋਵੇਗੀ।
   - *ਉਦਾਹਰਣ:* ਇਹ ਅਜੇ ਹਕੀਕਤ ਵਿੱਚ ਮੌਜੂਦ ਨਹੀਂ ਹੈ।
3. **Super AI:** ਇਹ AI ਮਨੁੱਖੀ ਬੁੱਧੀ ਅਤੇ ਸਮਰੱਥਾ ਨੂੰ ਵੀ ਪਾਰ ਕਰ ਜਾਵੇਗੀ। (ਸਿਰਫ਼ ਫਿਲਮਾਂ ਵਿੱਚ)।

**AI ਦੀਆਂ ਕਿਸਮਾਂ (ਕੰਮ ਕਰਨ ਦੇ ਆਧਾਰ 'ਤੇ):**
1. **Reactive Machines:** ਸਭ ਤੋਂ ਬੁਨਿਆਦੀ AI। ਇਹ ਪੁਰਾਣੀਆਂ ਯਾਦਾਂ (memories) ਸੇਵ ਨਹੀਂ ਕਰਦੀਆਂ। ਇਹ ਸਿਰਫ਼ ਮੌਜੂਦਾ ਸਥਿਤੀ 'ਤੇ ਪ੍ਰਤੀਕਿਰਿਆ (react) ਕਰਦੀਆਂ ਹਨ।
   - *ਉਦਾਹਰਣ:* IBM ਦਾ Deep Blue (ਸ਼ਤਰੰਜ ਖੇਡਣ ਵਾਲਾ ਕੰਪਿਊਟਰ)।
2. **Limited Memory:** ਇਹ ਪਿਛਲੇ ਡਾਟਾ/ਯਾਦਾਂ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਫੈਸਲੇ ਲੈ ਸਕਦੀ ਹੈ।
   - *ਉਦਾਹਰਣ:* ਸੈਲਫ-ਡਰਾਈਵਿੰਗ ਕਾਰਾਂ (ਜੋ ਹੋਰ ਕਾਰਾਂ ਦੀ ਸਪੀਡ ਦੇਖ ਕੇ ਫੈਸਲੇ ਲੈਂਦੀਆਂ ਹਨ)।
3. **Theory of Mind:** ਅਜਿਹੀ AI ਜੋ ਮਨੁੱਖੀ ਭਾਵਨਾਵਾਂ ਅਤੇ ਵਿਚਾਰਾਂ ਨੂੰ ਸਮਝ ਸਕੇਗੀ। (ਅਜੇ ਰਿਸਰਚ ਚੱਲ ਰਹੀ ਹੈ)।
4. **Self-Aware AI:** ਭਵਿੱਖ ਦੀ AI ਜਿਸ ਵਿੱਚ ਆਪਣੀ ਚੇਤਨਾ (consciousness) ਅਤੇ ਸਮਝ ਹੋਵੇਗੀ।`
    },
    {
      id: "Q2",
      title: "Write short notes on the key technologies of AI (ML, DL, NLP, CV, Robotics).",
      en: `The key technologies that power modern Artificial Intelligence are:

1. **Machine Learning (ML):** A subset of AI that allows machines to learn from data and improve their performance without being explicitly programmed. Instead of writing rules, we provide data and let the algorithm find patterns.
2. **Deep Learning (DL):** A specialized subset of Machine Learning based on Artificial Neural Networks with multiple layers (deep networks). It mimics the human brain to process data and create patterns for use in decision making. Used in voice recognition and image classification.
3. **Natural Language Processing (NLP):** Gives machines the ability to read, understand, and derive meaning from human languages. It bridges the gap between human communication and computer understanding.
   - *Example:* Chatbots, Google Translate, Grammar checkers.
4. **Computer Vision (CV):** A field of AI that enables computers and systems to derive meaningful information from digital images, videos, and other visual inputs, and take actions based on that information. 
   - *Example:* Facial recognition, self-driving car cameras.
5. **Robotics:** A branch of engineering and AI that involves the design, construction, operation, and use of robots. AI-powered robots can perform complex tasks autonomously by interpreting their environment.
   - *Example:* Industrial robotic arms, autonomous drones.`,
      pa: `ਆਧੁਨਿਕ AI ਨੂੰ ਚਲਾਉਣ ਵਾਲੀਆਂ ਮੁੱਖ ਤਕਨੀਕਾਂ (Technologies) ਹੇਠ ਲਿਖੀਆਂ ਹਨ:

1. **Machine Learning (ML):** ਇਹ AI ਦਾ ਇੱਕ ਹਿੱਸਾ ਹੈ ਜੋ ਮਸ਼ੀਨਾਂ ਨੂੰ ਡਾਟਾ ਤੋਂ ਸਿੱਖਣ ਅਤੇ ਬਿਨਾਂ ਪ੍ਰੋਗਰਾਮਿੰਗ ਦੇ ਆਪਣੇ ਆਪ ਸੁਧਾਰ ਕਰਨ ਦੀ ਆਗਿਆ ਦਿੰਦਾ ਹੈ। ਨਿਯਮ ਲਿਖਣ ਦੀ ਬਜਾਏ, ਅਸੀਂ ਡਾਟਾ ਦਿੰਦੇ ਹਾਂ ਅਤੇ ਐਲਗੋਰਿਦਮ ਪੈਟਰਨ ਲੱਭਦਾ ਹੈ।
2. **Deep Learning (DL):** ਇਹ ਮਸ਼ੀਨ ਲਰਨਿੰਗ ਦਾ ਇੱਕ ਉੱਨਤ ਰੂਪ ਹੈ ਜੋ ਮਨੁੱਖੀ ਦਿਮਾਗ ਵਾਂਗ 'ਨਿਊਰਲ ਨੈੱਟਵਰਕ' (Neural Networks) ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ। ਇਹ ਆਵਾਜ਼ ਪਛਾਣਨ ਅਤੇ ਚਿੱਤਰਾਂ ਨੂੰ ਸਮਝਣ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।
3. **Natural Language Processing (NLP):** ਇਹ ਕੰਪਿਊਟਰਾਂ ਨੂੰ ਮਨੁੱਖੀ ਭਾਸ਼ਾਵਾਂ (ਜਿਵੇਂ ਅੰਗਰੇਜ਼ੀ, ਪੰਜਾਬੀ) ਨੂੰ ਪੜ੍ਹਨ, ਸਮਝਣ ਅਤੇ ਜਵਾਬ ਦੇਣ ਦੇ ਯੋਗ ਬਣਾਉਂਦਾ ਹੈ।
   - *ਉਦਾਹਰਣ:* ਚੈਟਬੋਟਸ (Chatbots), ਗੂਗਲ ਟ੍ਰਾਂਸਲੇਟ (Google Translate)।
4. **Computer Vision (CV):** ਇਹ ਕੰਪਿਊਟਰਾਂ ਨੂੰ ਡਿਜੀਟਲ ਫੋਟੋਆਂ ਅਤੇ ਵੀਡੀਓਜ਼ ਦੇਖ ਕੇ ਉਨ੍ਹਾਂ ਵਿੱਚੋਂ ਜਾਣਕਾਰੀ ਕੱਢਣ ਦੀ ਸਮਰੱਥਾ ਦਿੰਦਾ ਹੈ।
   - *ਉਦਾਹਰਣ:* ਚਿਹਰਾ ਪਛਾਣਨ ਵਾਲੀ ਤਕਨੀਕ (Facial Recognition)।
5. **Robotics:** ਇਹ ਇੰਜੀਨੀਅਰਿੰਗ ਅਤੇ AI ਦੀ ਇੱਕ ਸ਼ਾਖਾ ਹੈ ਜੋ ਰੋਬੋਟ ਬਣਾਉਣ ਨਾਲ ਸੰਬੰਧਿਤ ਹੈ। AI ਵਾਲੇ ਰੋਬੋਟ ਆਪਣੇ ਆਲੇ-ਦੁਆਲੇ ਨੂੰ ਸਮਝ ਕੇ ਆਪਣੇ ਆਪ ਕੰਮ ਕਰ ਸਕਦੇ ਹਨ।`
    },
    {
      id: "Q3",
      title: "Explain the structure of an intelligent agent and its environments. What is PEAS?",
      en: `**Intelligent Agent:** An agent is anything that can perceive its environment through **sensors** and act upon that environment through **actuators**. 
- *Human Agent:* Sensors (eyes, ears), Actuators (hands, legs, mouth).
- *Robotic Agent:* Sensors (cameras, infrared range finders), Actuators (motors).

**PEAS Description:**
When designing an AI agent, we must specify the task environment using PEAS:
- **P (Performance Measure):** The criteria that determines how successful the agent is.
- **E (Environment):** The world/setting in which the agent operates.
- **A (Actuators):** The physical components the agent uses to perform actions.
- **S (Sensors):** The components the agent uses to perceive the environment.
*Example for an Automated Taxi:*
- **P:** Safe, fast, legal, comfortable trip, maximize profits.
- **E:** Roads, other traffic, pedestrians, customers.
- **A:** Steering wheel, accelerator, brake, signal, horn.
- **S:** Cameras, sonar, speedometer, GPS, keyboard.

**Structure of Agents (5 Architectures):**
1. **Simple Reflex Agents:** Act only on current perception. Ignore the rest of percept history. (Condition-Action Rule).
2. **Model-Based Reflex Agents:** Maintain internal state to track the world unseen. Can handle partially observable environments.
3. **Goal-Based Agents:** Have a specific goal. They plan their actions to reach that goal.
4. **Utility-Based Agents:** Try to maximize "happiness" or efficiency. If multiple paths reach the goal, they pick the best/cheapest one.
5. **Learning Agents:** Can learn from past experiences and improve their performance over time.`,
      pa: `**ਇੰਟੈਲੀਜੈਂਟ ਏਜੰਟ (Intelligent Agent):** ਏਜੰਟ ਕੋਈ ਵੀ ਅਜਿਹੀ ਚੀਜ਼ ਹੈ ਜੋ **Sensors** (ਸੈਂਸਰਾਂ) ਰਾਹੀਂ ਆਪਣੇ ਆਲੇ-ਦੁਆਲੇ (environment) ਨੂੰ ਸਮਝਦੀ ਹੈ ਅਤੇ **Actuators** ਰਾਹੀਂ ਉਸ 'ਤੇ ਐਕਸ਼ਨ (ਕੰਮ) ਕਰਦੀ ਹੈ।
- *ਰੋਬੋਟਿਕ ਏਜੰਟ:* ਸੈਂਸਰ (ਕੈਮਰੇ), ਐਕਚੁਏਟਰ (ਮੋਟਰਾਂ)।

**PEAS ਕੀ ਹੈ?**
ਜਦੋਂ ਅਸੀਂ ਕੋਈ AI ਏਜੰਟ ਬਣਾਉਂਦੇ ਹਾਂ, ਤਾਂ ਅਸੀਂ PEAS ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਾਂ:
- **P (Performance Measure):** ਇਹ ਚੈੱਕ ਕਰਨਾ ਕਿ ਏਜੰਟ ਕਿੰਨਾ ਸਫਲ ਹੈ।
- **E (Environment):** ਉਹ ਮਾਹੌਲ ਜਿੱਥੇ ਏਜੰਟ ਕੰਮ ਕਰਦਾ ਹੈ।
- **A (Actuators):** ਉਹ ਹਿੱਸੇ ਜਿਨ੍ਹਾਂ ਨਾਲ ਏਜੰਟ ਐਕਸ਼ਨ ਕਰਦਾ ਹੈ।
- **S (Sensors):** ਉਹ ਹਿੱਸੇ ਜਿਨ੍ਹਾਂ ਨਾਲ ਏਜੰਟ ਡਾਟਾ ਪ੍ਰਾਪਤ ਕਰਦਾ ਹੈ।
*ਉਦਾਹਰਣ (ਸੈਲਫ-ਡਰਾਈਵਿੰਗ ਟੈਕਸੀ ਲਈ):* P = ਸੁਰੱਖਿਅਤ ਸਫ਼ਰ, E = ਸੜਕਾਂ/ਟ੍ਰੈਫਿਕ, A = ਸਟੀਅਰਿੰਗ/ਬ੍ਰੇਕ, S = ਕੈਮਰਾ/GPS।

**ਏਜੰਟਾਂ ਦੀ ਬਣਤਰ (5 ਕਿਸਮਾਂ):**
1. **Simple Reflex Agents:** ਸਿਰਫ਼ ਮੌਜੂਦਾ ਸਥਿਤੀ ਦੇਖ ਕੇ ਤੁਰੰਤ ਫੈਸਲਾ ਲੈਂਦੇ ਹਨ। ਪਿਛਲਾ ਕੁਝ ਯਾਦ ਨਹੀਂ ਰੱਖਦੇ।
2. **Model-Based Reflex Agents:** ਆਪਣੇ ਅੰਦਰ ਦੁਨੀਆ ਦਾ ਇੱਕ ਮਾਡਲ ਬਣਾਉਂਦੇ ਹਨ ਤਾਂ ਜੋ ਪਿਛਲੀ ਜਾਣਕਾਰੀ ਯਾਦ ਰੱਖ ਸਕਣ।
3. **Goal-Based Agents:** ਇਹਨਾਂ ਦਾ ਇੱਕ ਟੀਚਾ (Goal) ਹੁੰਦਾ ਹੈ, ਅਤੇ ਇਹ ਉਸ ਟੀਚੇ ਤੱਕ ਪਹੁੰਚਣ ਲਈ ਪਲੈਨਿੰਗ ਕਰਦੇ ਹਨ।
4. **Utility-Based Agents:** ਇਹ ਸਿਰਫ਼ ਟੀਚਾ ਹੀ ਪੂਰਾ ਨਹੀਂ ਕਰਦੇ, ਸਗੋਂ ਸਭ ਤੋਂ ਵਧੀਆ, ਸਸਤਾ ਅਤੇ ਆਸਾਨ ਰਸਤਾ ਚੁਣਦੇ ਹਨ।
5. **Learning Agents:** ਇਹ ਆਪਣੀਆਂ ਗਲਤੀਆਂ ਅਤੇ ਪਿਛਲੇ ਤਜ਼ਰਬਿਆਂ ਤੋਂ ਸਿੱਖਦੇ ਹਨ ਅਤੇ ਖੁਦ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਂਦੇ ਹਨ।`
    },
    {
      id: "Q4",
      title: "Discuss the applications of AI in Healthcare, Education, and Agriculture.",
      en: `**1. AI in Healthcare:**
- **Disease Diagnosis:** AI algorithms (like Deep Learning) can analyze medical images (X-rays, MRIs) to detect diseases like cancer faster and more accurately than humans.
- **Drug Discovery:** AI speeds up the process of discovering new medicines by predicting how different chemical compounds will interact.
- **Virtual Health Assistants:** Chatbots help patients schedule appointments and get answers to basic medical questions 24/7.
- **Personalized Treatment:** AI analyzes a patient's genetic profile and medical history to create customized treatment plans.

**2. AI in Education:**
- **Personalized Learning:** AI adapts the learning material based on the student's learning speed and weak areas (e.g., smart tutoring systems).
- **Automated Grading:** AI can automatically check multiple-choice questions and even grade essays, saving teachers' time.
- **Smart Content Creation:** Generating digital lessons, summaries, and practice tests automatically.
- **24/7 Student Support:** AI chatbots provide round-the-clock help to students for administrative and academic queries.

**3. AI in Agriculture:**
- **Crop and Soil Monitoring:** AI uses computer vision and drones to monitor crop health and analyze soil quality.
- **Predictive Analytics:** Predicting weather patterns, pest attacks, and the best time to sow seeds or harvest crops.
- **Agricultural Robotics:** AI-powered robots and drones can pick fruits, spray pesticides precisely, and remove weeds automatically.
- **Precision Farming:** Using data to optimize water, fertilizer, and pesticide usage, increasing yield while saving money.`,
      pa: `**1. ਹੈਲਥਕੇਅਰ (ਸਿਹਤ ਸੰਭਾਲ) ਵਿੱਚ AI:**
- **ਬਿਮਾਰੀਆਂ ਦੀ ਪਛਾਣ:** AI ਕੰਪਿਊਟਰ ਐਕਸ-ਰੇ (X-rays) ਅਤੇ MRI ਸਕੈਨ ਦੇਖ ਕੇ ਕੈਂਸਰ ਵਰਗੀਆਂ ਬਿਮਾਰੀਆਂ ਦੀ ਪਛਾਣ ਡਾਕਟਰਾਂ ਤੋਂ ਵੀ ਤੇਜ਼ੀ ਨਾਲ ਕਰ ਸਕਦੇ ਹਨ।
- **ਨਵੀਆਂ ਦਵਾਈਆਂ ਦੀ ਖੋਜ:** AI ਦੀ ਵਰਤੋਂ ਨਾਲ ਨਵੀਆਂ ਦਵਾਈਆਂ ਬਣਾਉਣ ਦੀ ਪ੍ਰਕਿਰਿਆ ਬਹੁਤ ਤੇਜ਼ ਹੋ ਗਈ ਹੈ।
- **ਵਰਚੁਅਲ ਅਸਿਸਟੈਂਟ:** AI ਚੈਟਬੋਟਸ ਮਰੀਜ਼ਾਂ ਨੂੰ 24/7 ਮੁੱਢਲੀ ਡਾਕਟਰੀ ਸਲਾਹ ਦਿੰਦੇ ਹਨ ਅਤੇ ਅਪੁਆਇੰਟਮੈਂਟ ਬੁੱਕ ਕਰਦੇ ਹਨ।

**2. ਸਿੱਖਿਆ (Education) ਵਿੱਚ AI:**
- **ਵਿਅਕਤੀਗਤ ਸਿੱਖਿਆ (Personalized Learning):** AI ਹਰ ਵਿਦਿਆਰਥੀ ਦੇ ਸਿੱਖਣ ਦੀ ਸਪੀਡ ਦੇ ਹਿਸਾਬ ਨਾਲ ਸਟੱਡੀ ਮਟੀਰੀਅਲ ਤਿਆਰ ਕਰਦੀ ਹੈ।
- **ਆਟੋਮੈਟਿਕ ਗ੍ਰੇਡਿੰਗ:** AI ਅਧਿਆਪਕਾਂ ਦਾ ਸਮਾਂ ਬਚਾਉਣ ਲਈ ਟੈਸਟ ਅਤੇ ਅਸਾਈਨਮੈਂਟਸ ਨੂੰ ਆਪਣੇ ਆਪ ਚੈੱਕ ਕਰ ਸਕਦੀ ਹੈ।
- **24/7 ਸਪੋਰਟ:** AI ਬੋਟਸ ਵਿਦਿਆਰਥੀਆਂ ਦੇ ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ ਕਿਸੇ ਵੀ ਸਮੇਂ ਦੇ ਸਕਦੇ ਹਨ।

**3. ਖੇਤੀਬਾੜੀ (Agriculture) ਵਿੱਚ AI:**
- **ਫਸਲ ਅਤੇ ਮਿੱਟੀ ਦੀ ਨਿਗਰਾਨੀ:** AI ਕੈਮਰੇ ਅਤੇ ਡਰੋਨ ਫਸਲਾਂ ਦੀ ਸਿਹਤ ਅਤੇ ਮਿੱਟੀ ਦੀ ਗੁਣਵੱਤਾ ਦੀ ਨਿਗਰਾਨੀ ਕਰਦੇ ਹਨ।
- **ਮੌਸਮ ਅਤੇ ਬਿਮਾਰੀ ਦੀ ਭਵਿੱਖਬਾਣੀ:** ਮੌਸਮ ਅਤੇ ਕੀੜਿਆਂ ਦੇ ਹਮਲੇ ਦੀ ਪਹਿਲਾਂ ਹੀ ਭਵਿੱਖਬਾਣੀ ਕਰਨਾ ਤਾਂ ਜੋ ਕਿਸਾਨ ਬਚਾਅ ਕਰ ਸਕਣ।
- **ਐਗਰੀਕਲਚਰ ਰੋਬੋਟਿਕਸ:** ਰੋਬੋਟ ਫਲਾਂ ਨੂੰ ਤੋੜਨ, ਕੀਟਨਾਸ਼ਕਾਂ ਦਾ ਛਿੜਕਾਅ ਕਰਨ ਅਤੇ ਨਦੀਨਾਂ (weeds) ਨੂੰ ਹਟਾਉਣ ਦਾ ਕੰਮ ਆਪਣੇ ਆਪ ਕਰਦੇ ਹਨ।`
    },
    {
      id: "Q5",
      title: "Explain the ethical issues in AI and discuss the future of AI.",
      en: `**Ethical Issues in AI:**
1. **Bias and Discrimination:** AI systems learn from historical data. If the data is biased (e.g., racist or sexist), the AI's decisions will also be biased. (e.g., AI hiring tools preferring male candidates).
2. **Privacy Concerns:** AI algorithms require massive amounts of personal data to train. This raises serious concerns about surveillance, data tracking, and loss of user privacy.
3. **Job Displacement:** As AI automates routine tasks, there is a major fear of job losses in sectors like manufacturing, customer service, and data entry.
4. **Deepfakes and Misinformation:** AI can generate highly realistic fake videos and audio (Deepfakes), which can be used to spread fake news, commit fraud, or ruin reputations.
5. **Accountability (Who is responsible?):** If an AI system makes a mistake (e.g., a self-driving car causes an accident), it is difficult to decide who is legally and morally responsible—the programmer, the user, or the AI?
6. **Lethal Autonomous Weapons:** The development of AI-powered weapons that can select and engage targets without human intervention raises severe moral questions.

**The Future of AI:**
The future will likely see a shift from Narrow AI to General AI (AGI), where machines can perform any intellectual task a human can. 
- **Human-AI Collaboration:** AI will augment human capabilities rather than replace them entirely, leading to hyper-productivity.
- **Advanced Healthcare:** Personalized medicine, curing currently incurable diseases through AI-driven research.
- **Regulation:** Governments will implement strict AI laws to control its ethical use, ensure safety, and prevent misuse.`,
      pa: `**AI ਵਿੱਚ ਨੈਤਿਕ ਮੁੱਦੇ (Ethical Issues):**
1. **ਪੱਖਪਾਤ (Bias):** AI ਪੁਰਾਣੇ ਡਾਟੇ ਤੋਂ ਸਿੱਖਦੀ ਹੈ। ਜੇਕਰ ਡਾਟਾ ਵਿੱਚ ਭੇਦਭਾਵ ਹੈ, ਤਾਂ AI ਦੇ ਫੈਸਲੇ ਵੀ ਪੱਖਪਾਤੀ ਹੋਣਗੇ (ਜਿਵੇਂ ਨੌਕਰੀ ਦੇਣ ਵਾਲਾ AI ਸਾਫਟਵੇਅਰ)।
2. **ਪ੍ਰਾਈਵੇਸੀ (Privacy):** AI ਨੂੰ ਬਹੁਤ ਸਾਰੇ ਨਿੱਜੀ ਡਾਟੇ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ। ਇਸ ਨਾਲ ਲੋਕਾਂ ਦੀ ਜਾਸੂਸੀ ਅਤੇ ਨਿੱਜਤਾ (Privacy) ਦਾ ਖਤਰਾ ਵੱਧ ਜਾਂਦਾ ਹੈ।
3. **ਨੌਕਰੀਆਂ ਦਾ ਖਤਰਾ:** AI ਕਈ ਕੰਮਾਂ ਨੂੰ ਆਟੋਮੈਟਿਕ ਕਰ ਰਹੀ ਹੈ, ਜਿਸ ਕਾਰਨ ਫੈਕਟਰੀਆਂ, ਕਸਟਮਰ ਕੇਅਰ ਅਤੇ ਡਾਟਾ ਐਂਟਰੀ ਵਰਗੇ ਖੇਤਰਾਂ ਵਿੱਚ ਨੌਕਰੀਆਂ ਖਤਮ ਹੋਣ ਦਾ ਡਰ ਹੈ।
4. **ਡੀਪਫੇਕ ਅਤੇ ਝੂਠੀ ਖ਼ਬਰ (Deepfakes):** AI ਨਕਲੀ ਆਵਾਜ਼ਾਂ ਅਤੇ ਵੀਡੀਓ ਬਣਾ ਸਕਦੀ ਹੈ, ਜਿਸਦੀ ਵਰਤੋਂ ਝੂਠੀਆਂ ਖ਼ਬਰਾਂ ਫੈਲਾਉਣ ਜਾਂ ਧੋਖਾਧੜੀ ਲਈ ਕੀਤੀ ਜਾ ਸਕਦੀ ਹੈ।
5. **ਜ਼ਿੰਮੇਵਾਰੀ ਕੌਣ ਲਵੇਗਾ (Accountability):** ਜੇਕਰ AI ਕੋਲੋਂ ਕੋਈ ਵੱਡੀ ਗਲਤੀ ਹੁੰਦੀ ਹੈ (ਜਿਵੇਂ ਸੈਲਫ-ਡਰਾਈਵਿੰਗ ਕਾਰ ਦਾ ਐਕਸੀਡੈਂਟ), ਤਾਂ ਇਸਦੀ ਜ਼ਿੰਮੇਵਾਰੀ ਕਿਸਦੀ ਹੋਵੇਗੀ?
6. **ਆਟੋਮੈਟਿਕ ਹਥਿਆਰ:** ਅਜਿਹੇ AI ਹਥਿਆਰ ਬਣਾਉਣਾ ਜੋ ਇਨਸਾਨਾਂ ਦੀ ਮਦਦ ਬਿਨਾਂ ਖੁਦ ਹਮਲਾ ਕਰ ਸਕਦੇ ਹਨ, ਬਹੁਤ ਖਤਰਨਾਕ ਹੈ।

**AI ਦਾ ਭਵਿੱਖ (Future of AI):**
ਭਵਿੱਖ ਵਿੱਚ AI ਹੋਰ ਵੀ ਸ਼ਕਤੀਸ਼ਾਲੀ (General AI) ਬਣ ਜਾਵੇਗੀ, ਜੋ ਮਨੁੱਖ ਦੇ ਬਰਾਬਰ ਸੋਚ ਸਕੇਗੀ। 
- ਮਨੁੱਖ ਅਤੇ AI ਮਿਲ ਕੇ ਕੰਮ ਕਰਨਗੇ, ਜਿਸ ਨਾਲ ਹਰ ਖੇਤਰ ਵਿੱਚ ਤਰੱਕੀ ਹੋਵੇਗੀ।
- ਸਿਹਤ ਖੇਤਰ ਵਿੱਚ ਵੱਡੇ ਬਦਲਾਅ ਆਉਣਗੇ ਅਤੇ ਲਾਇਲਾਜ ਬਿਮਾਰੀਆਂ ਦਾ ਇਲਾਜ ਲੱਭਿਆ ਜਾ ਸਕੇਗਾ।
- ਸਰਕਾਰਾਂ AI ਦੀ ਸਹੀ ਵਰਤੋਂ ਲਈ ਸਖ਼ਤ ਕਾਨੂੰਨ ਬਣਾਉਣਗੀਆਂ।`
    },
    {
      id: "Q6",
      title: "What is the Turing Test? Explain its significance in AI.",
      en: `**Turing Test:**
The Turing Test was proposed by **Alan Turing** in 1950 in his famous paper "Computing Machinery and Intelligence". It is the most well-known test for determining whether a machine can think (or exhibit intelligence).

**How It Works:**
1. A human evaluator (judge) sits in one room.
2. In two other rooms, there is a **human** and a **machine (computer)**.
3. The judge communicates with both via text-only chat (typing), without knowing which one is the machine and which is the human.
4. The judge asks questions to both. If, after the conversation, the judge **cannot reliably tell** which one is the human and which is the machine, the machine is said to have **passed** the Turing Test.

**Significance:**
- It was the **first formal proposal** to measure machine intelligence.
- It shifted the question from "Can machines think?" to "Can machines behave intelligently?"
- No machine has definitively passed the full Turing Test yet, though modern chatbots (like ChatGPT) come very close in many conversations.

**Limitations:**
- A machine can pass the test by being clever at imitating, without actually "understanding" anything (this is called the **Chinese Room Argument** by John Searle).
- It only tests text-based conversation, not other forms of intelligence like creativity or physical tasks.`,
      pa: `**ਟਿਊਰਿੰਗ ਟੈਸਟ:**
ਇਹ ਟੈਸਟ **ਐਲਨ ਟਿਊਰਿੰਗ** ਨੇ 1950 ਵਿੱਚ ਆਪਣੇ ਮਸ਼ਹੂਰ ਪੇਪਰ ਵਿੱਚ ਪੇਸ਼ ਕੀਤਾ ਸੀ। ਇਹ AI ਦੇ ਖੇਤਰ ਵਿੱਚ ਸਭ ਤੋਂ ਮਸ਼ਹੂਰ ਟੈਸਟ ਹੈ ਜੋ ਇਹ ਜਾਂਚ ਕਰਦਾ ਹੈ ਕਿ ਕੀ ਕੋਈ ਮਸ਼ੀਨ ਬੁੱਧੀਮਾਨ ਵਿਵਹਾਰ ਕਰ ਸਕਦੀ ਹੈ ਜਾਂ ਨਹੀਂ।

**ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ:**
1. ਇੱਕ ਮਨੁੱਖ ਜੱਜ ਇੱਕ ਕਮਰੇ ਵਿੱਚ ਬੈਠਦਾ ਹੈ।
2. ਦੋ ਹੋਰ ਕਮਰਿਆਂ ਵਿੱਚ ਇੱਕ **ਮਨੁੱਖ** ਅਤੇ ਇੱਕ **ਮਸ਼ੀਨ** ਹੁੰਦੀ ਹੈ।
3. ਜੱਜ ਦੋਵਾਂ ਨਾਲ ਟਾਈਪ ਕਰਕੇ ਗੱਲ ਕਰਦਾ ਹੈ (ਬਿਨਾਂ ਦੇਖੇ)।
4. ਜੇ ਜੱਜ **ਇਹ ਨਹੀਂ ਦੱਸ ਸਕਦਾ** ਕਿ ਕੌਣ ਮਨੁੱਖ ਹੈ ਅਤੇ ਕੌਣ ਮਸ਼ੀਨ, ਤਾਂ ਮਸ਼ੀਨ ਟੈਸਟ **ਪਾਸ** ਕਰ ਲੈਂਦੀ ਹੈ।

**ਮਹੱਤਤਾ:**
- ਇਹ ਮਸ਼ੀਨ ਦੀ ਬੁੱਧੀ ਨੂੰ ਮਾਪਣ ਦਾ **ਪਹਿਲਾ ਅਧਿਕਾਰਤ ਤਰੀਕਾ** ਸੀ।
- ਅੱਜ ਤੱਕ ਕੋਈ ਮਸ਼ੀਨ ਪੂਰੀ ਤਰ੍ਹਾਂ ਇਹ ਟੈਸਟ ਪਾਸ ਨਹੀਂ ਕਰ ਸਕੀ, ਪਰ ChatGPT ਵਰਗੇ ਆਧੁਨਿਕ ਚੈਟਬੋਟ ਬਹੁਤ ਨੇੜੇ ਆ ਗਏ ਹਨ।`
    },
    {
      id: "Q7",
      title: "Briefly explain the history and timeline of Artificial Intelligence.",
      en: `**Key Milestones in AI History:**

| Year | Event |
|------|-------|
| **1950** | Alan Turing publishes "Computing Machinery and Intelligence" and proposes the **Turing Test**. |
| **1956** | The term **"Artificial Intelligence"** is officially coined by John McCarthy at the Dartmouth Conference. This is considered the **birth of AI** as a field. |
| **1966** | **ELIZA**, one of the first chatbots, is created at MIT. It could simulate a conversation with a psychotherapist. |
| **1997** | IBM's **Deep Blue** defeats world chess champion Garry Kasparov. A landmark moment for AI. |
| **2011** | IBM **Watson** wins the TV quiz show Jeopardy! against human champions. Apple launches **Siri**. |
| **2014** | **Alexa** (Amazon) is released. Chatbots become mainstream. |
| **2016** | Google's **AlphaGo** defeats the world champion in the ancient game of Go (far more complex than chess). |
| **2022-23** | **ChatGPT** by OpenAI launches and revolutionizes the world, bringing Generative AI to the masses. |

**Key Observation:** AI has gone through cycles of hype ("AI Summers") and disappointment ("AI Winters") where funding dried up. The current era (post-2020) is driven by massive computing power (GPUs) and Big Data.`,
      pa: `**AI ਦੇ ਇਤਿਹਾਸ ਦੀਆਂ ਮੁੱਖ ਘਟਨਾਵਾਂ:**

| ਸਾਲ | ਘਟਨਾ |
|------|-------|
| **1950** | ਐਲਨ ਟਿਊਰਿੰਗ ਨੇ **ਟਿਊਰਿੰਗ ਟੈਸਟ** ਪੇਸ਼ ਕੀਤਾ। |
| **1956** | ਜੌਨ ਮੈਕਕਾਰਥੀ (John McCarthy) ਨੇ **"ਆਰਟੀਫੀਸ਼ੀਅਲ ਇੰਟੈਲੀਜੈਂਸ"** ਸ਼ਬਦ ਬਣਾਇਆ। ਇਸ ਨੂੰ AI ਦਾ **ਜਨਮ** ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ। |
| **1997** | IBM ਦੇ **Deep Blue** ਨੇ ਸ਼ਤਰੰਜ ਦੇ ਵਿਸ਼ਵ ਚੈਂਪੀਅਨ ਨੂੰ ਹਰਾਇਆ। |
| **2011** | Apple ਨੇ **Siri** ਲਾਂਚ ਕੀਤੀ। IBM Watson ਨੇ TV ਕੁਇਜ਼ ਸ਼ੋਅ ਜਿੱਤਿਆ। |
| **2016** | Google ਦੇ **AlphaGo** ਨੇ ਦੁਨੀਆ ਦੀ ਸਭ ਤੋਂ ਗੁੰਝਲਦਾਰ ਖੇਡ Go ਦੇ ਚੈਂਪੀਅਨ ਨੂੰ ਹਰਾਇਆ। |
| **2022-23** | **ChatGPT** ਲਾਂਚ ਹੋਇਆ ਅਤੇ ਪੂਰੀ ਦੁਨੀਆ ਵਿੱਚ AI ਕ੍ਰਾਂਤੀ ਆ ਗਈ। |

**ਮੁੱਖ ਗੱਲ:** AI ਦੇ ਇਤਿਹਾਸ ਵਿੱਚ ਕਈ ਵਾਰ "AI Summers" (ਤੇਜ਼ ਤਰੱਕੀ) ਅਤੇ "AI Winters" (ਨਿਰਾਸ਼ਾ ਅਤੇ ਫੰਡਿੰਗ ਬੰਦ) ਆਏ। ਅੱਜ ਦਾ ਦੌਰ ਵੱਡੇ ਕੰਪਿਊਟਿੰਗ ਪਾਵਰ (GPUs) ਅਤੇ ਬਿਗ ਡਾਟਾ ਕਾਰਨ ਸਭ ਤੋਂ ਸ਼ਕਤੀਸ਼ਾਲੀ ਹੈ।`
    },
    {
      id: "Q8",
      title: "Discuss applications of AI in Business, Finance, and Transportation.",
      en: `**1. AI in Business:**
- **Customer Service Chatbots:** AI chatbots handle customer queries 24/7, reducing the need for large call centers (e.g., bank chatbots, e-commerce support).
- **Marketing & Sales:** AI analyzes customer behavior to show personalized advertisements and recommend products (e.g., Amazon's "You might also like" feature).
- **Fraud Detection:** AI monitors transactions in real-time and flags suspicious activity to prevent financial fraud.
- **Supply Chain Optimization:** AI predicts demand, manages inventory, and optimizes delivery routes to reduce costs.

**2. AI in Finance:**
- **Algorithmic Trading:** AI-powered algorithms buy and sell stocks automatically at high speed based on market patterns, often faster than any human trader.
- **Credit Scoring:** Banks use AI to analyze a person's financial history and predict whether they will repay a loan.
- **Risk Management:** AI models assess market risks and help investment firms make safer decisions.
- **Robo-Advisors:** AI-powered platforms give personalized financial advice and manage investment portfolios automatically.

**3. AI in Transportation:**
- **Self-Driving Cars:** Companies like Tesla and Waymo use AI (computer vision + sensors) to build cars that can drive themselves without human input.
- **Traffic Management:** AI analyzes traffic flow data in real-time and adjusts traffic signal timings to reduce congestion.
- **Route Optimization:** Apps like Google Maps use AI to find the fastest route considering live traffic, road closures, and accidents.
- **Predictive Maintenance:** AI predicts when a vehicle's parts (like brakes or engines) are likely to fail, allowing repairs before a breakdown occurs.`,
      pa: `**1. ਕਾਰੋਬਾਰ (Business) ਵਿੱਚ AI:**
- **ਗਾਹਕ ਸੇਵਾ ਚੈਟਬੋਟ:** AI ਚੈਟਬੋਟ 24/7 ਗਾਹਕਾਂ ਦੇ ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ ਦਿੰਦੇ ਹਨ (ਜਿਵੇਂ ਬੈਂਕ ਚੈਟਬੋਟ)।
- **ਮਾਰਕੀਟਿੰਗ:** AI ਗਾਹਕਾਂ ਦੇ ਵਿਵਹਾਰ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਕੇ ਉਨ੍ਹਾਂ ਨੂੰ ਉਨ੍ਹਾਂ ਦੀ ਪਸੰਦ ਅਨੁਸਾਰ ਇਸ਼ਤਿਹਾਰ ਦਿਖਾਉਂਦੀ ਹੈ (ਜਿਵੇਂ Amazon ਦੀ "ਤੁਹਾਨੂੰ ਇਹ ਵੀ ਪਸੰਦ ਆ ਸਕਦਾ ਹੈ" ਵਾਲੀ ਲਿਸਟ)।
- **ਧੋਖਾਧੜੀ ਦੀ ਪਛਾਣ:** AI ਲੈਣ-ਦੇਣ ਦੀ ਅਸਲ-ਸਮੇਂ ਨਿਗਰਾਨੀ ਕਰਕੇ ਸ਼ੱਕੀ ਗਤੀਵਿਧੀ ਫੜ੍ਹਦੀ ਹੈ।

**2. ਵਿੱਤ (Finance) ਵਿੱਚ AI:**
- **ਐਲਗੋਰਿਦਮਿਕ ਟ੍ਰੇਡਿੰਗ:** AI ਬਾਜ਼ਾਰ ਦੇ ਪੈਟਰਨ ਦੇਖ ਕੇ ਮਨੁੱਖਾਂ ਤੋਂ ਤੇਜ਼ ਸ਼ੇਅਰ ਖਰੀਦ-ਵੇਚ ਕਰਦੀ ਹੈ।
- **ਕ੍ਰੈਡਿਟ ਸਕੋਰਿੰਗ:** ਬੈਂਕ AI ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਅੰਦਾਜ਼ਾ ਲਗਾਉਂਦੇ ਹਨ ਕਿ ਕੋਈ ਵਿਅਕਤੀ ਲੋਨ ਵਾਪਸ ਕਰੇਗਾ ਜਾਂ ਨਹੀਂ।
- **ਰੋਬੋ-ਐਡਵਾਈਜ਼ਰ:** AI ਪਲੇਟਫਾਰਮ ਲੋਕਾਂ ਨੂੰ ਆਪਣੇ ਆਪ ਨਿਵੇਸ਼ (investment) ਦੀ ਸਲਾਹ ਦਿੰਦੇ ਹਨ।

**3. ਆਵਾਜਾਈ (Transportation) ਵਿੱਚ AI:**
- **ਸੈਲਫ-ਡਰਾਈਵਿੰਗ ਕਾਰਾਂ:** Tesla ਅਤੇ Waymo ਵਰਗੀਆਂ ਕੰਪਨੀਆਂ AI ਵਰਤ ਕੇ ਅਜਿਹੀਆਂ ਕਾਰਾਂ ਬਣਾ ਰਹੀਆਂ ਹਨ ਜੋ ਬਿਨਾਂ ਡਰਾਈਵਰ ਚੱਲ ਸਕਦੀਆਂ ਹਨ।
- **ਟ੍ਰੈਫਿਕ ਪ੍ਰਬੰਧਨ:** AI ਟ੍ਰੈਫਿਕ ਸਿਗਨਲਾਂ ਨੂੰ ਅਸਲ-ਸਮੇਂ ਵਿੱਚ ਐਡਜਸਟ ਕਰਕੇ ਜਾਮ ਘੱਟ ਕਰਦੀ ਹੈ।
- **ਰਸਤਾ (Route) ਦੱਸਣਾ:** Google Maps ਵਰਗੀਆਂ ਐਪਾਂ AI ਵਰਤ ਕੇ ਸਭ ਤੋਂ ਤੇਜ਼ ਰਸਤਾ ਲੱਭਦੀਆਂ ਹਨ।`
    }
  ]
};
