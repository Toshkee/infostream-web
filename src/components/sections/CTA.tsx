"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTA() {
  return (
    <section id="contact" className="bg-bone">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end"
        >
          <div className="lg:col-span-8">
            <div className="eyebrow">Get in touch</div>
            <h2 className="display-xl mt-6 text-ink max-w-[14ch]">
              Tell us about{" "}
              <span className="italic font-light text-accent">the system</span>{" "}
              you need to trust.
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-6 lg:pb-6">
            <p className="text-[1.05rem] leading-relaxed text-ink/75 max-w-sm">
              We work directly with the people responsible for the systems
              &mdash; not through procurement intermediaries. First conversation
              is always with an engineer.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="mailto:info@infostream.me"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-[0.95rem] font-medium text-cream-soft hover:bg-ink-soft transition-colors"
              >
                info@infostream.me
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
            </div>

            <div className="pt-6 border-t border-line-soft text-[0.9rem] text-muted">
              Podgorica, Montenegro
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
