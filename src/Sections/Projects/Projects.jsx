import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiPlus, FiMinus } from "react-icons/fi";
import marsMind from "../../assets/images/optimized/mars-mind.jpg";
import buyerism from "../../assets/images/optimized/buyerism.jpg";
import adresshelfer from "../../assets/images/optimized/adresshelfer.jpg";
import myspaces from "../../assets/images/optimized/myspaces.jpg";
import nexZero from "../../assets/images/oneleet.PNG";
import alwasiqa from "../../assets/images/optimized/alwasiqa.jpg";
import whdev from "../../assets/images/optimized/whdev.jpg";
import ore from "../../assets/images/optimized/ore.jpg";
import ailearning from "../../assets/images/optimized/ailearning.jpg";
import qrinsight from "../../assets/images/optimized/qi-1.jpg";
import { gsap, useGSAP, ScrollTrigger } from "../../lib/motion";

const projects = [
  {
    id: 10,
    title: "QR Insight",
    description: "A business QR-code generation and analytics platform offering multiple packages and real-time scan tracking.",
    img: qrinsight,
    tech: ["Tailwind Css", "Next.js", "PostgreSQL"],
    demoLink: "https://www.qrinsight.co/",
  },
  {
    id: 1,
    title: "Adresshelfer",
    description: "A platform for managing address-related workflows.",
    img: adresshelfer,
    tech: ["Tailwind Css", "Next.js", "PostgreSQL"],
    demoLink: "https://adresshelfer.vercel.app/",
    demoUnavailable: true,
  },
  {
    id: 2,
    title: "Buyerism",
    description: "A platform for reading articles, participating in surveys, and analysing products.",
    img: buyerism,
    tech: ["Tailwind Css", "Material UI", "Next.js", "PostgreSQL"],
    demoLink: "https://www.buyerism.com/",
  },
  {
    id: 3,
    title: "AI Learning App",
    description: "An AI-powered learning application for children.",
    img: ailearning,
    tech: ["Tailwind Css", "MERN Stack", "TypeScript", "AI"],
    demoLink: "https://www.readupyouth.org/",
  },
  {
    id: 4,
    title: "WH Developers",
    description: "A website for a design agency offering creative design services.",
    img: whdev,
    tech: ["Tailwind Css", "React"],
    demoLink: "https://www.whdevelopers.com/",
    demoUnavailable: true,
  },
  {
    id: 5,
    title: "Ore Design",
    description: "A design agency website presenting creative design services.",
    img: ore,
    tech: ["Tailwind Css", "React"],
    demoLink: "https://ore-five.vercel.app/",
    demoUnavailable: true,
  },
  {
    id: 6,
    title: "ALWASIQA PACKAGES",
    description: "A website offering guidance on adhesive tape needs.",
    img: alwasiqa,
    tech: ["Tailwind Css", "Next.js"],
    demoLink: "https://alwasiqa-packages-pvt-ltd.vercel.app/",
    demoUnavailable: true,
  },
  {
    id: 7,
    title: "My Spaces",
    description: "A platform for buying or renting properties without commissions.",
    img: myspaces,
    tech: ["Tailwind Css", "React"],
    demoLink: "https://myspaces.786.nl/",
  },

  {
    id: 9,
    title: "Mars Mind",
    description: "A one-on-one learning platform focused on personalised guidance and attention.",
    img: marsMind,
    tech: ["Tailwind Css", "MERN Stack"],
    demoLink: "https://mars-mind.vercel.app/",
  },
  {
    id: 8,
    title: "Nex Zero",
    description: "A website for a cybersecurity company.",
    img: nexZero,
    tech: ["Tailwind Css", "React"],
    demoLink: "",
  },
];

function ProjectPreview({ project, story = false }) {
  const hasLiveDemo = Boolean(project.demoLink) && !project.demoUnavailable;
  const Preview = hasLiveDemo ? "a" : "div";
  return (
    <Preview
      className={story ? "story-image-window" : "project-image"}
      data-depth-surface
      data-project-preview={hasLiveDemo ? true : undefined}
      href={hasLiveDemo ? project.demoLink : undefined}
      target={hasLiveDemo ? "_blank" : undefined}
      rel={hasLiveDemo ? "noopener noreferrer" : undefined}
      aria-label={
        hasLiveDemo
          ? "View " + project.title + " (opens in a new tab)"
          : undefined
      }
    >
      <div className="project-pointer-depth">
        <img
          src={project.img}
          alt={project.title + " website preview"}
          width={story ? 1600 : 1200}
          height={story ? 900 : 750}
          loading="lazy"
          decoding="async"
        />
      </div>
    </Preview>
  );
}

function ProjectDetails({ project, index, story = false }) {
  return (
    <>
      <div className={story ? "story-copy-mask" : "project-meta"}>
        <div className={story ? "story-copy-inner" : "project-title"}>
          <span className="project-number">
            /{String(index + 1).padStart(2, "0")}
          </span>
          <h3 id={(story ? "story-title-" : "project-") + project.id}>
            {project.title}
          </h3>
        </div>
      </div>
      <div className={story ? "story-copy-mask" : ""}>
        <div className={story ? "story-copy-inner" : ""}>
          <p className="project-description">{project.description}</p>
          <ul className="project-tags" aria-label="Technologies">
            {project.tech.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          {project.demoLink && !project.demoUnavailable && (
            <a
              className="text-link project-demo"
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                "Live Demo: " + project.title + " (opens in a new tab)"
              }
            >
              Live Demo <FiArrowUpRight aria-hidden="true" />
            </a>
          )}
          {project.demoUnavailable && (
            <p className="project-demo muted text-xs">
              Live Demo Temporarily Unavailable
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default function Projects() {
  const section = useRef(null);
  const story = useRef(null);
  const toggle = useRef(null);
  const [showAll, setShowAll] = useState(false);
  const collapsePending = useRef(false);

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add(
        // Use available layout space, not primary input type: hybrid laptops can
        // report a coarse pointer even when the user scrolls with a mouse.
        "(min-width: 900px) and (min-height: 520px) and (prefers-reduced-motion: no-preference)",
        () => {
          const stage = story.current;
          const panels = [...stage.querySelectorAll(".story-panel")];
          const visuals = panels.map((panel) =>
            panel.querySelector(".story-visual"),
          );
          const images = panels.map((panel) => panel.querySelector("img"));
          const copies = panels.map((panel) =>
            panel.querySelectorAll(".story-copy-inner"),
          );
          const counter = stage.querySelector(".story-current");
          let current = -1;
          stage.classList.add("is-cinematic");
          const activate = (index) => {
            if (current === index) return;
            // A focused demo link must not disappear underneath keyboard focus.
            if (
              current >= 0 &&
              panels[current].contains(document.activeElement)
            )
              stage.querySelector(".story-skip").focus({ preventScroll: true });
            current = index;
            panels.forEach((panel, position) => {
              panel.inert = position !== index;
              panel.setAttribute("aria-hidden", String(position !== index));
              panel.dataset.active = String(position === index);
            });
            counter.textContent = String(index + 1).padStart(2, "0");
          };
          gsap.set(visuals.slice(1), {
            clipPath: "inset(100% 0% 0% 0%)",
            yPercent: 10,
            rotationY: -5,
            rotationZ: 1.5,
            scale: 1.07,
          });
          copies.slice(1).forEach((copy) => gsap.set(copy, { yPercent: 110 }));
          activate(0);
          const sequence = gsap.timeline({
            defaults: { ease: "power2.inOut" },
            onUpdate: () =>
              activate(sequence.time() < 1 ? 0 : sequence.time() < 2.5 ? 1 : 2),
            scrollTrigger: {
              id: "projects-story",
              trigger: stage,
              start: () =>
                "top " +
                ((document.querySelector(".navbar")?.offsetHeight || 88) + 16),
              end: () => "+=" + Math.min(window.innerHeight * 1.9, 1900),
              pin: true,
              scrub: 0.45,
              invalidateOnRefresh: true,
              anticipatePin: 1,
              onRefresh: (trigger) => {
                const time = trigger.animation.time();
                activate(time < 1 ? 0 : time < 2.5 ? 1 : 2);
              },
            },
          });
          for (let index = 1; index < panels.length; index++) {
            const at = 0.45 + (index - 1) * 1.5;
            sequence
              .to(
                visuals[index - 1],
                {
                  scale: 0.91,
                  rotationY: 5,
                  rotationZ: -1.5,
                  yPercent: -5,
                  duration: 1,
                },
                at,
              )
              .to(images[index - 1], { scale: 1.045, duration: 1 }, at)
              .to(
                visuals[index],
                {
                  clipPath: "inset(0% 0% 0% 0%)",
                  yPercent: 0,
                  rotationY: 0,
                  rotationZ: 0,
                  scale: 1,
                  duration: 1,
                },
                at,
              )
              .to(
                copies[index - 1],
                { yPercent: -115, duration: 0.45, stagger: 0.035 },
                at,
              )
              .to(
                copies[index],
                { yPercent: 0, duration: 0.65, stagger: 0.035 },
                at + 0.2,
              );
          }
          sequence.to({}, { duration: 0.45 });
          sequence.fromTo(
            stage.querySelector(".story-progress-fill"),
            { scaleX: 0 },
            { scaleX: 1, duration: sequence.duration(), ease: "none" },
            0,
          );
          return () => {
            stage.classList.remove("is-cinematic");
            panels.forEach((panel) => {
              panel.inert = false;
              panel.removeAttribute("aria-hidden");
              delete panel.dataset.active;
            });
            counter.textContent = "01";
          };
        },
      );
      return () => media.revert();
    },
    { scope: section },
  );

  // The page foundation also observes image loads and main size changes.
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      if (collapsePending.current) {
        collapsePending.current = false;
        toggle.current?.focus({ preventScroll: true });
        toggle.current?.scrollIntoView({
          block: "center",
          behavior: "instant",
        });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [showAll]);

  const browseAll = () => setShowAll(true);
  const toggleProjects = () => {
    collapsePending.current = showAll;
    setShowAll(!showAll);
  };
  return (
    <section
      ref={section}
      id="projects"
      className="section shell"
      aria-labelledby="projects-title"
      tabIndex={-1}
      data-section="projects"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">04 / My Projects</p>
          <h2 id="projects-title">Ideas, made real.</h2>
        </div>
        <div className="projects-intro">
          <p>Showcasing ideas turned into reality</p>
          <a
            className="text-link"
            href="#project-collection"
            onClick={browseAll}
          >
            Browse all 10 projects <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
      <div ref={story} className="project-story" aria-label="Selected projects">
        <div className="story-toolbar">
          <p className="eyebrow">
            Selected work{" "}
            <span className="story-position" aria-hidden="true">
              <span className="story-current">01</span> / 03
            </span>
          </p>
          <a
            className="text-link story-skip"
            href="#project-collection"
            onClick={browseAll}
          >
            Browse all projects ↓
          </a>
        </div>
        <div className="story-panels">
          {projects.slice(0, 3).map((project, index) => (
            <article
              className="story-panel"
              key={project.id}
              aria-labelledby={"story-title-" + project.id}
            >
              <div className="story-info">
                <ProjectDetails project={project} index={index} story />
              </div>
              <div className="story-visual">
                <ProjectPreview project={project} story />
                <span className="story-image-caption" aria-hidden="true">
                  {project.title} / {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </article>
          ))}
        </div>
        <div className="story-progress" aria-hidden="true">
          <span className="story-progress-fill" />
        </div>
        <p className="story-scroll-note" aria-hidden="true">
          Scroll to discover / three projects, one journey
        </p>
      </div>
      <div
        id="project-collection"
        className="project-collection"
        tabIndex={-1}
        aria-labelledby="collection-title"
      >
        <div className="collection-heading">
          <div>
            <p className="eyebrow">The complete collection</p>
            <h3 id="collection-title">More to explore.</h3>
          </div>
          <p className="muted">
            {showAll ? "All 10 projects" : "10 projects / 3 featured above"}
          </p>
        </div>
        <div id="project-list" className="project-list" hidden={!showAll}>
          {showAll &&
            projects.map((project, index) => (
              <article
                className="project"
                key={project.id}
                aria-labelledby={"project-" + project.id}
              >
                <ProjectPreview project={project} />
                <ProjectDetails project={project} index={index} />
              </article>
            ))}
        </div>
        <div className="projects-toggle">
          <button
            ref={toggle}
            className="button button-outline"
            type="button"
            aria-expanded={showAll}
            aria-controls="project-list"
            onClick={toggleProjects}
          >
            {showAll ? "Show Less" : "Show More"}{" "}
            {showAll ? (
              <FiMinus aria-hidden="true" />
            ) : (
              <FiPlus aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
