import { useContext } from "react";
import { FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";
export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      type="button"
      className="icon-button"
      onClick={toggleTheme}
      aria-label={
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }
    >
      {theme === "dark" ? (
        <MdLightMode aria-hidden="true" size={18} />
      ) : (
        <FaMoon aria-hidden="true" size={16} />
      )}
    </button>
  );
}
