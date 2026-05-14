"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="grain relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 pt-20 md:pt-28 pb-24 md:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-line-soft bg-cream-soft/70 backdrop-blur-sm py-1.5 pl-2 pr-4 text-[0.78rem] text-ink/80"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono tracking-[0.06em] uppercase text-[0.7rem] text-muted">
            In production
          </span>
          <span aria-hidden className="text-line">·</span>
          <span>6 national institutions, 24/7</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            <h1 className="display-xl text-ink max-w-[16ch]">
              The software that{" "}
              <span className="italic font-light text-accent">runs</span> a
              country&rsquo;s institutions.
            </h1>

            <p className="mt-10 max-w-xl text-lg md:text-[1.2rem] leading-relaxed text-ink/75">
              For fifteen years, Infostream has built and maintained the core
              financial, identity, and compliance systems trusted by
              Montenegro&rsquo;s ministries, the Central Bank, and Parliament.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-[0.95rem] font-medium text-cream-soft hover:bg-ink-soft transition-colors"
              >
                Start a conversation
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  <path
                    d="M2 7h10m0 0L7.5 2.5M12 7l-4.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href="#what-we-do"
                className="inline-flex h-12 items-center px-2 text-[0.95rem] font-medium text-ink underline-offset-4 hover:underline"
              >
                See what we build
              </Link>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 lg:pb-6"
          >
            <div className="border-l border-line pl-6 lg:pl-8 space-y-7">
              <div>
                <div className="eyebrow mb-2">Founded</div>
                <div className="text-2xl font-display font-light text-ink">
                  2010, Podgorica
                </div>
              </div>
              <div>
                <div className="eyebrow mb-2">Certified</div>
                <div className="text-[0.95rem] text-ink">
                  ISO 27001 &middot; ISO 9001
                </div>
              </div>
              <div>
                <div className="eyebrow mb-2">Security partner</div>
                <div className="text-[0.95rem] text-ink">
                  Bitdefender Enterprise
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-24 md:mt-32 flex items-center justify-between border-t border-line-soft pt-5"
        >
          <span className="eyebrow">Scroll</span>
          <span className="eyebrow text-ink/40">
            01 &mdash; The work
          </span>
        </motion.div>
      </div>
    </section>
  );
}
