import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Users, Target, FileText, DollarSign, Clock, Building2, Lightbulb, Shield } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Commercial Construction Consultancy Tampa | FCS",
  description: "Expert commercial construction consultants in Tampa offering project advisory, owner's representation, and construction management services. Get objective guidance for your project.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial Construction Consultancy in Tampa", href: "/commercial-construction-consultancy-in-tampa/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/tampa-commercial-construction-planning-services/", label: "Planning Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/hiring-a-commercial-contractor-in-tampa/", label: "Hiring Guide" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const consultancyServices = [
  {
    icon: Target,
    service: "Project Feasibility Analysis",
    description: "Before committing to a project, understand its viability. We analyze site conditions, budget requirements, timeline constraints, and market factors.",
    when: "Early concept stage, before design begins",
    deliverable: "Feasibility report with go/no-go recommendation",
  },
  {
    icon: DollarSign,
    service: "Independent Cost Estimation",
    description: "Get objective cost estimates from a contractor's perspective—not just design professionals' opinions. Reality-check your budget before it's too late.",
    when: "During design development, before finalizing scope",
    deliverable: "Detailed cost estimate with comparison to budget",
  },
  {
    icon: Users,
    service: "Owner's Representation",
    description: "When you lack construction expertise in-house, we act as your advocate throughout the project—from planning through construction completion.",
    when: "Throughout the entire project lifecycle",
    deliverable: "Ongoing representation and reporting",
  },
  {
    icon: FileText,
    service: "Bid & Contract Review",
    description: "Evaluate contractor proposals, compare bids objectively, and ensure contract terms protect your interests before you sign.",
    when: "During contractor selection and contracting",
    deliverable: "Bid analysis and contract recommendations",
  },
  {
    icon: Shield,
    service: "Risk Assessment",
    description: "Identify project risks before they become problems. We evaluate schedule, budget, design, and execution risks specific to your project.",
    when: "Early planning and periodically during execution",
    deliverable: "Risk register with mitigation strategies",
  },
  {
    icon: Building2,
    service: "Constructability Review",
    description: "Review designs for buildability issues before they cause problems in the field. Catch conflicts, impractical details, and sequencing challenges.",
    when: "During design development and documentation",
    deliverable: "Constructability report with recommendations",
  },
];

const whenToHire = [
  {
    scenario: "First-Time Development",
    description: "If you've never undertaken a commercial construction project, a consultant provides the expertise you lack, preventing costly mistakes.",
    value: "Avoid common first-timer errors that add 15-25% to project costs",
  },
  {
    scenario: "Large/Complex Projects",
    description: "Major projects have complexities that exceed most owners' in-house capabilities. Independent expertise protects significant investments.",
    value: "Third-party oversight for projects over $5M",
  },
  {
    scenario: "Distant Projects",
    description: "When building in Tampa but managing from elsewhere, local representation ensures your interests are protected on the ground.",
    value: "Local eyes and ears when you can't be present",
  },
  {
    scenario: "Design Verification",
    description: "Architects and engineers design; contractors build. Getting contractor input during design prevents expensive field changes.",
    value: "Constructability input that prevents change orders",
  },
  {
    scenario: "Budget Validation",
    description: "Before finalizing designs, verify your budget is realistic. Independent estimates prevent the 'sticker shock' of over-budget bids.",
    value: "Reality-check before it's too late to adjust",
  },
  {
    scenario: "Dispute Resolution",
    description: "When conflicts arise with contractors, independent expertise helps evaluate claims, negotiate fairly, and resolve issues.",
    value: "Objective perspective in contentious situations",
  },
];

const consultantVsContractor = [
  {
    aspect: "Primary Role",
    consultant: "Advises and represents owner's interests",
    contractor: "Executes construction work",
  },
  {
    aspect: "Compensation",
    consultant: "Fee-based (hourly or fixed)",
    contractor: "Project cost plus margin",
  },
  {
    aspect: "Financial Interest",
    consultant: "Paid regardless of project cost",
    contractor: "May benefit from change orders",
  },
  {
    aspect: "Services",
    consultant: "Planning, oversight, review",
    contractor: "Construction execution",
  },
  {
    aspect: "Risk",
    consultant: "Advisory risk only",
    contractor: "Construction performance risk",
  },
  {
    aspect: "Best Used",
    consultant: "When objectivity is critical",
    contractor: "When you need work performed",
  },
];

const faqs = [
  {
    question: "What is the difference between a construction consultant and a contractor?",
    answer: "A consultant advises and represents your interests; a contractor performs construction work. Consultants are typically paid fees regardless of project cost, so they have no financial incentive to increase scope. Contractors execute the work and are paid based on what's built. You might use a consultant to help select and oversee a contractor, or to provide specific expertise like cost estimating or constructability review.",
  },
  {
    question: "When should I hire a construction consultant?",
    answer: "Consider a consultant when: you lack construction expertise in-house, your project is complex or high-value, you're building remotely, you need an independent opinion on costs or design, you want objective bid evaluation, or you're in a dispute with a contractor. The earlier you engage a consultant, the more value they can provide—catching issues during planning costs far less than fixing them during construction.",
  },
  {
    question: "How much do construction consultants charge in Tampa?",
    answer: "Consulting fees vary by scope and complexity. Project advisory services might run $5,000-$25,000 for focused engagements. Full owner's representation typically costs 1-3% of construction value. Hourly rates for experienced construction consultants range from $150-$300. The ROI is typically 5-10x the consulting fee in savings and avoided problems.",
  },
  {
    question: "Can my contractor also be my consultant?",
    answer: "There's an inherent conflict of interest. Contractors have financial incentives that may not align with your interests—they benefit from scope increases, while consultants are paid regardless of project cost. For objective advice, use independent consultants. That said, many contractors offer preconstruction consulting that can provide valuable input, just understand the potential conflicts.",
  },
  {
    question: "What should I look for in a construction consultant?",
    answer: "Prioritize actual construction experience—preferably as a contractor, not just a design professional. Look for specific experience with your project type and size. Check references from similar engagements. Ensure they're truly independent (no financial ties to contractors who might bid your work). And verify they have appropriate professional liability insurance.",
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
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Commercial construction consultancy in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Commercial Construction Consultancy in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Expert construction advisory services from professionals who've built projects, not just designed them. Get objective guidance that protects your investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Expert Advice
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
              Commercial construction is complex, expensive, and full of potential pitfalls. Unless you build projects regularly, you're at an information disadvantage when dealing with architects, contractors, and the construction process itself. Construction consultants level that playing field.
            </p>
            <p className="text-gray-600 mb-6">
              The best construction consultants bring actual building experience—they've managed projects, negotiated with subcontractors, solved field problems, and understand construction economics from the inside. This real-world experience makes them effective advisors who can spot problems before they cost you money.
            </p>
            <p className="text-gray-600 mb-8">
              In Tampa's active construction market, having knowledgeable guidance can mean the difference between a successful project and an expensive lesson. Whether you need help with one specific aspect or comprehensive representation throughout your project, consultants provide expertise when and where you need it.
            </p>

            <div className="bg-brand-green-light/20 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-8 h-8 text-brand-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">The Value of Objectivity</h3>
                  <p className="text-gray-700">
                    Unlike contractors who profit from what gets built, consultants are paid for their judgment regardless of project cost. This independence means their advice serves your interests—whether that means proceeding, redesigning, or walking away from a project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Construction Consultancy Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Targeted expertise for specific needs, or comprehensive support throughout your project.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultancyServices.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">{item.service}</h3>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                <div className="space-y-2 text-sm border-t pt-4">
                  <div>
                    <span className="font-semibold text-gray-700">When: </span>
                    <span className="text-gray-600">{item.when}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Deliverable: </span>
                    <span className="text-gray-600">{item.deliverable}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Hire */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              When Should You Hire a Construction Consultant?
            </h2>
            <p className="text-gray-600 mb-8">
              Not every project needs consulting services, but these scenarios typically benefit from independent expertise.
            </p>
            <div className="space-y-4">
              {whenToHire.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2 font-heading">{item.scenario}</h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <div className="bg-brand-green-light/20 rounded-lg p-3">
                    <p className="text-sm text-brand-green-dark"><strong>Value:</strong> {item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Consultant vs. Contractor: Understanding the Difference
            </h2>
            <p className="text-gray-600 mb-8">
              Both provide valuable services, but their roles and incentives differ significantly.
            </p>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Aspect</th>
                    <th className="px-6 py-4 text-left font-heading">Consultant</th>
                    <th className="px-6 py-4 text-left font-heading">Contractor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {consultantVsContractor.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{item.aspect}</td>
                      <td className="px-6 py-4 text-gray-600">{item.consultant}</td>
                      <td className="px-6 py-4 text-gray-600">{item.contractor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Owner's Rep Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Owner's Representation: Comprehensive Project Support
            </h2>
            <p className="text-gray-600 mb-6">
              Owner's representation is the most comprehensive form of construction consulting. An owner's representative acts as your advocate throughout the entire project—from initial planning through final completion and close-out.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-4 font-heading">What an Owner's Rep Does</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Coordinates the project team (architect, contractor, consultants)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Reviews and processes pay applications</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Monitors schedule and budget status</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Evaluates change order requests</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Attends meetings and conducts site visits</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-4 font-heading">Who Benefits Most</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Organizations without construction expertise</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Investors building in Tampa from elsewhere</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Busy executives who can't dedicate time</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>First-time developers</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Complex projects requiring dedicated attention</span>
                  </li>
                </ul>
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

      {/* Our Approach */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Consulting Approach
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists offers consulting services backed by decades of actual construction experience in Tampa Bay. We've built the projects, managed the subcontractors, and solved the problems—so our advice comes from real-world knowledge, not textbooks.
            </p>
            <p className="text-gray-600 mb-8">
              Whether you need a focused engagement on a specific issue or comprehensive support throughout your project, we tailor our services to your needs. And if your project evolves into construction, we can transition seamlessly from advisory to execution.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <Clock className="w-8 h-8 text-brand-gold mx-auto mb-2" />
                <p className="font-semibold text-gray-800">Quick Response</p>
                <p className="text-sm text-gray-600">Answers when you need them</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <Target className="w-8 h-8 text-brand-gold mx-auto mb-2" />
                <p className="font-semibold text-gray-800">Focused Expertise</p>
                <p className="text-sm text-gray-600">Relevant to your specific project</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <Shield className="w-8 h-8 text-brand-gold mx-auto mb-2" />
                <p className="font-semibold text-gray-800">Objective Advice</p>
                <p className="text-sm text-gray-600">Your interests first</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
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
            Get Expert Guidance for Your Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you need a second opinion on a budget, help evaluating contractors, or full project representation, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Consultation
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
