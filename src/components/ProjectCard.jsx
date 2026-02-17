// src/components/ProjectCard.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Props:
//   project  {object}  — a single project entry from projects-data.js
//   index    {number}  — position in the list (drives alternating layout + stagger)
// ─────────────────────────────────────────────────────────────────────────────

import React, { useRef } from "react";
import { TbExternalLink } from "react-icons/tb";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// ── 3-D tilt wrapper ─────────────────────────────────────────────────────────
function TiltCard({ children, className }) {
  const ref = useRef(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [7, -7]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 220,
    damping: 22,
  });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;
  const slideDir = isEven ? -24 : 24;

  return (
    <motion.article
      initial={{ opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 14,
        delay: index * 0.08,
      }}
      viewport={{ once: true, amount: 0.12 }}
      className={`flex flex-col group ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-0`}
    >
      {/* ── Image / colour panel ─────────────────────────────────────────── */}
      <TiltCard className="lg:w-[55%] relative overflow-hidden rounded-2xl">
        {/* Radial colour wash */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `radial-gradient(ellipse at 35% 45%, ${project.accentBg} 0%, #000 72%)`,
            opacity: 0.75,
          }}
        />

        {/* Noise grain */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            opacity: 0.045,
            mixBlendMode: "overlay",
          }}
        />

        <div className="relative z-20 p-6 lg:p-10 min-h-[300px] lg:min-h-[430px] flex flex-col justify-between">
          {/* Ghost number + tags row */}
          <div className="flex justify-between items-start">
            <span
              className="font-black text-8xl lg:text-[9rem] leading-none select-none"
              style={{ color: project.accentText, opacity: 0.1 }}
            >
              {String(project.id).padStart(2, "0")}
            </span>

            <div className="flex flex-wrap gap-2 justify-end pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border"
                  style={{
                    color: project.accentText,
                    borderColor: project.accentBorder,
                    background: `${project.accentBg}90`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Screenshot */}
          <div
            className="relative mt-5 rounded-xl overflow-hidden border border-white/10"
            style={{ boxShadow: `0 24px 64px ${project.accentBg}bb` }}
          >
            <img
              className="w-full h-48 lg:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              src={project.image}
              alt={project.title}
            />
            {/* Gloss on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        </div>
      </TiltCard>

      {/* ── Text panel ───────────────────────────────────────────────────── */}
      <div
        className={`lg:w-[45%] flex flex-col justify-center px-8 py-10 lg:py-0 ${
          isEven ? "lg:pl-14 lg:pr-0" : "lg:pr-14 lg:pl-0"
        }`}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, x: slideDir }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.08 + 0.18 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.3em] font-bold mb-3"
          style={{ color: project.accentText }}
        >
          {project.tagline}
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, x: slideDir }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.08 + 0.26 }}
          viewport={{ once: true }}
          className="text-white font-extrabold text-4xl lg:text-6xl leading-none mb-6"
        >
          {project.title}
        </motion.h2>

        {/* Animated accent rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: index * 0.08 + 0.36, duration: 0.55 }}
          viewport={{ once: true }}
          className="h-px w-full origin-left mb-6"
          style={{
            background: `linear-gradient(to right, ${project.accentBorder}, transparent)`,
          }}
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.08 + 0.42 }}
          viewport={{ once: true }}
          className="text-[#71717A] text-sm lg:text-base leading-7 mb-8 group-hover:text-[#9a9a9a] transition-colors duration-300"
        >
          {project.description}
        </motion.p>

        {/* CTA */}
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 font-semibold text-sm w-fit group/cta"
          style={{ color: project.accentText }}
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 320, damping: 18 }}
        >
          <span
            className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 group-hover/cta:scale-110 group-hover/cta:rotate-12"
            style={{
              borderColor: project.accentBorder,
              background: `${project.accentBg}70`,
            }}
          >
            <TbExternalLink size={16} />
          </span>
          Visit Project
        </motion.a>
      </div>
    </motion.article>
  );
}
