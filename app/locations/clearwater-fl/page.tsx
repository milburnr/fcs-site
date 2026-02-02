import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Building2, Shield, Award, Clock, CheckCircle, Waves, Home, Hammer } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { GoogleMap } from "@/components/GoogleMap";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clearwater Commercial Construction Contractor | $500K-$25M+ Projects | FCS",
  description: "Premier general contractor serving Clearwater, FL. Commercial construction, multi-family residential, disaster recovery. Coastal expertise. 40+ years experience. Call (813) 420-7561.",
  keywords: "commercial construction clearwater, clearwater general contractor, disaster recovery clearwater fl, coastal construction clearwater florida",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations/" },
  { name: "Clearwater, FL", href: "/locations/clearwater-fl/" },
];

const services = [
  {
    title: "Commercial Construction",
    description: "Hotels, retail centers, office buildings, and mixed-use developments throughout Clearwater and Pinellas County.",
    icon: Building2,
    href: "/services/commercial/",
  },
  {
    title: "Coastal Construction",
    description: "Waterfront commercial and residential projects with expertise in hurricane-resistant construction, flood zone compliance, and marine environments.",
    icon: Waves,
    href: "/services/residential/hurricane-resistant-construction/",
  },
  {
    title: "Disaster Recovery",
    description: "Hurricane, storm, and flood damage restoration for commercial and residential properties. 24/7 emergency response throughout Clearwater.",
    icon: Shield,
    href: "/services/disaster-recovery/",
  },
  {
    title: "Residential Construction",
    description: "Luxury waterfront homes, beachfront properties, home additions, and major renovations for Clearwater's upscale coastal communities.",
    icon: Home,
    href: "/services/residential/",
  },
];

const faqs = [
  {
    question: "Do you serve Clearwater, FL?",
    answer: "Yes, Florida Construction Specialists proudly serves Clearwater and all of Pinellas County. Clearwater's coastal location and thriving tourism industry create unique construction opportunities. We maintain strong relationships with Clearwater building departments and understand the specific requirements for coastal construction in this area."
  },
  {
    question: "What types of construction projects do you handle in Clearwater?",
    answer: "In Clearwater, we handle commercial construction, hospitality projects, multi-family residential, disaster recovery, luxury waterfront homes, balcony reconstruction, and exterior waterproofing. Given Clearwater's coastal location, we have particular expertise in hurricane-resistant construction and flood zone compliance. Project values typically range from $250,000 to $25 million or more."
  },
  {
    question: "How far is your office from Clearwater?",
    answer: "Our headquarters at 822 Bayview Dr, Ruskin, FL is approximately 45-50 minutes from Clearwater across the bay. While slightly farther than our core Hillsborough County markets, we have extensive experience working in Clearwater and Pinellas County and maintain strong local relationships with subcontractors and suppliers."
  },
  {
    question: "Do you have experience with coastal construction in Clearwater?",
    answer: "Yes, coastal construction requires specialized expertise that we bring to every Clearwater project. This includes understanding FEMA flood zone requirements, hurricane-resistant building techniques, corrosion-resistant materials, and coordination with marine contractors for waterfront projects. We build structures designed to withstand Clearwater's coastal environment."
  },
  {
    question: "What is the Clearwater building permit process?",
    answer: "Clearwater construction projects require permits through the City of Clearwater Development and Neighborhood Services. Our team has experience navigating Clearwater's permit process including coastal construction reviews, flood zone compliance, and environmental considerations. We handle all permit applications and ensure full code compliance."
  },
  {
    question: "Do you provide disaster recovery services in Clearwater?",
    answer: "Yes, we provide comprehensive disaster recovery services throughout Clearwater. Clearwater's coastal location makes it particularly vulnerable to hurricane damage, and our team has extensive experience with coastal storm restoration. With Frank Bragano's 43+ years of insurance claims expertise, we specialize in large loss restoration and work directly with insurance carriers."
  },
  {
    question: "What areas near Clearwater do you also serve?",
    answer: "In addition to Clearwater, we serve all of Pinellas County including St. Petersburg, Largo, Dunedin, Safety Harbor, and Clearwater Beach. We also serve the entire Tampa Bay region including Tampa, Brandon, and our Ruskin headquarters area."
  },
  {
    question: "Are you licensed for commercial construction in Clearwater?",
    answer: "Yes, Florida Construction Specialists holds Florida General Contractor License #CBC1262722, which allows us to work on commercial and residential projects of any size throughout Florida, including Clearwater. We carry 40+ years experience and in-house engineering, comprehensive general liability insurance, and workers' compensation coverage."
  },
  {
    question: "What size projects do you typically handle in Clearwater?",
    answer: "We specialize in large-scale projects ranging from $250,000 to $25 million or more. This includes commercial construction, hospitality projects, multi-family developments, and large loss disaster recovery. As a prime contractor (never a subcontractor), we take full accountability for projects of all sizes in the Clearwater area."
  },
  {
    question: "How do I get started on a project in Clearwater?",
    answer: "Contact us at (813) 420-7561 for a project consultation. We'll discuss your project goals, timeline, and budget, then schedule a site visit. Our team will provide preliminary guidance including any coastal construction considerations and develop a detailed proposal for your Clearwater project."
  },
];

const pillarLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/historic-restoration/", label: "Historic Restoration Services" },
];

const nearbyLocationLinks = [
  { href: "/locations/st-petersburg-fl/", label: "St. Petersburg, FL" },
  { href: "/locations/tampa-fl/", label: "Tampa, FL" },
  { href: "/locations/bradenton-fl/", label: "Bradenton, FL" },
  { href: "/locations/sarasota-fl/", label: "Sarasota, FL" },
  { href: "/locations/ruskin-fl/", label: "Ruskin, FL (Headquarters)" },
];

export default function ClearwaterPage() {
  return (
    <>
      <LocalBusinessSchema city="Clearwater" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Construction Services in Clearwater"
        serviceDescription="Premier general contractor serving Clearwater, FL with commercial construction, coastal construction, disaster recovery, and residential construction. Projects $250K-$25M+."
        minPrice="250000"
      />

      <Breadcrumb items={breadcrumbItems.slice(1)} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/Old/Tampa-Bay-FEATURE.jpg"
            alt="Tampa Bay waterfront commercial construction"
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
              <span className="text-brand-gold font-semibold">Serving Clearwater, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Clearwater Commercial & Coastal Construction Contractor
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Coastal city with thriving tourism, hospitality, and commercial development. Florida Construction Specialists delivers large-scale commercial and residential construction throughout Clearwater.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              From beachfront hospitality projects to hurricane-resistant construction, we bring 20+ years of experience and specialized coastal expertise to every Clearwater project.
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
              <Waves className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Coastal Expertise</span>
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
              Construction Services in Clearwater
            </h2>
            <p className="text-gray-600 mb-6">
              Clearwater&apos;s stunning Gulf Coast location makes it a premier destination for tourism, hospitality, and coastal living. This creates unique construction opportunities and challenges that require specialized expertise.
            </p>
            <p className="text-gray-600 mb-8">
              Florida Construction Specialists brings deep coastal construction knowledge to every Clearwater project. Whether you&apos;re developing a beachfront hotel, building a waterfront commercial property, restoring hurricane damage, or constructing a luxury coastal home, FCS understands the specific requirements of building in Clearwater&apos;s marine environment.
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

      {/* Why Choose FCS for Clearwater */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Clearwater Chooses FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Waves className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Coastal Expertise</h3>
              <p className="text-gray-600 text-sm">
                We understand FEMA flood zone requirements, hurricane-resistant building techniques, corrosion-resistant materials, and the unique challenges of coastal construction in Clearwater&apos;s marine environment.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Storm Recovery</h3>
              <p className="text-gray-600 text-sm">
                Clearwater&apos;s coastal location makes hurricane preparedness critical. Our disaster recovery expertise includes rapid response, insurance claims management, and building structures designed to withstand future storms.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Hospitality Experience</h3>
              <p className="text-gray-600 text-sm">
                Clearwater&apos;s tourism economy requires construction partners who understand hospitality timelines, guest experience considerations, and working around operating businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clearwater Map */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Serving Clearwater, Florida
          </h2>
          <GoogleMap city="Clearwater" height={400} />
        </div>
      </section>

      {/* Clearwater Market Info */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Clearwater Construction Market
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Commercial & Hospitality</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Beachfront hotels and resorts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Waterfront commercial development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Downtown Clearwater revitalization</span>
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
                    <span className="text-gray-600">Luxury waterfront custom homes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Beachfront property construction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Hurricane damage restoration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Coastal flood damage restoration</span>
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
        title="Clearwater Construction FAQs"
        description="Common questions about construction services in Clearwater, FL."
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
            Start Your Clearwater Project Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. Our coastal construction expertise ensures your Clearwater project is built to last.
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
