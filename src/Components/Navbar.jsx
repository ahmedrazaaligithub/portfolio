import { useEffect, useRef, useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
const links = [
  ["about", "About"],
  ["experience", "Experience"],
  ["skills", "Skills"],
  ["projects", "Projects"],
];
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);
  const header = useRef(null);
  useEffect(() => {
    const media = window.matchMedia("(max-width: 700px)");
    const resize = () => {
      if (!media.matches) setMenuOpen(false);
    };
    const escape = (event) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const outside = (event) => {
      if (!header.current?.contains(event.target)) setMenuOpen(false);
    };
    media.addEventListener("change", resize);
    document.addEventListener("keydown", escape);
    document.addEventListener("pointerdown", outside);
    return () => {
      media.removeEventListener("change", resize);
      document.removeEventListener("keydown", escape);
      document.removeEventListener("pointerdown", outside);
    };
  }, [menuOpen]);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="site-header" ref={header}>
      <nav className="navbar shell" aria-label="Primary navigation">
        <a
          className="brand"
          href="#hero"
          onClick={closeMenu}
          aria-label="Ahmed Raza, back to introduction"
        >
          <span className="brand-mark" aria-hidden="true">
            a.
          </span>{" "}
          ahmed raza
          <span className="muted" aria-hidden="true">
            ↗
          </span>
        </a>
        <div className="desktop-links">
          {links.map(([id, label]) => (
            <a key={id} href={"#" + id}>
              {label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <a
            className="text-link desktop-github"
            href="https://github.com/ahmedrazaaligithub"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <FiArrowUpRight aria-hidden="true" />
          </a>
          <ThemeToggle />
          <a className="button nav-contact" data-magnetic href="#contact">
            Contact Me <FiArrowUpRight aria-hidden="true" />
          </a>
          <button
            ref={menuButton}
            type="button"
            className="icon-button menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <HiX aria-hidden="true" size={22} />
            ) : (
              <HiMenuAlt4 aria-hidden="true" size={22} />
            )}
          </button>
        </div>
      </nav>
      <nav
        id="mobile-navigation"
        className="mobile-menu"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
        onBlur={(event) => {
          if (
            !event.currentTarget.contains(event.relatedTarget) &&
            event.relatedTarget !== menuButton.current
          )
            closeMenu();
        }}
      >
        {[...links, ["contact", "Contact"]].map(([id, label]) => (
          <a key={id} href={"#" + id} onClick={closeMenu}>
            {label}
          </a>
        ))}
        <a
          href="https://github.com/ahmedrazaaligithub"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            menuButton.current?.focus();
            closeMenu();
          }}
        >
          GitHub ↗
        </a>
      </nav>
    </header>
  );
}
