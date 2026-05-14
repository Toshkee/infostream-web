"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function TechHero() {
  return (
    <section className="grain relative overflow-hidden bg-bone">
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 pt-16 md:pt-24 pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 flex items-center gap-3 text-[0.75rem] font-mono uppercase tracking-[0.18em] text-muted"
        >
          <Link
            href="/"
            className="hover:text-ink transition-colors"
          >
            Home
          </Link>
          <span className="text-line">/</span>
          <span className="text-ink">Technologies</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            <h1 className="display-xl text-ink max-w-[16ch]">
              The platforms behind systems that{" "}
              <span className="italic font-light text-accent">
                can&rsquo;t fail
              </span>
              .
            </h1>

            <p className="mt-10 max-w-xl text-lg md:text-[1.2rem] leading-relaxed text-ink/75">
              Long-lived stacks, chosen for decade-scale support, audit-grade
              observability, and large pools of qualified engineers in the
              region. We don&rsquo;t chase frameworks &mdash; we operate them
              for fifteen years.
            </p>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 lg:pb-6"
          >
            <div className="border-l border-line pl-6 lg:pl-8 space-y-7">
              <div>
                <div className="eyebrow mb-2">Primary</div>
                <div className="text-2xl font-display font-light text-ink">
                  Oracle 23ai
                </div>
              </div>
              <div>
                <div className="eyebrow mb-2">Stacks</div>
                <div className="text-[0.95rem] text-ink">
                  4 primary &middot; T01 &mdash; T04
                </div>
              </div>
              <div>
                <div className="eyebrow mb-2">Security</div>
                <div className="text-[0.95rem] text-ink">
                  Bitdefender Enterprise
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-line-soft" />
    </section>
  );
}
