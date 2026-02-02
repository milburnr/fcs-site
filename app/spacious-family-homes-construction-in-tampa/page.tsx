import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Home, Ruler, Users, Shield, Maximize } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Spacious Family Homes Construction in Tampa | Large Custom Homes",
  description: "Build spacious family homes in Tampa with generous floor plans, high ceilings, and room to grow. Custom construction for families who need space. From $450K-$2.5M+.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Spacious Family Homes Construction in Tampa", href: "/spacious-family-homes-construction-in-tampa/" },
];

const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/tampas-custom-family-home-builders/", label: "Custom Family Home Builders" },
  { href: "/building-multi-generational-homes-in-tampa/", label: "Multi-Generational Homes" },
  { href: "/tampa-custom-outdoor-living-spaces/", label: "Outdoor Living Spaces" },
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
            alt="Spacious family home construction in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Spacious Family Homes Construction in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Build a home with room to breathe, grow, and thrive. Generous floor plans, soaring ceilings, expansive living areas, and thoughtful layouts designed for families who refuse to compromise on space.
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
              Space is the ultimate luxury. While many builders cram maximum square footage onto minimum lots with compromised room sizes and cramped layouts, Florida Construction Specialists takes a different approach. We design and build truly spacious family homes throughout Tampa Bay—residences where rooms have generous proportions, hallways don't feel like tunnels, and families have the space they need for comfortable daily living. From grand estate homes in South Tampa to expansive new construction in Wesley Chapel, we create homes that breathe.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Understanding True Spaciousness
            </h2>
            <p className="text-gray-600 mb-6">
              Spaciousness isn't just about square footage—it's about how that space feels and functions. A 4,000 square foot home with 8-foot ceilings and chopped-up rooms can feel more cramped than a well-designed 3,000 square foot home with 10-foot ceilings and open sight lines. True spaciousness comes from thoughtful proportions: room dimensions that accommodate furniture with breathing room, ceiling heights that create volume, windows that bring in natural light, and layouts that flow naturally rather than forcing residents through awkward transitions.
            </p>
            <p className="text-gray-600 mb-6">
              Our approach begins with understanding how your family actually lives. Do you need a great room where everyone can gather without feeling crowded? A kitchen where multiple cooks can work simultaneously? Bedrooms that accommodate sitting areas, not just beds? A home office that doesn't feel like a converted closet? We design around these real needs, creating spaces scaled for comfortable living rather than maximizing bedroom count on spec sheets.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
                <Maximize className="w-6 h-6" />
                What Makes a Home Feel Spacious
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Dimensional Factors</h4>
                  <ul className="space-y-1 text-blue-900">
                    <li>• 10-12 foot ceiling heights</li>
                    <li>• Room proportions (not just size)</li>
                    <li>• Wide hallways and transitions</li>
                    <li>• Generous closet and storage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Design Elements</h4>
                  <ul className="space-y-1 text-blue-900">
                    <li>• Open floor plan flow</li>
                    <li>• Natural light optimization</li>
                    <li>• Strategic sight lines</li>
                    <li>• Indoor-outdoor connections</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Ceiling Height and Volume
            </h2>
            <p className="text-gray-600 mb-6">
              Nothing transforms a home's feel like ceiling height. Standard 8-foot ceilings—common in production homes—create horizontal emphasis that can feel confining, especially in larger rooms. We typically specify 10-foot ceilings on first floors and 9-foot on second floors as our baseline, with 12-foot or higher ceilings in great rooms, foyers, and other volume spaces. Two-story spaces with mezzanines or overlooks add dramatic vertical interest while maintaining connection between floors.
            </p>
            <p className="text-gray-600 mb-6">
              Ceiling treatments enhance the sense of space. Coffered ceilings add architectural depth. Exposed beam structures create rustic grandeur. Cove ceilings with integrated lighting seem to float overhead. Skylights and clerestory windows bring light deep into floor plans while emphasizing vertical volume. These details cost more than flat drywall but dramatically elevate the finished home's presence.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Room Proportions That Work
            </h2>
            <p className="text-gray-600 mb-6">
              A master bedroom listed as 15x15 sounds adequate on paper but feels tight in reality. Once you place a king bed, nightstands, a dresser, and perhaps a seating area, movement becomes cramped. We design master suites starting at 18x20 for comfortable proportions, with many clients preferring 20x22 or larger. Secondary bedrooms scaled to accommodate double beds plus desks avoid the "barely fits a bed" syndrome common in production homes.
            </p>
            <p className="text-gray-600 mb-6">
              Living spaces follow similar logic. Great rooms of 24x30 or larger accommodate multiple seating areas without furniture floating awkwardly in the middle of vast spaces. Dining rooms that fit 10-seat tables plus serving furniture for formal entertaining. Kitchens with islands large enough to actually use—not decorative pieces barely bigger than breakfast tables. Each room proportioned for its actual function, not minimum code requirements.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Generous Storage Throughout
            </h2>
            <p className="text-gray-600 mb-6">
              Spacious living requires spacious storage—you can't enjoy large rooms if they're cluttered with belongings that have nowhere to go. We incorporate generous closets throughout: walk-in master closets of 150+ square feet, secondary closets that actually fit seasonal wardrobes, linen closets in every bathroom corridor, and pantries sized for how families really shop. Mudroom lockers, garage storage systems, and basement or attic storage provide homes for equipment, seasonal items, and collections.
            </p>
            <p className="text-gray-600 mb-6">
              Built-in storage integrates seamlessly with architecture. Window seats with storage below, built-in bookcases flanking fireplaces, hall closets designed for sports equipment rather than just coats. These features eliminate the need for freestanding storage furniture that consumes floor space, keeping rooms open and uncluttered while providing homes for everything a family accumulates.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Open Floor Plans Done Right
            </h2>
            <p className="text-gray-600 mb-6">
              Open floor plans have become standard, but execution varies dramatically. Poorly designed open plans create acoustically harsh, visually chaotic spaces where every activity competes for attention. Well-designed open plans use subtle techniques to create distinct zones within flowing space: ceiling height changes, flooring transitions, furniture groupings reinforced by lighting design, and partial walls or columns that suggest separation without blocking sight lines.
            </p>
            <p className="text-gray-600 mb-6">
              We also recognize when separation serves families better. Not every space benefits from openness—home offices need quiet concentration, media rooms need darkness, and sometimes you want to cook without guests watching every move. Our designs balance open living areas with appropriately enclosed spaces, creating homes that accommodate diverse activities simultaneously without compromise.
            </p>

            {/* Cost Table */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Spacious Home Investment Guide
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-brand-green-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Home Category</th>
                      <th className="px-6 py-4 text-left">Typical Size</th>
                      <th className="px-6 py-4 text-left">Investment Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Spacious Family Home</td>
                      <td className="px-6 py-4">3,000-4,000 sq ft</td>
                      <td className="px-6 py-4">$450,000 - $750,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Executive Family Home</td>
                      <td className="px-6 py-4">4,000-5,500 sq ft</td>
                      <td className="px-6 py-4">$750,000 - $1.2M</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Luxury Estate Home</td>
                      <td className="px-6 py-4">5,500-7,500 sq ft</td>
                      <td className="px-6 py-4">$1.2M - $1.8M</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Grand Estate</td>
                      <td className="px-6 py-4">7,500+ sq ft</td>
                      <td className="px-6 py-4">$1.8M - $2.5M+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Pricing based on quality custom construction with 10+ foot ceilings, premium proportions, and generous room sizes throughout. Lot costs not included. Waterfront and premium Tampa neighborhoods may command higher per-square-foot pricing. All prices reflect 2024 Tampa Bay market rates.
              </p>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Spacious Home Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Maximize className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Volume & Scale</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>10-12 foot ceiling heights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Two-story great rooms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Grand foyer entries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Cathedral/vaulted ceilings</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Ruler className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Room Proportions</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Oversized master suites</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Generous secondary bedrooms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Expanded kitchen layouts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Wide hallways (4+ feet)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Home className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Storage Solutions</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Walk-in closet systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Oversized pantries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Built-in cabinetry</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Garage storage zones</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Living Areas</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Expansive great rooms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Formal and casual spaces</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Bonus/flex rooms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Home office suites</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Tampa Bay Neighborhoods for Spacious Homes
            </h2>
            <p className="text-gray-600 mb-6">
              Truly spacious homes require adequate lots, making location selection crucial. South Tampa neighborhoods like Beach Park, Palma Ceia, and Culbreath Isles offer larger lots appropriate for estate homes, though land commands premium pricing. Newer developments in Wesley Chapel, Lithia, and Odessa provide more acreage at lower cost, enabling larger homes with generous setbacks. Waterfront properties along Tampa Bay and Gulf beaches offer unique opportunities for grand homes that embrace their settings.
            </p>
            <p className="text-gray-600 mb-6">
              We help clients match their space requirements with realistic lot searches. A 6,000 square foot home with proper proportions, attached garage, pool, and outdoor living needs a half-acre minimum—more if you want meaningful yard space. Understanding these requirements early prevents disappointment and focuses searches on appropriate properties from the start.
            </p>

            {/* FAQ Section */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    What's the minimum lot size for a spacious home?
                  </h3>
                  <p className="text-gray-600">
                    For homes over 4,000 square feet with proper setbacks and outdoor living, we typically recommend lots of at least 15,000 square feet (about one-third acre). Larger homes of 6,000+ square feet benefit from half-acre or larger lots. Zoning setback requirements vary by municipality and neighborhood, so we analyze specific lots during project planning to ensure your vision fits the site.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Do higher ceilings significantly increase construction costs?
                  </h3>
                  <p className="text-gray-600">
                    Moving from 8-foot to 10-foot ceilings adds approximately 5-8% to construction costs due to additional wall materials, taller doors and windows, and increased HVAC requirements. However, the dramatic improvement in home feel and livability typically justifies this investment. Two-story volume spaces cost more proportionally but create the most impressive visual impact.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How do you prevent large homes from feeling cavernous?
                  </h3>
                  <p className="text-gray-600">
                    Scale and proportion matter more than sheer size. We design homes with varied ceiling heights—higher in public spaces, slightly lower in bedrooms and intimate areas. Furniture groupings define zones within open spaces. Lighting design creates warmth and intimacy. Architectural details at human scale—wainscoting, built-ins, fireplace surrounds—bring large rooms into comfortable proportion. The goal is spacious, not overwhelming.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    What about energy efficiency in larger homes?
                  </h3>
                  <p className="text-gray-600">
                    Larger homes require thoughtful energy design. We use high-performance building envelopes, zoned HVAC systems that condition occupied spaces rather than heating/cooling the entire home, and energy recovery ventilation. Spray foam insulation maintains comfort in high-ceiling spaces. Smart home systems optimize efficiency based on occupancy patterns. These measures keep operating costs reasonable despite larger square footage.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Can you build spacious homes on narrower urban lots?
                  </h3>
                  <p className="text-gray-600">
                    Yes, through vertical design. Multi-story homes with rooftop terraces, courtyards that bring light deep into floor plans, and elevated outdoor living spaces maximize space on constrained lots. We've built impressive homes on 50-foot-wide lots by thinking creatively about volume and flow. The key is early planning—understanding site constraints before design begins enables creative solutions.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Build Your Spacious Dream Home
            </h2>
            <p className="text-gray-600 mb-6">
              If you've outgrown cramped production homes and need real space for your family, Florida Construction Specialists can help. We build truly spacious custom homes throughout Tampa Bay—residences designed for comfortable, gracious living with room for everyone and everything. From initial lot analysis through final walkthrough, we create homes that feel as good to live in as they look.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us to discuss your vision for a spacious family home. We'll help you understand what's possible on your lot or assist in finding the right property for your dream home.
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
            Ready to Build Your Spacious Dream Home?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a consultation on spacious family home construction in Tampa Bay.
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
