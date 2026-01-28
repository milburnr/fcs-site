import type { Metadata } from "next";
import Link from "next/link";
import {
  Landmark,
  CheckCircle,
  Award,
  FileText,
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
  title: "Commercial Historic Restoration Tampa | Tax Credits & SHPO | FCS",
  description:
    "Commercial historic restoration in Tampa Bay. Historic tax credits, SHPO compliance, adaptive reuse. Italian Club, Cuban Club, and civic building specialists.",
  keywords:
    "commercial historic restoration Tampa, historic tax credits Florida, SHPO compliance, adaptive reuse, Tampa historic buildings",
};

const features = [
  {
    title: "Historic Tax Credits",
    description: "Navigate federal and state historic tax credit programs to offset restoration costs",
    icon: Award,
  },
  {
    title: "SHPO Compliance",
    description: "Full coordination with State Historic Preservation Office requirements",
    icon: FileText,
  },
  {
    title: "Adaptive Reuse",
    description: "Transform historic structures for modern commercial use while preserving character",
    icon: Landmark,
  },
  {
    title: "Period Restoration",
    description: "Authentic restoration using traditional materials and techniques",
    icon: CheckCircle,
  },
];

const projectTypes = [
  "Historic Social Clubs",
  "Downtown Office Buildings",
  "Historic Hotels",
  "Civic Buildings",
  "Historic Theaters",
  "Warehouses (Adaptive Reuse)",
  "Churches & Religious Buildings",
  "Historic Schools",
];

const faqs = [
  {
    "question": "How do historic tax credits work for commercial restoration?",
    "answer": "Federal Historic Tax Credits offer a 20% credit on qualified rehabilitation expenses for income-producing properties on the National Register. Florida offers an additional 25% credit for approved projects. Combined, you can recover 45% of eligible costs. Credits are applied against tax liability over 5 years. FCS coordinates Part 1, 2, and 3 applications with SHPO and NPS to maximize your credit eligibility."
  },
  {
    "question": "What is the SHPO approval process?",
    "answer": "SHPO (State Historic Preservation Office) reviews projects affecting historic properties. For tax credit projects, you submit Part 1 (property significance) and Part 2 (proposed work) applications. SHPO reviews for compliance with Secretary of Interior Standards. Typical review takes 30-45 days. FCS prepares documentation and coordinates with SHPO reviewers to ensure approval of your proposed restoration scope."
  },
  {
    "question": "How long does commercial historic restoration take?",
    "answer": "Commercial historic restoration typically takes 12-24 months from design through completion. Key timeline factors: SHPO/NPS approvals (2-4 months), permit review (2-3 months), specialty material procurement (2-6 months), and phased construction. The regulatory review process for tax credits adds time upfront but the financial benefits justify the investment. We develop detailed CPM schedules accounting for all approval milestones."
  },
  {
    "question": "What is adaptive reuse and when does it make sense?",
    "answer": "Adaptive reuse transforms historic buildings for new purposes while preserving their character—converting a warehouse to lofts, a school to offices, or a theater to retail. It makes sense when: the building has good bones, the location supports the new use, historic tax credits offset higher renovation costs, and community/market demand exists for the finished product. FCS has completed adaptive reuse projects throughout Tampa Bay."
  },
  {
    "question": "What materials must be used in historic restoration?",
    "answer": "Secretary of Interior Standards require in-kind replacement when possible—same material, appearance, and design. When original materials are unavailable, compatible substitutes may be approved. For tax credit projects, SHPO reviews material choices. FCS maintains relationships with specialty suppliers for historic windows, terra cotta, ornamental plaster, and other period-appropriate materials."
  },
  {
    "question": "How do you handle structural upgrades in historic buildings?",
    "answer": "Historic buildings often need seismic retrofitting, foundation repair, or structural reinforcement. The key is making upgrades while minimizing impact on character-defining features. Methods include: steel moment frames concealed within walls, carbon fiber reinforcement, micropile foundations, and hidden structural steel. All structural work must be approved as part of the historic tax credit application."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Historic Restoration", href: "/historic-restoration/" },
];


const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Restoration" },
  { href: "/services/disaster-recovery/fire-damage/", label: "Fire Damage Restoration" },
  { href: "/services/disaster-recovery/water-damage/", label: "Water Damage Restoration" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function CommercialHistoricRestorationPage() {
  const breadcrumbItems = [
    { name: "Commercial Services", href: "/commercial/" },
    { name: "Historic Restoration (Commercial)", href: "/commercial/historic-restoration/" },
  ];

  return (
    <>
      <LocalBusinessSchema schemaType="GeneralContractor" service="Commercial Historic Restoration" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Commercial Historic Restoration"
        serviceDescription="Historic tax credit projects, SHPO compliance, and adaptive reuse of commercial historic buildings in Tampa Bay"
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
              <Landmark className="w-10 h-10 text-brand-gold" />
              <span className="bg-brand-green/30 text-white px-3 py-1 rounded-full text-sm font-bold">
                COMMERCIAL
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              Commercial Historic Restoration Tampa | Tax Credits & SHPO Compliance
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Expert restoration of Tampa Bay&apos;s commercial historic landmarks.
              From the Italian Club to downtown office buildings, we navigate
              historic tax credits and SHPO requirements to preserve your investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-white font-bold rounded-full hover:bg-brand-gold-dark transition-all"
              >
                Request Historic Restoration Bid
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
            Commercial Historic Restoration Expertise
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

      {/* Historic Tax Credits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-6">
                Maximize Historic Tax Credits
              </h2>
              <p className="text-gray-600 mb-6">
                Historic tax credits can offset 20-45% of qualified rehabilitation
                costs. Our team has extensive experience navigating the requirements
                to maximize your tax benefit while preserving historic character.
              </p>
              <div className="space-y-4">
                {[
                  "Federal Historic Tax Credit (20% for income-producing properties)",
                  "Florida Historic Tax Credit (additional 20% state credit)",
                  "Ad Valorem Tax Exemption for qualifying properties",
                  "Part 1, 2, and 3 application assistance",
                  "SHPO coordination throughout the project",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">
                Tampa&apos;s Historic Landmarks
              </h3>
              <p className="text-gray-600 mb-4">
                We specialize in restoring Tampa Bay&apos;s most significant historic
                commercial buildings:
              </p>
              <ul className="space-y-2">
                {projectTypes.map((type) => (
                  <li key={type} className="flex items-center gap-2 text-gray-700">
                    <Landmark className="w-4 h-4 text-brand-gold" />
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-8 text-center">
            Commercial Historic Restoration Service Areas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {LOCATIONS.map((location) => (
              <div
                key={location.slug}
                className="bg-gray-50 rounded-lg p-4 text-center"
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
            Commercial Historic Restoration FAQs
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
            Preserve Tampa&apos;s Historic Commercial Buildings
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Historic tax credits, SHPO compliance, and expert restoration.
            Let FCS help you transform a historic property into a profitable investment.
          </p>
          <Link href="/contact/" className="btn-cta">
            Request Historic Restoration Consultation
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