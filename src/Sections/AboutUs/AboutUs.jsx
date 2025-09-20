import MyPhoto from "../../assets/images/ahmed-raza.JPG";
import { ThemeContext } from "../../context/ThemeContext";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext } from "react";
import MyCV from "../../../public/muhammad-ahmed-raza-resume.pdf";

export default function AboutUs() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      name="about"
      className={`px-5 sm:px-10 md:20 lg:px-35  ${
        theme === "dark" ? "bg-bg-dark text-light" : "bg-bg-light text-dark"
      }`}
    >
      {/* Heading */}
      <div className="text-center py-10">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-blue">
          About Me
        </h2>
        <p
          className={`mt-4 text-base ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Turning ideas into reality ✨
        </p>
      </div>

      <div className="w-full py-8 lg:py-14 flex justify-center items-center transition-colors duration-300">
        <div className="w-full grid grid-cols-2 md:grid-cols-3 items-start gap-12 lg:gap-25">
          {/* Left Side - Image */}
          <div
            data-aos="flip-left"
            className="flex justify-center items-center"
          >
            <div className="relative w-48 sm:w-64 md:w-72 lg:w-80">
              <img
                src={MyPhoto}
                alt="Muhammad Ahmed raza"
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Text */}
          <div
            data-aos="fade-top"
            className="md:col-span-2 text-center lg:text-left w-full px-4 lg:px-0"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              I'm Muhammad Ahmed raza
            </h3>
            <p className="opacity-80 leading-relaxed mb-6 text-sm sm:text-base">
              Greetings! I am Muhammad Ahmed Raza, a professional MERN Stack
              Developer at WH Developers, specializing in web applications using
              React.js, Next.js, and Node.js.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm sm:text-base">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <MdEmail size={20} />
                <p>muhammadahmedraza16@gmail.com</p>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <FaPhone size={20} />
                <p>+92 312-1240034</p>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <FaGithub size={20} />
                <Link to="https://github.com/ahmedrazaaligithub" target="_blank">
                  <p>view github</p>
                </Link>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <FaLinkedin size={20} />
                <Link
                  to="https://www.linkedin.com/in/muhammad-ahmed-raza-479b29278/"
                  target="_blank"
                >
                  <p>view linkden</p>
                </Link>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <FaMapMarkerAlt size={20} />
                <p>Karachi, Pakistan</p>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center lg:justify-start">
              <Link
                to={MyCV}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-2 lg:py-3 rounded-full shadow transition transform hover:scale-105 font-semibold cursor-pointer ${
                  theme === "dark"
                    ? "bg-blue text-light hover:bg-blue-700"
                    : "bg-blue text-white hover:bg-blue-700"
                }`}
              >
                See My Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
