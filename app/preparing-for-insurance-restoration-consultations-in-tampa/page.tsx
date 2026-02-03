import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, FileText, Camera, ClipboardCheck, MessageSquare } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Insurance Restoration Consultations Tampa | Guide",
  description: "How to prepare for insurance restoration consultations in Tampa. Checklist of documents, questions to ask, and what to expect from professional restoration contractors.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Preparing for Insurance Restoration Consultations in Tampa", href: "/preparing-for-insurance-restoration-consultations-in-tampa/" },
];

const faqs = [
  {
    question: "What documents should I bring to an insurance restoration consultation?",
    answer: "Bring: your insurance policy declarations page and any relevant endorsements, claim number and adjuster contact information, any correspondence from your insurance company, photos and videos of the damage (before and after cleanup), any estimates you've received from other contractors, your lease agreement (if you're a tenant), building plans or previous renovation documents if available, a list of damaged items for contents claims, and recent financial statements if business interruption is involved. Having these documents ready enables a more productive consultation."
  },
  {
    question: "What questions should I ask a restoration contractor during the consultation?",
    answer: "Key questions include: Are you licensed and insured in Florida? (Verify at DBPR.state.fl.us), What experience do you have with commercial insurance restoration? Can you provide references from similar projects? How do you work with insurance companies and adjusters? What's your process for documenting damage and supporting claims? How do you handle change orders when additional damage is discovered? What's your estimated timeline for a project like mine? Do you provide Xactimate estimates? What warranties do you offer on restoration work?"
  },
  {
    question: "How long does a typical consultation take?",
    answer: "Initial consultations for commercial properties typically take 1-3 hours depending on property size and damage complexity. This includes: walking the property to assess damage (30-60 minutes), reviewing your insurance documents and claim status (15-30 minutes), discussing scope, timeline, and process (30-45 minutes), and answering your questions (15-30 minutes). For larger or more complex properties, initial consultation may be followed by a more detailed assessment visit."
  },
  {
    question: "Should I get multiple consultations before choosing a contractor?",
    answer: "Yes, getting 2-3 consultations is recommended for significant restoration projects. However, balance thoroughness with urgency—delays in starting restoration can increase damage and business interruption. When comparing contractors, look beyond price at: experience with your property type, insurance claim expertise, proposed timeline, communication style, and references. The lowest bid isn't always the best value if it means inadequate scope or poor claim support."
  },
  {
    question: "What red flags should I watch for during restoration consultations?",
    answer: "Warning signs include: pressure to sign contracts immediately (especially right after a disaster), requests for large upfront payments, unwillingness to provide license numbers or references, inability to explain their insurance claim process, vague or verbal-only estimates, promises that seem too good to be true, contractors who want you to sign over insurance benefits (note: AOB is now restricted in Florida), and companies that can't show proof of insurance. Legitimate contractors welcome your due diligence."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/property-damage-assessment-for-insurance-claims-in-tampa/", label: "Property Damage Assessment" },
  { href: "/tampas-insurance-restoration-reporting-and-documentation/", label: "Documentation Services" },
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
            src="/images/hurricane-ian/hurricane-ian-display.webp"
            alt="Preparing for insurance restoration consultations in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Preparing for Insurance Restoration Consultations in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Make the most of your restoration consultation with proper preparation. Learn what documents to gather, questions to ask, and how to evaluate contractors for your Tampa Bay commercial property restoration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Schedule Your Consultation
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
              A well-prepared consultation leads to better outcomes for your insurance restoration project. When you come to a consultation with the right documents, knowledge, and questions, you can make informed decisions about your Tampa Bay commercial property restoration. This guide helps you prepare for productive consultations that set the foundation for successful insurance claim recovery and quality restoration work.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Time-Sensitive: Act Promptly After Damage</h3>
                  <p className="text-amber-700">While preparation is important, don't delay consultations unnecessarily. Florida Statute 627.70131 requires prompt notification of claims, and damage can worsen over time. If you've experienced significant damage, schedule consultations within days—not weeks. Emergency mitigation should begin immediately, with restoration planning following soon after.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Pre-Consultation Preparation Checklist
            </h2>
            
            <p className="text-gray-600 mb-6">
              Being organized before your consultation saves time and enables the contractor to provide more accurate assessments and recommendations. Use this checklist to gather what you'll need.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <FileText className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Insurance Documents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Policy declarations page</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Claim number and filing date</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Adjuster name and contact info</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Any insurer correspondence</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Camera className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Damage Documentation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Photos/videos of damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Date and time damage occurred</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Cause of damage if known</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Emergency repairs already made</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <ClipboardCheck className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Property Information</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Building age and construction type</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Square footage affected</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Lease agreement (if tenant)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Building plans if available</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <MessageSquare className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Business Information</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Business operations impacted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Timeline constraints</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Special requirements or regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Key decision-makers</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Questions to Ask During Your Consultation
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Category</th>
                    <th className="px-6 py-4 text-left">Questions to Ask</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Qualifications</td>
                    <td className="px-6 py-4 text-gray-600">License number? Insurance coverage? Commercial restoration experience? References?</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Insurance Support</td>
                    <td className="px-6 py-4 text-gray-600">How do you work with adjusters? Do you prepare Xactimate estimates? Experience with supplemental claims?</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Process</td>
                    <td className="px-6 py-4 text-gray-600">What's your typical process? How do you handle hidden damage? Change order procedures?</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Timeline</td>
                    <td className="px-6 py-4 text-gray-600">Estimated duration? What affects the schedule? How do you handle delays?</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Communication</td>
                    <td className="px-6 py-4 text-gray-600">Who's my point of contact? Update frequency? How are issues escalated?</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Warranties</td>
                    <td className="px-6 py-4 text-gray-600">What warranties do you provide? Duration? What's covered vs. excluded?</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              What to Expect During the Consultation
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Property Walkthrough</h3>
                  <p className="text-gray-600">The contractor will want to see all damaged areas firsthand. Point out everything you've noticed, even if it seems minor. Good contractors ask questions and take notes—be wary of those who seem rushed or dismissive.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Document Review</h3>
                  <p className="text-gray-600">The contractor should review your insurance documents to understand your coverage and claim status. They may ask about deductibles, coverage limits, and any adjuster communications to date.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Preliminary Assessment</h3>
                  <p className="text-gray-600">Based on the walkthrough, expect a preliminary assessment of damage scope, likely restoration approach, and rough timeline. Detailed estimates typically come later after thorough evaluation.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Process Explanation</h3>
                  <p className="text-gray-600">A good contractor explains their process: how they'll document damage, work with your insurance company, manage the project, handle issues that arise, and ensure quality. Clear communication about process builds confidence.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Next Steps Discussion</h3>
                  <p className="text-gray-600">Before leaving, establish clear next steps: when you'll receive a detailed estimate, what additional information is needed, and how to proceed if you decide to move forward. Get everything in writing.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Red Flags vs. Green Flags
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-800 mb-2">Warning Signs</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Pressure to sign immediately</li>
                  <li>• Large upfront payment demands</li>
                  <li>• Won't provide license/insurance info</li>
                  <li>• Vague about process or pricing</li>
                  <li>• No references or portfolio</li>
                  <li>• Guarantees specific insurance outcomes</li>
                  <li>• Suggests inflating the claim</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">Positive Signs</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Thorough inspection and questions</li>
                  <li>• Clear explanation of process</li>
                  <li>• Readily provides credentials</li>
                  <li>• Detailed written estimates</li>
                  <li>• Strong references available</li>
                  <li>• Explains insurance process honestly</li>
                  <li>• Professional communication</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Evaluating and Comparing Contractors
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Evaluation Factor</th>
                    <th className="px-6 py-4 text-left">What to Look For</th>
                    <th className="px-6 py-4 text-left">Weight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Experience</td>
                    <td className="px-6 py-4 text-gray-600">Years in business, similar project experience</td>
                    <td className="px-6 py-4">High</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Insurance Expertise</td>
                    <td className="px-6 py-4 text-gray-600">Claim support track record, Xactimate capability</td>
                    <td className="px-6 py-4">High</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">References</td>
                    <td className="px-6 py-4 text-gray-600">Quality and relevance of references provided</td>
                    <td className="px-6 py-4">High</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Communication</td>
                    <td className="px-6 py-4 text-gray-600">Responsiveness, clarity, professionalism</td>
                    <td className="px-6 py-4">Medium</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Price</td>
                    <td className="px-6 py-4 text-gray-600">Competitiveness (but not lowest priority)</td>
                    <td className="px-6 py-4">Medium</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Timeline</td>
                    <td className="px-6 py-4 text-gray-600">Realistic schedule that meets your needs</td>
                    <td className="px-6 py-4">Medium</td>
                  </tr>
                </tbody>
              </table>
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
              <h3 className="text-2xl font-bold mb-4">Ready for Your Consultation?</h3>
              <p className="mb-6 text-gray-200">
                Florida Construction Specialists provides thorough, professional consultations for commercial insurance restoration throughout Tampa Bay. We'll assess your damage, explain our process, and provide clear recommendations—with no pressure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Schedule Consultation
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
            Schedule Your Free Consultation
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a professional consultation about your commercial restoration project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Started Today
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
