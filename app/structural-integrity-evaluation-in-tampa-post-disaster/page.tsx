import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, Search, Building2, FileText, Shield } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Structural Integrity Evaluation Tampa | FCS",
  description: "Professional structural integrity evaluation in Tampa post-disaster. Licensed engineers assess commercial building safety after hurricanes, floods, and storms. Detailed reports for insurance and safety decisions.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Structural Integrity Evaluation in Tampa Post-Disaster", href: "/structural-integrity-evaluation-in-tampa-post-disaster/" },
];

const faqs = [
  {
    question: "When is a structural evaluation required after a disaster?",
    answer: "Structural evaluation is required whenever building safety is in question—after any significant impact, visible structural damage, foundation movement, or building leaning. Florida Building Code requires evaluation before occupancy when structural damage may have occurred. Insurance companies typically require engineering assessment for large claims. Even when not legally required, evaluation provides documentation protecting property owners from liability."
  },
  {
    question: "Who can perform structural evaluations in Florida?",
    answer: "Florida law requires structural assessments to be performed by licensed Professional Engineers (PE) with structural engineering expertise, or licensed architects for certain building types. Florida Construction Specialists works with licensed structural engineers who specialize in post-disaster assessment. Their PE-stamped reports carry legal authority for occupancy decisions and insurance claims."
  },
  {
    question: "How long does a structural evaluation take?",
    answer: "Initial safety assessment determining occupancy status can often be completed within hours. Comprehensive structural evaluation with detailed documentation typically requires 1-3 days of field work depending on building size and damage extent. Final engineering reports are usually completed within 1-2 weeks. Emergency circumstances can often be expedited."
  },
  {
    question: "What does structural evaluation cost?",
    answer: "Structural evaluation costs vary by building size and complexity. Initial safety assessments typically range from $500-$2,500. Comprehensive evaluations with PE-stamped reports run $2,000-$15,000 for most commercial buildings. Large or complex structures may require more extensive investigation. These costs are typically recoverable as part of insurance claims."
  },
  {
    question: "What happens if structural damage is found?",
    answer: "If structural damage is identified, the engineer will classify its severity and provide recommendations. Minor damage may require monitoring or simple repairs. Moderate damage typically requires engineered repair plans before reoccupancy. Severe damage may require temporary shoring, partial demolition, or complete building replacement. We provide both evaluation and any required repair services."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/property-damage-assessment-for-insurance-claims-in-tampa/", label: "Damage Assessment Services" },
  { href: "/hurricane-proof-reconstruction-services-in-tampa/", label: "Hurricane-Proof Reconstruction" },
  { href: "/commercial-property-damage-restoration-in-tampa/", label: "Commercial Property Restoration" },
  { href: "/contact/", label: "Schedule Evaluation" },
];

const relatedArticles = [
  {
    "title": "Understanding Tampa Insurance Restoration Claims",
    "href": "/understanding-tampa-insurance-restoration-claims/",
    "description": "Navigate the insurance claim process for property damage restoration in Tampa Bay."
  },
  {
    "title": "Tampa Insurance Restoration for Hurricane Damage",
    "href": "/tampa-insurance-restoration-for-hurricane-damage/",
    "description": "Expert restoration services for properties damaged by Florida hurricanes."
  },
  {
    "title": "Insurance Arbitration and Appraisal",
    "href": "/insurance-arbitration-appraisal/",
    "description": "When and how to use appraisal and arbitration to resolve insurance disputes."
  },
  {
    "title": "Claims Negotiation for Property Damage",
    "href": "/claims-negotiation-for-property-damage-in-tampa/",
    "description": "Maximize your insurance settlement with professional claims support."
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
            src="/images/hurricane-ian/hurricane-ian-display.webp"
            alt="Structural integrity evaluation in Tampa post-disaster"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Structural Integrity Evaluation in Tampa Post-Disaster
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Professional structural assessment by licensed engineers to determine building safety after hurricanes, floods, and storms. Protect occupants and support insurance claims.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Request Structural Evaluation
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
              After hurricanes, floods, or other disasters damage Tampa Bay commercial properties, the critical first question is: Is the building safe? Structural integrity evaluation by licensed engineers provides the definitive answer, protecting occupants from hidden dangers and property owners from liability. Florida Construction Specialists coordinates comprehensive structural assessments that determine occupancy safety, document damage for insurance claims, and establish the scope of required repairs.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-800 mb-2">Building Safety First</h3>
                  <p className="text-red-700">Never assume a building is safe after significant disaster damage. Structural failures can occur hours or days after initial damage when weakened elements finally give way. Keep people out of potentially damaged buildings until qualified professionals confirm safety. When in doubt, request emergency structural assessment.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Types of Structural Damage After Disasters
            </h2>
            
            <p className="text-gray-600 mb-6">
              Hurricanes and severe storms can cause various types of structural damage, some obvious and some hidden. Professional evaluation identifies all damage types and assesses their impact on building safety:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Building2 className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Visible Structural Damage</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Roof collapse or partial failure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Wall failures or separation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Foundation cracking or settlement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Column or beam damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Building lean or displacement</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Search className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Hidden Structural Damage</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Roof-to-wall connection failures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Concealed framing damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Foundation undermining from flooding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Steel corrosion or connection damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Weakened load-bearing walls</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Structural Evaluation Services
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Emergency Safety Assessment</h3>
                <p className="text-gray-600 mb-3">Rapid evaluation to determine if a building is safe to enter and occupy. Engineers assess immediate hazards, structural stability, and life safety concerns. Results in a preliminary determination: Safe to Occupy, Restricted Use, or Unsafe/Do Not Enter.</p>
                <p className="text-gray-600"><strong>Turnaround:</strong> Same day or next day for most commercial buildings.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Comprehensive Structural Evaluation</h3>
                <p className="text-gray-600 mb-3">Detailed assessment of all structural systems including foundations, floor systems, walls, columns, beams, and roof structure. Identifies all damage, classifies severity, and provides repair recommendations. Includes PE-stamped engineering report suitable for insurance and permitting.</p>
                <p className="text-gray-600"><strong>Turnaround:</strong> Field work 1-3 days; written report 1-2 weeks.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Forensic Structural Investigation</h3>
                <p className="text-gray-600 mb-3">In-depth investigation to determine causes of failure and document conditions for litigation, insurance disputes, or detailed reconstruction planning. May include destructive testing, materials analysis, and structural calculations.</p>
                <p className="text-gray-600"><strong>Turnaround:</strong> Varies based on scope; typically 2-6 weeks.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              What Structural Evaluation Includes
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Field Investigation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Visual inspection of all accessible areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Measurement of deflections and displacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Plumb and level checks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Connection inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Crack mapping and monitoring</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <FileText className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Documentation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Detailed photo documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Damage location mapping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>PE-stamped engineering report</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Repair recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Cost estimates for repairs</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Structural Evaluation Costs in Tampa Bay
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Evaluation Type</th>
                    <th className="px-6 py-4 text-left">Price Range</th>
                    <th className="px-6 py-4 text-left">Deliverables</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Emergency Safety Assessment</td>
                    <td className="px-6 py-4">$500 - $2,500</td>
                    <td className="px-6 py-4 text-gray-600">Occupancy determination letter</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Standard Evaluation (small building)</td>
                    <td className="px-6 py-4">$2,000 - $5,000</td>
                    <td className="px-6 py-4 text-gray-600">PE-stamped report with photos</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Comprehensive Evaluation (mid-size)</td>
                    <td className="px-6 py-4">$5,000 - $15,000</td>
                    <td className="px-6 py-4 text-gray-600">Detailed report, repair recommendations</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Large/Complex Building</td>
                    <td className="px-6 py-4">$15,000 - $50,000+</td>
                    <td className="px-6 py-4 text-gray-600">Full investigation and documentation</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Forensic Investigation</td>
                    <td className="px-6 py-4">$10,000 - $75,000+</td>
                    <td className="px-6 py-4 text-gray-600">Expert witness-quality documentation</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              *Prices reflect 2024 Tampa Bay market rates. Costs vary based on building size, complexity, damage extent, and investigation scope. Structural evaluation costs are typically recoverable as part of insurance claims.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Structural Evaluation Matters
            </h2>

            <p className="text-gray-600 mb-6">
              <strong>Occupant Safety:</strong> The primary purpose of structural evaluation is protecting people. Buildings with compromised structural systems can fail suddenly, causing injury or death. Professional assessment identifies hazards and determines when buildings can be safely occupied.
            </p>

            <p className="text-gray-600 mb-6">
              <strong>Insurance Claims:</strong> Engineering documentation supports insurance claims by providing objective, professional assessment of damage extent. PE-stamped reports carry significant weight with adjusters and in disputes. Proper documentation helps ensure fair claim settlement.
            </p>

            <p className="text-gray-600 mb-6">
              <strong>Repair Planning:</strong> Structural evaluation identifies what repairs are needed and establishes repair scope and cost. This information is essential for budgeting, contractor procurement, and project planning.
            </p>

            <p className="text-gray-600 mb-8">
              <strong>Liability Protection:</strong> Property owners have legal responsibility for building safety. Professional structural evaluation demonstrates due diligence and provides documentation if questions arise about occupancy decisions.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Structural Evaluation Process
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Initial Contact and Scope</h3>
                  <p className="text-gray-600">We gather basic information about the building and damage situation to determine appropriate evaluation type and schedule. Emergency assessments can often be scheduled same-day.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Document Review</h3>
                  <p className="text-gray-600">Engineers review available building plans, previous engineering reports, and any documentation of the damage event to prepare for field investigation.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Field Investigation</h3>
                  <p className="text-gray-600">Licensed structural engineers conduct thorough on-site investigation, documenting all damage and assessing structural conditions throughout the building.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Analysis and Report</h3>
                  <p className="text-gray-600">Engineers analyze findings, prepare detailed documentation, and develop repair recommendations. Final PE-stamped report is provided for your records, insurance, and permitting needs.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Repair Coordination</h3>
                  <p className="text-gray-600">If repairs are needed, Florida Construction Specialists can provide construction services to implement engineering recommendations, ensuring structural integrity is properly restored.</p>
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
              <h3 className="text-2xl font-bold mb-4">Need Structural Evaluation?</h3>
              <p className="mb-6 text-gray-200">
                Contact Florida Construction Specialists for professional structural integrity evaluation following disaster damage. Our licensed engineering partners provide the documentation you need for safety decisions, insurance claims, and repair planning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Request Evaluation
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
            title="Related Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Tampa Bay Structural Engineering Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for post-disaster structural evaluation throughout Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Evaluation
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
