import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa's Guidelines for Historic Landscape Restoration - Florida Construction Specialists",
  description: "Understanding Tampa's requirements for historic landscape restoration in preservation districts. Guidelines for site work at Ybor City, Hyde Park, and landmark properties.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa's Guidelines for Historic Landscape Restoration", href: "/tampas-guidelines-for-historic-landscape-restoration/" },
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
            alt="Historic landscape restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa's Guidelines for Historic Landscape Restoration
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Navigating landscape restoration requirements in Tampa's historic districts, including plantings, hardscape, site features, and compliance with local preservation guidelines.
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
              Historic landscapes—the designed and vernacular outdoor spaces surrounding historic buildings—contribute significantly to the character of Tampa's preservation districts. The brick-paved streets of Ybor City, the canopied residential avenues of Hyde Park, and the formal grounds of institutional buildings all represent cultural landscapes that require thoughtful restoration approaches aligned with preservation principles.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists understands that successful historic restoration extends beyond building walls to encompass the broader site context. Our comprehensive approach addresses landscape elements as integral components of preservation projects, ensuring that site work complements building restoration and meets applicable regulatory requirements.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Understanding Historic Cultural Landscapes
            </h2>
            <p className="text-gray-600 mb-6">
              The Secretary of the Interior recognizes four landscape treatment approaches paralleling those for buildings: Preservation (maintaining existing landscape features), Rehabilitation (making compatible alterations while preserving character), Restoration (returning to a specific historical period), and Reconstruction (recreating vanished landscapes based on documentation).
            </p>
            
            <p className="text-gray-600 mb-6">
              Most Tampa projects involve Rehabilitation, which allows adaptation for contemporary use while protecting character-defining features. Understanding which landscape elements define historic character—and which are later additions that may be appropriately modified—guides treatment decisions that satisfy both preservation standards and practical needs.
            </p>

            <p className="text-gray-600 mb-6">
              Character-defining landscape features in Tampa's historic districts typically include historic paving materials (brick streets, sidewalks, and driveways), mature trees and significant plantings, walls, fences, and gates, lighting fixtures and site furnishings, spatial organization and circulation patterns, and views and visual relationships between buildings and landscapes.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Ybor City Historic District Landscape Guidelines
            </h2>
            <p className="text-gray-600 mb-6">
              Ybor City's National Historic Landmark District maintains specific guidelines for landscape and site work administered by the Barrio Latino Commission. These guidelines protect the district's distinctive character—the brick streets, compact urban fabric, and industrial aesthetic that distinguish Tampa's cigar heritage district.
            </p>

            <p className="text-gray-600 mb-6">
              Brick paving represents Ybor City's most distinctive landscape feature. The historic brick streets and sidewalks must be protected during construction, and any disturbance requires restoration using salvage brick matching existing materials. New paving should employ compatible materials and patterns that maintain the district's historic character.
            </p>

            <p className="text-gray-600 mb-6">
              The district's urban character limits front setbacks and emphasizes building-to-street relationships. Landscape elements should not obstruct this relationship—foundation plantings and decorative landscaping common in suburban settings may be inappropriate for Ybor City's compact, urban context. The Barrio Latino Commission reviews landscape proposals as part of Certificate of Appropriateness applications.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Hyde Park Historic District Landscape Standards
            </h2>
            <p className="text-gray-600 mb-6">
              Hyde Park's residential historic district presents different landscape characteristics than Ybor City's commercial/industrial context. Tree-canopied streets, generous setbacks, and residential-scale plantings define the neighborhood's character. Landscape work must maintain these qualities while addressing contemporary needs.
            </p>

            <p className="text-gray-600 mb-6">
              Mature live oaks and other significant trees receive protection under Tampa's tree ordinances and historic district guidelines. Removal of significant trees requires demonstration of necessity and typically requires replacement planting. Site plans for rehabilitation projects should identify trees to be protected and demonstrate construction methods that avoid root damage.
            </p>

            <p className="text-gray-600 mb-6">
              Fencing, walls, and gates in Hyde Park should reflect period-appropriate styles. Chain link, vinyl, and contemporary materials are generally inappropriate. Wood picket fencing, ornamental iron, and masonry walls with designs reflecting the property's architectural period typically receive approval. Height limitations maintain the district's open, residential character.
            </p>

            {/* Guidelines Table */}
            <div className="my-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Historic Landscape Element Guidelines</h3>
              <table className="min-w-full border border-gray-300">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">Element</th>
                    <th className="px-4 py-2 text-left">Appropriate Treatments</th>
                    <th className="px-4 py-2 text-left">Avoid</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="bg-white">
                    <td className="px-4 py-2">Paving Materials</td>
                    <td className="px-4 py-2">Brick, stone, concrete matching historic character</td>
                    <td className="px-4 py-2">Asphalt in visible locations, stamped concrete</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Trees/Plantings</td>
                    <td className="px-4 py-2">Species appropriate to period, native species</td>
                    <td className="px-4 py-2">Palm species not historic to area, invasive plants</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Fencing</td>
                    <td className="px-4 py-2">Wood picket, ornamental iron, masonry</td>
                    <td className="px-4 py-2">Chain link, vinyl, contemporary styles</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Lighting</td>
                    <td className="px-4 py-2">Period-style fixtures, downward-directed light</td>
                    <td className="px-4 py-2">Overly bright fixtures, contemporary styles</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Site Furnishings</td>
                    <td className="px-4 py-2">Traditional materials, period-appropriate design</td>
                    <td className="px-4 py-2">Plastic, overtly contemporary designs</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Parking/Drives</td>
                    <td className="px-4 py-2">Screened, permeable surfaces, historic locations</td>
                    <td className="px-4 py-2">Large visible lots, front yard parking</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Tax Credit Considerations for Landscape Work
            </h2>
            <p className="text-gray-600 mb-6">
              Site work generally does not qualify as a qualified rehabilitation expenditure for historic tax credits—the credits apply to work on the historic building itself. However, landscape work can affect building tax credit eligibility if it damages the building's historic setting or relationship to its site.
            </p>

            <p className="text-gray-600 mb-6">
              The Secretary of the Interior's Standards require that "new additions, exterior alterations, or related new construction shall not destroy historic materials, features, and spatial relationships that characterize the property." Site work that alters historic spatial relationships—removing significant trees, changing grade, or disrupting historic circulation patterns—may compromise tax credit eligibility.
            </p>

            <p className="text-gray-600 mb-6">
              Documentation of existing site conditions and proposed changes should be included in Part 2 tax credit applications when landscape work accompanies building rehabilitation. Demonstrating that site work maintains or enhances historic character supports successful credit certification.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Stormwater Management in Historic Landscapes
            </h2>
            <p className="text-gray-600 mb-6">
              Modern stormwater management requirements present challenges for historic landscape restoration. Contemporary regulations may require detention facilities, permeable surfaces, or other features that didn't exist historically. Reconciling these requirements with preservation goals requires creative solutions.
            </p>

            <p className="text-gray-600 mb-6">
              Green infrastructure approaches—rain gardens, bioswales, permeable pavers—can address stormwater requirements while maintaining or enhancing historic landscape character. These nature-based solutions often integrate more sensitively with historic landscapes than conventional detention ponds or concrete structures.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists works with civil engineers and landscape architects experienced in reconciling stormwater requirements with historic preservation. Our integrated approach identifies solutions that satisfy multiple objectives without compromising either regulatory compliance or historic character.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Accessibility in Historic Landscapes
            </h2>
            <p className="text-gray-600 mb-6">
              ADA accessibility requirements apply to site approaches and circulation paths serving historic buildings. Creating accessible routes through historic landscapes requires balancing accessibility mandates with preservation of character-defining features.
            </p>

            <p className="text-gray-600 mb-6">
              The Secretary of the Interior's guidance on accessibility recognizes that not all historic features can be modified without unacceptable character loss. When standard accessible routes would damage significant landscape features, alternative solutions may be appropriate—including routes through secondary entrances or programmatic accommodations.
            </p>

            <p className="text-gray-600 mb-6">
              Early coordination with preservation and accessibility consultants identifies approaches that satisfy both requirements. Florida Construction Specialists helps clients develop integrated solutions that provide meaningful access while protecting historic landscape character.
            </p>

            {/* FAQ Section */}
            <div className="my-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800">Do I need approval for landscape work in Tampa's historic districts?</h4>
                  <p className="text-gray-600">Most visible exterior work in Tampa's historic districts requires Certificate of Appropriateness approval. This includes changes to paving, significant plantings, fencing, and site features. Minor maintenance typically doesn't require approval, but consultation with the local preservation office clarifies requirements for specific projects.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Can I add parking to a historic property?</h4>
                  <p className="text-gray-600">Parking additions are often possible but must be sensitively designed. Guidelines typically require parking in locations least visible from public ways, screened with appropriate landscaping or fencing, and paved with materials compatible with historic character. Large parking areas in historically residential or pedestrian-oriented areas face more restrictive review.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">What plants are appropriate for historic landscapes in Tampa?</h4>
                  <p className="text-gray-600">Appropriate plants depend on property period and style. Generally, species documented in Tampa during the property's period of significance are preferred. Florida native plants often work well and support sustainability goals. Avoid species that didn't exist in Tampa historically (many palm varieties, for example) and invasive species. Landscape historians can help identify period-appropriate plantings.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">How do I protect trees during construction?</h4>
                  <p className="text-gray-600">Tree protection begins with establishing fenced protection zones at the drip line or beyond, prohibiting equipment operation, material storage, and grade changes within these zones. Root pruning, if necessary, should be performed by certified arborists. Construction planning should route utilities and access around significant trees. Tampa's tree ordinance and historic district guidelines establish minimum protection requirements.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Can I replace historic brick paving with new materials?</h4>
                  <p className="text-gray-600">Generally, historic brick paving should be preserved or restored with matching materials. Replacement with new materials is typically appropriate only where original paving no longer exists or is damaged beyond repair. New brick or compatible materials should match historic dimensions, colors, and laying patterns. Concrete or asphalt replacement of historic brick would typically not receive approval in Tampa's historic districts.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Comprehensive Landscape Restoration from Florida Construction Specialists
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists provides integrated restoration services that address both buildings and their landscape settings. Our understanding of Tampa's historic district guidelines, preservation standards, and practical site requirements enables development of landscape approaches that enhance historic character while meeting contemporary needs.
            </p>

            <p className="text-gray-600 mb-6">
              From Ybor City's urban hardscapes to Hyde Park's residential grounds, our team has experience with the diverse landscape types found in Tampa's historic districts. Contact us today to discuss landscape considerations for your historic restoration project—we'll help you develop approaches that satisfy both preservation goals and practical requirements.
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
            Contact Florida Construction Specialists today for comprehensive historic landscape restoration services.
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
