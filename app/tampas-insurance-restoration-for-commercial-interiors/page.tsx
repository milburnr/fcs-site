import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, Building2, Paintbrush, Zap, Shield } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa Insurance Restoration for Commercial Interiors | Office & Retail Repair",
  description: "Expert commercial interior insurance restoration in Tampa. Office, retail, restaurant, and medical facility restoration with full insurance claim support.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa's Insurance Restoration for Commercial Interiors", href: "/tampas-insurance-restoration-for-commercial-interiors/" },
];

const faqs = [
  {
    question: "What commercial interior elements are typically covered by insurance?",
    answer: "Commercial property insurance typically covers: permanent fixtures and finishes (flooring, ceilings, built-in cabinetry), business personal property (furniture, equipment, inventory), tenant improvements and betterments (if you're a tenant), mechanical systems (HVAC, electrical, plumbing), specialty installations (commercial kitchens, medical equipment, data centers), and signage and branding elements. Coverage details depend on your specific policy—some items may have sublimits or require separate endorsements. Review your policy or consult with your broker to understand exactly what's covered."
  },
  {
    question: "How does insurance handle tenant improvements (betterments)?",
    answer: "Tenant improvements—also called betterments—are alterations made by a tenant to leased space. Insurance treatment depends on who made and owns the improvements. If you made them, they're typically covered under your business personal property coverage. However, lease language matters: some leases transfer improvement ownership to the landlord, which can create coverage gaps. Florida law doesn't automatically determine ownership—it depends on the lease. Review your lease and insurance policy together to ensure you have appropriate coverage for any improvements you've made."
  },
  {
    question: "What's the process for restoring a commercial interior after water damage?",
    answer: "Water damage restoration follows a specific protocol: 1) Emergency water extraction and structural drying (typically 3-5 days), 2) Demolition of water-damaged materials that can't be saved, 3) Mold inspection and remediation if needed, 4) Reconstruction of walls, ceilings, and floors, 5) MEP system repair or replacement, 6) Finish work including paint, flooring, and fixtures, 7) Final inspection and occupancy. Throughout this process, documentation supports your insurance claim. Timeline depends on damage extent—minor water damage might take 2-3 weeks, while major flooding can require 2-3 months."
  },
  {
    question: "How do you minimize business interruption during interior restoration?",
    answer: "We employ several strategies to minimize downtime: phased construction allowing partial occupancy, after-hours and weekend work for occupied spaces, temporary walls and barriers to contain construction, coordinated scheduling around business operations, temporary relocation of critical functions, and accelerated schedules when business interruption coverage is limited. Business interruption insurance covers lost income during restoration—proper project management maximizes coverage while minimizing actual losses."
  },
  {
    question: "What special considerations apply to restaurant or food service restoration?",
    answer: "Restaurant restoration has unique requirements: health department compliance and re-inspection, commercial kitchen equipment assessment and certification, grease trap and exhaust system cleaning or replacement, food-safe surface restoration, refrigeration system evaluation, pest control measures during and after work, and expedited completion to minimize revenue loss. Florida Department of Business and Professional Regulation (DBPR) oversees food service licensing, and restoration must meet their requirements before reopening. We coordinate with health inspectors throughout the process."
  }
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/insurance-restoration-project-management-in-tampa/", label: "Project Management" },
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
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Commercial interior insurance restoration in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa's Insurance Restoration for Commercial Interiors
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Expert restoration of office, retail, restaurant, and medical facility interiors. Comprehensive insurance claim support and quality reconstruction to get your Tampa Bay business back in operation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Interior Restoration Help
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
              Commercial interior damage disrupts business operations, affects employee productivity, and can drive away customers. Whether your Tampa Bay office, retail store, restaurant, or medical facility has suffered water, fire, or storm damage, professional interior restoration gets you back in business quickly while maximizing your insurance claim recovery. Florida Construction Specialists specializes in commercial interior restoration that meets both insurance requirements and your operational needs.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Business Interruption Considerations</h3>
                  <p className="text-amber-700">Your commercial policy likely includes business interruption coverage that pays for lost income during restoration. This coverage typically has a "waiting period" (often 72 hours) and maximum "period of restoration." Professional project management that minimizes restoration time directly reduces your actual losses while maximizing coverage. Document all business impacts from day one.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Commercial Interior Restoration Services
            </h2>
            
            <p className="text-gray-600 mb-6">
              Commercial interiors vary dramatically in complexity and requirements. An office restoration differs significantly from a restaurant, medical facility, or retail store. Our team understands these differences and tailors restoration approaches to your specific facility type and business needs.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Building2 className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Office Spaces</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Workstation and cubicle restoration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Conference room reconstruction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>IT infrastructure protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Reception and common area repair</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Paintbrush className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Retail Spaces</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Sales floor restoration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Display and fixture repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Storefront and signage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Inventory storage areas</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Zap className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Restaurants & Food Service</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Commercial kitchen restoration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Dining area reconstruction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Health code compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Equipment replacement coordination</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Medical & Healthcare</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>HIPAA-compliant restoration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Clinical area reconstruction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Medical equipment coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Infection control protocols</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Commercial Interior Restoration Costs
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Interior Element</th>
                    <th className="px-6 py-4 text-left">Restoration Cost Range</th>
                    <th className="px-6 py-4 text-left">Timeline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Drywall replacement</td>
                    <td className="px-6 py-4">$3 - $6 per sq ft</td>
                    <td className="px-6 py-4 text-gray-600">3-7 days typical</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Commercial flooring</td>
                    <td className="px-6 py-4">$5 - $25 per sq ft</td>
                    <td className="px-6 py-4 text-gray-600">1-2 weeks</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Suspended ceiling</td>
                    <td className="px-6 py-4">$4 - $12 per sq ft</td>
                    <td className="px-6 py-4 text-gray-600">3-5 days</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Commercial painting</td>
                    <td className="px-6 py-4">$2 - $5 per sq ft</td>
                    <td className="px-6 py-4 text-gray-600">2-5 days</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Electrical systems</td>
                    <td className="px-6 py-4">$5,000 - $50,000+</td>
                    <td className="px-6 py-4 text-gray-600">1-3 weeks</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">HVAC restoration</td>
                    <td className="px-6 py-4">$10,000 - $75,000+</td>
                    <td className="px-6 py-4 text-gray-600">1-4 weeks</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Commercial kitchen</td>
                    <td className="px-6 py-4">$50,000 - $250,000+</td>
                    <td className="px-6 py-4 text-gray-600">4-12 weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              *Costs vary based on materials, damage extent, and facility type. Insurance claim recovery depends on policy coverage and documentation quality.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              The Commercial Interior Restoration Process
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Emergency Response & Mitigation</h3>
                  <p className="text-gray-600">Secure the space, extract water if applicable, begin structural drying, protect undamaged areas, and document all conditions. Emergency response prevents secondary damage and protects your claim rights.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Assessment & Claim Preparation</h3>
                  <p className="text-gray-600">Comprehensive damage assessment, detailed scope of work development, insurance claim documentation, and coordination with adjusters. Proper assessment identifies all damage including hidden moisture and electrical issues.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Demolition & Preparation</h3>
                  <p className="text-gray-600">Remove damaged materials, prepare surfaces for reconstruction, complete any mold remediation required, and verify all affected areas are addressed before rebuilding begins.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Reconstruction</h3>
                  <p className="text-gray-600">Rebuild interior elements—framing, drywall, ceilings, flooring—with quality materials that meet or exceed original specifications. Coordinate MEP system repairs and ensure code compliance throughout.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Finishing & Turnover</h3>
                  <p className="text-gray-600">Complete finish work including painting, flooring installation, fixture mounting, and final cleaning. Coordinate final inspections, obtain occupancy approvals, and return space to operational condition.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Industry-Specific Restoration Requirements
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-2">Healthcare Facilities</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• HIPAA compliance throughout</li>
                  <li>• Infection control protocols</li>
                  <li>• Medical gas system integrity</li>
                  <li>• Equipment recertification</li>
                  <li>• AHCA notification requirements</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">Food Service Establishments</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• DBPR compliance</li>
                  <li>• Health department re-inspection</li>
                  <li>• Food-safe surface materials</li>
                  <li>• Ventilation system cleaning</li>
                  <li>• Pest control verification</li>
                </ul>
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
              <h3 className="text-2xl font-bold mb-4">Restore Your Commercial Interior</h3>
              <p className="mb-6 text-gray-200">
                Florida Construction Specialists provides comprehensive commercial interior restoration throughout Tampa Bay. We handle everything from emergency response through final finish work, with full insurance claim support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Get Restoration Quote
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
            Expert Commercial Interior Restoration
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for commercial interior restoration throughout Tampa Bay.
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
