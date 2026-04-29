import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAM8tcsYAnJoLzY6ZUxp6M5h2z-M6AJzDI",
  authDomain: "bca2nd-5c622.firebaseapp.com",
  databaseURL: "https://bca2nd-5c622-default-rtdb.firebaseio.com",
  projectId: "bca2nd-5c622",
  storageBucket: "bca2nd-5c622.firebasestorage.app",
  messagingSenderId: "165637906529",
  appId: "1:165637906529:web:c8026ceb238b8995a94a20",
  measurementId: "G-8DTJ3DCLRD",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

async function test() {
  try {
    const testRef = ref(db, "onlineUsers/testUser");
    await set(testRef, {
      name: "TestUser",
      joinedAt: Date.now(),
      status: "active",
      examStarted: false
    });
    console.log("Write successful!");
    
    const snap = await get(testRef);
    console.log("Read:", snap.val());
  } catch (e) {
    console.error("Firebase error:", e.message);
  }
  process.exit(0);
}

test();
