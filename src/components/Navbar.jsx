import { useState } from "react";
import Logo from "../assets/Logo.png";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../context/useAuth.js";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0B1A33] text-white flex items-center justify-between px-4 sm:px-6 md:px-10 py-2">
      <div className="flex items-center space-x-3">
        <img
          src={Logo}
          alt="Tanvi Group Logo"
          className="w-14 h-14 sm:w-20 sm:h-20 object-contain"
        />
        <a
          href="/"
          className="font-Kenao text-2xl sm:text-4xl md:text-5xl text-yellow-400"
        >
          TANVI GROUP
        </a>
      </div>

      <div className="hidden md:flex space-x-8 text-lg font-semibold">
        <a href="/" className="text-yellow-400 hover:text-white">
          HOME
        </a>
        <a href="/aboutus" className="text-yellow-400 hover:text-white">
          ABOUT US
        </a>
        <a href="/contacts" className="text-yellow-400 hover:text-white">
          CONTACT
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-yellow-400 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {/* simple hamburger icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0B1A33] flex flex-col items-center space-y-4 py-6 md:hidden z-50">
          <a
            href="/"
            className="text-yellow-400 hover:text-white text-lg font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </a>
          <a
            href="/aboutus"
            className="text-yellow-400 hover:text-white text-lg font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            ABOUT US
          </a>
          <a
            href="/contacts"
            className="text-yellow-400 hover:text-white text-lg font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            CONTACT
          </a>

        </div>
      )}
    </nav>
  );
}
