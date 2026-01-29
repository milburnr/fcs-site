import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Users, FileText, Award, Clock, DollarSign, Shield, Search, Building2 } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Expert Tips for Hiring a Commercial Contractor in Tampa | Complete Guide",
  description: "Looking for a dependable commercial contractor in Tampa? Discover the top considerations for hiring one, from expertise and qualifications to reputation and pricing.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Hiring a Commercial Contractor in Tampa", href: "/hiring-a-commercial-contractor-in-tampa/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/hire-licensed-contractors-for-commercial-construction-project/", label: "Why Hire Licensed Contractors" },
  { href: "/top-commercial-contractors-in-tampa/", label: "Top Tampa Contractors" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const hiringSteps = [
  {
    step: "1",
    title: "Define Your Project Scope",
    description: "Document your requirements, timeline, and budget before contacting contractors. The more detailed your scope, the more accurate quotes you'll receive.",
  },
  {
    step: "2",
    title: "Research & Shortlist",
    description: "Identify 3-5 qualified contractors with experience in your project type. Check online reviews, ask for referrals, and verify licenses.",
  },
  {
    step: "3",
    title: "Request Detailed Proposals",
    description: "Get written proposals including scope, timeline, payment schedule, and allowances. Compare apples-to-apples across bidders.",
  },
  {
    step: "4",
    title: "Interview Top Candidates",
    description: "Meet in person to assess communication style, ask about their team, and discuss how they handle changes and challenges.",
  },
  {
    step: "5",
    title: "Check References",
    description: "Contact 3-5 recent clients with similar projects. Ask about budget accuracy, timeline adherence, and communication quality.",
  },
  {
    step: "6",
    title: "Review & Sign Contract",
    description: "Have an attorney review the contract. Ensure it includes scope, schedule, payment terms, change order procedures, and warranty coverage.",
  },
];

const evaluationCriteria = [
  {
    icon: Award,
    title: "Experience & Portfolio",
    factors: ["Years in business", "Similar project experience", "Portfolio quality", "Industry specialization"],
    weight: "25%",
  },
  {
    icon: Shield,
    title: "Licensing & Insurance",
    factors: ["State CGC license", "General liability ($1M+)", "Workers' compensation", "Bonding capacity"],
    weight: "20%",
  },
  {
    icon: Users,
    title: "Team & Resources",
    factors: ["In-house capabilities", "Subcontractor relationships", "Project manager assignment", "Safety record"],
    weight: "20%",
  },
  {
    icon: FileText,
    title: "References & Reputation",
    factors: ["Client testimonials", "Online reviews", "BBB rating", "Industry awards"],
    weight: "15%",
  },
  {
    icon: DollarSign,
    title: "Pricing & Value",
    factors: ["Competitive pricing", "Transparent breakdown", "Payment terms", "Warranty coverage"],
    weight: "10%",
  },
  {
    icon: Clock,
    title: "Communication & Fit",
    factors: ["Responsiveness", "Communication style", "Problem-solving approach", "Cultural fit"],
    weight: "10%",
  },
];

const redFlags = [
  "Requires large upfront payment (over 10%)",
  "No physical office or business address",
  "Unwilling to provide references",
  "Pressures you to sign immediately",
  "License number doesn't verify online",
  "No written contract or vague terms",
  "Significantly lower than all other bids",
  "Poor online reviews or BBB complaints",
];

const faqs = [
  {
    question: "How much should I pay upfront to a commercial contractor in Tampa?",
    answer: "Industry standard for commercial projects is 0-10% as a deposit. Florida law allows up to 10% or $1,000 (whichever is less) for residential work. For commercial projects, negotiate terms that align with work completion milestones. Never pay more than 25% before work begins, and tie all payments to measurable progress.",
  },
  {
    question: "How do I verify a contractor's license in Florida?",
    answer: "Visit myfloridalicense.com and search by the contractor's name or license number. For commercial work, ensure they hold a Certified General Contractor (CGC) license, which allows them to build any structure statewide. Also verify their insurance certificates directly with the insurance company, not just copies from the contractor.",
  },
  {
    question: "What questions should I ask a commercial contractor before hiring?",
    answer: "Key questions include: How many similar projects have you completed? Who will be my day-to-day contact? What's your safety record (EMR rating)? How do you handle change orders? Can you provide 3 references from the past year? What's your current workload and availability? How do you communicate project updates?",
  },
  {
    question: "How long does commercial construction typically take in Tampa?",
    answer: "Timelines vary significantly by project type. Tenant improvements take 6-12 weeks, small retail buildouts 3-4 months, office buildings 8-14 months, and large industrial facilities 12-24 months. Tampa's permitting process typically adds 4-8 weeks. Hurricane season (June-November) can impact exterior work schedules.",
  },
  {
    question: "Should I hire the lowest bidder for my commercial project?",
    answer: "Rarely. The lowest bid often indicates missed scope items, inexperience, or a contractor who plans to make up costs through change orders. Evaluate total value: experience, reputation, communication, and realistic timelines matter as much as price. Aim for the best-qualified contractor within your budget range, typically the middle third of bids received.",
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
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-large.webp"
            alt="Commercial construction project in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            How to Hire the Right Commercial Contractor in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Your complete guide to finding, vetting, and hiring a qualified commercial contractor for your Tampa Bay project. Avoid costly mistakes with our proven evaluation framework.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Free Consultation
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
              Hiring a commercial contractor is one of the most important decisions you'll make for your business. In Tampa's booming construction market, you'll find hundreds of contractors competing for your project—but not all deliver the same quality, reliability, or value. The right contractor becomes your partner in success; the wrong one can cost you months of delays and tens of thousands in overruns.
            </p>
            <p className="text-gray-600 mb-6">
              Tampa Bay's commercial construction market has unique characteristics that affect contractor selection. The region's rapid growth means many contractors are stretched thin, making it crucial to verify their current capacity. Florida's hurricane codes require specialized knowledge. And the subtropical climate creates scheduling considerations that contractors from other regions may not anticipate.
            </p>
            <p className="text-gray-600 mb-8">
              This guide walks you through a systematic process for identifying, evaluating, and selecting the right commercial contractor for your project—whether you're building a new office, renovating retail space, or constructing an industrial facility anywhere in the Tampa Bay region.
            </p>

            <div className="bg-brand-green-light/20 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Tampa's Commercial Construction Market at a Glance
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Market Conditions</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Strong demand across all commercial sectors</li>
                    <li>• Labor market remains competitive</li>
                    <li>• Material costs stabilizing after 2022-2023 spikes</li>
                    <li>• Permitting timelines: 4-8 weeks typical</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">What It Means for You</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Book contractors 2-3 months in advance</li>
                    <li>• Budget 10-15% contingency for material fluctuations</li>
                    <li>• Quality contractors are selective about projects</li>
                    <li>• Design-build can accelerate timelines</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Hiring Process */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            The 6-Step Process for Hiring a Commercial Contractor
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Follow this systematic approach to find the right contractor for your Tampa commercial project.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hiringSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 mt-2 font-heading">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluation Criteria */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            How to Evaluate Commercial Contractors
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Use this weighted scorecard to objectively compare contractors and make a data-driven decision.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {evaluationCriteria.map((criteria, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand-green-light/30 rounded-full flex items-center justify-center">
                    <criteria.icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green-dark font-heading">{criteria.title}</h3>
                    <span className="text-sm text-brand-gold font-semibold">Weight: {criteria.weight}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {criteria.factors.map((factor, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                      <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                      {factor}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Evaluation Guide */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Deep Dive: What to Look For in Each Area
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading flex items-center gap-2">
                  <Award className="w-6 h-6 text-brand-gold" />
                  Experience & Portfolio
                </h3>
                <p className="text-gray-600 mb-4">
                  Experience matters, but relevance matters more. A contractor with 30 years building restaurants may not be the best choice for your medical office. Look for contractors who have successfully completed at least 3-5 projects similar to yours in scope, size, and complexity.
                </p>
                <p className="text-gray-600 mb-4">
                  Ask to see their portfolio and, if possible, visit completed projects in person. Pay attention to finish quality, attention to detail, and how well the space functions. Tampa-specific experience is valuable—contractors familiar with local permitting, soil conditions, and hurricane requirements will navigate your project more smoothly.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-700 mb-2">Questions to Ask:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• How many projects similar to mine have you completed in the past 2 years?</li>
                    <li>• Can I visit a current job site to see your work in progress?</li>
                    <li>• What specialized certifications does your team hold?</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading flex items-center gap-2">
                  <Shield className="w-6 h-6 text-brand-gold" />
                  Licensing, Insurance & Bonding
                </h3>
                <p className="text-gray-600 mb-4">
                  This is non-negotiable. Florida law requires contractors performing commercial work over $1,000 to hold a valid license. For most commercial projects, you need a Certified General Contractor (CGC) who can build any structure statewide. Verify their license at myfloridalicense.com—don't just take their word for it.
                </p>
                <p className="text-gray-600 mb-4">
                  Insurance is equally critical. Request certificates of insurance directly from their insurance company (not just copies from the contractor). For commercial work, look for at least $1 million in general liability and adequate workers' compensation. Bonding provides additional protection—it guarantees project completion if the contractor defaults.
                </p>
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="font-semibold text-red-800 mb-2">Warning:</p>
                  <p className="text-sm text-gray-700">Under Florida Statute 489.128, contracts with unlicensed contractors are unenforceable. If something goes wrong, you have no legal recourse to recover damages or deposits.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading flex items-center gap-2">
                  <Users className="w-6 h-6 text-brand-gold" />
                  Team & Communication
                </h3>
                <p className="text-gray-600 mb-4">
                  You're not just hiring a company—you're hiring the specific people who will manage and build your project. Find out who your project manager will be and meet them before signing. Ask about their communication practices: How often will you receive updates? What software do they use for project management? Who do you call with questions?
                </p>
                <p className="text-gray-600 mb-4">
                  Pay attention to responsiveness during the bidding process. If a contractor takes a week to return your calls now, imagine how they'll perform when you're competing with their other active projects. The best contractors are responsive, organized, and proactive in their communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Red Flags: Warning Signs to Watch For
            </h2>
            <p className="text-gray-600 mb-8">
              Protect yourself by recognizing these common warning signs that indicate a contractor may not be trustworthy or qualified.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {redFlags.map((flag, index) => (
                <div key={index} className="flex items-start gap-3 bg-red-50 rounded-lg p-4">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 font-bold text-sm">!</span>
                  </div>
                  <span className="text-gray-700">{flag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Commercial Construction Costs in Tampa
            </h2>
            <p className="text-gray-600 mb-8">
              Understanding typical costs helps you evaluate whether bids are reasonable. These ranges represent 2024 Tampa market rates.
            </p>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Project Type</th>
                    <th className="px-6 py-4 text-left font-heading">Cost Per SF</th>
                    <th className="px-6 py-4 text-left font-heading">Timeline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-700">Office Tenant Improvement</td>
                    <td className="px-6 py-4 text-gray-600">$45-$85/SF</td>
                    <td className="px-6 py-4 text-gray-600">6-12 weeks</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-700">Retail Buildout</td>
                    <td className="px-6 py-4 text-gray-600">$60-$120/SF</td>
                    <td className="px-6 py-4 text-gray-600">8-16 weeks</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-700">Restaurant Construction</td>
                    <td className="px-6 py-4 text-gray-600">$150-$350/SF</td>
                    <td className="px-6 py-4 text-gray-600">12-20 weeks</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-700">Medical/Dental Office</td>
                    <td className="px-6 py-4 text-gray-600">$125-$250/SF</td>
                    <td className="px-6 py-4 text-gray-600">12-20 weeks</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-700">Industrial/Warehouse</td>
                    <td className="px-6 py-4 text-gray-600">$75-$150/SF</td>
                    <td className="px-6 py-4 text-gray-600">4-12 months</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-700">Ground-Up Office Building</td>
                    <td className="px-6 py-4 text-gray-600">$200-$400/SF</td>
                    <td className="px-6 py-4 text-gray-600">10-18 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              *Costs vary based on finishes, location, and market conditions. Always get multiple bids for accurate pricing.
            </p>
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

      {/* Why FCS */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Tampa Businesses Choose Florida Construction Specialists
            </h2>
            <p className="text-gray-600 mb-8">
              As a leading commercial contractor serving Tampa, St. Petersburg, Clearwater, and the greater Tampa Bay area, Florida Construction Specialists brings the experience, resources, and commitment that discerning clients demand.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Licensed & Insured</h3>
                  <p className="text-gray-600 text-sm">Certified General Contractor with full insurance coverage and bonding for projects of any size.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Proven Track Record</h3>
                  <p className="text-gray-600 text-sm">Decades of commercial construction experience across office, retail, medical, and industrial sectors.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Transparent Communication</h3>
                  <p className="text-gray-600 text-sm">Regular updates, clear documentation, and a dedicated project manager for every client.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Local Expertise</h3>
                  <p className="text-gray-600 text-sm">Deep knowledge of Tampa permitting, codes, subcontractors, and market conditions.</p>
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
            Ready to Discuss Your Commercial Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free consultation and detailed proposal from Tampa's trusted commercial contractor. No obligation, just expert guidance.
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
