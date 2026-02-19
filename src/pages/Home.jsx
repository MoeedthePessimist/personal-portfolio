// src/pages/Home.jsx
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import CustomCursor from "../utils/CursorAnimation";
import Particles from "../components/animations/Particles";
import GridPattern from "../components/animations/GridPattern";

export default function Home() {
  return (
    <div className="font-sora scroll-smooth overflow-x-hidden">
      <CustomCursor />
      <Navbar />

      {/* ── Hero: Particles background ─────────────────────────────────── */}
      <div className="relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Particles
            count={90}
            color="#ffffff"
            speed={0.3}
            opacity={0.25}
            connectDistance={110}
            interactive={true}
          />
        </div>
        <div className="relative z-10">
          <Hero />
        </div>
      </div>

      {/* ── Skills: Grid Pattern background ────────────────────────────── */}
      <div className="relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <GridPattern
            cellSize={48}
            lineColor="rgba(255,255,255,0.04)"
            pulseColor="rgba(34,211,238,0.18)"
            pulseCount={6}
            speed={0.5}
          />
        </div>
        <div className="relative z-10">
          <Skills />
        </div>
      </div>

      {/* ── About: subtle particles ─────────────────────────────────────── */}
      <div className="relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Particles
            count={40}
            color="#f59e0b"
            speed={0.2}
            opacity={0.15}
            connectDistance={80}
            interactive={false}
          />
        </div>
        <div className="relative z-10">
          <About />
        </div>
      </div>

      {/* ── Projects: grid pattern ──────────────────────────────────────── */}
      <div className="relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <GridPattern
            cellSize={60}
            lineColor="rgba(255,255,255,0.03)"
            pulseColor="rgba(168,85,247,0.15)"
            pulseCount={4}
            speed={0.4}
          />
        </div>
        <div className="relative z-10">
          <Projects showAll={false} previewCount={3} />
        </div>
      </div>

      {/* ── Contact: particles ──────────────────────────────────────────── */}
      <div className="relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Particles
            count={50}
            color="#22d3ee"
            speed={0.25}
            opacity={0.18}
            connectDistance={90}
            interactive={true}
          />
        </div>
        <div className="relative z-10">
          <Contact />
        </div>
      </div>

      <Footer />
    </div>
  );
}
