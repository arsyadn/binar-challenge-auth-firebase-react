// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTf8x0xxL_XtRRzJcBzlpJbkFVCsdr4YM",
  authDomain: "react-login-socmed.firebaseapp.com",
  projectId: "react-login-socmed",
  storageBucket: "react-login-socmed.appspot.com",
  messagingSenderId: "420140058320",
  appId: "1:420140058320:web:f70b7719934aa8a46740d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);