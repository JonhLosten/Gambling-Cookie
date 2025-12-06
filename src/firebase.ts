import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";
import { getAnalytics } from "firebase/analytics";

function pickEnv(key: string, fallback: string): string {
  const value = import.meta.env[key];
  return typeof value === "string" && value.trim().length > 0 ? value : fallback;
}

const firebaseConfig = {
  apiKey: pickEnv("VITE_FIREBASE_API_KEY", "AIzaSyCqoHQUF_ppKBZb9OIwW6JKSuDMUIBZd9M"),
  authDomain: pickEnv("VITE_FIREBASE_AUTH_DOMAIN", "gambling-cookie.firebaseapp.com"),
  projectId: pickEnv("VITE_FIREBASE_PROJECT_ID", "gambling-cookie"),
  storageBucket: pickEnv("VITE_FIREBASE_STORAGE_BUCKET", "gambling-cookie.appspot.com"),
  messagingSenderId: pickEnv("VITE_FIREBASE_MESSAGING_SENDER_ID", "486423415900"),
  appId: pickEnv("VITE_FIREBASE_APP_ID", "1:486423415900:web:20f06ba7c0da55b9136a99"),
  measurementId: pickEnv("VITE_FIREBASE_MEASUREMENT_ID", "G-LDV5RQZNJZ"),
};

// Vérification minimale
["apiKey", "authDomain", "projectId", "appId"].forEach((key) => {
  if (!firebaseConfig[key as keyof typeof firebaseConfig]) {
    console.warn(`⚠️ Clé Firebase manquante : ${key}`);
  }
});

const app = initializeApp(firebaseConfig);

export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
export const db = getFirestore(app);
export const auth = getAuth(app);
export const functions = getFunctions(app);
