"use client";

import { motion } from "framer-motion";

export function ServicesHero() {
  return (
    <section className="bg-bone pt-24 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted mb-6"
            >
              Services
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="display-lg text-ink"
            >
              What we build.
            </motion.h1>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end pb-2">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-[1.05rem] leading-relaxed text-ink/70"
            >
              Three practice areas — financial software, national registers, and
              enterprise security — each built to meet the bar set by the
              institutions that depend on them every day.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
