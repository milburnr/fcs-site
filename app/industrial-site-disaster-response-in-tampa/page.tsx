import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { Phone, CheckCircle, AlertTriangle, Shield, Clock, Zap, Droplets, Wind, HelpCircle, FileText, Users } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Industrial Site Disaster Response in Tampa | Emergency Construction Services",
  description: "24/7 industrial disaster response in Tampa Bay. Rapid emergency recovery for warehouses, manufacturing facilities, and distribution centers after hurricanes, fires, and floods.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Industrial Site Disaster Response", href: "/industrial-site-disaster-response-in-tampa/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/warehouse-construction-tampa-bay/", label: "Warehouse Construction" },
  { href: "/industrial-flex-space-development/", label: "Industrial Flex Space" },
  { href: "/services/commercial/design-build/", label: "Design-Build Services" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const disasterTypes = [
  {
    type: "Hurricane Damage",
    icon: Wind,
    frequency: "High - Tampa Bay's primary risk",
    impacts: [
      "Roof membrane damage and uplift",
      "Overhead door destruction",
      "Water intrusion and flooding",
      "Debris impact damage",
      "Extended power outages",
    ],
    criticalActions: [
      "Temporary roof tarping within 24 hours",
      "Water extraction and structural drying",
      "Generator deployment for critical systems",
      "Board-up and security measures",
      "Documentation for insurance claims",
    ],
  },
  {
    type: "Fire Damage",
    icon: Zap,
    frequency: "Moderate",
    impacts: [
      "Structural damage to steel/concrete",
      "Smoke and soot contamination",
      "Inventory loss",
      "Electrical system damage",
      "Water damage from suppression",
    ],
    criticalActions: [
      "Structural assessment by licensed engineer",
      "Fire marshal coordination",
      "Smoke remediation and air scrubbing",
      "Electrical system evaluation",
      "Content cleaning or disposal",
    ],
  },
  {
    type: "Flood Damage",
    icon: Droplets,
    frequency: "Moderate-High in low areas",
    impacts: [
      "Equipment and inventory damage",
      "Contaminated surfaces (mold risk)",
      "Electrical system damage",
      "Foundation/slab issues",
      "Business interruption",
    ],
    criticalActions: [
      "Rapid water extraction",
      "Industrial dehumidification",
      "Mold prevention treatment",
      "Equipment assessment",
      "Flooring replacement planning",
    ],
  },
  {
    type: "Structural Failure",
    icon: AlertTriangle,
    frequency: "Low",
    impacts: [
      "Collapse or partial collapse",
      "Rack system failure",
      "Foundation problems",
      "Overhead crane/equipment failure",
      "Loading dock collapse",
    ],
    criticalActions: [
      "Area evacuation and securing",
      "Engineering assessment",
      "Shoring and stabilization",
      "Cause investigation",
      "Rebuilding plan development",
    ],
  },
];

const responseTimeline = [
  {
    phase: "Immediate Response (0-24 Hours)",
    priority: "Life Safety & Stabilization",
    actions: [
      "Site safety assessment and securing",
      "Emergency power restoration if possible",
      "Temporary weather protection (tarps, board-up)",
      "Water extraction startup",
      "Initial documentation and photography",
      "Emergency contact with insurance carrier",
    ],
  },
  {
    phase: "Assessment Phase (24-72 Hours)",
    priority: "Damage Evaluation & Planning",
    actions: [
      "Comprehensive damage assessment",
      "Structural engineering evaluation",
      "Inventory and equipment assessment",
      "Insurance adjuster coordination",
      "Scope of work development",
      "Recovery timeline estimation",
    ],
  },
  {
    phase: "Stabilization (3-14 Days)",
    priority: "Prevent Further Damage",
    actions: [
      "Permanent temporary repairs",
      "Complete water mitigation",
      "Environmental remediation",
      "Utility restoration",
      "Partial operations resume if safe",
      "Detailed repair plans and permitting",
    ],
  },
  {
    phase: "Reconstruction (2-12+ Weeks)",
    priority: "Full Restoration",
    actions: [
      "Structural repairs",
      "Roof system replacement",
      "MEP system restoration",
      "Interior buildout",
      "Equipment reinstallation",
      "Final inspections and occupancy",
    ],
  },
];

const preparednessChecklist = [
  {
    category: "Documentation",
    items: [
      "Updated building plans and specifications",
      "Equipment inventory with serial numbers",
      "Insurance policy details readily accessible",
      "Vendor and contractor contact list",
      "Employee emergency contact information",
      "Business interruption coverage verification",
    ],
  },
  {
    category: "Physical Preparedness",
    items: [
      "Hurricane shutters or board-up materials on-site",
      "Emergency generator with fuel supply",
      "Water pumps and extraction equipment",
      "Emergency lighting and exit signage tested",
      "Roof inspection and maintenance current",
      "Drainage systems clear and functional",
    ],
  },
  {
    category: "Operational Planning",
    items: [
      "Written emergency response plan",
      "Designated emergency coordinator",
      "Data backup and IT recovery plan",
      "Alternative location arrangements",
      "Communication chain established",
      "Regular drill and plan updates",
    ],
  },
  {
    category: "Contractor Relationships",
    items: [
      "Pre-qualified emergency contractor identified",
      "Priority response agreement in place",
      "After-hours contact information exchanged",
      "Scope and pricing pre-negotiated where possible",
      "Insurance certificate requirements clarified",
      "Chain of command for emergency decisions",
    ],
  },
];

const costEstimates = [
  { service: "Emergency Board-Up & Tarping", range: "$2-8/SF", notes: "Depending on height and complexity" },
  { service: "Water Extraction & Drying", range: "$3-8/SF", notes: "Varies with water category and depth" },
  { service: "Roof Repair/Replacement", range: "$8-20/SF", notes: "TPO, EPDM, or metal; emergency premium applies" },
  { service: "Structural Repairs", range: "$50-200/SF", notes: "Highly variable based on damage extent" },
  { service: "Fire/Smoke Remediation", range: "$5-25/SF", notes: "Includes air scrubbing and surface cleaning" },
  { service: "Mold Remediation", range: "$10-30/SF", notes: "Containment, removal, treatment" },
  { service: "Electrical System Restoration", range: "$15-40/SF", notes: "Depends on damage extent and equipment" },
  { service: "Full Reconstruction", range: "$80-150/SF", notes: "Complete building restoration" },
];

const tampaSpecificConsiderations = [
  {
    factor: "Hurricane Season",
    detail: "June 1 - November 30 is peak risk period. Tampa Bay has not experienced a direct major hurricane hit since 1921, creating both preparation complacency and massive potential exposure.",
    recommendation: "Pre-position materials and have contractor agreements in place by June 1 each year.",
  },
  {
    factor: "Flood Zones",
    detail: "Much of Tampa Bay's industrial inventory is in flood-prone areas, especially near the Port and along the Alafia and Hillsborough Rivers. FEMA flood maps have been updated significantly.",
    recommendation: "Know your flood zone, maintain flood insurance, and elevate critical equipment.",
  },
  {
    factor: "Post-Storm Contractor Availability",
    detail: "After major hurricanes, qualified contractors are overwhelmed. Wait times of weeks to months are common for non-emergency work. Pricing spikes significantly.",
    recommendation: "Establish priority response agreements with contractors before storm season.",
  },
  {
    factor: "Insurance Market",
    detail: "Florida's commercial property insurance market is stressed. Carriers are exiting, premiums rising, and deductibles increasing. Many policies have significant hurricane deductibles (2-5% of insured value).",
    recommendation: "Review coverage annually, understand deductibles, and budget for potential gaps.",
  },
];

const faqs = [
  {
    question: "How quickly can you respond to an industrial emergency in Tampa Bay?",
    answer: "For clients with priority response agreements, we can have personnel on-site within 2-4 hours for Tampa Bay locations. For new clients during non-emergency times, we typically respond within 24 hours. During active hurricane situations, response times depend on road accessibility and prior commitments—which is why we strongly recommend establishing relationships before disaster strikes. We maintain crews, equipment, and materials specifically for emergency response and scale up rapidly during storm events.",
  },
  {
    question: "What should we do immediately after discovering industrial facility damage?",
    answer: "First, ensure all personnel are safe and evacuate if necessary. Then: 1) Document damage with photos and video before any cleanup; 2) Contact your insurance carrier to report the loss; 3) Take reasonable steps to prevent additional damage (tarping, water extraction) but don't make permanent repairs without adjuster approval; 4) Contact a qualified contractor for assessment and emergency stabilization; 5) Secure the site to prevent unauthorized access and additional damage. Keep all receipts and documentation for insurance claims.",
  },
  {
    question: "How do we work with insurance companies during disaster recovery?",
    answer: "We work alongside insurance adjusters, not against them. Our process: detailed documentation with measurements and photos; itemized scope of work that matches insurance requirements; direct communication with adjusters as needed; supplemental claims when hidden damage is discovered; phased billing that aligns with insurance payment schedules. We can provide preliminary estimates for adjusters and work within approved scopes. Most industrial property policies are replacement cost, which we verify and document throughout reconstruction.",
  },
  {
    question: "What's the typical timeline to restore an industrial facility after hurricane damage?",
    answer: "Timeline varies dramatically by damage severity. Minor damage (roof membrane repairs, some water intrusion): 2-4 weeks. Moderate damage (partial roof replacement, significant water damage, some structural): 2-4 months. Severe damage (major structural, complete roof replacement, full interior restoration): 6-12+ months. The timeline also depends on material availability, permitting, and engineering requirements. We provide realistic timelines during assessment and update regularly throughout recovery.",
  },
  {
    question: "Should we have a pre-disaster agreement with a contractor?",
    answer: "Absolutely. Pre-disaster agreements provide: priority response when everyone is calling for help; pre-negotiated pricing that avoids post-storm price gouging; established relationships and communication protocols; pre-qualification and insurance verification complete; faster mobilization with familiar team members. These agreements are typically no-cost until activated and can dramatically reduce downtime and recovery costs. We offer priority response programs for Tampa Bay industrial facilities.",
  },
  {
    question: "What can we do now to minimize damage from a future hurricane?",
    answer: "Key preparation steps: 1) Have roof inspected and maintained annually—most hurricane damage enters through the roof; 2) Install or pre-position hurricane shutters for glazing; 3) Secure overhead doors (weakest point for wind intrusion); 4) Ensure drainage systems are clear; 5) Elevate critical equipment and electrical panels; 6) Back up data off-site; 7) Document everything with current photos and inventory; 8) Review and understand insurance coverage; 9) Establish contractor relationships before storm season. We offer pre-storm vulnerability assessments for industrial facilities.",
  },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Industrial Site Disaster Response in Tampa Bay"
        description="24/7 emergency disaster response for industrial facilities in Tampa Bay. Hurricane damage, fire, flood recovery for warehouses, manufacturing, and distribution centers."
        datePublished="2024-01-15"
        dateModified="2025-01-15"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Industrial disaster response in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Industrial Site Disaster Response in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            24/7 emergency response for Tampa Bay industrial facilities. Rapid recovery from hurricanes, fires, floods, and structural failures to minimize downtime and losses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="btn-cta flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Emergency Line: {BUSINESS_INFO.phone}
            </a>
            <Link href="/contact/" className="btn-secondary">
              Request Priority Agreement
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-xl text-gray-600 mb-6">
              When disaster strikes your industrial facility, every hour counts. Business interruption losses can dwarf physical damage costs. Equipment sits idle. Customers can't be served. Employees can't work. The pressure to restore operations is immense.
            </p>
            <p className="text-gray-600 mb-6">
              Tampa Bay's industrial sector faces unique vulnerabilities: hurricane exposure during a six-month season, flood-prone locations near the port and waterways, and aging infrastructure in some industrial corridors. A well-prepared disaster response can mean the difference between weeks of downtime and months.
            </p>
            <p className="text-gray-600 mb-8">
              This guide covers industrial disaster response essentials: types of disasters common to Tampa Bay, the response and recovery timeline, preparedness strategies, and working effectively with insurance. Whether you're dealing with an active emergency or preparing for future events, understanding the process helps you recover faster and more completely.
            </p>
          </div>
        </div>
      </section>

      {/* Disaster Types */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Industrial Disaster Types & Response
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Different disasters require different response strategies. Understanding the impacts and critical actions helps you respond effectively.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {disasterTypes.map((disaster, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <disaster.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark font-heading">{disaster.type}</h3>
                    <p className="text-sm text-gray-500">{disaster.frequency}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2 text-sm">Common Impacts</h4>
                    <ul className="space-y-1">
                      {disaster.impacts.map((impact, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <AlertTriangle className="w-3 h-3 text-red-500 mt-1 flex-shrink-0" />
                          {impact}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-green mb-2 text-sm">Critical Actions</h4>
                    <ul className="space-y-1">
                      {disaster.criticalActions.map((action, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-brand-green mt-1 flex-shrink-0" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Timeline */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4 font-heading">
            Disaster Response Timeline
          </h2>
          <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto">
            Understanding the phases of disaster response helps set expectations and ensures nothing critical is missed.
          </p>
          <div className="space-y-6 max-w-4xl mx-auto">
            {responseTimeline.map((phase, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-brand-green-dark font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold">{phase.phase}</h3>
                      <span className="text-brand-gold font-semibold text-sm">{phase.priority}</span>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                      {phase.actions.map((action, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-white/80">
                          <CheckCircle className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preparedness Checklist */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Disaster Preparedness Checklist
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            The best disaster response starts before disaster strikes. Use this checklist to evaluate your readiness.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {preparednessChecklist.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-brand-green" />
                  <h3 className="text-xl font-bold text-brand-green-dark">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-green focus:ring-brand-green" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Estimates */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Emergency & Recovery Cost Guidelines
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Budget guidance for disaster recovery services. Actual costs vary based on damage extent, urgency, and material availability.
          </p>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-heading">Service</th>
                  <th className="px-6 py-4 text-center font-heading">Typical Range</th>
                  <th className="px-6 py-4 text-left font-heading">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {costEstimates.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-700">{item.service}</td>
                    <td className="px-6 py-4 text-center text-brand-green font-semibold">{item.range}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm">
            *Emergency/after-hours work typically carries 1.5-2x premium. Post-major-hurricane pricing may be significantly higher due to demand.
          </p>
        </div>
      </section>

      {/* Tampa Specific */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Tampa Bay-Specific Considerations
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Local factors that affect disaster planning and response for Tampa Bay industrial facilities.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {tampaSpecificConsiderations.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">{item.factor}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.detail}</p>
                <div className="bg-brand-green-light/30 rounded-lg p-3">
                  <p className="text-sm"><strong className="text-brand-green-dark">Recommendation:</strong> {item.recommendation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Priority Response CTA */}
      <section className="section bg-amber-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 text-amber-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-amber-800 mb-4 font-heading">
              Priority Response Program
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Don't wait until disaster strikes to find a contractor. Our Priority Response Program ensures you're first in line when you need help most. Pre-qualified industrial facilities receive guaranteed response times, pre-negotiated pricing, and dedicated emergency contacts.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-lg p-4">
                <Clock className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="font-semibold text-amber-800">2-4 Hour Response</p>
                <p className="text-sm text-gray-600">Guaranteed for program members</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <FileText className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="font-semibold text-amber-800">Pre-Negotiated Rates</p>
                <p className="text-sm text-gray-600">No post-storm price gouging</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <Users className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="font-semibold text-amber-800">Dedicated Team</p>
                <p className="text-sm text-gray-600">Familiar with your facility</p>
              </div>
            </div>
            <Link href="/contact/" className="btn-primary">
              Learn About Priority Response
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-white rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-brand-green-dark hover:no-underline py-4">
                  <span className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Need Emergency Response Now?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists provides 24/7 emergency response for industrial facilities throughout Tampa Bay. Call now for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="btn-cta flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call {BUSINESS_INFO.phone}
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
            >
              Request Priority Agreement
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
