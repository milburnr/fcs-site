import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, CloudRain, Thermometer, Wind, Waves } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Climate Change Impact on Tampa Insurance Restoration | Commercial Property Guide",
  description: "How climate change affects Tampa Bay insurance restoration. Rising premiums, increased storm damage, flood risks, and strategies for commercial property protection.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Impact of Climate Change on Tampa Insurance Restoration", href: "/impact-of-climate-change-on-tampa-insurance-restoration/" },
];

const faqs = [
  {
    question: "How is climate change affecting insurance premiums in Tampa Bay?",
    answer: "Tampa Bay commercial property insurance premiums have increased dramatically due to climate-related risks. Since 2020, Florida commercial property insurance rates have risen 30-50% on average, with coastal properties seeing even higher increases. Multiple insurers have left the Florida market, reducing competition and driving prices higher. The increased frequency and intensity of hurricanes, rising sea levels, and flood risks all contribute to insurer concerns about Tampa Bay properties. Many businesses now face premiums exceeding $100 per $1,000 of coverage."
  },
  {
    question: "What climate-related risks are most significant for Tampa Bay commercial properties?",
    answer: "Tampa Bay faces multiple climate-driven risks: intensified hurricanes with higher wind speeds and more rainfall, increased flooding from both storm surge and heavy precipitation events, sea level rise affecting coastal and low-lying properties, longer and more severe storm seasons, and heat-related building system stress. The Tampa Bay region is considered one of the most hurricane-vulnerable metro areas in the U.S., and climate change is amplifying existing vulnerabilities."
  },
  {
    question: "How does sea level rise affect insurance claims and coverage in Tampa?",
    answer: "Sea level rise increases both flood frequency and flood insurance requirements. Properties previously outside flood zones may now require flood insurance, and FEMA flood maps are being updated to reflect new risk levels. Rising seas also increase storm surge heights during hurricanes—modeling suggests a Category 3 hurricane could produce 15+ feet of storm surge in parts of Tampa Bay. Insurance policies increasingly include flood exclusions or require separate flood coverage, and premiums for flood-prone areas have increased substantially under NFIP Risk Rating 2.0."
  },
  {
    question: "What building upgrades can help with both climate resilience and insurance costs?",
    answer: "Strategic building upgrades can reduce both damage risk and insurance premiums: impact-resistant windows and doors (can reduce premiums 10-15%), enhanced roof systems meeting or exceeding FBC wind requirements, elevated mechanical systems for flood protection, improved drainage and stormwater management, backup power systems, and hurricane shutters or screens. Florida law (Section 627.0629) requires insurers to provide premium discounts for certified wind mitigation features."
  },
  {
    question: "How should Tampa Bay businesses prepare for climate-driven insurance changes?",
    answer: "Businesses should: conduct risk assessments identifying climate vulnerabilities, invest in resilience upgrades that qualify for insurance discounts, maintain comprehensive documentation of building improvements and their value, work with insurance brokers specializing in Florida commercial property, consider higher deductibles to manage premium costs, explore parametric insurance products for specific risks, and develop business continuity plans for various climate scenarios. Proactive preparation is increasingly essential as the insurance market hardens."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Restoration" },
  { href: "/tampas-building-codes-for-insurance-restoration/", label: "Building Codes and Restoration" },
  { href: "/insurance-restoration-compliance-and-regulations-in-tampa/", label: "Compliance and Regulations" },
  { href: "/contact/", label: "Schedule a Consultation" },
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
            src="/images/hurricane-ian/hurricane-ian-large.webp"
            alt="Climate change impact on Tampa insurance restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Impact of Climate Change on Tampa Insurance Restoration
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Climate change is reshaping Tampa Bay's insurance landscape with rising premiums, increased storm intensity, and new coverage challenges. Learn how to protect your commercial property in an evolving risk environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Climate-Ready Assessment
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
              Tampa Bay sits at the intersection of climate change and insurance industry transformation. Rising sea levels, intensifying hurricanes, and increasing flood risks are driving dramatic changes in commercial property insurance—from soaring premiums to carrier withdrawals to new coverage requirements. For commercial property owners, understanding these changes and adapting strategies accordingly is essential for protecting both physical assets and financial interests.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Florida Insurance Market in Crisis</h3>
                  <p className="text-amber-700">Florida's property insurance market has seen unprecedented upheaval. Over a dozen insurers have left the state since 2020, and remaining carriers have dramatically increased rates. The state's insurer of last resort, Citizens Property Insurance, has grown to become Florida's largest insurer—a sign of market distress. Commercial property owners should review coverage annually and explore all available options.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Climate Risks Facing Tampa Bay Commercial Properties
            </h2>
            
            <p className="text-gray-600 mb-6">
              Tampa Bay's geography makes it uniquely vulnerable to climate-driven risks. The shallow, funnel-shaped bay amplifies storm surge, low-lying development puts significant commercial assets at flood risk, and the region's growth has outpaced infrastructure upgrades. Climate change is intensifying all these existing vulnerabilities.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Wind className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Intensified Hurricanes</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Higher peak wind speeds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Increased rainfall intensity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Rapid intensification events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Extended hurricane season</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Waves className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Sea Level Rise</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>1-2 feet rise projected by 2060</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Higher storm surge heights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Expanded flood zones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Saltwater intrusion issues</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <CloudRain className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Increased Flooding</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>More intense rainfall events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Overwhelmed drainage systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Sunny day flooding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Combined flood/storm events</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Thermometer className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Extreme Heat</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>More 90°F+ days annually</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>HVAC system stress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Building material degradation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Increased energy costs</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Insurance Market Impacts
            </h2>

            <p className="text-gray-600 mb-6">
              Climate change has fundamentally altered Florida's insurance market. Insurers use sophisticated climate modeling that projects increasing losses, and they're pricing policies—or exiting markets—accordingly. Tampa Bay commercial properties face some of the highest rate increases in the nation.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Insurance Trend</th>
                    <th className="px-6 py-4 text-left">Impact</th>
                    <th className="px-6 py-4 text-left">Commercial Owner Response</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Premium increases</td>
                    <td className="px-6 py-4">30-50%+ since 2020</td>
                    <td className="px-6 py-4 text-gray-600">Wind mitigation credits, higher deductibles</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Carrier withdrawals</td>
                    <td className="px-6 py-4">12+ insurers left Florida</td>
                    <td className="px-6 py-4 text-gray-600">Explore surplus lines, E&S carriers</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Coverage restrictions</td>
                    <td className="px-6 py-4">Flood exclusions, wind limits</td>
                    <td className="px-6 py-4 text-gray-600">Separate flood policies, layered coverage</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Deductible increases</td>
                    <td className="px-6 py-4">2-5% named storm deductibles</td>
                    <td className="px-6 py-4 text-gray-600">Self-insurance reserves, risk retention</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Underwriting tightening</td>
                    <td className="px-6 py-4">Stricter inspections, age limits</td>
                    <td className="px-6 py-4 text-gray-600">Proactive building upgrades</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Building Resilience: Cost-Benefit Analysis
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Resilience Upgrade</th>
                    <th className="px-6 py-4 text-left">Typical Cost</th>
                    <th className="px-6 py-4 text-left">Insurance Benefit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Impact-resistant windows</td>
                    <td className="px-6 py-4">$15,000 - $75,000</td>
                    <td className="px-6 py-4 text-gray-600">10-15% premium reduction</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Hurricane-rated roof</td>
                    <td className="px-6 py-4">$50,000 - $200,000</td>
                    <td className="px-6 py-4 text-gray-600">15-25% premium reduction</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Secondary water resistance</td>
                    <td className="px-6 py-4">$5,000 - $20,000</td>
                    <td className="px-6 py-4 text-gray-600">5-8% premium reduction</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Elevated HVAC/electrical</td>
                    <td className="px-6 py-4">$25,000 - $100,000</td>
                    <td className="px-6 py-4 text-gray-600">Reduced flood loss potential</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Backup generator</td>
                    <td className="px-6 py-4">$20,000 - $150,000</td>
                    <td className="px-6 py-4 text-gray-600">Reduced BI exposure</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Strategies for Climate-Resilient Commercial Properties
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Conduct Climate Risk Assessment</h3>
                  <p className="text-gray-600">Evaluate your property's specific vulnerabilities to sea level rise, storm surge, flooding, and wind damage. Use FEMA flood maps, NOAA storm surge models, and local vulnerability assessments to understand your risk profile.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Invest in Certified Mitigation</h3>
                  <p className="text-gray-600">Florida law requires insurers to provide premium credits for wind mitigation features. Obtain a wind mitigation inspection (OIR Form B1-1802) documenting your building's protective features. Certified upgrades provide both protection and premium savings.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Review Insurance Annually</h3>
                  <p className="text-gray-600">Florida's insurance market is changing rapidly. Work with a broker specializing in commercial property to explore all available markets, including surplus lines and risk retention groups. Annual review ensures you're getting the best available coverage and pricing.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Develop Business Continuity Plans</h3>
                  <p className="text-gray-600">Climate events will disrupt operations. Detailed continuity plans reduce business interruption losses, which insurers value. Plans should cover evacuation, remote operations, supply chain alternatives, and recovery procedures.</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mb-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-brand-green-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Build Climate Resilience Into Your Property</h3>
              <p className="mb-6 text-gray-200">
                Florida Construction Specialists helps Tampa Bay commercial property owners prepare for climate challenges with resilience upgrades, damage restoration, and insurance claim support. Contact us for a climate risk assessment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Get Resilience Assessment
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Related Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Prepare Your Property for Climate Challenges
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for climate-resilient construction and restoration throughout Tampa Bay.
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
