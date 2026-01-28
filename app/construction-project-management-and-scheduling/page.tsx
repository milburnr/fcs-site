import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Calendar, Clock, Users, FileText, AlertTriangle, Target, TrendingUp, Shield } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Construction Project Management and Scheduling Tips | Tampa FL",
  description: "Essential tips for effective commercial construction project management and scheduling in Florida. Learn proven strategies for keeping projects on track and on budget.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Construction Project Management and Scheduling", href: "/construction-project-management-and-scheduling/" },
];

const internalLinks = [
  { href: "/streamlining-your-design-build-project-timeline/", label: "Timeline Optimization" },
  { href: "/avoid-commercial-construction-delays-in-florida/", label: "Avoiding Delays" },
  { href: "/services/commercial/design-build/", label: "Design-Build Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const managementPrinciples = [
  {
    icon: Target,
    title: "Clear Objectives",
    description: "Every team member understands project goals, priorities, and what success looks like for this specific project.",
  },
  {
    icon: Users,
    title: "Defined Roles",
    description: "Clear accountability for every task. No gaps, no overlaps, no confusion about who's responsible.",
  },
  {
    icon: FileText,
    title: "Documented Processes",
    description: "Standard procedures for communication, changes, submittals, and decisions that everyone follows.",
  },
  {
    icon: TrendingUp,
    title: "Proactive Tracking",
    description: "Continuous monitoring of schedule, budget, and quality with early warning systems for issues.",
  },
];

const schedulingTechniques = [
  {
    technique: "Critical Path Method (CPM)",
    description: "Identifies the sequence of activities that determines minimum project duration",
    application: "Foundation for all commercial construction scheduling",
  },
  {
    technique: "Pull Planning",
    description: "Works backward from milestones, with trade input on task durations",
    application: "Improves schedule reliability through team buy-in",
  },
  {
    technique: "Look-Ahead Scheduling",
    description: "Rolling 3-6 week detailed planning within master schedule",
    application: "Ensures resources and materials are ready when needed",
  },
  {
    technique: "Milestone Tracking",
    description: "Monitors key dates that trigger downstream activities",
    application: "Early warning of schedule drift affecting project completion",
  },
];

const delayStrategies = [
  { delay: "Permit Delays", strategy: "Pre-application meetings, complete submissions, parallel permits where possible", prevention: "2-6 weeks saved" },
  { delay: "Material Lead Times", strategy: "Early procurement, long-lead item tracking, backup suppliers", prevention: "4-12 weeks saved" },
  { delay: "Subcontractor Conflicts", strategy: "Detailed coordination meetings, realistic commitments, backup trades", prevention: "1-4 weeks saved" },
  { delay: "Weather Impact", strategy: "Schedule float in weather-sensitive activities, seasonal planning", prevention: "1-3 weeks saved" },
  { delay: "Decision Delays", strategy: "Clear owner protocols, decision schedules, pre-selection of options", prevention: "2-8 weeks saved" },
  { delay: "Change Orders", strategy: "Thorough programming, design freeze protocols, contingency allocation", prevention: "Variable" },
];

const organizationTips = [
  {
    area: "Communication",
    tips: ["Weekly progress meetings with documented minutes", "Daily superintendent reports", "Real-time issue tracking system", "Clear escalation procedures"],
  },
  {
    area: "Documentation",
    tips: ["Organized project filing system", "Photo documentation of progress", "As-built tracking during construction", "Change order logging and tracking"],
  },
  {
    area: "Coordination",
    tips: ["Trade coordination meetings before complex work", "Submittal and RFI tracking systems", "MEP coordination reviews", "Inspection scheduling in advance"],
  },
  {
    area: "Quality Control",
    tips: ["Pre-work quality meetings", "In-progress inspections", "Punch list management system", "Third-party testing coordination"],
  },
];

const projectMetrics = [
  { metric: "Schedule Performance Index (SPI)", target: "≥ 1.0", description: "Earned value vs. planned value; <1.0 means behind schedule" },
  { metric: "Cost Performance Index (CPI)", target: "≥ 1.0", description: "Earned value vs. actual cost; <1.0 means over budget" },
  { metric: "RFI Response Time", target: "< 5 days", description: "Average time to respond to Requests for Information" },
  { metric: "Change Order %", target: "< 5%", description: "Change orders as percentage of contract value" },
  { metric: "Safety Incident Rate", target: "0", description: "OSHA recordable incidents on project" },
  { metric: "Quality Deficiencies", target: "< 1 per 1000 SF", description: "Punch list items at substantial completion" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Construction Project Management and Scheduling"
        description="Essential tips for effective commercial construction project management in Florida."
        datePublished="2024-01-15"
        dateModified="2024-01-15"
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Construction project management in Tampa Florida"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Construction Project Management and Scheduling
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Essential tips for keeping your commercial construction project on schedule. Proven strategies from Florida Construction Specialists for effective planning and execution.
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
              Why Project Management Determines Construction Success
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-6">
                Commercial construction is inherently complex. A typical project involves hundreds of decisions, dozens of subcontractors, thousands of material deliveries, and countless coordination challenges. The difference between projects that succeed and those that struggle almost always comes down to project management and scheduling discipline.
              </p>
              <p className="text-gray-600 mb-6">
                Effective project management isn't about fancy software or detailed Gantt charts—it's about clear communication, proactive problem-solving, and relentless attention to the activities that drive project completion. The best project managers anticipate issues before they become crises and maintain momentum even when problems arise.
              </p>
              <p className="text-gray-600 mb-6">
                At Florida Construction Specialists, we've developed project management systems through hundreds of successful Tampa Bay projects. Our approach combines proven methodologies with practical field experience. We know that the schedule is only as good as its execution, and execution depends on organization, communication, and accountability.
              </p>
              <p className="text-gray-600 mb-8">
                This guide shares the strategies and techniques we use to keep commercial projects on track in Florida's challenging construction environment—where hurricane seasons, permit complexities, and subcontractor availability add layers of difficulty to already-complex projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Management Principles */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Foundations of Effective Project Management
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            These principles underpin every successful commercial construction project.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {managementPrinciples.map((principle, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scheduling Techniques */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              Effective Scheduling Techniques
            </h2>
            <p className="text-center text-gray-600 mb-8">
              These scheduling methodologies help maintain control over complex construction projects.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {schedulingTechniques.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">{item.technique}</h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <p className="text-sm text-brand-green font-semibold">Application: {item.application}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tampa-Specific Planning */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Staying on Track: Planning and Scheduling for Tampa Bay
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Tampa Bay presents unique scheduling challenges that require local expertise to navigate effectively. Our project teams build these factors into every schedule.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <Calendar className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Seasonal Considerations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Hurricane season (June-November) requires weather contingencies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Summer rainy season affects concrete and exterior work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Peak construction season stretches subcontractor capacity</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <Shield className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Permit Timeline Planning</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Hillsborough County EPC adds 4-8 weeks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Site development permits can exceed building permits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Phased permits allow earlier construction start</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delay Strategies */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              Overcoming Delays: Proven Prevention Strategies
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Anticipating common delays and building prevention into your plan keeps projects on schedule.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Delay Type</th>
                    <th className="px-6 py-4 text-left font-heading">Prevention Strategy</th>
                    <th className="px-6 py-4 text-left font-heading">Potential Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {delayStrategies.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.delay}</td>
                      <td className="px-6 py-4 text-gray-600">{row.strategy}</td>
                      <td className="px-6 py-4 text-brand-green font-semibold">{row.prevention}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Tips */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Maximizing Organization: Key Tips for Commercial Construction
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {organizationTips.map((category, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">{category.area}</h3>
                  <ul className="space-y-3">
                    {category.tips.map((tip, idx) => (
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
        </div>
      </section>

      {/* Project Metrics */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              Key Project Performance Metrics
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Track these metrics to maintain visibility into project health.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Metric</th>
                    <th className="px-6 py-4 text-left font-heading">Target</th>
                    <th className="px-6 py-4 text-left font-heading">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {projectMetrics.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.metric}</td>
                      <td className="px-6 py-4 text-brand-green font-bold">{row.target}</td>
                      <td className="px-6 py-4 text-gray-600">{row.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                  How often should project schedules be updated?
                </h3>
                <p className="text-gray-600">
                  Master schedules should be updated at least monthly with formal schedule updates. Look-ahead schedules (3-6 week detailed plans) should be updated weekly. Daily superintendent reports track actual progress against the look-ahead. This tiered approach provides both long-term visibility and short-term execution control.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  What software do you use for project management?
                </h3>
                <p className="text-gray-600">
                  We use industry-standard tools including Primavera P6 for CPM scheduling, Procore for project management and documentation, and BIM 360 for model coordination. The specific tools matter less than consistent use and discipline in keeping information current. All stakeholders access real-time project data.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  How do you handle schedule delays when they occur?
                </h3>
                <p className="text-gray-600">
                  When delays occur, we immediately assess impact on the critical path, identify recovery options (overtime, resequencing, additional resources), and present alternatives to the owner with cost/schedule trade-offs. Early detection through proactive monitoring allows more recovery options at lower cost.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  What role does the owner play in schedule management?
                </h3>
                <p className="text-gray-600">
                  Owners significantly impact schedules through decision timeliness. We establish clear decision schedules at project start, identifying when each owner decision is needed to maintain schedule. Weekly owner meetings review upcoming decisions and address any pending items. Delayed decisions often delay projects more than construction issues.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  How does design-build improve schedule performance?
                </h3>
                <p className="text-gray-600">
                  Design-build compresses schedules 20-33% compared to traditional delivery by overlapping design and construction, eliminating bid phase, and reducing coordination conflicts. The single-team approach allows construction to begin while design is finalized and enables faster decision-making when issues arise.
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
            Ready for Professional Project Management?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our proven project management approach can keep your commercial project on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule a Discussion
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
