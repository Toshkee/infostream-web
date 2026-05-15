"use client";

import { motion } from "framer-motion";

const facts = [
  { label: "Founded", value: "2004" },
  { label: "Location", value: "Podgorica, Montenegro" },
  { label: "Certified", value: "ISO 27001 · ISO 9001" },
  { label: "Security partner", value: "Bitdefender Enterprise" },
];

export function AboutHero() {
  return (
    <section className="grain relative bg-bone border-b border-line-soft">
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 pt-24 md:pt-32 pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <h1 className="display-xl text-ink max-w-[18ch]">
              Twenty years building the systems{" "}
              <span className="italic font-light text-accent">Montenegro runs on.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:pb-1"
          >
            <div className="grid grid-cols-2 gap-x-8 gap-y-7">
              {facts.map((f) => (
                <div key={f.label}>
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted mb-1">
                    {f.label}
                  </div>
                  <div className="text-[0.95rem] text-ink leading-snug">{f.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
