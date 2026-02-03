import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { Phone, CheckCircle, Building2, Store, Users, DollarSign, Clock, HelpCircle, ArrowRight, Ruler, Wrench, Zap } from "lucide-react";
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
  title: "Converting Retail to Multi-Tenant | Tampa Bay",
  description: "Expert guide to converting retail buildings into multi-tenant spaces in Tampa Bay. Learn about demising walls, utilities, code requirements, costs, and ROI for retail subdivisions.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Converting Retail to Multi-Tenant", href: "/converting-retail-building-into-multi-tenant-space/" },
];

const internalLinks = [
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/boost-your-business-with-an-attractive-retail-space/", label: "Retail Space Design" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/industrial-flex-space-development/", label: "Flex Space Development" },
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

const conversionTypes = [
  {
    original: "Big Box Retail",
    size: "50,000-150,000 SF",
    conversion: "Multi-tenant retail/flex",
    idealUses: "Fitness centers, medical clinics, discount retail, indoor recreation",
    considerations: "High ceilings valuable; create mezzanines; address vast parking",
    roiPotential: "20-40% rent increase with proper subdivision",
  },
  {
    original: "Strip Center Anchor",
    size: "15,000-50,000 SF",
    conversion: "Smaller retail + services",
    idealUses: "Restaurants, urgent care, fitness, specialty retail",
    considerations: "Maintain synergy with inline tenants; coordinate parking",
    roiPotential: "15-30% rent increase",
  },
  {
    original: "Single-Tenant Retail",
    size: "5,000-20,000 SF",
    conversion: "2-4 tenant spaces",
    idealUses: "QSR, services, medical, small retail",
    considerations: "Maximize street frontage; consider drive-thru potential",
    roiPotential: "25-50% rent increase",
  },
  {
    original: "Enclosed Mall Space",
    size: "Varies",
    conversion: "Entertainment, fitness, medical",
    idealUses: "Gyms, trampoline parks, urgent care, call centers",
    considerations: "Often requires exterior access; verify HVAC capacity",
    roiPotential: "Variable - depends heavily on location and execution",
  },
];

const criticalSystems = [
  {
    system: "Demising Walls",
    icon: Building2,
    description: "Walls separating tenant spaces must meet fire rating requirements and extend to the deck above for sound isolation.",
    requirements: [
      "1-hour fire rating typical for retail separations",
      "Extend to roof deck, not just ceiling",
      "Acoustic insulation (STC 50+ recommended)",
      "Proper firestopping at all penetrations",
      "Coordinate with sprinkler head placement",
    ],
    costRange: "$15-35/LF",
  },
  {
    system: "HVAC Separation",
    icon: Zap,
    description: "Each tenant typically needs independent HVAC with separate metering for utility billing.",
    requirements: [
      "Individual rooftop units or split systems",
      "Separate ductwork and returns",
      "Proper fresh air for each space",
      "Consider supplemental cooling for restaurants",
      "Energy code compliance for new systems",
    ],
    costRange: "$25-45/SF served",
  },
  {
    system: "Electrical Distribution",
    icon: Zap,
    description: "Subdividing requires separate electrical services or submetering for each tenant.",
    requirements: [
      "Individual meters or submeters",
      "Adequate panel capacity per tenant",
      "Separate circuits for high-demand uses",
      "Common area electrical provisions",
      "Emergency/exit lighting throughout",
    ],
    costRange: "$5,000-25,000/tenant",
  },
  {
    system: "Plumbing & Restrooms",
    icon: Wrench,
    description: "Each tenant space needs code-compliant restroom facilities based on occupancy type and load.",
    requirements: [
      "Minimum restroom count per IBC",
      "ADA-compliant facilities required",
      "Grease traps for food service tenants",
      "Adequate water pressure and drainage",
      "Separate water meters if required",
    ],
    costRange: "$15,000-40,000/restroom group",
  },
];

const codeRequirements = [
  {
    requirement: "Egress",
    description: "Each tenant space must have compliant means of egress based on occupancy load",
    tampaBay: "Florida Building Code with local amendments; two exits typically required over 49 occupants",
  },
  {
    requirement: "Fire Separation",
    description: "Demising walls must meet fire rating requirements; may need rated corridors",
    tampaBay: "1-hour minimum between tenants; 2-hour at mixed occupancies",
  },
  {
    requirement: "Accessibility",
    description: "ADA compliance for each tenant space and common areas",
    tampaBay: "Florida Accessibility Code (stricter than federal ADA in some areas)",
  },
  {
    requirement: "Sprinkler Modification",
    description: "New walls and ceilings may require sprinkler relocation/addition",
    tampaBay: "NFPA 13; local fire marshal review required",
  },
  {
    requirement: "Parking",
    description: "Total parking must support combined tenant uses",
    tampaBay: "Ratios vary: retail 4/1,000; restaurant 10/1,000; medical 5/1,000",
  },
  {
    requirement: "Signage",
    description: "Sign code compliance for multiple tenant identification",
    tampaBay: "Varies by jurisdiction; master sign criteria often required",
  },
];

const conversionCosts = [
  { category: "Demising Walls & Structure", range: "$20-40/SF", notes: "Fire-rated construction, deck-to-deck" },
  { category: "HVAC Systems", range: "$25-45/SF", notes: "New RTUs or splits per tenant" },
  { category: "Electrical", range: "$8-15/SF", notes: "Service separation, metering, distribution" },
  { category: "Plumbing & Restrooms", range: "$10-20/SF", notes: "New restroom facilities, grease traps" },
  { category: "Sprinkler Modifications", range: "$3-8/SF", notes: "Head relocation, new coverage" },
  { category: "Storefront & Entries", range: "$200-400/LF", notes: "New entrances for each tenant" },
  { category: "Common Area", range: "$50-100/SF", notes: "If shared corridors or amenities created" },
  { category: "Site Work", range: "$5-15/SF", notes: "Parking restriping, new sidewalks, signage" },
];

const processSteps = [
  {
    step: 1,
    phase: "Feasibility Analysis",
    duration: "2-4 weeks",
    activities: [
      "Market analysis for tenant demand",
      "Building assessment (structure, systems, condition)",
      "Zoning verification and parking analysis",
      "Preliminary layout options",
      "Pro forma development with construction costs",
    ],
  },
  {
    step: 2,
    phase: "Design Development",
    duration: "4-8 weeks",
    activities: [
      "Architectural design with tenant mix in mind",
      "MEP engineering for system separation",
      "Code review and life safety analysis",
      "Utility coordination",
      "Cost estimating and value engineering",
    ],
  },
  {
    step: 3,
    phase: "Permitting",
    duration: "4-8 weeks",
    activities: [
      "Building permit application",
      "Fire marshal review",
      "Utility company coordination",
      "Any required zoning approvals",
      "ADA/accessibility review",
    ],
  },
  {
    step: 4,
    phase: "Shell Construction",
    duration: "8-16 weeks",
    activities: [
      "Demising wall construction",
      "HVAC installation",
      "Electrical service separation",
      "Plumbing rough-in",
      "Sprinkler modifications",
    ],
  },
  {
    step: 5,
    phase: "Tenant Buildout",
    duration: "4-12 weeks per tenant",
    activities: [
      "Individual tenant improvements",
      "Storefront installation",
      "Final MEP connections",
      "Finishes and fixtures",
      "Inspections and CO",
    ],
  },
];

const tampaMarketData = [
  {
    metric: "Retail Vacancy Rate",
    value: "4-6%",
    insight: "Low vacancy supports conversion ROI—smaller spaces lease faster",
  },
  {
    metric: "Average Retail Rent",
    value: "$22-35/SF NNN",
    insight: "Subdivided spaces command 15-30% premium over large format",
  },
  {
    metric: "Strong Conversion Corridors",
    value: "Multiple",
    insight: "Dale Mabry, US 19, Brandon, Wesley Chapel seeing active conversions",
  },
  {
    metric: "Tenant Demand Drivers",
    value: "Services, Medical, QSR",
    insight: "Medical, fitness, restaurants driving small-format retail demand",
  },
];

const faqs = [
  {
    question: "How much does it cost to convert a retail building to multi-tenant in Tampa?",
    answer: "Retail-to-multi-tenant conversion costs in Tampa Bay typically range from $75-150 per square foot for the shell conversion (demising walls, HVAC separation, electrical/plumbing, sprinkler modifications). A 20,000 SF conversion might cost $1.5-3M for shell work. Individual tenant buildouts add $50-150/SF depending on use. The investment usually increases achievable rent by 20-40%, often justifying the expense within 3-5 years. Costs vary significantly based on building condition, required utility upgrades, and the complexity of code compliance.",
  },
  {
    question: "What zoning approvals are needed for retail conversion in Tampa Bay?",
    answer: "Most retail-to-retail subdivisions don't require zoning changes since the use category remains the same. However, you may need: site plan modification if adding entrances or changing parking; sign variance for multiple tenant signs; parking calculation verification to ensure compliance with combined uses. If adding non-retail uses (medical, fitness), verify they're permitted in the zoning district. Some jurisdictions require administrative review for change of use even within the same category. Always verify with local planning department early.",
  },
  {
    question: "How long does a retail conversion project take?",
    answer: "A typical retail conversion takes 6-12 months from design through shell completion. Timeline breakdown: Feasibility and design (2-3 months), permitting (1-2 months), shell construction (3-6 months). Tenant buildouts add 2-4 months each depending on complexity. The total timeline can extend to 12-18 months if significant utility upgrades or complex permitting is involved. Working with an experienced contractor who understands local permitting accelerates the process significantly.",
  },
  {
    question: "Should I convert shell and let tenants build out, or deliver turnkey spaces?",
    answer: "The best approach depends on your tenant strategy. Shell-only (providing demised space with utility stubouts) attracts credit tenants who want customization and typically provide their own TI allowance. It's faster to deliver and lower owner risk. Turnkey/spec buildout works well for smaller tenants in hot markets where speed-to-occupancy matters. Many owners do hybrid: spec buildout for smaller spaces (under 2,500 SF) and shell delivery for larger spaces. Consider your target tenant profile and local market conditions.",
  },
  {
    question: "What happens to the existing HVAC system when converting?",
    answer: "Existing large HVAC systems typically cannot serve subdivided spaces effectively. Standard approach is to: remove or abandon existing large RTUs; install new packaged units (2.5-7.5 ton typical) for each tenant space; provide dedicated thermostats and ductwork per tenant; install submetering or separate utility meters. This allows each tenant to control their environment and pay their own utilities—essential for NNN leases. The HVAC conversion often represents 25-30% of total shell conversion cost.",
  },
  {
    question: "What tenant uses work best in converted retail spaces?",
    answer: "Best performers in Tampa Bay converted retail include: medical/dental offices (strong demand, good rents, lower TI than new construction); fitness studios and gyms (benefit from high ceilings); quick-service restaurants (if grease trap and ventilation provided); personal services (salons, spas, tutoring); pet services (daycare, grooming, vet); entertainment (escape rooms, ax throwing). Avoid uses requiring extensive infrastructure changes unless the premium rent justifies the investment. The ideal tenant mix creates synergy and drives traffic.",
  },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Converting Retail Buildings to Multi-Tenant Spaces in Tampa Bay"
        description="Expert guide to retail building conversion including costs, code requirements, construction process, and ROI analysis for Tampa Bay property owners."
        datePublished="2024-01-15"
        dateModified="2025-01-15"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Retail building conversion in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Converting Retail Buildings into Multi-Tenant Spaces
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Transform underperforming single-tenant retail into profitable multi-tenant properties. Expert guidance on construction, codes, costs, and maximizing ROI in Tampa Bay.
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

      {/* Intro */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-xl text-gray-600 mb-6">
              The retail landscape has shifted dramatically. Big box vacancies, changing consumer habits, and the rise of e-commerce have left property owners with underperforming single-tenant retail buildings. But these challenges create opportunities.
            </p>
            <p className="text-gray-600 mb-6">
              Converting large-format retail into multi-tenant spaces can dramatically increase property value and income. In Tampa Bay, subdivided retail spaces often command 20-40% higher rent per square foot than the same building leased to a single tenant—and they lease faster to a deeper pool of tenants.
            </p>
            <p className="text-gray-600 mb-8">
              This guide covers everything property owners and investors need to know about retail conversion: when it makes sense, what's involved, realistic costs and timelines, and how to maximize return on investment. Whether you own a vacant big box, an underperforming strip center anchor, or any single-tenant retail building, understanding your conversion options is essential.
            </p>
          </div>
        </div>
      </section>

      {/* Conversion Types */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Retail Conversion Opportunities
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Different building types offer different conversion potential and tenant opportunities.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-4 py-4 text-left font-heading">Original Use</th>
                  <th className="px-4 py-4 text-center font-heading">Typical Size</th>
                  <th className="px-4 py-4 text-left font-heading">Ideal New Uses</th>
                  <th className="px-4 py-4 text-left font-heading">Key Considerations</th>
                  <th className="px-4 py-4 text-center font-heading">ROI Potential</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {conversionTypes.map((type, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-4 font-semibold text-brand-green-dark">{type.original}</td>
                    <td className="px-4 py-4 text-center text-gray-600">{type.size}</td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{type.idealUses}</td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{type.considerations}</td>
                    <td className="px-4 py-4 text-center text-brand-green font-semibold">{type.roiPotential}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Critical Systems */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Critical Construction Systems
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Converting single-tenant to multi-tenant requires thoughtful separation of building systems.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {criticalSystems.map((system, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-green-light rounded-full flex items-center justify-center">
                      <system.icon className="w-6 h-6 text-brand-green-dark" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-green-dark font-heading">{system.system}</h3>
                  </div>
                  <span className="text-sm font-semibold text-brand-green bg-brand-green-light/50 px-3 py-1 rounded-full">
                    {system.costRange}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{system.description}</p>
                <ul className="space-y-2">
                  {system.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Requirements */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4 font-heading">
            Code & Regulatory Requirements
          </h2>
          <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto">
            Multi-tenant conversion triggers code compliance reviews across multiple building systems.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white/10 rounded-xl overflow-hidden">
              <thead className="bg-white/20">
                <tr>
                  <th className="px-6 py-4 text-left font-heading">Requirement</th>
                  <th className="px-6 py-4 text-left font-heading">Description</th>
                  <th className="px-6 py-4 text-left font-heading">Tampa Bay Specifics</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {codeRequirements.map((req, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 font-semibold">{req.requirement}</td>
                    <td className="px-6 py-4 text-white/80 text-sm">{req.description}</td>
                    <td className="px-6 py-4 text-white/80 text-sm">{req.tampaBay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Conversion Cost Breakdown
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Budget guidance for retail-to-multi-tenant conversion in Tampa Bay.
          </p>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-heading">Cost Category</th>
                  <th className="px-6 py-4 text-center font-heading">Typical Range</th>
                  <th className="px-6 py-4 text-left font-heading">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {conversionCosts.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-700">{item.category}</td>
                    <td className="px-6 py-4 text-center text-brand-green font-semibold">{item.range}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 max-w-4xl mx-auto bg-brand-green-light/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-brand-green-dark mb-2">Sample Project Budget</h3>
            <p className="text-gray-600 mb-4">20,000 SF single-tenant retail → 4-tenant conversion</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600"><strong>Shell Conversion:</strong> $100-120/SF = $2.0-2.4M</p>
                <p className="text-sm text-gray-600"><strong>Soft Costs (15%):</strong> $300-360K</p>
              </div>
              <div>
                <p className="text-sm text-gray-600"><strong>Total Investment:</strong> $2.3-2.8M</p>
                <p className="text-sm text-brand-green"><strong>Expected Rent Premium:</strong> 25-35%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Conversion Process
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From feasibility through tenant occupancy—a structured approach to successful conversion.
          </p>
          <div className="space-y-6 max-w-4xl mx-auto">
            {processSteps.map((step) => (
              <div key={step.step} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-brand-green">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-brand-green-dark">{step.phase}</h3>
                      <span className="text-sm font-medium text-brand-green bg-brand-green-light/30 px-3 py-1 rounded-full flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {step.duration}
                      </span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {step.activities.map((activity, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{activity}</span>
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

      {/* Tampa Market Data */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Tampa Bay Retail Market Insights
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Why the Tampa Bay market favors multi-tenant retail conversion right now.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {tampaMarketData.map((data, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-brand-green mb-2">{data.value}</p>
                <p className="text-sm font-semibold text-brand-green-dark mb-2">{data.metric}</p>
                <p className="text-xs text-gray-600">{data.insight}</p>
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
            title="Related Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Convert Your Retail Property?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists has converted retail properties throughout Tampa Bay. Let us evaluate your building and develop a conversion strategy that maximizes value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Consultation
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
