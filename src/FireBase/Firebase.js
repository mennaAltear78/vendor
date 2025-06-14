// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSwBg7zBCnOVctUV6gb_MHA140wYHxYgY",
  authDomain: "notifications-739e2.firebaseapp.com",
  projectId: "notifications-739e2",
  storageBucket: "notifications-739e2.firebasestorage.app",
  messagingSenderId: "1013446715800",
  appId: "1:1013446715800:web:7ef422306b5660617263ed",
  measurementId: "G-2KLP2X0GXE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
