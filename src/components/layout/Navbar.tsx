"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, m as motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/lib/i18n/types";
import { locales, type Locale } from "@/lib/i18n/config";

export function Navbar({ dict, lang }: { dict: Dictionary["nav"]; lang: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const links = [
    { label: dict.services, href: `/${lang}/services` },
    { label: dict.technologies, href: `/${lang}/technologies` },
    { label: dict.about, href: `/${lang}/about` },
  ];

  const swapLocale = (target: Locale) => {
    if (!pathname) return `/${target}`;
    const segments = pathname.split("/");
    if (segments[1] && (locales as readonly string[]).includes(segments[1])) {
      segments[1] = target;
      return segments.join("/") || `/${target}`;
    }
    return `/${target}${pathname}`;
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled || mobileOpen
            ? "bg-bone-soft/95 backdrop-blur-xl border-line-soft/80 shadow-[0_1px_12px_rgba(0,0,0,0.04)]"
            : "bg-bone border-line-soft/40"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 lg:px-10">

          <div className="flex items-center gap-10">
            <Link href={`/${lang}`} className="flex items-center shrink-0">
              <Image
                src="/images/logo/infostream.webp"
                alt="Infostream"
                width={148}
                height={40}
                className="h-[28px] w-auto object-contain"
                priority
              />
            </Link>

            <div className="hidden md:block w-px h-4 bg-line-soft" aria-hidden />

            <nav className="hidden md:flex items-center gap-7">
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`relative text-sm transition-colors duration-150 ${
                      active ? "text-ink" : "text-ink/65 hover:text-ink"
                    }`}
                  >
                    {l.label}
                    {active && (
                      <span className="absolute -bottom-[26px] left-0 right-0 h-px bg-accent" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex items-center rounded-full border border-line-soft bg-bone px-1 py-0.5 gap-0.5 font-mono text-[0.65rem] uppercase tracking-[0.12em]">
              <Link
                href={swapLocale("mne")}
                className={`px-2.5 py-1 rounded-full transition-all duration-150 ${
                  lang === "mne" ? "bg-accent text-bone-soft" : "text-muted hover:text-ink"
                }`}
                aria-current={lang === "mne" ? "true" : undefined}
              >
                mne
              </Link>
              <Link
                href={swapLocale("eng")}
                className={`px-2.5 py-1 rounded-full transition-all duration-150 ${
                  lang === "eng" ? "bg-accent text-bone-soft" : "text-muted hover:text-ink"
                }`}
                aria-current={lang === "eng" ? "true" : undefined}
              >
                eng
              </Link>
            </div>

            {/* Desktop CTA */}
            <Link
              href={`/${lang}#contact`}
              className="hidden md:inline-flex h-9 items-center gap-1.5 rounded-full border border-accent px-5 text-xs font-medium text-accent hover:bg-accent hover:text-bone-soft transition-all duration-150"
            >
              {dict.contact}
            </Link>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden relative flex flex-col justify-center items-center w-10 h-10 gap-[5px] shrink-0 -mr-1"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span
                className={`block h-px w-5 bg-ink transition-all duration-300 origin-center ${
                  mobileOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
              />
              <span
                className={`block h-px w-5 bg-ink transition-all duration-300 ${
                  mobileOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-px w-5 bg-ink transition-all duration-300 origin-center ${
                  mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-x-0 top-[72px] bottom-0 z-40 bg-bone overflow-y-auto"
          >
            <div className="mx-auto max-w-[1400px] px-6 pt-6 pb-12 flex flex-col h-full">
              <nav className="flex-1">
                {links.map((l, i) => {
                  const active = pathname === l.href;
                  return (
                    <motion.div
                      key={l.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={l.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between py-5 border-b border-line-soft/60 text-lg transition-colors duration-150 ${
                          active ? "text-accent" : "text-ink/75 hover:text-ink"
                        }`}
                      >
                        {l.label}
                        <span className="text-sm text-ink/25">→</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="pt-8"
              >
                <Link
                  href={`/${lang}#contact`}
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex w-full justify-center h-12 items-center rounded-full border border-accent px-6 text-sm font-medium text-accent hover:bg-accent hover:text-bone-soft transition-all duration-200"
                >
                  {dict.contact}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
