import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Building2, Shield, Award, Clock, CheckCircle, Phone, ArrowRight, MapPin, Briefcase, HardHat, FileCheck } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { HighLevelForm } from "@/components/HighLevelForm";
import { GoogleMap } from "@/components/GoogleMap";
import { InternalLinks } from "@/components/InternalLinks";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Commercial Construction in Tampa",
  description: "Tampa's premier commercial contractor for $500K-$25M+ projects. Design-build, medical, multi-family, industrial construction. 40+ years experience. Call (813) 420-7561.",
  keywords: [
    "commercial construction tampa",
    "commercial contractor tampa",
    "commercial building tampa",
    "tampa commercial construction company",
    "design-build tampa",
    "commercial general contractor tampa fl",
  ],
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Commercial Construction", href: "/services/commercial/" },
  { name: "Tampa", href: "/commercial-construction-tampa/" },
];

const tampaFaqs = [
  {
    question: "What types of commercial construction projects do you handle in Tampa?",
    answer: "Florida Construction Specialists handles a comprehensive range of commercial construction projects in Tampa including design-build construction, medical and healthcare facilities, multi-family developments, industrial and warehouse buildings, tenant improvements, retail construction, and commercial additions. Our projects typically range from $500,000 to $25 million or more."
  },
  {
    question: "Do you have experience with Tampa's permitting process?",
    answer: "Yes, we have extensive experience navigating Tampa's permitting requirements through the City of Tampa Building Services Department. We understand local zoning codes, impact fees, and the specific requirements for commercial construction in Tampa's various districts including Downtown Tampa, Westshore Business District, and emerging areas like Water Street Tampa."
  },
  {
    question: "What is your bonding capacity for Tampa commercial projects?",
    answer: "Florida Construction Specialists maintains bonding capacity exceeding $10 million, which allows us to take on large-scale commercial projects that many contractors cannot. This financial strength, combined with our License CBC1262722, gives Tampa property owners confidence in our ability to complete substantial projects."
  },
  {
    question: "How long have you been doing commercial construction in Tampa?",
    answer: "We've been serving the Tampa Bay commercial construction market for over 20 years, completing more than 150 projects throughout the region. Our deep roots in Tampa mean we've built relationships with local officials, subcontractors, and suppliers that benefit every project we undertake."
  },
  {
    question: "Do you provide design-build services in Tampa?",
    answer: "Yes, design-build is one of our core service offerings for Tampa commercial clients. This single-source approach streamlines communication, accelerates project delivery, and provides clear accountability. We coordinate architects, engineers, and construction teams under one contract for seamless project execution."
  },
  {
    question: "Can you handle medical facility construction in Tampa?",
    answer: "Absolutely. We have extensive experience with AHCA-compliant medical construction in Tampa including medical offices, surgical centers, clinics, and specialty healthcare facilities. We understand the unique requirements of medical construction including infection control, specialized systems, and regulatory compliance."
  },
  {
    question: "What areas of Tampa do you serve?",
    answer: "We serve all of Tampa including Downtown Tampa, South Tampa, West Tampa, East Tampa, Westshore, Carrollwood, New Tampa, Temple Terrace, and surrounding areas. Our Ruskin headquarters is centrally located to serve the entire Tampa Bay region efficiently."
  },
  {
    question: "How do you ensure commercial projects stay on schedule in Tampa?",
    answer: "We use Critical Path Method (CPM) scheduling for all commercial projects, with experienced project managers who understand Tampa's construction environment. Regular progress meetings, proactive issue resolution, and relationships with local subcontractors and suppliers help us maintain schedules even when challenges arise."
  },
  {
    question: "Do you handle commercial construction in Tampa's historic districts?",
    answer: "Yes, we have experience with commercial construction in Tampa's historic areas including Ybor City's National Historic Landmark District and Hyde Park. We understand Certificate of Appropriateness requirements and work with preservation boards to ensure projects meet all historic district standards."
  },
  {
    question: "What makes Florida Construction Specialists different from other Tampa commercial contractors?",
    answer: "Three key differentiators set us apart: First, we only work as a prime contractor—never subcontracting our general contracting services—which means direct accountability. Second, our 40+ years experience and in-house engineering enables large-scale projects. Third, our 43+ years of combined construction and insurance industry experience brings unique expertise to every project."
  },
];

const pillarLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/services/commercial/medical-construction/", label: "Medical & Healthcare Facilities" },
  { href: "/services/commercial/multi-family/", label: "Multi-Family Construction" },
];

const nearbyLocationLinks = [
  { href: "/locations/brandon-fl/", label: "Brandon, FL" },
  { href: "/locations/clearwater-fl/", label: "Clearwater, FL" },
  { href: "/locations/st-petersburg-fl/", label: "St. Petersburg, FL" },
  { href: "/locations/lakeland-fl/", label: "Lakeland, FL" },
];

export default function CommercialConstructionTampaPage() {
  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema city="Tampa" service="Commercial Construction" />
      <ServiceSchema
        serviceName="Commercial Construction in Tampa"
        serviceDescription="Large-scale commercial construction services in Tampa, FL. Design-build, medical facilities, multi-family, industrial, and retail construction from $500K to $25M+."
        minPrice="500000"
      />
      <FAQSchema faqs={tampaFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Commercial construction project in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span className="text-sm font-medium">Serving Tampa, FL</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight">
                Commercial Construction in Tampa, Florida
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Florida Construction Specialists is Tampa's trusted commercial contractor for projects ranging from $500K to $25M+. From Downtown Tampa's evolving skyline to Westshore's business corridor, we deliver exceptional commercial construction with 40+ years experience and in-house engineering and 20+ years of local expertise.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                  <p className="text-sm font-semibold">Licensed</p>
                  <p className="text-xs text-gray-300">{BUSINESS_INFO.licenseNumber}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Award className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                  <p className="text-sm font-semibold">Bonding</p>
                  <p className="text-xs text-gray-300">$10M+ Capacity</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                  <p className="text-sm font-semibold">Experience</p>
                  <p className="text-xs text-gray-300">{BUSINESS_INFO.yearsInBusiness}+ Years</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Building2 className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                  <p className="text-sm font-semibold">Projects</p>
                  <p className="text-xs text-gray-300">{BUSINESS_INFO.projectsCompleted}+ Delivered</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Schedule Project Consultation
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Request a Tampa Project Consultation
              </h2>
              <p className="text-gray-600 mb-6">
                Tell us about your commercial project in Tampa and receive a consultation from our team.
              </p>
              <HighLevelForm variant="commercial" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Your Trusted Tampa Commercial Construction Partner
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl mb-6">
                Tampa is one of Florida's fastest-growing metropolitan areas, with commercial construction activity spanning from the transformative Water Street Tampa development to the revitalization of historic Ybor City and the continued growth of the Westshore Business District. Florida Construction Specialists has been privileged to contribute to this growth, delivering commercial projects that help businesses thrive in the Tampa Bay economy.
              </p>
              <p className="mb-6">
                As a prime general contractor, we never subcontract our general contracting services. When you hire Florida Construction Specialists for your Tampa commercial project, you get direct accountability, clear communication, and the full resources of our experienced team. Our principal brings 43+ years of construction and insurance industry experience, including work as an Executive General Adjuster, providing unique insight into risk management and project delivery.
              </p>
              <p className="mb-6">
                Tampa's commercial construction environment presents specific challenges and opportunities. From the hurricane-resistant construction requirements of Florida Building Code to the unique soil conditions in areas near the bay, successful commercial construction requires local expertise. We've built relationships with Tampa's building department, understand local zoning requirements, and work with subcontractors who know Tampa's construction landscape intimately.
              </p>
              <p>
                Whether you're developing a medical facility in the prestigious Tampa General Hospital corridor, building a multi-family community in one of Tampa's growing neighborhoods, constructing an industrial facility near the Port of Tampa, or renovating retail space in South Tampa, Florida Construction Specialists has the expertise, bonding capacity, and local knowledge to deliver your project successfully.
              </p>
          {/* Project Gallery */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
                alt="Commercial construction project"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold">Commercial Building</p>
                <p className="text-sm text-gray-200">New Construction</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="/wp-content/uploads/2023/12/Lions-World-Vision-Institute-Building-Exterior.jpg"
                alt="Commercial brick building"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold">Commercial Renovation</p>
                <p className="text-sm text-gray-200">Building Restoration</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="/images/leon-county-detention-center-tallahasse/leon-county-detention-center-tallahasse-display.webp"
                alt="Multi-story commercial building"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold">Institutional Facility</p>
                <p className="text-sm text-gray-200">Large-Scale Project</p>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Visual Break */}
      <ContentParallax
        src="/images/tampa-commercial-construction/tampa-commercial-construction-small.webp"
        alt="Commercial construction in Tampa Bay"
        title="40+ Years Building Tampa Bay"
        subtitle="From ground-up construction to major renovations"
        overlayOpacity={0.55}
      />

      {/* Services in Tampa */}
      <section className="section-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Commercial Construction Services in Tampa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive commercial construction capabilities tailored for Tampa's diverse business environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Design-Build Construction",
                description: "Single-source accountability for Tampa commercial projects, combining design and construction under one contract for streamlined delivery and clear communication.",
                href: "/services/commercial/design-build/",
              },
              {
                title: "Medical & Healthcare Facilities",
                description: "AHCA-compliant medical construction in Tampa including surgical centers, clinics, medical offices, and specialty healthcare facilities.",
                href: "/services/commercial/medical-construction/",
              },
              {
                title: "Multi-Family Construction",
                description: "Apartment complexes, condominiums, and multi-family residential developments throughout Tampa's growing neighborhoods.",
                href: "/services/commercial/multi-family/",
              },
              {
                title: "Industrial & Warehouse",
                description: "Industrial flex space, distribution centers, and warehouse facilities serving Tampa's logistics and manufacturing sectors.",
                href: "/services/commercial/industrial-construction/",
              },
              {
                title: "Tenant Improvements",
                description: "Commercial interior buildouts, office renovations, and retail space customization for Tampa businesses.",
                href: "/services/commercial/tenant-improvements/",
              },
              {
                title: "Retail Construction",
                description: "Retail centers, restaurant buildouts, and hospitality construction throughout Tampa's commercial districts.",
                href: "/services/commercial/retail-construction/",
              },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-full bg-brand-green-bg flex items-center justify-center mb-4 group-hover:bg-brand-green transition-colors">
                  <Building2 className="w-7 h-7 text-brand-green-dark group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 group-hover:text-brand-green transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="inline-flex items-center text-brand-green font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tampa-Specific Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Commercial Construction Across Tampa
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  Tampa's commercial construction landscape is as diverse as the city itself. From the high-rise developments reshaping Downtown Tampa and Water Street to the medical corridor expanding around Tampa General Hospital, commercial construction in Tampa requires contractors who understand the city's unique requirements and opportunities.
                </p>

                <h3 className="text-xl font-bold text-brand-green-dark mt-8 mb-4">Downtown Tampa & Water Street</h3>
                <p className="mb-6">
                  The transformation of Downtown Tampa, particularly the Water Street Tampa development, has created unprecedented opportunities for commercial construction. Whether building new office space, mixed-use developments, or supporting infrastructure, we understand the high standards and coordination required for downtown construction.
                </p>

                <h3 className="text-xl font-bold text-brand-green-dark mt-8 mb-4">Westshore Business District</h3>
                <p className="mb-6">
                  Tampa's Westshore area remains one of Florida's largest business districts outside Miami. We've completed tenant improvements, office renovations, and commercial buildouts throughout Westshore, understanding the fast-paced requirements of this corporate environment.
                </p>

                <h3 className="text-xl font-bold text-brand-green-dark mt-8 mb-4">South Tampa & Hyde Park</h3>
                <p className="mb-6">
                  South Tampa's established neighborhoods require commercial construction that respects the area's character while meeting modern business needs. From retail to medical offices, we build projects that enhance South Tampa's commercial vitality.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-green-dark mt-8 mb-4">Ybor City Historic District</h3>
              <p className="text-gray-700 mb-6">
                Commercial construction in Ybor City's National Historic Landmark District requires special expertise. We understand the Certificate of Appropriateness process, work with the Barrio Latino Commission, and know how to balance historic preservation with modern commercial needs.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-4">New Tampa & USF Area</h3>
              <p className="text-gray-700 mb-6">
                The growth around the University of South Florida has created demand for medical facilities, retail centers, and multi-family housing. We serve the New Tampa corridor with commercial construction expertise tailored to this dynamic area.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Port Tampa & Industrial Areas</h3>
              <p className="text-gray-700 mb-6">
                Tampa's industrial sector, particularly areas near the Port of Tampa, requires specialized construction for warehouses, distribution centers, and industrial facilities. Our industrial construction experience includes working with the unique requirements of logistics and manufacturing operations.
              </p>

              <div className="bg-brand-green-bg rounded-xl p-6 mt-8">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Tampa Building Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                    <span className="text-gray-700">City of Tampa Building Services permits and inspections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Florida Building Code 7th Edition compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Hurricane-resistant construction requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Hillsborough County Environmental Protection Commission</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                    <span className="text-gray-700">ADA accessibility compliance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Ready to Build in Tampa?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. We'll discuss your Tampa commercial construction needs and provide preliminary budgeting.
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
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Our Tampa Construction Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven approach tailored for Tampa's commercial construction environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Pre-Construction",
                description: "We assess your Tampa project requirements, conduct site analysis, and develop preliminary budgets and schedules specific to Tampa's market conditions and permitting timeline.",
                icon: FileCheck,
              },
              {
                step: "02",
                title: "Design Coordination",
                description: "Whether design-build or design-bid-build, we coordinate all design elements ensuring constructability and compliance with Tampa's building codes and zoning requirements.",
                icon: Building2,
              },
              {
                step: "03",
                title: "Tampa Permitting",
                description: "We navigate the City of Tampa Building Services Department, securing all required permits, approvals, and inspections to keep your project on schedule.",
                icon: Briefcase,
              },
              {
                step: "04",
                title: "Construction Execution",
                description: "Experienced superintendents manage daily construction with Tampa-based subcontractors who understand local conditions, codes, and quality expectations.",
                icon: HardHat,
              },
              {
                step: "05",
                title: "Quality Control",
                description: "Rigorous quality control ensures your Tampa project meets specifications, code requirements, and our high standards—documented at every phase.",
                icon: CheckCircle,
              },
              {
                step: "06",
                title: "Completion & Warranty",
                description: "Thorough closeout including punch list resolution, Certificate of Occupancy, training, and comprehensive warranty documentation for your Tampa property.",
                icon: Award,
              },
            ].map((item) => (
              <div key={item.step} className="relative bg-gray-50 rounded-xl p-6">
                <div className="absolute -top-4 left-6 bg-brand-green text-white text-sm font-bold px-3 py-1 rounded-full">
                  Step {item.step}
                </div>
                <div className="mt-4">
                  <item.icon className="w-10 h-10 text-brand-green mb-4" />
                  <h3 className="text-xl font-bold text-brand-green-dark mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-light">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Serving Commercial Construction Throughout Tampa
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From our Ruskin headquarters, we serve all of Tampa and Hillsborough County for commercial construction projects.
            </p>
          </div>
          <GoogleMap city="Tampa" height={400} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
                Tampa Commercial Construction FAQ
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about commercial construction in Tampa, Florida.
              </p>
            </div>

            <FAQ items={tampaFaqs} />
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="section-light">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Commercial Services"
            links={pillarLinks}
          />

          <div className="mt-12">
            <InternalLinks
              title="Nearby Service Areas"
              links={nearbyLocationLinks}
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                Start Your Tampa Commercial Project Today
              </h2>
              <p className="text-xl text-gray-200 mb-6">
                Contact Florida Construction Specialists for a consultation on your Tampa commercial construction project. Our team will discuss your vision, provide preliminary budgeting, and outline the path to successful project delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-green-dark font-bold rounded-full hover:bg-brand-gold-light transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call {BUSINESS_INFO.phone}
                </a>
                <Link href="/contact/" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all">
                  Contact Us Online
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm text-gray-300 mb-4">Tampa's trusted commercial contractor:</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-200">
                  <span>✓ License {BUSINESS_INFO.licenseNumber}</span>
                  <span>✓ In-House Engineering</span>
                  <span>✓ {BUSINESS_INFO.yearsInBusiness}+ Years Experience</span>
                  <span>✓ {BUSINESS_INFO.projectsCompleted}+ Projects</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Schedule Your Consultation
              </h3>
              <HighLevelForm variant="commercial" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
