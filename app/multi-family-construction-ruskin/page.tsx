import Link from "next/link";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Clock, Users, Thermometer, Wind, Droplets, FileCheck, HardHat, Warehouse, Home, Anchor } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "Multi-Family Construction Ruskin | Condos | FCS",
  description: "Premier multi-family construction contractor in Ruskin and South Hillsborough County. Condominiums, apartments, townhomes, senior living. $1M-$25M+ projects. FCS home base advantage. 20+ years experience, 40+ years experience. Call (813) 420-7561.",
  keywords: "multi-family construction ruskin, apartment construction ruskin fl, condo builder south hillsborough, townhome construction apollo beach, senior living construction sun city center",
};

const projectTypes = [
  {
    title: "Workforce Housing",
    description: "Attainable multi-family housing serving Amazon fulfillment center employees, Port Manatee workers, and the growing South Hillsborough County workforce."
  },
  {
    title: "Senior Living Communities",
    description: "Independent living, assisted living, and memory care facilities serving Sun City Center and the region's expanding retirement population."
  },
  {
    title: "Apartment Complexes",
    description: "Garden-style to mid-rise apartment communities throughout Ruskin, Apollo Beach, and surrounding areas meeting strong rental demand."
  },
  {
    title: "Townhome Developments",
    description: "Attainable ownership townhome communities on former agricultural land, offering modern living in an emerging market."
  },
  {
    title: "Waterfront Condominiums",
    description: "Tampa Bay waterfront condos in Apollo Beach and coastal Ruskin areas, built to coastal construction standards."
  },
  {
    title: "Mixed-Use Residential",
    description: "Residential components of mixed-use developments along US-41 and the evolving commercial corridors of South Hillsborough."
  }
];

// Ruskin-specific multi-family FAQs
const ruskinFaqs = [
  {
    question: "Why is Ruskin a strategic location for multi-family development?",
    answer: "Ruskin offers several strategic advantages for multi-family development. The Amazon fulfillment center alone employs thousands of workers who need housing. Port Manatee's expansion drives logistics employment. Sun City Center's retirement community creates demand for senior housing. Land costs remain significantly lower than Tampa or St. Petersburg, allowing for more competitive unit pricing. Plus, Florida Construction Specialists is headquartered in Ruskin, giving developers a home-field advantage with faster response times and deep local knowledge."
  },
  {
    question: "What types of multi-family projects does FCS build in Ruskin?",
    answer: "Florida Construction Specialists builds all types of multi-family residential in Ruskin and South Hillsborough County: workforce housing apartments, garden-style and mid-rise apartment complexes, townhome developments on former agricultural land, senior living facilities serving the Sun City Center market, and waterfront condominiums in Apollo Beach. Our Ruskin multi-family projects range from $1 million to $25 million+ and include both ground-up construction and major renovations."
  },
  {
    question: "How do Ruskin's building codes affect multi-family construction?",
    answer: "Ruskin multi-family construction requires compliance with Florida Building Code 2023 and is permitted through Hillsborough County Building Services (not City of Tampa). Wind requirements are Zone 3 (120 mph design wind speed). Coastal areas like Apollo Beach have FEMA flood zone requirements (VE and AE zones). Former agricultural land often requires environmental review and may have wetland mitigation requirements. The SB 4-D milestone inspection requirements apply to buildings 3+ stories. We navigate all these requirements on every Ruskin multi-family project."
  },
  {
    question: "What is FCS's home base advantage in Ruskin?",
    answer: "Florida Construction Specialists is headquartered in Ruskin, giving us unique advantages on local projects. Our team lives and works here, meaning faster response times, no travel overhead, and intimate knowledge of local conditions, subcontractors, and suppliers. We have established relationships with Hillsborough County Building Services permitting staff. We understand Ruskin's transition from agricultural community to emerging suburban market. This home-field advantage translates to smoother projects and better outcomes."
  },
  {
    question: "How long does multi-family construction take in Ruskin?",
    answer: "Ruskin multi-family construction timelines depend on project scale and type. Townhome communities typically take 12-16 months; garden-style apartments 14-18 months; mid-rise buildings 16-22 months; senior living facilities 18-24 months. These timelines include site work (often more extensive on former agricultural land), vertical construction, and common area completion. Ruskin's emerging market status often means less congestion in the permit queue compared to urban Tampa. Detailed schedules are provided during pre-construction."
  },
  {
    question: "What are the current multi-family construction costs in Ruskin?",
    answer: "Ruskin multi-family construction costs are generally 10-15% lower than urban Tampa due to lower land costs and reduced logistics complexity. Garden-style apartments run $140-200 per square foot; mid-rise apartments $165-250/SF; townhomes $140-200/SF; senior living facilities $200-290/SF; waterfront condos $220-350/SF. These costs include hard construction but exclude land, soft costs, and financing. The competitive pricing makes Ruskin attractive for workforce housing and attainable ownership products."
  },
  {
    question: "What amenities should Ruskin multi-family projects include?",
    answer: "Amenity expectations in Ruskin balance resident desires with the area's character. Standard amenities include swimming pools, fitness centers, covered parking, and package lockers. Given the workforce housing focus, practical amenities like laundry facilities, reliable internet infrastructure, and adequate parking for shift workers are important. Senior living projects near Sun City Center may need shuttle services, medical office space, and social activity rooms. Waterfront Apollo Beach projects may include kayak storage, fishing piers, and bay-view amenities."
  },
  {
    question: "How does building on former agricultural land affect construction?",
    answer: "Much of Ruskin was historically tomato farming country, and building on former agricultural land has specific considerations. The clay-rich soils actually provide good foundation support but may require drainage solutions. Environmental assessments may be needed to confirm no contamination from agricultural chemicals. Wetland areas are common and may require mitigation. The good news: agricultural land is typically flat, well-drained, and free of existing structures, making site development more straightforward than urban infill."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Multi-Family Construction", href: "/multi-family-construction/" },
  { name: "Ruskin", href: "/multi-family-construction-ruskin/" },
];

export default function MultiFamilyConstructionRuskinPage() {
  return (
    <>
      <LocalBusinessSchema city="Ruskin" service="Multi-Family Construction" />
      <ServiceSchema
        serviceName="Multi-Family Construction"
        serviceDescription="Premier multi-family construction contractor serving Ruskin and South Hillsborough County, Florida. Workforce housing, apartments, townhomes, senior living. Projects from $1M to $25M+. Always the prime contractor. FCS home base."
        city="Ruskin"
        minPrice="1000000"
      />

      <ArticleSchema
        headline="Multi-Family Construction Ruskin FL | Condos, Apartments & Townhomes | FCS"
        description="Premier multi-family construction contractor in Ruskin and South Hillsborough County. Condominiums, apartments, townhomes, senior living. $1M-$25M+ projects. FCS home base advantage. 20+ years experience, 40+ years experience."
        datePublished="2024-06-01"
        dateModified="2025-01-18"
        slug="/multi-family-construction-ruskin/"
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
              <span className="text-brand-gold font-semibold">Serving Ruskin & South Hillsborough County</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Multi-Family Construction in Ruskin, FL
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists delivers multi-family construction excellence throughout Ruskin and South Hillsborough County. As FCS's home base, Ruskin developers benefit from faster response times, deep local knowledge, and our commitment to this emerging market.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              From workforce housing serving the Amazon fulfillment center to senior living communities near Sun City Center and waterfront condos in Apollo Beach—we handle projects from $1 million to $25 million with full accountability as your prime contractor.
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
              <Home className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">FCS Home Base</span>
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
                Multi-Family Construction Services in Ruskin
              </h2>
              <p className="text-gray-600 mb-6">
                Ruskin is one of South Hillsborough County's most dynamic emerging markets, driven by the Amazon fulfillment center, Port Manatee expansion, and the established Sun City Center retirement community. With a population exceeding 25,000 and growing rapidly, demand for multi-family housing spans from workforce apartments to senior living facilities.
              </p>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists is uniquely positioned to serve Ruskin's multi-family market—this is our home base. Our headquarters location means faster response times, no travel overhead, and intimate knowledge of local conditions, subcontractors, suppliers, and permitting processes through Hillsborough County Building Services.
              </p>
              <p className="text-gray-600 mb-8">
                As a prime general contractor—never a subcontractor—we maintain full control and accountability on every Ruskin multi-family project. Whether you're developing workforce housing on former agricultural land, townhomes for first-time buyers, or waterfront condos in Apollo Beach, we deliver on time and on budget.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-6">
                Multi-Family Project Types We Build in Ruskin
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
                Discuss Your Ruskin Multi-Family Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <RelatedServices city="Ruskin" currentService="multi-family-construction" />
              <NearbyLocations currentCity="Ruskin" service="multi-family-construction" serviceName="Multi-Family Construction" />

              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark rounded-lg p-6 text-white">
                <h3 className="font-bold text-xl mb-4">Start Your Ruskin Project</h3>
                <p className="text-gray-200 mb-4 text-sm">
                  Contact us for a project consultation. As Ruskin's home-base contractor, we offer competitive pricing starting at $1,000,000.
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

      {/* Ruskin Multi-Family Market Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Ruskin's Multi-Family Construction Landscape
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Warehouse className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Amazon Fulfillment Impact</h3>
              <p className="text-gray-600 text-sm">
                The Amazon fulfillment center employs thousands of workers who need attainable housing. Workforce apartments and townhomes near the facility see strong demand from employees seeking short commutes. This industrial anchor drives consistent rental demand.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Sun City Center Seniors</h3>
              <p className="text-gray-600 text-sm">
                Sun City Center is one of Florida's largest active adult retirement communities. This established market drives demand for independent living, assisted living, and memory care facilities. Senior housing developers find a ready market with growing healthcare infrastructure.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Anchor className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Apollo Beach Waterfront</h3>
              <p className="text-gray-600 text-sm">
                Apollo Beach offers Tampa Bay waterfront living at more accessible price points than South Tampa or St. Petersburg. Waterfront condominiums attract buyers seeking bay views, boating access, and Florida lifestyle without premium urban pricing.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Port Manatee Proximity</h3>
              <p className="text-gray-600 text-sm">
                Port Manatee's continued expansion brings logistics jobs and drives housing demand in the Ruskin corridor. Workers at the port and related distribution facilities need quality rental housing, creating opportunities for workforce-oriented multi-family development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Timeline Comparison Table */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Ruskin Multi-Family Construction: Costs & Timelines
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
                    <td className="p-4 font-medium">Workforce Apartments</td>
                    <td className="p-4">$140 - $200</td>
                    <td className="p-4">14-18 months</td>
                    <td className="p-4">4-6 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Mid-Rise Apartments</td>
                    <td className="p-4">$165 - $250</td>
                    <td className="p-4">16-22 months</td>
                    <td className="p-4">5-8 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Townhome Communities</td>
                    <td className="p-4">$140 - $200</td>
                    <td className="p-4">12-16 months</td>
                    <td className="p-4">4-6 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Senior Living Facilities</td>
                    <td className="p-4">$200 - $290</td>
                    <td className="p-4">18-24 months</td>
                    <td className="p-4">6-10 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Waterfront Condos</td>
                    <td className="p-4">$220 - $350</td>
                    <td className="p-4">18-26 months</td>
                    <td className="p-4">6-10 weeks</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium">Mixed-Use Residential</td>
                    <td className="p-4">$170 - $260</td>
                    <td className="p-4">16-24 months</td>
                    <td className="p-4">5-8 weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Costs reflect hard construction only. Land, soft costs, financing, and developer fees are additional.
              Ruskin costs typically 10-15% lower than urban Tampa due to market conditions. Estimates based on 2024-2025 market.
            </p>
          </div>
        </div>
      </section>

      {/* Local Expertise Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Building for Ruskin's Unique Conditions
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Home className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">FCS Home Base Advantage</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Florida Construction Specialists is headquartered in Ruskin. This means faster response times, lower overhead (no travel costs), deep relationships with local subcontractors and suppliers, and intimate knowledge of Hillsborough County Building Services processes. Your project benefits from our home-field advantage.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Former Agricultural Land</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Much of Ruskin's developable land was historically tomato farming. This creates opportunities: flat terrain, no demolition costs, and clay-rich soils that provide good foundation support. We navigate environmental reviews and any wetland mitigation requirements efficiently.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Coastal Construction Expertise</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Apollo Beach and Ruskin's Tampa Bay waterfront areas fall within FEMA flood zones VE and AE. We design and build to coastal requirements including elevated structures, flood-resistant materials, and proper drainage. Our experience ensures compliance and insurability for waterfront projects.
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
                  Ruskin is in Wind Zone 3 with 120 mph design wind speed requirements. Coastal areas face storm surge risk. All our multi-family construction meets or exceeds Florida Building Code requirements for impact-resistant windows and doors, enhanced roof tie-downs, and wind-resistant structural systems.
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
            Our Ruskin Multi-Family Construction Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Pre-Construction & Planning",
                  description: "We begin with thorough site evaluation, constructability review, and detailed budgeting. For Ruskin multi-family projects, this includes soil analysis of former agricultural land, flood zone determination for coastal parcels, environmental review, utility coordination, and permit pathway planning through Hillsborough County Building Services."
                },
                {
                  step: "2",
                  title: "Design Coordination",
                  description: "Whether working with your design team or providing design-build services, we ensure plans meet Hillsborough County codes, wind requirements, fire codes, and accessibility standards while optimizing constructability. For Ruskin, we factor in site-specific conditions like agricultural soil composition and wetland buffers."
                },
                {
                  step: "3",
                  title: "Permitting & Approvals",
                  description: "We manage all building permits through Hillsborough County Building Services, coordinate plan reviews with fire marshal, utilities, and environmental services. Our established relationships help expedite processing. For larger developments, we handle Planned Development (PD) review and any required variances."
                },
                {
                  step: "4",
                  title: "Construction Execution",
                  description: "Experienced project managers oversee daily construction with strict quality control, safety protocols, and schedule management. As Ruskin's home-base contractor, our team is always nearby. We adjust for rainy season (May-September) with strategic scheduling and understand local subcontractor capabilities intimately."
                },
                {
                  step: "5",
                  title: "Closeout & Turnover",
                  description: "We complete all Hillsborough County inspections, obtain certificate of occupancy, and provide comprehensive turnover documentation including warranties, as-builts, and operations manuals. For multi-family, we coordinate with property management teams for smooth transition to occupancy and leasing."
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
            Why Ruskin Developers Choose FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-6">
              <Home className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Home Base Advantage</h3>
              <p className="text-gray-600">
                FCS is headquartered in Ruskin. No other contractor knows this market better or can respond faster. Your project benefits from our local presence, relationships, and commitment to this community.
              </p>
            </div>
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Always Prime Contractor</h3>
              <p className="text-gray-600">
                We never work as a subcontractor on Ruskin multi-family projects. You get direct accountability, single-point contact, and our full commitment to your project's success from groundbreaking to occupancy.
              </p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Competitive Pricing</h3>
              <p className="text-gray-600">
                Ruskin's emerging market status and our local presence enable competitive pricing—typically 10-15% lower than urban Tampa. We help developers maximize returns on workforce housing and attainable products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema items={ruskinFaqs} title="Multi-Family Construction in Ruskin - Frequently Asked Questions" />

      {/* Internal Links Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Services & Locations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Related Services in Ruskin</h3>
              <ul className="space-y-2">
                <li><Link href="/commercial-construction-ruskin/" className="text-brand-green hover:underline">Commercial Construction Ruskin</Link></li>
                <li><Link href="/balcony-reconstruction-ruskin/" className="text-brand-green hover:underline">Balcony Reconstruction Ruskin</Link></li>
                <li><Link href="/historic-restoration-ruskin/" className="text-brand-green hover:underline">Historic Restoration Ruskin</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Multi-Family Construction Nearby</h3>
              <ul className="space-y-2">
                <li><Link href="/multi-family-construction-brandon/" className="text-brand-green hover:underline">Multi-Family Construction Brandon</Link></li>
                <li><Link href="/multi-family-construction-tampa/" className="text-brand-green hover:underline">Multi-Family Construction Tampa</Link></li>
                <li><Link href="/multi-family-construction-bradenton/" className="text-brand-green hover:underline">Multi-Family Construction Bradenton</Link></li>
                <li><Link href="/multi-family-construction-sarasota/" className="text-brand-green hover:underline">Multi-Family Construction Sarasota</Link></li>
                <li><Link href="/multi-family-construction-st-petersburg/" className="text-brand-green hover:underline">Multi-Family Construction St. Petersburg</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Learn More</h3>
              <ul className="space-y-2">
                <li><Link href="/multi-family-construction/" className="text-brand-green hover:underline">Multi-Family Construction Services</Link></li>
                <li><Link href="/commercial/condo-remediation/" className="text-brand-green hover:underline">Condo Remediation Services</Link></li>
                <li><Link href="/florida-sb4d-compliance-guide/" className="text-brand-green hover:underline">Florida SB 4-D Compliance Guide</Link></li>
                <li><Link href="/about/" className="text-brand-green hover:underline">About FCS</Link></li>
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
            Start Your Ruskin Multi-Family Construction Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. As your home-base contractor in Ruskin, we deliver multi-family construction excellence with competitive pricing starting at $1,000,000.
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
