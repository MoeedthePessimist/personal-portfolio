// src/components/animations/Starfield.jsx
// React Bits-style animated starfield / space background
import React, { useEffect, useRef } from "react";

export default function Starfield({
  starCount = 160,
  speed = 0.3,
  color = "#ffffff",
  glowColor = "#f59e0b",
  twinkle = true,
}) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", resize);

    const hex2rgb = (hex) => {
      const h = hex.replace("#", "");
      return [
        parseInt(h.substring(0, 2), 16),
        parseInt(h.substring(2, 4), 16),
        parseInt(h.substring(4, 6), 16),
      ];
    };

    const [cr, cg, cb] = hex2rgb(color);
    const [gr, gg, gb] = hex2rgb(glowColor);

    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 0.3 + Math.random() * 1.8,
      speed: 0.05 + Math.random() * speed,
      phase: Math.random() * Math.PI * 2,
      isGlow: Math.random() < 0.08, // 8% are glowing stars
    }));

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((s) => {
        s.y -= s.speed;
        if (s.y < 0) {
          s.y = height;
          s.x = Math.random() * width;
        }

        let alpha = 0.5 + Math.random() * 0.1;
        if (twinkle) {
          alpha = 0.3 + (Math.sin(t * 2 + s.phase) + 1) * 0.35;
        }

        if (s.isGlow) {
          // Glowing star
          const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size * 6);
          grd.addColorStop(0, `rgba(${gr},${gg},${gb},${alpha})`);
          grd.addColorStop(1, "transparent");
          ctx.fillStyle = grd;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size * 6, 0, Math.PI * 2);
          ctx.fill();

          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${gr},${gg},${gb},${Math.min(alpha * 1.5, 1)})`;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${cr},${cg},${cb},${alpha})`;
          ctx.fill();
        }
      });

      t += 0.02;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, [starCount, speed, color, glowColor, twinkle]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
