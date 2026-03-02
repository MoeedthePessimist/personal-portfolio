// src/pages/ProjectsPage.jsx
// ─────────────────────────────────────────────────────────────────────────────
// The /projects route. Wraps the Projects component in a full page layout
// with a hero header, navbar, footer, and custom cursor.
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";
import { TbArrowLeft } from "react-icons/tb";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../utils/CursorAnimation";
import Projects from "../components/Projects";
import { allProjects } from "../assets/projects-data";
import { LiquidEther } from "../components/animations";

export default function ProjectsPage() {
  return (
    <div className="font-sora bg-black min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          color0="#5227FF"
          color1="#FF9FFC"
          color2="#B19EEF"
        />
      </div>

      <CustomCursor />
      <Navbar />

      {/* ── Hero header ───────────────────────────────────────────────── */}
      <header className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 px-5 lg:px-28 overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[340px] rounded-full pointer-events-none blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse, rgba(255,255,255,0.06) 0%, transparent 70%)",
          }}
        />

        {/* Back link */}
        <motion.a
          href="/"
          className="inline-flex items-center gap-2 text-[#71717A] hover:text-white text-sm font-medium mb-10 transition-colors group"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-1">
            <TbArrowLeft size={16} />
          </span>
          Back Home
        </motion.a>

        {/* Eyebrow */}
        <motion.p
          className="text-[#71717A] text-xs uppercase tracking-[0.35em] font-semibold mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Complete Portfolio
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="text-white text-4xl lg:text-7xl font-extrabold leading-tight mb-5"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, type: "spring", stiffness: 80 }}
        >
          All{" "}
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "2px white" }}
          >
            Projects
          </span>
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          className="text-[#71717A] text-base lg:text-lg max-w-xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A curated collection of products, platforms, and experiences I've
          built — from logistics systems to edtech platforms.
        </motion.p>

        {/* Count pill */}
        <motion.div
          className="mt-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#2a2a2a]"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-[#888] text-sm font-medium">
            {allProjects.length} Projects
          </span>
        </motion.div>

        {/* Divider */}
        <div className="mt-14 h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />
      </header>

      {/* ── All projects via shared component ─────────────────────────── */}
      <Projects showAll />

      <Footer />
    </div>
  );
}
