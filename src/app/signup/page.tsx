"use client";

import "../styles/globals.css";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleEmailSignup = async () => {
    try {
      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters long");
      }
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/login"); // Redirect to login after sign-up
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("This email address is already registered. Please log in.");
      } else if (error.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else {
        setError("Error creating account. Please try again.");
      }
      console.error("Error creating account:", error);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/home"); // Redirect to home if Google sign-up is successful
    } catch (error) {
      setError("Error with Google sign-in. Please try again.");
      console.error("Error with Google sign-in:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl text-slate-800 font-semibold mb-4">Signup</h1>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleEmailSignup}
        >
          Signup with Email
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded my-4"
          onClick={handleGoogleSignup}
        >
          Signup with Google
        </button>
        <div>
          Already have an account?{" "}
          <Link href="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
