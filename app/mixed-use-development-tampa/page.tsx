import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  CheckCircle,
  AlertTriangle,
  Home,
  ArrowRight,
  Phone,
  HelpCircle,
  Store,
  Users,
  DollarSign,
  Ruler,
  MapPin,
  Car,
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
  title: "Mixed-Use Development Construction Tampa | FCS Construction",
  description:
    "Expert mixed-use development construction in Tampa Bay. Navigate zoning, design residential-over-retail buildings, and create vibrant urban projects that maximize land value and community impact.",
  keywords:
    "mixed-use development Tampa, residential over retail Tampa Bay, urban infill construction Florida, live work buildings Tampa, mixed-use zoning Tampa, walkable development Florida",
};

const mixedUseTypes = [
  {
    type: "Vertical Mixed-Use",
    description: "Retail/commercial on ground floor with residential above",
    typical: "3-8 stories; urban locations",
    advantages: "Efficient land use; walkable; strong rent potential",
    challenges: "Complex construction; parking solutions; noise separation",
    tampaExamples: "Hyde Park Village, Channelside, Water Street",
  },
  {
    type: "Horizontal Mixed-Use",
    description: "Separate buildings with different uses on same site",
    typical: "Campus or town center developments",
    advantages: "Simpler construction; phased development possible",
    challenges: "More land required; pedestrian connectivity key",
    tampaExamples: "Westshore, International Plaza area",
  },
  {
    type: "Live-Work Units",
    description: "Combined residential and workspace in single unit",
    typical: "Townhome or loft format",
    advantages: "Flexibility; appeals to entrepreneurs; lower construction cost",
    challenges: "Limited market; zoning specificity required",
    tampaExamples: "Ybor City, emerging in Seminole Heights",
  },
  {
    type: "Mixed-Use with Hospitality",
    description: "Hotel integrated with retail, residential, or office",
    typical: "Urban core or resort areas",
    advantages: "Synergy between uses; activation at all hours",
    challenges: "Complex management; different investor profiles",
    tampaExamples: "Downtown Tampa, Sparkman Wharf area",
  },
];

const designConsiderations = [
  {
    element: "Ground Floor Activation",
    importance: "Critical for pedestrian experience and retail success",
    requirements: [
      "14-16 foot floor-to-floor height minimum",
      "70-80% glazing on street frontage",
      "Multiple tenant entrances",
      "Weather protection (awnings, arcades)",
    ],
    tampaNote: "Essential in Tampa's walkable districts",
  },
  {
    element: "Residential Entry Separation",
    importance: "Security, identity, and operational efficiency",
    requirements: [
      "Separate lobby from retail entrances",
      "Dedicated residential elevator core",
      "Mail/package room access",
      "Move-in/out logistics",
    ],
    tampaNote: "Increasingly important with package delivery volume",
  },
  {
    element: "Parking Solutions",
    importance: "Major cost driver and design constraint",
    requirements: [
      "Structured parking (podium or garage)",
      "Separate residential and retail access",
      "EV charging infrastructure",
      "Bike parking and storage",
    ],
    tampaNote: "Parking ratios vary by district; some allow reductions",
  },
  {
    element: "Acoustic Separation",
    importance: "Essential for residential livability",
    requirements: [
      "STC ratings between uses",
      "HVAC noise isolation",
      "Restaurant exhaust routing",
      "Loading dock location",
    ],
    tampaNote: "Critical when restaurants below residential",
  },
  {
    element: "Utility Metering",
    importance: "Fair allocation and tenant billing",
    requirements: [
      "Separate meters by tenant/unit",
      "Master metering with sub-metering option",
      "Grease interceptors for food service",
      "Adequate electrical capacity",
    ],
    tampaNote: "TECO requirements for master metering",
  },
];

const zoningConsiderations = [
  {
    district: "Urban Village (UV)",
    allows: "Mixed-use by right; pedestrian-oriented",
    density: "High - Up to 90 units/acre in some areas",
    parking: "Reduced requirements; shared parking allowed",
    notes: "Ideal for transit-oriented mixed-use",
  },
  {
    district: "Central Business District (CBD)",
    allows: "Most intensive mixed-use",
    density: "Very high - Limited primarily by FAR",
    parking: "Significantly reduced; payment in-lieu options",
    notes: "Downtown Tampa; height bonuses available",
  },
  {
    district: "Commercial General (CG)",
    allows: "Mixed-use with residential component",
    density: "Moderate - Varies by overlay",
    parking: "Standard requirements apply",
    notes: "Common along major corridors",
  },
  {
    district: "Planned Development (PD)",
    allows: "Negotiated based on proposal",
    density: "Negotiated - Based on community benefit",
    parking: "Negotiated - TDM plans may reduce requirements",
    notes: "Flexibility for unique projects; longer approval",
  },
];

const financingStructure = [
  {
    component: "Land Acquisition",
    typical: "10-20% of total project cost",
    financing: "Cash equity or short-term acquisition loan",
    notes: "Entitled land commands premium; consider option agreements",
  },
  {
    component: "Predevelopment",
    typical: "3-5% of total project cost",
    financing: "Developer equity; predevelopment loans available",
    notes: "At-risk capital until entitlements secured",
  },
  {
    component: "Construction Loan",
    typical: "60-75% LTC typical",
    financing: "Bank or institutional construction lender",
    notes: "Requires pre-leasing for retail; may need LP equity first",
  },
  {
    component: "Equity",
    typical: "25-40% of total project cost",
    financing: "Developer, LP investors, EB-5, Opportunity Zone funds",
    notes: "Mixed-use can attract different investor pools per component",
  },
  {
    component: "Permanent Financing",
    typical: "Refinance upon stabilization",
    financing: "Agency (Fannie/Freddie), CMBS, life company, bank",
    notes: "Residential component may qualify for agency; retail separate",
  },
];

const developmentProcess = [
  {
    phase: "Site Selection & Feasibility",
    duration: "3-6 months",
    activities: [
      "Market analysis for each use",
      "Zoning verification and entitlement path",
      "Preliminary pro forma by use type",
      "Site constraints analysis",
      "Community/political assessment",
    ],
  },
  {
    phase: "Entitlements",
    duration: "6-18 months",
    activities: [
      "Rezoning if required (PD or overlay)",
      "Site plan approval",
      "Design review (if applicable)",
      "Traffic study and mitigation",
      "Community engagement",
    ],
  },
  {
    phase: "Design Development",
    duration: "6-12 months",
    activities: [
      "Architectural design by use type",
      "MEP engineering coordination",
      "Structural design for mixed loads",
      "Parking structure integration",
      "Permitting documents",
    ],
  },
  {
    phase: "Pre-Leasing & Financing",
    duration: "6-12 months (concurrent)",
    activities: [
      "Retail tenant outreach",
      "Residential pre-leasing (if rental)",
      "Construction loan closing",
      "Equity raise completion",
      "Contractor procurement",
    ],
  },
  {
    phase: "Construction",
    duration: "18-30 months",
    activities: [
      "Site work and foundations",
      "Parking structure (if podium)",
      "Core and shell by phase",
      "Residential fit-out",
      "Retail TI coordination",
    ],
  },
  {
    phase: "Lease-Up & Stabilization",
    duration: "12-24 months",
    activities: [
      "Phased occupancy",
      "Property management transition",
      "Retail grand openings",
      "Residential lease-up marketing",
      "Stabilization for permanent financing",
    ],
  },
];

const faqs = [
  {
    question: "What makes mixed-use development more complex than single-use?",
    answer:
      "Mixed-use complexity comes from multiple sources: different building codes apply to different uses (residential vs. commercial occupancy, fire separation requirements), each use has different structural loads and floor heights, MEP systems must serve different needs (residential HVAC vs. retail, grease traps, exhaust), financing requires satisfying lenders/investors with different risk profiles, operations require managing different tenant types with different expectations, and leasing timelines differ (retail often pre-leased while residential leases up post-completion). These complexities require experienced architects, contractors, and property managers who understand how to integrate multiple uses successfully.",
  },
  {
    question: "What retail tenants work best in mixed-use?",
    answer:
      "Successful ground-floor retail in mixed-use typically includes: service-oriented businesses (dry cleaners, salons, fitness, medical) that benefit from residential traffic, food and beverage (restaurants, cafes, wine bars) that activate the street, daily needs retail (grocery, pharmacy, convenience) that draws repeat visits, and professional services (coworking, real estate, financial) with predictable hours. Avoid uses that conflict with residential: loud late-night entertainment, heavy truck deliveries, and strong odors without proper ventilation. The best tenant mix creates synergy—residents patronize ground-floor businesses, and active retail makes the residential more desirable.",
  },
  {
    question: "How do parking requirements work for mixed-use?",
    answer:
      "Mixed-use often qualifies for reduced parking through shared parking analysis. The concept: residential parking demand peaks overnight while retail peaks during business hours, so the same spaces can serve both uses. Tampa allows shared parking reductions in certain districts with supporting study. Strategies include: structured parking (podium or wrapped garage) to minimize land use, unbundled parking (sold/rented separately from units) to right-size supply, partnership with adjacent uses for overflow, transit-oriented development reductions in eligible areas, and payment in-lieu options in downtown. Parking is often the single largest cost driver in mixed-use—creative solutions significantly impact project feasibility.",
  },
  {
    question: "What are the key success factors for mixed-use in Tampa?",
    answer:
      "Tampa mixed-use success factors include: location in established or emerging walkable districts (Hyde Park, Channel District, Water Street, Seminole Heights), ground-floor retail sized appropriately for market (often smaller tenants, not big-box), residential product matching area demographics (luxury downtown, workforce near employment), adequate parking without overwhelming the site, strong pedestrian connections to surroundings, and experienced property management handling diverse tenant needs. Projects that try to force mixed-use in auto-oriented locations or with inappropriate retail sizing often struggle. Tampa's most successful mixed-use developments are in or adjacent to established urban districts with existing pedestrian traffic.",
  },
  {
    question: "How does mixed-use financing differ from single-use?",
    answer:
      "Mixed-use financing is more complex because each component has different risk/return profiles. Residential components may qualify for agency financing (Fannie/Freddie) with favorable terms, while retail components typically require CMBS or bank financing at higher rates. During construction, lenders want to see pre-leasing for retail (often 50%+) while residential can lease up post-completion. Some lenders prefer horizontal condominiumization—legally separating uses so each can be financed independently. Equity investors may also prefer to invest in specific components rather than the whole. The development entity structure must accommodate these different capital sources while maintaining operational integration.",
  },
  {
    question: "What special construction considerations apply to mixed-use?",
    answer:
      "Mixed-use construction considerations include: different floor-to-floor heights (retail typically 14-16 feet, residential 9-10 feet), transfer structures where residential columns don't align with retail layout, acoustic separation requiring specialized assemblies between uses, separate egress and circulation for residential vs. commercial, grease interceptors and exhaust systems for food service, and MEP coordination with different system types per use. Construction sequencing matters: parking structures and retail shell typically complete first, allowing residential construction above while retail TI happens concurrently. Material handling logistics become complex on tight urban sites. Experienced mixed-use contractors build these considerations into their planning and pricing.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Mixed Use Development Tampa", href: "/mixed-use-development-tampa/" },
];


const internalLinks = [
  { href: "/services/", label: "Our Construction Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/residential/", label: "Residential Construction" },
  { href: "/about/", label: "About Florida Construction Specialists" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function MixedUseDevelopmentTampaPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Mixed-Use Development Construction" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Mixed-Use Construction Services"
        serviceDescription="Expert mixed-use development construction in Tampa Bay. Residential-over-retail buildings, urban infill, and walkable developments that maximize land value and community impact."
        city="Tampa"
        minPrice="5000000"
      />

      
      <ArticleSchema
        headline="Mixed-Use Development Construction Tampa | FCS Construction"
        description="Expert mixed-use development construction in Tampa Bay. Navigate zoning, design residential-over-retail buildings, and create vibrant urban projects that maximize land value and community impact."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/mixed-use-development-tampa/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Commercial", href: "/commercial/" },
          { name: "Development", href: "/commercial/" },
          { name: "Mixed-Use", href: "/mixed-use-development-tampa/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-large.webp"
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
              silo="commercial"
              customHubTitle="Commercial Construction"
              customHubHref="/commercial/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Mixed-Use Development Construction
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Create vibrant urban places that combine residential, retail, and
              commercial uses in Tampa Bay's most dynamic neighborhoods. Expert
              guidance from concept through construction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Discuss Your Project
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

      {/* Mixed-Use Types */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Types of Mixed-Use Development
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Different formats for combining uses in a single development.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {mixedUseTypes.map((type) => (
              <div key={type.type} className="card p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-2">
                  {type.type}
                </h3>
                <p className="text-gray-600 mb-3">{type.description}</p>
                <p className="text-sm text-brand-gold-dark mb-3">
                  <strong>Typical:</strong> {type.typical}
                </p>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-green-50 rounded-lg p-3">
                    <span className="text-xs font-semibold text-green-600 block mb-1">Advantages</span>
                    <p className="text-gray-600 text-sm">{type.advantages}</p>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3">
                    <span className="text-xs font-semibold text-yellow-600 block mb-1">Challenges</span>
                    <p className="text-gray-600 text-sm">{type.challenges}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  <strong>Tampa Examples:</strong> {type.tampaExamples}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Considerations */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Design Considerations
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Key elements that make mixed-use developments successful.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designConsiderations.map((item) => (
              <div key={item.element} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  {item.element}
                </h3>
                <p className="text-brand-gold-dark text-sm font-medium mb-3">
                  {item.importance}
                </p>
                <ul className="space-y-2 mb-3">
                  {item.requirements.map((req, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 bg-gray-50 rounded p-2">
                  <strong>Tampa Note:</strong> {item.tampaNote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zoning */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Tampa Zoning for Mixed-Use
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Understanding zoning districts that accommodate mixed-use development.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="px-4 py-3 text-left font-semibold">District</th>
                  <th className="px-4 py-3 text-left font-semibold">Allows</th>
                  <th className="px-4 py-3 text-center font-semibold">Density</th>
                  <th className="px-4 py-3 text-left font-semibold">Parking</th>
                  <th className="px-4 py-3 text-left font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {zoningConsiderations.map((zone, index) => (
                  <tr
                    key={zone.district}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-4 font-semibold text-brand-green-dark">
                      {zone.district}
                    </td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{zone.allows}</td>
                    <td className="px-4 py-4 text-center text-sm">{zone.density}</td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{zone.parking}</td>
                    <td className="px-4 py-4 text-gray-500 text-sm">{zone.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Mixed-Use Development Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From site selection through stabilization.
          </p>
          <div className="max-w-4xl mx-auto space-y-4">
            {developmentProcess.map((phase, index) => (
              <div
                key={phase.phase}
                className="bg-white rounded-xl p-6 shadow-md border-l-4 border-brand-green"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-brand-green-dark">
                        {phase.phase}
                      </h3>
                      <span className="text-sm font-medium text-brand-gold bg-brand-gold-light/30 px-3 py-1 rounded-full">
                        {phase.duration}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-2">
                      {phase.activities.map((activity, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Structure */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Financing Structure
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Capital stack components for mixed-use development.
          </p>
          <div className="overflow-x-auto max-w-4xl mx-auto">
            <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-brand-gold text-white">
                  <th className="px-4 py-3 text-left font-semibold">Component</th>
                  <th className="px-4 py-3 text-center font-semibold">Typical %</th>
                  <th className="px-4 py-3 text-left font-semibold">Financing Source</th>
                  <th className="px-4 py-3 text-left font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {financingStructure.map((item, index) => (
                  <tr
                    key={item.component}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-4 font-semibold text-brand-green-dark">
                      {item.component}
                    </td>
                    <td className="px-4 py-4 text-center text-brand-gold-dark font-medium">
                      {item.typical}
                    </td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{item.financing}</td>
                    <td className="px-4 py-4 text-gray-500 text-sm">{item.notes}</td>
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
            Related Development Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/multi-family-flood-zone-construction/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Multi-Family Flood Zones
              </h3>
              <p className="text-gray-600 text-sm">
                Navigate flood requirements for residential components.
              </p>
            </Link>
            <Link
              href="/industrial-flex-space-development/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Flex Space Development
              </h3>
              <p className="text-gray-600 text-sm">
                Versatile commercial development options.
              </p>
            </Link>
            <Link
              href="/commercial/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Commercial Services
              </h3>
              <p className="text-gray-600 text-sm">
                Full range of commercial construction capabilities.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Planning a Mixed-Use Development?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            FCS brings together the expertise needed for successful mixed-use projects
            in Tampa Bay—from navigating complex zoning to coordinating construction
            of multiple use types under one roof.
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