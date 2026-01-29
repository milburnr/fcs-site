import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle, AlertTriangle, Clock, CloudRain, FileText, Users, Truck } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "How to Avoid Commercial Construction Delays in Florida | Expert Guide",
  description: "Learn the top causes of commercial construction delays in Florida and proven strategies to keep your project on schedule. Expert tips from Tampa Bay's leading general contractor.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Avoid Commercial Construction Delays in Florida", href: "/avoid-commercial-construction-delays-in-florida/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/commercial-construction-stages-in-florida/", label: "Construction Stages Guide" },
  { href: "/construction-project-management-and-scheduling/", label: "Project Management" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const commonDelays = [
  {
    icon: FileText,
    title: "Permitting Delays",
    cause: "Incomplete applications, missing documents, or unfamiliarity with local requirements",
    impact: "2-8 weeks added to timeline",
    solution: "Work with a contractor who has established relationships with local building departments and submits complete, accurate permit packages the first time.",
  },
  {
    icon: CloudRain,
    title: "Weather Disruptions",
    cause: "Florida's rainy season (June-September), hurricanes, and tropical storms",
    impact: "10-30 days per major storm or extended rain event",
    solution: "Build weather contingencies into the schedule, sequence weather-sensitive work during dry months, and have backup plans for critical deadlines.",
  },
  {
    icon: Truck,
    title: "Material Shortages",
    cause: "Supply chain issues, long lead times for specialty items, or late ordering",
    impact: "1-12 weeks depending on material",
    solution: "Identify long-lead items early, place orders during pre-construction, and maintain relationships with multiple suppliers.",
  },
  {
    icon: Users,
    title: "Subcontractor Issues",
    cause: "Scheduling conflicts, labor shortages, or poor coordination between trades",
    impact: "Days to weeks of cascading delays",
    solution: "Use proven subcontractor partners, maintain detailed schedules with clear milestones, and hold regular coordination meetings.",
  },
  {
    icon: AlertTriangle,
    title: "Design Changes",
    cause: "Owner-requested changes, unforeseen conditions, or incomplete drawings",
    impact: "Varies widely—often the biggest delay source",
    solution: "Invest in thorough pre-construction planning, complete design before breaking ground, and establish clear change order procedures.",
  },
  {
    icon: Clock,
    title: "Inspection Failures",
    cause: "Work not meeting code, missing components, or inspector availability",
    impact: "3-14 days per failed inspection",
    solution: "Conduct internal quality inspections before calling for official inspections, and schedule inspections well in advance.",
  },
];

const strategies = [
  {
    title: "Choose Design-Build Delivery",
    description: "Design-build projects experience 33% fewer delays than traditional design-bid-build according to industry studies. Having one team responsible for both design and construction eliminates finger-pointing and accelerates decision-making.",
  },
  {
    title: "Front-Load the Planning",
    description: "Invest more time in pre-construction. Every dollar spent on planning saves $10-15 in construction. Complete drawings, early permitting, and thorough constructability reviews prevent costly surprises.",
  },
  {
    title: "Use CPM Scheduling",
    description: "Critical Path Method scheduling identifies which tasks directly impact your completion date. This allows resources to be focused where they matter most and provides early warning when delays threaten milestones.",
  },
  {
    title: "Establish Clear Communication",
    description: "Weekly progress meetings, daily reports, and real-time project management software keep all stakeholders informed. Problems identified early are problems solved cheaply.",
  },
  {
    title: "Build in Contingency",
    description: "Realistic schedules include float time for unexpected issues. In Florida, we recommend 10-15% schedule contingency for weather alone, plus additional buffer for permitting and inspections.",
  },
  {
    title: "Partner with Local Experts",
    description: "Contractors with deep local experience know which jurisdictions move faster, which inspectors are toughest, and which suppliers deliver on time. This institutional knowledge is invaluable.",
  },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="How to Avoid Commercial Construction Delays in Florida"
        description="Learn the top causes of commercial construction delays in Florida and proven strategies to keep your project on schedule."
        datePublished="2024-01-15"
        dateModified="2024-01-15"
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-large.webp"
            alt="Commercial construction project in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            How to Avoid Commercial Construction Delays in Florida
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Construction delays cost money—often $1,000 to $10,000+ per day in carrying costs, lost revenue, and extended general conditions. Learn how to protect your timeline.
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

      {/* Intro */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-xl text-gray-600 mb-6">
              Commercial construction in Florida presents unique scheduling challenges. Between hurricane season, afternoon thunderstorms, complex permitting requirements, and a competitive labor market, there are countless opportunities for projects to fall behind schedule.
            </p>
            <p className="text-gray-600 mb-6">
              According to McKinsey research, large construction projects typically take 20% longer than scheduled and run 80% over budget. But it doesn't have to be that way. With proper planning, experienced management, and proactive problem-solving, commercial projects can—and do—finish on time.
            </p>
            <p className="text-gray-600 mb-8">
              At Florida Construction Specialists, we've delivered hundreds of commercial projects across Tampa Bay on schedule. Here's what we've learned about avoiding the most common causes of delay.
            </p>
          </div>
        </div>
      </section>

      {/* Common Causes */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            The 6 Most Common Causes of Construction Delays
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Understanding what causes delays is the first step to preventing them. Here are the issues we see most often on Florida commercial projects.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commonDelays.map((delay, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <delay.icon className="w-12 h-12 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">{delay.title}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Cause: </span>
                    <span className="text-gray-600">{delay.cause}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-red-600">Impact: </span>
                    <span className="text-gray-600">{delay.impact}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-brand-green">Solution: </span>
                    <span className="text-gray-600">{delay.solution}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Florida-Specific Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Florida-Specific Delay Factors
            </h2>
            <div className="prose prose-lg">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Hurricane Season Planning</h3>
              <p className="text-gray-600 mb-6">
                Florida's hurricane season runs June 1 through November 30, with peak activity in August and September. Smart scheduling means planning critical exterior work—roofing, windows, waterproofing—for the drier months when possible. When that's not feasible, having hurricane preparedness plans and rapid-response protocols minimizes downtime after storms.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Afternoon Thunderstorms</h3>
              <p className="text-gray-600 mb-6">
                Tampa Bay averages 80+ thunderstorm days per year, mostly in the afternoon during summer months. Experienced contractors schedule concrete pours, crane operations, and other weather-sensitive work for morning hours. This simple adjustment can save dozens of lost work days over a project's duration.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Multi-Jurisdictional Permitting</h3>
              <p className="text-gray-600 mb-6">
                The Tampa Bay area includes multiple cities, two counties, and various special districts—each with their own permitting requirements and timelines. A project in Tampa may need permits from the City of Tampa, Hillsborough County, SWFWMD, FDOT, and potentially others. Experienced local contractors know how to navigate this complexity and run parallel permit tracks to save time.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Labor Market Competition</h3>
              <p className="text-gray-600 mb-6">
                Florida's construction boom means skilled tradespeople are in high demand. Subcontractor availability can be a major scheduling constraint. Contractors with long-term relationships with quality subs can secure commitments earlier and maintain priority status when schedules tighten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-12 font-heading">
            6 Strategies That Keep Projects on Schedule
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {strategies.map((strategy, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-green-dark rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-white">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">{strategy.title}</h3>
                  <p className="text-gray-600">{strategy.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost of Delays */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 font-heading">The Real Cost of Construction Delays</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/10 rounded-xl p-6">
                <p className="text-4xl font-bold text-brand-gold mb-2">$1,000-5,000</p>
                <p className="text-white/90">Daily general conditions cost for mid-size projects</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <p className="text-4xl font-bold text-brand-gold mb-2">$10,000+</p>
                <p className="text-white/90">Daily lost revenue for retail/restaurant projects</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <p className="text-4xl font-bold text-brand-gold mb-2">$50,000+</p>
                <p className="text-white/90">Potential lease penalties and financing costs per month</p>
              </div>
            </div>
            <p className="text-xl text-white/90">
              When you factor in extended loan interest, additional rent, delayed revenue, and the stress on your team, on-time delivery isn't just nice to have—it's essential.
            </p>
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
            Start Your Project on the Right Foot
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our pre-construction planning process identifies risks early and builds realistic schedules that account for Florida's unique challenges. Let's discuss your project timeline.
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
