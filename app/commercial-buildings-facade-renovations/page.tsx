import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Building2, Sparkles, Shield, TrendingUp, HelpCircle, Palette, Sun } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Commercial Building Facade Renovations Tampa | Exterior Upgrades & Restoration",
  description: "Transform your Tampa commercial building's facade with expert renovation services. Storefront modernization, EIFS repair, curtain wall upgrades, and exterior restoration from Florida Construction Specialists.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial Buildings Facade Renovations", href: "/commercial-buildings-facade-renovations/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/revitalize-your-older-building-renovation-and-reconstruction/", label: "Building Revitalization" },
  { href: "/key-signs-your-commercial-remodel-needs/", label: "Signs You Need Renovation" },
  { href: "/contact/", label: "Get Free Estimate" },
];

const facadeTypes = [
  { title: "Storefront Systems", description: "Aluminum framing, glass replacement, and complete storefront modernization", icon: Building2 },
  { title: "EIFS/Stucco", description: "Exterior insulation finishing systems repair, restoration, and replacement", icon: Shield },
  { title: "Curtain Walls", description: "Glass and aluminum curtain wall systems for mid-rise commercial buildings", icon: Sparkles },
  { title: "Masonry & Precast", description: "Brick, block, stone, and precast concrete facade restoration", icon: Building2 },
];

const facadeBenefits = [
  "Increased property value (10-20% improvement typical)",
  "Enhanced energy efficiency reducing utility costs",
  "Improved curb appeal attracting tenants and customers",
  "Extended building lifespan through envelope protection",
  "Updated code compliance for wind and impact resistance",
  "Competitive positioning in Tampa's commercial market"
];

const faqs = [
  {
    question: "How much does a commercial facade renovation cost in Tampa?",
    answer: "Commercial facade renovation costs in Tampa vary significantly based on scope and materials. Basic facade refresh (painting, minor repairs, new signage) runs $15-40 per square foot of facade area. Moderate renovation with new cladding or storefront systems costs $40-100 per square foot. Major facade transformation with curtain wall or high-end materials ranges $100-250+ per square foot. For a typical 10,000 SF facade, budgets range from $150,000 for basic updates to $1-2 million for complete transformation. We provide detailed estimates based on your specific building and goals."
  },
  {
    question: "Does facade renovation require permits in Tampa?",
    answer: "Yes, most facade renovations in Tampa require building permits. Work affecting the building envelope (windows, doors, cladding), structural modifications to support new facade systems, and electrical work for signage all require permits. The City of Tampa Construction Services Center reviews facade projects for compliance with Florida Building Code wind resistance requirements and local zoning regulations. Historic districts like Ybor City require additional Architectural Review Committee approval. Florida Construction Specialists handles all permitting as part of our facade renovation services."
  },
  {
    question: "How long does a commercial facade renovation take?",
    answer: "Timeline depends on scope and building size. Minor facade updates (paint, signage, minor repairs) typically take 2-4 weeks. Moderate renovations with new storefront systems or partial recladding run 6-12 weeks. Major facade transformations involving complete recladding or curtain wall installation take 3-6 months. Factors affecting timeline include permit processing (2-4 weeks typical), material lead times (some systems require 8-12 weeks), and weather conditions. We provide detailed schedules during preconstruction."
  },
  {
    question: "Can facade renovation be done while tenants remain in the building?",
    answer: "Yes, occupied facade renovation is common and manageable with proper planning. We work from exterior scaffolding or swing stages that don't disrupt interior operations. Noise-generating work is scheduled during less sensitive hours. Window and door replacements are completed in sections to maintain building security and weather protection. Communication with tenants about daily work schedules helps them plan around any disruptions. Most tenants experience minimal impact during facade renovation."
  },
  {
    question: "What facade materials work best for Tampa's climate?",
    answer: "Tampa's humid subtropical climate and hurricane exposure require careful material selection. Impact-resistant glass is required in most applications. Aluminum framing with thermal breaks prevents condensation and improves energy efficiency. EIFS systems must include proper drainage planes to prevent moisture intrusion. Metal panels require appropriate coatings to resist salt air corrosion. We recommend materials tested for Florida's climate and code requirements, and we help clients balance performance, aesthetics, and budget."
  },
  {
    question: "Will facade renovation improve my building's energy efficiency?",
    answer: "Significantly, in most cases. Older commercial buildings often have single-pane glass, inadequate insulation, and air infiltration that drives up cooling costs in Tampa's climate. Modern facade systems with low-E glass, thermal breaks, and continuous insulation can reduce cooling loads by 20-40%. Many clients see utility savings of $1-3 per square foot annually, which helps offset renovation costs over time. We can provide energy modeling to estimate savings for your specific project."
  },
  {
    question: "Should I renovate the facade or demolish and rebuild?",
    answer: "This decision depends on several factors: structural condition (can the existing structure support new facade systems?), extent of needed changes, code compliance requirements, and budget. Facade renovation typically costs 30-50% less than new construction and completes faster. However, if the building requires major structural work, has significant code compliance issues, or the desired changes are too extensive, new construction may be more practical. We help clients evaluate both options with honest cost-benefit analysis."
  }
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Commercial facade renovation in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Commercial Building Facade Renovations in Tampa Bay
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Transform your commercial building's first impression. From aging storefronts to dated office exteriors, Florida Construction Specialists delivers facade renovations that increase property value, attract tenants, and modernize your Tampa Bay investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Free Facade Assessment
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

      {/* Facade Types */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
            Facade Systems We Renovate
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facadeTypes.map((type, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <type.icon className="w-12 h-12 text-brand-green mx-auto mb-4" />
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              The Power of First Impressions: Why Facade Renovation Matters
            </h2>
            <p className="text-gray-600 mb-6">
              Your commercial building's facade is more than just walls and windows—it's your business's handshake with the world. In Tampa Bay's competitive commercial real estate market, where vacancy rates fluctuate and tenant expectations evolve, an outdated facade can cost you premium tenants, reduce property values, and signal deferred maintenance that drives away potential buyers. Conversely, a thoughtfully renovated facade can reposition your property, command higher rents, and extend your building's productive life by decades.
            </p>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists has completed hundreds of facade renovations throughout Tampa, St. Petersburg, Clearwater, and surrounding communities. From refreshing tired retail storefronts to completely transforming outdated office buildings, our team understands both the technical requirements of Florida's demanding climate and the aesthetic considerations that make facade projects successful. We combine architectural vision with construction expertise to deliver facades that perform as beautifully as they look.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Understanding Tampa Bay's Facade Challenges
            </h2>
            <p className="text-gray-600 mb-6">
              Commercial facades in Tampa Bay face environmental stresses that buildings in other regions don't encounter. Hurricane-force winds require impact-resistant glazing and robust attachment systems. Intense UV exposure degrades finishes, sealants, and gaskets faster than in temperate climates. High humidity creates condensation problems and accelerates corrosion. Salt air along our extensive coastline attacks metals and compromises coatings. These factors mean that facade renovations in Tampa must address both aesthetics and performance—a pretty facade that fails in the first hurricane represents a wasted investment.
            </p>
            <p className="text-gray-600 mb-6">
              Florida Building Code requirements for wind resistance have evolved significantly since many Tampa commercial buildings were constructed. Buildings built before 1994 typically used standard glazing that would shatter under current wind loads. Even buildings from the early 2000s may not meet current code for the High-Velocity Hurricane Zone (HVHZ) that covers much of our region. Facade renovation often triggers requirements to upgrade the entire building envelope to current standards—an important consideration for budgeting and planning.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Storefront and Retail Facade Renovation
            </h2>
            <p className="text-gray-600 mb-6">
              Retail success in Tampa Bay increasingly depends on creating compelling physical experiences that compete with online shopping convenience. Your storefront facade is the critical transition point where potential customers decide whether to enter. Dated storefronts with foggy glazing, corroded framing, and tired signage send messages about your business that no marketing budget can overcome.
            </p>
            <p className="text-gray-600 mb-6">
              Modern storefront renovation goes beyond simply replacing glass and framing. Today's retail facades incorporate larger glass panels for improved product visibility, clerestory windows that bring natural light deep into spaces, integrated LED lighting that extends your visual presence into evening hours, and canopy systems that provide shade and define entry points. We work with retail clients to understand their brand identity and customer demographics, then design facades that communicate those values while meeting Florida's stringent code requirements.
            </p>
            <p className="text-gray-600 mb-6">
              Storefront renovation costs in Tampa typically range from $150 to $400 per linear foot of storefront, depending on system quality and complexity. Premium systems with thermally broken frames, low-E coatings, and integrated automatic doors cost more but deliver superior energy performance and customer experience. For a typical 50-foot retail storefront, budgets range from $7,500 for basic updates to $20,000+ for complete transformation with high-end systems.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Office Building Facade Modernization
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay's office market continues evolving as companies compete for talent and adapt to new work patterns. Buildings constructed in the 1980s and 1990s often feature ribbon windows, tinted glass, and exterior finishes that now appear dated. These buildings compete against newer Class A properties and lose tenants to more modern options. Facade renovation offers a path to repositioning these properties without the cost and disruption of demolition and new construction.
            </p>
            <p className="text-gray-600 mb-6">
              Successful office facade renovation typically involves several interconnected improvements. Window systems are upgraded to high-performance glazing that reduces cooling loads and improves occupant comfort. Exterior cladding may be replaced with contemporary materials—metal panels, composite systems, or modern masonry—that change the building's character. Entry sequences are enhanced with new canopies, landscaping, and wayfinding elements that create arrival experiences competitive with newer properties.
            </p>

            {/* Cost Table */}
            <div className="my-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Commercial Facade Renovation Cost Guide - Tampa Bay 2024</h3>
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Facade Type</th>
                    <th className="px-6 py-3 text-left">Cost Per SF (facade)</th>
                    <th className="px-6 py-3 text-left">Key Considerations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Paint & Minor Repairs</td>
                    <td className="px-6 py-4">$8 - $20</td>
                    <td className="px-6 py-4">Surface prep critical; Florida-rated coatings</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Storefront Replacement</td>
                    <td className="px-6 py-4">$45 - $95</td>
                    <td className="px-6 py-4">Impact glass required; thermal breaks recommended</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">EIFS Repair/Restoration</td>
                    <td className="px-6 py-4">$25 - $60</td>
                    <td className="px-6 py-4">Moisture inspection essential; drainage plane</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">EIFS Replacement</td>
                    <td className="px-6 py-4">$40 - $85</td>
                    <td className="px-6 py-4">Complete system with continuous insulation</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Metal Panel Cladding</td>
                    <td className="px-6 py-4">$55 - $120</td>
                    <td className="px-6 py-4">ACM or solid aluminum; coating warranty critical</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Curtain Wall System</td>
                    <td className="px-6 py-4">$100 - $225</td>
                    <td className="px-6 py-4">Structural engineering required; long lead times</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Masonry Restoration</td>
                    <td className="px-6 py-4">$30 - $75</td>
                    <td className="px-6 py-4">Tuckpointing, cleaning, sealers, lintel repair</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-gray-500 mt-2">*Costs are per square foot of facade area. Actual pricing depends on building height, access conditions, and specific project requirements.</p>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              EIFS Systems: Repair vs. Replacement
            </h2>
            <p className="text-gray-600 mb-6">
              Exterior Insulation and Finish Systems (EIFS), commonly called synthetic stucco, cover millions of square feet of Tampa Bay commercial buildings. When properly installed and maintained, EIFS provides excellent insulation value and design flexibility. Unfortunately, many older EIFS installations lack proper drainage, leading to moisture intrusion, hidden damage, and potential mold growth.
            </p>
            <p className="text-gray-600 mb-6">
              Our EIFS renovation process begins with thorough moisture testing using infrared thermography and invasive probing at high-risk areas. This assessment determines whether repair or replacement is appropriate. Minor damage with no moisture intrusion can often be repaired cost-effectively. Widespread moisture problems typically require complete removal and replacement with modern drainable EIFS systems that include weep screeds and drainage planes.
            </p>
            <p className="text-gray-600 mb-6">
              EIFS replacement costs $40-85 per square foot installed in Tampa Bay, depending on substrate condition and detail complexity. While significant, this investment provides decades of performance when properly installed with modern drainage systems. We warranty our EIFS installations and train building maintenance staff on proper care to maximize system lifespan.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Energy Efficiency and Facade Performance
            </h2>
            <p className="text-gray-600 mb-6">
              In Tampa Bay's cooling-dominated climate, your facade's thermal performance directly impacts operating costs. Single-pane glass, common in buildings before 1990, offers essentially no insulating value and allows solar heat gain that overwhelms air conditioning systems. Metal framing without thermal breaks conducts heat directly from exterior to interior. Inadequate wall insulation allows heat transfer that keeps cooling systems running constantly.
            </p>
            <p className="text-gray-600 mb-6">
              Modern facade systems address these issues comprehensively. High-performance glazing with low-E coatings and spectrally selective tints blocks solar heat while admitting visible light. Thermally broken framing prevents conductive heat transfer. Continuous insulation behind cladding systems eliminates thermal bridging through structural elements. Together, these improvements can reduce cooling loads by 25-40% compared to original building envelopes.
            </p>
            <p className="text-gray-600 mb-6">
              Energy savings help offset renovation costs over time. A 50,000 square foot office building spending $3 per square foot annually on cooling might reduce those costs to $2 per square foot—a $50,000 annual savings. Over a 15-year analysis period, that's $750,000 in savings that helps justify facade investment. We can provide energy modeling to estimate savings for your specific building and proposed improvements.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Project Phasing and Tenant Considerations
            </h2>
            <p className="text-gray-600 mb-6">
              Facade renovation typically proceeds while buildings remain occupied—complete evacuation is rarely necessary or practical. Our approach to occupied facade renovation emphasizes careful planning, clear communication, and flexible execution that responds to tenant needs.
            </p>
            <p className="text-gray-600 mb-6">
              Work proceeds in logical phases that minimize disruption to any single tenant area. Scaffolding and swing stages provide exterior access without blocking building entrances. Window replacements are sequenced to maintain weather protection—no opening remains exposed overnight. Noise-generating work like demolition is scheduled during less sensitive hours when possible. Daily communication keeps building management and tenants informed of upcoming activities.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
            Benefits of Commercial Facade Renovation
          </h2>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
            {facadeBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-brand-green" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Commercial Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Transform Your Building's Facade?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Request a free facade assessment from Florida Construction Specialists. We'll evaluate your building's current condition and recommend improvements that maximize value and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Assessment
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
