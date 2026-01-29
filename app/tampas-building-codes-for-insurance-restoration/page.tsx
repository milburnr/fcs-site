import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, Building2, Shield, FileText, Wind } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa Building Codes for Insurance Restoration | Florida Building Code Guide",
  description: "Understanding Tampa building codes for insurance restoration. Florida Building Code requirements, wind mitigation, flood regulations, and code upgrade coverage for commercial properties.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa's Building Codes for Insurance Restoration", href: "/tampas-building-codes-for-insurance-restoration/" },
];

const faqs = [
  {
    question: "What building code applies to Tampa Bay commercial restoration?",
    answer: "Tampa Bay follows the Florida Building Code (FBC), which is updated every three years. The current edition is the 8th Edition (2023), effective December 31, 2023. Tampa and Hillsborough County may have local amendments that add requirements beyond the base FBC. For restoration work, the code in effect when your permit is issued typically applies. Repairs generally must meet current code, even if the original construction was built to earlier standards."
  },
  {
    question: "What is the 50% rule and how does it affect restoration?",
    answer: "The Florida Building Code's 50% rule (known as the Substantial Improvement threshold) applies when repair costs exceed 50% of the building's market value. When triggered, the entire building may need to be brought up to current code, not just the damaged portions. For commercial properties in flood zones, this can require elevation to current Base Flood Elevation or flood-proofing measures. Careful damage documentation and strategic repair planning can help manage 50% rule implications."
  },
  {
    question: "What wind mitigation requirements apply to Tampa restoration work?",
    answer: "Tampa Bay is in a wind-borne debris region requiring enhanced construction methods. Key requirements include: roof covering wind resistance meeting design wind speeds (typically 140+ mph), roof-to-wall connections using hurricane straps or clips, secondary water resistance for roof systems, impact-resistant glazing or protective shutters for openings, and continuous load path from roof to foundation. These requirements apply when repairing or replacing affected building components."
  },
  {
    question: "How do flood zone regulations affect insurance restoration?",
    answer: "Properties in Special Flood Hazard Areas (SFHA) must comply with floodplain management regulations. Requirements include: building the lowest floor at or above Base Flood Elevation, using flood-resistant materials below BFE, proper anchoring to resist flotation, elevated mechanical and electrical systems, and compliance with local floodplain ordinances. FEMA flood maps (available at FEMA.gov/flood-maps) show your property's flood zone designation."
  },
  {
    question: "Will insurance cover the cost of code upgrades during restoration?",
    answer: "Florida Statute 627.7011 requires residential property insurers to cover code upgrade costs when repairing hurricane damage. Most commercial policies include Law and Ordinance coverage, though coverage amounts vary—typically 10-25% of building coverage. This pays for the increased cost of complying with current codes when repairing older structures. Review your policy limits; standard coverage may be insufficient for older buildings requiring significant upgrades. Higher limits can often be purchased."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/insurance-restoration-compliance-and-regulations-in-tampa/", label: "Compliance and Regulations" },
  { href: "/understanding-tampa-insurance-restoration-claims/", label: "Understanding Insurance Claims" },
  { href: "/impact-of-climate-change-on-tampa-insurance-restoration/", label: "Climate Change Impacts" },
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
            alt="Tampa building codes for insurance restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa's Building Codes for Insurance Restoration
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Understanding Florida Building Code requirements for insurance restoration. Navigate wind mitigation, flood regulations, and code upgrade requirements for your Tampa Bay commercial property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Code Compliance Help
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
              The Florida Building Code establishes some of the nation's most stringent construction requirements, designed to protect buildings from hurricanes, flooding, and other hazards common to Florida. When restoring commercial property after damage, you must comply with current code requirements—often more demanding than when your building was originally constructed. Understanding these requirements helps you plan restoration projects, budget appropriately, and ensure your insurance claim includes code upgrade costs.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Code Upgrades Are Recoverable Costs</h3>
                  <p className="text-amber-700">Florida Statute 627.7011 and most commercial Law & Ordinance coverage pays for code-required upgrades during restoration. Don't accept insurance settlements that ignore code upgrade costs. Professional documentation of code requirements supports full recovery of these often-substantial expenses.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Key Florida Building Code Requirements
            </h2>
            
            <p className="text-gray-600 mb-6">
              The Florida Building Code covers all aspects of construction, but certain provisions are particularly relevant for restoration work in Tampa Bay. These requirements have evolved significantly over the past two decades, meaning older buildings often require substantial upgrades during restoration.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Wind className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Wind Resistance</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Design wind speed compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Hurricane straps/clips required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Impact-resistant openings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Continuous load path</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Building2 className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Roof Systems</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Enhanced underlayment (SWR)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Wind-rated roof covering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Proper edge and ridge details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Deck attachment requirements</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Flood Protection</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Base Flood Elevation compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Flood-resistant materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Elevated mechanical systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Proper anchoring</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <FileText className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Other Requirements</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Electrical code updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Energy efficiency standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>ADA accessibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Fire protection upgrades</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Code Upgrade Cost Estimates
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Code Upgrade Item</th>
                    <th className="px-6 py-4 text-left">Typical Cost Range</th>
                    <th className="px-6 py-4 text-left">When Required</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Hurricane straps/clips</td>
                    <td className="px-6 py-4">$15 - $35 per connection</td>
                    <td className="px-6 py-4 text-gray-600">Roof replacement/repair</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Impact windows</td>
                    <td className="px-6 py-4">$500 - $1,500 per window</td>
                    <td className="px-6 py-4 text-gray-600">Window replacement</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Secondary water barrier</td>
                    <td className="px-6 py-4">$2 - $4 per sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Roof deck replacement</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Electrical panel upgrade</td>
                    <td className="px-6 py-4">$2,000 - $10,000</td>
                    <td className="px-6 py-4 text-gray-600">Significant electrical work</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">HVAC elevation</td>
                    <td className="px-6 py-4">$5,000 - $25,000</td>
                    <td className="px-6 py-4 text-gray-600">Flood zone/substantial improvement</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Building elevation</td>
                    <td className="px-6 py-4">$30,000 - $150,000+</td>
                    <td className="px-6 py-4 text-gray-600">50% rule/flood requirement</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              The 50% Rule: Substantial Improvement Threshold
            </h2>

            <p className="text-gray-600 mb-6">
              One of the most significant code provisions affecting restoration is the Substantial Improvement rule. When repair costs equal or exceed 50% of the building's market value (excluding land), the entire building may need to meet current code requirements—not just the damaged portions.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Substantial Improvement Considerations</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Calculation basis:</strong> Repair cost vs. market value of the structure (not including land)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Cumulative tracking:</strong> Some jurisdictions track improvements over time</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Flood zone impact:</strong> Most significant in Special Flood Hazard Areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Potential requirements:</strong> Building elevation, flood-proofing, full code compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Insurance recovery:</strong> Law & Ordinance coverage helps offset costs</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Wind Mitigation and Insurance Discounts
            </h2>

            <p className="text-gray-600 mb-6">
              Florida law requires insurers to provide premium discounts for buildings with qualifying wind mitigation features. A wind mitigation inspection (using OIR Form B1-1802) documents these features. Code upgrades during restoration often qualify for significant insurance savings.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Mitigation Feature</th>
                    <th className="px-6 py-4 text-left">Potential Discount</th>
                    <th className="px-6 py-4 text-left">Code Requirement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Hip roof shape</td>
                    <td className="px-6 py-4">5-10%</td>
                    <td className="px-6 py-4 text-gray-600">Design choice (not required)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Roof covering (FBC)</td>
                    <td className="px-6 py-4">5-15%</td>
                    <td className="px-6 py-4 text-gray-600">Required for new roofs</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Roof deck attachment</td>
                    <td className="px-6 py-4">5-10%</td>
                    <td className="px-6 py-4 text-gray-600">Required per FBC</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Roof-to-wall connection</td>
                    <td className="px-6 py-4">10-25%</td>
                    <td className="px-6 py-4 text-gray-600">Required for structural work</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Secondary water barrier</td>
                    <td className="px-6 py-4">5-10%</td>
                    <td className="px-6 py-4 text-gray-600">Required for reroofs</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Opening protection</td>
                    <td className="px-6 py-4">15-45%</td>
                    <td className="px-6 py-4 text-gray-600">Required in WBDR</td>
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
              <h3 className="text-2xl font-bold mb-4">Code-Compliant Restoration Experts</h3>
              <p className="mb-6 text-gray-200">
                Florida Construction Specialists ensures all restoration work meets current Florida Building Code requirements while maximizing your insurance claim recovery for code upgrade costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Get Code Analysis
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
            Building Code Expertise for Your Restoration
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for code-compliant restoration throughout Tampa Bay.
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
