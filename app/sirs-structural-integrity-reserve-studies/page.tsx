import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Calculator,
  CheckCircle,
  AlertTriangle,
  FileText,
  Building,
  ArrowRight,
  Phone,
  HelpCircle,
  Clock,
  DollarSign,
  Scale,
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
  title: "SIRS Structural Integrity Reserve Studies | Florida Condo Compliance | FCS",
  description:
    "Complete guide to SIRS (Structural Integrity Reserve Studies) for Florida condominiums. Understand SB 4-D reserve requirements and funding obligations.",
  keywords:
    "SIRS Florida, structural integrity reserve study, SB 4-D reserves, condo reserve requirements Florida, milestone inspection reserves Tampa",
};

const sirsComponents = [
  {
    component: "Roof",
    description: "All roof systems including materials, flashing, drainage",
    typicalLife: "15-25 years",
    fundingNote: "Must fund for full replacement; cannot waive",
  },
  {
    component: "Load-Bearing Walls & Primary Structural",
    description: "Columns, beams, load-bearing walls, foundations",
    typicalLife: "50+ years",
    fundingNote: "Repairs based on milestone inspection findings",
  },
  {
    component: "Floor",
    description: "Structural floor systems, post-tensioned concrete",
    typicalLife: "50+ years",
    fundingNote: "Include waterproofing of occupied floors below",
  },
  {
    component: "Foundation",
    description: "All foundation elements including piles",
    typicalLife: "50+ years",
    fundingNote: "Coastal buildings: factor in seawall coordination",
  },
  {
    component: "Fireproofing & Fire Protection",
    description: "Sprinklers, fire alarm, passive fire protection",
    typicalLife: "20-30 years",
    fundingNote: "Sprinkler heads have 20-year replacement requirement",
  },
  {
    component: "Plumbing",
    description: "All plumbing systems serving common elements",
    typicalLife: "25-40 years",
    fundingNote: "Cast iron: 25 years; PVC/CPVC: 40+ years",
  },
  {
    component: "Electrical",
    description: "Main service, distribution, emergency generator",
    typicalLife: "30-40 years",
    fundingNote: "Generator replacement often overlooked",
  },
  {
    component: "Waterproofing & Exterior Painting",
    description: "Building envelope, coatings, sealants",
    typicalLife: "7-15 years",
    fundingNote: "Florida climate accelerates deterioration",
  },
  {
    component: "Windows",
    description: "All windows in common elements and unit boundaries",
    typicalLife: "20-30 years",
    fundingNote: "Impact windows may extend life; check warranty",
  },
  {
    component: "Other Items > $10,000",
    description: "Any other component exceeding threshold with 15+ year life",
    typicalLife: "Varies",
    fundingNote: "Elevators, HVAC, parking garage membranes common",
  },
];

const timeline = [
  {
    date: "December 31, 2024",
    requirement: "SIRS must be completed for buildings 3+ stories, 30+ years old",
    penalty: "Board members face personal liability; inability to close sales",
    action: "Commission SIRS from licensed engineer or architect",
  },
  {
    date: "December 31, 2025",
    requirement: "Initial funding per SIRS recommendations must begin",
    penalty: "Association cannot waive or reduce reserves for SIRS items",
    action: "Implement funding schedule from SIRS",
  },
  {
    date: "Every 10 Years",
    requirement: "SIRS must be updated",
    penalty: "Same as initial; plus may affect property insurance",
    action: "Schedule recurring SIRS updates",
  },
];

const fundingOptions = [
  {
    method: "Full Funding (Recommended)",
    description: "Reserve balance equals accumulated depreciation of all components",
    pros: "No special assessments needed; best for resale value; lender-friendly",
    cons: "Higher monthly assessments; may require significant increases",
    typical: "10-15% of annual budget for well-maintained buildings",
  },
  {
    method: "Threshold Funding",
    description: "Maintain minimum balance to cover near-term replacements",
    pros: "Lower ongoing monthly cost; more cash for operations",
    cons: "May require special assessments; riskier for unexpected repairs",
    typical: "5-8% of annual budget; requires careful cash flow planning",
  },
  {
    method: "Statutory Funding",
    description: "SB 4-D minimum requirements for structural items only",
    pros: "Meets legal minimum; lowest possible assessment increase",
    cons: "High risk of special assessments; difficulty selling units; no waiver allowed",
    typical: "Varies significantly by building age and condition",
  },
];

const commonIssues = [
  {
    issue: "Deferred Maintenance Backlog",
    impact: "SIRS reveals millions in unfunded repairs",
    solution: "Prioritize repairs by safety risk; phase over 3-5 years with special assessment",
    fcsRole: "Construction cost estimates; phased repair planning",
  },
  {
    issue: "Insufficient Reserves",
    impact: "Can't fund required SIRS components",
    solution: "Increase assessments; consider loan; phase funding over time",
    fcsRole: "Value engineering to reduce repair costs",
  },
  {
    issue: "Unit Owner Resistance",
    impact: "Owners oppose assessment increases",
    solution: "Education on liability; transparent communication; payment plans",
    fcsRole: "Present construction scope clearly; show cost of inaction",
  },
  {
    issue: "Conflicting Estimates",
    impact: "SIRS costs don't match contractor bids",
    solution: "Get detailed construction estimates during SIRS process",
    fcsRole: "Provide construction cost validation during SIRS",
  },
];

const faqs = [
  {
    question: "What is a Structural Integrity Reserve Study (SIRS)?",
    answer:
      "A SIRS is a specialized reserve study required by Florida law (SB 4-D) that specifically addresses structural and life-safety components of condominium buildings. Unlike traditional reserve studies that cover all common elements, SIRS focuses on 10 specific categories including roof, load-bearing walls, floors, foundation, fire protection, plumbing, electrical, waterproofing, windows, and any other items over $10,000. A licensed engineer or architect must prepare the study.",
  },
  {
    question: "Which Florida condos need a SIRS?",
    answer:
      "SIRS is required for condominium buildings that are 3 or more stories tall and at least 30 years old (or 25 years if within 3 miles of the coast). The deadline for initial SIRS completion was December 31, 2024. Buildings approaching these thresholds should begin planning 12-18 months in advance. Single-family attached residences (townhomes) and 2-story buildings are generally exempt.",
  },
  {
    question: "Can our condo association waive SIRS reserve requirements?",
    answer:
      "No. SB 4-D specifically prohibits waiving or reducing reserves for the structural components covered by SIRS. Previously, Florida law allowed associations to waive reserves with majority owner vote—this is no longer permitted for SIRS items. Full funding of SIRS-identified reserves is mandatory. However, non-structural reserve items (landscaping, pools, etc.) may still be subject to waiver votes.",
  },
  {
    question: "How much does a SIRS cost?",
    answer:
      "SIRS costs typically range from $5,000-$25,000 depending on building size and complexity. Larger buildings, those with complex systems, or those requiring extensive investigation (destructive testing, drone surveys) will be at the higher end. The cost is modest compared to the potential liability and construction costs if issues are discovered. Most associations include SIRS costs in operating budget rather than reserves.",
  },
  {
    question: "How does SIRS relate to milestone inspections?",
    answer:
      "SIRS and milestone inspections are companion requirements under SB 4-D. Milestone inspections are structural safety inspections required at 30 years (25 for coastal buildings) and every 10 years thereafter. SIRS is the financial reserve study that must fund repairs identified by milestone inspections. Both must be performed by licensed professionals, but they serve different purposes: inspections assess condition; SIRS funds repairs.",
  },
  {
    question: "What happens if our SIRS shows we're underfunded?",
    answer:
      "If SIRS reveals insufficient reserves, the association must increase funding to meet requirements. Options include: (1) raising regular assessments to meet the SIRS funding schedule, (2) implementing a special assessment to address immediate shortfalls, or (3) obtaining a loan to spread costs over time. The board cannot ignore the funding gap—SB 4-D imposes personal liability on board members who fail to comply.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Sirs Structural Integrity Reserve Studies", href: "/sirs-structural-integrity-reserve-studies/" },
];


const internalLinks = [
  { href: "/services/", label: "Our Construction Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/residential/", label: "Residential Construction" },
  { href: "/about/", label: "About Florida Construction Specialists" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function SIRSStructuralIntegrityReserveStudiesPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="SIRS Structural Integrity Reserve Studies" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="SIRS Condo Construction Services"
        serviceDescription="Construction services supporting SIRS compliance for Florida condominiums. Expert repair cost estimation, construction planning, and remediation work for condo associations."
        city="Tampa"
        minPrice="100000"
      />
      <ArticleSchema
        headline="SIRS Structural Integrity Reserve Studies | Florida Condo Compliance | FCS"
        description="Complete guide to SIRS (Structural Integrity Reserve Studies) for Florida condominiums. Understand SB 4-D reserve requirements and funding obligations."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/sirs-structural-integrity-reserve-studies/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Commercial", href: "/commercial/" },
          { name: "Condo Remediation", href: "/commercial/condo-remediation/" },
          { name: "SIRS Reserve Studies", href: "/sirs-structural-integrity-reserve-studies/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
            alt="Balcony reconstruction and waterproofing"
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
              customHubTitle="Condo Remediation"
              customHubHref="/commercial/condo-remediation/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              SIRS: Structural Integrity Reserve Studies
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Understanding Florida&apos;s mandatory reserve requirements for condominium
              buildings. What SB 4-D means for your association&apos;s financial planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Get Construction Estimates for SIRS
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

      {/* Alert Banner */}
      <section className="py-4 bg-yellow-50 border-y border-yellow-200">
        <div className="container-custom">
          <div className="flex items-center gap-3 text-yellow-800">
            <AlertTriangle className="w-6 h-6 flex-shrink-0" />
            <p className="font-medium">
              <strong>Important:</strong> Initial SIRS deadlines have passed. Buildings that
              haven&apos;t completed SIRS may face legal consequences. Contact your association
              attorney if your building is not yet compliant.
            </p>
          </div>
        </div>
      </section>

      {/* Required Components */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            10 Required SIRS Components
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            SB 4-D mandates that SIRS address these specific building components.
            Reserves for these items cannot be waived.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="px-4 py-3 text-left font-semibold">Component</th>
                  <th className="px-4 py-3 text-left font-semibold">Description</th>
                  <th className="px-4 py-3 text-center font-semibold">Typical Life</th>
                  <th className="px-4 py-3 text-left font-semibold">Funding Notes</th>
                </tr>
              </thead>
              <tbody>
                {sirsComponents.map((comp, index) => (
                  <tr
                    key={comp.component}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-semibold text-brand-green-dark">
                      {comp.component}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{comp.description}</td>
                    <td className="px-4 py-3 text-center">{comp.typicalLife}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{comp.fundingNote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            SIRS Compliance Timeline
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Key dates and requirements for Florida condominium associations.
          </p>
          <div className="space-y-6 max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div
                key={item.date}
                className="bg-white rounded-xl p-6 shadow-md border-l-4 border-brand-green"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Clock className="w-8 h-8 text-brand-green" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">
                      {item.date}
                    </h3>
                    <p className="text-gray-700 mb-3">{item.requirement}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-red-50 rounded-lg p-3">
                        <span className="text-xs text-red-600 font-semibold">Non-Compliance Risk</span>
                        <p className="text-red-700 text-sm">{item.penalty}</p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3">
                        <span className="text-xs text-green-600 font-semibold">Required Action</span>
                        <p className="text-green-700 text-sm">{item.action}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Options */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Reserve Funding Strategies
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            While SIRS funding cannot be waived, associations have options for how
            to structure their funding approach.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {fundingOptions.map((option) => (
              <div key={option.method} className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-8 h-8 text-brand-green" />
                  <h3 className="text-xl font-bold text-brand-green-dark">
                    {option.method}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="space-y-3">
                  <div>
                    <span className="text-xs text-green-600 font-semibold block">Advantages</span>
                    <p className="text-gray-700 text-sm">{option.pros}</p>
                  </div>
                  <div>
                    <span className="text-xs text-red-600 font-semibold block">Considerations</span>
                    <p className="text-gray-700 text-sm">{option.cons}</p>
                  </div>
                  <div className="pt-3 border-t">
                    <span className="text-xs text-gray-500 block">Typical Contribution</span>
                    <p className="font-semibold text-brand-green-dark">{option.typical}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Common SIRS Implementation Challenges
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Issues we help condo associations navigate after SIRS reveals problems.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {commonIssues.map((item) => (
              <div key={item.issue} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-brand-green-dark mb-2">
                  {item.issue}
                </h3>
                <p className="text-red-600 text-sm mb-4">
                  <strong>Impact:</strong> {item.impact}
                </p>
                <div className="bg-brand-green-light/30 rounded-lg p-4 mb-3">
                  <span className="text-xs text-brand-green-dark font-semibold block mb-1">
                    Solution
                  </span>
                  <p className="text-gray-700">{item.solution}</p>
                </div>
                <p className="text-sm text-gray-600">
                  <strong>How FCS Helps:</strong> {item.fcsRole}
                </p>
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
            Related Condo Compliance Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/florida-sb4d-compliance-guide/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                SB 4-D Compliance Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Complete overview of Florida&apos;s condo safety legislation.
              </p>
            </Link>
            <Link
              href="/commercial/condo-remediation/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Condo Remediation Services
              </h3>
              <p className="text-gray-600 text-sm">
                Expert construction for milestone inspection repairs.
              </p>
            </Link>
            <Link
              href="/balcony-reconstruction/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Balcony Reconstruction
              </h3>
              <p className="text-gray-600 text-sm">
                Common repair identified in milestone inspections.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Need Construction Estimates for Your SIRS?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            FCS provides accurate construction cost estimates to support your SIRS
            process. We work with engineers and associations to ensure reserve
            planning reflects actual construction costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request Cost Estimate
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