import Link from "next/link";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Home, Compass, Waves, Star, Sun, Gem, Users, DollarSign, Palette } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Custom Homes Sarasota FL | $1M+ Barrier Island Estates | FCS",
  description: "Sarasota luxury custom home builder specializing in $1M-$25M+ barrier island estates and waterfront properties. Siesta Key, Longboat Key, Bird Key, Lido Key, Casey Key. Sarasota School of Architecture expertise. Licensed, bonded, insured.",
  keywords: "luxury custom homes Sarasota, waterfront homes Siesta Key, estate homes Longboat Key, custom home builder Sarasota, Bird Key luxury homes, Lido Key custom homes",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Residential", href: "/residential/" },
  { name: "Luxury Custom Homes Sarasota", href: "/luxury-custom-homes-sarasota/" },
];

const homeTypes = [
  {
    type: "Barrier Island Estates",
    description: "Gulf-front and bayfront properties on Siesta Key, Longboat Key, Bird Key, Lido Key, and Casey Key with private beach access and deep-water docks",
    icon: Waves,
  },
  {
    type: "Sarasota Modern Architecture",
    description: "Mid-century modern and contemporary designs inspired by the renowned Sarasota School of Architecture, featuring clean lines and indoor-outdoor living",
    icon: Compass,
  },
  {
    type: "Smart Home Estates",
    description: "Fully integrated smart home technology including Crestron, Savant, and Control4 systems for lighting, climate, security, and entertainment",
    icon: Home,
  },
  {
    type: "Arts District Living",
    description: "Sophisticated urban estates near The Ringling, Selby Gardens, and downtown cultural venues reflecting Sarasota's artistic heritage",
    icon: Palette,
  },
];

const sarasotaNeighborhoods = [
  {
    name: "Siesta Key",
    description: "World-famous for its quartz crystal beaches, Siesta Key offers Gulf-front estates and bayfront properties ranging from $3M-$25M+",
    features: ["Gulf-front properties", "#1 ranked beach", "Private beach access", "Village lifestyle"],
  },
  {
    name: "Longboat Key",
    description: "Exclusive 10-mile barrier island with Gulf-to-bay estates, private golf communities, and some of Florida's most prestigious addresses at $2M-$30M+",
    features: ["Gulf-to-bay estates", "Private golf clubs", "Gated communities", "12 miles of beaches"],
  },
  {
    name: "Bird Key",
    description: "Sarasota's most prestigious address with deep-water canal lots, direct bay access, and architectural homes ranging $3M-$15M+",
    features: ["Deep-water docks", "Bay views", "Yacht access", "Near St. Armands"],
  },
  {
    name: "Lido Key",
    description: "Between downtown and the Gulf, Lido Key offers beachfront living with St. Armands Circle shopping and dining at $2M-$20M+",
    features: ["St. Armands access", "Gulf beaches", "Walkable shopping", "Bay frontage"],
  },
  {
    name: "Indian Beach/Sapphire Shores",
    description: "Historic waterfront neighborhood with bay views, mature landscaping, and mid-century modern homes near The Ringling at $1.5M-$8M+",
    features: ["Bay views", "Near The Ringling", "Historic character", "Large lots"],
  },
  {
    name: "Casey Key",
    description: "Ultra-exclusive 8-mile barrier island south of Siesta Key with Gulf-front estates, celebrity homes, and ultimate privacy at $5M-$40M+",
    features: ["Ultimate privacy", "Gulf-front estates", "Celebrity enclave", "Gated access"],
  },
];

const sarasotaFaqs = [
  {
    question: "What neighborhoods does FCS build luxury custom homes in Sarasota?",
    answer: "Florida Construction Specialists builds luxury custom homes throughout Sarasota's most prestigious areas including Siesta Key, Longboat Key, Bird Key, Lido Key, Casey Key, Indian Beach/Sapphire Shores, Harbor Acres, and downtown Sarasota. We specialize in barrier island construction with expertise in Gulf-front, bayfront, and deep-water canal properties. Our projects range from $1 million to over $25 million.",
  },
  {
    question: "How long does it take to build a luxury custom home in Sarasota?",
    answer: "Luxury custom homes in Sarasota typically require 16-28 months for construction, depending on size, complexity, and barrier island logistics. A 5,000 SF home may take 16-20 months, while 10,000+ SF estates often require 24-28 months or more. Barrier island construction may add time due to material delivery logistics and tide-dependent work. Design and permitting can add 6-12 months, with Sarasota County and city permits averaging 4-8 weeks.",
  },
  {
    question: "What is the cost to build a luxury custom home in Sarasota?",
    answer: "Sarasota is a premium luxury market with construction costs typically ranging from $400-$850+ per square foot depending on finishes, features, and location. Gulf-front barrier island properties command the highest prices. Entry-level luxury ($1.5-3M) averages $400-500/SF, mid-range luxury ($3-7M) averages $500-650/SF, and ultra-luxury ($7M+) can exceed $700-850/SF with premium finishes, impact systems, and coastal construction requirements.",
  },
  {
    question: "Do you build hurricane-resistant luxury homes on Sarasota's barrier islands?",
    answer: "Absolutely. Barrier island construction is our specialty. All FCS luxury homes exceed Florida Building Code wind resistance requirements with enhanced specifications for coastal exposure. We incorporate impact-resistant windows rated for large missile impact, reinforced concrete or ICF construction, Miami-Dade approved roofing systems, whole-house generators, flood-resistant design, and breakaway walls where required. Our homes are engineered to withstand major hurricanes while maintaining architectural elegance.",
  },
  {
    question: "Can you build on Gulf-front lots in Siesta Key or Longboat Key?",
    answer: "Yes, Gulf-front construction on Sarasota's barrier islands is a specialty for FCS. These projects require extensive expertise including FDEP Coastal Construction Control Line permits, Army Corps of Engineers permits for seawalls, sea turtle lighting compliance, dune preservation requirements, and strict setback adherence. We have completed numerous Gulf-front estates on Siesta Key, Longboat Key, Lido Key, and Casey Key.",
  },
  {
    question: "What is the Sarasota School of Architecture and can you build in this style?",
    answer: "The Sarasota School of Architecture was a mid-20th century modernist movement known for clean lines, indoor-outdoor living, native materials, and designs adapted to Florida's climate. Architects like Paul Rudolph and Ralph Twitchell pioneered this style. FCS works with architects who specialize in authentic Sarasota Modern design, as well as contemporary interpretations. We have experience building both faithful restorations of mid-century homes and new construction inspired by this iconic regional style.",
  },
  {
    question: "How do you handle permitting for waterfront properties in Sarasota County?",
    answer: "Waterfront permitting in Sarasota requires coordination with multiple agencies. We navigate City of Sarasota or Sarasota County building departments, FDEP for coastal construction permits, Army Corps of Engineers for dock and seawall permits, SWFWMD for stormwater management, and local environmental reviews. For barrier islands, we also coordinate with town governments on Longboat Key. Our pre-construction team handles all permitting to ensure compliance and minimize delays.",
  },
  {
    question: "What makes FCS different from other Sarasota luxury home builders?",
    answer: "FCS is always the prime contractor on every project - we never subcontract our management responsibility. Our 40+ years experience and in-house engineering allows us to handle the largest barrier island estates. We maintain long-term relationships with Sarasota's finest specialty contractors who understand the precision required for luxury finishes. Our commercial construction background brings superior project management, detailed scheduling, and rigorous quality control to residential projects. We also have specific expertise in coastal construction that many residential-only builders lack.",
  },
];

const costData = [
  { tier: "Entry Luxury", range: "$1.5M - $3M", sqft: "3,500 - 5,000 SF", costPerSqft: "$400 - $500/SF", timeline: "16-20 months" },
  { tier: "Mid-Range Luxury", range: "$3M - $7M", sqft: "5,000 - 9,000 SF", costPerSqft: "$500 - $650/SF", timeline: "18-24 months" },
  { tier: "High-End Luxury", range: "$7M - $15M", sqft: "9,000 - 15,000 SF", costPerSqft: "$650 - $750/SF", timeline: "22-28 months" },
  { tier: "Ultra Luxury", range: "$15M+", sqft: "15,000+ SF", costPerSqft: "$750 - $850+/SF", timeline: "28-40 months" },
];

const processSteps = [
  { step: 1, title: "Discovery & Site Analysis", description: "Initial consultation, barrier island lot analysis, coastal permitting assessment, and design direction with your architect" },
  { step: 2, title: "Pre-Construction", description: "Detailed budgeting, coastal constructability review, value engineering, and marine-grade specification development" },
  { step: 3, title: "Permitting", description: "City/County permits, FDEP coastal construction permits, Army Corps dock permits, and environmental compliance coordination" },
  { step: 4, title: "Foundation & Structure", description: "Deep foundations, helical piles for barrier islands, reinforced concrete construction, and hurricane-rated roof systems" },
  { step: 5, title: "Systems & Envelope", description: "Impact-rated windows and doors, marine-grade electrical, whole-house generators, and building envelope completion" },
  { step: 6, title: "Finishes & Completion", description: "Premium interior finishes, smart home integration, pool and outdoor living, landscaping, and final inspections" },
];

export default function LuxuryCustomHomesSarasotaPage() {
  return (
    <>
      <LocalBusinessSchema city="Sarasota" service="Luxury Custom Homes" />
      <ServiceSchema
        serviceName="Luxury Custom Home Construction"
        serviceDescription="Premier custom home builder in Sarasota, FL specializing in $1M-$25M+ barrier island estates, waterfront properties, and architectural homes. Serving Siesta Key, Longboat Key, Bird Key, Lido Key, Casey Key, and Sarasota's finest waterfront neighborhoods."
        city="Sarasota"
        minPrice="1500000"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Luxury Custom Home Builder in Sarasota, FL"
        description="Comprehensive guide to building luxury custom homes in Sarasota. Learn about barrier island construction, premium key communities, the Sarasota School of Architecture, costs, timelines, and what to expect from Sarasota's leading custom home builder."
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
              <span className="text-brand-gold font-semibold">Sarasota, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Luxury Custom Homes in Sarasota
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Sarasota's premier custom home builder for $1M-$25M+ barrier island estates, waterfront properties, and architectural masterpieces. From the world-famous beaches of Siesta Key to the exclusive enclaves of Longboat Key and Bird Key, we bring exceptional craftsmanship to Florida's cultural coast.
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
              <span className="font-semibold text-gray-700">$1.5M - $25M+ Projects</span>
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
              <span className="font-semibold text-gray-700">Barrier Island Specialists</span>
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
                Sarasota's Premier Luxury Home Builder
              </h2>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists brings the same precision, project management expertise, and quality control that defines our commercial construction work to Sarasota's most discerning homeowners. We specialize in luxury custom homes from $1.5 million to over $25 million, with particular expertise in barrier island properties on Siesta Key, Longboat Key, Bird Key, Lido Key, and Casey Key.
              </p>

              <p className="text-gray-600 mb-6">
                Sarasota represents Florida's cultural heart, where world-class arts institutions meet pristine Gulf beaches and sophisticated architectural traditions. From the legacy of the Sarasota School of Architecture to today's contemporary coastal designs, our team understands the unique requirements of building in these prestigious communities - including coastal construction permits, hurricane hardening, and the expectations of homeowners who appreciate both design excellence and technical precision.
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
                Why Build a Custom Home in Sarasota?
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>World-Class Beaches:</strong> Siesta Key's quartz crystal beach consistently ranks #1 in the U.S., while Longboat Key offers 12 miles of pristine Gulf shoreline</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Cultural Excellence:</strong> The Ringling Museum, Selby Gardens, Van Wezel, and Sarasota Opera make this Florida's cultural capital with a sophisticated arts scene</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Barrier Island Living:</strong> Siesta Key, Longboat Key, Bird Key, Lido Key, and Casey Key offer exclusive waterfront addresses with Gulf and bay access</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Architectural Heritage:</strong> The Sarasota School of Architecture pioneered Florida modernism, and today's builders continue this tradition of design excellence</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Strong Value Appreciation:</strong> Sarasota's barrier island properties have seen exceptional appreciation, with premium lots commanding $2M-$10M+ before construction</span>
                </li>
              </ul>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Sarasota Custom Home Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Start Your Project</h3>
                <p className="text-gray-200 mb-4">
                  Schedule a consultation to discuss your luxury home vision, barrier island lot selection, or current property.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-6 rounded-full hover:bg-brand-gold-light transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <RelatedServices city="Sarasota" currentService="luxury-custom-homes" />
              <NearbyLocations currentCity="Sarasota" service="luxury-custom-homes" serviceName="Luxury Custom Homes" />
            </div>
          </div>
        </div>
      </section>

      {/* Sarasota Neighborhoods */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Sarasota's Premier Barrier Islands & Waterfront Communities
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We build in Sarasota's most exclusive barrier island communities and waterfront neighborhoods, each offering unique character, exceptional beaches, and unparalleled Gulf Coast lifestyle.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sarasotaNeighborhoods.map((neighborhood) => (
              <div key={neighborhood.name} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-brand-green-dark mb-2">{neighborhood.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{neighborhood.description}</p>
                <div className="flex flex-wrap gap-2">
                  {neighborhood.features.map((feature) => (
                    <span key={feature} className="px-3 py-1 bg-brand-green/10 text-brand-green-dark text-xs rounded-full">
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
            Sarasota Luxury Home Construction Costs
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Sarasota is a premium luxury market with construction costs reflecting the exceptional quality and coastal construction requirements. These ranges reflect typical barrier island and waterfront projects - actual costs depend on specific design, location, and specifications.
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
            * Costs as of 2025. Does not include land, design fees, or soft costs. Barrier island and Gulf-front properties may have significant additional costs for seawalls, docks, coastal permits, and enhanced hurricane protection systems.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Our Barrier Island Building Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Building a luxury custom home on Sarasota's barrier islands requires specialized expertise and meticulous planning. Our proven 6-phase process ensures your vision becomes reality while navigating coastal construction requirements.
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
                The FCS Difference in Sarasota Luxury Homes
              </h2>
              <p className="text-gray-200 mb-6">
                Our commercial construction background brings unmatched project management capabilities to barrier island residential construction. We apply the same rigorous quality control, scheduling discipline, and documentation standards that define major commercial projects - essential for the complex logistics of building on Sarasota's keys.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Barrier Island Expertise:</strong> We understand coastal construction permits, FDEP requirements, and the unique challenges of building on Sarasota's keys</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Always Prime Contractor:</strong> We never subcontract our management responsibility - you get direct accountability for your investment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>In-House Engineering:</strong> Financial strength to handle the largest Gulf-front estates and barrier island projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Premium Trade Relationships:</strong> Long-standing relationships with Sarasota's finest specialty contractors who understand luxury finishes</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <DollarSign className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">$100M+</div>
                <div className="text-gray-300 text-sm">Residential Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Home className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">75+</div>
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
            Why Sarasota Homeowners Choose FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-8">
              <Gem className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Uncompromising Quality</h3>
              <p className="text-gray-600">
                Every detail matters in a Sarasota luxury home. Our quality control processes ensure premium finishes, precise millwork, and flawless execution that meet the standards of Florida's most discerning homeowners.
              </p>
            </div>
            <div className="card text-center p-8">
              <Compass className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Design Collaboration</h3>
              <p className="text-gray-600">
                We work seamlessly with Sarasota's premier architects and designers, including specialists in Sarasota Modern and contemporary coastal design, providing constructability review and value engineering.
              </p>
            </div>
            <div className="card text-center p-8">
              <Shield className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Coastal Expertise</h3>
              <p className="text-gray-600">
                Our experience with FDEP coastal permits, Army Corps dock approvals, hurricane hardening, and barrier island logistics ensures your Gulf-front or bayfront home is built to the highest standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={sarasotaFaqs}
        title="Sarasota Luxury Custom Homes FAQs"
        description="Common questions about building luxury custom homes in Sarasota, Florida's barrier islands and waterfront communities."
      />

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Build Your Sarasota Dream Home
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From Gulf-front estates on Siesta Key to sophisticated Sarasota Modern homes, FCS brings exceptional craftsmanship to Florida's cultural coast. Schedule a consultation to discuss your barrier island or waterfront vision.
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
