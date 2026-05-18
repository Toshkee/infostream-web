"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Dictionary } from "@/lib/i18n/types";

const EASE = [0.22, 1, 0.36, 1] as const;

export function AboutValues({ dict }: { dict: Dictionary["about"]["values"] }) {
  const values = dict.items;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-bone border-y border-line-soft">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 md:py-40">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 md:mb-24">
          <div className="lg:col-span-4">
            <div className="eyebrow">{dict.eyebrow}</div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-[1.1rem] leading-relaxed text-ink/70 max-w-2xl">
              {dict.intro}
            </p>
          </div>
        </div>

        {/* Mobile: numbered list */}
        <div className="md:hidden divide-y divide-line-soft">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
              className="py-7"
            >
              <div className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-accent mb-3">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display font-light text-[1.4rem] text-ink leading-snug mb-3">
                {v.title}
              </h3>
              <p className="text-[0.9rem] leading-relaxed text-ink/55">{v.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Desktop: tree diagram */}
        <div ref={ref} className="hidden md:block relative mx-auto max-w-4xl">

          {/* Vertical spine */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: EASE }}
            style={{ transformOrigin: "top center" }}
            className="absolute left-1/2 -translate-x-1/2 inset-y-0 w-px bg-line-soft"
          />

          {/* Root node */}
          <div className="relative flex justify-center pb-20">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="border border-accent/30 bg-accent/5 px-10 py-3.5 z-10 bg-bone"
            >
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-accent/70">
                {dict.root}
              </span>
            </motion.div>
          </div>

          {/* Value branches — alternating left / right */}
          <div className="space-y-16 pb-4">
            {values.map((v, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={v.title} className="relative flex items-start">

                  {/* Spine dot */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.15, ease: EASE }}
                    className="absolute left-1/2 -translate-x-1/2 top-[1.1rem] w-2 h-2 rounded-full bg-accent/50 z-10"
                  />

                  {/* Horizontal branch line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.4, delay: 0.65 + i * 0.15, ease: EASE }}
                    style={{ transformOrigin: isLeft ? "right center" : "left center" }}
                    className={`absolute top-[1.4rem] h-px bg-line-soft ${
                      isLeft
                        ? "left-[4%] right-[calc(50%+0.75rem)]"
                        : "left-[calc(50%+0.75rem)] right-[4%]"
                    }`}
                  />

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -16 : 16 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -16 : 16 }}
                    transition={{ duration: 0.55, delay: 0.75 + i * 0.15, ease: EASE }}
                    className={`w-[46%] relative z-10 bg-bone ${isLeft ? "mr-auto text-left pr-6" : "ml-auto text-left pl-6"}`}
                  >
                    <h3 className="font-display font-light text-[clamp(1.1rem,1.5vw+0.3rem,1.5rem)] text-ink leading-snug mb-3">
                      {v.title}
                    </h3>
                    <p className="text-[0.88rem] leading-relaxed text-ink/55">
                      {v.body}
                    </p>
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
