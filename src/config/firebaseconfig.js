// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdN8tZmKMKsMlThpLeFVOH-Vn5Idg1ZrM",
  authDomain: "loginsignup-765eb.firebaseapp.com",
  databaseURL: "https://loginsignup-765eb-default-rtdb.firebaseio.com",
  projectId: "loginsignup-765eb",
  storageBucket: "loginsignup-765eb.appspot.com",
  messagingSenderId: "238504186081",
  appId: "1:238504186081:web:97f6d59f9a8b5b96dae7a0",
  measurementId: "G-7TNJ18R7SY"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app