import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY ?? "AIzaSyCqoHQUF_ppKBZb9OIwW6JKSuDMUIBZd9M",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ?? "gambling-cookie.firebaseapp.com",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ?? "gambling-cookie",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ?? "gambling-cookie.firebasestorage.app",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ?? "486423415900",
    appId: import.meta.env.VITE_FIREBASE_APP_ID ?? "1:486423415900:web:20f06ba7c0da55b9136a99",
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID ?? "G-LDV5RQZNJZ",
};

const requiredKeys: (keyof typeof firebaseConfig)[] = ['apiKey', 'authDomain', 'projectId', 'appId'];
for (const key of requiredKeys) {
    if (!firebaseConfig[key]) {
        console.warn(`Firebase configuration key "${key}" is missing. Check your Vite environment variables.`);
    }
}

const app = initializeApp(firebaseConfig);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
export const db = getFirestore(app);
export const auth = getAuth(app);
export const functions = getFunctions(app);
