export type Chunk = string | { italic: true; text: string };
export type HeadlineLineData = { text: Chunk[]; delay: number };

export type Dictionary = {
  meta: {
    home: { title: string; description: string };
    about: { title: string; description: string };
    services: { title: string; description: string };
    technologies: { title: string; description: string };
  };
  nav: {
    services: string;
    technologies: string;
    about: string;
    contact: string;
  };
  footer: {
    tagline: string;
    address: string;
    columns: Record<
      "company" | "work" | "trust",
      { title: string; links: { label: string; href: string }[] }
    >;
    rights: string;
    privacy: string;
    terms: string;
  };
  hero: {
    lines: HeadlineLineData[];
    intro: string;
    foundedLabel: string;
    foundedValueSuffix: string;
    certifiedLabel: string;
    certifiedValue: string;
  };
  trustStrip: { clients: string[] };
  whatWeDo: {
    eyebrow: string;
    intro: string;
    root: string;
    seeFullServices: string;
    branches: {
      label: string;
      services: { label: string; desc: string }[];
    }[];
  };
  cta: {
    eyebrow: string;
    headline: Chunk[];
    intro: string;
    contacts: { label: string; value: string; href: string }[];
    details: { label: string; value: string }[];
  };
  about: {
    hero: {
      lines: HeadlineLineData[];
      facts: { label: string; value: string }[];
    };
    story: {
      stats: { value: string; label: string; sub: string }[];
      paragraph: string;
    };
    values: {
      eyebrow: string;
      intro: string;
      root: string;
      items: { title: string; body: string }[];
    };
    location: {
      headline: Chunk[];
      body: string;
      addressLabel: string;
      addressLines: string[];
      generalLabel: string;
      supportLabel: string;
      phoneLabel: string;
    };
  };
  services: {
    hero: { lines: HeadlineLineData[]; intro: string };
    detail: {
      number: string;
      title: string;
      description: string;
      capabilities: { name: string; body: string }[];
      clients: string;
    }[];
  };
  tech: {
    hero: { lines: HeadlineLineData[]; intro: string };
    grid: {
      id: string;
      eyebrow: string;
      title: string;
      blurb: string;
      items: string[];
      imageAlt: string;
    }[];
    principles: {
      eyebrow: string;
      headline: Chunk[];
      intro: string;
      root: string;
      items: { n: string; title: string; body: string }[];
    };
  };
};
