import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, ArrowRight, Building2, Shield, Award, Home, Hammer, History, AlertTriangle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQ } from "@/components/FAQ";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { GoogleMap } from "@/components/GoogleMap";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lakeland Commercial Restoration | $500K-$25M+ | FCS",
  description: "Premier general contractor serving Lakeland, FL. Commercial construction, multi-family residential, disaster recovery, historic restoration. Always the prime contractor. Call (813) 420-7561.",
  keywords: [
    "Lakeland commercial construction",
    "Lakeland general contractor",
    "construction company Lakeland FL",
    "commercial contractor Lakeland",
    "disaster recovery Lakeland",
  ],
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations/" },
  { name: "Lakeland, FL", href: "/locations/lakeland-fl/" },
];

const faqs = [
  {
    question: "Do you serve Lakeland, FL?",
    answer: "Yes, Florida Construction Specialists proudly serves Lakeland and the surrounding Polk County area. We have completed numerous commercial and residential projects in Lakeland and maintain strong relationships with local building departments and subcontractors."
  },
  {
    question: "What types of construction projects do you handle in Lakeland?",
    answer: "In Lakeland, we handle commercial construction, multi-family residential, disaster recovery, historic restoration, luxury custom homes, balcony reconstruction, and exterior waterproofing. Project values typically range from $500,000 to $25 million or more."
  },
  {
    question: "Are you licensed to work in Lakeland?",
    answer: "Yes, Florida Construction Specialists holds Florida General Contractor License CBC1262722 with comprehensive insurance coverage. We are licensed to work throughout the state including Lakeland and all Tampa Bay communities."
  },
  {
    question: "What is your typical project size in Lakeland?",
    answer: "We specialize in large-scale projects in Lakeland ranging from $500,000 to $25 million or more. This includes commercial construction, multi-family residential, historic restoration, and large loss insurance restoration projects."
  },
  {
    question: "How far is Lakeland from your office?",
    answer: "Lakeland is approximately 45 minutes from our Ruskin headquarters, making it well within our primary service area. Our project teams regularly work throughout Polk County and maintain strong local relationships."
  },
  {
    question: "Do you handle insurance restoration claims in Lakeland?",
    answer: "Yes, insurance restoration is one of our specialties. Our principal has 43+ years of insurance industry experience, including work as a commercial adjuster. We understand the claims process and work directly with carriers on large loss projects."
  },
  {
    question: "What commercial industries do you serve in Lakeland?",
    answer: "We serve all commercial sectors in Lakeland including healthcare/medical facilities, retail and hospitality, industrial and warehouse, multi-family residential, educational institutions, and municipal buildings."
  },
  {
    question: "Can you handle historic buildings in Lakeland?",
    answer: "Yes, we have extensive experience with historic restoration including SHPO compliance and Secretary of Interior Standards. We've completed projects on National Register properties throughout the Tampa Bay region."
  },
  {
    question: "What bonding capacity do you have for Lakeland projects?",
    answer: "Florida Construction Specialists maintains 40+ years experience and in-house engineering, enabling us to take on large commercial and multi-family projects in Lakeland that smaller contractors cannot bond."
  },
  {
    question: "How do I get started on a project in Lakeland?",
    answer: "Contact us at (813) 420-7561 for a project consultation. We'll discuss your project goals, timeline, and budget, then provide preliminary guidance on how we can help bring your Lakeland project to life."
  },
];

const serviceLinks = [
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/residential/", label: "Residential Construction" },
  { href: "/services/disaster-recovery/", label: "Disaster Recovery" },
  { href: "/services/historic-restoration/", label: "Historic Restoration" },
  { href: "/commercial-construction-tampa/", label: "Commercial Construction Tampa" },
  { href: "/disaster-recovery-tampa/", label: "Disaster Recovery Tampa" },
];

const nearbyLocationLinks = [
  { href: "/locations/tampa-fl/", label: "Tampa" },
  { href: "/locations/brandon-fl/", label: "Brandon" },
  { href: "/locations/plant-city-fl/", label: "Plant City" },
  { href: "/locations/clearwater-fl/", label: "Clearwater" },
];

export default function LakelandPage() {
  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema city="Lakeland" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        serviceName="Construction Services in Lakeland"
        serviceDescription="Premier general contractor serving Lakeland, FL with commercial construction, multi-family residential, disaster recovery, and historic restoration. Projects from $500K to $25M+."
        minPrice="500000"
      />

      <Breadcrumb items={breadcrumbItems.slice(1)} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Turner AgriCivic Center commercial facility"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 font-semibold">Serving Lakeland, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Lakeland Commercial & Insurance Restoration Contractor
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Growing central Florida city strategically located between Tampa and Orlando. Florida Construction Specialists delivers large-scale commercial and residential construction throughout Lakeland and Polk County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold rounded-lg transition-colors"
              >
                Schedule Project Consultation
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border border-white/30 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-600" />
              <span className="font-semibold text-gray-700">In-House Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-blue-600" />
              <span className="font-semibold text-gray-700">43+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-blue-600" />
              <span className="font-semibold text-gray-700">License: {BUSINESS_INFO.licenseNumber}</span>
            </div>
          </div>
        </div>
      </section>

      {/* About FCS in Lakeland */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Construction Services in Lakeland, FL
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                Florida Construction Specialists is a premier general contractor serving Lakeland with
                large-scale <Link href="/services/commercial/" className="text-blue-600 hover:underline">commercial construction</Link>,
                multi-family residential, <Link href="/services/disaster-recovery/" className="text-blue-600 hover:underline">disaster recovery</Link>,
                <Link href="/services/historic-restoration/" className="text-blue-600 hover:underline">historic restoration</Link>,
                and luxury custom home building. As a prime contractor, we maintain full project control
                and direct accountability on every Lakeland project.
              </p>
              <p className="mb-4">
                Lakeland sits at the heart of Central Florida, positioned strategically between Tampa and Orlando
                along the I-4 corridor. This growing city has seen significant commercial development, and
                Florida Construction Specialists has been proud to contribute to its growth with projects
                ranging from $500,000 to $25 million or more.
              </p>
              <p>
                Our principal, Frank Bragano, brings 43+ years of construction and insurance industry experience
                to every Lakeland project. Whether you're planning a new commercial development, restoring
                property after storm damage, or building a luxury <Link href="/services/residential/" className="text-blue-600 hover:underline">custom home</Link>,
                we deliver the expertise and bonding capacity your project demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Services in Lakeland
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/services/commercial/"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Building2 className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Commercial Construction</h3>
              <p className="text-gray-600 text-sm mb-4">Design-build, medical facilities, retail, industrial, and tenant improvements.</p>
              <span className="text-blue-600 font-semibold text-sm flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/services/residential/"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <Home className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Residential Construction</h3>
              <p className="text-gray-600 text-sm mb-4">Luxury custom homes, additions, renovations, and specialty residential work.</p>
              <span className="text-green-600 font-semibold text-sm flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/services/disaster-recovery/"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                <AlertTriangle className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Disaster Recovery</h3>
              <p className="text-gray-600 text-sm mb-4">Hurricane, water, and fire damage restoration with insurance claim expertise.</p>
              <span className="text-red-600 font-semibold text-sm flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/services/historic-restoration/"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                <History className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Historic Restoration</h3>
              <p className="text-gray-600 text-sm mb-4">SHPO compliance, historic tax credits, and period-accurate restoration.</p>
              <span className="text-amber-600 font-semibold text-sm flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Lakeland Service Area
          </h2>
          <div className="max-w-4xl mx-auto">
            <GoogleMap city="Lakeland" height={400} />
            <p className="text-center text-gray-600 mt-4">
              Serving Lakeland and surrounding Polk County communities. Our Ruskin headquarters is approximately 45 minutes away.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">
              Featured Projects Near This Location
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
                  alt="Commercial construction project in Florida"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Commercial Construction</p>
                  <p className="text-sm text-gray-200">Large-Scale Projects</p>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/images/custom-home-construction-2/custom-home-construction-2-display.webp"
                  alt="Luxury custom home with premium architectural design"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Luxury Custom Home</p>
                  <p className="text-sm text-gray-200">Residential Construction</p>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/images/Ian-2/ian-2-display.webp"
                  alt="Hurricane damage restoration and disaster recovery"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Disaster Recovery</p>
                  <p className="text-sm text-gray-200">Storm Damage Restoration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FCS */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Lakeland Chooses FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Always Prime Contractor</h3>
              <p className="text-gray-600">
                We never work as a subcontractor. Direct accountability and project control on every Lakeland job.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Large-Scale Expertise</h3>
              <p className="text-gray-600">
                Specializing in Lakeland projects from $500K to $25M+. Commercial, multi-family, and luxury residential.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Insurance Industry Background</h3>
              <p className="text-gray-600">
                43+ years of insurance expertise means we understand claims and deliver proper documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Lakeland Construction FAQs
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <InternalLinks title="Our Services" links={serviceLinks} />
            <InternalLinks title="Nearby Locations" links={nearbyLocationLinks} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Lakeland Project Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. Serving Lakeland with projects $500K and above.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold rounded-lg transition-colors"
            >
              Schedule Consultation
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
