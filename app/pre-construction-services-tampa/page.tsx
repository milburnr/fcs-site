import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, FileText, DollarSign, Clock, Target, Lightbulb, Users, Building2, Scale, Shield, TrendingUp } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Pre-Construction Services Tampa | Florida Construction Specialists",
  description: "Comprehensive pre-construction services in Tampa Bay. Expert estimating, value engineering, scheduling, and constructability review for commercial projects throughout Florida.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Pre-Construction Services Tampa", href: "/pre-construction-services-tampa/" },
];

const internalLinks = [
  { href: "/the-preconstruction-modern-approach-design/", label: "Modern Preconstruction Approach" },
  { href: "/services/commercial/design-build/", label: "Design-Build Services" },
  { href: "/financial-planning-for-commercial-construction/", label: "Financial Planning Guide" },
  { href: "/benefits-of-value-engineering-for-construction/", label: "Value Engineering" },
  { href: "/contact/", label: "Start Pre-Construction" },
];

const preconServices = [
  {
    icon: DollarSign,
    title: "Conceptual Estimating",
    description: "Early-stage cost projections that validate budget feasibility before significant design investment.",
  },
  {
    icon: Scale,
    title: "Value Engineering",
    description: "Systematic analysis to optimize building value—delivering required functions at the lowest lifecycle cost.",
  },
  {
    icon: Clock,
    title: "Schedule Development",
    description: "Realistic project timelines accounting for Tampa Bay permit processes, material lead times, and market conditions.",
  },
  {
    icon: Building2,
    title: "Constructability Review",
    description: "Construction expertise applied during design to prevent costly errors and ensure buildability.",
  },
];

const serviceDetails = [
  {
    service: "Feasibility Analysis",
    description: "Site evaluation, zoning review, utility assessment, and preliminary budget development",
    timeline: "2-4 weeks",
    deliverable: "Go/no-go recommendation with supporting analysis",
  },
  {
    service: "Conceptual Estimating",
    description: "Order-of-magnitude cost projections based on building type, size, and quality level",
    timeline: "1-2 weeks",
    deliverable: "Budget estimate with accuracy range (±15-20%)",
  },
  {
    service: "Schematic Design Support",
    description: "Systems analysis, initial value engineering, long-lead item identification",
    timeline: "4-6 weeks",
    deliverable: "Updated estimate (±10-15%), VE recommendations",
  },
  {
    service: "Design Development Support",
    description: "Detailed constructability review, subcontractor input, GMP development",
    timeline: "6-8 weeks",
    deliverable: "GMP proposal, final VE analysis, construction schedule",
  },
  {
    service: "Permit Coordination",
    description: "Permit strategy development, submission coordination, expediting",
    timeline: "Ongoing",
    deliverable: "Issued permits, timeline tracking",
  },
  {
    service: "Buyout/Procurement",
    description: "Bid package development, subcontractor selection, contract execution",
    timeline: "4-6 weeks",
    deliverable: "Executed subcontracts, final project budget",
  },
];

const tampaSpecific = [
  {
    challenge: "Permit Timeline Variability",
    ourApproach: "Established relationships with City of Tampa, Hillsborough County, and regional jurisdictions. Pre-application meetings, complete submissions, and proactive issue resolution.",
  },
  {
    challenge: "Hurricane Zone Requirements",
    ourApproach: "Design reviews ensure Florida Building Code compliance from the start. We catch wind load and impact resistance issues during design—not during permit review.",
  },
  {
    challenge: "Soil Conditions",
    ourApproach: "Local geotechnical knowledge helps anticipate foundation requirements. We recommend appropriate investigation and factor findings into early estimates.",
  },
  {
    challenge: "Subcontractor Market",
    ourApproach: "Deep relationships with Tampa Bay's trade contractor base. We know who's available, capable, and committed to quality—and book them early.",
  },
];

const costBenefit = [
  { investment: "0.5-1.5%", benefit: "8-15%", description: "Preconstruction fee as % of project vs. typical savings achieved" },
  { investment: "2-4 weeks", benefit: "2-4 months", description: "Time for feasibility study vs. schedule savings from early decisions" },
  { investment: "Minor design cost", benefit: "$50-200K+", description: "VE during design vs. typical savings on $3-5M project" },
];

const processSteps = [
  { step: 1, title: "Discovery Meeting", description: "Understand your project goals, budget parameters, and timeline requirements" },
  { step: 2, title: "Site Assessment", description: "Evaluate site conditions, zoning, utilities, and access for constructability" },
  { step: 3, title: "Budget Development", description: "Create preliminary cost model aligned with your program and quality expectations" },
  { step: 4, title: "Schedule Planning", description: "Develop realistic timeline with permit, procurement, and construction phases" },
  { step: 5, title: "Design Collaboration", description: "Provide ongoing input during design to optimize value and buildability" },
  { step: 6, title: "GMP Proposal", description: "Deliver guaranteed maximum price with defined scope and schedule" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Pre-Construction Services Tampa"
        description="Comprehensive pre-construction services in Tampa Bay for commercial construction projects."
        datePublished="2024-01-15"
        dateModified="2024-01-15"
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Pre-construction services in Tampa Florida"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Pre-Construction Services Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Comprehensive pre-construction services that set your commercial project up for success. Expert estimating, value engineering, and planning from Tampa Bay's trusted design-build firm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Start Pre-Construction
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
              Building Success Starts Before Construction
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-6">
                Pre-construction is where successful projects are made. The decisions you make before breaking ground—about budget, scope, systems, and schedule—have more impact on project outcomes than anything that happens during construction. Proper pre-construction planning prevents the cost overruns, delays, and disputes that plague poorly planned projects.
              </p>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists provides comprehensive pre-construction services throughout Tampa Bay. Our experienced team brings construction expertise into your project from the earliest stages, ensuring that designs are buildable, budgets are realistic, and schedules are achievable. We've helped hundreds of commercial clients navigate the complexities of Tampa Bay construction.
              </p>
              <p className="text-gray-600 mb-6">
                Our pre-construction services are designed to de-risk your project. Before you commit significant capital, you'll have validated cost estimates, identified value engineering opportunities, understood permit requirements, and developed a realistic construction schedule. This information enables confident decision-making—whether to proceed, adjust scope, or reconsider the project entirely.
              </p>
              <p className="text-gray-600 mb-8">
                Whether you're developing an office building in downtown Tampa, a medical facility in South Tampa, a retail center in Brandon, or an industrial building near the port, our pre-construction services provide the foundation for project success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Core Pre-Construction Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Comprehensive services that transform project concepts into executable plans.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {preconServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              Pre-Construction Service Details
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Our pre-construction services follow a structured approach that builds certainty at each phase.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Service</th>
                    <th className="px-6 py-4 text-left font-heading">Description</th>
                    <th className="px-6 py-4 text-left font-heading">Timeline</th>
                    <th className="px-6 py-4 text-left font-heading">Deliverable</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {serviceDetails.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-brand-green-dark">{row.service}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{row.description}</td>
                      <td className="px-6 py-4 text-gray-600">{row.timeline}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{row.deliverable}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              The ROI of Pre-Construction Services
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {costBenefit.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Investment</div>
                      <div className="text-2xl font-bold text-gray-700">{item.investment}</div>
                    </div>
                    <TrendingUp className="w-8 h-8 text-brand-gold" />
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Benefit</div>
                      <div className="text-2xl font-bold text-brand-green">{item.benefit}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-brand-green/5 border border-brand-green/20 rounded-xl p-6">
              <p className="text-gray-700 text-center">
                <strong>Bottom line:</strong> Every dollar invested in pre-construction services typically saves $5-10 during construction through better planning, value engineering, and error prevention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tampa-Specific */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Pre-Construction Expertise for Tampa Bay
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Tampa Bay presents unique pre-construction challenges that require local expertise to navigate effectively. Our team's deep knowledge of the regional market translates directly into better outcomes.
              </p>
            </div>

            <div className="space-y-6">
              {tampaSpecific.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2 font-heading">{item.challenge}</h3>
                  <p className="text-gray-600">{item.ourApproach}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Our Pre-Construction Process
            </h2>
            
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 bg-white rounded-xl shadow-md p-4">
                  <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green-dark">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
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
                  When should pre-construction services begin?
                </h3>
                <p className="text-gray-600">
                  Ideally, engage us before you finalize site selection. We can evaluate sites for constructability, hidden costs, and permit challenges. At minimum, engage during conceptual design to capture the full benefit of value engineering and cost validation. The earlier we're involved, the more value we can add.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  How are pre-construction services priced?
                </h3>
                <p className="text-gray-600">
                  We typically propose pre-construction as a fixed fee based on project scope and duration. This fee is often credited against construction costs if we proceed with construction. For design-build projects, pre-construction is integrated into our overall services. Contact us for a specific proposal based on your project.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  Do I have to use you for construction if I use pre-construction services?
                </h3>
                <p className="text-gray-600">
                  No. Our pre-construction services are valuable standalone, and you're free to bid the project competitively. However, the greatest benefits come from design-build delivery where our pre-construction work directly informs construction. The insights we gain during pre-construction enable better execution if we continue.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  What information do you need to start pre-construction?
                </h3>
                <p className="text-gray-600">
                  At minimum: project location, intended use, approximate size, and target budget or quality level. More information enables better estimates—site surveys, geotechnical data, architectural concepts, and specific program requirements all improve our analysis. We'll tell you what additional information would be helpful.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  How accurate are pre-construction estimates?
                </h3>
                <p className="text-gray-600">
                  Estimate accuracy improves as design develops. Conceptual estimates (before design) are typically ±15-20%. Schematic design estimates improve to ±10-15%. Design development estimates achieve ±5-10%. Our GMP proposals at 60-70% design provide contractual cost certainty within defined contingencies.
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
            title="Related Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Start Your Project Right?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your commercial project and show you how our pre-construction services set the foundation for success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Start Pre-Construction
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
