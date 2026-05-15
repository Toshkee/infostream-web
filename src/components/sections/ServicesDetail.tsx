"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Financial software",
    description:
      "We build the systems that sit at the centre of financial infrastructure — core banking engines, reconciliation pipelines, and regulatory reporting platforms. Built for audit trails, transaction volume, and the operational demands of central banks and finance ministries.",
    capabilities: [
      {
        name: "Core banking & ledger",
        body: "Multi-currency ledger systems designed for continuous operation — real-time posting, end-of-day reconciliation, and full audit history.",
      },
      {
        name: "Reconciliation & settlement",
        body: "Automated matching of high-volume transaction files across counterparties, clearing houses, and internal books.",
      },
      {
        name: "Regulatory reporting",
        body: "Structured report generation for central-bank submission: balance sheets, liquidity ratios, and custom regulatory templates.",
      },
      {
        name: "Anti-fraud & compliance",
        body: "Rule-based and threshold-triggered controls integrated into payment flows to meet AML and KYC obligations.",
      },
    ],
    clients: "Ministry of Finance · Central Bank of Montenegro · Tax Authority",
  },
  {
    number: "02",
    title: "Registers & data systems",
    description:
      "National registers are systems of record — every citizen, every transaction, every obligation. We design and operate them with the stability and access-control requirements that public institutions demand, including inter-ministry data exchange at the infrastructure level.",
    capabilities: [
      {
        name: "Tax & revenue registers",
        body: "End-to-end tax administration: taxpayer registration, obligation tracking, assessment, collection, and arrears management.",
      },
      {
        name: "Pension & social systems",
        body: "Contribution history, eligibility calculation, and benefit disbursement for national pension and social-insurance programs.",
      },
      {
        name: "Identity & document systems",
        body: "Secure registers for national identity documents, with biometric data handling and integration to border-control systems.",
      },
      {
        name: "Inter-ministry data exchange",
        body: "Secure service buses and API gateways that let ministries share data without duplicating it — single source of truth, controlled access.",
      },
    ],
    clients: "Ministry of Interior · Parliament ERP · Ministry of Defence",
  },
  {
    number: "03",
    title: "Security & compliance",
    description:
      "Enterprise security for organisations that cannot afford an incident. We deploy and manage Bitdefender's enterprise platform across endpoints, servers, and networks — and run the ISO 27001 management system that keeps the controls documented, tested, and current.",
    capabilities: [
      {
        name: "Bitdefender enterprise deployment",
        body: "Full-stack deployment across endpoint, server, and network layers — policy management, threat intelligence feeds, and centralised dashboards.",
      },
      {
        name: "ISO 27001 management",
        body: "Gap assessment, control implementation, risk register maintenance, and preparation for third-party certification audits.",
      },
      {
        name: "Incident response & monitoring",
        body: "SIEM integration, alert triage, and defined playbooks for containment and recovery when an incident occurs.",
      },
      {
        name: "Compliance audits",
        body: "Structured reviews against GDPR, NIS2, and sector-specific requirements — with remediation roadmaps, not just findings.",
      },
    ],
    clients: "ISO 27001 certified · ISO 9001 certified · Bitdefender partner",
  },
];

export function ServicesDetail() {
  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pb-28 md:pb-40">
        <div className="border-t border-line-soft">
          {services.map((s) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="py-20 border-b border-line-soft"
            >
              {/* Header row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-14">
                <div className="lg:col-span-1 pt-1">
                  <span className="font-mono text-[0.78rem] text-muted tracking-[0.08em]">
                    {s.number}
                  </span>
                </div>
                <div className="lg:col-span-5">
                  <h2 className="text-[clamp(1.8rem,2.5vw+0.5rem,3rem)] font-serif font-normal leading-tight tracking-tight text-ink">
                    {s.title}
                  </h2>
                  <p className="mt-6 text-[1.05rem] leading-relaxed text-ink/70 max-w-lg">
                    {s.description}
                  </p>
                </div>
                <div className="lg:col-span-4 lg:col-start-9 flex items-end">
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-muted leading-loose">
                    {s.clients}
                  </p>
                </div>
              </div>

              {/* Capability grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-line-soft/40 border border-line-soft/40">
                {s.capabilities.map((c) => (
                  <div
                    key={c.name}
                    className="bg-bone p-8 flex flex-col gap-4"
                  >
                    <h3 className="text-[0.92rem] font-medium text-ink tracking-tight">
                      {c.name}
                    </h3>
                    <p className="text-[0.88rem] leading-relaxed text-ink/60">
                      {c.body}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
