import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, Droplets, Shield, FileCheck, Clock } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Flood Remediation Contractors Tampa | Commercial Flood Damage Restoration",
  description: "Licensed flood remediation contractors in Tampa. Commercial flood damage restoration, water extraction, structural drying, and mold prevention. IICRC-certified technicians serving Tampa Bay businesses.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Flood Remediation Contractors in Tampa", href: "/flood-remediation-contractors-in-tampa/" },
];

const faqs = [
  {
    question: "How quickly should flood remediation begin after flooding?",
    answer: "Flood remediation should begin immediately—ideally within hours of water recession. Mold can begin growing within 24-48 hours in Tampa's warm, humid climate. Materials saturated for more than 72 hours often cannot be saved. The faster we begin water extraction and drying, the more we can salvage and the lower your overall restoration costs will be."
  },
  {
    question: "Is flood damage covered by commercial property insurance?",
    answer: "Standard commercial property insurance typically does NOT cover flood damage. Flood coverage requires a separate National Flood Insurance Program (NFIP) policy or private flood insurance. However, water damage from broken pipes, roof leaks, or HVAC failures IS typically covered by standard policies. Storm surge from hurricanes is considered flood damage and requires flood insurance."
  },
  {
    question: "What's the difference between flood remediation and water damage restoration?",
    answer: "Flood remediation specifically addresses damage from rising water (natural flooding, storm surge, overflowing bodies of water), which is almost always Category 3 (contaminated) water requiring aggressive removal of porous materials. Water damage restoration covers all water intrusion including clean water (Category 1) from supply lines. Flood water carries bacteria, sewage, chemicals, and debris requiring additional safety protocols and sanitization."
  },
  {
    question: "Do you work with FEMA for flood damage claims?",
    answer: "Yes, we provide documentation that meets FEMA requirements for Individual Assistance and Public Assistance programs. This includes detailed damage assessment, photo documentation, cost estimates, and progress records. For commercial properties that may qualify for Public Assistance, proper documentation is essential for reimbursement eligibility."
  },
  {
    question: "What certifications should flood remediation contractors have?",
    answer: "Look for IICRC (Institute of Inspection, Cleaning and Restoration Certification) credentials including WRT (Water Restoration Technician) and AMRT (Applied Microbial Remediation Technician). Contractors should also hold appropriate Florida contractor licenses, liability insurance, and workers' compensation coverage. Florida Construction Specialists maintains all required certifications and licenses."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/water-damage/", label: "Water Damage Services" },
  { href: "/tampas-structural-drying-services-post-flooding/", label: "Structural Drying Services" },
  { href: "/commercial-property-damage-restoration-in-tampa/", label: "Commercial Property Restoration" },
  { href: "/identifying-water-damage-signs-prevention-and-action/", label: "Identifying Water Damage" },
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
            alt="Flood remediation contractors in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Flood Remediation Contractors in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Licensed commercial flood remediation services for Tampa Bay businesses. Emergency water extraction, structural drying, contamination cleanup, and complete flood damage restoration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Emergency Flood Response
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
              Tampa Bay faces significant flood risk from multiple sources: hurricane storm surge, tropical rainfall, flash flooding, and coastal flooding during king tides. When flood waters inundate your commercial property, professional remediation is essential to safely restore the building, prevent mold growth, and protect occupant health. Florida Construction Specialists provides comprehensive flood remediation services throughout Tampa Bay, combining IICRC-certified water damage expertise with commercial construction capabilities for complete flood recovery solutions.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-800 mb-2">Flood Water is Contaminated Water</h3>
                  <p className="text-red-700">All flood water is classified as Category 3 (black water) under IICRC standards—highly contaminated and potentially dangerous. Flood water contains sewage, chemicals, petroleum products, bacteria, and debris. Never enter flood-damaged buildings without proper protective equipment. Contact professional flood remediation contractors immediately.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Tampa Bay Flood Risks
            </h2>
            
            <p className="text-gray-600 mb-6">
              Tampa Bay ranks among the most hurricane-vulnerable metropolitan areas in the United States, and flooding represents the greatest threat to commercial properties during major storms. Understanding local flood risks helps property owners prepare and respond appropriately:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Hurricane Storm Surge</h3>
                <p className="text-gray-600 mb-3">Tampa Bay's funnel shape amplifies storm surge during hurricanes. A Category 3 hurricane making landfall nearby could produce 10-15+ feet of surge in parts of Tampa Bay, flooding areas far from the coastline.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Tropical Rainfall Flooding</h3>
                <p className="text-gray-600 mb-3">Slow-moving tropical systems can drop 10-20 inches of rain over several days, overwhelming drainage systems and causing widespread freshwater flooding even in areas not in flood zones.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Flash Flooding</h3>
                <p className="text-gray-600 mb-3">Intense afternoon thunderstorms during Tampa's rainy season (June-September) can cause localized flash flooding, particularly in low-lying areas and locations with inadequate drainage.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Coastal and Tidal Flooding</h3>
                <p className="text-gray-600 mb-3">King tides, especially when combined with onshore winds or storm conditions, can flood coastal properties. Climate change is increasing the frequency and severity of tidal flooding events.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Commercial Flood Remediation Services
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Droplets className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Emergency Water Removal</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>High-capacity pumping systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Truck-mounted extraction units</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Submersible pump deployment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>24/7 emergency response</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Contamination Cleanup</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Debris and sediment removal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Antimicrobial treatment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Sanitization of hard surfaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Odor neutralization</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Clock className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Material Removal</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Flood-damaged drywall removal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Insulation extraction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Flooring and carpet disposal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Contaminated debris disposal</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <FileCheck className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Structural Drying</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Industrial dehumidification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>High-velocity air movement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Daily moisture monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Verification documentation</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Flood Insurance: What Tampa Bay Business Owners Need to Know
            </h2>

            <p className="text-gray-600 mb-6">
              Standard commercial property insurance does NOT cover flood damage. Flood insurance must be purchased separately through the National Flood Insurance Program (NFIP) or private insurers. This is critically important for Tampa Bay businesses:
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-bold text-blue-800 mb-3">NFIP Commercial Coverage Limits</h4>
              <ul className="text-blue-700 space-y-2">
                <li>• Building Coverage: Up to $500,000</li>
                <li>• Contents Coverage: Up to $500,000</li>
                <li>• 30-day waiting period for new policies (exceptions for new purchases)</li>
                <li>• No business interruption coverage through NFIP</li>
              </ul>
            </div>

            <p className="text-gray-600 mb-8">
              Private flood insurance may offer higher limits, shorter waiting periods, and additional coverages like business interruption. Given Tampa Bay's flood risk, commercial property owners should carefully evaluate their flood insurance needs with a knowledgeable insurance professional.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Flood Remediation Costs in Tampa Bay
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Service</th>
                    <th className="px-6 py-4 text-left">Price Range</th>
                    <th className="px-6 py-4 text-left">Factors</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Emergency Water Extraction</td>
                    <td className="px-6 py-4">$3 - $8/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Water depth, accessibility</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Contaminated Material Removal</td>
                    <td className="px-6 py-4">$5 - $15/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Material type, contamination level</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Sanitization & Treatment</td>
                    <td className="px-6 py-4">$2 - $5/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Affected surface area</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Structural Drying</td>
                    <td className="px-6 py-4">$4 - $12/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Materials, drying time needed</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Mold Remediation (if needed)</td>
                    <td className="px-6 py-4">$15 - $30/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Extent of contamination</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Complete Flood Remediation</td>
                    <td className="px-6 py-4">$10 - $25/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Full scope, remediation only</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              *Prices reflect 2024 Tampa Bay market rates for Category 3 (flood) water damage. Costs do not include reconstruction after remediation. Emergency response during major flood events may face price increases due to demand. Contact us for assessment and estimate.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Flood Remediation Process
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Emergency Response</h3>
                  <p className="text-gray-600">24/7 response to flood emergencies. We assess safety conditions, begin pumping standing water, and establish site access protocols. Proper PPE protects workers from contaminated water hazards.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Water Extraction</h3>
                  <p className="text-gray-600">High-capacity pumps and truck-mounted extractors remove standing water as quickly as possible. The sooner water is removed, the more building materials can potentially be saved.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Contaminated Material Removal</h3>
                  <p className="text-gray-600">Flood-saturated porous materials (drywall, insulation, carpet, ceiling tiles) must be removed—they cannot be effectively cleaned after Category 3 water exposure. We cut above the flood line, removing contaminated materials while preserving unaffected areas.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Cleaning & Sanitization</h3>
                  <p className="text-gray-600">Remaining structural elements (framing, concrete, metal) are cleaned, treated with antimicrobial agents, and prepared for drying. All sediment and debris is removed and properly disposed.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Structural Drying</h3>
                  <p className="text-gray-600">Industrial dehumidification and air movement dry remaining structural materials to acceptable moisture levels. Daily monitoring ensures complete drying before reconstruction begins.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">6</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Clearance & Documentation</h3>
                  <p className="text-gray-600">Final moisture verification confirms the building is ready for reconstruction. Comprehensive documentation supports insurance claims and demonstrates proper remediation was completed.</p>
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
              <h3 className="text-2xl font-bold mb-4">Flood Emergency? Call Now.</h3>
              <p className="mb-6 text-gray-200">
                If your Tampa Bay commercial property has flooded, contact Florida Construction Specialists immediately. Our 24/7 emergency response team will begin remediation as quickly as possible to minimize damage and protect your property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Emergency Flood Response
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
            title="Related Flood & Water Damage Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Tampa Bay's Commercial Flood Remediation Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for professional flood remediation services throughout Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Flood Remediation Help
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
