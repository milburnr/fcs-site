import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { Phone, CheckCircle, Store, ShoppingBag, Eye, Lightbulb, HelpCircle, DollarSign, Users, ArrowRight, Sparkles } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Retail Store Design Ideas That Boost Sales | Tampa Commercial Construction",
  description: "Effective retail store design ideas to increase sales. Expert guide to store layouts, visual merchandising, customer flow, and sales-driving construction elements in Tampa Bay.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Retail Store Design Ideas", href: "/boost-sales-with-effective-retail-store-design-ideas/" },
];

const internalLinks = [
  { href: "/boost-your-business-with-an-attractive-retail-space/", label: "Attractive Retail Space" },
  { href: "/converting-retail-building-into-multi-tenant-space/", label: "Retail Conversion" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const layoutStrategies = [
  {
    layout: "Grid Layout",
    description: "Parallel aisles with products on both sides",
    bestFor: "Grocery, pharmacy, convenience, discount retail",
    advantages: "Maximizes merchandise exposure; easy navigation; efficient stocking",
    salesImpact: "High product visibility; predictable customer path",
    considerations: "Can feel institutional; limited discovery opportunities",
  },
  {
    layout: "Racetrack/Loop",
    description: "Main path circles the store perimeter with departments inside",
    bestFor: "Department stores, large specialty retail, furniture",
    advantages: "Exposes customers to all departments; controlled flow",
    salesImpact: "Increases dwell time; exposure to impulse items",
    considerations: "Requires clear signage; can be confusing if poorly executed",
  },
  {
    layout: "Free-Flow/Boutique",
    description: "Organic layout with displays creating natural paths",
    bestFor: "Fashion, boutiques, specialty retail, experiential stores",
    advantages: "Encourages exploration; creates unique experience; flexible",
    salesImpact: "Higher engagement; discovery-based purchasing",
    considerations: "May reduce traffic to back areas; harder to navigate",
  },
  {
    layout: "Angular/Geometric",
    description: "Angled fixtures and walls creating dynamic sightlines",
    bestFor: "High-end retail, jewelry, electronics, premium brands",
    advantages: "Creates visual interest; guides attention; feels modern",
    salesImpact: "Draws eyes to featured products; premium perception",
    considerations: "Less efficient use of space; higher fixture costs",
  },
  {
    layout: "Zone/Shop-in-Shop",
    description: "Distinct branded areas within larger store",
    bestFor: "Multi-brand retail, department stores, category killers",
    advantages: "Brand storytelling; varied experiences; partnership opportunities",
    salesImpact: "Deeper brand engagement; destination shopping",
    considerations: "Complex to coordinate; potential inconsistency",
  },
];

const designElements = [
  {
    element: "Decompression Zone",
    description: "First 5-15 feet inside the entrance where customers transition",
    impact: "Customers moving too fast miss displays—this zone slows them down",
    implementation: "Keep merchandise minimal; create visual pause; avoid signage overload",
    cost: "Planning-based; minimal additional cost",
  },
  {
    element: "Power Walls",
    description: "First wall customers see upon entering (usually right side)",
    impact: "Sets tone for store; highest-impact merchandise location",
    implementation: "Feature new arrivals, hero products, or seasonal highlights",
    cost: "$50-150/SF for premium wall treatment",
  },
  {
    element: "Speed Bumps",
    description: "Display elements that slow customers and draw attention",
    impact: "Interrupts autopilot shopping; creates engagement opportunities",
    implementation: "Center displays, promotional tables, interactive elements",
    cost: "$500-5,000 per fixture",
  },
  {
    element: "Cash Wrap Area",
    description: "Checkout zone design that maximizes impulse purchases",
    impact: "Last opportunity for add-on sales; brand impression on exit",
    implementation: "Queue merchandising, featured items, brand messaging",
    cost: "$10,000-50,000 for custom cash wrap",
  },
  {
    element: "Focal Points",
    description: "Visual destinations that draw customers deeper into store",
    impact: "Creates traffic throughout the space; extends shopping journey",
    implementation: "Dramatic displays, color blocks, lighting features",
    cost: "$2,000-15,000 per focal point",
  },
];

const lightingStrategies = [
  {
    type: "Ambient Lighting",
    purpose: "General illumination for the entire space",
    level: "30-50 footcandles typical",
    fixtures: "Recessed, pendant, or track systems",
    impact: "Sets overall mood; affects color perception",
  },
  {
    type: "Accent Lighting",
    purpose: "Highlight specific products or displays",
    level: "3-5x ambient levels",
    fixtures: "Track heads, spotlights, adjustable fixtures",
    impact: "Draws attention; creates hierarchy; adds drama",
  },
  {
    type: "Task Lighting",
    purpose: "Functional light for specific activities",
    level: "Varies by task",
    fixtures: "Under-shelf, fitting room, cash wrap specific",
    impact: "Improves product evaluation; customer comfort",
  },
  {
    type: "Decorative Lighting",
    purpose: "Aesthetic element and brand expression",
    level: "Varies",
    fixtures: "Pendants, chandeliers, neon, architectural",
    impact: "Brand identity; Instagram-worthy moments; atmosphere",
  },
];

const customerFlowPrinciples = [
  {
    principle: "Right-Turn Tendency",
    explanation: "Most customers turn right upon entering",
    application: "Place new arrivals, promotions, and high-margin items to the right",
  },
  {
    principle: "Counter-Clockwise Shopping",
    explanation: "Most shoppers naturally move counter-clockwise",
    application: "Design main path flowing counter-clockwise; place destination items at back",
  },
  {
    principle: "Eye-Level = Buy-Level",
    explanation: "Products at eye level sell best; below knee level sells worst",
    application: "Reserve eye-level for high-margin items; use lower levels for bulk/discount",
  },
  {
    principle: "Transition Zones",
    explanation: "Customers need moments to process as they move between areas",
    application: "Create clear department transitions; avoid placing key items at boundaries",
  },
  {
    principle: "Bounce-Back Effect",
    explanation: "Customers often reverse direction at store end",
    application: "Create reasons to continue; place anchor items at rear",
  },
];

const costBreakdown = [
  { category: "Basic Retail Buildout", range: "$75-150/SF", notes: "Standard finishes, basic lighting, fixture allowance" },
  { category: "Mid-Range Retail", range: "$150-250/SF", notes: "Custom millwork, upgraded lighting, specialty fixtures" },
  { category: "High-End/Boutique", range: "$250-500+/SF", notes: "Premium materials, custom everything, experiential elements" },
  { category: "Storefront System", range: "$100-300/LF", notes: "Glass and aluminum entrance system" },
  { category: "Custom Fixtures", range: "$200-1,000/LF", notes: "Display tables, wall systems, specialty units" },
  { category: "Lighting Design", range: "$15-40/SF", notes: "Complete lighting package with controls" },
  { category: "Flooring", range: "$8-30/SF", notes: "Polished concrete to premium tile/wood" },
  { category: "Fitting Rooms", range: "$8,000-25,000 each", notes: "Basic to premium with lighting/mirrors" },
];

const tampaRetailTrends = [
  {
    trend: "Experiential Retail",
    description: "Stores as destinations, not just transactions",
    examples: "Product demonstrations, classes, events, photo opportunities",
    investment: "Allocate 10-20% of floor space to experience vs. merchandise",
  },
  {
    trend: "Omnichannel Integration",
    description: "Seamless connection between online and in-store",
    examples: "BOPIS stations, ship-from-store, digital endless aisle kiosks",
    investment: "$5,000-25,000 for technology integration",
  },
  {
    trend: "Sustainable Design",
    description: "Eco-friendly materials and visible sustainability commitment",
    examples: "Reclaimed materials, living walls, energy displays",
    investment: "May add 5-15% to construction; resonates with Tampa consumers",
  },
  {
    trend: "Flexible Fixtures",
    description: "Adaptable displays that can be reconfigured easily",
    examples: "Modular wall systems, mobile gondolas, adjustable displays",
    investment: "10-20% premium over fixed fixtures; faster visual refreshes",
  },
];

const faqs = [
  {
    question: "What store layout produces the highest sales per square foot?",
    answer: "There's no universal answer—the best layout depends on your product, customer, and brand. However, research suggests: Grid layouts maximize sales for necessity shopping (grocery, pharmacy); Racetrack layouts increase exposure and impulse purchases in department stores; Free-flow works best for discovery-based retail where dwell time correlates with sales. The key is matching layout to shopping behavior. Fast-turn convenience needs efficiency; destination shopping needs exploration. We help Tampa retailers choose layouts based on their specific category and customer patterns.",
  },
  {
    question: "How important is lighting in retail sales?",
    answer: "Lighting is one of the most impactful—and often underinvested—elements of retail design. Studies show proper lighting can increase sales 10-30%. Key principles: Overall brightness affects energy and pace (brighter = faster shopping); Accent lighting creates focus and perceived value; Color temperature affects product appearance (warm for clothing, cool for electronics); Contrast between areas creates visual interest and guides traffic. Budget $15-40/SF for a professional retail lighting system—it's one of the highest-ROI investments.",
  },
  {
    question: "How do I balance merchandise density with customer experience?",
    answer: "The optimal density depends on your positioning. Discount retailers maximize density (less inventory = lost sales). Luxury retailers minimize density (crowded = cheap perception). Most retailers should aim for: 60-70% of floor space as selling floor; 30-40% for circulation, decompression, and experience; Sightlines of 15-20 feet minimum to key displays. The trend is toward lower density with more experience—but sales per square foot must justify the space cost. We model different densities during design to project impacts.",
  },
  {
    question: "What is the decompression zone and why does it matter?",
    answer: "The decompression zone is the first 5-15 feet inside your entrance. Customers entering from outside are adjusting—temperature, lighting, pace. They typically don't 'see' merchandise in this zone. Placing promotional items here wastes prime real estate. Instead: Keep it minimal and inviting; Allow visual pause; Create a 'landing pad' experience. The decompression zone sets expectations—make it feel like your brand. Once customers decompress, they're ready to engage.",
  },
  {
    question: "How much should I budget for a retail buildout in Tampa?",
    answer: "Tampa retail buildout costs typically range: Basic retail (convenience, discount): $75-125/SF; Standard retail (apparel, specialty): $125-200/SF; Premium/boutique: $200-350/SF; High-end/flagship: $350-500+/SF. These include construction, fixtures, and lighting but not merchandise. Second-generation space (previous retail tenant) saves 15-30% vs. shell buildout. Key cost drivers: storefront complexity, fixture customization, flooring materials, and lighting sophistication. We provide detailed budgets during preconstruction.",
  },
  {
    question: "What technology should I incorporate into my retail design?",
    answer: "Essential technology for modern retail: Digital signage ($2,000-10,000 per display); BOPIS/pickup area with order management; Adequate power and data for mobile POS; Strong WiFi for staff and customers; Security/loss prevention systems. Optional based on concept: Interactive displays and kiosks; Endless aisle touchscreens; In-store analytics (traffic counting, heat mapping); AR/VR experiences. Design electrical and data infrastructure for current needs plus 50% growth—retrofitting is expensive.",
  },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Boost Sales with Effective Retail Store Design Ideas"
        description="Effective retail store design ideas that drive sales. Expert guide to layouts, lighting, customer flow, and construction elements for Tampa Bay retail."
        datePublished="2024-01-15"
        dateModified="2025-01-15"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Retail store design in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Boost Sales with Effective Retail Store Design Ideas
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Your store's physical design directly impacts sales. Strategic layouts, lighting, and customer flow turn browsers into buyers—here's how to design for revenue.
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
              In retail, design is strategy. Every layout decision, lighting choice, and fixture placement influences whether customers browse or buy, linger or leave. The best retail design doesn't just look good—it performs.
            </p>
            <p className="text-gray-600 mb-6">
              Tampa Bay's competitive retail market demands that stores work harder. Whether you're opening a new location, refreshing an existing store, or repositioning your brand, understanding how physical design drives sales helps you invest wisely and outperform competitors.
            </p>
            <p className="text-gray-600 mb-8">
              This guide covers proven retail design strategies: store layouts and when to use each, critical design elements that influence behavior, lighting strategies that sell, customer flow principles backed by research, and realistic costs for Tampa Bay construction. Apply these principles to create stores that convert traffic into transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Layout Strategies */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Store Layout Strategies
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            The right layout depends on your products, customers, and brand positioning.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-4 py-4 text-left font-heading">Layout Type</th>
                  <th className="px-4 py-4 text-left font-heading">Best For</th>
                  <th className="px-4 py-4 text-left font-heading">Advantages</th>
                  <th className="px-4 py-4 text-left font-heading">Sales Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {layoutStrategies.map((layout, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-4">
                      <span className="font-semibold text-brand-green-dark block">{layout.layout}</span>
                      <span className="text-xs text-gray-500">{layout.description}</span>
                    </td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{layout.bestFor}</td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{layout.advantages}</td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{layout.salesImpact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Design Elements */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Sales-Driving Design Elements
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Strategic design elements that influence customer behavior and purchasing.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designElements.map((element, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-8 h-8 text-brand-gold" />
                  <h3 className="text-lg font-bold text-brand-green-dark">{element.element}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{element.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="bg-brand-green-light/30 rounded-lg p-2">
                    <p className="text-xs text-brand-green-dark"><strong>Impact:</strong> {element.impact}</p>
                  </div>
                  <div className="bg-white rounded-lg p-2">
                    <p className="text-xs text-gray-700"><strong>Implementation:</strong> {element.implementation}</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-brand-green">{element.cost}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Flow */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4 font-heading">
            Customer Flow Principles
          </h2>
          <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto">
            Research-backed principles that explain how customers move through retail spaces.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customerFlowPrinciples.map((item, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">{item.principle}</h3>
                <p className="text-white/80 text-sm mb-3">{item.explanation}</p>
                <div className="bg-brand-gold/20 rounded-lg p-3">
                  <p className="text-sm"><strong>Application:</strong> {item.application}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lighting Strategies */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Retail Lighting Strategies
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Lighting creates atmosphere, guides attention, and dramatically impacts product perception and sales.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {lightingStrategies.map((lighting, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-8 h-8 text-brand-gold" />
                  <h3 className="text-lg font-bold text-brand-green-dark">{lighting.type}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{lighting.purpose}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Level:</span>
                    <span className="font-medium text-gray-700">{lighting.level}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Fixtures:</span>
                    <span className="font-medium text-gray-700">{lighting.fixtures}</span>
                  </div>
                </div>
                <div className="mt-4 bg-brand-green-light/30 rounded-lg p-3">
                  <p className="text-xs text-brand-green-dark"><strong>Sales Impact:</strong> {lighting.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tampa Trends */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Tampa Bay Retail Design Trends
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Current trends shaping retail design in the Tampa Bay market.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {tampaRetailTrends.map((trend, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-brand-green-dark mb-2">{trend.trend}</h3>
                <p className="text-gray-600 mb-4">{trend.description}</p>
                <div className="space-y-2">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-700"><strong>Examples:</strong> {trend.examples}</p>
                  </div>
                  <div className="bg-brand-green-light/30 rounded-lg p-3">
                    <p className="text-sm text-brand-green-dark"><strong>Investment:</strong> {trend.investment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Retail Buildout Costs
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Budget guidance for Tampa Bay retail construction projects.
          </p>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-heading">Category</th>
                  <th className="px-6 py-4 text-center font-heading">Typical Range</th>
                  <th className="px-6 py-4 text-left font-heading">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {costBreakdown.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-700">{item.category}</td>
                    <td className="px-6 py-4 text-center text-brand-green font-semibold">{item.range}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

      {/* Internal Links */}
      <section className="section bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Retail Construction Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Design a Store That Sells?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists builds retail spaces designed to perform. Let's create a store that turns browsers into buyers.
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
