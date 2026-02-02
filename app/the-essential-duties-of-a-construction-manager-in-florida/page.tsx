import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Essential Duties of a Construction Manager in Florida | Tampa Bay",
  description: "Discover the critical responsibilities of construction managers in Florida commercial projects. Learn how professional CM services ensure project success in Tampa Bay.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Essential Duties of a Construction Manager in Florida", href: "/the-essential-duties-of-a-construction-manager-in-florida/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/the-role-of-a-construction-manager/", label: "Role of a Construction Manager" },
  { href: "/choose-between-general-contractor-and-construction-manager/", label: "GC vs Construction Manager" },
  { href: "/the-stages-of-construction-project-management/", label: "Project Management Stages" },
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
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Construction manager overseeing commercial project in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            The Essential Duties of a Construction Manager in Florida
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Understanding the comprehensive responsibilities that construction managers fulfill to deliver successful commercial projects throughout Tampa Bay and Central Florida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Expert Management
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
              A construction manager serves as the owner's trusted advisor and professional representative throughout the lifecycle of a commercial construction project. In Florida's demanding construction environment—where hurricane codes, rapid growth, and competitive markets create unique challenges—the construction manager's role becomes even more critical. Florida Construction Specialists provides expert construction management services throughout Tampa, Lakeland, The Villages, and surrounding Central Florida communities, bringing decades of experience to every project we oversee.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Pre-Construction Phase Responsibilities
            </h2>
            <p className="text-gray-600 mb-6">
              The construction manager's involvement begins long before ground is broken. During pre-construction, the CM provides invaluable services that set the foundation for project success. This early engagement distinguishes construction management from traditional general contracting and often determines whether a project meets its budget and schedule goals.
            </p>
            
            <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
              Feasibility Analysis and Site Evaluation
            </h3>
            <p className="text-gray-600 mb-6">
              Before design begins, construction managers evaluate potential sites and assess project feasibility. In the Tampa Bay market, this includes analyzing soil conditions (particularly important given Florida's sandy soils and high water tables), evaluating access for construction equipment, identifying potential environmental concerns, and researching local jurisdiction requirements. For commercial projects in Hillsborough, Pinellas, and Pasco counties, understanding varying municipal requirements can prevent costly surprises later in the project.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
              Budget Development and Cost Estimation
            </h3>
            <p className="text-gray-600 mb-6">
              Construction managers develop detailed cost estimates based on conceptual designs, allowing owners to make informed decisions about project scope and financing. As design progresses, these estimates are refined, giving owners continuous visibility into projected costs. In Florida's volatile construction market, where material prices and labor availability fluctuate significantly, having an experienced CM monitoring costs from day one helps avoid budget overruns.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
              Schedule Development and Milestone Planning
            </h3>
            <p className="text-gray-600 mb-6">
              Creating a realistic project schedule requires deep understanding of construction sequencing, local permit timelines, and seasonal factors. Florida construction managers must account for hurricane season (June through November), summer afternoon thunderstorms, and peak construction periods when subcontractor availability becomes limited. The CM develops detailed schedules identifying critical path activities and key milestones for owner review and approval.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
              Constructability Review
            </h3>
            <p className="text-gray-600 mb-6">
              Perhaps the most valuable pre-construction service is constructability review. Construction managers analyze architectural and engineering drawings to identify potential construction challenges, coordination issues between trades, and opportunities for value engineering. Catching design conflicts on paper costs far less than discovering them during construction. For Tampa Bay commercial projects, constructability reviews also focus on Florida-specific requirements like hurricane strapping, impact-resistant glazing, and elevated electrical systems in flood-prone areas.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Procurement and Bidding Management
            </h2>
            <p className="text-gray-600 mb-6">
              Construction managers oversee the procurement process, ensuring the project obtains quality materials and qualified subcontractors at competitive prices. This involves developing bid packages, pre-qualifying subcontractors, conducting bid analyses, and making award recommendations to the owner.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-brand-green-dark text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">Procurement Phase</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">CM Responsibilities</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Owner Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Bid Package Development</td>
                    <td className="border border-gray-300 px-4 py-3">Create comprehensive scope documents for each trade</td>
                    <td className="border border-gray-300 px-4 py-3">Ensures apples-to-apples bid comparisons</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Subcontractor Pre-qualification</td>
                    <td className="border border-gray-300 px-4 py-3">Evaluate financial stability, safety records, experience</td>
                    <td className="border border-gray-300 px-4 py-3">Reduces risk of subcontractor failure</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Bid Solicitation</td>
                    <td className="border border-gray-300 px-4 py-3">Distribute documents, conduct pre-bid meetings</td>
                    <td className="border border-gray-300 px-4 py-3">Maximizes competitive participation</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Bid Analysis</td>
                    <td className="border border-gray-300 px-4 py-3">Evaluate proposals, identify gaps, level bids</td>
                    <td className="border border-gray-300 px-4 py-3">Ensures best value selection</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Award Recommendation</td>
                    <td className="border border-gray-300 px-4 py-3">Present analysis with recommendations to owner</td>
                    <td className="border border-gray-300 px-4 py-3">Informed decision-making with owner control</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Construction Phase Management
            </h2>
            <p className="text-gray-600 mb-6">
              Once construction begins, the construction manager's duties intensify. Daily oversight ensures that work proceeds according to plans, specifications, schedule, and budget while maintaining quality standards and safe working conditions.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
              Schedule Management and Coordination
            </h3>
            <p className="text-gray-600 mb-6">
              The CM continuously monitors and updates the construction schedule, coordinating activities among multiple subcontractors to maintain workflow efficiency. This includes conducting weekly scheduling meetings, tracking milestone progress, identifying potential delays, and implementing recovery measures when necessary. In Tampa Bay's busy construction market, where subcontractors often juggle multiple projects, proactive schedule management keeps your project prioritized.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
              Cost Control and Financial Management
            </h3>
            <p className="text-gray-600 mb-6">
              Construction managers maintain detailed cost tracking systems, reviewing and processing payment applications, managing change orders, and providing regular financial reports to owners. The CM ensures that work is properly documented before payment, protects the owner's interests in change order negotiations, and maintains contingency management to handle unforeseen conditions.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
              Quality Assurance and Control
            </h3>
            <p className="text-gray-600 mb-6">
              Ensuring that construction meets plans, specifications, and applicable codes is a primary CM responsibility. This involves reviewing submittals and shop drawings, conducting regular inspections, coordinating required testing and inspections, and maintaining punch lists of deficient work. In Florida, where building codes for hurricane resistance are particularly stringent, quality control takes on added importance—improper installation of impact-resistant windows or hurricane strapping can have serious consequences.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
              Safety Management
            </h3>
            <p className="text-gray-600 mb-6">
              Construction managers establish and enforce site safety programs, conduct regular safety meetings, and ensure compliance with OSHA regulations and company safety policies. Florida's heat and humidity create additional safety concerns, including heat illness prevention and lightning safety protocols that must be addressed on every Tampa Bay construction site.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Florida-Specific Regulatory Compliance
            </h2>
            <p className="text-gray-600 mb-6">
              Construction managers in Florida must navigate a complex regulatory environment that includes state-level requirements and varying local ordinances. Key compliance areas include:
            </p>
            <ul className="list-none space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Florida Building Code:</strong> Ensuring compliance with the state's enhanced wind resistance and flood protection requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Local Jurisdiction Requirements:</strong> Managing permits and inspections across Tampa, St. Petersburg, Clearwater, and county jurisdictions</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Environmental Regulations:</strong> Compliance with stormwater management, protected species, and wetland requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>ADA Compliance:</strong> Ensuring commercial buildings meet accessibility requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <span><strong>Specialty Licenses:</strong> Verifying that all trades hold appropriate Florida contractor licenses</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Communication and Documentation
            </h2>
            <p className="text-gray-600 mb-6">
              Effective communication forms the backbone of successful construction management. The CM serves as the central communication hub, facilitating information flow between owners, architects, engineers, subcontractors, and inspectors. This includes conducting regular progress meetings, distributing meeting minutes, managing requests for information (RFIs), processing submittals, and maintaining comprehensive project documentation.
            </p>
            <p className="text-gray-600 mb-6">
              Documentation is particularly important in Florida, where construction defect claims are common and weather events can create disputes about delays and damages. Well-maintained project records protect all parties and provide the basis for resolving issues that arise during or after construction.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Project Closeout Duties
            </h2>
            <p className="text-gray-600 mb-6">
              As construction nears completion, the construction manager coordinates the closeout process, including final inspections, certificate of occupancy acquisition, warranty documentation, training for building systems, and transition to the owner's facility management team. Proper closeout ensures the owner receives a fully functional building with all documentation needed for ongoing operations and maintenance.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  Do construction managers need a contractor's license in Florida?
                </h3>
                <p className="text-gray-600">
                  It depends on the contract structure. Construction managers operating "at risk" (holding contracts with subcontractors) must hold appropriate Florida contractor licenses. CMs working purely as the owner's agent may not require licensure but typically hold licenses anyway to provide comprehensive services. Florida Construction Specialists maintains all required state licenses for construction management services.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  How does a construction manager differ from a project manager?
                </h3>
                <p className="text-gray-600">
                  While the terms are sometimes used interchangeably, a construction manager typically refers to the firm or lead individual providing CM services, while project managers are employees assigned to specific projects. The CM firm's project manager handles day-to-day management, supported by superintendents, engineers, and administrative staff depending on project size and complexity.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  What qualifications should a Florida construction manager have?
                </h3>
                <p className="text-gray-600">
                  Look for CMs with extensive Florida experience, proper licensing, strong safety records, and professional credentials such as CCM (Certified Construction Manager) from the Construction Management Association of America. Experience with your specific project type (healthcare, retail, office, etc.) and familiarity with local Tampa Bay jurisdictions are also important qualifications.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  How much does construction management cost in Tampa Bay?
                </h3>
                <p className="text-gray-600">
                  CM fees typically range from 3-8% of construction cost, depending on project size, complexity, and the scope of services required. While this adds visible cost, effective construction management often saves multiples of the fee through value engineering, competitive procurement, and avoiding costly delays and errors. Many owners find that professional CM services provide excellent return on investment.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  When should I hire a construction manager for my project?
                </h3>
                <p className="text-gray-600">
                  The earlier the better. Ideally, engage a construction manager during the programming or schematic design phase to maximize the value of pre-construction services. However, CMs can add value at any stage—even projects already in design can benefit from constructability review, cost estimation, and procurement management. Contact Florida Construction Specialists to discuss your project's specific timing needs.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Partner with Florida Construction Specialists
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists brings comprehensive construction management expertise to commercial projects throughout Tampa Bay and Central Florida. Our team understands the unique challenges of building in Florida—from hurricane-resistant construction to complex permitting processes—and applies this knowledge to every project we manage.
            </p>
            <p className="text-gray-600 mb-6">
              Whether you're planning a new commercial development, expanding an existing facility, or renovating a tenant space, our construction management services provide the professional oversight needed for successful project delivery. Contact us today to discuss how our construction management expertise can benefit your next Tampa Bay commercial project.
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
            Need Expert Construction Management?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for professional CM services on your commercial project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request a Consultation
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
