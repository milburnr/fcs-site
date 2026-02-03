import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, Factory, Wrench, Shield, Clock } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Industrial Property Restoration Tampa | Warehouse",
  description: "Industrial property restoration services in Tampa. Warehouse, manufacturing, and distribution facility damage repair after hurricanes, floods, and disasters. Minimize downtime with rapid response.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Industrial Property Restoration Services After Damage in Tampa", href: "/industrial-property-restoration-services-after-damage-in-tampa/" },
];

const faqs = [
  {
    question: "How quickly can you respond to industrial facility damage in Tampa?",
    answer: "Florida Construction Specialists maintains 24/7 emergency response for industrial properties. We can typically have assessment teams on-site within 2-4 hours for Tampa Bay locations. For large industrial facilities, we pre-plan response logistics with key clients during hurricane season to ensure rapid mobilization when storms threaten."
  },
  {
    question: "Can you restore specialized industrial flooring systems?",
    answer: "Yes, we restore all types of industrial flooring including reinforced concrete slabs, epoxy coatings, polished concrete, chemical-resistant flooring, anti-static flooring for electronics manufacturing, and heavy-duty coatings for warehouse and distribution centers. We work with manufacturers' specifications to ensure proper restoration or replacement."
  },
  {
    question: "How do you handle equipment damage during restoration?",
    answer: "Industrial equipment restoration typically involves specialized vendors. We coordinate with equipment manufacturers, industrial electricians, and mechanical contractors to assess, clean, and restore or replace damaged equipment. Our role includes protecting undamaged equipment during restoration, coordinating power and utility restoration, and ensuring equipment areas are properly prepared before reinstallation."
  },
  {
    question: "What about environmental contamination from industrial facility damage?",
    answer: "Industrial facilities often contain hazardous materials, chemicals, or environmental concerns. We work with certified environmental consultants to assess contamination, develop remediation plans, and ensure proper cleanup and disposal. All work follows EPA, OSHA, and Florida DEP regulations. Proper documentation protects you from future liability."
  },
  {
    question: "Does business interruption insurance cover industrial restoration?",
    answer: "Most commercial property policies include Business Income coverage for industrial operations. This covers lost revenue during restoration, typically based on your historical income and projected sales. Extra Expense coverage pays for costs to maintain operations during restoration—like temporary facilities or expedited shipping. Coverage limits and waiting periods vary, so review your policy carefully."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/commercial-property-damage-restoration-in-tampa/", label: "Commercial Property Restoration" },
  { href: "/tampas-structural-drying-services-post-flooding/", label: "Structural Drying Services" },
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
            alt="Industrial property restoration in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Industrial Property Restoration Services in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Specialized restoration for warehouses, manufacturing facilities, and distribution centers. Minimize operational downtime with rapid response and expert industrial construction capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Emergency Response
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
              Tampa Bay's industrial sector—warehousing, manufacturing, distribution, and logistics—represents billions of dollars in economic activity and employs tens of thousands of workers. When hurricanes, floods, or other disasters damage industrial facilities, the impact extends far beyond the property itself, affecting supply chains, employment, and regional economic health. Florida Construction Specialists provides specialized industrial property restoration services designed to minimize downtime and get Tampa Bay's industrial operations back to full capacity as quickly as possible.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-800 mb-2">Industrial Downtime Costs: Every Hour Matters</h3>
                  <p className="text-red-700">For industrial operations, downtime costs can reach $10,000-$100,000+ per hour depending on facility type and operations. Quick assessment, rapid mobilization, and efficient restoration execution directly impact your bottom line. Our industrial restoration teams understand the urgency and have the capabilities to work 24/7 when needed.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Industrial Facility Types We Restore
            </h2>
            
            <p className="text-gray-600 mb-6">
              Industrial properties present unique restoration challenges compared to commercial office or retail spaces. Large clear-span structures, specialized mechanical systems, heavy equipment, and operational complexity all require contractors with specific industrial construction experience. Florida Construction Specialists has performed restoration work on virtually every type of industrial facility in the Tampa Bay region.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Factory className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Warehouses & Distribution</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Large-scale warehouse facilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Distribution and logistics centers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Cold storage and refrigerated facilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>E-commerce fulfillment centers</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Wrench className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Manufacturing Facilities</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Food and beverage processing plants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Electronics and technology manufacturing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Metal fabrication and machine shops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Pharmaceutical and medical device production</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Specialized Facilities</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Data centers and server facilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Cleanroom environments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Research and development facilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Hazardous materials storage</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Clock className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Support Facilities</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Truck terminals and loading facilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Maintenance and repair facilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Fleet garages and vehicle storage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Administrative and office components</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Industrial Restoration Services
            </h2>

            <p className="text-gray-600 mb-6">
              Industrial property restoration encompasses structural, mechanical, electrical, and operational considerations that require coordinated expertise across multiple disciplines. Our industrial restoration services address every aspect of facility damage, from immediate emergency response through final commissioning and return to operations.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Structural Restoration</h3>
            <p className="text-gray-600 mb-6">
              Large industrial structures—steel frame, pre-engineered metal buildings, tilt-up concrete, and masonry—each require specific restoration approaches. Hurricane damage often affects roof systems, wall panels, roll-up doors, and structural connections. We assess structural integrity, perform necessary repairs or replacement, and ensure restored structures meet current Florida Building Code requirements for wind resistance.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Roof System Restoration</h3>
            <p className="text-gray-600 mb-6">
              Industrial roof systems—standing seam metal, membrane (TPO, EPDM, PVC), and built-up roofing—are particularly vulnerable to hurricane damage. Even minor roof damage can lead to major water intrusion in warehouse environments. We provide emergency tarping, assess damage extent, and perform repairs ranging from localized patching to complete roof system replacement.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4">MEP Systems</h3>
            <p className="text-gray-600 mb-8">
              Industrial facilities depend on complex mechanical, electrical, and plumbing systems. Restoration must address HVAC systems, electrical distribution and controls, fire suppression systems, process piping, and specialized utility systems. We coordinate with licensed MEP contractors and equipment manufacturers to restore all building systems to operational condition.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Industrial Restoration Costs in Tampa Bay
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Service Category</th>
                    <th className="px-6 py-4 text-left">Price Range</th>
                    <th className="px-6 py-4 text-left">Factors</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Emergency Response/Securing</td>
                    <td className="px-6 py-4">$5,000 - $50,000</td>
                    <td className="px-6 py-4 text-gray-600">Facility size, damage extent</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Industrial Roof Repair</td>
                    <td className="px-6 py-4">$8 - $25/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">System type, accessibility</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Metal Building Panel Replacement</td>
                    <td className="px-6 py-4">$15 - $35/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Panel type, insulation</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Structural Steel Repair</td>
                    <td className="px-6 py-4">$50 - $150/linear ft</td>
                    <td className="px-6 py-4 text-gray-600">Member size, connection type</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Industrial Floor Restoration</td>
                    <td className="px-6 py-4">$5 - $25/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Coating type, prep required</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Roll-Up Door Replacement</td>
                    <td className="px-6 py-4">$3,000 - $15,000/door</td>
                    <td className="px-6 py-4 text-gray-600">Size, type, wind rating</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Comprehensive Facility Restoration</td>
                    <td className="px-6 py-4">$25 - $100/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Full restoration scope</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              *Prices reflect 2024 Tampa Bay market rates. Industrial restoration costs vary significantly based on facility type, damage extent, specialized systems, and operational requirements. Contact us for assessment and detailed estimate.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Insurance and FEMA Considerations for Industrial Properties
            </h2>

            <p className="text-gray-600 mb-6">
              Industrial property insurance policies are typically more complex than standard commercial policies, with coverage structures that reflect the unique risks and values involved. Key coverages for disaster restoration include Building Coverage, Business Personal Property (including equipment and inventory), Business Income, Extra Expense, and often specialized coverages for equipment breakdown or spoilage.
            </p>

            <p className="text-gray-600 mb-6">
              Business Income coverage is particularly important for industrial operations. This coverage compensates for lost revenue during the restoration period based on your documented income history. Extra Expense coverage pays for costs to maintain operations during restoration—temporary facilities, expedited shipping, overtime labor, or alternative production arrangements.
            </p>

            <p className="text-gray-600 mb-8">
              FEMA's Public Assistance program may provide additional funding for qualifying industrial facilities, particularly those providing essential services or critical infrastructure functions. We help document your restoration project to maximize eligibility for both insurance coverage and potential FEMA reimbursement.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Industrial Restoration Process
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Emergency Stabilization</h3>
                  <p className="text-gray-600">Immediate response to secure the facility, prevent further damage, and protect equipment and inventory. We establish site security, install temporary weather protection, and begin water extraction if needed.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Comprehensive Assessment</h3>
                  <p className="text-gray-600">Engineers and construction professionals assess all damage—structural, mechanical, electrical, and operational. We document everything thoroughly for insurance and develop preliminary restoration scope.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Operations Continuity Planning</h3>
                  <p className="text-gray-600">Working with your operations team, we develop restoration sequencing that minimizes operational impact. Phased restoration may allow partial operations to continue during repairs.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Insurance Coordination</h3>
                  <p className="text-gray-600">We provide detailed documentation and work directly with your insurance adjusters to ensure all damage is properly documented and your claim includes all covered items.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Restoration Execution</h3>
                  <p className="text-gray-600">Our crews execute the restoration plan, coordinating all trades and maintaining aggressive schedules to minimize downtime. 24/7 operations available when schedule demands.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">6</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Commissioning & Handover</h3>
                  <p className="text-gray-600">Restored systems are tested and commissioned, permits finalized, and the facility prepared for return to operations. We provide complete documentation of all work performed.</p>
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
              <h3 className="text-2xl font-bold mb-4">Industrial Facility Damage? We Can Help.</h3>
              <p className="mb-6 text-gray-200">
                Contact Florida Construction Specialists for rapid response to your industrial property damage. Our experienced team understands the urgency of getting your operations back online and has the capabilities to execute complex industrial restoration projects efficiently.
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
            title="Related Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Tampa Bay's Industrial Restoration Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for professional industrial property restoration services throughout Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Assessment
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
