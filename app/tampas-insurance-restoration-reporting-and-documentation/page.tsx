import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, FileText, Camera, ClipboardCheck, Database } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa Insurance Restoration Reporting & Documentation | Commercial Claim Support",
  description: "Professional insurance restoration reporting and documentation services in Tampa. Comprehensive damage documentation, Xactimate estimates, and claim support for commercial properties.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa's Insurance Restoration Reporting and Documentation", href: "/tampas-insurance-restoration-reporting-and-documentation/" },
];

const faqs = [
  {
    question: "What documentation is required for a commercial insurance restoration claim in Florida?",
    answer: "Florida insurance claims require comprehensive documentation including: proof of loss forms signed under oath, detailed damage photographs with timestamps, itemized damage inventories, repair cost estimates (preferably in Xactimate format), proof of ownership or lease agreements, pre-loss condition documentation, contractor and engineer reports, and business interruption calculations with supporting financial records. Under Florida Statute 627.70131, insurers can request supplemental documentation, but must specify exactly what's needed within 30 days of receiving your claim."
  },
  {
    question: "How quickly should I document property damage after an incident?",
    answer: "Document damage immediately—within hours if possible. Florida law requires prompt notification to your insurer, and early documentation captures the damage before any deterioration, cleanup, or emergency repairs alter the scene. Take photos and videos before any mitigation work begins, then document throughout the mitigation process. Even if you've already cleaned up, document current conditions and gather any photos or videos taken during and after the incident."
  },
  {
    question: "What is Xactimate and why do insurance companies prefer it?",
    answer: "Xactimate is industry-standard software used to create detailed repair cost estimates. Insurance companies prefer Xactimate because it uses standardized pricing databases updated monthly with local labor and material costs, provides line-by-line detail for every repair item, includes overhead and profit calculations, and creates consistent, verifiable estimates. Estimates in Xactimate format are more likely to be accepted by insurance adjusters because they can directly compare line items against their own estimates."
  },
  {
    question: "Can insufficient documentation result in claim denial?",
    answer: "Yes. Under Florida law, policyholders bear the burden of proving their loss. Insufficient documentation can result in partial payment, claim disputes, or outright denial. Common documentation failures include: missing photos of damage before cleanup, inadequate proof of pre-loss condition, incomplete contents inventories, unsupported repair cost estimates, and insufficient business interruption documentation. Professional documentation services help ensure your claim meets the evidentiary standards required for full payment."
  },
  {
    question: "How do I document business interruption losses for my Tampa commercial property?",
    answer: "Business interruption documentation requires: historical financial records (typically 2-3 years of P&L statements and tax returns), documentation of the loss period and its cause, calculation of lost revenue using accepted methodologies, proof of continuing expenses during closure, documentation of extra expenses incurred to maintain operations, and evidence of mitigation efforts to reduce the loss period. Forensic accountants or experienced public adjusters can help prepare these calculations in formats insurance companies accept."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/property-damage-assessment-for-insurance-claims-in-tampa/", label: "Property Damage Assessment" },
  { href: "/understanding-tampa-insurance-restoration-claims/", label: "Understanding Insurance Claims" },
  { href: "/maximize-insurance-payouts-for-restoration-in-tampa/", label: "Maximize Insurance Payouts" },
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
            alt="Insurance restoration documentation in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa's Insurance Restoration Reporting and Documentation
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Comprehensive documentation services that support successful insurance claims. Professional reporting, detailed damage assessment, and Xactimate estimates for Tampa Bay commercial properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Documentation Help
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
              Thorough documentation is the foundation of every successful insurance restoration claim. For Tampa Bay commercial property owners, the quality of your damage documentation directly impacts claim outcomes—determining whether you receive full compensation or face underpayment, delays, or denial. Florida Construction Specialists provides comprehensive documentation services that meet insurance industry standards and support maximum claim recovery.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Florida Documentation Requirements</h3>
                  <p className="text-amber-700">Under Florida Statute 627.70131, policyholders must provide a "proof of loss" statement documenting their claim. Insurers must acknowledge receipt within 14 days and can request additional documentation within 30 days. Failure to provide adequate documentation can jeopardize your claim. Professional documentation services ensure you meet all requirements within statutory timelines.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Professional Documentation Matters
            </h2>
            
            <p className="text-gray-600 mb-6">
              Insurance adjusters evaluate thousands of claims and have become adept at identifying documentation weaknesses that justify reduced payments. Professional documentation anticipates these challenges by providing comprehensive, organized evidence that meets evidentiary standards. Well-documented claims are processed faster, disputed less frequently, and typically settle for higher amounts.
            </p>

            <p className="text-gray-600 mb-6">
              Commercial property claims are particularly documentation-intensive. Unlike residential claims where damage is relatively straightforward, commercial claims involve multiple coverage types, complex building systems, business interruption calculations, and significant dollar amounts that attract insurer scrutiny. Each element requires specific documentation to support the claim.
            </p>

            <p className="text-gray-600 mb-8">
              Tampa Bay's hurricane exposure creates additional documentation challenges. Storm damage often affects multiple building systems simultaneously, can include hidden damage not immediately visible, and may require code-mandated upgrades during repair. Documenting all these elements requires expertise in construction, Florida Building Code, and insurance claim requirements.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Documentation Services
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Camera className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Visual Documentation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>High-resolution photography</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Video walkthroughs with narration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Drone/aerial roof documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Thermal imaging for hidden damage</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <FileText className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Written Reports</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Detailed damage narratives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Cause and origin analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Structural engineer reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Code compliance assessments</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <ClipboardCheck className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Cost Estimation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Xactimate damage estimates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Line-item cost breakdowns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Tampa Bay market rate verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Code upgrade cost documentation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Database className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Inventory & Records</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Contents inventory preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Equipment and fixture valuation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Pre-loss condition documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Mitigation activity logs</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Documentation Services Pricing
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Service</th>
                    <th className="px-6 py-4 text-left">Price Range</th>
                    <th className="px-6 py-4 text-left">Deliverables</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Emergency Documentation</td>
                    <td className="px-6 py-4">$500 - $1,500</td>
                    <td className="px-6 py-4 text-gray-600">Same-day photos, video, initial report</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Comprehensive Photo Package</td>
                    <td className="px-6 py-4">$1,000 - $3,000</td>
                    <td className="px-6 py-4 text-gray-600">Full property photos, drone imagery, logs</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Xactimate Estimate</td>
                    <td className="px-6 py-4">$1,000 - $5,000</td>
                    <td className="px-6 py-4 text-gray-600">Detailed line-item repair estimate</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Structural Engineer Report</td>
                    <td className="px-6 py-4">$1,500 - $5,000</td>
                    <td className="px-6 py-4 text-gray-600">PE-stamped evaluation and recommendations</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Contents Inventory</td>
                    <td className="px-6 py-4">$750 - $3,000</td>
                    <td className="px-6 py-4 text-gray-600">Itemized list with valuations</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Full Documentation Package</td>
                    <td className="px-6 py-4">$3,500 - $15,000</td>
                    <td className="px-6 py-4 text-gray-600">Complete claim support documentation</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              *Documentation costs are often recoverable as part of your insurance claim. Pricing varies based on property size and damage complexity.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              The Documentation Process
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Emergency Response</h3>
                  <p className="text-gray-600">We respond immediately to document damage as-found, before any cleanup or mitigation alters the scene. This creates the strongest foundation for your claim by capturing the true extent of damage.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Comprehensive Inspection</h3>
                  <p className="text-gray-600">Our team conducts detailed inspection of all affected areas using visual examination, moisture detection, thermal imaging, and other diagnostic tools to identify both visible and hidden damage.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Evidence Collection</h3>
                  <p className="text-gray-600">We photograph and document every damage item with timestamps, location notes, and detailed descriptions. Video documentation captures the overall scope and interconnection of damage areas.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Report Preparation</h3>
                  <p className="text-gray-600">We compile all documentation into organized, professional reports formatted for insurance adjuster review. Estimates are prepared in Xactimate with supporting documentation for every line item.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Ongoing Support</h3>
                  <p className="text-gray-600">We remain available to answer adjuster questions, provide supplemental documentation, attend inspections, and support your claim through settlement. Our documentation stands up to scrutiny.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Common Documentation Mistakes to Avoid
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-800 mb-2">Documentation Failures</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Cleaning up before photographing</li>
                  <li>• Missing timestamps on photos</li>
                  <li>• Incomplete area coverage</li>
                  <li>• Low-quality or blurry images</li>
                  <li>• No pre-loss condition evidence</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">Best Practices</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Document before any cleanup</li>
                  <li>• Use timestamped, geotagged photos</li>
                  <li>• Capture wide and close-up shots</li>
                  <li>• Document throughout mitigation</li>
                  <li>• Preserve damaged materials</li>
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
              <h3 className="text-2xl font-bold mb-4">Professional Documentation for Your Insurance Claim</h3>
              <p className="mb-6 text-gray-200">
                Don't risk claim underpayment due to inadequate documentation. Contact Florida Construction Specialists for comprehensive damage documentation that supports maximum claim recovery for your Tampa Bay commercial property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Get Documentation Help
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
            Ready to Document Your Damage Properly?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for professional documentation services throughout Tampa Bay.
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
