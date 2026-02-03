import Link from "next/link";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Clock, Users, Thermometer, Wind, Droplets, FileCheck, HardHat, DollarSign, TrendingUp, Factory } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "Multi-Family Construction Lakeland | Condos | FCS",
  description: "Premier multi-family construction contractor in Lakeland, Polk County. Condominiums, apartments, townhomes, senior living. $1M-$25M+ projects. I-4 corridor expertise. 15-25% lower costs than coastal. Call (813) 420-7561.",
  keywords: "multi-family construction lakeland, apartment construction lakeland fl, condo builder lakeland, townhome construction polk county, senior living construction lakeland, workforce housing lakeland",
};

const projectTypes = [
  {
    title: "Condominium Construction",
    description: "Ground-up condo development in Downtown Lakeland, Lake Morton, and Lake Hollingsworth areas serving the growing Central Florida market."
  },
  {
    title: "Apartment Complexes",
    description: "Garden-style and mid-rise apartment communities throughout Lakeland and Polk County, including workforce housing for the expanding logistics sector."
  },
  {
    title: "Townhome Developments",
    description: "Attainable ownership housing in Lakeland's growth corridors—Providence, Grasslands, and South Lakeland—meeting I-4 corridor demand."
  },
  {
    title: "Senior Living Facilities",
    description: "Independent living, assisted living, and memory care facilities serving Polk County's growing retirement population and healthcare sector."
  },
  {
    title: "Student Housing",
    description: "Purpose-built student housing serving Florida Southern College, Southeastern University, and Polk State College students."
  },
  {
    title: "Mixed-Use Residential",
    description: "Residential components of mixed-use developments in Downtown Lakeland's revitalized core with ground-floor retail and restaurants."
  }
];

// Lakeland-specific multi-family FAQs
const lakelandFaqs = [
  {
    question: "What makes Lakeland attractive for multi-family development?",
    answer: "Lakeland offers several advantages for multi-family construction: strategic I-4 corridor location between Tampa and Orlando, significantly lower land costs than coastal markets, Publix headquarters and major employers creating stable workforce housing demand, downtown revitalization attracting young professionals, and 15-25% lower construction costs than Tampa or coastal Florida. The city's growing population of 115,000+ and the broader Lakeland-Winter Haven metro of 750,000 provide strong rental demand."
  },
  {
    question: "How do Lakeland construction costs compare to Tampa and coastal areas?",
    answer: "Multi-family construction in Lakeland typically runs 15-25% lower than Tampa and coastal markets. Garden-style apartments cost $125-185/SF versus Tampa's $150-220/SF; mid-rise apartments $155-240/SF versus $180-280/SF; townhomes $130-190/SF versus $150-220/SF. Lower costs come from reduced land prices, less stringent flood requirements (most of Lakeland is Zone X), lower insurance costs due to inland location, and competitive labor markets. These savings make Lakeland projects attractive for workforce and attainable housing."
  },
  {
    question: "What are the flood and hurricane considerations for Lakeland multi-family construction?",
    answer: "Lakeland's inland location provides significant advantages over coastal construction. Most of Lakeland is in FEMA Zone X (minimal flood risk), with only lake-adjacent properties in AE zones requiring flood-resistant construction. Hurricane wind requirements are Zone 2 (lower than coastal Zone 3), meaning reduced structural requirements and cost savings. There is no storm surge risk. These factors translate to lower insurance premiums, simpler foundation requirements, and reduced construction costs—advantages that make Lakeland multi-family projects more cost-effective."
  },
  {
    question: "How does the I-4 corridor affect Lakeland's multi-family market?",
    answer: "The I-4 corridor is transforming Lakeland's economy and driving multi-family demand. Amazon, Walmart, and other logistics companies have built major distribution centers, creating thousands of jobs requiring workforce housing. I-4's location makes Lakeland a bedroom community for both Tampa (45 minutes) and Orlando (1 hour). The proposed SunRail extension and improving I-4 infrastructure continue to make Lakeland attractive. Investors recognize these dynamics—multi-family absorption remains strong across all market segments."
  },
  {
    question: "What is the permitting process for multi-family construction in Lakeland?",
    answer: "Multi-family permitting in Lakeland goes through the City of Lakeland Building Inspection Division, with commercial projects typically taking 3-5 weeks for permit approval—faster than Tampa or coastal cities. The city offers development incentives for I-4 corridor logistics and downtown overlay district projects. FCS maintains strong relationships with Lakeland building officials and navigates the approval process efficiently. We coordinate plan review, fire marshal approval, and all inspections to keep projects on schedule."
  },
  {
    question: "How does soil condition in Lakeland differ from coastal construction?",
    answer: "Lakeland's clay-rich soil differs significantly from coastal sandy soils. This provides better foundation support in many cases, though drainage considerations are important. Unlike Tampa's high water table and sinkhole-prone karst geology, Lakeland generally offers more stable building conditions. Some areas have legacy issues from historic phosphate mining that require soil testing. We conduct thorough geotechnical analysis on every Lakeland project to ensure appropriate foundation design."
  },
  {
    question: "What workforce housing opportunities exist in Lakeland?",
    answer: "Lakeland's workforce housing market is particularly strong due to major employers: Publix headquarters (10,000+ employees), Lakeland Regional Health, GEICO, Amazon fulfillment center, and growing logistics operations. These workers need quality, affordable housing. Workforce housing projects—typically targeting 80-120% AMI renters—benefit from Lakeland's lower construction costs while achieving competitive rents. FCS has experience with workforce housing programs and can advise on design specifications that optimize construction costs while meeting market demands."
  },
  {
    question: "What is the multi-family construction timeline in Lakeland?",
    answer: "Lakeland multi-family timelines are comparable to or slightly faster than coastal markets due to fewer weather delays from storm surge and coastal storms. Townhome communities: 10-16 months; garden-style apartments: 12-18 months; mid-rise apartments: 16-22 months. These timelines include site work, vertical construction, and amenity completion. Lakeland's efficient permitting process and stable weather patterns (inland location reduces hurricane impact) help maintain schedules. We provide detailed timelines during pre-construction planning."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Multi-Family Construction", href: "/multi-family-construction/" },
  { name: "Lakeland", href: "/multi-family-construction-lakeland/" },
];

export default function MultiFamilyConstructionLakelandPage() {
  return (
    <>
      <LocalBusinessSchema city="Lakeland" service="Multi-Family Construction" />
      <ServiceSchema
        serviceName="Multi-Family Construction"
        serviceDescription="Premier multi-family construction contractor serving Lakeland, Polk County, Florida. Condominiums, apartments, townhomes, senior living. Projects from $1M to $25M+. Always the prime contractor."
        city="Lakeland"
        minPrice="1000000"
      />

      <ArticleSchema
        headline="Multi-Family Construction Lakeland FL | Condos, Apartments & Townhomes | FCS"
        description="Premier multi-family construction contractor in Lakeland, Polk County. Condominiums, apartments, townhomes, senior living. $1M-$25M+ projects. I-4 corridor expertise. 15-25% lower costs than coastal."
        datePublished="2024-06-01"
        dateModified="2025-01-18"
        slug="/multi-family-construction-lakeland/"
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
              <span className="text-brand-gold font-semibold">Serving Lakeland, Polk County, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Multi-Family Construction in Lakeland, FL
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists delivers multi-family construction excellence throughout Lakeland and Polk County. From Downtown Lakeland mixed-use developments to suburban apartment communities along the I-4 corridor, we bring 20+ years of experience to projects ranging from $1 million to $25 million.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              Lakeland's inland location means 15-25% lower construction costs than coastal markets, reduced flood requirements, and lower insurance premiums—advantages that make your multi-family investment more profitable.
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
                Multi-Family Construction Services in Lakeland
              </h2>
              <p className="text-gray-600 mb-6">
                Lakeland is Central Florida's emerging multi-family market, strategically positioned along the I-4 corridor between Tampa and Orlando. With a population exceeding 115,000 and the Lakeland-Winter Haven metro area approaching 750,000, demand for quality multi-family housing continues to grow across all market segments—from workforce housing serving the booming logistics sector to senior living facilities for Florida's retirement community.
              </p>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists serves Lakeland's diverse multi-family construction needs with the expertise, bonding capacity, and local knowledge required for projects from $1 million to $25 million or more. Whether you're developing apartments near the Publix headquarters, townhomes in the Providence master-planned community, or student housing near Florida Southern College, we deliver on time and on budget.
              </p>
              <p className="text-gray-600 mb-8">
                As a prime general contractor—never a subcontractor—we maintain full control and accountability on every Lakeland multi-family project. Our relationships with the City of Lakeland Building Inspection Division, local subcontractors, and suppliers ensure smooth execution from groundbreaking to first occupancy.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-6">
                Multi-Family Project Types We Build in Lakeland
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
                Discuss Your Lakeland Multi-Family Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <RelatedServices city="Lakeland" currentService="multi-family-construction" />
              <NearbyLocations currentCity="Lakeland" service="multi-family-construction" serviceName="Multi-Family Construction" />

              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark rounded-lg p-6 text-white">
                <h3 className="font-bold text-xl mb-4">Start Your Lakeland Project</h3>
                <p className="text-gray-200 mb-4 text-sm">
                  Contact us for a project consultation. Multi-family construction in Lakeland starting at $1,000,000 with 15-25% cost savings vs. coastal markets.
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

      {/* Lakeland Multi-Family Market Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Lakeland's Multi-Family Construction Landscape
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">I-4 Corridor Growth</h3>
              <p className="text-gray-600 text-sm">
                The I-4 corridor between Tampa and Orlando is Florida's fastest-growing region. Amazon, Walmart, and other logistics companies have created thousands of jobs, driving unprecedented demand for workforce and market-rate housing in Lakeland.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Publix Headquarters Impact</h3>
              <p className="text-gray-600 text-sm">
                Publix Super Markets' corporate headquarters employs 10,000+ workers in Lakeland. This stable employer base, combined with Lakeland Regional Health and GEICO, creates consistent demand for quality multi-family housing at all price points.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Downtown Revitalization</h3>
              <p className="text-gray-600 text-sm">
                Downtown Lakeland's revitalization—including the Lake Mirror Promenade, Munn Park, and expanding restaurant scene—is attracting young professionals seeking walkable urban living. Mixed-use developments with residential components are in high demand.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Workforce Housing Demand</h3>
              <p className="text-gray-600 text-sm">
                With median income around $46,000, Lakeland's workforce needs attainable housing options. Multi-family projects targeting 80-120% AMI renters benefit from strong demand and Lakeland's lower construction costs versus coastal markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Timeline Comparison Table */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Lakeland Multi-Family Construction: Costs & Timelines
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Lakeland's inland location and lower land costs translate to 15-25% savings versus Tampa and coastal Florida markets.
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
                    <td className="p-4">$125 - $185</td>
                    <td className="p-4">12-18 months</td>
                    <td className="p-4">3-5 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Mid-Rise Apartments</td>
                    <td className="p-4">$155 - $240</td>
                    <td className="p-4">16-22 months</td>
                    <td className="p-4">4-6 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Townhome Communities</td>
                    <td className="p-4">$130 - $190</td>
                    <td className="p-4">10-16 months</td>
                    <td className="p-4">3-4 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Senior Living Facilities</td>
                    <td className="p-4">$185 - $275</td>
                    <td className="p-4">14-20 months</td>
                    <td className="p-4">4-6 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Student Housing</td>
                    <td className="p-4">$145 - $220</td>
                    <td className="p-4">12-18 months</td>
                    <td className="p-4">3-5 weeks</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium">Mixed-Use Residential</td>
                    <td className="p-4">$160 - $250</td>
                    <td className="p-4">16-24 months</td>
                    <td className="p-4">4-6 weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Costs reflect hard construction only. Land, soft costs, financing, and developer fees are additional.
              Estimates based on 2024-2025 Lakeland market conditions. Costs are 15-25% lower than Tampa/coastal markets.
            </p>
          </div>
        </div>
      </section>

      {/* Lakeland Construction Advantages Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Lakeland's Inland Construction Advantages
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Wind className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Reduced Hurricane Risk</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Lakeland's inland location places it in Wind Zone 2 (110 mph design wind speed) versus coastal Zone 3 (120 mph). This means reduced structural requirements, lower material costs, and simpler building envelope design. There is zero storm surge risk—a major advantage over Tampa Bay and coastal Pinellas properties.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Minimal Flood Risk</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Most of Lakeland is in FEMA Zone X (minimal flood risk), unlike coastal areas with extensive VE and AE flood zones. Only lake-adjacent properties require flood-resistant construction. This translates to simpler foundations, lower insurance premiums, and reduced construction costs. No elevation certificates required for most sites.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">15-25% Lower Costs</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Lakeland's combination of lower land prices, reduced wind/flood requirements, competitive labor markets, and lower insurance costs results in 15-25% savings versus Tampa and coastal construction. These savings can translate to lower rents (workforce housing) or improved returns (market-rate development).
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-yellow-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Clay Soil Conditions</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Lakeland's clay-rich soil differs from coastal sandy conditions and often provides better foundation support. Unlike Tampa's karst geology with sinkhole risks, Lakeland generally offers more stable building conditions. Proper drainage design is essential, and we conduct thorough geotechnical analysis on every project.
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
            Our Lakeland Multi-Family Construction Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Pre-Construction & Planning",
                  description: "We begin with thorough site evaluation, constructability review, and detailed budgeting. For Lakeland multi-family projects, this includes soil analysis (clay-rich conditions differ from coastal sand), lake setback determination where applicable, utility coordination, and permit pathway planning through the City of Lakeland Building Inspection Division."
                },
                {
                  step: "2",
                  title: "Design Coordination",
                  description: "Whether working with your design team or providing design-build services, we ensure plans meet Polk County's building codes, Zone 2 wind requirements, fire codes, and accessibility standards while optimizing constructability. We leverage Lakeland's less stringent coastal requirements to reduce costs without compromising quality."
                },
                {
                  step: "3",
                  title: "City of Lakeland Permitting",
                  description: "We manage all building permit applications through the City of Lakeland Building Inspection Division, coordinating plan reviews with building, fire, and utility departments. Lakeland's permitting process (3-5 weeks typical) is faster than Tampa or coastal cities. We can also help navigate downtown overlay district requirements and I-4 corridor development incentives."
                },
                {
                  step: "4",
                  title: "Construction Execution",
                  description: "Experienced project managers oversee daily construction with strict quality control, safety protocols, and schedule management. Lakeland's inland location means fewer weather delays from tropical storms, though we still plan for summer afternoon thunderstorms (May-September). Our local subcontractor relationships ensure reliable execution."
                },
                {
                  step: "5",
                  title: "Closeout & Turnover",
                  description: "We complete all City of Lakeland inspections, obtain certificate of occupancy, and provide comprehensive turnover documentation including warranties, as-builts, and operations manuals. For multi-family projects, we coordinate with property management for smooth transition to leasing and first occupancy."
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
            Why Lakeland Developers Choose FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Always Prime Contractor</h3>
              <p className="text-gray-600">
                We never work as a subcontractor on Lakeland multi-family projects. You get direct accountability, single-point contact, and our full commitment to your project's success from groundbreaking to occupancy.
              </p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Central Florida Expertise</h3>
              <p className="text-gray-600">
                With $25M+ in completed projects throughout Tampa Bay and Central Florida, we understand Lakeland's unique market—its building codes, soil conditions, growth corridors, and cost advantages over coastal markets.
              </p>
            </div>
            <div className="card text-center p-6">
              <Users className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Local Relationships</h3>
              <p className="text-gray-600">
                Strong relationships with City of Lakeland building officials, Polk County inspectors, subcontractors, and suppliers help ensure smooth permitting and efficient construction execution throughout your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema items={lakelandFaqs} title="Multi-Family Construction in Lakeland - Frequently Asked Questions" />

      {/* Internal Links Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Services & Locations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Related Services in Lakeland</h3>
              <ul className="space-y-2">
                <li><Link href="/commercial-construction-lakeland/" className="text-brand-green hover:underline">Commercial Construction Lakeland</Link></li>
                <li><Link href="/historic-restoration-lakeland/" className="text-brand-green hover:underline">Historic Restoration Lakeland</Link></li>
                <li><Link href="/balcony-reconstruction-lakeland/" className="text-brand-green hover:underline">Balcony Reconstruction Lakeland</Link></li>
                <li><Link href="/senior-living-construction-requirements/" className="text-brand-green hover:underline">Senior Living Construction Requirements</Link></li>
                <li><Link href="/condo-common-area-reconstruction/" className="text-brand-green hover:underline">Condo Common Area Reconstruction</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Multi-Family Construction Nearby</h3>
              <ul className="space-y-2">
                <li><Link href="/multi-family-construction-tampa/" className="text-brand-green hover:underline">Multi-Family Construction Tampa</Link></li>
                <li><Link href="/multi-family-construction-brandon/" className="text-brand-green hover:underline">Multi-Family Construction Brandon</Link></li>
                <li><Link href="/multi-family-construction-st-petersburg/" className="text-brand-green hover:underline">Multi-Family Construction St. Petersburg</Link></li>
                <li><Link href="/multi-family-construction-sarasota/" className="text-brand-green hover:underline">Multi-Family Construction Sarasota</Link></li>
                <li><Link href="/multi-family-construction-clearwater/" className="text-brand-green hover:underline">Multi-Family Construction Clearwater</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Learn More</h3>
              <ul className="space-y-2">
                <li><Link href="/multi-family-construction/" className="text-brand-green hover:underline">Multi-Family Construction Services</Link></li>
                <li><Link href="/multi-family-construction-project-management/" className="text-brand-green hover:underline">Multi-Family Project Management</Link></li>
                <li><Link href="/commercial/condo-remediation/" className="text-brand-green hover:underline">Condo Remediation Services</Link></li>
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
            Start Your Lakeland Multi-Family Construction Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. Multi-family construction in Lakeland offers 15-25% cost savings versus coastal markets with projects starting at $1,000,000.
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
