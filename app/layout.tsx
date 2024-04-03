// Import global styles
import "./globals.css";

// Import required components and utilities
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

// Initialize font variable
const inter = Inter({ subsets: ["latin"] });

// Define RootLayout component
const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" suppressHydrationWarning>
    <head>
      {/* Include any required meta tags, title, etc. */}
      <title>Your Title</title>
      {/* Import Inter font */}
      <link rel="stylesheet" href={`https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap`} />
    </head>
    <body
      className={cn(
        "min-h-screen bg-background antialiased",
        inter.className
      )}
      style={{ fontFamily: "'Inter', sans-serif" }} // Set Inter as default font
    >
      {/* Render children components */}
      {children}
    </body>
  </html>
);

// Export RootLayout component as default
export default RootLayout;
