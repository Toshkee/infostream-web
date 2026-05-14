"use client";

import { motion } from "framer-motion";

export function Statement() {
  return (
    <section className="grain relative bg-bone">
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 py-28 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-2">
            <div className="eyebrow">A note</div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-10"
          >
            <p className="display-lg max-w-[22ch] text-ink">
              When a finance ministry posts a budget revision at{" "}
              <span className="italic font-light text-accent">22:00</span>,
              the system must clear by 00:30. That deadline doesn&rsquo;t move.
              Neither do we.
            </p>

            <div className="mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-line-soft pt-6">
              <div className="font-mono text-[0.78rem] uppercase tracking-[0.18em] text-muted">
                Operations standard &middot; In use since 2012
              </div>
              <div className="text-[0.92rem] text-ink/70">
                Continuity is the product. Everything else is implementation.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
