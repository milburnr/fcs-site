import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, CheckCircle, Building2, Shield, Award, Landmark, BookOpen, Palette, History, FileCheck, Scale } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";
import { BUSINESS_INFO } from "@/lib/constants";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/historic-restoration-tampa/' },
  title: "Historic Restoration Tampa FL | Ybor City & Hyde Park",
  description: "Historic building restoration in Tampa. Ybor City National Historic District, Hyde Park, Tampa Heights preservation. Secretary of Interior standards.",
  openGraph: {
    title: "Historic Restoration Tampa FL | Ybor City & Hyde Park",
    description: "Historic building restoration in Tampa. Ybor City National Historic District, Hyde Park, Tampa Heights preservation. Secretary of Interior standards.",
    url: "https://floridaconstructionspecialists.com/historic-restoration-tampa/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "What historic districts in Tampa require special construction review for restoration work?",
    answer: "Tampa has two formally designated historic districts with architectural review requirements. Ybor City's National Historic Landmark District, listed on the National Register of Historic Places in 1990, is overseen by the Barrio Latino Commission which reviews exterior alterations, additions, new construction, and demolition within the district boundaries. The Hyde Park Historic District, also on the National Register, is reviewed by the City of Tampa's Architectural Review Commission. Both districts require a Certificate of Appropriateness for exterior work that affects the historic character of buildings. Additionally, individual Tampa properties listed on the National Register or designated as local landmarks outside these districts may have their own protection requirements."
  },
  {
    question: "How does FCS approach restoration of the historic cigar factory buildings in Ybor City?",
    answer: "Ybor City's cigar factory buildings present unique restoration challenges because of their distinctive brick and masonry construction, industrial-scale floor plates, and the specific preservation requirements of the National Historic Landmark designation. Our approach begins with thorough documentation of existing conditions, including masonry analysis, structural assessment of the heavy timber and masonry bearing wall systems, and identification of character-defining features that must be preserved. We have experience with repointing historic brick using compatible lime-based mortars, restoring cast iron and steel structural elements, rehabilitating original windows where possible, and integrating modern building systems without compromising the architectural integrity that earned these buildings their landmark status."
  },
  {
    question: "Can modern building systems be integrated into Tampa historic buildings without compromising their character?",
    answer: "Yes, and this integration is one of the most important skills in historic restoration. Tampa's historic buildings require modern HVAC, electrical, plumbing, fire suppression, and accessibility systems to function as contemporary commercial or residential spaces. The key is routing these systems through the building in ways that are concealed or minimally visible, using existing chases, closets, and service corridors wherever possible. For Ybor City's brick industrial buildings, we often route HVAC ductwork through floor cavities and use mini-split systems that minimize visible penetrations. In Hyde Park's wood-frame residential structures, we integrate systems within wall cavities and attic spaces. The Secretary of the Interior's Standards provide the framework we follow for all systems integration."
  },
  {
    question: "What are the Secretary of the Interior's Standards and how do they affect Tampa restoration projects?",
    answer: "The Secretary of the Interior's Standards for the Treatment of Historic Properties are the nationally recognized guidelines for historic preservation work. They establish four treatment approaches: preservation, rehabilitation, restoration, and reconstruction. For most Tampa commercial historic restoration projects, rehabilitation is the most common treatment, which allows adapting a building for new use while preserving the character-defining features and historical significance. These standards are particularly important in Tampa when projects involve federal historic preservation tax credits, which require that all work comply with the Standards as reviewed by the National Park Service. We are experienced in documenting compliance with these standards throughout the construction process."
  },
  {
    question: "Does Tampa offer any financial incentives for historic building restoration?",
    answer: "Several incentive programs can offset the costs of historic restoration in Tampa. The Federal Historic Preservation Tax Credit provides a 20 percent tax credit for qualified rehabilitation expenses on income-producing properties listed on the National Register of Historic Places, which includes buildings in both Ybor City and Hyde Park. Florida offers an ad valorem tax exemption for improvements to historically designated properties, which can significantly reduce property taxes during the exemption period. The City of Tampa has periodically offered grants and incentives through its historic preservation programs, particularly for properties in designated historic districts. We work with property owners and their tax advisors to identify applicable incentives before construction begins, as some programs have specific application requirements that must be met during the planning phase."
  },
  {
    question: "How long does a typical historic restoration project take in Tampa compared to conventional construction?",
    answer: "Historic restoration in Tampa generally takes 20 to 40 percent longer than conventional construction of comparable scope, primarily due to the additional review processes, specialized materials, and careful construction methods required. The Certificate of Appropriateness process through the Barrio Latino Commission for Ybor City projects or the Architectural Review Commission for Hyde Park projects adds 4 to 8 weeks before construction can begin. During construction, work proceeds more slowly because of the need to preserve existing fabric, use compatible repair materials that may require longer cure times, and perform careful selective demolition. A moderate commercial restoration project in Ybor City might take 8 to 14 months compared to 6 to 10 months for similar-scale new commercial construction. We build these timelines into every historic project schedule so clients have realistic expectations."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Historic Restoration", href: "/services/historic-restoration/" },
  { name: "Tampa", href: "/historic-restoration-tampa/" },
];

export default function HistoricRestorationTampaPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Historic Restoration" />
      <ServiceSchema
        serviceName="Historic Restoration"
        serviceDescription="Historic building restoration in Tampa, FL. Ybor City National Historic District, Hyde Park, Tampa Heights. Secretary of Interior Standards compliance. Licensed CBC1262722."
        city="Tampa"
        serviceCategories={["Historic Building Restoration", "Ybor City Preservation", "Hyde Park Restoration", "Adaptive Reuse", "Historic Tax Credit Projects"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/tampa-historic-building-restoration/tampa-historic-building-restoration-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Tampa, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Historic Restoration in Tampa, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              From the cigar factory buildings of Ybor City's National Historic Landmark District to the elegant bungalows and colonial revivals of Hyde Park, Tampa possesses a rich architectural heritage that deserves preservation. Florida Construction Specialists provides historic restoration services that honor the craftsmanship of the past while meeting the demands of modern use.
            </p>

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
                <Landmark className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">Historic Preservation Specialists</span>
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

      {/* Tampa Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Preserving Tampa's Architectural Identity in an Era of Rapid Growth
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Tampa's rapid development has made its historic buildings more valuable and more vulnerable at the same time. As new construction transforms the skyline along the waterfront and through emerging neighborhoods, the historic structures in Ybor City, Hyde Park, Tampa Heights, and Seminole Heights represent irreplaceable connections to the city's past. These buildings tell the story of Tampa's cigar industry, its early twentieth-century boom, and the diverse communities that built the city. Once demolished or poorly renovated, that story is lost permanently.
              </p>
              <p className="mb-6">
                Ybor City stands as Tampa's crown jewel of historic architecture. Designated a National Historic Landmark District in 1990, it contains some of the finest examples of industrial and commercial architecture from Tampa's cigar manufacturing era. The massive brick cigar factories along Seventh Avenue, the casitas (worker cottages) that lined the residential streets, the mutual aid society buildings that served immigrant communities from Cuba, Italy, and Spain -- these structures represent an architectural legacy that exists nowhere else in the United States. Restoration of these buildings requires understanding their unique construction methods, original materials, and the specific preservation standards enforced by the Barrio Latino Commission.
              </p>
              <p className="mb-6">
                Hyde Park, Tampa's first planned suburban development from the late 1800s, presents a different but equally important preservation challenge. The district's collection of bungalows, colonial revival homes, Mediterranean revival residences, and small commercial buildings reflects Tampa's residential evolution from the Victorian era through the 1930s. The Architectural Review Commission oversees alterations within the Hyde Park Historic District, requiring that exterior changes maintain the neighborhood's established architectural character. Commercial restoration projects in Hyde Park's village area along Snow Avenue and Swann Avenue must balance the demands of modern retail and restaurant use with the residential-scale character that defines the district.
              </p>
              <p>
                Beyond the two designated districts, Tampa contains hundreds of individually significant historic buildings. The Tampa Heights neighborhood, one of the city's oldest residential areas, has seen increasing restoration activity as the neighborhood revitalizes. Seminole Heights contains early twentieth-century bungalows and commercial buildings along the Central Avenue corridor. West Tampa, historically an independent municipality before annexation, retains cigar-era commercial buildings along Main Street. Each of these areas requires restoration approaches tailored to the specific building types, construction methods, and historical significance of the structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/tampa-historic-building-restoration/tampa-historic-building-restoration-small.webp"
        alt="Historic building restoration in Tampa's Ybor City district"
        title="Honoring Tampa's Architectural Heritage"
        subtitle="Expert restoration of Ybor City, Hyde Park, and Tampa Heights historic buildings"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Historic Restoration Services for Tampa's Heritage Buildings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Every historic building tells a unique story. Our restoration approach preserves that story while preparing the building for its next chapter.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Landmark,
                title: "Masonry and Brick Restoration",
                description: "Repointing, brick replacement, and structural repair of historic masonry walls using compatible lime-based mortars and salvaged or custom-matched brick. Essential for Ybor City's cigar factory buildings where the brick masonry is a primary character-defining feature."
              },
              {
                icon: History,
                title: "Adaptive Reuse Construction",
                description: "Converting historic Tampa buildings for new commercial, residential, or mixed uses while preserving their historic character. From Ybor City factory-to-loft conversions to Hyde Park residential-to-retail adaptations, we manage the complex intersection of preservation and modern functionality."
              },
              {
                icon: Palette,
                title: "Exterior Restoration and Finishes",
                description: "Historic window repair and restoration, period-appropriate paint systems, ornamental metalwork repair, terra cotta and stucco restoration, and exterior trim rehabilitation. We match original materials and methods while meeting current performance standards."
              },
              {
                icon: FileCheck,
                title: "Preservation Board Navigation",
                description: "Complete management of the Certificate of Appropriateness process through the Barrio Latino Commission for Ybor City projects and the Architectural Review Commission for Hyde Park projects. We prepare applications, present at hearings, and ensure approved work matches board expectations."
              },
              {
                icon: Scale,
                title: "Historic Tax Credit Projects",
                description: "Construction management for projects utilizing the 20 percent Federal Historic Preservation Tax Credit. We maintain the documentation, quality standards, and NPS compliance required to qualify for and retain these valuable credits throughout the construction process."
              },
              {
                icon: BookOpen,
                title: "Structural Stabilization",
                description: "Assessment and repair of compromised structural systems in historic Tampa buildings, including heavy timber framing, masonry bearing walls, cast iron columns, and early concrete systems. We stabilize structures using methods that preserve original materials and construction evidence."
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

      {/* Local Expertise */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Navigating Tampa's Historic Preservation Landscape
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Historic restoration in Tampa requires navigating a preservation framework that includes local, state, and federal review depending on the property and the scope of work. The <a href="https://www.tampa.gov/building-services" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of Tampa Building Services Department</a> handles building permits for restoration work, but the historic review process adds an additional layer that must be completed before permits can be issued.
              </p>
              <p className="mb-6">
                In Ybor City, the Barrio Latino Commission meets monthly to review proposed work within the National Historic Landmark District. The commission evaluates projects against the Ybor City Design Guidelines, which specify acceptable materials, methods, and design approaches for different building types within the district. Commercial restoration projects on Seventh Avenue, the district's main commercial corridor, receive particular scrutiny because of the avenue's prominence. We prepare detailed presentations for commission meetings that demonstrate how our restoration approach preserves character-defining features while accommodating the proposed use.
              </p>
              <p className="mb-6">
                Tampa's subtropical climate creates specific preservation challenges that affect historic buildings differently than those in more temperate regions. The combination of over 50 inches of annual rainfall, intense UV exposure, high humidity, and salt air from Tampa Bay accelerates deterioration of historic materials. Wood elements experience fungal decay and termite damage. Historic brick suffers from moisture-related spalling and efflorescence. Original lime mortars erode from rainwater exposure. Metal ornamental features rust from the salt-laden atmosphere. Our restoration specifications account for these environmental stresses, selecting repair materials and protective coatings that extend the service life of restored elements in Tampa's demanding climate.
              </p>
              <p>
                The Tampa Heights neighborhood, while not a designated historic district, contains a concentration of early twentieth-century houses and commercial buildings that property owners are increasingly restoring. The area's revitalization, driven by its proximity to the Riverwalk and growing downtown, has created a market for high-quality residential and commercial restoration. Seminole Heights similarly supports a growing restoration community focused on its collection of bungalow-era homes along tree-lined streets. These neighborhoods, outside the formal historic district framework, offer more flexibility in restoration approach while still demanding the craftsmanship and material knowledge that historic buildings require.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Tampa Historic Restoration Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            A methodical approach that respects the building's history while delivering a functional, code-compliant result.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Historic Assessment and Documentation",
                description: "Comprehensive documentation of the building's existing conditions, construction history, and character-defining features. For properties in Ybor City or Hyde Park, we also research the specific design guidelines and any previous preservation board actions that affect the property. This assessment guides every subsequent decision."
              },
              {
                step: "02",
                title: "Preservation Board Review",
                description: "Preparation and submission of Certificate of Appropriateness applications to the Barrio Latino Commission for Ybor City or the Architectural Review Commission for Hyde Park. We develop detailed plans and material specifications that demonstrate compliance with district guidelines, and we present at board meetings to answer questions and address concerns."
              },
              {
                step: "03",
                title: "Construction Documentation and Permitting",
                description: "Full construction drawings and specifications that translate the preservation board's approvals into buildable documents. We submit for building permits through the City of Tampa Building Services Department, coordinating any required structural, mechanical, or electrical engineering. For tax credit projects, we begin the NPS Part 2 application during this phase."
              },
              {
                step: "04",
                title: "Restoration Construction",
                description: "Careful construction execution using craftspeople experienced in historic materials and methods. We perform selective demolition with attention to preserving original fabric, use compatible repair materials specified to match the building's existing construction, and integrate modern systems with minimal visual impact on historic spaces."
              },
              {
                step: "05",
                title: "Documentation and Certification",
                description: "Complete documentation of all restoration work for the property owner's records, including before-and-after photography, material specifications, and maintenance recommendations. For tax credit projects, we compile the NPS Part 3 documentation that demonstrates completed work complies with the Secretary of the Interior's Standards."
              }
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
        title="Tampa Historic Restoration FAQ"
        description="Frequently asked questions about historic building restoration in Tampa, Florida."
      />

      {/* Internal Links */}
      <RelatedServiceLocations currentCity="Tampa" currentService="historic-restoration" currentServiceName="Historic Restoration" />

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Preserve Tampa's Architectural Heritage
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you own a cigar factory building in Ybor City, a bungalow in Hyde Park, or a historic commercial property in Tampa Heights, Florida Construction Specialists has the preservation expertise to restore it properly.
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
              <span>Secretary of Interior Standards</span>
              <span>{BUSINESS_INFO.yearsInBusiness}+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>
    <RelatedArticles pageSlug="historic-restoration-tampa" />
    </>
  );
}
