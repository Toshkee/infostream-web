"use client";

import { motion } from "framer-motion";

const clients = [
  "Ministry of Finance",
  "Central Bank of Montenegro",
  "Parliament of Montenegro",
  "Ministry of Interior",
  "Tax Authority",
  "Ministry of Defense",
];

const marqueeItems = [
  "Core Banking",
  "Reconciliation",
  "Treasury",
  "Tax Register",
  "Pension Register",
  "Identity Systems",
  "Inter-ministry Exchange",
  "Regulatory Reporting",
  "Endpoint Security",
  "Incident Response",
  "Audit & Compliance",
  "Data Migration",
];

export function TrustStrip() {
  return (
    <section className="border-y border-line-soft bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-3">
            <div className="eyebrow">Trusted by</div>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-muted max-w-xs">
              National institutions and regulated industries across Montenegro.
            </p>
          </div>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
            }}
            className="lg:col-span-9 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-5"
          >
            {clients.map((c) => (
              <motion.li
                key={c}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-[1.05rem] font-display font-light text-ink"
              >
                {c}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      <div className="relative border-t border-line-soft overflow-hidden">
        {/* fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-cream to-transparent" />

        <div className="marquee-track flex gap-12 py-5 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-mono text-[0.78rem] uppercase tracking-[0.18em] text-muted/80 flex items-center gap-12"
            >
              {item}
              <span aria-hidden className="text-line">
                /
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
