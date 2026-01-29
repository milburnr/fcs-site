import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa's Historic Districts Restoration Rules - Florida Construction Specialists",
  description: "Navigate Tampa's historic district restoration rules for Ybor City, Hyde Park, and other preservation areas. Understanding local review requirements and design standards.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa's Historic Districts Restoration Rules", href: "/tampas-historic-districts-restoration-rules/" },
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
            src="/images/historic-preservation/historic-preservation-large.webp"
            alt="Tampa historic districts restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa's Historic Districts Restoration Rules
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Understanding the regulatory framework for restoration projects in Tampa's locally-designated historic districts, including approval processes and design standards.
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
              Tampa's locally-designated historic districts establish regulatory frameworks that govern exterior modifications to properties within their boundaries. Unlike National Register listing, which primarily affects tax credit eligibility, local historic district designation creates enforceable design review requirements that apply to all visible exterior work. Understanding these rules before beginning restoration planning prevents delays, redesign costs, and project complications.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists navigates Tampa's historic district regulations as an integral part of restoration project management. Our familiarity with local review bodies, design standards, and approval processes enables efficient project execution that satisfies regulatory requirements while achieving client objectives.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Overview of Tampa's Historic Districts
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa maintains several locally-designated historic districts, each with specific character and corresponding design guidelines. The most significant include Ybor City (administered by the Barrio Latino Commission), Hyde Park, Seminole Heights, Tampa Heights, and West Tampa. Each district reflects distinct historical development patterns that inform appropriate restoration approaches.
            </p>
            
            <p className="text-gray-600 mb-6">
              District boundaries define where local historic preservation regulations apply. Properties within district boundaries—whether individually significant or not—must comply with district design standards for visible exterior work. Properties outside district boundaries but individually designated as local landmarks face similar review requirements.
            </p>

            <p className="text-gray-600 mb-6">
              National Register listing and local historic district designation represent separate designations with different implications. A property may have one, both, or neither. National Register listing enables tax credits; local designation mandates design review. Many Tampa properties have both designations, requiring navigation of both federal tax credit standards and local design guidelines.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Certificate of Appropriateness Process
            </h2>
            <p className="text-gray-600 mb-6">
              Most exterior work in Tampa's historic districts requires Certificate of Appropriateness (COA) approval before construction begins. The COA process ensures that proposed work complies with applicable design guidelines and maintains district character. Working without required approval can result in stop-work orders, fines, and required removal of unauthorized work.
            </p>

            <p className="text-gray-600 mb-6">
              COA applications typically require project descriptions, architectural drawings, material specifications, photographs of existing conditions, and context photographs showing neighboring properties. Staff may issue administrative approval for minor work meeting clear guidelines, while significant projects require board review at scheduled public hearings.
            </p>

            <p className="text-gray-600 mb-6">
              Review timelines vary based on project complexity and meeting schedules. Administrative reviews may complete within weeks; board reviews require scheduling that may extend timelines to 6-8 weeks or longer. Early consultation with preservation staff clarifies requirements and identifies potential issues before formal application submission.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Ybor City and the Barrio Latino Commission
            </h2>
            <p className="text-gray-600 mb-6">
              Ybor City's National Historic Landmark District receives design review through the Barrio Latino Commission, a specialized body created to protect Tampa's most significant historic area. The Commission applies design guidelines reflecting Ybor City's distinctive character—its industrial architecture, brick paving, compact urban fabric, and cultural heritage.
            </p>

            <p className="text-gray-600 mb-6">
              Ybor City guidelines address building renovation and restoration, new construction and additions, signage and commercial storefronts, site work and landscape elements, and demolition (requiring heightened justification). The guidelines emphasize maintaining the district's industrial character while accommodating contemporary commercial and entertainment uses.
            </p>

            <p className="text-gray-600 mb-6">
              Commission review considers not only whether individual projects comply with guidelines but also whether they contribute positively to the district's character as a whole. Projects that technically comply but would establish inappropriate precedents may face additional scrutiny. Understanding this broader perspective helps applicants frame proposals effectively.
            </p>

            {/* Districts Table */}
            <div className="my-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Tampa Historic District Summary</h3>
              <table className="min-w-full border border-gray-300">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">District</th>
                    <th className="px-4 py-2 text-left">Character</th>
                    <th className="px-4 py-2 text-left">Review Body</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="bg-white">
                    <td className="px-4 py-2">Ybor City</td>
                    <td className="px-4 py-2">Industrial, commercial, entertainment</td>
                    <td className="px-4 py-2">Barrio Latino Commission</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Hyde Park</td>
                    <td className="px-4 py-2">Residential, Victorian to Med. Revival</td>
                    <td className="px-4 py-2">Architectural Review Commission</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Seminole Heights</td>
                    <td className="px-4 py-2">Residential, bungalows, craftsman</td>
                    <td className="px-4 py-2">Architectural Review Commission</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Tampa Heights</td>
                    <td className="px-4 py-2">Mixed residential/commercial</td>
                    <td className="px-4 py-2">Architectural Review Commission</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">West Tampa</td>
                    <td className="px-4 py-2">Industrial heritage, residential</td>
                    <td className="px-4 py-2">Architectural Review Commission</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Common Design Standards Across Districts
            </h2>
            <p className="text-gray-600 mb-6">
              While each district has specific guidelines reflecting its character, certain principles apply broadly across Tampa's historic districts. Understanding these common standards provides foundation for restoration planning in any district.
            </p>

            <p className="text-gray-600 mb-6">
              Material authenticity represents a fundamental principle: original materials should be preserved and repaired rather than replaced. When replacement becomes necessary, new materials should match originals in composition, dimension, profile, and appearance. Modern substitute materials—vinyl, aluminum, fiber cement—generally are not acceptable for character-defining elements.
            </p>

            <p className="text-gray-600 mb-6">
              Proportions and scale must respect historic patterns. Window and door proportions, wall-to-opening ratios, and building heights should maintain relationships established by historic construction. Alterations that disrupt these relationships—changing window sizes, adding incompatible additions, altering rooflines—typically face rejection.
            </p>

            <p className="text-gray-600 mb-6">
              Compatible design for additions and new construction requires reference to historic context without direct imitation. The Secretary of the Interior's Standards require that new work be "differentiated from the old" while remaining "compatible with the massing, size, scale, and architectural features." Local guidelines typically interpret this principle for specific district contexts.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Coordinating Local and Federal Requirements
            </h2>
            <p className="text-gray-600 mb-6">
              Projects seeking historic tax credits must satisfy both local design guidelines and the Secretary of the Interior's Standards. While these requirements generally align, differences can create complications. Local boards may require features that federal reviewers find inappropriate, or vice versa.
            </p>

            <p className="text-gray-600 mb-6">
              Early coordination with both local preservation staff and SHPO can identify potential conflicts before they become problems. Florida Construction Specialists facilitates this coordination, ensuring that proposed designs satisfy all applicable requirements before significant design investment.
            </p>

            <p className="text-gray-600 mb-6">
              When conflicts arise, resolution requires understanding which requirements take precedence and where flexibility exists. Tax credit requirements are generally inflexible—the Standards must be met for credit certification. Local requirements may have more flexibility when applicants demonstrate that strict compliance would conflict with federal standards or cause unreasonable hardship.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Appeals and Variances
            </h2>
            <p className="text-gray-600 mb-6">
              When initial applications face denial, applicants may pursue appeals or variance requests. Appeals argue that the review body misapplied guidelines to the proposed project—that the project actually complies when properly understood. Variances acknowledge non-compliance but argue that strict compliance would cause hardship that outweighs preservation objectives.
            </p>

            <p className="text-gray-600 mb-6">
              Successful appeals and variances require strong justification documented with evidence. Economic hardship claims require financial analysis demonstrating that compliance would prevent reasonable economic use. Design justifications require professional opinions supporting alternative approaches. Florida Construction Specialists assists clients in developing effective appeals when initial applications encounter difficulties.
            </p>

            {/* FAQ Section */}
            <div className="my-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800">What work requires Certificate of Appropriateness approval?</h4>
                  <p className="text-gray-600">Generally, any visible exterior work requires COA approval in Tampa's historic districts. This includes building modifications, roofing, windows and doors, painting, signage, fencing, and significant landscape changes. Interior work not visible from outside typically doesn't require approval. Ordinary maintenance using same materials usually doesn't require approval, but consultation with preservation staff clarifies specific situations.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">How long does the approval process take?</h4>
                  <p className="text-gray-600">Administrative staff review for minor projects may complete within 2-4 weeks. Projects requiring board review must wait for scheduled meetings, typically monthly, and may require 6-8 weeks or longer from application to approval. Complex or controversial projects may require multiple review cycles. Early pre-application consultation helps identify requirements and streamline the process.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Can I appeal if my application is denied?</h4>
                  <p className="text-gray-600">Yes, applicants may appeal adverse decisions to higher authorities—typically the City Council or a designated appeals board. Appeals must be filed within specified timeframes and should present new information or arguments addressing reasons for denial. Consultation with preservation professionals can strengthen appeal presentations.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Do historic district rules apply to interior renovations?</h4>
                  <p className="text-gray-600">Local historic district regulations typically apply only to visible exterior elements. Interior work generally doesn't require local preservation approval (though building permits still apply). However, federal tax credit requirements apply to both interior and exterior work on character-defining features. Interior work on individually designated landmarks may face additional scrutiny.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">What happens if I do work without required approval?</h4>
                  <p className="text-gray-600">Unauthorized work in historic districts may result in stop-work orders, fines, and requirements to remove or modify non-conforming work. Enforcement varies by jurisdiction, but the risk of costly remediation argues strongly for obtaining required approvals before construction. If unauthorized work has already occurred, consultation with preservation staff can identify remediation options.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Expert Navigation of Historic District Requirements
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists understands Tampa's historic district regulations from years of successfully completing restoration projects throughout the city. Our relationships with preservation staff, familiarity with review body expectations, and experience with design guidelines enable efficient approvals that keep projects on schedule.
            </p>

            <p className="text-gray-600 mb-6">
              Whether your project is in Ybor City, Hyde Park, or another of Tampa's historic districts, our team ensures that designs satisfy regulatory requirements while achieving your restoration objectives. Contact us today to discuss how we can help navigate Tampa's historic district rules for your project.
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
            Contact Florida Construction Specialists today for expert guidance on Tampa's historic district requirements.
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
