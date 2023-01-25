import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_rJeJza5Fw-Whn0t-7iGLZciLFkZSYNY",
  authDomain: "blogproject-6a3c4.firebaseapp.com",
  projectId: "blogproject-6a3c4",
  storageBucket: "blogproject-6a3c4.appspot.com",
  messagingSenderId: "910655042665",
  appId: "1:910655042665:web:a00b66206376e20adc5ef8",
  measurementId: "G-7KYPMMMH1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();