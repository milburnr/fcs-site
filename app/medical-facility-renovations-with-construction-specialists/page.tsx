import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { Phone, CheckCircle, Building2, Shield, Clock, AlertTriangle, HelpCircle, Users, Stethoscope, Wrench, Zap } from "lucide-react";
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
  title: "Medical Facility Renovations Tampa | Healthcare Construction Specialists",
  description: "Expert medical facility renovations in Tampa Bay. AHCA-compliant healthcare renovations, infection control, phased construction, and minimal disruption to patient care operations.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Medical Facility Renovations", href: "/medical-facility-renovations-with-construction-specialists/" },
];

const internalLinks = [
  { href: "/services/commercial/medical-construction/", label: "Medical Construction Services" },
  { href: "/medical-facility-construction-basics-in-tampa/", label: "Medical Construction Basics" },
  { href: "/medical-office-value-engineering/", label: "Medical Office Value Engineering" },
  { href: "/key-considerations-for-building-medical-facilities-in-florida/", label: "Medical Facility Planning" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const renovationTypes = [
  {
    type: "Department Expansion",
    description: "Adding capacity to existing clinical areas",
    examples: "Additional exam rooms, expanded surgical suite, imaging addition",
    complexity: "High",
    typicalDuration: "4-12 months",
    ahcaRequired: "Usually yes",
  },
  {
    type: "Technology Upgrades",
    description: "Installing new equipment requiring building modifications",
    examples: "MRI installation, CT upgrade, linear accelerator, surgical robot",
    complexity: "Medium-High",
    typicalDuration: "2-6 months",
    ahcaRequired: "Often yes",
  },
  {
    type: "Compliance Updates",
    description: "Bringing facilities up to current codes and standards",
    examples: "ADA upgrades, fire safety, HVAC air changes, infection control",
    complexity: "Medium",
    typicalDuration: "2-6 months",
    ahcaRequired: "Varies",
  },
  {
    type: "Patient Experience",
    description: "Modernizing spaces for improved patient satisfaction",
    examples: "Waiting room refresh, wayfinding, lighting, finishes",
    complexity: "Low-Medium",
    typicalDuration: "1-4 months",
    ahcaRequired: "Usually no",
  },
  {
    type: "Operational Efficiency",
    description: "Reconfiguring spaces for improved workflow",
    examples: "Nurse station redesign, supply management, sterilization flow",
    complexity: "Medium",
    typicalDuration: "2-4 months",
    ahcaRequired: "Sometimes",
  },
  {
    type: "Infection Control Improvements",
    description: "Upgrading systems to prevent healthcare-associated infections",
    examples: "Negative pressure rooms, HEPA filtration, hands-free fixtures",
    complexity: "Medium-High",
    typicalDuration: "2-6 months",
    ahcaRequired: "Usually yes",
  },
];

const infectionControlMeasures = [
  {
    measure: "ICRA Risk Assessment",
    description: "Infection Control Risk Assessment determines construction containment requirements",
    implementation: "Classify project by patient risk and construction dust/moisture generation; implement appropriate barriers",
  },
  {
    measure: "Negative Pressure Containment",
    description: "Construction areas maintained at negative pressure to adjacent clinical spaces",
    implementation: "HEPA-filtered negative air machines; continuous pressure monitoring; sealed barriers",
  },
  {
    measure: "Construction Barriers",
    description: "Physical separation between work areas and patient care",
    implementation: "Rigid or flexible barriers; airlocks for worker entry/exit; sealed penetrations",
  },
  {
    measure: "Traffic Management",
    description: "Controlled paths for workers and materials to minimize contamination",
    implementation: "Dedicated construction entrances; covered carts; end-of-day material removal",
  },
  {
    measure: "HVAC Protection",
    description: "Preventing construction contaminants from entering clinical air systems",
    implementation: "Seal ducts in work areas; install temporary filtration; modify air handling sequences",
  },
  {
    measure: "Moisture Management",
    description: "Controlling moisture to prevent mold during and after construction",
    implementation: "Immediate drying of wet materials; dehumidification; timeline restrictions for moisture-sensitive work",
  },
];

const phasingStrategies = [
  {
    strategy: "After-Hours Construction",
    description: "Primary work during evenings, nights, and weekends",
    bestFor: "Minor renovations, noisy work, areas adjacent to patient care",
    considerations: "Premium labor costs (1.5-2x); limited subcontractor availability; may extend timeline",
  },
  {
    strategy: "Rolling Phasing",
    description: "Work moves through facility area by area",
    bestFor: "Department-wide renovations; corridor work; systematic upgrades",
    considerations: "Requires swing space; complex logistics; detailed scheduling",
  },
  {
    strategy: "Vertical Phasing",
    description: "Complete work floor by floor",
    bestFor: "Multi-story facilities; major system upgrades",
    considerations: "Need temporary patient relocation plan; elevator logistics; noise/vibration control",
  },
  {
    strategy: "Temporary Relocation",
    description: "Move operations to swing space during construction",
    bestFor: "Major renovations; complete department overhauls",
    considerations: "Requires available swing space; patient notification; regulatory approvals",
  },
  {
    strategy: "Weekend Blitz",
    description: "Intensive work during extended weekends (72+ hours)",
    bestFor: "Critical path work; equipment installations; system changeovers",
    considerations: "Requires detailed planning; large crew mobilization; contingency plans",
  },
];

const ahcaRenovationProcess = [
  {
    phase: "Pre-Application",
    timeline: "4-8 weeks before design",
    activities: [
      "Determine if AHCA review required for scope",
      "Meet with facility compliance officer",
      "Engage AHCA-experienced design team",
      "Review current license conditions",
    ],
  },
  {
    phase: "Design & Submission",
    timeline: "6-12 weeks",
    activities: [
      "Complete construction documents per AHCA requirements",
      "Submit to AHCA Office of Plans and Construction",
      "Respond to review comments (expect 2-3 cycles)",
      "Obtain AHCA approval letter",
    ],
  },
  {
    phase: "Construction",
    timeline: "Varies by scope",
    activities: [
      "Maintain approved plans on-site",
      "Submit amendments for any changes",
      "Coordinate interim inspections if required",
      "Document infection control compliance",
    ],
  },
  {
    phase: "Final Approval",
    timeline: "2-4 weeks after completion",
    activities: [
      "Request AHCA final inspection",
      "Provide required certifications (HVAC, medical gas, fire safety)",
      "Address any deficiencies",
      "Obtain approval to operate renovated space",
    ],
  },
];

const costFactors = [
  { factor: "Standard Medical Renovation", range: "$200-400/SF", notes: "Exam rooms, offices, non-critical clinical" },
  { factor: "Surgical/Procedure Renovation", range: "$400-700/SF", notes: "Operating rooms, procedure suites, sterile processing" },
  { factor: "Imaging Suite Renovation", range: "$350-600/SF", notes: "CT, MRI, X-ray; plus equipment costs" },
  { factor: "Laboratory Renovation", range: "$300-500/SF", notes: "Casework, fume hoods, utilities, HVAC" },
  { factor: "Infection Control (ICRA) Premium", range: "10-25%", notes: "Barriers, negative air, monitoring, extended hours" },
  { factor: "After-Hours Premium", range: "20-50%", notes: "Evening and weekend labor differential" },
  { factor: "Phasing Complexity", range: "10-20%", notes: "Multiple mobilizations, temporary facilities, protection" },
  { factor: "AHCA Compliance", range: "5-10%", notes: "Documentation, inspections, potential delays" },
];

const faqs = [
  {
    question: "Can you renovate while patients are present?",
    answer: "Yes, most medical facility renovations occur in occupied buildings with active patient care. Success requires careful planning: Infection Control Risk Assessment (ICRA) determines containment requirements; physical barriers and negative pressure separate construction from clinical areas; work schedules minimize disruption (often nights/weekends for noisy activities); and traffic management keeps construction separate from patient flows. We've completed renovations in operating hospitals, active surgical centers, and busy medical offices while maintaining normal operations.",
  },
  {
    question: "Does every medical renovation require AHCA approval?",
    answer: "Not every renovation requires AHCA review, but many do. Generally, AHCA approval is required for: changes to licensed bed counts; modifications affecting life safety (egress, fire protection); HVAC changes affecting pressure relationships or air changes; new or relocated medical gas outlets; and changes to procedure areas. Cosmetic updates (paint, flooring, furniture) typically don't require AHCA. When in doubt, submit a determination request to AHCA—they'll clarify if review is needed. We always recommend consulting early.",
  },
  {
    question: "How long does a typical medical facility renovation take?",
    answer: "Timeline varies significantly by scope: Patient experience updates (waiting rooms, finishes) take 4-8 weeks. Exam room additions take 3-6 months. Operating room renovations take 6-12 months. Complete department renovations take 9-18 months. Add 2-4 months for AHCA-required projects (review and approval). Phasing to maintain operations typically adds 20-30% to construction duration compared to vacated space. We provide detailed schedules during preconstruction that account for regulatory requirements and operational constraints.",
  },
  {
    question: "What is an ICRA and why is it important?",
    answer: "ICRA (Infection Control Risk Assessment) is a required evaluation for construction in healthcare facilities. It analyzes patient population vulnerability (immunocompromised patients at highest risk), construction activity risk (dust, moisture, vibration), and determines containment requirements (Class I-IV with escalating protection measures). ICRA is typically performed jointly by infection control, facilities, and construction teams before work begins. Failure to follow ICRA requirements can result in healthcare-associated infections—a serious patient safety and liability issue.",
  },
  {
    question: "How do you minimize noise and vibration during medical renovations?",
    answer: "Multiple strategies reduce impact on patient care: Schedule loud work (demolition, concrete cutting) during off-hours; use low-noise construction methods where possible (cutting vs. chipping); install sound barriers with acoustic blankets; phase noisy work away from sensitive areas like surgery or sleep labs; provide advance notice to affected departments; and have contingency plans if noise exceeds acceptable levels. Some activities (MRI installations, vibration-sensitive work) require additional coordination and may need facility shutdowns.",
  },
  {
    question: "What happens if we discover problems during renovation (asbestos, mold, structural)?",
    answer: "Discovery of hazardous materials or unexpected conditions is common in renovation. Our process: Stop work in affected area and notify owner immediately; assess scope with appropriate specialists (industrial hygienist, structural engineer); develop remediation plan with required permits and notifications; adjust budget and schedule accordingly; complete remediation before resuming original scope. We include contingencies in renovation budgets (typically 10-15%) specifically for unknowns. For older buildings, we recommend pre-construction assessments to identify likely issues.",
  },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Medical Facility Renovations with Construction Specialists"
        description="Expert medical facility renovations in Tampa Bay. AHCA-compliant healthcare renovations, infection control, phased construction, and minimal disruption to patient care."
        datePublished="2024-01-15"
        dateModified="2025-01-15"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Medical facility renovation in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Medical Facility Renovations with Construction Specialists
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Expert healthcare renovations in Tampa Bay. We maintain patient care operations while transforming your facility—with AHCA compliance, infection control, and minimal disruption.
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
              Medical facility renovations present unique challenges that standard commercial contractors simply aren't equipped to handle. Patient care must continue. Infection control is non-negotiable. AHCA regulations must be followed precisely. And the specialized systems that make healthcare facilities work—HVAC, medical gas, infection control—require expertise that comes only from experience.
            </p>
            <p className="text-gray-600 mb-6">
              Tampa Bay's healthcare providers face constant pressure to update facilities: new technologies require space modifications, patient expectations demand modern environments, regulations evolve, and aging buildings need refreshing. The challenge is accomplishing these improvements without compromising patient care or creating compliance issues.
            </p>
            <p className="text-gray-600 mb-8">
              This guide covers what healthcare administrators and facility managers need to know about medical renovations: types of projects and their complexity, infection control requirements, phasing strategies that maintain operations, AHCA compliance processes, and realistic budgeting. Whether you're planning a modest update or a major department renovation, understanding these elements helps ensure project success.
            </p>
          </div>
        </div>
      </section>

      {/* Renovation Types */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Types of Medical Facility Renovations
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Different renovation types have varying complexity, regulatory requirements, and timelines.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-4 py-4 text-left font-heading">Renovation Type</th>
                  <th className="px-4 py-4 text-left font-heading">Examples</th>
                  <th className="px-4 py-4 text-center font-heading">Complexity</th>
                  <th className="px-4 py-4 text-center font-heading">Duration</th>
                  <th className="px-4 py-4 text-center font-heading">AHCA?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {renovationTypes.map((type, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-4">
                      <span className="font-semibold text-brand-green-dark block">{type.type}</span>
                      <span className="text-xs text-gray-500">{type.description}</span>
                    </td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{type.examples}</td>
                    <td className="px-4 py-4 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        type.complexity === 'High' ? 'bg-red-100 text-red-700' :
                        type.complexity === 'Medium-High' ? 'bg-orange-100 text-orange-700' :
                        type.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {type.complexity}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center text-gray-600">{type.typicalDuration}</td>
                    <td className="px-4 py-4 text-center text-gray-600 text-sm">{type.ahcaRequired}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Infection Control */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Infection Control During Construction
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            ICRA compliance protects patients and prevents costly shutdowns. These measures are mandatory for healthcare renovations.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infectionControlMeasures.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-brand-green" />
                  <h3 className="text-lg font-bold text-brand-green-dark">{item.measure}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-xs text-gray-700"><strong>Implementation:</strong> {item.implementation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phasing Strategies */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4 font-heading">
            Phasing Strategies for Occupied Facilities
          </h2>
          <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto">
            Maintaining patient care operations requires careful phasing. The right strategy depends on your specific situation.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {phasingStrategies.map((strategy, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">{strategy.strategy}</h3>
                <p className="text-white/80 text-sm mb-4">{strategy.description}</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-brand-gold text-xs font-semibold">Best For</p>
                    <p className="text-white/90 text-sm">{strategy.bestFor}</p>
                  </div>
                  <div>
                    <p className="text-brand-gold text-xs font-semibold">Considerations</p>
                    <p className="text-white/80 text-sm">{strategy.considerations}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AHCA Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            AHCA Approval Process for Renovations
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            When AHCA review is required, understanding the process helps avoid delays.
          </p>
          <div className="space-y-6 max-w-4xl mx-auto">
            {ahcaRenovationProcess.map((phase, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border-l-4 border-brand-green">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-brand-green-dark">{phase.phase}</h3>
                      <span className="text-sm font-medium text-brand-green bg-brand-green-light/30 px-3 py-1 rounded-full flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {phase.timeline}
                      </span>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {phase.activities.map((activity, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{activity}</span>
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

      {/* Cost Factors */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Medical Renovation Cost Factors
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Budget guidance for Tampa Bay healthcare renovations. Costs reflect occupied facility requirements.
          </p>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-heading">Cost Factor</th>
                  <th className="px-6 py-4 text-center font-heading">Typical Range</th>
                  <th className="px-6 py-4 text-left font-heading">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {costFactors.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-700">{item.factor}</td>
                    <td className="px-6 py-4 text-center text-brand-green font-semibold">{item.range}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm max-w-2xl mx-auto">
            *Costs reflect Tampa Bay market conditions. Include 10-15% contingency for renovation unknowns.
          </p>
        </div>
      </section>

      {/* Warning */}
      <section className="section bg-amber-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-12 h-12 text-amber-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-amber-800 mb-4 font-heading">
                  Common Medical Renovation Mistakes
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-amber-800 mb-2">Skipping ICRA</h4>
                    <p className="text-gray-600 text-sm">Infection Control Risk Assessment isn't optional. Skipping it risks patient safety, regulatory action, and potential lawsuits.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-amber-800 mb-2">Underestimating Phasing Complexity</h4>
                    <p className="text-gray-600 text-sm">Occupied renovations take longer and cost more. Budget 20-30% premium vs. vacant space construction.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-amber-800 mb-2">Not Engaging AHCA Early</h4>
                    <p className="text-gray-600 text-sm">Discovering AHCA requirements mid-project causes delays and redesign. Clarify requirements before design begins.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-amber-800 mb-2">Using Non-Healthcare Contractors</h4>
                    <p className="text-gray-600 text-sm">Standard commercial contractors often don't understand ICRA, AHCA, or healthcare-specific MEP requirements.</p>
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
            Planning a Medical Facility Renovation?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists brings healthcare renovation expertise to every project. We understand AHCA, infection control, and how to maintain operations during construction.
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
