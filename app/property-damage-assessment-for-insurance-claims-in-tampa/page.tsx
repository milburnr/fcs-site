import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, ClipboardCheck, FileText, Calculator, Camera } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Property Damage Assessment for Insurance Claims Tampa | Commercial Claim Documentation",
  description: "Expert property damage assessment for insurance claims in Tampa. Comprehensive documentation, damage quantification, and claim support for commercial hurricane, flood, and storm damage.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Property Damage Assessment for Insurance Claims in Tampa", href: "/property-damage-assessment-for-insurance-claims-in-tampa/" },
];

const faqs = [
  {
    question: "How soon after damage occurs should I get a professional assessment?",
    answer: "You should contact a professional for damage assessment within 24-48 hours of discovering the damage. Florida law requires policyholders to report claims 'promptly,' and delays can jeopardize your claim. Early professional assessment also documents the damage before any deterioration occurs, which strengthens your insurance claim. We offer 24/7 emergency assessment services for storm-damaged commercial properties."
  },
  {
    question: "What's included in a commercial property damage assessment?",
    answer: "Our comprehensive assessments include structural evaluation by licensed engineers, detailed photo and video documentation with timestamps, moisture mapping for water damage, thermal imaging to identify hidden damage, itemized damage inventories using Xactimate or similar estimating software, scope of repairs documentation, and code upgrade requirements identification. All documentation is formatted for insurance adjuster review."
  },
  {
    question: "Will a contractor's assessment conflict with the insurance adjuster's findings?",
    answer: "Professional contractor assessments often identify damage that initial insurance adjuster inspections miss. Florida law (Section 627.70131) requires insurers to acknowledge your claim within 14 days and make payment decisions within 90 days. If there's disagreement between assessments, you have the right to request re-inspection, invoke appraisal clauses, or pursue mediation. Our detailed documentation supports your position in any dispute."
  },
  {
    question: "How does Florida's assignment of benefits (AOB) law affect damage assessments?",
    answer: "Florida's 2022 AOB reform (SB 2-D) significantly changed how contractors work with insurance claims. While post-loss AOB for property damage restoration is now prohibited, contractors can still provide assessment services, prepare damage documentation, and work as preferred vendors. We help you understand your options and ensure our assessment supports whatever claim approach you choose."
  },
  {
    question: "What documentation do I need for a FEMA claim in addition to insurance?",
    answer: "FEMA's Public Assistance program has specific documentation requirements beyond standard insurance claims. You'll need proof of ownership or lease, pre-disaster condition documentation, detailed damage descriptions with photos, cost estimates from licensed contractors, force account labor records if applicable, and evidence the damage was caused by the declared disaster. Our assessments include FEMA-compliant documentation for eligible properties."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/tampa-insurance-restoration-for-hurricane-damage/", label: "Insurance Restoration Services" },
  { href: "/structural-integrity-evaluation-in-tampa-post-disaster/", label: "Structural Integrity Evaluation" },
  { href: "/commercial-property-damage-restoration-in-tampa/", label: "Commercial Damage Restoration" },
  { href: "/contact/", label: "Schedule Assessment" },
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
            alt="Property damage assessment for insurance claims in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Property Damage Assessment for Insurance Claims in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Comprehensive commercial property damage documentation and assessment to maximize your insurance claim. Expert evaluation for hurricane, flood, and storm damage throughout Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Schedule Assessment
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
              Accurate property damage assessment is the foundation of every successful insurance claim. For Tampa Bay commercial property owners facing hurricane, flood, or storm damage, professional damage documentation can mean the difference between adequate compensation and a significantly underpaid claim. Florida Construction Specialists provides comprehensive property damage assessment services that document every aspect of your loss, identify hidden damage, and create the detailed documentation insurance adjusters need to process your claim fairly.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Florida Insurance Claim Timeline Requirements</h3>
                  <p className="text-amber-700">Under Florida Statute 627.70131, you must report property damage to your insurer "promptly." Insurance companies must acknowledge your claim within 14 days and must pay or deny the claim within 90 days of receiving your proof of loss. Missing these deadlines can jeopardize your claim. Contact us immediately after discovering damage to ensure proper documentation before deadlines pass.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Professional Damage Assessment Matters for Commercial Claims
            </h2>
            
            <p className="text-gray-600 mb-6">
              Commercial property insurance claims are significantly more complex than residential claims. Your policy likely includes multiple coverage types—building coverage, business personal property, business income, extra expense, and various endorsements—each requiring specific documentation. Insurance company adjusters often lack the construction expertise to identify all damage, particularly structural issues, hidden water intrusion, and code upgrade requirements.
            </p>

            <p className="text-gray-600 mb-6">
              Studies consistently show that policyholders who use professional damage assessment services recover 30-50% more on their claims than those who rely solely on insurance company adjusters. For commercial properties, this can translate to hundreds of thousands of dollars in additional recovery. The investment in professional assessment typically returns 10-20 times its cost in increased claim payment.
            </p>

            <p className="text-gray-600 mb-8">
              Florida's property insurance market has experienced significant upheaval, with many carriers leaving the state or dramatically increasing premiums. In this environment, insurers are more aggressively scrutinizing claims and looking for reasons to reduce payments. Professional damage assessment with detailed documentation protects your interests and ensures you receive the compensation your policy promises.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Comprehensive Damage Assessment Services
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <ClipboardCheck className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Structural Assessment</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Licensed engineer structural evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Foundation and structural frame inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Roof structure and covering assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Load-bearing wall evaluation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Camera className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Documentation Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>High-resolution photo documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Video walkthrough with narration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Drone/aerial imaging for roof damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Timestamped documentation chain</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Calculator className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Damage Quantification</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Xactimate damage estimates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Line-item repair cost breakdown</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Material and labor pricing documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Local Tampa Bay market rate verification</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <FileText className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Specialized Assessments</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Moisture mapping with thermal imaging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Mold and microbial assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>MEP systems evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Code compliance gap analysis</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Understanding Florida Insurance Claim Requirements
            </h2>

            <p className="text-gray-600 mb-6">
              Florida has specific laws governing property insurance claims that every commercial property owner should understand. Under the Florida Insurance Code, insurers must provide specific responses within defined timeframes, and policyholders have rights that protect them from claim underpayment or denial.
            </p>

            <p className="text-gray-600 mb-6">
              Section 627.7011, Florida Statutes, requires insurers to pay for code-required upgrades when repairing hurricane damage. This is critically important for older Tampa Bay commercial buildings that may not meet current Florida Building Code requirements. Your damage assessment should identify all areas where current code exceeds the original construction, as these improvements must be included in your claim.
            </p>

            <p className="text-gray-600 mb-8">
              Florida's valued policy law (Section 627.702) provides additional protection for total losses, requiring insurers to pay the full policy limit when a building is totally destroyed. Accurate damage assessment is essential to determine whether damage qualifies as a total loss under this statute.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Property Damage Assessment Costs in Tampa Bay
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Assessment Type</th>
                    <th className="px-6 py-4 text-left">Price Range</th>
                    <th className="px-6 py-4 text-left">Deliverables</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Initial Damage Assessment</td>
                    <td className="px-6 py-4">$500 - $1,500</td>
                    <td className="px-6 py-4 text-gray-600">Photo documentation, damage summary</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Comprehensive Assessment</td>
                    <td className="px-6 py-4">$2,500 - $7,500</td>
                    <td className="px-6 py-4 text-gray-600">Full documentation, estimates, report</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Structural Engineering Report</td>
                    <td className="px-6 py-4">$1,500 - $5,000</td>
                    <td className="px-6 py-4 text-gray-600">PE-stamped structural evaluation</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Moisture/Mold Assessment</td>
                    <td className="px-6 py-4">$750 - $2,500</td>
                    <td className="px-6 py-4 text-gray-600">Thermal imaging, sampling, protocol</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Xactimate Estimate Preparation</td>
                    <td className="px-6 py-4">$1,000 - $5,000</td>
                    <td className="px-6 py-4 text-gray-600">Detailed line-item repair estimate</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Code Compliance Analysis</td>
                    <td className="px-6 py-4">$1,000 - $3,000</td>
                    <td className="px-6 py-4 text-gray-600">Upgrade requirements documentation</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Expert Witness Services</td>
                    <td className="px-6 py-4">$250 - $500/hour</td>
                    <td className="px-6 py-4 text-gray-600">Appraisal, mediation, litigation support</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              *Assessment costs often recoverable as part of insurance claim. Pricing varies based on property size, damage complexity, and scope of services required. Contact us for a specific quote.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Types of Damage We Assess
            </h2>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-2">Hurricane Damage</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Wind damage to roofs and walls</li>
                  <li>• Impact damage from debris</li>
                  <li>• Water intrusion from wind-driven rain</li>
                  <li>• Storm surge damage</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-2">Flood Damage</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Rising water damage</li>
                  <li>• Flash flood impacts</li>
                  <li>• Drainage system failures</li>
                  <li>• Contamination assessment</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-2">Water Damage</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Roof leak damage</li>
                  <li>• Plumbing failures</li>
                  <li>• HVAC condensate issues</li>
                  <li>• Hidden moisture damage</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-2">Fire Damage</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Structural fire damage</li>
                  <li>• Smoke and soot damage</li>
                  <li>• Water damage from suppression</li>
                  <li>• Electrical system impacts</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-2">Vandalism</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Forced entry damage</li>
                  <li>• Intentional destruction</li>
                  <li>• Theft-related damage</li>
                  <li>• Graffiti and defacement</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-2">Impact Damage</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Vehicle impacts</li>
                  <li>• Aircraft damage</li>
                  <li>• Falling objects</li>
                  <li>• Construction accidents</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Damage Assessment Process
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Immediate Response & Site Security</h3>
                  <p className="text-gray-600">We respond within hours to emergency assessment requests. Our first priority is documenting the damage as-found and ensuring the property is secured to prevent additional damage or loss.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Comprehensive Site Inspection</h3>
                  <p className="text-gray-600">Our team conducts a thorough inspection covering all building systems—structural, roofing, building envelope, MEP systems, and interior finishes. We use thermal imaging, moisture meters, and other diagnostic equipment to identify hidden damage.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Documentation & Photography</h3>
                  <p className="text-gray-600">Every damage item is photographed and documented with detailed notes. We create comprehensive photo logs with timestamps and descriptions that meet insurance industry documentation standards.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Damage Quantification & Estimating</h3>
                  <p className="text-gray-600">Using Xactimate and other industry-standard estimating software, we prepare detailed repair cost estimates that match the format insurance adjusters expect. Every line item is supported by documentation.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Report Delivery & Claim Support</h3>
                  <p className="text-gray-600">We deliver a comprehensive assessment report suitable for insurance claim submission. Our team remains available to meet with adjusters, answer questions, and support your claim through the settlement process.</p>
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
              Why Tampa Bay Property Owners Trust Our Assessments
            </h2>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists has performed thousands of property damage assessments throughout Tampa Bay, supporting insurance claims totaling hundreds of millions of dollars in commercial property damage. Our assessment reports are respected by insurance adjusters because they're thorough, accurate, and professionally documented.
            </p>

            <p className="text-gray-600 mb-8">
              Our team includes licensed engineers, certified thermographers, and construction professionals with decades of experience in commercial building systems. We understand how buildings are constructed, how they fail, and what's required to properly restore them. This expertise ensures no damage is overlooked and all repair requirements are accurately documented.
            </p>

            <div className="bg-brand-green-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Maximize Your Insurance Claim Recovery</h3>
              <p className="mb-6 text-gray-200">
                Don't leave money on the table with your commercial property damage claim. Contact Florida Construction Specialists for a professional damage assessment that documents your loss comprehensively and supports fair claim settlement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Schedule Assessment
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
            Professional Damage Assessment for Your Insurance Claim
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for comprehensive property damage assessment services throughout Tampa Bay.
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
