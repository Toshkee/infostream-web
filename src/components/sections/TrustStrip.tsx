"use client";

import type { Dictionary } from "@/lib/i18n/types";

export function TrustStrip({ dict }: { dict: Dictionary["trustStrip"] }) {
  const items = [...dict.clients, ...dict.clients];

  return (
    <section className="bg-ink border-y border-white/10">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-ink to-transparent" />

        <div className="marquee-track flex gap-16 py-6 whitespace-nowrap">
          {items.map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="font-display font-light text-[1rem] text-cream-soft/90 flex items-center gap-16"
            >
              {client}
              <span aria-hidden className="text-accent/30 text-[0.6rem]">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
