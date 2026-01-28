import type { Metadata } from "next";
import Link from "next/link";
import {
  Landmark,
  CheckCircle,
  FileText,
  Home,
  ArrowRight,
  Phone,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema"
import { Breadcrumb } from "@/components/Breadcrumb";
import { BackToHub } from "@/components/BackToHub";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Historic Home Preservation Tampa | Hyde Park & South Tampa | FCS",
  description:
    "Residential historic preservation in Tampa Bay. Hyde Park ARC compliance, South Tampa historic districts, period-accurate restoration. Certificate of appropriateness specialists.",
  keywords:
    "historic home preservation Tampa, Hyde Park renovation, South Tampa historic homes, certificate of appropriateness, ARC guidelines Tampa",
};

const features = [
  {
    title: "ARC Compliance",
    description: "Navigate Hyde Park and South Tampa Architectural Review Committee requirements",
    icon: FileText,
  },
  {
    title: "Period Restoration",
    description: "Authentic restoration using traditional materials and techniques",
    icon: Landmark,
  },
  {
    title: "Modern Integration",
    description: "Sensitively integrate modern systems while preserving historic character",
    icon: Home,
  },
  {
    title: "Material Sourcing",
    description: "Access to period-appropriate materials for authentic restoration",
    icon: CheckCircle,
  },
];

const historicDistricts = [
  { name: "Hyde Park", period: "1880s-1930s", style: "Bungalow, Mediterranean Revival, Colonial Revival" },
  { name: "Seminole Heights", period: "1910s-1940s", style: "Craftsman, Colonial Revival, Mediterranean" },
  { name: "Palma Ceia", period: "1920s-1940s", style: "Mediterranean Revival, Spanish Colonial" },
  { name: "Beach Park", period: "1920s-1950s", style: "Mediterranean, Ranch, Mid-Century Modern" },
  { name: "Tampa Heights", period: "1880s-1920s", style: "Victorian, Craftsman, Colonial" },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Historic Preservation", href: "/historic-preservation/" },
];


const internalLinks = [
  { href: "/services/historic-restoration/", label: "Historic Restoration Services" },
  { href: "/services/historic-restoration/shpo-compliance/", label: "SHPO Compliance" },
  { href: "/services/historic-restoration/historic-tax-credits/", label: "Historic Tax Credits" },
  { href: "/services/historic-restoration/material-sourcing/", label: "Historic Material Sourcing" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function HistoricPreservationPage() {
  const breadcrumbItems = [
    { name: "Residential Services", href: "/residential/" },
    { name: "Historic Preservation", href: "/residential/historic-preservation/" },
  ];

  return (
    <>
      <LocalBusinessSchema schemaType="HomeAndConstructionBusiness" service="Historic Home Preservation" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Residential Historic Preservation"
        serviceDescription="Hyde Park and South Tampa historic home preservation with ARC compliance"
        minPrice="500000"
      />

      <Breadcrumb items={breadcrumbItems} />

      <div className="container-custom py-8">
        <BackToHub silo="residential" />
      </div>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-brand-gold via-brand-gold-dark to-brand-gold">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Landmark className="w-10 h-10 text-white" />
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-bold">
                RESIDENTIAL
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              Historic Home Preservation Tampa | Hyde Park & South Tampa Specialists
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Preserve the character of Tampa&apos;s most cherished historic homes
              while adding modern comfort. From Hyde Park bungalows to Seminole
              Heights craftsmans, we restore homes to their original glory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-green-dark text-white font-bold rounded-full hover:bg-brand-green transition-all"
              >
                Schedule Historic Consultation
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
            Historic Preservation Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-gray-50 rounded-xl p-6">
                  <Icon className="w-10 h-10 text-brand-gold mb-4" />
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

      {/* Certificate of Appropriateness */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-6">
                Navigating the Certificate of Appropriateness
              </h2>
              <p className="text-gray-600 mb-6">
                Work in Tampa&apos;s historic districts requires approval from
                Architectural Review Committees. A Certificate of Appropriateness
                ensures your project preserves the neighborhood&apos;s historic character.
              </p>
              <div className="space-y-4">
                {[
                  "Pre-application consultation with ARC staff",
                  "Historical research and documentation",
                  "Design that respects the Secretary of Interior's Standards",
                  "Material specifications and samples",
                  "Presentation at ARC hearings",
                  "Coordination with city historic preservation office",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">
                What Requires ARC Approval?
              </h3>
              <ul className="space-y-2">
                {[
                  "Exterior alterations visible from the street",
                  "Window and door replacements",
                  "Roof material changes",
                  "Additions and new construction",
                  "Demolition (even partial)",
                  "Fence and landscape changes",
                  "Paint color changes (some districts)",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <FileText className="w-4 h-4 text-brand-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Historic Districts */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-8 text-center">
            Tampa&apos;s Historic Districts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {historicDistricts.map((district) => (
              <div
                key={district.name}
                className="bg-gray-50 rounded-xl p-6"
              >
                <Landmark className="w-8 h-8 text-brand-gold mb-3" />
                <h3 className="font-bold text-brand-green-dark mb-1">{district.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{district.period}</p>
                <p className="text-sm text-gray-600">{district.style}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-gold">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-heading">
            Preserve Your Historic Home&apos;s Legacy
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From Hyde Park to Seminole Heights, FCS helps homeowners navigate
            historic preservation requirements while creating modern, livable spaces.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-green-dark text-white font-bold rounded-full hover:bg-brand-green transition-all"
          >
            Schedule Historic Preservation Consultation
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