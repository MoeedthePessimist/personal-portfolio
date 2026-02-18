import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const LINKS = [
  { Icon: IoMdMail, href: "mailto:awan.moeed@hotmail.com", color: "#fb7185" },
  {
    Icon: IoLogoLinkedin,
    href: "https://www.linkedin.com/in/moeed-io/",
    color: "#22d3ee",
  },
  {
    Icon: BsGithub,
    href: "https://www.github.com/MoeedthePessimist",
    color: "#a78bfa",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-bg-secondary border-t border-white/5 overflow-hidden">
      {/* Rainbow top line */}
      <div className="h-[2px] bg-gradient-to-r from-accent-amber via-accent-cyan via-accent-violet to-accent-rose" />

      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[120px] blur-3xl opacity-[0.04]"
        style={{ background: "linear-gradient(135deg, #f59e0b, #22d3ee)" }}
      />

      <div className="relative z-10 px-5 lg:px-28 py-8 lg:py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <motion.img
          className="h-7 lg:h-9 invert brightness-0 invert"
          src="/assets/logo.svg"
          alt="Logo"
          whileHover={{ scale: 1.05 }}
        />

        {/* Center text */}
        <div className="text-center">
          <p className="text-text-muted text-xs">© 2025 Personal Portfolio</p>
          <p className="text-text-muted text-xs mt-0.5">
            Crafted with{" "}
            <span className="grad-amber font-semibold">passion</span> by{" "}
            <span className="text-text-primary font-semibold">SK</span>
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {LINKS.map(({ Icon, href, color }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border transition-all duration-200"
              style={{
                color,
                background: color + "10",
                borderColor: color + "25",
              }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="w-4 h-4" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
