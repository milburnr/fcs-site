import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Funding and Grants for Historic Restoration in Tampa",
  description: "Comprehensive guide to historic restoration funding in Tampa including federal and state tax credits, grants, and financing options for commercial preservation projects.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Funding and Grants for Historic Restoration in Tampa", href: "/funding-and-grants-for-historic-restoration-in-tampa/" },
];

const internalLinks = [
  { href: "/services/historic-restoration/", label: "Historic Restoration Services" },
  { href: "/services/historic-restoration/shpo-compliance/", label: "SHPO Compliance" },
  { href: "/services/historic-restoration/historic-tax-credits/", label: "Historic Tax Credits" },
  { href: "/services/historic-restoration/material-sourcing/", label: "Historic Material Sourcing" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/historic-preservation/historic-preservation-display.webp"
            alt="Historic restoration funding"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Funding and Grants for Historic Restoration in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Unlocking financial resources for historic preservation including federal and state tax credits, preservation grants, and specialized financing options for Tampa's landmark buildings.
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

      {/* Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <p className="text-gray-600 mb-6">
              Historic restoration projects in Tampa benefit from multiple funding sources that can dramatically improve project economics. The combination of federal and state historic tax credits alone can offset up to 45% of qualified rehabilitation expenditures for income-producing properties. Additional grant programs, specialized financing options, and local incentives further enhance the financial viability of preservation projects.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists helps building owners navigate the complex landscape of preservation funding, identifying applicable programs, structuring projects to maximize benefits, and maintaining the documentation required for incentive programs. Understanding these opportunities early in project planning ensures that restoration work qualifies for maximum available funding.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Federal Historic Preservation Tax Incentive Program
            </h2>
            <p className="text-gray-600 mb-6">
              The Federal Historic Preservation Tax Incentive Program provides a 20% tax credit on qualified rehabilitation expenditures (QREs) for income-producing properties. This credit, administered jointly by the National Park Service and Internal Revenue Service, represents the most significant financial incentive for commercial historic restoration in Tampa.
            </p>
            
            <p className="text-gray-600 mb-6">
              To qualify, properties must be listed on the National Register of Historic Places (individually or as a contributing building within a listed historic district), used for income-producing purposes after rehabilitation, rehabilitated following the Secretary of the Interior's Standards for Rehabilitation, and have QREs exceeding the adjusted basis of the building (generally, the purchase price minus land value minus depreciation).
            </p>

            <p className="text-gray-600 mb-6">
              Many of Tampa's most significant buildings qualify—Ybor City's National Historic Landmark District, the Hyde Park Historic District, and downtown's commercial historic district all contain properties eligible for the federal credit. A $5 million rehabilitation of a qualifying building generates $1 million in federal tax credits, fundamentally changing project economics.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Florida Historic Preservation Tax Credit
            </h2>
            <p className="text-gray-600 mb-6">
              Florida offers an additional 25% state historic preservation tax credit that compounds with the federal credit. Combined, these programs can offset 45% of qualified rehabilitation expenditures—an extraordinary incentive that makes restoration of significant historic buildings financially competitive with new construction.
            </p>

            <p className="text-gray-600 mb-6">
              The Florida credit applies to properties listed on the National Register (individually or within a historic district) that are income-producing and rehabilitated according to the Secretary of the Interior's Standards. The credit is certified by the Florida Division of Historical Resources and can be transferred or sold if the building owner cannot use it directly.
            </p>

            <p className="text-gray-600 mb-6">
              For corporate entities with Florida tax liability, this credit provides direct offset. For pass-through entities or owners without sufficient Florida tax liability, the transferability option enables monetization by selling credits to taxpayers who can use them—typically at 85-95 cents per credit dollar, providing immediate project funding.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Florida Special Category Grants
            </h2>
            <p className="text-gray-600 mb-6">
              The Florida Division of Historical Resources administers Special Category Grants for acquisition, restoration, and archaeological projects at significant historic sites. These competitive grants, funded through the state's documentary stamp tax revenue, can provide substantial funding for major preservation projects.
            </p>

            <p className="text-gray-600 mb-6">
              Eligibility requires listing on the National Register of Historic Places or eligibility for listing. Government agencies, nonprofit organizations, and educational institutions may apply—private owners typically partner with eligible entities to access these funds. Grant amounts can reach several hundred thousand dollars for significant projects.
            </p>

            <p className="text-gray-600 mb-6">
              The competitive application process evaluates project significance, need, planning quality, and applicant capacity. Strong applications demonstrate broad community benefit, thorough planning, and organizational capability to complete proposed work. Florida Construction Specialists assists grant applicants in developing competitive proposals that demonstrate project merit.
            </p>

            {/* Funding Table */}
            <div className="my-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Historic Restoration Funding Sources Summary</h3>
              <table className="min-w-full border border-gray-300">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">Program</th>
                    <th className="px-4 py-2 text-left">Benefit</th>
                    <th className="px-4 py-2 text-left">Eligible Properties</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="bg-white">
                    <td className="px-4 py-2">Federal Historic Tax Credit</td>
                    <td className="px-4 py-2">20% of QREs</td>
                    <td className="px-4 py-2">Income-producing, National Register</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Florida Historic Tax Credit</td>
                    <td className="px-4 py-2">25% of QREs (transferable)</td>
                    <td className="px-4 py-2">Income-producing, National Register</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">FL Special Category Grants</td>
                    <td className="px-4 py-2">Up to $500,000</td>
                    <td className="px-4 py-2">Government/nonprofit, NR listed</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">FL Small Matching Grants</td>
                    <td className="px-4 py-2">Up to $50,000</td>
                    <td className="px-4 py-2">Survey, planning, NR nominations</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Historic Property Tax Exemption</td>
                    <td className="px-4 py-2">Property tax reduction</td>
                    <td className="px-4 py-2">Local landmarks (varies by jurisdiction)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">New Markets Tax Credits</td>
                    <td className="px-4 py-2">39% over 7 years</td>
                    <td className="px-4 py-2">Low-income census tracts</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              New Markets Tax Credits for Historic Properties
            </h2>
            <p className="text-gray-600 mb-6">
              Historic properties located in low-income census tracts may qualify for New Markets Tax Credits (NMTC), which provide 39% tax credit over seven years on qualified equity investments. Many areas of Tampa, including portions of Ybor City and surrounding neighborhoods, qualify as NMTC-eligible census tracts.
            </p>

            <p className="text-gray-600 mb-6">
              Combining NMTC with historic tax credits requires complex structuring but can provide exceptional project economics. Projects must work with Community Development Entities (CDEs) that receive federal NMTC allocation. The application process is competitive and typically suits larger projects ($5 million and above) that can absorb transaction costs.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists collaborates with tax credit consultants and CDEs experienced in combining NMTC with historic credits. This expertise enables structuring of complex financing packages that maximize available incentives for qualifying projects.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Property Tax Incentives for Historic Properties
            </h2>
            <p className="text-gray-600 mb-6">
              Florida law enables local governments to offer property tax exemptions for historic properties that undergo qualified restoration. The City of Tampa and Hillsborough County have programs that freeze assessed values or exempt improvements from taxation for defined periods following certified restoration.
            </p>

            <p className="text-gray-600 mb-6">
              These property tax incentives provide ongoing benefits that complement one-time tax credits. For commercial properties in Tampa's historic districts, reduced property tax burden improves operating economics for years following restoration. Program requirements and benefits vary by jurisdiction—early consultation with local preservation offices clarifies available options.
            </p>

            <p className="text-gray-600 mb-6">
              Qualification typically requires local landmark designation or National Register listing, restoration work meeting the Secretary of the Interior's Standards, and application within specified timeframes. Florida Construction Specialists helps clients coordinate restoration work with property tax incentive applications to ensure qualification.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Foundation and Private Grants
            </h2>
            <p className="text-gray-600 mb-6">
              Foundations with historic preservation missions provide grants for restoration projects, particularly for nonprofit-owned properties or buildings with exceptional significance. The National Trust for Historic Preservation, 1772 Foundation, and state/regional foundations offer programs that may support Tampa restoration projects.
            </p>

            <p className="text-gray-600 mb-6">
              Grant programs typically prioritize projects with broad public benefit, educational components, or exceptional architectural or historical significance. Churches, museums, community centers, and similar nonprofit-owned buildings often prove competitive for foundation funding. Private philanthropy occasionally supports for-profit restoration when community benefit justifies investment.
            </p>

            <p className="text-gray-600 mb-6">
              Successful grant applications require clear project descriptions, realistic budgets, demonstrated organizational capacity, and evidence of matching funding. Florida Construction Specialists provides construction cost estimates and project documentation that strengthen grant applications for clients pursuing foundation funding.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Specialized Lending for Historic Restoration
            </h2>
            <p className="text-gray-600 mb-6">
              Traditional construction lending may not recognize the unique value and risk profile of historic restoration projects. Specialized lenders experienced with historic properties understand tax credit monetization, appreciate the value of historic designation, and structure loans appropriate for preservation projects.
            </p>

            <p className="text-gray-600 mb-6">
              Community development financial institutions (CDFIs) often provide favorable terms for historic restoration, particularly in underserved communities. These mission-driven lenders may offer below-market interest rates, flexible terms, and patient capital that conventional lenders cannot provide.
            </p>

            <p className="text-gray-600 mb-6">
              Tax credit equity investors provide another funding source for larger projects. These investors purchase tax credits (at discount) in exchange for project ownership stakes, providing upfront capital that reduces debt requirements. Complex partnership structures enable tax credit monetization while preserving developer returns.
            </p>

            {/* FAQ Section */}
            <div className="my-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800">Can I combine federal and state historic tax credits?</h4>
                  <p className="text-gray-600">Yes, federal and Florida state historic tax credits can be combined on the same project, providing up to 45% credit on qualified rehabilitation expenditures. The Florida credit is calculated on the full QRE amount (not reduced by the federal credit), maximizing combined benefit. Both programs require the same basic qualifications—National Register listing and compliance with the Secretary of the Interior's Standards.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">My building isn't listed on the National Register. Can I still get tax credits?</h4>
                  <p className="text-gray-600">Buildings that are not currently listed but located within National Register-listed historic districts may qualify if they "contribute" to the district's character. Individual properties can pursue National Register nomination—a process typically taking 6-12 months. Pre-application consultation with SHPO can determine eligibility potential before investing in the nomination process.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">What counts as "qualified rehabilitation expenditure" for tax credits?</h4>
                  <p className="text-gray-600">QREs generally include construction costs for work on the historic building itself—structural repairs, mechanical/electrical systems, interior finishes, and code compliance improvements. Land, acquisition costs, new additions, site work, and furnishings typically don't qualify. Careful categorization during budgeting maximizes QRE amounts and resulting credits.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">How long does the tax credit process take?</h4>
                  <p className="text-gray-600">The three-part application process typically spans the project timeline. Part 1 (historic significance) takes 30-60 days for NPS review. Part 2 (description of rehabilitation) may take 60-90 days and must be approved before construction begins. Part 3 (completed work certification) follows construction completion. Planning should begin 6-12 months before construction start.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">What happens if my project doesn't qualify for tax credits?</h4>
                  <p className="text-gray-600">Projects that don't meet tax credit requirements may still access other funding sources—property tax incentives, foundation grants, and specialized lending remain available for historic properties regardless of tax credit eligibility. Additionally, modifications to project scope may enable qualification—early consultation can identify changes that preserve project goals while meeting credit requirements.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Strategic Funding Planning with Florida Construction Specialists
            </h2>
            <p className="text-gray-600 mb-6">
              Maximizing funding for historic restoration requires strategic planning that begins before project design. Florida Construction Specialists helps building owners evaluate funding options, structure projects to qualify for maximum benefits, and maintain documentation that supports incentive applications throughout construction.
            </p>

            <p className="text-gray-600 mb-6">
              Our experience with Tampa's historic tax credit projects—from Ybor City's industrial buildings to downtown commercial structures—provides practical knowledge of what works. We understand NPS review expectations, SHPO coordination requirements, and the construction documentation that supports successful credit certification.
            </p>

            <p className="text-gray-600 mb-6">
              Contact Florida Construction Specialists today to explore funding opportunities for your historic restoration project. Our team can assess your building's eligibility, estimate potential benefits, and develop strategies that maximize financial returns while preserving Tampa's architectural heritage.
            </p>

          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Historic Restoration Services"
            links={internalLinks}
          />
        </div>
      </section>

      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists today to explore funding options for your historic restoration project.
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
