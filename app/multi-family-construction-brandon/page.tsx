import Link from "next/link";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Clock, Users, Thermometer, Wind, Droplets, FileCheck, HardHat, Car, Home, TrendingUp } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "Multi-Family Construction Brandon | Condos | FCS",
  description: "Premier multi-family construction contractor in Brandon, Florida (unincorporated Hillsborough County). Condominiums, apartments, townhomes, senior living. $1M-$25M+ projects. 20+ years experience, 40+ years experience. Prime contractor on all projects. Call (813) 420-7561.",
  keywords: "multi-family construction brandon, apartment construction brandon fl, condo builder brandon florida, townhome construction brandon, senior living construction brandon, fishhawk ranch construction",
};

const projectTypes = [
  {
    title: "Condominium Construction",
    description: "Ground-up condo development serving Brandon's growing suburban market, from mid-rise communities along Highway 60 to luxury developments in FishHawk Ranch."
  },
  {
    title: "Apartment Complexes",
    description: "Garden-style and mid-rise apartment communities throughout Brandon, meeting demand from families and professionals seeking suburban living with Tampa access."
  },
  {
    title: "Townhome Developments",
    description: "Suburban townhome communities in Brandon's expanding neighborhoods, offering attainable ownership housing for families priced out of closer-in Tampa markets."
  },
  {
    title: "Senior Living Facilities",
    description: "Independent living, assisted living, and memory care facilities serving Brandon's established population and Tampa Bay's growing senior demographic."
  },
  {
    title: "Workforce Housing",
    description: "Affordable and workforce housing developments meeting the needs of Brandon's retail, healthcare, and distribution center employees."
  },
  {
    title: "Mixed-Use Residential",
    description: "Residential components of mixed-use developments along Brandon's commercial corridors, combining housing with retail convenience."
  }
];

// Brandon-specific multi-family FAQs
const brandonFaqs = [
  {
    question: "What types of multi-family projects does FCS build in Brandon?",
    answer: "Florida Construction Specialists builds all types of multi-family residential in Brandon: condominiums, garden-style and mid-rise apartments, townhome developments, senior living facilities, and mixed-use residential. Our Brandon multi-family projects range from $1 million to $25 million+ and include both ground-up construction and major renovations. We've completed projects throughout the Brandon area including near Westfield Brandon, along Highway 60, and in master-planned communities like FishHawk Ranch."
  },
  {
    question: "Why is Brandon attractive for multi-family development?",
    answer: "Brandon offers compelling advantages for multi-family development: lower land costs than Tampa proper (typically 20-30% less), strong rental demand from families and young professionals, excellent highway access via I-75 and Highway 60, proximity to major employers including Brandon Regional Hospital and Westfield Brandon retail, and rapid population growth in surrounding areas like FishHawk Ranch and Riverview. The suburban family demographic creates consistent demand for quality rental and for-sale housing."
  },
  {
    question: "What are Brandon's permitting requirements for multi-family construction?",
    answer: "Brandon is unincorporated Hillsborough County, so all permitting goes through Hillsborough County Building Services rather than a city building department. This includes plan review, building permits, and inspections. Key requirements include traffic concurrency (demonstrating adequate road capacity), stormwater management plans, and environmental review for wetlands. Projects in planned developments like FishHawk may have additional architectural review requirements. We navigate these processes on every Brandon multi-family project."
  },
  {
    question: "How do construction costs in Brandon compare to Tampa?",
    answer: "Brandon multi-family construction costs typically run 10-15% lower than Tampa proper, primarily due to lower land costs and less complex site conditions. Hard construction costs are similar to Tampa—garden-style apartments run $135-195 per square foot; mid-rise apartments $160-250/SF; townhomes $135-195/SF. The savings come from land acquisition, reduced traffic impact fees compared to urban Tampa, and generally easier site access for construction equipment."
  },
  {
    question: "What amenities do Brandon multi-family projects typically include?",
    answer: "Brandon multi-family projects typically emphasize family-friendly amenities: swimming pools with kids' areas, playgrounds, fitness centers, clubhouses with event space, covered parking, dog parks, and ample green space. Projects targeting younger demographics may add coworking spaces and package lockers. Senior living projects include specialized amenities like walking trails, activity rooms, and healthcare coordination spaces. We advise on amenity packages that match Brandon's suburban family market."
  },
  {
    question: "How long does multi-family construction take in Brandon?",
    answer: "Brandon multi-family construction timelines are comparable to greater Tampa Bay: townhome communities typically take 12-18 months; garden-style apartments 14-20 months; mid-rise buildings 16-22 months. These timelines include site work, vertical construction, and amenity completion. Hillsborough County permitting typically takes 4-6 weeks. We account for Tampa Bay's rainy season scheduling to minimize weather delays. Detailed schedules are provided during pre-construction."
  },
  {
    question: "Does Brandon have any historic preservation requirements for multi-family projects?",
    answer: "Unlike Tampa's Ybor City or Hyde Park, Brandon has no historic districts or preservation overlay requirements. This simplifies the approval process for multi-family development—no Historic Preservation Commission review or architectural restrictions based on historic character. Development review focuses on Hillsborough County land use codes, traffic concurrency, and environmental requirements. This regulatory environment makes Brandon attractive for straightforward development timelines."
  },
  {
    question: "What makes FCS different from other Brandon multi-family contractors?",
    answer: "FCS is always the prime general contractor on Brandon multi-family projects—we never work as a subcontractor. This means direct accountability to you, not to another GC. We bring 20+ years of experience, 40+ years experience and in-house engineering, and deep knowledge of Hillsborough County's permitting process. We understand Brandon's specific advantages: suburban land availability, family-focused market demand, and strategic location between Tampa and Lakeland. Our project managers know the local subcontractor market and building department relationships."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Multi-Family Construction", href: "/multi-family-construction/" },
  { name: "Brandon", href: "/multi-family-construction-brandon/" },
];

export default function MultiFamilyConstructionBrandonPage() {
  return (
    <>
      <LocalBusinessSchema city="Brandon" service="Multi-Family Construction" />
      <ServiceSchema
        serviceName="Multi-Family Construction"
        serviceDescription="Premier multi-family construction contractor serving Brandon, Florida (unincorporated Hillsborough County). Condominiums, apartments, townhomes, senior living. Projects from $1M to $25M+. Always the prime contractor."
        city="Brandon"
        minPrice="1000000"
      />

      <ArticleSchema
        headline="Multi-Family Construction Brandon FL | Condos, Apartments & Townhomes | FCS"
        description="Premier multi-family construction contractor in Brandon, Florida (unincorporated Hillsborough County). Condominiums, apartments, townhomes, senior living. $1M-$25M+ projects. 20+ years experience, 40+ years experience."
        datePublished="2024-06-01"
        dateModified="2025-01-18"
        slug="/multi-family-construction-brandon/"
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
              <span className="text-brand-gold font-semibold">Serving Brandon, Florida (Unincorporated Hillsborough County)</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Multi-Family Construction in Brandon, FL
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists delivers multi-family construction excellence throughout Brandon and eastern Hillsborough County. From apartment communities near Westfield Brandon to townhome developments in FishHawk Ranch, we bring 20+ years of experience to projects ranging from $1 million to $25 million.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              As Brandon's premier prime contractor for multi-family residential, we handle condominiums, apartments, townhomes, and senior living—never as a subcontractor, always with full project accountability through Hillsborough County Building Services.
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
                Multi-Family Construction Services in Brandon
              </h2>
              <p className="text-gray-600 mb-6">
                Brandon is one of Tampa Bay's largest unincorporated communities, with a population exceeding 115,000 and strategic location at the intersection of I-75 and Highway 60. This suburban hub offers multi-family developers compelling advantages: lower land costs than Tampa proper, strong rental demand from families and young professionals, and proximity to major employment centers including Brandon Regional Hospital, Westfield Brandon, and Tampa's job markets.
              </p>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists serves Brandon's diverse multi-family construction needs with the expertise, bonding capacity, and local knowledge required for projects from $1 million to $25 million or more. Whether you're developing an apartment community along the Highway 60 retail corridor, townhomes in FishHawk Ranch, or senior living facilities serving the established Brandon population, we deliver on time and on budget.
              </p>
              <p className="text-gray-600 mb-8">
                As a prime general contractor—never a subcontractor—we maintain full control and accountability on every Brandon multi-family project. Our relationships with Hillsborough County Building Services, local subcontractors, and suppliers ensure smooth execution from groundbreaking to first occupancy.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-6">
                Multi-Family Project Types We Build in Brandon
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
                Discuss Your Brandon Multi-Family Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <RelatedServices city="Brandon" currentService="multi-family-construction" />
              <NearbyLocations currentCity="Brandon" service="multi-family-construction" serviceName="Multi-Family Construction" />

              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark rounded-lg p-6 text-white">
                <h3 className="font-bold text-xl mb-4">Start Your Brandon Project</h3>
                <p className="text-gray-200 mb-4 text-sm">
                  Contact us for a project consultation. Multi-family construction in Brandon starting at $1,000,000.
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

      {/* Brandon Multi-Family Market Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Brandon's Multi-Family Construction Landscape
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Car className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Highway 60 Retail Corridor</h3>
              <p className="text-gray-600 text-sm">
                Brandon's Highway 60 corridor anchored by Westfield Brandon creates strong multi-family demand. Retail and service employees need nearby housing, while residents benefit from walkable access to shopping, dining, and entertainment. Mixed-use and apartment projects along this corridor see consistent occupancy.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">FishHawk Ranch Growth</h3>
              <p className="text-gray-600 text-sm">
                FishHawk Ranch and surrounding master-planned communities represent Brandon's premium residential market. These areas attract families seeking quality schools and suburban amenities, driving demand for townhomes and condominiums with community amenities, walking trails, and family-friendly design.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Riverview Expansion</h3>
              <p className="text-gray-600 text-sm">
                Riverview's explosive growth south of Brandon creates spillover demand and development opportunities. Families priced out of closer-in locations seek quality rental options with I-75 commuter access. Multi-family projects in the Brandon-Riverview corridor benefit from this population surge.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Suburban Family Housing Demand</h3>
              <p className="text-gray-600 text-sm">
                Brandon's demographic skews toward families with children, creating demand for larger units (2-3 bedrooms), family-friendly amenities, and proximity to top-rated Hillsborough County schools. This market segment supports both rental apartments and for-sale townhomes.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Healthcare Sector Growth</h3>
              <p className="text-gray-600 text-sm">
                Brandon Regional Hospital (HCA) anchors a growing healthcare employment cluster. Medical professionals and support staff create steady rental demand, while the aging population drives senior living development. Healthcare-adjacent multi-family projects see strong absorption.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Distribution & Logistics</h3>
              <p className="text-gray-600 text-sm">
                Amazon and other distribution centers in the Brandon-Ruskin area employ thousands of workers needing affordable housing. Workforce housing developments targeting this demographic benefit from Brandon's I-75 access and relatively lower development costs compared to Tampa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Timeline Comparison Table */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Brandon Multi-Family Construction: Costs & Timelines
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Brandon construction costs typically run 10-15% lower than Tampa proper due to lower land costs and less complex site conditions.
          </p>
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
                    <td className="p-4">$135 - $195</td>
                    <td className="p-4">14-20 months</td>
                    <td className="p-4">4-6 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Mid-Rise Apartments</td>
                    <td className="p-4">$160 - $250</td>
                    <td className="p-4">16-22 months</td>
                    <td className="p-4">5-8 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Townhome Communities</td>
                    <td className="p-4">$135 - $195</td>
                    <td className="p-4">12-18 months</td>
                    <td className="p-4">4-6 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Senior Living Facilities</td>
                    <td className="p-4">$195 - $285</td>
                    <td className="p-4">16-24 months</td>
                    <td className="p-4">5-8 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Workforce Housing</td>
                    <td className="p-4">$125 - $175</td>
                    <td className="p-4">12-18 months</td>
                    <td className="p-4">4-6 weeks</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium">Mixed-Use Residential</td>
                    <td className="p-4">$150 - $220</td>
                    <td className="p-4">14-22 months</td>
                    <td className="p-4">5-8 weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Costs reflect hard construction only. Land, soft costs, financing, and developer fees are additional.
              Estimates based on 2024-2025 Brandon/Hillsborough County market conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Brandon-Specific Construction Considerations */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Brandon-Specific Construction Considerations
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Hillsborough County Jurisdiction</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Brandon is unincorporated Hillsborough County, meaning all permitting goes through Hillsborough County Building Services rather than a city department. This creates a single point of contact for permits, inspections, and approvals. County processes are well-established with predictable timelines averaging 4-6 weeks for commercial permits.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Car className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Traffic Concurrency Requirements</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Hillsborough County requires traffic concurrency analysis for multi-family developments—demonstrating that roads can handle additional traffic from your project. This may require traffic impact fees or road improvements. We factor these requirements into project budgets and timelines during pre-construction planning.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Home className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Suburban Land Availability</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Unlike urban Tampa, Brandon still offers developable parcels suitable for multi-family construction. Land costs run 20-30% lower than Tampa proper, with larger parcels available for garden-style developments. This creates opportunities for projects that wouldn't pencil in closer-in markets.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Stormwater & Environmental</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Brandon's Alafia River corridor has flood zone considerations, though most of the area is Zone X (minimal flood risk). Environmental resource permits may be required for wetland areas. FishHawk and newer developments have comprehensive stormwater systems. We navigate SWFWMD and county environmental requirements on every project.
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
            Our Brandon Multi-Family Construction Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Pre-Construction & Planning",
                  description: "We begin with thorough site evaluation, constructability review, and detailed budgeting. For Brandon multi-family projects, this includes soil analysis (mix of sandy and clay soils), flood zone verification, traffic concurrency assessment, and permit pathway planning through Hillsborough County Building Services."
                },
                {
                  step: "2",
                  title: "Design Coordination",
                  description: "Whether working with your design team or providing design-build services, we ensure plans meet Hillsborough County codes, wind requirements (Zone 2-3 depending on location), fire codes, and accessibility standards while optimizing constructability and controlling costs for Brandon's competitive market."
                },
                {
                  step: "3",
                  title: "Permitting & Approvals",
                  description: "We manage all building permit applications through Hillsborough County Building Services, coordinate plan reviews with multiple departments (building, fire, utilities, transportation), and handle environmental permits through SWFWMD when required. Our relationships with county staff help expedite the process."
                },
                {
                  step: "4",
                  title: "Construction Execution",
                  description: "Experienced project managers oversee daily construction with strict quality control, safety protocols, and schedule management. We adjust for Tampa Bay's rainy season (May-September) with strategic scheduling of weather-sensitive work. Brandon's suburban access typically allows efficient material delivery and equipment staging."
                },
                {
                  step: "5",
                  title: "Closeout & Turnover",
                  description: "We complete all Hillsborough County inspections, obtain certificate of occupancy, and provide comprehensive turnover documentation including warranties, as-builts, and operations manuals. For multi-family, we coordinate with property management for smooth transition to occupancy and leasing."
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
            Why Brandon Developers Choose FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Always Prime Contractor</h3>
              <p className="text-gray-600">
                We never work as a subcontractor on Brandon multi-family projects. You get direct accountability, single-point contact, and our full commitment to your project's success from groundbreaking to occupancy.
              </p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Hillsborough County Expertise</h3>
              <p className="text-gray-600">
                With deep experience in Hillsborough County permitting and construction, we understand the specific requirements for Brandon projects—traffic concurrency, environmental review, and county building codes.
              </p>
            </div>
            <div className="card text-center p-6">
              <Users className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Local Market Knowledge</h3>
              <p className="text-gray-600">
                We understand Brandon's suburban family market, from amenity expectations to unit mix optimization. Our local relationships with subcontractors and suppliers help ensure competitive pricing and reliable execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema items={brandonFaqs} title="Multi-Family Construction in Brandon - Frequently Asked Questions" />

      {/* Internal Links Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Services & Locations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Related Services in Brandon</h3>
              <ul className="space-y-2">
                <li><Link href="/commercial-construction-brandon/" className="text-brand-green hover:underline">Commercial Construction Brandon</Link></li>
                <li><Link href="/balcony-reconstruction-brandon/" className="text-brand-green hover:underline">Balcony Reconstruction Brandon</Link></li>
                <li><Link href="/historic-restoration-brandon/" className="text-brand-green hover:underline">Historic Restoration Brandon</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Multi-Family Construction Nearby</h3>
              <ul className="space-y-2">
                <li><Link href="/multi-family-construction-tampa/" className="text-brand-green hover:underline">Multi-Family Construction Tampa</Link></li>
                <li><Link href="/multi-family-construction-lakeland/" className="text-brand-green hover:underline">Multi-Family Construction Lakeland</Link></li>
                <li><Link href="/multi-family-construction-ruskin/" className="text-brand-green hover:underline">Multi-Family Construction Ruskin</Link></li>
                <li><Link href="/multi-family-construction-st-petersburg/" className="text-brand-green hover:underline">Multi-Family Construction St. Petersburg</Link></li>
                <li><Link href="/multi-family-construction-clearwater/" className="text-brand-green hover:underline">Multi-Family Construction Clearwater</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Learn More</h3>
              <ul className="space-y-2">
                <li><Link href="/multi-family-construction/" className="text-brand-green hover:underline">Multi-Family Construction Services</Link></li>
                <li><Link href="/commercial/condo-remediation/" className="text-brand-green hover:underline">Condo Remediation Services</Link></li>
                <li><Link href="/condo-common-area-reconstruction/" className="text-brand-green hover:underline">Condo Common Area Reconstruction</Link></li>
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
            Start Your Brandon Multi-Family Construction Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. We deliver multi-family construction excellence in Brandon with projects starting at $1,000,000.
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
