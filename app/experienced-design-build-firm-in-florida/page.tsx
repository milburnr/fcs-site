import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Award, Users, Building2, Shield, Clock, Star, Target, Lightbulb } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Experienced Design-Build Firm in Florida | Florida Construction Specialists",
  description: "Florida Construction Specialists - Tampa Bay's trusted design-build firm with decades of commercial construction experience. Learn what makes an experienced design-build partner essential for project success.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Experienced Design Build Firm in Florida", href: "/experienced-design-build-firm-in-florida/" },
];

const internalLinks = [
  { href: "/services/commercial/design-build/", label: "Design-Build Services" },
  { href: "/benefits-of-design-build-construction-for-commercial-project/", label: "Benefits of Design-Build" },
  { href: "/about/", label: "About Our Company" },
  { href: "/portfolio/", label: "View Our Portfolio" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const experienceIndicators = [
  {
    icon: Award,
    title: "Track Record",
    description: "Decades of successful project delivery across Tampa Bay with documented outcomes and satisfied clients.",
  },
  {
    icon: Users,
    title: "Stable Team",
    description: "Low turnover means institutional knowledge stays in-house. Our project managers have 15+ years average experience.",
  },
  {
    icon: Building2,
    title: "Portfolio Depth",
    description: "Experience across building types—office, medical, retail, industrial—provides solutions for any commercial need.",
  },
  {
    icon: Shield,
    title: "Financial Strength",
    description: "Strong bonding capacity and financial stability ensure we can deliver projects regardless of market conditions.",
  },
];

const projectTypes = [
  { type: "Office Buildings", projects: "100+", sqft: "2M+ SF", experience: "Class A to flex office" },
  { type: "Medical Facilities", projects: "75+", sqft: "800K+ SF", experience: "MOBs to surgical centers" },
  { type: "Retail/Restaurant", projects: "150+", sqft: "1.5M+ SF", experience: "Flagship to strip retail" },
  { type: "Industrial/Warehouse", projects: "50+", sqft: "3M+ SF", experience: "Distribution to manufacturing" },
  { type: "Hospitality", projects: "25+", sqft: "500K+ SF", experience: "Hotels to event venues" },
  { type: "Civic/Educational", projects: "40+", sqft: "600K+ SF", experience: "Government to schools" },
];

const whyExperienceMatters = [
  {
    reason: "Problem Anticipation",
    description: "Experienced teams have seen every type of challenge and build solutions into project planning proactively, not reactively.",
  },
  {
    reason: "Accurate Estimating",
    description: "Historical data from hundreds of projects produces estimates based on real costs, not industry averages or hopeful projections.",
  },
  {
    reason: "Relationship Networks",
    description: "Established relationships with quality subcontractors, suppliers, and inspectors smooth project execution at every phase.",
  },
  {
    reason: "Risk Management",
    description: "Experience teaches which risks are real and which are theoretical. Contingencies are right-sized based on actual project data.",
  },
  {
    reason: "Permit Navigation",
    description: "Understanding what each jurisdiction requires—and who to call when issues arise—prevents permit delays that derail schedules.",
  },
  {
    reason: "Owner Guidance",
    description: "We've helped hundreds of owners through the construction process. We know what questions to ask and decisions to anticipate.",
  },
];

const selectionCriteria = [
  { criterion: "Years in Business", weight: "Important", why: "Longevity demonstrates sustainability and market acceptance" },
  { criterion: "Similar Project Experience", weight: "Critical", why: "Your building type has unique requirements they should know" },
  { criterion: "Local Market Knowledge", weight: "Critical", why: "Tampa Bay's codes, officials, and market conditions are specific" },
  { criterion: "Team Stability", weight: "Important", why: "The people matter—will key personnel be on your project?" },
  { criterion: "Financial Capacity", weight: "Critical", why: "Can they bond your project and survive market downturns?" },
  { criterion: "Reference Quality", weight: "Critical", why: "What do recent clients say about their experience?" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Experienced Design-Build Firm in Florida"
        description="Why choosing an experienced design-build partner is essential for commercial construction success."
        datePublished="2024-01-15"
        dateModified="2024-01-15"
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Experienced design-build firm in Tampa Bay Florida"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Experienced Design-Build Firm in Florida
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Building dreams into reality requires more than good intentions—it demands proven experience. Discover what makes Florida Construction Specialists Tampa Bay's trusted design-build partner.
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

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Experience Matters in Design-Build
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-6">
                Design-build construction consolidates design and construction responsibility under one team. This integration creates tremendous efficiency—but only when that team has the experience to leverage it. An inexperienced design-build firm can multiply problems rather than prevent them.
              </p>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists has been delivering design-build commercial projects across Tampa Bay for decades. During that time, we've completed hundreds of projects totaling millions of square feet across virtually every commercial building type. This experience translates directly into better outcomes for our clients.
              </p>
              <p className="text-gray-600 mb-6">
                Experience isn't just about longevity—it's about accumulated wisdom. We've encountered every type of site condition, permit challenge, subcontractor issue, and owner requirement imaginable. Each project adds to our institutional knowledge, making the next project smoother. Our estimators know what buildings actually cost to construct in this market. Our project managers know which subcontractors deliver quality work. Our superintendents know how to sequence trades for maximum efficiency.
              </p>
              <p className="text-gray-600 mb-8">
                When you select Florida Construction Specialists, you're not hiring a company—you're accessing decades of Tampa Bay construction expertise that de-risks your project from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Indicators */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Hallmarks of an Experienced Design-Build Firm
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            These characteristics distinguish truly experienced firms from those simply claiming the title.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experienceIndicators.map((indicator, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <indicator.icon className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">{indicator.title}</h3>
                <p className="text-gray-600">{indicator.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              Our Commercial Construction Portfolio
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Decades of experience across Tampa Bay's diverse commercial market.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Building Type</th>
                    <th className="px-6 py-4 text-left font-heading">Projects</th>
                    <th className="px-6 py-4 text-left font-heading">Total SF</th>
                    <th className="px-6 py-4 text-left font-heading">Experience Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {projectTypes.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.type}</td>
                      <td className="px-6 py-4 text-brand-green font-bold">{row.projects}</td>
                      <td className="px-6 py-4 text-gray-600">{row.sqft}</td>
                      <td className="px-6 py-4 text-gray-600">{row.experience}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Why Experience Matters */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              How Experience Translates to Better Outcomes
            </h2>
            
            <div className="space-y-6">
              {whyExperienceMatters.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-green-dark mb-2 font-heading">{item.reason}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tampa's Top Contractor */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Tampa Bay's Trusted Commercial Contractor
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists has earned our reputation through consistent delivery of quality projects across Tampa Bay. Our commitment to excellence is recognized by clients who return project after project, and by the industry recognition we've received.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-brand-green/5 rounded-xl p-6 border border-brand-green/20">
                <Star className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">What Sets Us Apart</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Owner-involved leadership on every project</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">In-house design capabilities with architect partners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Self-perform capabilities for key trades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">24/7 emergency response capability</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <Target className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Service Area Coverage</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Tampa & Hillsborough County</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">St. Petersburg & Clearwater</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Lakeland & Polk County</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Sarasota & Bradenton</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              How to Evaluate Design-Build Firm Experience
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Use these criteria when selecting a design-build partner for your commercial project.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Criterion</th>
                    <th className="px-6 py-4 text-left font-heading">Weight</th>
                    <th className="px-6 py-4 text-left font-heading">Why It Matters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {selectionCriteria.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.criterion}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          row.weight === 'Critical' ? 'bg-brand-green/20 text-brand-green-dark' : 'bg-brand-gold/20 text-brand-gold'
                        }`}>
                          {row.weight}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{row.why}</td>
                    </tr>
                  ))}
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
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  How do I verify a design-build firm's experience?
                </h3>
                <p className="text-gray-600">
                  Request a portfolio of similar projects (same building type, size range, and location). Ask for references from recent projects and actually call them. Verify licensing with the Florida DBPR. Check bonding capacity with their surety. Review safety records through OSHA. Experienced firms welcome this scrutiny.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  Does your firm carry all necessary licenses and insurance?
                </h3>
                <p className="text-gray-600">
                  Yes. We maintain Florida General Contractor (CGC) licensing, appropriate trade licenses, and comprehensive insurance including general liability, workers' compensation, and professional liability. We can provide bonding for projects up to $50 million. Certificates are available upon request.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  Will senior leadership be involved in my project?
                </h3>
                <p className="text-gray-600">
                  Absolutely. Our company principals remain actively involved in project oversight, attending key meetings and providing strategic guidance throughout construction. You won't be handed off to junior staff after the contract is signed—the people you meet during selection are the people who deliver your project.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  How do you handle projects outside your typical scope?
                </h3>
                <p className="text-gray-600">
                  Our broad experience means most commercial projects fall within our capabilities. For specialized requirements—data centers, clean rooms, specialized manufacturing—we partner with consultants who have specific expertise while maintaining our role as single-point-of-responsibility design-builder.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  What makes Florida Construction Specialists different from other Tampa Bay contractors?
                </h3>
                <p className="text-gray-600">
                  Three things: ownership involvement (principals on every project), integrated design-build capability (not just construction management), and local market depth (relationships built over decades). We're large enough to handle significant projects but structured to provide personal attention. Our reputation depends on every project's success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Learn More"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Partner with Tampa Bay's Experienced Design-Build Team?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your commercial project and show you how our experience translates into better outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule a Consultation
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
