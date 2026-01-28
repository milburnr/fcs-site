import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Architectural Styles in Tampa's Historic Restoration | Expert Preservation",
  description: "Expert guide to Tampa's historic architectural styles: Mediterranean Revival, Vernacular, Tampa Bungalow. Learn restoration techniques for Ybor City, Hyde Park & more.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Architectural Styles in Tampa's Historic Restoration", href: "/architectural-styles-in-tampas-historic-restoration/" },
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
            alt="Historic Tampa architecture restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Architectural Styles in Tampa&apos;s Historic Restoration
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Understanding Tampa&apos;s diverse architectural heritage—from Mediterranean Revival grandeur to Vernacular simplicity—is essential for authentic preservation and restoration.
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
                Tampa&apos;s built environment tells the story of a city shaped by Cuban and Spanish immigrants, the cigar industry, railroad expansion, and Florida&apos;s real estate booms. From the ornate social clubs of Ybor City to the gracious homes of Hyde Park, each historic structure reflects the architectural traditions and craftsmanship of its era. Successful historic restoration requires not only technical expertise but deep understanding of these distinctive architectural styles.
              </p>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists has restored buildings representing every major architectural style found in Tampa&apos;s historic districts. Our craftsmen understand the materials, techniques, and design principles that define each style—knowledge essential for restorations that satisfy both the Secretary of the Interior&apos;s Standards and Tampa&apos;s local preservation commissions.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Mediterranean Revival: Tampa&apos;s Signature Style
              </h2>
              <p className="text-gray-600 mb-6">
                Mediterranean Revival architecture dominates Tampa&apos;s most prestigious historic buildings, reflecting the Florida Land Boom of the 1920s and the region&apos;s Spanish colonial heritage. This romantic style draws inspiration from Spanish, Italian, and Moorish architecture, creating buildings perfectly suited to Florida&apos;s subtropical climate.
              </p>
              
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Character-Defining Features
              </h3>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li><strong>Stucco exterior walls:</strong> Typically smooth or textured plaster over masonry, often in white, cream, or earth tones</li>
                <li><strong>Red clay barrel tile roofs:</strong> The most recognizable element, providing both aesthetic appeal and practical benefits in Florida&apos;s climate</li>
                <li><strong>Arched openings:</strong> Rounded arches on windows, doorways, and loggias</li>
                <li><strong>Wrought iron details:</strong> Decorative balconies, window grilles, and hardware</li>
                <li><strong>Towers and varied rooflines:</strong> Asymmetrical massing with towers, turrets, and multi-level roofs</li>
                <li><strong>Courtyards and loggias:</strong> Outdoor living spaces integrated into the design</li>
                <li><strong>Decorative tile work:</strong> Cuban and Spanish tile accents around fountains, stairs, and entryways</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Tampa Landmarks in Mediterranean Revival
              </h3>
              <p className="text-gray-600 mb-6">
                The <strong>Tampa Theatre</strong> (1926) exemplifies Mediterranean Revival at its most theatrical—an atmospheric movie palace featuring ornate plasterwork, a starlit ceiling, and elaborate Spanish-Moorish detailing. The <strong>Centro Español</strong> in Ybor City showcases the style&apos;s adaptation for institutional use, while the <strong>Italian Club</strong> (1918) blends Renaissance and Mediterranean influences in its grand civic design. In Hyde Park, numerous commercial buildings and residences demonstrate the style&apos;s versatility across building types.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Restoration Considerations
              </h3>
              <p className="text-gray-600 mb-6">
                Restoring Mediterranean Revival buildings requires specialized expertise in historic stucco systems, clay tile roofing, and decorative plasterwork. Common challenges include deteriorated stucco due to moisture infiltration, broken or missing barrel tiles, corroded wrought iron elements, and damaged decorative features. Our <Link href="/services/historic-restoration/material-sourcing/" className="text-brand-green-dark hover:underline">historic material sourcing services</Link> help locate period-appropriate replacement materials when original elements cannot be salvaged.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Vernacular Architecture: Ybor City&apos;s Working Heritage
              </h2>
              <p className="text-gray-600 mb-6">
                Vernacular architecture—buildings constructed by local craftsmen using traditional methods and readily available materials—represents the everyday built environment of Tampa&apos;s working-class neighborhoods. In Ybor City, vernacular structures include the iconic casitas (worker&apos;s cottages), cigar factories, and commercial buildings that formed the backbone of the cigar industry community.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Character-Defining Features
              </h3>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li><strong>Wood frame construction:</strong> Heart pine framing, common in Florida before the mid-20th century</li>
                <li><strong>Horizontal wood siding:</strong> Clapboard or novelty siding, often with decorative millwork</li>
                <li><strong>Front porches:</strong> Essential for social interaction and climate adaptation</li>
                <li><strong>Simple gable or hip roofs:</strong> Practical roof forms with generous overhangs for shade</li>
                <li><strong>Raised foundations:</strong> Elevating buildings above grade for ventilation and flood protection</li>
                <li><strong>Operable shutters:</strong> Functional louvered shutters for storm protection and ventilation</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                The Ybor City Casita
              </h3>
              <p className="text-gray-600 mb-6">
                The casita—the modest worker&apos;s cottage that housed Ybor City&apos;s cigar workers—represents a distinctly Tampa building type. These small frame houses, typically 600-1,200 square feet, featured front porches oriented toward the street, allowing residents to engage with neighbors and catch evening breezes. The 19th Street Casitas, now restored as a museum property, provide excellent examples of this vernacular type.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Restoration Considerations
              </h3>
              <p className="text-gray-600 mb-6">
                Vernacular buildings often present challenges related to termite damage, foundation deterioration, and decades of deferred maintenance. Restoration frequently involves structural reinforcement, wood repair and replacement using species matching the original, and restoration of deteriorated millwork. Finding craftsmen skilled in traditional wood construction techniques is essential for authentic restoration.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Tampa Bungalow: The Craftsman Influence
              </h2>
              <p className="text-gray-600 mb-6">
                The Craftsman Bungalow, popularized in the early 20th century, found enthusiastic adoption in Tampa&apos;s developing neighborhoods. Tampa Heights, Seminole Heights, and other streetcar suburbs feature extensive collections of bungalows adapted to Florida&apos;s climate and local building traditions.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Character-Defining Features
              </h3>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li><strong>Low-pitched roofs:</strong> Gabled or hipped roofs with wide, unenclosed eaves</li>
                <li><strong>Exposed rafter tails:</strong> Decorative structural elements visible beneath the eaves</li>
                <li><strong>Tapered columns:</strong> Battered (tapered) columns supporting the porch roof, often on brick or stone piers</li>
                <li><strong>Mixed materials:</strong> Combinations of wood siding, brick, stucco, and stone</li>
                <li><strong>Built-in features:</strong> Inglenooks, window seats, and built-in cabinetry</li>
                <li><strong>Extensive porches:</strong> Deep front porches integral to the design</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Restoration Considerations
              </h3>
              <p className="text-gray-600 mb-6">
                Bungalow restoration often involves addressing deteriorated wood elements, failed roofing, and inappropriate alterations made over the decades. Many Tampa bungalows have been enclosed porches or added incompatible additions. Restoration may involve removing these alterations to reveal the original design or finding compatible solutions that satisfy both preservation standards and functional requirements.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Colonial Revival: Classical Elegance
              </h2>
              <p className="text-gray-600 mb-6">
                Colonial Revival architecture, inspired by early American building traditions, appeared in Tampa&apos;s affluent neighborhoods from the 1890s through the mid-20th century. Hyde Park and Palma Ceia contain notable examples of this formal, symmetrical style.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Character-Defining Features
              </h3>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li><strong>Symmetrical facades:</strong> Balanced arrangement of windows and doors around a central entrance</li>
                <li><strong>Classical details:</strong> Columns, pilasters, and pediments derived from Greek and Roman architecture</li>
                <li><strong>Multi-pane windows:</strong> Double-hung windows with six-over-six or similar muntin patterns</li>
                <li><strong>Formal entrances:</strong> Elaborate doorways with fanlights, sidelights, and classical surrounds</li>
                <li><strong>Side-gabled or hipped roofs:</strong> Simple roof forms with moderate pitch</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Industrial Architecture: The Cigar Factory Legacy
              </h2>
              <p className="text-gray-600 mb-6">
                Ybor City&apos;s cigar factories represent a distinctive industrial architectural type adapted to the specific requirements of cigar manufacturing. These multi-story brick buildings featured large windows for natural light and ventilation essential to the hand-rolling process.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Character-Defining Features
              </h3>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li><strong>Load-bearing masonry:</strong> Brick construction, often with decorative brickwork patterns</li>
                <li><strong>Large industrial windows:</strong> Maximizing natural light for the manufacturing floor</li>
                <li><strong>Heavy timber or early concrete framing:</strong> Structural systems allowing open floor plans</li>
                <li><strong>Minimal ornamentation:</strong> Functional design with selective decorative elements at entries and cornices</li>
                <li><strong>High ceilings:</strong> Providing ventilation and accommodating the lector&apos;s elevated platform</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Notable Examples
              </h3>
              <p className="text-gray-600 mb-6">
                The <strong>Sanchez y Haya Building</strong> (1910), Tampa&apos;s first reinforced concrete structure, represents the evolution of industrial construction in Ybor City. Ybor Square (the former Ybor City State Market building) demonstrates successful adaptive reuse of industrial architecture. The Barrio Latino Commission maintains strict oversight of these contributing structures within the National Historic Landmark District.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Restoration Costs by Architectural Style
              </h2>
              <p className="text-gray-600 mb-6">
                Different architectural styles present varying restoration challenges and costs. The following table provides typical cost ranges for style-specific restoration work in the Tampa area:
              </p>

              {/* Cost Table */}
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-brand-green-dark text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">Architectural Style</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Common Restoration Work</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Cost Range (per sq ft)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Mediterranean Revival</td>
                      <td className="border border-gray-300 px-4 py-3">Stucco repair, tile roof restoration, ornamental plaster</td>
                      <td className="border border-gray-300 px-4 py-3">$150 - $350</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Vernacular/Casita</td>
                      <td className="border border-gray-300 px-4 py-3">Wood repair, foundation work, porch restoration</td>
                      <td className="border border-gray-300 px-4 py-3">$100 - $225</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Tampa Bungalow</td>
                      <td className="border border-gray-300 px-4 py-3">Millwork restoration, column repair, roof work</td>
                      <td className="border border-gray-300 px-4 py-3">$125 - $275</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Colonial Revival</td>
                      <td className="border border-gray-300 px-4 py-3">Classical detail restoration, window restoration</td>
                      <td className="border border-gray-300 px-4 py-3">$135 - $300</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Industrial/Cigar Factory</td>
                      <td className="border border-gray-300 px-4 py-3">Masonry restoration, window replacement, structural repair</td>
                      <td className="border border-gray-300 px-4 py-3">$175 - $400</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-600 mb-6">
                These costs reflect exterior restoration and significant interior preservation work. Projects seeking <Link href="/services/historic-restoration/historic-tax-credits/" className="text-brand-green-dark hover:underline">federal historic tax credits</Link> may have additional documentation and compliance costs but can offset 20% of qualified rehabilitation expenditures.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Secretary of the Interior&apos;s Standards: Style-Specific Application
              </h2>
              <p className="text-gray-600 mb-6">
                The Secretary of the Interior&apos;s Standards for Rehabilitation provide ten principles guiding appropriate treatment of historic properties. Application of these standards requires understanding the character-defining features of each architectural style. Key principles include:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li><strong>Standard 2:</strong> The historic character of a property shall be retained and preserved. Removal of distinctive materials or alteration of features that characterize a property shall be avoided.</li>
                <li><strong>Standard 5:</strong> Distinctive materials, features, finishes, and construction techniques that characterize a property shall be preserved.</li>
                <li><strong>Standard 6:</strong> Deteriorated historic features shall be repaired rather than replaced. Where severity of deterioration requires replacement, the new feature shall match the old in design, color, texture, and materials.</li>
                <li><strong>Standard 9:</strong> New additions, exterior alterations, or related new construction shall not destroy historic materials and shall be differentiated from the old while being compatible with the historic property.</li>
              </ul>

              <p className="text-gray-600 mb-6">
                Our <Link href="/services/historic-restoration/shpo-compliance/" className="text-brand-green-dark hover:underline">SHPO compliance services</Link> ensure your project meets these standards, protecting your eligibility for federal tax credits and maintaining your property&apos;s historic integrity.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Tampa&apos;s Local Design Review Process
              </h2>
              <p className="text-gray-600 mb-6">
                Tampa&apos;s preservation commissions evaluate proposed work based on compatibility with the architectural character of the historic district and the specific building style. The review process considers:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Appropriateness of proposed materials and design for the architectural style</li>
                <li>Impact on character-defining features</li>
                <li>Compatibility of new elements with the existing historic fabric</li>
                <li>Visibility of proposed changes from public rights-of-way</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-brand-green pl-4">
                  <h3 className="font-bold text-brand-green-dark mb-2">How do I determine my building&apos;s architectural style?</h3>
                  <p className="text-gray-600">Start by examining character-defining features: roof form, materials, window types, decorative elements, and overall massing. Tampa&apos;s historic property surveys, available through the Florida Master Site File, often include style classifications. For locally designated properties, contact Tampa&apos;s Historic Preservation division. Florida Construction Specialists can provide architectural assessments as part of our pre-project consultation.</p>
                </div>
                
                <div className="border-l-4 border-brand-green pl-4">
                  <h3 className="font-bold text-brand-green-dark mb-2">Can I use modern materials that replicate historic appearances?</h3>
                  <p className="text-gray-600">It depends on visibility, significance, and the specific material. For federal tax credit projects, the Secretary of the Interior&apos;s Standards generally require in-kind replacement of historic materials on character-defining features. Local commissions may have more flexibility for non-contributing elements or areas not visible from public ways. Any substitute material must be carefully evaluated for compatibility and long-term performance.</p>
                </div>
                
                <div className="border-l-4 border-brand-green pl-4">
                  <h3 className="font-bold text-brand-green-dark mb-2">What if my building has been altered from its original style?</h3>
                  <p className="text-gray-600">Many historic buildings have accumulated changes over time. Some alterations may themselves be historically significant if they occurred during the building&apos;s period of significance. Others may be candidates for removal to restore the original design. A professional assessment can help determine which elements should be preserved, which can be removed, and how to integrate necessary contemporary systems without compromising historic character.</p>
                </div>
                
                <div className="border-l-4 border-brand-green pl-4">
                  <h3 className="font-bold text-brand-green-dark mb-2">How do I find craftsmen skilled in historic techniques?</h3>
                  <p className="text-gray-600">Florida Construction Specialists maintains relationships with skilled tradespeople experienced in historic plasterwork, masonry restoration, wood repair, and other specialized preservation trades. We also work with preservation architects and consultants who understand Tampa&apos;s architectural heritage. This network is essential for executing restoration work that meets both technical and aesthetic standards.</p>
                </div>
                
                <div className="border-l-4 border-brand-green pl-4">
                  <h3 className="font-bold text-brand-green-dark mb-2">Are there resources for learning more about Tampa&apos;s architectural history?</h3>
                  <p className="text-gray-600">Tampa Preservation, Inc. offers tours and educational programming. The Ybor City Museum State Park interprets the district&apos;s history, including architectural heritage. The Tampa-Hillsborough County Public Library maintains local history collections. The University of South Florida&apos;s Florida Studies Center provides academic resources on Florida architecture and preservation.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Expert Historic Restoration Services
              </h2>
              <p className="text-gray-600 mb-6">
                Understanding architectural style is fundamental to successful historic restoration. Whether your project involves a Mediterranean Revival landmark, a vernacular casita, or an industrial cigar factory, Florida Construction Specialists brings the expertise to preserve what matters while adapting your building for contemporary use.
              </p>
              
              <p className="text-gray-600 mb-6">
                <Link href="/contact/" className="text-brand-green-dark hover:underline font-semibold">Contact us today</Link> to discuss your historic restoration project. Our team will assess your building&apos;s architectural character, identify appropriate treatment approaches, and develop a scope of work that honors Tampa&apos;s rich architectural heritage.
              </p>

          </div>
        </div>
      </section>

      {/* CTA */}
      
      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Services"
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
            Contact Florida Construction Specialists for expert restoration of Tampa&apos;s historic architectural styles.
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
