import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Bath, Droplets, Sparkles, Thermometer } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa Custom Homes with Luxury Bathrooms | Spa-Inspired Design - Florida Construction Specialists",
  description: "Create spa-inspired luxury bathrooms in your Tampa custom home. Soaking tubs, rain showers, heated floors, and premium fixtures. Master bath renovations from $75K-$200K+.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa Custom Homes with Luxury Bathrooms", href: "/tampa-custom-homes-with-luxury-bathrooms/" },
];

const internalLinks = [
  { href: "/creating-unique-bedrooms-in-tampa-custom-homes/", label: "Luxury Master Suites" },
  { href: "/tampa-luxury-custom-home-building-services/", label: "Luxury Custom Homes" },
  { href: "/custom-home-interior-design-services-in-tampa/", label: "Interior Design Services" },
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
            src="/wp-content/uploads/2023/12/custom-home-1.png"
            alt="Luxury bathroom in Tampa custom home"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa Custom Homes with Luxury Bathrooms
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Transform your daily routine into a spa experience. Freestanding soaking tubs, multi-jet rain showers, heated stone floors, and designer fixtures that bring five-star luxury to your Tampa Bay custom home.
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
              The master bathroom has evolved from purely functional space to personal sanctuary—a private retreat where you begin and end each day. Florida Construction Specialists creates luxury bathrooms throughout Tampa Bay that rival the world's finest spas, incorporating premium fixtures, natural stone, radiant heat, and thoughtful design that transforms routine into ritual. From dramatic freestanding tubs to walk-through showers with multiple shower heads, we craft bathrooms as individual as the homeowners who enjoy them.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Designing the Ultimate Master Bath
            </h2>
            <p className="text-gray-600 mb-6">
              Exceptional bathroom design begins with understanding how you actually use the space. Do you prefer quick, efficient showers or long soaking baths? Do you and your partner need simultaneous access to vanities, or do you prefer completely separate preparation areas? Is makeup application best served by natural light or controlled artificial illumination? These lifestyle questions shape spatial planning before the first fixture is selected.
            </p>
            <p className="text-gray-600 mb-6">
              Our luxury master baths typically range from 150 to 350 square feet, with estate-level installations exceeding 400 square feet when incorporating separate toilet rooms, dedicated makeup vanities, and integrated closet access. We position key elements to maximize natural light for grooming while maintaining privacy, often incorporating clerestory windows or skylights that illuminate without compromising seclusion.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
                <Bath className="w-6 h-6" />
                Luxury Bathroom Size Standards
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Space Allocation</h4>
                  <ul className="space-y-1 text-blue-900">
                    <li>• Premium bath: 150-200 sq ft</li>
                    <li>• Luxury suite: 200-300 sq ft</li>
                    <li>• Estate spa: 300-450+ sq ft</li>
                    <li>• Separate toilet room: 35-50 sq ft</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Feature Requirements</h4>
                  <ul className="space-y-1 text-blue-900">
                    <li>• Freestanding tub: 60" × 80" min</li>
                    <li>• Walk-in shower: 48" × 60" min</li>
                    <li>• Double vanity: 60-96" width</li>
                    <li>• His/hers vanities: 48"+ each</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Statement Bathtubs
            </h2>
            <p className="text-gray-600 mb-6">
              The freestanding tub has become the defining feature of luxury bathrooms, serving as sculptural focal point even when not in use. We install tubs from premier manufacturers including Victoria + Albert, MTI Baths, and Kohler's luxury lines—each selected for both aesthetic beauty and bathing comfort. Shapes range from classic slipper tubs to modern geometric forms, with materials including cast resin, copper, natural stone, and traditional cast iron.
            </p>
            <p className="text-gray-600 mb-6">
              Tub placement requires careful consideration of views, traffic flow, and plumbing access. Many Tampa luxury baths position tubs near windows overlooking private gardens or water views, creating contemplative settings for relaxation. Floor-mounted tub fillers with handheld sprays provide both aesthetic elegance and practical function. Built-in whirlpool or air systems add hydrotherapy options for those who prefer active bathing.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Spa Shower Experiences
            </h2>
            <p className="text-gray-600 mb-6">
              Luxury showers have evolved beyond simple enclosures into true hydrotherapy environments. Our custom shower installations typically include multiple shower heads: large rain heads mounted overhead (12-16 inches is standard in luxury applications), wall-mounted body sprays at various heights, and handheld wands for flexibility. Digital controls allow users to save preferred temperature and pressure settings, starting each shower exactly as desired.
            </p>
            <p className="text-gray-600 mb-6">
              Steam shower capability transforms ordinary showers into home steam rooms—particularly welcome relief from Tampa's occasional winter chill. Proper steam installations require specialized waterproofing, vapor barriers, and sloped ceilings to manage condensation. Aromatherapy injection systems add essential oils to steam for enhanced relaxation. Chromotherapy LED systems provide color therapy options during showers.
            </p>
            <p className="text-gray-600 mb-6">
              Shower dimensions in luxury applications typically exceed 48 by 60 inches, with many installations approaching 60 by 84 inches or larger. Frameless glass enclosures or open walk-through designs eliminate visual barriers, making showers feel even more spacious. Built-in benches, niches for toiletries, and grab bars (thoughtfully designed to appear as accessories) add function without compromising aesthetics.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Premium Vanities and Fixtures
            </h2>
            <p className="text-gray-600 mb-6">
              Custom vanities anchor the bathroom workspace, providing storage, counter space, and stylistic statement. We build vanities from premium furniture-grade materials—often integrating vessel sinks, undermount bowls, or integrated stone basins depending on design direction. Soft-close drawers, interior electrical outlets for styling tools, and pull-out organizing systems bring order to daily routines.
            </p>
            <p className="text-gray-600 mb-6">
              Fixture selection dramatically impacts both aesthetics and experience. We partner with luxury brands including Waterworks, Kallista, Lefroy Brooks, and Dornbracht—manufacturers whose products justify premium prices through superior design, finish quality, and long-term reliability. Unlacquered brass, brushed nickel, matte black, and polished chrome each create distinct moods; mixed metal approaches add contemporary interest when executed thoughtfully.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Heated Comfort Features
            </h2>
            <p className="text-gray-600 mb-6">
              While Tampa's climate rarely gets truly cold, there's undeniable luxury in stepping onto warm stone floors on a cool January morning. We install electric radiant heating beneath tile floors throughout bathroom areas—controlled by programmable thermostats that warm floors before your wake time and adjust throughout the day. Operating costs are modest (typically $10-20 monthly) for the significant comfort enhancement.
            </p>
            <p className="text-gray-600 mb-6">
              Heated towel bars and warmers ensure fresh towels await after every shower or bath—a simple luxury that becomes essential once experienced. In-drawer heating elements keep towels warm even in the coldest months. Heated mirrors eliminate fogging, maintaining clear reflections immediately after even the steamiest showers. These comfort features combine to create genuinely spa-like environments.
            </p>

            {/* Cost Table */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Luxury Bathroom Investment Guide
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-brand-green-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Bathroom Level</th>
                      <th className="px-6 py-4 text-left">Size Range</th>
                      <th className="px-6 py-4 text-left">Investment Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Premium Master Bath</td>
                      <td className="px-6 py-4">150-200 sq ft</td>
                      <td className="px-6 py-4">$75,000 - $125,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Luxury Spa Bath</td>
                      <td className="px-6 py-4">200-300 sq ft</td>
                      <td className="px-6 py-4">$125,000 - $200,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Estate Spa Suite</td>
                      <td className="px-6 py-4">300-450 sq ft</td>
                      <td className="px-6 py-4">$200,000 - $350,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Secondary Luxury Bath</td>
                      <td className="px-6 py-4">80-150 sq ft</td>
                      <td className="px-6 py-4">$40,000 - $80,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Costs include fixtures, tile/stone, custom cabinetry, and installation as part of new construction. Premium natural stone and designer fixtures may increase costs significantly. All prices reflect 2024 Tampa Bay market rates.
              </p>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Luxury Bathroom Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Bath className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Bathing</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Freestanding soaking tubs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Whirlpool/air jet systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Floor-mounted tub fillers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Chromotherapy lighting</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Droplets className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Shower Systems</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Large rain shower heads</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Body spray systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Steam shower capability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Digital temperature control</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Thermometer className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Comfort Features</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Radiant floor heating</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Heated towel bars</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Fog-free heated mirrors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Bidet fixtures/seats</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Finishes</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Natural stone surfaces</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Custom cabinetry</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Designer fixtures</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Frameless glass enclosures</span>
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
                    What's the best material for luxury bathroom surfaces?
                  </h3>
                  <p className="text-gray-600">
                    Natural stone remains the premier choice for luxury bathrooms—marble, limestone, and travertine create timeless elegance. Porcelain tile offers lower maintenance with realistic stone appearances. Quartz provides durability for vanity tops. We often combine materials: marble feature walls with porcelain floor tile, for example. Material selection depends on aesthetic goals, maintenance preferences, and budget priorities.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How do you handle moisture and humidity in luxury baths?
                  </h3>
                  <p className="text-gray-600">
                    Proper ventilation is critical—we install high-capacity exhaust fans (often with humidity sensors for automatic operation) and ensure adequate air exchange. Steam showers require specialized vapor barriers, sloped ceilings, and marine-grade materials. Radiant floor heating helps dry surfaces after use. Properly specified materials resist moisture damage even in Tampa's humid climate when installed with correct waterproofing methods.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Do freestanding tubs require special installation?
                  </h3>
                  <p className="text-gray-600">
                    Yes—freestanding tubs require floor reinforcement (many weigh 500+ pounds when filled), dedicated plumbing rough-in positioned for floor-mounted or wall-mounted fillers, and careful placement to ensure adequate access from all sides. Overflow and drain connections require planning during framing phase. We coordinate these requirements early in design to avoid costly adjustments during construction.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    What makes designer fixtures worth the premium price?
                  </h3>
                  <p className="text-gray-600">
                    Premium fixtures offer superior materials (solid brass vs. zinc), finer finishes (hand-polished vs. electroplated), better engineering (ceramic disc valves, precisely machined components), and longer warranties. The visual difference is immediately apparent, and performance remains superior for decades. Designer fixtures also hold resale value and contribute significantly to bathroom appraisal values.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Should secondary bathrooms match the master?
                  </h3>
                  <p className="text-gray-600">
                    While secondary bathrooms needn't replicate master bath investments, maintaining consistent quality levels throughout your home is important for both daily living and resale value. Guest baths visible to visitors should reflect your home's overall quality. Children's and secondary baths can use more durable, lower-maintenance materials while still incorporating quality fixtures and finishes appropriate to a luxury home.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Create Your Personal Spa
            </h2>
            <p className="text-gray-600 mb-6">
              A luxury bathroom transforms the everyday into something extraordinary. Florida Construction Specialists creates spa-inspired bathrooms throughout Tampa Bay that pamper and rejuvenate—combining beautiful design, premium materials, and thoughtful function into spaces you'll love using every day. From initial concept through final detail, we ensure your bathroom exceeds expectations.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us to discuss luxury bathroom possibilities for your Tampa Bay custom home project. Whether building new or renovating existing spaces, we bring expertise and artistry to every installation.
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
            Ready to Create Your Luxury Bathroom?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a consultation on spa-inspired bathroom design in Tampa Bay.
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
