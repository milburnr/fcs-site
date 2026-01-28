import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa's Historic Restoration Zoning Laws - Florida Construction Specialists",
  description: "Understanding Tampa's zoning regulations as they apply to historic buildings and preservation districts. Navigating overlay zones, variances, and adaptive reuse requirements.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa's Historic Restoration Zoning Laws", href: "/tampas-historic-restoration-zoning-laws/" },
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
            src="/wp-content/uploads/2023/12/historic-preservation.jpg"
            alt="Tampa zoning laws"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa's Historic Restoration Zoning Laws
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Navigating the intersection of zoning regulations and historic preservation requirements in Tampa, enabling successful adaptive reuse and restoration projects.
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
              Historic restoration projects in Tampa must navigate both preservation regulations and underlying zoning requirements. While historic district design guidelines govern how buildings look, zoning laws govern what uses are permitted, how much development can occur, and various dimensional standards. Understanding how these regulatory frameworks interact—and where flexibility exists for historic properties—enables successful project planning.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists brings comprehensive understanding of Tampa's regulatory landscape to every historic restoration project. Our experience with zoning variances, adaptive reuse provisions, and overlay district requirements helps clients identify project feasibility early and navigate approval processes efficiently.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Zoning and Historic Preservation: Separate but Related
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's zoning code and historic preservation regulations operate as distinct but overlapping systems. Zoning establishes permitted uses, density, height, setbacks, parking requirements, and similar development parameters. Historic preservation regulations—administered through separate review processes—govern design, materials, and character of work on historic properties.
            </p>
            
            <p className="text-gray-600 mb-6">
              A restoration project may need approval from both systems. Converting a historic warehouse to apartments, for example, requires zoning approval for the residential use (if not already permitted) and historic preservation approval for exterior modifications. Understanding both sets of requirements early in planning prevents surprises that could derail projects.
            </p>

            <p className="text-gray-600 mb-6">
              Historic properties sometimes face zoning challenges that newer buildings don't encounter. Buildings constructed before current codes may be "nonconforming" with respect to setbacks, height, parking, or other standards. Zoning provisions for nonconforming structures affect what changes are permitted and whether nonconformities can continue, expand, or must be eliminated.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Historic Overlay Districts
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's zoning map includes overlay districts that modify underlying zoning for areas with special characteristics—including historic areas. The Ybor City overlay, for example, establishes specific regulations reflecting the district's unique character and development patterns.
            </p>

            <p className="text-gray-600 mb-6">
              Overlay districts may modify permitted uses, density, parking requirements, signage, and other parameters to better align with historic area characteristics. Buildings in these areas must comply with both underlying zoning and overlay requirements—though overlays typically supersede underlying standards where conflicts exist.
            </p>

            <p className="text-gray-600 mb-6">
              Understanding overlay provisions helps project teams identify opportunities and constraints early in planning. An overlay that permits entertainment uses in a previously industrial area, for example, may enable adaptive reuse projects that underlying zoning would prohibit. Conversely, overlays may impose restrictions beyond underlying zoning requirements.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Adaptive Reuse Zoning Provisions
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's zoning code includes provisions that facilitate adaptive reuse of historic buildings—recognizing that historic structures contribute value even when their original uses are no longer viable. These provisions may offer flexibility on parking, setbacks, or use restrictions that would otherwise prohibit desirable rehabilitation projects.
            </p>

            <p className="text-gray-600 mb-6">
              Parking requirements frequently present challenges for historic buildings, which were typically constructed before automobile dependency created current parking demands. Converting a historic building to residential or commercial use under standard zoning would require parking that may be physically impossible to provide on site. Adaptive reuse provisions may reduce requirements, allow off-site parking, or provide other flexibility.
            </p>

            <p className="text-gray-600 mb-6">
              Use flexibility provisions may permit uses in historic buildings that underlying zoning prohibits for new construction. A historic industrial building in a commercial zone might receive approval for residential conversion under adaptive reuse provisions, enabling viable reuse that strict application of underlying zoning would prevent.
            </p>

            {/* Zoning Considerations Table */}
            <div className="my-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Key Zoning Considerations for Historic Restoration</h3>
              <table className="min-w-full border border-gray-300">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">Issue</th>
                    <th className="px-4 py-2 text-left">Challenge</th>
                    <th className="px-4 py-2 text-left">Potential Solutions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="bg-white">
                    <td className="px-4 py-2">Nonconforming Use</td>
                    <td className="px-4 py-2">Historic use not permitted in current zone</td>
                    <td className="px-4 py-2">Adaptive reuse provisions, variance, rezoning</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Parking Deficiency</td>
                    <td className="px-4 py-2">Cannot provide required on-site parking</td>
                    <td className="px-4 py-2">Reduced requirements, off-site, payment in lieu</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Setback Encroachment</td>
                    <td className="px-4 py-2">Historic building within required setback</td>
                    <td className="px-4 py-2">Nonconforming structure provisions, variance</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Height Exceedance</td>
                    <td className="px-4 py-2">Historic building exceeds height limit</td>
                    <td className="px-4 py-2">Nonconforming provisions (usually may remain)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Density/FAR</td>
                    <td className="px-4 py-2">Historic building exceeds allowed density</td>
                    <td className="px-4 py-2">Preservation incentives, nonconforming status</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Use Change</td>
                    <td className="px-4 py-2">Proposed use not permitted in zone</td>
                    <td className="px-4 py-2">Special use permit, adaptive reuse, rezoning</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Variances for Historic Properties
            </h2>
            <p className="text-gray-600 mb-6">
              When zoning compliance is impossible without damaging historic character, variance procedures provide potential relief. Variances allow deviation from specific zoning requirements when applicants demonstrate that strict compliance would cause unnecessary hardship and that the variance would not harm public interests.
            </p>

            <p className="text-gray-600 mb-6">
              Historic properties often present compelling variance arguments. If providing required parking would require demolishing a historic structure or paving a historically significant landscape, that physical impossibility supports variance justification. If meeting setback requirements would require removing a character-defining historic building addition, that preservation conflict supports the case.
            </p>

            <p className="text-gray-600 mb-6">
              Variance applications require demonstration of hardship—that something about the property prevents compliance, not merely that compliance is expensive or inconvenient. Historic designation itself, combined with preservation requirements that prohibit changes necessary for compliance, can constitute hardship justifying variance relief.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Coordination with Tax Credit Requirements
            </h2>
            <p className="text-gray-600 mb-6">
              Projects pursuing historic tax credits face additional considerations when zoning changes are involved. The Secretary of the Interior's Standards require that rehabilitation work be compatible with a property's historic character—but zoning requirements may push designs in different directions.
            </p>

            <p className="text-gray-600 mb-6">
              Required parking, for example, may conflict with preservation of historic site features. Modern signage requirements may conflict with historic district design guidelines. Fire access requirements may necessitate changes that preservation standards would otherwise prohibit. Navigating these conflicts requires understanding both preservation and zoning requirements.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists helps clients identify potential zoning/preservation conflicts early in project planning, when alternatives can be explored. Our experience with both regulatory systems enables development of strategies that satisfy all applicable requirements—or identifies where variances or other relief may be necessary.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Special Use Permits and Conditional Uses
            </h2>
            <p className="text-gray-600 mb-6">
              Uses not permitted "by right" in a zoning district may be obtainable through special use permits or conditional use approval. These processes allow uses the community deems potentially appropriate but requiring case-by-case review to ensure compatibility with surrounding properties.
            </p>

            <p className="text-gray-600 mb-6">
              Historic buildings often support special use arguments. Their distinctive character, community significance, and preservation importance may justify uses that would be inappropriate in generic buildings. Approving bodies may recognize that permitting adaptive reuse serves broader community interests even when the specific use doesn't align with standard zoning patterns.
            </p>

            <p className="text-gray-600 mb-6">
              Special use and conditional use applications require public hearings where neighbors and other stakeholders can participate. Building community support—through early communication, design responsiveness, and demonstrated commitment to preservation—improves approval prospects for projects requiring discretionary use approval.
            </p>

            {/* FAQ Section */}
            <div className="my-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800">Does historic designation override zoning requirements?</h4>
                  <p className="text-gray-600">No, historic designation and zoning operate as separate regulatory systems. Historic buildings must generally comply with zoning unless specific exemptions, overlay provisions, or variances apply. However, the preservation imperative—and physical constraints of historic buildings—often supports flexibility in zoning application.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Can I convert a historic industrial building to residential use?</h4>
                  <p className="text-gray-600">Potentially, depending on zoning and available flexibility mechanisms. Adaptive reuse provisions may permit conversions that underlying zoning would prohibit. Special use permits or rezoning may also enable residential conversion. Early zoning analysis identifies what approvals are needed and assesses feasibility.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">How do I handle parking requirements for a historic building?</h4>
                  <p className="text-gray-600">Historic buildings frequently cannot provide parking that modern codes require. Options include reduced parking requirements for adaptive reuse, off-site parking arrangements, payment in lieu of parking, shared parking with complementary uses, or variance from parking requirements. The appropriate strategy depends on specific zoning provisions and project circumstances.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Can I expand a nonconforming historic building?</h4>
                  <p className="text-gray-600">Zoning provisions for nonconforming structures determine what changes are permitted. Many codes prohibit expansion of nonconformities, but historic buildings may receive special treatment. Additions that don't increase the nonconforming aspect (adding within existing setback rather than projecting further) may be treated differently than expansions that increase nonconformity.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">What if zoning requirements conflict with preservation standards?</h4>
                  <p className="text-gray-600">Conflicts between zoning and preservation requirements require careful navigation. Generally, preservation standards are inflexible for tax credit projects—the Standards must be met. Zoning may offer more flexibility through variances, special provisions for historic properties, or administrative interpretation. Florida Construction Specialists helps identify solutions that satisfy both systems.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Expert Regulatory Navigation from Florida Construction Specialists
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists understands Tampa's complex regulatory environment from years of successfully navigating zoning, preservation, and building code requirements for historic restoration projects. Our experience identifying viable project approaches, securing necessary approvals, and coordinating multiple regulatory processes keeps projects on track.
            </p>

            <p className="text-gray-600 mb-6">
              Contact us today for preliminary analysis of your historic restoration project. We'll evaluate zoning implications alongside preservation requirements, identify potential challenges, and develop strategies for successful project approval and execution.
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
            Contact Florida Construction Specialists today for expert guidance on zoning requirements for your historic restoration project.
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
