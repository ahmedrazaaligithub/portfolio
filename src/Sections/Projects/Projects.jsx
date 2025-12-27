import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FiExternalLink } from "react-icons/fi";
import marsMind from "../../assets/images/mars-mind.png";
import buyerism from "../../assets/images/buyerism.PNG";
import adresshelfer from "../../assets/images/adresshelfer.PNG";
import myspaces from "../../assets/images/myspaces.PNG";
import nexZero from "../../assets/images/oneleet.PNG";
import alwasiqa from "../../assets/images/alwasiqa.PNG";
import whdev from "../../assets/images/whdev.PNG";
import ore from "../../assets/images/ore.PNG";
import ailearning from "../../assets/images/ailearning.PNG";
import { Link } from "react-router-dom";
const projects = [
  {
    id: 1,
    title: "Adresshelfer",
    description:
      "Easily create and manage your address book with Adresshelfer.",
    img: adresshelfer,
    tech: ["Tailwind Css", "Next.js", "PostgreSQL"],
    demoLink: "https://adresshelfer.vercel.app/",
  },
  {
    id: 2,
    title: "Buyerism",
    description: "Read Articles, participate on Surveys and analyse Products.",
    img: buyerism,
    tech: ["Tailwind Css", "Material UI", "Next.js", "PostgreSQL"],
    demoLink: "https://www.buyerism.com/",
  },
  {
    id: 3,
    title: "AI Learning App",
    description:
      "An AI-powered learning app that helps childrens learn more effectively.",
    img: ailearning,
    tech: ["Tailwind Css", "MERN Stack", "TypeScript", "AI"],
    demoLink: "https://www.readupyouth.org/",
  },
  {
    id: 4,
    title: "WH Developers",
    description:
      "A design agency that helps businesses grow through creative design solutions.",
    img: whdev,
    tech: ["Tailwind Css", "React"],
    demoLink: "https://ore-five.vercel.app/",
  },
  {
    id: 5,
    title: "Ore Design",
    description:
      "A design agency that helps businesses grow through creative design solutions.",
    img: ore,
    tech: ["Tailwind Css", "React"],
    demoLink: "https://ore-five.vercel.app/",
  },
  {
    id: 6,
    title: "ALWASIQA PACKAGES",
    description:
      "offering expert guidance tailored to your adhesive tape needs.",
    img: alwasiqa,
    tech: ["Tailwind Css", "Next.js"],
    demoLink: "https://alwasiqa-packages-pvt-ltd.vercel.app/",
  },
  {
    id: 7,
    title: "My Spaces",
    description: "Buy or rent properties with no commisions.",
    img: myspaces,
    tech: ["Tailwind Css", "React"],
    demoLink: "https://myspaces.786.nl/",
  },

  {
    id: 9,
    title: "Mars Mind",
    description:
      " One-on-One Learning Platform — where every learner deserves personalized guidance and attention.",
    img: marsMind,
    tech: ["Tailwind Css", "MERN Stack"],
    demoLink: "https://mars-mind.vercel.app/",
  },
  {
    id: 8,
    title: "Nex Zero",
    description:
      "A Cyber security company that helps businesses grow through creative design solutions.",
    img: nexZero,
    tech: ["Tailwind Css", "React"],
    demoLink: "",
  },
];

export default function Projects() {
  const { theme } = useContext(ThemeContext);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      name="projects"
      id="projects"
      className={`pb-20 ${
        theme === "dark" ? "bg-bg-dark text-light" : "bg-bg-light text-dark"
      }`}
    >
      <div className="px-5 sm:px-10 md:px-20 lg:px-35">
        {/* Heading */}
        <div className="text-center py-10">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-blue">
            My Projects
          </h2>
          <p
            className={`mt-4 text-base ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Showcasing ideas turned into reality ✨
          </p>
        </div>

        {/* Projects Grid */}
        <div data-aos="fade-up" className="pt-5 grid md:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform ${
                theme === "dark"
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
                  className={`text-2xl font-semibold mb-3 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
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
                        className={`px-3 py-1 text-xs rounded-lg ${
                          theme === "dark"
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
                {project.demoLink && (
                  <div className="flex justify-between mt-4">
                    <Link
                      to={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue rounded-full hover:bg-blue text-sm text-white hover:scale-105 transition"
                    >
                      <FiExternalLink size={16} /> Live Demo
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className={`px-8 py-2 lg:py-3 rounded-full shadow font-semibold cursor-pointer hover:scale-105 transition ${
              theme === "dark"
                ? "bg-blue text-light hover:bg-blue"
                : "bg-blue text-white hover:bg-blue"
            }`}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
}
