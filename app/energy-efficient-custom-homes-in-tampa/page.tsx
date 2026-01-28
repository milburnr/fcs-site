import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Zap, Thermometer, Home, DollarSign } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Energy-Efficient Custom Homes in Tampa | Save 40-60% on Utilities - Florida Construction Specialists",
  description: "Build an energy-efficient custom home in Tampa with advanced insulation, high-SEER HVAC, and smart systems. Reduce utility costs by 40-60%. Luxury homes from $400K-$2M+.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Energy Efficient Custom Homes in Tampa", href: "/energy-efficient-custom-homes-in-tampa/" },
];

const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/eco-friendly-custom-homes-in-tampa/", label: "Eco-Friendly Custom Homes" },
  { href: "/smart-home-integration-in-tampa-custom-homes-2/", label: "Smart Home Integration" },
  { href: "/climate-resilient-custom-homes-in-tampa/", label: "Climate-Resilient Homes" },
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
            src="/wp-content/uploads/2023/12/custom-home-1.png"
            alt="Energy-efficient custom home construction in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Energy-Efficient Custom Homes in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Cut your energy bills by 40-60% with advanced building science. High-performance insulation, smart HVAC systems, and superior construction techniques designed for Tampa's demanding climate.
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

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              In Tampa's subtropical climate, where air conditioning runs 8-10 months per year, energy efficiency isn't just an environmental choice—it's a financial necessity. Florida Construction Specialists has perfected the art of building custom homes that maintain luxury comfort while dramatically reducing energy consumption. Our energy-efficient homes throughout South Tampa, Westchase, and New Tampa consistently achieve HERS scores 40-50% better than code requirements, translating to thousands of dollars in annual savings.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              The True Cost of Energy Inefficiency in Tampa
            </h2>
            <p className="text-gray-600 mb-6">
              The average Tampa home spends $3,500-4,500 annually on electricity, with 60-70% going to cooling costs alone. Over a 30-year mortgage, that's $105,000-135,000 in utility bills—money that could stay in your pocket. Our energy-efficient custom homes reduce this burden significantly, with most homeowners reporting annual electricity costs of $1,200-2,000. When you factor in Tampa Electric's tiered pricing structure, where rates increase dramatically for high-use customers, the savings multiply even further.
            </p>
            <p className="text-gray-600 mb-6">
              Beyond monthly savings, energy-efficient homes command premium resale values in the Tampa Bay market. Studies show that homes with documented energy efficiency features sell for 8-12% more than comparable standard-built properties in neighborhoods like Avila, Tampa Palms, and Cheval. ENERGY STAR certification—standard on all our builds—provides third-party verification that buyers increasingly demand.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Energy Savings Comparison</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Standard Tampa Home</h4>
                  <ul className="space-y-1 text-blue-900">
                    <li>• Average electric bill: $290-375/month</li>
                    <li>• HERS score: 90-100</li>
                    <li>• Summer peak bills: $450-600</li>
                    <li>• 30-year utility cost: $105,000-135,000</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Our Energy-Efficient Home</h4>
                  <ul className="space-y-1 text-blue-900">
                    <li>• Average electric bill: $100-165/month</li>
                    <li>• HERS score: 45-55</li>
                    <li>• Summer peak bills: $175-250</li>
                    <li>• 30-year utility cost: $36,000-60,000</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Advanced Insulation Systems for Florida's Climate
            </h2>
            <p className="text-gray-600 mb-6">
              The building envelope is the foundation of energy efficiency, and our custom homes utilize multiple insulation strategies optimized for Tampa's heat and humidity. We start with 2x6 exterior walls (versus standard 2x4) allowing for R-21 cavity insulation plus continuous exterior foam sheathing for an effective wall R-value of R-28 or higher. This dramatically reduces thermal bridging—the energy loss through wood framing that compromises conventional walls.
            </p>
            <p className="text-gray-600 mb-6">
              Attic spaces receive particular attention in Florida construction. Hot attic air can reach 150°F during Tampa summers, radiating heat into living spaces below. Our homes feature either spray foam insulation creating conditioned attic spaces or radiant barriers combined with R-38 or higher blown insulation and thorough air sealing. This combination prevents the massive heat gain that forces AC systems in standard homes to run continuously during July and August.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              High-Performance HVAC Systems
            </h2>
            <p className="text-gray-600 mb-6">
              Your HVAC system is the largest energy consumer in any Tampa home, making equipment selection critical. We exclusively install variable-speed systems with SEER ratings of 20 or higher, compared to the code-minimum 15 SEER. These systems modulate output based on actual demand, running at lower, more efficient speeds most of the time rather than the energy-intensive on/off cycling of standard equipment.
            </p>
            <p className="text-gray-600 mb-6">
              Proper system sizing is equally important—and frequently overlooked by other builders. An oversized AC unit short-cycles, failing to properly dehumidify Tampa's moisture-laden air while wasting energy. Our Manual J load calculations ensure precise sizing, while zoned systems with multiple thermostats allow different areas of your home to maintain individual temperature settings. Master suites in our Carrollwood and Lutz builds often maintain different temperatures than living areas, optimizing comfort and efficiency simultaneously.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Window and Door Performance
            </h2>
            <p className="text-gray-600 mb-6">
              Windows and glass doors represent the weakest points in any building envelope, and Tampa's intense sunlight makes high-performance glazing essential. Our energy-efficient homes feature impact-rated Low-E windows with Solar Heat Gain Coefficients (SHGC) of 0.25 or lower—meaning they block 75% of solar heat while maintaining clear views. These windows meet hurricane code requirements while dramatically reducing cooling loads.
            </p>
            <p className="text-gray-600 mb-6">
              Strategic window placement and overhangs further reduce heat gain. South-facing windows receive roof overhangs designed to block high summer sun while admitting lower winter sun for passive heating during our brief cool season. West-facing glass—the primary source of afternoon heat gain—is minimized and shaded with architectural features or high-performance coatings. These passive design strategies reduce AC demand before the system even cycles on.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Air Sealing and Building Science
            </h2>
            <p className="text-gray-600 mb-6">
              Air leakage accounts for 25-40% of heating and cooling costs in typical Florida homes. Our construction process includes comprehensive air sealing at every penetration, joint, and intersection in the building envelope. We test every home with blower door diagnostics, achieving air changes per hour (ACH50) rates of 3.0 or lower—often reaching 1.5 to 2.0 in our tightest builds. Compare this to the 7-10 ACH50 common in standard Tampa construction.
            </p>
            <p className="text-gray-600 mb-6">
              Tight construction requires controlled ventilation to maintain indoor air quality, which we provide through energy recovery ventilators (ERVs). These systems continuously exchange stale indoor air for filtered fresh air while recovering 70-80% of the energy that would otherwise be lost. The result is a home that's both efficient and healthy—crucial in Tampa's humid environment where uncontrolled infiltration brings moisture that promotes mold growth.
            </p>

            {/* Cost Table */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Energy-Efficient Custom Home Pricing
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-brand-green-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Home Size</th>
                      <th className="px-6 py-4 text-left">ENERGY STAR</th>
                      <th className="px-6 py-4 text-left">High-Performance</th>
                      <th className="px-6 py-4 text-left">Ultra-Efficient</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">2,500 sq ft</td>
                      <td className="px-6 py-4">$400,000 - $500,000</td>
                      <td className="px-6 py-4">$525,000 - $650,000</td>
                      <td className="px-6 py-4">$675,000 - $825,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">3,500 sq ft</td>
                      <td className="px-6 py-4">$560,000 - $700,000</td>
                      <td className="px-6 py-4">$735,000 - $910,000</td>
                      <td className="px-6 py-4">$945,000 - $1.15M</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">4,500 sq ft</td>
                      <td className="px-6 py-4">$720,000 - $900,000</td>
                      <td className="px-6 py-4">$945,000 - $1.17M</td>
                      <td className="px-6 py-4">$1.2M - $1.48M</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">5,500+ sq ft</td>
                      <td className="px-6 py-4">$880,000 - $1.1M</td>
                      <td className="px-6 py-4">$1.15M - $1.43M</td>
                      <td className="px-6 py-4">$1.48M - $1.9M+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *ENERGY STAR achieves HERS 55-65. High-Performance reaches HERS 45-55 with premium HVAC and enhanced envelope. Ultra-Efficient targets HERS below 45 with maximum efficiency features. All prices reflect 2024 Tampa Bay market rates.
              </p>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Energy Efficiency Features Included
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Thermometer className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Insulation Package</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>R-28+ wall assemblies with continuous insulation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>R-38+ attic insulation with radiant barrier</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Spray foam options for conditioned attics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Comprehensive thermal bridging mitigation</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">HVAC Systems</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>20+ SEER variable-speed systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Manual J load calculations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Zoned climate control systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Sealed and insulated ductwork</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Home className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Building Envelope</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Low-E impact windows (SHGC ≤ 0.25)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Insulated entry doors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Air sealing to 3.0 ACH50 or better</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>ERV fresh air ventilation</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <DollarSign className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Additional Savings</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>LED lighting throughout</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>ENERGY STAR appliances</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Heat pump water heaters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Solar-ready electrical systems</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Popular Tampa Neighborhoods for Energy-Efficient Homes
            </h2>
            <p className="text-gray-600 mb-6">
              We've built energy-efficient custom homes throughout Tampa Bay's premier communities. In South Tampa neighborhoods like Hyde Park and Palma Ceia, where lot sizes accommodate larger homes, our efficient designs keep operating costs manageable despite increased square footage. New Tampa and Wesley Chapel families appreciate monthly utility bills that don't spike during August heat waves. Waterfront properties in Apollo Beach and Tierra Verde benefit from our coastal-optimized designs that handle salt air while maintaining peak efficiency.
            </p>

            {/* FAQ Section */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    What is a HERS score and why does it matter?
                  </h3>
                  <p className="text-gray-600">
                    HERS (Home Energy Rating System) is the industry standard for measuring residential energy efficiency. A standard code-built home scores 100; lower is better. Our energy-efficient homes achieve HERS scores of 45-65, meaning they use 35-55% less energy than code-minimum construction. Appraisers and buyers increasingly use HERS scores to evaluate homes, and lower scores correlate directly with higher resale values in the Tampa market.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How quickly will I see return on investment for energy-efficient features?
                  </h3>
                  <p className="text-gray-600">
                    Most energy efficiency upgrades pay for themselves within 4-7 years through reduced utility bills. In Tampa, where cooling costs dominate, high-efficiency HVAC and superior insulation provide the fastest payback—often under 5 years. When you factor in increased home value and reduced maintenance costs (high-efficiency equipment typically lasts longer), the total ROI is even better. Many buyers find their monthly mortgage payment plus utilities is lower in an efficient home than in a cheaper but wasteful alternative.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Will an energy-efficient home feel different from a standard home?
                  </h3>
                  <p className="text-gray-600">
                    Yes—but in positive ways. Our clients consistently report more even temperatures throughout their homes, with no hot or cold spots common in standard construction. Humidity levels stay comfortable without that clammy feeling during Tampa summers. Homes are quieter due to better insulation and sealed construction. Indoor air quality improves because controlled ventilation filters incoming air. Most homeowners say they could never go back to standard construction after experiencing the comfort of an energy-efficient home.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Can I add solar panels to maximize efficiency?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely. All our energy-efficient homes are built solar-ready with appropriately sized electrical panels, conduit runs to the roof, and structural support for panel arrays. We recommend optimizing efficiency first—every dollar spent on insulation and high-performance systems reduces the solar array size needed to achieve net-zero status. Many clients add solar at construction time to take advantage of 30% federal tax credits and Tampa Electric incentives.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Do you provide energy performance guarantees?
                  </h3>
                  <p className="text-gray-600">
                    Every energy-efficient custom home we build comes with documented HERS testing and ENERGY STAR certification. We provide estimated annual energy costs based on third-party modeling, and our track record shows actual performance consistently meeting or exceeding projections. We also offer post-construction blower door testing documentation that proves your home's actual air tightness performance.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Start Saving with Your Energy-Efficient Home
            </h2>
            <p className="text-gray-600 mb-6">
              Every month you wait to build an energy-efficient home is another month of unnecessarily high utility bills. Florida Construction Specialists brings building science expertise to every custom home, ensuring your investment delivers lasting comfort and significant savings. From selecting the optimal HVAC system for your floor plan to achieving the tightest possible building envelope, our team handles every detail.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us today to discuss your energy-efficient custom home project. We'll analyze your needs, explain your options, and provide detailed estimates showing both construction costs and projected energy savings. Build smarter in Tampa Bay with Florida Construction Specialists.
            </p>

          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Related Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Cut Your Energy Bills in Half?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a free consultation on energy-efficient custom home construction in Tampa Bay.
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
