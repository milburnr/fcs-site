import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Wine, Thermometer, Lock, Sparkles } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Custom Home Wine Cellars in Tampa | Climate-Controlled Design",
  description: "Build a custom wine cellar in your Tampa home. Climate control, proper storage, tasting rooms, and stunning design. Wine cellars from $25K-$200K+ for 500-5,000+ bottles.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Custom Home Wine Cellars in Tampa", href: "/custom-home-wine-cellars-in-tampa/" },
];

const internalLinks = [
  { href: "/tampa-luxury-custom-home-building-services/", label: "Luxury Custom Homes" },
  { href: "/custom-home-theaters-and-entertainment-spaces-in-tampa/", label: "Entertainment Spaces" },
  { href: "/crafting-custom-home-libraries-in-tampa/", label: "Custom Libraries" },
  { href: "/services/residential/", label: "Residential Construction" },
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
            src="/images/custom-home-1/custom-home-1-display.webp"
            alt="Custom wine cellar construction in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Custom Home Wine Cellars in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Protect your wine investment and create stunning entertaining spaces with custom climate-controlled wine cellars. From intimate collections to estate wine rooms, we build cellars that preserve and showcase your wines beautifully.
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
              Tampa's climate is wine's enemy—heat and humidity that would quickly destroy any collection stored without protection. Florida Construction Specialists creates custom wine cellars that provide the precisely controlled environment your wines require while becoming stunning architectural features in their own right. From walk-in closet conversions storing a few hundred bottles to estate cellars with tasting rooms accommodating thousands, we design and build wine storage that protects your investment and enhances your entertaining lifestyle.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Climate Control for Florida Conditions
            </h2>
            <p className="text-gray-600 mb-6">
              Proper wine storage demands temperatures of 55-58°F and humidity of 50-70%—conditions dramatically different from Tampa's ambient environment. Our wine cellar construction begins with proper thermal separation: vapor barriers that prevent humidity infiltration, insulation with R-19 or higher values, and sealed construction that maintains the conditioned environment. Without proper envelope construction, even the best cooling equipment will struggle and fail.
            </p>
            <p className="text-gray-600 mb-6">
              Cooling system selection depends on cellar size, location, and aesthetic preferences. Through-wall units work well for smaller cellars with accessible wall space. Split systems position condensing units remotely for quieter operation and flexible placement. Ducted systems integrate invisibly for the cleanest appearance. We specify commercial-grade equipment designed for the demanding conditions of wine storage—not repurposed residential AC units that lack proper humidity control.
            </p>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-8">
              <h3 className="text-xl font-bold text-purple-800 mb-3 flex items-center gap-2">
                <Wine className="w-6 h-6" />
                Wine Storage Requirements
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-purple-900 mb-2">Environmental Conditions</h4>
                  <ul className="space-y-1 text-purple-900">
                    <li>• Temperature: 55-58°F (ideal 55°F)</li>
                    <li>• Humidity: 50-70% relative</li>
                    <li>• Minimal vibration</li>
                    <li>• Dark or UV-filtered light only</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-purple-900 mb-2">Capacity Planning</h4>
                  <ul className="space-y-1 text-purple-900">
                    <li>• 200-500 bottles: 40-80 sq ft</li>
                    <li>• 500-1,000 bottles: 80-150 sq ft</li>
                    <li>• 1,000-2,500 bottles: 150-300 sq ft</li>
                    <li>• 2,500+ bottles: 300+ sq ft</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Racking Systems and Design
            </h2>
            <p className="text-gray-600 mb-6">
              Wine racking transforms storage from purely functional to architecturally stunning. Custom millwork racking in mahogany, redwood, or all-heart redwood creates warm, traditional aesthetics with precisely sized compartments for standard Bordeaux bottles. Display rows angle bottles to showcase labels. Diamond bins provide bulk storage for case purchases. Individual bottle slots protect your most prized bottles while making inventory management simple.
            </p>
            <p className="text-gray-600 mb-6">
              Contemporary cellars might feature metal racking systems that create floating appearances—steel, aluminum, or even glass elements that highlight bottles rather than surrounding them. Combination approaches layer wood and metal for visual interest. LED lighting integrated into racking dramatically showcases collections while generating minimal heat. Cable-suspended displays create sculptural wine installations visible from entertaining spaces above.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Tasting Room Integration
            </h2>
            <p className="text-gray-600 mb-6">
              The finest wine cellars include tasting areas where you can enjoy wines with guests without disrupting the cellar's climate. Separate zones with different temperature settings allow comfortable seating areas while adjacent storage remains properly chilled. Tasting tables, wine bars with sinks and glassware storage, and comfortable seating create destinations for entertaining that showcase your collection while providing intimate gathering spaces.
            </p>
            <p className="text-gray-600 mb-6">
              Design elements in tasting areas often reference classic wine country—stone walls, barrel vault ceilings, wrought iron accents, and warm wood finishes. Contemporary approaches might incorporate glass walls, minimalist design, and dramatic lighting. Some clients integrate cheese and charcuterie refrigeration, small kitchenettes, or even cigar humidors. These spaces become private retreats for quiet evenings and memorable entertaining.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Location Options
            </h2>
            <p className="text-gray-600 mb-6">
              Traditional below-grade cellars benefit from natural thermal mass and cooler earth temperatures, reducing cooling loads. However, Tampa's water table often makes true basement construction impractical or expensive. We create conditioned spaces at any level—converting interior rooms, building into garage spaces, or constructing purpose-built additions that achieve proper conditions through mechanical means rather than relying on ground temperature.
            </p>
            <p className="text-gray-600 mb-6">
              Glass-enclosed wine displays visible from dining rooms or living areas have become increasingly popular, creating dramatic focal points while keeping wines at proper temperature. These require careful thermal engineering—typically double or triple insulated glass, generous cooling capacity, and attention to heat gain from adjacent lighting. The visual impact justifies the additional complexity for clients who want their collections displayed prominently.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Monitoring and Security
            </h2>
            <p className="text-gray-600 mb-6">
              Valuable wine collections deserve protection through monitoring and security systems. Temperature and humidity sensors with remote notification alert you to equipment failures before damage occurs. Backup cooling systems or power supplies provide redundancy for serious collections. Access control and security cameras protect against theft while providing accountability for who accesses the cellar and when.
            </p>
            <p className="text-gray-600 mb-6">
              Inventory management systems help track your collection—barcode or RFID scanning, cellar management software integration, and organized storage schemes make it easy to find specific bottles and track consumption and aging. Some clients integrate wine cellar management with their home automation systems for unified control and monitoring through familiar interfaces.
            </p>

            {/* Cost Table */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Wine Cellar Investment Guide
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-brand-green-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Cellar Type</th>
                      <th className="px-6 py-4 text-left">Capacity</th>
                      <th className="px-6 py-4 text-left">Investment Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Wine Closet</td>
                      <td className="px-6 py-4">200-500 bottles</td>
                      <td className="px-6 py-4">$25,000 - $50,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Walk-In Cellar</td>
                      <td className="px-6 py-4">500-1,500 bottles</td>
                      <td className="px-6 py-4">$50,000 - $100,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Cellar with Tasting Area</td>
                      <td className="px-6 py-4">1,000-3,000 bottles</td>
                      <td className="px-6 py-4">$100,000 - $175,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Estate Wine Room</td>
                      <td className="px-6 py-4">3,000+ bottles</td>
                      <td className="px-6 py-4">$175,000 - $300,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Wine Closet includes basic climate control and metal racking. Walk-In adds custom wood racking and enhanced finishes. Tasting Area includes seating zone and entertaining amenities. Estate includes premium finishes, backup systems, and comprehensive features. Glass-enclosed display cellars add 20-40% premium. All prices reflect 2024 Tampa Bay market rates.
              </p>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Wine Cellar Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Thermometer className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Climate Control</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Precision 55°F temperature</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Humidity control (50-70%)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Vapor barrier construction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Backup cooling options</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Wine className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Racking Systems</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Custom wood millwork</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Metal display systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Individual bottle slots</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Bulk/case storage</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Design Elements</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>LED accent lighting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Stone accent walls</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Barrel vault ceilings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Glass enclosure options</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Monitoring/Security</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Remote temp monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Access control systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Inventory management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Alarm integration</span>
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
                    Can I add a wine cellar to my existing Tampa home?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely. We regularly convert closets, portions of garages, or underutilized rooms into properly conditioned wine cellars. The key requirements are adequate space, access for cooling equipment installation, and structural capacity for loaded wine racks (which can weigh thousands of pounds). During consultation, we'll evaluate your space and recommend the best approach for your collection size and budget.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    What happens if the cooling system fails?
                  </h3>
                  <p className="text-gray-600">
                    A properly insulated cellar maintains temperature for 24-48 hours during equipment failure, providing time for repairs. We recommend remote monitoring systems that alert you immediately to temperature changes. For valuable collections, dual cooling units provide full redundancy—if one fails, the other maintains conditions. Battery backup for monitoring ensures alerts even during power outages.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How much does it cost to operate a wine cellar in Tampa?
                  </h3>
                  <p className="text-gray-600">
                    Operating costs depend on cellar size, insulation quality, and equipment efficiency. A well-built 500-bottle cellar typically costs $30-60 monthly in electricity. Larger cellars with proper construction remain proportionally efficient. Poor construction—inadequate insulation or vapor barrier failures—can dramatically increase costs as equipment struggles against Tampa's heat and humidity.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    What wood species work best for wine racking?
                  </h3>
                  <p className="text-gray-600">
                    All-heart redwood is the traditional choice—naturally resistant to humidity-related expansion and contraction, with warm color that complements wine. Mahogany offers similar performance with richer coloring. Premium pine provides economical options for staining. Metal and acrylic systems avoid wood entirely for contemporary aesthetics. Avoid oak in conditioned cellars—it can impart aromas that affect wine.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Can I display wines visible from other rooms?
                  </h3>
                  <p className="text-gray-600">
                    Yes—glass-enclosed wine displays have become popular features in Tampa luxury homes. Proper insulated glass, adequate cooling capacity, and careful thermal engineering make these installations successful. Glass cellars require approximately 20-40% more cooling capacity than solid-wall construction. We design these showcase cellars to maintain proper conditions while creating stunning visual statements visible from dining or living areas.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Protect and Showcase Your Collection
            </h2>
            <p className="text-gray-600 mb-6">
              A proper wine cellar is both investment protection and lifestyle enhancement. Florida Construction Specialists creates custom wine storage solutions that maintain ideal conditions in Tampa's challenging climate while becoming beautiful architectural features. Whether you're housing a modest collection or a significant wine library, we design and build cellars worthy of your wines and your home.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us to discuss wine cellar possibilities for your Tampa Bay home. We'll help you plan storage that protects your investment and creates memorable entertaining spaces.
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
            Ready to Build Your Custom Wine Cellar?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a consultation on custom wine cellar design in Tampa Bay.
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
