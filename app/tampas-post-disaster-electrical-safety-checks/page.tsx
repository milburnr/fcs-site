import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, Zap, Shield, Droplets, Flame, FileCheck } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Post-Disaster Electrical Safety Checks Tampa | Hurricane Electrical Inspection",
  description: "Professional post-disaster electrical safety checks in Tampa Bay. Expert inspection of electrical systems after hurricanes, floods, and storms to prevent fire and electrocution hazards.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa's Post-Disaster Electrical Safety Checks", href: "/tampas-post-disaster-electrical-safety-checks/" },
];

const faqs = [
  {
    question: "Should I turn off power before a hurricane or flood?",
    answer: "If you can safely access your electrical panel before evacuating or as flooding begins, turning off the main breaker prevents electrical damage and hazards when water reaches the electrical system. However, don't risk contact with water to reach the panel—have the utility company disconnect if flooding is imminent and you can't safely reach the panel. Never stand in water while operating electrical equipment."
  },
  {
    question: "When can I turn power back on after flooding?",
    answer: "Never restore power yourself after flooding—even if water has receded. Electrical panels, wiring, and components that have been submerged require professional inspection before re-energization. A licensed electrician must inspect and certify the system safe. Florida requires electrical permits for post-flood restoration work. The utility company will not reconnect until inspection approves the installation."
  },
  {
    question: "What are signs of electrical damage after a storm?",
    answer: "Warning signs include: flickering or dimming lights, burning smell from outlets or panels, discolored or warm outlets/switches, sparking when plugging in devices, circuit breakers that trip repeatedly, non-functioning outlets, visible water staining near electrical components, and any buzzing or crackling sounds from the electrical system. Any of these requires immediate professional evaluation."
  },
  {
    question: "How long does post-disaster electrical inspection take?",
    answer: "Basic safety evaluation for typical homes takes 1-3 hours. Comprehensive inspection with testing takes 3-6 hours for residential, longer for commercial properties. If damage is found, additional investigation time is needed. Repair time varies based on damage extent. Emergency response prioritizes safety evaluation; detailed inspection and repairs follow. Large commercial buildings may require multiple days for thorough inspection."
  },
  {
    question: "What does post-disaster electrical inspection cost?",
    answer: "Basic safety inspection runs $150-$500 for residential, $300-$2,000+ for commercial depending on size. Comprehensive evaluation with testing costs $300-$1,000 residential, higher for commercial. These costs are typically recoverable through insurance claims when properly documented. Don't let cost deter safety evaluation—electrical hazards can cause fatal electrocution or fires that far exceed inspection costs."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/post-disaster-health-and-safety-inspections-in-tampa/", label: "Post-Disaster Safety Inspections" },
  { href: "/structural-integrity-evaluation-in-tampa-post-disaster/", label: "Structural Evaluation" },
  { href: "/commercial-property-damage-restoration-in-tampa/", label: "Commercial Property Restoration" },
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
            alt="Post-disaster electrical safety inspection in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/90 via-yellow-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa's Post-Disaster Electrical Safety Checks
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Professional electrical inspection after hurricanes, floods, and storms. Protect your property and occupants from electrical fire and electrocution hazards with expert evaluation and safe restoration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Request Electrical Inspection
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
              Hurricanes, floods, and severe storms create serious electrical hazards that can persist long after the storm passes. Water-damaged electrical systems can cause electrocution, fires, and equipment damage. Wind-damaged wiring creates shock and fire risks. Florida Construction Specialists coordinates professional electrical safety checks throughout Tampa Bay to identify hazards, ensure safe restoration, and protect property owners from electrical dangers in disaster-damaged buildings.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-800 mb-2">Electrical Systems and Water Don't Mix</h3>
                  <p className="text-red-700">Water and electricity create deadly hazards. Never enter flooded areas where electrical systems may be energized. Never touch electrical equipment, outlets, or wiring while standing in water or on wet surfaces. Do not attempt to turn power on or off if you must stand in water to reach the panel. Even after water recedes, electrical components that were submerged require professional inspection before re-energization.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Types of Electrical Damage After Disasters
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                <Droplets className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Water/Flood Damage</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Submerged electrical panels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Water intrusion in outlets and switches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Contaminated wiring in walls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Corroded connections and components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Damaged GFCI/AFCI protection</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-500">
                <Zap className="w-10 h-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Wind/Impact Damage</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Damaged service entrance and weatherhead</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Torn or damaged exterior wiring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Debris impact on electrical components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Exposed wiring from structural damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Damaged exterior fixtures and equipment</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              NFPA and NEC Requirements for Water-Damaged Electrical Systems
            </h2>

            <p className="text-gray-600 mb-6">
              The National Electrical Code (NFPA 70) and Florida Building Code govern electrical installations and set requirements for addressing water-damaged systems. Key provisions include:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Mandatory Replacement Items</h3>
                <p className="text-gray-600 mb-3">Per electrical industry standards and manufacturer requirements, the following items that have been submerged in water must be replaced—they cannot be dried out and reused:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Electrical panel boards and circuit breakers</li>
                  <li>• Ground fault circuit interrupters (GFCIs)</li>
                  <li>• Arc fault circuit interrupters (AFCIs)</li>
                  <li>• Receptacles (outlets) and switches</li>
                  <li>• Wiring in flooded areas (case-by-case evaluation)</li>
                  <li>• Light fixtures that were submerged</li>
                  <li>• Motors and electrical equipment</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Florida Permit Requirements</h3>
                <p className="text-gray-600 mb-3">Electrical repair work following disaster damage typically requires permits per Florida Building Code:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Panel replacement requires electrical permit</li>
                  <li>• Significant wiring replacement requires permit</li>
                  <li>• Service entrance repairs require permit and utility coordination</li>
                  <li>• Work must be performed by licensed electrical contractor in Florida</li>
                  <li>• Inspection required before utility reconnection</li>
                </ul>
                <p className="text-gray-600 mt-3"><strong>Code Reference:</strong> National Electrical Code (NFPA 70), Florida Building Code - Electrical, and local amendments.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Electrical Inspection Components
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Component</th>
                    <th className="px-6 py-4 text-left">Inspection Focus</th>
                    <th className="px-6 py-4 text-left">Common Issues</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Service Entrance</td>
                    <td className="px-6 py-4 text-gray-600">Weatherhead, meter base, service cable condition</td>
                    <td className="px-6 py-4 text-gray-600">Wind damage, water intrusion, loose connections</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Main Panel</td>
                    <td className="px-6 py-4 text-gray-600">Water exposure, corrosion, breaker function</td>
                    <td className="px-6 py-4 text-gray-600">Submersion damage, contamination, arc damage</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Branch Wiring</td>
                    <td className="px-6 py-4 text-gray-600">Insulation condition, moisture exposure, connections</td>
                    <td className="px-6 py-4 text-gray-600">Contaminated insulation, corrosion, physical damage</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Outlets & Switches</td>
                    <td className="px-6 py-4 text-gray-600">Water exposure, function, GFCI/AFCI operation</td>
                    <td className="px-6 py-4 text-gray-600">Internal corrosion, failed protection, arcing</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Grounding System</td>
                    <td className="px-6 py-4 text-gray-600">Ground rod, bonding, conductor integrity</td>
                    <td className="px-6 py-4 text-gray-600">Corrosion, loose connections, damage</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Equipment</td>
                    <td className="px-6 py-4 text-gray-600">HVAC, water heater, appliance connections</td>
                    <td className="px-6 py-4 text-gray-600">Motor damage, control damage, connection issues</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Fire and Electrocution Prevention
            </h2>

            <p className="text-gray-600 mb-6">
              Damaged electrical systems create two primary hazards: electrocution and fire. Understanding these risks emphasizes why professional inspection is essential:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <Zap className="w-10 h-10 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-red-700 mb-3">Electrocution Hazards</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Standing water can become energized</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Damaged insulation exposes conductors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Failed GFCI protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Compromised grounding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>Contact with downed power lines</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <Flame className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-orange-700 mb-3">Fire Hazards</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Arcing from damaged connections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Overheating from corroded conductors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Damaged insulation ignition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Short circuits in wet components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Failed overcurrent protection</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Electrical Safety Check Process
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Initial Assessment</h3>
                  <p className="text-gray-600">Before any inspection, we verify power is safely disconnected. Visual assessment identifies obvious damage and determines if it's safe to proceed with detailed inspection.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Service Entrance Evaluation</h3>
                  <p className="text-gray-600">Inspect utility service entrance, meter base, weatherhead, and service cables for damage. Coordinate with utility company if service repairs are needed before interior inspection can proceed.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Panel Inspection</h3>
                  <p className="text-gray-600">Detailed examination of main electrical panel including evidence of water exposure, corrosion, contamination, and damage. Breaker testing and evaluation. Subpanels inspected similarly.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Circuit and Device Testing</h3>
                  <p className="text-gray-600">Testing of branch circuits, outlets, switches, and protective devices. GFCI and AFCI function verification. Identification of damaged devices requiring replacement.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Documentation and Recommendations</h3>
                  <p className="text-gray-600">Comprehensive report documenting findings, photographing damage, and providing repair recommendations. Report supports insurance claims and permits repair scope for licensed electrical contractor.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Generator Safety After Disasters
            </h2>

            <p className="text-gray-600 mb-6">
              Portable generators are common after disasters but create their own hazards. OSHA and NFPA require safe generator operation:
            </p>

            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <Shield className="w-10 h-10 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Generator Safety Rules</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Operate outdoors only—never in garage or enclosed space</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Keep at least 20 feet from buildings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Never backfeed through outlet into building wiring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Use transfer switch for permanent connection</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Let cool before refueling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Use heavy-duty extension cords rated for load</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Install CO detectors in building</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Don't overload generator capacity</span>
                  </li>
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
              <h3 className="text-2xl font-bold mb-4">Need Post-Disaster Electrical Assessment?</h3>
              <p className="mb-6 text-gray-200">
                Florida Construction Specialists coordinates professional electrical safety checks throughout Tampa Bay following hurricanes, floods, and storms. Our network of licensed electricians provides thorough inspection, proper documentation for insurance claims, and safe restoration of electrical systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Request Electrical Inspection
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
            Electrical Safety After the Storm
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for professional electrical safety evaluation following disasters throughout Tampa Bay.
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
