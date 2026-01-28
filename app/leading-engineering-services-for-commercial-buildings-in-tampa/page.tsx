import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, Building2, HardHat, FileCheck, Compass, Ruler } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Engineering Services for Commercial Buildings Tampa | Structural & MEP Engineering",
  description: "Leading engineering services for commercial buildings in Tampa. Structural engineering, MEP design, civil engineering, and specialty engineering coordinated by Florida Construction Specialists.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Leading Engineering Services for Commercial Buildings in Tampa", href: "/leading-engineering-services-for-commercial-buildings-in-tampa/" },
];

const faqs = [
  {
    question: "What engineering disciplines are required for commercial construction?",
    answer: "Most commercial projects require multiple engineering disciplines: structural engineering for building framework and foundations, civil engineering for site development and drainage, mechanical engineering for HVAC systems, electrical engineering for power distribution and lighting, plumbing engineering for water and waste systems, and often specialty engineering for fire protection, acoustics, or specific building types. Florida Construction Specialists coordinates all disciplines for seamless project delivery."
  },
  {
    question: "Why do engineering documents require PE stamps in Florida?",
    answer: "Florida law (Chapter 471, Florida Statutes) requires engineering documents to be signed and sealed by a Florida-licensed Professional Engineer (PE). The PE stamp certifies the engineer takes professional responsibility for the design. This protects public safety and establishes legal accountability. Building departments won't accept engineering documents without proper PE stamps."
  },
  {
    question: "How do engineers address Florida's hurricane requirements?",
    answer: "Florida engineers design for wind speeds specified in Florida Building Code (130+ mph in Tampa Bay area) and ASCE 7 wind load provisions. Designs include proper roof-to-wall connections, uplift resistance, impact-resistant glazing or protection, continuous load paths from roof to foundation, and compliance with Florida-specific amendments. Experience with Florida conditions is essential—out-of-state engineers often underestimate requirements."
  },
  {
    question: "What is the typical engineering timeline for commercial projects?",
    answer: "Engineering timelines vary by project complexity. Simple tenant improvements may require 2-4 weeks of engineering. New commercial buildings typically need 6-12 weeks for complete engineering documents. Complex or large projects may require 3-6 months. Design-build delivery often compresses timelines through concurrent design. We establish realistic engineering schedules during project planning to avoid delays."
  },
  {
    question: "How do construction and engineering teams coordinate?",
    answer: "Effective coordination requires clear communication and defined responsibilities. In design-build delivery, the contractor engages engineers early and maintains ongoing coordination. During construction, engineers respond to RFIs (Requests for Information), review submittals, conduct site observations, and address field conditions. Florida Construction Specialists facilitates this coordination to resolve issues quickly and keep projects moving."
  }
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/structural-integrity-evaluation-in-tampa-post-disaster/", label: "Structural Evaluation" },
  { href: "/utility-mapping-for-commercial-buildings/", label: "Utility Mapping" },
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
            alt="Engineering services for commercial buildings in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Leading Engineering Services for Commercial Buildings in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Florida Construction Specialists coordinates comprehensive engineering services for commercial construction—structural, civil, mechanical, electrical, and specialty engineering—delivered by Florida-licensed professionals with Tampa Bay experience.
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
              Commercial construction requires coordinated engineering across multiple disciplines—structural systems that withstand Florida's hurricanes, mechanical systems that handle our climate, electrical systems that power modern businesses, and civil infrastructure that manages our unique site conditions. Florida Construction Specialists partners with leading Tampa Bay engineering firms to deliver integrated engineering solutions for commercial projects throughout the region.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-yellow-800 mb-2">Florida PE License Required</h3>
                  <p className="text-yellow-700">Florida law requires engineering documents for construction to be prepared by or under the supervision of Florida-licensed Professional Engineers (PE). All engineering services we coordinate are provided by properly licensed professionals whose stamps appear on construction documents.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Engineering Disciplines for Commercial Construction
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Building2 className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Structural Engineering</h3>
                <p className="text-gray-600 mb-3">Design of building framework and load-bearing systems:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Foundation design for Florida soils</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Steel, concrete, masonry, wood framing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Wind load analysis per FBC/ASCE 7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Connection design for hurricanes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Roof structure and diaphragm design</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Compass className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Civil Engineering</h3>
                <p className="text-gray-600 mb-3">Site development and infrastructure:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Site grading and earthwork</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Stormwater management design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Utility infrastructure design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Parking and paving design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>SWFWMD permit support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <HardHat className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Mechanical Engineering (HVAC)</h3>
                <p className="text-gray-600 mb-3">Climate control and ventilation:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Heating and cooling load calculations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>HVAC system selection and design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Ductwork and piping design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Energy code compliance (FBC Energy)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Indoor air quality design</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Ruler className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Electrical Engineering</h3>
                <p className="text-gray-600 mb-3">Power distribution and systems:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Electrical load analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Service entrance and distribution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Lighting design and controls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Emergency and standby power</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Fire alarm and low-voltage systems</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Specialty Engineering Services
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Geotechnical Engineering</h3>
                <p className="text-gray-600 mb-3">Essential for Florida's challenging soil conditions:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Soil borings and subsurface investigation</li>
                  <li>• Foundation recommendations for Florida soils</li>
                  <li>• Settlement analysis and mitigation</li>
                  <li>• Groundwater evaluation</li>
                  <li>• Sinkhole risk assessment (critical in Tampa Bay)</li>
                  <li>• Pavement section recommendations</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Fire Protection Engineering</h3>
                <p className="text-gray-600 mb-3">Life safety system design:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Fire sprinkler system design (NFPA 13)</li>
                  <li>• Fire alarm system design (NFPA 72)</li>
                  <li>• Smoke control and stairwell pressurization</li>
                  <li>• Fire pump sizing and selection</li>
                  <li>• Code analysis and alternative solutions</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Building Envelope Engineering</h3>
                <p className="text-gray-600 mb-3">Critical for Florida's weather and energy challenges:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Curtain wall and glazing system design</li>
                  <li>• Waterproofing and moisture management</li>
                  <li>• Thermal analysis and energy modeling</li>
                  <li>• Wind pressure and impact resistance</li>
                  <li>• Roofing system specification</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Florida Building Code Engineering Requirements
            </h2>

            <p className="text-gray-600 mb-6">
              The 8th Edition (2023) Florida Building Code establishes engineering requirements that exceed most other states:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Requirement</th>
                    <th className="px-6 py-4 text-left">FBC Reference</th>
                    <th className="px-6 py-4 text-left">Tampa Bay Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Wind Design</td>
                    <td className="px-6 py-4 text-gray-600">FBC Chapter 16, ASCE 7</td>
                    <td className="px-6 py-4 text-gray-600">130+ mph design wind speed, exposure C typical</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Impact Protection</td>
                    <td className="px-6 py-4 text-gray-600">FBC 1609.1.2</td>
                    <td className="px-6 py-4 text-gray-600">Wind-borne debris region requirements</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Structural Connections</td>
                    <td className="px-6 py-4 text-gray-600">FBC 2308.10, 2304.9</td>
                    <td className="px-6 py-4 text-gray-600">Roof-to-wall, wall-to-foundation connections</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Energy Code</td>
                    <td className="px-6 py-4 text-gray-600">FBC Energy Conservation</td>
                    <td className="px-6 py-4 text-gray-600">Climate Zone 2A requirements</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Flood Design</td>
                    <td className="px-6 py-4 text-gray-600">FBC Chapter 16, ASCE 24</td>
                    <td className="px-6 py-4 text-gray-600">Flood zone compliance, elevation requirements</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Engineering Deliverables
            </h2>

            <p className="text-gray-600 mb-6">
              Complete engineering services for commercial construction include these deliverables:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <FileCheck className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Design Documents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>PE-stamped construction drawings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Structural calculations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Technical specifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Energy compliance documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Product approval verification</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <HardHat className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Construction Support</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>RFI responses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Submittal review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Site observations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Field modifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Special inspection coordination</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Engineering Coordination Process
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Requirements Definition</h3>
                  <p className="text-gray-600">We work with you to understand project requirements, constraints, and goals. This defines the engineering scope and criteria that guide design.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Team Assembly</h3>
                  <p className="text-gray-600">We engage appropriate engineering firms from our network of qualified professionals—selecting firms with relevant experience for each project type.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Coordinated Design Development</h3>
                  <p className="text-gray-600">We facilitate coordination between disciplines—ensuring structural accommodates MEP, civil supports site plan, and all systems integrate properly.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Permit Support</h3>
                  <p className="text-gray-600">We manage permit submissions and coordinate engineering responses to plan review comments, keeping the approval process moving efficiently.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Construction Administration</h3>
                  <p className="text-gray-600">Throughout construction, we coordinate engineering support—RFI responses, submittal reviews, field observations—to resolve issues quickly.</p>
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
              <h3 className="text-2xl font-bold mb-4">Expert Engineering Coordination</h3>
              <p className="mb-6 text-gray-200">
                Florida Construction Specialists coordinates comprehensive engineering services for commercial construction throughout Tampa Bay. Our network of qualified engineering firms and systematic coordination process ensures integrated designs that build efficiently and perform reliably.
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
            title="Related Construction Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Engineering Excellence for Commercial Construction
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for commercial construction with coordinated engineering by Florida-licensed professionals.
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
