import type { Metadata } from "next";
import Link from "next/link";
import {
  Waves,
  CheckCircle,
  Anchor,
  Shield,
  ArrowRight,
  Phone,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema"
import { Breadcrumb } from "@/components/Breadcrumb";
import { BackToHub } from "@/components/BackToHub";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Waterfront Home Construction Tampa | Seawall & Coastal Resilience | FCS",
  description:
    "Luxury waterfront home construction in Tampa Bay. Seawall coordination, marine-grade materials, flood zone compliance. Davis Islands, Harbour Island specialists.",
  keywords:
    "waterfront home construction Tampa, seawall construction, coastal home builder, Davis Islands builder, flood zone construction, marine-grade materials",
};

const features = [
  {
    title: "Seawall Coordination",
    description: "Expert coordination with seawall contractors for new construction and repairs",
    icon: Anchor,
  },
  {
    title: "Marine-Grade Materials",
    description: "Salt-resistant finishes, stainless hardware, and materials built for coastal exposure",
    icon: Shield,
  },
  {
    title: "Flood Zone Expertise",
    description: "FEMA compliance, elevation certificates, and breakaway wall construction",
    icon: Waves,
  },
  {
    title: "Hurricane Resilience",
    description: "Impact windows, reinforced construction, and wind-resistant design",
    icon: CheckCircle,
  },
];

const premiumLocations = [
  { name: "Davis Islands", description: "Tampa's most exclusive island community" },
  { name: "Harbour Island", description: "Downtown waterfront living" },
  { name: "Beach Park", description: "Bayshore Boulevard prestige" },
  { name: "Culbreath Isles", description: "Private waterfront enclave" },
  { name: "Apollo Beach", description: "Growing waterfront community" },
  { name: "Clearwater Beach", description: "Gulf Coast luxury" },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Waterfront Homes", href: "/waterfront-homes/" },
];


const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/services/residential/waterfront-homes/", label: "Waterfront Home Construction" },
  { href: "/services/residential/home-additions/", label: "Home Additions" },
  { href: "/services/residential/hurricane-resistant-construction/", label: "Hurricane-Resistant Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function WaterfrontHomesPage() {
  const breadcrumbItems = [
    { name: "Residential Services", href: "/residential/" },
    { name: "Waterfront Resilience", href: "/residential/waterfront-homes/" },
  ];

  return (
    <>
      <LocalBusinessSchema schemaType="HomeAndConstructionBusiness" service="Waterfront Home Construction" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Waterfront Home Construction"
        serviceDescription="Luxury waterfront home construction with seawall coordination and coastal resilience in Tampa Bay"
        minPrice="1000000"
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
              <Waves className="w-10 h-10 text-white" />
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-bold">
                RESIDENTIAL
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              Waterfront Home Construction Tampa | Coastal Resilience Specialists
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Build your waterfront dream home with experts who understand
              Tampa Bay&apos;s unique coastal challenges. From seawall coordination
              to hurricane resilience, we build homes that stand the test of time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-green-dark text-white font-bold rounded-full hover:bg-brand-green transition-all"
              >
                Schedule Waterfront Consultation
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
            Waterfront Construction Expertise
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

      {/* Seawall Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-6">
                Seawall Coordination for New Construction
              </h2>
              <p className="text-gray-600 mb-6">
                Building on Tampa Bay&apos;s waterfront requires careful coordination
                with seawall infrastructure. Whether you&apos;re building behind an
                existing seawall or need new construction, we manage the entire process.
              </p>
              <div className="space-y-4">
                {[
                  "Assessment of existing seawall condition",
                  "Coordination with marine contractors for repairs or new installation",
                  "Proper setbacks and foundation design",
                  "Drainage and stormwater management",
                  "Living shoreline alternatives where appropriate",
                  "Permitting through SWFWMD and Army Corps",
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
                Marine-Grade Construction
              </h3>
              <p className="text-gray-600 mb-4">
                Salt air, humidity, and storm exposure demand materials built for
                coastal environments:
              </p>
              <ul className="space-y-2">
                {[
                  "316 stainless steel hardware",
                  "Fiber cement and PVC trim",
                  "Epoxy-coated rebar",
                  "Impact-rated windows and doors",
                  "Salt-resistant exterior finishes",
                  "Elevated HVAC equipment",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <Anchor className="w-4 h-4 text-brand-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Locations */}
      <section className="py-16 bg-brand-gold-bg">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-8 text-center">
            Tampa Bay&apos;s Premier Waterfront Communities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumLocations.map((location) => (
              <div
                key={location.name}
                className="bg-white rounded-xl p-6 text-center shadow-sm"
              >
                <Waves className="w-8 h-8 text-brand-gold mx-auto mb-3" />
                <h3 className="font-bold text-brand-green-dark mb-1">{location.name}</h3>
                <p className="text-sm text-gray-600">{location.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-gold">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-heading">
            Build Your Waterfront Legacy
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From Davis Islands to Clearwater Beach, FCS builds waterfront homes
            designed to withstand Tampa Bay&apos;s unique coastal environment.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-green-dark text-white font-bold rounded-full hover:bg-brand-green transition-all"
          >
            Schedule Waterfront Consultation
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