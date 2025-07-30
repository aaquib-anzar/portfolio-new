// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import { ThemeProvider } from "@/app/components/ui/theme-provider"
import {Labrada} from "next/font/google"

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
      {children}
      </ThemeProvider>
    </body>
    </html>
  );
}
