import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Historical Commercial Construction in Tampa | Heritage Building Restoration & Preservation",
  description: "Expert historical commercial construction in Tampa. FCS preserves heritage buildings, historic storefronts, and commercial districts in Ybor City and downtown Tampa using traditional techniques and Secretary of Interior standards for authentic restoration.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Historical Commercial Construction in Tampa", href: "/historical-commercial-construction-in-tampa/" },
];


const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/services/commercial/medical-construction/", label: "Medical Facility Construction" },
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
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Commercial construction project in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Historical Commercial Construction in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Expert historical commercial construction in Tampa. FCS preserves heritage buildings, historic storefronts, and commercial districts using traditional techniques while meeting modern functionality requirements for sustainable business operations.
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

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-amber-600" />
                Historical Commercial Construction Expertise in Tampa
              </h2>
              <p className="text-gray-700 mb-4">
                Florida Construction Specialists specializes in historical commercial construction throughout Tampa's historic business districts, combining traditional building techniques with modern commercial requirements. Our expertise spans from turn-of-the-century brick buildings to Art Deco storefronts, Mediterranean Revival office buildings, and mid-century modern commercial structures that define Tampa's commercial heritage.
              </p>
              <p className="text-gray-700 mb-4">
                Working within the Secretary of Interior's Standards for the Treatment of Historic Properties, we restore historic commercial buildings while ensuring they meet contemporary business needs for accessibility, mechanical systems, technology infrastructure, and code compliance. Our projects have revitalized Tampa's Franklin Street corridor, preserved Ybor City's commercial heritage, and maintained Hyde Park's neighborhood shopping districts.
              </p>
              <p className="text-gray-700">
                From adaptive reuse of industrial buildings to storefront restoration using historical evidence, our commercial construction projects demonstrate that historic preservation creates economically viable spaces that attract businesses and customers while maintaining the authentic character that makes Tampa's historic districts unique and valuable.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Evolution of Tampa's Commercial Architecture
            </h2>
            
            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Late 19th Century Commercial Buildings (1880s-1900)
            </h3>
            <p className="text-gray-600 mb-6">
              Tampa's earliest commercial buildings reflect the city's rapid growth during the cigar industry boom and the arrival of railroad connections. These structures typically feature load-bearing masonry construction using local brick and imported materials, with cast iron storefronts, large display windows, and decorative cornices that demonstrated business prosperity and civic pride during Tampa's transformation from frontier settlement to commercial center.
            </p>
            <p className="text-gray-600 mb-6">
              Construction techniques included solid brick walls ranging from 12 to 24 inches thick, heavy timber floor systems with posts and beam construction, and tin or slate roofing systems designed to withstand Florida's weather extremes. Windows were typically double-hung sash with multi-pane configurations, while storefronts featured cast iron columns supporting large sheets of plate glass that represented the latest retail display technology.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Early 20th Century Commercial Development (1900-1925)
            </h3>
            <p className="text-gray-600 mb-6">
              The early 1900s brought more sophisticated commercial construction techniques to Tampa, including steel frame construction, reinforced concrete systems, and elaborate terra cotta ornamentation. Buildings from this period demonstrate the influence of Chicago School architecture adapted for Florida's climate, with large windows for natural lighting, improved ventilation systems, and fire-resistant construction mandated by updated building codes.
            </p>
            <p className="text-gray-600 mb-6">
              Commercial buildings of this era often featured ground-floor retail with upper-floor offices or residential space, creating mixed-use developments that supported Tampa's growing business community. Construction innovations included hydraulic passenger elevators, central steam heating, electric lighting systems, and telephone infrastructure that enabled multi-story commercial development in downtown Tampa's emerging business district.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Traditional Commercial Construction Techniques
            </h2>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Masonry and Structural Systems
            </h3>
            <p className="text-gray-600 mb-6">
              Historical commercial construction in Tampa relied heavily on masonry bearing wall systems using locally manufactured brick and imported stone materials. These thick walls provided excellent thermal mass for Florida's climate while supporting heavy timber floor systems and roof structures. Construction techniques included lime mortar joints, iron tie rods for structural stability, and carefully designed foundation systems using local limestone and imported materials when necessary.
            </p>
            <p className="text-gray-600 mb-6">
              Restoration of these masonry systems requires understanding original construction methods, mortar compositions, and structural load paths that differ significantly from modern construction practices. Our restoration work includes tuckpointing using period-appropriate mortar mixes, structural stabilization using compatible materials, and repair techniques that maintain the building's structural integrity while preserving historic appearance and construction details.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Historic Storefront Systems
            </h3>
            <p className="text-gray-600 mb-6">
              Traditional storefront construction used cast iron or steel framing systems to support large display windows while maintaining structural integrity. These systems typically included cast iron columns, decorative spandrel panels, transom windows for upper-floor lighting, and recessed entries that created attractive retail displays while protecting customers from weather. Hardware included bronze or brass door and window hardware designed for heavy commercial use.
            </p>
            <p className="text-gray-600 mb-6">
              Storefront restoration requires careful documentation of original configurations, research using historical photographs and physical evidence, and reconstruction using appropriate materials and techniques. Modern storefronts must meet current accessibility and safety codes while maintaining historical appearance, requiring creative design solutions that respect historic character while providing contemporary functionality.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Tampa's Historic Commercial Districts
            </h2>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Franklin Street Commercial Corridor
            </h3>
            <p className="text-gray-600 mb-6">
              Franklin Street served as Tampa's primary commercial corridor from the 1890s through the 1960s, featuring a concentration of department stores, office buildings, theaters, and specialty shops that made downtown Tampa the retail center for the entire Tampa Bay region. The street's commercial buildings represent a complete timeline of American commercial architecture, from late Victorian through Art Deco to mid-century modern styles.
            </p>
            <p className="text-gray-600 mb-6">
              Restoration work along Franklin Street focuses on recovering original storefronts, preserving upper-floor architectural details, and adapting buildings for contemporary commercial use while maintaining the pedestrian-oriented character that made the street successful. Projects include restoration of historic theaters, conversion of department stores to mixed-use developments, and streetscape improvements that support both historic preservation and economic development goals.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Ybor City Commercial Heritage
            </h3>
            <p className="text-gray-600 mb-6">
              Ybor City's commercial buildings reflect the unique cultural influences of Tampa's cigar industry, combining Cuban, Spanish, Italian, and American architectural traditions in buildings designed to serve the neighborhood's diverse immigrant population. Commercial structures include corner grocery stores, restaurants, social clubs, and mixed-use buildings that provided both business space and housing for the area's working families.
            </p>
            <p className="text-gray-600 mb-6">
              Preservation of Ybor City's commercial buildings requires understanding the cultural significance of these structures and their role in maintaining the district's authentic character. Restoration work includes preservation of original storefronts, traditional signage, and architectural details that reflect the area's multicultural heritage while supporting contemporary business uses that serve both residents and visitors.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Adaptive Reuse Strategies for Historic Commercial Buildings
            </h2>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Office Building Conversions
            </h3>
            <p className="text-gray-600 mb-6">
              Converting historic commercial buildings to modern office use requires balancing preservation requirements with contemporary workplace needs including open floor plans, technology infrastructure, energy efficiency, and accessibility compliance. Our approach includes careful planning to minimize impact on historic features while creating flexible spaces that can accommodate changing business requirements over time.
            </p>
            <p className="text-gray-600 mb-6">
              Typical conversion challenges include integrating modern HVAC systems within historic buildings, providing adequate electrical and data infrastructure, installing elevators for accessibility compliance, and creating efficient floor plans while preserving character-defining architectural features. Our solutions often involve creative use of existing architectural elements and careful design of new systems to complement rather than compete with historic character.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Mixed-Use Development Opportunities
            </h3>
            <p className="text-gray-600 mb-6">
              Historic commercial buildings are particularly well-suited for mixed-use development that combines retail, office, and residential space in configurations similar to their original use patterns. These projects capitalize on the walkable, pedestrian-oriented character of historic districts while providing diverse space types that support economic vitality and create vibrant neighborhoods.
            </p>
            <p className="text-gray-600 mb-6">
              Mixed-use projects require careful coordination of different building systems, occupancy requirements, and accessibility provisions while maintaining historic character throughout the building. Our experience includes successful projects that combine ground-floor retail with upper-floor offices or residences, creating developments that attract businesses and residents while preserving the authentic urban character that makes Tampa's historic districts attractive.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Modern Systems Integration in Historic Buildings
            </h2>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              HVAC System Design for Historic Commercial Buildings
            </h3>
            <p className="text-gray-600 mb-6">
              Installing modern HVAC systems in historic commercial buildings requires creative design approaches that provide contemporary comfort while preserving historic architectural features and spatial relationships. Our solutions include high-velocity systems that use smaller ductwork, radiant heating systems that work within existing floor and ceiling configurations, and zoning strategies that accommodate historic room layouts while providing efficient climate control.
            </p>
            <p className="text-gray-600 mb-6">
              System integration often involves using existing chases and architectural features to conceal modern equipment, designing custom grilles and registers that complement historic details, and selecting equipment that operates quietly to maintain the acoustic qualities that make historic buildings attractive for office and retail use. Energy efficiency improvements include window restoration, insulation upgrades using vapor-permeable materials, and building automation systems that optimize performance while respecting historic character.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Technology Infrastructure and Accessibility Upgrades
            </h3>
            <p className="text-gray-600 mb-6">
              Modern commercial buildings require extensive technology infrastructure including high-speed internet, cellular coverage, security systems, and advanced electrical capacity that historic buildings were not designed to accommodate. Our approach includes careful routing of new systems through existing building cavities, discrete installation of equipment and wiring, and coordination with preservation requirements to minimize visual impact on historic spaces.
            </p>
            <p className="text-gray-600 mb-6">
              Accessibility upgrades for historic commercial buildings often require creative solutions including platform lifts, ramp systems integrated with historic architecture, and bathroom modifications that meet ADA requirements while preserving historic character. We work closely with accessibility consultants and building officials to develop solutions that provide equal access while maintaining the architectural integrity that makes these buildings historically significant.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Economic Benefits of Historic Commercial Preservation
            </h2>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Historic Tax Credits for Commercial Projects
            </h3>
            <p className="text-gray-600 mb-6">
              Historic commercial buildings are eligible for significant federal and state historic tax credits that can cover 20-25% of qualified rehabilitation costs, making preservation financially competitive with new construction while providing unique character and location advantages. Our experience with historic tax credit projects includes feasibility analysis, compliance planning, and construction management to ensure projects meet certification requirements while achieving development goals.
            </p>
            <p className="text-gray-600 mb-6">
              Tax credit projects require careful documentation of existing conditions, detailed specifications of preservation treatments, and systematic quality control throughout construction. The financial benefits of tax credits often make the difference between demolition and preservation, enabling private developers to invest in historic buildings while contributing to neighborhood revitalization and economic development in Tampa's historic districts.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Market Advantages of Historic Commercial Space
            </h3>
            <p className="text-gray-600 mb-6">
              Historic commercial buildings offer unique market advantages including distinctive architectural character, established neighborhood locations, and authenticity that newer buildings cannot replicate. These qualities attract businesses seeking to differentiate themselves from generic commercial space while benefiting from the foot traffic and community connections that historic districts naturally generate.
            </p>
            <p className="text-gray-600 mb-6">
              Market research demonstrates that well-preserved historic commercial buildings typically achieve higher occupancy rates, longer lease terms, and premium rents compared to similar conventional space. The investment in quality restoration creates lasting value while contributing to community economic development and preservation of Tampa's irreplaceable architectural heritage for future generations.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Regulatory Framework and Compliance
            </h2>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Historic District Design Review Process
            </h3>
            <p className="text-gray-600 mb-6">
              Commercial construction projects in Tampa's historic districts require approval through local historic preservation commissions that review proposed changes for compliance with district guidelines and Secretary of Interior standards. Our experience with design review includes preparation of detailed applications, historical research to support design decisions, and presentation of projects to preservation commissions for approval.
            </p>
            <p className="text-gray-600 mb-6">
              The review process typically examines proposed changes to building facades, storefronts, signage, and other visible elements to ensure compatibility with historic character while allowing appropriate contemporary improvements. Our approach includes early consultation with preservation staff, careful documentation of existing conditions, and design development that balances preservation requirements with project goals and budget constraints.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Building Code Compliance for Historic Structures
            </h3>
            <p className="text-gray-600 mb-6">
              Historic commercial buildings often require alternative compliance strategies to meet modern building codes while preserving character-defining features that may not conform to current standards. Our experience includes working with building officials to develop code equivalency proposals, implementing alternative means of achieving safety goals, and designing solutions that satisfy regulatory requirements while maintaining historic authenticity.
            </p>
            <p className="text-gray-600 mb-6">
              Common code compliance challenges include fire safety systems, accessibility requirements, structural upgrades, and egress improvements that must be integrated sensitively within historic buildings. Our solutions often involve creative engineering, alternative materials and methods, and careful coordination between preservation and safety requirements to achieve acceptable outcomes for all stakeholders involved in the project approval process.
            </p>

            <div className="bg-brand-green-light/10 border border-brand-green rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">
                Why Choose FCS for Historical Commercial Construction?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>Comprehensive expertise in Tampa's commercial historic districts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>Historic tax credit project management and compliance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>Traditional construction techniques with modern building systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>Storefront restoration and adaptive reuse specialization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>Full regulatory compliance and design review coordination</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>Proven track record in Franklin Street, Ybor City, and Hyde Park</span>
                </li>
              </ul>
            </div>
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
            Contact Florida Construction Specialists today for a free consultation.
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
