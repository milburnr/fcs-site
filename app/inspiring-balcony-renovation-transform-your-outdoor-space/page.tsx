import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/Schema";
import { Phone, CheckCircle, HelpCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";
import { RelatedArticles } from "@/components/RelatedArticles";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "High-Rise Balcony Renovation Tampa | Transform Your Condo",
  description: "Expert balcony renovation for Tampa Bay high-rise condominiums. Complete structural restoration, waterproofing upgrades, and aesthetic transformations with SB 4-D compliance.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Inspiring Balcony Renovation", href: "/inspiring-balcony-renovation-transform-your-outdoor-space/" },
];

const internalLinks = [
  { href: "/balcony-restoration-services/", label: "Balcony Restoration Services" },
  { href: "/stylish-balcony-railing-designs-for-your-outdoor-space/", label: "Balcony Railing Designs" },
  { href: "/discover-the-best-balcony-decking-options-for-outdoor-spaces/", label: "Balcony Decking Options" },
  { href: "/services/residential/balcony-reconstruction/", label: "SB4-D Compliance" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const relatedArticles = [
  {
    "title": "Balcony Restoration & Waterproofing for Longevity",
    "href": "/balcony-restoration-and-exterior-waterproofing-for-longevity/",
    "description": "Protect your investment with restoration systems engineered for 20+ years of service."
  },
  {
    "title": "Florida SB4-D Compliance Guide",
    "href": "/florida-sb4d-compliance-guide/",
    "description": "Essential requirements for condo milestone inspections and structural integrity reserves."
  },
  {
    "title": "Effective Balcony Maintenance Tips",
    "href": "/effective-balcony-maintenance-tips/",
    "description": "Proactive maintenance strategies to extend balcony lifespan and prevent costly repairs."
  },
  {
    "title": "Condo Balcony Inspection Requirements",
    "href": "/condo-balcony-inspection-requirements/",
    "description": "Understanding inspection requirements under Florida's updated condo safety legislation."
  }
];

const faqs = [
  {
    question: "What does a complete high-rise balcony renovation include?",
    answer: "Complete high-rise balcony renovation encompasses structural assessment and repairs (concrete restoration, rebar treatment, crack injection), waterproofing system replacement (membrane and traffic coating), railing upgrade or replacement, drainage improvements, and aesthetic enhancements (decking, lighting, privacy screens). For SB 4-D compliance, renovation includes engineering documentation, milestone inspection coordination, and reserve study updates. The scope depends on current balcony condition—some projects require only cosmetic updates while others need extensive structural rehabilitation."
  },
  {
    question: "How does SB 4-D affect balcony renovation requirements for Florida condominiums?",
    answer: "SB 4-D's milestone inspection requirements often drive balcony renovation decisions. Inspections may reveal structural deficiencies requiring remediation within specified timeframes. Associations must demonstrate adequate reserves for structural maintenance, including balcony systems. Renovation projects should address all inspection findings to achieve compliance. Documentation requirements ensure proper engineering records exist for future inspections. Many associations are combining required structural repairs with aesthetic upgrades to maximize value from renovation investments."
  },
  {
    question: "Can individual condo owners renovate their balconies independently?",
    answer: "Typically no—balcony structural elements are usually common elements under condo documents, even though individual units have exclusive use. Association approval is generally required for any modifications. Building-wide consistency in railings, waterproofing systems, and color schemes may be mandated. Structural modifications almost always require association involvement and engineering review. Individual aesthetic improvements (furniture, planters, non-permanent items) usually fall within owner discretion, but permanent changes require board approval in most associations."
  },
  {
    question: "How long does high-rise balcony renovation take?",
    answer: "Timeline depends on scope and building size. For individual balcony structural renovation, expect 1-3 weeks per unit including concrete repairs, waterproofing, and railing installation. Building-wide renovation projects typically require 4-12 months depending on unit count and scope. Weather affects scheduling—waterproofing products cannot be applied during rain. Phased approaches that complete one building elevation at a time minimize total project duration while maintaining some balcony access. Material lead times for custom railings or specialty finishes may extend schedules."
  },
  {
    question: "What is the cost of balcony renovation for high-rise condominiums in Tampa?",
    answer: "Complete balcony renovation costs depend on scope and current condition. Cosmetic updates (recoating, minor repairs) may cost $1,500-3,000 per unit. Moderate renovation (waterproofing replacement, railing refurbishment) typically runs $5,000-12,000 per unit. Comprehensive renovation (structural repairs, new waterproofing, new railings, premium decking) can exceed $20,000-40,000 per unit. Building-wide projects often achieve 15-25% savings through volume pricing. Funding typically comes from reserves, special assessments, or association loans depending on scope and available funds."
  },
  {
    question: "How do we maintain renovated balconies to maximize their lifespan?",
    answer: "Proper maintenance extends renovation value significantly. Annual inspections identify coating wear, drainage issues, and early deterioration signs. Regular cleaning prevents organic growth and staining. Prompt repair of any coating damage prevents water intrusion. Furniture pads protect deck surfaces from scratches. Avoid harsh cleaning chemicals that degrade coatings. Keep drains clear of debris. Report any standing water, cracking, or unusual conditions promptly. Following manufacturer maintenance guidelines preserves warranty coverage. Budget for periodic recoating (typically every 5-10 years) to maintain protection."
  }
];

const costData = [
  { service: "Cosmetic Update (cleaning, minor repairs, recoat)", costRange: "$1,500 - $3,000", perUnit: "Per unit" },
  { service: "Moderate Renovation (waterproofing + railing refresh)", costRange: "$5,000 - $12,000", perUnit: "Per unit" },
  { service: "Comprehensive Renovation (structural + complete systems)", costRange: "$20,000 - $40,000+", perUnit: "Per unit" },
  { service: "Structural Concrete Repairs", costRange: "$150 - $400", perUnit: "Per sq ft" },
  { service: "Complete Waterproofing System", costRange: "$20 - $40", perUnit: "Per sq ft" },
  { service: "Railing Replacement (aluminum)", costRange: "$150 - $300", perUnit: "Per linear ft" },
  { service: "Railing Replacement (glass)", costRange: "$400 - $800", perUnit: "Per linear ft" },
  { service: "Premium Decking (pavers or tile)", costRange: "$25 - $50", perUnit: "Per sq ft" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Balcony Renovation Services"
        serviceDescription="Expert balcony renovation for Tampa Bay high-rise condominiums. Complete structural restoration, waterproofing upgrades, and aesthetic transformations."
        city="Tampa"
        minPrice="1500"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
            alt="Inspiring balcony renovation for high-rise buildings"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Transform Your High-Rise Balcony with Expert Renovation
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Complete balcony renovation services for Tampa Bay condominiums combining structural integrity, waterproofing protection, and stunning aesthetics.
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
              Balcony renovation in high-rise condominiums offers the opportunity to address deferred maintenance, upgrade building aesthetics, and enhance property values simultaneously. Unlike simple repairs that address individual problems, comprehensive renovation takes a holistic approach—evaluating structural conditions, waterproofing systems, railings, and finishes to create balconies that perform beautifully for decades. Florida Construction Specialists delivers expert balcony renovation services throughout Tampa, St. Petersburg, Clearwater, Sarasota, and Lakeland.
            </p>

            <p className="text-gray-600 mb-6">
              Florida's SB 4-D legislation has created new urgency for balcony renovation in many condominium communities. Milestone inspections are revealing deterioration that associations deferred for years, and the law now requires remediation within specified timeframes. Smart associations are using this moment not just to achieve compliance but to upgrade their buildings with modern waterproofing systems, attractive railings, and premium finishes that enhance both safety and marketability.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              The Case for Comprehensive Renovation
            </h2>
            <p className="text-gray-600 mb-6">
              Piecemeal repairs that address symptoms without correcting root causes ultimately cost more than comprehensive renovation. When waterproofing fails and water damages structural concrete, simply patching the concrete without restoring waterproofing guarantees future repairs. When railings deteriorate because anchors corrode, refurbishing the visible railing without addressing the anchor system only delays inevitable replacement.
            </p>

            <p className="text-gray-600 mb-6">
              Comprehensive renovation breaks this cycle by addressing all balcony systems together. Structural repairs restore concrete capacity and protect steel reinforcement. New waterproofing systems prevent the water intrusion that caused original deterioration. Upgraded railings provide both safety compliance and aesthetic improvement. Quality finishes complete the transformation while protecting underlying systems from wear and UV damage.
            </p>

            <p className="text-gray-600 mb-6">
              The economics favor comprehensive approaches when multiple systems need attention. Mobilization costs, scaffolding rentals, and general conditions expenses don't increase proportionally with scope—a project that includes waterproofing and railings costs only marginally more than waterproofing alone once crews are on site. Building-wide renovation achieves further economies through bulk material purchasing and continuous production.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              SB 4-D as Renovation Catalyst
            </h2>
            <p className="text-gray-600 mb-6">
              Florida's SB 4-D legislation has transformed how condominium associations approach balcony maintenance. The milestone inspections required for buildings three stories or higher often reveal deterioration that associations hoped to defer indefinitely. With findings documented in official reports and remediation timelines mandated, the option to "wait another year" has disappeared.
            </p>

            <p className="text-gray-600 mb-6">
              Progressive associations are viewing SB 4-D not as a burden but as an opportunity. Required structural repairs create the chance to upgrade other building systems simultaneously. Since scaffolding, crews, and management attention are already focused on balconies, adding waterproofing improvements, railing upgrades, and aesthetic enhancements makes logistical and financial sense.
            </p>

            <p className="text-gray-600 mb-6">
              The Structural Integrity Reserve Study (SIRS) requirements support long-term planning for renovation investments. Associations must now maintain adequate reserves for structural components including balconies. This mandatory funding framework makes renovation financing more predictable and encourages associations to plan ahead rather than react to emergencies.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Structural Restoration Foundation
            </h2>
            <p className="text-gray-600 mb-6">
              Every successful balcony renovation begins with structural restoration. Deteriorated concrete cannot support new finishes effectively—coatings peel, tiles crack, and the investment in aesthetics fails prematurely. Professional renovation assesses existing conditions thoroughly, then addresses all structural deficiencies before proceeding to waterproofing and finishes.
            </p>

            <p className="text-gray-600 mb-6">
              Concrete restoration involves removing deteriorated material to expose sound substrate, treating corroded reinforcing steel to arrest corrosion, and rebuilding sections with appropriate repair mortars. The extent of work depends on condition—some balconies need only surface repairs while others require substantial reconstruction. Proper assessment guides scope decisions and ensures adequate budget allocation.
            </p>

            <p className="text-gray-600 mb-6">
              Documentation of structural repairs supports future SB 4-D compliance. Engineering reports, inspection records, and material certifications become part of the building's permanent record. These documents demonstrate that required repairs were properly completed and provide baseline information for future milestone inspections.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Waterproofing System Upgrades
            </h2>
            <p className="text-gray-600 mb-6">
              Renovation provides the opportunity to upgrade from aging waterproofing systems to modern products with superior performance characteristics. Early-generation traffic coatings and membrane systems have been superseded by products offering better adhesion, greater flexibility, improved UV resistance, and longer service lives. The modest additional cost of premium systems pays dividends through extended maintenance intervals.
            </p>

            <p className="text-gray-600 mb-6">
              System selection during renovation considers both current performance requirements and future inspection accessibility. Products that facilitate SB 4-D compliance—through inspection ports, removal-friendly finishes, or transparent materials—support long-term building management. The waterproofing system installed during renovation will need to perform through multiple milestone inspection cycles.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Railing Transformation
            </h2>
            <p className="text-gray-600 mb-6">
              Railings offer the most visible renovation impact—transformed railings immediately refresh building appearance and can significantly affect unit values. Renovation provides the chance to move from dated aluminum picket systems to contemporary glass panels, or from corroded steel to marine-grade aluminum with premium finishes. The aesthetic improvement transforms how residents experience their balconies daily.
            </p>

            <p className="text-gray-600 mb-6">
              Code compliance often drives railing decisions during renovation. Many older buildings have railings that don't meet current Florida Building Code requirements for height, opening size, or structural capacity. Renovation that includes railing replacement brings balconies into compliance while achieving aesthetic goals. The additional cost for code-compliant railings is typically minimal compared to the liability reduction achieved.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Managing Renovation in Occupied Buildings
            </h2>
            <p className="text-gray-600 mb-6">
              High-rise balcony renovation must proceed while residents continue living in their units. Unlike new construction where schedules are driven by completion dates, renovation schedules must accommodate occupant needs while maintaining project momentum. Successful projects balance production efficiency with resident consideration.
            </p>

            <p className="text-gray-600 mb-6">
              Communication is essential for resident relations during renovation. Advance notice of scheduled work allows residents to plan around balcony access restrictions. Clear explanations of what to expect—noise, access limitations, curing times—prevent complaints and build support for the project. Regular updates on progress maintain confidence that the disruption will be worthwhile.
            </p>

            <p className="text-gray-600 mb-6">
              Phasing strategies help maintain building livability during renovation. Working on one elevation at a time allows residents on other sides to continue normal balcony use. Completing common area balconies during different phases than unit balconies maintains some outdoor amenity access throughout the project. Experienced contractors develop phasing plans that balance production efficiency with resident impact.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Balcony Renovation Costs in Tampa Bay
          </h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-md">
              <thead className="bg-brand-green text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Renovation Scope</th>
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
            *Costs vary based on existing condition, material selections, and project scale. Contact us for a detailed estimate.
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
              "High-rise renovation expertise",
              "SB 4-D compliance specialists",
              "Comprehensive project approach",
              "Condo association experience",
              "Premium material options",
              "Experienced crews",
              "Minimal resident disruption",
              "Comprehensive warranties",
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
      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      

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
            Ready to Transform Your Building's Balconies?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for comprehensive balcony renovation that addresses structural needs while creating beautiful outdoor spaces.
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
