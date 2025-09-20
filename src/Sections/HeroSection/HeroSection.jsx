import { useContext } from "react";
import MyPhoto from "../../assets/images/ahmed-raza.JPG";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-scroll";

export default function HeroSection() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`px-5 sm:px-10 lg:px-32 mt-16 lg:mt-20 w-auto py-12 lg:py-24 flex flex-col-reverse lg:flex-row items-center justify-between transition-colors duration-300
    ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}
  `}
    >
      {/* Left Section */}
      <div
        data-aos="fade-right"
        className="flex-1 flex flex-col gap-5 text-center lg:text-left pt-6 md:pt-0"
      >
        <p className="text-lg opacity-80">👋 Hello there...</p>
        <h1 className="text-4xl lg:text-4xl font-bold leading-tight">
          I’m <span className="text-blue">Muhammad Ahmed raza</span>
        </h1>
        <h2 className="text-2xl font-semibold">
          A <span className="text-blue font-bold uppercase">MERN Stack Developer</span>
        </h2>
        <p className="text-base lg:text-lg opacity-80 max-w-lg mx-auto lg:mx-0">
          Greetings! I am Muhammad Ahmed Raza, a professional MERN Stack
          Developer at WH Developers, specializing in web applications using
          React.js, Next.js, and Node.js.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center lg:justify-start mt-4">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="px-6 py-3 rounded-full bg-blue text-light font-semibold shadow-md transition transform hover:scale-105 cursor-pointer"
          >
            View Projects
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <button
              className={`px-9 py-3 rounded-full font-semibold shadow-md transition transform hover:scale-105 cursor-pointer
                          ${
                            theme === "dark"
                              ? "bg-light text-dark"
                              : "bg-dark text-light"
                          }`}
            >
              Hire Me
            </button>
          </Link>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div
        data-aos="flip-right"
        className="flex-1 flex justify-center lg:justify-end"
      >
        <img
          src={MyPhoto}
          alt="Muhammad Ahmed raza"
          className="w-48 h-48 sm:w-64 sm:h-64 lg:w-[360px] lg:h-[360px] object-cover rounded-full drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
