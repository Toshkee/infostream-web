import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutStory } from "@/components/sections/AboutStory";
import { AboutValues } from "@/components/sections/AboutValues";
import { AboutLocation } from "@/components/sections/AboutLocation";

export const metadata: Metadata = {
  title: "About — Infostream",
  description:
    "Founded in 2010 in Podgorica, Infostream builds and maintains the core financial, identity, and compliance systems trusted by Montenegro's national institutions.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutLocation />
    </>
  );
}
