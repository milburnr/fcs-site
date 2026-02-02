import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Award, Building2, Users, Shield, Star, TrendingUp, Target, MapPin, Clock } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Leading Commercial Contractors in Tampa",
  description: "Discover Tampa's leading commercial contractors. Learn what makes contractors industry leaders and how Florida Construction Specialists delivers excellence.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Leading Commercial Contractors in Tampa", href: "/leading-commercial-contractors-in-tampa/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/top-commercial-contractors-in-tampa/", label: "Top Tampa Contractors" },
  { href: "/hiring-a-commercial-contractor-in-tampa/", label: "Hiring Guide" },
  { href: "/floridas-top-commercial-contractor-in-tampa/", label: "Florida's Top Contractor" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const leadershipQualities = [
  {
    icon: TrendingUp,
    quality: "Consistent Track Record",
    description: "Leaders don't have one good year—they deliver consistently over decades. Look for contractors with long histories of successful projects across market cycles.",
    evidence: "Portfolio spanning 15+ years, multiple economic cycles, diverse project types",
  },
  {
    icon: Users,
    quality: "Talent Retention",
    description: "The best contractors retain their best people. High turnover indicates problems; low turnover indicates a well-run company where people want to work.",
    evidence: "Long-tenured project managers and superintendents, low employee turnover",
  },
  {
    icon: Shield,
    quality: "Financial Stability",
    description: "Leading contractors have the financial strength to weather challenges without jeopardizing your project. They don't chase every project to keep the lights on.",
    evidence: "Strong bonding capacity, bank references, selectivity in project pursuit",
  },
  {
    icon: Award,
    quality: "Industry Recognition",
    description: "Peer recognition through awards, association leadership, and industry involvement indicates respect within the construction community.",
    evidence: "Construction awards, association board positions, industry speaking invitations",
  },
  {
    icon: Star,
    quality: "Client Loyalty",
    description: "Repeat clients are the ultimate endorsement. When clients return project after project, it demonstrates satisfaction that goes beyond one successful job.",
    evidence: "High percentage of repeat clients, long-term client relationships",
  },
  {
    icon: Target,
    quality: "Specialized Expertise",
    description: "Leading contractors develop deep expertise in specific areas—whether project types, delivery methods, or client sectors—rather than being generalists.",
    evidence: "Clear areas of specialization with documented success",
  },
];

const whatLeadersDoDifferently = [
  {
    area: "Preconstruction",
    standard: "Basic estimating and scheduling before construction",
    leader: "Comprehensive planning that identifies problems before they cost money, value engineering that enhances value without cutting corners, realistic budgets with appropriate contingency",
  },
  {
    area: "Communication",
    standard: "Weekly meetings and reports",
    leader: "Proactive updates that anticipate owner questions, transparent discussion of challenges with proposed solutions, communication style tailored to client preferences",
  },
  {
    area: "Problem-Solving",
    standard: "Address problems as they arise",
    leader: "Anticipate problems before they occur through experience and planning, present solutions rather than just problems, take ownership rather than pointing fingers",
  },
  {
    area: "Quality Control",
    standard: "Meet specification requirements",
    leader: "Exceed expectations through attention to detail, quality systems that prevent defects rather than just catch them, pride in workmanship visible in every detail",
  },
  {
    area: "Subcontractor Relations",
    standard: "Competitive bidding for each project",
    leader: "Long-term relationships with proven subcontractors, loyalty that ensures your project gets their best crews, fair treatment that attracts quality subcontractors to their projects",
  },
  {
    area: "Safety",
    standard: "OSHA compliance",
    leader: "Safety culture where zero incidents is the only acceptable goal, industry-leading safety metrics, investment in safety training and equipment",
  },
];

const selectionCriteria = [
  {
    criterion: "Experience & Portfolio",
    weight: "25%",
    whatToLook: [
      "15+ years in business",
      "3-5 similar projects recently completed",
      "References from similar project types",
      "Portfolio demonstrating quality",
    ],
  },
  {
    criterion: "Team & Capabilities",
    weight: "20%",
    whatToLook: [
      "Experienced project manager assigned",
      "Strong safety record (EMR < 1.0)",
      "Adequate staffing for your project",
      "Quality subcontractor relationships",
    ],
  },
  {
    criterion: "Years Experience",
    weight: "15%",
    whatToLook: [
      "Bonding capacity > project size",
      "Adequate insurance coverage",
      "Good banking relationships",
      "Stable financial history",
    ],
  },
  {
    criterion: "Reputation & References",
    weight: "20%",
    whatToLook: [
      "Positive client references",
      "Industry recognition/awards",
      "No significant legal issues",
      "Strong subcontractor reputation",
    ],
  },
  {
    criterion: "Fit & Communication",
    weight: "10%",
    whatToLook: [
      "Communication style alignment",
      "Cultural fit with your organization",
      "Responsive to questions",
      "Collaborative approach",
    ],
  },
  {
    criterion: "Value & Pricing",
    weight: "10%",
    whatToLook: [
      "Competitive (not lowest) pricing",
      "Transparent cost breakdown",
      "Reasonable payment terms",
      "Fair approach to changes",
    ],
  },
];

const faqs = [
  {
    question: "What makes a contractor a 'leader' in Tampa's market?",
    answer: "Leading contractors demonstrate consistent excellence over time—not just one successful project. They retain talented people who clients ask for by name. They have financial stability that ensures project completion regardless of market conditions. They earn repeat business and referrals. And they contribute to the industry through association involvement, training programs, and mentorship of the next generation.",
  },
  {
    question: "Are the largest contractors always the best choice?",
    answer: "Not necessarily. The best contractor is one whose typical project size and type match yours. A contractor who builds $100M hospitals may not give adequate attention to your $1M tenant improvement. Conversely, a small contractor may lack resources for complex projects. Look for contractors where your project represents meaningful work—typically 5-15% of their annual volume.",
  },
  {
    question: "How do I verify a contractor's reputation?",
    answer: "Go beyond what they tell you. Contact references and ask specific questions about budget accuracy, schedule performance, and problem resolution. Check online reviews for patterns (not outliers). Verify license status and look for complaints at myfloridalicense.com. Ask subcontractors who they like working for—they know who's fair and professional.",
  },
  {
    question: "Should price be the deciding factor?",
    answer: "Price should be a factor but rarely the deciding factor. The lowest bid often indicates missed scope, inexperience, or a plan to make it up through change orders. Evaluate total value: experience, reputation, communication, and realistic timelines matter as much as price. Choose the best-qualified contractor within your budget range, typically the middle third of bids.",
  },
  {
    question: "What questions should I ask leading contractors?",
    answer: "Ask about their experience with your project type, who will manage your project and their background, their safety record (EMR), how they handle challenges and changes, what differentiates them from competitors, and why they want your project. Their answers—and how they answer—reveal their professionalism and fit for your project.",
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
            alt="Leading commercial contractors in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa's Leading Commercial Contractors
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            What separates industry leaders from average contractors? Learn the qualities that define Tampa's best builders and how to identify them for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Work With Leaders
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
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-6">
              Tampa Bay has hundreds of commercial contractors—but only a handful consistently deliver the quality, reliability, and professionalism that demanding clients require. These leading contractors didn't achieve their status overnight; they built it through years of successful project delivery, satisfied clients, and continuous improvement.
            </p>
            <p className="text-gray-600 mb-6">
              What makes a contractor a leader? It's not just size or marketing prowess. Leading contractors demonstrate excellence across multiple dimensions: they retain talented people, maintain financial stability, earn repeat business, contribute to their industry, and consistently deliver results that exceed expectations.
            </p>
            <p className="text-gray-600 mb-8">
              Understanding what distinguishes leaders helps you make better contractor selection decisions. Whether you're building a small tenant improvement or a major development, choosing the right contractor significantly impacts your project's success.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Qualities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Qualities That Define Leading Contractors
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            These characteristics separate industry leaders from average performers.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadershipQualities.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">{item.quality}</h3>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700"><strong>Evidence:</strong> {item.evidence}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Leaders Do Differently */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              What Leading Contractors Do Differently
            </h2>
            <p className="text-gray-600 mb-8">
              The difference between good and great often lies in the details of how contractors approach their work.
            </p>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Area</th>
                    <th className="px-6 py-4 text-left font-heading hidden md:table-cell">Standard Practice</th>
                    <th className="px-6 py-4 text-left font-heading">Leader Approach</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {whatLeadersDoDifferently.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-brand-green-dark">{item.area}</td>
                      <td className="px-6 py-4 text-gray-500 text-sm hidden md:table-cell">{item.standard}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{item.leader}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              How to Evaluate Leading Contractors
            </h2>
            <p className="text-gray-600 mb-8">
              Use this weighted framework to objectively assess contractors for your project.
            </p>
            <div className="space-y-4">
              {selectionCriteria.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-brand-green-dark font-heading">{item.criterion}</h3>
                    <span className="text-brand-gold font-bold text-xl mt-2 md:mt-0">Weight: {item.weight}</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-2">
                    {item.whatToLook.map((look, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                        <span className="text-sm">{look}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tampa Market Context */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              The Tampa Bay Contractor Landscape
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                Tampa Bay's commercial construction market is robust and competitive. The region's growth attracts contractors from across Florida and beyond, while home-grown firms have expanded to meet demand. This competition benefits clients—but also makes contractor selection more challenging.
              </p>
              <p className="mb-6">
                Leading Tampa contractors share certain characteristics shaped by the local market. They understand Florida building codes and hurricane requirements. They've navigated permitting in Hillsborough, Pinellas, and surrounding counties. They have established relationships with reliable subcontractors who prioritize their projects. And they've learned to manage construction through hurricane seasons and summer storm patterns.
              </p>
              <p className="mb-6">
                The market also has its challenges. The construction boom has stretched contractor capacity—even leading firms may be selective about new projects. Labor shortages affect everyone, though established contractors with good subcontractor relationships fare better. And rising insurance costs impact project economics for all parties.
              </p>
              <p>
                In this environment, choosing a leading contractor becomes even more important. They're better positioned to deliver successful projects despite market challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3 font-heading">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why FCS */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Florida Construction Specialists: Leading by Example
            </h2>
            <p className="text-gray-600 mb-8">
              At Florida Construction Specialists, we've built our reputation as a leading Tampa contractor through decades of consistent performance. We don't just meet expectations—we exceed them, project after project.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-4 font-heading">Our Credentials</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Decades of Tampa Bay experience</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Florida Certified General Contractor</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Full insurance and bonding capacity</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Industry-leading safety record</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-4 font-heading">Our Difference</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>High repeat client rate</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Long-tenured, experienced team</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Strong subcontractor relationships</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Active industry involvement</span>
                  </li>
                </ul>
              </div>
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
            Partner With Tampa's Leading Contractor
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the difference that leadership makes. Contact Florida Construction Specialists for a consultation on your commercial project.
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
