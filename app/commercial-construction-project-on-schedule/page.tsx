import Link from "next/link";
import Image from "next/image";
import { Phone, Clock, Calendar, CheckCircle, AlertTriangle, Target, Users, FileText, ArrowRight, Zap } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Commercial Construction On Schedule | Tampa Tips",
  description: "Expert strategies for keeping your commercial construction project on schedule. Learn causes of delays, prevention tactics, and recovery methods from Tampa construction professionals.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial Construction Project On Schedule", href: "/commercial-construction-project-on-schedule/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/efficient-commercial-construction-timelines-in-tampa/", label: "Construction Timelines" },
  { href: "/tampa-commercial-construction-planning-services/", label: "Planning Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const relatedArticles = [
  {
    "title": "Mastering Commercial Construction Design in Florida",
    "href": "/mastering-commercial-construction-design-in-florida/",
    "description": "Learn the ins and outs of architectural design and commercial building design with our comprehensive guide for Florida projects."
  },
  {
    "title": "Benefits of Design-Build for Commercial Projects",
    "href": "/benefits-of-design-build-construction-for-commercial-project/",
    "description": "Discover how design-build delivery streamlines commercial construction with single-source accountability."
  },
  {
    "title": "Commercial Construction Budgeting Tips",
    "href": "/commercial-construction-budgeting-tips-for-florida-specialists/",
    "description": "Expert strategies for developing and managing budgets for commercial construction in Florida."
  },
  {
    "title": "Tips for Commercial Renovation in Florida",
    "href": "/tips-for-commercial-renovation-in-florida/",
    "description": "Key considerations for successful commercial renovation projects in the Sunshine State."
  }
];

const delayCauses = [
  {
    category: "Owner-Related Delays",
    percentage: "30-40%",
    causes: [
      "Delayed decisions on design choices",
      "Changes to scope after construction begins",
      "Late responses to RFIs (Requests for Information)",
      "Payment delays affecting contractor cash flow",
      "Unclear or conflicting direction to the team",
    ],
    prevention: "Establish clear decision-making processes, designate single decision-maker, maintain contingency budget for changes",
  },
  {
    category: "Design-Related Delays",
    percentage: "20-30%",
    causes: [
      "Incomplete or unclear drawings",
      "Design errors discovered during construction",
      "Coordination conflicts between trades",
      "Late design changes or additions",
      "Permit review comments requiring redesign",
    ],
    prevention: "Allow adequate design time, conduct thorough plan review, use BIM for coordination, involve contractor early",
  },
  {
    category: "Contractor-Related Delays",
    percentage: "15-25%",
    causes: [
      "Poor scheduling and coordination",
      "Subcontractor availability issues",
      "Quality problems requiring rework",
      "Insufficient manpower for the work",
      "Material ordering delays",
    ],
    prevention: "Vet contractor capabilities, require detailed schedules, establish communication protocols, monitor progress closely",
  },
  {
    category: "External Delays",
    percentage: "15-25%",
    causes: [
      "Weather (hurricanes, excessive rain)",
      "Permit delays",
      "Utility connection issues",
      "Material supply chain problems",
      "Labor market shortages",
    ],
    prevention: "Build schedule contingency, start permitting early, order long-lead items in advance, maintain multiple supplier relationships",
  },
];

const preventionStrategies = [
  {
    icon: FileText,
    strategy: "Thorough Preconstruction",
    description: "Invest in detailed planning before construction begins. Every dollar spent in preconstruction saves $10+ during construction.",
    actions: ["Complete design before starting", "Develop detailed schedules", "Order long-lead materials early", "Establish communication protocols"],
  },
  {
    icon: Users,
    strategy: "Clear Decision Authority",
    description: "Designate a single decision-maker with authority to approve decisions within defined parameters. Committee decision-making kills schedules.",
    actions: ["Name single point of contact", "Define approval thresholds", "Set response time expectations", "Empower the project manager"],
  },
  {
    icon: Calendar,
    strategy: "Realistic Scheduling",
    description: "Aggressive schedules that don't reflect reality cause more delays than conservative ones. Build in appropriate contingency.",
    actions: ["Include weather contingency", "Account for permitting time", "Plan for material lead times", "Build buffer before deadline"],
  },
  {
    icon: Target,
    strategy: "Proactive Monitoring",
    description: "Track progress continuously and address issues immediately. Small delays compound quickly if ignored.",
    actions: ["Weekly progress meetings", "Schedule tracking dashboards", "Three-week lookahead planning", "Early warning systems"],
  },
  {
    icon: Clock,
    strategy: "RFI & Submittal Management",
    description: "RFIs and submittals are schedule-critical. Delays in these processes directly delay construction work.",
    actions: ["Log all RFIs immediately", "Set response time requirements", "Review submittals promptly", "Escalate slow responses"],
  },
  {
    icon: Zap,
    strategy: "Change Order Discipline",
    description: "Changes during construction are expensive and cause delays. Minimize changes and process necessary ones quickly.",
    actions: ["Avoid scope changes if possible", "Price changes quickly", "Get decisions promptly", "Track schedule impact"],
  },
];

const recoveryStrategies = [
  {
    strategy: "Increase Manpower",
    description: "Adding workers can accelerate schedule—but only if the work can accommodate more people without creating congestion.",
    cost: "Premium labor costs",
    effectiveness: "Moderate—limited by work area and coordination capacity",
  },
  {
    strategy: "Overtime/Extended Hours",
    description: "Working longer hours or weekends can recover time, particularly for finish work with few dependencies.",
    cost: "Time-and-a-half or double-time labor rates",
    effectiveness: "Good for short-term recovery; fatigue reduces long-term effectiveness",
  },
  {
    strategy: "Resequencing Work",
    description: "Finding ways to do work out of sequence or in parallel can recover time without premium costs.",
    cost: "Minimal additional cost",
    effectiveness: "Varies—depends on ability to restructure work flow",
  },
  {
    strategy: "Multiple Shifts",
    description: "Running two or three shifts allows work to continue around the clock, dramatically increasing productivity.",
    cost: "Premium labor costs plus supervision",
    effectiveness: "High—effectively doubles or triples work hours",
  },
  {
    strategy: "Prefabrication",
    description: "Moving work off-site allows parallel production while site work continues, then quick installation.",
    cost: "May increase or decrease depending on scope",
    effectiveness: "Excellent for MEP and repetitive elements",
  },
  {
    strategy: "Scope Reduction",
    description: "Cutting scope is sometimes necessary to meet immovable deadlines. Better to open on time with less than late with more.",
    cost: "Loss of scope (can add back later)",
    effectiveness: "Guaranteed—but may not be acceptable",
  },
];

const ownerResponsibilities = [
  {
    responsibility: "Make Decisions Promptly",
    why: "Every week of owner indecision adds roughly a week to the schedule. Decisions don't get easier with time.",
    target: "24-48 hours for routine decisions; 1 week maximum for significant decisions",
  },
  {
    responsibility: "Avoid Changes",
    why: "Changes during construction are 3-5x more expensive than pre-construction changes and always impact schedule.",
    target: "Zero scope changes after construction starts (realistic goal: minimal changes)",
  },
  {
    responsibility: "Respond to RFIs Quickly",
    why: "RFIs often address issues blocking work progression. Slow responses mean workers wait.",
    target: "24-48 hours for simple RFIs; 1 week for complex ones",
  },
  {
    responsibility: "Attend Required Meetings",
    why: "Your absence at key meetings prevents decisions and demonstrates project isn't a priority.",
    target: "100% attendance at OAC meetings; delegated attendance only with decision authority",
  },
  {
    responsibility: "Pay on Time",
    why: "Payment delays affect contractor cash flow, which affects their ability to resource your project.",
    target: "Payment within contract terms (typically 30 days from approved invoice)",
  },
  {
    responsibility: "Communicate Changes in Priority",
    why: "If your deadline shifts or becomes less critical, tell your team. They may be sacrificing elsewhere to meet it.",
    target: "Immediate communication of any priority changes",
  },
];

const faqs = [
  {
    question: "What causes most commercial construction delays?",
    answer: "Surprisingly, owner-related issues cause 30-40% of construction delays—primarily slow decisions, scope changes, and late responses to contractor questions. Design issues (incomplete drawings, coordination errors) cause another 20-30%. Contractor and external factors (weather, permits, materials) account for the remainder. The good news: most delays are preventable with good planning and prompt decision-making.",
  },
  {
    question: "How much schedule contingency should I include?",
    answer: "For Tampa commercial projects, plan for 10-20% schedule contingency beyond the estimated construction duration. Interior-only projects need less (10-15%); projects with significant exterior work need more (15-20%) due to weather. Hurricane season (June-November) warrants additional contingency for exterior work. Always work backward from your must-have completion date to ensure adequate buffer.",
  },
  {
    question: "Can a delayed project be recovered?",
    answer: "Yes, but recovery gets harder and more expensive as delays accumulate. Options include overtime, additional crews, resequencing work, prefabrication, and multiple shifts. Early intervention is key—a two-week delay caught immediately might cost $20,000 to recover; the same delay addressed two months later might cost $200,000. Monitor schedule constantly and act on variances immediately.",
  },
  {
    question: "How do weather delays work in construction contracts?",
    answer: "Most contracts allow time extensions for 'unusual' weather but not 'normal' weather. In Tampa, afternoon summer storms are 'normal'—they shouldn't justify extensions. Named hurricanes typically qualify for time extensions. Your contract should define what constitutes excusable weather delays and whether the contractor gets time, money, or both.",
  },
  {
    question: "What's the cost of being one month late?",
    answer: "Costs vary significantly but typically include: extended general conditions ($50,000-$150,000/month for mid-size projects), delayed revenue (your lost business), extended lease payments on current space, storage costs for FF&E, and potentially liquidated damages if specified in contracts. For most commercial projects, each month of delay costs $100,000-$500,000+ in direct and indirect costs.",
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
            alt="Commercial construction project scheduling"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Keeping Your Commercial Construction Project On Schedule
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Time is money in commercial construction. Learn proven strategies for preventing delays, catching problems early, and recovering schedule when things go wrong.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Plan Your Project
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
              Construction schedules seem almost designed to fail. Industry data shows that 70% of construction projects finish late—some by weeks, others by months or even years. Yet some projects consistently finish on time or early. What's the difference?
            </p>
            <p className="text-gray-600 mb-6">
              The difference is rarely luck. On-time projects share common characteristics: thorough planning before construction begins, clear decision-making authority, realistic schedules with appropriate contingency, proactive monitoring, and immediate response to variances. These projects aren't immune to problems—they just handle problems better.
            </p>
            <p className="text-gray-600 mb-8">
              For Tampa commercial projects, schedule management requires additional attention to local factors: permitting timelines that vary by jurisdiction, hurricane season impacts on exterior work, and a competitive labor market where popular subcontractors book months ahead.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-red-800 mb-2">The Cost of Delay</h3>
                  <p className="text-gray-700">
                    Each month of delay typically costs $100,000-$500,000+ in extended costs, lost revenue, and indirect expenses. A project running 3 months late might cost $300,000-$1.5M more than planned—far exceeding any savings from aggressive scheduling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delay Causes */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Understanding What Causes Delays
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            To prevent delays, you must understand their sources. The data may surprise you.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {delayCauses.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-brand-green-dark font-heading">{item.category}</h3>
                  <span className="text-2xl font-bold text-brand-gold">{item.percentage}</span>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Common Causes:</p>
                  <ul className="space-y-1">
                    {item.causes.map((cause, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                        <ArrowRight className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        {cause}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-brand-green-light/20 rounded-lg p-3">
                  <p className="text-sm text-brand-green-dark"><strong>Prevention:</strong> {item.prevention}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention Strategies */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Proven Delay Prevention Strategies
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Proactive measures that keep projects on track from the start.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {preventionStrategies.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-brand-green/20 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">{item.strategy}</h3>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                <ul className="space-y-1">
                  {item.actions.map((action, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                      <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner Responsibilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Your Role in Schedule Success
            </h2>
            <p className="text-gray-600 mb-8">
              Owners significantly influence project schedules—for better or worse. Here's what you can do to help.
            </p>
            <div className="space-y-4">
              {ownerResponsibilities.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2 font-heading">{item.responsibility}</h3>
                  <p className="text-gray-600 mb-3">{item.why}</p>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-700"><strong>Target:</strong> {item.target}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Strategies */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Schedule Recovery: When Prevention Fails
            </h2>
            <p className="text-gray-600 mb-8">
              Despite best efforts, delays happen. Here are options for recovering lost time.
            </p>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Strategy</th>
                    <th className="px-6 py-4 text-left font-heading hidden md:table-cell">Description</th>
                    <th className="px-6 py-4 text-left font-heading">Effectiveness</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recoveryStrategies.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4">
                        <span className="font-semibold text-brand-green-dark">{item.strategy}</span>
                        <p className="text-xs text-gray-500 mt-1 md:hidden">{item.description}</p>
                      </td>
                      <td className="px-6 py-4 text-gray-600 text-sm hidden md:table-cell">{item.description}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="text-gray-600">{item.effectiveness}</span>
                        <br />
                        <span className="text-red-600 text-xs">Cost: {item.cost}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      

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
            Let's Plan a Project That Finishes On Time
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists brings the planning discipline and execution expertise to deliver your project on schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
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
