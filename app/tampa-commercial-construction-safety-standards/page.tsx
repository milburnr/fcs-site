import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, CheckCircle, Shield, AlertTriangle, Users, FileText, HardHat, Eye, Clipboard, Award } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa Commercial Construction Safety Standards",
  description: "Ensure a secure commercial construction process in Tampa with our top-notch safety standards. Discover how our safety measures adhere to the highest industry standards.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa Commercial Construction Safety Standards", href: "/tampa-commercial-construction-safety-standards/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/services/commercial/medical-construction/", label: "Medical Facility Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Safe commercial construction site in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa Commercial Construction Safety Standards
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Ensure a secure commercial construction process in Tampa with our top-notch safety standards. Discover how Florida Construction Specialists' safety measures exceed industry requirements.
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

      {/* Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Safety isn't just a regulatory requirement in commercial construction—it's a fundamental value that protects workers, project owners, and the public. As Tampa Bay's leading commercial contractor serving Tampa, Lakeland, Sarasota, and the surrounding areas, Florida Construction Specialists maintains an unwavering commitment to safety excellence. Our comprehensive safety program not only meets but exceeds OSHA requirements and industry best practices, resulting in an outstanding safety record and a culture where every team member goes home safely every day.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Why Construction Safety Matters in Tampa Bay
            </h2>
            <p className="text-gray-600 mb-6">
              Construction consistently ranks among the most hazardous industries, with falls, struck-by incidents, electrocutions, and caught-in-between accidents accounting for the majority of serious injuries and fatalities. In Tampa Bay's active commercial construction market, where multiple trades work simultaneously on complex projects, a robust safety program is essential.
            </p>
            <p className="text-gray-600 mb-6">
              Beyond the moral imperative to protect human life, safety performance directly impacts project success. Accidents cause schedule delays, increase insurance costs, expose owners to liability, and damage contractor reputations. Conversely, a strong safety record indicates organizational discipline, quality focus, and professional management—qualities that translate to better project outcomes across all metrics.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Florida Construction Specialists Safety Program Overview
            </h2>
            <p className="text-gray-600 mb-6">
              Our safety program encompasses every aspect of construction operations, from pre-project planning through final closeout. Key components include:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <HardHat className="w-5 h-5" />
                  Personal Protective Equipment (PPE)
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>Hard hats required 100% of the time on site</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>Safety glasses with side shields standard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>High-visibility vests for all personnel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>Task-specific PPE as required (fall protection, respiratory, hearing)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Training Requirements
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>OSHA 30-hour for all supervisors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>OSHA 10-hour for all field workers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>Annual refresher training required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>Task-specific certifications (lift operation, confined space, etc.)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Inspection Programs
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>Daily site safety walks by supervisors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>Weekly formal safety inspections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>Monthly third-party safety audits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>Equipment inspections before each use</span>
                  </li>
                </ul>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Clipboard className="w-5 h-5" />
                  Documentation & Reporting
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>Job hazard analysis for all activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>Incident investigation and root cause analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>Near-miss reporting program</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>Monthly safety metrics tracking</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              OSHA Requirements for Florida Commercial Construction
            </h2>
            <p className="text-gray-600 mb-6">
              Florida commercial construction sites must comply with comprehensive OSHA regulations. Florida Construction Specialists exceeds these requirements in our commitment to industry-leading safety performance:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Safety Area</th>
                    <th className="px-6 py-3 text-left">OSHA Requirement</th>
                    <th className="px-6 py-3 text-left">FCS Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Fall Protection</td>
                    <td className="px-6 py-4">Required at 6 feet</td>
                    <td className="px-6 py-4">100% tie-off at any height</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Safety Meetings</td>
                    <td className="px-6 py-4">Recommended</td>
                    <td className="px-6 py-4">Daily toolbox talks required</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Supervisor Training</td>
                    <td className="px-6 py-4">10-hour minimum</td>
                    <td className="px-6 py-4">30-hour + annual refresher</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Hard Hat Use</td>
                    <td className="px-6 py-4">Hazard areas</td>
                    <td className="px-6 py-4">100% site coverage</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Inspections</td>
                    <td className="px-6 py-4">Frequent required</td>
                    <td className="px-6 py-4">Daily + weekly documented</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Incident Reporting</td>
                    <td className="px-6 py-4">Recordable injuries</td>
                    <td className="px-6 py-4">All incidents + near misses</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              The "Focus Four" Hazards in Commercial Construction
            </h2>
            <p className="text-gray-600 mb-6">
              OSHA identifies four hazard categories responsible for the majority of construction fatalities. Our safety program specifically addresses each:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
                <h4 className="font-bold text-red-700 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Falls (38% of construction fatalities)
                </h4>
                <p className="text-gray-600 mb-2">Our fall protection program includes:</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Competent person fall protection plans for every project</li>
                  <li>• 100% tie-off policy—no exceptions</li>
                  <li>• Guardrail systems installed before work begins</li>
                  <li>• Floor opening covers and marking</li>
                  <li>• Scaffold and ladder inspection programs</li>
                </ul>
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
                <h4 className="font-bold text-amber-700 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Struck-By (10% of construction fatalities)
                </h4>
                <p className="text-gray-600 mb-2">We prevent struck-by incidents through:</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• High-visibility apparel required for all personnel</li>
                  <li>• Controlled access zones around overhead work</li>
                  <li>• Spotter requirements for heavy equipment</li>
                  <li>• Tool lanyards for elevated work</li>
                  <li>• Secure stacking and storage of materials</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
                <h4 className="font-bold text-blue-700 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Electrocution (9% of construction fatalities)
                </h4>
                <p className="text-gray-600 mb-2">Electrical safety measures include:</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• GFCI protection on all temporary power</li>
                  <li>• Lockout/tagout procedures for all electrical work</li>
                  <li>• Utility locates before any excavation</li>
                  <li>• Overhead power line awareness training</li>
                  <li>• Qualified electrical worker requirements</li>
                </ul>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-r-lg">
                <h4 className="font-bold text-purple-700 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Caught-In/Between (2% of construction fatalities)
                </h4>
                <p className="text-gray-600 mb-2">Caught-in prevention includes:</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Machine guarding on all equipment</li>
                  <li>• Trench protection systems</li>
                  <li>• Excavation competent person requirements</li>
                  <li>• Proper shoring and bracing protocols</li>
                  <li>• No loose clothing near machinery</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Florida-Specific Safety Considerations
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay's climate and environment create unique safety challenges that require specialized protocols:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3">Heat Illness Prevention</h4>
                <p className="text-gray-600 text-sm mb-2">Florida's heat and humidity create significant heat stress risks. Our program includes:</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Mandatory hydration stations</li>
                  <li>• Scheduled rest breaks in shaded areas</li>
                  <li>• Heat acclimatization for new workers</li>
                  <li>• Modified work schedules during extreme heat</li>
                  <li>• Heat illness symptom training for all</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3">Lightning Safety</h4>
                <p className="text-gray-600 text-sm mb-2">Tampa is the lightning capital of the US. We implement:</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Weather monitoring and alerts</li>
                  <li>• 30-30 rule enforcement (shelter if lightning within 30 seconds of thunder)</li>
                  <li>• Designated shelter locations</li>
                  <li>• Work stoppage protocols</li>
                  <li>• Lightning detection technology</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3">Hurricane Preparedness</h4>
                <p className="text-gray-600 text-sm mb-2">Every project has a hurricane plan including:</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Site securing procedures</li>
                  <li>• Equipment and material protection</li>
                  <li>• Evacuation routes and assembly points</li>
                  <li>• Communication protocols</li>
                  <li>• Post-storm safety assessments</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3">Wildlife Awareness</h4>
                <p className="text-gray-600 text-sm mb-2">Florida's wildlife requires awareness:</p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Snake identification training</li>
                  <li>• Alligator safety near water features</li>
                  <li>• Fire ant and wasp hazard management</li>
                  <li>• First aid for bites and stings</li>
                  <li>• Site clearing procedures</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Our Safety Record
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists' commitment to safety is reflected in our industry-leading metrics:
            </p>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">0.75</div>
                <div className="text-sm text-gray-600">EMR Rating</div>
                <div className="text-xs text-gray-500">(1.0 is industry average)</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">0</div>
                <div className="text-sm text-gray-600">Lost Time Injuries</div>
                <div className="text-xs text-gray-500">Last 24 months</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">100%</div>
                <div className="text-sm text-gray-600">OSHA Certified</div>
                <div className="text-xs text-gray-500">Supervisors</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">Daily</div>
                <div className="text-sm text-gray-600">Safety Meetings</div>
                <div className="text-xs text-gray-500">Every project</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Subcontractor Safety Requirements
            </h2>
            <p className="text-gray-600 mb-6">
              Our safety program extends to all subcontractors working on our projects. Before any subcontractor begins work, they must meet our qualification requirements:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Written safety program reviewed and approved by FCS safety team</li>
              <li>EMR of 1.0 or below (exceptions require management approval)</li>
              <li>Workers' compensation and liability insurance verification</li>
              <li>OSHA training documentation for all workers</li>
              <li>Agreement to comply with FCS site-specific safety plans</li>
              <li>Participation in daily toolbox talks and weekly safety meetings</li>
            </ul>

            {/* FAQ Section */}
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions About Construction Safety
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    What is EMR and why does it matter?
                  </h3>
                  <p className="text-gray-600">
                    Experience Modification Rate (EMR) is an insurance industry measure of a company's safety record compared to the industry average. An EMR of 1.0 represents average performance; below 1.0 indicates better-than-average safety. Our EMR of 0.75 means we experience 25% fewer claims than the industry average, resulting in lower insurance costs and demonstrating our safety commitment.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How does good safety performance benefit project owners?
                  </h3>
                  <p className="text-gray-600">
                    Strong safety performance benefits owners in multiple ways: fewer delays from accidents, lower insurance costs passed through to projects, reduced liability exposure, better quality work (safety discipline correlates with quality discipline), and protection of your company's reputation. A contractor's safety record is one of the best predictors of overall project performance.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    What happens if there's an accident on my project?
                  </h3>
                  <p className="text-gray-600">
                    While our goal is zero incidents, we're prepared for any situation. Our response includes immediate medical attention, site securing, incident investigation, root cause analysis, and corrective action implementation. We maintain detailed documentation and communicate promptly with project owners. Our workers' compensation and liability insurance provides appropriate coverage for any work-related injuries.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Can visitors come to the construction site?
                  </h3>
                  <p className="text-gray-600">
                    Yes, with appropriate protocols. All visitors must check in with site supervision, receive a safety orientation, and wear required PPE (hard hat, safety glasses, high-visibility vest—provided if needed). Visitors are escorted through active work areas. We welcome owner visits and can arrange safe observation areas for progress monitoring.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How do you handle safety during occupied building renovations?
                  </h3>
                  <p className="text-gray-600">
                    Occupied building work requires additional safety measures to protect both workers and building occupants. We implement physical barriers separating work areas, coordinate with building management on fire alarm and evacuation procedures, schedule noisy or dusty work during low-occupancy periods, and maintain clear egress paths throughout construction. Detailed logistics plans address these challenges before work begins.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Services"
            links={internalLinks}
          />
        </div>
      </section>

      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Partner with Tampa Bay's Safety Leader
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists today to discuss your commercial project. Experience the peace of mind that comes with industry-leading safety performance.
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
