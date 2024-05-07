"use client";

import { auth } from "../firebaseConfig";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "../styles/globals.css"

const Home = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 class="text-2xl text-slate-900 font-semibold mb-4">Welcome, {user.email}!</h1>
        <p>This is your home screen.</p>
      </div>
    </div>
  );
};

export default Home;
