import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Licensed Contractors for Commercial Construction in Florida | Tampa Bay",
  description: "Understand Florida contractor licensing requirements and why licensed contractors are essential for commercial construction. Verify credentials before hiring.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Licensed Contractors for Commercial Construction in Florida", href: "/licensed-contractors-for-commercial-construction-in-florida/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/top-bonded-insured-commercial-contractor-in-tampa/", label: "Bonded & Insured Contractors" },
  { href: "/the-key-traits-of-top-commercial-contractors-in-tampa/", label: "Traits of Top Contractors" },
  { href: "/hiring-commercial-contractors-in-tampa/", label: "Hiring Commercial Contractors" },
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
            alt="Licensed commercial contractor working in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Licensed Contractors for Commercial Construction in Florida
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Understanding Florida's contractor licensing requirements and why proper licensure is essential for protecting your commercial construction investment in Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Work With Licensed Experts
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
              Florida maintains some of the most rigorous contractor licensing requirements in the nation, reflecting the state's commitment to protecting consumers and ensuring construction quality. For commercial property owners in Tampa Bay, understanding these licensing requirements—and insisting on properly licensed contractors—is essential for project success and legal protection. Florida Construction Specialists holds all required state licenses for commercial construction, providing Tampa, Lakeland, The Villages, and Central Florida clients with the credentials and expertise their projects demand.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Florida's Contractor Licensing System
            </h2>
            <p className="text-gray-600 mb-6">
              The Florida Construction Industry Licensing Board (CILB), operating under the Department of Business and Professional Regulation (DBPR), administers contractor licensing throughout the state. Florida requires state licensure for contractors engaged in construction work exceeding $1,000 in value, making licensing requirements virtually universal for commercial projects.
            </p>
            <p className="text-gray-600 mb-6">
              Florida offers two primary types of general contractor licenses: Certified General Contractor (CGC) and Registered General Contractor (RGC). The Certified license allows work anywhere in Florida, while Registered licenses are limited to specific counties. For commercial projects in the Tampa Bay area spanning multiple jurisdictions, the Certified General Contractor license provides the flexibility and statewide authorization most commercial owners need.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Requirements for Florida Contractor Licensure
            </h2>
            <p className="text-gray-600 mb-6">
              Obtaining a Florida general contractor license requires meeting stringent requirements that demonstrate competency, experience, and financial responsibility:
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
              Experience Requirements
            </h3>
            <p className="text-gray-600 mb-6">
              Applicants must demonstrate at least four years of construction experience, including supervisory experience as a foreman, superintendent, or contractor. Alternative pathways exist for applicants with construction management degrees, but all paths require demonstrable hands-on construction experience. This requirement ensures that licensed contractors possess practical knowledge of construction processes.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
              Examination Requirements
            </h3>
            <p className="text-gray-600 mb-6">
              Florida requires passage of rigorous examinations testing both construction knowledge and business/financial management. The exam covers Florida building codes, construction methods, project management, contract law, lien law, safety regulations, and business practices. Pass rates typically fall below 50%, reflecting exam difficulty and ensuring only qualified candidates receive licenses.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
              Financial Requirements
            </h3>
            <p className="text-gray-600 mb-6">
              Applicants must demonstrate financial stability through credit reports and financial statements. Additionally, contractors must obtain a license bond (or cash alternative) of at least $10,000 before license issuance. This financial screening helps ensure that licensed contractors have the resources to complete projects and satisfy obligations.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
              Insurance Requirements
            </h3>
            <p className="text-gray-600 mb-6">
              Florida requires contractors to maintain workers' compensation insurance (or exemption for sole proprietors without employees) and public liability insurance. These requirements protect workers and the public from construction-related injuries and damages.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-brand-green-dark text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">License Type</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Scope of Work</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Geographic Authority</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Certified General Contractor (CGC)</td>
                    <td className="border border-gray-300 px-4 py-3">Commercial and residential construction of any size</td>
                    <td className="border border-gray-300 px-4 py-3">Statewide</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Registered General Contractor (RGC)</td>
                    <td className="border border-gray-300 px-4 py-3">Commercial and residential construction of any size</td>
                    <td className="border border-gray-300 px-4 py-3">Specific counties only</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Certified Building Contractor (CBC)</td>
                    <td className="border border-gray-300 px-4 py-3">Buildings up to 3 stories, limited scope</td>
                    <td className="border border-gray-300 px-4 py-3">Statewide</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Specialty Contractors</td>
                    <td className="border border-gray-300 px-4 py-3">Specific trades (electrical, plumbing, HVAC, etc.)</td>
                    <td className="border border-gray-300 px-4 py-3">Varies by license type</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Why Licensing Matters for Commercial Construction
            </h2>
            <p className="text-gray-600 mb-6">
              Hiring unlicensed contractors for commercial construction in Florida creates serious risks that extend far beyond regulatory compliance:
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
              Legal Compliance and Permitting
            </h3>
            <p className="text-gray-600 mb-6">
              Florida law requires that contractors pulling building permits hold appropriate licenses. Unlicensed contractors cannot legally obtain permits, creating problems that can halt your project entirely. Building departments verify license status before permit issuance, and work performed without proper permits can result in stop-work orders, forced demolition, and inability to obtain certificates of occupancy.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
              Contract Enforceability
            </h3>
            <p className="text-gray-600 mb-6">
              Florida courts have consistently held that contracts with unlicensed contractors are unenforceable. If disputes arise—over quality, payment, or completion—you may have no legal remedy if your contractor wasn't properly licensed. This applies even if you didn't know the contractor was unlicensed at contract signing. Verifying licensure before contracting protects your ability to enforce contract terms.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
              Insurance Coverage Validity
            </h3>
            <p className="text-gray-600 mb-6">
              Insurance policies may exclude coverage for work performed by unlicensed contractors. If accidents, injuries, or property damage occur on projects where unlicensed contractors performed work, insurance claims may be denied. This leaves property owners personally exposed to potentially devastating liability.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
              Quality and Competency Assurance
            </h3>
            <p className="text-gray-600 mb-6">
              Licensed contractors have demonstrated competency through examination and experience requirements. Unlicensed contractors may lack the knowledge to build safely and correctly, particularly regarding Florida's complex building codes for hurricane resistance, fire protection, and accessibility compliance. The consequences of incompetent construction can include structural failures, safety hazards, and buildings that don't meet code requirements.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              How to Verify Contractor Licensure
            </h2>
            <p className="text-gray-600 mb-4">
              Florida makes license verification straightforward through the DBPR's online license verification system. Follow these steps to confirm contractor credentials:
            </p>
            <ul className="list-none space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Visit myfloridalicense.com:</strong> Access the DBPR's official verification portal</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Search by name or license number:</strong> Enter the contractor's name or the license number they've provided</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Verify license status:</strong> Confirm the license is "Active" and "Current"—expired or inactive licenses don't authorize work</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Check license type:</strong> Ensure the license type matches your project requirements (general contractor for most commercial work)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Review disciplinary history:</strong> The system shows any disciplinary actions, complaints, or restrictions</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Confirm the entity:</strong> Verify that the license is held by the company you're contracting with, not just an individual employee</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Specialty Contractor Licensing
            </h2>
            <p className="text-gray-600 mb-6">
              While general contractors oversee commercial projects, many specialized trades require separate Florida licenses. Electrical contractors, plumbing contractors, mechanical (HVAC) contractors, roofing contractors, and others must hold trade-specific licenses. When your general contractor engages subcontractors, ensure these specialty trades are properly licensed as well.
            </p>
            <p className="text-gray-600 mb-6">
              Reputable general contractors verify subcontractor licenses before engagement and maintain documentation of subcontractor credentials. Florida Construction Specialists maintains a network of properly licensed specialty contractors who meet our stringent qualification requirements, ensuring every trade working on your project holds appropriate licensure.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Continuing Education Requirements
            </h2>
            <p className="text-gray-600 mb-6">
              Florida requires licensed contractors to complete continuing education to maintain their licenses. General contractors must complete 14 hours of continuing education every two years, including specific courses on Florida building codes, workplace safety, and business practices. This requirement ensures contractors stay current with evolving codes, techniques, and regulations.
            </p>
            <p className="text-gray-600 mb-6">
              When Florida updates its building code (typically every three years), contractors must complete code-specific continuing education. This is particularly important in Tampa Bay, where code changes often address hurricane resistance and flood protection requirements that directly affect commercial construction.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Penalties for Unlicensed Contracting
            </h2>
            <p className="text-gray-600 mb-6">
              Florida aggressively prosecutes unlicensed contracting, which is a criminal offense. Penalties include fines up to $10,000 per offense, imprisonment up to five years for repeat offenses, and civil penalties. Property owners who knowingly hire unlicensed contractors may also face penalties, although prosecution typically focuses on the unlicensed contractors themselves.
            </p>
            <p className="text-gray-600 mb-6">
              The DBPR and local building departments actively investigate unlicensed contracting complaints. If you discover unlicensed work on your project, you can report it through the DBPR complaint portal. Protecting yourself through upfront verification is far preferable to discovering licensing problems after work has begun.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  Can out-of-state contractors work on Florida commercial projects?
                </h3>
                <p className="text-gray-600">
                  Out-of-state contractors must obtain Florida licensure before performing work in the state. Florida doesn't have reciprocity agreements with other states for contractor licenses. Some out-of-state contractors qualify for expedited examination based on equivalent credentials, but they must still pass Florida-specific examinations and meet all licensing requirements.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  What's the difference between a contractor's personal license and company license?
                </h3>
                <p className="text-gray-600">
                  Individual contractors hold licenses personally based on their qualifications. However, construction companies can "qualify" under an individual's license, allowing the company to contract for work. When verifying licenses, ensure the company you're contracting with is properly qualified—not just that an employee holds a personal license. The licensed individual must have a defined relationship with the company.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  Do construction managers need contractor licenses in Florida?
                </h3>
                <p className="text-gray-600">
                  It depends on the contract structure. Construction managers who contract directly with trade contractors (CM at Risk) typically need general contractor licenses. Construction managers acting purely as owner's agents (CM as Agent) may not require licenses if they don't contract for construction work directly. Most professional construction managers hold licenses regardless to provide comprehensive services.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  How often should I verify a contractor's license status?
                </h3>
                <p className="text-gray-600">
                  Verify license status before signing contracts and periodically during lengthy projects. Licenses can be suspended, revoked, or allowed to expire. For projects spanning multiple years, annual verification provides reasonable assurance that credentials remain current. Also verify whenever you have concerns about contractor performance or professionalism.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  What if my contractor's license expires during my project?
                </h3>
                <p className="text-gray-600">
                  Work performed under an expired license violates Florida law and can result in permit revocation, stop-work orders, and other serious consequences. If you discover your contractor's license has expired, stop work immediately and insist on license renewal before proceeding. Reputable contractors maintain license renewals well in advance of expiration to prevent such situations.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Florida Construction Specialists: Fully Licensed Excellence
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists holds all licenses required for commercial construction throughout Florida. Our Certified General Contractor license authorizes work on commercial projects of any size, anywhere in the state. We maintain our licenses in active, current status, complete all required continuing education, and ensure our company remains fully qualified under Florida law.
            </p>
            <p className="text-gray-600 mb-6">
              We welcome license verification—our credentials are publicly available through the Florida DBPR portal, and we readily provide documentation upon request. When you partner with Florida Construction Specialists, you receive the protection and assurance that comes from working with a properly licensed commercial contractor. Contact us today to discuss your Tampa Bay commercial project.
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
            Work With Licensed Professionals
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with Florida Construction Specialists for properly licensed commercial construction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Start Your Project
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
