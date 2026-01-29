import Link from "next/link";
import { Metadata } from "next";
import { Phone, ArrowRight, CheckCircle, Building2, Shield, Award, Store, ShoppingBag, Clock, Users } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";

import { InternalLinks } from "@/components/InternalLinks";
export const metadata: Metadata = {
  title: "Retail Construction Tampa | Shopping Centers & Stores | FCS",
  description: "Retail construction in Tampa Bay. Shopping centers, standalone stores, restaurants, mixed-use retail. Ground-up and tenant improvements. Fast timelines. Call (813) 420-7561.",
  keywords: ["retail construction tampa", "shopping center construction florida", "store buildout", "restaurant construction", "retail development tampa bay"],
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Commercial Construction", href: "/services/commercial/" },
  { name: "Retail Construction", href: "/services/commercial/retail-construction/" },
];

const projectTypes = [
  {
    title: "Shopping Centers",
    description: "Strip centers, neighborhood centers, and power centers. Shell construction for multi-tenant retail, pad site development, and common area construction.",
  },
  {
    title: "Standalone Retail",
    description: "Freestanding retail buildings for single tenants. Drive-thrus, quick-service restaurants, and standalone shops. Pad site and ground-up construction.",
  },
  {
    title: "Restaurant Construction",
    description: "Full-service and quick-service restaurants. Commercial kitchens, hoods and ventilation, grease traps, walk-ins, and front-of-house buildouts.",
  },
  {
    title: "Mixed-Use Retail",
    description: "Retail components of mixed-use developments. Ground-floor retail under residential or office. Coordinated construction with upper-floor uses.",
  },
  {
    title: "Retail Renovations",
    description: "Refresh existing retail spaces with updated finishes, new storefronts, and improved layouts. Brand standards implementation and prototype rollouts.",
  },
  {
    title: "Convenience & Fuel",
    description: "Convenience stores, fuel stations, and travel centers. Underground storage tanks, canopy construction, and associated car wash or quick-service.",
  },
];

const faqs = [
  {
    question: "What types of retail construction do you handle?",
    answer: "We handle all types of retail construction including: shopping centers (strip, neighborhood, power centers), standalone retail buildings, restaurants (full-service and QSR), mixed-use retail components, convenience stores and fuel stations, and retail tenant improvements. Projects range from single-store buildouts to multi-building shopping center development.",
  },
  {
    question: "Do you build restaurant kitchens?",
    answer: "Yes, restaurant construction is a specialty. We build commercial kitchens including: hood installation with makeup air, grease trap installation, walk-in coolers and freezers, three-compartment sinks, floor drains with proper slope, FRP wall panels, and commercial cooking equipment connections. We coordinate with equipment suppliers, health departments, and fire officials.",
  },
  {
    question: "What is the typical timeline for retail construction?",
    answer: "Retail construction timelines depend on project type: Tenant improvement buildouts: 6-12 weeks. Standalone retail buildings: 4-8 months. Restaurant construction: 3-5 months. Shopping center shell: 8-14 months. Fast-track construction is common in retail—we understand the urgency of opening for business and meeting lease commencement dates.",
  },
  {
    question: "Can you build to national brand standards?",
    answer: "Yes, we regularly build for national retailers and restaurants with strict prototype specifications and brand standards. We interpret brand design packages, source specified materials, and execute to corporate standards. Experience includes both franchise operators and corporate real estate programs.",
  },
  {
    question: "How do you coordinate with retail tenants during shopping center construction?",
    answer: "Shopping center construction requires careful tenant coordination. We phase construction to allow tenant buildouts in parallel with shell completion, coordinate utility connections with tenant schedules, maintain safe access to completed spaces, and communicate timeline updates. Early tenant coordination helps ensure opening dates align.",
  },
  {
    question: "Do you build drive-thrus?",
    answer: "Yes, we build drive-thru facilities for restaurants, banks, pharmacies, and other drive-thru-dependent businesses. This includes lane construction, menu board and speaker posts, window configurations, pickup windows, and associated canopies. Site circulation and stacking are considered during design coordination.",
  },
  {
    question: "What about ADA compliance in retail?",
    answer: "All retail construction must meet ADA accessibility requirements. This includes accessible parking and routes, entrance accessibility, interior circulation, accessible restrooms, and service counter heights. We ensure compliance during design review and construction, including required signage and detectable warnings.",
  },
  {
    question: "Can you renovate retail while the center remains open?",
    answer: "Yes, we regularly renovate retail spaces in active shopping centers. This requires construction barriers, dust and noise control, safe pedestrian routing, and coordination with property management and adjacent tenants. We schedule disruptive work during off-hours when possible and maintain center operations throughout construction.",
  },
  {
    question: "What size retail projects do you handle?",
    answer: "We handle retail projects ranging from $100,000 tenant improvements to $20 million+ shopping center developments. Our experience spans boutique retail buildouts, restaurant construction, multi-tenant strip centers, and large format retail. Our 40+ years experience and in-house engineering supports substantial retail development.",
  },
  {
    question: "What areas do you serve for retail construction?",
    answer: "We provide retail construction services throughout Tampa Bay including Tampa, St. Petersburg, Clearwater, Brandon, Lakeland, Sarasota, and Bradenton. Our experience includes urban retail, suburban shopping centers, and highway-oriented retail development across the region.",
  },
];

export default function RetailConstructionPage() {
  return (
    <>
      <LocalBusinessSchema service="Retail Construction" />
      <ServiceSchema
        serviceName="Retail Construction"
        serviceDescription="Retail construction in Tampa Bay including shopping centers, standalone stores, restaurants, and mixed-use retail. Ground-up construction and tenant improvements. Fast timelines for retail openings."
        minPrice="100000"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems.slice(1)} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2023/12/commercial-construction.jpg')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <Store className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Retail Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Retail Construction in Tampa Bay
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists builds retail environments that drive customer traffic and support successful businesses. From shopping center development to individual store buildouts, we deliver retail construction on the fast timelines that retailers demand.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              Shopping centers, standalone retail, restaurants, and mixed-use. Ground-up construction and tenant improvements. National brand experience. $100K-$20M+ projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Discuss Your Retail Project
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
              <span className="font-semibold text-gray-700">Fast Timelines</span>
            </div>
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">National Brand Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">In-House Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">20+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div >
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Retail Construction Expertise
            </h2>
            <p className="text-gray-600 mb-6">
              Retail construction operates on demanding timelines. Lease commencement dates don't wait. Seasonal openings drive schedules. Every day of delay impacts revenue. At Florida Construction Specialists, we understand retail's urgency and deliver projects that meet opening dates without compromising quality.
            </p>
            <p className="text-gray-600 mb-6">
              We build the full spectrum of retail environments: shopping centers that attract tenants, standalone stores that serve customers, restaurants that deliver experiences, and tenant improvements that transform spaces. Our experience includes national brand rollouts with strict prototype standards and local retailers with unique visions.
            </p>
            <p className="text-gray-600 mb-8">
              Whether you're a developer building speculative retail, a retailer expanding your footprint, or a restaurateur opening a new location, we bring the retail construction expertise your project requires.
            </p>

            <Link
              href="/services/commercial/"
              className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              Back to Commercial Construction Services
            </Link>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Retail Construction Project Types
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectTypes.map((project) => (
              <div key={project.title} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-brand-green-dark text-lg mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section bg-white">
        <div className="container-custom">
          <div >
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Retail Construction Capabilities
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Shell & Site</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Shopping center shell construction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Pad site development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Parking lot construction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Storefront and façade systems</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Tenant Finishes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Brand standard implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Commercial kitchen buildouts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Fixture and equipment coordination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Fast-track tenant improvements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Retail Construction FAQs
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Commercial Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services/commercial/" className="text-brand-green hover:underline">Commercial Construction</Link></li>
                <li><Link href="/services/commercial/tenant-improvements/" className="text-brand-green hover:underline">Tenant Improvements</Link></li>
                <li><Link href="/services/commercial/design-build/" className="text-brand-green hover:underline">Design-Build</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">By Location</h3>
              <ul className="space-y-2">
                <li><Link href="/commercial-construction-tampa/" className="text-brand-green hover:underline">Retail Tampa</Link></li>
                <li><Link href="/commercial-construction-st-petersburg/" className="text-brand-green hover:underline">Retail St. Petersburg</Link></li>
                <li><Link href="/commercial-construction-clearwater/" className="text-brand-green hover:underline">Retail Clearwater</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Other Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services/disaster-recovery/" className="text-brand-green hover:underline">Disaster Recovery</Link></li>
                <li><Link href="/services/historic-restoration/" className="text-brand-green hover:underline">Historic Restoration</Link></li>
                <li><Link href="/contact/" className="text-brand-green hover:underline">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Plan Your Retail Construction Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss your retail project. From shopping center development to restaurant buildouts, we deliver retail construction on the timelines that retailers require.
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

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            links={[{"href":"/services/commercial/","label":"Commercial Construction Services"},{"href":"/commercial-construction-tampa/","label":"Commercial Construction Tampa"},{"href":"/services/commercial/design-build/","label":"Design-Build Services"},{"href":"/services/commercial/medical-construction/","label":"Medical Facility Construction"},{"href":"/services/commercial/tenant-improvements/","label":"Tenant Improvements"}]}
            title="Related Resources"
            
          />
        </div>
      </section>

    </>
  );
}
