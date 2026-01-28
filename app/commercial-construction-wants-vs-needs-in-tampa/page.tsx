import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Target, Scale, DollarSign, Clock, AlertTriangle, Lightbulb, Building2 } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Commercial Construction Wants vs Needs in Tampa | Budget Prioritization Guide",
  description: "Learn to prioritize wants vs needs for your Tampa commercial construction project. Make smart budget decisions that maximize value without compromising essentials.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial Construction Wants vs Needs in Tampa", href: "/commercial-construction-wants-vs-needs-in-tampa/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/efficient-commercial-construction-timelines-in-tampa/", label: "Construction Timelines" },
  { href: "/tampa-commercial-construction-planning-services/", label: "Planning Services" },
  { href: "/commercial-construction-consultancy-in-tampa/", label: "Construction Consultancy" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const needsCategories = [
  {
    category: "Code & Safety Requirements",
    items: [
      "Florida Building Code compliance",
      "Fire suppression and life safety systems",
      "ADA accessibility requirements",
      "Structural integrity and hurricane resistance",
      "Egress and emergency systems",
      "Electrical capacity for essential operations",
    ],
    note: "These are non-negotiable—you cannot legally occupy a building without them.",
  },
  {
    category: "Functional Necessities",
    items: [
      "HVAC adequate for occupancy and climate",
      "Restrooms per occupancy requirements",
      "Core electrical and plumbing systems",
      "Basic lighting for operations",
      "Minimum required parking",
      "Basic security and access control",
    ],
    note: "Essential for the building to serve its intended purpose.",
  },
  {
    category: "Business Operations Requirements",
    items: [
      "Space layout for your specific operations",
      "Data/communication infrastructure",
      "Industry-specific requirements (medical, food service, etc.)",
      "Required storage and back-of-house space",
      "Customer/client reception areas",
      "Utility capacity for equipment needs",
    ],
    note: "What your business specifically requires to function.",
  },
];

const wantsCategories = [
  {
    category: "Aesthetic Upgrades",
    items: [
      "Premium finishes (stone vs. tile, wood vs. LVP)",
      "Custom millwork and architectural details",
      "Designer lighting fixtures",
      "Upgraded ceiling systems",
      "Feature walls and branded elements",
      "High-end restroom fixtures",
    ],
    potential: "10-30% of finish costs",
  },
  {
    category: "Convenience Features",
    items: [
      "Break room upgrades (premium appliances)",
      "Shower/locker facilities",
      "Additional storage beyond minimum",
      "Covered parking or parking structures",
      "On-site amenities (fitness, outdoor spaces)",
      "Premium HVAC zoning and controls",
    ],
    potential: "5-15% of total project cost",
  },
  {
    category: "Technology Enhancements",
    items: [
      "Advanced AV and conference systems",
      "Smart building automation beyond basic",
      "Premium security (biometric, advanced monitoring)",
      "EV charging infrastructure",
      "Backup generator capacity",
      "Enhanced data center/server infrastructure",
    ],
    potential: "3-10% of total project cost",
  },
  {
    category: "Sustainability Features",
    items: [
      "LEED certification pursuit",
      "Solar panel installation",
      "Green roof or enhanced landscaping",
      "Rainwater harvesting systems",
      "Premium insulation and glazing",
      "Electric vehicle charging stations",
    ],
    potential: "5-15% of total project cost",
  },
];

const prioritizationMatrix = [
  {
    priority: "Must Have",
    description: "Cannot open/operate without these items",
    examples: "Code compliance, basic HVAC, core systems, ADA requirements",
    action: "Include in base budget—non-negotiable",
  },
  {
    priority: "Should Have",
    description: "Significantly impacts operations or client experience",
    examples: "Quality finishes in public areas, adequate conference rooms, efficient layout",
    action: "Include in budget with defined specifications",
  },
  {
    priority: "Nice to Have",
    description: "Improves experience but not critical to operations",
    examples: "Premium break room, enhanced AV, decorative features",
    action: "Price as alternates—include if budget allows",
  },
  {
    priority: "Future Consideration",
    description: "Desirable but can be added later",
    examples: "Solar panels, expanded amenities, additional parking",
    action: "Design to accommodate future installation; defer construction",
  },
];

const valueEngineering = [
  {
    strategy: "Material Substitutions",
    description: "Replace premium materials with similar-performing alternatives that cost less but provide the same functionality.",
    examples: "LVP instead of hardwood, porcelain instead of natural stone, pre-engineered vs. custom millwork",
    savings: "5-20% on affected scope",
  },
  {
    strategy: "Scope Refinement",
    description: "Reduce square footage or simplify layout while maintaining core functionality.",
    examples: "Smaller conference rooms, shared spaces instead of individual offices, simplified back-of-house",
    savings: "Proportional to SF reduction",
  },
  {
    strategy: "Phased Construction",
    description: "Build core requirements now; add amenities in later phases as budget allows.",
    examples: "Phase 1: operational space; Phase 2: employee amenities; Phase 3: premium finishes",
    savings: "Spreads cost over time",
  },
  {
    strategy: "Alternate Pricing",
    description: "Bid base scope plus alternates for 'wants' to understand true costs before committing.",
    examples: "Base bid with tile, alternate for stone; base lighting with upgrade alternate",
    savings: "Informed decision-making",
  },
  {
    strategy: "Long-term Value Analysis",
    description: "Consider lifecycle costs—spending more upfront may save money over time.",
    examples: "Energy-efficient systems, durable materials, quality HVAC equipment",
    savings: "ROI over building life",
  },
];

const faqs = [
  {
    question: "How do I determine what's a 'need' vs. a 'want' for my commercial project?",
    answer: "Start by identifying code requirements (non-negotiable 'needs'), then list what's required for your business to actually function. Everything else is potentially a 'want.' Ask: Can we legally occupy without this? Can we operate our business without this? If yes to both, it's likely a want. Then rank wants by impact on revenue, client experience, and employee productivity.",
  },
  {
    question: "What percentage of my budget should go to 'wants'?",
    answer: "It depends on your priorities and financial position. A reasonable guideline: ensure 'needs' are fully covered with 10-15% contingency, then allocate remaining budget to prioritized 'wants.' For most commercial projects, 70-80% covers needs and contingency; 20-30% funds wants. Never compromise needs to afford wants.",
  },
  {
    question: "How can I get more 'wants' without increasing my budget?",
    answer: "Value engineering is key. Work with your contractor during preconstruction to identify cost-effective alternatives that achieve similar results. Material substitutions, design simplifications, and phased construction can free budget for wants. Also, competitive bidding ensures you're getting fair prices—savings from competitive pricing can fund additional scope.",
  },
  {
    question: "Should I cut back on quality to fit more into my budget?",
    answer: "Be strategic. Quality matters most in high-visibility and high-use areas. Premium finishes in the lobby make sense; premium finishes in the janitor's closet don't. Also consider durability—cheaper materials in high-traffic areas may cost more over time in maintenance and replacement. Cut selectively, not universally.",
  },
  {
    question: "How do I handle scope creep during construction?",
    answer: "Define your wants vs. needs before bidding and stick to your prioritization during construction. When change requests arise, evaluate against your established priorities. If it wasn't important enough to include originally, is it really worth the premium pricing of a change order? Maintain a decision log and refer to it when tempted to add scope.",
  },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Commercial construction planning in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Commercial Construction Wants vs. Needs
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Master the art of budget prioritization. Learn to distinguish essential requirements from desirable upgrades and maximize the value of every construction dollar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Plan Your Project
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
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-6">
              Every commercial construction project involves trade-offs. Budgets are finite, but vision often isn't. The most successful projects are those where owners clearly understand the difference between what they absolutely need and what they'd like to have—and make intentional decisions about where to invest their dollars.
            </p>
            <p className="text-gray-600 mb-6">
              In Tampa's commercial construction market, costs have risen significantly in recent years. What might have been a reasonable "want" a few years ago may now consume budget needed for essentials. Strategic prioritization isn't about settling for less—it's about ensuring you achieve your core objectives while making informed decisions about everything else.
            </p>
            <p className="text-gray-600 mb-8">
              This guide helps you systematically categorize your project requirements, prioritize effectively, and work with your contractor to maximize value within your budget constraints.
            </p>

            <div className="bg-brand-green-light/20 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Scale className="w-8 h-8 text-brand-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">The Core Question</h3>
                  <p className="text-gray-700">
                    For every line item in your project, ask: <em>"If this single item would cause us to exceed budget, would we increase the budget or cut this item?"</em> If you'd cut it, it's a want. If you'd find the money, it's a need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Needs */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            What Are "Needs" in Commercial Construction?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Needs are non-negotiable requirements that must be included regardless of budget pressure.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {needsCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">{category.category}</h3>
                <ul className="space-y-2 mb-4">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-gray-50 rounded-lg p-3 mt-4">
                  <p className="text-sm text-gray-700 italic">{category.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Understanding Wants */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            What Are "Wants" in Commercial Construction?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Wants enhance your project but aren't required for basic function. They should be prioritized, not eliminated.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {wantsCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-brand-green-dark font-heading">{category.category}</h3>
                  <span className="text-sm bg-brand-gold/20 text-brand-gold px-3 py-1 rounded-full font-semibold">
                    {category.potential}
                  </span>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <Lightbulb className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prioritization Matrix */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading flex items-center gap-3">
              <Target className="w-8 h-8 text-brand-gold" />
              Prioritization Framework
            </h2>
            <p className="text-gray-600 mb-8">
              Use this framework to categorize every element of your project and guide budget decisions.
            </p>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Priority Level</th>
                    <th className="px-6 py-4 text-left font-heading">Description</th>
                    <th className="px-6 py-4 text-left font-heading hidden md:table-cell">Budget Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {prioritizationMatrix.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4">
                        <span className={`font-bold ${
                          index === 0 ? 'text-red-600' :
                          index === 1 ? 'text-orange-600' :
                          index === 2 ? 'text-yellow-600' :
                          'text-blue-600'
                        }`}>{item.priority}</span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-gray-700 font-medium">{item.description}</p>
                        <p className="text-gray-500 text-sm mt-1">Examples: {item.examples}</p>
                      </td>
                      <td className="px-6 py-4 text-gray-600 hidden md:table-cell">{item.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Value Engineering Strategies */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-brand-gold" />
              Value Engineering: Getting More for Your Budget
            </h2>
            <p className="text-gray-600 mb-8">
              Value engineering isn't about cutting corners—it's about finding smarter ways to achieve your goals. Work with your contractor to identify these opportunities.
            </p>
            <div className="space-y-4">
              {valueEngineering.map((strategy, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-lg font-bold text-brand-green-dark font-heading">{strategy.strategy}</h3>
                    <span className="text-sm bg-brand-green/20 text-brand-green-dark px-3 py-1 rounded-full font-semibold mt-2 md:mt-0">
                      Potential: {strategy.savings}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{strategy.description}</p>
                  <p className="text-sm text-gray-500"><strong>Examples:</strong> {strategy.examples}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tampa-Specific Considerations */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Tampa Market Considerations
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 font-heading">Hurricane Hardening</h3>
                <p className="text-gray-600 mb-3">
                  In Tampa, enhanced hurricane protection often moves from "want" to "need." While code-minimum construction is legal, impact-resistant glazing, reinforced roofing, and backup power can be essential for business continuity.
                </p>
                <p className="text-sm text-gray-500">Consider insurance premium reductions when evaluating these investments.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 font-heading">Energy Efficiency</h3>
                <p className="text-gray-600 mb-3">
                  Tampa's climate makes efficient HVAC and insulation particularly valuable. Spending more on energy efficiency pays back faster here than in milder climates.
                </p>
                <p className="text-sm text-gray-500">HVAC efficiency upgrades often achieve 3-5 year payback in Tampa's cooling-dominated climate.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 font-heading">Tenant/Client Expectations</h3>
                <p className="text-gray-600 mb-3">
                  Tampa's growing market means competition for tenants and clients. What might be "wants" elsewhere may be necessary to compete—modern finishes, adequate parking, and technology infrastructure.
                </p>
                <p className="text-sm text-gray-500">Survey comparable properties to understand market expectations.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 font-heading">Future Flexibility</h3>
                <p className="text-gray-600 mb-3">
                  Tampa's rapid growth means your needs may change. Building in flexibility (electrical capacity, HVAC zoning, adaptable layouts) can be more valuable than premium finishes.
                </p>
                <p className="text-sm text-gray-500">Design for adaptability even if you can't afford all features now.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-red-800 mb-3 font-heading">Common Mistakes to Avoid</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span><strong>Cutting "needs" to fund "wants"</strong>—Never compromise code compliance, safety, or basic functionality for aesthetics.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span><strong>No contingency budget</strong>—Without contingency, unexpected needs will consume wants or cause project failure.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span><strong>Scope creep during construction</strong>—Adding "wants" via change orders costs significantly more than including them originally.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span><strong>Confusing personal preferences with business needs</strong>—Your favorite tile may not affect business success.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span><strong>Ignoring lifecycle costs</strong>—Cheap materials that need replacement in 5 years aren't actually cheaper.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3 font-heading">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How FCS Helps */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              How Florida Construction Specialists Helps You Prioritize
            </h2>
            <p className="text-gray-600 mb-8">
              Our preconstruction process is designed to help you make informed wants vs. needs decisions before construction begins—when changes are least expensive.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Detailed Cost Breakdowns</p>
                  <p className="text-sm text-gray-600">We provide itemized estimates so you can see exactly where your budget goes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Value Engineering Sessions</p>
                  <p className="text-sm text-gray-600">Our team identifies alternatives that achieve your goals at lower costs.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Alternate Pricing</p>
                  <p className="text-sm text-gray-600">We price base scope plus alternates so you understand the cost of each "want."</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Honest Recommendations</p>
                  <p className="text-sm text-gray-600">We'll tell you what's worth the investment and what you can safely defer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Related Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Let's Prioritize Your Project Together
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our preconstruction team will help you maximize value within your budget. Contact us for a free consultation and detailed project analysis.
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
