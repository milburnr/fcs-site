import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Award, Shield, Users, Building2, Star, Search, FileText, Clock } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Top Commercial Contractors in Tampa 2024 | How to Find & Choose the Best",
  description: "Find the best commercial contractors in Tampa Bay. Learn what makes a contractor top-rated, how to evaluate them, and what to expect from Tampa's leading builders.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Top Commercial Contractors in Tampa", href: "/top-commercial-contractors-in-tampa/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/hiring-a-commercial-contractor-in-tampa/", label: "Hiring Guide" },
  { href: "/hire-licensed-contractors-for-commercial-construction-project/", label: "Licensing Requirements" },
  { href: "/leading-commercial-contractors-in-tampa/", label: "Leading Tampa Contractors" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const whatMakesTopContractor = [
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Top contractors have verifiable histories of successful project completion. Look for consistent performance over 10+ years, not just recent work.",
  },
  {
    icon: Shield,
    title: "Proper Credentials",
    description: "State CGC license, adequate insurance ($1M+ liability), bonding capacity, and safety certifications are non-negotiable for top-tier contractors.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "The best contractors retain skilled project managers, superintendents, and estimators. Low turnover indicates a well-run company.",
  },
  {
    icon: Building2,
    title: "Relevant Experience",
    description: "Top contractors specialize or have deep experience in your project type—whether office, retail, medical, or industrial construction.",
  },
  {
    icon: Star,
    title: "Strong Reputation",
    description: "Client references, online reviews, and industry awards provide insight into real-world performance and client satisfaction.",
  },
  {
    icon: FileText,
    title: "Transparent Practices",
    description: "Top contractors provide detailed proposals, clear contracts, regular communication, and honest assessments of challenges.",
  },
];

const evaluationCriteria = [
  {
    category: "Experience & Capability",
    criteria: [
      "Years in business and financial stability",
      "Portfolio of completed projects similar to yours",
      "In-house capabilities vs. reliance on subcontractors",
      "Current workload and capacity for your project",
    ],
  },
  {
    category: "Credentials & Compliance",
    criteria: [
      "Valid Florida CGC license (verify at myfloridalicense.com)",
      "General liability insurance ($1M minimum for commercial)",
      "Workers' compensation coverage",
      "Bonding capacity appropriate for project size",
    ],
  },
  {
    category: "Safety Record",
    criteria: [
      "Experience Modification Rate (EMR) below 1.0",
      "OSHA compliance history",
      "Written safety program and training",
      "Safety recognition or certifications",
    ],
  },
  {
    category: "Client References",
    criteria: [
      "Recent references from similar projects",
      "Willingness to provide contact information",
      "Repeat clients (indicates satisfaction)",
      "References you can actually contact",
    ],
  },
];

const contractorTypes = [
  {
    type: "General Contractor (GC)",
    description: "Manages the entire project, hiring and coordinating subcontractors, responsible for schedule, budget, and quality.",
    bestFor: "Most commercial projects where you have separate design and construction phases.",
  },
  {
    type: "Design-Build Contractor",
    description: "Single point of responsibility for both design and construction, streamlining communication and potentially accelerating schedules.",
    bestFor: "Projects where speed is critical and you want single-point accountability.",
  },
  {
    type: "Construction Manager (CM)",
    description: "Acts as your agent during construction, often involved from design phase, may or may not self-perform work.",
    bestFor: "Complex projects where early contractor input adds value and you want fee transparency.",
  },
  {
    type: "Specialty Contractor",
    description: "Focuses on specific trades (electrical, mechanical, structural) with deep expertise in that area.",
    bestFor: "Projects requiring specialized work where you're managing the general contracting.",
  },
];

const projectSizeGuide = [
  {
    size: "Small ($100K-$500K)",
    characteristics: "Tenant improvements, minor renovations, small retail buildouts",
    contractorType: "Regional commercial contractors with lean operations and competitive pricing",
    considerations: "Ensure they have commercial experience—residential contractors often lack code knowledge",
  },
  {
    size: "Medium ($500K-$5M)",
    characteristics: "Office buildouts, restaurant construction, medical suites, small warehouses",
    contractorType: "Established commercial contractors with proven teams and subcontractor relationships",
    considerations: "Balance experience with attention—you want to be a meaningful project to them",
  },
  {
    size: "Large ($5M-$25M)",
    characteristics: "Ground-up buildings, major renovations, multi-story construction",
    contractorType: "Major regional contractors with strong bonding, experienced PMs, and broad capability",
    considerations: "Pre-qualification process recommended; verify bonding and insurance thoroughly",
  },
  {
    size: "Major ($25M+)",
    characteristics: "Large commercial complexes, healthcare facilities, high-rise construction",
    contractorType: "Regional or national contractors with specialized expertise and major project experience",
    considerations: "Extensive due diligence required; consider construction management approach",
  },
];

const faqs = [
  {
    question: "How do I find the top commercial contractors in Tampa?",
    answer: "Start with industry associations—ABC Florida Gulf Coast and AGC Florida maintain member directories of vetted commercial contractors. Check their Excellence in Construction awards for recognized projects. Research online reviews (Google, BBB) but weight recent reviews more heavily. Ask for referrals from architects, commercial real estate brokers, and business colleagues who've completed projects. Finally, verify all credentials through Florida DBPR's license search.",
  },
  {
    question: "What makes a commercial contractor 'top-rated' in Tampa?",
    answer: "True top-rated contractors demonstrate: consistent project success over many years (not just recent work), valid licensing and adequate insurance, strong safety records (EMR below 1.0), positive client references from similar projects, industry recognition through awards or association involvement, financial stability to complete your project, and transparent business practices. Beware of contractors with impressive marketing but limited verifiable track record.",
  },
  {
    question: "Should I always hire the largest contractor I can afford?",
    answer: "Not necessarily. The best contractor is one whose typical project size matches yours. A contractor who builds $50M hospitals may not give adequate attention to your $500K tenant improvement. Conversely, a small contractor may lack resources for complex projects. Look for contractors where your project represents meaningful but manageable work—typically 5-15% of their annual volume.",
  },
  {
    question: "How many contractors should I get bids from?",
    answer: "For most commercial projects, 3-5 qualified contractors is ideal. Fewer than 3 limits competition and comparison; more than 5 wastes everyone's time and may discourage serious bidders. Pre-qualify contractors before inviting bids to ensure all are capable and interested. For complex or large projects, consider a formal pre-qualification process that evaluates capability before pricing.",
  },
  {
    question: "What's the difference between a good contractor and a great one?",
    answer: "Good contractors complete projects on time and budget. Great contractors anticipate problems before they occur, communicate proactively about challenges and solutions, add value through constructability input, maintain organized job sites and documentation, build relationships with your team, and leave you genuinely satisfied rather than just not disappointed. Great contractors earn repeat business and referrals because they genuinely care about project success.",
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
            alt="Top commercial construction in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Finding the Top Commercial Contractors in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            What separates great contractors from average ones? Learn how to identify, evaluate, and select the best commercial contractor for your Tampa Bay project.
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
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-6">
              Tampa Bay's commercial construction market includes hundreds of contractors ranging from small specialty firms to major regional builders. Finding the "top" contractor isn't about who has the biggest marketing budget—it's about finding the right fit for your specific project, budget, and expectations.
            </p>
            <p className="text-gray-600 mb-6">
              The best contractor for a 2,000 SF dental office isn't necessarily the best for a 200,000 SF distribution center. A contractor renowned for high-end office interiors may not excel at industrial construction. Understanding what makes a contractor "top" for your particular needs is essential for project success.
            </p>
            <p className="text-gray-600 mb-8">
              This guide helps you understand what distinguishes top commercial contractors, how to find and evaluate them, and how to select the right one for your Tampa Bay commercial project.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes a Top Contractor */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            What Makes a Commercial Contractor "Top-Rated"?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            These characteristics separate the best from the rest in Tampa's competitive commercial construction market.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatMakesTopContractor.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluation Checklist */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading flex items-center gap-3">
              <Search className="w-8 h-8 text-brand-gold" />
              Contractor Evaluation Checklist
            </h2>
            <p className="text-gray-600 mb-8">
              Use this comprehensive checklist to evaluate any commercial contractor you're considering for your Tampa project.
            </p>
            <div className="space-y-6">
              {evaluationCriteria.map((section, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-4 font-heading">{section.category}</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {section.criteria.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Types of Contractors */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Types of Commercial Contractors
            </h2>
            <p className="text-gray-600 mb-8">
              Understanding different contractor types helps you select the right approach for your project.
            </p>
            <div className="space-y-4">
              {contractorTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">{type.type}</h3>
                  <p className="text-gray-600 mb-3">{type.description}</p>
                  <div className="bg-brand-green-light/20 rounded-lg p-3">
                    <p className="text-sm"><strong className="text-brand-green-dark">Best for:</strong> <span className="text-gray-700">{type.bestFor}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Size Guide */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Matching Contractor to Project Size
            </h2>
            <p className="text-gray-600 mb-8">
              The right contractor size for your project ensures proper attention without overwhelming their capacity.
            </p>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Project Size</th>
                    <th className="px-6 py-4 text-left font-heading hidden md:table-cell">Typical Projects</th>
                    <th className="px-6 py-4 text-left font-heading">Contractor Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {projectSizeGuide.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4">
                        <span className="font-semibold text-brand-green-dark">{item.size}</span>
                        <p className="text-sm text-gray-500 md:hidden mt-1">{item.characteristics}</p>
                      </td>
                      <td className="px-6 py-4 text-gray-600 hidden md:table-cell">{item.characteristics}</td>
                      <td className="px-6 py-4 text-gray-600">
                        {item.contractorType}
                        <p className="text-sm text-gray-500 mt-2">{item.considerations}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* How to Find Top Contractors */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Where to Find Top Commercial Contractors in Tampa
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Industry Associations</h3>
                <p className="text-gray-600 mb-4">
                  Trade associations pre-screen members and provide directories of qualified contractors. Key Tampa associations include:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    ABC Florida Gulf Coast Chapter
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    AGC Florida (Associated General Contractors)
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    Tampa Bay Builders Association
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Professional Referrals</h3>
                <p className="text-gray-600 mb-4">
                  Industry professionals work with contractors regularly and know who performs. Ask:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    Commercial architects in your network
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    Commercial real estate brokers
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    Business colleagues who've completed projects
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Online Research</h3>
                <p className="text-gray-600 mb-4">
                  Supplement referrals with online verification:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    Google reviews (look for patterns, not outliers)
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    BBB rating and complaints history
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    Florida DBPR license verification
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Industry Awards</h3>
                <p className="text-gray-600 mb-4">
                  Award winners have demonstrated excellence. Review:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    ABC Excellence in Construction Awards
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    NAIOP Tampa Bay awards
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    Tampa Bay Business Journal rankings
                  </li>
                </ul>
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

      {/* Why Choose FCS */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Florida Construction Specialists?
            </h2>
            <p className="text-gray-600 mb-8">
              Florida Construction Specialists has earned our reputation as one of Tampa Bay's top commercial contractors through decades of successful project delivery. Our commitment to quality, communication, and client satisfaction has built relationships that span generations of projects.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Decades of Tampa Bay Experience</p>
                  <p className="text-sm text-gray-600">Local expertise in permitting, codes, and market conditions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Full-Service Capabilities</p>
                  <p className="text-sm text-gray-600">Design-build, general contracting, and construction management</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Exceptional Safety Record</p>
                  <p className="text-sm text-gray-600">Industry-leading EMR and commitment to zero accidents</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Strong Client Relationships</p>
                  <p className="text-sm text-gray-600">High repeat client rate speaks to our performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-white">
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
            Ready to Work With Tampa's Best?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your commercial project. Our team will provide a detailed proposal and demonstrate why we're consistently rated among Tampa's top contractors.
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
