import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Crown, Diamond, Award, Sparkles, Star } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "High-End Home Construction in Tampa | Luxury Custom Builders",
  description: "Premier high-end home construction in Tampa Bay. Luxury materials, master craftsmanship, bespoke details, and uncompromising quality. Estate homes from $1M-$10M+.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "High-End Home Construction in Tampa", href: "/high-end-home-construction-in-tampa/" },
];

const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/tampa-luxury-custom-home-building-services/", label: "Luxury Custom Home Building" },
  { href: "/tampa-custom-home-builders-with-artistic-flair/", label: "Artistic Custom Homes" },
  { href: "/bespoke-architectural-design-in-tampa/", label: "Bespoke Architectural Design" },
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
            alt="High-end luxury home construction in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            High-End Home Construction in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Where uncompromising quality meets visionary design. Premier high-end construction featuring rare materials, master craftsmanship, bespoke details, and the meticulous attention that transforms houses into exceptional residences.
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
              High-end home construction isn't about spending more money—it's about achieving results impossible through standard construction methods. The finest materials sourced globally. Master craftsmen whose skills represent decades of refinement. Details invisible in photographs but palpable when you walk through a space. Systems engineered for generations of performance. Florida Construction Specialists delivers this level of construction throughout Tampa Bay for clients who accept nothing less than exceptional.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              What Distinguishes High-End Construction
            </h2>
            <p className="text-gray-600 mb-6">
              The difference between good construction and high-end construction lies in thousands of details, each individually small but cumulatively transformative. It's the perfectly flush cabinet door alignment that no one consciously notices but everyone subconsciously perceives. The paint with multiple coats hand-sanded between applications until the wall seems to glow. The hardware sourced from European foundries rather than Asian factories. The invisible integration of technology so sophisticated it disappears entirely.
            </p>
            <p className="text-gray-600 mb-6">
              High-end construction also means superior structural and mechanical systems. Steel framing where wood would suffice. HVAC systems sized for optimal comfort rather than minimum code compliance. Plumbing with brass and copper rather than plastic. Electrical systems with capacity for future technologies not yet imagined. These investments pay dividends in performance, longevity, and resale value for decades.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
              <h3 className="text-xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                <Crown className="w-6 h-6" />
                High-End Construction Standards
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">Materials & Finishes</h4>
                  <ul className="space-y-1 text-amber-900">
                    <li>• Imported stone and tile</li>
                    <li>• Exotic hardwood flooring</li>
                    <li>• Custom millwork throughout</li>
                    <li>• Designer-specified fixtures</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">Systems & Structure</h4>
                  <ul className="space-y-1 text-amber-900">
                    <li>• Superior structural systems</li>
                    <li>• High-efficiency mechanicals</li>
                    <li>• Premium electrical/plumbing</li>
                    <li>• Integrated smart home tech</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Master Craftsmanship
            </h2>
            <p className="text-gray-600 mb-6">
              High-end construction requires artisans, not just tradespeople. Our network includes master cabinetmakers, finish carpenters, plasterers, metalworkers, and specialists in rare techniques that most builders never encounter. These craftsmen command premium compensation because their skills—often developed over decades—produce results that less-experienced workers cannot match regardless of time invested.
            </p>
            <p className="text-gray-600 mb-6">
              Consider custom millwork: a master cabinetmaker achieves tolerances measured in thousandths of an inch, creating joinery that fits together as precisely as a Swiss watch. Door and drawer operation is glass-smooth with alignment that never varies. Finish quality rivals fine furniture rather than kitchen cabinets. These differences are felt more than seen—the visceral satisfaction of interacting with objects made by masters.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Premium Materials and Sourcing
            </h2>
            <p className="text-gray-600 mb-6">
              Materials define high-end homes. Rather than selecting from standard showroom inventory, we source materials globally to achieve specific design visions. Italian marbles quarried from the same sources that supplied Michelangelo. French limestone with provenance from specific regions. Exotic hardwoods sustainably harvested from managed forests worldwide. Hardware from European manufacturers maintaining traditions spanning centuries.
            </p>
            <p className="text-gray-600 mb-6">
              Material sourcing requires expertise and relationships developed over years. We know which quarries produce consistent quality, which suppliers maintain appropriate inventory conditions, which fabricators handle rare materials without damage. This knowledge prevents costly mistakes—a single slab of bookmatched marble improperly stored or transported can represent tens of thousands of dollars in loss.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Technology and Systems Integration
            </h2>
            <p className="text-gray-600 mb-6">
              High-end homes incorporate technology seamlessly—sophisticated systems that enhance life without demanding attention. Lighting scenes adapt to time of day and activity. Climate systems maintain precise conditions in every room. Audio fills spaces with music that seems to emanate from the architecture itself. Security systems protect without visible intrusion. Entertainment systems deliver experiences rivaling commercial theaters.
            </p>
            <p className="text-gray-600 mb-6">
              Achieving this integration requires planning from project inception. Low-voltage infrastructure—the backbone of smart home systems—must be designed alongside electrical and mechanical systems. Equipment rooms need appropriate space, power, cooling, and access. Technology consultants join our team early, ensuring their requirements shape building design rather than being awkwardly accommodated after the fact.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Quality Assurance and Project Management
            </h2>
            <p className="text-gray-600 mb-6">
              High-end construction demands superior project management. Our dedicated project managers maintain daily presence on site, catching issues before they become problems. Quality inspections occur at every milestone, with deficiencies corrected before work proceeds. Documentation captures every decision and installation, creating permanent records for future reference and maintenance.
            </p>
            <p className="text-gray-600 mb-6">
              We involve clients appropriately—enough to ensure decisions align with their vision, not so much that they become overwhelmed by technical details. Regular progress meetings, photo documentation, and milestone walkthroughs keep clients informed. When selections must be made, we present curated options with clear recommendations rather than overwhelming arrays of choices. The goal is delivering your vision with minimal stress.
            </p>

            {/* Cost Table */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                High-End Construction Investment Guide
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-brand-green-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Construction Level</th>
                      <th className="px-6 py-4 text-left">Per Sq Ft Range</th>
                      <th className="px-6 py-4 text-left">Typical Project</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Premium Custom</td>
                      <td className="px-6 py-4">$350 - $500/sq ft</td>
                      <td className="px-6 py-4">$1.0M - $2.0M</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Luxury Custom</td>
                      <td className="px-6 py-4">$500 - $750/sq ft</td>
                      <td className="px-6 py-4">$2.0M - $4.0M</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Ultra-Luxury</td>
                      <td className="px-6 py-4">$750 - $1,000/sq ft</td>
                      <td className="px-6 py-4">$4.0M - $7.0M</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Exceptional Estate</td>
                      <td className="px-6 py-4">$1,000 - $1,500+/sq ft</td>
                      <td className="px-6 py-4">$7.0M - $10M+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Premium Custom includes quality custom finishes and solid construction. Luxury Custom adds imported materials and extensive custom millwork. Ultra-Luxury includes rare materials and master craftsmanship throughout. Exceptional Estate represents truly extraordinary construction with museum-quality execution. Land, pools, landscaping, and furnishings are additional. All prices reflect 2024 Tampa Bay market rates.
              </p>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              High-End Home Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Diamond className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Premium Materials</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Imported natural stone</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Exotic hardwood flooring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>European fixtures and hardware</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Custom-milled millwork</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Master Craftsmanship</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Furniture-grade cabinetry</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Artisan plaster finishes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Custom metalwork</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Hand-finished details</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Advanced Systems</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Whole-home automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>High-efficiency HVAC</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Distributed audio/video</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Integrated security</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Star className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Luxury Amenities</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Wine cellars and bars</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Home theaters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Spa and wellness rooms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Resort-style outdoor living</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Tampa Bay's Premier Neighborhoods
            </h2>
            <p className="text-gray-600 mb-6">
              High-end construction finds appropriate settings in Tampa Bay's most desirable neighborhoods. Davis Islands and Beach Park in South Tampa offer established prestige with waterfront opportunities. Avila's guarded gates protect substantial estates. Clearwater Beach and Belleair Shore provide Gulf-front luxury. Newer developments in Odessa and Lutz offer acreage for grand estates with privacy.
            </p>
            <p className="text-gray-600 mb-6">
              Location selection affects both lifestyle and investment value. Waterfront properties command substantial premiums but offer irreplaceable views and direct water access. Gated communities provide security and like-minded neighbors. School districts matter for family buyers. We help clients balance these considerations against budget and lifestyle priorities.
            </p>

            {/* FAQ Section */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How long does high-end home construction take?
                  </h3>
                  <p className="text-gray-600">
                    Expect 18-30 months for most high-end projects, with very complex or large estates potentially taking longer. This timeline reflects the reality that quality cannot be rushed—materials require sourcing lead times, craftsmanship requires patience, and proper curing of finishes requires appropriate time. We provide realistic schedules and communicate proactively about any changes.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How do you ensure quality throughout construction?
                  </h3>
                  <p className="text-gray-600">
                    Quality systems include: detailed specifications approved before construction begins; material samples and mock-ups reviewed before installation; daily on-site supervision by experienced project managers; milestone inspections with documented checklists; and final punch list review with clients before completion. We catch and correct issues early rather than discovering them at the end.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    What warranties do you provide?
                  </h3>
                  <p className="text-gray-600">
                    We provide comprehensive warranties exceeding industry standards: one year on workmanship covering all aspects of construction; two years on mechanical, electrical, and plumbing systems; and ten years on structural elements. Many materials and systems carry manufacturer warranties extending even longer. We remain available after warranty periods for service and future modifications.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How involved should clients be during construction?
                  </h3>
                  <p className="text-gray-600">
                    We tailor involvement to client preferences. Some clients visit weekly for detailed walkthroughs; others prefer monthly summaries and trust our judgment on details. Most fall somewhere between. We require client participation at critical decision points—material selections, system configurations, and milestone approvals—but handle routine construction decisions based on approved plans and specifications.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Do high-end homes hold their value?
                  </h3>
                  <p className="text-gray-600">
                    Quality construction typically appreciates better than average construction, though location remains the primary value driver. High-end homes in desirable areas with quality schools and amenities appreciate strongly. Premium materials and systems reduce maintenance costs and extend useful life. Distinctive architecture by recognized designers can command premiums. We help clients make decisions that balance immediate satisfaction with long-term value.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Build Something Exceptional
            </h2>
            <p className="text-gray-600 mb-6">
              If you're ready to create a home that represents the finest in design and construction—a residence that will be admired for generations—Florida Construction Specialists has the expertise, craftsman network, and commitment to quality that exceptional projects demand. We build homes for clients who recognize the difference between good and extraordinary.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us to discuss your vision for a high-end home in Tampa Bay. We're ready to turn exceptional plans into exceptional reality.
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
            Ready to Build Your Exceptional Home?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a consultation on high-end custom home construction in Tampa Bay.
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
