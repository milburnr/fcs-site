import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Target, Clock, DollarSign, Shield, Lightbulb, Users, FileText, Zap } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "The Preconstruction Modern Approach Design | Florida Construction Specialists",
  description: "Revolutionize your commercial construction with modern preconstruction services. Learn how early planning, value engineering, and design-build integration deliver better outcomes in Tampa Bay.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "The Preconstruction Modern Approach Design", href: "/the-preconstruction-modern-approach-design/" },
];

const internalLinks = [
  { href: "/pre-construction-services-tampa/", label: "Pre-Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Services" },
  { href: "/benefits-of-value-engineering-for-construction/", label: "Value Engineering Benefits" },
  { href: "/financial-planning-for-commercial-construction/", label: "Financial Planning Guide" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const modernApproachElements = [
  {
    icon: Target,
    title: "Early Engagement",
    description: "Bringing construction expertise into the project during design—not after. This prevents costly redesigns and change orders.",
  },
  {
    icon: Lightbulb,
    title: "Collaborative Problem-Solving",
    description: "Owners, designers, and builders working together to find optimal solutions rather than siloed decision-making.",
  },
  {
    icon: DollarSign,
    title: "Real-Time Cost Feedback",
    description: "Continuous cost validation as design evolves, ensuring budget alignment throughout the process.",
  },
  {
    icon: Zap,
    title: "Technology Integration",
    description: "BIM modeling, cloud collaboration, and data analytics enabling better decisions and faster execution.",
  },
];

const traditionalVsModern = [
  { aspect: "Contractor involvement", traditional: "After design complete", modern: "From project inception" },
  { aspect: "Cost estimation", traditional: "Single bid event", modern: "Continuous validation" },
  { aspect: "Design changes", traditional: "Expensive change orders", modern: "Integrated during design" },
  { aspect: "Risk allocation", traditional: "Adversarial contracts", modern: "Shared responsibility" },
  { aspect: "Communication", traditional: "Formal RFI process", modern: "Real-time collaboration" },
  { aspect: "Schedule certainty", traditional: "Often delayed", modern: "Predictable delivery" },
];

const preconPhases = [
  {
    phase: "Discovery",
    duration: "2-4 weeks",
    activities: "Program verification, site analysis, budget validation, schedule development",
    deliverables: "Validated project parameters, risk register, preliminary schedule",
  },
  {
    phase: "Conceptual Estimating",
    duration: "2-3 weeks",
    activities: "Systems analysis, cost modeling, value engineering opportunities",
    deliverables: "Conceptual budget, system recommendations, VE options list",
  },
  {
    phase: "Design Support",
    duration: "8-16 weeks",
    activities: "Constructability reviews, cost updates, procurement planning",
    deliverables: "Validated design, GMP proposal, subcontractor prequalification",
  },
  {
    phase: "Buyout Prep",
    duration: "4-6 weeks",
    activities: "Bid package development, subcontractor selection, contract prep",
    deliverables: "Executed subcontracts, final GMP, construction schedule",
  },
];

const costBenefits = [
  { metric: "Typical Cost Savings", value: "8-15%", description: "Compared to design-bid-build delivery" },
  { metric: "Schedule Compression", value: "20-30%", description: "Faster project completion" },
  { metric: "Change Order Reduction", value: "50-70%", description: "Fewer surprises during construction" },
  { metric: "RFI Reduction", value: "40-60%", description: "Issues resolved during design" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="The Preconstruction Modern Approach Design"
        description="Revolutionize your commercial construction with modern preconstruction methods."
        datePublished="2024-01-15"
        dateModified="2024-01-15"
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Modern preconstruction approach for commercial projects"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            The Preconstruction Modern Approach Design
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Revolutionizing Florida commercial construction through early collaboration, integrated technology, and proactive problem-solving that delivers projects faster and at lower cost.
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

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Modern Preconstruction Changes Everything
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-6">
                The traditional construction model—design everything first, then bid to the lowest contractor—is fundamentally flawed. It separates design decisions from construction realities, creates adversarial relationships, and consistently produces cost overruns, delays, and disputes. The modern approach turns this model on its head.
              </p>
              <p className="text-gray-600 mb-6">
                Modern preconstruction brings construction expertise into the project from day one. Before architects draw a single line, the team establishes realistic budgets based on actual market conditions. As design evolves, constructability reviews catch problems before they're built into documents. Cost estimates update continuously, not just at major milestones. The result: projects that deliver on their original promises.
              </p>
              <p className="text-gray-600 mb-6">
                At Florida Construction Specialists, we've championed this integrated approach across Tampa Bay for years. Our preconstruction team includes estimators, project managers, and superintendents who contribute construction intelligence throughout design. We're not passive observers—we're active partners helping shape projects that are buildable, affordable, and achievable on schedule.
              </p>
              <p className="text-gray-600 mb-8">
                This approach isn't just theory—it's proven practice. Our design-build projects consistently finish ahead of schedule, under budget, and with fewer change orders than industry averages. In Tampa Bay's competitive commercial market, this predictability is invaluable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Approach Elements */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Key Elements of Modern Preconstruction
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            These principles distinguish modern preconstruction from traditional approaches and drive better outcomes.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modernApproachElements.map((element, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <element.icon className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">{element.title}</h3>
                <p className="text-gray-600">{element.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional vs Modern */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Traditional vs. Modern Preconstruction
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Aspect</th>
                    <th className="px-6 py-4 text-left font-heading">Traditional Approach</th>
                    <th className="px-6 py-4 text-left font-heading">Modern Approach</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {traditionalVsModern.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.aspect}</td>
                      <td className="px-6 py-4 text-red-600">{row.traditional}</td>
                      <td className="px-6 py-4 text-brand-green font-semibold">{row.modern}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-12 font-heading">
            Measurable Benefits of Modern Preconstruction
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {costBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl font-bold text-brand-green mb-2">{benefit.value}</div>
                <h3 className="text-lg font-bold text-brand-green-dark mb-2 font-heading">{benefit.metric}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role of Modern Design */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Role of Modern Design in Florida Construction
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Modern design tools have revolutionized what's possible during preconstruction. Building Information Modeling (BIM) creates digital twins of projects that allow us to explore options, detect conflicts, and validate constructability before breaking ground.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">BIM-Enabled Preconstruction</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">3D clash detection between architectural, structural, and MEP systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Quantity takeoffs directly from model for accurate estimates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">4D scheduling linking model elements to construction sequence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Virtual reality walkthroughs for owner decision-making</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Data-Driven Decision Making</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Historical cost data from similar Tampa Bay projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Material price tracking and market trend analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Subcontractor capacity and availability monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Permit timeline tracking for accurate scheduling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preconstruction Phases */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              Our Modern Preconstruction Process
            </h2>
            <p className="text-center text-gray-600 mb-8">
              A structured approach that builds certainty at each phase while maintaining flexibility for optimization.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Phase</th>
                    <th className="px-6 py-4 text-left font-heading">Duration</th>
                    <th className="px-6 py-4 text-left font-heading">Key Activities</th>
                    <th className="px-6 py-4 text-left font-heading">Deliverables</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {preconPhases.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-brand-green-dark">{row.phase}</td>
                      <td className="px-6 py-4 text-gray-600">{row.duration}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{row.activities}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{row.deliverables}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Control Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Maximizing Efficiency and Cost Control
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Modern preconstruction's greatest value lies in cost control. By the time a traditional project goes to bid, 80% of costs are already locked in by design decisions. Modern preconstruction ensures those decisions are made with full cost awareness.
              </p>
            </div>

            <div className="bg-brand-green/5 rounded-xl p-8 border border-brand-green/20">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6 font-heading">Cost Control Strategies We Employ</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600"><strong>Target Value Design:</strong> Design to a budget rather than budget to a design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600"><strong>Systems Analysis:</strong> Comparing structural, mechanical, and envelope options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600"><strong>Material Optimization:</strong> Standardizing where possible without sacrificing quality</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600"><strong>Early Procurement:</strong> Locking in prices for long-lead items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600"><strong>Constructability Reviews:</strong> Eliminating construction inefficiencies in design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600"><strong>Contingency Management:</strong> Right-sizing reserves based on actual risk</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  Does modern preconstruction cost more than traditional approaches?
                </h3>
                <p className="text-gray-600">
                  Preconstruction services typically represent 0.5-1.5% of total project cost, but they save 8-15% through value engineering, reduced change orders, and competitive bidding based on complete documents. The ROI is substantial—every dollar spent on preconstruction typically saves $5-10 during construction.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  How early should we engage a contractor for preconstruction?
                </h3>
                <p className="text-gray-600">
                  Ideally, engage your design-build team during conceptual design—even before hiring an architect. This allows construction expertise to inform the earliest decisions. At minimum, engage during schematic design to capture the majority of value engineering opportunities.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  What if we already have an architect?
                </h3>
                <p className="text-gray-600">
                  We frequently collaborate with owner-selected architects. Our preconstruction team works alongside the design team, providing cost feedback and constructability input while respecting the architect's design authority. This hybrid approach captures most benefits of integrated delivery.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  How does a Guaranteed Maximum Price (GMP) work?
                </h3>
                <p className="text-gray-600">
                  Once design reaches approximately 60-70% completion, we can provide a GMP that caps your maximum cost. This includes all construction costs plus contingencies for defined risks. If the project comes in under the GMP, savings can be shared or returned depending on contract terms. If costs would exceed the GMP, we absorb the difference.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  What Tampa Bay-specific factors affect preconstruction?
                </h3>
                <p className="text-gray-600">
                  Tampa preconstruction must account for: hurricane season scheduling constraints, flood zone requirements affecting foundation costs, high water tables impacting dewatering, limited subcontractor availability during peak seasons, and permit timelines that vary significantly between jurisdictions (Tampa, Hillsborough County, Pinellas, etc.).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-white">
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
            Ready for Modern Preconstruction Excellence?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our integrated preconstruction approach can deliver your commercial project more efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule a Preconstruction Meeting
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
