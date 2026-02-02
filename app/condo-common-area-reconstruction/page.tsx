import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  CheckCircle,
  AlertTriangle,
  Users,
  ArrowRight,
  Phone,
  HelpCircle,
  DollarSign,
  Clock,
  Shield,
  Wrench,
  Palette,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema"
import { Breadcrumb } from "@/components/Breadcrumb";
import { BackToHub } from "@/components/BackToHub";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Condo Common Area Reconstruction Tampa | FCS Construction",
  description:
    "Expert common area reconstruction for Tampa Bay condominiums. Lobby renovations, pool deck repairs, corridor updates, and amenity upgrades that comply with SB4D and enhance property value.",
  keywords:
    "condo common area renovation Tampa, condominium lobby remodel, pool deck reconstruction Tampa, HOA amenity upgrade, condo corridor renovation, common element repairs Florida",
};

const commonAreaTypes = [
  {
    area: "Lobby & Entrance",
    elements: ["Reception desk", "Seating areas", "Mail room", "Package lockers", "Security systems"],
    considerations: "First impression for residents and guests; security integration critical",
    typicalCost: "$50,000-$300,000+",
    timeline: "4-12 weeks",
  },
  {
    area: "Corridors & Hallways",
    elements: ["Flooring", "Wall finishes", "Lighting", "Fire safety", "Unit entry doors"],
    considerations: "Must maintain egress during construction; phased approach typical",
    typicalCost: "$100-$300/linear foot",
    timeline: "2-6 months for full building",
  },
  {
    area: "Pool & Deck Areas",
    elements: ["Pool surface", "Deck coating", "Fencing", "Furniture", "Restrooms"],
    considerations: "Seasonal timing important; pool may need to remain operational",
    typicalCost: "$150,000-$500,000+",
    timeline: "6-16 weeks",
  },
  {
    area: "Parking Structures",
    elements: ["Concrete repair", "Waterproofing", "Lighting", "Signage", "Traffic coating"],
    considerations: "Resident parking during work; structural engineer involvement required",
    typicalCost: "$20-$50/SF for restoration",
    timeline: "3-12 months depending on scope",
  },
  {
    area: "Fitness & Recreation",
    elements: ["Equipment", "Flooring", "Mirrors", "Ventilation", "Sound systems"],
    considerations: "Equipment lead times; specialized flooring needs",
    typicalCost: "$30,000-$200,000+",
    timeline: "4-10 weeks",
  },
  {
    area: "Exterior Envelope",
    elements: ["Stucco", "Paint", "Railings", "Balconies", "Windows"],
    considerations: "Weather-dependent; scaffolding or lifts needed; unit access issues",
    typicalCost: "$15-$50/SF exterior",
    timeline: "3-12 months",
  },
];

const reconstructionPhases = [
  {
    phase: "Assessment & Planning",
    duration: "4-8 weeks",
    activities: [
      "Condition assessment by engineers",
      "Reserve study update if needed",
      "Scope development with design team",
      "Budget development and funding strategy",
      "Board presentation and approval",
    ],
    deliverables: "Assessment report, preliminary budget, project scope",
  },
  {
    phase: "Design & Documentation",
    duration: "6-12 weeks",
    activities: [
      "Architectural design development",
      "Engineering specifications",
      "Material selections",
      "Permit applications",
      "Contractor prequalification",
    ],
    deliverables: "Construction documents, permit set, bid package",
  },
  {
    phase: "Bidding & Contracting",
    duration: "4-6 weeks",
    activities: [
      "Issue bid packages to contractors",
      "Pre-bid meetings and site walks",
      "Bid evaluation and interviews",
      "Contract negotiation",
      "Board approval of contract",
    ],
    deliverables: "Executed contract, insurance certificates, bond if required",
  },
  {
    phase: "Construction",
    duration: "Varies by scope",
    activities: [
      "Mobilization and setup",
      "Phased construction to minimize disruption",
      "Weekly progress meetings",
      "Quality control inspections",
      "Resident communication",
    ],
    deliverables: "Progress reports, inspection logs, change order documentation",
  },
  {
    phase: "Closeout",
    duration: "2-4 weeks",
    activities: [
      "Final inspections",
      "Punch list completion",
      "As-built documentation",
      "Warranty information",
      "Reserve study update",
    ],
    deliverables: "Certificate of completion, warranties, O&M manuals",
  },
];

const fundingOptions = [
  {
    option: "Reserve Funds",
    description: "Use accumulated reserve funds for planned improvements",
    pros: ["No debt incurred", "Already budgeted", "No owner vote required (typically)"],
    cons: ["May deplete reserves", "Limited by available balance", "May not cover scope"],
    bestFor: "Planned maintenance and smaller improvements",
  },
  {
    option: "Special Assessment",
    description: "One-time charge to unit owners for specific project",
    pros: ["Covers full cost", "No interest charges", "Maintains reserves"],
    cons: ["Requires owner vote", "May cause hardship", "Collection risk"],
    bestFor: "Large capital projects beyond reserves",
  },
  {
    option: "Association Loan",
    description: "Commercial loan secured by future assessments",
    pros: ["Spreads cost over time", "Maintains cash flow", "May not require vote"],
    cons: ["Interest expense", "Debt service obligations", "May affect unit sales"],
    bestFor: "Major projects when assessment would be burdensome",
  },
  {
    option: "Insurance Proceeds",
    description: "Restoration funded by insurance claim for covered damage",
    pros: ["Minimal owner cost", "Full restoration covered", "No debt"],
    cons: ["Only for covered losses", "Deductible required", "Scope disputes"],
    bestFor: "Storm damage, water damage, fire restoration",
  },
];

const sb4dCompliance = [
  {
    requirement: "Milestone Inspections",
    impact: "Common area work may trigger inspection requirements",
    guidance: "Consult licensed engineer before significant structural work; document all repairs",
  },
  {
    requirement: "SIRS (Structural Integrity Reserve Study)",
    impact: "Reconstruction affects reserve fund planning",
    guidance: "Update reserve study post-reconstruction; may reduce future funding needs",
  },
  {
    requirement: "Structural Documentation",
    impact: "Must maintain records of all structural repairs",
    guidance: "Retain engineering reports, inspection records, contractor certifications",
  },
  {
    requirement: "Board Certification",
    impact: "Board must certify compliance annually",
    guidance: "Document that reconstruction meets current code and SB4D requirements",
  },
];

const designTrends = [
  {
    trend: "Modern Coastal Aesthetic",
    description: "Clean lines, natural materials, beach-inspired palette",
    elements: "Light woods, stone accents, blue-gray tones, updated fixtures",
    valueImpact: "High - Appeals to Tampa Bay market",
  },
  {
    trend: "Smart Building Integration",
    description: "Technology-enabled common areas",
    elements: "Package lockers, smart access, digital signage, app integration",
    valueImpact: "High - Expected amenity for modern residents",
  },
  {
    trend: "Enhanced Amenities",
    description: "Coworking spaces, pet amenities, outdoor kitchens",
    elements: "Work-from-home areas, dog wash stations, grilling stations",
    valueImpact: "Medium-High - Differentiator in competitive market",
  },
  {
    trend: "Sustainability Features",
    description: "Energy efficiency and environmental focus",
    elements: "LED lighting, EV charging, water-efficient landscaping",
    valueImpact: "Medium - Growing importance to buyers",
  },
];

const faqs = [
  {
    question: "Do common area renovations require owner approval?",
    answer:
      "It depends on the scope and your governing documents. Routine maintenance and repairs typically fall within the board's authority without owner vote. Capital improvements or expenditures exceeding a threshold amount (often $5,000-$25,000 or a percentage of budget) may require owner approval. Major reconstruction projects, especially those requiring special assessments, almost always require owner vote—often 2/3 or 75% approval depending on your documents. Review your CC&Rs and bylaws for specific requirements. Even when not legally required, boards often seek owner input on significant aesthetic changes to build community support.",
  },
  {
    question: "How do we minimize disruption during common area construction?",
    answer:
      "Strategic planning minimizes resident impact. Phased construction allows portions of common areas to remain functional while others are under renovation. Schedule noisy work during daytime hours with advance notice. Establish clear communication channels—weekly updates, posted notices, email lists. Create temporary amenities when possible (temporary fitness equipment, alternate pool access if available). Coordinate deliveries and debris removal during lower-traffic hours. For corridor work, complete one floor at a time. For lobby work, establish temporary entrance/mail procedures. An experienced contractor understands the importance of resident relations and builds these considerations into the project plan.",
  },
  {
    question: "Should we upgrade or just repair common areas?",
    answer:
      "Consider several factors: current condition (cosmetic refresh vs. functional failure), age of finishes (approaching end of useful life?), market expectations (are competitors offering more?), reserve funding (planned replacement vs. unplanned repair), and resale values (will upgrades improve marketability?). Generally, if components are within a few years of planned replacement, upgrading during repairs makes sense. If the building is being positioned for sale or refinancing, modern common areas significantly impact valuation. For insurance restoration, policies typically cover like-kind replacement—upgrades are owner-funded. A balanced approach often includes necessary repairs at replacement quality plus strategic upgrades in high-impact areas like the lobby.",
  },
  {
    question: "How does SB4D affect common area reconstruction?",
    answer:
      "Florida's SB4D legislation impacts condo reconstruction in several ways. If your building is 25+ years old (30+ if 3+ miles from coast), milestone inspections may be triggered by significant structural work. SIRS requirements affect reserve planning—reconstruction that extends component life may reduce future reserve funding needs. Documentation requirements mean all structural repairs must be properly recorded. The board must certify compliance annually, so reconstruction work should meet current code requirements. On the positive side, SB4D-driven inspection findings may reveal issues best addressed during planned reconstruction, allowing comprehensive solutions rather than piecemeal repairs.",
  },
  {
    question: "What warranties should we expect for common area work?",
    answer:
      "Standard warranties vary by component. Workmanship warranties from the contractor typically cover 1-2 years. Material warranties vary: paint may be 5-7 years, flooring 10-20 years, roofing 15-30 years, pool equipment 1-5 years. Extended warranties may be available for additional cost. Ensure warranties are assignable to the association and not just the contractor. Review warranty terms carefully—many require specific maintenance to remain valid. Document the warranty start date, coverage terms, and claims process. Some associations negotiate extended warranties as part of contract negotiations. Keep all warranty documentation in a central location with the management company.",
  },
  {
    question: "How do we select the right contractor for common area work?",
    answer:
      "Selection criteria should include: experience with similar condo common area projects (request references), proper licensing for scope of work, adequate insurance (liability, workers' comp), financial stability (bonding capacity if required), understanding of condo operations and resident relations, and competitive but realistic pricing. Prequalify 3-5 contractors before bidding. Conduct interviews and check references thoroughly—visit completed projects if possible. Evaluate not just price but also schedule, communication approach, and understanding of your community's needs. An experienced contractor adds value through problem-solving, phasing expertise, and resident communication skills that may justify a moderate price premium.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Condo Common Area Reconstruction", href: "/condo-common-area-reconstruction/" },
];


const internalLinks = [
  { href: "/sb-4-d-compliance-tampa-bay-condos/", label: "SB 4-D Compliance Guide" },
  { href: "/condo-milestone-inspection-remediation/", label: "Milestone Inspection Services" },
  { href: "/condo-structural-reserve-study-repairs/", label: "Structural Reserve Studies" },
  { href: "/balcony-reconstruction/", label: "Balcony Reconstruction" },
  { href: "/services/residential/exterior-waterproofing/", label: "Exterior Waterproofing" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function CondoCommonAreaReconstructionPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Condo Common Area Reconstruction" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Common Area Renovation Services"
        serviceDescription="Expert common area reconstruction for Tampa Bay condominiums. Lobby renovations, pool deck repairs, corridor updates, and amenity upgrades that enhance property value."
        city="Tampa"
        minPrice="50000"
      />
      <ArticleSchema
        headline="Condo Common Area Reconstruction Tampa | FCS Construction"
        description="Expert common area reconstruction for Tampa Bay condominiums. Lobby renovations, pool deck repairs, corridor updates, and amenity upgrades that comply with SB4D and enhance property value."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/condo-common-area-reconstruction/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Commercial", href: "/commercial/" },
          { name: "Condo Remediation", href: "/commercial/condo-remediation/" },
          { name: "Common Area Reconstruction", href: "/condo-common-area-reconstruction/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Construction services in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <BackToHub
              silo="commercial"
              customHubTitle="Condo Remediation"
              customHubHref="/commercial/condo-remediation/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Condo Common Area Reconstruction
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Transform your condominium's common areas with expert reconstruction.
              From lobby renovations to pool deck repairs, we help Tampa Bay
              communities enhance property value while meeting SB4D requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Plan Your Renovation
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
        </div>
      </section>

      {/* Common Area Types */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Common Area Types & Scope
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Each common area has unique requirements and considerations.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonAreaTypes.map((area) => (
              <div key={area.area} className="card p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">
                  {area.area}
                </h3>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">Key Elements</h4>
                  <div className="flex flex-wrap gap-2">
                    {area.elements.map((element) => (
                      <span key={element} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        {element}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{area.considerations}</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-brand-gold-light/30 rounded p-2">
                    <span className="font-semibold text-brand-gold-dark block text-xs">Cost Range</span>
                    <span className="text-gray-700">{area.typicalCost}</span>
                  </div>
                  <div className="bg-brand-green-light/30 rounded p-2">
                    <span className="font-semibold text-brand-green-dark block text-xs">Timeline</span>
                    <span className="text-gray-700">{area.timeline}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reconstruction Process */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Reconstruction Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From planning through completion, a systematic approach ensures success.
          </p>
          <div className="max-w-4xl mx-auto space-y-4">
            {reconstructionPhases.map((phase, index) => (
              <div
                key={phase.phase}
                className="bg-white rounded-xl p-6 shadow-md border-l-4 border-brand-green"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-brand-green-dark">
                        {phase.phase}
                      </h3>
                      <span className="text-sm font-medium text-brand-gold bg-brand-gold-light/30 px-3 py-1 rounded-full">
                        {phase.duration}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mb-3">
                      {phase.activities.map((activity, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{activity}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 bg-gray-50 rounded p-2">
                      <strong>Deliverables:</strong> {phase.deliverables}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Options */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Funding Options
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Multiple funding strategies to fit your community's needs.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {fundingOptions.map((option) => (
              <div key={option.option} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-2">
                  {option.option}
                </h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-green-50 rounded-lg p-3">
                    <span className="text-xs font-semibold text-green-600 block mb-2">Pros</span>
                    <ul className="space-y-1">
                      {option.pros.map((pro, i) => (
                        <li key={i} className="text-gray-600 text-xs flex items-start gap-1">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3">
                    <span className="text-xs font-semibold text-yellow-600 block mb-2">Cons</span>
                    <ul className="space-y-1">
                      {option.cons.map((con, i) => (
                        <li key={i} className="text-gray-600 text-xs flex items-start gap-1">
                          <AlertTriangle className="w-3 h-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-brand-gold-dark bg-brand-gold-light/20 rounded p-2">
                  <strong>Best For:</strong> {option.bestFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SB4D Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            SB4D Compliance Considerations
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            How common area reconstruction intersects with Florida's condo safety law.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {sb4dCompliance.map((item) => (
              <div key={item.requirement} className="card p-6 border-l-4 border-brand-green">
                <h3 className="font-bold text-brand-green-dark mb-2">{item.requirement}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.impact}</p>
                <p className="text-sm text-brand-gold-dark bg-brand-gold-light/20 rounded p-2">
                  <strong>Guidance:</strong> {item.guidance}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Trends */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Design Trends for Tampa Bay Condos
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Current trends that enhance appeal and property value.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {designTrends.map((trend) => (
              <div key={trend.trend} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-brand-green-dark">{trend.trend}</h3>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    trend.valueImpact.includes("High")
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {trend.valueImpact.split(" - ")[0]} Value
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{trend.description}</p>
                <p className="text-sm text-gray-500">
                  <strong>Elements:</strong> {trend.elements}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
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

      {/* Related Links */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Condo Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/florida-sb4d-compliance-guide/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                SB4D Compliance Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Understand Florida's condo structural requirements.
              </p>
            </Link>
            <Link
              href="/insurance-restoration-condominiums/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Insurance Restoration
              </h3>
              <p className="text-gray-600 text-sm">
                Navigate complex condo insurance claims.
              </p>
            </Link>
            <Link
              href="/commercial/condo-remediation/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Condo Remediation Services
              </h3>
              <p className="text-gray-600 text-sm">
                Full range of condo repair capabilities.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Ready to Transform Your Common Areas?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            FCS specializes in condo common area reconstruction throughout Tampa Bay.
            From planning through completion, we help your community achieve beautiful,
            functional spaces that enhance property value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Start Your Project
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
      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Services"
            links={internalLinks}
          />
        </div>
      </section>

    </>
  );
}