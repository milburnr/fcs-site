import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Building2, Shield, Award, Clock, CheckCircle, TrendingUp, Home, Hammer, Waves } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { GoogleMap } from "@/components/GoogleMap";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bradenton Commercial Construction Contractor | $500K-$50M+ Projects | FCS",
  description: "Premier general contractor serving Bradenton, FL. Commercial construction, multi-family residential, disaster recovery. Growing market expertise. $10M+ bonding. Call (813) 420-7561.",
  keywords: "commercial construction bradenton, bradenton general contractor, disaster recovery bradenton fl, construction company bradenton florida",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations/" },
  { name: "Bradenton, FL", href: "/locations/bradenton-fl/" },
];

const services = [
  {
    title: "Commercial Construction",
    description: "Office buildings, retail centers, medical facilities, and mixed-use developments throughout Bradenton and Manatee County.",
    icon: Building2,
    href: "/services/commercial/",
  },
  {
    title: "Multi-Family Development",
    description: "Apartment complexes, condominiums, and townhome communities serving Bradenton's growing residential market.",
    icon: TrendingUp,
    href: "/services/commercial/multi-family/",
  },
  {
    title: "Disaster Recovery",
    description: "Hurricane, storm, and flood damage restoration for commercial and residential properties. 24/7 emergency response throughout Manatee County.",
    icon: Shield,
    href: "/services/disaster-recovery/",
  },
  {
    title: "Residential Construction",
    description: "Luxury custom homes, waterfront properties, home additions, and major renovations for Bradenton's diverse residential communities.",
    icon: Home,
    href: "/services/residential/",
  },
];

const faqs = [
  {
    question: "Do you serve Bradenton, FL?",
    answer: "Yes, Florida Construction Specialists proudly serves Bradenton and all of Manatee County. Bradenton's significant commercial and residential growth creates strong demand for quality construction services. We maintain strong relationships with Manatee County building departments and understand the specific requirements for construction in this growing market."
  },
  {
    question: "What types of construction projects do you handle in Bradenton?",
    answer: "In Bradenton, we handle commercial construction, multi-family developments, disaster recovery, luxury custom homes, balcony reconstruction, and exterior waterproofing. Given Bradenton's growth, we have particular expertise in multi-family residential and commercial development. Project values typically range from $250,000 to $50 million or more."
  },
  {
    question: "How far is your office from Bradenton?",
    answer: "Our headquarters at 822 Bayview Dr, Ruskin, FL is approximately 30-35 minutes from Bradenton. This proximity allows us to provide efficient project management and regular site visits. Bradenton is a key market in our southern Tampa Bay service area."
  },
  {
    question: "Do you work on multi-family projects in Bradenton?",
    answer: "Yes, Bradenton's population growth has created strong demand for multi-family housing. We build apartment complexes, condominiums, and townhome communities throughout Manatee County. Our $10M+ bonding capacity enables multi-family projects at any scale, and we understand the specific requirements for these developments including accessibility compliance and efficient unit layouts."
  },
  {
    question: "What is the Bradenton building permit process?",
    answer: "Bradenton construction projects require permits through either Manatee County Building and Development Services or the City of Bradenton, depending on location. Our team has experience navigating both jurisdictions including site plan reviews, environmental considerations, and standard commercial/residential permits. We handle all applications and ensure full code compliance."
  },
  {
    question: "Do you provide disaster recovery services in Bradenton?",
    answer: "Yes, we provide comprehensive disaster recovery services throughout Bradenton and Manatee County. The Gulf Coast location makes hurricane preparedness critical. With Frank Bragano's 43+ years of insurance claims expertise, we specialize in large loss restoration and work directly with insurance carriers on complex claims."
  },
  {
    question: "What areas near Bradenton do you also serve?",
    answer: "In addition to Bradenton, we serve all of Manatee County including Palmetto, Ellenton, Lakewood Ranch, and Anna Maria Island. We also serve Sarasota to the south and the entire Tampa Bay region to the north including Tampa, St. Petersburg, and our Ruskin headquarters area."
  },
  {
    question: "Are you licensed for commercial construction in Bradenton?",
    answer: "Yes, Florida Construction Specialists holds Florida General Contractor License #CBC1262722, which allows us to work on commercial and residential projects of any size throughout Florida, including Bradenton. We carry $10M+ bonding capacity, comprehensive general liability insurance, and workers' compensation coverage."
  },
  {
    question: "What size projects do you typically handle in Bradenton?",
    answer: "We specialize in large-scale projects ranging from $250,000 to $50 million or more. This includes commercial construction, multi-family developments, luxury custom homes, and large loss disaster recovery. As a prime contractor (never a subcontractor), we take full accountability for projects of all sizes in the Bradenton area."
  },
  {
    question: "How do I get started on a project in Bradenton?",
    answer: "Contact us at (813) 420-7561 for a project consultation. We'll discuss your project goals, timeline, and budget, then schedule a site visit. Our team will provide preliminary guidance and develop a detailed proposal for your Bradenton project."
  },
];

const pillarLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/historic-restoration/", label: "Historic Restoration Services" },
];

const nearbyLocationLinks = [
  { href: "/locations/sarasota-fl/", label: "Sarasota, FL" },
  { href: "/locations/st-petersburg-fl/", label: "St. Petersburg, FL" },
  { href: "/locations/clearwater-fl/", label: "Clearwater, FL" },
  { href: "/locations/tampa-fl/", label: "Tampa, FL" },
  { href: "/locations/ruskin-fl/", label: "Ruskin, FL (Headquarters)" },
];

export default function BradentonPage() {
  return (
    <>
      <LocalBusinessSchema city="Bradenton" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Construction Services in Bradenton"
        serviceDescription="Premier general contractor serving Bradenton, FL with commercial construction, multi-family development, disaster recovery, and residential construction. Projects $250K-$50M+."
        minPrice="250000"
      />

      <Breadcrumb items={breadcrumbItems.slice(1)} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/Old/Tampa-Bay-FEATURE.jpg"
            alt="Tampa Bay area commercial construction"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Bradenton, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Bradenton Commercial & Multi-Family Construction Contractor
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Historic city experiencing significant commercial and residential growth. Florida Construction Specialists delivers large-scale commercial and residential construction throughout Bradenton and Manatee County.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              From multi-family developments to commercial projects serving Bradenton&apos;s growth, we bring 20+ years of experience and $10M+ bonding capacity to every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule Project Consultation
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="btn-secondary flex items-center justify-center gap-2"
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
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center">
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">30-35 Min from HQ</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">$10M+ Bonding</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Hammer className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Prime Contractor</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Construction Services in Bradenton
            </h2>
            <p className="text-gray-600 mb-6">
              Bradenton and Manatee County represent one of Florida&apos;s fastest-growing markets. Strong population growth, expanding commercial corridors, and waterfront development create diverse construction opportunities.
            </p>
            <p className="text-gray-600 mb-8">
              Florida Construction Specialists brings the expertise and bonding capacity to serve Bradenton&apos;s growing market. Whether you&apos;re developing multi-family housing to meet population growth, building commercial property, restoring hurricane damage, or constructing a custom waterfront home, FCS delivers on time and on budget.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="border border-gray-200 rounded-lg p-6 hover:border-brand-green hover:shadow-md transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Projects Gallery */}
            <h3 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">
              Featured Projects Near This Location
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
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
                  src="/wp-content/uploads/2023/12/Old/custom-home-construction-2.jpg"
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
                  src="/wp-content/uploads/2023/12/Ian-2.jpg"
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

      {/* Why Choose FCS for Bradenton */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Bradenton Chooses FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Growth Market Expertise</h3>
              <p className="text-gray-600 text-sm">
                Bradenton&apos;s rapid growth requires construction partners who understand multi-family development, commercial expansion, and the pace of growth market construction.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Waves className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Coastal Knowledge</h3>
              <p className="text-gray-600 text-sm">
                Bradenton&apos;s Gulf Coast location and waterfront properties require coastal construction expertise. We understand FEMA requirements, hurricane-resistant techniques, and marine environments.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Storm Recovery</h3>
              <p className="text-gray-600 text-sm">
                Bradenton&apos;s coastal exposure makes hurricane preparedness essential. Frank Bragano&apos;s 43+ years of insurance expertise ensures faster claims resolution and quality restoration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bradenton Map */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Serving Bradenton, Florida
          </h2>
          <GoogleMap city="Bradenton" height={400} />
        </div>
      </section>

      {/* Bradenton Market Info */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Bradenton Construction Market
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Commercial & Multi-Family</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Downtown Bradenton commercial development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Multi-family residential developments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Lakewood Ranch area construction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Medical and professional offices</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Residential & Recovery</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Waterfront custom homes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Anna Maria Island properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Hurricane and storm damage restoration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Large loss insurance restoration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={faqs}
        title="Bradenton Construction FAQs"
        description="Common questions about construction services in Bradenton, FL."
      />

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <InternalLinks
              title="Our Construction Services"
              links={pillarLinks}
            />
            <div className="mt-8">
              <InternalLinks
                title="Nearby Service Areas"
                links={nearbyLocationLinks}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Start Your Bradenton Project Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. Our growth market expertise ensures your Bradenton project meets timeline and budget expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Consultation
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
