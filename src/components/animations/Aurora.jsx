// src/components/animations/Aurora.jsx
// React Bits-style animated aurora background
import React, { useEffect, useRef } from "react";

export default function Aurora({
  colorStops = ["#3b82f6", "#8b5cf6", "#06b6d4"],
  amplitude = 1,
  speed = 0.5,
  blend = 0.5,
}) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);
    let t = 0;

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      colorStops.forEach((color, i) => {
        const offset = (i / colorStops.length) * Math.PI * 2;
        const blobCount = 3;

        for (let b = 0; b < blobCount; b++) {
          const bOffset = (b / blobCount) * Math.PI * 2;
          const cx =
            width / 2 +
            Math.sin(t * speed + offset + bOffset) * (width * 0.3 * amplitude);
          const cy =
            height / 2 +
            Math.cos(t * speed * 0.7 + offset + bOffset) *
              (height * 0.25 * amplitude);
          const r = Math.max(width, height) * 0.4;

          const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
          grd.addColorStop(0, color + "55");
          grd.addColorStop(1, "transparent");

          ctx.globalAlpha = blend;
          ctx.globalCompositeOperation = "screen";
          ctx.fillStyle = grd;
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
      t += 0.008;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, [colorStops, amplitude, speed, blend]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
}
