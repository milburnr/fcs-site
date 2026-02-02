import Link from "next/link";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Home, Compass, Waves, Star, Sun, Gem, Users, DollarSign, Anchor, Map } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "Luxury Custom Homes Ruskin FL | Apollo Beach Waterfront Estates | FCS Home Base",
  description: "Ruskin & Apollo Beach luxury custom home builder. Waterfront estates from $750K-$5M+ on Tampa Bay. FCS headquarters location means exceptional local service. Sun City Center, Little Harbor, Bahia Beach specialists.",
  keywords: "luxury custom homes Ruskin, waterfront homes Apollo Beach, Tampa Bay waterfront estates, custom home builder South Hillsborough, Sun City Center custom homes, Little Harbor homes",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Residential", href: "/residential/" },
  { name: "Luxury Custom Homes Ruskin", href: "/luxury-custom-homes-ruskin/" },
];

const homeTypes = [
  {
    type: "Tampa Bay Waterfront",
    description: "Deep-water canal homes, bayfront estates, and protected harbor properties with private docks at prices well below Tampa proper",
    icon: Waves,
  },
  {
    type: "Golf Course Estates",
    description: "Luxury homes in Sun City Center, Renaissance, and other premier golf communities with resort-style amenities",
    icon: Compass,
  },
  {
    type: "Coastal Modern Design",
    description: "Contemporary Florida architecture maximizing water views, natural light, and indoor-outdoor living for year-round enjoyment",
    icon: Home,
  },
  {
    type: "Hurricane-Resilient Luxury",
    description: "Impact-resistant construction, reinforced concrete, and whole-house generators for peace of mind in coastal living",
    icon: Shield,
  },
];

const ruskinNeighborhoods = [
  {
    name: "Apollo Beach Waterfront",
    description: "Premier waterfront community with Tampa Bay access, deep-water canals, and homes ranging $750K-$3M+. Best value for waterfront luxury in Tampa Bay.",
    features: ["Tampa Bay access", "Deep-water docks", "Manatee viewing", "Beach community"],
  },
  {
    name: "Sun City Center",
    description: "Active adult community (55+) with luxury custom homes on golf courses and lakes. Estates range $500K-$1.5M+ with resort amenities.",
    features: ["Multiple golf courses", "Active lifestyle", "Gated security", "Resort amenities"],
  },
  {
    name: "Little Harbor",
    description: "Exclusive waterfront enclave with deep-water access to Tampa Bay. Custom estates $1M-$4M+ with private docks and protected harbor.",
    features: ["Protected harbor", "Yacht access", "Private community", "Bay views"],
  },
  {
    name: "Bahia Beach",
    description: "Growing luxury community with new construction opportunities and waterfront lots. Homes $600K-$2M+ with modern coastal design.",
    features: ["New construction", "Modern designs", "Water access", "Growing community"],
  },
];

const ruskinFaqs = [
  {
    question: "Why is Ruskin/Apollo Beach a smart choice for waterfront luxury homes?",
    answer: "Ruskin and Apollo Beach offer Tampa Bay waterfront living at 30-50% less than comparable properties in Tampa or St. Petersburg. You get deep-water canal access to Tampa Bay, private docks, and the same stunning water views without the premium pricing of downtown Tampa waterfronts. Apollo Beach waterfront homes range $750K-$3M compared to $1.5M-$10M+ for similar Davis Islands or Harbour Island properties.",
  },
  {
    question: "Is FCS headquartered in the Ruskin area?",
    answer: "Yes, Florida Construction Specialists is based in the South Hillsborough County area, making Ruskin, Apollo Beach, and Sun City Center our home territory. This means faster response times, intimate knowledge of local building codes and permitting, established relationships with Hillsborough County inspectors, and the ability to closely manage projects. Our team lives and works in this community.",
  },
  {
    question: "What waterfront construction considerations are unique to Apollo Beach?",
    answer: "Apollo Beach construction requires expertise in coastal flood zones (VE and AE zones), seawall construction and repair, dock permitting through Army Corps of Engineers, SWFWMD environmental permits, and hurricane-resistant design. The area also has specific setback requirements from canals and Tampa Bay. FCS has built extensively in these waterfront zones and understands all requirements.",
  },
  {
    question: "How do construction costs in Ruskin compare to Tampa?",
    answer: "Construction costs per square foot are similar throughout Tampa Bay ($350-$650/SF for luxury), but land costs are significantly lower in Ruskin/Apollo Beach. A waterfront lot in Apollo Beach might be $300K-$800K compared to $1M-$4M+ in Davis Islands. This means you can build a larger, higher-quality home for the same total investment, or achieve significant savings on comparable square footage.",
  },
  {
    question: "Can you build hurricane-resistant luxury homes in waterfront zones?",
    answer: "Absolutely. All FCS homes exceed Florida Building Code requirements for wind resistance. Waterfront homes include impact-resistant windows and doors rated for 185+ mph winds, reinforced concrete block or ICF construction, elevated foundations per FEMA requirements, whole-house generators, and flood-resistant materials below design flood elevation. We build beautiful homes that are also resilient.",
  },
  {
    question: "What is the timeline for building a custom home in Ruskin?",
    answer: "Luxury custom homes in Ruskin typically require 12-20 months for construction, depending on size and complexity. Waterfront properties may require additional time for seawall work, dock permitting, and environmental clearances. Hillsborough County permitting averages 4-6 weeks for residential. Our local presence allows us to expedite many processes that take longer for out-of-area builders.",
  },
  {
    question: "Do you build in Sun City Center's 55+ communities?",
    answer: "Yes, we build custom homes in Sun City Center and other age-restricted communities. We understand the architectural guidelines, HOA requirements, and lifestyle considerations for active adult communities. Our homes emphasize single-story living, accessibility features, low-maintenance exteriors, and resort-style outdoor spaces while meeting all community standards.",
  },
  {
    question: "What makes FCS different from other builders in South Hillsborough?",
    answer: "FCS is always the prime contractor—we never subcontract our management responsibility. Our commercial construction background brings superior project management, detailed budgeting, and rigorous quality control. Being headquartered locally means you have direct access to our team throughout your project. We also bring 40+ years experience and in-house engineering and 20+ years of experience to every project.",
  },
];

const costData = [
  { tier: "Waterfront Entry", range: "$750K - $1.25M", sqft: "2,500 - 3,500 SF", costPerSqft: "$300 - $400/SF", timeline: "12-16 months" },
  { tier: "Mid-Range Waterfront", range: "$1.25M - $2.5M", sqft: "3,500 - 5,000 SF", costPerSqft: "$400 - $500/SF", timeline: "14-18 months" },
  { tier: "Premium Waterfront", range: "$2.5M - $4M", sqft: "5,000 - 7,000 SF", costPerSqft: "$500 - $600/SF", timeline: "16-20 months" },
  { tier: "Estate Class", range: "$4M+", sqft: "7,000+ SF", costPerSqft: "$600 - $700/SF", timeline: "18-24 months" },
];

const valueComparison = [
  { location: "Apollo Beach Waterfront", landCost: "$300K - $800K", totalBudget: "$1M - $3M", waterAccess: "Tampa Bay via canals" },
  { location: "Little Harbor", landCost: "$500K - $1.2M", totalBudget: "$1.5M - $4M", waterAccess: "Direct Tampa Bay" },
  { location: "Davis Islands (Tampa)", landCost: "$1.5M - $4M+", totalBudget: "$3M - $12M+", waterAccess: "Hillsborough Bay" },
  { location: "Harbour Island (Tampa)", landCost: "$1M - $3M", totalBudget: "$2.5M - $10M+", waterAccess: "Tampa Bay/Downtown" },
];

const processSteps = [
  { step: 1, title: "Discovery & Site Analysis", description: "Initial consultation, lot analysis, flood zone review, and design direction for your waterfront or estate property" },
  { step: 2, title: "Pre-Construction", description: "Detailed budgeting, constructability review, value engineering, and specification development" },
  { step: 3, title: "Permitting", description: "Hillsborough County permits, environmental clearances, seawall/dock permits, and HOA approvals" },
  { step: 4, title: "Foundation & Structure", description: "Elevated foundations for flood zones, concrete block construction, and hurricane-resistant framing" },
  { step: 5, title: "Systems & Envelope", description: "Impact windows/doors, electrical with generator prep, plumbing, HVAC, and building envelope" },
  { step: 6, title: "Finishes & Completion", description: "Interior finishes, dock construction, pool/outdoor living, landscaping, and final inspections" },
];

export default function LuxuryCustomHomesRuskinPage() {
  return (
    <>
      <LocalBusinessSchema city="Ruskin" service="Luxury Custom Homes" />
      <ServiceSchema
        serviceName="Luxury Custom Home Construction"
        serviceDescription="Premier custom home builder in Ruskin and Apollo Beach, FL specializing in waterfront estates on Tampa Bay. Serving Apollo Beach, Sun City Center, Little Harbor, and Bahia Beach with luxury homes from $750K to $5M+. FCS headquarters location ensures exceptional local service."
        city="Ruskin"
        minPrice="750000"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Luxury Custom Home Builder in Ruskin & Apollo Beach, FL"
        description="Comprehensive guide to building luxury waterfront custom homes in Ruskin and Apollo Beach. Learn about Tampa Bay waterfront construction, cost advantages vs. Tampa, premier neighborhoods, and why FCS's local headquarters means better service."
        datePublished="2024-06-15"
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
              <span className="text-brand-gold font-semibold">Ruskin & Apollo Beach, Florida - FCS Home Base</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Luxury Waterfront Homes in Ruskin & Apollo Beach
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Tampa Bay waterfront living at exceptional value. Build your dream home on the water for 30-50% less than Tampa proper. Apollo Beach, Sun City Center, Little Harbor, and Bahia Beach specialists. FCS headquarters means unmatched local expertise.
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
              <Map className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">FCS Home Base</span>
            </div>
            <div className="flex items-center gap-2">
              <Anchor className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Waterfront Specialists</span>
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
                Your Local Luxury Home Builder - FCS Headquarters
              </h2>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists is headquartered right here in South Hillsborough County, making Ruskin, Apollo Beach, and Sun City Center our home territory. When you build with FCS, you are not hiring an out-of-area contractor making the drive down I-75—you are working with neighbors who know every street, every building department contact, and every subcontractor worth hiring in this community.
              </p>

              <p className="text-gray-600 mb-6">
                This area offers something Tampa and St. Petersburg cannot match: Tampa Bay waterfront living at accessible prices. Apollo Beach provides deep-water canal access to Tampa Bay for a fraction of what comparable waterfront costs in Davis Islands or Harbour Island. Little Harbor offers protected yacht harbors and direct bay access. Sun City Center delivers resort-style luxury living with championship golf. And Bahia Beach represents new opportunities for custom waterfront construction.
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
                Why Build Waterfront in Ruskin/Apollo Beach?
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>30-50% Land Savings:</strong> Waterfront lots in Apollo Beach cost $300K-$800K compared to $1.5M-$4M+ in Tampa's Davis Islands or Harbour Island</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Direct Tampa Bay Access:</strong> Deep-water canals connect to Tampa Bay for boating, fishing, and waterfront dining without downtown traffic</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Natural Beauty:</strong> Manatee viewing, stunning sunsets over Tampa Bay, wildlife preserves, and less development density than urban Tampa</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Local Builder Advantage:</strong> FCS headquarters location means faster response, intimate code knowledge, and stronger subcontractor relationships</span>
                </li>
              </ul>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Waterfront Home Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Start Your Project</h3>
                <p className="text-gray-200 mb-4">
                  Schedule a consultation to discuss your waterfront home vision, lot selection, or current property in our home territory.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-6 rounded-full hover:bg-brand-gold-light transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <RelatedServices city="Ruskin" currentService="luxury-custom-homes" />
              <NearbyLocations currentCity="Ruskin" service="luxury-custom-homes" serviceName="Luxury Custom Homes" />
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

      {/* Ruskin Neighborhoods */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Premier Neighborhoods for Luxury Homes
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We build throughout Ruskin, Apollo Beach, and Sun City Center—each community offering unique waterfront or resort-style living opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {ruskinNeighborhoods.map((neighborhood) => (
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
            Ruskin/Apollo Beach Construction Costs
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Construction costs per square foot are comparable to Tampa, but significantly lower land costs mean more home for your budget. These ranges reflect typical waterfront and luxury projects.
          </p>

          <div className="overflow-x-auto mb-12">
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

          <h3 className="text-2xl font-bold text-brand-green-dark mb-4 text-center">
            Waterfront Value Comparison: Ruskin vs. Tampa
          </h3>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            See how your investment goes further in Apollo Beach and Little Harbor compared to Tampa's premium waterfront neighborhoods.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-brand-gold text-brand-green-dark">
                <tr>
                  <th className="px-6 py-4 text-left">Location</th>
                  <th className="px-6 py-4 text-left">Waterfront Land Cost</th>
                  <th className="px-6 py-4 text-left">Total Project Budget</th>
                  <th className="px-6 py-4 text-left">Water Access</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {valueComparison.map((item, index) => (
                  <tr key={index} className={`hover:bg-gray-50 ${index < 2 ? 'bg-green-50' : ''}`}>
                    <td className="px-6 py-4 font-semibold text-brand-green-dark">{item.location}</td>
                    <td className="px-6 py-4 text-gray-700">{item.landCost}</td>
                    <td className="px-6 py-4 text-gray-700">{item.totalBudget}</td>
                    <td className="px-6 py-4 text-gray-700">{item.waterAccess}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 text-center mt-4">
            * Costs as of 2025. Does not include design fees or soft costs. Waterfront properties include estimated seawall and dock costs.
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
            Building a waterfront luxury home requires specialized expertise. Our proven 6-phase process addresses the unique requirements of coastal construction.
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
                The FCS Home Base Advantage
              </h2>
              <p className="text-gray-200 mb-6">
                Being headquartered in South Hillsborough County means we are not just your builder—we are your neighbors. Our team lives and works in this community, giving you unmatched local expertise and accessibility throughout your project.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Local Relationships:</strong> Established connections with Hillsborough County permitting, inspectors, and specialty subcontractors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Rapid Response:</strong> On-site within minutes, not hours—problems get solved quickly when your builder is local</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Waterfront Expertise:</strong> Decades of experience building in Apollo Beach flood zones, canal properties, and bayfront sites</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Community Reputation:</strong> Our name is on every project—we live where we build and stand behind our work</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <DollarSign className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">$25M+</div>
                <div className="text-gray-300 text-sm">Local Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Home className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">75+</div>
                <div className="text-gray-300 text-sm">Homes Built</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Award className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">20+</div>
                <div className="text-gray-300 text-sm">Years Local</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Anchor className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">40+</div>
                <div className="text-gray-300 text-sm">Waterfront Homes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FCS */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why South Hillsborough Homeowners Choose FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-8">
              <Gem className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Waterfront Excellence</h3>
              <p className="text-gray-600">
                Specialized expertise in flood zone construction, seawalls, docks, and hurricane-resistant coastal design that protects your investment.
              </p>
            </div>
            <div className="card text-center p-8">
              <Map className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Local Headquarters</h3>
              <p className="text-gray-600">
                FCS is based right here in South Hillsborough. We are your neighbors, with intimate knowledge of local codes, conditions, and craftsmen.
              </p>
            </div>
            <div className="card text-center p-8">
              <Shield className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Financial Security</h3>
              <p className="text-gray-600">
                Our 40+ years experience and in-house engineering, comprehensive insurance, and detailed project accounting give you confidence throughout construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={ruskinFaqs}
        title="Ruskin & Apollo Beach Luxury Home FAQs"
        description="Common questions about building luxury custom homes in Ruskin, Apollo Beach, Sun City Center, and South Hillsborough County."
      />

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Build Your Tampa Bay Dream Home
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Waterfront luxury at exceptional value. From Apollo Beach canals to Little Harbor estates, FCS builds beautiful, resilient homes in our home community. Schedule a consultation with your local builder.
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
