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
  title: "Balcony Restoration Services Tampa | High-Rise Commercial Experts",
  description: "Professional balcony restoration services for Tampa Bay high-rise condominiums and commercial buildings. SB 4-D compliant structural repairs, waterproofing, and complete balcony rehabilitation.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Balcony Restoration Services", href: "/balcony-restoration-services/" },
];

const internalLinks = [
  { href: "/sb-4-d-compliance-tampa-bay-condos/", label: "SB 4-D Compliance Guide" },
  { href: "/condo-milestone-inspection-remediation/", label: "Milestone Inspection Services" },
  { href: "/balcony-waterproofing-for-long-lasting-protection/", label: "Balcony Waterproofing" },
  { href: "/effective-balcony-maintenance-tips/", label: "Balcony Maintenance Tips" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const faqs = [
  {
    question: "What is included in professional balcony restoration services?",
    answer: "Professional balcony restoration encompasses a comprehensive scope of work including structural assessment by licensed engineers, concrete repair and reinforcement, rebar treatment and replacement, waterproofing membrane installation, drainage system improvements, railing repair or replacement, surface finishing, and final coating application. For high-rise condominiums, restoration also includes coordination with building management, compliance documentation for SB 4-D requirements, and detailed engineering reports for association records."
  },
  {
    question: "How does SB 4-D affect balcony restoration requirements in Florida?",
    answer: "Florida's SB 4-D legislation requires condominiums and cooperatives three stories or higher to undergo milestone structural inspections at 25 years (or 30 years if located more than 3 miles from the coast), with subsequent inspections every 10 years. Balconies are specifically identified as critical structural components requiring inspection. If deficiencies are found, restoration must be completed within a specified timeframe, and associations must maintain adequate reserves for structural repairs. Professional restoration services ensure compliance with these requirements and provide proper documentation."
  },
  {
    question: "How long does high-rise balcony restoration typically take?",
    answer: "The timeline for high-rise balcony restoration varies based on the scope of work and number of units. For a typical condominium building with 50-100 balconies, expect 3-6 months for the complete project. Individual balcony restoration typically takes 5-10 days per unit when extensive structural repairs are needed. Weather conditions, material lead times, and building access requirements all factor into the schedule. Experienced contractors work in phases to minimize disruption to residents while maintaining project momentum."
  },
  {
    question: "What are the warning signs that a balcony needs restoration?",
    answer: "Key warning signs include visible concrete cracking or spalling, exposed or rusted rebar, water staining on the underside of the balcony, soft or spongy areas in the concrete deck, tilting or unstable railings, pooling water that doesn't drain properly, deteriorating expansion joints, and efflorescence (white mineral deposits) on concrete surfaces. Any of these signs warrant immediate professional inspection, as balcony failures can pose serious safety risks."
  },
  {
    question: "How much does commercial balcony restoration cost in Tampa Bay?",
    answer: "Commercial balcony restoration costs in Tampa Bay typically range from $150-$400 per square foot depending on the extent of damage and scope of work required. Minor surface repairs and recoating may cost $50-$100 per square foot, while complete structural rehabilitation with rebar replacement, new waterproofing, and railings can exceed $400 per square foot. For a typical 50-square-foot high-rise balcony, expect costs between $7,500 and $20,000 per unit. Building-wide restoration projects often achieve economies of scale with per-unit costs 15-25% lower than individual repairs."
  },
  {
    question: "What waterproofing systems are used in balcony restoration?",
    answer: "Professional balcony restoration utilizes several waterproofing systems depending on the application. Traffic-bearing membrane systems like polyurethane or polyurea coatings provide seamless protection while withstanding foot traffic. Cementitious waterproofing is applied to concrete surfaces before finish coatings. Sheet membrane systems offer superior protection for high-exposure areas. Deck coating systems combine waterproofing with slip-resistant, UV-stable finishes. The selection depends on exposure conditions, building height, and expected traffic patterns."
  }
];

const costData = [
  { service: "Structural Assessment & Engineering", costRange: "$2,500 - $5,000", perUnit: "Per building" },
  { service: "Minor Concrete Repair & Recoating", costRange: "$50 - $100", perUnit: "Per sq ft" },
  { service: "Moderate Restoration (spalling/rebar)", costRange: "$150 - $250", perUnit: "Per sq ft" },
  { service: "Complete Structural Rehabilitation", costRange: "$300 - $400+", perUnit: "Per sq ft" },
  { service: "Waterproofing Membrane System", costRange: "$15 - $35", perUnit: "Per sq ft" },
  { service: "Railing Replacement (aluminum)", costRange: "$150 - $300", perUnit: "Per linear ft" },
  { service: "Railing Replacement (glass panel)", costRange: "$400 - $800", perUnit: "Per linear ft" },
  { service: "Typical High-Rise Balcony (50 sq ft)", costRange: "$7,500 - $20,000", perUnit: "Per unit" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Balcony Restoration Services"
        serviceDescription="Professional balcony restoration services for Tampa Bay high-rise condominiums and commercial buildings. SB 4-D compliant structural repairs, waterproofing, and complete balcony rehabilitation."
        city="Tampa"
        minPrice="7500"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
            alt="Professional balcony restoration services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Balcony Restoration Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Expert high-rise balcony restoration for Tampa Bay condominiums and commercial buildings. SB 4-D compliant structural repairs with comprehensive waterproofing solutions.
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
              Florida Construction Specialists delivers comprehensive balcony restoration services for high-rise condominiums and commercial properties throughout the Tampa Bay area, including Tampa, St. Petersburg, Clearwater, Sarasota, and Lakeland. As Florida's aging condominium stock faces increased scrutiny following the implementation of SB 4-D structural inspection requirements, professional balcony restoration has become essential for building safety, compliance, and property value preservation.
            </p>

            <p className="text-gray-600 mb-6">
              Our specialized approach to balcony restoration addresses the unique challenges of high-rise construction, where structural integrity, waterproofing performance, and aesthetic considerations must all work together. Unlike residential deck repairs, commercial balcony restoration requires engineering expertise, specialized equipment for elevated access, and an understanding of building envelope systems that protect not just the balcony but the entire structure from water intrusion.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Understanding High-Rise Balcony Deterioration
            </h2>
            <p className="text-gray-600 mb-6">
              Balconies on high-rise buildings face extraordinary environmental stresses that accelerate deterioration compared to ground-level structures. Tampa Bay's subtropical climate creates a particularly aggressive environment: intense UV radiation breaks down protective coatings, daily thermal cycling causes expansion and contraction stress, salt-laden air corrodes embedded steel reinforcement, and frequent heavy rains exploit any weakness in waterproofing systems.
            </p>

            <p className="text-gray-600 mb-6">
              The concrete slab that forms most high-rise balconies is reinforced with steel rebar positioned near the surface to provide tensile strength. When water penetrates the concrete—whether through cracks, failed waterproofing, or inadequate drainage—it reaches the steel and initiates corrosion. As steel rusts, it expands to several times its original volume, creating internal pressure that causes concrete spalling (surface chipping and flaking) and eventually structural compromise. This process, known as the corrosion-spalling cycle, is the primary cause of balcony deterioration in Florida buildings.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              SB 4-D Compliance and Milestone Inspections
            </h2>
            <p className="text-gray-600 mb-6">
              Florida's landmark SB 4-D legislation, enacted in response to the Champlain Towers South tragedy, establishes mandatory structural inspection requirements for condominiums and cooperatives three stories or higher. Buildings must undergo milestone inspections at 25 years of age (or 30 years if located more than 3 miles from the coast), with subsequent inspections every 10 years thereafter.
            </p>

            <p className="text-gray-600 mb-6">
              Balconies are specifically identified as structural elements requiring inspection under SB 4-D. A licensed architect or engineer must assess the condition of balcony slabs, railings, waterproofing systems, and connections to the building structure. If substantial structural deterioration is found, the law requires remediation within a specified timeframe, and associations must demonstrate adequate reserve funding for necessary repairs.
            </p>

            <p className="text-gray-600 mb-6">
              Our balcony restoration services are designed with SB 4-D compliance as a core consideration. We work directly with the inspecting engineers to understand their findings and recommendations, develop restoration plans that address all identified deficiencies, and provide comprehensive documentation that satisfies regulatory requirements and protects the association's compliance position.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              The Balcony Restoration Process
            </h2>
            <p className="text-gray-600 mb-6">
              Professional balcony restoration follows a systematic process that ensures lasting results. The work begins with a detailed condition assessment, including concrete testing (often using ground-penetrating radar to map rebar locations and identify delamination), corrosion potential mapping, and structural analysis. This assessment guides the scope of work and helps estimate costs accurately.
            </p>

            <p className="text-gray-600 mb-6">
              Structural repairs address the root causes of deterioration. Delaminated and spalled concrete is removed using pneumatic chipping hammers, exposing the corroded rebar beneath. Steel reinforcement is evaluated—severely corroded sections are cut out and replaced with new rebar, while salvageable sections are cleaned to bright metal and treated with corrosion-inhibiting coatings. Repair mortars specially formulated for overhead and vertical applications are used to restore the concrete section to its original profile.
            </p>

            <p className="text-gray-600 mb-6">
              Once structural repairs are complete, waterproofing installation prevents future water intrusion. For high-rise balconies, we typically specify traffic-bearing membrane systems that bond directly to the concrete substrate and provide seamless, crack-bridging protection. These systems must withstand not only water exposure but also foot traffic, furniture placement, and UV radiation without degradation. Proper slope-to-drain configuration ensures water moves efficiently to scuppers or drains rather than ponding on the surface.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Railing Systems and Safety Compliance
            </h2>
            <p className="text-gray-600 mb-6">
              Balcony railings are critical safety components that receive special attention during restoration. Florida Building Code requires minimum 42-inch height for guardrails on occupied balconies, maximum 4-inch spacing between balusters, and specific load-resistance ratings for both vertical and horizontal forces. Many older buildings have railings that don't meet current code requirements, creating both safety and liability concerns.
            </p>

            <p className="text-gray-600 mb-6">
              During restoration, existing railings are evaluated for structural integrity, code compliance, and aesthetic condition. Corroded aluminum railings may be refurbished if structurally sound, or replaced entirely if deterioration has compromised their integrity. Glass panel systems have become popular in high-rise restoration projects, providing unobstructed views while meeting code requirements. All railing attachments must be properly anchored to sound concrete, often requiring coordination with structural repairs to ensure adequate substrate.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Working with Condominium Associations
            </h2>
            <p className="text-gray-600 mb-6">
              Balcony restoration in high-rise condominiums requires careful coordination with building management and resident communication. Unlike commercial buildings with single ownership, condominium projects involve multiple stakeholders whose cooperation is essential for project success. We work closely with property managers and board members to develop project schedules that minimize disruption, establish clear communication protocols for residents, and coordinate access to individual units.
            </p>

            <p className="text-gray-600 mb-6">
              Phasing strategies help maintain building operations during restoration. We typically work on one building elevation at a time, allowing residents on unaffected sides to continue using their balconies normally. Advance notice protocols keep residents informed of scheduled work, and our crews are trained in the sensitivities of working in occupied residential buildings.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Balcony Restoration Costs in Tampa Bay
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
            *Costs vary based on building access, extent of damage, and material selections. Contact us for a detailed estimate.
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
              "Licensed and insured commercial contractor",
              "Extensive high-rise restoration experience",
              "SB 4-D compliance expertise",
              "In-house engineering coordination",
              "Premium waterproofing systems",
              "Comprehensive warranty programs",
              "Minimal disruption to residents",
              "Detailed project documentation",
              "Serving all Tampa Bay communities"
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
            Ready to Restore Your Building's Balconies?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists today for a comprehensive assessment and detailed proposal for your high-rise balcony restoration project.
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
