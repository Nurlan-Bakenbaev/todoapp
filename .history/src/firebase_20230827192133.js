// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUE2Nuw2nAi5AdTNtDxa7wwcdkyvd6OPQ",
  authDomain: "todoapp-78b9b.firebaseapp.com",
  projectId: "todoapp-78b9b",
  storageBucket: "todoapp-78b9b.appspot.com",
  messagingSenderId: "711394024015",
  appId: "1:711394024015:web:e17e2ef6b17d53db6b683a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()