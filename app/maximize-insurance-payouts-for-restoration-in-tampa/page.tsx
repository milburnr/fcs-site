import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, DollarSign, FileText, Shield, TrendingUp } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Maximize Insurance Payouts for Restoration Tampa | Commercial Claim Recovery",
  description: "Strategies to maximize insurance payouts for commercial restoration in Tampa. Documentation tips, coverage optimization, and claim support for full recovery.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Maximize Insurance Payouts for Restoration in Tampa", href: "/maximize-insurance-payouts-for-restoration-in-tampa/" },
];

const faqs = [
  {
    question: "How much more can I recover with professional claim support?",
    answer: "Studies consistently show that policyholders with professional representation recover significantly more than those handling claims alone. OPPAGA research found public adjuster-represented claims averaged 574% higher settlements. Professional contractor documentation and estimates typically increase claim recovery by 20-40% compared to relying solely on insurance company estimates. For a $200,000 commercial loss, this could mean $40,000-$80,000 in additional recovery—far exceeding the cost of professional assistance."
  },
  {
    question: "What commonly missed damages should I look for?",
    answer: "Commonly missed items include: hidden water damage behind walls and under flooring, electrical system impacts not visible to the eye, HVAC ductwork contamination and damage, code upgrade requirements for older buildings, landscaping and exterior damage, business personal property depreciation recovery, business interruption period extensions, extra expenses incurred during restoration, debris removal costs, and general contractor overhead and profit. Professional assessment identifies these often-overlooked items."
  },
  {
    question: "What is recoverable depreciation and how do I claim it?",
    answer: "Most replacement cost policies pay claims in two parts: Actual Cash Value (ACV) initially, which deducts depreciation, then recoverable depreciation after repairs are completed. To recover the withheld depreciation, you must: complete repairs using the insurance proceeds, document that repairs were made with receipts and invoices, submit a request for depreciation recovery with documentation, and complete work within the policy's timeframe (typically 180 days to 2 years). Many policyholders leave significant money unclaimed by not completing this process."
  },
  {
    question: "How can I maximize business interruption recovery?",
    answer: "Business interruption maximization requires: detailed documentation of historical revenue and expenses, clear establishment of the loss period start and end dates, calculation of lost profits using accepted methodologies, documentation of all continuing expenses during closure, tracking of extra expenses incurred to minimize the loss, evidence of mitigation efforts to reduce the restoration period, and consideration of extended period of indemnity coverage. Forensic accountants can help maximize complex BI claims."
  },
  {
    question: "When should I consider appraisal or litigation?",
    answer: "Consider appraisal when: you and the insurer agree coverage exists but disagree significantly on the amount, the difference justifies appraisal costs (typically $5,000-$25,000), and you have strong documentation supporting your position. Consider litigation when: coverage is wrongfully denied, the insurer acts in bad faith, appraisal isn't resolving the dispute, or the claim value justifies legal costs. Florida Statute 627.428 allows recovery of attorneys' fees if you prevail, making litigation viable for significant underpayments."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/property-damage-assessment-for-insurance-claims-in-tampa/", label: "Property Damage Assessment" },
  { href: "/tampas-insurance-restoration-reporting-and-documentation/", label: "Documentation Services" },
  { href: "/vip-public-adjuster/", label: "Public Adjuster Services" },
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
            alt="Maximize insurance payouts for restoration in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Maximizing Insurance Payouts for Restoration in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Proven strategies to maximize your commercial property insurance claim recovery. Professional documentation, thorough assessment, and expert advocacy ensure you receive every dollar your policy provides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Maximize Your Claim
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
              Most commercial property owners significantly underestimate their insurance claim potential. Insurance company adjusters—while often professional—work for the insurer and have incentives to control costs. Without expert advocacy, property owners routinely leave 20-40% or more of their entitled recovery on the table. Florida Construction Specialists helps Tampa Bay commercial property owners maximize insurance claim recovery through comprehensive documentation, expert assessment, and professional claim support.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">The Initial Offer Is Rarely the Best Offer</h3>
                  <p className="text-amber-700">Insurance company first offers are typically based on their adjuster's initial inspection, which often misses damage and underestimates repair costs. Don't accept the first offer without professional review. Supplemental claims, additional documentation, and negotiation routinely increase settlements significantly. You have the right to challenge inadequate offers.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Key Strategies for Maximum Claim Recovery
            </h2>
            
            <p className="text-gray-600 mb-6">
              Maximizing your insurance claim requires a strategic approach that begins before damage occurs and continues through final settlement. Each strategy builds on the others to create the strongest possible claim position.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <FileText className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Documentation Excellence</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Immediate damage photography</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Professional damage assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Xactimate estimates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Hidden damage identification</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Coverage Optimization</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Full policy review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>All coverage types claimed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Code upgrade inclusion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Depreciation recovery</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <TrendingUp className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Professional Advocacy</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Expert contractor support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Public adjuster involvement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Negotiation experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Dispute resolution support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <DollarSign className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Complete Recovery</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Supplemental claims filed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>All line items addressed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Business interruption maximized</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Recoverable depreciation claimed</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Commonly Undervalued Claim Components
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Claim Component</th>
                    <th className="px-6 py-4 text-left">Typical Undervaluation</th>
                    <th className="px-6 py-4 text-left">How to Maximize</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Hidden Damage</td>
                    <td className="px-6 py-4">Often missed entirely</td>
                    <td className="px-6 py-4 text-gray-600">Thermal imaging, moisture testing</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Code Upgrades</td>
                    <td className="px-6 py-4">30-50% underfunded</td>
                    <td className="px-6 py-4 text-gray-600">Professional code analysis</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Business Interruption</td>
                    <td className="px-6 py-4">20-40% undervalued</td>
                    <td className="px-6 py-4 text-gray-600">Forensic accounting support</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Contents/Equipment</td>
                    <td className="px-6 py-4">Depreciation excessive</td>
                    <td className="px-6 py-4 text-gray-600">Detailed inventory, replacement cost</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Overhead & Profit</td>
                    <td className="px-6 py-4">Often excluded</td>
                    <td className="px-6 py-4 text-gray-600">Document GC involvement</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Extra Expense</td>
                    <td className="px-6 py-4">Partially claimed</td>
                    <td className="px-6 py-4 text-gray-600">Track all mitigation costs</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Step-by-Step Claim Maximization Process
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Immediate Documentation</h3>
                  <p className="text-gray-600">Before any cleanup or repairs, document everything. Photograph all damage from multiple angles, create video walkthroughs, preserve damaged materials as evidence, and note the date, time, and circumstances of the loss.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Professional Assessment</h3>
                  <p className="text-gray-600">Engage professional damage assessment services. Expert contractors identify damage that insurance adjusters miss, provide detailed Xactimate estimates, and document all repair requirements including code upgrades.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Policy Review</h3>
                  <p className="text-gray-600">Review your policy to identify all applicable coverages. Many commercial policies include coverage types that policyholders don't claim because they don't know they exist. Consider engaging a public adjuster for large or complex claims.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Comprehensive Claim Filing</h3>
                  <p className="text-gray-600">Submit a thorough claim package including professional estimates, supporting documentation, and clear coverage requests. Incomplete initial filings often result in lower settlements. Quality upfront saves rework later.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Active Claim Management</h3>
                  <p className="text-gray-600">Don't passively wait for the insurer. Attend all inspections with your own expert, respond promptly to requests, document all communications, file supplemental claims when additional damage is discovered, and push back on inadequate offers.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">6</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Complete Recovery</h3>
                  <p className="text-gray-600">After settlement, complete repairs and submit for recoverable depreciation. Track all costs during restoration for potential supplemental claims. Ensure you've recovered every dollar your policy provides.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Professional Support ROI
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-800 mb-2">Self-Managed Claim Risks</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Missing hidden damage</li>
                  <li>• Inadequate documentation</li>
                  <li>• Accepting low initial offers</li>
                  <li>• Missing coverage types</li>
                  <li>• Failing to claim depreciation</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">Professional Support Value</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 20-40%+ higher settlements</li>
                  <li>• Complete damage identification</li>
                  <li>• Professional documentation</li>
                  <li>• Effective negotiation</li>
                  <li>• Full coverage utilization</li>
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
              <h3 className="text-2xl font-bold mb-4">Maximize Your Insurance Recovery</h3>
              <p className="mb-6 text-gray-200">
                Florida Construction Specialists helps Tampa Bay commercial property owners get every dollar they're entitled to. Our professional damage assessment and documentation services support maximum claim recovery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Start Maximizing Your Claim
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
            Don't Leave Money on the Table
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to maximize your insurance claim recovery throughout Tampa Bay.
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
