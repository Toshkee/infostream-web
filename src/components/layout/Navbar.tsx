"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type MenuKey = "work" | "technologies" | "about";

type MegaItem = { label: string; href: string; hint?: string };
type MegaColumn = { title: string; items: MegaItem[] };
type MegaMenu = { label: string; columns: MegaColumn[]; footer?: string };

const menus: Record<MenuKey, MegaMenu> = {
  work: {
    label: "What we do",
    footer: "All three practices operate under ISO 27001 & 9001.",
    columns: [
      {
        title: "Financial software",
        items: [
          { label: "Core banking", href: "#what-we-do" },
          { label: "Reconciliation & settlement", href: "#what-we-do" },
          { label: "Treasury & ledger", href: "#what-we-do" },
          { label: "Regulatory reporting", href: "#what-we-do" },
        ],
      },
      {
        title: "Registers & data",
        items: [
          { label: "Tax & revenue registers", href: "#what-we-do" },
          { label: "Pension & social systems", href: "#what-we-do" },
          { label: "Identity & document systems", href: "#what-we-do" },
          { label: "Inter-ministry exchange", href: "#what-we-do" },
        ],
      },
      {
        title: "Security & compliance",
        items: [
          { label: "Bitdefender enterprise", href: "#what-we-do" },
          { label: "ISO 27001 management", href: "#what-we-do" },
          { label: "Incident response", href: "#what-we-do" },
          { label: "Compliance audits", href: "#what-we-do" },
        ],
      },
    ],
  },
  technologies: {
    label: "Technologies",
    footer: "Long-lived stacks chosen for decade-scale support.",
    columns: [
      {
        title: "Oracle",
        items: [
          { label: "Oracle Database 19c / 23ai", href: "#tech-oracle" },
          { label: "Oracle APEX", href: "#tech-oracle" },
          { label: "PL/SQL", href: "#tech-oracle" },
          { label: "GoldenGate replication", href: "#tech-oracle" },
        ],
      },
      {
        title: "Microsoft",
        items: [
          { label: "SQL Server", href: "#tech-microsoft" },
          { label: ".NET / C#", href: "#tech-microsoft" },
          { label: "Power BI", href: "#tech-microsoft" },
          { label: "Azure workloads", href: "#tech-microsoft" },
        ],
      },
      {
        title: "Languages",
        items: [
          { label: "Java / Spring Boot", href: "#tech-languages" },
          { label: "TypeScript / Next.js", href: "#tech-languages" },
          { label: "Python — data & ETL", href: "#tech-languages" },
          { label: "PostgreSQL", href: "#tech-languages" },
        ],
      },
      {
        title: "Infrastructure",
        items: [
          { label: "Linux (RHEL / Oracle)", href: "#tech-infra" },
          { label: "Kubernetes", href: "#tech-infra" },
          { label: "Bitdefender GravityZone", href: "#tech-infra" },
          { label: "DR & continuity", href: "#tech-infra" },
        ],
      },
    ],
  },
  about: {
    label: "About",
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
          { label: "ISO 27001 certified", href: "#about" },
          { label: "ISO 9001 certified", href: "#about" },
          { label: "Bitdefender partner", href: "#about" },
          { label: "Client institutions", href: "#" },
        ],
      },
    ],
  },
};

const menuOrder: MenuKey[] = ["work", "technologies", "about"];

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
    closeTimer.current = setTimeout(() => setOpenKey(null), 120);
  };

  const closeNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenKey(null);
  };

  const activeMenu = openKey ? menus[openKey] : null;
  const colCount = activeMenu?.columns.length ?? 0;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || openKey
          ? "bg-bone/90 backdrop-blur-md border-b border-line-soft"
          : "bg-transparent border-b border-transparent"
      }`}
      onMouseLeave={scheduleClose}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="font-display text-[1.35rem] font-medium tracking-tight text-ink"
          onMouseEnter={closeNow}
        >
          Infostream
        </Link>

        <nav className="hidden md:flex items-center gap-10">
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
                className={`relative inline-flex items-center gap-1.5 py-5 text-[0.92rem] transition-colors ${
                  isOpen ? "text-ink" : "text-ink/75 hover:text-ink"
                }`}
              >
                {m.label}
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden
                >
                  <path
                    d="M1.5 3l3 3 3-3"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  aria-hidden
                  className={`absolute left-0 right-0 -bottom-px h-px bg-ink transition-opacity ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-5" onMouseEnter={closeNow}>
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

      {/* Mega-menu panel */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            key={openKey}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-full hidden md:block"
            onMouseEnter={() => openKey && open(openKey)}
            onMouseLeave={scheduleClose}
          >
            <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
              <div className="relative bg-bone border border-line-soft border-t-0 shadow-[0_30px_60px_-30px_rgba(20,19,15,0.18)]">
                <div className="flex items-center justify-between px-8 py-4 border-b border-line-soft">
                  <span className="eyebrow">{activeMenu.label}</span>
                  {activeMenu.footer && (
                    <span className="text-[0.82rem] text-muted">
                      {activeMenu.footer}
                    </span>
                  )}
                </div>

                <div
                  className="grid"
                  style={{
                    gridTemplateColumns: `repeat(${colCount}, minmax(0, 1fr))`,
                  }}
                >
                  {activeMenu.columns.map((col) => (
                    <div
                      key={col.title}
                      className="px-8 py-8 border-r border-line-soft last:border-r-0"
                    >
                      <div className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted mb-5">
                        {col.title}
                      </div>
                      <ul className="space-y-2">
                        {col.items.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              onClick={closeNow}
                              className="group flex items-center gap-2 -mx-2 px-2 py-1.5 rounded-sm text-[0.95rem] text-ink/85 hover:bg-cream-soft hover:text-ink transition-colors"
                            >
                              <span className="flex-1">{item.label}</span>
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                className="opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all duration-200"
                                aria-hidden
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
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
