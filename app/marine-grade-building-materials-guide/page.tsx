import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  AlertTriangle,
  Home,
  Phone,
  HelpCircle,
  Droplets,
  Shield,
  Wind,
  Sun,
  Wrench,
  Clock,
  DollarSign,
  Anchor,
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
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Marine-Grade Building Materials Tampa Bay | FCS",
  description:
    "Complete guide to marine-grade building materials for waterfront homes in Tampa Bay. Salt-resistant hardware, coastal-rated windows, and materials that withstand Florida's marine environment.",
  keywords:
    "marine grade building materials Tampa, waterfront construction materials Florida, salt resistant home materials, coastal home building Tampa Bay, marine grade hardware",
};

const materialCategories = [
  {
    category: "Fasteners & Hardware",
    importance: "Critical - first point of failure in coastal environments",
    standardMaterial: "Galvanized steel",
    marineGrade: "316 stainless steel, silicon bronze, or hot-dip galvanized minimum",
    lifespan: {
      standard: "2-5 years before visible corrosion",
      marine: "15-25+ years",
    },
    costPremium: "3-5x standard cost",
    notes: "Single most common failure point; never mix metals",
  },
  {
    category: "Structural Connectors",
    importance: "Life safety - connects structural elements",
    standardMaterial: "G90 galvanized steel",
    marineGrade: "G185 galvanized minimum, stainless steel preferred",
    lifespan: {
      standard: "10-15 years",
      marine: "25-50+ years",
    },
    costPremium: "2-4x standard cost",
    notes: "Simpson Strong-Tie 'Stainless Steel' line; verify with engineer",
  },
  {
    category: "Roofing Materials",
    importance: "Envelope protection from salt, wind, and UV",
    standardMaterial: "Asphalt shingles",
    marineGrade: "Metal (Galvalume or aluminum), concrete tile, or synthetic slate",
    lifespan: {
      standard: "15-20 years coastal",
      marine: "30-50+ years",
    },
    costPremium: "2-3x standard cost",
    notes: "Asphalt degrades rapidly in salt air; metal preferred",
  },
  {
    category: "Exterior Trim & Siding",
    importance: "Aesthetics and weather barrier",
    standardMaterial: "Wood, fiber cement",
    marineGrade: "PVC cellular, aluminum, fiber cement with marine finish",
    lifespan: {
      standard: "5-10 years before deterioration",
      marine: "20-30+ years",
    },
    costPremium: "1.5-2.5x standard cost",
    notes: "No exposed wood within 1,500 ft of saltwater",
  },
  {
    category: "Windows & Doors",
    importance: "Envelope protection and durability",
    standardMaterial: "Vinyl or painted aluminum",
    marineGrade: "Marine-grade aluminum (anodized/powder coated) or fiberglass",
    lifespan: {
      standard: "10-15 years before hardware failure",
      marine: "25-40+ years",
    },
    costPremium: "1.5-2x standard cost",
    notes: "Hardware is the weak point; specify 316SS hardware",
  },
  {
    category: "Exterior Paint & Coatings",
    importance: "Protection and maintenance frequency",
    standardMaterial: "Standard acrylic latex",
    marineGrade: "Marine epoxy primers, salt-resistant topcoats",
    lifespan: {
      standard: "3-5 years coastal",
      marine: "7-12 years",
    },
    costPremium: "1.5-2x material cost",
    notes: "Proper surface prep is more important than paint brand",
  },
];

const hardwareGrades = [
  {
    grade: "304 Stainless Steel",
    composition: "18% chromium, 8% nickel",
    coastalUse: "Acceptable for low-exposure areas; 500+ ft from water",
    corrosionResistance: "Good in freshwater; moderate in saltwater",
    applications: "Interior hardware, low-splash zones, covered areas",
    limitations: "Will show tea staining near saltwater; pitting possible",
  },
  {
    grade: "316 Stainless Steel",
    composition: "16% chromium, 10% nickel, 2% molybdenum",
    coastalUse: "Required for waterfront; best common option",
    corrosionResistance: "Excellent in saltwater environments",
    applications: "Exterior fasteners, railing hardware, deck screws",
    limitations: "More expensive; can still pit in severe exposure",
  },
  {
    grade: "Silicon Bronze",
    composition: "Copper alloy with silicon and zinc",
    coastalUse: "Premium marine applications",
    corrosionResistance: "Superior in continuous saltwater immersion",
    applications: "Boat building, dock hardware, below-grade fasteners",
    limitations: "Very expensive; limited availability; specialized use",
  },
  {
    grade: "Hot-Dip Galvanized",
    composition: "Steel with thick zinc coating",
    coastalUse: "Acceptable for structural, concealed applications",
    corrosionResistance: "Good until coating compromised",
    applications: "Structural connectors, concealed framing, temporary items",
    limitations: "Coating can chip; not for visible applications",
  },
  {
    grade: "Electroplated/Cold Galvanized",
    composition: "Steel with thin zinc plating",
    coastalUse: "NOT ACCEPTABLE for coastal use",
    corrosionResistance: "Poor - fails quickly in salt air",
    applications: "Inland use only",
    limitations: "Common failure point; often used by mistake",
  },
];

const windowGuidelines = [
  {
    feature: "Frame Material",
    residential: "Vinyl acceptable inland",
    waterfront: "Aluminum with thermal break or fiberglass",
    why: "Vinyl can warp in heat; fiberglass most stable; aluminum if properly coated",
  },
  {
    feature: "Frame Finish",
    residential: "Factory paint or powder coat",
    waterfront: "Anodized aluminum or AAMA 2605 70% PVDF coating",
    why: "AAMA 2604 insufficient for direct coastal; anodizing is best",
  },
  {
    feature: "Hardware",
    residential: "Standard manufacturer hardware",
    waterfront: "316 stainless steel upgrade required",
    why: "Hardware is the first failure point; standard hardware corrodes in 3-5 years",
  },
  {
    feature: "Screens",
    residential: "Aluminum or fiberglass mesh",
    waterfront: "316 stainless steel mesh",
    why: "Standard screens pit and fail; SS screens last 20+ years",
  },
  {
    feature: "Weatherstripping",
    residential: "Standard EPDM or silicone",
    waterfront: "Marine-grade EPDM with UV stabilizers",
    why: "Sun and salt degrade standard weatherstripping faster",
  },
];

const deckingOptions = [
  {
    material: "Pressure-Treated Pine",
    coastalRating: "Not recommended",
    lifespan: "3-7 years coastal",
    maintenance: "Annual sealing required; still deteriorates",
    cost: "$3-5/SF material",
    notes: "Fastener corrosion and wood rot accelerated by salt",
  },
  {
    material: "Ipe (Brazilian Hardwood)",
    coastalRating: "Excellent",
    lifespan: "40-75 years",
    maintenance: "Annual oiling for color; structurally sound without",
    cost: "$12-20/SF material",
    notes: "Natural oils resist rot; requires pre-drilling; heavy",
  },
  {
    material: "Cumaru (Brazilian Teak)",
    coastalRating: "Excellent",
    lifespan: "25-50 years",
    maintenance: "Annual oiling; weathers to silver without",
    cost: "$8-12/SF material",
    notes: "Similar to ipe at lower cost; slightly less dense",
  },
  {
    material: "Composite (Capped)",
    coastalRating: "Very Good",
    lifespan: "25-30 years",
    maintenance: "Periodic cleaning only",
    cost: "$8-15/SF material",
    notes: "Must use capped product; uncapped absorbs salt; hidden fasteners",
  },
  {
    material: "PVC Cellular",
    coastalRating: "Excellent",
    lifespan: "25-50 years",
    maintenance: "Minimal cleaning",
    cost: "$10-18/SF material",
    notes: "Zero moisture absorption; can feel hot in sun",
  },
  {
    material: "Aluminum Decking",
    coastalRating: "Excellent (if coated)",
    lifespan: "40-50+ years",
    maintenance: "Almost none",
    cost: "$15-25/SF material",
    notes: "Best for covered areas; can be noisy; cool underfoot",
  },
];

const paintSystems = [
  {
    component: "Surface Preparation",
    standard: "Power wash, scrape loose paint",
    marine: "Power wash with mildewcide, full scrape to sound substrate, sand",
    importance: "Prep determines 80% of paint longevity",
  },
  {
    component: "Primer",
    standard: "Acrylic latex primer",
    marine: "Epoxy or urethane-modified primer with rust inhibitor",
    importance: "Creates adhesion and corrosion barrier",
  },
  {
    component: "Topcoat",
    standard: "Acrylic latex (2 coats)",
    marine: "100% acrylic with salt-fog resistance rating (2-3 coats)",
    importance: "UV and moisture protection",
  },
  {
    component: "Clear Coat (optional)",
    standard: "Not typically applied",
    marine: "Marine-grade clear topcoat on high-exposure areas",
    importance: "Additional UV and abrasion resistance",
  },
];

const faqs = [
  {
    question: "How close to saltwater do I need marine-grade materials?",
    answer:
      "The Florida Building Code considers properties within 3,000 feet of saltwater to be in a 'corrosive environment' requiring enhanced corrosion protection. However, the most severe exposure occurs within 1,500 feet, and properties directly on the water experience the harshest conditions. For Tampa Bay waterfront homes, we recommend full marine-grade specifications for all exposed components. Properties 1,500-3,000 feet back can often use hybrid approaches with marine-grade in high-exposure areas.",
  },
  {
    question: "What is the most common failure point in coastal homes?",
    answer:
      "Fasteners and hardware are by far the most common failure point in waterfront construction. Standard galvanized screws and hardware begin corroding within 2-3 years of coastal exposure, leading to rust staining, structural loosening, and eventual failure. The premium for 316 stainless steel fasteners is typically only 3-5x the cost of standard galvanized, but they last 5-10x longer. This is the single most important marine-grade upgrade for any waterfront project.",
  },
  {
    question: "Can I use standard windows with stainless hardware upgrades?",
    answer:
      "This approach has limited success. While upgrading to 316SS hardware is essential, standard vinyl or aluminum windows often have other components that fail in coastal environments - internal springs, weatherstripping, and frame coatings. For waterfront homes, we recommend purpose-built coastal windows from manufacturers like PGT (Winguard), CGI, or Impact Windows of Florida. These systems are engineered as complete marine-grade assemblies, not just upgraded standard products.",
  },
  {
    question: "Is fiber cement siding good for waterfront homes?",
    answer:
      "Fiber cement (James Hardie, etc.) can perform well in coastal environments with proper installation and finishing. The key is using stainless steel or polymer-coated fasteners (never standard galvanized), caulking all cut edges with marine-grade sealant, and applying marine-grade primer and paint. The material itself is highly moisture and rot resistant. However, PVC trim boards are generally preferred for the most salt-exposed applications like direct waterfront fascia and soffits.",
  },
  {
    question: "How do I protect HVAC equipment in a waterfront home?",
    answer:
      "HVAC equipment suffers greatly in salt air. Specify units with copper or aluminum coils (copper more durable), marine-grade coatings on fins and housings, and elevated installation to reduce splash exposure. Rinse condenser coils monthly during summer with fresh water. Consider units specifically marketed for coastal use (Carrier Coastal, Trane XR series, Lennox Merit). Budget for 15-year rather than 20-year replacement cycles. A good maintenance contract with coil cleaning is essential.",
  },
  {
    question: "What roofing is best for a waterfront home in Tampa Bay?",
    answer:
      "For Tampa Bay waterfront homes, metal roofing (standing seam aluminum or Galvalume steel) offers the best combination of salt resistance, wind resistance, and longevity. Concrete or clay tile is also excellent but heavier and more expensive to install. Asphalt shingles are not recommended for direct waterfront - they degrade rapidly in salt air and typically last only 15-18 years versus 25+ inland. If budget requires shingles, use algae-resistant products and plan for more frequent replacement.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Marine Grade Building Materials Guide", href: "/marine-grade-building-materials-guide/" },
];


const internalLinks = [
  { href: "/services/", label: "Our Construction Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/residential/", label: "Residential Construction" },
  { href: "/about/", label: "About Florida Construction Specialists" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const relatedArticles = [
  {
    "title": "Mastering Commercial Construction Design in Florida",
    "href": "/mastering-commercial-construction-design-in-florida/",
    "description": "Learn the ins and outs of architectural design and commercial building design with our comprehensive guide for Florida projects."
  },
  {
    "title": "Benefits of Design-Build for Commercial Projects",
    "href": "/benefits-of-design-build-construction-for-commercial-project/",
    "description": "Discover how design-build delivery streamlines commercial construction with single-source accountability."
  },
  {
    "title": "Commercial Construction Budgeting Tips",
    "href": "/commercial-construction-budgeting-tips-for-florida-specialists/",
    "description": "Expert strategies for developing and managing budgets for commercial construction in Florida."
  },
  {
    "title": "Tips for Commercial Renovation in Florida",
    "href": "/tips-for-commercial-renovation-in-florida/",
    "description": "Key considerations for successful commercial renovation projects in the Sunshine State."
  }
];

export default function MarineGradeBuildingMaterialsGuidePage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Marine-Grade Building Materials" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Waterfront Home Construction"
        serviceDescription="Expert waterfront home construction using marine-grade building materials throughout Tampa Bay. Salt-resistant hardware, coastal-rated windows, and materials built to withstand Florida's marine environment."
        city="Tampa"
        minPrice="500000"
      />

      
      <ArticleSchema
        headline="Marine-Grade Building Materials Guide | Waterfront Homes Tampa Bay | FCS"
        description="Complete guide to marine-grade building materials for waterfront homes in Tampa Bay. Salt-resistant hardware, coastal-rated windows, and materials that withstand Florida"
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/marine-grade-building-materials-guide/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Residential", href: "/residential/" },
          { name: "Waterfront Construction", href: "/residential/waterfront-construction/" },
          { name: "Marine-Grade Materials", href: "/marine-grade-building-materials-guide/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Construction services in Tampa Bay"
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
              customHubTitle="Waterfront Construction"
              customHubHref="/residential/waterfront-construction/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Marine-Grade Building Materials Guide
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Building to last on Tampa Bay&apos;s waterfront. Understanding which
              materials withstand salt air, humidity, and Florida&apos;s demanding
              coastal environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta-gold">
                Discuss Your Waterfront Project
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

      {/* Alert */}
      <section className="py-4 bg-blue-50 border-y border-blue-200">
        <div className="container-custom">
          <div className="flex items-center gap-3 text-blue-800">
            <Anchor className="w-6 h-6 flex-shrink-0" />
            <p className="font-medium">
              <strong>Florida Building Code Requirement:</strong> Properties within 3,000
              feet of saltwater require corrosion-resistant fasteners and hardware per
              FBC Section R317.3.
            </p>
          </div>
        </div>
      </section>

      {/* Material Categories Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Material Categories: Standard vs Marine-Grade
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Understanding the difference between standard and marine-grade materials
            is essential for waterfront construction success.
          </p>
          <div className="space-y-6">
            {materialCategories.map((item) => (
              <div key={item.category} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark">
                      {item.category}
                    </h3>
                    <p className="text-sm text-brand-gold-dark font-medium">
                      {item.importance}
                    </p>
                  </div>
                  <span className="bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-full">
                    {item.costPremium}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-red-50 rounded-lg p-4">
                    <span className="text-xs text-red-600 font-semibold block mb-1">
                      Standard Material
                    </span>
                    <p className="text-gray-700">{item.standardMaterial}</p>
                    <p className="text-sm text-red-600 mt-2">
                      Coastal lifespan: {item.lifespan.standard}
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <span className="text-xs text-green-600 font-semibold block mb-1">
                      Marine-Grade Specification
                    </span>
                    <p className="text-gray-700">{item.marineGrade}</p>
                    <p className="text-sm text-green-600 mt-2">
                      Coastal lifespan: {item.lifespan.marine}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  <strong>Note:</strong> {item.notes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Grades */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Understanding Hardware Grades
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Not all &quot;stainless steel&quot; is created equal. Understanding the grades
            is essential for specifying waterfront hardware.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="px-4 py-3 text-left font-semibold">Grade</th>
                  <th className="px-4 py-3 text-left font-semibold">Composition</th>
                  <th className="px-4 py-3 text-center font-semibold">Coastal Use</th>
                  <th className="px-4 py-3 text-left font-semibold">Applications</th>
                </tr>
              </thead>
              <tbody>
                {hardwareGrades.map((grade, index) => (
                  <tr
                    key={grade.grade}
                    className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} ${grade.coastalUse === "NOT ACCEPTABLE for coastal use" ? "bg-red-50" : ""}`}
                  >
                    <td className="px-4 py-3">
                      <span className="font-semibold text-brand-green-dark block">
                        {grade.grade}
                      </span>
                      <span className="text-xs text-gray-500">{grade.composition}</span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">
                      {grade.corrosionResistance}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`text-sm font-medium ${
                          grade.coastalUse.includes("NOT")
                            ? "text-red-600"
                            : grade.coastalUse.includes("Required") || grade.coastalUse.includes("Premium")
                              ? "text-green-600"
                              : "text-yellow-600"
                        }`}
                      >
                        {grade.coastalUse}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">
                      {grade.applications}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 bg-yellow-50 rounded-xl p-4 border border-yellow-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-yellow-800 text-sm">
                <strong>Never mix metals:</strong> Galvanic corrosion occurs when
                dissimilar metals contact each other in the presence of an electrolyte
                (salt water). Always use the same metal grade for fasteners and the
                materials they connect, or use isolation materials between them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Window Guidelines */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Window Specifications for Waterfront
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Windows are a major investment in any home. For waterfront properties,
            proper specification prevents premature failure.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-gold text-white">
                  <th className="px-4 py-3 text-left font-semibold">Feature</th>
                  <th className="px-4 py-3 text-left font-semibold">Standard Residential</th>
                  <th className="px-4 py-3 text-left font-semibold">Waterfront Specification</th>
                  <th className="px-4 py-3 text-left font-semibold">Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                {windowGuidelines.map((item, index) => (
                  <tr
                    key={item.feature}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-semibold text-brand-green-dark">
                      {item.feature}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{item.residential}</td>
                    <td className="px-4 py-3 text-gray-700 font-medium">{item.waterfront}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{item.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Decking Options */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Decking Material Comparison
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Deck and dock surfaces take the brunt of coastal exposure. Choose materials
            rated for the environment.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deckingOptions.map((deck) => (
              <div
                key={deck.material}
                className={`bg-white rounded-xl p-6 shadow-md ${
                  deck.coastalRating === "Not recommended"
                    ? "border-2 border-red-200"
                    : deck.coastalRating === "Excellent"
                      ? "border-2 border-green-200"
                      : ""
                }`}
              >
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  {deck.material}
                </h3>
                <span
                  className={`inline-block text-xs font-bold px-2 py-1 rounded mb-3 ${
                    deck.coastalRating === "Not recommended"
                      ? "bg-red-100 text-red-700"
                      : deck.coastalRating === "Excellent"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {deck.coastalRating}
                </span>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Lifespan:</span>
                    <span className="font-medium">{deck.lifespan}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cost:</span>
                    <span className="font-medium">{deck.cost}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Maintenance:</span>
                    <span className="text-gray-700">{deck.maintenance}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3 pt-3 border-t">
                  {deck.notes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paint Systems */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Coastal Paint Systems
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Paint longevity depends more on system selection and preparation than
            brand. Here&apos;s what works for waterfront homes.
          </p>
          <div className="max-w-3xl mx-auto">
            {paintSystems.map((system, index) => (
              <div
                key={system.component}
                className="flex gap-6 mb-6 last:mb-0 bg-gray-50 rounded-xl p-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                    {system.component}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs text-gray-500 block">Standard Approach</span>
                      <p className="text-gray-700">{system.standard}</p>
                    </div>
                    <div className="bg-brand-gold/10 rounded-lg p-3">
                      <span className="text-xs text-brand-gold-dark block">Marine Specification</span>
                      <p className="text-gray-800 font-medium">{system.marine}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 italic">
                    {system.importance}
                  </p>
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
            Related Waterfront Construction Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/waterfront-custom-homes-in-tampa/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-gold">
                Waterfront Custom Homes
              </h3>
              <p className="text-gray-600 text-sm">
                Complete waterfront home construction services in Tampa Bay.
              </p>
            </Link>
            <Link
              href="/hurricane-resistant-luxury-home-design/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-gold">
                Hurricane-Resistant Design
              </h3>
              <p className="text-gray-600 text-sm">
                Building homes that withstand Florida storms.
              </p>
            </Link>
            <Link
              href="/flood-zone-ve-vs-ae-guide/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-gold">
                Flood Zone Requirements
              </h3>
              <p className="text-gray-600 text-sm">
                Understanding VE vs AE zones for waterfront construction.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-gold">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Building on Tampa Bay&apos;s Waterfront?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists understands what it takes to build
            homes that last in our challenging coastal environment. From
            specification through construction, we ensure every component is
            selected for long-term performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Start Your Waterfront Project
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
      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      
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