import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  AlertTriangle,
  Building,
  Phone,
  HelpCircle,
  Eye,
  Hammer,
  Shield,
  FileText,
  Clock,
  AlertCircle,
  Ruler,
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
  title: "Condo Balcony Inspection Florida | SB 4-D | FCS",
  description:
    "Complete guide to Florida condo balcony inspection requirements under SB 4-D and milestone inspections. Understand inspection scope, repair timelines, and compliance obligations.",
  keywords:
    "condo balcony inspection Florida, SB 4-D balcony requirements, milestone inspection balcony, Florida condo balcony repair, balcony structural inspection Tampa",
};

const inspectionTriggers = [
  {
    trigger: "Milestone Inspection (Phase 1)",
    description: "Visual examination of balconies as part of building-wide structural assessment",
    deadline: "30 years (25 for coastal buildings)",
    frequency: "Every 10 years thereafter",
    scope: "All load-bearing elements, waterproofing, railings, connections",
  },
  {
    trigger: "Milestone Inspection (Phase 2)",
    description: "Destructive testing if Phase 1 reveals substantial structural deterioration",
    deadline: "180 days after Phase 1 findings",
    frequency: "As required by Phase 1",
    scope: "Concrete cores, rebar probing, moisture testing, load testing",
  },
  {
    trigger: "Florida Statutes 553.899",
    description: "Specific requirement for exterior elevated elements (balconies, walkways)",
    deadline: "Must be addressed as part of milestone inspection",
    frequency: "Ongoing per SIRS funding",
    scope: "Waterproofing, structural connections, drainage systems",
  },
  {
    trigger: "Insurance Requirements",
    description: "Many carriers now require balcony inspections for policy renewal",
    deadline: "Varies by carrier",
    frequency: "Typically every 3-5 years",
    scope: "Visual inspection, sometimes moisture scanning",
  },
];

const commonDeficiencies = [
  {
    deficiency: "Waterproofing Failure",
    severity: "High",
    description: "Cracked or deteriorated deck coating allowing water infiltration",
    signs: "Staining on ceiling below, efflorescence, visible cracks in coating",
    repair: "Full waterproofing membrane replacement; address trapped moisture",
    urgency: "Immediate - prevents further structural damage",
  },
  {
    deficiency: "Rebar Corrosion",
    severity: "Critical",
    description: "Reinforcing steel rusting due to chloride intrusion or carbonation",
    signs: "Rust stains, concrete spalling, exposed rebar, delamination",
    repair: "Concrete removal, rebar treatment/replacement, patch repair",
    urgency: "Critical - structural capacity reduced",
  },
  {
    deficiency: "Railing Connection Failure",
    severity: "Life Safety",
    description: "Corroded or loose railing posts embedded in concrete",
    signs: "Wobbly railings, rust at base, cracked concrete around posts",
    repair: "Railing removal, post repair/replacement, reattachment with proper anchors",
    urgency: "Immediate - fall hazard",
  },
  {
    deficiency: "Concrete Delamination",
    severity: "High",
    description: "Separation of concrete layers due to corrosion expansion",
    signs: "Hollow sound when tapped, visible separation, concrete flaking",
    repair: "Remove delaminated concrete, treat rebar, structural patch or overlay",
    urgency: "Near-term - deterioration accelerates",
  },
  {
    deficiency: "Improper Slope/Drainage",
    severity: "Medium",
    description: "Water ponding instead of draining away from building",
    signs: "Standing water, algae growth, water marks against walls",
    repair: "Re-slope with overlay system or drainage channels",
    urgency: "Planned - prevents future damage",
  },
  {
    deficiency: "Structural Cracking",
    severity: "Varies",
    description: "Cracks in balcony slab indicating settlement or overload",
    signs: "Linear cracks, corner cracks, cracks with displacement",
    repair: "Epoxy injection, carbon fiber reinforcement, or replacement",
    urgency: "Requires engineering assessment",
  },
];

const inspectionProcess = [
  {
    step: 1,
    phase: "Document Review",
    description: "Review original construction drawings, previous inspection reports, repair history",
    deliverable: "Understanding of original design and known issues",
    timeline: "1-2 weeks",
  },
  {
    step: 2,
    phase: "Visual Inspection",
    description: "Systematic examination of all balcony surfaces, railings, connections, underside",
    deliverable: "Photographic documentation, deficiency mapping",
    timeline: "2-5 days depending on building size",
  },
  {
    step: 3,
    phase: "Non-Destructive Testing",
    description: "Hammer sounding, moisture meters, cover meters, possibly ground-penetrating radar",
    deliverable: "Delamination mapping, moisture content data",
    timeline: "Concurrent with visual inspection",
  },
  {
    step: 4,
    phase: "Destructive Testing (if needed)",
    description: "Concrete cores, chloride testing, carbonation testing, rebar exposure",
    deliverable: "Laboratory analysis, remaining service life estimate",
    timeline: "2-4 weeks including lab results",
  },
  {
    step: 5,
    phase: "Engineering Report",
    description: "Analysis of findings, prioritized repair recommendations, cost estimates",
    deliverable: "Detailed report suitable for board, SIRS planning, contractors",
    timeline: "2-4 weeks after testing complete",
  },
  {
    step: 6,
    phase: "Repair Planning",
    description: "Develop repair scope, bid documents, contractor selection",
    deliverable: "Construction documents, bid packages, schedules",
    timeline: "4-8 weeks",
  },
];

const repairOptions = [
  {
    option: "Patch Repairs",
    description: "Address isolated deficiencies without full reconstruction",
    applicability: "Less than 20-30% of surface area affected; sound substrate",
    pros: "Lower initial cost; faster completion; less resident disruption",
    cons: "May not address systemic issues; shorter warranty; aesthetic inconsistency",
    costRange: "$15-40/SF for affected areas",
  },
  {
    option: "Waterproofing Overlay",
    description: "Remove existing coating, repair substrate, apply new system",
    applicability: "Structural concrete sound; waterproofing system failed",
    pros: "Addresses waterproofing comprehensively; 10-20 year warranty possible",
    cons: "Slight elevation increase; requires good weather; 3-5 days per balcony",
    costRange: "$40-80/SF for entire balcony",
  },
  {
    option: "Structural Repairs + Overlay",
    description: "Concrete repairs, rebar treatment, then full waterproofing system",
    applicability: "Moderate structural damage with localized concrete deterioration",
    pros: "Comprehensive solution; addresses root cause; long-term performance",
    cons: "Higher cost; longer duration; may require temporary balcony restrictions",
    costRange: "$80-150/SF depending on damage extent",
  },
  {
    option: "Full Balcony Reconstruction",
    description: "Remove and replace entire balcony slab and railings",
    applicability: "Extensive structural damage; original design deficiencies; 50%+ affected",
    pros: "New construction quality; opportunity for improvements; longest life",
    cons: "Highest cost; longest duration; major disruption; may require unit access",
    costRange: "$200-400/SF or more",
  },
];

const timeline = [
  {
    event: "Inspection Findings Received",
    action: "Board review; share with legal counsel; notify unit owners",
    deadline: "Within 30 days of report",
  },
  {
    event: "Immediate Safety Issues",
    action: "Restrict access; temporary barriers; emergency repairs if needed",
    deadline: "Immediately upon identification",
  },
  {
    event: "SIRS Update",
    action: "Incorporate repair costs into reserve study; adjust funding",
    deadline: "Next SIRS cycle or amendment",
  },
  {
    event: "Repair Scope Development",
    action: "Engage engineer for repair documents; define scope",
    deadline: "Within 90 days",
  },
  {
    event: "Contractor Selection",
    action: "Competitive bidding; contract negotiation; board approval",
    deadline: "Within 180 days",
  },
  {
    event: "Construction Commencement",
    action: "Mobilization; resident notification; work begins",
    deadline: "Per SB 4-D timelines for structural repairs",
  },
];

const faqs = [
  {
    question: "Are condo balconies covered by SB 4-D milestone inspections?",
    answer:
      "Yes. Florida SB 4-D specifically includes 'primary structural members and load-bearing walls that support or provide access to any portion of the structure designed for occupancy.' This encompasses balconies, exterior corridors, and any elevated walkways. The milestone inspection engineer must assess all such elements. Additionally, waterproofing and painting of balconies are now non-waivable SIRS reserve items under SB 4-D.",
  },
  {
    question: "Who is responsible for condo balcony repairs - the association or unit owner?",
    answer:
      "This depends on your condo documents. Most Florida declarations make the association responsible for structural elements (the concrete slab) while unit owners are responsible for surface finishes. However, waterproofing is often a gray area. The association typically maintains the waterproof membrane since failure affects the unit below (a common element). Review your declaration and consult with your association attorney to clarify responsibilities before major repairs.",
  },
  {
    question: "How much do condo balcony repairs cost in Tampa Bay?",
    answer:
      "Condo balcony repair costs in Tampa Bay vary significantly based on damage extent. Minor waterproofing repairs run $15-40 per square foot for affected areas. Full waterproofing overlay systems cost $40-80/SF for the entire balcony. When structural repairs (concrete, rebar) are needed, costs increase to $80-150/SF. Full reconstruction of severely damaged balconies can exceed $200-400/SF. A typical 60 SF balcony might range from $3,000-$25,000 depending on repair scope.",
  },
  {
    question: "Can residents use balconies during inspection and repair?",
    answer:
      "During inspection, balconies typically remain accessible unless the inspector identifies immediate safety concerns. Once repairs begin, balconies are usually restricted for the duration of work on that unit (typically 3-10 days per balcony for overlay systems). If structural issues are found that compromise safety, the engineer may recommend restricting access until repairs are complete. Weight limits may be imposed on damaged balconies awaiting repair.",
  },
  {
    question: "What waterproofing systems are best for Florida condo balconies?",
    answer:
      "For Florida's climate, the most durable balcony waterproofing systems are traffic-bearing membrane systems (hot-applied rubberized asphalt or cold-applied urethane membranes) with tile or textured coating wear surfaces. These systems handle UV exposure, thermal cycling, and Florida's heavy rains. Avoid thin elastomeric coatings for primary waterproofing - they're better as secondary protection over a proper membrane. FCS works with multiple waterproofing manufacturers to match the right system to each building's needs.",
  },
  {
    question: "How long do condo balcony repairs take for an entire building?",
    answer:
      "For a typical Tampa Bay condo building (50-100 units with balconies), a full balcony restoration project takes 6-12 months from inspection to completion. This includes: engineering assessment (4-8 weeks), repair document development (4-6 weeks), bidding and contract (4-8 weeks), and construction (12-24 weeks depending on crew size and weather). Work typically progresses at 2-4 balconies per day for overlay systems, fewer when structural repairs are needed.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Condo Balcony Inspection Requirements", href: "/condo-balcony-inspection-requirements/" },
];


const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/balcony-reconstruction/", label: "Balcony Reconstruction" },
  { href: "/services/residential/balcony-reconstruction/", label: "SB4-D Compliance" },
  { href: "/services/residential/exterior-waterproofing/", label: "Exterior Waterproofing" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function CondoBalconyInspectionRequirementsPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Condo Balcony Inspection and Repair" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Condo Balcony Reconstruction Services"
        serviceDescription="Expert condo balcony inspection support, waterproofing, and structural repair services for Tampa Bay condominium associations. SB 4-D compliant restoration."
        city="Tampa"
        minPrice="50000"
      />

      
      <ArticleSchema
        headline="Condo Balcony Inspection Requirements Florida | SB 4-D Compliance | FCS"
        description="Complete guide to Florida condo balcony inspection requirements under SB 4-D and milestone inspections. Understand inspection scope, repair timelines, and compliance obligations."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/condo-balcony-inspection-requirements/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Commercial", href: "/commercial/" },
          { name: "Condo Remediation", href: "/commercial/condo-remediation/" },
          { name: "Balcony Inspection Requirements", href: "/condo-balcony-inspection-requirements/" },
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
              Condo Balcony Inspection Requirements
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Understanding Florida&apos;s balcony inspection requirements under SB 4-D.
              What condo associations need to know about inspections, repairs, and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Get Balcony Repair Estimate
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
              <strong>Post-Surfside Requirements:</strong> Balcony inspections are now a
              mandatory component of Florida milestone inspections. Structural deficiencies
              must be addressed per SB 4-D timelines.
            </p>
          </div>
        </div>
      </section>

      {/* Inspection Triggers */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            When Balcony Inspections Are Required
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Multiple factors can trigger balcony inspection requirements for
            Florida condominiums.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {inspectionTriggers.map((item) => (
              <div key={item.trigger} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-2">
                  {item.trigger}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500 block">Deadline</span>
                    <span className="font-semibold text-brand-green-dark">{item.deadline}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Frequency</span>
                    <span className="font-semibold text-brand-green-dark">{item.frequency}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <span className="text-gray-500 text-sm block">Scope</span>
                  <span className="text-gray-700">{item.scope}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Deficiencies */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Common Balcony Deficiencies
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            These are the most frequent issues found during Tampa Bay condo balcony
            inspections. Early detection significantly reduces repair costs.
          </p>
          <div className="space-y-6">
            {commonDeficiencies.map((item) => (
              <div
                key={item.deficiency}
                className={`bg-white rounded-xl p-6 shadow-md border-l-4 ${
                  item.severity === "Critical" || item.severity === "Life Safety"
                    ? "border-red-500"
                    : item.severity === "High"
                      ? "border-orange-500"
                      : "border-yellow-500"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark">
                      {item.deficiency}
                    </h3>
                    <span
                      className={`text-sm font-semibold ${
                        item.severity === "Critical" || item.severity === "Life Safety"
                          ? "text-red-600"
                          : item.severity === "High"
                            ? "text-orange-600"
                            : "text-yellow-600"
                      }`}
                    >
                      {item.severity} Severity
                    </span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      item.severity === "Critical" || item.severity === "Life Safety"
                        ? "bg-red-100 text-red-700"
                        : item.severity === "High"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.urgency}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <span className="text-xs text-gray-500 font-semibold block mb-1">
                      Warning Signs
                    </span>
                    <p className="text-gray-700 text-sm">{item.signs}</p>
                  </div>
                  <div className="bg-brand-green-light/20 rounded-lg p-4">
                    <span className="text-xs text-brand-green-dark font-semibold block mb-1">
                      Repair Approach
                    </span>
                    <p className="text-gray-700 text-sm">{item.repair}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Process */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Balcony Inspection Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            A typical balcony inspection and repair planning process follows these steps.
          </p>
          <div className="max-w-4xl mx-auto">
            {inspectionProcess.map((item, index) => (
              <div key={item.step} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center text-white font-bold text-lg">
                    {item.step}
                  </div>
                  {index < inspectionProcess.length - 1 && (
                    <div className="w-0.5 h-full bg-brand-green-light mx-auto mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold text-brand-green-dark mb-2">
                    {item.phase}
                  </h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="bg-gray-100 rounded-lg px-3 py-2">
                      <span className="text-gray-500">Deliverable: </span>
                      <span className="font-medium">{item.deliverable}</span>
                    </div>
                    <div className="bg-brand-green-light/30 rounded-lg px-3 py-2">
                      <Clock className="w-4 h-4 inline mr-1" />
                      <span className="font-medium">{item.timeline}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Options */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Balcony Repair Options
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Repair approaches vary based on damage extent and building conditions.
            FCS helps associations select the most cost-effective solution.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {repairOptions.map((option) => (
              <div key={option.option} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-brand-green-dark mb-2">
                  {option.option}
                </h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <span className="text-xs text-blue-600 font-semibold">Best For</span>
                  <p className="text-blue-700 text-sm">{option.applicability}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <span className="text-xs text-green-600 font-semibold block">Advantages</span>
                    <p className="text-gray-700 text-sm">{option.pros}</p>
                  </div>
                  <div>
                    <span className="text-xs text-red-600 font-semibold block">Considerations</span>
                    <p className="text-gray-700 text-sm">{option.cons}</p>
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <span className="text-xs text-gray-500">Typical Cost Range</span>
                  <p className="font-bold text-brand-green-dark">{option.costRange}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Post-Inspection Timeline
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Key milestones after receiving balcony inspection findings.
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-brand-green text-white">
                    <th className="px-4 py-3 text-left font-semibold">Event</th>
                    <th className="px-4 py-3 text-left font-semibold">Required Action</th>
                    <th className="px-4 py-3 text-center font-semibold">Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {timeline.map((item, index) => (
                    <tr
                      key={item.event}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="px-4 py-3 font-semibold text-brand-green-dark">
                        {item.event}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{item.action}</td>
                      <td className="px-4 py-3 text-center text-sm font-medium">
                        {item.deadline}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
            Related Condo Compliance Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/balcony-reconstruction/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Balcony Reconstruction Services
              </h3>
              <p className="text-gray-600 text-sm">
                Full-scope balcony restoration and waterproofing.
              </p>
            </Link>
            <Link
              href="/milestone-inspection-requirements/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Milestone Inspection Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Complete overview of Florida&apos;s milestone inspection requirements.
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
                Funding requirements for balcony repairs under SB 4-D.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Need Balcony Repairs for Your Condo Building?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists has restored balconies for condo associations
            throughout Tampa Bay. From waterproofing overlays to full reconstruction,
            we deliver quality repairs that meet SB 4-D requirements.
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