import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TechHero } from "@/components/sections/TechHero";
import { TechGrid } from "@/components/sections/TechGrid";
import { TechPrinciples } from "@/components/sections/TechPrinciples";
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
  return { title: dict.meta.technologies.title, description: dict.meta.technologies.description };
}

export default async function TechnologiesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang as Locale);
  return (
    <>
      <TechHero dict={dict.tech.hero} />
      <TechGrid dict={dict.tech.grid} />
      <TechPrinciples dict={dict.tech.principles} />
      <CTA dict={dict.cta} />
    </>
  );
}
