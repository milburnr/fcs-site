import Link from "next/link";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Home, Compass, Waves, Star, Sun, Gem, Users, DollarSign, Palette } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "Luxury Custom Homes St. Petersburg FL | $1M+ Waterfront & Estate Homes | FCS",
  description: "St. Petersburg luxury custom home builder specializing in $1M-$20M+ waterfront estates, architectural homes, and high-end residences. Old Northeast, Snell Isle, Coffee Pot Bayou, Historic Kenwood. Licensed, bonded, insured.",
  keywords: "luxury custom homes St. Petersburg, waterfront homes St Pete, estate homes Snell Isle, custom home builder St. Petersburg, high-end residential construction St. Petersburg",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Residential", href: "/residential/" },
  { name: "Luxury Custom Homes St. Petersburg", href: "/luxury-custom-homes-st-petersburg/" },
];

const homeTypes = [
  {
    type: "Waterfront Estates",
    description: "Tampa Bay, Coffee Pot Bayou, and Snell Isle waterfront properties with private docks, seawalls, and stunning water views of the bay and downtown skyline",
    icon: Waves,
  },
  {
    type: "Historic District Homes",
    description: "Custom builds and renovations in Old Northeast, Historic Kenwood, and Roser Park preserving architectural character while adding modern amenities",
    icon: Compass,
  },
  {
    type: "Smart Home Estates",
    description: "Fully integrated smart home technology including Crestron, Savant, and Control4 systems for lighting, climate, security, and entertainment",
    icon: Home,
  },
  {
    type: "Arts District Living",
    description: "Contemporary homes near the downtown arts district, Beach Drive, and Central Avenue with walkable access to galleries, museums, and waterfront dining",
    icon: Palette,
  },
];

const stPetersburgNeighborhoods = [
  {
    name: "Old Northeast",
    description: "St. Petersburg's most prestigious historic neighborhood with tree-lined brick streets, 1920s Mediterranean and Craftsman homes, and waterfront estates from $1.5M-$10M+",
    features: ["Historic character", "Brick streets", "Walkable to downtown", "Coffee Pot Bayou access"],
  },
  {
    name: "Snell Isle",
    description: "Exclusive gated island community with some of Tampa Bay's finest waterfront estates, deep-water docks, and panoramic bay views $2M-$15M+",
    features: ["Gated community", "Deep-water access", "Bay views", "Marina proximity"],
  },
  {
    name: "Coffee Pot Bayou",
    description: "Scenic waterfront area within Old Northeast offering protected bayou living with kayak launches, sunset views, and proximity to downtown $1.5M-$8M+",
    features: ["Protected waters", "Kayak/paddleboard", "Sunset views", "Old Northeast adjacent"],
  },
  {
    name: "Downtown Waterfront",
    description: "Urban luxury living along Beach Drive and the Pier District with walkable access to The Dali, Vinoy Park, fine dining, and the arts scene $1M-$6M+",
    features: ["Walkable lifestyle", "Arts & culture", "Restaurants", "Vinoy Park views"],
  },
];

const stPetersburgFaqs = [
  {
    question: "What neighborhoods does FCS build luxury custom homes in St. Petersburg?",
    answer: "Florida Construction Specialists builds luxury custom homes throughout St. Petersburg's most prestigious neighborhoods including Old Northeast, Snell Isle, Coffee Pot Bayou, Historic Kenwood, Downtown Waterfront along Beach Drive, Coquina Key, Shore Acres, and Venetian Isles. We also build on waterfront lots throughout Tampa Bay's Pinellas County side. Our projects range from $1 million to over $15 million.",
  },
  {
    question: "How long does it take to build a luxury custom home in St. Petersburg?",
    answer: "Luxury custom homes in St. Petersburg typically require 14-24 months for construction, depending on size and complexity. A 5,000 SF home may take 14-18 months, while 10,000+ SF estates often require 20-24 months or more. St. Petersburg's historic district overlay reviews can add 4-6 weeks to the permitting process for homes in Old Northeast, Historic Kenwood, or other designated areas.",
  },
  {
    question: "What is the cost to build a luxury custom home in St. Petersburg?",
    answer: "Luxury custom home construction in St. Petersburg typically ranges from $350-$750+ per square foot depending on finishes, features, and complexity. Waterfront properties with seawalls and docks add significant costs. Entry-level luxury ($1-2M) averages $350-450/SF, mid-range luxury ($2-5M) averages $450-550/SF, and ultra-luxury ($5M+) can exceed $650-750/SF. Historic district homes may have additional costs for architectural compliance.",
  },
  {
    question: "Do you build hurricane-resistant luxury homes in St. Petersburg?",
    answer: "Absolutely. Given St. Petersburg's peninsula location and significant storm surge risk, hurricane resistance is paramount. All FCS luxury homes exceed Florida Building Code wind resistance requirements with impact-resistant windows and doors, reinforced concrete block or ICF construction, upgraded roof tie-downs, whole-house generators, and elevated construction in flood zones. We design for both wind and surge protection.",
  },
  {
    question: "Can you build on waterfront lots in St. Petersburg?",
    answer: "Yes, waterfront construction is a specialty for FCS. We build on Tampa Bay, Coffee Pot Bayou, Snell Isle, and other waterfront areas throughout St. Petersburg. Waterfront projects require additional expertise including seawall construction or repair, dock permitting through Army Corps of Engineers and FDEP, Coastal High Hazard Area compliance, and flood zone requirements. Our team navigates Pinellas County's coastal regulations expertly.",
  },
  {
    question: "What are the requirements for building in St. Petersburg's historic districts?",
    answer: "St. Petersburg has several historic districts including Old Northeast, Historic Kenwood, Roser Park, and Historic Uptown. Construction in these areas requires Certificate of Appropriateness approval from the City's Historic Preservation Office. This includes review of architectural style, materials, setbacks, and design elements. FCS has extensive experience navigating these requirements while creating homes that honor historic character with modern amenities.",
  },
  {
    question: "How does building near the arts district affect my custom home project?",
    answer: "St. Petersburg's vibrant arts scene, including The Dali Museum, Morean Arts Center, and Beach Drive galleries, makes downtown and nearby neighborhoods highly desirable. Homes near the arts district often incorporate gallery walls, artist studios, and modern architectural elements. The City has design standards in the downtown core that may affect height, setbacks, and exterior design. FCS works with these requirements to create homes that complement St. Petersburg's creative character.",
  },
  {
    question: "What makes FCS different from other St. Petersburg luxury home builders?",
    answer: "FCS is always the prime contractor—we never subcontract our management responsibility. Our 40+ years experience and in-house engineering allows us to handle the largest custom home projects. We have specific expertise with St. Petersburg's historic overlay requirements, Pinellas County's coastal regulations, and the unique construction challenges of peninsula building. Our commercial construction background brings superior project management and quality control to every residential project.",
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
  { step: 3, title: "Permitting", description: "City of St. Petersburg permits, historic district approvals if applicable, and environmental permits for waterfront properties" },
  { step: 4, title: "Foundation & Structure", description: "Excavation, foundation work with consideration for high water table, concrete block construction, and roof installation" },
  { step: 5, title: "Systems & Envelope", description: "Electrical, plumbing, HVAC rough-in, impact windows and doors, and building envelope completion with marine-grade materials" },
  { step: 6, title: "Finishes & Completion", description: "Interior finishes, cabinetry, flooring, smart home integration, landscaping, and final inspections" },
];

export default function LuxuryCustomHomesStPetersburgPage() {
  return (
    <>
      <LocalBusinessSchema city="St. Petersburg" service="Luxury Custom Homes" />
      <ServiceSchema
        serviceName="Luxury Custom Home Construction"
        serviceDescription="Premier custom home builder in St. Petersburg, FL specializing in $1M-$15M+ waterfront estates, historic district homes, and high-end residences. Serving Old Northeast, Snell Isle, Coffee Pot Bayou, Historic Kenwood, and Tampa Bay waterfront properties."
        city="St. Petersburg"
        minPrice="1000000"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Luxury Custom Home Builder in St. Petersburg, FL"
        description="Comprehensive guide to building luxury custom homes in St. Petersburg. Learn about waterfront construction, historic district requirements, premier neighborhoods, costs, timelines, and what to expect from St. Petersburg's leading custom home builder."
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
              <span className="text-brand-gold font-semibold">St. Petersburg, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Luxury Custom Homes in St. Petersburg
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Tampa Bay's premier custom home builder for $1M-$15M+ waterfront estates, historic district homes, and high-end residences. From Snell Isle to Old Northeast, we bring exceptional craftsmanship to St. Petersburg's finest neighborhoods.
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
                St. Petersburg's Premier Luxury Home Builder
              </h2>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists brings the same precision, project management expertise, and quality control that defines our commercial construction work to St. Petersburg's most discerning homeowners. We specialize in luxury custom homes from $1 million to over $15 million, with particular expertise in waterfront properties on Snell Isle, Coffee Pot Bayou, and along Tampa Bay.
              </p>

              <p className="text-gray-600 mb-6">
                St. Petersburg offers a unique combination of waterfront living, historic charm, and vibrant arts culture unmatched anywhere in Florida. From the tree-lined brick streets of Old Northeast to the exclusive gated community of Snell Isle, from the eclectic charm of Historic Kenwood to the urban sophistication of downtown Beach Drive—our team understands the unique requirements of building in these prestigious neighborhoods.
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
                Why Build a Custom Home in St. Petersburg?
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Waterfront Paradise:</strong> Tampa Bay, Coffee Pot Bayou, and the Intracoastal offer exceptional water access for boating, sailing, paddleboarding, and waterfront dining along the Pier District</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Arts & Culture Capital:</strong> The Dali Museum, Morean Arts Center, Chihuly Collection, and over 35 galleries make St. Pete the cultural heart of the Gulf Coast</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Historic Character:</strong> Old Northeast, Historic Kenwood, and Roser Park offer tree-lined streets, brick roads, and architectural heritage dating to the 1920s</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Urban Walkability:</strong> Beach Drive, Central Avenue, and the Pier District offer the best walkable urban lifestyle in Tampa Bay with restaurants, galleries, and entertainment</span>
                </li>
              </ul>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your St. Petersburg Custom Home Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Start Your Project</h3>
                <p className="text-gray-200 mb-4">
                  Schedule a consultation to discuss your luxury home vision, lot selection, or current property in St. Petersburg.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-6 rounded-full hover:bg-brand-gold-light transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <RelatedServices city="St. Petersburg" currentService="luxury-custom-homes" />
              <NearbyLocations currentCity="St. Petersburg" service="luxury-custom-homes" serviceName="Luxury Custom Homes" />
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

      {/* St. Petersburg Neighborhoods */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            St. Petersburg's Premier Neighborhoods for Luxury Homes
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We build in St. Petersburg's most prestigious neighborhoods, each offering unique character, waterfront access, and lifestyle opportunities in Florida's arts and culture capital.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {stPetersburgNeighborhoods.map((neighborhood) => (
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
            St. Petersburg Luxury Home Construction Costs
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Construction costs vary based on finishes, features, and complexity. These ranges reflect typical St. Petersburg luxury home projects—actual costs depend on specific design and specifications.
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
            * Costs as of 2025. Does not include land, design fees, or soft costs. Waterfront properties may have additional costs for seawalls and docks. Historic district homes may require additional architectural review fees.
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
            Building a luxury custom home requires meticulous planning and execution. Our proven 6-phase process ensures your vision becomes reality in St. Petersburg.
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
                The FCS Difference in St. Petersburg Luxury Homes
              </h2>
              <p className="text-gray-200 mb-6">
                Our commercial construction background brings unmatched project management capabilities to residential construction. We apply the same rigorous quality control, scheduling discipline, and documentation standards that define major commercial projects—essential for St. Petersburg's unique coastal and historic district requirements.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Always Prime Contractor:</strong> We never subcontract our management responsibility—you get direct accountability</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Coastal Construction Expertise:</strong> Specialized knowledge of Pinellas County coastal regulations and flood zone requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Historic District Experience:</strong> Proven track record navigating Old Northeast, Kenwood, and other historic overlay requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Premium Trade Relationships:</strong> Long-standing relationships with St. Petersburg's best specialty contractors</span>
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
            Why St. Petersburg Homeowners Choose FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-8">
              <Gem className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Uncompromising Quality</h3>
              <p className="text-gray-600">
                Every detail matters in a luxury home. Our quality control processes ensure premium finishes, precise millwork, and flawless execution throughout your St. Petersburg project.
              </p>
            </div>
            <div className="card text-center p-8">
              <Compass className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Design Collaboration</h3>
              <p className="text-gray-600">
                We work seamlessly with St. Petersburg's premier architects and designers, providing constructability review and value engineering to optimize your design for coastal living.
              </p>
            </div>
            <div className="card text-center p-8">
              <Shield className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Financial Security</h3>
              <p className="text-gray-600">
                Our 40+ years experience and in-house engineering, comprehensive insurance, and detailed project accounting give you confidence throughout the construction process in St. Petersburg.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={stPetersburgFaqs}
        title="St. Petersburg Luxury Custom Homes FAQs"
        description="Common questions about building luxury custom homes in St. Petersburg, Florida."
      />

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Build Your St. Petersburg Dream Home
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From Snell Isle waterfront estates to Old Northeast historic renovations, FCS brings exceptional craftsmanship to St. Petersburg's finest custom homes. Schedule a consultation to discuss your vision.
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
