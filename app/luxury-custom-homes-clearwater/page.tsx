import Link from "next/link";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Home, Compass, Waves, Star, Sun, Gem, Users, DollarSign, Anchor } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Custom Homes Clearwater FL | Beach & Waterfront Estates $1M+ | FCS",
  description: "Clearwater luxury custom home builder specializing in $1M-$15M+ beachfront estates, Gulf-front properties, and waterfront residences. Clearwater Beach, Sand Key, Island Estates, Harbor Oaks, Belleair. Licensed, bonded, insured.",
  keywords: "luxury custom homes Clearwater, Clearwater Beach waterfront homes, Sand Key estate homes, custom home builder Clearwater, beachfront construction Clearwater FL",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Residential", href: "/residential/" },
  { name: "Luxury Custom Homes Clearwater", href: "/luxury-custom-homes-clearwater/" },
];

const homeTypes = [
  {
    type: "Beachfront Estates",
    description: "Clearwater Beach and Sand Key Gulf-front properties with direct beach access, panoramic sunset views, and resort-style amenities",
    icon: Waves,
  },
  {
    type: "Intracoastal Waterfront",
    description: "Island Estates, Harbor Oaks, and Belleair waterfront homes with private docks, deep water access, and protected harbor moorings",
    icon: Anchor,
  },
  {
    type: "Coastal Contemporary",
    description: "Modern architectural designs that maximize Gulf views with floor-to-ceiling glass, rooftop terraces, and hurricane-rated construction",
    icon: Compass,
  },
  {
    type: "Resort-Style Living",
    description: "Infinity pools, outdoor kitchens, cabanas, and tropical landscaping designed for the ultimate Florida beach lifestyle",
    icon: Sun,
  },
];

const clearwaterNeighborhoods = [
  {
    name: "Clearwater Beach",
    description: "Premier Gulf-front location with beach walk properties from $2M-$12M+. Direct Gulf access, sunset views, and walkable beach lifestyle.",
    features: ["Gulf-front lots", "Beach access", "Sunset views", "Walk to Pier 60"],
  },
  {
    name: "Sand Key",
    description: "Exclusive barrier island community with protected Gulf-front estates $3M-$15M+. Gated neighborhoods and pristine beaches.",
    features: ["Gated communities", "Gulf frontage", "Private beaches", "Park access"],
  },
  {
    name: "Island Estates",
    description: "Prestigious waterfront community on the Intracoastal with deep water lots from $1.5M-$8M+ for boaters and yacht owners.",
    features: ["Deep water docks", "Intracoastal access", "Gulf proximity", "Protected harbor"],
  },
  {
    name: "Harbor Oaks",
    description: "Historic mainland neighborhood with mature oak canopy, larger lots, and waterfront properties $1.2M-$5M+.",
    features: ["Historic character", "Large lots", "Mature landscaping", "Water views"],
  },
];

const clearwaterFaqs = [
  {
    question: "What areas does FCS build luxury custom homes in Clearwater?",
    answer: "Florida Construction Specialists builds luxury custom homes throughout Clearwater's most desirable areas including Clearwater Beach, Sand Key, Island Estates, Harbor Oaks, and nearby Belleair. We specialize in both Gulf-front beachfront construction and Intracoastal waterfront properties. Our projects range from $1 million mainland estates to $15 million+ beachfront compounds on Sand Key and Clearwater Beach.",
  },
  {
    question: "How much does it cost to build a luxury custom home on Clearwater Beach?",
    answer: "Beach and barrier island construction in Clearwater commands premium pricing due to strict FEMA requirements, salt-air resistant materials, and specialized coastal foundations. Beachfront construction typically ranges $550-$850+ per square foot, compared to $400-$600/SF for mainland waterfront properties. A 4,000 SF beachfront home might cost $2.2M-$3.4M for construction alone, plus land costs which can exceed $1-4M for Gulf-front lots.",
  },
  {
    question: "What are the building requirements for Clearwater Beach properties?",
    answer: "Clearwater Beach and Sand Key are in FEMA VE flood zones requiring elevated construction, flood-resistant materials, and breakaway walls at lower levels. The City of Clearwater has beach overlay requirements including height limits, setbacks, and architectural guidelines. All beachfront construction requires impact-resistant windows/doors rated for 150+ mph winds, and structures must meet or exceed the Florida Building Code Coastal requirements.",
  },
  {
    question: "How long does it take to build a luxury home in Clearwater?",
    answer: "Mainland luxury homes in Clearwater typically require 14-20 months for construction. Beachfront and barrier island construction takes longer—typically 18-26 months—due to weather constraints, specialized inspections, and logistics challenges of building on narrow barrier islands. Design and permitting add 4-8 months, with beach properties often requiring additional environmental and coastal permits.",
  },
  {
    question: "Can you build homes with deep water docks in Clearwater?",
    answer: "Yes, waterfront construction with private docks is a specialty for FCS. Island Estates and Harbor Oaks offer deep water access to the Intracoastal Waterway with direct Gulf access. Dock construction requires permits from both the City of Clearwater and Florida DEP. We coordinate seawall construction, dock permitting, and boat lift installation as part of comprehensive waterfront projects.",
  },
  {
    question: "What makes building on Sand Key different from mainland Clearwater?",
    answer: "Sand Key is a barrier island with additional construction challenges: VE flood zone requirements with elevated living floors, limited access via one bridge affecting material delivery, stricter HOA and gated community requirements, and premium costs for salt-resistant materials and specialized coastal labor. However, Sand Key offers some of the most exclusive addresses in the Tampa Bay area with protected beaches and Gulf frontage.",
  },
  {
    question: "Do you handle hurricane-resistant construction in Clearwater?",
    answer: "Hurricane-resistant construction is mandatory for all Clearwater coastal properties. FCS builds to exceed Florida Building Code requirements with impact-resistant windows and doors, reinforced concrete block or ICF construction, enhanced roof tie-downs, whole-house generators, and proper elevation for flood zones. Our beachfront homes are designed to withstand major hurricanes while maintaining the luxury finishes our clients expect.",
  },
  {
    question: "What is the difference between Clearwater Beach and Belleair for luxury homes?",
    answer: "Clearwater Beach offers Gulf-front beach lifestyle with walkable amenities, restaurants, and vibrant tourism—ideal for those wanting beachfront living. Belleair is a prestigious mainland community known for the historic Belleview Biltmore area, larger estate lots, mature landscaping, and a quieter, more exclusive atmosphere. Belleair properties typically offer more land and privacy, while Clearwater Beach provides direct Gulf access and beach lifestyle.",
  },
];

const costData = [
  { tier: "Mainland Luxury", range: "$1M - $2.5M", sqft: "3,500 - 5,500 SF", costPerSqft: "$400 - $500/SF", timeline: "14-18 months" },
  { tier: "Waterfront Estate", range: "$2.5M - $5M", sqft: "5,000 - 7,500 SF", costPerSqft: "$475 - $575/SF", timeline: "16-20 months" },
  { tier: "Beachfront Premium", range: "$3.5M - $8M", sqft: "4,500 - 7,000 SF", costPerSqft: "$550 - $700/SF", timeline: "18-24 months" },
  { tier: "Gulf-Front Estate", range: "$8M - $15M+", sqft: "7,000 - 12,000+ SF", costPerSqft: "$700 - $850+/SF", timeline: "24-30 months" },
];

const processSteps = [
  { step: 1, title: "Discovery & Site Analysis", description: "Initial consultation, lot evaluation for flood zones and coastal requirements, budget alignment, and design direction" },
  { step: 2, title: "Pre-Construction", description: "Detailed coastal budgeting, constructability review, FEMA compliance planning, and specification development" },
  { step: 3, title: "Permitting", description: "City of Clearwater permits, FEMA elevation certificates, beach overlay approvals, and environmental permits" },
  { step: 4, title: "Foundation & Structure", description: "Elevated foundations for flood zones, concrete or ICF construction, and hurricane-rated structural systems" },
  { step: 5, title: "Systems & Envelope", description: "Salt-resistant electrical and plumbing, impact windows/doors, and complete building envelope for coastal durability" },
  { step: 6, title: "Finishes & Completion", description: "Luxury interior finishes, smart home integration, pool construction, dock installation, and final inspections" },
];

export default function LuxuryCustomHomesClearwaterPage() {
  return (
    <>
      <LocalBusinessSchema city="Clearwater" service="Luxury Custom Homes" />
      <ServiceSchema
        serviceName="Luxury Custom Home Construction"
        serviceDescription="Premier custom home builder in Clearwater, FL specializing in $1M-$15M+ beachfront estates, Gulf-front properties, and waterfront residences. Serving Clearwater Beach, Sand Key, Island Estates, Harbor Oaks, and Belleair."
        city="Clearwater"
        minPrice="1000000"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Luxury Custom Home Builder in Clearwater, FL"
        description="Comprehensive guide to building luxury custom homes in Clearwater. Learn about beachfront construction, Gulf-front estates, coastal building requirements, costs, timelines, and Clearwater's premier neighborhoods."
        datePublished="2024-01-15"
        dateModified="2025-01-18"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2023/12/custom-home-construction-2.jpg')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Clearwater, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Luxury Custom Homes in Clearwater
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Clearwater's premier custom home builder for $1M-$15M+ beachfront estates and waterfront residences. From Gulf-front properties on Sand Key to Intracoastal estates on Island Estates, we bring exceptional craftsmanship to the Tampa Bay beaches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule Design Consultation
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
              <Gem className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">$1M - $15M+ Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">$10M+ Bonding</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Coastal Construction Experts</span>
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
                Clearwater's Premier Beachfront Home Builder
              </h2>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists brings specialized coastal construction expertise to Clearwater's most exclusive addresses. We build luxury custom homes from $1 million to over $15 million, with particular expertise in beachfront properties on Clearwater Beach and Sand Key, and waterfront estates on Island Estates and Harbor Oaks.
              </p>

              <p className="text-gray-600 mb-6">
                Clearwater offers the quintessential Florida beach lifestyle—from the world-famous white sand beaches of Clearwater Beach to the exclusive Gulf-front estates of Sand Key and the protected deep water of Island Estates. Building in these coastal environments requires specialized knowledge of FEMA flood zones, salt-resistant construction, and hurricane-rated building systems that our team has mastered over two decades.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-4 mt-8">
                Luxury Home Specialties
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {homeTypes.map((home) => (
                  <div key={home.type} className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <home.icon className="w-8 h-8 text-brand-green flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-brand-green-dark mb-2">{home.type}</h4>
                        <p className="text-gray-600 text-sm">{home.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">
                Why Build a Luxury Home in Clearwater?
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>World-Class Beaches:</strong> Clearwater Beach consistently ranks among America's top beaches, with sugar-white sand and stunning Gulf sunsets steps from your door</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Deep Water Access:</strong> Island Estates and the Intracoastal Waterway provide protected deep water for yacht owners with direct Gulf access</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Exclusive Communities:</strong> Sand Key gated communities and Island Estates offer privacy, security, and the most prestigious addresses in Pinellas County</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Year-Round Lifestyle:</strong> Gulf breezes moderate temperatures for comfortable outdoor living with pools, docks, and beach activities throughout the year</span>
                </li>
              </ul>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Clearwater Custom Home Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Start Your Project</h3>
                <p className="text-gray-200 mb-4">
                  Schedule a consultation to discuss your beachfront vision, waterfront lot, or existing property.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-6 rounded-full hover:bg-brand-gold-light transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <RelatedServices city="Clearwater" currentService="luxury-custom-homes" />
              <NearbyLocations currentCity="Clearwater" service="luxury-custom-homes" serviceName="Luxury Custom Homes" />
            </div>
          </div>
        </div>
      </section>

      {/* Clearwater Neighborhoods */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Clearwater's Premier Neighborhoods for Luxury Homes
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We build in Clearwater's most desirable locations, from Gulf-front beach properties to protected Intracoastal waterfront estates.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {clearwaterNeighborhoods.map((neighborhood) => (
              <div key={neighborhood.name} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-brand-green-dark mb-2">{neighborhood.name}</h3>
                <p className="text-gray-600 mb-4">{neighborhood.description}</p>
                <div className="flex flex-wrap gap-2">
                  {neighborhood.features.map((feature) => (
                    <span key={feature} className="px-3 py-1 bg-brand-green/10 text-brand-green-dark text-sm rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost & Timeline Table */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Clearwater Luxury Home Construction Costs
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Beach and barrier island construction commands premium pricing due to FEMA requirements, coastal materials, and specialized foundations. These ranges reflect typical Clearwater projects.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Property Type</th>
                  <th className="px-6 py-4 text-left">Price Range</th>
                  <th className="px-6 py-4 text-left">Typical Size</th>
                  <th className="px-6 py-4 text-left">Cost Per SF</th>
                  <th className="px-6 py-4 text-left">Timeline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {costData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-brand-green-dark">{item.tier}</td>
                    <td className="px-6 py-4 text-gray-700">{item.range}</td>
                    <td className="px-6 py-4 text-gray-700">{item.sqft}</td>
                    <td className="px-6 py-4 text-gray-700">{item.costPerSqft}</td>
                    <td className="px-6 py-4 text-gray-700">{item.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 text-center mt-4">
            * Costs as of 2025. Does not include land, design fees, or soft costs. Beachfront properties include premium for FEMA compliance, coastal foundations, and salt-resistant materials.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Our Coastal Custom Home Building Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Building on Clearwater's barrier islands and waterfront properties requires specialized expertise. Our proven 6-phase process addresses coastal construction challenges.
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
                The FCS Difference in Coastal Luxury Homes
              </h2>
              <p className="text-gray-200 mb-6">
                Our commercial construction background brings unmatched project management capabilities to coastal residential construction. We understand the unique challenges of building on Clearwater's beaches and barrier islands—from FEMA compliance to hurricane-rated construction.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Coastal Expertise:</strong> Specialized knowledge of VE flood zone requirements, elevated construction, and salt-resistant materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Always Prime Contractor:</strong> We never subcontract our management responsibility—you get direct accountability</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>$10M+ Bonding Capacity:</strong> Financial strength to handle the largest beachfront custom home projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Premium Trade Relationships:</strong> Long-standing relationships with Pinellas County's best coastal specialty contractors</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <DollarSign className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">$75M+</div>
                <div className="text-gray-300 text-sm">Residential Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Home className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-gray-300 text-sm">Luxury Homes Built</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Award className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">20+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Users className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-gray-300 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FCS */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Clearwater Homeowners Choose FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-8">
              <Gem className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Coastal Craftsmanship</h3>
              <p className="text-gray-600">
                Every detail is executed with materials and methods designed for the demanding Gulf Coast environment—from salt-resistant finishes to hurricane-rated systems.
              </p>
            </div>
            <div className="card text-center p-8">
              <Compass className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Design Collaboration</h3>
              <p className="text-gray-600">
                We work seamlessly with Clearwater's premier coastal architects, providing constructability review and value engineering to optimize your beachfront design.
              </p>
            </div>
            <div className="card text-center p-8">
              <Shield className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">FEMA Expertise</h3>
              <p className="text-gray-600">
                Our deep knowledge of flood zone requirements, elevation certificates, and coastal permitting ensures your project meets all regulatory requirements from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={clearwaterFaqs}
        title="Clearwater Luxury Custom Homes FAQs"
        description="Common questions about building luxury custom homes in Clearwater, Florida including beachfront and waterfront properties."
      />

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Build Your Clearwater Dream Home
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From Gulf-front estates on Sand Key to waterfront homes on Island Estates, FCS brings exceptional coastal craftsmanship to Clearwater's finest custom homes. Schedule a consultation to discuss your vision.
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
