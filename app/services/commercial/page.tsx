import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Building2, Shield, Award, Clock, CheckCircle, Phone, ArrowRight, Briefcase, HardHat, FileCheck } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { HighLevelForm } from "@/components/HighLevelForm";
import { BUSINESS_INFO, FAQ_DATABASE } from "@/lib/constants";

import { InternalLinks } from "@/components/InternalLinks";
export const metadata: Metadata = {
  title: "Commercial Construction in Tampa Bay | Florida Construction Specialists",
  description: "Tampa Bay's premier commercial contractor for $500K-$25M+ projects. 40+ years experience, 20+ years experience. Schedule your project consultation. Call (813) 420-7561.",
  keywords: [
    "commercial construction tampa",
    "commercial contractor florida",
    "design-build construction tampa bay",
    "commercial building contractor",
    "tampa commercial construction company",
    "large scale construction florida",
  ],
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Commercial Construction", href: "/services/commercial/" },
];

const commercialFaqs = [
  ...FAQ_DATABASE.commercial,
  {
    question: "What industries do you serve for commercial construction?",
    answer: "Florida Construction Specialists serves a wide range of industries including healthcare and medical, multi-family residential, industrial and manufacturing, retail and hospitality, educational institutions, municipal and government, and agricultural facilities. Our 40+ years experience and in-house engineering allows us to take on projects across virtually any commercial sector."
  },
  {
    question: "How do you ensure projects stay on budget?",
    answer: "We implement rigorous cost control from pre-construction through project completion. This includes detailed budgeting during planning, value engineering to optimize costs without sacrificing quality, regular budget reviews, change order management protocols, and transparent financial reporting. Our CPM scheduling also helps prevent costly delays."
  },
  {
    question: "Do you provide pre-construction services?",
    answer: "Yes, comprehensive pre-construction services are a cornerstone of our approach. We offer feasibility studies, site analysis, conceptual estimating, value engineering, constructability reviews, scheduling development, and permitting assistance. These services help ensure your project is set up for success before construction begins."
  },
];

const clusterServices = [
  {
    name: "Design-Build Construction",
    href: "/services/commercial/design-build/",
    description: "Single-source accountability for design and construction under one contract, streamlining communication and accelerating project delivery.",
  },
  {
    name: "Medical & Healthcare Facilities",
    href: "/services/commercial/medical-construction/",
    description: "AHCA-compliant construction for medical offices, clinics, surgical centers, and healthcare facilities throughout Tampa Bay.",
  },
  {
    name: "Multi-Family Construction",
    href: "/services/commercial/multi-family/",
    description: "Condominium, apartment complex, and multi-family residential construction from $1M to $25M+ projects.",
  },
  {
    name: "Industrial & Warehouse",
    href: "/services/commercial/industrial-construction/",
    description: "Industrial flex space, warehouse facilities, distribution centers, and manufacturing buildings.",
  },
  {
    name: "Tenant Improvements",
    href: "/services/commercial/tenant-improvements/",
    description: "Commercial interior buildouts, office renovations, and retail space customization for existing buildings.",
  },
  {
    name: "Commercial Additions",
    href: "/services/commercial/commercial-additions/",
    description: "Building expansions, additions, and vertical expansions for growing businesses.",
  },
  {
    name: "Retail Construction",
    href: "/services/commercial/retail-construction/",
    description: "Retail centers, shopping complexes, restaurant buildouts, and hospitality construction.",
  },
];

const featuredProjects = [
  {
    name: "Turner Agri-Center",
    location: "Arcadia, FL",
    type: "Agricultural/Civic",
    description: "Complete reconstruction following Hurricane Charley. Large-scale agricultural exhibition center featuring metal building systems, public assembly spaces, and livestock facilities.",
  },
  {
    name: "Leon County Detention Center",
    location: "Tallahassee, FL",
    type: "Municipal/Institutional",
    description: "Water loss restoration following Hurricane Irene. Comprehensive interior reconstruction including secure facility requirements, specialized systems, and code compliance.",
  },
  {
    name: "Bay Pines Veterans Hospital",
    location: "St. Petersburg, FL",
    type: "Federal Healthcare",
    description: "Historic restoration and preservation project meeting federal historic compliance standards. Sensitive rehabilitation of veteran healthcare facilities.",
  },
];

export default function CommercialConstructionPage() {
  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema service="Commercial Construction" />
      <ServiceSchema
        serviceName="Commercial Construction"
        serviceDescription="Large-scale commercial construction services from $500K to $25M+ including design-build, medical facilities, multi-family, industrial, and retail construction throughout Tampa Bay."
        minPrice="500000"
      />
      <FAQSchema faqs={commercialFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Turner AgriCivic Center commercial construction project"
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight">
                Commercial Construction Services in Tampa Bay
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Florida Construction Specialists delivers large-scale commercial construction projects from $500K to $25M+ throughout Tampa Bay. As your prime contractor, we bring 20+ years of expertise, 40+ years experience and in-house engineering, and a commitment to excellence on every project.
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
                  <p className="text-xs text-gray-300">{BUSINESS_INFO.yearsInBusiness} Years</p>
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
                Request a Project Consultation
              </h2>
              <p className="text-gray-600 mb-6">
                Tell us about your commercial project and receive a consultation from our team.
              </p>
              <HighLevelForm variant="commercial" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Your Trusted Commercial Construction Partner in Tampa Bay
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl mb-6">
                Florida Construction Specialists is a prime general contractor serving the Tampa Bay region with comprehensive commercial construction services. We never work as a subcontractor—when you partner with FCS, you get direct accountability, clear communication, and the full resources of an experienced construction firm dedicated to your project's success.
              </p>
              <p className="mb-6">
                Our commercial construction division handles projects ranging from $500,000 tenant improvements to $25 million+ ground-up developments. With bonding capacity exceeding $10 million, we have the financial strength to take on projects that many contractors cannot. This capacity, combined with our extensive experience across healthcare, multi-family, industrial, retail, and institutional sectors, makes us the contractor of choice for owners and developers throughout Tampa, St. Petersburg, Clearwater, Lakeland, and the surrounding region.
              </p>
              <p className="mb-6">
                What sets FCS apart is our comprehensive approach to commercial construction. We don't just build—we partner with clients from initial concept through final occupancy. Our pre-construction services help refine your vision, optimize your budget, and establish realistic timelines. During construction, our experienced project management team ensures quality control, schedule adherence, and proactive communication. After completion, our warranty support gives you confidence in your investment for years to come.
              </p>
              <p>
                Whether you're developing a medical facility that requires AHCA compliance, a multi-family community that must meet the demands of modern residents, an industrial facility optimized for operational efficiency, or a retail space designed to drive customer engagement, Florida Construction Specialists has the expertise and resources to deliver your vision on time and on budget.
              </p>
            </div>
          </div>

          {/* Project Gallery */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="/wp-content/uploads/2023/12/Lions-World-Vision-Institute-Building-Exterior.jpg"
                alt="Lions World Vision Institute commercial brick building with new architectural shingle roof"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold">Lions Eye Institute</p>
                <p className="text-sm text-gray-200">Historic Renovation - Ybor City</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
                alt="Green standing seam metal roof on commercial building covered parking structure"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold">Turner Agri-Center</p>
                <p className="text-sm text-gray-200">Hurricane Charley Reconstruction - Arcadia</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="/wp-content/uploads/2023/12/Leon-County-Detention-Center-Tallahasse.png"
                alt="Multi-story commercial building with flat roof and security fencing"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold">Leon County Detention Center</p>
                <p className="text-sm text-gray-200">Water Loss Restoration - Tallahassee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Commercial Construction Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From design-build to tenant improvements, we offer comprehensive commercial construction services tailored to your industry and project requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clusterServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-full bg-brand-green-bg flex items-center justify-center mb-4 group-hover:bg-brand-green transition-colors">
                  <Building2 className="w-7 h-7 text-brand-green-dark group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 group-hover:text-brand-green transition-colors">
                  {service.name}
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

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Our Commercial Construction Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven approach that delivers predictable results, transparent communication, and successful project outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Pre-Construction",
                description: "We begin with thorough project discovery, including site analysis, feasibility assessment, conceptual budgeting, and scheduling. Our pre-construction services help identify opportunities and challenges before ground is broken.",
                icon: FileCheck,
              },
              {
                step: "02",
                title: "Design Coordination",
                description: "Whether you bring your own architect or utilize our design-build services, we coordinate all design elements to ensure constructability, code compliance, and budget alignment. Detailed plans and specifications guide every aspect of construction.",
                icon: Building2,
              },
              {
                step: "03",
                title: "Permitting & Approvals",
                description: "Our team navigates the permitting process with local building departments throughout Tampa Bay. We handle all applications, reviews, and inspections to keep your project moving forward without regulatory delays.",
                icon: Briefcase,
              },
              {
                step: "04",
                title: "Construction Execution",
                description: "With detailed CPM scheduling, quality control protocols, and experienced project management, we execute construction efficiently and safely. Regular progress reports and site meetings keep you informed every step of the way.",
                icon: HardHat,
              },
              {
                step: "05",
                title: "Quality Assurance",
                description: "Our quality control program includes regular inspections, material verification, and workmanship standards that exceed code requirements. We document everything and address issues proactively before they impact your schedule.",
                icon: CheckCircle,
              },
              {
                step: "06",
                title: "Closeout & Warranty",
                description: "Project completion includes thorough punch list resolution, training on building systems, warranty documentation, and ongoing support. We stand behind our work with comprehensive warranty coverage and responsive service.",
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

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Ready to Discuss Your Commercial Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our commercial construction team to explore how FCS can bring your project vision to reality.
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

      {/* Why Choose FCS Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Why Tampa Bay Businesses Choose Florida Construction Specialists
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Prime Contractor Only</h3>
                    <p className="text-gray-600">We never subcontract our general contracting services. When you hire FCS, you get direct accountability, a single point of contact, and the full resources of our team dedicated to your project. This means clearer communication, faster decisions, and better outcomes.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">In-House Engineering</h3>
                    <p className="text-gray-600">Our substantial bonding capacity means we can take on large-scale projects that many contractors cannot. Whether your project requires a $500K bond or a $10M+ bond, we have the financial strength and track record to secure the coverage you need.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center">
                    <Award className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Deep Local Expertise</h3>
                    <p className="text-gray-600">With {BUSINESS_INFO.yearsInBusiness}+ years serving Tampa Bay, we've built relationships with local officials, subcontractors, and suppliers. We understand local codes, permitting processes, and market conditions—knowledge that translates to smoother projects and better value.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Diverse Project Experience</h3>
                    <p className="text-gray-600">From the Turner Agri-Center reconstruction to Bay Pines Veterans Hospital historic restoration, our portfolio spans healthcare, industrial, municipal, multi-family, and retail construction. This breadth of experience means we bring proven solutions to your unique challenges.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">Featured Commercial Projects</h3>
              <div className="space-y-6">
                <div className="flex gap-4 border-b border-gray-200 pb-6">
                  <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
                      alt="Turner Agri-Center commercial building"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-green-dark">Turner Agri-Center</h4>
                    <p className="text-sm text-brand-green mb-2">Arcadia, FL | Agricultural/Civic</p>
                    <p className="text-gray-600 text-sm">Complete reconstruction following Hurricane Charley. Large-scale agricultural exhibition center.</p>
                  </div>
                </div>
                <div className="flex gap-4 border-b border-gray-200 pb-6">
                  <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src="/wp-content/uploads/2023/12/Leon-County-Detention-Center-Tallahasse.png"
                      alt="Leon County Detention Center"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-green-dark">Leon County Detention Center</h4>
                    <p className="text-sm text-brand-green mb-2">Tallahassee, FL | Municipal/Institutional</p>
                    <p className="text-gray-600 text-sm">Water loss restoration following Hurricane Irene. Comprehensive interior reconstruction.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src="/wp-content/uploads/2023/12/Lions-World-Vision-Institute-Building-Exterior.jpg"
                      alt="Bay Pines Veterans Hospital"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-green-dark">Bay Pines Veterans Hospital</h4>
                    <p className="text-sm text-brand-green mb-2">St. Petersburg, FL | Federal Healthcare</p>
                    <p className="text-gray-600 text-sm">Historic restoration meeting federal compliance standards.</p>
                  </div>
                </div>
              </div>
              <Link href="/gallery/" className="inline-flex items-center text-brand-green font-semibold mt-6 hover:underline">
                View Full Portfolio <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commercial construction expertise spans multiple industries, each with unique requirements and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Healthcare & Medical", icon: "🏥" },
              { name: "Multi-Family Residential", icon: "🏢" },
              { name: "Industrial & Warehouse", icon: "🏭" },
              { name: "Retail & Hospitality", icon: "🏪" },
              { name: "Educational Institutions", icon: "🎓" },
              { name: "Municipal & Government", icon: "🏛️" },
              { name: "Agricultural Facilities", icon: "🌾" },
              { name: "Mixed-Use Developments", icon: "🏙️" },
            ].map((industry) => (
              <div key={industry.name} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <span className="text-4xl mb-3 block">{industry.icon}</span>
                <h3 className="font-semibold text-brand-green-dark">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Links */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Commercial Construction Throughout Tampa Bay
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide commercial construction services across the greater Tampa Bay region, with deep expertise in each local market.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { city: "Tampa", href: "/commercial-construction-tampa/" },
              { city: "St. Petersburg", href: "/commercial-construction-st-petersburg/" },
              { city: "Clearwater", href: "/commercial-construction-clearwater/" },
              { city: "Lakeland", href: "/commercial-construction-lakeland/" },
              { city: "Sarasota", href: "/commercial-construction-sarasota/" },
              { city: "Bradenton", href: "/commercial-construction-bradenton/" },
              { city: "Brandon", href: "/commercial-construction-brandon/" },
              { city: "Ruskin", href: "/commercial-construction-ruskin/" },
            ].map((location) => (
              <Link
                key={location.city}
                href={location.href}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-brand-green-bg transition-colors group"
              >
                <span className="font-semibold text-brand-green-dark group-hover:text-brand-green transition-colors">
                  Commercial Construction in {location.city}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-light">
        <div className="container-custom">
          <div >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
                Commercial Construction FAQ
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about commercial construction projects in Tampa Bay.
              </p>
            </div>

            <FAQ items={commercialFaqs} />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Related Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/disaster-recovery/" className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 group-hover:text-brand-green transition-colors">
                Disaster Recovery
              </h3>
              <p className="text-gray-600 mb-4">Large loss insurance restoration for commercial properties affected by hurricanes, fire, or water damage.</p>
              <span className="inline-flex items-center text-brand-green font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Link>

            <Link href="/services/historic-restoration/" className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 group-hover:text-brand-green transition-colors">
                Historic Restoration
              </h3>
              <p className="text-gray-600 mb-4">SHPO-compliant restoration of historic commercial buildings, preserving architectural heritage while meeting modern needs.</p>
              <span className="inline-flex items-center text-brand-green font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Link>

            <Link href="/services/residential/" className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 group-hover:text-brand-green transition-colors">
                Residential Construction
              </h3>
              <p className="text-gray-600 mb-4">Luxury custom home construction for $1M+ residences, including waterfront estates and hurricane-resistant design.</p>
              <span className="inline-flex items-center text-brand-green font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                Start Your Commercial Construction Project Today
              </h2>
              <p className="text-xl text-gray-200 mb-6">
                Contact Florida Construction Specialists for a project consultation. Our team will discuss your vision, provide preliminary budgeting, and outline the next steps to bring your commercial project to life.
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
                <p className="text-sm text-gray-300 mb-4">Trusted by property owners throughout Tampa Bay:</p>
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
