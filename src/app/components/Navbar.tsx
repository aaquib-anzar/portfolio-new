"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"
import { FiHome, FiFolder } from "react-icons/fi";
import clsx from "clsx";
import { ModeToggle } from "./ui/ModeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Scroll shadow effect
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
<nav
  className={clsx(
    "fixed top-4 left-1/2 -translate-x-1/2 z-50 sm:max-w-3xl flex items-center justify-between gap-4 sm:gap-6 px-4 sm:px-8 py-2 rounded-full backdrop-blur-md transition-all duration-300 border border-gray-600",
    scrolled
      ? "shadow-lg bg-white/90 dark:bg-black/80"
      : "bg-white/50 dark:bg-black/50"
  )}
>

      {/* Left Icons */}
      <div className="flex items-center gap-4">
        <Link href="#home" className="relative group flex items-center justify-center md:p-2  transition-all duration-300 hover:scale-125 hover:text-amber-200 active:scale-125 active:text-amber-200">
          <FiHome size={24} />

          <span className="absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap font-semibold px-2 py-1 rounded bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            Home
          </span>
        </Link>
        <Link href="#projects" className="relative group flex items-center justify-center p-2 rounded-full transition-all duration-300 hover:scale-125 hover:text-amber-200 active:scale-125 active:text-amber-200">
          <FiFolder size={24} />

          <span className="absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap font-semibold px-2 py-1 rounded bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            Projects
          </span>
        </Link>
      </div>

      {/* Center Socials */}
      <div className="flex items-center gap-4 border-x px-4 border-gray-600 dark:border-gray-600">
        <a href="https://github.com/aaquib-anzar" target="_blank">
          <div className="relative group flex items-center justify-center p-2 rounded-full transition-all duration-300 hover:scale-125 hover:text-amber-200 active:scale-125 active:text-amber-200">
            <FaGithub size={24} />
            <span className="absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap font-semibold px-2 py-1 rounded bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              GitHub
            </span>
          </div>

        </a>
        <a href="https://twitter.com/yourhandle" target="_blank">
          <div className="relative group flex items-center justify-center p-2 rounded-full transition-all duration-300 hover:scale-125 hover:text-amber-200 active:scale-125 active:text-amber-200">
            <FaXTwitter size={24} />

          <span className="absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap font-semibold px-2 py-1 rounded bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            X
          </span>
          </div>
        </a>
        <a href="https://linkedin.com/in/aaquib-anzar-519771170/" target="_blank" className="relative group flex items-center justify-center">
          <div className="relative group flex items-center justify-center p-2 rounded-full transition-all duration-300 hover:scale-125 hover:text-amber-200 active:scale-125 active:text-amber-200">
            <FaLinkedin size={24} />

          <span className="absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap font-semibold px-2 py-1 rounded bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            LinkedIn
          </span>
          </div>
        </a>
      </div>

      {/* Theme Toggle */}
      <ModeToggle />
    </nav>
  );
}
