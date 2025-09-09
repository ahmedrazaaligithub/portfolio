import Navbar from '../Components/Navbar'
import HeroSection from '../Sections/HeroSection/HeroSection'
import AboutUs from '../Sections/AboutUs/AboutUs'
import MySkills from '../Sections/MySkills/MySkills'
import Projects from '../Sections/Projects/Projects'
import Contact from '../Sections/ContactUs/ContactUs'
import Footer from '../Components/Footer'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from '../Components/ScrollToTop'

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1200
    });
  }, [])

  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <MySkills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
