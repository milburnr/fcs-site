import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  CheckCircle,
  AlertTriangle,
  Waves,
  ArrowRight,
  Phone,
  HelpCircle,
  Shovel,
  TreeDeciduous,
  Shield,
  FileCheck,
  DollarSign,
  Clock,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema"
import { Breadcrumb } from "@/components/Breadcrumb";
import { BackToHub } from "@/components/BackToHub";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Waterfront Lot Site Preparation Tampa Bay | FCS Construction",
  description:
    "Expert waterfront lot site preparation in Tampa Bay. Navigate environmental permits, seawall requirements, fill placement, and flood zone compliance before building your dream waterfront home.",
  keywords:
    "waterfront site prep Tampa, waterfront lot preparation Florida, seawall construction Tampa Bay, SWFWMD permits, waterfront grading, flood zone site work",
};

const sitePrepPhases = [
  {
    phase: "Due Diligence & Surveys",
    duration: "4-8 weeks",
    activities: [
      "Boundary and topographic survey",
      "Wetland delineation",
      "Geotechnical investigation",
      "Seawall condition assessment",
      "Environmental site assessment",
    ],
    permits: "None required for investigation",
    cost: "$5,000-$15,000",
  },
  {
    phase: "Environmental Permitting",
    duration: "3-8 months",
    activities: [
      "SWFWMD ERP application",
      "USACE permit if required",
      "FDEP CCCL permit if applicable",
      "Seagrass survey and mitigation plan",
      "Manatee protection plan",
    ],
    permits: "ERP, Section 10/404, CCCL",
    cost: "$10,000-$50,000+",
  },
  {
    phase: "Seawall Work",
    duration: "4-12 weeks",
    activities: [
      "Existing seawall removal/repair",
      "New seawall construction",
      "Tie-back installation",
      "Cap and finish work",
      "Permit closeout inspection",
    ],
    permits: "Seawall permit, marine contractor license",
    cost: "$400-$800/linear foot",
  },
  {
    phase: "Site Clearing & Grading",
    duration: "2-4 weeks",
    activities: [
      "Tree removal (with permits)",
      "Vegetation clearing",
      "Initial rough grading",
      "Erosion control installation",
      "Stormwater management prep",
    ],
    permits: "Tree removal permit, land clearing permit",
    cost: "$15,000-$50,000",
  },
  {
    phase: "Fill & Elevation",
    duration: "2-8 weeks",
    activities: [
      "Fill material import",
      "Compaction and testing",
      "Final grade establishment",
      "Retaining walls if needed",
      "Elevation certification",
    ],
    permits: "Floodplain development permit",
    cost: "$10-$20/cubic yard installed",
  },
  {
    phase: "Utilities & Foundation Prep",
    duration: "2-4 weeks",
    activities: [
      "Utility connections to site",
      "Well and septic if applicable",
      "Foundation stakeout",
      "Pile installation if required",
      "Final site prep for construction",
    ],
    permits: "Utility permits, well/septic permits",
    cost: "$25,000-$100,000+",
  },
];

const environmentalChallenges = [
  {
    challenge: "Wetland Impacts",
    description: "Site contains or is adjacent to jurisdictional wetlands",
    solution: "Wetland delineation, avoidance where possible, mitigation banking for unavoidable impacts",
    timeline: "4-6 months for permit with mitigation",
    cost: "$10,000-$100,000+ depending on impact",
  },
  {
    challenge: "Seagrass Beds",
    description: "Protected seagrass in waterway adjacent to property",
    solution: "Survey to document extent, avoid prop scarring, may limit dock location/design",
    timeline: "2-4 months for survey and plan",
    cost: "$5,000-$20,000 for survey/mitigation plan",
  },
  {
    challenge: "Mangroves",
    description: "Protected mangroves on shoreline",
    solution: "Mangrove trimming permit (max 25% in most cases), alternative dock designs",
    timeline: "2-3 months for trimming permit",
    cost: "$1,000-$5,000 for permit; avoidance preferred",
  },
  {
    challenge: "Manatee Zones",
    description: "Property in manatee protection area",
    solution: "In-water work windows, manatee watch during construction, dock design restrictions",
    timeline: "Standard condition on permits",
    cost: "Minimal if planned properly",
  },
  {
    challenge: "CCCL Location",
    description: "Property seaward of Coastal Construction Control Line",
    solution: "FDEP permit required, enhanced design standards, may limit buildable area",
    timeline: "3-6 months for CCCL permit",
    cost: "$5,000-$20,000 permit fees",
  },
];

const seawallConsiderations = [
  {
    factor: "Existing Condition",
    assessment: "Structural integrity, age, type, maintenance history",
    impact: "Determines repair vs. replacement decision",
    cost: "Inspection: $500-$2,000",
  },
  {
    factor: "Water Depth",
    assessment: "Depth at seawall face, dredging needs",
    impact: "Affects boat access, pile depth requirements",
    cost: "Survey: $1,000-$3,000",
  },
  {
    factor: "Soil Conditions",
    assessment: "Bearing capacity, groundwater, corrosion potential",
    impact: "Determines seawall design and tie-back requirements",
    cost: "Geotech: $3,000-$8,000",
  },
  {
    factor: "Wave Exposure",
    assessment: "Fetch distance, typical wave heights, boat wake",
    impact: "Influences seawall height and reinforcement",
    cost: "Engineering analysis included in design",
  },
  {
    factor: "Permitting Status",
    assessment: "Existing permits, encroachments, submerged lands lease",
    impact: "May require corrections before new work",
    cost: "Title search and permit research",
  },
];

const fillRequirements = [
  {
    requirement: "Fill Source Quality",
    standard: "Clean fill free of debris, organics, contamination",
    tampaNote: "Local sources include mine pits in Polk County, shell operations",
    verification: "Certificate of analysis from supplier",
  },
  {
    requirement: "Compaction Standards",
    standard: "95% Standard Proctor density typical",
    tampaNote: "Sandy soils compact well but may settle; testing critical",
    verification: "Compaction testing every 12 inches of lift",
  },
  {
    requirement: "Elevation Documentation",
    standard: "Survey to verify finished grade meets design",
    tampaNote: "Flood zone elevation certificates required",
    verification: "Licensed surveyor certification",
  },
  {
    requirement: "Erosion Control",
    standard: "Prevent sediment migration during and after fill",
    tampaNote: "Silt fence, inlet protection, waterway buffers required",
    verification: "SWFWMD inspection before and during work",
  },
  {
    requirement: "Wetland Buffer",
    standard: "Typically 25-50 feet from jurisdictional wetlands",
    tampaNote: "No fill within buffer without mitigation",
    verification: "Wetland flagging and survey",
  },
];

const foundationOptions = [
  {
    type: "Driven Concrete Piles",
    bestFor: "VE flood zones, large homes, poor soils",
    depth: "30-80+ feet typical in Tampa Bay",
    cost: "$500-$1,500 per pile",
    advantages: "High capacity, reaches bearing stratum, time-tested",
    challenges: "Noise, vibration may affect seawall, requires specialized equipment",
  },
  {
    type: "Auger Cast Piles",
    bestFor: "AE zones, moderate loads, noise-sensitive areas",
    depth: "20-60 feet typical",
    cost: "$400-$1,200 per pile",
    advantages: "Less vibration, good for sandy soils, moderate cost",
    challenges: "Limited capacity, not for high wave zones",
  },
  {
    type: "Helical Piers",
    bestFor: "Smaller structures, limited access sites",
    depth: "15-50 feet typical",
    cost: "$300-$800 per pier",
    advantages: "Quick installation, minimal disturbance, removable",
    challenges: "Corrosion in marine environment, limited load capacity",
  },
  {
    type: "Spread Footings on Fill",
    bestFor: "Elevated sites out of VE zone with good compaction",
    depth: "N/A - surface foundation on compacted fill",
    cost: "$15-$25/SF of foundation",
    advantages: "Standard construction, lower cost, familiar to all builders",
    challenges: "Requires adequate elevation, proper fill compaction critical",
  },
];

const faqs = [
  {
    question: "How long does waterfront site preparation take?",
    answer:
      "Total site preparation for waterfront lots in Tampa Bay typically takes 6-18 months from initial survey to construction-ready. The timeline breaks down as: due diligence and surveys (1-2 months), environmental permitting (3-8 months—this is usually the longest phase), seawall work (1-3 months), and site grading/fill (1-2 months). Projects with significant environmental constraints (wetlands, seagrass, mangroves) take longer. Those with existing adequate seawalls and minimal environmental issues can move faster. The key to avoiding delays is starting environmental investigation and permitting early—ideally before closing on the property if possible.",
  },
  {
    question: "Do I need to replace the seawall before building?",
    answer:
      "It depends on condition and your plans. Have a marine contractor inspect the seawall before purchasing or planning construction. Factors to evaluate: age (concrete seawalls last 50-75 years; vinyl 30-50 years), structural integrity (tilting, cracking, cap deterioration), tie-back condition (often the first component to fail), and height relative to flood requirements. Building construction—especially pile driving—can damage marginal seawalls. Many lenders require seawall inspection before financing. If replacement is needed, doing it during site prep is most efficient. Seawall replacement typically costs $400-$800 per linear foot for concrete construction.",
  },
  {
    question: "How much fill is needed to elevate a waterfront lot?",
    answer:
      "Fill quantities depend on existing grade versus required elevation. In Tampa Bay flood zones, required finished floor elevation is typically 12-16 feet NAVD or higher. If your lot is currently at 6 feet elevation and you need 14 feet finished grade, you need 8 feet of fill. For a 50x100 foot building pad, that's approximately 1,500 cubic yards of fill. At $10-20 per cubic yard delivered and compacted, that's $15,000-$30,000 just for fill. Additional costs include grading, compaction testing, erosion control, and permits. Some lots may benefit from elevated foundation systems (piles) rather than fill, especially in VE zones where fill cannot be used.",
  },
  {
    question: "What environmental permits do I need for waterfront site prep?",
    answer:
      "Most Tampa Bay waterfront site prep requires: SWFWMD Environmental Resource Permit (ERP) for any work affecting wetlands, stormwater, or water bodies; local tree removal permit if removing protected trees; floodplain development permit for filling or grading in flood zones; seawall permit from local building department; and potentially USACE Section 10/404 permits if work affects navigable waters. Sites seaward of the Coastal Construction Control Line (CCCL) require FDEP permits. Properties with wetlands, seagrass, or mangroves require additional surveys and potentially mitigation. Engaging an environmental consultant early helps identify all required permits and develop an efficient permitting strategy.",
  },
  {
    question: "Can I start construction while permits are pending?",
    answer:
      "Limited work may be possible, but proceeding without required permits risks stop-work orders, fines, and required restoration. Some work typically does not require permits: surveys, geotechnical investigation, and preliminary design. Tree removal almost always requires a permit. Any work affecting wetlands, waterways, or flood zones requires permits before starting. Seawall work requires both building permit and often environmental permits. Fill placement in flood zones requires floodplain development permit. The safest approach is obtaining all permits before significant site work. If schedule is critical, discuss phased permitting with your environmental consultant and building department.",
  },
  {
    question: "What soil conditions should I expect for waterfront lots in Tampa Bay?",
    answer:
      "Tampa Bay waterfront soils vary but commonly include: shallow sandy soils (good drainage but may need deep foundations), limestone at varying depths (can complicate pile driving but provides good bearing), high water table (affects excavation and foundation design), and potentially organic soils or fill from previous development. Geotechnical investigation is essential—don't assume based on neighboring properties. Key information needed: bearing capacity for foundations, groundwater elevation, soil corrosivity for pile selection, and liquefaction potential. Expect to spend $3,000-$8,000 for adequate geotechnical investigation, which can save far more by identifying issues before construction begins.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Waterfront Lot Site Preparation", href: "/waterfront-lot-site-preparation/" },
];


const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/services/residential/waterfront-homes/", label: "Waterfront Home Construction" },
  { href: "/services/residential/home-additions/", label: "Home Additions" },
  { href: "/services/residential/hurricane-resistant-construction/", label: "Hurricane-Resistant Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function WaterfrontLotSitePreparationPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Waterfront Site Preparation" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Waterfront Lot Site Preparation"
        serviceDescription="Expert waterfront lot site preparation in Tampa Bay. Environmental permits, seawall work, fill placement, and foundation preparation for custom waterfront homes."
        city="Tampa"
        minPrice="50000"
      />
      <ArticleSchema
        headline="Waterfront Lot Site Preparation Tampa Bay | FCS Construction"
        description="Expert waterfront lot site preparation in Tampa Bay. Navigate environmental permits, seawall requirements, fill placement, and flood zone compliance before building your dream waterfront home."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/waterfront-lot-site-preparation/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Residential", href: "/residential/" },
          { name: "Custom Homes", href: "/residential/luxury-home-building/" },
          { name: "Waterfront Site Prep", href: "/waterfront-lot-site-preparation/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/custom-home-1/custom-home-1-display.webp"
            alt="Luxury custom home construction"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <BackToHub
              silo="residential"
              customHubTitle="Custom Home Building"
              customHubHref="/residential/luxury-home-building/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Waterfront Lot Site Preparation
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Prepare your Tampa Bay waterfront lot for construction with expert
              guidance on environmental permits, seawall work, fill placement,
              and foundation preparation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta-gold">
                Start Your Site Prep
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="btn-secondary-gold flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Site Prep Phases */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Site Preparation Phases
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From initial surveys through foundation prep, a systematic approach ensures success.
          </p>
          <div className="space-y-4 max-w-4xl mx-auto">
            {sitePrepPhases.map((phase, index) => (
              <div
                key={phase.phase}
                className="bg-gray-50 rounded-xl p-6 shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-brand-green-dark">
                        {phase.phase}
                      </h3>
                      <div className="flex gap-2">
                        <span className="text-xs font-medium text-brand-gold bg-brand-gold-light/30 px-3 py-1 rounded-full">
                          {phase.duration}
                        </span>
                        <span className="text-xs font-medium text-brand-green bg-brand-green-light/30 px-3 py-1 rounded-full">
                          {phase.cost}
                        </span>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mb-3">
                      {phase.activities.map((activity, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{activity}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">
                      <strong>Permits:</strong> {phase.permits}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Challenges */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Environmental Challenges & Solutions
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Common environmental issues on Tampa Bay waterfront lots.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {environmentalChallenges.map((item) => (
              <div key={item.challenge} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  <h3 className="font-bold text-brand-green-dark">{item.challenge}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <p className="text-sm text-green-700 bg-green-50 rounded p-2 mb-2">
                  <strong>Solution:</strong> {item.solution}
                </p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Timeline: {item.timeline}</span>
                  <span>Cost: {item.cost}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seawall Considerations */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Seawall Evaluation Factors
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Key factors to assess when evaluating seawall condition and needs.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-brand-gold text-white">
                  <th className="px-4 py-3 text-left font-semibold">Factor</th>
                  <th className="px-4 py-3 text-left font-semibold">What to Assess</th>
                  <th className="px-4 py-3 text-left font-semibold">Impact on Project</th>
                  <th className="px-4 py-3 text-center font-semibold">Cost</th>
                </tr>
              </thead>
              <tbody>
                {seawallConsiderations.map((item, index) => (
                  <tr
                    key={item.factor}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-4 font-semibold text-brand-green-dark">
                      {item.factor}
                    </td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{item.assessment}</td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{item.impact}</td>
                    <td className="px-4 py-4 text-center text-brand-gold-dark font-medium text-sm">
                      {item.cost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fill Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Fill Placement Requirements
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Standards and verification for proper fill placement.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {fillRequirements.map((req) => (
              <div key={req.requirement} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-brand-green-dark mb-3">{req.requirement}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  <strong>Standard:</strong> {req.standard}
                </p>
                <p className="text-sm text-brand-gold-dark mb-2">
                  <strong>Tampa Note:</strong> {req.tampaNote}
                </p>
                <p className="text-xs text-gray-500 bg-gray-50 rounded p-2">
                  <strong>Verification:</strong> {req.verification}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation Options */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Foundation Options for Waterfront
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose the right foundation system for your waterfront lot.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {foundationOptions.map((option) => (
              <div key={option.type} className="card p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-brand-green-dark">{option.type}</h3>
                  <span className="text-sm bg-brand-gold-light text-brand-gold-dark px-3 py-1 rounded-full">
                    {option.cost}
                  </span>
                </div>
                <p className="text-brand-gold-dark font-medium text-sm mb-2">
                  Best For: {option.bestFor}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  Typical Depth: {option.depth}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-green-50 rounded-lg p-3">
                    <span className="text-xs font-semibold text-green-600 block mb-1">Advantages</span>
                    <p className="text-gray-600 text-xs">{option.advantages}</p>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3">
                    <span className="text-xs font-semibold text-yellow-600 block mb-1">Challenges</span>
                    <p className="text-gray-600 text-xs">{option.challenges}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
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

      {/* Related Links */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Waterfront Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/building-on-tampa-bay-waterfront/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Waterfront Home Building
              </h3>
              <p className="text-gray-600 text-sm">
                Complete guide to building on Tampa Bay waterfront.
              </p>
            </Link>
            <Link
              href="/living-shoreline-vs-seawall/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Living Shoreline vs Seawall
              </h3>
              <p className="text-gray-600 text-sm">
                Compare shoreline protection options.
              </p>
            </Link>
            <Link
              href="/residential/luxury-home-building/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Custom Home Building
              </h3>
              <p className="text-gray-600 text-sm">
                Full custom home building services.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-gold">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Ready to Prepare Your Waterfront Lot?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            FCS guides Tampa Bay property owners through every step of waterfront
            site preparation. From initial surveys to construction-ready status,
            we ensure your lot is properly prepared for your dream home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Start Your Project
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-gold-dark font-bold rounded-full hover:bg-gray-100 transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>
      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Services"
            links={internalLinks}
          />
        </div>
      </section>

    </>
  );
}