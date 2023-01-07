// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHZI7VSqJmc4qEbnOBAwr1n0inX394jsA",
  authDomain: "nextflix-30362.firebaseapp.com",
  projectId: "nextflix-30362",
  storageBucket: "nextflix-30362.appspot.com",
  messagingSenderId: "883279175615",
  appId: "1:883279175615:web:24913897484e3fc89bcb0a",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
