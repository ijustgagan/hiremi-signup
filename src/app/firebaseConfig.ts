import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Importing Firebase Auth and Google Auth Provider
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK5Mwr-h7Dkm4LecSPfDWxMrj4PqLkcns",
  authDomain: "intern-tsk.firebaseapp.com",
  projectId: "intern-tsk",
  storageBucket: "intern-tsk",
  messagingSenderId: "91566243125",
  appId: "1:91566243125:web:d1da04d4d58b6f163ea07c",
  measurementId: "G-YV2Y6JK0LG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app); // Correct initialization of Firebase Auth
const googleProvider = new GoogleAuthProvider(); // Correct initialization of Google Auth Provider

// Exporting Firebase Auth and Google Auth Provider
export { auth, googleProvider };
