"use client";
import { useEffect, useState } from "react";
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
    "fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-6 px-6 py-2 rounded-full backdrop-blur-md transition-all duration-30 border border-gray-600",
    scrolled
      ? "shadow-lg bg-white/90 dark:bg-black/80"
      : "bg-white/50 dark:bg-black/50"
  )}
>
  {/* Left Icons */}
  <div className="flex items-center gap-4">
    <Link href="#home" className="hover:text-blue-500 transition">
      <FiHome size={20} />
    </Link>
    <Link href="#projects" className="hover:text-blue-500 transition">
      <FiFolder size={20} />
    </Link>
  </div>

  {/* Center Socials */}
  <div className="flex items-center gap-4 border-x px-4 border-gray-600 dark:border-gray-600">
    <a href="https://github.com/yourhandle" target="_blank">
      <FaGithub size={20} className="hover:text-blue-500" />
    </a>
    <a href="https://twitter.com/yourhandle" target="_blank">
      <FaXTwitter size={20} className="hover:text-blue-500" />
    </a>
    <a href="https://linkedin.com/in/yourhandle" target="_blank">
      <FaLinkedin size={20} className="hover:text-blue-500" />
    </a>
  </div>

  {/* Theme Toggle */}
  <ModeToggle />
</nav>
  );
}
