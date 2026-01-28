import Link from "next/link";
import { Phone, MapPin, ArrowRight, Building2, Shield, Award, Clock, Users, Thermometer, Wind, Droplets, FileCheck, HardHat } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multi-Family Construction Bradenton FL | Condos, Apartments & Townhomes | FCS",
  description: "Premier multi-family construction contractor in Bradenton, Florida. Condominiums, apartments, townhomes, senior living. $1M-$50M+ projects. 20+ years experience, $10M+ bonding. 15-20% more affordable than Sarasota. Call (813) 420-7561.",
  keywords: "multi-family construction bradenton, apartment construction bradenton, condo builder bradenton fl, townhome construction bradenton, senior living construction bradenton, manatee county contractor",
};

const projectTypes = [
  {
    title: "Condominium Construction",
    description: "Ground-up condo development from mid-rise to waterfront towers in Downtown Bradenton, Riverwalk area, and Manatee River locations."
  },
  {
    title: "Apartment Complexes",
    description: "Garden-style to mid-rise apartment communities throughout Manatee County, including workforce housing serving IMG Academy and local employers."
  },
  {
    title: "Townhome Developments",
    description: "Urban infill and suburban townhome communities serving Bradenton's growing demand for affordable ownership alternatives to Sarasota."
  },
  {
    title: "Senior Living Facilities",
    description: "Independent living, assisted living, and memory care facilities serving Bradenton's expanding retirement community."
  },
  {
    title: "Mixed-Use Residential",
    description: "Residential components of mixed-use developments with ground-floor retail in Downtown Bradenton and Village of the Arts."
  },
  {
    title: "Hospitality-Adjacent Housing",
    description: "Multi-family developments serving the hospitality workforce supporting IMG Academy, Anna Maria Island tourism, and the growing sports tourism sector."
  }
];

// Bradenton-specific multi-family FAQs
const bradentonFaqs = [
  {
    question: "What types of multi-family projects does FCS build in Bradenton?",
    answer: "Florida Construction Specialists builds all types of multi-family residential in Bradenton and Manatee County: condominiums, garden-style and mid-rise apartments, townhome developments, senior living facilities, and mixed-use residential. Our Bradenton multi-family projects range from $1 million to $50 million+ and include both ground-up construction and major renovations. We've completed projects in Downtown Bradenton, along the Riverwalk corridor, in the Village of the Arts, and throughout Manatee County."
  },
  {
    question: "How does Bradenton's multi-family market compare to Sarasota?",
    answer: "Bradenton offers significant cost advantages over neighboring Sarasota, with land costs and construction expenses typically 15-20% lower. This makes Bradenton attractive for developers seeking better returns on workforce housing, affordable senior living, and attainable ownership products like townhomes. The Downtown Riverwalk revitalization is driving demand for urban-style living at price points below Sarasota, while IMG Academy's continued expansion creates steady demand for hospitality-adjacent housing."
  },
  {
    question: "What are the strongest multi-family segments in Bradenton right now?",
    answer: "Bradenton's multi-family market shows particular strength in: senior living facilities (serving the growing retirement community), workforce housing near Downtown and IMG Academy, townhome communities offering affordable alternatives to Sarasota, and mixed-use developments in the revitalizing Downtown Riverwalk area. The city's position as the gateway to Anna Maria Island also drives demand for seasonal and vacation rental-oriented developments."
  },
  {
    question: "How do Bradenton's building codes affect multi-family construction?",
    answer: "Bradenton multi-family construction requires compliance with Florida Building Code 2023 with Wind Zone requirements similar to other Gulf Coast communities. For buildings 3+ stories, Florida SB 4-D milestone inspection requirements apply. The City of Bradenton Building Division handles permits for city projects, while unincorporated Manatee County projects go through county permitting. Special requirements exist for Manatee River setbacks, Village of the Arts overlay standards, and flood zone compliance in waterfront areas."
  },
  {
    question: "What are multi-family construction costs in Bradenton?",
    answer: "Bradenton multi-family construction costs are typically 15-20% lower than Sarasota. Garden-style apartments run $130-190 per square foot; mid-rise apartments $155-240/SF; condominiums $200-340/SF; townhomes $125-185/SF; senior living facilities $190-280/SF. These costs include hard construction but exclude land, soft costs, and financing. We provide detailed budgeting during pre-construction to help you maximize returns in the Bradenton market."
  },
  {
    question: "How long does multi-family construction take in Bradenton?",
    answer: "Bradenton multi-family construction timelines are comparable to the greater Tampa Bay region. Townhome communities typically take 12-18 months; garden-style apartments 14-20 months; mid-rise buildings 16-22 months; senior living facilities 16-24 months. These timelines include site work, vertical construction, and common area completion. The City of Bradenton Building Division typically processes permits in 3-5 weeks, faster than many neighboring jurisdictions."
  },
  {
    question: "What makes FCS different from other Bradenton multi-family contractors?",
    answer: "FCS is always the prime general contractor on Bradenton multi-family projects—we never work as a subcontractor. This means direct accountability to you throughout your project. We bring 20+ years of experience, $10M+ bonding capacity, and deep knowledge of Manatee County requirements including Village of the Arts overlay standards, Manatee River setbacks, and coordination with the City of Bradenton Building Division. Our project managers are familiar with local subcontractors and suppliers."
  },
  {
    question: "How does the Downtown Bradenton Riverwalk area affect multi-family development?",
    answer: "The Downtown Bradenton Riverwalk revitalization has created significant multi-family development opportunities. The waterfront amenity, combined with arts and dining destinations, supports urban-style residential at price points well below Downtown Sarasota or St. Petersburg. We've seen growing interest in mid-rise residential, mixed-use developments with ground-floor retail, and senior living facilities that offer walkable access to Riverwalk amenities. The city encourages quality development in the downtown core."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Multi-Family Construction", href: "/multi-family-construction/" },
  { name: "Bradenton", href: "/multi-family-construction-bradenton/" },
];

export default function MultiFamilyConstructionBradentonPage() {
  return (
    <>
      <LocalBusinessSchema city="Bradenton" service="Multi-Family Construction" />
      <ServiceSchema
        serviceName="Multi-Family Construction"
        serviceDescription="Premier multi-family construction contractor serving Bradenton and Manatee County, Florida. Condominiums, apartments, townhomes, senior living. Projects from $1M to $50M+. Always the prime contractor."
        city="Bradenton"
        minPrice="1000000"
      />

      <ArticleSchema
        headline="Multi-Family Construction Bradenton FL | Condos, Apartments & Townhomes | FCS"
        description="Premier multi-family construction contractor in Bradenton, Florida. Condominiums, apartments, townhomes, senior living. $1M-$50M+ projects. 20+ years experience, $10M+ bonding. 15-20% more affordable than Sarasota."
        datePublished="2024-06-01"
        dateModified="2025-01-18"
        slug="/multi-family-construction-bradenton/"
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
              <span className="text-brand-gold font-semibold">Serving Bradenton & Manatee County, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Multi-Family Construction in Bradenton, FL
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists delivers multi-family construction excellence throughout Bradenton and Manatee County. From Downtown Riverwalk condominiums to senior living facilities serving the growing retirement community, we bring 20+ years of experience to projects ranging from $1 million to $50 million.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              Bradenton offers 15-20% cost advantages over neighboring Sarasota—making it ideal for workforce housing, attainable ownership, and value-driven developments. As your prime contractor, we deliver full project accountability from groundbreaking to occupancy.
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
                Multi-Family Construction Services in Bradenton
              </h2>
              <p className="text-gray-600 mb-6">
                Bradenton, the county seat of Manatee County, is experiencing significant growth as part of the 850,000-population North Port-Sarasota-Bradenton metro area. With a population of 60,000+ and strong employment anchors including IMG Academy, Manatee Memorial Hospital, Tropicana Products, and Bealls Inc. headquarters, Bradenton offers compelling opportunities for multi-family development.
              </p>
              <p className="text-gray-600 mb-6">
                The city's strategic position—more affordable than Sarasota to the south yet offering similar Gulf Coast lifestyle—drives demand for workforce housing, attainable ownership products, and senior living facilities. The Downtown Bradenton Riverwalk revitalization, Village of the Arts district, and proximity to Anna Maria Island create diverse market opportunities.
              </p>
              <p className="text-gray-600 mb-8">
                Florida Construction Specialists serves Bradenton's multi-family construction needs with the expertise, bonding capacity, and local knowledge required for projects from $1 million to $50 million or more. As a prime general contractor—never a subcontractor—we maintain full control and accountability on every Manatee County project.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-6">
                Multi-Family Project Types We Build in Bradenton
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
                Discuss Your Bradenton Multi-Family Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <RelatedServices city="Bradenton" currentService="multi-family-construction" />
              <NearbyLocations currentCity="Bradenton" service="multi-family-construction" serviceName="Multi-Family Construction" />

              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark rounded-lg p-6 text-white">
                <h3 className="font-bold text-xl mb-4">Start Your Bradenton Project</h3>
                <p className="text-gray-200 mb-4 text-sm">
                  Contact us for a project consultation. Multi-family construction in Bradenton starting at $1,000,000.
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

      {/* Bradenton Multi-Family Market Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Bradenton's Multi-Family Construction Landscape
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Downtown Riverwalk Revitalization</h3>
              <p className="text-gray-600 text-sm">
                The Bradenton Riverwalk transformation has created prime opportunities for urban-style multi-family. Waterfront condos, mixed-use residential, and senior living with walkable access to dining, arts, and recreation are in high demand—all at price points well below Sarasota or St. Petersburg.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">IMG Academy Hospitality Demand</h3>
              <p className="text-gray-600 text-sm">
                IMG Academy, the world-renowned sports training facility, brings thousands of athletes, families, and staff to Bradenton annually. This creates steady demand for workforce housing, extended-stay options, and hospitality-adjacent multi-family developments serving the academy's ecosystem.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Anna Maria Island Gateway</h3>
              <p className="text-gray-600 text-sm">
                As the primary mainland gateway to Anna Maria Island, Bradenton benefits from the island's tourism economy. Multi-family developments serve seasonal workers, vacation rental investors, and residents seeking proximity to beaches without island prices. The Cortez fishing village adds character and demand.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Village of the Arts</h3>
              <p className="text-gray-600 text-sm">
                Bradenton's Village of the Arts is a designated arts district with special overlay standards encouraging creative development. This neighborhood supports unique mixed-use and residential projects that blend artistic character with modern multi-family construction, attracting creative professionals and retirees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bradenton Construction Considerations */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Bradenton Multi-Family Construction Considerations
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Cost Advantage Over Sarasota</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Bradenton offers 15-20% lower construction costs compared to neighboring Sarasota. Land costs, labor rates, and material logistics all favor Bradenton development. This makes Manatee County ideal for workforce housing, attainable townhomes, and senior living facilities where cost efficiency directly impacts project feasibility.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Manatee River Areas</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Multi-family development along the Manatee River and Downtown Riverwalk requires attention to flood zone compliance and setback requirements. Many waterfront and river-adjacent sites fall within AE flood zones. We navigate these requirements to deliver compliant, insurable projects that capitalize on Bradenton's waterfront appeal.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Growing Retirement Community</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Bradenton's growing retirement population creates strong demand for senior living facilities—independent living, assisted living, and memory care. The combination of lower costs than Sarasota, excellent healthcare at Manatee Memorial Hospital, and lifestyle amenities makes Bradenton attractive for senior-focused multi-family development.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Permitting Efficiency</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  The City of Bradenton Building Division typically processes commercial permits in 3-5 weeks—faster than many neighboring jurisdictions. We maintain strong relationships with city staff and understand specific requirements including Village of the Arts overlay standards, Manatee River setbacks, and coordination with Manatee County for unincorporated projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Timeline Comparison Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Bradenton Multi-Family Construction: Costs & Timelines
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
                    <td className="p-4">$130 - $190</td>
                    <td className="p-4">14-20 months</td>
                    <td className="p-4">3-5 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 font-medium">Mid-Rise Apartments</td>
                    <td className="p-4">$155 - $240</td>
                    <td className="p-4">16-22 months</td>
                    <td className="p-4">4-6 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Condominiums</td>
                    <td className="p-4">$200 - $340</td>
                    <td className="p-4">18-28 months</td>
                    <td className="p-4">4-8 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 font-medium">Townhome Communities</td>
                    <td className="p-4">$125 - $185</td>
                    <td className="p-4">12-18 months</td>
                    <td className="p-4">3-5 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Senior Living Facilities</td>
                    <td className="p-4">$190 - $280</td>
                    <td className="p-4">16-24 months</td>
                    <td className="p-4">4-6 weeks</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 font-medium">Mixed-Use Residential</td>
                    <td className="p-4">$160 - $250</td>
                    <td className="p-4">14-22 months</td>
                    <td className="p-4">4-6 weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Costs reflect hard construction only. Land, soft costs, financing, and developer fees are additional.
              Bradenton costs are typically 15-20% lower than Sarasota. Estimates based on 2024-2025 Manatee County market conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Local Expertise Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Building for Bradenton's Unique Conditions
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
                  Bradenton's subtropical climate, similar to Sarasota with Gulf exposure, demands construction methods designed for intense UV exposure, summer heat, and humidity. With 50 inches of annual rainfall and potential Manatee River flooding during heavy rains, we specify appropriate building envelope materials, HVAC systems, and drainage solutions.
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
                  Bradenton's Gulf Coast location requires hurricane-resistant construction meeting Florida Building Code wind requirements. All our multi-family construction incorporates impact-resistant windows and doors, enhanced roof tie-downs, and wind-resistant structural systems designed to protect residents and property during storm events.
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
                  Manatee River areas and coastal properties in Bradenton fall within FEMA flood zones. Downtown has both Zone X and AE areas. Anna Maria Island has separate, stricter requirements. We navigate flood zone construction requirements including elevated structures, flood-resistant materials, and proper drainage to ensure compliance and insurability.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">City of Bradenton Permitting</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  We maintain strong relationships with the City of Bradenton Building Division and Manatee County Construction Services. Our familiarity with local permit processes, Village of the Arts overlay requirements, Manatee River setback regulations, and inspection protocols helps minimize delays and keep your project on schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Our Bradenton Multi-Family Construction Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Pre-Construction & Planning",
                  description: "We begin with thorough site evaluation, constructability review, and detailed budgeting. For Bradenton multi-family projects, this includes soil analysis (mix of sandy and clay soils), flood zone determination, Manatee River setback evaluation, utility coordination, and permit pathway planning through City of Bradenton Building Division or Manatee County."
                },
                {
                  step: "2",
                  title: "Design Coordination",
                  description: "Whether working with your design team or providing design-build services, we ensure plans meet Florida Building Code requirements, wind resistance standards, fire codes, and accessibility requirements while optimizing for Bradenton's cost advantages. We advise on Village of the Arts overlay compliance when applicable."
                },
                {
                  step: "3",
                  title: "Permitting & Approvals",
                  description: "We manage all building permit applications through the City of Bradenton Building Division or Manatee County, coordinate plan reviews with multiple departments (building, fire, utilities), and handle any required variances. Bradenton's 3-5 week permit timeline is among the fastest in the region."
                },
                {
                  step: "4",
                  title: "Construction Execution",
                  description: "Experienced project managers oversee daily construction with strict quality control, safety protocols, and schedule management. We account for Bradenton's rainy season and coordinate with local subcontractors who understand Manatee County requirements."
                },
                {
                  step: "5",
                  title: "Closeout & Turnover",
                  description: "We complete all inspections, obtain certificate of occupancy from City of Bradenton, and provide comprehensive turnover documentation including warranties, as-builts, and operations manuals. For multi-family, we coordinate with property management for smooth transition to occupancy."
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-white rounded-lg p-6">
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
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Bradenton Developers Choose FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Always Prime Contractor</h3>
              <p className="text-gray-600">
                We never work as a subcontractor on Bradenton multi-family projects. You get direct accountability, single-point contact, and our full commitment to your project's success from groundbreaking to occupancy.
              </p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Manatee County Expertise</h3>
              <p className="text-gray-600">
                We understand Bradenton's unique requirements—Village of the Arts overlay standards, Manatee River setbacks, City of Bradenton permitting, and the cost advantages that make Manatee County attractive for multi-family development.
              </p>
            </div>
            <div className="card text-center p-6">
              <Users className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Local Relationships</h3>
              <p className="text-gray-600">
                Strong relationships with Bradenton building departments, inspectors, subcontractors, and suppliers help ensure smooth permitting and efficient construction execution. Our team knows the local market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema items={bradentonFaqs} title="Multi-Family Construction in Bradenton - Frequently Asked Questions" />

      {/* Internal Links Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Services & Locations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Related Services in Bradenton</h3>
              <ul className="space-y-2">
                <li><Link href="/commercial-construction-bradenton/" className="text-brand-green hover:underline">Commercial Construction Bradenton</Link></li>
                <li><Link href="/historic-restoration-bradenton/" className="text-brand-green hover:underline">Historic Restoration Bradenton</Link></li>
                <li><Link href="/balcony-reconstruction-bradenton/" className="text-brand-green hover:underline">Balcony Reconstruction Bradenton</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Multi-Family Construction Nearby</h3>
              <ul className="space-y-2">
                <li><Link href="/multi-family-construction-sarasota/" className="text-brand-green hover:underline">Multi-Family Construction Sarasota</Link></li>
                <li><Link href="/multi-family-construction-tampa/" className="text-brand-green hover:underline">Multi-Family Construction Tampa</Link></li>
                <li><Link href="/multi-family-construction-st-petersburg/" className="text-brand-green hover:underline">Multi-Family Construction St. Petersburg</Link></li>
                <li><Link href="/multi-family-construction-lakeland/" className="text-brand-green hover:underline">Multi-Family Construction Lakeland</Link></li>
                <li><Link href="/multi-family-construction-clearwater/" className="text-brand-green hover:underline">Multi-Family Construction Clearwater</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Learn More</h3>
              <ul className="space-y-2">
                <li><Link href="/multi-family-construction/" className="text-brand-green hover:underline">Multi-Family Construction Services</Link></li>
                <li><Link href="/commercial/condo-remediation/" className="text-brand-green hover:underline">Condo Remediation Services</Link></li>
                <li><Link href="/sirs-structural-integrity-reserve-studies/" className="text-brand-green hover:underline">SIRS Structural Integrity Studies</Link></li>
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
            Start Your Bradenton Multi-Family Construction Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. We deliver multi-family construction excellence in Bradenton with projects starting at $1,000,000. Take advantage of Bradenton's 15-20% cost savings over Sarasota.
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
