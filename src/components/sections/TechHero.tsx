"use client";

import { m as motion } from "framer-motion";
import { HeadlineLine, ParticleCanvas } from "@/components/ui/HeroAnimations";
import type { Dictionary } from "@/lib/i18n/types";

const EASE = [0.22, 1, 0.36, 1] as const;

export function TechHero({ dict }: { dict: Dictionary["tech"]["hero"] }) {
  const { lines, intro } = dict;
  return (
    <section className="relative overflow-hidden bg-bone">
      <ParticleCanvas />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <h1 className="display-xl text-ink max-w-[16ch]">
              {lines.map((line, i) => (
                <HeadlineLine key={i} chunks={line.text} delay={line.delay} />
              ))}
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
            className="lg:col-span-5 lg:pt-4"
          >
            <p className="max-w-xl text-lg md:text-lg leading-relaxed text-ink/75">
              {intro}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-line-soft" />
    </section>
  );
}
