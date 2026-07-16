import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaBriefcase, FaCheckCircle } from "react-icons/fa";

export default function Experience() {
  const { theme } = useContext(ThemeContext);

  const experiences = [
    {
      role: "Frontend Developer",
      company: "DigiTrends",
      duration: "Mar 2026 - Present",
      points: [
        "Building scalable React.js applications",
        "Developing reusable UI components",
        "Integrating REST APIs",
        "Working with Tailwind CSS and Git",
      ],
    },
    {
      role: "Frontend Developer",
      company: "WH Developers",
      duration: "Jan 2025 - Jan  2026",
      points: [
        "Built responsive business websites",
        "Converted Figma designs into production",
        "Worked with React.js and Next.js",
        "Collaborated with design and backend teams",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Techoid",
      duration: "Mar 2024 - Dec 2024",
      points: [
        "Developed responsive React.js/Next.js applications",
        "Collaborated with teams to deliver user-friendly solutions",
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "Techoid",
      duration: "Dec 2023 - Feb 2024",
      points: [
        "Assisted in building responsive UI components",
        "Exposure to the React.js development workflow",
      ],
    },
    {
      role: "MERN Stack Trainee",
      company: "Saylani Mass IT Training",
      duration: "2023 - 2024",
      points: [
        "Learned MongoDB, Express.js, React.js and Node.js",
        "Built full-stack projects",
        "Worked with REST APIs",
        "Practiced Git & GitHub workflows",
      ],
    },
  ];

  const stats = [
    { value: "2.5+", label: "Years Experience" },
    { value: "8+", label: "Projects Completed" },
    { value: "10+", label: "Technologies" },
    { value: "100%", label: "Responsive Design" },
  ];

  return (
    <section
      name="experience"
      className={`px-5 sm:px-10 lg:px-35 py-20 ${
        theme === "dark"
          ? "bg-dark text-light"
          : "bg-light text-dark"
      }`}
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-blue">
          Experience
        </h2>
        <p
          className={`mt-4 ${
            theme === "dark"
              ? "text-gray-400"
              : "text-gray-600"
          }`}
        >
          My professional journey so far ✨
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 text-center shadow-lg ${
              theme === "dark"
                ? "bg-bg-dark"
                : "bg-bg-light"
            }`}
          >
            <h3 className="text-3xl font-bold text-blue">
              {item.value}
            </h3>
            <p className="mt-2 text-sm">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-blue transform md:-translate-x-1/2"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            className={`relative flex items-center mb-12 ${
              index % 2 === 0
                ? "md:justify-start"
                : "md:justify-end"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-blue flex items-center justify-center transform -translate-x-1/2 z-10">
              <FaBriefcase className="text-white text-sm" />
            </div>

            {/* Card */}
            <div
              className={`ml-12 md:ml-0 md:w-[45%] rounded-2xl p-6 shadow-lg border ${
                theme === "dark"
                  ? "bg-bg-dark border-gray-700"
                  : "bg-bg-light border-gray-300"
              }`}
            >
              <h3 className="text-xl font-bold">{exp.role}</h3>

              <p className="text-blue font-semibold mt-1">
                {exp.company}
              </p>

              <p
                className={`text-sm mt-1 mb-4 ${
                  theme === "dark"
                    ? "text-gray-400"
                    : "text-gray-500"
                }`}
              >
                {exp.duration}
              </p>

              <ul className="space-y-2">
                {exp.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2"
                  >
                    <FaCheckCircle
                      className="text-blue mt-1"
                      size={14}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
