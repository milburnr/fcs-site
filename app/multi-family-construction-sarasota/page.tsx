import Link from "next/link";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Clock, Users, Thermometer, Wind, Droplets, FileCheck, HardHat, Palette, Home } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multi-Family Construction Sarasota FL | Luxury Condos, Apartments & Townhomes | FCS",
  description: "Premier multi-family construction contractor in Sarasota, Florida. Luxury condominiums, waterfront apartments, townhomes, senior living. $1M-$25M+ projects. 20+ years experience, 40+ years experience. Architectural excellence for discerning buyers. Call (813) 420-7561.",
  keywords: "multi-family construction sarasota, luxury condo builder sarasota fl, apartment construction sarasota, townhome construction sarasota, senior living construction sarasota, longboat key construction",
};

const projectTypes = [
  {
    title: "Luxury Condominium Construction",
    description: "High-end condo development from mid-rise to high-rise towers in Downtown Sarasota, Longboat Key, and St. Armands Circle—designed for the affluent, design-conscious Sarasota buyer."
  },
  {
    title: "Waterfront Apartments",
    description: "Premium apartment communities along Sarasota Bay and the barrier islands, featuring resort-style amenities and architectural distinction expected in this market."
  },
  {
    title: "Boutique Townhome Communities",
    description: "Architecturally distinctive townhome developments in Southside Village, Laurel Park, and downtown-adjacent neighborhoods appealing to empty-nesters and second-home buyers."
  },
  {
    title: "Senior Living Facilities",
    description: "Independent living, assisted living, and memory care facilities serving Sarasota's substantial retirement community with premium finishes and comprehensive amenities."
  },
  {
    title: "Arts District Mixed-Use",
    description: "Live-work-play developments near Burns Court, Main Street, and the cultural corridor that complement Sarasota's renowned arts and cultural scene."
  },
  {
    title: "Barrier Island Residences",
    description: "Specialized construction on Longboat Key, Lido Key, and Bird Key requiring coastal expertise, architectural review compliance, and premium hurricane-resistant design."
  }
];

// Sarasota-specific multi-family FAQs
const sarasotaFaqs = [
  {
    question: "What types of multi-family projects does FCS build in Sarasota?",
    answer: "Florida Construction Specialists builds all types of multi-family residential in Sarasota: luxury condominiums (mid-rise and high-rise), waterfront apartments, boutique townhome communities, senior living facilities, and mixed-use residential developments. Our Sarasota multi-family projects range from $1 million to $25 million+ and include ground-up construction and major renovations. We've completed projects in Downtown Sarasota, Longboat Key, Lido Key, St. Armands, and throughout Sarasota County. We specialize in the architecturally distinctive, high-quality construction that Sarasota's discerning market demands."
  },
  {
    question: "How does Sarasota's luxury market affect multi-family construction requirements?",
    answer: "Sarasota's affluent, design-conscious market demands exceptional quality in multi-family construction. Buyers expect premium finishes, architectural distinction, and comprehensive amenities that rival resort properties. This means upgraded materials throughout—impact glass, high-end flooring, designer fixtures, smart home technology, and custom millwork. We work closely with architects experienced in Sarasota's aesthetic preferences to deliver properties that meet the expectations of buyers relocating from high-cost markets like the Northeast and Midwest."
  },
  {
    question: "What are the architectural review requirements for Sarasota multi-family projects?",
    answer: "Sarasota has strong architectural review processes, particularly for visible projects in downtown, the keys, and historic districts. The City of Sarasota Development Review Committee evaluates design quality, compatibility with surroundings, and compliance with design standards. Projects in historic districts (Downtown, Laurel Park, Burns Court, Indian Beach/Sapphire Shores) require Historic Preservation Board review. Barrier island projects face additional scrutiny for scale and character. We navigate these requirements by engaging architectural review early in the design process."
  },
  {
    question: "How does barrier island construction differ from mainland multi-family projects?",
    answer: "Barrier island construction on Longboat Key, Lido Key, Bird Key, and St. Armands requires specialized expertise. These sites are in VE flood zones with strict elevation requirements, coastal setbacks, and FEMA compliance. Construction logistics are more complex due to limited access, bridge weight restrictions, and environmental sensitivity. Hurricane-resistant design is critical given direct Gulf exposure. Costs run 15-25% higher than comparable mainland projects due to these factors, but the premium waterfront locations command significantly higher sale prices."
  },
  {
    question: "What are current multi-family construction costs in Sarasota?",
    answer: "Sarasota multi-family construction costs reflect the premium market expectations. Garden-style apartments run $170-240 per square foot; mid-rise apartments $200-300/SF; high-rise condominiums $280-450/SF; boutique townhomes $180-260/SF; senior living facilities $240-350/SF. Barrier island and waterfront projects typically add 15-25% premium. These costs include hard construction but exclude land, soft costs, and financing. Sarasota's market is 10-15% higher than Tampa due to quality expectations and skilled labor demand. We provide detailed budgeting during pre-construction."
  },
  {
    question: "How long does multi-family construction take in Sarasota?",
    answer: "Sarasota multi-family construction timelines depend on project scale, location, and approval complexity. Townhome communities typically take 14-20 months; garden-style apartments 16-22 months; mid-rise buildings 20-26 months; high-rise construction 26-40 months. Barrier island projects may add 2-4 months due to permitting complexity and construction logistics. These timelines include site work, vertical construction, and amenity completion. We account for seasonal considerations and the City of Sarasota's thorough review processes."
  },
  {
    question: "Do you handle permitting for Sarasota multi-family projects?",
    answer: "While land use entitlements are typically handled by the developer's team before construction engagement, FCS manages all building permits and construction-phase approvals. We work with the City of Sarasota Building Department and Sarasota County for unincorporated areas, navigating plan review, fire marshal approval, and inspection processes. For barrier island projects, we coordinate with the appropriate jurisdictions (Longboat Key has its own building department). Our familiarity with local processes helps streamline permitting while ensuring thorough review."
  },
  {
    question: "What makes FCS different from other Sarasota multi-family contractors?",
    answer: "FCS is always the prime general contractor on Sarasota multi-family projects—we never work as a subcontractor. This means direct accountability to you, not to another GC. We understand Sarasota's unique requirements: the architecturally discerning market, coastal construction expertise for the keys, historic district navigation, and the quality expectations of buyers in this affluent community. Our project managers are accessible throughout your project and we maintain strong relationships with Sarasota's building officials, design professionals, and quality subcontractors."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Multi-Family Construction", href: "/multi-family-construction/" },
  { name: "Sarasota", href: "/multi-family-construction-sarasota/" },
];

export default function MultiFamilyConstructionSarasotaPage() {
  return (
    <>
      <LocalBusinessSchema city="Sarasota" service="Multi-Family Construction" />
      <ServiceSchema
        serviceName="Multi-Family Construction"
        serviceDescription="Premier multi-family construction contractor serving Sarasota, Florida. Luxury condominiums, waterfront apartments, boutique townhomes, senior living. Projects from $1M to $25M+. Always the prime contractor."
        city="Sarasota"
        minPrice="1000000"
      />

      <ArticleSchema
        headline="Multi-Family Construction Sarasota FL | Luxury Condos, Apartments & Townhomes | FCS"
        description="Premier multi-family construction contractor in Sarasota, Florida. Luxury condominiums, waterfront apartments, townhomes, senior living. $1M-$25M+ projects. 20+ years experience, 40+ years experience."
        datePublished="2024-06-01"
        dateModified="2025-01-18"
        slug="/multi-family-construction-sarasota/"
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
              <span className="text-brand-gold font-semibold">Serving Sarasota, Florida & Sarasota County</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Multi-Family Construction in Sarasota, FL
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists delivers multi-family construction excellence throughout Sarasota and Sarasota County. From Downtown Sarasota high-rise condominiums to luxury barrier island residences, we bring 20+ years of experience to projects ranging from $1 million to $25 million.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              Sarasota's discerning buyers expect architectural distinction and premium quality. As Sarasota's trusted prime contractor for multi-family residential, we deliver the craftsmanship and design excellence this luxury market demands—never as a subcontractor, always with full project accountability.
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
                Multi-Family Construction Services in Sarasota
              </h2>
              <p className="text-gray-600 mb-6">
                Sarasota represents one of Florida's most prestigious residential markets, with a population of 57,000+ in the city and 850,000 in the North Port-Sarasota-Bradenton metro area. Known for its world-class cultural institutions, pristine beaches, and affluent, design-conscious residents, Sarasota demands multi-family construction that meets the highest standards of architectural excellence and quality.
              </p>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists serves Sarasota's premium multi-family construction needs with the expertise, bonding capacity, and commitment to excellence required for projects from $1 million to $25 million or more. Whether you're developing a luxury condominium tower in Downtown Sarasota, a boutique townhome community near St. Armands Circle, or senior living facilities serving the region's retirement community, we deliver the quality this discerning market expects.
              </p>
              <p className="text-gray-600 mb-8">
                As a prime general contractor—never a subcontractor—we maintain full control and accountability on every Sarasota multi-family project. Our relationships with local building departments, architectural review boards, and quality subcontractors ensure smooth execution from groundbreaking to first occupancy.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-6">
                Multi-Family Project Types We Build in Sarasota
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
                Discuss Your Sarasota Multi-Family Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <RelatedServices city="Sarasota" currentService="multi-family-construction" />
              <NearbyLocations currentCity="Sarasota" service="multi-family-construction" serviceName="Multi-Family Construction" />

              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark rounded-lg p-6 text-white">
                <h3 className="font-bold text-xl mb-4">Start Your Sarasota Project</h3>
                <p className="text-gray-200 mb-4 text-sm">
                  Contact us for a project consultation. Multi-family construction in Sarasota starting at $1,000,000.
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

      {/* Sarasota Multi-Family Market Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Sarasota's Multi-Family Construction Landscape
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Downtown High-Rise Boom</h3>
              <p className="text-gray-600 text-sm">
                Downtown Sarasota is experiencing a high-rise construction surge, with luxury condominium towers rising along the waterfront and Main Street. These premium developments cater to affluent buyers seeking walkable urban living with proximity to arts venues, restaurants, and Sarasota Bay.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Luxury Market Focus</h3>
              <p className="text-gray-600 text-sm">
                Sarasota's multi-family market skews decidedly upscale. Buyers relocating from high-cost Northeast and Midwest markets expect premium finishes, designer amenities, and architectural distinction. Projects compete on quality and design, not just price.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Arts & Cultural Community</h3>
              <p className="text-gray-600 text-sm">
                Home to The Ringling Museum, Sarasota Opera, and world-class performing arts, Sarasota attracts culturally sophisticated residents. Multi-family developments near the cultural corridor command premium pricing and attract design-conscious buyers.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Barrier Island Development</h3>
              <p className="text-gray-600 text-sm">
                Longboat Key, Lido Key, Bird Key, and St. Armands Circle represent Sarasota's most exclusive addresses. Multi-family development on the keys requires specialized coastal construction expertise and commands the market's highest price points.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sarasota-Specific Construction Considerations */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Building for Sarasota's Unique Requirements
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Palette className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Affluent, Design-Conscious Market</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Sarasota buyers expect premium quality throughout—impact glass, high-end flooring, designer fixtures, smart home technology, and custom millwork. With median household income of $62,000 and many buyers from high-cost markets, the expectation is resort-level quality. We specify materials and finishes that meet these expectations while managing costs.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Architectural Review Requirements</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Sarasota has rigorous design review processes. The Development Review Committee evaluates visible projects for design quality and neighborhood compatibility. Historic districts (Downtown, Laurel Park, Burns Court, Indian Beach/Sapphire Shores) require Historic Preservation Board approval. We engage these processes early to avoid costly redesigns.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                    <Wind className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Coastal Construction Expertise</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Sarasota's barrier islands—Longboat Key, Lido Key, Bird Key—require specialized construction methods. These VE flood zones demand elevated structures, coastal setbacks, and FEMA compliance. Direct Gulf exposure means enhanced hurricane resistance. Salt air accelerates corrosion, requiring marine-grade materials. We have deep experience with these challenging but prestigious sites.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Flood Zone Navigation</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Barrier islands are in VE zones with strict requirements. Downtown has some AE zones. The keys require specialized coastal construction and often helical piles or deep foundations. Shell substrate and high water tables affect foundation design. Our pre-construction analysis identifies all flood zone requirements and mitigation strategies.
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
            Sarasota Multi-Family Construction: Costs & Timelines
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
                    <td className="p-4">$170 - $240</td>
                    <td className="p-4">16-22 months</td>
                    <td className="p-4">4-8 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 font-medium">Mid-Rise Apartments</td>
                    <td className="p-4">$200 - $300</td>
                    <td className="p-4">20-26 months</td>
                    <td className="p-4">6-10 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">High-Rise Condominiums</td>
                    <td className="p-4">$280 - $450</td>
                    <td className="p-4">26-40 months</td>
                    <td className="p-4">8-14 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 font-medium">Boutique Townhomes</td>
                    <td className="p-4">$180 - $260</td>
                    <td className="p-4">14-20 months</td>
                    <td className="p-4">4-6 weeks</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Senior Living Facilities</td>
                    <td className="p-4">$240 - $350</td>
                    <td className="p-4">18-26 months</td>
                    <td className="p-4">6-10 weeks</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 font-medium">Barrier Island Projects*</td>
                    <td className="p-4">+15-25% premium</td>
                    <td className="p-4">+2-4 months</td>
                    <td className="p-4">8-14 weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Barrier island premiums apply to Longboat Key, Lido Key, Bird Key, and St. Armands projects due to coastal construction requirements and logistics.
              Costs reflect hard construction only. Land, soft costs, financing, and developer fees are additional.
              Estimates based on 2024-2025 Sarasota market conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Our Sarasota Multi-Family Construction Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Pre-Construction & Planning",
                  description: "We begin with thorough site evaluation, constructability review, and detailed budgeting. For Sarasota multi-family projects, this includes geotechnical analysis (sandy coastal soils, shell substrate), flood zone determination, utility coordination, and permit pathway planning through the City of Sarasota Building Department. For barrier island sites, we assess construction logistics and access constraints."
                },
                {
                  step: "2",
                  title: "Design Coordination & Review",
                  description: "Whether working with your design team or providing design-build services, we ensure plans meet Sarasota's building codes, architectural review requirements, and the quality expectations of this premium market. For visible projects, we coordinate early engagement with the Development Review Committee and Historic Preservation Board as applicable."
                },
                {
                  step: "3",
                  title: "Permitting & Approvals",
                  description: "We manage all building permit applications through the City of Sarasota or Sarasota County (for unincorporated areas), coordinate plan reviews with multiple departments, and handle fire marshal approval. For barrier island projects, we work with the appropriate jurisdiction—Longboat Key has its own building department with additional requirements. Our relationships help streamline this process."
                },
                {
                  step: "4",
                  title: "Construction Execution",
                  description: "Experienced project managers oversee daily construction with strict quality control matching Sarasota's premium expectations, safety protocols, and schedule management. We coordinate skilled trades experienced in luxury finishes. For barrier island projects, we manage the logistics of limited access and bridge restrictions while minimizing disruption to neighboring properties."
                },
                {
                  step: "5",
                  title: "Closeout & Turnover",
                  description: "We complete all inspections, obtain certificate of occupancy, and provide comprehensive turnover documentation including warranties, as-builts, and operations manuals. For Sarasota's luxury market, we ensure finishes meet the quality standards expected and coordinate with property management for smooth transition to occupancy or sales."
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
            Why Sarasota Developers Choose FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Always Prime Contractor</h3>
              <p className="text-gray-600">
                We never work as a subcontractor on Sarasota multi-family projects. You get direct accountability, single-point contact, and our full commitment to your project's success from groundbreaking to occupancy.
              </p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Luxury Market Experience</h3>
              <p className="text-gray-600">
                We understand Sarasota's discerning market. With $25M+ in completed projects, we deliver the architectural distinction, premium finishes, and quality craftsmanship that buyers from high-cost markets expect.
              </p>
            </div>
            <div className="card text-center p-6">
              <Users className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Local Relationships</h3>
              <p className="text-gray-600">
                Strong relationships with Sarasota building officials, architectural review boards, and quality subcontractors help ensure smooth approvals and premium execution. Our team knows this market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema items={sarasotaFaqs} title="Multi-Family Construction in Sarasota - Frequently Asked Questions" />

      {/* Internal Links Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Services & Locations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Related Services in Sarasota</h3>
              <ul className="space-y-2">
                <li><Link href="/commercial-construction-sarasota/" className="text-brand-green hover:underline">Commercial Construction Sarasota</Link></li>
                <li><Link href="/historic-restoration-sarasota/" className="text-brand-green hover:underline">Historic Restoration Sarasota</Link></li>
                <li><Link href="/balcony-reconstruction-sarasota/" className="text-brand-green hover:underline">Balcony Reconstruction Sarasota</Link></li>
                <li><Link href="/insurance-restoration-sarasota/" className="text-brand-green hover:underline">Insurance Restoration Sarasota</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Multi-Family Construction Nearby</h3>
              <ul className="space-y-2">
                <li><Link href="/multi-family-construction-bradenton/" className="text-brand-green hover:underline">Multi-Family Construction Bradenton</Link></li>
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
            Start Your Sarasota Multi-Family Construction Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. We deliver multi-family construction excellence in Sarasota with projects starting at $1,000,000.
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
