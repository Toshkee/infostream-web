import Link from "next/link";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About us", href: "#about" },
      { label: "Careers", href: "#contact" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "Financial software", href: "#what-we-do" },
      { label: "Registers & data", href: "#what-we-do" },
      { label: "Security & compliance", href: "#what-we-do" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "ISO 27001", href: "#about" },
      { label: "ISO 9001", href: "#about" },
      { label: "Bitdefender partner", href: "#about" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line-soft bg-cream-soft/60">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="font-display text-3xl font-medium tracking-tight text-ink"
            >
              Infostream
            </Link>
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-muted">
              Critical financial and identity systems for Montenegro&rsquo;s
              ministries, central bank, and parliament. Built and maintained in
              Podgorica since 2010.
            </p>
            <p className="mt-6 text-[0.85rem] text-muted">
              Podgorica, Montenegro
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-3 gap-6">
            {columns.map((col) => (
              <div key={col.title}>
                <div className="eyebrow mb-4">{col.title}</div>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[0.92rem] text-ink/80 hover:text-ink transition-colors"
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
          <p className="text-[0.8rem] text-muted">
            &copy; {new Date().getFullYear()} Infostream d.o.o. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-[0.8rem] text-muted">
            <Link href="#" className="hover:text-ink transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-ink transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
