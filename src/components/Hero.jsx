import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoWindows } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import socialLinks from "../assets/social.json";
import { RotatingText } from "./animations";

const SOCIALS = [
  {
    Icon: BiLogoWindows,
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.12)",
    border: "rgba(245,158,11,0.3)",
  },
  {
    Icon: IoLogoLinkedin,
    color: "#22d3ee",
    bg: "rgba(34,211,238,0.12)",
    border: "rgba(34,211,238,0.3)",
  },
  {
    Icon: BsGithub,
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.12)",
    border: "rgba(167,139,250,0.3)",
  },
];

// Floating decorative orb
function Orb({ className, color, size = 300, delay = 0 }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}22 0%, transparent 70%)`,
        filter: "blur(40px)",
      }}
      animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
      transition={{
        duration: 7 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      aria-hidden="true"
    />
  );
}

export default function Hero() {
  return (
    <div
      className="relative min-h-screen flex items-center overflow-hidden"
      id="hero"
    >
      {/* ── Background orbs ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Orb className="top-20 -left-20" color="#f59e0b" size={500} delay={0} />
        <Orb
          className="bottom-10 right-0"
          color="#22d3ee"
          size={400}
          delay={2}
        />
        <Orb
          className="top-1/2 left-1/2"
          color="#a78bfa"
          size={350}
          delay={4}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(at 15% 25%, rgba(245,158,11,0.1) 0px, transparent 50%), radial-gradient(at 85% 75%, rgba(34,211,238,0.08) 0px, transparent 50%)",
          }}
        />
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse mt-20">
        {/* Left: text */}
        <motion.div
          className="lg:w-[50%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Status pill */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-lime/30 bg-accent-lime/8 mb-6 mr-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-accent-lime pulse-ring" />
            <span className="text-[8px] text-accent-lime md:text-xs font-semibold tracking-wider uppercase">
              Available for work
            </span>
          </motion.div>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-violet/30 bg-accent-violet/8 mb-6 ml-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-accent-violet pulse-ring" />
            <span className="text-[8px] text-accent-violet md:text-xs font-semibold tracking-wider uppercase">
              Looking for remote opportunities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            className="text-3xl lg:text-6xl flex flex-col gap-3 lg:gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.h1
              className="text-text-primary font-light"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Hello,{" "}
              <span className="font-bold">
                <TypeAnimation
                  sequence={["I am Abdul Moeed", 2000, "I Build Apps", 2000]}
                  speed={40}
                  repeat={Infinity}
                  style={{ color: "#f59e0b" }}
                />
              </span>
            </motion.h1>

            <RotatingText
              texts={["Software Engineer", "Full-Stack Developer", "Team Lead"]}
              mainClassName="px-2 bg-grad-cyan text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-[#fff] font-extrabold w-fit items-center"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              elementLevelClassName="text-lg md:text-[40px] h-auto items-center flex"
              rotationInterval={2000}
            />

            <motion.h1
              className="font-light text-text-primary"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Based In{" "}
              <span className="font-extrabold grad-rose">Pakistan.</span>
            </motion.h1>
          </motion.div>

          {/* Bio */}
          <motion.p
            className="text-text-muted text-sm lg:text-base mt-6 max-w-lg leading-7"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Software Engineer from Islamabad, Pakistan — building robust,
            scalable, and user-centric digital solutions across healthcare,
            logistics, e-learning, and more.
          </motion.p>

          {/* CTAs + socials */}
          <motion.div
            className="flex flex-wrap items-center gap-4 mt-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 rounded-xl bg-accent-amber text-bg-primary font-bold text-sm btn-glow hover:bg-accent-orange transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 rounded-xl border border-white/12 text-text-primary font-semibold text-sm hover:border-white/25 hover:bg-white/5 transition-all"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            className="flex items-center gap-3 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            {SOCIALS.map(({ Icon, color, bg, border }, i) => (
              <motion.a
                key={i}
                href={socialLinks[i]}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border transition-all duration-300"
                style={{ background: bg, borderColor: border, color }}
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.92 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}

            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-white/10 to-transparent" />
            <span className="text-text-muted text-xs font-medium">
              Follow me
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
