import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ClipboardCheck,
  CheckCircle,
  AlertTriangle,
  Building,
  ArrowRight,
  Phone,
  HelpCircle,
  Clock,
  Search,
  FileText,
  Shield,
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
  title: "Milestone Inspection Requirements | Florida Condo SB 4-D | FCS",
  description:
    "Complete guide to milestone structural inspections for Florida condominiums under SB 4-D. Phase 1, Phase 2 requirements, timelines, and what to expect.",
  keywords:
    "milestone inspection Florida, SB 4-D inspection requirements, condo structural inspection Tampa, Phase 1 Phase 2 inspection, Florida condo safety",
};

const inspectionPhases = [
  {
    phase: "Phase 1 - Visual Inspection",
    scope: "Non-invasive visual examination of structural components",
    inspector: "Licensed engineer or architect",
    duration: "1-3 days on-site (varies by building size)",
    deliverable: "Phase 1 report with findings and Phase 2 recommendation",
    cost: "$3,000 - $15,000 typical",
    findings: [
      "Visual evidence of deterioration",
      "Signs of water intrusion",
      "Cracking patterns in concrete",
      "Corrosion staining",
      "Settlement or movement indicators",
      "Life safety system deficiencies",
    ],
  },
  {
    phase: "Phase 2 - Invasive Inspection",
    scope: "Destructive testing where Phase 1 identified concerns",
    inspector: "Licensed engineer (often structural specialty)",
    duration: "1-4 weeks depending on scope",
    deliverable: "Phase 2 report with repair recommendations and cost estimates",
    cost: "$10,000 - $100,000+ depending on scope",
    findings: [
      "Concrete core samples and testing",
      "Rebar condition assessment",
      "Post-tension cable evaluation",
      "Waterproofing membrane testing",
      "Structural load capacity analysis",
      "Detailed repair specifications",
    ],
  },
];

const timeline = [
  {
    buildingAge: "30 years (25 if within 3 miles of coast)",
    requirement: "Initial milestone inspection required",
    deadline: "December 31, 2024 (buildings meeting criteria as of July 1, 2022)",
    notes: "Buildings approaching 30 years should plan 12-18 months ahead",
  },
  {
    buildingAge: "Every 10 years after initial",
    requirement: "Subsequent milestone inspections",
    deadline: "Within 10 years of previous inspection",
    notes: "Board should calendar recurring inspections",
  },
  {
    buildingAge: "Phase 2 (if required)",
    requirement: "Must begin within 180 days of Phase 1",
    deadline: "180 days from Phase 1 report delivery",
    notes: "Extensions available in limited circumstances",
  },
  {
    buildingAge: "Repairs (if required)",
    requirement: "Must begin within 365 days of Phase 2",
    deadline: "365 days from Phase 2 report delivery",
    notes: "Repair timeline must be included in SIRS funding",
  },
];

const commonFindings = [
  {
    finding: "Balcony/Walkway Deterioration",
    frequency: "Very Common",
    description: "Concrete spalling, rebar corrosion, waterproofing failure on balconies and exterior walkways",
    typicalRepair: "Concrete restoration, rebar treatment, waterproofing membrane replacement",
    costRange: "$500 - $3,000 per balcony",
  },
  {
    finding: "Parking Garage Deterioration",
    frequency: "Very Common",
    description: "Concrete deck deterioration, expansion joint failure, coating/membrane failure",
    typicalRepair: "Deck coating, joint replacement, concrete repairs, possibly structural strengthening",
    costRange: "$15 - $50 per SF of deck area",
  },
  {
    finding: "Post-Tension Cable Concerns",
    frequency: "Common (in PT buildings)",
    description: "Grease cap deterioration, cable corrosion at anchorages, stressed tendon issues",
    typicalRepair: "Anchorage protection, cable replacement in severe cases, monitoring program",
    costRange: "$2,000 - $15,000 per cable if replacement needed",
  },
  {
    finding: "Exterior Wall/Facade Issues",
    frequency: "Common",
    description: "Stucco cracking, window frame deterioration, sealant failure, water intrusion paths",
    typicalRepair: "Stucco repair, window replacement/resealing, building envelope waterproofing",
    costRange: "$10 - $40 per SF of affected area",
  },
  {
    finding: "Foundation/Settlement",
    frequency: "Less Common",
    description: "Differential settlement, foundation cracking, pile cap deterioration",
    typicalRepair: "Underpinning, foundation strengthening, crack injection",
    costRange: "Highly variable - $50,000 to $500,000+",
  },
  {
    finding: "Fire/Life Safety Deficiencies",
    frequency: "Common",
    description: "Sprinkler system issues, fire door problems, egress deficiencies",
    typicalRepair: "System upgrades, door replacement, corridor modifications",
    costRange: "$25,000 - $250,000 building-wide",
  },
];

const associationResponsibilities = [
  {
    task: "Select Qualified Inspector",
    timing: "12-18 months before deadline",
    details: "Must be Florida-licensed engineer or architect with structural experience",
    tips: "Check references, verify insurance, review similar building experience",
  },
  {
    task: "Provide Building Access",
    timing: "During inspection",
    details: "Access to all common areas, roof, mechanical rooms, representative units",
    tips: "Coordinate with residents for unit access; provide building plans if available",
  },
  {
    task: "Review Phase 1 Report",
    timing: "Within 30 days of receipt",
    details: "Understand findings, Phase 2 requirements, and preliminary cost implications",
    tips: "Have attorney review for liability implications; consider owner communication strategy",
  },
  {
    task: "Commission Phase 2 (if needed)",
    timing: "Within 180 days of Phase 1",
    details: "Engage qualified engineer for invasive testing based on Phase 1 findings",
    tips: "Phase 2 scope should match Phase 1 concerns; avoid over-scoping",
  },
  {
    task: "Develop Repair Plan",
    timing: "Within 365 days of Phase 2",
    details: "Prioritize repairs, establish timeline, update SIRS funding",
    tips: "Get construction estimates; phase repairs if budget constrained",
  },
  {
    task: "File with Local Authority",
    timing: "Within 45 days of report receipt",
    details: "Submit inspection reports to local building official",
    tips: "Keep proof of filing; some jurisdictions have online portals",
  },
];

const faqs = [
  {
    question: "Which buildings require milestone inspections in Florida?",
    answer:
      "Milestone inspections are required for condominium and cooperative buildings that are 3 or more stories tall and at least 30 years old (or 25 years if located within 3 miles of the coastline). This applies to residential condominiums and mixed-use buildings with residential units. Single-family attached residences (townhomes with separate structures) and buildings 2 stories or less are generally exempt.",
  },
  {
    question: "What is the difference between Phase 1 and Phase 2 inspections?",
    answer:
      "Phase 1 is a visual, non-invasive inspection that identifies areas of concern. The inspector examines all structural components without damaging the building. If Phase 1 reveals 'substantial structural deterioration,' Phase 2 is required. Phase 2 involves invasive testing—removing finishes, taking concrete cores, exposing rebar—to determine the full extent of problems and develop repair specifications.",
  },
  {
    question: "Who can perform milestone inspections?",
    answer:
      "Milestone inspections must be performed by a Florida-licensed professional engineer or architect. While any licensed engineer can technically perform the inspection, associations should select professionals with specific experience in structural assessment of multi-family buildings. Look for engineers with experience in concrete restoration, post-tension systems, and building envelope evaluation.",
  },
  {
    question: "What happens if our building fails the milestone inspection?",
    answer:
      "There is no pass/fail—the inspection identifies conditions and recommends repairs. If Phase 2 is required, the association must begin it within 180 days. If repairs are needed, they must begin within 365 days of the Phase 2 report. The association must fund repairs through SIRS reserves. If conditions are immediately dangerous, the engineer may require emergency stabilization or evacuation.",
  },
  {
    question: "How much do milestone inspections cost?",
    answer:
      "Phase 1 inspections typically cost $3,000-$15,000 depending on building size and complexity. Phase 2 costs vary widely based on scope—from $10,000 for limited testing to $100,000+ for extensive investigation of large buildings. These costs are separate from repair costs, which can range from minimal to millions depending on findings.",
  },
  {
    question: "Can we delay our milestone inspection?",
    answer:
      "The statutory deadlines are firm, and failure to comply exposes board members to personal liability. Limited extensions may be available from the local building official for extenuating circumstances, but these are not guaranteed. Starting early is essential—inspections take time to schedule, and Phase 2 and repairs have their own timelines.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Milestone Inspection Requirements", href: "/milestone-inspection-requirements/" },
];


const internalLinks = [
  { href: "/services/", label: "Our Construction Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/residential/", label: "Residential Construction" },
  { href: "/about/", label: "About Florida Construction Specialists" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function MilestoneInspectionRequirementsPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Milestone Inspection Repairs" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Condo Milestone Inspection Repairs"
        serviceDescription="Expert construction services for repairs identified in Florida milestone inspections. From balcony restoration to structural concrete repair, we help condo associations address SB 4-D compliance."
        city="Tampa"
        minPrice="100000"
      />

      
      <ArticleSchema
        headline="Milestone Inspection Requirements | Florida Condo SB 4-D | FCS"
        description="Complete guide to milestone structural inspections for Florida condominiums under SB 4-D. Phase 1, Phase 2 requirements, timelines, and what to expect."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/milestone-inspection-requirements/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Commercial", href: "/commercial/" },
          { name: "Condo Remediation", href: "/commercial/condo-remediation/" },
          { name: "Milestone Inspections", href: "/milestone-inspection-requirements/" },
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
              Milestone Inspection Requirements Explained
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Understanding Florida&apos;s mandatory structural inspections for
              condominium buildings. Phase 1, Phase 2, timelines, and what associations
              need to know.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Get Repair Estimates
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
              <strong>Important:</strong> Initial milestone inspection deadlines have passed
              for most qualifying buildings. Non-compliant associations face significant
              legal exposure.
            </p>
          </div>
        </div>
      </section>

      {/* Inspection Phases */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Understanding Phase 1 & Phase 2 Inspections
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Milestone inspections follow a two-phase approach: visual assessment
            first, then invasive testing if concerns are identified.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {inspectionPhases.map((phase) => (
              <div key={phase.phase} className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Search className="w-8 h-8 text-brand-green" />
                  <h3 className="text-xl font-bold text-brand-green-dark">
                    {phase.phase}
                  </h3>
                </div>
                <div className="space-y-3 mb-4 text-sm">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Scope</span>
                    <span className="text-right max-w-[200px]">{phase.scope}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Performed By</span>
                    <span>{phase.inspector}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Duration</span>
                    <span>{phase.duration}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Deliverable</span>
                    <span className="text-right max-w-[200px]">{phase.deliverable}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Typical Cost</span>
                    <span className="font-semibold">{phase.cost}</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <span className="text-xs text-gray-500 font-semibold block mb-2">
                    What Inspectors Look For:
                  </span>
                  <ul className="space-y-1">
                    {phase.findings.map((finding, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Milestone Inspection Timeline
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Key deadlines and requirements for Florida condo associations.
          </p>
          <div className="space-y-6 max-w-3xl mx-auto">
            {timeline.map((item) => (
              <div
                key={item.buildingAge}
                className="bg-white rounded-xl p-6 shadow-md border-l-4 border-brand-green"
              >
                <div className="flex items-start gap-4">
                  <Clock className="w-8 h-8 text-brand-green flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-brand-green-dark mb-1">
                      {item.buildingAge}
                    </h3>
                    <p className="text-gray-700 mb-2">{item.requirement}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="bg-brand-green-light/50 text-brand-green-dark px-3 py-1 rounded">
                        Deadline: {item.deadline}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{item.notes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Findings */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Common Milestone Inspection Findings
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            What inspectors typically find in Tampa Bay condominium buildings and
            estimated repair costs.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonFindings.map((item) => (
              <div key={item.finding} className="card p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-brand-green-dark">{item.finding}</h3>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                    {item.frequency}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="space-y-2 text-sm border-t pt-3">
                  <div>
                    <span className="text-gray-500">Typical Repair:</span>
                    <p className="text-gray-700">{item.typicalRepair}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Cost Range:</span>
                    <p className="font-semibold text-brand-green-dark">{item.costRange}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Association Responsibilities */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Association Board Responsibilities
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Step-by-step guide for condo association boards navigating milestone
            inspection requirements.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {associationResponsibilities.map((item, index) => (
              <div key={item.task} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-brand-green-dark">{item.task}</h3>
                </div>
                <div className="text-sm space-y-2">
                  <div className="flex justify-between text-gray-500">
                    <span>Timing:</span>
                    <span className="text-brand-green-dark font-medium">{item.timing}</span>
                  </div>
                  <p className="text-gray-600">{item.details}</p>
                  <div className="bg-brand-green-light/30 rounded p-2 mt-3">
                    <span className="text-xs text-brand-green-dark font-semibold">Tip: </span>
                    <span className="text-xs text-gray-600">{item.tips}</span>
                  </div>
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
              href="/sirs-structural-integrity-reserve-studies/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                SIRS Reserve Studies
              </h3>
              <p className="text-gray-600 text-sm">
                Funding requirements for milestone inspection repairs.
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Need Repairs After Your Milestone Inspection?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            FCS specializes in the construction repairs commonly identified in
            milestone inspections—balcony restoration, concrete repair, waterproofing,
            and structural work. Contact us for repair cost estimates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request Repair Estimate
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