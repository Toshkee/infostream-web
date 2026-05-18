"use client";

import { m as motion } from "framer-motion";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/types";

export function AboutLocation({ dict }: { dict: Dictionary["about"]["location"] }) {
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
              {dict.headline.map((chunk, i) =>
                typeof chunk === "string" ? (
                  <span key={i}>{chunk}</span>
                ) : (
                  <span key={i} className="italic font-light text-cream/55">
                    {chunk.text}
                  </span>
                ),
              )}
            </h2>
            <p className="mt-8 text-base leading-relaxed text-cream/60 max-w-sm">
              {dict.body}
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
                  {dict.addressLabel}
                </div>
                <address className="not-italic text-sm leading-relaxed text-cream/70">
                  {dict.addressLines.map((l, i) => (
                    <span key={i}>
                      {l}
                      {i < dict.addressLines.length - 1 && <br />}
                    </span>
                  ))}
                </address>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-cream/30 mb-2">
                    {dict.generalLabel}
                  </div>
                  <Link
                    href="mailto:info@infostream.co.me"
                    className="text-sm text-cream/70 hover:text-cream/90 transition-colors"
                  >
                    info@infostream.co.me
                  </Link>
                </div>

                <div>
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-cream/30 mb-2">
                    {dict.supportLabel}
                  </div>
                  <Link
                    href="mailto:servicedesk@infostream.co.me"
                    className="text-sm text-cream/70 hover:text-cream/90 transition-colors"
                  >
                    servicedesk@infostream.co.me
                  </Link>
                </div>

                <div>
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-cream/30 mb-2">
                    {dict.phoneLabel}
                  </div>
                  <Link
                    href="tel:+38220664808"
                    className="text-sm text-cream/70 hover:text-cream/90 transition-colors"
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
