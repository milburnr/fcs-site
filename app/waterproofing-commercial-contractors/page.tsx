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
  title: "Commercial Waterproofing Contractors Tampa | High-Rise Specialists - Florida Construction Specialists",
  description: "Expert commercial waterproofing contractors serving Tampa Bay high-rise condominiums and commercial buildings. SB 4-D compliant services for parking structures, building envelopes, and balconies.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Waterproofing Commercial Contractors", href: "/waterproofing-commercial-contractors/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/ultimate-waterproofing-guide-foundations/", label: "Foundation Waterproofing" },
  { href: "/balcony-waterproofing-for-long-lasting-protection/", label: "Balcony Waterproofing" },
  { href: "/services/residential/balcony-reconstruction/", label: "SB4-D Compliance" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const faqs = [
  {
    question: "What qualifications should commercial waterproofing contractors have?",
    answer: "Qualified commercial waterproofing contractors should hold appropriate Florida contractor licenses (General Contractor or specialty licenses as applicable), carry adequate liability and workers' compensation insurance, and demonstrate experience with similar building types and waterproofing systems. For high-rise work, experience with elevated access equipment (scaffolding, swing stages, boom lifts) is essential. Manufacturer certifications for specific waterproofing systems ensure proper installation techniques. References from comparable projects—particularly other high-rise condominiums or commercial buildings—demonstrate relevant experience."
  },
  {
    question: "How does SB 4-D affect commercial waterproofing contractor selection in Florida?",
    answer: "SB 4-D's milestone inspection requirements make contractor selection more critical than ever. Contractors must understand the inspection process and provide documentation that supports compliance—engineering coordination, inspection records, material certifications. Experience working with milestone inspection engineers helps ensure repairs satisfy requirements. Knowledge of SIRS reserve requirements helps associations plan waterproofing maintenance funding. Contractors without SB 4-D experience may complete work that doesn't meet compliance documentation standards."
  },
  {
    question: "What commercial waterproofing services do contractors typically provide?",
    answer: "Commercial waterproofing contractors typically offer building envelope services (wall coatings, sealant replacement, window waterproofing), parking structure services (deck coatings, crack injection, joint treatments), below-grade waterproofing (foundation walls, slabs, elevator pits), balcony waterproofing (membrane systems, traffic coatings, drainage), and roof waterproofing (coating systems, membrane repairs). Full-service contractors coordinate all building waterproofing needs, while specialized contractors focus on specific systems. Comprehensive building protection often requires multiple coordinated services."
  },
  {
    question: "How do commercial waterproofing contractors price projects?",
    answer: "Commercial waterproofing pricing typically includes material costs (waterproofing products, surface preparation materials, protective coatings), labor costs (surface preparation, application, curing protection), equipment costs (scaffolding, lifts, safety equipment), and overhead/profit margins. Pricing may be per square foot, linear foot, or lump sum depending on work type. Building height significantly affects pricing due to access equipment costs. Detailed proposals should itemize all components so owners can evaluate value. Competitive bidding among qualified contractors ensures fair pricing."
  },
  {
    question: "What is the typical cost range for commercial waterproofing in Tampa Bay?",
    answer: "Commercial waterproofing costs vary widely by scope. Building envelope coating systems typically cost $3-10 per square foot including preparation and access. Parking deck waterproofing runs $8-25 per square foot depending on system. Balcony waterproofing costs $15-40 per square foot for complete membrane systems. Below-grade waterproofing ranges from $8-30 per square foot depending on approach. Large projects often achieve volume discounts of 15-25%. Comprehensive proposals from qualified contractors provide accurate pricing for specific project conditions."
  },
  {
    question: "How long do commercial waterproofing projects typically take?",
    answer: "Project duration depends on scope, building size, and weather conditions. Building envelope recoating for a 10-story building typically requires 6-12 weeks. Parking structure deck coating takes 2-4 weeks per level depending on area. Balcony waterproofing proceeds at 3-5 units per day in steady production. Weather delays are common during Tampa's rainy season—experienced contractors build contingencies into schedules. Phased approaches that maintain building operations may extend schedules but reduce occupant impact."
  }
];

const costData = [
  { service: "Building Envelope Coating System", costRange: "$3 - $10", perUnit: "Per sq ft" },
  { service: "Parking Deck Waterproofing", costRange: "$8 - $25", perUnit: "Per sq ft" },
  { service: "Balcony Waterproofing (complete)", costRange: "$15 - $40", perUnit: "Per sq ft" },
  { service: "Below-Grade Waterproofing", costRange: "$8 - $30", perUnit: "Per sq ft" },
  { service: "Joint Sealant Replacement", costRange: "$8 - $20", perUnit: "Per linear ft" },
  { service: "Crack Injection", costRange: "$100 - $300", perUnit: "Per linear ft" },
  { service: "Window Perimeter Sealing", costRange: "$150 - $400", perUnit: "Per opening" },
  { service: "Condition Assessment", costRange: "$2,500 - $10,000", perUnit: "Per building" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Commercial Waterproofing Services"
        serviceDescription="Expert commercial waterproofing contractors serving Tampa Bay high-rise condominiums and commercial buildings. Parking structures, building envelopes, and balcony systems."
        city="Tampa"
        minPrice="5000"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Commercial waterproofing contractors Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Commercial Waterproofing Contractors Tampa Bay
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Expert waterproofing services for high-rise condominiums, parking structures, and commercial buildings throughout Tampa Bay.
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
              Commercial waterproofing demands expertise, equipment, and experience that general construction contractors often lack. The scale of commercial buildings, height of high-rise structures, complexity of building systems, and consequences of waterproofing failures all require specialized knowledge that comes only from focused practice. Florida Construction Specialists provides expert commercial waterproofing services for buildings throughout Tampa, St. Petersburg, Clearwater, Sarasota, and Lakeland.
            </p>

            <p className="text-gray-600 mb-6">
              Following Florida's SB 4-D legislation, the selection of qualified waterproofing contractors has become more critical than ever. Milestone inspections now evaluate waterproofing system performance through evidence of water intrusion damage. Contractors must understand not just waterproofing installation but also the documentation, engineering coordination, and compliance requirements that SB 4-D imposes on condominium associations. Working with contractors who understand these requirements prevents compliance problems down the road.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Why Commercial Waterproofing Requires Specialists
            </h2>
            <p className="text-gray-600 mb-6">
              Commercial waterproofing differs fundamentally from residential work in scale, complexity, and consequence. A high-rise condominium might have 50,000 square feet of balcony surface, 200,000 square feet of parking deck, and a million square feet of exterior wall area—all requiring coordinated waterproofing systems. The investment in these systems runs into hundreds of thousands or millions of dollars, and failures can result in structural damage, business interruption, and liability claims.
            </p>

            <p className="text-gray-600 mb-6">
              Building systems complexity requires understanding how waterproofing elements integrate. The junction between wall coatings and balcony membranes, the transition from parking deck coating to expansion joints, the interface between window frames and surrounding walls—each transition must be detailed correctly or water finds entry paths. Contractors without commercial experience often overlook critical details that lead to premature failures.
            </p>

            <p className="text-gray-600 mb-6">
              Access equipment expertise proves essential for high-rise work. Swing stages, scaffolding systems, and boom lifts each have appropriate applications depending on building configuration, work scope, and safety requirements. Proper equipment selection affects both project cost and work quality. Contractors who try to economize with inappropriate equipment often deliver inferior results.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              SB 4-D Compliance Expertise
            </h2>
            <p className="text-gray-600 mb-6">
              Florida's SB 4-D legislation has created new requirements that qualified commercial waterproofing contractors must understand and support. Milestone inspections for buildings three stories or higher evaluate waterproofing system performance through evidence of water intrusion—efflorescence, staining, corrosion, and concrete deterioration. Contractors must work within this compliance framework.
            </p>

            <p className="text-gray-600 mb-6">
              Documentation requirements demand more than just completing work—contractors must provide the engineering coordination, inspection records, material certifications, and as-built documentation that demonstrate compliance. Associations need this documentation for their permanent records and to satisfy requirements during future milestone inspections. Contractors unfamiliar with SB 4-D may complete technically sound work without the documentation that proves it.
            </p>

            <p className="text-gray-600 mb-6">
              Coordination with milestone inspection engineers ensures that waterproofing repairs address all identified deficiencies and satisfy inspector requirements. Experienced contractors understand what inspectors look for and how to document that repairs have been properly completed. This coordination prevents the costly rework that occurs when repairs don't satisfy compliance requirements.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Comprehensive Commercial Waterproofing Services
            </h2>
            <p className="text-gray-600 mb-6">
              Full-service commercial waterproofing contractors address all building waterproofing needs rather than just isolated systems. This comprehensive approach ensures that repairs to one system don't create problems for adjacent systems, and that the complete building envelope provides integrated protection.
            </p>

            <p className="text-gray-600 mb-6">
              Building envelope services include elastomeric wall coatings, joint sealant systems, window and door waterproofing, and facade restoration. These systems protect the building's vertical surfaces from wind-driven rain and water intrusion. For high-rise buildings, envelope waterproofing represents a major investment that protects both structure and interior spaces.
            </p>

            <p className="text-gray-600 mb-6">
              Parking structure waterproofing protects the structural decks and below-grade spaces that many commercial buildings depend on. Traffic-bearing membrane systems must withstand vehicle loads while providing waterproof protection. Expansion joint treatments, crack injection, and drainage systems complete the parking structure waterproofing package.
            </p>

            <p className="text-gray-600 mb-6">
              Balcony waterproofing addresses the horizontal surfaces that face the most demanding exposure conditions. Traffic coatings, membrane systems, drainage improvements, and detail work at penetrations and transitions create balconies that perform reliably through Florida's challenging climate.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Selecting Qualified Contractors
            </h2>
            <p className="text-gray-600 mb-6">
              Qualification criteria for commercial waterproofing contractors should include licensing, insurance, experience, and references. Florida law requires appropriate contractor licensing for construction work—either General Contractor licensure or specialty contractor registrations. Insurance requirements for commercial work include general liability (typically $1-2 million minimum) and workers' compensation coverage.
            </p>

            <p className="text-gray-600 mb-6">
              Experience with comparable buildings and systems proves more valuable than generic construction experience. A contractor who has successfully waterproofed similar high-rise condominiums understands the specific challenges your building will present. Request references from buildings of comparable size, age, and construction type. Contact references to verify that work was completed satisfactorily and that the contractor was professional to work with.
            </p>

            <p className="text-gray-600 mb-6">
              Manufacturer certifications indicate training in specific waterproofing systems. Many premium manufacturers require contractor certification before allowing their products to be installed with full warranty coverage. Certified contractors have demonstrated competence with the products they install.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Working with Condominium Associations
            </h2>
            <p className="text-gray-600 mb-6">
              Commercial waterproofing contractors serving condominium associations must understand the unique dynamics of these clients. Decision-making involves boards, property managers, and sometimes unit owners. Budget cycles and reserve funding affect project timing. Resident relations require careful communication and sensitivity to disruption. Experienced contractors know how to navigate these relationships.
            </p>

            <p className="text-gray-600 mb-6">
              Board presentations help associations understand waterproofing needs, options, and costs. Contractors should be prepared to explain technical concepts in accessible terms, answer questions about scope and alternatives, and provide documentation that supports board decision-making. Transparent communication builds the trust that supports successful project relationships.
            </p>

            <p className="text-gray-600 mb-6">
              Project phasing addresses the practical realities of working in occupied buildings. Residents need access to their units, parking must remain available, and building operations must continue. Experienced contractors develop phasing plans that maintain livability while achieving production efficiency. The balance between speed and disruption requires ongoing attention throughout the project.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Commercial Waterproofing Costs in Tampa Bay
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
            *Costs vary based on building configuration, access requirements, and project scope. Contact us for a detailed estimate.
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
              "Licensed Florida contractor",
              "High-rise waterproofing expertise",
              "SB 4-D compliance specialists",
              "Comprehensive service offerings",
              "Condo association experience",
              "Premium waterproofing systems",
              "Proper insurance coverage",
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
            title="Related Commercial Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Partner with Expert Commercial Waterproofing Contractors
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for comprehensive commercial waterproofing services from qualified professionals.
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
