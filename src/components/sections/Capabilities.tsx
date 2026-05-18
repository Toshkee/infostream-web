"use client";

import { m as motion } from "framer-motion";
import { CountUp } from "@/components/ui/CountUp";

type Stat = {
  value: React.ReactNode;
  label: string;
};

const stats: Stat[] = [
  {
    value: (
      <>
        <CountUp to={15} suffix="+" />
      </>
    ),
    label: "Years building for the public sector",
  },
  {
    value: <CountUp to={6} />,
    label: "National institutions as long-standing clients",
  },
  { value: "24/7", label: "Operations for systems that cannot go down" },
  { value: "ISO", label: "27001 and 9001 certified, audited annually" },
];

export function Capabilities() {
  return (
    <section id="about" className="grain relative bg-ink text-cream">
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 py-28 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="eyebrow !text-cream/55">Why Infostream</div>
            <h2 className="display-lg mt-6 text-cream max-w-[14ch]">
              We don&rsquo;t ship to a deadline.{" "}
              <span className="italic font-light text-cream/55">
                We ship to a standard.
              </span>
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-cream/70">
              The institutions we work with cannot tolerate a failed deploy.
              That constraint shaped a company that treats correctness,
              continuity, and audit-readiness as the baseline &mdash; not the
              ceiling.
            </p>

            <div className="mt-10 inline-flex items-center gap-3 text-sm text-cream/60">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cream/40 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cream/80" />
              </span>
              All systems nominal — last audit Q1 2026
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-cream/10"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bg-ink p-8 md:p-10 min-h-[200px] flex flex-col justify-between"
              >
                <div className="font-display text-[3.5rem] md:text-[4.75rem] leading-none font-light tracking-tight text-cream tabular-nums">
                  {s.value}
                </div>
                <div className="text-sm leading-snug text-cream/65 max-w-[24ch]">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
