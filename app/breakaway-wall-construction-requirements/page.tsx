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
  FileText,
  Building2,
  AlertCircle,
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
  title: "Breakaway Wall Construction Requirements | Coastal Homes Tampa Bay | FCS",
  description:
    "Complete guide to breakaway wall construction requirements for coastal homes in flood zones. FEMA regulations, design criteria, and construction standards for Tampa Bay waterfront properties.",
  keywords:
    "breakaway wall construction Florida, FEMA breakaway walls, VE zone construction, coastal flood resistant construction Tampa, flood zone building requirements",
};

const breakawayRequirements = [
  {
    requirement: "Maximum Load Capacity",
    specification: "10-20 psf (pounds per square foot)",
    source: "FEMA P-55 / ASCE 24",
    explanation: "Walls must fail under flood loads between these limits - too weak risks premature failure; too strong transfers damaging loads to structure",
    importance: "Critical - exceeding 20 psf violates code",
  },
  {
    requirement: "Collapse Mechanism",
    specification: "Must collapse without damaging elevated structure",
    source: "44 CFR 60.3(e)(5)",
    explanation: "Breakaway walls must fail cleanly, allowing floodwaters to pass through the foundation without transferring loads upward",
    importance: "Critical - prevents structural damage to elevated home",
  },
  {
    requirement: "No Attachment to Structure",
    specification: "Cannot be attached to elevated building except at bottom",
    source: "FEMA TB 5",
    explanation: "Connections at top or sides would transfer flood forces to the elevated structure when walls fail",
    importance: "Critical - improper attachment voids breakaway function",
  },
  {
    requirement: "Flood Vents Required",
    specification: "1 SF of opening per 200 SF of enclosed area",
    source: "ASCE 24 / FEMA TB 1",
    explanation: "Vents equalize water pressure before wall collapse, reducing forces on breakaway panels",
    importance: "High - reduces forces and insurance premiums",
  },
  {
    requirement: "Below-BFE Enclosure Use",
    specification: "Limited to parking, storage, building access only",
    source: "44 CFR 60.3(e)(4)",
    explanation: "No living space, no finished interiors, no mechanical equipment below BFE",
    importance: "Critical - habitable space below BFE voids flood insurance",
  },
  {
    requirement: "Materials",
    specification: "Non-water-resistant materials or designed to collapse",
    source: "FEMA P-55",
    explanation: "Lightweight framing, frangible connections, no concrete or masonry (unless engineered)",
    importance: "High - ensures proper failure under flood loads",
  },
];

const wallSystems = [
  {
    system: "Wood Frame with Frangible Connections",
    description: "Standard wood stud walls with deliberate weak points at connections",
    loadCapacity: "10-20 psf (adjustable via connection design)",
    pros: "Familiar construction; economical; easily rebuilt; adjustable failure load",
    cons: "Requires precise connection detailing; can fail prematurely in hurricanes",
    applications: "Most common residential application; covered parking areas",
  },
  {
    system: "Insulated Panels (ICF-style breakaway)",
    description: "Lightweight foam panels designed to release at specific loads",
    loadCapacity: "10-15 psf typical",
    pros: "Good insulation for enclosed areas; consistent failure; quick installation",
    cons: "Proprietary systems; higher material cost; limited suppliers",
    applications: "Enclosed storage; temperature-sensitive storage below BFE",
  },
  {
    system: "Lattice/Open Walls",
    description: "Open framework that doesn't resist flood forces significantly",
    loadCapacity: "Less than 10 psf (effectively open)",
    pros: "Simplest solution; lowest cost; no breakaway engineering needed",
    cons: "No enclosure; no weather protection; aesthetic limitations",
    applications: "Open parking; covered patios; minimal enclosure needs",
  },
  {
    system: "Engineered Breakaway Panels",
    description: "Prefabricated panels designed to release at precise load thresholds",
    loadCapacity: "Precisely engineered to specification",
    pros: "Documented performance; easier inspection; consistent results",
    cons: "Higher cost; longer lead time; limited design flexibility",
    applications: "Commercial; multi-family; projects requiring documented compliance",
  },
];

const commonMistakes = [
  {
    mistake: "Anchoring Walls to Elevated Structure",
    consequence: "Flood forces transfer to house; structural damage; code violation",
    solution: "Walls attach only at grade; top track floats or uses frangible clips",
    detection: "Look for continuous top plate attachment, hurricane clips to floor above",
  },
  {
    mistake: "Using Concrete or Masonry",
    consequence: "Exceeds 20 psf breakaway limit; massive debris when fails",
    solution: "Use only lightweight framing; if masonry needed, must be engineered to collapse",
    detection: "Visual inspection; review construction documents",
  },
  {
    mistake: "Installing Finished Interiors",
    consequence: "Creates habitable space below BFE; voids flood insurance; code violation",
    solution: "Bare studs, flood-resistant materials only; no drywall, carpet, or finishes",
    detection: "Interior inspection; look for drywall, outlets, HVAC registers",
  },
  {
    mistake: "Inadequate or Missing Flood Vents",
    consequence: "Higher flood forces on walls; may exceed 20 psf before equalization",
    solution: "Install code-compliant flood vents at 1 SF per 200 SF enclosed",
    detection: "Count vents; calculate enclosed area; verify ICC-ES certification",
  },
  {
    mistake: "Installing Mechanical Equipment Below BFE",
    consequence: "Equipment destroyed in flood; code violation in V zones",
    solution: "Elevate all mechanical above BFE or use flood-resistant equipment",
    detection: "Locate HVAC, water heater, electrical panels; compare to BFE",
  },
  {
    mistake: "Building Too Strong",
    consequence: "Walls don't break away; transfer loads; damage structure",
    solution: "Engineer connections to fail between 10-20 psf; document calculations",
    detection: "Review connection details; structural engineer evaluation",
  },
];

const connectionDetails = [
  {
    location: "Bottom of Wall (Grade Connection)",
    requirement: "Secure attachment to foundation or grade beam",
    typicalMethod: "Sill plate anchored to concrete; conventional hold-downs acceptable",
    notes: "This is the only secure connection allowed; wall pivots/releases from here",
  },
  {
    location: "Top of Wall (Elevated Floor)",
    requirement: "Must NOT transfer lateral loads to elevated structure",
    typicalMethod: "Floating top plate with vertical slip track; frangible clips",
    notes: "Gap at top allows wall to collapse without pulling on floor above",
  },
  {
    location: "Wall Corners",
    requirement: "Corner connections must also be frangible",
    typicalMethod: "Light nailing; breakaway corner clips; overlapping panels",
    notes: "Corners often built too strong; common failure point in compliance",
  },
  {
    location: "Door and Window Frames",
    requirement: "Frames must not strengthen wall beyond limits",
    typicalMethod: "Frames attached to breakaway wall only; float at head",
    notes: "Large openings reduce wall strength; factor into breakaway design",
  },
];

const floodZoneComparison = [
  {
    zone: "VE Zone",
    description: "Coastal high hazard area with velocity (wave action)",
    breakawayRequired: "Yes - mandatory for all enclosures below BFE",
    additionalReqs: "Open foundation required; no fill; V-zone certification",
    bfeRequired: "Bottom of lowest horizontal structural member at or above BFE",
  },
  {
    zone: "AE Zone",
    description: "Flood zone with base flood elevations but no waves",
    breakawayRequired: "Recommended but not always required; depends on locality",
    additionalReqs: "Flood vents required; fill allowed; solid walls may be permitted",
    bfeRequired: "Top of lowest floor at or above BFE",
  },
  {
    zone: "Coastal AE Zone",
    description: "AE zone subject to wave action (Limit of Moderate Wave Action)",
    breakawayRequired: "Often required by local amendment; check with AHJ",
    additionalReqs: "May have V-zone-like restrictions; varies by community",
    bfeRequired: "Varies - check community regulations",
  },
  {
    zone: "AO/AH Zone",
    description: "Shallow flooding areas; ponding",
    breakawayRequired: "Generally not required",
    additionalReqs: "Specific depth/elevation requirements",
    bfeRequired: "Based on flood depth specified on FIRM",
  },
];

const faqs = [
  {
    question: "What is a breakaway wall and why is it required?",
    answer:
      "A breakaway wall is a wall designed to collapse under flood forces without damaging the elevated structure above. FEMA requires breakaway walls for any enclosure below the Base Flood Elevation (BFE) in V zones (coastal high hazard areas). The concept is simple: when floodwaters and waves hit the lower enclosure, the walls fail and float away, allowing water to pass through the foundation rather than pushing against (and potentially destroying) the entire structure. Without breakaway walls, wave forces could tear the elevated house from its foundation.",
  },
  {
    question: "What is the 10-20 psf requirement for breakaway walls?",
    answer:
      "FEMA and ASCE 24 require breakaway walls to collapse when subjected to water loads between 10 and 20 pounds per square foot (psf). This range ensures walls are: (1) strong enough to resist normal wind loads and incidental impacts, but (2) weak enough to fail before transferring damaging flood forces to the elevated structure. Walls designed below 10 psf may fail too easily; walls exceeding 20 psf are too strong and will transfer flood loads upward, potentially destroying the house.",
  },
  {
    question: "Can I finish the space below my elevated home?",
    answer:
      "No. Federal regulations strictly limit below-BFE enclosures in V zones to parking, storage, and building access only. You cannot install drywall, carpet, climate control, or any features that would make the space habitable. Utilities and mechanical equipment must be elevated above BFE or specially designed for flood exposure. Violating these restrictions voids your flood insurance coverage and may subject you to substantial penalties. Even in AE zones with proper elevation, below-BFE space has significant restrictions.",
  },
  {
    question: "How do I get breakaway wall construction approved in Tampa Bay?",
    answer:
      "For Tampa Bay communities in V zones, you'll need: (1) construction documents showing breakaway wall design meeting 10-20 psf criteria, (2) structural engineer certification that walls will collapse within the required load range, (3) building permit review by local floodplain administrator, and (4) post-construction certification. Most jurisdictions require V-zone certification forms signed by the design professional and contractor. Florida Construction Specialists works with structural engineers experienced in coastal construction to ensure your project meets all requirements.",
  },
  {
    question: "What happens to breakaway walls during a hurricane?",
    answer:
      "During a major storm surge event, breakaway walls are designed to fail. This is intentional - the walls collapse and float away, allowing water to flow through the foundation area rather than pushing against the structure. After the storm, the walls must be rebuilt. This is why below-BFE spaces cannot contain valuable items or habitable space. The elevated living area above should remain intact (assuming proper elevation and construction), which is the entire purpose of the breakaway wall system.",
  },
  {
    question: "Are breakaway walls required in AE flood zones?",
    answer:
      "Generally, breakaway walls are not required in standard AE zones - solid walls with flood vents are typically permitted. However, many Tampa Bay communities have adopted more restrictive local standards, especially in Coastal AE zones near the Limit of Moderate Wave Action (LiMWA). Additionally, some homeowners choose breakaway construction for additional protection even when not required. Always verify requirements with your local building department, as community standards vary.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Breakaway Wall Construction Requirements", href: "/breakaway-wall-construction-requirements/" },
];


const internalLinks = [
  { href: "/services/", label: "Our Construction Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/residential/", label: "Residential Construction" },
  { href: "/about/", label: "About Florida Construction Specialists" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function BreakawayWallConstructionRequirementsPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Breakaway Wall Construction" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Coastal Home Construction"
        serviceDescription="Expert breakaway wall construction for coastal homes in Tampa Bay flood zones. FEMA-compliant design and construction for waterfront and elevated properties."
        city="Tampa"
        minPrice="250000"
      />

      
      <ArticleSchema
        headline="Breakaway Wall Construction Requirements | Coastal Homes Tampa Bay | FCS"
        description="Complete guide to breakaway wall construction requirements for coastal homes in flood zones. FEMA regulations, design criteria, and construction standards for Tampa Bay waterfront properties."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/breakaway-wall-construction-requirements/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Residential", href: "/residential/" },
          { name: "Coastal Resilience", href: "/residential/coastal-resilience/" },
          { name: "Breakaway Walls", href: "/breakaway-wall-construction-requirements/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
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
              customHubTitle="Coastal Resilience"
              customHubHref="/residential/coastal-resilience/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Breakaway Wall Construction Requirements
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Understanding FEMA requirements for breakaway wall construction in
              coastal flood zones. Protecting your Tampa Bay waterfront home through
              proper design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta-gold">
                Discuss Your Coastal Project
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

      {/* Alert */}
      <section className="py-4 bg-blue-50 border-y border-blue-200">
        <div className="container-custom">
          <div className="flex items-center gap-3 text-blue-800">
            <Waves className="w-6 h-6 flex-shrink-0" />
            <p className="font-medium">
              <strong>V Zone Requirement:</strong> Breakaway walls are mandatory for
              any enclosed space below the Base Flood Elevation in Coastal High Hazard
              Areas (V zones). Improper construction voids flood insurance coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Key Requirements */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Breakaway Wall Requirements
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            FEMA and ASCE 24 establish specific requirements for breakaway wall
            construction. These are not suggestions - they are code requirements.
          </p>
          <div className="space-y-4">
            {breakawayRequirements.map((req) => (
              <div key={req.requirement} className="bg-gray-50 rounded-xl p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className={`px-3 py-1 rounded text-xs font-bold ${
                      req.importance.startsWith("Critical") ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {req.importance}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-brand-green-dark">
                        {req.requirement}
                      </h3>
                      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
                        {req.source}
                      </span>
                    </div>
                    <p className="text-brand-gold-dark font-medium mb-2">{req.specification}</p>
                    <p className="text-gray-600">{req.explanation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wall Systems */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Breakaway Wall Systems
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Several approaches can achieve compliant breakaway wall construction.
            Selection depends on project requirements and aesthetic goals.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {wallSystems.map((system) => (
              <div key={system.system} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-brand-green-dark mb-2">
                  {system.system}
                </h3>
                <p className="text-gray-600 mb-4">{system.description}</p>
                <div className="bg-brand-gold/10 rounded-lg p-3 mb-4">
                  <span className="text-xs text-brand-gold-dark font-semibold">Load Capacity</span>
                  <p className="font-bold text-brand-green-dark">{system.loadCapacity}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <span className="text-xs text-green-600 font-semibold block">Advantages</span>
                    <p className="text-gray-700 text-sm">{system.pros}</p>
                  </div>
                  <div>
                    <span className="text-xs text-red-600 font-semibold block">Considerations</span>
                    <p className="text-gray-700 text-sm">{system.cons}</p>
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <span className="text-xs text-gray-500">Best Applications</span>
                  <p className="text-gray-700 text-sm">{system.applications}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connection Details */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Critical Connection Details
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Proper connections are essential for breakaway wall function. Most compliance
            failures occur at connection points.
          </p>
          <div className="max-w-3xl mx-auto space-y-6">
            {connectionDetails.map((detail, index) => (
              <div key={detail.location} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                      {detail.location}
                    </h3>
                    <p className="text-brand-gold-dark font-medium mb-2">{detail.requirement}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-xs text-gray-500 block">Typical Method</span>
                        <p className="text-gray-700 text-sm">{detail.typicalMethod}</p>
                      </div>
                      <div className="bg-yellow-50 rounded-lg p-3">
                        <span className="text-xs text-yellow-600 block">Important Note</span>
                        <p className="text-yellow-700 text-sm">{detail.notes}</p>
                      </div>
                    </div>
                  </div>
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
            Common Construction Mistakes
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            These errors frequently result in code violations, insurance problems,
            and structural damage during floods.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonMistakes.map((mistake) => (
              <div key={mistake.mistake} className="bg-white rounded-xl p-6 shadow-md border-t-4 border-red-500">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <h3 className="text-lg font-bold text-brand-green-dark">
                    {mistake.mistake}
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-red-50 rounded-lg p-3">
                    <span className="text-xs text-red-600 font-semibold">Consequence</span>
                    <p className="text-red-700 text-sm">{mistake.consequence}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <span className="text-xs text-green-600 font-semibold">Correct Approach</span>
                    <p className="text-green-700 text-sm">{mistake.solution}</p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500">How to Detect</span>
                    <p className="text-gray-600 text-sm">{mistake.detection}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flood Zone Comparison */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Breakaway Requirements by Flood Zone
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Requirements vary by flood zone designation. Always verify your property&apos;s
            zone on the FEMA Flood Insurance Rate Map (FIRM).
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-brand-gold text-white">
                  <th className="px-4 py-3 text-left font-semibold">Zone</th>
                  <th className="px-4 py-3 text-left font-semibold">Description</th>
                  <th className="px-4 py-3 text-center font-semibold">Breakaway Required?</th>
                  <th className="px-4 py-3 text-left font-semibold">Additional Requirements</th>
                </tr>
              </thead>
              <tbody>
                {floodZoneComparison.map((zone, index) => (
                  <tr
                    key={zone.zone}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-bold text-brand-green-dark">
                      {zone.zone}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{zone.description}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        zone.breakawayRequired.startsWith("Yes") ? "bg-red-100 text-red-700" :
                        zone.breakawayRequired.startsWith("Recommended") ? "bg-yellow-100 text-yellow-700" :
                        "bg-gray-100 text-gray-600"
                      }`}>
                        {zone.breakawayRequired.split(" - ")[0]}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{zone.additionalReqs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            Related Coastal Construction Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/flood-zone-ve-vs-ae-guide/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-gold">
                Flood Zone VE vs AE Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Understanding flood zone differences and construction requirements.
              </p>
            </Link>
            <Link
              href="/fema-50-percent-rule-explained/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-gold">
                FEMA 50% Rule
              </h3>
              <p className="text-gray-600 text-sm">
                Substantial improvement thresholds for existing coastal homes.
              </p>
            </Link>
            <Link
              href="/hurricane-resistant-luxury-home-design/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-gold">
                Hurricane-Resistant Design
              </h3>
              <p className="text-gray-600 text-sm">
                Building homes to withstand Florida&apos;s storms.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-gold">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Building in a Coastal Flood Zone?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists understands the complexities of coastal
            construction. We ensure your breakaway walls and foundation system meet
            all FEMA requirements while creating the waterfront home you envision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Start Your Coastal Project
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