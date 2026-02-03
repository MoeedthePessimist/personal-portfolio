import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row"
      id="about"
    >
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I'm Abdul Moeed, a Senior Software Engineer based in Islamabad,
          Pakistan, with a passion for crafting elegant solutions to complex
          problems. With over two years of professional experience in software
          development, I've had the privilege of working across diverse projects
          and technologies, from building intuitive frontend interfaces to
          architecting scalable full-stack applications. My journey in tech has
          been driven by curiosity and a commitment to continuous learning,
          which has allowed me to adapt and thrive in the ever-evolving
          landscape of software engineering.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Currently, I'm serving as a Software Development Engineer at Leetpros,
          where I lead frontend development initiatives and explore the exciting
          realm of Generative AI. My role involves not just writing code, but
          ensuring quality through thorough code reviews and collaborating
          across multiple projects to deliver exceptional user experiences.
          Simultaneously, I work part-time with Cliff Digital Media, where I
          help bring client visions to life through platforms like Shopify,
          WordPress, and Wix. This dual role has sharpened my ability to balance
          technical excellence with client satisfaction and business objectives.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          My technical toolkit is diverse and continually expanding. I'm
          proficient in modern JavaScript frameworks like React, Angular, and
          Node.js, and comfortable working with languages ranging from Python
          and Java to C++. I've worked extensively with cloud platforms like AWS
          and GCP, managed databases including MongoDB and SQL, and implemented
          CI/CD pipelines to streamline development workflows. Beyond the
          technical skills, I pride myself on my ability to communicate
          effectively with clients, lead development teams, and translate
          complex requirements into actionable solutions.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Throughout my career, I've contributed to a wide range of impactful
          projects—from English AcadeMe Junior, an educational platform for
          children, to Apollo-e, a comprehensive logistics management suite, and
          Pakmedic, a telemedicine application with machine learning
          capabilities. Each project has taught me something new and reinforced
          my belief that great software is built at the intersection of
          technical prowess, user empathy, and collaborative teamwork. I
          graduated from COMSATS University Islamabad with a degree in Computer
          Science, and I'm always eager to take on new challenges that push the
          boundaries of what's possible with technology.
        </p>
      </motion.div>
    </div>
  );
}
