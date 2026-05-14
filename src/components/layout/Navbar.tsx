"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { label: "What we do", href: "/#what-we-do" },
  { label: "Technologies", href: "/technologies" },
  { label: "About", href: "/#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<"eng" | "mne">("eng");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bone/80 backdrop-blur-xl border-b border-line/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo/infostream.webp"
            alt="Infostream"
            width={148}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Center links */}
        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[0.88rem] font-medium text-ink/65 hover:text-ink transition-colors duration-150"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-0.5 text-[0.72rem] font-mono uppercase tracking-[0.16em] text-muted">
            <button
              type="button"
              onClick={() => setLang("mne")}
              className={`px-1 py-0.5 transition-colors ${
                lang === "mne" ? "text-ink" : "hover:text-ink/70"
              }`}
              aria-pressed={lang === "mne"}
            >
              mne
            </button>
            <span aria-hidden className="text-line/60">/</span>
            <button
              type="button"
              onClick={() => setLang("eng")}
              className={`px-1 py-0.5 transition-colors ${
                lang === "eng" ? "text-ink" : "hover:text-ink/70"
              }`}
              aria-pressed={lang === "eng"}
            >
              eng
            </button>
          </div>

          <Link
            href="#contact"
            className="inline-flex h-9 items-center rounded-full bg-ink px-5 text-[0.8rem] font-medium text-bone hover:bg-ink-soft transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </header>
  );
}
