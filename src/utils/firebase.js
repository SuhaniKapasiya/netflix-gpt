// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAGfe_7lqav5qylXgte5Jeje3PKEyfMrC4",
  authDomain: "netflix-gpt-fa065.firebaseapp.com",
  projectId: "netflix-gpt-fa065",
  storageBucket: "netflix-gpt-fa065.firebasestorage.app",
  messagingSenderId: "376543270968",
  appId: "1:376543270968:web:6158b95e3c2f866c772ecd",
  measurementId: "G-4D7Z2WNCJM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
