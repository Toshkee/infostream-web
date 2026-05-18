import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { HtmlLang } from "@/components/providers/HtmlLang";
import { MotionProvider } from "@/components/providers/MotionProvider";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang as Locale);

  return (
    <MotionProvider>
      <HtmlLang lang={lang === "mne" ? "me" : "en"} />
      <Navbar dict={dict.nav} lang={lang as Locale} />
      <main className="flex-1">{children}</main>
      <Footer dict={dict.footer} lang={lang as Locale} />
    </MotionProvider>
  );
}
