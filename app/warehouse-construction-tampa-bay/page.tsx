import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import Link from "next/link";
import Image from "next/image";
import {
  Warehouse,
  CheckCircle,
  AlertTriangle,
  Truck,
  ArrowRight,
  Phone,
  HelpCircle,
  Package,
  Thermometer,
  Shield,
  Ruler,
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
  title: "Warehouse Construction Tampa Bay | Distribution Centers | FCS",
  description:
    "Expert warehouse and distribution center construction in Tampa Bay. From e-commerce fulfillment to cold storage, we build facilities that optimize your operations.",
  keywords:
    "warehouse construction Tampa, distribution center construction Florida, logistics facility Tampa Bay, cold storage construction, e-commerce fulfillment center, industrial warehouse builder",
};

const warehouseTypes = [
  {
    type: "E-Commerce Fulfillment",
    size: "100,000-1,000,000+ SF",
    height: "36-40 ft clear",
    features: "High dock ratio, mezzanine-ready, automation infrastructure",
    keyConsiderations: "Truck court depth, employee parking, multi-shift operations",
  },
  {
    type: "Regional Distribution",
    size: "200,000-500,000 SF",
    height: "32-36 ft clear",
    features: "Cross-dock capability, high cube racking, trailer storage",
    keyConsiderations: "Highway access, rail access options, expansion capability",
  },
  {
    type: "Last-Mile Delivery",
    size: "50,000-150,000 SF",
    height: "28-32 ft clear",
    features: "High door count, drive-in capability, van parking",
    keyConsiderations: "Population proximity, multiple egress points, quick turn",
  },
  {
    type: "Cold Storage/Freezer",
    size: "50,000-300,000 SF",
    height: "30-45 ft clear",
    features: "Insulated panels, refrigeration, vapor barriers, specialized floors",
    keyConsiderations: "Utility capacity, food safety, ante-rooms, temperature zones",
  },
  {
    type: "Manufacturing Support",
    size: "50,000-200,000 SF",
    height: "24-32 ft clear",
    features: "Just-in-time staging, production adjacency, specialized storage",
    keyConsiderations: "Material flow, proximity to production, inventory systems",
  },
  {
    type: "Third-Party Logistics (3PL)",
    size: "100,000-500,000 SF",
    height: "32-36 ft clear",
    features: "Multi-client capability, flexible racking, WMS integration",
    keyConsiderations: "Divisibility, security zones, varied dock configurations",
  },
];

const designSpecs = [
  {
    spec: "Clear Height",
    modern: "32-40 feet",
    notes: "Every 4 feet of height adds ~25% more cube; critical for e-commerce",
  },
  {
    spec: "Column Spacing",
    modern: "52x56 or 60x60",
    notes: "Wider spacing improves racking efficiency and flexibility",
  },
  {
    spec: "Floor Flatness",
    modern: "FF50/FL30 minimum; FF100/FL50 for VNA",
    notes: "Critical for automated systems and very narrow aisle racking",
  },
  {
    spec: "Floor Load",
    modern: "350-500 PSF",
    notes: "Heavy loads required for high-bay racking and manufacturing",
  },
  {
    spec: "Dock Doors",
    modern: "1 per 5,000-10,000 SF",
    notes: "Higher ratio for cross-dock and high-velocity operations",
  },
  {
    spec: "Truck Court",
    modern: "130-185 feet",
    notes: "Deeper courts for trailer staging; 185 ft for 135° dock angles",
  },
  {
    spec: "Trailer Parking",
    modern: "1-2 per door",
    notes: "Drop-trailer operations need 2:1 or higher ratio",
  },
  {
    spec: "Power",
    modern: "2,000-4,000 amp",
    notes: "EV charging and automation increasing requirements",
  },
];

const constructionMethods = [
  {
    method: "Tilt-Wall Concrete",
    bestFor: "High-image distribution, multi-tenant, institutional ownership",
    timeline: "10-16 months",
    costRange: "$90-140/SF",
    pros: "Durable, low maintenance, hurricane resistant, premium appearance",
    cons: "Longer schedule, higher cost, less modification flexibility",
  },
  {
    method: "Pre-Engineered Metal",
    bestFor: "Single-user, cost-sensitive, fast-track projects",
    timeline: "6-10 months",
    costRange: "$65-100/SF",
    pros: "Faster construction, lower cost, long clear spans, easy expansion",
    cons: "Higher maintenance, less durable envelope, industrial appearance",
  },
  {
    method: "Hybrid System",
    bestFor: "Best of both: appearance and value",
    timeline: "8-14 months",
    costRange: "$80-120/SF",
    pros: "Tilt-wall exterior with metal roof/structure, optimized cost/value",
    cons: "Coordination complexity, design integration required",
  },
];

const siteRequirements = [
  {
    requirement: "Acreage",
    rule: "3-4 acres per 100,000 SF building",
    tampa: "Land costs $5-15/SF; availability declining in core submarkets",
  },
  {
    requirement: "Zoning",
    rule: "Heavy Industrial (IH) or Light Industrial (IL)",
    tampa: "PD zoning common; verify truck traffic and hours restrictions",
  },
  {
    requirement: "Access",
    rule: "Direct access to major highway within 1-2 miles",
    tampa: "I-4, I-75, I-275 corridors most desirable; Port Tampa for import",
  },
  {
    requirement: "Utilities",
    rule: "Adequate water, sewer, power for operations",
    tampa: "Verify TECO capacity; natural gas for some operations",
  },
  {
    requirement: "Stormwater",
    rule: "Retention/detention per local requirements",
    tampa: "SWFWMD permits required; can impact buildable area significantly",
  },
  {
    requirement: "Fire Protection",
    rule: "ESFR sprinklers require adequate water supply",
    tampa: "On-site tanks common if municipal supply insufficient",
  },
];

const coldStorageConsiderations = [
  {
    element: "Temperature Zones",
    description: "Freezer (-10 to 0°F), Cooler (34-38°F), Ambient, Dock Staging",
    importance: "Multiple zones allow diverse product handling; efficiency",
  },
  {
    element: "Insulated Panels",
    description: "4-6 inch for cooler; 5-8 inch for freezer; metal or fiberglass faced",
    importance: "R-value and vapor barrier integrity critical for energy costs",
  },
  {
    element: "Floor System",
    description: "Heated slab to prevent frost heave; insulation below slab",
    importance: "Freezer floors without heat can heave and crack over time",
  },
  {
    element: "Refrigeration",
    description: "Ammonia (large facilities) or Freon (smaller); rack or rooftop",
    importance: "System sizing affects energy costs; ammonia requires PSM compliance",
  },
  {
    element: "Dock Design",
    description: "Insulated doors, dock seals, ante-rooms, air curtains",
    importance: "Temperature control at docks prevents product damage and energy loss",
  },
  {
    element: "Food Safety",
    description: "FSMA compliance, HACCP design, pest control, drainage",
    importance: "FDA/USDA requirements; customer audit requirements",
  },
];

const faqs = [
  {
    question: "How much does warehouse construction cost in Tampa Bay?",
    answer:
      "Warehouse construction costs in Tampa Bay typically range from $65-140 per square foot for the building shell, depending on construction type and specifications. Pre-engineered metal buildings run $65-100/SF; tilt-wall concrete is $90-140/SF. Site work adds $10-25/SF depending on conditions. Cold storage adds $40-80/SF beyond standard warehouse. A complete 100,000 SF distribution center typically costs $10-18 million including site, shell, and basic tenant improvements. Costs have increased 20-30% since 2020 due to materials and labor.",
  },
  {
    question: "How long does it take to build a warehouse?",
    answer:
      "Warehouse construction timelines vary by size and type: Pre-engineered metal buildings take 6-10 months from permit; tilt-wall construction takes 10-16 months. Add 2-4 months for design and permitting before construction starts. A 200,000 SF distribution center typically takes 14-20 months from project kickoff to occupancy. Cold storage adds 2-4 months for specialized systems. Fast-track schedules can compress timelines 20-30% with early procurement and parallel permitting, but add cost.",
  },
  {
    question: "What ceiling height should my warehouse have?",
    answer:
      "Modern distribution warehouses typically need 32-40 foot clear height. E-commerce and high-cube distribution favor 36-40 feet to maximize vertical storage (5-6 rack levels with ESFR sprinklers). Traditional distribution works well at 32-36 feet. Last-mile facilities can operate at 28-32 feet. Each 4 feet of additional height adds approximately $3-5/SF to construction cost but increases storage capacity by 20-25%. Consider your racking system, product characteristics, and material handling equipment when determining height.",
  },
  {
    question: "Should I build speculative or wait for a tenant?",
    answer:
      "The decision depends on market conditions and risk tolerance. Tampa Bay's industrial market has been strong, with vacancy under 5% in many submarkets, supporting spec development. Spec buildings can lease at market rates and avoid tenant-specific features that limit future flexibility. Build-to-suit guarantees occupancy but requires longer pre-development period. Many developers build spec shell with tenant improvement allowance, allowing customization without full build-to-suit risk. Current market conditions favor spec in strong Tampa Bay submarkets.",
  },
  {
    question: "What fire protection system do warehouses need?",
    answer:
      "Modern high-bay warehouses typically use ESFR (Early Suppression Fast Response) sprinkler systems, which protect high-piled storage without in-rack sprinklers. ESFR requires adequate water supply (often 1,500+ GPM) and ceiling height limitations (typically 40-45 feet max). In-rack sprinklers are needed for storage exceeding ESFR limits or certain commodities. Cold storage has special requirements due to freezing concerns. Fire protection design should be coordinated with storage plans and insurance requirements early in design.",
  },
  {
    question: "How do I plan for warehouse automation?",
    answer:
      "Even if not automating immediately, design for future automation: specify super-flat floors (FF100/FL50) for automated guided vehicles; provide adequate power capacity and distribution; design column spacing to accommodate automated storage/retrieval systems; install robust IT infrastructure with fiber and Wi-Fi coverage; consider structural provisions for conveyor mezzanines; and plan for maintenance access. Retrofitting automation into buildings not designed for it is expensive. The marginal cost to design for automation is small compared to retrofit costs.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Warehouse Construction Tampa Bay", href: "/warehouse-construction-tampa-bay/" },
];


const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/services/commercial/medical-construction/", label: "Medical Facility Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function WarehouseConstructionTampaBayPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Warehouse Construction" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Warehouse and Distribution Center Construction"
        serviceDescription="Expert warehouse and distribution center construction in Tampa Bay. E-commerce fulfillment, cold storage, logistics facilities, and manufacturing support buildings."
        city="Tampa"
        minPrice="5000000"
      />

      
      <ArticleSchema
        headline="Warehouse Construction Tampa Bay | Distribution Centers | FCS"
        description="Expert warehouse and distribution center construction in Tampa Bay. From e-commerce fulfillment to cold storage, we build facilities that optimize your operations."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/warehouse-construction-tampa-bay/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Commercial", href: "/commercial/" },
          { name: "Industrial Construction", href: "/commercial/industrial-construction/" },
          { name: "Warehouse Construction", href: "/warehouse-construction-tampa-bay/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Commercial construction project in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <BackToHub
              silo="commercial"
              customHubTitle="Industrial Construction"
              customHubHref="/commercial/industrial-construction/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Warehouse Construction Tampa Bay
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Building distribution centers, fulfillment facilities, and logistics
              infrastructure that power Tampa Bay&apos;s growing economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Discuss Your Warehouse Project
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

      {/* Warehouse Types */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Types of Warehouse Facilities
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Different operations require different building configurations.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="px-4 py-3 text-left font-semibold">Facility Type</th>
                  <th className="px-4 py-3 text-center font-semibold">Typical Size</th>
                  <th className="px-4 py-3 text-center font-semibold">Clear Height</th>
                  <th className="px-4 py-3 text-left font-semibold">Key Features</th>
                </tr>
              </thead>
              <tbody>
                {warehouseTypes.map((type, index) => (
                  <tr
                    key={type.type}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3">
                      <span className="font-semibold text-brand-green-dark">{type.type}</span>
                      <p className="text-xs text-gray-500 mt-1">{type.keyConsiderations}</p>
                    </td>
                    <td className="px-4 py-3 text-center text-sm">{type.size}</td>
                    <td className="px-4 py-3 text-center text-sm">{type.height}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{type.features}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Modern Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Modern Warehouse Specifications
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Current standards for Class A distribution facilities.
          </p>
          <div className="overflow-x-auto max-w-4xl mx-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="px-4 py-3 text-left font-semibold">Specification</th>
                  <th className="px-4 py-3 text-center font-semibold">Modern Standard</th>
                  <th className="px-4 py-3 text-left font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {designSpecs.map((spec, index) => (
                  <tr
                    key={spec.spec}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 font-semibold text-brand-green-dark">
                      {spec.spec}
                    </td>
                    <td className="px-4 py-3 text-center font-medium">{spec.modern}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{spec.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Construction Methods */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Construction Methods
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choosing the right structural system for your facility.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {constructionMethods.map((method) => (
              <div key={method.method} className="card p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-2">
                  {method.method}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{method.bestFor}</p>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Timeline:</span>
                    <span className="font-medium">{method.timeline}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Cost Range:</span>
                    <span className="font-medium text-brand-green">{method.costRange}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-green-50 rounded-lg p-3">
                    <span className="text-xs text-green-600 font-semibold block mb-1">Pros</span>
                    <p className="text-gray-700 text-xs">{method.pros}</p>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3">
                    <span className="text-xs text-yellow-600 font-semibold block mb-1">Cons</span>
                    <p className="text-gray-700 text-xs">{method.cons}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cold Storage Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Cold Storage Considerations
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Specialized requirements for refrigerated and frozen facilities.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coldStorageConsiderations.map((item) => (
              <div key={item.element} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
                <div className="flex items-center gap-3 mb-3">
                  <Thermometer className="w-6 h-6 text-blue-500" />
                  <h3 className="font-bold text-brand-green-dark">{item.element}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                <p className="text-xs text-blue-600">
                  <strong>Why It Matters:</strong> {item.importance}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Site Requirements */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Tampa Bay Site Requirements
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            What to look for when selecting a warehouse site in Tampa Bay.
          </p>
          <div className="overflow-x-auto max-w-4xl mx-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="px-4 py-3 text-left font-semibold">Requirement</th>
                  <th className="px-4 py-3 text-left font-semibold">General Rule</th>
                  <th className="px-4 py-3 text-left font-semibold">Tampa Bay Specifics</th>
                </tr>
              </thead>
              <tbody>
                {siteRequirements.map((req, index) => (
                  <tr
                    key={req.requirement}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-semibold text-brand-green-dark">
                      {req.requirement}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{req.rule}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{req.tampa}</td>
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
            Related Industrial Construction Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/tilt-wall-vs-metal-buildings/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Tilt-Wall vs Metal Buildings
              </h3>
              <p className="text-gray-600 text-sm">
                Compare construction systems for your warehouse.
              </p>
            </Link>
            <Link
              href="/industrial-flex-space-development/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Flex Space Development
              </h3>
              <p className="text-gray-600 text-sm">
                Versatile warehouse/office combinations.
              </p>
            </Link>
            <Link
              href="/commercial/industrial-construction/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Industrial Construction Services
              </h3>
              <p className="text-gray-600 text-sm">
                Full range of industrial building capabilities.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Ready to Build Your Warehouse?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            FCS builds distribution centers and warehouse facilities throughout
            Tampa Bay. From site selection through occupancy, we deliver facilities
            that optimize your logistics operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Start Your Project
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