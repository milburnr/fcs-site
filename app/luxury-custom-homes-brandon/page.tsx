import Link from "next/link";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Home, Compass, Trees, Star, Sun, Gem, Users, DollarSign, Mountain, Heart } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Custom Homes Brandon FL | FishHawk, Lithia & Valrico Estates | FCS",
  description: "Brandon luxury custom home builder specializing in $800K-$5M+ family estates. FishHawk Ranch, Lithia, Valrico, Alafia River properties. Larger lots, master-planned communities. Licensed, bonded, insured.",
  keywords: "luxury custom homes Brandon, FishHawk Ranch custom homes, Lithia estate homes, Valrico luxury builder, custom home builder Brandon FL",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Residential", href: "/residential/" },
  { name: "Luxury Custom Homes Brandon", href: "/luxury-custom-homes-brandon/" },
];

const homeTypes = [
  {
    type: "Family Estate Homes",
    description: "Spacious 4,000-8,000+ SF homes designed for multi-generational living with guest suites, home offices, and dedicated play areas on acre+ lots",
    icon: Home,
  },
  {
    type: "Master-Planned Community Builds",
    description: "Custom homes within FishHawk Ranch, Panther Trace, and other premier Brandon communities with resort-style amenities and top schools",
    icon: Mountain,
  },
  {
    type: "Acreage & Equestrian Properties",
    description: "5-20+ acre estates in Lithia and Valrico with barns, paddocks, private ponds, and custom homes designed for country living minutes from Tampa",
    icon: Trees,
  },
  {
    type: "Resort-Style Living",
    description: "Expansive outdoor living with oversized pools, sport courts, outdoor kitchens, and tropical landscaping on larger suburban lots",
    icon: Sun,
  },
];

const brandonNeighborhoods = [
  {
    name: "FishHawk Ranch",
    description: "Premier master-planned community with award-winning schools, extensive trails, and custom homesites from $800K-$3M+",
    features: ["Top-rated schools", "250+ miles trails", "Resort amenities", "Large lots available"],
  },
  {
    name: "Lithia",
    description: "Rural luxury with 2-20+ acre estates offering privacy, equestrian facilities, and custom homes $1M-$5M+",
    features: ["Acreage properties", "Horse-friendly", "Private settings", "Custom builds only"],
  },
  {
    name: "Valrico",
    description: "Established suburban luxury with mature trees, larger lots, and homes ranging $600K-$2M+ in prestigious neighborhoods",
    features: ["Established neighborhoods", "Mature landscaping", "Quality schools", "Central location"],
  },
  {
    name: "Alafia River Properties",
    description: "Waterfront and river-view estates along the scenic Alafia River with kayak access and natural beauty $900K-$3M+",
    features: ["River frontage", "Nature preserve views", "Kayak/canoe access", "Unique settings"],
  },
];

const brandonFaqs = [
  {
    question: "What neighborhoods does FCS build luxury custom homes in the Brandon area?",
    answer: "Florida Construction Specialists builds luxury custom homes throughout the Brandon area including FishHawk Ranch, Lithia, Valrico, Bloomingdale, Boyette, Panther Trace, and along the Alafia River corridor. We specialize in both master-planned community builds and custom homes on private acreage. Projects range from $800,000 to over $5 million, with many clients choosing Brandon for the exceptional value compared to South Tampa while still enjoying luxury finishes and larger lot sizes.",
  },
  {
    question: "How does building a luxury home in Brandon compare to South Tampa?",
    answer: "Brandon offers exceptional value for luxury home buyers. Land costs in FishHawk, Lithia, and Valrico are typically 40-60% less than South Tampa waterfront areas, allowing you to invest more in the home itself. You can build a 5,000 SF custom home on an acre in FishHawk for the same price as a 3,500 SF home on a 7,500 SF lot in South Tampa. Brandon also offers newer infrastructure, top-rated schools, and resort-style community amenities that aren't available in older Tampa neighborhoods.",
  },
  {
    question: "How long does it take to build a luxury custom home in Brandon?",
    answer: "Luxury custom homes in Brandon typically require 12-20 months for construction, depending on size and complexity. A 4,000 SF home may take 12-15 months, while 6,000-8,000+ SF estates often require 16-20 months. Hillsborough County permitting typically takes 4-8 weeks for residential projects. FishHawk Ranch and other master-planned communities may have additional architectural review that adds 2-4 weeks to the approval process.",
  },
  {
    question: "What is the cost to build a luxury custom home in Brandon?",
    answer: "Luxury custom home construction in Brandon typically ranges from $300-$550+ per square foot depending on finishes and features. Entry-level luxury ($800K-$1.5M) averages $300-375/SF, mid-range luxury ($1.5M-$3M) averages $375-450/SF, and high-end luxury ($3M+) can reach $500-550/SF with premium finishes. Land costs vary significantly: FishHawk lots range $150K-$400K, while Lithia acreage runs $200K-$800K+ for 5-20 acres.",
  },
  {
    question: "What permits are required for building in Brandon?",
    answer: "Brandon is unincorporated Hillsborough County, so all permits go through Hillsborough County Building Services rather than a city building department. Required permits include building permits, electrical, plumbing, mechanical, and a septic permit if not on county sewer. In FishHawk and other master-planned communities, you'll also need HOA architectural approval before submitting to the county. We handle all permit coordination as part of our comprehensive construction services.",
  },
  {
    question: "Can you build custom homes in FishHawk Ranch?",
    answer: "Yes, FCS builds custom homes in FishHawk Ranch and works with all approved builders in the community. FishHawk has specific architectural guidelines and an Architectural Review Committee (ARC) that must approve home designs. We're experienced with FishHawk's requirements including minimum home sizes, architectural styles, and material specifications. Our pre-construction team coordinates with the ARC to ensure smooth approval before county permitting begins.",
  },
  {
    question: "Do you build homes on acreage in Lithia?",
    answer: "Absolutely. Lithia acreage builds are one of our specialties. We construct luxury homes on 2-20+ acre parcels, including equestrian properties with barns, paddocks, and riding arenas. Lithia's rural character allows for unique home designs not possible in master-planned communities—larger building envelopes, private driveways, guest houses, and agricultural structures. We also handle well and septic systems common in Lithia properties.",
  },
  {
    question: "What makes FCS different from production builders in Brandon?",
    answer: "Unlike production builders who offer limited floor plans and finishes, FCS builds fully custom homes tailored to your family's lifestyle. We're always the prime contractor—never a subcontractor—providing direct accountability and communication. Our commercial construction background brings superior project management, detailed budgeting, and rigorous quality control. We maintain long-term relationships with premium trade partners who deliver craftsmanship beyond production builder standards.",
  },
];

const costData = [
  { tier: "Entry Luxury", range: "$800K - $1.5M", sqft: "3,500 - 4,500 SF", costPerSqft: "$300 - $375/SF", timeline: "12-15 months" },
  { tier: "Mid-Range Luxury", range: "$1.5M - $3M", sqft: "4,500 - 6,500 SF", costPerSqft: "$375 - $450/SF", timeline: "14-18 months" },
  { tier: "High-End Luxury", range: "$3M - $5M", sqft: "6,500 - 9,000 SF", costPerSqft: "$450 - $525/SF", timeline: "16-20 months" },
  { tier: "Estate Level", range: "$5M+", sqft: "9,000+ SF", costPerSqft: "$500 - $550+/SF", timeline: "18-24 months" },
];

const processSteps = [
  { step: 1, title: "Discovery & Site Analysis", description: "Initial consultation, lot evaluation or site search assistance, budget alignment, and design direction" },
  { step: 2, title: "Pre-Construction", description: "Detailed budgeting, HOA/ARC coordination if applicable, constructability review, and specification development" },
  { step: 3, title: "Permitting", description: "Hillsborough County permit applications, architectural review approvals, and any required environmental permits" },
  { step: 4, title: "Foundation & Structure", description: "Site preparation, foundation work including well/septic if needed, framing, and roof installation" },
  { step: 5, title: "Systems & Envelope", description: "Electrical, plumbing, HVAC rough-in, windows, doors, and building envelope completion" },
  { step: 6, title: "Finishes & Completion", description: "Interior finishes, cabinetry, flooring, smart home integration, landscaping, pool, and final inspections" },
];

export default function LuxuryCustomHomesBrandonPage() {
  return (
    <>
      <LocalBusinessSchema city="Brandon" service="Luxury Custom Homes" />
      <ServiceSchema
        serviceName="Luxury Custom Home Construction"
        serviceDescription="Premier custom home builder in Brandon, FL specializing in $800K-$5M+ family estates. Serving FishHawk Ranch, Lithia, Valrico, and Alafia River properties with larger lots and master-planned community builds."
        city="Brandon"
        minPrice="800000"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Luxury Custom Home Builder in Brandon, FL"
        description="Comprehensive guide to building luxury custom homes in Brandon. Learn about FishHawk Ranch, Lithia acreage, Valrico estates, costs, timelines, and Hillsborough County permitting from Tampa Bay's leading custom home builder."
        datePublished="2024-01-15"
        dateModified="2025-01-18"
        slug="/luxury-custom-homes-brandon/"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2023/12/custom-home-construction-2.jpg')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Brandon / FishHawk / Lithia, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Luxury Custom Homes in Brandon
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Brandon's premier custom home builder for $800K-$5M+ family estates. From FishHawk Ranch master-planned luxury to Lithia acreage estates, we build exceptional homes where space, schools, and value meet uncompromising quality.
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
              <span className="font-semibold text-gray-700">$800K - $5M+ Projects</span>
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
                Brandon's Premier Luxury Home Builder
              </h2>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists brings the same precision, project management expertise, and quality control that defines our commercial construction work to Brandon's most discerning homeowners. We specialize in luxury custom homes from $800,000 to over $5 million, with particular expertise in FishHawk Ranch custom builds, Lithia acreage estates, and Valrico luxury properties.
              </p>

              <p className="text-gray-600 mb-6">
                Brandon offers exceptional opportunities for luxury living that many South Tampa buyers are discovering—larger lot sizes, award-winning schools, resort-style community amenities, and significantly better value per square foot. Our team understands the unique requirements of building in master-planned communities like FishHawk, navigating Hillsborough County permitting, and constructing on rural Lithia acreage.
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
                Why Build a Custom Home in Brandon?
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Exceptional Value:</strong> Get 40-60% more land and home for your investment compared to South Tampa. Build a true estate on an acre+ instead of maximizing a small city lot</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Top-Rated Schools:</strong> FishHawk, Lithia, and Valrico are served by Hillsborough County's highest-rated schools including Newsome High School and Barrington Middle</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Family-Oriented Living:</strong> Master-planned communities offer pools, fitness centers, trails, and organized activities that create genuine neighborhood connections</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Space to Grow:</strong> Build on 1/2 acre to 20+ acres with room for pools, sport courts, guest houses, home offices, and future expansion</span>
                </li>
              </ul>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Brandon Custom Home Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Start Your Project</h3>
                <p className="text-gray-200 mb-4">
                  Schedule a consultation to discuss your luxury home vision, lot selection, or FishHawk/Lithia property.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-6 rounded-full hover:bg-brand-gold-light transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <RelatedServices city="Brandon" currentService="luxury-custom-homes" />
              <NearbyLocations currentCity="Brandon" service="luxury-custom-homes" serviceName="Luxury Custom Homes" />
            </div>
          </div>
        </div>
      </section>

      {/* Brandon Neighborhoods */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Brandon Area's Premier Neighborhoods for Luxury Homes
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We build in the Brandon area's most desirable communities, each offering unique lifestyle opportunities from master-planned amenities to private acreage estates.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {brandonNeighborhoods.map((neighborhood) => (
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
            Brandon Luxury Home Construction Costs
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Construction costs vary based on finishes, features, and complexity. Brandon offers excellent value compared to urban Tampa, with lower land costs allowing more investment in the home itself.
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
            * Costs as of 2025. Does not include land, design fees, or soft costs. Acreage properties may have additional costs for well, septic, and extended driveways.
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
            Building a luxury custom home requires meticulous planning and execution. Our proven 6-phase process ensures your vision becomes reality, with specific expertise in Hillsborough County requirements.
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
                Our commercial construction background brings unmatched project management capabilities to residential construction. We apply the same rigorous quality control, scheduling discipline, and documentation standards that define major commercial projects—essential for complex custom home builds.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Always Prime Contractor:</strong> We never subcontract our management responsibility—you get direct accountability</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Hillsborough County Expertise:</strong> Deep experience with county permitting, inspections, and code requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>HOA/ARC Coordination:</strong> Experienced with FishHawk, Panther Trace, and other community architectural requirements</span>
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
                <Heart className="w-10 h-10 text-brand-gold mx-auto mb-2" />
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
            Why Brandon Families Choose FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-8">
              <Gem className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">True Custom Building</h3>
              <p className="text-gray-600">
                Unlike production builders, we create fully custom homes tailored to your family's lifestyle—from floor plan to finishes, every detail reflects your vision.
              </p>
            </div>
            <div className="card text-center p-8">
              <Compass className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Design Collaboration</h3>
              <p className="text-gray-600">
                We work seamlessly with architects and designers, providing constructability review and value engineering to optimize your design and budget.
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
        items={brandonFaqs}
        title="Brandon Luxury Custom Homes FAQs"
      />

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Build Your Brandon Dream Home
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From FishHawk Ranch estates to Lithia acreage retreats, FCS brings exceptional craftsmanship to Brandon's finest custom homes. Schedule a consultation to discuss your vision.
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
