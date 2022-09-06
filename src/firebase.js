// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtZajRG0rkjbRiR0IWp8M_p78X8YyFvmY",
  authDomain: "react-firebase-auth-bf09f.firebaseapp.com",
  projectId: "react-firebase-auth-bf09f",
  storageBucket: "react-firebase-auth-bf09f.appspot.com",
  messagingSenderId: "146390347371",
  appId: "1:146390347371:web:62060fc09e789d5e53cb2e",
  measurementId: "G-G1DFBW6FJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);


export {auth,db };