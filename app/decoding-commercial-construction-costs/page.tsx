import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { Phone, CheckCircle, DollarSign, Building2, TrendingUp, Calculator, AlertTriangle, HelpCircle, PieChart, Wrench, FileText, Clock } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Commercial Construction Costs Tampa Bay | FCS",
  description: "Understand commercial construction costs in Tampa Bay. Detailed cost breakdowns by building type, hidden cost factors, and expert budgeting guidance from Florida Construction Specialists.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Decoding Commercial Construction Costs", href: "/decoding-commercial-construction-costs/" },
];

const internalLinks = [
  { href: "/financial-planning-for-commercial-construction/", label: "Financial Planning Guide" },
  { href: "/construction-quotes-for-commercial-project/", label: "Construction Quotes Guide" },
  { href: "/unveiling-floridas-top-hidden-commercial-construction-costs/", label: "Hidden Costs Guide" },
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

const costsByBuildingType = [
  { type: "Office (Class A)", lowRange: "$200", midRange: "$275", highRange: "$350", notes: "Premium finishes, advanced MEP" },
  { type: "Office (Class B)", lowRange: "$150", midRange: "$190", highRange: "$225", notes: "Standard professional finish" },
  { type: "Medical Office", lowRange: "$250", midRange: "$350", highRange: "$500", notes: "Varies significantly by specialty" },
  { type: "Retail Shell", lowRange: "$100", midRange: "$140", highRange: "$175", notes: "Core & shell only" },
  { type: "Retail Turnkey", lowRange: "$150", midRange: "$225", highRange: "$300", notes: "Full tenant buildout" },
  { type: "Restaurant", lowRange: "$200", midRange: "$300", highRange: "$450", notes: "Kitchen-intensive" },
  { type: "Industrial/Warehouse", lowRange: "$75", midRange: "$110", highRange: "$150", notes: "Minimal office ratio" },
  { type: "Manufacturing", lowRange: "$100", midRange: "$150", highRange: "$200", notes: "Higher utility requirements" },
  { type: "Assisted Living", lowRange: "$200", midRange: "$275", highRange: "$350", notes: "AHCA-compliant" },
  { type: "Church/Worship", lowRange: "$150", midRange: "$225", highRange: "$300", notes: "Sanctuary + support spaces" },
  { type: "Self-Storage", lowRange: "$50", midRange: "$70", highRange: "$100", notes: "Climate-controlled higher" },
];

const hardCostBreakdown = [
  { category: "Site Work & Earthwork", percentage: "5-10%", description: "Grading, utilities, parking, landscaping", factors: "Site complexity, soil conditions, stormwater requirements" },
  { category: "Concrete & Foundations", percentage: "8-15%", description: "Foundations, slabs, structural concrete", factors: "Soil conditions, building height, equipment loads" },
  { category: "Structural Steel/Framing", percentage: "10-18%", description: "Structural system, framing, decking", factors: "Building height, spans, wind load requirements" },
  { category: "Exterior Enclosure", percentage: "12-18%", description: "Roofing, walls, windows, doors", factors: "Material selections, energy code, hurricane requirements" },
  { category: "Interior Finishes", percentage: "15-25%", description: "Drywall, flooring, ceilings, millwork", factors: "Finish level, complexity, special requirements" },
  { category: "Mechanical (HVAC)", percentage: "10-15%", description: "HVAC systems, controls, ductwork", factors: "System type, efficiency requirements, special needs" },
  { category: "Electrical", percentage: "10-14%", description: "Power distribution, lighting, low voltage", factors: "Technology requirements, emergency power, special systems" },
  { category: "Plumbing", percentage: "5-10%", description: "Fixtures, piping, water heaters, fire suppression", factors: "Fixture count, fire sprinkler system, special requirements" },
];

const softCostBreakdown = [
  { category: "Architecture & Engineering", percentage: "6-10%", description: "Design, drawings, specifications, coordination" },
  { category: "Permits & Impact Fees", percentage: "2-5%", description: "Building permits, plan review, impact fees vary by jurisdiction" },
  { category: "Legal & Accounting", percentage: "1-2%", description: "Contract review, entity formation, tax planning" },
  { category: "Insurance", percentage: "1-2%", description: "Builder's risk, general liability during construction" },
  { category: "Testing & Inspections", percentage: "0.5-1%", description: "Soils testing, special inspections, commissioning" },
  { category: "Project Management", percentage: "2-4%", description: "Owner's rep, construction management fees" },
  { category: "Contingency", percentage: "5-15%", description: "Reserve for unknowns—essential risk management" },
  { category: "Financing Costs", percentage: "3-6%", description: "Interest during construction, loan fees" },
];

const costDrivers = [
  {
    driver: "Site Conditions",
    lowImpact: "Flat, buildable site with existing utilities",
    highImpact: "Challenging topography, poor soils, wetlands, utility extensions",
    potentialVariance: "±15-30%",
  },
  {
    driver: "Building Height",
    lowImpact: "1-2 story wood-frame construction",
    highImpact: "Multi-story with structural steel/concrete",
    potentialVariance: "±20-50%",
  },
  {
    driver: "Finish Level",
    lowImpact: "Basic commercial grade finishes",
    highImpact: "Premium materials, custom millwork, high-end fixtures",
    potentialVariance: "±25-40%",
  },
  {
    driver: "Building Complexity",
    lowImpact: "Simple rectangular footprint",
    highImpact: "Complex geometry, multiple roof levels, custom features",
    potentialVariance: "±10-25%",
  },
  {
    driver: "Code Requirements",
    lowImpact: "Standard occupancy, standard wind zone",
    highImpact: "Healthcare, high wind zone, flood plain, historic district",
    potentialVariance: "±10-30%",
  },
  {
    driver: "Market Conditions",
    lowImpact: "Stable material prices, available labor",
    highImpact: "Material shortages, labor constraints, high demand",
    potentialVariance: "±10-25%",
  },
];

const tampaMarketFactors = [
  {
    factor: "Hurricane Code Requirements",
    impact: "Florida Building Code requires enhanced wind resistance, especially within 1 mile of coast. Impact windows/doors or shutters required in many areas.",
    costImplication: "$15-40/SF additional depending on location and building type",
  },
  {
    factor: "Impact Fees",
    impact: "Tampa Bay jurisdictions charge significant impact fees: Hillsborough $10,000-18,000/unit for multi-family; commercial varies by use and intensity.",
    costImplication: "Can add $5-15/SF to total project cost",
  },
  {
    factor: "Soil Conditions",
    impact: "Variable soils, high water tables, and sinkhole-prone areas require enhanced foundation systems in many locations.",
    costImplication: "Deep foundations can add $10-30/SF vs. standard footings",
  },
  {
    factor: "Labor Market",
    impact: "Tampa Bay's construction boom creates competition for skilled trades. Labor availability affects both cost and schedule.",
    costImplication: "Labor costs 10-15% higher than pre-2020 levels",
  },
  {
    factor: "Material Transportation",
    impact: "Tampa's port access helps but distance from some material sources adds freight cost.",
    costImplication: "Steel and specialty materials may carry freight premiums",
  },
  {
    factor: "Energy Code",
    impact: "Florida Energy Conservation Code requires high-performance envelopes and efficient HVAC systems.",
    costImplication: "$3-8/SF for enhanced insulation, glazing, and equipment efficiency",
  },
];

const faqs = [
  {
    question: "How accurate are early-stage construction cost estimates?",
    answer: "Accuracy improves as design progresses. Conceptual estimates (before design) are typically ±15-25% accurate. Schematic design estimates improve to ±10-15%. By design development, estimates should be within ±5-10%. Final GMP or lump sum proposals at 60-90% design completion provide contractual cost certainty. The key is understanding what level of accuracy you have at each stage and making appropriate decisions based on that uncertainty.",
  },
  {
    question: "What's the difference between hard costs and soft costs?",
    answer: "Hard costs are the physical construction—materials, labor, equipment, and subcontractor work that become the building itself. Hard costs typically represent 65-75% of total project cost. Soft costs are everything else: design fees, permits, inspections, legal, insurance, financing, and contingency. Soft costs typically run 25-35% of hard costs. Both must be budgeted for a complete project picture.",
  },
  {
    question: "Why do commercial construction costs vary so much?",
    answer: "Commercial construction costs vary based on building type (medical costs more than warehouse), finish level (Class A vs. Class B office), site conditions (challenging sites cost more), building complexity (simple rectangles vs. complex geometry), code requirements (healthcare and hurricane zones add cost), and market conditions (labor and material availability). Two 10,000 SF buildings could cost $1.5M or $4M depending on these factors.",
  },
  {
    question: "How do I budget for construction contingency?",
    answer: "Contingency protects against unknowns. For new construction with complete design: 5-10%. For design-build with GMP at partial design: 10-15%. For renovation with unknowns: 15-25%. Complex renovations or historic buildings: 20-30%. These aren't padding—they're risk management. Projects without adequate contingency frequently fail to complete as planned. As design progresses and unknowns are resolved, unused contingency can be reallocated.",
  },
  {
    question: "What typically causes cost overruns in commercial construction?",
    answer: "Common causes include: inadequate early budgeting (unrealistic expectations from the start), scope creep (adding features without adjusting budget), design changes after construction starts, unforeseen site conditions, incomplete specifications leading to change orders, material price escalation on long projects, and inadequate contingency. Most overruns are preventable with realistic early budgeting and disciplined scope management.",
  },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Decoding Commercial Construction Costs in Tampa Bay"
        description="Comprehensive guide to understanding commercial construction costs, budgeting factors, and cost drivers in the Tampa Bay market."
        datePublished="2024-01-15"
        dateModified="2025-01-15"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
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
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Decoding Commercial Construction Costs in Tampa Bay
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Understanding what drives construction costs helps you make informed decisions. Florida Construction Specialists reveals the factors behind commercial construction pricing in Tampa Bay.
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

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Understanding Commercial Construction Pricing
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Commercial construction costs can seem mysterious. Two similar-looking buildings can cost dramatically different amounts. A quote that seems high from one contractor is low from another. Budget estimates early in planning often bear little resemblance to final costs. This guide demystifies commercial construction pricing and helps you understand what drives costs in Tampa Bay's market.
            </p>
            <p className="text-gray-600 mb-6">
              Construction pricing reflects the intersection of labor, materials, complexity, and market conditions. Unlike manufactured products with fixed costs, every construction project is unique—built by different teams, on different sites, with different specifications. Understanding the factors that influence cost helps you make better decisions throughout the development process.
            </p>
            <p className="text-gray-600 mb-6">
              At Florida Construction Specialists, we believe in cost transparency. Projects succeed when owners have realistic expectations from the start. We provide detailed cost guidance throughout preconstruction, helping clients understand not just what their project will cost, but why. This transparency builds trust and prevents the budget surprises that derail projects.
            </p>
            <p className="text-gray-600 mb-8">
              This guide covers construction costs by building type in Tampa Bay, the breakdown of hard and soft costs, key cost drivers, Tampa Bay-specific factors, and practical budgeting guidance. Whether you're planning your first commercial project or expanding an existing portfolio, understanding these fundamentals will help you navigate construction costs successfully.
            </p>
          </div>
        </div>
      </section>

      {/* Cost by Building Type */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Tampa Bay Commercial Construction Costs by Building Type (2024)
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Construction costs per square foot vary significantly by building type. These ranges reflect hard construction costs in the Tampa Bay market—soft costs, land, and FF&E are additional.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-heading">Building Type</th>
                  <th className="px-6 py-4 text-center font-heading">Low Range</th>
                  <th className="px-6 py-4 text-center font-heading">Mid Range</th>
                  <th className="px-6 py-4 text-center font-heading">High Range</th>
                  <th className="px-6 py-4 text-left font-heading">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {costsByBuildingType.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-700">{row.type}</td>
                    <td className="px-6 py-4 text-center text-gray-600">{row.lowRange}/SF</td>
                    <td className="px-6 py-4 text-center text-brand-green font-semibold">{row.midRange}/SF</td>
                    <td className="px-6 py-4 text-center text-gray-600">{row.highRange}/SF</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            *Ranges represent construction hard costs only. Actual costs vary based on specific project requirements, site conditions, and market timing.
          </p>
        </div>
      </section>

      {/* Hard Cost Breakdown */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Understanding Hard Cost Components
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Hard costs are the direct construction expenditures—materials, labor, and equipment that become the physical building.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {hardCostBreakdown.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-brand-green-dark">{item.category}</h3>
                  <span className="text-brand-gold font-bold">{item.percentage}</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="bg-white rounded-lg p-3">
                  <span className="text-xs text-gray-500 font-semibold">Cost Factors:</span>
                  <p className="text-sm text-gray-700 mt-1">{item.factors}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Cost Breakdown */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Soft Cost Components
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Soft costs are the non-construction expenses necessary to complete your project. They typically add 25-35% to hard construction costs.
          </p>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-heading">Category</th>
                  <th className="px-6 py-4 text-center font-heading">% of Hard Costs</th>
                  <th className="px-6 py-4 text-left font-heading">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {softCostBreakdown.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-700">{item.category}</td>
                    <td className="px-6 py-4 text-center text-brand-green font-semibold">{item.percentage}</td>
                    <td className="px-6 py-4 text-gray-600">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="max-w-4xl mx-auto mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
              <h3 className="font-bold text-amber-800">Don't Forget Soft Costs</h3>
            </div>
            <p className="text-gray-700">
              A common budgeting mistake is focusing only on construction costs. A $2 million construction budget actually requires $2.5-2.7 million total when soft costs are included. Underfunding soft costs leads to cash flow problems and project delays.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Drivers */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Key Cost Drivers: Why Costs Vary
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Understanding what drives cost variance helps you make informed design and site selection decisions.
          </p>
          <div className="space-y-6 max-w-4xl mx-auto">
            {costDrivers.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-brand-green-dark flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-brand-gold" />
                    {item.driver}
                  </h3>
                  <span className="px-4 py-2 bg-brand-green text-white text-sm font-bold rounded-full">
                    {item.potentialVariance}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <span className="text-xs text-green-700 font-semibold uppercase">Lower Cost</span>
                    <p className="text-gray-700 text-sm mt-1">{item.lowImpact}</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <span className="text-xs text-red-700 font-semibold uppercase">Higher Cost</span>
                    <p className="text-gray-700 text-sm mt-1">{item.highImpact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tampa Market Factors */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4 font-heading">
            Tampa Bay-Specific Cost Factors
          </h2>
          <p className="text-center text-white/90 mb-12 max-w-3xl mx-auto">
            Building in Tampa Bay comes with unique cost considerations that affect every commercial project.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {tampaMarketFactors.map((item, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">{item.factor}</h3>
                <p className="text-white/80 text-sm mb-4">{item.impact}</p>
                <div className="bg-brand-gold/20 rounded-lg p-3">
                  <span className="text-xs text-brand-gold font-semibold">Cost Impact:</span>
                  <p className="text-white text-sm mt-1">{item.costImplication}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Planning Tips */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-8 font-heading">
            Practical Budgeting Guidance
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <Calculator className="w-10 h-10 text-brand-gold mb-4" />
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Start with Reality</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Get professional estimates before committing to projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Use current Tampa Bay market rates, not national averages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Include all costs—hard, soft, land, and FF&E</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Build in appropriate contingency for your project type</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <PieChart className="w-10 h-10 text-brand-gold mb-4" />
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Track Throughout</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Update estimates at each design phase</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Understand cost impact before making design decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Monitor market conditions that affect pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Have go/no-go checkpoints before major commitments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Cost Estimator Guide */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Quick Budget Estimation Formula
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-4">Step-by-Step:</h3>
                  <ol className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-brand-green text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                      <span className="text-gray-600">Building SF × Cost/SF for your type = Hard Costs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-brand-green text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                      <span className="text-gray-600">Hard Costs × 1.25-1.35 = Total Construction Budget</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-brand-green text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                      <span className="text-gray-600">Add Land Cost + FF&E = Total Project Budget</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-brand-green text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                      <span className="text-gray-600">Add 10-15% contingency for planning purposes</span>
                    </li>
                  </ol>
                </div>
                <div className="bg-brand-green-light/30 rounded-xl p-6">
                  <h3 className="font-bold text-brand-green-dark mb-4">Example: 10,000 SF Office</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Hard Costs (@ $200/SF):</span>
                      <span className="font-semibold">$2,000,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Soft Costs (30%):</span>
                      <span className="font-semibold">$600,000</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="text-gray-700 font-semibold">Subtotal:</span>
                      <span className="font-semibold">$2,600,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Planning Contingency (10%):</span>
                      <span className="font-semibold">$260,000</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 text-brand-green-dark">
                      <span className="font-bold">Budget (before land/FF&E):</span>
                      <span className="font-bold">$2,860,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            title="Related Cost & Planning Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Understand Your Project Costs?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists provides transparent cost guidance from day one. Let's discuss your project and give you realistic budget expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
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
