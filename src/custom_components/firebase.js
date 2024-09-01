import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// Initialize Firebase with the configuration object
const fire = initializeApp({
    apiKey: "AIzaSyA1bynVS7pIMUlIVB-bUK5HMRJ9HmZ_6JM",
  authDomain: "gmbaudit-65999.firebaseapp.com",
  projectId: "gmbaudit-65999",
  storageBucket: "gmbaudit-65999.appspot.com",
  messagingSenderId: "492164715893",
  appId: "1:492164715893:web:d41b4b5c5df66fcd5d6f3c",
  measurementId: "G-8VRMFRJ5K1"
});

// Initialize Firebase services with the app instance
export const auth = getAuth(fire);
export const firestore = getFirestore(fire);

export default fire;
