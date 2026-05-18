"use client";

import { m as motion } from "framer-motion";
import { HeadlineLine, ParticleCanvas } from "@/components/ui/HeroAnimations";
import type { Dictionary } from "@/lib/i18n/types";

const EASE = [0.22, 1, 0.36, 1] as const;

export function AboutHero({ dict }: { dict: Dictionary["about"]["hero"] }) {
  const { lines, facts } = dict;
  return (
    <section className="relative bg-bone overflow-hidden border-b border-line-soft">
      <ParticleCanvas />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 pt-24 md:pt-36 pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">

          <div className="lg:col-span-7">
            <h1 className="display-xl text-ink">
              {lines.map((line, i) => (
                <HeadlineLine key={i} chunks={line.text} delay={line.delay} />
              ))}
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
            className="lg:col-span-5 lg:pb-1"
          >
            <div className="grid grid-cols-2 gap-x-8 gap-y-7">
              {facts.map((f) => (
                <div key={f.label}>
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-accent/70 mb-1">
                    {f.label}
                  </div>
                  <div className="text-sm text-ink leading-snug">{f.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
