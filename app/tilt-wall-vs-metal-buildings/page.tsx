import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  CheckCircle,
  Scale,
  Warehouse,
  ArrowRight,
  Phone,
  HelpCircle,
  Clock,
  DollarSign,
  Shield,
  Zap,
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
  title: "Tilt-Wall vs Metal Buildings Tampa | FCS",
  description:
    "Compare tilt-wall concrete and pre-engineered metal buildings for industrial and warehouse construction in Tampa Bay. Cost, durability, and timeline analysis.",
  keywords:
    "tilt-wall construction Tampa, pre-engineered metal buildings Florida, industrial construction comparison, warehouse construction Tampa Bay, tilt-up concrete",
};

const comparison = [
  {
    factor: "Initial Cost (per SF)",
    tiltWall: "$85-120",
    metalBuilding: "$65-95",
    winner: "Metal",
    notes: "Metal is typically 15-25% less expensive initially",
  },
  {
    factor: "Construction Speed",
    tiltWall: "6-10 months",
    metalBuilding: "4-7 months",
    winner: "Metal",
    notes: "Metal components pre-fabricated; faster erection",
  },
  {
    factor: "Durability",
    tiltWall: "50+ years",
    metalBuilding: "30-40 years",
    winner: "Tilt-Wall",
    notes: "Concrete resists impact, corrosion, and weathering",
  },
  {
    factor: "Hurricane Resistance",
    tiltWall: "Excellent",
    metalBuilding: "Good",
    winner: "Tilt-Wall",
    notes: "Critical in Tampa Bay; tilt-wall meets highest wind codes easily",
  },
  {
    factor: "Fire Rating",
    tiltWall: "Up to 4-hour",
    metalBuilding: "Typically 1-hour",
    winner: "Tilt-Wall",
    notes: "Important for insurance and code compliance",
  },
  {
    factor: "Maintenance Costs",
    tiltWall: "Low",
    metalBuilding: "Moderate",
    winner: "Tilt-Wall",
    notes: "Metal requires regular painting/coating",
  },
  {
    factor: "Flexibility for Changes",
    tiltWall: "Limited",
    metalBuilding: "Good",
    winner: "Metal",
    notes: "Easier to add doors, modify structure later",
  },
  {
    factor: "Clear Spans",
    tiltWall: "Up to 100+ feet",
    metalBuilding: "Up to 200+ feet",
    winner: "Metal",
    notes: "Metal can achieve longer spans without columns",
  },
  {
    factor: "Appearance/Image",
    tiltWall: "Premium",
    metalBuilding: "Functional",
    winner: "Tilt-Wall",
    notes: "Tilt-wall offers architectural flexibility",
  },
  {
    factor: "Resale Value",
    tiltWall: "Higher",
    metalBuilding: "Lower",
    winner: "Tilt-Wall",
    notes: "Concrete buildings command premium rents/values",
  },
];

const tiltWallAdvantages = [
  {
    advantage: "Superior Hurricane Performance",
    detail: "Solid concrete panels easily meet Florida's stringent wind load requirements. Essential for Tampa Bay's hurricane exposure.",
    relevance: "Critical for coastal Tampa Bay locations",
  },
  {
    advantage: "Lower Insurance Costs",
    detail: "Non-combustible concrete construction qualifies for lower property insurance premiums, especially for fire coverage.",
    relevance: "10-30% lower property insurance premiums",
  },
  {
    advantage: "Minimal Maintenance",
    detail: "Concrete doesn't rust, doesn't need repainting, and resists impact damage from forklifts and loading operations.",
    relevance: "Lower lifetime cost despite higher initial investment",
  },
  {
    advantage: "Better Tenant Appeal",
    detail: "Tilt-wall buildings command higher rents and attract quality tenants. Perceived as more substantial and permanent.",
    relevance: "5-15% higher lease rates in competitive markets",
  },
  {
    advantage: "Thermal Mass Benefits",
    detail: "Concrete's thermal mass reduces HVAC energy consumption by moderating temperature swings.",
    relevance: "10-20% energy savings in climate-controlled buildings",
  },
  {
    advantage: "Sound Attenuation",
    detail: "Excellent noise reduction for neighbors and for internal operations requiring quiet environments.",
    relevance: "Important for mixed-use developments or near residential",
  },
];

const metalBuildingAdvantages = [
  {
    advantage: "Lower Initial Cost",
    detail: "Pre-engineered components and faster erection reduce total construction cost by 15-25%.",
    relevance: "Budget-conscious projects or speculative development",
  },
  {
    advantage: "Faster Construction",
    detail: "Factory-fabricated components can be erected quickly. Typical savings of 2-4 months vs. tilt-wall.",
    relevance: "Time-sensitive projects; faster revenue generation",
  },
  {
    advantage: "Longer Clear Spans",
    detail: "Metal buildings can achieve 200+ foot clear spans, eliminating interior columns for maximum flexibility.",
    relevance: "Large distribution centers, aircraft hangars, manufacturing",
  },
  {
    advantage: "Easy Future Modifications",
    detail: "Adding doors, windows, or extending the building is straightforward with metal construction.",
    relevance: "Businesses expecting growth or changing needs",
  },
  {
    advantage: "Lighter Foundation Requirements",
    detail: "Metal buildings weigh less, often allowing simpler, less expensive foundations.",
    relevance: "Sites with challenging soil conditions",
  },
  {
    advantage: "Design Flexibility",
    detail: "Wide variety of colors, profiles, and accessories available from manufacturers.",
    relevance: "Corporate branding; aesthetic requirements",
  },
];

const applicationGuide = [
  {
    application: "Distribution/Logistics Center",
    recommendation: "Tilt-Wall",
    reasoning: "High ceiling heights, dock doors, long-term institutional ownership, tenant appeal",
  },
  {
    application: "Manufacturing Facility",
    recommendation: "Depends",
    reasoning: "Tilt-wall for heavy industry; metal for light manufacturing needing flexibility",
  },
  {
    application: "Flex/Industrial Condo",
    recommendation: "Tilt-Wall",
    reasoning: "Higher resale value, better appearance, lower maintenance for multiple owners",
  },
  {
    application: "Agricultural Building",
    recommendation: "Metal",
    reasoning: "Cost-sensitive; clear spans; often temporary or utilitarian use",
  },
  {
    application: "Aircraft Hangar",
    recommendation: "Metal",
    reasoning: "Extreme clear span requirements; door systems designed for metal",
  },
  {
    application: "Cold Storage",
    recommendation: "Tilt-Wall",
    reasoning: "Superior insulation properties; vapor barrier continuity; food safety",
  },
  {
    application: "Self-Storage",
    recommendation: "Mixed",
    reasoning: "Climate-controlled: tilt-wall; drive-up units: metal acceptable",
  },
  {
    application: "Speculative Industrial",
    recommendation: "Tilt-Wall",
    reasoning: "Better marketability; attracts quality tenants; higher NOI",
  },
];

const costBreakdown = [
  {
    component: "Site Work & Foundation",
    tiltWall: "$12-18/SF",
    metalBuilding: "$10-15/SF",
    notes: "Metal buildings often need less foundation",
  },
  {
    component: "Structural Shell",
    tiltWall: "$45-65/SF",
    metalBuilding: "$30-45/SF",
    notes: "Biggest cost difference between systems",
  },
  {
    component: "Roofing System",
    tiltWall: "$8-12/SF",
    metalBuilding: "$8-12/SF",
    notes: "Similar costs; often same roof on both",
  },
  {
    component: "MEP Systems",
    tiltWall: "$15-25/SF",
    metalBuilding: "$12-20/SF",
    notes: "Varies more by use than building type",
  },
  {
    component: "Interior Finish",
    tiltWall: "$5-10/SF",
    metalBuilding: "$5-10/SF",
    notes: "Depends entirely on tenant requirements",
  },
];

const faqs = [
  {
    question: "Which building type is better for Florida hurricanes?",
    answer:
      "Tilt-wall concrete construction offers superior hurricane performance. Solid concrete panels easily meet Florida's stringent wind load requirements (up to 175+ mph in Tampa Bay) and resist wind-borne debris impact. Metal buildings can be engineered for hurricane zones but typically require heavier gauge steel and additional bracing, reducing the cost advantage. For coastal Tampa Bay, tilt-wall provides peace of mind.",
  },
  {
    question: "How much cheaper are metal buildings compared to tilt-wall?",
    answer:
      "Metal buildings typically cost 15-25% less than tilt-wall construction initially—roughly $65-95/SF versus $85-120/SF for the structural shell. However, lifetime cost analysis often favors tilt-wall due to lower maintenance (no repainting), lower insurance premiums, and higher resale/rental values. For a 50,000 SF building, initial savings might be $500K-$1M, but 20-year total cost may favor tilt-wall.",
  },
  {
    question: "Which building type constructs faster?",
    answer:
      "Metal buildings typically construct 2-4 months faster than tilt-wall. Metal components are pre-fabricated and can be erected quickly once delivered. Tilt-wall requires on-site panel casting, curing time, and crane operations for erection. A typical 50,000 SF metal building might take 4-6 months; tilt-wall 7-10 months. Lead time for metal building fabrication (8-12 weeks) must be factored in.",
  },
  {
    question: "Can you combine tilt-wall and metal construction?",
    answer:
      "Yes, hybrid construction is common. A typical approach uses tilt-wall panels for the main walls (for durability, appearance, and hurricane resistance) with a metal deck roof system (for cost and span efficiency). This captures benefits of both systems. Another approach uses tilt-wall for office/showroom areas and metal for warehouse portions.",
  },
  {
    question: "Which building type has better resale value?",
    answer:
      "Tilt-wall buildings consistently command higher values in the industrial real estate market. Institutional investors and REITs prefer concrete construction. In Tampa Bay, Class A industrial product is predominantly tilt-wall. Metal buildings may trade at 10-20% discount for comparable locations and specifications. For owner-occupied facilities, this may matter less than for investment properties.",
  },
  {
    question: "What clear spans can each building type achieve?",
    answer:
      "Metal buildings can achieve clear spans of 200+ feet, making them ideal for large distribution centers and hangars. Tilt-wall construction typically spans 80-120 feet economically, though longer spans are possible with specialized systems. For typical warehouse/industrial use (40-80 foot spans), both systems work well. Choose metal when extremely long spans are required.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tilt Wall Vs Metal Buildings", href: "/tilt-wall-vs-metal-buildings/" },
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

export default function TiltWallVsMetalBuildingsPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Industrial Construction" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Industrial Building Construction"
        serviceDescription="Expert industrial and warehouse construction in Tampa Bay. Tilt-wall concrete and pre-engineered metal building specialists for distribution centers, manufacturing, and flex space."
        city="Tampa"
        minPrice="1000000"
      />

      
      <ArticleSchema
        headline="Tilt-Wall vs Metal Buildings | Industrial Construction Tampa | FCS"
        description="Compare tilt-wall concrete and pre-engineered metal buildings for industrial and warehouse construction in Tampa Bay. Cost, durability, and timeline analysis."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/tilt-wall-vs-metal-buildings/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Commercial", href: "/commercial/" },
          { name: "Industrial Construction", href: "/commercial/industrial-construction/" },
          { name: "Tilt-Wall vs Metal", href: "/tilt-wall-vs-metal-buildings/" },
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
              silo="commercial"
              customHubTitle="Industrial Construction"
              customHubHref="/commercial/industrial-construction/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Tilt-Wall vs Pre-Engineered Metal Buildings
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Choosing the right structural system for your industrial project.
              Compare cost, durability, speed, and hurricane performance for Tampa
              Bay construction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Discuss Your Project
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

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Side-by-Side Comparison
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            How tilt-wall concrete and pre-engineered metal buildings compare
            across key factors.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="px-4 py-3 text-left font-semibold">Factor</th>
                  <th className="px-4 py-3 text-center font-semibold">Tilt-Wall</th>
                  <th className="px-4 py-3 text-center font-semibold">Metal Building</th>
                  <th className="px-4 py-3 text-center font-semibold">Advantage</th>
                  <th className="px-4 py-3 text-left font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr
                    key={row.factor}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-semibold text-brand-green-dark">
                      {row.factor}
                    </td>
                    <td className="px-4 py-3 text-center">{row.tiltWall}</td>
                    <td className="px-4 py-3 text-center">{row.metalBuilding}</td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          row.winner === "Tilt-Wall"
                            ? "bg-blue-100 text-blue-800"
                            : row.winner === "Metal"
                            ? "bg-orange-100 text-orange-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {row.winner}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Advantages Side by Side */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-12 text-center font-heading">
            When to Choose Each System
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tilt-Wall */}
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-brand-green-dark">
                  Choose Tilt-Wall When...
                </h3>
              </div>
              <ul className="space-y-4">
                {tiltWallAdvantages.map((item) => (
                  <li key={item.advantage}>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-brand-green-dark">
                          {item.advantage}
                        </h4>
                        <p className="text-gray-600 text-sm">{item.detail}</p>
                        <p className="text-blue-600 text-xs mt-1">{item.relevance}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metal Building */}
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Warehouse className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-brand-green-dark">
                  Choose Metal When...
                </h3>
              </div>
              <ul className="space-y-4">
                {metalBuildingAdvantages.map((item) => (
                  <li key={item.advantage}>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-brand-green-dark">
                          {item.advantage}
                        </h4>
                        <p className="text-gray-600 text-sm">{item.detail}</p>
                        <p className="text-orange-600 text-xs mt-1">{item.relevance}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Guide */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Recommendations by Building Type
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Which structural system typically works best for common industrial
            applications.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationGuide.map((app) => (
              <div key={app.application} className="card p-5">
                <h3 className="font-bold text-brand-green-dark mb-2">
                  {app.application}
                </h3>
                <div className="mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      app.recommendation === "Tilt-Wall"
                        ? "bg-blue-100 text-blue-800"
                        : app.recommendation === "Metal"
                        ? "bg-orange-100 text-orange-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {app.recommendation}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{app.reasoning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Cost Breakdown by Component
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Where the cost differences come from in tilt-wall vs. metal construction.
          </p>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="px-4 py-3 text-left font-semibold">Component</th>
                  <th className="px-4 py-3 text-center font-semibold">Tilt-Wall</th>
                  <th className="px-4 py-3 text-center font-semibold">Metal</th>
                  <th className="px-4 py-3 text-left font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {costBreakdown.map((row, index) => (
                  <tr
                    key={row.component}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 font-semibold text-brand-green-dark">
                      {row.component}
                    </td>
                    <td className="px-4 py-3 text-center">{row.tiltWall}</td>
                    <td className="px-4 py-3 text-center">{row.metalBuilding}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{row.notes}</td>
                  </tr>
                ))}
                <tr className="bg-brand-green-light font-semibold">
                  <td className="px-4 py-3 text-brand-green-dark">TOTAL (Typical)</td>
                  <td className="px-4 py-3 text-center">$85-130/SF</td>
                  <td className="px-4 py-3 text-center">$65-100/SF</td>
                  <td className="px-4 py-3 text-gray-700 text-sm">Excludes land</td>
                </tr>
              </tbody>
            </table>
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
              href="/commercial/industrial-construction/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Industrial Construction Services
              </h3>
              <p className="text-gray-600 text-sm">
                Full-service industrial and warehouse construction in Tampa Bay.
              </p>
            </Link>
            <Link
              href="/cpm-scheduling-prevent-delays/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                CPM Scheduling
              </h3>
              <p className="text-gray-600 text-sm">
                Keep your industrial project on schedule with expert planning.
              </p>
            </Link>
            <Link
              href="/commercial-construction/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Commercial Construction
              </h3>
              <p className="text-gray-600 text-sm">
                Large-scale commercial projects throughout Tampa Bay.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Planning an Industrial Building Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            FCS has experience with both tilt-wall and metal building construction.
            We can help you evaluate the right system for your project, budget, and
            timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Discuss Your Project
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