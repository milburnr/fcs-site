import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  CheckCircle,
  AlertTriangle,
  FileText,
  Calendar,
  ArrowRight,
  Phone,
  HelpCircle,
  Clock,
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
  title: "Florida SB4-D Compliance Guide | Condo Milestone Inspections & SIRS | FCS",
  description:
    "Complete guide to Florida SB4-D compliance for condo associations. Milestone inspections, SIRS requirements, deadlines, and remediation planning for Tampa Bay.",
  keywords:
    "SB4-D compliance Florida, condo milestone inspection, SIRS structural assessment, Florida condo safety law, condominium structural inspection Tampa",
};

const complianceDeadlines = [
  {
    requirement: "Phase 1 Milestone Inspection (Coastal 30+ years)",
    deadline: "December 31, 2024",
    status: "critical",
    description: "Buildings within 3 miles of coast, 3+ stories, 30+ years old",
  },
  {
    requirement: "Phase 1 Milestone Inspection (Inland 30+ years)",
    deadline: "December 31, 2025",
    status: "upcoming",
    description: "Buildings more than 3 miles from coast, 3+ stories, 30+ years old",
  },
  {
    requirement: "SIRS (Structural Integrity Reserve Study)",
    deadline: "December 31, 2024",
    status: "critical",
    description: "All condos with 3+ stories must complete initial SIRS",
  },
  {
    requirement: "Reserve Funding Must Begin",
    deadline: "January 1, 2025",
    status: "critical",
    description: "No more waiving reserves for structural components",
  },
  {
    requirement: "Buildings 25-30 Years Old",
    deadline: "When building turns 30",
    status: "planning",
    description: "Must complete milestone inspection by 30th anniversary",
  },
];

const sirsComponents = [
  {
    category: "Structural Elements",
    items: ["Roof", "Load-bearing walls", "Foundation", "Floor structures", "Columns", "Beams"],
  },
  {
    category: "Building Envelope",
    items: ["Fireproofing", "Plumbing", "Electrical systems", "Waterproofing", "Exterior painting", "Windows"],
  },
  {
    category: "Common Areas",
    items: ["Balconies", "Walkways", "Parking structures", "Elevators", "Pool/recreational facilities"],
  },
];

const inspectionPhases = [
  {
    phase: "Phase 1",
    title: "Visual Inspection",
    description: "Licensed engineer or architect conducts visual examination of structural components",
    deliverable: "Written report identifying signs of substantial structural deterioration",
    timeline: "Typically 2-4 weeks",
    outcome: "If no issues found, building passes. If issues found, Phase 2 required.",
  },
  {
    phase: "Phase 2",
    title: "In-Depth Assessment",
    description: "Comprehensive inspection including testing if structural concerns identified in Phase 1",
    deliverable: "Detailed report with specific findings, recommendations, and remediation timeline",
    timeline: "180 days from Phase 1 completion",
    outcome: "Must complete recommended repairs within specified timeframe",
  },
];

const faqs = [
  {
    question: "What buildings are subject to SB4-D milestone inspections?",
    answer:
      "Any residential condominium or cooperative building that is 3 or more stories and 30 years old or older (25 years if within 3 miles of the coast). This applies regardless of whether the building is insured or participates in the National Flood Insurance Program.",
  },
  {
    question: "What is a SIRS and why is it required?",
    answer:
      "A Structural Integrity Reserve Study (SIRS) is a comprehensive assessment of a building's structural components and their remaining useful life. It determines how much money should be set aside in reserves to fund necessary repairs. Under SB4-D, condo associations can no longer waive or reduce funding for structural reserves.",
  },
  {
    question: "Who can perform milestone inspections?",
    answer:
      "Milestone inspections must be performed by a licensed Florida architect or engineer with experience in structural engineering. The inspector must carry appropriate insurance and provide certification of findings to both the association and local building official.",
  },
  {
    question: "What happens if we miss the compliance deadline?",
    answer:
      "Failure to complete required inspections by the deadline can result in penalties from local building officials, potential legal liability for board members, inability to sell units (as inspections are now part of disclosure requirements), and possible insurance issues.",
  },
  {
    question: "How much does SB4-D compliance typically cost?",
    answer:
      "Phase 1 inspections typically range from $5,000-$20,000 depending on building size. Phase 2, if required, can cost $15,000-$50,000+. SIRS studies range from $10,000-$30,000. Remediation costs vary dramatically based on findings—from minor repairs to millions for major structural work.",
  },
  {
    question: "Can we phase remediation work to manage costs?",
    answer:
      "Yes, but within limits. The Phase 2 inspection report will specify remediation timelines based on safety priority. Critical safety issues must be addressed immediately, while other repairs may be phased over several years. Your engineer will establish appropriate timelines.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Florida Sb4d Compliance Guide", href: "/florida-sb4d-compliance-guide/" },
];


const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/balcony-reconstruction/", label: "Balcony Reconstruction" },
  { href: "/services/residential/balcony-reconstruction/", label: "SB4-D Compliance" },
  { href: "/services/residential/exterior-waterproofing/", label: "Exterior Waterproofing" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function SB4DCompliancePage() {
  const breadcrumbItems = [
    { name: "Commercial Services", href: "/commercial/" },
    { name: "Condo Remediation", href: "/commercial/condo-remediation/" },
    { name: "SB4-D Compliance Guide", href: "/florida-sb4d-compliance-guide/" },
  ];

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <LocalBusinessSchema
        schemaType="GeneralContractor"
        service="SB4-D Compliance & Condo Remediation"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Florida SB4-D Condo Compliance"
        serviceDescription="Complete SB4-D compliance services including milestone inspections, SIRS assessments, and structural remediation for Tampa Bay condominiums"
        minPrice="5000"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      
      <ArticleSchema
        headline="Florida SB4-D Compliance Guide | Condo Milestone Inspections & SIRS | FCS"
        description="Complete guide to Florida SB4-D compliance for condo associations. Milestone inspections, SIRS requirements, deadlines, and remediation planning for Tampa Bay."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/florida-sb4d-compliance-guide/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb items={breadcrumbItems} />

      <div className="container-custom py-8">
        <BackToHub silo="commercial" />
      </div>

      {/* Alert Banner */}
      <section className="py-4 bg-red-600">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-3 text-white">
            <AlertTriangle className="w-6 h-6" />
            <span className="font-bold">
              SB4-D Deadlines Are Here — Many Buildings Must Comply by December 31, 2024
            </span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-10 h-10 text-brand-gold" />
              <span className="bg-brand-green/30 text-white px-3 py-1 rounded-full text-sm font-bold">
                CONDO COMPLIANCE GUIDE
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              Florida SB4-D Compliance Guide: What Every Condo Association Must Know
            </h1>
            <p className="text-xl text-white/90 mb-8">
              The Florida Building Safety Act (SB4-D) mandates milestone
              inspections and structural reserve studies for condominiums.
              Non-compliance exposes boards to liability. This guide explains
              every requirement Tampa Bay associations must meet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-white font-bold rounded-full hover:bg-brand-gold-dark transition-all"
              >
                Request Compliance Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is SB4-D */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-6">
              What is Florida SB4-D?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Senate Bill 4-D (SB4-D)</strong>, also known as the
                Florida Building Safety Act, was passed in May 2022 in response
                to the Champlain Towers South collapse in Surfside. It
                establishes mandatory structural inspection and reserve funding
                requirements for condominium and cooperative buildings.
              </p>
              <div className="bg-brand-green-bg border-l-4 border-brand-green p-6 rounded-r-lg mb-6">
                <h3 className="font-bold text-brand-green-dark mb-2">
                  Key Requirements:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <span>
                      <strong>Milestone Inspections:</strong> Structural
                      inspections for buildings 30+ years old (25+ within 3
                      miles of coast)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <span>
                      <strong>SIRS Requirements:</strong> Structural Integrity
                      Reserve Studies to plan and fund repairs
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <span>
                      <strong>No Reserve Waivers:</strong> Associations can no
                      longer vote to waive structural reserves
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <span>
                      <strong>Disclosure Requirements:</strong> Inspection
                      reports must be disclosed during unit sales
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Deadlines */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-8 text-center">
            SB4-D Compliance Deadlines
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {complianceDeadlines.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-sm border-l-4 ${
                  item.status === "critical"
                    ? "border-red-500"
                    : item.status === "upcoming"
                    ? "border-yellow-500"
                    : "border-blue-500"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-5 h-5 text-gray-400" />
                      <h3 className="font-bold text-brand-green-dark">
                        {item.requirement}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <div
                    className={`px-4 py-2 rounded-full font-bold text-sm whitespace-nowrap ${
                      item.status === "critical"
                        ? "bg-red-100 text-red-800"
                        : item.status === "upcoming"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {item.deadline}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone Inspection Process */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-8 text-center">
            Milestone Inspection Process
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {inspectionPhases.map((phase, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-green text-white font-bold">
                    {phase.phase.split(" ")[1]}
                  </span>
                  <div>
                    <span className="text-sm text-brand-gold font-bold">
                      {phase.phase}
                    </span>
                    <h3 className="font-bold text-brand-green-dark">
                      {phase.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{phase.description}</p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Deliverable:</strong> {phase.deliverable}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Timeline:</strong> {phase.timeline}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Outcome:</strong> {phase.outcome}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIRS Components */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-6 text-center">
              SIRS: What&apos;s Included in the Reserve Study?
            </h2>
            <p className="text-gray-600 text-center mb-8">
              The Structural Integrity Reserve Study must assess the following
              building components and determine funding requirements for their
              maintenance and replacement:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {sirsComponents.map((category, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-brand-green-dark mb-4">
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-brand-green" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How FCS Helps */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-6">
                How FCS Helps with SB4-D Compliance
              </h2>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists partners with condo
                associations throughout Tampa Bay to navigate SB4-D compliance
                and complete required remediation work.
              </p>
              <div className="space-y-4">
                {[
                  "Coordination with licensed structural engineers for inspections",
                  "Review and interpretation of inspection reports",
                  "Remediation planning and budgeting",
                  "Prioritized repair scheduling to minimize resident disruption",
                  "Quality construction of all structural repairs",
                  "Documentation for association records and insurance",
                  "Ongoing maintenance planning post-remediation",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-green-bg rounded-xl p-8">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Request a Compliance Assessment
              </h3>
              <p className="text-gray-600 mb-6">
                Don&apos;t wait for deadlines to approach. Contact FCS for a
                comprehensive SB4-D compliance assessment for your condominium
                association.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact/"
                  className="block w-full py-3 bg-brand-green text-white font-bold rounded-lg text-center hover:bg-brand-green-dark transition-colors"
                >
                  Schedule Assessment
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="block w-full py-3 bg-white text-brand-green-dark font-bold rounded-lg text-center hover:bg-gray-100 transition-colors"
                >
                  Call {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <HelpCircle className="w-8 h-8 text-brand-green" />
              <h2 className="text-3xl font-bold text-brand-green-dark font-heading">
                Frequently Asked Questions
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-white rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left font-bold text-brand-green-dark hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-8 text-center">
            Related Commercial Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/commercial/condo-remediation/"
              className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <Building2 className="w-8 h-8 text-brand-green mb-3" />
              <h3 className="font-bold text-brand-green-dark mb-2">
                Condo Remediation Services
              </h3>
              <p className="text-sm text-gray-600">
                Full remediation services for condominium associations
              </p>
            </Link>
            <Link
              href="/commercial/cpm-scheduling/"
              className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <Calendar className="w-8 h-8 text-brand-green mb-3" />
              <h3 className="font-bold text-brand-green-dark mb-2">
                CPM Scheduling
              </h3>
              <p className="text-sm text-gray-600">
                Critical path scheduling for complex projects
              </p>
            </Link>
            <Link
              href="/commercial/"
              className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <FileText className="w-8 h-8 text-brand-green mb-3" />
              <h3 className="font-bold text-brand-green-dark mb-2">
                All Commercial Services
              </h3>
              <p className="text-sm text-gray-600">
                Explore our full range of commercial construction services
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-heading">
            SB4-D Compliance Deadlines Are Here
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don&apos;t risk non-compliance. FCS helps Tampa Bay condo
            associations meet SB4-D requirements and complete necessary
            structural repairs.
          </p>
          <Link href="/contact/" className="btn-cta">
            Schedule Compliance Consultation
          </Link>
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