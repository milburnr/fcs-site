import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, HardHat, Trash2, FileCheck } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa Disaster-Related Demolition Services | Emergency Commercial Demolition",
  description: "Professional disaster-related demolition services in Tampa. Emergency structural demolition, hurricane debris removal, and commercial property clearing. Licensed, insured, OSHA-compliant contractors.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa's Disaster Related Demolition Services", href: "/tampas-disaster-related-demolition-services/" },
];

const faqs = [
  {
    question: "How quickly can you respond to emergency demolition needs after a disaster in Tampa?",
    answer: "Florida Construction Specialists maintains 24/7 emergency response capability throughout Tampa Bay. For declared disasters, we can typically have assessment teams on-site within 2-4 hours and begin demolition work within 24-48 hours, depending on site accessibility and permit requirements. We pre-stage equipment during hurricane season to ensure rapid deployment."
  },
  {
    question: "What permits are required for disaster-related demolition in Tampa?",
    answer: "Emergency demolition in Tampa typically requires permits from Hillsborough County or the City of Tampa, though expedited permitting processes exist for declared emergencies. Required documentation includes structural engineer assessments, asbestos surveys for buildings constructed before 1980, utility disconnection verification, and EPA notifications for regulated materials. We handle all permitting requirements."
  },
  {
    question: "Does insurance cover disaster-related demolition costs?",
    answer: "Most commercial property insurance policies cover demolition costs under 'debris removal' provisions, typically limited to 25% of the property damage claim amount. Florida law requires this coverage in standard policies. Additional 'ordinance or law' coverage can pay for demolition required by building codes. We work directly with insurance adjusters to document and maximize your coverage."
  },
  {
    question: "What happens to materials from disaster demolition?",
    answer: "We follow EPA and Florida DEP regulations for disaster debris management. Recyclable materials (metals, concrete, clean wood) are processed at certified facilities. Hazardous materials require special handling and disposal. We provide detailed waste manifests documenting proper disposal, which is often required for FEMA reimbursement and insurance documentation."
  },
  {
    question: "Can you perform selective demolition to preserve undamaged portions of a building?",
    answer: "Yes, selective demolition is often the most cost-effective approach for partially damaged commercial buildings. Our structural engineers assess which portions can be safely preserved, and our crews use precision demolition techniques to remove damaged sections while protecting adjacent structures. This approach can significantly reduce reconstruction costs and timelines."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Restoration" },
  { href: "/complete-property-overhaul-after-disasters-in-tampa/", label: "Complete Property Overhaul" },
  { href: "/structural-integrity-evaluation-in-tampa-post-disaster/", label: "Structural Integrity Evaluation" },
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
            alt="Emergency disaster demolition services in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa's Disaster-Related Demolition Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Emergency commercial demolition and debris removal for hurricane, flood, and storm-damaged properties. Licensed contractors providing safe, compliant demolition throughout Tampa Bay.
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
              When hurricanes, floods, or other disasters strike Tampa Bay, damaged commercial structures often require immediate demolition to protect public safety and enable reconstruction. Florida Construction Specialists provides comprehensive disaster-related demolition services, from emergency structural removal to controlled selective demolition of partially damaged buildings. Our experienced crews understand the urgency of post-disaster situations and the complex regulatory requirements governing demolition in Florida.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-800 mb-2">24/7 Emergency Demolition Response</h3>
                  <p className="text-red-700">Storm-damaged structures can pose immediate dangers including collapse risk, electrical hazards, and gas leaks. If you have a commercial property with structural damage, contact us immediately. Our emergency team can assess the situation and begin stabilization or demolition within hours when public safety is at risk.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Commercial Disaster Demolition Services
            </h2>
            
            <p className="text-gray-600 mb-6">
              Disaster-related demolition differs significantly from standard commercial demolition. Time pressure, structural instability, hazardous materials exposure, and complex insurance and regulatory requirements all demand specialized expertise. Florida Construction Specialists has performed hundreds of disaster demolition projects following major storms, developing streamlined processes that ensure safety, compliance, and rapid completion.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <HardHat className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Emergency Structural Demolition</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Immediate response for collapse-risk structures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Coordination with fire, police, and utility services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Expedited permitting through emergency protocols</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Public safety barriers and traffic control</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Trash2 className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Selective Demolition</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Precision removal of damaged building sections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Protection of salvageable structural elements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Temporary shoring and weather protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Preparation for reconstruction integration</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <FileCheck className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Interior Demolition & Gut-Out</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Water-damaged interior removal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Fire and smoke-affected material extraction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Mold-contaminated material abatement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Structural drying preparation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <HardHat className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Complete Structure Demolition</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Total building removal when repair isn't viable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Foundation assessment and removal if needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Site clearing and grading for reconstruction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Underground utility location and protection</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Florida Regulatory Compliance for Disaster Demolition
            </h2>

            <p className="text-gray-600 mb-6">
              Disaster-related demolition in Florida must comply with numerous federal, state, and local regulations, even when performed under emergency conditions. Florida Construction Specialists maintains all required licenses, certifications, and insurance coverage to perform commercial demolition legally and safely in Hillsborough, Pinellas, Pasco, and Polk counties.
            </p>

            <p className="text-gray-600 mb-6">
              Buildings constructed before 1980 require asbestos surveys before demolition under EPA regulations (40 CFR Part 61, Subpart M). Florida DEP requires notification 10 days before demolition of buildings containing regulated asbestos-containing materials (RACM), though emergency provisions can reduce this timeframe. Our certified inspectors can perform rapid assessments and coordinate expedited abatement when necessary.
            </p>

            <p className="text-gray-600 mb-8">
              FEMA's Public Assistance Program requires specific documentation for disaster demolition reimbursement eligibility. We maintain detailed records including photo documentation, debris tracking manifests, equipment logs, and disposal receipts that meet FEMA audit requirements. This documentation is equally valuable for insurance claim support.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Disaster Demolition Costs in Tampa Bay
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Service Type</th>
                    <th className="px-6 py-4 text-left">Price Range</th>
                    <th className="px-6 py-4 text-left">Factors Affecting Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Emergency Assessment</td>
                    <td className="px-6 py-4">$500 - $2,500</td>
                    <td className="px-6 py-4 text-gray-600">Building size, accessibility, urgency</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Interior Gut-Out</td>
                    <td className="px-6 py-4">$4 - $12/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Contamination level, materials present</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Selective Structural Demolition</td>
                    <td className="px-6 py-4">$12 - $35/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Structural complexity, shoring needs</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Complete Building Demolition</td>
                    <td className="px-6 py-4">$8 - $25/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Construction type, hazmat presence</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Debris Removal & Disposal</td>
                    <td className="px-6 py-4">$150 - $500/ton</td>
                    <td className="px-6 py-4 text-gray-600">Material type, disposal requirements</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Asbestos Abatement</td>
                    <td className="px-6 py-4">$15 - $75/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Material type, quantity, accessibility</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Emergency Premium (after hours)</td>
                    <td className="px-6 py-4">+25% - 50%</td>
                    <td className="px-6 py-4 text-gray-600">Time sensitivity, resource availability</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              *Prices reflect 2024 Tampa Bay market rates. Emergency demolition during widespread disaster events may face price increases due to equipment and labor demand. Contact us for current pricing and availability.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Insurance and FEMA Reimbursement Support
            </h2>

            <p className="text-gray-600 mb-6">
              Understanding insurance coverage and FEMA reimbursement processes can significantly impact your recovery from disaster-related demolition costs. Florida commercial property policies typically include "debris removal" coverage that pays for demolition and disposal of damaged structures. This coverage is usually limited to 25% of the direct physical damage claim, though higher limits can be purchased.
            </p>

            <p className="text-gray-600 mb-6">
              "Ordinance or law" coverage is equally important for disaster demolition. If local building codes require demolition of undamaged portions of a building to comply with current standards, this coverage pays those costs. Florida Statute 627.7011 requires insurers to offer this coverage, and commercial property owners should ensure adequate limits are in place.
            </p>

            <p className="text-gray-600 mb-8">
              For FEMA-declared disasters, the Public Assistance Program can reimburse up to 75% of eligible demolition costs for properties meeting certain criteria. Florida typically covers the 25% local match for qualifying projects. Our team has extensive experience documenting demolition projects to maximize FEMA reimbursement eligibility.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Disaster Demolition Process
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Emergency Assessment</h3>
                  <p className="text-gray-600">Our structural engineers assess the damage, identify immediate safety hazards, and determine whether emergency demolition is required. We coordinate with local authorities and utilities to ensure safe site access.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Documentation & Permitting</h3>
                  <p className="text-gray-600">We photograph and document the pre-demolition condition for insurance and FEMA purposes, conduct required environmental surveys, and secure necessary permits through emergency or standard processes.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Site Preparation</h3>
                  <p className="text-gray-600">We establish safety perimeters, disconnect and cap utilities, install erosion controls, and set up debris management areas. Adjacent property protection is installed where necessary.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Demolition Execution</h3>
                  <p className="text-gray-600">Our crews perform demolition using appropriate methods for the structure and situation—from careful selective demolition to complete mechanical demolition—while maintaining strict safety protocols.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Debris Management & Site Clearing</h3>
                  <p className="text-gray-600">Materials are sorted, recycled where possible, and disposed of at licensed facilities. We provide complete waste manifests and disposal documentation. The site is graded and prepared for reconstruction or left clean and stable.</p>
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
              Why Choose Florida Construction Specialists for Disaster Demolition
            </h2>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists has provided disaster-related demolition services throughout Tampa Bay for over twenty years. We've responded to every major hurricane affecting our region and developed the expertise, equipment, and relationships necessary to execute complex demolition projects safely and efficiently under challenging post-disaster conditions.
            </p>

            <p className="text-gray-600 mb-8">
              Our demolition crews hold OSHA 30-Hour Construction Safety certifications, and our supervisors are trained in FEMA's National Incident Management System (NIMS). We maintain pre-positioned equipment and materials to ensure rapid response when disasters strike, and our long-standing relationships with local authorities enable us to navigate emergency permitting processes quickly.
            </p>

            <div className="bg-brand-green-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Need Emergency Demolition Services?</h3>
              <p className="mb-6 text-gray-200">
                If you have a storm-damaged commercial property requiring demolition, contact Florida Construction Specialists immediately. Our 24/7 emergency response team can assess your situation and begin work rapidly while ensuring full compliance with insurance and regulatory requirements.
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
            title="Related Disaster Recovery Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Tampa Bay's Trusted Disaster Demolition Contractor
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for professional disaster-related demolition services throughout Tampa Bay.
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
