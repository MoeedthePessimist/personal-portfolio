import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import CustomCursor from "../utils/CursorAnimation";
import { FloatingLines } from "../components/animations";

export default function Home() {
  return (
    <div className="font-sora scroll-smooth overflow-x-hidden">
      <CustomCursor />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <FloatingLines
          lineCount={18}
          colors={["#f59e0b", "#22d3ee", "#a78bfa"]}
          speed={0.4}
          thickness={1.2}
          opacity={0.18}
          curved={true}
          interactive={true}
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
