import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  CheckCircle,
  AlertTriangle,
  Shield,
  ArrowRight,
  Phone,
  HelpCircle,
  Clock,
  DollarSign,
  Users,
  FileCheck,
  Flame,
  Droplets,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema"
import { Breadcrumb } from "@/components/Breadcrumb";
import { BackToHub } from "@/components/BackToHub";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Large Loss Commercial Restoration Tampa | $500K+ Claims | FCS",
  description:
    "Expert large loss commercial restoration in Tampa Bay. Specialized expertise for complex insurance claims over $500K including multi-building disasters, manufacturing facilities, and major structural damage.",
  keywords:
    "large loss restoration Tampa, commercial disaster recovery Florida, major insurance claims construction, catastrophic damage repair, multi-million dollar restoration, Tampa large loss contractor",
};

const largeLossCategories = [
  {
    category: "Hurricane/Wind Damage",
    threshold: "$500K - $50M+",
    characteristics: "Multi-building damage, roof systems, water intrusion, business interruption",
    complexity: "Highest - Multiple adjusters, engineers, phased restoration",
    timeline: "12-36 months typical",
  },
  {
    category: "Fire/Smoke Damage",
    threshold: "$500K - $20M+",
    characteristics: "Structural damage, smoke migration, contents loss, code upgrades",
    complexity: "Very High - Forensic investigation, demolition, full rebuild common",
    timeline: "12-24 months typical",
  },
  {
    category: "Water/Flood Damage",
    threshold: "$500K - $10M+",
    characteristics: "Mold remediation, structural drying, equipment replacement",
    complexity: "High - Time-sensitive; multiple coverage types",
    timeline: "6-18 months typical",
  },
  {
    category: "Collapse/Structural",
    threshold: "$1M - $50M+",
    characteristics: "Engineering assessment, shoring, potential demolition, rebuild",
    complexity: "Highest - Safety concerns, forensic analysis, liability issues",
    timeline: "18-48 months typical",
  },
  {
    category: "Multi-Property Events",
    threshold: "$5M - $100M+",
    characteristics: "Campus-wide damage, portfolio losses, coordinated response",
    complexity: "Extreme - Multiple locations, carriers, jurisdictions",
    timeline: "24-60 months typical",
  },
];

const claimProcessPhases = [
  {
    phase: "Emergency Response",
    duration: "0-72 hours",
    activities: [
      "Secure property and prevent further damage",
      "Document conditions with photos/video",
      "Begin emergency mitigation (water extraction, board-up)",
      "Notify insurance carrier and broker",
      "Engage public adjuster if applicable",
    ],
    criticalActions: "Time is critical; document everything before touching",
  },
  {
    phase: "Initial Assessment",
    duration: "Week 1-4",
    activities: [
      "Carrier assigns adjuster and engineer",
      "Forensic investigation if applicable",
      "Preliminary scope of damage",
      "Initial reserve established",
      "Temporary operations planning",
    ],
    criticalActions: "Ensure your experts match carrier's experts",
  },
  {
    phase: "Scope Development",
    duration: "Month 1-3",
    activities: [
      "Detailed damage assessment",
      "Contractor estimates",
      "Code upgrade analysis",
      "Business interruption documentation",
      "Subrogation investigation",
    ],
    criticalActions: "Comprehensive scope prevents underpayment",
  },
  {
    phase: "Negotiation",
    duration: "Month 2-6",
    activities: [
      "Reconcile scope differences",
      "Address coverage disputes",
      "Negotiate unit costs and overhead",
      "Agree on restoration approach",
      "Secure adequate funding",
    ],
    criticalActions: "Don't begin major work until funding secured",
  },
  {
    phase: "Restoration",
    duration: "Month 4-24+",
    activities: [
      "Contractor selection and contracting",
      "Phased construction execution",
      "Progress billing and draw requests",
      "Change order management",
      "Quality control and documentation",
    ],
    criticalActions: "Detailed documentation supports supplemental claims",
  },
  {
    phase: "Closeout",
    duration: "Month 18-36+",
    activities: [
      "Final inspections and punch list",
      "Depreciation holdback recovery",
      "Final claim reconciliation",
      "Business interruption closeout",
      "Subrogation recovery distribution",
    ],
    criticalActions: "Complete all work before claim closure",
  },
];

const teamMembers = [
  {
    role: "General Contractor",
    responsibility: "Overall project management, construction execution",
    selection: "Experience with large loss; insurance process knowledge; bonding capacity",
    engagement: "As early as scope development phase",
  },
  {
    role: "Public Adjuster",
    responsibility: "Represents policyholder in claim negotiation",
    selection: "Licensed; large loss experience; transparent fee structure",
    engagement: "Immediately after loss; before carrier adjuster if possible",
  },
  {
    role: "Forensic Engineer",
    responsibility: "Origin/cause analysis; structural assessment",
    selection: "Specialization in damage type; expert witness experience",
    engagement: "Before any destructive testing or demolition",
  },
  {
    role: "Coverage Attorney",
    responsibility: "Policy interpretation; dispute resolution; litigation if needed",
    selection: "Insurance coverage specialty; trial experience",
    engagement: "When coverage disputes arise or for complex claims",
  },
  {
    role: "Forensic Accountant",
    responsibility: "Business interruption documentation; loss quantification",
    selection: "Insurance claim experience; industry knowledge",
    engagement: "For significant BI claims; during scope phase",
  },
  {
    role: "Environmental Consultant",
    responsibility: "Mold assessment; asbestos/lead; remediation oversight",
    selection: "Licensed; experience with insurance claims",
    engagement: "Whenever environmental issues suspected",
  },
];

const commonDisputes = [
  {
    dispute: "Scope Disagreements",
    description: "Carrier disputes extent of damage or necessary repairs",
    resolution: "Independent engineer; detailed documentation; meet and confer",
    prevention: "Thorough documentation before any demolition",
  },
  {
    dispute: "Code Upgrade Coverage",
    description: "Disagreement on what code upgrades are covered",
    resolution: "Review ordinance/law coverage; code consultant; AHJ letters",
    prevention: "Identify upgrades early; document code requirements",
  },
  {
    dispute: "Overhead and Profit",
    description: "Carrier denies or reduces contractor O&P",
    resolution: "Industry standards documentation; subcontractor analysis",
    prevention: "Clear contract structure; market rate documentation",
  },
  {
    dispute: "Business Interruption Period",
    description: "Disagreement on how long BI coverage applies",
    resolution: "Construction timeline documentation; industry standards",
    prevention: "Detailed project schedule; progress documentation",
  },
  {
    dispute: "Pre-existing Conditions",
    description: "Carrier attributes damage to pre-loss conditions",
    resolution: "Historic maintenance records; expert analysis",
    prevention: "Regular maintenance documentation; pre-loss photos",
  },
  {
    dispute: "Depreciation Recovery",
    description: "Carrier delays or denies depreciation holdback",
    resolution: "Complete repairs; document completion; demand payment",
    prevention: "Understand policy terms; complete all covered work",
  },
];

const documentationRequirements = [
  {
    category: "Pre-Loss Documentation",
    items: [
      "Building plans and specifications",
      "Maintenance records and capital improvements",
      "Recent appraisals or valuations",
      "Equipment lists with values",
      "Business financial records (3 years minimum)",
    ],
  },
  {
    category: "Loss Documentation",
    items: [
      "Date, time, and cause of loss",
      "Immediate photos and videos",
      "Weather reports or incident reports",
      "Witness statements",
      "Emergency response records",
    ],
  },
  {
    category: "Damage Documentation",
    items: [
      "Comprehensive photo documentation",
      "Engineering assessment reports",
      "Environmental testing results",
      "Contractor estimates and proposals",
      "Code compliance analysis",
    ],
  },
  {
    category: "Restoration Documentation",
    items: [
      "Contracts and change orders",
      "Daily logs and progress photos",
      "Inspection reports",
      "Material receipts and invoices",
      "Completion certificates",
    ],
  },
];

const faqs = [
  {
    question: "What qualifies as a 'large loss' commercial claim?",
    answer:
      "While definitions vary by carrier, large loss commercial claims typically exceed $500,000 in total damages. These claims receive specialized handling because of their complexity. Carriers often assign dedicated large loss adjusters, bring in forensic engineers, and may involve their Special Investigation Unit for high-value claims. From a restoration standpoint, large losses require contractors with specific capabilities: bonding capacity to handle the project value, cash flow to manage delayed insurance payments, experience with complex insurance claims, and project management systems for multi-phase restorations. If your loss exceeds $500K, ensure you're working with professionals who specialize in large loss rather than routine claims.",
  },
  {
    question: "Should I hire a public adjuster for a large loss?",
    answer:
      "For large commercial losses, a public adjuster can be valuable. Benefits include: dedicated representation (the carrier's adjuster works for them, not you), expertise in claim documentation and valuation, negotiation experience with large loss protocols, and time savings for business owners. Typical fees are 5-15% of the claim settlement. Consider hiring a PA when: the loss is complex or contentious, you lack time to manage the claim yourself, the carrier's initial offers seem inadequate, or coverage disputes arise. Interview multiple PAs, verify licensing, check references on similar-sized claims, and understand their fee structure before engaging. For straightforward claims with cooperative carriers, an experienced restoration contractor may provide sufficient guidance.",
  },
  {
    question: "How long do large loss restorations take?",
    answer:
      "Large loss commercial restorations typically take 12-36 months from loss to completion. Timeline factors include: damage severity and scope (fire rebuilds take longer than water damage), claim complexity (disputes extend timelines significantly), permitting requirements (especially for code upgrades), material availability (custom or specialized items), and business requirements (phased restoration to maintain operations). Hurricane damage often takes longest due to market-wide demand surge for contractors and materials. The claim process itself can take 3-12 months before major restoration begins. Plan for the long term: secure adequate business interruption coverage, establish temporary operations early, and maintain regular communication with all stakeholders throughout the process.",
  },
  {
    question: "What is overhead and profit, and will my claim include it?",
    answer:
      "Overhead and profit (O&P) compensates the general contractor for project management, coordination, insurance, and profit margin—typically 10% overhead plus 10% profit (20% total) on top of direct costs. Carriers sometimes dispute O&P, arguing it's only warranted when multiple trades are involved. Industry standards (Xactimate, RS Means) include O&P for projects requiring general contractor coordination. For large losses, O&P is almost always warranted given the complexity of coordinating multiple subcontractors, managing insurance requirements, and providing project oversight. If your carrier denies O&P, document the scope of coordination required and be prepared to negotiate. Your contractor's detailed project management documentation supports the need for O&P.",
  },
  {
    question: "How do I manage business operations during restoration?",
    answer:
      "Business continuity during large loss restoration requires early planning. Options include: temporary relocation (covered by most policies under 'extra expense'), phased restoration that allows partial operations, modified operations in undamaged areas, and remote work arrangements where feasible. Document all extra expenses for reimbursement. For manufacturing or specialized facilities, coordinate closely with your contractor on phasing—some operations may continue while others are restored. Business interruption coverage has time limits, so efficient restoration directly impacts your recovery. Consider engaging a business continuity consultant for complex operations. Communicate regularly with customers, suppliers, and employees about timeline and expectations.",
  },
  {
    question: "What if I disagree with the carrier's settlement offer?",
    answer:
      "Dispute resolution options escalate progressively. Start with negotiation: provide additional documentation, get independent estimates, and request meetings with carrier decision-makers. If negotiation fails, invoke the appraisal clause (most policies include this)—each party selects an appraiser, who together select an umpire to determine the loss amount. Appraisal addresses valuation disputes, not coverage disputes. For coverage disputes, mediation is often required before litigation. If necessary, file a breach of contract lawsuit or bad faith claim. Throughout the process, document everything, meet all policy deadlines, and engage an insurance coverage attorney for guidance on rights and options. Most large loss disputes settle before trial, but litigation readiness strengthens your negotiating position.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Large Loss Commercial Restoration", href: "/large-loss-commercial-restoration/" },
];


const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/services/commercial/medical-construction/", label: "Medical Facility Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function LargeLossCommercialRestorationPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Large Loss Commercial Restoration" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Large Loss Restoration Services"
        serviceDescription="Expert large loss commercial restoration in Tampa Bay. Specialized capabilities for complex insurance claims over $500K including multi-building disasters and major structural damage."
        city="Tampa"
        minPrice="500000"
      />

      
      <ArticleSchema
        headline="Large Loss Commercial Restoration Tampa | $500K+ Claims | FCS"
        description="Expert large loss commercial restoration in Tampa Bay. Specialized expertise for complex insurance claims over $500K including multi-building disasters, manufacturing facilities, and major structural damage."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/large-loss-commercial-restoration/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Commercial", href: "/commercial/" },
          { name: "Insurance Restoration", href: "/understanding-tampa-insurance-restoration-claims/" },
          { name: "Large Loss", href: "/large-loss-commercial-restoration/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Commercial construction project in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <BackToHub
              silo="commercial"
              customHubTitle="Insurance Restoration"
              customHubHref="/understanding-tampa-insurance-restoration-claims/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Large Loss Commercial Restoration
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Specialized expertise for complex commercial insurance claims over $500K.
              From catastrophic storm damage to major fires, we guide Tampa Bay
              businesses through recovery with the resources and experience these
              challenging projects demand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Discuss Your Large Loss
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Loss Categories */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Large Loss Categories
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Different loss types require specialized approaches and expertise.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="px-4 py-3 text-left font-semibold">Category</th>
                  <th className="px-4 py-3 text-center font-semibold">Typical Range</th>
                  <th className="px-4 py-3 text-left font-semibold">Characteristics</th>
                  <th className="px-4 py-3 text-center font-semibold">Complexity</th>
                  <th className="px-4 py-3 text-center font-semibold">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {largeLossCategories.map((cat, index) => (
                  <tr
                    key={cat.category}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-4 font-semibold text-brand-green-dark">
                      {cat.category}
                    </td>
                    <td className="px-4 py-4 text-center text-brand-gold-dark font-medium">
                      {cat.threshold}
                    </td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{cat.characteristics}</td>
                    <td className="px-4 py-4 text-center">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        cat.complexity.includes("Extreme") || cat.complexity.includes("Highest")
                          ? "bg-red-100 text-red-700"
                          : cat.complexity.includes("Very High")
                          ? "bg-orange-100 text-orange-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {cat.complexity.split(" - ")[0]}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center text-sm">{cat.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Claim Process */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Large Loss Claim Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Navigate complex claims with a systematic approach.
          </p>
          <div className="space-y-4 max-w-4xl mx-auto">
            {claimProcessPhases.map((phase, index) => (
              <div
                key={phase.phase}
                className="bg-white rounded-xl p-6 shadow-md border-l-4 border-brand-green"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-brand-green-dark">
                        {phase.phase}
                      </h3>
                      <span className="text-sm font-medium text-brand-gold bg-brand-gold-light/30 px-3 py-1 rounded-full">
                        {phase.duration}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-2 mb-3">
                      {phase.activities.map((activity, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{activity}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-yellow-700 bg-yellow-50 rounded p-2">
                      <strong>Critical:</strong> {phase.criticalActions}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Building Your Large Loss Team
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Complex claims require specialized professionals working together.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div key={member.role} className="card p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  {member.role}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{member.responsibility}</p>
                <p className="text-sm text-gray-500 mb-2">
                  <strong>Selection:</strong> {member.selection}
                </p>
                <p className="text-sm text-brand-gold-dark bg-brand-gold-light/20 rounded p-2">
                  <strong>When:</strong> {member.engagement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Disputes */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Common Disputes & Resolution
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Anticipate and address typical large loss claim challenges.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonDisputes.map((item) => (
              <div key={item.dispute} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  <h3 className="font-bold text-brand-green-dark">{item.dispute}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <p className="text-sm text-green-700 bg-green-50 rounded p-2 mb-2">
                  <strong>Resolution:</strong> {item.resolution}
                </p>
                <p className="text-sm text-blue-700 bg-blue-50 rounded p-2">
                  <strong>Prevention:</strong> {item.prevention}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Documentation Requirements
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive documentation supports maximum recovery.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {documentationRequirements.map((doc) => (
              <div key={doc.category} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-4">
                  {doc.category}
                </h3>
                <ul className="space-y-2">
                  {doc.items.map((item, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-white rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-brand-green-dark hover:no-underline py-4">
                  <span className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Restoration Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/understanding-tampa-insurance-restoration-claims/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Insurance Claims Guide
              </h3>
              <p className="text-gray-600 text-sm">
                General insurance restoration guidance.
              </p>
            </Link>
            <Link
              href="/insurance-restoration-condominiums/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Condo Insurance Restoration
              </h3>
              <p className="text-gray-600 text-sm">
                Multi-party claims for condominiums.
              </p>
            </Link>
            <Link
              href="/commercial/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Commercial Construction Services
              </h3>
              <p className="text-gray-600 text-sm">
                Full range of commercial capabilities.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Facing a Large Commercial Loss?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            FCS has the resources, experience, and financial capacity to handle
            Tampa Bay's most complex commercial restoration projects. From initial
            response through final closeout, we guide you to complete recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Start Your Project
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>
      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Services"
            links={internalLinks}
          />
        </div>
      </section>

    </>
  );
}