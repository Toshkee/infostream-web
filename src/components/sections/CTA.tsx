"use client";

import { m as motion } from "framer-motion";
import type { Dictionary } from "@/lib/i18n/types";

export function CTA({ dict }: { dict: Dictionary["cta"] }) {
  return (
    <section id="contact" className="bg-ink">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-28 md:pt-40 pb-20 md:pb-32">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pb-20 border-b border-white/10"
        >
          <div className="lg:col-span-7">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent/70 mb-6">
              {dict.eyebrow}
            </div>
            <h2 className="display-xl text-cream-soft max-w-[14ch]">
              {dict.headline.map((chunk, i) =>
                typeof chunk === "string" ? (
                  <span key={i}>{chunk}</span>
                ) : (
                  <span key={i} className="italic font-light text-accent">
                    {chunk.text}
                  </span>
                ),
              )}
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-base leading-relaxed text-cream-soft/55 max-w-sm">
              {dict.intro}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12"
        >
          <div className="lg:col-span-5 space-y-8">
            {dict.contacts.map((c) => (
              <div key={c.label}>
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-cream-soft/30 mb-2">
                  {c.label}
                </div>
                <a
                  href={c.href}
                  className="display-sm text-cream-soft/90 hover:text-accent transition-colors duration-200"
                >
                  {c.value}
                </a>
              </div>
            ))}
          </div>

          <div className="lg:col-span-6 lg:col-start-7 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:pt-1">
            {dict.details.map((d) => (
              <div key={d.label}>
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-cream-soft/30 mb-2">
                  {d.label}
                </div>
                <p className="text-sm leading-relaxed text-cream-soft/55 whitespace-pre-line">
                  {d.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
