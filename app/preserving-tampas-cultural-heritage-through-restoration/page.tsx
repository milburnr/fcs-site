import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Preserving Tampa's Cultural Heritage through Restoration",
  description: "Protecting Tampa's cultural heritage through expert restoration of historically significant buildings in Ybor City, Hyde Park, and Tampa Bay's diverse ethnic neighborhoods.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Preserving Tampa's Cultural Heritage through Restoration", href: "/preserving-tampas-cultural-heritage-through-restoration/" },
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
            alt="Tampa cultural heritage preservation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Preserving Tampa's Cultural Heritage through Restoration
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Protecting the built heritage that embodies Tampa's diverse cultural history—from Ybor City's immigrant traditions to the civic landmarks that shaped the modern city.
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
              Tampa's built heritage tells the story of a diverse community shaped by immigration, industry, and civic aspiration. The magnificent mutual aid society buildings of Ybor City, the elegant homes of Tampa's civic leaders, the churches that served distinct ethnic communities, and the commercial buildings that drove economic growth all contribute to a cultural landscape that restoration helps preserve for future generations.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists approaches historic restoration as cultural preservation—recognizing that buildings embody community memory, cultural identity, and intangible heritage alongside their physical materials. Our work protects not just historic fabric but the meanings and associations that make Tampa's historic places significant.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Ybor City: Immigrant Heritage and the Cigar Industry
            </h2>
            <p className="text-gray-600 mb-6">
              Ybor City's National Historic Landmark District represents one of America's most significant collections of immigrant industrial heritage. Founded in 1886 by Vicente Martinez Ybor, the neighborhood attracted Cuban, Italian, Spanish, and other workers who built the cigar industry that transformed Tampa into the "Cigar Capital of the World."
            </p>
            
            <p className="text-gray-600 mb-6">
              The district's cultural significance extends far beyond its impressive architecture. The mutual aid societies—L'Unione Italiana (Italian Club), Circulo Cubano (Cuban Club), Centro Español (Spanish Club), and others—provided healthcare, education, and social services to immigrant communities excluded from mainstream institutions. Their grand buildings expressed community pride and served as centers of cultural life.
            </p>

            <p className="text-gray-600 mb-6">
              Restoration of these culturally significant buildings requires sensitivity to their broader meanings. The Italian Club's elaborate ballroom, the Cuban Club's theater, and the ornate facades that line 7th Avenue represent not just architectural achievement but community aspiration and cultural expression. Restoration work should honor these associations while addressing physical preservation needs.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              The Tampa Theatre: Community Gathering Place
            </h2>
            <p className="text-gray-600 mb-6">
              The Tampa Theatre, opened in 1926, exemplifies how historic buildings serve as community gathering places that transcend their original function. Designed by architect John Eberson as an atmospheric theater simulating a Mediterranean courtyard under an evening sky, the theater remains one of America's most elaborate surviving movie palaces.
            </p>

            <p className="text-gray-600 mb-6">
              For nearly a century, the Tampa Theatre has hosted films, concerts, civic events, and community gatherings that create shared memories across generations. Its restoration preserves not only remarkable architectural achievement but also the venue where Tampa's community comes together. This cultural function guides preservation decisions as much as architectural considerations.
            </p>

            <p className="text-gray-600 mb-6">
              Ongoing preservation of the Tampa Theatre balances authentic restoration of historic elements with operational requirements for contemporary programming. The building must serve its cultural function—hosting events, welcoming audiences—while maintaining the atmospheric character that distinguishes it from ordinary venues.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Religious Heritage and Community Identity
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's historic churches, synagogues, and other religious buildings represent spiritual communities that shaped the city's development. These buildings often served ethnic communities whose identity centered on shared faith—Italian Catholics at Our Lady of Perpetual Help, Jewish immigrants at Congregation Schaarai Zedek, and African American congregations throughout Tampa's historically Black neighborhoods.
            </p>

            <p className="text-gray-600 mb-6">
              Restoration of religious buildings requires understanding of liturgical requirements alongside architectural preservation. Sacred spaces have specific functional needs—sight lines to altars, acoustics for worship, symbolic arrangements of elements—that must inform restoration decisions. The goal is enabling continued religious use while preserving historic character.
            </p>

            <p className="text-gray-600 mb-6">
              Art and decorative elements in religious buildings often hold particular significance. Stained glass windows, painted imagery, carved altars, and other elements may represent community gifts, memorial dedications, or artistic expressions of faith. Conservation of these elements honors both artistic achievement and the spiritual meanings communities attach to them.
            </p>

            {/* Cultural Heritage Sites Table */}
            <div className="my-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Tampa's Cultural Heritage Landmarks</h3>
              <table className="min-w-full border border-gray-300">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">Site</th>
                    <th className="px-4 py-2 text-left">Cultural Significance</th>
                    <th className="px-4 py-2 text-left">Preservation Considerations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="bg-white">
                    <td className="px-4 py-2">Italian Club (L'Unione Italiana)</td>
                    <td className="px-4 py-2">Italian immigrant heritage, mutual aid</td>
                    <td className="px-4 py-2">Decorative elements, ballroom, cultural use</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Cuban Club (Circulo Cubano)</td>
                    <td className="px-4 py-2">Cuban immigrant heritage, theater tradition</td>
                    <td className="px-4 py-2">Theater restoration, community access</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Tampa Theatre</td>
                    <td className="px-4 py-2">Community gathering, atmospheric architecture</td>
                    <td className="px-4 py-2">Operational needs, atmospheric effects</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Ybor City Cigar Factories</td>
                    <td className="px-4 py-2">Industrial heritage, labor history</td>
                    <td className="px-4 py-2">Industrial character, adaptive reuse</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Hyde Park Historic Homes</td>
                    <td className="px-4 py-2">Civic leadership, residential architecture</td>
                    <td className="px-4 py-2">Neighborhood character, private ownership</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Industrial Heritage and Economic History
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's cigar factories represent remarkable industrial heritage that documents both architectural achievement and labor history. These multi-story brick buildings—with their large windows, open floor plans, and distinctive ornament—were designed specifically for cigar manufacturing. Their survival provides tangible connection to the industry that built modern Tampa.
            </p>

            <p className="text-gray-600 mb-6">
              Beyond the cigar industry, Tampa's industrial heritage includes railroad facilities, port structures, and manufacturing buildings that document economic development. These utilitarian structures may lack decorative elaboration but possess historical significance that merits preservation. Adaptive reuse can give industrial buildings new life while maintaining their industrial character.
            </p>

            <p className="text-gray-600 mb-6">
              The relationship between buildings and their historical use adds significance layers that restoration should acknowledge. A cigar factory's reading platform—where "lectores" read to workers during the workday—represents cultural tradition even if physically unremarkable. Interpretive elements in restored buildings can communicate histories that architecture alone doesn't convey.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Community Engagement in Cultural Preservation
            </h2>
            <p className="text-gray-600 mb-6">
              Restoration of culturally significant buildings benefits from engagement with communities whose heritage they represent. Descendants of Ybor City's immigrant communities, congregations of historic churches, and neighborhood residents possess knowledge and perspectives that enhance understanding of what makes buildings significant and how restoration can honor their heritage.
            </p>

            <p className="text-gray-600 mb-6">
              Community engagement extends beyond consultation to participation in preservation decisions. When the Italian Club or Cuban Club undergoes restoration, involvement of the organizations that have maintained these buildings for over a century ensures that restoration respects their cultural stewardship. Their institutional knowledge guides appropriate treatment.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists facilitates community engagement as part of culturally sensitive restoration projects. We recognize that technical preservation expertise must be informed by community knowledge to achieve outcomes that truly serve cultural preservation goals.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Interpretation and Public Access
            </h2>
            <p className="text-gray-600 mb-6">
              Restoration provides opportunities to enhance public understanding of cultural heritage through interpretive elements integrated into preservation projects. Historic photographs, timeline markers, and explanatory materials help visitors understand the significance of restored buildings and the communities they served.
            </p>

            <p className="text-gray-600 mb-6">
              Public access considerations affect restoration planning for culturally significant sites. Buildings intended for public visitation require accessibility accommodations, visitor circulation patterns, and protection of significant features from wear. Balancing public access with preservation of fragile elements requires thoughtful design.
            </p>

            {/* FAQ Section */}
            <div className="my-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800">How does cultural significance affect restoration approach?</h4>
                  <p className="text-gray-600">Buildings with strong cultural associations may require treatment approaches that go beyond standard preservation practice. Spaces or elements with particular community meaning may deserve enhanced protection even if not architecturally distinguished. Community input helps identify these culturally significant aspects that physical analysis alone might miss.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Can culturally significant buildings qualify for tax credits?</h4>
                  <p className="text-gray-600">Yes, cultural significance is one criterion for National Register eligibility. Properties significant for their association with important events, persons, or cultural patterns may qualify even if their architecture is not individually distinctive. Many of Tampa's culturally significant buildings qualify for both federal and state historic tax credits.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">How do you balance preservation with continued cultural use?</h4>
                  <p className="text-gray-600">Culturally significant buildings often remain in active use by the communities they serve. Restoration must accommodate this ongoing use—providing modern systems, accessibility, and functional requirements—while preserving character that supports cultural function. The goal is enabling continued cultural use, not creating a museum.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">What role do ethnic heritage organizations play in restoration?</h4>
                  <p className="text-gray-600">Organizations maintaining culturally significant buildings possess institutional knowledge essential for appropriate restoration. The Italian Club's leadership understands how the building serves its community; religious congregations understand liturgical requirements. This knowledge should inform restoration decisions alongside technical preservation expertise.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">How can interpretation be incorporated into restoration?</h4>
                  <p className="text-gray-600">Interpretive elements—historic photographs, timeline markers, explanatory text—can be integrated into restoration projects with sensitivity to historic character. Placement, design, and materials should complement rather than detract from historic elements. Interpretation helps visitors understand significance that the building itself may not fully convey.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Committed to Cultural Heritage Preservation
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists approaches historic restoration as cultural preservation, recognizing that buildings embody community heritage that extends beyond their physical materials. Our work throughout Tampa Bay reflects commitment to preserving not just architecture but the cultural meanings and community memories that make historic places significant.
            </p>

            <p className="text-gray-600 mb-6">
              Contact us today to discuss how restoration can help preserve Tampa's cultural heritage. We bring both technical expertise and cultural sensitivity to projects that protect the built heritage of Tampa's diverse communities.
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
            Contact Florida Construction Specialists today for culturally-sensitive historic restoration services.
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
