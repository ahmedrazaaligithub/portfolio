import MyPhoto from "../../assets/images/optimized/graduate.jpg";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
const resume = import.meta.env.BASE_URL + "Muhammad_Ahmed_Raza_CV.pdf";
export default function AboutUs() {
  return (
    <section
      id="about"
      className="section shell"
      aria-labelledby="about-title"
      tabIndex={-1}
      data-section="about"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / About Me</p>
          <h2 id="about-title">A little context.</h2>
        </div>
        <p>Turning ideas into reality</p>
      </div>
      <div className="about-layout">
        <figure className="about-image" data-animate="about-image">
          <img
            src={MyPhoto}
            alt="Muhammad Ahmed Raza at graduation"
            width="640"
            height="800"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span>Muhammad Ahmed Raza</span>
            <span>Karachi, PK</span>
          </figcaption>
        </figure>
        <div className="about-copy" data-animate="about-copy">
          <h3>
            I’m Muhammad Ahmed Raza.
            <br />
            Developer by craft.
          </h3>
          <p>
            I'm a MERN Stack Developer with 2.5+ years of hands-on experience across React.js,
            Next.js, and Node.js — currently building scalable frontend
            applications at DigiTrends. I've previously worked with WH Developers and Techoid,
            delivering full-stack and frontend solutions from Figma design to
            production.
          </p>
          <dl className="details">
            <div className="detail">
              <dt>Email</dt>
              <dd>
                <a href="mailto:muhammadahmedraza16@gmail.com">
                  muhammadahmedraza16@gmail.com
                </a>
              </dd>
            </div>
            <div className="detail">
              <dt>Phone</dt>
              <dd>
                <a href="tel:+923121240034">+92 312-1240034</a>
              </dd>
            </div>
            <div className="detail">
              <dt>Elsewhere</dt>
              <dd>
                <a
                  href="https://github.com/ahmedrazaaligithub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub ↗
                </a>{" "}
                /{" "}
                <a
                  href="https://www.linkedin.com/in/muhammad-ahmed-raza-479b29278/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View LinkedIn ↗
                </a>
              </dd>
            </div>
            <div className="detail">
              <dt>Based in</dt>
              <dd>Karachi, Pakistan</dd>
            </div>
            <div className="detail">
              <dt>Education</dt>
              <dd>
                BS Computer Science (BSCS) — Iqra University,
                <span className="block muted">2026–Present (In Progress)</span>
              </dd>
            </div>
          </dl>
          <div className="resume-actions">
            <a
              className="button"
              data-magnetic
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              See My Resume <FiArrowUpRight aria-hidden="true" />
            </a>
            <a className="text-link" href={resume} download>
              Download PDF <FiDownload aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
