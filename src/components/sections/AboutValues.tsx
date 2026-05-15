"use client";

import { motion } from "framer-motion";

const values = [
  {
    number: "V01",
    title: "Bring new value to customer",
    body: "We bring willingness to do what it takes to create new value for all stakeholders.",
  },
  {
    number: "V02",
    title: "Pursue excellence",
    body: "We embrace expertise and solutions-oriented teams. We focus on solutions, not problems.",
  },
  {
    number: "V03",
    title: "Do things responsibly",
    body: "We simultaneously support the success of our employees, partners and customers.",
  },
  {
    number: "V04",
    title: "Spark innovation",
    body: "We strive to the technological breakthroughs and innovations that customers want.",
  },
  {
    number: "V05",
    title: "Long lasting relations",
    body: "We believe that lasting collaboration is a key component to delivering great results and solutions. Our goal is becoming our clients’ long-term, trusted partner.",
  },
];

export function AboutValues() {
  return (
    <section className="bg-bone border-b border-line-soft">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 md:py-40">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-4">
            <h2 className="display-lg text-ink max-w-[16ch]">
              Solutions driven by our{" "}
              <span className="italic font-light text-accent">core values.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-6 lg:pt-3">
            <p className="text-[1.1rem] leading-relaxed text-ink/70 max-w-xl">
              Five principles that shaped every architectural decision, every
              client commitment, and every on-call rotation since 2010.
            </p>
          </div>
        </div>

        <div className="border-t border-line">
          {values.map((v, i) => (
            <motion.article
              key={v.number}
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
                className="pointer-events-none absolute left-0 top-0 h-px w-0 bg-ink transition-[width] duration-500 ease-out group-hover:w-full"
              />

              <div className="lg:col-span-2">
                <span className="font-mono text-[0.78rem] tracking-[0.1em] text-muted">
                  {v.number}
                </span>
              </div>

              <div className="lg:col-span-4">
                <h3 className="font-display text-[clamp(1.4rem,1.8vw+0.4rem,1.9rem)] font-light tracking-tight text-ink leading-[1.1]">
                  {v.title}
                </h3>
              </div>

              <div className="lg:col-span-5 lg:col-start-8">
                <p className="text-[1rem] leading-relaxed text-ink/70">
                  {v.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
