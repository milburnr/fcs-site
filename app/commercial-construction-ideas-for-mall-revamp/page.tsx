import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { Phone, CheckCircle, Building2, Users, Stethoscope, GraduationCap, Home, ShoppingBag, Dumbbell, Utensils, HelpCircle, TrendingUp, DollarSign, Clock } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Mall Revamp & Conversion Ideas Tampa | FCS",
  description: "Transform underperforming malls into thriving mixed-use destinations. Medical facilities, residential, entertainment, and adaptive reuse strategies for Tampa Bay shopping centers.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Mall Revamp Construction Ideas", href: "/commercial-construction-ideas-for-mall-revamp/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/revitalize-your-older-building-renovation-and-reconstruction/", label: "Building Revitalization" },
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

const conversionStrategies = [
  {
    strategy: "Medical & Healthcare",
    icon: Stethoscope,
    description: "Convert anchor spaces into medical office buildings, outpatient surgery centers, or healthcare campuses",
    advantages: ["Growing healthcare demand in Tampa Bay", "Premium rents ($25-50/SF NNN)", "Stable, long-term tenants", "Community service anchor"],
    considerations: ["AHCA requirements for certain uses", "Specialized MEP systems", "ADA accessibility upgrades", "Parking ratios may need adjustment"],
    typicalCost: "$200-400/SF conversion cost",
    roi: "Cap rates 6-8%; strong institutional interest",
  },
  {
    strategy: "Multi-Family Residential",
    icon: Home,
    description: "Convert portions of mall or entire property into apartments or mixed-use with residential above retail",
    advantages: ["Strong rental demand in Tampa Bay", "Diversifies property income", "Creates 24/7 activity", "Qualifies for certain incentives"],
    considerations: ["Zoning changes typically required", "Significant structural modifications", "Parking reconfiguration", "Neighborhood impact concerns"],
    typicalCost: "$150-250/SF for new construction; $100-200/SF for conversion",
    roi: "Strong development returns; values stabilizing",
  },
  {
    strategy: "Entertainment & Experience",
    icon: Users,
    description: "Transform spaces into entertainment destinations: bowling, arcades, escape rooms, indoor activities",
    advantages: ["Experience-driven uses resist e-commerce", "Family traffic generates retail visits", "Evening/weekend activity", "Unique destination appeal"],
    considerations: ["Specialized buildouts for each use", "Extended hours impact operations", "Noise and activity management", "Food/beverage licensing"],
    typicalCost: "$150-300/SF depending on use",
    roi: "Percentage rent deals common; traffic-driving value",
  },
  {
    strategy: "Fitness & Wellness",
    icon: Dumbbell,
    description: "Large-format fitness centers, boutique studios, wellness spas, and health-focused tenants",
    advantages: ["Membership creates recurring traffic", "Multiple visit types (gym, classes, spa)", "Health-conscious demographic spending", "Large footprint absorption"],
    considerations: ["Structural capacity for equipment", "Specialized HVAC/ventilation", "Shower/locker room plumbing", "Extended operating hours"],
    typicalCost: "$75-200/SF conversion cost",
    roi: "Below-market rents offset by traffic value",
  },
  {
    strategy: "Education & Training",
    icon: GraduationCap,
    description: "Community colleges, trade schools, corporate training centers, or K-12 educational uses",
    advantages: ["Long-term lease stability", "Daytime traffic for retail", "Community anchor role", "Potential public funding"],
    considerations: ["Building code requirements for educational use", "Parking and drop-off requirements", "Security considerations", "Specialized classroom buildouts"],
    typicalCost: "$100-175/SF conversion cost",
    roi: "Lower rents but extreme stability; 10-20 year leases common",
  },
  {
    strategy: "Food Hall & Culinary",
    icon: Utensils,
    description: "Convert food courts or anchor spaces into curated food halls with local operators and craft vendors",
    advantages: ["Destination dining experience", "Supports local entrepreneurs", "Instagram-worthy environments", "Extended hours of operation"],
    considerations: ["Grease interceptors and ventilation", "Health department requirements", "Operator coordination complexity", "Higher landlord involvement"],
    typicalCost: "$200-350/SF for food hall buildout",
    roi: "Percentage rent + common area fees; high traffic value",
  },
];

const mallConditionAssessment = [
  {
    element: "Structural Systems",
    assessmentFocus: "Load capacity, expansion potential, seismic/wind resistance",
    conversionImplications: "Medical and residential uses may require structural upgrades; parking deck capacity critical",
    typicalFindings: "1970s-90s malls generally have adequate structure for most conversions",
  },
  {
    element: "Building Envelope",
    assessmentFocus: "Roof condition, exterior walls, glazing systems, waterproofing",
    conversionImplications: "Envelope upgrades often needed for energy code compliance and occupant comfort",
    typicalFindings: "Expect 20-40% of envelope may need replacement or major repair",
  },
  {
    element: "Mechanical Systems",
    assessmentFocus: "HVAC age and condition, distribution capacity, ventilation adequacy",
    conversionImplications: "Most conversions require significant HVAC modification or replacement",
    typicalFindings: "Original mall HVAC rarely suitable for new uses; budget for replacement",
  },
  {
    element: "Electrical Systems",
    assessmentFocus: "Service capacity, distribution, panel condition, emergency power",
    conversionImplications: "Medical and residential uses often require service upgrades",
    typicalFindings: "Capacity usually adequate; distribution and panels often need modernization",
  },
  {
    element: "Plumbing Systems",
    assessmentFocus: "Fixture count potential, waste line capacity, water pressure",
    conversionImplications: "Residential and fitness uses require extensive plumbing additions",
    typicalFindings: "Infrastructure sized for retail; significant additions needed for residential",
  },
  {
    element: "Fire & Life Safety",
    assessmentFocus: "Sprinkler coverage, fire alarm systems, egress paths, compartmentalization",
    conversionImplications: "Code requirements vary significantly by new use; expect upgrades",
    typicalFindings: "Original systems often inadequate for new occupancy classifications",
  },
];

const conversionCostBreakdown = [
  {
    component: "Demolition & Abatement",
    percentRange: "5-10%",
    description: "Selective demolition of existing finishes; potential asbestos/lead abatement in older malls",
    costPerSF: "$5-25/SF",
  },
  {
    component: "Structural Modifications",
    percentRange: "5-15%",
    description: "New openings, load upgrades, seismic improvements, additions",
    costPerSF: "$10-50/SF where needed",
  },
  {
    component: "Building Envelope",
    percentRange: "10-20%",
    description: "New storefronts, entrance modifications, roof repairs/replacement",
    costPerSF: "$15-60/SF affected area",
  },
  {
    component: "Mechanical/HVAC",
    percentRange: "15-25%",
    description: "New systems for changed occupancy; ventilation upgrades; controls",
    costPerSF: "$25-75/SF",
  },
  {
    component: "Electrical Systems",
    percentRange: "10-18%",
    description: "Service upgrades, new distribution, lighting, emergency power",
    costPerSF: "$15-45/SF",
  },
  {
    component: "Plumbing & Fire Protection",
    percentRange: "8-15%",
    description: "New restrooms, kitchens, medical plumbing; sprinkler modifications",
    costPerSF: "$12-40/SF",
  },
  {
    component: "Interior Finishes",
    percentRange: "15-25%",
    description: "New walls, ceilings, flooring, millwork, specialties",
    costPerSF: "$25-75/SF",
  },
  {
    component: "Site Improvements",
    percentRange: "5-12%",
    description: "Parking reconfiguration, landscaping, exterior lighting, signage",
    costPerSF: "$8-25/SF of building",
  },
];

const successFactors = [
  {
    factor: "Location Quality",
    description: "Traffic counts, demographics, visibility, and accessibility determine conversion potential",
    indicators: ["Strong surrounding demographics", "Major road access", "Growing population area", "Limited competitive supply"],
  },
  {
    factor: "Physical Suitability",
    description: "Building characteristics affect conversion feasibility and cost",
    indicators: ["Adequate ceiling heights (16'+ for residential)", "Structural flexibility", "Sufficient parking", "Good natural light potential"],
  },
  {
    factor: "Market Demand",
    description: "Understanding what uses are needed and achievable in the specific market",
    indicators: ["Healthcare undersupply", "Housing shortage", "Entertainment void", "Educational demand"],
  },
  {
    factor: "Ownership Alignment",
    description: "Financial capacity and timeline alignment for major repositioning",
    indicators: ["Long-term hold strategy", "Access to conversion capital", "Patience for lease-up", "Experienced development team"],
  },
  {
    factor: "Zoning & Entitlements",
    description: "Regulatory pathway for desired uses",
    indicators: ["Mixed-use zoning available", "Residential permitted or achievable", "Reasonable approval timeline", "Community support"],
  },
];

const tampaBayMallOpportunities = [
  {
    opportunity: "Medical Office Conversion",
    tampaContext: "Tampa Bay's healthcare growth creates demand for medical office space; outpatient trend favors mall-adjacent locations with parking",
    targetTenants: "Health systems, physician groups, imaging centers, physical therapy, urgent care, outpatient surgery",
    rentalRange: "$28-45/SF NNN",
    marketStrength: "Very Strong—undersupplied market with growing population",
  },
  {
    opportunity: "Workforce Housing",
    tampaContext: "Housing shortage and affordability crisis create opportunity for workforce/attainable rental housing",
    targetTenants: "Market-rate and workforce households ($40-80K income range)",
    rentalRange: "$1,400-2,200/month for 1-2BR",
    marketStrength: "Strong—particularly with transit or employment center proximity",
  },
  {
    opportunity: "Senior Living/Active Adult",
    tampaContext: "Growing 55+ population seeks amenity-rich living; mall locations offer services, activities, and walkability",
    targetTenants: "Independent living, active adult renters, CCRC developers",
    rentalRange: "$2,500-4,500/month",
    marketStrength: "Strong—demographic tailwinds support this segment",
  },
  {
    opportunity: "Entertainment & Dining",
    tampaContext: "Experience-focused uses draw traffic in ways traditional retail cannot; food halls and entertainment becoming anchors",
    targetTenants: "Food halls, bowling/entertainment, fitness, experiential retail",
    rentalRange: "$18-35/SF + percentage",
    marketStrength: "Moderate to Strong—tenant quality critical",
  },
];

const projectPhases = [
  {
    phase: "Feasibility & Planning",
    duration: "3-6 months",
    activities: ["Market analysis for target uses", "Building condition assessment", "Zoning and entitlement review", "Conceptual design and budgeting", "Financial modeling"],
    deliverables: ["Feasibility report", "Conceptual plans", "Preliminary budget", "Pro forma analysis"],
  },
  {
    phase: "Entitlements",
    duration: "6-18 months",
    activities: ["Rezoning if required", "Site plan approval", "Traffic studies", "Community engagement", "Development agreements"],
    deliverables: ["Approved zoning", "Site plan approval", "Building permits pathway"],
  },
  {
    phase: "Design Development",
    duration: "4-8 months",
    activities: ["Detailed design by discipline", "Tenant coordination (if pre-leased)", "Value engineering", "Permit submissions", "Construction cost refinement"],
    deliverables: ["Construction documents", "Permit approvals", "GMP or final budget"],
  },
  {
    phase: "Construction",
    duration: "12-24 months",
    activities: ["Phased demolition and construction", "Tenant buildout coordination", "Quality control and inspections", "Substantial completion by phase"],
    deliverables: ["Completed building sections", "CO by phase", "Tenant turnover"],
  },
  {
    phase: "Lease-Up & Stabilization",
    duration: "12-24 months",
    activities: ["Marketing and leasing", "Tenant improvements", "Property management transition", "Operational optimization"],
    deliverables: ["Stabilized occupancy (90%+)", "Operational building", "Refinancing/sale readiness"],
  },
];

const faqs = [
  {
    question: "How do I know if my mall is a good candidate for conversion?",
    answer: "Strong conversion candidates typically have: good location fundamentals (demographics, access, visibility), physical characteristics that support new uses (ceiling heights, structural capacity, parking), clear demand for alternative uses in the market, and ownership with capacity and willingness to invest in repositioning. A feasibility study examining these factors is the first step. We see the best outcomes when location is strong and declining retail performance is due to format obsolescence rather than market weakness.",
  },
  {
    question: "What does mall-to-residential conversion typically cost?",
    answer: "Costs vary significantly based on scope and building condition. Converting existing mall space to apartments typically costs $100-200/SF—less than new construction ($150-250/SF) but requiring creative solutions for layouts, light, and ventilation. Adding residential above existing retail (vertically) costs similar to new construction. Demolishing and rebuilding is most expensive but may provide best long-term value. A detailed feasibility study with condition assessment is essential before committing to a strategy.",
  },
  {
    question: "How long does a major mall repositioning take?",
    answer: "From concept to stabilization, expect 4-7 years for a major repositioning: feasibility and planning (6-12 months), entitlements (6-18 months), design and permitting (6-12 months), construction (12-24 months), and lease-up (12-24 months). Phased approaches can generate income earlier but extend overall timeline. The key is realistic expectations—this is development work, not a quick renovation. Owners who expect faster results often make poor decisions under time pressure.",
  },
  {
    question: "Can a mall conversion be done in phases while keeping some retail operating?",
    answer: "Yes, phased construction is common and often preferred. The strategy typically involves: identifying which areas convert first (usually anchors and underperforming zones), creating construction zones with appropriate barriers and access, maintaining visibility and access to remaining retail, coordinating construction schedule with retailer needs, and planning infrastructure so phases can operate independently. Phasing extends timeline and adds some cost but maintains income and reduces risk. We've completed many projects with active retail operations continuing throughout construction.",
  },
  {
    question: "What zoning changes are typically needed for mall conversion?",
    answer: "Most mall conversions require some entitlement work. Adding residential almost always requires rezoning or a PD amendment. Medical uses often fit within commercial zoning but may need conditional use approval for certain facilities. Entertainment uses may trigger parking ratio reviews or operating hour conditions. The good news: many Tampa Bay jurisdictions are supportive of mall repositioning and have streamlined processes. Early engagement with planning staff helps identify requirements and build support.",
  },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Commercial Construction Ideas for Mall Revamp in Florida"
        description="Transform underperforming malls into thriving mixed-use destinations. Conversion strategies, cost analysis, and construction guidance for Tampa Bay retail repositioning."
        datePublished="2024-01-15"
        dateModified="2025-01-15"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Mall renovation construction in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Revamp Your Mall with Commercial Construction Innovation
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Transform underperforming retail into thriving destinations. Florida Construction Specialists delivers mall conversions, adaptive reuse, and mixed-use repositioning throughout Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Discuss Your Mall Project
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

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              The Mall Repositioning Opportunity
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Tampa Bay's retail landscape is evolving. E-commerce disruption, changing consumer preferences, and anchor tenant bankruptcies have left many shopping centers underperforming or partially vacant. But these properties represent enormous untapped potential—well-located real estate with existing infrastructure, parking, and community visibility.
            </p>
            <p className="text-gray-600 mb-6">
              Successful mall repositioning isn't about fighting the retail decline—it's about recognizing that these properties can serve entirely different purposes. Medical facilities need the parking and accessibility. Multi-family housing craves the locations. Entertainment concepts seek the square footage. Educational institutions value the community presence. The construction challenge is adapting buildings designed for one purpose to serve another.
            </p>
            <p className="text-gray-600 mb-6">
              At Florida Construction Specialists, we've helped owners reimagine underperforming retail properties throughout Tampa Bay. From converting anchor spaces to medical office buildings to transforming food courts into curated food halls, we understand the unique challenges of adaptive reuse—working within existing structures while meeting modern codes and user expectations.
            </p>
            <p className="text-gray-600 mb-8">
              This guide explores the most promising conversion strategies, the construction considerations for each, typical costs and timelines, and the factors that determine success. Whether you own a struggling mall, manage a retail portfolio with vacancy challenges, or see opportunity in distressed retail, understanding these fundamentals helps you evaluate options and make informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Conversion Strategies */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Mall Conversion Strategies
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Each conversion strategy has distinct construction requirements, market dynamics, and return profiles.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conversionStrategies.map((strategy, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center">
                    <strategy.icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green-dark">{strategy.strategy}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{strategy.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-green-700 mb-2">Advantages</h4>
                  <ul className="space-y-1">
                    {strategy.advantages.map((adv, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                        {adv}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-amber-700 mb-2">Considerations</h4>
                  <ul className="space-y-1">
                    {strategy.considerations.map((con, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                        <span className="w-3 h-3 text-amber-500 mt-0.5 flex-shrink-0">•</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Typical Cost:</span>
                    <span className="text-brand-green font-semibold">{strategy.typicalCost}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">ROI Profile:</span>
                    <span className="text-gray-700">{strategy.roi}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Assessment */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Mall Condition Assessment: What to Evaluate
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Before committing to a conversion strategy, understand your building's capabilities and limitations.
          </p>
          <div className="overflow-x-auto max-w-5xl mx-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-4 py-4 text-left font-heading">Building Element</th>
                  <th className="px-4 py-4 text-left font-heading">Assessment Focus</th>
                  <th className="px-4 py-4 text-left font-heading">Conversion Implications</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {mallConditionAssessment.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-4 font-semibold text-gray-700">{item.element}</td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{item.assessmentFocus}</td>
                    <td className="px-4 py-4">
                      <p className="text-gray-600 text-sm mb-1">{item.conversionImplications}</p>
                      <p className="text-xs text-brand-gold italic">{item.typicalFindings}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Mall Conversion Cost Breakdown
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Understanding where conversion costs accumulate helps with budgeting and value engineering.
          </p>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-heading">Component</th>
                  <th className="px-6 py-4 text-center font-heading">% of Total</th>
                  <th className="px-6 py-4 text-center font-heading">Cost/SF Range</th>
                  <th className="px-6 py-4 text-left font-heading">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {conversionCostBreakdown.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-700">{item.component}</td>
                    <td className="px-6 py-4 text-center text-brand-gold font-semibold">{item.percentRange}</td>
                    <td className="px-6 py-4 text-center text-brand-green font-semibold">{item.costPerSF}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="max-w-4xl mx-auto mt-6 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="font-bold text-amber-800 mb-2">Total Conversion Cost Ranges</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Light Renovation:</span>
                <span className="block font-semibold text-gray-700">$75-125/SF</span>
              </div>
              <div>
                <span className="text-gray-600">Moderate Conversion:</span>
                <span className="block font-semibold text-gray-700">$125-200/SF</span>
              </div>
              <div>
                <span className="text-gray-600">Major Repositioning:</span>
                <span className="block font-semibold text-gray-700">$200-350/SF</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tampa Bay Opportunities */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4 font-heading">
            Tampa Bay Market Opportunities
          </h2>
          <p className="text-center text-white/90 mb-12 max-w-3xl mx-auto">
            Understanding local market conditions helps prioritize conversion strategies.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {tampaBayMallOpportunities.map((opp, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">{opp.opportunity}</h3>
                <p className="text-white/80 text-sm mb-4">{opp.tampaContext}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Target Tenants:</span>
                    <span className="text-white/90 text-right">{opp.targetTenants}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Rental Range:</span>
                    <span className="text-brand-gold font-semibold">{opp.rentalRange}</span>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="text-xs text-white/60">Market Strength:</span>
                  <p className="text-sm text-white mt-1">{opp.marketStrength}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Keys to Successful Mall Repositioning
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            These factors determine which mall conversions succeed and which struggle.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {successFactors.map((factor, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <TrendingUp className="w-8 h-8 text-brand-gold mb-4" />
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">{factor.factor}</h3>
                <p className="text-gray-600 text-sm mb-4">{factor.description}</p>
                <ul className="space-y-2">
                  {factor.indicators.map((indicator, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      {indicator}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Mall Repositioning Timeline
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            From concept to stabilization, major repositioning typically takes 4-7 years.
          </p>
          <div className="max-w-4xl mx-auto space-y-4">
            {projectPhases.map((phase, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-brand-green-dark">{phase.phase}</h3>
                      <span className="px-4 py-1 bg-brand-gold/10 text-brand-gold text-sm font-semibold rounded-full">
                        {phase.duration}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Activities</h4>
                        <ul className="space-y-1">
                          {phase.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="text-brand-green">•</span>
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Deliverables</h4>
                        <ul className="space-y-1">
                          {phase.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-3 h-3 text-brand-green mt-1 flex-shrink-0" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-brand-gold mt-1 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 pl-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Related Construction Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Reimagine Your Retail Property?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists has experience transforming underperforming retail into thriving new uses. Let's discuss the possibilities for your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Discuss Your Mall Project
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
