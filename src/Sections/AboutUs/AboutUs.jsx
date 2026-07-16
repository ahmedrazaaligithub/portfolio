import MyPhoto from "../../assets/images/graduate.jpeg";
import { ThemeContext } from "../../context/ThemeContext";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext } from "react";
import MyCV from "../../../public/Muhammad_Ahmed_Raza_CV.pdf";

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
        <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center gap-10 lg:gap-20">
          {/* Left Side - Image */}
          <div data-aos="flip-left" className="flex justify-center">
            <div className="w-52 sm:w-64 md:w-72 lg:w-80">
              <img
                src={MyPhoto}
                alt="Muhammad Ahmed Raza"
                className="w-full rounded-2xl shadow-xl object-cover"
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
              I'm a MERN Stack Developer with hands-on experience across React.js, Next.js, and
              Node.js — currently building scalable frontend applications at DigiTrends, alongside
              part-time frontend work at Techoid. I've previously worked with WH Developers and
              Techoid, delivering full-stack and frontend solutions from Figma design to production.
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
                <Link
                  to="https://github.com/ahmedrazaaligithub"
                  target="_blank"
                >
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
                    ? "bg-blue text-light hover:bg-blue"
                    : "bg-blue text-white hover:bg-blue"
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
