import Link from "next/link";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Droplets, Layers, Wrench, Clock, Home, Factory, DollarSign, Users } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "Exterior Waterproofing Ruskin FL | FCS Headquarters",
  description: "Exterior waterproofing in Ruskin FL from FCS headquarters. Apollo Beach coastal waterproofing, Sun City Center building protection, Tampa Bay industrial waterproofing. 10-year warranty. Licensed, bonded, insured.",
  keywords: "exterior waterproofing Ruskin, Apollo Beach waterproofing, Sun City Center waterproofing, commercial waterproofing South Hillsborough, foundation waterproofing Ruskin",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Exterior Waterproofing", href: "/balcony-reconstruction-exterior-waterproofing/" },
  { name: "Ruskin", href: "/exterior-waterproofing-ruskin/" },
];

const serviceTypes = [
  {
    type: "Building Envelope",
    description: "Complete building envelope waterproofing including wall systems, window flashings, expansion joints, and penetration sealing for Ruskin's mixed coastal/inland climate",
    icon: Building2,
  },
  {
    type: "Foundation & Below-Grade",
    description: "Positive-side and negative-side foundation waterproofing designed for Ruskin's clay-rich agricultural soils and high water table conditions",
    icon: Layers,
  },
  {
    type: "Industrial & Logistics",
    description: "Waterproofing systems for distribution centers, warehouses, and industrial facilities along the Ruskin/I-75 logistics corridor",
    icon: Factory,
  },
  {
    type: "Senior Living Facilities",
    description: "Specialized waterproofing for Sun City Center retirement communities, assisted living facilities, and healthcare buildings",
    icon: Home,
  },
];

const ruskinFaqs = [
  {
    question: "Why is FCS the best choice for exterior waterproofing in Ruskin?",
    answer: "Florida Construction Specialists is headquartered in Ruskin, giving us unmatched local expertise and response time for South Hillsborough County projects. We understand Ruskin's unique mix of coastal Tampa Bay exposure along Apollo Beach, agricultural soil conditions inland, and the specific needs of Sun City Center's retirement communities. Our proximity means faster emergency response, easier site visits, and deep relationships with Hillsborough County permitting officials.",
  },
  {
    question: "What waterproofing challenges are specific to Ruskin's climate?",
    answer: "Ruskin presents diverse waterproofing challenges: Apollo Beach and Tampa Bay waterfront properties face storm surge, salt air, and coastal wind-driven rain; inland areas deal with clay-rich agricultural soils that hold moisture differently than coastal sand; industrial properties along the I-75 corridor need heavy-duty systems for distribution centers; and Sun City Center facilities require low-disruption installation methods for occupied senior living communities. FCS designs waterproofing systems specific to each Ruskin sub-market.",
  },
  {
    question: "How much does exterior waterproofing cost in Ruskin?",
    answer: "Exterior waterproofing costs in Ruskin vary by application: building envelope waterproofing runs $5-$15/SF, foundation waterproofing ranges from $8-$20/SF (lower than coastal due to better soil), industrial warehouse waterproofing costs $8-$18/SF, and senior living facility projects range from $50,000 to $500,000+ depending on scope. Ruskin's competitive labor market and FCS headquarters location often allows us to offer favorable pricing compared to Tampa proper.",
  },
  {
    question: "Do you provide waterproofing for Apollo Beach waterfront properties?",
    answer: "Yes, Apollo Beach waterfront waterproofing is a specialty for FCS. These properties face Tampa Bay exposure with storm surge risk, salt air corrosion, and wind-driven rain during tropical storms. We install marine-grade waterproofing systems including elastomeric coatings, traffic-bearing membranes for seawalls and docks, and crystalline foundation waterproofing. All Apollo Beach work meets Hillsborough County's Coastal High Hazard Area requirements.",
  },
  {
    question: "What waterproofing services do you offer for Sun City Center?",
    answer: "FCS provides comprehensive waterproofing for Sun City Center's retirement community properties: clubhouse and common area waterproofing, golf cart path waterproofing, pool deck waterproofing, healthcare facility envelope protection, and multi-family building waterproofing. We specialize in low-disruption installation methods that respect residents' schedules and minimize noise during sensitive hours.",
  },
  {
    question: "Can you waterproof industrial buildings in the Ruskin logistics corridor?",
    answer: "Absolutely. The Ruskin/I-75 logistics corridor—home to Amazon fulfillment centers and numerous distribution facilities—requires specialized industrial waterproofing. We provide warehouse floor waterproofing, loading dock systems, below-grade waterproofing for foundations on former agricultural land, and roof/wall systems for large-footprint buildings. Our industrial waterproofing is designed for 24/7 operations with minimal business disruption.",
  },
  {
    question: "How long does exterior waterproofing last in Ruskin?",
    answer: "Properly installed exterior waterproofing in Ruskin typically lasts 10-20+ years depending on location and exposure. Inland Ruskin properties often see longer waterproofing life due to reduced salt air exposure, while Apollo Beach coastal properties may require maintenance coatings every 7-10 years. FCS provides a 10-year workmanship warranty on all installations, with manufacturer material warranties extending to 15-20 years on premium systems.",
  },
  {
    question: "What warranty does FCS provide for Ruskin waterproofing projects?",
    answer: "FCS provides a 10-year workmanship warranty on all exterior waterproofing installations in Ruskin, backed by manufacturer material warranties of 10-20 years depending on the system. As a Ruskin-headquartered company, we're uniquely positioned to provide responsive warranty service—we're minutes away, not hours. Our warranty covers both materials and labor for any waterproofing failure, with documented inspections and testing records for every project.",
  },
];

const costData = [
  { application: "Building Envelope/Walls", range: "$5 - $15/SF", timeline: "2-6 weeks", warranty: "10 years" },
  { application: "Foundation Waterproofing", range: "$8 - $20/SF", timeline: "1-4 weeks", warranty: "10 years" },
  { application: "Industrial/Warehouse", range: "$8 - $18/SF", timeline: "4-10 weeks", warranty: "10 years" },
  { application: "Senior Living Facility", range: "$75,000 - $500,000+", timeline: "4-12 weeks", warranty: "10 years" },
  { application: "Waterfront/Coastal", range: "$12 - $28/SF", timeline: "3-8 weeks", warranty: "10 years" },
  { application: "Remedial/Repair Work", range: "$40,000+", timeline: "Varies", warranty: "5-10 years" },
];

const processSteps = [
  { step: 1, title: "Local Assessment", description: "On-site evaluation from our Ruskin headquarters, water testing, soil analysis, and identification of site-specific requirements" },
  { step: 2, title: "System Design", description: "Waterproofing system specification tailored to Ruskin conditions—coastal, industrial, or senior living applications" },
  { step: 3, title: "Surface Preparation", description: "Substrate cleaning, crack repair, concrete restoration, and surface profiling for proper membrane adhesion" },
  { step: 4, title: "Waterproofing Installation", description: "Application of primers, membranes, flashings, and drainage systems by FCS crews per manufacturer specifications" },
  { step: 5, title: "Quality Assurance", description: "Flood testing, adhesion testing, inspection documentation, and correction of any deficiencies" },
  { step: 6, title: "Protection & Warranty", description: "Installation of protection courses, drainage boards, or wear surfaces; warranty documentation and local maintenance support" },
];

export default function ExteriorWaterproofingRuskinPage() {
  return (
    <>
      <LocalBusinessSchema city="Ruskin" service="Exterior Waterproofing" />
      <ServiceSchema
        serviceName="Exterior Waterproofing"
        serviceDescription="Professional exterior waterproofing services from FCS headquarters in Ruskin. Building envelope, foundation, industrial, and senior living waterproofing for South Hillsborough County. 10-year warranty. Projects from $40,000 to $2 million."
        city="Ruskin"
        minPrice="40000"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Exterior Waterproofing Services in Ruskin, FL"
        description="Comprehensive guide to exterior waterproofing for Ruskin buildings from FCS headquarters. Apollo Beach coastal protection, Sun City Center facilities, industrial waterproofing, and costs for commercial properties."
        datePublished="2024-01-15"
        dateModified="2025-01-18"
        slug="/exterior-waterproofing-ruskin/"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/FCS-Exterior-Waterproofing/fcs-exterior-waterproofing-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">FCS Headquarters - Ruskin, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Exterior Waterproofing in Ruskin, FL
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              From our Ruskin headquarters, FCS delivers expert waterproofing for South Hillsborough County. Apollo Beach coastal protection, Sun City Center senior living facilities, industrial buildings, and commercial properties—all with local expertise and 10-year warranty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Request Waterproofing Assessment
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
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Ruskin Headquarters</span>
            </div>
            <div className="flex items-center gap-2">
              <Droplets className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">10-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">In-House Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Prime Contractor</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Ruskin's Hometown Waterproofing Experts
              </h2>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists is headquartered in Ruskin, making us uniquely positioned to serve South Hillsborough County's exterior waterproofing needs. Our local presence means faster response times, deeper understanding of Ruskin's diverse construction environments, and established relationships with county permitting officials that benefit every project.
              </p>

              <p className="text-gray-600 mb-6">
                From Apollo Beach waterfront condominiums facing Tampa Bay to Sun City Center's retirement communities, from the I-75 logistics corridor's distribution centers to downtown Ruskin commercial properties, FCS provides waterproofing solutions designed for each sub-market's specific challenges. Our crews live and work in this community—your property is our neighborhood.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-4 mt-8">
                Exterior Waterproofing Services
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {serviceTypes.map((service) => (
                  <div key={service.type} className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <service.icon className="w-8 h-8 text-brand-green flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-brand-green-dark mb-2">{service.type}</h4>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">
                Ruskin's Diverse Waterproofing Challenges
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Coastal Exposure:</strong> Apollo Beach and Tampa Bay waterfront properties face storm surge, salt air corrosion, and wind-driven rain during tropical storms</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Agricultural Soil Conditions:</strong> Former tomato farming areas have clay-rich soils that retain moisture differently than coastal sand, requiring specialized drainage solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Industrial Requirements:</strong> Distribution centers and warehouses along the logistics corridor need heavy-duty, traffic-bearing waterproofing systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Senior Living Sensitivity:</strong> Sun City Center facilities require low-disruption methods, quiet installation during sensitive hours, and accessible design considerations</span>
                </li>
              </ul>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Ruskin Waterproofing Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Local Assessment</h3>
                <p className="text-gray-200 mb-4">
                  Schedule a waterproofing assessment from our Ruskin headquarters—we're minutes away, not hours.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-6 rounded-full hover:bg-brand-gold-light transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <RelatedServices city="Ruskin" currentService="exterior-waterproofing" />
              <NearbyLocations currentCity="Ruskin" service="exterior-waterproofing" serviceName="Exterior Waterproofing" />
            </div>
          </div>
        </div>
      </section>

      {/* Ruskin Sub-Markets Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Waterproofing for Every Ruskin Sub-Market
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            South Hillsborough County encompasses diverse property types, each with unique waterproofing requirements. FCS has expertise in all Ruskin sub-markets.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Apollo Beach</h3>
              <p className="text-gray-600 text-sm mb-3">
                Waterfront condos, single-family homes, and commercial properties requiring marine-grade waterproofing and storm surge protection.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Tampa Bay exposure</li>
                <li>• Salt air resistance</li>
                <li>• VE/AE flood zones</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Sun City Center</h3>
              <p className="text-gray-600 text-sm mb-3">
                Retirement community facilities, clubhouses, healthcare buildings, and multi-family complexes with senior-focused installation methods.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Low-disruption install</li>
                <li>• ADA compliance</li>
                <li>• Common area focus</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">I-75 Corridor</h3>
              <p className="text-gray-600 text-sm mb-3">
                Distribution centers, warehouses, and industrial facilities including Amazon fulfillment requiring heavy-duty waterproofing.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 24/7 operations</li>
                <li>• Traffic-bearing systems</li>
                <li>• Large-footprint buildings</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Downtown Ruskin</h3>
              <p className="text-gray-600 text-sm mb-3">
                Commercial buildings, retail centers, and mixed-use developments in the growing downtown core.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Commercial storefronts</li>
                <li>• Mixed-use buildings</li>
                <li>• Historic compatibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      
      {/* Visual Break */}
      <ContentParallax
        src="/images/fcs-exterior-waterproofing/fcs-exterior-waterproofing-large.webp"
        alt="Exterior waterproofing application"
        title="Complete Waterproofing Protection"
        subtitle="Premium membrane systems for lasting defense against moisture"
        overlayOpacity={0.55}
      />

      {/* Cost & Timeline Table */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Ruskin Exterior Waterproofing Costs
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Waterproofing costs vary by application, location within Ruskin, and system specification. Our local headquarters location often allows competitive pricing compared to Tampa-based contractors.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Application</th>
                  <th className="px-6 py-4 text-left">Cost Range</th>
                  <th className="px-6 py-4 text-left">Timeline</th>
                  <th className="px-6 py-4 text-left">Warranty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {costData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-brand-green-dark">{item.application}</td>
                    <td className="px-6 py-4 text-gray-700">{item.range}</td>
                    <td className="px-6 py-4 text-gray-700">{item.timeline}</td>
                    <td className="px-6 py-4 text-gray-700">{item.warranty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 text-center mt-4">
            * Costs as of 2025. Actual costs depend on substrate condition, access, and system specification. Contact FCS for detailed proposal.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Our Waterproofing Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            From our Ruskin headquarters, FCS manages every waterproofing project with systematic attention to local conditions, preparation, and quality assurance.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green-dark mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-heading">
                Ruskin's Hometown Waterproofing Team
              </h2>
              <p className="text-gray-200 mb-6">
                As a Ruskin-headquartered company, FCS brings unique advantages to every waterproofing project. Our crews know the local conditions, our project managers have established relationships with Hillsborough County officials, and our proximity means faster response for assessments, emergencies, and warranty service.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Local Headquarters:</strong> Minutes away for assessments, project supervision, and emergency response—not hours like Tampa-based contractors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Hillsborough County Expertise:</strong> Established relationships with building officials and inspectors for smoother permitting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Manufacturer Certified:</strong> Certified applicators for Tremco, Carlisle, Sika, Neogard, and other premium manufacturers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Responsive Warranty Service:</strong> Local presence means prompt warranty response—your property is in our community</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <MapPin className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">Ruskin</div>
                <div className="text-gray-300 text-sm">FCS Headquarters</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Droplets className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">10 Yr</div>
                <div className="text-gray-300 text-sm">Warranty Standard</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Building2 className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">200+</div>
                <div className="text-gray-300 text-sm">Local Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Clock className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">20+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FCS */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Ruskin Chooses FCS for Waterproofing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-8">
              <MapPin className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Local Headquarters</h3>
              <p className="text-gray-600">
                FCS is headquartered in Ruskin—not Tampa, not St. Petersburg. Your project gets hometown attention with faster response and local accountability.
              </p>
            </div>
            <div className="card text-center p-8">
              <Layers className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Sub-Market Expertise</h3>
              <p className="text-gray-600">
                From Apollo Beach waterfront to Sun City Center senior living to I-75 industrial—we design waterproofing systems for each Ruskin sub-market's specific needs.
              </p>
            </div>
            <div className="card text-center p-8">
              <Award className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">10-Year Warranty</h3>
              <p className="text-gray-600">
                Every FCS waterproofing installation includes our 10-year workmanship warranty, backed by manufacturer material warranties and responsive local service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={ruskinFaqs}
        title="Ruskin Exterior Waterproofing FAQs"
        description="Common questions about exterior waterproofing for commercial and residential buildings in Ruskin, Florida."
      />

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Protect Your Ruskin Property
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From our Ruskin headquarters, FCS provides comprehensive waterproofing for South Hillsborough County. Apollo Beach coastal, Sun City Center facilities, industrial buildings—schedule your local assessment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request Assessment
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
