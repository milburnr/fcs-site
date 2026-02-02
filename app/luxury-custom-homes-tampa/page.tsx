import Link from "next/link";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Home, Compass, Waves, Star, Sun, Gem, Users, DollarSign } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "Luxury Custom Homes Tampa FL | $1M+ Waterfront & Estate Homes | FCS",
  description: "Tampa luxury custom home builder specializing in $1M-$20M+ waterfront estates, architectural homes, and high-end residences. Davis Islands, Beach Park, South Tampa, Harbour Island. Licensed, bonded, insured.",
  keywords: "luxury custom homes Tampa, waterfront homes Tampa, estate homes Davis Islands, custom home builder Tampa, high-end residential construction Tampa",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Residential", href: "/residential/" },
  { name: "Luxury Custom Homes", href: "/luxury-custom-homes-tampa/" },
];

const homeTypes = [
  {
    type: "Waterfront Estates",
    description: "Tampa Bay, Hillsborough River, and channel-front properties with private docks, seawalls, and panoramic water views",
    icon: Waves,
  },
  {
    type: "Architectural Homes",
    description: "Contemporary, Mediterranean, Coastal Modern, and custom architectural designs working with Tampa's premier architects",
    icon: Compass,
  },
  {
    type: "Smart Home Estates",
    description: "Fully integrated smart home technology including Crestron, Savant, and Control4 systems for lighting, climate, security, and entertainment",
    icon: Home,
  },
  {
    type: "Resort-Style Living",
    description: "Outdoor living spaces with infinity pools, summer kitchens, cabanas, and tropical landscaping for year-round Florida lifestyle",
    icon: Sun,
  },
];

const tampaNeighborhoods = [
  {
    name: "Davis Islands",
    description: "Tampa's most prestigious address with Tampa Bay waterfront lots starting at $2M+ and completed estates $5M-$20M+",
    features: ["Bay views", "Private docks", "Walkable to downtown", "Seaplane basin"],
  },
  {
    name: "Beach Park",
    description: "Historic South Tampa neighborhood with large lots, mature oaks, and homes ranging $1.5M-$8M+",
    features: ["Large lots", "Established neighborhood", "Top schools", "Near Bayshore"],
  },
  {
    name: "Harbour Island",
    description: "Exclusive island community minutes from downtown with waterfront estates $2M-$15M+",
    features: ["Gated community", "Marina access", "Downtown views", "Private security"],
  },
  {
    name: "South Tampa Bayshore",
    description: "Properties along the world-famous Bayshore Boulevard with bay views and classic Florida architecture",
    features: ["Bayshore frontage", "Historic character", "Mature landscaping", "Premium location"],
  },
];

const tampaFaqs = [
  {
    question: "What neighborhoods does FCS build luxury custom homes in Tampa?",
    answer: "Florida Construction Specialists builds luxury custom homes throughout Tampa's most prestigious neighborhoods including Davis Islands, Beach Park, Harbour Island, Palma Ceia, Hyde Park, Bayshore Boulevard corridor, Culbreath Isles, and waterfront properties along Tampa Bay and the Hillsborough River. We also build on private lots in South Tampa, North Tampa, and the greater Tampa Bay area. Our projects range from $1 million to over $20 million.",
  },
  {
    question: "How long does it take to build a luxury custom home in Tampa?",
    answer: "Luxury custom homes in Tampa typically require 14-24 months for construction, depending on size and complexity. A 5,000 SF home may take 14-18 months, while 10,000+ SF estates often require 20-24 months or more. This does not include design and permitting, which can add 4-8 months. Tampa's permitting process through the City Building Department averages 4-8 weeks for residential projects.",
  },
  {
    question: "What is the cost to build a luxury custom home in Tampa?",
    answer: "Luxury custom home construction in Tampa typically ranges from $350-$750+ per square foot depending on finishes, features, and complexity. Waterfront properties with seawalls and docks add significant costs. Entry-level luxury ($1-2M) averages $350-450/SF, mid-range luxury ($2-5M) averages $450-550/SF, and ultra-luxury ($5M+) can exceed $650-750/SF with premium finishes and systems.",
  },
  {
    question: "Do you build hurricane-resistant luxury homes in Tampa?",
    answer: "Absolutely. All FCS luxury homes exceed Florida Building Code wind resistance requirements. We incorporate impact-resistant windows and doors, reinforced concrete block or ICF construction, upgraded roof tie-downs, whole-house generators, and flood-resistant design for waterfront properties. Our homes are designed to withstand major hurricanes while maintaining architectural elegance.",
  },
  {
    question: "Can you build on waterfront lots in Tampa?",
    answer: "Yes, waterfront construction is a specialty for FCS. We build on Tampa Bay, Hillsborough River, and channel-front lots throughout Davis Islands, Harbour Island, Culbreath Isles, and South Tampa. Waterfront projects require additional expertise including seawall construction or repair, dock permitting through Army Corps of Engineers and FDEP, flood zone compliance, and coastal setback requirements.",
  },
  {
    question: "What smart home features do you install in Tampa luxury homes?",
    answer: "FCS integrates comprehensive smart home systems including Crestron, Savant, and Control4 for whole-house automation. Features include motorized shades, integrated lighting scenes, multi-zone climate control, distributed audio/video, home theater systems, security and surveillance, automated pool and landscape systems, and voice control integration. We work with Tampa's leading AV integrators to deliver seamless technology experiences.",
  },
  {
    question: "How do you handle design and architecture for custom homes?",
    answer: "FCS works collaboratively with Tampa's premier residential architects including firms specializing in contemporary, Mediterranean, coastal, and transitional designs. We provide pre-construction services including constructability review, value engineering, and detailed budgeting during design. Our design-build approach ensures seamless coordination between architect, interior designer, and builder from concept through completion.",
  },
  {
    question: "What makes FCS different from other Tampa luxury home builders?",
    answer: "FCS is always the prime contractor—we never subcontract our management responsibility. Our 40+ years experience and in-house engineering allows us to handle the largest custom home projects. We maintain long-term relationships with Tampa's best specialty subcontractors for premium finishes. Our commercial construction background brings superior project management, scheduling, and quality control to residential projects.",
  },
];

const costData = [
  { tier: "Entry Luxury", range: "$1M - $2M", sqft: "3,500 - 5,000 SF", costPerSqft: "$350 - $450/SF", timeline: "14-18 months" },
  { tier: "Mid-Range Luxury", range: "$2M - $5M", sqft: "5,000 - 8,000 SF", costPerSqft: "$450 - $550/SF", timeline: "16-20 months" },
  { tier: "High-End Luxury", range: "$5M - $10M", sqft: "8,000 - 12,000 SF", costPerSqft: "$550 - $650/SF", timeline: "18-24 months" },
  { tier: "Ultra Luxury", range: "$10M+", sqft: "12,000+ SF", costPerSqft: "$650 - $750+/SF", timeline: "24-36 months" },
];

const processSteps = [
  { step: 1, title: "Discovery & Site Analysis", description: "Initial consultation, lot analysis, budget alignment, and design direction with your architect" },
  { step: 2, title: "Pre-Construction", description: "Detailed budgeting, constructability review, value engineering, and specification development" },
  { step: 3, title: "Permitting", description: "City of Tampa permit applications, HOA approvals, and environmental permits for waterfront properties" },
  { step: 4, title: "Foundation & Structure", description: "Excavation, foundation work, concrete block or wood frame construction, and roof installation" },
  { step: 5, title: "Systems & Envelope", description: "Electrical, plumbing, HVAC rough-in, windows, doors, and building envelope completion" },
  { step: 6, title: "Finishes & Completion", description: "Interior finishes, cabinetry, flooring, smart home integration, landscaping, and final inspections" },
];

export default function LuxuryCustomHomesTampaPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Luxury Custom Homes" />
      <ServiceSchema
        serviceName="Luxury Custom Home Construction"
        serviceDescription="Premier custom home builder in Tampa, FL specializing in $1M-$20M+ waterfront estates, architectural homes, and high-end residences. Serving Davis Islands, Beach Park, Harbour Island, South Tampa, and Tampa Bay waterfront properties."
        city="Tampa"
        minPrice="1000000"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Luxury Custom Home Builder in Tampa, FL"
        description="Comprehensive guide to building luxury custom homes in Tampa. Learn about waterfront construction, premier neighborhoods, costs, timelines, and what to expect from Tampa's leading custom home builder."
        datePublished="2024-01-15"
        dateModified="2025-01-18"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/custom-home-construction-2/custom-home-construction-2-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Tampa, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Luxury Custom Homes in Tampa
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Tampa Bay's premier custom home builder for $1M-$20M+ waterfront estates, architectural homes, and high-end residences. From Davis Islands to Beach Park, we bring exceptional craftsmanship to Tampa's finest neighborhoods.
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
              <span className="font-semibold text-gray-700">$1M - $20M+ Projects</span>
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
              <Star className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Prime Contractor Only</span>
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
                Tampa's Premier Luxury Home Builder
              </h2>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists brings the same precision, project management expertise, and quality control that defines our commercial construction work to Tampa's most discerning homeowners. We specialize in luxury custom homes from $1 million to over $20 million, with particular expertise in waterfront properties on Davis Islands, Harbour Island, and along Tampa Bay.
              </p>

              <p className="text-gray-600 mb-6">
                Tampa offers exceptional opportunities for luxury living—from the historic tree-lined streets of Beach Park and Hyde Park to the waterfront estates of Davis Islands and Bayshore Boulevard. Our team understands the unique requirements of building in these prestigious neighborhoods, including historic overlay districts, waterfront permitting, and the expectations of discerning homeowners.
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
                Why Build a Custom Home in Tampa?
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Year-Round Lifestyle:</strong> Tampa's subtropical climate allows for true indoor-outdoor living with pools, outdoor kitchens, and covered lanais used throughout the year</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Waterfront Opportunities:</strong> Tampa Bay, Hillsborough River, and channel-front lots offer exceptional water access for boating, fishing, and waterfront dining</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Established Neighborhoods:</strong> Prestigious addresses in Davis Islands, Beach Park, Palma Ceia, and Hyde Park with mature trees and walkable streets</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Value Growth:</strong> South Tampa and waterfront properties have seen consistent appreciation, with premium lots commanding $1M-$4M+ before construction</span>
                </li>
              </ul>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Tampa Custom Home Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Start Your Project</h3>
                <p className="text-gray-200 mb-4">
                  Schedule a consultation to discuss your luxury home vision, lot selection, or current property.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-6 rounded-full hover:bg-brand-gold-light transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <RelatedServices city="Tampa" currentService="luxury-custom-homes" />
              <NearbyLocations currentCity="Tampa" service="luxury-custom-homes" serviceName="Luxury Custom Homes" />
            </div>
          </div>
        </div>
      </section>

      
      {/* Visual Break */}
      <ContentParallax
        src="/images/tampa-luxury-custom-home-construction/tampa-luxury-custom-home-construction-small.webp"
        alt="Luxury custom home construction"
        title="Building Dream Homes"
        subtitle="Waterfront estates and architectural masterpieces"
        overlayOpacity={0.5}
      />

      {/* Tampa Neighborhoods */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Tampa's Premier Neighborhoods for Luxury Homes
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We build in Tampa's most prestigious neighborhoods, each offering unique character, lot sizes, and lifestyle opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {tampaNeighborhoods.map((neighborhood) => (
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
            Tampa Luxury Home Construction Costs
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Construction costs vary based on finishes, features, and complexity. These ranges reflect typical Tampa luxury home projects—actual costs depend on specific design and specifications.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Project Tier</th>
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
            * Costs as of 2025. Does not include land, design fees, or soft costs. Waterfront properties may have additional costs for seawalls and docks.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Our Custom Home Building Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Building a luxury custom home requires meticulous planning and execution. Our proven 6-phase process ensures your vision becomes reality.
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
                The FCS Difference in Luxury Homes
              </h2>
              <p className="text-gray-200 mb-6">
                Our commercial construction background brings unmatched project management capabilities to residential construction. We apply the same rigorous quality control, scheduling discipline, and documentation standards that define major commercial projects.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Always Prime Contractor:</strong> We never subcontract our management responsibility—you get direct accountability</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>In-House Engineering:</strong> Financial strength to handle the largest custom home projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Detailed Project Controls:</strong> Weekly progress reports, detailed budgeting, and schedule tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Premium Trade Relationships:</strong> Long-standing relationships with Tampa's best specialty contractors</span>
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
            Why Tampa Homeowners Choose FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-8">
              <Gem className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Uncompromising Quality</h3>
              <p className="text-gray-600">
                Every detail matters in a luxury home. Our quality control processes ensure premium finishes, precise millwork, and flawless execution throughout your project.
              </p>
            </div>
            <div className="card text-center p-8">
              <Compass className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Design Collaboration</h3>
              <p className="text-gray-600">
                We work seamlessly with Tampa's premier architects and designers, providing constructability review and value engineering to optimize your design.
              </p>
            </div>
            <div className="card text-center p-8">
              <Shield className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Financial Security</h3>
              <p className="text-gray-600">
                Our 40+ years experience and in-house engineering, comprehensive insurance, and detailed project accounting give you confidence throughout the construction process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={tampaFaqs}
        title="Tampa Luxury Custom Homes FAQs"
        description="Common questions about building luxury custom homes in Tampa, Florida."
      />

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Build Your Tampa Dream Home
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From waterfront estates to architectural masterpieces, FCS brings exceptional craftsmanship to Tampa's finest custom homes. Schedule a consultation to discuss your vision.
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
