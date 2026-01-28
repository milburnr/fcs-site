import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Sun, Zap, Leaf, Building, TrendingDown, Award, DollarSign, Wind } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Zero Net Energy Boosting Commercial Construction in Tampa - Florida Construction Specialists",
  description: "Boost your commercial construction project in Tampa with Florida Construction Specialists, experts in zero net energy. Experience the power of zero net energy buildings.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Zero Net Energy Boosting Commercial Construction", href: "/zero-net-energy-boosting-commercial-construction/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/services/commercial/medical-construction/", label: "Medical Facility Construction" },
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
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Zero net energy commercial construction in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Zero Net Energy: Boosting Commercial Construction in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Boost your commercial construction project in Tampa with Florida Construction Specialists, experts in zero net energy buildings. Experience the power of ZNE construction for your Tampa Bay business.
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
              Zero Net Energy (ZNE) construction represents the future of commercial building—and Tampa Bay is uniquely positioned to capitalize on this revolutionary approach. As Florida's leading commercial contractor serving Tampa, Lakeland, Sarasota, and the surrounding areas, Florida Construction Specialists is pioneering ZNE commercial construction that produces as much energy as it consumes on an annual basis. With Tampa's abundant sunshine and rising energy costs, ZNE buildings offer compelling financial returns alongside environmental leadership.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              What Is Zero Net Energy Construction?
            </h2>
            <p className="text-gray-600 mb-6">
              A Zero Net Energy building produces, through on-site renewable energy systems, at least as much energy as it consumes over the course of a year. The ZNE equation has two parts: dramatically reducing energy demand through ultra-efficient design and construction, then meeting remaining needs with renewable energy—typically solar photovoltaic systems in Florida.
            </p>
            <p className="text-gray-600 mb-6">
              ZNE isn't just an environmental aspiration—it's increasingly a practical, financially sound choice for Tampa Bay commercial buildings. The combination of Florida's solar resources, declining solar costs, available incentives, and rising utility rates has made ZNE achievable for a growing range of commercial building types.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Why Tampa Bay Is Ideal for Zero Net Energy Buildings
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay offers exceptional conditions for ZNE commercial construction:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Sun className="w-5 h-5" />
                  Abundant Solar Resources
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Tampa receives over 2,900 hours of sunshine annually—among the highest in the nation. This solar abundance makes photovoltaic systems exceptionally productive:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• 5.0-5.5 peak sun hours daily average</li>
                  <li>• Solar yields 15-20% higher than national average</li>
                  <li>• Consistent production year-round</li>
                  <li>• Peak solar coincides with peak demand</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Favorable Economics
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  The financial case for ZNE continues to strengthen:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Solar costs down 90% over 10 years</li>
                  <li>• 30% federal Investment Tax Credit available</li>
                  <li>• Net metering available in Tampa Bay</li>
                  <li>• Rising utility rates improve payback</li>
                  <li>• Commercial solar ROI of 15-25%</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              The ZNE Formula: Efficiency First, Then Renewables
            </h2>
            <p className="text-gray-600 mb-6">
              Achieving Zero Net Energy requires a two-pronged approach: minimizing energy demand, then generating what remains from renewable sources. The most cost-effective ZNE buildings prioritize efficiency—it's cheaper to save a kilowatt-hour than to generate one.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Step 1: Radical Energy Efficiency</h3>
              <p className="text-gray-600 mb-4">ZNE buildings typically achieve 50-70% energy reduction compared to code-minimum construction through:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-brand-green-dark text-sm mb-2">Building Envelope</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Superior insulation (R-30+ walls, R-50+ roof)</li>
                    <li>• Triple-pane, low-E glazing</li>
                    <li>• Optimized window-to-wall ratios</li>
                    <li>• Cool roofing systems</li>
                    <li>• Airtight construction (0.25 ACH or better)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-green-dark text-sm mb-2">Mechanical Systems</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Variable refrigerant flow HVAC</li>
                    <li>• Dedicated outdoor air systems</li>
                    <li>• Energy recovery ventilation</li>
                    <li>• Ground-source heat pumps</li>
                    <li>• Premium efficiency equipment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-green-dark text-sm mb-2">Lighting</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 100% LED lighting</li>
                    <li>• Daylight harvesting</li>
                    <li>• Occupancy/vacancy sensors</li>
                    <li>• Task ambient lighting design</li>
                    <li>• 0.5 W/SF or less lighting power</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-green-dark text-sm mb-2">Controls</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Advanced building automation</li>
                    <li>• Demand-controlled ventilation</li>
                    <li>• Plug load management</li>
                    <li>• Real-time energy monitoring</li>
                    <li>• Automated shade systems</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Step 2: On-Site Renewable Energy</h3>
              <p className="text-gray-600 mb-4">After efficiency optimization, remaining energy needs are met with on-site solar:</p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <Sun className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span><strong>Rooftop Solar PV:</strong> The primary renewable source for most commercial ZNE buildings. Tampa Bay's commercial rooftops can typically generate 15-20 watts per square foot of roof area.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sun className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span><strong>Solar Carports:</strong> Parking structures with integrated solar provide additional generation capacity while shading vehicles—highly valued in Tampa's climate.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sun className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span><strong>Building-Integrated PV:</strong> Solar incorporated into facades, canopies, and skylights adds generation without dedicated roof area.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span><strong>Battery Storage:</strong> Energy storage enables greater self-consumption, demand charge management, and resilience during grid outages.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              ZNE Economics: The Business Case
            </h2>
            <p className="text-gray-600 mb-4">
              Understanding the economics of ZNE construction helps Tampa Bay business owners make informed decisions:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Component</th>
                    <th className="px-6 py-3 text-left">Cost Premium</th>
                    <th className="px-6 py-3 text-left">Annual Savings</th>
                    <th className="px-6 py-3 text-left">Simple Payback</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Enhanced Envelope</td>
                    <td className="px-6 py-4">$8-15/SF</td>
                    <td className="px-6 py-4">$1.50-2.50/SF</td>
                    <td className="px-6 py-4">5-7 years</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Premium HVAC</td>
                    <td className="px-6 py-4">$5-10/SF</td>
                    <td className="px-6 py-4">$1.00-2.00/SF</td>
                    <td className="px-6 py-4">5-8 years</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Advanced Lighting</td>
                    <td className="px-6 py-4">$3-5/SF</td>
                    <td className="px-6 py-4">$0.75-1.25/SF</td>
                    <td className="px-6 py-4">3-5 years</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Solar PV System</td>
                    <td className="px-6 py-4">$15-25/SF</td>
                    <td className="px-6 py-4">$2.00-3.00/SF</td>
                    <td className="px-6 py-4">6-10 years*</td>
                  </tr>
                  <tr className="font-bold bg-green-50">
                    <td className="px-6 py-4">Total ZNE Package</td>
                    <td className="px-6 py-4">$31-55/SF</td>
                    <td className="px-6 py-4">$5.25-8.75/SF</td>
                    <td className="px-6 py-4">6-8 years*</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mb-8">*After federal ITC and applicable incentives</p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Available Incentives for ZNE Construction in Tampa Bay
            </h2>
            <p className="text-gray-600 mb-6">
              Multiple incentives reduce the effective cost of ZNE construction:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Federal Incentives
                </h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li><strong>Investment Tax Credit:</strong> 30% of solar system cost</li>
                  <li><strong>179D Tax Deduction:</strong> Up to $5/SF for efficient buildings</li>
                  <li><strong>Accelerated Depreciation:</strong> MACRS on solar equipment</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Utility Incentives
                </h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li><strong>TECO/Duke Rebates:</strong> For efficiency measures</li>
                  <li><strong>Net Metering:</strong> Credit for excess generation</li>
                  <li><strong>Time-of-Use Rates:</strong> Reward solar self-consumption</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Which Building Types Are Best Suited for ZNE?
            </h2>
            <p className="text-gray-600 mb-6">
              Some building types are more readily achievable as ZNE than others, based on their energy use characteristics and roof area:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Building Type</th>
                    <th className="px-6 py-3 text-left">ZNE Feasibility</th>
                    <th className="px-6 py-3 text-left">Key Considerations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Single-Story Office</td>
                    <td className="px-6 py-4 text-green-600 font-bold">Excellent</td>
                    <td className="px-6 py-4">Large roof area, moderate energy density</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Single-Story Retail</td>
                    <td className="px-6 py-4 text-green-600 font-bold">Excellent</td>
                    <td className="px-6 py-4">Expansive roofs, solar carport opportunity</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Warehouse/Light Industrial</td>
                    <td className="px-6 py-4 text-green-600 font-bold">Excellent</td>
                    <td className="px-6 py-4">Low energy intensity, huge roof areas</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Multi-Story Office</td>
                    <td className="px-6 py-4 text-amber-600 font-bold">Good</td>
                    <td className="px-6 py-4">May need solar parking or facades</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Medical Office</td>
                    <td className="px-6 py-4 text-amber-600 font-bold">Challenging</td>
                    <td className="px-6 py-4">High energy density, equipment loads</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Data Centers</td>
                    <td className="px-6 py-4 text-red-600 font-bold">Very Challenging</td>
                    <td className="px-6 py-4">Extremely high energy density</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              The Florida Construction Specialists ZNE Approach
            </h2>
            <p className="text-gray-600 mb-6">
              Achieving Zero Net Energy requires integrated design and construction expertise. Our approach includes:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Energy Modeling:</strong>
                  <span className="text-gray-600"> We use detailed energy simulation to optimize design decisions before construction, balancing efficiency investments against renewable generation requirements.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Integrated Design:</strong>
                  <span className="text-gray-600"> ZNE requires close coordination between architecture, mechanical engineering, and construction. Our design-build approach enables this integration from project inception.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Construction Quality:</strong>
                  <span className="text-gray-600"> High-performance building envelopes demand precise execution. Our quality control programs ensure thermal bridges are eliminated and air barriers are continuous.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Commissioning:</strong>
                  <span className="text-gray-600"> We verify that all systems perform as designed through comprehensive commissioning, ensuring the building achieves its energy targets.</span>
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              ZNE and Resilience: The Tampa Bay Connection
            </h2>
            <p className="text-gray-600 mb-6">
              Zero Net Energy buildings offer enhanced resilience—particularly valuable in hurricane-prone Tampa Bay. When paired with battery storage, ZNE buildings can maintain critical operations during grid outages, providing:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Continued operation of essential systems during hurricanes</li>
              <li>Faster return to normal operations after storms</li>
              <li>Reduced dependence on vulnerable grid infrastructure</li>
              <li>Protection from extended post-storm power outages</li>
              <li>Critical load support for security, communications, and refrigeration</li>
            </ul>

            {/* FAQ Section */}
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions About Zero Net Energy Construction
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Is Zero Net Energy achievable for existing buildings?
                  </h3>
                  <p className="text-gray-600">
                    ZNE retrofits are more challenging than new construction but can be achieved for suitable buildings. Deep energy retrofits can reduce consumption by 50-70%, and solar additions offset the remainder. Buildings with large roof areas relative to their floor area are the best retrofit candidates. Florida Construction Specialists can evaluate your existing building's ZNE potential.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How much does ZNE add to construction costs?
                  </h3>
                  <p className="text-gray-600">
                    ZNE typically adds 10-20% to construction costs before incentives. After the 30% federal ITC and other available incentives, the net premium is often 5-15%. This investment is typically recovered in 6-10 years through eliminated energy costs, with 20+ additional years of free energy following payback.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    What happens if the building uses more energy than expected?
                  </h3>
                  <p className="text-gray-600">
                    If actual energy use exceeds design targets, the building may achieve "net zero ready" rather than true ZNE status. Detailed energy modeling and commissioning minimize this risk. Additional solar capacity can be added if needed. Building automation systems enable ongoing optimization to reach performance targets.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Can ZNE buildings withstand Florida hurricanes?
                  </h3>
                  <p className="text-gray-600">
                    Yes—ZNE features complement hurricane resilience. Enhanced building envelopes resist wind and water better than code-minimum construction. Modern solar mounting systems are engineered for 180+ mph winds. The superior insulation and airtightness also help maintain interior conditions during extended outages.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Does ZNE make sense for my building type?
                  </h3>
                  <p className="text-gray-600">
                    ZNE is most readily achievable for single-story buildings with large roof areas relative to floor area—retail, office, light industrial, and warehouse applications. Multi-story buildings can achieve ZNE with solar parking, facades, or nearby ground-mount systems. High energy density uses like data centers or 24/7 manufacturing are challenging. We can assess your specific situation during pre-construction consultation.
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
            Ready to Explore Zero Net Energy for Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists today to discuss ZNE options for your Tampa Bay commercial project.
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
