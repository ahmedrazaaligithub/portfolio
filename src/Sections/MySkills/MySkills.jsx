import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaHtml5, FaBootstrap, FaNode, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

export default function MySkills() {
  const { theme } = useContext(ThemeContext);

  // Skills Array
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={44} color="#E34F26" /> },
    { name: "CSS", icon: <IoLogoCss3 size={44} color="#2D53E5" /> },
    { name: "JavaScript", icon: <IoLogoJavascript size={44} color="#F7DF1E" /> },
    { name: "Bootstrap", icon: <FaBootstrap size={44} color="#8913FC" /> },
    { name: "React.js", icon: <FaReact size={44} color="#08D9FF" /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill size={44} color="#38BDF8" /> },
    { name: "MongoDB", icon: <SiMongodb size={44} color="#55AD47" /> },
    { name: "Node.js", icon: <FaNode size={44} color="#58A149" /> },
  ];

  return (
    <section name="skills"
      className={`px-5 sm:px-10 md:20 lg:px-35 ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"
        }`}
    >
      {/* Heading */}
      <div className="text-center py-10">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-blue">
          My Skills
        </h2>
        <p className={`mt-4 text-base ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
          Constantly learning, building, and growing ✨
        </p>
      </div>

      {/* Skills Grid */}
      <div data-aos="zoom-in" className="pb-20 pt-10 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8 place-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col justify-center items-center w-28 h-28 rounded-xl shadow-md transition-all duration-300 ${theme === "dark" ? "bg-bg-dark hover:bg-gray-800" : "bg-bg-light hover:bg-gray-200"
              }`}
          >
            {skill.icon}
            <p className="mt-2 font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
