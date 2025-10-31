import {getAuth}  from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "openstudy-db63f.firebaseapp.com",
  projectId: "openstudy-db63f",
  storageBucket: "openstudy-db63f.firebasestorage.app",
  messagingSenderId: "700011522313",
  appId: "1:700011522313:web:a1df58b9ee446413788bd8",
  measurementId: "G-K6HLRYM68N"
};


 export const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);
 export const auth=getAuth(app);