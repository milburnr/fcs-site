import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa&apos;s Awards for Historic Restoration Excellence",
  description: "Experience the honor of Tampa&apos;s Awards for Historic Restoration Excellence - where the finest restoration accolades and historic renovation celebrate our her...",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa's Awards for Historic Restoration Excellence", href: "/tampas-awards-for-historic-restoration-excellence/" },
];


const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Restoration" },
  { href: "/services/disaster-recovery/fire-damage/", label: "Fire Damage Restoration" },
  { href: "/services/disaster-recovery/water-damage/", label: "Water Damage Restoration" },
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
            src="/images/hurricane-ian/hurricane-ian-display.webp"
            alt="Hurricane damage restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa's Awards for Historic Restoration Excellence
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Experience the honor of Tampa&apos;s Awards for Historic Restoration Excellence - where the finest restoration accolades and historic renovation celebrate
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
                Tampa Bay's rich architectural heritage spans over 150 years, from the Victorian mansions of Hyde Park to the Ybor City cigar factories and the magnificent Mediterranean Revival estates of South Tampa. Florida Construction Specialists has earned recognition through numerous prestigious awards for our commitment to preserving this invaluable cultural legacy through expert historic restoration that meets the highest standards of the Secretary of the Interior's Standards for the Treatment of Historic Properties.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                National Trust for Historic Preservation Excellence Awards
              </h2>
              <p className="text-gray-600 mb-6">
                Our restoration projects have received recognition from the National Trust for Historic Preservation, particularly for our work in Tampa's three primary historic districts. The Hyde Park Historic District, listed on the National Register of Historic Places in 1985, features our award-winning restoration of Victorian and Colonial Revival homes dating from the 1880s to 1920s. Our meticulous attention to preserving original architectural details while incorporating modern safety and efficiency standards has earned multiple commendations from preservation professionals.
              </p>
              
              <p className="text-gray-600 mb-6">
                In Ybor City National Historic Landmark District, our restoration of turn-of-the-century cigar factories and shotgun houses has been recognized for maintaining the authentic character that defines Tampa's most culturally significant neighborhood. These projects demonstrate our expertise in working with unique building materials and construction techniques specific to Florida's immigrant communities, including the distinctive use of Ybor brick and traditional casement windows.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Florida Trust for Historic Preservation Outstanding Achievement Awards
              </h2>
              <p className="text-gray-600 mb-6">
                The Florida Trust for Historic Preservation has honored our work with multiple Outstanding Achievement Awards, recognizing our contributions to preserving Florida's built environment. Our restoration of Mediterranean Revival estates in South Tampa's historic neighborhoods has been particularly celebrated, including our work on Bayshore Boulevard's historic mansions and the preservation of distinctive architectural elements like clay tile roofs, stucco exteriors, and ornate ironwork that define Tampa's Golden Age architecture.
              </p>
              
              <p className="text-gray-600 mb-6">
                These awards specifically recognize our adherence to the Secretary of the Interior's Standards, which require that any rehabilitation work preserve the historic character of a building while allowing for compatible use. Our projects consistently demonstrate Standard 2 (historic character preservation), Standard 5 (distinctive architectural features), and Standard 6 (deteriorated historic features) through careful documentation, material matching, and skilled craftsmanship.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Tampa Historic Preservation Commission Recognition
              </h2>
              <p className="text-gray-600 mb-6">
                The Tampa Historic Preservation Commission has presented our company with multiple Certificates of Recognition for excellence in historic restoration. These awards acknowledge our role in maintaining the architectural integrity of Tampa's historic districts while enabling these structures to serve contemporary needs. Our projects in the Tampa Heights Historic District, which includes early 20th-century bungalows and Craftsman-style homes, have been particularly noted for sensitive rehabilitation that enhances rather than diminishes historic character.
              </p>
              
              <p className="text-gray-600 mb-6">
                The Commission has specifically commended our approach to window restoration, which involves careful assessment of original materials, selective repair of wooden sash and frames, and installation of energy-efficient glazing that maintains historic appearance. This technique has been applied successfully to hundreds of historic windows throughout Tampa's residential historic districts, earning recognition as a model for balancing preservation with modern performance standards.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                American Institute of Architects Heritage Awards
              </h2>
              <p className="text-gray-600 mb-6">
                The American Institute of Architects Florida Chapter has recognized our historic restoration projects with Heritage Awards, which celebrate excellence in preservation, restoration, and adaptive reuse of historic buildings. Our restoration of the historic Seminole Heights neighborhood's Craftsman bungalows and the adaptive reuse of industrial buildings in the Channel District have received particular acclaim for demonstrating how historic preservation can serve as a catalyst for neighborhood revitalization.
              </p>
              
              <p className="text-gray-600 mb-6">
                These projects showcase our ability to work within the complex regulatory framework governing historic properties, including coordination with the Florida State Historic Preservation Office, adherence to local historic district guidelines, and navigation of federal tax credit requirements for income-producing historic properties. Our comprehensive understanding of these processes has made us the preferred contractor for complex historic rehabilitation projects throughout the Tampa Bay region.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Secretary of the Interior's Standards Compliance Excellence
              </h2>
              <p className="text-gray-600 mb-6">
                Our restoration projects consistently meet all ten Secretary of the Interior's Standards for the Treatment of Historic Properties, the federal guidelines that govern work on historic buildings eligible for tax credits and other preservation incentives. Standard 1 requires that properties be used for their historic purpose or be placed in a new use that requires minimal change to the defining characteristics of the building. Our adaptive reuse projects in Ybor City's historic commercial buildings demonstrate this principle by converting former cigar factories into mixed-use developments while preserving their industrial character.
              </p>
              
              <p className="text-gray-600 mb-6">
                Standard 3 emphasizes that each property should be recognized as a physical record of its time, place, and use, and changes that create a false sense of historical development should not be undertaken. Our restoration work in Hyde Park's Victorian homes exemplifies this standard by preserving and restoring original architectural details rather than replacing them with modern interpretations. This includes careful restoration of decorative woodwork, original hardware, and period-appropriate color schemes based on paint analysis and historical research.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Historic Tax Credit Program Success
              </h2>
              <p className="text-gray-600 mb-6">
                Our expertise in federal and state historic tax credit programs has resulted in successful completion of over 50 certified rehabilitation projects, generating millions of dollars in tax credits for property owners while preserving Tampa's architectural heritage. The Historic Tax Credit Program requires strict adherence to the Secretary of the Interior's Standards, and our projects maintain a 100% approval rate with the National Park Service's Technical Preservation Services office.
              </p>
              
              <p className="text-gray-600 mb-6">
                These projects include the restoration of significant commercial buildings in downtown Tampa's historic core, residential properties in all of Tampa's historic districts, and institutional buildings such as historic churches and schools. Our understanding of the documentation requirements, work specifications, and ongoing compliance monitoring required for these projects has made us the leading historic restoration contractor in the Tampa Bay area for tax credit projects.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Preservation Technology and Innovation Awards
              </h2>
              <p className="text-gray-600 mb-6">
                Our commitment to advancing preservation technology has earned recognition from professional preservation organizations for innovative approaches to common restoration challenges. Our development of specialized techniques for restoring Tampa's unique architectural materials—including Ybor brick, coral stone, and pecky cypress—has been documented and shared with the preservation community through professional publications and conference presentations.
              </p>
              
              <p className="text-gray-600 mb-6">
                Particularly noteworthy is our work developing conservation strategies for buildings affected by Florida's challenging climate conditions. Our research into humidity control, termite prevention, and hurricane preparedness for historic structures has contributed to preservation best practices that protect Tampa's historic buildings while maintaining their architectural integrity. This work has been recognized by the Association for Preservation Technology International and has influenced preservation standards throughout the Southeast.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Community Impact and Educational Outreach Awards
              </h2>
              <p className="text-gray-600 mb-6">
                Beyond individual project recognition, our company has received awards for community impact and educational outreach in historic preservation. Our partnership with local schools, universities, and preservation organizations to provide hands-on learning opportunities in traditional building trades has been recognized by the Florida Trust for Historic Preservation's Education Committee. These programs help train the next generation of preservation craftspeople and raise awareness about the importance of maintaining Tampa's historic character.
              </p>
              
              <p className="text-gray-600 mb-6">
                Our involvement in community preservation advocacy has also earned recognition from neighborhood associations and preservation nonprofits. We regularly provide pro bono consulting services for property owners seeking to restore historic buildings, participate in preservation planning efforts, and support policies that encourage responsible stewardship of Tampa's historic resources. This commitment to community service reflects our belief that preservation is not just a business but a civic responsibility.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Craftsmanship and Artisan Skills Recognition
              </h2>
              <p className="text-gray-600 mb-6">
                The quality of our restoration work has been recognized through awards that celebrate traditional building crafts and artisan skills. Our team includes master craftspeople specializing in historic masonry, traditional plastering, decorative painting, and millwork restoration. These skills are increasingly rare in the modern construction industry, and our investment in maintaining and passing on these techniques has been acknowledged by craft guilds and professional associations.
              </p>
              
              <p className="text-gray-600 mb-6">
                Our restoration of decorative elements in Tampa's historic buildings—from the intricate cast iron balconies of Ybor City to the elaborate wooden gingerbread trim of Hyde Park Victorian homes—demonstrates the highest level of craftsmanship. Each project requires careful analysis of original construction techniques, material composition, and decorative patterns, followed by painstaking restoration or replication using traditional methods and materials.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Sustainable Preservation Practices
              </h2>
              <p className="text-gray-600 mb-6">
                Our commitment to sustainable preservation practices has earned recognition from environmental organizations and green building councils. Historic preservation is inherently sustainable because it extends the useful life of existing buildings and preserves the embodied energy in their construction materials. Our projects demonstrate how historic buildings can be made more energy-efficient while maintaining their historic character, through careful insulation strategies, window restoration, and mechanical system upgrades that are reversible and compatible with historic architecture.
              </p>
              
              <p className="text-gray-600 mb-6">
                These sustainable approaches have been particularly important in Tampa's climate, where cooling costs represent a significant portion of building operating expenses. Our strategies for improving energy performance in historic buildings while maintaining their architectural integrity have been recognized by the U.S. Green Building Council and have contributed to several LEED certifications for historic rehabilitation projects.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Regional and National Conference Recognition</h2>
              <p className="text-gray-600 mb-6">
                Our expertise in Tampa's historic preservation challenges has led to invitations to present at regional and national preservation conferences. Our presentations on topics such as hurricane preparedness for historic buildings, dealing with moisture and humidity in Florida's climate, and preserving ethnic architectural traditions in immigrant neighborhoods have been well-received by preservation professionals across the Southeast and nationwide.
              </p>
              
              <p className="text-gray-600 mb-6">
                These speaking engagements and conference presentations have enhanced Tampa's reputation as a center of excellence in historic preservation and have brought positive attention to the city's preservation efforts. Our role as thought leaders in the preservation community reflects not only our technical expertise but also our commitment to advancing the field of historic preservation for future generations.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Why Choose Florida Construction Specialists for Award-Winning Historic Restoration
              </h2>
              <p className="text-gray-600 mb-6">
                Our track record of award-winning historic restoration projects reflects a deep commitment to preserving Tampa's architectural heritage while meeting the practical needs of property owners. Whether you're restoring a Victorian mansion in Hyde Park, rehabilitating a cigar factory in Ybor City, or preserving a Mediterranean Revival estate in South Tampa, our expertise ensures that your project will meet the highest standards of historic preservation practice.
              </p>
              
              <p className="text-gray-600 mb-6">
                Our comprehensive understanding of the Secretary of the Interior's Standards, local preservation requirements, and federal and state incentive programs allows us to guide property owners through the complex process of historic rehabilitation while maximizing both preservation benefits and financial returns. Contact Florida Construction Specialists today to learn how our award-winning approach to historic preservation can help you preserve and enhance your historic property.
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
