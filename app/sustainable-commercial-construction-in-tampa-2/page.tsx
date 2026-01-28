import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, CheckCircle, Leaf, Heart, Sun, Droplets, Wind, Building, Users, Award } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Sustainable Commercial Construction in Tampa - Florida Construction Specialists",
  description: "Are you looking for sustainable and eco-friendly construction services in Tampa? Florida Construction Specialists specialize in building with wellness in mind.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Sustainable Commercial Construction in Tampa", href: "/sustainable-commercial-construction-in-tampa-2/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/services/commercial/medical-construction/", label: "Medical Facility Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Sustainable commercial construction in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Florida Construction Specialists: Building with Wellness in Mind for Commercial Construction in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Are you looking for sustainable and eco-friendly construction services in Tampa? Florida Construction Specialists specializes in building with wellness in mind, creating healthier spaces for Tampa Bay businesses.
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

      {/* Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              The commercial construction industry is experiencing a fundamental shift toward sustainability and wellness-focused design. As Tampa Bay's leading commercial contractor serving Tampa, Lakeland, Sarasota, and the surrounding areas, Florida Construction Specialists is pioneering this transformation. We understand that sustainable construction isn't just about environmental responsibility—it's about creating spaces that enhance occupant health, reduce operating costs, and deliver long-term value for Tampa Bay businesses.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              The Wellness-Focused Approach to Commercial Construction
            </h2>
            <p className="text-gray-600 mb-6">
              Traditional construction focused primarily on code compliance and cost efficiency. Today's sustainable construction takes a holistic view, considering how buildings impact the health and productivity of everyone who uses them. Florida Construction Specialists integrates wellness principles throughout the design and construction process, creating commercial spaces that support physical health, mental wellbeing, and business performance.
            </p>
            <p className="text-gray-600 mb-6">
              Studies show employees in healthy, sustainable buildings report 30% fewer sick days, demonstrate 11% higher productivity, and express greater job satisfaction. For Tampa Bay businesses competing for top talent, the quality of your workplace environment directly impacts recruitment and retention. A sustainable, wellness-focused building isn't just good for the environment—it's a competitive advantage.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Key Components of Sustainable Commercial Construction
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Wind className="w-5 h-5" />
                  Indoor Air Quality
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Poor indoor air quality is one of the leading health complaints in commercial buildings. Our sustainable approach addresses this through:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Low-VOC and zero-VOC materials throughout</li>
                  <li>• Enhanced ventilation systems exceeding code minimums</li>
                  <li>• High-efficiency filtration (MERV 13 or higher)</li>
                  <li>• Dedicated outdoor air systems</li>
                  <li>• CO2 monitoring and demand-controlled ventilation</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Sun className="w-5 h-5" />
                  Natural Light Optimization
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Access to natural light profoundly impacts human health and productivity. We design and build spaces that maximize daylight while managing solar heat gain:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Strategic window placement and sizing</li>
                  <li>• Light shelves and reflective surfaces</li>
                  <li>• Automated shading systems</li>
                  <li>• Interior layouts optimizing natural light distribution</li>
                  <li>• Circadian-appropriate artificial lighting</li>
                </ul>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Droplets className="w-5 h-5" />
                  Water Quality & Conservation
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Clean, safe water and responsible water use are fundamental to sustainable construction:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Point-of-use filtration systems</li>
                  <li>• Lead-free plumbing throughout</li>
                  <li>• Low-flow fixtures reducing consumption 30-50%</li>
                  <li>• Rainwater harvesting for irrigation</li>
                  <li>• Native, drought-tolerant landscaping</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Thermal Comfort
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Tampa's climate demands superior HVAC design. Our approach ensures consistent comfort while minimizing energy use:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Zoned climate control for individual preferences</li>
                  <li>• Humidity management (40-60% RH)</li>
                  <li>• Radiant barriers and cool roofing</li>
                  <li>• Superior building envelope insulation</li>
                  <li>• Variable refrigerant flow systems</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Sustainable Construction Practices for Tampa Bay
            </h2>
            <p className="text-gray-600 mb-6">
              Beyond the finished building, our construction practices themselves embrace sustainability. Florida Construction Specialists implements green construction methods that minimize environmental impact during the building process:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Construction Waste Diversion:</strong>
                  <span className="text-gray-600"> We recycle 90%+ of construction waste, diverting materials from landfills through careful sorting, recycling partnerships, and material reuse programs.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Regional Material Sourcing:</strong>
                  <span className="text-gray-600"> We prioritize materials sourced within 500 miles of Tampa Bay, reducing transportation emissions while supporting the regional economy.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Erosion and Sediment Control:</strong>
                  <span className="text-gray-600"> Our strict site management prevents construction runoff from affecting Tampa Bay's sensitive waterways and ecosystems.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Low-Emission Equipment:</strong>
                  <span className="text-gray-600"> We use equipment meeting the latest EPA emission standards and implement idle-reduction policies on all job sites.</span>
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Energy Efficiency: Essential in Florida's Climate
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay's subtropical climate makes energy efficiency particularly important—and particularly valuable. Cooling costs represent 40-50% of commercial energy use in Florida. Our sustainable construction approach dramatically reduces these costs through comprehensive energy strategies:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Energy Strategy</th>
                    <th className="px-6 py-3 text-left">Typical Savings</th>
                    <th className="px-6 py-3 text-left">Implementation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">High-Performance Building Envelope</td>
                    <td className="px-6 py-4">25-35% HVAC reduction</td>
                    <td className="px-6 py-4">Spray foam, cool roof, Low-E glass</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">LED Lighting with Controls</td>
                    <td className="px-6 py-4">60-75% lighting reduction</td>
                    <td className="px-6 py-4">LED fixtures, daylight harvesting, occupancy sensors</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">High-Efficiency HVAC</td>
                    <td className="px-6 py-4">20-40% cooling reduction</td>
                    <td className="px-6 py-4">VRF systems, high-SEER equipment</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Building Automation</td>
                    <td className="px-6 py-4">10-20% total energy</td>
                    <td className="px-6 py-4">Smart controls, scheduling, optimization</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Solar Ready/Solar Installation</td>
                    <td className="px-6 py-4">20-100% offset potential</td>
                    <td className="px-6 py-4">Rooftop PV, structural provisions</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Green Building Certifications We Deliver
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists has extensive experience delivering certified green buildings throughout Tampa Bay. We can guide your project toward the certification that best matches your goals:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  LEED Certification
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  The world's most widely recognized green building certification. We've delivered projects at Certified, Silver, and Gold levels.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Comprehensive sustainability framework</li>
                  <li>• Market recognition and tenant appeal</li>
                  <li>• Utility rebate qualification</li>
                  <li>• Property value enhancement</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  WELL Building Standard
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Focused specifically on occupant health and wellness. Ideal for organizations prioritizing employee wellbeing.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Air, water, light, and comfort optimization</li>
                  <li>• Mental health and community features</li>
                  <li>• Movement and fitness support</li>
                  <li>• Nourishment and healthy eating promotion</li>
                </ul>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Florida Green Building Coalition
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Florida-specific certification addressing our unique climate and environmental conditions.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Hurricane resistance integration</li>
                  <li>• Florida Energy Code alignment</li>
                  <li>• Cost-effective certification path</li>
                  <li>• Local relevance and recognition</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Sun className="w-5 h-5" />
                  Energy Star Certification
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Performance-based certification recognizing buildings in the top 25% of energy efficiency.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Based on actual operating performance</li>
                  <li>• Ongoing commitment to efficiency</li>
                  <li>• Strong tenant recognition</li>
                  <li>• Portfolio benchmarking capability</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              The Business Case for Sustainable Construction in Tampa
            </h2>
            <p className="text-gray-600 mb-6">
              Sustainable construction delivers measurable returns that make business sense for Tampa Bay property owners:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">25-40%</div>
                <div className="text-sm text-gray-600">Lower Energy Costs</div>
                <div className="text-xs text-gray-500">vs. conventional buildings</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">10-20%</div>
                <div className="text-sm text-gray-600">Higher Rent Premium</div>
                <div className="text-xs text-gray-500">for green-certified space</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">16%</div>
                <div className="text-sm text-gray-600">Better Occupancy</div>
                <div className="text-xs text-gray-500">LEED vs. conventional</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Biophilic Design: Connecting Occupants to Nature
            </h2>
            <p className="text-gray-600 mb-6">
              Biophilic design—incorporating natural elements into built environments—has emerged as a powerful tool for enhancing occupant wellness. Our sustainable construction approach includes biophilic elements that have been shown to reduce stress, improve cognitive function, and enhance mood:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Leaf className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Living Walls and Interior Plantings:</strong> We design and install integrated planting systems that improve air quality while creating visual connections to nature.</span>
              </li>
              <li className="flex items-start gap-3">
                <Leaf className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Natural Materials:</strong> Wood, stone, and other natural materials create warmth and connection to the natural world, even in fully interior spaces.</span>
              </li>
              <li className="flex items-start gap-3">
                <Leaf className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Water Features:</strong> The sound and sight of water creates calming environments in lobbies, break areas, and outdoor spaces.</span>
              </li>
              <li className="flex items-start gap-3">
                <Leaf className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Outdoor Spaces:</strong> We design patios, courtyards, and rooftop terraces that extend usable space and provide restorative outdoor access.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Partner with Tampa Bay's Sustainable Construction Leader
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists brings decades of commercial construction experience combined with deep expertise in sustainable building practices. We understand which strategies deliver the best value in Tampa Bay's unique climate and market conditions. Our team includes LEED-accredited professionals who can guide your project from concept through certification.
            </p>
            <p className="text-gray-600 mb-6">
              Whether you're building a new sustainable facility, renovating an existing building for improved efficiency, or pursuing green building certification, we have the experience and expertise to deliver outstanding results.
            </p>

            {/* FAQ Section */}
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions About Sustainable Commercial Construction
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How much more does sustainable construction cost?
                  </h3>
                  <p className="text-gray-600">
                    The cost premium for sustainable construction has declined dramatically and now typically ranges from 0-5% for most commercial projects. Many sustainable features like LED lighting and efficient HVAC systems are now standard practice with minimal or no premium. The operating cost savings typically pay back any additional investment within 3-7 years.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Is LEED certification worth the investment?
                  </h3>
                  <p className="text-gray-600">
                    For most Tampa Bay commercial projects, yes. LEED-certified buildings command higher rents (10-20% premium), experience lower vacancy rates, and achieve higher sale prices. The certification process also ensures your building achieves intended sustainability goals and provides third-party verification of building performance. For smaller projects, Florida Green Building Coalition certification may offer similar benefits at lower cost.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Can sustainable buildings withstand Florida hurricanes?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely—and often better than conventional construction. Sustainable building practices emphasize durability and resilience. Features like impact-resistant windows, reinforced connections, and superior building envelopes not only meet Florida Building Code requirements but often exceed them. Many sustainable materials and systems offer enhanced storm resistance compared to conventional alternatives.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    What incentives are available for sustainable construction in Tampa?
                  </h3>
                  <p className="text-gray-600">
                    Tampa Bay businesses can access numerous incentives including the federal 179D tax deduction (up to $5/sq ft for energy-efficient buildings), solar Investment Tax Credit (30%), TECO and Duke Energy rebates for efficiency measures, and PACE financing for eligible improvements. Our team helps identify and maximize available incentives for every project.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How long does it take to achieve LEED certification?
                  </h3>
                  <p className="text-gray-600">
                    LEED certification doesn't extend the construction timeline significantly—sustainable construction practices are integrated into our standard approach. The certification documentation occurs parallel to construction, with final certification typically achieved 3-6 months after project completion. Early planning for LEED ensures certification requirements are incorporated from design through construction.
                  </p>
                </div>
              </div>
            </div>

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

      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Build a Sustainable Future?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists today to discuss sustainable construction solutions for your Tampa Bay commercial project.
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
