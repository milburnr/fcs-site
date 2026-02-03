import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  CheckCircle,
  AlertTriangle,
  Building,
  ArrowRight,
  Phone,
  HelpCircle,
  Users,
  DollarSign,
  Sparkles,
  Dumbbell,
  Car,
  Waves,
  Shield,
  FileText,
  Clock,
  Wrench,
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
  title: "Condo Common Area Construction Tampa | Lobby",
  description:
    "Expert condo common area construction and renovation in Tampa Bay. Lobby upgrades, pool deck renovations, fitness center buildouts, parking improvements, and amenity additions for HOAs.",
  keywords:
    "condo common area construction Tampa, HOA lobby renovation, condo amenity construction, pool deck renovation Florida, fitness center buildout condo, parking garage improvements",
};

const commonAreaTypes = [
  {
    area: "Lobby & Reception",
    description: "First impressions and property value driver",
    components: ["Reception desk and seating", "Mail room and package lockers", "Elevator lobbies", "Concierge station", "Security desk"],
    considerations: "High-traffic flooring, ADA compliance, lighting design, security integration",
    budget: "$150-400/sq ft",
  },
  {
    area: "Pool Deck & Amenities",
    description: "Outdoor living and social spaces",
    components: ["Pool resurfacing/replacement", "Deck pavers or coating", "Cabanas and shade structures", "Outdoor kitchen/grill", "Restroom facilities"],
    considerations: "Waterproofing, drainage, slip resistance, wind load for structures",
    budget: "$100-300/sq ft",
  },
  {
    area: "Fitness Center",
    description: "Health and wellness amenities",
    components: ["Flooring (rubber/vinyl)", "HVAC upgrades for ventilation", "Electrical for equipment", "Mirrors and finishes", "Locker rooms"],
    considerations: "Floor load capacity, sound isolation, equipment power needs, ventilation",
    budget: "$75-200/sq ft",
  },
  {
    area: "Parking Structure",
    description: "Vehicle storage and access",
    components: ["Surface restoration", "Waterproofing membrane", "LED lighting upgrade", "EV charging stations", "Access control systems"],
    considerations: "Traffic flow during work, structural assessment, coating cure times",
    budget: "$5-25/sq ft surface; $50-100k per EV station",
  },
  {
    area: "Corridors & Hallways",
    description: "Connecting spaces and fire egress",
    components: ["Flooring replacement", "Wall finishes and paint", "Lighting upgrades", "Fire safety systems", "Wayfinding signage"],
    considerations: "Resident access during work, fire code compliance, phased completion",
    budget: "$50-150/sq ft",
  },
  {
    area: "Clubhouse & Social",
    description: "Community gathering spaces",
    components: ["Meeting rooms", "Party/event space", "Kitchen facilities", "AV systems", "Storage areas"],
    considerations: "Acoustics, flexible layouts, commercial kitchen codes if applicable",
    budget: "$100-250/sq ft",
  },
];

const projectProcessSteps = [
  {
    step: 1,
    phase: "Assessment & Planning",
    duration: "4-8 weeks",
    activities: [
      "Board consultation and needs assessment",
      "Reserve study review and funding analysis",
      "Architectural design development",
      "Engineering studies if structural work required",
      "Permit requirements identification",
    ],
    hoaRole: "Define scope and priorities, approve budget parameters",
  },
  {
    step: 2,
    phase: "Design & Bidding",
    duration: "6-12 weeks",
    activities: [
      "Complete construction documents",
      "Contractor prequalification",
      "Competitive bidding process",
      "Bid analysis and recommendation",
      "Contract negotiation",
    ],
    hoaRole: "Review designs, approve contractor selection, execute contracts",
  },
  {
    step: 3,
    phase: "Pre-Construction",
    duration: "2-4 weeks",
    activities: [
      "Permit applications and approvals",
      "Resident communication plan",
      "Temporary access arrangements",
      "Material procurement",
      "Schedule finalization",
    ],
    hoaRole: "Communicate with residents, approve final schedule",
  },
  {
    step: 4,
    phase: "Construction",
    duration: "Varies by scope",
    activities: [
      "Demolition and preparation",
      "Rough construction",
      "Finish work",
      "Systems installation",
      "Quality inspections",
    ],
    hoaRole: "Weekly progress meetings, change order approvals",
  },
  {
    step: 5,
    phase: "Closeout",
    duration: "2-4 weeks",
    activities: [
      "Punch list completion",
      "Final inspections",
      "System training",
      "Warranty documentation",
      "Reserve study update",
    ],
    hoaRole: "Final walkthrough, payment approval, warranty receipt",
  },
];

const fundingOptions = [
  {
    option: "Reserve Funds",
    description: "Accumulated reserves designated for capital improvements",
    pros: ["No interest costs", "Already planned for", "No unit owner approval needed"],
    cons: ["May deplete reserves", "Limited to available balance", "Impacts other projects"],
    bestFor: "Planned improvements within reserve study scope",
  },
  {
    option: "Special Assessment",
    description: "One-time charge to unit owners for specific project",
    pros: ["Funds large projects", "Spreads cost across owners", "Preserves reserves"],
    cons: ["Requires owner approval", "Payment collection challenges", "Owner resistance"],
    bestFor: "Major improvements not fully funded by reserves",
  },
  {
    option: "Association Loan",
    description: "Bank financing repaid through assessments over time",
    pros: ["Immediate funding", "Spreads payments over years", "Preserves reserves"],
    cons: ["Interest costs", "Long-term obligation", "Requires board approval"],
    bestFor: "Large projects with steady assessment capacity",
  },
  {
    option: "Phased Construction",
    description: "Breaking project into stages funded over time",
    pros: ["Smaller funding needs", "Can adjust based on results", "Maintains cash flow"],
    cons: ["Extended timeline", "Potential cost increases", "Ongoing disruption"],
    bestFor: "Budget-constrained associations with multiple needs",
  },
];

const sb4dConsiderations = [
  {
    requirement: "Milestone Inspections",
    description: "Buildings 3+ stories must complete structural inspections at 30 years (25 if within 3 miles of coast), then every 10 years",
    impact: "Common area work may trigger inspection requirements; coordinate with SIRS compliance",
  },
  {
    requirement: "SIRS Compliance",
    description: "Structural Integrity Reserve Studies required for buildings 3+ stories",
    impact: "Reserve funding for structural components must be maintained; cannot waive reserves",
  },
  {
    requirement: "Balcony/Walkway Assessment",
    description: "Load-bearing elements of balconies and walkways must be inspected",
    impact: "Common area walkway and corridor work should address any structural deficiencies",
  },
  {
    requirement: "Reserve Funding",
    description: "Full funding of reserves for structural components now required",
    impact: "Budget for common area improvements must account for required reserve contributions",
  },
];

const faqs = [
  {
    question: "How do we minimize disruption to residents during common area construction?",
    answer:
      "Minimizing disruption requires careful planning and communication. We develop detailed phasing plans that maintain access to essential facilities—if renovating the only pool, we schedule work outside peak season. For lobby work, we create temporary access routes and protect finishes in occupied areas. Work hours are restricted to minimize noise during early morning and evening. Regular communication through newsletters, signage, and board updates keeps residents informed. For major projects, we often work building-by-building or floor-by-floor to limit the affected area at any time.",
  },
  {
    question: "What permits are required for condo common area construction?",
    answer:
      "Permit requirements vary by scope. Interior cosmetic work (paint, carpet, lighting fixtures) typically doesn't require permits. Structural modifications, plumbing, electrical, HVAC, and fire safety work require building permits. Pool renovations require health department and building permits. Some jurisdictions require permits for roofing, waterproofing, and ADA improvements. We research requirements early and factor permit timelines (typically 2-8 weeks) into project schedules. For buildings in historic districts, additional approvals may be needed.",
  },
  {
    question: "How should an HOA budget for common area construction projects?",
    answer:
      "Start with a professional reserve study that identifies major components and their replacement timelines. This creates a 30-year funding plan. For specific projects, obtain multiple contractor estimates during planning—not just for budgeting but to understand scope options. Add 10-15% contingency for unknowns. Consider total project costs including design fees, permits, inspections, and temporary facilities. The funding approach (reserves, special assessment, loan) should match project size and association financial capacity. SB4-D requirements now mandate full reserve funding for structural components.",
  },
  {
    question: "Can common area work be done while the building is occupied?",
    answer:
      "Yes, most common area construction occurs in occupied buildings. The key is planning for safe access, noise/dust control, and resident communication. We install temporary barriers to separate work areas from occupied spaces. HVAC controls prevent dust migration to units. Work hours respect quiet times. For major structural work or work that affects life safety systems (fire alarms, emergency lighting), we may need to temporarily evacuate specific areas or install temporary systems. The construction team coordinates with building management on access and security protocols.",
  },
  {
    question: "How do Florida's SB4-D requirements affect common area construction projects?",
    answer:
      "SB4-D (the condo safety legislation following Surfside) affects common area projects in several ways. Buildings 3+ stories must complete milestone inspections at 30 years (25 years if coastal), which may identify structural repairs that must be addressed. SIRS requirements mean associations must maintain full reserves for structural components—you can't deplete reserves for aesthetic improvements if structural funding is inadequate. Common area projects should be coordinated with inspection requirements to address any deficiencies. We help associations understand how proposed work relates to SB4-D compliance.",
  },
  {
    question: "What is the typical timeline for a condo lobby renovation?",
    answer:
      "A complete lobby renovation typically takes 3-6 months from design through completion. Design development and approvals take 4-8 weeks. Permitting adds 2-6 weeks depending on jurisdiction. Construction duration depends on scope—a cosmetic refresh (flooring, paint, lighting, furniture) might take 4-6 weeks of construction, while a complete gut renovation with structural modifications could take 12-16 weeks. We often phase work to maintain lobby access, which can extend timelines but reduces resident impact. Fast-track approaches are possible but typically cost more.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Condo Common Area Construction", href: "/condo-common-area-construction/" },
];


const internalLinks = [
  { href: "/sb-4-d-compliance-tampa-bay-condos/", label: "SB 4-D Compliance Guide" },
  { href: "/condo-milestone-inspection-remediation/", label: "Milestone Inspection Services" },
  { href: "/condo-structural-reserve-study-repairs/", label: "Structural Reserve Studies" },
  { href: "/balcony-reconstruction/", label: "Balcony Reconstruction" },
  { href: "/services/residential/exterior-waterproofing/", label: "Exterior Waterproofing" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function CondoCommonAreaConstructionPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Condo Common Area Construction" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Condo Common Area Construction Services"
        serviceDescription="Expert construction and renovation services for condominium common areas in Tampa Bay. Lobby upgrades, pool deck renovations, fitness centers, parking improvements, and amenity additions for HOAs and property managers."
        city="Tampa"
        minPrice="100000"
      />
      <ArticleSchema
        headline="Condo Common Area Construction Tampa | Lobby & Amenity Renovation"
        description="Expert condo common area construction and renovation in Tampa Bay. Lobby upgrades, pool deck renovations, fitness center buildouts, parking improvements, and amenity additions for HOAs."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/condo-common-area-construction/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Commercial", href: "/commercial/" },
          { name: "Multi-Family Construction", href: "/multi-family-construction/" },
          { name: "Common Area Construction", href: "/condo-common-area-construction/" },
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
              customHubTitle="Multi-Family Construction"
              customHubHref="/multi-family-construction/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Condo Common Area Construction
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Expert renovation and construction of condo amenities, lobbies, pool decks,
              fitness centers, and common spaces. SB4-D compliant project delivery for
              Tampa Bay HOAs and property managers.
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

      {/* Common Area Types */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Common Area Construction Types
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We construct and renovate all types of condo common areas to enhance property
            value and resident satisfaction.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonAreaTypes.map((area) => (
              <div key={area.area} className="card p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-2">{area.area}</h3>
                <p className="text-gray-600 text-sm mb-4">{area.description}</p>
                <div className="mb-3">
                  <span className="text-xs font-semibold text-gray-500 uppercase">Components</span>
                  <ul className="mt-1 space-y-1">
                    {area.components.map((component, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 text-brand-green mt-1 flex-shrink-0" />
                        {component}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-brand-green-light/30 rounded-lg p-3 mb-3">
                  <span className="text-xs font-semibold text-brand-green-dark">Key Considerations</span>
                  <p className="text-sm text-gray-700 mt-1">{area.considerations}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-brand-green">{area.budget}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            HOA Construction Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Structured approach designed specifically for condominium association governance.
          </p>
          <div className="space-y-6 max-w-4xl mx-auto">
            {projectProcessSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-xl p-6 shadow-md border-l-4 border-brand-green"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-brand-green-dark">{step.phase}</h3>
                      <span className="inline-flex items-center gap-1 text-sm text-brand-green font-medium">
                        <Clock className="w-4 h-4" />
                        {step.duration}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Activities</h4>
                        <ul className="space-y-1">
                          {step.activities.map((activity, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                              <CheckCircle className="w-3 h-3 text-brand-green mt-1 flex-shrink-0" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-amber-50 rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-amber-800 mb-2">
                          HOA Board Role
                        </h4>
                        <p className="text-gray-700 text-sm">{step.hoaRole}</p>
                      </div>
                    </div>
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
            Project Funding Options
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Understanding your options for financing common area improvements.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {fundingOptions.map((option) => (
              <div key={option.option} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <DollarSign className="w-8 h-8 text-brand-green" />
                  <h3 className="text-xl font-bold text-brand-green-dark">{option.option}</h3>
                </div>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-xs font-semibold text-green-700 uppercase">Advantages</span>
                    <ul className="mt-1 space-y-1">
                      {option.pros.map((pro, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-1">
                          <span className="text-green-500">+</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-red-700 uppercase">Considerations</span>
                    <ul className="mt-1 space-y-1">
                      {option.cons.map((con, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-1">
                          <span className="text-red-500">-</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-brand-green-light/30 rounded-lg p-3">
                  <span className="text-xs font-semibold text-brand-green-dark">Best For</span>
                  <p className="text-sm text-gray-700 mt-1">{option.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SB4-D Considerations */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Florida SB4-D Compliance Considerations
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            How Florida&apos;s condo safety legislation affects common area construction planning.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {sb4dConsiderations.map((item) => (
              <div key={item.requirement} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-brand-green-dark">{item.requirement}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-3">
                  <span className="text-xs font-semibold text-amber-800">Impact on Common Area Projects</span>
                  <p className="text-sm text-gray-700 mt-1">{item.impact}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/florida-sb4d-compliance-guide/" className="btn-primary">
              Read Full SB4-D Compliance Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Our Common Area Services
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-brand-green-dark" />
              </div>
              <h3 className="font-bold text-brand-green-dark mb-2">Lobby Renovation</h3>
              <p className="text-gray-600 text-sm">
                Complete lobby transformations including reception, mail rooms, and elevator lobbies.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-brand-green-dark" />
              </div>
              <h3 className="font-bold text-brand-green-dark mb-2">Pool & Deck</h3>
              <p className="text-gray-600 text-sm">
                Pool renovations, deck resurfacing, cabanas, and outdoor living spaces.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="w-8 h-8 text-brand-green-dark" />
              </div>
              <h3 className="font-bold text-brand-green-dark mb-2">Fitness Centers</h3>
              <p className="text-gray-600 text-sm">
                Complete fitness facility buildouts with proper ventilation and equipment infrastructure.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-brand-green-dark" />
              </div>
              <h3 className="font-bold text-brand-green-dark mb-2">Parking & Garage</h3>
              <p className="text-gray-600 text-sm">
                Parking structure repairs, waterproofing, lighting, and EV charging installation.
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
            Related Condo Construction Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/florida-sb4d-compliance-guide/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                SB4-D Compliance Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Florida&apos;s condo safety requirements and compliance timeline.
              </p>
            </Link>
            <Link
              href="/condo-common-area-reconstruction/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Common Area Reconstruction
              </h3>
              <p className="text-gray-600 text-sm">
                Post-disaster reconstruction of condo common areas.
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
                Comprehensive condo repair and structural remediation.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Planning a Common Area Improvement?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            FCS partners with HOA boards and property managers throughout Tampa Bay
            to deliver successful common area construction projects. From planning
            through completion, we guide your association every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request a Consultation
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