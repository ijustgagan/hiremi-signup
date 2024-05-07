"use client"; 

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DefaultPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/signup"); 
  }, []);

  return <div>Loading...</div>; 
};

export default DefaultPage;
