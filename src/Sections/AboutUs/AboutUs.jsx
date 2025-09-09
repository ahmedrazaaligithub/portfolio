import MyPhoto from "../../assets/images/raza-shaikh3.jpg";
import { ThemeContext } from "../../context/ThemeContext";
import { MdEmail } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext } from "react";
import MyCV from "../../../public/raza-shaikh-cv.pdf"

export default function AboutUs() {
  const { theme } = useContext(ThemeContext);

  return (
    <section name="about"
      className={`px-5 sm:px-10 md:20 lg:px-35  ${theme === "dark" ? "bg-bg-dark text-light" : "bg-bg-light text-dark"}`}
    >

      {/* Heading */}
      <div className="text-center py-10">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-blue">
          About Me
        </h2>
        <p className={`mt-4 text-base ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
          Turning ideas into reality ✨
        </p>
      </div>

      <div className="w-full py-8 lg:py-14 flex justify-center items-center transition-colors duration-300">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-25">

          {/* Left Side - Image */}
          <div
            data-aos="flip-left"
            className="flex justify-center items-center">
            <div className="relative w-48 sm:w-64 md:w-72 lg:w-80">
              <img
                src={MyPhoto}
                alt="Raza Shaikh"
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Text */}
          <div
            data-aos="fade-top"
            className="flex-1 text-center lg:text-left w-full px-4 lg:px-0">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              I'm Raza Shaikh
            </h3>
            <p className="opacity-80 leading-relaxed mb-6 text-sm sm:text-base">
              I specialize in building modern Mobile and Web Applications
              tailored to client needs. From social platforms and quiz apps to
              educational and custom solutions, I focus on creating
              user-friendly, scalable, and impactful digital products.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm sm:text-base">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <MdEmail size={20} />
                <p>shaikhrazamehmood@gmail.com</p>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <IoPersonSharp size={20} />
                <p>20 Yr</p>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <FaPhone size={20} />
                <p>+92323-3095007</p>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <FaGithub size={20} />
                <Link to="https://github.com/razashaikh99" target="_blank">
                  <p>github.com/razashaikh99</p>
                </Link>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <FaLinkedin size={20} />
                <Link to="http://www.linkedin.com/in/muhammad-raza-shaikh" target="_blank">
                  <p>linkedin.com/raza-shaikh</p>
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
                className={`px-6 py-2 lg:py-3 rounded-full shadow transition transform hover:scale-105 font-semibold cursor-pointer ${theme === "dark"
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
