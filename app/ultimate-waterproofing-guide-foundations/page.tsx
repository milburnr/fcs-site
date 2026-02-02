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
  title: "Ultimate Waterproofing Guide for Foundations | Commercial Buildings Tampa",
  description: "Complete guide to foundation waterproofing for commercial buildings and high-rise condominiums in Tampa Bay. SB 4-D compliant solutions for parking structures, podium decks, and below-grade construction.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Ultimate Waterproofing Guide Foundations", href: "/ultimate-waterproofing-guide-foundations/" },
];

const internalLinks = [
  { href: "/services/residential/exterior-waterproofing/", label: "Exterior Waterproofing" },
  { href: "/guide-to-waterproofing-solutions-for-basements/", label: "Basement Waterproofing" },
  { href: "/waterproofing-commercial-contractors/", label: "Commercial Waterproofing" },
  { href: "/services/residential/balcony-reconstruction/", label: "SB4-D Compliance" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const faqs = [
  {
    question: "What types of foundation waterproofing are used in commercial construction?",
    answer: "Commercial foundation waterproofing employs several systems based on application requirements. Below-grade positive-side waterproofing uses sheet membranes, fluid-applied membranes, or bentonite clay systems applied to the exterior of foundation walls before backfilling. Negative-side waterproofing is applied to interior surfaces when exterior access is unavailable. Blind-side waterproofing is installed before concrete is poured against retention systems. For podium decks above parking structures, traffic-bearing membrane systems provide both waterproofing and wear resistance. Each system has specific advantages depending on soil conditions, hydrostatic pressure, and construction sequence."
  },
  {
    question: "How does SB 4-D affect foundation waterproofing in Florida condominiums?",
    answer: "Florida's SB 4-D legislation requires milestone structural inspections for condominiums three stories or higher. While the law focuses on structural elements, foundation waterproofing failures often cause or contribute to structural deterioration. Inspecting engineers evaluate foundation conditions including evidence of water intrusion, efflorescence, spalling, and corrosion of embedded steel. SIRS (Structural Integrity Reserve Studies) must now account for waterproofing system replacement in reserve planning. Associations with aging waterproofing systems may need to budget for rehabilitation as part of their compliance strategy."
  },
  {
    question: "What are the signs of foundation waterproofing failure in commercial buildings?",
    answer: "Warning signs include water intrusion in below-grade spaces (parking garages, storage areas, mechanical rooms), white mineral deposits (efflorescence) on concrete surfaces, musty odors indicating persistent moisture, concrete spalling or delamination on garage ceilings, rust staining from corroding rebar, and increased humidity levels affecting HVAC efficiency. In parking structures, waterproofing failure often manifests as ceiling leaks onto parked vehicles, standing water in drive aisles, and deteriorating traffic coatings. Early detection allows for targeted repairs before structural damage occurs."
  },
  {
    question: "How long do commercial foundation waterproofing systems last?",
    answer: "Service life varies by system type and installation quality. Below-grade sheet membrane systems typically last 30-50 years when properly installed. Fluid-applied membranes offer 20-30 year service life. Traffic-bearing deck coatings in parking structures typically require recoating every 7-15 years depending on traffic intensity. Blindside waterproofing systems are designed for the life of the structure since they cannot be replaced. Proper drainage, maintenance, and avoiding physical damage significantly extend waterproofing system life."
  },
  {
    question: "What is the cost of foundation waterproofing for commercial buildings in Tampa?",
    answer: "Commercial foundation waterproofing costs vary significantly based on system type, accessibility, and scope. Below-grade exterior waterproofing typically runs $15-30 per square foot of wall area, including excavation when required. Parking structure deck waterproofing ranges from $8-20 per square foot depending on system selection. Crack injection repairs cost $100-300 per linear foot. Complete parking garage restoration with structural repairs, waterproofing, and new traffic coating can range from $25-50 per square foot. Large projects often achieve economies of scale with competitive unit pricing."
  },
  {
    question: "Can foundation waterproofing be installed on existing commercial buildings?",
    answer: "Yes, various approaches address waterproofing needs in existing structures. Positive-side waterproofing requires excavation to expose foundation walls, which is feasible when site conditions permit. Negative-side waterproofing is applied from interior surfaces without excavation. Crystalline waterproofing products penetrate existing concrete to provide internal waterproofing. Injection grouting seals active cracks from interior or exterior. For parking structures, existing traffic coatings can be removed and new waterproofing systems installed during rehabilitation. The optimal approach depends on the building configuration, access constraints, and budget."
  }
];

const costData = [
  { service: "Below-Grade Exterior Membrane (new construction)", costRange: "$8 - $15", perUnit: "Per sq ft" },
  { service: "Below-Grade Exterior (with excavation)", costRange: "$15 - $30", perUnit: "Per sq ft" },
  { service: "Negative-Side Cementitious Coating", costRange: "$5 - $12", perUnit: "Per sq ft" },
  { service: "Parking Deck Traffic Membrane", costRange: "$8 - $15", perUnit: "Per sq ft" },
  { service: "Podium Deck Waterproofing System", costRange: "$15 - $25", perUnit: "Per sq ft" },
  { service: "Crack Injection (epoxy or urethane)", costRange: "$100 - $300", perUnit: "Per linear ft" },
  { service: "Complete Garage Restoration", costRange: "$25 - $50", perUnit: "Per sq ft" },
  { service: "Drainage System Installation", costRange: "$20 - $40", perUnit: "Per linear ft" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Foundation Waterproofing Services"
        serviceDescription="Complete foundation waterproofing solutions for commercial buildings and high-rise condominiums in Tampa Bay. Expert installation of below-grade membranes, parking structure systems, and podium deck waterproofing."
        city="Tampa"
        minPrice="5000"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
            alt="Foundation waterproofing for commercial buildings"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Ultimate Foundation Waterproofing Guide
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Comprehensive waterproofing solutions for commercial foundations, parking structures, and high-rise condominiums throughout Tampa Bay.
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
              Foundation waterproofing is the first line of defense protecting commercial buildings and high-rise condominiums from water intrusion damage. In Tampa Bay's subtropical climate, where annual rainfall exceeds 50 inches and the water table often sits just feet below grade, effective waterproofing isn't optional—it's essential for structural longevity, occupant comfort, and regulatory compliance. Florida Construction Specialists provides expert foundation waterproofing services for commercial properties throughout Tampa, St. Petersburg, Clearwater, Sarasota, and Lakeland.
            </p>

            <p className="text-gray-600 mb-6">
              Unlike residential foundations where waterproofing failures might cause basement dampness, commercial foundation failures can result in millions of dollars in structural damage, business interruption, and liability exposure. High-rise condominiums face particular challenges, as water intrusion into parking structures and below-grade common areas can compromise structural steel, damage resident vehicles, and trigger expensive repairs that strain association reserves.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Understanding Commercial Foundation Waterproofing
            </h2>
            <p className="text-gray-600 mb-6">
              Commercial foundation waterproofing systems differ fundamentally from residential applications in both scale and performance requirements. Where a residential foundation might see occasional groundwater contact, commercial foundations often experience continuous hydrostatic pressure from elevated water tables, stormwater infiltration, and poor site drainage. The waterproofing system must resist these forces continuously for decades while accommodating structural movement, temperature changes, and potential damage from backfill operations.
            </p>

            <p className="text-gray-600 mb-6">
              Positive-side waterproofing—applied to the exterior (water-facing) surface of foundation walls—provides the most effective protection because it prevents water from ever contacting the structural concrete. This approach keeps the concrete dry, protecting embedded steel reinforcement from corrosion and preventing moisture-related deterioration. Sheet membrane systems, typically modified bitumen or thermoplastic polyolefin (TPO), provide robust, fully-adhered protection that can span small cracks. Fluid-applied membranes offer seamless coverage that conforms to complex geometries and penetrations.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Parking Structure Waterproofing
            </h2>
            <p className="text-gray-600 mb-6">
              Parking structures present unique waterproofing challenges because they combine structural requirements with continuous exposure to vehicle traffic, road salts, petroleum products, and weather. The deck surface must provide waterproofing protection while withstanding thousands of vehicle passes, tire abrasion, and point loads from parked vehicles. At the same time, the system must protect the structural slab and embedded reinforcing steel from the corrosive effects of water and chlorides.
            </p>

            <p className="text-gray-600 mb-6">
              Traffic-bearing membrane systems used in parking structures typically consist of multiple layers: a primer to ensure adhesion, a waterproofing membrane (often polyurethane or polyurea), and a wear course that provides durability and traction. Some systems incorporate aggregate broadcast for additional slip resistance, while others rely on textured topcoats. The selection depends on traffic intensity, aesthetic preferences, and maintenance accessibility.
            </p>

            <p className="text-gray-600 mb-6">
              For Tampa Bay condominiums, parking structure waterproofing has taken on new urgency following SB 4-D implementation. Milestone inspections often reveal deteriorated deck coatings, corroding reinforcing steel, and delaminated concrete—all consequences of waterproofing system failure. Proactive waterproofing maintenance and timely rehabilitation can prevent the structural damage that triggers expensive emergency repairs and special assessments.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              SB 4-D Compliance Considerations
            </h2>
            <p className="text-gray-600 mb-6">
              Florida's SB 4-D legislation creates new waterproofing imperatives for condominium associations. While the law focuses on structural inspections, waterproofing performance directly affects structural condition. When waterproofing fails, water reaches embedded steel reinforcement and initiates the corrosion process that leads to concrete spalling, delamination, and structural capacity reduction.
            </p>

            <p className="text-gray-600 mb-6">
              The Structural Integrity Reserve Study (SIRS) required by SB 4-D must account for waterproofing system replacement among the components requiring reserve funding. This represents a significant change for many associations that historically treated waterproofing as an operating expense rather than a capital item. Associations must now develop long-term funding plans that anticipate waterproofing rehabilitation costs alongside other major component replacements.
            </p>

            <p className="text-gray-600 mb-6">
              Our foundation waterproofing services support SB 4-D compliance by providing the engineering documentation inspectors require, implementing repairs that address identified deficiencies, and offering maintenance programs that extend system service life. We work with association boards and property managers to develop proactive waterproofing strategies that prevent the deterioration that triggers costly remediation requirements.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Podium Deck Waterproofing
            </h2>
            <p className="text-gray-600 mb-6">
              Podium construction—where elevated decks support landscaping, pools, or plaza areas above parking or commercial space—creates some of the most demanding waterproofing applications in commercial construction. The waterproofing membrane must remain watertight while supporting heavy landscaping loads, accommodating thermal movement, resisting root penetration, and draining efficiently. Failure can result in water intrusion into occupied spaces below, structural damage, and vegetation death.
            </p>

            <p className="text-gray-600 mb-6">
              Podium waterproofing systems typically employ multiple redundant layers: a primary membrane fully adhered to the structural slab, a protection course to prevent damage during subsequent construction, a drainage layer to manage water flow to collection points, and various overburden layers depending on the intended use. For plaza applications, rigid insulation, filter fabric, and aggregate or paver systems complete the assembly. For landscaped areas, specialized root-resistant membranes and growing media systems are incorporated.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Waterproofing Rehabilitation Approaches
            </h2>
            <p className="text-gray-600 mb-6">
              Existing buildings with waterproofing failures require rehabilitation strategies tailored to their specific conditions. When exterior access is available, excavation and positive-side waterproofing installation provides the most effective solution. However, site constraints, adjacent structures, or underground utilities often make excavation impractical or cost-prohibitive.
            </p>

            <p className="text-gray-600 mb-6">
              Negative-side waterproofing, applied to interior surfaces, offers an alternative when exterior access is unavailable. Cementitious coatings, crystalline waterproofing treatments, and cavity drainage systems can manage water that penetrates the foundation, though they don't provide the same level of protection as positive-side systems. Injection grouting using polyurethane or epoxy resins can seal active cracks, though this approach works best for discrete leaks rather than widespread water intrusion.
            </p>

            <p className="text-gray-600 mb-6">
              For parking structures, waterproofing rehabilitation typically involves removing deteriorated traffic coatings, making necessary concrete repairs, and installing new waterproofing systems. This work must be carefully phased to maintain parking availability for building occupants. Experienced contractors develop detailed sequencing plans that minimize disruption while ensuring quality installation.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Foundation Waterproofing Costs in Tampa Bay
          </h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-md">
              <thead className="bg-brand-green text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Service</th>
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
            *Costs vary based on site conditions, system selection, and project scope. Contact us for a detailed estimate.
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
              "Commercial waterproofing expertise",
              "SB 4-D compliance knowledge",
              "Engineering coordination services",
              "Multiple system options",
              "Experienced high-rise crews",
              "Comprehensive warranties",
              "Parking structure specialists",
              "Podium deck experts",
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
            title="Related Waterproofing Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Protect Your Building's Foundation
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for expert foundation waterproofing solutions tailored to your commercial property's needs.
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
