"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export type HeadlineChunk = string | { italic: boolean; text: string };
export type HeadlineLine = { text: HeadlineChunk[]; delay: number };

export function HeadlineLine({ chunks, delay }: { chunks: readonly HeadlineChunk[]; delay: number }) {
  return (
    <div style={{ clipPath: "inset(-4px -8px -8px -8px)" }}>
      <motion.div
        initial={{ y: "105%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay, ease: EASE }}
      >
        {chunks.map((chunk, i) =>
          typeof chunk === "string" ? (
            <span key={i}>{chunk}</span>
          ) : (
            <span key={i} className="italic font-light text-accent">
              {chunk.text}
            </span>
          )
        )}
      </motion.div>
    </div>
  );
}

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const W = () => canvas.width;
    const H = () => canvas.height;
    const CONNECT = 180;
    const SPEED = 0.35;
    const COUNT = Math.min(Math.floor((canvas.width * canvas.height) / 16000), 62);

    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W(),
      y: Math.random() * H(),
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      r: Math.random() * 1.8 + 1.2,
    }));

    let raf: number;

    const draw = () => {
      ctx.clearRect(0, 0, W(), H());

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W()) p.vx *= -1;
        if (p.y < 0 || p.y > H()) p.vy *= -1;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(140,32,64,${(1 - dist / CONNECT) * 0.28})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(140,32,64,0.5)";
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden
    />
  );
}
