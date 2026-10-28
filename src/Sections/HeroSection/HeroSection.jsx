import { useRef } from "react";
import MyPhoto from "../../assets/images/optimized/black-dress.jpg";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import HeroBuildPreview from "./HeroBuildPreview";
import { gsap, useGSAP } from "../../lib/motion";

export default function HeroSection() {
  const hero = useRef(null);
  const hasEntered = useRef(false);

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add(
        {
          desktop: "(min-width: 701px)",
          mobile: "(max-width: 700px)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          if (context.conditions.reduced) return;
          const desktop = context.conditions.desktop;
          const select = gsap.utils.selector(hero);
          const element = hero.current;
          // Deep links and restored scroll positions should not replay an offscreen entrance.
          const nearTop =
            window.scrollY < element.offsetHeight * 0.15 &&
            (!location.hash ||
              location.hash === "#hero" ||
              location.hash === "#main-content");
          let revealOnFocus;
          if (!hasEntered.current && nearTop) {
            const entrance = gsap.timeline({
              defaults: { ease: "power4.out" },
              onComplete: () => {
                hasEntered.current = true;
              },
            });
            entrance
              .fromTo(
                select(".hero-word"),
                { yPercent: 112, rotation: desktop ? 4 : 0 },
                {
                  yPercent: 0,
                  rotation: 0,
                  duration: desktop ? 1.05 : 0.75,
                  stagger: 0.085,
                },
                0.12,
              )
              .fromTo(
                select(".hero-visual"),
                {
                  y: desktop ? 40 : 18,
                  scale: 0.94,
                  rotation: desktop ? -3 : 0,
                  clipPath: "inset(12% 5% 8% 5% round 40% 40% 3px 3px)",
                },
                {
                  y: 0,
                  scale: 1,
                  rotation: 0,
                  clipPath: "inset(0% 0% 0% 0% round 0px)",
                  duration: desktop ? 1.35 : 0.9,
                },
                0.08,
              )
              .fromTo(
                select(
                  ".hero-topline, .hero-role, .hero-copy, .hero-actions, .hero-bottom",
                ),
                { y: 16, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.07, duration: 0.7 },
                0.4,
              )
              .set(
                select(
                  ".hero-word, .hero-visual, .hero-topline, .hero-role, .hero-copy, .hero-actions, .hero-bottom",
                ),
                { clearProps: "transform,opacity,clipPath" },
              );
            // Keyboard navigation must never land on a control still hidden by its entrance.
            revealOnFocus = () => entrance.progress(1);
            element.addEventListener("focusin", revealOnFocus);
          }

          // Entrance and scrolling own different nested elements, so transforms never compete.
          const scroll = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              id: "hero-depth",
              trigger: element,
              start: "top top",
              end: () => `+=${element.querySelector(".hero-bottom").offsetTop + element.querySelector(".hero-bottom").offsetHeight}`,
              scrub: desktop ? 0.55 : true,
              invalidateOnRefresh: true,
            },
          });
          scroll
            .to(
              select(".hero-title-depth"),
              {
                y: () =>
                  desktop ? -Math.min(window.innerHeight * 0.16, 145) : -18,
                x: desktop ? -12 : 0,
                rotation: desktop ? -1.2 : 0,
              },
              0,
            )
            .to(
              select(".hero-portrait-depth"),
              {
                y: desktop ? -65 : -12,
                scale: desktop ? 0.94 : 1,
                rotation: desktop ? 2 : 0,
                transformOrigin: "50% 65%",
              },
              0,
            )
            .to(select(".hero-details-depth"), { y: desktop ? -38 : -8 }, 0);
          if (desktop) {
            scroll
              .fromTo(
                select(".hero-photo"),
                { scale: 1.035 },
                { scale: 1.1, yPercent: -3 },
                0,
              )
              .to(select(".photo-note"), { y: -22, rotation: -2 }, 0)
              .to(select(".hero-topline-depth"), { y: -50 }, 0);
          }
          return () => {
            if (revealOnFocus)
              element.removeEventListener("focusin", revealOnFocus);
          };
        },
      );
      return () => media.revert();
    },
    { scope: hero },
  );

  return (
    <section
      ref={hero}
      id="hero"
      className="hero shell"
      aria-labelledby="hero-title"
      tabIndex={-1}
      data-section="hero"
    >
      <div className="hero-topline-depth">
        <div className="hero-topline">
          <p className="eyebrow">👋 Hello there...</p>
          <p className="location">Karachi, Pakistan / MERN Stack Developer</p>
        </div>
      </div>
      <div className="hero-grid">
        <div className="hero-content" data-animate="hero-content">
          <div className="hero-title-depth">
            <h1 id="hero-title" aria-label="I’m Muhammad Ahmed Raza.">
              <span className="hero-title-line" aria-hidden="true">
                <span className="hero-word-mask">
                  <span className="hero-word">I’m</span>
                </span>{" "}
                <span className="hero-word-mask">
                  <span className="hero-word">Muhammad</span>
                </span>
              </span>
              <span className="hero-title-line hero-last" aria-hidden="true">
                <span className="hero-word-mask">
                  <span className="hero-word">Ahmed</span>
                </span>{" "}
                <span className="hero-word-mask">
                  <span className="hero-word">Raza.</span>
                </span>
              </span>
            </h1>
          </div>
          <div className="hero-details-depth">
            <p className="hero-role">React.js / Frontend Developer</p>
            <p className="hero-copy">
              Greetings! I am Muhammad Ahmed Raza, a MERN Stack Developer
              currently working as a Frontend Developer at DigiTrends, with previous
              part-time experience at Techoid, specializing in web applications using
              React.js, Next.js, and Node.js.
            </p>
            <div className="hero-actions">
              <a className="button" data-magnetic href="#projects">
                View Projects <FiArrowDown aria-hidden="true" />
              </a>
              <a className="text-link" href="#contact">
                Hire Me <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-portrait-depth">
          <figure className="hero-visual" data-animate="hero-visual">
            <div className="hero-photo-mask">
              <img
                className="hero-photo"
                src={MyPhoto}
                alt="Muhammad Ahmed Raza"
                width="800"
                height="1067"
                fetchPriority="high"
              />
            </div>
            <figcaption className="photo-note">
              React.js / Next.js / Node.js
              <br />
              From ideas to interfaces.
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="hero-bottom">
        <span>Frontend craft. Full-stack thinking.</span>
        <a href="#about">Scroll to explore ↓</a>
      </div>
      <HeroBuildPreview />
    </section>
  );
}
