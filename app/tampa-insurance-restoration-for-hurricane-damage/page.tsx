import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, FileText, Shield, Clock, DollarSign } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa Insurance Restoration for Hurricane Damage | Commercial Claim Specialists",
  description: "Insurance restoration services for hurricane damage in Tampa. Expert claim documentation, adjuster coordination, and complete commercial property restoration. Maximize your insurance recovery.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa Insurance Restoration for Hurricane Damage", href: "/tampa-insurance-restoration-for-hurricane-damage/" },
];

const faqs = [
  {
    question: "How does insurance restoration differ from regular construction?",
    answer: "Insurance restoration requires extensive documentation throughout the process—detailed damage assessment, Xactimate estimates matching insurance industry standards, photo documentation at every stage, and change order management. We coordinate directly with adjusters, supplement claims when additional damage is discovered, and ensure all work is properly documented for claim payment. This documentation focus doesn't apply to standard construction projects."
  },
  {
    question: "What is the insurance claim timeline for hurricane damage in Florida?",
    answer: "Under Florida Statute 627.70131, insurers must acknowledge your claim within 14 days of receiving notice. They must pay or deny the claim within 90 days of receiving your proof of loss. Many policies require policyholders to file claims within specified timeframes (often 1-2 years). Supplemental claims for additional damage discovered during restoration follow the same timelines from when the additional damage is reported."
  },
  {
    question: "What is a supplemental claim and when is it needed?",
    answer: "A supplemental claim requests additional payment for damage not included in the original claim settlement. This is common when hidden damage is discovered during restoration (water damage behind walls, structural issues under roofing, etc.) or when the original estimate undervalued the damage. We document supplemental damage thoroughly and file supplements with your insurance company to ensure you receive fair payment."
  },
  {
    question: "Should I accept the first offer from my insurance company?",
    answer: "Not necessarily. Initial insurance estimates often miss hidden damage, undervalue materials or labor, or fail to include all required repairs. Having a professional damage assessment before accepting payment helps ensure you understand the true repair cost. Once you accept payment as final settlement, recovering additional funds becomes much more difficult. We recommend professional assessment before signing any release."
  },
  {
    question: "What does 'Replacement Cost' vs 'Actual Cash Value' mean for my claim?",
    answer: "Replacement Cost policies pay to replace damaged property with new materials of like kind and quality, without deducting for depreciation. Actual Cash Value policies deduct depreciation, paying only what the damaged property was worth at the time of loss. Replacement Cost provides significantly better coverage for hurricane damage restoration. Know which type your policy provides before filing claims."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Services" },
  { href: "/property-damage-assessment-for-insurance-claims-in-tampa/", label: "Damage Assessment Services" },
  { href: "/commercial-property-damage-restoration-in-tampa/", label: "Commercial Property Restoration" },
  { href: "/roof-damage-restoration-and-insurance-claims-in-tampa/", label: "Roof Damage Restoration" },
  { href: "/contact/", label: "Schedule Consultation" },
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
            alt="Insurance restoration for hurricane damage in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa Insurance Restoration for Hurricane Damage
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Expert insurance restoration services that maximize your hurricane damage claim. Professional documentation, adjuster coordination, and quality restoration for Tampa Bay commercial properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Start Your Claim
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
              Hurricane damage claims are among the most complex and contentious insurance situations property owners face. Tampa Bay's hurricane exposure means commercial property owners must understand how insurance restoration works—and partner with contractors experienced in navigating the claims process. Florida Construction Specialists provides comprehensive insurance restoration services that protect your interests, maximize your claim recovery, and restore your property to pre-loss condition or better.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Florida Insurance Market Reality</h3>
                  <p className="text-amber-700">Florida's property insurance market is in crisis, with carriers leaving the state, increasing premiums dramatically, or aggressively denying claims. In this environment, proper documentation and experienced representation are more important than ever. Don't face your insurance company alone—professional support protects your interests and maximizes your recovery.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Understanding Commercial Hurricane Insurance Claims
            </h2>
            
            <p className="text-gray-600 mb-6">
              Commercial property hurricane claims involve multiple coverage types, each with its own documentation requirements, limits, and conditions. Understanding these coverages helps ensure you receive full compensation for your loss:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Building Coverage</h3>
                <p className="text-gray-600 mb-3">Covers the physical structure including roof, walls, floors, foundations, permanently installed fixtures, and building systems. Subject to hurricane deductible (typically 2-5% of coverage amount).</p>
                <p className="text-gray-600 text-sm"><strong>Key:</strong> Ensure coverage amount reflects current replacement cost.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <FileText className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Business Personal Property</h3>
                <p className="text-gray-600 mb-3">Covers furniture, equipment, inventory, and other business property inside the building. May have sub-limits for specific categories.</p>
                <p className="text-gray-600 text-sm"><strong>Key:</strong> Maintain current inventory records for claim documentation.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Clock className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Business Income</h3>
                <p className="text-gray-600 mb-3">Covers lost revenue during the period your business cannot operate due to covered property damage. Typically based on historical income records.</p>
                <p className="text-gray-600 text-sm"><strong>Key:</strong> Document all income losses and restoration timeline carefully.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <DollarSign className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Extra Expense</h3>
                <p className="text-gray-600 mb-3">Covers additional costs to continue operations during restoration—temporary facilities, equipment rental, expedited shipping, overtime labor, etc.</p>
                <p className="text-gray-600 text-sm"><strong>Key:</strong> Save receipts for all extra expenses incurred.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Critical Florida Insurance Laws
            </h2>

            <p className="text-gray-600 mb-6">
              Several Florida laws protect policyholders and affect how hurricane claims are handled. Understanding these provisions helps ensure you receive fair treatment:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-800">Code Upgrade Coverage (§627.7011, F.S.)</h4>
                <p className="text-blue-700">Insurers must pay for code-required upgrades when repairing hurricane damage. If current building code requires enhanced construction, your insurance must cover the difference—not just restore to pre-loss condition.</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-800">Claim Timeline Requirements (§627.70131, F.S.)</h4>
                <p className="text-blue-700">Insurers must acknowledge claims within 14 days and pay or deny within 90 days of receiving proof of loss. Failure to meet these timelines may constitute bad faith.</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-800">Appraisal Rights</h4>
                <p className="text-blue-700">Most policies include appraisal provisions allowing disputes over damage amount (not coverage) to be resolved by independent appraisers. This can be faster and less expensive than litigation.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Insurance Restoration Services
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Damage Documentation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Comprehensive damage assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Detailed photo and video documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Xactimate estimates (insurance industry standard)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Moisture mapping and environmental reports</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Claims Support</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Direct coordination with adjusters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Supplemental claim preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Code upgrade documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Dispute resolution support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Restoration Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Emergency mitigation and board-up</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Water extraction and structural drying</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Roof repair and replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Complete interior and exterior restoration</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Project Management</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Single point of contact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Permitting and inspection coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Progress reporting and communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Final documentation for claim closure</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              The Insurance Restoration Process
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Emergency Response</h3>
                  <p className="text-gray-600">Immediate response to secure your property, prevent additional damage, and begin documentation. Emergency services are covered by most policies and should begin as soon as safely possible after the storm.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Comprehensive Assessment</h3>
                  <p className="text-gray-600">Thorough damage assessment documents all hurricane damage—visible and hidden. We prepare detailed documentation and Xactimate estimates that meet insurance industry standards.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Insurance Coordination</h3>
                  <p className="text-gray-600">We work directly with your insurance adjuster, providing documentation, meeting on-site, and ensuring all damage is properly identified and valued. We advocate for fair claim settlement.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Restoration Execution</h3>
                  <p className="text-gray-600">Once claim is approved, we execute the restoration work according to the agreed scope. We document any additional damage discovered and file supplemental claims as needed.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Claim Closure</h3>
                  <p className="text-gray-600">Final documentation confirms work completion and supports claim closure. We provide all records needed for your files and any future reference.</p>
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

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Choose Florida Construction Specialists
            </h2>

            <p className="text-gray-600 mb-6">
              With over 20 years of hurricane restoration experience in Tampa Bay, Florida Construction Specialists has helped thousands of commercial property owners navigate insurance claims and restore their properties. We understand the insurance process, maintain excellent relationships with adjusters, and know how to document claims for maximum recovery.
            </p>

            <p className="text-gray-600 mb-8">
              Our in-house capabilities cover every aspect of hurricane restoration—from emergency response through complete reconstruction. This allows us to control quality, maintain schedules, and provide single-source accountability throughout your project.
            </p>

            <div className="bg-brand-green-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Hurricane Damage? We Can Help.</h3>
              <p className="mb-6 text-gray-200">
                Don't navigate your insurance claim alone. Contact Florida Construction Specialists for expert insurance restoration services that protect your interests and maximize your recovery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Start Your Claim
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
            Tampa Bay Insurance Restoration Specialists
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for expert insurance restoration services throughout Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Restoration Help
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
