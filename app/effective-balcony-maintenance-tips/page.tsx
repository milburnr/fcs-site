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
  title: "Effective Balcony Maintenance Tips for High-Rise Buildings Tampa - Florida Construction Specialists",
  description: "Expert balcony maintenance guidance for Tampa Bay high-rise condominiums. Inspection schedules, cleaning protocols, and preventive care to extend balcony life and ensure SB 4-D compliance.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Effective Balcony Maintenance Tips", href: "/effective-balcony-maintenance-tips/" },
];

const internalLinks = [
  { href: "/balcony-restoration-services/", label: "Balcony Restoration Services" },
  { href: "/balcony-waterproofing-for-long-lasting-protection/", label: "Balcony Waterproofing" },
  { href: "/top-balcony-flooring-materials-for-style-durability/", label: "Balcony Flooring Materials" },
  { href: "/services/residential/balcony-reconstruction/", label: "SB4-D Compliance" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const faqs = [
  {
    question: "What balcony maintenance should be performed regularly?",
    answer: "Regular balcony maintenance includes visual inspection for coating damage, cracks, and deterioration (monthly); cleaning to remove debris, dirt, and organic growth (quarterly); checking drainage for proper function and clearing obstructions (quarterly); inspecting railings for loose connections, corrosion, and damage (annually); and documenting conditions with photos for records (annually). After major storms, immediate inspection identifies damage requiring prompt repair. This routine maintenance catches problems early when repairs are least expensive and helps prepare for SB 4-D milestone inspections."
  },
  {
    question: "How does proper maintenance support SB 4-D compliance?",
    answer: "SB 4-D requires milestone structural inspections for condominiums three stories or higher. Well-maintained balconies are more likely to pass inspections without requiring extensive remediation. Regular maintenance prevents the water intrusion that causes structural deterioration inspectors specifically evaluate. Documented maintenance history demonstrates proactive association management. SIRS requirements are easier to satisfy when waterproofing systems are maintained within expected service lives. Neglected maintenance leads to accelerated deterioration, failed inspections, and expensive emergency repairs."
  },
  {
    question: "What are the signs that balcony maintenance has been deferred too long?",
    answer: "Warning signs of deferred maintenance include visible coating wear through to concrete, multiple cracks in the deck surface, standing water that doesn't drain properly, white deposits (efflorescence) on concrete surfaces, rust staining indicating rebar corrosion, soft or spongy areas when walking, peeling or bubbling coatings, loose or corroded railings, and water intrusion into units below. Any of these signs warrant professional evaluation. Early-stage deterioration can often be addressed with moderate repairs, while advanced deterioration may require extensive restoration or reconstruction."
  },
  {
    question: "What cleaning products are safe for balcony surfaces?",
    answer: "Safe cleaning depends on surface type. For deck coatings: mild detergent with soft brush, avoiding harsh chemicals that degrade coating integrity. For porcelain tile: most household cleaners are safe, but avoid acids on grout. For natural stone: pH-neutral stone cleaners, avoiding acids that etch surfaces. For all surfaces: avoid pressure washing above 1500 PSI which can damage coatings and grout. Rinse thoroughly after cleaning. Avoid bleach concentrations that may discolor coatings. When in doubt, test products in inconspicuous areas first. Follow manufacturer recommendations for specific coating or flooring products."
  },
  {
    question: "How often should professional balcony inspections be performed?",
    answer: "Professional inspection frequency depends on building age and condition. New buildings (under 10 years): formal inspection every 5 years. Mature buildings (10-25 years): inspection every 3 years. Older buildings (over 25 years): annual professional inspection. Buildings with known issues: inspection annually or more frequently as conditions warrant. These inspections supplement owner-performed routine maintenance and provide documentation for association records. Inspection reports identify developing problems before they become expensive repairs. They also create baseline documentation for SB 4-D milestone inspection comparison."
  },
  {
    question: "What does balcony maintenance typically cost for high-rise condominiums?",
    answer: "Balcony maintenance costs depend on scope and building size. Routine cleaning services typically run $50-150 per unit annually. Annual inspection by qualified professionals costs $2,500-5,000 for a building assessment. Minor repairs (coating touch-up, sealant replacement) average $200-500 per unit as needed. Drain cleaning and maintenance costs $100-300 per unit annually. Building-wide maintenance programs that combine services typically reduce per-unit costs 15-25%. Budget planning should include reserves for periodic recoating (every 5-10 years at $400-1,500 per unit) and eventual system replacement."
  }
];

const costData = [
  { service: "Annual Cleaning Service", costRange: "$50 - $150", perUnit: "Per unit" },
  { service: "Professional Building Inspection", costRange: "$2,500 - $5,000", perUnit: "Per building" },
  { service: "Minor Coating Touch-Up", costRange: "$200 - $500", perUnit: "Per unit" },
  { service: "Sealant Replacement", costRange: "$300 - $800", perUnit: "Per unit" },
  { service: "Drain Cleaning/Maintenance", costRange: "$100 - $300", perUnit: "Per unit" },
  { service: "Railing Adjustment/Tightening", costRange: "$100 - $300", perUnit: "Per unit" },
  { service: "Periodic Recoating (5-10 years)", costRange: "$400 - $1,500", perUnit: "Per unit" },
  { service: "Comprehensive Maintenance Program", costRange: "$200 - $500", perUnit: "Per unit/year" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Balcony Maintenance Services"
        serviceDescription="Expert balcony maintenance guidance and services for Tampa Bay high-rise condominiums. Inspection, cleaning, and preventive care programs."
        city="Tampa"
        minPrice="50"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
            alt="Effective balcony maintenance for high-rise buildings"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Effective Balcony Maintenance Tips for Long-Lasting Beauty
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Comprehensive maintenance strategies for high-rise balconies that protect your investment and support SB 4-D compliance.
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
              Proper balcony maintenance extends system service life, prevents costly repairs, and supports the regulatory compliance that Florida's SB 4-D legislation now requires. For high-rise condominiums, where deferred maintenance can compound into structural damage affecting multiple units, proactive maintenance programs deliver significant returns on modest investments. Florida Construction Specialists helps Tampa Bay building owners and associations develop and implement maintenance strategies that protect their balcony investments.
            </p>

            <p className="text-gray-600 mb-6">
              The difference between well-maintained and neglected balconies becomes dramatically apparent over time. Balconies that receive regular attention maintain their appearance, function properly, and provide decades of reliable service. Neglected balconies deteriorate progressively, with minor issues compounding into major problems that ultimately require expensive restoration or reconstruction. The choice between these outcomes lies in consistent, appropriate maintenance.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Why Balcony Maintenance Matters
            </h2>
            <p className="text-gray-600 mb-6">
              Balcony waterproofing systems protect structural concrete from the water intrusion that initiates deterioration. When coatings wear, sealants fail, or drains clog, water reaches the concrete substrate and begins attacking embedded reinforcing steel. The resulting corrosion expands, cracking and spalling concrete in a progressive cycle that accelerates over time. Early intervention interrupts this cycle; delayed response allows damage to compound.
            </p>

            <p className="text-gray-600 mb-6">
              Florida's aggressive climate accelerates balcony deterioration. Intense UV radiation degrades coating compounds. Thermal cycling from full sun exposure stresses adhesion. Heavy rainfall tests drainage systems and exploits any waterproofing weakness. Salt air corrodes metal components. Hurricane-force winds drive water into openings that normally shed rain. These combined stresses demand proactive attention to maintain protection.
            </p>

            <p className="text-gray-600 mb-6">
              Financial considerations favor preventive maintenance over reactive repairs. Routine maintenance costs a fraction of restoration work. A $500 coating touch-up today prevents the $5,000 concrete repair that deferred maintenance would eventually require. Building-wide maintenance programs prove even more economical than unit-by-unit responses to individual problems.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              SB 4-D Compliance Through Maintenance
            </h2>
            <p className="text-gray-600 mb-6">
              Florida's SB 4-D legislation has elevated the importance of balcony maintenance for condominium associations. Milestone inspections required for buildings three stories or higher evaluate balcony conditions as part of structural assessments. Inspectors specifically look for evidence of water intrusion—efflorescence, staining, corrosion, and concrete deterioration—that indicates waterproofing system failure.
            </p>

            <p className="text-gray-600 mb-6">
              Well-maintained balconies are far more likely to pass milestone inspections without requiring remediation. Regular maintenance keeps waterproofing systems performing within their design parameters, preventing the deterioration that triggers inspection findings. When minor issues are addressed promptly, they don't progress to the significant deterioration that requires expensive repairs.
            </p>

            <p className="text-gray-600 mb-6">
              Documented maintenance history demonstrates proactive association management to inspecting engineers. Maintenance records show that the association has been attentive to balcony conditions between inspections. This documentation supports the association's position that structural elements are being properly maintained—a key consideration in milestone inspection evaluations.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Routine Inspection Procedures
            </h2>
            <p className="text-gray-600 mb-6">
              Effective balcony maintenance begins with regular inspection to identify developing problems. Visual inspection should occur monthly during routine property management activities. More detailed quarterly inspections evaluate all system components systematically. Annual professional inspections provide expert assessment and documentation for association records.
            </p>

            <p className="text-gray-600 mb-6">
              During inspections, look for coating condition (wear, cracking, peeling, bubbling), drainage function (proper flow, clear drains, no ponding), structural indicators (cracks, spalling, staining, deflection), railing condition (loose connections, corrosion, damage), and transition details (door thresholds, perimeter conditions, penetrations). Photograph conditions for comparison over time—this documentation proves valuable for maintenance planning and SB 4-D compliance.
            </p>

            <p className="text-gray-600 mb-6">
              Post-storm inspections should occur after significant weather events. Hurricane-force winds can damage railings, drive water into normally protected areas, and dislodge debris that blocks drainage. Identifying storm damage promptly allows repairs before secondary water intrusion occurs. Document any damage with photographs and report to management immediately.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Cleaning Best Practices
            </h2>
            <p className="text-gray-600 mb-6">
              Regular cleaning maintains appearance while preventing organic growth that can accelerate coating deterioration. Quarterly cleaning removes accumulated dirt, debris, and organic material before it becomes established. More frequent cleaning may be necessary for balconies with heavy use, nearby landscaping, or bird activity.
            </p>

            <p className="text-gray-600 mb-6">
              Cleaning methods must be appropriate for the surface material. Deck coatings generally tolerate mild detergent with soft brushes—avoid harsh chemicals that degrade coating integrity and avoid pressure washing above 1500 PSI that can damage coating adhesion. Porcelain tiles accept most household cleaners but acidic products can damage grout. Natural stone requires pH-neutral cleaners to avoid etching.
            </p>

            <p className="text-gray-600 mb-6">
              Drain maintenance is critical for proper balcony function. Clear debris from drain grates during each cleaning. Check that water flows freely through scuppers and downspout connections. Remove leaves, pine needles, and other material that accumulates around drains. Clogged drains cause water to pond on balcony surfaces, accelerating coating wear and potentially flooding through door thresholds during heavy rain.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Addressing Common Issues
            </h2>
            <p className="text-gray-600 mb-6">
              Minor coating damage should be addressed promptly before water penetrates to the concrete substrate. Small areas of coating wear can often be touched up without complete recoating. Hairline cracks in coatings may indicate substrate movement requiring investigation. Peeling or bubbling coatings typically indicate adhesion failure requiring more extensive repair.
            </p>

            <p className="text-gray-600 mb-6">
              Sealant maintenance prevents water intrusion at joints and transitions. Perimeter sealants around balcony edges, door thresholds, and railing posts degrade over time and eventually fail. Annual inspection identifies sealant deterioration before failures allow water entry. Replacement of deteriorated sealant costs far less than repairing water damage that results from failed seals.
            </p>

            <p className="text-gray-600 mb-6">
              Railing maintenance ensures both safety and appearance. Check posts for tightness—loose posts indicate potential anchor problems requiring professional evaluation. Inspect for corrosion on aluminum components, especially at joints and fasteners. Glass panels need inspection for chips or cracks that could lead to failure. Cable railings require periodic tension adjustment to maintain code-compliant spacing.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Developing a Maintenance Program
            </h2>
            <p className="text-gray-600 mb-6">
              Comprehensive maintenance programs systematize the activities needed to keep balconies performing properly. Rather than responding to problems as they occur, programmatic maintenance addresses all elements on appropriate schedules. This approach ensures nothing is overlooked while distributing costs predictably over time.
            </p>

            <p className="text-gray-600 mb-6">
              Program components typically include scheduled inspections (monthly visual, quarterly detailed, annual professional), routine cleaning (quarterly minimum), preventive maintenance (sealant replacement every 7-10 years, coating maintenance every 5-10 years), and documentation (inspection reports, maintenance records, condition photos). The specific schedule depends on building age, climate exposure, and current system condition.
            </p>

            <p className="text-gray-600 mb-6">
              Budget planning for maintenance should account for routine activities, periodic major maintenance (recoating), and eventual system replacement. SIRS requirements under SB 4-D mandate adequate reserves for structural maintenance including balconies. A well-planned maintenance program helps associations satisfy these requirements while protecting building value.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Balcony Maintenance Costs in Tampa Bay
          </h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-md">
              <thead className="bg-brand-green text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Maintenance Service</th>
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
            *Costs vary based on building size, current condition, and service scope. Contact us for a customized maintenance proposal.
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
              "High-rise maintenance expertise",
              "SB 4-D compliance specialists",
              "Comprehensive maintenance programs",
              "Professional inspection services",
              "Detailed documentation",
              "Condo association experience",
              "Preventive care focus",
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
            title="Related Balcony Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Start a Balcony Maintenance Program Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to develop a comprehensive maintenance program that protects your building's balconies.
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
