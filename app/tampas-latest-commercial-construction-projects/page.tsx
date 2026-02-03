import Link from "next/link";
import Image from "next/image";
import { Phone, Building2, TrendingUp, MapPin, Calendar, ArrowRight, CheckCircle, DollarSign, Users } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa Commercial Construction Projects 2024-2025",
  description: "Explore Tampa's latest commercial construction projects. See what's being built across Tampa Bay—from downtown skyscrapers to suburban retail centers.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa's Latest Commercial Construction Projects", href: "/tampas-latest-commercial-construction-projects/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/tampa-commercial-construction-trends-updates-2024/", label: "2024 Construction Trends" },
  { href: "/top-commercial-contractors-in-tampa/", label: "Top Tampa Contractors" },
  { href: "/tampa-commercial-construction-networking-events/", label: "Networking Events" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const developmentDistricts = [
  {
    district: "Downtown Tampa/Water Street",
    projects: "Mixed-use towers, office buildings, hospitality",
    highlights: "Water Street Tampa continues transforming the waterfront with billions in development including luxury residences, Class A office, and world-class hospitality.",
    investment: "$3.5B+",
    status: "Multiple phases ongoing",
  },
  {
    district: "Westshore Business District",
    projects: "Office renovations, retail redevelopment, mixed-use",
    highlights: "Tampa's traditional business center is reinventing itself with major renovations and repositioning projects to compete with newer developments.",
    investment: "$500M+",
    status: "Active redevelopment",
  },
  {
    district: "Channelside/Ybor City",
    projects: "Entertainment, hospitality, residential, office",
    highlights: "The area continues to evolve as an entertainment and residential destination with significant new development adjacent to historic Ybor City.",
    investment: "$400M+",
    status: "Expansion continuing",
  },
  {
    district: "I-75 Corridor",
    projects: "Industrial, distribution, healthcare, office parks",
    highlights: "The eastern corridor sees explosive growth in logistics and distribution centers serving Tampa Bay's growing e-commerce demands.",
    investment: "$600M+",
    status: "High demand ongoing",
  },
  {
    district: "Gateway/Carillon",
    projects: "Office parks, medical facilities, hospitality",
    highlights: "Pinellas County's premier office submarket continues to attract corporate headquarters and regional offices with proximity to the beaches.",
    investment: "$300M+",
    status: "Steady development",
  },
  {
    district: "Wesley Chapel/New Tampa",
    projects: "Retail centers, medical facilities, mixed-use",
    highlights: "Rapid residential growth drives commercial development including significant retail, healthcare, and professional office projects.",
    investment: "$400M+",
    status: "Fast-growing",
  },
];

const projectTypes = [
  {
    type: "Industrial & Logistics",
    trend: "Leading Sector",
    description: "Tampa Bay's industrial market is red-hot. E-commerce, supply chain diversification, and port activity drive demand for warehouses, distribution centers, and last-mile facilities.",
    activity: ["Speculative warehouse development", "Build-to-suit facilities", "Cold storage expansion", "Last-mile distribution centers"],
    sqft: "5M+ SF under construction",
  },
  {
    type: "Healthcare",
    trend: "Strong Growth",
    description: "Aging demographics and healthcare system expansion fuel significant medical construction—from major hospital projects to outpatient facilities and senior living.",
    activity: ["Hospital expansions", "Ambulatory surgery centers", "Medical office buildings", "Senior living communities"],
    sqft: "2M+ SF in development",
  },
  {
    type: "Mixed-Use Developments",
    trend: "High Activity",
    description: "Walkable, live-work-play developments continue transforming Tampa's urban areas. These projects combine residential, office, retail, and hospitality.",
    activity: ["Urban infill projects", "Transit-oriented development", "Waterfront development", "Town center concepts"],
    sqft: "3M+ SF in pipeline",
  },
  {
    type: "Office",
    trend: "Selective",
    description: "New office construction is focused on Class A amenity-rich space. Significant activity in renovations and repositioning of older buildings.",
    activity: ["Trophy office towers", "Creative office conversions", "Spec suite programs", "Tenant improvements"],
    sqft: "1.5M+ SF new/renovated",
  },
  {
    type: "Retail",
    trend: "Stable",
    description: "Retail construction focuses on grocery-anchored centers, quick-service restaurants, and experiential retail. E-commerce has reduced but not eliminated demand.",
    activity: ["Grocery-anchored centers", "QSR and fast-casual", "Entertainment venues", "Adaptive reuse"],
    sqft: "1M+ SF active",
  },
  {
    type: "Hospitality",
    trend: "Recovering",
    description: "Tampa's tourism resurgence and convention business drive hotel construction, particularly in downtown and beach markets.",
    activity: ["Full-service hotels", "Select-service properties", "Resort development", "Renovation programs"],
    sqft: "2,000+ rooms in pipeline",
  },
];

const marketHighlights = [
  {
    stat: "$5.2B",
    label: "Annual commercial construction value in Tampa Bay",
  },
  {
    stat: "12M+ SF",
    label: "Commercial space under construction",
  },
  {
    stat: "#1",
    label: "Industrial market growth in Florida",
  },
  {
    stat: "4.8%",
    label: "Year-over-year employment growth",
  },
];

const faqs = [
  {
    question: "What types of commercial construction are most active in Tampa right now?",
    answer: "Industrial and logistics construction leads Tampa's market, driven by e-commerce and supply chain activity. Healthcare construction is the second most active sector, fueled by demographics. Mixed-use development remains strong in urban areas. Office construction is selective but active for premium space. Retail and hospitality continue recovering post-pandemic.",
  },
  {
    question: "Where is the most development happening in Tampa Bay?",
    answer: "Downtown Tampa/Water Street sees the highest-profile development with major mixed-use projects. The I-75 corridor is hot for industrial construction. Wesley Chapel/New Tampa leads suburban commercial growth. Westshore is experiencing significant renovation activity. Gateway/Carillon remains strong for office and medical.",
  },
  {
    question: "Is it a good time to build commercial projects in Tampa?",
    answer: "Tampa's fundamentals remain strong—population growth, business migration, and economic diversification support commercial development. However, construction costs have risen and interest rates have increased financing costs. Successful projects require realistic budgeting, quality locations, and experienced development teams. The right projects continue to move forward successfully.",
  },
  {
    question: "How does Tampa's construction market compare to other Florida cities?",
    answer: "Tampa Bay is Florida's largest construction market by volume, slightly ahead of Miami-Dade. The region leads Florida in industrial development and ranks second in healthcare construction. Tampa's diversified economy provides more stability than tourism-dependent markets, making it attractive for long-term commercial investment.",
  },
  {
    question: "What challenges do commercial construction projects face in Tampa?",
    answer: "Key challenges include: rising construction costs, labor shortages in skilled trades, extended permitting timelines in some jurisdictions, hurricane season scheduling constraints, and increased insurance costs. Experienced contractors who understand these challenges can help navigate them successfully.",
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
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Tampa commercial construction skyline"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa's Latest Commercial Construction Projects
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            From downtown skyscrapers to suburban distribution centers, see what's shaping Tampa Bay's commercial landscape in 2024-2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Start Your Project
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

      {/* Market Overview Stats */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading text-center">
              Tampa Bay Construction at a Glance
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {marketHighlights.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-brand-gold mb-1">{item.stat}</div>
                  <p className="text-sm text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
            
            <p className="text-xl text-gray-600 mb-6">
              Tampa Bay's commercial construction market continues to thrive despite economic headwinds. The region's population growth, business-friendly environment, and strategic location drive sustained development across virtually every commercial sector.
            </p>
            <p className="text-gray-600 mb-8">
              While the pace has moderated from the frenetic activity of 2021-2022, quality projects continue moving forward. Developers who secure financing, assemble experienced teams, and identify the right opportunities are finding success. The market rewards disciplined development over speculative excess.
            </p>
          </div>
        </div>
      </section>

      {/* Development Districts */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Development Hot Spots Across Tampa Bay
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Commercial construction activity varies by submarket. Here's where the action is happening.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentDistricts.map((district, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-brand-gold" />
                  <h3 className="text-xl font-bold text-brand-green-dark font-heading">{district.district}</h3>
                </div>
                <p className="text-sm text-brand-gold mb-3">{district.projects}</p>
                <p className="text-gray-600 text-sm mb-4">{district.highlights}</p>
                <div className="flex justify-between text-sm border-t pt-3">
                  <div>
                    <span className="font-semibold text-gray-700">Investment:</span>
                    <span className="text-gray-600 ml-1">{district.investment}</span>
                  </div>
                  <div>
                    <span className="text-brand-green font-semibold">{district.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Construction Activity by Sector
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Different commercial sectors show varying levels of activity and opportunity.
          </p>
          <div className="space-y-6 max-w-4xl mx-auto">
            {projectTypes.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-brand-green-dark font-heading">{item.type}</h3>
                  <span className={`mt-2 md:mt-0 px-3 py-1 rounded-full text-sm font-semibold ${
                    item.trend === 'Leading Sector' ? 'bg-green-100 text-green-700' :
                    item.trend === 'Strong Growth' ? 'bg-blue-100 text-blue-700' :
                    item.trend === 'High Activity' ? 'bg-purple-100 text-purple-700' :
                    item.trend === 'Selective' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {item.trend}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Active Project Types:</p>
                    <ul className="space-y-1">
                      {item.activity.map((a, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                          <ArrowRight className="w-4 h-4 text-brand-gold flex-shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-end">
                    <div className="bg-brand-green-light/20 rounded-lg p-3 w-full">
                      <p className="text-sm text-brand-green-dark"><strong>Current Activity:</strong> {item.sqft}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Outlook */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Looking Ahead: Tampa's Construction Pipeline
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                Tampa Bay's commercial construction pipeline remains healthy, though more disciplined than the speculative surge of recent years. Several factors support continued development activity through 2025 and beyond.
              </p>
              
              <h3 className="text-xl font-bold text-brand-green-dark mt-8 mb-4 font-heading">Growth Drivers</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                  <span><strong>Population Growth:</strong> Tampa Bay continues adding 50,000+ residents annually, creating sustained demand for commercial services.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                  <span><strong>Corporate Relocations:</strong> Business migration from higher-cost states brings jobs and commercial space needs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                  <span><strong>Infrastructure Investment:</strong> Port expansion, highway improvements, and transit development enable commercial growth.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-brand-green flex-shrink-0 mt-1" />
                  <span><strong>Demographics:</strong> Aging population drives healthcare construction; young professionals fuel urban development.</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-brand-green-dark mt-8 mb-4 font-heading">What We're Watching</h3>
              <p className="mb-6">
                Interest rates will significantly impact project pipelines—especially for speculative development. Labor availability continues constraining capacity. Insurance costs affect project feasibility, particularly for coastal locations. And permitting timelines require realistic project schedules.
              </p>
              <p>
                Despite these challenges, Tampa Bay's strong fundamentals position it well for continued commercial development. The region's diversified economy, favorable tax environment, and quality of life continue attracting the businesses and residents that drive commercial construction demand.
              </p>
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
            Ready to Add Your Project to Tampa's Skyline?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From concept to completion, Florida Construction Specialists delivers the expertise Tampa's most demanding projects require.
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
