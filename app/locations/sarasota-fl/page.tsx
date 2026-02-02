import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Building2, Shield, Award, Clock, CheckCircle, Gem, Home, Hammer, Waves } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { GoogleMap } from "@/components/GoogleMap";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sarasota Commercial Construction Contractor | $500K-$25M+ Projects | FCS",
  description: "Premier general contractor serving Sarasota, FL. Commercial construction, luxury residential, disaster recovery. Coastal expertise. 40+ years experience. Call (813) 420-7561.",
  keywords: "commercial construction sarasota, sarasota general contractor, luxury home builder sarasota fl, disaster recovery sarasota florida",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations/" },
  { name: "Sarasota, FL", href: "/locations/sarasota-fl/" },
];

const services = [
  {
    title: "Commercial Construction",
    description: "Office buildings, retail centers, medical facilities, and mixed-use developments throughout Sarasota's upscale commercial corridors.",
    icon: Building2,
    href: "/services/commercial/",
  },
  {
    title: "Luxury Residential",
    description: "High-end custom homes, waterfront estates, and major renovations for Sarasota's affluent neighborhoods including Longboat Key and Bird Key.",
    icon: Gem,
    href: "/services/residential/",
  },
  {
    title: "Disaster Recovery",
    description: "Hurricane, storm, and flood damage restoration for commercial and residential properties. 24/7 emergency response throughout Sarasota County.",
    icon: Shield,
    href: "/services/disaster-recovery/",
  },
  {
    title: "Coastal Construction",
    description: "Waterfront commercial and residential projects with expertise in hurricane-resistant construction, flood zone compliance, and marine environments.",
    icon: Waves,
    href: "/services/residential/hurricane-resistant-construction/",
  },
];

const faqs = [
  {
    question: "Do you serve Sarasota, FL?",
    answer: "Yes, Florida Construction Specialists proudly serves Sarasota and all of Sarasota County. Sarasota's affluent communities, cultural attractions, and Gulf Coast location create unique construction opportunities for both luxury residential and commercial development. We maintain strong relationships with Sarasota building departments and understand the specific requirements for construction in this market."
  },
  {
    question: "What types of construction projects do you handle in Sarasota?",
    answer: "In Sarasota, we handle commercial construction, luxury custom homes, multi-family residential, disaster recovery, waterfront estates, balcony reconstruction, and exterior waterproofing. Given Sarasota's affluent market, we have particular expertise in high-end residential construction and coastal development. Project values typically range from $250,000 to $25 million or more."
  },
  {
    question: "How far is your office from Sarasota?",
    answer: "Our headquarters at 822 Bayview Dr, Ruskin, FL is approximately 45-50 minutes from Sarasota. While slightly farther than our core Tampa Bay markets, we have extensive experience working in Sarasota and maintain strong local relationships with subcontractors, suppliers, and building officials throughout Sarasota County."
  },
  {
    question: "Do you build luxury homes in Sarasota?",
    answer: "Yes, Sarasota's affluent communities including Longboat Key, Bird Key, Lido Key, and Siesta Key require construction partners who understand luxury standards. We build custom waterfront estates, high-end renovations, and exclusive residential projects that meet the exacting standards of Sarasota's discerning clientele. Our 40+ years experience and in-house engineering enables projects at any scale."
  },
  {
    question: "What is the Sarasota building permit process?",
    answer: "Sarasota construction projects require permits through Sarasota County Building Services or the City of Sarasota, depending on location. Our team has experience navigating both jurisdictions including coastal construction reviews, flood zone compliance, and environmental considerations. We handle all permit applications and ensure full code compliance."
  },
  {
    question: "Do you provide disaster recovery services in Sarasota?",
    answer: "Yes, we provide comprehensive disaster recovery services throughout Sarasota County. The Gulf Coast location makes Sarasota particularly vulnerable to hurricane and storm damage. With Frank Bragano's 43+ years of insurance claims expertise, we specialize in large loss restoration for both luxury residential and commercial properties."
  },
  {
    question: "What areas near Sarasota do you also serve?",
    answer: "In addition to Sarasota, we serve all surrounding communities including Bradenton, Longboat Key, Siesta Key, Venice, and North Port. We also serve the entire Tampa Bay region including Tampa, St. Petersburg, Clearwater, and our Ruskin headquarters area."
  },
  {
    question: "Are you licensed for commercial construction in Sarasota?",
    answer: "Yes, Florida Construction Specialists holds Florida General Contractor License #CBC1262722, which allows us to work on commercial and residential projects of any size throughout Florida, including Sarasota. We carry 40+ years experience and in-house engineering, comprehensive general liability insurance, and workers' compensation coverage."
  },
  {
    question: "What size projects do you typically handle in Sarasota?",
    answer: "We specialize in large-scale projects ranging from $250,000 to $25 million or more. This includes commercial construction, luxury custom homes, multi-family developments, and large loss disaster recovery. As a prime contractor (never a subcontractor), we take full accountability for projects of all sizes in the Sarasota area."
  },
  {
    question: "How do I get started on a project in Sarasota?",
    answer: "Contact us at (813) 420-7561 for a project consultation. We'll discuss your project goals, timeline, and budget, then schedule a site visit. Our team will provide preliminary guidance including any coastal or luxury construction considerations and develop a detailed proposal for your Sarasota project."
  },
];

const pillarLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/historic-restoration/", label: "Historic Restoration Services" },
];

const nearbyLocationLinks = [
  { href: "/locations/bradenton-fl/", label: "Bradenton, FL" },
  { href: "/locations/st-petersburg-fl/", label: "St. Petersburg, FL" },
  { href: "/locations/clearwater-fl/", label: "Clearwater, FL" },
  { href: "/locations/tampa-fl/", label: "Tampa, FL" },
  { href: "/locations/ruskin-fl/", label: "Ruskin, FL (Headquarters)" },
];

export default function SarasotaPage() {
  return (
    <>
      <LocalBusinessSchema city="Sarasota" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Construction Services in Sarasota"
        serviceDescription="Premier general contractor serving Sarasota, FL with commercial construction, luxury residential, disaster recovery, and coastal construction. Projects $250K-$25M+."
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
              <span className="text-brand-gold font-semibold">Serving Sarasota, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Sarasota Commercial & Luxury Residential Contractor
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Affluent Gulf Coast city known for arts, culture, and luxury real estate. Florida Construction Specialists delivers large-scale commercial and high-end residential construction throughout Sarasota.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              From waterfront luxury estates on Longboat Key to commercial development in downtown Sarasota, we bring 20+ years of experience and expertise to meet the exacting standards of Sarasota&apos;s discerning market.
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
              <Gem className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Luxury Expertise</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">In-House Engineering</span>
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
              Construction Services in Sarasota
            </h2>
            <p className="text-gray-600 mb-6">
              Sarasota represents one of Florida&apos;s most affluent and culturally sophisticated markets. From world-class arts institutions to exclusive barrier island communities, Sarasota demands construction partners who understand luxury standards and coastal challenges.
            </p>
            <p className="text-gray-600 mb-8">
              Florida Construction Specialists brings the expertise, bonding capacity, and attention to detail required for Sarasota&apos;s discerning market. Whether you&apos;re developing commercial property downtown, building a waterfront estate on Longboat Key, restoring hurricane damage, or renovating a luxury residence, FCS delivers excellence at every level.
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

      {/* Why Choose FCS for Sarasota */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Sarasota Chooses FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Gem className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Luxury Standards</h3>
              <p className="text-gray-600 text-sm">
                Sarasota&apos;s affluent market demands excellence. We understand luxury finishes, premium materials, and the attention to detail required for high-end residential and commercial construction.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Waves className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Coastal Expertise</h3>
              <p className="text-gray-600 text-sm">
                Sarasota&apos;s barrier islands and waterfront properties require specialized coastal construction knowledge. We understand FEMA requirements, hurricane-resistant techniques, and marine-grade materials.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Storm Recovery</h3>
              <p className="text-gray-600 text-sm">
                Sarasota&apos;s Gulf Coast location makes hurricane preparedness essential. Frank Bragano&apos;s 43+ years of insurance expertise ensures faster claims resolution and quality restoration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sarasota Map */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Serving Sarasota, Florida
          </h2>
          <GoogleMap city="Sarasota" height={400} />
        </div>
      </section>

      {/* Sarasota Market Info */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Sarasota Construction Market
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Commercial & Cultural</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Downtown Sarasota commercial development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Cultural and arts facility construction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Waterfront commercial properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Medical and professional offices</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Luxury Residential & Recovery</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Longboat Key and Bird Key estates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Waterfront custom homes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Hurricane damage restoration</span>
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
        title="Sarasota Construction FAQs"
        description="Common questions about construction services in Sarasota, FL."
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
            Start Your Sarasota Project Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. Our luxury construction expertise ensures your Sarasota project meets the highest standards.
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
