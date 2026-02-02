import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, FileText, DollarSign, Clock, AlertTriangle, Scale, Search, Target, Lightbulb } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Construction Quotes for Commercial Projects | Tampa FL",
  description: "How to get, evaluate, and compare construction quotes for commercial projects in Tampa Bay. Expert guidance on bid evaluation, contractor selection, and avoiding common pitfalls.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Construction Quotes for Commercial Project", href: "/construction-quotes-for-commercial-project/" },
];

const internalLinks = [
  { href: "/financial-planning-for-commercial-construction/", label: "Financial Planning Guide" },
  { href: "/expert-tips-for-planning-your-commercial-construction-project/", label: "Planning Tips" },
  { href: "/services/commercial/design-build/", label: "Design-Build Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/contact/", label: "Get Your Quote" },
];

const quoteComponents = [
  {
    icon: FileText,
    title: "Scope Clarity",
    description: "Clear definition of what's included and excluded. Ambiguity in scope is where cost overruns hide.",
  },
  {
    icon: DollarSign,
    title: "Detailed Pricing",
    description: "Line-item breakdown showing costs by trade, with labor and material separated where possible.",
  },
  {
    icon: Clock,
    title: "Schedule Commitment",
    description: "Specific start date, completion date, and key milestones tied to the quoted price.",
  },
  {
    icon: AlertTriangle,
    title: "Exclusions/Allowances",
    description: "Honest identification of items not included or estimated with allowances requiring owner selection.",
  },
];

const quoteTypes = [
  {
    type: "Lump Sum (Stipulated Sum)",
    description: "Fixed total price for defined scope of work",
    bestFor: "Complete design, well-defined scope",
    risk: "Owner has least risk; contractor bears unknowns",
  },
  {
    type: "Guaranteed Maximum Price (GMP)",
    description: "Maximum price with savings sharing; open-book cost tracking",
    bestFor: "Design-build projects where design is 60-80% complete",
    risk: "Shared risk; owner benefits from savings",
  },
  {
    type: "Cost Plus Fee",
    description: "Actual costs plus fixed or percentage fee",
    bestFor: "Undefined scope, fast-track projects",
    risk: "Owner bears cost risk; requires trust and transparency",
  },
  {
    type: "Unit Price",
    description: "Fixed price per unit of work (SF, LF, etc.)",
    bestFor: "Variable quantity work (site work, paving)",
    risk: "Price fixed; quantity determines final cost",
  },
];

const evaluationCriteria = [
  { criterion: "Scope Completeness", weight: "Critical", checkItems: "Does the quote cover everything needed? Are exclusions acceptable?" },
  { criterion: "Price Reasonableness", weight: "Important", checkItems: "Is the price in line with other quotes? If much lower, why?" },
  { criterion: "Schedule Realism", weight: "Critical", checkItems: "Is the timeline achievable? What are the penalties for delay?" },
  { criterion: "Qualifications", weight: "Critical", checkItems: "Does the contractor have relevant experience? Check references." },
  { criterion: "Financial Capacity", weight: "Important", checkItems: "Can they bond the work? Are they financially stable?" },
  { criterion: "Team Quality", weight: "Important", checkItems: "Who will actually manage your project? What's their experience?" },
];

const redFlags = [
  { flag: "Price significantly below others", warning: "May indicate scope misunderstanding, unrealistic assumptions, or intention to recover through change orders" },
  { flag: "Vague scope descriptions", warning: "Creates disputes over what's included; leads to change orders for 'extras'" },
  { flag: "No schedule commitment", warning: "Suggests lack of commitment or understanding of project requirements" },
  { flag: "Excessive allowances", warning: "Actual costs often exceed allowances; masks true project cost" },
  { flag: "Limited or no references", warning: "Inability to provide references suggests lack of successful projects" },
  { flag: "Pressure to sign quickly", warning: "Reputable contractors allow time for proper evaluation" },
];

const costRanges = [
  { projectType: "Office Shell", lowRange: "$100", midRange: "$150", highRange: "$200", notes: "Core & shell only" },
  { projectType: "Office Finished", lowRange: "$175", midRange: "$250", highRange: "$350", notes: "Complete buildout" },
  { projectType: "Medical Office", lowRange: "$225", midRange: "$325", highRange: "$450", notes: "Depends on specialty" },
  { projectType: "Retail Shell", lowRange: "$100", midRange: "$140", highRange: "$180", notes: "Varies by location" },
  { projectType: "Restaurant", lowRange: "$200", midRange: "$300", highRange: "$450", notes: "Kitchen intensive" },
  { projectType: "Warehouse", lowRange: "$75", midRange: "$110", highRange: "$150", notes: "Minimal office" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Construction Quotes for Commercial Projects"
        description="How to get, evaluate, and compare construction quotes for commercial projects in Tampa Bay."
        datePublished="2024-01-15"
        dateModified="2024-01-15"
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Commercial construction quotes in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Construction Quotes for Commercial Projects
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Wisdom from Florida Construction Specialists on getting, evaluating, and comparing commercial construction quotes. Make informed decisions that protect your investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Your Free Quote
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
              Understanding Commercial Construction Quotes
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-6">
                A construction quote is more than a number—it's a commitment that defines what you'll receive for your investment. The quality of quotes you receive depends on the quality of information you provide and the contractors you invite to bid. Understanding this process helps you get meaningful quotes that enable good decisions.
              </p>
              <p className="text-gray-600 mb-6">
                Commercial construction quotes in Tampa Bay typically range from detailed line-item proposals to simple lump-sum numbers. The most useful quotes provide transparency into how the price was developed, allowing you to compare contractors on an apples-to-apples basis and understand where your money goes.
              </p>
              <p className="text-gray-600 mb-6">
                At Florida Construction Specialists, we believe in quote transparency. Our proposals detail scope, pricing breakdown, schedule, exclusions, and qualifications. We want you to understand exactly what you're getting and make an informed decision—even if that decision isn't us. Good projects start with clear expectations on all sides.
              </p>
              <p className="text-gray-600 mb-8">
                This guide explains how to request meaningful quotes, what to look for when evaluating proposals, and how to avoid the common traps that lead to cost overruns and disputes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Components */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Elements of a Quality Construction Quote
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Every professional construction quote should include these essential elements.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quoteComponents.map((component, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <component.icon className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">{component.title}</h3>
                <p className="text-gray-600">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Types */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              Types of Construction Quotes
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Different project circumstances call for different contract and quote structures.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {quoteTypes.map((type, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">{type.type}</h3>
                  <p className="text-gray-600 mb-3">{type.description}</p>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-brand-green font-semibold">Best for:</span> {type.bestFor}</p>
                    <p><span className="text-brand-gold font-semibold">Risk profile:</span> {type.risk}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost Ranges */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              Tampa Bay Commercial Construction Cost Ranges (2024)
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Use these ranges to evaluate whether quotes you receive are reasonable for the Tampa Bay market.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Project Type</th>
                    <th className="px-6 py-4 text-left font-heading">Budget</th>
                    <th className="px-6 py-4 text-left font-heading">Mid-Range</th>
                    <th className="px-6 py-4 text-left font-heading">Premium</th>
                    <th className="px-6 py-4 text-left font-heading">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {costRanges.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.projectType}</td>
                      <td className="px-6 py-4 text-gray-600">{row.lowRange}/SF</td>
                      <td className="px-6 py-4 text-brand-green font-semibold">{row.midRange}/SF</td>
                      <td className="px-6 py-4 text-gray-600">{row.highRange}/SF</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              *Ranges are for construction costs only. Soft costs, land, and FF&E are additional.
            </p>
          </div>
        </div>
      </section>

      {/* Evaluation Criteria */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              How to Evaluate Construction Quotes
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Price is important, but it's not the only factor. Use these criteria for thorough evaluation.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Criterion</th>
                    <th className="px-6 py-4 text-left font-heading">Weight</th>
                    <th className="px-6 py-4 text-left font-heading">What to Check</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {evaluationCriteria.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.criterion}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          row.weight === 'Critical' ? 'bg-brand-green/20 text-brand-green-dark' : 'bg-brand-gold/20 text-brand-gold'
                        }`}>
                          {row.weight}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{row.checkItems}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Red Flags in Construction Quotes
            </h2>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-bold text-red-800 font-heading">Warning Signs to Watch For</h3>
              </div>
              <div className="space-y-4">
                {redFlags.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-red-700 mb-1">{item.flag}</h4>
                    <p className="text-gray-600 text-sm">{item.warning}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Better Quotes */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              How to Get Better Construction Quotes
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <Lightbulb className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Provide Complete Information</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Complete construction documents or detailed scope</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Site information including surveys and geotech</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Clear timeline requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Budget parameters if applicable</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <Search className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Pre-Qualify Bidders</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Invite only qualified, interested contractors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Verify relevant experience and references</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Confirm bonding capacity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Assess current workload and availability</span>
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
                  How many quotes should I get for a commercial project?
                </h3>
                <p className="text-gray-600">
                  For competitive bidding, three to five qualified bidders is typical. Fewer may not provide adequate market testing; more spreads bidder effort thin and can reduce quote quality. For negotiated work (design-build), you might select a single qualified firm based on qualifications rather than bidding.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  How long are construction quotes valid?
                </h3>
                <p className="text-gray-600">
                  Most construction quotes are valid for 30-60 days. Material prices, subcontractor availability, and market conditions change constantly. Quotes older than 60 days should be reconfirmed. In volatile markets (like recent years), shorter validity periods protect both parties from price changes.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  Should I always choose the lowest quote?
                </h3>
                <p className="text-gray-600">
                  No. The lowest quote is only the best choice if scope, quality, and contractor qualifications are equal—which they rarely are. A low quote from an unqualified contractor often results in a higher final cost due to change orders, delays, and quality problems. Evaluate total value, not just initial price.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  What's included in Florida Construction Specialists' quotes?
                </h3>
                <p className="text-gray-600">
                  Our proposals include: detailed scope description, line-item pricing by CSI division, project schedule with milestones, list of exclusions, allowance identification, required owner decisions, payment terms, and our qualifications. We believe transparency builds trust and leads to better project outcomes.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  Can I negotiate construction quotes?
                </h3>
                <p className="text-gray-600">
                  Yes, negotiation is normal—but focus on scope and value, not just price reduction. Experienced contractors have limited margin flexibility. More productive conversations involve scope clarification, value engineering alternatives, or phasing options. We prefer collaborative discussions that find solutions rather than pressure tactics.
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
            Ready to Get a Professional Construction Quote?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your commercial project and provide a comprehensive, transparent quote that helps you make an informed decision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request Your Quote
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
