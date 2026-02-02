import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, AlertTriangle, Shield, Users, FileText, Scale } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "VIP Public Adjuster Services Tampa | Commercial Insurance Claim Advocacy",
  description: "Expert VIP public adjuster services for Tampa Bay commercial properties. Maximize insurance claim settlements with professional advocacy, documentation, and negotiation support.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "VIP Public Adjuster", href: "/vip-public-adjuster/" },
];

const faqs = [
  {
    question: "What is a public adjuster and how do they differ from insurance company adjusters?",
    answer: "A public adjuster is a licensed professional who works exclusively for policyholders—not insurance companies—to evaluate, document, and negotiate property damage claims. Unlike company adjusters who represent the insurer's interests, public adjusters advocate for maximum claim recovery. Under Florida Statute 626.854, public adjusters must be licensed by the Department of Financial Services and operate under strict ethical guidelines. They typically charge a percentage of the claim settlement (capped at 10% for non-emergency claims and 20% for emergency claims in Florida), but often recover significantly more than policyholders would on their own."
  },
  {
    question: "When should I hire a public adjuster for my commercial property claim?",
    answer: "Consider hiring a public adjuster immediately after significant property damage, especially for claims exceeding $50,000, complex commercial losses involving multiple coverage types, claims your insurer has undervalued or denied, situations where you lack time or expertise to manage the claim process, or any loss involving business interruption coverage. The earlier a public adjuster is involved, the better they can document the damage and establish the claim foundation. Florida law allows you to hire a public adjuster at any point in the claims process."
  },
  {
    question: "How much more can a public adjuster recover compared to handling the claim myself?",
    answer: "Studies by the Office of Program Policy Analysis and Government Accountability (OPPAGA) found that policyholders using public adjusters receive claim settlements averaging 574% higher than those who self-represent. For commercial claims, this difference can be even more pronounced due to the complexity of business interruption calculations, code upgrade requirements, and multi-system damage assessment. Even after the adjuster's fee, most policyholders net significantly more than they would have received alone."
  },
  {
    question: "What should I look for when selecting a VIP public adjuster?",
    answer: "Look for a public adjuster with active Florida licensure (verify at MyFloridaCFO.com), experience with commercial properties similar to yours, strong references from Tampa Bay businesses, transparent fee structures compliant with Florida law, professional designations like Senior Professional Public Adjuster (SPPA), adequate errors and omissions insurance, and a track record of successful claim negotiations. Avoid adjusters who guarantee specific outcomes or pressure you to sign contracts immediately after a disaster."
  },
  {
    question: "Can I use both a public adjuster and a restoration contractor like Florida Construction Specialists?",
    answer: "Yes, and this combination often produces the best outcomes. While public adjusters focus on claim documentation and negotiation, restoration contractors provide essential damage assessment expertise, repair cost estimates, and restoration services. Florida Construction Specialists works collaboratively with public adjusters, providing detailed Xactimate estimates, engineer reports, and technical documentation that supports maximum claim recovery. We can recommend trusted public adjusters or work with an adjuster you've already retained."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/property-damage-assessment-for-insurance-claims-in-tampa/", label: "Property Damage Assessment" },
  { href: "/maximize-insurance-payouts-for-restoration-in-tampa/", label: "Maximize Insurance Payouts" },
  { href: "/understanding-tampa-insurance-restoration-claims/", label: "Understanding Insurance Claims" },
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
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="VIP Public Adjuster services in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            VIP Public Adjuster Services for Tampa Bay Commercial Properties
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Maximize your commercial insurance claim with expert public adjuster services. Professional advocacy, comprehensive documentation, and skilled negotiation to ensure you receive every dollar your policy entitles you to.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Expert Claim Help
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
              When disaster strikes your Tampa Bay commercial property, the insurance claim process can be overwhelming. Public adjusters serve as your professional advocates, working exclusively on your behalf to document damage, calculate losses, and negotiate with insurance companies. Unlike insurance company adjusters whose loyalty lies with the carrier, public adjusters are legally and ethically bound to maximize your claim recovery under Florida law.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Florida Public Adjuster Regulations</h3>
                  <p className="text-amber-700">Florida Statute Chapter 626, Part VI regulates public adjusters and protects policyholders. Public adjusters must be licensed, maintain surety bonds, carry errors and omissions insurance, and comply with fee caps. During a state of emergency, adjusters are prohibited from soliciting business for 48 hours. Verify any adjuster's license at MyFloridaCFO.com before signing any contract.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              What VIP Public Adjusters Do for Commercial Property Owners
            </h2>
            
            <p className="text-gray-600 mb-6">
              Public adjusters handle every aspect of your insurance claim from initial damage assessment through final settlement. For commercial properties, this includes evaluating building damage, calculating business interruption losses, documenting extra expenses, assessing contents and equipment damage, and identifying all applicable coverage under your policy. Their expertise often uncovers coverage and damage items that policyholders—and even insurance company adjusters—overlook.
            </p>

            <p className="text-gray-600 mb-6">
              The commercial insurance claim process involves complex calculations and extensive documentation. Business interruption claims alone require analysis of historical financial records, projection of lost income, identification of continuing expenses, and documentation of extra expenses incurred to maintain operations. Public adjusters have the expertise to present these losses in formats insurance companies must acknowledge, supported by documentation that meets the burden of proof requirements.
            </p>

            <p className="text-gray-600 mb-8">
              Tampa Bay's exposure to hurricanes, flooding, and severe storms creates unique challenges for commercial property owners. Public adjusters familiar with Florida's insurance landscape understand how carriers respond to storm claims, know the typical coverage disputes that arise, and can anticipate and address adjuster objections before they become claim obstacles.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              VIP Public Adjuster Services for Commercial Claims
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Claim Strategy & Advocacy</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Policy review and coverage analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Claim filing and documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Insurance company communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Settlement negotiation expertise</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <FileText className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Damage Documentation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Comprehensive property inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Photo and video documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Expert report coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Contents inventory preparation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Scale className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Loss Calculation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Building damage valuation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Business interruption analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Extra expense documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Code upgrade cost identification</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Users className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Dispute Resolution</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Appraisal process management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Mediation support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Supplemental claim filing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Denial appeal assistance</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Florida Public Adjuster Fee Regulations
            </h2>

            <p className="text-gray-600 mb-6">
              Florida law caps public adjuster fees to protect consumers. Understanding these regulations helps you make informed decisions about hiring a public adjuster and ensures you're working with a compliant professional.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Claim Circumstance</th>
                    <th className="px-6 py-4 text-left">Maximum Fee</th>
                    <th className="px-6 py-4 text-left">Florida Statute Reference</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Standard property claims</td>
                    <td className="px-6 py-4">10% of settlement</td>
                    <td className="px-6 py-4 text-gray-600">F.S. 626.854(11)(b)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">State of emergency (first year)</td>
                    <td className="px-6 py-4">10% of settlement</td>
                    <td className="px-6 py-4 text-gray-600">F.S. 626.854(11)(a)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Emergency claims (non-residential)</td>
                    <td className="px-6 py-4">20% of settlement</td>
                    <td className="px-6 py-4 text-gray-600">F.S. 626.854(11)(b)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Reopened/supplemental claims</td>
                    <td className="px-6 py-4">Negotiable (typically 10-15%)</td>
                    <td className="px-6 py-4 text-gray-600">Contract terms apply</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Commercial Claims Require Expert Representation
            </h2>

            <p className="text-gray-600 mb-6">
              Commercial property claims differ fundamentally from residential claims in complexity, documentation requirements, and settlement calculations. A typical commercial claim may involve multiple coverage forms—building coverage, business personal property, business income, extra expense, tenant improvements, and various endorsements—each with specific requirements for documentation and proof of loss.
            </p>

            <p className="text-gray-600 mb-6">
              Business interruption claims are particularly complex. Insurance companies often dispute the period of restoration, challenge projections of lost income, question which expenses are truly "continuing," and scrutinize extra expense claims. Public adjusters with commercial expertise understand how to document and present these losses effectively, using forensic accounting principles and industry-standard methodologies that insurance companies must take seriously.
            </p>

            <p className="text-gray-600 mb-8">
              Tampa Bay commercial properties face specific risks—hurricane exposure, flood vulnerability, aging building stock—that create unique claim challenges. Public adjusters familiar with the local market understand these issues and know how to address common carrier objections before they derail your claim.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              How Florida Construction Specialists Works with Public Adjusters
            </h2>

            <p className="text-gray-600 mb-6">
              As Tampa Bay's leading commercial restoration contractor, Florida Construction Specialists regularly collaborates with public adjusters to support successful claim outcomes. Our role complements the public adjuster's work by providing technical expertise, detailed damage assessment, and accurate repair cost estimates.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Our Support Services for Public Adjusters</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Detailed Xactimate damage estimates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Structural engineer reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Moisture and mold assessments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Code compliance analysis</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Scope of repair documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Expert witness testimony</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Emergency mitigation services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Full restoration execution</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Signs You Need a Public Adjuster
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-800 mb-2">Claim Warning Signs</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Insurer's estimate seems too low</li>
                  <li>• Adjuster missed obvious damage</li>
                  <li>• Claim has been delayed without explanation</li>
                  <li>• Coverage is being disputed</li>
                  <li>• You received a partial denial</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">Complex Claim Situations</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Multiple types of damage present</li>
                  <li>• Business interruption is involved</li>
                  <li>• Claim exceeds $50,000</li>
                  <li>• Code upgrades may be required</li>
                  <li>• Previous claims on the property</li>
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
              <h3 className="text-2xl font-bold mb-4">Need Help with Your Commercial Insurance Claim?</h3>
              <p className="mb-6 text-gray-200">
                Whether you need a public adjuster referral or expert damage assessment to support your claim, Florida Construction Specialists is here to help Tampa Bay commercial property owners navigate the insurance restoration process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Get Claim Assistance
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
            title="Related Insurance Claim Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Maximize Your Insurance Claim Recovery
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for expert damage assessment and restoration services that support successful insurance claims.
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
