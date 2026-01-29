import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { Phone, CheckCircle, Building2, Shield, MapPin, FileText, HelpCircle, AlertTriangle, Clock, Users, Stethoscope } from "lucide-react";
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
  title: "Key Considerations for Building Medical Facilities in Florida | Planning Guide",
  description: "Essential planning guide for medical facility construction in Florida. Site selection, zoning, AHCA requirements, regulatory compliance, and budget considerations for Tampa Bay healthcare projects.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Building Medical Facilities in Florida", href: "/key-considerations-for-building-medical-facilities-in-florida/" },
];

const internalLinks = [
  { href: "/medical-facility-construction-basics-in-tampa/", label: "Medical Construction Basics" },
  { href: "/medical-facility-renovations-with-construction-specialists/", label: "Medical Renovations" },
  { href: "/medical-office-value-engineering/", label: "Value Engineering" },
  { href: "/services/commercial/medical-construction/", label: "Medical Construction Services" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const siteSelectionCriteria = [
  {
    criterion: "Patient Demographics",
    importance: "Critical",
    considerations: [
      "Population density and growth trends",
      "Age demographics (elderly population for certain specialties)",
      "Insurance coverage/payer mix in area",
      "Competition and market saturation",
      "Drive time from target patient population",
    ],
  },
  {
    criterion: "Access & Visibility",
    importance: "High",
    considerations: [
      "Major road frontage and signage visibility",
      "Easy access from multiple directions",
      "Public transit accessibility",
      "Proximity to referring physicians and hospitals",
      "Emergency vehicle access if applicable",
    ],
  },
  {
    criterion: "Zoning & Entitlements",
    importance: "Critical",
    considerations: [
      "Medical use permitted (check PD conditions)",
      "Parking ratios achievable (typically 5-6/1,000 SF)",
      "Signage allowances sufficient",
      "Building height and setback requirements",
      "Impact fees and concurrency requirements",
    ],
  },
  {
    criterion: "Site Characteristics",
    importance: "High",
    considerations: [
      "Adequate size for building + parking + expansion",
      "Flood zone designation (avoid AE zones if possible)",
      "Environmental conditions (wetlands, contamination)",
      "Utility availability (especially for imaging equipment)",
      "Geotechnical conditions for foundations",
    ],
  },
  {
    criterion: "Infrastructure",
    importance: "Medium-High",
    considerations: [
      "Adequate electrical service for medical equipment",
      "Municipal water and sewer capacity",
      "Internet/telecommunications infrastructure",
      "Natural gas availability if needed",
      "Stormwater management capacity",
    ],
  },
];

const zoningConsiderations = [
  {
    zone: "Commercial General (CG)",
    medicalUse: "Usually permitted",
    notes: "Most accommodating for medical; verify parking ratios and signage",
    tampa: "Common along major corridors; relatively straightforward approval",
  },
  {
    zone: "Planned Development (PD)",
    medicalUse: "Depends on PD conditions",
    notes: "Review specific conditions—some limit medical or require approval",
    tampa: "Many sites are PD; must review master plan and conditions carefully",
  },
  {
    zone: "Office (OP, OC)",
    medicalUse: "Often permitted with conditions",
    notes: "May have parking ratio challenges; some exclude certain medical uses",
    tampa: "Common for medical office buildings; verify allowed uses",
  },
  {
    zone: "Residential/Mixed",
    medicalUse: "Limited or conditional",
    notes: "Urgent care, small clinics may be conditional; larger facilities usually no",
    tampa: "Possible in some mixed-use developments; challenging standalone",
  },
];

const regulatoryRequirements = [
  {
    agency: "AHCA (Agency for Health Care Administration)",
    role: "Reviews and approves construction for licensed healthcare facilities",
    timeline: "6-12 weeks for plan review",
    key: "Required before construction begins on licensed facilities",
  },
  {
    agency: "Local Building Department",
    role: "Issues building permits; inspects construction",
    timeline: "2-8 weeks depending on jurisdiction",
    key: "Coordinate with AHCA—some jurisdictions defer to AHCA review",
  },
  {
    agency: "Fire Marshal",
    role: "Reviews life safety plans; inspects fire protection systems",
    timeline: "2-4 weeks review; ongoing inspections",
    key: "Critical for occupancy; coordinate early on egress and suppression",
  },
  {
    agency: "Department of Health",
    role: "Reviews certain facilities; issues health permits",
    timeline: "Varies by facility type",
    key: "Required for some outpatient facilities; verify applicability",
  },
  {
    agency: "DEP / SWFWMD",
    role: "Environmental permits; stormwater management",
    timeline: "4-12 weeks depending on scope",
    key: "Can be lengthy; start environmental review early",
  },
];

const budgetFactors = [
  { factor: "Land Acquisition", range: "$20-80/SF", notes: "Varies dramatically by location; medical corridors at premium" },
  { factor: "Site Development", range: "$15-40/SF of land", notes: "Parking, drainage, utilities, landscaping" },
  { factor: "Building Shell", range: "$150-250/SF", notes: "Higher than standard commercial due to structural requirements" },
  { factor: "MEP Systems", range: "$100-200/SF", notes: "Medical HVAC, electrical, plumbing significantly higher" },
  { factor: "Interior Finishes", range: "$75-150/SF", notes: "Infection control materials; medical-grade finishes" },
  { factor: "Equipment (Owner)", range: "$50-300/SF", notes: "Highly variable by specialty and equipment" },
  { factor: "Soft Costs", range: "18-25%", notes: "Design, permits, AHCA, inspections, contingency" },
  { factor: "Financing Costs", range: "3-8%", notes: "Construction loan interest and fees" },
];

const projectPhases = [
  {
    phase: "Feasibility & Planning",
    duration: "2-4 months",
    activities: [
      "Market analysis and demand study",
      "Site identification and due diligence",
      "Preliminary program development",
      "Budget development",
      "Financing strategy",
    ],
    deliverables: "Go/no-go decision; preliminary budget; site selection",
  },
  {
    phase: "Design",
    duration: "4-8 months",
    activities: [
      "Architect/engineer selection",
      "Programming and space planning",
      "Schematic and design development",
      "AHCA pre-application meeting",
      "Construction documents",
    ],
    deliverables: "Complete construction documents; AHCA-ready submittal",
  },
  {
    phase: "Approvals",
    duration: "3-6 months",
    activities: [
      "AHCA plan review and approval",
      "Building permit application",
      "Fire marshal review",
      "Any required zoning approvals",
      "Utility coordination",
    ],
    deliverables: "AHCA approval; building permit; all required approvals",
  },
  {
    phase: "Construction",
    duration: "10-18 months",
    activities: [
      "Site work and foundations",
      "Building shell construction",
      "MEP rough-in and systems",
      "Interior finishes",
      "Equipment installation",
    ],
    deliverables: "Completed building; ready for inspections",
  },
  {
    phase: "Commissioning & Opening",
    duration: "2-4 months",
    activities: [
      "Systems commissioning and testing",
      "Final inspections (building, fire, AHCA)",
      "Equipment testing and certification",
      "Staff training and move-in",
      "Licensure and opening",
    ],
    deliverables: "Certificate of occupancy; AHCA approval; operational facility",
  },
];

const commonPitfalls = [
  {
    pitfall: "Underestimating AHCA Timeline",
    impact: "2-4 month delays; potential construction holds",
    prevention: "Engage AHCA-experienced designers; build adequate time into schedule; consider pre-application meeting",
  },
  {
    pitfall: "Inadequate Parking",
    impact: "Zoning rejection; operational problems; patient dissatisfaction",
    prevention: "Plan for 5-6 spaces per 1,000 SF minimum; higher for certain specialties; consider shared parking carefully",
  },
  {
    pitfall: "Undersized Electrical/HVAC",
    impact: "Cannot support equipment; expensive upgrades; operational limitations",
    prevention: "Plan for current needs plus 30-50% growth; consult equipment vendors during design; specify adequate redundancy",
  },
  {
    pitfall: "Ignoring Expansion Capability",
    impact: "Constrained growth; expensive future modifications",
    prevention: "Select sites with room to grow; design structural capacity for additions; plan utility infrastructure for expansion",
  },
  {
    pitfall: "Assuming Standard Commercial Costs",
    impact: "Budget overruns; value engineering that compromises compliance",
    prevention: "Use medical-specific cost data; include adequate contingency (15-20%); engage healthcare contractor early",
  },
];

const faqs = [
  {
    question: "How much land do I need for a medical facility?",
    answer: "Land requirements depend on facility size, parking needs, and jurisdiction. General rule: plan for 3-4x the building footprint to accommodate parking (5-6 spaces per 1,000 SF), required landscaping, stormwater management, and future expansion. A 20,000 SF medical building typically needs 2-3 acres. Tampa Bay jurisdictions have varying parking ratios—verify with the local planning department. If considering a multi-story building, you can reduce land needs but increase construction costs and complexity.",
  },
  {
    question: "What Florida-specific regulations affect medical construction?",
    answer: "Key Florida-specific requirements include: AHCA (Agency for Health Care Administration) plan review and approval for licensed healthcare facilities; Florida Building Code with stricter hurricane requirements; Florida Accessibility Code (more stringent than federal ADA in some areas); SWFWMD stormwater permits; and Florida-specific fire codes. Some healthcare uses may require Certificate of Need (CON), though Florida has reduced CON requirements significantly. Local jurisdictions add additional requirements—each Tampa Bay county has variations.",
  },
  {
    question: "How do I choose between building new and renovating existing space?",
    answer: "Consider: New construction offers optimal design for healthcare workflow and equipment, current code compliance, and branding opportunity—but higher cost and longer timeline. Renovation of existing medical space saves time and sometimes money, with infrastructure already in place—but may compromise optimal layout and require code upgrades. Renovation of non-medical space (retail, office) is middle ground—faster than ground-up but requires significant MEP upgrades. Decision factors: budget, timeline, available sites, brand requirements, and specialty-specific needs.",
  },
  {
    question: "What impact fees should I expect for medical construction in Tampa Bay?",
    answer: "Impact fees vary significantly by jurisdiction and can be substantial: Hillsborough County: $8,000-15,000+ per 1,000 SF for medical; Pinellas County: similar range with some variations by city; Pasco County: generally lower but increasing; Manatee/Sarasota: varies by location. Impact fees cover transportation, schools, parks, and utilities. Some areas offer impact fee credits for infill development or economic incentives. Budget $10-20/SF for impact fees during feasibility and verify with specific jurisdiction.",
  },
  {
    question: "How long does it take to build a medical facility in Florida?",
    answer: "Total timeline from concept to operation: Small clinic (5,000-10,000 SF): 12-18 months; Medical office building (15,000-40,000 SF): 18-24 months; Ambulatory surgery center: 20-30 months; Large specialty facility: 24-36+ months. Key timeline factors: AHCA review (add 2-4 months for licensed facilities); site entitlements (can add 3-6 months if zoning changes needed); environmental permits; and construction complexity. Fast-track schedules are possible but add cost and risk.",
  },
  {
    question: "What makes a good location for a medical facility in Tampa Bay?",
    answer: "Prime Tampa Bay medical locations share: Visibility and access from major roads (Dale Mabry, Bruce B. Downs, US 19, etc.); Proximity to hospitals and referring physicians; Demographics matching specialty (retirees for orthopedics, families for pediatrics); Adequate parking availability; Good payer mix in surrounding population; Room for future expansion; and Minimal flood risk. Established medical corridors command premiums but offer built-in referral networks. Emerging areas may offer value but require patient education about location.",
  },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Key Considerations for Building Medical Facilities in Florida"
        description="Essential planning guide for medical facility construction in Florida. Site selection, zoning, AHCA requirements, and budget considerations for Tampa Bay healthcare projects."
        datePublished="2024-01-15"
        dateModified="2025-01-15"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-large.webp"
            alt="Medical facility construction planning in Florida"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Key Considerations for Building Medical Facilities in Florida
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Planning a medical facility in Florida requires navigating unique regulatory, site, and construction considerations. This guide covers what you need to know before you begin.
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
              Building a medical facility is one of the most complex commercial construction undertakings. Success requires careful planning across multiple dimensions: site selection that serves your patient population, regulatory compliance with AHCA and local authorities, construction that meets healthcare-specific requirements, and budgeting that accounts for the premium costs of medical construction.
            </p>
            <p className="text-gray-600 mb-6">
              Florida presents unique considerations: AHCA oversight for licensed facilities, hurricane-resistant construction requirements, high cooling loads in our climate, and a competitive healthcare market that demands strategic location decisions. Tampa Bay's rapid growth creates opportunities—but also challenges in finding suitable sites and navigating approval processes.
            </p>
            <p className="text-gray-600 mb-8">
              This guide covers the key considerations for medical facility development in Florida: site selection criteria, zoning and entitlements, regulatory requirements, realistic budget factors, project timeline, and common pitfalls to avoid. Use it as a planning checklist before committing significant resources to your project.
            </p>
          </div>
        </div>
      </section>

      {/* Site Selection */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Site Selection Criteria
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            The right site is foundational to medical facility success. Evaluate candidates against these criteria.
          </p>
          <div className="space-y-6">
            {siteSelectionCriteria.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-8 h-8 text-brand-green" />
                    <h3 className="text-xl font-bold text-brand-green-dark">{item.criterion}</h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.importance === 'Critical' ? 'bg-red-100 text-red-700' :
                    item.importance === 'High' ? 'bg-orange-100 text-orange-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {item.importance}
                  </span>
                </div>
                <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {item.considerations.map((consideration, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      {consideration}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zoning */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Zoning Considerations
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Medical uses have specific zoning requirements. Verify compatibility before committing to a site.
          </p>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-4 py-4 text-left font-heading">Zone Type</th>
                  <th className="px-4 py-4 text-center font-heading">Medical Use?</th>
                  <th className="px-4 py-4 text-left font-heading">Notes</th>
                  <th className="px-4 py-4 text-left font-heading">Tampa Bay</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {zoningConsiderations.map((zone, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-4 font-semibold text-brand-green-dark">{zone.zone}</td>
                    <td className="px-4 py-4 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        zone.medicalUse.includes('Usually') ? 'bg-green-100 text-green-700' :
                        zone.medicalUse.includes('Often') ? 'bg-yellow-100 text-yellow-700' :
                        zone.medicalUse.includes('Depends') ? 'bg-orange-100 text-orange-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {zone.medicalUse}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{zone.notes}</td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{zone.tampa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Regulatory Requirements */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4 font-heading">
            Regulatory Requirements
          </h2>
          <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto">
            Medical facilities must satisfy multiple regulatory agencies. Plan for their timelines and requirements.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regulatoryRequirements.map((item, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="w-6 h-6 text-brand-gold" />
                  <h3 className="font-bold">{item.agency}</h3>
                </div>
                <p className="text-white/80 text-sm mb-3">{item.role}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-gold" />
                    <span className="text-sm">{item.timeline}</span>
                  </div>
                  <div className="bg-brand-gold/20 rounded-lg p-2">
                    <p className="text-xs"><strong>Key:</strong> {item.key}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Factors */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Budget Planning Factors
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Medical facility construction costs significantly more than standard commercial. Plan accordingly.
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
                {budgetFactors.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-700">{item.factor}</td>
                    <td className="px-6 py-4 text-center text-brand-green font-semibold">{item.range}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Typical Project Timeline
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Medical facility development typically takes 18-36 months from concept to operation.
          </p>
          <div className="space-y-6 max-w-4xl mx-auto">
            {projectPhases.map((phase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-brand-green">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-brand-green-dark">{phase.phase}</h3>
                      <span className="text-sm font-medium text-brand-green bg-brand-green-light/30 px-3 py-1 rounded-full flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {phase.duration}
                      </span>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-2 mb-3">
                      {phase.activities.map((activity, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm text-gray-700"><strong>Deliverables:</strong> {phase.deliverables}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Pitfalls */}
      <section className="section bg-amber-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <AlertTriangle className="w-12 h-12 text-amber-600 flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-amber-800 font-heading">Common Pitfalls to Avoid</h2>
                <p className="text-gray-600 mt-2">Learn from others' mistakes—these issues derail many medical facility projects.</p>
              </div>
            </div>
            <div className="space-y-4">
              {commonPitfalls.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-bold text-amber-800 mb-2">{item.pitfall}</h3>
                  <p className="text-red-600 text-sm mb-3"><strong>Impact:</strong> {item.impact}</p>
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-sm text-green-800"><strong>Prevention:</strong> {item.prevention}</p>
                  </div>
                </div>
              ))}
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
            Planning a Medical Facility in Florida?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists brings healthcare construction expertise to your project. From site evaluation through opening day, we help navigate the complexities of medical facility development.
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
