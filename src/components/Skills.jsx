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
    },
    {
      id: 2,
      company: "Cliff Digital Media",
      role: "Software Developer (Part Time)",
      period: "April 2024 - Present",
      description:
        "Developed and delivered fully functional websites using popular website builders, including Shopify, WordPress, and Wix, ensuring high-quality results and client satisfaction.",
      logo: "/assets/cliff_logo.jpeg",
    },
    {
      id: 3,
      company: "Devaxl",
      role: "Senior Software Engineer",
      period: "Jan 2024 - April 2024",
      description:
        "Worked as a lead for four projects, successfully transitioning two to live production, while conducting thorough code reviews and addressing complex use cases to deliver robust solutions. Collaborated with clients to gather requirements and provide regular updates.",
      logo: "/assets/devaxl_logo.jpeg",
    },
    {
      id: 4,
      company: "Devaxl",
      role: "Associate Software Engineer",
      period: "Dec 2022 - Jan 2024",
      description:
        "Performed primary code reviews, contributed to critical use case development, and ensured code consistency through best practices. Assisted in project setup under lead guidance and supported efficient project execution.",
      logo: "/assets/devaxl_logo.jpeg",
    },
    {
      id: 5,
      company: "Inexins",
      role: "Frontend Software Engineer",
      period: "July 2022 - Dec 2022",
      description:
        "Developed web applications using Angular, ensuring an intuitive user experience for students and university staff. Collaborated with backend developers for seamless integration and worked with UX/UI designers to transform design mockups into dynamic, interactive interfaces.",
      logo: "/assets/inexins_logo.jpeg",
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

      {/* Experience Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  <img className="w-7" src={exp.logo} alt="" />
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
