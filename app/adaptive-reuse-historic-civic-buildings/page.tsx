import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building,
  CheckCircle,
  AlertTriangle,
  Landmark,
  ArrowRight,
  Phone,
  HelpCircle,
  Clock,
  DollarSign,
  Shield,
  FileText,
  Scale,
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
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Historic Civic Building Reuse Tampa | FCS",
  description:
    "Expert adaptive reuse of historic civic buildings in Tampa Bay. Convert courthouses, post offices, schools, and city halls into modern commercial spaces while preserving historic character.",
  keywords:
    "adaptive reuse Tampa, historic civic building conversion, courthouse adaptive reuse, historic post office renovation, school building conversion Florida, historic preservation commercial",
};

const civicBuildingTypes = [
  {
    type: "Courthouses",
    characteristics: "High ceilings, ornate details, prominent locations, large courtrooms",
    commonConversions: "Boutique hotels, event venues, office space, mixed-use",
    challenges: "Courtroom layouts, security features, public space expectations",
    opportunities: "Dramatic spaces, tourism draw, community anchor",
  },
  {
    type: "Post Offices",
    characteristics: "Public lobbies, service windows, mail sorting areas, loading docks",
    commonConversions: "Retail, restaurants, office space, residential lofts",
    challenges: "Large open volumes, limited windows in sorting areas",
    opportunities: "Prominent downtown locations, New Deal art/murals, community familiarity",
  },
  {
    type: "Schools",
    characteristics: "Classroom layouts, corridors, auditoriums, gymnasiums, playgrounds",
    commonConversions: "Apartments, senior housing, offices, community centers",
    challenges: "Classroom size limitations, code compliance for residential",
    opportunities: "Neighborhood locations, outdoor space, community connection",
  },
  {
    type: "City Halls",
    characteristics: "Council chambers, public meeting spaces, office layouts, civic presence",
    commonConversions: "Mixed-use, office, event venues, cultural centers",
    challenges: "Formal spaces difficult to adapt, public expectations",
    opportunities: "Symbolic importance, prominent architecture, community identity",
  },
  {
    type: "Fire Stations",
    characteristics: "Apparatus bays, living quarters, towers, neighborhood presence",
    commonConversions: "Restaurants, breweries, residential, retail",
    challenges: "Vehicle bay doors, specialized floor drains, residential codes",
    opportunities: "Unique character, neighborhood scale, architectural interest",
  },
  {
    type: "Libraries",
    characteristics: "Reading rooms, stacks, high ceilings, natural light design",
    commonConversions: "Event venues, offices, residential, cultural uses",
    challenges: "Stack floor loads may need reinforcement, lighting systems",
    opportunities: "Excellent natural light, dramatic spaces, community goodwill",
  },
];

const regulatoryFramework = [
  {
    requirement: "National Register Status",
    description: "Many civic buildings are listed or eligible for National Register of Historic Places",
    implications: "Federal tax credits available; SHPO review required for federal involvement",
    fcsRole: "Documentation support, coordination with preservation consultants",
  },
  {
    requirement: "Secretary of Interior Standards",
    description: "10 standards for rehabilitation projects seeking tax credits",
    implications: "Must preserve character-defining features; reversible changes preferred",
    fcsRole: "Standards-compliant construction methods and materials",
  },
  {
    requirement: "Florida SHPO Review",
    description: "State Historic Preservation Office reviews projects with state/federal involvement",
    implications: "Review adds 30-90 days; may require design modifications",
    fcsRole: "Prepare submission packages, respond to SHPO comments",
  },
  {
    requirement: "Local Historic Designation",
    description: "Many civic buildings have local landmark status independent of National Register",
    implications: "Local HPC approval required; may have stricter standards",
    fcsRole: "Present to local boards, coordinate with preservation staff",
  },
  {
    requirement: "Building Code Compliance",
    description: "Florida Building Code Chapter 12 provides flexibility for historic buildings",
    implications: "Alternative compliance paths available; must document equivalency",
    fcsRole: "Creative code solutions, work with building officials",
  },
  {
    requirement: "ADA Accessibility",
    description: "Reasonable accommodation required; not full new construction compliance",
    implications: "Must make accessible to maximum extent feasible without threatening historic character",
    fcsRole: "Accessible design solutions that respect historic fabric",
  },
];

const taxCreditOpportunities = [
  {
    credit: "Federal Historic Tax Credit (HTC)",
    value: "20% of qualified rehabilitation expenditures",
    requirements: "National Register listed or eligible; income-producing use; substantial rehabilitation",
    process: "Part 1 (significance), Part 2 (proposed work), Part 3 (completed work)",
    notes: "Can generate significant equity; syndication common for large projects",
  },
  {
    credit: "Florida Historic Tax Credit",
    value: "Up to 20% state credit (in addition to federal)",
    requirements: "Similar to federal; must be approved heritage tourism site or in certified area",
    process: "Florida SHPO application; can combine with federal HTC",
    notes: "Competitive program; not guaranteed; enhances federal HTC projects",
  },
  {
    credit: "New Markets Tax Credit (NMTC)",
    value: "39% of investment over 7 years",
    requirements: "Low-income census tracts; community development focus",
    process: "Allocation through CDFIs; complex transaction structure",
    notes: "Many civic buildings in qualifying areas; stackable with HTC",
  },
  {
    credit: "Opportunity Zone Benefits",
    value: "Capital gains deferral and reduction; tax-free appreciation after 10 years",
    requirements: "Investment in designated Opportunity Zone; use of Qualified Opportunity Fund",
    process: "Fund formation; investment tracking; long-term hold required",
    notes: "Some downtown Tampa areas qualify; timing critical",
  },
];

const commonChallenges = [
  {
    challenge: "Hidden Conditions",
    description: "Concealed structural issues, hazardous materials, outdated systems",
    solution: "Comprehensive pre-acquisition investigation; contingency budgets of 15-25%",
    fcsApproach: "Destructive testing protocols; systematic investigation before design",
  },
  {
    challenge: "Code Compliance",
    description: "Fire/life safety, accessibility, energy codes designed for new construction",
    solution: "Florida Building Code historic provisions; performance-based alternatives",
    fcsApproach: "Early building official meetings; alternative compliance documentation",
  },
  {
    challenge: "Preservation Standards",
    description: "Balancing historic preservation with functional modern requirements",
    solution: "Secretary of Interior Standards allow sensitive contemporary interventions",
    fcsApproach: "Experienced preservation team; early SHPO coordination",
  },
  {
    challenge: "Public Perception",
    description: "Community attachment to civic buildings; concern about change",
    solution: "Public engagement; heritage interpretation; community programming",
    fcsApproach: "Public meeting support; visibility into preservation decisions",
  },
  {
    challenge: "Market Positioning",
    description: "Finding tenants/buyers who value historic character and accept limitations",
    solution: "Target creative class, hospitality, cultural uses that benefit from character",
    fcsApproach: "Design for flexibility within preservation constraints",
  },
];

const projectPhases = [
  {
    phase: "Feasibility & Acquisition",
    duration: "2-6 months",
    tasks: [
      "Historic significance research",
      "Preliminary code analysis",
      "Environmental Phase I/II",
      "Tax credit eligibility assessment",
      "Financial pro forma development",
      "Acquisition negotiation",
    ],
  },
  {
    phase: "Design & Entitlements",
    duration: "6-12 months",
    tasks: [
      "Preservation consultant engagement",
      "Schematic design development",
      "SHPO Part 1 and Part 2 submissions",
      "Local historic review/approval",
      "Construction documents",
      "Building permit application",
    ],
  },
  {
    phase: "Construction",
    duration: "12-24 months",
    tasks: [
      "Careful demolition and investigation",
      "Structural remediation",
      "Systems installation (MEP)",
      "Historic feature restoration",
      "Contemporary insertions",
      "Finishes and landscaping",
    ],
  },
  {
    phase: "Certification & Occupancy",
    duration: "2-4 months",
    tasks: [
      "SHPO Part 3 submission",
      "Certificate of Occupancy",
      "Tax credit certification",
      "Tenant buildout (if applicable)",
      "Heritage interpretation installation",
      "Grand opening/community celebration",
    ],
  },
];

const faqs = [
  {
    question: "What is adaptive reuse of a historic building?",
    answer:
      "Adaptive reuse is the process of repurposing a building for a use different from its original purpose while retaining its historic features. For civic buildings, this might mean converting a courthouse to a boutique hotel, a post office to a restaurant, or a school to apartments. The goal is to find economically viable new uses that preserve the building's character-defining features—the architectural elements that make it historically significant. Done well, adaptive reuse extends a building's life, preserves community heritage, and often creates unique spaces that new construction cannot replicate.",
  },
  {
    question: "Are there tax credits for adaptive reuse of civic buildings?",
    answer:
      "Yes, significant tax incentives are available. The Federal Historic Tax Credit provides 20% of qualified rehabilitation expenditures for income-producing properties listed on the National Register of Historic Places. Florida offers an additional state credit up to 20% for qualifying projects. Many civic buildings are in areas eligible for New Markets Tax Credits (39% over 7 years) or Opportunity Zone benefits. These credits can be combined, potentially covering 40-50% or more of rehabilitation costs. The credits require following Secretary of Interior Standards for rehabilitation and approval from the State Historic Preservation Office.",
  },
  {
    question: "How long does an adaptive reuse project take?",
    answer:
      "From initial concept to occupancy, adaptive reuse projects typically take 2-4 years. The feasibility and acquisition phase is 2-6 months; design and entitlements take 6-12 months (longer if complex SHPO review); construction runs 12-24 months depending on scope. The timeline is longer than new construction primarily due to regulatory review (SHPO, local historic commissions) and the discovery of hidden conditions that require design adjustments. Build contingency into your schedule—civic buildings often have surprises behind the plaster.",
  },
  {
    question: "What are the biggest challenges in civic building adaptive reuse?",
    answer:
      "The primary challenges are: (1) Hidden conditions—these buildings often have decades of deferred maintenance and concealed structural issues; (2) Code compliance—meeting modern fire, accessibility, and energy codes in historic fabric requires creative solutions; (3) Preservation standards—balancing functional requirements with character preservation limits some options; (4) Community expectations—civic buildings have emotional significance that creates public scrutiny; (5) Economics—achieving viable returns while respecting historic requirements adds cost. Success requires experienced teams who understand both preservation and development.",
  },
  {
    question: "Can we make significant changes to a historic civic building?",
    answer:
      "Yes, but changes must follow the Secretary of Interior Standards for Rehabilitation to qualify for tax credits. The Standards allow substantial changes—even contemporary additions—as long as character-defining features are preserved and changes are differentiated from the historic fabric. Interior changes are generally more flexible than exterior alterations. Key principles: preserve what matters, be honest about new work, make changes reversible when possible. SHPO will review proposed changes and may require modifications. Early coordination helps identify what's possible before extensive design investment.",
  },
  {
    question: "What uses work best for converted civic buildings?",
    answer:
      "The best uses capitalize on the building's unique character: boutique hotels and event venues benefit from grand spaces; restaurants and breweries thrive in distinctive settings; creative offices attract tenants seeking character over generic space; residential (especially lofts) appeals to those valuing authenticity; cultural uses maintain community connection. Avoid uses requiring extensive subdivision that destroys spatial character, or those needing more parking than a downtown location provides. The ideal use makes the historic features an asset rather than a constraint.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Adaptive Reuse Historic Civic Buildings", href: "/adaptive-reuse-historic-civic-buildings/" },
];


const internalLinks = [
  { href: "/services/historic-restoration/", label: "Historic Restoration Services" },
  { href: "/services/historic-restoration/shpo-compliance/", label: "SHPO Compliance" },
  { href: "/services/historic-restoration/historic-tax-credits/", label: "Historic Tax Credits" },
  { href: "/services/historic-restoration/material-sourcing/", label: "Historic Material Sourcing" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const relatedArticles = [
  {
    "title": "Tampa Historic Restoration Permits and Regulations",
    "href": "/tampa-historic-restoration-permits-and-regulations/",
    "description": "Navigate Tampa's historic restoration permit process including COA requirements and SHPO review."
  },
  {
    "title": "Preserving Tampa's Cultural Heritage",
    "href": "/preserving-tampas-cultural-heritage-through-restoration/",
    "description": "How thoughtful restoration projects maintain Tampa Bay's architectural legacy."
  },
  {
    "title": "Architectural Styles in Tampa's Historic Restoration",
    "href": "/architectural-styles-in-tampas-historic-restoration/",
    "description": "Understanding the diverse architectural heritage of Tampa's historic districts."
  },
  {
    "title": "Historic Tax Credits for Commercial Buildings",
    "href": "/historic-tax-credits-commercial-buildings/",
    "description": "Maximize ROI with federal and state historic preservation tax incentives."
  }
];

export default function AdaptiveReuseHistoricCivicBuildingsPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Historic Adaptive Reuse Construction" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Adaptive Reuse Construction Services"
        serviceDescription="Expert adaptive reuse of historic civic buildings in Tampa Bay. Courthouse conversions, post office rehabilitations, school transformations, and city hall repurposing with historic tax credit compliance."
        city="Tampa"
        minPrice="500000"
      />

      
      <ArticleSchema
        headline="Adaptive Reuse of Historic Civic Buildings | Tampa Preservation | FCS"
        description="Expert adaptive reuse of historic civic buildings in Tampa Bay. Convert courthouses, post offices, schools, and city halls into modern commercial spaces while preserving historic character."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/adaptive-reuse-historic-civic-buildings/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Commercial", href: "/commercial/" },
          { name: "Historic Restoration", href: "/commercial/historic-restoration/" },
          { name: "Adaptive Reuse Civic Buildings", href: "/adaptive-reuse-historic-civic-buildings/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/historic-preservation/historic-preservation-display.webp"
            alt="Historic building restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <BackToHub
              silo="commercial"
              customHubTitle="Historic Restoration"
              customHubHref="/commercial/historic-restoration/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Adaptive Reuse of Historic Civic Buildings
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Transforming Tampa Bay&apos;s courthouses, post offices, schools, and city halls
              into vibrant commercial spaces while preserving their historic character
              and capturing available tax credits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Discuss Your Adaptive Reuse Project
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

      {/* Civic Building Types */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Civic Building Types & Conversion Potential
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Each civic building type offers unique opportunities and challenges for adaptive reuse.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="px-4 py-3 text-left font-semibold">Building Type</th>
                  <th className="px-4 py-3 text-left font-semibold">Characteristics</th>
                  <th className="px-4 py-3 text-left font-semibold">Common Conversions</th>
                  <th className="px-4 py-3 text-left font-semibold">Opportunities</th>
                </tr>
              </thead>
              <tbody>
                {civicBuildingTypes.map((building, index) => (
                  <tr
                    key={building.type}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-semibold text-brand-green-dark">
                      <div className="flex items-center gap-2">
                        <Landmark className="w-5 h-5 text-brand-gold" />
                        {building.type}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{building.characteristics}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{building.commonConversions}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{building.opportunities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tax Credit Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Tax Credit Opportunities
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Significant financial incentives are available for qualified adaptive reuse projects.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {taxCreditOpportunities.map((credit) => (
              <div key={credit.credit} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-8 h-8 text-brand-gold" />
                  <h3 className="text-xl font-bold text-brand-green-dark">{credit.credit}</h3>
                </div>
                <p className="text-2xl font-bold text-brand-green mb-3">{credit.value}</p>
                <p className="text-gray-600 text-sm mb-3">{credit.requirements}</p>
                <div className="bg-brand-green-light/30 rounded-lg p-3 mb-3">
                  <span className="text-xs text-brand-green-dark font-semibold block mb-1">Process</span>
                  <p className="text-gray-700 text-sm">{credit.process}</p>
                </div>
                <p className="text-xs text-gray-500 italic">{credit.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Framework */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Regulatory Framework
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Navigating the regulatory requirements for historic civic building projects.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regulatoryFramework.map((item) => (
              <div key={item.requirement} className="card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-brand-green-dark">{item.requirement}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <p className="text-sm text-yellow-700 bg-yellow-50 rounded-lg px-3 py-2 mb-2">
                  <strong>Implications:</strong> {item.implications}
                </p>
                <p className="text-xs text-gray-500">
                  <strong>FCS Role:</strong> {item.fcsRole}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Phases */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Adaptive Reuse Project Phases
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            A typical timeline from concept to occupancy.
          </p>
          <div className="space-y-6 max-w-3xl mx-auto">
            {projectPhases.map((phase, index) => (
              <div
                key={phase.phase}
                className="bg-white rounded-xl p-6 shadow-md border-l-4 border-brand-green"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-brand-green-dark">
                        {phase.phase}
                      </h3>
                      <span className="text-sm font-medium text-brand-green bg-brand-green-light/30 px-3 py-1 rounded-full">
                        {phase.duration}
                      </span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {phase.tasks.map((task, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{task}</span>
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

      {/* Common Challenges */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Common Challenges & Solutions
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            How we address the typical hurdles in civic building adaptive reuse.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {commonChallenges.map((item) => (
              <div key={item.challenge} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-600" />
                  <h3 className="font-bold text-brand-green-dark">{item.challenge}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="bg-green-50 rounded-lg p-3 mb-2">
                  <span className="text-xs text-green-600 font-semibold block mb-1">Solution</span>
                  <p className="text-gray-700 text-sm">{item.solution}</p>
                </div>
                <p className="text-xs text-gray-500">
                  <strong>FCS Approach:</strong> {item.fcsApproach}
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
            Related Historic Restoration Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/historic-tax-credits-commercial-buildings/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Historic Tax Credits Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Comprehensive guide to federal and state historic tax credits.
              </p>
            </Link>
            <Link
              href="/tampa-historic-social-clubs-restoration/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Historic Social Clubs Restoration
              </h3>
              <p className="text-gray-600 text-sm">
                Preserving Tampa&apos;s unique cultural heritage buildings.
              </p>
            </Link>
            <Link
              href="/commercial/historic-restoration/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Historic Restoration Services
              </h3>
              <p className="text-gray-600 text-sm">
                Full range of commercial historic restoration capabilities.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Have a Civic Building Project in Mind?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            FCS has experience transforming Tampa Bay&apos;s historic civic buildings
            into vibrant commercial spaces. From initial feasibility through
            tax credit certification, we guide projects to successful completion.
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
      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      
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