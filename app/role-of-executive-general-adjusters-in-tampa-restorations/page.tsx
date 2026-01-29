import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, Users, FileText, Scale, Shield } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Executive General Adjusters in Tampa Restorations | Large Loss Claim Management",
  description: "Understanding the role of Executive General Adjusters (EGAs) in Tampa commercial property restorations. How EGAs manage large loss claims and coordinate complex insurance recoveries.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Role of Executive General Adjusters in Tampa Restorations", href: "/role-of-executive-general-adjusters-in-tampa-restorations/" },
];

const faqs = [
  {
    question: "What is an Executive General Adjuster (EGA)?",
    answer: "An Executive General Adjuster is a senior insurance professional who manages large, complex property damage claims on behalf of insurance companies. EGAs typically handle claims exceeding $500,000 or those involving multiple coverage issues, business interruption, or catastrophic events. They have authority to make claim decisions, negotiate settlements, and coordinate multiple adjusters and experts. In Tampa Bay commercial losses, EGAs often become involved in major hurricane claims, large fire losses, or complex multi-party situations."
  },
  {
    question: "How does an EGA differ from a regular insurance adjuster?",
    answer: "Regular field adjusters handle routine claims within defined limits and follow standard procedures. EGAs handle exceptional claims requiring senior judgment and broader authority. Key differences include: EGAs manage claims with higher dollar values and complexity, they have greater settlement authority, they coordinate multiple experts and stakeholders, they often work directly with policyholders and their representatives, and they can make decisions on coverage questions that field adjusters cannot. EGAs are typically assigned to your claim if it exceeds certain thresholds or involves unusual circumstances."
  },
  {
    question: "When will an EGA be assigned to my Tampa commercial claim?",
    answer: "Insurance companies typically assign EGAs when: claim value is expected to exceed $500,000-$1,000,000, the loss involves complex coverage issues, business interruption claims are significant, multiple parties (landlord, tenant, subcontractors) are involved, the claim results from a catastrophic event affecting multiple properties, litigation is anticipated or underway, or the claim involves specialized property types like data centers or manufacturing. If you have a large commercial loss in Tampa Bay, expect an EGA to be involved."
  },
  {
    question: "How should I work with an EGA on my claim?",
    answer: "Working effectively with an EGA requires: understanding they represent the insurance company's interests (not yours), providing complete and organized documentation, being responsive to information requests, having your own experts (public adjuster, contractor, attorney) as appropriate, communicating in writing to create records, being professional and factual in all interactions, and understanding that EGAs have significant authority but also answer to supervisors. Professional representation on your side helps ensure productive negotiations."
  },
  {
    question: "Can I request a different EGA if I'm unhappy with how my claim is being handled?",
    answer: "Yes, you can request a change in claim handler, though insurers aren't obligated to comply. If you believe your EGA is handling your claim improperly, options include: escalating to the EGA's supervisor or the insurance company's claims manager, documenting specific concerns in writing, filing a complaint with the Florida Department of Financial Services, invoking appraisal or mediation provisions in your policy, or consulting with an attorney about your options. Before requesting a change, document specific issues—personality conflicts alone rarely justify reassignment."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/vip-public-adjuster/", label: "Public Adjuster Services" },
  { href: "/property-damage-assessment-for-insurance-claims-in-tampa/", label: "Property Damage Assessment" },
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
            src="/images/hurricane-ian/hurricane-ian-large.webp"
            alt="Executive General Adjusters in Tampa restorations"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Role of Executive General Adjusters in Tampa Restorations
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Understanding how Executive General Adjusters manage large commercial property claims in Tampa Bay. Learn what to expect and how to work effectively with EGAs for optimal claim outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Large Loss Support
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
              When your Tampa Bay commercial property suffers significant damage, your insurance claim may be assigned to an Executive General Adjuster (EGA). These senior insurance professionals handle the most complex and valuable claims, bringing both substantial authority and expertise to the process. Understanding the EGA's role, responsibilities, and how to work effectively with them can significantly impact your claim outcome.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Important: EGAs Work for the Insurance Company</h3>
                  <p className="text-amber-700">While EGAs may be professional and fair, they represent the insurance company's interests—not yours. For large commercial claims in Tampa Bay, strongly consider having your own representation: a public adjuster, experienced restoration contractor, and/or insurance attorney. This ensures someone is advocating specifically for your interests throughout the claim process.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              What Executive General Adjusters Do
            </h2>
            
            <p className="text-gray-600 mb-6">
              Executive General Adjusters serve as the insurance company's senior claim managers for complex losses. They coordinate all aspects of the claim, make coverage determinations, negotiate settlements, and serve as the primary decision-maker on behalf of the insurer. Understanding their responsibilities helps you navigate the claim process more effectively.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Users className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Claim Coordination</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Manage multiple adjusters and experts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Coordinate forensic accountants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Engage engineers and specialists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Oversee cause and origin investigations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <FileText className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Coverage Decisions</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Interpret policy language</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Determine covered vs. excluded damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Apply sublimits and deductibles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Issue coverage positions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Scale className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Settlement Authority</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Negotiate final settlements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Approve payment amounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Manage partial payments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Resolve disputes before litigation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Stakeholder Management</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Work with policyholders directly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Interface with public adjusters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Communicate with attorneys</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Report to insurance company management</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              When EGAs Are Assigned to Tampa Bay Claims
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Trigger</th>
                    <th className="px-6 py-4 text-left">Threshold</th>
                    <th className="px-6 py-4 text-left">Typical Situations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Claim Value</td>
                    <td className="px-6 py-4">$500K - $1M+</td>
                    <td className="px-6 py-4 text-gray-600">Major building damage, multi-unit properties</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Business Interruption</td>
                    <td className="px-6 py-4">$250K+</td>
                    <td className="px-6 py-4 text-gray-600">Extended closure, high-revenue businesses</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Coverage Complexity</td>
                    <td className="px-6 py-4">Multiple issues</td>
                    <td className="px-6 py-4 text-gray-600">Disputed coverage, multi-party interests</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Catastrophe Events</td>
                    <td className="px-6 py-4">CAT designation</td>
                    <td className="px-6 py-4 text-gray-600">Hurricanes, widespread storm damage</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Litigation Risk</td>
                    <td className="px-6 py-4">Anticipated</td>
                    <td className="px-6 py-4 text-gray-600">Contentious claims, attorney involvement</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Working Effectively with an EGA
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Assemble Your Team</h3>
                  <p className="text-gray-600">For large claims managed by an EGA, consider engaging a public adjuster, experienced restoration contractor, and/or insurance attorney. The EGA will have a team of experts—you should too. Professional representation levels the playing field.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Document Everything</h3>
                  <p className="text-gray-600">Maintain written records of all communications, requests, and decisions. Follow up phone conversations with email summaries. This creates a record that protects your interests and helps resolve disputes.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Be Responsive and Organized</h3>
                  <p className="text-gray-600">EGAs appreciate policyholders who respond promptly to information requests and provide well-organized documentation. Delays on your end can slow the entire claim. Being professional and prepared facilitates better outcomes.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Understand the Process</h3>
                  <p className="text-gray-600">Large claims take time. The EGA must coordinate multiple parties, review extensive documentation, and make significant financial decisions. Reasonable patience combined with consistent follow-up typically produces better results than confrontation.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Know Your Rights</h3>
                  <p className="text-gray-600">Florida law provides specific protections for policyholders. EGAs must comply with claim handling statutes, respond within required timeframes, and act in good faith. If you believe your claim is being handled improperly, you have remedies available.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              How Restoration Contractors Support EGA-Managed Claims
            </h2>

            <p className="text-gray-600 mb-6">
              Experienced restoration contractors like Florida Construction Specialists play a crucial role in EGA-managed claims. We provide the technical documentation and expertise that supports fair claim resolution while maintaining professional relationships with insurance representatives.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-2">Technical Support</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Detailed damage documentation</li>
                  <li>• Xactimate estimates</li>
                  <li>• Engineer coordination</li>
                  <li>• Scope clarification and support</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">Claim Facilitation</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Supplement claim preparation</li>
                  <li>• Joint inspection attendance</li>
                  <li>• Professional advocacy</li>
                  <li>• Dispute documentation</li>
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
              <h3 className="text-2xl font-bold mb-4">Large Commercial Loss? We Can Help.</h3>
              <p className="mb-6 text-gray-200">
                Florida Construction Specialists has extensive experience supporting large commercial claims managed by Executive General Adjusters. We provide the professional documentation and expert support needed to navigate complex insurance recoveries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Discuss Your Claim
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
            Expert Support for Large Loss Claims
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for professional support on EGA-managed claims throughout Tampa Bay.
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
