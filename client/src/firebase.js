// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "harish-293f4.firebaseapp.com",
    projectId: "harish-293f4",
    storageBucket: "harish-293f4.appspot.com",
    messagingSenderId: "979083755262",
    appId: "1:979083755262:web:64b9eb5e3d038efba06faf"
  };
  
console.log("API Key:", import.meta.env.VITE_FIREBASE_API_KEY);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);