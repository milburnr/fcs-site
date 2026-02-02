import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Leaf, Building, Sun, Droplets, Wind, Award, TrendingUp, DollarSign, Users } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Leading Sustainable Commercial Construction in Tampa",
  description: "Tampa Bay's leader in sustainable commercial construction. LEED-certified projects, green building practices, and eco-friendly construction for lasting value.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Sustainable Commercial Construction in Tampa", href: "/sustainable-commercial-construction-in-tampa/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/sustainable-building-materials-in-commercial-construction/", label: "Sustainable Building Materials" },
  { href: "/zero-net-energy-boosting-commercial-construction/", label: "Zero Net Energy Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
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
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Sustainable commercial construction in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Leading Sustainable Commercial Construction in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Florida Construction Specialists delivers sustainable commercial construction that reduces operating costs, attracts quality tenants, and demonstrates environmental leadership throughout Tampa Bay.
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
              Sustainable commercial construction has become the new standard for forward-thinking businesses in Tampa Bay. As Florida's premier commercial contractor serving Tampa, Lakeland, Sarasota, and the surrounding areas, Florida Construction Specialists has positioned itself at the forefront of green building practices. We understand that sustainable construction isn't just about environmental responsibility—it's a sound business strategy that delivers measurable returns through reduced operating costs, enhanced property values, and competitive advantages in tenant attraction.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Why Sustainable Commercial Construction Matters in Tampa
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay's commercial real estate market is increasingly driven by sustainability considerations. Corporate tenants seeking to meet their own environmental commitments actively prefer green-certified buildings. Investors recognize the lower operating costs and higher property values that sustainable buildings deliver. And Florida's unique climate—with its intense sun, high humidity, and hurricane exposure—makes sustainable construction practices particularly valuable.
            </p>
            <p className="text-gray-600 mb-6">
              The numbers tell a compelling story: sustainable commercial buildings in Tampa Bay typically achieve 25-35% lower energy costs compared to conventional construction. They command 10-20% higher lease rates and experience 15% better occupancy. When factored over a building's multi-decade lifespan, these advantages translate to significant value creation for property owners.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Our Sustainable Construction Capabilities
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  LEED Certification
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Our team includes LEED-accredited professionals experienced in achieving all certification levels:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• LEED Certified through Platinum</li>
                  <li>• New construction and major renovations</li>
                  <li>• Core & Shell and tenant improvements</li>
                  <li>• Full documentation and certification support</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Sun className="w-5 h-5" />
                  Energy Efficiency
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Comprehensive approaches to minimizing energy consumption:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• High-performance building envelopes</li>
                  <li>• Premium HVAC systems (VRF, high-SEER)</li>
                  <li>• LED lighting with smart controls</li>
                  <li>• Building automation systems</li>
                  <li>• Solar-ready and solar-equipped buildings</li>
                </ul>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Wind className="w-5 h-5" />
                  Indoor Environmental Quality
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Creating healthy, productive work environments:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Enhanced ventilation systems</li>
                  <li>• High-efficiency air filtration (MERV-13+)</li>
                  <li>• Low-VOC materials throughout</li>
                  <li>• Daylight optimization</li>
                  <li>• Thermal comfort control</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Droplets className="w-5 h-5" />
                  Water Conservation
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Protecting Florida's precious water resources:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Low-flow fixtures (30-50% reduction)</li>
                  <li>• Efficient irrigation systems</li>
                  <li>• Reclaimed water utilization</li>
                  <li>• Rainwater harvesting</li>
                  <li>• Native landscaping</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              The Business Case for Sustainable Construction
            </h2>
            <p className="text-gray-600 mb-6">
              Sustainable commercial construction delivers measurable financial benefits throughout the building lifecycle:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">25-35%</div>
                <div className="text-sm text-gray-600">Lower Energy Costs</div>
                <div className="text-xs text-gray-500">vs. conventional buildings</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">10-20%</div>
                <div className="text-sm text-gray-600">Higher Lease Rates</div>
                <div className="text-xs text-gray-500">for green-certified space</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">16%</div>
                <div className="text-sm text-gray-600">Better Occupancy</div>
                <div className="text-xs text-gray-500">LEED vs. conventional</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Sustainable Construction Cost Analysis
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Sustainable Feature</th>
                    <th className="px-6 py-3 text-left">Cost Premium</th>
                    <th className="px-6 py-3 text-left">Annual Savings</th>
                    <th className="px-6 py-3 text-left">Payback Period</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">High-Performance Envelope</td>
                    <td className="px-6 py-4">5-10%</td>
                    <td className="px-6 py-4">20-35% HVAC</td>
                    <td className="px-6 py-4">5-8 years</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">LED Lighting + Controls</td>
                    <td className="px-6 py-4">$2-4/SF</td>
                    <td className="px-6 py-4">60-75% lighting</td>
                    <td className="px-6 py-4">1-3 years</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">VRF HVAC Systems</td>
                    <td className="px-6 py-4">15-25%</td>
                    <td className="px-6 py-4">30-50% HVAC</td>
                    <td className="px-6 py-4">5-8 years</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Building Automation</td>
                    <td className="px-6 py-4">$3-7/SF</td>
                    <td className="px-6 py-4">15-25% total</td>
                    <td className="px-6 py-4">3-5 years</td>
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
              Tampa Bay Green Building Incentives
            </h2>
            <p className="text-gray-600 mb-6">
              Multiple incentive programs reduce the effective cost of sustainable commercial construction:
            </p>

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
                    <td className="px-6 py-4 font-medium">179D Tax Deduction</td>
                    <td className="px-6 py-4">Up to $5.00/SF</td>
                    <td className="px-6 py-4">Energy-efficient buildings</td>
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
                    <td className="px-6 py-4 font-medium">Tampa Expedited Permitting</td>
                    <td className="px-6 py-4">50% faster review</td>
                    <td className="px-6 py-4">LEED-registered projects</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">PACE Financing</td>
                    <td className="px-6 py-4">100% financing</td>
                    <td className="px-6 py-4">Qualifying improvements</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Sustainable Construction for Every Building Type
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists delivers sustainable commercial construction across all building types:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Office Buildings:</strong>
                  <span className="text-gray-600"> High-performance workspaces that reduce operating costs and attract quality tenants seeking sustainable environments.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Medical Facilities:</strong>
                  <span className="text-gray-600"> Healthcare environments where indoor air quality and patient wellness are paramount concerns.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Retail Centers:</strong>
                  <span className="text-gray-600"> Shopping environments that reduce energy costs while meeting retailer sustainability commitments.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Industrial Buildings:</strong>
                  <span className="text-gray-600"> Warehouses and manufacturing facilities with optimized lighting and efficient climate control.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Hospitality:</strong>
                  <span className="text-gray-600"> Hotels and restaurants where sustainability resonates with environmentally conscious guests.</span>
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Climate Resilience Integration
            </h2>
            <p className="text-gray-600 mb-6">
              In Tampa Bay, sustainable construction must include climate resilience. Our sustainable commercial buildings incorporate features that protect against hurricanes, flooding, and extended power outages:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Wind className="w-5 h-5" />
                  Storm Protection
                </h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Reinforced structural connections</li>
                  <li>• Impact-resistant glazing systems</li>
                  <li>• Protected mechanical equipment</li>
                  <li>• Backup power systems</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Droplets className="w-5 h-5" />
                  Flood Resilience
                </h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Elevated construction where appropriate</li>
                  <li>• Flood-resistant materials at lower levels</li>
                  <li>• Critical systems above flood elevation</li>
                  <li>• Enhanced stormwater management</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Why Choose Florida Construction Specialists?
            </h2>
            <p className="text-gray-600 mb-6">
              Our sustainable commercial construction expertise translates to successful, cost-effective projects:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Award className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>LEED-Accredited Team:</strong> Our professionals understand green building certification from design through construction.</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Proven Results:</strong> Successful sustainable projects across building types throughout Tampa Bay.</span>
              </li>
              <li className="flex items-start gap-3">
                <DollarSign className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Cost Optimization:</strong> We identify the most cost-effective sustainability strategies for your goals.</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Integrated Approach:</strong> Sustainability is woven into our standard practices, not added as an afterthought.</span>
              </li>
            </ul>

            {/* FAQ Section */}
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions About Sustainable Commercial Construction
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How much does sustainable commercial construction cost compared to conventional?
                  </h3>
                  <p className="text-gray-600">
                    The cost premium for sustainable construction has declined significantly and now ranges from 0-5% for most projects. Many sustainable features are now standard practice with minimal premium. When factoring in available incentives (179D, solar ITC, utility rebates), the net premium is often negligible. The 25-35% operating cost savings typically recover any additional investment within 3-7 years.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Is LEED certification worth pursuing for my Tampa commercial project?
                  </h3>
                  <p className="text-gray-600">
                    For most commercial projects, yes. LEED-certified buildings command 10-20% higher rents, experience better occupancy, and achieve higher sale prices. The certification process ensures your building achieves its sustainability goals. Tampa also offers expedited permitting for LEED-registered projects. We can help you determine whether LEED, Florida Green Building Coalition, or another certification best fits your project.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    What sustainable features offer the best return on investment?
                  </h3>
                  <p className="text-gray-600">
                    LED lighting with smart controls typically offers the fastest payback (1-3 years), followed by building automation systems (3-5 years), and efficient HVAC (4-7 years). Solar PV delivers strong returns in Tampa's sunny climate, especially after the 30% federal tax credit. Cool roofing is particularly valuable in Florida, with 3-5 year payback on cooling cost reductions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How do sustainable buildings perform during Florida hurricanes?
                  </h3>
                  <p className="text-gray-600">
                    Sustainable buildings often outperform conventional structures during hurricanes because they feature enhanced building envelopes, impact-resistant glazing, and superior construction quality. Solar panels are engineered for 180+ mph winds. Battery storage provides power during extended outages. The emphasis on durability in sustainable construction aligns perfectly with hurricane resilience.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    What incentives are available for sustainable construction in Tampa?
                  </h3>
                  <p className="text-gray-600">
                    Tampa Bay offers numerous incentives: federal 179D tax deduction (up to $5/SF), 30% solar Investment Tax Credit, TECO and Duke Energy rebates, PACE financing for qualifying improvements, and Tampa's expedited permitting for LEED projects. Our team helps identify and maximize all available incentives for your specific project.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

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
            Ready to Build Sustainably in Tampa Bay?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss sustainable construction for your Tampa Bay commercial project.
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
