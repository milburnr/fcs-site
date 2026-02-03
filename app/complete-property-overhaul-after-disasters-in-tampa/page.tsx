import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, RefreshCw, Building2, Hammer, FileCheck } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Complete Property Overhaul After Disasters Tampa",
  description: "Complete property overhaul services after disasters in Tampa. Total commercial building reconstruction, comprehensive renovation, and ground-up restoration following hurricane and storm damage.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Complete Property Overhaul After Disasters in Tampa", href: "/complete-property-overhaul-after-disasters-in-tampa/" },
];

const faqs = [
  {
    question: "When does a property need complete overhaul versus restoration?",
    answer: "Complete overhaul is typically warranted when damage exceeds 50-60% of building value, structural integrity is compromised beyond economical repair, building systems (electrical, plumbing, HVAC) require complete replacement, code compliance upgrades would cost more than reconstruction, or the building's layout no longer suits operational needs. Our engineers assess these factors to recommend the most cost-effective approach."
  },
  {
    question: "How long does a complete commercial property overhaul take?",
    answer: "Complete overhaul timelines depend on building size and complexity. Small commercial buildings (5,000-15,000 sq ft) typically take 4-8 months. Medium commercial (15,000-50,000 sq ft) requires 8-14 months. Large or complex properties may take 12-24 months. We develop detailed schedules during planning and provide regular progress updates throughout construction."
  },
  {
    question: "Will insurance cover complete property overhaul?",
    answer: "Insurance coverage for complete overhaul depends on policy terms and damage circumstances. Policies with replacement cost coverage can fund reconstruction to current code standards. Florida law requires insurers to pay for code upgrades when repairing damage (Section 627.7011). If demolition is required due to code requirements, Ordinance or Law coverage pays these costs. We help maximize your coverage through thorough documentation."
  },
  {
    question: "Can we upgrade or improve the property during overhaul?",
    answer: "Absolutely—post-disaster reconstruction is an ideal opportunity for improvements. Insurance covers restoration to pre-loss condition; improvements beyond that are owner-funded. Common upgrades include hurricane-resistant construction, improved layouts, energy-efficient systems, ADA compliance enhancements, and modernized finishes. Strategic improvements during overhaul are often more cost-effective than separate renovation projects."
  },
  {
    question: "What happens to operations during complete property overhaul?",
    answer: "Complete overhaul typically requires full relocation of operations. Business Interruption insurance covers lost income during this period, and Extra Expense coverage pays for temporary facilities, equipment rental, and other costs to maintain operations. We help coordinate timing and provide realistic schedules to support your business continuity planning."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/tampas-disaster-related-demolition-services/", label: "Demolition Services" },
  { href: "/hurricane-proof-reconstruction-services-in-tampa/", label: "Hurricane-Proof Construction" },
  { href: "/commercial-property-damage-restoration-in-tampa/", label: "Commercial Restoration" },
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
            alt="Complete property overhaul after disasters in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Complete Property Overhaul After Disasters in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            When disaster damage is extensive, complete property overhaul offers a path to a better building. Total reconstruction services for Tampa Bay commercial properties damaged beyond economical repair.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Discuss Your Project
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
              Some disaster damage is too extensive for conventional restoration. When hurricanes, fires, or floods cause catastrophic damage to Tampa Bay commercial properties, complete property overhaul—demolition and reconstruction—may be the most practical and cost-effective path forward. Florida Construction Specialists provides comprehensive overhaul services that transform disaster-damaged properties into modern, code-compliant, and often improved buildings that serve owners and tenants better than the original structures.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <RefreshCw className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-blue-800 mb-2">Opportunity in Adversity</h3>
                  <p className="text-blue-700">While extensive disaster damage is devastating, complete overhaul creates opportunities impossible with renovation: optimized layouts, modern building systems, enhanced hurricane resistance, energy efficiency, and full current code compliance. Many property owners find their reconstructed buildings significantly outperform the originals.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              When Complete Overhaul Makes Sense
            </h2>
            
            <p className="text-gray-600 mb-6">
              The decision between restoration and complete overhaul requires careful analysis of damage extent, building condition, code requirements, and economic factors. Florida Construction Specialists provides detailed assessments that help property owners make informed decisions about the best path forward for their specific situations.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Factors Favoring Complete Overhaul</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Damage exceeds 50-60% of building value</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Structural system compromised</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Building already outdated or obsolete</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Code upgrades extremely costly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Layout doesn't serve current needs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Overhaul Benefits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Modern, efficient building systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Full current code compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Enhanced hurricane resistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Optimized layout and functionality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>New warranties on all systems</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Complete Property Overhaul Services
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Building2 className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Pre-Construction Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Damage assessment and feasibility analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Cost-benefit comparison: restoration vs. rebuild</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Design and engineering services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Permitting and regulatory compliance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Hammer className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Demolition Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Selective or complete demolition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Hazardous material abatement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Foundation assessment and preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Site clearing and debris removal</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <RefreshCw className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Reconstruction</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Foundation and structural construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Building envelope (roof, walls, windows)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Complete MEP systems installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Interior build-out and finishes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <FileCheck className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Project Completion</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Final inspections and approvals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Certificate of Occupancy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Commissioning and systems training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Warranty documentation</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Florida Building Code and Hurricane-Resistant Construction
            </h2>

            <p className="text-gray-600 mb-6">
              Complete property overhaul provides the opportunity to build with current Florida Building Code standards, which are among the most stringent in the nation for hurricane resistance. The 2023 Florida Building Code (8th Edition) requires enhanced wind resistance, impact protection, and structural connections that significantly exceed standards from even 10-15 years ago.
            </p>

            <p className="text-gray-600 mb-8">
              For Tampa Bay properties (150 mph design wind speed zone), new construction must include continuous load paths from roof to foundation, enhanced roof-to-wall connections, impact-resistant openings or protection systems, and reinforced structural elements. These requirements create buildings far more likely to survive major hurricanes with minimal damage.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Complete Overhaul Costs in Tampa Bay
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Project Phase</th>
                    <th className="px-6 py-4 text-left">Price Range</th>
                    <th className="px-6 py-4 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Demolition</td>
                    <td className="px-6 py-4">$8 - $25/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Complete building removal</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Site Preparation</td>
                    <td className="px-6 py-4">$3 - $10/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Clearing, grading, utilities</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Office Building Construction</td>
                    <td className="px-6 py-4">$150 - $300/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Shell through tenant finish</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Retail Construction</td>
                    <td className="px-6 py-4">$125 - $250/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Varies by tenant type</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Industrial/Warehouse</td>
                    <td className="px-6 py-4">$75 - $150/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Depending on finish level</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Medical/Specialty</td>
                    <td className="px-6 py-4">$250 - $450/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Higher finish and system requirements</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              *Prices reflect 2024 Tampa Bay market rates and include typical site work, structure, building systems, and standard finishes. Actual costs vary based on design, specifications, site conditions, and market conditions. Contact us for detailed project estimates.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Insurance Coverage for Complete Overhaul
            </h2>

            <p className="text-gray-600 mb-6">
              Insurance coverage for complete overhaul depends on your policy type and damage circumstances. Replacement Cost policies provide the best coverage for reconstruction, paying to rebuild with similar materials and quality to current standards. Actual Cash Value policies deduct depreciation and may not fully fund reconstruction.
            </p>

            <p className="text-gray-600 mb-6">
              Ordinance or Law coverage is crucial for complete overhaul projects. This coverage pays for demolition costs required by code, the increased cost to rebuild to current code standards, and the value of undamaged portions that must be demolished due to ordinance requirements. Florida requires insurers to offer this coverage, but limits vary.
            </p>

            <p className="text-gray-600 mb-8">
              Florida law (Section 627.7011) requires insurers to pay for code-required upgrades when repairing hurricane damage. This can fund significant improvements during reconstruction. Our team helps document code requirements and upgrade costs to maximize your insurance recovery.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Complete Overhaul Process
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Assessment & Analysis</h3>
                  <p className="text-gray-600">We thoroughly assess damage extent, evaluate repair feasibility, and develop cost comparisons between restoration and reconstruction. This analysis includes code compliance requirements, operational improvements, and long-term value considerations.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Insurance Coordination</h3>
                  <p className="text-gray-600">We document all damage and code requirements, prepare detailed estimates, and work with your insurance company to establish coverage for the complete overhaul approach. This includes Ordinance or Law claims and code upgrade documentation.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Design Development</h3>
                  <p className="text-gray-600">Working with architects and engineers, we develop designs that meet your operational needs, comply with current codes, and incorporate desired improvements. Design decisions balance insurance coverage, owner investment, and long-term value.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Demolition & Site Preparation</h3>
                  <p className="text-gray-600">Licensed demolition crews remove the damaged structure, manage hazardous materials properly, and prepare the site for new construction. We assess and preserve usable foundation elements when appropriate.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">New Construction</h3>
                  <p className="text-gray-600">Our construction teams build your new facility to current code standards, incorporating hurricane-resistant features, modern systems, and your design requirements. Regular progress updates keep you informed throughout.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">6</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Completion & Occupancy</h3>
                  <p className="text-gray-600">Final inspections, commissioning, and Certificate of Occupancy complete the project. We provide comprehensive documentation, warranties, and training on building systems.</p>
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
              <h3 className="text-2xl font-bold mb-4">Considering Complete Property Overhaul?</h3>
              <p className="mb-6 text-gray-200">
                If your Tampa Bay commercial property has extensive disaster damage, contact Florida Construction Specialists to discuss whether complete overhaul is the right approach. We'll provide honest assessment, thorough analysis, and expert guidance to help you make the best decision for your property and business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Schedule Consultation
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
            Tampa Bay Complete Property Overhaul Specialists
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for complete property overhaul services following disaster damage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Project Assessment
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
