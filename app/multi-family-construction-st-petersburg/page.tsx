import Link from "next/link";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Clock, Users, Thermometer, Wind, Droplets, FileCheck, HardHat, Zap } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multi-Family Construction St. Petersburg FL | Condos, Apartments & Townhomes | FCS",
  description: "Premier multi-family construction contractor in St. Petersburg, Florida. Condominiums, apartments, townhomes, senior living. $1M-$50M+ projects. 20+ years experience, $10M+ bonding. Peninsula-ready construction. Call (813) 420-7561.",
  keywords: "multi-family construction st petersburg, apartment construction st pete, condo builder st petersburg fl, townhome construction st pete, senior living construction st petersburg, pinellas county multi-family",
};

const projectTypes = [
  {
    title: "Condominium Construction",
    description: "Ground-up condo development from mid-rise to high-rise in Downtown St. Pete, the Pier District, and waterfront locations throughout Pinellas County."
  },
  {
    title: "Apartment Complexes",
    description: "Garden-style to mid-rise apartment communities across St. Petersburg, including workforce housing near Gateway and luxury rentals downtown."
  },
  {
    title: "Townhome Developments",
    description: "Urban infill and fee-simple townhome communities serving St. Pete's growing demand for attainable ownership in walkable neighborhoods."
  },
  {
    title: "Senior Living Facilities",
    description: "Independent living, assisted living, and memory care facilities serving Pinellas County's substantial senior population."
  },
  {
    title: "Student Housing",
    description: "Purpose-built student housing serving Eckerd College, St. Petersburg College, and USF St. Petersburg campus."
  },
  {
    title: "Mixed-Use Residential",
    description: "Residential components of mixed-use developments with ground-floor retail along Beach Drive, Central Avenue, and the EDGE District."
  }
];

// St. Petersburg-specific multi-family FAQs
const stPeteFaqs = [
  {
    question: "What types of multi-family projects does FCS build in St. Petersburg?",
    answer: "Florida Construction Specialists builds all types of multi-family residential in St. Petersburg: condominiums (mid-rise and high-rise), garden-style and mid-rise apartments, townhome developments, senior living facilities, student housing, and mixed-use residential. Our St. Pete projects range from $1 million to $50 million+ and include both ground-up construction and major renovations. We've completed projects in Downtown St. Petersburg, the Gateway area, Old Northeast, and neighborhoods throughout Pinellas County."
  },
  {
    question: "How does St. Petersburg's peninsula geography affect multi-family construction?",
    answer: "St. Petersburg's unique peninsula location between Tampa Bay and the Gulf of Mexico creates specific construction challenges. Most of the city is in FEMA flood zones VE or AE, requiring elevated construction, flood-resistant materials, and careful storm surge planning. Our experience with Pinellas County's coastal construction requirements ensures your project meets all regulations while remaining insurable. We design buildings to withstand the peninsula's exposure to storms from multiple directions."
  },
  {
    question: "What multi-family markets are strongest in St. Petersburg right now?",
    answer: "St. Petersburg's multi-family market is thriving across several segments: luxury condominiums in Downtown St. Pete driven by the arts district renaissance, workforce housing near the Gateway business district, senior living facilities serving Pinellas County's large retirement population, and mixed-use development along Central Avenue and Beach Drive. The planned Tropicana Field redevelopment ($2.5B) will add thousands of residential units and further transform downtown."
  },
  {
    question: "How do lightning considerations affect construction scheduling in St. Pete?",
    answer: "St. Petersburg is in the 'lightning capital' region with the highest strike density in the United States. This significantly impacts construction scheduling, particularly for crane operations and rooftop work. We build detailed weather contingency plans into every schedule, monitor lightning detection systems, and train crews on safety protocols. Our experience managing around afternoon thunderstorms (May-September) minimizes weather-related delays while maintaining strict safety standards."
  },
  {
    question: "What are the current multi-family construction costs in St. Petersburg?",
    answer: "St. Petersburg multi-family construction costs are typically 5-10% lower than Tampa due to a more streamlined permitting process. Garden-style apartments run $145-210 per square foot; mid-rise apartments $175-270/SF; high-rise condominiums $240-385/SF; townhomes $145-210/SF; senior living facilities $210-310/SF. These costs include hard construction but exclude land, soft costs, and financing. We provide detailed budgeting during pre-construction tailored to your specific project."
  },
  {
    question: "How long does multi-family construction take in St. Petersburg?",
    answer: "St. Petersburg multi-family construction timelines depend on project scale and type. Townhome communities typically take 12-16 months; garden-style apartments 14-18 months; mid-rise buildings 16-22 months; high-rise construction 22-34 months. City of St. Petersburg Development Services is generally efficient, with commercial permits averaging 4-6 weeks. We account for weather scheduling around the rainy season and lightning activity."
  },
  {
    question: "What makes Downtown St. Pete attractive for multi-family development?",
    answer: "Downtown St. Petersburg has undergone a remarkable renaissance, transforming into one of Florida's most desirable urban neighborhoods. The arts district (Dali Museum, Museum of Fine Arts), walkable Beach Drive dining and entertainment, the Pier District improvements, and strong job growth at employers like Duke Energy, Raymond James, and Johns Hopkins All Children's Hospital drive demand. Young professionals and empty-nesters seeking an urban lifestyle are willing to pay premium rents for downtown living."
  },
  {
    question: "Do you handle permitting through the City of St. Petersburg?",
    answer: "Yes, FCS manages all building permits and construction-phase approvals through the City of St. Petersburg Development Services. We navigate plan review, coordinate with fire marshal approval, handle stormwater permits, and manage inspections. Our established relationships with city staff help expedite the process. For projects in historic districts like Old Northeast or Historic Kenwood, we also coordinate with preservation review requirements."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Multi-Family Construction", href: "/multi-family-construction/" },
  { name: "St. Petersburg", href: "/multi-family-construction-st-petersburg/" },
];

export default function MultiFamilyConstructionStPetersburgPage() {
  return (
    <>
      <LocalBusinessSchema city="St. Petersburg" service="Multi-Family Construction" />
      <ServiceSchema
        serviceName="Multi-Family Construction"
        serviceDescription="Premier multi-family construction contractor serving St. Petersburg, Florida. Condominiums, apartments, townhomes, senior living. Projects from $1M to $50M+. Always the prime contractor."
        city="St. Petersburg"
        minPrice="1000000"
      />

      <ArticleSchema
        headline="Multi-Family Construction St. Petersburg FL | Condos, Apartments & Townhomes | FCS"
        description="Premier multi-family construction contractor in St. Petersburg, Florida. Condominiums, apartments, townhomes, senior living. $1M-$50M+ projects. 20+ years experience, $10M+ bonding."
        datePublished="2024-06-01"
        dateModified="2025-01-18"
        slug="/multi-family-construction-st-petersburg/"
      />

      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems.slice(1)} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2023/12/southwinds-condo-front.jpeg')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving St. Petersburg, Pinellas County</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Multi-Family Construction in St. Petersburg, FL
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists delivers multi-family construction excellence throughout St. Petersburg and Pinellas County. From Downtown St. Pete high-rise condominiums to garden-style apartments near Gateway, we bring 20+ years of experience to projects ranging from $1 million to $50 million.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              As St. Petersburg's premier prime contractor for multi-family residential, we handle condominiums, apartments, townhomes, senior living, and student housing—never as a subcontractor, always with full project accountability and peninsula-ready construction expertise.
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
              <span className="font-semibold text-gray-700">$10M+ Bonding Capacity</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">$50M+ Completed Projects</span>
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
                Multi-Family Construction Services in St. Petersburg
              </h2>
              <p className="text-gray-600 mb-6">
                St. Petersburg is Pinellas County's largest city with a population exceeding 260,000 and serves as the cultural and economic heart of the peninsula. The city's remarkable downtown renaissance, vibrant arts district, and quality of life make it one of Florida's most desirable locations for multi-family development—from luxury waterfront condominiums to workforce housing serving the growing employment base.
              </p>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists serves St. Petersburg's diverse multi-family construction needs with the expertise, bonding capacity, and local knowledge required for projects from $1 million to $50 million or more. Whether you're developing a condominium tower in the Pier District, apartments near Gateway, or senior living in Old Northeast, we deliver on time and on budget.
              </p>
              <p className="text-gray-600 mb-8">
                As a prime general contractor—never a subcontractor—we maintain full control and accountability on every St. Petersburg multi-family project. Our relationships with the City of St. Petersburg Development Services, local subcontractors, and suppliers ensure smooth execution from groundbreaking to first occupancy.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-6">
                Multi-Family Project Types We Build in St. Petersburg
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
                Discuss Your St. Petersburg Multi-Family Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <RelatedServices city="St. Petersburg" currentService="multi-family-construction" />
              <NearbyLocations currentCity="St. Petersburg" service="multi-family-construction" serviceName="Multi-Family Construction" />

              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark rounded-lg p-6 text-white">
                <h3 className="font-bold text-xl mb-4">Start Your St. Pete Project</h3>
                <p className="text-gray-200 mb-4 text-sm">
                  Contact us for a project consultation. Multi-family construction in St. Petersburg starting at $1,000,000.
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

      {/* St. Petersburg Multi-Family Market Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            St. Petersburg's Multi-Family Construction Landscape
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Downtown Arts District</h3>
              <p className="text-gray-600 text-sm">
                Downtown St. Pete has transformed into one of Florida's premier urban destinations. The arts district anchored by the Dali Museum, walkable Beach Drive, and the renovated Pier District drive luxury condo and apartment demand. Young professionals and empty-nesters pay premium prices for the urban lifestyle.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Tropicana Field Redevelopment</h3>
              <p className="text-gray-600 text-sm">
                The planned $2.5 billion Tropicana Field redevelopment will transform 86 acres into a mixed-use district with thousands of residential units, office space, retail, and a new stadium. This generational project will reshape St. Pete's multi-family market and create significant construction opportunities through 2030 and beyond.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Gateway Business District</h3>
              <p className="text-gray-600 text-sm">
                The Gateway area in northwest St. Petersburg is Pinellas County's largest employment center with major employers including Jabil, Raymond James, and numerous tech companies. Garden-style and mid-rise apartments serving this workforce represent strong development opportunities with lower land costs than downtown.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Timeline Comparison Table */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            St. Petersburg Multi-Family Construction: Costs & Timelines
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
                    <td className="p-4">$145 - $210</td>
                    <td className="p-4">14-18 months</td>
                    <td className="p-4">4-6 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Mid-Rise Apartments</td>
                    <td className="p-4">$175 - $270</td>
                    <td className="p-4">16-22 months</td>
                    <td className="p-4">5-8 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">High-Rise Condominiums</td>
                    <td className="p-4">$240 - $385</td>
                    <td className="p-4">22-34 months</td>
                    <td className="p-4">6-12 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Townhome Communities</td>
                    <td className="p-4">$145 - $210</td>
                    <td className="p-4">12-16 months</td>
                    <td className="p-4">3-5 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Senior Living Facilities</td>
                    <td className="p-4">$210 - $310</td>
                    <td className="p-4">14-22 months</td>
                    <td className="p-4">5-8 weeks</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium">Student Housing</td>
                    <td className="p-4">$165 - $250</td>
                    <td className="p-4">12-20 months</td>
                    <td className="p-4">4-6 weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Costs reflect hard construction only. Land, soft costs, financing, and developer fees are additional.
              St. Petersburg costs typically 5-10% lower than Tampa. Estimates based on 2024-2025 market conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Local Expertise Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Building for St. Petersburg's Unique Conditions
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Peninsula Flood Zone Expertise</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  St. Petersburg's peninsula geography means extensive VE and AE flood zones throughout the city. Storm surge risk of 5-15 feet is possible for major hurricanes. We specialize in elevated construction, flood-resistant materials below BFE, and designs that meet FEMA requirements while remaining insurable. Nearly all waterfront projects require this expertise.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-yellow-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Lightning Capital Considerations</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  St. Petersburg is in the region with the highest lightning strike density in the United States. This requires careful construction scheduling, particularly for crane operations and elevated work. We build comprehensive lightning safety protocols into every project schedule, monitor detection systems, and adjust daily work plans to minimize weather delays while ensuring crew safety.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Wind className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Coastal Storm Resilience</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  The peninsula is exposed to storms from both Tampa Bay and the Gulf of Mexico, requiring construction that can withstand wind and rain from multiple directions. Salt air corrosion is accelerated in St. Pete, requiring marine-grade materials for exterior components. Our specifications account for the aggressive coastal environment to ensure building longevity.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Pinellas County Permitting</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  We maintain strong relationships with the City of St. Petersburg Development Services and understand Pinellas County's density restrictions and Coastal High Hazard Area regulations. St. Pete's downtown has specific design standards that we navigate routinely. Our familiarity with local processes helps minimize permit delays and keeps projects on schedule.
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
            Our St. Petersburg Multi-Family Construction Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Pre-Construction & Planning",
                  description: "We begin with thorough site evaluation, constructability review, and detailed budgeting. For St. Petersburg projects, this includes flood zone determination (critical on the peninsula), soil analysis (sandy soil with limestone substrate, water table typically 2-5 feet), utility coordination, and permit pathway planning through City of St. Petersburg Development Services."
                },
                {
                  step: "2",
                  title: "Design Coordination",
                  description: "Whether working with your design team or providing design-build services, we ensure plans meet Florida Building Code, Pinellas County requirements, city design standards for downtown projects, and historic district guidelines where applicable (Old Northeast, Historic Kenwood). We optimize constructability while controlling costs."
                },
                {
                  step: "3",
                  title: "Permitting & Approvals",
                  description: "We manage all building permit applications through City of St. Petersburg Development Services, coordinate plan reviews with multiple departments (building, fire, stormwater), and handle Coastal High Hazard Area requirements. Our established relationships help expedite this critical phase—St. Pete permits typically process in 4-6 weeks for commercial projects."
                },
                {
                  step: "4",
                  title: "Construction Execution",
                  description: "Experienced project managers oversee daily construction with strict quality control, safety protocols, and schedule management. We adjust for St. Pete's weather patterns—afternoon thunderstorms, lightning activity (highest density in US), and 44 inches of annual rainfall—with strategic scheduling to minimize delays while maintaining safety."
                },
                {
                  step: "5",
                  title: "Closeout & Turnover",
                  description: "We complete all inspections, obtain certificate of occupancy, and provide comprehensive turnover documentation including warranties, as-builts, and operations manuals. For multi-family, we coordinate with property management for smooth transition to occupancy and resident move-in."
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
            Why St. Petersburg Developers Choose FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Always Prime Contractor</h3>
              <p className="text-gray-600">
                We never work as a subcontractor on St. Petersburg multi-family projects. You get direct accountability, single-point contact, and our full commitment to your project's success from groundbreaking to occupancy.
              </p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Proven Pinellas Track Record</h3>
              <p className="text-gray-600">
                With $50M+ in completed projects throughout Tampa Bay including St. Petersburg, we bring demonstrated experience with the peninsula's unique challenges—flood zones, coastal construction, and local permitting requirements.
              </p>
            </div>
            <div className="card text-center p-6">
              <Users className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Local Relationships</h3>
              <p className="text-gray-600">
                Strong relationships with City of St. Petersburg Development Services, inspectors, subcontractors, and suppliers help ensure smooth permitting and efficient construction execution. Our team knows the peninsula.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema items={stPeteFaqs} title="Multi-Family Construction in St. Petersburg - Frequently Asked Questions" />

      {/* Internal Links Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Services & Locations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Related Services in St. Petersburg</h3>
              <ul className="space-y-2">
                <li><Link href="/commercial-construction-st-petersburg/" className="text-brand-green hover:underline">Commercial Construction St. Petersburg</Link></li>
                <li><Link href="/disaster-recovery-st-petersburg/" className="text-brand-green hover:underline">Disaster Recovery St. Petersburg</Link></li>
                <li><Link href="/balcony-reconstruction-st-petersburg/" className="text-brand-green hover:underline">Balcony Reconstruction St. Petersburg</Link></li>
                <li><Link href="/historic-restoration-st-petersburg/" className="text-brand-green hover:underline">Historic Restoration St. Petersburg</Link></li>
                <li><Link href="/exterior-waterproofing-st-petersburg/" className="text-brand-green hover:underline">Exterior Waterproofing St. Petersburg</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Multi-Family Construction Nearby</h3>
              <ul className="space-y-2">
                <li><Link href="/multi-family-construction-tampa/" className="text-brand-green hover:underline">Multi-Family Construction Tampa</Link></li>
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
            Start Your St. Petersburg Multi-Family Construction Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. We deliver multi-family construction excellence in St. Petersburg with projects starting at $1,000,000.
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
