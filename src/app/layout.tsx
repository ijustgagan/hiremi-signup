"use client"; 
import { ReactNode } from "react";


const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
