import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Users, Home, Heart, Shield } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { FAQWithSchema } from "@/components/FAQ";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa's Custom Family Home Builders | Design for Life - Florida Construction Specialists",
  description: "Build your family's dream home in Tampa. Kid-friendly designs, flex spaces, multi-generational options, and homes that grow with your family. Custom family homes from $400K-$3M+.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa's Custom Family Home Builders", href: "/tampas-custom-family-home-builders/" },
];

const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/custom-home-accessibility-features-in-tampa/", label: "Accessibility Features" },
  { href: "/creating-unique-bedrooms-in-tampa-custom-homes/", label: "Bedroom Design" },
  { href: "/tampa-luxury-custom-home-building-services/", label: "Luxury Custom Homes" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const faqs = [
  {
    question: "How many bedrooms should we plan for a growing family?",
    answer: "Plan for your family at its expected maximum size, plus one. A family planning three children should consider 5 bedrooms—one for each child, master, and guest/flex. This provides room for guests, home offices, or unexpected additions while avoiding costly additions later. Building extra space now costs far less than adding on after construction completes.",
  },
  {
    question: "What features help with busy morning routines?",
    answer: "We design for morning efficiency: Jack-and-Jill bathrooms serving two bedrooms, mudrooms with cubbies for each family member, kitchen islands with seating for quick breakfasts, and garage access that doesn't require walking through living areas with dirty shoes. Ample master bathrooms with his/hers vanities let parents prepare simultaneously. Laundry rooms near bedrooms rather than hidden in basements reduce morning scrambles.",
  },
  {
    question: "How do you design for supervision of young children?",
    answer: "Open floor plans create sightlines from kitchen work areas to play zones. Kitchen windows overlook backyards and pools. Smart home cameras can display on kitchen screens. Play areas remain visible from primary living spaces rather than tucked into distant rooms. As children age and require less supervision, these spaces naturally transition to independent teen areas.",
  },
  {
    question: "Should we include a pool with young children?",
    answer: "Many families choose pools for the lifestyle benefits, implementing appropriate safety measures: four-sided fencing with self-closing gates, door alarms, pool alarms, and constant supervision. Others defer pool construction until children are older. We can design pool-ready yards with fencing, electrical, and plumbing provisions that make future pool construction easier when the time is right.",
  },
  {
    question: "What accommodations should we make for future accessibility?",
    answer: "Smart planning now simplifies future needs: wider doorways throughout (36\" standard), one bedroom suite on the first floor, bathroom blocking for future grab bars, and elevator shaft provisions if multi-story. These provisions cost little during construction but dramatically ease future adaptations—whether for aging parents visiting, temporary injuries, or aging in place yourselves decades from now.",
  },
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
            alt="Custom family home construction in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa's Custom Family Home Builders
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Build a home that grows with your family. Thoughtful design for busy households, kid-friendly features, flex spaces for changing needs, and multi-generational options—all in Tampa Bay's best family neighborhoods.
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
              Family life demands homes that work as hard as parents do—flexible spaces for homework and play, durable finishes that survive childhood, room configurations that adapt as children grow, and outdoor areas where memories are made. Florida Construction Specialists has built hundreds of custom family homes throughout Tampa Bay, understanding the unique requirements of busy households with children. We design homes for real family life, not staged photo shoots, creating environments where everyone thrives.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Designing for Family Life
            </h2>
            <p className="text-gray-600 mb-6">
              Family homes require different thinking than empty-nester estates or couples' retreats. We consider traffic flow during chaotic mornings—how multiple family members navigate from bedrooms to bathrooms to kitchen to garage without bottlenecks. We plan sightlines that let parents supervise children throughout common areas while cooking dinner. We position homework zones, media spaces, and quiet retreats so different activities can occur simultaneously without conflict.
            </p>
            <p className="text-gray-600 mb-6">
              Storage capacity is frequently underestimated. Families accumulate belongings at alarming rates—sports equipment, art supplies, seasonal decorations, outgrown clothes saved for siblings. Our designs incorporate generous closets, mudroom lockers, garage storage systems, and hidden compartments that contain the chaos. Well-designed storage keeps homes functional and attractive despite the inevitable accumulation.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
                <Users className="w-6 h-6" />
                Family Home Design Priorities
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Daily Function</h4>
                  <ul className="space-y-1 text-blue-900">
                    <li>• Efficient morning routines</li>
                    <li>• Parent supervision sightlines</li>
                    <li>• Homework and study areas</li>
                    <li>• Abundant storage throughout</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Future Flexibility</h4>
                  <ul className="space-y-1 text-blue-900">
                    <li>• Convertible flex rooms</li>
                    <li>• Bedroom wing expansion</li>
                    <li>• Aging-in-place provisions</li>
                    <li>• Multi-generational potential</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Durable, Kid-Friendly Materials
            </h2>
            <p className="text-gray-600 mb-6">
              Luxury and durability aren't mutually exclusive—they just require thoughtful material selection. We specify flooring that withstands dropped toys, tracked mud, and spilled juice while still looking beautiful: porcelain tile with realistic stone or wood appearances, luxury vinyl plank in high-traffic zones, and stain-resistant hardwoods with durable finishes. Carpet, where desired, gets stain-resistant treatments and replaceable squares in playrooms.
            </p>
            <p className="text-gray-600 mb-6">
              Countertop and surface selections emphasize resilience. Quartz provides practically indestructible kitchen surfaces. Solid surface materials enable seamless cleaning in bathrooms. Cabinet finishes resist fingerprints and clean easily. Paint specifications include washable and scrubable finishes in high-use areas. These choices aren't compromises—they're smart selections that maintain appearance through years of family use.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Flex Spaces That Evolve
            </h2>
            <p className="text-gray-600 mb-6">
              Today's playroom becomes tomorrow's teen hangout, next decade's home gym, and eventually an art studio for empty-nester hobbies. We design flex spaces with this evolution in mind: proper electrical and networking for future uses, plumbing rough-ins for wet bars or half baths, ceiling heights that accommodate various functions, and finishes that adapt to different purposes.
            </p>
            <p className="text-gray-600 mb-6">
              Bonus rooms above garages, basement areas, and extra bedrooms can serve multiple purposes throughout your family's lifecycle. Some clients plan these spaces specifically for changing needs—a nursery adjacent to the master that becomes a home office when children move to their own rooms, or a ground-floor suite that serves guests now and parents later.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Multi-Generational Living
            </h2>
            <p className="text-gray-600 mb-6">
              Extended family living has become increasingly common in Tampa Bay, with grandparents providing childcare, adult children returning home, or aging parents needing nearby support. We design multi-generational homes with appropriate privacy and independence: separate entries, kitchenettes or full kitchens, private outdoor spaces, and en-suite bedrooms that function as complete living units while remaining connected to the main home.
            </p>
            <p className="text-gray-600 mb-6">
              Accessibility considerations ensure these spaces work for family members of all ages and abilities. Wide doorways, grab bar backing, accessible bathrooms, and single-level living options serve both young children and aging grandparents. These features add minimal cost during construction while dramatically expanding your home's utility throughout its lifetime.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Outdoor Living for Families
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's climate supports year-round outdoor living that families shouldn't miss. Our designs maximize functional outdoor space: covered patios for rainy-day play, pools with shallow areas for young swimmers, defined play areas visible from kitchen windows, and outdoor kitchens for family dinners under the stars. Screened enclosures extend comfortable hours against summer mosquitoes.
            </p>
            <p className="text-gray-600 mb-6">
              Safety considerations guide outdoor design. Pool fencing and alarms meet code while remaining unobtrusive. Play areas avoid traffic routes and hazardous plantings. Lighting extends safe outdoor hours into evening. Landscape maintenance requirements balance beauty with realistic expectations for busy families—native plants and automated irrigation reduce demands on parents' limited time.
            </p>

            {/* Cost Table */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Custom Family Home Investment Guide
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-brand-green-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Family Home Level</th>
                      <th className="px-6 py-4 text-left">Typical Size</th>
                      <th className="px-6 py-4 text-left">Investment Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Family Essential</td>
                      <td className="px-6 py-4">2,500-3,500 sq ft</td>
                      <td className="px-6 py-4">$400,000 - $650,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Family Premium</td>
                      <td className="px-6 py-4">3,500-4,500 sq ft</td>
                      <td className="px-6 py-4">$650,000 - $950,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Family Luxury</td>
                      <td className="px-6 py-4">4,500-6,000 sq ft</td>
                      <td className="px-6 py-4">$950,000 - $1.5M</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Multi-Generational Estate</td>
                      <td className="px-6 py-4">6,000+ sq ft</td>
                      <td className="px-6 py-4">$1.5M - $3M+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Family Essential includes 4 bedrooms, open floor plan, and functional family features. Premium adds flex spaces, premium finishes, and enhanced outdoor living. Luxury includes resort-style amenities and high-end finishes throughout. Multi-Generational includes separate living quarters. Pool and premium landscaping are additional. All prices reflect 2024 Tampa Bay market rates.
              </p>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Family Home Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Home className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Functional Layout</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Open kitchen/living flow</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Mudroom/drop zones</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Split bedroom arrangements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Homework/study areas</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Durability</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Stain-resistant flooring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Quartz countertops</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Washable wall finishes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Commercial-grade finishes</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Flex Spaces</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Playroom/teen space</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Media/game room</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Convertible guest/office</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Future-proof rough-ins</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Outdoor Living</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Family-friendly pools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Covered outdoor living</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Play area design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Outdoor kitchen/dining</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Tampa Bay's Best Family Neighborhoods
            </h2>
            <p className="text-gray-600 mb-6">
              We build family homes throughout Tampa Bay's most desirable school districts and family-friendly communities. South Tampa neighborhoods like Palma Ceia and Beach Park offer walkable access to excellent schools and parks. Westchase, Carrollwood, and New Tampa provide larger lots and newer infrastructure. Wesley Chapel and Land O'Lakes combine space and value with rapidly improving schools. We help you evaluate neighborhoods based on your family's priorities—schools, commutes, activities, and community character.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Build Your Family's Future Home
            </h2>
            <p className="text-gray-600 mb-6">
              Your family deserves a home designed for how you actually live—not a showpiece that can't survive daily use. Florida Construction Specialists creates custom family homes throughout Tampa Bay that accommodate busy schedules, growing children, changing needs, and the beautiful chaos of family life. From toddler years through teen years and beyond, we build homes that grow with your family.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us to discuss your family's custom home dreams. We'll help you plan a home where memories are made and your family thrives.
            </p>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema 
        items={faqs} 
        title="Frequently Asked Questions" 
        description="Common questions about custom family home construction in Tampa"
      />

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
            Ready to Build Your Family's Dream Home?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a consultation on custom family home construction in Tampa Bay.
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
