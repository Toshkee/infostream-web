"use client";

import { motion } from "framer-motion";

const principles = [
  {
    n: "01",
    title: "Boring beats novel",
    body: "If a stack has fewer than ten years of production history, we don't run it for a national institution. Predictability is a feature.",
  },
  {
    n: "02",
    title: "Vendor-supported, locally staffable",
    body: "We avoid technologies that can only be hired for in two cities globally. The team that maintains the system has to be replaceable.",
  },
  {
    n: "03",
    title: "Audit-grade by default",
    body: "Every component must produce evidence — change logs, access trails, deploy records — that a regulator can read without an interpreter.",
  },
  {
    n: "04",
    title: "Operate what we build",
    body: "We don't hand systems over and walk away. The team that designed the stack is the same team running it in year fifteen.",
  },
];

export function TechPrinciples() {
  return (
    <section className="bg-cream border-y border-line-soft">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-4">
            <div className="eyebrow">Our standard</div>
            <h2 className="display-lg mt-6 text-ink max-w-[14ch]">
              How we{" "}
              <span className="italic font-light text-accent">
                choose
              </span>{" "}
              what we operate.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {principles.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-t border-line pt-6 max-w-md"
            >
              <div className="flex items-baseline justify-between mb-3">
                <span className="font-mono text-[0.78rem] tracking-[0.1em] text-muted">
                  {p.n}
                </span>
              </div>
              <h3 className="font-display text-[1.5rem] font-light tracking-tight text-ink leading-tight">
                {p.title}
              </h3>
              <p className="mt-4 text-[1rem] leading-relaxed text-ink/75">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
