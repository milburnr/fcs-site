import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  CheckCircle,
  AlertTriangle,
  Warehouse,
  ArrowRight,
  Phone,
  HelpCircle,
  Users,
  Truck,
  Settings,
  DollarSign,
  Ruler,
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
  title: "Industrial Flex Space Development Tampa Bay | FCS Construction",
  description:
    "Expert industrial flex space development in Tampa Bay. Versatile buildings combining warehouse, office, and showroom space for maximum tenant flexibility and investment returns.",
  keywords:
    "industrial flex space Tampa, flex building development Florida, warehouse office combo Tampa Bay, light industrial construction, flex space investment, multi-tenant industrial",
};

const flexSpaceTypes = [
  {
    type: "Office/Warehouse Flex",
    ratio: "20-40% office / 60-80% warehouse",
    tenants: "Distributors, contractors, e-commerce fulfillment",
    features: "Dock doors, drive-in access, finished office",
    rentPremium: "10-20% above pure warehouse",
  },
  {
    type: "Showroom/Warehouse",
    ratio: "30-50% showroom / 50-70% warehouse",
    tenants: "Tile/flooring, cabinets, furniture, fixtures",
    features: "High-finish front, customer parking, dock rear",
    rentPremium: "20-35% above pure warehouse",
  },
  {
    type: "R&D/Lab Flex",
    ratio: "40-60% lab/clean / 40-60% support",
    tenants: "Biotech, electronics, testing labs",
    features: "Enhanced HVAC, power, controlled environments",
    rentPremium: "40-60% above pure warehouse",
  },
  {
    type: "Light Manufacturing",
    ratio: "15-25% office / 75-85% production",
    tenants: "Assembly, fabrication, food production",
    features: "High power, floor drains, heavy floor loads",
    rentPremium: "5-15% above pure warehouse",
  },
  {
    type: "Creative/Maker Space",
    ratio: "Variable open layout",
    tenants: "Artisans, breweries, studios, incubators",
    features: "Exposed structure, high ceilings, unique character",
    rentPremium: "25-50% above pure warehouse",
  },
];

const designConsiderations = [
  {
    element: "Clear Height",
    standard: "24-28 feet typical; 32+ for modern spec",
    flexBenefit: "Accommodates racking, mezzanines, varied uses",
    costImpact: "Each 4 feet adds ~$3-5/SF to shell cost",
  },
  {
    element: "Column Spacing",
    standard: "50x50 or 52x56 typical",
    flexBenefit: "Wider spacing = more layout flexibility",
    costImpact: "Wider spacing increases structural cost 5-10%",
  },
  {
    element: "Floor Load Capacity",
    standard: "250 PSF standard; 500+ for heavy use",
    flexBenefit: "Heavy loads allow manufacturing, racking",
    costImpact: "Heavy slab adds $5-10/SF",
  },
  {
    element: "Dock Doors",
    standard: "1 per 5,000-10,000 SF",
    flexBenefit: "More doors = more divisibility",
    costImpact: "$15,000-25,000 per dock position",
  },
  {
    element: "Drive-In Doors",
    standard: "12x14 minimum; 14x16 preferred",
    flexBenefit: "Essential for small tenants without dock access",
    costImpact: "$8,000-15,000 per drive-in door",
  },
  {
    element: "Power Capacity",
    standard: "400-800 amp per 10,000 SF",
    flexBenefit: "Higher capacity = manufacturing capability",
    costImpact: "Heavy power adds $3-8/SF",
  },
  {
    element: "Office Finish Ratio",
    standard: "5-15% of building",
    flexBenefit: "Demisable office areas add value",
    costImpact: "Office finish $75-150/SF vs. $40-60 warehouse",
  },
];

const subdivisionStrategies = [
  {
    strategy: "Single-Tenant Shell",
    minSize: "25,000+ SF",
    advantages: "Lowest cost per SF; maximum flexibility for tenant",
    disadvantages: "Limited tenant pool; longer lease-up",
    ideal: "Build-to-suit or credit tenant pre-lease",
  },
  {
    strategy: "2-4 Bay Multi-Tenant",
    minSize: "5,000-15,000 SF per bay",
    advantages: "Diversified income; larger tenant pool",
    disadvantages: "More management; common area costs",
    ideal: "Spec development in strong markets",
  },
  {
    strategy: "Small Bay/Incubator",
    minSize: "1,500-5,000 SF per bay",
    advantages: "Highest rent/SF; strong demand",
    disadvantages: "High TI cost; turnover; management intensive",
    ideal: "Infill locations; startup-heavy markets",
  },
  {
    strategy: "Convertible Design",
    minSize: "Varies",
    advantages: "Can reconfigure as market demands",
    disadvantages: "Higher upfront cost for flexibility",
    ideal: "Uncertain market; long-term hold",
  },
];

const marketDemand = [
  {
    driver: "E-Commerce Growth",
    impact: "Last-mile distribution needs flex space near population",
    tampaFactor: "Tampa Bay population growth driving demand",
  },
  {
    driver: "Supply Chain Reshoring",
    impact: "Companies bringing manufacturing back to US",
    tampaFactor: "Port Tampa Bay supports import/light manufacturing",
  },
  {
    driver: "Small Business Growth",
    impact: "Startups need flexible, affordable space",
    tampaFactor: "Tampa entrepreneur ecosystem expanding",
  },
  {
    driver: "Hybrid Work Models",
    impact: "Companies want office + warehouse in one location",
    tampaFactor: "Avoiding I-275 congestion drives suburban flex demand",
  },
];

const developmentProcess = [
  {
    phase: "Site Selection & Feasibility",
    duration: "2-4 months",
    tasks: [
      "Market analysis and tenant demand study",
      "Zoning verification (Industrial/Light Industrial)",
      "Traffic and access analysis",
      "Environmental Phase I assessment",
      "Preliminary pro forma and financing",
    ],
  },
  {
    phase: "Design & Entitlements",
    duration: "4-8 months",
    tasks: [
      "Architectural design with flex features",
      "Site plan approval process",
      "Building permit application",
      "Utility coordination",
      "Pre-leasing marketing",
    ],
  },
  {
    phase: "Construction",
    duration: "8-14 months",
    tasks: [
      "Site work and utilities",
      "Shell construction (tilt-wall or metal)",
      "Core and shell completion",
      "Spec office build-out if applicable",
      "Tenant improvement coordination",
    ],
  },
  {
    phase: "Lease-Up & Stabilization",
    duration: "6-18 months",
    tasks: [
      "Certificate of Occupancy",
      "Tenant improvement build-outs",
      "Property management transition",
      "Stabilization for refinance or sale",
    ],
  },
];

const faqs = [
  {
    question: "What is industrial flex space?",
    answer:
      "Industrial flex space is a versatile building type that combines warehouse/industrial space with office, showroom, or other uses under one roof. The 'flex' refers to the ability to adjust the ratio of uses based on tenant needs—typically 20-50% office/showroom and 50-80% warehouse/production. Flex buildings are designed for easy subdivision and reconfiguration, making them attractive to a wide range of tenants from e-commerce and distribution to light manufacturing and creative industries. They typically feature higher finish levels than pure warehouse but lower costs than office buildings.",
  },
  {
    question: "What size flex space tenants are most common in Tampa Bay?",
    answer:
      "Tampa Bay flex space demand is strongest in the 3,000-15,000 SF range. Small tenants (1,500-5,000 SF) include contractors, small distributors, and startups. Mid-size tenants (5,000-15,000 SF) are often established distributors, light manufacturers, and showroom retailers. Larger users (15,000-50,000 SF) typically need build-to-suit or older existing product. The sweet spot for spec development is 5,000-10,000 SF bays that can be combined for larger users or subdivided for smaller tenants.",
  },
  {
    question: "Should I build tilt-wall or metal for flex space?",
    answer:
      "For multi-tenant flex space in Tampa Bay, tilt-wall construction is typically preferred. Tilt-wall offers better appearance (important for office/showroom users), superior hurricane resistance, lower maintenance, and higher tenant appeal—all justifying the 15-25% cost premium over metal. Metal buildings can work for single-tenant or purely industrial flex uses where appearance matters less. Many developers use hybrid approaches: tilt-wall front facade for curb appeal with metal rear/sides for cost efficiency.",
  },
  {
    question: "What ceiling height do flex buildings need?",
    answer:
      "Modern flex space typically needs 24-28 foot clear height minimum, with 28-32 feet increasingly common for new construction. Higher ceilings accommodate: racking systems for distribution tenants, mezzanine office installations, overhead cranes or equipment, and future flexibility. Each 4 feet of additional height adds approximately $3-5/SF to construction cost but significantly expands your tenant pool. For showroom-heavy uses, 18-24 feet may suffice, but limiting height restricts future options.",
  },
  {
    question: "How much office space should a flex building include?",
    answer:
      "Spec flex buildings typically include 10-20% finished office as part of base building, with the remainder as shell warehouse. This provides enough office for most tenants while keeping base rent competitive. The key is designing for expandable office—stub utilities, locate restrooms strategically, and use demising wall locations that allow office expansion. Tenant improvement allowances then fund additional office build-out as needed. Showroom flex may warrant 30-40% finished space as part of the base building.",
  },
  {
    question: "What returns can I expect from flex space development?",
    answer:
      "Well-located flex space in Tampa Bay typically achieves: development yields of 7-9% (NOI/cost); stabilized cap rates of 6-7.5% for sale; and triple-net rents of $12-18/SF NNN depending on location and finish level. Returns are enhanced by: strong pre-leasing, efficient construction management, appropriate tenant improvement budgets, and flexible subdivision design. Flex space often outperforms pure warehouse on a risk-adjusted basis due to diverse tenant demand and rent premiums for the office component.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Industrial Flex Space Development", href: "/industrial-flex-space-development/" },
];


const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/services/commercial/medical-construction/", label: "Medical Facility Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function IndustrialFlexSpaceDevelopmentPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Industrial Flex Space Development" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Flex Space Construction Services"
        serviceDescription="Expert industrial flex space development in Tampa Bay. Design and construction of versatile warehouse/office buildings for multi-tenant and single-user applications."
        city="Tampa"
        minPrice="2000000"
      />

      
      <ArticleSchema
        headline="Industrial Flex Space Development Tampa Bay | FCS Construction"
        description="Expert industrial flex space development in Tampa Bay. Versatile buildings combining warehouse, office, and showroom space for maximum tenant flexibility and investment returns."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/industrial-flex-space-development/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Commercial", href: "/commercial/" },
          { name: "Industrial Construction", href: "/commercial/industrial-construction/" },
          { name: "Flex Space Development", href: "/industrial-flex-space-development/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
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
              Industrial Flex Space Development
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Versatile buildings that combine warehouse, office, and showroom space
              for maximum tenant flexibility and investment returns in Tampa Bay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Discuss Your Flex Space Project
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

      {/* Flex Space Types */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Types of Flex Space
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Flex space configurations to match different tenant markets and investment goals.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="px-4 py-3 text-left font-semibold">Type</th>
                  <th className="px-4 py-3 text-center font-semibold">Space Ratio</th>
                  <th className="px-4 py-3 text-left font-semibold">Target Tenants</th>
                  <th className="px-4 py-3 text-left font-semibold">Key Features</th>
                  <th className="px-4 py-3 text-center font-semibold">Rent Premium</th>
                </tr>
              </thead>
              <tbody>
                {flexSpaceTypes.map((type, index) => (
                  <tr
                    key={type.type}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-semibold text-brand-green-dark">
                      {type.type}
                    </td>
                    <td className="px-4 py-3 text-center text-sm">{type.ratio}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{type.tenants}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{type.features}</td>
                    <td className="px-4 py-3 text-center text-brand-green font-medium">{type.rentPremium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Design Considerations */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Design Elements for Flexibility
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Key design decisions that determine building flexibility and tenant appeal.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designConsiderations.map((item) => (
              <div key={item.element} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  {item.element}
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">
                    <strong>Standard:</strong> {item.standard}
                  </p>
                  <p className="text-brand-green">
                    <strong>Flex Benefit:</strong> {item.flexBenefit}
                  </p>
                  <p className="text-gray-500">
                    <strong>Cost Impact:</strong> {item.costImpact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subdivision Strategies */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Subdivision Strategies
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            How to configure your flex building for optimal lease-up and returns.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {subdivisionStrategies.map((strategy) => (
              <div key={strategy.strategy} className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-brand-green-dark">
                    {strategy.strategy}
                  </h3>
                  <span className="text-sm bg-brand-green-light/50 text-brand-green-dark px-3 py-1 rounded-full">
                    {strategy.minSize}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-green-50 rounded-lg p-3">
                    <span className="text-xs text-green-600 font-semibold block mb-1">Advantages</span>
                    <p className="text-gray-700 text-sm">{strategy.advantages}</p>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3">
                    <span className="text-xs text-yellow-600 font-semibold block mb-1">Disadvantages</span>
                    <p className="text-gray-700 text-sm">{strategy.disadvantages}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  <strong>Ideal For:</strong> {strategy.ideal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Flex Space Development Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From site selection to stabilized investment.
          </p>
          <div className="space-y-6 max-w-3xl mx-auto">
            {developmentProcess.map((phase, index) => (
              <div
                key={phase.phase}
                className="bg-white rounded-xl p-6 shadow-md border-l-4 border-brand-green"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-brand-green-dark">
                        {phase.phase}
                      </h3>
                      <span className="text-sm font-medium text-brand-green bg-brand-green-light/30 px-3 py-1 rounded-full">
                        {phase.duration}
                      </span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {phase.tasks.map((task, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
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

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-gray-50 rounded-lg px-6"
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
      <section className="py-12 bg-gray-50">
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
                Compare construction systems for your flex space project.
              </p>
            </Link>
            <Link
              href="/warehouse-construction-tampa-bay/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Warehouse Construction
              </h3>
              <p className="text-gray-600 text-sm">
                Large-scale warehouse and distribution facilities.
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
            Planning a Flex Space Development?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            FCS builds flex space that maximizes tenant appeal and investment returns.
            From site evaluation through lease-up, we help you create successful
            industrial properties in Tampa Bay.
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