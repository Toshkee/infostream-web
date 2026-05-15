"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/types";

type Visual = {
  illustration: string;
  tone: { panel: string; accent: string; accentSoft: string };
};

const visuals: Record<string, Visual> = {
  "tech-oracle": {
    illustration: "/images/illustrations/oracle.png",
    tone: { panel: "bg-[#ffe2dd]", accent: "text-[#e8332a]", accentSoft: "bg-[#e8332a]" },
  },
  "tech-dotnet": {
    illustration: "/images/illustrations/dotnetmvc.png",
    tone: { panel: "bg-[#ede1ff]", accent: "text-[#7c3aed]", accentSoft: "bg-[#7c3aed]" },
  },
  "tech-languages": {
    illustration: "/images/illustrations/dashboard.svg",
    tone: { panel: "bg-[#e7f5cc]", accent: "text-[#4d7a1f]", accentSoft: "bg-[#4d7a1f]" },
  },
  "tech-security": {
    illustration: "/images/illustrations/server.svg",
    tone: { panel: "bg-[#d8e8ff]", accent: "text-[#2563eb]", accentSoft: "bg-[#2563eb]" },
  },
};

const FALLBACK: Visual = {
  illustration: "/images/illustrations/server.svg",
  tone: { panel: "bg-bone", accent: "text-accent", accentSoft: "bg-accent" },
};

export function TechGrid({ dict }: { dict: Dictionary["tech"]["grid"] }) {
  const stacks = dict.map((s) => ({ ...s, ...(visuals[s.id] ?? FALLBACK) }));

  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 md:py-32">
        <div className="space-y-10 md:space-y-14">
          {stacks.map((s, i) => {
            const imageRight = i % 2 === 1;
            return (
              <motion.article
                key={s.id}
                id={s.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group rounded-2xl border border-line-soft bg-bone-soft overflow-hidden scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  <div
                    className={`relative h-72 md:h-[24rem] lg:h-auto lg:col-span-7 ${s.tone.panel} overflow-hidden ${
                      imageRight
                        ? "lg:order-2 lg:border-l border-line-soft"
                        : "lg:order-1 lg:border-r border-line-soft"
                    }`}
                  >
                    <Image
                      src={s.illustration}
                      alt={s.imageAlt}
                      fill
                      {...(i === 0
                        ? { priority: true, loading: "eager" as const }
                        : { loading: "lazy" as const })}
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="object-contain object-center p-10 md:p-14 transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div
                    className={`lg:col-span-5 flex flex-col justify-between p-8 md:p-12 ${
                      imageRight ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div>
                      <h3 className="font-display text-[clamp(2rem,2.5vw+0.75rem,3rem)] font-light tracking-tight text-ink leading-[1.05]">
                        {s.title}
                      </h3>
                      <p className="mt-5 text-[1.02rem] leading-relaxed text-ink/70 max-w-md">
                        {s.blurb}
                      </p>

                      <ul className="mt-8 pt-6 border-t border-line-soft space-y-2.5">
                        {s.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-baseline gap-3 text-[0.95rem] text-ink/85"
                          >
                            <span
                              className={`inline-block w-1 h-1 rounded-full shrink-0 translate-y-[-3px] ${s.tone.accentSoft}`}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
