import type { Metadata } from "next";
import Link from "next/link";
import {
  Factory,
  CheckCircle,
  Warehouse,
  HardHat,
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
  title: "Industrial Construction Tampa | Tilt-Wall & Warehouse | FCS",
  description:
    "Industrial and warehouse construction in Tampa Bay. Tilt-wall, steel erection, flex space, and distribution centers. $500K-$25M+ projects.",
  keywords:
    "industrial construction Tampa, warehouse construction, tilt-wall construction, flex space development, distribution center construction Florida",
};

const features = [
  {
    title: "Tilt-Wall Construction",
    description: "Cost-effective concrete tilt-wall panels for rapid industrial facility construction",
    icon: Factory,
  },
  {
    title: "Steel Erection",
    description: "Pre-engineered metal buildings and structural steel for large-span facilities",
    icon: HardHat,
  },
  {
    title: "Warehouse & Distribution",
    description: "High-bay warehouses, distribution centers, and logistics facilities",
    icon: Warehouse,
  },
  {
    title: "Flex Space Development",
    description: "Multi-tenant industrial flex buildings combining office and warehouse space",
    icon: CheckCircle,
  },
];

const projectTypes = [
  "Warehouses & Distribution Centers",
  "Manufacturing Facilities",
  "Flex Industrial Buildings",
  "Cold Storage Facilities",
  "Data Centers",
  "Self-Storage Facilities",
  "Truck Terminals",
  "Industrial Parks",
];

const faqs = [
  {
    question: "What is tilt-wall construction and when is it the best choice?",
    answer:
      "Tilt-wall (or tilt-up) construction involves pouring concrete wall panels horizontally on-site, then tilting them into position with cranes. It's ideal for buildings over 20,000 SF where durability, fire resistance, and low maintenance matter. Tilt-wall excels for climate-controlled facilities, high-value inventory storage, and buildings requiring superior thermal performance. The upfront cost is higher than metal buildings but delivers lower lifecycle costs.",
  },
  {
    question: "How much does industrial warehouse construction cost in Tampa Bay?",
    answer:
      "Industrial construction costs in Tampa Bay range from $75-150/SF for basic shell buildings to $150-300+/SF for finished facilities. Key factors include foundation type (slab vs. piles), clear height requirements, fire suppression, climate control, and office finish level. A typical 50,000 SF distribution warehouse shell runs $4-6M, while a finished manufacturing facility of the same size might cost $8-12M. We provide detailed estimates based on your specific requirements.",
  },
  {
    question: "How long does warehouse construction take?",
    answer:
      "Typical industrial construction timelines: Pre-engineered metal buildings: 4-6 months. Tilt-wall warehouses: 8-12 months. Complex manufacturing facilities: 12-18 months. Permitting in Tampa Bay typically takes 8-16 weeks depending on jurisdiction and site complexity. We use CPM scheduling to optimize timelines and identify opportunities for fast-tracking without sacrificing quality.",
  },
  {
    question: "Can you help with site selection for industrial development?",
    answer:
      "Yes, we provide pre-construction services including site evaluation. Key factors we assess: zoning compatibility, utility availability (especially power for manufacturing), soil conditions, flood zone status, traffic access for trucks, and permitting timeline. We work with commercial real estate brokers and site civil engineers to evaluate potential sites before you commit.",
  },
  {
    question: "What clear heights are available for warehouse construction?",
    answer:
      "Modern warehouses typically feature 28-36 foot clear heights to maximize cube utilization and accommodate modern racking systems. Ecommerce fulfillment centers often require 36-40+ foot clears. Tilt-wall construction can achieve 40+ foot clear heights with proper structural design. Pre-engineered metal buildings are economical up to 30-35 foot clears. We design to your operational requirements and future flexibility.",
  },
  {
    question: "Do you build EV charging infrastructure for industrial facilities?",
    answer:
      "Yes, EV infrastructure is increasingly important for industrial projects. We install charging stations for fleet vehicles, employee parking, and future tenant needs. This includes electrical infrastructure sizing for future EV expansion, trenching and conduit installation, and coordination with utility companies for service upgrades. Many industrial tenants now require EV readiness as part of lease negotiations.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Industrial Construction", href: "/industrial-construction/" },
];


const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/services/commercial/medical-construction/", label: "Medical Facility Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function IndustrialConstructionPage() {
  const breadcrumbItems = [
    { name: "Commercial Services", href: "/commercial/" },
    { name: "Industrial & Flex Space", href: "/commercial/industrial-construction/" },
  ];

  return (
    <>
      <LocalBusinessSchema schemaType="GeneralContractor" service="Industrial Construction" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Industrial & Warehouse Construction"
        serviceDescription="Tilt-wall, steel erection, and industrial flex space construction in Tampa Bay"
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
              <Factory className="w-10 h-10 text-brand-gold" />
              <span className="bg-brand-green/30 text-white px-3 py-1 rounded-full text-sm font-bold">
                COMMERCIAL
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              Industrial Construction Tampa | Tilt-Wall & Steel Erection
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Large-scale industrial and warehouse construction throughout Tampa Bay.
              Tilt-wall panels, pre-engineered metal buildings, and flex space development
              from $500K to $25M+.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-white font-bold rounded-full hover:bg-brand-gold-dark transition-all"
              >
                Request Industrial Bid
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
            Industrial Construction Capabilities
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
            Industrial Facility Types
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

      {/* Tilt-Wall vs Metal Buildings */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-8 text-center">
            Tilt-Wall vs Pre-Engineered Metal Buildings
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Tilt-Wall Construction</h3>
              <ul className="space-y-2">
                {[
                  "Superior durability and fire resistance",
                  "Lower long-term maintenance costs",
                  "Better thermal mass for energy efficiency",
                  "Ideal for high-value or climate-sensitive contents",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Pre-Engineered Metal</h3>
              <ul className="space-y-2">
                {[
                  "Faster construction timeline",
                  "Lower initial construction cost",
                  "Easy future expansion capability",
                  "Ideal for large clear-span requirements",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-8 text-center">
            Industrial Construction Service Areas
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
            Industrial Construction FAQs
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
            Ready to Build Your Industrial Facility?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From site selection to turnkey delivery, FCS delivers industrial
            construction projects on schedule and on budget.
          </p>
          <Link href="/contact/" className="btn-cta">
            Request Industrial Construction Bid
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