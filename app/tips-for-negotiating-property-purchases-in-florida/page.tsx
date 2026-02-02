import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, AlertTriangle, Search, FileText, Building2, DollarSign, Shield } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tips for Negotiating Property Purchases in Florida | Construction Due Diligence",
  description: "Expert tips for negotiating commercial property purchases in Florida. How construction assessments strengthen your position and protect your investment.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tips for Negotiating Property Purchases in Florida", href: "/tips-for-negotiating-property-purchases-in-florida/" },
];

const faqs = [
  {
    question: "What construction issues should I look for when buying commercial property in Florida?",
    answer: "Critical items include: roof condition and remaining life, HVAC system age and efficiency, evidence of water intrusion or damage, structural issues (especially in flood zones), electrical system capacity, ADA compliance deficiencies, fire/life safety systems, parking lot condition, and any deferred maintenance. Florida-specific concerns include hurricane damage history, flood zone status, and building code compliance for wind resistance."
  },
  {
    question: "Should I get a construction professional involved before making an offer?",
    answer: "For significant acquisitions, yes. A preliminary walkthrough by an experienced contractor identifies potential issues before you commit. This information strengthens your negotiating position and helps you budget for necessary improvements. Even if issues exist, knowing about them prevents overpaying and allows you to structure deals that account for required capital expenditures."
  },
  {
    question: "How can construction assessments help me negotiate a lower price?",
    answer: "Documented construction issues provide factual basis for price reductions. A detailed report identifying needed roof replacement, HVAC upgrades, or code deficiencies gives you leverage to negotiate price reductions or seller credits equal to repair costs. Sellers have difficulty arguing against objective construction assessments performed by qualified professionals."
  },
  {
    question: "What's the difference between a property inspection and a construction assessment?",
    answer: "Property inspections identify existing conditions, while construction assessments go further—evaluating remaining useful life of systems, estimating repair/replacement costs, identifying code compliance issues, and assessing construction quality. For commercial purchases, you need the deeper analysis that contractors provide, not just checkbox inspection reports."
  },
  {
    question: "How long should I negotiate for due diligence period?",
    answer: "For commercial properties in Florida, 30-45 days is typical; complex properties may require 60-90 days. The period should allow time for physical inspections, environmental assessments, title review, zoning verification, and obtaining contractor estimates for identified issues. Don't accept compressed timelines that prevent thorough investigation—undiscovered issues become your responsibility after closing."
  }
];

const internalLinks = [
  { href: "/tampa-commercial-real-estate-development/", label: "Real Estate Development" },
  { href: "/investing-in-commercial-real-estate-construction/", label: "Investment Construction" },
  { href: "/enhancing-commercial-property-value/", label: "Property Value Enhancement" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/contact/", label: "Request Property Assessment" },
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
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Negotiating commercial property purchases in Florida"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tips for Negotiating Property Purchases in Florida
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Construction expertise strengthens your negotiating position when purchasing commercial property. Florida Construction Specialists helps buyers identify issues, quantify repair costs, and negotiate better deals throughout Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Request Property Assessment
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

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Purchasing commercial property in Florida involves significant capital and considerable risk. What you can see during a walkthrough represents only a fraction of a building's true condition—hidden issues like roof deterioration, aging HVAC systems, structural concerns, and deferred maintenance can transform an attractive acquisition into an expensive mistake. Smart buyers engage construction professionals during due diligence to identify issues, quantify costs, and strengthen their negotiating position.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists has assessed hundreds of commercial properties for prospective buyers throughout Tampa Bay. Our construction expertise helps you understand what you're actually buying, negotiate appropriate pricing based on property condition, and plan for necessary improvements post-acquisition. We've helped buyers avoid costly mistakes and negotiate better deals on properties they do acquire.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Florida-Specific Risks</h3>
                  <p className="text-amber-700">
                    Florida commercial properties face unique challenges: hurricane damage history, flood zone implications, intense UV degradation of building materials, and stringent wind resistance code requirements. Properties may appear sound but have hidden storm damage, inadequate hurricane protection, or flood-related deterioration. Professional assessment is essential in our market.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Key Areas for Construction Due Diligence
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Roof System Assessment</h3>
                <p className="text-gray-600 mb-4">
                  Roof condition is often the single most expensive issue in commercial properties. We assess membrane condition, estimate remaining useful life, identify active or potential leak areas, and evaluate whether repair or replacement is appropriate. In Florida's climate, roofs deteriorate faster than northern markets—don't rely on age alone.
                </p>
                <p className="text-sm text-red-600 font-medium">Replacement cost: $6-15/SF ($60,000-150,000 for 10,000 SF)</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Building2 className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">HVAC Systems</h3>
                <p className="text-gray-600 mb-4">
                  Air conditioning dominates Florida operating costs and tenant comfort. We evaluate system age, condition, efficiency, and capacity relative to building load. Older systems may function but waste energy; undersized systems struggle in extreme heat. Replacement costs significantly impact property economics.
                </p>
                <p className="text-sm text-red-600 font-medium">Replacement cost: $15-35/SF ($150,000-350,000 for 10,000 SF)</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Search className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Structural Integrity</h3>
                <p className="text-gray-600 mb-4">
                  We inspect for signs of structural issues: foundation cracks, settling, water damage, termite activity, and hurricane damage. Florida's soil conditions and storm exposure create structural risks less common in other markets. Hidden structural problems can be extremely expensive to remediate.
                </p>
                <p className="text-sm text-red-600 font-medium">Repair costs: Highly variable; can exceed building value</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <FileText className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Code Compliance</h3>
                <p className="text-gray-600 mb-4">
                  Florida's building codes—especially hurricane resistance requirements—have evolved significantly. Older buildings may not meet current standards; modifications may trigger upgrade requirements. We identify code issues that could require expensive improvements upon renovation or change of use.
                </p>
                <p className="text-sm text-red-600 font-medium">Upgrade costs: Varies widely by deficiency type</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Negotiation Strategies Using Construction Information
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Price Reduction for Identified Issues</h3>
                <p className="text-gray-600 mb-4">
                  Documented construction deficiencies provide factual basis for price negotiation. A professional assessment identifying needed roof replacement, HVAC upgrades, or other improvements gives you concrete numbers to support price reduction requests. Sellers have difficulty disputing objective professional findings.
                </p>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <p className="text-sm text-gray-600"><strong>Example:</strong> Assessment identifies roof requiring replacement within 2 years ($80,000), HVAC system at end of life ($120,000), and parking lot resurfacing needed ($35,000). Buyer negotiates $175,000 price reduction based on documented capital requirements—seller agrees because the issues will affect any buyer.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Seller Credits at Closing</h3>
                <p className="text-gray-600 mb-4">
                  When sellers won't reduce price, negotiate for credits at closing that offset required repairs. Credits provide cash at closing to fund improvements. This approach works well when sellers need to maintain a certain price for their records but will accommodate the economic reality of property condition.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Escrow for Known Issues</h3>
                <p className="text-gray-600 mb-4">
                  For issues with uncertain scope, negotiate escrowed funds released upon completion of repairs. This protects you if problems prove more extensive than anticipated while giving sellers assurance that funds won't be misused. Particularly useful for issues like potential water damage where full extent isn't clear without invasive investigation.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Seller-Completed Repairs</h3>
                <p className="text-gray-600 mb-4">
                  Sometimes sellers prefer completing repairs themselves rather than reducing price. If you pursue this approach, specify repair standards, approve contractors, and have repairs inspected before closing. Our assessment can define repair specifications and verify completion quality.
                </p>
              </div>
            </div>

            {/* Cost Table */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Common Capital Expense Benchmarks
            </h2>

            <p className="text-gray-600 mb-6">
              Understanding typical costs helps you evaluate whether seller pricing accounts for property condition. These benchmarks reflect current Tampa Bay market rates:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Item</th>
                    <th className="px-6 py-4 text-left">Cost Range</th>
                    <th className="px-6 py-4 text-left">Typical Life</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Roof Replacement (flat)</td>
                    <td className="px-6 py-4">$6 - $15/SF</td>
                    <td className="px-6 py-4 text-gray-600">20-30 years</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">HVAC Replacement</td>
                    <td className="px-6 py-4">$15 - $35/SF</td>
                    <td className="px-6 py-4 text-gray-600">15-20 years</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Parking Lot Resurface</td>
                    <td className="px-6 py-4">$3 - $6/SF</td>
                    <td className="px-6 py-4 text-gray-600">15-25 years</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Parking Lot Replacement</td>
                    <td className="px-6 py-4">$8 - $15/SF</td>
                    <td className="px-6 py-4 text-gray-600">25-40 years</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Elevator Modernization</td>
                    <td className="px-6 py-4">$75K - $150K/cab</td>
                    <td className="px-6 py-4 text-gray-600">20-25 years</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Electrical Service Upgrade</td>
                    <td className="px-6 py-4">$25K - $100K+</td>
                    <td className="px-6 py-4 text-gray-600">30-40 years</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Exterior Paint</td>
                    <td className="px-6 py-4">$2 - $5/SF</td>
                    <td className="px-6 py-4 text-gray-600">5-10 years</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Common Area Renovation</td>
                    <td className="px-6 py-4">$40 - $100/SF</td>
                    <td className="px-6 py-4 text-gray-600">10-15 years</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              *Costs reflect 2024 Tampa Bay market rates. Actual costs depend on property specifics, system types, and project complexity.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Property Assessment Process
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-1">Visual Inspection</h3>
                  <p className="text-gray-600">Thorough inspection of all building systems: roof, structure, HVAC, electrical, plumbing, exterior, parking areas, and common spaces. We document conditions with photographs and notes.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-1">System Evaluation</h3>
                  <p className="text-gray-600">Assessment of each major system's condition, age, remaining useful life, and code compliance. We identify issues requiring immediate attention versus those to plan for future years.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-1">Cost Estimation</h3>
                  <p className="text-gray-600">Detailed cost estimates for identified repairs and replacements. We provide realistic numbers based on current market conditions that you can use for negotiations and budgeting.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-1">Written Report</h3>
                  <p className="text-gray-600">Comprehensive report documenting findings, photographs, cost estimates, and prioritized recommendations. The report serves as your negotiating tool and capital planning guide.</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mb-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-brand-green-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Negotiate from Strength</h3>
              <p className="mb-6 text-gray-200">
                Contact Florida Construction Specialists for a professional property assessment before your next commercial acquisition. We'll help you understand what you're buying, identify issues for negotiation, and plan for post-acquisition improvements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Request Assessment
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Related Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Make Smarter Property Purchases
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists helps commercial property buyers identify issues, quantify costs, and negotiate better deals throughout Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Property Assessment
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
