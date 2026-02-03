import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Building2, Shield, Award, Home, Hammer, Star, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { GoogleMap } from "@/components/GoogleMap";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ruskin General Contractor | FCS HQ | $500K+",
  description: "Florida Construction Specialists headquarters in Ruskin, FL. Premier general contractor for commercial construction, disaster recovery, historic restoration. License CBC1262722. Call (813) 420-7561.",
  keywords: "ruskin general contractor, construction company ruskin fl, florida construction specialists headquarters, commercial construction south hillsborough",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations/" },
  { name: "Ruskin, FL", href: "/locations/ruskin-fl/" },
];

const services = [
  {
    title: "Commercial Construction",
    description: "Office buildings, retail centers, medical facilities, and mixed-use developments. Projects from $500K to $25M+ throughout Tampa Bay.",
    icon: Building2,
    href: "/services/commercial/",
  },
  {
    title: "Disaster Recovery",
    description: "Hurricane, storm, and flood damage restoration for commercial and residential properties. 43+ years insurance claims expertise.",
    icon: Shield,
    href: "/services/disaster-recovery/",
  },
  {
    title: "Residential Construction",
    description: "Luxury custom homes, waterfront estates, home additions, and major renovations throughout Tampa Bay.",
    icon: Home,
    href: "/services/residential/",
  },
  {
    title: "Historic Restoration",
    description: "SHPO compliance, Secretary of Interior Standards, historic tax credits. Ybor City expertise including Italian American Club restoration.",
    icon: Building2,
    href: "/services/historic-restoration/",
  },
];

const faqs = [
  {
    question: "Is Florida Construction Specialists based in Ruskin?",
    answer: "Yes, Florida Construction Specialists is headquartered at 822 Bayview Dr, Ruskin, FL 33579. Our central Tampa Bay location allows us to serve the entire region efficiently, from Tampa and Brandon to Sarasota and St. Petersburg. Ruskin provides ideal access to our full service area."
  },
  {
    question: "What types of construction projects do you handle?",
    answer: "We handle large-scale commercial construction, multi-family residential, disaster recovery, historic restoration, luxury custom homes, balcony reconstruction, and exterior waterproofing. As a prime contractor (never a subcontractor), we take full accountability on every project. Project values typically range from $250,000 to $25 million or more."
  },
  {
    question: "What areas do you serve from your Ruskin location?",
    answer: "From our Ruskin headquarters, we serve the entire Tampa Bay region including Tampa (25-30 min), Brandon (20 min), Plant City (15 min), Lakeland (30 min), Clearwater and St. Petersburg (45-50 min), Sarasota (45-50 min), and Bradenton (30-35 min). Our central location provides efficient access to all major markets."
  },
  {
    question: "Who is the principal of Florida Construction Specialists?",
    answer: "Frank Bragano is the principal of Florida Construction Specialists, bringing 43+ years of experience in property claims and construction. His background includes serving as an Allstate Commercial adjuster (1982-1989) and Executive General Adjuster credentials with CJW-Vericlaim/Sedgwick. This unique insurance industry expertise gives us a distinct advantage in disaster recovery and large loss restoration."
  },
  {
    question: "What is your bonding capacity?",
    answer: "Florida Construction Specialists maintains 40+ years experience and in-house engineering, enabling us to take on large-scale projects that many contractors cannot. Combined with our Florida General Contractor License #CBC1262722, comprehensive general liability insurance, and workers' compensation coverage, we have the financial strength to handle projects of any size."
  },
  {
    question: "Do you provide disaster recovery services?",
    answer: "Yes, disaster recovery is one of our core specialties. Frank Bragano's insurance industry background means we understand both sides of large loss claims. We've completed major hurricane recovery projects including Turner Agri-Center ($12.5M+), Hurricane Harvey properties in Texas ($40M+), and Hurricane Irma properties in Miami ($20M+)."
  },
  {
    question: "What is your experience with historic restoration?",
    answer: "We have extensive historic restoration experience including the Italian American Club in Ybor City ($1.2M), Lion's Eye Institute (National Historic Register), Bay Pines Veterans Hospital in St. Petersburg ($2M federal historic compliance), and Plant High School in Tampa ($525K). We understand SHPO requirements, Secretary of Interior Standards, and Barrio Latino Commission compliance."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, Florida Construction Specialists is fully licensed and insured. We hold Florida General Contractor License #CBC1262722, maintain 40+ years experience and in-house engineering, carry comprehensive general liability insurance, and provide full workers' compensation coverage for all employees and subcontractors."
  },
  {
    question: "What makes Florida Construction Specialists different?",
    answer: "Three key differentiators set us apart: (1) Always prime contractor—we never subcontract our work, ensuring full accountability; (2) Dual expertise in both commercial and residential construction under one roof; (3) Frank Bragano's 43+ years of insurance industry experience, giving us unique expertise in disaster recovery and large loss restoration."
  },
  {
    question: "How do I contact Florida Construction Specialists?",
    answer: "Contact us at (813) 420-7561 or visit our office at 822 Bayview Dr, Ruskin, FL 33579. Our office hours are Monday through Friday, 8:00 AM to 4:00 PM. You can also reach us by email at frankbragano.fcs@gmail.com. We respond to all inquiries within 24-48 hours."
  },
];

const pillarLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/historic-restoration/", label: "Historic Restoration Services" },
];

const serviceAreaLinks = [
  { href: "/locations/tampa-fl/", label: "Tampa, FL (25-30 min)" },
  { href: "/locations/brandon-fl/", label: "Brandon, FL (20 min)" },
  { href: "/locations/plant-city-fl/", label: "Plant City, FL (15 min)" },
  { href: "/locations/lakeland-fl/", label: "Lakeland, FL (30 min)" },
  { href: "/locations/clearwater-fl/", label: "Clearwater, FL" },
  { href: "/locations/st-petersburg-fl/", label: "St. Petersburg, FL" },
  { href: "/locations/sarasota-fl/", label: "Sarasota, FL" },
  { href: "/locations/bradenton-fl/", label: "Bradenton, FL" },
];

export default function RuskinPage() {
  return (
    <>
      <LocalBusinessSchema city="Ruskin" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Construction Services from Ruskin Headquarters"
        serviceDescription="Florida Construction Specialists headquarters. Premier general contractor serving Tampa Bay with commercial construction, disaster recovery, historic restoration, and residential construction. Projects $250K-$25M+."
        minPrice="250000"
      />

      <Breadcrumb items={breadcrumbItems.slice(1)} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Commercial construction headquarters area"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <Star className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">FCS Headquarters - Ruskin, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Florida Construction Specialists Headquarters
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Premier general contractor serving all of Tampa Bay from our central Ruskin location. Commercial construction, disaster recovery, historic restoration, and luxury residential projects from $250K to $25M+.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              Our Ruskin headquarters provides ideal access to Tampa, Brandon, Plant City, Lakeland, Clearwater, St. Petersburg, Sarasota, and Bradenton—the entire Tampa Bay region.
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
              <MapPin className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Headquarters Location</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">In-House Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">43+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Hammer className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Prime Contractor</span>
            </div>
          </div>
        </div>
      </section>

      {/* About FCS */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              About Florida Construction Specialists
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists is a premier general contractor headquartered in Ruskin, FL. Led by Frank Bragano—with 43+ years of experience in property claims and construction—we deliver large-scale commercial and residential construction throughout the Tampa Bay region.
            </p>
            <p className="text-gray-600 mb-8">
              What sets us apart is our commitment to being a prime contractor on every project. We never subcontract our work, ensuring full accountability and direct project control. Our 40+ years experience and in-house engineering enables projects that many contractors cannot handle, while our insurance industry expertise (Frank&apos;s background as an Allstate Commercial adjuster) gives us unique capabilities in disaster recovery and large loss restoration.
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

      {/* Why Choose FCS */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Choose Florida Construction Specialists
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Always Prime Contractor</h3>
              <p className="text-gray-600 text-sm">
                We never work as a subcontractor. Every project has direct FCS oversight and accountability. This means better quality control, faster decision-making, and clearer communication.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Insurance Industry Expertise</h3>
              <p className="text-gray-600 text-sm">
                Frank Bragano&apos;s 43+ years in property claims means we understand both sides of large loss restoration. Direct carrier relationships lead to faster claim resolution.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Dual Expertise</h3>
              <p className="text-gray-600 text-sm">
                Commercial and residential construction under one roof. Whether you need a $50M commercial development or a custom luxury home, we have the expertise to deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ruskin Map */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Our Ruskin Location
          </h2>
          <GoogleMap city="Ruskin" height={400} />
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-2">
              <strong>Address:</strong> {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Phone:</strong> <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-brand-green hover:underline">{BUSINESS_INFO.phone}</a>
            </p>
            <p className="text-gray-600">
              <strong>Hours:</strong> Monday - Friday, 8:00 AM - 4:00 PM
            </p>
          </div>
        </div>
      </section>

      {/* Service Area Coverage */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Service Area Coverage
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Hillsborough & Polk County</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Tampa (25-30 minutes)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Brandon (20 minutes)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Plant City (15 minutes)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Lakeland (30 minutes)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Pinellas, Manatee & Sarasota</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Clearwater (45-50 minutes)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">St. Petersburg (35-40 minutes)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Bradenton (30-35 minutes)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Sarasota (45-50 minutes)</span>
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
        title="Frequently Asked Questions"
        description="Common questions about Florida Construction Specialists and our Ruskin headquarters."
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
                title="Service Areas"
                links={serviceAreaLinks}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Contact Florida Construction Specialists
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ready to discuss your project? Contact our Ruskin headquarters for a consultation. We serve the entire Tampa Bay region with excellence.
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
