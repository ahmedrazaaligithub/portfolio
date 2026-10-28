import Navbar from "../Components/Navbar";
import HeroSection from "../Sections/HeroSection/HeroSection";
import AboutUs from "../Sections/AboutUs/AboutUs";
import Experience from "../Sections/Experience/Experience";
import MySkills from "../Sections/MySkills/MySkills";
import Projects from "../Sections/Projects/Projects";
import Contact from "../Sections/ContactUs/ContactUs";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import PointerInteractions from "../Components/PointerInteractions";
import useMotionFoundation from "../hooks/useMotionFoundation";

export default function Home() {
  useMotionFoundation();
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <AboutUs />
        <Experience />
        <MySkills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <PointerInteractions />
    </>
  );
}
