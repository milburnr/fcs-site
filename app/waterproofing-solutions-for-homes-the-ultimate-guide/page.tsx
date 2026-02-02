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
  title: "Waterproofing Solutions for High-Rise Residential Buildings Tampa",
  description: "Comprehensive waterproofing solutions for high-rise condominiums and residential buildings in Tampa Bay. SB 4-D compliant systems for balconies, garages, and building envelopes.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Waterproofing Solutions for Homes", href: "/waterproofing-solutions-for-homes-the-ultimate-guide/" },
];

const internalLinks = [
  { href: "/services/residential/exterior-waterproofing/", label: "Exterior Waterproofing" },
  { href: "/balcony-waterproofing-for-long-lasting-protection/", label: "Balcony Waterproofing" },
  { href: "/ultimate-waterproofing-guide-foundations/", label: "Foundation Waterproofing" },
  { href: "/services/residential/balcony-reconstruction/", label: "SB4-D Compliance" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const faqs = [
  {
    question: "What waterproofing systems protect high-rise residential buildings?",
    answer: "High-rise residential buildings require multiple coordinated waterproofing systems. Building envelope systems including elastomeric wall coatings, joint sealants, and window perimeter sealing protect exterior walls. Balcony waterproofing uses traffic-bearing membranes with proper drainage. Parking structure waterproofing employs deck coatings that withstand vehicle traffic. Roof systems provide primary overhead protection. Below-grade waterproofing protects foundation walls and slabs from groundwater. Each system must perform independently while integrating with adjacent systems at transitions."
  },
  {
    question: "How does SB 4-D affect waterproofing requirements for Florida condominiums?",
    answer: "Florida's SB 4-D legislation requires milestone structural inspections for condominiums three stories or higher. While focused on structural elements, these inspections evaluate waterproofing system performance through evidence of water intrusion—efflorescence, staining, corrosion, and concrete deterioration. Associations must address waterproofing failures that cause or contribute to structural damage. SIRS requirements mandate reserve funding for waterproofing system maintenance and replacement. Proactive waterproofing maintenance helps associations avoid the emergency repairs that strain budgets and trigger special assessments."
  },
  {
    question: "What are the warning signs of waterproofing failure in residential buildings?",
    answer: "Warning signs vary by location. Interior water intrusion appears as ceiling stains, wall discoloration, peeling paint, and mold growth. Balcony indicators include cracked or peeling coatings, standing water, and visible deterioration of underlying concrete. Parking garage signs include ceiling drips, efflorescence, rust staining, and concrete spalling. Exterior envelope failures show as stucco cracking, failed caulk joints, and window seal deterioration. Any of these signs warrant professional evaluation to prevent progression from water damage to structural damage."
  },
  {
    question: "How often should high-rise residential waterproofing systems be maintained?",
    answer: "Maintenance schedules depend on system type and exposure. Elastomeric wall coatings need inspection every 2-3 years with recoating every 10-15 years. Joint sealants require annual inspection with replacement every 7-15 years. Balcony traffic coatings need annual inspection with recoating every 5-10 years depending on wear. Parking deck coatings follow similar schedules based on traffic intensity. Roof systems require bi-annual inspection with maintenance as needed. A comprehensive building maintenance program catches problems early when repairs are least expensive."
  },
  {
    question: "What is the cost of waterproofing for high-rise residential buildings in Tampa?",
    answer: "Waterproofing costs vary significantly by system and scope. Building envelope coating systems typically cost $3-8 per square foot of wall area. Balcony waterproofing ranges from $15-40 per square foot including deck coatings. Parking structure deck coatings run $8-20 per square foot. Joint sealant replacement averages $8-15 per linear foot. Complete building envelope restoration for a high-rise can range from $500,000 to $2,000,000+ depending on building size and condition. Associations typically fund these projects through reserves, special assessments, or loans."
  },
  {
    question: "Can waterproofing be done while residents remain in the building?",
    answer: "Yes, most waterproofing work can proceed with residents in place, though some disruption is unavoidable. Exterior wall coating doesn't affect interior occupancy. Balcony work restricts individual unit access to the balcony during treatment—typically 3-7 days per unit. Parking structure work may require temporary relocation of vehicles. Scheduling considerations include noise hours, access restrictions, and safety provisions. Experienced contractors develop phasing plans that maintain building operations while achieving quality installation. Clear communication with residents about schedules and expectations minimizes complaints."
  }
];

const costData = [
  { service: "Exterior Wall Coating System", costRange: "$3 - $8", perUnit: "Per sq ft" },
  { service: "Balcony Waterproofing (complete)", costRange: "$15 - $40", perUnit: "Per sq ft" },
  { service: "Parking Deck Traffic Coating", costRange: "$8 - $20", perUnit: "Per sq ft" },
  { service: "Joint Sealant Replacement", costRange: "$8 - $15", perUnit: "Per linear ft" },
  { service: "Window Perimeter Sealing", costRange: "$150 - $400", perUnit: "Per opening" },
  { service: "Roof Coating System", costRange: "$4 - $10", perUnit: "Per sq ft" },
  { service: "Below-Grade Wall Treatment", costRange: "$8 - $20", perUnit: "Per sq ft" },
  { service: "Complete Building Envelope (typical)", costRange: "$500K - $2M+", perUnit: "Per building" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Residential Building Waterproofing"
        serviceDescription="Comprehensive waterproofing solutions for high-rise condominiums and residential buildings in Tampa Bay. SB 4-D compliant systems for balconies, parking garages, and building envelopes."
        city="Tampa"
        minPrice="10000"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
            alt="Waterproofing solutions for residential buildings"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Waterproofing Solutions for Residential Buildings: The Ultimate Guide
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Comprehensive waterproofing systems for high-rise condominiums protecting balconies, parking structures, and building envelopes throughout Tampa Bay.
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
              High-rise residential buildings face extraordinary waterproofing challenges that demand professional solutions far beyond typical residential applications. The combination of building height, horizontal surfaces exposed to weather, below-grade parking structures, and complex building envelope systems creates multiple opportunities for water intrusion. When waterproofing fails in these buildings, the consequences extend far beyond inconvenience—structural damage, unit damage, and habitability issues can result in hundreds of thousands of dollars in repairs and severe impacts on unit values.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists provides comprehensive waterproofing services for high-rise condominiums and residential buildings throughout Tampa, St. Petersburg, Clearwater, Sarasota, and Lakeland. Our integrated approach addresses all building waterproofing systems—from roof to foundation—ensuring that individual repairs work together as part of a comprehensive building protection strategy. Following Florida's SB 4-D legislation, we help condominium associations develop waterproofing programs that satisfy inspection requirements while protecting association budgets.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Understanding High-Rise Waterproofing Challenges
            </h2>
            <p className="text-gray-600 mb-6">
              High-rise residential buildings experience waterproofing stresses that low-rise structures never encounter. Wind-driven rain at upper floors can penetrate facade systems that easily shed vertical rainfall. Building sway under wind loads stresses sealant joints and can open gaps at material transitions. Thermal cycling from full sun exposure causes expansion and contraction that fatigues waterproofing membranes. The stack effect—rising warm air creating pressure differentials—can pull moisture into building assemblies.
            </p>

            <p className="text-gray-600 mb-6">
              Tampa Bay's climate adds additional stress factors. Annual rainfall exceeding 50 inches tests every waterproofing system regularly. Hurricane seasons bring extreme wind-driven rain events that reveal weaknesses invisible during normal weather. Salt air corrodes exposed metal components and accelerates coating deterioration. Intense UV radiation breaks down organic coating compounds and sealant materials. These combined stresses demand waterproofing systems specifically designed for Florida conditions.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              SB 4-D Compliance and Building Protection
            </h2>
            <p className="text-gray-600 mb-6">
              Florida's SB 4-D legislation has transformed how condominium associations approach building waterproofing. The milestone structural inspections required for buildings three stories or higher specifically evaluate evidence of water intrusion damage. Inspectors look for efflorescence (white mineral deposits indicating water migration), corrosion staining, concrete spalling and delamination, and other signs that water has reached structural elements.
            </p>

            <p className="text-gray-600 mb-6">
              When inspections reveal water intrusion damage, associations must address both the structural deterioration and the underlying waterproofing failures. Simply repairing concrete without correcting the water source guarantees recurring damage. The inspection reports become part of the building's permanent record, and subsequent inspections will evaluate whether identified issues have been properly addressed.
            </p>

            <p className="text-gray-600 mb-6">
              The Structural Integrity Reserve Study (SIRS) required by SB 4-D must include waterproofing systems among components requiring reserve funding. Associations can no longer treat waterproofing maintenance as an optional expense—the law mandates adequate reserves for these building-critical systems. This requirement forces associations to plan for inevitable waterproofing system replacement and budget accordingly.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Balcony Waterproofing for Condominiums
            </h2>
            <p className="text-gray-600 mb-6">
              Balconies represent one of the most challenging waterproofing applications in residential buildings. The horizontal surfaces collect rain rather than shedding it, exposing waterproofing membranes to standing water. Foot traffic, furniture movement, and barbecue grills create wear that can damage protective coatings. Railing post penetrations, door thresholds, and drainage scuppers all represent potential leak points that must be properly detailed.
            </p>

            <p className="text-gray-600 mb-6">
              Effective balcony waterproofing employs traffic-bearing membrane systems that combine waterproofing protection with durability for regular use. These multi-layer systems typically include primers for substrate adhesion, waterproofing membranes (often polyurethane or polyurea), and topcoats that provide UV resistance, wear resistance, and slip resistance. Proper installation requires careful surface preparation, correct coating thickness, and attention to detail at all transitions and penetrations.
            </p>

            <p className="text-gray-600 mb-6">
              Drainage design proves critical for balcony waterproofing success. Slabs must slope adequately toward scuppers or drains—minimum 1/4 inch per foot. Drains must be sized to handle Tampa Bay's intense rainfall without backing up. Overflow provisions prevent flooding when primary drains clog. The waterproofing system must integrate with all drainage elements to ensure water moves efficiently off the balcony surface.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Parking Structure Protection
            </h2>
            <p className="text-gray-600 mb-6">
              Below-grade and elevated parking structures face unique waterproofing challenges. Vehicle traffic creates wear and tear that surface-applied waterproofing systems must withstand. Petroleum drips, road salt residue (from vehicles traveling from northern states), and cleaning chemicals can attack waterproofing materials. The large horizontal surfaces of parking decks can collect substantial water volumes during rain events.
            </p>

            <p className="text-gray-600 mb-6">
              Parking deck waterproofing systems must simultaneously provide water resistance and traffic durability. Elastomeric traffic coatings create seamless, crack-bridging membranes that flex with concrete movement while withstanding tire abrasion. Aggregate broadcast or textured topcoats provide the traction needed for vehicle safety. Color coding can delineate traffic lanes, parking stalls, and pedestrian paths while enhancing the parking experience.
            </p>

            <p className="text-gray-600 mb-6">
              Structural steel protection in parking garages requires special attention. Exposed beams, columns, and connections corrode rapidly when exposed to moisture and chlorides. Protective coatings, regular inspection, and prompt treatment of coating damage preserve structural capacity. Joints between structural elements must accommodate movement while preventing water penetration to embedded steel.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Building Envelope Waterproofing
            </h2>
            <p className="text-gray-600 mb-6">
              The building envelope—all exterior surfaces that separate interior from exterior—forms the primary defense against water intrusion. For high-rise residential buildings, envelope waterproofing includes wall coating systems, joint sealants, window and door perimeter sealing, and transitions to adjacent systems like roofing and balconies. Each element must perform its function while working with adjacent systems.
            </p>

            <p className="text-gray-600 mb-6">
              Elastomeric wall coatings provide breathable waterproofing for exterior wall surfaces. These high-build acrylic or urethane products bridge hairline cracks while allowing moisture vapor to escape from wall assemblies. Quality elastomerics maintain flexibility through years of thermal cycling and UV exposure. Proper surface preparation—cleaning, crack repair, and priming—proves essential for coating adhesion and longevity.
            </p>

            <p className="text-gray-600 mb-6">
              Windows represent the most common water entry points in building envelopes. Perimeter sealant joints eventually fail from UV exposure and building movement. Flashing details may be inadequate or improperly installed. Weep systems can become clogged with debris. Comprehensive window waterproofing addresses all potential entry points with coordinated sealant, flashing, and drainage improvements.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Residential Building Waterproofing Costs in Tampa Bay
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
            *Costs vary based on building size, access requirements, and system selection. Contact us for a detailed estimate.
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
              "High-rise residential expertise",
              "SB 4-D compliance specialists",
              "Comprehensive building approach",
              "Condo association experience",
              "Premium waterproofing systems",
              "Minimal resident disruption",
              "Long-term warranties",
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
            Protect Your Building with Professional Waterproofing
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for comprehensive waterproofing solutions that protect your high-rise residential building.
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
