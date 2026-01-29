import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Shield, CloudRain, Wind, Zap } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Climate-Resilient Custom Homes in Tampa | Hurricane-Ready Luxury - Florida Construction Specialists",
  description: "Build a climate-resilient custom home in Tampa engineered for hurricanes, flooding, and extreme heat. Fortified construction, backup power, and smart systems from $425K-$2M+.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Climate Resilient Custom Homes in Tampa", href: "/climate-resilient-custom-homes-in-tampa/" },
];

const internalLinks = [
  { href: "/services/residential/hurricane-resistant-construction/", label: "Hurricane-Resistant Construction" },
  { href: "/waterfront-custom-homes-in-tampa/", label: "Waterfront Custom Homes" },
  { href: "/energy-efficient-custom-homes-in-tampa/", label: "Energy-Efficient Homes" },
  { href: "/smart-home-integration-in-tampa-custom-homes-2/", label: "Smart Home Integration" },
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
            src="/images/custom-home-1/custom-home-1-large.webp"
            alt="Climate-resilient custom home construction in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Climate-Resilient Custom Homes in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Engineer your home to withstand Tampa Bay's climate challenges. Hurricane-rated construction, flood mitigation, extreme heat management, and whole-home backup power for complete peace of mind.
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
              Tampa Bay sits in one of America's most hurricane-vulnerable regions, yet decades can pass between major storms, creating a false sense of security that often proves costly. Florida Construction Specialists builds climate-resilient custom homes designed for the full spectrum of Tampa's weather challenges—from Category 5 hurricanes to summer heat waves to flash flooding events. Our fortified construction methods protect your investment and your family while maintaining the luxury and comfort you expect in a custom home.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Understanding Tampa Bay's Climate Risks
            </h2>
            <p className="text-gray-600 mb-6">
              The Tampa Bay area faces a unique combination of climate challenges that standard construction inadequately addresses. Hurricane risk is paramount—while the region hasn't taken a direct major hurricane hit since 1921, climate scientists and insurance actuaries agree that a significant strike is statistically overdue. Storm surge modeling for a Category 4 hurricane shows potential flooding of 15-20 feet along exposed coastlines and 8-12 feet in lower-lying areas throughout Hillsborough and Pinellas counties.
            </p>
            <p className="text-gray-600 mb-6">
              Beyond hurricanes, Tampa experiences increasingly intense summer heat, with heat index values regularly exceeding 110°F during July and August. Power grid stress during these periods makes outages more likely at precisely the time when air conditioning is most critical. Flash flooding from summer thunderstorms—which can drop 2-4 inches of rain in under an hour—challenges drainage systems throughout the region, particularly in areas like Town 'n' Country, Carrollwood, and portions of South Tampa.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
              <h3 className="text-xl font-bold text-amber-800 mb-3">Tampa Bay Climate Risk Profile</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">Hurricane Exposure</h4>
                  <ul className="space-y-1 text-amber-900">
                    <li>• Peak season: August - October</li>
                    <li>• Historical average: 1 named storm/year within 100 miles</li>
                    <li>• Cat 4-5 surge potential: 15-20 feet</li>
                    <li>• Wind design requirement: 150-180 mph</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">Other Climate Factors</h4>
                  <ul className="space-y-1 text-amber-900">
                    <li>• Summer heat index: 105-115°F typical</li>
                    <li>• Annual rainfall: 50-55 inches</li>
                    <li>• Flash flood events: 15-20/year</li>
                    <li>• Lightning strikes: Highest in U.S.</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              FORTIFIED Home™ Construction Standards
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists builds to FORTIFIED Home™ standards developed by the Insurance Institute for Business & Home Safety (IBHS). This designation—available at Bronze, Silver, and Gold levels—provides third-party verified resilience that exceeds minimum code requirements. Our Gold-level construction includes continuous load path connections from roof to foundation, sealed roof deck systems, and enhanced window and door protection that significantly reduces damage during major storms.
            </p>
            <p className="text-gray-600 mb-6">
              FORTIFIED certification delivers tangible benefits beyond storm protection. Many insurance carriers offer premium discounts of 15-45% for FORTIFIED-designated homes—savings that can total tens of thousands of dollars over your mortgage term. Properties with FORTIFIED certification also demonstrate superior resale performance, particularly following active hurricane seasons when buyers become acutely aware of construction quality differences.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Hurricane-Resistant Structural Systems
            </h2>
            <p className="text-gray-600 mb-6">
              Our climate-resilient homes utilize concrete block construction with fully grouted cells and continuous steel reinforcement—far exceeding the strength of standard construction. We install hurricane straps at every truss-to-wall connection and continuous anchor bolts embedded in concrete bond beams. This "continuous load path" system transfers wind forces from roof to foundation without the weak links that cause structural failures in conventional construction.
            </p>
            <p className="text-gray-600 mb-6">
              Roof systems receive particular attention as the primary point of hurricane vulnerability. We install self-adhering modified bitumen underlayment over the entire roof deck—creating a secondary water barrier even if shingles or tiles are lost during a storm. Hip roof designs with slopes of 4:12 to 6:12 perform best aerodynamically, and we avoid architectural features that create uplift vulnerabilities. Standing seam metal roofing, while more expensive initially, provides superior wind resistance and typically survives storms that destroy conventional roofing.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Impact-Resistant Openings
            </h2>
            <p className="text-gray-600 mb-6">
              Windows and doors represent critical weak points during hurricanes—once the building envelope is breached, internal pressurization can cause catastrophic structural failure. All our climate-resilient homes include impact-rated windows and doors tested to withstand large and small missile impacts per Miami-Dade protocols, the nation's most stringent standards. These products also provide excellent noise reduction, UV protection, and security benefits during non-storm periods.
            </p>
            <p className="text-gray-600 mb-6">
              For clients who prefer the aesthetics of non-impact windows in certain areas, we engineer accordion shutters, roll-down shutters, or removable panel systems that achieve equivalent protection. Garage doors—often the largest unprotected opening in a home—receive heavy-duty wind-rated replacements or reinforcement systems. Our specifications ensure every opening in your home meets or exceeds the stringent wind zone requirements for Hillsborough, Pinellas, and surrounding counties.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Flood Mitigation and Water Management
            </h2>
            <p className="text-gray-600 mb-6">
              While elevation is the most effective flood mitigation strategy, many Tampa Bay sites don't require—or allow—significantly elevated construction. For these properties, we implement comprehensive water management including French drain systems, strategically graded landscaping, and permeable paving that manages stormwater on-site. Foundation waterproofing with dimple board drainage systems prevents groundwater infiltration that damages conventional slabs.
            </p>
            <p className="text-gray-600 mb-6">
              Inside the home, we locate mechanical systems above the first-floor level whenever possible—positioning HVAC equipment in attics or on elevated platforms, and installing electrical panels at heights that survive typical flooding events. Plumbing incorporates backflow preventers to prevent sewage backup during storm drainage system overloads. These strategies won't prevent damage in major flooding events, but they significantly reduce impact from the more common minor flooding that Tampa experiences annually.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Whole-Home Backup Power Systems
            </h2>
            <p className="text-gray-600 mb-6">
              Extended power outages following hurricanes create their own crisis—particularly in Florida's heat where homes become uninhabitable within hours without air conditioning. Our climate-resilient homes include whole-home standby generators that automatically engage during outages, providing power to all essential systems including full HVAC capacity. Natural gas-powered units (where available) eliminate the fuel storage concerns of propane or gasoline alternatives.
            </p>
            <p className="text-gray-600 mb-6">
              For maximum resilience, we also install battery backup systems like Tesla Powerwall that provide instantaneous switchover—protecting sensitive electronics from the brief interruption that occurs even with automatic generators. Solar panel integration allows battery systems to recharge indefinitely during extended grid outages, providing true energy independence. Our Carrollwood and New Tampa clients have remained comfortable through multi-day outages while neighbors without backup power evacuated to hotels or shelters.
            </p>

            {/* Cost Table */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Climate-Resilient Home Investment Guide
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-brand-green-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Home Size</th>
                      <th className="px-6 py-4 text-left">Enhanced Code</th>
                      <th className="px-6 py-4 text-left">FORTIFIED Silver</th>
                      <th className="px-6 py-4 text-left">FORTIFIED Gold</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">2,500 sq ft</td>
                      <td className="px-6 py-4">$425,000 - $525,000</td>
                      <td className="px-6 py-4">$500,000 - $625,000</td>
                      <td className="px-6 py-4">$575,000 - $725,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">3,500 sq ft</td>
                      <td className="px-6 py-4">$595,000 - $735,000</td>
                      <td className="px-6 py-4">$700,000 - $875,000</td>
                      <td className="px-6 py-4">$805,000 - $1.01M</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">4,500 sq ft</td>
                      <td className="px-6 py-4">$765,000 - $945,000</td>
                      <td className="px-6 py-4">$900,000 - $1.12M</td>
                      <td className="px-6 py-4">$1.03M - $1.3M</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">5,500+ sq ft</td>
                      <td className="px-6 py-4">$935,000 - $1.15M</td>
                      <td className="px-6 py-4">$1.1M - $1.38M</td>
                      <td className="px-6 py-4">$1.26M - $1.6M+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Enhanced Code includes impact windows and reinforced construction. FORTIFIED Silver adds sealed roof deck and enhanced connections. FORTIFIED Gold includes whole-home generator and maximum resilience features. All prices reflect 2024 Tampa Bay market rates.
              </p>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Climate Resilience Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Wind className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Hurricane Protection</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Continuous load path construction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Impact-rated windows and doors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Sealed roof deck system</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Reinforced garage doors</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <CloudRain className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Flood Mitigation</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Elevated mechanical systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>French drain and swale systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Backflow prevention plumbing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Foundation waterproofing</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Power Independence</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Whole-home standby generator</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Battery backup systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Solar panel integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Smart energy management</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Heat Management</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>High-efficiency HVAC with backup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Radiant barrier roof systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Low-E solar control windows</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Cool roof materials</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How much can I save on insurance with climate-resilient construction?
                  </h3>
                  <p className="text-gray-600">
                    FORTIFIED Gold certification typically qualifies for insurance discounts of 25-45% depending on your carrier and specific location. For a home with a base premium of $8,000-12,000 annually (common in coastal Hillsborough County), that translates to $2,000-5,400 in annual savings. Over a 30-year mortgage, total insurance savings can exceed $60,000-150,000—often more than the incremental cost of enhanced construction.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    What size generator do I need for whole-home backup?
                  </h3>
                  <p className="text-gray-600">
                    Generator sizing depends on your home's total load, particularly HVAC requirements. A 3,500 sq ft Tampa home typically needs a 22-26kW generator for full-house coverage including air conditioning. Larger homes or those with pools, elevators, or multiple HVAC zones may require 30-48kW units. We perform load calculations during design and coordinate generator installation with your electrical and HVAC systems for optimal performance.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Can existing homes achieve FORTIFIED certification?
                  </h3>
                  <p className="text-gray-600">
                    Yes, though retrofitting an existing home is often more expensive than building to FORTIFIED standards from the start. Common upgrades include adding hurricane straps (often requiring interior drywall removal), installing sealed roof deck underlayment during re-roofing, and replacing windows and doors with impact-rated products. We offer retrofit evaluations to determine the most cost-effective path to certification for existing Tampa Bay homes.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How do climate-resilient homes perform during non-storm conditions?
                  </h3>
                  <p className="text-gray-600">
                    The same features that protect during hurricanes provide year-round benefits. Impact windows reduce noise from traffic and storms by 50% or more. Superior insulation and air sealing reduce energy costs by 30-40%. Whole-home generators provide peace of mind during Tampa's frequent summer afternoon power outages. Many clients report that daily comfort and energy savings were unexpected benefits of their resilience investment.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    What happens to my FORTIFIED designation if I re-roof or renovate?
                  </h3>
                  <p className="text-gray-600">
                    FORTIFIED certification must be maintained through documented compliant repairs and renovations. Re-roofing must use approved methods and materials to maintain designation. We provide clients with detailed specifications for future maintenance and are available to consult on renovation projects to ensure continued certification. Many insurance carriers require periodic re-inspection to maintain premium discounts.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Protect Your Family and Investment
            </h2>
            <p className="text-gray-600 mb-6">
              Building a climate-resilient custom home in Tampa isn't about fear—it's about prudent planning for the realities of Florida living. Florida Construction Specialists has the engineering expertise and construction experience to create homes that stand strong against whatever nature delivers while providing the luxury and comfort you deserve. From FORTIFIED certification to whole-home backup power, we integrate resilience into beautiful designs that enhance your daily life.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us today to discuss how climate-resilient construction can protect your family and provide peace of mind for decades to come. Our design team will evaluate your site, explain your options, and create a custom home that's as strong as it is beautiful.
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
            Ready to Build a Climate-Resilient Home?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a free consultation on FORTIFIED custom home construction in Tampa Bay.
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
