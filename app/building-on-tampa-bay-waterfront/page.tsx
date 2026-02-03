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
  Anchor,
  TreeDeciduous,
  DollarSign,
  Ruler,
  Home,
  Wind,
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
  title: "Tampa Bay Waterfront Custom Homes | FCS",
  description:
    "Expert waterfront home construction on Tampa Bay. Navigate flood zones, seawall requirements, SWFWMD permits, and marine construction challenges for your dream waterfront property.",
  keywords:
    "waterfront home construction Tampa Bay, building on water Tampa, seawall construction Tampa, SWFWMD permits, flood zone construction waterfront, Tampa Bay custom homes",
};

const waterfrontChallenges = [
  {
    challenge: "Flood Zone Requirements",
    description: "Most Tampa Bay waterfront is in VE or AE flood zones",
    solutions: [
      "Elevated construction on pilings",
      "Breakaway walls below BFE",
      "Flood-resistant materials throughout",
      "Proper flood venting systems",
    ],
    costImpact: "+25-50% vs. non-waterfront",
  },
  {
    challenge: "Wind Load Design",
    description: "Coastal exposure requires enhanced wind resistance",
    solutions: [
      "Miami-Dade rated windows/doors",
      "Enhanced roof tie-downs",
      "Structural steel connections",
      "Impact-resistant glazing",
    ],
    costImpact: "+$15,000-50,000 for windows/doors",
  },
  {
    challenge: "Saltwater Corrosion",
    description: "Marine environment accelerates material deterioration",
    solutions: [
      "Stainless steel or hot-dip galvanized hardware",
      "Marine-grade exterior finishes",
      "Concrete cover requirements",
      "Corrosion-resistant reinforcement",
    ],
    costImpact: "+$5-15/SF material premium",
  },
  {
    challenge: "Seawall/Shoreline",
    description: "Water access requires permitted structures",
    solutions: [
      "Seawall repair or replacement",
      "Living shoreline alternatives",
      "Dock and boat lift permits",
      "Riprap and erosion control",
    ],
    costImpact: "$300-800/linear foot for seawall",
  },
  {
    challenge: "Environmental Permits",
    description: "Waterfront disturbs regulated areas",
    solutions: [
      "SWFWMD ERP permit",
      "USACE permits if navigable waters",
      "Manatee protection plans",
      "Seagrass surveys and mitigation",
    ],
    costImpact: "$5,000-50,000+ permit costs",
  },
];

const permittingAgencies = [
  {
    agency: "SWFWMD (Southwest Florida Water Management District)",
    jurisdiction: "Wetlands, stormwater, water resources",
    permits: [
      "Environmental Resource Permit (ERP)",
      "Wetland impacts and mitigation",
      "Stormwater management",
    ],
    timeline: "60-120 days standard; 30 days for minor work",
    tips: "Pre-application meetings recommended for complex sites",
  },
  {
    agency: "USACE (Army Corps of Engineers)",
    jurisdiction: "Navigable waters and wetlands",
    permits: [
      "Section 10 permits (structures in navigable waters)",
      "Section 404 permits (dredge and fill)",
      "Nationwide permits for minor work",
    ],
    timeline: "60-180 days depending on complexity",
    tips: "Often concurrent with SWFWMD; may require additional review",
  },
  {
    agency: "FDEP (Florida Department of Environmental Protection)",
    jurisdiction: "Coastal construction, submerged lands",
    permits: [
      "Coastal Construction Control Line (CCCL) permits",
      "Submerged lands authorization",
      "Sovereign submerged lands lease",
    ],
    timeline: "90-180 days for CCCL; varies for others",
    tips: "Required for work seaward of CCCL line",
  },
  {
    agency: "FWC (Florida Fish and Wildlife)",
    jurisdiction: "Protected species and marine resources",
    permits: [
      "Manatee protection plans",
      "Sea turtle lighting requirements",
      "Marine mammal consultation",
    ],
    timeline: "Concurrent with other permits",
    tips: "Standard conditions often apply; specific plans for sensitive areas",
  },
  {
    agency: "Local Building Department",
    jurisdiction: "Building code compliance, flood regulations",
    permits: [
      "Building permit",
      "Floodplain development permit",
      "Seawall permit",
    ],
    timeline: "4-12 weeks standard",
    tips: "Coordinates with FEMA flood requirements",
  },
];

const constructionMethods = [
  {
    method: "Deep Pile Foundation",
    description: "Concrete or steel piles driven to bearing stratum",
    bestFor: "VE zones, poor soil, large homes",
    advantages: [
      "Exceeds flood requirements",
      "Handles wave action",
      "Long-term stability",
      "Space below for parking/storage",
    ],
    considerations: [
      "Highest cost foundation",
      "Requires specialized equipment",
      "Noise during installation",
      "Engineering critical",
    ],
  },
  {
    method: "Auger Cast Piles",
    description: "Drilled and grouted concrete piles",
    bestFor: "AE zones, moderate loads",
    advantages: [
      "Less vibration than driven",
      "Good for sandy soils",
      "Moderate cost",
      "Quieter installation",
    ],
    considerations: [
      "Not for high wave zones",
      "Soil testing essential",
      "Limited bearing capacity",
    ],
  },
  {
    method: "Elevated Slab on Grade",
    description: "Fill and stem wall to elevate above BFE",
    bestFor: "AE zones with fill permitted",
    advantages: [
      "Traditional construction above",
      "Lower structural cost",
      "Standard finishes work",
    ],
    considerations: [
      "Requires significant fill",
      "Environmental permits for fill",
      "Not for VE zones",
    ],
  },
  {
    method: "Helical Pier System",
    description: "Screw-in steel piers for elevation",
    bestFor: "Smaller structures, limited access",
    advantages: [
      "Quick installation",
      "Minimal site disturbance",
      "Works in tight areas",
      "No cure time",
    ],
    considerations: [
      "Limited to lighter loads",
      "Corrosion protection critical",
      "May not meet VE requirements",
    ],
  },
];

const seawallOptions = [
  {
    type: "Concrete Seawall",
    description: "Traditional vertical concrete wall",
    lifespan: "50+ years with maintenance",
    cost: "$500-800/linear foot",
    pros: ["Durable", "Maximum usable waterfront", "Boat access friendly"],
    cons: ["Environmental concerns", "No wave attenuation", "Permits harder"],
  },
  {
    type: "Vinyl Sheet Pile",
    description: "Interlocking vinyl panels",
    lifespan: "30-50 years",
    cost: "$300-500/linear foot",
    pros: ["Corrosion-proof", "Faster installation", "Lower cost"],
    cons: ["Less rigid", "Can't handle heavy loads", "UV degradation"],
  },
  {
    type: "Riprap/Rock Revetment",
    description: "Sloped rock shoreline stabilization",
    lifespan: "25-50 years",
    cost: "$200-400/linear foot",
    pros: ["Natural appearance", "Habitat creation", "Easier permits"],
    cons: ["Takes waterfront space", "Boat access limited", "Maintenance needed"],
  },
  {
    type: "Living Shoreline",
    description: "Natural materials, plants, and oyster reefs",
    lifespan: "Permanent if established",
    cost: "$150-400/linear foot",
    pros: ["Environmental benefits", "Permit advantages", "Self-maintaining"],
    cons: ["Takes 1-3 years to establish", "Not for high-energy sites", "Limited boat access"],
  },
];

const designConsiderations = [
  {
    element: "Elevation & Views",
    details: "Balance flood requirements with view preservation",
    recommendations: [
      "Main living on elevated level for views",
      "Ground level for garage, utility, guest",
      "Outdoor living spaces at multiple levels",
      "Window placement for water views",
    ],
  },
  {
    element: "Storm Protection",
    details: "Design for hurricane resilience",
    recommendations: [
      "Impact-rated windows on all water-facing",
      "Hip roof design for wind resistance",
      "Hurricane shutters or impact glass",
      "Safe room or reinforced interior",
    ],
  },
  {
    element: "Outdoor Living",
    details: "Maximize waterfront enjoyment",
    recommendations: [
      "Covered outdoor kitchen/living",
      "Pool with bay views",
      "Dock access and boat lift",
      "Fire pit or entertainment areas",
    ],
  },
  {
    element: "Materials Selection",
    details: "Marine environment durability",
    recommendations: [
      "Fiber cement or masonry siding",
      "Stainless steel hardware throughout",
      "Marine-grade exterior paint",
      "Composite or Ipe decking",
    ],
  },
  {
    element: "Mechanical Systems",
    details: "Protect from flooding and salt",
    recommendations: [
      "Elevated HVAC equipment",
      "Marine-rated electrical components",
      "Sealed and vented utility rooms",
      "Backup generator system",
    ],
  },
];

const tampaBayWaterfrontAreas = [
  {
    area: "Davis Islands",
    characteristics: "Established waterfront community, larger lots",
    typical: "1950s-2020s homes, mix of original and new",
    challenges: "Historic district portions, older seawalls",
    priceRange: "$1.5M-10M+",
  },
  {
    area: "Bayshore Boulevard",
    characteristics: "Iconic Tampa waterfront, varying lot sizes",
    typical: "Historic to modern, condos to estates",
    challenges: "Traffic, historic districts, mixed development",
    priceRange: "$800K-5M+ (single family)",
  },
  {
    area: "Apollo Beach/Ruskin",
    characteristics: "Newer developments, canal and open water",
    typical: "2000s-present construction, planned communities",
    challenges: "Manatee zones, newer infrastructure",
    priceRange: "$500K-2M",
  },
  {
    area: "Safety Harbor/Clearwater",
    characteristics: "Old Tampa Bay waterfront",
    typical: "Mix of eras, various lot sizes",
    challenges: "Water depth, seagrass beds, older seawalls",
    priceRange: "$700K-3M",
  },
  {
    area: "Shore Acres/Snell Isle",
    characteristics: "St. Pete waterfront neighborhoods",
    typical: "1950s-present, many teardowns/rebuilds",
    challenges: "Flood zones, neighborhood guidelines",
    priceRange: "$800K-4M",
  },
];

const faqs = [
  {
    question: "How much more does waterfront construction cost?",
    answer:
      "Waterfront construction on Tampa Bay typically costs 25-75% more than comparable inland construction. The premium comes from: elevated foundation systems ($50,000-200,000+ for piles), flood-resistant construction requirements, enhanced wind load design, marine-grade materials and finishes, seawall repair or construction ($300-800/linear foot), environmental permits and mitigation ($5,000-50,000+), and specialized waterfront features like docks. A 4,000 SF waterfront home that might cost $300/SF inland could cost $400-500/SF or more on the water. Budget an additional $200,000-500,000 beyond land cost for waterfront-specific construction requirements on a typical custom home.",
  },
  {
    question: "Can I build a dock or boat lift?",
    answer:
      "Yes, but permits are required. Dock and boat lift construction requires: SWFWMD Environmental Resource Permit (or exemption for minor work), FDEP authorization if over submerged lands, local building permit, and potentially USACE permit for navigable waters. Standard residential docks under 1,000 SF with no dredging often qualify for exemptions or general permits. Larger structures, commercial uses, or sites with seagrass require individual permits. Manatee protection conditions apply in most Tampa Bay waters, including specific in-water work windows (no work November 15 - March 31 in many areas). Existing dock rights and riparian access should be verified before purchasing waterfront property.",
  },
  {
    question: "What flood zone are most Tampa Bay waterfront properties in?",
    answer:
      "Most Tampa Bay waterfront is in FEMA Zone VE (Coastal High Hazard) or Zone AE. VE zones have the strictest requirements: buildings must be elevated on pilings or columns with the lowest horizontal structural member at or above Base Flood Elevation, and no enclosed space is permitted below BFE except for breakaway walls. Zone AE allows more construction flexibility but still requires elevation to BFE. The specific zone and BFE for your property can be found on FEMA Flood Insurance Rate Maps. Many Tampa Bay waterfront properties have BFEs of 12-16 feet NAVD, meaning the first floor may need to be 15-20+ feet above grade after adding local freeboard requirements.",
  },
  {
    question: "What is the timeline for waterfront home construction?",
    answer:
      "Waterfront construction takes significantly longer than inland projects. Typical timeline: Environmental permits (SWFWMD, USACE, FDEP) take 3-8 months depending on site complexity. Building permits add 2-4 months. Site preparation including seawall work can take 2-4 months. Main construction takes 12-18 months for a custom home. Total: 18-30 months from start to finish is common. The permitting phase is the biggest variable—simple sites with existing seawalls and no wetland impacts permit faster, while sites requiring mitigation, seagrass surveys, or contested environmental features can take years. Starting environmental due diligence before purchasing can save significant time.",
  },
  {
    question: "Do I need to replace an old seawall before building?",
    answer:
      "Seawall condition should be evaluated by a marine contractor before any waterfront construction. Old seawalls (30+ years) may need replacement or major repair. Factors to consider: structural integrity (tilting, cracking, cap deterioration), tie-back condition and embedment depth, whether it meets current permit standards, relationship to your construction (vibration from pile driving can damage old seawalls), and insurance requirements. Seawall replacement costs $400-800 per linear foot for concrete. Many lenders and insurers require seawall inspection before financing waterfront construction. Building a new home behind a failing seawall is poor planning—budget for seawall work as part of your project.",
  },
  {
    question: "What environmental permits do I need for waterfront construction?",
    answer:
      "At minimum, most Tampa Bay waterfront construction requires: SWFWMD Environmental Resource Permit (ERP) for stormwater and any wetland/waterbody impacts, FDEP Coastal Construction Control Line (CCCL) permit if work is seaward of the CCCL line, local floodplain development permit, and FWC manatee protection plan compliance. Sites with seagrass, mangroves, salt marsh, or other sensitive habitats require additional review and often mitigation. USACE Section 10/404 permits are required for work in navigable waters. Pre-purchase environmental due diligence should identify regulated areas on site. Environmental consultants can provide wetland delineation and permit pathway analysis before you commit to a property.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Building On Tampa Bay Waterfront", href: "/building-on-tampa-bay-waterfront/" },
];


const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/services/residential/waterfront-homes/", label: "Waterfront Home Construction" },
  { href: "/services/residential/home-additions/", label: "Home Additions" },
  { href: "/services/residential/hurricane-resistant-construction/", label: "Hurricane-Resistant Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const relatedArticles = [
  {
    "title": "Living Shoreline vs Seawall",
    "href": "/living-shoreline-vs-seawall/",
    "description": "Comparing natural and hardened shoreline protection approaches."
  },
  {
    "title": "Flood Zone VE vs AE Guide",
    "href": "/flood-zone-ve-vs-ae-guide/",
    "description": "Understanding flood zone designations and construction requirements."
  },
  {
    "title": "Breakaway Wall Construction Requirements",
    "href": "/breakaway-wall-construction-requirements/",
    "description": "Building flood-compliant structures in coastal high hazard areas."
  },
  {
    "title": "Marine Grade Building Materials Guide",
    "href": "/marine-grade-building-materials-guide/",
    "description": "Selecting materials that withstand coastal conditions."
  }
];

export default function BuildingOnTampaBayWaterfrontPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Waterfront Home Construction" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Tampa Bay Waterfront Home Building"
        serviceDescription="Expert waterfront home construction on Tampa Bay. Navigate flood zones, environmental permits, and marine construction challenges for your custom waterfront property."
        city="Tampa"
        minPrice="1000000"
      />
      <ArticleSchema
        headline="Building on Tampa Bay Waterfront | Custom Home Construction"
        description="Expert waterfront home construction on Tampa Bay. Navigate flood zones, seawall requirements, SWFWMD permits, and marine construction challenges for your dream waterfront property."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/building-on-tampa-bay-waterfront/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Residential", href: "/residential/" },
          { name: "Custom Homes", href: "/residential/luxury-home-building/" },
          { name: "Waterfront Construction", href: "/building-on-tampa-bay-waterfront/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/custom-home-1/custom-home-1-display.webp"
            alt="Luxury custom home construction"
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
              customHubTitle="Custom Home Building"
              customHubHref="/residential/luxury-home-building/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Building on Tampa Bay Waterfront
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Your comprehensive guide to waterfront home construction on Tampa Bay.
              Navigate flood zones, environmental permits, seawall requirements,
              and marine construction challenges.
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

      {/* Waterfront Challenges */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Waterfront Construction Challenges
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Building on Tampa Bay requires addressing these unique challenges.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {waterfrontChallenges.map((challenge) => (
              <div key={challenge.challenge} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-brand-green-dark">
                    {challenge.challenge}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{challenge.description}</p>
                <div className="space-y-2 mb-4">
                  {challenge.solutions.map((solution, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{solution}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-brand-gold-light/30 rounded-lg p-2 text-center">
                  <span className="text-sm font-medium text-brand-gold-dark">
                    Cost Impact: {challenge.costImpact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Permitting Agencies */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Permitting Agencies & Requirements
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Multiple agencies have jurisdiction over Tampa Bay waterfront construction.
          </p>
          <div className="space-y-6">
            {permittingAgencies.map((agency) => (
              <div key={agency.agency} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark">
                      {agency.agency}
                    </h3>
                    <p className="text-brand-gold-dark text-sm">{agency.jurisdiction}</p>
                  </div>
                  <span className="text-sm bg-brand-green-light/50 text-brand-green-dark px-3 py-1 rounded-full whitespace-nowrap">
                    {agency.timeline}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Permits Required</h4>
                    <ul className="space-y-1">
                      {agency.permits.map((permit, i) => (
                        <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                          {permit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-brand-gold-light/20 rounded-lg p-3">
                    <h4 className="font-semibold text-brand-gold-dark mb-1 text-sm">Pro Tip</h4>
                    <p className="text-gray-600 text-sm">{agency.tips}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Methods */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Foundation & Construction Methods
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose the right construction approach for your waterfront site.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {constructionMethods.map((method) => (
              <div key={method.method} className="card p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-2">
                  {method.method}
                </h3>
                <p className="text-gray-600 mb-2">{method.description}</p>
                <p className="text-sm text-brand-gold-dark font-medium mb-4">
                  Best For: {method.bestFor}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-3">
                    <h4 className="text-xs font-semibold text-green-600 mb-2">Advantages</h4>
                    <ul className="space-y-1">
                      {method.advantages.map((adv, i) => (
                        <li key={i} className="text-gray-600 text-xs flex items-start gap-1">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                          {adv}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3">
                    <h4 className="text-xs font-semibold text-yellow-600 mb-2">Considerations</h4>
                    <ul className="space-y-1">
                      {method.considerations.map((con, i) => (
                        <li key={i} className="text-gray-600 text-xs flex items-start gap-1">
                          <AlertTriangle className="w-3 h-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                          {con}
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

      {/* Seawall Options */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Seawall & Shoreline Options
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Protect your waterfront investment with the right shoreline solution.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="px-4 py-3 text-left font-semibold">Type</th>
                  <th className="px-4 py-3 text-center font-semibold">Lifespan</th>
                  <th className="px-4 py-3 text-center font-semibold">Cost/LF</th>
                  <th className="px-4 py-3 text-left font-semibold">Pros</th>
                  <th className="px-4 py-3 text-left font-semibold">Cons</th>
                </tr>
              </thead>
              <tbody>
                {seawallOptions.map((option, index) => (
                  <tr
                    key={option.type}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-4">
                      <span className="font-semibold text-brand-green-dark">{option.type}</span>
                      <p className="text-xs text-gray-500 mt-1">{option.description}</p>
                    </td>
                    <td className="px-4 py-4 text-center text-sm">{option.lifespan}</td>
                    <td className="px-4 py-4 text-center text-brand-gold-dark font-medium text-sm">
                      {option.cost}
                    </td>
                    <td className="px-4 py-4">
                      <ul className="space-y-1">
                        {option.pros.map((pro, i) => (
                          <li key={i} className="text-gray-600 text-xs flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-4 py-4">
                      <ul className="space-y-1">
                        {option.cons.map((con, i) => (
                          <li key={i} className="text-gray-600 text-xs flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3 text-yellow-500" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tampa Bay Areas */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Tampa Bay Waterfront Areas
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Each area has unique characteristics and challenges.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tampaBayWaterfrontAreas.map((area) => (
              <div key={area.area} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-2">
                  {area.area}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{area.characteristics}</p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">
                    <strong>Typical:</strong> {area.typical}
                  </p>
                  <p className="text-gray-600">
                    <strong>Challenges:</strong> {area.challenges}
                  </p>
                  <p className="text-brand-gold-dark font-medium">
                    Price Range: {area.priceRange}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Considerations */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Waterfront Design Considerations
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Design your waterfront home to maximize views and withstand the elements.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {designConsiderations.map((item) => (
              <div key={item.element} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  {item.element}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.details}</p>
                <ul className="space-y-2">
                  {item.recommendations.map((rec, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                      {rec}
                    </li>
                  ))}
                </ul>
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
            Related Waterfront Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/flood-zone-ve-vs-ae-construction/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                VE vs AE Flood Zones
              </h3>
              <p className="text-gray-600 text-sm">
                Detailed comparison of coastal flood zone requirements.
              </p>
            </Link>
            <Link
              href="/living-shoreline-vs-seawall/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Living Shoreline vs Seawall
              </h3>
              <p className="text-gray-600 text-sm">
                Compare shoreline protection options.
              </p>
            </Link>
            <Link
              href="/residential/luxury-home-building/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Custom Home Building
              </h3>
              <p className="text-gray-600 text-sm">
                Full custom home building services.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-gold">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Ready to Build Your Waterfront Dream Home?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            FCS has built custom homes throughout Tampa Bay's waterfront communities.
            From navigating environmental permits to constructing hurricane-resistant
            structures, we guide you through every step of waterfront construction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Start Your Project
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