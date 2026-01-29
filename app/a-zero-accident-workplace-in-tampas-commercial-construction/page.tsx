import Link from "next/link";
import Image from "next/image";
import { Phone, Shield, AlertTriangle, CheckCircle, Award, Users, HardHat, FileText, Target, Heart } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Zero Accident Workplace in Tampa Commercial Construction | Safety Commitment",
  description: "Discover how top Tampa commercial contractors achieve zero-accident workplaces. Learn about construction safety programs, OSHA compliance, and injury prevention strategies.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Zero Accident Workplace in Tampa's Commercial Construction", href: "/a-zero-accident-workplace-in-tampas-commercial-construction/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/hire-licensed-contractors-for-commercial-construction-project/", label: "Licensed Contractor Requirements" },
  { href: "/top-commercial-contractors-in-tampa/", label: "Top Tampa Contractors" },
  { href: "/hiring-a-commercial-contractor-in-tampa/", label: "Hiring Guide" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const safetyPillars = [
  {
    icon: Shield,
    title: "Leadership Commitment",
    description: "Safety starts at the top. When company leadership genuinely prioritizes safety over schedule and budget, it permeates the entire organization.",
    practices: ["Executive safety involvement", "Safety-first decision making", "Adequate safety budgets", "Visible leadership presence"],
  },
  {
    icon: Users,
    title: "Worker Engagement",
    description: "Workers who feel ownership of safety perform better. Empowering employees to identify hazards and stop unsafe work prevents accidents.",
    practices: ["Safety committees with worker reps", "Hazard reporting systems", "Stop-work authority", "Recognition programs"],
  },
  {
    icon: FileText,
    title: "Comprehensive Training",
    description: "Every worker must understand the hazards they face and how to control them. Training isn't a one-time event—it's continuous.",
    practices: ["OSHA 10/30 for all workers", "Task-specific training", "Toolbox talks", "New hire orientation"],
  },
  {
    icon: Target,
    title: "Hazard Prevention",
    description: "Identifying and controlling hazards before work begins prevents accidents. Planning for safety is as important as planning for construction.",
    practices: ["Job hazard analyses", "Pre-task planning", "Engineered controls", "Regular inspections"],
  },
  {
    icon: HardHat,
    title: "PPE & Equipment",
    description: "Personal protective equipment is the last line of defense. Proper equipment, properly maintained and properly used, prevents injuries.",
    practices: ["Quality PPE provision", "Equipment maintenance", "Fit testing and training", "Compliance enforcement"],
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Construction safety extends beyond injury prevention to worker health—addressing fatigue, heat stress, and substance abuse.",
    practices: ["Heat illness prevention", "Fatigue management", "Substance abuse programs", "Mental health resources"],
  },
];

const commonHazards = [
  {
    hazard: "Falls from Height",
    risk: "Leading cause of construction fatalities",
    controls: ["Fall protection systems", "Guardrails and covers", "Ladder safety programs", "Training on working at heights"],
  },
  {
    hazard: "Struck-By Incidents",
    risk: "Second leading cause of fatalities",
    controls: ["Exclusion zones", "High-visibility clothing", "Communication protocols", "Equipment guarding"],
  },
  {
    hazard: "Electrical Hazards",
    risk: "Electrocution risk from exposed wiring and utilities",
    controls: ["GFCI protection", "Lockout/tagout procedures", "Underground utility locates", "Qualified worker requirements"],
  },
  {
    hazard: "Caught-In/Between",
    risk: "Trenching collapses, machinery entanglement",
    controls: ["Trench protection systems", "Machine guarding", "Excavation competent person", "Lockout/tagout"],
  },
  {
    hazard: "Heat-Related Illness",
    risk: "Particularly acute in Tampa's summer climate",
    controls: ["Hydration programs", "Rest breaks", "Acclimatization protocols", "Shade structures"],
  },
  {
    hazard: "Silica Exposure",
    risk: "Lung disease from concrete cutting and drilling",
    controls: ["Wet cutting methods", "Vacuum dust collection", "Respiratory protection", "Exposure monitoring"],
  },
];

const safetyMetrics = [
  {
    metric: "Experience Modification Rate (EMR)",
    description: "Insurance rating based on claim history. Below 1.0 indicates better-than-average safety performance.",
    benchmark: "Top contractors: 0.65-0.85",
    why: "Directly reflects actual safety performance over three years",
  },
  {
    metric: "Total Recordable Incident Rate (TRIR)",
    description: "Number of OSHA-recordable injuries per 200,000 hours worked.",
    benchmark: "Industry average: 2.8; Top performers: <1.5",
    why: "Standardized comparison across companies of different sizes",
  },
  {
    metric: "Days Away, Restricted, Transfer (DART)",
    description: "Rate of injuries serious enough to affect work capability.",
    benchmark: "Industry average: 1.8; Top performers: <1.0",
    why: "Focuses on more serious injuries requiring time off or restriction",
  },
  {
    metric: "Lost Time Injury Rate (LTIR)",
    description: "Rate of injuries requiring time away from work.",
    benchmark: "Top performers: <0.5",
    why: "Indicates severity of injuries occurring",
  },
];

const faqs = [
  {
    question: "What is a 'zero accident' workplace and is it achievable?",
    answer: "Zero accident (or zero injury) is a safety philosophy that refuses to accept injuries as inevitable. Rather than setting 'acceptable' injury rates, it commits to preventing every injury. Is it achievable? Companies have operated millions of hours without recordable injuries. While no one can guarantee zero accidents, the commitment to zero changes behavior—every hazard is addressed because no injury is acceptable.",
  },
  {
    question: "How do I evaluate a contractor's safety record?",
    answer: "Request their Experience Modification Rate (EMR)—below 1.0 indicates better-than-average performance. Ask for their TRIR and DART rates compared to industry averages. Request their written safety program and training records. Ask about recent OSHA citations. Check if they have a dedicated safety professional. Strong safety performers are proud to share their records.",
  },
  {
    question: "Why does construction safety matter to project owners?",
    answer: "Beyond the moral imperative of protecting workers, safety directly affects your project: Injuries cause delays as work stops and investigations occur. OSHA citations can shut down job sites. Workers' comp claims increase insurance costs that contractors pass along. Unsafe sites have higher turnover and quality problems. And you could face liability for contractor injuries depending on circumstances.",
  },
  {
    question: "What safety certifications should contractors have?",
    answer: "At minimum, verify OSHA compliance with no outstanding citations. For employees, look for OSHA 10-hour (workers) and 30-hour (supervisors) training. Specialized work requires specific training: confined space, fall protection, scaffold erection, etc. Some contractors pursue OSHA VPP (Voluntary Protection Program) status—the highest OSHA recognition.",
  },
  {
    question: "How does Tampa's climate affect construction safety?",
    answer: "Tampa's heat and humidity create significant heat illness risk from May through October. Effective contractors implement heat illness prevention programs including hydration, rest breaks, and acclimatization schedules. Lightning is also a major hazard—Florida leads the nation in lightning strikes. Strong contractors have lightning safety protocols and weather monitoring systems.",
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
            alt="Safe commercial construction in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Achieving Zero Accidents in Tampa Commercial Construction
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Safety isn't just a requirement—it's a commitment. Learn how leading Tampa contractors build a culture where every worker goes home safely, every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Work With Safety Leaders
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
              Construction is inherently hazardous work. Workers operate heavy equipment, work at heights, handle dangerous materials, and labor in challenging conditions. But "inherently hazardous" doesn't mean injuries are inevitable—it means safety requires intentional, systematic effort.
            </p>
            <p className="text-gray-600 mb-6">
              The construction industry has made tremendous progress in safety. Fatality rates have dropped by more than half over the past 30 years. Leading contractors have demonstrated that zero-injury operations are possible—not as a lucky streak, but as a sustained achievement through rigorous safety management.
            </p>
            <p className="text-gray-600 mb-8">
              For project owners in Tampa, choosing a safety-focused contractor isn't just about protecting workers (though that's reason enough). It's about protecting your project from delays, your budget from cost overruns, and your organization from liability exposure.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-red-800 mb-2">The Human Cost</h3>
                  <p className="text-gray-700">
                    Despite progress, construction remains dangerous. In 2022, over 1,000 construction workers died on the job nationally. Every one of those deaths was preventable. A contractor's safety record reflects their values—and their competence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Six Pillars */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            The Six Pillars of Construction Safety
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Zero-accident workplaces share common characteristics. These pillars support world-class safety performance.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyPillars.map((pillar, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-brand-green/20 rounded-full flex items-center justify-center mb-4">
                  <pillar.icon className="w-6 h-6 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">{pillar.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{pillar.description}</p>
                <div className="border-t pt-4">
                  <p className="text-xs font-semibold text-gray-700 mb-2">KEY PRACTICES:</p>
                  <ul className="space-y-1">
                    {pillar.practices.map((practice, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                        <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                        {practice}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Hazards */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Common Construction Hazards and Controls
            </h2>
            <p className="text-gray-600 mb-8">
              Understanding hazards is the first step to controlling them. Here are the primary risks on Tampa commercial construction sites.
            </p>
            <div className="space-y-4">
              {commonHazards.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-brand-green-dark font-heading">{item.hazard}</h3>
                    <span className="text-sm text-red-600 font-semibold mt-1 md:mt-0">{item.risk}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.controls.map((control, i) => (
                      <span key={i} className="px-3 py-1 bg-brand-green/10 text-brand-green-dark rounded-full text-sm">
                        {control}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety Metrics */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              How to Evaluate Contractor Safety
            </h2>
            <p className="text-gray-600 mb-8">
              Don't just ask "Is safety important to you?"—every contractor says yes. Ask for these specific metrics.
            </p>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Metric</th>
                    <th className="px-6 py-4 text-left font-heading hidden md:table-cell">What It Measures</th>
                    <th className="px-6 py-4 text-left font-heading">Benchmark</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {safetyMetrics.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4">
                        <span className="font-semibold text-brand-green-dark">{item.metric}</span>
                        <p className="text-xs text-gray-500 mt-1 md:hidden">{item.description}</p>
                      </td>
                      <td className="px-6 py-4 text-gray-600 text-sm hidden md:table-cell">{item.description}</td>
                      <td className="px-6 py-4 text-brand-gold font-semibold text-sm">{item.benchmark}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Request these metrics directly from contractors. Reputable contractors track and share this data readily.
            </p>
          </div>
        </div>
      </section>

      {/* Tampa Climate */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Safety Challenges Specific to Tampa
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 font-heading">Heat Illness Prevention</h3>
                <p className="text-gray-600 mb-4">
                  Tampa's summer heat indexes regularly exceed 100°F. Heat-related illness is a serious—and entirely preventable—hazard. Effective contractors implement:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Mandatory hydration programs with water stations</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Scheduled rest breaks in shaded areas</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>New worker acclimatization schedules</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Training on recognizing heat illness symptoms</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 font-heading">Lightning Safety</h3>
                <p className="text-gray-600 mb-4">
                  Florida leads the nation in lightning strikes. Construction sites with workers on scaffolds, cranes, and open areas are particularly vulnerable. Strong programs include:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Weather monitoring and alert systems</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>30/30 rule enforcement (shelter when thunder is within 30 seconds of lightning)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Designated shelter locations on site</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Clear procedures for crane and height work</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 font-heading">Hurricane Preparedness</h3>
                <p className="text-gray-600 mb-4">
                  Construction sites have unique hurricane vulnerabilities. Unsecured materials become projectiles. Partially completed structures may not withstand high winds. Responsible contractors plan for:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Material securing and removal protocols</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Equipment protection and tie-down</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Communication plans with workers and owners</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Post-storm site inspection procedures</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 font-heading">Afternoon Storm Pattern</h3>
                <p className="text-gray-600 mb-4">
                  Tampa's summer afternoon storms arrive like clockwork. Beyond lightning, sudden heavy rain creates slip hazards and can damage materials. Preparation includes:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Weather monitoring throughout the day</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Quick-response material covering procedures</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Slip hazard management after rain</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Scheduling sensitive work in morning hours</span>
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

      {/* FCS Commitment */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Safety Commitment
            </h2>
            <p className="text-gray-600 mb-6">
              At Florida Construction Specialists, safety isn't a program—it's a core value. We believe that every worker deserves to go home safely every day, and we've built systems to make that happen consistently.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <span className="text-gray-700">Industry-leading Experience Modification Rate (EMR)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <span className="text-gray-700">Full-time safety professional on staff</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <span className="text-gray-700">OSHA 10/30 training for all personnel</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <span className="text-gray-700">Daily safety briefings on all job sites</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <span className="text-gray-700">Comprehensive written safety program</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <span className="text-gray-700">Rigorous subcontractor safety requirements</span>
              </div>
            </div>
            <p className="text-gray-600">
              We're proud of our safety record—not because it helps us win work, but because it means our people are going home to their families. That's what matters.
            </p>
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
            Choose a Contractor Who Values Safety
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Your project deserves a contractor whose commitment to safety matches your expectations. Let's discuss how we prioritize safety on every project.
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
