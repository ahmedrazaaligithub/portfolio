import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import QuizProject from "../../assets/images/react-quiz-project.png";
import TicketProject from "../../assets/images/ticket-app.png";
import NewHomeProject from "../../assets/images/new-home-project.png";
import OlxProject from "../../assets/images/olx-project.png";
import SigmaElement from "../../assets/images/sigma-element-project.png";

const projects = [
  {
    id: 1,
    title: "Sigma Element UI",
    description: "A responsive UI for Sigma Element built with React and Tailwind CSS, featuring clean design and reusable components.",
    img: SigmaElement,
    tech: ["React", "Tailwind CSS", "AOS Animation"],
    demoLink: "https://tailwind-element-sigma-ui.vercel.app/",
    codeLink: "https://github.com/razashaikh99/tailwind-element-sigma-ui",
  },
  {
    id: 2,
    title: "React Quiz App",
    description: "A dynamic quiz application built with React where users can answer multiple-choice questions and get instant feedback.",
    img: QuizProject,
    tech: ["React", "Tailwind Css", "JavaScript"],
    demoLink: "https://react-quiz-app-kohl.vercel.app/",
    codeLink: "https://github.com/razashaikh99/React-Quiz-App",
  },
  {
    id: 3,
    title: "Ticket Crud App",
    description: "A ticket booking assignment using MockAPI as backend simulation. Users can create, view, update, and delete tickets seamlessly.",
    img: TicketProject,
    tech: ["React", "Bootstrap", "MockApi"],
    demoLink: "https://mockapi-ticket-grand-assignment.vercel.app/",
    codeLink: "https://github.com/razashaikh99/Mockapi-Ticket-Grand-Assignment",
  },
  {
    id: 4,
    title: "New Home - Real Estate",
    description: "A responsive real estate platform showcasing property listings.",
    img: NewHomeProject,
    tech: ["React", "Tailwind Css", "AOS Animation"],
    demoLink: "https://new-home-ui-tailwind.vercel.app/",
    codeLink: "https://github.com/razashaikh99/New-Home-UI-Tailwind",
  },
  {
    id: 5,
    title: "OLX Replica",
    description: "A frontend practice project built with Tailwind CSS replicating OLX design and layout.",
    img: OlxProject,
    tech: ["React", "Tailwind CSS"],
    demoLink: "https://react-tailwind-olx-replica.vercel.app/",
    codeLink: "https://github.com/razashaikh99/React-Tailwind-OLX-Replica",
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
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm hover:scale-105 transition ${theme === "dark"
                      ? "bg-white hover:bg-gray-300 text-bg-dark"
                      : "bg-bg-dark hover:bg-dark text-white"
                      }`}
                  >
                    <FaGithub size={16} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className={`px-8 py-2 lg:py-3 rounded-full shadow font-semibold cursor-pointer hover:scale-105 transition ${theme === "dark"
              ? "bg-blue text-light hover:bg-blue-700"
              : "bg-blue text-white hover:bg-blue-700"
              }`}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
}
