import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjE4lajGyaM4PsRhB-ZFRQS0UxVoz7Jik",
  authDomain: "studybudy1-c2479.firebaseapp.com",
  projectId: "studybudy1-c2479",
  storageBucket: "studybudy1-c2479.appspot.com",
  messagingSenderId: "810754818840",
  appId: "1:810754818840:web:7a08caed6e8b9ab65c946d",
  measurementId: "G-2X6CDPW7RD",
};

export const app = initializeApp(firebaseConfig, "studybudy1-c2479");

export const db = getFirestore(app);
