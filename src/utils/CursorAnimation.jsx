import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [clicking, setClicking] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, { stiffness: 600, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 600, damping: 40 });

  // Trailing dot — slower spring
  const trailX = useSpring(cursorX, { stiffness: 120, damping: 20 });
  const trailY = useSpring(cursorY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const enterHover = () => setHovered(true);
    const leaveHover = () => setHovered(false);
    const mouseDown = () => setClicking(true);
    const mouseUp = () => setClicking(false);

    window.addEventListener("mousemove", mouseDown);
    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);

    const interactives = document.querySelectorAll(
      "a, button, [role=button], input, textarea, select, label, [data-cursor]",
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", enterHover);
      el.addEventListener("mouseleave", leaveHover);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", enterHover);
        el.removeEventListener("mouseleave", leaveHover);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full border-2 border-accent-amber"
          animate={{
            width: hovered ? 48 : clicking ? 16 : 28,
            height: hovered ? 48 : clicking ? 16 : 28,
            opacity: 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        />
      </motion.div>

      {/* Trailing dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="w-2 h-2 rounded-full bg-accent-amber"
          animate={{ scale: clicking ? 0.5 : 1, opacity: hovered ? 0 : 0.7 }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>
    </>
  );
}
