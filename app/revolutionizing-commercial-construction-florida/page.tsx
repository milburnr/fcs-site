import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Zap, Leaf, Cpu, Building2, TrendingUp, Shield, Users, Globe, Lightbulb, Wrench } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema, ArticleSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Revolutionizing Commercial Construction in Florida | Innovation & Technology",
  description: "Discover how innovative technologies and methods are transforming commercial construction in Florida. Design-build, prefabrication, sustainable practices, and smart building solutions from Tampa Bay's leading contractor.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Revolutionizing Commercial Construction Florida", href: "/revolutionizing-commercial-construction-florida/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Services" },
  { href: "/the-preconstruction-modern-approach-design/", label: "Modern Preconstruction" },
  { href: "/sustainable-commercial-construction-in-florida/", label: "Sustainable Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const revolutionaryTrends = [
  {
    icon: Cpu,
    title: "Technology Integration",
    description: "BIM, drones, IoT sensors, and AI are transforming how we plan, build, and manage commercial projects.",
  },
  {
    icon: Leaf,
    title: "Sustainable Building",
    description: "Net-zero energy, sustainable materials, and wellness-focused design are becoming standard expectations.",
  },
  {
    icon: Zap,
    title: "Accelerated Delivery",
    description: "Design-build, prefabrication, and modular construction compress schedules dramatically.",
  },
  {
    icon: Building2,
    title: "Smart Buildings",
    description: "Connected systems optimize energy, security, and occupant experience in real-time.",
  },
];

const technologyImpact = [
  {
    technology: "Building Information Modeling (BIM)",
    impact: "40-50% reduction in RFIs and rework",
    application: "3D coordination, clash detection, quantity takeoffs, facility management",
    adoption: "Mainstream",
  },
  {
    technology: "Drone Surveying",
    impact: "80% faster site documentation",
    application: "Progress photos, topographic surveys, safety inspections, marketing",
    adoption: "Widespread",
  },
  {
    technology: "Prefabrication/Modular",
    impact: "20-50% schedule compression",
    application: "MEP assemblies, bathroom pods, structural components, wall panels",
    adoption: "Growing rapidly",
  },
  {
    technology: "IoT Sensors",
    impact: "Real-time quality monitoring",
    application: "Concrete curing, environmental conditions, equipment tracking, safety",
    adoption: "Emerging",
  },
  {
    technology: "AI/Machine Learning",
    impact: "Predictive analytics for schedule/cost",
    application: "Risk assessment, schedule optimization, document analysis, estimating",
    adoption: "Early stage",
  },
];

const sustainabilityMetrics = [
  { metric: "Energy Reduction", traditional: "Baseline", modern: "30-50% reduction", pathway: "High-performance envelope, efficient systems, solar" },
  { metric: "Water Usage", traditional: "Baseline", modern: "20-40% reduction", pathway: "Low-flow fixtures, rainwater harvesting, efficient landscaping" },
  { metric: "Construction Waste", traditional: "5-10 lbs/SF", modern: "1-3 lbs/SF", pathway: "Prefabrication, recycling programs, material optimization" },
  { metric: "Indoor Air Quality", traditional: "Code minimum", modern: "Enhanced ventilation", pathway: "Low-VOC materials, increased fresh air, advanced filtration" },
];

const deliveryEvolution = [
  {
    method: "Traditional Design-Bid-Build",
    timeline: "18-24 months",
    riskProfile: "Owner bears most risk",
    bestFor: "Simple projects, public bidding requirements",
    trend: "Declining",
  },
  {
    method: "Design-Build",
    timeline: "12-18 months",
    riskProfile: "Shared/transferred risk",
    bestFor: "Most commercial projects, speed priority",
    trend: "Growing rapidly",
  },
  {
    method: "Integrated Project Delivery (IPD)",
    timeline: "12-16 months",
    riskProfile: "Shared risk/reward",
    bestFor: "Complex healthcare, large institutional",
    trend: "Emerging",
  },
  {
    method: "Progressive Design-Build",
    timeline: "14-20 months",
    riskProfile: "Collaborative risk management",
    bestFor: "Projects needing early contractor input",
    trend: "Growing",
  },
];

const tampaMarketTrends = [
  {
    trend: "Healthcare Expansion",
    driver: "Population growth, aging demographics",
    impact: "High demand for medical office buildings, outpatient facilities",
  },
  {
    trend: "Industrial/Logistics Boom",
    driver: "E-commerce, port activity, distribution needs",
    impact: "Warehouse and distribution center construction surging",
  },
  {
    trend: "Office Evolution",
    driver: "Hybrid work, talent competition",
    impact: "Renovations focus on amenities, flexibility, collaboration",
  },
  {
    trend: "Retail Transformation",
    driver: "Experience economy, omnichannel retail",
    impact: "Smaller footprints, experiential design, mixed-use",
  },
  {
    trend: "Resilience Focus",
    driver: "Hurricane risk, insurance costs, climate awareness",
    impact: "Enhanced building codes, storm hardening, backup systems",
  },
];

const faqs = [
  {
    question: "How is technology changing commercial construction in Florida?",
    answer: "Technology is revolutionizing every phase. BIM enables virtual construction before breaking ground, eliminating costly conflicts. Drones accelerate site documentation and safety monitoring. Prefabrication shifts work to controlled factory environments, improving quality and speed. IoT sensors provide real-time data on conditions affecting quality. AI is beginning to predict project risks and optimize schedules. These technologies reduce cost, accelerate delivery, and improve quality simultaneously."
  },
  {
    question: "What is design-build and why is it becoming dominant?",
    answer: "Design-build consolidates design and construction responsibility under one contract. This eliminates the adversarial dynamic of traditional delivery, where architects and contractors often blame each other for problems. With design-build, one team is accountable for the entire project. This accelerates schedules (design and construction can overlap), reduces cost (fewer conflicts to resolve), and improves communication (one team, one goal). Florida's commercial market has shifted dramatically toward design-build over the past decade."
  },
  {
    question: "How are sustainability requirements changing Florida construction?",
    answer: "Sustainability has evolved from optional to expected. Corporate ESG commitments, tenant preferences, energy costs, and insurance considerations all drive demand for sustainable buildings. Modern commercial projects routinely include high-performance envelopes, efficient HVAC systems, LED lighting, water conservation features, and sometimes solar or other renewables. LEED and WELL certifications are common for Class A properties. Even without formal certification, sustainable features have become standard practice."
  },
  {
    question: "What role does prefabrication play in modern construction?",
    answer: "Prefabrication moves construction work from the job site to controlled factory environments. MEP systems (mechanical, electrical, plumbing) are increasingly assembled as 'racks' or 'modules' off-site, then installed as complete units. Bathroom pods, wall panels, and structural components can also be prefabricated. Benefits include better quality control (climate-controlled environment, skilled labor), faster installation (less site work), reduced waste, and improved safety. Prefab is particularly valuable in Florida where weather can disrupt site work."
  },
  {
    question: "How is the Tampa Bay market different from other Florida markets?",
    answer: "Tampa Bay's commercial construction market reflects its diverse economy. Unlike South Florida's condo focus or Orlando's hospitality dominance, Tampa has balanced demand across office, medical, industrial, and retail sectors. The port drives significant industrial development. Major healthcare systems fuel medical construction. Corporate relocations increase office demand. The region's growth trajectory creates consistent opportunity across building types. Tampa's construction market is also less volatile than tourism-dependent markets."
  }
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ArticleSchema
        headline="Revolutionizing Commercial Construction in Florida"
        description="Discover how innovation and technology are transforming Florida commercial construction."
        datePublished="2024-01-15"
        dateModified="2025-01-15"
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Revolutionary commercial construction in Florida"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Revolutionizing Commercial Construction in Florida
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Innovation is transforming how we build in Florida. From design-build delivery to sustainable practices, from prefabrication to smart building technology—discover the trends reshaping Tampa Bay's commercial construction landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Build with Innovation
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

      {/* Revolutionary Trends */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {revolutionaryTrends.map((trend, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <trend.icon className="w-12 h-12 text-brand-green mx-auto mb-4" />
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">{trend.title}</h3>
                <p className="text-gray-600 text-sm">{trend.description}</p>
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
              The Transformation of Florida Commercial Construction
            </h2>
            <p className="text-gray-600 mb-6">
              Commercial construction in Florida is undergoing its most significant transformation in decades. The convergence of technological innovation, sustainability imperatives, labor market changes, and evolving client expectations is creating a new paradigm for how buildings are designed, built, and operated.
            </p>
            <p className="text-gray-600 mb-6">
              At Florida Construction Specialists, we've embraced these changes as opportunities to deliver better outcomes for our clients. We're not just observers of the revolution—we're participants, integrating new technologies and methods into our practice while maintaining the fundamentals of quality construction that have always defined our work.
            </p>
            <p className="text-gray-600 mb-6">
              The transformation touches every aspect of construction. Delivery methods have shifted from adversarial design-bid-build toward collaborative design-build. Technology enables virtual construction before ground is broken. Sustainability has evolved from optional upgrade to baseline expectation. Prefabrication is moving work from chaotic job sites to controlled factory environments. Smart building systems are changing how buildings operate.
            </p>
            <p className="text-gray-600 mb-6">
              For Tampa Bay building owners and developers, these changes create both opportunity and complexity. Understanding the revolution helps you make informed decisions about your commercial construction projects and select partners capable of delivering modern solutions.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Technology: The Engine of Change
            </h2>
            <p className="text-gray-600 mb-6">
              Technology is the primary driver of construction's revolution. Tools that seemed futuristic a decade ago are now mainstream, and the next wave of innovation is already emerging.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Building Information Modeling (BIM):</strong> BIM has fundamentally changed how we design and coordinate buildings. Instead of 2D drawings that leave interpretation to the field, BIM creates information-rich 3D models where every element is defined precisely. Systems can be coordinated virtually, catching conflicts before they become expensive field problems. Quantities are extracted automatically for accurate estimating. The model becomes a digital asset that supports facility management long after construction ends.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Prefabrication and Modular Construction:</strong> Moving construction work off-site to controlled factory environments improves quality, accelerates schedules, and reduces waste. MEP systems are increasingly assembled as complete racks or modules, arriving on site ready for connection. Bathroom pods, fully finished in factories, are lifted into place in minutes. Wall panels arrive pre-finished, reducing field labor. Florida's weather challenges make prefabrication particularly valuable—work progresses regardless of rain or heat.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Drones and Reality Capture:</strong> Drones have revolutionized site documentation. What once required days of surveying now takes hours. Progress photos captured aerially provide comprehensive project records. Laser scanning creates precise as-built documentation. These technologies improve communication, documentation, and quality control while reducing labor requirements.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Emerging Technologies:</strong> AI and machine learning are beginning to transform project planning and risk management. Predictive analytics identify schedule and cost risks before they materialize. Document analysis automates tedious review processes. IoT sensors provide real-time data on conditions affecting quality. Robotics and automated equipment are entering construction sites. The pace of technological change is accelerating.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Impact Table */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Technology Impact on Commercial Construction
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-4 py-4 text-left font-heading">Technology</th>
                    <th className="px-4 py-4 text-left font-heading">Impact</th>
                    <th className="px-4 py-4 text-left font-heading">Applications</th>
                    <th className="px-4 py-4 text-left font-heading">Adoption</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {technologyImpact.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-4 font-semibold text-gray-700">{row.technology}</td>
                      <td className="px-4 py-4 text-brand-green font-semibold">{row.impact}</td>
                      <td className="px-4 py-4 text-gray-600 text-sm">{row.application}</td>
                      <td className="px-4 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          row.adoption === 'Mainstream' ? 'bg-brand-green/20 text-brand-green-dark' :
                          row.adoption === 'Widespread' ? 'bg-brand-green/15 text-brand-green-dark' :
                          row.adoption === 'Growing rapidly' ? 'bg-brand-gold/20 text-brand-gold' :
                          'bg-gray-200 text-gray-600'
                        }`}>
                          {row.adoption}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Sustainability: From Optional to Essential
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Sustainable construction has evolved from a niche concern to a mainstream requirement. Corporate ESG commitments, tenant preferences, energy economics, and regulatory trends have made sustainability an expected element of quality commercial buildings.
              </p>
            </div>

            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Metric</th>
                    <th className="px-6 py-4 text-left font-heading">Traditional</th>
                    <th className="px-6 py-4 text-left font-heading">Modern</th>
                    <th className="px-6 py-4 text-left font-heading">How We Achieve It</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sustainabilityMetrics.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.metric}</td>
                      <td className="px-6 py-4 text-gray-600">{row.traditional}</td>
                      <td className="px-6 py-4 text-brand-green font-semibold">{row.modern}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{row.pathway}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <Leaf className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Environmental Benefits</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Reduced carbon footprint and greenhouse emissions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Less construction waste in landfills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Reduced water consumption and stormwater impact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Healthier indoor environments for occupants</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <TrendingUp className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Business Benefits</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Lower operating costs (energy, water, maintenance)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Premium rents and higher occupancy rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Attract and retain quality tenants/employees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Meet corporate ESG and sustainability goals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Evolution */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              The Evolution of Project Delivery
            </h2>
            <p className="text-center text-gray-600 mb-8">
              How buildings are delivered has changed dramatically. Design-build and collaborative methods now dominate Florida's commercial market.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-4 py-4 text-left font-heading">Delivery Method</th>
                    <th className="px-4 py-4 text-left font-heading">Timeline</th>
                    <th className="px-4 py-4 text-left font-heading">Risk Profile</th>
                    <th className="px-4 py-4 text-left font-heading">Best For</th>
                    <th className="px-4 py-4 text-left font-heading">Trend</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {deliveryEvolution.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-4 font-semibold text-gray-700">{row.method}</td>
                      <td className="px-4 py-4 text-gray-600">{row.timeline}</td>
                      <td className="px-4 py-4 text-gray-600 text-sm">{row.riskProfile}</td>
                      <td className="px-4 py-4 text-gray-600 text-sm">{row.bestFor}</td>
                      <td className="px-4 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          row.trend === 'Growing rapidly' ? 'bg-brand-green/20 text-brand-green-dark' :
                          row.trend === 'Growing' ? 'bg-brand-green/15 text-brand-green-dark' :
                          row.trend === 'Emerging' ? 'bg-brand-gold/20 text-brand-gold' :
                          'bg-gray-200 text-gray-600'
                        }`}>
                          {row.trend}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Tampa Market Trends */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Tampa Bay Market: Leading Florida's Construction Evolution
            </h2>
            <div className="space-y-6">
              {tampaMarketTrends.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-start gap-4">
                    <TrendingUp className="w-8 h-8 text-brand-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">{item.trend}</h3>
                      <p className="text-gray-600 mb-2"><strong>Driver:</strong> {item.driver}</p>
                      <p className="text-brand-green"><strong>Impact:</strong> {item.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FCS Innovation */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              How Florida Construction Specialists Leads the Revolution
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <Lightbulb className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Technology Adoption</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Full BIM capability with clash detection and coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Drone-based progress documentation and marketing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Prefabrication partnerships for MEP and specialty systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Cloud-based project management for real-time collaboration</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <Shield className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Sustainable Practice</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">LEED-accredited professionals on staff</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Proven experience with sustainable certifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Construction waste recycling programs on all projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Partnerships with sustainable material suppliers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
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
            title="Explore Our Innovative Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Build with Florida's Innovative Construction Leader?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists brings cutting-edge technology and modern methods to every project. Contact us to discuss how innovation can benefit your commercial construction project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Start Your Innovative Project
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
