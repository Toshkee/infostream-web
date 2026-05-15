"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Financial software",
    summary:
      "Core banking, reconciliation, treasury, and reporting systems built to clear millions of transactions a day and pass central-bank audits.",
  },
  {
    number: "02",
    title: "Registers & data systems",
    summary:
      "National registers for tax, pension, and identity — the systems of record that public institutions depend on every working day.",
  },
  {
    number: "03",
    title: "Security & compliance",
    summary:
      "Enterprise security delivered with Bitdefender — endpoint, network, and operational controls aligned to ISO 27001.",
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
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-12 border-b border-line-soft"
            >
              <div className="lg:col-span-1 pt-1">
                <span className="font-mono text-[0.78rem] text-muted tracking-[0.08em]">
                  {p.number}
                </span>
              </div>
              <div className="lg:col-span-5">
                <h3 className="text-[clamp(1.4rem,2vw+0.4rem,2.2rem)] font-serif font-normal leading-tight tracking-tight text-ink">
                  {p.title}
                </h3>
              </div>
              <div className="lg:col-span-5 lg:col-start-8 flex items-center">
                <p className="text-[0.95rem] leading-relaxed text-ink/65">
                  {p.summary}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[0.9rem] font-medium text-ink/70 hover:text-ink transition-colors group"
          >
            See all services
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
