"use client";

import { motion } from "framer-motion";
import { AnimatedDotPattern } from "@/components/dot-matrix-logo";
import { Shield, FileCheck, Network, Lock, Gauge, Globe2, CheckCircle, Database, Activity, BookOpen } from "lucide-react";

const platformFeatures = [
  {
    icon: Shield,
    title: "On-Chain Compliance Infrastructure",
    description: "Blockchain-based regulatory compliance system enabling transparent and auditable operations for registered investment advisors.",
    benefits: [
      "Real-time compliance monitoring and automated reporting",
      "Immutable audit trail for all transactions and operations",
      "Smart contract-based rule enforcement and policy automation",
    ],
  },
  {
    icon: FileCheck,
    title: "Automated Regulatory Reporting",
    description: "Streamlined reporting infrastructure that automatically generates and submits required filings to regulatory authorities.",
    benefits: [
      "Form ADV and other RIA filing automation",
      "Real-time portfolio disclosure and position reporting",
      "Automated client communication and transparency",
    ],
  },
  {
    icon: Database,
    title: "Decentralized Record Keeping",
    description: "Secure, immutable record-keeping system on blockchain ensuring data integrity and regulatory compliance.",
    benefits: [
      "Tamper-proof transaction history and audit logs",
      "Instant access to historical data for regulatory audits",
      "Reduced record-keeping costs and administrative overhead",
    ],
  },
  {
    icon: Lock,
    title: "KYC/AML Integration",
    description: "Integrated identity verification and anti-money laundering checks built directly into the blockchain infrastructure.",
    benefits: [
      "On-chain identity verification with privacy preservation",
      "Automated AML screening and transaction monitoring",
      "Compliance with SEC and FINRA requirements",
    ],
  },
  {
    icon: Activity,
    title: "Real-Time Risk Monitoring",
    description: "Continuous monitoring of portfolio positions, exposures, and compliance with client investment mandates.",
    benefits: [
      "Automated alerts for mandate breaches or policy violations",
      "Real-time exposure analysis and concentration tracking",
      "Integration with existing portfolio management systems",
    ],
  },
  {
    icon: Globe2,
    title: "Multi-Jurisdiction Support",
    description: "Infrastructure designed to comply with regulatory requirements across multiple jurisdictions including US, EU, and Asia-Pacific.",
    benefits: [
      "Configurable compliance rules for different regulatory regimes",
      "Support for cross-border investment advisory operations",
      "Automated currency and tax reporting for international clients",
    ],
  },
];

const technicalStack = [
  {
    category: "Blockchain Infrastructure",
    items: [
      "Ethereum-Based Smart Contracts",
      "Layer 2 Scaling for Low Transaction Costs",
      "IPFS for Decentralized Document Storage",
      "Chainlink Oracles for External Data",
      "Multi-Signature Wallet Authorization",
    ],
  },
  {
    category: "Compliance Automation",
    items: [
      "Form ADV Auto-Generation",
      "SEC/FINRA Reporting Integration",
      "Client Disclosure Automation",
      "Transaction Monitoring & Alerts",
      "Policy Enforcement via Smart Contracts",
    ],
  },
  {
    category: "Security & Privacy",
    items: [
      "Zero-Knowledge Proof Identity Verification",
      "Encrypted Client Data Storage",
      "Role-Based Access Control (RBAC)",
      "SOC 2 Type II Compliance",
      "Regular Security Audits",
    ],
  },
  {
    category: "Integration & APIs",
    items: [
      "RESTful API for Third-Party Integration",
      "Portfolio Management System Connectors",
      "Custodian Integration",
      "Bank Account Verification",
      "Real-Time Data Feeds",
    ],
  },
];

const useCases = [
  {
    title: "Registered Investment Advisors (RIAs)",
    description: "Streamline compliance operations and reduce regulatory overhead with automated reporting and on-chain transparency.",
    benefits: [
      "90% reduction in compliance administration time",
      "Instant regulatory audit readiness",
      "Enhanced client trust through blockchain transparency",
    ],
  },
  {
    title: "Fund Administrators",
    description: "Provide enhanced services to RIA clients with blockchain-based fund administration and reporting.",
    benefits: [
      "Real-time NAV calculation and reporting",
      "Automated investor communications",
      "Reduced operational costs and errors",
    ],
  },
  {
    title: "Regulatory Authorities",
    description: "Enable efficient oversight with real-time access to compliance data and automated reporting.",
    benefits: [
      "Real-time market surveillance capabilities",
      "Reduced examination and audit costs",
      "Enhanced investor protection",
    ],
  },
];

export default function RIAOnChainPage() {
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
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-xs font-medium uppercase tracking-widest text-gray-700">
              <Shield className="h-4 w-4" />
              Blockchain Compliance Infrastructure
            </div>

            <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">
              RIA-OnChain
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Revolutionary blockchain infrastructure enabling transparent, automated compliance
              for registered investment advisors. Built for the future of regulated financial services.
            </p>
          </motion.div>

          {/* Key Stats */}
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 lg:grid-cols-4">
            {[
              { value: "90%", label: "Cost Reduction" },
              { value: "Real-Time", label: "Compliance Monitoring" },
              { value: "24/7", label: "Audit Readiness" },
              { value: "Zero", label: "Manual Reporting" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <p className="text-3xl font-light text-gray-900">{stat.value}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-light text-white">The Challenge</h2>
              <p className="mt-4 text-gray-300">
                Registered Investment Advisors face increasing regulatory complexity, rising compliance costs,
                and time-consuming manual reporting processes. Traditional compliance infrastructure is:
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Expensive to maintain and operate",
                  "Prone to human error and inconsistencies",
                  "Difficult to audit and verify",
                  "Lacking real-time transparency for regulators",
                  "Fragmented across multiple systems",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-light text-white">Our Solution</h2>
              <p className="mt-4 text-gray-300">
                RIA-OnChain leverages blockchain technology to create a transparent, automated, and
                cost-effective compliance infrastructure that benefits RIAs, regulators, and investors:
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Automated regulatory reporting and filing",
                  "Immutable audit trail on blockchain",
                  "Real-time compliance monitoring",
                  "Smart contract-based policy enforcement",
                  "Unified platform for all compliance needs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light tracking-tight text-gray-900">Platform Features</h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive blockchain infrastructure for RIA compliance and operations
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-gray-100 p-3">
                    <feature.icon className="h-6 w-6 text-gray-900" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">{feature.description}</p>

                    <ul className="mt-6 space-y-3">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3 text-sm text-gray-600">
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light tracking-tight text-gray-900">Use Cases</h2>
            <p className="mt-4 text-lg text-gray-600">
              Transforming compliance for the entire RIA ecosystem
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg border border-gray-200 bg-gray-50 p-8"
              >
                <h3 className="text-xl font-semibold text-gray-900">{useCase.title}</h3>
                <p className="mt-4 text-sm text-gray-600">{useCase.description}</p>

                <div className="mt-6 space-y-2">
                  {useCase.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light tracking-tight text-gray-900">Technical Architecture</h2>
            <p className="mt-4 text-lg text-gray-600">
              Enterprise-grade blockchain infrastructure built for compliance
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {technicalStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg border border-gray-200 bg-white p-6"
              >
                <h3 className="font-semibold text-gray-900">{stack.category}</h3>
                <ul className="mt-6 space-y-3">
                  {stack.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light tracking-tight text-gray-900">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600">
              Simple integration, powerful compliance automation
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Onboarding",
                description: "RIA completes KYC verification and connects existing portfolio management systems",
              },
              {
                step: "02",
                title: "Configuration",
                description: "Set up compliance rules, client mandates, and reporting requirements via smart contracts",
              },
              {
                step: "03",
                title: "Monitoring",
                description: "Continuous real-time monitoring of all transactions and positions against regulatory requirements",
              },
              {
                step: "04",
                title: "Reporting",
                description: "Automated generation and submission of all required regulatory filings and disclosures",
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="mb-4 text-5xl font-light text-gray-200">{step.step}</div>
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Compliance Operations?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Join the future of regulatory compliance with RIA-OnChain. Schedule a demo to see how
            blockchain technology can reduce costs and enhance transparency.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
            >
              Schedule Demo
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white px-8 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-gray-900"
            >
              <BookOpen className="h-4 w-4" />
              Download Whitepaper
            </a>
          </div>

          <p className="mt-10 text-sm text-gray-400">
            Currently in beta - Limited access for qualified RIAs
          </p>
        </div>
      </section>
    </main>
  );
}
