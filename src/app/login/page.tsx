"use client"; // This is a client component

import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
    return emailRegex.test(email);
  };

  const handleEmailLogin = async () => {
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/home"); // Redirect to the home page after successful login
    } catch (error) {
      alert("Error logging in. Please try again.");
      console.error("Error logging in:", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/home"); // Redirect to the home page after Google login
    } catch (error) {
      alert("Error signing in with Google. Please try again.");
      console.error("Error with Google sign-in:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl text-slate-800 font-semibold mb-4">Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2 mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleEmailLogin}
        >
          Login with Email
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded my-4"
          onClick={handleGoogleLogin}
        >
          Login with Google
        </button>
        <div>
          Don't have an account?{" "}
          <Link href="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
