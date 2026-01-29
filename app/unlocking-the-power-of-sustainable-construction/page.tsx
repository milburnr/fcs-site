import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Leaf, Building, Sun, Droplets, Wind, Award, TrendingUp, DollarSign, Zap, Users } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Unlocking the Power of Sustainable Construction - Florida Construction Specialists",
  description: "Discover the transformative power of sustainable construction. Florida Construction Specialists delivers green building solutions that drive value in Tampa Bay.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Unlocking the Power of Sustainable Construction", href: "/unlocking-the-power-of-sustainable-construction/" },
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
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-large.webp"
            alt="Sustainable construction power in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Unlocking the Power of Sustainable Construction
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Harness the transformative power of sustainable construction. Florida Construction Specialists delivers green building innovations that reduce costs, attract tenants, and create lasting value throughout Tampa Bay.
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
              Sustainable construction has evolved from an environmental ideal to a powerful business strategy that delivers measurable returns. As Tampa Bay's leading commercial contractor serving Tampa, Lakeland, Sarasota, and the surrounding areas, Florida Construction Specialists helps businesses unlock the full potential of sustainable construction—reducing operating costs, attracting quality tenants, enhancing property values, and demonstrating environmental leadership. Understanding how to harness this power transforms how you approach commercial real estate investments.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              The Power of Sustainable Construction Revealed
            </h2>
            <p className="text-gray-600 mb-6">
              Sustainable construction creates value across multiple dimensions simultaneously. Unlike conventional construction that optimizes primarily for initial cost, sustainable construction takes a lifecycle view—considering construction costs, operating costs, tenant appeal, property value, and environmental impact together. This holistic approach consistently delivers superior overall value.
            </p>
            <p className="text-gray-600 mb-6">
              The numbers demonstrate this power clearly: sustainable commercial buildings in Tampa Bay achieve 25-35% lower energy costs, command 10-20% rent premiums, experience 15% better occupancy rates, and sell for 10-20% higher prices. These advantages compound over time, creating significant value for property owners willing to invest in sustainability.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Five Powers of Sustainable Construction
            </h2>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                <DollarSign className="w-6 h-6" />
                Power 1: Operational Cost Reduction
              </h3>
              <p className="text-gray-600 mb-4">
                Energy, water, and maintenance costs represent significant ongoing expenses for commercial buildings. Sustainable construction dramatically reduces these costs through efficient systems, high-performance envelopes, and durable materials. In Tampa Bay's climate, where cooling dominates energy consumption, sustainable buildings achieve particularly strong savings.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded text-center">
                  <div className="text-2xl font-bold text-brand-green">25-35%</div>
                  <div className="text-sm text-gray-600">Energy Savings</div>
                </div>
                <div className="bg-white p-4 rounded text-center">
                  <div className="text-2xl font-bold text-brand-green">30-50%</div>
                  <div className="text-sm text-gray-600">Water Savings</div>
                </div>
                <div className="bg-white p-4 rounded text-center">
                  <div className="text-2xl font-bold text-brand-green">20-30%</div>
                  <div className="text-sm text-gray-600">Maintenance Savings</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Power 2: Enhanced Property Value
              </h3>
              <p className="text-gray-600 mb-4">
                Sustainable buildings command premium values in Tampa Bay's commercial real estate market. Appraisers recognize the lower operating costs and higher income potential. Investors value the reduced risk profile. Buyers pay premium prices for buildings that deliver superior performance.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>LEED-certified buildings sell for 10-20% premiums</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>Lower cap rates reflect reduced operating risk</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>Faster sale cycles with broader buyer pools</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                <Users className="w-6 h-6" />
                Power 3: Tenant Attraction and Retention
              </h3>
              <p className="text-gray-600 mb-4">
                Quality tenants increasingly prioritize sustainable buildings. Corporate tenants seeking to meet ESG commitments require green-certified space. Healthcare organizations recognize the value of healthy indoor environments. Retail brands want to demonstrate environmental responsibility. Sustainable buildings attract and retain these premium tenants.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>10-20% higher achievable rents</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>15% better occupancy rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>Lower tenant turnover and longer lease terms</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                <Zap className="w-6 h-6" />
                Power 4: Climate Resilience
              </h3>
              <p className="text-gray-600 mb-4">
                In Tampa Bay, sustainable construction delivers enhanced resilience against hurricanes, flooding, and power outages. Superior building envelopes resist wind and water. Solar plus storage maintains operations during grid failures. Durable materials withstand Florida's harsh climate. This resilience protects investments and reduces recovery costs.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>Enhanced hurricane resistance beyond code requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>Backup power for critical systems during outages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>Faster recovery and return to operation after storms</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                <Leaf className="w-6 h-6" />
                Power 5: Environmental Leadership
              </h3>
              <p className="text-gray-600 mb-4">
                Sustainable buildings demonstrate environmental responsibility to customers, employees, investors, and communities. This leadership enhances brand value, supports corporate sustainability goals, and contributes to Tampa Bay's environmental health. For many organizations, this alignment with values is as important as the financial benefits.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>30-50% reduction in carbon footprint</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>Protection of Tampa Bay's ecosystems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>Alignment with stakeholder environmental values</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Unlocking Value: Cost-Benefit Analysis
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Sustainable Feature</th>
                    <th className="px-6 py-3 text-left">Investment</th>
                    <th className="px-6 py-3 text-left">Annual Return</th>
                    <th className="px-6 py-3 text-left">Payback</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">LED Lighting + Controls</td>
                    <td className="px-6 py-4">$2-4/SF</td>
                    <td className="px-6 py-4">60-75% lighting savings</td>
                    <td className="px-6 py-4">1-3 years</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Building Automation</td>
                    <td className="px-6 py-4">$3-7/SF</td>
                    <td className="px-6 py-4">15-25% energy savings</td>
                    <td className="px-6 py-4">3-5 years</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">High-Performance Envelope</td>
                    <td className="px-6 py-4">5-10% premium</td>
                    <td className="px-6 py-4">20-35% HVAC savings</td>
                    <td className="px-6 py-4">5-8 years</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Efficient HVAC Systems</td>
                    <td className="px-6 py-4">15-25% premium</td>
                    <td className="px-6 py-4">30-50% HVAC savings</td>
                    <td className="px-6 py-4">5-8 years</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Solar PV System</td>
                    <td className="px-6 py-4">$15-25/SF</td>
                    <td className="px-6 py-4">40-100% electric offset</td>
                    <td className="px-6 py-4">6-10 years*</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">LEED Certification</td>
                    <td className="px-6 py-4">2-5% premium</td>
                    <td className="px-6 py-4">10-20% rent premium</td>
                    <td className="px-6 py-4">Immediate ROI</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mb-8">*After 30% federal Investment Tax Credit</p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Florida Green Building Incentives
            </h2>
            <p className="text-gray-600 mb-6">
              Unlock additional value through incentive programs that reduce effective costs:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Incentive</th>
                    <th className="px-6 py-3 text-left">Value</th>
                    <th className="px-6 py-3 text-left">Application</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">179D Tax Deduction</td>
                    <td className="px-6 py-4">Up to $5.00/SF</td>
                    <td className="px-6 py-4">Energy-efficient commercial buildings</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Solar Investment Tax Credit</td>
                    <td className="px-6 py-4">30% of system cost</td>
                    <td className="px-6 py-4">Solar PV installations</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Utility Rebates (TECO/Duke)</td>
                    <td className="px-6 py-4">Varies by measure</td>
                    <td className="px-6 py-4">Lighting, HVAC, controls</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">PACE Financing</td>
                    <td className="px-6 py-4">100% financing</td>
                    <td className="px-6 py-4">Qualifying energy improvements</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Expedited Permitting</td>
                    <td className="px-6 py-4">50% faster review</td>
                    <td className="px-6 py-4">LEED-registered projects</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              How to Unlock Sustainable Construction Power
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists helps you harness sustainable construction through a structured approach:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <strong className="text-brand-green-dark">Goal Setting:</strong>
                  <span className="text-gray-600"> Define your sustainability objectives—cost reduction, certification, tenant attraction, resilience, or environmental leadership.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <strong className="text-brand-green-dark">Opportunity Analysis:</strong>
                  <span className="text-gray-600"> We evaluate your project to identify highest-value sustainability opportunities.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <strong className="text-brand-green-dark">Investment Planning:</strong>
                  <span className="text-gray-600"> Prioritize sustainable features based on ROI, budget, and goals.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                <div>
                  <strong className="text-brand-green-dark">Incentive Optimization:</strong>
                  <span className="text-gray-600"> Identify and capture all available incentives to maximize returns.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center font-bold shrink-0">5</div>
                <div>
                  <strong className="text-brand-green-dark">Integrated Execution:</strong>
                  <span className="text-gray-600"> Deliver sustainable construction with our experienced team.</span>
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Partner with Tampa Bay's Sustainability Leader
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists brings the expertise to unlock sustainable construction's full potential for your project. Our team includes LEED-accredited professionals who understand how to integrate sustainability cost-effectively. We've delivered successful sustainable projects across building types throughout Tampa Bay, and we're ready to help you harness the power of green building.
            </p>

            {/* FAQ Section */}
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How much does sustainable construction really cost compared to conventional?
                  </h3>
                  <p className="text-gray-600">
                    The cost premium for sustainable construction has declined dramatically and now typically ranges from 0-5% for most commercial projects. Many sustainable features are now standard practice. When factoring in incentives (179D, solar ITC, utility rebates), the net premium is often negligible. The 25-35% operating cost savings typically recover any additional investment within 3-7 years—and the value creation continues for decades after.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    What sustainable features should I prioritize for maximum ROI?
                  </h3>
                  <p className="text-gray-600">
                    Start with features offering the fastest payback: LED lighting with controls (1-3 years), building automation (3-5 years), and water-efficient fixtures (1-2 years). Then add high-performance envelope and HVAC improvements (5-8 years). Solar PV delivers strong returns in Tampa's sunny climate after the federal tax credit. If pursuing certification, LEED Silver often represents the best value balance.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Is LEED certification worth the investment?
                  </h3>
                  <p className="text-gray-600">
                    For most Tampa Bay commercial projects, yes. LEED buildings command 10-20% rent premiums and sell for similar premiums. The certification process ensures your building achieves its sustainability goals. Tampa offers expedited permitting for LEED projects. The market recognition attracts quality tenants. We can help you determine the optimal certification level for your project.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How do sustainable buildings perform during Florida hurricanes?
                  </h3>
                  <p className="text-gray-600">
                    Sustainable buildings typically outperform conventional structures. Enhanced building envelopes resist wind and water better. Impact-resistant glazing protects against flying debris. Solar panels are engineered for 180+ mph winds. Battery storage maintains operations during extended outages. The durability emphasis in sustainable construction aligns perfectly with hurricane resilience.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    What incentives can reduce my sustainable construction costs?
                  </h3>
                  <p className="text-gray-600">
                    Multiple incentives are available: federal 179D tax deduction (up to $5/SF), 30% solar Investment Tax Credit, TECO and Duke Energy rebates for efficiency measures, PACE financing for qualifying improvements, and Tampa's expedited permitting for LEED projects. Combined, these incentives can offset most or all of the sustainability premium while accelerating project timelines.
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
            Ready to Unlock Sustainable Construction Power?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to harness sustainable construction for your Tampa Bay project.
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
