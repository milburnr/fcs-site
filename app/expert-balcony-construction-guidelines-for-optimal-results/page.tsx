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
  title: "Expert Balcony Construction Guidelines for High-Rise Buildings Tampa - Florida Construction Specialists",
  description: "Comprehensive balcony construction guidelines for high-rise condominiums and commercial buildings. SB 4-D compliant structural design, waterproofing specifications, and safety requirements.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Expert Balcony Construction Guidelines", href: "/expert-balcony-construction-guidelines-for-optimal-results/" },
];

const internalLinks = [
  { href: "/balcony-restoration-services/", label: "Balcony Restoration Services" },
  { href: "/balcony-waterproofing-for-long-lasting-protection/", label: "Balcony Waterproofing" },
  { href: "/stylish-balcony-railing-designs-for-your-outdoor-space/", label: "Balcony Railing Designs" },
  { href: "/services/residential/balcony-reconstruction/", label: "SB4-D Compliance" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const faqs = [
  {
    question: "What structural requirements apply to high-rise balcony construction in Florida?",
    answer: "High-rise balcony construction must meet Florida Building Code requirements for live loads (minimum 60 psf for residential, 100 psf for assembly areas), wind loads based on building height and location, and seismic considerations. Structural connections to the building frame must transfer all balcony loads without causing undue stress concentrations. Reinforcing steel placement, concrete cover, and structural embedments must be detailed specifically for Florida's corrosive coastal environment. Post-tensioned construction requires additional considerations for tendon anchorages and drainage around stressed elements."
  },
  {
    question: "How does SB 4-D affect balcony construction requirements for new buildings?",
    answer: "While SB 4-D focuses on inspection requirements for existing buildings, its provisions influence new construction design. Engineers designing new high-rise balconies now consider long-term inspectability, ensuring structural elements can be visually assessed and tested during future milestone inspections. Documentation requirements encourage better record-keeping of construction details, material specifications, and quality control records. The law's emphasis on structural integrity reserves means new buildings should be designed for reasonable maintenance costs throughout their service life."
  },
  {
    question: "What waterproofing systems are specified for new balcony construction?",
    answer: "Modern balcony construction employs multi-layered waterproofing systems. Concrete mix designs incorporate water-reducing admixtures and air entrainment for improved durability. Integral crystalline waterproofing may be added to the concrete itself. Primary waterproofing membranes—typically fluid-applied polyurethane or reinforced sheet systems—provide the main water barrier. Traffic-bearing deck coatings protect the membrane while providing slip-resistant walking surfaces. Drainage systems including properly sloped surfaces, scuppers, and overflow provisions ensure water doesn't pond. Each layer contributes to overall system performance."
  },
  {
    question: "What railing specifications apply to new high-rise balcony construction?",
    answer: "Florida Building Code requires 42-inch minimum guardrail height for balconies in residential occupancies, with 4-inch maximum opening size between balusters. Railings must resist 200 pounds of concentrated load applied at any point along the top rail, and 50 pounds per linear foot uniform load. Intermediate rails must resist 50 pounds concentrated load. Glass panels require safety glazing and additional structural calculations. Anchoring systems must be designed for the railing loads plus safety factors, with details that prevent water intrusion at penetrations. Material selection must consider Tampa Bay's corrosive coastal environment."
  },
  {
    question: "How are balcony slopes and drainage designed for optimal performance?",
    answer: "Proper drainage design prevents water ponding that accelerates deterioration. Balcony slabs are typically sloped 1/4 inch per foot minimum toward scuppers or drains. Thickened slab edges at exterior perimeters create threshold dams that prevent water from flowing directly off balcony edges. Scupper openings through guardrail curbs provide primary drainage paths. Overflow scuppers at higher elevations prevent flooding during storm events or clogged primary drains. Downspout connections route collected water to building storm drainage systems. All penetrations require proper flashing and sealing."
  },
  {
    question: "What quality control measures ensure proper balcony construction?",
    answer: "Quality control for balcony construction includes material testing (concrete cylinders, rebar mill certificates, waterproofing compatibility testing), placement inspection (reinforcing steel positioning, concrete consolidation, membrane application), and documentation (photographs, daily reports, test results). Special inspection requirements may apply for structural concrete, post-tensioning, and fire-rated assemblies. Third-party inspection provides independent verification of code compliance. Commissioning of drainage systems confirms proper slope and flow. All documentation becomes part of the building's permanent record for future reference during SB 4-D inspections."
  }
];

const costData = [
  { service: "New Balcony Construction (concrete)", costRange: "$200 - $400", perUnit: "Per sq ft" },
  { service: "Post-Tensioned Slab System", costRange: "$250 - $450", perUnit: "Per sq ft" },
  { service: "Structural Steel Framing", costRange: "$150 - $300", perUnit: "Per sq ft" },
  { service: "Waterproofing System (membrane + coating)", costRange: "$25 - $50", perUnit: "Per sq ft" },
  { service: "Aluminum Railing System", costRange: "$200 - $400", perUnit: "Per linear ft" },
  { service: "Glass Panel Railing System", costRange: "$500 - $1,000", perUnit: "Per linear ft" },
  { service: "Cable Railing System", costRange: "$250 - $500", perUnit: "Per linear ft" },
  { service: "Typical High-Rise Balcony (50 sq ft, complete)", costRange: "$15,000 - $30,000", perUnit: "Per unit" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Balcony Construction Services"
        serviceDescription="Expert balcony construction guidelines for high-rise condominiums and commercial buildings in Tampa Bay. SB 4-D compliant structural design, waterproofing specifications, and comprehensive construction services."
        city="Tampa"
        minPrice="15000"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
            alt="Expert balcony construction for high-rise buildings"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Expert Balcony Construction Guidelines for Optimal Results
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Comprehensive construction guidelines for high-rise balconies meeting SB 4-D requirements and Florida Building Code specifications.
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
              Balcony construction for high-rise condominiums and commercial buildings requires careful attention to structural engineering, waterproofing integration, and long-term durability. Unlike residential deck construction, commercial balcony projects must satisfy stringent building code requirements, accommodate extreme wind loads, and maintain structural integrity for decades despite Florida's aggressive coastal environment. Florida Construction Specialists brings deep expertise in high-rise balcony construction to every project throughout Tampa, St. Petersburg, Clearwater, Sarasota, and Lakeland.
            </p>

            <p className="text-gray-600 mb-6">
              Following the implementation of Florida's SB 4-D legislation, balcony construction practices have evolved to emphasize durability, maintainability, and inspectability. Modern balcony designs anticipate the milestone inspections that will occur throughout the building's life, incorporating details that facilitate visual assessment and non-destructive testing of structural elements. This forward-thinking approach protects building owners from costly surprises during required inspections.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Structural Design Considerations
            </h2>
            <p className="text-gray-600 mb-6">
              High-rise balcony structural design must address multiple loading conditions simultaneously. Dead loads include the self-weight of concrete slabs, railings, planters, and any fixed equipment. Live loads account for occupant use—minimum 60 pounds per square foot for residential balconies, potentially higher for common areas or assembly occupancies. Wind loads in Florida can be substantial, particularly for upper-floor balconies exposed to full wind speeds without shielding from adjacent structures.
            </p>

            <p className="text-gray-600 mb-6">
              The connection between the balcony and the main building structure represents the most critical design element. Cantilevered balconies must transfer moments into the building floor slab without causing distress to either element. Supported balconies require columns or cables that carry loads to the building frame through properly designed connections. Thermal expansion joints accommodate differential movement between balcony and building to prevent cracking and stress concentrations.
            </p>

            <p className="text-gray-600 mb-6">
              Florida's corrosive coastal environment demands special attention to reinforcing steel protection. Increased concrete cover (minimum 2 inches for weather-exposed surfaces), corrosion-inhibiting admixtures, and sometimes epoxy-coated or stainless steel reinforcing extend structural service life. These measures add initial cost but pay dividends through reduced maintenance requirements and longer intervals between major repairs.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              SB 4-D Implications for New Construction
            </h2>
            <p className="text-gray-600 mb-6">
              While Florida's SB 4-D legislation focuses primarily on inspection requirements for existing buildings, its provisions significantly influence new construction practices. Engineers now design with inspectability in mind, ensuring structural elements can be visually assessed and tested during future milestone inspections required at 25-year intervals (or 30 years for buildings more than 3 miles from the coast).
            </p>

            <p className="text-gray-600 mb-6">
              Documentation requirements under SB 4-D encourage comprehensive record-keeping during construction. Shop drawings, material certifications, concrete test reports, inspection records, and as-built documentation create a permanent record that supports future inspections and maintenance planning. This documentation also aids warranty enforcement and supports the Structural Integrity Reserve Studies (SIRS) that associations must now maintain.
            </p>

            <p className="text-gray-600 mb-6">
              The reserve funding requirements embedded in SB 4-D mean that new buildings should be designed for reasonable maintenance costs throughout their service life. Balcony systems that require expensive or disruptive maintenance will burden association budgets and potentially trigger special assessments. Thoughtful design invests in durability features that reduce long-term ownership costs.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Waterproofing Integration
            </h2>
            <p className="text-gray-600 mb-6">
              Effective balcony waterproofing requires integration at the design stage rather than application after construction. The structural slab must be detailed with proper slope toward drains, adequate thickness for waterproofing membrane attachment, and smooth surfaces that support membrane adhesion. Penetrations for railings, scuppers, and utilities must be coordinated with waterproofing details before concrete placement.
            </p>

            <p className="text-gray-600 mb-6">
              Modern balcony waterproofing employs multiple coordinated systems. The concrete itself may incorporate integral crystalline waterproofing that reacts with moisture to seal microcracks. Primary waterproofing membranes—typically fluid-applied polyurethane or reinforced sheet systems—provide the main water barrier. Traffic-bearing deck coatings protect the membrane while providing slip-resistant, UV-stable walking surfaces. Each layer serves a specific function in the overall system.
            </p>

            <p className="text-gray-600 mb-6">
              Critical details require special attention. Balcony-to-building transitions must maintain waterproofing continuity while accommodating differential movement. Door thresholds need elevated curbs and carefully detailed flashing. Railing post penetrations require sleeves, sealants, or other provisions that prevent water entry around anchors. Failure at any of these details can allow water intrusion that initiates structural deterioration.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Railing Systems and Safety Requirements
            </h2>
            <p className="text-gray-600 mb-6">
              Balcony railings serve essential safety functions while contributing significantly to building aesthetics. Florida Building Code requires guardrails at least 42 inches high for residential occupancies, with openings no larger than 4 inches that prevent children from passing through. Structural requirements specify 200 pounds of concentrated load resistance at any point on the top rail, plus 50 pounds per linear foot distributed load.
            </p>

            <p className="text-gray-600 mb-6">
              Material selection for railings must consider both structural requirements and durability in Tampa Bay's coastal environment. Aluminum systems offer excellent corrosion resistance and design flexibility but require anodizing or powder coating for optimal appearance retention. Stainless steel provides superior strength but at higher cost. Glass panel systems offer unobstructed views but require tempered or laminated safety glazing with careful structural analysis.
            </p>

            <p className="text-gray-600 mb-6">
              Railing anchoring systems must transfer code-required loads to the balcony structure without creating water intrusion pathways. Surface-mounted posts require careful sealing around base plates. Core-mounted posts set into sleeves can provide better waterproofing performance but complicate future replacement. The anchoring detail selected affects both initial construction and long-term maintenance requirements.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Quality Control and Documentation
            </h2>
            <p className="text-gray-600 mb-6">
              Quality control during balcony construction provides assurance of code compliance and long-term performance. Material testing programs verify that concrete achieves specified strength, reinforcing steel meets certification requirements, and waterproofing products are compatible with specified applications. Inspection protocols ensure reinforcing is properly placed before concrete pours, waterproofing membranes achieve specified thickness, and all details conform to approved drawings.
            </p>

            <p className="text-gray-600 mb-6">
              Special inspections required by Florida Building Code provide third-party verification of critical construction elements. Reinforcing steel placement, concrete placement, post-tensioning operations, and fire-rated assemblies typically require special inspection. These inspections create records that become part of the building's permanent documentation and support future SB 4-D milestone inspections.
            </p>

            <p className="text-gray-600 mb-6">
              Comprehensive construction documentation supports building operations throughout its service life. As-built drawings record actual construction versus design intent. Material submittals provide specifications for future matching. Warranty information establishes coverage terms and claim procedures. Test reports demonstrate compliance with specifications. This documentation proves invaluable during future renovations, inspections, and maintenance planning.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Balcony Construction Costs in Tampa Bay
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
            *Costs vary based on structural requirements, material selections, and building access. Contact us for a detailed estimate.
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
              "High-rise construction expertise",
              "SB 4-D compliance knowledge",
              "Engineering coordination",
              "Premium waterproofing systems",
              "Quality control programs",
              "Comprehensive documentation",
              "Multiple railing system options",
              "Experienced crews",
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
            Plan Your Balcony Construction Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for expert guidance on high-rise balcony construction that meets all code requirements and delivers lasting performance.
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
