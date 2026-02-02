import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Calculator,
  CheckCircle,
  DollarSign,
  TrendingUp,
  Lightbulb,
  ArrowRight,
  Phone,
  HelpCircle,
  Settings,
  Target,
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
  title: "Medical Office Value Engineering | Healthcare Construction Tampa | FCS",
  description:
    "Strategic value engineering for medical office construction in Tampa Bay. Reduce costs without compromising quality, compliance, or patient experience.",
  keywords:
    "medical office value engineering, healthcare construction cost savings, medical facility budget optimization, Tampa healthcare construction, VE medical buildings",
};

const veOpportunities = [
  {
    category: "MEP Systems",
    potentialSavings: "15-25%",
    strategies: [
      "VRF systems vs. traditional HVAC (lower ductwork costs)",
      "LED lighting with occupancy sensors",
      "Right-sized electrical panels and circuits",
      "Medical gas manifold optimization",
      "Heat recovery ventilation systems",
    ],
  },
  {
    category: "Structural Systems",
    potentialSavings: "8-15%",
    strategies: [
      "Post-tensioned concrete vs. conventional",
      "Prefabricated structural elements",
      "Optimized column spacing for flexibility",
      "Lightweight composite flooring systems",
      "Standardized bay sizes across floors",
    ],
  },
  {
    category: "Building Envelope",
    potentialSavings: "10-18%",
    strategies: [
      "High-performance glazing with optimal window-to-wall ratio",
      "Insulated metal panels for rapid enclosure",
      "Continuous insulation details",
      "Integrated sunshade systems",
      "Durable exterior finishes with low maintenance",
    ],
  },
  {
    category: "Interior Finishes",
    potentialSavings: "12-20%",
    strategies: [
      "LVT flooring in non-clinical areas",
      "Standardized millwork and casework packages",
      "Modular wall systems for flexibility",
      "Strategic use of premium finishes in patient areas only",
      "Consolidated finish schedules across tenant spaces",
    ],
  },
];

const caseStudies = [
  {
    project: "Multi-Specialty Medical Office Building",
    originalBudget: "$8.2M",
    veReduction: "$1.1M",
    percentSaved: "13.4%",
    keyStrategies: "VRF HVAC, standardized finishes, prefab headwalls",
    outcome: "On-budget delivery with enhanced energy efficiency",
  },
  {
    project: "Ambulatory Surgery Center Buildout",
    originalBudget: "$4.8M",
    veReduction: "$580K",
    percentSaved: "12.1%",
    keyStrategies: "Right-sized mechanical, modular ORs, value-engineered casework",
    outcome: "AHCA approval first attempt; operational 2 months early",
  },
  {
    project: "Urgent Care Facility",
    originalBudget: "$2.1M",
    veReduction: "$320K",
    percentSaved: "15.2%",
    keyStrategies: "Pre-engineered shell, consolidated imaging suite, efficient layout",
    outcome: "Faster patient throughput due to optimized workflow",
  },
];

const veProcess = [
  {
    phase: "Information Gathering",
    timing: "SD Phase",
    activities: [
      "Program requirements validation",
      "Cost baseline establishment",
      "Function analysis of spaces",
      "Regulatory requirement review",
    ],
    deliverable: "VE opportunity matrix",
  },
  {
    phase: "Creative Phase",
    timing: "DD Phase",
    activities: [
      "Team brainstorming sessions",
      "Alternative system evaluation",
      "Life cycle cost analysis",
      "Performance trade-off assessment",
    ],
    deliverable: "Prioritized recommendations",
  },
  {
    phase: "Evaluation Phase",
    timing: "Late DD",
    activities: [
      "Cost/benefit analysis",
      "Risk assessment",
      "Owner decision meetings",
      "Design team coordination",
    ],
    deliverable: "Approved VE items",
  },
  {
    phase: "Implementation",
    timing: "CD Phase",
    activities: [
      "Document revisions",
      "Specification updates",
      "Subcontractor buyout with VE",
      "Quality verification plans",
    ],
    deliverable: "Final construction documents",
  },
];

const commonMistakes = [
  {
    mistake: "Cutting Infection Control Features",
    impact: "AHCA rejection, patient safety risk, costly retrofits",
    betterApproach: "Maintain HVAC pressure relationships and air changes; optimize other areas",
  },
  {
    mistake: "Reducing Structural Capacity",
    impact: "Limits future equipment; costly floor reinforcement later",
    betterApproach: "Maintain floor load capacity for medical imaging equipment flexibility",
  },
  {
    mistake: "Value Engineering Too Late",
    impact: "Redesign costs, schedule delays, missed opportunities",
    betterApproach: "Begin VE at schematic design when changes are least expensive",
  },
  {
    mistake: "Ignoring Operations Costs",
    impact: "Higher ongoing expenses; poor ROI despite lower construction cost",
    betterApproach: "Use life cycle cost analysis; 20-year payback on efficient systems",
  },
  {
    mistake: "Commodity Finishes in Patient Areas",
    impact: "Negative patient perception; lower reimbursement potential",
    betterApproach: "Strategic premium finishes where patients see them; economize back-of-house",
  },
];

const faqs = [
  {
    question: "When should value engineering start on a medical office project?",
    answer:
      "Value engineering should begin during schematic design, ideally before design development. At this stage, major system decisions are still flexible, and changes cost nothing. Studies show that 80% of a project's cost is determined by decisions made in the first 20% of design. Waiting until construction documents or bidding severely limits savings potential and typically results in scope cuts rather than true value engineering.",
  },
  {
    question: "How is value engineering different from cost cutting?",
    answer:
      "Value engineering maintains or improves function while reducing cost. Cost cutting simply removes scope. For example, value engineering might substitute a VRF HVAC system for traditional rooftop units—providing better zone control and energy efficiency at lower installed cost. Cost cutting would just reduce the HVAC system size, potentially creating patient comfort and code compliance issues.",
  },
  {
    question: "What medical construction costs cannot be value engineered?",
    answer:
      "Certain items should not be value engineered: infection control systems (air pressure relationships, HEPA filtration), life safety systems (fire sprinklers, egress paths), structural capacity for medical equipment, and ADA accessibility features. These are regulatory requirements and patient safety essentials. VE efforts should focus on finishes, non-critical mechanical systems, and construction methods instead.",
  },
  {
    question: "How much can value engineering save on medical office construction?",
    answer:
      "Typical VE savings on medical office projects range from 8-18% of construction costs. A formal VE study conducted during design development usually identifies opportunities worth 2-3x the cost of the study. On a $5 million project, this could translate to $400K-$900K in savings. The key is engaging experienced healthcare contractors early in the process.",
  },
  {
    question: "Does value engineering delay the project schedule?",
    answer:
      "Proper VE actually accelerates schedules by resolving cost issues before construction starts. A 2-3 week VE study during design can prevent months of redesign or value engineering during bidding. The key is building VE into the project timeline from the start and having preconstruction contractors involved to provide real-time cost feedback.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Medical Office Value Engineering", href: "/medical-office-value-engineering/" },
];


const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/services/commercial/medical-construction/", label: "Medical Facility Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function MedicalOfficeValueEngineeringPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Medical Office Value Engineering" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Medical Office Value Engineering"
        serviceDescription="Strategic value engineering services for medical office and healthcare facility construction. Reduce construction costs without compromising quality, compliance, or patient experience."
        city="Tampa"
        minPrice="250000"
      />
      <ArticleSchema
        headline="Medical Office Value Engineering | Healthcare Construction Tampa | FCS"
        description="Strategic value engineering for medical office construction in Tampa Bay. Reduce costs without compromising quality, compliance, or patient experience."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/medical-office-value-engineering/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Commercial", href: "/commercial/" },
          { name: "Medical Construction", href: "/commercial/medical-construction/" },
          { name: "Value Engineering", href: "/medical-office-value-engineering/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
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
              customHubTitle="Medical Construction"
              customHubHref="/commercial/medical-construction/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Medical Office Value Engineering
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Strategic cost optimization for healthcare facilities. Reduce construction
              costs 10-18% without compromising patient care, regulatory compliance, or
              building performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Request VE Consultation
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

      {/* Value Engineering Opportunities */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Value Engineering Opportunities by System
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Medical facilities offer significant VE opportunities across all building
            systems. Here&apos;s where experienced healthcare contractors find savings.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {veOpportunities.map((opp) => (
              <div key={opp.category} className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-brand-green-dark">
                    {opp.category}
                  </h3>
                  <span className="bg-brand-green-light text-brand-green-dark px-3 py-1 rounded-full text-sm font-semibold">
                    {opp.potentialSavings} Savings
                  </span>
                </div>
                <ul className="space-y-2">
                  {opp.strategies.map((strategy, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{strategy}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VE Process */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            The FCS Value Engineering Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Our structured VE approach identifies opportunities early when changes
            cost less and yield maximum benefit.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {veProcess.map((phase, index) => (
              <div key={phase.phase} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-md h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-green-dark">{phase.phase}</h3>
                      <span className="text-sm text-gray-500">{phase.timing}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Settings className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{activity}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 border-t">
                    <span className="text-xs text-gray-500">Deliverable:</span>
                    <p className="font-semibold text-brand-green-dark text-sm">
                      {phase.deliverable}
                    </p>
                  </div>
                </div>
                {index < veProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-brand-gold" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Value Engineering Case Studies
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Real results from FCS medical facility projects in Tampa Bay.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.project} className="card p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-4">
                  {study.project}
                </h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Original Budget</span>
                    <span className="font-semibold">{study.originalBudget}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">VE Reduction</span>
                    <span className="font-semibold text-brand-green">
                      {study.veReduction}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Percentage Saved</span>
                    <span className="font-bold text-brand-green">{study.percentSaved}</span>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Key Strategies:</strong> {study.keyStrategies}
                  </p>
                  <p className="text-sm text-brand-green-dark font-medium">
                    <Target className="w-4 h-4 inline mr-1" />
                    {study.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Value Engineering Mistakes to Avoid
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Not all cost reductions are equal. Here are VE pitfalls specific to
            medical construction.
          </p>
          <div className="space-y-6">
            {commonMistakes.map((item) => (
              <div
                key={item.mistake}
                className="bg-white rounded-xl p-6 shadow-md grid md:grid-cols-3 gap-6"
              >
                <div>
                  <h3 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                    <span className="text-red-500">&#10005;</span>
                    {item.mistake}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.impact}</p>
                </div>
                <div className="md:col-span-2 bg-brand-green-light/30 rounded-lg p-4">
                  <h4 className="font-semibold text-brand-green-dark mb-1 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green" />
                    Better Approach
                  </h4>
                  <p className="text-gray-700">{item.betterApproach}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-gray-50 rounded-lg px-6"
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
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Medical Construction Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/commercial/medical-construction/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Medical Construction Services
              </h3>
              <p className="text-gray-600 text-sm">
                Full-service healthcare facility construction in Tampa Bay.
              </p>
            </Link>
            <Link
              href="/navigating-ahca-inspections/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                AHCA Inspection Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Compliance requirements for licensed healthcare facilities.
              </p>
            </Link>
            <Link
              href="/commercial-construction/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Commercial Construction
              </h3>
              <p className="text-gray-600 text-sm">
                Large-scale commercial construction throughout Tampa Bay.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Maximize Your Medical Facility Investment
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact FCS for a preconstruction consultation. Our experienced healthcare
            construction team can identify VE opportunities specific to your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request VE Consultation
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