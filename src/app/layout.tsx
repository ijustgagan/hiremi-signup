"use client"; // Mark as a client component if needed
import { ReactNode } from "react";


const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
        {/* Your meta tags */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
