import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, Leaf, Sun, Droplets, Wind, Recycle, CheckCircle, Award } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Eco-Friendly Commercial Construction in Tampa | Green Building Guide",
  description: "Build sustainably in Tampa Bay with eco-friendly commercial construction. LEED certification, energy efficiency, sustainable materials & green building expertise.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Eco-Friendly Commercial Construction in Tampa", href: "/eco-friendly-commercial-construction-in-tampa/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/trends-and-future-of-commercial-construction-in-tampa/", label: "Construction Trends" },
  { href: "/choosing-materials-for-commercial-construction-in-tampa/", label: "Material Selection" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const greenFeatures = [
  {
    icon: Sun,
    title: "Solar & Renewable Energy",
    description: "On-site solar power generation and renewable energy systems that reduce utility costs and carbon footprint.",
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    description: "Low-flow fixtures, rainwater harvesting, and greywater recycling systems designed for Florida's climate.",
  },
  {
    icon: Wind,
    title: "Energy Efficiency",
    description: "High-performance building envelopes, efficient HVAC systems, and smart controls that minimize energy consumption.",
  },
  {
    icon: Recycle,
    title: "Sustainable Materials",
    description: "Recycled content, locally sourced materials, and low-VOC products that reduce environmental impact.",
  },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Eco-Friendly Commercial Construction in Tampa"
        description="Build sustainably in Tampa Bay with eco-friendly commercial construction practices, LEED certification, and green building expertise."
        datePublished="2024-01-15"
        dateModified="2024-01-15"
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-large.webp"
            alt="Eco-friendly commercial construction in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Eco-Friendly Commercial Construction in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Build sustainable commercial spaces that reduce environmental impact, lower operating costs, and attract environmentally-conscious tenants in Tampa Bay.
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

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-xl text-gray-600 mb-6">
              Sustainable commercial construction has moved from a niche specialty to a mainstream expectation in Tampa Bay's competitive real estate market. Today's commercial tenants, investors, and building owners recognize that green building practices deliver meaningful benefits: lower operating costs, higher property values, improved occupant health, and reduced environmental impact.
            </p>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists has been at the forefront of sustainable commercial construction in Tampa for over two decades. Our experience with LEED-certified projects, energy-efficient design, and sustainable building practices positions us as the go-to contractor for businesses committed to environmental responsibility without compromising on quality or budget.
            </p>
            <p className="text-gray-600 mb-8">
              This comprehensive guide explores eco-friendly commercial construction options available in Tampa Bay, helping you understand the costs, benefits, and implementation strategies for building greener commercial spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Green Features Grid */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-12 font-heading">
            Key Elements of Green Commercial Construction
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {greenFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-brand-green/10 rounded-full flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-green-dark font-heading">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              The Business Case for Green Building in Tampa
            </h2>
            <p className="text-gray-600 mb-6">
              While environmental responsibility is a compelling reason to build green, the business case for sustainable commercial construction in Tampa is equally strong. Green buildings deliver measurable financial returns that justify the typically modest premium investment required.
            </p>
            <p className="text-gray-600 mb-6">
              Studies consistently show that LEED-certified buildings command 15-25% higher rental rates than comparable conventional buildings in major Florida markets. Vacancy rates are typically 4-8% lower in green-certified buildings. Building values appreciate faster, with green buildings selling at 10-16% premiums over conventional properties. Operating costs run 25-35% lower due to reduced energy and water consumption.
            </p>
            <p className="text-gray-600 mb-8">
              For Tampa businesses, these benefits are particularly relevant. Florida's hot, humid climate means energy costs for cooling represent a substantial portion of operating expenses. Buildings designed with high-performance envelopes, efficient HVAC systems, and smart controls can dramatically reduce these costs while improving occupant comfort.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              LEED Certification in Tampa
            </h2>
            <p className="text-gray-600 mb-6">
              LEED (Leadership in Energy and Environmental Design) remains the most widely recognized green building certification system in the Tampa Bay commercial market. Developed by the U.S. Green Building Council, LEED provides a framework for designing, constructing, and operating high-performance green buildings.
            </p>
            <p className="text-gray-600 mb-6">
              LEED certification levels range from Certified (40-49 points) to Silver (50-59), Gold (60-79), and Platinum (80+ points). The certification process evaluates buildings across several categories: location and transportation, sustainable sites, water efficiency, energy and atmosphere, materials and resources, indoor environmental quality, and innovation.
            </p>
            <p className="text-gray-600 mb-8">
              For Tampa commercial projects, achieving LEED Silver or Gold is typically the sweet spot that delivers meaningful sustainability benefits without excessive additional cost. LEED Platinum, while prestigious, often requires significant additional investment that may not be justified for all project types. Florida Construction Specialists has guided numerous clients through the LEED certification process, helping optimize the path to certification while managing costs.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Energy Efficiency Strategies for Tampa's Climate
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's subtropical climate presents both challenges and opportunities for energy-efficient commercial construction. Cooling loads dominate energy consumption, with air conditioning accounting for 40-60% of typical commercial building energy use. Effective energy efficiency strategies must address this reality while also managing Florida's intense sun, humidity, and occasional heating needs during winter months.
            </p>
            <p className="text-gray-600 mb-6">
              High-performance building envelopes are foundational to energy efficiency in Tampa. This includes cool roofing materials with high solar reflectance that reject heat rather than absorbing it; continuous insulation systems that minimize thermal bridging; high-performance glazing with low solar heat gain coefficients; air barrier systems that prevent infiltration of hot, humid outside air; and proper shading strategies including overhangs, fins, and strategic building orientation.
            </p>
            <p className="text-gray-600 mb-8">
              HVAC system design is equally critical. Variable refrigerant flow (VRF) systems provide exceptional efficiency and zone control. Energy recovery ventilators capture energy from exhaust air. Dedicated outdoor air systems (DOAS) separate ventilation from space conditioning for improved efficiency. Smart building controls optimize system operation based on actual occupancy and conditions.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Solar Energy for Tampa Commercial Buildings
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay's abundant sunshine makes solar energy an attractive option for commercial buildings. With an average of 244 sunny days per year and high electricity rates compared to national averages, solar installations typically achieve favorable returns on investment for Tampa commercial properties.
            </p>
            <p className="text-gray-600 mb-6">
              Commercial solar installations in Tampa range from small rooftop systems offsetting a portion of building electricity use to large-scale installations that can achieve net-zero energy performance. The 26% federal Investment Tax Credit (ITC) for solar, combined with accelerated depreciation benefits, significantly improves project economics for commercial building owners.
            </p>
            <p className="text-gray-600 mb-8">
              Integrating solar from the design phase optimizes outcomes. Roof orientation and pitch can be designed to maximize solar production. Structural systems can be engineered to accommodate solar panel loads. Electrical infrastructure can be sized appropriately for solar integration. Battery storage systems can be incorporated to provide backup power and demand management benefits.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Water Conservation in Florida
            </h2>
            <p className="text-gray-600 mb-6">
              While Florida receives abundant rainfall, water conservation remains important for sustainable commercial construction. Aquifer depletion, stormwater management requirements, and utility costs all make water efficiency a priority for Tampa Bay building owners.
            </p>
            <p className="text-gray-600 mb-6">
              Interior water conservation strategies include low-flow plumbing fixtures that reduce consumption by 20-40% with no impact on user experience; sensor-activated faucets and flush valves that eliminate waste; efficient commercial kitchen equipment for food service facilities; and water-efficient cooling tower and HVAC systems.
            </p>
            <p className="text-gray-600 mb-8">
              Exterior water conservation focuses on Florida-friendly landscaping using native plants requiring minimal irrigation; efficient irrigation systems with weather-based controllers and drip irrigation; rainwater harvesting systems that capture roof runoff for landscape irrigation; and permeable paving that reduces stormwater runoff while recharging groundwater.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Sustainable Materials and Construction Practices
            </h2>
            <p className="text-gray-600 mb-6">
              Material selection significantly impacts the environmental footprint of commercial construction. Sustainable material strategies focus on reducing embodied carbon, minimizing waste, and creating healthier indoor environments.
            </p>
            <p className="text-gray-600 mb-6">
              Sustainable material options for Tampa commercial construction include recycled content materials such as steel, concrete with fly ash, and recycled carpet; locally sourced materials that reduce transportation impacts; rapidly renewable materials like bamboo flooring and wool carpet; certified sustainable wood from FSC-certified forests; and low-VOC paints, adhesives, and sealants that improve indoor air quality.
            </p>
            <p className="text-gray-600 mb-8">
              Construction waste management is equally important. Florida Construction Specialists implements comprehensive recycling programs on all projects, typically diverting 75-90% of construction waste from landfills. Careful planning and material optimization reduce waste generation in the first place. Salvage and donation programs give usable materials second lives.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Green Building Costs vs. Long-Term Savings
            </h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Green Feature</th>
                    <th className="px-6 py-4 text-left">Added Cost</th>
                    <th className="px-6 py-4 text-left">Annual Savings</th>
                    <th className="px-6 py-4 text-left">Payback Period</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">LEED Certification</td>
                    <td className="px-6 py-4 text-gray-600">2-5% premium</td>
                    <td className="px-6 py-4 text-gray-600">8-12% operating costs</td>
                    <td className="px-6 py-4 text-gray-600">3-5 years</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Solar PV System</td>
                    <td className="px-6 py-4 text-gray-600">$2.50-3.50/watt</td>
                    <td className="px-6 py-4 text-gray-600">50-100% electric bill</td>
                    <td className="px-6 py-4 text-gray-600">4-7 years</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">High-Performance HVAC</td>
                    <td className="px-6 py-4 text-gray-600">15-25% premium</td>
                    <td className="px-6 py-4 text-gray-600">25-35% cooling costs</td>
                    <td className="px-6 py-4 text-gray-600">4-6 years</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Low-Flow Fixtures</td>
                    <td className="px-6 py-4 text-gray-600">5-10% premium</td>
                    <td className="px-6 py-4 text-gray-600">20-40% water costs</td>
                    <td className="px-6 py-4 text-gray-600">1-2 years</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Cool Roofing</td>
                    <td className="px-6 py-4 text-gray-600">$0.50-1.50/SF</td>
                    <td className="px-6 py-4 text-gray-600">10-15% cooling costs</td>
                    <td className="px-6 py-4 text-gray-600">2-4 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">How much more does green commercial construction cost in Tampa?</h3>
                <p className="text-gray-600">Green building premiums in Tampa typically range from 2-8% depending on the certification level and features included. Many sustainable features like efficient lighting, low-flow fixtures, and smart controls add minimal cost. More substantial investments like solar panels and high-performance HVAC systems have clear payback periods through operating cost savings.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Is LEED certification worth it for Tampa commercial buildings?</h3>
                <p className="text-gray-600">For most Tampa commercial buildings, LEED certification provides strong value. The certification delivers operating cost savings, commands higher rental rates, improves marketability, and may provide tax benefits. The process also ensures a systematic approach to sustainable design that often identifies opportunities that might otherwise be missed.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">What green building incentives are available in Tampa?</h3>
                <p className="text-gray-600">Tampa Bay offers several incentives for green commercial construction. Federal tax credits for solar installations (26% ITC). Duke Energy and TECO rebates for energy-efficient equipment. Potential expedited permitting for green-certified buildings. Property tax exemptions for renewable energy systems. Some municipalities offer density bonuses for LEED-certified projects.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">How long does LEED certification add to the construction timeline?</h3>
                <p className="text-gray-600">LEED certification itself doesn't necessarily extend construction timelines when integrated from project inception. The certification process runs parallel to construction. Some sustainable features may add modest time—commissioning processes, for example. Working with an experienced green building contractor minimizes any schedule impact.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Can existing Tampa buildings be retrofitted for green certification?</h3>
                <p className="text-gray-600">Yes, LEED offers certification paths for existing buildings (LEED O+M) and for major renovations. Many sustainable features can be added during renovation or tenant improvement projects. Energy efficiency upgrades, lighting retrofits, and water conservation measures are particularly cost-effective for existing buildings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Related Topics"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Build Green in Tampa Bay
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with Florida Construction Specialists to create sustainable commercial spaces that benefit your business and the environment.
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
