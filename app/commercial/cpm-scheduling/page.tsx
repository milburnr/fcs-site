import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  CheckCircle,
  Clock,
  TrendingUp,
  ArrowRight,
  Phone,
  HelpCircle,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Breadcrumb } from "@/components/Breadcrumb";
import { BackToHub } from "@/components/BackToHub";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "CPM Scheduling Tampa | Commercial Construction Project Management | FCS",
  description:
    "Critical Path Method scheduling for commercial construction projects. Prevent delays, optimize resources, and deliver on time. Tampa Bay's scheduling experts.",
  keywords:
    "CPM scheduling Tampa, critical path method construction, construction project management, commercial construction scheduling, delay prevention",
};

const features = [
  {
    title: "Critical Path Analysis",
    description: "Identify the longest sequence of dependent tasks to optimize your project timeline",
    icon: TrendingUp,
  },
  {
    title: "Resource Optimization",
    description: "Balance labor, equipment, and materials to prevent bottlenecks and delays",
    icon: Calendar,
  },
  {
    title: "Progress Tracking",
    description: "Real-time monitoring of schedule performance with earned value metrics",
    icon: Clock,
  },
  {
    title: "Delay Mitigation",
    description: "Early warning systems and recovery planning to keep projects on track",
    icon: CheckCircle,
  },
];

const benefits = [
  "Reduce project duration by 10-20%",
  "Early identification of potential delays",
  "Optimized resource allocation",
  "Clear accountability for all stakeholders",
  "Documentation for delay claims if needed",
  "Improved cash flow management",
  "Better subcontractor coordination",
  "Real-time progress visibility",
];

const faqs = [
  {
    "question": "What is CPM scheduling and why is it important?",
    "answer": "Critical Path Method (CPM) scheduling identifies the longest sequence of dependent activities that determines project duration. By identifying the critical path, we know which tasks cannot slip without delaying the project. This allows focused management attention on critical activities while providing flexibility for non-critical tasks. CPM is essential for complex commercial projects with multiple trades and dependencies."
  },
  {
    "question": "How does CPM scheduling prevent delays?",
    "answer": "CPM provides early warning of potential delays through: daily progress tracking against schedule, float analysis showing which activities have schedule margin, resource leveling to prevent bottlenecks, and what-if scenario modeling. When delays occur, we can quickly assess impact and develop recovery plans. The goal is identifying problems weeks before they become critical."
  },
  {
    "question": "What software do you use for CPM scheduling?",
    "answer": "FCS uses Primavera P6 for complex projects and Microsoft Project for mid-size jobs. Both platforms support full CPM analysis including logic ties, resource loading, cost loading, and earned value tracking. We provide web-based dashboards for owner access to real-time schedule status. All schedules include baseline comparisons showing original plan versus current forecast."
  },
  {
    "question": "How often is the schedule updated?",
    "answer": "We update schedules weekly at minimum, with daily updates during critical phases. Each update includes: actual start and finish dates, remaining duration assessments, new activities if scope changes, and revised logic if needed. Monthly narrative reports explain variances and recovery strategies. For projects with tight deadlines, we may update schedules multiple times per week."
  },
  {
    "question": "How do you handle schedule delays?",
    "answer": "When delays occur, we: assess impact on critical path, identify root cause, develop recovery options (acceleration, resequencing, additional resources), evaluate cost implications, and recommend the best path forward. If delays are owner or design-caused, we document for potential time extensions. Our goal is always to find solutions, not just report problems."
  },
  {
    "question": "Do you provide schedule documentation for disputes?",
    "answer": "Yes, our CPM schedules create a contemporaneous record valuable for delay claims or disputes. We maintain: baseline schedules (original plan), periodic updates (monthly or more), daily logs of progress and delays, and fragnet analyses showing delay impacts. If claims arise, this documentation supports or defends time extension and delay damage claims."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Cpm Scheduling", href: "/cpm-scheduling/" },
];


const internalLinks = [
  { href: "/services/", label: "Our Construction Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/residential/", label: "Residential Construction" },
  { href: "/about/", label: "About Florida Construction Specialists" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function CPMSchedulingPage() {
  const breadcrumbItems = [
    { name: "Commercial Services", href: "/commercial/" },
    { name: "CPM Scheduling", href: "/commercial/cpm-scheduling/" },
  ];

  return (
    <>
      <LocalBusinessSchema schemaType="GeneralContractor" service="CPM Scheduling" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="CPM Scheduling & Project Management"
        serviceDescription="Critical Path Method scheduling for commercial construction projects in Tampa Bay"
        minPrice="500000"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb items={breadcrumbItems} />

      <div className="container-custom py-8">
        <BackToHub silo="commercial" />
      </div>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-10 h-10 text-brand-gold" />
              <span className="bg-brand-green/30 text-white px-3 py-1 rounded-full text-sm font-bold">
                COMMERCIAL
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              CPM Scheduling Tampa | Prevent Costly Project Delays
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Critical Path Method scheduling is essential for complex commercial
              projects. FCS uses CPM to identify bottlenecks, optimize resources,
              and deliver your project on time and on budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-white font-bold rounded-full hover:bg-brand-gold-dark transition-all"
              >
                Discuss Your Project Schedule
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-8 text-center">
            CPM Scheduling Capabilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-gray-50 rounded-xl p-6">
                  <Icon className="w-10 h-10 text-brand-green mb-4" />
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What is CPM */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-6 text-center">
              What is Critical Path Method (CPM)?
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              CPM is a project management technique that identifies the longest
              sequence of dependent activities (the &quot;critical path&quot;) that
              determines the minimum project duration. Any delay on the critical
              path directly delays the entire project.
            </p>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">
                How CPM Works
              </h3>
              <ol className="space-y-4">
                {[
                  "Break down the project into individual activities",
                  "Determine dependencies between activities",
                  "Estimate duration for each activity",
                  "Calculate the critical path (longest sequence)",
                  "Identify float time for non-critical activities",
                  "Monitor progress and adjust as needed",
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-green text-white font-bold text-sm shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-6">
                Benefits of CPM Scheduling
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-green-bg rounded-xl p-8">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Every FCS Project Includes CPM
              </h3>
              <p className="text-gray-600 mb-6">
                We don&apos;t treat scheduling as an afterthought. Every commercial
                project includes comprehensive CPM scheduling as part of our
                standard project management approach.
              </p>
              <Link
                href="/contact/"
                className="block w-full py-3 bg-brand-green text-white font-bold rounded-lg text-center hover:bg-brand-green-dark transition-colors"
              >
                Learn About Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            CPM Scheduling FAQs
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-gray-50 rounded-lg px-6"
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

      {/* CTA */}
      <section className="py-16 bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-heading">
            Keep Your Commercial Project on Schedule
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Delays cost money. CPM scheduling helps identify and prevent delays
            before they impact your bottom line.
          </p>
          <Link href="/contact/" className="btn-cta">
            Discuss Your Project Timeline
          </Link>
        </div>
      </section>
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