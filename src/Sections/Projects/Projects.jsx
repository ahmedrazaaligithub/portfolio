import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import QuizProject from "../../assets/images/react-quiz-project.png";
import TicketProject from "../../assets/images/ticket-app.png";
import NewHomeProject from "../../assets/images/new-home-project.png";
import OlxProject from "../../assets/images/olx-project.png";
import marsMind from "../../assets/images/mars-mind.png";
const projects = [
  {
    id: 1,
    title: "AI Learning App",
    description: "An AI-powered learning app that helps students learn more effectively.",
    img: 'https://www.whdevelopers.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdf5kb3aua%2Fimage%2Fupload%2Fv1737279065%2FAi_Learning_slk9hn.png&w=1920&q=75',
    tech: ["Tailwind Css","MERN Stack","TypeScript","AI"],
    demoLink: "https://www.readupyouth.org/",
    codeLink: "https://github.com/razashaikh99/tailwind-element-sigma-ui",
  },
  {
    id: 2,
    title: "Ore Design",
    description: "A design agency that helps businesses grow through creative design solutions.",
    img: 'https://www.whdevelopers.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdf5kb3aua%2Fimage%2Fupload%2Fv1737279383%2FOre_z7u5w9.png&w=1920&q=75',
    tech: ["Tailwind Css", "React",],
    demoLink: "https://ore-five.vercel.app/",
    codeLink: "https://github.com/razashaikh99/React-Quiz-App",
  },
  {
    id: 3,
    title: "Mars Mind",
    description: " One-on-One Learning Platform — where every learner deserves personalized guidance and attention.",
    img: marsMind,
    tech: ["Tailwind Css","MERN Stack"],
    demoLink: "https://mars-mind.vercel.app/",
    codeLink: "https://github.com/razashaikh99/Mockapi-Ticket-Grand-Assignment",
  },
  
];

export default function Projects() {
  const { theme } = useContext(ThemeContext);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section name="projects"
      id="projects"
      className={`pb-20 ${theme === "dark" ? "bg-bg-dark text-light" : "bg-bg-light text-dark"
        }`}
    >
      <div className="px-5 sm:px-10 md:px-20 lg:px-35">
        {/* Heading */}
        <div className="text-center py-10">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-blue">
            My Projects
          </h2>
          <p className={`mt-4 text-base ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            Showcasing ideas turned into reality ✨
          </p>
        </div>

        {/* Projects Grid */}
        <div data-aos="fade-up" className="pt-5 grid md:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform ${theme === "dark"
                ? "bg-dark border border-gray-700"
                : "bg-gray-100 border border-gray-300"
                }`}
            >
              {/* Project Image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />

              {/* Content */}
              <div className="px-6 py-8">
                <h3
                  className={`text-2xl font-semibold mb-3 ${theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 text-xs rounded-lg ${theme === "dark"
                          ? "bg-gray-800 text-gray-300"
                          : "bg-gray-200 text-gray-800"
                          }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue rounded-full hover:bg-blue-700 text-sm text-white hover:scale-105 transition"
                  >
                    <FiExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {/* <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className={`px-8 py-2 lg:py-3 rounded-full shadow font-semibold cursor-pointer hover:scale-105 transition ${theme === "dark"
              ? "bg-blue text-light hover:bg-blue-700"
              : "bg-blue text-white hover:bg-blue-700"
              }`}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div> */}
      </div>
    </section>
  );
}
