import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Color Palettes for Historic Buildings in Tampa - Florida Construction Specialists",
  description: "Expert guidance on selecting period-appropriate color palettes for Tampa's historic buildings. Paint analysis, historic color research, and compliance with preservation standards.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Color Palettes for Historic Buildings in Tampa", href: "/color-palettes-for-historic-buildings-in-tampa/" },
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
            alt="Historic building color palettes"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Color Palettes for Historic Buildings in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Selecting historically accurate and aesthetically appropriate colors for Tampa's landmark buildings—from Victorian polychromy to Mediterranean Revival earth tones.
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
              Color profoundly affects how we perceive historic buildings. A carefully chosen palette enhances architectural details, expresses building character, and contributes to neighborhood harmony. Conversely, inappropriate colors can diminish even the finest architecture, compromise historic district character, and potentially disqualify projects from tax credit eligibility. Understanding period-appropriate color selection for Tampa's diverse historic building stock enables informed decisions that enhance preservation outcomes.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists provides color consultation as part of comprehensive historic restoration services. Our approach combines paint analysis of existing finishes, research into period color conventions, and coordination with historic district guidelines to develop palettes that are both historically appropriate and aesthetically successful.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Paint Analysis: Discovering Original Colors
            </h2>
            <p className="text-gray-600 mb-6">
              Scientific paint analysis provides the most reliable method for determining original building colors. Microscopic examination of paint cross-sections reveals the sequence of paint layers applied over a building's lifetime, enabling identification of original finishes beneath accumulated later coatings.
            </p>
            
            <p className="text-gray-600 mb-6">
              Paint samples should be taken from protected areas where original finishes are most likely to survive—under porch roofs, in recessed panels, behind shutters, or under hardware. Multiple samples from different building elements establish the complete original color scheme, identifying how body, trim, sash, and accent colors related to each other.
            </p>

            <p className="text-gray-600 mb-6">
              For tax credit projects, paint analysis provides documentation supporting color selections in Part 2 applications. National Park Service reviewers expect color decisions to be based on evidence rather than assumptions. Analysis costs ($300-$600 per sample) represent modest investment compared to the documentation value provided.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Color Conventions by Architectural Style
            </h2>
            <p className="text-gray-600 mb-6">
              Different architectural periods employed distinct color approaches that should guide palette selection for buildings of each era. Understanding these conventions helps identify appropriate options even when original colors cannot be determined through analysis.
            </p>

            <p className="text-gray-600 mb-6">
              Victorian-era buildings (1870s-1900) often featured elaborate polychromatic schemes with multiple contrasting colors highlighting different architectural elements. Rich, saturated colors—deep reds, greens, browns, and creams—were common. Decorative trim might receive accent colors that differ from both body and primary trim, creating complex visual compositions that emphasized ornamental details.
            </p>

            <p className="text-gray-600 mb-6">
              Colonial Revival buildings (1890s-1940s) typically employed more restrained palettes reflecting their classical inspiration. White, cream, and pale gray bodies with white or contrasting dark trim characterized the style. Shutters in dark green, black, or dark blue provided accent. The overall effect emphasized dignity and formality rather than exuberance.
            </p>

            <p className="text-gray-600 mb-6">
              Mediterranean Revival buildings (1920s-1940s), common throughout Tampa, drew on Spanish Colonial precedents with warm earth tones—terra cotta, sand, cream, and coral—that complemented clay tile roofs. Decorative elements might receive deeper versions of body colors or contrasting accents in turquoise, deep blue, or warm brown.
            </p>

            {/* Color Palettes by Style Table */}
            <div className="my-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Typical Color Approaches by Architectural Style</h3>
              <table className="min-w-full border border-gray-300">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">Style</th>
                    <th className="px-4 py-2 text-left">Body Colors</th>
                    <th className="px-4 py-2 text-left">Trim Colors</th>
                    <th className="px-4 py-2 text-left">Accents</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="bg-white">
                    <td className="px-4 py-2">Victorian</td>
                    <td className="px-4 py-2">Rich earth tones, saturated colors</td>
                    <td className="px-4 py-2">Contrasting, multiple colors</td>
                    <td className="px-4 py-2">Bright accents on details</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Colonial Revival</td>
                    <td className="px-4 py-2">White, cream, pale gray</td>
                    <td className="px-4 py-2">White or dark contrast</td>
                    <td className="px-4 py-2">Dark shutters (green, black)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Mediterranean Revival</td>
                    <td className="px-4 py-2">Terra cotta, sand, cream, coral</td>
                    <td className="px-4 py-2">Deeper or lighter body tones</td>
                    <td className="px-4 py-2">Turquoise, deep blue, warm brown</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Craftsman</td>
                    <td className="px-4 py-2">Warm browns, greens, russet</td>
                    <td className="px-4 py-2">Lighter or darker body tones</td>
                    <td className="px-4 py-2">Natural wood stains, earthy accents</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Commercial/Industrial</td>
                    <td className="px-4 py-2">Natural brick, painted neutral</td>
                    <td className="px-4 py-2">Compatible with body</td>
                    <td className="px-4 py-2">Minimal; emphasis on signage</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Historic District Color Guidelines
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's historic districts maintain guidelines that govern exterior colors for buildings within their boundaries. Color changes in locally-designated historic districts typically require Certificate of Appropriateness approval, with review boards evaluating whether proposed colors are appropriate for the building's style and compatible with neighborhood character.
            </p>

            <p className="text-gray-600 mb-6">
              Ybor City's Barrio Latino Commission reviews color proposals for buildings within the National Historic Landmark District. The district's distinctive character—with its brick industrial buildings and colorful commercial facades—informs color decisions that maintain authentic neighborhood appearance while allowing individual building expression.
            </p>

            <p className="text-gray-600 mb-6">
              Hyde Park and other residential historic districts emphasize neighborhood harmony alongside individual building authenticity. Colors that might be appropriate for an isolated building could be problematic if they clash with neighboring properties. Review considers both building-specific appropriateness and contextual compatibility.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Commercial Building Color Considerations
            </h2>
            <p className="text-gray-600 mb-6">
              Historic commercial buildings present distinct color challenges. Storefronts must serve business identification purposes while maintaining historic character. Upper facades may have different treatment than street-level commercial spaces. Brick buildings—common in Ybor City and downtown Tampa—raise questions about whether painting unpainted brick is appropriate.
            </p>

            <p className="text-gray-600 mb-6">
              Generally, painting previously unpainted historic masonry is discouraged under the Secretary of the Interior's Standards. Brick that has never been painted should usually remain unpainted. However, brick that was painted historically may be appropriately repainted with compatible colors. Paint analysis can determine whether masonry was originally painted.
            </p>

            <p className="text-gray-600 mb-6">
              Commercial signage colors interact with building colors and should be considered together. Sign colors that complement building palette contribute to overall appearance, while clashing sign colors can undermine otherwise appropriate building treatment. Historic district sign guidelines often address color along with size and materials.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Tax Credit Implications of Color Selection
            </h2>
            <p className="text-gray-600 mb-6">
              The Secretary of the Interior's Standards require that "the historic character of a property shall be retained and preserved." Inappropriate color selection can compromise this standard, potentially affecting tax credit certification. While color alone rarely causes credit denial, it contributes to overall assessment of whether rehabilitation preserves historic character.
            </p>

            <p className="text-gray-600 mb-6">
              Part 2 applications should describe proposed colors and explain how they are appropriate for the building. References to paint analysis, historic documentation, or style-appropriate conventions strengthen applications. Proposing colors dramatically different from documented originals or period norms requires justification that may face skeptical review.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists develops color specifications for tax credit projects that satisfy NPS expectations while achieving owners' aesthetic objectives. Our experience with successful tax credit applications informs color recommendations that protect credit eligibility.
            </p>

            {/* FAQ Section */}
            <div className="my-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800">Do I have to use the exact original colors?</h4>
                  <p className="text-gray-600">Not necessarily. While original colors represent one appropriate option, period-appropriate alternatives may also be acceptable. The Secretary of Interior's Standards require colors compatible with historic character, not exact replication. For tax credit projects, documented justification for color choices—whether based on analysis or period conventions—supports approval.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Can I paint a brick building?</h4>
                  <p className="text-gray-600">If the brick was historically painted, repainting with appropriate colors is generally acceptable. If brick has never been painted, painting it typically conflicts with the Secretary of Interior's Standards and would face opposition in historic district review. Paint analysis can determine whether masonry was originally painted.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">How do I choose colors if I can't determine originals?</h4>
                  <p className="text-gray-600">When analysis doesn't reveal original colors, research into period color conventions for your building's style and era provides guidance. Published historic color collections from paint manufacturers offer period-appropriate options. Local historic district staff may have recommendations based on similar buildings. Multiple appropriate options typically exist.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">What paint types are appropriate for historic buildings?</h4>
                  <p className="text-gray-600">Modern latex paints work well on most historic surfaces and offer improved durability compared to historic formulations. For previously oil-painted surfaces, proper preparation and priming enable latex application. Some decorative finishes may require specialized formulations. The key is proper surface preparation and application technique, not specific paint chemistry.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">How many colors should a historic building have?</h4>
                  <p className="text-gray-600">The number depends on architectural style. Victorian buildings often used three or more colors highlighting different elements. Colonial Revival typically used two colors (body and trim) plus shutters. Mediterranean Revival might use one or two main colors with subtle accents. Research your building's style to understand appropriate complexity.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Expert Color Guidance from Florida Construction Specialists
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists provides comprehensive color consultation for historic restoration projects throughout Tampa Bay. Our approach combines analytical methods, historical research, and aesthetic judgment to develop palettes that enhance building character while satisfying preservation requirements.
            </p>

            <p className="text-gray-600 mb-6">
              Contact us today to discuss color selection for your historic building. We'll help you navigate the options, satisfy regulatory requirements, and achieve a result that honors your building's heritage while meeting your aesthetic objectives.
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
            Contact Florida Construction Specialists today for expert color consultation for your historic building.
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
