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
  title: "Waterproofing Solutions for Basements & Below-Grade Spaces | Commercial Buildings Tampa",
  description: "Professional basement and below-grade waterproofing for commercial buildings and condominiums in Tampa Bay. Expert solutions for parking garages, storage areas, and mechanical rooms.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Guide to Waterproofing Solutions for Basements", href: "/guide-to-waterproofing-solutions-for-basements/" },
];

const internalLinks = [
  { href: "/ultimate-waterproofing-guide-foundations/", label: "Foundation Waterproofing Guide" },
  { href: "/services/residential/exterior-waterproofing/", label: "Exterior Waterproofing" },
  { href: "/waterproofing-commercial-contractors/", label: "Commercial Waterproofing" },
  { href: "/services/residential/balcony-reconstruction/", label: "SB4-D Compliance" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const faqs = [
  {
    question: "What causes water intrusion in commercial basement and below-grade spaces?",
    answer: "Water intrusion in commercial below-grade spaces results from multiple factors. Hydrostatic pressure from high water tables forces water through foundation walls and floor slabs. Inadequate drainage around foundations allows water to accumulate against waterproofing systems. Construction defects including cold joints, honeycomb voids, and poor waterproofing installation create pathways for water entry. Settlement cracks from building movement open new leak paths over time. In Tampa Bay, seasonal variations in the water table, combined with intense storm events, create fluctuating pressures that stress waterproofing systems."
  },
  {
    question: "How does SB 4-D affect below-grade waterproofing in Florida condominiums?",
    answer: "Florida's SB 4-D requires milestone structural inspections for condominiums three stories or higher, with below-grade spaces subject to evaluation for water intrusion evidence and structural deterioration. Inspectors assess parking garage slabs, foundation walls, and below-grade mechanical rooms for signs of waterproofing failure including efflorescence, active leaks, corrosion staining, and concrete damage. SIRS requirements mandate reserve funding for waterproofing system maintenance and replacement. Associations with documented water intrusion issues may face accelerated repair timelines under the legislation."
  },
  {
    question: "What waterproofing systems work best for commercial parking garages?",
    answer: "Commercial parking garages require traffic-bearing waterproofing systems that withstand vehicle loads while preventing water penetration. Elastomeric deck coatings (polyurethane or polyurea-based) provide seamless, flexible protection with good abrasion resistance. Epoxy overlay systems offer superior chemical resistance but less flexibility. Membrane-under-wearing-course systems separate the waterproofing function from the traffic surface for maximum protection. For below-grade parking levels, positive-side exterior waterproofing prevents water contact with structural concrete. System selection depends on traffic intensity, exposure conditions, and budget."
  },
  {
    question: "Can basement waterproofing be done from inside the building?",
    answer: "Yes, interior (negative-side) waterproofing provides a solution when exterior access is impractical. Cementitious crystalline coatings penetrate concrete to form water-blocking crystals within the pore structure. Cavity drainage systems (dimple membranes with interior drainage channels) collect and redirect water to sumps for pumping. Injection grouting seals individual cracks with expanding polyurethane or structural epoxy. While interior systems can effectively control water, they don't prevent water from contacting and potentially deteriorating the structural concrete like exterior systems do."
  },
  {
    question: "How much does commercial basement waterproofing cost in Tampa Bay?",
    answer: "Commercial basement waterproofing costs depend on the system type and extent of work required. Interior cementitious coatings typically cost $5-12 per square foot. Cavity drainage systems with sump pumps run $15-30 per linear foot of wall. Crack injection averages $100-300 per linear foot. Parking garage deck coating systems range from $8-20 per square foot. Complete below-grade waterproofing rehabilitation, including concrete repairs and new membrane systems, can cost $25-50 per square foot. Large commercial projects often negotiate volume pricing that reduces unit costs significantly."
  },
  {
    question: "How long does commercial basement waterproofing last?",
    answer: "Service life varies by system and maintenance practices. Exterior positive-side membranes typically provide 30-50 years of service when properly installed and protected. Interior cementitious coatings last 15-25 years. Parking deck traffic coatings require recoating every 7-15 years depending on traffic intensity. Cavity drainage systems can function indefinitely with proper pump maintenance. Crack injection repairs are considered permanent for structural cracks, though building movement may open new cracks over time. Regular inspection and maintenance extend all system service lives."
  }
];

const costData = [
  { service: "Interior Cementitious Coating", costRange: "$5 - $12", perUnit: "Per sq ft" },
  { service: "Crystalline Waterproofing Treatment", costRange: "$3 - $8", perUnit: "Per sq ft" },
  { service: "Cavity Drainage System", costRange: "$15 - $30", perUnit: "Per linear ft" },
  { service: "Sump Pump Installation (commercial)", costRange: "$2,500 - $6,000", perUnit: "Per unit" },
  { service: "Crack Injection (polyurethane)", costRange: "$100 - $200", perUnit: "Per linear ft" },
  { service: "Crack Injection (epoxy)", costRange: "$150 - $300", perUnit: "Per linear ft" },
  { service: "Parking Deck Traffic Coating", costRange: "$8 - $20", perUnit: "Per sq ft" },
  { service: "Complete Below-Grade Rehabilitation", costRange: "$25 - $50", perUnit: "Per sq ft" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Basement Waterproofing Solutions"
        serviceDescription="Professional basement and below-grade waterproofing for commercial buildings and condominiums in Tampa Bay. Expert solutions for parking garages, storage areas, and mechanical rooms."
        city="Tampa"
        minPrice="5000"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
            alt="Basement waterproofing for commercial buildings"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Waterproofing Solutions for Basements & Below-Grade Spaces
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Comprehensive waterproofing solutions for commercial basements, parking structures, and below-grade spaces throughout Tampa Bay.
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
              Below-grade waterproofing protects some of the most critical—and vulnerable—spaces in commercial buildings and high-rise condominiums. Parking garages, mechanical rooms, storage areas, and building amenities located below grade face continuous exposure to groundwater, stormwater infiltration, and hydrostatic pressure. When waterproofing systems fail, the consequences extend far beyond water intrusion: structural concrete deteriorates, embedded steel corrodes, equipment fails, and building operations suffer significant disruption.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists provides expert below-grade waterproofing services for commercial properties throughout Tampa, St. Petersburg, Clearwater, Sarasota, and Lakeland. Our approach combines proven waterproofing technologies with the engineering expertise needed to diagnose complex water intrusion problems and implement lasting solutions. Whether you're addressing active leaks in an existing building or planning waterproofing for new construction, we deliver systems that perform under Tampa Bay's demanding conditions.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Below-Grade Water Intrusion Challenges
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay's geology creates particularly challenging conditions for below-grade waterproofing. The region's shallow water table—often just a few feet below grade—subjects foundation walls and floor slabs to constant hydrostatic pressure. During wet seasons and storm events, water table levels rise rapidly, increasing pressure on waterproofing systems. The sandy soils prevalent throughout the region drain quickly, delivering large volumes of stormwater to foundation perimeters where inadequate drainage allows water to accumulate.
            </p>

            <p className="text-gray-600 mb-6">
              High-rise condominiums face particular challenges because their below-grade parking structures serve as the foundation for the entire building while also functioning as occupied spaces. Water intrusion doesn't just cause cosmetic problems—it damages resident vehicles, creates slip hazards, and most critically, initiates the corrosion process that deteriorates structural concrete. The cost of deferred maintenance in parking structures compounds rapidly as minor waterproofing failures progress to major structural repairs.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Positive-Side vs. Negative-Side Waterproofing
            </h2>
            <p className="text-gray-600 mb-6">
              Understanding the difference between positive-side and negative-side waterproofing helps building owners and managers make informed decisions about system selection. Positive-side waterproofing is applied to the exterior surface of foundation walls and slabs—the side where water pressure originates. This approach keeps water from ever contacting the structural concrete, providing the most effective protection for the building structure. However, positive-side systems can only be installed when exterior surfaces are accessible, either during new construction or through excavation of existing buildings.
            </p>

            <p className="text-gray-600 mb-6">
              Negative-side waterproofing is applied to interior surfaces—the opposite side from water pressure. These systems must resist water pressure trying to push the coating off the substrate, which is inherently more challenging than positive-side applications. However, negative-side systems can be installed from inside the building without excavation, making them practical for existing buildings where exterior access is limited or cost-prohibitive. Common negative-side approaches include cementitious coatings, crystalline treatments, and cavity drainage systems.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              SB 4-D and Below-Grade Space Requirements
            </h2>
            <p className="text-gray-600 mb-6">
              Florida's SB 4-D legislation has significant implications for below-grade waterproofing in condominium buildings. Milestone structural inspections required for buildings three stories or higher include evaluation of parking structures, foundation walls, and other below-grade structural elements. Inspecting engineers specifically look for evidence of water intrusion and its effects on structural components.
            </p>

            <p className="text-gray-600 mb-6">
              When inspectors identify water intrusion, associations must address the underlying causes as part of their remediation plans. Simply patching visible deterioration without correcting waterproofing failures leads to recurring damage and doesn't satisfy inspection requirements. The Structural Integrity Reserve Study (SIRS) mandated by SB 4-D must include reserve funding for waterproofing system maintenance and eventual replacement, requiring associations to develop long-term financial plans for these critical systems.
            </p>

            <p className="text-gray-600 mb-6">
              Our waterproofing services support SB 4-D compliance by providing thorough condition assessments that identify all water intrusion sources, implementing repairs that address root causes rather than symptoms, and documenting all work for association records. We coordinate with inspecting engineers to ensure waterproofing repairs satisfy their requirements and support the association's compliance position.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Parking Structure Waterproofing Systems
            </h2>
            <p className="text-gray-600 mb-6">
              Parking structure waterproofing presents unique challenges because the systems must simultaneously provide waterproofing protection and withstand vehicle traffic. The horizontal slabs that form parking decks experience the most demanding exposure: water pools on surfaces, vehicles track in road salts and chemicals, and tire abrasion wears away protective coatings. The vertical elements—columns, walls, and ramps—face different but equally challenging conditions.
            </p>

            <p className="text-gray-600 mb-6">
              Traffic-bearing membrane systems typically consist of multiple layers that work together to provide protection and durability. A primer coat ensures adhesion to the concrete substrate. The waterproofing membrane—usually polyurethane, polyurea, or modified epoxy—provides the actual water barrier. A wear course or topcoat provides UV resistance, chemical resistance, and the durability needed to withstand traffic. Some systems incorporate aggregate broadcast for additional slip resistance and abrasion protection.
            </p>

            <p className="text-gray-600 mb-6">
              System selection depends on traffic intensity, exposure conditions, and budget constraints. High-traffic areas like entrance ramps and drive aisles require maximum durability systems, while parking stalls with lighter traffic can utilize more economical coatings. We help building owners evaluate options and select systems that provide appropriate protection within budget parameters.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Crack Injection and Leak Repair
            </h2>
            <p className="text-gray-600 mb-6">
              Crack injection provides targeted repair for discrete leaks through foundation walls and slabs. The process involves drilling injection ports along crack paths, then pumping specially formulated resins into the cracks under pressure. The resins flow through the full depth of the crack, filling voids and bonding to concrete surfaces to create a watertight seal.
            </p>

            <p className="text-gray-600 mb-6">
              Two primary resin types serve different purposes. Polyurethane resins expand upon contact with water, making them ideal for active leaks where water is flowing through cracks. The expanding foam fills the entire crack volume and provides immediate water cutoff. Epoxy resins provide structural bonding that restores monolithic concrete behavior—important for cracks that affect structural capacity. Some repairs use both materials: polyurethane to stop water flow, followed by epoxy to restore structural integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Below-Grade Waterproofing Costs in Tampa Bay
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
            *Costs vary based on access conditions, system selection, and project scope. Contact us for a detailed estimate.
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
              "Below-grade waterproofing expertise",
              "SB 4-D compliance specialists",
              "Multiple system options",
              "Parking structure experience",
              "Engineering coordination",
              "Minimal operational disruption",
              "Comprehensive warranties",
              "Tampa Bay-wide service",
              "Emergency leak response"
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
            Stop Water Intrusion in Your Below-Grade Spaces
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for expert diagnosis and lasting solutions to your commercial waterproofing challenges.
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
