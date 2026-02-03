import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { Phone, CheckCircle, Building2, Home, Users, DollarSign, HelpCircle, AlertTriangle, Clock, MapPin, Shield } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";
import { RelatedArticles } from "@/components/RelatedArticles";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Commercial Housing Complexes Florida | Multi-Family",
  description: "Key considerations for building commercial housing complexes in Florida. Site selection, zoning, construction types, costs, and regulations for multi-family development in Tampa Bay.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Building Commercial Housing Complexes", href: "/key-considerations-for-building-commercial-housing-complexes/" },
];

const internalLinks = [
  { href: "/multi-family-construction-services/", label: "Multi-Family Construction" },
  { href: "/condo-common-area-construction/", label: "Condo Common Areas" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/commercial/design-build/", label: "Design-Build Services" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const relatedArticles = [
  {
    "title": "Mastering Commercial Construction Design in Florida",
    "href": "/mastering-commercial-construction-design-in-florida/",
    "description": "Learn the ins and outs of architectural design and commercial building design with our comprehensive guide for Florida projects."
  },
  {
    "title": "Benefits of Design-Build for Commercial Projects",
    "href": "/benefits-of-design-build-construction-for-commercial-project/",
    "description": "Discover how design-build delivery streamlines commercial construction with single-source accountability."
  },
  {
    "title": "Commercial Construction Budgeting Tips",
    "href": "/commercial-construction-budgeting-tips-for-florida-specialists/",
    "description": "Expert strategies for developing and managing budgets for commercial construction in Florida."
  },
  {
    "title": "Tips for Commercial Renovation in Florida",
    "href": "/tips-for-commercial-renovation-in-florida/",
    "description": "Key considerations for successful commercial renovation projects in the Sunshine State."
  }
];

const housingTypes = [
  {
    type: "Garden-Style Apartments",
    stories: "2-3 stories",
    density: "15-25 units/acre",
    construction: "Wood-frame typical",
    parking: "Surface lots",
    costRange: "$150-220/SF",
    bestFor: "Suburban locations, workforce housing, value-oriented communities",
  },
  {
    type: "Mid-Rise Apartments",
    stories: "4-7 stories",
    density: "40-80 units/acre",
    construction: "Wood over podium or all concrete",
    parking: "Structured or podium",
    costRange: "$220-350/SF",
    bestFor: "Urban/suburban infill, amenity-focused communities",
  },
  {
    type: "High-Rise Apartments/Condos",
    stories: "8+ stories",
    density: "80-150+ units/acre",
    construction: "Concrete and steel",
    parking: "Structured, often below-grade",
    costRange: "$350-550/SF",
    bestFor: "Urban cores, waterfront, luxury markets",
  },
  {
    type: "Townhome Communities",
    stories: "2-3 stories",
    density: "10-20 units/acre",
    construction: "Wood-frame typical",
    parking: "Attached garages",
    costRange: "$130-200/SF",
    bestFor: "For-sale product, family-oriented, suburban",
  },
  {
    type: "Active Adult (55+)",
    stories: "1-4 stories",
    density: "8-40 units/acre",
    construction: "Varies by product",
    parking: "Surface or garage",
    costRange: "$150-280/SF",
    bestFor: "Age-restricted communities, amenity-heavy",
  },
];

const siteConsiderations = [
  {
    factor: "Zoning & Entitlements",
    critical: true,
    considerations: [
      "Permitted density (units/acre)",
      "Height limitations",
      "Parking requirements",
      "Affordable housing mandates",
      "Development agreement requirements",
    ],
    tampa: "Many sites require PD rezoning; affordable requirements in some jurisdictions",
  },
  {
    factor: "Site Size & Configuration",
    critical: true,
    considerations: [
      "Minimum 3-5 acres for garden; less for mid/high-rise",
      "Shape affects unit yield and parking",
      "Frontage impacts access and visibility",
      "Room for amenities and open space",
      "Expansion potential",
    ],
    tampa: "Premium for sites that can accommodate 200+ units for operational efficiency",
  },
  {
    factor: "Access & Connectivity",
    critical: false,
    considerations: [
      "Road access (may need turn lanes)",
      "Public transit proximity",
      "Proximity to employment centers",
      "Schools, shopping, services nearby",
      "Walk/bike infrastructure",
    ],
    tampa: "Transit proximity increasingly important; employment center access key",
  },
  {
    factor: "Environmental & Geotechnical",
    critical: true,
    considerations: [
      "Flood zone designation (insurance implications)",
      "Wetlands and buffers",
      "Soil conditions for foundations",
      "Environmental contamination history",
      "Protected species/habitat",
    ],
    tampa: "Significant wetlands in many areas; limestone creates foundation considerations",
  },
  {
    factor: "Utilities & Infrastructure",
    critical: true,
    considerations: [
      "Water and sewer capacity",
      "Electric capacity for 200+ units",
      "Stormwater management capacity",
      "Internet/telecom infrastructure",
      "Impact fee structures",
    ],
    tampa: "Impact fees substantial ($8,000-15,000/unit in some areas)",
  },
];

const constructionTypes = [
  {
    type: "Type V (Wood-Frame)",
    description: "Wood structural elements throughout",
    heightLimit: "Up to 4 stories (85 feet with sprinklers)",
    cost: "$140-200/SF",
    advantages: "Lowest cost; fastest construction; familiar to subcontractors",
    disadvantages: "Height limits; fire concerns during construction; insurance",
    bestFor: "Garden-style apartments, townhomes, suburban markets",
  },
  {
    type: "Type III (Wood over Podium)",
    description: "Wood-frame above concrete podium (ground floor)",
    heightLimit: "Up to 5 stories wood + 1-2 story podium",
    cost: "$200-280/SF",
    advantages: "Higher density; podium parking; retail/commercial compatible",
    disadvantages: "More complex; longer timeline; higher cost",
    bestFor: "Mid-rise urban, mixed-use developments",
  },
  {
    type: "Type I/II (Concrete/Steel)",
    description: "Non-combustible construction throughout",
    heightLimit: "Unlimited with proper design",
    cost: "$280-450/SF",
    advantages: "No height limit; superior durability; hurricane resistance",
    disadvantages: "Highest cost; longest timeline; specialized contractors",
    bestFor: "High-rise, waterfront, luxury, hurricane zones",
  },
];

const amenityConsiderations = [
  {
    category: "Community Amenities",
    standard: ["Clubhouse/leasing center", "Pool", "Fitness center", "Business center"],
    premium: ["Resort-style pool with cabanas", "Co-working spaces", "Pet spa", "Rooftop deck"],
    cost: "Standard: $15-25/SF of building; Premium: $25-50/SF",
  },
  {
    category: "Unit Amenities",
    standard: ["Washer/dryer connections", "Patio/balcony", "Walk-in closets", "Kitchen islands"],
    premium: ["Full-size W/D included", "Smart home technology", "Premium finishes", "Built-in storage"],
    cost: "Premium upgrades: $3,000-8,000/unit",
  },
  {
    category: "Site Amenities",
    standard: ["Playground", "Dog park", "Package lockers", "Bike storage"],
    premium: ["Trail/walking paths", "Outdoor kitchen", "Fire pits", "Sports courts"],
    cost: "Site amenities: $5,000-15,000/unit typically",
  },
];

const budgetBreakdown = [
  { category: "Land Acquisition", range: "$20,000-80,000/unit", notes: "Varies dramatically by location and density" },
  { category: "Site Development", range: "$15,000-35,000/unit", notes: "Parking, utilities, landscaping, stormwater" },
  { category: "Vertical Construction", range: "$100,000-250,000/unit", notes: "Based on unit size and construction type" },
  { category: "Amenities & Common", range: "$10,000-30,000/unit", notes: "Clubhouse, pool, fitness, etc." },
  { category: "Soft Costs", range: "15-22%", notes: "Design, permits, fees, financing, contingency" },
  { category: "Impact Fees", range: "$8,000-20,000/unit", notes: "Transportation, schools, utilities" },
];

const floridaSpecificConsiderations = [
  {
    consideration: "Hurricane Resistance",
    requirement: "Florida Building Code wind load requirements; higher in coastal zones",
    impact: "Structural costs 10-20% higher than non-coastal; impact glazing or shutters required near coast",
    mitigation: "Concrete construction provides superior resistance; proper design reduces insurance costs",
  },
  {
    consideration: "Flood Zones",
    requirement: "FEMA flood zone compliance; NFIP insurance requirements",
    impact: "Flood zone sites require elevated construction; insurance costs increase significantly",
    mitigation: "Avoid AE/VE zones if possible; design to exceed minimum elevation; consider flood insurance costs in pro forma",
  },
  {
    consideration: "Energy Code",
    requirement: "Florida Energy Conservation Code (based on IECC)",
    impact: "High-performance HVAC, insulation, and windows required; affects construction cost and operating costs",
    mitigation: "Design for efficiency; consider solar-ready construction; HVAC sizing critical in Florida climate",
  },
  {
    consideration: "Affordable Housing",
    requirement: "Some jurisdictions require affordable unit set-aside or fee-in-lieu",
    impact: "Can significantly affect pro forma if substantial set-aside required",
    mitigation: "Understand requirements early; consider LIHTC or other programs if significant affordable component needed",
  },
];

const projectTimeline = [
  { phase: "Site Acquisition & Due Diligence", duration: "3-6 months", activities: "Site search, contracts, feasibility, environmental, surveys" },
  { phase: "Entitlements & Approvals", duration: "6-18 months", activities: "Rezoning (if needed), site plan approval, variance requests" },
  { phase: "Design & Permitting", duration: "6-10 months", activities: "Architectural design, engineering, building permits" },
  { phase: "Construction", duration: "12-24 months", activities: "Site work, vertical construction, amenities, punch list" },
  { phase: "Lease-Up", duration: "6-18 months", activities: "Marketing, leasing, stabilization (typically 93-95% occupancy)" },
];

const faqs = [
  {
    question: "How many units do I need for an efficient apartment project?",
    answer: "Operational efficiency typically requires 150-200+ units minimum. Below this threshold, fixed costs (management, amenities, maintenance) become disproportionate. Garden-style can work at 150-200 units; mid-rise/high-rise projects often need 200-400 units to amortize structured parking and premium amenities. Smaller projects (50-150 units) can work in niche markets or with simplified operations but typically have lower returns. Tampa Bay's strong market supports larger projects, and institutional investors typically require 200+ units.",
  },
  {
    question: "What density can I achieve in Tampa Bay?",
    answer: "Density varies dramatically by location and zoning: Suburban greenfield sites typically allow 15-25 units/acre; Urban infill can achieve 40-80 units/acre; Downtown/waterfront may permit 80-150+ units/acre. Actual achievable density depends on parking requirements (often the limiting factor), height limits, setbacks, open space requirements, and building code construction type limits. We recommend parking studies early—parking often determines density more than zoning.",
  },
  {
    question: "Should I build wood-frame or concrete construction?",
    answer: "Construction type depends on height, location, and target market: Wood-frame (Type V) is most cost-effective for 1-4 story garden-style—typically $140-200/SF; Wood-over-podium (Type III) works for 5-7 story mid-rise—typically $200-280/SF; Concrete/steel (Type I/II) is required for high-rise and preferred for coastal luxury—typically $280-450/SF. In Tampa Bay's hurricane zone, concrete construction commands insurance premium reductions that can offset some cost differential. Evaluate total cost of ownership, not just construction cost.",
  },
  {
    question: "What impact fees should I expect in Tampa Bay?",
    answer: "Impact fees vary significantly by jurisdiction and can be substantial: Hillsborough County: $10,000-18,000/unit depending on location; Pinellas County: $8,000-15,000/unit; Pasco County: $8,000-12,000/unit; Manatee/Sarasota: $10,000-20,000/unit. Impact fees cover transportation, schools, parks, fire/EMS, and utilities. Some jurisdictions offer credits for infill development or workforce housing. Budget impact fees carefully—they're a significant development cost and are trending upward across Tampa Bay.",
  },
  {
    question: "How long does entitlement take in Tampa Bay?",
    answer: "Entitlement timelines vary by complexity: By-right development (complies with existing zoning): 2-4 months for site plan approval; Minor variance or conditional use: 4-8 months; Full PD rezoning: 8-18 months; Projects requiring DRI review: 12-24+ months. Tampa Bay jurisdictions are generally business-friendly but thorough. Start entitlement discussions early, engage local counsel, and build relationships with planning staff. Neighborhood opposition can significantly extend timelines regardless of zoning compliance.",
  },
  {
    question: "What amenities are expected in Tampa Bay apartments?",
    answer: "Amenity expectations have increased significantly. Standard expectations include: resort-style pool, modern fitness center, package lockers, dog park, and business/coworking space. Premium communities add: rooftop amenities, outdoor kitchens, pet spas, spin/yoga studios, and controlled-access parking. Amenity investment typically runs $15,000-35,000 per unit. The Tampa Bay market is competitive—underinvesting in amenities limits rent premiums and lease-up velocity. Study comparable properties and target slightly ahead of current market standard.",
  },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Key Considerations for Building Commercial Housing Complexes in Florida"
        description="Essential guide to building commercial housing complexes in Florida. Site selection, construction types, costs, and regulations for multi-family development in Tampa Bay."
        datePublished="2024-01-15"
        dateModified="2025-01-15"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Multi-family housing construction in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Key Considerations for Building Commercial Housing Complexes
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Multi-family development in Florida requires navigating complex site, construction, and regulatory considerations. This guide covers what developers need to know.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
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
      </section>

      {/* Intro */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-xl text-gray-600 mb-6">
              Tampa Bay's population growth continues to drive strong demand for multi-family housing. Whether you're developing market-rate apartments, affordable housing, condominiums, or mixed-use communities, success requires understanding the unique considerations of housing development in Florida.
            </p>
            <p className="text-gray-600 mb-6">
              Multi-family construction is capital-intensive and highly regulated. Site selection determines density and project economics. Construction type affects cost, timeline, and insurance. Amenities drive rents and lease-up velocity. And Florida's hurricane codes, flood zones, and impact fees add complexity beyond typical markets.
            </p>
            <p className="text-gray-600 mb-8">
              This guide covers the key considerations for commercial housing development in Florida: housing types and their characteristics, site selection factors, construction type options, amenity considerations, budget factors, and Florida-specific regulatory requirements. Use this as a planning framework for your next multi-family project.
            </p>
          </div>
        </div>
      </section>

      {/* Housing Types */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Multi-Family Housing Types
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Different housing types serve different markets with varying construction requirements and economics.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-4 py-4 text-left font-heading">Type</th>
                  <th className="px-4 py-4 text-center font-heading">Stories</th>
                  <th className="px-4 py-4 text-center font-heading">Density</th>
                  <th className="px-4 py-4 text-left font-heading">Construction</th>
                  <th className="px-4 py-4 text-center font-heading">Cost Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {housingTypes.map((type, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-4">
                      <span className="font-semibold text-brand-green-dark block">{type.type}</span>
                      <span className="text-xs text-gray-500">{type.bestFor}</span>
                    </td>
                    <td className="px-4 py-4 text-center text-gray-600">{type.stories}</td>
                    <td className="px-4 py-4 text-center text-gray-600">{type.density}</td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{type.construction}</td>
                    <td className="px-4 py-4 text-center text-brand-green font-semibold">{type.costRange}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Site Considerations */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Site Selection Considerations
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Site selection is the most critical decision in multi-family development.
          </p>
          <div className="space-y-6">
            {siteConsiderations.map((item, index) => (
              <div key={index} className={`rounded-xl p-6 shadow-md ${item.critical ? 'bg-brand-green-light/20 border-l-4 border-brand-green' : 'bg-gray-50'}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-8 h-8 text-brand-green" />
                    <h3 className="text-xl font-bold text-brand-green-dark">{item.factor}</h3>
                  </div>
                  {item.critical && (
                    <span className="px-3 py-1 bg-brand-green text-white text-xs font-semibold rounded-full">
                      Critical
                    </span>
                  )}
                </div>
                <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
                  {item.considerations.map((consideration, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      {consideration}
                    </li>
                  ))}
                </ul>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm text-gray-700"><strong>Tampa Bay:</strong> {item.tampa}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Types */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4 font-heading">
            Construction Type Options
          </h2>
          <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto">
            Construction type affects cost, timeline, height limits, and durability.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {constructionTypes.map((type, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">{type.type}</h3>
                <p className="text-white/80 text-sm mb-4">{type.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Height Limit:</span>
                    <span>{type.heightLimit}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Cost Range:</span>
                    <span className="text-brand-gold">{type.cost}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-green-500/20 rounded-lg p-2">
                    <p className="text-xs"><strong>Advantages:</strong> {type.advantages}</p>
                  </div>
                  <div className="bg-red-500/20 rounded-lg p-2">
                    <p className="text-xs"><strong>Disadvantages:</strong> {type.disadvantages}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Amenity Considerations
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Amenities drive rents and differentiate your property in a competitive market.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {amenityConsiderations.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">{category.category}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Standard</h4>
                    <ul className="space-y-1">
                      {category.standard.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-gray-400 mt-1 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-brand-green mb-2">Premium</h4>
                    <ul className="space-y-1">
                      {category.premium.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-brand-green mt-1 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 bg-brand-green-light/30 rounded-lg p-3">
                  <p className="text-xs text-brand-green-dark"><strong>Cost:</strong> {category.cost}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Breakdown */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Development Budget Factors
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Understanding cost components helps create realistic pro formas.
          </p>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-heading">Category</th>
                  <th className="px-6 py-4 text-center font-heading">Typical Range</th>
                  <th className="px-6 py-4 text-left font-heading">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {budgetBreakdown.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-700">{item.category}</td>
                    <td className="px-6 py-4 text-center text-brand-green font-semibold">{item.range}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Florida Specific */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Florida-Specific Considerations
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Florida presents unique regulatory and environmental factors for multi-family development.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {floridaSpecificConsiderations.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-brand-green" />
                  <h3 className="text-lg font-bold text-brand-green-dark">{item.consideration}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3"><strong>Requirement:</strong> {item.requirement}</p>
                <p className="text-red-600 text-sm mb-3"><strong>Impact:</strong> {item.impact}</p>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-sm text-green-800"><strong>Mitigation:</strong> {item.mitigation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Typical Development Timeline
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Multi-family development typically takes 3-5 years from site identification to stabilization.
          </p>
          <div className="max-w-4xl mx-auto space-y-4">
            {projectTimeline.map((phase, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-md flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-brand-green-dark">{phase.phase}</h3>
                    <span className="text-sm font-medium text-brand-green bg-brand-green-light/30 px-3 py-1 rounded-full">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">{phase.activities}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-white">
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
      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Related Multi-Family Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Planning a Multi-Family Development?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists builds multi-family communities throughout Tampa Bay. From garden-style to high-rise, we bring expertise to every project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Consultation
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
    </>
  );
}
