import Link from "next/link";
import Image from "next/image";
import { Phone, Clock, Calendar, CheckCircle, AlertTriangle, ArrowRight, Target, Zap, Users, FileText } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Efficient Commercial Construction Timelines in Tampa | Project Scheduling Guide",
  description: "Master commercial construction timelines in Tampa. Learn typical project durations, schedule optimization strategies, and how to keep your project on track.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Efficient Commercial Construction Timelines in Tampa", href: "/efficient-commercial-construction-timelines-in-tampa/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/commercial-construction-project-on-schedule/", label: "Keeping Projects On Schedule" },
  { href: "/tampa-commercial-construction-planning-services/", label: "Planning Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Services" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const projectTimelines = [
  {
    type: "Tenant Improvement (Basic)",
    size: "1,000-5,000 SF",
    design: "2-4 weeks",
    permitting: "2-4 weeks",
    construction: "4-8 weeks",
    total: "8-16 weeks",
    notes: "Assumes minimal structural work, standard finishes",
  },
  {
    type: "Tenant Improvement (Complex)",
    size: "5,000-20,000 SF",
    design: "4-8 weeks",
    permitting: "3-6 weeks",
    construction: "8-16 weeks",
    total: "15-30 weeks",
    notes: "Multiple trades, custom finishes, MEP modifications",
  },
  {
    type: "Retail Buildout",
    size: "2,000-10,000 SF",
    design: "4-6 weeks",
    permitting: "4-6 weeks",
    construction: "8-14 weeks",
    total: "16-26 weeks",
    notes: "Restaurant/food service adds 4-8 weeks for kitchen",
  },
  {
    type: "Medical Office",
    size: "3,000-15,000 SF",
    design: "6-10 weeks",
    permitting: "4-8 weeks",
    construction: "12-20 weeks",
    total: "22-38 weeks",
    notes: "Specialized MEP, infection control, equipment coordination",
  },
  {
    type: "Ground-Up Commercial",
    size: "10,000-50,000 SF",
    design: "12-20 weeks",
    permitting: "8-16 weeks",
    construction: "8-14 months",
    total: "14-22 months",
    notes: "Site work, foundation, vertical construction, finishes",
  },
  {
    type: "Industrial/Warehouse",
    size: "25,000-100,000 SF",
    design: "10-16 weeks",
    permitting: "8-12 weeks",
    construction: "6-12 months",
    total: "12-18 months",
    notes: "Pre-engineered buildings can accelerate significantly",
  },
];

const constructionPhases = [
  {
    phase: "Preconstruction",
    duration: "4-12 weeks",
    activities: ["Detailed estimating", "Value engineering", "Subcontractor procurement", "Permitting", "Schedule development", "Material procurement"],
    critical: "Thorough preconstruction prevents delays during construction",
  },
  {
    phase: "Site Work & Foundation",
    duration: "4-12 weeks",
    activities: ["Demolition (if needed)", "Excavation and grading", "Utilities installation", "Foundation construction", "Underground rough-in"],
    critical: "Weather-dependent; schedule early in dry season when possible",
  },
  {
    phase: "Structural/Shell",
    duration: "8-24 weeks",
    activities: ["Structural steel/concrete", "Exterior walls", "Roof installation", "Building envelope", "Windows and doors"],
    critical: "Get building dried-in before rainy season for interior work",
  },
  {
    phase: "MEP Rough-In",
    duration: "4-10 weeks",
    activities: ["Electrical rough-in", "Plumbing rough-in", "HVAC ductwork", "Fire suppression", "Low-voltage rough-in"],
    critical: "Coordinate all trades; conflicts cause delays",
  },
  {
    phase: "Finishes",
    duration: "6-14 weeks",
    activities: ["Drywall installation", "Ceiling systems", "Flooring", "Painting", "Millwork", "Fixtures"],
    critical: "Long-lead materials must be ordered early",
  },
  {
    phase: "Commissioning & Close-Out",
    duration: "2-6 weeks",
    activities: ["Systems testing", "Inspections", "Punch list completion", "Training", "Certificate of Occupancy"],
    critical: "Plan adequate time; rushing causes quality issues",
  },
];

const accelerationStrategies = [
  {
    icon: FileText,
    strategy: "Design-Build Delivery",
    description: "Overlap design and construction phases by using a single design-build contractor.",
    savings: "15-25% schedule reduction",
    tradeoff: "Less competitive pricing; requires trust in contractor",
  },
  {
    icon: Zap,
    strategy: "Fast-Track Construction",
    description: "Begin construction before design is 100% complete, overlapping phases.",
    savings: "10-20% schedule reduction",
    tradeoff: "Higher risk of changes; requires experienced team",
  },
  {
    icon: Target,
    strategy: "Pre-Engineered Systems",
    description: "Use pre-engineered metal buildings, modular MEP, or prefabricated components.",
    savings: "20-40% on affected scope",
    tradeoff: "Less design flexibility; upfront coordination required",
  },
  {
    icon: Users,
    strategy: "Extended Work Hours",
    description: "Implement multiple shifts, overtime, or weekend work during critical phases.",
    savings: "Variable; useful for recovery",
    tradeoff: "Premium labor costs; fatigue affects quality",
  },
  {
    icon: Calendar,
    strategy: "Early Procurement",
    description: "Order long-lead materials and equipment before final design completion.",
    savings: "Avoids 4-16 week delays",
    tradeoff: "Requires accurate early specifications; change risk",
  },
  {
    icon: CheckCircle,
    strategy: "Owner Decision Protocol",
    description: "Establish clear decision-making processes with response time commitments.",
    savings: "Prevents decision-related delays",
    tradeoff: "Requires owner engagement and availability",
  },
];

const tampaFactors = [
  {
    factor: "Hurricane Season (June-November)",
    impact: "Exterior work delays, material shipping disruptions, potential project shutdowns during storms",
    mitigation: "Schedule exterior work outside hurricane season when possible; have storm preparation plans",
  },
  {
    factor: "Summer Afternoon Storms",
    impact: "Daily rain interrupts outdoor work, especially concrete and roofing",
    mitigation: "Schedule weather-sensitive work in mornings; build buffer into outdoor activities",
  },
  {
    factor: "Permitting Variations",
    impact: "Hillsborough, Pinellas, and Pasco counties have different review times and requirements",
    mitigation: "Know your jurisdiction; engage early; consider expedited review where available",
  },
  {
    factor: "Labor Market",
    impact: "Skilled trade shortages can delay projects, especially during peak construction season",
    mitigation: "Book subcontractors early; maintain strong subcontractor relationships",
  },
  {
    factor: "Heat Impacts",
    impact: "Summer heat affects worker productivity and limits concrete pour windows",
    mitigation: "Schedule heavy labor in cooler months/hours; plan for productivity adjustments",
  },
];

const faqs = [
  {
    question: "How long does a typical commercial construction project take in Tampa?",
    answer: "Timelines vary significantly by project type. Simple tenant improvements (under 5,000 SF) typically take 8-16 weeks total. Complex office buildouts run 15-30 weeks. Medical facilities require 22-38 weeks. Ground-up commercial buildings take 14-22 months. These ranges include design, permitting, and construction. Tampa's permitting adds 4-8 weeks for most commercial projects.",
  },
  {
    question: "What causes most construction delays in Tampa?",
    answer: "The top delay causes are: 1) Permitting longer than expected, 2) Owner decision delays, 3) Design changes during construction, 4) Weather (especially during hurricane season), 5) Material lead times, and 6) Labor availability. Most delays are preventable with good planning, early decision-making, and proactive scheduling.",
  },
  {
    question: "How can I speed up my commercial construction project?",
    answer: "The biggest opportunities are: Use design-build to overlap phases, make decisions quickly (every week of owner indecision adds a week to the schedule), order long-lead materials early, avoid changes during construction, and choose a contractor with strong subcontractor relationships. Pre-engineered or modular construction can dramatically accelerate timelines for suitable projects.",
  },
  {
    question: "What is the permitting timeline in Tampa?",
    answer: "Permitting varies by jurisdiction and project complexity. Simple commercial permits (tenant improvements with no structural changes) may take 2-4 weeks. Complex projects requiring multiple reviews (structural, fire, health department) typically take 6-12 weeks. Ground-up construction with site plan approval can take 4-6 months through the full entitlement process.",
  },
  {
    question: "Should I build during hurricane season?",
    answer: "Interior work can proceed year-round with minimal hurricane impact. For exterior work, the main concerns are construction delays from storms and the risk of damage to partially completed structures. If building ground-up, try to get the building dried-in (roof and walls complete) before peak hurricane season (August-October). Always ensure your builder has a hurricane preparation plan.",
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
            alt="Efficient commercial construction in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Efficient Commercial Construction Timelines in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Understand realistic timelines, identify acceleration opportunities, and learn strategies to keep your Tampa commercial project on schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Discuss Your Timeline
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
              Time is money in commercial construction. Every week of delay costs you in lost revenue, extended lease payments, and carrying costs. Yet the pressure to rush can lead to quality problems, safety issues, and ultimately more delays. The key is understanding realistic timelines and systematically eliminating unnecessary delays.
            </p>
            <p className="text-gray-600 mb-6">
              Tampa's construction market presents specific timeline challenges: hurricane season affects exterior work, permitting timelines vary by jurisdiction, and the tight labor market can stretch schedules if subcontractors aren't booked early. But experienced contractors who know the local market can navigate these challenges and deliver projects efficiently.
            </p>
            <p className="text-gray-600 mb-8">
              This guide provides realistic timeline expectations for different project types, breaks down construction phases, and offers proven strategies for accelerating your project without compromising quality.
            </p>

            <div className="bg-brand-green-light/20 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-brand-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">The Schedule Reality</h3>
                  <p className="text-gray-700">
                    Studies show that 70% of construction projects exceed their original schedule. The difference between projects that finish on time and those that don't usually comes down to preconstruction planning, early decision-making, and proactive communication—not luck.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline by Project Type */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Typical Project Timelines in Tampa
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            These ranges reflect typical Tampa Bay projects. Actual timelines depend on complexity, decisions, and conditions.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-4 py-4 text-left font-heading">Project Type</th>
                  <th className="px-4 py-4 text-left font-heading">Design</th>
                  <th className="px-4 py-4 text-left font-heading">Permitting</th>
                  <th className="px-4 py-4 text-left font-heading">Construction</th>
                  <th className="px-4 py-4 text-left font-heading">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {projectTimelines.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-4">
                      <span className="font-semibold text-brand-green-dark">{item.type}</span>
                      <br />
                      <span className="text-sm text-gray-500">{item.size}</span>
                    </td>
                    <td className="px-4 py-4 text-gray-600">{item.design}</td>
                    <td className="px-4 py-4 text-gray-600">{item.permitting}</td>
                    <td className="px-4 py-4 text-gray-600">{item.construction}</td>
                    <td className="px-4 py-4 font-semibold text-brand-gold">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            *Timelines are estimates. Actual duration depends on scope, complexity, and project-specific factors.
          </p>
        </div>
      </section>

      {/* Construction Phases */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Understanding Construction Phases
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Each phase has specific activities and potential bottlenecks. Understanding them helps you support an efficient process.
          </p>
          <div className="max-w-4xl mx-auto space-y-4">
            {constructionPhases.map((phase, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-brand-green-dark font-heading flex items-center gap-2">
                    <span className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </span>
                    {phase.phase}
                  </h3>
                  <span className="text-brand-gold font-semibold mt-2 md:mt-0">{phase.duration}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {phase.activities.map((activity, i) => (
                    <span key={i} className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 border">
                      {activity}
                    </span>
                  ))}
                </div>
                <div className="bg-brand-green-light/20 rounded-lg p-3">
                  <p className="text-sm text-brand-green-dark"><strong>Critical Success Factor:</strong> {phase.critical}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acceleration Strategies */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Schedule Acceleration Strategies
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            When you need to finish faster, these proven strategies can compress your timeline—each with trade-offs to consider.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accelerationStrategies.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-lg font-bold text-brand-green-dark mb-2 font-heading">{item.strategy}</h3>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                <div className="space-y-2">
                  <div className="bg-green-50 rounded-lg p-2">
                    <p className="text-sm text-green-700"><strong>Potential:</strong> {item.savings}</p>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-2">
                    <p className="text-sm text-yellow-700"><strong>Trade-off:</strong> {item.tradeoff}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tampa-Specific Factors */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Tampa-Specific Schedule Factors
            </h2>
            <div className="space-y-4">
              {tampaFactors.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2 font-heading">{item.factor}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">Impact:</p>
                      <p className="text-gray-600 text-sm">{item.impact}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">Mitigation:</p>
                      <p className="text-gray-600 text-sm">{item.mitigation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Owner's Role */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Your Role in Schedule Success
            </h2>
            <p className="text-gray-600 mb-8">
              As the owner, your actions directly impact the construction schedule. Here's how to be a schedule enabler, not a schedule barrier.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-4 font-heading flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Do This
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Make decisions within agreed timeframes (24-48 hours for routine items)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Complete design decisions before construction begins</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Attend scheduled meetings and site walks</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Designate a single decision-maker for the project</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Communicate changes as early as possible</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-4 font-heading flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  Avoid This
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Delaying decisions "until you're sure"—indecision is a decision to delay</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Changing your mind after work is installed</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Adding scope during construction without understanding schedule impact</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Having multiple people give conflicting direction to the contractor</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Expecting unrealistic schedules then blaming the contractor</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3 font-heading">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
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
            Let's Build Your Realistic Timeline
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Every project is unique. Contact Florida Construction Specialists for a detailed schedule analysis tailored to your specific project requirements.
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
