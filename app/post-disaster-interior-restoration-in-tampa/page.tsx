import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, Paintbrush, Droplets, Wind, Hammer } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Post-Disaster Interior Restoration Tampa",
  description: "Expert post-disaster interior restoration in Tampa. Complete commercial interior rebuild after hurricane, flood, and storm damage. Drywall, flooring, ceilings, and finishes restored to pre-loss condition.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Post-Disaster Interior Restoration in Tampa", href: "/post-disaster-interior-restoration-in-tampa/" },
];

const faqs = [
  {
    question: "How long does commercial interior restoration take after a disaster?",
    answer: "Timeline depends on damage extent and building size. For moderate water damage, expect 4-8 weeks including structural drying (1-2 weeks), demolition and reconstruction (2-4 weeks), and finish work (1-2 weeks). Severe hurricane damage requiring extensive reconstruction may take 3-6 months. We provide detailed timelines during initial assessment and work to minimize your business interruption."
  },
  {
    question: "Should we gut the entire interior or try to salvage materials after water damage?",
    answer: "The decision depends on several factors: water contamination level (Category 1-3), saturation duration (over 48-72 hours typically means removal), material type (porous materials like drywall usually require removal, while properly dried solid wood may be salvageable), and cost-effectiveness. Professional moisture testing determines what can be saved. Often, complete gut-out followed by new construction is faster, safer, and more cost-effective than selective restoration."
  },
  {
    question: "Does insurance cover business interruption during interior restoration?",
    answer: "Most commercial property policies include Business Income coverage that pays for lost revenue during restoration. This coverage typically includes the time needed for repairs plus a reasonable restoration period. Coverage limits and waiting periods vary by policy. Document all business income losses carefully—we provide detailed timelines that support your business interruption claim."
  },
  {
    question: "How do you handle mold discovered during interior restoration?",
    answer: "Mold is common in water-damaged commercial buildings, especially in Tampa's humid climate. When discovered, we contain the affected area, bring in certified mold remediation specialists, remove contaminated materials following IICRC S520 standards, treat remaining surfaces with antimicrobial agents, and verify successful remediation through air quality testing before reconstruction begins. This is documented for your insurance claim."
  },
  {
    question: "Can you improve our commercial space during post-disaster restoration?",
    answer: "Absolutely. Post-disaster restoration is an opportunity to upgrade your commercial space. Within insurance claim limits, we can often modernize layouts, improve finishes, upgrade lighting and HVAC systems, and enhance ADA compliance. 'Betterment' beyond pre-loss condition is the property owner's responsibility, but strategic upgrades during restoration are often very cost-effective compared to separate renovation projects."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/tampas-structural-drying-services-post-flooding/", label: "Structural Drying Services" },
  { href: "/commercial-property-damage-restoration-in-tampa/", label: "Commercial Damage Restoration" },
  { href: "/complete-property-overhaul-after-disasters-in-tampa/", label: "Complete Property Overhaul" },
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
            src="/images/hurricane-ian/hurricane-ian-display.webp"
            alt="Post-disaster interior restoration in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Post-Disaster Interior Restoration in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Complete commercial interior restoration after hurricane, flood, and water damage. From structural drying through final finishes, we restore Tampa Bay businesses to full operation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Restoration Quote
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
              When hurricanes, floods, or water damage devastate your Tampa Bay commercial property's interior, rapid and comprehensive restoration is essential to minimize business interruption and prevent secondary damage like mold growth. Florida Construction Specialists provides complete post-disaster interior restoration services—from emergency water extraction and structural drying through complete interior reconstruction and finish work. Our goal is restoring your commercial space to pre-loss condition while getting your business back to full operation as quickly as possible.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">The 48-72 Hour Window: Why Speed Matters</h3>
                  <p className="text-amber-700">Mold can begin growing within 24-48 hours after water intrusion in Tampa's humid climate. Materials saturated for more than 72 hours often cannot be salvaged and must be removed. Quick response dramatically reduces restoration costs and prevents health hazards. Contact us immediately after any water intrusion event.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Comprehensive Interior Restoration Services
            </h2>
            
            <p className="text-gray-600 mb-6">
              Post-disaster interior restoration encompasses everything from the structural shell inward. After a hurricane or flood event, commercial interiors typically require complete gut-out of water-damaged materials, followed by systematic reconstruction of all interior systems. Florida Construction Specialists manages this entire process, coordinating all trades to deliver efficient, high-quality restoration that meets Florida Building Code requirements and insurance documentation standards.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Droplets className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Water Damage Remediation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Emergency water extraction and removal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Industrial dehumidification and air movement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Moisture monitoring and documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Content pack-out and restoration</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Hammer className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Demolition & Removal</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Water-damaged drywall and insulation removal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Flooring and subflooring extraction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Ceiling system and drop ceiling removal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Damaged fixture and cabinetry removal</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Wind className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Structural Reconstruction</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Metal stud and wood framing installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Drywall hanging, taping, and finishing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Insulation replacement (thermal and acoustic)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Ceiling grid and tile installation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Paintbrush className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Finish Work</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Commercial flooring installation (VCT, LVP, carpet, tile)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Interior painting and wall coverings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Millwork, trim, and cabinetry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Fixture installation and final details</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              MEP Systems Restoration
            </h2>

            <p className="text-gray-600 mb-6">
              Commercial interior restoration after disasters always involves MEP (mechanical, electrical, plumbing) system evaluation and repair. Water damage particularly affects electrical systems, which must be inspected and certified safe before energizing. HVAC systems may require cleaning, component replacement, or complete replacement depending on contamination levels and submersion depth.
            </p>

            <p className="text-gray-600 mb-8">
              Florida Construction Specialists coordinates all MEP restoration with licensed subcontractors who understand Florida Building Code requirements and insurance documentation needs. All electrical work is inspected by the Authority Having Jurisdiction, and we provide complete documentation of system restoration for your insurance claim file.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Interior Restoration Costs in Tampa Bay
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Restoration Component</th>
                    <th className="px-6 py-4 text-left">Price Range</th>
                    <th className="px-6 py-4 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Water Extraction & Drying</td>
                    <td className="px-6 py-4">$3 - $8/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Equipment rental, monitoring</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Interior Demolition/Gut-Out</td>
                    <td className="px-6 py-4">$4 - $12/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Complete interior strip</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Mold Remediation</td>
                    <td className="px-6 py-4">$15 - $30/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Affected area treatment</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Drywall & Ceiling Reconstruction</td>
                    <td className="px-6 py-4">$8 - $18/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Framing through Level 4 finish</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Commercial Flooring</td>
                    <td className="px-6 py-4">$6 - $25/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">VCT to premium LVP/tile</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Interior Painting</td>
                    <td className="px-6 py-4">$2 - $5/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Walls and ceilings</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Complete Interior Restoration</td>
                    <td className="px-6 py-4">$45 - $125/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Gut to turnkey completion</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              *Prices reflect 2024 Tampa Bay market rates. Costs vary based on damage severity, building type, finish levels, and accessibility. Contact us for a detailed estimate based on your specific situation.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              The Interior Restoration Process
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Emergency Response & Mitigation</h3>
                  <p className="text-gray-600">We respond immediately to stop ongoing damage. This includes water extraction, temporary weather protection, emergency board-up, and placement of drying equipment. Quick mitigation prevents secondary damage and reduces overall restoration costs.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Assessment & Documentation</h3>
                  <p className="text-gray-600">Our team conducts thorough damage assessment, documenting every affected area with photos, moisture readings, and detailed notes. This documentation supports your insurance claim and establishes the scope of restoration work.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Controlled Demolition</h3>
                  <p className="text-gray-600">Damaged materials are systematically removed and disposed of properly. We protect unaffected areas, contain dust and debris, and document all removed materials. MEP systems are protected or capped as needed.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Structural Drying</h3>
                  <p className="text-gray-600">Using industrial dehumidifiers, air movers, and specialized drying equipment, we dry the structural elements to acceptable moisture levels. Daily moisture monitoring documents progress and ensures thorough drying before reconstruction.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Reconstruction</h3>
                  <p className="text-gray-600">With dry, stable structural conditions, reconstruction begins. Framing, electrical rough-in, plumbing, HVAC modifications, insulation, drywall, and all finish work are completed in proper sequence for efficient progress.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">6</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Final Inspection & Turnover</h3>
                  <p className="text-gray-600">We conduct thorough quality inspection, obtain all required permits and approvals, and deliver your restored commercial space ready for immediate occupancy. Complete documentation is provided for your insurance file.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Insurance Considerations for Interior Restoration
            </h2>

            <p className="text-gray-600 mb-6">
              Commercial property insurance policies typically cover interior restoration after covered perils (hurricanes, named storms, certain water damage). Understanding your policy's coverage, limits, and requirements helps ensure smooth claim processing and adequate compensation.
            </p>

            <p className="text-gray-600 mb-6">
              Key coverages for interior restoration include Building coverage (the structure itself), Business Personal Property (furniture, equipment, inventory), and Business Income/Extra Expense (lost revenue and additional costs during restoration). Florida law requires insurers to cover code-required upgrades when making repairs, which can be significant for older Tampa Bay commercial buildings.
            </p>

            <p className="text-gray-600 mb-8">
              Our team works directly with insurance adjusters, providing the documentation they need to process your claim efficiently. We prepare detailed estimates using Xactimate (the industry-standard estimating software), photograph all damage and restoration work, and maintain records that meet insurance company requirements.
            </p>

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
              Tampa Bay's Commercial Interior Restoration Experts
            </h2>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists has restored hundreds of commercial interiors throughout Tampa Bay following hurricanes, floods, and water damage events. Our experience spans office buildings, retail spaces, medical facilities, restaurants, warehouses, and specialty commercial environments. We understand the unique requirements of each building type and deliver restoration that meets both aesthetic standards and functional requirements.
            </p>

            <p className="text-gray-600 mb-8">
              Our in-house capabilities include all major trades needed for interior restoration, allowing us to maintain quality control and schedule efficiency throughout your project. We work closely with insurance adjusters, property managers, and building owners to ensure restoration meets all expectations while staying within approved claim amounts.
            </p>

            <div className="bg-brand-green-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Need Interior Restoration After a Disaster?</h3>
              <p className="mb-6 text-gray-200">
                Contact Florida Construction Specialists for rapid response to your commercial interior damage. We'll assess the situation, begin mitigation immediately, and develop a comprehensive restoration plan that gets your business back to normal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Request Emergency Service
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
            title="Related Restoration Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Restore Your Commercial Interior After Disaster
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for professional interior restoration services throughout Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Restoration Quote
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
