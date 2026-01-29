import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, FileText, Calculator, Calendar, Users, Target, Clipboard, Building2, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa Commercial Construction Planning Services | Preconstruction Experts",
  description: "Professional construction planning services for Tampa commercial projects. Expert preconstruction, budgeting, scheduling, and project management from concept to completion.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa Commercial Construction Planning Services", href: "/tampa-commercial-construction-planning-services/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/efficient-commercial-construction-timelines-in-tampa/", label: "Construction Timelines" },
  { href: "/commercial-construction-consultancy-in-tampa/", label: "Construction Consultancy" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const planningServices = [
  {
    icon: Target,
    service: "Feasibility Studies",
    description: "Before you commit to a project, understand whether it's viable. We analyze site conditions, zoning, budget requirements, and timeline constraints.",
    deliverables: ["Preliminary cost estimates", "Schedule feasibility", "Site analysis", "Risk assessment"],
  },
  {
    icon: Calculator,
    service: "Budgeting & Cost Estimating",
    description: "Accurate budgets are the foundation of successful projects. Our detailed estimates help you make informed decisions before committing.",
    deliverables: ["Conceptual estimates", "Detailed line-item budgets", "Value engineering options", "Cost comparisons"],
  },
  {
    icon: Calendar,
    service: "Schedule Development",
    description: "Realistic schedules account for Tampa's permitting timelines, weather patterns, and market conditions.",
    deliverables: ["Master schedule", "Milestone dates", "Critical path analysis", "Permitting timeline"],
  },
  {
    icon: FileText,
    service: "Permitting Strategy",
    description: "Tampa Bay's permitting landscape varies by jurisdiction. We navigate requirements efficiently to avoid delays.",
    deliverables: ["Permit checklist", "Submission coordination", "Agency liaison", "Expediting when available"],
  },
  {
    icon: Users,
    service: "Team Assembly",
    description: "The right team determines project success. We help assemble architects, engineers, and specialty consultants.",
    deliverables: ["Consultant recommendations", "Team coordination", "Contract structure advice", "Communication protocols"],
  },
  {
    icon: Clipboard,
    service: "Project Documentation",
    description: "Clear documentation prevents disputes and keeps projects on track. We establish processes from day one.",
    deliverables: ["Contract templates", "Change order procedures", "Communication plans", "Reporting frameworks"],
  },
];

const planningPhases = [
  {
    phase: "Concept Phase",
    timing: "Weeks 1-4",
    activities: [
      "Initial project assessment",
      "Site evaluation",
      "Preliminary budget development",
      "High-level schedule creation",
      "Feasibility analysis",
    ],
    outputs: "Go/no-go recommendation with preliminary budget and timeline",
  },
  {
    phase: "Schematic Design",
    timing: "Weeks 4-10",
    activities: [
      "Design team coordination",
      "Preliminary drawings review",
      "Detailed cost estimate",
      "Value engineering workshop",
      "Subcontractor input (if needed)",
    ],
    outputs: "Refined budget with defined scope and schedule",
  },
  {
    phase: "Design Development",
    timing: "Weeks 10-18",
    activities: [
      "Detailed plan review",
      "Specification analysis",
      "Updated estimates",
      "Constructability review",
      "Long-lead item identification",
    ],
    outputs: "Guaranteed Maximum Price or detailed bid-ready documents",
  },
  {
    phase: "Pre-Bid/Procurement",
    timing: "Weeks 18-24",
    activities: [
      "Bid package preparation",
      "Subcontractor qualification",
      "Competitive bidding management",
      "Permit submission",
      "Material procurement planning",
    ],
    outputs: "Executed contracts, permits submitted, construction ready",
  },
];

const whyPlanningMatters = [
  {
    stat: "70%",
    description: "of projects exceed budget—usually due to poor planning",
  },
  {
    stat: "80%",
    description: "of schedule overruns trace back to preconstruction gaps",
  },
  {
    stat: "10:1",
    description: "return on investment for every dollar spent in planning",
  },
  {
    stat: "90%",
    description: "of change orders are preventable with better planning",
  },
];

const tampaConsiderations = [
  {
    title: "Permitting Complexity",
    description: "Tampa Bay includes multiple jurisdictions—Hillsborough County, City of Tampa, Pinellas County, etc.—each with different requirements, timelines, and processes. Effective planning accounts for these variations.",
  },
  {
    title: "Hurricane Season Impact",
    description: "June through November presents scheduling challenges. Smart planning front-loads weather-sensitive work and builds appropriate contingency into schedules.",
  },
  {
    title: "Labor Market Dynamics",
    description: "Tampa's construction boom means skilled trades are in high demand. Early subcontractor engagement during planning ensures availability when construction begins.",
  },
  {
    title: "Material Lead Times",
    description: "Supply chain disruptions have extended lead times for many materials. Planning identifies long-lead items early for timely procurement.",
  },
];

const faqs = [
  {
    question: "What is included in commercial construction planning services?",
    answer: "Comprehensive planning includes feasibility analysis, detailed cost estimating, schedule development, permitting strategy, team assembly, value engineering, constructability review, and procurement planning. The scope depends on your project's complexity and your existing resources—we tailor services to fill the gaps in your team.",
  },
  {
    question: "How much do planning services cost?",
    answer: "Planning services typically run 1-3% of total construction cost, varying by project complexity and scope of services needed. This investment typically saves 5-15% on construction costs by preventing problems before they occur. For design-build projects, preconstruction is often included in the overall fee structure.",
  },
  {
    question: "When should I engage a contractor for planning?",
    answer: "The earlier the better. Engaging a contractor during the concept or schematic design phase provides the most value—early input on cost, schedule, and constructability prevents expensive design changes later. Even if you're using a competitive bid approach, preconstruction consulting can help establish realistic budgets before design proceeds too far.",
  },
  {
    question: "Can I use planning services if I plan to competitively bid the project?",
    answer: "Yes. Preconstruction consulting doesn't require committing to a specific contractor for construction. We can help with feasibility, budgeting, and planning, then assist you in managing a competitive bid process. This approach ensures your project is well-planned regardless of who builds it.",
  },
  {
    question: "What's the difference between planning services and design-build?",
    answer: "Planning services are advisory—we help you plan and budget without necessarily committing to construction. Design-build is a full delivery method where one entity provides both design and construction. You might engage us for planning services first, then decide whether to proceed with design-build or traditional bid-build based on what makes sense for your project.",
  },
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
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-large.webp"
            alt="Commercial construction planning in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa Commercial Construction Planning Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Set your project up for success before construction begins. Our preconstruction planning services deliver realistic budgets, efficient schedules, and strategic guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Start Planning
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

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-6">
              The most important decisions in commercial construction happen before a shovel hits the ground. What you budget, how you schedule, who you hire, and how you structure the project determines whether you'll celebrate success or manage damage control.
            </p>
            <p className="text-gray-600 mb-6">
              Professional construction planning—also called preconstruction services—brings contractor expertise to these early decisions. Instead of designing in a vacuum and hoping the bids come back within budget, you get real-world cost data and constructability input throughout the planning process.
            </p>
            <p className="text-gray-600 mb-8">
              For Tampa commercial projects, planning must account for local factors: permitting timelines that vary dramatically between jurisdictions, hurricane season impacts on scheduling, and a labor market where popular subcontractors book months in advance. Our Tampa-based planning team brings this local expertise to every engagement.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {whyPlanningMatters.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-brand-gold mb-1">{item.stat}</div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Planning Services */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Our Planning Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive preconstruction services tailored to your project's needs and stage of development.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {planningServices.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">{item.service}</h3>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                <div className="border-t pt-4">
                  <p className="text-xs font-semibold text-gray-700 mb-2">DELIVERABLES:</p>
                  <div className="flex flex-wrap gap-2">
                    {item.deliverables.map((d, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Phases */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              The Planning Process
            </h2>
            <p className="text-gray-600 mb-8">
              Effective planning follows the design process, providing increasing detail as the project develops.
            </p>
            <div className="space-y-6">
              {planningPhases.map((phase, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-bold text-brand-green-dark font-heading">{phase.phase}</h3>
                    </div>
                    <span className="text-brand-gold font-semibold mt-2 md:mt-0">{phase.timing}</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-2">Key Activities:</p>
                      <ul className="space-y-1">
                        {phase.activities.map((activity, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                            <ArrowRight className="w-4 h-4 text-brand-gold flex-shrink-0" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-2">Phase Output:</p>
                      <p className="text-gray-600 text-sm">{phase.outputs}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tampa Considerations */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Tampa-Specific Planning Considerations
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {tampaConsiderations.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2 font-heading">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value of Planning */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              The ROI of Professional Planning
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                Every dollar spent on preconstruction planning typically saves $10 or more during construction. Why? Because changes are cheap on paper and expensive once construction begins. A design change during planning might cost nothing; the same change during construction could mean demolition, delays, and premium pricing.
              </p>
              <p className="mb-6">
                Professional planning also reduces risk. Accurate budgets mean you don't start a project you can't afford to finish. Realistic schedules mean you can plan your business operations around actual completion dates. Early subcontractor engagement means you have committed resources when you need them.
              </p>
              <p>
                Perhaps most importantly, good planning aligns everyone—owner, designer, contractor—around the same expectations. When everyone understands the budget, schedule, and priorities, projects run more smoothly and relationships remain positive through the inevitable challenges of construction.
              </p>
            </div>

            <div className="mt-8 bg-brand-green-light/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Planning Services Engagement Options</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Advisory Only</h4>
                  <p className="text-sm text-gray-600">Planning and budgeting services with no construction commitment. You retain flexibility to bid competitively.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Preconstruction to GMP</h4>
                  <p className="text-sm text-gray-600">Full preconstruction leading to a Guaranteed Maximum Price for construction if we reach agreement.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Design-Build</h4>
                  <p className="text-sm text-gray-600">Integrated planning, design, and construction under single-source responsibility.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3 font-heading">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Let's Plan Your Project Right
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start with a conversation about your project goals. Our team will recommend the planning approach that makes sense for your situation.
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
