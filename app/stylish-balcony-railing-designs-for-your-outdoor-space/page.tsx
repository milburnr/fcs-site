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
  title: "Stylish Balcony Railing Designs for High-Rise Buildings Tampa",
  description: "Premium balcony railing designs for Tampa Bay high-rise condominiums. Code-compliant glass, aluminum, and cable railing systems with expert installation and SB 4-D compliance.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Stylish Balcony Railing Designs", href: "/stylish-balcony-railing-designs-for-your-outdoor-space/" },
];

const internalLinks = [
  { href: "/balcony-restoration-services/", label: "Balcony Restoration Services" },
  { href: "/expert-balcony-construction-guidelines-for-optimal-results/", label: "Balcony Construction Guidelines" },
  { href: "/top-balcony-flooring-materials-for-style-durability/", label: "Balcony Flooring Materials" },
  { href: "/services/residential/balcony-reconstruction/", label: "SB4-D Compliance" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const faqs = [
  {
    question: "What railing systems meet Florida Building Code requirements for high-rise balconies?",
    answer: "Florida Building Code requires guardrails minimum 42 inches high for residential occupancies, with openings no larger than 4 inches. Structural requirements include 200 pounds concentrated load at any point along the top rail, 50 pounds per linear foot uniform load, and 50 pounds concentrated load on intermediate rails. Glass panels must use safety glazing (tempered or laminated) with specific thickness requirements based on span and exposure. Cable railings must maintain maximum 4-inch spacing and resist 50 pounds concentrated load. All railing systems must meet wind load requirements based on building height and location."
  },
  {
    question: "How are balcony railings evaluated during SB 4-D inspections?",
    answer: "During milestone inspections required by SB 4-D, engineers evaluate railing structural integrity, anchorage conditions, and corrosion levels. Inspectors assess post attachment to the balcony substrate for signs of deterioration, looseness, or water intrusion at penetrations. Aluminum railings are checked for oxidation and joint integrity. Glass panels are examined for chips, cracks, and seal failures. Cable systems are inspected for proper tension and post connection integrity. Documentation of railing specifications and any prior repairs supports the inspection process."
  },
  {
    question: "What balcony railing materials work best in Tampa Bay's coastal environment?",
    answer: "Marine-grade aluminum with anodized or powder-coated finishes offers excellent durability in Tampa Bay's salt air environment. Stainless steel (316 marine grade) provides superior corrosion resistance for cable systems and hardware, though at higher cost. Glass panels must use appropriate edge treatments to prevent corrosion at exposed edges. Standard steel railings require aggressive coating maintenance and are generally not recommended for coastal high-rise applications. Material selection should balance initial cost, maintenance requirements, and expected service life."
  },
  {
    question: "Can existing balcony railings be upgraded without full replacement?",
    answer: "Upgrade options depend on current railing condition and desired improvements. Picket infill panels can replace solid panels on existing frames to improve views. Glass or cable infill can replace traditional balusters on structurally sound posts. Deteriorated posts can sometimes be reinforced rather than replaced. However, railings with significant structural deterioration, improper anchorage, or code non-compliance often require complete replacement. A professional assessment determines whether upgrade or replacement makes more sense for your specific situation."
  },
  {
    question: "What is the cost of balcony railing replacement for high-rise condominiums in Tampa?",
    answer: "High-rise balcony railing costs vary by system type and installation complexity. Standard aluminum picket systems typically cost $150-300 per linear foot installed. Glass panel systems range from $400-800 per linear foot for tempered glass, with laminated or structural glass systems at $600-1,200+. Cable railing systems run $250-500 per linear foot. For a typical 30 linear-foot high-rise balcony perimeter, expect $4,500-9,000 for aluminum, $12,000-36,000 for glass, or $7,500-15,000 for cable systems. Building-wide replacement projects often achieve volume pricing 15-25% below individual unit costs."
  },
  {
    question: "How long does balcony railing installation take for a high-rise building?",
    answer: "Individual balcony railing replacement typically requires 1-2 days per unit depending on system complexity and access conditions. Building-wide replacement projects proceed faster per unit due to setup efficiencies—experienced crews can complete 3-5 balconies per day in steady-state production. Total project duration depends on unit count: a 100-unit building might require 4-8 weeks for complete railing replacement. Weather delays, material availability, and building access restrictions affect schedules. Phased approaches that maintain some balcony access during installation add project duration but reduce resident impact."
  }
];

const costData = [
  { service: "Aluminum Picket Railing", costRange: "$150 - $300", perUnit: "Per linear ft" },
  { service: "Aluminum Panel Railing", costRange: "$200 - $350", perUnit: "Per linear ft" },
  { service: "Tempered Glass Panel System", costRange: "$400 - $800", perUnit: "Per linear ft" },
  { service: "Laminated Glass Panel System", costRange: "$600 - $1,000", perUnit: "Per linear ft" },
  { service: "Structural Glass System", costRange: "$800 - $1,200+", perUnit: "Per linear ft" },
  { service: "Cable Railing System", costRange: "$250 - $500", perUnit: "Per linear ft" },
  { service: "Typical Balcony (30 LF, aluminum)", costRange: "$4,500 - $9,000", perUnit: "Per unit" },
  { service: "Typical Balcony (30 LF, glass)", costRange: "$12,000 - $36,000", perUnit: "Per unit" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Balcony Railing Design and Installation"
        serviceDescription="Premium balcony railing designs for Tampa Bay high-rise condominiums. Code-compliant glass, aluminum, and cable railing systems with expert installation."
        city="Tampa"
        minPrice="4500"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
            alt="Stylish balcony railing designs for high-rise buildings"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Stylish Balcony Railing Designs for Your High-Rise
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Premium railing systems for Tampa Bay condominiums combining safety compliance, durability, and contemporary design.
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
              Balcony railings on high-rise condominiums serve critical safety functions while significantly influencing building aesthetics and unit values. The right railing system enhances views, creates visual interest, and communicates quality—all while meeting stringent Florida Building Code requirements for safety and structural performance. Florida Construction Specialists provides expert railing design, fabrication, and installation services for high-rise buildings throughout Tampa, St. Petersburg, Clearwater, Sarasota, and Lakeland.
            </p>

            <p className="text-gray-600 mb-6">
              Following Florida's SB 4-D legislation, balcony railings receive particular attention during milestone structural inspections. Corroded anchors, deteriorated posts, and compromised connections represent safety hazards that inspectors specifically evaluate. Our railing systems incorporate design features that enhance long-term durability, simplify future inspections, and protect associations from the maintenance challenges that burden many aging buildings.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Code Requirements for High-Rise Balcony Railings
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Building Code establishes minimum requirements that all balcony railings must satisfy. Height requirements mandate a minimum 42 inches from the finished floor surface to the top of the guardrail for residential occupancies. Opening restrictions limit gaps to 4 inches maximum—preventing children from passing through while maintaining aesthetic options. These dimensional requirements apply regardless of railing material or design style.
            </p>

            <p className="text-gray-600 mb-6">
              Structural load requirements ensure railings can withstand forces from occupant contact and wind pressure. Top rails must resist 200 pounds of concentrated load applied at any point, plus 50 pounds per linear foot distributed along the entire length. Intermediate rails, balusters, and infill panels must resist 50 pounds concentrated load. For high-rise applications, wind load calculations based on building height and coastal exposure often govern structural design, particularly for glass panel systems.
            </p>

            <p className="text-gray-600 mb-6">
              Glass railings face additional requirements under Florida Building Code. All glass must be safety glazing—either tempered or laminated—to prevent dangerous shards if breakage occurs. Glass thickness depends on panel size, support conditions, and wind load requirements. Edge treatment prevents moisture infiltration and corrosion. Proper engineering documentation ensures each installation meets applicable requirements.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              SB 4-D Inspection Considerations
            </h2>
            <p className="text-gray-600 mb-6">
              Florida's SB 4-D legislation requires milestone structural inspections for condominiums three stories or higher, with balcony railings among the elements evaluated. Inspecting engineers assess railing condition, anchorage integrity, and compliance with current code requirements. Significant findings may trigger remediation requirements that associations must address within specified timeframes.
            </p>

            <p className="text-gray-600 mb-6">
              Common inspection findings include corroded post anchors, loose connections, deteriorated fasteners, and signs of water intrusion at penetrations. Railings that don't meet current code requirements—common in older buildings constructed under previous codes—may be flagged for upgrade. Documentation of railing specifications, installation dates, and any repairs supports the inspection process and demonstrates association diligence.
            </p>

            <p className="text-gray-600 mb-6">
              Our railing systems are designed with future inspections in mind. Visible connections allow easy assessment of anchor condition. Access provisions enable inspection of concealed components when necessary. Clear documentation of materials, specifications, and installation details provides the information inspectors need. This proactive approach helps associations pass milestone inspections without unexpected findings.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Aluminum Railing Systems
            </h2>
            <p className="text-gray-600 mb-6">
              Aluminum remains the most popular railing material for Tampa Bay high-rise balconies, offering an excellent balance of durability, design flexibility, and cost-effectiveness. Marine-grade aluminum alloys resist the corrosion that attacks steel in coastal environments. Powder coating or anodizing provides color options while adding another layer of protection. Aluminum's light weight simplifies handling during installation, particularly important for high-rise projects where crane lifts and staging may be required.
            </p>

            <p className="text-gray-600 mb-6">
              Modern aluminum railing systems offer diverse design options. Traditional picket styles provide classic aesthetics with code-compliant spacing. Horizontal rail designs create contemporary looks while meeting openings requirements. Panel infills—solid, perforated, or decorative—offer privacy screening options. Custom profiles can match building architecture or achieve specific design visions. Color selections range from whites and blacks to custom colors that complement building palettes.
            </p>

            <p className="text-gray-600 mb-6">
              Installation considerations for aluminum railings include proper anchoring, thermal expansion allowance, and waterproofing at penetrations. Posts can be surface-mounted with base plates or core-mounted into sleeves set in the balcony slab. Each approach has advantages: surface mounting allows easier future replacement while core mounting provides cleaner aesthetics and potentially better waterproofing. Experienced installers select approaches appropriate for each building's conditions.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Glass Panel Railing Systems
            </h2>
            <p className="text-gray-600 mb-6">
              Glass panel railings maximize views and create a sense of openness that aluminum or cable systems cannot match. For high-rise condominiums where views are major selling points, glass railings can significantly enhance unit appeal and value. The unobstructed sightlines from interior spaces through the balcony to the horizon create a connection to the outdoors that transforms how residents experience their units.
            </p>

            <p className="text-gray-600 mb-6">
              Glass railing systems range from economical post-and-panel designs to structural glass configurations. Post-and-panel systems use aluminum or stainless steel posts with glass panels secured between them—a cost-effective approach that combines aluminum durability with glass aesthetics. Channel systems capture glass panels at top and bottom edges, eliminating intermediate posts for cleaner looks. Structural glass systems use only the glass panel and minimal hardware, achieving the most transparent appearance but at premium cost.
            </p>

            <p className="text-gray-600 mb-6">
              Glass selection significantly affects system performance and cost. Tempered glass shatters into small, relatively safe pieces if broken but cannot be modified after tempering. Laminated glass holds together when broken, providing fall protection even after breakage—important for high-rise applications. Heat-strengthened glass offers intermediate properties. Thickness requirements depend on wind loads and panel dimensions, with high-rise applications typically requiring thicker glass than low-rise installations.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Cable Railing Systems
            </h2>
            <p className="text-gray-600 mb-6">
              Cable railings offer a contemporary alternative that provides horizontal sightlines while meeting code requirements. The thin profile of stainless steel cables creates minimal visual obstruction, maintaining views while providing required protection. Cable systems work particularly well with modern architectural styles and can complement both aluminum and wood post systems.
            </p>

            <p className="text-gray-600 mb-6">
              Proper cable railing design requires attention to spacing, tension, and deflection requirements. Florida Building Code limits openings to 4 inches maximum, typically achieved with cables spaced 3 inches on center. Cables must resist 50 pounds of concentrated load without excessive deflection—typically limiting cable spans to 4-6 feet between intermediate posts. Marine-grade 316 stainless steel is essential for coastal Tampa Bay applications where inferior materials rapidly corrode.
            </p>

            <p className="text-gray-600 mb-6">
              Cable systems require periodic maintenance to maintain proper tension. Thermal expansion and contraction, combined with cable stretch over time, can loosen cables enough to exceed allowable opening sizes or deflection limits. Annual inspection and tension adjustment maintains code compliance and appearance. Our cable railing systems include adjustment provisions that simplify maintenance throughout system life.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Balcony Railing Costs in Tampa Bay
          </h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-md">
              <thead className="bg-brand-green text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Railing System</th>
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
            *Costs vary based on design complexity, building access, and project scale. Contact us for a detailed estimate.
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
              "High-rise railing expertise",
              "Code compliance assurance",
              "SB 4-D inspection support",
              "Premium material options",
              "Custom design capability",
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
            Upgrade Your Building's Balcony Railings
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for expert railing design and installation that enhances safety, aesthetics, and property value.
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
