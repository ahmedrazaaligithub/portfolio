import React, { useContext } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import LightLogo from "../assets/images/dark_logo.png";
import DarkLogo from "../assets/images/light_logo.png";
import { ThemeContext } from "../context/ThemeContext";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

// SmartLink component
function SmartLink({ to, children, ...props }) {
  const isExternal = to.startsWith("http");

  if (isExternal) {
    return (
      <RouterLink to={to} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </RouterLink>
    );
  }

  return (
    <ScrollLink to={to} smooth={true} duration={500} {...props}>
      {children}
    </ScrollLink>
  );
}

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`py-8 px-5 sm:px-10 md:20 lg:px-35 ${theme === "dark" ? "bg-bg-dark text-gray-400" : "bg-bg-light text-bg-dark"
        }`}
    >
      <div className="container">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo / Name */}
          <img
            className={`w-26 md:w-28 lg:w-32`}
            src={theme === "dark" ? DarkLogo : LightLogo}
            alt="Ahmed raza"
          />

          {/* Quick Links */}
          <ul className="flex gap-6 text-sm">
            <li>
              <SmartLink className="hover:text-blue-400 transition cursor-pointer" to="about">
                About
              </SmartLink>
            </li>
            <li>
              <SmartLink className="hover:text-blue-400 transition cursor-pointer" to="skills">
                Skills
              </SmartLink>
            </li>
            <li>
              <SmartLink className="hover:text-blue-400 transition cursor-pointer" to="projects">
                Projects
              </SmartLink>
            </li>
            <li>
              <SmartLink className="hover:text-blue-400 transition cursor-pointer" to="contact">
                Contact
              </SmartLink>
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex gap-4 text-xl">
            <SmartLink to="https://github.com/razashaikh99" className="hover:text-blue-400">
              <FaGithub />
            </SmartLink>
            <SmartLink to="http://www.linkedin.com/in/muhammad-raza-shaikh" className="hover:text-blue-400">
              <FaLinkedin />
            </SmartLink>
            <SmartLink to="https://www.fiverr.com/razashaikh22" className="hover:text-blue-400">
              <TbBrandFiverr />
            </SmartLink>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Ahmed raza. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
