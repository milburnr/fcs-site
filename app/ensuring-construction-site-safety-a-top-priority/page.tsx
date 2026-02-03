import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, Shield, HardHat, ClipboardCheck, Users, FileText } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Construction Site Safety Tampa | Top Priority",
  description: "Ensuring construction site safety is Florida Construction Specialists' top priority. Learn about OSHA compliance, Florida Building Code requirements, and comprehensive safety programs in Tampa Bay.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Ensuring Construction Site Safety a Top Priority", href: "/ensuring-construction-site-safety-a-top-priority/" },
];

const faqs = [
  {
    question: "What OSHA requirements apply to construction sites in Florida?",
    answer: "Florida construction sites must comply with OSHA 29 CFR 1926 (Construction Industry Standards) covering fall protection, scaffolding, excavations, electrical safety, personal protective equipment, and hazard communication. OSHA requires safety training, written safety programs, accident reporting, and regular worksite inspections. Florida also enforces state-specific requirements through the Florida Department of Business and Professional Regulation."
  },
  {
    question: "Who is responsible for safety on a commercial construction site?",
    answer: "The general contractor bears primary responsibility for overall site safety, but safety is a shared responsibility. Subcontractors must maintain safety within their scope of work. Property owners have a duty to disclose known hazards. OSHA's multi-employer worksite policy means any employer can be cited for hazards affecting their workers. Florida Construction Specialists coordinates safety among all parties on our projects."
  },
  {
    question: "What safety training is required for construction workers in Florida?",
    answer: "OSHA requires hazard-specific training including OSHA 10 or OSHA 30 hour courses, fall protection training, scaffolding competent person training, excavation safety, and equipment-specific certifications. Florida requires additional licensing and training for certain trades. Our workers receive comprehensive orientation plus ongoing toolbox talks addressing current project hazards."
  },
  {
    question: "How does Florida Construction Specialists maintain safety standards?",
    answer: "We maintain rigorous safety through comprehensive programs including written safety plans, daily site inspections, weekly toolbox talks, monthly safety audits, incident investigation procedures, and continuous improvement processes. Our dedicated safety manager oversees all projects. We exceed minimum OSHA requirements and implement best practices that have earned us an exemplary safety record."
  },
  {
    question: "What happens if a safety violation is found on a construction site?",
    answer: "Safety violations trigger immediate corrective action. Work stops in affected areas until hazards are corrected. We investigate root causes to prevent recurrence. OSHA violations can result in citations ranging from $15,625 for serious violations to $156,259 for willful or repeated violations per instance. Beyond fines, violations can delay projects, increase insurance costs, and damage reputation."
  }
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/safety-first-in-florida-commercial-construction-projects/", label: "Safety First in Commercial Projects" },
  { href: "/summer-construction-safety-tips-from-top-contractors/", label: "Summer Safety Tips" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const relatedArticles = [
  {
    "title": "Zero Accident Workplace in Tampa's Commercial Construction",
    "href": "/a-zero-accident-workplace-in-tampas-commercial-construction/",
    "description": "Creating a culture of safety on commercial construction sites."
  },
  {
    "title": "Summer Construction Safety Tips",
    "href": "/summer-construction-safety-tips-from-top-contractors/",
    "description": "Protecting workers from heat and other summer hazards in Florida."
  },
  {
    "title": "Tampa Commercial Construction Safety Standards",
    "href": "/tampa-commercial-construction-safety-standards/",
    "description": "Understanding safety requirements for Tampa area construction."
  },
  {
    "title": "Zero Accidents Commercial Construction",
    "href": "/zero-accidents-commercial-construction-safety-specialists/",
    "description": "Achieving perfect safety records on commercial projects."
  }
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
            alt="Construction site safety in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Ensuring Construction Site Safety: A Top Priority
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Florida Construction Specialists prioritizes safety on every project through comprehensive safety programs, OSHA compliance, and a culture that puts workers and the public first throughout Tampa Bay.
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
              Construction consistently ranks among the most hazardous industries, with workers facing risks from falls, struck-by incidents, electrocution, and caught-between hazards—OSHA's "Fatal Four" that account for over 60% of construction fatalities. At Florida Construction Specialists, we've built our reputation on maintaining an exemplary safety record throughout Tampa, St. Petersburg, Clearwater, and surrounding communities by making safety a core value, not just a compliance requirement.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-yellow-800 mb-2">Safety Is Everyone's Responsibility</h3>
                  <p className="text-yellow-700">Every worker has the right to a safe workplace and the responsibility to maintain it. Our safety programs empower workers to identify hazards, stop unsafe work, and contribute to continuous improvement. When everyone owns safety, everyone benefits.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              OSHA Construction Safety Requirements
            </h2>
            
            <p className="text-gray-600 mb-6">
              The Occupational Safety and Health Administration (OSHA) establishes minimum safety requirements for construction through 29 CFR 1926. These comprehensive standards address the specific hazards present on construction sites and form the foundation of our safety program. Key OSHA construction standards include:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <HardHat className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Fall Protection (Subpart M)</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Protection required at 6 feet in construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Guardrails, safety nets, or personal fall arrest</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Fall protection plans for leading edge work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Competent person supervision required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Hole covers and guardrails for openings</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Scaffolding (Subpart L)</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Design capacity 4x maximum intended load</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Competent person inspection before each shift</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Guardrails, midrails, and toeboards required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Safe access via ladders or stairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>No work during storms or high winds</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Florida Building Code Safety Requirements
            </h2>

            <p className="text-gray-600 mb-6">
              The Florida Building Code (FBC), based on the International Building Code with Florida-specific amendments, establishes construction standards that affect both building safety and construction process safety. The 8th Edition (2023) Florida Building Code includes provisions that directly impact worksite safety:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Structural Requirements During Construction</h3>
                <p className="text-gray-600 mb-3">FBC Chapter 33 addresses safeguards during construction, requiring protection of adjacent property, pedestrian protection, and temporary structural support. Florida's hurricane provisions require particular attention to securing materials and partially completed structures against wind damage—critical in Tampa Bay's hurricane-prone environment.</p>
                <p className="text-gray-600"><strong>FBC Reference:</strong> Chapter 33 - Safeguards During Construction</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Fire Safety During Construction</h3>
                <p className="text-gray-600 mb-3">FBC and National Fire Protection Association (NFPA) standards require fire prevention measures during construction including hot work permits, fire watch requirements, temporary fire extinguishers, and maintaining clear egress paths. Multi-story buildings under construction require standpipe systems and fire department access.</p>
                <p className="text-gray-600"><strong>FBC Reference:</strong> Chapter 33 and NFPA 241 (Safeguarding Construction)</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Excavation and Foundation Safety</h3>
                <p className="text-gray-600 mb-3">OSHA Subpart P excavation standards require protective systems (sloping, shoring, or shielding) for excavations deeper than 5 feet, or at any depth with hazardous conditions. Florida's high water table and sandy soils create additional cave-in risks requiring careful engineering controls.</p>
                <p className="text-gray-600"><strong>OSHA Reference:</strong> 29 CFR 1926 Subpart P - Excavations</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Comprehensive Safety Program
            </h2>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists maintains a comprehensive safety program that exceeds minimum regulatory requirements. Our program is built on the principle that safety must be integrated into every aspect of operations—from project planning through completion.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <ClipboardCheck className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Pre-Construction Planning</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Site-specific safety plans developed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Job hazard analysis for each task</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Subcontractor safety prequalification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Emergency response plans established</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Utility location and protection plans</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Users className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Ongoing Safety Management</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Daily site safety inspections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Weekly toolbox safety talks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Monthly comprehensive audits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Incident investigation and corrective action</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Safety performance tracking and reporting</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Common Construction Hazards We Address
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Hazard Category</th>
                    <th className="px-6 py-4 text-left">Examples</th>
                    <th className="px-6 py-4 text-left">Controls</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Falls</td>
                    <td className="px-6 py-4 text-gray-600">Roof work, scaffolds, ladders, floor openings</td>
                    <td className="px-6 py-4 text-gray-600">Guardrails, personal fall arrest, covers</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Struck-By</td>
                    <td className="px-6 py-4 text-gray-600">Falling objects, vehicles, cranes</td>
                    <td className="px-6 py-4 text-gray-600">Hard hats, barricades, spotters, signage</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Electrocution</td>
                    <td className="px-6 py-4 text-gray-600">Power lines, temporary wiring, tools</td>
                    <td className="px-6 py-4 text-gray-600">GFCI protection, lockout/tagout, training</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Caught-Between</td>
                    <td className="px-6 py-4 text-gray-600">Trenches, machinery, materials</td>
                    <td className="px-6 py-4 text-gray-600">Shoring, guarding, safe work procedures</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Heat Illness</td>
                    <td className="px-6 py-4 text-gray-600">Florida heat and humidity exposure</td>
                    <td className="px-6 py-4 text-gray-600">Hydration, rest breaks, acclimatization</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Silica Exposure</td>
                    <td className="px-6 py-4 text-gray-600">Cutting concrete, masonry, tile</td>
                    <td className="px-6 py-4 text-gray-600">Wet methods, vacuum systems, respirators</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Safety Training and Competency
            </h2>

            <p className="text-gray-600 mb-6">
              Effective safety requires knowledgeable workers who understand hazards and how to control them. Our training program ensures all workers have the knowledge and skills to work safely:
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">New Worker Orientation</h3>
                  <p className="text-gray-600">All workers receive site-specific orientation covering emergency procedures, site rules, hazard communication, and reporting procedures before beginning work. Orientation is documented and verified.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">OSHA Training Requirements</h3>
                  <p className="text-gray-600">Workers complete OSHA 10-Hour or 30-Hour training as appropriate. Supervisors receive OSHA 30-Hour and competent person training for their areas of responsibility. Training records are maintained and verified.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Task-Specific Training</h3>
                  <p className="text-gray-600">Workers receive training specific to their tasks: fall protection for elevated work, excavation safety for earthwork, confined space for utility work, crane signals for rigging operations, and equipment operation certifications.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Ongoing Toolbox Talks</h3>
                  <p className="text-gray-600">Weekly toolbox talks address current project hazards, seasonal concerns (heat illness in summer, hurricane preparedness), lessons learned from incidents, and OSHA focus topics. Attendance is documented.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Public Safety on Construction Sites
            </h2>

            <p className="text-gray-600 mb-6">
              Construction sites in Tampa's urban environment require careful attention to public safety. Our public protection measures include:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Pedestrian Protection</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Covered walkways where overhead work occurs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Clearly marked pedestrian routes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Flaggers for equipment crossings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>ADA-compliant temporary access</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Site Security</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Perimeter fencing with warning signs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Locked gates during non-work hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Security lighting for evening hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Visitor check-in and escort procedures</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Emergency Preparedness
            </h2>

            <p className="text-gray-600 mb-6">
              Construction sites require robust emergency preparedness given the inherent hazards. Our emergency response capabilities include:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-3">Emergency Equipment</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• First aid kits at multiple locations</li>
                    <li>• AED (automated external defibrillator)</li>
                    <li>• Fire extinguishers per OSHA requirements</li>
                    <li>• Emergency eyewash stations</li>
                    <li>• Rescue equipment for fall protection</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-3">Emergency Procedures</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Written emergency action plan</li>
                    <li>• Posted emergency contact numbers</li>
                    <li>• Designated assembly areas</li>
                    <li>• Evacuation routes marked and maintained</li>
                    <li>• Regular emergency drills conducted</li>
                  </ul>
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
              <h3 className="text-2xl font-bold mb-4">Partner with Tampa's Safety-Focused Contractor</h3>
              <p className="mb-6 text-gray-200">
                Florida Construction Specialists brings a proven safety record to every commercial construction project in Tampa Bay. Our commitment to safety protects workers, the public, and your project timeline. Contact us to discuss your construction needs with a team that prioritizes safety.
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
      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      

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
            Safety-First Construction in Tampa Bay
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for commercial construction backed by an exemplary safety record.
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
