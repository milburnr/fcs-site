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
  title: "Effective Exterior Waterproofing Methods for Commercial Properties Tampa",
  description: "Expert exterior waterproofing methods for high-rise condominiums and commercial buildings in Tampa Bay. Building envelope protection, facade waterproofing, and SB 4-D compliant solutions.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Effective Exterior Waterproofing Methods", href: "/effective-exterior-waterproofing-methods-for-your-property/" },
];

const internalLinks = [
  { href: "/services/residential/exterior-waterproofing/", label: "Exterior Waterproofing Services" },
  { href: "/ultimate-waterproofing-guide-foundations/", label: "Foundation Waterproofing" },
  { href: "/waterproofing-commercial-contractors/", label: "Commercial Waterproofing" },
  { href: "/balcony-waterproofing-for-long-lasting-protection/", label: "Balcony Waterproofing" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const faqs = [
  {
    question: "What are the most effective exterior waterproofing methods for high-rise buildings?",
    answer: "High-rise exterior waterproofing employs multiple coordinated systems. Elastomeric wall coatings provide breathable waterproofing that allows moisture vapor to escape while blocking liquid water. Silicone-based sealants protect expansion joints and transitions between materials. Through-wall flashing prevents water that penetrates the outer facade from reaching interior spaces. Window and door perimeter sealing stops infiltration at these vulnerable openings. Properly detailed drip edges, coping caps, and sill pans direct water away from critical building elements. The most effective approach integrates all these systems into a comprehensive building envelope strategy."
  },
  {
    question: "How does SB 4-D affect exterior waterproofing requirements for Florida condominiums?",
    answer: "Florida's SB 4-D legislation requires milestone structural inspections that include evaluation of the building envelope. Inspecting engineers assess exterior wall conditions, window and door openings, balcony connections, and other points where water intrusion could cause structural deterioration. Buildings with documented water intrusion issues must address the underlying waterproofing failures as part of their remediation plans. The SIRS requirements include exterior waterproofing systems among the components requiring reserve funding. Associations must now budget for facade maintenance and eventual waterproofing system replacement."
  },
  {
    question: "What causes exterior waterproofing failures in commercial buildings?",
    answer: "Exterior waterproofing failures result from multiple factors acting over time. UV degradation breaks down organic coating compounds and sealant materials. Thermal cycling causes expansion and contraction that stresses sealant joints and coating adhesion. Building settlement and movement opens gaps at material transitions. Poor original installation leaves vulnerable points that fail prematurely. Hurricane-force winds drive water into openings that normally shed rain. Deferred maintenance allows minor issues to progress into major failures. In Tampa Bay's harsh environment, regular inspection and maintenance is essential to preserve waterproofing performance."
  },
  {
    question: "How often should commercial building exterior waterproofing be maintained?",
    answer: "Maintenance schedules depend on the systems installed and exposure conditions. Elastomeric coatings typically require inspection and touch-up every 3-5 years, with complete recoating every 10-15 years. Sealant joints should be inspected annually and replaced every 7-15 years depending on exposure. Window and door seals require annual inspection with replacement as needed. High-exposure areas like south and west elevations may require more frequent attention than protected surfaces. A comprehensive building envelope maintenance program catches problems early when repairs are least expensive."
  },
  {
    question: "What is the cost of exterior waterproofing for commercial buildings in Tampa Bay?",
    answer: "Exterior waterproofing costs vary based on building height, access requirements, and system selection. Elastomeric wall coating systems typically cost $3-8 per square foot including surface preparation. Joint sealant replacement runs $8-15 per linear foot. Window perimeter resealing costs $150-400 per opening. Complete building envelope rehabilitation for high-rise buildings can range from $15-40 per square foot of exterior wall area. Scaffolding or swing stage access for tall buildings adds significant cost. Projects that combine waterproofing with other facade work achieve better overall value."
  },
  {
    question: "Can exterior waterproofing be applied during rainy season in Tampa?",
    answer: "Yes, with proper planning. Most waterproofing products require dry substrates and cannot be applied during active rainfall. However, experienced contractors can work effectively during rainy season by monitoring weather forecasts, protecting work areas with temporary enclosures, and scheduling water-sensitive operations for dry periods. Many products can be applied with morning dew present if surfaces dry before application. Curing times must account for afternoon storms typical during summer months. Off-season scheduling often achieves better progress but adds cost for temporary weather protection."
  }
];

const costData = [
  { service: "Elastomeric Wall Coating System", costRange: "$3 - $8", perUnit: "Per sq ft" },
  { service: "Silicone Sealant Replacement", costRange: "$8 - $15", perUnit: "Per linear ft" },
  { service: "Window Perimeter Sealing", costRange: "$150 - $400", perUnit: "Per opening" },
  { service: "Expansion Joint Treatment", costRange: "$20 - $50", perUnit: "Per linear ft" },
  { service: "Stucco Crack Repair", costRange: "$15 - $35", perUnit: "Per linear ft" },
  { service: "Through-Wall Flashing Installation", costRange: "$25 - $60", perUnit: "Per linear ft" },
  { service: "Complete Facade Restoration", costRange: "$15 - $40", perUnit: "Per sq ft" },
  { service: "Scaffolding/Swing Stage Access", costRange: "$3 - $8", perUnit: "Per sq ft (adder)" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Exterior Waterproofing Services"
        serviceDescription="Expert exterior waterproofing methods for high-rise condominiums and commercial buildings in Tampa Bay. Building envelope protection, facade waterproofing, and comprehensive wall coating systems."
        city="Tampa"
        minPrice="5000"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
            alt="Exterior waterproofing for commercial buildings"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Effective Exterior Waterproofing Methods for Your Property
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Comprehensive building envelope waterproofing for high-rise condominiums and commercial properties throughout Tampa Bay.
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
              The exterior envelope of a commercial building or high-rise condominium represents the primary defense against Florida's demanding climate. Intense UV radiation, driving rain, hurricane-force winds, and daily thermal cycling all stress building exteriors in ways that eventually defeat even well-designed waterproofing systems. Florida Construction Specialists provides expert exterior waterproofing services that protect building structures, maintain interior comfort, and preserve property values throughout the Tampa Bay area.
            </p>

            <p className="text-gray-600 mb-6">
              Unlike residential waterproofing where failures cause inconvenience, commercial building envelope failures can result in extensive structural damage, tenant displacement, business interruption claims, and regulatory compliance issues. For condominium associations, envelope failures translate directly to special assessments and reduced unit values. Our systematic approach to exterior waterproofing addresses both immediate water intrusion problems and long-term building protection.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Understanding Building Envelope Systems
            </h2>
            <p className="text-gray-600 mb-6">
              The building envelope comprises all exterior surfaces that separate conditioned interior space from the outside environment: walls, windows, doors, roofing, and the transitions between these elements. Effective waterproofing requires each component to perform its function while working in concert with adjacent systems. A high-performance wall coating means nothing if water enters through failed window seals or deteriorated expansion joints.
            </p>

            <p className="text-gray-600 mb-6">
              Modern building envelope design employs a "defense in depth" strategy that assumes some water will penetrate the outer surface. Through-wall flashing systems intercept this water and direct it back to the exterior through weep holes. Properly detailed drainage cavities behind cladding materials provide pathways for moisture escape. Vapor barriers on the warm side of insulation prevent condensation within wall assemblies. When any element of this system fails, water accumulates in unintended locations and begins damaging building components.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Exterior Wall Coating Systems
            </h2>
            <p className="text-gray-600 mb-6">
              Elastomeric wall coatings provide the primary waterproofing defense for most commercial building exteriors in Florida. These high-build acrylic or urethane-based products form flexible, seamless membranes that bridge hairline cracks while allowing water vapor to escape from within the wall assembly. Properly formulated elastomerics maintain their flexibility and adhesion despite years of UV exposure and thermal cycling.
            </p>

            <p className="text-gray-600 mb-6">
              Coating system performance depends heavily on surface preparation. Existing loose paint, deteriorated coatings, and surface contaminants must be removed. Cracks wider than hairlines require repair before coating application. Stucco surfaces may need pressure washing, patching, and sometimes complete re-texturing before new coatings can be applied. This preparation work often represents the majority of project cost and directly determines how long the new coating will perform.
            </p>

            <p className="text-gray-600 mb-6">
              For high-rise buildings, coating application requires sophisticated access equipment. Swing stages (suspended scaffolding) provide efficient access for tall structures, while boom lifts and scaffolding systems serve lower buildings. Access equipment selection affects project cost, schedule, and the quality of work that can be achieved. Experienced contractors match equipment to building conditions for optimal results.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              SB 4-D Compliance and Building Envelope Assessment
            </h2>
            <p className="text-gray-600 mb-6">
              Florida's SB 4-D legislation creates new exterior waterproofing imperatives for condominium associations. While the law focuses on structural inspections, building envelope performance directly affects structural condition. When water intrudes through facade failures, it reaches structural elements and initiates deterioration processes that inspectors are specifically looking for during milestone inspections.
            </p>

            <p className="text-gray-600 mb-6">
              The Structural Integrity Reserve Study (SIRS) required by SB 4-D must include exterior waterproofing systems among the components requiring reserve funding. Associations must develop realistic budgets for facade maintenance, coating replacement, and joint sealant renewal. Many associations are discovering that decades of deferred maintenance have left their waterproofing systems far beyond their intended service lives.
            </p>

            <p className="text-gray-600 mb-6">
              Our exterior waterproofing services support SB 4-D compliance by providing comprehensive building envelope assessments that identify all water intrusion pathways, implementing repairs that address root causes, and establishing maintenance programs that preserve building protection. We coordinate with milestone inspection engineers to ensure exterior work satisfies their requirements and supports the association's compliance documentation.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Joint Sealants and Transition Detailing
            </h2>
            <p className="text-gray-600 mb-6">
              Sealant joints represent some of the most critical—and most failure-prone—elements of exterior waterproofing systems. Expansion joints accommodate building movement from thermal cycling, wind loads, and settlement. Control joints manage cracking in stucco and concrete surfaces. Perimeter seals around windows, doors, and penetrations stop water entry at these vulnerable openings. Each joint type requires appropriate sealant selection and proper detailing to perform as intended.
            </p>

            <p className="text-gray-600 mb-6">
              Sealant materials have varying characteristics that suit different applications. Silicone sealants offer excellent durability and weathering resistance but limited paintability and potential compatibility issues with some substrates. Polyurethane sealants provide good adhesion and paintability but may harden over time. Hybrid polymer sealants combine favorable properties but at higher cost. Proper sealant selection considers joint movement, substrate compatibility, appearance requirements, and expected service life.
            </p>

            <p className="text-gray-600 mb-6">
              Joint preparation is as important as sealant selection. Failed sealant must be completely removed along with any bond breaker tape or backer rod. Joint surfaces must be clean, dry, and free of contaminants. New backer rod establishes proper joint depth and prevents three-sided adhesion that restricts sealant movement. Fresh sealant must be tooled to ensure substrate contact and proper profile. Shortcuts in any of these steps result in premature joint failure.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Window and Opening Waterproofing
            </h2>
            <p className="text-gray-600 mb-6">
              Windows and doors represent the most common water entry points in commercial building envelopes. The interface between window frames and surrounding wall construction must accommodate differential movement while maintaining water-tight seals. Original installations often rely on sealant alone at these interfaces, which eventually fails from UV exposure, movement, and simple aging.
            </p>

            <p className="text-gray-600 mb-6">
              Comprehensive window waterproofing goes beyond simple re-caulking. Self-adhering flashing membranes applied to rough opening surfaces provide backup protection when perimeter seals fail. Sill pan flashings beneath windows collect any water that enters the window-wall interface and direct it to the exterior. Head flashings above windows divert running water away from vulnerable openings. Properly detailed drip edges ensure water falls free of the facade rather than running down wall surfaces.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Facade Restoration and Comprehensive Approaches
            </h2>
            <p className="text-gray-600 mb-6">
              Buildings with widespread waterproofing failures often benefit from comprehensive facade restoration rather than piecemeal repairs. This approach addresses all envelope systems simultaneously—wall coatings, joint sealants, window seals, flashing, and architectural details—ensuring compatible systems and unified protection. While the upfront investment is larger, comprehensive projects achieve better value than repeated partial repairs.
            </p>

            <p className="text-gray-600 mb-6">
              Facade restoration projects typically begin with detailed condition assessment including water testing to identify intrusion pathways. Engineering evaluation ensures structural substrates can support new waterproofing systems. Mockups and test applications verify system compatibility and appearance. Phased construction sequences maintain building operations during renovation. Comprehensive documentation supports warranty enforcement and future maintenance planning.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Exterior Waterproofing Costs in Tampa Bay
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
            *Costs vary based on building height, access requirements, and system selection. Contact us for a detailed estimate.
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
              "High-rise exterior expertise",
              "SB 4-D compliance specialists",
              "Comprehensive building envelope approach",
              "Premium coating systems",
              "Experienced access equipment crews",
              "Detailed preparation protocols",
              "Long-term warranties",
              "Minimal tenant disruption",
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
            Protect Your Building's Exterior
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for comprehensive building envelope assessment and effective waterproofing solutions.
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
