// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALp7RuoZBvFbuH7SNg2ci37U1VzMm7Z-Y",
  authDomain: "react-e3105.firebaseapp.com",
  projectId: "react-e3105",
  storageBucket: "react-e3105.appspot.com",
  messagingSenderId: "234006114608",
  appId: "1:234006114608:web:f810ea551e964c9bb618f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
