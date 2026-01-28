import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  CheckCircle,
  AlertTriangle,
  Calculator,
  ArrowRight,
  Phone,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema"
import { Breadcrumb } from "@/components/Breadcrumb";
import { BackToHub } from "@/components/BackToHub";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "FEMA Compliance Tampa | 50% Rule & Flood Zone Construction | FCS",
  description:
    "FEMA 50% rule specialists in Tampa Bay. Substantial improvement calculations, flood zone VE vs AE, elevation certificates, breakaway wall construction.",
  keywords:
    "FEMA 50% rule Tampa, substantial improvement, flood zone construction, elevation certificate, breakaway walls, VE flood zone, AE flood zone",
};

const features = [
  {
    title: "50% Rule Calculations",
    description: "Accurate substantial improvement calculations to determine compliance requirements",
    icon: Calculator,
  },
  {
    title: "Flood Zone Expertise",
    description: "Deep knowledge of VE, AE, and X zone requirements and construction techniques",
    icon: Shield,
  },
  {
    title: "Elevation Strategies",
    description: "Cost-effective approaches to elevating existing structures",
    icon: AlertTriangle,
  },
  {
    title: "Breakaway Walls",
    description: "Compliant breakaway wall construction for coastal high hazard areas",
    icon: CheckCircle,
  },
];

const floodZones = [
  {
    zone: "VE (Coastal High Hazard)",
    description: "Highest risk - wave action possible",
    requirements: "Elevation on open foundations, breakaway walls below BFE",
  },
  {
    zone: "AE (100-Year Flood)",
    description: "High risk - 1% annual flood chance",
    requirements: "Lowest floor at or above BFE, flood-resistant materials below",
  },
  {
    zone: "X (Shaded)",
    description: "Moderate risk - 500-year floodplain",
    requirements: "Flood insurance recommended, elevation may reduce premiums",
  },
  {
    zone: "X (Unshaded)",
    description: "Minimal risk",
    requirements: "Standard construction, flood insurance optional",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Fema Compliance", href: "/fema-compliance/" },
];


const internalLinks = [
  { href: "/services/", label: "Our Construction Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/residential/", label: "Residential Construction" },
  { href: "/about/", label: "About Florida Construction Specialists" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function FEMACompliancePage() {
  const breadcrumbItems = [
    { name: "Residential Services", href: "/residential/" },
    { name: "FEMA Compliance", href: "/residential/fema-compliance/" },
  ];

  return (
    <>
      <LocalBusinessSchema schemaType="HomeAndConstructionBusiness" service="FEMA Compliance Construction" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="FEMA Compliance & Flood Zone Construction"
        serviceDescription="FEMA 50% rule compliance, flood zone construction, and elevation services in Tampa Bay"
        minPrice="250000"
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
              <Shield className="w-10 h-10 text-white" />
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-bold">
                RESIDENTIAL
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              FEMA Compliance Tampa | 50% Rule & Flood Zone Specialists
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Navigate Tampa Bay&apos;s complex flood zone regulations with experts
              who understand the FEMA 50% rule, substantial improvement requirements,
              and compliant construction techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-green-dark text-white font-bold rounded-full hover:bg-brand-green transition-all"
              >
                Request FEMA Consultation
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
            FEMA Compliance Services
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

      {/* 50% Rule Explanation */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-6 text-center">
              Understanding the FEMA 50% Rule
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <p className="text-lg text-gray-600 mb-6">
                The <strong>50% Rule</strong> (Substantial Improvement) states that if
                the cost of improvements equals or exceeds 50% of the building&apos;s
                market value, the <em>entire</em> structure must be brought into compliance
                with current flood regulations.
              </p>
              <div className="bg-brand-gold-bg rounded-lg p-6">
                <h3 className="font-bold text-brand-green-dark mb-2">The Formula:</h3>
                <p className="text-gray-700 font-mono">
                  Improvement Cost ÷ Market Value = Substantial Improvement %
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  If ≥ 50%, full compliance required (typically elevation to BFE)
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-brand-green-dark mb-4">What Counts as Improvement?</h3>
                <ul className="space-y-2">
                  {[
                    "Additions and expansions",
                    "Kitchen and bath remodels",
                    "New roofing",
                    "HVAC replacement",
                    "Electrical upgrades",
                    "Structural repairs",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-brand-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-brand-green-dark mb-4">What&apos;s Excluded?</h3>
                <ul className="space-y-2">
                  {[
                    "Landscaping and fencing",
                    "Detached structures",
                    "Plans and permits (sometimes)",
                    "Furniture and appliances",
                    "Code-required safety upgrades",
                    "Flood damage repairs (may vary)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-brand-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flood Zones */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-8 text-center">
            Tampa Bay Flood Zones Explained
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {floodZones.map((zone) => (
              <div
                key={zone.zone}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="font-bold text-brand-green-dark mb-2">{zone.zone}</h3>
                <p className="text-sm text-gray-500 mb-2">{zone.description}</p>
                <p className="text-sm text-gray-700">
                  <strong>Requirements:</strong> {zone.requirements}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-6">
                How We Help with FEMA Compliance
              </h2>
              <div className="space-y-4">
                {[
                  "Substantial improvement calculations before you commit to a project",
                  "Strategic phasing to stay under 50% threshold when possible",
                  "Elevation design for homes that must be raised",
                  "Breakaway wall construction for VE zones",
                  "Flood vent installation for enclosed areas",
                  "Elevation certificate coordination",
                  "LOMA/LOMR applications when appropriate",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Before You Renovate...
              </h3>
              <p className="text-gray-600 mb-6">
                Understanding your flood zone and the 50% rule <em>before</em> you
                start planning can save hundreds of thousands of dollars. Contact
                us for a pre-project FEMA consultation.
              </p>
              <Link
                href="/contact/"
                className="block w-full py-3 bg-brand-gold text-white font-bold rounded-lg text-center hover:bg-brand-gold-dark transition-colors"
              >
                Request 50% Rule Analysis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-gold">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-heading">
            Don&apos;t Let FEMA Rules Surprise You
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Understand your flood zone obligations before you start your project.
            FCS helps Tampa Bay homeowners navigate FEMA compliance with confidence.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-green-dark text-white font-bold rounded-full hover:bg-brand-green transition-all"
          >
            Schedule FEMA Compliance Consultation
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