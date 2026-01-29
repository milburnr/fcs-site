import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, CheckCircle, DollarSign, Building, FileText, Clock, TrendingUp, Shield, Calculator, Landmark } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Commercial Construction Loans in Tampa - Florida Construction Specialists",
  description: "Are you in need of construction financing for your commercial project in Tampa? Discover financing options and how Florida Construction Specialists supports your funding needs.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial Construction Loans in Tampa", href: "/commercial-construction-loans-in-tampa/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/services/commercial/medical-construction/", label: "Medical Facility Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-large.webp"
            alt="Commercial construction financing in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Commercial Construction Loans in Tampa: A Complete Financing Guide
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Understanding construction financing is crucial for your commercial project success. Learn about loan types, requirements, and how to position your Tampa Bay project for financing approval.
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

      {/* Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Financing a commercial construction project in Tampa Bay requires understanding the unique aspects of construction lending. Unlike traditional commercial mortgages, construction loans have distinct structures, requirements, and processes. As Tampa's leading commercial contractor serving Hillsborough, Pinellas, Polk, and Manatee counties, Florida Construction Specialists works closely with business owners navigating the construction financing landscape. This guide provides essential information to help you secure the funding your project needs.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Understanding Commercial Construction Loans
            </h2>
            <p className="text-gray-600 mb-6">
              Commercial construction loans differ fundamentally from traditional business loans or commercial mortgages. These short-term loans fund the construction process, typically converting to permanent financing upon project completion. Understanding how construction loans work is essential for planning your Tampa Bay commercial project.
            </p>
            <p className="text-gray-600 mb-6">
              Construction loans are disbursed in draws—incremental payments released as construction progresses. Lenders typically require inspection and verification before each draw release, ensuring funds are used appropriately and the project is progressing as planned. Interest is charged only on disbursed funds, not the full loan amount, which helps manage costs during the construction period.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Types of Commercial Construction Financing
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Landmark className="w-6 h-6" />
                  Traditional Bank Construction Loans
                </h3>
                <p className="text-gray-600 mb-3">
                  Most Tampa Bay commercial construction projects are financed through traditional bank construction loans. Local and regional banks including Centennial Bank, Seacoast Bank, and Valley National have active commercial construction lending programs serving the Tampa Bay market.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>Loan-to-cost ratios typically 65-80%</li>
                  <li>Terms of 12-24 months during construction</li>
                  <li>Interest rates: Prime + 1-3%</li>
                  <li>Requires personal guarantees for most borrowers</li>
                  <li>Strong documentation and track record requirements</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Building className="w-6 h-6" />
                  SBA 504 Construction Loans
                </h3>
                <p className="text-gray-600 mb-3">
                  The Small Business Administration's 504 loan program can fund owner-occupied commercial construction projects. These loans feature favorable terms for qualifying Tampa Bay businesses.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>Up to 90% financing (10% down payment)</li>
                  <li>Below-market fixed rates on the CDC portion</li>
                  <li>Long-term permanent financing built in (20-25 years)</li>
                  <li>Ideal for owner-occupied facilities</li>
                  <li>Requires job creation or community development</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6" />
                  Construction-to-Permanent (One-Time Close)
                </h3>
                <p className="text-gray-600 mb-3">
                  These loans combine construction financing with permanent mortgage in a single closing, reducing fees and simplifying the process.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>One set of closing costs</li>
                  <li>Rate locked at closing (protection from rising rates)</li>
                  <li>Automatic conversion upon completion</li>
                  <li>Streamlined documentation</li>
                  <li>Popular for straightforward new construction</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Clock className="w-6 h-6" />
                  Bridge Loans
                </h3>
                <p className="text-gray-600 mb-3">
                  Bridge financing can support construction projects requiring faster closing or more flexible underwriting than traditional bank loans.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>Faster approval and closing (often 2-4 weeks)</li>
                  <li>More flexible credit requirements</li>
                  <li>Higher interest rates (typically 8-14%)</li>
                  <li>Short terms (6-24 months)</li>
                  <li>Often used to acquire and stabilize before refinancing</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Construction Loan Costs Comparison
            </h2>
            <p className="text-gray-600 mb-4">
              Understanding the full cost of construction financing helps you budget accurately:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Cost Component</th>
                    <th className="px-6 py-3 text-left">Typical Range</th>
                    <th className="px-6 py-3 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Interest Rate</td>
                    <td className="px-6 py-4">Prime + 1-3%</td>
                    <td className="px-6 py-4">Variable during construction</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Origination Fee</td>
                    <td className="px-6 py-4">0.5-1.5% of loan</td>
                    <td className="px-6 py-4">Paid at closing</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Appraisal</td>
                    <td className="px-6 py-4">$3,000-$10,000</td>
                    <td className="px-6 py-4">Based on project complexity</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Environmental (Phase I)</td>
                    <td className="px-6 py-4">$2,000-$4,000</td>
                    <td className="px-6 py-4">Required for most commercial</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Inspection Fees</td>
                    <td className="px-6 py-4">$300-$500 per draw</td>
                    <td className="px-6 py-4">4-8 inspections typical</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Legal/Title</td>
                    <td className="px-6 py-4">$5,000-$15,000</td>
                    <td className="px-6 py-4">Title insurance, attorney fees</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Interest Reserve</td>
                    <td className="px-6 py-4">6-12 months interest</td>
                    <td className="px-6 py-4">Often required as holdback</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              What Lenders Look For in Tampa Bay Projects
            </h2>
            <p className="text-gray-600 mb-6">
              Understanding lender requirements helps you prepare a compelling loan application. Tampa Bay construction lenders typically evaluate:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-2 flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Project Feasibility
                </h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>Market demand analysis</li>
                  <li>Realistic construction budget</li>
                  <li>Achievable timeline</li>
                  <li>Experienced project team</li>
                  <li>Clear exit strategy</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Borrower Qualifications
                </h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>Personal credit (typically 680+)</li>
                  <li>Liquidity for equity injection</li>
                  <li>Construction experience</li>
                  <li>Business financials</li>
                  <li>Personal net worth</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-2 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Project Documentation
                </h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>Complete architectural plans</li>
                  <li>Detailed construction budget</li>
                  <li>General contractor qualifications</li>
                  <li>Permits and approvals</li>
                  <li>Market study or LOIs</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-2 flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Financial Structure
                </h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>20-35% equity contribution</li>
                  <li>Adequate contingency (5-10%)</li>
                  <li>Interest reserve coverage</li>
                  <li>Debt service coverage post-completion</li>
                  <li>Cash reserves post-closing</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              How Florida Construction Specialists Supports Your Financing
            </h2>
            <p className="text-gray-600 mb-6">
              While we don't provide direct financing, Florida Construction Specialists plays a crucial role in helping Tampa Bay clients secure construction loans. Our professional approach and comprehensive documentation give lenders confidence in your project:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Detailed Cost Estimates:</strong>
                  <span className="text-gray-600"> Our comprehensive construction budgets provide the level of detail lenders require, with clear breakdowns by trade, contingencies, and phasing that supports accurate draw schedules.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Realistic Schedules:</strong>
                  <span className="text-gray-600"> We provide detailed project schedules that lenders can trust, reducing concerns about interest cost overruns due to construction delays.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Contractor Qualification Package:</strong>
                  <span className="text-gray-600"> We provide complete documentation of our licenses, insurance, bonding capacity, and project experience—everything lenders need to approve the contractor relationship.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Lender-Ready Contracts:</strong>
                  <span className="text-gray-600"> Our construction contracts include provisions that protect lender interests, including assignment rights and standard draw request procedures.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Draw Administration Support:</strong>
                  <span className="text-gray-600"> We manage the draw request process efficiently, providing sworn statements, lien waivers, and progress documentation that expedites fund releases.</span>
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Tampa Bay Commercial Construction Loan Timeline
            </h2>
            <p className="text-gray-600 mb-4">
              Understanding the construction loan timeline helps you plan your project appropriately:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Phase</th>
                    <th className="px-6 py-3 text-left">Timeline</th>
                    <th className="px-6 py-3 text-left">Key Activities</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Pre-Application</td>
                    <td className="px-6 py-4">2-4 weeks</td>
                    <td className="px-6 py-4">Gather documents, contractor selection, preliminary budget</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Loan Application</td>
                    <td className="px-6 py-4">1-2 weeks</td>
                    <td className="px-6 py-4">Submit application, pay fees, initial review</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Underwriting</td>
                    <td className="px-6 py-4">3-6 weeks</td>
                    <td className="px-6 py-4">Due diligence, appraisal, environmental, credit analysis</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Approval/Commitment</td>
                    <td className="px-6 py-4">1-2 weeks</td>
                    <td className="px-6 py-4">Loan committee, term sheet negotiation</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Closing Preparation</td>
                    <td className="px-6 py-4">2-4 weeks</td>
                    <td className="px-6 py-4">Legal documents, title work, final conditions</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Closing</td>
                    <td className="px-6 py-4">1 day</td>
                    <td className="px-6 py-4">Document signing, initial funding</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mb-8">Total timeline: Typically 60-90 days from application to closing for straightforward projects</p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Tips for Successful Construction Loan Approval
            </h2>
            <p className="text-gray-600 mb-6">
              Based on our experience supporting Tampa Bay clients through the financing process, here are key recommendations:
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <div className="bg-brand-green text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm shrink-0">1</div>
                <p className="text-gray-600"><strong>Start Early:</strong> Begin the financing process 3-6 months before you need to break ground. This allows time for approvals without delaying construction.</p>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <div className="bg-brand-green text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm shrink-0">2</div>
                <p className="text-gray-600"><strong>Select Your Contractor First:</strong> Lenders want to see a qualified, committed contractor before approving financing. Having Florida Construction Specialists on board strengthens your application.</p>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <div className="bg-brand-green text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm shrink-0">3</div>
                <p className="text-gray-600"><strong>Have More Equity Ready:</strong> In tight lending environments, being prepared to contribute 25-35% equity (versus minimum 20%) improves approval odds and terms.</p>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <div className="bg-brand-green text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm shrink-0">4</div>
                <p className="text-gray-600"><strong>Document Everything:</strong> Complete financial statements, tax returns, and project documentation prevent delays. Incomplete packages are the top cause of financing delays.</p>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <div className="bg-brand-green text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm shrink-0">5</div>
                <p className="text-gray-600"><strong>Consider Multiple Lenders:</strong> Different banks have different appetites for various project types. Getting proposals from 2-3 lenders helps ensure competitive terms.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Local Tampa Bay Lending Resources
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists maintains relationships with numerous commercial construction lenders serving Tampa Bay. We can provide referrals to institutions with active lending programs for commercial construction, including regional banks, SBA-preferred lenders, and alternative financing sources.
            </p>

            {/* FAQ Section */}
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions About Commercial Construction Loans
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How much down payment is required for a commercial construction loan?
                  </h3>
                  <p className="text-gray-600">
                    Most commercial construction loans require 20-35% equity contribution, depending on the project type, borrower experience, and current market conditions. SBA 504 loans may allow as little as 10% down for qualifying owner-occupied projects. Land equity can often count toward your equity contribution if you already own the property.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    What happens if my construction project exceeds the budget?
                  </h3>
                  <p className="text-gray-600">
                    Cost overruns must typically be funded by additional equity—banks rarely increase construction loan amounts mid-project. This is why having a qualified contractor with accurate estimating is crucial. Florida Construction Specialists' detailed budgets and contingency planning help prevent this situation. We recommend maintaining a 5-10% contingency reserve.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Can I get construction financing with less-than-perfect credit?
                  </h3>
                  <p className="text-gray-600">
                    While most construction lenders prefer credit scores above 680, options exist for borrowers with lower scores. Higher equity contributions, stronger project fundamentals, or working with alternative lenders can help. SBA loans sometimes have more flexibility. Private construction lenders may focus more on project quality than personal credit, though rates will be higher.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How does the construction draw process work?
                  </h3>
                  <p className="text-gray-600">
                    Funds are released in draws as construction progresses. Typically, your contractor submits a draw request with supporting documentation (invoices, lien waivers), the lender's inspector verifies work completion, and funds are released within 5-10 business days. Florida Construction Specialists manages this process efficiently to prevent cash flow interruptions on your project.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    What happens when construction is complete?
                  </h3>
                  <p className="text-gray-600">
                    Most construction loans convert to permanent financing upon completion. With construction-to-permanent loans, this conversion is automatic. Standalone construction loans require refinancing into a permanent mortgage before the construction loan matures. We recommend having your permanent financing strategy planned before construction begins.
                  </p>
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
            title="Explore Our Services"
            links={internalLinks}
          />
        </div>
      </section>

      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Discuss Your Commercial Construction Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a free consultation. We'll help you develop lender-ready project documentation for your Tampa Bay project.
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
