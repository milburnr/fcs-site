import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, DollarSign, Calculator, TrendingUp, PieChart, FileText, Shield, AlertTriangle, Building2 } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Financial Planning for Commercial Construction in Tampa | FCS",
  description: "Expert guidance on budgeting, financing, and cost management for commercial construction in Tampa Bay. Learn about construction loans, cost estimation, and ROI optimization.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Financial Planning for Commercial Construction", href: "/financial-planning-for-commercial-construction/" },
];

const internalLinks = [
  { href: "/construction-quotes-for-commercial-project/", label: "Construction Quotes Guide" },
  { href: "/benefits-of-value-engineering-for-construction/", label: "Value Engineering Benefits" },
  { href: "/services/commercial/design-build/", label: "Design-Build Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const budgetCategories = [
  {
    icon: Building2,
    title: "Hard Costs",
    percentage: "65-75%",
    description: "Direct construction costs including labor, materials, equipment, and subcontractor work.",
  },
  {
    icon: FileText,
    title: "Soft Costs",
    percentage: "15-25%",
    description: "Design fees, permits, inspections, legal, insurance, and project management.",
  },
  {
    icon: DollarSign,
    title: "Land/Site",
    percentage: "10-30%",
    description: "Property acquisition, site work, and infrastructure (varies widely by location).",
  },
  {
    icon: Shield,
    title: "Contingency",
    percentage: "5-15%",
    description: "Reserve for unknowns, changes, and market fluctuations.",
  },
];

const financingOptions = [
  {
    type: "Construction Loan",
    description: "Short-term financing that converts to permanent mortgage upon completion",
    typical: "Interest-only during construction, converts at CO",
    bestFor: "Traditional development projects",
  },
  {
    type: "SBA 504 Loan",
    description: "Government-backed financing with favorable terms for owner-occupied buildings",
    typical: "10-20% down, fixed rates, 20-25 year terms",
    bestFor: "Owner-occupied commercial properties",
  },
  {
    type: "Bridge Financing",
    description: "Short-term capital for time-sensitive opportunities",
    typical: "Higher rates, 6-24 month terms",
    bestFor: "Acquisitions requiring quick close",
  },
  {
    type: "Private Equity/Investors",
    description: "Partnership structures with outside capital",
    typical: "Equity sharing, preferred returns",
    bestFor: "Larger projects seeking capital partners",
  },
];

const costByType = [
  { buildingType: "Office (Class A)", lowRange: "$200", highRange: "$350", notes: "High-finish corporate" },
  { buildingType: "Office (Class B)", lowRange: "$150", highRange: "$225", notes: "Standard professional" },
  { buildingType: "Medical/Healthcare", lowRange: "$250", highRange: "$500", notes: "Varies by specialty" },
  { buildingType: "Retail (Shell)", lowRange: "$100", highRange: "$175", notes: "Base building only" },
  { buildingType: "Retail (Turnkey)", lowRange: "$150", highRange: "$300", notes: "Includes tenant finish" },
  { buildingType: "Industrial/Warehouse", lowRange: "$75", highRange: "$150", notes: "Depends on office ratio" },
  { buildingType: "Restaurant", lowRange: "$200", highRange: "$400", notes: "Full kitchen buildout" },
];

const budgetingBestPractices = [
  {
    practice: "Start with Program Validation",
    description: "Ensure your space requirements and budget align before design begins. A realistic program prevents scope creep.",
  },
  {
    practice: "Include All Costs",
    description: "Don't forget soft costs, FF&E, technology, moving expenses, and operational reserves. Underfunded projects fail.",
  },
  {
    practice: "Build in Contingency",
    description: "10-15% contingency for new construction, 15-20% for renovation. These aren't optional—they're risk management.",
  },
  {
    practice: "Phase Decision Points",
    description: "Structure the project with clear go/no-go decisions as design progresses and costs become more certain.",
  },
  {
    practice: "Monitor Cash Flow",
    description: "Construction loans draw monthly. Ensure adequate reserves to cover interest during construction and lease-up.",
  },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Financial Planning for Commercial Construction in Tampa"
        description="Expert guidance on budgeting, financing, and cost management for commercial construction."
        datePublished="2024-01-15"
        dateModified="2024-01-15"
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-large.webp"
            alt="Financial planning for commercial construction in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Financial Planning for Commercial Construction in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Answering your financial questions before diving into commercial construction. Expert insights on budgeting, financing, and cost management for Tampa Bay projects.
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Financial Planning Determines Construction Success
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-6">
                Commercial construction projects don't fail because of bad design or poor workmanship—they fail because of inadequate financial planning. Understanding the true costs, securing appropriate financing, and maintaining adequate reserves throughout construction are fundamental to project success.
              </p>
              <p className="text-gray-600 mb-6">
                In Tampa Bay's dynamic market, construction costs have increased 25-40% over the past three years due to material price inflation, labor shortages, and strong demand. Financial plans built on outdated assumptions or optimistic projections quickly run into trouble. Realistic budgeting based on current market conditions is essential.
              </p>
              <p className="text-gray-600 mb-6">
                At Florida Construction Specialists, we provide detailed cost guidance from the earliest project conversations. Our estimating team tracks Tampa Bay construction costs continuously, giving clients accurate budget expectations before significant design investment begins. This transparency prevents the painful surprises that derail projects.
              </p>
              <p className="text-gray-600 mb-8">
                Whether you're building your first commercial property or expanding an existing portfolio, this guide will help you understand the financial dimensions of commercial construction in Tampa Bay—from initial budgeting through project completion and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Categories */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Understanding Commercial Construction Budgets
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            A complete project budget includes more than just construction costs. Here's how typical budgets break down.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {budgetCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">{category.title}</h3>
                <div className="text-3xl font-bold text-brand-gold mb-3">{category.percentage}</div>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost by Building Type */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              Tampa Bay Commercial Construction Costs (2024)
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Typical construction costs per square foot by building type. Land, soft costs, and FF&E are additional.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Building Type</th>
                    <th className="px-6 py-4 text-left font-heading">Low Range</th>
                    <th className="px-6 py-4 text-left font-heading">High Range</th>
                    <th className="px-6 py-4 text-left font-heading">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {costByType.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.buildingType}</td>
                      <td className="px-6 py-4 text-gray-600">{row.lowRange}/SF</td>
                      <td className="px-6 py-4 text-brand-green font-semibold">{row.highRange}/SF</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              *Costs are for construction only and vary based on specific project requirements, site conditions, and market factors.
            </p>
          </div>
        </div>
      </section>

      {/* Construction Financing */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Construction Financing Options
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Construction financing differs significantly from permanent real estate lending. Understanding your options helps you structure projects for success and optimize your cost of capital.
              </p>
            </div>

            <div className="space-y-6">
              {financingOptions.map((option, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold text-brand-green-dark font-heading">{option.type}</h3>
                    <span className="text-sm bg-brand-green/10 text-brand-green-dark px-3 py-1 rounded-full">
                      Best for: {option.bestFor}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{option.description}</p>
                  <p className="text-sm text-gray-500"><strong>Typical terms:</strong> {option.typical}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Budgeting Best Practices */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Key Budgeting Considerations for Tampa Bay
            </h2>
            
            <div className="space-y-6">
              {budgetingBestPractices.map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-gray-50 rounded-xl p-6">
                  <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-green-dark mb-2 font-heading">{item.practice}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost Estimation Benefits */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Benefits of Professional Cost Estimation
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <Calculator className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Early Budget Accuracy</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Conceptual estimates within 15-20% accuracy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Realistic go/no-go decision data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Financing requirements defined early</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <TrendingUp className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Continuous Cost Tracking</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Design decisions informed by cost impact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Value engineering opportunities identified</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">No budget surprises at bid time</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <PieChart className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Market-Based Pricing</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Current Tampa Bay subcontractor pricing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Material cost trends incorporated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Labor availability impact assessed</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <Shield className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Risk Management</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Appropriate contingency allocation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Escalation factors for project duration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Unforeseen conditions reserve</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Warning Signs of Inadequate Financial Planning
            </h2>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-bold text-red-800 font-heading">Red Flags to Watch For</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Budget based on "comparable" projects without local market validation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">No contingency or contingency below 5% for new construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Soft costs estimated as a fixed percentage rather than itemized</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">No allowance for material price escalation during construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Interest reserve insufficient for potential delays</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Construction budget locked before design is 60%+ complete</span>
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
                  How accurate are early-stage construction estimates?
                </h3>
                <p className="text-gray-600">
                  Conceptual estimates (before design) are typically accurate within ±15-20%. Schematic design estimates improve to ±10-15%. By design development, estimates should be within ±5-10%. GMP proposals at 60-70% design completion provide contractual cost certainty.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  What percentage should I budget for soft costs?
                </h3>
                <p className="text-gray-600">
                  Soft costs typically run 15-25% of hard construction costs. This includes: architectural/engineering fees (7-12%), permits and fees (1-3%), testing and inspections (1-2%), legal/accounting (1-2%), insurance (1-2%), and project management/owner's rep (2-4%). Complex projects or those requiring rezoning run higher.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  How do I protect against material price increases?
                </h3>
                <p className="text-gray-600">
                  Several strategies help: include escalation allowances (3-5% annually) in early budgets, lock in prices through early procurement of long-lead items, use GMP contracts that shift price risk to the contractor, and maintain adequate contingency. Design-build delivery allows earlier price certainty than traditional approaches.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  What contingency percentage is appropriate?
                </h3>
                <p className="text-gray-600">
                  For new construction: 5-10% if design is complete and site conditions are known; 10-15% for design-build with GMP at partial design completion. For renovations: 15-20% minimum due to unknown conditions. Complex renovations or historic buildings may warrant 20-25%. Never proceed without contingency—it's not padding, it's risk management.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  How does design-build affect project financing?
                </h3>
                <p className="text-gray-600">
                  Design-build provides earlier cost certainty, which lenders prefer. A GMP commitment at 60-70% design gives lenders confidence in the construction budget. This can result in more favorable loan terms. Design-build's faster delivery also reduces interest carry during construction—a meaningful savings on large projects.
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
            Ready to Plan Your Commercial Construction Budget?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and provide realistic cost expectations based on current Tampa Bay market conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get a Budget Consultation
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
