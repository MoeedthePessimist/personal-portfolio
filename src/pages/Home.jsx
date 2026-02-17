import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import CustomCursor from "../utils/CursorAnimation";

export default function Home() {
  return (
    <div className="font-sora scroll-smooth overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
