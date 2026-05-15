import type { Metadata } from "next";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { ServicesDetail } from "@/components/sections/ServicesDetail";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Services — Infostream",
  description:
    "Financial software, national registers, and enterprise security — Infostream builds the critical systems that governments and financial institutions depend on.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesDetail />
      <CTA />
    </>
  );
}
