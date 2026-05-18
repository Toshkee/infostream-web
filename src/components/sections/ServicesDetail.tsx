"use client";

import { useState } from "react";
import { m as motion, AnimatePresence } from "framer-motion";
import type { Dictionary } from "@/lib/i18n/types";

export function ServicesDetail({ dict }: { dict: Dictionary["services"]["detail"] }) {
  const services = dict;
  const [open, setOpen] = useState<string>("");

  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pb-28 md:pb-40">
        <div className="border-t border-line-soft">
          {services.map((s) => {
            const isOpen = open === s.number;
            return (
              <div key={s.number} className="border-b border-line-soft">
                {/* Row trigger */}
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? "" : s.number)}
                  className="group w-full text-left py-6 md:py-8 grid grid-cols-12 gap-4 md:gap-6 items-center"
                >
                  <span className="col-span-1 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-accent">
                    {s.number}
                  </span>

                  <h2 className={`col-span-9 display-md transition-colors duration-200 ${
                    isOpen ? "text-accent" : "text-ink group-hover:text-ink/70"
                  }`}>
                    {s.title}
                  </h2>

                  <div className="col-span-2 flex justify-end">
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className={`text-2xl font-light leading-none transition-colors duration-200 ${
                        isOpen ? "text-accent" : "text-ink/30 group-hover:text-ink/50"
                      }`}
                    >
                      +
                    </motion.span>
                  </div>
                </button>

                {/* Expandable content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

                        {/* Description + clients */}
                        <div className="lg:col-span-4 lg:col-start-2">
                          <p className="text-base leading-relaxed text-ink/65 mb-8">
                            {s.description}
                          </p>
                          <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-accent/70 leading-loose border-t border-line-soft pt-5">
                            {s.clients}
                          </p>
                        </div>

                        {/* Capability list */}
                        <ul className="lg:col-span-5 lg:col-start-7 space-y-0 divide-y divide-line-soft/60">
                          {s.capabilities.map((c, i) => (
                            <motion.li
                              key={c.name}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.35, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                              className="py-5"
                            >
                              <h3 className="text-sm font-medium text-ink mb-1.5">
                                {c.name}
                              </h3>
                              <p className="text-sm leading-relaxed text-ink/50">
                                {c.body}
                              </p>
                            </motion.li>
                          ))}
                        </ul>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
