import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, Clock, FileText, Shield, Scale } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Understanding Tampa Insurance Restoration Claims | Commercial Property Guide",
  description: "Complete guide to understanding insurance restoration claims in Tampa. Learn Florida insurance laws, claim timelines, coverage types, and strategies for commercial property owners.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Understanding Tampa Insurance Restoration Claims", href: "/understanding-tampa-insurance-restoration-claims/" },
];

const faqs = [
  {
    question: "What are the time limits for filing an insurance claim in Florida?",
    answer: "Florida Statute 627.70132 requires property insurance claims to be filed within 2 years of the date of loss for policies issued after July 1, 2021 (previously 3 years). You must report the claim 'promptly' to your insurer. After filing, insurers have 14 days to acknowledge your claim, 90 days to pay or deny it, and must begin investigation within 14 days. Missing these deadlines can void your right to recover. For older policies or specific coverage types, consult your policy language as different timeframes may apply."
  },
  {
    question: "What's the difference between replacement cost and actual cash value coverage?",
    answer: "Replacement cost coverage pays to repair or replace damaged property with materials of similar kind and quality, without deduction for depreciation. Actual cash value (ACV) pays the replacement cost minus depreciation, meaning you receive less for older items. Most commercial policies provide replacement cost for buildings but may have ACV provisions for certain contents. Understanding which coverage applies to each part of your property is essential for estimating your potential recovery."
  },
  {
    question: "Does my commercial policy cover flood damage from hurricanes?",
    answer: "Standard commercial property policies exclude flood damage, even if caused by a hurricane. Flood coverage requires a separate National Flood Insurance Program (NFIP) policy or private flood insurance. However, 'wind-driven rain' damage—water that enters through storm-damaged openings—is typically covered under your wind/hurricane coverage. This distinction is critically important: water that rises from below is flood (excluded); water that enters from above through damaged areas is often covered."
  },
  {
    question: "What is the appraisal process and when should I invoke it?",
    answer: "The appraisal process is a dispute resolution mechanism included in most Florida insurance policies. When you and your insurer disagree on the amount of loss (not coverage), either party can demand appraisal. Each party selects an appraiser, and the two appraisers select an umpire. If the appraisers can't agree on values, the umpire decides. Appraisal can be faster and less expensive than litigation, and the decision is binding. Consider appraisal when the insurer's estimate is significantly below actual repair costs and coverage isn't disputed."
  },
  {
    question: "How does Florida's assignment of benefits (AOB) reform affect my claim?",
    answer: "Florida's 2022 AOB reform (SB 2-D) prohibits post-loss assignment of benefits for property insurance claims. This means you can no longer sign over your insurance benefits to contractors or other third parties. However, you can still hire contractors directly, have them bill the insurance company, and authorize them to communicate with your insurer on your behalf. The reform changes the payment flow but doesn't prevent you from using professional restoration services."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/tampas-insurance-restoration-reporting-and-documentation/", label: "Reporting and Documentation" },
  { href: "/maximize-insurance-payouts-for-restoration-in-tampa/", label: "Maximize Insurance Payouts" },
  { href: "/insurance-restoration-compliance-and-regulations-in-tampa/", label: "Compliance and Regulations" },
  { href: "/contact/", label: "Schedule a Consultation" },
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
            src="/images/hurricane-ian/hurricane-ian-display.webp"
            alt="Understanding insurance restoration claims in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Understanding Tampa Insurance Restoration Claims
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Navigate the insurance restoration claim process with confidence. Learn Florida insurance laws, understand your coverage, and protect your rights as a commercial property owner in Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Claim Guidance
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
              Insurance restoration claims can be complex, especially for commercial properties in Tampa Bay where hurricanes, flooding, and severe weather create frequent damage events. Understanding how insurance claims work—from initial filing through final settlement—empowers you to protect your rights, avoid common pitfalls, and maximize your recovery. This guide covers the essential elements of Florida insurance restoration claims for commercial property owners.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Important: Florida Insurance Claim Deadlines</h3>
                  <p className="text-amber-700">Florida law imposes strict deadlines on insurance claims. You must file claims within 2 years of the loss date (for policies issued after July 1, 2021) and report damage "promptly." Insurance companies must acknowledge claims within 14 days and pay or deny within 90 days. Missing any deadline can jeopardize your entire claim. Contact us immediately after damage occurs to protect your rights.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              The Insurance Claim Process in Florida
            </h2>
            
            <p className="text-gray-600 mb-6">
              Understanding the claim process helps you navigate each stage effectively. Florida law establishes specific timelines and requirements that both policyholders and insurers must follow. Knowing these requirements protects your rights and helps you identify when an insurer isn't meeting its obligations.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Damage Occurs & Initial Response</h3>
                  <p className="text-gray-600">Document damage immediately with photos and videos. Take reasonable steps to prevent further damage (mitigation). Notify your insurance company promptly. Under Florida law, failing to mitigate can reduce your claim recovery.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Claim Filing & Acknowledgment</h3>
                  <p className="text-gray-600">File your claim formally with the insurer. Florida Statute 627.70131 requires insurers to acknowledge receipt within 14 days and begin investigation within 14 days. The insurer will assign an adjuster to your claim.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Adjuster Inspection</h3>
                  <p className="text-gray-600">The insurance company adjuster will inspect your property. Be present or have a representative present. Point out all damage—don't assume they'll find everything. Having your own documentation helps identify missed items.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Proof of Loss Submission</h3>
                  <p className="text-gray-600">You'll submit a formal proof of loss documenting your claimed damages. This sworn statement details the loss amount and must be accurate—misrepresentations can void your policy. Professional documentation services help ensure completeness and accuracy.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Claim Decision (90 Days)</h3>
                  <p className="text-gray-600">Florida law requires insurers to pay or deny claims within 90 days of receiving your proof of loss. If they need more time due to factors beyond their control, they must notify you in writing. Delays without proper notification may violate Florida law.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">6</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Payment or Dispute Resolution</h3>
                  <p className="text-gray-600">If you agree with the settlement, payment is made. If you disagree, options include requesting re-inspection, invoking the appraisal clause, pursuing mediation through the Department of Financial Services, or litigation.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Understanding Your Commercial Property Coverage
            </h2>

            <p className="text-gray-600 mb-6">
              Commercial property insurance typically includes multiple coverage types, each with specific requirements and limitations. Understanding what's covered—and what's not—helps you file claims properly and set realistic expectations for recovery.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Building Coverage</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Structural damage to the building</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Permanently attached fixtures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Building systems (HVAC, electrical)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Code upgrade coverage (if endorsed)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <FileText className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Business Personal Property</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Furniture and equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Inventory and supplies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Tenant improvements (betterments)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Property of others in your care</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Clock className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Business Income Coverage</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Lost revenue during restoration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Continuing operating expenses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Extended period of indemnity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Contingent business income</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Scale className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Extra Expense Coverage</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Temporary relocation costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Equipment rental</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Overtime labor to expedite repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Additional transportation costs</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Key Florida Insurance Statutes
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Statute</th>
                    <th className="px-6 py-4 text-left">Subject</th>
                    <th className="px-6 py-4 text-left">Key Provisions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">627.70131</td>
                    <td className="px-6 py-4">Claim Handling</td>
                    <td className="px-6 py-4 text-gray-600">14-day acknowledgment, 90-day decision</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">627.70132</td>
                    <td className="px-6 py-4">Filing Deadline</td>
                    <td className="px-6 py-4 text-gray-600">2-year statute of limitations</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">627.7011</td>
                    <td className="px-6 py-4">Code Upgrades</td>
                    <td className="px-6 py-4 text-gray-600">Coverage for code-required improvements</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">627.702</td>
                    <td className="px-6 py-4">Valued Policy Law</td>
                    <td className="px-6 py-4 text-gray-600">Full limits for total losses</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">627.428</td>
                    <td className="px-6 py-4">Attorney Fees</td>
                    <td className="px-6 py-4 text-gray-600">Insurer pays if policyholder prevails</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Common Claim Challenges and Solutions
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-800 mb-2">Common Challenges</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Claim underpayment or lowball offers</li>
                  <li>• Coverage disputes or partial denials</li>
                  <li>• Delayed claim processing</li>
                  <li>• Hidden damage not acknowledged</li>
                  <li>• Depreciation disputes</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">Solutions</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Professional damage documentation</li>
                  <li>• Policy review by coverage expert</li>
                  <li>• Formal complaints to DFS</li>
                  <li>• Independent contractor estimates</li>
                  <li>• Appraisal or mediation</li>
                </ul>
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
              <h3 className="text-2xl font-bold mb-4">Need Help with Your Insurance Claim?</h3>
              <p className="mb-6 text-gray-200">
                Florida Construction Specialists helps Tampa Bay commercial property owners navigate insurance claims with professional damage assessment, documentation, and restoration services. We work with your insurer to support fair claim settlement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Get Claim Support
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
            title="Related Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Expert Insurance Claim Support
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for comprehensive claim support throughout Tampa Bay.
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
