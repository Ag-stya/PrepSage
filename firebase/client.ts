
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig={
    apiKey: "AIzaSyChK1qeZ0t0W3cA5xWKRQhR0YyHHr4h1tk",
    authDomain: "prepsage-c2491.firebaseapp.com",
    projectId: "prepsage-c2491",
    storageBucket: "prepsage-c2491.firebasestorage.app",
    messagingSenderId: "901355832616",
    appId: "1:901355832616:web:8140ac86e32cf189387c1d",
    measurementId: "G-XCKLZC487B"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth=getAuth(app);
export const db=getFirestore(app);