import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  CheckCircle,
  AlertTriangle,
  MapPin,
  ArrowRight,
  Phone,
  HelpCircle,
  Anchor,
  TreePine,
  Building2,
  FileText,
  Shield,
  DollarSign,
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
  title: "Davis Islands Custom Home Building | Tampa Luxury Construction | FCS",
  description:
    "Expert custom home building on Davis Islands, Tampa. Navigate flood zones, historic guidelines, and waterfront construction challenges with Florida Construction Specialists.",
  keywords:
    "Davis Islands custom homes, Davis Islands home builder, Tampa island luxury homes, waterfront construction Davis Islands, Tampa Bay custom home building, Davis Islands architect",
};

const davisIslandsFactors = [
  {
    factor: "Flood Zone Requirements",
    challenge: "Most properties in VE or AE flood zones",
    solution: "Elevated construction, breakaway walls, flood-resistant materials below BFE",
    impact: "Adds $50,000-150,000+ to construction; requires FEMA-compliant design",
  },
  {
    factor: "Historic Overlay District",
    challenge: "Parts of Davis Islands have design review requirements",
    solution: "Work with Historic Preservation Commission early; blend modern needs with character",
    impact: "Design approval adds 30-60 days; may limit exterior materials/styles",
  },
  {
    factor: "Lot Size Limitations",
    challenge: "Many lots are narrow (50-60 ft) with setback constraints",
    solution: "Efficient floor plans, multi-story design, creative outdoor spaces",
    impact: "Requires experienced architect familiar with island constraints",
  },
  {
    factor: "Waterfront Access",
    challenge: "Seawall condition, dock permits, water depth varies",
    solution: "Seawall inspection before purchase; coordinate dock permits with construction",
    impact: "Seawall replacement $500-1,500/linear foot; dock permits require SWFWMD approval",
  },
  {
    factor: "Infrastructure Age",
    challenge: "Original 1920s infrastructure; older utilities",
    solution: "Comprehensive site assessment; budget for utility upgrades",
    impact: "May need water/sewer lateral replacement; electrical service upgrades common",
  },
  {
    factor: "Wind Exposure",
    challenge: "Open water exposure increases wind loads",
    solution: "Miami-Dade rated windows; enhanced structural connections",
    impact: "Higher cost for impact-resistant materials; insurance benefits",
  },
];

const buildingProcess = [
  {
    phase: "Site Evaluation",
    duration: "2-4 weeks",
    tasks: [
      "Survey and title review",
      "Flood zone determination (FEMA LOMA if applicable)",
      "Geotechnical soil testing",
      "Seawall/dock inspection for waterfront lots",
      "Historic district overlay check",
      "Utility capacity verification",
    ],
  },
  {
    phase: "Design & Permitting",
    duration: "4-8 months",
    tasks: [
      "Architectural design with island-specific constraints",
      "Structural engineering for elevated construction",
      "Historic Preservation review if applicable",
      "Tampa building permit application",
      "SWFWMD environmental permit if waterfront",
      "Dock/seawall permits if applicable",
    ],
  },
  {
    phase: "Site Preparation",
    duration: "2-4 weeks",
    tasks: [
      "Demolition of existing structure if needed",
      "Tree protection/removal permits",
      "Temporary utilities and site security",
      "Erosion control for waterfront",
      "Foundation preparation/pilings",
    ],
  },
  {
    phase: "Construction",
    duration: "12-18 months",
    tasks: [
      "Foundation and elevated structure",
      "Structural framing and roof",
      "Windows and exterior envelope",
      "MEP rough-in (mechanical, electrical, plumbing)",
      "Interior finishes",
      "Pool/outdoor living construction",
    ],
  },
  {
    phase: "Final Inspections",
    duration: "2-4 weeks",
    tasks: [
      "Certificate of Occupancy inspection",
      "Flood elevation certificate",
      "Pool/spa final inspection",
      "Dock/seawall final if applicable",
      "Impact fee payments",
      "Utility connection finals",
    ],
  },
];

const costFactors = [
  {
    category: "Base Construction",
    lowEnd: "$400-500/sf",
    highEnd: "$600-800+/sf",
    notes: "Quality level, finishes, and complexity drive range",
  },
  {
    category: "Elevated Foundation",
    lowEnd: "$40,000",
    highEnd: "$150,000+",
    notes: "Height required, piling type, garage below",
  },
  {
    category: "Seawall Replacement",
    lowEnd: "$75,000",
    highEnd: "$200,000+",
    notes: "Based on 50-100 linear feet; condition varies widely",
  },
  {
    category: "Dock Construction",
    lowEnd: "$50,000",
    highEnd: "$150,000+",
    notes: "Size, lift type, utilities, permit complexity",
  },
  {
    category: "Pool/Outdoor Living",
    lowEnd: "$80,000",
    highEnd: "$300,000+",
    notes: "Size, features, outdoor kitchen, screen enclosure",
  },
  {
    category: "Impact Windows/Doors",
    lowEnd: "$50,000",
    highEnd: "$150,000+",
    notes: "Whole-house; larger openings cost more",
  },
];

const neighborhoodAreas = [
  {
    area: "Original Davis Islands",
    character: "1920s Mediterranean Revival charm",
    considerations: "Historic overlay in parts; mature trees; character-defining streetscape",
    typical: "Renovation/rebuild of existing homes; 2,500-4,000 sf typical",
  },
  {
    area: "Biscayne/Barbados",
    character: "Mix of original and newer construction",
    considerations: "Larger lots available; less historic restriction",
    typical: "New custom homes 3,500-6,000 sf; modern and transitional styles",
  },
  {
    area: "Waterfront Properties",
    character: "Premium locations on Hillsborough Bay and channels",
    considerations: "Highest flood requirements; seawall critical; dock access valuable",
    typical: "Ultra-luxury 4,000-8,000+ sf; highest price per square foot",
  },
  {
    area: "Davis Islands Yacht Club Area",
    character: "Prestigious location near club facilities",
    considerations: "Community involvement; some deed restrictions",
    typical: "Established luxury; renovation and new construction mix",
  },
];

const designConsiderations = [
  {
    element: "Elevated Living",
    description: "Main living above flood level with garage/storage below",
    benefit: "Meets flood requirements; captures bay breezes and views",
    challenge: "Elevator or stairs required; parking below needs breakaway walls",
  },
  {
    element: "Indoor-Outdoor Flow",
    description: "Expansive openings to outdoor living spaces",
    benefit: "Maximizes Florida lifestyle; extends living space",
    challenge: "Impact-rated sliding doors expensive; requires covered outdoor areas",
  },
  {
    element: "Rooftop Decks",
    description: "Elevated outdoor space for views",
    benefit: "Captures downtown/bay views; additional outdoor space",
    challenge: "Structural requirements; waterproofing critical; wind exposure",
  },
  {
    element: "Dock Integration",
    description: "Design home to complement waterfront access",
    benefit: "Seamless lifestyle; increases property value",
    challenge: "Permit timing; seawall coordination; utility runs to dock",
  },
];

const faqs = [
  {
    question: "Is Davis Islands in a flood zone?",
    answer:
      "Yes, virtually all of Davis Islands is in a FEMA flood zone—primarily VE (coastal high hazard) for waterfront properties and AE for interior lots. This means new construction must be elevated above the Base Flood Elevation (BFE), typically 11-14 feet NAVD in the VE zone. Existing homes being substantially improved (more than 50% of market value) must also be brought into compliance. We recommend obtaining a flood determination early and considering a LOMA (Letter of Map Amendment) if site conditions may support elevation above the mapped zone.",
  },
  {
    question: "Are there historic restrictions on Davis Islands?",
    answer:
      "Parts of Davis Islands fall within the Davis Islands Historic District, which has design guidelines administered by Tampa's Historic Preservation Commission. If your property is in the overlay, exterior changes require a Certificate of Appropriateness. Guidelines address architectural style, materials, colors, and setbacks to maintain neighborhood character. Not all of Davis Islands is in the historic district—we recommend checking your specific parcel. Even outside the overlay, many homeowners choose to respect the Mediterranean Revival character that defines the island.",
  },
  {
    question: "How much does it cost to build a custom home on Davis Islands?",
    answer:
      "Custom home construction on Davis Islands typically ranges from $400-800+ per square foot for the main structure, depending on quality level and complexity. For a 4,000 sf home, expect $1.6-3.2+ million for construction alone. Add elevated foundation costs ($40,000-150,000+), seawall work if waterfront ($75,000-200,000+), pool and outdoor living ($80,000-300,000+), and dock construction ($50,000-150,000+). Total project costs for waterfront properties commonly reach $3-5+ million. We provide detailed estimates during the design phase.",
  },
  {
    question: "How long does it take to build a custom home on Davis Islands?",
    answer:
      "From initial design to move-in, expect 18-26 months for a Davis Islands custom home. Design and permitting typically take 4-8 months—longer if historic review is required or if waterfront permits are complex. Construction averages 12-18 months depending on size and complexity. Site preparation and demolition of existing structures add 1-2 months. Waterfront elements (seawall, dock) often run parallel to home construction. Supply chain delays and permit backlogs can extend timelines, so we build contingency into schedules.",
  },
  {
    question: "Do I need pilings for my Davis Islands home?",
    answer:
      "Most new construction on Davis Islands requires deep foundations—either driven concrete piles or auger-cast piles—to reach stable soil below the sandy surface layer. Waterfront properties and elevated homes especially need piling systems to support the structure above flood level. A geotechnical report will determine the specific foundation requirements for your lot. Piling costs vary based on depth required, number of piles, and site access. Interior lots with lower flood requirements may use alternative foundation systems in some cases.",
  },
  {
    question: "Can I build a dock on Davis Islands?",
    answer:
      "Dock construction on Davis Islands is possible but requires multiple permits: City of Tampa building permit, SWFWMD (Southwest Florida Water Management District) Environmental Resource Permit, and potentially USACE (Army Corps of Engineers) approval depending on scope. Key factors include water depth (minimum 3 ft at mean low water for most boats), seagrass presence (protected—survey required), and property riparian rights. Dock size is limited based on waterway width and adjacent properties. Permit timeline is typically 3-6 months. Coordinate dock permits with home construction timeline.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Davis Islands Custom Home Building", href: "/davis-islands-custom-home-building/" },
];


const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/services/residential/waterfront-homes/", label: "Waterfront Home Construction" },
  { href: "/services/residential/home-additions/", label: "Home Additions" },
  { href: "/services/residential/hurricane-resistant-construction/", label: "Hurricane-Resistant Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function DavisIslandsCustomHomeBuildingPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Davis Islands Custom Home Building" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Davis Islands Custom Home Construction"
        serviceDescription="Expert custom home building on Davis Islands, Tampa. Specialized in waterfront construction, flood zone compliance, and luxury residential design for this prestigious Tampa Bay community."
        city="Tampa"
        minPrice="1500000"
      />
      <ArticleSchema
        headline="Davis Islands Custom Home Building | Tampa Luxury Construction | FCS"
        description="Expert custom home building on Davis Islands, Tampa. Navigate flood zones, historic guidelines, and waterfront construction challenges with Florida Construction Specialists."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/davis-islands-custom-home-building/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Residential", href: "/residential/" },
          { name: "Luxury Custom Homes", href: "/residential/" },
          { name: "Davis Islands", href: "/davis-islands-custom-home-building/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/custom-home-1.png"
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
              customHubTitle="Luxury Custom Homes"
              customHubHref="/residential/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Davis Islands Custom Home Building
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Building luxury custom homes on Tampa&apos;s most prestigious island community.
              Navigate flood zones, historic guidelines, and waterfront challenges with
              experienced local expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta-gold">
                Plan Your Island Home
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

      {/* Why Davis Islands is Different */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Building on Davis Islands: Key Factors
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Davis Islands presents unique challenges that require specialized experience.
            Understanding these factors is essential for successful project planning.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-gold text-white">
                  <th className="px-4 py-3 text-left font-semibold">Factor</th>
                  <th className="px-4 py-3 text-left font-semibold">Challenge</th>
                  <th className="px-4 py-3 text-left font-semibold">Solution</th>
                  <th className="px-4 py-3 text-left font-semibold">Cost Impact</th>
                </tr>
              </thead>
              <tbody>
                {davisIslandsFactors.map((item, index) => (
                  <tr
                    key={item.factor}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-semibold text-brand-green-dark">
                      {item.factor}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{item.challenge}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{item.solution}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{item.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Neighborhood Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Davis Islands Neighborhoods
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Different areas of Davis Islands have distinct characteristics and building considerations.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {neighborhoodAreas.map((area) => (
              <div key={area.area} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-8 h-8 text-brand-gold" />
                  <h3 className="text-xl font-bold text-brand-green-dark">{area.area}</h3>
                </div>
                <p className="text-brand-gold-dark font-medium mb-2">{area.character}</p>
                <p className="text-gray-600 text-sm mb-3">{area.considerations}</p>
                <p className="text-sm text-gray-500">
                  <strong>Typical:</strong> {area.typical}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Process Timeline */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Davis Islands Building Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            A typical custom home project timeline from site evaluation to move-in.
          </p>
          <div className="space-y-6 max-w-3xl mx-auto">
            {buildingProcess.map((phase, index) => (
              <div
                key={phase.phase}
                className="bg-gray-50 rounded-xl p-6 border-l-4 border-brand-gold"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-brand-green-dark">
                        {phase.phase}
                      </h3>
                      <span className="text-sm font-medium text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
                        {phase.duration}
                      </span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {phase.tasks.map((task, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Factors */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Davis Islands Construction Costs
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Budget ranges for custom home construction elements. Actual costs vary by
            site conditions, quality level, and scope.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="px-4 py-3 text-left font-semibold">Category</th>
                  <th className="px-4 py-3 text-center font-semibold">Low Range</th>
                  <th className="px-4 py-3 text-center font-semibold">High Range</th>
                  <th className="px-4 py-3 text-left font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {costFactors.map((item, index) => (
                  <tr
                    key={item.category}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-semibold text-brand-green-dark">
                      {item.category}
                    </td>
                    <td className="px-4 py-3 text-center">{item.lowEnd}</td>
                    <td className="px-4 py-3 text-center">{item.highEnd}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            Contact us for a detailed estimate based on your specific lot and vision.
          </p>
        </div>
      </section>

      {/* Design Considerations */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Design Considerations for Island Living
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Key design elements that maximize the Davis Islands lifestyle.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {designConsiderations.map((item) => (
              <div key={item.element} className="card p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  {item.element}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-green-50 rounded-lg p-3">
                    <span className="text-xs text-green-600 font-semibold block mb-1">Benefit</span>
                    <p className="text-gray-700 text-sm">{item.benefit}</p>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3">
                    <span className="text-xs text-yellow-600 font-semibold block mb-1">Challenge</span>
                    <p className="text-gray-700 text-sm">{item.challenge}</p>
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
            Related Residential Construction Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/hurricane-resistant-luxury-home-design/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-gold">
                Hurricane-Resistant Design
              </h3>
              <p className="text-gray-600 text-sm">
                Building luxury homes that withstand Florida storms.
              </p>
            </Link>
            <Link
              href="/seawall-coordination-new-construction/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-gold">
                Seawall Coordination
              </h3>
              <p className="text-gray-600 text-sm">
                Integrating seawall work with new home construction.
              </p>
            </Link>
            <Link
              href="/marine-grade-building-materials-guide/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-gold">
                Marine-Grade Materials
              </h3>
              <p className="text-gray-600 text-sm">
                Materials that perform in waterfront environments.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-gold">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Ready to Build on Davis Islands?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            FCS brings decades of Tampa Bay waterfront construction experience to your
            Davis Islands project. From lot evaluation through move-in, we guide you
            through every challenge unique to island living.
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