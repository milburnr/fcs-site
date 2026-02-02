import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, Building2, Shield, Award } from "lucide-react";
import { BUSINESS_INFO, LOCATIONS } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema"
import { Breadcrumb } from "@/components/Breadcrumb";
import { ServiceAreaLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Large-Scale Commercial Construction | $500K - $25M+ Projects",
  description: "Premier commercial construction contractor serving Tampa Bay. From ground-up builds to tenant improvements, we deliver large-scale commercial projects on time and on budget.",
};

const features = [
  "New commercial building construction",
  "Office buildings and corporate campuses",
  "Medical and healthcare facilities",
  "Retail centers and shopping complexes",
  "Hospitality and restaurant buildouts",
  "Educational institutions",
  "Industrial and warehouse facilities",
  "Tenant improvements and renovations"
];

const projectTypes = [
  {
    category: "Office Buildings & Corporate Campuses",
    description: "Modern workspace environments designed for productivity and collaboration",
    features: [
      "Class A office buildings from 10,000 to 200,000+ square feet",
      "Corporate headquarters and campus developments", 
      "Flexible workspace designs for hybrid work models",
      "High-performance building systems and energy efficiency",
      "Advanced technology integration including high-speed connectivity",
      "LEED and sustainable building certification capabilities"
    ],
    considerations: "Tampa Bay's competitive office market demands buildings with modern amenities, flexible floor plates, and efficient building systems. Our designs accommodate future workplace evolution while optimizing construction and operating costs.",
    typicalRange: "$150-400 per SF",
    timeline: "12-18 months"
  },
  {
    category: "Medical & Healthcare Facilities",
    description: "Specialized construction for demanding healthcare environments",
    features: [
      "Outpatient clinics and specialty medical offices",
      "Ambulatory surgery centers with specialized infrastructure",
      "Imaging centers requiring radiation shielding and vibration control",
      "Clinical laboratories with contamination control systems",
      "Medical office buildings with specialized HVAC and electrical",
      "Compliance with complex healthcare regulations and codes"
    ],
    considerations: "Healthcare construction requires specialized expertise in infection control, medical gas systems, specialized HVAC, and regulatory compliance. Florida's growing population and aging demographics drive strong demand for healthcare facilities.",
    typicalRange: "$200-500 per SF",
    timeline: "14-24 months"
  },
  {
    category: "Retail & Shopping Centers",
    description: "Commercial retail spaces that drive customer engagement and sales",
    features: [
      "Shopping centers and strip mall developments",
      "Big-box retail and anchor tenant buildouts",
      "Restaurant and hospitality venue construction",
      "Automotive service centers and dealerships",
      "Convenience stores and fuel stations",
      "Mixed-use developments combining retail with office or residential"
    ],
    considerations: "Retail construction in Florida requires attention to customer experience, efficient circulation, and adaptability for changing retail formats. Hurricane-resistant design and energy-efficient systems are essential for long-term performance.",
    typicalRange: "$100-300 per SF",
    timeline: "8-16 months"
  },
  {
    category: "Industrial & Distribution",
    description: "Functional facilities optimized for logistics and manufacturing",
    features: [
      "Distribution centers and fulfillment facilities",
      "Light manufacturing and assembly plants",
      "Cold storage and refrigerated warehouse facilities",
      "Flex space combining office, warehouse, and light industrial",
      "Data centers with specialized infrastructure requirements",
      "Research and development facilities"
    ],
    considerations: "Industrial construction emphasizes functionality, efficiency, and future adaptability. Tampa Bay's logistics advantages create strong demand for distribution facilities, while the region's tech growth drives need for specialized facilities.",
    typicalRange: "$75-200 per SF",
    timeline: "10-16 months"
  }
];

const constructionChallenges = [
  {
    challenge: "Florida Building Code Compliance",
    description: "Navigating the nation's strictest building codes designed for hurricane resistance",
    solutions: [
      "In-house engineering expertise familiar with Florida-specific requirements",
      "Early code consultation during pre-construction planning",
      "Established relationships with local building departments",
      "Experience with hurricane-resistant design and construction methods",
      "Thorough permitting process management and timeline planning"
    ],
    fcsAdvantage: "43 years of Florida construction experience includes adaptation to major code changes following Hurricane Andrew and subsequent updates. We understand both the technical requirements and efficient compliance strategies."
  },
  {
    challenge: "Skilled Labor Availability",
    description: "Tampa Bay's construction boom has created competitive pressure for skilled trades",
    solutions: [
      "Long-term relationships with established subcontractors",
      "Early subcontractor engagement and contract execution",
      "Workforce development partnerships with trade schools",
      "Competitive compensation and working conditions to attract top talent",
      "Efficient project scheduling to maximize labor productivity"
    ],
    fcsAdvantage: "Our established subcontractor network includes long-term partnerships spanning decades. Many subcontractors prefer working with FCS due to our reputation for prompt payment and professional project management."
  },
  {
    challenge: "Material Costs & Availability",
    description: "Volatile material markets and supply chain disruptions affect project economics",
    solutions: [
      "Early material procurement and supplier agreements",
      "Value engineering to optimize material specifications",
      "Multiple supplier relationships for critical materials",
      "Material escalation clauses and cost management strategies",
      "Alternative material options and substitution protocols"
    ],
    fcsAdvantage: "Our purchasing power and supplier relationships, developed over four decades, provide priority access to materials and competitive pricing. We maintain current market intelligence to advise clients on optimal timing and strategies."
  },
  {
    challenge: "Environmental Regulations",
    description: "Complex environmental permitting and compliance requirements",
    solutions: [
      "Early environmental assessment and permitting",
      "Experienced environmental consultants and legal counsel",
      "Wetlands mitigation and stormwater management expertise",
      "Contaminated site remediation capabilities",
      "Sustainable construction practices and green building certification"
    ],
    fcsAdvantage: "We've successfully navigated environmental challenges on dozens of projects, from simple stormwater permits to complex brownfield remediation. Our experience helps predict and avoid environmental delays that can extend projects by months."
  }
];

const marketInsights = [
  {
    sector: "Office Market",
    currentTrends: "Hybrid work driving demand for flexible, technology-enabled spaces with enhanced air quality and collaborative areas",
    opportunities: "Medical office buildings, flex space, and small-format office buildings under 50,000 SF",
    challenges: "Large corporate spaces seeing reduced demand; focus shifting to amenity-rich, efficient buildings",
    fcsPosition: "Our experience with medical office and smaller office buildings positions us well for current market demands. We've completed $8M+ in office projects over the past 3 years."
  },
  {
    sector: "Healthcare",
    currentTrends: "Aging population driving demand for outpatient facilities, specialty clinics, and senior services",
    opportunities: "Outpatient surgery centers, imaging facilities, medical office buildings, and assisted living",
    challenges: "Complex regulatory environment and specialized construction requirements increase costs and timelines",
    fcsPosition: "Healthcare represents 35% of our current project pipeline. Our specialized knowledge of healthcare construction requirements provides significant competitive advantages."
  },
  {
    sector: "Retail",
    currentTrends: "E-commerce pressure driving need for omnichannel retail formats and experiential spaces",
    opportunities: "Last-mile distribution, service-oriented retail, restaurant and hospitality venues",
    challenges: "Traditional retail formats struggling; need for adaptable spaces that can evolve with tenant needs",
    fcsPosition: "We focus on small-format retail, restaurants, and service businesses that benefit from physical presence. Recent projects include automotive service centers and specialized retail concepts."
  },
  {
    sector: "Industrial",
    currentTrends: "E-commerce growth and supply chain reshoring driving strong demand for distribution and manufacturing space",
    opportunities: "Last-mile delivery hubs, cold storage, light manufacturing, and flex industrial space",
    challenges: "Land availability and rising construction costs pressuring project economics",
    fcsPosition: "Industrial construction aligns with our expertise in functional, cost-effective buildings. We're seeing increased demand for specialized facilities like cold storage and data centers."
  }
];

const qualityAssurance = [
  {
    phase: "Pre-Construction",
    activities: [
      "Detailed constructability reviews of design documents",
      "Value engineering workshops with design team and owner",
      "Subcontractor qualification and reference verification",
      "Material specification review and supplier vetting",
      "Risk assessment and mitigation planning"
    ],
    deliverables: "Constructability report, value engineering recommendations, qualified subcontractor list, risk management plan"
  },
  {
    phase: "Construction",
    activities: [
      "Daily quality control inspections by superintendent",
      "Third-party special inspections as required by code",
      "Material testing and verification of certifications",
      "Regular progress photography and documentation",
      "Weekly project meetings with all stakeholders"
    ],
    deliverables: "Daily inspection reports, test results, progress photos, meeting minutes, punch list tracking"
  },
  {
    phase: "Closeout",
    activities: [
      "Comprehensive punch list development and completion",
      "Building systems commissioning and performance verification",
      "Owner training on building operations and maintenance",
      "Warranty documentation and as-built drawing delivery",
      "Post-occupancy support and issue resolution"
    ],
    deliverables: "Punch list completion certificate, commissioning reports, O&M manuals, warranty documentation, as-built drawings"
  }
];

const fcsAdvantages = [
  {
    advantage: "In-House Engineering Capability",
    description: "Our in-house engineering team provides design-build services and design review capabilities",
    benefits: [
      "Faster project delivery through integrated design-construction",
      "Early identification and resolution of constructability issues",
      "Value engineering opportunities throughout project development",
      "Single-point accountability for design and construction performance",
      "Cost savings through optimized design and construction methods"
    ]
  },
  {
    advantage: "Local Market Expertise",
    description: "43 years of Tampa Bay construction experience provides unmatched local knowledge",
    benefits: [
      "Established relationships with building departments and inspectors",
      "Understanding of local soil conditions and foundation requirements",
      "Knowledge of jurisdiction-specific permitting processes and timelines",
      "Experience with hurricane-resistant construction methods",
      "Familiarity with local subcontractor and supplier capabilities"
    ]
  },
  {
    advantage: "Financial Strength & Bonding",
    description: "Strong financial position enables large projects and provides client security",
    benefits: [
      "Bonding capability for projects of virtually any size",
      "Financial stability provides confidence throughout long-term projects",
      "Ability to handle multiple large projects simultaneously",
      "Strong supplier and subcontractor relationships based on prompt payment",
      "Investment in technology and equipment for improved efficiency"
    ]
  },
  {
    advantage: "Prime Contractor Focus",
    description: "We only work as prime general contractor, never as a subcontractor",
    benefits: [
      "Direct relationship and accountability to building owner",
      "Complete project control from start to finish",
      "Ability to optimize subcontractor selection and management",
      "Full responsibility for schedule, budget, and quality outcomes",
      "Streamlined communication and decision-making processes"
    ]
  }
];

const faqs = [
  {
    "question": "What size commercial projects does FCS handle?",
    "answer": "Florida Construction Specialists handles commercial construction projects ranging from $500,000 to over $25 million. We specialize in large-scale projects including office buildings, medical facilities, retail centers, hospitality venues, and educational institutions."
  },
  {
    "question": "Do you work as a subcontractor or prime contractor?",
    "answer": "FCS always serves as the prime general contractor on our projects. We do not work as a subcontractor. As prime contractor, we maintain full project control, direct relationships with owners, and complete accountability for project delivery."
  },
  {
    "question": "What is your bonding capacity?",
    "answer": "Florida Construction Specialists maintains financial strength to handle projects of virtually any size, allowing us to take on large-scale commercial projects with confidence."
  },
  {
    "question": "How long does a typical commercial project take?",
    "answer": "Commercial project timelines vary based on scope. Tenant improvements typically take 2-4 months, while ground-up construction ranges from 8-18 months."
  },
  {
    "question": "Do you provide design-build services?",
    "answer": "Yes, FCS offers full design-build services where we manage both design and construction under a single contract, streamlining communication and accelerating delivery."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial Construction", href: "/commercial-construction/" },
];

export default function CommercialConstructionPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Commercial Construction"
        serviceDescription="Premier commercial construction contractor serving Tampa Bay. From ground-up builds to tenant improvements, we deliver large-scale commercial projects on time and on budget."
        minPrice="500000"
      />

      <Breadcrumb items={[
        { name: "Services", href: "/services/" },
        { name: "Commercial Construction", href: "/commercial-construction/" },
      ]} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Commercial construction project in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <span className="text-brand-gold font-semibold">$500K - $25M+ Projects</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Large-Scale Commercial Construction
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Premier commercial construction contractor serving Tampa Bay. From ground-up builds to tenant improvements, we deliver large-scale commercial projects on time and on budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule Project Consultation
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
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-6 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">In-House Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">150+ Projects Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Prime Contractor Only</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Expert Commercial Construction Services
              </h2>
              <p className="text-gray-600 mb-6">
                Over 43 years of commercial construction experience in Tampa Bay, Florida Construction Specialists has evolved from a small local contractor to a leading commercial builder with over $75 million in completed projects. Our journey reflects the growth and transformation of the Tampa Bay market, from the economic expansion of the 1980s through the technology boom of recent years.
              </p>
              <p className="text-gray-600 mb-6">
                As a prime general contractor specializing in projects from $500,000 to $25 million and beyond, we bring institutional knowledge, established relationships, and proven systems to every project. Our team includes licensed engineers, experienced project managers, and skilled superintendents who understand the unique challenges of Florida commercial construction.
              </p>
              <p className="text-gray-600 mb-6">
                The Tampa Bay commercial construction market has become increasingly sophisticated, with clients demanding higher quality, faster delivery, and greater value. We've adapted our methods and capabilities to meet these evolving requirements while maintaining the personal service and accountability that established our reputation.
              </p>
              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-brand-green-bg rounded-2xl p-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6">
                Our Commercial Construction Services Include:
              </h3>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-12 text-center font-heading">
            Our Commercial Construction Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation", desc: "We discuss your project goals, timeline, and budget requirements." },
              { step: "2", title: "Pre-Construction", desc: "Site analysis, detailed budgeting, and comprehensive project planning." },
              { step: "3", title: "Construction", desc: "Expert execution with strict quality control and timeline management." },
              { step: "4", title: "Completion", desc: "Final inspections, punch list, and seamless project handover." },
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-green text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Choose FCS for Commercial Construction?
            </h2>
            <p className="text-gray-600">
              Florida Construction Specialists is always the prime contractor—never a subcontractor.
              We bring 20+ years of experience and $25M+ in completed projects to every job.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Prime Contractor</h3>
              <p className="text-gray-600">Direct accountability and project control on every job.</p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Proven Track Record</h3>
              <p className="text-gray-600">$25M+ in completed projects throughout Tampa Bay.</p>
            </div>
            <div className="card text-center p-6">
              <Building2 className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Large-Scale Expertise</h3>
              <p className="text-gray-600">Specializing in projects from $500,000 to $25M+.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types & Specializations */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
            Commercial Construction Specializations
          </h2>
          <div className="prose prose-lg max-w-4xl mx-auto mb-12">
            <p className="text-gray-600">
              Florida Construction Specialists has developed specialized expertise across multiple commercial construction sectors, enabling us to deliver superior results for complex projects with unique requirements.
            </p>
          </div>
          <div className="space-y-8">
            {projectTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-brand-green-dark mb-4">{type.category}</h3>
                    <p className="text-gray-600 mb-6">{type.description}</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {type.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-green mt-1 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-800 mb-2">Typical Investment Range</h4>
                      <p className="text-brand-green font-bold text-lg">{type.typicalRange}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-800 mb-2">Typical Timeline</h4>
                      <p className="text-gray-600">{type.timeline}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Tampa Bay Considerations</h4>
                      <p className="text-gray-600 text-sm">{type.considerations}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
            Tampa Bay Commercial Construction Market Insights
          </h2>
          <div className="prose prose-lg max-w-4xl mx-auto mb-12">
            <p className="text-gray-600">
              Our four decades in the Tampa Bay market provide unique insights into construction trends, opportunities, and challenges. Understanding market dynamics helps clients make informed decisions about timing, design, and investment strategies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {marketInsights.map((insight, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">{insight.sector}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Current Trends</h4>
                    <p className="text-gray-600 text-sm">{insight.currentTrends}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Market Opportunities</h4>
                    <p className="text-gray-600 text-sm">{insight.opportunities}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Current Challenges</h4>
                    <p className="text-gray-600 text-sm">{insight.challenges}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-brand-green">
                    <h4 className="font-bold text-gray-800 mb-2">FCS Market Position</h4>
                    <p className="text-gray-600 text-sm">{insight.fcsPosition}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Challenges & Solutions */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
            Overcoming Florida Commercial Construction Challenges
          </h2>
          <div className="prose prose-lg max-w-4xl mx-auto mb-12">
            <p className="text-gray-600">
              Commercial construction in Florida presents unique challenges that require specialized expertise and proven solutions. Our 43 years of experience has taught us how to navigate these challenges efficiently and cost-effectively.
            </p>
          </div>
          <div className="space-y-8">
            {constructionChallenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-xl p-8">
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">{challenge.challenge}</h3>
                <p className="text-gray-600 mb-6">{challenge.description}</p>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-4">Industry Solutions</h4>
                    <ul className="space-y-2">
                      {challenge.solutions.map((solution, solIndex) => (
                        <li key={solIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-brand-green-bg p-6 rounded-lg">
                    <h4 className="font-bold text-brand-green-dark mb-3">FCS Competitive Advantage</h4>
                    <p className="text-gray-600 text-sm">{challenge.fcsAdvantage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
            Quality Assurance Throughout Construction
          </h2>
          <div className="prose prose-lg max-w-4xl mx-auto mb-12">
            <p className="text-gray-600">
              Quality construction requires systematic processes, not just good intentions. Our quality assurance program spans every project phase, ensuring consistent results and client satisfaction.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {qualityAssurance.map((phase, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">{phase.phase}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Key Activities</h4>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Deliverables</h4>
                    <p className="text-gray-600 text-sm">{phase.deliverables}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FCS Competitive Advantages */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
            The FCS Advantage in Commercial Construction
          </h2>
          <div className="prose prose-lg max-w-4xl mx-auto mb-12">
            <p className="text-gray-600">
              Four decades of commercial construction experience has developed unique capabilities that set Florida Construction Specialists apart from other contractors in the Tampa Bay market.
            </p>
          </div>
          <div className="space-y-6">
            {fcsAdvantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-xl p-8">
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">{advantage.advantage}</h3>
                <p className="text-gray-600 mb-6">{advantage.description}</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {advantage.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <ServiceAreaLinks service="commercial-construction" serviceName="Commercial Construction" />

      {/* FAQ */}
      <FAQWithSchema items={faqs} title="Commercial Construction FAQs" />

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Start Your Commercial Construction Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. We specialize in projects $500,000 and above.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Consultation
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
