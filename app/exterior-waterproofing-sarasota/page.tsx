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
  title: "Exterior Waterproofing Sarasota | Envelope | FCS",
  description: "Sarasota exterior waterproofing contractor for commercial and residential buildings. Building envelope, foundation waterproofing, parking decks, luxury condo waterproofing. 10-year warranty. Licensed, bonded, insured.",
  keywords: "exterior waterproofing Sarasota, building envelope waterproofing Sarasota, foundation waterproofing Sarasota, commercial waterproofing Sarasota, luxury condo waterproofing Sarasota",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Exterior Waterproofing", href: "/balcony-reconstruction-exterior-waterproofing/" },
  { name: "Sarasota", href: "/exterior-waterproofing-sarasota/" },
];

const serviceTypes = [
  {
    type: "Building Envelope",
    description: "Complete building envelope waterproofing including wall systems, window flashings, expansion joints, and penetration sealing for Sarasota's luxury high-rise condominiums",
    icon: Building2,
  },
  {
    type: "Foundation & Below-Grade",
    description: "Positive-side and negative-side foundation waterproofing with drainage systems designed for Sarasota's sandy soils and barrier island conditions",
    icon: Layers,
  },
  {
    type: "Luxury Property Waterproofing",
    description: "Premium waterproofing for Sarasota's high-end properties including waterfront estates, Longboat Key residences, and downtown luxury condominiums",
    icon: Factory,
  },
  {
    type: "Roof & Deck Systems",
    description: "Roof deck waterproofing, penthouse terraces, rooftop amenity areas, and associated drainage for Sarasota's premium properties",
    icon: Home,
  },
];

const sarasotaFaqs = [
  {
    question: "Why is exterior waterproofing critical for Sarasota properties?",
    answer: "Sarasota's Gulf Coast location creates demanding waterproofing conditions: direct salt spray from Gulf winds, 54+ inches of annual rainfall, high humidity year-round, and sandy soils with variable water tables. Properties on Longboat Key, Lido Key, Siesta Key, and along the Sarasota bayfront face accelerated deterioration from constant salt exposure. Proper waterproofing protects property values—especially important given Sarasota's premium real estate market.",
  },
  {
    question: "What Sarasota areas do you serve for waterproofing?",
    answer: "FCS provides exterior waterproofing throughout Sarasota County including Downtown Sarasota, Longboat Key, Lido Key, St. Armands Circle, Bird Key, Siesta Key, Gulf Gate, Palmer Ranch, Lakewood Ranch, and University Park. We serve luxury condominiums, waterfront estates, commercial buildings, cultural facilities, and hospitality properties throughout the region.",
  },
  {
    question: "How much does exterior waterproofing cost in Sarasota?",
    answer: "Sarasota waterproofing costs vary by application: building envelope/wall waterproofing typically runs $5-$18/SF (luxury specifications increase costs), foundation waterproofing ranges from $8-$25/SF, parking deck waterproofing costs $15-$35/SF, and premium residential waterproofing for luxury properties costs $10-$30/SF. Barrier island properties require marine-grade systems. Complete condominium waterproofing projects range from $50,000 to several million dollars.",
  },
  {
    question: "What waterproofing systems work best for Sarasota's barrier islands?",
    answer: "For Sarasota's barrier island properties (Longboat Key, Lido Key, Siesta Key), FCS specifies marine-grade systems: high-performance polyurethane membranes with enhanced salt resistance, crystalline waterproofing for concrete in brackish environments, traffic-bearing coatings with UV stabilizers, and specialized systems for elevated structures. All systems are selected for Gulf exposure with extended manufacturer warranties.",
  },
  {
    question: "Do you waterproof luxury condominiums in Downtown Sarasota?",
    answer: "Yes, luxury condominium waterproofing is a specialty for FCS. Sarasota's downtown has experienced significant high-rise development, and these premium properties require correspondingly high-quality waterproofing. We work with condominium associations on building envelope restoration, balcony waterproofing, parking structure waterproofing, and common area protection. Our team coordinates with building management to minimize resident disruption.",
  },
  {
    question: "How does Sarasota's sandy soil affect foundation waterproofing?",
    answer: "Sarasota's sandy soils, particularly on the barrier islands, present unique challenges: rapid drainage but susceptibility to erosion, variable water tables influenced by tides and rainfall, and potential for saltwater intrusion. FCS designs foundation waterproofing systems specifically for these conditions, including proper drainage, marine-grade membranes, and protection against both freshwater and saltwater exposure.",
  },
  {
    question: "Can you waterproof historic buildings in Sarasota?",
    answer: "Yes, FCS has experience waterproofing Sarasota's historic and architecturally significant buildings including properties in the Burns Court area and along Palm Avenue. We use sympathetic waterproofing approaches that protect historic materials while maintaining architectural integrity. This includes breathable systems for masonry, period-appropriate drainage solutions, and careful attention to visual aesthetics.",
  },
  {
    question: "What warranty do you provide for Sarasota waterproofing?",
    answer: "FCS provides a 10-year workmanship warranty on exterior waterproofing installations in Sarasota, backed by manufacturer material warranties of 10-20 years. Barrier island properties face accelerated exposure—we recommend annual inspections and offer maintenance programs. Our warranty covers both materials and labor for any leaks resulting from waterproofing system failure, with complete documentation for condominium association records.",
  },
];

const costData = [
  { application: "Building Envelope/Walls", range: "$5 - $18/SF", timeline: "2-6 weeks", warranty: "10 years" },
  { application: "Foundation Waterproofing", range: "$8 - $25/SF", timeline: "1-4 weeks", warranty: "10 years" },
  { application: "Parking Deck (Traffic-Bearing)", range: "$15 - $35/SF", timeline: "4-12 weeks", warranty: "10 years" },
  { application: "Luxury Residential", range: "$10 - $30/SF", timeline: "2-8 weeks", warranty: "10 years" },
  { application: "Below-Grade/Basement", range: "$10 - $30/SF", timeline: "2-6 weeks", warranty: "10 years" },
  { application: "Remedial/Repair Work", range: "$50,000+", timeline: "Varies", warranty: "5-10 years" },
];

const processSteps = [
  { step: 1, title: "Assessment & Diagnostics", description: "Building survey, water testing, infrared scanning, and identification of problem areas with attention to Sarasota's coastal conditions and luxury specifications" },
  { step: 2, title: "System Design", description: "Premium waterproofing system specification with marine-grade materials, detail drawings, and budget development for Gulf exposure" },
  { step: 3, title: "Surface Preparation", description: "Substrate cleaning, salt removal, crack repair, concrete restoration, and surface profiling with attention to aesthetic requirements" },
  { step: 4, title: "Waterproofing Installation", description: "Application of primers, membranes, flashings, and drainage systems using coastal-rated premium materials per manufacturer specifications" },
  { step: 5, title: "Quality Assurance", description: "Flood testing, adhesion testing, inspection documentation, and correction of deficiencies before final acceptance" },
  { step: 6, title: "Protection & Warranty", description: "Installation of protection courses and wear surfaces; comprehensive warranty documentation and coastal maintenance guidance" },
];

export default function ExteriorWaterproofingSarasotaPage() {
  return (
    <>
      <LocalBusinessSchema city="Sarasota" service="Exterior Waterproofing" />
      <ServiceSchema
        serviceName="Exterior Waterproofing"
        serviceDescription="Professional exterior waterproofing services for Sarasota commercial and luxury residential buildings. Building envelope, foundation, parking deck, and premium waterproofing with 10-year warranty. Projects from $50,000 to $5 million."
        city="Sarasota"
        minPrice="50000"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Exterior Waterproofing Services in Sarasota, FL"
        description="Comprehensive guide to exterior waterproofing for Sarasota buildings. Learn about building envelope waterproofing, foundation protection, luxury property waterproofing, and costs for commercial and residential properties."
        datePublished="2024-01-15"
        dateModified="2025-01-18"
        slug="/exterior-waterproofing-sarasota/"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2023/12/FCS-Exterior-Waterproofing.png')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Sarasota, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Exterior Waterproofing in Sarasota
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Protect your Sarasota property from Gulf salt spray, coastal humidity, and Florida's intense rainfall. Premium building envelope, foundation, and deck waterproofing for luxury condominiums, waterfront estates, and commercial buildings. 10-year warranty on all installations.
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
              <span className="font-semibold text-gray-700">Luxury Property Experts</span>
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
                Sarasota's Exterior Waterproofing Experts
              </h2>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists provides comprehensive exterior waterproofing services for Sarasota's commercial, luxury residential, and institutional buildings. As one of Florida's premier real estate markets, Sarasota properties demand equally premium waterproofing—protection that preserves both structural integrity and property values in the demanding Gulf Coast environment.
              </p>

              <p className="text-gray-600 mb-6">
                From luxury high-rises along the Sarasota bayfront and waterfront estates on Longboat Key to St. Armands Circle commercial properties and cultural facilities throughout downtown, FCS has protected Sarasota properties with waterproofing systems designed for the area's coastal conditions and discerning property owners. Our team understands that premium properties require premium protection.
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
                Sarasota's Gulf Coast Climate Demands Premium Waterproofing
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Direct Gulf Exposure:</strong> Barrier island properties face unobstructed Gulf winds carrying salt spray that accelerates deterioration of building materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Sandy Coastal Soils:</strong> Sarasota's sandy soils and tidal influences create variable water tables requiring specialized foundation waterproofing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Intense UV Exposure:</strong> World-famous beaches mean intense sunlight that degrades exposed waterproofing—we use UV-stable systems with maximum ratings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Hurricane Vulnerability:</strong> Gulf-front location requires waterproofing systems that withstand wind-driven rain and storm surge conditions</span>
                </li>
              </ul>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Sarasota Waterproofing Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Request Assessment</h3>
                <p className="text-gray-200 mb-4">
                  Schedule a complimentary waterproofing assessment for your Sarasota property.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-6 rounded-full hover:bg-brand-gold-light transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <RelatedServices city="Sarasota" currentService="exterior-waterproofing" />
              <NearbyLocations currentCity="Sarasota" service="exterior-waterproofing" serviceName="Exterior Waterproofing" />
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
            Sarasota Exterior Waterproofing Costs
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Waterproofing costs vary by application, substrate condition, and coastal exposure. Barrier island properties and luxury specifications may require premium systems. All FCS waterproofing includes our 10-year workmanship warranty.
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
            * Costs as of 2025. Barrier island properties and luxury specifications may require premium marine-grade systems at 15-25% additional cost. Contact FCS for detailed proposal.
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
            Successful waterproofing in Sarasota's Gulf Coast environment requires systematic attention to preparation, premium material selection, and quality assurance. Our proven process ensures long-term performance for luxury properties.
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
                Sarasota Waterproofing Expertise
              </h2>
              <p className="text-gray-200 mb-6">
                FCS has protected Sarasota buildings from water intrusion for over two decades. Our waterproofing team combines manufacturer certifications with deep knowledge of Gulf Coast conditions and the elevated expectations of Sarasota's luxury property market.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Manufacturer Certified:</strong> Certified applicators for Tremco, Carlisle, Sika, BASF, and other premium coastal-rated manufacturers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Luxury Property Experience:</strong> Extensive experience with high-end condominiums, waterfront estates, and premium commercial properties</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Comprehensive Testing:</strong> Flood testing, adhesion testing, and infrared scanning to verify waterproofing integrity</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Long-Term Support:</strong> Maintenance programs and warranty service designed for coastal luxury property protection</span>
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
                <div className="text-3xl font-bold text-white mb-1">75+</div>
                <div className="text-gray-300 text-sm">Luxury Properties</div>
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
            Why Sarasota Chooses FCS for Waterproofing
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
                We specify and install premium marine-grade waterproofing systems selected specifically for Sarasota's Gulf exposure and luxury property requirements.
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
        items={sarasotaFaqs}
        title="Sarasota Exterior Waterproofing FAQs"
        description="Common questions about exterior waterproofing for commercial and luxury residential buildings in Sarasota, Florida."
      />

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Protect Your Sarasota Property
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From building envelope to foundation, FCS provides premium waterproofing solutions designed for Sarasota's Gulf Coast climate and luxury property market. Schedule a complimentary assessment.
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
