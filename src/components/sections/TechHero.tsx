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
          className="mb-12 flex items-center gap-3 text-[0.75rem] font-mono uppercase tracking-[0.18em] text-muted"
        >
          <Link href="/" className="hover:text-ink transition-colors">
            Home
          </Link>
          <span className="text-line">/</span>
          <span className="text-ink">Technologies</span>
        </motion.div>

        {/* Headline block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="eyebrow mb-6">Stacks we operate</div>
            <h1 className="display-xl text-ink max-w-[16ch]">
              The platforms behind systems that{" "}
              <span className="italic font-light text-accent">
                can&rsquo;t fail
              </span>
              .
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:pt-4"
          >
            <p className="max-w-xl text-lg md:text-[1.15rem] leading-relaxed text-ink/75">
              Long-lived stacks, chosen for decade-scale support, audit-grade
              observability, and large pools of qualified engineers in the
              region. We don&rsquo;t chase frameworks &mdash; we operate them
              for fifteen years.
            </p>
          </motion.div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-line-soft" />
    </section>
  );
}
