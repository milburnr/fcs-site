import Link from "next/link";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Droplets, Layers, Wrench, Clock, Home, Factory, DollarSign, Users, Waves, Sun, Wind, Building } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import { GoogleMap } from "@/components/GoogleMap";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "Exterior Waterproofing in Clearwater",
  description: `Clearwater exterior waterproofing for commercial buildings, condominiums, and multi-family properties. Building envelope protection, moisture barriers, foundation waterproofing. $100K+ projects. Call ${BUSINESS_INFO.phone}.`,
  keywords: "exterior waterproofing Clearwater, building envelope Clearwater, foundation waterproofing Clearwater, commercial waterproofing Clearwater, condo waterproofing Clearwater, moisture barrier Clearwater",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Residential", href: "/services/residential/" },
  { name: "Exterior Waterproofing", href: "/services/residential/exterior-waterproofing/" },
  { name: "Clearwater", href: "/exterior-waterproofing-clearwater/" },
];

const serviceTypes = [
  {
    type: "Foundation Waterproofing",
    description: "Comprehensive below-grade waterproofing systems for Clearwater's high water table environment. Positive-side membrane applications, drainage boards, and hydrostatic pressure management for commercial and multi-family foundations.",
    icon: Layers,
  },
  {
    type: "Building Envelope Protection",
    description: "Complete exterior wall waterproofing including curtain wall systems, window and door flashings, expansion joints, and penetration sealing designed for Gulf Coast salt air and wind-driven rain exposure.",
    icon: Building2,
  },
  {
    type: "Below-Grade Waterproofing",
    description: "Specialized waterproofing for basement parking structures, underground mechanical rooms, and below-grade storage areas in Clearwater's challenging coastal soil and groundwater conditions.",
    icon: Factory,
  },
  {
    type: "Moisture Barrier Installation",
    description: "Advanced vapor and moisture barrier systems preventing humidity migration through building assemblies, essential for Clearwater's 75%+ average humidity and tropical moisture loads.",
    icon: Droplets,
  },
  {
    type: "Drainage Solutions",
    description: "Engineered drainage systems including French drains, sump systems, and perimeter drainage to manage Clearwater's 52+ inches of annual rainfall and seasonal flooding conditions.",
    icon: Waves,
  },
  {
    type: "Stucco & Facade Restoration",
    description: "Building envelope restoration including stucco repair, elastomeric coating systems, and weatherproofing treatments for deteriorated exterior finishes on Clearwater's aging commercial buildings.",
    icon: Building,
  },
];

const clearwaterFaqs = [
  {
    question: "Why is exterior waterproofing critical for Clearwater commercial buildings?",
    answer: "Clearwater's unique position on a barrier island creates the most demanding waterproofing conditions in Florida. Direct Gulf exposure means constant salt spray attack on building materials, while the tropical climate delivers 52+ inches of annual rainfall, often in intense storms. High humidity (averaging 75%) promotes moisture migration into building assemblies. Hurricane-force winds drive rain horizontally into facades. Without comprehensive waterproofing, Clearwater buildings experience accelerated concrete deterioration, reinforcing steel corrosion, mold proliferation, and structural degradation. For commercial buildings and condominiums, proper exterior waterproofing isn't optional—it's essential for protecting multi-million dollar investments.",
  },
  {
    question: "What Clearwater neighborhoods and building types do you serve for exterior waterproofing?",
    answer: "Florida Construction Specialists provides exterior waterproofing throughout Clearwater including Clearwater Beach, Sand Key, Island Estates, Downtown Clearwater, Countryside, Harbor Oaks, Belleair Bluffs, Dunedin, and Safety Harbor. We specialize in large-scale projects for commercial buildings, condominium associations, multi-family apartment complexes, hospitality properties, medical facilities, and retail centers. Our minimum project size is $100,000, allowing us to focus on comprehensive waterproofing solutions for buildings requiring professional-grade protection.",
  },
  {
    question: "How much does commercial exterior waterproofing cost in Clearwater?",
    answer: "Commercial exterior waterproofing in Clearwater typically ranges from $100,000 to several million dollars depending on building size, scope, and existing conditions. Foundation waterproofing runs $15-35 per square foot for below-grade applications. Building envelope waterproofing costs $8-20 per square foot for wall systems. Parking structure waterproofing ranges from $20-45 per square foot for traffic-bearing systems. Clearwater's beachfront properties typically require premium marine-grade systems at 20-30% additional cost. FCS provides detailed assessments and competitive proposals for qualified projects.",
  },
  {
    question: "What waterproofing systems work best for Clearwater's coastal environment?",
    answer: "Clearwater's extreme coastal conditions require marine-grade waterproofing systems. For foundations, we specify high-performance polyurethane or modified bitumen membranes with enhanced salt resistance. Building envelopes receive fluid-applied silicone or polyurethane coatings rated for UV stability and salt exposure. Below-grade applications use crystalline waterproofing technology that self-heals in the presence of moisture. We work with manufacturers including Tremco, Carlisle, Sika, BASF, and Neogard who offer extended warranties for coastal installations. All systems are selected for Clearwater's specific combination of salt, UV, humidity, and storm exposure.",
  },
  {
    question: "How does Clearwater's high water table affect foundation waterproofing?",
    answer: "Clearwater's water table sits 2-6 feet below grade in many areas, rising significantly during wet season and storm events. This creates continuous hydrostatic pressure against below-grade structures. Sandy barrier island soils provide poor drainage in clay lens areas while allowing water migration in others. FCS addresses these conditions with engineered solutions: positive-side waterproofing membranes rated for continuous water exposure, drainage boards that direct water to collection systems, properly designed French drain networks, and sump pump systems with backup power. Foundation waterproofing in Clearwater must be designed as a complete water management system, not just a barrier.",
  },
  {
    question: "Do you waterproof Clearwater Beach condominiums?",
    answer: "Yes, condominium waterproofing is a core specialty for FCS. Clearwater Beach condos face extreme exposure conditions that accelerate deterioration. We work extensively with HOAs and condominium associations on comprehensive waterproofing projects including building envelope restoration, balcony waterproofing, parking structure protection, and common area moisture remediation. We understand Florida's SB4D milestone inspection requirements and frequently address waterproofing findings in structural inspection reports. Our team coordinates with property managers to minimize resident disruption during multi-month projects.",
  },
  {
    question: "What causes waterproofing failures on Clearwater buildings?",
    answer: "Waterproofing failures in Clearwater result from multiple factors: original construction with inadequate waterproofing systems, normal aging of materials in harsh coastal conditions, deferred maintenance allowing minor issues to become major failures, storm damage overwhelming existing protection, and improper previous repairs. Salt crystallization within concrete causes spalling and membrane separation. UV degradation breaks down elastomeric coatings. Thermal cycling causes cracking at joints and transitions. Wind-driven rain exploits any gap in protection. FCS begins every project with thorough diagnostics to identify failure causes before specifying appropriate remediation.",
  },
  {
    question: "How long does exterior waterproofing last in Clearwater's climate?",
    answer: "Properly installed exterior waterproofing in Clearwater's demanding environment typically provides 15-25 years of protection depending on the system, application, and maintenance. Foundation waterproofing membranes can last 25+ years when properly installed and protected. Building envelope coatings typically require maintenance or recoating every 10-15 years. Traffic-bearing systems in parking structures may need wearing surface renewal every 7-10 years. FCS provides 10-year workmanship warranties backed by manufacturer material warranties. We also offer maintenance programs designed specifically for coastal properties to maximize system longevity.",
  },
  {
    question: "Can you waterproof historic buildings in Clearwater?",
    answer: "Yes, FCS has extensive experience waterproofing historic and older buildings in Clearwater. Historic structures require specialized approaches that protect the building without damaging historic materials or violating preservation standards. We use breathable waterproofing products on historic masonry, reversible treatments where required, and carefully selected products compatible with lime mortars and soft brick. Our experience includes coordination with local historic preservation requirements and the State Historic Preservation Office (SHPO) when applicable.",
  },
  {
    question: "What is your exterior waterproofing process for Clearwater buildings?",
    answer: "Our process begins with comprehensive assessment including visual inspection, moisture testing, infrared thermography, and destructive testing where necessary to identify water entry points and substrate conditions. We then develop detailed specifications selecting appropriate systems for each building area and exposure condition. Surface preparation includes cleaning, salt removal, crack repair, and concrete restoration as needed. Waterproofing installation follows manufacturer specifications with attention to transitions, penetrations, and details. Quality assurance includes flood testing, adhesion testing, and thorough documentation. We provide complete project records for warranty purposes and future reference.",
  },
];

const costData = [
  { application: "Foundation Waterproofing", range: "$15 - $35/SF", timeline: "4-12 weeks", warranty: "10 years" },
  { application: "Building Envelope (Walls)", range: "$8 - $20/SF", timeline: "6-16 weeks", warranty: "10 years" },
  { application: "Below-Grade/Parking", range: "$20 - $45/SF", timeline: "8-20 weeks", warranty: "10 years" },
  { application: "Plaza/Terrace Decks", range: "$18 - $35/SF", timeline: "4-10 weeks", warranty: "10 years" },
  { application: "Complete Building Projects", range: "$100,000 - $5M+", timeline: "3-18 months", warranty: "10 years" },
  { application: "Emergency Remediation", range: "$150,000+", timeline: "Varies", warranty: "5-10 years" },
];

const processSteps = [
  { step: 1, title: "Comprehensive Assessment", description: "Building survey, moisture testing, infrared thermography, core sampling, and detailed condition documentation with specific attention to Clearwater's coastal exposure factors" },
  { step: 2, title: "Engineering & Specification", description: "Waterproofing system design with marine-grade materials selected for Gulf Coast exposure, detailed drawings, and comprehensive project budgeting" },
  { step: 3, title: "Surface Preparation", description: "Substrate cleaning, salt and chloride removal, crack injection, concrete restoration, and surface profiling for optimal membrane adhesion" },
  { step: 4, title: "Waterproofing Installation", description: "Application of primers, membranes, flashings, and drainage systems using coastal-rated materials per manufacturer specifications with quality checkpoints" },
  { step: 5, title: "Quality Assurance Testing", description: "Flood testing, adhesion pull testing, holiday testing for membrane continuity, and inspection documentation for warranty compliance" },
  { step: 6, title: "Protection & Commissioning", description: "Installation of protection courses, drainage boards, and wear surfaces; comprehensive warranty documentation and coastal maintenance guidance" },
];

const climateFactors = [
  {
    icon: Sun,
    title: "Intense UV Exposure",
    description: "Clearwater averages 244 sunny days per year, subjecting exposed waterproofing to extreme ultraviolet degradation. Our systems use UV-stable formulations rated for maximum solar exposure.",
  },
  {
    icon: Droplets,
    title: "Heavy Rainfall",
    description: "52+ inches of annual rainfall, often delivered in intense afternoon thunderstorms that test drainage systems and building envelopes. Hurricane events can deliver 10-20 inches in 24-48 hours.",
  },
  {
    icon: Waves,
    title: "Salt Air Corrosion",
    description: "Barrier island location means constant salt spray exposure from Gulf winds. Salt accelerates concrete deterioration and promotes reinforcing steel corrosion throughout building structures.",
  },
  {
    icon: Wind,
    title: "Hurricane-Force Winds",
    description: "Clearwater sits in a high-velocity hurricane zone. Wind-driven rain during tropical storms creates extreme pressure differentials that force water through any gap in building envelopes.",
  },
];

export default function ExteriorWaterproofingClearwaterPage() {
  return (
    <>
      <LocalBusinessSchema city="Clearwater" service="Exterior Waterproofing" />
      <ServiceSchema
        serviceName="Exterior Waterproofing"
        serviceDescription="Professional exterior waterproofing services for Clearwater commercial buildings, condominiums, and multi-family properties. Building envelope protection, foundation waterproofing, below-grade systems, and moisture barriers for $100K+ projects."
        city="Clearwater"
        minPrice="100000"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Exterior Waterproofing Services in Clearwater, FL"
        description="Comprehensive exterior waterproofing for Clearwater commercial buildings and condominiums. Foundation waterproofing, building envelope protection, moisture barriers, and drainage solutions for coastal properties."
        datePublished="2024-01-15"
        dateModified="2025-01-20"
        slug="/exterior-waterproofing-clearwater/"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/FCS-Exterior-Waterproofing/fcs-exterior-waterproofing-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Clearwater, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Exterior Waterproofing in Clearwater
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Protect your Clearwater commercial building from Gulf Coast salt spray, intense rainfall, and tropical humidity. Professional building envelope protection, foundation waterproofing, and moisture barrier systems for projects $100,000 and above. 10-year warranty on all installations.
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
              <DollarSign className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">$100K+ Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">In-House Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">10-Year Warranty</span>
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
                Clearwater's Exterior Waterproofing Experts for Commercial and Multi-Family Buildings
              </h2>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists provides comprehensive exterior waterproofing services for Clearwater's commercial, multi-family, and institutional buildings. Located on a barrier island directly facing the Gulf of Mexico, Clearwater properties experience Florida's most demanding waterproofing conditions: direct salt spray, intense ultraviolet exposure, hurricane-force weather events, and some of the highest humidity levels in the continental United States.
              </p>

              <p className="text-gray-600 mb-6">
                From luxury high-rise condominiums along Clearwater Beach and Sand Key to commercial office buildings in Downtown Clearwater, hospitality properties serving the tourism industry, and medical facilities throughout the community, FCS has protected Clearwater buildings with premium waterproofing systems engineered specifically for Gulf Coast conditions. Our focus on projects $100,000 and above allows us to deliver comprehensive solutions that address the full building envelope rather than piecemeal repairs.
              </p>

              <p className="text-gray-600 mb-6">
                Clearwater's building stock faces accelerated deterioration compared to inland properties. The combination of salt-laden air, intense solar radiation, frequent intense rainfall events, and high humidity creates a uniquely challenging environment. Buildings constructed 20-40 years ago with standard waterproofing systems are now showing significant distress. Condominium associations throughout Clearwater Beach and Sand Key are addressing waterproofing deficiencies identified in Florida's mandatory milestone inspections. FCS provides the expertise and capacity to execute large-scale waterproofing projects that protect these valuable assets.
              </p>

              <div className="bg-brand-green/10 border-l-4 border-brand-green p-6 mb-8">
                <h3 className="font-bold text-brand-green-dark mb-2">Project Focus: $100K+ Waterproofing Projects</h3>
                <p className="text-gray-700">
                  FCS specializes in substantial exterior waterproofing projects for commercial buildings, condominiums, and multi-family properties. Our minimum project size of $100,000 reflects our focus on comprehensive solutions that address complete building systems rather than temporary repairs. This scale allows us to engineer lasting protection for Clearwater's demanding coastal environment.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-4 mt-8">
                Exterior Waterproofing Services for Clearwater Properties
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
                Clearwater's Coastal Climate: The Case for Professional Waterproofing
              </h3>

              <p className="text-gray-600 mb-6">
                Clearwater's barrier island position creates waterproofing challenges unmatched elsewhere in Tampa Bay. Understanding these conditions explains why professional-grade waterproofing systems are essential for commercial and multi-family buildings in this area.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {climateFactors.map((factor) => (
                  <div key={factor.title} className="flex items-start gap-3">
                    <factor.icon className="w-6 h-6 text-brand-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-brand-green-dark mb-1">{factor.title}</h4>
                      <p className="text-gray-600 text-sm">{factor.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">
                Who We Serve: Target Audience for Clearwater Waterproofing
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Commercial Building Owners:</strong> Office buildings, retail centers, medical facilities, and hospitality properties requiring comprehensive building envelope protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Condominium Associations:</strong> HOAs and condo boards addressing waterproofing requirements identified in milestone inspections or proactively protecting building value</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Waterfront Property Owners:</strong> Buildings with direct Gulf exposure requiring marine-grade waterproofing systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Property Managers:</strong> Professionals managing commercial portfolios and multi-family properties needing reliable waterproofing partners</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Developers:</strong> New construction projects requiring properly engineered waterproofing from the start</span>
                </li>
              </ul>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Clearwater Waterproofing Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Request Assessment</h3>
                <p className="text-gray-200 mb-4">
                  Schedule a complimentary waterproofing assessment for your Clearwater commercial property or condominium.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-6 rounded-full hover:bg-brand-gold-light transition-colors w-full mb-4"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
                <Link
                  href="/contact/"
                  className="flex items-center justify-center gap-2 bg-white/10 text-white font-bold py-3 px-6 rounded-full hover:bg-white/20 transition-colors w-full"
                >
                  Request Consultation
                </Link>
              </div>

              {/* Google Map */}
              <div className="rounded-lg overflow-hidden">
                <h3 className="font-bold text-brand-green-dark mb-3">Serving Clearwater, FL</h3>
                <GoogleMap city="Clearwater" height={250} />
              </div>

              {/* Internal Links */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-brand-green-dark mb-4">Related Services</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/services/residential/exterior-waterproofing/" className="text-brand-green hover:text-brand-green-dark transition-colors flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Exterior Waterproofing Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/residential/" className="text-brand-green hover:text-brand-green-dark transition-colors flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Residential Construction
                    </Link>
                  </li>
                  <li>
                    <Link href="/balcony-reconstruction-clearwater/" className="text-brand-green hover:text-brand-green-dark transition-colors flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Balcony Reconstruction Clearwater
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/residential/balcony-reconstruction/" className="text-brand-green hover:text-brand-green-dark transition-colors flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Balcony Reconstruction Services
                    </Link>
                  </li>
                </ul>
              </div>

              <NearbyLocations currentCity="Clearwater" service="exterior-waterproofing" serviceName="Exterior Waterproofing" />
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
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Clearwater Exterior Waterproofing Costs
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Waterproofing costs for commercial and multi-family buildings vary by application, substrate condition, and Gulf exposure level. Beachfront properties typically require premium marine-grade systems. All FCS waterproofing includes our 10-year workmanship warranty.
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
            * Costs as of 2025. Beachfront and direct Gulf-exposure properties may require premium marine-grade systems at 20-30% additional cost. Contact FCS for detailed assessment.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Our Waterproofing Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Successful waterproofing in Clearwater's Gulf Coast environment requires systematic attention to assessment, engineering, preparation, and quality assurance. Our proven process ensures long-term performance even in extreme coastal conditions.
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
                Clearwater Waterproofing Expertise
              </h2>
              <p className="text-gray-200 mb-6">
                FCS has protected Clearwater buildings from water intrusion for over two decades. Our waterproofing team combines manufacturer certifications with deep knowledge of Gulf Coast conditions and the specific requirements of commercial and multi-family buildings.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Manufacturer Certified:</strong> Certified applicators for Tremco, Carlisle, Sika, BASF, Neogard, and other premium coastal-rated manufacturers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Large-Scale Capacity:</strong> Bonding capacity and workforce to execute multi-million dollar waterproofing projects on schedule</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Comprehensive Testing:</strong> Flood testing, adhesion testing, holiday testing, and infrared scanning to verify waterproofing integrity</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Long-Term Support:</strong> Maintenance programs designed for coastal properties with accelerated exposure conditions</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <DollarSign className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">$100K+</div>
                <div className="text-gray-300 text-sm">Minimum Project</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Droplets className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">10 Yr</div>
                <div className="text-gray-300 text-sm">Warranty Standard</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Building2 className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-gray-300 text-sm">Coastal Projects</div>
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
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Clearwater Property Owners Choose FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-8">
              <Shield className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Prime Contractor</h3>
              <p className="text-gray-600">
                FCS is always the prime contractor—never a subcontractor. You get direct accountability for your waterproofing project from assessment through warranty, with a single point of contact throughout.
              </p>
            </div>
            <div className="card text-center p-8">
              <Waves className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Marine-Grade Systems</h3>
              <p className="text-gray-600">
                We specify and install marine-grade waterproofing systems selected specifically for Clearwater's direct Gulf exposure, salt spray, UV intensity, and hurricane conditions.
              </p>
            </div>
            <div className="card text-center p-8">
              <Award className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">10-Year Warranty</h3>
              <p className="text-gray-600">
                Every FCS waterproofing installation includes our 10-year workmanship warranty, backed by manufacturer material warranties of 10-20 years for complete long-term protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={clearwaterFaqs}
        title="Clearwater Exterior Waterproofing FAQs"
        description="Common questions about exterior waterproofing for commercial buildings, condominiums, and multi-family properties in Clearwater, Florida."
      />

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Protect Your Clearwater Property Investment
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From building envelope to foundation, FCS provides comprehensive waterproofing solutions engineered for Clearwater's demanding Gulf Coast climate. Schedule a complimentary assessment for your commercial or multi-family property.
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
