import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Waves,
  CheckCircle,
  AlertTriangle,
  Home,
  ArrowRight,
  Phone,
  HelpCircle,
  Shield,
  MapPin,
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
  title: "Flood Zone VE vs AE | Tampa Bay Waterfront Construction | FCS",
  description:
    "Understanding the difference between VE and AE flood zones for Tampa Bay homeowners. Construction requirements, elevation rules, and insurance implications.",
  keywords:
    "flood zone VE AE Tampa, coastal construction requirements Florida, V zone construction, AE flood zone building, Tampa Bay waterfront homes",
};

const zoneComparison = [
  {
    feature: "Location",
    veZone: "Coastal high-hazard areas with wave action",
    aeZone: "Inland areas subject to flooding without wave action",
  },
  {
    feature: "Wave Height",
    veZone: "Expected 3+ foot waves during base flood",
    aeZone: "No significant wave action expected",
  },
  {
    feature: "Foundation Type",
    veZone: "Open foundation required (piles, piers, columns)",
    aeZone: "Solid foundation allowed with flood vents",
  },
  {
    feature: "Breakaway Walls",
    veZone: "Required below BFE; must fail under flood loads",
    aeZone: "Not required; standard flood-resistant construction",
  },
  {
    feature: "Elevation Requirement",
    veZone: "Bottom of lowest horizontal member at/above BFE",
    aeZone: "Top of lowest floor at/above BFE",
  },
  {
    feature: "Insurance Cost",
    veZone: "Highest NFIP premiums due to wave risk",
    aeZone: "Lower than VE but higher than X zones",
  },
  {
    feature: "Construction Cost Premium",
    veZone: "20-40% more than non-flood zone",
    aeZone: "10-20% more than non-flood zone",
  },
];

const veRequirements = [
  {
    category: "Foundation Design",
    requirements: [
      "Deep pile or column foundation extending below scour depth",
      "Open foundation to allow free flow of water and waves",
      "Engineered design stamped by Florida PE",
      "Pile embedment based on soil conditions and wave forces",
      "Cross-bracing must allow debris passage",
    ],
  },
  {
    category: "Elevation Standards",
    requirements: [
      "Bottom of lowest horizontal structural member at or above BFE",
      "This is MORE stringent than AE zones (floor vs. structural member)",
      "Freeboard (1-3 feet above BFE) recommended for insurance savings",
      "Elevation certificate required by surveyor",
      "Consider future flood map updates",
    ],
  },
  {
    category: "Breakaway Walls",
    requirements: [
      "Any enclosure below BFE must be breakaway construction",
      "Maximum design load of 20 psf",
      "Must fail before damaging elevated structure",
      "No HVAC, electrical panels, or utilities below BFE",
      "Flood vents required in breakaway walls",
    ],
  },
  {
    category: "Utilities & Mechanical",
    requirements: [
      "All HVAC, electrical, plumbing above BFE",
      "Elevated pool equipment and generators",
      "Marine-grade electrical fixtures if below BFE",
      "Corrosion-resistant materials throughout",
      "Backup sump pumps with battery power",
    ],
  },
];

const aeRequirements = [
  {
    category: "Foundation Options",
    requirements: [
      "Solid perimeter foundation allowed (stem wall, slab)",
      "Flood vents required in foundation walls",
      "Crawl spaces permitted with proper venting",
      "Slab-on-grade if top of floor meets BFE",
      "Fill may be used to elevate building pad",
    ],
  },
  {
    category: "Elevation Standards",
    requirements: [
      "Top of lowest floor at or above BFE",
      "Includes basement floors if applicable",
      "Attached garages may be below BFE with flood vents",
      "Freeboard still recommended for insurance",
      "Elevation certificate required",
    ],
  },
  {
    category: "Flood Venting",
    requirements: [
      "Minimum 1 square inch per square foot of enclosed area",
      "Bottom of openings within 12 inches of grade",
      "Engineered flood vents preferred for insurance",
      "Must allow automatic entry/exit of floodwaters",
      "Screen openings no finer than 1/2 inch mesh",
    ],
  },
  {
    category: "Material Requirements",
    requirements: [
      "Flood-resistant materials below BFE",
      "No paper-faced drywall below BFE",
      "Pressure-treated or composite lumber",
      "Water-resistant adhesives and fasteners",
      "Marine-grade finishes recommended",
    ],
  },
];

const tampaBayZones = [
  {
    area: "Davis Islands",
    primaryZone: "AE (majority)",
    bfe: "9-11 feet NAVD",
    notes: "Some VE areas on bayfront; historic district adds complexity",
  },
  {
    area: "Bayshore Boulevard",
    primaryZone: "AE with VE pockets",
    bfe: "10-12 feet NAVD",
    notes: "Seawall provides some protection; still requires elevation",
  },
  {
    area: "South Tampa (Beach Park)",
    primaryZone: "VE (bayfront), AE (inland)",
    bfe: "11-13 feet NAVD",
    notes: "Direct bay exposure increases requirements",
  },
  {
    area: "Apollo Beach",
    primaryZone: "AE (canal-front), VE (bay-front)",
    bfe: "10-12 feet NAVD",
    notes: "Canal homes typically AE; open water VE",
  },
  {
    area: "Ruskin",
    primaryZone: "AE (most), VE (coastal)",
    bfe: "9-11 feet NAVD",
    notes: "Varies significantly by proximity to Little Manatee River",
  },
  {
    area: "Clearwater Beach",
    primaryZone: "VE (beachfront), AE (Intracoastal)",
    bfe: "11-14 feet NAVD",
    notes: "Barrier island; highest construction costs",
  },
  {
    area: "St. Pete Beach",
    primaryZone: "VE",
    bfe: "11-14 feet NAVD",
    notes: "Full barrier island VE designation",
  },
];

const costFactors = [
  {
    factor: "Foundation Type",
    veImpact: "Deep pile foundation: $80-150/SF additional",
    aeImpact: "Elevated slab/stem wall: $30-60/SF additional",
  },
  {
    factor: "Elevation Height",
    veImpact: "Each foot above grade: $15-25/SF of living area",
    aeImpact: "Each foot above grade: $10-18/SF of living area",
  },
  {
    factor: "Breakaway Construction",
    veImpact: "Garage/storage below BFE: $40-80/SF",
    aeImpact: "Not required; standard construction",
  },
  {
    factor: "Utility Relocation",
    veImpact: "All systems elevated: $25,000-60,000",
    aeImpact: "Selective elevation: $10,000-25,000",
  },
  {
    factor: "Insurance Savings",
    veImpact: "Each foot freeboard: 15-25% premium reduction",
    aeImpact: "Each foot freeboard: 10-20% premium reduction",
  },
];

const faqs = [
  {
    question: "How do I find out my flood zone designation?",
    answer:
      "Check the FEMA Flood Map Service Center (msc.fema.gov) by entering your property address. For Tampa Bay properties, you can also check Hillsborough County's or Pinellas County's GIS mapping systems. Keep in mind that FEMA updates flood maps periodically, so a property that was Zone X (minimal flood hazard) may now be AE or VE. Always verify current designation before beginning construction planning.",
  },
  {
    question: "What is the Base Flood Elevation (BFE)?",
    answer:
      "The BFE is the elevation at which there is a 1% chance of flooding in any given year (often called the 100-year flood). All flood zone construction requirements reference the BFE. In Tampa Bay, BFEs typically range from 9-14 feet NAVD (North American Vertical Datum). The BFE is shown on FEMA flood maps and is the minimum elevation requirement—building higher (freeboard) is strongly recommended.",
  },
  {
    question: "Can I build a traditional home in a VE zone?",
    answer:
      "No. VE zones require open foundations (piles, piers, or columns) that allow waves and water to pass beneath the structure. Traditional slab-on-grade or stem wall foundations are prohibited. The entire living area must be elevated above the BFE with the bottom of the lowest horizontal structural member at or above BFE. This typically means homes are 10-14 feet above grade in Tampa Bay VE zones.",
  },
  {
    question: "What can I use the space below my elevated home for?",
    answer:
      "In VE zones, the area below the BFE can only be used for parking, building access (stairs/elevator), and limited storage. Walls must be breakaway construction or open lattice. You cannot have finished living space, HVAC equipment, or electrical panels below BFE. In AE zones, you have similar restrictions but can use solid flood-vented walls rather than breakaway construction.",
  },
  {
    question: "How do flood zones affect my construction costs?",
    answer:
      "VE zone construction typically costs 20-40% more than non-flood zone construction, while AE zones add 10-20%. The primary cost drivers are deep foundations (VE), elevation requirements, breakaway construction, and utility relocation. However, building above BFE (freeboard) can reduce flood insurance premiums significantly—often paying back the extra construction cost within 5-10 years.",
  },
  {
    question: "What happens if my property is remapped to a higher-risk zone?",
    answer:
      "Existing structures are typically grandfathered under the flood zone designation in effect when they were built or substantially improved. However, if you perform substantial improvement (exceeding 50% of market value), the entire structure must be brought up to current flood code. This is a major consideration when planning renovations on older waterfront properties in Tampa Bay.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Flood Zone Ve Vs Ae Guide", href: "/flood-zone-ve-vs-ae-guide/" },
];


const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Restoration" },
  { href: "/services/disaster-recovery/fire-damage/", label: "Fire Damage Restoration" },
  { href: "/services/disaster-recovery/water-damage/", label: "Water Damage Restoration" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function FloodZoneVEvsAEGuidePage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Flood Zone Construction" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Waterfront Home Construction"
        serviceDescription="Expert flood zone construction for Tampa Bay waterfront homes. VE and AE zone compliant custom home construction with proper elevation and foundation systems."
        city="Tampa"
        minPrice="1000000"
      />

      
      <ArticleSchema
        headline="Flood Zone VE vs AE | Tampa Bay Waterfront Construction | FCS"
        description="Understanding the difference between VE and AE flood zones for Tampa Bay homeowners. Construction requirements, elevation rules, and insurance implications."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/flood-zone-ve-vs-ae-guide/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Residential", href: "/residential/" },
          { name: "Waterfront Homes", href: "/residential/waterfront-homes/" },
          { name: "Flood Zone VE vs AE", href: "/flood-zone-ve-vs-ae-guide/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hurricane-ian/hurricane-ian-large.webp"
            alt="Hurricane damage restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <BackToHub
              silo="residential"
              customHubTitle="Waterfront Homes"
              customHubHref="/residential/waterfront-homes/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Flood Zone VE vs AE: What Tampa Bay Homeowners Need to Know
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Understanding the construction requirements, costs, and insurance
              implications of FEMA flood zones for waterfront property in Tampa Bay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Discuss Your Waterfront Project
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

      {/* Zone Comparison */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            VE Zone vs AE Zone: Key Differences
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Both zones require flood-resistant construction, but VE zones have
            significantly more stringent (and costly) requirements due to wave action.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="px-4 py-3 text-left font-semibold">Feature</th>
                  <th className="px-4 py-3 text-left font-semibold">VE Zone (Coastal High Hazard)</th>
                  <th className="px-4 py-3 text-left font-semibold">AE Zone (Special Flood Hazard)</th>
                </tr>
              </thead>
              <tbody>
                {zoneComparison.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-semibold text-brand-green-dark">
                      {row.feature}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{row.veZone}</td>
                    <td className="px-4 py-3 text-gray-600">{row.aeZone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* VE Zone Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            VE Zone Construction Requirements
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            VE zones require the most robust flood-resistant construction. These
            requirements are non-negotiable for Tampa Bay barrier islands and bayfront
            properties.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {veRequirements.map((cat) => (
              <div key={cat.category} className="card p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                  <Waves className="w-6 h-6 text-brand-gold" />
                  {cat.category}
                </h3>
                <ul className="space-y-2">
                  {cat.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AE Zone Requirements */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            AE Zone Construction Requirements
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            AE zones offer more flexibility in foundation types but still require
            careful attention to elevation and flood-resistant materials.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {aeRequirements.map((cat) => (
              <div key={cat.category} className="card p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                  <Home className="w-6 h-6 text-brand-gold" />
                  {cat.category}
                </h3>
                <ul className="space-y-2">
                  {cat.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tampa Bay Zones */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Flood Zones in Tampa Bay Neighborhoods
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            General flood zone information for popular Tampa Bay waterfront areas.
            Always verify current FEMA maps for your specific property.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tampaBayZones.map((zone) => (
              <div key={zone.area} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-brand-green" />
                  <h3 className="text-lg font-bold text-brand-green-dark">{zone.area}</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Primary Zone</span>
                    <span className="font-semibold">{zone.primaryZone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Typical BFE</span>
                    <span className="font-semibold">{zone.bfe}</span>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-600 border-t pt-3">{zone.notes}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            <AlertTriangle className="w-4 h-4 inline mr-1" />
            Zone designations change. Verify with FEMA and your local building department
            before planning construction.
          </p>
        </div>
      </section>

      {/* Cost Factors */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Construction Cost Comparison
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Understanding the cost implications of flood zone construction helps with
            project budgeting and evaluating property investments.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="px-4 py-3 text-left font-semibold">Cost Factor</th>
                  <th className="px-4 py-3 text-left font-semibold">VE Zone Impact</th>
                  <th className="px-4 py-3 text-left font-semibold">AE Zone Impact</th>
                </tr>
              </thead>
              <tbody>
                {costFactors.map((row, index) => (
                  <tr
                    key={row.factor}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-semibold text-brand-green-dark">
                      {row.factor}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{row.veImpact}</td>
                    <td className="px-4 py-3 text-gray-600">{row.aeImpact}</td>
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
            Related Waterfront Construction Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/fema-50-percent-rule-explained/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                FEMA 50% Rule Explained
              </h3>
              <p className="text-gray-600 text-sm">
                Substantial improvement rules for flood zone renovations.
              </p>
            </Link>
            <Link
              href="/residential/waterfront-homes/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Waterfront Home Construction
              </h3>
              <p className="text-gray-600 text-sm">
                Custom waterfront homes throughout Tampa Bay.
              </p>
            </Link>
            <Link
              href="/luxury-custom-homes/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Luxury Custom Homes
              </h3>
              <p className="text-gray-600 text-sm">
                High-end custom home construction in Tampa.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Planning a Waterfront Home in Tampa Bay?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            FCS specializes in flood zone construction for Tampa Bay&apos;s most
            challenging waterfront sites. We understand VE and AE requirements
            and can help you navigate the complexities of coastal construction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Discuss Your Waterfront Project
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