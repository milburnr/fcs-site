import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/Schema";
import { Phone, CheckCircle, Building2, Home, Users, DollarSign, HelpCircle, Shield, Clock, MapPin, Wrench } from "lucide-react";
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
  title: "Multi-Family Construction Services Tampa | Apartment & Condo Builder",
  description: "Expert multi-family construction services in Tampa Bay. Apartments, condominiums, townhomes, and mixed-use developments. Ground-up and renovation specialists.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Multi-Family Construction", href: "/multi-family-construction-services/" },
];

const internalLinks = [
  { href: "/sb-4-d-compliance-tampa-bay-condos/", label: "SB 4-D Compliance Guide" },
  { href: "/condo-milestone-inspection-remediation/", label: "Milestone Inspection Services" },
  { href: "/condo-common-area-construction/", label: "Condo Common Areas" },
  { href: "/services/commercial/design-build/", label: "Design-Build Services" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const serviceTypes = [
  {
    service: "Garden-Style Apartments",
    description: "2-4 story walk-up communities with surface parking",
    scope: "50-400+ units typical",
    constructionType: "Wood-frame (Type V)",
    timeline: "12-18 months",
    capabilities: [
      "Site development and infrastructure",
      "Wood-frame construction",
      "Clubhouse and amenity buildings",
      "Pool and recreation areas",
      "Parking and site improvements",
    ],
  },
  {
    service: "Mid-Rise Apartments",
    description: "4-7 story buildings with structured parking",
    scope: "100-300+ units typical",
    constructionType: "Wood over podium (Type III)",
    timeline: "18-24 months",
    capabilities: [
      "Podium and structured parking",
      "Mixed-use ground floor",
      "Premium amenity packages",
      "Elevator installation",
      "Complex site logistics",
    ],
  },
  {
    service: "Condominium Construction",
    description: "For-sale residential buildings with HOA common areas",
    scope: "20-200+ units typical",
    constructionType: "Varies by height and market",
    timeline: "14-30 months",
    capabilities: [
      "Owner-grade finishes and materials",
      "Individual unit customization",
      "Common area buildout",
      "Warranty programs",
      "HOA transition support",
    ],
  },
  {
    service: "Townhome Communities",
    description: "Attached housing with private entrances",
    scope: "30-200+ units typical",
    constructionType: "Wood-frame with fire separation",
    timeline: "12-20 months",
    capabilities: [
      "Individual unit foundations",
      "Attached garage construction",
      "Private outdoor spaces",
      "Site infrastructure",
      "Common area amenities",
    ],
  },
  {
    service: "Mixed-Use Development",
    description: "Residential above retail/commercial",
    scope: "50-300+ units with commercial",
    constructionType: "Type I/III hybrid typical",
    timeline: "20-30 months",
    capabilities: [
      "Ground-floor retail buildout",
      "Separate residential core",
      "Coordinated MEP systems",
      "Urban site constraints",
      "Multiple tenant coordination",
    ],
  },
  {
    service: "Renovation & Repositioning",
    description: "Updating existing multi-family properties",
    scope: "Any size existing property",
    constructionType: "Match existing + upgrades",
    timeline: "6-18 months",
    capabilities: [
      "Occupied building renovation",
      "Unit interior upgrades",
      "Common area modernization",
      "Building system replacement",
      "Amenity additions",
    ],
  },
];

const constructionCapabilities = [
  {
    category: "Preconstruction",
    services: [
      "Feasibility studies and due diligence support",
      "Conceptual budgeting and value engineering",
      "Constructability review",
      "Entitlement support and schedule development",
      "Subcontractor prequalification",
    ],
  },
  {
    category: "Site Development",
    services: [
      "Mass grading and earthwork",
      "Utility infrastructure (water, sewer, electric, gas)",
      "Stormwater management systems",
      "Roadways and parking construction",
      "Landscaping and irrigation",
    ],
  },
  {
    category: "Vertical Construction",
    services: [
      "Concrete foundations and podiums",
      "Wood-frame and steel construction",
      "Exterior envelope systems",
      "Roofing systems (flat and pitched)",
      "Window and door installation",
    ],
  },
  {
    category: "Interior Finishes",
    services: [
      "Unit interior buildout",
      "Common area finishes",
      "Flooring, paint, and millwork",
      "Kitchen and bath installation",
      "Appliance procurement and installation",
    ],
  },
  {
    category: "MEP Systems",
    services: [
      "Individual unit HVAC systems",
      "Central plant systems",
      "Electrical distribution and metering",
      "Plumbing and fire suppression",
      "Fire alarm and life safety",
    ],
  },
  {
    category: "Amenities",
    services: [
      "Clubhouse and leasing center",
      "Fitness center buildout",
      "Pool and pool deck construction",
      "Dog parks and outdoor amenities",
      "Package lockers and business centers",
    ],
  },
];

const projectApproach = [
  {
    phase: "Preconstruction",
    description: "Early engagement to optimize design and budget",
    activities: [
      "Design team coordination",
      "Budget development and tracking",
      "Value engineering sessions",
      "Permit expediting",
      "Early procurement for long-lead items",
    ],
    duration: "2-4 months",
  },
  {
    phase: "Site Development",
    description: "Preparing the site for vertical construction",
    activities: [
      "Clearing and mass grading",
      "Utility installation",
      "Stormwater infrastructure",
      "Foundations and slab-on-grade",
      "Temporary facilities setup",
    ],
    duration: "3-6 months",
  },
  {
    phase: "Vertical Construction",
    description: "Building the structures",
    activities: [
      "Structural framing",
      "Exterior sheathing and weather barrier",
      "Roofing installation",
      "Window and door installation",
      "MEP rough-in",
    ],
    duration: "6-12 months",
  },
  {
    phase: "Interior Finishes",
    description: "Completing unit and common area interiors",
    activities: [
      "Drywall and paint",
      "Flooring installation",
      "Cabinet and countertop installation",
      "Fixture installation",
      "Appliance installation",
    ],
    duration: "4-8 months",
  },
  {
    phase: "Closeout & Turnover",
    description: "Completing the project and supporting lease-up",
    activities: [
      "Punch list completion",
      "Final inspections and CO",
      "Owner training",
      "Warranty documentation",
      "Phased turnover for early lease-up",
    ],
    duration: "1-3 months",
  },
];

const whyFCS = [
  {
    reason: "Tampa Bay Focus",
    description: "Deep knowledge of local subcontractor market, permitting processes, and site conditions",
    detail: "We've built relationships with the best subs and understand how to navigate Tampa Bay's unique requirements",
  },
  {
    reason: "Multi-Family Expertise",
    description: "Specialized experience in the unique requirements of residential construction",
    detail: "From fire separations to resident-occupied renovations, we understand multi-family's specific challenges",
  },
  {
    reason: "Schedule Performance",
    description: "Understanding that lease-up timing directly impacts project returns",
    detail: "We plan and staff for phased delivery that enables early lease-up revenue",
  },
  {
    reason: "Cost Management",
    description: "Preconstruction value engineering and construction cost control",
    detail: "We partner with owners to find savings without compromising quality or long-term value",
  },
  {
    reason: "Quality Standards",
    description: "Construction quality that supports premium rents and resident satisfaction",
    detail: "Our quality program catches issues early, reducing punch lists and warranty claims",
  },
  {
    reason: "Hurricane Experience",
    description: "Understanding Florida's unique building code and storm resilience requirements",
    detail: "We build for Florida's climate with proper wind resistance, water management, and durability",
  },
];

const faqs = [
  {
    question: "What size multi-family projects do you build?",
    answer: "We build multi-family projects ranging from 30-unit townhome communities to 300+ unit apartment complexes. Our sweet spot is 100-250 units—large enough to benefit from economies of scale, manageable enough for focused project management. We also take on renovation and repositioning projects of any size. For projects below 50 units or above 300 units, we're happy to discuss whether we're the right fit based on project specifics.",
  },
  {
    question: "Do you work with developers on preconstruction before construction contracts?",
    answer: "Yes, preconstruction services are a core offering. We typically engage during design development to provide: constructability input that improves design; real-time cost feedback as design evolves; value engineering to meet budget targets; schedule development that accounts for Florida-specific factors; and subcontractor market intelligence. Many of our projects start with preconstruction agreements that transition to construction contracts. This collaboration produces better outcomes than bid-only engagement.",
  },
  {
    question: "How do you handle phased delivery for early lease-up?",
    answer: "We understand that early lease-up revenue significantly impacts project returns. Our approach: design construction sequences to complete marketable phases (typically by building); prioritize model unit and leasing office completion; coordinate with property management on turnover schedules; maintain buffer between construction and occupancy for quality; and staff trades to meet multiple simultaneous delivery dates. We've delivered projects where first units leased 4-6 months before final building completion.",
  },
  {
    question: "What's your approach to occupied renovations?",
    answer: "Occupied multi-family renovation requires careful planning: detailed unit access scheduling that respects residents; noise and dust control measures; secure tool and material storage; extended work hours to minimize disruption; phased completion to maintain livability; and clear communication with property management and residents. We typically renovate 5-15 units simultaneously with 3-5 day per-unit interior turns. Common area work happens during off-peak hours when possible.",
  },
  {
    question: "How do you manage quality across hundreds of identical units?",
    answer: "Consistency is critical in multi-family. Our approach: detailed mock-up units reviewed by owner before production; standardized material packages with approved alternates only; trade contractor training on unit-specific requirements; progressive inspection program catching issues early; dedicated quality personnel on large projects; and digital documentation of common defects for trade correction. The goal is catching issues at unit 10, not unit 200.",
  },
  {
    question: "What warranty do you provide on multi-family construction?",
    answer: "We provide standard one-year warranty on workmanship, honoring manufacturer warranties on products and systems. For condominiums, we work with developers on extended warranty programs required for unit sales. Our warranty process: dedicated warranty coordinator; rapid response to legitimate claims; coordination with subcontractors and suppliers; documentation for recurring issues; and post-warranty walk support if desired. Our quality program aims to minimize warranty claims, but we stand behind our work.",
  },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Multi-Family Construction Services"
        serviceDescription="Expert multi-family construction services in Tampa Bay. Apartments, condominiums, townhomes, and mixed-use developments from ground-up to renovation."
        city="Tampa"
        minPrice="2000000"
      />
      <ArticleSchema
        headline="Multi-Family Construction Services Tampa Bay"
        description="Expert multi-family construction services including apartments, condos, townhomes, and mixed-use developments in Tampa Bay."
        datePublished="2024-01-15"
        dateModified="2025-01-15"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Multi-family construction in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Multi-Family Construction Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Building Tampa Bay's residential communities. From garden-style apartments to mixed-use developments, we deliver multi-family projects that lease up fast and perform long-term.
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
              Tampa Bay's population growth continues to drive unprecedented demand for multi-family housing. Whether you're developing market-rate apartments, workforce housing, condominiums, or mixed-use communities, successful delivery requires a construction partner who understands the unique requirements of residential development.
            </p>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists brings deep multi-family expertise to every project. We understand that your construction timeline directly impacts lease-up revenue. We know how to build for Florida's hurricanes while maintaining quality and cost efficiency. And we have the relationships with Tampa Bay's subcontractor community to deliver projects on schedule in a competitive labor market.
            </p>
            <p className="text-gray-600 mb-8">
              From preconstruction budgeting through warranty service, we're your partner in building communities that residents love and investors value.
            </p>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Multi-Family Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive construction services for all multi-family product types.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceTypes.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-2">{service.service}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Typical Scope:</span>
                    <span className="font-medium">{service.scope}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Construction:</span>
                    <span className="font-medium">{service.constructionType}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Timeline:</span>
                    <span className="font-medium text-brand-green">{service.timeline}</span>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Capabilities</h4>
                  <ul className="space-y-1">
                    {service.capabilities.map((cap, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-brand-green mt-0.5 flex-shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Capabilities */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Full-Service Capabilities
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From site development through amenity buildout, we handle all aspects of multi-family construction.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {constructionCapabilities.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Wrench className="w-8 h-8 text-brand-green" />
                  <h3 className="text-lg font-bold text-brand-green-dark">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Approach */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4 font-heading">
            Our Project Approach
          </h2>
          <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto">
            A structured approach designed specifically for multi-family development success.
          </p>
          <div className="space-y-6 max-w-4xl mx-auto">
            {projectApproach.map((phase, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-brand-green-dark font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{phase.phase}</h3>
                      <span className="text-brand-gold text-sm">{phase.duration}</span>
                    </div>
                    <p className="text-white/80 text-sm mb-3">{phase.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-white/80">
                          <CheckCircle className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                          {activity}
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

      {/* Why FCS */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Why Choose FCS for Multi-Family
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            What sets us apart in Tampa Bay's multi-family construction market.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyFCS.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-brand-green" />
                  <h3 className="text-lg font-bold text-brand-green-dark">{item.reason}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="bg-brand-green-light/30 rounded-lg p-3">
                  <p className="text-xs text-brand-green-dark">{item.detail}</p>
                </div>
              </div>
            ))}
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
            title="Related Multi-Family Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Let's Build Your Multi-Family Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you're in early planning or ready to break ground, Florida Construction Specialists is ready to help deliver your multi-family vision in Tampa Bay.
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
