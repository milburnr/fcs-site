import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, CheckCircle, Pencil, Building, Sun, Wind, Users, Shield, Award, Lightbulb, Target, Palette } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Mastering Commercial Construction Design in Florida - Florida Construction Specialists",
  description: "Learn the ins and outs of architectural design, commercial building design, and commercial construction design with our comprehensive guide for Florida projects.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Mastering Commercial Construction Design in Florida", href: "/mastering-commercial-construction-design-in-florida/" },
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
            alt="Commercial construction design in Florida"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Mastering Commercial Construction Design in Florida
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Learn the ins and outs of architectural design, commercial building design, and commercial construction design with our comprehensive guide for Florida projects in Tampa Bay.
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
              Great commercial construction begins with great design. The design phase sets the foundation for everything that follows—construction costs, building performance, occupant experience, and long-term value. As Florida's leading commercial contractor serving Tampa, Lakeland, Sarasota, and the surrounding areas, Florida Construction Specialists understands how design decisions impact construction outcomes. This guide explores the principles of effective commercial design in Florida's unique environment.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              The Importance of Climate-Responsive Design in Florida
            </h2>
            <p className="text-gray-600 mb-6">
              Florida's subtropical climate fundamentally shapes how commercial buildings should be designed. Unlike projects in temperate climates, Tampa Bay commercial buildings must prioritize cooling over heating, manage intense solar radiation, resist hurricanes, and handle high humidity. Buildings designed without understanding these factors perform poorly and cost more to operate.
            </p>
            <p className="text-gray-600 mb-6">
              The best Florida commercial designs work with the climate rather than fighting it. Strategic building orientation, appropriate glazing, effective shading, and moisture management create buildings that are comfortable, efficient, and durable in our demanding environment.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Key Principles of Florida Commercial Design
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Sun className="w-5 h-5" />
                  Solar Orientation
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Building orientation dramatically impacts energy performance in Tampa Bay:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• East-west elongation minimizes sun exposure</li>
                  <li>• Limit glazing on east and west facades</li>
                  <li>• North-facing entries reduce heat gain</li>
                  <li>• South-facing glass is easier to shade</li>
                  <li>• Can reduce cooling loads by 20-30%</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Hurricane Resistance
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Tampa Bay's hurricane exposure requires thoughtful structural design:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Hip roofs outperform gables in high winds</li>
                  <li>• Impact-rated glazing or shutters required</li>
                  <li>• Continuous load paths to foundation</li>
                  <li>• Minimize roof overhangs and projections</li>
                  <li>• Protected entries reduce debris intrusion</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Daylighting Strategy
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Effective daylighting reduces energy use while improving occupant wellbeing:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Clerestories and light shelves bring light deep</li>
                  <li>• North-facing glazing provides soft, even light</li>
                  <li>• High-performance glazing controls solar gain</li>
                  <li>• Interior layouts optimize natural light access</li>
                  <li>• Automated shading manages glare</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Wind className="w-5 h-5" />
                  Ventilation and Moisture Control
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Florida's humidity demands careful moisture management:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Exterior-first air barrier strategy</li>
                  <li>• Vapor retarders on exterior (not interior)</li>
                  <li>• Continuous HVAC operation for dehumidification</li>
                  <li>• Vestibules at main entries</li>
                  <li>• Adequate outdoor air for pressurization</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Commercial Building Types and Design Considerations
            </h2>
            <p className="text-gray-600 mb-6">
              Different commercial building types have unique design requirements. Florida Construction Specialists brings experience across all major categories:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Building Type</th>
                    <th className="px-6 py-3 text-left">Key Design Priorities</th>
                    <th className="px-6 py-3 text-left">Florida-Specific Considerations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Office Buildings</td>
                    <td className="px-6 py-4">Daylight, flexibility, technology integration</td>
                    <td className="px-6 py-4">East/west shading, cooling diversity</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Retail/Restaurant</td>
                    <td className="px-6 py-4">Visibility, customer flow, brand identity</td>
                    <td className="px-6 py-4">Entry vestibules, solar exposure</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Medical Facilities</td>
                    <td className="px-6 py-4">Infection control, patient experience, flexibility</td>
                    <td className="px-6 py-4">AHCA compliance, emergency power</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Industrial/Warehouse</td>
                    <td className="px-6 py-4">Efficient operations, loading, clear heights</td>
                    <td className="px-6 py-4">Roof ventilation, thermal mass</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Multi-Family</td>
                    <td className="px-6 py-4">Unit layouts, amenities, noise control</td>
                    <td className="px-6 py-4">Balcony wind loads, impact glazing</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              The Design-Build Advantage
            </h2>
            <p className="text-gray-600 mb-6">
              Traditional design-bid-build separates design from construction, often resulting in designs that are difficult or expensive to build. Design-build, Florida Construction Specialists' preferred delivery method, integrates design and construction under single responsibility, delivering significant advantages:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-lg">
                <Target className="w-8 h-8 text-brand-green shrink-0" />
                <div>
                  <h4 className="font-bold text-brand-green-dark mb-1">Constructability Input from Day One</h4>
                  <p className="text-gray-600">Our construction team participates in design development, ensuring designs are practical to build. We identify value engineering opportunities early, when changes are easy and free.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-lg">
                <Building className="w-8 h-8 text-brand-green shrink-0" />
                <div>
                  <h4 className="font-bold text-brand-green-dark mb-1">Cost Control Throughout Design</h4>
                  <p className="text-gray-600">Real-time cost feedback during design prevents "sticker shock" when bids come in. Designs evolve with budget awareness, delivering maximum value within your financial parameters.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-lg">
                <Users className="w-8 h-8 text-brand-green shrink-0" />
                <div>
                  <h4 className="font-bold text-brand-green-dark mb-1">Single Point of Accountability</h4>
                  <p className="text-gray-600">No finger-pointing between designer and builder when issues arise. Florida Construction Specialists owns both design and construction, simplifying communication and ensuring problems get solved.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-lg">
                <Award className="w-8 h-8 text-brand-green shrink-0" />
                <div>
                  <h4 className="font-bold text-brand-green-dark mb-1">Faster Project Delivery</h4>
                  <p className="text-gray-600">Design-build allows construction to begin while design is finalized, reducing overall project duration by 15-25%. Foundation work can proceed while interior details are still being developed.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Essential Design Elements for Tampa Bay Commercial Buildings
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                <Palette className="w-6 h-6" />
                Building Envelope Design
              </h3>
              <p className="text-gray-600 mb-4">
                The building envelope—walls, roof, windows, and doors—is the primary defense against Tampa Bay's harsh climate. Effective envelope design includes:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-brand-green-dark text-sm mb-2">Wall Assemblies</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Continuous insulation to minimize thermal bridging</li>
                    <li>• Weather-resistant barriers managing moisture</li>
                    <li>• Light-colored finishes reducing heat absorption</li>
                    <li>• Durable cladding resisting UV degradation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-green-dark text-sm mb-2">Roofing Systems</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Cool roofing with high Solar Reflectance Index</li>
                    <li>• FM Global or equivalent wind ratings</li>
                    <li>• Proper slope for drainage</li>
                    <li>• Adequate insulation (minimum R-25)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-green-dark text-sm mb-2">Glazing Selection</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Low Solar Heat Gain Coefficient (0.25 or lower)</li>
                    <li>• Impact-rated for hurricane zones</li>
                    <li>• Spectrally selective coatings</li>
                    <li>• Appropriate visible light transmission</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-green-dark text-sm mb-2">Air Sealing</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Continuous air barrier system</li>
                    <li>• Sealed penetrations and transitions</li>
                    <li>• Vestibules at high-traffic entries</li>
                    <li>• Building pressurization strategy</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Mechanical System Design for Florida
            </h2>
            <p className="text-gray-600 mb-6">
              HVAC design is particularly critical in Tampa Bay's climate, where cooling dominates energy consumption. Effective mechanical design includes:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Right-Sized Equipment:</strong>
                  <span className="text-gray-600"> Oversized systems short-cycle, reducing efficiency and dehumidification. Proper load calculations ensure optimal sizing.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Dehumidification Capacity:</strong>
                  <span className="text-gray-600"> Florida's humidity requires systems designed for latent load removal, not just sensible cooling. Dedicated outdoor air systems with energy recovery are increasingly common.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Zoning Strategy:</strong>
                  <span className="text-gray-600"> Perimeter zones need different treatment than interior zones due to solar loads. Variable refrigerant flow (VRF) systems excel at managing diverse zones.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Controls Integration:</strong>
                  <span className="text-gray-600"> Building automation systems optimize performance, schedule operation, and provide ongoing monitoring to maintain efficiency.</span>
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Balancing Aesthetics, Function, and Budget
            </h2>
            <p className="text-gray-600 mb-6">
              Effective commercial design creates buildings that look good, work well, and respect budget constraints. Our design-build process facilitates this balance through:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li><strong>Value Engineering:</strong> Finding less expensive ways to achieve design intent without sacrificing quality or appearance</li>
              <li><strong>Material Selection:</strong> Choosing materials that balance aesthetics, durability, maintenance, and cost for Tampa Bay conditions</li>
              <li><strong>Phasing Options:</strong> Designing core infrastructure to support future expansion when budgets are constrained</li>
              <li><strong>Life-Cycle Analysis:</strong> Evaluating total cost of ownership, not just first cost</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Florida Construction Specialists Design-Build Capabilities
            </h2>
            <p className="text-gray-600 mb-6">
              Our design-build team includes experienced architects, engineers, and construction professionals who collaborate to deliver exceptional Florida commercial buildings. We handle:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <Pencil className="w-8 h-8 text-brand-green mx-auto mb-2" />
                <h4 className="font-bold text-brand-green-dark">Architectural Design</h4>
                <p className="text-sm text-gray-600">Space planning, aesthetics, code compliance</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <Building className="w-8 h-8 text-brand-green mx-auto mb-2" />
                <h4 className="font-bold text-brand-green-dark">Structural Engineering</h4>
                <p className="text-sm text-gray-600">Hurricane-resistant structural systems</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <Shield className="w-8 h-8 text-brand-green mx-auto mb-2" />
                <h4 className="font-bold text-brand-green-dark">MEP Engineering</h4>
                <p className="text-sm text-gray-600">Efficient mechanical, electrical, plumbing</p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions About Commercial Design
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How long does the design phase typically take?
                  </h3>
                  <p className="text-gray-600">
                    Design timelines vary based on project complexity. A straightforward tenant improvement might require 4-8 weeks of design. Ground-up commercial buildings typically need 3-6 months for complete design development. Design-build allows construction to begin before design is 100% complete, reducing overall project duration.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How much should design services cost?
                  </h3>
                  <p className="text-gray-600">
                    Design fees typically range from 5-12% of construction cost depending on project complexity and the extent of services. Design-build often reduces total design cost by eliminating redundant coordination and reducing change-driven redesign. Our design-build proposals include all design services for transparent, predictable pricing.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Can you work with our architect, or do we have to use yours?
                  </h3>
                  <p className="text-gray-600">
                    We can work either way. For projects with existing architectural relationships, we collaborate closely with your design team as construction manager. For design-build projects, our in-house capabilities provide single-source convenience. We'll recommend the approach that best serves your project's needs.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How do you ensure designs meet our budget?
                  </h3>
                  <p className="text-gray-600">
                    Budget alignment is a core benefit of design-build. We establish target budgets at project inception and provide real-time cost feedback as design progresses. If design direction exceeds budget, we immediately identify alternatives. You never experience the surprise of bids exceeding budget that plagues traditional design-bid-build.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    What role do I play in the design process?
                  </h3>
                  <p className="text-gray-600">
                    You're central to the process. Design begins with understanding your business needs, operational requirements, and aesthetic preferences. We present options, explain trade-offs, and incorporate your feedback throughout. Formal design reviews at key milestones ensure the project stays aligned with your vision before construction begins.
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
            Ready to Design Your Commercial Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists today to discuss design-build services for your Tampa Bay commercial project.
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
