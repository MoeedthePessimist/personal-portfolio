// src/components/Projects.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Props:
//   showAll   {boolean}  — if true, renders every project; if false (default),
//                          renders only the first `previewCount` projects
//                          plus a "View All" button.
//   previewCount {number} — how many cards to show in preview mode (default 3)
// ─────────────────────────────────────────────────────────────────────────────

import React from "react";
import { TbArrowRight } from "react-icons/tb";
import { motion } from "framer-motion";
import { allProjects } from "../assets/projects-data";
import ProjectCard from "./ProjectCard";

export default function Projects({ showAll = false, previewCount = 3 }) {
  const visibleProjects = showAll
    ? allProjects
    : allProjects.slice(0, previewCount);

  return (
    <section className="px-5 lg:px-28 py-16 lg:py-24" id="projects">
      {/* ── Section header ──────────────────────────────────────────────── */}
      <motion.div
        className="text-center mb-16 lg:mb-24"
        initial={{ opacity: 0, y: -18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true }}
      >
        <p className="text-[#71717A] text-xs uppercase tracking-[0.35em] font-semibold mb-3">
          Selected Work
        </p>
        <h2 className="text-2xl lg:text-4xl text-white">
          My <span className="font-extrabold">Projects</span>
        </h2>
      </motion.div>

      {/* ── Cards ───────────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-16 lg:gap-28">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* ── View All button (preview mode only) ─────────────────────────── */}
      {!showAll && (
        <motion.div
          className="flex justify-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <a
            href="/projects"
            className="group relative inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold text-white border border-[#2a2a2a] rounded-full overflow-hidden transition-colors duration-300 hover:border-white/30"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300" />
            View All Projects
            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
              <TbArrowRight size={13} />
            </span>
          </a>
        </motion.div>
      )}
    </section>
  );
}
