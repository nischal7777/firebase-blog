// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-U4FIvJMrknzCK08lvbmy1ZCycz6svmU",
    authDomain: "blogapp-92abc.firebaseapp.com",
    projectId: "blogapp-92abc",
    storageBucket: "blogapp-92abc.appspot.com",
    messagingSenderId: "889635648097",
    appId: "1:889635648097:web:ec5fceb0ce71263c1d7020",
    measurementId: "G-NCY9B62V7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider()