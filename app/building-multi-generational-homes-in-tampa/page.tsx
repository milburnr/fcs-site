import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Users, Heart, Home, Shield, Accessibility } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Building Multi-Generational Homes in Tampa | Family Living - Florida Construction Specialists",
  description: "Build multi-generational homes in Tampa for extended family living. In-law suites, dual master bedrooms, accessible design, and private living quarters. Multi-gen homes from $500K-$2.5M+.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Building Multi-Generational Homes in Tampa", href: "/building-multi-generational-homes-in-tampa/" },
];

const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/tampas-custom-family-home-builders/", label: "Custom Family Home Builders" },
  { href: "/custom-home-accessibility-features-in-tampa/", label: "Accessibility Features" },
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
            src="/images/custom-home-1/custom-home-1-large.webp"
            alt="Multi-generational home construction in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Building Multi-Generational Homes in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Keep family close while maintaining privacy. Custom multi-generational homes with in-law suites, dual living areas, accessible design, and thoughtful separation for grandparents, parents, and children living together.
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
              Multi-generational living is experiencing a renaissance in America, and Tampa Bay is at the forefront of this trend. Extended families are discovering the emotional, practical, and financial benefits of living together—grandparents providing childcare, adult children supporting aging parents, resources pooled for better homes than any generation could afford alone. Florida Construction Specialists designs and builds custom multi-generational homes that make shared living work for everyone, with thoughtful separation that provides privacy while maintaining family connection.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Multi-Generational Living Works
            </h2>
            <p className="text-gray-600 mb-6">
              The benefits are substantial and multifaceted. Grandparents gain purpose and connection through daily interaction with grandchildren rather than occasional visits. Working parents receive childcare from trusted family rather than strangers—saving significant expense while providing better outcomes for children. Aging parents can be monitored and supported without the isolation and expense of assisted living. Families build wealth by combining resources rather than maintaining multiple households with duplicate expenses.
            </p>
            <p className="text-gray-600 mb-6">
              Cultural traditions in many communities have always embraced multi-generational living, and these families often bring valuable experience to design conversations. Other families are rediscovering this arrangement after generations of nuclear family assumptions. Either way, successful multi-generational homes require careful design that honors each generation's needs while creating shared spaces where family bonds strengthen.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
                <Users className="w-6 h-6" />
                Multi-Generational Living Arrangements
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Common Configurations</h4>
                  <ul className="space-y-1 text-blue-900">
                    <li>• Grandparents + parents + children</li>
                    <li>• Parents + adult children (boomerang)</li>
                    <li>• Single parent + grandparent support</li>
                    <li>• Siblings sharing family compound</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Key Benefits</h4>
                  <ul className="space-y-1 text-blue-900">
                    <li>• Built-in childcare support</li>
                    <li>• Elder care without facilities</li>
                    <li>• Shared expenses, better home</li>
                    <li>• Stronger family bonds</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              In-Law Suites and Accessory Dwelling Units
            </h2>
            <p className="text-gray-600 mb-6">
              In-law suites (also called accessory dwelling units or ADUs) provide the greatest privacy while maintaining connection. These complete living units include bedroom, bathroom, living area, and kitchenette or full kitchen. They may be attached to the main home with a connecting door that can be opened for interaction or closed for separation, or completely detached as guest houses. Either approach provides private retreat while keeping family within easy reach.
            </p>
            <p className="text-gray-600 mb-6">
              Tampa Bay zoning varies by municipality regarding ADUs. Some areas permit them freely; others restrict size, require owner occupancy, or prohibit rental use. We research requirements during initial consultation and design compliant solutions. Many clients find that even restricted ADUs meet their multi-generational needs—the goal is family housing, not rental income, and zoning typically accommodates family use.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Dual Master Suite Design
            </h2>
            <p className="text-gray-600 mb-6">
              For families wanting shared living areas with private bedroom retreats, dual master suite design provides excellent balance. Two full master suites with en-suite bathrooms and walk-in closets give each generation equivalent accommodation without the hierarchy of "master" versus "guest" rooms. Positioning these suites at opposite ends of the home or on different floors maximizes privacy while shared living, dining, and kitchen areas encourage family interaction.
            </p>
            <p className="text-gray-600 mb-6">
              Suite positioning considers daily routines. Older generations often rise earlier and retire earlier than younger families with children—locating their suite away from children's play areas and family gathering spaces reduces disturbance. Sound insulation between suites exceeds standard construction to prevent noise transmission. Each suite might include sitting areas, allowing retreat without full isolation from family life.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Accessibility and Aging-in-Place Design
            </h2>
            <p className="text-gray-600 mb-6">
              Multi-generational homes should anticipate mobility changes over time. What serves active grandparents today should accommodate walkers or wheelchairs in coming decades. We incorporate universal design principles throughout: wider doorways (36 inches minimum), zero-threshold entries, grab bar blocking in bathrooms, first-floor bedroom and full bath options, and lever-style door handles throughout. These features serve all ages—strollers navigate wide doorways as easily as wheelchairs.
            </p>
            <p className="text-gray-600 mb-6">
              More extensive accessibility features might include: roll-in showers with bench seating, adjustable-height counters in kitchens and baths, elevator shafts (even if not initially equipped), ramps integrated into landscaping, and emergency call systems. These additions cost little during construction but would be expensive retrofits. Planning now extends the home's utility through whatever mobility challenges the future brings.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Separate Entries and Circulation
            </h2>
            <p className="text-gray-600 mb-6">
              Privacy requires more than bedroom doors. Many multi-generational designs include separate exterior entries so residents can come and go independently without walking through shared spaces. This is essential if one generation maintains different schedules, receives frequent visitors, or simply values independence. Separate entries also simplify future flexibility—units can potentially be rented if family situations change.
            </p>
            <p className="text-gray-600 mb-6">
              Interior circulation should offer both connection and separation. Connecting doors between units allow interaction when desired while maintaining privacy when not. Shared spaces should be accessible from all units without requiring passage through private areas. Consider traffic patterns: can grandparents reach the kitchen for morning coffee without waking grandchildren? Can teenagers enter without disturbing sleeping parents?
            </p>

            {/* Cost Table */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Multi-Generational Home Investment Guide
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-brand-green-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Configuration</th>
                      <th className="px-6 py-4 text-left">Typical Size</th>
                      <th className="px-6 py-4 text-left">Investment Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">In-Law Suite Addition</td>
                      <td className="px-6 py-4">400-800 sq ft</td>
                      <td className="px-6 py-4">$100,000 - $200,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Dual Master Home</td>
                      <td className="px-6 py-4">3,500-5,000 sq ft</td>
                      <td className="px-6 py-4">$500,000 - $900,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Attached In-Law Suite Home</td>
                      <td className="px-6 py-4">4,000-6,000 sq ft</td>
                      <td className="px-6 py-4">$700,000 - $1.3M</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Multi-Gen Estate + Guest House</td>
                      <td className="px-6 py-4">5,000+ sq ft + 1,000+ sq ft</td>
                      <td className="px-6 py-4">$1.2M - $2.5M+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Costs include full accessibility provisions and separate HVAC zones. Kitchen inclusion in secondary units adds approximately $30-60K. Detached guest houses require additional site work and may face zoning restrictions. All prices reflect 2024 Tampa Bay market rates.
              </p>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Multi-Generational Home Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Home className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Privacy Features</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Separate exterior entries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Private living areas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Sound insulation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Separate HVAC zones</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Connection Spaces</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Large shared kitchen</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Family great room</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Outdoor gathering areas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Connecting interior doors</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Accessibility className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Accessibility</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Zero-threshold entries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Wide doorways throughout</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>First-floor master option</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Roll-in shower design</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Safety & Security</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Emergency call systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Intercom connectivity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Grab bar installation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Smart home monitoring</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Tampa Bay's Multi-Generational Opportunities
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay's reasonable land costs (compared to many markets) and favorable zoning in many areas make multi-generational construction practical. Larger lots in Wesley Chapel, Odessa, and Lithia accommodate spacious multi-gen homes with outdoor living. South Tampa's older neighborhoods often have lots that can support additions or guest houses. New developments increasingly include multi-gen floor plans reflecting market demand.
            </p>
            <p className="text-gray-600 mb-6">
              The region's appeal to retirees makes it natural for grandparents to relocate near adult children already established in Tampa careers. Building multi-generational homes brings families together while providing everyone superior accommodation compared to separate, smaller homes. We see increasing demand from families recognizing these advantages and seeking custom solutions.
            </p>

            {/* FAQ Section */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How do you handle different generations contributing to construction costs?
                  </h3>
                  <p className="text-gray-600">
                    We work with families and their attorneys to structure arrangements appropriately. Common approaches include: percentage ownership based on contribution, separate financing for different portions, or rental arrangements for in-law units. The key is clear agreements before construction begins. We provide detailed cost breakdowns for different components to facilitate these discussions, though legal and financial structuring is ultimately between family members and their advisors.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    What if family circumstances change later?
                  </h3>
                  <p className="text-gray-600">
                    Good multi-generational design anticipates change. In-law suites with separate entries can be rented if family members move out. Dual master homes appeal to buyers with different multi-gen needs or those wanting separated home offices. Connecting doors between units can be permanently closed if ownership divides. We design for flexibility so your investment retains value regardless of how family situations evolve.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Do multi-generational homes affect insurance or property taxes?
                  </h3>
                  <p className="text-gray-600">
                    Insurance treats multi-gen homes as single-family residences—you'll need appropriate coverage for the total square footage, but it's not fundamentally different from any large home. Property taxes are based on assessed value, which reflects the home's market value. If secondary units are detached and rentable, some jurisdictions may assess them separately. We recommend consulting with insurance agents and tax professionals during planning.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How do you ensure good sound separation between units?
                  </h3>
                  <p className="text-gray-600">
                    Sound isolation requires attention throughout construction. Between-unit walls get insulation, resilient channels or sound clips, and multiple layers of drywall—achieving STC (Sound Transmission Class) ratings of 50 or higher. Separate HVAC systems prevent sound transmission through ductwork. Staggered studs, solid-core doors, and careful attention to penetrations complete the approach. The result is near-complete privacy—you won't hear normal conversation or TV from adjacent units.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Should we include a full kitchen in the in-law suite?
                  </h3>
                  <p className="text-gray-600">
                    Full kitchens maximize independence—residents can prepare meals according to their preferences and schedules. Kitchenettes with small refrigerators, microwaves, and countertop appliances provide some independence at lower cost. Some families prefer shared main kitchens to encourage interaction. We recommend considering current needs and likely future evolution—adding a kitchen later is expensive and disruptive, while having one you don't use costs little ongoing.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Bring Your Family Together
            </h2>
            <p className="text-gray-600 mb-6">
              Multi-generational living offers remarkable benefits—but realizing those benefits requires homes designed for the arrangement rather than awkward adaptations of traditional floor plans. Florida Construction Specialists has extensive experience with multi-generational design, understanding the balance of privacy and connection that makes shared living work for everyone.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us to discuss your family's multi-generational living vision. We'll help you design a home where every generation thrives.
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
            Ready to Build Your Multi-Generational Home?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a consultation on multi-generational home construction in Tampa Bay.
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
