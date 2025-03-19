// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEPI71guuuY4XrOslWnN5Tp6sHxYvEyIQ",
  authDomain: "netflixgpt-dd2c5.firebaseapp.com",
  projectId: "netflixgpt-dd2c5",
  storageBucket: "netflixgpt-dd2c5.firebasestorage.app",
  messagingSenderId: "303539094618",
  appId: "1:303539094618:web:4b27de064f8c56eaff8463",
  measurementId: "G-JVS6HDBFKS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
