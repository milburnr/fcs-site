import Link from "next/link";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Clock, FileCheck, Users, Thermometer, Wind, Droplets, HardHat, Warehouse, Home, Ship } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "Commercial Construction Ruskin FL | $500K-$25M+ Projects | FCS Home Base",
  description: "Premier commercial construction contractor headquartered in Ruskin, Florida. Distribution centers, industrial facilities, waterfront construction, Sun City Center. 40+ years experience, 20+ years experience. Call (813) 420-7561.",
  keywords: "commercial construction ruskin, commercial contractor ruskin, commercial builder ruskin fl, distribution center construction ruskin, apollo beach commercial construction",
};

const serviceFeatures = [
  {
    title: "Distribution & Logistics Centers",
    description: "Warehouse and distribution facilities supporting the Port Tampa Bay/I-75 logistics corridor. Amazon, major retailers, and regional distribution companies."
  },
  {
    title: "Industrial & Manufacturing Facilities",
    description: "Manufacturing plants, agricultural processing facilities, and industrial buildings serving South Hillsborough County's industrial base."
  },
  {
    title: "Waterfront Commercial Construction",
    description: "Marina facilities, waterfront retail, and commercial buildings along Apollo Beach and Tampa Bay waterfronts with proper flood zone construction."
  },
  {
    title: "Senior Living & Healthcare Facilities",
    description: "Assisted living, memory care, medical offices, and healthcare facilities serving Sun City Center's large retirement community."
  },
  {
    title: "Retail & Commercial Centers",
    description: "Shopping centers, retail plazas, and commercial buildings serving Ruskin, Apollo Beach, and Sun City Center's growing population."
  },
  {
    title: "Agricultural & Agribusiness Facilities",
    description: "Processing facilities, storage buildings, and agricultural support structures for South County's active agricultural sector."
  }
];

const ruskinFaqs = [
  {
    question: "Why is FCS headquartered in Ruskin?",
    answer: "Florida Construction Specialists has been headquartered in Ruskin for over 20 years because of its strategic location in South Hillsborough County. We're close to the I-75 logistics corridor, Port Tampa Bay, and serve the entire Tampa Bay metro efficiently. Being based in Ruskin means we're deeply connected to the local community and can provide faster response times for projects throughout South County."
  },
  {
    question: "What size commercial construction projects does FCS handle in Ruskin?",
    answer: "As our home base, we handle commercial construction projects in Ruskin and South County ranging from $500,000 to over $25 million. We specialize in distribution centers along the I-75 corridor, industrial facilities, waterfront commercial construction in Apollo Beach, and senior living facilities in Sun City Center. Our 40+ years experience and in-house engineering allows us to take on virtually any commercial project."
  },
  {
    question: "Do you have experience with waterfront construction in Apollo Beach?",
    answer: "Yes, we have extensive experience with waterfront commercial construction in Apollo Beach and along Tampa Bay. These projects require specialized expertise in flood zone construction (VE and AE zones), marine-grade materials for salt air exposure, enhanced wind resistance, and SWFWMD permitting. We've completed marinas, waterfront retail, and commercial facilities throughout the area."
  },
  {
    question: "What commercial areas do you serve from your Ruskin headquarters?",
    answer: "From Ruskin, we efficiently serve all of South Hillsborough County including Apollo Beach, Sun City Center, Wimauma, Gibsonton, and Riverview. We also serve the broader Tampa Bay area including Tampa, Brandon, Lakeland, Bradenton, and Sarasota. Our central South County location allows rapid response throughout the region."
  },
  {
    question: "Do you build facilities for the logistics and distribution industry?",
    answer: "Yes, distribution and logistics construction is a major specialty for FCS. The I-75 corridor near Ruskin has seen tremendous logistics investment, with Amazon and other major companies building distribution centers. We have experience with large-scale warehouse construction, tilt-wall buildings, and specialized logistics facilities ranging from $5 million to $25 million."
  },
  {
    question: "Can you build senior living facilities in Sun City Center?",
    answer: "Yes, we have experience building senior living and healthcare facilities in and around Sun City Center. This includes assisted living communities, memory care facilities, medical offices, and healthcare clinics. We understand the specific requirements of senior living construction, including ADA compliance, medical-grade systems, and the unique needs of retirement communities."
  },
  {
    question: "How does Ruskin's coastal location affect commercial construction?",
    answer: "Ruskin and Apollo Beach have both coastal and inland areas. Waterfront properties along Tampa Bay require flood zone construction (VE/AE zones), enhanced wind resistance (up to 140 mph design wind speed), and marine-grade materials. Inland areas like Sun City Center have fewer coastal requirements but still need proper hurricane-resistant construction. We understand these varying requirements throughout South County."
  },
  {
    question: "What insurance and bonding do you carry?",
    answer: "Florida Construction Specialists maintains comprehensive coverage including general liability insurance, workers' compensation, professional liability, and financial strength to handle projects of virtually any size. We are a fully licensed Florida General Contractor (License #CBC1262722). Our strong financial standing enables us to secure performance and payment bonds for projects of virtually any size."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Commercial Construction", href: "/commercial-construction/" },
  { name: "Ruskin", href: "/commercial-construction-ruskin/" },
];

export default function CommercialConstructionRuskinPage() {
  return (
    <>
      <LocalBusinessSchema city="Ruskin" service="Commercial Construction" />
      <ServiceSchema
        serviceName="Commercial Construction"
        serviceDescription="Premier commercial construction contractor headquartered in Ruskin, Florida. Distribution centers, industrial facilities, waterfront construction, senior living. Large-scale projects from $500K to $25M+. Always the prime contractor."
        city="Ruskin"
        minPrice="500000"
      />

      <ArticleSchema
        headline="Commercial Construction Ruskin FL | $500K-$25M+ Projects | FCS Home Base"
        description="Premier commercial construction contractor headquartered in Ruskin, Florida. Distribution centers, industrial facilities, waterfront construction, Sun City Center. 40+ years experience, 20+ years experience. Call (813) 420-7561."
        datePublished="2024-06-01"
        dateModified="2025-01-18"
        slug="/commercial-construction-ruskin/"
      />

      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems.slice(1)} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2023/12/Lions-World-Vision-Institute-Building-Exterior.jpg')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <Home className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">FCS Headquarters - Ruskin, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Commercial Construction in Ruskin, FL
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists is proudly headquartered in Ruskin. From distribution centers along the I-75 corridor to waterfront commercial projects in Apollo Beach and senior facilities in Sun City Center, we bring 20+ years of experience to projects ranging from $500,000 to $25 million.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              As your local prime contractor, we handle industrial facilities, logistics centers, waterfront construction, healthcare facilities, and retail projects—never as a subcontractor, always with full project accountability.
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
              <span className="font-semibold text-gray-700">Ruskin Headquarters</span>
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
                Commercial Construction Services in Ruskin
              </h2>
              <p className="text-gray-600 mb-6">
                Ruskin is home to Florida Construction Specialists, and we're proud to serve our local community. South Hillsborough County has seen tremendous growth, from the logistics boom along I-75 to waterfront development in Apollo Beach and continued expansion in Sun City Center. With a population of 25,000+ and proximity to Port Tampa Bay, Ruskin sits at the center of significant commercial opportunity.
              </p>
              <p className="text-gray-600 mb-6">
                Being headquartered in Ruskin gives us unique advantages: we know the local building officials personally, understand the specific requirements of South County construction, and can respond immediately to project needs. Whether you're building a distribution center, waterfront commercial property, or senior living facility, you're working with neighbors who take pride in our community.
              </p>
              <p className="text-gray-600 mb-8">
                As a prime general contractor—never a subcontractor—we maintain full control and accountability on every project. Our local presence means rapid response, deep community relationships, and a commitment to building structures that serve South County for decades.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-6">
                Our Commercial Construction Capabilities in Ruskin
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
                Discuss Your Ruskin Area Commercial Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <RelatedServices city="Ruskin" currentService="commercial-construction" />
              <NearbyLocations currentCity="Ruskin" service="commercial-construction" serviceName="Commercial Construction" />

              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark rounded-lg p-6 text-white">
                <h3 className="font-bold text-xl mb-4">Your Local Team</h3>
                <p className="text-gray-200 mb-4 text-sm">
                  Visit our Ruskin headquarters or call for a project consultation. Commercial construction starting at $500,000.
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

      {/* Ruskin Market Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            South County's Commercial Construction Landscape
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Warehouse className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Logistics & Distribution Hub</h3>
              <p className="text-gray-600 text-sm">
                The I-75 corridor near Ruskin has become a major logistics hub with Amazon, Walmart, and other major retailers building distribution centers. FCS has extensive experience with large-scale warehouse and distribution facility construction in this corridor.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Ship className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Apollo Beach Waterfront</h3>
              <p className="text-gray-600 text-sm">
                Apollo Beach offers waterfront commercial opportunities along Tampa Bay. We have experience with marina facilities, waterfront retail, and commercial buildings that meet flood zone and coastal construction requirements.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Sun City Center Retirement Community</h3>
              <p className="text-gray-600 text-sm">
                Sun City Center is one of Florida's largest retirement communities, driving demand for senior living facilities, medical offices, and healthcare construction. We understand the unique requirements of serving this demographic.
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
              Building for South County's Unique Conditions
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Thermometer className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Mixed Coastal/Inland Conditions</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Ruskin encompasses both coastal areas along Tampa Bay (Apollo Beach) and inland areas (Sun City Center). We understand which construction methods apply where—marine-grade for waterfront, standard Florida construction for inland—and design accordingly.
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
                  South County requires wind-resistant construction meeting Zone 3 requirements (up to 140 mph for coastal areas). All our commercial buildings meet or exceed Florida Building Code requirements for structural integrity, roof systems, and impact protection.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Flood Zone Expertise</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Apollo Beach waterfront properties fall within FEMA VE/AE zones requiring elevated construction and flood-resistant design. Inland areas are generally Zone X. We navigate these varying requirements and ensure proper permitting and compliance.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Local Permitting Relationships</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  As Ruskin locals, we have strong relationships with Hillsborough County Building Services South County office. We know the local plan reviewers, inspectors, and officials personally—this helps minimize delays and resolve issues quickly.
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
            Ruskin Commercial Construction: Costs & Timelines
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
                    <td className="px-6 py-4 font-medium text-gray-800">Distribution/Warehouse</td>
                    <td className="px-6 py-4 text-gray-600">$75-150/SF</td>
                    <td className="px-6 py-4 text-gray-600">6-12 months</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-800">Industrial/Manufacturing</td>
                    <td className="px-6 py-4 text-gray-600">$100-200/SF</td>
                    <td className="px-6 py-4 text-gray-600">8-14 months</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-800">Waterfront Commercial</td>
                    <td className="px-6 py-4 text-gray-600">$250-450/SF</td>
                    <td className="px-6 py-4 text-gray-600">10-18 months</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-800">Senior Living Facility</td>
                    <td className="px-6 py-4 text-gray-600">$200-350/SF</td>
                    <td className="px-6 py-4 text-gray-600">12-18 months</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-800">Retail/Commercial Center</td>
                    <td className="px-6 py-4 text-gray-600">$150-280/SF</td>
                    <td className="px-6 py-4 text-gray-600">8-14 months</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-800">Medical Office Building</td>
                    <td className="px-6 py-4 text-gray-600">$275-450/SF</td>
                    <td className="px-6 py-4 text-gray-600">10-16 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Costs and timelines are estimates. Waterfront projects in Apollo Beach typically at higher end of ranges due to flood zone and marine-grade requirements. Contact us for a detailed estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Our Ruskin Commercial Construction Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Pre-Construction & Planning",
                  description: "We begin with thorough site evaluation, feasibility analysis, and budget development. For South County projects, this includes flood zone determination, environmental review (former agricultural land considerations), and permit pathway planning with Hillsborough County South office."
                },
                {
                  step: "2",
                  title: "Design Coordination",
                  description: "Whether working with your architect or providing design-build services, we ensure plans meet Hillsborough County codes, coastal requirements where applicable, and any special district standards while optimizing constructability and budget."
                },
                {
                  step: "3",
                  title: "Permitting & Approvals",
                  description: "We manage all permit applications with Hillsborough County Building Services, coordinate environmental permits, SWFWMD approvals, and utility connections. Our local relationships help expedite this critical phase."
                },
                {
                  step: "4",
                  title: "Construction Execution",
                  description: "Our experienced project managers oversee daily construction with strict quality control, safety protocols, and schedule management. Being headquartered locally means immediate response to any project needs."
                },
                {
                  step: "5",
                  title: "Closeout & Turnover",
                  description: "We complete all inspections, obtain certificate of occupancy, and provide comprehensive documentation including warranties, as-builts, flood elevation certificates where applicable, and operations manuals."
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
            Why South County Chooses Their Local Contractor
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-6">
              <Home className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Ruskin Headquarters</h3>
              <p className="text-gray-600">
                We're not just working in Ruskin—we live here. Our headquarters location means same-day site visits, immediate response to project needs, and a deep commitment to building quality in our own community.
              </p>
            </div>
            <div className="card text-center p-6">
              <Warehouse className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Logistics Corridor Experts</h3>
              <p className="text-gray-600">
                We have extensive experience with distribution center and warehouse construction in the I-75 corridor, including projects for major retailers and logistics companies.
              </p>
            </div>
            <div className="card text-center p-6">
              <Users className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Local Relationships</h3>
              <p className="text-gray-600">
                Twenty years in Ruskin means deep relationships with Hillsborough County officials, local subcontractors, and suppliers. These relationships translate to smoother permitting and efficient construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema items={ruskinFaqs} title="Commercial Construction in Ruskin - Frequently Asked Questions" />

      {/* Internal Links Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Services & Locations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Services in Ruskin</h3>
              <ul className="space-y-2">
                <li><Link href="/multi-family-construction-ruskin/" className="text-brand-green hover:underline">Multi-Family Construction Ruskin</Link></li>
                <li><Link href="/disaster-recovery-ruskin/" className="text-brand-green hover:underline">Disaster Recovery Ruskin</Link></li>
                <li><Link href="/exterior-waterproofing-ruskin/" className="text-brand-green hover:underline">Exterior Waterproofing Ruskin</Link></li>
                <li><Link href="/balcony-reconstruction-ruskin/" className="text-brand-green hover:underline">Balcony Reconstruction Ruskin</Link></li>
                <li><Link href="/commercial/industrial-construction/" className="text-brand-green hover:underline">Industrial Construction</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Commercial Construction Nearby</h3>
              <ul className="space-y-2">
                <li><Link href="/commercial-construction-tampa/" className="text-brand-green hover:underline">Commercial Construction Tampa</Link></li>
                <li><Link href="/commercial-construction-brandon/" className="text-brand-green hover:underline">Commercial Construction Brandon</Link></li>
                <li><Link href="/commercial-construction-bradenton/" className="text-brand-green hover:underline">Commercial Construction Bradenton</Link></li>
                <li><Link href="/commercial-construction-st-petersburg/" className="text-brand-green hover:underline">Commercial Construction St. Petersburg</Link></li>
                <li><Link href="/commercial-construction-lakeland/" className="text-brand-green hover:underline">Commercial Construction Lakeland</Link></li>
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
            Build with Your Local Ruskin Contractor
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists at our Ruskin headquarters. We deliver commercial construction excellence in South County with projects starting at $500,000.
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
