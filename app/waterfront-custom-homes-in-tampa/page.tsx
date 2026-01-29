import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Waves, Anchor, Shield, Sun } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Waterfront Custom Homes in Tampa | Luxury Bayfront Living - Florida Construction Specialists",
  description: "Build your dream waterfront custom home in Tampa Bay. Hurricane-resistant construction, private docks, elevated foundations. Luxury coastal living from $750K-$5M+.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Waterfront Custom Homes in Tampa", href: "/waterfront-custom-homes-in-tampa/" },
];

const internalLinks = [
  { href: "/services/residential/waterfront-homes/", label: "Waterfront Home Construction" },
  { href: "/climate-resilient-custom-homes-in-tampa/", label: "Climate-Resilient Construction" },
  { href: "/services/residential/hurricane-resistant-construction/", label: "Hurricane-Resistant Building" },
  { href: "/tampa-luxury-custom-home-building-services/", label: "Luxury Home Services" },
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
            alt="Luxury waterfront custom home in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Waterfront Custom Homes in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Experience luxury bayfront living with custom homes designed for Tampa Bay's unique coastal environment. Private docks, hurricane-resistant construction, and panoramic water views that define the Florida lifestyle.
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
              Tampa Bay's 700 miles of coastline offer some of Florida's most spectacular waterfront living opportunities. From the prestigious addresses of Davis Islands and Harbour Island to the serene bayfront estates of Apollo Beach and the Gulf-access properties of St. Pete Beach, Florida Construction Specialists has been crafting luxury waterfront custom homes for over two decades. Our deep expertise in coastal construction ensures your dream home withstands everything Florida's environment presents while maximizing every inch of your water views.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Tampa Bay's Premier Waterfront Neighborhoods
            </h2>
            <p className="text-gray-600 mb-6">
              The Tampa Bay waterfront market spans diverse communities, each with distinct character and opportunities. Davis Islands remains one of Tampa's most coveted addresses, where bayfront lots command $1.5-4 million before construction and custom homes regularly exceed $5 million in total investment. The island's protected harbor location, proximity to downtown Tampa, and established neighborhood appeal make it ideal for those seeking urban waterfront sophistication.
            </p>
            <p className="text-gray-600 mb-6">
              Harbour Island and Channelside offer a different waterfront experience—condominium-dominated areas where the rare single-family lots allow for exclusive custom builds with downtown skyline views and immediate access to the Tampa Riverwalk. South of the city, Apollo Beach and Ruskin provide more expansive lots with direct Tampa Bay access at more accessible price points, while still supporting luxury construction in the $1-3 million range.
            </p>
            <p className="text-gray-600 mb-6">
              For Gulf of Mexico frontage, Clearwater Beach, Indian Rocks Beach, and Pass-a-Grille offer beachfront opportunities ranging from cottage teardowns to estate-scale properties. These locations command premium prices but offer the ultimate Florida lifestyle—sunset views, white sand beaches, and the gentle Gulf waters just steps from your door.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Waterfront Location Comparison</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Bay & River Front</h4>
                  <ul className="space-y-1 text-blue-900">
                    <li>• Davis Islands: $2.5M - $8M+ total</li>
                    <li>• Harbour Island: $2M - $5M+ total</li>
                    <li>• Apollo Beach: $1M - $3.5M total</li>
                    <li>• Bayshore Boulevard: $1.5M - $4M total</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Gulf Front</h4>
                  <ul className="space-y-1 text-blue-900">
                    <li>• Clearwater Beach: $3M - $10M+ total</li>
                    <li>• Indian Rocks: $2M - $6M total</li>
                    <li>• Pass-a-Grille: $2.5M - $7M total</li>
                    <li>• St. Pete Beach: $2M - $8M total</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Specialized Waterfront Construction Techniques
            </h2>
            <p className="text-gray-600 mb-6">
              Building on Tampa Bay's waterfront requires expertise that goes far beyond standard residential construction. Our foundation systems address the unique challenges of coastal sites, including elevated water tables, potential storm surge, and corrosive salt air. We utilize deep piling systems—often driven 30-50 feet to reach stable bearing strata—combined with reinforced concrete grade beams that transfer loads while resisting lateral forces from wind and water.
            </p>
            <p className="text-gray-600 mb-6">
              Elevated construction has become standard for our waterfront builds, with first-floor living spaces positioned 12-18 feet above grade depending on FEMA flood zone requirements and client preferences. This elevation not only provides flood protection but creates dramatic architectural opportunities—we design parking and storage at ground level while capturing maximum water views from elevated living areas, outdoor terraces, and rooftop decks.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Hurricane-Resistant Coastal Design
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay's waterfront properties face the full force of tropical weather, making hurricane resistance essential rather than optional. Our waterfront custom homes exceed Florida Building Code requirements with concrete block or poured concrete construction, impact-rated windows and doors throughout, and roof systems engineered to withstand 180+ mph winds. These aren't just building code checkboxes—they're comprehensive systems that have protected our clients' homes through multiple hurricane seasons.
            </p>
            <p className="text-gray-600 mb-6">
              We address wind-driven rain infiltration with advanced water management systems including continuous air and water barriers, properly detailed flashing at all penetrations, and sloped outdoor living areas that direct water away from the structure. Salt air corrosion—a constant challenge in coastal construction—is mitigated through stainless steel fasteners, marine-grade aluminum components, and protective coatings on all exposed metal.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Private Docks and Marine Facilities
            </h2>
            <p className="text-gray-600 mb-6">
              For many waterfront homeowners, boat access is the primary reason for choosing a bayfront property. Florida Construction Specialists coordinates complete marine facility construction including private docks, boat lifts, seawalls, and davit systems. We navigate the complex permitting requirements through Tampa Bay regulatory agencies, Army Corps of Engineers, and local environmental boards—a process that typically takes 6-12 months for new dock construction.
            </p>
            <p className="text-gray-600 mb-6">
              Our dock designs accommodate everything from small runabouts to 60+ foot yachts, with composite decking that resists marine environments, LED lighting for evening entertaining, and electrical and water service for vessel maintenance. Boat lifts range from simple 10,000-pound capacity units for bay boats to heavy-duty 50,000+ pound systems for larger sport fishing vessels. We also construct floating docks, kayak launches, and paddleboard storage for those who prefer non-motorized water access.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Maximizing Water Views
            </h2>
            <p className="text-gray-600 mb-6">
              The entire purpose of waterfront living is connecting with the water, and our designs prioritize views from every possible angle. Expansive sliding glass doors—often 12-16 feet wide—disappear into wall pockets to merge indoor and outdoor spaces. Multi-story window walls capture bay views from multiple levels simultaneously. Strategic placement of kitchens, master suites, and living areas ensures that daily activities unfold against a backdrop of Tampa Bay's ever-changing waters.
            </p>
            <p className="text-gray-600 mb-6">
              Outdoor living spaces extend the home's footprint toward the water with covered lanais, summer kitchens, infinity pools that appear to merge with the bay, and elevated viewing decks. We design these spaces for the Florida lifestyle—screened areas for bug-free evening relaxation, open terraces for capturing Gulf breezes, and shaded retreats for afternoon escapes from the summer sun.
            </p>

            {/* Cost Table */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Waterfront Custom Home Investment Guide
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-brand-green-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Home Size</th>
                      <th className="px-6 py-4 text-left">Bayfront Build</th>
                      <th className="px-6 py-4 text-left">Premium Waterfront</th>
                      <th className="px-6 py-4 text-left">Estate Class</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">3,000 sq ft</td>
                      <td className="px-6 py-4">$750,000 - $950,000</td>
                      <td className="px-6 py-4">$1.0M - $1.3M</td>
                      <td className="px-6 py-4">$1.4M - $1.8M</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">4,500 sq ft</td>
                      <td className="px-6 py-4">$1.1M - $1.4M</td>
                      <td className="px-6 py-4">$1.5M - $2.0M</td>
                      <td className="px-6 py-4">$2.1M - $2.7M</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">6,000 sq ft</td>
                      <td className="px-6 py-4">$1.5M - $1.9M</td>
                      <td className="px-6 py-4">$2.0M - $2.7M</td>
                      <td className="px-6 py-4">$2.8M - $3.6M</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">8,000+ sq ft</td>
                      <td className="px-6 py-4">$2.0M - $2.5M</td>
                      <td className="px-6 py-4">$2.7M - $3.6M</td>
                      <td className="px-6 py-4">$3.8M - $5M+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Construction costs only—does not include land. Prices reflect 2024 Tampa Bay market rates. Bayfront includes elevated construction and hurricane-rated systems. Premium adds high-end finishes and expanded outdoor living. Estate Class includes custom dock facilities and premium marine features.
              </p>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Waterfront Home Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Storm Protection</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Elevated foundations above flood zones</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Impact-rated windows and doors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>180+ mph wind-rated roof systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Reinforced concrete construction</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Anchor className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Marine Facilities</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Private dock construction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Boat lifts (10,000-50,000+ lbs)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Seawall installation and repair</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Kayak/paddleboard launches</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Waves className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Outdoor Living</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Infinity pools overlooking the bay</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Covered lanais and summer kitchens</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Rooftop observation decks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Fire features and water features</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Sun className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Coastal Materials</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Marine-grade stainless hardware</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Composite decking systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Corrosion-resistant finishes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Salt-tolerant landscaping</span>
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
                    What are the additional costs of building waterfront versus inland?
                  </h3>
                  <p className="text-gray-600">
                    Waterfront construction in Tampa Bay typically costs 20-35% more than comparable inland builds due to elevated foundations, enhanced hurricane systems, marine-grade materials, and specialized permitting. A 4,000 sq ft inland home at $300/sq ft might cost $400-425/sq ft on the waterfront. However, waterfront properties also appreciate faster and command significant premiums at resale, often offsetting the additional construction investment.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How long does the dock permitting process take in Tampa Bay?
                  </h3>
                  <p className="text-gray-600">
                    New dock permits in Tampa Bay typically require 6-12 months for approval, involving FDEP, Army Corps of Engineers, and local environmental agencies. Modifications to existing docks may process faster (3-6 months). We recommend starting the permitting process early in your home design phase so dock construction can coincide with or immediately follow home completion. Our team handles all permit applications and coordinates required environmental surveys.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    What flood insurance considerations affect waterfront homes?
                  </h3>
                  <p className="text-gray-600">
                    Most Tampa Bay waterfront properties fall within FEMA flood zones requiring flood insurance. However, our elevated construction strategies can significantly reduce premiums. Building your lowest finished floor above the Base Flood Elevation (BFE) by 2-4 feet can reduce annual flood insurance costs by 50-75%. We work with FEMA Elevation Certificate requirements to document your home's elevation and minimize insurance costs.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Can I build a pool at my waterfront property?
                  </h3>
                  <p className="text-gray-600">
                    Yes, though waterfront pool construction requires additional engineering and permitting. We design pools that complement your water views—often infinity-edge designs that visually merge with Tampa Bay. Elevated properties may require structural pools integrated into the foundation system. Pool placement must account for setback requirements, seawall locations, and environmental considerations. Our design team creates seamless indoor-outdoor transitions that maximize both pool and bay enjoyment.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How do you protect against salt air corrosion?
                  </h3>
                  <p className="text-gray-600">
                    Salt air is the persistent enemy of coastal construction, and we address it comprehensively. All fasteners and hardware are stainless steel (316 grade for maximum corrosion resistance). Exterior metals receive marine-grade coatings. HVAC systems use coated coils designed for coastal environments. We specify windows with corrosion-resistant frames and recommend regular maintenance protocols to our clients. With proper materials and maintenance, waterfront homes can match inland longevity.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Begin Your Waterfront Dream
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay offers some of Florida's most spectacular waterfront living opportunities, and Florida Construction Specialists has the expertise to make your coastal dream a reality. From navigating complex permitting to engineering foundations that withstand storms, from designing expansive water views to constructing private docks for your vessel, we handle every aspect of waterfront custom home construction.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us today to discuss your waterfront property and vision. Whether you've already secured the perfect bayfront lot or you're still searching for your ideal location, our team can guide you through the process of creating Tampa Bay's next exceptional waterfront estate.
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
            Ready to Build Your Waterfront Dream Home?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a free consultation on luxury waterfront custom home construction in Tampa Bay.
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
