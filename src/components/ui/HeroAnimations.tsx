"use client";

import { m as motion } from "framer-motion";
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
    const CONNECT_SQ = CONNECT * CONNECT;
    const SPEED = 0.35;
    const COUNT = Math.min(Math.floor((canvas.width * canvas.height) / 18000), 48);

    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W(),
      y: Math.random() * H(),
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      r: Math.random() * 1.8 + 1.2,
    }));

    let raf: number;
    let running = true;

    const draw = () => {
      if (!running) return;

      ctx.clearRect(0, 0, W(), H());

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W()) p.vx *= -1;
        if (p.y < 0 || p.y > H()) p.vy *= -1;
      }

      // Single batched path for all connecting lines (uniform alpha — avoids
      // per-segment stroke() calls which are extremely expensive on canvas)
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          if (dx * dx + dy * dy < CONNECT_SQ) {
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
          }
        }
      }
      ctx.strokeStyle = "rgba(140,32,64,0.14)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Single batched path for all dots
      ctx.beginPath();
      for (const p of particles) {
        ctx.moveTo(p.x + p.r, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      }
      ctx.fillStyle = "rgba(140,32,64,0.5)";
      ctx.fill();

      raf = requestAnimationFrame(draw);
    };

    // Pause the RAF loop when the hero is scrolled off-screen
    const io = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
        if (running) raf = requestAnimationFrame(draw);
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    raf = requestAnimationFrame(draw);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
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
