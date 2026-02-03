import Link from "next/link";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Clock, Users, Thermometer, Wind, Droplets, FileCheck, HardHat } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "Multi-Family Construction Tampa FL | Condos | FCS",
  description: "Premier multi-family construction contractor in Tampa, Florida. Condominiums, apartments, townhomes, senior living. $1M-$25M+ projects. 20+ years experience, 40+ years experience. Prime contractor on all projects. Call (813) 420-7561.",
  keywords: "multi-family construction tampa, apartment construction tampa, condo builder tampa fl, townhome construction tampa, senior living construction tampa",
};

const projectTypes = [
  {
    title: "Condominium Construction",
    description: "Ground-up condo development from mid-rise to high-rise towers in Downtown Tampa, Channelside, and South Tampa waterfront locations."
  },
  {
    title: "Apartment Complexes",
    description: "Garden-style to mid-rise apartment communities throughout Tampa Bay, including workforce housing and luxury rentals."
  },
  {
    title: "Townhome Developments",
    description: "Urban infill and suburban townhome communities serving Tampa's growing demand for attainable ownership housing."
  },
  {
    title: "Senior Living Facilities",
    description: "Independent living, assisted living, and memory care facilities serving Tampa Bay's growing senior population."
  },
  {
    title: "Student Housing",
    description: "Purpose-built student housing serving University of South Florida, University of Tampa, and other institutions."
  },
  {
    title: "Mixed-Use Residential",
    description: "Residential components of mixed-use developments with ground-floor retail in walkable Tampa neighborhoods."
  }
];

// Tampa-specific multi-family FAQs
const tampaFaqs = [
  {
    question: "What types of multi-family projects does FCS build in Tampa?",
    answer: "Florida Construction Specialists builds all types of multi-family residential in Tampa: condominiums (mid-rise and high-rise), garden-style and mid-rise apartments, townhome developments, senior living facilities, student housing, and mixed-use residential. Our Tampa multi-family projects range from $1 million to $25 million+ and include both ground-up construction and major renovations. We've completed projects in Downtown Tampa, South Tampa, Westshore, and emerging neighborhoods throughout Hillsborough County."
  },
  {
    question: "What multi-family markets are strongest in Tampa right now?",
    answer: "Tampa's multi-family market is particularly strong in several segments: luxury rentals in Downtown and Channelside (driven by Water Street Tampa), workforce housing throughout the metro area, senior living facilities serving Florida's growing retirement population, and student housing near USF and University of Tampa. Build-to-rent townhome communities are also expanding in suburban areas like Wesley Chapel, New Tampa, and Riverview. We track market trends and help developers identify the strongest opportunities."
  },
  {
    question: "How do Tampa's building codes affect multi-family construction?",
    answer: "Tampa multi-family construction requires compliance with Florida Building Code 2023 with Zone 3 wind requirements (120 mph design wind speed). For buildings 3+ stories, the Florida SB 4-D milestone inspection requirements apply. Tampa also has specific fire code requirements, accessibility standards, and stormwater regulations. In flood zones (common near Tampa Bay and the Hillsborough River), elevated construction or flood-resistant design is required. We navigate these requirements on every Tampa multi-family project."
  },
  {
    question: "What amenities do Tampa multi-family projects typically include?",
    answer: "Amenity expectations vary by market segment but Tampa projects typically include: swimming pools (essential in Florida's climate), fitness centers, clubhouses or community rooms, package lockers and smart access systems, covered parking or garages, dog parks and pet amenities, outdoor grilling and gathering areas, and increasingly, coworking spaces and package concierge services. Luxury projects may add rooftop amenities, resort-style pools, and high-end finishes. We advise on amenity packages that match your target market."
  },
  {
    question: "How long does multi-family construction take in Tampa?",
    answer: "Tampa multi-family construction timelines depend on project scale and type. Townhome communities typically take 12-18 months; garden-style apartments 14-20 months; mid-rise buildings 18-24 months; high-rise construction 24-36 months. These timelines include site work, vertical construction, and common area completion. We account for Tampa's rainy season scheduling and permit processing time through Hillsborough County or the City of Tampa. Detailed schedules are provided during pre-construction."
  },
  {
    question: "What are the current multi-family construction costs in Tampa?",
    answer: "Tampa multi-family construction costs vary by product type and finish level. Garden-style apartments run $150-220 per square foot; mid-rise apartments $180-280/SF; high-rise condominiums $250-400/SF; townhomes $150-220/SF; senior living facilities $220-320/SF. These costs include hard construction but exclude land, soft costs, and financing. Tampa's market is competitive but typically 15-20% lower than Miami or South Florida. We provide detailed budgeting during pre-construction."
  },
  {
    question: "Do you handle entitlements and permitting for Tampa multi-family projects?",
    answer: "While land use entitlements are typically handled by the developer's team before we engage, FCS manages all building permits and construction-phase approvals. We work with City of Tampa and Hillsborough County Building Services, navigating plan review, fire marshal approval, and inspection processes. Our relationships with these departments help streamline the permit process. We can also coordinate with entitlement consultants on technical construction feasibility during the planning phase."
  },
  {
    question: "What makes FCS different from other Tampa multi-family contractors?",
    answer: "FCS is always the prime general contractor on Tampa multi-family projects—we never work as a subcontractor. This means direct accountability to you, not to another GC. We bring 20+ years of experience, 40+ years experience and in-house engineering, and a track record of $25M+ in completed projects. We understand Tampa's specific challenges: hurricane-resistant construction, rainy season scheduling, flood zone compliance, and local subcontractor relationships. Our project managers live in Tampa Bay and are accessible throughout your project."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Multi-Family Construction", href: "/multi-family-construction/" },
  { name: "Tampa", href: "/multi-family-construction-tampa/" },
];

export default function MultiFamilyConstructionTampaPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Multi-Family Construction" />
      <ServiceSchema
        serviceName="Multi-Family Construction"
        serviceDescription="Premier multi-family construction contractor serving Tampa, Florida. Condominiums, apartments, townhomes, senior living. Projects from $1M to $25M+. Always the prime contractor."
        city="Tampa"
        minPrice="1000000"
      />

      <ArticleSchema
        headline="Multi-Family Construction Tampa FL | Condos, Apartments & Townhomes | FCS"
        description="Premier multi-family construction contractor in Tampa, Florida. Condominiums, apartments, townhomes, senior living. $1M-$25M+ projects. 20+ years experience, 40+ years experience."
        datePublished="2024-06-01"
        dateModified="2025-01-18"
        slug="/multi-family-construction-tampa/"
      />

      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems.slice(1)} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/southwinds-condo-front/southwinds-condo-front-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Tampa, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Multi-Family Construction in Tampa, FL
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists delivers multi-family construction excellence throughout Tampa and Hillsborough County. From Downtown Tampa high-rise condominiums to suburban apartment communities, we bring 20+ years of experience to projects ranging from $1 million to $25 million.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              As Tampa's premier prime contractor for multi-family residential, we handle condominiums, apartments, townhomes, senior living, and student housing—never as a subcontractor, always with full project accountability.
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
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">In-House Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">$25M+ Completed Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <HardHat className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Prime Contractor Only</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Multi-Family Construction Services in Tampa
              </h2>
              <p className="text-gray-600 mb-6">
                Tampa is Florida's third-largest city and one of the nation's fastest-growing metro areas, with a population exceeding 400,000 in the city proper and 3.2 million in the greater Tampa Bay region. This growth drives continuous demand for multi-family housing across all market segments—from luxury downtown condominiums serving young professionals to senior living facilities for Florida's retirement market.
              </p>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists serves Tampa's diverse multi-family construction needs with the expertise, bonding capacity, and local knowledge required for projects from $1 million to $25 million or more. Whether you're developing a condominium tower in Channelside, a garden-style apartment community in New Tampa, or student housing near USF, we deliver on time and on budget.
              </p>
              <p className="text-gray-600 mb-8">
                As a prime general contractor—never a subcontractor—we maintain full control and accountability on every Tampa multi-family project. Our relationships with local building departments, subcontractors, and suppliers ensure smooth execution from groundbreaking to first occupancy.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-6">
                Multi-Family Project Types We Build in Tampa
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {projectTypes.map((project) => (
                  <div key={project.title} className="border border-gray-200 rounded-lg p-5 hover:border-brand-green transition-colors">
                    <h4 className="font-bold text-brand-green-dark mb-2">{project.title}</h4>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Tampa Multi-Family Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <RelatedServices city="Tampa" currentService="multi-family-construction" />
              <NearbyLocations currentCity="Tampa" service="multi-family-construction" serviceName="Multi-Family Construction" />

              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark rounded-lg p-6 text-white">
                <h3 className="font-bold text-xl mb-4">Start Your Tampa Project</h3>
                <p className="text-gray-200 mb-4 text-sm">
                  Contact us for a project consultation. Multi-family construction in Tampa starting at $1,000,000.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full bg-brand-gold text-brand-green-dark font-bold py-3 px-4 rounded-full hover:bg-brand-gold-light transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Visual Break */}
      <ContentParallax
        src="/images/tampa-multifamily-housing-construction/tampa-multifamily-housing-construction-small.webp"
        alt="Multi-family construction"
        title="Building Communities"
        subtitle="Condos, apartments, and townhomes throughout Tampa Bay"
        overlayOpacity={0.55}
      />

      {/* Tampa Multi-Family Market Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Tampa's Multi-Family Construction Landscape
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Downtown & Water Street</h3>
              <p className="text-gray-600 text-sm">
                The $3.5 billion Water Street Tampa development has transformed downtown into a mixed-use destination. Luxury condominiums and high-end apartments are in high demand, with new towers continuing to rise along the waterfront and in Channelside.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Suburban Growth Corridors</h3>
              <p className="text-gray-600 text-sm">
                New Tampa, Wesley Chapel, Riverview, and Brandon continue expanding with garden-style apartments and townhome communities. These areas offer lower land costs and strong rental demand from families and young professionals priced out of the urban core.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Senior Living Demand</h3>
              <p className="text-gray-600 text-sm">
                Florida's growing senior population drives demand for independent living, assisted living, and memory care facilities throughout Tampa Bay. Major healthcare systems including BayCare and AdventHealth are expanding senior care infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Timeline Comparison Table */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Tampa Multi-Family Construction: Costs & Timelines
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-brand-green-dark text-white">
                    <th className="text-left p-4 font-semibold">Project Type</th>
                    <th className="text-left p-4 font-semibold">Cost Range (per SF)</th>
                    <th className="text-left p-4 font-semibold">Typical Timeline</th>
                    <th className="text-left p-4 font-semibold">Permit Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Garden-Style Apartments</td>
                    <td className="p-4">$150 - $220</td>
                    <td className="p-4">14-20 months</td>
                    <td className="p-4">4-8 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Mid-Rise Apartments</td>
                    <td className="p-4">$180 - $280</td>
                    <td className="p-4">18-24 months</td>
                    <td className="p-4">6-10 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">High-Rise Condominiums</td>
                    <td className="p-4">$250 - $400</td>
                    <td className="p-4">24-36 months</td>
                    <td className="p-4">8-14 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Townhome Communities</td>
                    <td className="p-4">$150 - $220</td>
                    <td className="p-4">12-18 months</td>
                    <td className="p-4">4-6 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Senior Living Facilities</td>
                    <td className="p-4">$220 - $320</td>
                    <td className="p-4">16-24 months</td>
                    <td className="p-4">6-10 weeks</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium">Student Housing</td>
                    <td className="p-4">$170 - $260</td>
                    <td className="p-4">14-22 months</td>
                    <td className="p-4">4-8 weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Costs reflect hard construction only. Land, soft costs, financing, and developer fees are additional.
              Estimates based on 2024-2025 Tampa market conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Local Expertise Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Building for Tampa's Unique Conditions
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Thermometer className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Climate Considerations</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Tampa's subtropical climate demands construction methods designed for intense UV exposure, 90°F+ summer temperatures, and 70-80% humidity year-round. We specify HVAC systems, building envelope materials, and finishes that perform in Florida's demanding environment without premature deterioration.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Wind className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Hurricane-Resistant Construction</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Tampa is in Wind Zone 3 with 120 mph design wind speed requirements. All our multi-family construction meets or exceeds Florida Building Code requirements for impact-resistant windows and doors, enhanced roof tie-downs, and wind-resistant structural systems. We build buildings that protect residents.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Flood Zone Compliance</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Many Tampa multi-family sites fall within FEMA flood zones AE and VE, particularly in coastal and low-lying areas. We navigate flood zone construction requirements including elevated structures, flood-resistant materials, and proper drainage. Our designs ensure compliance and insurability.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Permitting Expertise</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  We maintain strong relationships with both the City of Tampa Building Department and Hillsborough County Construction Services. Our familiarity with local permit processes, plan review requirements, and inspection protocols helps minimize delays and keep your project on schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Our Tampa Multi-Family Construction Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Pre-Construction & Planning",
                  description: "We begin with thorough site evaluation, constructability review, and detailed budgeting. For Tampa multi-family projects, this includes soil analysis (sandy soil with high water table), flood zone determination, utility coordination, and permit pathway planning through City of Tampa or Hillsborough County."
                },
                {
                  step: "2",
                  title: "Design Coordination",
                  description: "Whether working with your design team or providing design-build services, we ensure plans meet Tampa's building codes, wind requirements, fire codes, and accessibility standards while optimizing constructability and controlling costs."
                },
                {
                  step: "3",
                  title: "Permitting & Approvals",
                  description: "We manage all building permit applications, coordinate plan reviews with multiple departments (building, fire, utilities), and handle any required variances. Our relationships help expedite this critical phase while ensuring thorough review."
                },
                {
                  step: "4",
                  title: "Construction Execution",
                  description: "Experienced project managers oversee daily construction with strict quality control, safety protocols, and schedule management. We adjust for Tampa's rainy season (May-September) with strategic scheduling of weather-sensitive work, minimizing delays."
                },
                {
                  step: "5",
                  title: "Closeout & Turnover",
                  description: "We complete all inspections, obtain certificate of occupancy, and provide comprehensive turnover documentation including warranties, as-builts, and operations manuals. For multi-family, we coordinate with property management for smooth transition to occupancy."
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-gray-50 rounded-lg p-6">
                  <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green-dark text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FCS */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Tampa Developers Choose FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Always Prime Contractor</h3>
              <p className="text-gray-600">
                We never work as a subcontractor on Tampa multi-family projects. You get direct accountability, single-point contact, and our full commitment to your project's success from groundbreaking to occupancy.
              </p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Proven Tampa Track Record</h3>
              <p className="text-gray-600">
                With $25M+ in completed projects throughout Tampa Bay, we bring demonstrated experience in the local market—its building codes, subcontractor relationships, and market conditions.
              </p>
            </div>
            <div className="card text-center p-6">
              <Users className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Local Relationships</h3>
              <p className="text-gray-600">
                Strong relationships with Tampa building departments, inspectors, subcontractors, and suppliers help ensure smooth permitting and efficient construction execution. Our team lives here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema items={tampaFaqs} title="Multi-Family Construction in Tampa - Frequently Asked Questions" />

      {/* Internal Links Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Services & Locations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Related Services in Tampa</h3>
              <ul className="space-y-2">
                <li><Link href="/commercial-construction-tampa/" className="text-brand-green hover:underline">Commercial Construction Tampa</Link></li>
                <li><Link href="/disaster-recovery-tampa/" className="text-brand-green hover:underline">Disaster Recovery Tampa</Link></li>
                <li><Link href="/balcony-reconstruction-tampa/" className="text-brand-green hover:underline">Balcony Reconstruction Tampa</Link></li>
                <li><Link href="/luxury-custom-homes-tampa/" className="text-brand-green hover:underline">Luxury Custom Homes Tampa</Link></li>
                <li><Link href="/exterior-waterproofing-tampa/" className="text-brand-green hover:underline">Exterior Waterproofing Tampa</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Multi-Family Construction Nearby</h3>
              <ul className="space-y-2">
                <li><Link href="/multi-family-construction-st-petersburg/" className="text-brand-green hover:underline">Multi-Family Construction St. Petersburg</Link></li>
                <li><Link href="/multi-family-construction-clearwater/" className="text-brand-green hover:underline">Multi-Family Construction Clearwater</Link></li>
                <li><Link href="/multi-family-construction-brandon/" className="text-brand-green hover:underline">Multi-Family Construction Brandon</Link></li>
                <li><Link href="/multi-family-construction-lakeland/" className="text-brand-green hover:underline">Multi-Family Construction Lakeland</Link></li>
                <li><Link href="/multi-family-construction-sarasota/" className="text-brand-green hover:underline">Multi-Family Construction Sarasota</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Learn More</h3>
              <ul className="space-y-2">
                <li><Link href="/multi-family-construction/" className="text-brand-green hover:underline">Multi-Family Construction Services</Link></li>
                <li><Link href="/commercial/condo-remediation/" className="text-brand-green hover:underline">Condo Remediation Services</Link></li>
                <li><Link href="/about/" className="text-brand-green hover:underline">About FCS</Link></li>
                <li><Link href="/portfolio/" className="text-brand-green hover:underline">Project Portfolio</Link></li>
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
            Start Your Tampa Multi-Family Construction Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. We deliver multi-family construction excellence in Tampa with projects starting at $1,000,000.
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
