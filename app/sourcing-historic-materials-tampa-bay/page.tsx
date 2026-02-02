import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  CheckCircle,
  AlertTriangle,
  Hammer,
  ArrowRight,
  Phone,
  HelpCircle,
  Building,
  TreePine,
  Recycle,
  DollarSign,
  MapPin,
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
  title: "Sourcing Historic Materials Tampa Bay | Period-Accurate Restoration | FCS",
  description:
    "Find authentic historic building materials for Tampa Bay restoration projects. Salvage yards, specialty suppliers, and custom fabrication for period-accurate renovations.",
  keywords:
    "historic building materials Tampa, architectural salvage Florida, period hardware Tampa Bay, reclaimed wood Florida, historic window restoration, antique building supplies",
};

const materialCategories = [
  {
    category: "Architectural Millwork",
    items: "Crown molding, baseboards, door/window casings, wainscoting, columns",
    sources: "Salvage yards, custom millwork shops, architectural antique dealers",
    challenge: "Matching complex profiles; species identification",
    solution: "Custom knife grinding; profile matching services; on-site milling",
  },
  {
    category: "Windows & Glass",
    items: "Wood sash windows, wavy glass, leaded glass, stained glass",
    sources: "Specialty restoration shops, salvage, custom fabrication",
    challenge: "Finding exact muntins profiles; matching historic glass character",
    solution: "Restoration rather than replacement; custom sash fabrication",
  },
  {
    category: "Hardware",
    items: "Door knobs, hinges, locks, window hardware, cabinet pulls",
    sources: "Architectural antique dealers, online specialists, reproduction suppliers",
    challenge: "Matching patina, style, and function",
    solution: "Mix salvage and quality reproductions; professional restoration",
  },
  {
    category: "Masonry & Tile",
    items: "Historic brick, terra cotta, encaustic tile, marble, granite",
    sources: "Salvage from demolitions, specialty tile suppliers, custom fabrication",
    challenge: "Matching color, size, and texture; structural compatibility",
    solution: "Mortar analysis; custom tile reproduction; careful color matching",
  },
  {
    category: "Roofing",
    items: "Clay tile, slate, copper, historic shingle profiles",
    sources: "Salvage, specialty roofing suppliers, Cuban tile sources",
    challenge: "Matching existing tile color and profile; finding adequate quantity",
    solution: "Reserve tiles from other roof areas; blend new with salvage",
  },
  {
    category: "Lumber & Flooring",
    items: "Heart pine, cypress, oak flooring, timber beams",
    sources: "Reclaimed lumber dealers, specialty mills, salvage",
    challenge: "Finding adequate quantity; matching species and grain",
    solution: "Reclaimed lumber from other regions; careful grading and matching",
  },
];

const tampaBaySources = [
  {
    type: "Architectural Salvage Yards",
    description: "Salvaged materials from local demolitions and renovations",
    bestFor: "Doors, windows, hardware, fixtures, millwork",
    tips: "Build relationships; visit regularly; have measurements ready",
    priceRange: "$$-$$$",
  },
  {
    type: "Specialty Antique Dealers",
    description: "Curated architectural antiques, often restored",
    bestFor: "High-quality hardware, lighting, fixtures",
    tips: "Higher prices but often better condition and provenance",
    priceRange: "$$$-$$$$",
  },
  {
    type: "Custom Millwork Shops",
    description: "Custom fabrication matching historic profiles",
    bestFor: "Moldings, casings, specialty woodwork",
    tips: "Provide samples or detailed drawings; expect lead time",
    priceRange: "$$$-$$$$",
  },
  {
    type: "Reclaimed Lumber Dealers",
    description: "Salvaged and remilled historic lumber",
    bestFor: "Heart pine flooring, cypress, timber beams",
    tips: "Verify species; check for lead paint; plan for waste factor",
    priceRange: "$$-$$$",
  },
  {
    type: "Window Restoration Shops",
    description: "Restore existing or fabricate new period windows",
    bestFor: "Wood sash windows, storm windows, weatherstripping",
    tips: "Restoration often cheaper than custom new; maintain character",
    priceRange: "$$-$$$",
  },
  {
    type: "Online Marketplaces",
    description: "eBay, Etsy, specialty websites for hardware and fixtures",
    bestFor: "Specific hardware items, lighting, small components",
    tips: "Verify dimensions; check return policies; allow shipping time",
    priceRange: "$-$$$$",
  },
];

const floridaSpecificMaterials = [
  {
    material: "Cuban Tile (Roof)",
    description: "Barrel tiles from Cuba; distinctive red-orange color",
    significance: "Defines Tampa/Ybor City historic character",
    sourcing: "Salvage is best; some reproductions available from Spain/Mexico",
    challenges: "Limited supply; color matching; structural weight",
  },
  {
    material: "Dade County Pine",
    description: "Dense, rot-resistant heart pine from South Florida",
    significance: "Used in many early Tampa structures",
    sourcing: "Reclaimed from demolitions; limited new supply",
    challenges: "Extremely hard; requires carbide tooling; expensive",
  },
  {
    material: "Tabby / Coquina",
    description: "Shell-based concrete; coquina limestone",
    significance: "Early Florida construction; found in older structures",
    sourcing: "Custom mixing for tabby; coquina from specific quarries",
    challenges: "Matching historic formulas; proper curing; limited expertise",
  },
  {
    material: "Pecky Cypress",
    description: "Cypress with distinctive pocket holes from fungus",
    significance: "Classic Florida interior paneling and exterior",
    sourcing: "Salvage; specialty lumber dealers; new growth available",
    challenges: "Grading for structural use; matching pocket density",
  },
  {
    material: "Mediterranean Tile",
    description: "Decorative tiles from Spain, Italy, Cuba",
    significance: "Common in Tampa's Mediterranean Revival buildings",
    sourcing: "Salvage, specialty tile dealers, custom reproduction",
    challenges: "Matching patterns; finding quantity; fragility",
  },
];

const qualityConsiderations = [
  {
    factor: "Authenticity vs. Reproduction",
    guidance: "Salvage preferred for visible/significant elements; quality reproductions acceptable for less visible areas",
    taxCredit: "Either can work if compatible with historic character; document choices",
  },
  {
    factor: "Condition Assessment",
    guidance: "Inspect salvage carefully for hidden damage, lead paint, structural integrity",
    taxCredit: "Damaged materials may still work if properly restored",
  },
  {
    factor: "Quantity Planning",
    guidance: "Order 15-25% extra for salvage; some pieces won't be usable",
    taxCredit: "Document salvage sources; keep records for Part 3 application",
  },
  {
    factor: "Species Verification",
    guidance: "Confirm wood species before purchase; affects durability and finish",
    taxCredit: "Using wrong species can trigger Standards issues",
  },
  {
    factor: "Lead Paint",
    guidance: "Assume pre-1978 materials contain lead; plan for safe handling",
    taxCredit: "Lead abatement costs can be included in QRE",
  },
];

const costStrategies = [
  {
    strategy: "Prioritize Visible Areas",
    description: "Use authentic materials where they matter most; reproductions elsewhere",
    savings: "Can reduce materials cost 30-40%",
  },
  {
    strategy: "Restore Before Replace",
    description: "Repair existing windows, hardware, millwork rather than replacing",
    savings: "Often 50% less than new materials; better for tax credits",
  },
  {
    strategy: "Regional Sourcing",
    description: "Look beyond Tampa Bay to other Florida markets, Southeast salvage",
    savings: "Shipping costs less than local scarcity premiums",
  },
  {
    strategy: "Demolition Relationships",
    description: "Connect with demolition contractors for early access to materials",
    savings: "Best prices; first pick of quality materials",
  },
  {
    strategy: "Combination Approach",
    description: "Mix new reproduction with salvage accents for authentic look",
    savings: "Balanced budget while maintaining character",
  },
];

const faqs = [
  {
    question: "Where can I find historic building materials in Tampa Bay?",
    answer:
      "Tampa Bay has several sources for historic materials: architectural salvage yards carry doors, windows, hardware, and fixtures from local demolitions; specialty antique dealers offer curated, often restored pieces; custom millwork shops can match any historic profile; reclaimed lumber dealers stock heart pine, cypress, and other historic species; and window restoration shops repair or replicate period windows. Beyond local sources, the Southeast has extensive salvage networks, and online marketplaces offer specific items. Building relationships with demolition contractors provides early access to quality materials. We maintain a network of trusted suppliers for our restoration projects.",
  },
  {
    question: "Are reproduction materials acceptable for historic tax credit projects?",
    answer:
      "Yes, quality reproductions are generally acceptable under the Secretary of the Interior's Standards, which focus on preserving historic character rather than mandating original materials. The key is that new materials must be compatible in design, color, texture, and other visual qualities. For tax credit projects, document why original materials couldn't be repaired or salvaged, and demonstrate that reproductions match the historic character. SHPO reviewers understand that not everything can be salvage—they want to see thoughtful choices that respect the building's period and style. Mix salvage and reproduction strategically for best results.",
  },
  {
    question: "How much extra should I budget for historic materials?",
    answer:
      "Historic materials typically cost 1.5-3x more than standard modern equivalents, depending on rarity and condition. Budget 15-25% waste factor for salvage materials—not all pieces will be usable. Windows and millwork are usually the biggest cost premiums. Hardware can range from affordable reproduction ($20-50 per piece) to expensive antique ($200-1,000+ per piece). Reclaimed flooring runs $8-15/SF versus $3-6/SF for new. For a complete historic renovation, materials premiums often add 20-40% to the finish materials budget. However, tax credits (40% federal + state combined) can more than offset the premium.",
  },
  {
    question: "Can I use modern materials that look historic?",
    answer:
      "Sometimes, with care. Vinyl windows, fiber cement siding, and similar modern substitutes are generally not appropriate for tax credit projects or where visibility matters. However, modern materials may be acceptable in non-visible locations, for components that were never exposed (like hidden structural elements), or where the original material is no longer available or practical. The key question is: will it look authentic and meet the Standards? Composite materials that accurately replicate historic appearance are increasingly accepted. Always discuss material substitutions with SHPO before proceeding on tax credit projects.",
  },
  {
    question: "How do I match existing historic materials?",
    answer:
      "Matching requires careful analysis and sourcing: for millwork, create a template or have profiles drawn, then work with a custom mill shop; for masonry, conduct mortar analysis and source matching brick (salvage from the same era works best); for tile, work with specialty dealers who can match color and size; for flooring, use the same species and similar grain pattern. Color matching is challenging—new materials often look too bright until they age. Consider selective salvage from concealed areas of the same building. Keep samples and document sources for future repairs. A preservation consultant can help with complex matching.",
  },
  {
    question: "What should I look for when buying salvage materials?",
    answer:
      "Inspect carefully before purchase: check wood for rot, insect damage, and structural integrity; examine windows for glass condition, joint tightness, and hardware function; test hardware for operation; look for lead paint (assume positive pre-1978); verify dimensions match your needs; assess restoration required versus price; confirm quantity available for matched sets. Ask about provenance—materials from documented buildings have more value. Bring measurements, photos of existing conditions, and samples for comparison. Build relationships with dealers for best service. Have a vehicle suitable for transport or arrange delivery for large items.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Sourcing Historic Materials Tampa Bay", href: "/sourcing-historic-materials-tampa-bay/" },
];


const internalLinks = [
  { href: "/services/historic-restoration/", label: "Historic Restoration Services" },
  { href: "/services/historic-restoration/shpo-compliance/", label: "SHPO Compliance" },
  { href: "/services/historic-restoration/historic-tax-credits/", label: "Historic Tax Credits" },
  { href: "/services/historic-restoration/material-sourcing/", label: "Historic Material Sourcing" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function SourcingHistoricMaterialsTampaBayPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Historic Materials Sourcing" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Historic Restoration Services"
        serviceDescription="Expert sourcing of historic building materials for Tampa Bay restoration projects. Architectural salvage, period hardware, custom millwork, and reclaimed lumber for authentic renovations."
        city="Tampa"
        minPrice="50000"
      />

      
      <ArticleSchema
        headline="Sourcing Historic Materials Tampa Bay | Period-Accurate Restoration | FCS"
        description="Find authentic historic building materials for Tampa Bay restoration projects. Salvage yards, specialty suppliers, and custom fabrication for period-accurate renovations."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/sourcing-historic-materials-tampa-bay/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Residential", href: "/residential/" },
          { name: "Historic Preservation", href: "/residential/" },
          { name: "Sourcing Historic Materials", href: "/sourcing-historic-materials-tampa-bay/" },
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
              customHubHref="/residential/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Sourcing Historic Materials in Tampa Bay
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Finding authentic materials for period-accurate restorations.
              From architectural salvage to custom millwork, we know where
              to find what your historic home needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta-gold">
                Discuss Your Restoration Project
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

      {/* Material Categories */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Historic Material Categories
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Common materials needed for Tampa Bay historic restorations.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-gold text-white">
                  <th className="px-4 py-3 text-left font-semibold">Category</th>
                  <th className="px-4 py-3 text-left font-semibold">Common Items</th>
                  <th className="px-4 py-3 text-left font-semibold">Sources</th>
                  <th className="px-4 py-3 text-left font-semibold">Solution</th>
                </tr>
              </thead>
              <tbody>
                {materialCategories.map((cat, index) => (
                  <tr
                    key={cat.category}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-semibold text-brand-green-dark">
                      {cat.category}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{cat.items}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{cat.sources}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{cat.solution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Florida-Specific Materials */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Florida-Specific Historic Materials
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Materials unique to Florida&apos;s building heritage.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {floridaSpecificMaterials.map((material) => (
              <div key={material.material} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-brand-gold">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  {material.material}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{material.description}</p>
                <p className="text-sm text-brand-gold-dark mb-2">
                  <strong>Significance:</strong> {material.significance}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Sourcing:</strong> {material.sourcing}
                </p>
                <p className="text-xs text-gray-500">
                  <strong>Challenges:</strong> {material.challenges}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tampa Bay Sources */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Where to Find Historic Materials
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Types of suppliers and what to expect from each.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tampaBaySources.map((source) => (
              <div key={source.type} className="card p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-brand-green-dark">{source.type}</h3>
                  <span className="text-sm font-medium text-brand-gold">{source.priceRange}</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{source.description}</p>
                <p className="text-sm text-brand-green mb-2">
                  <strong>Best For:</strong> {source.bestFor}
                </p>
                <p className="text-xs text-gray-500 bg-gray-50 rounded-lg p-2">
                  <strong>Tip:</strong> {source.tips}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Strategies */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Cost-Saving Strategies
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Getting authentic results within budget.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {costStrategies.map((strategy) => (
              <div key={strategy.strategy} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <DollarSign className="w-6 h-6 text-brand-gold" />
                  <h3 className="font-bold text-brand-green-dark">{strategy.strategy}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{strategy.description}</p>
                <p className="text-sm font-medium text-green-600 bg-green-50 rounded-lg px-3 py-2">
                  Potential Savings: {strategy.savings}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Considerations */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Quality & Tax Credit Considerations
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Balancing authenticity, quality, and tax credit requirements.
          </p>
          <div className="overflow-x-auto max-w-4xl mx-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="px-4 py-3 text-left font-semibold">Factor</th>
                  <th className="px-4 py-3 text-left font-semibold">Guidance</th>
                  <th className="px-4 py-3 text-left font-semibold">Tax Credit Note</th>
                </tr>
              </thead>
              <tbody>
                {qualityConsiderations.map((item, index) => (
                  <tr
                    key={item.factor}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-semibold text-brand-green-dark">
                      {item.factor}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{item.guidance}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{item.taxCredit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-gold">
                Hyde Park Renovation Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Complete guide to renovating in Tampa&apos;s premier historic district.
              </p>
            </Link>
            <Link
              href="/balancing-modern-comfort-historic-character/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-gold">
                Balancing Modern & Historic
              </h3>
              <p className="text-gray-600 text-sm">
                Integrating modern amenities while preserving character.
              </p>
            </Link>
            <Link
              href="/residential/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-gold">
                Residential Construction
              </h3>
              <p className="text-gray-600 text-sm">
                Full range of residential construction services.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-gold">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Need Historic Materials for Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            FCS has relationships with salvage dealers, specialty suppliers, and
            craftsmen throughout Tampa Bay and beyond. We&apos;ll help you find the
            authentic materials your historic home deserves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Start Your Restoration
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