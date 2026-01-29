import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Hiring Commercial Contractors in Tampa: Complete Guide | FCS",
  description: "Step-by-step guide to hiring commercial contractors in Tampa Bay. Learn the process from RFP to contract signing to ensure your project succeeds.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Hiring Commercial Contractors in Tampa", href: "/hiring-commercial-contractors-in-tampa/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/key-questions-for-floridas-top-commercial-contractor/", label: "Questions to Ask Contractors" },
  { href: "/key-factors-for-choosing-the-top-commercial-contractor-in-tampa/", label: "Key Selection Factors" },
  { href: "/the-key-traits-of-top-commercial-contractors-in-tampa/", label: "Traits of Top Contractors" },
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
            alt="Hiring commercial contractors in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Hiring Commercial Contractors in Tampa: Your Complete Guide
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Navigate the contractor selection process with confidence. Learn how to identify, evaluate, and hire the right commercial contractor for your Tampa Bay project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Start Your Search Here
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
              Hiring a commercial contractor for your Tampa Bay project involves far more than comparing bids and choosing the lowest price. The contractor you select will manage millions of dollars, coordinate dozens of trades, navigate complex regulations, and ultimately deliver a building that serves your business for decades. Getting this decision right requires a systematic approach that evaluates contractors comprehensively. Florida Construction Specialists guides you through this process, whether you ultimately choose us or another qualified contractor—because we believe informed clients make better partners.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Step 1: Define Your Project Requirements
            </h2>
            <p className="text-gray-600 mb-6">
              Before approaching contractors, clearly define what you need. The more precisely you articulate your requirements, the more accurate contractor proposals will be. Essential elements to define include:
            </p>
            <ul className="list-none space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Project Scope:</strong> New construction, renovation, tenant improvement, or addition? Square footage? Building type?</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Budget Parameters:</strong> Realistic budget range based on preliminary estimates or comparable projects</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Timeline Requirements:</strong> Target completion date and any critical milestones (lease expiration, business launch, etc.)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Design Status:</strong> Do you have complete construction documents, preliminary designs, or just a concept?</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Delivery Method Preference:</strong> Traditional design-bid-build, design-build, or construction management?</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Special Requirements:</strong> Industry-specific needs, phased construction, operational constraints, etc.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Step 2: Develop a Contractor Shortlist
            </h2>
            <p className="text-gray-600 mb-6">
              Quality matters more than quantity when building your contractor shortlist. Three to five well-qualified contractors provide sufficient options without overwhelming your evaluation capacity. Sources for identifying qualified contractors include:
            </p>
            <ul className="list-none space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Professional Referrals:</strong> Architects, engineers, real estate brokers, and attorneys who work with commercial contractors regularly</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Business Network:</strong> Other business owners who have completed similar projects</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Industry Associations:</strong> AGC, ABC, and local construction organizations maintain member directories</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Online Research:</strong> Contractor websites, project portfolios, and reviews (verify independently)</span>
              </li>
            </ul>
            <p className="text-gray-600 mb-6">
              Screen initial candidates for basic qualifications before investing time in detailed evaluation: proper Florida licensure, appropriate project experience, adequate bonding capacity, and professional reputation. This preliminary screening narrows your list to contractors worth serious consideration.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Step 3: Issue a Request for Proposal (RFP)
            </h2>
            <p className="text-gray-600 mb-6">
              A well-crafted RFP communicates your requirements clearly and enables meaningful proposal comparisons. Include:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-brand-green-dark text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">RFP Section</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Purpose</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">What to Include</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Project Description</td>
                    <td className="border border-gray-300 px-4 py-3">Define the work</td>
                    <td className="border border-gray-300 px-4 py-3">Scope, location, size, type, special requirements</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Drawings & Specs</td>
                    <td className="border border-gray-300 px-4 py-3">Provide technical details</td>
                    <td className="border border-gray-300 px-4 py-3">Whatever design documents are available</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Schedule Requirements</td>
                    <td className="border border-gray-300 px-4 py-3">Set timing expectations</td>
                    <td className="border border-gray-300 px-4 py-3">Start date, completion date, milestones</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Submission Requirements</td>
                    <td className="border border-gray-300 px-4 py-3">Standardize responses</td>
                    <td className="border border-gray-300 px-4 py-3">Format, content, credentials required</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Selection Criteria</td>
                    <td className="border border-gray-300 px-4 py-3">Communicate priorities</td>
                    <td className="border border-gray-300 px-4 py-3">How proposals will be evaluated</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Timeline</td>
                    <td className="border border-gray-300 px-4 py-3">Set process schedule</td>
                    <td className="border border-gray-300 px-4 py-3">Questions deadline, submission deadline, interviews, decision</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Step 4: Evaluate Proposals Thoroughly
            </h2>
            <p className="text-gray-600 mb-6">
              Resist the temptation to skip straight to pricing. Systematic evaluation of all proposal elements reveals which contractors truly understand your project and have the capability to execute it successfully. Create an evaluation matrix covering:
            </p>
            <ul className="list-none space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Qualifications:</strong> License verification, insurance certificates, bonding capacity, safety records</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Experience:</strong> Relevant project history, team qualifications, references</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Approach:</strong> How they propose to execute your project, schedule logic, risk management</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Pricing:</strong> Total cost, cost breakdown, allowances, exclusions, pricing methodology</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Responsiveness:</strong> Proposal quality, completeness, attention to your specific requirements</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Step 5: Conduct Interviews and Site Visits
            </h2>
            <p className="text-gray-600 mb-6">
              Paper proposals only tell part of the story. In-person interviews reveal communication style, personality fit, and depth of understanding. Ask contractors to present their approach to your project, then probe with detailed questions. Meet the specific individuals who will manage your project—not just company principals who may have minimal involvement after contract signing.
            </p>
            <p className="text-gray-600 mb-6">
              Site visits provide invaluable insight. Visit a current job site to observe organization, safety practices, and work quality in progress. Tour a completed project similar to yours to see finished quality and how buildings have held up over time. These visits often reveal more than hours of interviews.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Step 6: Check References Thoroughly
            </h2>
            <p className="text-gray-600 mb-6">
              Reference checking should be substantive, not perfunctory. Contact multiple references and ask specific questions:
            </p>
            <ul className="list-none space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span>Was the project completed on time? If not, why?</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span>Was the project completed within budget? Were there significant change orders?</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span>How did the contractor handle problems or disputes?</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span>How was their communication throughout the project?</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span>Would you hire them again? Would you recommend them?</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Step 7: Negotiate and Execute the Contract
            </h2>
            <p className="text-gray-600 mb-6">
              Once you've identified your preferred contractor, negotiate contract terms that protect your interests. Key contract elements to address include:
            </p>
            <ul className="list-none space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Contract Sum:</strong> Clear definition of price, what's included, and what's excluded</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Payment Terms:</strong> Schedule of values, payment timing, retainage provisions</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Schedule:</strong> Contractual completion date, milestone dates, delay remedies</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Change Order Provisions:</strong> Process for changes, pricing methodology, approval requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Insurance and Bonding:</strong> Required coverages, limits, and documentation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Dispute Resolution:</strong> How disagreements will be resolved</span>
              </li>
            </ul>
            <p className="text-gray-600 mb-6">
              Consider using standard contract forms (AIA, ConsensusDocs) as a starting point—these forms address common issues and provide balanced provisions. Have your attorney review the contract before signing, particularly if using contractor-drafted agreements.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Tampa Bay Market Considerations
            </h2>
            <p className="text-gray-600 mb-6">
              The Tampa Bay commercial construction market presents specific factors to consider during contractor selection:
            </p>
            <ul className="list-none space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Hurricane Season Planning:</strong> How does the contractor plan around June-November weather risks?</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Local Permitting Knowledge:</strong> Experience with your specific jurisdiction (Tampa, St. Pete, Clearwater, county offices)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Subcontractor Relationships:</strong> Established networks with quality local trades</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Florida Code Expertise:</strong> Deep knowledge of hurricane-resistant construction requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Market Conditions Awareness:</strong> Understanding of current labor and material availability</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Common Mistakes to Avoid
            </h2>
            <p className="text-gray-600 mb-6">
              Learn from others' experiences by avoiding these common contractor selection mistakes:
            </p>
            <ul className="list-none space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Choosing solely on price:</strong> The lowest bid often indicates misunderstanding of scope or intent to pursue change orders</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Skipping verification:</strong> Failing to confirm licenses, insurance, and references</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Ignoring chemistry:</strong> Dismissing concerns about communication or personality fit</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Rushing the process:</strong> Making hasty decisions under time pressure</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Inadequate contract terms:</strong> Failing to address important provisions before signing</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  How long does the contractor selection process typically take?
                </h3>
                <p className="text-gray-600">
                  Allow four to eight weeks for a thorough selection process: one to two weeks for RFP development and distribution, two to three weeks for proposal preparation, one to two weeks for evaluation and interviews, and one week for reference checking and negotiation. Rushing this process increases the risk of poor contractor selection.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  Should I negotiate price after receiving proposals?
                </h3>
                <p className="text-gray-600">
                  Price negotiation is appropriate but should focus on value, not just reducing numbers. Ask contractors to explain their pricing, identify areas where scope might be adjusted, and discuss alternatives. Avoid "bid shopping"—using one contractor's price to pressure another—as this damages relationships and often results in reduced quality or scope.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  What if my preferred contractor is significantly more expensive than others?
                </h3>
                <p className="text-gray-600">
                  Understand why before dismissing them. Higher prices may reflect more complete scope inclusion, better quality subcontractors, or realistic rather than optimistic estimating. Ask the contractor to explain their pricing and help you understand what drives the difference. Sometimes the higher price represents better value when total project cost is considered.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  Should I hire a construction consultant to help with contractor selection?
                </h3>
                <p className="text-gray-600">
                  For significant projects, professional assistance can be valuable—particularly if you lack construction experience. Owner's representatives, construction consultants, or your architect can guide the selection process, help evaluate proposals, and ensure contracts protect your interests. The cost of this assistance typically saves money through better contractor selection and contract terms.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  What if I'm not satisfied with any of the contractors who submitted proposals?
                </h3>
                <p className="text-gray-600">
                  Don't settle. Expand your search, solicit additional proposals, or reconsider your project timeline if necessary. Hiring a contractor you're not confident in rarely ends well. It's better to delay the project and find the right contractor than to proceed with misgivings.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Florida Construction Specialists: Ready to Earn Your Business
            </h2>
            <p className="text-gray-600 mb-6">
              At Florida Construction Specialists, we welcome the thorough evaluation that sophisticated clients bring to contractor selection. We provide comprehensive proposals, facilitate reference checking and site visits, and engage openly in the interview process. We've built our reputation by consistently demonstrating the qualifications, experience, and commitment that lead to successful projects.
            </p>
            <p className="text-gray-600 mb-6">
              Contact Florida Construction Specialists to begin discussions about your Tampa Bay commercial project. Let us demonstrate why we should be on your contractor shortlist—and ultimately, your contractor of choice.
            </p>
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

      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Start Your Search?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss your project and receive a comprehensive proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request a Proposal
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
