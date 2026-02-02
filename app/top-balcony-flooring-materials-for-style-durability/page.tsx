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
  title: "Top Balcony Flooring Materials for High-Rise Buildings Tampa",
  description: "Premium balcony flooring materials for Tampa Bay high-rise condominiums. Porcelain tiles, deck coatings, pavers, and natural stone with SB 4-D compliant installation.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Top Balcony Flooring Materials", href: "/top-balcony-flooring-materials-for-style-durability/" },
];

const internalLinks = [
  { href: "/discover-the-best-balcony-decking-options-for-outdoor-spaces/", label: "Balcony Decking Options" },
  { href: "/balcony-waterproofing-for-long-lasting-protection/", label: "Balcony Waterproofing" },
  { href: "/balcony-restoration-services/", label: "Balcony Restoration" },
  { href: "/services/residential/balcony-reconstruction/", label: "SB4-D Compliance" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const faqs = [
  {
    question: "What flooring materials work best for high-rise condominium balconies?",
    answer: "High-rise balcony flooring must withstand Florida's intense UV radiation, heavy rainfall, salt air exposure, and daily use. Top-performing materials include porcelain tiles (extremely durable, low maintenance, fade resistant), deck coating systems (seamless waterproofing with decorative finish), natural stone (premium appearance, varied durability by type), and composite deck tiles (wood appearance without wood maintenance). Material selection considers structural load capacity, waterproofing integration, aesthetic goals, and maintenance requirements. Each option offers distinct advantages for different situations."
  },
  {
    question: "How does SB 4-D affect balcony flooring material selection in Florida?",
    answer: "SB 4-D's milestone inspection requirements influence flooring decisions for condominium balconies. Inspectors must evaluate structural conditions and waterproofing systems, potentially requiring flooring removal or inspection access. Removable flooring systems (pedestal-mounted pavers, interlocking tiles) simplify inspection access. Permanent flooring installations may require inspection ports or destructive testing. SIRS requirements mandate reserve funding for flooring replacement—materials with predictable service lives support accurate reserve planning. Flooring selected during renovation should facilitate rather than complicate future inspections."
  },
  {
    question: "What is the difference between flooring installed over waterproofing vs. integral systems?",
    answer: "Integral deck coating systems combine waterproofing and walking surface in one bonded layer applied directly to concrete. They're thinner (maintaining original elevations), lighter, and typically less expensive. Overlay flooring systems (tiles, pavers, stone) install above separate waterproofing membranes. Overlays add height (1-3 inches), create drainage cavities, and offer more design options. Overlays allow waterproofing maintenance without replacing finishes, but add complexity and cost. The choice depends on structural capacity, aesthetic goals, maintenance philosophy, and budget."
  },
  {
    question: "How do weight considerations affect balcony flooring selection?",
    answer: "Added dead load from flooring materials affects balcony structural capacity calculations. Deck coatings add negligible weight (under 1 psf). Pedestal-mounted porcelain pavers add 8-15 psf depending on thickness. Thin-set tile installations add 10-20 psf including mortar. Natural stone with mortar bed can add 25-40+ psf. Older balconies designed for lighter finishes may not safely support heavy flooring systems. Structural evaluation by a licensed engineer confirms whether selected flooring falls within the balcony's design capacity. SB 4-D documentation should include flooring weight calculations."
  },
  {
    question: "What is the cost of balcony flooring for high-rise condominiums in Tampa Bay?",
    answer: "Balcony flooring costs vary significantly by material and installation method. Deck coating systems cost $15-40 per square foot including waterproofing. Porcelain pavers on pedestals run $25-50 per square foot complete. Thin-set porcelain tile costs $20-40 per square foot over compatible membrane. Natural stone installations range $30-60+ per square foot. Interlocking deck tiles cost $8-20 per square foot over existing surfaces. For a typical 50-square-foot balcony, expect $750-2,000 for coatings, $1,250-2,500 for pavers, or $1,000-2,000 for tile. Building-wide projects achieve 15-25% cost savings."
  },
  {
    question: "How long do different balcony flooring materials last in Florida's climate?",
    answer: "Service life depends on material type, installation quality, and maintenance. Quality deck coatings provide 15-25 years with periodic recoating (every 5-10 years). Porcelain tiles and pavers can last 30+ years with minimal maintenance. Natural stone varies by type—granite and quartzite last longest, while softer stones may show wear earlier. Composite tiles typically last 10-20 years before UV degradation affects appearance. Proper drainage, cleaning, and prompt repair of damage extend all flooring system service lives. Pedestal support systems generally outlast the flooring materials they support."
  }
];

const costData = [
  { service: "Deck Coating System (complete)", costRange: "$15 - $40", perUnit: "Per sq ft" },
  { service: "Porcelain Pavers on Pedestals", costRange: "$25 - $50", perUnit: "Per sq ft" },
  { service: "Porcelain Tile (thin-set over membrane)", costRange: "$20 - $40", perUnit: "Per sq ft" },
  { service: "Natural Stone Tile", costRange: "$30 - $60+", perUnit: "Per sq ft" },
  { service: "Interlocking Deck Tiles", costRange: "$8 - $20", perUnit: "Per sq ft" },
  { service: "Composite Plank System", costRange: "$20 - $40", perUnit: "Per sq ft" },
  { service: "Typical Balcony (50 sq ft, coating)", costRange: "$750 - $2,000", perUnit: "Per unit" },
  { service: "Typical Balcony (50 sq ft, pavers)", costRange: "$1,250 - $2,500", perUnit: "Per unit" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Balcony Flooring Installation"
        serviceDescription="Premium balcony flooring materials for Tampa Bay high-rise condominiums. Porcelain tiles, deck coatings, pavers, and natural stone options."
        city="Tampa"
        minPrice="750"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
            alt="Top balcony flooring materials for high-rise buildings"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Top Balcony Flooring Materials for Style and Durability
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Premium flooring solutions for high-rise balconies combining lasting beauty, weather resistance, and practical performance.
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
              Balcony flooring transforms functional concrete slabs into inviting outdoor spaces that extend living areas and enhance unit values. For high-rise condominiums in Tampa Bay, flooring selection involves considerations beyond residential applications—structural capacity, waterproofing integration, fire code compliance, and long-term maintenance accessibility all factor into the decision. Florida Construction Specialists helps building owners and associations select and install balcony flooring systems that perform beautifully throughout their service lives.
            </p>

            <p className="text-gray-600 mb-6">
              Florida's SB 4-D legislation has added new considerations to flooring selection. Milestone structural inspections require access to evaluate waterproofing systems and structural conditions beneath finished surfaces. Flooring materials that allow easy removal and replacement support inspection requirements, while permanently bonded installations may complicate future compliance activities. Smart flooring selection considers both current aesthetics and long-term building management needs.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Understanding Flooring System Requirements
            </h2>
            <p className="text-gray-600 mb-6">
              High-rise balcony flooring faces demanding conditions that ground-level installations rarely experience. Intense UV radiation at upper floors accelerates material degradation. Wind-driven rain during storms tests drainage and waterproofing performance. Thermal cycling from full sun exposure creates expansion and contraction stresses. Salt air corrodes susceptible materials. Quality flooring systems must withstand all these stresses while maintaining appearance and safety.
            </p>

            <p className="text-gray-600 mb-6">
              Waterproofing integration represents the most critical technical consideration. Every flooring system must work with—not against—the waterproofing membrane that protects the structural slab. Some systems bond directly to waterproofing membranes, requiring compatible products and proper installation techniques. Other systems elevate above membranes on pedestals, creating drainage cavities that enhance waterproofing performance. Understanding these relationships guides appropriate flooring selection.
            </p>

            <p className="text-gray-600 mb-6">
              Structural load considerations affect what flooring materials are feasible for specific balconies. Added dead load from heavy flooring reduces the capacity available for live loads (occupants, furniture, planters). Older balconies designed for lighter finishes may not safely support stone tile with mortar beds. Structural evaluation by a licensed engineer confirms that selected flooring falls within safe limits—documentation that also supports SB 4-D compliance.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              SB 4-D Compliance Considerations
            </h2>
            <p className="text-gray-600 mb-6">
              Florida's SB 4-D legislation creates practical implications for balcony flooring selection in condominium buildings. Milestone inspections require engineers to evaluate structural conditions and waterproofing system performance. Flooring that conceals these elements without providing access complicates inspections and may require destructive testing.
            </p>

            <p className="text-gray-600 mb-6">
              Removable flooring systems offer significant advantages for SB 4-D compliance. Pedestal-mounted pavers lift out easily, providing immediate access to waterproofing membranes for inspection. After assessment, pavers reinstall without special tools or skills. This accessibility simplifies both scheduled milestone inspections and emergency repairs if leaks develop. The slight premium for pedestal systems often pays for itself in reduced inspection complexity.
            </p>

            <p className="text-gray-600 mb-6">
              Structural load documentation supports SIRS reserve planning. The weight of flooring materials affects structural capacity calculations that inform reserve studies. Properly documented flooring installations provide the information needed for accurate reserve planning and demonstrate attention to structural considerations during SB 4-D inspections.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Porcelain Tile and Paver Options
            </h2>
            <p className="text-gray-600 mb-6">
              Porcelain has emerged as the premium material for high-rise balcony flooring, offering exceptional durability, fade resistance, and design versatility. Technical porcelain tiles are fired at extremely high temperatures, creating dense, virtually non-porous surfaces that resist staining, moisture absorption, and wear. Unlike natural stone, porcelain maintains consistent appearance without sealing or special maintenance.
            </p>

            <p className="text-gray-600 mb-6">
              Installation methods for porcelain vary by application. Thin-set installations bond tiles directly to compatible waterproofing membranes using flexible thin-set mortars designed for exterior applications. This approach creates permanent installations that maximize balcony space (no height added) but require membrane compatibility verification. Pedestal installations support porcelain pavers above membranes without adhesive, creating drainage cavities and allowing tile removal for maintenance access.
            </p>

            <p className="text-gray-600 mb-6">
              Design options for porcelain tiles are virtually unlimited. Stone looks replicate granite, marble, travertine, and slate with remarkable realism. Wood looks provide the warmth of natural timber without the maintenance requirements. Concrete and terrazzo patterns suit contemporary architectural styles. Large-format tiles (up to 48 inches) create sleek, modern appearances with minimal grout lines.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Deck Coating Systems
            </h2>
            <p className="text-gray-600 mb-6">
              Deck coating systems provide integrated waterproofing and walking surface in a single, bonded application directly to concrete substrates. These systems are inherently thin (typically 40-120 mils), maintaining original balcony elevations and door threshold relationships. For buildings where height increases would create door clearance problems or code compliance issues, deck coatings offer solutions that overlays cannot.
            </p>

            <p className="text-gray-600 mb-6">
              Decorative options for deck coatings include solid colors in virtually any shade, multi-color fleck broadcasts that create depth and visual interest, and aggregate systems using colored quartz or other materials for both appearance and slip resistance. Stencil patterns can simulate tile or stone at lower cost than actual tile installation. Custom designs and logos can be incorporated for distinctive installations.
            </p>

            <p className="text-gray-600 mb-6">
              Maintenance for deck coatings involves periodic recoating (typically every 5-10 years) to restore appearance and protection. Because coatings bond directly to concrete, substrate preparation before recoating is critical for adhesion. When properly maintained, quality deck coating systems provide 20-25 years of service before complete replacement becomes necessary.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Natural Stone Options
            </h2>
            <p className="text-gray-600 mb-6">
              Natural stone creates luxurious balcony surfaces that enhance high-end condominium units. Granite, slate, and quartzite offer excellent durability for outdoor applications with minimal maintenance requirements. Travertine and marble provide classic elegance but require sealing and more careful maintenance to prevent staining. Each stone type brings unique characteristics that suit different aesthetic goals.
            </p>

            <p className="text-gray-600 mb-6">
              Weight considerations become particularly important with natural stone. Thick stone tiles with mortar-bed installation can add 25-40+ pounds per square foot—loads that may exceed the safe capacity of some balcony slabs. Structural evaluation before specifying stone flooring confirms that balconies can support the added weight while maintaining code-required live load capacity.
            </p>

            <p className="text-gray-600 mb-6">
              Installation methods for stone depend on weight, waterproofing system requirements, and access needs. Thin-set installations work for thinner gauged stones over compatible membranes. Mortar-bed installations accommodate irregular stone but add significant weight. Pedestal support allows thicker stone cut to paver dimensions to install without adhesive, preserving inspection access.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Balcony Flooring Costs in Tampa Bay
          </h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-md">
              <thead className="bg-brand-green text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Flooring Material</th>
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
              "High-rise flooring expertise",
              "SB 4-D compliance focus",
              "Multiple material options",
              "Waterproofing integration",
              "Structural load analysis",
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
            Upgrade Your Balcony Flooring Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for expert guidance on balcony flooring materials that deliver lasting beauty and performance.
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
