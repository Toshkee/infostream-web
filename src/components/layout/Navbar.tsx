"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type MenuKey = "work" | "technologies" | "about";

type MegaItem = { label: string; href: string };
type MegaColumn = { title: string; items: MegaItem[] };
type MegaFeature = {
  kicker: string;
  title: string;
  caption: string;
  href: string;
};
type MegaMenu = {
  label: string;
  feature: MegaFeature;
  columns: MegaColumn[];
};

const menus: Record<MenuKey, MegaMenu> = {
  work: {
    label: "What we do",
    feature: {
      kicker: "In production",
      title: "Core banking,\nCentral Bank",
      caption:
        "Operational since 2015. Clears every domestic interbank settlement, every working day.",
      href: "#what-we-do",
    },
    columns: [
      {
        title: "Financial",
        items: [
          { label: "Core banking", href: "#what-we-do" },
          { label: "Reconciliation", href: "#what-we-do" },
          { label: "Treasury", href: "#what-we-do" },
          { label: "Regulatory reporting", href: "#what-we-do" },
        ],
      },
      {
        title: "Registers",
        items: [
          { label: "Tax & revenue", href: "#what-we-do" },
          { label: "Pension systems", href: "#what-we-do" },
          { label: "Identity systems", href: "#what-we-do" },
          { label: "Inter-ministry", href: "#what-we-do" },
        ],
      },
      {
        title: "Security",
        items: [
          { label: "Bitdefender", href: "#what-we-do" },
          { label: "ISO 27001 mgmt", href: "#what-we-do" },
          { label: "Incident response", href: "#what-we-do" },
          { label: "Compliance audits", href: "#what-we-do" },
        ],
      },
    ],
  },
  technologies: {
    label: "Technologies",
    feature: {
      kicker: "Primary stack",
      title: "Oracle 23ai\n+ APEX",
      caption:
        "Our default platform for systems that must run for fifteen years and pass annual audit.",
      href: "/technologies#tech-oracle",
    },
    columns: [
      {
        title: "Oracle",
        items: [
          { label: "Oracle Database", href: "/technologies#tech-oracle" },
          { label: "Oracle APEX", href: "/technologies#tech-oracle" },
          { label: "PL/SQL", href: "/technologies#tech-oracle" },
          { label: "GoldenGate", href: "/technologies#tech-oracle" },
        ],
      },
      {
        title: "Microsoft",
        items: [
          { label: "SQL Server", href: "/technologies#tech-microsoft" },
          { label: ".NET / C#", href: "/technologies#tech-microsoft" },
          { label: "Power BI", href: "/technologies#tech-microsoft" },
          { label: "Azure", href: "/technologies#tech-microsoft" },
        ],
      },
      {
        title: "Stacks",
        items: [
          { label: "Java / Spring", href: "/technologies#tech-languages" },
          { label: "TypeScript", href: "/technologies#tech-languages" },
          { label: "Python", href: "/technologies#tech-languages" },
          { label: "PostgreSQL", href: "/technologies#tech-languages" },
        ],
      },
      {
        title: "Infrastructure",
        items: [
          { label: "Linux", href: "/technologies#tech-infra" },
          { label: "Kubernetes", href: "/technologies#tech-infra" },
          { label: "Bitdefender", href: "/technologies#tech-infra" },
          { label: "DR & continuity", href: "/technologies#tech-infra" },
        ],
      },
    ],
  },
  about: {
    label: "About",
    feature: {
      kicker: "Where we work",
      title: "Podgorica\nMontenegro",
      caption:
        "Founded 2010. ISO 27001 and 9001 certified. Bitdefender enterprise partner.",
      href: "#about",
    },
    columns: [
      {
        title: "Company",
        items: [
          { label: "Why Infostream", href: "#about" },
          { label: "How we work", href: "#process" },
          { label: "Careers", href: "#contact" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Trust",
        items: [
          { label: "ISO 27001", href: "#about" },
          { label: "ISO 9001", href: "#about" },
          { label: "Bitdefender partner", href: "#about" },
          { label: "Client institutions", href: "#" },
        ],
      },
    ],
  },
};

const menuOrder: MenuKey[] = ["work", "technologies", "about"];

function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <line
        x1="5.5"
        y1="1"
        x2="5.5"
        y2="10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        className={`origin-center transition-transform duration-300 ${
          open ? "rotate-90 opacity-0" : ""
        }`}
      />
      <line
        x1="1"
        y1="5.5"
        x2="10"
        y2="5.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<"eng" | "mne">("eng");
  const [openKey, setOpenKey] = useState<MenuKey | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenKey(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const open = (key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenKey(key);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenKey(null), 140);
  };

  const closeNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenKey(null);
  };

  const activeMenu = openKey ? menus[openKey] : null;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-bone/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
      onMouseLeave={scheduleClose}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="font-display text-[1.35rem] font-medium tracking-tight text-ink"
          onMouseEnter={closeNow}
        >
          Infostream
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {menuOrder.map((key) => {
            const m = menus[key];
            const isOpen = openKey === key;
            return (
              <button
                key={key}
                type="button"
                onMouseEnter={() => open(key)}
                onFocus={() => open(key)}
                onClick={() => (isOpen ? closeNow() : open(key))}
                aria-expanded={isOpen}
                aria-haspopup="true"
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.92rem] font-medium transition-all duration-200 ${
                  isOpen
                    ? "bg-ink text-bone"
                    : "text-ink/80 hover:text-ink hover:bg-ink/5"
                }`}
              >
                {m.label}
                <PlusIcon open={isOpen} />
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-4" onMouseEnter={closeNow}>
          <div className="hidden sm:flex items-center text-[0.72rem] font-mono uppercase tracking-[0.18em] text-muted">
            <button
              type="button"
              onClick={() => setLang("mne")}
              className={`px-1.5 py-1 transition-colors ${
                lang === "mne" ? "text-ink" : "hover:text-ink/70"
              }`}
              aria-pressed={lang === "mne"}
            >
              mne
            </button>
            <span aria-hidden className="text-line">
              /
            </span>
            <button
              type="button"
              onClick={() => setLang("eng")}
              className={`px-1.5 py-1 transition-colors ${
                lang === "eng" ? "text-ink" : "hover:text-ink/70"
              }`}
              aria-pressed={lang === "eng"}
            >
              eng
            </button>
          </div>

          <Link
            href="#contact"
            className="inline-flex h-9 items-center rounded-full bg-ink px-4 text-[0.85rem] font-medium text-bone hover:bg-ink-soft transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>

      {/* Floating mega-menu card */}
      <AnimatePresence>
        {activeMenu && openKey && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.985 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top center" }}
            className="absolute left-0 right-0 top-full px-6 lg:px-10 hidden md:block"
            onMouseEnter={() => open(openKey)}
            onMouseLeave={scheduleClose}
          >
            <div className="mx-auto max-w-[1100px]">
              <div className="overflow-hidden rounded-3xl bg-bone-soft border border-line-soft/80 shadow-[0_40px_80px_-30px_rgba(20,19,15,0.22),0_8px_20px_-12px_rgba(20,19,15,0.12)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={openKey}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="grid grid-cols-12 gap-0"
                  >
                    {/* Feature panel */}
                    <Link
                      href={activeMenu.feature.href}
                      onClick={closeNow}
                      className="col-span-4 group relative bg-cream p-8 flex flex-col justify-between min-h-[320px] hover:bg-cream-deep/60 transition-colors"
                    >
                      <div className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
                        {activeMenu.feature.kicker}
                      </div>

                      <div>
                        <h3 className="font-display text-[2rem] leading-[1.05] font-light tracking-tight text-ink whitespace-pre-line">
                          {activeMenu.feature.title}
                        </h3>
                        <p className="mt-4 text-[0.92rem] leading-relaxed text-ink/70 max-w-[28ch]">
                          {activeMenu.feature.caption}
                        </p>
                        <div className="mt-6 inline-flex items-center gap-2 text-[0.82rem] font-medium text-ink">
                          Explore
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            className="transition-transform duration-200 group-hover:translate-x-0.5"
                            aria-hidden
                          >
                            <path
                              d="M2 7h10m0 0L7.5 2.5M12 7l-4.5 4.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>

                    {/* Columns */}
                    <div
                      className="col-span-8 grid"
                      style={{
                        gridTemplateColumns: `repeat(${activeMenu.columns.length}, minmax(0, 1fr))`,
                      }}
                    >
                      {activeMenu.columns.map((col) => (
                        <div
                          key={col.title}
                          className="p-8 border-r border-line-soft/60 last:border-r-0"
                        >
                          <div className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted mb-5">
                            {col.title}
                          </div>
                          <ul className="space-y-1">
                            {col.items.map((item) => (
                              <li key={item.label}>
                                <Link
                                  href={item.href}
                                  onClick={closeNow}
                                  className="group/item -mx-2 px-2 py-1.5 flex items-center text-[1.02rem] font-medium text-ink/80 hover:text-ink rounded transition-colors"
                                >
                                  <span className="flex-1">{item.label}</span>
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    aria-hidden
                                    className="opacity-0 -translate-x-1 group-hover/item:opacity-60 group-hover/item:translate-x-0 transition-all duration-200"
                                  >
                                    <path
                                      d="M2 6h8m0 0L6.5 2.5M10 6l-3.5 3.5"
                                      stroke="currentColor"
                                      strokeWidth="1.3"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
