import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, Shield, FileText, Search, Ban, Scale } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Preventing Home Improvement Fraud Tampa",
  description: "Protect yourself from home improvement fraud in Tampa. Learn warning signs, verify contractor licenses, understand Florida contractor laws, and choose reputable construction companies.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Preventing Home Improvement Fraud", href: "/preventing-home-improvement-fraud/" },
];

const faqs = [
  {
    question: "How do I verify a contractor's license in Florida?",
    answer: "Verify Florida contractor licenses at myfloridalicense.com, the official Florida Department of Business and Professional Regulation (DBPR) website. Search by contractor name, business name, or license number. Verify the license is active, not expired or suspended. Check for any disciplinary actions. For local work, also verify any required local licenses or registrations. Don't accept verbal claims—verify independently."
  },
  {
    question: "What should a legitimate construction contract include?",
    answer: "Florida law requires written contracts for projects over $2,500. Contracts should include: full company name and license number, complete project scope and specifications, total price and payment schedule, estimated start and completion dates, permit responsibilities, warranty information, dispute resolution process, and required statutory notices about construction liens. Review contracts carefully before signing—legitimate contractors explain terms."
  },
  {
    question: "How much deposit should I pay a contractor?",
    answer: "Florida law limits deposits to 10% of the contract price or $1,000, whichever is less, unless the contractor has a payment/performance bond or provides certain financing. Be suspicious of contractors demanding large upfront payments. Progress payments should be tied to completed work. Never pay in full before completion. Final payment should be withheld until you're satisfied with the work and have necessary inspections."
  },
  {
    question: "What are warning signs of contractor fraud?",
    answer: "Warning signs include: door-to-door solicitation especially after storms, pressure to sign immediately, requests for large cash deposits, unwillingness to provide license information, no physical business address, significantly lower prices than competitors, reluctance to put things in writing, suggesting you skip permits, and negative reviews or complaints. Trust your instincts—if something feels wrong, it probably is."
  },
  {
    question: "What should I do if I suspect contractor fraud?",
    answer: "Document everything: photos, contracts, communications, payments. Stop making payments. File complaints with Florida DBPR (for licensed contractor violations), local building department, Better Business Bureau, and Florida Attorney General (for consumer fraud). For significant losses, consult an attorney. Report the incident to help protect others. In active fraud cases, contact local law enforcement."
  }
];

const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/proper-permits-insights-from-the-top-commercial-contractor-in-tampa/", label: "Permit Insights" },
  { href: "/about/", label: "About Florida Construction Specialists" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const relatedArticles = [
  {
    "title": "Mastering Commercial Construction Design in Florida",
    "href": "/mastering-commercial-construction-design-in-florida/",
    "description": "Learn the ins and outs of architectural design and commercial building design with our comprehensive guide for Florida projects."
  },
  {
    "title": "Benefits of Design-Build for Commercial Projects",
    "href": "/benefits-of-design-build-construction-for-commercial-project/",
    "description": "Discover how design-build delivery streamlines commercial construction with single-source accountability."
  },
  {
    "title": "Commercial Construction Budgeting Tips",
    "href": "/commercial-construction-budgeting-tips-for-florida-specialists/",
    "description": "Expert strategies for developing and managing budgets for commercial construction in Florida."
  },
  {
    "title": "Tips for Commercial Renovation in Florida",
    "href": "/tips-for-commercial-renovation-in-florida/",
    "description": "Key considerations for successful commercial renovation projects in the Sunshine State."
  }
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
            alt="Preventing home improvement fraud in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Preventing Home Improvement Fraud in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Florida Construction Specialists helps property owners protect themselves from contractor fraud with guidance on verifying licenses, recognizing warning signs, and choosing reputable construction companies.
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

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Construction fraud costs Florida property owners millions of dollars annually. Unlicensed contractors, storm chasers, and outright scammers target homeowners and business owners—especially after hurricanes when urgent repairs create opportunities for exploitation. Florida Construction Specialists, a licensed and established Tampa Bay contractor, shares insights on protecting yourself from fraud and choosing reputable construction companies for your projects.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-800 mb-2">Fraud Increases After Storms</h3>
                  <p className="text-red-700">After hurricanes and major storms, fraud activity spikes dramatically. Scammers follow storms, going door-to-door offering "immediate" repairs. They collect deposits and disappear, or perform shoddy work that creates additional damage. Take extra caution when seeking post-storm repairs—verify everything before signing contracts or making payments.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Warning Signs of Contractor Fraud
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <Ban className="w-10 h-10 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-red-700 mb-3">Major Red Flags</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Door-to-door solicitation after storms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>High-pressure tactics to sign immediately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Demands for large cash deposits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Unwilling to provide license number</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>No physical business address</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <AlertTriangle className="w-10 h-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold text-yellow-700 mb-3">Other Warning Signs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>Price far below other estimates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>Only accepts cash payments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>Suggests skipping building permits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>Vague or verbal-only agreements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>Out-of-state license plates on vehicles</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Florida Contractor Licensing Requirements
            </h2>

            <p className="text-gray-600 mb-6">
              Florida law (Chapter 489, Florida Statutes) requires contractors to be licensed for most construction work. Understanding these requirements helps you verify legitimate contractors:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">State Certified Contractors</h3>
                <p className="text-gray-600 mb-3">State certification allows contractors to work anywhere in Florida:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• License numbers begin with "C" (e.g., CBC, CCC, CFC)</li>
                  <li>• Issued by Florida Construction Industry Licensing Board</li>
                  <li>• Requires examination, experience, and financial responsibility</li>
                  <li>• Subject to state-level regulation and discipline</li>
                  <li>• Verify at myfloridalicense.com</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Registered Contractors</h3>
                <p className="text-gray-600 mb-3">Registered contractors have local jurisdiction licenses registered with the state:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• License numbers begin with "R" (e.g., RB, RG)</li>
                  <li>• Can only work in the jurisdiction that issued their local license</li>
                  <li>• Requirements set by local jurisdiction</li>
                  <li>• Must also verify local license status</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">License Categories</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-1 text-gray-600">
                    <li>• <strong>GC/CGC:</strong> General Contractor</li>
                    <li>• <strong>BC/CBC:</strong> Building Contractor</li>
                    <li>• <strong>RC/CRC:</strong> Residential Contractor</li>
                    <li>• <strong>CC/CCC:</strong> Roofing Contractor</li>
                  </ul>
                  <ul className="space-y-1 text-gray-600">
                    <li>• <strong>EC/CEC:</strong> Electrical Contractor</li>
                    <li>• <strong>PC/CPC:</strong> Plumbing Contractor</li>
                    <li>• <strong>MC/CMC:</strong> Mechanical Contractor</li>
                    <li>• <strong>FC/CFC:</strong> Fire Protection Contractor</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              How to Verify a Contractor
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Verify State License</h3>
                  <p className="text-gray-600">Visit myfloridalicense.com and search for the contractor by name, business name, or license number. Confirm the license is active, check for disciplinary actions, and verify the license type covers your project scope.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Check Local Requirements</h3>
                  <p className="text-gray-600">Some jurisdictions require local business licenses or occupational licenses in addition to state contractor licenses. Contact your local building department to verify any additional requirements.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Verify Insurance</h3>
                  <p className="text-gray-600">Request certificates of insurance for general liability and workers' compensation. Call the insurance company to verify coverage is current. Inadequate insurance leaves you exposed to liability for injuries or damage.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Check References and Reviews</h3>
                  <p className="text-gray-600">Ask for references and actually call them. Check online reviews on Google, BBB, and industry sites. Look for patterns—occasional complaints happen, but repeated issues indicate problems.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Get Multiple Estimates</h3>
                  <p className="text-gray-600">Get at least three written estimates for comparison. Be suspicious of prices significantly higher or lower than others. Detailed estimates indicate professional operations.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Florida Consumer Protection Laws
            </h2>

            <p className="text-gray-600 mb-6">
              Florida law provides specific protections for consumers hiring contractors:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Protection</th>
                    <th className="px-6 py-4 text-left">Requirement</th>
                    <th className="px-6 py-4 text-left">Statute Reference</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Written Contracts</td>
                    <td className="px-6 py-4 text-gray-600">Required for projects over $2,500</td>
                    <td className="px-6 py-4 text-gray-600">§489.126, F.S.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Deposit Limits</td>
                    <td className="px-6 py-4 text-gray-600">10% or $1,000 max (whichever is less)</td>
                    <td className="px-6 py-4 text-gray-600">§501.137, F.S.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Lien Notices</td>
                    <td className="px-6 py-4 text-gray-600">Required disclosure in contracts</td>
                    <td className="px-6 py-4 text-gray-600">§713.015, F.S.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Permit Responsibility</td>
                    <td className="px-6 py-4 text-gray-600">Contractor responsible for required permits</td>
                    <td className="px-6 py-4 text-gray-600">§489.105, F.S.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Diversion of Funds</td>
                    <td className="px-6 py-4 text-gray-600">Criminal offense to divert construction funds</td>
                    <td className="px-6 py-4 text-gray-600">§713.35, F.S.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Signs of a Reputable Contractor
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <Shield className="w-10 h-10 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-green-700 mb-3">Professional Indicators</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Valid, active state license</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Physical office location</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Years of established business</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Professional website and materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Positive online reviews and references</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <FileText className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-blue-700 mb-3">Business Practices</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Detailed written contracts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Reasonable deposit terms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Pulls required permits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Carries proper insurance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Responds to questions professionally</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              If You've Been Defrauded
            </h2>

            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <Scale className="w-10 h-10 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-yellow-800 mb-3">Steps to Take</h3>
              <ol className="space-y-3 text-gray-600">
                <li><strong>1. Document everything:</strong> Photos, contracts, communications, payment records</li>
                <li><strong>2. Stop payments:</strong> Don't make additional payments to the contractor</li>
                <li><strong>3. File complaints:</strong>
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>• Florida DBPR: myfloridalicense.com (licensed contractor complaints)</li>
                    <li>• Local building department (unlicensed contracting)</li>
                    <li>• Better Business Bureau: bbb.org</li>
                    <li>• Florida Attorney General: myfloridalegal.com</li>
                  </ul>
                </li>
                <li><strong>4. Contact law enforcement:</strong> For theft or fraud, file a police report</li>
                <li><strong>5. Consult an attorney:</strong> For significant losses, legal action may be warranted</li>
                <li><strong>6. Contact your bank:</strong> If you paid by card, you may be able to dispute charges</li>
              </ol>
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
              <h3 className="text-2xl font-bold mb-4">Work with a Trusted Tampa Contractor</h3>
              <p className="mb-6 text-gray-200">
                Florida Construction Specialists is a licensed, insured, and established contractor serving Tampa Bay for decades. We operate transparently, with proper contracts, permits, and professional practices. Contact us for a free estimate from a contractor you can trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Get Free Estimate
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
      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Our Construction Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Licensed, Insured, Trusted
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists—a reputable contractor you can verify and trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Consultation
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
