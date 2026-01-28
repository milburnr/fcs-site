import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, Shield, Wrench, Building2, FileCheck } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Reinforced Construction Services Tampa | Hurricane & Disaster Prevention",
  description: "Reinforced construction services in Tampa for disaster prevention. Commercial building hardening, hurricane-resistant upgrades, and structural reinforcement to protect Tampa Bay businesses.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Reinforced Construction Services in Tampa for Disaster Prevention", href: "/reinforced-construction-services-in-tampa-for-disaster-prevention/" },
];

const faqs = [
  {
    question: "What is reinforced construction for disaster prevention?",
    answer: "Reinforced construction incorporates structural elements and building practices designed to resist natural disasters—primarily hurricanes in Tampa Bay. This includes continuous load paths (hurricane straps and clips), impact-resistant openings, reinforced roof systems, strengthened wall-to-foundation connections, and properly engineered structural systems. These upgrades significantly reduce damage during severe weather events."
  },
  {
    question: "How much does commercial building reinforcement cost?",
    answer: "Reinforcement costs vary based on existing conditions and scope. Basic hurricane strap installation averages $15-25 per connection. Impact window systems run $800-2,500 per opening. Comprehensive structural hardening typically costs $25-75 per square foot. For a 10,000 sq ft commercial building, expect $50,000-$200,000 for comprehensive reinforcement. These investments often pay for themselves through insurance savings and damage prevention."
  },
  {
    question: "Will reinforced construction lower my insurance premiums?",
    answer: "Yes, significantly. Florida law requires insurers to provide wind mitigation discounts for qualifying features. Impact-resistant openings, reinforced roofing, and proper roof-to-wall connections can reduce wind premiums by 15-45%. Some Tampa Bay businesses see annual savings of $10,000-$50,000 after comprehensive reinforcement. A wind mitigation inspection documents qualifying features for your insurer."
  },
  {
    question: "Can existing buildings be reinforced, or only new construction?",
    answer: "Existing commercial buildings can absolutely be reinforced. Retrofit options include adding hurricane straps to existing roof-to-wall connections, replacing windows and doors with impact-rated products, upgrading roofing systems with enhanced attachment, and reinforcing structural connections throughout the building. Some retrofits are more practical than others depending on building construction type."
  },
  {
    question: "What is FORTIFIED Commercial certification?",
    answer: "FORTIFIED Commercial is a program from the Insurance Institute for Business & Home Safety (IBHS) that establishes enhanced construction standards beyond code minimums. FORTIFIED certification requires third-party verification of specific hurricane-resistant features. Some insurers offer additional premium discounts for FORTIFIED-certified buildings. We can design and construct to FORTIFIED standards when requested."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/hurricane-proof-reconstruction-services-in-tampa/", label: "Hurricane-Proof Reconstruction" },
  { href: "/structural-integrity-evaluation-in-tampa-post-disaster/", label: "Structural Integrity Evaluation" },
  { href: "/commercial-property-damage-restoration-in-tampa/", label: "Commercial Property Restoration" },
  { href: "/contact/", label: "Schedule Consultation" },
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
            src="/wp-content/uploads/2023/12/hurricane-ian.webp"
            alt="Reinforced construction for disaster prevention in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Reinforced Construction Services in Tampa for Disaster Prevention
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Protect your Tampa Bay commercial property with reinforced construction designed to withstand hurricanes and severe weather. Reduce damage risk and insurance costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Building Assessment
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
              Tampa Bay's hurricane exposure makes disaster prevention a critical concern for commercial property owners. Rather than simply reacting to storm damage, proactive reinforced construction protects your building, reduces business interruption risk, and often pays for itself through insurance savings. Florida Construction Specialists provides comprehensive reinforcement services that upgrade your Tampa Bay commercial property's resilience against hurricanes, floods, and severe weather events.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-blue-800 mb-2">Prevention vs. Restoration: The Smart Investment</h3>
                  <p className="text-blue-700">Dollar for dollar, disaster prevention delivers better returns than restoration. A $100,000 reinforcement investment can prevent millions in damage, business interruption, and lost productivity. Combined with insurance premium reductions often exceeding $10,000-$30,000 annually, reinforced construction frequently pays for itself within 5-10 years—even without a major storm.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Understanding Wind and Storm Forces
            </h2>
            
            <p className="text-gray-600 mb-6">
              Hurricanes damage buildings through three primary mechanisms: wind pressure (both positive pressure on windward surfaces and negative suction on leeward and roof surfaces), wind-borne debris impact, and water intrusion. Effective reinforced construction addresses all three:
            </p>

            <p className="text-gray-600 mb-6">
              Wind pressure increases exponentially with speed—a Category 4 hurricane's winds exert four times the pressure of a Category 2. Tampa Bay's design wind speed of 150 mph means commercial buildings must resist sustained pressures of approximately 50 pounds per square foot, with gusts creating even higher peak loads. Continuous load paths—connections from roof to walls to foundation—transfer these forces safely to the ground.
            </p>

            <p className="text-gray-600 mb-8">
              Wind-borne debris is often the initiating cause of major hurricane damage. When a window or door fails, internal pressure increases dramatically, often leading to roof failure. Impact-resistant openings or protection systems prevent this cascade of damage.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Reinforced Construction Services
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Structural Reinforcement</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Hurricane straps and clips installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Continuous load path engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Wall-to-foundation anchoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Gable end bracing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Masonry wall reinforcement</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Building2 className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Opening Protection</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Impact-resistant window systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Hurricane-rated commercial doors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Wind-resistant garage and loading doors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Removable storm panel systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Roll-down shutter installation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Wrench className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Roof System Upgrades</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Enhanced roof deck attachment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Secondary water barrier installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Wind-rated roofing materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Edge metal and parapet reinforcement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Soffit and ridge reinforcement</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <FileCheck className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Flood Prevention</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Flood vent installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Elevated equipment platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Backflow prevention devices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Flood barrier systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Drainage system improvements</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Florida Building Code Requirements
            </h2>

            <p className="text-gray-600 mb-6">
              The Florida Building Code (FBC) establishes minimum construction standards for wind resistance based on location and building use. Tampa Bay falls within the 150 mph design wind speed zone, requiring buildings to withstand sustained winds of approximately 130 mph with gusts to 150+ mph. However, code represents minimum requirements—buildings constructed to just meet code may still sustain significant damage in major hurricanes.
            </p>

            <p className="text-gray-600 mb-8">
              Reinforced construction exceeds code minimums, incorporating FORTIFIED Commercial standards and best practices from hurricane engineering research. This enhanced construction provides meaningful protection even in the strongest hurricanes.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Reinforcement Costs in Tampa Bay
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Reinforcement Type</th>
                    <th className="px-6 py-4 text-left">Price Range</th>
                    <th className="px-6 py-4 text-left">Insurance Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Hurricane Straps (retrofit)</td>
                    <td className="px-6 py-4">$15 - $25/connection</td>
                    <td className="px-6 py-4 text-gray-600">Significant discount potential</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Impact Windows</td>
                    <td className="px-6 py-4">$800 - $2,500/opening</td>
                    <td className="px-6 py-4 text-gray-600">Major premium reduction</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Storm Shutter Systems</td>
                    <td className="px-6 py-4">$25 - $75/sq ft protected</td>
                    <td className="px-6 py-4 text-gray-600">Qualifies for opening protection</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Roof System Upgrade</td>
                    <td className="px-6 py-4">$15 - $35/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Roof covering and attachment credits</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Secondary Water Barrier</td>
                    <td className="px-6 py-4">$1.50 - $4/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Additional mitigation credit</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Comprehensive Hardening</td>
                    <td className="px-6 py-4">$25 - $75/sq ft</td>
                    <td className="px-6 py-4 text-gray-600">Maximum available discounts</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              *Prices reflect 2024 Tampa Bay market rates. Actual costs depend on building construction, existing conditions, and scope of work. Insurance impact varies by carrier and policy. Contact us for assessment and specific cost projections.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Wind Mitigation Inspection and Insurance Savings
            </h2>

            <p className="text-gray-600 mb-6">
              Florida law requires insurance companies to provide premium discounts for specific wind-resistant construction features. A wind mitigation inspection by a licensed inspector documents qualifying features, which can dramatically reduce your wind insurance premium:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h4 className="font-bold text-brand-green-dark mb-3">Key Mitigation Features and Typical Discounts</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Roof Covering:</strong> FBC-compliant roof installed after 2002 (8-15% discount)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Roof Deck Attachment:</strong> Enhanced nailing patterns (up to 8% discount)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Roof-to-Wall Connection:</strong> Hurricane clips or straps (up to 35% discount)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Opening Protection:</strong> Impact-rated openings or shutters (up to 45% discount)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span><strong>Secondary Water Barrier:</strong> Sealed roof deck (additional 2-5% discount)</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Reinforcement Process
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Building Assessment</h3>
                  <p className="text-gray-600">Engineers evaluate your building's current construction, identifying existing strengths and vulnerabilities. We assess structural systems, roof construction, opening protection, and connections throughout the building.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Reinforcement Planning</h3>
                  <p className="text-gray-600">Based on assessment findings, we develop reinforcement recommendations prioritized by impact and cost-effectiveness. We provide cost estimates and projected insurance savings for different reinforcement levels.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Engineering and Permitting</h3>
                  <p className="text-gray-600">Structural engineers develop detailed reinforcement plans meeting Florida Building Code requirements. We handle all permitting with local building departments.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Installation</h3>
                  <p className="text-gray-600">Our experienced crews install all reinforcement components, working carefully around ongoing business operations when possible. Quality control ensures all work meets specifications.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Inspection and Certification</h3>
                  <p className="text-gray-600">Required inspections verify compliant installation. We coordinate wind mitigation inspection to document qualifying features for your insurance company.</p>
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
              <h3 className="text-2xl font-bold mb-4">Protect Your Commercial Property Before the Next Storm</h3>
              <p className="mb-6 text-gray-200">
                Don't wait until a hurricane is approaching. Contact Florida Construction Specialists for a building assessment and learn how reinforced construction can protect your Tampa Bay commercial property while reducing insurance costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Schedule Assessment
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
            Tampa Bay Reinforced Construction Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for disaster-prevention construction services throughout Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Building Assessment
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
