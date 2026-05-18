"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@%&";
const EASE = "circOut" as const;

function useScramble(text: string, trigger: boolean, delay = 0) {
  const [output, setOutput] = useState(text); // SSR-safe: start with real text

  useEffect(() => {
    if (!trigger) return;
    let frame = 0;
    const totalFrames = 28;
    let timeoutId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setInterval>;

    timeoutId = setTimeout(() => {
      setOutput(text.replace(/\S/g, () => CHARS[Math.floor(Math.random() * CHARS.length)]));
      intervalId = setInterval(() => {
        frame++;
        setOutput(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              const revealAt = Math.floor((i / text.length) * totalFrames * 0.75);
              if (frame > revealAt + 4) return char;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );
        if (frame >= totalFrames) {
          setOutput(text);
          clearInterval(intervalId);
        }
      }, 45);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [trigger, text, delay]);

  return output;
}

const illustrations = [
  "/images/illustrations/data.svg",
  "/images/illustrations/web-app.svg",
  "/images/illustrations/server.svg",
];

function ServiceItem({ label, desc, inView, scrambleDelay }: { label: string; desc: string; inView: boolean; scrambleDelay: number }) {
  const [open, setOpen] = useState(false);
  const scrambled = useScramble(label, inView, scrambleDelay);
  return (
    <div
      className="relative px-4 py-3 text-center cursor-default group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="text-[0.82rem] text-ink/60 leading-snug select-none group-hover:text-ink/80 transition-colors duration-150">
        {scrambled}
      </span>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.18, delay: 0.5, ease: EASE } }}
            exit={{ opacity: 0, y: 6, scale: 0.97, transition: { duration: 0.12, ease: EASE } }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 z-30 w-56 bg-ink text-cream-soft text-[0.75rem] leading-relaxed px-4 py-3 pointer-events-none shadow-lg"
          >
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-cream-soft/50 mb-1">{label}</div>
            {desc}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-ink" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function BranchNode({ label, illustration, services, lineDelay, nodeDelay, inView }: {
  label: string;
  illustration: string;
  services: { label: string; desc: string }[];
  lineDelay: number;
  nodeDelay: number;
  inView: boolean;
}) {
  const scrambled = useScramble(label.toUpperCase(), inView, nodeDelay * 1000 + 200);

  const line = (delay: number, duration: number) => ({
    initial: { scaleY: 0 },
    animate: inView ? { scaleY: 1 } : { scaleY: 0 },
    transition: { duration, delay, ease: EASE },
    style: { transformOrigin: "top center" },
  });

  return (
    <div className="flex flex-col items-center px-3">
      <motion.div {...line(lineDelay, 0.35)} className="w-px h-12 bg-line-soft" />

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.4, delay: nodeDelay, ease: EASE }}
        className="relative w-28 h-24 mb-3 opacity-75"
      >
        <Image src={illustration} alt="" fill className="object-contain" aria-hidden />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
        transition={{ duration: 0.4, delay: nodeDelay + 0.05, ease: EASE }}
        className="w-full border border-line-soft bg-bone px-4 py-3 text-center"
      >
        <span className="font-mono text-[0.68rem] tracking-[0.1em] text-accent">
          {scrambled}
        </span>
      </motion.div>

      <motion.div {...line(nodeDelay + 0.25, 0.3)} className="w-px h-12 bg-line-soft/60" />

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
        transition={{ duration: 0.45, delay: nodeDelay + 0.45, ease: EASE }}
        className="w-full border border-line-soft/60 divide-y divide-line-soft/50"
      >
        {services.map((svc, idx) => (
          <ServiceItem
            key={svc.label}
            label={svc.label}
            desc={svc.desc}
            inView={inView}
            scrambleDelay={(nodeDelay + 0.55 + idx * 0.18) * 1000}
          />
        ))}
      </motion.div>
    </div>
  );
}

export function WhatWeDo({
  dict,
  lang,
}: {
  dict: Dictionary["whatWeDo"];
  lang: Locale;
}) {
  const branches = dict.branches.map((b, i) => ({
    ...b,
    illustration: illustrations[i] ?? illustrations[0],
  }));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const line = (delay: number, duration: number, axis: "x" | "y") => ({
    initial: axis === "y" ? { scaleY: 0 } : { scaleX: 0 },
    animate: inView
      ? axis === "y" ? { scaleY: 1 } : { scaleX: 1 }
      : axis === "y" ? { scaleY: 0 } : { scaleX: 0 },
    transition: { duration, delay, ease: EASE },
    style: axis === "y" ? { transformOrigin: "top center" } : { transformOrigin: "center" },
  });

  return (
    <section id="what-we-do" className="bg-bone">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 md:py-40">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-4">
            <div className="eyebrow">{dict.eyebrow}</div>
          </div>
          <div className="lg:col-span-8">
            <p className="text-[1.1rem] leading-relaxed text-ink/70 max-w-2xl">
              {dict.intro}
            </p>
          </div>
        </div>

        {/* Tree diagram */}
        <div ref={ref} className="flex flex-col items-center">

          {/* Root node */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="border border-accent/30 bg-accent/5 px-10 py-3.5"
          >
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-accent/70">
              {dict.root}
            </span>
          </motion.div>

          {/* Trunk */}
          <motion.div {...line(0.2, 0.4, "y")} className="w-px h-14 bg-line-soft" />

          {/* Fork */}
          <div className="relative w-full max-w-6xl">
            <div className="hidden md:block">
              <motion.div
                {...line(0.6, 0.45, "x")}
                className="absolute top-0 left-[16.67%] right-[16.67%] h-px bg-line-soft"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-0">
              {branches.map((branch, i) => (
                <BranchNode
                  key={branch.label}
                  label={branch.label}
                  illustration={branch.illustration}
                  services={branch.services}
                  lineDelay={1.0 + i * 0.1}
                  nodeDelay={1.25 + i * 0.1}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href={`/${lang}/services`}
            className="inline-flex items-center gap-2 text-[0.9rem] font-medium text-accent/60 hover:text-accent transition-colors group"
          >
            {dict.seeFullServices}
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
