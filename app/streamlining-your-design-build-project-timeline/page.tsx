import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Clock, Calendar, AlertTriangle, Zap, FileText, Users, ArrowRight, Building2 } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Streamlining Your Design-Build Project Timeline | Tampa FL",
  description: "Expert strategies for managing commercial construction timelines in Tampa Bay. Learn how design-build delivery compresses schedules, navigates permits, and delivers projects faster.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Streamlining Your Design Build Project Timeline", href: "/streamlining-your-design-build-project-timeline/" },
];

const internalLinks = [
  { href: "/services/commercial/design-build/", label: "Design-Build Services" },
  { href: "/construction-project-management-and-scheduling/", label: "Project Management Guide" },
  { href: "/avoid-commercial-construction-delays-in-florida/", label: "Avoiding Construction Delays" },
  { href: "/the-preconstruction-modern-approach-design/", label: "Modern Preconstruction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const timelinePhases = [
  {
    phase: "Preconstruction",
    traditional: "4-6 months",
    designBuild: "2-3 months",
    savings: "40-50%",
    activities: "Programming, design, permits, bidding, contract",
  },
  {
    phase: "Design",
    traditional: "4-6 months sequential",
    designBuild: "3-4 months overlapped",
    savings: "25-35%",
    activities: "Schematic, DD, construction documents",
  },
  {
    phase: "Permitting",
    traditional: "Sequential with design",
    designBuild: "Concurrent with design",
    savings: "2-4 months",
    activities: "Building, site, environmental permits",
  },
  {
    phase: "Construction",
    traditional: "After 100% documents",
    designBuild: "Starts at 60-70% design",
    savings: "2-4 months",
    activities: "Site work, shell, interior buildout",
  },
];

const permitTimelines = [
  { jurisdiction: "City of Tampa", buildingPermit: "4-8 weeks", siteDevelopment: "6-12 weeks", notes: "Pre-application meeting recommended" },
  { jurisdiction: "Hillsborough County", buildingPermit: "4-6 weeks", siteDevelopment: "8-16 weeks", notes: "EPC review adds time" },
  { jurisdiction: "City of St. Petersburg", buildingPermit: "3-6 weeks", siteDevelopment: "6-10 weeks", notes: "Design review for certain areas" },
  { jurisdiction: "Pinellas County", buildingPermit: "3-5 weeks", siteDevelopment: "6-12 weeks", notes: "Varies by municipality" },
  { jurisdiction: "Pasco County", buildingPermit: "3-5 weeks", siteDevelopment: "6-10 weeks", notes: "Growing area, capacity varies" },
];

const scheduleStrategies = [
  {
    icon: Zap,
    title: "Fast-Track Construction",
    description: "Begin site work and foundation while interior design is finalized. Overlapping phases compresses overall timeline significantly.",
  },
  {
    icon: FileText,
    title: "Early Permitting",
    description: "Submit foundation permit at schematic design completion. Building permit follows incrementally as documents complete.",
  },
  {
    icon: Users,
    title: "Early Procurement",
    description: "Identify and order long-lead items (steel, switchgear, elevators, custom equipment) months before construction begins.",
  },
  {
    icon: Calendar,
    title: "Proactive Scheduling",
    description: "Build schedule with float in critical paths. Identify and resolve conflicts before they impact the job site.",
  },
];

const commonDelays = [
  { cause: "Permit delays", impact: "2-8 weeks", prevention: "Pre-application meetings, complete submissions, response tracking" },
  { cause: "Design changes", impact: "2-6 weeks", prevention: "Thorough programming, owner decision protocols, change management" },
  { cause: "Material lead times", impact: "4-16 weeks", prevention: "Early procurement, alternate sourcing, schedule buffers" },
  { cause: "Weather/hurricanes", impact: "1-4 weeks", prevention: "Schedule float, seasonal planning, hurricane prep protocols" },
  { cause: "Subcontractor issues", impact: "2-8 weeks", prevention: "Prequalification, backup subs, realistic commitments" },
  { cause: "Inspections/approvals", impact: "1-3 weeks", prevention: "Quality control, relationship management, advance scheduling" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Streamlining Your Design-Build Project Timeline"
        description="Expert strategies for managing commercial construction timelines in Tampa Bay."
        datePublished="2024-01-15"
        dateModified="2024-01-15"
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Design-build project timeline management in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Streamlining Your Design-Build Project Timeline
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Expert strategies for delivering commercial projects faster without sacrificing quality. Learn how design-build and proactive management compress schedules in Tampa Bay.
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
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Project Timeline Matters in Commercial Construction
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-6">
                In commercial construction, time truly is money. Every month of construction represents carrying costs on your loan, delayed revenue from operations, and opportunity cost of capital tied up in development. A project that finishes 3 months early doesn't just save construction interest—it generates 3 additional months of income.
              </p>
              <p className="text-gray-600 mb-6">
                Traditional design-bid-build delivery follows a linear path: complete design, bid the project, negotiate contracts, then build. Each phase must finish before the next begins. This sequential approach is inherently slow—and the delays compound. Design takes longer than expected, permits get comments requiring revisions, bidding reveals budget gaps, and construction doesn't start for 9-12 months after project inception.
              </p>
              <p className="text-gray-600 mb-6">
                Design-build fundamentally changes this dynamic. By integrating design and construction under one team, phases can overlap. Site work begins while interiors are being designed. Permits are submitted incrementally rather than all at once. Early procurement locks in materials while drawings are completed. The result: projects complete 20-30% faster without cutting corners on quality.
              </p>
              <p className="text-gray-600 mb-8">
                At Florida Construction Specialists, schedule compression is built into our project approach. Our preconstruction team develops detailed schedules that identify critical path activities and build in strategies to accelerate delivery. For Tampa Bay's competitive commercial market, this speed-to-market advantage is often decisive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Comparison */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              Design-Build vs. Traditional Timeline Comparison
            </h2>
            <p className="text-center text-gray-600 mb-8">
              How design-build delivery compresses each project phase for a typical 25,000 SF commercial building.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Phase</th>
                    <th className="px-6 py-4 text-left font-heading">Traditional</th>
                    <th className="px-6 py-4 text-left font-heading">Design-Build</th>
                    <th className="px-6 py-4 text-left font-heading">Time Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {timelinePhases.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.phase}</td>
                      <td className="px-6 py-4 text-gray-600">{row.traditional}</td>
                      <td className="px-6 py-4 text-brand-green font-semibold">{row.designBuild}</td>
                      <td className="px-6 py-4 text-brand-gold font-bold">{row.savings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-brand-green/10 rounded-lg">
              <p className="text-center text-brand-green-dark font-semibold">
                Total typical savings: 4-8 months on an 18-month traditional project
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Strategies */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Key Strategies for Timeline Optimization
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            These proven techniques help compress schedules without compromising quality or increasing risk.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {scheduleStrategies.map((strategy, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <strategy.icon className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">{strategy.title}</h3>
                <p className="text-gray-600">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tampa Permits */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Navigating Permits in Tampa Bay
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Permit timelines vary significantly across Tampa Bay jurisdictions. Understanding these differences—and building relationships with permitting officials—is essential for schedule management.
              </p>
            </div>

            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Jurisdiction</th>
                    <th className="px-6 py-4 text-left font-heading">Building Permit</th>
                    <th className="px-6 py-4 text-left font-heading">Site Development</th>
                    <th className="px-6 py-4 text-left font-heading">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {permitTimelines.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.jurisdiction}</td>
                      <td className="px-6 py-4 text-gray-600">{row.buildingPermit}</td>
                      <td className="px-6 py-4 text-gray-600">{row.siteDevelopment}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Permit Acceleration Strategies</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Pre-application meetings to identify issues early</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Complete submissions that avoid revision cycles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Phased permits (foundation, shell, interior)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Expedited review programs where available</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Special Permit Considerations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">EPC permits add 4-8 weeks in Hillsborough</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Variances/special exceptions: 2-4 months minimum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Historic districts require additional review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">SWFWMD permits for larger developments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Delays */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              Common Delays and Prevention Strategies
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Understanding typical delay causes helps build schedules that anticipate and mitigate risks.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Delay Cause</th>
                    <th className="px-6 py-4 text-left font-heading">Typical Impact</th>
                    <th className="px-6 py-4 text-left font-heading">Prevention Strategy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {commonDelays.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.cause}</td>
                      <td className="px-6 py-4 text-red-600">{row.impact}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{row.prevention}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Florida-Specific Considerations */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Managing Florida-Specific Timeline Factors
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-8 h-8 text-brand-gold" />
                  <h3 className="text-xl font-bold text-brand-green-dark font-heading">Hurricane Season</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  June through November brings hurricane risk that can halt construction. Smart scheduling accounts for this reality.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Schedule weather-sensitive work outside peak season</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Build schedule float into summer/fall activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Have site preparation protocols for storm approach</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-8 h-8 text-brand-gold" />
                  <h3 className="text-xl font-bold text-brand-green-dark font-heading">Market Conditions</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Tampa Bay's construction boom affects subcontractor availability and material lead times.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Book key subcontractors early in preconstruction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Track material lead times continuously</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Maintain backup supplier relationships</span>
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
                  How much faster is design-build than traditional delivery?
                </h3>
                <p className="text-gray-600">
                  Design-build typically completes 20-33% faster than traditional design-bid-build. For a project that would take 18 months traditionally, design-build might complete in 12-14 months. The savings come from overlapping design and construction phases, single-source responsibility, and reduced conflict resolution time.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  What are "long-lead items" and how do they affect schedule?
                </h3>
                <p className="text-gray-600">
                  Long-lead items are materials or equipment that require extended fabrication or delivery times—typically 8-20+ weeks. Common examples: structural steel, switchgear, elevators, generators, custom glazing, and specialty HVAC equipment. Identifying and ordering these during design, rather than after construction starts, can save months.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  Can you start construction before design is 100% complete?
                </h3>
                <p className="text-gray-600">
                  Yes, with proper planning. Site work and foundation can typically begin when design reaches 50-60% completion. Shell construction can proceed while interior design is finalized. This "fast-track" approach requires careful coordination but can compress schedules by 2-4 months. Design-build is ideally suited for this approach.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  How do you handle schedule changes during construction?
                </h3>
                <p className="text-gray-600">
                  Our project management includes continuous schedule monitoring with weekly updates. When delays occur or scope changes are requested, we immediately assess schedule impact and present recovery options. This proactive approach catches issues early when mitigation is still possible, rather than discovering delays after they've become critical.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  What schedule guarantees do you provide?
                </h3>
                <p className="text-gray-600">
                  Our contracts include substantial completion dates with liquidated damages for delays within our control. We also identify owner-caused delays (decision delays, change orders, etc.) and weather events that may extend the schedule. The GMP contract structure aligns our interests with yours—we have strong incentive to finish on time.
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
            Ready to Accelerate Your Project Timeline?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your schedule requirements and develop a realistic plan for efficient project delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Discuss Your Timeline
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
