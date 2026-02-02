import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ClipboardList,
  CheckCircle,
  AlertTriangle,
  Building,
  ArrowRight,
  Phone,
  HelpCircle,
  Calendar,
  Users,
  DollarSign,
  Target,
  Clock,
  Shield,
  FileText,
  TrendingUp,
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
  title: "Multi-Family Construction Project Management Tampa | Apartment Building PM | FCS",
  description:
    "Expert project management for multi-family construction in Tampa Bay. Condo, apartment, and mixed-use development scheduling, budgeting, stakeholder coordination, and risk management.",
  keywords:
    "multi-family construction project management, apartment building project manager Tampa, condo construction scheduling, multi-unit development coordination, residential complex construction management",
};

const projectPhases = [
  {
    phase: "Pre-Construction Planning",
    duration: "2-4 months",
    activities: [
      "Site due diligence and feasibility analysis",
      "Entitlement and zoning confirmation",
      "Design development coordination",
      "Value engineering sessions",
      "Contractor prequalification and bidding",
      "Financing coordination and draw schedule setup",
    ],
    deliverables: "GMP/lump sum proposal, master schedule, project budget",
  },
  {
    phase: "Permitting & Procurement",
    duration: "3-6 months",
    activities: [
      "Building permit submissions and expediting",
      "Long-lead material procurement",
      "Subcontractor contract execution",
      "Shop drawing review and approval",
      "Utility coordination and agreements",
      "Site logistics planning",
    ],
    deliverables: "Building permits, subcontracts, procurement log, site plan",
  },
  {
    phase: "Site Work & Foundation",
    duration: "2-4 months",
    activities: [
      "Erosion control and SWPPP implementation",
      "Mass grading and earthwork",
      "Underground utilities installation",
      "Foundation excavation and forming",
      "Concrete placement and curing",
      "Waterproofing and backfill",
    ],
    deliverables: "Foundation inspection sign-offs, as-built drawings",
  },
  {
    phase: "Vertical Construction",
    duration: "8-18 months",
    activities: [
      "Structural framing (wood, steel, or concrete)",
      "MEP rough-in coordination",
      "Exterior envelope and waterproofing",
      "Interior framing and drywall",
      "Unit finishes and fixtures",
      "Common area construction",
    ],
    deliverables: "Progress reports, inspection logs, quality documentation",
  },
  {
    phase: "Closeout & Turnover",
    duration: "2-3 months",
    activities: [
      "Punch list completion",
      "Final inspections and CO",
      "System commissioning and testing",
      "Owner training on building systems",
      "Warranty documentation handover",
      "Phased unit turnover coordination",
    ],
    deliverables: "Certificate of Occupancy, O&M manuals, warranty package",
  },
];

const criticalSuccessFactors = [
  {
    factor: "Scheduling & Sequencing",
    description: "Multi-family projects require precise coordination of repetitive work across hundreds of units",
    bestPractices: [
      "Use CPM scheduling with milestone payments tied to completion",
      "Implement flow scheduling for repetitive unit work",
      "Buffer critical path activities for weather and labor issues",
      "Coordinate inspections in batches to minimize delays",
    ],
  },
  {
    factor: "Budget Management",
    description: "Cost control across extended timelines with multiple stakeholders",
    bestPractices: [
      "Establish detailed cost codes matching unit types",
      "Track costs at building/phase level for variance analysis",
      "Implement change order protocols with owner approval thresholds",
      "Forecast cash flow monthly with 90-day look-ahead",
    ],
  },
  {
    factor: "Quality Control",
    description: "Consistent quality across identical units built by different crews",
    bestPractices: [
      "Create model units for finish and quality standards",
      "Implement unit-by-unit inspection checklists",
      "Track punch list metrics by trade contractor",
      "Conduct third-party quality audits quarterly",
    ],
  },
  {
    factor: "Stakeholder Coordination",
    description: "Managing owner, lender, design team, and regulatory relationships",
    bestPractices: [
      "Weekly OAC (Owner-Architect-Contractor) meetings",
      "Monthly lender site walks and draw documentation",
      "Regular design team coordination for RFIs",
      "Proactive inspector relationship management",
    ],
  },
];

const commonChallenges = [
  {
    challenge: "Labor Shortages",
    impact: "Schedule delays, quality issues, cost increases",
    mitigation: "Pre-qualify multiple subcontractors per trade, build long-term relationships, consider prefabrication to reduce site labor needs",
  },
  {
    challenge: "Material Lead Times",
    impact: "Work stoppages, resequencing, expediting costs",
    mitigation: "Early procurement of long-lead items (switchgear, elevators, HVAC units), maintain buffer stock of critical materials",
  },
  {
    challenge: "Weather Delays",
    impact: "Foundation and exterior work disruption",
    mitigation: "Build weather days into schedule, prioritize weather-sensitive activities, protect in-progress work",
  },
  {
    challenge: "Design Changes",
    impact: "Rework, material waste, schedule impacts",
    mitigation: "Complete design before construction, implement formal change order process, track cumulative change impact",
  },
  {
    challenge: "Inspection Coordination",
    impact: "Crews waiting, out-of-sequence work",
    mitigation: "Batch inspections by building/floor, pre-inspection walk-throughs, develop inspector relationships",
  },
  {
    challenge: "Unit Turnover Sequence",
    impact: "Revenue delay, punch list bottleneck",
    mitigation: "Plan turnover sequence early, dedicate punch list crews, implement unit acceptance protocol",
  },
];

const projectTypes = [
  {
    type: "Garden-Style Apartments",
    units: "50-300 units",
    stories: "2-3 stories",
    structure: "Wood frame, Type V",
    pmFocus: "Site logistics, phased occupancy, amenity coordination",
    timeline: "12-18 months",
  },
  {
    type: "Mid-Rise Apartments",
    units: "100-400 units",
    stories: "4-6 stories",
    structure: "Wood over podium or steel frame, Type III",
    pmFocus: "Podium coordination, vertical transportation, fire system complexity",
    timeline: "18-24 months",
  },
  {
    type: "High-Rise Condos",
    units: "100-500 units",
    stories: "7+ stories",
    structure: "Concrete or steel, Type I",
    pmFocus: "Tower crane logistics, concrete cycle times, façade coordination",
    timeline: "24-36 months",
  },
  {
    type: "Mixed-Use Development",
    units: "Varies",
    stories: "Variable",
    structure: "Hybrid systems common",
    pmFocus: "Retail/residential interface, parking structure, multiple occupancies",
    timeline: "18-30 months",
  },
];

const faqs = [
  {
    question: "What makes multi-family project management different from single-family construction?",
    answer:
      "Multi-family construction involves repetitive work across many identical or similar units, which requires specialized scheduling techniques like flow scheduling and line-of-balance methods. The scale creates opportunities for efficiency through standardization, but also magnifies any mistakes—an error repeated across 200 units is far more costly than one in a single home. Additionally, multi-family projects typically involve more stakeholders (investors, lenders, property managers) and require coordination of complex building systems (elevators, fire suppression, central HVAC) that don't exist in single-family construction.",
  },
  {
    question: "How do you manage quality consistency across hundreds of units?",
    answer:
      "We establish model units early that serve as the quality standard for all subsequent work. Every trade contractor must complete their work in the model unit and receive approval before proceeding to production units. We implement unit-by-unit inspection checklists and track quality metrics by trade contractor. Third-party quality audits provide independent verification. When issues arise, we can identify patterns—if one framing crew consistently has problems, we address it early before it affects many units.",
  },
  {
    question: "What is the typical project management fee structure for multi-family construction?",
    answer:
      "Project management fees typically range from 3-6% of construction costs, depending on project complexity, scope of services, and risk allocation. Larger projects often have lower percentage fees due to economies of scale. The fee structure may be fixed fee, percentage of cost, or cost-plus with a guaranteed maximum. Some owners separate construction management from general contracting, while others prefer a single point of responsibility. We can work with various contract structures based on owner preference and project requirements.",
  },
  {
    question: "How do you handle phased occupancy while construction continues?",
    answer:
      "Phased occupancy requires careful planning for life safety, construction barriers, and noise/dust control. We sequence construction to complete buildings or floors in order, obtaining partial Certificates of Occupancy for completed sections. Temporary life safety measures protect occupied areas. Construction activities near occupied units are scheduled during business hours. We coordinate with property management on move-in logistics and maintain clear separation between construction zones and occupied areas.",
  },
  {
    question: "What software and tools do you use for multi-family project management?",
    answer:
      "We utilize integrated project management platforms including Procore for project documentation, daily reports, and RFI tracking; Primavera P6 or Microsoft Project for CPM scheduling; Bluebeam for drawing review and markup; and specialized cost management software for budget tracking. For field operations, we use mobile inspection apps, drone surveys for progress documentation, and BIM coordination software for MEP clash detection. The specific tools are tailored to project size and owner preferences.",
  },
  {
    question: "How do you coordinate with lenders on construction draws?",
    answer:
      "Lender coordination is critical for multi-family projects. We prepare detailed draw packages monthly that include progress photos, inspection reports, lien waivers, and percentage completion documentation. We schedule monthly lender site walks and maintain clear communication on any issues. Our cost tracking systems are structured to match lender requirements, and we provide forecasting to help with construction loan administration. Building a strong relationship with the lender's construction monitor helps streamline the draw process.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Multi Family Construction Project Management", href: "/multi-family-construction-project-management/" },
];


const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/services/residential/waterfront-homes/", label: "Waterfront Home Construction" },
  { href: "/services/residential/home-additions/", label: "Home Additions" },
  { href: "/services/residential/hurricane-resistant-construction/", label: "Hurricane-Resistant Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function MultiFamilyConstructionProjectManagementPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Multi-Family Construction Project Management" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Multi-Family Construction Project Management"
        serviceDescription="Expert project management services for apartment complexes, condominiums, and mixed-use developments in Tampa Bay. Comprehensive scheduling, budget management, quality control, and stakeholder coordination."
        city="Tampa"
        minPrice="50000"
      />

      
      <ArticleSchema
        headline="Multi-Family Construction Project Management Tampa | Apartment Building PM | FCS"
        description="Expert project management for multi-family construction in Tampa Bay. Condo, apartment, and mixed-use development scheduling, budgeting, stakeholder coordination, and risk management."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/multi-family-construction-project-management/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Commercial", href: "/commercial/" },
          { name: "Multi-Family Construction", href: "/multi-family-construction/" },
          { name: "Project Management", href: "/multi-family-construction-project-management/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Commercial construction project in Tampa Bay"
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
              customHubTitle="Multi-Family Construction"
              customHubHref="/multi-family-construction/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Multi-Family Construction Project Management
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Expert coordination of complex apartment, condo, and mixed-use developments
              in Tampa Bay. From pre-construction through turnover, we deliver projects
              on time and on budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Discuss Your Project
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

      {/* Project Types Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Multi-Family Project Types
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Each project type presents unique management challenges requiring specialized expertise.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="px-4 py-3 text-left font-semibold">Project Type</th>
                  <th className="px-4 py-3 text-center font-semibold">Units</th>
                  <th className="px-4 py-3 text-center font-semibold">Stories</th>
                  <th className="px-4 py-3 text-left font-semibold">PM Focus Areas</th>
                  <th className="px-4 py-3 text-center font-semibold">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {projectTypes.map((project, index) => (
                  <tr
                    key={project.type}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3">
                      <span className="font-semibold text-brand-green-dark">{project.type}</span>
                      <p className="text-sm text-gray-600">{project.structure}</p>
                    </td>
                    <td className="px-4 py-3 text-center text-sm">{project.units}</td>
                    <td className="px-4 py-3 text-center text-sm">{project.stories}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{project.pmFocus}</td>
                    <td className="px-4 py-3 text-center text-sm font-medium">{project.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Project Phases */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Multi-Family Project Phases
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Structured approach to delivering complex multi-unit residential projects.
          </p>
          <div className="space-y-6 max-w-4xl mx-auto">
            {projectPhases.map((phase, index) => (
              <div
                key={phase.phase}
                className="bg-white rounded-xl p-6 shadow-md border-l-4 border-brand-green"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-brand-green-dark">
                        {phase.phase}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-sm text-brand-green font-medium">
                        <Clock className="w-4 h-4" />
                        {phase.duration}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Activities</h4>
                        <ul className="space-y-1">
                          {phase.activities.map((activity, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                              <CheckCircle className="w-3 h-3 text-brand-green mt-1 flex-shrink-0" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-brand-green-light/30 rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-brand-green-dark mb-2">
                          Deliverables
                        </h4>
                        <p className="text-gray-700 text-sm">{phase.deliverables}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Critical Success Factors */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Critical Success Factors
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Key areas that determine project success in multi-family construction.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {criticalSuccessFactors.map((item) => (
              <div key={item.factor} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-8 h-8 text-brand-green" />
                  <h3 className="text-xl font-bold text-brand-green-dark">{item.factor}</h3>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Best Practices</h4>
                <ul className="space-y-2">
                  {item.bestPractices.map((practice, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      {practice}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Common Challenges & Solutions
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Proactive risk management for typical multi-family construction issues.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonChallenges.map((item) => (
              <div key={item.challenge} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  <h3 className="font-bold text-brand-green-dark">{item.challenge}</h3>
                </div>
                <div className="mb-3">
                  <span className="text-xs font-semibold text-gray-500 uppercase">Impact</span>
                  <p className="text-sm text-gray-600">{item.impact}</p>
                </div>
                <div className="bg-brand-green-light/30 rounded-lg p-3">
                  <span className="text-xs font-semibold text-brand-green-dark uppercase">Mitigation</span>
                  <p className="text-sm text-gray-700 mt-1">{item.mitigation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Our Project Management Services
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-brand-green-dark" />
              </div>
              <h3 className="font-bold text-brand-green-dark mb-2">Scheduling</h3>
              <p className="text-gray-600 text-sm">
                CPM scheduling, resource loading, and progress tracking for complex multi-phase projects.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-brand-green-dark" />
              </div>
              <h3 className="font-bold text-brand-green-dark mb-2">Cost Control</h3>
              <p className="text-gray-600 text-sm">
                Budget development, change management, and financial reporting for owners and lenders.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-brand-green-dark" />
              </div>
              <h3 className="font-bold text-brand-green-dark mb-2">Quality Assurance</h3>
              <p className="text-gray-600 text-sm">
                Unit-by-unit inspection programs, model units, and third-party quality audits.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-brand-green-dark" />
              </div>
              <h3 className="font-bold text-brand-green-dark mb-2">Coordination</h3>
              <p className="text-gray-600 text-sm">
                Owner, architect, contractor, and lender coordination throughout project lifecycle.
              </p>
            </div>
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
            Related Multi-Family Construction Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/commercial/cpm-scheduling/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                CPM Scheduling
              </h3>
              <p className="text-gray-600 text-sm">
                Critical path method scheduling for complex construction projects.
              </p>
            </Link>
            <Link
              href="/mixed-use-development-tampa/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Mixed-Use Development
              </h3>
              <p className="text-gray-600 text-sm">
                Residential-over-retail and urban infill development.
              </p>
            </Link>
            <Link
              href="/senior-living-construction-requirements/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Senior Living Construction
              </h3>
              <p className="text-gray-600 text-sm">
                AHCA-compliant assisted living and memory care facilities.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Planning a Multi-Family Development?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            FCS provides comprehensive project management for apartment complexes,
            condominiums, and mixed-use developments throughout Tampa Bay.
            Let us bring your vision to reality on time and on budget.
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