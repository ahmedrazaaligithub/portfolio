import React, { useState, useContext, useEffect } from "react";
import LightLogo from "../assets/images/dark_logo.png";
import DarkLogo from "../assets/images/light_logo.png";
import { FaGithub } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { HiMenu, HiX } from "react-icons/hi";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-scroll";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  // Screen resize hone pe menu close ho
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`px-5 sm:px-10 md:20 lg:px-35 fixed top-0 left-0 z-50 w-full h-16 lg:h-20 flex justify-between items-center transition-colors duration-300 shadow-lg 
            ${theme === "dark" ? "bg-bg-dark" : "bg-bg-light"}`}
    >
      {/* Logo */}
      <Link
        to="hero"
        smooth={true}
        duration={500}
        className="hover:text-blue-400 transition cursor-pointer"
      >
        <img
          className="w-40 md:w-48 lg:w-55"
          src={theme === "dark" ? DarkLogo : LightLogo}
          alt="logo"
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-3 items-center">
        <ThemeToggle />

        {/* ✅ GitHub external link */}
        <a
          href="https://github.com/ahmedrazaaligithub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className={`w-12 h-12 flex items-center justify-center font-bold rounded-full cursor-pointer text-lg transition-colors duration-300 hover:scale-105 ${
              theme === "dark" ? "bg-light text-dark" : "bg-dark text-light"
            }`}
          >
            <FaGithub size={28} />
          </button>
        </a>

        {/* ✅ Contact button (scroll to section) */}
        <Link to="contact" smooth={true} duration={500}>
          <button
            className={`px-8 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition cursor-pointer
                        ${
                          theme === "dark"
                            ? "bg-light text-dark"
                            : "bg-dark text-light"
                        }`}
          >
            Contact Me
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`flex items-center justify-center rounded-full cursor-pointer ${
            theme === "dark" ? "text-light" : "text-dark"
          }`}
        >
          {menuOpen ? <HiX size={32} /> : <HiMenu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-full left-0 w-full flex justify-end px-5 gap-3 overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-40 opacity-100 py-3" : "max-h-0 opacity-0 py-0"
        } ${theme === "dark" ? "bg-bg-dark" : "bg-bg-light"}`}
      >
        <ThemeToggle />

        {/* ✅ GitHub external link (mobile) */}
        <a
          href="https://github.com/razashaikh99"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className={`w-10 h-10 flex items-center justify-center font-bold rounded-full cursor-pointer text-lg transition-colors duration-300 hover:scale-105 ${
              theme === "dark" ? "bg-light text-dark" : "bg-dark text-light"
            }`}
          >
            <FaGithub size={24} />
          </button>
        </a>

        {/* ✅ Contact button (scroll to section, mobile) */}
        <Link to="contact" smooth={true} duration={500}>
          <button
            className={`px-6 py-2 font-bold rounded-full cursor-pointer text-md transition-colors duration-300 hover:scale-105 ${
              theme === "dark" ? "bg-light text-dark" : "bg-dark text-light"
            }`}
          >
            Contact
          </button>
        </Link>
      </div>
    </nav>
  );
}
