import Link from "next/link";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Clock, Users, Thermometer, Wind, Droplets, FileCheck, HardHat, Umbrella, Waves } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multi-Family Construction Clearwater FL | Condos, Apartments & Townhomes | FCS",
  description: "Premier multi-family construction contractor in Clearwater, Florida. Beach and mainland condominiums, apartments, townhomes, senior living. $1M-$25M+ projects. 20+ years experience, 40+ years experience. Prime contractor on all projects. Call (813) 420-7561.",
  keywords: "multi-family construction clearwater, apartment construction clearwater, condo builder clearwater fl, townhome construction clearwater, senior living construction clearwater, clearwater beach development",
};

const projectTypes = [
  {
    title: "Beach Condominium Construction",
    description: "Ground-up condo development on Clearwater Beach, Sand Key, and Island Estates with specialized barrier island construction expertise and FEMA compliance."
  },
  {
    title: "Mainland Apartment Complexes",
    description: "Garden-style to mid-rise apartment communities throughout mainland Clearwater, Countryside, and East Clearwater serving workforce and market-rate renters."
  },
  {
    title: "Townhome Developments",
    description: "Urban infill and suburban townhome communities addressing Clearwater's demand for attainable ownership housing away from high-priced beach areas."
  },
  {
    title: "Senior Living Facilities",
    description: "Independent living, assisted living, and memory care facilities serving Pinellas County's significant retirement population near Morton Plant Hospital."
  },
  {
    title: "Tourism-Adjacent Housing",
    description: "Workforce housing developments serving Clearwater Beach's hospitality industry employees who need affordable options near their workplaces."
  },
  {
    title: "Mixed-Use Residential",
    description: "Residential components of mixed-use developments in the Cleveland Street District and downtown Clearwater revitalization corridor."
  }
];

// Clearwater-specific multi-family FAQs
const clearwaterFaqs = [
  {
    question: "What types of multi-family projects does FCS build in Clearwater?",
    answer: "Florida Construction Specialists builds all types of multi-family residential in Clearwater: beach condominiums on Clearwater Beach and Sand Key, mainland apartments throughout Countryside and East Clearwater, townhome developments, senior living facilities near Morton Plant Hospital, workforce housing serving the tourism industry, and mixed-use residential in the Cleveland Street District. Our Clearwater projects range from $1 million to $25 million+ and include both ground-up construction and major renovations."
  },
  {
    question: "What are the unique challenges of building on Clearwater Beach versus mainland?",
    answer: "Clearwater Beach and barrier island construction presents distinct challenges: VE flood zone requirements with elevated construction, specialized foundations for sandy barrier island soil, beach overlay district regulations, salt air corrosion requiring marine-grade materials, and construction logistics during peak tourist season (December-April). Mainland Clearwater construction is generally more straightforward with standard AE or Zone X flood designations and easier site access. We have extensive experience navigating both environments."
  },
  {
    question: "How does tourism season affect multi-family construction in Clearwater?",
    answer: "Clearwater Beach's peak tourism season (December through April) significantly impacts construction logistics. Traffic congestion makes material delivery challenging, noise ordinances may be stricter, and some projects require phased scheduling to minimize tourist disruption. We typically plan major deliveries and heavy construction activities outside peak hours and coordinate with the City of Clearwater on construction schedules. For beach projects, we often recommend accelerating site work during off-season months."
  },
  {
    question: "What permits are required for multi-family construction in Clearwater?",
    answer: "Clearwater multi-family construction requires permits from the City of Clearwater Planning & Development Department. Beach area projects have additional overlay requirements and may require Coastal Construction Control Line permits. Waterfront setbacks, flood zone compliance, and FEMA elevation certificates are required for coastal properties. Tourism-related developments may qualify for city incentives. Permit timelines typically run 3-6 weeks for commercial projects, though beach area projects may take longer due to additional reviews."
  },
  {
    question: "What are current multi-family construction costs in Clearwater?",
    answer: "Clearwater multi-family construction costs vary significantly between beach and mainland locations. Beach condominiums run $280-420 per square foot due to elevated construction, marine-grade materials, and specialized foundations. Mainland apartments run $155-235/SF; townhomes $155-230/SF; senior living facilities $225-330/SF. Beach construction premium reflects flood zone requirements, salt air corrosion mitigation, and barrier island logistics. We provide detailed budgeting during pre-construction."
  },
  {
    question: "How long does multi-family construction take in Clearwater?",
    answer: "Clearwater multi-family construction timelines depend on location and project type. Beach condominiums typically require 20-30 months due to specialized construction requirements. Mainland projects follow more standard timelines: garden-style apartments 14-20 months, mid-rise apartments 18-24 months, townhomes 12-18 months. We account for tourist season logistics, hurricane season scheduling, and permit processing through the City of Clearwater."
  },
  {
    question: "What makes Clearwater's multi-family market unique?",
    answer: "Clearwater's multi-family market is shaped by three factors: Clearwater Beach tourism driving hospitality workforce housing demand, the Cleveland Street downtown revitalization creating urban living opportunities, and Pinellas County's density restrictions limiting new development. Limited land availability in this built-out peninsula market means redevelopment and infill projects are increasingly common. Senior living demand remains strong given Florida's retirement demographics. We help developers identify opportunities in this competitive market."
  },
  {
    question: "What makes FCS different from other Clearwater multi-family contractors?",
    answer: "FCS is always the prime general contractor on Clearwater multi-family projects—we never work as a subcontractor. This means direct accountability to you, not to another GC. We bring 20+ years of experience, 40+ years experience and in-house engineering, and specific expertise in Clearwater's unique construction environment—from barrier island building on Clearwater Beach to Cleveland Street infill projects. Our project managers understand Pinellas County regulations and maintain strong relationships with City of Clearwater permitting."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Multi-Family Construction", href: "/multi-family-construction/" },
  { name: "Clearwater", href: "/multi-family-construction-clearwater/" },
];

export default function MultiFamilyConstructionClearwaterPage() {
  return (
    <>
      <LocalBusinessSchema city="Clearwater" service="Multi-Family Construction" />
      <ServiceSchema
        serviceName="Multi-Family Construction"
        serviceDescription="Premier multi-family construction contractor serving Clearwater, Florida. Beach and mainland condominiums, apartments, townhomes, senior living. Projects from $1M to $25M+. Always the prime contractor."
        city="Clearwater"
        minPrice="1000000"
      />

      <ArticleSchema
        headline="Multi-Family Construction Clearwater FL | Condos, Apartments & Townhomes | FCS"
        description="Premier multi-family construction contractor in Clearwater, Florida. Beach and mainland condominiums, apartments, townhomes, senior living. $1M-$25M+ projects. 20+ years experience, 40+ years experience."
        datePublished="2024-06-01"
        dateModified="2025-01-18"
        slug="/multi-family-construction-clearwater/"
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
              <span className="text-brand-gold font-semibold">Serving Clearwater, Pinellas County</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Multi-Family Construction in Clearwater, FL
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists delivers multi-family construction excellence throughout Clearwater and Pinellas County. From beachfront condominiums on Clearwater Beach to mainland apartment communities, we bring 20+ years of experience to projects ranging from $1 million to $25 million.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              As Clearwater's premier prime contractor for multi-family residential, we handle condominiums, apartments, townhomes, senior living, and workforce housing—never as a subcontractor, always with full project accountability.
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
                Multi-Family Construction Services in Clearwater
              </h2>
              <p className="text-gray-600 mb-6">
                Clearwater is a city of contrasts—world-famous Clearwater Beach draws millions of tourists annually while the mainland supports a population of 117,000+ residents across diverse neighborhoods from Downtown to Countryside. This unique market creates multi-family construction opportunities ranging from luxury beach condominiums to workforce housing serving the hospitality industry.
              </p>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists serves Clearwater's diverse multi-family construction needs with the expertise, bonding capacity, and local knowledge required for projects from $1 million to $25 million or more. Whether you're developing a beachfront condominium tower on Sand Key, a garden-style apartment community in East Clearwater, or senior living near Morton Plant Hospital, we deliver on time and on budget.
              </p>
              <p className="text-gray-600 mb-8">
                As a prime general contractor—never a subcontractor—we maintain full control and accountability on every Clearwater multi-family project. Our relationships with the City of Clearwater Planning & Development, local subcontractors, and suppliers ensure smooth execution from groundbreaking to first occupancy.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-6">
                Multi-Family Project Types We Build in Clearwater
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
                Discuss Your Clearwater Multi-Family Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <RelatedServices city="Clearwater" currentService="multi-family-construction" />
              <NearbyLocations currentCity="Clearwater" service="multi-family-construction" serviceName="Multi-Family Construction" />

              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark rounded-lg p-6 text-white">
                <h3 className="font-bold text-xl mb-4">Start Your Clearwater Project</h3>
                <p className="text-gray-200 mb-4 text-sm">
                  Contact us for a project consultation. Multi-family construction in Clearwater starting at $1,000,000.
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

      {/* Clearwater Multi-Family Market Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Clearwater's Multi-Family Construction Landscape
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Waves className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Clearwater Beach Tourism Impact</h3>
              <p className="text-gray-600 text-sm">
                Clearwater Beach consistently ranks among America's top beaches, driving demand for both luxury condominiums and workforce housing. Beach area development commands premium pricing while creating need for affordable housing options for hospitality workers on the mainland. Tourism generates year-round construction activity despite seasonal access challenges.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Cleveland Street Revitalization</h3>
              <p className="text-gray-600 text-sm">
                Downtown Clearwater's Cleveland Street District is experiencing significant revitalization with mixed-use developments, urban apartments, and pedestrian-friendly design. The area offers opportunities for mid-rise residential with ground-floor retail, capitalizing on improved walkability and proximity to Coachman Park and the waterfront.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Mainland vs. Beach Development</h3>
              <p className="text-gray-600 text-sm">
                Clearwater's multi-family market bifurcates between premium beach development and value-oriented mainland construction. Beach area projects target second-home buyers and investors, while mainland developments in Countryside and East Clearwater serve local workforce and families. Each market has distinct construction requirements and cost structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Timeline Comparison Table */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Clearwater Multi-Family Construction: Costs & Timelines
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
                    <td className="p-4 font-medium">Beach Condominiums</td>
                    <td className="p-4">$280 - $420</td>
                    <td className="p-4">20-30 months</td>
                    <td className="p-4">6-10 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Mainland Apartments</td>
                    <td className="p-4">$155 - $235</td>
                    <td className="p-4">14-20 months</td>
                    <td className="p-4">3-6 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Mid-Rise Apartments</td>
                    <td className="p-4">$185 - $290</td>
                    <td className="p-4">18-24 months</td>
                    <td className="p-4">4-8 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Townhome Communities</td>
                    <td className="p-4">$155 - $230</td>
                    <td className="p-4">12-18 months</td>
                    <td className="p-4">3-5 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Senior Living Facilities</td>
                    <td className="p-4">$225 - $330</td>
                    <td className="p-4">16-24 months</td>
                    <td className="p-4">4-8 weeks</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium">Workforce Housing</td>
                    <td className="p-4">$140 - $200</td>
                    <td className="p-4">12-18 months</td>
                    <td className="p-4">3-5 weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Costs reflect hard construction only. Land, soft costs, financing, and developer fees are additional.
              Beach construction premium reflects VE flood zone requirements, marine-grade materials, and barrier island logistics.
              Estimates based on 2024-2025 Clearwater market conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Local Expertise Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Building for Clearwater's Unique Conditions
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Waves className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Barrier Island Challenges</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Clearwater Beach and Sand Key construction requires specialized expertise. VE flood zones mandate elevated structures, sandy barrier island soil requires specialized foundation systems, and salt air corrosion demands marine-grade materials throughout. We understand the unique engineering and construction requirements that make barrier island building distinct from mainland construction.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Beach Overlay Requirements</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Clearwater Beach development operates under additional overlay district requirements beyond standard building codes. These include specific setbacks, height limitations, design standards, and FEMA Coastal Construction Control Line compliance. Tourism-related development incentives may apply to qualifying projects. We navigate these requirements on every beach-area multi-family project.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Umbrella className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Tourism Season Logistics</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Clearwater Beach's peak tourist season from December through April creates construction logistics challenges—traffic congestion, delivery timing restrictions, and noise considerations. We strategically schedule heavy construction activities, material deliveries, and disruptive work to minimize tourist impact while maintaining project timelines.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                    <Wind className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Hurricane-Resistant Construction</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Clearwater's direct Gulf exposure increases hurricane risk. All our multi-family construction meets Florida Building Code requirements with impact-resistant windows and doors, enhanced roof tie-downs, and wind-resistant structural systems designed for Pinellas County's coastal wind zone. Beach properties face additional requirements for storm surge protection.
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
            Our Clearwater Multi-Family Construction Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Pre-Construction & Planning",
                  description: "We begin with thorough site evaluation, constructability review, and detailed budgeting. For Clearwater multi-family projects, this includes soil analysis, flood zone determination (VE, AE, or X), utility coordination, and permit pathway planning through City of Clearwater Planning & Development. Beach projects require additional FEMA compliance review."
                },
                {
                  step: "2",
                  title: "Design Coordination",
                  description: "Whether working with your design team or providing design-build services, we ensure plans meet Clearwater's building codes, wind requirements, flood zone regulations, and beach overlay requirements where applicable. We optimize constructability and control costs while meeting all regulatory requirements."
                },
                {
                  step: "3",
                  title: "Permitting & Approvals",
                  description: "We manage all building permit applications through City of Clearwater, coordinating plan reviews with building, fire, and utility departments. Beach area projects may require Coastal Construction Control Line permits. Our relationships with Clearwater permitting help expedite this phase—typically 3-6 weeks for mainland projects, longer for beach developments."
                },
                {
                  step: "4",
                  title: "Construction Execution",
                  description: "Experienced project managers oversee daily construction with strict quality control, safety protocols, and schedule management. For beach projects, we coordinate around tourist season logistics. We adjust for Florida's rainy season and hurricane season (June-November) with strategic scheduling of weather-sensitive work."
                },
                {
                  step: "5",
                  title: "Closeout & Turnover",
                  description: "We complete all inspections, obtain certificate of occupancy from City of Clearwater, and provide comprehensive turnover documentation including warranties, as-builts, and operations manuals. For multi-family, we coordinate with property management for smooth transition to occupancy and resident move-ins."
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
            Why Clearwater Developers Choose FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Always Prime Contractor</h3>
              <p className="text-gray-600">
                We never work as a subcontractor on Clearwater multi-family projects. You get direct accountability, single-point contact, and our full commitment to your project's success from groundbreaking to occupancy.
              </p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Beach & Mainland Expertise</h3>
              <p className="text-gray-600">
                With extensive experience in both Clearwater Beach barrier island construction and mainland development, we understand the distinct requirements, costs, and logistics of each market segment.
              </p>
            </div>
            <div className="card text-center p-6">
              <Users className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Local Relationships</h3>
              <p className="text-gray-600">
                Strong relationships with City of Clearwater Planning & Development, inspectors, subcontractors, and suppliers help ensure smooth permitting and efficient construction execution throughout Pinellas County.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema items={clearwaterFaqs} title="Multi-Family Construction in Clearwater - Frequently Asked Questions" />

      {/* Internal Links Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Services & Locations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Related Services in Clearwater</h3>
              <ul className="space-y-2">
                <li><Link href="/commercial-construction-clearwater/" className="text-brand-green hover:underline">Commercial Construction Clearwater</Link></li>
                <li><Link href="/balcony-reconstruction-clearwater/" className="text-brand-green hover:underline">Balcony Reconstruction Clearwater</Link></li>
                <li><Link href="/historic-restoration-clearwater/" className="text-brand-green hover:underline">Historic Restoration Clearwater</Link></li>
                <li><Link href="/condo-common-area-reconstruction/" className="text-brand-green hover:underline">Condo Common Area Reconstruction</Link></li>
                <li><Link href="/florida-sb4d-compliance-guide/" className="text-brand-green hover:underline">Florida SB 4-D Compliance Guide</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Multi-Family Construction Nearby</h3>
              <ul className="space-y-2">
                <li><Link href="/multi-family-construction-tampa/" className="text-brand-green hover:underline">Multi-Family Construction Tampa</Link></li>
                <li><Link href="/multi-family-construction-st-petersburg/" className="text-brand-green hover:underline">Multi-Family Construction St. Petersburg</Link></li>
                <li><Link href="/multi-family-construction-lakeland/" className="text-brand-green hover:underline">Multi-Family Construction Lakeland</Link></li>
                <li><Link href="/multi-family-construction-sarasota/" className="text-brand-green hover:underline">Multi-Family Construction Sarasota</Link></li>
                <li><Link href="/multi-family-construction-bradenton/" className="text-brand-green hover:underline">Multi-Family Construction Bradenton</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Learn More</h3>
              <ul className="space-y-2">
                <li><Link href="/multi-family-construction/" className="text-brand-green hover:underline">Multi-Family Construction Services</Link></li>
                <li><Link href="/commercial/condo-remediation/" className="text-brand-green hover:underline">Condo Remediation Services</Link></li>
                <li><Link href="/sirs-structural-integrity-reserve-studies/" className="text-brand-green hover:underline">SIRS Reserve Studies</Link></li>
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
            Start Your Clearwater Multi-Family Construction Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. We deliver multi-family construction excellence in Clearwater with projects starting at $1,000,000.
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
