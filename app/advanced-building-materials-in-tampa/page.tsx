import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Building, Leaf, Sun, Wind, Droplets, Shield, Zap, Award } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Advanced Building Materials in Tampa - Florida Construction Specialists",
  description: "Discover advanced building materials transforming Tampa Bay construction. From sustainable options to high-performance systems, elevate your commercial project.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Advanced Building Materials in Tampa", href: "/advanced-building-materials-in-tampa/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/sustainable-building-materials-in-commercial-construction/", label: "Sustainable Building Materials" },
  { href: "/zero-net-energy-boosting-commercial-construction/", label: "Zero Net Energy Construction" },
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
            alt="Advanced building materials for Tampa Bay construction"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Advanced Building Materials in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Elevate your Tampa Bay commercial construction with advanced building materials. Florida Construction Specialists brings cutting-edge sustainable and high-performance materials to every project.
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
              The materials you choose for commercial construction fundamentally shape building performance, operating costs, and long-term value. As Tampa Bay's leading commercial contractor serving Tampa, Lakeland, Sarasota, and the surrounding areas, Florida Construction Specialists stays at the forefront of advanced building materials—from high-performance sustainable options to innovative systems designed specifically for Florida's demanding climate. Understanding these materials helps property owners make informed decisions that create lasting value.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Why Advanced Materials Matter in Tampa Bay
            </h2>
            <p className="text-gray-600 mb-6">
              Florida's unique climate demands materials that can handle intense solar radiation, high humidity, salt air exposure, hurricane-force winds, and year-round cooling demands. Advanced building materials are engineered to perform under these challenging conditions while delivering sustainability benefits, reduced operating costs, and enhanced durability. The right material choices can reduce energy consumption by 25-40%, extend building lifespan, and minimize maintenance requirements.
            </p>
            <p className="text-gray-600 mb-6">
              Beyond performance, advanced materials increasingly support LEED certification, FGBC certification, and other green building goals. Many provide recycled content, regional sourcing, low emissions, and improved indoor environmental quality—all contributing to certification points and healthier buildings.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Advanced Envelope Materials
            </h2>
            <p className="text-gray-600 mb-6">
              The building envelope—walls, roof, windows, and doors—determines how well a building resists heat, moisture, and air infiltration. Advanced envelope materials dramatically improve performance:
            </p>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                <Building className="w-6 h-6" />
                Insulated Concrete Forms (ICF)
              </h3>
              <p className="text-gray-600 mb-4">
                ICF construction creates reinforced concrete walls with permanent foam insulation on both sides, delivering exceptional thermal performance and hurricane resistance for Tampa Bay commercial buildings.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-brand-green-dark text-sm mb-2">Performance Benefits:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• R-22+ wall insulation</li>
                    <li>• 50-70% HVAC reduction</li>
                    <li>• Exceeds 200 mph wind ratings</li>
                    <li>• Superior sound insulation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-green-dark text-sm mb-2">Sustainability Features:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 50%+ recycled content foam</li>
                    <li>• Reduced concrete usage</li>
                    <li>• Extended building lifespan</li>
                    <li>• LEED credit contribution</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                <Sun className="w-6 h-6" />
                Cool Roofing Systems
              </h3>
              <p className="text-gray-600 mb-4">
                Advanced cool roofing materials reflect solar radiation and reduce rooftop temperatures by up to 50°F compared to conventional dark roofs—particularly valuable in Tampa's intense sun.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-brand-green-dark text-sm mb-2">Options Available:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• TPO and PVC membranes (SRI 78+)</li>
                    <li>• Reflective metal roofing</li>
                    <li>• Cool-coat modified bitumen</li>
                    <li>• Green roof systems</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-green-dark text-sm mb-2">Benefits in Tampa:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 15-30% cooling cost reduction</li>
                    <li>• Extended roof membrane life</li>
                    <li>• Reduced urban heat island effect</li>
                    <li>• LEED and Energy Code credits</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                <Zap className="w-6 h-6" />
                High-Performance Glazing
              </h3>
              <p className="text-gray-600 mb-4">
                Advanced window systems manage solar heat gain while maintaining views and natural light—critical for balancing energy efficiency with daylighting in Tampa's sunny climate.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-brand-green-dark text-sm mb-2">Technologies:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Low-E coatings (SHGC < 0.25)</li>
                    <li>• Spectrally selective glazing</li>
                    <li>• Electrochromic (smart) glass</li>
                    <li>• Triple-pane assemblies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-green-dark text-sm mb-2">Performance:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 50-70% solar heat reduction</li>
                    <li>• Maintains natural light levels</li>
                    <li>• Hurricane impact ratings</li>
                    <li>• UV protection for interiors</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Advanced Structural Materials
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Recycled Steel Framing
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Steel with 25-100% recycled content offers superior hurricane resistance while eliminating termite concerns.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Exceeds wind load requirements</li>
                  <li>• Termite-proof construction</li>
                  <li>• Fully recyclable at end of life</li>
                  <li>• Precise fabrication, less waste</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Leaf className="w-5 h-5" />
                  Mass Timber Construction
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Cross-laminated timber (CLT) and glulam offer sustainable structural alternatives to steel and concrete.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Carbon-sequestering material</li>
                  <li>• Beautiful exposed wood interiors</li>
                  <li>• Faster construction timelines</li>
                  <li>• Fire-resistant when properly designed</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Advanced Sustainable Materials
            </h2>
            <p className="text-gray-600 mb-6">
              Sustainability-focused materials reduce environmental impact while often delivering superior performance:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Low-Carbon Concrete:</strong>
                  <span className="text-gray-600"> Concrete with supplementary cementitious materials (fly ash, slag) reduces embodied carbon by 30-50% while maintaining or improving performance.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Recycled Aggregate:</strong>
                  <span className="text-gray-600"> Crushed recycled concrete replaces virgin aggregate in new concrete and base applications, diverting material from landfills.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">FSC-Certified Wood:</strong>
                  <span className="text-gray-600"> Forest Stewardship Council certification ensures wood products come from responsibly managed forests.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Bio-Based Insulation:</strong>
                  <span className="text-gray-600"> Spray foam and batt insulation made from renewable plant oils reduces petroleum dependence while providing excellent performance.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Recycled-Content Finishes:</strong>
                  <span className="text-gray-600"> Terrazzo, carpet tile, and ceiling products with high recycled content earn LEED credits while performing excellently.</span>
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Advanced Indoor Environmental Quality Materials
            </h2>
            <p className="text-gray-600 mb-6">
              Materials affecting indoor air quality and occupant health are increasingly important for commercial buildings:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Material Category</th>
                    <th className="px-6 py-3 text-left">Standard Product</th>
                    <th className="px-6 py-3 text-left">Advanced Alternative</th>
                    <th className="px-6 py-3 text-left">Health Benefit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Paints & Coatings</td>
                    <td className="px-6 py-4">Standard latex</td>
                    <td className="px-6 py-4">Zero-VOC paints</td>
                    <td className="px-6 py-4">No off-gassing, immediate occupancy</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Flooring</td>
                    <td className="px-6 py-4">Vinyl/carpet</td>
                    <td className="px-6 py-4">FloorScore certified</td>
                    <td className="px-6 py-4">Low emission, improved air quality</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Insulation</td>
                    <td className="px-6 py-4">Fiberglass batts</td>
                    <td className="px-6 py-4">Formaldehyde-free</td>
                    <td className="px-6 py-4">No formaldehyde exposure</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Composite Wood</td>
                    <td className="px-6 py-4">Standard MDF/plywood</td>
                    <td className="px-6 py-4">NAF (no added formaldehyde)</td>
                    <td className="px-6 py-4">Eliminates formaldehyde emissions</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Adhesives/Sealants</td>
                    <td className="px-6 py-4">Solvent-based</td>
                    <td className="px-6 py-4">Low-VOC water-based</td>
                    <td className="px-6 py-4">Reduced respiratory irritation</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Cost Comparison: Advanced vs. Conventional Materials
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Material</th>
                    <th className="px-6 py-3 text-left">Cost Premium</th>
                    <th className="px-6 py-3 text-left">Annual Savings</th>
                    <th className="px-6 py-3 text-left">Payback</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">ICF vs. CMU Walls</td>
                    <td className="px-6 py-4">3-8%</td>
                    <td className="px-6 py-4">$0.40-0.80/SF</td>
                    <td className="px-6 py-4">5-7 years</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Cool Roof vs. Standard</td>
                    <td className="px-6 py-4">10-20%</td>
                    <td className="px-6 py-4">$0.15-0.30/SF</td>
                    <td className="px-6 py-4">3-5 years</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">High-Performance Glass</td>
                    <td className="px-6 py-4">15-30%</td>
                    <td className="px-6 py-4">$0.10-0.25/SF</td>
                    <td className="px-6 py-4">4-8 years</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Recycled Steel Framing</td>
                    <td className="px-6 py-4">5-10%</td>
                    <td className="px-6 py-4">Termite savings</td>
                    <td className="px-6 py-4">Immediate*</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Zero-VOC Finishes</td>
                    <td className="px-6 py-4">5-15%</td>
                    <td className="px-6 py-4">Health/productivity</td>
                    <td className="px-6 py-4">Qualitative</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mb-8">*Steel often costs less than wood in Florida when factoring in required termite treatment</p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Florida-Specific Material Considerations
            </h2>
            <p className="text-gray-600 mb-6">
              Advanced materials must address Tampa Bay's specific environmental challenges:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Wind className="w-5 h-5" />
                  Hurricane Resistance
                </h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Impact-resistant glazing (large/small missile)</li>
                  <li>• High-wind rated roofing assemblies</li>
                  <li>• Reinforced structural connections</li>
                  <li>• Pressure-rated exterior doors</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Droplets className="w-5 h-5" />
                  Moisture Management
                </h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Vapor-permeable weather barriers</li>
                  <li>• Moisture-resistant substrates</li>
                  <li>• Mold-resistant gypsum board</li>
                  <li>• Proper drainage plane systems</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Sun className="w-5 h-5" />
                  UV Resistance
                </h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• UV-stabilized exterior products</li>
                  <li>• Fade-resistant finishes</li>
                  <li>• Solar-reflective coatings</li>
                  <li>• Protected sealants and gaskets</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Pest Resistance
                </h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Steel and concrete framing</li>
                  <li>• Fiber cement siding</li>
                  <li>• Composite decking</li>
                  <li>• Naturally resistant hardwoods</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Local Material Sources in Tampa Bay
            </h2>
            <p className="text-gray-600 mb-6">
              Regional sourcing reduces transportation impacts and supports the Tampa Bay economy. Florida Construction Specialists maintains relationships with local suppliers of advanced materials:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Recycled Concrete:</strong> Hillsborough County recyclers provide crushed concrete aggregate for foundations and paving.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Florida Limestone:</strong> Locally quarried limestone for facades and hardscaping.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Regional Concrete Plants:</strong> Low-carbon concrete mixes available from Tampa Bay producers.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Florida-Rated Windows:</strong> Manufacturers producing impact-rated windows designed for Florida codes.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Partner with Tampa Bay's Material Experts
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists brings deep expertise in advanced building materials to every commercial project. We understand which materials perform best in Tampa Bay's demanding climate, how to balance performance with cost, and how material choices contribute to LEED and other green building certifications. Our pre-construction services include detailed material evaluation to identify the optimal products for your specific project goals.
            </p>

            {/* FAQ Section */}
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions About Advanced Building Materials
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How much do advanced materials add to construction costs?
                  </h3>
                  <p className="text-gray-600">
                    Advanced materials typically add 5-15% to affected building systems, but many deliver rapid payback through reduced operating costs. Some advanced options, like recycled steel framing in Florida, can actually cost less than conventional alternatives when factoring in termite treatment requirements. The total impact on project cost depends on which advanced materials you select and their scope within the project.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Which advanced materials offer the best ROI in Tampa Bay?
                  </h3>
                  <p className="text-gray-600">
                    Cool roofing typically offers the fastest payback (3-5 years) due to Tampa's intense sun. ICF construction provides excellent returns through dramatically reduced cooling costs plus hurricane resilience. High-performance glazing pays back over 4-8 years while providing comfort and daylight benefits from day one. Recycled steel framing often costs less than treated wood upfront while eliminating termite concerns permanently.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Are advanced materials as durable as conventional options?
                  </h3>
                  <p className="text-gray-600">
                    In most cases, advanced materials match or exceed conventional durability—that's often what makes them "advanced." ICF walls last indefinitely. Quality cool roofing systems outlast conventional roofs due to reduced thermal cycling. High-performance windows are typically more robust than standard options. We select materials with proven track records in Tampa Bay's demanding climate.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How do advanced materials contribute to LEED certification?
                  </h3>
                  <p className="text-gray-600">
                    Advanced materials earn LEED credits across multiple categories: recycled content and regional materials in Materials & Resources; high-performance envelope and glazing in Energy & Atmosphere; low-VOC products in Indoor Environmental Quality. We help identify material choices that maximize certification points while meeting performance and budget goals.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Can advanced materials withstand Florida hurricanes?
                  </h3>
                  <p className="text-gray-600">
                    Many advanced materials offer superior hurricane resistance. ICF construction routinely achieves ratings exceeding 200 mph winds. Impact-resistant glazing protects against flying debris. Steel framing provides excellent wind resistance. We specify materials that meet or exceed Florida Building Code requirements for High-Velocity Hurricane Zones, ensuring your investment is protected.
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
            Ready to Explore Advanced Materials?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss advanced building materials for your Tampa Bay project.
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
