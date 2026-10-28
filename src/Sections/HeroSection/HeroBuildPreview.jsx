import { useRef } from "react";
import { gsap, useGSAP } from "../../lib/motion";

export default function HeroBuildPreview() {
  const root = useRef(null);
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(min-width: 900px) and (min-height: 520px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      const select = gsap.utils.selector(root);
      // CSS is the finished, readable default. Only this scoped timeline owns assembly transforms.
      const timeline = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        scrollTrigger: {
          id: "hero-build", trigger: root.current,
          start: "top top+=100", end: "bottom bottom-=24", scrub: 0.45,
          invalidateOnRefresh: true,
        },
      });
      timeline
        .fromTo(select(".build-wireframe"), { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.18 }, 0.22)
        .fromTo(select(".build-piece"), { autoAlpha: 0 }, { autoAlpha: 1, stagger: 0.035, duration: 0.14 }, 0.2)
        .fromTo(select(".build-nav"), { y: -65, x: -45, scale: 0.9 }, { y: 0, x: 0, scale: 1, duration: 0.42 }, 0.3)
        .fromTo(select(".build-copy"), { x: -95, y: 35, scale: 0.9 }, { x: 0, y: 0, scale: 1, duration: 0.45 }, 0.37)
        .fromTo(select(".build-art"), { x: 105, y: -25, rotation: 9, scale: 0.76 }, { x: 0, y: 0, rotation: 0, scale: 1, duration: 0.48 }, 0.4)
        .fromTo(select(".build-action"), { y: 70, x: -30, scale: 0.7 }, { y: 0, x: 0, scale: 1, duration: 0.38 }, 0.48)
        .fromTo(select(".build-strip"), { y: 85, scaleX: 0.7 }, { y: 0, scaleX: 1, duration: 0.34 }, 0.55)
        .fromTo(select(".build-finish"), { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: 0.25 }, 0.74)
        .fromTo(select(".build-progress-fill"), { scaleX: 0 }, { scaleX: 1, ease: "none", duration: 1 }, 0)
        .fromTo(select(".build-stage-1"), { opacity: 1 }, { opacity: 0.35, duration: 0.08 }, 0.25)
        .fromTo(select(".build-stage-2"), { opacity: 0.35 }, { opacity: 1, duration: 0.08 }, 0.25)
        .to(select(".build-stage-2"), { opacity: 0.35, duration: 0.08 }, 0.75)
        .fromTo(select(".build-stage-3"), { opacity: 0.35 }, { opacity: 1, duration: 0.08 }, 0.75);
    });
    return () => media.revert();
  }, { scope: root });

  return (
    <div className="hero-build" ref={root} role="img" aria-label="Frontend interface demonstration: a website wireframe assembles into a finished design as you scroll.">
      <div className="build-sticky">
        <div className="build-caption" aria-hidden="true">
          <span>From structure to experience</span><span>Interface study / 01</span>
        </div>
        <div className="build-browser" aria-hidden="true">
          <div className="build-chrome"><span className="build-dots"><i /><i /><i /></span><span>ahmed / interface studio</span><span>↗</span></div>
          <div className="build-viewport">
            <div className="build-wireframe">
              <div className="wire-nav"><b /><span /><span /><span /></div>
              <div className="wire-copy"><small /><b /><b /><span /><span /></div>
              <div className="wire-art"><i /><i /></div>
              <div className="wire-action"><span /><span /></div>
              <div className="wire-strip"><span /><span /><span /></div>
              <span className="wire-label">01 / Structure first</span>
            </div>
            <div className="build-nav build-piece"><strong>a<span> / studio</span></strong><span>Work &nbsp; &nbsp; Approach &nbsp; &nbsp; Contact ↗</span></div>
            <div className="build-copy build-piece"><span className="build-kicker">Independent digital craft</span><strong>Ideas, shaped<br />for the <em>web.</em></strong><p>Considered interfaces.<br />Built with purpose.</p></div>
            <div className="build-art build-piece"><div className="build-art-grid" /><span className="build-orbit orbit-one" /><span className="build-orbit orbit-two" /><span className="build-art-label">FORM / FUNCTION</span><b>↗</b></div>
            <div className="build-action build-piece"><span>Explore the work ↗</span><small>Design → Develop</small></div>
            <div className="build-strip build-piece"><span>01 / Thoughtful design</span><span>02 / Precise development</span><span>03 / Fluid interactions</span></div>
            <div className="build-finish"><span>● &nbsp; Ready for the web</span></div>
          </div>
        </div>
        <div className="build-stages" aria-hidden="true"><span className="build-stage-1">01 <b>Wireframe</b></span><span className="build-stage-2">02 <b>UI assembly</b></span><span className="build-stage-3">03 <b>Finished website</b></span></div>
        <div className="build-progress" aria-hidden="true"><span className="build-progress-fill" /></div>
      </div>
    </div>
  );
}
