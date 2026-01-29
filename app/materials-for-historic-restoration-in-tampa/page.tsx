import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Materials for Historic Restoration in Tampa - Florida Construction Specialists",
  description: "Sourcing authentic materials for Tampa historic restoration projects. Period-appropriate brick, lime mortar, wood, hardware, and decorative elements for landmark buildings.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Materials for Historic Restoration in Tampa", href: "/materials-for-historic-restoration-in-tampa/" },
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
            alt="Historic restoration materials"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Materials for Historic Restoration in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Sourcing and selecting period-appropriate materials essential for authentic restoration of Tampa's landmark buildings, from salvage brick to custom-formulated lime mortars.
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
              Authentic materials form the foundation of successful historic restoration. The Secretary of the Interior's Standards emphasize repair over replacement and require that replacement materials match originals in composition, design, color, texture, and other visual qualities. For Tampa's historic buildings—from Ybor City's brick cigar factories to Hyde Park's wood-frame residences—sourcing appropriate materials requires specialized knowledge and established supply relationships.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists has developed material sourcing capabilities that support authentic restoration throughout Tampa Bay. Our relationships with salvage suppliers, specialty manufacturers, and traditional craftspeople ensure access to the period-appropriate materials that proper preservation demands.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Historic Brick and Masonry Materials
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's historic brick buildings present particular sourcing challenges because local brick manufacturing ceased decades ago. The distinctive yellow and orange brick that characterizes Ybor City's cigar factories came from Tampa-area kilns using local clay—material that cannot be replicated by modern manufacturers using different clay sources and firing methods.
            </p>
            
            <p className="text-gray-600 mb-6">
              Salvage brick from demolished buildings provides the best match for Tampa's historic masonry. Florida Construction Specialists maintains relationships with architectural salvage dealers throughout the Southeast who stock brick from various eras and regions. When Tampa-area salvage is unavailable, careful selection from broader salvage inventories can identify brick with compatible color, size, and texture characteristics.
            </p>

            <p className="text-gray-600 mb-6">
              When salvage cannot meet quantity requirements, specialty brick manufacturers can produce custom brick approximating historic characteristics. These custom runs require minimum orders and extended lead times but provide consistent supply for large projects. The Italian Club restoration, for example, combined salvage brick for visible repairs with compatible new brick for concealed structural work.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Lime Mortars and Compatible Pointing Materials
            </h2>
            <p className="text-gray-600 mb-6">
              Historic mortar—the material binding masonry units—differs fundamentally from modern Portland cement mortars. Buildings constructed before the 1920s typically used lime-based mortars that remain softer than the brick or stone they join. This compatibility prevents stress damage that occurs when harder modern mortars are used on historic masonry.
            </p>

            <p className="text-gray-600 mb-6">
              Formulating appropriate replacement mortar requires analysis of original material to determine binder type, aggregate characteristics, and proportions. Natural hydraulic lime (NHL) mortars, lime-pite mortars, or carefully proportioned lime-cement mortars may be appropriate depending on original composition and exposure conditions. Tampa's humid climate influences mortar selection—formulations must cure properly despite high ambient moisture.
            </p>

            <p className="text-gray-600 mb-6">
              Specialty suppliers provide lime mortars in pre-mixed formulations or component materials for site mixing. Color matching requires attention to both binder and aggregate, as sand color significantly influences final mortar appearance. Florida Construction Specialists specifies tested mortar formulations that match original characteristics while performing appropriately in Tampa's climate.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Historic Wood and Millwork
            </h2>
            <p className="text-gray-600 mb-6">
              Historic wood elements were typically manufactured from old-growth lumber with tight grain structure that resists decay far better than modern plantation-grown timber. Windows, doors, trim, flooring, and structural members in Tampa's historic buildings often survive a century or more—demonstrating the quality that proper restoration seeks to match.
            </p>

            <p className="text-gray-600 mb-6">
              Salvage lumber provides the best match for replacement wood elements. Heart pine, the predominant species in Tampa's historic buildings, is available from salvage dealers who reclaim material from demolished buildings throughout the South. This reclaimed lumber offers the density and character that new lumber cannot match.
            </p>

            <p className="text-gray-600 mb-6">
              Custom millwork replicates historic profiles that standard lumber yards cannot supply. Base moldings, window casings, door trim, and decorative elements in Tampa's historic buildings feature profiles specific to their architectural periods. Millwork shops with knives that can grind custom profiles produce matching trim—essential for maintaining historical accuracy in visible locations.
            </p>

            {/* Materials Table */}
            <div className="my-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Historic Material Sourcing Guide</h3>
              <table className="min-w-full border border-gray-300">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">Material Category</th>
                    <th className="px-4 py-2 text-left">Primary Sources</th>
                    <th className="px-4 py-2 text-left">Lead Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="bg-white">
                    <td className="px-4 py-2">Salvage Brick</td>
                    <td className="px-4 py-2">Architectural salvage dealers, demolition sites</td>
                    <td className="px-4 py-2">2-8 weeks</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Custom Brick</td>
                    <td className="px-4 py-2">Specialty brick manufacturers</td>
                    <td className="px-4 py-2">12-20 weeks</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Lime Mortar</td>
                    <td className="px-4 py-2">Specialty masonry suppliers</td>
                    <td className="px-4 py-2">2-4 weeks</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Reclaimed Heart Pine</td>
                    <td className="px-4 py-2">Salvage lumber dealers</td>
                    <td className="px-4 py-2">2-6 weeks</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Custom Millwork</td>
                    <td className="px-4 py-2">Specialty millwork shops</td>
                    <td className="px-4 py-2">4-8 weeks</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Historic Hardware</td>
                    <td className="px-4 py-2">Reproduction manufacturers, salvage</td>
                    <td className="px-4 py-2">2-12 weeks</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Terra Cotta</td>
                    <td className="px-4 py-2">Specialty manufacturers (limited)</td>
                    <td className="px-4 py-2">16-24 weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Hardware and Metal Components
            </h2>
            <p className="text-gray-600 mb-6">
              Historic hardware—door knobs, hinges, window locks, shutter hardware—contributes significantly to building character. Original hardware should be retained and restored whenever possible. When replacement becomes necessary, reproduction hardware from specialty manufacturers matches historic patterns in materials and finish.
            </p>

            <p className="text-gray-600 mb-6">
              Structural and decorative metalwork in Tampa's historic buildings ranges from cast iron storefronts to wrought iron railings and bronze plaques. Conservation of existing metalwork through cleaning, rust treatment, and protective coatings preserves original fabric. When replacement or replication is necessary, foundries specializing in architectural metalwork can cast new elements matching historic patterns.
            </p>

            <p className="text-gray-600 mb-6">
              Window and door hardware presents particular challenges in hurricane-prone Tampa. Modern impact-resistant glazing systems may require updated hardware that provides code-compliant latching while maintaining historic appearance. Specialty manufacturers produce hardware that meets both preservation standards and building code requirements.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Roofing and Exterior Materials
            </h2>
            <p className="text-gray-600 mb-6">
              Historic roofing materials in Tampa include clay tile, slate, standing-seam metal, and various forms of wood and composition shingles. Each material requires period-appropriate replacement when deterioration exceeds repair capability. Fortunately, most historic roofing materials remain available from specialty suppliers.
            </p>

            <p className="text-gray-600 mb-6">
              Clay tile—common on Mediterranean Revival buildings throughout Tampa—comes from domestic and imported sources in profiles matching historic patterns. Mission barrel tile, flat tile, and various decorative shapes remain in production. When salvage tile is available, it provides the best match for partial replacement; new tile blends acceptably for complete roof replacement.
            </p>

            <p className="text-gray-600 mb-6">
              Historic paint colors require analysis of surviving finishes to establish original specifications. Modern paint technologies can replicate historic colors while providing improved durability in Tampa's challenging climate. Specification of appropriate paint systems—primers, intermediate coats, and finish coats—ensures compatibility with historic substrates and long-term performance.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Decorative and Specialty Materials
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's landmark buildings often feature decorative elements that require specialized materials for restoration. Ornamental plaster in theaters, clubs, and civic buildings uses lime-based formulations that differ from modern gypsum plaster. Decorative painting requires traditional oil-based media in some applications where latex paints cannot replicate historic appearance.
            </p>

            <p className="text-gray-600 mb-6">
              Terra cotta—the glazed architectural clay that provides decorative facades on many Tampa commercial buildings—presents significant sourcing challenges. Only a few manufacturers produce architectural terra cotta today, making replacement expensive and time-consuming. Conservation of existing terra cotta through cleaning, consolidation, and protective treatment often proves more practical than replacement.
            </p>

            <p className="text-gray-600 mb-6">
              Stained glass and decorative glazing require specialized sourcing from art glass suppliers. When original glass survives, cleaning and releading preserves authentic material. When replacement is necessary, matching the color, texture, and opacity of historic glass requires careful selection from specialty glass manufacturers.
            </p>

            {/* FAQ Section */}
            <div className="my-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800">Can I use modern materials that look like historic materials?</h4>
                  <p className="text-gray-600">For character-defining features, the Secretary of the Interior's Standards require materials matching original composition, not just appearance. Modern aluminum windows, vinyl siding, and fiber cement products are generally not acceptable for tax credit projects, even when designed to resemble historic materials. Less prominent areas may have more flexibility, but visible elements require authentic materials.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Where can I find salvage brick matching Tampa's historic buildings?</h4>
                  <p className="text-gray-600">Florida Construction Specialists maintains relationships with salvage dealers throughout Florida and the Southeast who stock historic brick. We can also monitor demolition projects for material matching specific buildings. When salvage isn't available, we identify compatible brick from broader sources or specify custom manufacturing when quantities justify the approach.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">How do I know if proposed materials will meet tax credit requirements?</h4>
                  <p className="text-gray-600">Material specifications should be reviewed by preservation professionals before procurement. The Part 2 tax credit application requires description of proposed materials, and NPS reviewers evaluate whether specifications meet the Secretary of the Interior's Standards. Florida Construction Specialists helps clients develop specifications that satisfy preservation requirements before submitting applications.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">What if original materials are no longer available?</h4>
                  <p className="text-gray-600">When exact matching materials aren't available, the Standards allow materials that match original visual characteristics. Careful selection from available sources, custom manufacturing, or compatible substitute materials may be acceptable. Documentation explaining why exact matches aren't available and how proposed materials achieve visual compatibility supports tax credit applications for these situations.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">How far in advance should I order specialty materials?</h4>
                  <p className="text-gray-600">Lead times vary significantly by material type. Salvage materials may be available immediately or require weeks of searching. Custom brick takes 12-20 weeks. Custom terra cotta can take 16-24 weeks or longer. Early material identification and procurement prevents construction delays. We recommend beginning material sourcing during design development, 4-6 months before construction start.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Material Expertise from Florida Construction Specialists
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists brings comprehensive material sourcing capabilities to every historic restoration project. Our established supplier relationships, inventory knowledge, and understanding of preservation requirements ensure that your project receives appropriate materials that meet both historical accuracy standards and practical performance needs.
            </p>

            <p className="text-gray-600 mb-6">
              From Ybor City's industrial heritage to Hyde Park's residential elegance, we've sourced materials for Tampa's diverse historic building stock. Contact us today to discuss material requirements for your historic restoration project—we'll identify appropriate sources and develop procurement strategies that support project success.
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
            Contact Florida Construction Specialists today for expert material sourcing for your historic restoration project.
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
