import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Lightbulb, AlertTriangle, FileText, Users, Calendar, DollarSign, Building2, Shield } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Expert Tips for Planning Your Commercial Construction Project | Tampa FL",
  description: "Comprehensive guide to planning commercial construction in Florida. Expert advice on budgeting, permits, contractor selection, and project management from Tampa Bay's leading design-build firm.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Expert Tips for Planning Your Commercial Construction Project", href: "/expert-tips-for-planning-your-commercial-construction-project/" },
];

const internalLinks = [
  { href: "/services/commercial/design-build/", label: "Design-Build Services" },
  { href: "/financial-planning-for-commercial-construction/", label: "Financial Planning Guide" },
  { href: "/construction-project-management-and-scheduling/", label: "Project Management Tips" },
  { href: "/pre-construction-services-tampa/", label: "Pre-Construction Services" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const planningPhases = [
  {
    phase: "1. Define Your Needs",
    icon: FileText,
    tips: [
      "Document space requirements by function with growth projections",
      "Identify must-haves vs. nice-to-haves for budget flexibility",
      "Consider operational workflows that will occur in the space",
      "Define timeline drivers (lease expiration, business launch, etc.)",
    ],
  },
  {
    phase: "2. Establish Budget",
    icon: DollarSign,
    tips: [
      "Get preliminary estimates before committing to design",
      "Include soft costs (15-25% of hard costs typically)",
      "Build in contingency (10-15% minimum)",
      "Plan financing early—construction loans take time to arrange",
    ],
  },
  {
    phase: "3. Select Your Team",
    icon: Users,
    tips: [
      "Consider design-build for faster, more efficient delivery",
      "Evaluate experience with your building type specifically",
      "Check references from recent projects—actually call them",
      "Ensure chemistry with the team—you'll work closely together",
    ],
  },
  {
    phase: "4. Navigate Permits",
    icon: Building2,
    tips: [
      "Research zoning early—it can kill projects before they start",
      "Allow 2-6 months for permit processing in Tampa Bay",
      "Consider pre-application meetings with permit officials",
      "Factor permit timelines into your overall schedule",
    ],
  },
];

const commonMistakes = [
  {
    mistake: "Underestimating Budget",
    consequence: "Project stalls mid-construction or scope gets painfully cut",
    solution: "Get professional estimates before committing to design; include all costs",
  },
  {
    mistake: "Rushing Site Selection",
    consequence: "Hidden site issues (soil, zoning, utilities) blow budget and schedule",
    solution: "Due diligence before purchase: geotechnical, survey, zoning research",
  },
  {
    mistake: "Skipping Programming",
    consequence: "Spaces don't meet actual operational needs; expensive changes later",
    solution: "Invest time upfront defining requirements with key stakeholders",
  },
  {
    mistake: "Choosing on Price Alone",
    consequence: "Low bidder cuts corners or can't finish the project",
    solution: "Evaluate qualifications, experience, and references alongside price",
  },
  {
    mistake: "Delayed Decisions",
    consequence: "Each week of decision delay adds cost and schedule time",
    solution: "Establish decision protocols and empower decision-makers early",
  },
];

const permitCategories = [
  { permit: "Building Permit", timeline: "4-8 weeks", notes: "Core permit for construction" },
  { permit: "Site Development", timeline: "6-16 weeks", notes: "Required for new construction/significant site work" },
  { permit: "Environmental (EPC)", timeline: "4-8 weeks", notes: "Hillsborough County specific" },
  { permit: "Fire/Life Safety", timeline: "2-4 weeks", notes: "Often concurrent with building permit" },
  { permit: "Utility Connections", timeline: "2-6 weeks", notes: "TECO, water/sewer coordination" },
  { permit: "Sign Permit", timeline: "2-4 weeks", notes: "Separate from building permit" },
];

const planningTimeline = [
  { phase: "Site Selection & Due Diligence", duration: "1-3 months", percentage: "5%" },
  { phase: "Concept & Programming", duration: "1-2 months", percentage: "5%" },
  { phase: "Design", duration: "3-6 months", percentage: "15%" },
  { phase: "Permitting", duration: "2-4 months", percentage: "10%" },
  { phase: "Construction", duration: "6-18 months", percentage: "60%" },
  { phase: "Closeout & Occupancy", duration: "1-2 months", percentage: "5%" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Expert Tips for Planning Your Commercial Construction Project"
        description="Comprehensive guide to planning commercial construction in Florida."
        datePublished="2024-01-15"
        dateModified="2024-01-15"
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-large.webp"
            alt="Commercial construction planning in Tampa Florida"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Expert Tips for Planning Your Commercial Construction Project
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Proven strategies from Florida's leading commercial contractor for planning, budgeting, and executing successful construction projects throughout Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Expert Guidance
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
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Proper Planning Determines Project Success
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-6">
                The decisions you make before construction begins have more impact on project success than anything that happens on the job site. Proper planning establishes realistic budgets, identifies problems before they become expensive, and creates a roadmap that guides everyone toward successful completion.
              </p>
              <p className="text-gray-600 mb-6">
                At Florida Construction Specialists, we've seen hundreds of commercial construction projects across Tampa Bay. The ones that succeed share common characteristics: thorough upfront planning, realistic budgets with appropriate contingencies, clear decision-making processes, and teams that communicate effectively. The ones that struggle typically skipped steps in planning, hoping to "figure it out as we go."
              </p>
              <p className="text-gray-600 mb-6">
                Commercial construction involves significant capital investment, complex regulatory requirements, and coordination of dozens of specialized trades. Getting it right requires methodical planning informed by professional expertise. This guide shares the lessons we've learned from delivering successful projects across Tampa Bay.
              </p>
              <p className="text-gray-600 mb-8">
                Whether you're building your first commercial property or your fiftieth, these principles apply. Markets change, codes evolve, and technologies advance—but the fundamentals of good planning remain constant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Phases */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            The Four Pillars of Project Planning
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Master these four areas and you'll have the foundation for a successful commercial construction project.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {planningPhases.map((phase, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center">
                    <phase.icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green-dark font-heading">{phase.phase}</h3>
                </div>
                <ul className="space-y-3">
                  {phase.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Hiring FCS */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Benefits of Working with Florida Construction Specialists
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <Lightbulb className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Integrated Design-Build</h3>
                <p className="text-gray-600 mb-4">
                  Our design-build approach means one team handles both design and construction. This eliminates the finger-pointing between separate firms and ensures designs are buildable within budget.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Single point of responsibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Cost feedback during design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Faster project delivery</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <Shield className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Local Market Expertise</h3>
                <p className="text-gray-600 mb-4">
                  Decades of Tampa Bay experience means we know the local market intimately—from permit officials to subcontractor capabilities to material availability.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Established subcontractor relationships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Permit process knowledge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Accurate local cost data</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              Common Planning Mistakes (And How to Avoid Them)
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Learn from others' expensive lessons. These mistakes derail projects regularly.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Mistake</th>
                    <th className="px-6 py-4 text-left font-heading">Consequence</th>
                    <th className="px-6 py-4 text-left font-heading">Solution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {commonMistakes.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.mistake}</td>
                      <td className="px-6 py-4 text-red-600">{row.consequence}</td>
                      <td className="px-6 py-4 text-brand-green">{row.solution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Understanding the Construction Process: From Planning to Completion
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Commercial construction follows a predictable path, though timelines vary by project complexity. Understanding this process helps you plan resources and make decisions at the right time.
              </p>
            </div>

            <div className="space-y-4">
              {planningTimeline.map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-gray-50 rounded-xl p-4">
                  <div className="w-16 h-16 bg-brand-green rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{item.percentage}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-brand-green-dark">{item.phase}</h3>
                    <p className="text-gray-600 text-sm">Typical duration: {item.duration}</p>
                  </div>
                  <div className="w-full max-w-xs bg-gray-200 rounded-full h-2 hidden md:block">
                    <div 
                      className="bg-brand-green h-2 rounded-full" 
                      style={{ width: item.percentage }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Permits Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Navigating Florida Permits and Regulations
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Florida's building codes and permit processes protect public safety, but they add time to project schedules. Planning for permit timelines is essential for realistic scheduling.
              </p>
            </div>

            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Permit Type</th>
                    <th className="px-6 py-4 text-left font-heading">Typical Timeline</th>
                    <th className="px-6 py-4 text-left font-heading">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {permitCategories.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.permit}</td>
                      <td className="px-6 py-4 text-brand-green font-semibold">{row.timeline}</td>
                      <td className="px-6 py-4 text-gray-600">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-brand-green/5 border border-brand-green/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-brand-gold" />
                Key Regulatory Considerations for Florida
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Florida Building Code (more stringent than IBC)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">High-velocity hurricane zone requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">FEMA flood zone compliance</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Environmental permits (EPC, SWFWMD)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">ADA accessibility requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Fire marshal review and approval</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  How early should I start planning a commercial construction project?
                </h3>
                <p className="text-gray-600">
                  Begin planning 12-18 months before your target occupancy date for a typical commercial project. This allows time for site selection, design, permitting, and construction. Projects with complex permitting (rezoning, variances) or longer construction durations may need 24+ months.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  What's the difference between a budget and an estimate?
                </h3>
                <p className="text-gray-600">
                  A budget is your target cost, established before design begins. An estimate is the predicted cost based on design documents, prepared by the contractor. Early estimates inform budget feasibility; later estimates become the basis for contracts. Design-build aligns these throughout the process.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  Should I buy land before engaging a contractor?
                </h3>
                <p className="text-gray-600">
                  Engage a contractor for feasibility analysis before purchasing if possible. Site conditions (soil, utilities, zoning) significantly impact project cost and viability. A due diligence assessment costs a few thousand dollars but can prevent hundred-thousand-dollar mistakes.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  How do I know if my budget is realistic?
                </h3>
                <p className="text-gray-600">
                  Get professional estimates before committing to a budget. Share your budget target with potential contractors during selection—good firms will tell you honestly whether your goals are achievable. Warning sign: a contractor who says yes to every budget without detailed analysis.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  What decisions will I need to make during planning?
                </h3>
                <p className="text-gray-600">
                  Key decisions include: site selection, building size/program, quality level/finishes, delivery method (design-build vs. traditional), project team selection, financing approach, and schedule priorities. Experienced contractors guide you through these decisions with clear options and recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Related Planning Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Plan Your Commercial Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our experts help you develop a realistic plan for your commercial construction project in Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Expert Guidance
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
