import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, MapPin, Zap, Droplets, Flame, Radio } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Utility Mapping for Commercial Buildings Tampa | Underground Utility Location",
  description: "Professional utility mapping services for commercial buildings in Tampa. Locate underground utilities before construction to prevent damage, injuries, and costly delays using SUE and GPR technology.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Utility Mapping for Commercial Buildings", href: "/utility-mapping-for-commercial-buildings/" },
];

const faqs = [
  {
    question: "What is Sunshine 811 and why is it required?",
    answer: "Sunshine 811 (call 811 or 1-800-432-4770) is Florida's One-Call notification system required before any excavation. State law mandates calling at least 2 full business days before digging. Utility owners then mark approximate locations of their underground facilities. However, 811 locates are approximate and may not identify all utilities—professional utility locating provides more precise information for construction planning and safety."
  },
  {
    question: "What is the difference between 811 locates and SUE?",
    answer: "Sunshine 811 provides approximate utility locations (typically ±24 inches) marked with paint or flags. Subsurface Utility Engineering (SUE) provides precise horizontal and vertical location through professional surveying methods including ground penetrating radar and vacuum excavation. SUE follows ASCE 38-02 quality levels from basic (A) to precise (D). For commercial construction with significant excavation, SUE provides the accuracy needed to avoid utility conflicts."
  },
  {
    question: "What utilities are typically mapped?",
    answer: "Utility mapping identifies: electric lines (primary and secondary), natural gas mains and services, water mains and services, sanitary sewer, storm sewer, telecommunications (phone, cable, fiber), fire protection lines, and private utilities (often not in 811 system). Commercial sites may also have industrial utilities, process piping, and abandoned utilities that need identification."
  },
  {
    question: "How much does utility mapping cost for commercial projects?",
    answer: "Costs depend on site size, complexity, and quality level required. Basic 811 notification is free. Professional SUE services range from $1,000-$5,000 for small commercial sites to $10,000-$50,000+ for large or complex sites. These costs are minimal compared to the cost of utility strikes—a single gas line hit can cost $50,000-$500,000 in repairs, delays, fines, and liability."
  },
  {
    question: "What happens if an underground utility is damaged during construction?",
    answer: "Utility damage consequences include: immediate safety hazards (electrocution, explosion, flooding), service interruption to neighboring properties, repair costs billed to the contractor/owner, OSHA citations and fines, project delays during repair, potential criminal liability for injuries, and civil liability for damages. Proper utility location before excavation prevents these outcomes and is required by law and OSHA regulations."
  }
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/leading-engineering-services-for-commercial-buildings-in-tampa/", label: "Engineering Services" },
  { href: "/ensuring-construction-site-safety-a-top-priority/", label: "Construction Safety" },
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
            alt="Utility mapping for commercial construction in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Utility Mapping for Commercial Buildings in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Professional underground utility location services for commercial construction. Prevent utility strikes, avoid costly delays, and ensure worker safety with accurate mapping before excavation.
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
              Commercial construction sites in Tampa Bay are underlain by a complex network of underground utilities: electric, gas, water, sewer, telecommunications, and more. Striking these utilities during excavation causes injuries, property damage, service disruptions, project delays, and significant liability. Florida Construction Specialists coordinates professional utility mapping for commercial projects, ensuring safe excavation and avoiding the costly consequences of utility strikes.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-800 mb-2">Florida Law Requires Utility Notification Before Digging</h3>
                  <p className="text-red-700">Florida Statute 556 requires anyone excavating to notify Sunshine 811 at least two full business days before digging. Failure to comply is a third-degree felony if damage occurs. OSHA 29 CFR 1926.651 also requires utility location before excavation. These requirements exist because utility strikes cause serious injuries and deaths every year.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Underground Utilities on Commercial Sites
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Zap className="w-10 h-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Electrical Utilities</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>High-voltage primary lines (4kV-35kV)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Secondary distribution lines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Service connections to buildings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Streetlight and traffic signal feeds</span>
                  </li>
                </ul>
                <p className="text-red-600 mt-3 text-sm font-semibold">⚠️ Contact with energized lines causes electrocution and arc flash burns</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Flame className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Gas Utilities</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Natural gas transmission mains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Distribution mains and services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Propane lines (private systems)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Industrial process piping</span>
                  </li>
                </ul>
                <p className="text-red-600 mt-3 text-sm font-semibold">⚠️ Gas line strikes can cause explosions and fires</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Droplets className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Water and Sewer</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Potable water mains and services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Fire protection water lines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Sanitary sewer mains and laterals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Storm sewer and drainage</span>
                  </li>
                </ul>
                <p className="text-orange-600 mt-3 text-sm font-semibold">⚠️ Water main breaks flood excavations and cause erosion</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Radio className="w-10 h-10 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Telecommunications</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Fiber optic cables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Copper telephone lines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Cable television</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Private data networks</span>
                  </li>
                </ul>
                <p className="text-orange-600 mt-3 text-sm font-semibold">⚠️ Fiber cuts disrupt critical business and emergency services</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Utility Mapping Methods
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Sunshine 811 Notification</h3>
                <p className="text-gray-600 mb-3">Required first step for any excavation in Florida:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Call 811 or 1-800-432-4770 at least 2 full business days before digging</li>
                  <li>• Utility owners mark approximate locations with paint/flags</li>
                  <li>• Color coding: Red=Electric, Yellow=Gas, Blue=Water, Green=Sewer, Orange=Telecom</li>
                  <li>• Accuracy typically ±18-24 inches horizontal</li>
                  <li>• No depth information provided</li>
                  <li>• Private utilities may not be included</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Ground Penetrating Radar (GPR)</h3>
                <p className="text-gray-600 mb-3">Non-destructive subsurface imaging:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Identifies metallic and non-metallic utilities</li>
                  <li>• Provides depth information</li>
                  <li>• Detects abandoned or unmapped utilities</li>
                  <li>• Works through pavement and soil</li>
                  <li>• Limitations in high-clay or saturated soils</li>
                  <li>• Typical accuracy ±6 inches horizontal, ±15% vertical</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Electromagnetic Location</h3>
                <p className="text-gray-600 mb-3">Active and passive detection of metallic utilities:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Traces metallic pipes and cables</li>
                  <li>• Can induce signal onto target utility</li>
                  <li>• Provides depth estimates for metallic lines</li>
                  <li>• Does not detect non-metallic utilities (PVC, fiber)</li>
                  <li>• Professional interpretation required</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Vacuum Excavation (Potholing)</h3>
                <p className="text-gray-600 mb-3">Physical exposure for precise location:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Exposes utilities without damage using vacuum and water/air</li>
                  <li>• Confirms exact horizontal and vertical position</li>
                  <li>• Identifies utility type, size, and material</li>
                  <li>• ASCE 38-02 Quality Level A (highest accuracy)</li>
                  <li>• Required for critical crossings and conflicts</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              ASCE 38-02 Quality Levels
            </h2>

            <p className="text-gray-600 mb-6">
              The American Society of Civil Engineers Standard 38-02 establishes quality levels for subsurface utility engineering:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Quality Level</th>
                    <th className="px-6 py-4 text-left">Method</th>
                    <th className="px-6 py-4 text-left">Accuracy</th>
                    <th className="px-6 py-4 text-left">Appropriate Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Level D</td>
                    <td className="px-6 py-4 text-gray-600">Records research</td>
                    <td className="px-6 py-4 text-gray-600">Low (approximate)</td>
                    <td className="px-6 py-4 text-gray-600">Early planning, feasibility</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Level C</td>
                    <td className="px-6 py-4 text-gray-600">Surface features survey</td>
                    <td className="px-6 py-4 text-gray-600">Low-Medium</td>
                    <td className="px-6 py-4 text-gray-600">Preliminary design</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Level B</td>
                    <td className="px-6 py-4 text-gray-600">Geophysical location</td>
                    <td className="px-6 py-4 text-gray-600">Medium-High (±12")</td>
                    <td className="px-6 py-4 text-gray-600">Design, bid documents</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-green-50">
                    <td className="px-6 py-4 font-medium">Level A</td>
                    <td className="px-6 py-4 text-gray-600">Vacuum excavation</td>
                    <td className="px-6 py-4 text-gray-600">Highest (exact)</td>
                    <td className="px-6 py-4 text-gray-600">Critical crossings, conflicts</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              The Cost of Utility Strikes
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-700 mb-3">Direct Costs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">$</span>
                    <span>Utility repair: $5,000 - $500,000+</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">$</span>
                    <span>Service interruption claims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">$</span>
                    <span>OSHA fines: $15,625 - $156,259/violation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">$</span>
                    <span>Medical costs for injuries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">$</span>
                    <span>Property damage to excavation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-700 mb-3">Indirect Costs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Project delays (days to weeks)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Schedule impacts to other trades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Legal fees and litigation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Reputation damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Insurance premium increases</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Utility Mapping Process
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Records Research (Level D)</h3>
                  <p className="text-gray-600">We begin by collecting utility records from all providers, reviewing as-built drawings, and researching site history. This establishes baseline understanding of expected utilities.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">811 Notification</h3>
                  <p className="text-gray-600">We coordinate Sunshine 811 notification well before excavation. Utility owners mark their facilities. We document markings and compare to records.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Professional Geophysical Location (Level B)</h3>
                  <p className="text-gray-600">For commercial projects with significant excavation, we engage SUE providers to perform GPR and electromagnetic surveys, providing more precise location data with depth information.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Potholing Critical Utilities (Level A)</h3>
                  <p className="text-gray-600">At critical crossing points and conflict locations, vacuum excavation exposes utilities for precise measurement. This eliminates uncertainty where accuracy is essential.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Documentation and Design Integration</h3>
                  <p className="text-gray-600">All utility information is documented in CAD/BIM format and integrated into construction documents. Excavation plans account for known utilities with appropriate clearances.</p>
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
              <h3 className="text-2xl font-bold mb-4">Safe Excavation Starts with Utility Mapping</h3>
              <p className="mb-6 text-gray-200">
                Florida Construction Specialists coordinates professional utility mapping for commercial construction throughout Tampa Bay. Our systematic approach to utility location protects workers, avoids costly utility strikes, and keeps projects on schedule.
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
            Know What's Below Before You Dig
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for commercial construction with comprehensive utility mapping and safe excavation practices.
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
