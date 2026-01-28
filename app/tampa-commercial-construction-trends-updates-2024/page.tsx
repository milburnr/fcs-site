import Link from "next/link";
import Image from "next/image";
import { Phone, TrendingUp, Building2, Leaf, Cpu, DollarSign, Users, ArrowUp, ArrowDown, Minus } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa Commercial Construction Trends & Updates 2024-2025 | Market Analysis",
  description: "Stay ahead with the latest commercial construction trends in Tampa. Discover market insights, technology innovations, and what's shaping Tampa Bay's construction industry.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa Commercial Construction Trends Updates 2024", href: "/tampa-commercial-construction-trends-updates-2024/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/tampas-latest-commercial-construction-projects/", label: "Latest Tampa Projects" },
  { href: "/top-commercial-contractors-in-tampa/", label: "Top Tampa Contractors" },
  { href: "/efficient-commercial-construction-timelines-in-tampa/", label: "Construction Timelines" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const marketTrends = [
  {
    trend: "Industrial & Logistics",
    direction: "up",
    description: "E-commerce growth and supply chain reshoring continue to drive warehouse and distribution center demand. Tampa's port access makes it a logistics hub.",
    impact: "Strong demand through 2025, expect 3-5M SF new development annually",
  },
  {
    trend: "Healthcare Construction",
    direction: "up",
    description: "Aging population and healthcare system expansion fuel medical office, outpatient facility, and senior living construction throughout Tampa Bay.",
    impact: "Healthcare construction up 15% YoY, particularly ambulatory surgery centers",
  },
  {
    trend: "Office Construction",
    direction: "flat",
    description: "Hybrid work has shifted demand. New office construction is selective, focusing on Class A amenity-rich spaces. Tenant improvement remains active.",
    impact: "Limited new construction, strong demand for renovations and repositioning",
  },
  {
    trend: "Retail Construction",
    direction: "up",
    description: "Despite e-commerce, experience-oriented retail and restaurant construction remains strong. Grocery-anchored and mixed-use projects lead.",
    impact: "Selective new development, significant renovation activity in older centers",
  },
  {
    trend: "Multifamily (Commercial)",
    direction: "flat",
    description: "After a surge, multifamily construction is moderating as interest rates impact project financing. Focus shifting to affordable housing.",
    impact: "Pipeline slowing but still significant, especially in suburban locations",
  },
  {
    trend: "Data Centers",
    direction: "up",
    description: "AI and cloud computing are driving unprecedented data center demand. Tampa's power infrastructure and connectivity make it attractive.",
    impact: "Emerging sector with several major projects in development stages",
  },
];

const costTrends = [
  { category: "Steel/Structural", change: "+2-4%", trend: "stable", notes: "Prices stabilized after 2022 spikes" },
  { category: "Concrete/Masonry", change: "+3-5%", trend: "up", notes: "Steady increases, labor remains tight" },
  { category: "Lumber/Wood", change: "-5-10%", trend: "down", notes: "Normalized from pandemic highs" },
  { category: "Electrical Materials", change: "+4-6%", trend: "up", notes: "Copper and transformer costs elevated" },
  { category: "HVAC Equipment", change: "+5-8%", trend: "up", notes: "Supply chain issues persisting" },
  { category: "Labor (Skilled)", change: "+4-6%", trend: "up", notes: "Chronic shortage continues" },
  { category: "Labor (General)", change: "+3-4%", trend: "up", notes: "Competition from other industries" },
  { category: "Insurance", change: "+15-25%", trend: "up", notes: "Florida market hardening significantly" },
];

const technologyTrends = [
  {
    technology: "Building Information Modeling (BIM)",
    adoption: "Mainstream",
    description: "3D modeling for design coordination, clash detection, and facility management is now standard on commercial projects over $5M.",
    benefit: "Reduces change orders by 20-40%, improves coordination",
  },
  {
    technology: "Drone Surveying & Progress Monitoring",
    adoption: "Growing",
    description: "Drones capture site conditions, progress photos, and volumetric data faster and more safely than traditional methods.",
    benefit: "30% faster surveying, improved documentation",
  },
  {
    technology: "Prefabrication & Modular Construction",
    adoption: "Growing",
    description: "Off-site fabrication of building components reduces site labor, improves quality control, and accelerates schedules.",
    benefit: "15-20% schedule reduction, better quality",
  },
  {
    technology: "Project Management Software",
    adoption: "Mainstream",
    description: "Cloud-based platforms like Procore, Buildertrend, and PlanGrid connect field and office in real-time.",
    benefit: "Improved communication, documentation, accountability",
  },
  {
    technology: "AI & Machine Learning",
    adoption: "Emerging",
    description: "AI applications in estimating, scheduling optimization, and safety monitoring are beginning to impact commercial construction.",
    benefit: "Early stage but promising for productivity gains",
  },
  {
    technology: "Sustainable Building Tech",
    adoption: "Growing",
    description: "Solar integration, EV charging infrastructure, and energy management systems are increasingly standard in commercial buildings.",
    benefit: "Lower operating costs, tenant attraction, ESG compliance",
  },
];

const sustainabilityTrends = [
  {
    trend: "LEED Certification",
    description: "LEED remains the dominant green building standard. Tampa seeing increased demand for LEED Silver and Gold on new commercial projects.",
  },
  {
    trend: "Energy Efficiency Focus",
    description: "High-performance building envelopes, efficient HVAC, and LED lighting are becoming baseline expectations rather than premium options.",
  },
  {
    trend: "EV Charging Infrastructure",
    description: "New commercial buildings routinely include EV charging or conduit for future installation. Parking ratios now include EV-ready spaces.",
  },
  {
    trend: "Solar Integration",
    description: "Rooftop solar, covered parking arrays, and battery storage are increasingly common in Tampa commercial projects.",
  },
  {
    trend: "Water Conservation",
    description: "Low-flow fixtures, rainwater harvesting, and drought-tolerant landscaping address Florida's water concerns.",
  },
  {
    trend: "Resilience & Hurricane Hardening",
    description: "Beyond code compliance, commercial buildings are incorporating enhanced wind resistance, impact glazing, and backup power.",
  },
];

const faqs = [
  {
    question: "How is Tampa's commercial construction market performing in 2024?",
    answer: "Tampa's commercial construction market remains robust but selective. Industrial and logistics construction continues strong due to e-commerce and port activity. Healthcare construction is growing significantly. Office and retail are more nuanced—new construction is limited, but renovation and tenant improvement activity is healthy. Overall, Tampa Bay outperforms many markets due to continued population and business migration.",
  },
  {
    question: "What are the biggest challenges facing Tampa commercial construction?",
    answer: "The top challenges are: 1) Labor shortage—skilled trades remain hard to find and expensive. 2) Insurance costs—Florida's property insurance crisis affects construction costs and project financing. 3) Material price volatility—while stabilized from 2022 peaks, prices remain elevated. 4) Permitting timelines—rapid growth has strained some jurisdictions' capacity. 5) Interest rates—higher rates have slowed some project pipelines.",
  },
  {
    question: "Are construction costs going up or down in Tampa?",
    answer: "Overall costs are still increasing, but the rate has slowed. Labor costs continue rising 4-6% annually due to chronic shortages. Material costs have largely stabilized after the 2021-2022 spikes—some categories like lumber are down, while electrical and HVAC remain elevated. Insurance is the biggest cost driver, with premiums up 15-25% in Florida. Budget 5-8% annual cost escalation for planning purposes.",
  },
  {
    question: "What types of commercial construction are most in demand?",
    answer: "Industrial/warehouse construction leads demand, driven by e-commerce and supply chain localization. Healthcare facilities (outpatient surgery centers, medical office, senior care) are growing fast due to demographics. Data centers are an emerging high-growth sector. Office construction is selective—focused on Class A spaces with modern amenities. Retail is healthy in the right formats (grocery-anchored, experiential, QSR).",
  },
  {
    question: "How is technology changing commercial construction in Tampa?",
    answer: "Technology adoption is accelerating. BIM is now standard on major projects, reducing coordination issues. Cloud-based project management has improved field-office communication. Drones are common for surveying and progress documentation. Prefabrication is growing to address labor shortages. AI is emerging in estimating and scheduling. These technologies improve quality and efficiency but require upfront investment and training.",
  },
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
            alt="Tampa commercial construction skyline"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa Commercial Construction Trends 2024-2025
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Stay ahead of the market with insights on construction costs, technology adoption, sustainability requirements, and sector-by-sector analysis for Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
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
      </section>

      {/* Market Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Tampa Bay Construction Market Overview
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Tampa Bay's commercial construction market continues to outperform national averages, driven by sustained population growth, business relocations, and infrastructure investment. While the market has normalized from the frenetic pace of 2021-2022, demand remains healthy across most sectors.
            </p>
            <p className="text-gray-600 mb-6">
              The region added over 50,000 residents in 2023 alone, fueling demand for commercial services, healthcare facilities, and logistics infrastructure. Major employers continue relocating or expanding in Tampa Bay, attracted by favorable taxes, business climate, and quality of life. This growth creates a steady pipeline of commercial construction opportunities.
            </p>
            <p className="text-gray-600 mb-8">
              However, challenges persist. The skilled labor shortage shows no signs of easing—contractors report difficulty filling positions across all trades. Insurance costs continue escalating, adding 3-5% to project budgets in some cases. And while material prices have stabilized, they remain well above pre-pandemic levels. Successful projects require realistic budgeting, proactive planning, and experienced partners who understand these dynamics.
            </p>

            <div className="bg-brand-green-light/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">
                Tampa Bay by the Numbers
              </h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-1">$5.2B</div>
                  <p className="text-sm text-gray-600">Commercial construction value (2023)</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-1">3.2M</div>
                  <p className="text-sm text-gray-600">Population (Tampa MSA)</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-1">4.8%</div>
                  <p className="text-sm text-gray-600">Employment growth YoY</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-1">#12</div>
                  <p className="text-sm text-gray-600">Largest US metro area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Analysis */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Construction Demand by Sector
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Understand where the opportunities are in Tampa Bay's commercial construction market.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketTrends.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-brand-green-dark font-heading">{item.trend}</h3>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm font-semibold ${
                    item.direction === 'up' ? 'bg-green-100 text-green-700' :
                    item.direction === 'down' ? 'bg-red-100 text-red-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {item.direction === 'up' && <ArrowUp className="w-4 h-4" />}
                    {item.direction === 'down' && <ArrowDown className="w-4 h-4" />}
                    {item.direction === 'flat' && <Minus className="w-4 h-4" />}
                    {item.direction === 'up' ? 'Growing' : item.direction === 'down' ? 'Declining' : 'Stable'}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700"><strong>Outlook:</strong> {item.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Trends */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-brand-gold" />
              Construction Cost Trends
            </h2>
            <p className="text-gray-600 mb-8">
              Understanding cost trends is essential for budgeting commercial projects in Tampa Bay. Here's what's happening across major cost categories:
            </p>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Category</th>
                    <th className="px-6 py-4 text-left font-heading">YoY Change</th>
                    <th className="px-6 py-4 text-left font-heading">Trend</th>
                    <th className="px-6 py-4 text-left font-heading hidden md:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {costTrends.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{item.category}</td>
                      <td className="px-6 py-4 text-gray-600">{item.change}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                          item.trend === 'up' ? 'bg-red-100 text-red-700' :
                          item.trend === 'down' ? 'bg-green-100 text-green-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {item.trend === 'up' && <ArrowUp className="w-3 h-3" />}
                          {item.trend === 'down' && <ArrowDown className="w-3 h-3" />}
                          {item.trend === 'stable' && <Minus className="w-3 h-3" />}
                          {item.trend.charAt(0).toUpperCase() + item.trend.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-500 text-sm hidden md:table-cell">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              *Data based on Tampa Bay market conditions and industry reports. Actual costs vary by project specifics.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Trends */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading flex items-center justify-center gap-3">
            <Cpu className="w-8 h-8 text-brand-gold" />
            Technology Transforming Construction
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Technology adoption is accelerating in Tampa's commercial construction industry. Here's what's making the biggest impact.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyTrends.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-brand-green-dark font-heading">{item.technology}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    item.adoption === 'Mainstream' ? 'bg-green-100 text-green-700' :
                    item.adoption === 'Growing' ? 'bg-blue-100 text-blue-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {item.adoption}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                <div className="bg-brand-green-light/20 rounded-lg p-3">
                  <p className="text-sm text-brand-green-dark"><strong>Impact:</strong> {item.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading flex items-center gap-3">
              <Leaf className="w-8 h-8 text-brand-gold" />
              Sustainability & Green Building Trends
            </h2>
            <p className="text-gray-600 mb-8">
              Sustainable construction has moved from nice-to-have to essential in Tampa's commercial market. Tenants expect it, investors require it, and regulations increasingly mandate it.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {sustainabilityTrends.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2 font-heading">{item.trend}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tampa-Specific Considerations */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Tampa-Specific Construction Considerations
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">Hurricane Resilience</h3>
                <p className="text-gray-600">
                  Florida's updated building codes following recent hurricane seasons have increased construction costs but significantly improved building resilience. Commercial buildings now incorporate enhanced wind resistance, impact-resistant glazing, and backup power systems as standard. Properties built to modern codes command premium rents and lower insurance costs—a compelling value proposition for developers.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">Insurance Challenges</h3>
                <p className="text-gray-600">
                  Florida's property insurance market remains challenged, directly impacting construction costs and project feasibility. Builder's risk insurance premiums have increased 15-25% in some cases. Projects are budgeting more for insurance and factoring ongoing property insurance costs into feasibility analyses. Working with experienced contractors who understand these requirements helps avoid surprises.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">Permitting Timelines</h3>
                <p className="text-gray-600">
                  Rapid growth has strained some jurisdictions' permitting capacity. Hillsborough County and City of Tampa have invested in process improvements, but complex projects still face 8-12 week permit reviews. Early engagement with building departments, complete submittal packages, and experienced permit expeditors help navigate the process. Some contractors maintain dedicated permitting specialists to accelerate approvals.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">Labor Market Dynamics</h3>
                <p className="text-gray-600">
                  Tampa's construction labor shortage reflects national trends but with local factors. The region's hospitality and logistics industries compete for workers, and housing costs make workforce retention challenging. Contractors investing in training, offering competitive wages, and building long-term subcontractor relationships have advantages. Project schedules must account for labor availability realities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3 font-heading">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
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
            Navigate Tampa's Construction Market With Confidence
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists brings deep market knowledge and proven expertise to your commercial project. Let's discuss how current trends affect your plans.
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
