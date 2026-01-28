import Link from "next/link";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Clock, FileCheck, Users, Thermometer, Wind, Droplets, HardHat, ShoppingCart, Factory, Stethoscope } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Construction Brandon FL | $500K-$50M+ Projects | FCS",
  description: "Premier commercial construction contractor in Brandon, Florida. Retail centers, medical facilities, office buildings, distribution centers. $10M+ bonding, 20+ years experience. Prime contractor on all projects. Call (813) 420-7561.",
  keywords: "commercial construction brandon, commercial contractor brandon, commercial builder brandon fl, retail construction brandon, medical facility construction brandon",
};

const serviceFeatures = [
  {
    title: "Retail Centers & Shopping Complexes",
    description: "Ground-up retail construction, shopping center developments, and tenant improvements along Highway 60, Brandon Boulevard, and the Westfield Brandon corridor."
  },
  {
    title: "Medical & Healthcare Facilities",
    description: "Healthcare construction near Brandon Regional Hospital including clinics, urgent care centers, specialty practices, and outpatient surgery centers."
  },
  {
    title: "Office Buildings & Professional Spaces",
    description: "Professional office construction for the growing Brandon business community, from single-tenant buildings to multi-story office complexes."
  },
  {
    title: "Distribution & Logistics Centers",
    description: "Warehouse and distribution facilities supporting the I-75/I-4 logistics corridor, including Amazon and major retailer distribution operations."
  },
  {
    title: "Hospitality & Restaurant Buildouts",
    description: "Hotels, restaurants, and entertainment venues serving Brandon's large residential population and visitor traffic."
  },
  {
    title: "Educational & Institutional Buildings",
    description: "Schools, training facilities, and institutional buildings for Hillsborough County Schools and private educational institutions."
  }
];

const brandonFaqs = [
  {
    question: "What size commercial construction projects does FCS handle in Brandon?",
    answer: "Florida Construction Specialists handles commercial construction projects in Brandon ranging from $500,000 to over $50 million. We specialize in retail centers along the Highway 60 corridor, medical facilities near Brandon Regional Hospital, office buildings, and distribution centers along I-75. Our $10M+ bonding capacity allows us to take on virtually any commercial project in the Brandon area."
  },
  {
    question: "Do you have experience with Hillsborough County's building permit process in Brandon?",
    answer: "Yes, Brandon falls under Hillsborough County Building Services jurisdiction, and we have extensive experience with their permitting process. Hillsborough County follows the Florida Building Code with specific requirements for traffic concurrency, stormwater management, and environmental permits. We maintain strong relationships with County building officials, which helps streamline permit approval and inspections."
  },
  {
    question: "How does Brandon's inland location affect commercial construction?",
    answer: "Brandon's inland location offers some advantages over coastal Tampa Bay areas: no storm surge risk, fewer flood zone complications (most of Brandon is Zone X), and generally more straightforward permitting. However, projects still require wind-resistant construction meeting Zone 2/3 requirements, and sites near the Alafia River may have flood zone considerations. Afternoon thunderstorms during summer require careful construction scheduling."
  },
  {
    question: "What commercial areas in Brandon do you serve?",
    answer: "We serve all of Brandon's commercial districts including the Highway 60 retail corridor, Westfield Brandon Mall area, Brandon Town Center, Bloomingdale corridor, Valrico and FishHawk commercial areas, and the I-75 logistics zone. We also handle projects throughout eastern Hillsborough County including Riverview and Plant City."
  },
  {
    question: "Why should I choose FCS over other Brandon commercial contractors?",
    answer: "FCS is always the prime contractor on every Brandon project—we never work as a subcontractor. This means you get direct accountability and our full commitment to your project's success. We bring 20+ years of commercial construction experience, $10M+ bonding capacity, and a track record of $50M+ in completed projects throughout Tampa Bay. Our proximity to Brandon from our Ruskin headquarters means efficient project oversight."
  },
  {
    question: "How long does commercial construction typically take in Brandon?",
    answer: "Commercial construction timelines in Brandon vary based on project scope and complexity. A typical tenant improvement might take 2-4 months, while ground-up retail or office construction ranges from 8-18 months. Distribution centers can be built more quickly (6-12 months) due to simpler interior requirements. We provide detailed schedules during pre-construction accounting for Hillsborough County permit timelines."
  },
  {
    question: "Do you build distribution centers and warehouses in Brandon?",
    answer: "Yes, warehouse and distribution center construction is a specialty for FCS in the Brandon/I-75 corridor. We've built logistics facilities for major retailers and distribution companies. These projects typically range from $5 million to $30 million and involve tilt-wall or metal building construction, specialized loading dock systems, and extensive site work."
  },
  {
    question: "What insurance and bonding do you carry for Brandon commercial projects?",
    answer: "Florida Construction Specialists maintains comprehensive coverage including general liability insurance, workers' compensation, professional liability, and bonding capacity of $10 million or more. We are a fully licensed Florida General Contractor (License #CBC1262722). Our strong financial standing enables us to secure performance and payment bonds for projects of virtually any size in the Brandon market."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Commercial Construction", href: "/commercial-construction/" },
  { name: "Brandon", href: "/commercial-construction-brandon/" },
];

export default function CommercialConstructionBrandonPage() {
  return (
    <>
      <LocalBusinessSchema city="Brandon" service="Commercial Construction" />
      <ServiceSchema
        serviceName="Commercial Construction"
        serviceDescription="Premier commercial construction contractor serving Brandon, Florida. Retail centers, medical facilities, office buildings, distribution centers. Large-scale projects from $500K to $50M+. Always the prime contractor."
        city="Brandon"
        minPrice="500000"
      />

      <ArticleSchema
        headline="Commercial Construction Brandon FL | $500K-$50M+ Projects | FCS"
        description="Premier commercial construction contractor in Brandon, Florida. Retail centers, medical facilities, office buildings, distribution centers. $10M+ bonding, 20+ years experience. Prime contractor on all projects. Call (813) 420-7561."
        datePublished="2024-06-01"
        dateModified="2025-01-18"
        slug="/commercial-construction-brandon/"
      />

      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems.slice(1)} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2023/12/Lions-World-Vision-Institute-Building-Exterior.jpg')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Brandon & Eastern Hillsborough</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Commercial Construction in Brandon, FL
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists delivers large-scale commercial construction throughout Brandon and eastern Hillsborough County. From retail centers along Highway 60 to distribution facilities near I-75, we bring 20+ years of experience to projects ranging from $500,000 to $50 million.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              As Brandon's trusted prime contractor, we handle retail centers, medical facilities, office buildings, distribution centers, and hospitality venues—never as a subcontractor, always with full project accountability.
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
                Commercial Construction Services in Brandon
              </h2>
              <p className="text-gray-600 mb-6">
                Brandon is one of Hillsborough County's largest unincorporated communities, with a population exceeding 115,000 residents. As a major suburban hub east of Tampa, Brandon offers a compelling commercial environment with strong retail traffic, healthcare demand, and proximity to I-75's logistics corridor.
              </p>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists serves Brandon's diverse commercial construction needs with the expertise, bonding capacity, and local knowledge required for large-scale projects. Whether you're building a retail center near Westfield Brandon, a medical facility near Brandon Regional Hospital, or a distribution center along I-75, we deliver on time and on budget.
              </p>
              <p className="text-gray-600 mb-8">
                As a prime general contractor—never a subcontractor—we maintain full control and accountability on every Brandon project. Our proximity from our Ruskin headquarters allows efficient project oversight and rapid response to any issues.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-6">
                Our Commercial Construction Capabilities in Brandon
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {serviceFeatures.map((feature) => (
                  <div key={feature.title} className="border border-gray-200 rounded-lg p-5 hover:border-brand-green transition-colors">
                    <h4 className="font-bold text-brand-green-dark mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Brandon Commercial Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <RelatedServices city="Brandon" currentService="commercial-construction" />
              <NearbyLocations currentCity="Brandon" service="commercial-construction" serviceName="Commercial Construction" />

              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark rounded-lg p-6 text-white">
                <h3 className="font-bold text-xl mb-4">Start Your Brandon Project</h3>
                <p className="text-gray-200 mb-4 text-sm">
                  Contact us for a project consultation. Commercial construction in Brandon starting at $500,000.
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

      {/* Brandon Market Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Brandon's Commercial Construction Landscape
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Retail & Shopping Hub</h3>
              <p className="text-gray-600 text-sm">
                Brandon is a major retail destination anchored by Westfield Brandon Mall and miles of retail along Highway 60. The area's high household density and traffic counts drive continued retail investment in shopping centers and restaurant pads.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Stethoscope className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Healthcare Expansion</h3>
              <p className="text-gray-600 text-sm">
                Brandon Regional Hospital (HCA) anchors the healthcare sector, with numerous medical office buildings, urgent care centers, and specialty clinics throughout the area. The growing population drives continued medical construction demand.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Logistics & Distribution</h3>
              <p className="text-gray-600 text-sm">
                The I-75 corridor near Brandon has seen massive logistics investment, with Amazon and other major retailers building distribution centers. FCS has experience with large-scale warehouse and distribution facility construction in this corridor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Expertise Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Building for Brandon's Market
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Thermometer className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Inland Climate Benefits</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Brandon's inland location means no storm surge risk and generally reduced hurricane impacts compared to coastal areas. However, Florida's typical construction challenges remain—intense summer heat, high humidity, and afternoon thunderstorms requiring strategic scheduling.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Wind className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Wind-Resistant Construction</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Brandon requires wind-resistant construction meeting Zone 2/3 requirements (110-120 mph design wind speed). All our commercial buildings meet or exceed Florida Building Code requirements for structural integrity, roof systems, and impact protection.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Stormwater Management</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Most of Brandon is outside flood zones (Zone X), but stormwater management is critical for large commercial sites. We design and build proper drainage systems that meet SWFWMD requirements and prevent on-site and off-site flooding.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">County Permitting Expertise</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Brandon falls under Hillsborough County Building Services. We maintain strong relationships with County officials and understand their specific requirements for traffic concurrency, environmental permits, and development review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost/Timeline Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Brandon Commercial Construction: Costs & Timelines
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-brand-green-dark text-white">
                    <th className="px-6 py-4 text-left font-semibold">Project Type</th>
                    <th className="px-6 py-4 text-left font-semibold">Typical Cost Range</th>
                    <th className="px-6 py-4 text-left font-semibold">Timeline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-800">Tenant Improvement</td>
                    <td className="px-6 py-4 text-gray-600">$50-140/SF</td>
                    <td className="px-6 py-4 text-gray-600">2-4 months</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-800">Retail Center (Ground-Up)</td>
                    <td className="px-6 py-4 text-gray-600">$150-280/SF</td>
                    <td className="px-6 py-4 text-gray-600">8-14 months</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-800">Office Building</td>
                    <td className="px-6 py-4 text-gray-600">$180-350/SF</td>
                    <td className="px-6 py-4 text-gray-600">10-16 months</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-800">Medical/Healthcare Facility</td>
                    <td className="px-6 py-4 text-gray-600">$300-500/SF</td>
                    <td className="px-6 py-4 text-gray-600">12-18 months</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-800">Distribution/Warehouse</td>
                    <td className="px-6 py-4 text-gray-600">$75-150/SF</td>
                    <td className="px-6 py-4 text-gray-600">6-12 months</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-800">Restaurant/Hospitality</td>
                    <td className="px-6 py-4 text-gray-600">$250-450/SF</td>
                    <td className="px-6 py-4 text-gray-600">6-12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Costs and timelines are estimates and vary based on project specifics. Brandon generally offers competitive construction costs within the Tampa Bay market. Contact us for a detailed estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Our Brandon Commercial Construction Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Pre-Construction & Planning",
                  description: "We begin with thorough site evaluation, feasibility analysis, and budget development. For Brandon projects, this includes zoning verification with Hillsborough County, traffic impact analysis, and environmental review for wetland areas."
                },
                {
                  step: "2",
                  title: "Design Coordination",
                  description: "Whether working with your architect or providing design-build services, we ensure plans meet Hillsborough County codes, SWFWMD requirements, and any special district standards while optimizing constructability and budget."
                },
                {
                  step: "3",
                  title: "Permitting & Approvals",
                  description: "We manage all permit applications with Hillsborough County Building Services, coordinate site plan reviews, environmental permits, and utility connections. Our familiarity with County processes helps minimize delays."
                },
                {
                  step: "4",
                  title: "Construction Execution",
                  description: "Our experienced project managers oversee daily construction with strict quality control, safety protocols, and schedule management. Our proximity from Ruskin means rapid response to any project needs."
                },
                {
                  step: "5",
                  title: "Closeout & Turnover",
                  description: "We complete all inspections, obtain certificate of occupancy, and provide comprehensive documentation including warranties, as-builts, and operations manuals for your Brandon commercial building."
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-gray-50 rounded-lg p-6 shadow-sm">
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
            Why Brandon Businesses Choose FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Always Prime Contractor</h3>
              <p className="text-gray-600">
                We never work as a subcontractor in Brandon. You get direct accountability, single-point contact, and our full commitment to your project's success from start to finish.
              </p>
            </div>
            <div className="card text-center p-6">
              <Factory className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Distribution Center Experts</h3>
              <p className="text-gray-600">
                We have extensive experience with warehouse and distribution center construction in the I-75 corridor, including projects for major retailers and logistics companies.
              </p>
            </div>
            <div className="card text-center p-6">
              <Users className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Local Presence</h3>
              <p className="text-gray-600">
                Our Ruskin headquarters puts us close to Brandon for efficient project oversight. Strong relationships with Hillsborough County officials ensure smooth permitting and inspections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema items={brandonFaqs} title="Commercial Construction in Brandon - Frequently Asked Questions" />

      {/* Internal Links Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Services & Locations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Commercial Services in Brandon</h3>
              <ul className="space-y-2">
                <li><Link href="/multi-family-construction-brandon/" className="text-brand-green hover:underline">Multi-Family Construction Brandon</Link></li>
                <li><Link href="/disaster-recovery-brandon/" className="text-brand-green hover:underline">Disaster Recovery Brandon</Link></li>
                <li><Link href="/exterior-waterproofing-brandon/" className="text-brand-green hover:underline">Exterior Waterproofing Brandon</Link></li>
                <li><Link href="/commercial/medical-construction/" className="text-brand-green hover:underline">Medical Construction</Link></li>
                <li><Link href="/commercial/industrial-construction/" className="text-brand-green hover:underline">Industrial Construction</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Commercial Construction Nearby</h3>
              <ul className="space-y-2">
                <li><Link href="/commercial-construction-tampa/" className="text-brand-green hover:underline">Commercial Construction Tampa</Link></li>
                <li><Link href="/commercial-construction-ruskin/" className="text-brand-green hover:underline">Commercial Construction Ruskin</Link></li>
                <li><Link href="/commercial-construction-lakeland/" className="text-brand-green hover:underline">Commercial Construction Lakeland</Link></li>
                <li><Link href="/commercial-construction-st-petersburg/" className="text-brand-green hover:underline">Commercial Construction St. Petersburg</Link></li>
                <li><Link href="/commercial-construction-bradenton/" className="text-brand-green hover:underline">Commercial Construction Bradenton</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Learn More</h3>
              <ul className="space-y-2">
                <li><Link href="/commercial-construction/" className="text-brand-green hover:underline">Commercial Construction Services</Link></li>
                <li><Link href="/about/" className="text-brand-green hover:underline">About FCS</Link></li>
                <li><Link href="/gallery/" className="text-brand-green hover:underline">Project Gallery</Link></li>
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
            Start Your Brandon Commercial Construction Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. We deliver commercial construction excellence in Brandon with projects starting at $500,000.
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
