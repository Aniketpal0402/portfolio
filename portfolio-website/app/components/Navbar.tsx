"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-transparent text-white py-4 px-8 flex items-center justify-between shadow-lg absolute top-0 left-0 z-50 pointer-events-auto">
        {/* Left Side: Logo */}
      <div>
        <h1
          className="text-2xl font-[Staatliches] tracking-wide leading-none"
        >
          ANIKET PAL
        </h1>
        <p
          className="text-xs font-[Stint_Ultra_Condensed] tracking-widest opacity-80"
        >
          PORTFOLIO’25
        </p>
      </div>

      {/* Right Side: Links */}
      <div className="flex items-center space-x-8 font-[Staatliches] tracking-wide text-xl">
        <Link href="#about" className="hover:text-gray-300 transition-colors">
          ABOUT
        </Link>
        <Link href="#projects" className="hover:text-gray-300 transition-colors">
          PROJECTS
        </Link>
        <Link href="#recognition" className="hover:text-gray-300 transition-colors">
          RECOGNITION
        </Link>
        <Link href="#contact" className="hover:text-gray-300 transition-colors">
          CONTACT
        </Link>

        {/* Resume Button */}
        <Link
          href="/resume.pdf"
          target="_blank"
          className="border border-white px-4 py-1 font-[Stint_Ultra_Condensed] text-white hover:bg-white hover:text-[#0a2742] transition-all"
        >
          RESUME
        </Link>
      </div>
    </nav>
  );
}

