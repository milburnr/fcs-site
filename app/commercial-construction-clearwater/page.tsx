import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Building2, Shield, Award, Clock, CheckCircle, Phone, ArrowRight, MapPin, Briefcase, HardHat, FileCheck, Users, Thermometer, Wind, Droplets } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { HighLevelForm } from "@/components/HighLevelForm";
import { GoogleMap } from "@/components/GoogleMap";
import { InternalLinks, RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Commercial Construction in Clearwater",
  description: "Clearwater's premier commercial contractor for $500K-$25M+ projects. Design-build, medical, multi-family, industrial construction. 40+ years experience. Call (813) 420-7561.",
  keywords: [
    "commercial construction clearwater",
    "commercial contractor clearwater",
    "commercial building clearwater",
    "clearwater commercial construction company",
    "design-build clearwater",
    "commercial general contractor clearwater fl",
  ],
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Commercial Construction", href: "/services/commercial/" },
  { name: "Clearwater", href: "/commercial-construction-clearwater/" },
];

const clearwaterFaqs = [
  {
    question: "What types of commercial construction projects do you handle in Clearwater?",
    answer: "Florida Construction Specialists handles a comprehensive range of commercial construction projects in Clearwater including design-build construction, medical and healthcare facilities, multi-family developments, industrial and warehouse buildings, tenant improvements, retail construction, and hospitality projects serving Clearwater Beach's thriving tourism industry. Our projects typically range from $500,000 to $25 million or more."
  },
  {
    question: "Do you have experience with Clearwater's permitting process through Pinellas County?",
    answer: "Yes, we have extensive experience navigating Clearwater's permitting requirements through Pinellas County Building Services and the City of Clearwater. We understand local zoning codes, coastal construction regulations, flood zone requirements, and the specific permitting processes for commercial construction in areas like Downtown Clearwater, the US 19 commercial corridor, and the Clearwater Beach tourism district."
  },
  {
    question: "What is your bonding capacity for Clearwater commercial projects?",
    answer: "Florida Construction Specialists maintains bonding capacity exceeding $10 million, which allows us to take on large-scale commercial projects that many contractors cannot. This financial strength, combined with our License CBC1262722, gives Clearwater property owners confidence in our ability to complete substantial projects including major hospitality and healthcare developments."
  },
  {
    question: "Do you build hospitality and tourism-related projects in Clearwater Beach?",
    answer: "Absolutely. Clearwater Beach is consistently ranked among America's best beaches, driving significant hospitality construction demand. We handle hotel renovations, restaurant buildouts, resort amenity construction, retail spaces, and mixed-use tourism developments. We understand the unique challenges of construction in high-traffic tourism areas, including working around seasonal peaks and coordinating with beach access requirements."
  },
  {
    question: "Can you handle medical facility construction near Morton Plant Hospital?",
    answer: "Yes, medical and healthcare construction is one of our core specialties. We have extensive experience with AHCA-compliant medical construction including medical office buildings, surgical centers, specialty clinics, and healthcare facilities. We understand the Clearwater healthcare corridor around Morton Plant Mease and the specialized requirements for medical construction including infection control, specialized MEP systems, and regulatory compliance."
  },
  {
    question: "Do you provide design-build services in Clearwater?",
    answer: "Yes, design-build is one of our core service offerings for Clearwater commercial clients. This single-source approach streamlines communication, accelerates project delivery, and provides clear accountability. We coordinate architects, engineers, and construction teams under one contract, which is particularly valuable for projects in Clearwater's competitive commercial market where speed to occupancy matters."
  },
  {
    question: "What areas of Clearwater do you serve for commercial construction?",
    answer: "We serve all of Clearwater including Downtown Clearwater, Clearwater Beach, the US 19 commercial corridor, the Countryside area, East Clearwater, and the Clearwater Mall district. Our Ruskin headquarters positions us centrally to serve Pinellas County efficiently, and we maintain strong relationships with local subcontractors throughout Clearwater."
  },
  {
    question: "How do you handle commercial construction in Clearwater's coastal flood zones?",
    answer: "Clearwater's coastal location requires specialized knowledge of FEMA flood zone construction requirements, including elevated construction, flood-resistant materials, and proper venting for areas below base flood elevation. We're experienced with both VE and AE flood zones common in Clearwater and ensure all commercial projects meet or exceed flood plain management requirements."
  },
  {
    question: "Do you work on retail and commercial projects along US 19 in Clearwater?",
    answer: "Yes, the US 19 corridor is one of Clearwater's most active commercial construction areas. We handle retail centers, shopping plaza renovations, restaurant construction, automotive facilities, and commercial office buildings along this major thoroughfare. We understand the corridor's specific requirements including FDOT access considerations and the competitive retail environment."
  },
  {
    question: "What makes Florida Construction Specialists different from other Clearwater commercial contractors?",
    answer: "Three key differentiators set us apart in the Clearwater market: First, we only work as a prime contractor—never subcontracting our general contracting services—which means direct accountability on every project. Second, our 40+ years experience and in-house engineering enables large-scale projects that many local contractors cannot handle. Third, our principal brings 43+ years of construction and insurance industry experience, including work as an Executive General Adjuster, providing unique expertise for risk management and coastal construction challenges."
  },
];

const pillarLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/services/commercial/medical-construction/", label: "Medical & Healthcare Facilities" },
  { href: "/services/commercial/multi-family/", label: "Multi-Family Construction" },
];

const nearbyLocationLinks = [
  { href: "/commercial-construction-tampa/", label: "Tampa, FL" },
  { href: "/commercial-construction-st-petersburg/", label: "St. Petersburg, FL" },
  { href: "/locations/sarasota-fl/", label: "Sarasota, FL" },
  { href: "/locations/lakeland-fl/", label: "Lakeland, FL" },
];

const serviceFeatures = [
  {
    title: "Design-Build Construction",
    description: "Single-source accountability from concept to completion. We coordinate architects, engineers, and construction teams under one contract for streamlined delivery."
  },
  {
    title: "Hospitality & Tourism",
    description: "Hotels, resorts, restaurants, and entertainment venues for Clearwater Beach's vibrant tourism industry. We understand beach-area construction requirements."
  },
  {
    title: "Healthcare Facilities",
    description: "Medical office buildings, surgical centers, and specialty clinics meeting AHCA compliance requirements and healthcare construction standards."
  },
  {
    title: "Retail & Commercial",
    description: "Shopping centers, standalone retail, office buildings, and mixed-use developments throughout the US-19 corridor and greater Clearwater."
  },
  {
    title: "Multi-Family Development",
    description: "Condominiums, apartments, and townhome communities with expertise in coastal construction and flood zone requirements."
  },
  {
    title: "Industrial & Warehouse",
    description: "Distribution centers, flex space, and light manufacturing facilities for Clearwater's growing industrial sector."
  },
];

export default function CommercialConstructionClearwaterPage() {
  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema city="Clearwater" service="Commercial Construction" />
      <ServiceSchema
        serviceName="Commercial Construction in Clearwater"
        serviceDescription="Large-scale commercial construction services in Clearwater, FL. Design-build, medical facilities, multi-family, industrial, hospitality, and retail construction from $500K to $25M+."
        city="Clearwater"
        minPrice="500000"
      />
      <FAQSchema faqs={clearwaterFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Commercial construction project in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span className="text-sm font-medium">Serving Clearwater, FL</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight">
                Commercial Construction in Clearwater, Florida
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Florida Construction Specialists is Clearwater's trusted commercial contractor for projects ranging from $500K to $25M+. From Clearwater Beach's world-renowned hospitality district to the thriving US 19 commercial corridor, we deliver exceptional commercial construction with 40+ years experience and in-house engineering and decades of Pinellas County expertise.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                  <p className="text-sm font-semibold">Licensed</p>
                  <p className="text-xs text-gray-300">{BUSINESS_INFO.licenseNumber}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Award className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                  <p className="text-sm font-semibold">Bonding</p>
                  <p className="text-xs text-gray-300">$10M+ Capacity</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                  <p className="text-sm font-semibold">Experience</p>
                  <p className="text-xs text-gray-300">{BUSINESS_INFO.yearsInBusiness}+ Years</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Building2 className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                  <p className="text-sm font-semibold">Projects</p>
                  <p className="text-xs text-gray-300">{BUSINESS_INFO.projectsCompleted}+ Delivered</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Schedule Project Consultation
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Request a Clearwater Project Consultation
              </h2>
              <p className="text-gray-600 mb-6">
                Tell us about your commercial project in Clearwater and receive a consultation from our team.
              </p>
              <HighLevelForm variant="commercial" />
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
                Commercial Construction Services in Clearwater
              </h2>
              <p className="text-gray-600 mb-6">
                Clearwater is home to over 115,000 residents and one of Florida's most famous tourism destinations—Clearwater Beach, consistently ranked among America's top beaches. The city's economy benefits from a diverse mix of tourism, healthcare, retail, and professional services, creating strong demand for quality commercial construction across multiple sectors.
              </p>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists serves Clearwater's diverse commercial construction needs with the expertise, bonding capacity, and local knowledge required for large-scale projects. Whether you're building a new hotel on Clearwater Beach, a medical facility near Morton Plant Hospital, or a retail center along the busy US-19 corridor, we deliver on time and on budget.
              </p>
              <p className="text-gray-600 mb-8">
                As a prime general contractor—never a subcontractor—we maintain full control and accountability on every Clearwater project. Our relationships with local building departments, subcontractors, and suppliers ensure smooth execution from groundbreaking to certificate of occupancy.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-6">
                Our Commercial Construction Capabilities in Clearwater
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
                Discuss Your Clearwater Commercial Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <RelatedServices city="Clearwater" currentService="commercial-construction" />
              <NearbyLocations currentCity="Clearwater" service="commercial-construction" serviceName="Commercial Construction" />

              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark rounded-lg p-6 text-white">
                <h3 className="font-bold text-xl mb-4">Start Your Clearwater Project</h3>
                <p className="text-gray-200 mb-4 text-sm">
                  Contact us for a project consultation. Commercial construction in Clearwater starting at $500,000.
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

      {/* Clearwater Market Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Clearwater's Commercial Construction Landscape
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Clearwater Beach & Hospitality</h3>
              <p className="text-gray-600 text-sm">
                Clearwater Beach welcomes millions of visitors annually, driving continuous demand for hotel construction, restaurant buildouts, and entertainment venues. We specialize in hospitality construction that meets the area's demanding coastal building requirements.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">US-19 Commercial Corridor</h3>
              <p className="text-gray-600 text-sm">
                US Highway 19 through Clearwater is one of Tampa Bay's busiest commercial corridors, featuring major retail centers, office parks, and service businesses. We've completed numerous projects along this high-traffic commercial strip.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Healthcare Hub</h3>
              <p className="text-gray-600 text-sm">
                Morton Plant Hospital anchors Clearwater's healthcare sector, with numerous medical offices, urgent care facilities, and specialty clinics throughout the area. We deliver healthcare construction that meets stringent regulatory requirements.
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
              Building for Clearwater's Unique Conditions
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Thermometer className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Coastal Climate Challenges</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Clearwater's Gulf Coast location demands construction methods designed for salt air corrosion, intense UV exposure, and high humidity (75-85% year-round). We specify marine-grade materials and protective systems that withstand these harsh coastal conditions.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Wind className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Enhanced Wind Resistance</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Clearwater Beach and barrier island construction requires up to 150 mph design wind speed. All our commercial construction meets or exceeds Florida Building Code requirements for impact-resistant glazing, enhanced roof systems, and wind-resistant structural connections.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Flood Zone Construction</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Most Clearwater Beach commercial properties fall within FEMA flood zones VE and AE. We navigate flood zone construction requirements, elevation certificates, breakaway wall requirements, and SWFWMD stormwater permits to ensure compliance.
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
                  We maintain strong relationships with the City of Clearwater Development Services Department and Pinellas County Building Department. Our familiarity with local processes, coastal zone requirements, and inspection protocols helps minimize permit delays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Ready to Build in Clearwater?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. We'll discuss your Clearwater commercial construction needs and provide preliminary budgeting.
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
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Our Clearwater Construction Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven approach tailored for Clearwater's commercial construction environment and Pinellas County requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Pre-Construction",
                description: "We assess your Clearwater project requirements, conduct site analysis including flood zone evaluation, and develop preliminary budgets and schedules specific to Pinellas County's market conditions.",
                icon: FileCheck,
              },
              {
                step: "02",
                title: "Design Coordination",
                description: "Whether design-build or design-bid-build, we coordinate all design elements ensuring constructability and compliance with Clearwater's building codes, coastal requirements, and zoning regulations.",
                icon: Building2,
              },
              {
                step: "03",
                title: "Clearwater Permitting",
                description: "We navigate the City of Clearwater and Pinellas County Building Services, securing all required permits, approvals, and inspections to keep your project on schedule.",
                icon: Briefcase,
              },
              {
                step: "04",
                title: "Construction Execution",
                description: "Experienced superintendents manage daily construction with Clearwater-area subcontractors who understand local conditions, coastal construction requirements, and quality expectations.",
                icon: HardHat,
              },
              {
                step: "05",
                title: "Quality Control",
                description: "Rigorous quality control ensures your Clearwater project meets specifications, flood zone requirements, hurricane codes, and our high standards—documented at every phase.",
                icon: CheckCircle,
              },
              {
                step: "06",
                title: "Completion & Warranty",
                description: "Thorough closeout including punch list resolution, Certificate of Occupancy, training, and comprehensive warranty documentation for your Clearwater property.",
                icon: Award,
              },
            ].map((item) => (
              <div key={item.step} className="relative bg-gray-50 rounded-xl p-6">
                <div className="absolute -top-4 left-6 bg-brand-green text-white text-sm font-bold px-3 py-1 rounded-full">
                  Step {item.step}
                </div>
                <div className="mt-4">
                  <item.icon className="w-10 h-10 text-brand-green mb-4" />
                  <h3 className="text-xl font-bold text-brand-green-dark mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost/Timeline Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Clearwater Commercial Construction: Costs & Timelines
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
                    <td className="px-6 py-4 text-gray-600">$50-150/SF</td>
                    <td className="px-6 py-4 text-gray-600">2-4 months</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-800">Office Building (Ground-Up)</td>
                    <td className="px-6 py-4 text-gray-600">$200-400/SF</td>
                    <td className="px-6 py-4 text-gray-600">10-16 months</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-800">Hotel/Hospitality (Beach Area)</td>
                    <td className="px-6 py-4 text-gray-600">$350-600/SF</td>
                    <td className="px-6 py-4 text-gray-600">14-24 months</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-800">Medical/Healthcare Facility</td>
                    <td className="px-6 py-4 text-gray-600">$350-550/SF</td>
                    <td className="px-6 py-4 text-gray-600">12-18 months</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-800">Retail Center (US-19 Corridor)</td>
                    <td className="px-6 py-4 text-gray-600">$150-300/SF</td>
                    <td className="px-6 py-4 text-gray-600">8-14 months</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-800">Restaurant Buildout</td>
                    <td className="px-6 py-4 text-gray-600">$200-450/SF</td>
                    <td className="px-6 py-4 text-gray-600">3-6 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Costs and timelines are estimates and vary based on project specifics, site conditions, and coastal requirements. Beach-area projects typically command premium pricing. Contact us for a detailed estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose FCS */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Clearwater Businesses Choose FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Always Prime Contractor</h3>
              <p className="text-gray-600">
                We never work as a subcontractor in Clearwater. You get direct accountability, single-point contact, and our full commitment to your project's success from start to finish.
              </p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Coastal Construction Experts</h3>
              <p className="text-gray-600">
                With extensive experience in Clearwater Beach and coastal Pinellas County, we understand the unique challenges of building in flood zones with enhanced wind requirements.
              </p>
            </div>
            <div className="card text-center p-6">
              <Users className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Local Relationships</h3>
              <p className="text-gray-600">
                Strong relationships with Clearwater building departments, inspectors, subcontractors, and suppliers help ensure smooth permitting and efficient construction execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-light">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Serving Commercial Construction Throughout Clearwater
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From our Ruskin headquarters, we serve all of Clearwater and Pinellas County for commercial construction projects.
            </p>
          </div>
          <GoogleMap city="Clearwater" height={400} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
                Clearwater Commercial Construction FAQ
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about commercial construction in Clearwater, Florida.
              </p>
            </div>

            <FAQWithSchema items={clearwaterFaqs} />
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="section-light">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Commercial Services"
            links={pillarLinks}
          />

          <div className="mt-12">
            <InternalLinks
              title="Nearby Service Areas"
              links={nearbyLocationLinks}
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                Start Your Clearwater Commercial Project Today
              </h2>
              <p className="text-xl text-gray-200 mb-6">
                Contact Florida Construction Specialists for a consultation on your Clearwater commercial construction project. Our team will discuss your vision, provide preliminary budgeting, and outline the path to successful project delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-green-dark font-bold rounded-full hover:bg-brand-gold-light transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call {BUSINESS_INFO.phone}
                </a>
                <Link href="/contact/" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all">
                  Contact Us Online
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm text-gray-300 mb-4">Clearwater's trusted commercial contractor:</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-200">
                  <span>License {BUSINESS_INFO.licenseNumber}</span>
                  <span>In-House Engineering</span>
                  <span>{BUSINESS_INFO.yearsInBusiness}+ Years Experience</span>
                  <span>{BUSINESS_INFO.projectsCompleted}+ Projects</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Schedule Your Consultation
              </h3>
              <HighLevelForm variant="commercial" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
