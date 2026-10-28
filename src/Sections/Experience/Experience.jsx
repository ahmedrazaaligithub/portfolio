import { useRef } from "react";
import { gsap, useGSAP } from "../../lib/motion";

export default function Experience() {
  const section = useRef(null);
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
      company: "Techoid",
      duration: "Jan 2026 - Aug 2026 (Part-time)",
      points: [
        "Building scalable React.js applications",
        "Developing reusable UI components",
        "Integrating REST APIs",
        "Working with Tailwind CSS and Git",
      ],
    },
    {
      role: "MERN Stack Developer",
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
      duration: "Feb 2024 - Dec 2024",
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
      duration: "Jan 2023 - Dec 2023",
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

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add(
        {
          desktop: "(min-width: 900px)",
          mobile: "(max-width: 899px)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          if (context.conditions.reduced) return;
          const root = section.current;
          const list = root.querySelector(".experience-list");
          const rows = [...list.querySelectorAll(".experience-row")];
          const desktop = context.conditions.desktop;
          const company = root.querySelector(".career-current-company");
          const role = root.querySelector(".career-current-role");
          const date = root.querySelector(".career-current-date");
          const counter = root.querySelector(".career-current-number");
          let active = -1;
          root.classList.add("career-motion");
          const updateActive = () => {
            const readingLine = window.innerHeight * 0.48;
            let next = 0;
            rows.forEach((row, index) => {
              if (row.getBoundingClientRect().top <= readingLine) next = index;
            });
            if (next === active) return;
            active = next;
            rows.forEach((row, index) => {
              row.dataset.active = String(index === next);
            });
            company.textContent = experiences[next].company;
            role.textContent = experiences[next].role;
            date.textContent = experiences[next].duration;
            counter.textContent = String(next + 1).padStart(2, "0");
          };
          updateActive();
          const progress = gsap.timeline({
            scrollTrigger: {
              id: "career-progress",
              trigger: list,
              start: "top 48%",
              end: "bottom 48%",
              scrub: true,
              invalidateOnRefresh: true,
              onUpdate: updateActive,
              onRefresh: updateActive,
            },
          });
          progress
            .fromTo(
              root.querySelector(".career-rail-fill"),
              { scaleY: 0 },
              { scaleY: 1, ease: "none", duration: 1 },
              0,
            )
            .fromTo(
              root.querySelector(".career-index-fill"),
              { scaleX: 0 },
              { scaleX: 1, ease: "none", duration: 1 },
              0,
            );
          rows.forEach((row, index) => {
            gsap
              .timeline({
                scrollTrigger: {
                  id: "career-chapter-" + index,
                  trigger: row,
                  start: "top 95%",
                  end: "top 40%",
                  scrub: desktop ? 0.35 : true,
                  invalidateOnRefresh: true,
                },
              })
              .fromTo(
                row.querySelector(".career-heading-depth"),
                { x: desktop ? 20 : 0, y: desktop ? 24 : 8 },
                { x: 0, y: 0, ease: "power2.out", duration: 1 },
                0,
              )
              .fromTo(
                row.querySelectorAll(".career-point-depth"),
                { x: desktop ? 12 : 0, y: desktop ? 18 : 6 },
                {
                  x: 0,
                  y: 0,
                  stagger: 0.08,
                  duration: 0.8,
                  ease: "power2.out",
                },
                0.1,
              );
          });
          return () => {
            root.classList.remove("career-motion");
            rows.forEach((row) => {
              delete row.dataset.active;
            });
            company.textContent = experiences[0].company;
            role.textContent = experiences[0].role;
            date.textContent = experiences[0].duration;
            counter.textContent = "01";
          };
        },
      );
      return () => media.revert();
    },
    { scope: section },
  );

  return (
    <section
      ref={section}
      id="experience"
      className="section shell"
      aria-labelledby="experience-title"
      tabIndex={-1}
      data-section="experience"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 / Experience</p>
          <h2 id="experience-title">
            Built along
            <br />
            the way.
          </h2>
        </div>
        <p>My professional journey so far</p>
      </div>
      <div className="stats">
        {stats.map((item) => (
          <div className="stat" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <div className="career-layout">
        <aside className="career-index" aria-hidden="true">
          <p className="eyebrow">Career chapters / 06</p>
          <p className="career-index-title">
            Learning.
            <br />
            Building.
            <br />
            Growing.
          </p>
          <div className="career-current">
            <p className="career-counter">
              <span className="career-current-number">01</span>
              <span> / 06</span>
            </p>
            <p className="career-current-company">{experiences[0].company}</p>
            <p className="career-current-role">{experiences[0].role}</p>
            <p className="career-current-date">{experiences[0].duration}</p>
            <div className="career-index-progress">
              <span className="career-index-fill" />
            </div>
          </div>
        </aside>
        <div className="career-track">
          <div className="career-rail" aria-hidden="true">
            <span className="career-rail-fill" />
          </div>
          <ol className="experience-list">
            {experiences.map((exp, index) => (
              <li
                className="experience-row"
                key={exp.company + exp.duration}
                data-animate="experience-row"
              >
                <span className="career-dot" aria-hidden="true" />
                <p className="experience-date">
                  <span className="career-chapter-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {exp.duration}
                </p>
                <div className="career-heading-depth">
                  <h3>{exp.company}</h3>
                  <p className="experience-role">{exp.role}</p>
                </div>
                <ul className="experience-points">
                  {exp.points.map((point) => (
                    <li key={point}>
                      <span className="career-point-depth">{point}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
