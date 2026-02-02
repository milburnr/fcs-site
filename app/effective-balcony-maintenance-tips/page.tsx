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
  title: "Effective Balcony Maintenance Tips for High-Rise Buildings Tampa",
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

      {/* Seasonal Maintenance Guide */}
      <section className="section bg-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Seasonal Maintenance Guide for Florida Balconies
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Florida's distinct seasonal patterns create specific maintenance requirements for high-rise balconies. Hurricane season, winter dry periods, and summer heat cycles each present unique challenges that require targeted maintenance attention to prevent deterioration and ensure resident safety.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Spring Preparation (March-May)</h3>
                <div className="space-y-4">
                  <div>
                    <strong className="text-brand-green-dark block mb-2">Post-Winter Inspection:</strong>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Document any coating damage from winter temperature cycling</li>
                      <li>• Check for new cracks in concrete surfaces</li>
                      <li>• Inspect drainage systems for debris accumulation</li>
                      <li>• Evaluate railing connections for loosening</li>
                      <li>• Test door and window operation after seasonal movement</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-brand-green-dark block mb-2">Hurricane Season Preparation:</strong>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Secure or remove loose objects that could become projectiles</li>
                      <li>• Verify drainage system capacity for heavy rainfall</li>
                      <li>• Document pre-season condition with photographs</li>
                      <li>• Review emergency procedures with residents</li>
                      <li>• Schedule any needed repairs before storm season</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Summer Maintenance (June-August)</h3>
                <div className="space-y-4">
                  <div>
                    <strong className="text-brand-green-dark block mb-2">Heat Protection:</strong>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Monitor coating performance under intense UV exposure</li>
                      <li>• Increase cleaning frequency for dust and salt accumulation</li>
                      <li>• Inspect for thermal expansion-related movement</li>
                      <li>• Ensure adequate ventilation for enclosed balcony spaces</li>
                      <li>• Check for heat-related sealant deterioration</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-brand-green-dark block mb-2">Storm Response:</strong>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Post-storm inspections for wind and water damage</li>
                      <li>• Immediate clearing of debris from drainage systems</li>
                      <li>• Document storm-related damage for insurance claims</li>
                      <li>• Emergency repairs to prevent further deterioration</li>
                      <li>• Assessment of structural integrity after severe weather</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Fall Assessment (September-November)</h3>
                <div className="space-y-4">
                  <div>
                    <strong className="text-brand-green-dark block mb-2">Post-Hurricane Evaluation:</strong>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Comprehensive assessment of storm season damage</li>
                      <li>• Prioritize repairs before winter weather patterns</li>
                      <li>• Update reserve studies with identified repair needs</li>
                      <li>• Plan major maintenance projects for dry season</li>
                      <li>• Document annual condition for SB4-D compliance</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-brand-green-dark block mb-2">Winter Preparation:</strong>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Complete repairs while weather permits</li>
                      <li>• Apply protective treatments before temperature drops</li>
                      <li>• Adjust maintenance schedules for seasonal labor availability</li>
                      <li>• Stock emergency repair materials for immediate needs</li>
                      <li>• Plan resident communications for upcoming work</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Winter Monitoring (December-February)</h3>
                <div className="space-y-4">
                  <div>
                    <strong className="text-brand-green-dark block mb-2">Temperature Cycling:</strong>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Monitor for thermal stress cracking in sealants</li>
                      <li>• Watch for coating brittleness in extreme cold</li>
                      <li>• Document any unusual structural movement</li>
                      <li>• Maintain heating in enclosed balcony spaces</li>
                      <li>• Adjust cleaning schedules for reduced usage</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-brand-green-dark block mb-2">Planning Season:</strong>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Develop maintenance budgets for upcoming year</li>
                      <li>• Schedule major renovation projects for spring</li>
                      <li>• Review contractor performance and agreements</li>
                      <li>• Update emergency response procedures</li>
                      <li>• Plan SB4-D inspection schedules if required</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Maintenance Programs */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Professional Maintenance Program Development
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Comprehensive balcony maintenance programs provide systematic, proactive care that extends service life, ensures safety compliance, and reduces long-term costs. Professional programs combine regular inspection schedules, preventive maintenance protocols, and documentation systems that support SB4-D compliance and reserve fund management.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Inspection Protocols</h3>
                <div className="space-y-4">
                  <div>
                    <strong className="text-brand-green-dark block mb-2">Monthly Resident Inspections:</strong>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Visual assessment of coating condition and wear patterns</li>
                      <li>• Drainage system function and debris clearing</li>
                      <li>• Railing stability testing and hardware inspection</li>
                      <li>• Documentation of any changes or new damage</li>
                      <li>• Safety hazard identification and immediate reporting</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-brand-green-dark block mb-2">Quarterly Professional Reviews:</strong>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Detailed condition assessment by qualified personnel</li>
                      <li>• Photographic documentation for comparison tracking</li>
                      <li>• Performance testing of waterproofing systems</li>
                      <li>• Maintenance needs prioritization and scheduling</li>
                      <li>• Cost estimation for identified repair requirements</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-brand-green-dark block mb-2">Annual Engineering Evaluation:</strong>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Structural integrity assessment by licensed engineer</li>
                      <li>• Building code compliance verification</li>
                      <li>• SB4-D milestone inspection preparation</li>
                      <li>• Reserve study updates and lifecycle planning</li>
                      <li>• Performance warranty compliance documentation</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Preventive Care Schedules</h3>
                <div className="space-y-4">
                  <div>
                    <strong className="text-brand-green-dark block mb-2">Routine Maintenance:</strong>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Regular cleaning with appropriate materials and techniques</li>
                      <li>• Sealant inspection and renewal on schedule</li>
                      <li>• Drainage system maintenance and flow testing</li>
                      <li>• Hardware lubrication and adjustment</li>
                      <li>• Surface protection application and renewal</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-brand-green-dark block mb-2">Condition-Based Interventions:</strong>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Crack repair before water intrusion occurs</li>
                      <li>• Coating touch-ups in high-wear areas</li>
                      <li>• Localized waterproofing renewal as needed</li>
                      <li>• Safety feature upgrades to meet current codes</li>
                      <li>• Structural reinforcement before deterioration advances</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-brand-green-dark block mb-2">Lifecycle Management:</strong>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Component replacement planning and budgeting</li>
                      <li>• System upgrade evaluation and implementation</li>
                      <li>• Performance monitoring and optimization</li>
                      <li>• Technology integration for enhanced monitoring</li>
                      <li>• Long-term value preservation strategies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation and Compliance */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Documentation and Compliance Management
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Proper documentation of balcony maintenance activities supports SB4-D compliance, warranty preservation, insurance coverage, and effective reserve fund management. Digital documentation systems provide accessible, organized records that demonstrate proactive maintenance and facilitate professional inspections.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Required Documentation</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Inspection Records:</strong> Date, inspector qualifications, findings, and recommendations for all scheduled and emergency inspections
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Maintenance Logs:</strong> Work performed, materials used, dates, and contractor information for all maintenance activities
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Photographic Documentation:</strong> Timestamped images showing conditions before and after maintenance work
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Warranty Information:</strong> Material and workmanship warranties with compliance documentation
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Cost Tracking:</strong> Detailed financial records supporting reserve study updates and budget planning
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Compliance Benefits</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>SB4-D Preparation:</strong> Maintenance records demonstrate proactive care and may reduce inspection scope
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Insurance Support:</strong> Documentation supports claims and may qualify for premium reductions
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Warranty Protection:</strong> Proper maintenance documentation preserves manufacturer warranty coverage
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Liability Management:</strong> Records demonstrate reasonable care and may limit association liability
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Property Values:</strong> Well-documented maintenance supports property valuations and marketability
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Emergency Maintenance Response Procedures
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Emergency situations require immediate response to prevent injury and minimize property damage. Established procedures ensure rapid assessment, appropriate interim measures, and coordination with professional services when balcony safety is compromised.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-4">Immediate Safety</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Evacuate affected balcony and secure access</li>
                  <li>• Assess injury risk and call emergency services if needed</li>
                  <li>• Install temporary barriers to prevent accidental entry</li>
                  <li>• Document conditions with photographs from safe locations</li>
                  <li>• Notify building management and affected residents</li>
                  <li>• Contact emergency maintenance contractor</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-4">Assessment Phase</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Professional structural evaluation within 24 hours</li>
                  <li>• Determine scope of safety hazard and affected areas</li>
                  <li>• Develop interim protection measures</li>
                  <li>• Estimate repair timeline and resource requirements</li>
                  <li>• Notify insurance carrier and legal counsel</li>
                  <li>• Communicate with residents about safety measures</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-4">Repair Coordination</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Obtain permits for emergency structural work</li>
                  <li>• Coordinate with qualified emergency repair contractors</li>
                  <li>• Implement temporary stabilization measures</li>
                  <li>• Plan permanent repairs addressing root causes</li>
                  <li>• Monitor contractor work for quality and safety</li>
                  <li>• Document all emergency response activities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Technology-Enhanced Maintenance Programs
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Modern technology enhances maintenance program effectiveness through automated monitoring, predictive analytics, and integrated documentation systems. These tools provide early warning of developing problems and optimize maintenance scheduling for cost-effective care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Monitoring Technologies</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>IoT Sensors:</strong> Moisture, movement, and structural stress monitoring with real-time alerts
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Drone Inspections:</strong> High-resolution imaging for hard-to-access areas and condition documentation
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Weather Integration:</strong> Environmental data correlation with maintenance needs and timing
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Mobile Applications:</strong> Field data collection and real-time reporting capabilities
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Data Management Systems</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Cloud-Based Records:</strong> Accessible documentation with automated backup and version control
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Predictive Analytics:</strong> Trend analysis and maintenance scheduling optimization
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Integration Platforms:</strong> Coordination between maintenance, financial, and compliance systems
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Reporting Automation:</strong> Scheduled reports for management, boards, and regulatory compliance
                    </div>
                  </li>
                </ul>
              </div>
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
