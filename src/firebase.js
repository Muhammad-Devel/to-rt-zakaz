// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRzVzaCaSfedzCXCfXqz57hXhfplwQO9Q",
  authDomain: "products-7d6e6.firebaseapp.com",
  projectId: "products-7d6e6",
  storageBucket: "products-7d6e6.appspot.com",
  messagingSenderId: "614975742998",
  appId: "1:614975742998:web:9dff7e027afa281c2c8137",
  measurementId: "G-K0W2CNL8D1",
};

// Firebase ni ishga tushirish
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
