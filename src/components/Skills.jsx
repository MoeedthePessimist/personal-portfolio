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
import { BiLogoPostgresql, BiLogoRedux } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";
import { SiJest, SiNestjs } from "react-icons/si";
import { DiGoogleCloudPlatform } from "react-icons/di";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "JavaScript", icon: <FaJs size={50} /> },
    { id: 2, name: "React", icon: <FaReact size={50} /> },
    { id: 3, name: "Node.js", icon: <FaNodeJs size={50} /> },
    { id: 4, name: "Python", icon: <FaPython size={50} /> },
    { id: 5, name: "MongoDB", icon: <FaDatabase size={50} /> },
    { id: 6, name: "Java", icon: <FaJava size={50} /> },
    { id: 7, name: "Postgresql", icon: <BiLogoPostgresql size={50} /> },
    { id: 8, name: "Next.js", icon: <RiNextjsFill size={50} /> },
    { id: 9, name: "Tailwind", icon: <RiTailwindCssFill size={50} /> },
    { id: 10, name: "Figma", icon: <CgFigma size={50} /> },
    { id: 11, name: "Express.js", icon: <FaNodeJs size={50} /> },
    { id: 18, name: "NestJS", icon: <SiNestjs size={50} /> },
    { id: 12, name: "Django", icon: <FaPython size={50} /> },
    { id: 13, name: "Flask", icon: <FaFlask size={50} /> },
    { id: 14, name: "AWS", icon: <FaAws size={50} /> },
    { id: 15, name: "React Native", icon: <FaReact size={50} /> },
    { id: 16, name: "Jest", icon: <SiJest size={50} /> },
    { id: 17, name: "GCP", icon: <DiGoogleCloudPlatform size={50} /> },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "Leetpros",
      role: "Software Development Engineer",
      period: "April 2024 - Present",
      description:
        "Reviewed code to maintain quality standards and contributed to various codebases across projects. Gained expertise in Generative AI by developing a demo project and played a key role in launching the V2 version of an existing website. Served as the lead frontend engineer on a project, driving development and ensuring a seamless user experience.",
      logo: "/assets/leet_pros_logo.jpeg",
      tag: "Current",
    },
    {
      id: 2,
      company: "Cliff Digital Media",
      role: "Software Developer (Part Time)",
      period: "April 2024 - Present",
      description:
        "Developed and delivered fully functional websites using popular website builders, including Shopify, WordPress, and Wix, ensuring high-quality results and client satisfaction.",
      logo: "/assets/cliff_logo.jpeg",
      tag: "Current",
    },
    {
      id: 3,
      company: "Devaxl",
      role: "Senior Software Engineer",
      period: "Jan 2024 - April 2024",
      description:
        "Worked as a lead for four projects, successfully transitioning two to live production, while conducting thorough code reviews and addressing complex use cases to deliver robust solutions. Collaborated with clients to gather requirements and provide regular updates.",
      logo: "/assets/devaxl_logo.jpeg",
      tag: "Lead",
    },
    {
      id: 4,
      company: "Devaxl",
      role: "Associate Software Engineer",
      period: "Dec 2022 - Jan 2024",
      description:
        "Performed primary code reviews, contributed to critical use case development, and ensured code consistency through best practices. Assisted in project setup under lead guidance and supported efficient project execution.",
      logo: "/assets/devaxl_logo.jpeg",
      tag: null,
    },
    {
      id: 5,
      company: "Inexins",
      role: "Frontend Software Engineer",
      period: "July 2022 - Dec 2022",
      description:
        "Developed web applications using Angular, ensuring an intuitive user experience for students and university staff. Collaborated with backend developers for seamless integration and worked with UX/UI designers to transform design mockups into dynamic, interactive interfaces.",
      logo: "/assets/inexins_logo.jpeg",
      tag: null,
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">
        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: skill.id * 0.1,
              }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── Experience Section ─── */}
      <div className="bg-black w-full my-8 py-12 lg:my-16 lg:py-20 overflow-hidden">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 lg:mb-20 px-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[#71717A] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Career Journey
          </p>
          <h2 className="text-2xl lg:text-4xl text-white">
            My <span className="font-extrabold">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="px-5 lg:px-28 relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#333] to-transparent" />

          <div className="space-y-6 lg:space-y-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`relative lg:flex lg:items-start lg:gap-16 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 14,
                  delay: index * 0.1,
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Card — takes up one half */}
                <div className="lg:w-[calc(50%-2rem)]">
                  <ExperienceCard exp={exp} index={index} />
                </div>

                {/* Centre dot on desktop */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-8 flex-col items-center z-10">
                  <div className="w-4 h-4 rounded-full bg-white border-4 border-black ring-2 ring-[#444]" />
                </div>

                {/* Empty spacer for the opposite side */}
                <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({ exp, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative group cursor-pointer mb-6 lg:mb-12"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Glow backdrop */}
      <motion.div
        className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(ellipse at top left, #ffffff18, transparent 70%)",
        }}
      />

      {/* Card */}
      <div className="relative rounded-2xl border border-[#2a2a2a] bg-[#0d0d0d] group-hover:border-[#444] transition-all duration-500 overflow-hidden">
        {/* Top accent line */}
        <motion.div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-white via-[#888] to-transparent transition-all duration-700" />

        <div className="p-6 lg:p-8">
          {/* Header row */}
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-4">
              {/* Logo container */}
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#2a2a2a] bg-[#1a1a1a] flex items-center justify-center">
                  <img
                    className="w-full h-full object-cover"
                    src={exp.logo}
                    alt={exp.company}
                  />
                </div>
                {/* Index number badge */}
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white text-black text-[9px] font-black flex items-center justify-center">
                  {String(exp.id).padStart(2, "0")}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-white font-bold text-base lg:text-lg leading-tight">
                    {exp.role}
                  </h3>
                  {exp.tag && (
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border border-white/20 text-white/60">
                      {exp.tag}
                    </span>
                  )}
                </div>
                <p className="text-[#71717A] text-sm font-semibold mt-0.5">
                  {exp.company}
                </p>
              </div>
            </div>

            {/* Period pill */}
            <div className="flex-shrink-0">
              <span className="text-[11px] font-semibold text-[#888] bg-[#1a1a1a] border border-[#2a2a2a] px-3 py-1.5 rounded-full whitespace-nowrap">
                {exp.period}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-5 mb-4 h-px bg-gradient-to-r from-[#2a2a2a] via-[#333] to-transparent" />

          {/* Description */}
          <p className="text-[#888] text-sm leading-7 group-hover:text-[#aaa] transition-colors duration-300">
            {exp.description}
          </p>
        </div>

        {/* Bottom-right corner decoration */}
        <div className="absolute bottom-4 right-5 text-[#1e1e1e] font-black text-6xl leading-none select-none pointer-events-none group-hover:text-[#222] transition-colors duration-500">
          {String(exp.id).padStart(2, "0")}
        </div>
      </div>
    </motion.div>
  );
}
