
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA4ezre5yL7qLYe92QoVCt3NAXX-fzrq_s",
  authDomain: "openstudy-db63f.firebaseapp.com",
  projectId: "openstudy-db63f",
  storageBucket: "openstudy-db63f.firebasestorage.app",
  messagingSenderId: "700011522313",
  appId: "1:700011522313:web:a1df58b9ee446413788bd8",
  measurementId: "G-K6HLRYM68N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);