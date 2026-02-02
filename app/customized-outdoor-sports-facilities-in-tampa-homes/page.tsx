import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Trophy, Target, Dumbbell, Waves, Users } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Customized Outdoor Sports Facilities in Tampa Homes | Courts & Fields",
  description: "Build custom sports facilities at your Tampa home. Tennis courts, basketball courts, putting greens, batting cages, pickleball, and athletic amenities. Sports homes from $100K-$500K+ additions.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Customized Outdoor Sports Facilities in Tampa Homes", href: "/customized-outdoor-sports-facilities-in-tampa-homes/" },
];

const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/tampa-custom-outdoor-living-spaces/", label: "Outdoor Living Spaces" },
  { href: "/tampas-custom-family-home-builders/", label: "Custom Family Homes" },
  { href: "/spacious-family-homes-construction-in-tampa/", label: "Spacious Family Homes" },
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
            alt="Custom outdoor sports facility in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Customized Outdoor Sports Facilities in Tampa Homes
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Train like a pro in your own backyard. Custom tennis courts, basketball courts, putting greens, batting cages, pickleball courts, and athletic facilities designed for serious sports enthusiasts.
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
              For athletes, fitness enthusiasts, and sports-loving families, home athletic facilities transform daily practice from scheduling challenges into convenient routine. No more driving to courts or waiting for tee times—your training ground is steps from your door, available whenever inspiration strikes. Florida Construction Specialists builds custom sports facilities throughout Tampa Bay, from professional-grade tennis complexes to backyard putting greens, creating homes where athletic pursuits are part of everyday life.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Tennis and Pickleball Courts
            </h2>
            <p className="text-gray-600 mb-6">
              Tennis courts remain among the most requested residential sports facilities, and Tampa's climate makes year-round play possible. Regulation tennis courts require 120 x 60 feet minimum, though extra clearance improves play quality. We construct courts with proper subsurface preparation, professional-grade surfacing (cushioned acrylic, clay, or hard court options), and appropriate fencing and lighting for evening play. Proper orientation minimizes sun glare during prime playing hours.
            </p>
            <p className="text-gray-600 mb-6">
              Pickleball's explosive popularity has driven demand for dedicated courts, often converting existing tennis courts or building new facilities sized for the smaller pickleball court (44 x 20 feet playing area, 60 x 30 total footprint). Multi-use courts accommodating both sports offer versatility, though serious players often prefer dedicated facilities. Court surfaces designed for pickleball provide appropriate ball bounce and player comfort. Many clients install two or more courts to enable simultaneous play.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center gap-2">
                <Trophy className="w-6 h-6" />
                Popular Home Sports Facilities
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-green-900 mb-2">Court Sports</h4>
                  <ul className="space-y-1 text-green-900">
                    <li>• Tennis courts (hard/clay)</li>
                    <li>• Pickleball courts</li>
                    <li>• Basketball (half/full)</li>
                    <li>• Multi-sport courts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-900 mb-2">Golf & Specialty</h4>
                  <ul className="space-y-1 text-green-900">
                    <li>• Putting greens</li>
                    <li>• Chipping/pitching areas</li>
                    <li>• Batting cages</li>
                    <li>• Bocce/lawn games</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Basketball Courts
            </h2>
            <p className="text-gray-600 mb-6">
              Home basketball courts range from simple driveway half-courts to regulation full courts suitable for serious training. Half-courts typically require 50 x 42 feet minimum, while full courts need 94 x 50 feet. Surfacing options include acrylic sport court tiles (colorful and low-maintenance), poured acrylic over asphalt (professional feel), or simple concrete with applied coating. Proper subsurface preparation prevents cracking and ensures consistent ball bounce.
            </p>
            <p className="text-gray-600 mb-6">
              High-quality backboard and goal systems make the difference between recreational fun and serious training. Adjustable systems accommodate growing players. Glass backboards with breakaway rims provide professional response. In-ground posts offer stability superior to portable systems. LED court lighting extends playing hours into evening. Many installations include spectator seating or covered viewing areas for family enjoyment.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Golf Practice Facilities
            </h2>
            <p className="text-gray-600 mb-6">
              For golfers, home practice facilities transform spare moments into improvement opportunities. Putting greens of 500-2,500 square feet provide realistic practice surfaces with professional-grade synthetic turf, proper undulation, and regulation cup placements. Chipping and pitching areas with landing targets develop short game skills. Driving nets or cages allow full-swing practice without requiring acres of range space. Simulator rooms bring virtual courses indoors for year-round play regardless of weather.
            </p>
            <p className="text-gray-600 mb-6">
              Synthetic putting green technology has advanced dramatically—today's surfaces replicate bent grass response with minimal maintenance. Proper base preparation, drainage, and infill materials create greens that perform consistently for years. We work with golf course designers when clients want more elaborate installations including bunker practice areas, approach shot zones, or par-3 holes integrated into landscapes.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Baseball and Softball Facilities
            </h2>
            <p className="text-gray-600 mb-6">
              Batting cages allow serious practice for players at every level. Home installations range from simple netted areas for soft-toss practice to full pitching tunnels with automatic pitching machines. Proper dimensions (70 feet minimum length for baseball) ensure realistic practice conditions. Turf flooring, quality netting, and L-screens for pitching protection create functional training environments. Ball return systems reduce time spent retrieving.
            </p>
            <p className="text-gray-600 mb-6">
              Some families with sufficient acreage create full batting/fielding facilities including pitcher's mounds, batting boxes, and outfield areas. These installations require careful grading, drainage design, and ongoing maintenance but provide unmatched practice convenience for dedicated players. We've built facilities for high school players developing college potential and for adult leagues keeping skills sharp between seasons.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Pool and Aquatic Sports
            </h2>
            <p className="text-gray-600 mb-6">
              Pools designed for swimming practice differ significantly from recreational pools. Lap pools with 50-75 foot lengths enable serious training. Pool depth accommodates flip turns and diving starts. Pace clocks and lane lines support structured workouts. Resistance swimming systems (endless pools or tethered swimming) enable stationary training in smaller spaces. Water polo goals, basketball hoops, and volleyball nets add recreational versatility.
            </p>
            <p className="text-gray-600 mb-6">
              Families with competitive swimmers often prioritize pool design over other amenities—the convenience of home training can mean the difference between practice happening consistently or not. Heated pools extend Tampa's already-long swim season to year-round use. Pool houses with changing facilities, workout equipment, and storage support comprehensive aquatic training programs.
            </p>

            {/* Cost Table */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Sports Facility Investment Guide
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-brand-green-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Facility Type</th>
                      <th className="px-6 py-4 text-left">Space Required</th>
                      <th className="px-6 py-4 text-left">Investment Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Putting Green</td>
                      <td className="px-6 py-4">500-2,500 sq ft</td>
                      <td className="px-6 py-4">$15,000 - $50,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Half Basketball Court</td>
                      <td className="px-6 py-4">~2,100 sq ft</td>
                      <td className="px-6 py-4">$25,000 - $60,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Pickleball Court (1-2)</td>
                      <td className="px-6 py-4">1,800-3,600 sq ft</td>
                      <td className="px-6 py-4">$25,000 - $75,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Tennis Court</td>
                      <td className="px-6 py-4">7,200+ sq ft</td>
                      <td className="px-6 py-4">$60,000 - $150,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Batting Cage/Tunnel</td>
                      <td className="px-6 py-4">12x70 ft minimum</td>
                      <td className="px-6 py-4">$15,000 - $40,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Multi-Sport Complex</td>
                      <td className="px-6 py-4">Varies</td>
                      <td className="px-6 py-4">$150,000 - $500,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Costs vary based on surface materials, lighting, fencing, and site preparation requirements. Court lighting adds $10K-$30K per court. Premium surfaces command higher pricing. Site conditions (grading, drainage, access) significantly affect costs. All prices reflect 2024 Tampa Bay market rates.
              </p>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Sports Facility Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Court Surfaces</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Cushioned acrylic systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Modular sport tiles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Synthetic clay surfaces</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Custom color schemes</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Dumbbell className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Training Equipment</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Ball machines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Rebounding systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Practice targets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Video analysis systems</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Waves className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Aquatic Sports</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Lap pool design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Resistance swimming</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Diving accommodations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Pool sport equipment</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Support Facilities</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Court lighting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Spectator seating</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Equipment storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Shade structures</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Site Requirements and Considerations
            </h2>
            <p className="text-gray-600 mb-6">
              Sports facilities require significant space—often more than homeowners initially expect. A single tennis court with appropriate clearance needs roughly 120 x 60 feet of level ground. Multi-court installations or combined facilities need proportionally more. Before committing to facility plans, we evaluate lot size, setback requirements, grading challenges, and neighbor relationships. Some installations require variances or special permits.
            </p>
            <p className="text-gray-600 mb-6">
              Sound and lighting affect neighbors, potentially creating conflicts that well-designed facilities can minimize. Sound barriers, court orientation, and fixture selection can reduce impacts. We've built facilities in close-quarter neighborhoods by addressing concerns proactively—some clients have transformed initially skeptical neighbors into regular playing partners by handling the project thoughtfully.
            </p>

            {/* FAQ Section */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How much land do I need for a tennis court?
                  </h3>
                  <p className="text-gray-600">
                    A regulation tennis court itself is 78 x 36 feet, but you need clearance around all sides—minimum 12 feet behind baselines and 6 feet on sides, though more is better. Total footprint is typically 120 x 60 feet (7,200 square feet). Add space for fencing, gates, and any desired seating or shade. Consider access for construction equipment during building and maintenance vehicles afterward. Most residential courts work well on half-acre or larger lots.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    What maintenance do sports courts require?
                  </h3>
                  <p className="text-gray-600">
                    Hard courts need periodic cleaning, pressure washing, and resurfacing every 4-8 years depending on use and conditions. Annual costs typically run $500-2,000. Clay courts require daily maintenance—rolling, watering, line brushing—making them impractical without staff or extreme dedication. Synthetic turf facilities need occasional brushing, infill replenishment, and cleaning. Proper maintenance preserves playing quality and extends facility life significantly.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Can sports facilities increase property value?
                  </h3>
                  <p className="text-gray-600">
                    Quality sports facilities typically return 30-50% of investment at resale—less than pools or outdoor kitchens but meaningful for buyers who value athletics. Tennis courts and pickleball courts have broad appeal given current popularity. More specialized facilities (batting cages, golf simulators) appeal to narrower buyer pools. Location matters: properties in country club areas or athletic communities see better returns than facilities in neighborhoods where they seem out of place.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How do you handle drainage for sports facilities?
                  </h3>
                  <p className="text-gray-600">
                    Proper drainage is critical—courts must shed water without puddling while not flooding surrounding areas. We grade surfaces with precise slopes (typically 1% for hard courts) and install perimeter drainage systems that handle Tampa's heavy rains. Subsurface preparation includes compacted base materials that promote drainage. Poor drainage leads to standing water, algae growth, surface damage, and shortened facility life. This is where professional construction pays dividends.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    What about HOA restrictions on sports facilities?
                  </h3>
                  <p className="text-gray-600">
                    Many HOAs regulate or prohibit certain sports facilities, particularly those visible from streets or neighboring properties. Height restrictions may affect fencing or lighting. Some communities require architectural review approval. We research restrictions before design and can often develop approaches that satisfy HOA requirements while achieving your goals. Sometimes negotiation or variance requests are appropriate—having a professional design helps these conversations.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Build Your Home Training Facility
            </h2>
            <p className="text-gray-600 mb-6">
              Whether you're developing young athletes, maintaining your own competitive edge, or simply want convenient practice facilities for recreational sports, home athletic installations deliver daily value that justifies their investment. Florida Construction Specialists builds sports facilities throughout Tampa Bay that bring professional-quality training to your backyard.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us to discuss your athletic facility vision. We'll evaluate your site, understand your sports interests, and design facilities that support your training goals for years to come.
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
            Ready to Build Your Sports Facility?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a consultation on custom sports facilities for your Tampa Bay home.
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
