// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const NAV_ITEMS = ["about", "skills", "projects", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      // Highlight the section currently in view
      for (const id of [...NAV_ITEMS].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    console.log(activeSection, "active section");
  }, [activeSection]);

  const scrollToSection = (id) => {
    // Works on Home page; on /projects page it falls back to navigating home
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 110, behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg-primary/90 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      <div className="lg:px-28 px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("hero")}
          className="cursor-pointer relative"
        >
          <img className="h-9 invert" src="/assets/logo.svg" alt="Logo" />
          <div className="absolute inset-0 blur-xl opacity-30 bg-accent-amber rounded-full scale-50 pointer-events-none" />
        </motion.div>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-x-1">
          {NAV_ITEMS.map((section) => {
            const isActive = activeSection === section;
            return (
              <motion.li key={section} whileHover={{ y: -1 }}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-accent-amber"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-accent-amber/10 border border-accent-amber/20"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 28,
                      }}
                    />
                  )}
                  <span className="relative z-10">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </span>
                </button>
              </motion.li>
            );
          })}
        </ul>

        {/* Resume CTA */}
        <motion.a
          href="#"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold
                     bg-accent-amber text-bg-primary hover:bg-accent-orange transition-colors duration-200
                     shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          Resume <TbDownload size={15} />
        </motion.a>

        {/* Hamburger */}
        <motion.button
          className="lg:hidden text-text-primary text-2xl p-2 rounded-lg hover:bg-white/5"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </motion.button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            className="lg:hidden fixed top-0 right-0 h-full w-72 bg-bg-card border-l border-white/8 flex flex-col p-8 pt-20 shadow-2xl z-50"
          >
            <button
              className="absolute top-5 right-5 text-2xl text-text-muted hover:text-text-primary"
              onClick={() => setIsOpen(false)}
            >
              <HiX />
            </button>

            {/* Rainbow top bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-amber via-accent-cyan to-accent-rose" />

            <ul className="flex flex-col gap-3">
              {NAV_ITEMS.map((section, i) => (
                <motion.li
                  key={section}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-base transition-all duration-200 ${
                      activeSection === section
                        ? "text-accent-amber bg-accent-amber/10 border border-accent-amber/20"
                        : "text-text-muted hover:text-text-primary hover:bg-white/5"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 }}
              className="mt-8 flex items-center justify-center gap-2 px-5 py-3 rounded-xl
                         bg-accent-amber text-bg-primary font-semibold text-sm
                         shadow-[0_0_20px_rgba(245,158,11,0.3)]"
            >
              Resume <TbDownload size={15} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
