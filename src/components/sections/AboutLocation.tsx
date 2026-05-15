"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function AboutLocation() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-28 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <h2 className="display-lg text-cream max-w-[14ch]">
              Find us in{" "}
              <span className="italic font-light text-cream/55">Podgorica.</span>
            </h2>
            <p className="mt-8 text-[1.05rem] leading-relaxed text-cream/60 max-w-sm">
              All our engineers are based here. When you work with Infostream,
              you work with the same team throughout — not a rotating pool of
              contractors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 lg:col-start-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-cream/30 mb-3">
                  Address
                </div>
                <address className="not-italic text-[0.95rem] leading-relaxed text-cream/70">
                  4 Rista Dragićevića<br />
                  Podgorica, Montenegro
                </address>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-cream/30 mb-2">
                    General
                  </div>
                  <Link
                    href="mailto:info@infostream.co.me"
                    className="text-[0.95rem] text-cream/70 hover:text-cream/90 transition-colors"
                  >
                    info@infostream.co.me
                  </Link>
                </div>

                <div>
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-cream/30 mb-2">
                    Support
                  </div>
                  <Link
                    href="mailto:servicedesk@infostream.co.me"
                    className="text-[0.95rem] text-cream/70 hover:text-cream/90 transition-colors"
                  >
                    servicedesk@infostream.co.me
                  </Link>
                </div>

                <div>
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-cream/30 mb-2">
                    Phone
                  </div>
                  <Link
                    href="tel:+38220664808"
                    className="text-[0.95rem] text-cream/70 hover:text-cream/90 transition-colors"
                  >
                    +382 (0) 20 664 808
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
