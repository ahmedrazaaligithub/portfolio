import { FaBootstrap, FaNode, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAntdesign, SiExpress, SiMongodb, SiNextdotjs } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "../../lib/motion";

export default function MySkills() {
  const section = useRef(null);
  const [selected, setSelected] = useState("React.js");
  const skills = [
    { name: "CSS", icon: <IoLogoCss3 size={44} /> },
    { name: "Bootstrap", icon: <FaBootstrap size={44} /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill size={44} /> },
    { name: "JavaScript", icon: <IoLogoJavascript size={44} /> },
    { name: "Ant Design", icon: <SiAntdesign size={44} /> },
    { name: "Firebase", icon: <IoLogoFirebase size={44} /> },
    { name: "React.js", icon: <FaReact size={44} /> },
    { name: "Next.js", icon: <SiNextdotjs size={44} /> },
    { name: "MongoDB", icon: <SiMongodb size={44} /> },
    { name: "Node.js", icon: <FaNode size={44} /> },
    { name: "Express.js", icon: <SiExpress size={44} /> },
    { name: "GitHub", icon: <BsGithub size={44} /> },
  ];

  const groups = [
    { title: "Interface", indexes: [0, 1, 2, 4] },
    { title: "Application", indexes: [3, 6, 7, 5] },
    { title: "Backend & workflow", indexes: [8, 9, 10, 11] },
  ];
  const focusedSkill = skills.find((skill) => skill.name === selected);

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
          const desktop = context.conditions.desktop;
          root.querySelectorAll(".skill-band").forEach((band, index) => {
            const sequence = gsap.timeline({
              scrollTrigger: {
                id: "skills-band-" + index,
                trigger: band,
                start: "top 95%",
                end: "top 42%",
                scrub: desktop ? 0.35 : true,
                invalidateOnRefresh: true,
              },
            });
            sequence
              .fromTo(
                band.querySelector(".skill-band-rule"),
                { scaleX: 0 },
                { scaleX: 1, duration: 1.2, ease: "none" },
                0,
              )
              .fromTo(
                band.querySelectorAll(".skill-motion"),
                {
                  y: desktop ? 34 : 10,
                  x: desktop ? 10 : 0,
                  rotation: desktop ? 1.5 : 0,
                },
                {
                  y: 0,
                  x: 0,
                  rotation: 0,
                  stagger: 0.12,
                  duration: 0.85,
                  ease: "power3.out",
                },
                0.05,
              )
              .fromTo(
                band.querySelector(".skill-band-meta"),
                { y: desktop ? 12 : 4 },
                { y: 0, duration: 0.8, ease: "none" },
                0,
              );
          });
        },
      );
      return () => media.revert();
    },
    { scope: section },
  );

  return (
    <section
      ref={section}
      id="skills"
      className="section shell"
      aria-labelledby="skills-title"
      tabIndex={-1}
      data-section="skills"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / My Skills</p>
          <h2 id="skills-title">
            The working
            <br />
            toolkit.
          </h2>
        </div>
        <p>Constantly learning, building, and growing</p>
      </div>
      <div className="technology-layout">
        <div className="skills-spotlight">
          <p className="eyebrow">Technology focus</p>
          <span className="spotlight-icon" aria-hidden="true">
            {focusedSkill.icon}
          </span>
          <p
            className="spotlight-name"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="sr-only">Technology focus: </span>
            {focusedSkill.name}
          </p>
          <span className="spotlight-count">
            12 technologies / 03 disciplines
          </span>
        </div>
        <div className="skills-showcase">
          {groups.map((group, groupIndex) => (
            <section
              key={group.title}
              className="skill-band"
              aria-labelledby={"skill-group-" + groupIndex}
            >
              <span className="skill-band-rule" aria-hidden="true" />
              <div className="skill-band-meta">
                <span aria-hidden="true">
                  /{String(groupIndex + 1).padStart(2, "0")}
                </span>
                <h3 id={"skill-group-" + groupIndex}>{group.title}</h3>
              </div>
              <ul className="skill-band-list">
                {group.indexes.map((index) => {
                  const skill = skills[index];
                  return (
                    <li key={skill.name} className="skill">
                      <div className="skill-reveal-mask">
                        <div className="skill-motion">
                          <button
                            type="button"
                            className="skill-button"
                            aria-pressed={selected === skill.name}
                            onClick={() => setSelected(skill.name)}
                          >
                            <span className="skill-hover-layer">
                              <span className="skill-icon" aria-hidden="true">
                                {skill.icon}
                              </span>
                              <span className="skill-name">{skill.name}</span>
                              <span
                                className="skill-select-mark"
                                aria-hidden="true"
                              >
                                ↗
                              </span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
