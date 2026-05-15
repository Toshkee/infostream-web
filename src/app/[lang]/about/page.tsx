import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutStory } from "@/components/sections/AboutStory";
import { AboutValues } from "@/components/sections/AboutValues";
import { AboutLocation } from "@/components/sections/AboutLocation";
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
  return { title: dict.meta.about.title, description: dict.meta.about.description };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang as Locale);
  return (
    <>
      <AboutHero dict={dict.about.hero} />
      <AboutStory dict={dict.about.story} />
      <AboutValues dict={dict.about.values} />
      <AboutLocation dict={dict.about.location} />
    </>
  );
}
