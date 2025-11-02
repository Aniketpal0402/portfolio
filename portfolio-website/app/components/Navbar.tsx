"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full bg-transparent text-white py-4 px-4 md:px-8 flex items-center justify-between shadow-lg absolute top-0 left-0 z-50 pointer-events-auto">
        {/* Left Side: Logo */}
      <div>
        <h1
          className="text-xl sm:text-2xl font-[Staatliches] tracking-wide leading-none"
        >
          ANIKET PAL
        </h1>
        <p
          className="text-xs font-[Stint_Ultra_Condensed] tracking-widest opacity-80"
        >
          PORTFOLIO'25
        </p>
      </div>

      {/* Desktop Menu - Hidden on mobile */}
      <div className="hidden md:flex items-center space-x-8 font-[Staatliches] tracking-wide text-xl">
        <a href="#about" className="hover:text-gray-300 transition-colors cursor-pointer">
          ABOUT
        </a>
        <a href="#projects" className="hover:text-gray-300 transition-colors cursor-pointer">
          PROJECTS
        </a>
        <a href="#recognition" className="hover:text-gray-300 transition-colors cursor-pointer">
          RECOGNITION
        </a>
        <a href="#contact" className="hover:text-gray-300 transition-colors cursor-pointer">
          CONTACT
        </a>

        {/* Resume Button */}
        <a
          href="/documents/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white px-4 py-1 font-[Stint_Ultra_Condensed] text-white hover:bg-white hover:text-[#0a2742] transition-all cursor-pointer"
        >
          RESUME
        </a>
      </div>

      {/* Hamburger/Close Icon Button - Visible only on mobile */}
      <button
        onClick={toggleMenu}
        className="md:hidden z-[60] relative w-10 h-10 flex items-center justify-center text-white focus:outline-none pointer-events-auto"
        aria-label="Toggle menu"
      >
        <div className="relative w-6 h-6">
          {/* Hamburger lines */}
          <span
            className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 top-3" : "top-1"
            }`}
          ></span>
          <span
            className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 top-3 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 top-3" : "top-5"
            }`}
          ></span>
        </div>
      </button>

      {/* Backdrop - Semi-transparent overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Menu Panel - Small right-side panel */}
      <div
        className={`fixed top-16 right-4 w-[55%] max-w-xs bg-transparent z-50 md:hidden transition-transform duration-300 ease-in-out rounded-lg ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Content */}
        <div
          className="flex flex-col items-start px-4 pt-6 pb-4 space-y-5 font-[Staatliches] tracking-wide"
        >
          <a
            href="#about"
            onClick={closeMenu}
            className="text-white hover:text-gray-300 transition-colors text-xl cursor-pointer"
          >
            ABOUT
          </a>
          <a
            href="#projects"
            onClick={closeMenu}
            className="text-white hover:text-gray-300 transition-colors text-xl cursor-pointer"
          >
            PROJECTS
          </a>
          <a
            href="#recognition"
            onClick={closeMenu}
            className="text-white hover:text-gray-300 transition-colors text-xl cursor-pointer"
          >
            RECOGNITION
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="text-white hover:text-gray-300 transition-colors text-xl cursor-pointer"
          >
            CONTACT
          </a>

          {/* Resume Button */}
          <a
            href="/documents/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="border-2 border-white px-6 py-2 font-[Stint_Ultra_Condensed] text-white hover:bg-white hover:text-black transition-all mt-2 cursor-pointer"
          >
            RESUME
          </a>
        </div>
      </div>
    </nav>
  );
}

