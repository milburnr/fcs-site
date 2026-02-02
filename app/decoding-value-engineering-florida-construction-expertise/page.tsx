import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Target, Lightbulb, Building2, DollarSign, TrendingUp, Settings, Wrench, Scale } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Decoding Value Engineering: Florida Construction Expertise | Tampa",
  description: "Deep dive into value engineering methodology for commercial construction. Learn how Florida Construction Specialists applies systematic analysis to optimize building value while reducing costs.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Decoding Value Engineering Florida Construction Expertise", href: "/decoding-value-engineering-florida-construction-expertise/" },
];

const internalLinks = [
  { href: "/benefits-of-value-engineering-for-construction/", label: "Value Engineering Benefits" },
  { href: "/services/commercial/design-build/", label: "Design-Build Services" },
  { href: "/financial-planning-for-commercial-construction/", label: "Financial Planning Guide" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const veFundamentals = [
  {
    icon: Target,
    title: "Function Analysis",
    description: "Identifying what each building element must accomplish—its core function—separate from how it currently accomplishes it.",
  },
  {
    icon: Lightbulb,
    title: "Creative Alternatives",
    description: "Generating multiple ways to achieve required functions, drawing on construction expertise and innovation.",
  },
  {
    icon: Scale,
    title: "Lifecycle Evaluation",
    description: "Analyzing total cost of ownership, not just first cost—including maintenance, energy, and replacement.",
  },
  {
    icon: Settings,
    title: "Implementation Planning",
    description: "Developing detailed plans to implement selected alternatives with clear cost and schedule implications.",
  },
];

const functionExamples = [
  {
    element: "Roof System",
    basicFunction: "Protect interior",
    secondaryFunctions: "Manage water, insulate, support equipment, provide aesthetics",
    veOpportunity: "Alternative membrane systems, modified insulation strategies, optimized drainage",
  },
  {
    element: "Exterior Wall",
    basicFunction: "Enclose space",
    secondaryFunctions: "Insulate, admit light, resist weather, present image",
    veOpportunity: "Alternative cladding materials, window-to-wall ratio optimization",
  },
  {
    element: "HVAC System",
    basicFunction: "Condition air",
    secondaryFunctions: "Filter air, control humidity, minimize energy, zone control",
    veOpportunity: "Equipment sizing, distribution efficiency, control sophistication",
  },
  {
    element: "Foundation",
    basicFunction: "Transfer loads",
    secondaryFunctions: "Resist water, support utilities, enable future expansion",
    veOpportunity: "System alternatives based on soil conditions, optimized sizing",
  },
];

const veMethodology = [
  {
    phase: "Pre-Study Preparation",
    description: "Gather project documents, cost data, and schedule. Identify team members and study scope.",
    keyQuestions: "What is the project trying to accomplish? What are the constraints?",
  },
  {
    phase: "Information Phase",
    description: "Review documents, tour site (if existing), understand owner requirements and priorities.",
    keyQuestions: "What functions are required? What is the current cost for each function?",
  },
  {
    phase: "Function Analysis Phase",
    description: "Break project into functions. Identify basic vs. secondary functions. Calculate cost per function.",
    keyQuestions: "What does it do? What must it do? What does it cost to do this?",
  },
  {
    phase: "Creative Phase",
    description: "Brainstorm alternatives to achieve functions. Defer judgment. Quantity over quality initially.",
    keyQuestions: "What else can perform this function? How else can we achieve this?",
  },
  {
    phase: "Evaluation Phase",
    description: "Screen ideas for feasibility. Analyze costs and benefits. Rank alternatives.",
    keyQuestions: "Will it work? Will it save money? What are the risks?",
  },
  {
    phase: "Development Phase",
    description: "Detail selected alternatives. Prepare cost estimates. Develop implementation plans.",
    keyQuestions: "How exactly would this work? What's the real savings?",
  },
  {
    phase: "Presentation Phase",
    description: "Present recommendations with clear analysis. Support owner decision-making.",
    keyQuestions: "What do we recommend? Why? What's the implementation path?",
  },
];

const floridaSpecific = [
  {
    area: "Hurricane Resistance",
    challenge: "Florida Building Code requires enhanced wind resistance",
    veApproach: "Compare window protection options (impact glass vs. shutters), optimize roof attachment details, evaluate structural system alternatives that provide equivalent protection at lower cost",
  },
  {
    area: "Energy Efficiency",
    challenge: "High cooling loads in Tampa Bay climate",
    veApproach: "Analyze building orientation impact, optimize glazing specifications, compare HVAC system efficiencies including VRF alternatives, evaluate cool roof options",
  },
  {
    area: "Foundation Systems",
    challenge: "Variable soil conditions, sinkhole potential, high water tables",
    veApproach: "Match foundation type to actual soil conditions from geotechnical data, compare spread footings vs. deep foundations, optimize sizing based on structural analysis",
  },
  {
    area: "Moisture Management",
    challenge: "High humidity and rain exposure",
    veApproach: "Evaluate wall assembly moisture performance, compare waterproofing systems, analyze drainage strategies that may allow simpler assemblies",
  },
];

const costOptimization = [
  { strategy: "Material Standardization", description: "Using consistent materials across similar applications reduces waste and simplifies procurement", savings: "3-8%" },
  { strategy: "Structural Grid Optimization", description: "Efficient bay spacing reduces material quantities and simplifies construction", savings: "5-10%" },
  { strategy: "MEP System Right-Sizing", description: "Accurate load calculations prevent oversizing and reduce first and operating costs", savings: "5-15%" },
  { strategy: "Specification Alternatives", description: "Identifying equivalent materials with better availability or pricing", savings: "3-10%" },
  { strategy: "Construction Method Optimization", description: "Choosing methods that match local labor skills and equipment availability", savings: "5-12%" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Decoding Value Engineering: Florida Construction Expertise"
        description="Deep dive into value engineering methodology for commercial construction in Florida."
        datePublished="2024-01-15"
        dateModified="2024-01-15"
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Value engineering expertise for Florida commercial construction"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Decoding Value Engineering: Florida Construction Expertise
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            A deep dive into value engineering methodology. Understand how systematic function analysis and creative problem-solving deliver optimized building value for Florida commercial projects.
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Understanding the Value Engineering Process
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-6">
                Value engineering isn't about finding cheap alternatives or cutting corners. It's a rigorous, systematic methodology for improving project value by analyzing functions and finding optimal ways to achieve them. Developed by General Electric during World War II to address material shortages, VE has evolved into a sophisticated discipline applied worldwide.
              </p>
              <p className="text-gray-600 mb-6">
                The foundation of value engineering is function analysis—understanding what each building element must accomplish independent of how it's currently designed to accomplish it. A wall's basic function is to "enclose space." How that function is achieved—with CMU, steel studs, or tilt-up concrete—is secondary. VE asks: given the required functions, what's the best way to deliver them?
              </p>
              <p className="text-gray-600 mb-6">
                At Florida Construction Specialists, we bring decades of Florida-specific construction experience to value engineering. We understand which alternatives actually work in Tampa Bay's climate, which materials are readily available in the local market, and which construction methods our subcontractor base executes efficiently. This local knowledge transforms theoretical VE concepts into practical savings.
              </p>
              <p className="text-gray-600 mb-8">
                This guide explains our VE methodology in detail—how we analyze functions, generate alternatives, and evaluate options to deliver maximum value for your commercial construction investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VE Fundamentals */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Core Value Engineering Principles
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            These four principles underpin every effective value engineering analysis.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {veFundamentals.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Function Analysis */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              Function Analysis in Practice
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Understanding functions enables creative alternatives. Here's how we analyze common building elements.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Element</th>
                    <th className="px-6 py-4 text-left font-heading">Basic Function</th>
                    <th className="px-6 py-4 text-left font-heading">Secondary Functions</th>
                    <th className="px-6 py-4 text-left font-heading">VE Opportunity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {functionExamples.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.element}</td>
                      <td className="px-6 py-4 text-brand-green font-semibold">{row.basicFunction}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{row.secondaryFunctions}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{row.veOpportunity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* VE Methodology */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Our Value Engineering Methodology
            </h2>
            
            <div className="space-y-6">
              {veMethodology.map((step, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-green-dark mb-2 font-heading">{step.phase}</h3>
                      <p className="text-gray-600 mb-2">{step.description}</p>
                      <p className="text-sm text-brand-gold italic">{step.keyQuestions}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Florida-Specific VE */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Florida-Specific Value Engineering Opportunities
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Florida's unique building requirements create both challenges and opportunities for value engineering. Our local expertise helps identify alternatives that work in this specific context.
              </p>
            </div>

            <div className="space-y-6">
              {floridaSpecific.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">{item.area}</h3>
                  <p className="text-red-600 text-sm mb-2"><strong>Challenge:</strong> {item.challenge}</p>
                  <p className="text-brand-green text-sm"><strong>VE Approach:</strong> {item.veApproach}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost Optimization Strategies */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              Achieving Building Efficiency Through Value Optimization
            </h2>
            <p className="text-center text-gray-600 mb-8">
              These strategies consistently deliver value improvements on commercial projects.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Strategy</th>
                    <th className="px-6 py-4 text-left font-heading">Description</th>
                    <th className="px-6 py-4 text-left font-heading">Typical Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {costOptimization.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.strategy}</td>
                      <td className="px-6 py-4 text-gray-600">{row.description}</td>
                      <td className="px-6 py-4 text-brand-green font-bold">{row.savings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Design-Build Integration */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Leveraging Engineering Design for Cost-Effective Solutions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-brand-green/5 rounded-xl p-6 border border-brand-green/20">
                <Wrench className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Design-Build VE Advantage</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Construction expertise available during early design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Real cost data informs design decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">VE alternatives can be tested immediately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">No adversarial dynamic between designer and builder</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <TrendingUp className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Continuous Optimization</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">VE at every design milestone, not just one study</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Market condition changes reflected in recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Subcontractor input on specialty systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Implementation integrated with procurement</span>
                  </li>
                </ul>
              </div>
            </div>
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
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  What's the difference between value engineering and value analysis?
                </h3>
                <p className="text-gray-600">
                  The terms are often used interchangeably. Technically, value engineering applies to new projects during design, while value analysis applies to existing products or processes. The methodology is the same: analyze functions and find better ways to achieve them.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  How do you quantify VE savings?
                </h3>
                <p className="text-gray-600">
                  We compare the cost of original design elements to proposed alternatives, including any changes to schedule, maintenance, or energy costs. Savings are documented with detailed estimates for each VE item. We only count savings where quality and performance are maintained or improved.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  What if VE recommendations change the design intent?
                </h3>
                <p className="text-gray-600">
                  VE recommendations that affect aesthetics or user experience are presented as options with clear trade-off analysis. The owner makes final decisions on these items. Pure cost-reduction items that don't affect design intent are typically straightforward recommendations.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  Can VE be applied to renovation projects?
                </h3>
                <p className="text-gray-600">
                  Absolutely. Renovation VE examines existing conditions and proposed changes to find efficiencies. Often, understanding what's already in place reveals opportunities—existing structure that can be retained, systems that can be extended rather than replaced, or configurations that work better with existing conditions.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  How do you prioritize VE recommendations?
                </h3>
                <p className="text-gray-600">
                  We rank recommendations by: (1) savings magnitude, (2) risk level, (3) impact on design intent, and (4) implementation complexity. High-savings, low-risk items with minimal design impact are presented as strong recommendations. Items with significant trade-offs are presented as options for owner consideration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-white">
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
            Ready to Optimize Your Project's Value?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our value engineering expertise help you achieve more within your construction budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request VE Analysis
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
