import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Landmark,
  CheckCircle,
  AlertTriangle,
  FileText,
  ArrowRight,
  Phone,
  HelpCircle,
  Clock,
  DollarSign,
  Shield,
  Building,
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
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Florida SHPO Requirements | Preservation | FCS",
  description:
    "Navigate Florida State Historic Preservation Office (SHPO) requirements for construction projects. Federal tax credits, Section 106 review, and preservation compliance.",
  keywords:
    "Florida SHPO requirements, State Historic Preservation Office Florida, Section 106 review Tampa, historic tax credit application, NHPA compliance Florida, historic building permits",
};

const reviewTypes = [
  {
    type: "Federal Historic Tax Credit Review",
    trigger: "Seeking 20% rehabilitation tax credit for income-producing properties",
    process: "Part 1, Part 2, Part 3 applications through SHPO to NPS",
    timeline: "30-45 days per part at SHPO; 30 days at NPS",
    fee: "NPS fee based on project cost; no SHPO fee",
  },
  {
    type: "Section 106 Review",
    trigger: "Federal funding, permits, or licenses involved",
    process: "SHPO consultation on effects to historic properties",
    timeline: "30 days for determination; longer if adverse effects",
    fee: "No SHPO fee; project may need cultural resource surveys",
  },
  {
    type: "State Tax Credit Review",
    trigger: "Seeking Florida historic tax credit",
    process: "Application through SHPO; similar to federal but state-specific",
    timeline: "30-60 days for review",
    fee: "Application fee varies by project cost",
  },
  {
    type: "State-Owned Property Review",
    trigger: "State agency undertaking affecting historic properties",
    process: "Consultation similar to Section 106",
    timeline: "30 days standard review",
    fee: "No fee for state agencies",
  },
  {
    type: "Survey & Inventory Updates",
    trigger: "Properties being evaluated for historic significance",
    process: "SHPO reviews survey forms; determines eligibility",
    timeline: "30-60 days depending on complexity",
    fee: "No SHPO fee; survey costs $500-5,000+",
  },
];

const taxCreditProcess = [
  {
    part: "Part 1 - Evaluation of Significance",
    purpose: "Confirm property is listed or eligible for National Register",
    required: [
      "Photos of all elevations and significant features",
      "Description of property history and significance",
      "National Register nomination or eligibility argument",
      "Location maps and site plans",
    ],
    tips: "Submit Part 1 early; can be filed before ownership",
    timeline: "30-45 days at SHPO; 30 days at NPS",
  },
  {
    part: "Part 2 - Description of Rehabilitation",
    purpose: "Approval of proposed work under Secretary of Interior Standards",
    required: [
      "Detailed description of all proposed work",
      "Drawings showing existing and proposed conditions",
      "Material specifications",
      "Photos of all areas to be affected",
    ],
    tips: "Get Part 2 approval BEFORE starting work; amendments OK but delay",
    timeline: "30-45 days at SHPO; 30 days at NPS",
  },
  {
    part: "Part 3 - Request for Certification",
    purpose: "Confirm completed work meets approved Part 2",
    required: [
      "Photos documenting completed work",
      "Description of any changes from Part 2",
      "Final cost certification",
      "Owner certification",
    ],
    tips: "Must file within 30 months of placed-in-service date",
    timeline: "30-45 days at SHPO; 30 days at NPS",
  },
];

const secretaryStandards = [
  {
    standard: "1. Use as Historic Purpose",
    summary: "Use property for historic purpose or compatible new use",
    common: "Most rehabilitations qualify; document historic use",
  },
  {
    standard: "2. Retain Historic Character",
    summary: "Preserve the historic character of a property",
    common: "Don't remove or alter distinctive features",
  },
  {
    standard: "3. Recognize Property as Record",
    summary: "Property is a physical record of its time",
    common: "Don't create false historic appearance",
  },
  {
    standard: "4. Recognize Significant Changes",
    summary: "Changes over time may be significant",
    common: "Later additions may have acquired significance",
  },
  {
    standard: "5. Preserve Distinctive Features",
    summary: "Preserve distinctive features and craftsmanship",
    common: "Keep original windows, trim, ornament",
  },
  {
    standard: "6. Repair Rather Than Replace",
    summary: "Repair historic features rather than replace",
    common: "Document why replacement is necessary",
  },
  {
    standard: "7. Gentle Cleaning Methods",
    summary: "Avoid treatments that damage historic materials",
    common: "No sandblasting; use gentlest method effective",
  },
  {
    standard: "8. Protect Archaeological Resources",
    summary: "Protect significant archaeological resources",
    common: "Survey before ground disturbance",
  },
  {
    standard: "9. Compatible New Additions",
    summary: "New additions shall not destroy historic materials",
    common: "New work should be differentiated but compatible",
  },
  {
    standard: "10. Reversible New Work",
    summary: "New work shall be reversible",
    common: "Don't make changes that can't be undone",
  },
];

const section106Process = [
  {
    step: "Initiation",
    description: "Federal agency identifies undertaking with potential effects",
    stakeholders: "Federal agency, applicant, SHPO",
    fcsRole: "Help applicant understand if project triggers Section 106",
  },
  {
    step: "Identification",
    description: "Identify historic properties in Area of Potential Effects",
    stakeholders: "Consultants, SHPO, Tribes",
    fcsRole: "Coordinate cultural resource surveys if needed",
  },
  {
    step: "Determination of Effects",
    description: "Assess whether undertaking will affect historic properties",
    stakeholders: "Federal agency, SHPO, consulting parties",
    fcsRole: "Provide project information; propose avoidance measures",
  },
  {
    step: "Resolution of Adverse Effects",
    description: "Negotiate measures to avoid, minimize, or mitigate effects",
    stakeholders: "All consulting parties; may include Advisory Council",
    fcsRole: "Implement agreed-upon mitigation measures",
  },
];

const commonMistakes = [
  {
    mistake: "Starting Work Before Approval",
    consequence: "Ineligible for tax credits; may need to undo work",
    prevention: "Get Part 2 approval before construction; document existing conditions",
  },
  {
    mistake: "Replacing Instead of Repairing",
    consequence: "Standards violation; denial of certification",
    prevention: "Document condition; get SHPO buy-in on replacement necessity",
  },
  {
    mistake: "Incompatible New Additions",
    consequence: "Standards violation; may need to modify or remove",
    prevention: "Differentiate new work; maintain proportions; use compatible materials",
  },
  {
    mistake: "Ignoring Section 106",
    consequence: "Federal permits/funding delayed or denied",
    prevention: "Identify federal involvement early; initiate consultation promptly",
  },
  {
    mistake: "Missing Deadlines",
    consequence: "Delays; may lose tax credit eligibility",
    prevention: "Track all deadlines; file Part 3 within 30 months of placed-in-service",
  },
];

const faqs = [
  {
    question: "When is SHPO review required for my project?",
    answer:
      "SHPO review is required in several situations: (1) When seeking federal historic tax credits for rehabilitation; (2) When federal funding, permits, or licenses are involved (Section 106 review); (3) When seeking Florida state historic tax credits; (4) When a state agency project affects historic properties. Local historic designation may also require SHPO consultation. If your building is listed on the National Register or is potentially eligible, and any federal involvement exists, expect SHPO review. Private projects with no federal nexus and not seeking tax credits typically don't require SHPO review, though local historic commission review may apply.",
  },
  {
    question: "How long does SHPO review take?",
    answer:
      "Standard SHPO review takes 30-45 days per application. For tax credit projects, each Part (1, 2, 3) gets separate review at SHPO, then goes to NPS for another 30 days. Total tax credit review: 4-6 months if applications are complete and no revisions needed. Section 106 review can be 30 days for simple projects or 6+ months for complex projects with adverse effects requiring negotiation. Incomplete applications, requests for additional information, and revisions extend timelines. We recommend building SHPO review time into project schedules from the start.",
  },
  {
    question: "What are the Secretary of the Interior's Standards?",
    answer:
      "The Secretary of the Interior's Standards for Rehabilitation are 10 principles that guide appropriate treatment of historic buildings. Key concepts include: retaining historic character, repairing rather than replacing historic features, ensuring new additions are compatible but differentiated, and making changes reversible. Tax credit projects must follow these standards. The standards don't prohibit change—they guide how change should be approached. SHPO reviews projects against these standards and provides guidance on compliance. Following the standards protects your tax credit eligibility and ensures good preservation outcomes.",
  },
  {
    question: "Can I get tax credits for commercial building rehabilitation?",
    answer:
      "Yes, the Federal Historic Tax Credit provides a 20% credit on qualified rehabilitation expenditures for income-producing properties listed on the National Register of Historic Places (or located in a registered historic district and certified as contributing). Florida also offers a state historic tax credit that can stack with the federal credit. Key requirements: the building must be used for income-producing purposes (not owner-occupied residential); rehabilitation must be 'substantial' (exceed the building's adjusted basis or $5,000); and work must follow the Secretary of the Interior's Standards. Credits can be syndicated to generate project equity.",
  },
  {
    question: "What triggers Section 106 review?",
    answer:
      "Section 106 of the National Historic Preservation Act requires federal agencies to consider effects on historic properties before undertaking projects. Triggers include: federal funding (grants, loans); federal permits or licenses (wetland permits, FCC licenses, FAA approvals); federal land or property involvement; and actions requiring federal agency approval. Common triggers in Tampa Bay include Army Corps permits for waterfront work, HUD funding for housing, and FEMA funding for disaster recovery. The federal agency leads the process; SHPO is a consulting party. Early identification of federal nexus is critical for project scheduling.",
  },
  {
    question: "How do we handle SHPO review for a tight construction schedule?",
    answer:
      "Several strategies help manage SHPO review within project schedules: (1) File Part 1 before closing or during due diligence; (2) Develop Part 2 during design, file immediately when ready; (3) Pre-submission meetings with SHPO to identify potential issues; (4) Complete, high-quality applications minimize revision cycles; (5) Parallel-path design to prepare for SHPO comments; (6) Consider conditional Part 2 approval for early work packages. For Section 106, early agency engagement and streamlined consultation agreements can help. We've successfully managed projects with aggressive schedules by front-loading SHPO coordination.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Florida Shpo Requirements", href: "/florida-shpo-requirements/" },
];


const internalLinks = [
  { href: "/services/historic-restoration/", label: "Historic Restoration Services" },
  { href: "/services/historic-restoration/shpo-compliance/", label: "SHPO Compliance" },
  { href: "/services/historic-restoration/historic-tax-credits/", label: "Historic Tax Credits" },
  { href: "/services/historic-restoration/material-sourcing/", label: "Historic Material Sourcing" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const relatedArticles = [
  {
    "title": "Tampa Historic Restoration Permits and Regulations",
    "href": "/tampa-historic-restoration-permits-and-regulations/",
    "description": "Navigate Tampa's historic restoration permit process including COA requirements and SHPO review."
  },
  {
    "title": "Preserving Tampa's Cultural Heritage",
    "href": "/preserving-tampas-cultural-heritage-through-restoration/",
    "description": "How thoughtful restoration projects maintain Tampa Bay's architectural legacy."
  },
  {
    "title": "Architectural Styles in Tampa's Historic Restoration",
    "href": "/architectural-styles-in-tampas-historic-restoration/",
    "description": "Understanding the diverse architectural heritage of Tampa's historic districts."
  },
  {
    "title": "Historic Tax Credits for Commercial Buildings",
    "href": "/historic-tax-credits-commercial-buildings/",
    "description": "Maximize ROI with federal and state historic preservation tax incentives."
  }
];

export default function FloridaSHPORequirementsPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Historic Preservation Compliance" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Historic Preservation Construction Services"
        serviceDescription="Expert navigation of Florida SHPO requirements for historic building projects. Federal and state tax credit applications, Section 106 compliance, and Secretary of Interior Standards."
        city="Tampa"
        minPrice="100000"
      />

      
      <ArticleSchema
        headline="Florida SHPO Requirements | Historic Preservation Compliance | FCS"
        description="Navigate Florida State Historic Preservation Office (SHPO) requirements for construction projects. Federal tax credits, Section 106 review, and preservation compliance."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/florida-shpo-requirements/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Commercial", href: "/commercial/" },
          { name: "Historic Restoration", href: "/commercial/historic-restoration/" },
          { name: "Florida SHPO Requirements", href: "/florida-shpo-requirements/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/historic-preservation/historic-preservation-display.webp"
            alt="Historic building restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <BackToHub
              silo="commercial"
              customHubTitle="Historic Restoration"
              customHubHref="/commercial/historic-restoration/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Navigating Florida SHPO Requirements
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Understanding State Historic Preservation Office requirements for
              tax credits, Section 106 review, and historic building projects in Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Discuss Your Historic Project
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

      {/* Review Types */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Types of SHPO Review
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Different project types trigger different SHPO review processes.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="px-4 py-3 text-left font-semibold">Review Type</th>
                  <th className="px-4 py-3 text-left font-semibold">Triggered By</th>
                  <th className="px-4 py-3 text-center font-semibold">Timeline</th>
                  <th className="px-4 py-3 text-left font-semibold">Fee</th>
                </tr>
              </thead>
              <tbody>
                {reviewTypes.map((review, index) => (
                  <tr
                    key={review.type}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3">
                      <span className="font-semibold text-brand-green-dark">{review.type}</span>
                      <p className="text-xs text-gray-500 mt-1">{review.process}</p>
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{review.trigger}</td>
                    <td className="px-4 py-3 text-center text-sm">{review.timeline}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{review.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tax Credit Process */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Historic Tax Credit Application Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            The three-part application process for federal historic tax credits.
          </p>
          <div className="space-y-6 max-w-3xl mx-auto">
            {taxCreditProcess.map((part, index) => (
              <div
                key={part.part}
                className="bg-white rounded-xl p-6 shadow-md border-l-4 border-brand-green"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-brand-green-dark">
                        {part.part}
                      </h3>
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {part.timeline}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{part.purpose}</p>
                    <div className="bg-brand-green-light/30 rounded-lg p-4 mb-3">
                      <span className="text-xs text-brand-green-dark font-semibold block mb-2">Required Documentation</span>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {part.required.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm text-brand-gold-dark">
                      <strong>Tip:</strong> {part.tips}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secretary Standards */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Secretary of the Interior&apos;s Standards
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            The 10 standards that govern historic rehabilitation for tax credit eligibility.
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {secretaryStandards.map((standard) => (
              <div key={standard.standard} className="card p-4">
                <h3 className="font-bold text-brand-green-dark text-sm mb-1">
                  {standard.standard}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{standard.summary}</p>
                <p className="text-xs text-gray-500">
                  <strong>Common Issue:</strong> {standard.common}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Common Mistakes to Avoid
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Pitfalls that can jeopardize your tax credits or project approval.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {commonMistakes.map((item) => (
              <div key={item.mistake} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                  <h3 className="font-bold text-brand-green-dark">{item.mistake}</h3>
                </div>
                <p className="text-red-600 text-sm mb-3">
                  <strong>Consequence:</strong> {item.consequence}
                </p>
                <p className="text-green-700 text-sm bg-green-50 rounded-lg p-3">
                  <strong>Prevention:</strong> {item.prevention}
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
            Related Historic Restoration Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/historic-tax-credits-commercial-buildings/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Historic Tax Credits Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Maximizing federal and state tax credits for rehabilitation.
              </p>
            </Link>
            <Link
              href="/adaptive-reuse-historic-civic-buildings/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Adaptive Reuse Projects
              </h3>
              <p className="text-gray-600 text-sm">
                Converting historic civic buildings to new uses.
              </p>
            </Link>
            <Link
              href="/commercial/historic-restoration/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Historic Restoration Services
              </h3>
              <p className="text-gray-600 text-sm">
                Full range of commercial historic restoration.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Need Help with SHPO Requirements?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            FCS has experience guiding projects through SHPO review and tax credit
            certification. We coordinate with preservation consultants and agencies
            to keep your project on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Discuss Your Project
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
      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      
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