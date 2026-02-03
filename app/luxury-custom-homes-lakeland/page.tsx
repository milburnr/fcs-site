import Link from "next/link";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Home, Compass, Waves, Star, Sun, Gem, Users, DollarSign, TreePine, Landmark } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "Luxury Custom Homes Lakeland FL | Lakefront Estates | FCS",
  description: "Lakeland luxury custom home builder specializing in $750K-$5M+ lakefront estates. South Lake Morton, Lake Hollingsworth, Grasslands. Larger lots, better value than coastal areas. Licensed, bonded, insured.",
  keywords: "luxury custom homes Lakeland, lakefront homes Lakeland FL, custom home builder Lakeland, Frank Lloyd Wright architecture Lakeland, estate homes Polk County",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Residential", href: "/residential/" },
  { name: "Luxury Custom Homes Lakeland", href: "/luxury-custom-homes-lakeland/" },
];

const homeTypes = [
  {
    type: "Lakefront Estates",
    description: "Custom homes on Lake Hollingsworth, Lake Morton, Lake Parker, and 38+ other lakes with private docks, boat houses, and panoramic water views",
    icon: Waves,
  },
  {
    type: "Architectural Heritage Homes",
    description: "Prairie Style, Mid-Century Modern, and contemporary designs inspired by Lakeland's Frank Lloyd Wright legacy at Florida Southern College",
    icon: Landmark,
  },
  {
    type: "Estate Properties",
    description: "Sprawling 1-5+ acre lots in Grasslands, Providence, and rural Polk County with equestrian facilities, guest houses, and private amenities",
    icon: TreePine,
  },
  {
    type: "Smart Modern Living",
    description: "Fully integrated smart home technology with energy-efficient design, solar readiness, and contemporary Florida indoor-outdoor living",
    icon: Home,
  },
];

const lakelandNeighborhoods = [
  {
    name: "South Lake Morton / Lake Morton Heights",
    description: "Historic luxury district with homes ranging $800K-$3M+ on oversized lots with mature oak canopies and lake proximity",
    features: ["Historic character", "Walkable to downtown", "Mature landscaping", "Lake Morton views"],
  },
  {
    name: "Lake Hollingsworth",
    description: "Premier lakefront living surrounding the scenic 2.5-mile walking path, with custom homes from $1M-$4M+ and Florida Southern College nearby",
    features: ["Direct lake access", "Florida Southern campus", "Premium lots", "Architectural heritage"],
  },
  {
    name: "Grasslands",
    description: "Exclusive gated golf community with estate lots from 1-3+ acres and custom homes $1.5M-$5M+ featuring championship golf and country club amenities",
    features: ["Gated security", "Golf course lots", "1-3+ acre homesites", "Country club living"],
  },
  {
    name: "Dixieland Historic District",
    description: "Charming historic neighborhood with bungalows and new construction opportunities from $600K-$1.5M, perfect for renovation or custom builds",
    features: ["Historic district tax benefits", "Downtown adjacent", "Character homes", "Community events"],
  },
];

const lakelandFaqs = [
  {
    question: "What neighborhoods does FCS build luxury custom homes in Lakeland?",
    answer: "Florida Construction Specialists builds luxury custom homes throughout Lakeland's most prestigious areas including South Lake Morton, Lake Morton Heights, Lake Hollingsworth, Grasslands, Providence, Dixieland Historic District, and lakefront properties throughout Polk County. We also build on private acreage in surrounding areas like Auburndale and Winter Haven. Our Lakeland projects typically range from $750,000 to over $5 million.",
  },
  {
    question: "How do Lakeland luxury home costs compare to Tampa and coastal areas?",
    answer: "Lakeland offers exceptional value compared to coastal Tampa Bay areas. Construction costs are typically 10-15% lower due to reduced material transportation costs and less complex permitting. Land costs are significantly lower—premium lakefront lots in Lakeland start around $150K-$400K compared to $1M+ in South Tampa or Davis Islands. You can build a comparable luxury home for 25-40% less total investment while enjoying larger lots and no flood insurance requirements for most properties.",
  },
  {
    question: "How long does it take to build a luxury custom home in Lakeland?",
    answer: "Luxury custom homes in Lakeland typically require 12-20 months for construction, depending on size and complexity. A 4,000 SF home may take 12-15 months, while 8,000+ SF estates often require 18-20 months. Lakeland's Building Inspection Division typically processes permits in 3-5 weeks—faster than coastal municipalities. The absence of coastal construction requirements also streamlines the building process.",
  },
  {
    question: "What is the cost to build a luxury custom home in Lakeland?",
    answer: "Luxury custom home construction in Lakeland typically ranges from $300-$650+ per square foot depending on finishes, features, and complexity. This represents 10-15% savings versus coastal areas. Entry-level luxury ($750K-$1.5M) averages $300-$400/SF, mid-range luxury ($1.5M-$3M) averages $400-$500/SF, and high-end luxury ($3M+) ranges $500-$650/SF with premium finishes and systems.",
  },
  {
    question: "Does Lakeland require hurricane-resistant construction?",
    answer: "Yes, but Lakeland's inland location means Zone 2 wind requirements (110 mph design wind speed) versus Zone 3 (120 mph) for coastal areas. This can reduce structural costs by 5-10%. All FCS homes still exceed code requirements with impact-resistant windows, reinforced construction, and whole-house generators. Importantly, most Lakeland properties are in Zone X (minimal flood risk), eliminating expensive flood-resistant construction requirements.",
  },
  {
    question: "Can you build lakefront homes on Lakeland's many lakes?",
    answer: "Yes, lakefront construction is a specialty for FCS in Lakeland. Polk County has 550+ named lakes, offering abundant waterfront opportunities at a fraction of coastal prices. We build on Lake Hollingsworth, Lake Morton, Lake Parker, Lake Gibson, and dozens of other lakes. Lakefront projects require understanding of lake setback requirements, dock permitting through Polk County, and proper stormwater management, but avoid the complex coastal regulations required for Tampa Bay waterfront properties.",
  },
  {
    question: "How does Lakeland's Frank Lloyd Wright heritage influence custom home design?",
    answer: "Florida Southern College houses the world's largest single-site collection of Frank Lloyd Wright architecture, including 13 structures. This heritage inspires Prairie Style and organic architecture throughout Lakeland. FCS works with architects who specialize in Wright-inspired designs featuring horizontal lines, open floor plans, natural materials, and indoor-outdoor integration. These designs complement Lakeland's natural lake settings while honoring the city's architectural legacy.",
  },
  {
    question: "What makes Lakeland attractive for luxury home buyers?",
    answer: "Lakeland offers compelling advantages: larger lots (often 1+ acres) at lower prices, abundant lakefront opportunities, no traffic congestion of Tampa, excellent schools, Florida Southern College cultural amenities, and 30-minute access to Tampa and Orlando via I-4. The city's architectural heritage, downtown revitalization, and Publix headquarters corporate presence attract professionals seeking quality of life with proximity to major metros.",
  },
];

const costData = [
  { tier: "Entry Luxury", range: "$750K - $1.5M", sqft: "3,500 - 5,000 SF", costPerSqft: "$300 - $400/SF", timeline: "12-15 months" },
  { tier: "Mid-Range Luxury", range: "$1.5M - $3M", sqft: "5,000 - 7,500 SF", costPerSqft: "$400 - $500/SF", timeline: "14-18 months" },
  { tier: "High-End Luxury", range: "$3M - $5M", sqft: "7,500 - 10,000 SF", costPerSqft: "$500 - $600/SF", timeline: "16-20 months" },
  { tier: "Estate Class", range: "$5M+", sqft: "10,000+ SF", costPerSqft: "$550 - $650+/SF", timeline: "20-30 months" },
];

const processSteps = [
  { step: 1, title: "Discovery & Site Selection", description: "Initial consultation, lake and lot analysis, budget alignment, and connection with Lakeland-area architects" },
  { step: 2, title: "Pre-Construction", description: "Detailed budgeting, constructability review, value engineering, and specification development" },
  { step: 3, title: "Permitting", description: "City of Lakeland permits, Polk County approvals, HOA review for Grasslands and gated communities" },
  { step: 4, title: "Foundation & Structure", description: "Site preparation, foundation work, concrete block or wood frame construction, and roof installation" },
  { step: 5, title: "Systems & Envelope", description: "Electrical, plumbing, HVAC rough-in, windows, doors, and building envelope completion" },
  { step: 6, title: "Finishes & Completion", description: "Interior finishes, cabinetry, flooring, smart home integration, landscaping, and final inspections" },
];

const valueComparison = [
  { feature: "Average Lot Price (Premium)", lakeland: "$150K - $400K", tampa: "$800K - $2M+", savings: "60-80% less" },
  { feature: "Cost Per Square Foot", lakeland: "$300 - $600/SF", tampa: "$350 - $750/SF", savings: "10-15% less" },
  { feature: "Typical Lot Size", lakeland: "0.5 - 3+ acres", tampa: "0.15 - 0.5 acres", savings: "3-6x larger" },
  { feature: "Flood Insurance (Annual)", lakeland: "Usually $0", tampa: "$2,000 - $15,000+", savings: "Major savings" },
  { feature: "Average Permit Time", lakeland: "3-5 weeks", tampa: "4-8 weeks", savings: "30-40% faster" },
];

export default function LuxuryCustomHomesLakelandPage() {
  return (
    <>
      <LocalBusinessSchema city="Lakeland" service="Luxury Custom Homes" />
      <ServiceSchema
        serviceName="Luxury Custom Home Construction"
        serviceDescription="Premier custom home builder in Lakeland, FL specializing in $750K-$5M+ lakefront estates, architectural homes, and estate properties. Serving South Lake Morton, Lake Hollingsworth, Grasslands, and lakefront properties throughout Polk County."
        city="Lakeland"
        minPrice="750000"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Luxury Custom Home Builder in Lakeland, FL"
        description="Comprehensive guide to building luxury custom homes in Lakeland. Learn about lakefront construction, premier neighborhoods, costs compared to coastal areas, and what to expect from Lakeland's leading custom home builder."
        datePublished="2024-01-15"
        dateModified="2025-01-18"
        slug="/luxury-custom-homes-lakeland/"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/custom-home-construction-2/custom-home-construction-2-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Lakeland, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Luxury Custom Homes in Lakeland
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Lakeland's premier custom home builder for $750K-$5M+ lakefront estates and architectural residences. Experience larger lots, better value, and Florida's finest lakefront living in the City of Lakes. Frank Lloyd Wright-inspired design meets Central Florida lifestyle.
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
              <span className="font-semibold text-gray-700">$750K - $5M+ Projects</span>
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
                Lakeland's Premier Luxury Home Builder
              </h2>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists brings the same precision, project management expertise, and quality control that defines our commercial construction work to Lakeland's most discerning homeowners. We specialize in luxury custom homes from $750,000 to over $5 million, with particular expertise in lakefront properties on Lake Hollingsworth, Lake Morton, Lake Parker, and the prestigious Grasslands community.
              </p>

              <p className="text-gray-600 mb-6">
                Lakeland offers an exceptional value proposition for luxury home buyers—larger lots, abundant lakefront opportunities, and construction costs 10-15% below coastal Tampa Bay areas. The city's 38+ named lakes provide waterfront living at a fraction of Tampa Bay prices, while the Frank Lloyd Wright architectural heritage at Florida Southern College inspires distinctive home designs throughout the area.
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
                Why Build a Custom Home in Lakeland?
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Exceptional Value:</strong> Premium lakefront lots start at $150K-$400K versus $1M+ in South Tampa, with construction costs 10-15% lower than coastal areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Larger Lot Sizes:</strong> Typical luxury lots of 0.5-3+ acres compared to 0.15-0.5 acres in coastal communities—room for guest houses, pools, and privacy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Lakefront Living:</strong> Over 38 named lakes offer abundant waterfront opportunities without coastal flood insurance requirements or storm surge risks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Architectural Heritage:</strong> Frank Lloyd Wright's Florida Southern College campus inspires distinctive Prairie Style and organic architecture throughout Lakeland</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Strategic Location:</strong> 30 minutes to Tampa and Orlando via I-4, with Publix headquarters and growing corporate presence attracting professionals</span>
                </li>
              </ul>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Lakeland Custom Home Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Start Your Project</h3>
                <p className="text-gray-200 mb-4">
                  Schedule a consultation to discuss your luxury home vision, lakefront lot selection, or Grasslands homesite.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-6 rounded-full hover:bg-brand-gold-light transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <RelatedServices city="Lakeland" currentService="luxury-custom-homes" />
              <NearbyLocations currentCity="Lakeland" service="luxury-custom-homes" serviceName="Luxury Custom Homes" />
            </div>
          </div>
        </div>
      </section>

      {/* Value Comparison Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Lakeland vs. Coastal Tampa Bay: The Value Advantage
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Lakeland offers significant advantages for luxury home buyers seeking more space, better value, and lakefront living without coastal complexities.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-left">Lakeland</th>
                  <th className="px-6 py-4 text-left">Tampa (Coastal)</th>
                  <th className="px-6 py-4 text-left">Your Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {valueComparison.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-brand-green-dark">{item.feature}</td>
                    <td className="px-6 py-4 text-gray-700">{item.lakeland}</td>
                    <td className="px-6 py-4 text-gray-700">{item.tampa}</td>
                    <td className="px-6 py-4 text-brand-green font-semibold">{item.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 text-center mt-4">
            * Comparisons based on 2025 market data. Individual properties vary based on specific location and features.
          </p>
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

      {/* Lakeland Neighborhoods */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Lakeland's Premier Neighborhoods for Luxury Homes
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We build in Lakeland's most prestigious neighborhoods, each offering unique character, lot sizes, and lifestyle opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {lakelandNeighborhoods.map((neighborhood) => (
              <div key={neighborhood.name} className="bg-gray-50 rounded-lg p-6 shadow-md">
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
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Lakeland Luxury Home Construction Costs
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Construction costs in Lakeland are typically 10-15% lower than coastal Tampa Bay areas. These ranges reflect typical Lakeland luxury home projects—actual costs depend on specific design and specifications.
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
            * Costs as of 2025. Does not include land, design fees, or soft costs. Lakefront properties may have additional costs for docks and seawalls.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section bg-white">
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
                The FCS Difference in Lakeland Luxury Homes
              </h2>
              <p className="text-gray-200 mb-6">
                Our commercial construction background brings unmatched project management capabilities to residential construction. We apply the same rigorous quality control, scheduling discipline, and documentation standards that define major commercial projects—combined with deep understanding of Lakeland's unique building environment.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Always Prime Contractor:</strong> We never subcontract our management responsibility—you get direct accountability</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>In-House Engineering:</strong> Financial strength to handle the largest custom home projects in Lakeland</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Polk County Expertise:</strong> Strong relationships with Lakeland Building Division and Polk County permitting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Premium Trade Relationships:</strong> Long-standing relationships with Central Florida's best specialty contractors</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <DollarSign className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">$25M+</div>
                <div className="text-gray-300 text-sm">Residential Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Home className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">40+</div>
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
            Why Lakeland Homeowners Choose FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-8">
              <Gem className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Uncompromising Quality</h3>
              <p className="text-gray-600">
                Every detail matters in a luxury home. Our quality control processes ensure premium finishes, precise millwork, and flawless execution throughout your Lakeland project.
              </p>
            </div>
            <div className="card text-center p-8">
              <Compass className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Design Collaboration</h3>
              <p className="text-gray-600">
                We work seamlessly with Central Florida's premier architects and designers, including those specializing in Frank Lloyd Wright-inspired and contemporary Florida designs.
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
        items={lakelandFaqs}
        title="Lakeland Luxury Custom Homes FAQs"
      />

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Build Your Lakeland Dream Home
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From lakefront estates to architectural masterpieces, FCS brings exceptional craftsmanship to Lakeland's finest custom homes. Experience the value advantage of Central Florida's premier lake community.
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
