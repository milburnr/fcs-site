import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  AlertTriangle,
  Home,
  Phone,
  HelpCircle,
  Waves,
  Shield,
  Ruler,
  Clock,
  FileText,
  MapPin,
  Building2,
  Anchor,
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
  title: "Seawall Coordination for New Construction | Tampa Bay Waterfront | FCS",
  description:
    "Coordinating seawall work with new waterfront home construction in Tampa Bay. Timing, permits, setbacks, and contractor coordination for successful waterfront projects.",
  keywords:
    "seawall coordination Tampa, waterfront construction seawall, new home seawall timing, Tampa Bay seawall permits, waterfront lot development",
};

const coordinationTimeline = [
  {
    phase: "Pre-Purchase Due Diligence",
    timing: "Before closing on lot",
    activities: "Seawall inspection, condition assessment, remaining life estimate, replacement cost",
    critical: "Understanding seawall condition affects purchase price and construction budget",
    deliverables: "Seawall condition report, cost estimates, timeline considerations",
  },
  {
    phase: "Site Planning and Design",
    timing: "3-6 months before construction",
    activities: "Survey showing seawall, setback determination, foundation design coordination",
    critical: "Foundation design must account for seawall proximity and soil conditions",
    deliverables: "Site plan with setbacks, foundation design, utility routing",
  },
  {
    phase: "Permit Applications",
    timing: "2-4 months before construction",
    activities: "Building permit, seawall permit (if replacing), ERP if applicable, local permits",
    critical: "Seawall permits from SWFWMD can take 30-90 days; plan ahead",
    deliverables: "Approved permits for home and seawall work",
  },
  {
    phase: "Seawall Work (if replacing)",
    timing: "Before or concurrent with foundation",
    activities: "Demolition, sheet pile driving, cap pour, backfill, tie-back installation",
    critical: "Heavy equipment access may be limited once home construction begins",
    deliverables: "Completed seawall, as-built survey, compaction testing",
  },
  {
    phase: "Foundation Construction",
    timing: "After seawall stabilization",
    activities: "Foundation layout, pile driving (if required), grade beam/slab work",
    critical: "Foundation setback from seawall must be maintained; verify before pour",
    deliverables: "Completed foundation with required setbacks verified",
  },
  {
    phase: "Construction and Closeout",
    timing: "Concurrent with home construction",
    activities: "Drainage coordination, landscape grading, final inspections",
    critical: "Surface drainage must not undermine seawall; positive drainage away from wall",
    deliverables: "Certificate of occupancy, completed landscaping, maintenance guidance",
  },
];

const seawallTypes = [
  {
    type: "Vinyl Sheet Pile",
    description: "Interlocking vinyl sheets driven into soil",
    lifespan: "50+ years",
    cost: "$300-500 per linear foot installed",
    pros: "Corrosion resistant, no maintenance, long life, clean appearance",
    cons: "Higher initial cost, requires professional installation",
    bestFor: "New construction, long-term ownership, salt or brackish water",
  },
  {
    type: "Steel Sheet Pile",
    description: "Interlocking steel sheets, often with protective coating",
    lifespan: "30-50 years with proper coating",
    cost: "$250-450 per linear foot installed",
    pros: "High strength, good for difficult soils, lower material cost",
    cons: "Corrosion in salt water, requires maintenance/coating renewal",
    bestFor: "Heavy load requirements, difficult driving conditions",
  },
  {
    type: "Concrete Panel",
    description: "Precast concrete panels with steel H-pile supports",
    lifespan: "30-50 years",
    cost: "$350-550 per linear foot installed",
    pros: "Very strong, good appearance, can match existing walls",
    cons: "Heavy equipment needed, longer installation, joints can leak",
    bestFor: "Areas with existing concrete walls, heavy vessel impact expected",
  },
  {
    type: "Rip-Rap/Living Shoreline",
    description: "Natural stone with optional vegetation",
    lifespan: "25-75 years depending on design",
    cost: "$150-400 per linear foot",
    pros: "Natural appearance, habitat benefits, may qualify for incentives",
    cons: "Requires more space, less defined edge, permit complexity",
    bestFor: "Low-energy shorelines, environmental priority, large lots",
  },
];

const setbackRequirements = [
  {
    jurisdiction: "Hillsborough County",
    setback: "10 feet from seawall to principal structure",
    notes: "Measured from waterward face of seawall cap to building foundation",
    exceptions: "Variance possible with engineering justification",
  },
  {
    jurisdiction: "Pinellas County",
    setback: "Varies by municipality - typically 10-15 feet",
    notes: "Check specific city requirements; some areas have overlay districts",
    exceptions: "Historic lots may have reduced requirements",
  },
  {
    jurisdiction: "City of Tampa",
    setback: "10 feet minimum; 15 feet preferred",
    notes: "Additional restrictions in waterfront overlay zones",
    exceptions: "Administrative adjustment possible for constrained lots",
  },
  {
    jurisdiction: "SWFWMD/ERP",
    setback: "Case-by-case basis",
    notes: "Environmental Resource Permit may impose additional setbacks",
    exceptions: "Depends on project scope and environmental sensitivity",
  },
];

const permitRequirements = [
  {
    permit: "Local Building Permit",
    agency: "City or County Building Department",
    timeline: "2-6 weeks",
    requirements: "Site plan, seawall engineering, structural drawings",
    notes: "Required for new seawall construction or major repairs",
  },
  {
    permit: "Environmental Resource Permit (ERP)",
    agency: "SWFWMD or FDEP",
    timeline: "30-90 days",
    requirements: "Engineering plans, environmental assessment, mitigation if required",
    notes: "Required for work below MHW; exempt for maintenance in-kind",
  },
  {
    permit: "USACE Section 10/404",
    agency: "US Army Corps of Engineers",
    timeline: "60-120 days (or covered by State Programmatic GP)",
    requirements: "Federal review for work in navigable waters",
    notes: "Often covered by Florida State Programmatic General Permit",
  },
  {
    permit: "Submerged Land Lease",
    agency: "FDEP (if state-owned submerged lands)",
    timeline: "Varies",
    requirements: "Survey showing mean high water line",
    notes: "Required if seawall extends beyond private property limits",
  },
];

const commonChallenges = [
  {
    challenge: "Failing Existing Seawall",
    description: "Lot purchase with deteriorated seawall requiring immediate replacement",
    solution: "Include seawall replacement in purchase negotiations; budget accordingly; time permits early",
    fcsRole: "Coordinate seawall replacement with home construction schedule",
  },
  {
    challenge: "Neighbor Seawall Coordination",
    description: "Adjacent seawalls must tie together; neighbors may not be ready to replace",
    solution: "Design independent connection or coordinate timing with neighbors",
    fcsRole: "Engineering solutions for seawall transitions; neighbor communication",
  },
  {
    challenge: "Foundation Setback Constraints",
    description: "Small lot with seawall setback limiting home footprint",
    solution: "Optimize home design; consider variance; verify exact setback with surveyor",
    fcsRole: "Work with architect to maximize buildable area within constraints",
  },
  {
    challenge: "Soil Conditions",
    description: "Poor soil behind seawall affecting both wall and home foundation",
    solution: "Geotechnical investigation; coordinate foundation type with seawall design",
    fcsRole: "Integrated approach to site engineering; pile foundation coordination",
  },
  {
    challenge: "Permit Timing",
    description: "Seawall permits delayed while home permit approved",
    solution: "Submit seawall permits early; consider phased approach",
    fcsRole: "Manage permit timeline; adjust construction sequencing as needed",
  },
  {
    challenge: "Drainage and Backfill",
    description: "Construction activity disturbs backfill behind seawall",
    solution: "Proper compaction; drainage design; avoid heavy equipment near wall",
    fcsRole: "Construction management to protect seawall during home construction",
  },
];

const costFactors = [
  {
    factor: "Seawall Length",
    impact: "Primary cost driver - longer walls cost proportionally more",
    typical: "Tampa Bay waterfront lots typically 60-150 linear feet",
    budgetTip: "Get actual survey measurement; don't estimate from lot dimensions",
  },
  {
    factor: "Seawall Height",
    impact: "Taller walls require more material and engineering",
    typical: "4-6 feet typical; flood zones may require higher",
    budgetTip: "Check FEMA requirements before finalizing design",
  },
  {
    factor: "Soil Conditions",
    impact: "Poor soils require longer piles, tie-backs, or soil improvement",
    typical: "Tampa Bay has variable soils; investigation essential",
    budgetTip: "Get geotechnical report before finalizing budget",
  },
  {
    factor: "Access",
    impact: "Difficult access increases equipment and labor costs",
    typical: "Water access often required for pile driving equipment",
    budgetTip: "Consider access during construction sequencing",
  },
  {
    factor: "Demolition",
    impact: "Removing existing seawall adds significant cost",
    typical: "$50-150 per linear foot for demolition/removal",
    budgetTip: "Evaluate whether repair is viable before assuming replacement",
  },
  {
    factor: "Permits and Engineering",
    impact: "Engineering, surveys, and permits add soft costs",
    typical: "$5,000-15,000 depending on complexity",
    budgetTip: "Include these costs in overall project budget",
  },
];

const faqs = [
  {
    question: "Should I replace the seawall before or after building my home?",
    answer:
      "For new construction on a waterfront lot, seawall replacement is typically best done before or concurrently with foundation work. This allows: (1) heavy equipment access that may be blocked later, (2) proper coordination of backfill and compaction with foundation prep, (3) verification of setback compliance before foundation pour, and (4) a complete, warranted seawall before the valuable home is at risk. If the existing seawall has remaining life (10+ years), you may defer replacement, but factor eventual replacement into your long-term budget.",
  },
  {
    question: "How close can I build to my seawall in Tampa Bay?",
    answer:
      "Most Tampa Bay jurisdictions require a 10-15 foot setback from the waterward face of the seawall to the building foundation. Hillsborough County typically requires 10 feet; specific municipalities may have stricter requirements. The setback protects both the seawall (from foundation loads) and the home (from seawall failure). Verify the exact requirement with your local building department before finalizing home design, as a few feet can significantly impact your floor plan on narrow waterfront lots.",
  },
  {
    question: "What permits do I need for seawall work with new home construction?",
    answer:
      "Seawall construction typically requires: (1) Local building permit from city or county, (2) Environmental Resource Permit (ERP) from SWFWMD for work below mean high water, and potentially (3) US Army Corps of Engineers authorization (often covered by Florida's State Programmatic General Permit). If your seawall extends onto state-owned submerged lands, you may also need a Submerged Land Lease. Permit timelines range from 2-12 weeks depending on complexity. FCS coordinates all permitting to avoid delays.",
  },
  {
    question: "How much does a new seawall cost in Tampa Bay?",
    answer:
      "New seawall construction in Tampa Bay typically costs $300-500+ per linear foot installed for vinyl sheet pile (the most common choice for residential). A typical 100-foot waterfront lot would run $30,000-50,000 for the seawall alone. Add $5,000-15,000 for engineering, permits, and surveys. Steel and concrete options may cost more. Factors affecting price include seawall height, soil conditions, access, and existing wall demolition. Get site-specific quotes - costs vary significantly based on conditions.",
  },
  {
    question: "Can I use my neighbor's seawall or do I need my own?",
    answer:
      "Seawalls are typically installed along property lines, not shared, though adjacent walls must tie together properly. If your neighbor has a good seawall, your contractor will design a connection that allows independent function while preventing gaps. If your neighbor's wall is failing, you'll need to address the transition - either coordinate joint replacement or engineer a solution that protects your property regardless of the neighbor's wall condition. Discuss this with your seawall contractor early in planning.",
  },
  {
    question: "What happens if my seawall fails during home construction?",
    answer:
      "Seawall failure during construction can be catastrophic - it can undermine foundations, flood the site, and delay the project significantly. This is why seawall condition assessment is critical before purchasing a waterfront lot, and why replacement (if needed) should typically occur early in the construction sequence. FCS evaluates seawall condition during site assessment and recommends the appropriate timing for any seawall work. For lots with questionable seawalls, we recommend replacement before foundation work begins.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Seawall Coordination New Construction", href: "/seawall-coordination-new-construction/" },
];


const internalLinks = [
  { href: "/services/", label: "Our Construction Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/residential/", label: "Residential Construction" },
  { href: "/about/", label: "About Florida Construction Specialists" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function SeawallCoordinationNewConstructionPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Waterfront Home Construction" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Waterfront Home Construction with Seawall Coordination"
        serviceDescription="Expert coordination of seawall work with new waterfront home construction in Tampa Bay. Permitting, timing, and contractor management for successful waterfront projects."
        city="Tampa"
        minPrice="500000"
      />
      <ArticleSchema
        headline="Seawall Coordination for New Construction | Tampa Bay Waterfront | FCS"
        description="Coordinating seawall work with new waterfront home construction in Tampa Bay. Timing, permits, setbacks, and contractor coordination for successful waterfront projects."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/seawall-coordination-new-construction/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Residential", href: "/residential/" },
          { name: "Waterfront Construction", href: "/residential/waterfront-construction/" },
          { name: "Seawall Coordination", href: "/seawall-coordination-new-construction/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Construction services in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <BackToHub
              silo="residential"
              customHubTitle="Waterfront Construction"
              customHubHref="/residential/waterfront-construction/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Seawall Coordination for New Construction
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Successfully coordinating seawall work with new home construction on
              Tampa Bay waterfront properties. Timing, permits, and contractor
              management for optimal results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta-gold">
                Discuss Your Waterfront Project
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="btn-secondary-gold flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Message */}
      <section className="py-4 bg-blue-50 border-y border-blue-200">
        <div className="container-custom">
          <div className="flex items-center gap-3 text-blue-800">
            <Anchor className="w-6 h-6 flex-shrink-0" />
            <p className="font-medium">
              <strong>Critical Integration:</strong> Seawall and home construction must
              be coordinated - not treated as separate projects. Poor coordination leads
              to delays, cost overruns, and potential structural problems.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Coordination Timeline
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Successful waterfront projects follow this integrated timeline for seawall
            and home construction coordination.
          </p>
          <div className="max-w-4xl mx-auto">
            {coordinationTimeline.map((phase, index) => (
              <div key={phase.phase} className="flex gap-6 mb-6 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  {index < coordinationTimeline.length - 1 && (
                    <div className="w-0.5 h-full bg-brand-gold/30 mx-auto mt-2" />
                  )}
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-brand-green-dark">
                      {phase.phase}
                    </h3>
                    <span className="text-xs bg-brand-gold/20 text-brand-gold-dark px-2 py-1 rounded flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {phase.timing}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{phase.activities}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-yellow-50 rounded-lg p-3">
                      <span className="text-xs text-yellow-600 font-semibold">Critical Factor</span>
                      <p className="text-yellow-800 text-sm">{phase.critical}</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border">
                      <span className="text-xs text-gray-500">Deliverables</span>
                      <p className="text-gray-700 text-sm">{phase.deliverables}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seawall Types */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Seawall Types for Tampa Bay
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choosing the right seawall system affects cost, longevity, and coordination
            with home construction.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {seawallTypes.map((type) => (
              <div key={type.type} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-brand-green-dark mb-2">
                  {type.type}
                </h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <span className="text-xs text-gray-500">Lifespan</span>
                    <p className="font-bold text-brand-green-dark">{type.lifespan}</p>
                  </div>
                  <div className="bg-brand-gold/10 rounded-lg p-3">
                    <span className="text-xs text-brand-gold-dark">Cost</span>
                    <p className="font-bold text-brand-green-dark">{type.cost}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-green-600 font-semibold">Pros: </span>
                    <span className="text-gray-600">{type.pros}</span>
                  </div>
                  <div>
                    <span className="text-red-600 font-semibold">Cons: </span>
                    <span className="text-gray-600">{type.cons}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <span className="text-xs text-gray-500">Best For</span>
                  <p className="text-gray-700">{type.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setback Requirements */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Seawall Setback Requirements
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Building setbacks from seawalls vary by jurisdiction. These setbacks directly
            impact your buildable area.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-brand-gold text-white">
                  <th className="px-4 py-3 text-left font-semibold">Jurisdiction</th>
                  <th className="px-4 py-3 text-center font-semibold">Required Setback</th>
                  <th className="px-4 py-3 text-left font-semibold">Notes</th>
                  <th className="px-4 py-3 text-left font-semibold">Exceptions</th>
                </tr>
              </thead>
              <tbody>
                {setbackRequirements.map((req, index) => (
                  <tr
                    key={req.jurisdiction}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-semibold text-brand-green-dark">
                      {req.jurisdiction}
                    </td>
                    <td className="px-4 py-3 text-center font-bold text-brand-gold-dark">
                      {req.setback}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{req.notes}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{req.exceptions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Always verify current requirements with local building department before design.
          </p>
        </div>
      </section>

      {/* Permit Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Permit Requirements
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Seawall construction typically requires multiple permits. Plan for adequate
            lead time.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {permitRequirements.map((permit) => (
              <div key={permit.permit} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="w-8 h-8 text-brand-gold flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-brand-green-dark">
                      {permit.permit}
                    </h3>
                    <p className="text-sm text-gray-500">{permit.agency}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-gold" />
                    <span className="font-medium">{permit.timeline}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block">Requirements</span>
                    <p className="text-gray-700 text-sm">{permit.requirements}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <span className="text-xs text-gray-500">Notes</span>
                    <p className="text-gray-700 text-sm">{permit.notes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Common Coordination Challenges
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            These issues frequently arise in waterfront projects. Anticipating them
            allows for proactive solutions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonChallenges.map((item) => (
              <div key={item.challenge} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  <h3 className="text-lg font-bold text-brand-green-dark">
                    {item.challenge}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3">
                    <span className="text-xs text-green-600 font-semibold">Solution</span>
                    <p className="text-gray-700 text-sm">{item.solution}</p>
                  </div>
                  <div className="bg-brand-gold/10 rounded-lg p-3">
                    <span className="text-xs text-brand-gold-dark font-semibold">FCS Role</span>
                    <p className="text-gray-700 text-sm">{item.fcsRole}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Factors */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Seawall Cost Factors
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Understanding cost drivers helps with accurate budgeting for your
            waterfront project.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {costFactors.map((factor) => (
              <div key={factor.factor} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  {factor.factor}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{factor.impact}</p>
                <div className="space-y-2">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <span className="text-xs text-gray-500">Typical Range</span>
                    <p className="text-gray-700 text-sm">{factor.typical}</p>
                  </div>
                  <div className="bg-brand-gold/10 rounded-lg p-3">
                    <span className="text-xs text-brand-gold-dark">Budget Tip</span>
                    <p className="text-gray-700 text-sm">{factor.budgetTip}</p>
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
            Related Waterfront Construction Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/marine-grade-building-materials-guide/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-gold">
                Marine-Grade Materials
              </h3>
              <p className="text-gray-600 text-sm">
                Materials that withstand Tampa Bay&apos;s coastal environment.
              </p>
            </Link>
            <Link
              href="/waterfront-custom-homes-in-tampa/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-gold">
                Waterfront Custom Homes
              </h3>
              <p className="text-gray-600 text-sm">
                Complete waterfront home construction services.
              </p>
            </Link>
            <Link
              href="/flood-zone-ve-vs-ae-guide/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-gold">
                Flood Zone Requirements
              </h3>
              <p className="text-gray-600 text-sm">
                Understanding VE vs AE zone construction requirements.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-gold">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Planning a Waterfront Home Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists coordinates all aspects of waterfront
            construction, including seawall work. We ensure your seawall and home
            construction are properly integrated for a successful project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Start Your Waterfront Project
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-gold-dark font-bold rounded-full hover:bg-gray-100 transition-all"
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