import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Sun, Droplets, Flame, Trees, UtensilsCrossed } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa Custom Outdoor Living Spaces | Patios, Pools & Kitchens - Florida Construction Specialists",
  description: "Create stunning outdoor living spaces in Tampa. Custom pools, outdoor kitchens, covered patios, fire features, and resort-style amenities. Year-round Florida living from $50K-$500K+.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa Custom Outdoor Living Spaces", href: "/tampa-custom-outdoor-living-spaces/" },
];

const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/services/residential/waterfront-homes/", label: "Waterfront Home Construction" },
  { href: "/customized-outdoor-sports-facilities-in-tampa-homes/", label: "Outdoor Sports Facilities" },
  { href: "/tampas-custom-family-home-builders/", label: "Custom Family Homes" },
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
            alt="Custom outdoor living space in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa Custom Outdoor Living Spaces
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Transform your backyard into a year-round paradise. Custom pools, outdoor kitchens, covered lanais, fire features, and resort-style amenities designed for Tampa Bay's exceptional climate.
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
              Tampa Bay's subtropical climate offers something rare in America: genuine year-round outdoor living. With average temperatures between 60-90°F and 246 sunny days annually, your outdoor spaces can function as true extensions of your home rather than seasonal additions. Florida Construction Specialists designs and builds comprehensive outdoor living environments that maximize this climate advantage—from intimate courtyard retreats to resort-scale entertainment complexes that rival the finest hotels.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Designing for Tampa's Climate
            </h2>
            <p className="text-gray-600 mb-6">
              Successful outdoor living in Tampa requires understanding our unique conditions. Summer heat and afternoon thunderstorms demand covered structures that provide shade and shelter. Hurricane season requires durable construction that can withstand extreme weather. Humidity affects material selection and ventilation design. Mosquito season extends for months, making screened enclosures valuable for comfortable evening use. Our designs address all these factors while maximizing enjoyment throughout the year.
            </p>
            <p className="text-gray-600 mb-6">
              The key is creating layered outdoor spaces: fully exposed areas for morning coffee and winter sun, covered zones for midday shade and rain protection, and screened or enclosed spaces for bug-free evening relaxation. This approach lets you choose the right environment for any time and condition rather than limiting outdoor use to perfect weather days.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
              <h3 className="text-xl font-bold text-orange-800 mb-3 flex items-center gap-2">
                <Sun className="w-6 h-6" />
                Year-Round Outdoor Living in Tampa
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-orange-900 mb-2">Summer Essentials</h4>
                  <ul className="space-y-1 text-orange-900">
                    <li>• Deep covered structures for shade</li>
                    <li>• Pool and water features for cooling</li>
                    <li>• Ceiling fans and misting systems</li>
                    <li>• Screened areas for evening use</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-orange-900 mb-2">Winter Comforts</h4>
                  <ul className="space-y-1 text-orange-900">
                    <li>• Fire pits and outdoor fireplaces</li>
                    <li>• Pool and spa heaters</li>
                    <li>• Windscreens and enclosures</li>
                    <li>• Outdoor heaters for cool evenings</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Custom Pool Design
            </h2>
            <p className="text-gray-600 mb-6">
              Pools anchor most Tampa outdoor living spaces, and custom design transforms pools from simple swim lanes into spectacular resort experiences. Infinity edges create dramatic visual effects, especially on waterfront or elevated properties. Beach entries provide gradual wading depths perfect for families with young children. Spa features integrated into pool design offer hydrotherapy and visual interest. Swim-up bars, grottos, and water features turn pools into entertainment destinations.
            </p>
            <p className="text-gray-600 mb-6">
              Pool construction in Tampa requires specific expertise. Our soils vary significantly across the region—limestone in some areas, sandy conditions in others—requiring appropriate engineering. High water tables in many neighborhoods affect construction methods. Hurricane-resistant design prevents damage from wind-blown debris. We work with experienced pool contractors to ensure beautiful pools that perform reliably in Tampa Bay conditions.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Outdoor Kitchens and Dining
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's climate makes outdoor cooking practical almost every day. Our outdoor kitchens range from simple grilling stations to fully equipped culinary spaces rivaling indoor kitchens. Professional-grade grills, smokers, pizza ovens, and even outdoor ranges support serious cooking. Refrigerators, ice makers, and kegerators keep ingredients and beverages cold. Sinks with hot and cold water provide convenience. Ample counter space and storage keep everything organized and accessible.
            </p>
            <p className="text-gray-600 mb-6">
              Material selection is critical for outdoor durability. Stainless steel cabinets withstand humidity without rusting. Granite, quartzite, and concrete countertops handle heat and weather. Covered structures protect appliances and finishes from rain and sun damage. Proper electrical service supports high-demand equipment. These details ensure outdoor kitchens remain functional and attractive for years despite constant exposure to elements.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Covered Structures and Lanais
            </h2>
            <p className="text-gray-600 mb-6">
              Covered outdoor living is essential in Tampa—shade during summer, shelter during storms, and protection for furniture and finishes year-round. Traditional Florida lanais with screened enclosures provide bug-free living spaces that blur indoor-outdoor boundaries. Modern pavilions with ceiling fans, lighting, and audio systems create comfortable outdoor rooms. Pergolas with retractable canopies offer flexible sun control.
            </p>
            <p className="text-gray-600 mb-6">
              Structure design must accommodate Florida's wind loads and hurricane requirements. Engineered connections, appropriate member sizing, and impact-resistant materials ensure covered structures survive severe weather. We build to current Florida Building Code requirements, which are among the nation's strictest for wind resistance. These standards add cost but provide peace of mind and insurance compliance.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Fire Features and Lighting
            </h2>
            <p className="text-gray-600 mb-6">
              Fire features extend outdoor enjoyment into cooler evenings while creating compelling focal points. Fire pits surrounded by seating encourage conversation and gathering. Outdoor fireplaces anchor seating areas with architectural presence. Linear fire features integrated into walls or water features add contemporary drama. Gas-fired options provide instant-on convenience without wood smoke concerns in close-neighbor situations.
            </p>
            <p className="text-gray-600 mb-6">
              Landscape and architectural lighting transforms outdoor spaces after dark. Path lighting guides movement safely. Uplighting showcases trees and architectural features. Underwater pool lighting creates evening swimming ambiance. Task lighting illuminates cooking and dining areas. Dimmable controls and smart home integration let you set the mood for any occasion. Professional lighting design makes the difference between merely functional illumination and magical evening environments.
            </p>

            {/* Cost Table */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Outdoor Living Investment Guide
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-brand-green-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Outdoor Living Level</th>
                      <th className="px-6 py-4 text-left">Features Included</th>
                      <th className="px-6 py-4 text-left">Investment Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Essential Outdoor Living</td>
                      <td className="px-6 py-4">Covered patio, grill station, basic landscaping</td>
                      <td className="px-6 py-4">$50,000 - $100,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Enhanced Outdoor Living</td>
                      <td className="px-6 py-4">Pool, covered lanai, outdoor kitchen, fire pit</td>
                      <td className="px-6 py-4">$100,000 - $200,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Premium Outdoor Living</td>
                      <td className="px-6 py-4">Custom pool/spa, full kitchen, pavilion, premium landscaping</td>
                      <td className="px-6 py-4">$200,000 - $350,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Resort-Style Estate</td>
                      <td className="px-6 py-4">Infinity pool, outdoor rooms, summer kitchen, sports courts, water features</td>
                      <td className="px-6 py-4">$350,000 - $500,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Costs vary significantly based on site conditions, materials, and specific features. Pool costs range from $60K-$200K+ depending on size and features. Outdoor kitchens range from $15K-$100K+. Custom structures add $30K-$150K+. All prices reflect 2024 Tampa Bay market rates.
              </p>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Outdoor Living Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Droplets className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Pool & Water Features</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Custom pool shapes and sizes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Infinity and vanishing edges</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Integrated spas and hot tubs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Waterfalls and fountains</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <UtensilsCrossed className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Outdoor Kitchens</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Built-in grills and smokers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Pizza ovens and cooktops</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Refrigeration and ice makers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Bar seating and dining areas</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Flame className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Fire & Comfort</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Fire pits and tables</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Outdoor fireplaces</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Ceiling fans and misting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Outdoor heaters</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Trees className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Landscaping</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Tropical plantings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Privacy screening</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Landscape lighting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Irrigation systems</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Tampa Bay's Best Outdoor Living Neighborhoods
            </h2>
            <p className="text-gray-600 mb-6">
              Some Tampa neighborhoods are particularly suited for extensive outdoor living. Waterfront properties in Davis Islands, Harbor Island, and Bayshore offer views that outdoor spaces should embrace. South Tampa's larger lots accommodate pools, outdoor kitchens, and expansive landscaping. New developments in Wesley Chapel and Fish Hawk include outdoor living as standard in community planning. Golf course communities provide borrowed views that enhance outdoor entertaining.
            </p>
            <p className="text-gray-600 mb-6">
              HOA restrictions affect outdoor living design in many communities. Pool placement, structure heights, and even plant selections may be regulated. We research requirements early in design to ensure your vision complies with community standards while maximizing what's possible within the rules.
            </p>

            {/* FAQ Section */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How do you protect outdoor spaces during hurricanes?
                  </h3>
                  <p className="text-gray-600">
                    Hurricane preparation is built into our designs. Outdoor kitchens use marine-grade materials and stainless steel that survive storms. Pool equipment is positioned for protection. Outdoor furniture can be stored or secured. Structures are engineered for wind loads. Some features—pergolas with removable shade sails, for example—include components designed for quick pre-storm removal. We also design with recovery in mind: damage that occurs should be repairable rather than requiring complete replacement.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    What maintenance do outdoor living spaces require?
                  </h3>
                  <p className="text-gray-600">
                    Pools require regular chemical maintenance, cleaning, and equipment servicing—typically $100-300/month for professional service. Outdoor kitchens need appliance maintenance similar to indoor equivalents plus periodic cleaning of exterior surfaces. Landscapes require regular maintenance; tropical plantings need more attention than native xeriscaping. Covered structures need occasional cleaning and resealing. We design for realistic maintenance requirements and can recommend service providers.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Should we build everything at once or in phases?
                  </h3>
                  <p className="text-gray-600">
                    There are advantages to comprehensive construction: better design integration, single permit process, one construction disruption, and often better pricing. However, phased construction allows budget spreading and learning what you actually use. If phasing, prioritize items with construction dependencies—pools should typically come early since adding them later damages existing landscaping. We can design a master plan with logical phasing regardless of which approach you choose.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How do you handle drainage with outdoor construction?
                  </h3>
                  <p className="text-gray-600">
                    Tampa's flat terrain and high water table make drainage critical. We engineer proper slopes, install French drains and catch basins, and ensure additions don't redirect water onto neighboring properties or toward the house. Pool decks slope away from pools and structures. Permeable pavers reduce runoff. Some projects require stormwater retention features. Proper drainage planning prevents flooding, erosion, and standing water mosquito breeding.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Can outdoor living spaces increase home value?
                  </h3>
                  <p className="text-gray-600">
                    Well-designed outdoor living typically returns 50-70% of investment at resale in Tampa Bay, where outdoor lifestyle is highly valued. Pools can be neutral to negative in some markets but are generally positive here. Outdoor kitchens appeal to the entertaining-focused buyer. The key is quality design and construction—cheap additions can hurt value while premium work enhances it. Location matters too; waterfront properties benefit more from outdoor investment than inland lots.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Create Your Outdoor Paradise
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay's climate is a gift—one of the few places in America where outdoor living is practical nearly every day of the year. Don't let that opportunity go to waste with a basic patio and portable grill. Florida Construction Specialists creates comprehensive outdoor environments that become the heart of home life: where you start mornings with coffee, gather family for dinner, entertain friends, and relax under the stars.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us to discuss your outdoor living vision. We'll help you imagine what's possible and create a plan to make it reality.
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
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a consultation on custom outdoor living design in Tampa Bay.
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
