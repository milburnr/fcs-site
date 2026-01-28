import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { Phone, CheckCircle, Building2, Shield, Zap, Thermometer, Users, Clock, HelpCircle, AlertTriangle } from "lucide-react";
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
  title: "Medical Facility Construction Basics in Tampa | Healthcare Building Guide",
  description: "Complete guide to medical facility construction in Tampa Bay. Learn about AHCA requirements, infection control, MEP systems, and costs for building healthcare facilities in Florida.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Medical Facility Construction Basics", href: "/medical-facility-construction-basics-in-tampa/" },
];

const internalLinks = [
  { href: "/services/commercial/medical-construction/", label: "Medical Construction Services" },
  { href: "/medical-facility-renovations-with-construction-specialists/", label: "Medical Facility Renovations" },
  { href: "/medical-office-value-engineering/", label: "Medical Office Value Engineering" },
  { href: "/key-considerations-for-building-medical-facilities-in-florida/", label: "Medical Facility Planning" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const facilityTypes = [
  {
    type: "Medical Office Building (MOB)",
    size: "10,000 - 100,000+ SF",
    features: "Multi-tenant, outpatient services, imaging, labs",
    ahcaRequired: "Depends on services offered",
    costRange: "$350-550/SF",
  },
  {
    type: "Ambulatory Surgery Center (ASC)",
    size: "8,000 - 25,000 SF",
    features: "Operating rooms, PACU, sterilization, pre-op",
    ahcaRequired: "Yes - CON may be required",
    costRange: "$500-800/SF",
  },
  {
    type: "Urgent Care Facility",
    size: "3,500 - 8,000 SF",
    features: "Exam rooms, x-ray, minor procedures, lab",
    ahcaRequired: "Depends on licensure type",
    costRange: "$300-450/SF",
  },
  {
    type: "Diagnostic Imaging Center",
    size: "5,000 - 15,000 SF",
    features: "MRI, CT, X-ray suites, shielded rooms",
    ahcaRequired: "Yes for certain modalities",
    costRange: "$450-700/SF",
  },
  {
    type: "Dialysis Center",
    size: "8,000 - 20,000 SF",
    features: "Treatment stations, water treatment, isolation",
    ahcaRequired: "Yes",
    costRange: "$350-500/SF",
  },
  {
    type: "Specialty Clinic",
    size: "3,000 - 15,000 SF",
    features: "Procedure rooms, specialized equipment",
    ahcaRequired: "Varies by specialty",
    costRange: "$300-500/SF",
  },
];

const criticalSystems = [
  {
    system: "HVAC & Air Quality",
    icon: Thermometer,
    description: "Medical facilities require precise temperature, humidity, and air quality control. ASHRAE 170 mandates specific air change rates and pressure relationships.",
    requirements: [
      "Operating rooms: 15-20 air changes/hour, positive pressure",
      "Isolation rooms: 12 ACH, negative pressure with anteroom",
      "HEPA filtration for surgical and immunocompromised areas",
      "Redundant cooling for critical areas",
      "Temperature: 68-75°F, humidity 30-60%",
    ],
  },
  {
    system: "Electrical & Emergency Power",
    icon: Zap,
    description: "Healthcare facilities need reliable power with automatic transfer to emergency systems. NEC Article 517 and NFPA 110 govern requirements.",
    requirements: [
      "Normal, essential, and critical power branches",
      "Generator startup within 10 seconds for life safety",
      "Battery backup for life safety lighting",
      "Isolated power in wet procedure areas",
      "Emergency lighting and exit signage",
    ],
  },
  {
    system: "Medical Gas Systems",
    icon: Shield,
    description: "Piped medical gases are critical for patient care. NFPA 99 Health Care Facilities Code governs design and installation.",
    requirements: [
      "Medical air, oxygen, vacuum, and waste anesthetic gas disposal",
      "Zone valves for isolation",
      "Alarm systems for pressure monitoring",
      "Properly sized manifolds and compressors",
      "Annual certification and testing",
    ],
  },
  {
    system: "Infection Control",
    icon: Building2,
    description: "Design must prevent HAIs (healthcare-associated infections) through proper material selection, finishes, and traffic flow.",
    requirements: [
      "Seamless, cleanable wall and floor surfaces",
      "Hands-free fixtures and door operators",
      "Proper separation of clean and soiled areas",
      "Appropriate hand hygiene stations",
      "Negative pressure isolation capability",
    ],
  },
];

const ahcaRequirements = [
  {
    phase: "Pre-Design",
    timeline: "2-4 months before design",
    requirements: [
      "Determine if Certificate of Need (CON) required",
      "Review AHCA licensure requirements for facility type",
      "Engage AHCA-experienced architect/engineer",
      "Preliminary program alignment with codes",
    ],
    tips: "Start AHCA coordination early - requirements vary significantly by facility type",
  },
  {
    phase: "Design & Plan Review",
    timeline: "4-8 weeks",
    requirements: [
      "Submit architectural plans to AHCA Office of Plans & Construction",
      "Include engineering calculations and specifications",
      "Provide equipment schedules and cut sheets",
      "Life Safety Code (NFPA 101) compliance documentation",
    ],
    tips: "Plan for 2-3 review cycles; address comments comprehensively",
  },
  {
    phase: "Construction",
    timeline: "Throughout construction",
    requirements: [
      "Maintain approved plans on-site",
      "Document any changes and submit for approval",
      "Coordinate inspections at required milestones",
      "Address AHCA inspector comments promptly",
    ],
    tips: "Changes during construction require formal amendment submissions",
  },
  {
    phase: "Final Approval",
    timeline: "2-4 weeks after completion",
    requirements: [
      "Final AHCA inspection",
      "Air balancing reports and HVAC commissioning",
      "Medical gas certification",
      "Fire alarm and sprinkler certifications",
      "Life Safety Code compliance verification",
    ],
    tips: "Schedule final inspection only when 100% ready - failed inspections delay opening",
  },
];

const costBreakdown = [
  { category: "Site Work & Foundations", range: "$25-60/SF", notes: "Higher for poor soils or complex sites" },
  { category: "Building Shell", range: "$80-150/SF", notes: "Tilt-wall or structural steel typical" },
  { category: "HVAC Systems", range: "$60-120/SF", notes: "Significantly higher than standard commercial" },
  { category: "Electrical & Emergency Power", range: "$40-80/SF", notes: "Includes generator and UPS systems" },
  { category: "Plumbing & Medical Gas", range: "$25-50/SF", notes: "Medical gas adds significant cost" },
  { category: "Interior Finishes", range: "$75-150/SF", notes: "Infection control materials cost more" },
  { category: "Equipment (Owner)", range: "$50-200/SF", notes: "Varies greatly by specialty" },
  { category: "Soft Costs", range: "15-20%", notes: "Design, permits, inspections, contingency" },
];

const tampaMarketInsights = [
  {
    factor: "Healthcare Growth",
    insight: "Tampa Bay is one of Florida's fastest-growing healthcare markets, driven by population growth and aging demographics. Major health systems including AdventHealth, BayCare, and HCA are expanding.",
  },
  {
    factor: "Construction Costs",
    insight: "Medical construction costs in Tampa have increased 25-35% since 2020. Labor shortages and specialized subcontractor availability remain challenges. Plan for 8-12 month lead times on major equipment.",
  },
  {
    factor: "Site Selection",
    insight: "Prime medical corridors include North Dale Mabry, Bruce B. Downs, and areas near major hospitals. Medical zoning (PD with healthcare conditions) typically required. Parking ratios of 5-6 per 1,000 SF standard.",
  },
  {
    factor: "Regulatory Environment",
    insight: "Hillsborough County has streamlined medical permitting, but AHCA review timelines remain 6-12 weeks. Certificate of Need requirements still apply for certain facilities including new hospitals and ASCs in some areas.",
  },
];

const faqs = [
  {
    question: "What certifications are required for medical facility construction in Florida?",
    answer: "Medical facilities in Florida require multiple certifications: AHCA (Agency for Health Care Administration) approval for licensed facilities, local building permits, fire marshal approval, and often Joint Commission or AAAHC accreditation. The contractor should have experience with healthcare construction and familiarity with AHCA plan review processes. NFPA 99 (Health Care Facilities Code), ASHRAE 170 (Ventilation), and ADA compliance are mandatory. Some specialized areas like radiology require additional certifications and shielding verification.",
  },
  {
    question: "How long does it take to build a medical facility in Tampa?",
    answer: "Timeline varies by facility type: A 5,000 SF urgent care typically takes 8-12 months from design through opening. A 15,000 SF medical office building takes 12-16 months. An ambulatory surgery center takes 14-20 months due to AHCA complexity. These timelines include design (2-4 months), permitting and AHCA review (2-4 months), construction (6-12 months), and commissioning/inspections (1-2 months). Add 4-6 months if Certificate of Need is required.",
  },
  {
    question: "What is AHCA and why does it matter for medical construction?",
    answer: "AHCA (Agency for Health Care Administration) is Florida's healthcare regulatory agency. AHCA reviews and approves construction plans for licensed healthcare facilities to ensure patient safety and code compliance. AHCA review is required before construction begins on most clinical facilities. The process typically takes 6-12 weeks and requires detailed architectural, mechanical, electrical, and plumbing drawings. Failure to obtain AHCA approval can result in inability to obtain licensure and open the facility.",
  },
  {
    question: "How much does medical facility construction cost in Tampa Bay?",
    answer: "Medical facility construction in Tampa Bay typically costs $300-800 per square foot depending on type and complexity. A standard medical office building runs $350-450/SF. Urgent care facilities cost $300-400/SF. Ambulatory surgery centers cost $500-700/SF due to specialized systems. Diagnostic imaging centers with shielded rooms can exceed $600/SF. These costs include hard construction costs; add 15-20% for soft costs (design, permits, inspections). Owner-purchased equipment is additional.",
  },
  {
    question: "What makes medical HVAC systems different from regular commercial?",
    answer: "Medical HVAC systems have significantly higher requirements than standard commercial: specific air change rates (6-20 ACH vs. 4-6 for offices), pressure relationships between spaces (positive, negative, or neutral), HEPA filtration for surgical areas, precise humidity control (30-60%), and redundancy requirements. These systems can cost 2-3x more than standard commercial HVAC. Design must comply with ASHRAE 170 and AHCA requirements. Proper commissioning is critical for AHCA approval.",
  },
  {
    question: "Do I need a Certificate of Need (CON) for my medical facility in Florida?",
    answer: "Certificate of Need requirements in Florida have been significantly reduced but still apply to: new hospitals, hospital beds, certain organ transplant programs, and some specialized services. Most outpatient facilities (medical offices, urgent care, imaging centers) do NOT require CON. However, ambulatory surgery centers may require CON depending on location and procedures. Consult with a healthcare attorney early in planning to determine CON requirements for your specific facility and services.",
  },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Medical Facility Construction Basics in Tampa Bay"
        description="Complete guide to medical facility construction in Tampa Bay including AHCA requirements, critical systems, costs, and timeline expectations."
        datePublished="2024-01-15"
        dateModified="2025-01-15"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Medical facility construction in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Medical Facility Construction Basics in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Everything you need to know about building healthcare facilities in Tampa Bay—from AHCA requirements and infection control to specialized MEP systems and realistic budgets.
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

      {/* Intro */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-xl text-gray-600 mb-6">
              Medical facility construction is among the most complex and heavily regulated building types. Unlike standard commercial construction, healthcare buildings must meet stringent requirements from multiple regulatory bodies while supporting the delivery of patient care.
            </p>
            <p className="text-gray-600 mb-6">
              Tampa Bay's booming healthcare sector—driven by population growth, an aging demographic, and expansion of major health systems—creates strong demand for new medical facilities. However, the path from concept to opening day involves navigating AHCA (Agency for Health Care Administration) requirements, specialized building systems, and construction techniques unique to healthcare.
            </p>
            <p className="text-gray-600 mb-8">
              This guide covers the fundamentals of medical facility construction in Tampa Bay: facility types and their requirements, critical building systems, the regulatory approval process, realistic costs and timelines, and local market considerations. Whether you're a healthcare provider planning a new clinic or a developer considering a medical office building investment, understanding these basics will help you plan effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Facility Types */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Types of Medical Facilities
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Different healthcare facilities have vastly different construction requirements and regulatory pathways.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-4 py-4 text-left font-heading">Facility Type</th>
                  <th className="px-4 py-4 text-center font-heading">Typical Size</th>
                  <th className="px-4 py-4 text-left font-heading">Key Features</th>
                  <th className="px-4 py-4 text-center font-heading">AHCA Required</th>
                  <th className="px-4 py-4 text-center font-heading">Cost Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {facilityTypes.map((facility, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-4 font-semibold text-brand-green-dark">{facility.type}</td>
                    <td className="px-4 py-4 text-center text-gray-600">{facility.size}</td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{facility.features}</td>
                    <td className="px-4 py-4 text-center text-gray-600 text-sm">{facility.ahcaRequired}</td>
                    <td className="px-4 py-4 text-center text-brand-green font-semibold">{facility.costRange}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Critical Systems */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Critical Building Systems
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Medical facilities require specialized systems that go far beyond standard commercial construction.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {criticalSystems.map((system, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand-green-light rounded-full flex items-center justify-center">
                    <system.icon className="w-6 h-6 text-brand-green-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green-dark font-heading">{system.system}</h3>
                </div>
                <p className="text-gray-600 mb-4">{system.description}</p>
                <ul className="space-y-2">
                  {system.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AHCA Process */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4 font-heading">
            AHCA Approval Process
          </h2>
          <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto">
            Understanding Florida's healthcare facility approval process is critical for project success.
          </p>
          <div className="space-y-6 max-w-4xl mx-auto">
            {ahcaRequirements.map((phase, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-brand-green-dark font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold">{phase.phase}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-brand-gold">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{phase.timeline}</span>
                  </div>
                </div>
                <ul className="grid md:grid-cols-2 gap-2 mb-4">
                  {phase.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/90">
                      <CheckCircle className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{req}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-brand-gold/20 rounded-lg p-3">
                  <p className="text-sm"><strong>Pro Tip:</strong> {phase.tips}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Medical Facility Construction Costs
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Healthcare construction costs significantly more than standard commercial due to specialized systems and regulatory requirements.
          </p>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-heading">Cost Category</th>
                  <th className="px-6 py-4 text-center font-heading">Typical Range</th>
                  <th className="px-6 py-4 text-left font-heading">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {costBreakdown.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-700">{item.category}</td>
                    <td className="px-6 py-4 text-center text-brand-green font-semibold">{item.range}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm max-w-2xl mx-auto">
            *Costs are for Tampa Bay market as of 2025. Actual costs vary based on facility complexity, site conditions, and market conditions.
          </p>
        </div>
      </section>

      {/* Tampa Market Insights */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Tampa Bay Healthcare Construction Market
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Local insights for planning your medical facility project in Tampa Bay.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {tampaMarketInsights.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">{item.factor}</h3>
                <p className="text-gray-600">{item.insight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="section bg-amber-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-12 h-12 text-amber-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-amber-800 mb-4 font-heading">
                  Common Medical Construction Pitfalls to Avoid
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-amber-800 mb-2">Starting Construction Before AHCA Approval</h4>
                    <p className="text-gray-600 text-sm">Never begin construction without AHCA plan approval. Changes required after construction starts are extremely costly and can delay opening by months.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-amber-800 mb-2">Underestimating MEP Costs</h4>
                    <p className="text-gray-600 text-sm">Medical MEP systems cost 2-3x more than standard commercial. Budget accordingly and engage specialized healthcare MEP engineers early.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-amber-800 mb-2">Using Non-Healthcare Contractors</h4>
                    <p className="text-gray-600 text-sm">Healthcare construction requires specific expertise. General commercial contractors often underestimate complexity and regulatory requirements.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-amber-800 mb-2">Inadequate Commissioning</h4>
                    <p className="text-gray-600 text-sm">HVAC commissioning and air balancing are critical for AHCA approval. Budget time and money for proper commissioning and documentation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-gray-50 rounded-lg px-6"
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
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Related Medical Construction Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Planning a Medical Facility in Tampa Bay?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists has the healthcare construction expertise to guide your project from concept through AHCA approval to successful opening. Let's discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Consultation
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
