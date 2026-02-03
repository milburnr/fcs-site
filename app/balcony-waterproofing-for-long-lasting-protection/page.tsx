import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/Schema";
import { Phone, CheckCircle, HelpCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";
import { RelatedArticles } from "@/components/RelatedArticles";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Balcony Waterproofing Tampa | High-Rise | FCS",
  description: "Expert balcony waterproofing for Tampa Bay high-rise condominiums. SB 4-D compliant membrane systems, traffic coatings, and comprehensive deck protection for lasting performance.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Balcony Waterproofing for Long Lasting Protection", href: "/balcony-waterproofing-for-long-lasting-protection/" },
];

const internalLinks = [
  { href: "/sb-4-d-compliance-tampa-bay-condos/", label: "SB 4-D Compliance Guide" },
  { href: "/condo-milestone-inspection-remediation/", label: "Milestone Inspection Services" },
  { href: "/balcony-restoration-services/", label: "Balcony Restoration Services" },
  { href: "/services/residential/exterior-waterproofing/", label: "Exterior Waterproofing" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const relatedArticles = [
  {
    "title": "Balcony Restoration & Waterproofing for Longevity",
    "href": "/balcony-restoration-and-exterior-waterproofing-for-longevity/",
    "description": "Protect your investment with restoration systems engineered for 20+ years of service."
  },
  {
    "title": "Florida SB4-D Compliance Guide",
    "href": "/florida-sb4d-compliance-guide/",
    "description": "Essential requirements for condo milestone inspections and structural integrity reserves."
  },
  {
    "title": "Effective Balcony Maintenance Tips",
    "href": "/effective-balcony-maintenance-tips/",
    "description": "Proactive maintenance strategies to extend balcony lifespan and prevent costly repairs."
  },
  {
    "title": "Condo Balcony Inspection Requirements",
    "href": "/condo-balcony-inspection-requirements/",
    "description": "Understanding inspection requirements under Florida's updated condo safety legislation."
  }
];

const faqs = [
  {
    question: "What waterproofing systems are used for high-rise balconies?",
    answer: "High-rise balcony waterproofing employs traffic-bearing membrane systems designed to withstand foot traffic while providing waterproof protection. Primary systems include polyurethane membranes (flexible, UV-resistant, excellent crack-bridging), polyurea coatings (fast-curing, extremely durable, chemical resistant), and hybrid systems combining multiple technologies. Complete systems include primers for adhesion, waterproofing membranes, and topcoats for UV protection and slip resistance. System selection depends on exposure conditions, traffic patterns, and aesthetic requirements."
  },
  {
    question: "How does SB 4-D affect balcony waterproofing requirements in Florida?",
    answer: "Florida's SB 4-D legislation requires milestone structural inspections for condominiums three stories or higher. While focused on structural elements, these inspections specifically evaluate balconies for signs of water intrusion damage—efflorescence, spalling, delamination, and corrosion staining. Failed waterproofing that has caused structural deterioration must be addressed in remediation plans. SIRS requirements mandate reserve funding for waterproofing system maintenance and replacement. Proactive waterproofing maintenance helps associations avoid the structural damage that triggers expensive repairs and compliance issues."
  },
  {
    question: "How often should balcony waterproofing be replaced or recoated?",
    answer: "Service life depends on system type, quality of installation, and exposure conditions. Traffic-bearing deck coatings typically require recoating every 5-10 years depending on wear patterns and UV exposure. Full membrane replacement is typically needed every 15-25 years. High-traffic areas like unit entries may need more frequent attention than general deck areas. Annual inspections identify wear patterns and coating failures before water penetrates to the structural slab. Timely maintenance extends system life and prevents the expensive structural repairs that result from water intrusion."
  },
  {
    question: "What are the signs of balcony waterproofing failure?",
    answer: "Warning signs include visible coating wear, cracking, or peeling; standing water that doesn't drain properly; water staining on the underside of the balcony slab; efflorescence (white mineral deposits) on concrete surfaces; rust staining indicating rebar corrosion; soft or spongy areas in the deck surface; and water intrusion into units below. Early detection allows for targeted repairs before water damages structural concrete. Regular inspection—especially after major storms—catches problems when they're most economical to address."
  },
  {
    question: "How much does balcony waterproofing cost for high-rise condominiums in Tampa?",
    answer: "Balcony waterproofing costs depend on system type and condition of existing surfaces. Recoating with traffic coating over sound existing systems typically costs $8-15 per square foot. Complete waterproofing replacement with new membrane systems runs $20-40 per square foot. For a typical 50-square-foot high-rise balcony, expect $400-750 for recoating or $1,000-2,000 for complete replacement. Building-wide projects achieve economies of scale with 15-25% lower per-unit costs. Costs increase when extensive concrete repairs are required before waterproofing application."
  },
  {
    question: "Can balcony waterproofing be applied during Florida's rainy season?",
    answer: "Yes, with proper planning and weather management. Waterproofing products require dry substrates and typically cannot be applied during active rainfall or to surfaces with morning dew. Experienced contractors monitor forecasts, protect work areas with temporary covers when possible, and schedule water-sensitive work during dry periods. Most products can cure between afternoon storms typical of Florida summers. Off-season scheduling (late fall through early spring) provides more consistent working conditions but may require longer project schedules due to shorter daylight hours."
  }
];

const costData = [
  { service: "Traffic Coating Recoat (good substrate)", costRange: "$8 - $15", perUnit: "Per sq ft" },
  { service: "Complete Waterproofing System", costRange: "$20 - $40", perUnit: "Per sq ft" },
  { service: "Polyurethane Membrane System", costRange: "$18 - $30", perUnit: "Per sq ft" },
  { service: "Polyurea Membrane System", costRange: "$22 - $38", perUnit: "Per sq ft" },
  { service: "Concrete Repair (prior to waterproofing)", costRange: "$25 - $60", perUnit: "Per sq ft" },
  { service: "Drainage Improvement", costRange: "$500 - $1,500", perUnit: "Per balcony" },
  { service: "Typical Balcony Recoat (50 sq ft)", costRange: "$400 - $750", perUnit: "Per unit" },
  { service: "Typical Balcony Complete (50 sq ft)", costRange: "$1,000 - $2,000", perUnit: "Per unit" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Balcony Waterproofing Services"
        serviceDescription="Expert balcony waterproofing for Tampa Bay high-rise condominiums. SB 4-D compliant membrane systems, traffic coatings, and comprehensive deck protection."
        city="Tampa"
        minPrice="400"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
            alt="Balcony waterproofing for high-rise buildings"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Balcony Waterproofing for Long-Lasting Protection
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Professional waterproofing systems for high-rise balconies that protect structural concrete and maintain beautiful, functional outdoor spaces.
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
              Balcony waterproofing on high-rise condominiums is not merely a maintenance item—it's a critical building system that protects structural concrete from the water intrusion that leads to expensive deterioration. When balcony waterproofing fails, water reaches embedded reinforcing steel and initiates the corrosion process that ultimately compromises structural capacity. Florida Construction Specialists provides expert balcony waterproofing services that protect Tampa Bay high-rise buildings for years of reliable performance.
            </p>

            <p className="text-gray-600 mb-6">
              The horizontal surfaces of balconies create particularly challenging waterproofing conditions. Unlike vertical walls that shed water, balcony decks collect rainfall and must rely entirely on waterproofing membranes and drainage systems to protect underlying concrete. Add foot traffic, furniture placement, and Tampa Bay's intense UV radiation, and balcony waterproofing faces some of the most demanding conditions any building waterproofing system encounters.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              How Balcony Waterproofing Protects Your Building
            </h2>
            <p className="text-gray-600 mb-6">
              Understanding the deterioration process explains why proper waterproofing is so critical. Concrete itself is not waterproof—it contains microscopic pores that allow moisture migration. When water penetrates balcony slabs and reaches the steel reinforcing bars embedded within the concrete, it initiates electrochemical corrosion. As steel rusts, it expands to several times its original volume, creating internal pressure that cracks and spalls the surrounding concrete.
            </p>

            <p className="text-gray-600 mb-6">
              Once started, this corrosion-spalling cycle accelerates rapidly. Cracks from initial spalling allow more water penetration, spreading corrosion to adjacent rebar. Each winter-summer cycle (even in Florida, temperature variations stress concrete) and each wetting-drying cycle advances deterioration. Within a few years, minor surface staining can progress to significant structural damage requiring expensive repairs.
            </p>

            <p className="text-gray-600 mb-6">
              Effective waterproofing interrupts this cycle by preventing water from reaching the concrete substrate. Traffic-bearing membrane systems create seamless, flexible barriers that bridge hairline cracks while withstanding the foot traffic, furniture movement, and UV exposure that balconies experience. When properly installed and maintained, these systems provide decades of protection.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              SB 4-D Requirements and Balcony Protection
            </h2>
            <p className="text-gray-600 mb-6">
              Florida's SB 4-D legislation has elevated the importance of balcony waterproofing for condominium associations. Milestone structural inspections required for buildings three stories or higher specifically evaluate balconies for signs of deterioration. Inspecting engineers look for evidence of water intrusion—efflorescence, rust staining, spalling, and delamination—that indicates waterproofing system failure and structural impact.
            </p>

            <p className="text-gray-600 mb-6">
              When inspections reveal deterioration, associations must address both the structural damage and the underlying waterproofing failures. Simply repairing concrete without restoring waterproofing protection guarantees recurring damage and doesn't satisfy inspection requirements. Comprehensive remediation addresses root causes while restoring structural capacity.
            </p>

            <p className="text-gray-600 mb-6">
              The Structural Integrity Reserve Study (SIRS) mandated by SB 4-D must include balcony waterproofing among components requiring reserve funding. Associations can no longer defer waterproofing maintenance indefinitely—the law requires realistic budgeting for these critical systems. Proactive maintenance that prevents structural damage ultimately costs far less than deferred maintenance that allows deterioration to compound.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Waterproofing System Options
            </h2>
            <p className="text-gray-600 mb-6">
              Modern balcony waterproofing systems employ multiple layers that work together to provide protection and durability. Primer coats ensure adhesion to the concrete substrate—a critical factor since adhesion failures are a primary cause of waterproofing system failure. The waterproofing membrane provides the actual water barrier, while topcoats protect the membrane from UV degradation, provide slip resistance, and contribute to aesthetics.
            </p>

            <p className="text-gray-600 mb-6">
              Polyurethane membrane systems offer excellent flexibility and crack-bridging capability—important characteristics for concrete surfaces that experience thermal movement. Quality polyurethane systems maintain their properties through years of UV exposure and can be recoated multiple times before full replacement is required. Color options allow coordination with building aesthetics.
            </p>

            <p className="text-gray-600 mb-6">
              Polyurea coatings cure extremely rapidly—within hours rather than days—minimizing the time balconies are unavailable to residents. The fast cure also reduces the window during which uncured coatings are vulnerable to rain damage, an advantage during Tampa Bay's rainy season. Polyurea systems offer exceptional chemical resistance and abrasion resistance, though typically at higher initial cost than polyurethane alternatives.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Drainage System Integration
            </h2>
            <p className="text-gray-600 mb-6">
              Even perfect waterproofing membranes can't protect balconies if water ponds on the surface and eventually finds its way through seams, penetrations, or worn areas. Proper drainage design ensures water moves efficiently off the balcony surface to scuppers or drains. Minimum slope recommendations of 1/4 inch per foot ensure positive drainage under all conditions.
            </p>

            <p className="text-gray-600 mb-6">
              Scupper details require careful waterproofing integration. The membrane must extend through the scupper opening and turn down onto the exterior face to ensure water that enters the scupper cannot bypass the membrane. Scupper boxes, clamping rings, and similar accessories must be compatible with the membrane system and properly integrated during installation.
            </p>

            <p className="text-gray-600 mb-6">
              Overflow provisions protect against flooding when primary drains clog. Secondary scuppers positioned several inches above the primary drain level provide emergency relief during heavy rainfall. Without overflow protection, clogged drains can create standing water deep enough to flood through sliding door thresholds, damaging unit interiors.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Installation Considerations for High-Rise Projects
            </h2>
            <p className="text-gray-600 mb-6">
              Balcony waterproofing on high-rise buildings presents logistical challenges that ground-level work doesn't face. Material staging on elevated balconies requires planning to ensure continuous supply during application. Weather exposure at upper floors can be more intense than at grade, with higher wind speeds accelerating evaporation and affecting coating application. Building sway during high wind conditions may require work suspension.
            </p>

            <p className="text-gray-600 mb-6">
              Resident coordination is essential for successful high-rise balcony waterproofing projects. Each unit's balcony must be cleared of furniture, plants, and personal items before work can proceed. Curing times restrict balcony use for 24-72 hours after application depending on products and conditions. Clear communication about schedules and expectations minimizes resident complaints and ensures smooth project progression.
            </p>

            <p className="text-gray-600 mb-6">
              Phasing strategies help manage building-wide balcony waterproofing projects. Working on one building elevation at a time allows residents on unaffected sides to continue normal balcony use. Starting with the most deteriorated areas addresses the greatest risks first while crews refine procedures. Consistent crew assignments ensure quality standards are maintained throughout the project.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Balcony Waterproofing Costs in Tampa Bay
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
            *Costs vary based on system selection, substrate condition, and project scale. Contact us for a detailed estimate.
          </p>
        </div>
      </section>

      {/* Advanced Waterproofing Technologies */}
      <section className="section bg-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Advanced Waterproofing Technologies for Florida Climate
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Florida's aggressive environmental conditions demand advanced waterproofing technologies that go beyond basic water exclusion. Modern balcony waterproofing systems must resist salt air corrosion, UV degradation, thermal cycling, hurricane-force winds, and daily moisture exposure while maintaining structural integrity and aesthetic appeal for decades.
              </p>
              <p className="text-gray-600 mb-6">
                High-performance membrane systems incorporate multiple layers of protection, each engineered for specific functions. Primer layers ensure maximum adhesion to concrete substrates while penetrating and sealing surface pores. Base membranes provide the primary waterproof barrier with crack-bridging capabilities to accommodate structural movement. Intermediate layers offer chemical resistance and enhanced puncture protection. Topcoat systems protect underlying membranes from UV radiation while providing slip resistance and aesthetic finishes.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Polyurethane Membrane Systems</h3>
                <div className="space-y-3 text-gray-600">
                  <div>
                    <strong className="text-brand-green-dark">Advantages:</strong>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• Exceptional elasticity accommodates structural movement</li>
                      <li>• Superior UV resistance with minimal degradation</li>
                      <li>• Seamless application eliminates failure points</li>
                      <li>• Chemical resistance to salt spray and pollutants</li>
                      <li>• Self-leveling properties create smooth surfaces</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-brand-green-dark">Best Applications:</strong>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• High-traffic balcony decks</li>
                      <li>• Complex geometric surfaces</li>
                      <li>• Buildings with significant movement</li>
                      <li>• Premium aesthetic requirements</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Polyurea Coating Systems</h3>
                <div className="space-y-3 text-gray-600">
                  <div>
                    <strong className="text-brand-green-dark">Advantages:</strong>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• Rapid curing minimizes weather exposure during application</li>
                      <li>• Exceptional durability and impact resistance</li>
                      <li>• Outstanding chemical and abrasion resistance</li>
                      <li>• Wide temperature range performance</li>
                      <li>• Low-temperature application capability</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-brand-green-dark">Best Applications:</strong>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• Heavy-traffic commercial balconies</li>
                      <li>• Harsh marine environments</li>
                      <li>• Time-sensitive renovations</li>
                      <li>• High-durability requirements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Professional Installation Process
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Successful balcony waterproofing requires meticulous attention to surface preparation, environmental conditions, and application techniques. The installation process follows industry best practices established by ASTM, ICRI, and manufacturer specifications, with additional considerations for Florida's challenging climate conditions.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                  <span className="bg-brand-green text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">1</span>
                  Surface Assessment and Preparation
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <strong className="text-brand-green-dark block mb-2">Condition Evaluation:</strong>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Concrete strength testing using rebound hammer</li>
                      <li>• Moisture content measurement with calibrated meters</li>
                      <li>• Surface bond testing for existing coatings</li>
                      <li>• Crack mapping and structural movement assessment</li>
                      <li>• Contamination testing for oil, grease, or chemical exposure</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-brand-green-dark block mb-2">Surface Preparation:</strong>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Mechanical abrading to ICRI CSP-2 or CSP-3 profile</li>
                      <li>• Complete removal of loose material and contaminants</li>
                      <li>• Crack repair using compatible polymer mortars</li>
                      <li>• Substrate moisture reduction if above specification limits</li>
                      <li>• Dust removal using industrial vacuum systems</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                  <span className="bg-brand-green text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">2</span>
                  Primer and Base Membrane Application
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <strong className="text-brand-green-dark block mb-2">Primer Systems:</strong>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Penetrating sealers for porous concrete substrates</li>
                      <li>• Moisture-tolerant primers for humid conditions</li>
                      <li>• Epoxy primers for maximum adhesion strength</li>
                      <li>• Application in thin, uniform coats per specifications</li>
                      <li>• Proper cure time monitoring before membrane application</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-brand-green-dark block mb-2">Base Membrane:</strong>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Multiple coat application for specified dry film thickness</li>
                      <li>• Reinforcement fabric embedding in wet membrane</li>
                      <li>• Seamless application with proper overlap techniques</li>
                      <li>• Flash coating of vertical surfaces and transitions</li>
                      <li>• Quality control testing for pinhole defects</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                  <span className="bg-brand-green text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">3</span>
                  Topcoat and Protection Systems
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <strong className="text-brand-green-dark block mb-2">UV Protection:</strong>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Aliphatic polyurethane topcoats for UV stability</li>
                      <li>• Acrylic coatings for enhanced weather resistance</li>
                      <li>• Color-stable pigment systems preventing chalking</li>
                      <li>• Multiple coat application for uniform appearance</li>
                      <li>• Accelerated weathering test validation</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-brand-green-dark block mb-2">Traffic Protection:</strong>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Anti-slip additives for pedestrian safety</li>
                      <li>• Broadcast aggregate systems for heavy traffic areas</li>
                      <li>• Elastomeric coatings accommodating movement</li>
                      <li>• Chemical resistance for cleaning product exposure</li>
                      <li>• Abrasion testing to ensure durability standards</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control and Testing */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Quality Control and Performance Testing
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Professional waterproofing installation requires comprehensive quality control measures throughout the application process. Testing protocols verify that installed systems meet design specifications and will provide expected service life under Florida's challenging environmental conditions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Installation Quality Control</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Substrate preparation verification:</strong> Surface profile measurement, cleanliness inspection, and moisture content documentation
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Material quality control:</strong> Batch testing, mix ratio verification, and pot life monitoring during application
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Application monitoring:</strong> Film thickness measurement, coverage rate verification, and environmental condition logging
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Cure monitoring:</strong> Tack-free time verification, recoat window compliance, and final cure confirmation
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Performance Testing</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Waterproof integrity testing:</strong> Flood testing or electronic leak detection to verify membrane continuity
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Adhesion testing:</strong> Pull-off tests to verify bond strength between membrane and substrate
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Hardness and durability:</strong> Shore A durometer testing and abrasion resistance verification
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Drainage verification:</strong> Flow testing to ensure proper water removal under design conditions
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Compliance */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Environmental Compliance and Sustainability
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Modern balcony waterproofing systems incorporate environmental considerations including VOC compliance, sustainable materials, and end-of-life recyclability. Florida's environmental regulations and green building standards influence material selection and application procedures.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Regulatory Compliance</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>VOC Regulations:</strong> Low-emission coatings meeting EPA and state air quality standards
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Water Quality Protection:</strong> Runoff management preventing contamination of storm water systems
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Waste Management:</strong> Proper disposal of removed materials and application waste
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Safety Standards:</strong> Worker protection and resident safety during application
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Sustainable Practices</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Extended Service Life:</strong> High-performance systems reducing replacement frequency
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Energy Efficiency:</strong> Reflective coatings reducing cooling loads in high-rise buildings
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Resource Conservation:</strong> Precise application minimizing material waste
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Recyclable Materials:</strong> System components with end-of-life recovery options
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
              "High-rise balcony expertise",
              "SB 4-D compliance specialists",
              "Premium membrane systems",
              "Experienced application crews",
              "Comprehensive warranties",
              "Condo association experience",
              "Minimal resident disruption",
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
      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      

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
            Protect Your Balconies with Professional Waterproofing
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for expert balcony waterproofing that prevents structural damage and maintains beautiful outdoor spaces.
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
