"use client";

import { motion } from "framer-motion";

type Stack = {
  id: string;
  eyebrow: string;
  title: string;
  blurb: string;
  items: string[];
};

const stacks: Stack[] = [
  {
    id: "tech-oracle",
    eyebrow: "T01",
    title: "Oracle",
    blurb:
      "Our primary platform for transactional and registry systems where audit, durability, and PL/SQL ecosystems matter.",
    items: [
      "Oracle Database 19c / 23ai",
      "Oracle APEX",
      "PL/SQL",
      "Oracle Forms migration",
      "Oracle GoldenGate replication",
    ],
  },
  {
    id: "tech-microsoft",
    eyebrow: "T02",
    title: "Microsoft",
    blurb:
      "Used across analytical, reporting, and integration workloads — especially where Active Directory and Office are already in place.",
    items: [
      "SQL Server",
      ".NET / C#",
      "Power BI",
      "Azure (selective workloads)",
      "Active Directory integration",
    ],
  },
  {
    id: "tech-languages",
    eyebrow: "T03",
    title: "Languages & Frameworks",
    blurb:
      "Long-lived systems demand boring, well-supported stacks. We standardise on languages with 10+ year ecosystems.",
    items: [
      "Java / Spring Boot",
      "TypeScript / Node.js",
      "Python (data & ETL)",
      "React / Next.js",
      "PostgreSQL where Oracle isn't required",
    ],
  },
  {
    id: "tech-infra",
    eyebrow: "T04",
    title: "Infrastructure & Security",
    blurb:
      "Hosted on-premise or in sovereign data centres. Operated under ISO 27001 controls with Bitdefender at the perimeter and endpoint.",
    items: [
      "Linux (RHEL / Oracle Linux)",
      "Kubernetes & containerisation",
      "Bitdefender GravityZone",
      "CI/CD with GitLab",
      "Backup, DR, and continuity drills",
    ],
  },
];

export function TechGrid() {
  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between mb-14">
          <div className="eyebrow">The four stacks</div>
          <div className="hidden md:block text-[0.82rem] text-muted">
            {stacks.length} primary &middot; updated April 2026
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line-soft border border-line-soft">
          {stacks.map((s, i) => (
            <motion.article
              key={s.id}
              id={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: (i % 2) * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative bg-bone p-8 md:p-10 flex flex-col scroll-mt-24"
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-mono text-[0.78rem] tracking-[0.1em] text-muted">
                  {s.eyebrow}
                </span>
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted/70">
                  {s.items.length} core
                </span>
              </div>

              <h3 className="font-display text-[clamp(1.75rem,2.5vw+0.5rem,2.5rem)] font-light tracking-tight text-ink">
                {s.title}
              </h3>

              <p className="mt-4 text-[1rem] leading-relaxed text-ink/70 max-w-md">
                {s.blurb}
              </p>

              <ul className="mt-8 pt-6 border-t border-line-soft space-y-2.5">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-3 text-[0.95rem] text-ink/85"
                  >
                    <span className="inline-block w-1 h-1 rounded-full bg-accent shrink-0 translate-y-[-3px]" />
                    {item}
                  </li>
                ))}
              </ul>

              <span
                aria-hidden
                className="absolute left-0 bottom-0 h-px w-0 bg-ink transition-[width] duration-500 ease-out group-hover:w-full"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
