import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCqoHQUF_ppKBZb9OIwW6JKSuDMUIBZd9M",
    authDomain: "gambling-cookie.firebaseapp.com",
    projectId: "gambling-cookie",
    storageBucket: "gambling-cookie.firebasestorage.app",
    messagingSenderId: "486423415900",
    appId: "1:486423415900:web:20f06ba7c0da55b9136a99",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
