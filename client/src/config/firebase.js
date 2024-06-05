import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyDEFY8HXKmgqcuuS-dzKlNwL7rFkBT4KpQ",
  authDomain: "educationalsite-c7524.firebaseapp.com",
  projectId: "educationalsite-c7524",
  storageBucket: "educationalsite-c7524.appspot.com",
  messagingSenderId: "434839321328",
  appId: "1:434839321328:web:828af7a165bee64d0de035",
  measurementId: "G-2FL1BWB5PX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();




