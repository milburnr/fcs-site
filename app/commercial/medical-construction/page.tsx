import type { Metadata } from "next";
import Link from "next/link";
import {
  Stethoscope,
  CheckCircle,
  Shield,
  ClipboardCheck,
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
  title: "Medical & Healthcare Construction Tampa | AHCA Compliant | FCS",
  description:
    "AHCA-compliant medical facility construction in Tampa Bay. Clean rooms, medical gas piping, healthcare buildouts. Licensed contractor with 40+ years experience.",
  keywords:
    "medical construction Tampa, healthcare facility construction, AHCA compliance, medical office buildout, clean room construction Florida",
};

const features = [
  {
    title: "AHCA Compliance",
    description: "Full compliance with Agency for Health Care Administration requirements for licensed healthcare facilities",
    icon: ClipboardCheck,
  },
  {
    title: "Medical Gas Systems",
    description: "Certified medical gas piping installation including oxygen, nitrogen, and vacuum systems",
    icon: Shield,
  },
  {
    title: "Clean Room Construction",
    description: "ISO-rated clean room environments for surgical centers, labs, and pharmaceutical facilities",
    icon: CheckCircle,
  },
  {
    title: "Infection Control",
    description: "ICRA protocols for construction in active healthcare environments",
    icon: Stethoscope,
  },
];

const projectTypes = [
  "Medical Office Buildings",
  "Urgent Care Centers",
  "Surgical Centers (ASC)",
  "Dental Offices",
  "Imaging Centers",
  "Physical Therapy Clinics",
  "Veterinary Hospitals",
  "Laboratory Facilities",
  "Pharmacy Buildouts",
  "Senior Care Facilities",
];

const faqs = [
  {
    question: "What AHCA requirements apply to medical construction in Florida?",
    answer:
      "The Agency for Health Care Administration (AHCA) requires licensed healthcare facilities to meet specific construction standards. This includes proper HVAC with specific air change requirements, infection control barriers during construction (ICRA), medical gas system certifications, emergency power systems, and accessibility compliance. FCS coordinates AHCA pre-construction meetings and ensures all inspections are scheduled and passed for timely licensure.",
  },
  {
    question: "How long does medical office construction take?",
    answer:
      "Typical medical office buildouts range from 3-6 months depending on complexity. Simple physician offices may complete in 10-12 weeks, while surgical centers with clean rooms and medical gas systems typically require 4-6 months. AHCA licensing inspections and equipment installation often extend timelines. We provide detailed CPM schedules that account for permitting, construction, equipment, and regulatory approvals.",
  },
  {
    question: "What is clean room construction and do I need it?",
    answer:
      "Clean rooms are controlled environments that limit airborne particles, temperature, and humidity. They're required for surgical suites, compounding pharmacies, certain labs, and medical device manufacturing. Clean rooms are rated by ISO class (ISO 5-8 common in healthcare). Construction requires sealed surfaces, HEPA filtration, positive pressure, and specialized finishes. Not all medical facilities need clean rooms—consult with us to determine your requirements.",
  },
  {
    question: "Can you build while my medical practice remains open?",
    answer:
      "Yes, we regularly perform phased construction in occupied medical facilities. This requires ICRA (Infection Control Risk Assessment) protocols including sealed barriers, negative air pressure in construction zones, dedicated entry/exit paths, and HEPA air scrubbers. We coordinate with your operations to schedule noisy work during off-hours. Patient and staff safety is never compromised during construction.",
  },
  {
    question: "What medical gas systems do you install?",
    answer:
      "FCS installs complete medical gas systems including oxygen, medical air, nitrogen, nitrous oxide, carbon dioxide, and vacuum systems. Our certified installers follow NFPA 99 and ASSE 6000 standards. All systems include zone valves, alarm panels, and master alarms. We coordinate with your equipment vendors and perform required testing before AHCA inspection.",
  },
  {
    question: "How much does medical construction cost per square foot?",
    answer:
      "Medical construction costs vary widely by facility type. General medical offices: $150-250/SF. Dental offices: $200-350/SF. Urgent care: $250-400/SF. Surgical centers: $400-600/SF. Imaging centers (with shielding): $300-500/SF. These ranges include typical finishes, HVAC, and basic medical infrastructure. Clean rooms, specialized equipment, and complex medical gas systems add to costs. We provide detailed estimates based on your specific program requirements.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Medical Construction", href: "/medical-construction/" },
];


const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/services/commercial/medical-construction/", label: "Medical Facility Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function MedicalConstructionPage() {
  const breadcrumbItems = [
    { name: "Commercial Services", href: "/commercial/" },
    { name: "Medical & Healthcare", href: "/commercial/medical-construction/" },
  ];

  return (
    <>
      <LocalBusinessSchema schemaType="GeneralContractor" service="Medical Construction" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Medical & Healthcare Construction"
        serviceDescription="AHCA-compliant medical facility construction including clean rooms, medical gas systems, and healthcare buildouts in Tampa Bay"
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
              <Stethoscope className="w-10 h-10 text-brand-gold" />
              <span className="bg-brand-green/30 text-white px-3 py-1 rounded-full text-sm font-bold">
                COMMERCIAL
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              Medical & Healthcare Construction Tampa | AHCA Compliant Builders
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Specialized healthcare facility construction with full AHCA compliance,
              medical gas systems, and clean room expertise. From urgent care centers
              to surgical facilities across Tampa Bay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-white font-bold rounded-full hover:bg-brand-gold-dark transition-all"
              >
                Request Healthcare Bid
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
            Healthcare Construction Expertise
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

      {/* Project Types */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-8 text-center">
            Healthcare Facility Types We Build
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {projectTypes.map((type) => (
              <div
                key={type}
                className="bg-white rounded-lg p-4 text-center shadow-sm"
              >
                <span className="text-sm font-medium text-gray-700">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FCS */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-6">
                Why Choose FCS for Medical Construction?
              </h2>
              <div className="space-y-4">
                {[
                  "AHCA inspection experience - we know what regulators look for",
                  "Certified medical gas piping installers on staff",
                  "ICRA-trained teams for work in active healthcare settings",
                  "Clean room construction to ISO standards",
                  `${BUSINESS_INFO.yearsInBusiness} experience for projects of any scale`,
                  "Direct coordination with healthcare equipment vendors",
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
                Healthcare Project Inquiry
              </h3>
              <p className="text-gray-600 mb-6">
                Planning a medical facility? We provide complimentary consultations
                for healthcare construction projects $500K+.
              </p>
              <Link
                href="/contact/"
                className="block w-full py-3 bg-brand-green text-white font-bold rounded-lg text-center hover:bg-brand-green-dark transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-8 text-center">
            Medical Construction Service Areas
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
            Medical Construction FAQs
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
            Ready to Build Your Healthcare Facility?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From AHCA compliance to medical gas systems, FCS has the expertise
            to deliver your healthcare project on time and to specification.
          </p>
          <Link href="/contact/" className="btn-cta">
            Request Healthcare Construction Bid
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