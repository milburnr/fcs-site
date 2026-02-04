import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Clock, FileCheck, Users, Thermometer, Wind, Droplets, HardHat, Truck } from "lucide-react";
import { BUSINESS_INFO, SERVICES, FAQ_DATABASE } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "Commercial Construction Lakeland | $500K+ | FCS",
  description: "Premier commercial construction contractor in Lakeland, Florida. I-4 corridor logistics, Publix headquarters area, medical facilities, retail centers. 40+ years experience, 20+ years experience. Prime contractor on all projects. Call (813) 420-7561.",
  keywords: "commercial construction lakeland, commercial contractor lakeland, commercial builder lakeland fl, warehouse construction lakeland, industrial construction lakeland, office building construction lakeland",
};

const serviceFeatures = [
  {
    title: "Distribution & Logistics Facilities",
    description: "Warehouses, distribution centers, and logistics hubs strategically positioned along the I-4 corridor between Tampa and Orlando with excellent highway access."
  },
  {
    title: "Office Buildings & Corporate Campuses",
    description: "From single-tenant buildings to multi-story office complexes in Downtown Lakeland, near Publix headquarters, and throughout Polk County's growing business districts."
  },
  {
    title: "Medical & Healthcare Facilities",
    description: "Healthcare construction for clinics, urgent care centers, surgical centers, and specialty practices near Lakeland Regional Health and throughout central Polk County."
  },
  {
    title: "Retail Centers & Shopping Complexes",
    description: "Ground-up retail construction, tenant improvements, and shopping center renovations along the US-98 corridor, Lakeside Village, and growing commercial areas."
  },
  {
    title: "Industrial & Manufacturing",
    description: "Manufacturing facilities, flex space, and industrial buildings serving Lakeland's diverse industrial base and strategic location between Tampa Bay and Orlando."
  },
  {
    title: "Educational & Institutional",
    description: "Schools, training facilities, and institutional buildings serving Florida Polytechnic University, Southeastern University, and Lakeland's growing educational sector."
  }
];

// Unique FAQs for Lakeland commercial construction
const lakelandFaqs = [
  {
    question: "What size commercial construction projects does FCS handle in Lakeland?",
    answer: "Florida Construction Specialists handles commercial construction projects in Lakeland ranging from $500,000 to over $25 million. We specialize in large-scale projects including distribution centers along the I-4 corridor, office buildings near Publix corporate headquarters, medical facilities near Lakeland Regional Health, and industrial/manufacturing facilities throughout Polk County. Our 40+ years experience and in-house engineering allows us to take on virtually any commercial project in the Lakeland area."
  },
  {
    question: "Do you have experience with Lakeland's building codes and permit process?",
    answer: "Yes, we have extensive experience navigating the City of Lakeland Building Inspection Services and Polk County Building Division. Lakeland requires compliance with the Florida Building Code 2023, with Zone 2 wind requirements (approximately 115 mph design wind speed). We maintain strong relationships with local building officials, which helps streamline the permit approval and inspection process for commercial projects."
  },
  {
    question: "Why is Lakeland ideal for distribution and logistics facilities?",
    answer: "Lakeland's strategic location along the I-4 corridor makes it a prime logistics hub. It's equidistant from Tampa (35 miles) and Orlando (55 miles), providing access to major ports, airports, and consumer markets. Land costs are generally lower than coastal areas, and Polk County offers various economic incentives for distribution facilities. We've completed numerous warehouse and distribution projects taking advantage of these factors."
  },
  {
    question: "What commercial districts in Lakeland do you serve?",
    answer: "We serve all of Lakeland's major commercial and industrial areas including Downtown Lakeland (the historic Munn Park district), the I-4 corridor industrial zone, North Lakeland near Publix headquarters, Lakeside Village retail area, the US-98 commercial corridor, and emerging development areas around Florida Polytechnic University. We also work throughout Polk County including Bartow, Winter Haven, and surrounding communities."
  },
  {
    question: "Why should I choose FCS over other Lakeland commercial contractors?",
    answer: "FCS is always the prime contractor on every Lakeland project—we never work as a subcontractor. This means you get direct accountability, a single point of contact, and our full commitment to your project's success. We bring 20+ years of commercial construction experience, 40+ years experience and in-house engineering, and proven expertise in the industrial and distribution projects that define Lakeland's commercial market."
  },
  {
    question: "How long does a typical commercial construction project take in Lakeland?",
    answer: "Commercial construction timelines in Lakeland vary based on project scope and complexity. A typical tenant improvement might take 2-4 months, while ground-up commercial construction ranges from 8-18 months. Large distribution centers may take 10-14 months depending on size. We provide detailed schedules during pre-construction and account for Lakeland-specific factors like rainy season scheduling and permit timelines."
  },
  {
    question: "Do you handle industrial and warehouse construction in Lakeland?",
    answer: "Yes, industrial and warehouse construction is one of our specialties in the Lakeland/Polk County market. We have extensive experience building distribution centers, manufacturing facilities, flex space, and cold storage facilities. We understand the specific requirements for industrial construction including heavy floor loads, dock-high configurations, clear heights, fire suppression systems, and the infrastructure needs of logistics operations."
  },
  {
    question: "What insurance and bonding do you carry for Lakeland commercial projects?",
    answer: "Florida Construction Specialists maintains comprehensive coverage including general liability insurance, workers' compensation, professional liability, and financial strength to handle projects of virtually any size. We are a fully licensed Florida General Contractor (License #CBC1262722). Our strong financial standing enables us to secure performance and payment bonds for projects of virtually any size in the Lakeland and Polk County market."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Commercial Construction", href: "/commercial-construction/" },
  { name: "Lakeland", href: "/commercial-construction-lakeland/" },
];

export default function CommercialConstructionLakelandPage() {
  return (
    <>
      <LocalBusinessSchema city="Lakeland" service="Commercial Construction" />
      <ServiceSchema
        serviceName="Commercial Construction"
        serviceDescription="Premier commercial construction contractor serving Lakeland, Florida. Distribution centers, office buildings, medical facilities, industrial construction, retail centers. Large-scale projects from $500K to $25M+. Always the prime contractor."
        city="Lakeland"
        minPrice="500000"
      />

      <ArticleSchema
        headline="Commercial Construction Lakeland FL | $500K-$25M+ Projects | FCS"
        description="Premier commercial construction contractor in Lakeland, Florida. I-4 corridor logistics, Publix headquarters area, medical facilities, retail centers. 40+ years experience, 20+ years experience. Prime contractor on all projects. Call (813) 420-7561."
        datePublished="2024-06-01"
        dateModified="2025-01-18"
        slug="/commercial-construction-lakeland/"
      />

      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems.slice(1)} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/Lions-World-Vision-Institute-Building-Exterior/lions-world-vision-institute-building-exterior-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Lakeland, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Commercial Construction in Lakeland, FL
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists delivers large-scale commercial construction throughout Lakeland and Polk County. From I-4 corridor distribution centers to corporate offices near Publix headquarters, we bring 20+ years of experience to projects ranging from $500,000 to $25 million.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              As Lakeland's trusted prime contractor, we handle distribution facilities, office buildings, medical facilities, retail centers, and industrial projects—never as a subcontractor, always with full project accountability.
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
                Commercial Construction Services in Lakeland
              </h2>
              <p className="text-gray-600 mb-6">
                Lakeland has emerged as one of Central Florida's fastest-growing commercial markets, with a population exceeding 115,000 and strategic positioning along the I-4 corridor between Tampa and Orlando. As home to Publix Super Markets' corporate headquarters and Florida Polytechnic University, the city continues to attract significant commercial investment across multiple sectors.
              </p>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists serves Lakeland's diverse commercial construction needs with the expertise, bonding capacity, and local knowledge required for large-scale projects. Whether you're building a distribution center with I-4 access, an office building near Downtown Lakeland, or a manufacturing facility in Polk County's industrial zones, we deliver on time and on budget.
              </p>
              <p className="text-gray-600 mb-8">
                As a prime general contractor—never a subcontractor—we maintain full control and accountability on every Lakeland project. Our relationships with local building departments, subcontractors, and suppliers ensure smooth execution from groundbreaking to certificate of occupancy.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-6">
                Our Commercial Construction Capabilities in Lakeland
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
                Discuss Your Lakeland Commercial Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <RelatedServices city="Lakeland" currentService="commercial-construction" />
              <NearbyLocations currentCity="Lakeland" service="commercial-construction" serviceName="Commercial Construction" />

              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark rounded-lg p-6 text-white">
                <h3 className="font-bold text-xl mb-4">Start Your Lakeland Project</h3>
                <p className="text-gray-200 mb-4 text-sm">
                  Contact us for a project consultation. Commercial construction in Lakeland starting at $500,000.
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

      {/* Lakeland Market Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Lakeland's Commercial Construction Landscape
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">I-4 Logistics Corridor</h3>
              <p className="text-gray-600 text-sm">
                Lakeland's strategic I-4 location makes it a distribution hub between Tampa Bay and Orlando. Amazon, Rooms To Go, and numerous logistics companies have built major facilities here. We specialize in warehouse and distribution center construction.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Corporate & Office Development</h3>
              <p className="text-gray-600 text-sm">
                Home to Publix Super Markets headquarters, Lakeland attracts corporate investment and professional services. Downtown Lakeland and the North Lakeland corridor see steady demand for Class A office space and corporate facilities.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Healthcare Growth</h3>
              <p className="text-gray-600 text-sm">
                Lakeland Regional Health and Watson Clinic anchor a growing healthcare sector. The region's population growth drives demand for medical offices, urgent care facilities, specialty clinics, and outpatient surgical centers.
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
              Building for Lakeland's Unique Conditions
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Thermometer className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Central Florida Climate</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Lakeland's inland location means hot summers with afternoon thunderstorms and high humidity. We schedule construction activities to account for daily rain patterns during summer months and specify materials rated for Florida's subtropical climate.
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
                  Lakeland is in Wind Zone 2 with approximately 115 mph design wind speed—less than coastal areas but still requiring hurricane-resistant construction. All our commercial buildings meet Florida Building Code requirements for wind resistance and impact protection.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Soil & Drainage Expertise</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Polk County's sandy soil and high water table require proper site preparation and drainage design. For large industrial projects, we conduct thorough geotechnical analysis and implement appropriate foundation systems and stormwater management.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Local Permitting Knowledge</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  We maintain strong relationships with the City of Lakeland Building Inspection Services and Polk County Building Division. Our familiarity with local permit processes, SWFWMD requirements, and inspection protocols helps minimize delays.
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
            Lakeland Commercial Construction: Costs & Timelines
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
                    <td className="px-6 py-4 text-gray-600">$40-120/SF</td>
                    <td className="px-6 py-4 text-gray-600">2-4 months</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-800">Distribution/Warehouse</td>
                    <td className="px-6 py-4 text-gray-600">$80-150/SF</td>
                    <td className="px-6 py-4 text-gray-600">8-14 months</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-800">Office Building (Ground-Up)</td>
                    <td className="px-6 py-4 text-gray-600">$180-350/SF</td>
                    <td className="px-6 py-4 text-gray-600">10-16 months</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-800">Medical/Healthcare Facility</td>
                    <td className="px-6 py-4 text-gray-600">$300-500/SF</td>
                    <td className="px-6 py-4 text-gray-600">12-18 months</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-800">Retail Center</td>
                    <td className="px-6 py-4 text-gray-600">$130-250/SF</td>
                    <td className="px-6 py-4 text-gray-600">8-12 months</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-800">Manufacturing Facility</td>
                    <td className="px-6 py-4 text-gray-600">$100-200/SF</td>
                    <td className="px-6 py-4 text-gray-600">10-16 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Costs and timelines are estimates and vary based on project specifics, site conditions, and market factors. Lakeland generally offers lower construction costs than coastal Tampa Bay areas. Contact us for a detailed estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Our Lakeland Commercial Construction Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Pre-Construction & Planning",
                  description: "We begin with a thorough site evaluation, feasibility analysis, and budget development. For Lakeland projects, this includes geotechnical analysis, utility infrastructure assessment, SWFWMD stormwater requirements, and permit pathway planning with City or County officials."
                },
                {
                  step: "2",
                  title: "Design Coordination",
                  description: "Whether working with your architect or providing design-build services, we ensure plans meet Lakeland's building codes, wind requirements, and energy codes while optimizing constructability and budget for the local market."
                },
                {
                  step: "3",
                  title: "Permitting & Approvals",
                  description: "We manage all permit applications with Lakeland Building Inspection Services or Polk County Building Division, coordinate plan reviews, SWFWMD environmental permits, and handle any required approvals or variances."
                },
                {
                  step: "4",
                  title: "Construction Execution",
                  description: "Our experienced project managers oversee daily construction with strict quality control, safety protocols, and schedule management. We adjust for Central Florida's summer rain patterns with strategic scheduling of weather-sensitive work."
                },
                {
                  step: "5",
                  title: "Closeout & Turnover",
                  description: "We complete all inspections, obtain certificate of occupancy, and provide comprehensive documentation including warranties, as-builts, and operations manuals for your Lakeland commercial building."
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
            Why Lakeland Businesses Choose FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Always Prime Contractor</h3>
              <p className="text-gray-600">
                We never work as a subcontractor in Lakeland. You get direct accountability, single-point contact, and our full commitment to your project's success from start to finish.
              </p>
            </div>
            <div className="card text-center p-6">
              <Truck className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Industrial Construction Experts</h3>
              <p className="text-gray-600">
                We specialize in the distribution, warehouse, and manufacturing facilities that define Lakeland's commercial market, with expertise in the I-4 corridor's logistics sector.
              </p>
            </div>
            <div className="card text-center p-6">
              <Users className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Local Relationships</h3>
              <p className="text-gray-600">
                Strong relationships with Lakeland building departments, inspectors, subcontractors, and suppliers help ensure smooth permitting and efficient construction execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema items={lakelandFaqs} title="Commercial Construction in Lakeland - Frequently Asked Questions" />

      {/* Internal Links Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Services & Locations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Commercial Services in Lakeland</h3>
              <ul className="space-y-2">
                <li><Link href="/multi-family-construction-lakeland/" className="text-brand-green hover:underline">Multi-Family Construction Lakeland</Link></li>
                <li><Link href="/disaster-recovery-lakeland/" className="text-brand-green hover:underline">Disaster Recovery Lakeland</Link></li>
                <li><Link href="/historic-restoration-lakeland/" className="text-brand-green hover:underline">Historic Restoration Lakeland</Link></li>
                <li><Link href="/commercial/industrial-construction/" className="text-brand-green hover:underline">Industrial Construction</Link></li>
                <li><Link href="/commercial/medical-construction/" className="text-brand-green hover:underline">Medical Construction</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Commercial Construction Nearby</h3>
              <ul className="space-y-2">
                <li><Link href="/commercial-construction-tampa/" className="text-brand-green hover:underline">Commercial Construction Tampa</Link></li>
                <li><Link href="/commercial-construction-brandon/" className="text-brand-green hover:underline">Commercial Construction Brandon</Link></li>
                <li><Link href="/commercial-construction-st-petersburg/" className="text-brand-green hover:underline">Commercial Construction St. Petersburg</Link></li>
                <li><Link href="/commercial-construction-clearwater/" className="text-brand-green hover:underline">Commercial Construction Clearwater</Link></li>
                <li><Link href="/commercial-construction-sarasota/" className="text-brand-green hover:underline">Commercial Construction Sarasota</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Learn More</h3>
              <ul className="space-y-2">
                <li><Link href="/commercial-construction/" className="text-brand-green hover:underline">Commercial Construction Services</Link></li>
                <li><Link href="/locations/lakeland-fl/" className="text-brand-green hover:underline">All Lakeland Services</Link></li>
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
            Start Your Lakeland Commercial Construction Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. We deliver commercial construction excellence in Lakeland with projects starting at $500,000.
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
