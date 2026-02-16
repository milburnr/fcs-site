"use client";

import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { InternalLinks } from "@/components/InternalLinks";
import { HighLevelForm } from "@/components/HighLevelForm";
import { BUSINESS_INFO, LOCATIONS } from "@/lib/constants";
import Link from "next/link";
import { FadeIn, StaggerContainer } from "@/components/AnimatedElements";
import {
  Shield,
  FileText,
  Scale,
  Flame,
  Droplets,
  Wind,
  AlertTriangle,
  Award,
  Phone,
  CheckCircle,
  Building2,
  Gavel,
  ClipboardCheck,
  Users
} from "lucide-react";

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Insurance Services", href: "/insurance/" },
];

const services = [
  {
    icon: Users,
    title: "Building Consultant",
    href: "/insurance/building-consultant/",
    description: "Expert construction consulting for insurance claims, damage assessment, and repair scope determination. We represent property owners' interests.",
  },
  {
    icon: Award,
    title: "Licensed General Contractor",
    href: "/insurance/licensed-general-contractor/",
    description: "Florida-licensed CBC with 40+ years experience. Prime contractor for large loss restoration—never a subcontractor.",
  },
  {
    icon: ClipboardCheck,
    title: "Certified Estimating",
    href: "/insurance/certified-estimating/",
    description: "Xactimate-certified estimates for insurance claims. Detailed, defensible documentation that ensures fair settlements.",
  },
  {
    icon: Scale,
    title: "Appraisal & Arbitration",
    href: "/insurance/appraisal-arbitration/",
    description: "Insurance claim dispute resolution through appraisal and arbitration. We advocate for property owners' rightful settlements.",
  },
  {
    icon: Flame,
    title: "Fire Restoration",
    href: "/insurance/fire-restoration/",
    description: "Complete fire damage restoration including structural repairs, smoke remediation, content cleaning, and reconstruction.",
  },
  {
    icon: Droplets,
    title: "Water Restoration",
    href: "/insurance/water-restoration/",
    description: "Water and flood damage restoration for commercial and residential properties. Extraction, drying, mold prevention, and repairs.",
  },
  {
    icon: Wind,
    title: "Hurricane Restoration",
    href: "/insurance/hurricane-restoration/",
    description: "Storm and hurricane damage restoration. storm response, structural repairs, roof systems, and complete rebuilds.",
  },
  {
    icon: AlertTriangle,
    title: "Mold Remediation",
    href: "/insurance/mold-remediation/",
    description: "Professional mold assessment, containment, removal, and remediation. Certified protocols that meet insurance requirements.",
  },
  {
    icon: Gavel,
    title: "Expert Witness",
    href: "/expert-witness/",
    description: "Construction expert witness testimony for litigation, arbitration, and dispute resolution. 40+ years of credible expertise.",
  },
];

const stats = [
  { value: "40+", label: "Years Experience" },
  { value: "300+", label: "Projects Completed" },
  { value: "$25M+", label: "Claims Handled" },
  { value: "100%", label: "Prime Contractor" },
];

const relatedLinks = [
  { href: "/insurance/guides/", label: "Insurance Guides & Articles" },
  { href: "/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/commercial/", label: "Commercial Construction" },
  { href: "/about/", label: "About FCS" },
  { href: "/contact/", label: "Contact Us" },
];

export function InsurancePageClient() {
  return (
    <>
      <LocalBusinessSchema service="Insurance Restoration Services" />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-repeat" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumb items={breadcrumbItems} className="mb-8 text-gray-300" />

          <div className="max-w-4xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 px-4 py-2 rounded-full mb-6">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-blue-200 font-medium">Large Loss Specialists</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Insurance Restoration Services
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Prime contractor for large loss commercial and residential insurance claims.
                From damage assessment to complete restoration—we represent property owners' interests.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-gray-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 border border-white/30"
                >
                  Request Consultation
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Insurance Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Full-service insurance restoration from initial assessment through complete reconstruction.
                We work directly with carriers while protecting your interests.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <FadeIn key={index}>
                <Link
                  href={service.href}
                  className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-green/30 h-full flex flex-col"
                >
                  <div className="w-14 h-14 rounded-full bg-brand-green/10 flex items-center justify-center mb-4 group-hover:bg-brand-green/20 transition-colors">
                    <service.icon className="w-7 h-7 text-brand-green-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-green-dark transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-4 text-brand-green font-semibold flex items-center gap-2">
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why FCS Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Property Owners Choose FCS
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Insurance companies have teams of adjusters, engineers, and attorneys.
                  You deserve the same level of expertise on your side. FCS provides:
                </p>
                <ul className="space-y-4">
                  {[
                    "Always the prime contractor—never a subcontractor",
                    "In-house engineer and architectural draftsman",
                    "Xactimate-certified estimators",
                    "40+ years of large loss experience",
                    "Direct communication with adjusters and carriers",
                    "Licensed Florida Certified Building Contractor (CBC1262722)",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Large Loss Specialists
                </h3>
                <p className="text-gray-600 mb-6">
                  We focus on substantial insurance claims—typically $250,000 and above.
                  Our expertise includes commercial properties, multi-family buildings,
                  and high-value residential estates.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Building2 className="w-8 h-8 text-brand-green-dark mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Commercial</div>
                    <div className="text-sm text-gray-500">$500K - $25M+</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Shield className="w-8 h-8 text-brand-green-dark mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Residential</div>
                    <div className="text-sm text-gray-500">$250K+</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-green-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Insurance Restoration Help?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Don't navigate the claims process alone. Contact FCS for a consultation
              and let our 40+ years of experience work for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-gray-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 border border-white/30"
              >
                Request Consultation
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <HighLevelForm variant="commercial" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Insurance Restoration Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Insurance Restoration Service Areas
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            FCS provides large loss insurance restoration throughout Tampa Bay.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {LOCATIONS.map((location) => {
              const urlSlug = location.slug.replace('-fl', '');
              return (
                <Link
                  key={location.slug}
                  href={`/insurance-restoration-${urlSlug}/`}
                  className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all hover:bg-brand-green-dark hover:text-white group"
                >
                  <span className="font-semibold text-brand-green-dark group-hover:text-white transition-colors">
                    {location.name}, FL
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <InternalLinks title="Related Services" links={relatedLinks} />
        </div>
      </section>
    </>
  );
}
