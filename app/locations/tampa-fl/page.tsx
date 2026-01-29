import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Building2, Shield, Award, Clock, CheckCircle, Landmark, Home, Hammer } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { GoogleMap } from "@/components/GoogleMap";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tampa Commercial Construction Contractor | $500K-$25M+ Projects | FCS",
  description: "Premier general contractor serving Tampa, FL. Commercial construction, multi-family residential, disaster recovery, historic restoration. 40+ years experience, 20+ years experience. Call (813) 420-7561.",
  keywords: "commercial construction tampa, tampa general contractor, disaster recovery tampa, historic restoration tampa fl, large scale construction tampa",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations/" },
  { name: "Tampa, FL", href: "/locations/tampa-fl/" },
];

const services = [
  {
    title: "Commercial Construction",
    description: "Office buildings, retail centers, medical facilities, and mixed-use developments throughout Tampa and Hillsborough County.",
    icon: Building2,
    href: "/services/commercial/",
  },
  {
    title: "Historic Restoration",
    description: "Preserving Tampa's architectural heritage including Ybor City historic district. SHPO compliance, Secretary of Interior Standards.",
    icon: Landmark,
    href: "/services/historic-restoration/",
  },
  {
    title: "Disaster Recovery",
    description: "Hurricane, storm, and flood damage restoration for commercial and residential properties. 24/7 emergency response throughout Tampa.",
    icon: Shield,
    href: "/services/disaster-recovery/",
  },
  {
    title: "Residential Construction",
    description: "Luxury custom homes, waterfront estates, home additions, and major renovations for Tampa's upscale neighborhoods.",
    icon: Home,
    href: "/services/residential/",
  },
];

const faqs = [
  {
    question: "Do you serve Tampa, FL?",
    answer: "Yes, Florida Construction Specialists proudly serves Tampa as our primary market. Tampa is the economic hub of the Tampa Bay region, and we have completed numerous major projects throughout the city. We maintain strong relationships with Tampa building departments, the Barrio Latino Commission (for Ybor City projects), and local subcontractors."
  },
  {
    question: "What types of construction projects do you handle in Tampa?",
    answer: "In Tampa, we handle commercial construction, multi-family residential, disaster recovery, historic restoration, luxury custom homes, balcony reconstruction, and exterior waterproofing. Given Tampa's diverse architecture, we have particular expertise in both modern commercial development and historic preservation, especially in Ybor City. Project values typically range from $250,000 to $25 million or more."
  },
  {
    question: "How far is your office from Tampa?",
    answer: "Our headquarters at 822 Bayview Dr, Ruskin, FL is approximately 25-30 minutes from downtown Tampa. This proximity allows us to provide rapid response times, frequent site visits, and efficient project management for Tampa projects. We consider Tampa our primary market and home territory."
  },
  {
    question: "Do you have experience with Ybor City historic projects?",
    answer: "Yes, we have extensive experience in Ybor City's historic district. Our projects include the Italian American Club ($1.2M complete restoration), the Wotjowicz House (ground-up historic district construction), and the Ferraro House. We understand Barrio Latino Commission requirements and Secretary of Interior Standards for historic preservation."
  },
  {
    question: "What is the Tampa building permit process?",
    answer: "Tampa construction projects require permits through the City of Tampa Construction Services Center. Our team has extensive experience navigating Tampa's permit process including plan reviews, inspections, and compliance requirements. We handle all permit applications, coordinate inspections, and ensure full code compliance for Tampa projects."
  },
  {
    question: "Do you provide disaster recovery services in Tampa?",
    answer: "Yes, we provide comprehensive disaster recovery services throughout Tampa. With Frank Bragano's 43+ years of insurance claims expertise (former Allstate Commercial adjuster), we specialize in large loss restoration. We handle hurricane damage, storm damage, flooding, and fire restoration for both commercial and residential properties, working directly with insurance carriers."
  },
  {
    question: "What areas near Tampa do you also serve?",
    answer: "In addition to Tampa, we serve all surrounding communities including Brandon (15 minutes east), Clearwater and St. Petersburg (across the bay), Ruskin (our headquarters), and the entire I-4 corridor. We cover Hillsborough, Pinellas, Polk, and Manatee counties for projects throughout the Tampa Bay region."
  },
  {
    question: "Are you licensed for commercial construction in Tampa?",
    answer: "Yes, Florida Construction Specialists holds Florida General Contractor License #CBC1262722, which allows us to work on commercial and residential projects of any size throughout Florida, including Tampa. We carry 40+ years experience and in-house engineering, comprehensive general liability insurance, and workers' compensation coverage."
  },
  {
    question: "What size projects do you typically handle in Tampa?",
    answer: "We specialize in large-scale projects ranging from $250,000 to $25 million or more. This includes commercial construction, multi-family developments, historic restoration, and large loss disaster recovery. As a prime contractor (never a subcontractor), we take full accountability for projects of all sizes in the Tampa area."
  },
  {
    question: "How do I get started on a project in Tampa?",
    answer: "Contact us at (813) 420-7561 for a project consultation. We'll discuss your project goals, timeline, and budget, then schedule a site visit (usually within 24-48 hours). Our team will provide preliminary guidance and develop a detailed proposal for your Tampa project."
  },
];

const pillarLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/historic-restoration/", label: "Historic Restoration Services" },
];

const nearbyLocationLinks = [
  { href: "/locations/brandon-fl/", label: "Brandon, FL" },
  { href: "/locations/clearwater-fl/", label: "Clearwater, FL" },
  { href: "/locations/st-petersburg-fl/", label: "St. Petersburg, FL" },
  { href: "/locations/ruskin-fl/", label: "Ruskin, FL (Headquarters)" },
  { href: "/locations/lakeland-fl/", label: "Lakeland, FL" },
  { href: "/locations/plant-city-fl/", label: "Plant City, FL" },
];

export default function TampaPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Construction Services in Tampa"
        serviceDescription="Premier general contractor serving Tampa, FL with commercial construction, disaster recovery, historic restoration, and residential construction. Projects $250K-$25M+."
        minPrice="250000"
      />

      <Breadcrumb items={breadcrumbItems.slice(1)} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/Downtown-Tampa-Over-The-Bay-At-Sunrise-1024x682-1.jpg"
            alt="Downtown Tampa skyline over Tampa Bay at sunrise"
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
              <span className="text-brand-gold font-semibold">Serving Tampa, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Tampa Commercial & Insurance Restoration Contractor
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida&apos;s third-largest city and the economic hub of the Tampa Bay region. Florida Construction Specialists delivers large-scale commercial and residential construction throughout Tampa.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              From Ybor City historic restoration to downtown commercial development, we bring 20+ years of experience, 40+ years experience and in-house engineering, and deep local relationships to every Tampa project.
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
              <span className="font-semibold text-gray-700">25-30 Min from HQ</span>
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
              Construction Services in Tampa
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa represents our primary market and home territory. As the economic and cultural center of the Tampa Bay region, Tampa offers diverse construction opportunities from modern high-rise commercial development to historic preservation in districts like Ybor City and Hyde Park.
            </p>
            <p className="text-gray-600 mb-8">
              Florida Construction Specialists brings the expertise, bonding capacity, and local relationships to handle Tampa&apos;s most demanding projects. Whether you&apos;re developing commercial property downtown, restoring a historic building in Ybor City, recovering from hurricane damage, or building a custom waterfront home, FCS delivers on time and on budget.
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

            {/* Tampa Projects Gallery */}
            <h3 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">
              Featured Tampa Projects
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/wp-content/uploads/2023/12/Lions-World-Vision-Institute-Building-Exterior.jpg"
                  alt="Lions World Vision Institute historic restoration in Ybor City, Tampa"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Lion's Eye Institute</p>
                  <p className="text-sm text-gray-200">Ybor City - Historic Restoration</p>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/wp-content/uploads/2023/12/plant-high-school.webp"
                  alt="Plant High School historic brick restoration in Tampa"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Plant High School</p>
                  <p className="text-sm text-gray-200">Tampa - Brick Restoration</p>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/wp-content/uploads/2023/12/Old/custom-home-construction-2.jpg"
                  alt="Luxury custom home construction in South Tampa"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Luxury Custom Home</p>
                  <p className="text-sm text-gray-200">South Tampa - New Construction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FCS for Tampa */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Tampa Chooses FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Landmark className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Historic Expertise</h3>
              <p className="text-gray-600 text-sm">
                Deep experience with Ybor City&apos;s historic district, Barrio Latino Commission requirements, and Secretary of Interior Standards. We&apos;ve restored Tampa&apos;s architectural treasures including the Italian American Club.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Insurance Expertise</h3>
              <p className="text-gray-600 text-sm">
                Frank Bragano&apos;s 43+ years in property claims (former Allstate Commercial adjuster) means we understand both sides of large loss restoration. Direct carrier relationships for faster claim resolution.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Local Relationships</h3>
              <p className="text-gray-600 text-sm">
                20+ years of building relationships with Tampa building departments, plan reviewers, inspectors, and subcontractors. We know how to get projects through Tampa&apos;s approval process efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tampa Map */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Serving Tampa, Florida
          </h2>
          <GoogleMap city="Tampa" height={400} />
        </div>
      </section>

      {/* Tampa Market Info */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Tampa Construction Market
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Commercial & Historic</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Downtown Tampa commercial development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Ybor City historic restoration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Westshore business district</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Medical and healthcare facilities</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Residential & Recovery</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">South Tampa luxury custom homes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Hyde Park historic renovations</span>
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
        title="Tampa Construction FAQs"
        description="Common questions about construction services in Tampa, FL."
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
            Start Your Tampa Project Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. Tampa is our primary market—let us show you why local property owners trust FCS for their most important projects.
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
