import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";
import { getAnalytics } from "firebase/analytics";

type FirebaseEnvConfig = {
  apiKey?: string;
  authDomain?: string;
  projectId?: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
  measurementId?: string;
};

const envConfig: FirebaseEnvConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const fallbackConfig: FirebaseEnvConfig = {
  apiKey: "AIzaSyCqoHQUF_ppKBZb9OIwW6JKSuDMUIBZd9M",
  authDomain: "gambling-cookie.firebaseapp.com",
  projectId: "gambling-cookie",
  storageBucket: "gambling-cookie.firebasestorage.app",
  messagingSenderId: "486423415900",
  appId: "1:486423415900:web:20f06ba7c0da55b9136a99",
  measurementId: "G-LDV5RQZNJZ",
};

const resolveFirebaseConfig = (): Required<FirebaseEnvConfig> => {
  const requiredKeys: (keyof FirebaseEnvConfig)[] = [
    "apiKey",
    "authDomain",
    "projectId",
    "storageBucket",
    "messagingSenderId",
    "appId",
  ];

  const hasEnvConfig = requiredKeys.every((key) => !!envConfig[key]);
  const configToUse = hasEnvConfig ? envConfig : fallbackConfig;

  if (!hasEnvConfig) {
    console.warn("Firebase env variables manquants. Utilisation de la configuration par défaut.");
  }

  const missingKeys = requiredKeys.filter((key) => !configToUse[key]);
  if (missingKeys.length) {
    throw new Error(
      `Configuration Firebase incomplète : champs manquants (${missingKeys.join(", ")}). ` +
        "Vérifie tes variables d’environnement ou complète firebase.ts."
    );
  }

  return configToUse as Required<FirebaseEnvConfig>;
};

const app = initializeApp(resolveFirebaseConfig());

export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
export const db = getFirestore(app);
export const auth = getAuth(app);
export const functions = getFunctions(app);
