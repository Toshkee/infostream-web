"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/lib/i18n/types";
import { locales, type Locale } from "@/lib/i18n/config";

export function Navbar({ dict, lang }: { dict: Dictionary["nav"]; lang: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
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
                  className={`relative text-[0.85rem] transition-colors duration-150 ${
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

        <div className="flex items-center gap-4">

          <div className="hidden sm:flex items-center rounded-full border border-line-soft bg-bone px-1 py-0.5 gap-0.5 font-mono text-[0.65rem] uppercase tracking-[0.12em]">
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

          <Link
            href={`/${lang}#contact`}
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-accent px-5 text-[0.8rem] font-medium text-accent hover:bg-accent hover:text-bone-soft transition-all duration-150"
          >
            {dict.contact}
          </Link>
        </div>
      </div>
    </header>
  );
}
