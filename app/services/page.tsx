import Link from "next/link";
import { Building2, Home, ShieldCheck, Landmark, Droplets, ArrowRight, Phone } from "lucide-react";
import { BUSINESS_INFO, SERVICES, OTHER_SERVICES } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa Construction Services",
  description: "We deliver professional and reliable construction services for commercial and residential properties. Our team specializes in custom building, renovations, historic restoration, and disaster recovery.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Home,
  ShieldCheck,
  Landmark,
  Droplets,
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
];


const internalLinks = [
  { href: "/services/", label: "Our Construction Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/residential/", label: "Residential Construction" },
  { href: "/about/", label: "About Florida Construction Specialists" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function ServicesPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-brand-green-dark to-brand-green-forest">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa Construction Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            We deliver professional and reliable construction services for commercial
            and residential properties throughout the Tampa Bay area.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon] || Building2;
              return (
                <Link
                  key={service.slug}
                  href={`/${service.slug}/`}
                  className="service-card group"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-green-bg flex items-center justify-center mb-4 group-hover:bg-brand-green transition-colors">
                    <Icon className="w-8 h-8 text-brand-green-dark group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green-dark mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="inline-flex items-center text-brand-green font-semibold">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="section-light">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OTHER_SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}/`}
                className="card-hover flex items-center gap-4 p-6"
              >
                <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      
      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Services"
            links={internalLinks}
          />
        </div>
      </section>

<section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation on your construction needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>
</>
  );
}
