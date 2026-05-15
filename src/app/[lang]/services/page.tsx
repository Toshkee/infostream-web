import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { ServicesDetail } from "@/components/sections/ServicesDetail";
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
  return { title: dict.meta.services.title, description: dict.meta.services.description };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang as Locale);
  return (
    <>
      <ServicesHero dict={dict.services.hero} />
      <ServicesDetail dict={dict.services.detail} />
      <CTA dict={dict.cta} />
    </>
  );
}
