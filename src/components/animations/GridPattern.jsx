// src/components/animations/GridPattern.jsx
// Animated grid pattern with glowing pulse effect (React Bits style)
import React, { useEffect, useRef } from "react";

export default function GridPattern({
  cellSize = 40,
  lineColor = "rgba(255,255,255,0.05)",
  pulseColor = "rgba(245,158,11,0.15)",
  pulseCount = 5,
  speed = 0.6,
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

    // Random pulsing cells
    const cols = Math.ceil(width / cellSize);
    const rows = Math.ceil(height / cellSize);
    const pulses = Array.from({ length: pulseCount }, () => ({
      col: Math.floor(Math.random() * cols),
      row: Math.floor(Math.random() * rows),
      phase: Math.random() * Math.PI * 2,
      speed: 0.5 + Math.random() * speed,
    }));

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw grid
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      for (let x = 0; x <= width; x += cellSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y <= height; y += cellSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw glowing pulses
      pulses.forEach((p) => {
        const alpha = (Math.sin(t * p.speed + p.phase) + 1) / 2;
        const x = p.col * cellSize;
        const y = p.row * cellSize;

        // Glow spread across a few cells
        const grd = ctx.createRadialGradient(
          x + cellSize / 2, y + cellSize / 2, 0,
          x + cellSize / 2, y + cellSize / 2, cellSize * 2.5
        );
        const base = pulseColor.replace(/[\d.]+\)$/, "");
        grd.addColorStop(0, pulseColor.replace(/[\d.]+\)/, `${(0.6 * alpha).toFixed(2)})`));
        grd.addColorStop(1, "transparent");

        ctx.fillStyle = grd;
        ctx.fillRect(x - cellSize * 2, y - cellSize * 2, cellSize * 6, cellSize * 6);

        // Brighter cell highlight
        ctx.fillStyle = pulseColor.replace(/[\d.]+\)/, `${(0.3 * alpha).toFixed(2)})`);
        ctx.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2);

        // Animate pulse position slowly
        if (Math.random() < 0.002) {
          p.col = Math.floor(Math.random() * cols);
          p.row = Math.floor(Math.random() * rows);
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
  }, [cellSize, lineColor, pulseColor, pulseCount, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
