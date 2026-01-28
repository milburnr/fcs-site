import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, Droplets, Thermometer, Wind, Gauge } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Structural Drying Services Tampa | Commercial Flood & Water Damage Drying",
  description: "Professional structural drying services in Tampa for commercial flood and water damage. Industrial dehumidification, moisture monitoring, and IICRC-certified technicians. Prevent mold with rapid response.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa's Structural Drying Services Post-Flooding", href: "/tampas-structural-drying-services-post-flooding/" },
];

const faqs = [
  {
    question: "How long does structural drying take for commercial buildings?",
    answer: "Drying time depends on water volume, materials affected, and building construction. Standard drywall and framing typically dry in 3-5 days with proper equipment. Concrete slabs and masonry may require 7-14 days or longer. Hardwood floors can take 2-3 weeks. We monitor moisture levels daily and continue drying until materials reach acceptable moisture content—typically below 15% for wood and below 1% relative humidity difference for concrete."
  },
  {
    question: "What's the difference between water extraction and structural drying?",
    answer: "Water extraction removes standing water and surface moisture using pumps, extractors, and wet vacuums—this is the immediate emergency response. Structural drying removes moisture that has absorbed into building materials (drywall, framing, insulation, concrete) using dehumidification, air movement, and controlled evaporation. Both are essential; extraction alone won't prevent mold or material degradation."
  },
  {
    question: "Can structural drying prevent the need for demolition?",
    answer: "When started within 24-48 hours of water intrusion, proper structural drying can often save materials that would otherwise require removal. Drywall, carpet, hardwood floors, and structural framing can frequently be dried in place if addressed quickly. However, materials saturated with Category 3 (contaminated) water, or wet for extended periods, typically require removal regardless of drying. Our assessment determines salvageability."
  },
  {
    question: "How do you monitor the drying process?",
    answer: "We use professional moisture measurement equipment including pin-type and pinless moisture meters, thermo-hygrometers for temperature and humidity, and thermal imaging cameras to identify hidden moisture. We create moisture maps documenting initial conditions and take daily readings throughout drying. This documentation proves materials reached acceptable moisture levels before reconstruction—essential for insurance claims and preventing future problems."
  },
  {
    question: "What equipment is used for commercial structural drying?",
    answer: "Commercial structural drying requires industrial-grade equipment: LGR (Low Grain Refrigerant) dehumidifiers that remove 15-30 gallons of water per day each, high-velocity air movers that accelerate evaporation, air scrubbers with HEPA filtration, injection drying systems for wall cavities and under flooring, and desiccant dehumidifiers for specialized applications. Equipment selection depends on building size, construction type, and conditions."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/water-damage/", label: "Water Damage Restoration" },
  { href: "/flood-remediation-contractors-in-tampa/", label: "Flood Remediation Services" },
  { href: "/post-disaster-interior-restoration-in-tampa/", label: "Interior Restoration" },
  { href: "/commercial-property-damage-restoration-in-tampa/", label: "Commercial Property Restoration" },
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
            src="/wp-content/uploads/2023/12/hurricane-ian.webp"
            alt="Structural drying services in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa's Structural Drying Services Post-Flooding
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Professional commercial structural drying following flood and water damage. IICRC-certified technicians, industrial dehumidification, and comprehensive moisture monitoring to protect your Tampa Bay property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Emergency Drying Service
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
              After flooding from hurricanes, storm surge, or water damage events, proper structural drying is the critical step that determines whether your Tampa Bay commercial property can be restored or requires extensive demolition and reconstruction. Moisture trapped in building materials leads to mold growth (often within 24-48 hours in Tampa's climate), structural degradation, and ongoing indoor air quality problems. Florida Construction Specialists provides professional structural drying services using industrial-grade equipment and IICRC-certified protocols to thoroughly dry your building and protect your investment.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-800 mb-2">The 24-48 Hour Window</h3>
                  <p className="text-red-700">In Tampa's warm, humid climate, mold can begin growing on wet materials within 24-48 hours. Once mold establishes, remediation costs increase dramatically, and some materials that could have been dried must instead be removed. Quick response to water intrusion—starting structural drying within the critical window—can save thousands of dollars and weeks of restoration time.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Understanding Structural Drying Science
            </h2>
            
            <p className="text-gray-600 mb-6">
              Structural drying is not simply placing fans and waiting. It's a controlled process based on psychrometric principles—the science of air-water vapor mixtures. Effective drying requires creating conditions where water evaporates from materials into the air faster than ambient humidity allows, then removing that water vapor through dehumidification. Temperature, airflow, humidity, and material characteristics all affect drying rates.
            </p>

            <p className="text-gray-600 mb-8">
              The Institute of Inspection, Cleaning and Restoration Certification (IICRC) S500 Standard provides the industry framework for water damage restoration and structural drying. Our technicians are IICRC-certified and follow these protocols to ensure thorough, documented drying that meets insurance requirements and industry best practices.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Structural Drying Services for Commercial Properties
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Droplets className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Water Extraction</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Truck-mounted extraction units</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Submersible pumps for standing water</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Weighted extraction for carpet and pad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Hard surface water removal</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Wind className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Dehumidification</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>LGR (Low Grain Refrigerant) dehumidifiers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Desiccant dehumidification systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Trailer-mounted commercial units</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Continuous condensate drainage</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Thermometer className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Air Movement</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>High-velocity air movers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Axial fans for large spaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Strategic placement for optimal drying</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Directed airflow patterns</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Gauge className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Specialized Drying</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Wall cavity injection drying</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Hardwood floor drying mats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Concrete slab drying systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Injectidry systems for difficult areas</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Water Damage Categories and Drying Requirements
            </h2>

            <p className="text-gray-600 mb-6">
              The IICRC classifies water damage into three categories based on contamination level, each requiring different drying approaches and safety protocols:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-800">Category 1: Clean Water</h4>
                <p className="text-blue-700">Water from sanitary sources (broken supply lines, rainwater, condensate). Materials can typically be dried in place if addressed within 24-48 hours.</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <h4 className="font-bold text-yellow-800">Category 2: Gray Water</h4>
                <p className="text-yellow-700">Water with significant contamination (dishwasher/washing machine overflow, toilet overflow without feces). Porous materials may require removal; hard surfaces can be cleaned and dried.</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <h4 className="font-bold text-red-800">Category 3: Black Water</h4>
                <p className="text-red-700">Highly contaminated water (sewage, flood water, storm surge). Porous materials must be removed. Requires extensive cleaning, antimicrobial treatment, and careful drying of remaining structures.</p>
              </div>
            </div>

            <p className="text-gray-600 mb-8">
              Hurricane-related flooding in Tampa Bay typically involves Category 3 water due to storm surge contamination, necessitating more aggressive removal of porous materials and careful treatment of remaining structural elements.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Structural Drying Costs in Tampa Bay
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Service Component</th>
                    <th className="px-6 py-4 text-left">Price Range</th>
                    <th className="px-6 py-4 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Emergency Water Extraction</td>
                    <td className="px-6 py-4">$3 - $7/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Affected area</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">LGR Dehumidifier (per day)</td>
                    <td className="px-6 py-4">$75 - $200/unit</td>
                    <td className="px-6 py-4 text-gray-600">Equipment rental + monitoring</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Air Mover (per day)</td>
                    <td className="px-6 py-4">$25 - $75/unit</td>
                    <td className="px-6 py-4 text-gray-600">High-velocity units</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Injection Drying System</td>
                    <td className="px-6 py-4">$150 - $400/day</td>
                    <td className="px-6 py-4 text-gray-600">Wall cavity, under flooring</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Moisture Monitoring</td>
                    <td className="px-6 py-4">$150 - $500/day</td>
                    <td className="px-6 py-4 text-gray-600">Daily readings and documentation</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Antimicrobial Treatment</td>
                    <td className="px-6 py-4">$1 - $3/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Mold prevention application</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Complete Drying Service</td>
                    <td className="px-6 py-4">$4 - $12/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">All-inclusive per affected area</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              *Prices reflect 2024 Tampa Bay market rates. Costs vary based on water category, affected materials, building access, and drying duration required. Insurance typically covers structural drying as part of water damage restoration.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Structural Drying Process
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Emergency Response & Assessment</h3>
                  <p className="text-gray-600">We respond rapidly to assess the situation, identify the water source and category, and determine the extent of water intrusion. Thermal imaging helps identify hidden moisture in walls and ceilings.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Water Extraction</h3>
                  <p className="text-gray-600">Standing water is removed using truck-mounted extractors, submersible pumps, and weighted extraction tools. Quick extraction dramatically reduces drying time and damage extent.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Moisture Mapping</h3>
                  <p className="text-gray-600">We document moisture levels throughout the affected area, creating baseline measurements for all materials. This map guides equipment placement and provides comparison points for tracking drying progress.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Equipment Setup</h3>
                  <p className="text-gray-600">Dehumidifiers and air movers are strategically placed based on psychrometric calculations to create optimal drying conditions. Equipment quantities are matched to the space volume and moisture load.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Daily Monitoring</h3>
                  <p className="text-gray-600">Technicians take daily moisture readings, adjust equipment as needed, and document progress. We provide regular updates and adjust the drying plan based on actual conditions.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">6</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Verification & Documentation</h3>
                  <p className="text-gray-600">Drying continues until all materials reach target moisture levels (typically matching unaffected reference areas). Final documentation confirms successful drying for insurance records and reconstruction clearance.</p>
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
              Why Proper Structural Drying Matters
            </h2>

            <p className="text-gray-600 mb-6">
              Inadequate drying leads to expensive problems: mold growth requiring remediation, warped flooring and structural materials, musty odors, and ongoing moisture issues. Insurance companies increasingly scrutinize drying documentation, and improperly dried buildings can face coverage disputes for future moisture-related claims.
            </p>

            <p className="text-gray-600 mb-8">
              Florida Construction Specialists' IICRC-certified technicians understand the science of structural drying and have the equipment and expertise to dry your commercial property thoroughly and document the process completely. We've dried millions of square feet of Tampa Bay commercial space following hurricanes, floods, and water damage events.
            </p>

            <div className="bg-brand-green-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Water Damage? Act Fast.</h3>
              <p className="mb-6 text-gray-200">
                Every hour counts after water intrusion. Contact Florida Construction Specialists immediately for professional structural drying services that protect your Tampa Bay commercial property from mold and ongoing moisture damage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Emergency Response
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
            title="Related Water Damage Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Professional Structural Drying for Tampa Bay
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for IICRC-certified structural drying services throughout Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Emergency Service
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
