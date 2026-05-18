"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HeadlineLine, ParticleCanvas } from "@/components/ui/HeroAnimations";
import type { Dictionary } from "@/lib/i18n/types";

const EASE = [0.22, 1, 0.36, 1] as const;

function Counter({ from, to, duration = 1.4, delay = 0 }: {
  from: number; to: number; duration?: number; delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    let rafId: number;
    const timeout = setTimeout(() => {
      const step = (ts: number) => {
        if (!startTime) startTime = ts;
        const p = Math.min((ts - startTime) / (duration * 1000), 1);
        setValue(Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3))));
        if (p < 1) rafId = requestAnimationFrame(step);
      };
      rafId = requestAnimationFrame(step);
    }, delay * 1000);
    return () => { clearTimeout(timeout); cancelAnimationFrame(rafId); };
  }, [inView, from, to, duration, delay]);

  return <span ref={ref}>{value}</span>;
}

export function Hero({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section className="relative bg-bone overflow-hidden">
      <ParticleCanvas />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 pt-24 md:pt-36 pb-28 md:pb-44">

        <div className="max-w-5xl">
          <h1 className="display-xl text-ink max-w-[20ch]">
            {dict.lines.map((line, i) => (
              <HeadlineLine key={i} chunks={line.text} delay={line.delay} />
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
            className="mt-10 max-w-xl text-lg md:text-[1.15rem] leading-relaxed text-ink/65"
          >
            {dict.intro}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
          className="mt-20 flex items-center gap-10 border-t border-line-soft pt-8 max-w-2xl"
        >
          <div>
            <div className="eyebrow mb-1">{dict.foundedLabel}</div>
            <div className="text-[1.05rem] font-medium text-ink">
              <Counter from={1994} to={2004} duration={1.4} delay={0.9} />{dict.foundedValueSuffix}
            </div>
          </div>
          <div>
            <div className="eyebrow mb-1">{dict.certifiedLabel}</div>
            <div className="text-[1.05rem] text-ink">{dict.certifiedValue}</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
