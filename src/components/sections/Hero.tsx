"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const services = [
  { label: "Core Banking", status: "Live" },
  { label: "Tax Register", status: "Live" },
  { label: "Treasury Gateway", status: "Live" },
  { label: "Pension Records", status: "Live" },
];

const initPoints = [40, 55, 38, 62, 58, 71, 65, 80, 74, 88, 82, 95];

function buildPaths(pts: number[], w: number, h: number) {
  const max = Math.max(...pts);
  const min = Math.min(...pts);
  const range = max - min || 1;
  const coords = pts.map((v, i) => ({
    x: (i / (pts.length - 1)) * w,
    y: h - ((v - min) / range) * (h - 8) - 4,
  }));
  const line = coords
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(2)},${p.y.toFixed(2)}`)
    .join(" ");
  const area = `${line} L ${w},${h} L 0,${h} Z`;
  const last = coords[coords.length - 1];
  return { line, area, lastX: last.x, lastY: last.y };
}

function Sparkline() {
  const w = 200;
  const h = 48;
  const [points, setPoints] = useState(initPoints);

  useEffect(() => {
    const t = setTimeout(() => {
      const id = setInterval(() => {
        setPoints((prev) => {
          const last = prev[prev.length - 1];
          const next = Math.max(30, Math.min(100, last + (Math.random() - 0.38) * 10));
          return [...prev.slice(1), Math.round(next)];
        });
      }, 1800);
      return () => clearInterval(id);
    }, 1600);
    return () => clearTimeout(t);
  }, []);

  const { line, area, lastX, lastY } = buildPaths(points, w, h);

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-12" preserveAspectRatio="none">
      <defs>
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a4a2a" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#3a4a2a" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={area}
        fill="url(#spark-fill)"
        stroke="none"
        animate={{ d: area }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />
      <motion.path
        d={line}
        fill="none"
        stroke="#3a4a2a"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1, d: line }}
        transition={{
          pathLength: { duration: 1.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
          d: { duration: 0.9, ease: "easeInOut" },
        }}
      />
      <motion.circle
        cx={lastX}
        cy={lastY}
        r="3"
        fill="#3a4a2a"
        animate={{ cx: lastX, cy: lastY }}
        initial={{ opacity: 0, scale: 0 }}
        transition={{
          cx: { duration: 0.9, ease: "easeInOut" },
          cy: { duration: 0.9, ease: "easeInOut" },
          opacity: { delay: 1.5, duration: 0.3 },
          scale: { delay: 1.5, duration: 0.3 },
        }}
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="grain relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 pt-20 md:pt-28 pb-24 md:pb-36">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-line-soft bg-cream-soft/70 backdrop-blur-sm py-1.5 pl-2 pr-4 text-[0.78rem] text-ink/80"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono tracking-[0.06em] uppercase text-[0.7rem] text-muted">
            In production
          </span>
          <span aria-hidden className="text-line">·</span>
          <span>6 national institutions, 24/7</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <h1 className="display-xl text-ink max-w-[16ch]">
              The software that{" "}
              <span className="italic font-light text-accent">runs</span> a
              country&rsquo;s institutions.
            </h1>

            <p className="mt-10 max-w-lg text-lg md:text-[1.15rem] leading-relaxed text-ink/75">
              For fifteen years, Infostream has built and maintained the core
              financial, identity, and compliance systems trusted by
              Montenegro&rsquo;s ministries, the Central Bank, and Parliament.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-[0.95rem] font-medium text-cream-soft hover:bg-ink-soft transition-colors"
              >
                Start a conversation
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  <path
                    d="M2 7h10m0 0L7.5 2.5M12 7l-4.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href="#what-we-do"
                className="inline-flex h-12 items-center px-2 text-[0.95rem] font-medium text-ink underline-offset-4 hover:underline"
              >
                See what we build
              </Link>
            </div>

            <div className="mt-16 flex items-center gap-10 border-t border-line-soft pt-8">
              <div>
                <div className="eyebrow mb-1">Founded</div>
                <div className="text-[1.05rem] font-display font-light text-ink">2010, Podgorica</div>
              </div>
              <div>
                <div className="eyebrow mb-1">Certified</div>
                <div className="text-[1.05rem] text-ink">ISO 27001 · ISO 9001</div>
              </div>
              <div>
                <div className="eyebrow mb-1">Partner</div>
                <div className="text-[1.05rem] text-ink">Bitdefender Enterprise</div>
              </div>
            </div>
          </motion.div>

          {/* Right — live systems panel */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="rounded-2xl border border-line-soft bg-bone/60 backdrop-blur-sm overflow-hidden shadow-sm">

              {/* Panel header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-line-soft">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-muted">
                    System status — live
                  </span>
                </div>
                <span className="font-mono text-[0.7rem] text-muted/60">
                  MNE · UTC+1
                </span>
              </div>

              {/* Sparkline */}
              <div className="px-6 pt-5 pb-2 border-b border-line-soft">
                <div className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-muted mb-3">
                  Transaction volume · 30 days
                </div>
                <Sparkline />
              </div>

              {/* Services list */}
              <div className="px-6 py-5 space-y-3">
                {services.map((svc, i) => (
                  <motion.div
                    key={svc.label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span className="text-[0.88rem] text-ink">{svc.label}</span>
                    </div>
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-accent/80">
                      {svc.status}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Footer bar */}
              <div className="px-6 py-3 bg-cream/50 border-t border-line-soft">
                <span className="font-mono text-[0.68rem] text-muted/60 uppercase tracking-[0.08em]">
                  ISO 27001 · ISO 9001 · Bitdefender Enterprise
                </span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
