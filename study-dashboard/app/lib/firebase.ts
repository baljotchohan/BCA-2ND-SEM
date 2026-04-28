import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

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

// Prevent duplicate initialization in Next.js hot-reload / SSR
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getDatabase(app);
