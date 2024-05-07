"use client"; // Mark as a Client Component

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DefaultPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/signup"); // Redirect to the signup page by default
  }, []);

  return <div>Loading...</div>; // Simple loading state during redirect
};

export default DefaultPage;
