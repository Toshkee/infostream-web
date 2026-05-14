import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Statement } from "@/components/sections/Statement";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Process } from "@/components/sections/Process";
import { Technologies } from "@/components/sections/Technologies";
import { Capabilities } from "@/components/sections/Capabilities";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Statement />
      <WhatWeDo />
      <Process />
      <Technologies />
      <Capabilities />
      <CTA />
    </>
  );
}
