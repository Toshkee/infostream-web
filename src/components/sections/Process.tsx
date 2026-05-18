"use client";

import { m as motion } from "framer-motion";

const phases = [
  {
    number: "P01",
    title: "Discovery",
    body: "We start with the existing system — its data, its operators, its constraints. No greenfield assumptions. We map what is, before we propose what could be.",
    duration: "2–6 weeks",
  },
  {
    number: "P02",
    title: "Architecture & risk",
    body: "Specifications, threat model, integration surface. Reviewed jointly with your team and signed off before a line of production code is written.",
    duration: "3–8 weeks",
  },
  {
    number: "P03",
    title: "Build & integration",
    body: "Iterative delivery against the spec. Working software in front of operators every two weeks. Migration plans rehearsed against staging copies of real data.",
    duration: "3–12 months",
  },
  {
    number: "P04",
    title: "Operations",
    body: "Hand-off is the start, not the end. We run, monitor, and audit the systems we build — under the same ISO controls as our development practice.",
    duration: "Ongoing",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-cream border-y border-line-soft">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-4">
            <div className="eyebrow">How we work</div>
            <h2 className="display-lg mt-6 text-ink max-w-[16ch]">
              From assessment to{" "}
              <span className="italic font-light text-accent">operations</span>.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 lg:pt-3">
            <p className="text-lg leading-relaxed text-ink/75 max-w-2xl">
              Four phases, applied with the same rigour to a six-week
              integration as to a multi-year national programme. The phase
              boundaries exist so that go / no-go decisions are explicit, never
              implicit.
            </p>
          </div>
        </div>

        <div className="border-t border-line">
          {phases.map((p, i) => (
            <motion.article
              key={p.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-12 border-b border-line"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute left-0 top-0 h-px w-0 bg-accent transition-[width] duration-500 ease-out group-hover:w-full"
              />

              <div className="lg:col-span-2 flex items-baseline gap-4">
                <span className="font-mono text-[0.78rem] tracking-[0.1em] text-accent">
                  {p.number}
                </span>
              </div>

              <div className="lg:col-span-5">
                <h3 className="display-md text-ink">
                  {p.title}
                </h3>
              </div>

              <div className="lg:col-span-4">
                <p className="text-base leading-relaxed text-ink/75">
                  {p.body}
                </p>
              </div>

              <div className="lg:col-span-1 lg:text-right">
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-accent/70 whitespace-nowrap">
                  {p.duration}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
