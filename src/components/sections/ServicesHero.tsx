"use client";

import { m as motion } from "framer-motion";
import { HeadlineLine, ParticleCanvas } from "@/components/ui/HeroAnimations";
import type { Dictionary } from "@/lib/i18n/types";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ServicesHero({ dict }: { dict: Dictionary["services"]["hero"] }) {
  const { lines, intro } = dict;
  return (
    <section className="relative bg-bone overflow-hidden">
      <ParticleCanvas />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 pt-24 md:pt-36 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h1 className="display-lg text-ink">
              {lines.map((line, i) => (
                <HeadlineLine key={i} chunks={line.text} delay={line.delay} />
              ))}
            </h1>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end pb-2">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
              className="text-base leading-relaxed text-ink/70"
            >
              {intro}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
