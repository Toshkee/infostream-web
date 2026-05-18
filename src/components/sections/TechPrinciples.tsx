"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Dictionary } from "@/lib/i18n/types";

const EASE = [0.22, 1, 0.36, 1] as const;

export function TechPrinciples({ dict }: { dict: Dictionary["tech"]["principles"] }) {
  const principles = dict.items;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white border-y border-line-soft">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 md:py-40">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 md:mb-24">
          <div className="lg:col-span-4">
            <div className="eyebrow">{dict.eyebrow}</div>
            <h2 className="display-lg mt-6 text-ink max-w-[16ch]">
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
          <div className="lg:col-span-7 lg:col-start-6 lg:pt-3">
            <p className="text-[1.1rem] leading-relaxed text-ink/70 max-w-2xl">
              {dict.intro}
            </p>
          </div>
        </div>

        {/* Mobile: numbered list */}
        <div className="md:hidden divide-y divide-line-soft">
          {principles.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
              className="py-7"
            >
              <div className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-accent mb-3">
                {p.n}
              </div>
              <h3 className="font-display font-light text-[1.4rem] text-ink leading-snug mb-3 tracking-tight">
                {p.title}.
              </h3>
              <p className="text-[0.9rem] leading-relaxed text-ink/55">{p.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Desktop: tree diagram */}
        <div ref={ref} className="hidden md:block relative mx-auto max-w-4xl">

          {/* Vertical spine */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.4, delay: 0.1, ease: EASE }}
            style={{ transformOrigin: "top center" }}
            className="absolute left-1/2 -translate-x-1/2 inset-y-0 w-px bg-line"
          />

          {/* Root node */}
          <div className="relative flex justify-center pb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="border border-line px-10 py-4 z-10 bg-white"
            >
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink/40">
                {dict.root}
              </span>
            </motion.div>
          </div>

          {/* Principle branches — alternating left / right */}
          <div className="space-y-20 pb-4">
            {principles.map((p, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={p.n} className="relative flex items-start">

                  {/* Spine dot */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.18, ease: EASE }}
                    className="absolute left-1/2 -translate-x-1/2 top-[1.6rem] w-2.5 h-2.5 rounded-full bg-ink/30 z-10"
                  />

                  {/* Horizontal branch */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.45, delay: 0.65 + i * 0.18, ease: EASE }}
                    style={{ transformOrigin: isLeft ? "right center" : "left center" }}
                    className={`absolute top-[1.85rem] h-px bg-line ${
                      isLeft
                        ? "left-[4%] right-[calc(50%+1rem)]"
                        : "left-[calc(50%+1rem)] right-[4%]"
                    }`}
                  />

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -24 : 24 }}
                    transition={{ duration: 0.65, delay: 0.78 + i * 0.18, ease: EASE }}
                    className={`w-[46%] relative z-10 ${isLeft ? "mr-auto" : "ml-auto"}`}
                  >
                    <div className="border border-line bg-bone p-7 group hover:border-ink/20 transition-colors duration-300">
                      <h3 className="font-display font-light text-[clamp(1.15rem,1.6vw+0.3rem,1.6rem)] text-ink leading-snug mb-3 tracking-tight">
                        {p.title}.
                      </h3>
                      <p className="text-[0.88rem] leading-relaxed text-ink/55">
                        {p.body}
                      </p>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
