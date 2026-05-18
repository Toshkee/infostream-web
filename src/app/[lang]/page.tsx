import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Statement } from "@/components/sections/Statement";
import { CTA } from "@/components/sections/CTA";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { isLocale, type Locale } from "@/lib/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang as Locale);
  return { title: dict.meta.home.title, description: dict.meta.home.description };
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang as Locale);
  return (
    <>
      <Hero dict={dict.hero} />
      <TrustStrip dict={dict.trustStrip} />
      <WhatWeDo dict={dict.whatWeDo} lang={lang as Locale} />
      <Statement />
      <CTA dict={dict.cta} />
    </>
  );
}
