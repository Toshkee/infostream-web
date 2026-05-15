import type { Dictionary } from "../types";

export const eng: Dictionary = {
  meta: {
    home: {
      title: "Infostream — Enterprise IT for institutions that run Montenegro",
      description:
        "Infostream builds core banking, financial registers, and compliance systems for Montenegro's ministries, central bank, and parliament. 15+ years. ISO 27001 and 9001 certified.",
    },
    about: {
      title: "About — Infostream",
      description:
        "Founded in 2004 in Podgorica, Infostream builds and maintains the core financial, identity, and compliance systems trusted by Montenegro's national institutions.",
    },
    services: {
      title: "Services — Infostream",
      description:
        "Financial software, national registers, and enterprise security — Infostream builds the critical systems that governments and financial institutions depend on.",
    },
    technologies: {
      title: "Technologies — Infostream",
      description:
        "The platforms and stacks Infostream operates: Oracle (Database, APEX, PL/SQL), .NET, Java, TypeScript, Linux, Kubernetes, and Bitdefender enterprise security.",
    },
  },
  nav: {
    services: "Services",
    technologies: "Technologies",
    about: "About",
    contact: "Contact us",
  },
  footer: {
    tagline:
      "Critical financial and identity systems for Montenegro's ministries, central bank, and parliament. Built and maintained in Podgorica since 2004.",
    address: "Podgorica, Montenegro",
    columns: {
      company: {
        title: "Company",
        links: [
          { label: "About us", href: "/about" },
          { label: "Careers", href: "#contact" },
          { label: "Contact", href: "#contact" },
        ],
      },
      work: {
        title: "Work",
        links: [
          { label: "Financial software", href: "/services" },
          { label: "Registers & data", href: "/services" },
          { label: "Security & compliance", href: "/services" },
        ],
      },
      trust: {
        title: "Trust",
        links: [
          { label: "ISO 27001", href: "/about" },
          { label: "ISO 9001", href: "/about" },
          { label: "Bitdefender partner", href: "/about" },
        ],
      },
    },
    rights: "All rights reserved.",
    privacy: "Privacy",
    terms: "Terms",
  },
  hero: {
    lines: [
      { text: ["The software that"], delay: 0 },
      { text: [{ italic: true, text: "runs" }, " a country's"], delay: 0.12 },
      { text: ["institutions."], delay: 0.24 },
    ],
    intro:
      "For twenty years, Infostream has built and maintained the core financial, identity, and compliance systems trusted by Montenegro's ministries, the Central Bank, and Parliament.",
    foundedLabel: "Founded",
    foundedValueSuffix: ", Podgorica",
    certifiedLabel: "Certified",
    certifiedValue: "ISO 27001 · ISO 9001",
    partnerLabel: "Partner",
    partnerValue: "Bitdefender Enterprise",
  },
  trustStrip: {
    clients: [
      "Ministry of Finance",
      "Central Bank of Montenegro",
      "Parliament of Montenegro",
      "Ministry of Interior",
      "Tax Authority",
      "Ministry of Defense",
    ],
  },
  whatWeDo: {
    eyebrow: "What we build",
    intro:
      "Three practice areas. Every system built to withstand the scrutiny of regulators, finance ministries, and national operators.",
    root: "Infostream d.o.o.",
    seeFullServices: "See full services",
    branches: [
      {
        label: "Financial software",
        services: [
          { label: "Core Banking", desc: "Account management, clearing, and settlement — processes millions of daily transactions for the Central Bank of Montenegro." },
          { label: "Treasury Gateway", desc: "Real-time government cash flow and treasury operations for the Ministry of Finance." },
          { label: "Budget Reporting", desc: "Automated reporting pipeline aligned to national budget cycles and audit requirements." },
          { label: "Reconciliation Engine", desc: "End-of-day automated reconciliation across all linked banking institutions." },
        ],
      },
      {
        label: "Registers & data systems",
        services: [
          { label: "Tax Register", desc: "National tax records and real-time revenue tracking for the Tax Authority." },
          { label: "Pension Records", desc: "Citizens' pension entitlement database integrated with the national Pension Fund." },
          { label: "Identity Register", desc: "Civil registry linked to the Ministry of Interior's national ID infrastructure." },
        ],
      },
      {
        label: "Security & compliance",
        services: [
          { label: "ISO 27001 / ISO 9001", desc: "Dual-certified information security and quality management systems, audited annually." },
          { label: "Bitdefender Enterprise", desc: "Endpoint, network, and cloud protection deployed across all client institutions." },
          { label: "Operational controls", desc: "24/7 monitoring, incident response, and compliance audit reporting." },
        ],
      },
    ],
  },
  cta: {
    eyebrow: "Get in touch",
    headline: ["Tell us about ", { italic: true, text: "the system" }, " you need to trust."],
    intro:
      "We work directly with the people responsible for the systems — not through procurement intermediaries. First conversation is always with an engineer.",
    contacts: [
      { label: "Email", value: "info@infostream.me", href: "mailto:info@infostream.me" },
      { label: "Phone", value: "+382 20 000 000", href: "tel:+38220000000" },
    ],
    details: [
      { label: "Location", value: "Rista Dragićevića 4\nPodgorica 81000, Montenegro" },
      { label: "Registered", value: "Infostream d.o.o.\nPIB: 02000000" },
      { label: "Certifications", value: "ISO 27001 · ISO 9001\nBitdefender Enterprise" },
    ],
  },
  about: {
    hero: {
      lines: [
        { text: ["Building the systems"], delay: 0 },
        { text: [{ italic: true, text: "Montenegro" }], delay: 0.12 },
        { text: ["relies on."], delay: 0.24 },
      ],
      facts: [
        { label: "Founded", value: "2004" },
        { label: "Location", value: "Podgorica, Montenegro" },
        { label: "Certified", value: "ISO 27001 · ISO 9001" },
        { label: "Security partner", value: "Bitdefender Enterprise" },
      ],
    },
    story: {
      stats: [
        { value: "20", label: "Years in operation", sub: "Founded 2004, Podgorica" },
        { value: "6", label: "National institutions", sub: "In production, 24/7" },
        { value: "2", label: "ISO certifications", sub: "27001 · 9001, audited annually" },
        { value: "1", label: "Team, one location", sub: "All engineers based in Montenegro" },
      ],
      paragraph:
        "We build the financial and identity systems that Montenegro's institutions depend on every day. Not prototypes, not pilots — production systems running inside the Central Bank, the Ministry of Finance, and Parliament, continuously, since 2004.",
    },
    values: {
      eyebrow: "Core values",
      intro:
        "Five principles that shaped every architectural decision, every client commitment, and every on-call rotation since 2004.",
      root: "Infostream d.o.o.",
      items: [
        { title: "Bring new value to customer", body: "We bring willingness to do what it takes to create new value for all stakeholders." },
        { title: "Pursue excellence", body: "We embrace expertise and solutions-oriented teams. We focus on solutions, not problems." },
        { title: "Do things responsibly", body: "We simultaneously support the success of our employees, partners and customers." },
        { title: "Spark innovation", body: "We strive for the technological breakthroughs and innovations that customers want." },
        { title: "Long lasting relations", body: "Lasting collaboration is a key component to delivering great results. Our goal is becoming our clients' long-term, trusted partner." },
      ],
    },
    location: {
      headline: ["Find us in ", { italic: true, text: "Podgorica." }],
      body:
        "All our engineers are based here. When you work with Infostream, you work with the same team throughout — not a rotating pool of contractors.",
      addressLabel: "Address",
      addressLines: ["4 Rista Dragićevića", "Podgorica, Montenegro"],
      generalLabel: "General",
      supportLabel: "Support",
      phoneLabel: "Phone",
    },
  },
  services: {
    hero: {
      lines: [
        { text: ["What"], delay: 0 },
        { text: [{ italic: true, text: "we" }, " build."], delay: 0.12 },
      ],
      intro:
        "Three practice areas — financial software, national registers, and enterprise security — each built to meet the bar set by the institutions that depend on them every day.",
    },
    detail: [
      {
        number: "01",
        title: "Financial software",
        description:
          "We build the systems that sit at the centre of financial infrastructure — core banking engines, reconciliation pipelines, and regulatory reporting platforms. Built for audit trails, transaction volume, and the operational demands of central banks and finance ministries.",
        capabilities: [
          { name: "Core banking & ledger", body: "Multi-currency ledger systems designed for continuous operation — real-time posting, end-of-day reconciliation, and full audit history." },
          { name: "Reconciliation & settlement", body: "Automated matching of high-volume transaction files across counterparties, clearing houses, and internal books." },
          { name: "Regulatory reporting", body: "Structured report generation for central-bank submission: balance sheets, liquidity ratios, and custom regulatory templates." },
          { name: "Anti-fraud & compliance", body: "Rule-based and threshold-triggered controls integrated into payment flows to meet AML and KYC obligations." },
        ],
        clients: "Ministry of Finance · Central Bank of Montenegro · Tax Authority",
      },
      {
        number: "02",
        title: "Registers & data systems",
        description:
          "National registers are systems of record — every citizen, every transaction, every obligation. We design and operate them with the stability and access-control requirements that public institutions demand, including inter-ministry data exchange at the infrastructure level.",
        capabilities: [
          { name: "Tax & revenue registers", body: "End-to-end tax administration: taxpayer registration, obligation tracking, assessment, collection, and arrears management." },
          { name: "Pension & social systems", body: "Contribution history, eligibility calculation, and benefit disbursement for national pension and social-insurance programs." },
          { name: "Identity & document systems", body: "Secure registers for national identity documents, with biometric data handling and integration to border-control systems." },
          { name: "Inter-ministry data exchange", body: "Secure service buses and API gateways that let ministries share data without duplicating it — single source of truth, controlled access." },
        ],
        clients: "Ministry of Interior · Parliament ERP · Ministry of Defence",
      },
      {
        number: "03",
        title: "Security & compliance",
        description:
          "Enterprise security for organisations that cannot afford an incident. We deploy and manage Bitdefender's enterprise platform across endpoints, servers, and networks — and run the ISO 27001 management system that keeps the controls documented, tested, and current.",
        capabilities: [
          { name: "Bitdefender enterprise deployment", body: "Full-stack deployment across endpoint, server, and network layers — policy management, threat intelligence feeds, and centralised dashboards." },
          { name: "ISO 27001 management", body: "Gap assessment, control implementation, risk register maintenance, and preparation for third-party certification audits." },
          { name: "Incident response & monitoring", body: "SIEM integration, alert triage, and defined playbooks for containment and recovery when an incident occurs." },
          { name: "Compliance audits", body: "Structured reviews against GDPR, NIS2, and sector-specific requirements — with remediation roadmaps, not just findings." },
        ],
        clients: "ISO 27001 certified · ISO 9001 certified · Bitdefender partner",
      },
    ],
  },
  tech: {
    hero: {
      lines: [
        { text: ["The platforms behind"], delay: 0 },
        { text: ["systems that"], delay: 0.12 },
        { text: [{ italic: true, text: "can't fail" }, "."], delay: 0.24 },
      ],
      intro:
        "Long-lived stacks, chosen for decade-scale support, audit-grade observability, and large pools of qualified engineers in the region. We don't chase frameworks — we operate them for fifteen years.",
    },
    grid: [
      {
        id: "tech-oracle",
        eyebrow: "T01 — Primary database",
        title: "Oracle",
        blurb:
          "Our system of record for transactional and registry workloads. Where audit, durability, and a deep PL/SQL ecosystem aren't optional, this is where it lives.",
        items: [
          "Oracle Database 19c & 23ai",
          "Oracle APEX",
          "PL/SQL development",
          "Oracle Forms modernisation",
          "GoldenGate replication",
        ],
        imageAlt: "Oracle database illustration",
      },
      {
        id: "tech-dotnet",
        eyebrow: "T02 — Application platform",
        title: ".NET",
        blurb:
          "C# and the .NET runtime power most of the application-side logic across ministries: services, integrations, and the long-running APIs that sit in front of Oracle.",
        items: [
          "C# and .NET 8",
          "ASP.NET Core APIs",
          "Entity Framework Core",
          "Active Directory integration",
          "Windows & Linux deployment",
        ],
        imageAlt: ".NET application platform illustration",
      },
      {
        id: "tech-languages",
        eyebrow: "T03 — Languages & frameworks",
        title: "Long-lived stacks",
        blurb:
          "Where we don't standardise on .NET, we standardise on languages with a decade-plus production history and large regional talent pools. Boring is a feature.",
        items: [
          "Java / Spring Boot",
          "TypeScript / Node.js",
          "Python for data & ETL",
          "React / Next.js",
        ],
        imageAlt: "Languages and frameworks illustration",
      },
      {
        id: "tech-security",
        eyebrow: "T04 — Infrastructure & security",
        title: "Security & operations",
        blurb:
          "Sovereign hosting, ISO 27001 controls, and Bitdefender at every layer. Continuity drills are run, not promised — every system has a rehearsed path back.",
        items: [
          "Bitdefender GravityZone (endpoint + network)",
          "Linux (RHEL / Oracle Linux)",
          "Kubernetes & containerisation",
          "GitLab CI/CD pipelines",
          "Backup, DR, and continuity drills",
        ],
        imageAlt: "Infrastructure and security illustration",
      },
    ],
    principles: {
      eyebrow: "Our standard",
      headline: ["How we choose what ", { italic: true, text: "we operate" }, "."],
      intro:
        "Four rules applied to every technology decision — from the database engine to the monitoring stack. Chosen once, held for a decade.",
      root: "Technology standard",
      items: [
        { n: "01", title: "Boring beats novel", body: "If a stack has fewer than ten years of production history, we don't run it for a national institution. Predictability is a feature." },
        { n: "02", title: "Vendor-supported, locally staffable", body: "We avoid technologies that can only be hired for in two cities globally. The team that maintains the system has to be replaceable." },
        { n: "03", title: "Audit-grade by default", body: "Every component must produce evidence — change logs, access trails, deploy records — that a regulator can read without an interpreter." },
        { n: "04", title: "Operate what we build", body: "We don't hand systems over and walk away. The team that designed the stack is the same team running it in year fifteen." },
      ],
    },
  },
};
