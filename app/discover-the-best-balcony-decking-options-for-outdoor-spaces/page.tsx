import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/Schema";
import { Phone, CheckCircle, HelpCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Best Balcony Decking Options for High-Rise Buildings Tampa",
  description: "Premium balcony decking options for Tampa Bay high-rise condominiums. Tile, pavers, deck coatings, and composite systems with expert installation and SB 4-D compliance.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Best Balcony Decking Options", href: "/discover-the-best-balcony-decking-options-for-outdoor-spaces/" },
];

const internalLinks = [
  { href: "/top-balcony-flooring-materials-for-style-durability/", label: "Balcony Flooring Materials" },
  { href: "/balcony-waterproofing-for-long-lasting-protection/", label: "Balcony Waterproofing" },
  { href: "/balcony-restoration-services/", label: "Balcony Restoration" },
  { href: "/services/residential/balcony-reconstruction/", label: "SB4-D Compliance" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const faqs = [
  {
    question: "What decking options work best for high-rise condominium balconies?",
    answer: "High-rise balconies require decking materials that withstand Florida's harsh conditions while meeting weight and fire code requirements. Popular options include porcelain pavers (durable, low maintenance, pedestal-mounted over membrane), natural stone tiles (premium appearance, heavier weight consideration), deck coating systems (seamless waterproofing with decorative finish), and interlocking deck tiles (removable for maintenance access). Material selection depends on building structure capacity, waterproofing system requirements, aesthetic goals, and budget. Each option offers distinct advantages for different situations."
  },
  {
    question: "How does SB 4-D affect balcony decking material selection in Florida?",
    answer: "SB 4-D's milestone inspection requirements influence decking decisions in several ways. Inspectors must be able to assess structural conditions, which may require decking removal or inspection ports. Pedestal-mounted systems provide easy access to waterproofing membranes. Heavy decking materials affect structural load calculations that must be documented. SIRS requirements mandate reserve funding for decking replacement, favoring materials with predictable service lives. When restoring balconies for SB 4-D compliance, decking selection should facilitate future inspections rather than complicate them."
  },
  {
    question: "What is the difference between deck coatings and overlay decking systems?",
    answer: "Deck coating systems apply directly to the concrete substrate, providing both waterproofing and finished walking surface in one integrated system. They're thinner, lighter, and maintain the original balcony elevation. Overlay decking systems (tiles, pavers, composite planks) install over a separate waterproofing membrane, creating a finished surface above the structural slab. Overlays add height (typically 1-3 inches), require drainage consideration, but provide more design options and allow waterproofing maintenance without replacing the finished surface."
  },
  {
    question: "Can tile or pavers be installed on existing balcony surfaces?",
    answer: "Yes, with proper preparation and appropriate installation methods. The existing surface must be structurally sound and properly waterproofed before overlay installation. Pedestal systems support pavers above the membrane without adhesive, allowing drainage and inspection access. Thin-set tile installation requires compatible waterproofing membranes rated for tile covering. Weight considerations are critical—added dead load from tile/mortar may exceed structural capacity of older balconies. Professional assessment determines whether overlay installation is feasible for your specific situation."
  },
  {
    question: "What is the cost of balcony decking for high-rise condominiums in Tampa?",
    answer: "Balcony decking costs vary significantly by material and installation method. Deck coating systems (integrated waterproofing/finish) cost $15-40 per square foot. Porcelain pavers on pedestals run $25-50 per square foot including waterproofing. Natural stone tile installations cost $30-60 per square foot. Interlocking deck tiles range $8-20 per square foot over existing surfaces. For a typical 50-square-foot high-rise balcony, expect $750-2,000 for coatings, $1,250-2,500 for pedestal pavers, or $1,500-3,000 for stone tile. Building-wide projects typically achieve 15-25% cost reductions."
  },
  {
    question: "How long do different balcony decking options last in Florida's climate?",
    answer: "Service life varies by material and maintenance practices. Quality deck coating systems last 15-25 years with periodic recoating every 5-10 years. Porcelain pavers can last 30+ years with minimal maintenance. Natural stone varies by type—granite and porcelain offer longest life, while softer stones may require sealing and show wear earlier. Composite deck tiles typically last 10-20 years before UV degradation affects appearance. Pedestal systems (the support structure) last 25+ years. Proper drainage, UV protection, and regular cleaning extend all system service lives."
  }
];

const costData = [
  { service: "Deck Coating System (waterproofing + finish)", costRange: "$15 - $40", perUnit: "Per sq ft" },
  { service: "Porcelain Pavers on Pedestals", costRange: "$25 - $50", perUnit: "Per sq ft" },
  { service: "Natural Stone Tile Installation", costRange: "$30 - $60", perUnit: "Per sq ft" },
  { service: "Interlocking Deck Tiles", costRange: "$8 - $20", perUnit: "Per sq ft" },
  { service: "Composite Plank System", costRange: "$20 - $40", perUnit: "Per sq ft" },
  { service: "Pedestal Support System", costRange: "$5 - $12", perUnit: "Per sq ft" },
  { service: "Typical Balcony (50 sq ft, coatings)", costRange: "$750 - $2,000", perUnit: "Per unit" },
  { service: "Typical Balcony (50 sq ft, pavers)", costRange: "$1,250 - $2,500", perUnit: "Per unit" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Balcony Decking Installation"
        serviceDescription="Premium balcony decking options for Tampa Bay high-rise condominiums. Tile, pavers, deck coatings, and composite systems with expert installation."
        city="Tampa"
        minPrice="750"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
            alt="Balcony decking options for high-rise buildings"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Discover the Best Balcony Decking Options for High-Rise Buildings
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Premium decking solutions for Tampa Bay condominiums that combine aesthetics, durability, and code compliance.
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
            <p className="text-gray-600 mb-6">
              Balcony decking transforms utilitarian concrete slabs into attractive outdoor living spaces that enhance both daily enjoyment and unit values. For high-rise condominiums, decking selection involves more than just aesthetics—structural capacity, waterproofing integration, fire code compliance, and maintenance accessibility all factor into the decision. Florida Construction Specialists helps Tampa Bay building owners and associations select and install balcony decking systems that perform beautifully throughout their service lives.
            </p>

            <p className="text-gray-600 mb-6">
              Following Florida's SB 4-D legislation, decking selection has gained additional importance. Milestone structural inspections require access to evaluate waterproofing systems and structural conditions beneath finished surfaces. Decking materials that facilitate inspection access—rather than complicate it—support association compliance requirements while protecting the investment in quality finishes.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Understanding Decking System Types
            </h2>
            <p className="text-gray-600 mb-6">
              Balcony decking systems fall into two broad categories: integral systems that combine waterproofing and finished surface, and overlay systems that install over separate waterproofing membranes. Each approach offers distinct advantages, and the optimal choice depends on your building's specific conditions and requirements.
            </p>

            <p className="text-gray-600 mb-6">
              Integral deck coating systems apply directly to concrete substrates, providing waterproofing protection and decorative finish in a single, bonded system. These coatings are thin (typically 40-120 mils total thickness), maintaining original balcony elevations and door threshold relationships. Colors and textures can be customized, from solid colors to decorative chip broadcasts that simulate natural stone. Because the coating bonds directly to concrete, substrate preparation is critical for system success.
            </p>

            <p className="text-gray-600 mb-6">
              Overlay decking systems install above the structural slab and waterproofing membrane, creating a finished walking surface separate from the waterproofing layer. This separation offers several advantages: waterproofing can be maintained or replaced without disturbing decorative surfaces, drainage flows beneath the decking rather than across it, and a wider range of finish materials becomes possible. The trade-off includes added height (typically 1-3 inches), drainage complexity, and the need to coordinate two separate systems.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              SB 4-D Compliance Considerations
            </h2>
            <p className="text-gray-600 mb-6">
              Florida's SB 4-D legislation creates practical implications for balcony decking selection. Milestone inspections require engineers to assess structural conditions and waterproofing system performance. Decking materials that allow easy removal and replacement facilitate these inspections without requiring expensive reconstruction. Permanently adhered surfaces that must be destroyed for inspection access add cost and complexity to the inspection process.
            </p>

            <p className="text-gray-600 mb-6">
              Pedestal-supported paver systems offer particular advantages for SB 4-D compliance. Individual pavers lift out easily, providing immediate access to the waterproofing membrane beneath. After inspection, pavers reinstall without special tools or skills. This accessibility simplifies both scheduled inspections and emergency repairs if leaks develop. The slight additional cost of pedestal systems often pays for itself in reduced future maintenance complexity.
            </p>

            <p className="text-gray-600 mb-6">
              Structural load considerations affect SIRS reserve planning for associations. Heavier decking materials increase dead loads on balcony slabs—loads that must be accommodated within the structure's design capacity. Documentation of decking weights supports the engineering calculations that inform reserve studies. When decking replacement is eventually needed, reserve funding must be adequate to cover the selected system.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Porcelain Paver Systems
            </h2>
            <p className="text-gray-600 mb-6">
              Porcelain pavers have become the premium choice for high-rise balcony decking in Tampa Bay. These dense, virtually non-porous tiles offer exceptional durability, fade resistance, and low maintenance requirements. Available in sizes from 12x12 to 24x48 inches and thicknesses from 3/4 to 1 inch, porcelain pavers accommodate various design visions and structural requirements.
            </p>

            <p className="text-gray-600 mb-6">
              Pedestal support systems elevate porcelain pavers above the waterproofing membrane, creating a drainage cavity that allows water to flow freely to drains. Adjustable pedestals compensate for slope variations, creating level walking surfaces even on sloped balcony slabs. The elevated installation provides superior drainage performance while protecting the waterproofing system from UV exposure and mechanical damage from furniture.
            </p>

            <p className="text-gray-600 mb-6">
              Design options for porcelain pavers are virtually unlimited. Stone looks replicate granite, marble, travertine, and slate at a fraction of the weight and cost. Wood looks provide the warmth of timber without the maintenance requirements. Concrete and terrazzo patterns suit modern architectural styles. Custom sizes and patterns create distinctive installations that enhance building identity.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Deck Coating Systems
            </h2>
            <p className="text-gray-600 mb-6">
              Deck coating systems offer cost-effective, lightweight solutions that provide both waterproofing and finished surface in a single installation. Multi-coat systems typically include primers for adhesion, waterproofing membranes for protection, and topcoats for UV resistance, wear resistance, and aesthetics. Total system thickness of 40-120 mils maintains original elevations at doors and edges.
            </p>

            <p className="text-gray-600 mb-6">
              Decorative options for deck coatings include solid colors, multi-color fleck broadcasts, and quartz aggregate systems that create durable, attractive surfaces. Stencil patterns can simulate tile or stone at lower cost than actual tile installation. Slip-resistant textures ensure safe walking surfaces even when wet—an important consideration for Tampa Bay's frequent rainfall.
            </p>

            <p className="text-gray-600 mb-6">
              Maintenance requirements for deck coatings include periodic recoating (typically every 5-10 years) to maintain appearance and protection. Because coatings bond directly to concrete, surface preparation before recoating is critical. When properly maintained, quality deck coating systems can provide 20-25 years of service before complete replacement becomes necessary.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Natural Stone and Tile Options
            </h2>
            <p className="text-gray-600 mb-6">
              Natural stone tiles create luxurious balcony surfaces that enhance high-end condominium units. Granite, slate, and quartzite offer excellent durability for outdoor applications. Travertine and marble provide classic elegance but require sealing and more careful maintenance. Weight considerations become important with thick stone tiles—structural evaluation confirms that balcony slabs can support the added dead load.
            </p>

            <p className="text-gray-600 mb-6">
              Installation methods for stone tile depend on waterproofing system requirements. Thin-set applications bond tiles directly to compatible waterproofing membranes, creating a permanent installation. Pedestal support systems allow stone tiles (cut to paver dimensions) to install above membranes without adhesive, preserving inspection access. Mortar-bed installations over waterproofing provide maximum flexibility for irregular stone but add significant weight.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Balcony Decking Costs in Tampa Bay
          </h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-md">
              <thead className="bg-brand-green text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Decking Option</th>
                  <th className="px-6 py-4 text-left">Cost Range</th>
                  <th className="px-6 py-4 text-left">Unit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {costData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 text-gray-700">{item.service}</td>
                    <td className="px-6 py-4 text-brand-green-dark font-semibold">{item.costRange}</td>
                    <td className="px-6 py-4 text-gray-600">{item.perUnit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm">
            *Costs vary based on material selection, substrate condition, and project scale. Contact us for a detailed estimate.
          </p>
        </div>
      </section>

      {/* Why Choose FCS */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Choose Florida Construction Specialists
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "High-rise decking expertise",
              "SB 4-D compliance focus",
              "Multiple system options",
              "Waterproofing integration",
              "Quality material sourcing",
              "Experienced installation crews",
              "Comprehensive warranties",
              "Minimal resident disruption",
              "Tampa Bay-wide service"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-white rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-brand-green-dark hover:no-underline py-4">
                  <span className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Balcony Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Transform Your Balconies with Premium Decking
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for expert guidance on balcony decking options that enhance your building's appeal and value.
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
