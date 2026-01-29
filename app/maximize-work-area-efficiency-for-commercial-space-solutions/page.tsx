import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { Phone, CheckCircle, Building2, LayoutGrid, Users, DollarSign, HelpCircle, Ruler, Zap, ArrowRight, Settings } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Maximize Work Area Efficiency | Commercial Space Solutions Tampa",
  description: "Expert guide to maximizing work area efficiency in commercial spaces. Space planning, layout optimization, density strategies, and construction solutions for Tampa Bay businesses.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Work Area Efficiency", href: "/maximize-work-area-efficiency-for-commercial-space-solutions/" },
];

const internalLinks = [
  { href: "/employee-communication-with-office-layout/", label: "Office Layout Design" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/industrial-flex-space-development/", label: "Flex Space Development" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const efficiencyMetrics = [
  {
    metric: "Usable-to-Rentable Ratio",
    description: "Percentage of leased space that's actually usable",
    benchmark: "85-95% target (higher is better)",
    howToImprove: "Minimize circulation, optimize core location, efficient mechanical rooms",
    impact: "Each 5% improvement saves $2-3/SF in effective rent",
  },
  {
    metric: "Space Per Person",
    description: "Square footage allocated per employee",
    benchmark: "150-200 SF/person for office; varies by use",
    howToImprove: "Activity-based work, shared spaces, right-sizing private offices",
    impact: "Reducing from 250 to 175 SF/person cuts space needs 30%",
  },
  {
    metric: "Meeting Space Ratio",
    description: "Meeting room SF as percentage of total",
    benchmark: "15-25% for collaboration-heavy organizations",
    howToImprove: "Right-size rooms, add small huddle rooms, use booking data",
    impact: "Optimized meeting space can free 10-15% of floor area",
  },
  {
    metric: "Circulation Efficiency",
    description: "Percentage of space used for hallways and pathways",
    benchmark: "20-30% typical; below 25% is efficient",
    howToImprove: "Open layouts, double-loaded corridors, strategic core placement",
    impact: "Reducing circulation from 30% to 22% adds 8% usable space",
  },
];

const spaceOptimizationStrategies = [
  {
    strategy: "Activity-Based Working",
    description: "Variety of spaces matched to work activities instead of assigned desks",
    spaceReduction: "20-40%",
    implementation: [
      "Fewer assigned workstations than employees",
      "Variety of work settings (focus, collaborate, socialize)",
      "Booking systems for reservable spaces",
      "Personal lockers for belongings",
    ],
    bestFor: "Knowledge workers, hybrid schedules, companies prioritizing flexibility",
  },
  {
    strategy: "Hoteling/Hot-Desking",
    description: "Employees reserve workstations rather than having assigned seats",
    spaceReduction: "15-35%",
    implementation: [
      "Reservation system (typically app-based)",
      "Clean desk policy",
      "Personal storage lockers",
      "Universal workstation standards",
    ],
    bestFor: "Sales teams, consultants, companies with remote-first policies",
  },
  {
    strategy: "Right-Sizing Workstations",
    description: "Matching workstation size to actual work requirements",
    spaceReduction: "10-25%",
    implementation: [
      "Replace 8x8 cubes with 6x6 or benching",
      "Reduce private office sizes (120 SF vs. 200 SF)",
      "Eliminate redundant furniture",
      "Optimize storage at point of use",
    ],
    bestFor: "Any organization; particularly during refresh cycles",
  },
  {
    strategy: "Shared Support Spaces",
    description: "Consolidating underutilized spaces across teams",
    spaceReduction: "5-15%",
    implementation: [
      "Shared copy/mail rooms instead of departmental",
      "Consolidated break rooms and kitchens",
      "Shared conference rooms with booking system",
      "Central supply storage vs. distributed",
    ],
    bestFor: "Multi-tenant buildings, large organizations with siloed departments",
  },
  {
    strategy: "Vertical Space Utilization",
    description: "Using height efficiently for storage and mezzanines",
    spaceReduction: "10-30% (of floor area)",
    implementation: [
      "Mezzanine levels in high-ceiling spaces",
      "High-density mobile shelving",
      "Overhead storage systems",
      "Multi-level work platforms",
    ],
    bestFor: "Warehouses, industrial, retail back-of-house",
  },
];

const layoutOptimization = [
  {
    area: "Core & Circulation",
    efficiency: "Core placement affects usable space significantly",
    strategies: [
      "Central core maximizes perimeter office space",
      "Side core may improve natural light distribution",
      "Double-loaded corridors more efficient than single",
      "Combine paths where possible (fire egress with circulation)",
    ],
    potential: "Can impact efficiency 5-10%",
  },
  {
    area: "Workstation Layout",
    efficiency: "Orientation and grouping affect density and collaboration",
    strategies: [
      "Align workstations perpendicular to windows for light sharing",
      "Group by team while maintaining cross-team circulation",
      "Use benching for 20-30% density increase vs. cubes",
      "Locate frequent collaborators adjacent",
    ],
    potential: "15-25% more people in same area",
  },
  {
    area: "Meeting Spaces",
    efficiency: "Most organizations have wrong-sized meeting rooms",
    strategies: [
      "Add more small rooms (2-4 person) for calls and quick meetings",
      "Reduce large conference rooms—most meetings are small",
      "Make large rooms divisible for flexibility",
      "Distribute meeting rooms near using teams",
    ],
    potential: "Can free 10-15% of meeting space for other uses",
  },
  {
    area: "Storage & Filing",
    efficiency: "Digital transformation has reduced physical storage needs",
    strategies: [
      "Audit actual storage needs—often 50% empty or outdated",
      "Implement clean desk and digital-first policies",
      "Use high-density mobile shelving for remaining needs",
      "Eliminate personal filing for shared team storage",
    ],
    potential: "Can reduce file/storage space 50-75%",
  },
];

const industryBenchmarks = [
  { industry: "Tech/Software", sfPerPerson: "125-175", trend: "Decreasing", notes: "Early adopters of ABW and hoteling" },
  { industry: "Professional Services", sfPerPerson: "150-200", trend: "Decreasing", notes: "Moving from private offices to open" },
  { industry: "Financial Services", sfPerPerson: "175-250", trend: "Stable", notes: "Compliance needs limit flexibility" },
  { industry: "Call Center", sfPerPerson: "60-100", trend: "Stable", notes: "Dense by nature; acoustic treatment critical" },
  { industry: "Healthcare Admin", sfPerPerson: "150-200", trend: "Stable", notes: "Paper records and privacy needs" },
  { industry: "Manufacturing Office", sfPerPerson: "150-225", trend: "Decreasing", notes: "Often supports adjacent production" },
  { industry: "Government", sfPerPerson: "175-275", trend: "Slowly decreasing", notes: "Policy-driven; GSA standards apply" },
];

const constructionSolutions = [
  {
    solution: "Demountable Partitions",
    description: "Relocatable wall systems instead of permanent drywall",
    benefits: "Future flexibility, tax advantages (personal property), no drywall dust during moves",
    cost: "$50-150/LF vs. $30-50/LF for drywall",
    roi: "Pays back in 2-3 office reconfigurations",
  },
  {
    solution: "Raised Access Floor",
    description: "Elevated floor creating underfloor plenum for utilities",
    benefits: "Easy power/data changes, HVAC flexibility, future-proofing",
    cost: "$12-25/SF",
    roi: "Best for data-heavy environments with frequent changes",
  },
  {
    solution: "Modular Furniture Systems",
    description: "Integrated desking systems vs. freestanding furniture",
    benefits: "Higher density, built-in power/data, reconfigurable",
    cost: "$4,000-8,000/workstation (vs. $2,500-4,500 freestanding)",
    roi: "30% density improvement often justifies premium",
  },
  {
    solution: "Prefab/Modular Rooms",
    description: "Factory-built phone rooms, huddle rooms, offices",
    benefits: "Fast installation, relocatable, consistent quality",
    cost: "$8,000-25,000 per room",
    roi: "Eliminates construction disruption; can move with lease",
  },
];

const costBenefit = [
  { scenario: "Status Quo", sfPerPerson: 225, employees: 100, totalSF: 22500, annualRent: "$675,000" },
  { scenario: "Basic Optimization", sfPerPerson: 190, employees: 100, totalSF: 19000, annualRent: "$570,000" },
  { scenario: "ABW Implementation", sfPerPerson: 150, employees: 100, totalSF: 15000, annualRent: "$450,000" },
  { scenario: "Aggressive Hoteling", sfPerPerson: 120, employees: 100, totalSF: 12000, annualRent: "$360,000" },
];

const faqs = [
  {
    question: "How do I measure our current space efficiency?",
    answer: "Start with these measurements: Usable SF per employee (total usable ÷ headcount—compare to industry benchmarks); Meeting room utilization (use sensors or booking data—under 40% suggests excess); Workstation utilization (occupancy studies typically show 40-60%); Storage density (linear feet of files per person—often 10x actual need). We provide space utilization studies that combine physical measurements with occupancy sensors and employee surveys to identify optimization opportunities specific to your organization.",
  },
  {
    question: "How much can we realistically save through space optimization?",
    answer: "Most organizations can achieve 15-30% space reduction without compromising productivity—often while improving it. Results depend on starting point and willingness to change. Conservative approaches (right-sizing, shared support spaces) typically save 10-15%. Moderate changes (benching, some unassigned seating) save 15-25%. Aggressive implementations (full ABW, aggressive hoteling) can save 30-40%. At $30/SF rent, a 20% reduction in a 20,000 SF space saves $120,000 annually.",
  },
  {
    question: "What's the construction cost of space optimization projects?",
    answer: "Costs vary by scope: Furniture replacement only: $3,000-6,000/workstation; Light renovation (furniture + power/data): $30-50/SF; Moderate renovation (walls, lighting, finishes): $60-100/SF; Major renovation (HVAC, core changes): $100-150+/SF. However, compare these one-time costs to ongoing rent savings. A $500,000 renovation that reduces space needs by 5,000 SF at $30/SF saves $150,000 annually—payback in 3-4 years with permanent ongoing savings.",
  },
  {
    question: "How do employees react to space reduction?",
    answer: "Change management is critical. Common concerns: loss of personal space, noise, storage. Address through: Employee involvement in planning; Clear communication of 'why' (cost, sustainability, collaboration); Investment in quality—smaller but better spaces; Variety of settings so people have choices; Adequate quiet space for focused work; and Technology that makes new approaches work smoothly. Organizations that invest in change management see higher satisfaction than those that just reconfigure furniture.",
  },
  {
    question: "How does hybrid work affect space planning?",
    answer: "Hybrid work fundamentally changes space equations. Key considerations: Peak attendance (often 40-70% on busy days vs. 100% pre-pandemic); Team coordination days (may need more collaboration space on days teams are in); Technology for hybrid meetings (every room needs video capability); Hot-desking infrastructure (booking systems, clean desk policies); and Reduced individual space, increased collaboration and amenity space. Many organizations are reducing total space 20-30% while increasing investment per square foot.",
  },
  {
    question: "Should we renovate or relocate for better efficiency?",
    answer: "Decision factors: Current lease terms (early termination costs vs. paying for underutilized space); Building constraints (can you achieve desired density in current space?); Location requirements (does current location still serve business needs?); Market conditions (what's available and at what cost?); Timing (how long until lease expires?). Generally, if you're more than 3 years from lease expiration and need significant change, explore both options. Renovation in place often wins when lease terms are favorable and building works, but sometimes relocation to more efficient space makes more sense.",
  },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Maximize Work Area Efficiency for Commercial Space Solutions"
        description="Expert guide to maximizing work area efficiency in commercial spaces. Space planning, layout optimization, and construction solutions for Tampa Bay businesses."
        datePublished="2024-01-15"
        dateModified="2025-01-15"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-large.webp"
            alt="Commercial space optimization in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Maximize Work Area Efficiency for Commercial Spaces
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Every square foot costs money. Smart space planning and construction solutions can reduce your footprint 20-30% while improving how your space works—here's how.
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
              Real estate is typically the second-largest expense for businesses after payroll. Yet studies consistently show that 30-50% of commercial space goes underutilized—empty desks, oversized conference rooms, redundant storage, and inefficient layouts waste money every month.
            </p>
            <p className="text-gray-600 mb-6">
              The shift to hybrid work has accelerated this problem. Many Tampa Bay businesses are paying for space designed for 100% daily attendance when actual occupancy is 40-60%. The opportunity: right-size your space, reduce costs, and actually improve how your workspace supports your business.
            </p>
            <p className="text-gray-600 mb-8">
              This guide covers proven strategies to maximize work area efficiency: key metrics for measuring efficiency, space optimization strategies and their potential, layout optimization principles, construction solutions that enable flexibility, and realistic cost-benefit analysis. Whether you're planning a new space or optimizing existing facilities, these principles help you do more with less.
            </p>
          </div>
        </div>
      </section>

      {/* Efficiency Metrics */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Key Efficiency Metrics
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            What gets measured gets managed. Track these metrics to identify optimization opportunities.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {efficiencyMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Ruler className="w-8 h-8 text-brand-green" />
                  <h3 className="text-lg font-bold text-brand-green-dark">{metric.metric}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{metric.description}</p>
                <div className="space-y-3">
                  <div className="bg-brand-green-light/30 rounded-lg p-3">
                    <p className="text-sm text-brand-green-dark"><strong>Benchmark:</strong> {metric.benchmark}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-700"><strong>How to Improve:</strong> {metric.howToImprove}</p>
                  </div>
                  <div className="bg-brand-gold/20 rounded-lg p-3">
                    <p className="text-sm text-amber-800"><strong>Impact:</strong> {metric.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Strategies */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Space Optimization Strategies
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Proven strategies to reduce space requirements while maintaining or improving functionality.
          </p>
          <div className="space-y-6">
            {spaceOptimizationStrategies.map((strategy, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border-l-4 border-brand-green">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-brand-green-dark">{strategy.strategy}</h3>
                  <span className="px-3 py-1 bg-brand-green text-white text-sm font-semibold rounded-full">
                    {strategy.spaceReduction} reduction
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{strategy.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Implementation</h4>
                    <ul className="space-y-1">
                      {strategy.implementation.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Best For</h4>
                    <p className="text-gray-600 text-sm">{strategy.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Layout Optimization */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4 font-heading">
            Layout Optimization Principles
          </h2>
          <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto">
            How you arrange space matters as much as how much you have.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {layoutOptimization.map((area, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{area.area}</h3>
                  <span className="text-brand-gold text-sm">{area.potential}</span>
                </div>
                <p className="text-white/80 text-sm mb-4">{area.efficiency}</p>
                <ul className="space-y-2">
                  {area.strategies.map((strategy, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-white/80">
                      <CheckCircle className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                      {strategy}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Benchmarks */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Industry Space Benchmarks
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            How does your space per person compare to industry standards?
          </p>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-4 py-4 text-left font-heading">Industry</th>
                  <th className="px-4 py-4 text-center font-heading">SF/Person</th>
                  <th className="px-4 py-4 text-center font-heading">Trend</th>
                  <th className="px-4 py-4 text-left font-heading">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {industryBenchmarks.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-4 font-semibold text-brand-green-dark">{row.industry}</td>
                    <td className="px-4 py-4 text-center text-gray-600">{row.sfPerPerson}</td>
                    <td className="px-4 py-4 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        row.trend === 'Decreasing' ? 'bg-green-100 text-green-700' :
                        row.trend === 'Stable' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {row.trend}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Construction Solutions */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Construction Solutions for Flexibility
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Building systems that enable ongoing optimization and adaptation.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {constructionSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="w-8 h-8 text-brand-green" />
                  <h3 className="text-lg font-bold text-brand-green-dark">{solution.solution}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{solution.description}</p>
                <div className="space-y-3">
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-sm text-green-800"><strong>Benefits:</strong> {solution.benefits}</p>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Cost:</span>
                    <span className="font-semibold text-brand-green">{solution.cost}</span>
                  </div>
                  <div className="bg-brand-gold/20 rounded-lg p-3">
                    <p className="text-sm text-amber-800"><strong>ROI:</strong> {solution.roi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Benefit */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Cost-Benefit Example
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Potential savings for a 100-person organization at $30/SF rent.
          </p>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-4 py-4 text-left font-heading">Scenario</th>
                  <th className="px-4 py-4 text-center font-heading">SF/Person</th>
                  <th className="px-4 py-4 text-center font-heading">Total SF</th>
                  <th className="px-4 py-4 text-center font-heading">Annual Rent</th>
                  <th className="px-4 py-4 text-center font-heading">Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {costBenefit.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-4 font-semibold text-brand-green-dark">{row.scenario}</td>
                    <td className="px-4 py-4 text-center text-gray-600">{row.sfPerPerson}</td>
                    <td className="px-4 py-4 text-center text-gray-600">{row.totalSF.toLocaleString()}</td>
                    <td className="px-4 py-4 text-center text-gray-600">{row.annualRent}</td>
                    <td className="px-4 py-4 text-center text-brand-green font-bold">
                      {index === 0 ? '—' : `$${(675000 - parseInt(row.annualRent.replace(/[$,]/g, ''))).toLocaleString()}/yr`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm">
            Even basic optimization saves $105,000 annually; ABW saves $225,000—funding for better space quality.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-gray-50">
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

      {/* Internal Links */}
      <section className="section bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Commercial Space Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Optimize Your Space?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists helps Tampa Bay businesses maximize their commercial space efficiency. From utilization studies to renovation execution, we help you do more with less.
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
