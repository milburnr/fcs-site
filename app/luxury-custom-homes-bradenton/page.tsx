import Link from "next/link";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Home, Compass, Waves, Star, Sun, Gem, Users, DollarSign, TrendingUp } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "Luxury Custom Homes Bradenton FL | $1M+ Waterfront & Estate Homes | FCS",
  description: "Bradenton luxury custom home builder specializing in $1M-$15M+ waterfront estates and architectural homes. Anna Maria Island gateway, Palma Sola, Lakewood Ranch, Manatee River. 15-20% savings vs Sarasota. Licensed, bonded, insured.",
  keywords: "luxury custom homes Bradenton, waterfront homes Bradenton, estate homes Anna Maria, custom home builder Bradenton, high-end residential construction Manatee County",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Residential", href: "/residential/" },
  { name: "Luxury Custom Homes Bradenton", href: "/luxury-custom-homes-bradenton/" },
];

const homeTypes = [
  {
    type: "Waterfront Estates",
    description: "Manatee River, Sarasota Bay, and Gulf-access properties with private docks, seawalls, and panoramic water views near Anna Maria Island",
    icon: Waves,
  },
  {
    type: "Architectural Homes",
    description: "Contemporary, Coastal Modern, Mediterranean, and transitional designs working with Manatee County's premier architects and designers",
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

const bradentonNeighborhoods = [
  {
    name: "Palma Sola",
    description: "Prestigious waterfront community with deep-water access to Sarasota Bay and completed estates ranging $1.5M-$6M+",
    features: ["Deep water access", "Bay views", "Established neighborhood", "Near beaches"],
  },
  {
    name: "Country Club",
    description: "Golf course community with large lots, mature landscaping, and homes ranging $1M-$4M+ in a private setting",
    features: ["Golf course views", "Large lots", "Private setting", "Family friendly"],
  },
  {
    name: "Lakewood Ranch",
    description: "Master-planned community with luxury enclaves, top schools, and new construction estates $1M-$8M+",
    features: ["Master planned", "Top schools", "Resort amenities", "Growing value"],
  },
  {
    name: "Anna Maria Island Gateway",
    description: "West Bradenton properties offering quick access to Anna Maria Island beaches with waterfront lots starting at $800K+",
    features: ["Beach access", "Waterfront lots", "Island lifestyle", "Growing demand"],
  },
];

const bradentonFaqs = [
  {
    question: "What neighborhoods does FCS build luxury custom homes in Bradenton?",
    answer: "Florida Construction Specialists builds luxury custom homes throughout Bradenton's most desirable areas including Palma Sola, Country Club, West Bradenton (Anna Maria Island gateway), Bayshore Gardens waterfront, and the Lakewood Ranch luxury enclaves. We also build on private lots along the Manatee River and Sarasota Bay. Our Bradenton projects range from $1 million to over $15 million, with particular expertise in waterfront construction.",
  },
  {
    question: "How does Bradenton compare to Sarasota for luxury home construction costs?",
    answer: "Bradenton offers exceptional value compared to neighboring Sarasota, with construction costs typically 15-20% lower while maintaining comparable quality and waterfront access. Land costs are significantly more affordable—waterfront lots in Palma Sola or West Bradenton start around $500K-$800K compared to $1.5M+ in Sarasota's Bird Key or Lido. This value proposition makes Bradenton increasingly attractive to luxury homebuyers seeking Gulf Coast living.",
  },
  {
    question: "How long does it take to build a luxury custom home in Bradenton?",
    answer: "Luxury custom homes in Bradenton typically require 12-22 months for construction, depending on size and complexity. A 4,000 SF home may take 12-16 months, while 8,000+ SF waterfront estates often require 18-22 months. Manatee County's permitting process averages 3-5 weeks for residential projects, which is generally faster than Hillsborough or Pinellas counties.",
  },
  {
    question: "What is the cost to build a luxury custom home in Bradenton?",
    answer: "Luxury custom home construction in Bradenton typically ranges from $300-$650+ per square foot depending on finishes, features, and complexity. Entry-level luxury ($1-2M) averages $300-400/SF, mid-range luxury ($2-4M) averages $400-500/SF, and high-end luxury ($4M+) can exceed $550-650/SF. These costs represent 15-20% savings compared to similar construction in Sarasota.",
  },
  {
    question: "Can you build on waterfront lots near Anna Maria Island?",
    answer: "Yes, waterfront construction in the Anna Maria Island corridor is a specialty for FCS. We build on Sarasota Bay, Palma Sola Bay, and Manatee River lots throughout West Bradenton. These projects require expertise in seawall construction, flood zone compliance (many properties are in VE or AE zones), dock permitting, and coastal setbacks. Anna Maria Island itself has strict building limitations, making West Bradenton waterfront an excellent alternative.",
  },
  {
    question: "What smart home features do you install in Bradenton luxury homes?",
    answer: "FCS integrates comprehensive smart home systems including Crestron, Savant, and Control4 for whole-house automation. Features include motorized hurricane shutters, integrated lighting scenes, multi-zone climate control, distributed audio/video, home theater systems, security and surveillance, automated pool and landscape systems, and voice control integration. Hurricane preparedness technology is particularly important for Gulf Coast properties.",
  },
  {
    question: "Why is Bradenton's luxury home market growing?",
    answer: "Bradenton's luxury market is experiencing significant growth due to several factors: proximity to Anna Maria Island (Florida's best beach), the Lakewood Ranch development boom, IMG Academy's international draw, improving downtown amenities along the Riverwalk, and most importantly, exceptional value compared to Sarasota and Tampa. Buyers are discovering they can build their dream waterfront home in Bradenton for significantly less than neighboring markets.",
  },
  {
    question: "What makes FCS different from other Bradenton luxury home builders?",
    answer: "FCS is always the prime contractor—we never subcontract our management responsibility. Our commercial construction background brings superior project management, detailed scheduling, and quality control to residential projects. We maintain 40+ years experience and in-house engineering for large projects and have established relationships with Manatee County permitting and the best specialty subcontractors in the region. Our track record includes waterfront estates, historic renovations, and complex architectural builds.",
  },
];

const costData = [
  { tier: "Entry Luxury", range: "$1M - $2M", sqft: "3,500 - 5,000 SF", costPerSqft: "$300 - $400/SF", sarasotaComparison: "$350 - $450/SF", timeline: "12-16 months" },
  { tier: "Mid-Range Luxury", range: "$2M - $4M", sqft: "5,000 - 7,000 SF", costPerSqft: "$400 - $500/SF", sarasotaComparison: "$450 - $550/SF", timeline: "14-18 months" },
  { tier: "High-End Luxury", range: "$4M - $8M", sqft: "7,000 - 10,000 SF", costPerSqft: "$500 - $600/SF", sarasotaComparison: "$550 - $650/SF", timeline: "16-22 months" },
  { tier: "Ultra Luxury", range: "$8M+", sqft: "10,000+ SF", costPerSqft: "$600 - $700+/SF", sarasotaComparison: "$650 - $750+/SF", timeline: "20-30 months" },
];

const processSteps = [
  { step: 1, title: "Discovery & Site Analysis", description: "Initial consultation, lot analysis in Palma Sola, Lakewood Ranch, or waterfront areas, budget alignment, and design direction" },
  { step: 2, title: "Pre-Construction", description: "Detailed budgeting, constructability review, value engineering, and specification development with your architect" },
  { step: 3, title: "Permitting", description: "Manatee County permit applications, HOA approvals, SWFWMD permits, and environmental permits for waterfront properties" },
  { step: 4, title: "Foundation & Structure", description: "Excavation, foundation work (including elevated construction for flood zones), concrete block or wood frame, and roof installation" },
  { step: 5, title: "Systems & Envelope", description: "Electrical, plumbing, HVAC rough-in, impact windows, hurricane-rated doors, and building envelope completion" },
  { step: 6, title: "Finishes & Completion", description: "Interior finishes, cabinetry, flooring, smart home integration, pool and landscaping, and final inspections" },
];

export default function LuxuryCustomHomesBradentonPage() {
  return (
    <>
      <LocalBusinessSchema city="Bradenton" service="Luxury Custom Homes" />
      <ServiceSchema
        serviceName="Luxury Custom Home Construction"
        serviceDescription="Premier custom home builder in Bradenton, FL specializing in $1M-$15M+ waterfront estates, architectural homes, and high-end residences. Serving Palma Sola, Country Club, Lakewood Ranch, Anna Maria Island gateway, and Manatee River waterfront properties."
        city="Bradenton"
        minPrice="1000000"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Luxury Custom Home Builder in Bradenton, FL"
        description="Comprehensive guide to building luxury custom homes in Bradenton. Learn about waterfront construction, premier neighborhoods, costs vs Sarasota, timelines, and what to expect from Manatee County's leading custom home builder."
        datePublished="2024-01-15"
        dateModified="2025-01-18"
        slug="luxury-custom-homes-bradenton"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/custom-home-construction-2/custom-home-construction-2-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Bradenton, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Luxury Custom Homes in Bradenton
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Bradenton's premier custom home builder for $1M-$15M+ waterfront estates and architectural homes. From Palma Sola to Lakewood Ranch, build your dream home at 15-20% less than Sarasota with exceptional Gulf Coast access near Anna Maria Island.
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
              <TrendingUp className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">15-20% vs Sarasota</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">In-House Engineering</span>
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
                Bradenton's Premier Luxury Home Builder
              </h2>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists brings the same precision, project management expertise, and quality control that defines our commercial construction work to Bradenton's most discerning homeowners. We specialize in luxury custom homes from $1 million to over $15 million, with particular expertise in waterfront properties along Sarasota Bay, Palma Sola Bay, and the Manatee River.
              </p>

              <p className="text-gray-600 mb-6">
                Bradenton offers an exceptional opportunity for luxury living—waterfront estates and custom homes at 15-20% less than neighboring Sarasota, with the same Gulf Coast lifestyle and quick access to Anna Maria Island's world-renowned beaches. Our team understands the unique requirements of building in Manatee County, from flood zone compliance to working with the growing number of luxury communities in Lakewood Ranch.
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
                Why Build a Custom Home in Bradenton?
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Value vs Sarasota:</strong> Build your dream home at 15-20% less than Sarasota or Tampa while enjoying the same Gulf Coast lifestyle, waterfront access, and quality construction</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Anna Maria Island Access:</strong> West Bradenton provides the closest gateway to Anna Maria Island—consistently rated Florida's best beach—without island building restrictions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Growing Luxury Market:</strong> Lakewood Ranch and emerging Bradenton communities offer new luxury enclaves with top-rated schools, resort amenities, and strong appreciation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Waterfront Opportunities:</strong> Deep-water access on Sarasota Bay, Palma Sola Bay, and Manatee River provides exceptional boating, fishing, and waterfront dining</span>
                </li>
              </ul>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Bradenton Custom Home Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Start Your Project</h3>
                <p className="text-gray-200 mb-4">
                  Schedule a consultation to discuss your luxury home vision, lot selection in Palma Sola, Lakewood Ranch, or waterfront areas.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-6 rounded-full hover:bg-brand-gold-light transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <RelatedServices city="Bradenton" currentService="luxury-custom-homes" />
              <NearbyLocations currentCity="Bradenton" service="luxury-custom-homes" serviceName="Luxury Custom Homes" />
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

      {/* Bradenton Neighborhoods */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Bradenton's Premier Neighborhoods for Luxury Homes
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We build in Bradenton's most desirable neighborhoods, each offering unique character, waterfront access, and lifestyle opportunities at exceptional value.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {bradentonNeighborhoods.map((neighborhood) => (
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
            Bradenton Luxury Home Construction Costs vs Sarasota
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Bradenton delivers exceptional value—build your dream home at 15-20% less than Sarasota with comparable quality and Gulf Coast lifestyle. These ranges reflect typical Manatee County luxury home projects.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-4 py-4 text-left">Project Tier</th>
                  <th className="px-4 py-4 text-left">Price Range</th>
                  <th className="px-4 py-4 text-left">Typical Size</th>
                  <th className="px-4 py-4 text-left">Bradenton $/SF</th>
                  <th className="px-4 py-4 text-left">Sarasota $/SF</th>
                  <th className="px-4 py-4 text-left">Timeline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {costData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-4 font-semibold text-brand-green-dark">{item.tier}</td>
                    <td className="px-4 py-4 text-gray-700">{item.range}</td>
                    <td className="px-4 py-4 text-gray-700">{item.sqft}</td>
                    <td className="px-4 py-4 text-brand-green font-semibold">{item.costPerSqft}</td>
                    <td className="px-4 py-4 text-gray-500">{item.sarasotaComparison}</td>
                    <td className="px-4 py-4 text-gray-700">{item.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 text-center mt-4">
            * Costs as of 2025. Does not include land, design fees, or soft costs. Waterfront properties may have additional costs for seawalls and docks. Savings vary by project scope.
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
            Building a luxury custom home requires meticulous planning and execution. Our proven 6-phase process ensures your Bradenton dream home becomes reality.
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
                The FCS Difference in Bradenton Luxury Homes
              </h2>
              <p className="text-gray-200 mb-6">
                Our commercial construction background brings unmatched project management capabilities to residential construction. We apply the same rigorous quality control, scheduling discipline, and documentation standards that define major commercial projects—delivering your Bradenton home on time and on budget.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Always Prime Contractor:</strong> We never subcontract our management responsibility—you get direct accountability</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>In-House Engineering:</strong> Financial strength to handle the largest custom home projects in Manatee County</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Local Permitting Expertise:</strong> Strong relationships with Manatee County building departments and SWFWMD</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Premium Trade Relationships:</strong> Long-standing relationships with Tampa Bay's best specialty contractors</span>
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
                <TrendingUp className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">15-20%</div>
                <div className="text-gray-300 text-sm">Savings vs Sarasota</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FCS */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Bradenton Homeowners Choose FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-8">
              <Gem className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Exceptional Value</h3>
              <p className="text-gray-600">
                Build your Gulf Coast dream home in Bradenton at 15-20% less than Sarasota, with the same quality construction and waterfront lifestyle near Anna Maria Island.
              </p>
            </div>
            <div className="card text-center p-8">
              <Compass className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Design Collaboration</h3>
              <p className="text-gray-600">
                We work seamlessly with Tampa Bay's premier architects and designers, providing constructability review and value engineering to optimize your design and budget.
              </p>
            </div>
            <div className="card text-center p-8">
              <Shield className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Hurricane Ready</h3>
              <p className="text-gray-600">
                Every FCS home exceeds Florida Building Code for wind resistance with impact windows, reinforced construction, and whole-house generators—essential for Gulf Coast living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={bradentonFaqs}
        title="Bradenton Luxury Custom Homes FAQs"
      />

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Build Your Bradenton Dream Home
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From waterfront estates on Palma Sola Bay to architectural masterpieces in Lakewood Ranch, FCS brings exceptional craftsmanship to Bradenton's finest custom homes—at 15-20% less than Sarasota. Schedule a consultation today.
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
