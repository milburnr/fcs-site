import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  CheckCircle,
  AlertTriangle,
  Waves,
  ArrowRight,
  Phone,
  HelpCircle,
  Shield,
  FileCheck,
  DollarSign,
  Ruler,
  Home,
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
  title: "Multi-Family Flood Zone Construction Tampa Bay | FCS Construction",
  description:
    "Expert multi-family construction in FEMA flood zones across Tampa Bay. Navigate flood elevation requirements, NFIP compliance, and cost-effective building strategies for apartments and condos.",
  keywords:
    "multi-family flood zone Tampa, apartment construction flood zone Florida, FEMA compliance condos, elevated building construction, flood resistant multi-family, NFIP multi-family requirements",
};

const floodZoneTypes = [
  {
    zone: "Zone AE",
    risk: "High Risk - 1% annual chance flood",
    bfeRequired: "Yes - Base Flood Elevation established",
    multiFamily: "Most common for coastal apartment development",
    insuranceCost: "High - Required for federally-backed mortgages",
    constructionImpact: "Elevation or dry floodproofing required",
  },
  {
    zone: "Zone VE",
    risk: "Coastal High Hazard - Wave action",
    bfeRequired: "Yes - Plus wave height factor",
    multiFamily: "Most challenging; requires special foundations",
    insuranceCost: "Very high - Significant premium increases",
    constructionImpact: "Elevation on pilings/columns; no enclosed space below BFE",
  },
  {
    zone: "Zone AO",
    risk: "High Risk - Sheet flow areas",
    bfeRequired: "Depth specified (1-3 feet typical)",
    multiFamily: "Less common; drainage requirements key",
    insuranceCost: "High - Similar to AE zones",
    constructionImpact: "Elevation above specified depth",
  },
  {
    zone: "Zone X (Shaded)",
    risk: "Moderate Risk - 0.2% annual chance",
    bfeRequired: "No - But elevation may still be wise",
    multiFamily: "Lower requirements; insurance optional",
    insuranceCost: "Moderate - Often recommended",
    constructionImpact: "No federal requirements; local may vary",
  },
];

const elevationStrategies = [
  {
    strategy: "Podium Construction",
    description: "Elevated concrete deck with parking below",
    bestFor: "Mid-rise apartments in AE zones",
    advantages: [
      "Parking counts toward flood mitigation",
      "No loss of buildable area",
      "Familiar construction method",
      "Utilities protected above BFE",
    ],
    challenges: [
      "Higher structural costs",
      "Enclosure limitations below BFE",
      "HVAC/electrical routing complexity",
    ],
    costImpact: "+15-25% vs. standard construction",
  },
  {
    strategy: "Pile/Column Foundation",
    description: "Building elevated on deep foundation system",
    bestFor: "VE zones; coastal locations",
    advantages: [
      "Meets VE zone requirements",
      "Allows breakaway walls below",
      "Ground-level parking option",
      "Storm surge passes through",
    ],
    challenges: [
      "Significant cost premium",
      "Complex engineering required",
      "Limited to 3-4 stories wood frame",
    ],
    costImpact: "+30-50% vs. standard construction",
  },
  {
    strategy: "Fill and Elevate",
    description: "Raise entire site with compacted fill",
    bestFor: "Large sites in AE zones",
    advantages: [
      "Standard foundation systems",
      "Lower structural premium",
      "Familiar building methods",
      "Can remove from flood zone",
    ],
    challenges: [
      "Requires large fill quantities",
      "Environmental permits for wetlands",
      "Extended site work timeline",
    ],
    costImpact: "+5-15% depending on fill depth",
  },
  {
    strategy: "Dry Floodproofing",
    description: "Waterproof ground floor to resist flooding",
    bestFor: "Commercial portions only; not residential",
    advantages: [
      "No elevation required",
      "Maintains ground-level access",
      "Lower construction cost than elevation",
    ],
    challenges: [
      "NOT allowed for residential in SFHA",
      "Limited to non-residential uses",
      "Requires certified engineer design",
    ],
    costImpact: "Varies by application",
  },
];

const designRequirements = [
  {
    requirement: "Lowest Floor Elevation",
    standard: "At or above BFE (many jurisdictions require BFE +1 or +2 feet)",
    detail: "Includes all living space, HVAC, electrical panels",
    tampaSpecific: "Hillsborough requires BFE +1 foot; Pinellas varies by location",
  },
  {
    requirement: "Enclosures Below BFE",
    standard: "Limited to parking, building access, storage",
    detail: "Must have flood openings (1 sq inch per sq foot of enclosed area)",
    tampaSpecific: "No habitable space; breakaway walls in VE zones",
  },
  {
    requirement: "Utilities and Equipment",
    standard: "Must be elevated above BFE or designed flood-resistant",
    detail: "HVAC, electrical, plumbing, elevators all affected",
    tampaSpecific: "Generator placement critical for hurricane recovery",
  },
  {
    requirement: "Parking Design",
    standard: "At-grade parking allowed below elevated buildings",
    detail: "Must be open or have flood openings",
    tampaSpecific: "Covered parking under podium common solution",
  },
  {
    requirement: "Building Materials Below BFE",
    standard: "Flood damage-resistant materials required",
    detail: "Concrete, treated lumber, waterproof finishes",
    tampaSpecific: "Salt-air corrosion also a factor for coastal sites",
  },
  {
    requirement: "Substantial Improvement Rule",
    standard: "50% threshold triggers full compliance",
    detail: "Renovations exceeding 50% of building value require elevation",
    tampaSpecific: "Critical for older coastal apartment acquisitions",
  },
];

const costConsiderations = [
  {
    item: "Elevation Premium",
    typical: "$15-50/SF additional",
    factors: "Height of BFE, construction type, zone (VE much higher)",
  },
  {
    item: "Foundation System",
    typical: "$20,000-100,000 per building",
    factors: "Soil conditions, building size, pile depth in VE",
  },
  {
    item: "Flood Vents/Openings",
    typical: "$500-2,000 per opening",
    factors: "Engineered vs. non-engineered, quantity needed",
  },
  {
    item: "Utility Relocation",
    typical: "$5-15/SF of affected area",
    factors: "HVAC routing, electrical riser, plumbing complexity",
  },
  {
    item: "Site Fill",
    typical: "$8-15/cubic yard installed",
    factors: "Fill source, compaction requirements, permit conditions",
  },
  {
    item: "Flood Insurance",
    typical: "$2,000-15,000/unit annually",
    factors: "Zone, elevation relative to BFE, building type",
  },
];

const permittingProcess = [
  {
    step: "FEMA Map Review",
    description: "Verify current flood zone designation and BFE",
    documents: "Flood Insurance Rate Map (FIRM), elevation certificate",
    timeline: "1-2 weeks",
  },
  {
    step: "Survey and Elevation Certificate",
    description: "Licensed surveyor documents existing and proposed elevations",
    documents: "FEMA Elevation Certificate, topographic survey",
    timeline: "2-3 weeks",
  },
  {
    step: "Floodplain Development Permit",
    description: "Local jurisdiction approval for construction in SFHA",
    documents: "Site plan, elevation plans, flood mitigation design",
    timeline: "4-8 weeks",
  },
  {
    step: "Building Permit Review",
    description: "Standard building permit with flood compliance verification",
    documents: "Construction drawings showing BFE compliance",
    timeline: "6-12 weeks (concurrent with floodplain permit)",
  },
  {
    step: "Construction Inspections",
    description: "Verify elevation and flood-resistant construction",
    documents: "As-built elevation certificate, inspection reports",
    timeline: "Throughout construction",
  },
  {
    step: "Final Elevation Certificate",
    description: "Post-construction certification for insurance rating",
    documents: "Final FEMA Elevation Certificate by surveyor",
    timeline: "Before Certificate of Occupancy",
  },
];

const faqs = [
  {
    question: "Can apartments be built in a flood zone?",
    answer:
      "Yes, multi-family housing can be built in FEMA-designated flood zones, but must meet specific elevation and construction requirements. In AE zones, the lowest floor containing habitable space must be at or above the Base Flood Elevation (BFE). In VE zones (coastal high hazard areas), buildings must be elevated on pilings or columns with no enclosed space below BFE except for breakaway walls. Many successful apartment developments in Tampa Bay are built in flood zones using podium construction, which places parking below the elevated living spaces. The key is proper engineering, compliance with local floodplain ordinances, and factoring flood insurance costs into your pro forma.",
  },
  {
    question: "How much does flood zone construction add to costs?",
    answer:
      "Flood zone construction typically adds 15-50% to construction costs depending on the zone and required elevation. AE zone projects using podium construction might add $15-25 per square foot. VE zone projects requiring pile foundations can add $30-50 per square foot or more. Additional costs include: flood vents and openings, elevated utility systems, flood-resistant materials below BFE, and site fill if used. Operating costs also increase through flood insurance premiums, which can range from $2,000-15,000 per unit annually depending on the building's elevation relative to BFE. These costs must be factored into your development pro forma from the start.",
  },
  {
    question: "What is the substantial improvement rule for apartments?",
    answer:
      "The substantial improvement rule requires that if renovation costs exceed 50% of the building's pre-improvement market value, the entire building must be brought into compliance with current floodplain regulations—including elevation requirements. This is critical for older coastal apartments that may have been built before current flood maps. A full gut renovation of a 1970s coastal apartment building would likely trigger full compliance, potentially requiring the building to be elevated or demolished. The 50% threshold is cumulative over any 10-year period in many jurisdictions. Always obtain a substantial improvement determination before planning major renovations to flood zone properties.",
  },
  {
    question: "What is podium construction for flood zones?",
    answer:
      "Podium construction is a popular solution for multi-family buildings in flood zones. The design places an elevated concrete deck (the podium) above the BFE, with parking or other non-habitable uses below. The podium supports wood-frame or steel residential construction above. Benefits include: ground-level parking that counts toward flood mitigation, no loss of buildable units to elevation requirements, familiar construction methods above the podium, and protected utility systems. The podium itself must have proper flood openings and use flood-resistant materials. This approach typically adds 15-25% to construction costs but is often the most practical solution for mid-rise apartments in AE zones.",
  },
  {
    question: "How do flood zones affect apartment insurance and financing?",
    answer:
      "Flood insurance is mandatory for any federally-backed mortgage on property in Special Flood Hazard Areas (SFHA), which includes zones A and V. This affects both construction loans and permanent financing. Insurance costs vary significantly based on building elevation relative to BFE—every foot above BFE reduces premiums substantially. Lenders typically require coverage for the full replacement cost or loan amount. For new construction, achieving an elevation 1-2 feet above BFE can significantly reduce long-term insurance costs and improve the property's marketability. Some developments pursue FEMA Letters of Map Amendment (LOMA) or Revision (LOMR) to potentially remove the property from the SFHA, though this requires demonstration that the property is at or above BFE through natural grade or fill.",
  },
  {
    question: "Can below-BFE space count as parking in apartments?",
    answer:
      "Yes, the area below BFE can be used for parking, building access, and limited storage in AE zones. However, there are strict requirements: the space must have flood openings (vents) sized at 1 square inch of opening per square foot of enclosed area, materials must be flood damage-resistant, no mechanical/electrical equipment unless elevated or flood-resistant, and the space cannot be converted to habitable use. In VE zones, requirements are stricter—only breakaway walls are permitted, and the area must allow free passage of flood waters. Properly designed covered parking under an elevated podium can satisfy both parking requirements and flood regulations, making it an efficient use of the required elevation.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Multi Family Flood Zone Construction", href: "/multi-family-flood-zone-construction/" },
];


const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/services/residential/waterfront-homes/", label: "Waterfront Home Construction" },
  { href: "/services/residential/home-additions/", label: "Home Additions" },
  { href: "/services/residential/hurricane-resistant-construction/", label: "Hurricane-Resistant Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function MultiFloodZoneConstructionPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Multi-Family Flood Zone Construction" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Flood Zone Multi-Family Construction"
        serviceDescription="Expert multi-family construction in FEMA flood zones throughout Tampa Bay. Compliant elevated building design, NFIP navigation, and cost-effective flood mitigation strategies."
        city="Tampa"
        minPrice="5000000"
      />
      <ArticleSchema
        headline="Multi-Family Flood Zone Construction Tampa Bay | FCS Construction"
        description="Expert multi-family construction in FEMA flood zones across Tampa Bay. Navigate flood elevation requirements, NFIP compliance, and cost-effective building strategies for apartments and condos."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/multi-family-flood-zone-construction/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Commercial", href: "/commercial/" },
          { name: "Multi-Family", href: "/commercial/condo-remediation/" },
          { name: "Flood Zone Construction", href: "/multi-family-flood-zone-construction/" },
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
              customHubTitle="Multi-Family Construction"
              customHubHref="/commercial/condo-remediation/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Multi-Family Flood Zone Construction
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Building apartments and condos in FEMA flood zones requires specialized
              knowledge of elevation requirements, NFIP compliance, and cost-effective
              construction strategies across Tampa Bay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Discuss Your Flood Zone Project
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

      {/* Flood Zone Types */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Understanding FEMA Flood Zones
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Each flood zone has different requirements that affect multi-family construction.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="px-4 py-3 text-left font-semibold">Zone</th>
                  <th className="px-4 py-3 text-left font-semibold">Risk Level</th>
                  <th className="px-4 py-3 text-center font-semibold">BFE Required</th>
                  <th className="px-4 py-3 text-left font-semibold">Multi-Family Impact</th>
                  <th className="px-4 py-3 text-left font-semibold">Construction Impact</th>
                </tr>
              </thead>
              <tbody>
                {floodZoneTypes.map((zone, index) => (
                  <tr
                    key={zone.zone}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-bold text-brand-green-dark">
                      {zone.zone}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{zone.risk}</td>
                    <td className="px-4 py-3 text-center text-sm">{zone.bfeRequired}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{zone.multiFamily}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{zone.constructionImpact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Elevation Strategies */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Elevation Strategies for Multi-Family
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Different approaches to meeting flood elevation requirements for apartments and condos.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {elevationStrategies.map((strategy) => (
              <div key={strategy.strategy} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-brand-green-dark">
                    {strategy.strategy}
                  </h3>
                  <span className="text-sm bg-brand-green-light/50 text-brand-green-dark px-3 py-1 rounded-full">
                    {strategy.costImpact}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{strategy.description}</p>
                <p className="text-sm text-brand-green font-medium mb-4">
                  Best For: {strategy.bestFor}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-3">
                    <span className="text-xs font-semibold text-green-600 block mb-2">Advantages</span>
                    <ul className="space-y-1">
                      {strategy.advantages.map((adv, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                          {adv}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3">
                    <span className="text-xs font-semibold text-yellow-600 block mb-2">Challenges</span>
                    <ul className="space-y-1">
                      {strategy.challenges.map((chal, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <AlertTriangle className="w-3 h-3 text-yellow-500 mt-1 flex-shrink-0" />
                          {chal}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Requirements */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Flood Zone Design Requirements
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Key compliance requirements for multi-family construction in flood zones.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designRequirements.map((req) => (
              <div key={req.requirement} className="card p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  {req.requirement}
                </h3>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">
                    <strong className="text-brand-green">Standard:</strong> {req.standard}
                  </p>
                  <p className="text-sm text-gray-600">{req.detail}</p>
                  <p className="text-sm text-brand-gold-dark bg-brand-gold-light/20 rounded p-2">
                    <strong>Tampa Bay:</strong> {req.tampaSpecific}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Considerations */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Cost Impact of Flood Zone Construction
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Budget for these additional costs when developing in flood zones.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
                <thead>
                  <tr className="bg-brand-green text-white">
                    <th className="px-6 py-4 text-left font-semibold">Cost Item</th>
                    <th className="px-6 py-4 text-center font-semibold">Typical Range</th>
                    <th className="px-6 py-4 text-left font-semibold">Key Factors</th>
                  </tr>
                </thead>
                <tbody>
                  {costConsiderations.map((cost, index) => (
                    <tr
                      key={cost.item}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="px-6 py-4 font-semibold text-brand-green-dark">
                        {cost.item}
                      </td>
                      <td className="px-6 py-4 text-center text-brand-green font-medium">
                        {cost.typical}
                      </td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{cost.factors}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Permitting Process */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Flood Zone Permitting Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Navigate the approval process for multi-family development in flood zones.
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            {permittingProcess.map((step, index) => (
              <div
                key={step.step}
                className="bg-gray-50 rounded-xl p-6 border-l-4 border-brand-green"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-brand-green-dark">
                        {step.step}
                      </h3>
                      <span className="text-sm font-medium text-brand-green bg-brand-green-light/30 px-3 py-1 rounded-full">
                        {step.timeline}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <p className="text-sm text-gray-500">
                      <strong>Documents:</strong> {step.documents}
                    </p>
                  </div>
                </div>
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
            Related Multi-Family Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/florida-sb4d-compliance-guide/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Florida SB4D Compliance
              </h3>
              <p className="text-gray-600 text-sm">
                Structural integrity requirements for condos.
              </p>
            </Link>
            <Link
              href="/commercial/industrial-construction/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Industrial Construction
              </h3>
              <p className="text-gray-600 text-sm">
                Commercial construction with flood zone expertise.
              </p>
            </Link>
            <Link
              href="/commercial/condo-remediation/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Condo & Multi-Family Services
              </h3>
              <p className="text-gray-600 text-sm">
                Full range of multi-family construction capabilities.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Planning Multi-Family in a Flood Zone?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            FCS has extensive experience building apartments and condos in Tampa Bay's
            flood zones. We'll help you navigate FEMA requirements and design
            cost-effective solutions that protect your investment.
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