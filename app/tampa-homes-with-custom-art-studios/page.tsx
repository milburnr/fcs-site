import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Palette, Sun, Ruler, Lightbulb, Paintbrush } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa Homes with Custom Art Studios | Creative Spaces",
  description: "Build custom homes with dedicated art studios in Tampa. North-light windows, specialized ventilation, proper lighting, and purpose-built creative spaces. Artist homes from $500K-$2M+.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa Homes with Custom Art Studios", href: "/tampa-homes-with-custom-art-studios/" },
];

const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/tampa-custom-home-builders-with-artistic-flair/", label: "Custom Homes with Artistic Flair" },
  { href: "/designing-your-dream-home-in-tampa/", label: "Dream Home Design" },
  { href: "/services/residential/home-additions/", label: "Home Additions" },
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
            alt="Custom home with art studio in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa Homes with Custom Art Studios
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Where creativity meets architecture. Purpose-built art studios with optimal lighting, specialized ventilation, durable surfaces, and thoughtful design for serious artists working in any medium.
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
              For serious artists, a home studio isn't a luxury—it's essential infrastructure for creative work. Yet most homes relegate artistic pursuits to spare bedrooms, garages, or basements with inadequate lighting, poor ventilation, and insufficient space. Florida Construction Specialists builds custom homes throughout Tampa Bay with purpose-designed art studios that support professional creative work. Whether you're a painter, sculptor, ceramicist, jeweler, or mixed-media artist, we create spaces engineered for your specific craft.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              The Critical Importance of Natural Light
            </h2>
            <p className="text-gray-600 mb-6">
              Artists have sought north-facing windows for centuries because north light provides consistent, diffused illumination without the color temperature changes that occur as the sun crosses the sky. In Tampa, proper north-light orientation is even more valuable given our intense sunlight and dramatic shadows. We design studios with generous north-facing windows—often floor-to-ceiling—supplemented by clerestory windows and skylights positioned to maximize soft, even illumination throughout the day.
            </p>
            <p className="text-gray-600 mb-6">
              South, east, and west windows can still serve studios when properly managed. Deep overhangs shade direct sun in summer while admitting lower winter sun. Light shelves bounce illumination deeper into spaces. Translucent glazing diffuses harsh rays. Motorized shades allow precise light control for different conditions and tasks. The goal is abundant natural light without the harsh shadows and color shifts that complicate accurate color work.
            </p>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-8">
              <h3 className="text-xl font-bold text-purple-800 mb-3 flex items-center gap-2">
                <Sun className="w-6 h-6" />
                Art Studio Lighting Essentials
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-purple-900 mb-2">Natural Light</h4>
                  <ul className="space-y-1 text-purple-900">
                    <li>• North-facing primary windows</li>
                    <li>• Clerestory and skylight options</li>
                    <li>• UV-filtering glazing for artwork</li>
                    <li>• Shading for light control</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-purple-900 mb-2">Artificial Light</h4>
                  <ul className="space-y-1 text-purple-900">
                    <li>• High-CRI LED fixtures (95+)</li>
                    <li>• Color-tunable systems</li>
                    <li>• Task lighting at work areas</li>
                    <li>• Dimmable controls throughout</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Specialized Ventilation Systems
            </h2>
            <p className="text-gray-600 mb-6">
              Many artistic processes generate fumes, dust, or particulates that require specialized ventilation. Oil painting, encaustic work, printmaking, and furniture finishing release solvents that shouldn't be breathed or allowed to permeate the home. Ceramics and sculpture generate dust. Welding produces fumes requiring dedicated exhaust. Our studio designs incorporate appropriate ventilation systems matched to your specific work processes.
            </p>
            <p className="text-gray-600 mb-6">
              Spray booths with proper filtration and exhaust support painting and finishing work. Downdraft tables capture dust at benches. Kiln ventilation removes combustion byproducts and heat. Welding areas include fume hoods sized for the work. Whole-studio air exchange maintains healthy conditions even without active process ventilation. We work with mechanical engineers experienced in industrial and studio ventilation to design systems that protect your health while supporting creative freedom.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Durable, Practical Surfaces
            </h2>
            <p className="text-gray-600 mb-6">
              Studio surfaces must withstand creative abuse. Floors need to survive paint spills, dropped tools, clay fragments, and chemical solvents. Polished concrete provides durability with easy cleaning—spills can be scraped up without staining. Epoxy coatings add chemical resistance for particularly demanding processes. Industrial tile handles heavy equipment and rolling carts. Whatever the flooring choice, we include drainage where wet processes require it.
            </p>
            <p className="text-gray-600 mb-6">
              Walls benefit from similar thinking. Water-resistant surfaces simplify cleaning in ceramics studios. Magnetic paint allows flexible display and organization. Hanging systems support heavy artwork during creation. Work surfaces themselves—tables, benches, easels—should be considered during design so utilities arrive where equipment will sit. The studio should be a practical workspace first, with aesthetics following function rather than constraining it.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Studio-Specific Infrastructure
            </h2>
            <p className="text-gray-600 mb-6">
              Different artistic media require different infrastructure. Ceramics studios need 240-volt power for kilns, floor drains for wheel work, and generous water supply for clay processing. Printmaking requires large sinks for ink cleanup, heavy-duty electrical for presses, and chemical-resistant surfaces. Jewelry studios benefit from specialized benches, precious metal capture systems, and secure storage. Sculpture may require overhead hoists, reinforced floors for heavy works, and doors large enough for finished pieces to exit.
            </p>
            <p className="text-gray-600 mb-6">
              We begin studio design with detailed conversation about your specific work processes, equipment requirements, and workflow patterns. This understanding drives everything from electrical circuit design to plumbing rough-in locations to structural reinforcement. Building these elements into original construction costs far less than retrofitting later, and ensures the studio truly supports your creative practice from day one.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Climate Control for Artwork
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's humidity challenges artwork storage and certain creative processes. Studios benefit from independent HVAC zones that can maintain different conditions than the rest of the home—cooler for physical work, stable humidity for material storage. Dehumidification systems prevent mold and material degradation. Temperature stability protects finished work awaiting sale or exhibition. Some media require specific conditions during curing or drying that dedicated systems can provide.
            </p>
            <p className="text-gray-600 mb-6">
              Storage areas within studios may need enhanced climate control for valuable inventory. Flat file storage for works on paper, painting racks for canvases, and secure storage for valuable materials all benefit from stable, controlled environments. These considerations are easier to address during design than to add later, and protect the substantial investment artists make in their work and materials.
            </p>

            {/* Cost Table */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Home Art Studio Investment Guide
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-brand-green-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Studio Type</th>
                      <th className="px-6 py-4 text-left">Typical Size</th>
                      <th className="px-6 py-4 text-left">Investment Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Basic Studio Addition</td>
                      <td className="px-6 py-4">200-400 sq ft</td>
                      <td className="px-6 py-4">$75,000 - $150,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Professional Home Studio</td>
                      <td className="px-6 py-4">400-800 sq ft</td>
                      <td className="px-6 py-4">$150,000 - $300,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Custom Home w/ Integrated Studio</td>
                      <td className="px-6 py-4">3,000-5,000 sq ft total</td>
                      <td className="px-6 py-4">$500,000 - $1.2M</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Artist Estate w/ Separate Studio</td>
                      <td className="px-6 py-4">4,000+ sq ft home + studio</td>
                      <td className="px-6 py-4">$1.2M - $2M+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Studio costs vary significantly based on required infrastructure. Basic painting studios cost less than ceramics facilities with kilns and plumbing. Specialized ventilation, heavy electrical, and industrial flooring add costs. All prices reflect 2024 Tampa Bay market rates.
              </p>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Art Studio Features by Medium
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Paintbrush className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Painting & Drawing</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>North-light windows</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>High ceilings for large work</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Solvent ventilation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Canvas and paper storage</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Palette className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Ceramics & Pottery</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Kiln room with ventilation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Clay prep and wedging area</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Three-compartment sink</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Heavy-duty flooring</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Ruler className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Sculpture & 3D Work</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Reinforced floors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Overhead lifting capacity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Large entry doors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Dust collection systems</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Mixed Media & Digital</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Flexible workspace zones</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Robust electrical/data</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Climate-controlled storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Photography/video capability</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Tampa Bay's Arts Community
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay supports a vibrant arts community with galleries, art centers, and collectors providing markets for local artists. The Tampa Museum of Art, Morean Arts Center, and numerous galleries in St. Petersburg's Central Arts District create exhibition opportunities. Art festivals throughout the year—from Gasparilla Festival of the Arts to smaller neighborhood shows—provide sales venues. Having a proper studio supports professional practice within this supportive ecosystem.
            </p>
            <p className="text-gray-600 mb-6">
              Some neighborhoods have particular appeal for artists. St. Petersburg's Warehouse Arts District offers creative energy and affordable space. South Tampa provides proximity to galleries and collectors. Suburban locations offer more space for larger-scale work. We help artists find the right balance of community access, affordable space, and appropriate infrastructure for their specific creative practice.
            </p>

            {/* FAQ Section */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Should the studio be attached or detached from the home?
                  </h3>
                  <p className="text-gray-600">
                    Both have advantages. Attached studios offer convenience, shared utilities, and climate control continuity. Detached studios provide noise isolation, separation of work and living, and potential for separate client access without entering the home. Messy or hazardous processes often benefit from detachment. We can design either approach—or hybrid solutions like breezeway connections—based on your specific needs and lot configuration.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    What ceiling height is ideal for an art studio?
                  </h3>
                  <p className="text-gray-600">
                    Minimum 10 feet for most work; 12-14 feet for large-scale painting or sculpture. Higher ceilings provide better lighting options, allow larger work, and create more comfortable workspace volume. Some artists working on very large pieces need 16+ foot clearance. Consider not just the work itself but how you'll view it—stepping back from a large painting requires proportionate space and ceiling height.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How do you handle zoning for home-based art business?
                  </h3>
                  <p className="text-gray-600">
                    Most Tampa Bay jurisdictions allow home-based creative businesses with limitations on client visits, signage, and external business indicators. Studios where art is created but sold elsewhere rarely face restrictions. Studios receiving regular client or gallery visits may need home occupation permits. We research requirements during planning and can design features—separate entries, parking, etc.—that support business use where permitted.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    What about resale value of homes with art studios?
                  </h3>
                  <p className="text-gray-600">
                    Purpose-built studios appeal to the artist buyer pool but may not add equivalent value for general buyers. We design studios that can convert to other uses—home offices, guest suites, home gyms—without major renovation. Flexible infrastructure (generous electrical, plumbing stubs, ventilation capacity) supports various uses. The studio can be a compelling selling point for the right buyer while not limiting your market to only artists.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Can existing homes be renovated to add studios?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely. Garage conversions, additions, and detached new construction can add studio space to existing homes. Existing spaces may already have some requirements (garage ceiling heights, for example) while lacking others (proper lighting, ventilation). We evaluate existing conditions and develop efficient approaches to create functional studios. Sometimes renovation makes more sense than new construction; sometimes the reverse is true.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Build Your Creative Sanctuary
            </h2>
            <p className="text-gray-600 mb-6">
              Your art deserves better than a cramped corner with poor light and no ventilation. Florida Construction Specialists builds custom homes throughout Tampa Bay with purpose-designed studios that support serious creative work. Whether you need a painting studio flooded with north light, a ceramics facility with professional kilns, or a sculpture workshop with industrial capabilities, we can design and build the creative space you've always wanted.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us to discuss your vision for a home with custom art studio. We'll help you create a space where your best work can emerge.
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
            Ready to Build Your Creative Space?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a consultation on custom homes with art studios in Tampa Bay.
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
