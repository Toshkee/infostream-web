import type { Metadata } from "next";
import { TechHero } from "@/components/sections/TechHero";
import { TechGrid } from "@/components/sections/TechGrid";
import { TechPrinciples } from "@/components/sections/TechPrinciples";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Technologies — Infostream",
  description:
    "The platforms and stacks Infostream operates: Oracle (Database, APEX, PL/SQL), .NET, Java, TypeScript, Linux, Kubernetes, and Bitdefender enterprise security.",
};

export default function TechnologiesPage() {
  return (
    <>
      <TechHero />
      <TechGrid />
      <TechPrinciples />
      <CTA />
    </>
  );
}
