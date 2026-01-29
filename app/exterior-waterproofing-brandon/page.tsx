import Link from "next/link";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Droplets, Layers, Wrench, Clock, Home, Factory, DollarSign, Users } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exterior Waterproofing Brandon FL | Building Envelope & Foundation | FCS",
  description: "Brandon exterior waterproofing contractor for commercial and residential buildings. Building envelope, foundation waterproofing, parking decks, retail waterproofing. 10-year warranty. Licensed, bonded, insured.",
  keywords: "exterior waterproofing Brandon, building envelope waterproofing Brandon, foundation waterproofing Brandon, commercial waterproofing Brandon, retail waterproofing Brandon",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Exterior Waterproofing", href: "/balcony-reconstruction-exterior-waterproofing/" },
  { name: "Brandon", href: "/exterior-waterproofing-brandon/" },
];

const serviceTypes = [
  {
    type: "Building Envelope",
    description: "Complete building envelope waterproofing including wall systems, window flashings, expansion joints, and penetration sealing for Brandon's commercial and retail buildings",
    icon: Building2,
  },
  {
    type: "Foundation & Below-Grade",
    description: "Positive-side and negative-side foundation waterproofing with drainage systems designed for Brandon's variable water table and soil conditions",
    icon: Layers,
  },
  {
    type: "Retail & Commercial",
    description: "Specialized waterproofing for Brandon's shopping centers, office buildings, medical facilities, and commercial properties throughout the Westfield area",
    icon: Factory,
  },
  {
    type: "Roof & Deck Systems",
    description: "Roof deck waterproofing, occupied terraces, amenity decks, and associated drainage for multi-family and commercial properties",
    icon: Home,
  },
];

const brandonFaqs = [
  {
    question: "Why is exterior waterproofing important for Brandon properties?",
    answer: "Brandon's Central Florida location creates significant waterproofing challenges: 50+ inches of annual rainfall concentrated in intense summer thunderstorms, a water table that fluctuates seasonally, and soil conditions that vary across the area. The Alafia River watershed affects groundwater levels throughout Brandon. Without proper waterproofing, buildings experience foundation damage, mold growth, and structural deterioration—particularly problematic for Brandon's many commercial and retail properties.",
  },
  {
    question: "What Brandon areas do you serve for waterproofing?",
    answer: "FCS provides exterior waterproofing throughout Brandon including the Westfield Brandon area, Valrico, Bloomingdale, Riverview, Fish Hawk, Lithia, and surrounding Hillsborough County communities. We serve retail centers, medical facilities, office buildings, multi-family housing, and commercial properties throughout the region. Our teams are experienced with Hillsborough County building department requirements.",
  },
  {
    question: "How much does exterior waterproofing cost in Brandon?",
    answer: "Brandon waterproofing costs vary by application: building envelope/wall waterproofing typically runs $5-$15/SF, foundation waterproofing ranges from $8-$22/SF, parking deck waterproofing costs $15-$35/SF, and retail/commercial floor waterproofing costs $4-$12/SF. Complete commercial waterproofing projects range from $50,000 to several million dollars depending on building size and condition. FCS provides detailed site assessments and competitive proposals.",
  },
  {
    question: "What waterproofing systems work best for Brandon's soil conditions?",
    answer: "Brandon's soil conditions vary from sandy areas to clay-rich zones, requiring waterproofing systems selected for local conditions. FCS specifies flexible elastomeric membranes for areas with soil movement, crystalline waterproofing for concrete structures, comprehensive drainage systems to manage hydrostatic pressure, and UV-stable systems for exposed applications. All systems are selected for Central Florida's humidity and rainfall patterns.",
  },
  {
    question: "Do you waterproof retail centers and shopping malls in Brandon?",
    answer: "Yes, retail and commercial waterproofing is a specialty for FCS. Brandon's retail centers, including properties near Westfield Brandon, require waterproofing that maintains business operations during installation. We coordinate with property management to phase work appropriately, minimize tenant disruption, and ensure retail operations continue. Our systems include parking garage waterproofing, loading dock protection, and common area waterproofing.",
  },
  {
    question: "How does the Alafia River affect foundation waterproofing in Brandon?",
    answer: "The Alafia River watershed influences groundwater levels throughout Brandon, particularly in areas closer to the river and its tributaries. Properties in lower-lying areas experience higher water tables during rainy season, creating hydrostatic pressure on foundations. FCS designs waterproofing systems specifically for each site's conditions, including proper drainage, moisture barriers, and in some cases interior drainage systems.",
  },
  {
    question: "Can you waterproof multi-family buildings in Brandon?",
    answer: "Yes, multi-family waterproofing is a core service for FCS. Brandon's apartment complexes, townhome communities, and condominiums require comprehensive waterproofing maintenance. We work with property managers and HOAs on building envelope repairs, balcony waterproofing, parking structure maintenance, and common area protection. Our team understands the unique challenges of occupied building waterproofing.",
  },
  {
    question: "What warranty do you provide for Brandon waterproofing projects?",
    answer: "FCS provides a 10-year workmanship warranty on exterior waterproofing installations in Brandon, backed by manufacturer material warranties of 10-20 years. Our warranty covers both materials and labor for any leaks resulting from waterproofing system failure. We maintain detailed documentation including photos, material certifications, and test results. Regular maintenance inspections are recommended to ensure continued protection.",
  },
];

const costData = [
  { application: "Building Envelope/Walls", range: "$5 - $15/SF", timeline: "2-6 weeks", warranty: "10 years" },
  { application: "Foundation Waterproofing", range: "$8 - $22/SF", timeline: "1-4 weeks", warranty: "10 years" },
  { application: "Parking Deck (Traffic-Bearing)", range: "$15 - $35/SF", timeline: "4-12 weeks", warranty: "10 years" },
  { application: "Retail/Commercial Floor", range: "$4 - $12/SF", timeline: "1-3 weeks", warranty: "10 years" },
  { application: "Below-Grade/Basement", range: "$10 - $28/SF", timeline: "2-6 weeks", warranty: "10 years" },
  { application: "Remedial/Repair Work", range: "$50,000+", timeline: "Varies", warranty: "5-10 years" },
];

const processSteps = [
  { step: 1, title: "Assessment & Diagnostics", description: "Building survey, water testing, soil analysis, infrared scanning, and identification of problem areas considering Brandon's local conditions" },
  { step: 2, title: "System Design", description: "Waterproofing system specification with materials suited for soil and groundwater conditions, detail drawings, and budget development" },
  { step: 3, title: "Surface Preparation", description: "Substrate cleaning, crack repair, concrete restoration, joint preparation, and surface profiling for optimal membrane adhesion" },
  { step: 4, title: "Waterproofing Installation", description: "Application of primers, membranes, flashings, and drainage systems per manufacturer specifications with minimal business disruption" },
  { step: 5, title: "Quality Assurance", description: "Flood testing, adhesion testing, inspection documentation, and correction of deficiencies before final acceptance" },
  { step: 6, title: "Protection & Warranty", description: "Installation of protection courses, drainage boards, or wear surfaces; warranty documentation and maintenance guidance" },
];

export default function ExteriorWaterproofingBrandonPage() {
  return (
    <>
      <LocalBusinessSchema city="Brandon" service="Exterior Waterproofing" />
      <ServiceSchema
        serviceName="Exterior Waterproofing"
        serviceDescription="Professional exterior waterproofing services for Brandon commercial and residential buildings. Building envelope, foundation, parking deck, and retail waterproofing with 10-year warranty. Projects from $50,000 to $5 million."
        city="Brandon"
        minPrice="50000"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Exterior Waterproofing Services in Brandon, FL"
        description="Comprehensive guide to exterior waterproofing for Brandon buildings. Learn about building envelope waterproofing, foundation protection, retail waterproofing, and costs for commercial properties in Hillsborough County."
        datePublished="2024-01-15"
        dateModified="2025-01-18"
        slug="/exterior-waterproofing-brandon/"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2023/12/FCS-Exterior-Waterproofing.png')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Brandon, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Exterior Waterproofing in Brandon
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Protect your Brandon property from Central Florida's intense rainfall, variable water tables, and humidity. Professional building envelope, foundation, and deck waterproofing for commercial, retail, and multi-family buildings. 10-year warranty on all installations.
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
              <span className="font-semibold text-gray-700">Commercial Experts</span>
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
                Brandon's Exterior Waterproofing Experts
              </h2>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists provides comprehensive exterior waterproofing services for Brandon's commercial, retail, and multi-family buildings. As one of the Tampa Bay area's fastest-growing communities, Brandon has experienced significant commercial development that requires professional waterproofing to protect against Central Florida's demanding climate.
              </p>

              <p className="text-gray-600 mb-6">
                From retail centers near Westfield Brandon Mall and medical facilities throughout the area to office buildings and multi-family developments in Valrico and Bloomingdale, FCS has protected Brandon properties with waterproofing systems designed for local conditions. Our team understands that commercial properties require waterproofing approaches that minimize business disruption while delivering long-term protection.
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
                Brandon's Climate Demands Quality Waterproofing
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Intense Summer Rainfall:</strong> Central Florida's afternoon thunderstorms deliver heavy rainfall that overwhelms inadequate drainage and waterproofing systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Variable Water Tables:</strong> The Alafia River watershed affects groundwater throughout Brandon, creating seasonal variations in hydrostatic pressure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>High Humidity:</strong> Year-round humidity promotes mold growth and requires breathable waterproofing systems that manage moisture without trapping it</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>UV Exposure:</strong> Florida's intense sunlight degrades exposed waterproofing—we specify UV-stable systems designed for maximum durability</span>
                </li>
              </ul>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Brandon Waterproofing Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Request Assessment</h3>
                <p className="text-gray-200 mb-4">
                  Schedule a complimentary waterproofing assessment for your Brandon property.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-6 rounded-full hover:bg-brand-gold-light transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <RelatedServices city="Brandon" currentService="exterior-waterproofing" />
              <NearbyLocations currentCity="Brandon" service="exterior-waterproofing" serviceName="Exterior Waterproofing" />
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Timeline Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Brandon Exterior Waterproofing Costs
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Waterproofing costs vary by application, substrate condition, and site conditions. Properties with high water tables or challenging soil conditions may require additional drainage measures. All FCS waterproofing includes our 10-year workmanship warranty.
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
            * Costs as of 2025. Properties with challenging site conditions may require additional drainage systems. Contact FCS for detailed proposal.
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
            Successful waterproofing in Brandon requires understanding local soil and groundwater conditions. Our proven process ensures long-term performance while minimizing disruption to commercial operations.
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
                Brandon Waterproofing Expertise
              </h2>
              <p className="text-gray-200 mb-6">
                FCS has protected Brandon buildings from water intrusion for over two decades. Our waterproofing team combines manufacturer certifications with deep knowledge of Hillsborough County's local conditions and commercial construction requirements.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Manufacturer Certified:</strong> Certified applicators for Tremco, Carlisle, Sika, Neogard, and other premium manufacturers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Commercial Experience:</strong> Extensive experience with retail centers, office buildings, and multi-family properties</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Comprehensive Testing:</strong> Flood testing, adhesion testing, and infrared scanning to verify waterproofing integrity</span>
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
                <div className="text-3xl font-bold text-white mb-1">150+</div>
                <div className="text-gray-300 text-sm">Commercial Properties</div>
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
            Why Brandon Chooses FCS for Waterproofing
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
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Commercial Focus</h3>
              <p className="text-gray-600">
                We specialize in commercial waterproofing with approaches designed to minimize business disruption while delivering long-term protection.
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
        items={brandonFaqs}
        title="Brandon Exterior Waterproofing FAQs"
        description="Common questions about exterior waterproofing for commercial and residential buildings in Brandon, Florida."
      />

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Protect Your Brandon Property
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From building envelope to foundation, FCS provides comprehensive waterproofing solutions designed for Brandon's Central Florida climate. Schedule a complimentary assessment.
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
