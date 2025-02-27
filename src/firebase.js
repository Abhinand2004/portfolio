// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLKqy4vtW3pYM7OEVcHhT1rAzy9v4FvG0",
  authDomain: "portfolio-50582.firebaseapp.com",
  projectId: "portfolio-50582",
  storageBucket: "portfolio-50582.firebasestorage.app",
  messagingSenderId: "342283073403",
  appId: "1:342283073403:web:be4b01864f5221df616fde",
  measurementId: "G-210FQ0QY0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);
export { db };