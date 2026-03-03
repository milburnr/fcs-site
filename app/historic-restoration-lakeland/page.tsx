import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, Building2, Shield, Award, FileCheck, HardHat, Briefcase, Landmark, BookOpen } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/historic-restoration-lakeland/' },
  title: "Historic Restoration Lakeland | Frank Lloyd Wright",
  description: "Historic restoration in Lakeland by Florida Construction Specialists. Frank Lloyd Wright campus at Florida Southern College Dixieland Historic District.",
  openGraph: {
    title: "Historic Restoration Lakeland | Frank Lloyd Wright",
    description: "Historic restoration in Lakeland by Florida Construction Specialists. Frank Lloyd Wright campus at Florida Southern College Dixieland Historic District.",
    url: "https://floridaconstructionspecialists.com/historic-restoration-lakeland/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "What makes Florida Southern College's Frank Lloyd Wright buildings significant for historic restoration?",
    answer: "Florida Southern College in Lakeland contains the largest single-site collection of Frank Lloyd Wright architecture in the world, with 13 structures designed by Wright between 1938 and 1958. These buildings, collectively known as the Child of the Sun collection, are listed on the National Register of Historic Places and represent some of the most architecturally important structures in Florida. Restoration of Wright buildings requires specialized knowledge of his organic architecture philosophy, his specific construction methods including textile block systems, and the materials he specified for the Florida climate. Work on these buildings must be coordinated with the Frank Lloyd Wright Building Conservancy and comply with the Secretary of the Interior's Standards for Historic Preservation."
  },
  {
    question: "What historic districts in Lakeland have buildings that may require restoration?",
    answer: "Lakeland has several areas with historically significant buildings. The Dixieland Historic District, south of downtown between Lake Hollingsworth and Lake Morton, contains early twentieth century residential and commercial buildings with a mix of architectural styles including Craftsman, Mediterranean Revival, and vernacular Florida architecture. The Munn Park Historic Commercial District in downtown Lakeland features late nineteenth and early twentieth century commercial buildings around the city's oldest public park. The Lake Mirror area includes Civic Center buildings and public structures from the 1920s. Individual properties throughout the city, particularly near the downtown lakes, may also be individually listed on the National Register or designated as local landmarks."
  },
  {
    question: "Does historic restoration work in Lakeland require special permits or approvals?",
    answer: "Historic restoration in Lakeland may involve multiple levels of review depending on the property's designation. Properties listed on the National Register of Historic Places must comply with the Secretary of the Interior's Standards for the Treatment of Historic Properties if federal funding or federal permits are involved. Locally designated landmarks may require review by the city's historic preservation board before exterior modifications are approved. The City of Lakeland Community Development Department issues building permits for restoration work, and we coordinate with all applicable review bodies to ensure that restoration plans meet both preservation standards and current building code requirements. Some projects may qualify for federal historic preservation tax credits, which require additional documentation and National Park Service review."
  },
  {
    question: "How does FCS approach structural issues in historic Lakeland buildings without compromising character-defining features?",
    answer: "Historic buildings in Lakeland often have structural concerns that develop over decades of exposure to Florida's climate, including foundation settlement in sandy Polk County soils, deterioration of original wood structural members from moisture and termite damage, and cracking in masonry walls from thermal movement and settlement. Our approach follows the Secretary of the Interior's Standards, which prioritize repair over replacement and require that new work be distinguishable from but compatible with the original. We work with structural engineers experienced in historic buildings to develop repair methods that address structural deficiencies using minimally invasive techniques. When replacement of structural elements is unavoidable, we match original materials and methods as closely as possible while meeting current structural code requirements."
  },
  {
    question: "What types of historic restoration services does FCS provide in Lakeland?",
    answer: "We provide comprehensive historic restoration services including structural stabilization and foundation repair for buildings on Lakeland's sandy soils, exterior restoration of masonry, stucco, wood siding, and terra cotta ornamental elements, window restoration and historically appropriate replacement when originals cannot be saved, roof restoration using materials that match the original appearance while meeting current code, interior restoration of historically significant spaces including plaster, millwork, and decorative finishes, and adaptive reuse projects that repurpose historic buildings for modern commercial or residential use while preserving character-defining features. Each project begins with a thorough historic structures assessment that documents existing conditions and identifies character-defining features that must be preserved."
  },
  {
    question: "Can historic buildings in Lakeland be adapted for modern commercial use while maintaining preservation standards?",
    answer: "Yes, adaptive reuse of historic buildings is one of the most effective preservation strategies and is actively encouraged by preservation authorities. Downtown Lakeland has seen several successful adaptive reuse projects where early twentieth century commercial buildings around Munn Park have been converted to restaurants, boutique retail, and professional offices while retaining their historic character. The key is designing modern building systems, including HVAC, electrical, plumbing, and fire protection, in ways that do not damage or obscure character-defining features. We have experience integrating modern mechanical and electrical systems within historic building envelopes using minimally invasive installation methods. Many adaptive reuse projects qualify for federal and state historic preservation tax credits, which can offset 20 to 45 percent of qualified rehabilitation expenditures."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Historic Restoration", href: "/services/historic-restoration/" },
  { name: "Lakeland", href: "/historic-restoration-lakeland/" },
];

export default function HistoricRestorationLakelandPage() {
  return (
    <>
      <LocalBusinessSchema city="Lakeland" service="Historic Restoration" />
      <ServiceSchema
        serviceName="Historic Restoration"
        serviceDescription="Historic restoration in Lakeland, FL. Frank Lloyd Wright campus, Dixieland Historic District, Munn Park downtown buildings, adaptive reuse. Licensed CBC1262722, 40+ years experience."
        city="Lakeland"
        minPrice="200000"
        serviceCategories={["Historic Building Restoration", "Frank Lloyd Wright Preservation", "Adaptive Reuse", "Structural Stabilization", "Facade Restoration"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/historic-preservation/historic-preservation-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Lakeland, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Historic Restoration in Lakeland, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Lakeland holds an extraordinary concentration of architecturally significant buildings, from the world's largest collection of Frank Lloyd Wright structures at Florida Southern College to the early twentieth century commercial buildings of the Munn Park Historic District. Florida Construction Specialists brings the specialized construction expertise, preservation knowledge, and careful craftsmanship that historic restoration in Lakeland demands.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">Since 1982</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">License {BUSINESS_INFO.licenseNumber}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Building2 className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">{BUSINESS_INFO.projectsCompleted}+ Projects</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta text-center">
                Discuss Your Restoration Project
              </Link>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-secondary flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lakeland Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Lakeland's Architectural Heritage: From Frank Lloyd Wright to the Munn Park District
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Few cities in Florida can match Lakeland's depth of architectural heritage. The crown jewel is Florida Southern College, where Frank Lloyd Wright designed 13 structures between 1938 and 1958 in what he called the Child of the Sun collection. This campus represents the largest single-site collection of Wright architecture anywhere in the world, a designation that draws architectural scholars, preservation professionals, and visitors from around the globe. The buildings employ Wright's organic architecture principles adapted for the Florida climate, including his textile block construction system, cantilevered overhangs for shade and rain protection, and an integrated esplanade system that connects the structures across the campus.
              </p>
              <p className="mb-6">
                Beyond the Wright campus, Lakeland's architectural significance extends throughout the downtown core. The Munn Park Historic Commercial District, centered around Lakeland's oldest public park, contains late nineteenth and early twentieth century commercial buildings that tell the story of the city's growth from a railroad town to a regional center. These masonry commercial buildings, many featuring Mediterranean Revival, Classical Revival, and Vernacular Florida commercial architecture, are experiencing renewed interest as downtown Lakeland undergoes a commercial revitalization. Property owners are investing in restoration and adaptive reuse of these buildings for restaurants, boutique retail, professional offices, and mixed-use residential.
              </p>
              <p className="mb-6">
                The Dixieland Historic District, stretching between Lake Hollingsworth and Lake Morton south of downtown, contains one of Lakeland's most architecturally diverse residential neighborhoods. Homes and small commercial buildings dating from the early 1900s through the 1940s showcase Craftsman bungalows, Mediterranean Revival residences, Colonial Revival houses, and Florida vernacular architecture. The neighborhood's proximity to Florida Southern College and the city's most scenic lakes makes it a desirable area where restoration and renovation of historic structures is an ongoing activity.
              </p>
              <p>
                Florida Construction Specialists approaches historic restoration in Lakeland with the respect these buildings deserve and the technical expertise their preservation requires. Our team understands the Secretary of the Interior's Standards for the Treatment of Historic Properties, the documentation requirements for tax credit projects, and the construction methods needed to repair and restore buildings ranging from Wright's experimental concrete textile blocks to downtown Lakeland's load-bearing masonry commercial structures. We work alongside preservation architects and historians to ensure that every restoration project honors the building's historic character while addressing the structural and functional needs of modern use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/historic-preservation/historic-preservation-display.webp"
        alt="Historic building restoration in Lakeland"
        title="Preserving Lakeland's Architectural Legacy"
        subtitle="Frank Lloyd Wright campus, Dixieland Historic District, and Munn Park downtown buildings"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Historic Restoration Services for Lakeland's Heritage Buildings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            From Frank Lloyd Wright's concrete textile blocks to downtown masonry commercial buildings, we deliver preservation-quality restoration across Lakeland's architectural spectrum.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Landmark,
                title: "Structural Stabilization",
                description: "Foundation repair and structural stabilization for historic buildings affected by decades of settlement in Lakeland's sandy Polk County soils. We employ minimally invasive techniques that address structural deficiencies without disturbing character-defining features, including underpinning, supplemental support systems, and masonry crack repair using historically compatible materials."
              },
              {
                icon: Building2,
                title: "Exterior Facade Restoration",
                description: "Restoration of historic exterior materials including masonry, stucco, wood siding, terra cotta ornament, and decorative metalwork. For Lakeland's downtown commercial buildings, this often involves cleaning and repointing masonry, restoring original storefronts, and repairing decorative cornices and parapets that define the building's architectural character."
              },
              {
                icon: BookOpen,
                title: "Adaptive Reuse Construction",
                description: "Conversion of historic buildings for modern commercial, residential, or mixed-use occupancy while preserving character-defining features. Lakeland's downtown has strong potential for adaptive reuse of early twentieth century commercial buildings. We integrate modern HVAC, electrical, plumbing, and fire protection systems using minimally invasive methods that do not damage historic fabric."
              },
              {
                icon: Shield,
                title: "Window and Door Restoration",
                description: "Repair and restoration of original windows and doors, which are often the most visible character-defining features of historic buildings. When originals cannot be saved, we source historically appropriate replacements that match the original profiles, materials, and operation. For buildings in Lakeland's historic districts, window changes often require preservation board review."
              },
              {
                icon: HardHat,
                title: "Roof Restoration",
                description: "Historic roof restoration using materials that match the original appearance while meeting current Florida Building Code requirements for wind resistance. For Lakeland's commercial buildings, this includes flat and low-slope roof systems. For residential historic buildings in Dixieland, it may involve restoration of original clay tile, slate, or wood shingle roofing with appropriate underlayment and structural upgrades."
              },
              {
                icon: FileCheck,
                title: "Tax Credit Documentation",
                description: "Support for federal and state historic preservation tax credit applications. Qualified rehabilitation of certified historic structures can earn tax credits of 20 to 45 percent of qualified expenditures. We provide the construction documentation, progress photography, and materials specifications that the National Park Service and Florida Division of Historical Resources require for tax credit certification."
              }
            ].map((service) => (
              <div key={service.title} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-brand-green-dark" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Expertise Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Preservation Expertise for Lakeland's Unique Building Stock
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Historic restoration in Lakeland requires understanding both the specific buildings and the environmental conditions that have shaped their deterioration over decades. Lakeland's inland Central Florida climate creates preservation challenges distinct from coastal cities. There is no salt spray corroding metal elements or driving chloride into masonry, but the combination of intense UV radiation, heavy summer rainfall, high humidity, and the lightning exposure that defines Lakeland's position in Lightning Alley creates its own set of deterioration patterns.
              </p>
              <p className="mb-6">
                The <a href="https://www.lakelandgov.net/departments/community-development/" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of Lakeland Community Development Department</a> handles building permits for restoration work, and projects involving designated historic properties may require additional review through the city's historic preservation process. For properties on the National Register of Historic Places, including the Florida Southern College Wright buildings and structures within the Munn Park Historic Commercial District, any work involving federal funding or permits must comply with Section 106 of the National Historic Preservation Act. We coordinate with all applicable review authorities and understand the documentation and approval processes that historic restoration projects require.
              </p>
              <p className="mb-6">
                The Frank Lloyd Wright buildings at Florida Southern College present unique restoration challenges because of Wright's experimental construction methods. His textile block system, where decorative concrete blocks interlock with steel reinforcement, requires specialized repair techniques when blocks crack or spall. The cantilevered esplanade system that connects buildings across the campus has experienced structural distress from decades of thermal movement and settlement. Restoration of these nationally significant buildings requires contractors who understand both the construction methods Wright used and the preservation standards that govern work on buildings of this importance.
              </p>
              <p>
                Downtown Lakeland's commercial buildings present different but equally important restoration challenges. Many of the Munn Park district buildings are load-bearing masonry structures with unreinforced brick walls, cast iron columns, and wood floor framing. These buildings were constructed before modern seismic and wind codes, and restoration must address structural adequacy while preserving the original construction methods and materials that give the buildings their historic character. We work with structural engineers who specialize in historic masonry construction to develop repair approaches that meet current life safety requirements without destroying the building's historic integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Lakeland Historic Restoration Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            A careful, documentation-intensive approach that preserves historic character while addressing structural and functional needs.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Historic Structures Assessment",
                description: "Thorough documentation of existing conditions including architectural survey, structural evaluation, material testing, and identification of character-defining features. For Lakeland buildings, we assess the effects of decades of inland Florida climate exposure on original materials and identify deterioration patterns specific to each building's construction type and location.",
                icon: FileCheck,
              },
              {
                step: "02",
                title: "Preservation Planning and Approvals",
                description: "Development of a restoration plan that follows the Secretary of the Interior's Standards, including material specifications, repair methods, and replacement criteria. We coordinate review with the City of Lakeland, Florida Division of Historical Resources, and the National Park Service when tax credits are involved. All approvals are secured before construction begins.",
                icon: Landmark,
              },
              {
                step: "03",
                title: "Permitting and Pre-Construction",
                description: "Building permit submission to the City of Lakeland Community Development Department with full restoration plans. We procure specialty materials, arrange for skilled craftspeople experienced in historic construction methods, and develop detailed construction sequences that protect vulnerable historic elements during the restoration process.",
                icon: Briefcase,
              },
              {
                step: "04",
                title: "Restoration Construction",
                description: "Careful execution of restoration work with continuous quality monitoring and documentation. Each phase is photographed and recorded for preservation records and tax credit documentation. We coordinate closely with the preservation architect to ensure that all work meets the approved preservation plan and that unexpected conditions discovered during construction are addressed appropriately.",
                icon: HardHat,
              },
              {
                step: "05",
                title: "Documentation and Certification",
                description: "Complete as-built documentation, preservation photography, and maintenance recommendations for the restored building. For tax credit projects, we prepare the Part 3 application documenting completed work for National Park Service certification. We provide the building owner with a maintenance guide specific to the historic materials and systems in their building.",
                icon: Award,
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 bg-white rounded-xl p-6 shadow-sm">
                <div className="w-14 h-14 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-green-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={faqs}
        title="Lakeland Historic Restoration FAQ"
        description="Common questions about historic building restoration in Lakeland, Florida."
      />

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <RelatedServices city="Lakeland" currentService="historic-restoration" />
            <NearbyLocations currentCity="Lakeland" service="historic-restoration" serviceName="Historic Restoration" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Preserve Lakeland's Architectural Heritage
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss your historic restoration project in Lakeland. From Frank Lloyd Wright buildings to downtown commercial properties, we bring the preservation expertise and construction capability your project requires.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Discuss Your Restoration Project
            </Link>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all">
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-300">
              <span>License {BUSINESS_INFO.licenseNumber}</span>
              <span>In-House Engineering</span>
              <span>{BUSINESS_INFO.yearsInBusiness}+ Years Experience</span>
              <span>Prime Contractor Only</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
