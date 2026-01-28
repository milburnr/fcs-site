import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Leaf, Recycle, TreePine, Award } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa Custom Homes with Green Building Practices | LEED & FGBC Certified - Florida Construction Specialists",
  description: "Build a certified green custom home in Tampa with sustainable materials, low-impact construction, and LEED/FGBC certification. Healthy homes from $425K-$2M+.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa Custom Homes with Green Building Practices", href: "/tampa-custom-homes-with-green-building-practices/" },
];

const internalLinks = [
  { href: "/eco-friendly-custom-homes-in-tampa/", label: "Eco-Friendly Custom Homes" },
  { href: "/energy-efficient-custom-homes-in-tampa/", label: "Energy-Efficient Homes" },
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/climate-resilient-custom-homes-in-tampa/", label: "Climate-Resilient Construction" },
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
            alt="Green building custom home construction in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa Custom Homes with Green Building Practices
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Build responsibly with certified green construction. Sustainable materials, healthy indoor environments, minimal site impact, and third-party verified performance through LEED and FGBC programs.
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
              Green building goes beyond energy efficiency to encompass the entire lifecycle of your home—from responsible material sourcing through construction practices that minimize environmental impact to creating healthy indoor environments where your family thrives. Florida Construction Specialists has achieved certification through both LEED for Homes and Florida Green Building Coalition programs, bringing verified sustainable practices to custom homes throughout Tampa, St. Petersburg, Clearwater, and the greater Tampa Bay region.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              What Makes a Home Truly Green?
            </h2>
            <p className="text-gray-600 mb-6">
              Authentic green building addresses multiple dimensions of sustainability that extend far beyond solar panels and efficient appliances. It begins with site selection and development that minimizes impact on natural systems—protecting trees, managing stormwater, and reducing heat island effects. It continues through material selection that prioritizes recycled content, renewable resources, and local sourcing to reduce transportation impacts. And it culminates in construction practices that minimize waste, recycle job site materials, and protect air and water quality during building.
            </p>
            <p className="text-gray-600 mb-6">
              The result is a home that not only operates efficiently but was built responsibly, contains healthy materials, and will remain durable and adaptable for generations. Tampa Bay's environment—with its sensitive coastal ecosystems, summer heat, and hurricane exposure—makes green building practices particularly valuable. A green custom home here performs better, lasts longer, and maintains higher value than conventional construction.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center gap-2">
                <Award className="w-6 h-6" />
                Green Building Certification Options
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-green-900 mb-2">LEED for Homes</h4>
                  <ul className="space-y-1 text-green-900">
                    <li>• Nationally recognized certification</li>
                    <li>• Four levels: Certified to Platinum</li>
                    <li>• Strong resale value impact</li>
                    <li>• Comprehensive third-party verification</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-900 mb-2">FGBC Green Home</h4>
                  <ul className="space-y-1 text-green-900">
                    <li>• Florida-specific standards</li>
                    <li>• Four levels: Bronze to Platinum</li>
                    <li>• Insurance discount eligible</li>
                    <li>• Addresses Florida climate challenges</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Sustainable Site Development
            </h2>
            <p className="text-gray-600 mb-6">
              Every green custom home project begins with thoughtful site planning. We evaluate existing vegetation to determine which trees and native plants can be preserved and protected during construction. Mature trees provide shade that significantly reduces cooling costs—a single large oak can provide the cooling equivalent of 10 room air conditioners. Our construction fencing and root protection zones prevent damage that could kill trees years after construction completes.
            </p>
            <p className="text-gray-600 mb-6">
              Stormwater management goes beyond minimum code requirements in our green builds. Permeable paving, rain gardens, and bioswales filter and slow runoff that would otherwise carry pollutants into Tampa Bay. These features reduce your contribution to downstream flooding while recharging groundwater. On waterfront properties in Apollo Beach, Davis Islands, and Shore Acres, responsible stormwater management directly protects the waters that make your location special.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Responsible Material Selection
            </h2>
            <p className="text-gray-600 mb-6">
              Material choices in green construction prioritize environmental responsibility throughout the supply chain. We specify FSC-certified wood products from responsibly managed forests—ensuring that your beautiful hardwood floors didn't contribute to deforestation. Recycled-content materials, including steel, drywall, and insulation, reduce virgin resource consumption while often providing superior performance characteristics.
            </p>
            <p className="text-gray-600 mb-6">
              Local sourcing reduces transportation impacts and supports the Tampa Bay economy. Florida limestone and shell aggregate, regionally manufactured concrete products, and locally fabricated millwork all minimize the carbon footprint of your home's materials. When imported materials are necessary—Italian tile, exotic hardwoods—we work with suppliers who document responsible sourcing and efficient logistics.
            </p>
            <p className="text-gray-600 mb-6">
              Material durability is itself a green consideration. Products that last longer require fewer replacements over your home's lifespan, reducing long-term environmental impact. We select roofing, siding, and exterior materials rated for Tampa's demanding climate, with warranties and track records that ensure decades of performance. Fiber cement siding, metal roofing, and composite decking exemplify durable alternatives to products requiring frequent replacement.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Indoor Environmental Quality
            </h2>
            <p className="text-gray-600 mb-6">
              Your family spends most of their time indoors, making indoor air quality a critical green building focus. We eliminate sources of indoor pollution at the source through careful material specification: zero-VOC paints, formaldehyde-free insulation and cabinets, natural flooring materials, and low-emission adhesives and sealants. These choices prevent the "new house smell" that actually represents harmful off-gassing from conventional construction materials.
            </p>
            <p className="text-gray-600 mb-6">
              Ventilation systems provide continuous fresh air exchange without energy waste. Energy recovery ventilators (ERVs) bring in filtered outside air while recovering heating/cooling energy from exhaust air—maintaining efficiency while eliminating the stale, polluted air that accumulates in tightly sealed conventional homes. MERV-13 or higher filtration removes allergens, dust, and particulates that plague many Tampa residents, especially during pollen seasons.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Construction Waste Management
            </h2>
            <p className="text-gray-600 mb-6">
              Conventional construction sends enormous amounts of material to landfills—studies show 3-7 pounds of waste per square foot built. Our green construction practices dramatically reduce this through careful planning, material optimization, and comprehensive recycling programs. We sort and recycle cardboard, wood, metal, concrete, and drywall rather than sending everything to the dump. Dimensional lumber cut-offs find uses in blocking, bracing, and other applications rather than becoming waste.
            </p>
            <p className="text-gray-600 mb-6">
              Beyond recycling, we emphasize waste prevention through accurate material ordering and efficient cutting practices. Computer-optimized framing layouts minimize waste in lumber packages. Modular design and standard dimensions reduce the custom cutting that generates scrap. These practices reduce both environmental impact and material costs, with savings that partially offset green building premiums.
            </p>

            {/* Cost Table */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Green Building Investment Guide
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-brand-green-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Home Size</th>
                      <th className="px-6 py-4 text-left">FGBC Bronze/Silver</th>
                      <th className="px-6 py-4 text-left">LEED/FGBC Gold</th>
                      <th className="px-6 py-4 text-left">LEED Platinum</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">2,500 sq ft</td>
                      <td className="px-6 py-4">$425,000 - $525,000</td>
                      <td className="px-6 py-4">$550,000 - $675,000</td>
                      <td className="px-6 py-4">$700,000 - $875,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">3,500 sq ft</td>
                      <td className="px-6 py-4">$595,000 - $735,000</td>
                      <td className="px-6 py-4">$770,000 - $945,000</td>
                      <td className="px-6 py-4">$980,000 - $1.22M</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">4,500 sq ft</td>
                      <td className="px-6 py-4">$765,000 - $945,000</td>
                      <td className="px-6 py-4">$990,000 - $1.21M</td>
                      <td className="px-6 py-4">$1.26M - $1.57M</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">5,500+ sq ft</td>
                      <td className="px-6 py-4">$935,000 - $1.15M</td>
                      <td className="px-6 py-4">$1.21M - $1.48M</td>
                      <td className="px-6 py-4">$1.54M - $1.93M+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Prices include certification documentation and verification fees. FGBC Bronze/Silver represents 5-10% premium over conventional. LEED/FGBC Gold adds 10-15% premium with enhanced features. LEED Platinum requires 15-25% premium for maximum sustainable features. All prices reflect 2024 Tampa Bay market rates.
              </p>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Green Building Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <TreePine className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Site Sustainability</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Tree preservation and protection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Permeable paving and rain gardens</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Native and adapted landscaping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Erosion and sediment control</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Recycle className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Responsible Materials</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>FSC-certified wood products</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Recycled-content materials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Regional material sourcing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Durable, low-maintenance products</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Leaf className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Indoor Quality</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Zero-VOC paints and finishes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Formaldehyde-free materials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>ERV fresh air ventilation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>MERV-13+ air filtration</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Certification Benefits</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Third-party verification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Documented performance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Higher resale value</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Insurance discounts (FGBC)</span>
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
                    What's the difference between LEED and FGBC certification?
                  </h3>
                  <p className="text-gray-600">
                    LEED (Leadership in Energy and Environmental Design) is a national program with broad recognition and strong market value impact. FGBC (Florida Green Building Coalition) is tailored specifically to Florida's climate, construction practices, and regulatory environment, with criteria addressing hurricane resistance, humidity management, and other Florida-specific issues. Many clients pursue FGBC for its practical relevance and insurance discounts, while others prefer LEED's broader recognition. We can pursue either or both certifications.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How much do green building practices add to construction costs?
                  </h3>
                  <p className="text-gray-600">
                    Entry-level green certification (FGBC Bronze) typically adds 5-8% to construction costs—often offset by energy savings within 5-7 years. Gold-level certification adds 10-15%, while pursuing LEED Platinum requires 15-25% premium for comprehensive sustainable features. The value equation improves when you consider enhanced resale value (8-10% higher for certified homes), reduced operating costs, and health benefits of superior indoor air quality. Insurance discounts under FGBC further improve returns.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Can I get green certification for a home designed by my architect?
                  </h3>
                  <p className="text-gray-600">
                    Yes, though early involvement is important. We recommend engaging our green building team during schematic design to identify certification opportunities and avoid costly redesign later. Many architectural decisions—building orientation, window placement, material selection—significantly impact certification scores. We work collaboratively with your architect to integrate green features seamlessly into your design vision while meeting certification requirements.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Are green building materials as durable as conventional alternatives?
                  </h3>
                  <p className="text-gray-600">
                    In most cases, green materials match or exceed conventional durability—that's actually part of what makes them green. Products that last longer require fewer replacements over your home's lifespan. FSC-certified wood is identical to conventional lumber in performance. Recycled steel is actually superior to virgin steel. Low-VOC paints perform identically to conventional formulations. The key is selecting quality products, which we do regardless of certification goals.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    What ongoing requirements does green certification have?
                  </h3>
                  <p className="text-gray-600">
                    Most residential green certifications apply at the time of construction with no ongoing recertification requirements. However, maintaining your home's green features is important for realizing long-term benefits. We provide homeowner manuals documenting all green features and their maintenance requirements—filter change schedules, ERV maintenance, landscaping care for native plants, etc. Proper maintenance ensures your green home performs as designed for decades.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Build Green in Tampa Bay
            </h2>
            <p className="text-gray-600 mb-6">
              Green building represents the responsible choice for Tampa Bay's future—reducing strain on our natural resources while creating healthier, more efficient homes for your family. Florida Construction Specialists brings comprehensive green building expertise to every custom home project, whether you're pursuing formal certification or simply want to build more responsibly. Our experience with both LEED and FGBC programs ensures your project achieves maximum sustainability within your budget and design goals.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us to discuss how green building practices can enhance your custom home project. We'll explain your options, estimate costs and benefits, and help you make informed decisions about sustainable construction in Tampa Bay.
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
            Ready to Build a Certified Green Home?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a consultation on green building custom home construction in Tampa Bay.
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
