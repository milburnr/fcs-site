import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, AlertTriangle, Clock, Shield, Wrench, Award } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Top Commercial Contractor for Roof Repair and Replacement Tampa | Expert Roofers",
  description: "Tampa's top commercial contractor for roof repair and replacement. Emergency repairs, complete re-roofing, hurricane damage restoration. Licensed, insured, manufacturer-certified.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Top Commercial Contractor for Roof Repair and Replacement", href: "/top-commercial-contractor-for-roof-repair-and-replacement/" },
];

const faqs = [
  {
    question: "How do I know if my commercial roof needs repair or replacement?",
    answer: "Several factors determine whether repair or replacement is appropriate: roof age relative to expected lifespan, extent and location of damage, frequency of repairs needed, presence of structural issues, and condition of insulation and deck. Generally, if repair costs exceed 30-40% of replacement cost, or if the roof has exceeded 75% of its expected life, replacement often makes more economic sense. We provide honest assessments to help you make the best decision."
  },
  {
    question: "How quickly can you respond to emergency roof repairs?",
    answer: "For emergency situations—active leaks during rain, storm damage, or safety hazards—we prioritize rapid response, typically within hours for Tampa Bay locations. Our crews carry materials for common repairs and emergency tarping. For non-emergency repairs, we typically schedule within 1-2 weeks depending on scope and weather conditions."
  },
  {
    question: "Can you match my existing roofing material for repairs?",
    answer: "In most cases, yes. We work with all major commercial roofing systems and maintain relationships with manufacturers and suppliers for matching materials. For older systems where exact matches aren't available, we source the closest compatible materials or recommend section replacement with proper transitions. We'll never compromise waterproofing integrity for appearance."
  },
  {
    question: "What warranties do you offer on roof repairs and replacements?",
    answer: "New roof installations include manufacturer material warranties (typically 10-30 years depending on system) plus our workmanship warranty. For repairs, we warranty our work and materials for the repair scope. As certified installers for major manufacturers, we can offer enhanced warranty programs including No Dollar Limit (NDL) warranties on qualifying installations."
  },
  {
    question: "Will my business need to close during roof replacement?",
    answer: "Rarely. Most commercial roof replacements proceed while the building remains occupied and operational. We plan work to minimize disruption—controlling noise during business hours, protecting entrances and parking areas, and coordinating with your schedule for sensitive operations. Phased installation can isolate work areas if needed."
  }
];

const internalLinks = [
  { href: "/commercial-roofing-services-in-tampa/", label: "Commercial Roofing Services" },
  { href: "/roof-damage-restoration-and-insurance-claims-in-tampa/", label: "Storm Damage & Insurance" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/contact/", label: "Schedule Roof Assessment" },
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
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Commercial roof repair and replacement in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Top Commercial Contractor for Roof Repair and Replacement in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            From emergency leak repairs to complete commercial re-roofing, Florida Construction Specialists delivers expert solutions that protect Tampa Bay businesses. Licensed, insured, and manufacturer-certified.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Request Roof Assessment
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
              When your commercial roof develops problems, choosing the right contractor makes all the difference between a lasting solution and recurring issues. Tampa Bay's combination of hurricane threats, intense UV exposure, and daily summer storms demands contractors with specific expertise in Florida commercial roofing. Florida Construction Specialists has built our reputation on delivering roof repairs and replacements that stand up to everything our climate delivers.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-800 mb-2">Roof Emergency? We Respond Fast.</h3>
                  <p className="text-red-700">Active leaks cause progressive damage to insulation, ceilings, inventory, and equipment. Don't wait—call us immediately for emergency tarping and repairs. We prioritize emergency response for Tampa Bay commercial properties experiencing active water intrusion.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Commercial Roof Repair Services
            </h2>

            <p className="text-gray-600 mb-6">
              Many commercial roof problems can be effectively repaired without full replacement—when caught early and addressed properly. Our repair services restore roof integrity while protecting your investment in the existing system. We approach every repair with the goal of providing lasting solutions, not temporary patches that will fail again.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Wrench className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Leak Detection & Repair</h3>
                <p className="text-gray-600">
                  Finding the source of commercial roof leaks requires systematic investigation—water can travel far from entry point before appearing inside. We use infrared scanning, flood testing, and detailed visual inspection to identify leak sources. Repairs address root causes, not just symptoms, preventing recurrence.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Wrench className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Membrane Repairs</h3>
                <p className="text-gray-600">
                  Punctures, tears, and seam failures in TPO, EPDM, PVC, and modified bitumen systems require proper repair techniques specific to each material. We use manufacturer-approved methods and materials, ensuring repairs integrate properly with the existing system and maintain warranty coverage.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Wrench className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Flashing & Penetration Repairs</h3>
                <p className="text-gray-600">
                  Roof penetrations—HVAC units, vents, pipes, drains—are common leak sources. Flashing deterioration, improper original installation, or equipment settling can all compromise these critical details. We repair and upgrade flashings with proper materials and techniques.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Wrench className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Metal Roof Repairs</h3>
                <p className="text-gray-600">
                  Metal roofing issues include fastener failure, seam separation, panel damage, and coating deterioration. Proper repairs restore both waterproofing and structural integrity. We address underlying causes—often thermal movement or inadequate original fastening—to prevent recurrence.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Wrench className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Storm Damage Repairs</h3>
                <p className="text-gray-600">
                  Hurricane and tropical storm damage requires prompt response to prevent secondary water damage. We provide emergency tarping, thorough damage assessment, and permanent repairs. Our documentation supports insurance claims for covered damage.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Wrench className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Ponding Water Solutions</h3>
                <p className="text-gray-600">
                  Standing water accelerates roof deterioration and adds structural load. We address ponding through drain improvements, tapered insulation systems, or strategic repairs that restore proper drainage—protecting your roof from premature failure.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Complete Commercial Roof Replacement
            </h2>

            <p className="text-gray-600 mb-6">
              When repairs no longer make economic sense, or when roofs have reached end of life, complete replacement restores full protection with modern, high-performance systems. Today's commercial roofing materials offer better durability, energy efficiency, and hurricane resistance than systems installed even a decade ago. Replacement is an opportunity to upgrade performance, not just restore the status quo.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h3 className="font-bold text-blue-800 mb-2">When to Replace vs. Repair</h3>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span><strong>Roof age:</strong> Systems past 75% of expected lifespan may not justify major repairs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span><strong>Repair frequency:</strong> Multiple repairs annually indicate systemic failure</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span><strong>Widespread damage:</strong> When more than 25-30% of roof area needs repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span><strong>Energy costs:</strong> Old, poorly insulated roofs waste cooling dollars</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span><strong>Code requirements:</strong> Major repairs may trigger code compliance upgrades</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Our Replacement Process
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-brand-green-dark mb-1">Comprehensive Assessment</h4>
                  <p className="text-gray-600">We evaluate existing conditions including deck integrity, insulation, drainage, and structural capacity. Core cuts and moisture scans identify hidden issues that must be addressed during replacement.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-brand-green-dark mb-1">System Recommendation</h4>
                  <p className="text-gray-600">Based on building use, budget, and performance requirements, we recommend appropriate systems with detailed specifications. You receive multiple options with clear cost/benefit analysis.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-brand-green-dark mb-1">Engineered Design</h4>
                  <p className="text-gray-600">Florida Building Code requires engineered attachment for commercial roofs in our wind zone. We provide stamped drawings specifying fastening patterns, edge details, and system components that meet code requirements for your specific location.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h4 className="font-bold text-brand-green-dark mb-1">Professional Installation</h4>
                  <p className="text-gray-600">Our trained crews handle complete installation including tear-off, deck repair, insulation, membrane installation, and all details. Work proceeds systematically to maintain weather protection throughout the project.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h4 className="font-bold text-brand-green-dark mb-1">Inspection & Warranty</h4>
                  <p className="text-gray-600">Quality control inspections occur throughout the project, with final walkthrough upon completion. You receive manufacturer warranties on materials plus our workmanship guarantee.</p>
                </div>
              </div>
            </div>

            {/* Cost Table */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Commercial Roof Repair & Replacement Costs
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Service</th>
                    <th className="px-6 py-4 text-left">Typical Cost Range</th>
                    <th className="px-6 py-4 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Emergency Leak Repair</td>
                    <td className="px-6 py-4">$300 - $1,500</td>
                    <td className="px-6 py-4 text-gray-600">Single leak source</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Membrane Patch Repair</td>
                    <td className="px-6 py-4">$250 - $800</td>
                    <td className="px-6 py-4 text-gray-600">Per repair area</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Flashing Repair/Replace</td>
                    <td className="px-6 py-4">$500 - $2,500</td>
                    <td className="px-6 py-4 text-gray-600">Per penetration</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Section Replacement</td>
                    <td className="px-6 py-4">$8 - $15/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Localized areas</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Complete Re-roof (TPO)</td>
                    <td className="px-6 py-4">$6 - $12/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Including tear-off</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Complete Re-roof (Metal)</td>
                    <td className="px-6 py-4">$12 - $25/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Standing seam</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Roof Inspection/Assessment</td>
                    <td className="px-6 py-4">$300 - $1,000</td>
                    <td className="px-6 py-4 text-gray-600">With detailed report</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              *Prices reflect 2024 Tampa Bay market rates. Actual costs depend on roof size, accessibility, material type, and complexity. Storm damage repairs may be covered by insurance. Contact us for accurate project estimates.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Tampa Bay Businesses Choose Us
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-brand-green flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Manufacturer Certified</h3>
                  <p className="text-gray-600">Certified installer for GAF, Carlisle, Firestone, Johns Manville, and other major manufacturers. Certification enables enhanced warranty programs and ensures proper installation techniques.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-brand-green flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Hurricane Experience</h3>
                  <p className="text-gray-600">We've repaired storm damage from every major hurricane to hit Tampa Bay in recent decades. This experience informs our installation and repair methods for maximum wind resistance.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-brand-green flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Responsive Service</h3>
                  <p className="text-gray-600">Emergency response when you need it, reliable scheduling for planned work. We communicate clearly throughout every project and meet our commitments.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-brand-green flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Honest Assessments</h3>
                  <p className="text-gray-600">We won't sell you a new roof when repairs will suffice—or recommend repairs when replacement is the better investment. You get straightforward advice focused on your best interests.</p>
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
              <h3 className="text-2xl font-bold mb-4">Get Expert Roof Assessment</h3>
              <p className="mb-6 text-gray-200">
                Contact Florida Construction Specialists for professional evaluation of your commercial roof. We'll assess current conditions, identify issues, and recommend the most cost-effective solutions—whether that's targeted repairs or strategic replacement.
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
            Tampa Bay's Commercial Roofing Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From emergency repairs to complete replacements, trust Florida Construction Specialists for commercial roofing solutions that protect your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
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
