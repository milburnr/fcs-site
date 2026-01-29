import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Building2, Shield, Award, Clock, CheckCircle, Phone, ArrowRight, MapPin, Briefcase, HardHat, FileCheck, Landmark } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { HighLevelForm } from "@/components/HighLevelForm";
import { GoogleMap } from "@/components/GoogleMap";
import { InternalLinks } from "@/components/InternalLinks";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Commercial Construction in St. Petersburg | Florida Construction Specialists",
  description: "St. Petersburg's premier commercial contractor for $500K-$25M+ projects. Design-build, medical, multi-family, historic restoration. Federal compliance expertise. Call (813) 420-7561.",
  keywords: [
    "commercial construction st petersburg",
    "commercial contractor st petersburg",
    "commercial building st petersburg",
    "st petersburg commercial construction company",
    "design-build st petersburg",
    "commercial general contractor st petersburg fl",
  ],
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Commercial Construction", href: "/services/commercial/" },
  { name: "St. Petersburg", href: "/commercial-construction-st-petersburg/" },
];

const stPeteFaqs = [
  {
    question: "What types of commercial construction projects do you handle in St. Petersburg?",
    answer: "Florida Construction Specialists handles a comprehensive range of commercial construction projects in St. Petersburg including design-build construction, medical and healthcare facilities, multi-family developments, industrial and warehouse buildings, tenant improvements, retail construction, historic restoration, and federal facility compliance projects. Our projects typically range from $500,000 to $25 million or more."
  },
  {
    question: "Do you have experience with Pinellas County's permitting process?",
    answer: "Yes, we have extensive experience navigating Pinellas County's permitting requirements through the City of St. Petersburg Development Services Department. We understand local zoning codes, flood zone regulations, waterfront development requirements, and the specific permitting processes for St. Petersburg's various districts including Downtown, Gateway, Edge District, and the historic Old Northeast."
  },
  {
    question: "Can you handle federal historic compliance projects in St. Petersburg?",
    answer: "Absolutely. Florida Construction Specialists has completed significant federal historic compliance projects including the $2 million Bay Pines Veterans Hospital renovation in St. Petersburg. We understand Section 106 requirements, coordinate with the State Historic Preservation Office (SHPO), and have experience meeting the Secretary of the Interior's Standards for Historic Preservation on federal properties."
  },
  {
    question: "What is your bonding capacity for St. Petersburg commercial projects?",
    answer: "Florida Construction Specialists maintains bonding capacity exceeding $10 million, which allows us to take on large-scale commercial projects that many contractors cannot. This financial strength, combined with our License CBC1262722, gives St. Petersburg property owners and developers confidence in our ability to complete substantial projects."
  },
  {
    question: "Do you work on waterfront commercial developments in St. Petersburg?",
    answer: "Yes, we have extensive experience with waterfront commercial construction in St. Petersburg. We understand the unique requirements including Army Corps of Engineers coordination, seawall considerations, elevated construction in flood zones, marine-grade materials, and the specific permitting requirements for properties near Tampa Bay and the Gulf of Mexico."
  },
  {
    question: "What areas of St. Petersburg do you serve for commercial construction?",
    answer: "We serve all of St. Petersburg including Downtown St. Pete, the Gateway area, Edge District, Grand Central District, Old Northeast, Historic Kenwood, Pinellas Point, Tyrone, and surrounding areas. Our Ruskin headquarters is strategically located to serve St. Petersburg and all of Pinellas County efficiently."
  },
  {
    question: "Do you provide design-build services in St. Petersburg?",
    answer: "Yes, design-build is one of our core service offerings for St. Petersburg commercial clients. This single-source approach streamlines communication, accelerates project delivery, and provides clear accountability. We coordinate architects, engineers, and construction teams under one contract for seamless project execution, particularly valuable for the fast-moving St. Pete development market."
  },
  {
    question: "Can you handle medical facility construction in St. Petersburg?",
    answer: "Absolutely. We have extensive experience with AHCA-compliant medical construction in St. Petersburg including medical offices, surgical centers, clinics, and specialty healthcare facilities. We understand the unique requirements of medical construction including infection control protocols, specialized MEP systems, and regulatory compliance specific to Florida healthcare facilities."
  },
  {
    question: "How do you ensure commercial projects stay on schedule in St. Petersburg?",
    answer: "We use Critical Path Method (CPM) scheduling for all commercial projects, with experienced project managers who understand St. Petersburg's construction environment. Regular progress meetings, proactive issue resolution, and relationships with local subcontractors and Pinellas County officials help us maintain schedules even when challenges arise, including coordination with the city's active downtown development."
  },
  {
    question: "What makes Florida Construction Specialists different from other St. Petersburg commercial contractors?",
    answer: "Three key differentiators set us apart: First, we only work as a prime contractor—never subcontracting our general contracting services—which means direct accountability on every St. Petersburg project. Second, our 40+ years experience and in-house engineering enables large-scale projects that many contractors cannot undertake. Third, our unique expertise in federal historic compliance, demonstrated by projects like Bay Pines Veterans Hospital, brings specialized capabilities to St. Petersburg's commercial construction market."
  },
];

const pillarLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/services/commercial/medical-construction/", label: "Medical & Healthcare Facilities" },
  { href: "/services/commercial/multi-family/", label: "Multi-Family Construction" },
];

const nearbyLocationLinks = [
  { href: "/commercial-construction-tampa/", label: "Tampa Commercial Construction" },
  { href: "/commercial-construction-clearwater/", label: "Clearwater Commercial Construction" },
  { href: "/commercial-construction-bradenton/", label: "Bradenton Commercial Construction" },
  { href: "/locations/lakeland-fl/", label: "Lakeland, FL" },
];

export default function CommercialConstructionStPetersburgPage() {
  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema city="St. Petersburg" service="Commercial Construction" />
      <ServiceSchema
        serviceName="Commercial Construction in St. Petersburg"
        serviceDescription="Large-scale commercial construction services in St. Petersburg, FL. Design-build, medical facilities, multi-family, industrial, historic restoration, and federal compliance projects from $500K to $25M+."
        city="St. Petersburg"
        minPrice="500000"
      />
      <FAQSchema faqs={stPeteFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-large.webp"
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
                <span className="text-sm font-medium">Serving St. Petersburg, FL</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight">
                Commercial Construction in St. Petersburg, Florida
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Florida Construction Specialists is St. Petersburg's trusted commercial contractor for projects ranging from $500K to $25M+. From Downtown St. Pete's vibrant arts district to the Gateway business corridor and historic Old Northeast, we deliver exceptional commercial construction with 40+ years experience and in-house engineering and federal historic compliance expertise.
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
                Request a St. Petersburg Project Consultation
              </h2>
              <p className="text-gray-600 mb-6">
                Tell us about your commercial project in St. Petersburg and receive a consultation from our team.
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
              Your Trusted St. Petersburg Commercial Construction Partner
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl mb-6">
                St. Petersburg has transformed into one of Florida's most dynamic cities, with commercial construction activity spanning from the revitalized Downtown arts district to the expanding Gateway business corridor and the growing Edge District. Florida Construction Specialists has been privileged to contribute to this transformation, delivering commercial projects that help businesses thrive in St. Pete's evolving economy.
              </p>
              <p className="mb-6">
                As a prime general contractor, we never subcontract our general contracting services. When you hire Florida Construction Specialists for your St. Petersburg commercial project, you get direct accountability, clear communication, and the full resources of our experienced team. Our principal brings 43+ years of construction and insurance industry experience, including work as an Executive General Adjuster, providing unique insight into risk management and project delivery.
              </p>
              <p className="mb-6">
                St. Petersburg's commercial construction environment presents unique opportunities and requirements. The city's waterfront location means understanding flood zone construction, marine-grade materials, and Army Corps of Engineers coordination. The historic character of neighborhoods like Old Northeast and the Kenwood Historic District requires sensitivity to preservation standards. The growing Gateway area demands efficient construction delivery to meet the pace of corporate development.
              </p>
              <p>
                Our federal historic compliance expertise, demonstrated through projects like the $2 million Bay Pines Veterans Hospital renovation, sets us apart in the St. Petersburg market. Whether you're developing a medical facility, building a multi-family community in one of St. Pete's growing neighborhoods, constructing industrial space near the port, or renovating historic commercial property, Florida Construction Specialists has the expertise, bonding capacity, and local knowledge to deliver your project successfully.
              </p>
            </div>
          
          {/* Project Gallery */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-large.webp"
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
      </section>

      {/* Featured Project Section */}
      <section className="section-light">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <div className="inline-flex items-center gap-2 bg-brand-green-bg px-4 py-2 rounded-full mb-6">
                  <Landmark className="w-4 h-4 text-brand-green" />
                  <span className="text-sm font-medium text-brand-green-dark">Featured Project</span>
                </div>
                <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                  Bay Pines Veterans Hospital
                </h2>
                <p className="text-xl text-gray-600 mb-4">$2 Million Federal Historic Healthcare Facility</p>
                <div className="prose prose-lg max-w-none text-gray-700 mb-6">
                  <p>
                    This landmark project demonstrates our expertise in federal historic compliance and healthcare construction. The Bay Pines VA Medical Center required meticulous coordination with the Department of Veterans Affairs, the State Historic Preservation Office, and multiple federal agencies to ensure compliance with Section 106 requirements while delivering a modern healthcare environment.
                  </p>
                  <p>
                    Our team navigated the complex intersection of historic preservation standards, federal acquisition regulations, and AHCA healthcare compliance to deliver a project that honors the facility's historic character while meeting contemporary medical standards. This project showcases our ability to handle the most demanding commercial construction requirements in St. Petersburg and throughout the Tampa Bay region.
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Section 106 federal historic compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                    <span className="text-gray-700">SHPO coordination and approval</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                    <span className="text-gray-700">AHCA healthcare facility standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Federal acquisition compliance</span>
                  </li>
                </ul>
                <Link href="/contact/" className="btn-primary inline-flex items-center">
                  Discuss Your Project <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
              <div className="bg-brand-green-bg flex items-center justify-center p-12">
                <div className="text-center">
                  <Landmark className="w-24 h-24 text-brand-green mx-auto mb-6" />
                  <p className="text-2xl font-bold text-brand-green-dark mb-2">$2 Million</p>
                  <p className="text-gray-600">Federal Historic Healthcare Facility</p>
                  <p className="text-sm text-gray-500 mt-2">St. Petersburg, FL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in St. Petersburg */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Commercial Construction Services in St. Petersburg
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive commercial construction capabilities tailored for St. Petersburg's diverse and growing business environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Design-Build Construction",
                description: "Single-source accountability for St. Petersburg commercial projects, combining design and construction under one contract for streamlined delivery and clear communication in the fast-paced St. Pete market.",
                href: "/services/commercial/design-build/",
              },
              {
                title: "Medical & Healthcare Facilities",
                description: "AHCA-compliant medical construction in St. Petersburg including surgical centers, clinics, medical offices, and specialty healthcare facilities with federal compliance expertise.",
                href: "/services/commercial/medical-construction/",
              },
              {
                title: "Multi-Family Construction",
                description: "Apartment complexes, condominiums, and multi-family residential developments throughout St. Petersburg's growing neighborhoods from Edge District to Pinellas Point.",
                href: "/services/commercial/multi-family/",
              },
              {
                title: "Industrial & Warehouse",
                description: "Industrial flex space, distribution centers, and warehouse facilities serving St. Petersburg's logistics and light manufacturing sectors in the Gateway corridor and beyond.",
                href: "/services/commercial/industrial-construction/",
              },
              {
                title: "Tenant Improvements",
                description: "Commercial interior buildouts, office renovations, and retail space customization for St. Petersburg businesses in Downtown, Gateway, and throughout the city.",
                href: "/services/commercial/tenant-improvements/",
              },
              {
                title: "Historic Restoration",
                description: "Certified historic restoration and adaptive reuse projects in St. Petersburg's historic districts, with federal compliance expertise demonstrated at Bay Pines Veterans Hospital.",
                href: "/services/commercial/historic-restoration/",
              },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
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

      {/* St. Petersburg-Specific Content */}
      <section className="section-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Commercial Construction Across St. Petersburg
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  St. Petersburg's commercial construction landscape has experienced remarkable growth, transforming from a retirement destination to one of Florida's most vibrant business and cultural centers. From the craft breweries and tech startups of the Edge District to the corporate offices of Gateway, commercial construction in St. Petersburg requires contractors who understand the city's unique character and requirements.
                </p>

                <h3 className="text-xl font-bold text-brand-green-dark mt-8 mb-4">Downtown St. Petersburg & Arts District</h3>
                <p className="mb-6">
                  Downtown St. Pete's revitalization has created unprecedented demand for commercial construction. The arts district surrounding the Dali Museum and Museum of Fine Arts requires construction that complements the city's cultural identity. Whether building new commercial space, renovating historic storefronts, or developing mixed-use projects, we understand the standards expected in this prestigious area. The Central Avenue corridor continues to attract significant investment, with new retail, restaurant, and office construction transforming the downtown experience.
                </p>

                <h3 className="text-xl font-bold text-brand-green-dark mt-8 mb-4">Gateway Business Corridor</h3>
                <p className="mb-6">
                  The Gateway area represents St. Petersburg's modern corporate face, home to major employers including Raymond James, Jabil, and HSN. This expanding business corridor demands efficient construction delivery and contemporary design. We've completed tenant improvements, office buildouts, and commercial construction throughout this thriving corridor, meeting the timeline and quality expectations of corporate clients. Gateway's continued growth makes it one of the Tampa Bay region's most active commercial construction markets.
                </p>

                <h3 className="text-xl font-bold text-brand-green-dark mt-8 mb-4">Edge District</h3>
                <p className="mb-6">
                  The Edge District's explosive growth has transformed former warehouse space into a hub for breweries, restaurants, creative offices, and retail. We specialize in adaptive reuse projects that honor the district's industrial heritage while creating modern commercial spaces that attract the businesses driving St. Pete's new economy. This neighborhood exemplifies St. Petersburg's successful urban revitalization.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-green-dark mt-8 mb-4">Old Northeast Historic District</h3>
              <p className="text-gray-700 mb-6">
                Commercial construction in St. Petersburg's prestigious Old Northeast requires understanding of historic preservation standards and neighborhood character. This district features some of St. Pete's most architecturally significant properties, with many buildings dating to the 1920s. We work with the city's historic preservation staff and understand Certificate of Appropriateness requirements for commercial projects in this protected area. Our experience with federal historic compliance at Bay Pines translates directly to local historic district work.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Waterfront Development</h3>
              <p className="text-gray-700 mb-6">
                St. Petersburg's position on Tampa Bay and proximity to the Gulf of Mexico creates unique opportunities and requirements for waterfront commercial construction. We understand flood zone construction, marine-grade materials, seawall coordination, and the permitting requirements for properties in coastal high hazard areas. Our experience includes coordination with the Army Corps of Engineers, Southwest Florida Water Management District (SWFWMD), and local agencies on waterfront projects.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Grand Central District</h3>
              <p className="text-gray-700 mb-6">
                The Grand Central District's diverse business environment has driven retail and restaurant construction growth. We build commercial spaces that serve this vibrant neighborhood while meeting the city's development standards and neighborhood expectations. The district's unique character requires contractors who understand both new construction and sensitive renovation of existing structures.
              </p>

              <div className="bg-white rounded-xl p-6 mt-8 shadow-md">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Pinellas County Building Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                    <span className="text-gray-700">City of St. Petersburg Development Services permits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Florida Building Code 7th Edition compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Hurricane-resistant construction (140 mph wind zone)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Pinellas County Environmental Management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Coastal high hazard area (CHHA) regulations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                    <span className="text-gray-700">SWFWMD stormwater management compliance</span>
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
            Ready to Build in St. Petersburg?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. We'll discuss your St. Petersburg commercial construction needs and provide preliminary budgeting.
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
              Our St. Petersburg Construction Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven approach tailored for St. Petersburg's commercial construction environment and Pinellas County requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Pre-Construction",
                description: "We assess your St. Petersburg project requirements, conduct site analysis including flood zone evaluation, and develop preliminary budgets and schedules specific to Pinellas County's market conditions and permitting timeline.",
                icon: FileCheck,
              },
              {
                step: "02",
                title: "Design Coordination",
                description: "Whether design-build or design-bid-build, we coordinate all design elements ensuring constructability and compliance with St. Petersburg's building codes, zoning requirements, and any historic district standards.",
                icon: Building2,
              },
              {
                step: "03",
                title: "St. Petersburg Permitting",
                description: "We navigate the City of St. Petersburg Development Services Department, securing all required permits, approvals, and inspections to keep your project on schedule in Pinellas County.",
                icon: Briefcase,
              },
              {
                step: "04",
                title: "Construction Execution",
                description: "Experienced superintendents manage daily construction with St. Petersburg-area subcontractors who understand local conditions, coastal construction requirements, and quality expectations.",
                icon: HardHat,
              },
              {
                step: "05",
                title: "Quality Control",
                description: "Rigorous quality control ensures your St. Petersburg project meets specifications, code requirements, and our high standards—documented at every phase with particular attention to hurricane-resistant construction.",
                icon: CheckCircle,
              },
              {
                step: "06",
                title: "Completion & Warranty",
                description: "Thorough closeout including punch list resolution, Certificate of Occupancy, training, and comprehensive warranty documentation for your St. Petersburg property.",
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
              Serving Commercial Construction Throughout St. Petersburg
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From our Ruskin headquarters, we serve all of St. Petersburg and Pinellas County for commercial construction projects of $500K to $25M+.
            </p>
          </div>
          <GoogleMap city="St. Petersburg" height={400} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
                St. Petersburg Commercial Construction FAQ
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about commercial construction in St. Petersburg, Florida.
              </p>
            </div>

            <FAQ items={stPeteFaqs} />
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
                Start Your St. Petersburg Commercial Project Today
              </h2>
              <p className="text-xl text-gray-200 mb-6">
                Contact Florida Construction Specialists for a consultation on your St. Petersburg commercial construction project. Our team will discuss your vision, provide preliminary budgeting, and outline the path to successful project delivery—with the federal compliance expertise that sets us apart.
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
                <p className="text-sm text-gray-300 mb-4">St. Petersburg's trusted commercial contractor:</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-200">
                  <span>License {BUSINESS_INFO.licenseNumber}</span>
                  <span>In-House Engineering</span>
                  <span>{BUSINESS_INFO.yearsInBusiness}+ Years Experience</span>
                  <span>{BUSINESS_INFO.projectsCompleted}+ Projects</span>
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
