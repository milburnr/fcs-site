import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, Shield, HardHat, Eye, Zap, Users } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Safety First Florida Commercial | OSHA Tampa",
  description: "Learn how Florida Construction Specialists puts safety first in commercial construction projects across Tampa Bay with OSHA compliance, comprehensive safety programs, and Florida Building Code adherence.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Safety First in Florida Commercial Construction Projects", href: "/safety-first-in-florida-commercial-construction-projects/" },
];

const faqs = [
  {
    question: "What makes commercial construction more hazardous than other industries?",
    answer: "Commercial construction combines multiple high-risk activities: working at heights, operating heavy equipment, electrical work, excavation, and exposure to hazardous materials—often simultaneously on the same site. The constantly changing work environment, multiple employers, and time pressure create additional risks. OSHA statistics show construction accounts for approximately 20% of workplace fatalities despite employing only 6% of workers."
  },
  {
    question: "What is OSHA's 'Fatal Four' in construction?",
    answer: "OSHA's Fatal Four are the leading causes of construction fatalities: Falls (38.7%), Struck-By incidents (9.4%), Electrocution (7.2%), and Caught-In/Between (5.4%). Together, these account for over 60% of construction deaths. Florida Construction Specialists' safety programs specifically target these hazards through engineering controls, administrative procedures, and personal protective equipment."
  },
  {
    question: "How does Florida's climate affect construction safety?",
    answer: "Florida's hot, humid climate creates significant heat illness risks—OSHA's heat illness prevention standard requires water, rest, shade, and acclimatization programs. Afternoon thunderstorms bring lightning hazards requiring work stoppage protocols. Hurricane season demands securing materials and incomplete structures. UV exposure necessitates sun protection measures. Our safety programs address all climate-specific hazards."
  },
  {
    question: "What certifications should commercial contractors have for safety?",
    answer: "Look for contractors with OSHA 30-Hour trained supervisors, Experience Modification Rate (EMR) below 1.0 indicating better-than-average safety performance, documented safety programs meeting OSHA requirements, and current workers' compensation insurance. Florida Construction Specialists maintains all required certifications plus voluntary safety certifications demonstrating our commitment beyond minimum requirements."
  },
  {
    question: "How do you coordinate safety with multiple subcontractors?",
    answer: "We prequalify subcontractors based on safety performance, require submission of safety programs before work begins, conduct joint safety orientations, hold weekly coordination meetings addressing safety, perform daily inspections of all work areas, and maintain stop-work authority for safety violations. Our site safety coordinator oversees all contractors to ensure consistent safety standards across the project."
  }
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/ensuring-construction-site-safety-a-top-priority/", label: "Construction Site Safety" },
  { href: "/summer-construction-safety-tips-from-top-contractors/", label: "Summer Safety Tips" },
  { href: "/tampa-commercial-construction-permits/", label: "Construction Permits" },
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
            alt="Commercial construction safety in Florida"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Safety First in Florida Commercial Construction Projects
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Florida Construction Specialists prioritizes safety as the foundation of every commercial project, protecting workers, the public, and your investment through comprehensive OSHA-compliant safety programs.
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
              Commercial construction in Florida presents unique safety challenges that demand specialized expertise. From Tampa's urban high-rise projects to St. Petersburg's waterfront developments, construction sites must navigate OSHA federal regulations, Florida-specific building codes, and environmental conditions that can turn hazardous quickly. Florida Construction Specialists has built a reputation across Tampa Bay for maintaining an exceptional safety record while delivering quality commercial projects on time and budget.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-800 mb-2">Construction Safety By the Numbers</h3>
                  <p className="text-red-700">In 2022, 1,069 construction workers died on the job—nearly 3 per day. Florida consistently ranks among the top five states for construction fatalities. Most deaths are preventable through proper safety programs, training, and enforcement. Choosing a safety-focused contractor protects lives.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Essential Safety Regulations for Florida Commercial Construction
            </h2>
            
            <p className="text-gray-600 mb-6">
              Commercial construction projects in Florida must comply with multiple overlapping regulatory frameworks. Understanding these requirements is essential for safe, compliant construction:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">OSHA Federal Standards</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>29 CFR 1926 Construction Standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Fall protection at 6 feet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Scaffolding and ladder requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Electrical safety and lockout/tagout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Excavation and trenching protection</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <HardHat className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Florida Building Code</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>8th Edition (2023) Florida Building Code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>High-velocity hurricane zone requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Chapter 33 construction safeguards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Fire safety during construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Structural stability requirements</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              The Fatal Four: Protecting Against Leading Hazards
            </h2>

            <p className="text-gray-600 mb-6">
              OSHA's "Fatal Four" hazards—falls, struck-by, electrocution, and caught-in/between—account for over 60% of construction fatalities. Our safety program specifically targets these hazards:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Falls (38.7% of Deaths)</h3>
                <p className="text-gray-600 mb-3">Falls from heights remain the leading cause of construction deaths. OSHA requires fall protection at 6 feet in construction. Our protocols include:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• 100% tie-off policies for work above 6 feet</li>
                  <li>• Guardrail systems meeting OSHA specifications</li>
                  <li>• Personal fall arrest systems with rescue plans</li>
                  <li>• Hole covers secured against displacement</li>
                  <li>• Competent person ladder and scaffold inspections</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Struck-By Incidents (9.4% of Deaths)</h3>
                <p className="text-gray-600 mb-3">Struck-by hazards include falling objects, swinging loads, and vehicle/equipment contact. Our protections include:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Hard hat requirements throughout all work areas</li>
                  <li>• Overhead protection and barricaded drop zones</li>
                  <li>• Rigging inspection and load securing protocols</li>
                  <li>• High-visibility vests and spotter requirements</li>
                  <li>• Defined traffic patterns separating workers and equipment</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Electrocution (7.2% of Deaths)</h3>
                <p className="text-gray-600 mb-3">Electrical hazards include contact with overhead power lines, exposed wiring, and improper grounding. Our electrical safety program includes:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Utility locate and mark-out before excavation</li>
                  <li>• Minimum clearance distances from power lines</li>
                  <li>• GFCI protection for all temporary power</li>
                  <li>• Lockout/tagout procedures for energized systems</li>
                  <li>• Qualified persons only for electrical work</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Caught-In/Between (5.4% of Deaths)</h3>
                <p className="text-gray-600 mb-3">Workers can be caught in or compressed by equipment, materials, or collapsing structures. Our prevention measures include:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Excavation protective systems (sloping, shoring, shielding)</li>
                  <li>• Machine guarding on all moving parts</li>
                  <li>• Trenching competent person inspections</li>
                  <li>• Material stacking and storage protocols</li>
                  <li>• No entry under suspended loads</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Florida-Specific Safety Considerations
            </h2>

            <p className="text-gray-600 mb-6">
              Florida's climate and geography create safety challenges unique to our region. Effective commercial construction safety programs must address:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Eye className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Heat Illness Prevention</h3>
                <p className="text-gray-600 mb-3">OSHA's heat illness prevention guidelines are critical in Florida:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Water stations with cool drinking water</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Shaded rest areas on-site</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Modified work schedules in extreme heat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Acclimatization programs for new workers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Training on heat illness symptoms</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Zap className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Storm and Lightning Safety</h3>
                <p className="text-gray-600 mb-3">Florida's afternoon thunderstorms require specific protocols:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Weather monitoring and alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>30-30 lightning rule (evacuate when storm within 6 miles)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Designated shelter locations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Crane and elevated work stoppage triggers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Material securing for high winds</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Safety Management on Multi-Trade Projects
            </h2>

            <p className="text-gray-600 mb-6">
              Commercial construction involves multiple subcontractors working simultaneously, creating coordination challenges. OSHA's multi-employer worksite policy holds all employers accountable for hazards. Our coordination approach includes:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Phase</th>
                    <th className="px-6 py-4 text-left">Safety Activities</th>
                    <th className="px-6 py-4 text-left">Documentation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Pre-Construction</td>
                    <td className="px-6 py-4 text-gray-600">Safety prequalification, hazard analysis, safety plan development</td>
                    <td className="px-6 py-4 text-gray-600">EMR verification, safety program review, site safety plan</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Mobilization</td>
                    <td className="px-6 py-4 text-gray-600">Site orientation, credential verification, equipment inspection</td>
                    <td className="px-6 py-4 text-gray-600">Orientation sign-off, training records, inspection logs</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Construction</td>
                    <td className="px-6 py-4 text-gray-600">Daily inspections, toolbox talks, coordination meetings</td>
                    <td className="px-6 py-4 text-gray-600">Inspection reports, meeting minutes, incident logs</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Close-Out</td>
                    <td className="px-6 py-4 text-gray-600">Final inspections, lessons learned, safety performance review</td>
                    <td className="px-6 py-4 text-gray-600">Close-out reports, performance metrics, improvement plans</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Personal Protective Equipment Requirements
            </h2>

            <p className="text-gray-600 mb-6">
              OSHA 29 CFR 1926 Subpart E requires employers to provide and ensure use of appropriate PPE. Our standard PPE requirements for commercial construction sites include:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🪖</div>
                <h3 className="font-bold text-brand-green-dark mb-2">Head Protection</h3>
                <p className="text-gray-600 text-sm">ANSI Z89.1 compliant hard hats required in all work areas. Type II for overhead hazards.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">👁️</div>
                <h3 className="font-bold text-brand-green-dark mb-2">Eye Protection</h3>
                <p className="text-gray-600 text-sm">ANSI Z87.1 safety glasses minimum. Face shields for grinding, cutting, concrete work.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">👂</div>
                <h3 className="font-bold text-brand-green-dark mb-2">Hearing Protection</h3>
                <p className="text-gray-600 text-sm">Required when exposure exceeds 85 dB TWA. Plugs or muffs based on noise level.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🦺</div>
                <h3 className="font-bold text-brand-green-dark mb-2">High-Visibility</h3>
                <p className="text-gray-600 text-sm">Class 2 or 3 vests required near vehicle/equipment traffic areas.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🧤</div>
                <h3 className="font-bold text-brand-green-dark mb-2">Hand Protection</h3>
                <p className="text-gray-600 text-sm">Task-appropriate gloves: cut-resistant, chemical, impact, or electrical as needed.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">👟</div>
                <h3 className="font-bold text-brand-green-dark mb-2">Foot Protection</h3>
                <p className="text-gray-600 text-sm">ASTM F2413 steel or composite toe boots required. Metatarsal guards when specified.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Incident Investigation and Prevention
            </h2>

            <p className="text-gray-600 mb-6">
              When incidents occur, thorough investigation prevents recurrence. Our incident management process follows OSHA requirements and best practices:
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Immediate Response</h3>
                  <p className="text-gray-600">Secure the area, provide first aid, and prevent additional injuries. OSHA requires reporting fatalities within 8 hours and hospitalizations within 24 hours.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Investigation</h3>
                  <p className="text-gray-600">Gather facts through interviews, photos, and documentation. Identify root causes—not just immediate causes—using systematic analysis methods.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Corrective Action</h3>
                  <p className="text-gray-600">Develop and implement corrective measures addressing root causes. Prioritize engineering controls over administrative controls over PPE.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Communication</h3>
                  <p className="text-gray-600">Share lessons learned across all projects to prevent similar incidents. Update safety programs based on findings.</p>
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
              <h3 className="text-2xl font-bold mb-4">Work with Tampa Bay's Safety Leader</h3>
              <p className="mb-6 text-gray-200">
                Florida Construction Specialists' commitment to safety protects our workers, the public, and your project. Our exemplary safety record demonstrates that safety and productivity go hand in hand. Contact us to discuss your commercial construction project with a team that puts safety first.
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
            title="Related Safety Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Safety-First Commercial Construction
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for commercial construction backed by comprehensive safety programs and OSHA compliance.
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
