import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, FileText, Clock, Building2, ClipboardCheck, DollarSign } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa Commercial Construction Permits | Building Permit Guide & Process",
  description: "Complete guide to Tampa commercial construction permits. Learn about the City of Tampa building permit process, requirements, fees, timelines, and how Florida Construction Specialists manages permit approvals.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa Commercial Construction Permits", href: "/tampa-commercial-construction-permits/" },
];

const faqs = [
  {
    question: "How long does it take to get a commercial building permit in Tampa?",
    answer: "Commercial permit timelines vary based on project complexity. Simple tenant improvement permits may be approved in 2-4 weeks. New commercial construction typically requires 4-8 weeks for initial review, sometimes longer for complex projects. Resubmittals after corrections add additional time. The City of Tampa offers expedited review for additional fees. Florida Construction Specialists' experience with the process and complete submissions help minimize review cycles."
  },
  {
    question: "What documents are required for commercial building permits in Tampa?",
    answer: "Required documents include: completed permit application, two sets of signed/sealed construction documents (architectural, structural, MEP), site plan, product approvals for materials, energy calculations (Florida Energy Code compliance), accessibility compliance documentation, and contractor licensing verification. Additional documents may be required based on project type—historic district projects need COA approval, flood zone projects need elevation certificates, etc."
  },
  {
    question: "How much do commercial building permits cost in Tampa?",
    answer: "Permit fees are calculated based on project valuation. The City of Tampa charges approximately $5-15 per $1,000 of construction value for building permits, plus separate fees for electrical, plumbing, and mechanical permits. A $1 million commercial project might have total permit fees of $10,000-$20,000. Plan review fees, technology fees, and inspection fees add to the total. We provide permit cost estimates during project planning."
  },
  {
    question: "Can construction start before permits are issued?",
    answer: "No. Florida law prohibits construction without required permits. Starting work before permit approval can result in stop-work orders, double permit fees, required demolition of non-conforming work, and potential licensing issues for contractors. Some jurisdictions allow foundation permits while building permits are under review. Always verify permit status before beginning any work."
  },
  {
    question: "What happens during commercial construction inspections?",
    answer: "Multiple inspections occur throughout construction at key milestones: foundation before pour, rough framing before cover, rough MEP (electrical, plumbing, mechanical) before wall closure, insulation, and final inspection. Each trade typically has separate inspection requirements. Failed inspections require corrections and re-inspection. Florida Construction Specialists coordinates inspection scheduling and ensures work is inspection-ready to avoid delays."
  }
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/proper-permits-insights-from-the-top-commercial-contractor-in-tampa/", label: "Permit Insights" },
  { href: "/tampa-historic-restoration-permits-and-regulations/", label: "Historic Restoration Permits" },
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
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Commercial construction permits in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa Commercial Construction Permits
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Comprehensive guide to navigating the commercial building permit process in Tampa, including requirements, timelines, fees, and how Florida Construction Specialists manages permit approvals for faster project starts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
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
              Commercial construction in Tampa requires navigating a comprehensive permitting process governed by the Florida Building Code and local ordinances. Proper permits ensure buildings are safe, code-compliant, and legally constructed. Florida Construction Specialists manages the entire permit process for our clients, from initial application through final certificate of occupancy, leveraging our experience with the City of Tampa and surrounding jurisdictions to minimize delays and keep projects on schedule.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-yellow-800 mb-2">Permits Are Legally Required</h3>
                  <p className="text-yellow-700">Florida Statutes and the Florida Building Code require permits for commercial construction. Working without permits violates state law, voids insurance coverage, creates liability exposure, and can result in costly corrections or demolition. Proper permitting protects property owners, contractors, and building occupants.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Types of Commercial Construction Permits
            </h2>
            
            <p className="text-gray-600 mb-6">
              Commercial projects typically require multiple permits covering different aspects of construction. The City of Tampa issues permits in these primary categories:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Building2 className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Building Permit</h3>
                <p className="text-gray-600 mb-3">Master permit covering structural work:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>New construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Additions and expansions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Structural alterations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Tenant improvements (interior buildout)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Shell building construction</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <ClipboardCheck className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Trade Permits</h3>
                <p className="text-gray-600 mb-3">Separate permits for each trade:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Electrical permit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Plumbing permit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Mechanical (HVAC) permit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Fire alarm/sprinkler permit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Gas permit</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Florida Building Code Requirements
            </h2>

            <p className="text-gray-600 mb-6">
              The Florida Building Code (FBC), currently in its 8th Edition (2023), establishes minimum construction standards for all commercial buildings. Key code requirements affecting permit applications include:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Structural Requirements (FBC Chapter 16)</h3>
                <p className="text-gray-600 mb-3">Tampa's structural requirements address Florida's unique challenges:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Wind load design per ASCE 7 (Tampa is in wind speed zone 130+ mph)</li>
                  <li>• Impact-resistant glazing or protection in wind-borne debris regions</li>
                  <li>• Foundation design for Florida soils and high water table</li>
                  <li>• Roof-to-wall connections meeting Florida requirements</li>
                  <li>• Structural calculations sealed by Florida PE required</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Energy Code (FBC Energy Conservation)</h3>
                <p className="text-gray-600 mb-3">Florida Energy Code compliance required for all commercial buildings:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Building envelope requirements (walls, roof, windows)</li>
                  <li>• HVAC efficiency requirements</li>
                  <li>• Lighting power density limits</li>
                  <li>• Energy compliance documentation required with permit application</li>
                  <li>• COMcheck or equivalent energy analysis</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Accessibility (FBC Accessibility)</h3>
                <p className="text-gray-600 mb-3">Florida Accessibility Code requirements for commercial buildings:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Accessible routes and entries</li>
                  <li>• Accessible restrooms</li>
                  <li>• Elevator requirements for multi-story</li>
                  <li>• Signage and wayfinding</li>
                  <li>• Florida-specific vertical accessibility requirements</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              The Permit Application Process
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Pre-Application Meeting (Recommended)</h3>
                  <p className="text-gray-600">For complex projects, we recommend meeting with City of Tampa Development Services before submitting. This identifies potential issues early, clarifies requirements, and streamlines review. The city offers pre-application conferences for major projects.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Document Preparation</h3>
                  <p className="text-gray-600">Complete construction documents prepared and sealed by licensed professionals (architect, engineers). Documents must address all applicable code requirements. Product approvals, energy calculations, and specialty reports compiled.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Application Submission</h3>
                  <p className="text-gray-600">Tampa accepts applications through the Accela online portal. Applications include project information, contractor licensing, owner authorization, and all required documents. Fees paid at submission.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Plan Review</h3>
                  <p className="text-gray-600">Multiple reviewers examine plans: building, structural, electrical, plumbing, mechanical, fire, zoning, accessibility. Review comments compiled and issued. First review typically takes 2-4 weeks for commercial projects.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Corrections and Resubmittal</h3>
                  <p className="text-gray-600">If review comments require changes, revised documents are prepared and resubmitted. Additional review cycles take 1-2 weeks typically. Multiple resubmittals extend total timeline significantly.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">6</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Permit Issuance</h3>
                  <p className="text-gray-600">Once all reviews are approved and fees paid, the building permit is issued. Construction may begin only after permit is issued and posted at the job site. Separate trade permits issued to licensed trade contractors.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Permit Fees and Timeline Estimates
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Project Type</th>
                    <th className="px-6 py-4 text-left">Typical Review Time</th>
                    <th className="px-6 py-4 text-left">Estimated Fee Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Tenant Improvement (Minor)</td>
                    <td className="px-6 py-4 text-gray-600">2-3 weeks</td>
                    <td className="px-6 py-4 text-gray-600">$500 - $2,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Tenant Improvement (Major)</td>
                    <td className="px-6 py-4 text-gray-600">3-5 weeks</td>
                    <td className="px-6 py-4 text-gray-600">$2,000 - $10,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Shell Building</td>
                    <td className="px-6 py-4 text-gray-600">4-8 weeks</td>
                    <td className="px-6 py-4 text-gray-600">$10,000 - $50,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">New Commercial Building</td>
                    <td className="px-6 py-4 text-gray-600">6-12 weeks</td>
                    <td className="px-6 py-4 text-gray-600">$15,000 - $100,000+</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Multi-Story/Complex</td>
                    <td className="px-6 py-4 text-gray-600">8-16+ weeks</td>
                    <td className="px-6 py-4 text-gray-600">$50,000 - $250,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              *Timelines assume complete initial submissions. Resubmittals add time. Fees based on 2024 City of Tampa fee schedule and typical project valuations. Actual fees calculated on specific project value.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Inspections During Construction
            </h2>

            <p className="text-gray-600 mb-6">
              Construction must be inspected at specific milestones before work can proceed. Required inspections for commercial construction typically include:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Building Inspections</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Foundation/slab (before pour)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Framing/structural (before cover)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Insulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Final building inspection</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Trade Inspections</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Rough electrical</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Rough plumbing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Rough mechanical</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Fire alarm/sprinkler</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Final MEP inspections</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Certificate of Occupancy
            </h2>

            <p className="text-gray-600 mb-6">
              The Certificate of Occupancy (CO) is the final approval allowing building occupancy. It's issued only after all inspections pass and all requirements are met. For commercial buildings, obtaining the CO requires:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>All required inspections passed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>Fire department final approval</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>Health department approval (if applicable)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>Impact fees paid</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>Water/sewer certification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>Site work complete (parking, accessibility, drainage)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span>All permit fees and charges paid</span>
                </li>
              </ul>
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
              <h3 className="text-2xl font-bold mb-4">Expert Permit Management in Tampa</h3>
              <p className="mb-6 text-gray-200">
                Florida Construction Specialists manages the entire permit process for commercial construction projects throughout Tampa Bay. Our experience with local building departments, complete document preparation, and proactive issue resolution minimizes delays and keeps your project on schedule.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Get Free Estimate
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
            title="Related Permit Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Streamlined Commercial Permitting
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for expert permit management on your Tampa commercial construction project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Consultation
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
