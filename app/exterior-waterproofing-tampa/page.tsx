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
  title: "Exterior Waterproofing Tampa FL | Envelope | FCS",
  description: "Tampa exterior waterproofing contractor for commercial and residential buildings. Building envelope, foundation waterproofing, parking decks, plaza decks. 10-year warranty. Licensed, bonded, insured.",
  keywords: "exterior waterproofing Tampa, building envelope waterproofing Tampa, foundation waterproofing Tampa, commercial waterproofing Tampa, parking deck waterproofing Tampa",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Exterior Waterproofing", href: "/balcony-reconstruction-exterior-waterproofing/" },
  { name: "Tampa", href: "/exterior-waterproofing-tampa/" },
];

const serviceTypes = [
  {
    type: "Building Envelope",
    description: "Complete building envelope waterproofing including wall systems, window flashings, expansion joints, and penetration sealing",
    icon: Building2,
  },
  {
    type: "Foundation & Below-Grade",
    description: "Positive-side and negative-side foundation waterproofing, drainage boards, and water management systems",
    icon: Layers,
  },
  {
    type: "Parking & Plaza Decks",
    description: "Traffic-bearing waterproofing membranes for parking structures, plazas, pedestrian areas, and vehicular surfaces",
    icon: Factory,
  },
  {
    type: "Roof & Deck Systems",
    description: "Roof deck waterproofing, green roof systems, occupied roof terrace waterproofing, and associated drainage",
    icon: Home,
  },
];

const tampaFaqs = [
  {
    question: "Why is exterior waterproofing especially important in Tampa?",
    answer: "Tampa's climate creates exceptional waterproofing challenges: 46+ inches of annual rainfall (often in intense downpours), high humidity year-round (70-80%), hurricane-driven rain, and significant temperature variations that stress building materials. Properties near Tampa Bay face additional salt air exposure. Without proper waterproofing, these conditions lead to water intrusion, mold growth, structural deterioration, and costly repairs. Proactive waterproofing is essential for protecting your Tampa property investment.",
  },
  {
    question: "What types of buildings need exterior waterproofing in Tampa?",
    answer: "All building types benefit from exterior waterproofing in Tampa's climate: commercial office buildings (especially high-rises with curtain wall systems), condominiums and apartments (balconies, common areas, parking structures), retail centers, hospitality properties, medical facilities, parking garages, and residential properties. Buildings with below-grade spaces, occupied rooftops, or plaza decks require specialized waterproofing systems designed for Tampa's conditions.",
  },
  {
    question: "How much does exterior waterproofing cost in Tampa?",
    answer: "Exterior waterproofing costs vary by application: building envelope/wall waterproofing typically runs $5-$15/SF, foundation waterproofing ranges from $8-$25/SF depending on conditions, parking deck waterproofing costs $15-$35/SF for traffic-bearing systems. Complete building waterproofing projects range from $50,000 for smaller commercial properties to several million dollars for large developments. FCS provides detailed assessments and competitive proposals for all project sizes.",
  },
  {
    question: "What waterproofing systems do you use for Tampa buildings?",
    answer: "FCS specifies waterproofing systems appropriate for Tampa's conditions: fluid-applied membranes (polyurethane, elastomeric), sheet membranes (modified bitumen, TPO), crystalline waterproofing for concrete, traffic-bearing coatings for parking structures, and specialized systems for green roofs and occupied decks. We work with premium manufacturers including Tremco, Carlisle, Sika, and Neogard. All systems are selected for UV resistance, flexibility, and long-term performance in Florida's climate.",
  },
  {
    question: "How long does exterior waterproofing last in Tampa?",
    answer: "Properly installed exterior waterproofing in Tampa typically lasts 10-20+ years depending on the system, application, and exposure. FCS provides 10-year warranties on waterproofing installations. Traffic-bearing systems (parking decks) may require maintenance coatings every 5-7 years. Regular inspections and prompt repair of damaged areas extend system life significantly. Tampa's UV exposure and thermal cycling are the primary factors affecting waterproofing longevity.",
  },
  {
    question: "Can you waterproof existing Tampa buildings with water intrusion problems?",
    answer: "Yes, FCS specializes in remedial waterproofing for existing Tampa buildings. We begin with thorough diagnostics including water testing, infrared thermography, and core sampling to identify failure points. Solutions may include exterior resealing, injection grouting, negative-side (interior) waterproofing, drainage improvements, or complete system replacement. Many Tampa buildings built before modern waterproofing standards benefit from remedial work.",
  },
  {
    question: "Do you provide parking garage waterproofing in Tampa?",
    answer: "Yes, parking structure waterproofing is a specialty for FCS. Tampa's parking garages face particular challenges: heavy rainfall, salt from coastal air and vehicles, UV exposure on top decks, and thermal movement. We install traffic-bearing membrane systems with wearing courses, joint treatments, and proper drainage. Our parking deck work includes structural repairs, expansion joint replacement, and complete re-waterproofing for aging structures.",
  },
  {
    question: "What warranty do you provide for Tampa waterproofing projects?",
    answer: "FCS provides a 10-year workmanship warranty on exterior waterproofing installations, backed by manufacturer material warranties of 10-20 years depending on the system. Our warranty covers both materials and labor for leaks resulting from waterproofing failure. We maintain detailed documentation of all installations including photos, material certifications, and test results. Extended warranties may be available for premium systems.",
  },
];

const costData = [
  { application: "Building Envelope/Walls", range: "$5 - $15/SF", timeline: "2-6 weeks", warranty: "10 years" },
  { application: "Foundation Waterproofing", range: "$8 - $25/SF", timeline: "1-4 weeks", warranty: "10 years" },
  { application: "Parking Deck (Traffic-Bearing)", range: "$15 - $35/SF", timeline: "4-12 weeks", warranty: "10 years" },
  { application: "Plaza/Pedestrian Deck", range: "$12 - $25/SF", timeline: "3-8 weeks", warranty: "10 years" },
  { application: "Below-Grade/Basement", range: "$10 - $30/SF", timeline: "2-6 weeks", warranty: "10 years" },
  { application: "Remedial/Repair Work", range: "$50,000+", timeline: "Varies", warranty: "5-10 years" },
];

const processSteps = [
  { step: 1, title: "Assessment & Diagnostics", description: "Building survey, water testing, infrared scanning, and identification of problem areas and system requirements" },
  { step: 2, title: "System Design", description: "Waterproofing system specification, material selection, detail drawings, and budget development" },
  { step: 3, title: "Surface Preparation", description: "Substrate cleaning, crack repair, concrete restoration, and surface profiling for membrane adhesion" },
  { step: 4, title: "Waterproofing Installation", description: "Application of primers, membranes, flashings, and drainage systems per manufacturer specifications" },
  { step: 5, title: "Quality Assurance", description: "Flood testing, adhesion testing, inspection documentation, and correction of any deficiencies" },
  { step: 6, title: "Protection & Warranty", description: "Installation of protection courses, drainage boards, or wear surfaces; warranty documentation and maintenance guidance" },
];

export default function ExteriorWaterproofingTampaPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Exterior Waterproofing" />
      <ServiceSchema
        serviceName="Exterior Waterproofing"
        serviceDescription="Professional exterior waterproofing services for Tampa commercial and residential buildings. Building envelope, foundation, parking deck, and plaza waterproofing with 10-year warranty. Projects from $50,000 to $5 million."
        city="Tampa"
        minPrice="50000"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Exterior Waterproofing Services in Tampa, FL"
        description="Comprehensive guide to exterior waterproofing for Tampa buildings. Learn about building envelope waterproofing, foundation protection, parking deck systems, and costs for commercial and residential properties."
        datePublished="2024-01-15"
        dateModified="2025-01-18"
        slug="/exterior-waterproofing-tampa/"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/FCS-Exterior-Waterproofing/fcs-exterior-waterproofing-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Tampa, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Exterior Waterproofing in Tampa
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Protect your Tampa property from Florida's demanding climate. Professional building envelope, foundation, and deck waterproofing for commercial and residential buildings. 10-year warranty on all installations.
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
              <Droplets className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">10-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">In-House Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Premium Materials</span>
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
                Tampa's Exterior Waterproofing Experts
              </h2>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists provides comprehensive exterior waterproofing services for Tampa's commercial and residential buildings. With 46+ inches of annual rainfall, high humidity, and intense UV exposure, Tampa presents unique challenges that require expert waterproofing solutions designed specifically for Florida's climate.
              </p>

              <p className="text-gray-600 mb-6">
                From high-rise commercial buildings in Downtown Tampa and Westshore to waterfront condominiums along Bayshore Boulevard and Davis Islands, FCS has protected Tampa properties with premium waterproofing systems. Our team combines decades of experience with manufacturer-certified installation techniques to deliver waterproofing that performs for years.
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
                Tampa's Climate Demands Quality Waterproofing
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Heavy Rainfall:</strong> Tampa receives 46+ inches annually, often in intense afternoon thunderstorms that challenge drainage systems and building envelopes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>High Humidity:</strong> Year-round humidity of 70-80% promotes mold growth and requires breathable waterproofing systems that prevent moisture entrapment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>UV Exposure:</strong> Intense Florida sunlight degrades exposed waterproofing—we use UV-stable systems designed for maximum solar exposure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Hurricane Conditions:</strong> Wind-driven rain during tropical storms requires waterproofing systems that perform under extreme pressure differentials</span>
                </li>
              </ul>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Tampa Waterproofing Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Request Assessment</h3>
                <p className="text-gray-200 mb-4">
                  Schedule a complimentary waterproofing assessment for your Tampa property.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-6 rounded-full hover:bg-brand-gold-light transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <RelatedServices city="Tampa" currentService="exterior-waterproofing" />
              <NearbyLocations currentCity="Tampa" service="exterior-waterproofing" serviceName="Exterior Waterproofing" />
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
            Tampa Exterior Waterproofing Costs
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Waterproofing costs vary by application, substrate condition, and system specification. All FCS waterproofing includes our 10-year workmanship warranty.
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
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Our Waterproofing Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Successful waterproofing requires systematic attention to preparation, installation, and quality assurance. Our proven process ensures long-term performance.
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
                Tampa Waterproofing Expertise
              </h2>
              <p className="text-gray-200 mb-6">
                FCS has protected Tampa buildings from water intrusion for over two decades. Our waterproofing team combines manufacturer certifications with deep knowledge of Tampa's climate challenges.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Manufacturer Certified:</strong> Certified applicators for Tremco, Carlisle, Sika, Neogard, and other premium manufacturers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Comprehensive Testing:</strong> Flood testing, adhesion testing, and infrared scanning to verify waterproofing integrity</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Detailed Documentation:</strong> Complete project records including photos, material certifications, and test results</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Long-Term Support:</strong> Maintenance programs and warranty service for continued protection</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Droplets className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">10 Yr</div>
                <div className="text-gray-300 text-sm">Warranty Standard</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <DollarSign className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">$25M+</div>
                <div className="text-gray-300 text-sm">Waterproofing Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Building2 className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">200+</div>
                <div className="text-gray-300 text-sm">Buildings Protected</div>
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
            Why Tampa Chooses FCS for Waterproofing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-8">
              <Shield className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Prime Contractor</h3>
              <p className="text-gray-600">
                FCS is always the prime contractor—never a subcontractor. You get direct accountability for your waterproofing project from assessment through warranty.
              </p>
            </div>
            <div className="card text-center p-8">
              <Layers className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Premium Systems</h3>
              <p className="text-gray-600">
                We specify and install premium waterproofing systems from leading manufacturers, selected specifically for Tampa's climate and your building's requirements.
              </p>
            </div>
            <div className="card text-center p-8">
              <Award className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">10-Year Warranty</h3>
              <p className="text-gray-600">
                Every FCS waterproofing installation includes our 10-year workmanship warranty, backed by manufacturer material warranties for complete protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={tampaFaqs}
        title="Tampa Exterior Waterproofing FAQs"
        description="Common questions about exterior waterproofing for commercial and residential buildings in Tampa, Florida."
      />

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Protect Your Tampa Property
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From building envelope to foundation, FCS provides comprehensive waterproofing solutions for Tampa's demanding climate. Schedule a complimentary assessment.
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
