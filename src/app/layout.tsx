// app/layout.tsx
import "./globals.css";
import React from "react"
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ui/theme-provider"
import {Labrada} from "next/font/google"
import Footer from "./components/Footer";
import { ToastContainer} from 'react-toastify';

const labrada = Labrada({ subsets: ["latin"]});
export const metadata: Metadata = {
  title: "Aaquib's Portfolio",
  description: "A personal portfolio built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={labrada.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <Navbar />
      <ToastContainer position="top-right" />
      {children}
      <Footer />
      </ThemeProvider>
    </body>
    </html>
  );
}
