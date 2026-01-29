import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, Building2, Shield, Clock, FileCheck } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Commercial Property Damage Restoration Tampa | Office & Retail Building Repair",
  description: "Expert commercial property damage restoration in Tampa. Office buildings, retail centers, and commercial facilities restored after hurricane, flood, fire, and storm damage. Insurance claim specialists.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial Property Damage Restoration in Tampa", href: "/commercial-property-damage-restoration-in-tampa/" },
];

const faqs = [
  {
    question: "How soon can commercial restoration begin after damage occurs?",
    answer: "Emergency mitigation can begin within hours—we provide 24/7 response for Tampa Bay commercial properties. Full restoration work typically begins within 1-2 weeks, depending on insurance approval and permitting. We start with emergency services (water extraction, board-up, tarping) immediately to prevent additional damage while the full restoration scope is developed."
  },
  {
    question: "Can our business continue operating during restoration?",
    answer: "Often yes, through careful phasing and coordination. We develop restoration plans that allow partial occupancy when safe and practical. This might include working in sections, performing noisy work after hours, or establishing temporary barriers. For some damage types (structural, extensive water damage, mold), temporary relocation may be necessary—your Business Interruption insurance typically covers this."
  },
  {
    question: "What types of commercial properties do you restore?",
    answer: "We restore all commercial property types: office buildings (single and multi-tenant), retail centers and standalone stores, restaurants and hospitality venues, medical and dental offices, professional service buildings, mixed-use properties, and specialty commercial facilities. Each property type has unique requirements, and our experience ensures appropriate restoration approaches."
  },
  {
    question: "How do you handle tenant coordination in multi-tenant buildings?",
    answer: "For multi-tenant properties, we work with property managers to coordinate access, minimize disruption, and communicate progress to all affected parties. We can work with individual tenant build-out insurance for interior restoration while coordinating with building-level restoration. Clear communication and scheduling help maintain tenant relationships during difficult circumstances."
  },
  {
    question: "What documentation do you provide for insurance claims?",
    answer: "We provide comprehensive claim documentation including detailed photo documentation of all damage, Xactimate estimates matching insurance industry standards, daily work logs and progress reports, moisture readings and environmental reports, permits, inspections, and code compliance documentation, and final completion reports with warranty information. This documentation supports fair claim settlement and protects you in any disputes."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/property-damage-assessment-for-insurance-claims-in-tampa/", label: "Damage Assessment Services" },
  { href: "/tampa-insurance-restoration-for-hurricane-damage/", label: "Insurance Restoration" },
  { href: "/post-disaster-interior-restoration-in-tampa/", label: "Interior Restoration" },
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
            alt="Commercial property damage restoration in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Commercial Property Damage Restoration in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Full-service commercial property restoration for office buildings, retail centers, and business facilities. Expert hurricane, flood, fire, and storm damage restoration throughout Tampa Bay.
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
              Tampa Bay's commercial property owners face significant disaster risk, with hurricane season bringing potential for catastrophic damage every year from June through November. When storms, floods, fires, or other disasters damage your commercial property, rapid and professional restoration is essential to minimize business interruption, protect your investment, and get tenants and operations back to normal. Florida Construction Specialists provides comprehensive commercial property damage restoration services throughout the Tampa Bay region, from emergency response through complete reconstruction.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Commercial Property Insurance Timelines</h3>
                  <p className="text-amber-700">Florida law requires prompt claim notification. Under Section 627.70131, insurers must acknowledge claims within 14 days and pay or deny within 90 days. Document all damage immediately, notify your insurer, and engage a professional restoration contractor to protect your interests and meet required timelines.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Commercial Property Types We Restore
            </h2>
            
            <p className="text-gray-600 mb-6">
              Commercial property damage restoration requires understanding the unique characteristics, systems, and requirements of different building types. Florida Construction Specialists has extensive experience restoring every type of commercial property in the Tampa Bay market, from small professional offices to large multi-tenant retail centers.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Building2 className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Office Buildings</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Single-tenant professional offices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Multi-tenant office buildings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Medical and dental offices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Corporate headquarters facilities</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Retail Properties</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Shopping centers and strip malls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Standalone retail stores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Restaurants and food service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Service-based retail locations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Clock className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Hospitality & Recreation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Hotels and motels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Event venues and banquet halls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Fitness centers and gyms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Entertainment facilities</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <FileCheck className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Specialty Commercial</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Educational facilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Religious institutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Mixed-use developments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Flex space and business parks</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Types of Commercial Property Damage We Restore
            </h2>

            <p className="text-gray-600 mb-6">
              Commercial properties face multiple damage risks, and each type requires specific restoration approaches, equipment, and expertise. Florida Construction Specialists is equipped to handle all common commercial damage types:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-2">Hurricane & Wind Damage</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Roof damage and loss</li>
                  <li>• Broken windows and storefronts</li>
                  <li>• Structural damage</li>
                  <li>• Wind-driven rain intrusion</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-2">Flood & Water Damage</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Storm surge flooding</li>
                  <li>• Flash flood damage</li>
                  <li>• Plumbing failures</li>
                  <li>• Roof leak damage</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-2">Fire & Smoke Damage</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Structural fire damage</li>
                  <li>• Smoke and soot damage</li>
                  <li>• Water damage from suppression</li>
                  <li>• Electrical system damage</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Commercial Property Restoration Costs in Tampa Bay
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Restoration Service</th>
                    <th className="px-6 py-4 text-left">Price Range</th>
                    <th className="px-6 py-4 text-left">Variables</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Emergency Board-Up/Tarping</td>
                    <td className="px-6 py-4">$500 - $5,000</td>
                    <td className="px-6 py-4 text-gray-600">Opening size, quantity</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Water Damage Restoration</td>
                    <td className="px-6 py-4">$5 - $15/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Damage category, materials</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Commercial Roof Repair</td>
                    <td className="px-6 py-4">$8 - $30/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">System type, damage extent</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Storefront/Glass Replacement</td>
                    <td className="px-6 py-4">$100 - $350/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Glass type, framing system</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Interior Restoration</td>
                    <td className="px-6 py-4">$45 - $125/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Finish level, damage severity</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Fire Damage Restoration</td>
                    <td className="px-6 py-4">$50 - $200/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Damage extent, cleaning needs</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Complete Building Restoration</td>
                    <td className="px-6 py-4">$75 - $250/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Building type, damage scope</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              *Prices reflect 2024 Tampa Bay market rates. Commercial restoration costs vary significantly based on building type, damage extent, finish levels, and operational requirements. Contact us for detailed assessment and estimate.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Insurance Restoration for Commercial Properties
            </h2>

            <p className="text-gray-600 mb-6">
              Commercial property insurance claims are significantly more complex than residential claims, typically involving multiple coverage types, higher dollar amounts, and more sophisticated documentation requirements. Understanding your policy and working with an experienced restoration contractor helps ensure you receive fair compensation for your loss.
            </p>

            <p className="text-gray-600 mb-6">
              Key commercial property coverages include Building Coverage (structure and building components), Business Personal Property (furniture, equipment, inventory), Business Income (lost revenue during restoration), Extra Expense (costs to maintain operations), and often Ordinance or Law coverage (code-required upgrades). Each coverage has its own limits, deductibles, and documentation requirements.
            </p>

            <p className="text-gray-600 mb-8">
              Florida law (Section 627.7011, F.S.) requires insurers to pay for code-required upgrades when repairing storm damage. For older Tampa Bay commercial buildings, this can represent significant additional coverage—current Florida Building Code often requires enhanced wind resistance, accessibility improvements, and life safety upgrades that original construction didn't include.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Commercial Restoration Process
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Emergency Response</h3>
                  <p className="text-gray-600">24/7 emergency services secure your property and prevent additional damage. Water extraction, board-up, tarping, and debris removal protect your building while comprehensive assessment and restoration planning proceed.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Damage Assessment & Documentation</h3>
                  <p className="text-gray-600">Our team thoroughly documents all damage with photos, measurements, and detailed notes. This assessment supports your insurance claim and establishes the scope of restoration work needed.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Insurance Coordination</h3>
                  <p className="text-gray-600">We prepare detailed estimates using Xactimate, meet with adjusters on-site, and provide all documentation needed for claim processing. Our experience with commercial claims helps ensure all damage is properly identified and included.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Restoration Planning</h3>
                  <p className="text-gray-600">We develop a comprehensive restoration plan including scope, timeline, phasing, and coordination requirements. For occupied buildings, we plan work to minimize operational disruption.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Restoration Execution</h3>
                  <p className="text-gray-600">Our experienced crews perform all restoration work—structural repairs, roofing, building envelope, interiors, and MEP systems—with careful attention to quality and schedule.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">6</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Completion & Documentation</h3>
                  <p className="text-gray-600">Final inspections, permit closures, and comprehensive documentation complete the project. We provide all records needed for your insurance file, property records, and future reference.</p>
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
              Tampa Bay's Commercial Restoration Partner
            </h2>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists has restored millions of square feet of commercial property throughout Tampa Bay following hurricanes, floods, fires, and other disasters. Our commercial construction expertise, combined with disaster restoration specialization, enables us to handle complex projects that many restoration companies cannot.
            </p>

            <p className="text-gray-600 mb-8">
              We understand that commercial property damage affects more than just a building—it impacts businesses, employees, tenants, and communities. Our goal is always to restore your property efficiently and professionally, minimizing the disruption and helping you return to normal operations as quickly as possible.
            </p>

            <div className="bg-brand-green-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Commercial Property Damaged?</h3>
              <p className="mb-6 text-gray-200">
                Contact Florida Construction Specialists for professional commercial property damage restoration. We'll assess your damage, coordinate with your insurance, and develop a restoration plan that protects your investment and minimizes business interruption.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Get Restoration Assessment
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
            Tampa Bay Commercial Property Restoration Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for professional commercial property restoration throughout Tampa Bay.
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
