import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BiLogoMicrosoft } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { TbSend } from "react-icons/tb";
import socialLinks from "../assets/social.json";

const SOCIALS = [
  { Icon: BiLogoMicrosoft, color: "#f59e0b", label: "Portfolio" },
  { Icon: IoLogoLinkedin, color: "#22d3ee", label: "LinkedIn" },
  { Icon: BsGithub, color: "#a78bfa", label: "GitHub" },
];

function FloatingInput({ type = "text", placeholder, required, as = "input" }) {
  const [focused, setFocused] = useState(false);
  const Tag = as;
  const common = {
    type: as === "input" ? type : undefined,
    placeholder,
    required,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    className: `w-full bg-bg-card text-text-primary text-sm placeholder:text-text-muted
                px-5 py-3.5 rounded-xl border outline-none transition-all duration-300
                ${as === "textarea" ? "resize-none h-32" : ""}`,
    style: {
      borderColor: focused ? "rgba(245,158,11,0.5)" : "rgba(255,255,255,0.08)",
      boxShadow: focused ? "0 0 0 3px rgba(245,158,11,0.1)" : "none",
    },
  };
  return <Tag {...common} />;
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="relative px-5 lg:px-28 py-16 lg:py-24 overflow-hidden"
      id="contact"
    >
      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] blur-3xl opacity-[0.07]"
          style={{ background: "linear-gradient(135deg, #f59e0b, #fb923c)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-[0.05]"
          style={{ background: "#22d3ee", transform: "translate(30%, 30%)" }}
        />
      </div>

      {/* Header */}
      <motion.div
        className="text-center mb-12 lg:mb-20"
        initial={{ opacity: 0, y: -14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-accent-rose text-xs uppercase tracking-[0.3em] font-semibold mb-3">
          Let's Connect
        </p>
        <h2 className="text-2xl lg:text-4xl text-text-primary">
          Contact <span className="font-extrabold grad-rose">Me</span>
        </h2>
      </motion.div>

      <div className="relative z-10 flex justify-between items-start gap-12 flex-col lg:flex-row">
        {/* ── Form ────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="lg:w-[45%] w-full"
        >
          <div
            className="p-6 lg:p-8 rounded-2xl border"
            style={{
              background: "rgba(22,22,30,0.8)",
              borderColor: "rgba(255,255,255,0.07)",
              backdropFilter: "blur(12px)",
            }}
          >
            {/* Top gradient strip */}
            <div className="h-[2px] rounded-full mb-6 bg-gradient-to-r from-accent-amber via-accent-cyan to-accent-rose" />

            <form className="space-y-4">
              <FloatingInput placeholder="Your name" required />
              <FloatingInput
                type="email"
                placeholder="Email address"
                required
              />
              <FloatingInput placeholder="Your website (if any)" />
              <FloatingInput
                as="textarea"
                placeholder="How can I help you?*"
                required
              />

              <div className="flex items-center justify-between gap-4 pt-2 flex-col sm:flex-row">
                <motion.button
                  type="submit"
                  className="flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm
                             bg-accent-amber text-bg-primary btn-glow w-full sm:w-auto justify-center"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Send Message <TbSend size={16} />
                </motion.button>

                <div className="flex items-center gap-2">
                  {SOCIALS.map(({ Icon, color, label }, i) => (
                    <motion.a
                      key={i}
                      href={socialLinks[i]}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={label}
                      className="p-2.5 rounded-xl border transition-all duration-200"
                      style={{
                        color,
                        background: color + "12",
                        borderColor: color + "33",
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.92 }}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </motion.div>

        {/* ── Right info ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="lg:w-[50%]"
        >
          {/* Big headline */}
          <div className="space-y-1 lg:space-y-2 mb-8">
            <h3 className="font-extrabold text-3xl lg:text-5xl text-text-primary leading-tight">
              Let's <span className="grad-amber">talk</span> for
            </h3>
            <h3 className="font-extrabold text-3xl lg:text-5xl text-text-primary leading-tight">
              Something <span className="grad-cyan">special</span>
            </h3>
          </div>

          <p className="text-text-muted text-sm lg:text-base leading-7 mb-10 max-w-sm">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>

          {/* Contact links */}
          <div className="space-y-4">
            {[
              {
                Icon: IoMdMail,
                label: "awan.moeed@hotmail.com",
                href: "mailto:awan.moeed@hotmail.com",
                color: "#fb7185",
              },
              {
                Icon: FaPhone,
                label: "+92 343 5157379",
                href: "tel:+923435157379",
                color: "#84cc16",
              },
            ].map(({ Icon, label, href, color }) => (
              <motion.a
                key={label}
                href={href}
                className="group flex items-center gap-4 p-4 rounded-xl border transition-all duration-300"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
                whileHover={{
                  x: 4,
                  borderColor: color + "33",
                  background: color + "0a",
                }}
              >
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border transition-all duration-300"
                  style={{
                    color,
                    background: color + "15",
                    borderColor: color + "33",
                  }}
                >
                  <Icon className="w-4 h-4" />
                </span>
                <span className="text-text-muted text-sm font-medium group-hover:text-text-primary transition-colors duration-200">
                  {label}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Availability badge */}
          <motion.div
            className="mt-10 inline-flex items-center gap-3 px-5 py-3 rounded-xl border"
            style={{
              borderColor: "rgba(132,204,22,0.3)",
              background: "rgba(132,204,22,0.07)",
            }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(132,204,22,0.15)",
                "0 0 20px 4px rgba(132,204,22,0.08)",
                "0 0 0 0 rgba(132,204,22,0.15)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-accent-lime pulse-ring" />
            <p className="text-accent-lime text-sm font-semibold">
              Open to new opportunities
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
