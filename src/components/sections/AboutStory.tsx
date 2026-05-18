"use client";

import { m as motion } from "framer-motion";
import type { Dictionary } from "@/lib/i18n/types";

export function AboutStory({ dict }: { dict: Dictionary["about"]["story"] }) {
  const { stats, paragraph } = dict;
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 md:py-40">

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-ink px-8 py-12 flex flex-col gap-4"
            >
              <span className="font-display font-light text-[clamp(3.5rem,6vw,6rem)] leading-none tracking-tight text-cream-soft/90">
                {s.value}
              </span>
              <div>
                <div className="text-sm font-medium text-cream-soft/80 mb-1">
                  {s.label}
                </div>
                <div className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-cream-soft/30">
                  {s.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Single paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 lg:mt-24 grid grid-cols-1 lg:grid-cols-12"
        >
          <p className="lg:col-span-7 lg:col-start-4 text-xl md:text-2xl leading-relaxed text-cream-soft/60 text-center">
            {paragraph}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
