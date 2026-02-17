import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, Building2, Shield, Award, FileCheck, HardHat, Briefcase } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/historic-restoration-sarasota/' },
  title: "Historic Restoration Sarasota FL | Mediterranean Revival, Preservation | FCS",
  description: "Historic restoration in Sarasota by Florida Construction Specialists. Burns Court, Laurel Park, Mediterranean Revival architecture, Ringling-era estates. Licensed CBC, 40+ years experience.",
};

const faqs = [
  {
    question: "What historic architectural styles are most common in Sarasota, and how does FCS approach each?",
    answer: "Sarasota has two primary historic architectural traditions. The Mediterranean Revival style was the dominant commercial and residential architecture of the 1920s boom era, influenced by John Ringling's development of the city and characterized by stucco walls, barrel tile roofs, arched openings, and ornamental ironwork. The mid-century Sarasota School of Architecture, which flourished from the late 1940s through the 1960s, produced a distinctly regional modern style with flat roofs, clerestory windows, post-and-beam construction, and open floor plans designed for the Florida climate. We approach each style differently, using period-appropriate materials and techniques for Mediterranean Revival work while respecting the innovative structural approaches and clean geometries of Sarasota School buildings."
  },
  {
    question: "Does Sarasota have local historic preservation boards that affect restoration projects?",
    answer: "The City of Sarasota has a Historic Preservation Board that reviews applications for Certificate of Appropriateness for designated historic properties and properties within historic districts. Burns Court and Laurel Park are two neighborhoods with significant concentrations of designated historic properties. The board reviews exterior modifications to ensure compatibility with the historic character of the property and surrounding district. Undesignated properties with historic significance may also require review if they are located within the boundaries of a locally designated historic area. We have experience working with the Sarasota Historic Preservation Board and understand the review criteria, documentation requirements, and design standards that affect restoration project approvals."
  },
  {
    question: "How does Florida's hurricane building code interact with historic restoration requirements in Sarasota?",
    answer: "Historic restoration in Sarasota creates a tension between preservation of original character and compliance with modern hurricane codes. The Florida Building Code provides some accommodation for historic structures through the Historic Buildings chapter, which allows alternative materials and methods when strict code compliance would threaten the historic integrity of the building. However, life safety and structural requirements are generally not waivable. We work with structural engineers to develop solutions that meet wind resistance requirements while preserving historic character. This might include concealed structural reinforcement, impact-resistant glazing that replicates historic window profiles, and enhanced roof connections hidden within the existing roof system. Each project requires a balance specific to the building's historic significance and structural condition."
  },
  {
    question: "What is the Sarasota School of Architecture and why does it matter for restoration?",
    answer: "The Sarasota School of Architecture was a mid-century modern movement centered in Sarasota from approximately 1941 to 1966. Architects including Paul Rudolph, Ralph Twitchell, Victor Lundy, and Gene Leedy developed a regional modernist approach that used post-and-beam construction, clerestory windows, open floor plans, and deep overhangs suited to the Florida climate. These buildings are increasingly recognized as architecturally significant, and several are listed on the National Register of Historic Places. Restoration of Sarasota School buildings requires understanding of their distinctive structural systems, original material specifications, and the design intent behind their open relationship with the landscape. We approach these restorations with the same discipline we apply to earlier historic periods."
  },
  {
    question: "How does salt air exposure affect historic buildings in Sarasota, and how does FCS address it?",
    answer: "Historic buildings in Sarasota, particularly those on the barrier islands or near the bayfront, experience accelerated deterioration from salt air exposure. Mediterranean Revival stucco develops cracking and delamination as salt penetrates through the coating system and attacks the substrate. Original barrel tile roofs develop mortar deterioration at a faster rate. Metal elements including ornamental ironwork, window frames, and structural connections corrode in the salt environment. Sarasota School buildings with exposed steel structural elements are particularly vulnerable. Our restoration approach includes assessment of salt damage penetration depth, specification of salt-resistant repair materials compatible with historic aesthetics, and protective treatment systems that extend the service life of restored elements in the coastal environment."
  },
  {
    question: "What is the typical scope and cost of historic restoration in Sarasota?",
    answer: "Historic restoration scope in Sarasota ranges from focused interventions like roof restoration and stucco repair on individual properties to comprehensive restorations of significant structures. A focused exterior restoration of a Mediterranean Revival commercial building in Burns Court or Laurel Park may range from two hundred thousand to five hundred thousand dollars. Comprehensive restoration of a larger historic structure involving structural repair, roof replacement with period-appropriate materials, window restoration, and interior rehabilitation can range from one million to ten million dollars. Historic restoration typically costs more per square foot than new construction because of the specialized materials, skilled labor, documentation requirements, and preservation board coordination involved."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Historic Restoration", href: "/services/historic-restoration/" },
  { name: "Sarasota", href: "/historic-restoration-sarasota/" },
];

export default function HistoricRestorationSarasotaPage() {
  return (
    <>
      <LocalBusinessSchema city="Sarasota" service="Historic Restoration" />
      <ServiceSchema
        serviceName="Historic Restoration"
        serviceDescription="Historic restoration in Sarasota, FL. Mediterranean Revival, Sarasota School of Architecture, Burns Court, Laurel Park, preservation board coordination. Licensed CBC1262722, 40+ years experience."
        city="Sarasota"
        minPrice="200000"
        serviceCategories={["Mediterranean Revival Restoration", "Sarasota School Preservation", "Historic Commercial Renovation", "Preservation Board Coordination", "Period Material Restoration"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/historic-preservation-home/historic-preservation-home-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Sarasota, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Historic Restoration in Sarasota, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              From the Mediterranean Revival buildings of Burns Court and Laurel Park to the internationally recognized mid-century masterworks of the Sarasota School of Architecture, Sarasota possesses an architectural heritage unlike any other Florida city. Florida Construction Specialists restores and preserves these historically significant structures with the specialized materials, period-appropriate techniques, and preservation board experience that this work demands.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">Since 1983</span>
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

      {/* Sarasota Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Sarasota's Unique Architectural Heritage Demands Specialized Restoration
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Sarasota's architectural history is remarkably rich for a city its size, and that history creates specific restoration challenges found nowhere else in Florida. The city's first wave of significant architecture arrived during the 1920s Florida land boom, heavily influenced by circus magnate John Ringling, who envisioned Sarasota as a Mediterranean-style resort city. Ringling's patronage attracted architects who designed commercial buildings, hotels, and residences in the Mediterranean Revival style, with stucco facades, barrel tile roofs, arched openings, decorative tile work, and ornamental ironwork. Burns Court, just south of Main Street downtown, preserves an exceptional concentration of these 1920s commercial buildings. Laurel Park, west of downtown, contains Mediterranean Revival residential architecture from the same era.
              </p>
              <p className="mb-6">
                The city's second great architectural movement was the Sarasota School of Architecture, a mid-century modern movement that put Sarasota on the international architectural map. Architects like Paul Rudolph, Ralph Twitchell, Victor Lundy, Jack West, and Gene Leedy developed a regional modernist approach that responded to the Florida climate with post-and-beam construction, clerestory windows, deep overhangs, and an open relationship between interior and exterior space. Buildings like the Revere Quality House, the Hiss Studio, and the Sarasota High School addition by Paul Rudolph are nationally recognized architectural landmarks. Several are listed on the National Register of Historic Places.
              </p>
              <p className="mb-6">
                These two architectural traditions create very different restoration challenges. Mediterranean Revival restoration requires mastery of lime-based stucco systems, clay barrel tile roofing, ornamental plaster and cast stone, and wrought iron work. Sarasota School restoration demands understanding of post-war structural systems, innovative glazing details, exposed concrete and steel elements, and the often-experimental construction techniques these architect-designers employed. Both types require careful material analysis, period-appropriate repair specifications, and coordination with preservation authorities.
              </p>
              <p>
                Florida Construction Specialists approaches Sarasota's historic restoration market with the technical discipline and material knowledge that this work requires. We are not a specialty preservation firm, but as a licensed general contractor with over four decades of construction experience, we bring the project management, structural capability, and quality control systems needed for complex restoration projects while coordinating closely with preservation architects and historians who provide the specialized design guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/historic-preservation/historic-preservation-display.webp"
        alt="Historic building restoration in Sarasota's architectural district"
        title="Preserving Sarasota's Architectural Legacy"
        subtitle="Mediterranean Revival, Sarasota School, and period-appropriate restoration across the city"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Historic Restoration Capabilities for Sarasota's Architecture
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Each era of Sarasota's architectural heritage presents distinct restoration requirements and material challenges.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Mediterranean Revival Restoration",
                description: "Restoration of 1920s-era commercial and residential buildings in Burns Court, Laurel Park, and throughout downtown Sarasota. Lime stucco repair and replacement, barrel tile roof restoration, ornamental plaster and cast stone repair, wrought iron restoration, and period-appropriate window repair."
              },
              {
                icon: Award,
                title: "Sarasota School Preservation",
                description: "Restoration of mid-century modern buildings from the Sarasota School of Architecture. Post-and-beam structural repair, clerestory window restoration, flat roof system rehabilitation, exposed concrete and steel element preservation, and reproduction of original architectural details."
              },
              {
                icon: Shield,
                title: "Structural Rehabilitation",
                description: "Structural repair and reinforcement of historic buildings that maintains their architectural character while meeting safety requirements. Concealed structural upgrades, foundation stabilization, load-bearing wall repair, and hurricane resistance improvements compatible with historic design."
              },
              {
                icon: HardHat,
                title: "Exterior Envelope Restoration",
                description: "Complete exterior restoration including stucco systems, masonry repair, window and door restoration, roof replacement with period-appropriate materials, and decorative element repair. We specify materials compatible with original construction while providing improved weather resistance."
              },
              {
                icon: Briefcase,
                title: "Adaptive Reuse",
                description: "Converting historic buildings to new uses while preserving their architectural character. Commercial-to-residential conversions in downtown Sarasota, retail modernization in Burns Court, and adaptive reuse of mid-century structures that honors the original design intent while meeting current code and commercial requirements."
              },
              {
                icon: FileCheck,
                title: "Preservation Board Coordination",
                description: "Managing the Certificate of Appropriateness process with the Sarasota Historic Preservation Board. We prepare applications with detailed documentation of proposed restoration work, attend board meetings, and ensure construction execution matches approved plans. Our experience with the board's review criteria reduces approval delays."
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
              Understanding Sarasota's Historic Preservation Environment
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Historic restoration in Sarasota operates within a regulatory framework that balances preservation with practical construction realities. The City of Sarasota maintains a local register of designated historic properties and districts, and the Historic Preservation Board reviews exterior modifications to these designated resources. Properties listed on the National Register of Historic Places, which includes several Sarasota School buildings, carry additional considerations particularly when federal tax credits or grant funding is involved.
              </p>
              <p className="mb-6">
                The <a href="https://www.sarasotafl.gov/government/building-department" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of Sarasota Building Department</a> processes construction permits for historic restoration work, but projects involving designated historic properties also require Certificate of Appropriateness from the Historic Preservation Board before construction can begin. We coordinate both tracks simultaneously to avoid delays, preparing permit applications and COA submissions in parallel and ensuring that approved preservation plans align with building code requirements.
              </p>
              <p className="mb-6">
                Sarasota's Gulf Coast climate creates persistent challenges for historic building materials. The combination of salt air, intense UV radiation, high humidity, and driving rain deteriorates traditional construction materials at an accelerated rate. Original lime-based stucco on Mediterranean Revival buildings develops cracking and delamination. Barrel tile roofs lose mortar bonds. Ornamental ironwork corrodes despite previous coatings. Wood elements on Sarasota School buildings suffer from termite damage and moisture-related decay. Our restoration specifications account for these environmental stressors, selecting repair materials that are compatible with original construction while providing improved resistance to Sarasota's demanding climate.
              </p>
              <p>
                The Ringling estate influence on Sarasota's architectural identity extends beyond individual buildings. John and Mable Ringling's Ca d'Zan mansion on Sarasota Bay, built in 1926, established the Venetian Gothic and Mediterranean Revival vocabulary that influenced commercial and residential architecture throughout the city. Understanding this cultural context helps inform restoration decisions, from appropriate color palettes and material textures to the relationship between building design and the lush subtropical landscape that characterizes Sarasota's historic neighborhoods. We approach each restoration project as both a construction challenge and a contribution to preserving Sarasota's distinctive sense of place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Sarasota Historic Restoration Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Every historic restoration follows a documented process from investigation through preservation board approval and construction.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Historic Assessment and Documentation",
                description: "Comprehensive evaluation of the building's historic significance, architectural character, structural condition, and material deterioration. We document existing conditions with detailed photographs and measurements, identify character-defining features that must be preserved, and assess the extent of repair versus replacement needed. For designated properties, this documentation supports the Certificate of Appropriateness application.",
                icon: FileCheck,
              },
              {
                step: "02",
                title: "Restoration Design and Specifications",
                description: "Development of restoration plans and material specifications in coordination with preservation architects and the property owner. We specify period-appropriate materials compatible with original construction, develop repair details for each building element, and prepare cost estimates that reflect the specialized nature of historic restoration work in Sarasota.",
                icon: Building2,
              },
              {
                step: "03",
                title: "Preservation Board and Permitting",
                description: "We manage the Certificate of Appropriateness application to the Sarasota Historic Preservation Board and coordinate building permit applications with the City of Sarasota Building Department in parallel. Our experience with the board's review criteria helps prepare applications that address preservation concerns while achieving the owner's restoration objectives.",
                icon: Briefcase,
              },
              {
                step: "04",
                title: "Restoration Construction",
                description: "Skilled craftsmen execute the restoration using approved plans, period-appropriate materials, and specialized techniques. We maintain strict quality control on material compatibility, detail execution, and finish quality. Historic restoration requires patience and craft skills that we ensure through careful trade selection and direct supervision of all preservation-sensitive work.",
                icon: HardHat,
              },
              {
                step: "05",
                title: "Documentation and Closeout",
                description: "Comprehensive documentation of all restoration work including before, during, and after photographs, material certifications, and as-built records. For properties pursuing tax credits or National Register designation, we provide the construction documentation needed to support those applications. We also provide maintenance recommendations to protect the restoration investment.",
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
        title="Sarasota Historic Restoration FAQ"
        description="Common questions about historic restoration and preservation in Sarasota, Florida."
      />

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <RelatedServices city="Sarasota" currentService="historic-restoration" />
            <NearbyLocations currentCity="Sarasota" service="historic-restoration" serviceName="Historic Restoration" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Preserve Sarasota's Architectural Heritage
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss your historic restoration project in Sarasota. Whether restoring a Mediterranean Revival landmark or preserving a Sarasota School mid-century treasure, we bring the construction expertise and preservation sensitivity this work demands.
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
              <span>Preservation Board Experience</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
