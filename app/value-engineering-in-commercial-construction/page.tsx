import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { Phone, CheckCircle, DollarSign, Lightbulb, Target, TrendingUp, Settings, Scale, AlertTriangle, HelpCircle, Wrench, Building2 } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Value Engineering in Commercial Construction | Tampa Bay | FCS",
  description: "Unlock value engineering potential in your commercial construction project. Learn how systematic analysis delivers 10-25% cost savings while maintaining or improving building quality.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Value Engineering in Commercial Construction", href: "/value-engineering-in-commercial-construction/" },
];

const internalLinks = [
  { href: "/benefits-of-value-engineering-for-construction/", label: "VE Benefits Deep Dive" },
  { href: "/decoding-value-engineering-florida-construction-expertise/", label: "Florida VE Expertise" },
  { href: "/financial-planning-for-commercial-construction/", label: "Financial Planning Guide" },
  { href: "/services/commercial/design-build/", label: "Design-Build Services" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const veKeyBenefits = [
  {
    icon: DollarSign,
    title: "Cost Reduction",
    stat: "10-25%",
    description: "Typical savings on construction costs without reducing building quality or functionality",
  },
  {
    icon: TrendingUp,
    title: "Enhanced Value",
    stat: "Better ROI",
    description: "More building performance for your investment through optimized solutions",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    stat: "Better Solutions",
    description: "VE often discovers alternatives that outperform original design approaches",
  },
  {
    icon: Target,
    title: "Function Focus",
    stat: "Purpose-Driven",
    description: "Every element is evaluated against what it must actually accomplish",
  },
];

const veBuildingSystems = [
  {
    system: "Structural Systems",
    opportunities: [
      "Alternative framing materials (steel vs. concrete vs. wood)",
      "Foundation optimization based on geotechnical conditions",
      "Column spacing and bay size optimization",
      "Pre-engineered vs. conventional structural systems",
      "Post-tensioned concrete vs. conventional reinforcing",
    ],
    typicalSavings: "5-15%",
    tampaTip: "Florida's soil conditions and wind loads make structural VE particularly impactful",
  },
  {
    system: "Building Envelope",
    opportunities: [
      "Window-to-wall ratio optimization",
      "Cladding material alternatives",
      "Insulation strategies (continuous vs. cavity)",
      "Roofing system selection",
      "High-performance glazing cost-benefit analysis",
    ],
    typicalSavings: "3-12%",
    tampaTip: "Hurricane requirements create opportunities for strategic material choices",
  },
  {
    system: "Mechanical (HVAC)",
    opportunities: [
      "VRF systems vs. conventional rooftop units",
      "Equipment right-sizing through accurate load calcs",
      "Distribution efficiency optimization",
      "Control system sophistication levels",
      "Heat recovery and energy efficiency investments",
    ],
    typicalSavings: "5-15%",
    tampaTip: "Tampa's cooling-dominant climate rewards efficient HVAC system selection",
  },
  {
    system: "Electrical Systems",
    opportunities: [
      "LED lighting with daylight harvesting",
      "Panel and circuit optimization",
      "Emergency/standby power right-sizing",
      "Low-voltage systems integration",
      "Renewable energy cost-benefit analysis",
    ],
    typicalSavings: "3-10%",
    tampaTip: "Florida's abundant sunshine makes solar evaluation essential in VE studies",
  },
  {
    system: "Interior Finishes",
    opportunities: [
      "Material standardization across spaces",
      "Strategic premium finish placement",
      "Modular vs. custom millwork",
      "Flooring material selection by use area",
      "Ceiling system optimization",
    ],
    typicalSavings: "5-20%",
    tampaTip: "High humidity requires moisture-resistant material selection",
  },
  {
    system: "Site Development",
    opportunities: [
      "Grading and earthwork optimization",
      "Stormwater management alternatives",
      "Paving material and thickness analysis",
      "Landscape planting selections",
      "Utility routing optimization",
    ],
    typicalSavings: "5-20%",
    tampaTip: "Tampa's flat terrain and high water table create site-specific VE opportunities",
  },
];

const veProcess = [
  {
    phase: "Information Gathering",
    duration: "1-2 days",
    description: "Collect project documents, understand requirements, establish baseline costs",
    activities: ["Review drawings and specifications", "Understand owner priorities", "Analyze current cost estimate", "Identify high-cost items"],
  },
  {
    phase: "Function Analysis",
    duration: "1-2 days",
    description: "Identify what each building element must accomplish—function, not form",
    activities: ["Break project into functional elements", "Assign costs to functions", "Identify secondary vs. primary functions", "Calculate cost/worth ratios"],
  },
  {
    phase: "Creative Phase",
    duration: "1-2 days",
    description: "Brainstorm alternative ways to achieve required functions",
    activities: ["Team brainstorming sessions", "Defer judgment initially", "Encourage unconventional ideas", "Build on others' suggestions"],
  },
  {
    phase: "Evaluation",
    duration: "1-2 days",
    description: "Analyze alternatives for feasibility, cost, and risk",
    activities: ["Screen ideas for viability", "Develop cost estimates", "Assess performance impact", "Rank alternatives by value"],
  },
  {
    phase: "Development",
    duration: "2-3 days",
    description: "Detail selected alternatives with implementation plans",
    activities: ["Detailed cost analysis", "Develop specifications", "Identify implementation requirements", "Prepare recommendations"],
  },
  {
    phase: "Presentation",
    duration: "1 day",
    description: "Present recommendations for owner decision-making",
    activities: ["Clear recommendation summary", "Support decision-making", "Document rationale", "Facilitate implementation"],
  },
];

const veVsCostCutting = {
  valueEngineering: [
    "Maintains or improves required function",
    "Considers lifecycle costs, not just first cost",
    "Integrated throughout design process",
    "Systematic analysis with documented rationale",
    "Often finds better-performing alternatives",
    "Preserves design intent and quality",
  ],
  costCutting: [
    "Removes features or reduces quality",
    "Focuses only on initial construction cost",
    "Happens late under budget pressure",
    "Ad-hoc decisions driven by urgency",
    "Usually results in compromised performance",
    "Sacrifices design intent to hit budget",
  ],
};

const veCaseExamples = [
  {
    project: "Corporate Office Building",
    size: "45,000 SF",
    originalBudget: "$9.5M",
    veItems: [
      { item: "Structural steel vs. concrete frame", savings: "$280,000", impact: "Faster schedule, equivalent performance" },
      { item: "VRF HVAC vs. conventional RTU", savings: "$175,000", impact: "Better zone control, lower operating cost" },
      { item: "Alternate curtain wall system", savings: "$195,000", impact: "Same performance, better lead time" },
      { item: "Parking lot material optimization", savings: "$85,000", impact: "Same durability, reduced thickness" },
    ],
    totalSavings: "$735,000",
    percentage: "7.7%",
  },
  {
    project: "Medical Office Building",
    size: "28,000 SF",
    originalBudget: "$7.8M",
    veItems: [
      { item: "Foundation system redesign", savings: "$165,000", impact: "Matched to actual soil conditions" },
      { item: "Mechanical system right-sizing", savings: "$225,000", impact: "Eliminated oversizing from preliminary calcs" },
      { item: "Interior finish standardization", savings: "$145,000", impact: "Simplified specifications, bulk pricing" },
      { item: "Electrical panel optimization", savings: "$78,000", impact: "Eliminated excess capacity" },
    ],
    totalSavings: "$613,000",
    percentage: "7.9%",
  },
  {
    project: "Retail Center Renovation",
    size: "65,000 SF",
    originalBudget: "$5.2M",
    veItems: [
      { item: "Existing structure reuse", savings: "$340,000", impact: "Avoided unnecessary demolition" },
      { item: "Storefront system value engineering", savings: "$185,000", impact: "Equivalent performance, better availability" },
      { item: "Site work phasing optimization", savings: "$125,000", impact: "Reduced temporary measures" },
      { item: "MEP selective replacement", savings: "$210,000", impact: "Preserved adequate existing systems" },
    ],
    totalSavings: "$860,000",
    percentage: "16.5%",
  },
];

const veTimingImpact = [
  { phase: "Programming/Concept", potential: "Highest", savings: "15-25%", ease: "Easiest", note: "Major system decisions still open" },
  { phase: "Schematic Design", potential: "High", savings: "10-20%", ease: "Easy", note: "Significant alternatives still possible" },
  { phase: "Design Development", potential: "Moderate", savings: "5-15%", ease: "Moderate", note: "Some redesign cost for major changes" },
  { phase: "Construction Documents", potential: "Limited", savings: "3-8%", ease: "Difficult", note: "Changes expensive, time-consuming" },
  { phase: "Bidding/Construction", potential: "Minimal", savings: "1-5%", ease: "Very Difficult", note: "Usually scope reduction, not VE" },
];

const faqs = [
  {
    question: "When should value engineering happen in a commercial construction project?",
    answer: "The earlier, the better. Value engineering during schematic design offers maximum flexibility—major system decisions are still open, and changes cost nothing beyond design time. By design development, changes become more expensive as documents are already in progress. VE during construction documents typically yields limited savings because changes require expensive redesign. VE during bidding or construction isn't really VE—it's usually desperate cost-cutting that sacrifices quality. Design-build delivery enables continuous VE throughout design because the contractor is involved from the start.",
  },
  {
    question: "How is value engineering different from simply cutting costs?",
    answer: "Value engineering maintains or improves function while reducing cost. Cost-cutting removes function or quality to save money. For example: VE might substitute a VRF HVAC system for rooftop units—providing equal or better comfort at lower installed and operating cost. Cost-cutting would simply install smaller, cheaper equipment that doesn't adequately condition the space. VE considers lifecycle costs and long-term performance; cost-cutting focuses only on first cost. The difference is systematic analysis versus ad-hoc budget trimming.",
  },
  {
    question: "What percentage of savings should I expect from value engineering?",
    answer: "Typical VE savings range from 10-25% of construction costs on commercial projects. A formal VE study conducted during design typically identifies opportunities worth 2-3x the cost of the study. However, savings vary based on: project type (complex buildings offer more opportunity than simple ones), design efficiency (some designs already incorporate efficient solutions), and timing (early VE yields more than late VE). We've achieved savings from 5% on already-efficient designs to over 20% on complex projects with multiple optimization opportunities.",
  },
  {
    question: "Does value engineering compromise building quality?",
    answer: "Properly executed VE never compromises quality—that would be cost-cutting, not VE. True value engineering maintains or improves function while reducing cost. We've often found VE alternatives that actually perform better than original designs—different doesn't mean worse. Every VE recommendation we make includes analysis of performance impact. We present recommendations that maintain quality; any trade-offs are clearly identified for owner decision. If a recommendation would reduce quality below acceptable levels, it's not a valid VE recommendation.",
  },
  {
    question: "Who should participate in value engineering studies?",
    answer: "Effective VE requires diverse perspectives: the design team (architects, engineers) who understand design intent; the construction team who knows what works in the field and the current market; specialty consultants for complex systems; and owners who can validate functional requirements and priorities. For design-build projects, this collaboration happens naturally since the builder is part of the design team. For traditional delivery, formal VE workshops bring these perspectives together. The best VE comes from genuine collaboration, not adversarial budget battles.",
  },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Value Engineering in Commercial Construction"
        description="Comprehensive guide to value engineering for commercial construction projects. Learn how systematic function analysis delivers cost savings while maintaining quality."
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
            Unlocking Value Engineering in Commercial Construction
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Value engineering delivers more building for your budget. Florida Construction Specialists shows how systematic analysis achieves 10-25% cost savings while maintaining or improving quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get VE Analysis
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
              What is Value Engineering?
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Value engineering is a systematic method for improving project value by examining functions. Developed during World War II to address material shortages, VE has evolved into a sophisticated discipline used worldwide in construction, manufacturing, and project management. The core principle: analyze what each element must accomplish (its function), then find optimal ways to achieve that function.
            </p>
            <p className="text-gray-600 mb-6">
              The foundation of value engineering is function analysis. A wall's function isn't "to be made of brick"—its function is "to enclose space" and potentially "to resist weather," "to provide insulation," and "to present image." Once you understand the required functions, you can evaluate different ways to achieve them. Maybe tilt-up concrete accomplishes the same functions at lower cost. Maybe insulated metal panels deliver better performance. VE opens these possibilities.
            </p>
            <p className="text-gray-600 mb-6">
              At Florida Construction Specialists, value engineering is integrated into every commercial project. Our construction expertise informs design decisions from the start, identifying cost-saving opportunities before drawings are finalized. We know which materials are available locally, which systems our subcontractors execute efficiently, and which alternatives actually work in Tampa Bay's climate and code environment.
            </p>
            <p className="text-gray-600 mb-8">
              This guide explains how value engineering works, where savings are found, when VE should happen, and how design-build delivery maximizes VE benefits. Whether you're building your first commercial project or optimizing an established development program, understanding VE helps you get more value from every construction dollar.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Value Engineering Benefits
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Systematic value engineering delivers measurable improvements across multiple project dimensions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {veKeyBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">{benefit.title}</h3>
                <div className="text-3xl font-bold text-brand-gold mb-3">{benefit.stat}</div>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VE vs Cost Cutting */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Value Engineering vs. Cost Cutting
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Understanding the difference is crucial. One improves value; the other destroys it.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-brand-green/5 border-2 border-brand-green rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="w-8 h-8 text-brand-green" />
                  <h3 className="text-xl font-bold text-brand-green-dark">Value Engineering ✓</h3>
                </div>
                <ul className="space-y-3">
                  {veVsCostCutting.valueEngineering.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                  <h3 className="text-xl font-bold text-red-800">Cost Cutting ✗</h3>
                </div>
                <ul className="space-y-3">
                  {veVsCostCutting.costCutting.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0">✗</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building Systems */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Value Engineering by Building System
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Every building system offers VE opportunities. Here's where we typically find savings on Tampa Bay projects.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {veBuildingSystems.map((system, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-brand-green-dark">{system.system}</h3>
                  <span className="px-3 py-1 bg-brand-green/10 text-brand-green-dark text-sm font-bold rounded-full">
                    {system.typicalSavings}
                  </span>
                </div>
                <ul className="space-y-2 mb-4">
                  {system.opportunities.map((opp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      {opp}
                    </li>
                  ))}
                </ul>
                <div className="bg-brand-gold/10 rounded-lg p-3">
                  <span className="text-xs text-brand-gold font-semibold">Tampa Bay Tip:</span>
                  <p className="text-sm text-gray-700 mt-1">{system.tampaTip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VE Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              The Value Engineering Process
            </h2>
            <p className="text-center text-gray-600 mb-8">
              A structured methodology ensures thorough analysis and implementable results.
            </p>
            <div className="space-y-4">
              {veProcess.map((phase, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-brand-green-dark">{phase.phase}</h3>
                        <span className="text-sm text-brand-gold font-medium">{phase.duration}</span>
                      </div>
                      <p className="text-gray-600 mb-3">{phase.description}</p>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {phase.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-500">
                            <Settings className="w-3 h-3 text-brand-gold mt-1 flex-shrink-0" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timing Impact */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              When VE Happens Matters
            </h2>
            <p className="text-center text-gray-600 mb-8">
              VE effectiveness decreases dramatically as design progresses. Early engagement is key.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Design Phase</th>
                    <th className="px-6 py-4 text-center font-heading">VE Potential</th>
                    <th className="px-6 py-4 text-center font-heading">Typical Savings</th>
                    <th className="px-6 py-4 text-center font-heading">Ease of Change</th>
                    <th className="px-6 py-4 text-left font-heading">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {veTimingImpact.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.phase}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          row.potential === 'Highest' ? 'bg-green-100 text-green-800' :
                          row.potential === 'High' ? 'bg-green-50 text-green-700' :
                          row.potential === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                          row.potential === 'Limited' ? 'bg-orange-100 text-orange-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {row.potential}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-brand-green font-semibold">{row.savings}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{row.ease}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Case Examples */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Value Engineering Results: Real Tampa Bay Projects
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            These examples illustrate the types of VE savings we achieve on commercial projects.
          </p>
          <div className="space-y-8 max-w-5xl mx-auto">
            {veCaseExamples.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark">{project.project}</h3>
                    <p className="text-gray-600">{project.size} | Original Budget: {project.originalBudget}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-brand-green">{project.totalSavings}</div>
                    <div className="text-brand-gold font-semibold">{project.percentage} savings</div>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-brand-green">
                        <th className="text-left py-2 text-gray-700">VE Item</th>
                        <th className="text-right py-2 text-gray-700">Savings</th>
                        <th className="text-left py-2 pl-4 text-gray-700">Performance Impact</th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.veItems.map((item, idx) => (
                        <tr key={idx} className="border-b border-gray-200">
                          <td className="py-3 text-gray-600">{item.item}</td>
                          <td className="py-3 text-right text-brand-green font-semibold">{item.savings}</td>
                          <td className="py-3 pl-4 text-gray-500 text-sm">{item.impact}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-6 text-center max-w-3xl mx-auto">
            *All savings achieved without reducing building quality or functionality. These represent value improvements, not scope reductions.
          </p>
        </div>
      </section>

      {/* Design-Build Advantage */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 font-heading text-center">
              Why Design-Build Maximizes VE Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 rounded-xl p-6">
                <Building2 className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold mb-4">Continuous Integration</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">VE at every design phase, not just one workshop</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Construction expertise available during early design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Real-time cost feedback on design decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Alternatives tested immediately, not after bid</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <Wrench className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold mb-4">Collaborative Approach</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">No adversarial relationship between designer and builder</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Shared incentive to optimize value</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Subcontractor input on specialty systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Market conditions inform material selections</span>
                  </li>
                </ul>
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

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Related Value Engineering Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Maximize Your Project's Value?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let Florida Construction Specialists show you how value engineering can deliver more building for your budget without compromising quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Value Engineering Analysis
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
