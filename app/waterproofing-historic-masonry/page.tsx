import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Droplets,
  CheckCircle,
  AlertTriangle,
  Home,
  ArrowRight,
  Phone,
  HelpCircle,
  Shield,
  Layers,
  ThermometerSun,
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
  title: "Waterproofing Historic Masonry | Tampa Bay Historic Homes | FCS",
  description:
    "Specialized waterproofing techniques for historic brick and masonry homes in Tampa Bay. Preserve character while protecting against Florida's moisture challenges.",
  keywords:
    "historic masonry waterproofing Tampa, brick home waterproofing Florida, historic preservation moisture control, Hyde Park historic homes, waterproofing old brick",
};

const masonryTypes = [
  {
    type: "Solid Brick (Pre-1930s)",
    characteristics: "Multiple wythes of brick, lime mortar, no cavity",
    waterproofingApproach: "Breathable treatments only; avoid film-forming sealers",
    commonIssues: "Soft mortar erosion, rising damp, efflorescence",
    tampaExamples: "Hyde Park bungalows, Ybor City historic buildings",
  },
  {
    type: "Brick Veneer (1930s-1970s)",
    characteristics: "Single wythe over frame or block, air cavity, portland mortar",
    waterproofingApproach: "Cavity drainage, weep holes, flashing repair",
    commonIssues: "Weep hole blockage, flashing failure, tie corrosion",
    tampaExamples: "Seminole Heights, mid-century ranch homes",
  },
  {
    type: "Historic Stucco",
    characteristics: "Lime-based original stucco over masonry or lath",
    waterproofingApproach: "Lime wash or breathable coatings; match original system",
    commonIssues: "Cracking, delamination, incompatible repairs",
    tampaExamples: "Mediterranean Revival homes, Davis Islands",
  },
  {
    type: "Coral Rock/Coquina",
    characteristics: "Porous natural stone, common in older Florida buildings",
    waterproofingApproach: "Consolidants and breathable water repellents",
    commonIssues: "Severe erosion, biological growth, salt damage",
    tampaExamples: "Historic waterfront structures, some Ybor buildings",
  },
];

const waterproofingMethods = [
  {
    method: "Breathable Water Repellents (Silane/Siloxane)",
    description: "Penetrating treatments that repel liquid water while allowing vapor transmission",
    bestFor: "Most historic masonry; maintains breathability critical for old walls",
    lifespan: "5-10 years",
    cost: "$2-5 per SF",
    considerations: "Must test compatibility; some products darken masonry",
  },
  {
    method: "Lime Wash / Mineral Coatings",
    description: "Traditional lime-based coatings that are fully vapor-permeable",
    bestFor: "Historic stucco, soft brick, where original appearance is priority",
    lifespan: "3-7 years",
    cost: "$3-8 per SF",
    considerations: "Historically accurate; requires periodic renewal",
  },
  {
    method: "Injection Damp Proofing",
    description: "Chemical injection to create a barrier against rising damp",
    bestFor: "Rising damp in solid masonry walls",
    lifespan: "20+ years",
    cost: "$50-100 per linear foot",
    considerations: "Invasive; requires drilling; may not be appropriate for all historic buildings",
  },
  {
    method: "Drainage Plane Installation",
    description: "Adding or repairing the drainage cavity behind veneer",
    bestFor: "Brick veneer buildings with cavity drainage failures",
    lifespan: "30+ years",
    cost: "$15-40 per SF (invasive)",
    considerations: "Major intervention; requires removing exterior finish",
  },
  {
    method: "Repointing with Lime Mortar",
    description: "Replacing deteriorated mortar with compatible lime-based mortar",
    bestFor: "Pre-1930s masonry with eroded joints",
    lifespan: "50+ years when done correctly",
    cost: "$10-25 per SF",
    considerations: "Critical to match original mortar; portland cement damages soft brick",
  },
];

const commonMistakes = [
  {
    mistake: "Using Portland Cement Mortar on Historic Brick",
    consequence: "Hard mortar damages soft brick; moisture trapped; spalling and cracking",
    correctApproach: "Use lime-based mortar softer than the masonry units",
  },
  {
    mistake: "Applying Film-Forming Sealers",
    consequence: "Traps moisture inside wall; accelerates deterioration; peeling",
    correctApproach: "Use only breathable, penetrating water repellents",
  },
  {
    mistake: "Pressure Washing Historic Masonry",
    consequence: "Drives water deep into wall; erodes soft mortar and brick",
    correctApproach: "Use gentle cleaning methods; low-pressure rinse only",
  },
  {
    mistake: "Ignoring Interior Moisture Sources",
    consequence: "Exterior treatment fails because moisture comes from inside",
    correctApproach: "Address interior humidity, plumbing leaks, and vapor drive",
  },
  {
    mistake: "Painting Over Moisture Problems",
    consequence: "Paint traps moisture; blisters and peels; underlying damage continues",
    correctApproach: "Solve moisture problem first; use breathable mineral paints if painting",
  },
];

const floridaChallenges = [
  {
    challenge: "High Humidity Year-Round",
    impact: "Constant moisture stress on masonry; condensation on cool surfaces",
    solution: "Maintain interior humidity below 60%; ensure adequate ventilation",
  },
  {
    challenge: "Wind-Driven Rain",
    impact: "Horizontal rain penetrates joints and cracks; hurricane pressure differentials",
    solution: "Quality repointing; breathable water repellent on exposed elevations",
  },
  {
    challenge: "Salt Air (Coastal)",
    impact: "Salt crystallization damages masonry; accelerates corrosion of ties",
    solution: "Regular gentle washing; desalination treatment for severe cases",
  },
  {
    challenge: "Intense UV Exposure",
    impact: "Accelerates coating degradation; thermal cycling stresses mortar joints",
    solution: "UV-stable treatments; consider shading from landscaping",
  },
  {
    challenge: "High Water Table / Flooding",
    impact: "Rising damp; flood damage; salt contamination from floodwater",
    solution: "Below-grade waterproofing; drainage systems; damp proof courses",
  },
];

const inspectionChecklist = [
  {
    item: "Mortar Joint Condition",
    whatToLook: "Erosion depth, cracking, missing mortar, previous repair quality",
    action: "Repoint with lime mortar where erosion exceeds 1/4 inch",
  },
  {
    item: "Efflorescence",
    whatToLook: "White salt deposits on masonry surface",
    action: "Identify and eliminate moisture source; dry brush to remove",
  },
  {
    item: "Spalling / Face Loss",
    whatToLook: "Brick faces flaking off; pieces missing from masonry",
    action: "Determine cause (usually moisture); consider consolidant or replacement",
  },
  {
    item: "Cracks",
    whatToLook: "Structural vs. surface cracks; active vs. dormant",
    action: "Structural cracks require engineer evaluation; surface cracks may need filling",
  },
  {
    item: "Biological Growth",
    whatToLook: "Algae, moss, lichen, plant growth in joints",
    action: "Gentle removal; treat underlying moisture; consider biocide",
  },
  {
    item: "Previous Repairs",
    whatToLook: "Incompatible materials; failed patches; coating buildup",
    action: "May need to remove previous repairs before proper restoration",
  },
];

const faqs = [
  {
    question: "Why can't I just use regular concrete sealer on my historic brick?",
    answer:
      "Historic solid masonry walls rely on being able to 'breathe'—moisture that enters must be able to evaporate out. Film-forming sealers trap moisture inside the wall, which then causes the brick to spall (face layers pop off) when the trapped water freezes, heats, or reacts with salts. Always use breathable, penetrating treatments on historic masonry.",
  },
  {
    question: "My brick home was built in 1920. What mortar should I use for repairs?",
    answer:
      "Pre-1930s homes typically have lime mortar, which is softer than the brick. You must use lime-based mortar (Type O or softer) for repairs. Using modern portland cement mortar will be harder than the brick, causing moisture to be trapped in the brick rather than escaping through the joints. This leads to brick spalling and accelerated deterioration.",
  },
  {
    question: "How do I know if I have rising damp vs. rain penetration?",
    answer:
      "Rising damp creates a 'tide mark' of damage that's consistent around the building's perimeter, typically up to about 3 feet high. It's worse in winter when evaporation is slower. Rain penetration shows up on specific walls (usually weather-facing), follows irregular patterns, and appears after rain events. A moisture survey can definitively diagnose the source.",
  },
  {
    question: "Can I power wash my historic brick to clean it?",
    answer:
      "Pressure washing is generally not recommended for historic masonry. High pressure erodes soft mortar and can drive water deep into the wall. Instead, use gentle methods: soft brushing, low-pressure water rinse, or specialized masonry cleaning chemicals designed for historic materials. The gentlest effective method is always preferred.",
  },
  {
    question: "How often should historic masonry waterproofing be renewed?",
    answer:
      "Penetrating water repellents typically last 5-10 years on Florida's exposed masonry, with south and west elevations degrading faster. Lime washes need renewal every 3-7 years. Repointing, when done correctly with lime mortar, can last 50+ years. Annual inspection helps catch problems early before they require major intervention.",
  },
  {
    question: "Should I waterproof the inside or outside of my historic foundation?",
    answer:
      "For historic foundations, exterior waterproofing is preferred when accessible—it stops water before it enters the wall. However, excavation may not be feasible or appropriate for some historic properties. Interior approaches like drainage systems and breathable coatings can manage symptoms, but addressing exterior grading, drainage, and below-grade moisture is the long-term solution.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Waterproofing Historic Masonry", href: "/waterproofing-historic-masonry/" },
];


const internalLinks = [
  { href: "/services/historic-restoration/", label: "Historic Restoration Services" },
  { href: "/services/historic-restoration/shpo-compliance/", label: "SHPO Compliance" },
  { href: "/services/historic-restoration/historic-tax-credits/", label: "Historic Tax Credits" },
  { href: "/services/historic-restoration/material-sourcing/", label: "Historic Material Sourcing" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function WaterproofingHistoricMasonryPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Historic Masonry Waterproofing" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Historic Masonry Waterproofing"
        serviceDescription="Specialized waterproofing and moisture control for historic brick and masonry homes in Tampa Bay. Preserve your home's character while protecting against Florida's moisture challenges."
        city="Tampa"
        minPrice="25000"
      />
      <ArticleSchema
        headline="Waterproofing Historic Masonry | Tampa Bay Historic Homes | FCS"
        description="Specialized waterproofing techniques for historic brick and masonry homes in Tampa Bay. Preserve character while protecting against Florida"
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/waterproofing-historic-masonry/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Residential", href: "/residential/" },
          { name: "Historic Preservation", href: "/residential/historic-preservation/" },
          { name: "Masonry Waterproofing", href: "/waterproofing-historic-masonry/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/historic-preservation/historic-preservation-display.webp"
            alt="Historic building restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <BackToHub
              silo="residential"
              customHubTitle="Historic Preservation"
              customHubHref="/residential/historic-preservation/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Waterproofing Historic Masonry
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Protecting Tampa Bay&apos;s historic brick and masonry homes from moisture
              damage while preserving their character and architectural integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule Assessment
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
        </div>
      </section>

      {/* Masonry Types */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Historic Masonry Types in Tampa Bay
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Different masonry types require different waterproofing approaches.
            Understanding your home&apos;s construction is the first step.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {masonryTypes.map((type) => (
              <div key={type.type} className="card p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">
                  {type.type}
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-500 font-medium">Characteristics:</span>
                    <p className="text-gray-700">{type.characteristics}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 font-medium">Waterproofing Approach:</span>
                    <p className="text-brand-green-dark font-medium">{type.waterproofingApproach}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 font-medium">Common Issues:</span>
                    <p className="text-gray-700">{type.commonIssues}</p>
                  </div>
                  <div className="bg-brand-green-light/30 rounded p-3 mt-2">
                    <span className="text-xs text-brand-green-dark font-semibold">Tampa Examples: </span>
                    <span className="text-xs text-gray-600">{type.tampaExamples}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waterproofing Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Waterproofing Methods for Historic Masonry
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Appropriate treatments that protect against moisture while maintaining
            historic integrity.
          </p>
          <div className="space-y-6">
            {waterproofingMethods.map((method) => (
              <div key={method.method} className="bg-white rounded-xl p-6 shadow-md">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                      {method.method}
                    </h3>
                    <p className="text-gray-600 mb-3">{method.description}</p>
                    <p className="text-sm"><strong>Best For:</strong> {method.bestFor}</p>
                  </div>
                  <div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Lifespan:</span>
                        <span className="font-medium">{method.lifespan}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Cost:</span>
                        <span className="font-medium">{method.cost}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3">
                    <span className="text-xs text-yellow-700 font-semibold block mb-1">
                      Considerations:
                    </span>
                    <p className="text-xs text-yellow-800">{method.considerations}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Common Mistakes to Avoid
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Well-intentioned repairs can cause more harm than good. Here&apos;s what
            NOT to do with historic masonry.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonMistakes.map((item) => (
              <div key={item.mistake} className="card p-6">
                <div className="flex items-start gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <h3 className="font-bold text-red-600">{item.mistake}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.consequence}</p>
                <div className="bg-brand-green-light/30 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-brand-green-dark font-semibold block">
                        Correct Approach:
                      </span>
                      <p className="text-sm text-gray-700">{item.correctApproach}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Florida Challenges */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Florida-Specific Challenges
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Tampa Bay&apos;s climate creates unique challenges for historic masonry
            that require specialized solutions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {floridaChallenges.map((item) => (
              <div key={item.challenge} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <ThermometerSun className="w-6 h-6 text-brand-gold" />
                  <h3 className="font-bold text-brand-green-dark">{item.challenge}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.impact}</p>
                <div className="border-t pt-3">
                  <span className="text-xs text-gray-500 block mb-1">Solution:</span>
                  <p className="text-sm text-brand-green-dark">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Checklist */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Masonry Condition Assessment
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            What to look for when evaluating your historic masonry&apos;s condition.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-brand-green text-white">
                    <th className="px-4 py-3 text-left font-semibold">Inspection Item</th>
                    <th className="px-4 py-3 text-left font-semibold">What to Look For</th>
                    <th className="px-4 py-3 text-left font-semibold">Recommended Action</th>
                  </tr>
                </thead>
                <tbody>
                  {inspectionChecklist.map((item, index) => (
                    <tr
                      key={item.item}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="px-4 py-3 font-semibold text-brand-green-dark">
                        {item.item}
                      </td>
                      <td className="px-4 py-3 text-gray-600 text-sm">{item.whatToLook}</td>
                      <td className="px-4 py-3 text-gray-700 text-sm">{item.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
            Related Historic Preservation Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/hyde-park-renovation-guide/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Hyde Park Renovation Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Navigating historic district requirements in South Tampa.
              </p>
            </Link>
            <Link
              href="/residential/historic-preservation/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Historic Preservation Services
              </h3>
              <p className="text-gray-600 text-sm">
                Comprehensive historic home restoration in Tampa Bay.
              </p>
            </Link>
            <Link
              href="/exterior-waterproofing/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Exterior Waterproofing
              </h3>
              <p className="text-gray-600 text-sm">
                Building envelope protection for all construction types.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Protect Your Historic Home from Moisture Damage
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            FCS understands the unique challenges of waterproofing historic masonry
            in Florida&apos;s climate. We use appropriate methods that protect your
            home while preserving its historic character.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Assessment
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