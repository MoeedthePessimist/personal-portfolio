// src/components/Skills.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaJava,
  FaAws,
  FaFlask,
} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";
import { SiJest, SiNestjs } from "react-icons/si";
import { DiGoogleCloudPlatform } from "react-icons/di";

// ── Data ─────────────────────────────────────────────────────────────────────
const SKILLS = [
  { id: 1, name: "JavaScript", Icon: FaJs, color: "#f59e0b" },
  { id: 2, name: "React", Icon: FaReact, color: "#22d3ee" },
  { id: 3, name: "Node.js", Icon: FaNodeJs, color: "#84cc16" },
  { id: 4, name: "Python", Icon: FaPython, color: "#facc15" },
  { id: 5, name: "MongoDB", Icon: FaDatabase, color: "#4ade80" },
  { id: 6, name: "Java", Icon: FaJava, color: "#fb7185" },
  { id: 7, name: "PostgreSQL", Icon: BiLogoPostgresql, color: "#60a5fa" },
  { id: 8, name: "Next.js", Icon: RiNextjsFill, color: "#e2e8f0" },
  { id: 9, name: "Tailwind", Icon: RiTailwindCssFill, color: "#38bdf8" },
  { id: 10, name: "Figma", Icon: CgFigma, color: "#a78bfa" },
  { id: 11, name: "Express.js", Icon: FaNodeJs, color: "#d1d5db" },
  { id: 12, name: "NestJS", Icon: SiNestjs, color: "#fb7185" },
  { id: 13, name: "Django", Icon: FaPython, color: "#34d399" },
  { id: 14, name: "Flask", Icon: FaFlask, color: "#94a3b8" },
  { id: 15, name: "AWS", Icon: FaAws, color: "#fb923c" },
  { id: 16, name: "React Native", Icon: FaReact, color: "#67e8f9" },
  { id: 17, name: "Jest", Icon: SiJest, color: "#f87171" },
  { id: 18, name: "GCP", Icon: DiGoogleCloudPlatform, color: "#4ade80" },
];

const EXPERIENCES = [
  {
    id: 1,
    company: "Leetpros",
    role: "Software Development Engineer",
    period: "April 2024 – Present",
    description:
      "Reviewed code to maintain quality standards and contributed to various codebases across projects. Gained expertise in Generative AI by developing a demo project and played a key role in launching the V2 version of an existing website. Served as the lead frontend engineer on a project, driving development and ensuring a seamless user experience.",
    logo: "/assets/leet_pros_logo.jpeg",
    tag: "Current",
    accent: "#f59e0b",
  },
  {
    id: 2,
    company: "Cliff Digital Media",
    role: "Software Developer (Part Time)",
    period: "April 2024 – Present",
    description:
      "Developed and delivered fully functional websites using popular website builders, including Shopify, WordPress, and Wix, ensuring high-quality results and client satisfaction.",
    logo: "/assets/cliff_logo.jpeg",
    tag: "Current",
    accent: "#22d3ee",
  },
  {
    id: 3,
    company: "Devaxl",
    role: "Senior Software Engineer",
    period: "Jan 2024 – April 2024",
    description:
      "Worked as a lead for four projects, successfully transitioning two to live production, while conducting thorough code reviews and addressing complex use cases to deliver robust solutions. Collaborated with clients to gather requirements and provide regular updates.",
    logo: "/assets/devaxl_logo.jpeg",
    tag: "Lead",
    accent: "#a78bfa",
  },
  {
    id: 4,
    company: "Devaxl",
    role: "Associate Software Engineer",
    period: "Dec 2022 – Jan 2024",
    description:
      "Performed primary code reviews, contributed to critical use case development, and ensured code consistency through best practices. Assisted in project setup under lead guidance and supported efficient project execution.",
    logo: "/assets/devaxl_logo.jpeg",
    tag: null,
    accent: "#fb7185",
  },
  {
    id: 5,
    company: "Inexins",
    role: "Frontend Software Engineer",
    period: "July 2022 – Dec 2022",
    description:
      "Developed web applications using Angular, ensuring an intuitive user experience for students and university staff. Collaborated with backend developers for seamless integration and worked with UX/UI designers to transform design mockups into dynamic, interactive interfaces.",
    logo: "/assets/inexins_logo.jpeg",
    tag: null,
    accent: "#84cc16",
  },
];

// ── Skill card ────────────────────────────────────────────────────────────────
function SkillCard({ skill, index }) {
  const { Icon, name, color } = skill;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, delay: index * 0.035 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.06 }}
      className="group relative flex flex-col items-center justify-center gap-3
                 h-36 w-full rounded-2xl border cursor-pointer overflow-hidden
                 bg-bg-card border-white/8 transition-all duration-300"
    >
      {/* Radial glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          background: `radial-gradient(ellipse at center, ${color}1a 0%, transparent 70%)`,
        }}
      />
      {/* Top sweep line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        }}
      />
      <Icon
        size={42}
        className="relative z-10 transition-transform duration-300 group-hover:scale-110"
        style={{ color }}
      />
      <p className="relative z-10 text-sm font-semibold text-text-muted group-hover:text-text-primary transition-colors duration-200">
        {name}
      </p>
    </motion.div>
  );
}

// ── Experience card ───────────────────────────────────────────────────────────
function ExperienceCard({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 14,
        delay: index * 0.08,
      }}
      viewport={{ once: true }}
      className="group relative rounded-2xl border overflow-hidden cursor-pointer transition-all duration-500 mb-6 lg:mb-12"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
      whileHover={{ borderColor: exp.accent + "44" }}
    >
      {/* Card background */}
      <div className="absolute inset-0 bg-bg-card" />

      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] opacity-50 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(to bottom, ${exp.accent}, transparent)`,
        }}
      />

      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at top left, ${exp.accent}0d 0%, transparent 60%)`,
        }}
      />

      {/* Top sweep line on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] w-0 group-hover:w-full transition-all duration-700"
        style={{
          background: `linear-gradient(to right, ${exp.accent}, transparent)`,
        }}
      />

      <div className="relative z-10 p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4">
            {/* Logo + badge */}
            <div className="relative flex-shrink-0">
              <div
                className="w-12 h-12 rounded-xl overflow-hidden border flex items-center justify-center"
                style={{
                  borderColor: exp.accent + "33",
                  background: exp.accent + "12",
                }}
              >
                <img
                  className="w-full h-full object-cover"
                  src={exp.logo}
                  alt={exp.company}
                />
              </div>
              <span
                className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black text-bg-primary"
                style={{ background: exp.accent }}
              >
                {String(exp.id).padStart(2, "0")}
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-text-primary font-bold text-base lg:text-lg leading-tight">
                  {exp.role}
                </h3>
                {exp.tag && (
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border"
                    style={{
                      color: exp.accent,
                      borderColor: exp.accent + "44",
                      background: exp.accent + "14",
                    }}
                  >
                    {exp.tag}
                  </span>
                )}
              </div>
              <p
                className="text-sm font-semibold mt-0.5"
                style={{ color: exp.accent }}
              >
                {exp.company}
              </p>
            </div>
          </div>

          {/* Period */}
          <span className="text-[11px] font-semibold text-text-muted bg-white/5 border border-white/8 px-3 py-1.5 rounded-full whitespace-nowrap flex-shrink-0">
            {exp.period}
          </span>
        </div>

        {/* Divider */}
        <div
          className="mt-5 mb-4 h-px"
          style={{
            background: `linear-gradient(to right, ${exp.accent}33, transparent)`,
          }}
        />

        {/* Description */}
        <p className="text-text-muted text-sm leading-7 group-hover:text-[#9ca3af] transition-colors duration-300">
          {exp.description}
        </p>
      </div>

      {/* Ghost number */}
      <div
        className="absolute bottom-3 right-5 font-black text-7xl leading-none select-none pointer-events-none opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-500"
        style={{ color: exp.accent }}
      >
        {String(exp.id).padStart(2, "0")}
      </div>
    </motion.div>
  );
}

// ── Page section ──────────────────────────────────────────────────────────────
export default function Skills() {
  return (
    <div className="mt-16 lg:mt-24" id="skills">
      {/* ── Skills grid ────────────────────────────────────────────────── */}
      <div className="px-5 lg:px-28">
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-accent-amber text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Tech Stack
          </p>
          <h2 className="text-2xl lg:text-4xl text-text-primary">
            My <span className="font-extrabold grad-amber">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.id} skill={skill} index={i} />
          ))}
        </div>
      </div>

      {/* ── Experience ─────────────────────────────────────────────────── */}
      <div className="relative mt-20 lg:mt-28 py-16 lg:py-24 overflow-hidden">
        {/* Section background */}
        <div className="absolute inset-0 bg-bg-secondary grid-bg" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top center, rgba(245,158,11,0.05) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 px-5 lg:px-28">
          {/* Header */}
          <motion.div
            className="text-center mb-12 lg:mb-20"
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-accent-cyan text-xs uppercase tracking-[0.3em] font-semibold mb-3">
              Career Journey
            </p>
            <h2 className="text-2xl lg:text-4xl text-text-primary">
              My <span className="font-extrabold grad-cyan">Experience</span>
            </h2>
          </motion.div>

          {/* Timeline layout */}
          <div className="relative">
            {/* Centre vertical line (desktop) */}
            <div
              className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(245,158,11,0.2), transparent)",
              }}
            />

            <div className="space-y-0">
              {EXPERIENCES.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative lg:flex lg:items-start lg:gap-16 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* Card */}
                  <div className="lg:w-[calc(50%-2rem)]">
                    <ExperienceCard exp={exp} index={index} />
                  </div>

                  {/* Centre dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-8 z-10">
                    <div
                      className="w-4 h-4 rounded-full border-4 border-bg-secondary"
                      style={{
                        background: exp.accent,
                        boxShadow: `0 0 12px ${exp.accent}66`,
                      }}
                    />
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
