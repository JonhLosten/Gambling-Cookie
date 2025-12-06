import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCqoHQUF_ppKBZb9OIwW6JKSuDMUIBZd9M",
  authDomain: "gambling-cookie.firebaseapp.com",
  projectId: "gambling-cookie",
  storageBucket: "gambling-cookie.firebasestorage.app",
  messagingSenderId: "486423415900",
  appId: "1:486423415900:web:20f06ba7c0da55b9136a99",
  measurementId: "G-LDV5RQZNJZ"
};

const app = initializeApp(firebaseConfig);

export const analytics =
  typeof window !== "undefined" ? getAnalytics(app) : null;

export const db = getFirestore(app);
export const auth = getAuth(app);
export const functions = getFunctions(app);
