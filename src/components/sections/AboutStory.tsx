"use client";

import { motion } from "framer-motion";

export function AboutStory() {
  return (
    <section className="bg-teal-wash border-b border-line-soft">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <p className="font-display text-[clamp(1.5rem,2.2vw+0.5rem,2.4rem)] font-light italic leading-[1.2] text-accent max-w-[20ch]">
              &ldquo;Being a reliable partner to the digital community, a responsible entity in the economic ecosystem, an initiator of positive changes and innovations.&rdquo;
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 lg:col-start-7 space-y-6 text-[1.05rem] leading-relaxed text-ink/75"
          >
            <p>
              We are specialized in the development of enterprise IT solutions in
              the area of finance and public services.
            </p>
            <p>
              Our approach is to use a flexible and agile methodology to software
              development with specific and strong project management, verified by
              ISO standards in information security management and software
              engineering, development and maintenance of software.
            </p>
            <p>
              Our team of engineers and consultants, with over 20 years of
              experience, are capable of implementing large scale enterprise IT
              projects on time and on budget.
            </p>
            <p>
              We love to govern new exciting technologies and tools that motivate
              us to build beautiful and functional software. We leverage our deep
              tech expertise in Oracle, Microsoft .NET, C#, MVC, Java, Angular,
              Apex, to develop custom cutting-edge products.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
