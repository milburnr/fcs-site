import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { Phone, CheckCircle, Store, Building2, Sparkles, DollarSign, HelpCircle, Eye, Users, ArrowRight, Palette } from "lucide-react";
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
  title: "Retail Space Construction Tampa | Store Design",
  description: "Create an attractive retail space that boosts your business. Expert guide to storefront design, interior aesthetics, customer experience, and brand expression in Tampa Bay retail construction.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Attractive Retail Space", href: "/boost-your-business-with-an-attractive-retail-space/" },
];

const internalLinks = [
  { href: "/boost-sales-with-effective-retail-store-design-ideas/", label: "Retail Store Design Ideas" },
  { href: "/converting-retail-building-into-multi-tenant-space/", label: "Retail Conversion" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/services/commercial/", label: "Commercial Construction" },
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

const attractivenessElements = [
  {
    element: "Storefront & Entry",
    impact: "First impression; drives decision to enter",
    keyFeatures: [
      "Large glass displays showcasing merchandise",
      "Prominent, well-lit signage",
      "Clear, inviting entrance",
      "Consistent brand presentation",
      "Clean, maintained appearance",
    ],
    investment: "$30,000-150,000",
  },
  {
    element: "Lighting Design",
    impact: "Sets mood; affects color perception; guides attention",
    keyFeatures: [
      "Layered lighting (ambient + accent + decorative)",
      "Proper color temperature for merchandise",
      "Dramatic highlighting of key displays",
      "Dimmable/zoned controls for flexibility",
      "Energy-efficient LED systems",
    ],
    investment: "$15-40/SF",
  },
  {
    element: "Interior Finishes",
    impact: "Brand expression; perceived quality; Instagram-worthiness",
    keyFeatures: [
      "Flooring that reflects brand positioning",
      "Feature walls and focal points",
      "Consistent material palette",
      "Quality trim and details",
      "Durable yet attractive surfaces",
    ],
    investment: "$50-200/SF for finishes",
  },
  {
    element: "Fixture & Display",
    impact: "Product presentation; flexibility; brand identity",
    keyFeatures: [
      "Custom or curated fixtures that fit brand",
      "Varied heights and arrangements",
      "Quality materials and construction",
      "Flexibility for merchandise changes",
      "Integrated lighting where appropriate",
    ],
    investment: "$200-1,000/LF custom fixtures",
  },
  {
    element: "Sensory Experience",
    impact: "Emotional connection; memorable experience",
    keyFeatures: [
      "Pleasant ambient scent",
      "Appropriate music/audio",
      "Temperature comfort",
      "Tactile materials for touch",
      "Visual coherence and interest",
    ],
    investment: "$5,000-25,000 for audio/scent systems",
  },
];

const storefrontTypes = [
  {
    type: "Full Glass Storefront",
    description: "Maximizes visibility into the store",
    pros: "Best product visibility; inviting; modern",
    cons: "Higher cost; energy considerations; security",
    cost: "$150-400/LF installed",
    bestFor: "Fashion, jewelry, restaurants, high-traffic locations",
  },
  {
    type: "Partial Glass with Bulkhead",
    description: "Lower solid portion with glazing above",
    pros: "Lower cost; better energy performance; flexible display",
    cons: "Reduced visibility; can feel dated if not well designed",
    cost: "$100-250/LF installed",
    bestFor: "Services, specialty retail, food service",
  },
  {
    type: "Display Window Focal",
    description: "Strategic display windows rather than full glazing",
    pros: "Dramatic impact; controlled visibility; lower cost",
    cons: "Less transparency; requires curated displays",
    cost: "$75-200/LF installed",
    bestFor: "Boutiques, luxury retail, curated concepts",
  },
  {
    type: "Signature Entry",
    description: "Statement entrance with architectural features",
    pros: "Brand differentiation; landmark quality; memorable",
    cons: "Higher cost; may require landlord approval",
    cost: "$50,000-200,000 for custom entry",
    bestFor: "Flagship stores, restaurants, destinations",
  },
];

const brandExpressionStrategies = [
  {
    strategy: "Color Palette",
    description: "Consistent use of brand colors throughout space",
    implementation: "Feature walls in brand color; accent fixtures; consistent signage; coordinated finishes",
    impact: "Immediate brand recognition; emotional association; Instagram-able moments",
  },
  {
    strategy: "Material Language",
    description: "Characteristic materials that convey brand personality",
    implementation: "Natural materials for organic brands; industrial for urban; luxury finishes for premium",
    impact: "Subconscious brand communication; tactile experience; authenticity",
  },
  {
    strategy: "Signature Elements",
    description: "Unique design features repeated across locations",
    implementation: "Custom light fixtures; distinctive millwork patterns; signature installations",
    impact: "Brand memorability; multi-location consistency; photo opportunities",
  },
  {
    strategy: "Storytelling Displays",
    description: "Visual narratives about brand origin, values, or products",
    implementation: "Heritage walls; founder stories; process showcases; community connections",
    impact: "Emotional connection; differentiation; conversation starters",
  },
];

const customerExperience = [
  {
    touchpoint: "Window Shopping",
    goal: "Attract attention and generate interest",
    construction: "Quality storefront; display lighting; visual merchandising infrastructure",
    measurement: "Traffic counts; stop rate",
  },
  {
    touchpoint: "Entry/Decompression",
    goal: "Welcome and orient customers",
    construction: "Attractive threshold; appropriate decompression zone; clear sightlines",
    measurement: "Entry rate; immediate bounce rate",
  },
  {
    touchpoint: "Shopping Journey",
    goal: "Enable discovery and engagement",
    construction: "Logical layout; varied experiences; comfortable environment; clear navigation",
    measurement: "Dwell time; areas visited",
  },
  {
    touchpoint: "Fitting/Trying",
    goal: "Support purchase decision",
    construction: "Generous fitting rooms; flattering lighting; comfortable temperature; hooks and seating",
    measurement: "Conversion rate from fitting room",
  },
  {
    touchpoint: "Checkout",
    goal: "Complete transaction positively; capture add-ons",
    construction: "Well-designed cash wrap; queue merchandising; efficient layout; branded details",
    measurement: "Transaction value; queue abandonment",
  },
  {
    touchpoint: "Exit/Return",
    goal: "Leave positive impression; encourage return",
    construction: "Exit view of store; thank-you signage; clear way out; easy bag handling",
    measurement: "Return visit rate; customer satisfaction",
  },
];

const budgetAllocation = [
  { category: "Storefront & Signage", percentage: "15-25%", notes: "Highest impact per dollar; first impression" },
  { category: "Flooring", percentage: "10-15%", notes: "Foundation of interior experience; durability matters" },
  { category: "Lighting", percentage: "10-15%", notes: "Transforms space; affects merchandise appearance" },
  { category: "Walls & Ceilings", percentage: "10-15%", notes: "Background for merchandise; acoustic treatment" },
  { category: "Fixtures & Displays", percentage: "20-30%", notes: "Product presentation; brand expression" },
  { category: "MEP Systems", percentage: "15-20%", notes: "Comfort, safety; code compliance" },
  { category: "Technology", percentage: "5-10%", notes: "POS, security, audio/visual" },
];

const tampaSpecificConsiderations = [
  {
    factor: "Hurricane Resistance",
    impact: "Storefront glazing must meet wind-borne debris requirements in many locations",
    solution: "Impact-resistant glass or approved protective systems; proper drainage; wind load engineering",
  },
  {
    factor: "Climate/Energy",
    impact: "Hot, humid climate significantly affects HVAC sizing and energy costs",
    solution: "High-performance glazing (low SHGC); properly sized HVAC; vestibule entries; insulation",
  },
  {
    factor: "Tourism/Seasonality",
    impact: "Many Tampa Bay retail locations have seasonal traffic patterns",
    solution: "Flexible fixtures for changing displays; durability for high-traffic periods; weather protection",
  },
  {
    factor: "Competition",
    impact: "Tampa's retail growth means competing for attention with new, modern stores",
    solution: "Invest in differentiation; regular refreshes; experiential elements; local connection",
  },
];

const faqs = [
  {
    question: "How much should I invest in retail aesthetics vs. operations?",
    answer: "For most retail categories, allocate 60-70% of buildout budget to customer-facing elements (storefront, finishes, lighting, fixtures) and 30-40% to back-of-house and systems. The customer-facing investment drives the sales that fund operations. However, don't neglect fundamentals—poor HVAC or inadequate electrical creates operational problems that hurt the customer experience. The best approach is right-sizing both: adequate systems and strong aesthetics rather than gold-plated mechanical with cheap finishes.",
  },
  {
    question: "What's the ROI of an attractive retail space?",
    answer: "Attractive spaces generate measurable returns: Higher foot traffic (up to 30% increase with compelling storefronts); Longer dwell times (20-40% increase in well-designed spaces); Higher conversion rates (10-20% improvement with proper layout and lighting); Premium pricing acceptance (customers pay more in spaces that feel premium); Reduced marketing costs (beautiful spaces generate organic social media). While exact ROI varies by category, retailers typically see 2-4x return on aesthetic investments within 3-5 years through increased sales.",
  },
  {
    question: "How often should retail spaces be refreshed?",
    answer: "Refresh frequency depends on positioning: Fast-fashion/trend-driven: seasonal visual updates, major refresh every 3-5 years; Standard retail: annual visual updates, significant refresh every 5-7 years; Premium/luxury: subtle ongoing updates, major renovation every 7-10 years. Key triggers for refresh: declining traffic or sales; competitor upgrades; brand repositioning; worn finishes; outdated technology. Budget ongoing 1-2% of sales for visual updates and reserve 5-10% of original buildout cost annually for eventual refresh.",
  },
  {
    question: "How do I make my retail space Instagram-worthy?",
    answer: "Social-media-ready design includes: Signature moments—one highly designed feature that photographs well (neon sign, dramatic wall, unique fixture); Consistent aesthetic—cohesive design that looks good from any angle; Good lighting—both flattering ambient and specific photo-op lighting; Uncluttered backgrounds—clean areas where customers can photograph without distracting elements; Brand integration—visible brand elements that get tagged. Consider influencer visits during design—they know what works. Allocate $5,000-25,000 for designed photo opportunities.",
  },
  {
    question: "What mistakes make retail spaces unattractive?",
    answer: "Common attractiveness killers: Poor lighting (too dim, too harsh, wrong color temperature); Cluttered or inconsistent merchandise displays; Visible wear (stained ceilings, worn flooring, faded signage); Uncomfortable temperature or stuffy air; Confusing layout or blocked sightlines; Outdated design that screams 'not maintained'; Noise issues (too loud, echoing, inappropriate music); Neglected storefront (dirty glass, burnt-out lights, peeling graphics). Regular maintenance and thoughtful design prevent most issues.",
  },
  {
    question: "How do landlord requirements affect retail design in Tampa?",
    answer: "Tampa landlords typically have design criteria covering: signage (size, type, illumination, placement); storefront materials and proportions; HVAC placement and screening; hours of operation and lighting; merchandise display (often limits on window coverage). Review criteria early—they vary significantly by property and landlord. Some malls and lifestyle centers have extensive design review processes. Building your design team's relationship with the landlord's architect/representative early prevents costly redesigns.",
  },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Boost Your Business with an Attractive Retail Space"
        description="Create an attractive retail space that drives business. Guide to storefront design, interior aesthetics, customer experience, and brand expression for Tampa Bay retailers."
        datePublished="2024-01-15"
        dateModified="2025-01-15"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Attractive retail space in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Boost Your Business with an Attractive Retail Space
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            An attractive space isn't just nice to have—it's a business driver. Create retail environments that draw customers in, keep them engaged, and make them want to return.
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
              In the age of e-commerce, your physical retail space must earn every visit. An attractive store creates emotional connection, communicates brand values, and transforms shopping from transaction into experience. It's not vanity—it's strategy.
            </p>
            <p className="text-gray-600 mb-6">
              Tampa Bay's retail landscape is increasingly competitive. New developments bring modern retail spaces. E-commerce sets high expectations for convenience and experience. Customers share (or don't share) your store on social media. Your physical space is marketing that works 24/7.
            </p>
            <p className="text-gray-600 mb-8">
              This guide covers how to create attractive retail spaces that boost business: the elements that matter most, storefront options, brand expression strategies, customer experience touchpoints, and practical budget guidance. Apply these principles to create spaces that don't just look good—they perform.
            </p>
          </div>
        </div>
      </section>

      {/* Attractiveness Elements */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Elements of Retail Attractiveness
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Five key elements that create attractive, business-driving retail environments.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractivenessElements.map((element, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-brand-green-dark">{element.element}</h3>
                  <span className="text-xs font-semibold text-brand-green bg-brand-green-light/50 px-2 py-1 rounded">
                    {element.investment}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{element.impact}</p>
                <ul className="space-y-2">
                  {element.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storefront Types */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Storefront Design Options
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Your storefront is your billboard. Choose the right approach for your brand and location.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-4 py-4 text-left font-heading">Storefront Type</th>
                  <th className="px-4 py-4 text-left font-heading">Pros</th>
                  <th className="px-4 py-4 text-left font-heading">Cons</th>
                  <th className="px-4 py-4 text-center font-heading">Cost</th>
                  <th className="px-4 py-4 text-left font-heading">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {storefrontTypes.map((type, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-4">
                      <span className="font-semibold text-brand-green-dark block">{type.type}</span>
                      <span className="text-xs text-gray-500">{type.description}</span>
                    </td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{type.pros}</td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{type.cons}</td>
                    <td className="px-4 py-4 text-center text-brand-green font-semibold text-sm">{type.cost}</td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{type.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Brand Expression */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4 font-heading">
            Brand Expression Through Design
          </h2>
          <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto">
            Your space should feel like your brand—even before customers see your logo.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {brandExpressionStrategies.map((strategy, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Palette className="w-8 h-8 text-brand-gold" />
                  <h3 className="text-xl font-bold">{strategy.strategy}</h3>
                </div>
                <p className="text-white/80 mb-4">{strategy.description}</p>
                <div className="space-y-3">
                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-sm"><strong>Implementation:</strong> {strategy.implementation}</p>
                  </div>
                  <div className="bg-brand-gold/20 rounded-lg p-3">
                    <p className="text-sm"><strong>Impact:</strong> {strategy.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Experience */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Customer Experience Touchpoints
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Design every interaction from window to exit for positive experience.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-4 py-4 text-left font-heading">Touchpoint</th>
                  <th className="px-4 py-4 text-left font-heading">Goal</th>
                  <th className="px-4 py-4 text-left font-heading">Construction Elements</th>
                  <th className="px-4 py-4 text-left font-heading">Measurement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {customerExperience.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-4 font-semibold text-brand-green-dark">{item.touchpoint}</td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{item.goal}</td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{item.construction}</td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{item.measurement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Budget Allocation */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Retail Buildout Budget Allocation
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            How to allocate your construction budget for maximum impact.
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-brand-green text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Category</th>
                    <th className="px-6 py-4 text-center font-heading">% of Budget</th>
                    <th className="px-6 py-4 text-left font-heading">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {budgetAllocation.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{item.category}</td>
                      <td className="px-6 py-4 text-center text-brand-green font-bold">{item.percentage}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Tampa Specific */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Tampa Bay-Specific Considerations
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Local factors that affect retail space design and attractiveness.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {tampaSpecificConsiderations.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">{item.factor}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.impact}</p>
                <div className="bg-brand-green-light/30 rounded-lg p-3">
                  <p className="text-sm text-brand-green-dark"><strong>Solution:</strong> {item.solution}</p>
                </div>
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
            title="Related Retail Construction Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Create an Attractive Retail Space?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists builds retail spaces that attract customers and drive business. Let's create something beautiful that performs.
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
