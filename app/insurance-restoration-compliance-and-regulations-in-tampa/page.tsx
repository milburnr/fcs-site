import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, Scale, FileText, Shield, Building2 } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Insurance Restoration Compliance & Regulations Tampa | Florida Law Guide",
  description: "Navigate insurance restoration compliance and regulations in Tampa. Florida statutes, building codes, permit requirements, and contractor licensing for commercial property restoration.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Insurance Restoration Compliance and Regulations in Tampa", href: "/insurance-restoration-compliance-and-regulations-in-tampa/" },
];

const faqs = [
  {
    question: "What permits are required for insurance restoration in Tampa?",
    answer: "Permit requirements depend on the scope of work. Generally required: building permits for structural repairs, electrical permits for electrical work, plumbing permits for plumbing modifications, mechanical permits for HVAC work, and roofing permits for roof repairs or replacement. The City of Tampa and Hillsborough County have specific requirements—check with the local building department. Emergency repairs to stop ongoing damage may be performed without permits, but follow-up permits are typically required. Insurance claims can include permit fees as recoverable costs."
  },
  {
    question: "What contractor licenses are required for insurance restoration in Florida?",
    answer: "Florida requires specific licenses for construction work. General contractors must hold a CGC license from DBPR for projects over $2,500. Specialty contractors (electrical, plumbing, HVAC, roofing) need their respective state licenses. Verify any contractor's license at DBPR.state.fl.us. Additionally, contractors must carry workers' compensation insurance (or be exempt) and general liability insurance. Using unlicensed contractors can void your insurance coverage and create liability issues."
  },
  {
    question: "What does Florida Statute 627.7011 require for code upgrade coverage?",
    answer: "Florida Statute 627.7011 (Law and Ordinance Coverage) requires residential property insurers to provide coverage for code-required upgrades when repairing hurricane damage. While this statute specifically applies to residential policies, most commercial policies also include some form of ordinance or law coverage. This coverage pays for the increased cost of complying with current building codes when repairing older structures. Ensure your policy includes adequate law and ordinance limits—standard coverage may be insufficient for older buildings requiring significant upgrades."
  },
  {
    question: "How do Florida Building Code requirements affect restoration costs?",
    answer: "The Florida Building Code (FBC) is updated every three years and often requires enhanced construction methods. When restoring damaged property, you generally must bring repaired elements up to current code—even if the original construction predates current requirements. This can significantly increase costs for: wind mitigation features, impact-resistant windows, enhanced roof attachments, electrical upgrades, accessibility compliance, and energy efficiency requirements. Insurance policies with adequate law and ordinance coverage help address these increased costs."
  },
  {
    question: "What are my rights under Florida insurance claim handling regulations?",
    answer: "Florida Statute Chapter 626 and 627 provide significant protections for policyholders. Key rights include: insurers must acknowledge claims within 14 days, claims must be paid or denied within 90 days, insurers must provide written explanations for partial or full denials, you have the right to appraisal for amount disputes, mediation is available through DFS, attorneys' fees may be recoverable if you prevail in litigation, and insurers must act in good faith. The Florida Department of Financial Services handles complaints about insurer conduct."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/tampas-building-codes-for-insurance-restoration/", label: "Tampa Building Codes" },
  { href: "/understanding-tampa-insurance-restoration-claims/", label: "Understanding Insurance Claims" },
  { href: "/property-damage-assessment-for-insurance-claims-in-tampa/", label: "Property Damage Assessment" },
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
            alt="Insurance restoration compliance and regulations in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Insurance Restoration Compliance and Regulations in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Navigate the complex regulatory landscape of insurance restoration in Tampa Bay. Understanding Florida statutes, building codes, and compliance requirements protects your interests and ensures successful project completion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Compliance Guidance
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
              Insurance restoration in Tampa Bay involves navigating multiple regulatory frameworks: Florida insurance statutes, the Florida Building Code, local permitting requirements, contractor licensing laws, and industry-specific regulations. Non-compliance can jeopardize your insurance claim, create liability exposure, and result in restoration work that doesn't meet legal requirements. Florida Construction Specialists ensures every restoration project meets all applicable regulations while maximizing your insurance recovery.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Compliance Protects Your Claim</h3>
                  <p className="text-amber-700">Insurance policies require compliance with laws and regulations. Using unlicensed contractors, performing work without permits, or failing to meet building codes can give insurers grounds to deny or reduce claims. Additionally, non-compliant work may need to be redone at your expense. Working with experienced, licensed contractors protects both your property and your insurance recovery.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Florida Insurance Regulations
            </h2>
            
            <p className="text-gray-600 mb-6">
              Florida has extensive regulations governing insurance claims, designed to protect policyholders while establishing clear procedures for claim handling. Understanding these regulations helps you hold insurers accountable and protect your rights throughout the restoration process.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Scale className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Claim Handling Statutes</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>F.S. 627.70131 - Claim timelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>F.S. 627.70132 - Filing deadlines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>F.S. 627.7011 - Code upgrade coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>F.S. 627.702 - Valued policy law</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <FileText className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Policyholder Protections</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Right to appraisal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>DFS mediation available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Bad faith remedies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Written denial requirements</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Key Florida Statutes for Insurance Restoration
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Statute</th>
                    <th className="px-6 py-4 text-left">Subject</th>
                    <th className="px-6 py-4 text-left">Key Requirements</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">627.70131</td>
                    <td className="px-6 py-4">Claims Administration</td>
                    <td className="px-6 py-4 text-gray-600">14-day acknowledgment, 90-day decision</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">627.70132</td>
                    <td className="px-6 py-4">Notice Requirements</td>
                    <td className="px-6 py-4 text-gray-600">2-year claim filing deadline</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">627.7011</td>
                    <td className="px-6 py-4">Law & Ordinance</td>
                    <td className="px-6 py-4 text-gray-600">Code upgrade coverage requirements</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">627.702</td>
                    <td className="px-6 py-4">Valued Policy</td>
                    <td className="px-6 py-4 text-gray-600">Full limits for total losses</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">626.854</td>
                    <td className="px-6 py-4">Public Adjusters</td>
                    <td className="px-6 py-4 text-gray-600">Licensing, fee limits, conduct</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">489.105-129</td>
                    <td className="px-6 py-4">Contractor Licensing</td>
                    <td className="px-6 py-4 text-gray-600">License requirements, penalties</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Florida Building Code Requirements
            </h2>

            <p className="text-gray-600 mb-6">
              The Florida Building Code (FBC) establishes construction standards throughout the state, with enhanced requirements for the High-Velocity Hurricane Zone (HVHZ) in South Florida. Tampa Bay falls under standard FBC requirements but still faces stringent wind and flood provisions.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Wind Resistance</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Wind speed design requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Roof-to-wall connections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Impact-resistant openings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Secondary water resistance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Building2 className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Flood Prevention</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Base flood elevation compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Flood-resistant materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Mechanical system elevation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Floodplain management</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Contractor Licensing Requirements
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Work Type</th>
                    <th className="px-6 py-4 text-left">Required License</th>
                    <th className="px-6 py-4 text-left">Verification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">General Construction</td>
                    <td className="px-6 py-4">CGC (Certified General)</td>
                    <td className="px-6 py-4 text-gray-600">DBPR.state.fl.us</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Electrical</td>
                    <td className="px-6 py-4">EC (Electrical Contractor)</td>
                    <td className="px-6 py-4 text-gray-600">DBPR.state.fl.us</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Plumbing</td>
                    <td className="px-6 py-4">CFC (Plumbing Contractor)</td>
                    <td className="px-6 py-4 text-gray-600">DBPR.state.fl.us</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">HVAC</td>
                    <td className="px-6 py-4">CMC/CAC (Mechanical/AC)</td>
                    <td className="px-6 py-4 text-gray-600">DBPR.state.fl.us</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Roofing</td>
                    <td className="px-6 py-4">CCC (Roofing Contractor)</td>
                    <td className="px-6 py-4 text-gray-600">DBPR.state.fl.us</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Mold Remediation</td>
                    <td className="px-6 py-4">MRSR (Mold Remediator)</td>
                    <td className="px-6 py-4 text-gray-600">DBPR.state.fl.us</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Permitting Process for Restoration Work
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Determine Permit Requirements</h3>
                  <p className="text-gray-600">Review scope of work against local permit requirements. Most structural, electrical, plumbing, mechanical, and roofing work requires permits. Emergency repairs to prevent further damage may proceed without permits, with follow-up permits obtained after.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Prepare Applications</h3>
                  <p className="text-gray-600">Gather required documentation: scope of work descriptions, plans if required, contractor license information, and applicable fees. Tampa's online permitting system allows electronic submission for many permit types.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Obtain Permits</h3>
                  <p className="text-gray-600">Submit applications and await approval. Simple permits may be approved same-day; complex projects requiring plan review take longer. Emergency/disaster permits often have expedited processing.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Schedule Inspections</h3>
                  <p className="text-gray-600">Request inspections at required stages: rough-in inspections for framing, electrical, plumbing, and mechanical; final inspections for completed work. Passing inspections documents code compliance.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Close Permits</h3>
                  <p className="text-gray-600">After final inspection approval, permits are closed. Closed permits document that work was completed per code—important for insurance purposes and future property transactions.</p>
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
              <h3 className="text-2xl font-bold mb-4">Compliant Restoration for Your Property</h3>
              <p className="mb-6 text-gray-200">
                Florida Construction Specialists ensures all restoration work meets Florida statutes, building codes, and permitting requirements. Our licensed team protects your insurance claim while delivering code-compliant restoration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Get Compliance Help
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
            Code-Compliant Insurance Restoration
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for fully compliant restoration services throughout Tampa Bay.
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
