import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa Historic Home Restoration Guidelines - Florida Construction Specialists",
  description: "Comprehensive guidelines for restoring Tampa's historic homes in Hyde Park, Seminole Heights, and other preservation districts. Professional standards and best practices.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa Historic Home Restoration Guidelines", href: "/tampa-historic-home-restoration-guidelines/" },
];

const internalLinks = [
  { href: "/services/historic-restoration/", label: "Historic Restoration Services" },
  { href: "/services/residential/", label: "Residential Construction" },
  { href: "/services/historic-restoration/shpo-compliance/", label: "SHPO Compliance" },
  { href: "/services/historic-restoration/historic-tax-credits/", label: "Historic Tax Credits" },
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
            alt="Tampa historic home restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa Historic Home Restoration Guidelines
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Professional guidelines for restoring Tampa's historic residences in Hyde Park, Seminole Heights, and other historic neighborhoods while meeting preservation standards.
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
              Tampa's historic residential neighborhoods—Hyde Park, Seminole Heights, Tampa Heights, and others—contain some of Florida's finest examples of Victorian, Craftsman, Colonial Revival, and Mediterranean Revival architecture. Restoring these homes requires understanding both the architectural traditions they represent and the regulatory requirements that govern work in Tampa's historic districts.
            </p>

            <p className="text-gray-600 mb-6">
              While Florida Construction Specialists focuses primarily on commercial and institutional restoration, our expertise extends to significant residential projects and the preservation principles that apply across building types. These guidelines draw on professional standards and Tampa-specific requirements to help homeowners approach restoration with informed expectations.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Understanding Your Home's Architectural Style
            </h2>
            <p className="text-gray-600 mb-6">
              Effective restoration begins with understanding your home's architectural style and its character-defining features. Different periods and styles have distinct characteristics that restoration should preserve and enhance. Misunderstanding style—or applying features from one style to a home of another—creates inappropriate results that diminish rather than enhance historic character.
            </p>
            
            <p className="text-gray-600 mb-6">
              Hyde Park's residential architecture spans multiple styles and periods. Victorian-era homes (1880s-1900s) feature asymmetrical facades, decorative trim, varied roof forms, and wraparound porches. Colonial Revival (1890s-1940s) emphasizes symmetry, classical details, and formal proportions. Mediterranean Revival (1920s-1940s) draws on Spanish Colonial precedents with stucco walls, tile roofs, and arched openings.
            </p>

            <p className="text-gray-600 mb-6">
              Seminole Heights showcases Craftsman bungalows (1910s-1930s) with their characteristic low-pitched roofs, exposed rafter tails, wide porches, and natural materials. These homes emphasize honest construction and integration with landscape. Colonial Revival and Mediterranean styles also appear in Seminole Heights alongside vernacular Florida cottages adapted to the local climate.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Preservation Priorities for Residential Restoration
            </h2>
            <p className="text-gray-600 mb-6">
              The Secretary of the Interior's Standards apply to residential restoration just as they do to commercial buildings. The fundamental principles—repair over replacement, compatibility of new work with historic character, reversibility of alterations—guide appropriate treatment of historic homes.
            </p>

            <p className="text-gray-600 mb-6">
              Character-defining features deserving prioritized preservation typically include original windows (particularly distinctive styles like leaded glass or specialty shapes), exterior trim and decorative elements, historic front doors and hardware, porch configurations and details, original siding and exterior materials, and roofline and dormer configurations.
            </p>

            <p className="text-gray-600 mb-6">
              Interior preservation priorities for homes in historic districts typically receive less regulatory attention since local design review usually applies only to visible exteriors. However, owners who value historic character often prioritize interior features including original woodwork and millwork, hardwood flooring, historic lighting fixtures, fireplaces and mantels, and built-in cabinetry and storage.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Working Within Tampa's Historic Districts
            </h2>
            <p className="text-gray-600 mb-6">
              Homes in Tampa's locally-designated historic districts must obtain Certificate of Appropriateness approval for visible exterior work. Understanding what requires approval—and what district design guidelines allow—prevents delays and rejected applications.
            </p>

            <p className="text-gray-600 mb-6">
              Routine maintenance using same materials and same appearance generally doesn't require approval. Painting with existing colors, replacing individual deteriorated elements with matching materials, and similar maintenance activities typically qualify for exemption. However, changing colors, changing materials, or modifying configurations requires review.
            </p>

            <p className="text-gray-600 mb-6">
              Projects requiring approval include window and door replacement or modification, siding repair or replacement with different materials, porch modifications, additions and new construction, fencing and significant landscape changes, and roofing material changes (profile or color). Early consultation with preservation staff clarifies requirements for specific projects.
            </p>

            {/* Guidelines Table */}
            <div className="my-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Common Residential Restoration Guidelines</h3>
              <table className="min-w-full border border-gray-300">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">Element</th>
                    <th className="px-4 py-2 text-left">Appropriate Treatment</th>
                    <th className="px-4 py-2 text-left">Avoid</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="bg-white">
                    <td className="px-4 py-2">Windows</td>
                    <td className="px-4 py-2">Repair, weatherstrip, add storms</td>
                    <td className="px-4 py-2">Vinyl/aluminum replacement, changing sizes</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Siding</td>
                    <td className="px-4 py-2">Repair, repaint, match when replacing</td>
                    <td className="px-4 py-2">Vinyl/aluminum covering, different profiles</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Porches</td>
                    <td className="px-4 py-2">Maintain original configuration, repair</td>
                    <td className="px-4 py-2">Enclosure, column changes, railing alterations</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Roofing</td>
                    <td className="px-4 py-2">Match historic material and color</td>
                    <td className="px-4 py-2">Metal on tile houses, skylights on front slope</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Additions</td>
                    <td className="px-4 py-2">Rear placement, compatible but distinct</td>
                    <td className="px-4 py-2">Front additions, overwhelming scale</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Paint Colors</td>
                    <td className="px-4 py-2">Period-appropriate palette</td>
                    <td className="px-4 py-2">Garish colors, single color for all elements</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Addressing Common Residential Restoration Challenges
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's climate creates specific challenges for historic home maintenance. Understanding common issues and appropriate responses helps homeowners address problems without damaging historic character.
            </p>

            <p className="text-gray-600 mb-6">
              Window deterioration ranks among the most frequent concerns. Historic wood windows can be restored to excellent condition through proper repair, weatherstripping, and addition of storm windows. Restoration typically costs less than quality replacement while preserving historic character and maintaining property values in historic districts.
            </p>

            <p className="text-gray-600 mb-6">
              Wood rot affects many Tampa historic homes, particularly at water-vulnerable locations like window sills, porch floors, and exterior trim near grade. Epoxy consolidants can stabilize damaged wood, while Dutchman repairs replace deteriorated sections with matching new wood. Complete replacement should occur only when deterioration is too extensive for repair.
            </p>

            <p className="text-gray-600 mb-6">
              Foundation and structural concerns require professional evaluation but don't necessarily demand dramatic intervention. Many settlement patterns in older homes are stable and require monitoring rather than repair. When structural work is necessary, sensitive approaches that preserve visible historic elements while addressing concealed structural deficiencies should be explored.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Additions and Alterations
            </h2>
            <p className="text-gray-600 mb-6">
              Historic homes often require modifications to accommodate contemporary living—additional bathrooms, updated kitchens, expanded living space. Thoughtful additions and alterations can meet these needs while preserving historic character.
            </p>

            <p className="text-gray-600 mb-6">
              Location matters critically for additions. Rear additions that don't affect the primary facade typically receive approval more readily than side additions affecting street presence. Additions should be clearly subordinate to the historic structure—smaller in scale, set back from front facade, and visually secondary.
            </p>

            <p className="text-gray-600 mb-6">
              Kitchen and bathroom updates can occur within existing footprints without affecting exteriors or triggering historic district review. Interior updates that respect historic character—maintaining original room configurations, preserving significant features, using compatible materials—enhance livability while preserving what makes the home special.
            </p>

            {/* FAQ Section */}
            <div className="my-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800">Do I need approval to paint my house?</h4>
                  <p className="text-gray-600">Repainting with existing colors generally doesn't require approval in Tampa's historic districts. Changing colors typically does require Certificate of Appropriateness approval. Most districts have approved color palettes or guidelines for period-appropriate colors. Consultation with preservation staff clarifies requirements for your specific situation.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Can I replace my windows with energy-efficient models?</h4>
                  <p className="text-gray-600">Historic districts typically require maintaining historic windows or replacing with matching wood windows. Vinyl and aluminum replacements are generally not approved. However, adding interior storm windows with low-E glass provides excellent energy performance without altering historic windows. Window restoration with weatherstripping also significantly improves energy efficiency.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Are there tax credits for residential historic restoration?</h4>
                  <p className="text-gray-600">The federal 20% historic tax credit applies only to income-producing properties, not owner-occupied residences. However, if you rent part of your historic home, that portion may qualify. Some owners convert residences to rental or B&B use to access credits. Property tax incentives for historic properties may also provide ongoing tax benefits for residential restoration.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">How do I find a contractor experienced with historic homes?</h4>
                  <p className="text-gray-600">Seek contractors with demonstrated experience on similar historic homes. Ask for references from projects in Tampa's historic districts. Verify they understand local preservation requirements and won't propose inappropriate changes. Tampa Preservation Inc. and neighborhood preservation organizations may have contractor recommendations.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">What if my historic home has been previously altered?</h4>
                  <p className="text-gray-600">Previous inappropriate alterations don't prevent thoughtful restoration going forward. Some alterations may be appropriate to reverse—removing vinyl siding to restore original wood siding, for example. Other alterations may have become part of the building's history and may be appropriate to retain. Evaluation of specific conditions guides appropriate treatment decisions.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Professional Support for Historic Home Restoration
            </h2>
            <p className="text-gray-600 mb-6">
              While Florida Construction Specialists focuses primarily on commercial and institutional projects, our preservation expertise informs consultation on significant residential restoration. For major residential projects requiring professional contractor services, we can provide guidance on appropriate approaches and connect homeowners with qualified specialists.
            </p>

            <p className="text-gray-600 mb-6">
              Contact us to discuss your historic home restoration project. We'll help you understand preservation requirements, identify appropriate treatment approaches, and connect with resources that support successful restoration of Tampa's residential architectural heritage.
            </p>

          </div>
        </div>
      </section>

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
            Contact Florida Construction Specialists today for guidance on your historic home restoration project.
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
