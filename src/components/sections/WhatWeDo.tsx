"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Financial software",
    summary:
      "Core banking, reconciliation, treasury, and reporting systems built to clear millions of transactions a day and pass central-bank audits.",
    detail: [
      "Core banking and ledger",
      "Reconciliation & settlement",
      "Regulatory reporting",
      "Anti-fraud & compliance",
    ],
  },
  {
    number: "02",
    title: "Registers & data systems",
    summary:
      "National registers for tax, pension, and identity — the systems of record that public institutions depend on every working day.",
    detail: [
      "Tax & revenue registers",
      "Pension & social systems",
      "Identity & document systems",
      "Inter-ministry data exchange",
    ],
  },
  {
    number: "03",
    title: "Security & compliance",
    summary:
      "Enterprise security delivered with Bitdefender — endpoint, network, and operational controls aligned to ISO 27001.",
    detail: [
      "Bitdefender enterprise deployment",
      "ISO 27001 management systems",
      "Incident response & monitoring",
      "Compliance audits",
    ],
  },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-bone">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-4">
            <div className="eyebrow">What we do</div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="display-lg text-ink max-w-[18ch]">
              Three disciplines.{" "}
              <span className="italic font-light text-accent">
                One standard.
              </span>
            </h2>
            <p className="mt-8 max-w-2xl text-[1.1rem] leading-relaxed text-ink/75">
              Every system we build has to clear the bar set by the institutions
              we serve: regulators, finance ministries, and national operators.
              That standard shapes how we work across all three of our
              practices.
            </p>
          </div>
        </div>

        <div className="border-t border-line-soft">
          {pillars.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-14 border-b border-line-soft"
            >
              <div className="lg:col-span-2">
                <div className="font-mono text-[0.85rem] text-muted">
                  {p.number}
                </div>
              </div>

              <div className="lg:col-span-5">
                <h3 className="display-lg !text-[clamp(1.75rem,2.5vw+0.5rem,2.75rem)] text-ink">
                  {p.title}
                </h3>
                <p className="mt-5 text-[1.05rem] leading-relaxed text-ink/75 max-w-md">
                  {p.summary}
                </p>
              </div>

              <div className="lg:col-span-5 lg:pt-3">
                <ul className="space-y-3">
                  {p.detail.map((d) => (
                    <li
                      key={d}
                      className="flex items-baseline gap-3 text-[0.98rem] text-ink"
                    >
                      <span className="inline-block w-1 h-1 rounded-full bg-accent shrink-0 translate-y-[-3px]" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
