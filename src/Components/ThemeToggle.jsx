import { useContext } from "react";
import { FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className={`w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center font-bold rounded-full cursor-pointer text-lg transition-colors duration-300 hover:scale-105 
                        ${theme === "dark" ? "bg-light text-dark" : "bg-dark text-light"}`}
        >
            {theme === "dark" ? <MdLightMode size={28} /> : <FaMoon size={26} />}
        </button>
    );
}
