import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  AlertTriangle,
  Home,
  Phone,
  HelpCircle,
  Wind,
  Shield,
  Droplets,
  Zap,
  Layers,
  Lock,
  Building2,
  Thermometer,
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
  title: "Hurricane-Resistant Luxury Home Design | Tampa Bay Custom Homes | FCS",
  description:
    "Design strategies for hurricane-resistant luxury homes in Tampa Bay. Impact windows, fortified construction, backup power systems, and architectural features that protect without compromising elegance.",
  keywords:
    "hurricane resistant home design Tampa, luxury storm proof homes Florida, impact resistant construction Tampa Bay, fortified home builder Tampa, hurricane proof custom home",
};

const designPrinciples = [
  {
    principle: "Hip Roof Design",
    description: "Four-sloped roofs with 30-degree or less pitch dramatically reduce wind uplift compared to gable roofs",
    benefit: "Up to 40% reduction in roof damage during hurricanes",
    luxuryIntegration: "Creates consistent overhangs for outdoor living; architectural interest from all angles",
    icon: Home,
  },
  {
    principle: "Continuous Load Path",
    description: "Metal connectors tie roof to walls to foundation, creating unbroken chain of structural connections",
    benefit: "Prevents separation of building components under extreme wind loads",
    luxuryIntegration: "Hidden within walls; no visual impact; enables larger open spans",
    icon: Layers,
  },
  {
    principle: "Impact-Resistant Envelope",
    description: "Windows, doors, and garage doors rated for large missile impact and cyclic pressure testing",
    benefit: "Maintains building envelope integrity; prevents internal pressurization",
    luxuryIntegration: "Modern impact glass offers superior clarity; reduces noise; UV protection",
    icon: Shield,
  },
  {
    principle: "Reinforced Concrete Construction",
    description: "Concrete block or poured concrete walls with steel reinforcement throughout",
    benefit: "Superior wind resistance and debris impact protection vs. wood frame",
    luxuryIntegration: "Enables larger window openings; better sound isolation; thermal mass",
    icon: Building2,
  },
  {
    principle: "Secondary Water Barrier",
    description: "Self-adhering membrane under roof covering prevents water intrusion if shingles are lost",
    benefit: "Critical protection layer during and after storm; required in HVHZ",
    luxuryIntegration: "Invisible protection; pairs with any roof material including tile and metal",
    icon: Droplets,
  },
  {
    principle: "Flood-Resistant Design",
    description: "Elevated living areas, breakaway walls below BFE, flood vents, and water-resistant materials",
    benefit: "Meets FEMA requirements; reduces flood insurance; protects contents",
    luxuryIntegration: "Ground floor becomes covered parking, entertainment, or utility space",
    icon: Droplets,
  },
];

const windowSystems = [
  {
    type: "Large Missile Impact Glass",
    rating: "Miami-Dade NOA / Florida Building Code Approved",
    description: "Laminated glass that withstands 9-lb 2x4 at 50 ft/sec plus cyclic pressure",
    aesthetics: "Nearly indistinguishable from standard glass; slight tint options",
    cost: "Premium of $100-200/SF over standard windows",
    recommended: true,
  },
  {
    type: "Impact + Laminated with Low-E",
    rating: "Impact + Energy Star",
    description: "Impact protection plus solar heat rejection for energy efficiency",
    aesthetics: "Slight reflectivity; excellent clarity; multiple tint options",
    cost: "Premium of $150-250/SF over standard; energy savings offset",
    recommended: true,
  },
  {
    type: "Hurricane Shutters + Standard Glass",
    rating: "Florida Building Code compliant when deployed",
    description: "Requires manual or motorized deployment before storm",
    aesthetics: "Visible hardware when stored; blocks views when deployed",
    cost: "Lower initial cost but requires action; operational concerns",
    recommended: false,
  },
  {
    type: "Polycarbonate Impact Systems",
    rating: "ASTM E1886/E1996 compliant",
    description: "Virtually unbreakable panels; used for specialty applications",
    aesthetics: "Slight distortion; yellowing over time; best for secondary glazing",
    cost: "Moderate cost; replacement needed every 10-15 years",
    recommended: false,
  },
];

const structuralSystems = [
  {
    system: "Concrete Block (CMU)",
    windRating: "Up to 200 mph with proper reinforcement",
    description: "8-12\" concrete masonry units with grouted cells and rebar",
    pros: "Excellent wind/impact resistance; thermal mass; familiar to Florida builders",
    cons: "Requires experienced crews; moisture management critical; insulation needed",
    cost: "$150-200/SF shell cost",
  },
  {
    system: "Insulated Concrete Forms (ICF)",
    windRating: "Up to 250 mph",
    description: "Foam forms stay in place; concrete poured continuously",
    pros: "Superior insulation (R-25+); quieter; faster construction; very strong",
    cons: "Specialized contractors needed; window bucks critical; slightly higher cost",
    cost: "$175-225/SF shell cost",
  },
  {
    system: "Poured Concrete (Cast-in-Place)",
    windRating: "Up to 300 mph",
    description: "Reinforced concrete walls poured into removable forms",
    pros: "Ultimate strength; no joints; excellent for coastal; architectural flexibility",
    cons: "Most expensive; longest construction time; requires skilled formwork",
    cost: "$200-275/SF shell cost",
  },
  {
    system: "Fortified Wood Frame",
    windRating: "Up to 150 mph (FORTIFIED Gold)",
    description: "Enhanced wood frame with continuous load path and impact envelope",
    pros: "Lower cost; familiar construction; FORTIFIED certification available",
    cons: "Less robust than concrete options; requires diligent connection details",
    cost: "$125-175/SF shell cost",
  },
];

const backupSystems = [
  {
    system: "Whole-Home Generator",
    capacity: "20-60 kW for luxury homes",
    fuel: "Natural gas or propane (propane preferred for extended outages)",
    coverage: "Entire home including HVAC, pool, elevator if applicable",
    considerations: "Sound attenuation critical; 500+ gallon propane for 5-7 days",
    luxuryFeature: "Seamless automatic transfer; no lifestyle interruption",
  },
  {
    system: "Battery + Solar",
    capacity: "Multiple Tesla Powerwalls or equivalent (30-60 kWh total)",
    fuel: "Solar recharge; grid backup",
    coverage: "Critical loads; can be sized for whole home",
    considerations: "Depends on sun; pairs well with generator for extended outages",
    luxuryFeature: "Daily energy cost reduction; clean quiet power",
  },
  {
    system: "Generator + Battery Hybrid",
    capacity: "Generator + 20-40 kWh battery",
    fuel: "Propane generator with battery buffer",
    coverage: "Full home; battery covers brief outages; generator for extended",
    considerations: "Most comprehensive; higher cost; reduced generator runtime",
    luxuryFeature: "Silent overnight operation; generator only runs when needed",
  },
];

const fortifiedStandards = [
  {
    level: "FORTIFIED Roof",
    requirements: "Sealed roof deck; edge metal; roof covering upgrades",
    insuranceDiscount: "Typically 15-25%",
    description: "Entry-level certification focusing on roof protection",
  },
  {
    level: "FORTIFIED Silver",
    requirements: "Fortified Roof + opening protection (impact windows/shutters)",
    insuranceDiscount: "Typically 25-35%",
    description: "Adds envelope protection to roof standards",
  },
  {
    level: "FORTIFIED Gold",
    requirements: "Silver + continuous load path + attached structures",
    insuranceDiscount: "Typically 35-45%",
    description: "Comprehensive structural resilience certification",
  },
];

const faqs = [
  {
    question: "How much more does hurricane-resistant construction cost?",
    answer:
      "Building a hurricane-resistant luxury home in Tampa Bay typically adds 10-20% to construction costs compared to code-minimum construction. For a $1.5M custom home, expect $150,000-$300,000 for enhanced structural systems, impact windows throughout, whole-home generator, and premium roofing. However, this investment returns value through insurance savings (often $10,000-$30,000+ annually), reduced storm damage risk, and higher resale value. Many Tampa Bay buyers now specifically seek fortified construction.",
  },
  {
    question: "Are impact windows required for new construction in Tampa?",
    answer:
      "Yes, the Florida Building Code requires opening protection (impact-rated windows/doors or approved shutters) for new construction throughout most of Florida, including all of Tampa Bay. Within the High-Velocity Hurricane Zone (HVHZ - Miami-Dade and Broward), requirements are even more stringent. For luxury homes, impact windows are strongly preferred over shutters for aesthetics, convenience, and continuous protection without deployment.",
  },
  {
    question: "What roof shape is best for hurricane resistance?",
    answer:
      "Hip roofs with four slopes at 30 degrees or less provide the best hurricane resistance. Studies show hip roofs experience 40% less damage than gable roofs in hurricanes. The slopes deflect wind rather than catching it like a sail. For luxury homes, this works beautifully architecturally, creating interesting rooflines and consistent overhangs for outdoor living areas. Combined with proper tie-downs and secondary water barriers, hip roofs offer excellent protection.",
  },
  {
    question: "Should I build with concrete or wood frame in Tampa?",
    answer:
      "For luxury homes in Tampa Bay, concrete construction (CMU or ICF) is generally recommended over wood frame. Concrete offers superior wind and impact resistance, better sound isolation, improved energy efficiency (especially ICF), and longer lifespan. While wood frame with FORTIFIED Gold standards can achieve good protection, concrete provides peace of mind and is expected by many luxury buyers. The cost premium (typically $25-50/SF) is justified for high-end construction.",
  },
  {
    question: "How do I protect my pool and outdoor areas from hurricanes?",
    answer:
      "Pool cages should be designed to ASCE 7 wind load standards for Tampa Bay's wind zone. Options include: standard aluminum with enhanced bracing, high-strength aluminum systems rated to 140+ mph, or retractable/removable pool enclosures. For outdoor kitchens, use hurricane-rated cabinetry and bring loose items inside. Outdoor furniture should be stored or secured. Landscaping should avoid trees with weak wood (like laurel oaks) near the home.",
  },
  {
    question: "What size generator do I need for a luxury home?",
    answer:
      "A typical luxury home in Tampa Bay (4,000-6,000 SF) requires 25-45 kW generator capacity to run the entire home including HVAC. Larger homes with pools, elevators, or multiple HVAC zones may need 48-60 kW. Propane is preferred over natural gas for extended outages since natural gas pressure can drop during major storms. Plan for 500-1,000 gallon propane storage for 5-7 days of runtime. Sound attenuation is critical - quality installations are nearly inaudible inside the home.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Hurricane Resistant Luxury Home Design", href: "/hurricane-resistant-luxury-home-design/" },
];


const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/services/residential/waterfront-homes/", label: "Waterfront Home Construction" },
  { href: "/services/residential/home-additions/", label: "Home Additions" },
  { href: "/services/residential/hurricane-resistant-construction/", label: "Hurricane-Resistant Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function HurricaneResistantLuxuryHomeDesignPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Hurricane-Resistant Luxury Home Construction" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Hurricane-Resistant Custom Home Construction"
        serviceDescription="Building hurricane-resistant luxury homes in Tampa Bay. Impact windows, fortified construction, backup power systems, and coastal-ready design for discerning homeowners."
        city="Tampa"
        minPrice="750000"
      />
      <ArticleSchema
        headline="Hurricane-Resistant Luxury Home Design | Tampa Bay Custom Homes | FCS"
        description="Design strategies for hurricane-resistant luxury homes in Tampa Bay. Impact windows, fortified construction, backup power systems, and architectural features that protect without compromising elegance."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/hurricane-resistant-luxury-home-design/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Residential", href: "/residential/" },
          { name: "Luxury Custom Homes", href: "/residential/luxury-custom-homes/" },
          { name: "Hurricane-Resistant Design", href: "/hurricane-resistant-luxury-home-design/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/custom-home-1/custom-home-1-display.webp"
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
              customHubHref="/residential/luxury-custom-homes/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Hurricane-Resistant Luxury Home Design
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Building beautiful homes that stand up to Florida&apos;s storms. How to achieve
              ultimate protection without compromising architectural elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta-gold">
                Discuss Your Project
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

      {/* Design Principles */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Core Design Principles for Hurricane Resistance
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            These architectural and structural strategies protect your home while
            maintaining the aesthetic standards expected in luxury construction.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designPrinciples.map((item) => (
              <div key={item.principle} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-brand-gold/20 rounded-lg">
                    <item.icon className="w-6 h-6 text-brand-gold-dark" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green-dark">
                    {item.principle}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="space-y-3">
                  <div className="bg-brand-green-light/20 rounded-lg p-3">
                    <span className="text-xs text-brand-green-dark font-semibold block mb-1">
                      Protection Benefit
                    </span>
                    <p className="text-gray-700 text-sm">{item.benefit}</p>
                  </div>
                  <div className="bg-brand-gold/10 rounded-lg p-3">
                    <span className="text-xs text-brand-gold-dark font-semibold block mb-1">
                      Luxury Integration
                    </span>
                    <p className="text-gray-700 text-sm">{item.luxuryIntegration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Window Systems */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Impact Window and Door Options
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choosing the right glazing system is critical for both protection and
            the luxury experience. These are the primary options for Tampa Bay homes.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {windowSystems.map((window) => (
              <div
                key={window.type}
                className={`bg-white rounded-xl p-6 shadow-md ${window.recommended ? "border-2 border-brand-gold" : ""}`}
              >
                {window.recommended && (
                  <span className="inline-block bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    Recommended for Luxury Homes
                  </span>
                )}
                <h3 className="text-xl font-bold text-brand-green-dark mb-2">
                  {window.type}
                </h3>
                <p className="text-sm text-brand-gold-dark font-medium mb-3">
                  {window.rating}
                </p>
                <p className="text-gray-600 mb-4">{window.description}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-brand-green-dark">Aesthetics: </span>
                    <span className="text-gray-600">{window.aesthetics}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-brand-green-dark">Cost: </span>
                    <span className="text-gray-600">{window.cost}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structural Systems */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Structural System Comparison
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            The building envelope system determines your home&apos;s ultimate wind
            resistance. Here&apos;s how the options compare for Tampa Bay luxury homes.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="px-4 py-3 text-left font-semibold">System</th>
                  <th className="px-4 py-3 text-center font-semibold">Wind Rating</th>
                  <th className="px-4 py-3 text-left font-semibold">Pros</th>
                  <th className="px-4 py-3 text-left font-semibold">Cons</th>
                  <th className="px-4 py-3 text-center font-semibold">Cost</th>
                </tr>
              </thead>
              <tbody>
                {structuralSystems.map((system, index) => (
                  <tr
                    key={system.system}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3">
                      <span className="font-semibold text-brand-green-dark block">
                        {system.system}
                      </span>
                      <span className="text-xs text-gray-500">{system.description}</span>
                    </td>
                    <td className="px-4 py-3 text-center font-bold text-brand-gold-dark">
                      {system.windRating}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{system.pros}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{system.cons}</td>
                    <td className="px-4 py-3 text-center font-medium">{system.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Backup Systems */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Backup Power Systems
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Maintaining power during and after storms is essential for luxury living.
            These are the primary options for whole-home backup.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {backupSystems.map((system) => (
              <div key={system.system} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-brand-gold" />
                  <h3 className="text-xl font-bold text-brand-green-dark">
                    {system.system}
                  </h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-500">Capacity:</span>
                    <span className="block font-medium">{system.capacity}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Fuel Source:</span>
                    <span className="block font-medium">{system.fuel}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Coverage:</span>
                    <span className="block font-medium">{system.coverage}</span>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <span className="text-xs text-gray-500 block">Key Considerations</span>
                    <p className="text-gray-700">{system.considerations}</p>
                  </div>
                  <div className="bg-brand-gold/10 rounded-lg p-3">
                    <span className="text-xs text-brand-gold-dark font-semibold">Luxury Benefit</span>
                    <p className="text-gray-700">{system.luxuryFeature}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORTIFIED Standards */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            IBHS FORTIFIED Home Standards
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            FORTIFIED certification from the Insurance Institute for Business &amp; Home
            Safety provides third-party validation of hurricane resistance and insurance discounts.
          </p>
          <div className="max-w-3xl mx-auto space-y-6">
            {fortifiedStandards.map((standard, index) => (
              <div
                key={standard.level}
                className="bg-gray-50 rounded-xl p-6 flex items-start gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-brand-gold flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-green-dark mb-2">
                    {standard.level}
                  </h3>
                  <p className="text-gray-600 mb-3">{standard.description}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs text-gray-500 block">Requirements</span>
                      <p className="text-gray-700 text-sm">{standard.requirements}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <span className="text-xs text-green-600 block">Insurance Discount</span>
                      <p className="font-bold text-green-700">{standard.insuranceDiscount}</p>
                    </div>
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
            Related Luxury Home Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/residential/luxury-custom-homes/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-gold">
                Luxury Custom Home Building
              </h3>
              <p className="text-gray-600 text-sm">
                Full-service custom home construction in Tampa Bay.
              </p>
            </Link>
            <Link
              href="/smart-home-integration-luxury-estates/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-gold">
                Smart Home Integration
              </h3>
              <p className="text-gray-600 text-sm">
                Technology systems for luxury estates including storm monitoring.
              </p>
            </Link>
            <Link
              href="/waterfront-custom-homes-in-tampa/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-gold">
                Waterfront Custom Homes
              </h3>
              <p className="text-gray-600 text-sm">
                Coastal-specific construction requirements and design.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-gold">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Ready to Build Your Hurricane-Resistant Dream Home?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists builds luxury homes that protect your family
            and investment while delivering the architectural excellence Tampa Bay&apos;s
            most discerning homeowners expect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Start Your Custom Home
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