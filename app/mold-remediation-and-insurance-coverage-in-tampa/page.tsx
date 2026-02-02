import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, AlertTriangle, Bug, Shield, FileText, Droplets } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Mold Remediation and Insurance Coverage Tampa | Commercial Property Guide",
  description: "Expert mold remediation services in Tampa with insurance claim guidance. Understanding Florida mold coverage, remediation requirements, and claim documentation for commercial properties.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Mold Remediation and Insurance Coverage in Tampa", href: "/mold-remediation-and-insurance-coverage-in-tampa/" },
];

const faqs = [
  {
    question: "Does insurance cover mold remediation in Florida?",
    answer: "Mold coverage in Florida is complex and varies by policy. Standard commercial property policies typically exclude mold unless it results directly from a covered peril (like water damage from a burst pipe or hurricane). Many policies have mold sublimits (e.g., $10,000-$50,000) even when mold is covered. Maintenance-related mold (from neglected leaks, humidity control failures) is almost always excluded. Review your policy's mold endorsement carefully, and consider purchasing higher mold limits if your property is high-risk."
  },
  {
    question: "When is mold covered under my property insurance policy?",
    answer: "Mold is typically covered when: 1) It results directly from sudden, accidental water damage covered by your policy, 2) The water damage is reported and addressed promptly, 3) Proper mitigation efforts were made to prevent mold growth, and 4) The mold doesn't result from long-term maintenance issues. For example, mold from a burst pipe is likely covered; mold from a slowly leaking roof over months is not. Documenting the cause of water damage and your immediate response is critical for mold coverage."
  },
  {
    question: "What mold remediation certifications should contractors have?",
    answer: "Florida requires mold-related services be performed by licensed professionals. Look for: Mold Assessors (MRSA license) for testing and protocol development, Mold Remediators (MRSR license) for remediation work. These licenses are issued by DBPR and can be verified at DBPR.state.fl.us. Additionally, reputable remediators should have IICRC certifications (WRT, AMRT), workers' compensation insurance, and general liability insurance. Never use the same company for both assessment and remediation—Florida prohibits this to prevent conflicts of interest."
  },
  {
    question: "How much does commercial mold remediation cost in Tampa?",
    answer: "Commercial mold remediation costs vary significantly based on affected area, mold type, and building complexity. General ranges: Small affected areas (under 100 sq ft): $1,500-$5,000. Moderate remediation (100-500 sq ft): $5,000-$20,000. Large-scale remediation (500+ sq ft): $20,000-$100,000+. HVAC system remediation: $3,000-$15,000. Costs include containment, removal, cleaning, HEPA filtration, disposal, and post-remediation testing. Full restoration (drywall, flooring replacement) adds to these costs."
  },
  {
    question: "What documentation do I need for a mold-related insurance claim?",
    answer: "Comprehensive mold claim documentation includes: the initial water damage documentation (photos, dates, cause), your mitigation response with dates and actions taken, the licensed mold assessment report with lab results, the remediation protocol from the assessor, the remediation contractor's scope of work and costs, clearance testing results after remediation, and all related restoration costs. The key is establishing that mold resulted from a covered water event and that you responded promptly to mitigate. Gaps in this timeline can result in denied claims."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/disaster-recovery/water-damage/", label: "Water Damage Restoration" },
  { href: "/property-damage-assessment-for-insurance-claims-in-tampa/", label: "Property Damage Assessment" },
  { href: "/tampas-insurance-restoration-reporting-and-documentation/", label: "Documentation Services" },
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
            alt="Mold remediation and insurance coverage in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Mold Remediation and Insurance Coverage in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Expert guidance on mold remediation and insurance coverage for Tampa Bay commercial properties. Understanding Florida's mold regulations, coverage requirements, and proper remediation procedures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Mold Remediation Help
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
              Tampa Bay's humid subtropical climate creates ideal conditions for mold growth, making mold issues common in commercial properties—especially after water damage events. Understanding how mold insurance coverage works, what's required for proper remediation, and how to document mold claims can significantly impact your recovery. Florida Construction Specialists helps Tampa Bay commercial property owners navigate the complex intersection of mold remediation and insurance coverage.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Critical: Mold Coverage Depends on Cause and Response</h3>
                  <p className="text-amber-700">Insurance coverage for mold almost always depends on the underlying cause and your response time. Mold resulting from covered water damage is typically covered (up to policy limits); mold from maintenance issues or slow response is typically excluded. Document water events immediately and begin mitigation within 24-48 hours to protect coverage.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Understanding Mold Insurance Coverage in Florida
            </h2>
            
            <p className="text-gray-600 mb-6">
              Mold coverage is one of the most misunderstood aspects of property insurance. Standard policies don't automatically cover mold damage—coverage depends on specific policy language, the cause of the mold, and your mitigation efforts. Understanding these distinctions is essential for successful claims.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Typically Covered</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Mold from covered water damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Sudden pipe bursts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Hurricane water intrusion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Fire suppression water damage</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Bug className="w-10 h-10 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Typically Excluded</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Long-term maintenance issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Humidity/condensation problems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Slow, unaddressed leaks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Flood-related mold (no flood policy)</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Florida Mold Remediation Requirements
            </h2>

            <p className="text-gray-600 mb-6">
              Florida has specific licensing requirements for mold-related services. Understanding these requirements helps you hire qualified professionals and ensures your remediation meets insurance company standards.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Service Type</th>
                    <th className="px-6 py-4 text-left">Required License</th>
                    <th className="px-6 py-4 text-left">Key Requirements</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Mold Assessment</td>
                    <td className="px-6 py-4">MRSA (Mold Assessor)</td>
                    <td className="px-6 py-4 text-gray-600">Testing, protocols, clearance</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Mold Remediation</td>
                    <td className="px-6 py-4">MRSR (Mold Remediator)</td>
                    <td className="px-6 py-4 text-gray-600">Actual removal and treatment</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Conflict of Interest</td>
                    <td className="px-6 py-4">Prohibited</td>
                    <td className="px-6 py-4 text-gray-600">Same company cannot assess and remediate</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Mold Remediation Costs in Tampa Bay
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Service/Scope</th>
                    <th className="px-6 py-4 text-left">Cost Range</th>
                    <th className="px-6 py-4 text-left">Includes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Mold Assessment</td>
                    <td className="px-6 py-4">$300 - $1,500</td>
                    <td className="px-6 py-4 text-gray-600">Inspection, sampling, lab analysis, protocol</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Small area (&lt;100 sq ft)</td>
                    <td className="px-6 py-4">$1,500 - $5,000</td>
                    <td className="px-6 py-4 text-gray-600">Containment, removal, cleaning, disposal</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Medium area (100-500 sq ft)</td>
                    <td className="px-6 py-4">$5,000 - $20,000</td>
                    <td className="px-6 py-4 text-gray-600">Full remediation with HEPA filtration</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Large area (500+ sq ft)</td>
                    <td className="px-6 py-4">$20,000 - $100,000+</td>
                    <td className="px-6 py-4 text-gray-600">Major commercial remediation</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">HVAC remediation</td>
                    <td className="px-6 py-4">$3,000 - $15,000</td>
                    <td className="px-6 py-4 text-gray-600">Duct cleaning, component treatment</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Clearance testing</td>
                    <td className="px-6 py-4">$300 - $800</td>
                    <td className="px-6 py-4 text-gray-600">Post-remediation verification</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              The Mold Remediation Process
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Assessment by Licensed Assessor</h3>
                  <p className="text-gray-600">A licensed mold assessor (MRSA) inspects the property, collects samples for laboratory analysis, and prepares a remediation protocol. This assessment documents the mold type, extent, and required remediation procedures.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Containment Setup</h3>
                  <p className="text-gray-600">The remediation contractor (MRSR) establishes containment barriers with negative air pressure to prevent mold spore spread to unaffected areas. HEPA air filtration runs continuously throughout the remediation.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Mold Removal</h3>
                  <p className="text-gray-600">Contaminated materials are removed and properly disposed of as biohazard waste. Non-porous surfaces are cleaned with appropriate antimicrobial treatments. Workers use proper PPE throughout.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Clearance Testing</h3>
                  <p className="text-gray-600">The original assessor (or another independent assessor) performs clearance testing to verify successful remediation. Air and surface samples must show mold levels comparable to outdoor ambient levels.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Restoration</h3>
                  <p className="text-gray-600">After clearance, reconstruction can begin. This includes replacing removed drywall, flooring, and other materials—returning the space to pre-loss condition with documentation for insurance.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Protecting Your Mold Insurance Coverage
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">Best Practices</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Report water damage immediately</li>
                  <li>• Begin mitigation within 24-48 hours</li>
                  <li>• Document everything with timestamps</li>
                  <li>• Use licensed professionals only</li>
                  <li>• Follow assessor's protocol exactly</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-800 mb-2">Coverage Killers</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Delayed response to water damage</li>
                  <li>• Failure to mitigate promptly</li>
                  <li>• Undocumented maintenance issues</li>
                  <li>• Using unlicensed contractors</li>
                  <li>• Same company for assess and remediate</li>
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
              <h3 className="text-2xl font-bold mb-4">Expert Mold Remediation Coordination</h3>
              <p className="mb-6 text-gray-200">
                Florida Construction Specialists coordinates mold remediation and restoration for Tampa Bay commercial properties. We work with licensed assessors and remediators while supporting your insurance claim throughout the process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Get Mold Help
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
            Professional Mold Remediation Support
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for mold remediation coordination throughout Tampa Bay.
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
