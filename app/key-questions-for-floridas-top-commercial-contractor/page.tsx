import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Key Questions for Florida's Top Commercial Contractors | Tampa Bay",
  description: "Essential questions to ask before hiring a commercial contractor in Tampa Bay. Learn what to evaluate and how to identify the best contractor for your Florida project.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Key Questions for Florida's Top Commercial Contractor", href: "/key-questions-for-floridas-top-commercial-contractor/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/hiring-commercial-contractors-in-tampa/", label: "Hiring Commercial Contractors" },
  { href: "/key-factors-for-choosing-the-top-commercial-contractor-in-tampa/", label: "Key Factors in Choosing a Contractor" },
  { href: "/the-key-traits-of-top-commercial-contractors-in-tampa/", label: "Traits of Top Contractors" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Consulting with commercial contractor in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Key Questions to Ask Florida's Top Commercial Contractors
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            The right questions reveal the difference between adequate contractors and exceptional ones. Use these essential questions to identify the best contractor for your Tampa Bay project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Ask Us Anything
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

      {/* Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Selecting a commercial contractor for your Tampa Bay project ranks among the most consequential business decisions you'll make. The difference between an excellent contractor and a mediocre one translates into hundreds of thousands of dollars, months of schedule difference, and years of building performance. Yet many business owners approach contractor selection with standard questions that reveal little about actual capabilities. Florida Construction Specialists welcomes thorough questioning—the more you learn about us, the more confident you'll be in partnering with Tampa Bay's premier commercial contractor.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Questions About Experience and Qualifications
            </h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                "How long have you been building commercial projects in the Tampa Bay area specifically?"
              </h3>
              <p className="text-gray-600">
                National experience doesn't equal local expertise. Florida's building codes, permitting processes, and construction conditions differ significantly from other regions. You want a contractor with deep Tampa Bay experience who understands local jurisdictions, has relationships with local subcontractors and suppliers, and knows how to navigate the specific challenges of building in this market.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                "What commercial projects similar to mine have you completed?"
              </h3>
              <p className="text-gray-600">
                General commercial experience matters, but specific project type experience matters more. A contractor who excels at retail construction may struggle with medical facility requirements. Ask for examples of projects matching your type, size, and complexity. Request references from these specific projects rather than accepting generic testimonials.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                "Can you provide your Florida contractor license number and verify it's current?"
              </h3>
              <p className="text-gray-600">
                This basic question reveals contractor professionalism. Legitimate contractors provide license numbers immediately and encourage verification. Hesitation or excuses should raise immediate red flags. Verify independently through the Florida DBPR portal—don't rely on contractor-provided documentation alone.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                "Who will be the project manager and superintendent on my project, and what's their experience?"
              </h3>
              <p className="text-gray-600">
                Company reputation matters, but your project's success depends on the specific individuals assigned. Meet the project manager and superintendent who will actually manage your work. Ask about their experience, how long they've been with the company, and their track record on similar projects. Be wary if contractors can't identify specific personnel or seem likely to assign whoever is available.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Questions About Financial Stability and Protection
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                "What is your bonding capacity, and can you provide a bonding capacity letter?"
              </h3>
              <p className="text-gray-600">
                Bonding capacity indicates financial strength and surety company confidence. A contractor with $10 million bonding capacity has demonstrated far greater financial capability than one limited to $1 million. Request bonding capacity letters from the surety company—not just contractor claims—and ensure capacity exceeds your project requirements with room for their other commitments.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                "What insurance coverage do you maintain, and will you add us as additional insured?"
              </h3>
              <p className="text-gray-600">
                Request specific coverage types and limits: general liability, workers' compensation, commercial auto, and umbrella coverage. Ask for certificates of insurance issued directly by the insurance carrier. Additional insured status extends the contractor's liability coverage to protect your interests—this should be standard practice, not a special request.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                "How do you handle payment to subcontractors, and how will we verify they're being paid?"
              </h3>
              <p className="text-gray-600">
                Unpaid subcontractors can file liens against your property even if you've paid the contractor. Understand the contractor's payment practices and request lien waivers with each payment application. Top contractors maintain transparent payment processes and provide documentation showing subcontractor payments, protecting you from lien exposure.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Questions About Project Execution
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-brand-green-dark text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">Question Category</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">What You're Evaluating</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Red Flags in Responses</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Schedule Management</td>
                    <td className="border border-gray-300 px-4 py-3">Realistic planning, contingency thinking</td>
                    <td className="border border-gray-300 px-4 py-3">Promises that seem too aggressive</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Cost Control</td>
                    <td className="border border-gray-300 px-4 py-3">Transparency, change order practices</td>
                    <td className="border border-gray-300 px-4 py-3">Vague answers about cost tracking</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Communication</td>
                    <td className="border border-gray-300 px-4 py-3">Reporting frequency, accessibility</td>
                    <td className="border border-gray-300 px-4 py-3">Limited availability, infrequent updates</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Quality Control</td>
                    <td className="border border-gray-300 px-4 py-3">Inspection processes, standards</td>
                    <td className="border border-gray-300 px-4 py-3">No formal QC program described</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Safety Program</td>
                    <td className="border border-gray-300 px-4 py-3">Training, enforcement, track record</td>
                    <td className="border border-gray-300 px-4 py-3">Unable to provide EMR or safety stats</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                "How do you develop project schedules, and how do you handle delays?"
              </h3>
              <p className="text-gray-600">
                Listen for realistic approaches that account for permitting timelines, subcontractor availability, and weather impacts—particularly important in Tampa Bay where hurricane season affects construction six months per year. Ask specifically about schedule recovery strategies when delays occur. Contractors who promise unrealistic schedules or lack clear recovery plans will struggle when challenges arise.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                "What is your change order process, and how do you price changes?"
              </h3>
              <p className="text-gray-600">
                Change orders are inevitable in construction—the question is how they're handled. Understand the contractor's process for identifying, pricing, and approving changes. Request their standard change order markup percentages. Ask how they distinguish between legitimate changes and work they should have anticipated. Contractors known for aggressive change orders often underbid to win work, then make profits through changes.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                "How will you communicate with us during construction?"
              </h3>
              <p className="text-gray-600">
                Understand reporting frequency, meeting schedules, and accessibility expectations. Will you receive weekly progress reports? Monthly? Who can you call with urgent questions? How quickly should you expect responses? Clear communication protocols established upfront prevent misunderstandings later. Top contractors proactively communicate rather than waiting until problems force discussions.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Questions About Safety and Quality
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                "What is your Experience Modification Rate (EMR), and can you provide your safety record?"
              </h3>
              <p className="text-gray-600">
                EMR provides an objective measure of safety performance against industry averages. An EMR of 1.0 is average; below 1.0 indicates better-than-average safety. Top contractors maintain EMRs significantly below 1.0. Ask also about recent OSHA inspections, citations, and any serious injuries on recent projects. Safety culture correlates strongly with overall operational discipline.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                "What quality control processes do you use, and who is responsible for quality?"
              </h3>
              <p className="text-gray-600">
                Listen for systematic approaches: submittal reviews, installation inspections, testing programs, and punch list management. Ask who on the team is specifically responsible for quality—dedicated quality personnel or quality duties assigned to project managers already managing other responsibilities. Understand how deficiencies are identified, documented, and corrected.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Questions About Subcontractors and Suppliers
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                "Who are your key subcontractors for major trades, and how long have you worked with them?"
              </h3>
              <p className="text-gray-600">
                Long-term subcontractor relationships indicate a contractor who treats trades fairly and manages projects professionally. Ask specifically about electrical, mechanical, plumbing, and other critical trades. Contractors who change subcontractors frequently may have relationship or payment issues that could affect your project.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                "How do you ensure subcontractor quality and verify their credentials?"
              </h3>
              <p className="text-gray-600">
                Understand the contractor's subcontractor qualification process. Do they verify licenses, insurance, and safety records? Do they have pre-qualified subcontractor lists, or do they simply accept the lowest bid regardless of qualifications? Your project quality depends on subcontractor quality, and the general contractor's vetting process matters.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Questions About References and Track Record
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                "Can you provide references from projects completed in the past two years, and may we contact them directly?"
              </h3>
              <p className="text-gray-600">
                Recent references matter more than projects from years ago—they reflect current capabilities and personnel. Request multiple references and contact them independently. Ask references specific questions: Were there budget issues? Schedule delays? Quality problems? Would they hire this contractor again? Contractors confident in their work welcome thorough reference checking.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                "Can we visit one of your current job sites and one of your completed projects?"
              </h3>
              <p className="text-gray-600">
                Site visits reveal what references can't. A current job site shows organization, safety practices, and work quality in progress. A completed project shows the finished result and how the building has held up. Top contractors welcome site visits because their work speaks for itself.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Questions Specific to Tampa Bay Construction
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                "How do you plan for and manage hurricane season construction?"
              </h3>
              <p className="text-gray-600">
                Six months of Florida's year fall within hurricane season. Experienced Tampa Bay contractors have hurricane preparedness plans, understand which construction phases are most vulnerable, and factor weather risks into scheduling. Ask about specific experiences managing projects through tropical weather events and how they protected partially completed structures.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                "Which Tampa Bay jurisdictions have you worked in, and what are their permitting timelines?"
              </h3>
              <p className="text-gray-600">
                Local jurisdictions differ significantly in permitting processes and timelines. A contractor experienced with the City of Tampa may face learning curves in Pinellas County. Ask about specific experience in your project's jurisdiction and realistic expectations for permit processing times.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  How many contractors should I interview before making a decision?
                </h3>
                <p className="text-gray-600">
                  Three to five qualified contractors typically provides sufficient options without becoming overwhelming. Focus on quality over quantity—thoroughly evaluating three excellent contractors yields better results than superficially reviewing ten. Invest time in deep evaluation of your finalists rather than casting the widest possible net.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  Should I be concerned if a contractor can't answer a question immediately?
                </h3>
                <p className="text-gray-600">
                  Not necessarily—some questions require research for accurate answers. What matters is how they handle it. Do they commit to providing the information promptly and follow through? Do they seem evasive or defensive? Thoughtful contractors may pause before answering rather than making things up. Evaluate responsiveness to follow-up requests as much as immediate answers.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  What if contractors give very different answers to the same questions?
                </h3>
                <p className="text-gray-600">
                  Different answers reveal different approaches, capabilities, and values. Significantly different schedule estimates may indicate one contractor understands your project better than another—or is being unrealistic. Different insurance limits may reflect different risk tolerance. Use variations to understand each contractor's perspective and determine whose approach best matches your needs.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  Should I share other contractors' responses or pricing with competitors?
                </h3>
                <p className="text-gray-600">
                  Generally, avoid sharing specific competitor information. This can lead to "bid shopping" where contractors lower prices by cutting scope or quality rather than providing their best legitimate proposal. Evaluate each contractor's response independently. If you want to negotiate, do so based on your own assessment of value rather than using competitors' information as leverage.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  Is it appropriate to ask about current workload and capacity?
                </h3>
                <p className="text-gray-600">
                  Absolutely—this question reveals whether the contractor can prioritize your project. Ask about current projects, upcoming commitments, and how your project fits into their capacity. Contractors stretched too thin may struggle to provide adequate attention. Conversely, a contractor with very little work may raise questions about why they're not busier.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Florida Construction Specialists Welcomes Your Questions
            </h2>
            <p className="text-gray-600 mb-6">
              At Florida Construction Specialists, we encourage potential clients to ask every question that matters to their decision. We provide documentation readily, welcome site visits, and facilitate direct contact with our references. Thorough evaluation helps ensure that clients who choose us do so with full confidence in our capabilities.
            </p>
            <p className="text-gray-600 mb-6">
              Contact Florida Construction Specialists today to discuss your Tampa Bay commercial project. Bring your questions—the more thorough your evaluation, the more confident you'll be in choosing us as your construction partner.
            </p>
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

      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Ask Your Questions?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with Florida Construction Specialists and get the answers you need.
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
