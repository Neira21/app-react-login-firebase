// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWrKPcE2wwrVEU66KMBUY6JGF4Xf8MBfY",
  authDomain: "fir-login-react-87156.firebaseapp.com",
  projectId: "fir-login-react-87156",
  storageBucket: "fir-login-react-87156.appspot.com",
  messagingSenderId: "128675154184",
  appId: "1:128675154184:web:6b45fa2da75701761984bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export { app, auth }