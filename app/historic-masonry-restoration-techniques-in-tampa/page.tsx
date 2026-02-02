import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Historic Masonry Restoration Techniques in Tampa",
  description: "Expert historic masonry restoration in Tampa using traditional techniques. Specialized brick, stone, and mortar restoration for Ybor City landmarks and commercial buildings.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Historic Masonry Restoration Techniques in Tampa", href: "/historic-masonry-restoration-techniques-in-tampa/" },
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
            alt="Historic masonry restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Historic Masonry Restoration Techniques in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Preserving Tampa's brick and stone heritage through time-tested restoration techniques that meet Secretary of the Interior Standards and qualify for historic tax credits.
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
              Tampa's architectural heritage includes remarkable examples of historic masonry construction, from the distinctive yellow brick cigar factories of Ybor City to the elegant stone facades of downtown's early commercial buildings. Florida Construction Specialists provides expert masonry restoration services that preserve these irreplaceable structures using techniques approved by the State Historic Preservation Office (SHPO) and compliant with the Secretary of the Interior's Standards for the Treatment of Historic Properties.
            </p>

            <p className="text-gray-600 mb-6">
              Historic masonry restoration requires specialized knowledge that differs fundamentally from modern construction practices. The mortars, cleaning methods, and repair techniques appropriate for historic buildings often conflict with standard industry practices. Using improper materials or methods can cause accelerated deterioration, void historic tax credit eligibility, and permanently damage character-defining features.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Understanding Historic Mortar and Its Importance
            </h2>
            <p className="text-gray-600 mb-6">
              Historic mortar composition fundamentally differs from modern Portland cement mortars. Buildings constructed before the 1920s typically used lime-based mortars that remain softer than the surrounding brick or stone. This softer mortar accommodates thermal expansion, moisture movement, and building settlement without damaging masonry units. When harder modern mortars are used for repointing, the incompatible materials force stress into the brick itself, causing spalling and deterioration.
            </p>
            
            <p className="text-gray-600 mb-6">
              The Italian Club, Cuban Club, and other historic structures in Ybor City's National Historic Landmark District exemplify buildings that require lime-based mortar for proper restoration. Their locally-produced brick, manufactured in Tampa during the late 19th and early 20th centuries, proves particularly susceptible to damage from incompatible mortars. Restoration work on these landmark buildings must use analyzed mortar formulations that match original composition.
            </p>

            <p className="text-gray-600 mb-6">
              Mortar analysis provides the scientific basis for developing appropriate replacement formulations. Laboratory testing identifies the binder type (lime, natural cement, or early Portland cement), aggregate characteristics, and proportions used in original construction. This information enables formulation of compatible replacement mortars that will perform properly and maintain historical authenticity—requirements for federal historic tax credit approval.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Proper Repointing Techniques for Historic Buildings
            </h2>
            <p className="text-gray-600 mb-6">
              Repointing—the process of removing deteriorated mortar and installing new mortar—represents the most common masonry restoration task. When performed correctly, repointing extends building life by decades while maintaining historical appearance. Improper repointing causes damage that may be irreversible.
            </p>

            <p className="text-gray-600 mb-6">
              The removal process proves as important as the replacement mortar. Hand tools, carefully operated pneumatic tools, or specialized thin grinding wheels must remove deteriorated mortar to a depth of approximately 2.5 times the joint width without damaging adjacent brick edges. Power grinding that removes brick material or widens joints creates permanent visual damage and compromises structural integrity.
            </p>

            <p className="text-gray-600 mb-6">
              Joint profile—the shape of the finished mortar surface—affects both appearance and performance. Historic buildings typically feature flush, slightly concave, or grapevine joint profiles that shed water effectively while maintaining period-appropriate appearance. Modern weathered or struck joints may be inappropriate for buildings constructed when other profiles were standard practice. Research into original construction techniques guides selection of authentic joint profiles.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Brick Replacement and Salvage Matching
            </h2>
            <p className="text-gray-600 mb-6">
              When deterioration requires brick replacement, matching the original materials challenges restoration professionals. Historic brick varies significantly in size, color, texture, and firing characteristics. Tampa's historic buildings often incorporate locally-produced brick that no longer exists in production—the Tampa brick kilns that supplied Ybor City's construction boom closed decades ago.
            </p>

            <p className="text-gray-600 mb-6">
              Salvage brick from demolished buildings provides the best visual and physical match for replacement needs. Florida Construction Specialists maintains relationships with architectural salvage suppliers throughout the Southeast to source appropriate historic brick. When salvage material cannot be located, specialty manufacturers can produce custom brick that approximates historic characteristics, though at premium cost.
            </p>

            <p className="text-gray-600 mb-6">
              The Secretary of the Interior's Standards emphasize repair over replacement (Standard 6), so brick replacement should occur only when deterioration is too severe for repair. Partial brick repair using consolidants and compatible patching materials can often preserve original fabric that would otherwise require removal. These conservation treatments demonstrate the preference for minimal intervention that characterizes appropriate preservation practice.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Terra Cotta Conservation and Repair
            </h2>
            <p className="text-gray-600 mb-6">
              Many of Tampa's most significant historic buildings incorporate glazed architectural terra cotta—the ornate, fire-clay material that provides decorative detail on facades, cornices, and window surrounds. The Tampa Theatre's elaborate exterior and the decorative elements of Ybor City's club buildings feature terra cotta that requires specialized conservation approaches.
            </p>

            <p className="text-gray-600 mb-6">
              Terra cotta conservation begins with assessment of glaze condition, structural integrity, and attachment security. Failed glazes allow moisture penetration that causes rusting of internal reinforcement and spalling of the terra cotta body. Early intervention through consolidation and protective coatings can stabilize deterioration, while advanced damage may require unit replacement or reconstruction.
            </p>

            <p className="text-gray-600 mb-6">
              Replacement terra cotta requires custom fabrication that matches original size, profile, color, and glaze characteristics. Few manufacturers produce architectural terra cotta today, making replacement expensive and time-consuming. When possible, restoration professionals prefer conservation of existing units over replacement—an approach that preserves authentic historic fabric and often reduces project costs.
            </p>

            {/* Cost Table */}
            <div className="my-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Historic Masonry Restoration Cost Ranges</h3>
              <table className="min-w-full border border-gray-300">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">Restoration Service</th>
                    <th className="px-4 py-2 text-left">Unit</th>
                    <th className="px-4 py-2 text-left">Cost Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="bg-white">
                    <td className="px-4 py-2">Mortar Analysis (Laboratory)</td>
                    <td className="px-4 py-2">Per sample</td>
                    <td className="px-4 py-2">$400 - $800</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Lime Mortar Repointing</td>
                    <td className="px-4 py-2">Per SF</td>
                    <td className="px-4 py-2">$25 - $45</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Brick Replacement (Salvage)</td>
                    <td className="px-4 py-2">Per brick</td>
                    <td className="px-4 py-2">$35 - $75</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Terra Cotta Conservation</td>
                    <td className="px-4 py-2">Per SF</td>
                    <td className="px-4 py-2">$150 - $400</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Terra Cotta Replacement</td>
                    <td className="px-4 py-2">Per unit</td>
                    <td className="px-4 py-2">$2,000 - $10,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Stone Dutchman Repair</td>
                    <td className="px-4 py-2">Per repair</td>
                    <td className="px-4 py-2">$500 - $2,500</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Gentle Masonry Cleaning</td>
                    <td className="px-4 py-2">Per SF</td>
                    <td className="px-4 py-2">$3 - $12</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Appropriate Cleaning Methods for Historic Masonry
            </h2>
            <p className="text-gray-600 mb-6">
              Cleaning historic masonry requires gentle methods that remove soiling without damaging underlying materials. High-pressure washing, sandblasting, and aggressive chemical cleaners have destroyed countless historic buildings by eroding brick surfaces, opening mortar joints, and removing protective patina. The Secretary of the Interior's Standards specify using the gentlest means possible (Standard 7).
            </p>

            <p className="text-gray-600 mb-6">
              Appropriate cleaning methods for Tampa's historic masonry typically include low-pressure water washing with detergent, which removes light soiling without surface damage. Chemical cleaning using products formulated for historic masonry proves appropriate for moderate biological growth and atmospheric deposits. Poultice treatments draw out embedded stains without surface abrasion, and micro-abrasive cleaning with carefully controlled media addresses heavy deposits when necessary.
            </p>

            <p className="text-gray-600 mb-6">
              Test panels should always precede full-scale cleaning to verify that selected methods produce acceptable results without damage. Documentation of test results supports historic tax credit applications by demonstrating that cleaning work conforms to the Secretary of the Interior's Standards. Poorly executed cleaning can result in credit denial and costly remediation.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Structural Masonry Repair and Stabilization
            </h2>
            <p className="text-gray-600 mb-6">
              Beyond cosmetic restoration, historic masonry often requires structural repair to address settlement cracks, deteriorated lintels, and failing arches. These repairs must restore structural capacity while maintaining historical appearance—a challenge that requires engineering expertise combined with preservation sensitivity.
            </p>

            <p className="text-gray-600 mb-6">
              Crack stitching using stainless steel helical bars repairs movement cracks while allowing continued flexibility. Lintel replacement or reinforcement restores load-bearing capacity over window and door openings. Arch stabilization using concealed steel or polymer reinforcement preserves decorative masonry features while addressing structural deficiency.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists coordinates with structural engineers experienced in historic buildings to develop repair strategies that satisfy both engineering requirements and preservation standards. This interdisciplinary approach ensures that structural repairs maintain tax credit eligibility while providing long-term building stability.
            </p>

            {/* FAQ Section */}
            <div className="my-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800">Why can't I use regular Portland cement mortar for repointing?</h4>
                  <p className="text-gray-600">Portland cement mortars are significantly harder than historic lime mortars and most historic brick. This hardness differential forces thermal and moisture movement stresses into the brick rather than the mortar, causing brick spalling and deterioration. Additionally, cement mortars can trap moisture within walls, accelerating deterioration in Tampa's humid climate.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">How can I tell if previous repointing damaged my historic building?</h4>
                  <p className="text-gray-600">Signs of improper repointing include brick faces spalling off adjacent to mortar joints, mortar that appears much harder or different in color than remaining original mortar, mortar smeared across brick faces, and accelerated deterioration in repointed areas compared to original mortar areas. If you observe these conditions, professional assessment can determine appropriate remediation.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Is mortar analysis really necessary for a tax credit project?</h4>
                  <p className="text-gray-600">The National Park Service reviewers who approve historic tax credit applications expect mortar analysis for significant masonry restoration projects. Analysis documents the composition of original mortar and provides the basis for compatible replacement formulations. Skipping analysis risks credit denial if reviewers question whether replacement mortar is appropriate.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Can deteriorated brick be repaired rather than replaced?</h4>
                  <p className="text-gray-600">Yes, conservation treatments including consolidation with appropriate products and compatible patching materials can often repair deteriorated brick. These techniques preserve original fabric—a priority under the Secretary of the Interior's Standards. Replacement should occur only when deterioration is too severe for repair, and replacement brick should match original characteristics as closely as possible.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">How long does proper masonry restoration last?</h4>
                  <p className="text-gray-600">Quality masonry restoration using appropriate materials and techniques should provide 50-100 years of service life—comparable to original construction. The key is using compatible materials that work with the building rather than against it. Improper restoration using incompatible materials may fail within 10-20 years and cause additional damage.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Tampa's Historic Masonry Restoration Experts
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists brings comprehensive masonry restoration capabilities to Tampa's historic buildings. Our craftsmen understand the traditional techniques required for proper preservation work, and our project managers navigate the documentation requirements for SHPO approval and historic tax credit certification.
            </p>

            <p className="text-gray-600 mb-6">
              From the grand institutional buildings of downtown Tampa to the industrial heritage structures of Ybor City, our masonry restoration work preserves Tampa's architectural legacy while meeting the practical needs of modern building owners. Contact us today to discuss your historic masonry restoration project and learn how proper techniques can protect your building and maximize tax credit benefits.
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
            Contact Florida Construction Specialists today for expert historic masonry restoration services.
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
