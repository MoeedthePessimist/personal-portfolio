import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import CustomCursor from "../utils/CursorAnimation";
import { Galaxy } from "../components/animations";

export default function Home() {
  return (
    <div className="font-sora scroll-smooth overflow-x-hidden">
      <CustomCursor />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </div>

      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects showAll={false} previewCount={3} />
      <Contact />
      <Footer />
    </div>
  );
}
