import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Cost of Historic Restoration in Tampa",
  description: "Comprehensive guide to historic restoration costs in Tampa. Budget planning for commercial and institutional projects with tax credit ROI analysis.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Cost of Historic Restoration in Tampa", href: "/cost-of-historic-restoration-in-tampa/" },
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
            alt="Cost of historic restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Cost of Historic Restoration in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Understanding restoration costs for Tampa's historic commercial and institutional buildings, including budget factors, cost ranges, and tax credit impact on project economics.
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
              Historic restoration costs in Tampa vary significantly based on building type, existing condition, scope of work, and compliance requirements. While restoration often costs more per square foot than conventional renovation, the combination of historic tax credits, property tax incentives, and enhanced property values frequently makes preservation financially attractive for commercial and institutional buildings.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists provides detailed cost analysis for historic restoration projects throughout Tampa Bay, helping building owners understand true project economics including available incentives. This comprehensive approach ensures realistic budgeting that accounts for the unique requirements of preservation work while maximizing return on investment.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Factors Influencing Historic Restoration Costs
            </h2>
            <p className="text-gray-600 mb-6">
              Existing building condition represents the most significant cost variable. Buildings that have received regular maintenance require less extensive restoration than those suffering from years of deferred maintenance. Water damage, structural deterioration, and failed systems dramatically increase costs compared to buildings with intact historic fabric.
            </p>
            
            <p className="text-gray-600 mb-6">
              Project scope determines whether costs fall toward the lower or higher end of typical ranges. A preservation treatment that stabilizes and protects a building costs less than full rehabilitation that upgrades all systems for contemporary use. Adaptive reuse projects that change building function typically require more extensive work than restoration for continued current use.
            </p>

            <p className="text-gray-600 mb-6">
              Compliance requirements add costs that conventional renovations avoid. Historic tax credit projects require documentation, review, and adherence to the Secretary of the Interior's Standards—requirements that increase professional service costs but unlock significant financial benefits. Local historic district regulations may mandate specific materials and methods that exceed standard construction specifications.
            </p>

            <p className="text-gray-600 mb-6">
              Specialty craftsmanship for decorative elements costs more than standard construction labor. Ornamental plaster restoration, decorative painting, custom millwork replication, and similar skilled work require artisans whose rates exceed typical construction wages. Buildings with elaborate decorative programs—like the Tampa Theatre or Ybor City's club buildings—incur higher restoration costs than simpler industrial structures.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Cost Ranges by Building Type
            </h2>
            <p className="text-gray-600 mb-6">
              Commercial office buildings typically range from $175-$350 per square foot for full rehabilitation including mechanical, electrical, and plumbing upgrades. Buildings with significant decorative elements or requiring extensive structural repair fall toward the higher end, while simpler structures with sound basic systems cost less.
            </p>

            <p className="text-gray-600 mb-6">
              Industrial buildings and warehouses—common in Ybor City's historic cigar factory district—often cost less due to their simpler construction. Adaptive reuse of these structures for apartments, restaurants, or creative office space typically ranges from $150-$275 per square foot, making them attractive development opportunities when combined with tax credits.
            </p>

            <p className="text-gray-600 mb-6">
              Theaters, churches, and other assembly buildings with elaborate decorative programs represent the highest cost category, typically ranging from $300-$600 per square foot for comprehensive restoration. The Tampa Theatre's atmospheric interior, with its ornamental plaster, specialized lighting, and theatrical equipment, exemplifies the complexity that drives costs in this category.
            </p>

            {/* Cost Table */}
            <div className="my-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Historic Restoration Cost Ranges by Category</h3>
              <table className="min-w-full border border-gray-300">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">Building Type</th>
                    <th className="px-4 py-2 text-left">Scope</th>
                    <th className="px-4 py-2 text-left">Cost per SF</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="bg-white">
                    <td className="px-4 py-2">Industrial/Warehouse</td>
                    <td className="px-4 py-2">Adaptive reuse to commercial</td>
                    <td className="px-4 py-2">$150 - $275</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Commercial Office</td>
                    <td className="px-4 py-2">Full rehabilitation</td>
                    <td className="px-4 py-2">$175 - $350</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Retail/Mixed-Use</td>
                    <td className="px-4 py-2">Rehabilitation with tenant fit-out</td>
                    <td className="px-4 py-2">$200 - $375</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Hotel/Hospitality</td>
                    <td className="px-4 py-2">Complete renovation to brand standards</td>
                    <td className="px-4 py-2">$275 - $450</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Civic/Institutional</td>
                    <td className="px-4 py-2">Full rehabilitation with accessibility</td>
                    <td className="px-4 py-2">$225 - $400</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Theater/Assembly</td>
                    <td className="px-4 py-2">Comprehensive with decorative restoration</td>
                    <td className="px-4 py-2">$300 - $600</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Religious Structure</td>
                    <td className="px-4 py-2">Restoration with conservation work</td>
                    <td className="px-4 py-2">$200 - $450</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Soft Costs and Professional Services
            </h2>
            <p className="text-gray-600 mb-6">
              Historic restoration projects require professional services beyond standard construction management. Architectural fees for preservation projects typically run 10-15% of construction costs—higher than conventional renovation due to documentation requirements, regulatory coordination, and specialized design expertise.
            </p>

            <p className="text-gray-600 mb-6">
              Historic structure reports, condition assessments, and feasibility studies add pre-construction costs of $25,000-$100,000 depending on building size and complexity. While these upfront investments may seem substantial, they prevent costly surprises during construction and provide documentation essential for tax credit applications.
            </p>

            <p className="text-gray-600 mb-6">
              Tax credit consulting fees—typically 2-4% of credit value—pay for expertise that maximizes credit benefits and ensures successful certification. Given that combined federal and state credits can reach 45% of qualified rehabilitation expenditures, professional guidance proves cost-effective even when consulting fees are considered.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Impact of Tax Credits on Net Project Cost
            </h2>
            <p className="text-gray-600 mb-6">
              Historic tax credits fundamentally change project economics by offsetting substantial portions of restoration cost. A $5 million rehabilitation qualifying for both federal (20%) and Florida (25%) credits generates $2.25 million in tax credits, reducing effective project cost to $2.75 million before considering additional incentives.
            </p>

            <p className="text-gray-600 mb-6">
              This reduction makes historic restoration competitive with—or superior to—new construction when all factors are considered. Premium locations in established urban areas, distinctive architectural character, and community appreciation for preserved buildings often translate to rental premiums or sales values that exceed new construction in suburban locations.
            </p>

            <p className="text-gray-600 mb-6">
              Property tax incentives provide ongoing benefits that complement one-time tax credits. Tampa and Hillsborough County programs can freeze assessed values or exempt improvements for periods following certified restoration, further improving operating economics for preserved buildings.
            </p>

            {/* Sample Budget Table */}
            <div className="my-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Sample Budget: 20,000 SF Commercial Historic Rehabilitation</h3>
              <table className="min-w-full border border-gray-300">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">Category</th>
                    <th className="px-4 py-2 text-left">Description</th>
                    <th className="px-4 py-2 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="bg-white">
                    <td className="px-4 py-2">Construction (Hard Costs)</td>
                    <td className="px-4 py-2">20,000 SF × $250/SF</td>
                    <td className="px-4 py-2 text-right">$5,000,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Architecture/Engineering</td>
                    <td className="px-4 py-2">12% of construction</td>
                    <td className="px-4 py-2 text-right">$600,000</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Pre-Construction Studies</td>
                    <td className="px-4 py-2">HSR, condition assessment</td>
                    <td className="px-4 py-2 text-right">$75,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Tax Credit Consulting</td>
                    <td className="px-4 py-2">Application preparation, coordination</td>
                    <td className="px-4 py-2 text-right">$50,000</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Contingency</td>
                    <td className="px-4 py-2">10% of construction</td>
                    <td className="px-4 py-2 text-right">$500,000</td>
                  </tr>
                  <tr className="bg-gray-50 font-bold">
                    <td className="px-4 py-2">Gross Project Cost</td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2 text-right">$6,225,000</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Less: Federal Tax Credit (20%)</td>
                    <td className="px-4 py-2">QRE estimated at $5,000,000</td>
                    <td className="px-4 py-2 text-right">($1,000,000)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Less: Florida Tax Credit (25%)</td>
                    <td className="px-4 py-2">QRE estimated at $5,000,000</td>
                    <td className="px-4 py-2 text-right">($1,250,000)</td>
                  </tr>
                  <tr className="bg-brand-green-dark text-white font-bold">
                    <td className="px-4 py-2">Net Project Cost</td>
                    <td className="px-4 py-2">After tax credits</td>
                    <td className="px-4 py-2 text-right">$3,975,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Managing Cost Uncertainty in Historic Projects
            </h2>
            <p className="text-gray-600 mb-6">
              Historic buildings often contain concealed conditions that cannot be fully assessed until construction exposes hidden elements. Contingency budgets of 10-20% acknowledge this uncertainty, providing resources to address unforeseen conditions without derailing project budgets.
            </p>

            <p className="text-gray-600 mb-6">
              Phased investigation during pre-construction reduces uncertainty by exposing conditions before finalizing budgets. Selective demolition, material probes, and structural investigation reveal hidden conditions that might otherwise surprise construction teams. The cost of this investigation pales compared to change order impacts during construction.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists' experience with Tampa's historic buildings provides baseline expectations for typical conditions. We know the common challenges in Ybor City's brick construction, Hyde Park's residential styles, and downtown's commercial buildings—knowledge that informs realistic budgeting even when specific building conditions remain uncertain.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Value Engineering Without Compromising Preservation
            </h2>
            <p className="text-gray-600 mb-6">
              Cost optimization in historic restoration requires different approaches than conventional value engineering. Simply substituting cheaper materials rarely works—the Secretary of the Interior's Standards mandate appropriate materials, and tax credit eligibility depends on compliance.
            </p>

            <p className="text-gray-600 mb-6">
              Effective value engineering in preservation focuses on scope refinement (identifying truly essential work versus desirable enhancements), phasing strategies (completing critical work now while deferring less urgent elements), and repair versus replacement decisions (maximizing preservation of existing fabric, which often costs less than replacement).
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists helps clients identify value engineering opportunities that reduce costs without compromising preservation standards or tax credit eligibility. Our experience distinguishes between required work and optional enhancements, enabling informed decisions about scope and budget.
            </p>

            {/* FAQ Section */}
            <div className="my-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800">Does historic restoration always cost more than conventional renovation?</h4>
                  <p className="text-gray-600">Historic restoration often costs 10-30% more than conventional renovation due to specialized materials, documentation requirements, and craft labor. However, when tax credits offset 45% of qualified costs, net project expense often falls below conventional renovation. Additionally, historic buildings in premium locations may command higher rents or values that justify higher restoration investment.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">How accurate can cost estimates be before starting construction?</h4>
                  <p className="text-gray-600">Preliminary estimates based on similar projects and visual inspection typically achieve ±25% accuracy. Detailed estimates following comprehensive investigation can approach ±10% accuracy. The key is thorough pre-construction investigation that reveals hidden conditions before final budgeting. Contingency allowances address remaining uncertainty.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">What costs qualify for historic tax credits?</h4>
                  <p className="text-gray-600">Qualified rehabilitation expenditures (QREs) generally include construction costs for work on the historic building itself—walls, ceilings, floors, mechanical systems, electrical, plumbing, and interior finishes. Land, building acquisition, parking, landscaping, new additions, furniture, and decorations typically don't qualify. Careful cost categorization maximizes QRE amounts.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">How do I know if my project will qualify for tax credits?</h4>
                  <p className="text-gray-600">Tax credit qualification requires National Register listing (or eligibility), income-producing use, rehabilitation meeting Secretary of the Interior's Standards, and QREs exceeding the building's adjusted basis. Florida Construction Specialists provides preliminary feasibility assessment that identifies qualification potential and estimates credit value before significant investment in the application process.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Should I budget for cost escalation on multi-year projects?</h4>
                  <p className="text-gray-600">Yes, construction cost escalation of 3-5% annually should be factored into budgets for projects spanning multiple years. This escalation affects both labor and materials. Locking in contractor pricing through early procurement or fixed-price contracts can mitigate escalation risk, though these strategies may carry their own trade-offs.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Expert Cost Analysis from Florida Construction Specialists
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists provides comprehensive cost analysis for historic restoration projects throughout Tampa Bay. Our experience with the region's historic building stock enables realistic budgeting that accounts for typical conditions while identifying opportunities for cost optimization.
            </p>

            <p className="text-gray-600 mb-6">
              Contact us today for a preliminary cost assessment of your historic restoration project. We'll evaluate your building's condition, identify applicable incentives, and develop a budget framework that supports informed decision-making about your preservation investment.
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
            Contact Florida Construction Specialists today for a detailed cost assessment of your historic restoration project.
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
