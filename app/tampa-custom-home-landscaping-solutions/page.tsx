import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, TreePine, Droplets, Sun, Flower2 } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Tampa Custom Home Landscaping | Luxury Outdoor",
  description: "Create stunning landscapes for your Tampa custom home. Native Florida plants, outdoor living integration, pools, and sustainable irrigation. Complete landscaping from $50K-$500K+.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa Custom Home Landscaping Solutions", href: "/tampa-custom-home-landscaping-solutions/" },
];

const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/waterfront-custom-homes-in-tampa/", label: "Waterfront Custom Homes" },
  { href: "/eco-friendly-custom-homes-in-tampa/", label: "Eco-Friendly Homes" },
  { href: "/tampa-luxury-custom-home-building-services/", label: "Luxury Custom Homes" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const relatedArticles = [
  {
    "title": "Tampa's Custom Family Home Builders",
    "href": "/tampas-custom-family-home-builders/",
    "description": "What to look for when selecting a builder for your Tampa Bay dream home."
  },
  {
    "title": "Hurricane Resistant Luxury Home Design",
    "href": "/hurricane-resistant-luxury-home-design/",
    "description": "Building beautiful homes that withstand Florida's severe weather."
  },
  {
    "title": "Smart Home Integration in Tampa Custom Homes",
    "href": "/smart-home-integration-in-tampa-custom-homes-2/",
    "description": "Incorporating technology seamlessly into luxury home construction."
  },
  {
    "title": "Climate Resilient Custom Homes in Tampa",
    "href": "/climate-resilient-custom-homes-in-tampa/",
    "description": "Design strategies for homes that perform in Florida's challenging environment."
  }
];

const faqs = [
  {
    question: "When should landscaping be installed relative to home construction?",
    answer: "We typically complete rough grading and major hardscape during construction, then install plantings after home completion to protect them from construction damage. Irrigation systems go in after rough grading but before final landscaping. Pool construction usually occurs concurrent with home building. This phased approach protects investments while keeping the overall project timeline efficient. Final landscape completion typically occurs 2-4 weeks after home occupancy."
  },
  {
    question: "How much should I budget for landscaping a custom home?",
    answer: "A general guideline is 10-15% of home construction cost for comprehensive landscaping, though this varies widely based on lot size, desired features, and plant material selections. Pool and major outdoor structures can significantly increase this figure. Some clients phase investments—installing essential elements initially and adding features over time. We provide detailed landscape budgets early in design so you can make informed allocation decisions."
  },
  {
    question: "What maintenance will my landscape require?",
    answer: "Maintenance varies based on plant selections and feature complexity. Native and Florida-Friendly landscapes require less maintenance than tropical or formal designs. Most Tampa custom home landscapes need weekly lawn maintenance during growing season (March-October) and monthly during winter. Pools require weekly service. Irrigation systems need seasonal adjustment and annual maintenance. We can recommend maintenance services appropriate for your landscape's needs."
  },
  {
    question: "Can existing trees be preserved during construction?",
    answer: "Yes, and we strongly encourage preservation of valuable existing trees. Mature oaks, palms, and other specimens add immediate character that new plantings take decades to achieve. Protection requires proper fencing beyond drip lines, avoiding grade changes over roots, and careful coordination of utility routing. Our landscape architects evaluate existing vegetation early in design to identify preservation priorities and plan construction accordingly."
  },
  {
    question: "What landscaping restrictions apply in Tampa Bay communities?",
    answer: "Many Tampa Bay communities have landscaping guidelines addressing plant species, tree requirements, fence heights, and pool placement. HOA-governed communities often require architectural review approval before installation. Waterfront properties may have environmental restrictions protecting wetlands and shorelines. We navigate these requirements as part of our design process, ensuring your landscape complies with all applicable regulations while achieving your aesthetic goals."
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
            src="/images/custom-home-1/custom-home-1-display.webp"
            alt="Luxury landscaping for Tampa custom homes"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa Custom Home Landscaping Solutions
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Transform your outdoor spaces into living extensions of your custom home. Tropical gardens, native plantings, outdoor entertaining areas, and sustainable irrigation designed for Tampa Bay's unique climate.
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

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              In Tampa Bay's subtropical climate, landscaping isn't just curb appeal—it's an extension of your living space that can be enjoyed year-round. Florida Construction Specialists coordinates comprehensive landscape design and installation as an integral part of custom home construction, ensuring that outdoor environments complement architecture, enhance lifestyle, and thrive in Florida's demanding conditions. From intimate courtyard gardens in Hyde Park to expansive estate grounds in Avila, we create outdoor spaces as exceptional as the homes they surround.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Integrated Landscape Architecture
            </h2>
            <p className="text-gray-600 mb-6">
              The most successful custom home landscapes are designed concurrently with architecture, not as afterthoughts. Our landscape architecture partners join the design team early, ensuring that outdoor rooms connect naturally with indoor spaces, views are framed appropriately, and functional areas like pools, outdoor kitchens, and entertainment spaces are positioned optimally. This integration creates seamless indoor-outdoor living that defines Florida luxury.
            </p>
            <p className="text-gray-600 mb-6">
              Site analysis drives landscape planning—understanding existing drainage patterns, soil conditions, sun exposure, and wind patterns allows us to select appropriate plants and position features effectively. Existing trees worth preserving become focal points around which new design evolves. Problematic areas like low spots or heavy shade guide plant selection toward species that will thrive rather than struggle.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center gap-2">
                <TreePine className="w-6 h-6" />
                Tampa Bay Growing Conditions
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-green-900 mb-2">Climate Factors</h4>
                  <ul className="space-y-1 text-green-900">
                    <li>• USDA Zone 9b-10a</li>
                    <li>• 52" average annual rainfall</li>
                    <li>• Distinct wet/dry seasons</li>
                    <li>• Occasional light frost possible</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-900 mb-2">Soil Characteristics</h4>
                  <ul className="space-y-1 text-green-900">
                    <li>• Predominantly sandy soils</li>
                    <li>• Quick drainage (often too quick)</li>
                    <li>• Low organic content naturally</li>
                    <li>• Neutral to slightly alkaline pH</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Florida-Friendly Plant Selection
            </h2>
            <p className="text-gray-600 mb-6">
              Successful Tampa Bay landscapes embrace plants adapted to our conditions rather than fighting against them. Native and Florida-Friendly plants require less water, fewer chemicals, and less maintenance while providing superior resilience during droughts, floods, and storms. Species like Sabal palms, live oaks, Simpson's stopper, and firebush thrive here naturally, offering beauty without constant intervention.
            </p>
            <p className="text-gray-600 mb-6">
              We layer plantings for year-round interest—large canopy trees provide shade that reduces cooling costs, understory trees add seasonal color and screening, shrubs define spaces and provide privacy, and groundcovers eliminate bare soil while reducing maintenance. Flowering plants are selected for sequential blooming, ensuring something is always in color. Native plants also support local wildlife, attracting butterflies, hummingbirds, and beneficial insects that contribute to a healthy garden ecosystem.
            </p>
            <p className="text-gray-600 mb-6">
              For clients desiring tropical aesthetics, we incorporate adapted tropical species that perform well in Tampa's climate without excessive maintenance. Royal palms, crotons, heliconia, and plumeria create resort-style environments, though they may require winter protection during rare cold snaps. We position sensitive species in protected microclimates and can install temporary cold protection systems for valuable specimens.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Outdoor Living Integration
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's climate supports outdoor living virtually year-round, and our landscape designs maximize these opportunities. Covered lanais, pergolas, and pavilions provide shade during summer and shelter during brief afternoon showers. Summer kitchens with professional-grade equipment enable outdoor entertaining at any scale. Fire features extend evening enjoyment during cooler months while adding dramatic focal points.
            </p>
            <p className="text-gray-600 mb-6">
              Swimming pools are often the centerpiece of Tampa outdoor living. We coordinate pool design and construction as part of the overall landscape plan, integrating pool coping, decking, and surround plantings into cohesive compositions. Pool styles range from classic geometric shapes to naturalistic lagoons with beach entries, grottos, and waterfalls. Spa additions provide relaxation options, while children's pools and splash pads accommodate family needs.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Irrigation and Water Management
            </h2>
            <p className="text-gray-600 mb-6">
              Smart irrigation is essential in Tampa's climate of wet summers and dry springs. We install weather-based irrigation controllers that adjust watering schedules based on actual rainfall and evapotranspiration rates—eliminating the common scenario of sprinklers running during rainstorms. Soil moisture sensors provide additional intelligence, watering only when plants actually need it.
            </p>
            <p className="text-gray-600 mb-6">
              Drip irrigation serves planting beds more efficiently than overhead sprinklers, delivering water directly to root zones while reducing waste and fungal problems. High-efficiency rotating nozzles replace outdated spray heads in turf areas, providing more uniform coverage with less water. Properly designed zones group plants with similar water needs together, preventing overwatering of drought-tolerant species while meeting demands of thirstier plants.
            </p>
            <p className="text-gray-600 mb-6">
              For maximum sustainability, we incorporate rainwater harvesting systems that capture roof runoff for landscape irrigation. Tampa's 52 inches of annual rainfall provides abundant free water—properly sized cisterns can provide most or all irrigation needs during normal years. Recycled water connections, where available from utilities, offer another alternative to potable water for landscape use.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Hardscape and Outdoor Structures
            </h2>
            <p className="text-gray-600 mb-6">
              Hardscape elements define outdoor spaces and provide functional surfaces for living. Patios and terraces in natural stone, pavers, or concrete provide gathering areas and circulation paths. Retaining walls manage grade changes while creating planting opportunities. Decorative walls, columns, and entry features establish sense of arrival and define property boundaries.
            </p>
            <p className="text-gray-600 mb-6">
              Outdoor structures extend usable hours and seasons. Pergolas provide partial shade while allowing filtered light for adjacent plantings. Covered pavilions create true outdoor rooms protected from sun and rain. Pool cabanas offer changing facilities and shade retreats. Outdoor showers—popular in waterfront and pool areas—require proper drainage and privacy screening.
            </p>

            {/* Cost Table */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Landscape Investment Guide
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-brand-green-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Landscape Package</th>
                      <th className="px-6 py-4 text-left">Lot Size</th>
                      <th className="px-6 py-4 text-left">Investment Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Foundation Package</td>
                      <td className="px-6 py-4">1/4 acre or less</td>
                      <td className="px-6 py-4">$50,000 - $100,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Complete Landscape</td>
                      <td className="px-6 py-4">1/4 - 1/2 acre</td>
                      <td className="px-6 py-4">$100,000 - $200,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Resort-Style Estate</td>
                      <td className="px-6 py-4">1/2 - 1 acre</td>
                      <td className="px-6 py-4">$200,000 - $400,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Grand Estate Grounds</td>
                      <td className="px-6 py-4">1+ acres</td>
                      <td className="px-6 py-4">$400,000 - $750,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Foundation includes basic plantings, sod, and irrigation. Complete adds pool/spa, outdoor kitchen, and enhanced plantings. Resort-Style includes pavilions, fire features, and specimen trees. Grand Estate encompasses full property development with multiple outdoor rooms. Pool costs ($75K-250K+) included where noted. All prices reflect 2024 Tampa Bay market rates.
              </p>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Landscaping Elements
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <TreePine className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Plantings</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Native and Florida-Friendly species</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Specimen and accent trees</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Tropical garden installations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Seasonal color programs</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Droplets className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Water Features</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Custom swimming pools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Spas and water features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Fountains and ponds</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Rainwater harvesting</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Sun className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Outdoor Living</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Summer kitchens</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Fire pits and fireplaces</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Pergolas and pavilions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Outdoor entertainment areas</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Flower2 className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Special Features</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Landscape lighting design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Sports courts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Putting greens</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Children's play areas</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    When should landscaping be installed relative to home construction?
                  </h3>
                  <p className="text-gray-600">
                    We typically complete rough grading and major hardscape during construction, then install plantings after home completion to protect them from construction damage. Irrigation systems go in after rough grading but before final landscaping. Pool construction usually occurs concurrent with home building. This phased approach protects investments while keeping the overall project timeline efficient. Final landscape completion typically occurs 2-4 weeks after home occupancy.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How much should I budget for landscaping a custom home?
                  </h3>
                  <p className="text-gray-600">
                    A general guideline is 10-15% of home construction cost for comprehensive landscaping, though this varies widely based on lot size, desired features, and plant material selections. Pool and major outdoor structures can significantly increase this figure. Some clients phase investments—installing essential elements initially and adding features over time. We provide detailed landscape budgets early in design so you can make informed allocation decisions.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    What maintenance will my landscape require?
                  </h3>
                  <p className="text-gray-600">
                    Maintenance varies based on plant selections and feature complexity. Native and Florida-Friendly landscapes require less maintenance than tropical or formal designs. Most Tampa custom home landscapes need weekly lawn maintenance during growing season (March-October) and monthly during winter. Pools require weekly service. Irrigation systems need seasonal adjustment and annual maintenance. We can recommend maintenance services appropriate for your landscape's needs.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Can existing trees be preserved during construction?
                  </h3>
                  <p className="text-gray-600">
                    Yes, and we strongly encourage preservation of valuable existing trees. Mature oaks, palms, and other specimens add immediate character that new plantings take decades to achieve. Protection requires proper fencing beyond drip lines, avoiding grade changes over roots, and careful coordination of utility routing. Our landscape architects evaluate existing vegetation early in design to identify preservation priorities and plan construction accordingly.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    What landscaping restrictions apply in Tampa Bay communities?
                  </h3>
                  <p className="text-gray-600">
                    Many Tampa Bay communities have landscaping guidelines addressing plant species, tree requirements, fence heights, and pool placement. HOA-governed communities often require architectural review approval before installation. Waterfront properties may have environmental restrictions protecting wetlands and shorelines. We navigate these requirements as part of our design process, ensuring your landscape complies with all applicable regulations while achieving your aesthetic goals.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Create Your Outdoor Paradise
            </h2>
            <p className="text-gray-600 mb-6">
              Your custom home's landscape is where Florida living truly comes alive. Florida Construction Specialists coordinates comprehensive landscape design and construction that transforms outdoor spaces into extensions of your home—beautiful, functional, and perfectly adapted to Tampa Bay's unique environment. From intimate gardens to resort-style estates, we create outdoor environments that enhance your lifestyle and bring lasting enjoyment.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us to discuss landscape possibilities for your Tampa Bay custom home project. We'll help you envision outdoor spaces as remarkable as the home they surround.
            </p>

          </div>
        </div>
      </section>
      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Related Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Design Your Dream Landscape?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a consultation on custom home landscaping in Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
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
