// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDKnwk3FbAsmJ4_-DifP7aXx6EIbIpAA0",
  authDomain: "auth-firebase-context-ta-63ad7.firebaseapp.com",
  projectId: "auth-firebase-context-ta-63ad7",
  storageBucket: "auth-firebase-context-ta-63ad7.appspot.com",
  messagingSenderId: "1018187483207",
  appId: "1:1018187483207:web:5fe8273d2f76c9eb0a8962"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app