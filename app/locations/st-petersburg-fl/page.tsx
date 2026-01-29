import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Building2, Shield, Award, Clock, CheckCircle, Landmark, Home, Hammer, Palette } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { GoogleMap } from "@/components/GoogleMap";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "St. Petersburg Commercial Construction Contractor | $500K-$25M+ Projects | FCS",
  description: "Premier general contractor serving St. Petersburg, FL. Commercial construction, historic restoration, disaster recovery. Bay Pines VA experience. 40+ years experience. Call (813) 420-7561.",
  keywords: "commercial construction st petersburg, st petersburg general contractor, historic restoration st pete fl, disaster recovery st petersburg florida",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations/" },
  { name: "St. Petersburg, FL", href: "/locations/st-petersburg-fl/" },
];

const services = [
  {
    title: "Commercial Construction",
    description: "Office buildings, retail centers, medical facilities, and mixed-use developments throughout St. Petersburg and Pinellas County.",
    icon: Building2,
    href: "/services/commercial/",
  },
  {
    title: "Historic Restoration",
    description: "Preserving St. Petersburg's architectural heritage including federal historic compliance. Featured project: Bay Pines Veterans Hospital ($2M).",
    icon: Landmark,
    href: "/services/historic-restoration/",
  },
  {
    title: "Disaster Recovery",
    description: "Hurricane, storm, and flood damage restoration for commercial and residential properties. 24/7 emergency response throughout St. Petersburg.",
    icon: Shield,
    href: "/services/disaster-recovery/",
  },
  {
    title: "Residential Construction",
    description: "Luxury waterfront homes, historic district renovations, home additions, and major projects for St. Petersburg's diverse neighborhoods.",
    icon: Home,
    href: "/services/residential/",
  },
];

const faqs = [
  {
    question: "Do you serve St. Petersburg, FL?",
    answer: "Yes, Florida Construction Specialists proudly serves St. Petersburg and all of Pinellas County. St. Petersburg's vibrant arts scene, historic districts, and waterfront location create diverse construction opportunities. We have significant experience working in St. Pete including the $2M Bay Pines Veterans Hospital restoration project."
  },
  {
    question: "What types of construction projects do you handle in St. Petersburg?",
    answer: "In St. Petersburg, we handle commercial construction, historic restoration, multi-family residential, disaster recovery, luxury waterfront homes, balcony reconstruction, and exterior waterproofing. Given St. Pete's rich architectural heritage, we have particular expertise in historic preservation and federal compliance. Project values typically range from $250,000 to $25 million or more."
  },
  {
    question: "How far is your office from St. Petersburg?",
    answer: "Our headquarters at 822 Bayview Dr, Ruskin, FL is approximately 35-40 minutes from St. Petersburg across the bay. We have extensive experience working in St. Petersburg and Pinellas County and maintain strong local relationships with subcontractors, suppliers, and building officials."
  },
  {
    question: "Do you have experience with federal historic projects in St. Petersburg?",
    answer: "Yes, our $2M Bay Pines Veterans Hospital restoration in St. Petersburg required full federal historic compliance. We understand the rigorous requirements of working on federal historic properties including Secretary of Interior Standards, Davis-Bacon wage requirements, and federal inspection protocols. This experience transfers to all our St. Petersburg historic work."
  },
  {
    question: "What is the St. Petersburg building permit process?",
    answer: "St. Petersburg construction projects require permits through the City of St. Petersburg Development Review Services. Our team has experience navigating St. Pete's permit process including historic district reviews, coastal construction requirements, and standard commercial/residential permits. We handle all applications and ensure full code compliance."
  },
  {
    question: "Do you provide disaster recovery services in St. Petersburg?",
    answer: "Yes, we provide comprehensive disaster recovery services throughout St. Petersburg. St. Pete's peninsula location makes it vulnerable to hurricane and storm damage. With Frank Bragano's 43+ years of insurance claims expertise, we specialize in large loss restoration and work directly with insurance carriers on complex claims."
  },
  {
    question: "What areas near St. Petersburg do you also serve?",
    answer: "In addition to St. Petersburg, we serve all of Pinellas County including Clearwater, Largo, Pinellas Park, Gulfport, and the beaches. We also serve the entire Tampa Bay region including Tampa, Brandon, and our Ruskin headquarters area."
  },
  {
    question: "Are you licensed for commercial construction in St. Petersburg?",
    answer: "Yes, Florida Construction Specialists holds Florida General Contractor License #CBC1262722, which allows us to work on commercial and residential projects of any size throughout Florida, including St. Petersburg. We carry 40+ years experience and in-house engineering, comprehensive general liability insurance, and workers' compensation coverage."
  },
  {
    question: "What size projects do you typically handle in St. Petersburg?",
    answer: "We specialize in large-scale projects ranging from $250,000 to $25 million or more. This includes commercial construction, historic restoration, multi-family developments, and large loss disaster recovery. As a prime contractor (never a subcontractor), we take full accountability for projects of all sizes in the St. Petersburg area."
  },
  {
    question: "How do I get started on a project in St. Petersburg?",
    answer: "Contact us at (813) 420-7561 for a project consultation. We'll discuss your project goals, timeline, and budget, then schedule a site visit. Our team will provide preliminary guidance including any historic or coastal considerations and develop a detailed proposal for your St. Petersburg project."
  },
];

const pillarLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/historic-restoration/", label: "Historic Restoration Services" },
];

const nearbyLocationLinks = [
  { href: "/locations/clearwater-fl/", label: "Clearwater, FL" },
  { href: "/locations/tampa-fl/", label: "Tampa, FL" },
  { href: "/locations/bradenton-fl/", label: "Bradenton, FL" },
  { href: "/locations/sarasota-fl/", label: "Sarasota, FL" },
  { href: "/locations/ruskin-fl/", label: "Ruskin, FL (Headquarters)" },
];

export default function StPetersburgPage() {
  return (
    <>
      <LocalBusinessSchema city="St. Petersburg" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Construction Services in St. Petersburg"
        serviceDescription="Premier general contractor serving St. Petersburg, FL with commercial construction, historic restoration, disaster recovery, and residential construction. Projects $250K-$25M+."
        minPrice="250000"
      />

      <Breadcrumb items={breadcrumbItems.slice(1)} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/Old/Tampa-Bay-FEATURE.jpg"
            alt="Tampa Bay commercial construction"
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
              <span className="text-brand-gold font-semibold">Serving St. Petersburg, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              St. Petersburg Commercial & Historic Restoration Contractor
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Historic waterfront city known for its arts, culture, and growing commercial sector. Florida Construction Specialists delivers large-scale commercial and residential construction throughout St. Petersburg.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              From federal historic compliance at Bay Pines VA to downtown commercial development, we bring 20+ years of experience and specialized historic restoration expertise to every St. Pete project.
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
              <Landmark className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Historic Expertise</span>
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
              Construction Services in St. Petersburg
            </h2>
            <p className="text-gray-600 mb-6">
              St. Petersburg combines a rich architectural heritage with vibrant arts scene and growing commercial development. From historic downtown districts to waterfront development, St. Pete offers diverse construction opportunities that require specialized expertise.
            </p>
            <p className="text-gray-600 mb-8">
              Florida Construction Specialists brings proven St. Petersburg experience to every project. Our $2M Bay Pines Veterans Hospital restoration demonstrates our capability with complex federal historic compliance. Whether you&apos;re developing commercial property downtown, restoring a historic building, recovering from storm damage, or building a waterfront home, FCS delivers excellence.
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

      {/* Why Choose FCS for St. Petersburg */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why St. Petersburg Chooses FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Landmark className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Federal Historic Experience</h3>
              <p className="text-gray-600 text-sm">
                Our $2M Bay Pines VA Hospital restoration required full federal historic compliance. We understand Secretary of Interior Standards, Davis-Bacon requirements, and federal inspection protocols.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Arts District Expertise</h3>
              <p className="text-gray-600 text-sm">
                St. Pete&apos;s vibrant arts scene creates unique construction opportunities. We understand the aesthetic and functional requirements of galleries, museums, and creative spaces.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Storm Recovery</h3>
              <p className="text-gray-600 text-sm">
                St. Pete&apos;s peninsula location makes hurricane preparedness critical. Frank Bragano&apos;s 43+ years of insurance expertise means faster claims resolution and quality restoration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* St. Petersburg Map */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Serving St. Petersburg, Florida
          </h2>
          <GoogleMap city="St. Petersburg" height={400} />
        </div>
      </section>

      {/* St. Petersburg Market Info */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              St. Petersburg Construction Market
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Commercial & Historic</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Downtown St. Pete commercial development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Historic district restoration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Arts district and gallery construction</span>
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
                    <span className="text-gray-600">Waterfront luxury custom homes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Historic neighborhood renovations</span>
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
        title="St. Petersburg Construction FAQs"
        description="Common questions about construction services in St. Petersburg, FL."
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
            Start Your St. Petersburg Project Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. Our historic and commercial expertise ensures your St. Pete project exceeds expectations.
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
