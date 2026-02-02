import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa's Guidelines for Historic Roofs Restoration",
  description: "Expert guidance on historic roof restoration in Tampa. Preserving clay tile, slate, and metal roofing while meeting hurricane requirements and tax credit standards.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa's Guidelines for Historic Roofs Restoration", href: "/tampas-guidelines-for-historic-roofs-restoration/" },
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
            alt="Historic roof restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa's Guidelines for Historic Roofs Restoration
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Preserving Tampa's distinctive historic rooflines through appropriate restoration of clay tile, slate, metal, and other period roofing materials while meeting Florida's demanding climate requirements.
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
              Historic roofs define Tampa's skyline and contribute significantly to the character of individual buildings and entire neighborhoods. The distinctive clay tile roofs of Mediterranean Revival structures, the standing seam metal of industrial buildings, and the varied rooflines of Victorian homes all require specialized restoration approaches that preserve character while addressing Florida's demanding requirements for hurricane resistance and thermal performance.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists brings comprehensive expertise to historic roof restoration, balancing preservation standards with practical performance requirements. Our work on landmark buildings throughout Tampa Bay demonstrates the ability to maintain historic character while delivering roofs that protect buildings against Florida's challenging climate.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Clay Tile Roofing: Tampa's Signature Material
            </h2>
            <p className="text-gray-600 mb-6">
              Clay tile roofing defines Mediterranean Revival architecture throughout Tampa, from Hyde Park's elegant residences to downtown's civic buildings. The warm colors, textured surfaces, and distinctive profiles of clay tile contribute irreplaceable character that modern substitutes cannot replicate.
            </p>
            
            <p className="text-gray-600 mb-6">
              Clay tile restoration begins with assessment of existing tile condition, underlayment integrity, and structural capacity. Tiles themselves often remain serviceable for decades beyond initial installation—the clay is essentially permanent. Failure typically occurs in fastening systems, underlayment, or flashing rather than the tiles themselves.
            </p>

            <p className="text-gray-600 mb-6">
              When tile replacement is necessary, matching the color, profile, and texture of original tiles requires careful sourcing. Contemporary manufacturers produce tiles in profiles matching most historic patterns, but color matching may require blending tiles from multiple sources or accepting slight variations. Salvage tiles from demolished buildings provide the best match but may be available only in limited quantities.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Metal Roofing Systems
            </h2>
            <p className="text-gray-600 mb-6">
              Historic metal roofing in Tampa includes standing seam systems on industrial and commercial buildings, decorative pressed metal on Victorian structures, and various specialty applications. Metal roofs, when properly maintained, provide exceptional longevity—some standing seam roofs have served for over a century.
            </p>

            <p className="text-gray-600 mb-6">
              Metal roof restoration typically involves cleaning, rust treatment, seam repair, and protective coating. Original terne-coated steel (lead-tin alloy on steel) requires careful handling due to lead content and may be appropriately replaced with compatible modern materials when deterioration is advanced.
            </p>

            <p className="text-gray-600 mb-6">
              The distinctive industrial character of Ybor City's cigar factories often features standing seam metal roofs that contribute to district character. Maintaining the visual continuity of these rooflines—while addressing inevitable deterioration—requires sourcing metal panels with appropriate rib profiles and applying finishes that approximate historic appearance.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Slate and Wood Shingle Systems
            </h2>
            <p className="text-gray-600 mb-6">
              While less common in Tampa than in northern states, slate and wood shingle roofs appear on some of the city's finest historic residences. These materials require specialized knowledge for proper restoration—techniques that general roofing contractors may not possess.
            </p>

            <p className="text-gray-600 mb-6">
              Slate restoration involves replacement of damaged slates with matching material, repair of flashing, and attention to the specialized fastening methods that slate requires. The random width patterns, varied colors, and specific profiles of historic slate installations must be understood and replicated for authentic restoration.
            </p>

            <p className="text-gray-600 mb-6">
              Wood shingle and shake roofs present fire resistance concerns that have led many jurisdictions to restrict or prohibit them. When historic significance justifies retention, fire-retardant treatments and enhanced underlayment systems may address code concerns while preserving historic appearance.
            </p>

            {/* Roofing Materials Table */}
            <div className="my-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Historic Roofing Materials and Restoration Approaches</h3>
              <table className="min-w-full border border-gray-300">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">Material</th>
                    <th className="px-4 py-2 text-left">Common Issues</th>
                    <th className="px-4 py-2 text-left">Restoration Approach</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="bg-white">
                    <td className="px-4 py-2">Clay Tile</td>
                    <td className="px-4 py-2">Underlayment failure, broken tiles, loose fastening</td>
                    <td className="px-4 py-2">Replace underlayment, reset tiles, match replacements</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Standing Seam Metal</td>
                    <td className="px-4 py-2">Corrosion, open seams, coating failure</td>
                    <td className="px-4 py-2">Rust treatment, seam repair, protective coating</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Slate</td>
                    <td className="px-4 py-2">Broken slates, fastener corrosion, flashing failure</td>
                    <td className="px-4 py-2">Replace damaged slates, reflash, check fasteners</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Wood Shingle</td>
                    <td className="px-4 py-2">Weathering, moss, fire concerns</td>
                    <td className="px-4 py-2">Replace damaged shingles, fire treatment, preserve</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Built-up/Modified</td>
                    <td className="px-4 py-2">Membrane failure, ponding, edge detail</td>
                    <td className="px-4 py-2">Complete replacement typically required</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Hurricane Resistance for Historic Roofs
            </h2>
            <p className="text-gray-600 mb-6">
              Florida's building code imposes stringent wind resistance requirements that historic roofs may not meet without modification. Clay tiles that survived decades of storms may lack the enhanced fastening systems now required by code. Balancing historic character with code compliance requires creative solutions.
            </p>

            <p className="text-gray-600 mb-6">
              Tile attachment systems have evolved significantly since historic installation methods. Modern foam-adhesive systems and mechanical fasteners provide wind resistance far exceeding traditional mortar setting. These enhanced attachment methods can be employed during restoration without changing tile appearance—the improvement is invisible once tiles are installed.
            </p>

            <p className="text-gray-600 mb-6">
              Roof structure strengthening may accompany roof restoration when existing framing doesn't meet current wind load requirements. Concealed connections—hurricane clips, structural screws, and tie systems—can improve roof-to-wall connections without visible alteration. The Secretary of the Interior's Standards support such improvements when they don't compromise historic character.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Roof Restoration and Tax Credit Compliance
            </h2>
            <p className="text-gray-600 mb-6">
              Roofing work on tax credit projects must comply with the Secretary of the Interior's Standards to qualify as rehabilitated expenditure. Standard 6 emphasizes repair over replacement; Standard 9 requires that new work be compatible with historic character. These standards guide appropriate roof restoration approaches.
            </p>

            <p className="text-gray-600 mb-6">
              Roof replacement with different materials rarely receives tax credit approval unless the proposed material matches a documented earlier appearance. Replacing clay tile with asphalt shingles, for example, would typically fail Standards review. However, replacing a non-historic roof (one installed after the period of significance) with appropriate period materials may strengthen rather than weaken tax credit applications.
            </p>

            <p className="text-gray-600 mb-6">
              Documentation for tax credit roof work includes photographs of existing conditions, specifications for restoration methods and materials, evidence supporting material selections (matching analysis, historic photographs), and completion photographs demonstrating conformance with approved plans.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Associated Roof Elements
            </h2>
            <p className="text-gray-600 mb-6">
              Historic roof character extends beyond primary roofing materials to include gutters and downspouts, dormers and skylights, chimneys and ventilators, decorative elements and finials, and roof edge details and cornices. Restoration must address these elements as part of comprehensive roof treatment.
            </p>

            <p className="text-gray-600 mb-6">
              Historic gutter systems—often half-round copper or galvanized steel—should be preserved when possible or replaced with matching materials and profiles. Modern gutter systems with inappropriate profiles or materials detract from historic character even when the primary roof remains authentic.
            </p>

            <p className="text-gray-600 mb-6">
              Chimneys require assessment for structural stability, proper flashing, and masonry condition. Even chimneys serving abandoned flues contribute to roof profile and should be preserved. Chimney repair follows masonry restoration principles appropriate to the specific materials involved.
            </p>

            {/* FAQ Section */}
            <div className="my-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800">Can I replace a clay tile roof with modern materials?</h4>
                  <p className="text-gray-600">In Tampa's historic districts, replacement of clay tile with other materials would typically not receive COA approval. For tax credit projects, such replacement would likely fail Standards review. Clay tile remains the appropriate material for buildings that historically had tile roofs. Modern tile production makes matching possible for most historic profiles.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">How do I find matching clay tiles for my historic roof?</h4>
                  <p className="text-gray-600">Current manufacturers produce tiles in profiles matching most historic patterns. Color matching may require samples for comparison. Salvage tiles from demolished buildings provide the best match but have limited availability. Florida Construction Specialists can source tiles from multiple suppliers to achieve the best possible match for your specific roof.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Can historic roofs meet Florida's hurricane requirements?</h4>
                  <p className="text-gray-600">Yes, with appropriate enhancement. Modern fastening systems, foam adhesives, and structural reinforcement can bring historic roofs to code-compliant wind resistance without altering visible appearance. These improvements are installed during restoration and are invisible in the completed roof.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">How often do historic roofs need replacement?</h4>
                  <p className="text-gray-600">Longevity varies by material and maintenance history. Clay tile and slate can last 75-100+ years when properly maintained. Metal roofs may last 50-100 years with periodic coating renewal. Most failures occur in underlayment and flashing before the primary roofing material fails. Regular inspection and maintenance dramatically extends roof life.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Does roof restoration qualify for historic tax credits?</h4>
                  <p className="text-gray-600">Yes, roof restoration qualifies as a rehabilitation expenditure when work meets the Secretary of Interior's Standards. This includes repair and replacement of historic roofing materials, structural reinforcement, and associated elements like gutters and flashing. Documentation must demonstrate that work preserves or restores historic character.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Expert Historic Roof Restoration from Florida Construction Specialists
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists brings specialized expertise to historic roof restoration throughout Tampa Bay. Our experience with clay tile, metal, slate, and other historic roofing systems enables appropriate restoration that preserves character while delivering reliable weather protection.
            </p>

            <p className="text-gray-600 mb-6">
              Contact us today to discuss roof restoration for your historic building. We'll assess existing conditions, identify appropriate materials and methods, and develop a restoration approach that meets both preservation standards and practical performance requirements.
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
            Contact Florida Construction Specialists today for expert historic roof restoration services.
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
