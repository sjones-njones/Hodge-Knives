// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj2UHSn4Wf-vimSv0LU9HFcFYbwvpmT_w",
  authDomain: "hodge-knives.firebaseapp.com",
  projectId: "hodge-knives",
  storageBucket: "hodge-knives.appspot.com",
  messagingSenderId: "889923445947",
  appId: "1:889923445947:web:613a9e138845e300b7359e",
  measurementId: "G-38XW8776Y4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;