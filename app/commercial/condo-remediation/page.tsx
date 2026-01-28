import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  CheckCircle,
  ClipboardCheck,
  AlertTriangle,
  ArrowRight,
  Phone,
  HelpCircle,
} from "lucide-react";
import { BUSINESS_INFO, LOCATIONS } from "@/lib/constants";
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
  title: "Condo Remediation Tampa | SB4-D Compliance & SIRS | FCS",
  description:
    "Florida SB4-D compliance, milestone inspections, and SIRS structural assessments for condominiums. Tampa Bay's condo remediation specialists.",
  keywords:
    "SB4-D compliance Tampa, condo milestone inspection, SIRS structural assessment, condo remediation Florida, structural integrity reserve study",
};

const features = [
  {
    title: "SB4-D Compliance",
    description: "Full compliance with Florida's condo safety legislation including milestone inspections",
    icon: ClipboardCheck,
  },
  {
    title: "Milestone Inspections",
    description: "Phase 1 and Phase 2 structural inspections for buildings 25+ years old",
    icon: AlertTriangle,
  },
  {
    title: "SIRS Assessments",
    description: "Structural Integrity Reserve Studies to plan and fund necessary repairs",
    icon: Building2,
  },
  {
    title: "Remediation Work",
    description: "Expert repair of structural deficiencies identified in inspections",
    icon: CheckCircle,
  },
];

const complianceTimeline = [
  {
    milestone: "Buildings 30+ years (within 3 miles of coast)",
    deadline: "December 31, 2024",
  },
  {
    milestone: "Buildings 30+ years (more than 3 miles from coast)",
    deadline: "December 31, 2025",
  },
  {
    milestone: "SIRS must be completed",
    deadline: "December 31, 2024",
  },
  {
    milestone: "Reserve funding must begin",
    deadline: "January 1, 2025",
  },
];

const faqs = [
  {
    "question": "What is Florida SB4-D and how does it affect my condo?",
    "answer": "Florida SB4-D (the Surfside-response legislation) requires condominium buildings 3+ stories to complete milestone structural inspections and Structural Integrity Reserve Studies (SIRS). Buildings must be inspected at 30 years (25 years if within 3 miles of coast), then every 10 years. Associations cannot waive reserves for structural components. Failure to comply can result in building closure orders."
  },
  {
    "question": "What are Phase 1 and Phase 2 milestone inspections?",
    "answer": "Phase 1 is a visual inspection by a licensed engineer or architect to identify substantial structural deterioration. If substantial deterioration is found, Phase 2 requires destructive testing, detailed analysis, and a repair plan. Phase 2 reports must include cost estimates and timelines for required repairs. FCS works with qualified engineers to coordinate inspections and implement required remediation."
  },
  {
    "question": "What is a SIRS (Structural Integrity Reserve Study)?",
    "answer": "A Structural Integrity Reserve Study is a 30-year reserve analysis specifically for structural components: roof, waterproofing, foundation, load-bearing walls, and primary structural systems. Unlike traditional reserve studies, SIRS cannot include pooling with non-structural items, and associations cannot vote to waive funding. SIRS determines the annual contribution needed to fund future structural repairs."
  },
  {
    "question": "How much does condo remediation typically cost?",
    "answer": "Remediation costs vary widely based on deficiency type and extent. Concrete spalling repair: $15-50/SF. Balcony reconstruction: $300-600/SF. Post-tension cable repair: $5,000-15,000 per repair. Full building envelope rehabilitation: $50-150/SF of wall area. We provide detailed estimates after engineering assessment and help associations prioritize work based on severity and budget."
  },
  {
    "question": "Can owners live in the building during remediation?",
    "answer": "In most cases, yes. We develop phased remediation plans that maintain building occupancy. Techniques include: working floor-by-floor, creating temporary weather barriers, scheduling noisy work during business hours, and maintaining life safety systems throughout. For severe structural issues, temporary evacuation of affected areas may be necessary. Safety is never compromised for occupancy."
  },
  {
    "question": "What funding options exist for SB4-D compliance work?",
    "answer": "Common funding approaches: existing reserves (if adequately funded), special assessments (one-time charges to owners), bank loans (repaid through regular assessments over time), and phased construction (spreading work over multiple budget years). Many associations are combining approaches. FCS helps boards evaluate options and develop funding strategies that balance urgency with owner financial capacity."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Condo Remediation", href: "/condo-remediation/" },
];


const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Restoration" },
  { href: "/services/disaster-recovery/fire-damage/", label: "Fire Damage Restoration" },
  { href: "/services/disaster-recovery/water-damage/", label: "Water Damage Restoration" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function CondoRemediationPage() {
  const breadcrumbItems = [
    { name: "Commercial Services", href: "/commercial/" },
    { name: "Condo Remediation & SB4-D", href: "/commercial/condo-remediation/" },
  ];

  return (
    <>
      <LocalBusinessSchema schemaType="GeneralContractor" service="Condo Remediation" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Condo Remediation & SB4-D Compliance"
        serviceDescription="Florida SB4-D compliance, milestone inspections, SIRS assessments, and structural remediation for condominiums"
        minPrice="100000"
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
              <Building2 className="w-10 h-10 text-brand-gold" />
              <span className="bg-brand-green/30 text-white px-3 py-1 rounded-full text-sm font-bold">
                COMMERCIAL
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              Condo Remediation Tampa | SB4-D Compliance & SIRS Specialists
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Florida&apos;s new condo safety laws require milestone inspections and
              structural reserve studies. FCS helps condo associations navigate
              SB4-D compliance and complete required remediation work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-white font-bold rounded-full hover:bg-brand-gold-dark transition-all"
              >
                Request Compliance Assessment
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

      {/* Alert Banner */}
      <section className="py-6 bg-brand-gold">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-3 text-white">
            <AlertTriangle className="w-6 h-6" />
            <span className="font-bold">
              SB4-D Deadlines Approaching - Contact us for compliance assessment
            </span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-8 text-center">
            Condo Compliance Services
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

      {/* Compliance Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-8 text-center">
            SB4-D Compliance Timeline
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {complianceTimeline.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 flex items-center justify-between shadow-sm"
                >
                  <span className="font-medium text-gray-700">{item.milestone}</span>
                  <span className="bg-brand-gold text-white px-4 py-2 rounded-full font-bold text-sm">
                    {item.deadline}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What is SIRS */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-6">
                What is a SIRS (Structural Integrity Reserve Study)?
              </h2>
              <p className="text-gray-600 mb-6">
                A Structural Integrity Reserve Study is a comprehensive assessment
                required by Florida law that evaluates the condition and remaining
                useful life of structural components and determines required reserve
                funding.
              </p>
              <div className="space-y-4">
                {[
                  "Visual inspection of all structural components",
                  "Assessment of roof, load-bearing walls, foundation, floor",
                  "Evaluation of waterproofing, windows, electrical, plumbing",
                  "30-year reserve funding schedule",
                  "Identification of deferred maintenance",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-green-bg rounded-xl p-8">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Need Help with SB4-D Compliance?
              </h3>
              <p className="text-gray-600 mb-6">
                FCS works with condo associations to complete milestone inspections,
                SIRS assessments, and any required remediation work.
              </p>
              <Link
                href="/contact/"
                className="block w-full py-3 bg-brand-green text-white font-bold rounded-lg text-center hover:bg-brand-green-dark transition-colors"
              >
                Schedule Compliance Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-8 text-center">
            Condo Remediation Service Areas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {LOCATIONS.map((location) => (
              <div
                key={location.slug}
                className="bg-white rounded-lg p-4 text-center shadow-sm"
              >
                <span className="font-semibold text-brand-green-dark">
                  {location.name}, FL
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Condo Remediation & SB4-D FAQs
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
            Don&apos;t Wait Until the Deadline
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            SB4-D compliance deadlines are approaching. Contact FCS today for a
            compliance assessment and remediation planning.
          </p>
          <Link href="/contact/" className="btn-cta">
            Request SB4-D Compliance Assessment
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