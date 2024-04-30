// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbW9LAImV-lLn9Qief4OGnTqkf_0Px66M",
  authDomain: "bakebrownbot.firebaseapp.com",
  projectId: "bakebrownbot",
  storageBucket: "bakebrownbot.appspot.com",
  messagingSenderId: "76759669663",
  appId: "1:76759669663:web:e90a3bfb57e949a9957baa",
  measurementId: "G-6J04GLSV87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);