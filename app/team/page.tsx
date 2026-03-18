"use client";

import { motion } from "framer-motion";
import { AnimatedDotPattern } from "@/components/dot-matrix-logo";
import { Users, Award, TrendingUp, Globe2, BarChart3, Shield, Code2, Briefcase, Brain, Scale } from "lucide-react";
import Link from "next/link";

const capabilities = [
  {
    icon: BarChart3,
    title: "Quantitative Research",
    description: "Systematic alpha generation through statistical modeling, factor analysis, and machine learning. Our quant team builds and maintains proprietary signals across digital and traditional asset classes.",
    highlights: [
      "Multi-factor models and alternative data pipelines",
      "Real-time risk analytics and portfolio optimization",
      "Backtesting infrastructure with institutional-grade execution logic",
    ],
  },
  {
    icon: Code2,
    title: "Engineering & Infrastructure",
    description: "Full-stack platform engineering from low-latency execution systems to scalable cloud infrastructure. Purpose-built for institutional throughput and regulatory auditability.",
    highlights: [
      "High-availability trading systems and API integrations",
      "Secure custody and wallet infrastructure",
      "Continuous deployment with SOC 2-aligned DevSecOps",
    ],
  },
  {
    icon: Shield,
    title: "Compliance & Regulatory",
    description: "Multi-jurisdictional compliance spanning SEC, FINRA, CSSF, and Swiss regulatory frameworks. Proactive governance embedded into every product decision.",
    highlights: [
      "KYC/AML automation and transaction monitoring",
      "Cross-border regulatory alignment (US, EU, Switzerland)",
      "Ongoing audit preparation and reporting standards",
    ],
  },
  {
    icon: Briefcase,
    title: "Capital Markets & Distribution",
    description: "Deep institutional relationships across family offices, fund-of-funds, and sovereign allocators. Experienced in structuring and distributing regulated investment products.",
    highlights: [
      "Institutional onboarding and relationship management",
      "Structured product design and capital formation",
      "Allocator reporting and performance attribution",
    ],
  },
  {
    icon: Brain,
    title: "AI & Data Science",
    description: "Applied machine learning for market microstructure analysis, sentiment extraction, and portfolio intelligence. Bridging traditional finance and cutting-edge AI research.",
    highlights: [
      "NLP-driven market sentiment and news analytics",
      "Predictive models for volatility and liquidity",
      "Automated research pipelines and RAG systems",
    ],
  },
  {
    icon: Scale,
    title: "Risk Management",
    description: "Enterprise risk framework covering market, credit, operational, and cyber risk. Real-time monitoring with institutional escalation protocols.",
    highlights: [
      "VaR, CVaR, and stress testing across portfolios",
      "Counterparty and custodian due diligence",
      "Operational risk controls and disaster recovery",
    ],
  },
];

const advisors = [
  {
    name: "Regulatory Counsel",
    focus: "Swiss & Luxembourg compliance, change-of-control approvals, and CSSF compartment governance.",
  },
  {
    name: "Banking Partnerships",
    focus: "Tier-1 European banks and global custodians supporting onboarding, segregated accounts, and treasury.",
  },
  {
    name: "Technology & Security",
    focus: "Former exchange and cloud security leaders guiding infrastructure roadmaps and audits.",
  },
  {
    name: "Institutional Advisors",
    focus: "Family office and fund-of-fund executives advising on allocator onboarding and reporting standards.",
  },
];

const trackRecord = [
  { label: "Combined AUM Experience", value: "$300M+", icon: TrendingUp },
  { label: "Jurisdictions Covered", value: "12+", icon: Globe2 },
  { label: "Team Members", value: "20+", icon: Users },
  { label: "Uptime SLA", value: "99.9%", icon: Award },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20">
        <AnimatedDotPattern className="opacity-40" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">
              Our Team
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              A multidisciplinary team of quantitative researchers, engineers, compliance specialists, and
              capital markets professionals. Mira Labs brings together institutional expertise across finance,
              technology, and regulation to build and operate a best-in-class digital asset platform.
            </p>
          </motion.div>

          {/* Track Record Stats */}
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 lg:grid-cols-4">
            {trackRecord.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                  <stat.icon className="h-5 w-5 text-gray-900" strokeWidth={1.5} />
                </div>
                <p className="mt-4 text-3xl font-light text-gray-900">{stat.value}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light tracking-tight text-gray-900">Core Capabilities</h2>
            <p className="mt-4 text-lg text-gray-600">
              Specialized teams across every discipline required to build, operate, and scale an institutional-grade platform.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, index) => (
              <motion.article
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
                    <cap.icon className="h-6 w-6 text-gray-900" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{cap.title}</h3>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-gray-600">{cap.description}</p>

                <ul className="mt-5 space-y-3">
                  {cap.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Bench */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light tracking-tight text-gray-900">Advisory Bench</h2>
            <p className="mt-4 text-lg text-gray-600">
              Experienced advisors support regulatory alignment, banking relationships, security, and allocator
              expectations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg border border-gray-200 bg-gray-50 p-6"
              >
                <h3 className="font-semibold text-gray-900">{advisor.name}</h3>
                <p className="mt-3 text-sm text-gray-600">{advisor.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
            Connect with Our Team
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Schedule a confidential briefing to review platform capabilities, infrastructure, and partnership
            opportunities.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
            >
              Request Briefing
            </Link>
            <Link
              href="/research"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-transparent px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Research
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
