import React from "react";
import { motion } from "framer-motion";

const STATS = [
  { value: "3+", label: "Years Experience", color: "#f59e0b" },
  { value: "10+", label: "Projects Shipped", color: "#22d3ee" },
  { value: "5+", label: "Companies Served", color: "#a78bfa" },
];

export default function About() {
  return (
    <div
      className="relative px-5 lg:px-28 py-16 lg:py-24 overflow-hidden"
      id="about"
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl opacity-[0.06]"
          style={{ background: "#22d3ee", transform: "translate(30%, -50%)" }}
        />
        <div
          className="absolute top-1/4 left-0 w-64 h-64 rounded-full blur-3xl opacity-[0.05]"
          style={{ background: "#f59e0b", transform: "translate(-30%, 0%)" }}
        />
      </div>

      <div className="relative z-10 flex justify-between flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        {/* Left: illustration */}
        <motion.div
          className="lg:w-[45%] w-full"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 14 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Gradient frame */}
            {/* <div
              className="absolute -inset-[2px] rounded-2xl"
              style={{
                // background:
                //   "linear-gradient(135deg, rgba(245,158,11,0.5), rgba(34,211,238,0.3), rgba(167,139,250,0.2))",
                padding: "2px",
              }}
            /> */}
            <div className="relative rounded-2xl overflow-hidden bg-bg-card p-4">
              <img
                src="/assets/about-me.svg"
                alt="About Me"
                className="w-full h-auto"
              />
            </div>

            {/* Stat chips — floated over the image */}
            <div className="absolute -bottom-5 -right-4 flex flex-col gap-2">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl border backdrop-blur-sm bg-bg-card/90"
                  style={{ borderColor: stat.color + "33" }}
                >
                  <span
                    className="font-extrabold text-lg"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-text-muted text-xs font-medium">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: text */}
        <motion.div
          className="lg:w-[55%]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 14,
            delay: 0.15,
          }}
          viewport={{ once: true }}
        >
          {/* Eyebrow */}
          <p className="text-accent-violet text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            Who I Am
          </p>

          <h2 className="text-3xl lg:text-5xl font-extrabold text-text-primary mb-8 leading-tight">
            About <span className="grad-amber">Me</span>
          </h2>

          {[
            "I'm Abdul Moeed, a Senior Software Engineer based in Islamabad, Pakistan, with a passion for crafting elegant solutions to complex problems. With over two years of professional experience, I've worked across diverse projects — from intuitive frontend interfaces to scalable full-stack applications.",
            "Currently serving as a Software Development Engineer at Leetpros, I lead frontend development and explore the exciting realm of Generative AI. Simultaneously, I work part-time with Cliff Digital Media helping clients build their digital presence on Shopify, WordPress, and Wix.",
            "My toolkit spans React, Angular, Node.js, Python, Java, AWS, GCP, MongoDB, and SQL. Beyond code, I pride myself on communicating with clients, leading teams, and translating complex requirements into actionable, delightful solutions.",
            "I graduated from COMSATS University Islamabad with a degree in Computer Science, and I'm always eager to tackle challenges that push the boundaries of what's possible with technology.",
          ].map((para, i) => (
            <motion.p
              key={i}
              className="text-text-muted text-sm lg:text-base leading-7 mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              viewport={{ once: true }}
            >
              {para}
            </motion.p>
          ))}

          {/* Colored tag row */}
          <motion.div
            className="flex flex-wrap gap-2 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              ["Full-Stack Dev", "#f59e0b"],
              ["Gen AI", "#22d3ee"],
              ["Cloud (AWS/GCP)", "#a78bfa"],
              ["UI/UX", "#fb7185"],
              ["Team Lead", "#84cc16"],
            ].map(([label, color]) => (
              <span
                key={label}
                className="px-3 py-1.5 rounded-full text-xs font-semibold border"
                style={{
                  color,
                  borderColor: color + "44",
                  background: color + "14",
                }}
              >
                {label}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
