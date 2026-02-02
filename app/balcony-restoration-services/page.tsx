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

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Advanced Structural Repair Techniques
            </h2>
            <p className="text-gray-600 mb-6">
              Modern balcony restoration employs sophisticated repair techniques that go far beyond simple patching. Structural engineers first conduct non-destructive testing including ground-penetrating radar scanning to map rebar locations and identify delamination zones, rebound hammer tests to assess concrete strength, and half-cell potential mapping to evaluate corrosion activity throughout the structure. This comprehensive assessment guides the extent of removal and repair required.
            </p>

            <p className="text-gray-600 mb-6">
              When extensive concrete removal is necessary, we utilize controlled demolition techniques that preserve the structural integrity of adjacent areas. Hydrodemolition, which uses high-pressure water jets, selectively removes deteriorated concrete while leaving sound concrete and rebar intact. This method is particularly valuable when working around post-tensioned cables or complex reinforcement patterns common in high-rise construction.
            </p>

            <p className="text-gray-600 mb-6">
              Rebar restoration involves multiple steps beyond simple cleaning and coating. Chloride contamination testing determines whether existing steel can be salvaged or must be replaced entirely. Cathodic protection systems may be installed in severely aggressive environments, providing long-term corrosion control through electrochemical means. Corrosion-inhibiting admixtures in repair mortars provide additional protection, while high-performance repair materials like polymer-modified mortars ensure compatibility with existing concrete.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Engineering Documentation and Permits
            </h2>
            <p className="text-gray-600 mb-6">
              Professional balcony restoration requires extensive engineering documentation to ensure compliance with Florida Building Code and SB 4-D requirements. Licensed structural engineers must review existing building plans, assess current conditions, and develop repair specifications that meet or exceed original design standards. For substantial alterations, new structural calculations may be required, particularly when modifying railing systems or making drainage improvements.
            </p>

            <p className="text-gray-600 mb-6">
              Permit requirements for balcony restoration vary by jurisdiction but typically include building permits for structural work, electrical permits if new lighting or electrical systems are installed, and special permits for work involving occupied high-rise buildings. Some municipalities require additional safety measures like temporary fall protection systems, enhanced insurance coverage, or special inspection requirements during construction.
            </p>

            <p className="text-gray-600 mb-6">
              Construction documentation throughout the project provides crucial records for future maintenance and SB 4-D compliance. Photographic documentation before, during, and after construction, material certificates and test reports, inspection records from the building department, warranty documentation for all materials and workmanship, and as-built drawings showing any modifications to the original design all become part of the permanent building record.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Specialized Access and Safety Considerations
            </h2>
            <p className="text-gray-600 mb-6">
              High-rise balcony restoration presents unique access challenges that require specialized equipment and safety protocols. Swing stage scaffolding, suspended from the roof structure, provides access to balcony faces and undersides while maintaining resident access to interior spaces. For buildings with complex architectural features, custom access solutions may include boom lifts, mast climbers, or traditional tube-and-clamp scaffolding systems.
            </p>

            <p className="text-gray-600 mb-6">
              Safety protocols exceed standard construction requirements due to the risks associated with high-elevation work and occupied buildings. Fall protection systems must be redundant, with primary and backup arrest systems for every worker. Material handling protocols prevent dropped objects, while dust control measures protect residents from construction debris. Wind speed monitoring ensures work safety during Florida's frequent weather events.
            </p>

            <p className="text-gray-600 mb-6">
              Coordination with building operations includes scheduling around resident activities, providing alternative access routes when balconies are out of service, and maintaining emergency egress requirements throughout construction. Property managers work closely with our project coordinators to minimize conflicts with building operations and ensure resident comfort during the restoration process.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Material Selection for Florida Climate
            </h2>
            <p className="text-gray-600 mb-6">
              Florida's aggressive coastal environment demands careful material selection for long-term performance. Concrete repair mortars must resist chloride intrusion, thermal cycling, and UV exposure while maintaining bond strength with existing concrete. High-performance repair mortars incorporating silica fume, fly ash, or polymer modifiers provide enhanced durability compared to standard Portland cement-based materials.
            </p>

            <p className="text-gray-600 mb-6">
              Waterproofing membrane selection considers not only water exclusion but also thermal movement, puncture resistance, and UV stability. Polyurethane and polyurea coatings offer excellent flexibility and durability, while modified bitumen systems provide proven long-term performance in marine environments. The selection depends on exposure conditions, expected traffic, and aesthetic requirements.
            </p>

            <p className="text-gray-600 mb-6">
              Railing materials must withstand salt air exposure without excessive maintenance requirements. Marine-grade aluminum alloys provide excellent corrosion resistance with minimal upkeep, while stainless steel offers superior strength and longevity. Glass panel systems use tempered or laminated safety glass designed to withstand hurricane-force winds and temperature extremes. All fasteners and hardware must be compatible materials to prevent galvanic corrosion.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Quality Control and Testing Protocols
            </h2>
            <p className="text-gray-600 mb-6">
              Comprehensive quality control ensures restoration work meets design specifications and provides long-term durability. Concrete strength testing verifies that repair materials achieve design strengths, while bond testing confirms proper adhesion between new and existing materials. Waterproofing systems undergo flood testing to verify membrane integrity before protective coatings are applied.
            </p>

            <p className="text-gray-600 mb-6">
              Railing systems receive load testing to confirm compliance with building code requirements for both vertical and horizontal forces. Anchor pull tests verify connection strength to the substrate, while deflection measurements ensure stiffness requirements are met. Weatherstripping and sealant joints are pressure-tested to confirm water exclusion performance.
            </p>

            <p className="text-gray-600 mb-6">
              Final inspections include detailed photography documenting completed work, punch list preparation identifying any items requiring correction, system startup and commissioning for any mechanical components, and preparation of warranty documentation. Independent third-party inspection may be required for warranty validation or insurance compliance.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Long-Term Maintenance Programs
            </h2>
            <p className="text-gray-600 mb-6">
              Professional restoration is most cost-effective when coupled with a comprehensive maintenance program that protects the investment and extends service life. Preventive maintenance protocols include regular cleaning to remove salt and dirt accumulation, periodic sealant inspection and renewal, drainage system cleaning to prevent blockages, and protective coating touch-up before deterioration begins.
            </p>

            <p className="text-gray-600 mb-6">
              Annual inspection programs identify minor issues before they become major problems. Professional inspections document the condition of all restored elements, identify maintenance needs, track performance over time, and provide early warning of potential warranty claims. This documentation becomes invaluable for future SB 4-D inspections and helps demonstrate proper maintenance to preserve warranty coverage.
            </p>

            <p className="text-gray-600 mb-6">
              Reserve study updates reflect the improved condition and extended service life resulting from professional restoration. Properly executed balcony restoration typically extends service life by 20-30 years, reducing annual reserve contributions while improving building safety and marketability. Updated reserve studies should reflect both the immediate improvement and the ongoing maintenance requirements to sustain performance.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Cost-Benefit Analysis of Professional Restoration
            </h2>
            <p className="text-gray-600 mb-6">
              While professional balcony restoration requires significant upfront investment, the long-term benefits far exceed the costs when compared to reactive maintenance or deferred repairs. Professional restoration typically costs 60-70% less than complete replacement while providing comparable service life extension. The work eliminates safety hazards that could result in liability exposure far exceeding restoration costs.
            </p>

            <p className="text-gray-600 mb-6">
              Property value benefits are immediate and substantial. Buildings with recently restored balconies command premium pricing compared to those with visible deterioration or maintenance backlogs. Real estate professionals report that quality restoration work can increase unit values by 8-15% while improving marketability and reducing time on market for individual sales.
            </p>

            <p className="text-gray-600 mb-6">
              Insurance benefits may include reduced premiums for buildings demonstrating proactive maintenance, improved coverage terms for structures meeting current building codes, and reduced liability exposure from eliminating known hazards. Some insurers offer specific incentives for buildings completing comprehensive restoration programs that address structural deficiencies.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Regional Considerations for Tampa Bay
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay's unique environmental conditions create specific challenges that influence restoration design and execution. The region's proximity to salt water creates elevated chloride exposure that accelerates concrete deterioration, particularly in buildings within three miles of the coast. Hurricane exposure requires enhanced anchorage and impact resistance for all exterior elements.
            </p>

            <p className="text-gray-600 mb-6">
              Local geology includes expansive clay soils that can cause building settlement and structural movement over time. This movement must be considered in restoration design to prevent premature failure of rigid elements. Expansion joints and flexible connections accommodate ongoing building movement while maintaining water exclusion and structural integrity.
            </p>

            <p className="text-gray-600 mb-6">
              Regional building code amendments address specific hurricane and flood risks common to Florida construction. Wind load requirements exceed national standards, while flood-resistant construction requirements apply to buildings in designated flood zones. Our restoration specifications incorporate these enhanced requirements to ensure long-term performance and compliance.
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

      {/* Project Case Studies */}
      <section className="section bg-blue-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Recent Balcony Restoration Projects
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Oceanfront Tower - Clearwater Beach</h3>
              <div className="space-y-4 text-gray-600">
                <p><strong>Challenge:</strong> 20-story condominium with severe concrete spalling affecting 85% of balconies, discovered during SB 4-D milestone inspection.</p>
                <p><strong>Solution:</strong> Comprehensive restoration of 120 balconies including structural repairs, rebar replacement, waterproofing membrane installation, and railing upgrades.</p>
                <p><strong>Timeline:</strong> 8-month phased project working on two elevations simultaneously to minimize resident disruption.</p>
                <p><strong>Results:</strong> 25-year service life extension, improved property values, and full SB 4-D compliance documentation.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Bayview Condominiums - Tampa</h3>
              <div className="space-y-4 text-gray-600">
                <p><strong>Challenge:</strong> 15-story building with failing waterproofing systems causing water intrusion into units below balconies.</p>
                <p><strong>Solution:</strong> Complete waterproofing system replacement with traffic-bearing membrane, drainage improvements, and preventive structural repairs.</p>
                <p><strong>Timeline:</strong> 6-month project coordinated with interior unit renovations affected by water damage.</p>
                <p><strong>Results:</strong> Eliminated water intrusion, reduced insurance claims, and improved resident satisfaction scores.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Technical Specifications and Standards
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Structural Requirements</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>Florida Building Code Chapter 16 compliance for structural repairs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>ACI 562 standard for concrete repair and rehabilitation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>ASTM C876 corrosion potential testing protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>SSPC steel surface preparation standards for rebar treatment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>ICRI concrete surface preparation specifications</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Waterproofing Standards</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>ASTM C957 high-solids polyurethane waterproofing systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>ASTM C794 thermoplastic membrane specifications</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>ASTM D6083 liquid membrane forming compounds</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>ASTM E331 water penetration testing procedures</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>AAMA 501.2 field testing of installed waterproofing systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Emergency Balcony Stabilization Services
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              When balcony deterioration presents immediate safety hazards, Florida Construction Specialists provides emergency stabilization services to protect residents while permanent restoration plans are developed. Emergency protocols include immediate area isolation, temporary load restrictions, and expedited engineering assessment to determine safe occupancy levels.
            </p>
            <p className="text-gray-600 mb-6">
              Temporary stabilization measures may include shoring systems to support compromised structural elements, temporary railing installation if existing guardrails are compromised, emergency waterproofing to prevent further deterioration, and access restrictions to limit loading on damaged areas. These measures provide immediate safety while allowing time for proper restoration planning and permitting.
            </p>
            <p className="text-gray-600 mb-6">
              Emergency response coordination includes immediate notification of building management and relevant authorities, expedited engineering evaluation by licensed professionals, coordination with insurance carriers and legal counsel, and development of permanent repair strategies that address underlying causes. Our emergency response team is available 24/7 for critical situations requiring immediate attention.
            </p>
          </div>
        </div>
      </section>

      {/* Warranty and Guarantees */}
      <section className="section bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Comprehensive Warranty Programs
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Material Warranties</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Waterproofing membranes: 10-15 years manufacturer warranty</li>
                <li>• Repair mortars: 5-10 years material performance guarantee</li>
                <li>• Railing systems: 10-20 years depending on material</li>
                <li>• Protective coatings: 3-7 years UV and weathering protection</li>
                <li>• Sealants and gaskets: 2-5 years movement and adhesion</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Workmanship Guarantees</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Structural repairs: 10 years against defects in execution</li>
                <li>• Waterproofing installation: 5 years leak-free guarantee</li>
                <li>• Railing installation: 10 years attachment and stability</li>
                <li>• Surface preparation: 5 years adhesion and bond strength</li>
                <li>• General workmanship: 2 years against construction defects</li>
              </ul>
            </div>
          </div>
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
              "Serving all Tampa Bay communities",
              "Emergency response capabilities",
              "Quality control and testing protocols",
              "Long-term maintenance programs"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section bg-gray-50">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
            Serving Tampa Bay's High-Rise Communities
          </h2>
          <p className="text-gray-600 mb-8">
            Florida Construction Specialists provides professional balcony restoration services throughout the Tampa Bay area, with extensive experience in the region's diverse high-rise condominium and commercial markets.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-bold text-brand-green-dark mb-2">Tampa Metro</h3>
              <p className="text-gray-600 text-sm">Downtown, Westshore, Carrollwood, Temple Terrace</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-brand-green-dark mb-2">St. Petersburg</h3>
              <p className="text-gray-600 text-sm">Downtown, Beach Drive, Vinoy, Mirror Lake</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-brand-green-dark mb-2">Clearwater Beach</h3>
              <p className="text-gray-600 text-sm">Sand Key, Belcher Road, Island Estates</p>
            </div>
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
