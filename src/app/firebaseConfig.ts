import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAK5Mwr-h7Dkm4LecSPfDWxMrj4PqLkcns",
  authDomain: "intern-tsk.firebaseapp.com",
  projectId: "intern-tsk",
  storageBucket: "intern-tsk",
  messagingSenderId: "91566243125",
  appId: "1:91566243125:web:d1da04d4d58b6f163ea07c",
  measurementId: "G-YV2Y6JK0LG",
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app); 
const googleProvider = new GoogleAuthProvider(); 

export { auth, googleProvider };
