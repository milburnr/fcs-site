import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  CheckCircle,
  AlertTriangle,
  Clock,
  ArrowRight,
  Phone,
  HelpCircle,
  Target,
  TrendingUp,
  GitBranch,
  BarChart3,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema"
import { Breadcrumb } from "@/components/Breadcrumb";
import { BackToHub } from "@/components/BackToHub";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "CPM Scheduling Tampa | Prevent Delays | FCS",
  description:
    "How Critical Path Method scheduling prevents costly delays on large commercial construction projects. Expert scheduling services for Tampa Bay industrial and commercial projects.",
  keywords:
    "CPM scheduling construction, critical path method Tampa, commercial construction schedule, prevent construction delays, construction project management Florida",
};

const cpmBenefits = [
  {
    benefit: "Early Delay Detection",
    description: "CPM identifies schedule risks weeks before they become critical, allowing proactive mitigation.",
    impact: "Typically prevents 60-70% of delays that would otherwise occur",
  },
  {
    benefit: "Resource Optimization",
    description: "Critical path analysis shows exactly where to focus manpower and equipment.",
    impact: "Reduces idle time and overtime costs by 15-25%",
  },
  {
    benefit: "Clear Accountability",
    description: "Logic ties between activities create clear responsibility chains for all parties.",
    impact: "Reduces disputes and finger-pointing during delays",
  },
  {
    benefit: "Change Impact Analysis",
    description: "Owner changes can be immediately assessed for schedule and cost impact.",
    impact: "Supports fair change order negotiations",
  },
  {
    benefit: "Cash Flow Projection",
    description: "Schedule-driven cost loading enables accurate monthly projections.",
    impact: "Improves owner and lender confidence",
  },
  {
    benefit: "Recovery Planning",
    description: "When delays occur, CPM shows the most effective recovery strategies.",
    impact: "Reduces recovery costs by targeting critical activities",
  },
];

const schedulePhases = [
  {
    phase: "Preconstruction Schedule",
    duration: "Design through Permit",
    keyActivities: [
      "Design development milestones",
      "Owner decision points",
      "Permit application and review",
      "Long-lead procurement identification",
      "Subcontractor prequalification",
    ],
    cpmValue: "Identifies design coordination needs and permit timeline risks",
  },
  {
    phase: "Baseline Schedule",
    duration: "Notice to Proceed",
    keyActivities: [
      "Complete activity sequencing",
      "Resource loading",
      "Critical path identification",
      "Float calculation",
      "Milestone verification",
    ],
    cpmValue: "Establishes contractual baseline for delay analysis",
  },
  {
    phase: "Construction Updates",
    duration: "Monthly/Bi-weekly",
    keyActivities: [
      "Progress data entry",
      "Schedule revision as needed",
      "Critical path recalculation",
      "Look-ahead schedule generation",
      "Delay documentation",
    ],
    cpmValue: "Maintains schedule integrity and supports claims",
  },
  {
    phase: "As-Built Schedule",
    duration: "Project Closeout",
    keyActivities: [
      "Final progress data",
      "Delay analysis",
      "Documentation compilation",
      "Lessons learned",
      "Archive for warranty reference",
    ],
    cpmValue: "Supports final payment and warranty start dates",
  },
];

const delayPrevention = [
  {
    delayType: "Permitting Delays",
    cpmApproach: "Identify permit-dependent activities; build realistic review durations; track as near-critical path",
    recoveryStrategy: "Resequence non-permit-dependent work; accelerate permit-dependent trades after approval",
    typicalImpact: "2-8 weeks if not planned",
  },
  {
    delayType: "Weather Delays",
    cpmApproach: "Include weather days based on historical data; schedule weather-sensitive work in optimal windows",
    recoveryStrategy: "Accelerate indoor work during weather delays; shift to weather-independent activities",
    typicalImpact: "5-15 days per rainy season in Tampa",
  },
  {
    delayType: "Material Lead Times",
    cpmApproach: "Identify long-lead items in preconstruction; place orders before construction starts",
    recoveryStrategy: "Substitute materials; expedite shipping; resequence to work around missing items",
    typicalImpact: "4-16 weeks for specialty items",
  },
  {
    delayType: "Subcontractor Issues",
    cpmApproach: "Build realistic durations; verify subcontractor capacity; monitor progress weekly",
    recoveryStrategy: "Add crews; work overtime; bring in additional subcontractors",
    typicalImpact: "Varies widely; 1-6 weeks typical",
  },
  {
    delayType: "Design Changes",
    cpmApproach: "Track RFI response times; build decision points into schedule; quantify change impacts",
    recoveryStrategy: "Overlap redesign with unaffected work; accelerate changed scope",
    typicalImpact: "2-10 weeks depending on scope",
  },
  {
    delayType: "Inspection Failures",
    cpmApproach: "Quality control before inspections; schedule reinspections promptly",
    recoveryStrategy: "Parallel work in other areas; expedite corrections; overtime to catch up",
    typicalImpact: "3-10 days per failed inspection",
  },
];

const softwareTools = [
  {
    software: "Primavera P6",
    bestFor: "Large commercial, industrial, government projects",
    features: "Advanced resource leveling, multiple baselines, earned value",
    industry: "Industry standard for complex projects",
  },
  {
    software: "Microsoft Project",
    bestFor: "Mid-size commercial projects, simple logic",
    features: "Familiar interface, Office integration, cost tracking",
    industry: "Common for private sector commercial",
  },
  {
    software: "Procore (Scheduling)",
    bestFor: "Integrated project management approach",
    features: "Document integration, field updates, mobile access",
    industry: "Growing adoption for collaboration",
  },
  {
    software: "Asta Powerproject",
    bestFor: "Projects requiring line-of-balance scheduling",
    features: "Linear scheduling, time-location diagrams",
    industry: "Popular for repetitive/linear projects",
  },
];

const caseStudies = [
  {
    project: "150,000 SF Industrial Flex Building",
    originalDuration: "14 months",
    cpmResult: "Completed in 12.5 months",
    keySavings: "Early steel procurement (8 weeks); weather contingency optimization (3 weeks)",
    ownerBenefit: "6 weeks early occupancy = $180,000 reduced carry costs",
  },
  {
    project: "Medical Office Building Tenant Improvement",
    originalDuration: "5 months",
    cpmResult: "Completed on schedule despite 4-week equipment delay",
    keySavings: "Resequenced HVAC work; parallel electrical; recovered through critical path focus",
    ownerBenefit: "On-time opening for physician practice",
  },
  {
    project: "Multi-Family Parking Garage",
    originalDuration: "10 months",
    cpmResult: "Completed on schedule despite permit delay",
    keySavings: "Advanced long-lead rebar fabrication; optimized pour sequence",
    ownerBenefit: "Main building occupancy not impacted by garage schedule",
  },
];

const faqs = [
  {
    question: "What is Critical Path Method (CPM) scheduling?",
    answer:
      "CPM is a project management technique that identifies the longest sequence of dependent activities (the critical path) that determines the minimum project duration. Activities on the critical path have zero float—any delay directly impacts project completion. CPM scheduling involves creating a network diagram of all activities, their durations, and logical dependencies, then calculating early/late start and finish dates for each activity.",
  },
  {
    question: "Why is CPM scheduling required on large commercial projects?",
    answer:
      "Most contracts for commercial projects over $1 million require CPM schedules because they provide objective documentation of project timeline expectations. CPM schedules serve as the basis for progress payments, delay claims, and change order negotiations. They also help owners, lenders, and tenants understand and plan around construction milestones. Without CPM, determining responsibility for delays becomes subjective and contentious.",
  },
  {
    question: "How often should a CPM schedule be updated?",
    answer:
      "Most commercial projects update CPM schedules monthly, with larger or more complex projects updating bi-weekly. The update process involves recording actual start/finish dates for completed activities, updating durations for in-progress work, adding new activities if scope changes, and recalculating the critical path. Regular updates are essential—an outdated schedule provides no value for delay prevention.",
  },
  {
    question: "What is float and why does it matter?",
    answer:
      "Float (or slack) is the amount of time an activity can be delayed without impacting the project completion date. Total float measures delay to project end; free float measures delay to the next activity. Activities with zero float are on the critical path. Understanding float helps prioritize resources—you can temporarily delay non-critical activities to focus on critical ones. Float ownership (who controls it) is often a contractual issue.",
  },
  {
    question: "How does CPM help with construction delay claims?",
    answer:
      "CPM provides the objective framework for analyzing delay responsibility. A properly maintained schedule shows the critical path at the time of delay, impact of the delay on project completion, and whether concurrent delays existed. Time Impact Analysis (TIA) uses the CPM schedule to quantify delay damages. Without contemporaneous CPM updates, delay claims become difficult to prove or defend.",
  },
  {
    question: "What makes a good CPM scheduler?",
    answer:
      "Effective CPM schedulers combine construction experience with scheduling software expertise. They understand how construction actually sequences (not just textbook logic), can identify unrealistic durations, know how to represent complex logic without over-complicating the schedule, and can explain the schedule to non-technical stakeholders. Look for schedulers with PSP (Planning & Scheduling Professional) certification and relevant project experience.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Cpm Scheduling Prevent Delays", href: "/cpm-scheduling-prevent-delays/" },
];


const internalLinks = [
  { href: "/services/", label: "Our Construction Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/residential/", label: "Residential Construction" },
  { href: "/about/", label: "About Florida Construction Specialists" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const relatedArticles = [
  {
    "title": "The Essential Duties of a Construction Manager",
    "href": "/the-essential-duties-of-a-construction-manager-in-florida/",
    "description": "Understanding the construction manager's role in successful project delivery."
  },
  {
    "title": "Avoid Commercial Construction Delays",
    "href": "/avoid-commercial-construction-delays-in-florida/",
    "description": "Common causes of delays and strategies to prevent them."
  },
  {
    "title": "The Stages of Construction Project Management",
    "href": "/the-stages-of-construction-project-management/",
    "description": "From preconstruction through closeout - managing each phase effectively."
  },
  {
    "title": "Building the Perfect Construction Blueprint",
    "href": "/building-the-perfect-construction-blueprint/",
    "description": "How detailed planning documents set projects up for success."
  }
];

export default function CPMSchedulingPreventDelaysPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="CPM Scheduling Services" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Commercial Construction CPM Scheduling"
        serviceDescription="Critical Path Method scheduling services for commercial and industrial construction projects. Prevent costly delays through expert schedule development and management."
        city="Tampa"
        minPrice="500000"
      />

      
      <ArticleSchema
        headline="CPM Scheduling to Prevent Delays | Commercial Construction Tampa | FCS"
        description="How Critical Path Method scheduling prevents costly delays on large commercial construction projects. Expert scheduling services for Tampa Bay industrial and commercial projects."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/cpm-scheduling-prevent-delays/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Commercial", href: "/commercial/" },
          { name: "CPM Scheduling", href: "/commercial/cpm-scheduling/" },
          { name: "Prevent Delays", href: "/cpm-scheduling-prevent-delays/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Construction services in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <BackToHub
              silo="commercial"
              customHubTitle="CPM Scheduling"
              customHubHref="/commercial/cpm-scheduling/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              CPM Scheduling to Prevent Construction Delays
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              How Critical Path Method scheduling identifies risks early and keeps
              large commercial projects on track. Expert scheduling for Tampa Bay
              industrial and commercial construction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Discuss Your Project Schedule
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
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Why CPM Scheduling Matters
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Proper CPM scheduling isn&apos;t just a contract requirement—it&apos;s a
            powerful tool for preventing the delays that cost owners time and money.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cpmBenefits.map((item) => (
              <div key={item.benefit} className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-brand-green" />
                  <h3 className="text-xl font-bold text-brand-green-dark">
                    {item.benefit}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="bg-brand-green-light/30 rounded-lg p-3">
                  <span className="text-sm font-semibold text-brand-green-dark">
                    {item.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Phases */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            CPM Schedule Lifecycle
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Effective CPM scheduling begins in preconstruction and continues through
            project closeout.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {schedulePhases.map((phase, index) => (
              <div key={phase.phase} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-md h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-green-dark">{phase.phase}</h3>
                      <span className="text-sm text-gray-500">{phase.duration}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {phase.keyActivities.map((activity, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{activity}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 border-t">
                    <span className="text-xs text-gray-500">CPM Value:</span>
                    <p className="text-sm text-brand-green-dark">{phase.cpmValue}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delay Prevention */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Common Delays & CPM Prevention Strategies
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            How CPM scheduling addresses the most common causes of construction delays.
          </p>
          <div className="space-y-6">
            {delayPrevention.map((item) => (
              <div
                key={item.delayType}
                className="bg-gray-50 rounded-xl p-6 grid md:grid-cols-4 gap-6"
              >
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                    {item.delayType}
                  </h3>
                  <span className="text-sm text-red-600">
                    Typical Impact: {item.typicalImpact}
                  </span>
                </div>
                <div className="md:col-span-2">
                  <span className="text-xs text-gray-500 font-semibold block mb-1">
                    CPM Prevention Approach
                  </span>
                  <p className="text-gray-700">{item.cpmApproach}</p>
                </div>
                <div>
                  <span className="text-xs text-brand-green font-semibold block mb-1">
                    Recovery Strategy
                  </span>
                  <p className="text-gray-600 text-sm">{item.recoveryStrategy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            CPM Success Stories
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Real examples of how CPM scheduling protected project timelines.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.project} className="card p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-4">
                  {study.project}
                </h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Original Duration</span>
                    <span className="font-semibold">{study.originalDuration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">CPM Result</span>
                    <span className="font-semibold text-brand-green">{study.cpmResult}</span>
                  </div>
                </div>
                <div className="bg-brand-green-light/30 rounded-lg p-3 mb-3">
                  <span className="text-xs text-gray-500 block">Key Schedule Savings</span>
                  <p className="text-sm text-brand-green-dark">{study.keySavings}</p>
                </div>
                <p className="text-sm text-gray-600">
                  <TrendingUp className="w-4 h-4 inline mr-1 text-brand-gold" />
                  {study.ownerBenefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Tools */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            CPM Scheduling Software
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            The right software depends on project complexity and stakeholder needs.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softwareTools.map((tool) => (
              <div key={tool.software} className="card p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  {tool.software}
                </h3>
                <p className="text-sm text-brand-gold mb-3">{tool.bestFor}</p>
                <p className="text-sm text-gray-600 mb-3">{tool.features}</p>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {tool.industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-white rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-brand-green-dark hover:no-underline py-4">
                  <span className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Commercial Construction Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/commercial/cpm-scheduling/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                CPM Scheduling Services
              </h3>
              <p className="text-gray-600 text-sm">
                Professional scheduling for commercial construction.
              </p>
            </Link>
            <Link
              href="/commercial-construction/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Commercial Construction
              </h3>
              <p className="text-gray-600 text-sm">
                Large-scale commercial projects in Tampa Bay.
              </p>
            </Link>
            <Link
              href="/commercial/industrial-construction/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Industrial Construction
              </h3>
              <p className="text-gray-600 text-sm">
                Warehouses, flex space, and industrial facilities.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Keep Your Project on Schedule
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            FCS brings CPM scheduling expertise to every commercial project. From
            preconstruction through closeout, we maintain the schedule discipline
            that prevents costly delays.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Discuss Your Project
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
      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      
      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Services"
            links={internalLinks}
          />
        </div>
      </section>

    </>
  );
}