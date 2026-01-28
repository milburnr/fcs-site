import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, ArrowRight, Building2, Shield, Award, Clock, CheckCircle, Factory, Truck, Home, Hammer } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { GoogleMap } from "@/components/GoogleMap";
import type { Metadata } from "next";

import { InternalLinks } from "@/components/InternalLinks";
export const metadata: Metadata = {
  title: "Plant City Construction Contractor | Commercial, Residential & Disaster Recovery | FCS",
  description: "Premier general contractor serving Plant City, FL. Commercial construction, agricultural facilities, disaster recovery, residential. Just 15 minutes from our Ruskin headquarters. Projects $250K-$50M+. Call (813) 420-7561.",
  keywords: "construction contractor plant city, commercial construction plant city fl, disaster recovery plant city, agricultural construction hillsborough county",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations/" },
  { name: "Plant City, FL", href: "/locations/plant-city-fl/" },
];

const services = [
  {
    title: "Commercial Construction",
    description: "Office buildings, retail centers, medical facilities, and mixed-use developments throughout Plant City and eastern Hillsborough County.",
    icon: Building2,
    href: "/services/commercial/",
  },
  {
    title: "Agricultural & Industrial",
    description: "Warehouses, distribution centers, processing facilities, and cold storage construction supporting Plant City's agricultural economy.",
    icon: Factory,
    href: "/services/commercial/industrial-construction/",
  },
  {
    title: "Disaster Recovery",
    description: "Hurricane, storm, and flood damage restoration for commercial and residential properties. 24/7 emergency response throughout Plant City.",
    icon: Shield,
    href: "/services/disaster-recovery/",
  },
  {
    title: "Residential Construction",
    description: "Luxury custom homes, home additions, and major renovations for Plant City's growing residential communities.",
    icon: Home,
    href: "/services/residential/",
  },
];

const faqs = [
  {
    question: "Do you serve Plant City, FL?",
    answer: "Yes, Florida Construction Specialists proudly serves Plant City and is conveniently located just 15 minutes from our Ruskin headquarters. Plant City is one of our closest service areas, allowing us to provide rapid response and efficient project management. We have completed numerous projects in Plant City and maintain strong relationships with Hillsborough County Building Services."
  },
  {
    question: "What types of construction projects do you handle in Plant City?",
    answer: "In Plant City, we handle a full range of construction services including commercial construction, agricultural and industrial facilities, disaster recovery, and luxury residential projects. Given Plant City's agricultural heritage, we have particular expertise in warehouses, cold storage facilities, and processing plants. Project values typically range from $250,000 to $50 million or more."
  },
  {
    question: "How close is your office to Plant City?",
    answer: "Our headquarters at 822 Bayview Dr, Ruskin, FL is just 15 minutes from Plant City via I-4 and US-92. This proximity allows us to provide rapid response times, frequent site visits, and efficient project management. Plant City is one of our closest and most accessible service areas in the Tampa Bay region."
  },
  {
    question: "Do you work on agricultural buildings in Plant City?",
    answer: "Yes, Plant City's role as the 'Winter Strawberry Capital of the World' means significant demand for agricultural construction. We build and renovate warehouses, packing facilities, cold storage buildings, processing plants, and distribution centers. We understand the unique requirements of agricultural construction including refrigeration systems, food-safe environments, and seasonal scheduling considerations."
  },
  {
    question: "What is the Plant City building permit process?",
    answer: "Plant City falls under Hillsborough County Building Services for permitting. Our team has extensive experience navigating Hillsborough County's permit process and maintains strong relationships with plan reviewers and inspectors. We handle all permit applications, coordinate inspections, and ensure full code compliance for Plant City projects."
  },
  {
    question: "Do you provide disaster recovery services in Plant City?",
    answer: "Yes, we provide 24/7 disaster recovery services throughout Plant City. Our proximity to the area (15 minutes from our Ruskin office) allows rapid emergency response. We handle hurricane damage, storm damage, flooding, and fire restoration for both commercial and residential properties. We work directly with insurance companies on large loss claims."
  },
  {
    question: "What areas near Plant City do you also serve?",
    answer: "In addition to Plant City, we serve all surrounding communities including Brandon (10 minutes west), Lakeland (20 minutes east), Ruskin (15 minutes south), and Dover. We also cover the entire I-4 corridor between Tampa and Orlando, making us ideally positioned for projects throughout eastern Hillsborough and western Polk counties."
  },
  {
    question: "Are you licensed for commercial construction in Plant City?",
    answer: "Yes, Florida Construction Specialists holds Florida General Contractor License #CBC1262722, which allows us to work on commercial and residential projects of any size throughout Florida, including Plant City. We carry $10M+ bonding capacity, comprehensive general liability insurance, and workers' compensation coverage."
  },
  {
    question: "What size projects do you typically handle in Plant City?",
    answer: "We specialize in large-scale projects ranging from $250,000 to $50 million or more. This includes commercial construction, agricultural facilities, multi-family developments, and large loss disaster recovery. As a prime contractor (never a subcontractor), we take full accountability for projects of all sizes in the Plant City area."
  },
  {
    question: "How do I get started on a project in Plant City?",
    answer: "Contact us at (813) 420-7561 for a project consultation. We'll discuss your project goals, timeline, and budget, then schedule a site visit (usually within 24-48 hours given our proximity). Our team will provide preliminary guidance and develop a detailed proposal for your Plant City project."
  },
];

export default function PlantCityPage() {
  return (
    <>
      <LocalBusinessSchema city="Plant City" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Construction Services in Plant City"
        serviceDescription="Premier general contractor serving Plant City, FL with commercial construction, agricultural facilities, disaster recovery, and residential construction. Projects $250K-$50M+."
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
              <span className="text-brand-gold font-semibold">Serving Plant City, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Plant City Commercial & Residential Construction
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists delivers large-scale commercial, agricultural, and residential construction throughout Plant City and eastern Hillsborough County. Located just 15 minutes from our Ruskin headquarters, Plant City is one of our closest and most accessible service areas.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              From agricultural facilities supporting the &quot;Winter Strawberry Capital&quot; to commercial development along the I-4 corridor, we bring 20+ years of experience and $10M+ bonding capacity to every Plant City project.
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
              <span className="font-semibold text-gray-700">15 Min from HQ</span>
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
          <div >
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Construction Services in Plant City
            </h2>
            <p className="text-gray-600 mb-6">
              Plant City offers a unique combination of agricultural heritage, strategic location along the I-4 corridor between Tampa and Orlando, and growing residential communities. Florida Construction Specialists is ideally positioned to serve Plant City&apos;s diverse construction needs, with our headquarters just 15 minutes away in Ruskin.
            </p>
            <p className="text-gray-600 mb-8">
              Whether you&apos;re building a cold storage facility for the strawberry industry, developing commercial property along the I-4 corridor, restoring storm damage to agricultural buildings, or constructing a custom home in one of Plant City&apos;s growing residential areas, FCS brings the expertise, bonding capacity, and local knowledge to deliver your project on time and on budget.
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

      {/* Why Plant City Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Choose FCS for Plant City Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Proximity Advantage</h3>
              <p className="text-gray-600 text-sm">
                Our Ruskin headquarters is just 15 minutes from Plant City—closer than Tampa. This means faster response times, more efficient site visits, and reduced mobilization costs for your project.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Agricultural Expertise</h3>
              <p className="text-gray-600 text-sm">
                We understand Plant City&apos;s agricultural economy. From cold storage and packing facilities to processing plants and distribution centers, we build the infrastructure that supports the region&apos;s farming industry.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">I-4 Corridor Development</h3>
              <p className="text-gray-600 text-sm">
                Plant City&apos;s position on the I-4 corridor makes it attractive for commercial and industrial development. We&apos;ve completed numerous projects along this growth corridor between Tampa and Orlando.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plant City Map */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Serving Plant City, Florida
          </h2>
          <GoogleMap city="Plant City" height={400} />
        </div>
      </section>

      {/* Plant City Market Info */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div >
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Plant City Construction Market
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Commercial & Industrial</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">I-4 corridor commercial development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Agricultural processing facilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Warehouse and distribution centers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Retail and restaurant buildouts</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Residential & Recovery</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Custom homes in growing communities</span>
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

      {/* Service Areas */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Areas We Serve Near Plant City
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Link href="/locations/brandon-fl/" className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <p className="font-semibold text-brand-green-dark">Brandon</p>
              <p className="text-sm text-gray-500">10 minutes west</p>
            </Link>
            <Link href="/locations/lakeland-fl/" className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <p className="font-semibold text-brand-green-dark">Lakeland</p>
              <p className="text-sm text-gray-500">20 minutes east</p>
            </Link>
            <Link href="/locations/ruskin-fl/" className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <p className="font-semibold text-brand-green-dark">Ruskin (HQ)</p>
              <p className="text-sm text-gray-500">15 minutes south</p>
            </Link>
            <Link href="/locations/tampa-fl/" className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow">
              <p className="font-semibold text-brand-green-dark">Tampa</p>
              <p className="text-sm text-gray-500">25 minutes west</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={faqs}
        title="Plant City Construction FAQs"
        description="Common questions about construction services in Plant City, FL."
      />

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Explore Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Construction Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services/commercial/" className="text-brand-green hover:underline">Commercial Construction</Link></li>
                <li><Link href="/services/residential/" className="text-brand-green hover:underline">Residential Construction</Link></li>
                <li><Link href="/services/disaster-recovery/" className="text-brand-green hover:underline">Disaster Recovery</Link></li>
                <li><Link href="/services/historic-restoration/" className="text-brand-green hover:underline">Historic Restoration</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Nearby Locations</h3>
              <ul className="space-y-2">
                <li><Link href="/locations/brandon-fl/" className="text-brand-green hover:underline">Brandon, FL</Link></li>
                <li><Link href="/locations/lakeland-fl/" className="text-brand-green hover:underline">Lakeland, FL</Link></li>
                <li><Link href="/locations/tampa-fl/" className="text-brand-green hover:underline">Tampa, FL</Link></li>
                <li><Link href="/locations/ruskin-fl/" className="text-brand-green hover:underline">Ruskin, FL</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Learn More</h3>
              <ul className="space-y-2">
                <li><Link href="/about/" className="text-brand-green hover:underline">About FCS</Link></li>
                <li><Link href="/portfolio/" className="text-brand-green hover:underline">Project Portfolio</Link></li>
                <li><Link href="/contact/" className="text-brand-green hover:underline">Contact Us</Link></li>
                <li><Link href="/locations/" className="text-brand-green hover:underline">All Locations</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Start Your Plant City Project Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. Located just 15 minutes from Plant City, we&apos;re ready to deliver construction excellence for your next project.
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
            links={[{"href":"/services/commercial/","label":"Commercial Construction"},{"href":"/services/residential/","label":"Residential Construction"},{"href":"/services/disaster-recovery/","label":"Disaster Recovery"},{"href":"/services/historic-restoration/","label":"Historic Restoration"},{"href":"/locations/tampa/","label":"Tampa Construction Services"}]}
            title="Related Resources"
            
          />
        </div>
      </section>

    </>
  );
}
