import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import LightLogo from "../assets/images/dark_logo.png";
import DarkLogo from "../assets/images/light_logo.png";
export default function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className="footer shell">
      <div className="footer-top">
        <a href="#hero" aria-label="Ahmed Raza, back to introduction">
          <img
            className="footer-logo"
            src={theme === "dark" ? DarkLogo : LightLogo}
            alt="Ahmed Raza"
            width="1200"
            height="400"
            loading="lazy"
            decoding="async"
          />
        </a>
        <nav className="footer-links" aria-label="Footer navigation">
          {["About", "Skills", "Projects", "Contact"].map((label) => (
            <a key={label} href={"#" + label.toLowerCase()}>
              {label}
            </a>
          ))}
        </nav>
        <div className="social-links">
          <a
            href="https://github.com/ahmedrazaaligithub"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-ahmed-raza-479b29278/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://x.com/ahmedrazaparmar"
            target="_blank"
            rel="noopener noreferrer"
          >
            X ↗
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ahmed Raza. All rights reserved.</p>
        <a href="#hero">Back to the beginning ↑</a>
      </div>
    </footer>
  );
}
