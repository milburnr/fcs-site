import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, DollarSign, Target, Lightbulb, TrendingUp, Scale, Zap, AlertTriangle, Building2 } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Benefits of Value Engineering for Construction | Tampa FL",
  description: "Maximize your commercial construction budget through value engineering. Learn how systematic analysis delivers cost savings without sacrificing quality or performance in Tampa Bay projects.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Benefits of Value Engineering for Construction", href: "/benefits-of-value-engineering-for-construction/" },
];

const internalLinks = [
  { href: "/decoding-value-engineering-florida-construction-expertise/", label: "Value Engineering Deep Dive" },
  { href: "/financial-planning-for-commercial-construction/", label: "Financial Planning Guide" },
  { href: "/services/commercial/design-build/", label: "Design-Build Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const keyBenefits = [
  {
    icon: DollarSign,
    title: "Cost Savings",
    stat: "10-25%",
    description: "Typical savings on construction costs without reducing building quality or functionality.",
  },
  {
    icon: Target,
    title: "Improved Performance",
    stat: "Better",
    description: "VE often finds solutions that perform better than original designs while costing less.",
  },
  {
    icon: TrendingUp,
    title: "Enhanced Value",
    stat: "Higher ROI",
    description: "More building for your budget means better returns on your construction investment.",
  },
  {
    icon: Zap,
    title: "Reduced Waste",
    stat: "15-30%",
    description: "Efficient designs use fewer materials and generate less construction waste.",
  },
];

const veAreas = [
  {
    area: "Structural Systems",
    opportunities: "Alternative framing, foundation optimization, steel vs. concrete analysis",
    typicalSavings: "5-15%",
  },
  {
    area: "Building Envelope",
    opportunities: "Window-to-wall ratio, cladding materials, insulation strategies",
    typicalSavings: "3-10%",
  },
  {
    area: "Mechanical Systems",
    opportunities: "Equipment sizing, distribution efficiency, control systems",
    typicalSavings: "5-12%",
  },
  {
    area: "Electrical Systems",
    opportunities: "Lighting design, panel optimization, renewable integration",
    typicalSavings: "3-8%",
  },
  {
    area: "Interior Finishes",
    opportunities: "Material alternatives, standardization, maintenance considerations",
    typicalSavings: "5-15%",
  },
  {
    area: "Site Development",
    opportunities: "Grading optimization, stormwater solutions, paving alternatives",
    typicalSavings: "5-20%",
  },
];

const veProcess = [
  {
    phase: "Information Gathering",
    description: "Collect project data, understand requirements, and establish baseline costs",
    timing: "1-2 days",
  },
  {
    phase: "Function Analysis",
    description: "Identify what each system must accomplish—function, not just form",
    timing: "1-2 days",
  },
  {
    phase: "Creative Phase",
    description: "Brainstorm alternatives that deliver required functions at lower cost",
    timing: "1-2 days",
  },
  {
    phase: "Evaluation",
    description: "Analyze alternatives for cost, performance, constructability, and risk",
    timing: "1-2 days",
  },
  {
    phase: "Development",
    description: "Detail selected alternatives with cost estimates and implementation plans",
    timing: "2-3 days",
  },
  {
    phase: "Presentation",
    description: "Present recommendations with clear analysis for owner decision-making",
    timing: "1 day",
  },
];

const caseSavings = [
  { project: "Medical Office Building", size: "25,000 SF", savings: "$380,000", percentage: "12%", key: "Structural system change" },
  { project: "Retail Center", size: "45,000 SF", savings: "$520,000", percentage: "15%", key: "Site development optimization" },
  { project: "Corporate Office", size: "35,000 SF", savings: "$410,000", percentage: "10%", key: "MEP system efficiency" },
  { project: "Industrial Facility", size: "80,000 SF", savings: "$680,000", percentage: "18%", key: "Foundation redesign" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Benefits of Value Engineering for Construction"
        description="How value engineering delivers cost savings without sacrificing quality in commercial construction."
        datePublished="2024-01-15"
        dateModified="2024-01-15"
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-large.webp"
            alt="Value engineering for commercial construction in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Unleashing the Benefits of Value Engineering for Construction
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Maximize value in your Florida commercial construction project. Discover how systematic analysis delivers cost savings, improved efficiency, and better building performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Value Engineering Analysis
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
              What is Value Engineering?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-6">
                Value engineering (VE) is a systematic method for improving the value of a construction project by examining its functions. The goal isn't simply to cut costs—it's to achieve required functions at the lowest lifecycle cost while maintaining or improving quality, performance, and safety.
              </p>
              <p className="text-gray-600 mb-6">
                Value engineering asks a fundamental question: What does this element need to accomplish, and is there a better way to accomplish it? Often, the answer reveals alternatives that designers didn't consider—materials that perform better at lower cost, systems that are more efficient to install, or configurations that reduce waste.
              </p>
              <p className="text-gray-600 mb-6">
                In traditional project delivery, value engineering often happens too late—after design is complete and bids come in over budget. The result is rushed cost-cutting that sacrifices quality. In design-build delivery, value engineering is integrated from project start, allowing optimal decisions before drawings are finalized.
              </p>
              <p className="text-gray-600 mb-8">
                At Florida Construction Specialists, value engineering is standard practice on every commercial project. Our construction expertise informs design decisions continuously, identifying cost-saving opportunities that don't compromise building performance. The result: better buildings at better prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Key Benefits of Value Engineering
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Value engineering delivers measurable improvements across multiple project dimensions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => (
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
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Value Engineering vs. Cost Cutting: The Critical Difference
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <AlertTriangle className="w-10 h-10 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-red-800 mb-4 font-heading">Cost Cutting (Bad)</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Removes features or reduces quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Happens late under budget pressure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Increases lifecycle costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Compromises building performance</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-brand-green/5 border border-brand-green rounded-xl p-6">
                <Scale className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Value Engineering (Good)</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Maintains or improves function</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Integrated throughout design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Considers total lifecycle costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Often improves building performance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VE Areas */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              Where Value Engineering Finds Savings
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Every building system presents opportunities for value improvement.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Building System</th>
                    <th className="px-6 py-4 text-left font-heading">Common VE Opportunities</th>
                    <th className="px-6 py-4 text-left font-heading">Typical Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {veAreas.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.area}</td>
                      <td className="px-6 py-4 text-gray-600">{row.opportunities}</td>
                      <td className="px-6 py-4 text-brand-green font-bold">{row.typicalSavings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* VE Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Our Value Engineering Process
            </h2>
            
            <div className="space-y-4">
              {veProcess.map((step, index) => (
                <div key={index} className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                  <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-brand-green-dark">{step.phase}</h3>
                      <span className="text-sm text-brand-gold font-semibold">{step.timing}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real Savings Examples */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              Real Value Engineering Results
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Examples of value engineering savings on recent Tampa Bay commercial projects.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Project Type</th>
                    <th className="px-6 py-4 text-left font-heading">Size</th>
                    <th className="px-6 py-4 text-left font-heading">Savings</th>
                    <th className="px-6 py-4 text-left font-heading">% Saved</th>
                    <th className="px-6 py-4 text-left font-heading">Key VE Item</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {caseSavings.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.project}</td>
                      <td className="px-6 py-4 text-gray-600">{row.size}</td>
                      <td className="px-6 py-4 text-brand-green font-bold">{row.savings}</td>
                      <td className="px-6 py-4 text-brand-gold font-bold">{row.percentage}</td>
                      <td className="px-6 py-4 text-gray-600">{row.key}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              *Savings represent value engineering improvements without reducing building quality or function.
            </p>
          </div>
        </div>
      </section>

      {/* Design-Build Advantage */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Why Design-Build Maximizes VE Benefits
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Value engineering is most effective when contractor expertise informs design from the beginning. In traditional delivery, VE happens after design is complete—making changes expensive and time-consuming. Design-build integrates VE throughout.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <Building2 className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Continuous VE Integration</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">VE analysis at every design phase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Real-time cost feedback on design options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Constructability input during design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">No adversarial relationship between designer and builder</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <Lightbulb className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Early Decision Advantage</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Structural system decisions before detailed design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">MEP optimization during schematic design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Material selections aligned with construction market</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Changes implemented easily before documents finalize</span>
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
                  Does value engineering always reduce costs?
                </h3>
                <p className="text-gray-600">
                  Usually, yes—typical savings range from 10-25% of construction costs. However, VE sometimes reveals that original designs were underbuilt, and proper solutions cost more. The goal is optimal value, not lowest first cost. Sometimes that means investing more to reduce lifecycle costs.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  When should value engineering happen?
                </h3>
                <p className="text-gray-600">
                  The earlier, the better. VE during schematic design offers maximum flexibility with minimal redesign cost. By the time construction documents are complete, changes are expensive. Design-build delivery enables continuous VE throughout design, capturing opportunities as they arise.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  How long does a formal VE study take?
                </h3>
                <p className="text-gray-600">
                  A dedicated VE workshop typically runs 3-5 days depending on project complexity, with additional time for follow-up analysis. However, in design-build, VE is continuous rather than a discrete event—it's built into how we approach every project decision.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  Will value engineering compromise my building's quality?
                </h3>
                <p className="text-gray-600">
                  True value engineering never compromises quality—that's cost cutting, not VE. Proper value engineering maintains or improves performance while reducing cost. We've often found VE alternatives that perform better than original designs. Every VE recommendation includes quality and performance analysis.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  Who participates in value engineering?
                </h3>
                <p className="text-gray-600">
                  Effective VE requires diverse perspectives: designers who understand the intent, builders who know construction realities, specialty consultants for technical systems, and owners who can validate functional requirements. At FCS, our project teams include all these perspectives from the start.
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
            Ready to Maximize Your Construction Value?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how value engineering can deliver more building for your budget without compromising quality.
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
