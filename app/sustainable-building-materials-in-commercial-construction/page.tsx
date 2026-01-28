import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Leaf, Recycle, Sun, Droplets, Wind, Building } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Sustainable Building Materials in Commercial Construction - Florida Construction Specialists",
  description: "Florida Construction Specialists is revolutionizing commercial construction in Tampa with innovative and sustainable building materials. Discover eco-friendly solutions for your project.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Sustainable Building Materials in Commercial Construction", href: "/sustainable-building-materials-in-commercial-construction/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/services/commercial/medical-construction/", label: "Medical Facility Construction" },
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
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Sustainable commercial construction project in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Sustainable Building Materials Transforming Commercial Construction in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Florida Construction Specialists is revolutionizing commercial construction in Tampa with innovative and sustainable building materials. Discover how eco-friendly construction creates lasting value for your business.
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

      {/* Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              The commercial construction industry in Tampa Bay is experiencing a fundamental shift toward sustainable building practices. As Florida's leading commercial contractor serving Tampa, Lakeland, Sarasota, and the surrounding areas, Florida Construction Specialists is at the forefront of this green building revolution. Sustainable building materials not only reduce environmental impact but also deliver significant long-term cost savings, improved occupant health, and enhanced property values for commercial real estate throughout Central Florida.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Why Sustainable Materials Matter for Tampa Bay Commercial Construction
            </h2>
            <p className="text-gray-600 mb-6">
              Florida's unique climate and environmental considerations make sustainable building materials particularly important for commercial construction in the Tampa Bay area. With intense solar radiation, high humidity, frequent tropical storms, and stringent energy codes, choosing the right sustainable materials can dramatically impact building performance, operational costs, and environmental footprint.
            </p>
            <p className="text-gray-600 mb-6">
              Tampa Bay businesses are increasingly recognizing that sustainable construction isn't just an environmental statement—it's a sound business decision. Green buildings command higher lease rates, experience lower vacancy rates, and demonstrate superior long-term value retention compared to conventional structures. Additionally, many corporate tenants now require sustainable buildings to meet their own environmental commitments and ESG (Environmental, Social, and Governance) goals.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Top Sustainable Building Materials for Florida Commercial Projects
            </h2>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                <Recycle className="w-6 h-6" />
                Recycled Steel and Metal Products
              </h3>
              <p className="text-gray-600 mb-4">
                Steel is one of the most recycled materials on Earth, and using recycled steel in commercial construction significantly reduces the environmental impact of your project. In Tampa Bay's hurricane-prone environment, steel structures offer exceptional wind resistance while requiring less raw material than traditional framing methods.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Contains 25-100% recycled content depending on the product</li>
                <li>Fully recyclable at end of building life</li>
                <li>Superior hurricane resistance crucial for Florida</li>
                <li>Termite-proof—essential in Tampa's climate</li>
                <li>Reduces construction waste significantly</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                <Sun className="w-6 h-6" />
                Cool Roofing Systems
              </h3>
              <p className="text-gray-600 mb-4">
                Cool roofing technology is particularly valuable in Tampa's intense sun, reflecting solar radiation and reducing building heat absorption. Florida Construction Specialists installs advanced cool roof systems that can reduce rooftop temperatures by up to 50°F compared to traditional dark roofs.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Reflective coatings with Solar Reflectance Index (SRI) ratings above 78</li>
                <li>TPO and PVC membrane systems with superior UV resistance</li>
                <li>Green roof systems that provide natural insulation</li>
                <li>Can reduce cooling costs by 15-30% in Florida's climate</li>
                <li>Extends roof life by reducing thermal stress</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                <Building className="w-6 h-6" />
                Insulated Concrete Forms (ICFs)
              </h3>
              <p className="text-gray-600 mb-4">
                ICF construction is gaining popularity throughout Tampa Bay for its combination of energy efficiency, storm resistance, and durability. These foam blocks create permanent insulation on both sides of reinforced concrete walls, delivering exceptional thermal performance.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>R-values of R-22 or higher, exceeding Florida Energy Code requirements</li>
                <li>Hurricane-rated construction—withstands winds exceeding 200 mph</li>
                <li>Reduces HVAC requirements by 50-70%</li>
                <li>Excellent sound insulation for commercial applications</li>
                <li>Fire-resistant construction meeting highest safety standards</li>
              </ul>
            </div>

            <div className="bg-cyan-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                <Droplets className="w-6 h-6" />
                Low-VOC and Non-Toxic Finishes
              </h3>
              <p className="text-gray-600 mb-4">
                Indoor air quality is crucial for commercial spaces, and sustainable finishes help create healthier work environments. Florida Construction Specialists specifies low-VOC and zero-VOC products throughout our projects.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Zero-VOC paints and coatings from Benjamin Moore, Sherwin-Williams</li>
                <li>Natural linoleum and cork flooring options</li>
                <li>Formaldehyde-free insulation and composite materials</li>
                <li>Water-based sealants and adhesives</li>
                <li>Improves occupant health and productivity</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Sustainable Material Cost Comparison
            </h2>
            <p className="text-gray-600 mb-4">
              While sustainable materials often have higher upfront costs, the total cost of ownership typically favors green construction. Here's how sustainable options compare to conventional materials for Tampa Bay commercial projects:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Material Category</th>
                    <th className="px-6 py-3 text-left">Premium Over Conventional</th>
                    <th className="px-6 py-3 text-left">Payback Period</th>
                    <th className="px-6 py-3 text-left">Annual Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Cool Roofing</td>
                    <td className="px-6 py-4">10-20%</td>
                    <td className="px-6 py-4">3-5 years</td>
                    <td className="px-6 py-4">$0.15-0.30/sq ft</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">ICF Construction</td>
                    <td className="px-6 py-4">3-8%</td>
                    <td className="px-6 py-4">5-7 years</td>
                    <td className="px-6 py-4">$0.40-0.80/sq ft</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">High-Performance Windows</td>
                    <td className="px-6 py-4">15-30%</td>
                    <td className="px-6 py-4">4-8 years</td>
                    <td className="px-6 py-4">$0.10-0.25/sq ft</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Recycled Steel Framing</td>
                    <td className="px-6 py-4">5-10%</td>
                    <td className="px-6 py-4">Immediate*</td>
                    <td className="px-6 py-4">Termite resistance savings</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">LED Lighting Systems</td>
                    <td className="px-6 py-4">20-40%</td>
                    <td className="px-6 py-4">1-3 years</td>
                    <td className="px-6 py-4">60-75% energy reduction</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mb-8">*Steel framing often costs less than wood in Florida due to termite treatment requirements for wood construction</p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Florida-Specific Sustainable Material Considerations
            </h2>
            <p className="text-gray-600 mb-6">
              Building sustainably in Tampa Bay requires understanding Florida's unique environmental challenges. Our team at Florida Construction Specialists selects materials that perform exceptionally in our specific climate conditions:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Wind className="w-5 h-5" />
                  Hurricane Resistance
                </h4>
                <p className="text-gray-600">
                  Sustainable doesn't mean sacrificing safety. All materials we specify meet or exceed Florida Building Code requirements for wind resistance. Our ICF and steel-framed structures routinely achieve Miami-Dade County certification, the most stringent wind standard in the nation.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Droplets className="w-5 h-5" />
                  Moisture Management
                </h4>
                <p className="text-gray-600">
                  Florida's high humidity demands careful material selection. We use moisture-resistant substrates, breathable weather barriers, and mold-resistant finishes to ensure long-term building health without relying on chemical treatments.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Sun className="w-5 h-5" />
                  UV Resistance
                </h4>
                <p className="text-gray-600">
                  Tampa receives over 2,900 hours of sunshine annually, making UV degradation a significant concern. Our sustainable material selections include UV-stabilized products that maintain appearance and performance for decades.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Leaf className="w-5 h-5" />
                  Pest Resistance
                </h4>
                <p className="text-gray-600">
                  Termites cause over $2 billion in damage annually in Florida. Our sustainable approaches favor naturally pest-resistant materials like steel framing, fiber cement siding, and composite decking over chemically treated alternatives.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Innovative Sustainable Materials We're Using in Tampa
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists stays at the forefront of sustainable building innovation. Here are some cutting-edge materials we're incorporating into Tampa Bay commercial projects:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Mass Timber Construction:</strong>
                  <span className="text-gray-600"> Cross-laminated timber (CLT) and glue-laminated beams offer a renewable alternative to steel and concrete for multi-story commercial buildings, sequestering carbon while providing excellent structural performance.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Recycled Aggregate Concrete:</strong>
                  <span className="text-gray-600"> We incorporate recycled concrete and crusite in our foundation and structural work, reducing virgin material consumption while maintaining structural integrity.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Electrochromic Glass:</strong>
                  <span className="text-gray-600"> Smart glass technology that automatically tints based on sunlight intensity, dramatically reducing cooling loads while maintaining views—perfect for Tampa's sunny climate.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Aerogel Insulation:</strong>
                  <span className="text-gray-600"> Space-age insulation material that provides R-10 per inch, allowing us to achieve superior thermal performance with thinner wall assemblies.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Bio-Based Spray Foam:</strong>
                  <span className="text-gray-600"> Closed-cell spray foam insulation made from renewable plant oils, providing superior air sealing and insulation while reducing petroleum-based content.</span>
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              LEED and Green Building Certification Support
            </h2>
            <p className="text-gray-600 mb-6">
              Sustainable material selection is crucial for achieving green building certifications. Florida Construction Specialists has extensive experience with LEED (Leadership in Energy and Environmental Design), WELL Building Standard, and Florida Green Building Coalition certifications. Our team can guide material selections that contribute to certification points across multiple categories including:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">26%</div>
                <div className="text-sm text-gray-600">Recycled Content Materials</div>
                <div className="text-xs text-gray-500">Typical project average</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">75%</div>
                <div className="text-sm text-gray-600">Regional Materials</div>
                <div className="text-xs text-gray-500">Within 500 miles</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">90%+</div>
                <div className="text-sm text-gray-600">Waste Diversion</div>
                <div className="text-xs text-gray-500">From landfills</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Local Sustainable Material Sources in Tampa Bay
            </h2>
            <p className="text-gray-600 mb-6">
              Using locally sourced materials reduces transportation emissions and supports the Tampa Bay economy. Florida Construction Specialists has established relationships with sustainable material suppliers throughout the region, including recycled concrete providers in Hillsborough County, Florida-based lumber mills with FSC certification, and local manufacturers of energy-efficient windows and doors designed specifically for Florida's climate.
            </p>

            {/* FAQ Section */}
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions About Sustainable Building Materials
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How much more do sustainable materials cost compared to conventional options?
                  </h3>
                  <p className="text-gray-600">
                    Sustainable materials typically add 2-8% to initial construction costs for Tampa Bay commercial projects. However, most sustainable upgrades pay for themselves within 3-7 years through reduced energy costs, lower maintenance requirements, and utility incentives. Many sustainable options, like recycled steel framing, are actually cost-competitive or cheaper than conventional alternatives when factoring in Florida's termite treatment requirements for wood construction.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Can sustainable buildings withstand Florida hurricanes?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely. Many sustainable building systems actually exceed conventional construction in hurricane resistance. ICF (Insulated Concrete Form) construction, for example, creates solid reinforced concrete walls that routinely achieve ratings exceeding 200 mph wind speeds. Recycled steel framing offers superior wind resistance compared to wood. All sustainable materials we specify meet or exceed Florida Building Code requirements for High-Velocity Hurricane Zones.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Are sustainable materials available locally in Tampa?
                  </h3>
                  <p className="text-gray-600">
                    Yes, Tampa Bay has a growing network of sustainable material suppliers. We source recycled steel from regional mills, FSC-certified lumber from Florida operations, locally manufactured high-performance windows, and recycled concrete aggregate from Hillsborough County facilities. Using regional materials reduces transportation emissions and typically improves project timelines.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How do sustainable materials affect building insurance rates?
                  </h3>
                  <p className="text-gray-600">
                    Many sustainable building features can reduce insurance premiums. Impact-resistant roofing and windows, steel or concrete construction, and cool roof systems often qualify for insurance discounts in Florida. Some insurers offer specific "green building" endorsements that recognize the enhanced durability and lower risk profile of sustainable construction.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    What certifications verify that materials are truly sustainable?
                  </h3>
                  <p className="text-gray-600">
                    Look for recognized third-party certifications including FSC (Forest Stewardship Council) for wood products, Cradle to Cradle certification for manufacturing processes, GREENGUARD for low-emission products, and Energy Star ratings for equipment and windows. Florida Construction Specialists maintains documentation of all environmental certifications for materials used in our projects, supporting LEED and other green building certification applications.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Services"
            links={internalLinks}
          />
        </div>
      </section>

      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Build Sustainably with Florida Construction Specialists
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ready to incorporate sustainable materials into your Tampa Bay commercial project? Contact us today for a free consultation.
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
