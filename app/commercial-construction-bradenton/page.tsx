import Link from "next/link";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Clock, FileCheck, Users, Thermometer, Wind, Droplets, HardHat, Anchor } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Construction Bradenton FL | $500K-$25M+ Projects | FCS",
  description: "Premier commercial construction contractor in Bradenton, Florida. Office buildings, medical facilities, retail centers, waterfront developments. 40+ years experience, 20+ years experience. Prime contractor on all projects. Call (813) 420-7561.",
  keywords: "commercial construction bradenton, commercial contractor bradenton, commercial builder bradenton fl, office building construction bradenton, medical facility construction bradenton",
};

const serviceFeatures = [
  {
    title: "Office Buildings & Professional Spaces",
    description: "From professional office buildings in Downtown Bradenton to corporate facilities along the SR-64 corridor, serving Manatee County's growing business community."
  },
  {
    title: "Medical & Healthcare Facilities",
    description: "Healthcare construction near Manatee Memorial Hospital and Blake Medical Center, including clinics, urgent care centers, and specialty practices."
  },
  {
    title: "Retail Centers & Commercial Plazas",
    description: "Shopping centers, strip malls, and retail developments along Highway 301, Cortez Road, and major commercial corridors."
  },
  {
    title: "Hospitality & Tourism Construction",
    description: "Hotels, restaurants, and entertainment venues supporting Bradenton's tourism industry and proximity to Anna Maria Island."
  },
  {
    title: "Educational & Institutional Buildings",
    description: "Schools, training facilities, and institutional buildings including projects for IMG Academy and local educational institutions."
  },
  {
    title: "Industrial & Warehouse Facilities",
    description: "Distribution centers, manufacturing facilities, and industrial buildings near Port Manatee and along I-75 logistics corridors."
  }
];

const bradentonFaqs = [
  {
    question: "What size commercial construction projects does FCS handle in Bradenton?",
    answer: "Florida Construction Specialists handles commercial construction projects in Bradenton and Manatee County ranging from $500,000 to over $25 million. We specialize in office buildings, medical facilities near Manatee Memorial Hospital, retail centers, and hospitality venues. Our 40+ years experience and in-house engineering allows us to take on virtually any commercial project in the Bradenton area."
  },
  {
    question: "Do you have experience with Bradenton's building codes and permit process?",
    answer: "Yes, we have extensive experience navigating both City of Bradenton and Manatee County permitting processes. Bradenton follows the Florida Building Code with Zone 3 wind requirements. Waterfront projects along the Manatee River require additional flood zone compliance. We maintain strong relationships with the City of Bradenton Building Division, which helps streamline permit approval and inspections."
  },
  {
    question: "How does Bradenton's weather affect commercial construction projects?",
    answer: "Bradenton's Gulf Coast climate presents unique challenges we plan for in every project. The summer rainy season (May-September) brings daily afternoon thunderstorms requiring careful scheduling of concrete pours and exterior work. Manatee River flooding during heavy rains affects waterfront sites. Hurricane season (June-November) requires wind-resistant construction meeting Zone 3 requirements. We build this regional knowledge into project planning to minimize delays."
  },
  {
    question: "What commercial areas in Bradenton do you serve?",
    answer: "We serve all of Bradenton's commercial areas including Downtown Bradenton and the Riverwalk district, the SR-64 (Manatee Avenue) commercial corridor, Highway 301 industrial zone, Cortez Road retail corridor, Lakewood Ranch business parks, and projects near Anna Maria Island. We also serve Palmetto, Ellenton, and Parrish throughout Manatee County."
  },
  {
    question: "Why should I choose FCS over other Bradenton commercial contractors?",
    answer: "FCS is always the prime contractor on every Bradenton project—we never work as a subcontractor. This means you get direct accountability and our full commitment to your project's success. We bring 20+ years of commercial construction experience, 40+ years experience and in-house engineering, and a track record of $25M+ in completed projects throughout Tampa Bay. Our team has deep relationships with Bradenton's building departments and local subcontractors."
  },
  {
    question: "How long does a typical commercial construction project take in Bradenton?",
    answer: "Commercial construction timelines in Bradenton vary based on project scope and complexity. A typical tenant improvement might take 2-4 months, while ground-up commercial construction ranges from 8-18 months depending on size. We provide detailed schedules during pre-construction and account for Bradenton-specific factors like rainy season scheduling, flood zone requirements, and Manatee County permit timelines."
  },
  {
    question: "Do you work on projects near Anna Maria Island?",
    answer: "Yes, we serve the Anna Maria Island area, though the island itself has separate building regulations that are more restrictive. We handle commercial projects in Bradenton Beach, Holmes Beach, and the island gateway areas. Coastal projects require enhanced wind resistance (up to 140 mph design wind speed), flood zone compliance, and marine-grade materials for salt air exposure."
  },
  {
    question: "What insurance and bonding do you carry for Bradenton commercial projects?",
    answer: "Florida Construction Specialists maintains comprehensive coverage including general liability insurance, workers' compensation, professional liability, and financial strength to handle projects of virtually any size. We are a fully licensed Florida General Contractor (License #CBC1262722). Our strong financial standing enables us to secure performance and payment bonds for projects of virtually any size in the Bradenton market."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Commercial Construction", href: "/commercial-construction/" },
  { name: "Bradenton", href: "/commercial-construction-bradenton/" },
];

export default function CommercialConstructionBradentonPage() {
  return (
    <>
      <LocalBusinessSchema city="Bradenton" service="Commercial Construction" />
      <ServiceSchema
        serviceName="Commercial Construction"
        serviceDescription="Premier commercial construction contractor serving Bradenton, Florida. Office buildings, medical facilities, retail centers, waterfront developments. Large-scale projects from $500K to $25M+. Always the prime contractor."
        city="Bradenton"
        minPrice="500000"
      />

      <ArticleSchema
        headline="Commercial Construction Bradenton FL | $500K-$25M+ Projects | FCS"
        description="Premier commercial construction contractor in Bradenton, Florida. Office buildings, medical facilities, retail centers, waterfront developments. 40+ years experience, 20+ years experience. Prime contractor on all projects. Call (813) 420-7561."
        datePublished="2024-06-01"
        dateModified="2025-01-18"
        slug="/commercial-construction-bradenton/"
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
              <span className="text-brand-gold font-semibold">Serving Bradenton & Manatee County</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Commercial Construction in Bradenton, FL
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists delivers large-scale commercial construction throughout Bradenton and Manatee County. From Downtown Bradenton's revitalizing riverfront to medical facilities and retail centers, we bring 20+ years of experience to projects ranging from $500,000 to $25 million.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              As Bradenton's trusted prime contractor, we handle office buildings, medical facilities, retail centers, hospitality venues, and industrial projects—never as a subcontractor, always with full project accountability.
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
                Commercial Construction Services in Bradenton
              </h2>
              <p className="text-gray-600 mb-6">
                Bradenton, the seat of Manatee County, has experienced significant growth and revitalization in recent years. With a population exceeding 60,000 in the city and over 400,000 in Manatee County, the region offers a compelling mix of waterfront appeal, proximity to Tampa Bay, and more affordable commercial development costs compared to neighboring Sarasota.
              </p>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists serves Bradenton's diverse commercial construction needs with the expertise, bonding capacity, and local knowledge required for large-scale projects. Whether you're building a new office complex in Downtown Bradenton, a medical facility near Manatee Memorial Hospital, or a retail center along the Cortez Road corridor, we deliver on time and on budget.
              </p>
              <p className="text-gray-600 mb-8">
                As a prime general contractor—never a subcontractor—we maintain full control and accountability on every Bradenton project. Our relationships with local building departments, subcontractors, and suppliers ensure smooth execution from groundbreaking to certificate of occupancy.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-6">
                Our Commercial Construction Capabilities in Bradenton
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
                Discuss Your Bradenton Commercial Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <RelatedServices city="Bradenton" currentService="commercial-construction" />
              <NearbyLocations currentCity="Bradenton" service="commercial-construction" serviceName="Commercial Construction" />

              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark rounded-lg p-6 text-white">
                <h3 className="font-bold text-xl mb-4">Start Your Bradenton Project</h3>
                <p className="text-gray-200 mb-4 text-sm">
                  Contact us for a project consultation. Commercial construction in Bradenton starting at $500,000.
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

      {/* Bradenton Market Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Bradenton's Commercial Construction Landscape
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Downtown Bradenton Revitalization</h3>
              <p className="text-gray-600 text-sm">
                Downtown Bradenton has undergone significant revitalization with the Riverwalk development, Village of the Arts, and new mixed-use projects. The area attracts commercial investment with its waterfront appeal and growing arts and culture scene.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Healthcare Growth</h3>
              <p className="text-gray-600 text-sm">
                Manatee Memorial Hospital, Blake Medical Center, and numerous specialty clinics anchor the healthcare sector. Manatee County's growing population drives continued demand for medical offices, urgent care facilities, and specialty clinics.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Anchor className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Waterfront & Tourism</h3>
              <p className="text-gray-600 text-sm">
                Anna Maria Island, the Manatee River waterfront, and IMG Academy drive demand for hospitality and tourism construction. The region sees steady investment in hotels, restaurants, marinas, and recreational facilities.
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
              Building for Bradenton's Unique Conditions
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Thermometer className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Coastal Climate Demands</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Bradenton's coastal location along Tampa Bay demands construction methods designed for salt air exposure, intense UV, and high humidity. We specify marine-grade materials and protective coatings that withstand these conditions while meeting Manatee County standards.
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
                  Bradenton coastal areas require up to 140 mph design wind speed construction. All our commercial buildings meet or exceed Florida Building Code requirements for impact-resistant glazing, enhanced roof systems, and wind-resistant structural connections.
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
                  Riverfront and coastal Bradenton properties typically fall within FEMA flood zones AE and VE. We navigate flood zone construction requirements, elevation certificates, and SWFWMD permits to ensure compliance and insurability.
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
                  We maintain strong relationships with the City of Bradenton Building Division and Manatee County Building Department. Our familiarity with local permit processes, plan review requirements, and inspection protocols helps minimize delays.
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
            Bradenton Commercial Construction: Costs & Timelines
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
                    <td className="px-6 py-4 font-medium text-gray-800">Office Building (Ground-Up)</td>
                    <td className="px-6 py-4 text-gray-600">$200-380/SF</td>
                    <td className="px-6 py-4 text-gray-600">10-16 months</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-800">Medical/Healthcare Facility</td>
                    <td className="px-6 py-4 text-gray-600">$325-550/SF</td>
                    <td className="px-6 py-4 text-gray-600">12-18 months</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-800">Retail Center</td>
                    <td className="px-6 py-4 text-gray-600">$150-280/SF</td>
                    <td className="px-6 py-4 text-gray-600">8-14 months</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-800">Industrial/Warehouse</td>
                    <td className="px-6 py-4 text-gray-600">$90-175/SF</td>
                    <td className="px-6 py-4 text-gray-600">6-12 months</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-800">Hospitality/Restaurant</td>
                    <td className="px-6 py-4 text-gray-600">$250-450/SF</td>
                    <td className="px-6 py-4 text-gray-600">8-14 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Costs and timelines are estimates and vary based on project specifics and site conditions. Bradenton often offers lower costs than neighboring Sarasota. Contact us for a detailed estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Our Bradenton Commercial Construction Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Pre-Construction & Planning",
                  description: "We begin with a thorough site evaluation, feasibility analysis, and budget development. For Bradenton projects, this includes flood zone determination, coastal setback analysis, soil testing, and permit pathway planning with City or County officials."
                },
                {
                  step: "2",
                  title: "Design Coordination",
                  description: "Whether working with your architect or providing design-build services, we ensure plans meet Bradenton's building codes, wind requirements, and any downtown design standards while optimizing constructability and budget."
                },
                {
                  step: "3",
                  title: "Permitting & Approvals",
                  description: "We manage all permit applications with City of Bradenton Building Division or Manatee County Building Department, coordinate plan reviews, SWFWMD permits, and handle any required variances or special approvals."
                },
                {
                  step: "4",
                  title: "Construction Execution",
                  description: "Our experienced project managers oversee daily construction with strict quality control, safety protocols, and schedule management. We adjust for Florida's rainy season with strategic scheduling of weather-sensitive work."
                },
                {
                  step: "5",
                  title: "Closeout & Turnover",
                  description: "We complete all inspections, obtain certificate of occupancy, and provide comprehensive documentation including warranties, as-builts, flood elevation certificates, and operations manuals for your Bradenton commercial building."
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
            Why Bradenton Businesses Choose FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Always Prime Contractor</h3>
              <p className="text-gray-600">
                We never work as a subcontractor in Bradenton. You get direct accountability, single-point contact, and our full commitment to your project's success from start to finish.
              </p>
            </div>
            <div className="card text-center p-6">
              <Anchor className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Waterfront Construction Experts</h3>
              <p className="text-gray-600">
                With extensive experience along the Manatee River and coastal Manatee County, we understand the unique challenges of building in flood zones with enhanced wind requirements.
              </p>
            </div>
            <div className="card text-center p-6">
              <Users className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Local Relationships</h3>
              <p className="text-gray-600">
                Strong relationships with Bradenton and Manatee County building departments, inspectors, subcontractors, and suppliers help ensure smooth permitting and efficient construction execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema items={bradentonFaqs} title="Commercial Construction in Bradenton - Frequently Asked Questions" />

      {/* Internal Links Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Services & Locations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Commercial Services in Bradenton</h3>
              <ul className="space-y-2">
                <li><Link href="/multi-family-construction-bradenton/" className="text-brand-green hover:underline">Multi-Family Construction Bradenton</Link></li>
                <li><Link href="/disaster-recovery-bradenton/" className="text-brand-green hover:underline">Disaster Recovery Bradenton</Link></li>
                <li><Link href="/historic-restoration-bradenton/" className="text-brand-green hover:underline">Historic Restoration Bradenton</Link></li>
                <li><Link href="/commercial/medical-construction/" className="text-brand-green hover:underline">Medical Construction</Link></li>
                <li><Link href="/commercial/industrial-construction/" className="text-brand-green hover:underline">Industrial Construction</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Commercial Construction Nearby</h3>
              <ul className="space-y-2">
                <li><Link href="/commercial-construction-tampa/" className="text-brand-green hover:underline">Commercial Construction Tampa</Link></li>
                <li><Link href="/commercial-construction-sarasota/" className="text-brand-green hover:underline">Commercial Construction Sarasota</Link></li>
                <li><Link href="/commercial-construction-st-petersburg/" className="text-brand-green hover:underline">Commercial Construction St. Petersburg</Link></li>
                <li><Link href="/commercial-construction-ruskin/" className="text-brand-green hover:underline">Commercial Construction Ruskin</Link></li>
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
            Start Your Bradenton Commercial Construction Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. We deliver commercial construction excellence in Bradenton with projects starting at $500,000.
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
