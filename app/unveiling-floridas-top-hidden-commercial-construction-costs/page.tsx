import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { Phone, CheckCircle, DollarSign, AlertTriangle, Eye, Shield, FileText, Clock, HelpCircle, Wrench, Building2, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Hidden Commercial Construction Costs in Florida | Tampa Bay Guide",
  description: "Uncover the hidden costs that catch Florida commercial construction projects off guard. Impact fees, hurricane requirements, soil conditions, and more—know before you budget.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Hidden Commercial Construction Costs in Florida", href: "/unveiling-floridas-top-hidden-commercial-construction-costs/" },
];

const internalLinks = [
  { href: "/decoding-commercial-construction-costs/", label: "Construction Cost Guide" },
  { href: "/financial-planning-for-commercial-construction/", label: "Financial Planning Guide" },
  { href: "/construction-quotes-for-commercial-project/", label: "Understanding Quotes" },
  { href: "/services/commercial/design-build/", label: "Design-Build Services" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const hiddenCostCategories = [
  {
    category: "Site & Environmental",
    icon: MapPin,
    description: "Costs revealed by site investigation that weren't visible in early budgeting",
    totalImpact: "Can add 10-30% to site development costs",
  },
  {
    category: "Regulatory & Permitting",
    icon: FileText,
    description: "Government requirements that vary by jurisdiction and project type",
    totalImpact: "Can add $5-25/SF to total project cost",
  },
  {
    category: "Florida-Specific Requirements",
    icon: Shield,
    description: "Building code and environmental factors unique to Florida construction",
    totalImpact: "Adds 15-25% vs. non-coastal construction",
  },
  {
    category: "Schedule & Timing",
    icon: Clock,
    description: "Costs that emerge from delays, market timing, and project duration",
    totalImpact: "Can add 5-15% if not planned properly",
  },
];

const siteHiddenCosts = [
  {
    cost: "Poor Soil Conditions",
    description: "Tampa Bay's variable soils—from sand to clay to limestone—create unpredictable foundation requirements",
    typicalSurprise: "$50,000 - $500,000",
    howToAvoid: "Get geotechnical investigation before finalizing budget; don't rely on adjacent site reports",
    tampaBayNote: "Sinkhole-prone areas in Pasco and parts of Hillsborough require enhanced foundation systems",
  },
  {
    cost: "High Water Table",
    description: "Groundwater levels affect foundation design, dewatering requirements, and construction methods",
    typicalSurprise: "$30,000 - $200,000",
    howToAvoid: "Seasonal groundwater variations can surprise—investigate wet season conditions",
    tampaBayNote: "Coastal and low-lying areas often have water tables within 2-4 feet of surface",
  },
  {
    cost: "Wetland Mitigation",
    description: "Previously unidentified wetlands trigger permitting delays and mitigation requirements",
    typicalSurprise: "$50,000 - $300,000+",
    howToAvoid: "Environmental assessment in due diligence; some wetlands aren't obvious",
    tampaBayNote: "SWFWMD permitting can take 3-6 months; mitigation banks charge premium prices",
  },
  {
    cost: "Existing Utilities Conflicts",
    description: "Underground utilities not shown on available surveys requiring relocation",
    typicalSurprise: "$20,000 - $150,000",
    howToAvoid: "SUE (Subsurface Utility Engineering) investigation before design completion",
    tampaBayNote: "Older Tampa and St. Pete areas often have undocumented utilities",
  },
  {
    cost: "Environmental Contamination",
    description: "Previous site use left contamination requiring remediation",
    typicalSurprise: "$100,000 - $1,000,000+",
    howToAvoid: "Phase I (and Phase II if warranted) environmental assessment in due diligence",
    tampaBayNote: "Former gas stations, dry cleaners, and industrial sites are high-risk",
  },
  {
    cost: "Stormwater Requirements",
    description: "More extensive stormwater management than anticipated due to site conditions or regulations",
    typicalSurprise: "$50,000 - $300,000",
    howToAvoid: "Early engagement with civil engineer; understand SWFWMD and local requirements",
    tampaBayNote: "Tampa Bay's flat terrain and high rain intensity create significant stormwater needs",
  },
];

const regulatoryHiddenCosts = [
  {
    cost: "Impact Fees",
    description: "Government fees for roads, schools, parks, utilities, and services",
    tampaBayRanges: [
      { jurisdiction: "Hillsborough County", range: "$10,000 - $18,000/unit (residential); varies by use (commercial)" },
      { jurisdiction: "Pinellas County", range: "$8,000 - $15,000/unit; commercial varies" },
      { jurisdiction: "Pasco County", range: "$8,000 - $12,000/unit; commercial varies" },
      { jurisdiction: "City of Tampa", range: "Additional city impact fees on top of county" },
    ],
    howToAvoid: "Research early; some jurisdictions offer credits or incentives for certain projects",
  },
  {
    cost: "Concurrency Requirements",
    description: "Traffic improvements, school capacity contributions, or infrastructure upgrades required for approval",
    typicalSurprise: "$100,000 - $1,000,000+",
    howToAvoid: "Traffic study and concurrency analysis during due diligence",
    tampaBayNote: "Turn lane requirements alone can add $50-150K per intersection",
  },
  {
    cost: "Extended Permitting Timeline",
    description: "Longer-than-expected permit reviews increase carrying costs and delay revenue",
    typicalSurprise: "$50,000 - $300,000 in carrying costs",
    howToAvoid: "Research typical timelines; budget for realistic schedule; consider pre-application meetings",
    tampaBayNote: "Complex projects may need 6-12 months for all approvals",
  },
  {
    cost: "ADA Compliance Beyond Minimum",
    description: "Existing conditions trigger ADA improvements beyond the project scope",
    typicalSurprise: "$25,000 - $150,000",
    howToAvoid: "ADA assessment of existing conditions before design; understand triggered improvements",
    tampaBayNote: "Renovation projects in older buildings frequently trigger path-of-travel improvements",
  },
  {
    cost: "Fire Marshal Requirements",
    description: "Fire access, hydrant placement, or suppression system requirements beyond initial assumptions",
    typicalSurprise: "$30,000 - $200,000",
    howToAvoid: "Early fire marshal consultation; don't assume standard requirements apply",
    tampaBayNote: "High-piled storage, hazardous materials, and assembly uses have enhanced requirements",
  },
];

const floridaSpecificCosts = [
  {
    cost: "Hurricane-Resistant Construction",
    description: "Florida Building Code requires enhanced wind resistance throughout the building",
    components: [
      { item: "Impact-resistant glazing or shutters", cost: "$15-40/SF of glazing" },
      { item: "Enhanced roof attachment", cost: "$3-8/SF of roof" },
      { item: "Structural connections and hold-downs", cost: "5-15% structural premium" },
      { item: "Exterior door upgrades", cost: "$2,000-8,000 per door" },
    ],
    totalImpact: "Overall 15-25% construction premium in coastal zones",
    note: "Requirements increase within 1 mile of coast (Wind-Borne Debris Region)",
  },
  {
    cost: "Flood Zone Compliance",
    description: "FEMA flood zone designation triggers construction and insurance requirements",
    components: [
      { item: "Elevated construction", cost: "$10-30/SF if significant elevation required" },
      { item: "Flood vents and openings", cost: "$5,000-20,000" },
      { item: "Flood-resistant materials below BFE", cost: "15-30% finish premium" },
      { item: "NFIP insurance premiums", cost: "$5,000-50,000+/year depending on zone and building" },
    ],
    totalImpact: "First cost plus significant ongoing insurance cost",
    note: "AE and VE zones have the most stringent requirements",
  },
  {
    cost: "Energy Code Compliance",
    description: "Florida Energy Conservation Code requires high-performance building envelope and systems",
    components: [
      { item: "High-performance glazing", cost: "$10-25/SF premium over standard" },
      { item: "Enhanced insulation", cost: "$2-5/SF" },
      { item: "High-efficiency HVAC equipment", cost: "10-20% equipment premium" },
      { item: "Energy modeling and compliance documentation", cost: "$5,000-15,000" },
    ],
    totalImpact: "3-8% construction premium but significant operating cost savings",
    note: "ROI is typically positive but requires upfront investment",
  },
  {
    cost: "Lightning Protection",
    description: "Florida's high lightning frequency requires consideration of protection systems",
    components: [
      { item: "Lightning protection system", cost: "$15,000-75,000 depending on building size" },
      { item: "Surge protection equipment", cost: "$5,000-25,000" },
      { item: "Equipment grounding systems", cost: "$3,000-15,000" },
    ],
    totalImpact: "Often required by insurance or prudent risk management",
    note: "Tampa Bay is in one of the highest lightning-strike zones in the US",
  },
];

const scheduleHiddenCosts = [
  {
    cost: "Material Price Escalation",
    description: "Long project durations expose budgets to material price changes",
    typicalImpact: "3-8% annually in recent years; can spike during shortages",
    howToMitigate: "Early procurement of long-lead items; escalation allowances; GMP contracts",
  },
  {
    cost: "Labor Availability Delays",
    description: "Skilled trade shortages extend schedules and increase labor costs",
    typicalImpact: "10-20% labor premium during peak demand; schedule delays add carrying costs",
    howToMitigate: "Contractor relationships; realistic scheduling; avoid peak seasons if possible",
  },
  {
    cost: "Weather Delays",
    description: "Florida's rainy season and hurricane threats can halt construction",
    typicalImpact: "15-30 lost days typical during June-September; carrying costs continue",
    howToMitigate: "Schedule critical exterior work outside rainy season; build weather contingency into schedule",
  },
  {
    cost: "Permit Revision Cycles",
    description: "Design changes during permitting require re-review and delay schedule",
    typicalImpact: "Each revision cycle adds 2-4 weeks; cumulative impact compounds",
    howToMitigate: "Complete design before submission; pre-application meetings; experienced permit expediter",
  },
  {
    cost: "Financing Extension",
    description: "Project delays extend construction loan duration and interest costs",
    typicalImpact: "Interest continues at 6-9% annually during delays",
    howToMitigate: "Realistic schedules; adequate interest reserve; proactive delay management",
  },
];

const commonSurprises = [
  {
    surprise: "Utility Capacity Fees",
    description: "Water, sewer, and electric capacity charges for new connections",
    range: "$20,000 - $200,000+",
    note: "Based on meter size and projected demand; varies significantly by utility provider",
  },
  {
    surprise: "Technology Infrastructure",
    description: "Data/communications infrastructure beyond basic electrical",
    range: "$10-30/SF for modern commercial space",
    note: "Often underestimated; includes structured cabling, server rooms, security systems",
  },
  {
    surprise: "Signage Permitting",
    description: "Sign regulations, permitting, and installation costs",
    range: "$25,000 - $200,000+",
    note: "Many jurisdictions have complex sign codes; monument signs require foundations",
  },
  {
    surprise: "Tenant Coordination",
    description: "Managing multiple tenant buildouts simultaneously",
    range: "$5-15/SF of tenant space for coordination",
    note: "Shell delivery requires clear demarcation of landlord vs. tenant responsibilities",
  },
  {
    surprise: "Certificate of Occupancy Requirements",
    description: "Items required for CO that weren't in original scope",
    range: "$20,000 - $100,000",
    note: "Site work completion, final inspections, as-built drawings, training",
  },
  {
    surprise: "Post-Completion Items",
    description: "Costs between construction completion and operation",
    range: "$50,000 - $250,000",
    note: "FF&E, move-in coordination, final cleaning, security setup, utility deposits",
  },
];

const budgetProtectionStrategies = [
  {
    strategy: "Thorough Due Diligence",
    description: "Investigate site conditions, environmental issues, and regulatory requirements before committing",
    investment: "1-2% of project cost",
    return: "Can prevent 10-30% surprise costs",
    items: ["Geotechnical investigation", "Environmental assessment", "Utility research", "Zoning and entitlement review", "Traffic study if needed"],
  },
  {
    strategy: "Adequate Contingency",
    description: "Budget reserves appropriate to project type and stage of design",
    investment: "5-20% of construction budget",
    return: "Prevents project failure; unused funds return to owner",
    items: ["5-10% for new construction with complete design", "10-15% for design-build at partial design", "15-25% for renovations with unknowns"],
  },
  {
    strategy: "Design-Build Delivery",
    description: "Single-source responsibility with contractor engaged during design",
    investment: "Often cost-neutral vs. traditional delivery",
    return: "Earlier cost certainty; continuous value engineering; reduced change orders",
    items: ["Contractor provides early estimates", "Design decisions informed by cost", "GMP commitment before complete documents"],
  },
  {
    strategy: "Professional Preconstruction",
    description: "Engage construction expertise before construction starts",
    investment: "1-2% of construction cost",
    return: "Better estimates, fewer surprises, value engineering savings",
    items: ["Detailed estimating at each design phase", "Constructability review", "Market condition monitoring", "Subcontractor prequalification"],
  },
];

const faqs = [
  {
    question: "How much contingency should I budget for commercial construction in Florida?",
    answer: "Contingency requirements vary by project type: New construction with complete design: 5-10%. Design-build with GMP at partial design: 10-15%. Renovation of existing building: 15-20%. Complex renovation or historic building: 20-25%. Florida's unique factors (hurricane code, variable soils, complex permitting) warrant the higher end of these ranges compared to other states. Never proceed without contingency—it's risk management, not padding. As design progresses and unknowns resolve, unused contingency can be reallocated.",
  },
  {
    question: "What are impact fees and how can I estimate them?",
    answer: "Impact fees are government charges that fund infrastructure to serve new development: roads, schools, parks, fire/EMS, utilities, etc. In Tampa Bay, impact fees typically run $8,000-20,000 per residential unit; commercial fees vary by use and intensity. Fees are set by ordinance and publicly available, but they change frequently and vary dramatically by jurisdiction. Research fees early by contacting planning/building departments. Some jurisdictions offer credits for infill development, affordable housing, or economic development projects. Impact fees are due at permit issuance and must be budgeted as soft costs.",
  },
  {
    question: "How do hurricane building code requirements affect construction costs?",
    answer: "Florida Building Code requirements add 15-25% to construction costs compared to non-coastal states. Key cost drivers: impact-resistant glazing or shutters (required in Wind-Borne Debris Region—within 1 mile of coast or in specific exposure zones); enhanced roof systems with improved attachment; structural connections and hold-downs throughout; rated exterior doors and garage doors; debris-resistant wall systems. Costs are highest for buildings with large glass areas near the coast. The upside: properly built Florida buildings sustain less hurricane damage and often qualify for insurance premium reductions.",
  },
  {
    question: "What site conditions most commonly cause budget surprises in Tampa Bay?",
    answer: "The most common Tampa Bay site surprises are: unsuitable soils requiring deep foundations or soil improvement ($50-500K impact); high water table requiring dewatering or special foundation design ($30-200K); previously unidentified wetlands triggering mitigation and delays ($50-300K+); undocumented underground utilities requiring relocation ($20-150K); and more extensive stormwater management than anticipated ($50-300K). A geotechnical investigation and environmental assessment during due diligence can identify most issues before they become expensive surprises.",
  },
  {
    question: "How can design-build help reduce hidden costs?",
    answer: "Design-build reduces hidden costs through early contractor engagement that identifies issues before design is finalized. Constructability review catches costly design elements. Continuous estimating tracks costs as design develops—no bid-day surprises. Contractor knowledge of local conditions, subcontractor markets, and material availability informs realistic budgets. Value engineering happens throughout design, not as desperate cost-cutting later. GMP commitment provides cost certainty earlier in the process. Single-source responsibility reduces finger-pointing and change order disputes. While not eliminating all surprises, design-build significantly reduces their frequency and impact.",
  },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Unveiling Florida's Top Hidden Commercial Construction Costs"
        description="Discover the hidden costs that catch Florida commercial construction projects off guard. Impact fees, hurricane requirements, soil conditions, and strategies to protect your budget."
        datePublished="2024-01-15"
        dateModified="2025-01-15"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-large.webp"
            alt="Commercial construction project in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Unveiling Florida's Top Hidden Commercial Construction Costs
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            The costs that catch projects off guard aren't mysterious—they're just often overlooked. Florida Construction Specialists reveals what to budget for beyond the obvious.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Accurate Estimate
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
              Why Hidden Costs Derail Florida Construction Projects
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Every experienced Florida developer has a story about a project that blew its budget due to costs that "nobody saw coming." But in most cases, these costs weren't truly hidden—they were simply overlooked in early budgeting. Impact fees that weren't researched. Soil conditions that weren't investigated. Hurricane code requirements that weren't understood. Permit timelines that weren't realistic.
            </p>
            <p className="text-gray-600 mb-6">
              Florida presents unique cost factors that don't exist—or exist to a lesser degree—in other states. Our hurricane-prone location requires building systems that cost significantly more than standard construction. Variable soils from sand to limestone create foundation challenges. Complex environmental regulations protect our wetlands but add project costs. Impact fees in Tampa Bay jurisdictions are among the highest in the nation.
            </p>
            <p className="text-gray-600 mb-6">
              At Florida Construction Specialists, we've seen hundreds of commercial projects in Tampa Bay. We know where budgets typically get surprised. This guide reveals those hidden costs so you can budget realistically from the start. Understanding these factors won't eliminate all surprises, but it will dramatically reduce the gap between early budgets and final costs.
            </p>
            <p className="text-gray-600 mb-8">
              The goal isn't to scare you away from building in Florida—our market is strong and projects succeed every day. The goal is informed decision-making based on realistic cost expectations. That foundation enables successful projects.
            </p>
          </div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Categories of Hidden Costs
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Hidden costs fall into predictable categories. Understanding each helps you budget completely.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiddenCostCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <category.icon className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-2">{category.category}</h3>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <div className="bg-red-50 rounded-lg p-3">
                  <span className="text-xs text-red-700 font-semibold">Potential Impact:</span>
                  <p className="text-sm text-red-800 font-medium mt-1">{category.totalImpact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Site Hidden Costs */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Site & Environmental Hidden Costs
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Site conditions are the most common source of budget surprises. What's underground matters.
          </p>
          <div className="space-y-6 max-w-4xl mx-auto">
            {siteHiddenCosts.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-brand-green-dark flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6 text-amber-500" />
                    {item.cost}
                  </h3>
                  <span className="px-4 py-2 bg-red-100 text-red-800 text-sm font-bold rounded-full whitespace-nowrap">
                    {item.typicalSurprise}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <span className="text-xs text-green-700 font-semibold uppercase">How to Avoid</span>
                    <p className="text-sm text-gray-700 mt-1">{item.howToAvoid}</p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-4">
                    <span className="text-xs text-amber-700 font-semibold uppercase">Tampa Bay Note</span>
                    <p className="text-sm text-gray-700 mt-1">{item.tampaBayNote}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Hidden Costs */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Regulatory & Permitting Hidden Costs
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Government requirements vary dramatically by jurisdiction and can significantly impact budgets.
          </p>
          
          {/* Impact Fees Detailed */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-brand-gold" />
                Impact Fees: Tampa Bay Jurisdictions
              </h3>
              <p className="text-gray-600 mb-4">{regulatoryHiddenCosts[0].description}</p>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-brand-green">
                      <th className="text-left py-2 text-gray-700">Jurisdiction</th>
                      <th className="text-left py-2 text-gray-700">Typical Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    {regulatoryHiddenCosts[0].tampaBayRanges?.map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-200">
                        <td className="py-3 font-semibold text-gray-700">{row.jurisdiction}</td>
                        <td className="py-3 text-gray-600">{row.range}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 bg-green-50 rounded-lg p-4">
                <span className="text-xs text-green-700 font-semibold uppercase">How to Avoid Surprises</span>
                <p className="text-sm text-gray-700 mt-1">{regulatoryHiddenCosts[0].howToAvoid}</p>
              </div>
            </div>
          </div>

          {/* Other Regulatory Costs */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {regulatoryHiddenCosts.slice(1).map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-lg font-bold text-brand-green-dark">{item.cost}</h3>
                  <span className="px-4 py-2 bg-red-100 text-red-800 text-sm font-bold rounded-full whitespace-nowrap">
                    {item.typicalSurprise}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <span className="text-xs text-green-700 font-semibold uppercase">Mitigation</span>
                    <p className="text-sm text-gray-700 mt-1">{item.howToAvoid}</p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-4">
                    <span className="text-xs text-amber-700 font-semibold uppercase">Tampa Bay Note</span>
                    <p className="text-sm text-gray-700 mt-1">{item.tampaBayNote}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Florida-Specific Costs */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4 font-heading">
            Florida-Specific Construction Costs
          </h2>
          <p className="text-center text-white/90 mb-12 max-w-3xl mx-auto">
            Building in Florida costs more than other states due to unique code and environmental requirements.
          </p>
          <div className="space-y-8 max-w-5xl mx-auto">
            {floridaSpecificCosts.map((item, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{item.cost}</h3>
                  <span className="px-4 py-2 bg-brand-gold text-brand-green-dark text-sm font-bold rounded-full">
                    {item.totalImpact}
                  </span>
                </div>
                <p className="text-white/80 mb-4">{item.description}</p>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/30">
                        <th className="text-left py-2">Component</th>
                        <th className="text-right py-2">Typical Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.components.map((comp, idx) => (
                        <tr key={idx} className="border-b border-white/10">
                          <td className="py-2 text-white/80">{comp.item}</td>
                          <td className="py-2 text-right text-brand-gold font-semibold">{comp.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-white/70 italic">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Hidden Costs */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Schedule & Timing Hidden Costs
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Time is money in construction. Schedule delays and market timing create real cost impacts.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {scheduleHiddenCosts.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <Clock className="w-8 h-8 text-brand-gold mb-4" />
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">{item.cost}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="bg-red-50 rounded-lg p-3 mb-3">
                  <span className="text-xs text-red-700 font-semibold">Typical Impact:</span>
                  <p className="text-sm text-red-800 mt-1">{item.typicalImpact}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <span className="text-xs text-green-700 font-semibold">Mitigation:</span>
                  <p className="text-sm text-gray-700 mt-1">{item.howToMitigate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Surprises Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Other Commonly Overlooked Costs
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            These costs are frequently underestimated or omitted from early budgets.
          </p>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-heading">Cost Item</th>
                  <th className="px-6 py-4 text-left font-heading">Typical Range</th>
                  <th className="px-6 py-4 text-left font-heading">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {commonSurprises.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-gray-700">{item.surprise}</span>
                      <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                    </td>
                    <td className="px-6 py-4 text-brand-green font-semibold whitespace-nowrap">{item.range}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Protection Strategies */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Budget Protection Strategies
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            You can't eliminate all surprises, but you can dramatically reduce their frequency and impact.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {budgetProtectionStrategies.map((strategy, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-2">{strategy.strategy}</h3>
                <p className="text-gray-600 mb-4">{strategy.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-amber-50 rounded-lg p-3">
                    <span className="text-xs text-amber-700 font-semibold">Investment</span>
                    <p className="text-sm text-gray-700 mt-1">{strategy.investment}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <span className="text-xs text-green-700 font-semibold">Potential Return</span>
                    <p className="text-sm text-gray-700 mt-1">{strategy.return}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {strategy.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
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

      {/* Internal Links */}
      <section className="section bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Cost & Planning Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Get a Complete Cost Picture
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists provides comprehensive cost estimates that include the items others overlook. No surprises—just realistic budgets from the start.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Comprehensive Estimate
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
