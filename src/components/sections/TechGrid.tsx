"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Stack = {
  id: string;
  eyebrow: string;
  title: string;
  blurb: string;
  items: string[];
  illustration: string;
  imageAlt: string;
  tone: {
    panel: string; // tinted background for the image panel
    accent: string; // brand colour (text + bullet)
    accentSoft: string; // soft border/bg tint
  };
};

const stacks: Stack[] = [
  {
    id: "tech-oracle",
    eyebrow: "T01 — Primary database",
    title: "Oracle",
    blurb:
      "Our system of record for transactional and registry workloads. Where audit, durability, and a deep PL/SQL ecosystem aren't optional, this is where it lives.",
    items: [
      "Oracle Database 19c & 23ai",
      "Oracle APEX",
      "PL/SQL development",
      "Oracle Forms modernisation",
      "GoldenGate replication",
    ],
    illustration: "/images/illustrations/oracle.svg",
    imageAlt: "Oracle database illustration",
    tone: {
      panel: "bg-[#ffe2dd]",
      accent: "text-[#e8332a]",
      accentSoft: "bg-[#e8332a]",
    },
  },
  {
    id: "tech-dotnet",
    eyebrow: "T02 — Application platform",
    title: ".NET",
    blurb:
      "C# and the .NET runtime power most of the application-side logic across ministries: services, integrations, and the long-running APIs that sit in front of Oracle.",
    items: [
      "C# and .NET 8",
      "ASP.NET Core APIs",
      "Entity Framework Core",
      "Active Directory integration",
      "Windows & Linux deployment",
    ],
    illustration: "/images/illustrations/dotnet.jpg",
    imageAlt: ".NET application platform illustration",
    tone: {
      panel: "bg-[#ede1ff]",
      accent: "text-[#7c3aed]",
      accentSoft: "bg-[#7c3aed]",
    },
  },
  {
    id: "tech-languages",
    eyebrow: "T03 — Languages & frameworks",
    title: "Long-lived stacks",
    blurb:
      "Where we don't standardise on .NET, we standardise on languages with a decade-plus production history and large regional talent pools. Boring is a feature.",
    items: [
      "Java / Spring Boot",
      "TypeScript / Node.js",
      "Python for data & ETL",
      "React / Next.js",
      "PostgreSQL where Oracle isn't required",
    ],
    illustration: "/images/illustrations/dashboard.svg",
    imageAlt: "Languages and frameworks illustration",
    tone: {
      panel: "bg-[#e7f5cc]",
      accent: "text-[#4d7a1f]",
      accentSoft: "bg-[#4d7a1f]",
    },
  },
  {
    id: "tech-security",
    eyebrow: "T04 — Infrastructure & security",
    title: "Security & operations",
    blurb:
      "Sovereign hosting, ISO 27001 controls, and Bitdefender at every layer. Continuity drills are run, not promised — every system has a rehearsed path back.",
    items: [
      "Bitdefender GravityZone (endpoint + network)",
      "Linux (RHEL / Oracle Linux)",
      "Kubernetes & containerisation",
      "GitLab CI/CD pipelines",
      "Backup, DR, and continuity drills",
    ],
    illustration: "/images/illustrations/server.svg",
    imageAlt: "Infrastructure and security illustration",
    tone: {
      panel: "bg-[#d8e8ff]",
      accent: "text-[#2563eb]",
      accentSoft: "bg-[#2563eb]",
    },
  },
];

export function TechGrid() {
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
                  {/* Image panel */}
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
                      loading="lazy"
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="object-contain object-center p-10 md:p-14 transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Caption panel */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-between p-8 md:p-12 ${
                      imageRight ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div>
                      <div
                        className={`font-mono text-[0.7rem] uppercase tracking-[0.18em] mb-4 ${s.tone.accent}`}
                      >
                        {s.eyebrow}
                      </div>
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
