import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO, LOCATIONS } from "@/lib/constants";
import { ContactFormSwitcher } from "@/components/ContactFormSwitcher";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { InternalLinks } from "@/components/InternalLinks";
import { FadeIn } from "@/components/AnimatedElements";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/contact/' },
  title: "Contact Florida Construction Specialists",
  description:
    "Contact FCS to discuss your commercial or residential construction project in Tampa Bay. 40+ years experience, $500K-$25M+ projects.",
  openGraph: {
    title: "Contact Florida Construction Specialists",
    description: "Contact FCS to discuss your commercial or residential construction project in Tampa Bay. 40+ years experience, $500K-$25M+ projects.",
    url: "https://floridaconstructionspecialists.com/contact/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact/" },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Breadcrumb items={breadcrumbItems} />

      {/* Compact Hero */}
      <section className="relative py-16 bg-gradient-to-br from-brand-green-dark to-brand-green-forest">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Let&apos;s Discuss Your Project
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200 mb-6">
            Whether you are managing a $500K condo restoration or planning a $25M commercial
            build, our team is ready to discuss your project scope, timeline, and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-white font-bold rounded-full hover:bg-brand-gold-dark transition-all"
            >
              <Phone className="w-5 h-5" />
              {BUSINESS_INFO.phone}
            </a>
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all"
            >
              Send a Message
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Two-Column: Trust Content + Form */}
      <section id="contact-form" className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Column - Trust Content (60%) */}
            <div className="lg:col-span-3">
              <FadeIn>
                <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                  Start With a Project Consultation
                </h2>
                <p className="text-gray-600 mb-2">
                  Florida Construction Specialists handles large-scale construction projects across Tampa Bay,
                  from commercial builds and multi-family developments to insurance restoration and luxury
                  custom homes. If you are a property developer, facility manager, HOA board member,
                  insurance professional, or homeowner planning a significant project, we are ready to help.
                </p>
                <p className="text-gray-600 mb-8">
                  Reach out by phone for an immediate conversation, or use the form to describe your project
                  and a member of our team will respond within one business day.
                </p>
              </FadeIn>

              {/* Contact Details */}
              <FadeIn delay={0.1}>
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-brand-green-dark" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-green-dark mb-1">Phone</h3>
                      <a
                        href={`tel:${BUSINESS_INFO.phoneRaw}`}
                        className="text-gray-600 hover:text-brand-green transition-colors"
                      >
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-brand-green-dark" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-green-dark mb-1">Email</h3>
                      <a
                        href={`mailto:${BUSINESS_INFO.email}`}
                        className="text-gray-600 hover:text-brand-green transition-colors"
                      >
                        {BUSINESS_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-brand-green-dark" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-green-dark mb-1">Location</h3>
                      <p className="text-gray-600">
                        {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-brand-green-dark" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-green-dark mb-1">Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: {BUSINESS_INFO.hours.weekdays}
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* What to Expect */}
              <FadeIn delay={0.2}>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-4 font-heading">
                    What to Expect
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <p className="text-gray-600 text-sm">
                        <strong className="text-brand-green-dark">Initial project discussion</strong> -- We will listen to your goals, review preliminary plans, and understand your timeline and budget parameters.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <p className="text-gray-600 text-sm">
                        <strong className="text-brand-green-dark">Scope assessment</strong> -- Our team evaluates project feasibility, identifies potential challenges, and outlines the approach best suited to your needs.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <p className="text-gray-600 text-sm">
                        <strong className="text-brand-green-dark">Preliminary timeline</strong> -- We provide realistic schedule expectations based on project scope, permitting requirements, and resource availability.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <p className="text-gray-600 text-sm">
                        <strong className="text-brand-green-dark">Proposal process</strong> -- For qualified projects, we develop a detailed proposal including scope of work, budget, and project schedule.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Trust Signals */}
              <FadeIn delay={0.3}>
                <p className="text-sm text-gray-500">
                  Since 1982 | Licensed {BUSINESS_INFO.licenseNumber} | In-House Engineering | 300+ Completed Projects
                </p>
              </FadeIn>
            </div>

            {/* Right Column - Form (40%) */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-2xl p-6 shadow-lg sticky top-8">
                <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading text-center">
                  Request a Consultation
                </h2>
                <ContactFormSwitcher />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Coverage */}
      <section className="section-light">
        <div className="container-custom">
          <FadeIn>
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 text-center font-heading">
              Tampa Bay Service Area
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-6 text-center">
                Florida Construction Specialists serves the greater Tampa Bay region, covering
                Hillsborough, Pinellas, Pasco, Manatee, and Sarasota counties. Our projects span
                the full corridor from Clearwater and St. Petersburg through Tampa and Lakeland
                to Sarasota and Bradenton. We also take on select projects throughout Florida
                and the Southeast for the right opportunities.{" "}
                <Link href="/locations/" className="text-brand-green font-semibold hover:text-brand-green-dark transition-colors">
                  View full service area details
                </Link>.
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-3">
            {LOCATIONS.map((location) => {
              const urlSlug = location.slug.replace('-fl', '');
              return (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}/`}
                  className="px-4 py-2 bg-white rounded-full text-brand-green-dark font-medium shadow hover:bg-brand-green hover:text-white transition-colors"
                >
                  {location.name}, FL
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            links={[
              { href: "/services/", label: "Our Services" },
              { href: "/commercial/", label: "Commercial Construction" },
              { href: "/residential/", label: "Residential Construction" },
              { href: "/insurance/", label: "Insurance Restoration" },
              { href: "/locations/", label: "Service Areas" },
            ]}
            title="Explore Our Services"
          />
        </div>
      </section>
    </>
  );
}
