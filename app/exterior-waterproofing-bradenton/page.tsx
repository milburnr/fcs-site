import Link from "next/link";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Droplets, Layers, Wrench, Clock, Home, Factory, DollarSign, Users } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exterior Waterproofing Bradenton FL | Building Envelope & Foundation | FCS",
  description: "Bradenton exterior waterproofing contractor for commercial and residential buildings. Building envelope, foundation waterproofing, parking decks, waterfront property waterproofing. 10-year warranty. Licensed, bonded, insured.",
  keywords: "exterior waterproofing Bradenton, building envelope waterproofing Bradenton, foundation waterproofing Bradenton, commercial waterproofing Bradenton, waterfront waterproofing Bradenton",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Exterior Waterproofing", href: "/balcony-reconstruction-exterior-waterproofing/" },
  { name: "Bradenton", href: "/exterior-waterproofing-bradenton/" },
];

const serviceTypes = [
  {
    type: "Building Envelope",
    description: "Complete building envelope waterproofing including wall systems, window flashings, expansion joints, and penetration sealing for Bradenton's coastal commercial buildings",
    icon: Building2,
  },
  {
    type: "Foundation & Below-Grade",
    description: "Positive-side and negative-side foundation waterproofing with drainage systems designed for Bradenton's river-influenced water tables and coastal conditions",
    icon: Layers,
  },
  {
    type: "Waterfront & Marina Properties",
    description: "Specialized waterproofing for Bradenton's riverfront commercial properties, marinas, Anna Maria Island structures, and waterfront condominiums",
    icon: Factory,
  },
  {
    type: "Roof & Deck Systems",
    description: "Roof deck waterproofing, occupied terraces, pool decks, and associated drainage for Bradenton commercial and multi-family properties",
    icon: Home,
  },
];

const bradentonFaqs = [
  {
    question: "Why is exterior waterproofing critical for Bradenton properties?",
    answer: "Bradenton's position at the mouth of the Manatee River creates unique waterproofing challenges: properties face both Gulf saltwater exposure and freshwater river conditions, 52+ inches of annual rainfall, high humidity, and tidal fluctuations that affect groundwater levels. Anna Maria Island and waterfront properties experience direct marine exposure. Proper waterproofing protects against this dual-exposure environment that accelerates building deterioration.",
  },
  {
    question: "What Bradenton areas do you serve for waterproofing?",
    answer: "FCS provides exterior waterproofing throughout Manatee County including Downtown Bradenton, the Bradenton Riverwalk area, Anna Maria Island, Holmes Beach, Bradenton Beach, Cortez, Palmetto, West Bradenton, Palma Sola, and Lakewood Ranch. We serve commercial buildings, waterfront condominiums, marinas, retail properties, and residential developments throughout the region.",
  },
  {
    question: "How much does exterior waterproofing cost in Bradenton?",
    answer: "Bradenton waterproofing costs vary by application: building envelope/wall waterproofing typically runs $5-$15/SF, foundation waterproofing ranges from $8-$25/SF, parking deck waterproofing costs $15-$35/SF, and waterfront/marina waterproofing costs $12-$30/SF. Anna Maria Island properties require marine-grade systems. Complete commercial waterproofing projects range from $50,000 to several million dollars. FCS provides detailed site assessments.",
  },
  {
    question: "What waterproofing systems work best for Bradenton's riverfront properties?",
    answer: "For Bradenton's riverfront and waterfront properties, FCS specifies systems rated for both saltwater and freshwater exposure: polyurethane membranes with marine-grade additives, crystalline waterproofing for concrete in brackish environments, flexible systems that accommodate tidal soil movement, and specialized below-grade systems for fluctuating water tables. All systems are selected for long-term performance in Bradenton's unique river-meets-Gulf environment.",
  },
  {
    question: "Do you waterproof properties on Anna Maria Island?",
    answer: "Yes, Anna Maria Island waterproofing is a specialty for FCS. The island's exposed Gulf location requires premium marine-grade systems. We work with homeowners, condominiums, vacation rentals, and commercial properties throughout Anna Maria Island, Holmes Beach, and Bradenton Beach. Our systems withstand direct salt spray, hurricane conditions, and the island's sandy soil conditions.",
  },
  {
    question: "How does the Manatee River affect foundation waterproofing in Bradenton?",
    answer: "The Manatee River significantly influences groundwater throughout Bradenton. Properties near the river experience tidal water table fluctuations, mixing of fresh and saltwater, and potential for flooding during storm events. FCS designs foundation waterproofing systems specifically for these conditions, including proper drainage, marine-grade membranes, and flood-resistant assemblies where required.",
  },
  {
    question: "Can you waterproof historic buildings in Downtown Bradenton?",
    answer: "Yes, FCS has experience waterproofing historic and older buildings in Downtown Bradenton's redevelopment areas along the Riverwalk and Main Street. We use sympathetic waterproofing approaches that protect historic masonry while maintaining architectural character. This includes breathable systems, period-appropriate drainage solutions, and careful attention to preservation standards.",
  },
  {
    question: "What warranty do you provide for Bradenton waterproofing?",
    answer: "FCS provides a 10-year workmanship warranty on exterior waterproofing installations in Bradenton, backed by manufacturer material warranties of 10-20 years. Waterfront and island properties face accelerated exposure—we recommend annual inspections and offer maintenance programs. Our warranty covers both materials and labor for any leaks resulting from waterproofing system failure.",
  },
];

const costData = [
  { application: "Building Envelope/Walls", range: "$5 - $15/SF", timeline: "2-6 weeks", warranty: "10 years" },
  { application: "Foundation Waterproofing", range: "$8 - $25/SF", timeline: "1-4 weeks", warranty: "10 years" },
  { application: "Parking Deck (Traffic-Bearing)", range: "$15 - $35/SF", timeline: "4-12 weeks", warranty: "10 years" },
  { application: "Waterfront/Marina", range: "$12 - $30/SF", timeline: "2-8 weeks", warranty: "10 years" },
  { application: "Below-Grade/Basement", range: "$10 - $30/SF", timeline: "2-6 weeks", warranty: "10 years" },
  { application: "Remedial/Repair Work", range: "$50,000+", timeline: "Varies", warranty: "5-10 years" },
];

const processSteps = [
  { step: 1, title: "Assessment & Diagnostics", description: "Building survey, water testing, infrared scanning, and identification of problem areas with attention to Bradenton's river and Gulf exposure conditions" },
  { step: 2, title: "System Design", description: "Waterproofing system specification with marine-grade materials suited for dual saltwater/freshwater exposure, detail drawings, and budget development" },
  { step: 3, title: "Surface Preparation", description: "Substrate cleaning, salt removal, crack repair, concrete restoration, and surface profiling for optimal membrane adhesion" },
  { step: 4, title: "Waterproofing Installation", description: "Application of primers, membranes, flashings, and drainage systems using coastal-rated materials per manufacturer specifications" },
  { step: 5, title: "Quality Assurance", description: "Flood testing, adhesion testing, inspection documentation, and correction of deficiencies before final acceptance" },
  { step: 6, title: "Protection & Warranty", description: "Installation of protection courses, drainage boards, or wear surfaces; warranty documentation and coastal maintenance guidance" },
];

export default function ExteriorWaterproofingBradentonPage() {
  return (
    <>
      <LocalBusinessSchema city="Bradenton" service="Exterior Waterproofing" />
      <ServiceSchema
        serviceName="Exterior Waterproofing"
        serviceDescription="Professional exterior waterproofing services for Bradenton commercial and residential buildings. Building envelope, foundation, parking deck, and waterfront waterproofing with 10-year warranty. Projects from $50,000 to $5 million."
        city="Bradenton"
        minPrice="50000"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Exterior Waterproofing Services in Bradenton, FL"
        description="Comprehensive guide to exterior waterproofing for Bradenton buildings. Learn about building envelope waterproofing, foundation protection, waterfront property waterproofing, and costs for commercial and residential properties in Manatee County."
        datePublished="2024-01-15"
        dateModified="2025-01-18"
        slug="/exterior-waterproofing-bradenton/"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2023/12/FCS-Exterior-Waterproofing.png')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Bradenton, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Exterior Waterproofing in Bradenton
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Protect your Bradenton property from the unique challenges of riverfront and Gulf Coast exposure. Professional building envelope, foundation, and deck waterproofing for commercial buildings, waterfront properties, and Anna Maria Island structures. 10-year warranty on all installations.
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
              <span className="font-semibold text-gray-700">Waterfront Experts</span>
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
                Bradenton's Exterior Waterproofing Experts
              </h2>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists provides comprehensive exterior waterproofing services for Bradenton's commercial, waterfront, and residential buildings. Located where the Manatee River meets Tampa Bay and the Gulf of Mexico, Bradenton properties face a unique combination of freshwater and saltwater exposure that demands specialized waterproofing solutions.
              </p>

              <p className="text-gray-600 mb-6">
                From riverfront commercial properties along the Bradenton Riverwalk and Downtown redevelopment areas to beachfront condominiums on Anna Maria Island and marina facilities throughout the area, FCS has protected Bradenton properties with waterproofing systems designed for this dual-exposure environment. Our team understands the specific challenges of Manatee County's coastal and riverfront conditions.
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
                Bradenton's Dual-Exposure Climate Demands Quality Waterproofing
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>River and Gulf Exposure:</strong> Properties face both Manatee River freshwater conditions and Gulf saltwater exposure, requiring waterproofing systems rated for dual environments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Tidal Water Table Fluctuations:</strong> Proximity to the river and bay creates water table variations that stress foundations and below-grade structures</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Intense UV Exposure:</strong> Bradenton's sunny climate degrades exposed waterproofing—we use UV-stable systems with maximum ratings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Hurricane Vulnerability:</strong> Coastal location requires waterproofing systems that withstand wind-driven rain, storm surge, and flooding conditions</span>
                </li>
              </ul>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Bradenton Waterproofing Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Request Assessment</h3>
                <p className="text-gray-200 mb-4">
                  Schedule a complimentary waterproofing assessment for your Bradenton property.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-6 rounded-full hover:bg-brand-gold-light transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <RelatedServices city="Bradenton" currentService="exterior-waterproofing" />
              <NearbyLocations currentCity="Bradenton" service="exterior-waterproofing" serviceName="Exterior Waterproofing" />
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Timeline Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Bradenton Exterior Waterproofing Costs
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Waterproofing costs vary by application, substrate condition, and waterfront exposure. Anna Maria Island and riverfront properties may require premium marine-grade systems. All FCS waterproofing includes our 10-year workmanship warranty.
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
            * Costs as of 2025. Waterfront and island properties may require premium marine-grade systems at 15-25% additional cost. Contact FCS for detailed proposal.
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
            Successful waterproofing in Bradenton's dual-exposure environment requires systematic attention to preparation, material selection, and quality assurance. Our proven process ensures long-term performance for waterfront and inland properties.
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
                Bradenton Waterproofing Expertise
              </h2>
              <p className="text-gray-200 mb-6">
                FCS has protected Bradenton buildings from water intrusion for over two decades. Our waterproofing team combines manufacturer certifications with deep knowledge of Manatee County's unique river and Gulf Coast conditions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Manufacturer Certified:</strong> Certified applicators for Tremco, Carlisle, Sika, Neogard, and other premium coastal-rated manufacturers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Waterfront Experience:</strong> Extensive experience with riverfront properties, marinas, and Anna Maria Island structures</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Comprehensive Testing:</strong> Flood testing, adhesion testing, and infrared scanning to verify waterproofing integrity</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Long-Term Support:</strong> Maintenance programs and warranty service designed for coastal property protection</span>
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
                <div className="text-3xl font-bold text-white mb-1">150+</div>
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
            Why Bradenton Chooses FCS for Waterproofing
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
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Dual-Exposure Systems</h3>
              <p className="text-gray-600">
                We specify waterproofing systems designed for Bradenton's unique combination of river and Gulf exposure, with marine-grade materials where required.
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
        items={bradentonFaqs}
        title="Bradenton Exterior Waterproofing FAQs"
        description="Common questions about exterior waterproofing for commercial and residential buildings in Bradenton, Florida."
      />

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Protect Your Bradenton Property
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From building envelope to foundation, FCS provides comprehensive waterproofing solutions designed for Bradenton's unique river and Gulf Coast environment. Schedule a complimentary assessment.
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
