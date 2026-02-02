import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, Shield, ClipboardCheck, Building2, Droplets, Zap } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Post-Disaster Health & Safety Inspections Tampa | Hurricane Building Assessment",
  description: "Professional post-disaster health and safety inspections in Tampa Bay. Expert assessment of hurricane, flood, and storm damage to ensure building safety and support insurance claims.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Post-Disaster Health and Safety Inspections in Tampa", href: "/post-disaster-health-and-safety-inspections-in-tampa/" },
];

const faqs = [
  {
    question: "What is included in a post-disaster health and safety inspection?",
    answer: "Comprehensive inspection covers structural assessment (foundation, walls, roof, connections), electrical systems (panels, wiring, outlets, grounding), plumbing and gas systems, HVAC assessment, mold and water intrusion evaluation, hazardous materials assessment, and air quality concerns. Results include documentation suitable for insurance claims, occupancy determinations, and repair planning. Inspectors identify both immediate hazards and conditions requiring monitoring or repair."
  },
  {
    question: "How soon after a disaster should a building be inspected?",
    answer: "Initial safety assessment should occur as soon as safely accessible—often within 24-48 hours post-disaster. However, don't enter buildings that may be structurally compromised. Emergency responders may conduct rapid external assessments first. Comprehensive inspection follows once immediate hazards are controlled. For hurricane damage, inspection typically begins once storm conditions pass and roads are accessible. Delaying inspection risks missing time-sensitive damage like hidden water intrusion."
  },
  {
    question: "Who is qualified to perform post-disaster inspections in Florida?",
    answer: "Different components require different qualifications. Structural assessment requires licensed Professional Engineers (PE) or architects. Electrical inspection requires licensed electricians or electrical engineers. Mold assessment requires licensed mold assessors in Florida. General contractors can coordinate overall assessment and identify items requiring specialist review. Florida Construction Specialists works with qualified professionals in each discipline."
  },
  {
    question: "What are the most common health hazards after hurricanes in Tampa?",
    answer: "Common post-hurricane health hazards include mold growth (can begin within 24-48 hours of water intrusion), contaminated floodwater containing sewage and chemicals, carbon monoxide from generators and equipment, exposed or damaged electrical systems, compromised structural elements, debris and sharp objects, standing water breeding mosquitoes, and heat exposure during cleanup. Professional inspection identifies these hazards and recommends appropriate remediation."
  },
  {
    question: "How do post-disaster inspections support insurance claims?",
    answer: "Thorough inspection documentation provides objective evidence of damage extent and causation—critical for insurance claims. Professional reports carry more weight than owner observations. Photos, measurements, and expert opinions support claim amounts. Inspection reports also identify hidden damage that initial adjusters might miss. We recommend inspection before making temporary repairs to ensure all damage is documented. Our reports are formatted to support claim submissions."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/structural-integrity-evaluation-in-tampa-post-disaster/", label: "Structural Evaluation Services" },
  { href: "/tampas-post-disaster-electrical-safety-checks/", label: "Electrical Safety Checks" },
  { href: "/hurricane-proof-reconstruction-services-in-tampa/", label: "Hurricane-Proof Reconstruction" },
  { href: "/contact/", label: "Schedule Inspection" },
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
            alt="Post-disaster safety inspection in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Post-Disaster Health and Safety Inspections in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Professional inspection services to assess building safety after hurricanes, floods, and storms. Protect occupants, document damage for insurance claims, and plan effective repairs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Request Inspection
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
              After hurricanes, floods, or other disasters strike Tampa Bay, the immediate priority is determining whether buildings are safe to occupy. Post-disaster health and safety inspections identify structural damage, electrical hazards, water intrusion, mold risks, and other conditions that threaten occupant health and safety. Florida Construction Specialists provides comprehensive inspection services that document damage for insurance claims while ensuring informed decisions about occupancy and repairs.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-800 mb-2">Do Not Enter Potentially Unsafe Buildings</h3>
                  <p className="text-red-700">Disaster-damaged buildings may have hidden hazards including structural instability, electrical dangers, gas leaks, and contaminated water. Never assume a building is safe based on exterior appearance. If you observe obvious damage, lean, or structural distortion, stay out until professional assessment confirms safety. When in doubt, don't enter.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Types of Post-Disaster Inspections
            </h2>
            
            <p className="text-gray-600 mb-6">
              Different disaster types and building conditions require different inspection approaches. Our services include:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Rapid Safety Assessment</h3>
                <p className="text-gray-600 mb-3">Initial evaluation to determine immediate occupancy safety:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Exterior structural assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Obvious hazard identification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Utility status evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Posted placard (Green/Yellow/Red)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <ClipboardCheck className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Comprehensive Inspection</h3>
                <p className="text-gray-600 mb-3">Detailed assessment for insurance and repair planning:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Full structural evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>All building systems assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Moisture and mold evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Detailed documentation and photos</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Inspection Components
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                <Building2 className="w-8 h-8 text-blue-500 mb-3" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Structural Safety Assessment</h3>
                <p className="text-gray-600 mb-3">Evaluates building stability and structural integrity:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-1 text-gray-600">
                    <li>• Foundation condition and settlement</li>
                    <li>• Wall integrity and connections</li>
                    <li>• Roof structure and covering</li>
                    <li>• Floor system condition</li>
                  </ul>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Column and beam damage</li>
                    <li>• Building lean or displacement</li>
                    <li>• Connection failures</li>
                    <li>• Load path continuity</li>
                  </ul>
                </div>
                <p className="text-gray-600 mt-3"><strong>Florida Building Code Reference:</strong> FBC Chapter 33 addresses safety during construction and repair; structural adequacy evaluated against design loads in FBC Chapter 16.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <Zap className="w-8 h-8 text-yellow-500 mb-3" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Electrical System Inspection</h3>
                <p className="text-gray-600 mb-3">Identifies electrical hazards that can cause fire or electrocution:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-1 text-gray-600">
                    <li>• Service entrance and meter condition</li>
                    <li>• Panel integrity and water intrusion</li>
                    <li>• Wiring damage or exposure</li>
                    <li>• Ground fault protection function</li>
                  </ul>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Outlet and switch damage</li>
                    <li>• Light fixture water exposure</li>
                    <li>• Generator connections</li>
                    <li>• Overall system safety</li>
                  </ul>
                </div>
                <p className="text-gray-600 mt-3"><strong>Code Reference:</strong> National Electrical Code (NFPA 70) and Florida Building Code Chapter 27 govern electrical safety requirements.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
                <Droplets className="w-8 h-8 text-green-500 mb-3" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Water Intrusion and Mold Assessment</h3>
                <p className="text-gray-600 mb-3">Evaluates moisture damage and mold risk—critical in Florida's humid climate:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-1 text-gray-600">
                    <li>• Visible water damage mapping</li>
                    <li>• Moisture meter readings</li>
                    <li>• Thermal imaging for hidden moisture</li>
                    <li>• Water intrusion pathways</li>
                  </ul>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Visible mold identification</li>
                    <li>• Conditions conducive to mold growth</li>
                    <li>• Air quality concerns</li>
                    <li>• Remediation scope assessment</li>
                  </ul>
                </div>
                <p className="text-gray-600 mt-3"><strong>Florida Requirement:</strong> Mold assessment requires a licensed mold assessor per Florida Statute 468.84. We coordinate with licensed assessors for mold concerns.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Common Post-Disaster Health Hazards
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Hazard</th>
                    <th className="px-6 py-4 text-left">Health Risk</th>
                    <th className="px-6 py-4 text-left">Inspection Focus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Mold Growth</td>
                    <td className="px-6 py-4 text-gray-600">Respiratory illness, allergic reactions, toxic exposure</td>
                    <td className="px-6 py-4 text-gray-600">Moisture assessment, visible mold, air quality</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Contaminated Water</td>
                    <td className="px-6 py-4 text-gray-600">Gastrointestinal illness, infection, chemical exposure</td>
                    <td className="px-6 py-4 text-gray-600">Flood water extent, sewage backup, well contamination</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Electrical Hazards</td>
                    <td className="px-6 py-4 text-gray-600">Electrocution, fire</td>
                    <td className="px-6 py-4 text-gray-600">System damage, water intrusion in electrical</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Structural Instability</td>
                    <td className="px-6 py-4 text-gray-600">Collapse, falling debris</td>
                    <td className="px-6 py-4 text-gray-600">Structural damage, compromised elements</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Gas Leaks</td>
                    <td className="px-6 py-4 text-gray-600">Explosion, asphyxiation</td>
                    <td className="px-6 py-4 text-gray-600">Gas line integrity, appliance connections</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Asbestos Disturbance</td>
                    <td className="px-6 py-4 text-gray-600">Lung disease, cancer (long-term)</td>
                    <td className="px-6 py-4 text-gray-600">Damaged materials in pre-1980 buildings</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Building Placard System
            </h2>

            <p className="text-gray-600 mb-6">
              After major disasters, building officials and inspectors may post placards indicating building status. Understanding these ratings helps occupants and emergency responders:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-500">
                <div className="text-4xl mb-3">🟢</div>
                <h3 className="text-xl font-bold text-green-700 mb-3">Green - Inspected</h3>
                <p className="text-gray-600">Building appears safe for occupancy. No obvious structural hazards observed. Normal occupancy permitted. May have minor damage not affecting safety.</p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-500">
                <div className="text-4xl mb-3">🟡</div>
                <h3 className="text-xl font-bold text-yellow-700 mb-3">Yellow - Restricted Use</h3>
                <p className="text-gray-600">Building has damage limiting its use. Specific restrictions noted on placard. Limited entry may be permitted. Further evaluation needed before full occupancy.</p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-2 border-red-500">
                <div className="text-4xl mb-3">🔴</div>
                <h3 className="text-xl font-bold text-red-700 mb-3">Red - Unsafe</h3>
                <p className="text-gray-600">Building is unsafe to enter or occupy. Significant structural damage, collapse risk, or other serious hazards. Entry prohibited except for emergency access with proper precautions.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Inspection Process
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Initial Contact and Scheduling</h3>
                  <p className="text-gray-600">Contact us with basic information about the property and damage situation. We'll assess urgency and schedule appropriate inspection services. Emergency assessments can often be scheduled within 24-48 hours post-disaster.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Pre-Entry Safety Check</h3>
                  <p className="text-gray-600">Before entering, inspectors verify utilities are properly controlled, no obvious structural collapse risks exist, and appropriate personal protective equipment is used. If conditions are unsafe, alternative assessment methods are used.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Systematic Inspection</h3>
                  <p className="text-gray-600">Thorough inspection of all accessible areas using standardized assessment protocols. Documentation includes extensive photography, measurements, observations, and instrument readings (moisture meters, thermal imaging as applicable).</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Specialist Coordination</h3>
                  <p className="text-gray-600">If specialized assessment is needed (structural engineering, licensed mold assessment, electrical evaluation), we coordinate with qualified professionals. Reports are consolidated into comprehensive documentation.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Reporting and Recommendations</h3>
                  <p className="text-gray-600">Written inspection report details all findings, includes photographic documentation, identifies hazards requiring immediate attention, and provides recommendations for repairs. Reports are formatted to support insurance claims.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Post-Disaster Inspection Costs
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Service</th>
                    <th className="px-6 py-4 text-left">Typical Range</th>
                    <th className="px-6 py-4 text-left">Includes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Rapid Safety Assessment</td>
                    <td className="px-6 py-4">$300 - $800</td>
                    <td className="px-6 py-4 text-gray-600">Exterior/limited interior, occupancy determination</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Comprehensive Inspection (Residential)</td>
                    <td className="px-6 py-4">$500 - $1,500</td>
                    <td className="px-6 py-4 text-gray-600">All systems, detailed report with photos</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Comprehensive Inspection (Commercial)</td>
                    <td className="px-6 py-4">$1,500 - $5,000+</td>
                    <td className="px-6 py-4 text-gray-600">Size-dependent, all systems, detailed documentation</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Structural Engineering Evaluation</td>
                    <td className="px-6 py-4">$2,000 - $15,000</td>
                    <td className="px-6 py-4 text-gray-600">PE-stamped structural assessment</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Licensed Mold Assessment</td>
                    <td className="px-6 py-4">$500 - $2,000</td>
                    <td className="px-6 py-4 text-gray-600">Visual, sampling, lab analysis, remediation protocol</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              *Costs vary based on building size, damage extent, and required specialists. Inspection costs are typically recoverable as part of insurance claims. Contact us for specific estimates.
            </p>

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
              <h3 className="text-2xl font-bold mb-4">Need Post-Disaster Inspection?</h3>
              <p className="mb-6 text-gray-200">
                Florida Construction Specialists provides comprehensive post-disaster health and safety inspections throughout Tampa Bay. Our expert team documents damage, identifies hazards, and provides the information you need for safe occupancy decisions and successful insurance claims.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Request Inspection
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
            Tampa Bay Post-Disaster Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for professional post-disaster inspection and recovery services throughout Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Inspection
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
