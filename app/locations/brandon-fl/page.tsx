import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Building2, Shield, Award, Clock, CheckCircle, Home, Hammer, ShoppingBag } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { GoogleMap } from "@/components/GoogleMap";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brandon Commercial Construction Contractor | $500K-$25M+ Projects | FCS",
  description: "Premier general contractor serving Brandon, FL. Commercial construction, multi-family residential, disaster recovery. 40+ years experience, 20+ years experience. Call (813) 420-7561.",
  keywords: "commercial construction brandon, brandon general contractor, disaster recovery brandon fl, construction company brandon florida",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations/" },
  { name: "Brandon, FL", href: "/locations/brandon-fl/" },
];

const services = [
  {
    title: "Commercial Construction",
    description: "Retail centers, office buildings, medical facilities, and mixed-use developments throughout Brandon's growing commercial corridors.",
    icon: Building2,
    href: "/services/commercial/",
  },
  {
    title: "Retail & Restaurant",
    description: "Tenant improvements, buildouts, and new construction for Brandon's extensive retail market including Westfield Brandon and surrounding areas.",
    icon: ShoppingBag,
    href: "/services/commercial/tenant-improvements/",
  },
  {
    title: "Disaster Recovery",
    description: "Hurricane, storm, and flood damage restoration for commercial and residential properties. 24/7 emergency response throughout Brandon.",
    icon: Shield,
    href: "/services/disaster-recovery/",
  },
  {
    title: "Residential Construction",
    description: "Luxury custom homes, home additions, and major renovations for Brandon's established and developing residential communities.",
    icon: Home,
    href: "/services/residential/",
  },
];

const faqs = [
  {
    question: "Do you serve Brandon, FL?",
    answer: "Yes, Florida Construction Specialists proudly serves Brandon and considers it a key part of our core service area. Brandon is one of Tampa Bay's largest suburbs with extensive commercial and residential development. We maintain strong relationships with Hillsborough County Building Services and local subcontractors in Brandon."
  },
  {
    question: "What types of construction projects do you handle in Brandon?",
    answer: "In Brandon, we handle commercial construction, retail and restaurant buildouts, multi-family residential, disaster recovery, luxury custom homes, balcony reconstruction, and exterior waterproofing. Given Brandon's strong retail presence, we have particular expertise in tenant improvements and commercial buildouts. Project values typically range from $250,000 to $25 million or more."
  },
  {
    question: "How far is your office from Brandon?",
    answer: "Our headquarters at 822 Bayview Dr, Ruskin, FL is approximately 20 minutes from Brandon via I-75. This proximity allows us to provide rapid response times, frequent site visits, and efficient project management for Brandon projects. Brandon is one of our closest major service areas."
  },
  {
    question: "Do you work on retail construction in Brandon?",
    answer: "Yes, Brandon's extensive retail market including Westfield Brandon and surrounding commercial corridors creates strong demand for retail construction. We handle tenant improvements, restaurant buildouts, new retail construction, and commercial renovations. Our team understands the unique requirements of retail construction including fast-track schedules and working around operating businesses."
  },
  {
    question: "What is the Brandon building permit process?",
    answer: "Brandon falls under Hillsborough County Building Services for permitting. Our team has extensive experience navigating Hillsborough County's permit process and maintains strong relationships with plan reviewers and inspectors. We handle all permit applications, coordinate inspections, and ensure full code compliance for Brandon projects."
  },
  {
    question: "Do you provide disaster recovery services in Brandon?",
    answer: "Yes, we provide comprehensive disaster recovery services throughout Brandon. With Frank Bragano's 43+ years of insurance claims expertise (former Allstate Commercial adjuster), we specialize in large loss restoration. We handle hurricane damage, storm damage, flooding, and fire restoration for both commercial and residential properties."
  },
  {
    question: "What areas near Brandon do you also serve?",
    answer: "In addition to Brandon, we serve all surrounding communities including Tampa (15 minutes west), Plant City (10 minutes east), Riverview (10 minutes south), and Valrico. We cover the entire eastern Hillsborough County area and can easily reach projects throughout the Tampa Bay region."
  },
  {
    question: "Are you licensed for commercial construction in Brandon?",
    answer: "Yes, Florida Construction Specialists holds Florida General Contractor License #CBC1262722, which allows us to work on commercial and residential projects of any size throughout Florida, including Brandon. We carry 40+ years experience and in-house engineering, comprehensive general liability insurance, and workers' compensation coverage."
  },
  {
    question: "What size projects do you typically handle in Brandon?",
    answer: "We specialize in large-scale projects ranging from $250,000 to $25 million or more. This includes commercial construction, retail buildouts, multi-family developments, and large loss disaster recovery. As a prime contractor (never a subcontractor), we take full accountability for projects of all sizes in the Brandon area."
  },
  {
    question: "How do I get started on a project in Brandon?",
    answer: "Contact us at (813) 420-7561 for a project consultation. We'll discuss your project goals, timeline, and budget, then schedule a site visit (usually within 24-48 hours given our proximity). Our team will provide preliminary guidance and develop a detailed proposal for your Brandon project."
  },
];

const pillarLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/historic-restoration/", label: "Historic Restoration Services" },
];

const nearbyLocationLinks = [
  { href: "/locations/tampa-fl/", label: "Tampa, FL" },
  { href: "/locations/plant-city-fl/", label: "Plant City, FL" },
  { href: "/locations/lakeland-fl/", label: "Lakeland, FL" },
  { href: "/locations/ruskin-fl/", label: "Ruskin, FL (Headquarters)" },
  { href: "/locations/st-petersburg-fl/", label: "St. Petersburg, FL" },
];

export default function BrandonPage() {
  return (
    <>
      <LocalBusinessSchema city="Brandon" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Construction Services in Brandon"
        serviceDescription="Premier general contractor serving Brandon, FL with commercial construction, retail buildouts, disaster recovery, and residential construction. Projects $250K-$25M+."
        minPrice="250000"
      />

      <Breadcrumb items={breadcrumbItems.slice(1)} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Commercial facility construction"
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
              <span className="text-brand-gold font-semibold">Serving Brandon, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Brandon Commercial & Insurance Restoration Contractor
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Major Tampa suburb with extensive commercial and retail development. Florida Construction Specialists delivers large-scale commercial and residential construction throughout Brandon.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              From retail buildouts to commercial development along Brandon&apos;s major corridors, we bring 20+ years of experience and 40+ years experience and in-house engineering to every project.
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
              <span className="font-semibold text-gray-700">20 Min from HQ</span>
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
              Construction Services in Brandon
            </h2>
            <p className="text-gray-600 mb-6">
              Brandon is one of Tampa Bay&apos;s largest and most dynamic suburban communities, with strong commercial corridors, extensive retail development, and growing residential neighborhoods. Florida Construction Specialists is ideally positioned to serve Brandon&apos;s diverse construction needs.
            </p>
            <p className="text-gray-600 mb-8">
              Whether you&apos;re developing commercial property along Brandon Boulevard, building out retail space near Westfield Brandon, restoring storm damage, or constructing a custom home in one of Brandon&apos;s established neighborhoods, FCS brings the expertise, bonding capacity, and local knowledge to deliver your project on time and on budget.
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

      {/* Why Choose FCS for Brandon */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Brandon Chooses FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Proximity Advantage</h3>
              <p className="text-gray-600 text-sm">
                Our Ruskin headquarters is just 20 minutes from Brandon. This means faster response times, more efficient site visits, and reduced mobilization costs for your project.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <ShoppingBag className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Retail Expertise</h3>
              <p className="text-gray-600 text-sm">
                Brandon&apos;s strong retail market requires specialized construction knowledge. We understand fast-track schedules, working around operating businesses, and meeting retailer standards.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Local Knowledge</h3>
              <p className="text-gray-600 text-sm">
                20+ years of experience working with Hillsborough County Building Services, local inspectors, and Brandon-area subcontractors. We know how to get projects approved and completed efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brandon Map */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Serving Brandon, Florida
          </h2>
          <GoogleMap city="Brandon" height={400} />
        </div>
      </section>

      {/* Brandon Market Info */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Brandon Construction Market
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Commercial & Retail</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Westfield Brandon area retail</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Brandon Boulevard commercial corridor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Medical office construction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Restaurant buildouts</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Residential & Recovery</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Custom homes in established neighborhoods</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Home additions and major renovations</span>
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
        title="Brandon Construction FAQs"
        description="Common questions about construction services in Brandon, FL."
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
            Start Your Brandon Project Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. Just 20 minutes from Brandon, we&apos;re ready to deliver construction excellence for your next project.
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
