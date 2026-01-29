import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Clock, FileCheck, Users, Thermometer, Wind, Droplets, HardHat, Palmtree } from "lucide-react";
import { BUSINESS_INFO, SERVICES, FAQ_DATABASE } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Construction Sarasota FL | $500K-$25M+ Projects | FCS",
  description: "Premier commercial construction contractor in Sarasota, Florida. Downtown development, medical facilities, hospitality, retail centers, luxury commercial projects. 40+ years experience, 20+ years experience. Prime contractor on all projects. Call (813) 420-7561.",
  keywords: "commercial construction sarasota, commercial contractor sarasota, commercial builder sarasota fl, office building construction sarasota, medical facility construction sarasota, hospitality construction sarasota",
};

const serviceFeatures = [
  {
    title: "Office Buildings & Corporate Facilities",
    description: "From boutique professional offices to multi-story commercial buildings in Downtown Sarasota, University Parkway corridor, and throughout the county's growing business districts."
  },
  {
    title: "Medical & Healthcare Facilities",
    description: "Healthcare construction for clinics, urgent care centers, surgical centers, and specialty practices near Sarasota Memorial Hospital and throughout Sarasota County's expanding healthcare sector."
  },
  {
    title: "Hospitality & Tourism Construction",
    description: "Hotels, resorts, restaurants, and entertainment venues supporting Sarasota's renowned cultural attractions, beaches, and thriving tourism industry."
  },
  {
    title: "Retail Centers & Mixed-Use Developments",
    description: "Ground-up retail construction, tenant improvements, and mixed-use projects in UTC Mall area, St. Armands Circle, and major commercial corridors."
  },
  {
    title: "Luxury Commercial Projects",
    description: "High-end commercial construction befitting Sarasota's affluent market, including upscale retail, private clubs, and premium office space with superior finishes."
  },
  {
    title: "Cultural & Institutional Facilities",
    description: "Construction for museums, performing arts venues, educational facilities, and institutions supporting Sarasota's reputation as Florida's Cultural Coast."
  }
];

// Unique FAQs for Sarasota commercial construction
const sarasotaFaqs = [
  {
    question: "What size commercial construction projects does FCS handle in Sarasota?",
    answer: "Florida Construction Specialists handles commercial construction projects in Sarasota ranging from $500,000 to over $25 million. We specialize in large-scale projects including office buildings in Downtown Sarasota and University Parkway area, medical facilities near Sarasota Memorial Hospital, hospitality venues on the keys, and retail centers throughout Sarasota County. Our 40+ years experience and in-house engineering allows us to take on virtually any commercial project."
  },
  {
    question: "Do you have experience with Sarasota's building codes and permit process?",
    answer: "Yes, we have extensive experience navigating the City of Sarasota Building Department and Sarasota County Building Services. Sarasota requires compliance with the Florida Building Code 2023, with Zone 3 wind requirements (up to 150 mph design wind speed for barrier islands) and strict flood zone regulations for coastal properties. We maintain strong relationships with local building officials to streamline permitting."
  },
  {
    question: "How does Sarasota's coastal location affect commercial construction?",
    answer: "Sarasota's barrier islands and coastal areas present unique construction challenges we specialize in addressing. These include enhanced wind resistance requirements (150 mph design wind speed), flood zone compliance for properties on Siesta Key, Lido Key, and Longboat Key, salt air corrosion protection, and often elevated construction. We have deep expertise in coastal commercial building in the Sarasota market."
  },
  {
    question: "What commercial districts in Sarasota do you serve?",
    answer: "We serve all of Sarasota's major commercial districts including Downtown Sarasota (Main Street and Bayfront), St. Armands Circle, the University Parkway/I-75 corridor, UTC Mall area, Fruitville Road commercial corridor, Siesta Key commercial areas, and Lakewood Ranch (partially in Sarasota County). We also work throughout Sarasota County including North Port, Venice, and Englewood."
  },
  {
    question: "Why should I choose FCS over other Sarasota commercial contractors?",
    answer: "FCS is always the prime contractor on every Sarasota project—we never work as a subcontractor. This means you get direct accountability, a single point of contact, and our full commitment to your project's success. We bring 20+ years of commercial construction experience, 40+ years experience and in-house engineering, and the quality standards that Sarasota's discerning commercial market demands."
  },
  {
    question: "How long does a typical commercial construction project take in Sarasota?",
    answer: "Commercial construction timelines in Sarasota vary based on project scope and complexity. A typical tenant improvement might take 2-4 months, while ground-up commercial construction ranges from 8-18 months. Barrier island projects may require additional time for coastal permits and environmental compliance. We provide detailed schedules accounting for Sarasota-specific factors including seasonal considerations and permit timelines."
  },
  {
    question: "Do you handle hospitality and tourism-related construction in Sarasota?",
    answer: "Yes, hospitality construction is one of our specialties in the Sarasota market. We have experience building and renovating hotels, boutique resorts, restaurants, and entertainment venues. We understand Sarasota's tourism-driven economy and the high standards expected for commercial projects in this affluent market, from Siesta Key beachfront properties to Downtown Sarasota's cultural venues."
  },
  {
    question: "What insurance and bonding do you carry for Sarasota commercial projects?",
    answer: "Florida Construction Specialists maintains comprehensive coverage including general liability insurance, workers' compensation, professional liability, and financial strength to handle projects of virtually any size. We are a fully licensed Florida General Contractor (License #CBC1262722). Our strong financial standing enables us to secure performance and payment bonds for projects of virtually any size in the Sarasota County market."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Commercial Construction", href: "/commercial-construction/" },
  { name: "Sarasota", href: "/commercial-construction-sarasota/" },
];

export default function CommercialConstructionSarasotaPage() {
  return (
    <>
      <LocalBusinessSchema city="Sarasota" service="Commercial Construction" />
      <ServiceSchema
        serviceName="Commercial Construction"
        serviceDescription="Premier commercial construction contractor serving Sarasota, Florida. Office buildings, medical facilities, hospitality, retail centers, luxury commercial projects. Large-scale projects from $500K to $25M+. Always the prime contractor."
        city="Sarasota"
        minPrice="500000"
      />

      <ArticleSchema
        headline="Commercial Construction Sarasota FL | $500K-$25M+ Projects | FCS"
        description="Premier commercial construction contractor in Sarasota, Florida. Downtown development, medical facilities, hospitality, retail centers, luxury commercial projects. 40+ years experience, 20+ years experience. Prime contractor on all projects. Call (813) 420-7561."
        datePublished="2024-06-01"
        dateModified="2025-01-18"
        slug="/commercial-construction-sarasota/"
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
              <span className="text-brand-gold font-semibold">Serving Sarasota, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Commercial Construction in Sarasota, FL
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists delivers large-scale commercial construction throughout Sarasota and Sarasota County. From Downtown Sarasota office buildings to medical facilities near Sarasota Memorial Hospital and hospitality venues on the keys, we bring 20+ years of experience to projects ranging from $500,000 to $25 million.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              As Sarasota's trusted prime contractor, we handle office buildings, medical facilities, hospitality projects, retail centers, and luxury commercial developments—never as a subcontractor, always with full project accountability.
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
                Commercial Construction Services in Sarasota
              </h2>
              <p className="text-gray-600 mb-6">
                Sarasota is known as Florida's Cultural Coast, home to world-class arts institutions, beautiful beaches, and an affluent population exceeding 58,000 in the city proper and 450,000+ in Sarasota County. The region's strong economy is driven by tourism, healthcare, professional services, and a rapidly growing population attracted to its exceptional quality of life.
              </p>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists serves Sarasota's sophisticated commercial construction needs with the expertise, bonding capacity, and attention to quality the market demands. Whether you're building a new medical facility near Sarasota Memorial Hospital, a boutique hotel on Siesta Key, or a professional office building in the University Parkway corridor, we deliver on time and on budget.
              </p>
              <p className="text-gray-600 mb-8">
                As a prime general contractor—never a subcontractor—we maintain full control and accountability on every Sarasota project. Our relationships with local building departments, subcontractors, and suppliers ensure smooth execution from groundbreaking to certificate of occupancy.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-6">
                Our Commercial Construction Capabilities in Sarasota
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
                Discuss Your Sarasota Commercial Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <RelatedServices city="Sarasota" currentService="commercial-construction" />
              <NearbyLocations currentCity="Sarasota" service="commercial-construction" serviceName="Commercial Construction" />

              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark rounded-lg p-6 text-white">
                <h3 className="font-bold text-xl mb-4">Start Your Sarasota Project</h3>
                <p className="text-gray-200 mb-4 text-sm">
                  Contact us for a project consultation. Commercial construction in Sarasota starting at $500,000.
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

      {/* Sarasota Market Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Sarasota's Commercial Construction Landscape
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Downtown Sarasota & Bayfront</h3>
              <p className="text-gray-600 text-sm">
                Downtown Sarasota continues to see significant commercial investment with mixed-use developments, office buildings, and cultural facilities. The Main Street and Palm Avenue corridors attract premium commercial tenants seeking Sarasota's prestigious address.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Healthcare & Medical Hub</h3>
              <p className="text-gray-600 text-sm">
                Sarasota Memorial Hospital, Doctors Hospital, and numerous specialty clinics drive significant demand for medical facility construction. The region's aging population creates ongoing need for healthcare facilities from urgent care to surgical centers.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Palmtree className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Tourism & Hospitality</h3>
              <p className="text-gray-600 text-sm">
                Siesta Key's world-famous beach, St. Armands Circle's upscale shopping, and Sarasota's cultural attractions drive steady demand for hospitality construction. Hotels, restaurants, and entertainment venues require quality construction that matches the area's standards.
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
              Building for Sarasota's Unique Conditions
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
                  Sarasota's Gulf Coast location demands construction methods designed for salt air corrosion, intense UV exposure, and high humidity. We specify marine-grade materials and protective coatings that withstand the coastal environment while maintaining the aesthetic quality Sarasota demands.
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
                  Sarasota's barrier islands require up to 150 mph design wind speed construction. All our commercial buildings meet or exceed Florida Building Code requirements for impact-resistant glazing, enhanced roof tie-downs, and wind-resistant structural systems.
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
                  Properties on Siesta Key, Lido Key, Longboat Key, and coastal Sarasota typically fall within FEMA flood zones VE and AE. We navigate flood zone construction requirements, elevation certificates, and SWFWMD permits to ensure compliance and insurability.
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
                  We maintain strong relationships with the City of Sarasota Building Department and Sarasota County Building Services. Our familiarity with local permit processes, architectural review requirements, and inspection protocols helps minimize delays.
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
            Sarasota Commercial Construction: Costs & Timelines
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
                    <td className="px-6 py-4 text-gray-600">$60-175/SF</td>
                    <td className="px-6 py-4 text-gray-600">2-4 months</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-800">Office Building (Ground-Up)</td>
                    <td className="px-6 py-4 text-gray-600">$225-450/SF</td>
                    <td className="px-6 py-4 text-gray-600">10-16 months</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-800">Medical/Healthcare Facility</td>
                    <td className="px-6 py-4 text-gray-600">$375-600/SF</td>
                    <td className="px-6 py-4 text-gray-600">12-18 months</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-800">Hotel/Hospitality (Barrier Island)</td>
                    <td className="px-6 py-4 text-gray-600">$400-700/SF</td>
                    <td className="px-6 py-4 text-gray-600">14-24 months</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-800">Retail Center</td>
                    <td className="px-6 py-4 text-gray-600">$175-325/SF</td>
                    <td className="px-6 py-4 text-gray-600">8-14 months</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-800">Restaurant Buildout</td>
                    <td className="px-6 py-4 text-gray-600">$225-500/SF</td>
                    <td className="px-6 py-4 text-gray-600">3-6 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Costs and timelines are estimates and vary based on project specifics, site conditions, and finish levels. Sarasota's affluent market often demands premium finishes. Contact us for a detailed estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Our Sarasota Commercial Construction Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Pre-Construction & Planning",
                  description: "We begin with a thorough site evaluation, feasibility analysis, and budget development. For Sarasota projects, this includes flood zone determination, coastal setback analysis, architectural review requirements, and permit pathway planning with City or County officials."
                },
                {
                  step: "2",
                  title: "Design Coordination",
                  description: "Whether working with your architect or providing design-build services, we ensure plans meet Sarasota's building codes, enhanced wind requirements, and the aesthetic standards expected in this quality-conscious market."
                },
                {
                  step: "3",
                  title: "Permitting & Approvals",
                  description: "We manage all permit applications with City of Sarasota Building Department or Sarasota County Building Services, coordinate plan reviews, SWFWMD permits, and handle any architectural review or variance requirements."
                },
                {
                  step: "4",
                  title: "Construction Execution",
                  description: "Our experienced project managers oversee daily construction with strict quality control, safety protocols, and schedule management. We coordinate around seasonal tourism patterns for barrier island projects and maintain the quality standards Sarasota demands."
                },
                {
                  step: "5",
                  title: "Closeout & Turnover",
                  description: "We complete all inspections, obtain certificate of occupancy, and provide comprehensive documentation including warranties, as-builts, flood elevation certificates, and operations manuals for your Sarasota commercial building."
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
            Why Sarasota Businesses Choose FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Always Prime Contractor</h3>
              <p className="text-gray-600">
                We never work as a subcontractor in Sarasota. You get direct accountability, single-point contact, and our full commitment to your project's success from start to finish.
              </p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Quality-Focused Approach</h3>
              <p className="text-gray-600">
                We understand Sarasota's discerning commercial market demands superior quality. Our attention to detail and commitment to excellence matches the standards this affluent community expects.
              </p>
            </div>
            <div className="card text-center p-6">
              <Users className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Local Relationships</h3>
              <p className="text-gray-600">
                Strong relationships with Sarasota building departments, inspectors, subcontractors, and suppliers help ensure smooth permitting and efficient construction execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema items={sarasotaFaqs} title="Commercial Construction in Sarasota - Frequently Asked Questions" />

      {/* Internal Links Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Services & Locations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Commercial Services in Sarasota</h3>
              <ul className="space-y-2">
                <li><Link href="/multi-family-construction-sarasota/" className="text-brand-green hover:underline">Multi-Family Construction Sarasota</Link></li>
                <li><Link href="/disaster-recovery-sarasota/" className="text-brand-green hover:underline">Disaster Recovery Sarasota</Link></li>
                <li><Link href="/historic-restoration-sarasota/" className="text-brand-green hover:underline">Historic Restoration Sarasota</Link></li>
                <li><Link href="/commercial/medical-construction/" className="text-brand-green hover:underline">Medical Construction</Link></li>
                <li><Link href="/commercial/industrial-construction/" className="text-brand-green hover:underline">Industrial Construction</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Commercial Construction Nearby</h3>
              <ul className="space-y-2">
                <li><Link href="/commercial-construction-tampa/" className="text-brand-green hover:underline">Commercial Construction Tampa</Link></li>
                <li><Link href="/commercial-construction-bradenton/" className="text-brand-green hover:underline">Commercial Construction Bradenton</Link></li>
                <li><Link href="/commercial-construction-st-petersburg/" className="text-brand-green hover:underline">Commercial Construction St. Petersburg</Link></li>
                <li><Link href="/commercial-construction-lakeland/" className="text-brand-green hover:underline">Commercial Construction Lakeland</Link></li>
                <li><Link href="/commercial-construction-clearwater/" className="text-brand-green hover:underline">Commercial Construction Clearwater</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Learn More</h3>
              <ul className="space-y-2">
                <li><Link href="/commercial-construction/" className="text-brand-green hover:underline">Commercial Construction Services</Link></li>
                <li><Link href="/locations/sarasota-fl/" className="text-brand-green hover:underline">All Sarasota Services</Link></li>
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
            Start Your Sarasota Commercial Construction Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. We deliver commercial construction excellence in Sarasota with projects starting at $500,000.
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
