// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // apiKey: "AIzaSyDqDmmgmP3Low6h6eOTk_9VREmkvMrcrIA",
  authDomain: "mern-estate-985f7.firebaseapp.com",
  projectId: "mern-estate-985f7",
  storageBucket: "mern-estate-985f7.firebasestorage.app",
  messagingSenderId: "529740461808",
  appId: "1:529740461808:web:533a701de8fdcc6442f435"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);