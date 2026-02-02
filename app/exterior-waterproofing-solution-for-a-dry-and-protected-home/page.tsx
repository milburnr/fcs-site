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
  title: "Exterior Waterproofing Solutions for Commercial Buildings Tampa",
  description: "Comprehensive exterior waterproofing solutions for high-rise condominiums and commercial buildings in Tampa Bay. SB 4-D compliant building envelope protection and facade waterproofing.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Exterior Waterproofing Solutions", href: "/exterior-waterproofing-solution-for-a-dry-and-protected-home/" },
];

const internalLinks = [
  { href: "/services/residential/exterior-waterproofing/", label: "Exterior Waterproofing Services" },
  { href: "/effective-exterior-waterproofing-methods-for-your-property/", label: "Waterproofing Methods" },
  { href: "/ultimate-waterproofing-guide-foundations/", label: "Foundation Waterproofing" },
  { href: "/services/residential/balcony-reconstruction/", label: "SB4-D Compliance" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const faqs = [
  {
    question: "What exterior waterproofing solutions protect commercial buildings?",
    answer: "Commercial exterior waterproofing employs multiple coordinated systems. Elastomeric wall coatings provide breathable, crack-bridging protection for stucco and concrete surfaces. Joint sealants protect expansion joints and material transitions. Window and door perimeter sealing stops infiltration at these vulnerable openings. Below-grade waterproofing protects foundations from groundwater. Through-wall flashing intercepts water that penetrates outer surfaces. Each system must integrate with adjacent systems to create comprehensive building envelope protection."
  },
  {
    question: "How does SB 4-D affect exterior waterproofing requirements in Florida?",
    answer: "Florida's SB 4-D legislation requires milestone structural inspections for condominiums three stories or higher. While focused on structural elements, these inspections evaluate evidence of water intrusion through exterior envelopes—staining, efflorescence, corrosion, and concrete deterioration. Buildings with documented envelope failures must address waterproofing as part of remediation plans. SIRS requirements mandate reserve funding for exterior coating maintenance and replacement. Proactive envelope maintenance helps associations avoid the structural damage that triggers compliance issues."
  },
  {
    question: "What are the signs of exterior waterproofing failure in commercial buildings?",
    answer: "Warning signs include interior water intrusion (ceiling stains, wall discoloration, peeling paint), exterior facade problems (cracking, staining, efflorescence), failed caulk joints (hardened, cracked, or missing sealant), window leaks, and concrete deterioration (spalling, rust staining, delamination). Musty odors, increased humidity, and mold growth indicate moisture intrusion. Annual exterior inspections identify problems early when repairs are least expensive. Post-storm inspections catch damage before secondary water intrusion occurs."
  },
  {
    question: "How often should commercial exterior waterproofing be maintained?",
    answer: "Maintenance schedules depend on system type and exposure. Elastomeric wall coatings need inspection every 2-3 years with recoating every 10-15 years. Joint sealants require annual inspection with replacement every 7-15 years depending on exposure. Window perimeter seals need annual inspection with replacement as needed. Below-grade waterproofing typically requires no maintenance unless leaks develop. A comprehensive building envelope maintenance program budgets for these intervals and catches problems early."
  },
  {
    question: "What is the cost of exterior waterproofing for commercial buildings in Tampa?",
    answer: "Commercial exterior waterproofing costs vary by scope and building size. Elastomeric wall coating systems cost $3-8 per square foot of wall area. Joint sealant replacement runs $8-15 per linear foot. Window perimeter sealing costs $150-400 per opening. Below-grade waterproofing (when excavation required) ranges $15-30 per square foot. Complete building envelope restoration for high-rise buildings can cost $15-40 per square foot of exterior wall area. Scaffolding and access equipment add $3-8 per square foot depending on building height."
  },
  {
    question: "Can exterior waterproofing be applied to occupied commercial buildings?",
    answer: "Yes, most exterior waterproofing work proceeds with buildings fully occupied. Interior spaces are unaffected during exterior coating and sealant work. Some interior access may be needed for window perimeter sealing. Scaffolding and swing stages create visual impact and may restrict window opening. Weather protection of furniture and vehicles during coating operations prevents overspray damage. Noise from surface preparation affects adjacent spaces during work hours. Experienced contractors schedule to minimize disruption while maintaining project progress."
  }
];

const costData = [
  { service: "Elastomeric Wall Coating System", costRange: "$3 - $8", perUnit: "Per sq ft" },
  { service: "Joint Sealant Replacement", costRange: "$8 - $15", perUnit: "Per linear ft" },
  { service: "Window Perimeter Sealing", costRange: "$150 - $400", perUnit: "Per opening" },
  { service: "Expansion Joint Treatment", costRange: "$20 - $50", perUnit: "Per linear ft" },
  { service: "Below-Grade Waterproofing (with excavation)", costRange: "$15 - $30", perUnit: "Per sq ft" },
  { service: "Stucco/Facade Repair", costRange: "$15 - $40", perUnit: "Per sq ft" },
  { service: "Scaffolding/Swing Stage Access", costRange: "$3 - $8", perUnit: "Per sq ft (adder)" },
  { service: "Complete Envelope Restoration", costRange: "$15 - $40", perUnit: "Per sq ft" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Exterior Waterproofing Solutions"
        serviceDescription="Comprehensive exterior waterproofing solutions for high-rise condominiums and commercial buildings in Tampa Bay. Building envelope protection and facade waterproofing."
        city="Tampa"
        minPrice="5000"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
            alt="Exterior waterproofing solutions for commercial buildings"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Exterior Waterproofing Solutions for Protected Buildings
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
              The exterior envelope of a commercial building represents far more than an aesthetic surface—it's a complex system of coordinated components that protect the building structure, interior spaces, and occupants from water intrusion. When any element of this system fails, water finds pathways to interior spaces where it damages finishes, promotes mold growth, and ultimately deteriorates structural elements. Florida Construction Specialists provides comprehensive exterior waterproofing solutions that protect commercial buildings and high-rise condominiums throughout Tampa Bay.
            </p>

            <p className="text-gray-600 mb-6">
              High-rise buildings face particular challenges because of their exposure to weather conditions that low-rise structures rarely experience. Wind speeds increase with height, driving rain horizontally into facade systems that would easily shed vertical rainfall. Building sway under wind loads stresses sealant joints and can open gaps at material transitions. The combination of height, exposure, and Tampa Bay's aggressive climate demands exterior waterproofing systems specifically designed for these conditions.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Building Envelope System Integration
            </h2>
            <p className="text-gray-600 mb-6">
              Effective exterior waterproofing requires understanding the building envelope as an integrated system rather than a collection of independent components. Wall coatings, sealant joints, window systems, flashings, and drainage elements must all work together—water that penetrates one element must be intercepted and expelled by backup systems before reaching interior spaces or structural elements.
            </p>

            <p className="text-gray-600 mb-6">
              This systems approach recognizes that perfect waterproofing at every point is unrealistic given the stresses buildings experience. Instead, multiple lines of defense create redundancy that maintains protection even when individual elements experience partial failure. Through-wall flashings intercept water that penetrates outer surfaces and direct it back to the exterior. Weep systems in window frames drain water that bypasses perimeter seals. Drainage cavities behind cladding materials provide escape paths for moisture that enters wall assemblies.
            </p>

            <p className="text-gray-600 mb-6">
              Maintenance of building envelope systems requires attention to all elements, not just visible coating surfaces. Deteriorated sealants, clogged weeps, damaged flashings, and failed window seals all create water entry points that coating systems alone cannot prevent. Comprehensive exterior waterproofing addresses the complete envelope system.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              SB 4-D Compliance and Building Protection
            </h2>
            <p className="text-gray-600 mb-6">
              Florida's SB 4-D legislation has elevated the importance of exterior waterproofing for condominium associations. Milestone structural inspections required for buildings three stories or higher specifically evaluate evidence of water intrusion damage. Inspectors look for staining, efflorescence, spalling, and corrosion that indicate water has penetrated the building envelope and reached structural elements.
            </p>

            <p className="text-gray-600 mb-6">
              When inspections reveal water intrusion damage, associations must address both the structural deterioration and the underlying envelope failures. Simply repairing interior damage without correcting exterior waterproofing deficiencies guarantees recurring problems. The inspection reports become part of the building's permanent record, and subsequent inspections will evaluate whether identified issues have been properly addressed.
            </p>

            <p className="text-gray-600 mb-6">
              The Structural Integrity Reserve Study (SIRS) mandated by SB 4-D must include exterior waterproofing systems among components requiring reserve funding. Associations can no longer treat envelope maintenance as discretionary—the law requires realistic budgeting for coating renewal, sealant replacement, and other envelope maintenance. Our waterproofing services support both immediate compliance needs and long-term reserve planning.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Elastomeric Wall Coating Systems
            </h2>
            <p className="text-gray-600 mb-6">
              Elastomeric coatings provide the primary waterproofing defense for most commercial building exterior walls in Florida. These high-build acrylic or urethane-based products form flexible, seamless membranes that bridge hairline cracks while allowing water vapor to escape from within wall assemblies. The "breathable" characteristic is essential—coatings that trap moisture within walls cause as many problems as coatings that allow water penetration.
            </p>

            <p className="text-gray-600 mb-6">
              Quality elastomeric coatings maintain their flexibility and adhesion through years of thermal cycling and UV exposure. Lesser products harden over time, losing the ability to stretch with concrete movement and eventually cracking or delaminating. Florida's intense UV radiation accelerates coating degradation, making UV-stable formulations essential for high-rise applications where coating replacement is expensive and disruptive.
            </p>

            <p className="text-gray-600 mb-6">
              Surface preparation determines coating success as much as product selection. Existing loose coatings, chalking, and surface contamination must be removed before application. Cracks require repair to restore substrate integrity. Stucco surfaces may need pressure washing, patching, and texturing before coating. This preparation work often represents the majority of project cost and directly affects coating longevity.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Joint Sealant Systems
            </h2>
            <p className="text-gray-600 mb-6">
              Sealant joints represent some of the most critical—and most failure-prone—elements of exterior waterproofing systems. Expansion joints accommodate building movement from thermal changes, wind loads, and settlement. Control joints manage cracking in stucco and concrete. Perimeter seals around windows, doors, and penetrations stop water entry at vulnerable openings.
            </p>

            <p className="text-gray-600 mb-6">
              Sealant materials have varying properties suited to different applications. Silicone sealants offer excellent durability and weathering resistance but limited paintability. Polyurethane sealants provide good adhesion and paintability but may harden over time. Hybrid polymer sealants combine favorable properties at higher cost. Material selection considers joint movement, substrate compatibility, and expected service life.
            </p>

            <p className="text-gray-600 mb-6">
              Joint preparation proves as important as sealant selection. Failed sealant must be completely removed. Joint surfaces must be clean and dry. Backer rod establishes proper joint depth. Fresh sealant must be tooled to ensure substrate contact. Shortcuts in preparation result in premature failure regardless of sealant quality.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Window and Door Waterproofing
            </h2>
            <p className="text-gray-600 mb-6">
              Windows and doors represent the most common water entry points in building envelopes. The interfaces between frame assemblies and surrounding wall construction must accommodate differential movement while maintaining water-tight seals. Original installations often rely on sealant alone at these interfaces—sealant that eventually fails from UV exposure, movement, and aging.
            </p>

            <p className="text-gray-600 mb-6">
              Comprehensive window waterproofing goes beyond simple re-caulking. Self-adhering membrane flashings applied at rough openings provide backup protection when perimeter seals fail. Sill pan flashings beneath windows collect infiltrating water and direct it to exterior weeps. Head flashings above windows shed water away from vulnerable joints. These secondary defenses prevent the interior damage that occurs when primary seals fail.
            </p>

            <p className="text-gray-600 mb-6">
              Weep systems require regular maintenance to function properly. Clogged weeps trap water within frame assemblies, causing corrosion, staining, and eventual frame deterioration. Annual cleaning ensures water drains as designed. Inspection during maintenance visits identifies damaged weeps requiring repair.
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
            *Costs vary based on building height, access requirements, and scope. Contact us for a detailed estimate.
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
              "Commercial building expertise",
              "SB 4-D compliance specialists",
              "Integrated envelope approach",
              "Premium coating systems",
              "Experienced high-rise crews",
              "Comprehensive warranties",
              "Minimal tenant disruption",
              "Tampa Bay-wide service",
              "Emergency response capability"
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
            Protect Your Building with Expert Waterproofing
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for comprehensive exterior waterproofing solutions that protect your commercial property.
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
