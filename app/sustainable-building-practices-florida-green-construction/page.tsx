import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Leaf, Building, Sun, Droplets, Wind, Award, Recycle, TrendingUp } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { FAQWithSchema } from "@/components/FAQ";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Sustainable Building Practices: Florida Green Construction - Florida Construction Specialists",
  description: "Expert sustainable building practices for Florida commercial construction. LEED-certified contractors delivering green buildings throughout Tampa Bay.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Sustainable Building Practices: Florida Green Construction", href: "/sustainable-building-practices-florida-green-construction/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/sustainable-building-materials-in-commercial-construction/", label: "Sustainable Building Materials" },
  { href: "/construction-florida-leading-way-leed-certification/", label: "LEED Certification Services" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const faqs = [
  {
    question: "How much more does sustainable construction cost?",
    answer: "The cost premium for sustainable construction has declined significantly and now typically ranges from 0-5% for most commercial projects. Many sustainable features like LED lighting and efficient HVAC are now standard practice. When factoring in available incentives (179D, solar ITC, utility rebates), the net premium is often negligible. Operating cost savings typically recover any additional investment within 3-7 years.",
  },
  {
    question: "Is LEED certification worth the investment?",
    answer: "For most Tampa Bay commercial projects, yes. LEED-certified buildings command higher rents (10-15% premium), experience lower vacancy rates, and achieve higher sale prices. The certification process also ensures your building achieves its sustainability goals. For smaller projects, Florida Green Building Coalition certification may offer similar benefits at lower cost.",
  },
  {
    question: "What are the most cost-effective sustainable practices?",
    answer: "The fastest payback typically comes from LED lighting with controls (1-3 years), followed by building automation systems (3-5 years), and high-efficiency HVAC (4-7 years). Water-efficient fixtures have minimal cost premium with quick payback. Solar PV delivers strong returns in Tampa's sunny climate, especially after the 30% federal tax credit.",
  },
  {
    question: "How do sustainable buildings perform during hurricanes?",
    answer: "Sustainable buildings often perform better during hurricanes because they typically feature enhanced building envelopes, impact-resistant glazing, and superior construction quality. The emphasis on durability and resilience in sustainable construction aligns well with hurricane preparedness. Solar panels are designed for high wind loads and battery storage provides power during outages.",
  },
  {
    question: "What incentives are available for sustainable construction in Florida?",
    answer: "Florida offers numerous incentives: the federal 179D tax deduction (up to $5/SF), 30% solar Investment Tax Credit, TECO and Duke Energy rebates for efficiency measures, PACE financing for qualifying improvements, and expedited permitting for LEED projects in Tampa. Our team helps identify and maximize all available incentives.",
  },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Sustainable building practices in Florida"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Sustainable Building Practices: Florida Green Construction
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Transform your commercial project with proven sustainable building practices. Florida Construction Specialists delivers green construction solutions that reduce costs, attract tenants, and protect the environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
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
      </section>

      {/* Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Sustainable building practices have transformed from optional features to essential elements of successful commercial construction in Florida. As Tampa Bay's leading commercial contractor serving Tampa, Lakeland, Sarasota, and the surrounding areas, Florida Construction Specialists integrates sustainable practices into every project—delivering buildings that cost less to operate, provide healthier environments for occupants, and demonstrate environmental responsibility to customers and communities.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              What Makes Construction "Sustainable" in Florida?
            </h2>
            <p className="text-gray-600 mb-6">
              Sustainable construction in Florida addresses the full lifecycle of buildings—from material sourcing and construction practices through decades of operation and eventual renovation or demolition. It considers environmental impact, resource consumption, occupant health, and economic performance. Florida's unique climate demands specific approaches: buildings must handle intense solar radiation, high humidity, hurricane threats, and year-round cooling loads while minimizing environmental impact on sensitive ecosystems.
            </p>
            <p className="text-gray-600 mb-6">
              The business case for sustainable building practices in Florida is compelling: green buildings typically achieve 25-35% lower operating costs, command 10-15% higher rents, experience 4% higher occupancy rates, and sell for 10-20% premiums compared to conventional buildings. These advantages more than offset any additional construction costs, typically delivering investment payback within 3-7 years.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Core Sustainable Building Practices
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Sun className="w-5 h-5" />
                  Energy Efficiency
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Reducing energy consumption through design and technology:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• High-performance building envelopes</li>
                  <li>• Efficient HVAC systems (VRF, high-SEER)</li>
                  <li>• LED lighting with smart controls</li>
                  <li>• Cool roofing and reflective surfaces</li>
                  <li>• Building automation systems</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Droplets className="w-5 h-5" />
                  Water Conservation
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Protecting Florida's water resources:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Low-flow fixtures (30-50% reduction)</li>
                  <li>• Efficient irrigation systems</li>
                  <li>• Reclaimed water utilization</li>
                  <li>• Rainwater harvesting</li>
                  <li>• Native, drought-tolerant landscaping</li>
                </ul>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Recycle className="w-5 h-5" />
                  Sustainable Materials
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Responsible material selection and sourcing:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Recycled-content materials</li>
                  <li>• Regionally sourced products</li>
                  <li>• FSC-certified wood</li>
                  <li>• Low-VOC finishes and adhesives</li>
                  <li>• Durable, low-maintenance products</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Wind className="w-5 h-5" />
                  Indoor Environmental Quality
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Creating healthy indoor environments:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Enhanced ventilation systems</li>
                  <li>• High-efficiency air filtration</li>
                  <li>• Non-toxic materials</li>
                  <li>• Daylight optimization</li>
                  <li>• Thermal comfort control</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Sustainable Construction Practices on the Job Site
            </h2>
            <p className="text-gray-600 mb-6">
              Sustainability extends beyond the finished building to how we construct it. Florida Construction Specialists implements comprehensive sustainable practices throughout the construction process:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Construction Waste Management</h3>
              <p className="text-gray-600 mb-4">Our waste diversion program achieves 90%+ recycling rates:</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded">
                  <div className="text-2xl font-bold text-brand-green mb-2">90%+</div>
                  <div className="text-sm text-gray-600">Waste Diverted</div>
                  <div className="text-xs text-gray-500">from landfills</div>
                </div>
                <div className="bg-white p-4 rounded">
                  <div className="text-2xl font-bold text-brand-green mb-2">75%</div>
                  <div className="text-sm text-gray-600">Materials Recycled</div>
                  <div className="text-xs text-gray-500">on average</div>
                </div>
                <div className="bg-white p-4 rounded">
                  <div className="text-2xl font-bold text-brand-green mb-2">500 mi</div>
                  <div className="text-sm text-gray-600">Regional Sourcing</div>
                  <div className="text-xs text-gray-500">priority radius</div>
                </div>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Material Sorting:</strong>
                  <span className="text-gray-600"> Separate recycling stations for cardboard, wood, metal, concrete, drywall, and plastics on every job site.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Waste Prevention:</strong>
                  <span className="text-gray-600"> Accurate material ordering and optimized cutting plans reduce waste at the source.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Erosion Control:</strong>
                  <span className="text-gray-600"> Silt fencing, inlet protection, and construction entrances prevent runoff into Tampa Bay's waterways.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Indoor Air Quality:</strong>
                  <span className="text-gray-600"> HVAC protection and low-VOC materials during construction ensure healthy buildings from day one.</span>
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Cost Analysis: Sustainable vs. Conventional Construction
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Sustainable Practice</th>
                    <th className="px-6 py-3 text-left">Initial Premium</th>
                    <th className="px-6 py-3 text-left">Annual Savings</th>
                    <th className="px-6 py-3 text-left">Payback Period</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">High-Performance Envelope</td>
                    <td className="px-6 py-4">5-10%</td>
                    <td className="px-6 py-4">$1.50-2.50/SF</td>
                    <td className="px-6 py-4">5-8 years</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">LED Lighting + Controls</td>
                    <td className="px-6 py-4">$2-4/SF</td>
                    <td className="px-6 py-4">60-75% lighting</td>
                    <td className="px-6 py-4">1-3 years</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">High-Efficiency HVAC</td>
                    <td className="px-6 py-4">10-15%</td>
                    <td className="px-6 py-4">20-40% HVAC</td>
                    <td className="px-6 py-4">4-7 years</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Water-Efficient Fixtures</td>
                    <td className="px-6 py-4">Minimal</td>
                    <td className="px-6 py-4">30-50% water</td>
                    <td className="px-6 py-4">1-2 years</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Solar PV System</td>
                    <td className="px-6 py-4">$15-25/SF</td>
                    <td className="px-6 py-4">40-100% electric</td>
                    <td className="px-6 py-4">6-10 years*</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Cool Roof System</td>
                    <td className="px-6 py-4">10-20%</td>
                    <td className="px-6 py-4">15-25% cooling</td>
                    <td className="px-6 py-4">3-5 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mb-8">*After 30% federal Investment Tax Credit</p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Green Building Certification Options
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists has experience delivering certified green buildings through multiple programs:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  LEED Certification
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  The most widely recognized green building certification:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Four levels: Certified, Silver, Gold, Platinum</li>
                  <li>• Strong market recognition</li>
                  <li>• Comprehensive sustainability framework</li>
                  <li>• Higher property values documented</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Florida Green Building Coalition
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Florida-specific certification addressing local conditions:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Tailored to Florida climate</li>
                  <li>• Hurricane resilience integration</li>
                  <li>• Insurance discount potential</li>
                  <li>• Often more cost-effective path</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Florida Green Building Incentives
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Incentive Program</th>
                    <th className="px-6 py-3 text-left">Benefit</th>
                    <th className="px-6 py-3 text-left">Eligibility</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Federal 179D Deduction</td>
                    <td className="px-6 py-4">Up to $5.00/SF</td>
                    <td className="px-6 py-4">Energy-efficient commercial buildings</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Solar Investment Tax Credit</td>
                    <td className="px-6 py-4">30% of system cost</td>
                    <td className="px-6 py-4">Solar installations</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">TECO Commercial Rebates</td>
                    <td className="px-6 py-4">Varies by measure</td>
                    <td className="px-6 py-4">Lighting, HVAC, controls</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Duke Energy Rebates</td>
                    <td className="px-6 py-4">Equipment-based</td>
                    <td className="px-6 py-4">Efficiency upgrades</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">PACE Financing</td>
                    <td className="px-6 py-4">100% financing</td>
                    <td className="px-6 py-4">Qualifying improvements</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Tampa Expedited Permitting</td>
                    <td className="px-6 py-4">50% faster review</td>
                    <td className="px-6 py-4">LEED-registered projects</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Climate Resilience as Sustainable Practice
            </h2>
            <p className="text-gray-600 mb-6">
              In Florida, true sustainability must include climate resilience. Buildings designed to withstand hurricanes, flooding, and sea level rise protect investments and reduce the need for repair and reconstruction—themselves resource-intensive activities:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Hurricane Resistance:</strong> Reinforced construction, impact-resistant glazing, and protected equipment reduce storm damage and recovery time.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Flood Adaptation:</strong> Elevated construction and flood-resistant materials in vulnerable areas protect against rising waters.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Energy Independence:</strong> Solar plus storage provides power during extended grid outages following major storms.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Durable Materials:</strong> Products rated for Florida's UV, humidity, and wind conditions last longer, reducing replacement frequency.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Partner with Florida's Sustainable Construction Expert
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists brings comprehensive expertise in sustainable building practices to every commercial project. Our team includes LEED-accredited professionals who understand how to integrate sustainability effectively and cost-efficiently. Whether you're pursuing green building certification or simply want to build more responsibly, we deliver sustainable solutions tailored to Tampa Bay's unique conditions.
            </p>

            {
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema 
        items={faqs} 
        title="Frequently Asked Questions About Sustainable Building Practices" 
        description="Common questions about sustainable and green construction in Florida"
      />

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Services"
            links={internalLinks}
          />
        </div>
      </section>

      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Build Sustainably in Florida?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss sustainable building practices for your Tampa Bay commercial project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
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
