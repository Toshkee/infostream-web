import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";

export function Footer({ dict, lang }: { dict: Dictionary["footer"]; lang: Locale }) {
  const columns = [dict.columns.company, dict.columns.work, dict.columns.trust];

  const prefix = (href: string) =>
    href.startsWith("/") && !href.startsWith(`/${lang}`) ? `/${lang}${href}` : href;

  return (
    <footer className="border-t border-line-soft bg-cream/40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6">
          <div className="md:col-span-5">
            <Link
              href={`/${lang}`}
              className="font-display text-3xl font-medium tracking-tight text-ink"
            >
              Infostream
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              {dict.tagline}
            </p>
            <p className="mt-6 text-sm text-muted">{dict.address}</p>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            {columns.map((col) => (
              <div key={col.title}>
                <div className="eyebrow mb-4">{col.title}</div>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={prefix(link.href)}
                        className="text-sm text-ink/80 hover:text-ink transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-line-soft">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Infostream d.o.o. {dict.rights}
          </p>
          <div className="flex items-center gap-6 text-xs text-muted">
            <Link href="#" className="hover:text-ink transition-colors">
              {dict.privacy}
            </Link>
            <Link href="#" className="hover:text-ink transition-colors">
              {dict.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
