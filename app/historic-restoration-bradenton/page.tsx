import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, Building2, Shield, Award, FileCheck, Landmark, BookOpen, Hammer } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/historic-restoration-bradenton/' },
  title: "Historic Restoration Bradenton | Village of the Arts",
  description: "Historic restoration in Bradenton by Florida Construction Specialists. Village of the Arts Cortez fishing village Old Main Street.",
  openGraph: {
    title: "Historic Restoration Bradenton | Village of the Arts",
    description: "Historic restoration in Bradenton by Florida Construction Specialists. Village of the Arts Cortez fishing village Old Main Street.",
    url: "https://floridaconstructionspecialists.com/historic-restoration-bradenton/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "What makes the Village of the Arts in Bradenton a significant historic restoration market?",
    answer: "The Village of the Arts in downtown Bradenton is a designated historic arts district encompassing approximately 30 blocks of early twentieth century residential and commercial buildings. Many of these structures were built between the 1920s and 1940s during Bradenton's early growth period and feature architectural details from the Mediterranean Revival, Craftsman, and Vernacular Florida styles common to that era. The district has been revitalized as an arts community, with buildings converted to galleries, studios, restaurants, and live-work spaces. Historic restoration in the Village of the Arts must balance preservation of original architectural character with functional upgrades that support contemporary commercial and creative uses. We work with property owners in the district to restore structural integrity, update building systems, and maintain the historic aesthetic that gives the district its character."
  },
  {
    question: "Is the Cortez fishing village a designated historic district with preservation requirements?",
    answer: "Yes, the Cortez community is listed on the National Register of Historic Places as the Cortez Fishing Village Historic District. It is recognized as one of the last working fishing villages on the Gulf Coast of Florida, with structures dating to the late 1800s and early 1900s. The historic district designation does not impose automatic restrictions on private property modifications, but properties seeking historic tax credits or participating in certain grant programs must comply with the Secretary of the Interior's Standards for Rehabilitation. Manatee County has additional overlay zoning for the Cortez area that addresses building scale, setbacks, and design compatibility. We understand these layered requirements and help property owners navigate the distinction between what is required by code and what is recommended for historic preservation purposes."
  },
  {
    question: "What structural challenges are common in Bradenton's historic buildings?",
    answer: "Historic buildings in Bradenton face structural challenges rooted in both their original construction methods and decades of Gulf Coast exposure. Early twentieth century buildings in downtown Bradenton and the Village of the Arts often used unreinforced masonry, wood frame construction with balloon framing, and foundation systems that predate modern engineering standards. These buildings have endured over 50 inches of annual rainfall, high humidity, termite pressure, and periodic hurricane exposure for 80 to 100 years. Common issues include deteriorated wood structural members from moisture and termite damage, cracked or deteriorating masonry, inadequate foundation bearing capacity, and roof systems that do not meet current wind load requirements. Our restoration approach addresses these structural deficiencies while preserving the building's historic character."
  },
  {
    question: "Does FCS coordinate with historic preservation organizations in Bradenton?",
    answer: "Yes, we coordinate with the relevant preservation entities depending on the project's designation and goals. For properties listed on or eligible for the National Register of Historic Places, we work within the Secretary of the Interior's Standards for Rehabilitation when the project involves federal or state historic tax credits. The Manatee County Historical Resources Department provides guidance on locally significant properties. For projects in the Cortez Historic District, we coordinate with the Florida Division of Historical Resources as needed. Our role is to translate preservation standards into practical construction approaches, ensuring that the restoration work meets both historic preservation objectives and current Florida Building Code requirements."
  },
  {
    question: "How does the Florida Building Code apply to historic building restoration in Bradenton?",
    answer: "Florida has a Historic Building provision in the Florida Building Code that provides some flexibility for buildings designated as historic. This provision allows alternative compliance methods that recognize the unique characteristics of historic structures, such as allowing existing structural systems to remain when they can be demonstrated to perform adequately rather than requiring full compliance with current standards designed for new construction. However, life safety requirements including fire protection, egress, and accessibility generally must be addressed. We use the historic building code provisions to develop restoration approaches that preserve character-defining features while bringing buildings up to an acceptable level of safety and functionality. Each Bradenton historic project requires a specific code analysis to determine which provisions apply."
  },
  {
    question: "What is the cost range for historic restoration projects in Bradenton?",
    answer: "Historic restoration costs in Bradenton vary widely based on building size, condition, the degree of structural work required, and the level of historic character preservation desired. Basic structural stabilization and weatherproofing of a small Village of the Arts building might cost one hundred fifty thousand to three hundred thousand dollars. Comprehensive restoration of a larger commercial building in downtown Bradenton, including structural rehabilitation, building system upgrades, interior restoration, and exterior facade preservation, typically ranges from five hundred thousand to several million dollars. Cortez fishing village buildings present unique cost considerations due to their waterfront location, original timber construction, and the need for marine-grade materials in the restoration. Historic tax credits, when available, can offset 20 to 25 percent of qualified rehabilitation expenditures."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Historic Restoration", href: "/services/historic-restoration/" },
  { name: "Bradenton", href: "/historic-restoration-bradenton/" },
];

export default function HistoricRestorationBradentonPage() {
  return (
    <>
      <LocalBusinessSchema city="Bradenton" service="Historic Restoration" />
      <ServiceSchema
        serviceName="Historic Restoration"
        serviceDescription="Historic restoration in Bradenton, FL. Village of the Arts, Cortez fishing village, downtown Bradenton historic buildings, Old Main Street restoration. Licensed CBC1262722, 40+ years experience."
        city="Bradenton"
        minPrice="150000"
        serviceCategories={["Historic Building Restoration", "Structural Rehabilitation", "Facade Preservation", "Adaptive Reuse", "Historic Tax Credit Projects"]}
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
              <span className="text-brand-gold font-semibold">Serving Bradenton & Manatee County</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Historic Restoration in Bradenton, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Bradenton preserves two of Florida's most distinctive historic districts: the Village of the Arts, a creative reuse neighborhood of early twentieth century buildings, and the Cortez fishing village, one of the last working fishing communities on the Gulf Coast. Florida Construction Specialists restores these irreplaceable buildings with construction methods that honor their original character while addressing a century of Gulf Coast weathering, structural aging, and evolving code requirements.
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

      {/* Bradenton Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Bradenton's Historic Building Legacy: Arts Districts, Fishing Villages, and Downtown Heritage
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Bradenton's historic building stock tells the story of a Gulf Coast community that evolved from a frontier fishing and agricultural settlement into the seat of Manatee County. Unlike many Florida cities where mid-century development erased earlier architecture, Bradenton has preserved notable concentrations of pre-World War II buildings in distinct neighborhoods, each with its own architectural character and preservation considerations.
              </p>
              <p className="mb-6">
                The Village of the Arts, located in downtown Bradenton between 9th Street West and 14th Street West, contains dozens of buildings from the 1920s through 1940s that have been adapted into galleries, artist studios, restaurants, and live-work spaces. The district's character comes from its collection of modest but architecturally significant structures, including Craftsman bungalows, Mediterranean Revival commercial buildings, and Vernacular Florida structures that reflect Bradenton's pre-air-conditioning architectural traditions with deep porches, high ceilings, and natural ventilation design. Restoration in the Village of the Arts must preserve these character-defining features while upgrading structural, electrical, and plumbing systems that are 80 to 100 years old.
              </p>
              <p className="mb-6">
                The Cortez fishing village, located on the southern approach to Anna Maria Island, presents a fundamentally different preservation challenge. Listed on the National Register of Historic Places, Cortez contains working waterfront structures, fish houses, net-making buildings, and residences that date to the community's founding in the late 1800s. These buildings were constructed by fishermen using local materials and traditional techniques, resulting in structures of genuine historical significance that also face the most aggressive environmental exposure in the Bradenton area. Salt spray, tidal flooding, hurricane wind, and marine organism damage create preservation challenges that require both historic sensitivity and practical construction expertise.
              </p>
              <p>
                Downtown Bradenton's Old Main Street corridor and the surrounding blocks contain early commercial buildings, government structures, and civic architecture from the early to mid twentieth century. As the downtown revitalization centered on the Riverwalk continues to attract investment, these buildings are being restored and adapted for contemporary commercial use. The challenge for downtown Bradenton historic restoration is integrating modern commercial functionality, including HVAC, IT infrastructure, accessibility, and fire suppression, into buildings that were designed before any of these systems existed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/historic-preservation/historic-preservation-display.webp"
        alt="Historic building restoration in Bradenton, Florida"
        title="Preserving Bradenton's Architectural Heritage"
        subtitle="Village of the Arts, Cortez fishing village, and downtown historic buildings restored with care"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Historic Restoration Services for Bradenton's Irreplaceable Buildings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Each historic building in Bradenton presents unique challenges. Our restoration services address both the preservation of historic character and the practical requirements of modern use.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Landmark,
                title: "Structural Rehabilitation",
                description: "Assessment and repair of deteriorated structural systems in Bradenton's historic buildings. This includes wood framing restoration in Village of the Arts bungalows, masonry rehabilitation in downtown commercial buildings, and timber structure repair in Cortez waterfront buildings. We use methods compatible with original construction while improving structural capacity to meet current load and wind requirements."
              },
              {
                icon: Building2,
                title: "Facade Restoration",
                description: "Preservation and repair of exterior facades that define Bradenton's historic streetscapes. We restore original masonry, repair or replicate historic stucco finishes, rebuild deteriorated wood trim and millwork, and repair or replace windows with units that match the original profiles. For the Village of the Arts, facade restoration maintains the cohesive streetscape character that gives the district its identity."
              },
              {
                icon: Hammer,
                title: "Adaptive Reuse",
                description: "Converting historic Bradenton buildings to new uses while preserving their architectural character. The Village of the Arts thrives on adaptive reuse, with former residences serving as galleries and restaurants. Downtown commercial buildings are being adapted for contemporary office and retail use. We integrate modern building systems, accessibility features, and code compliance into historic structures without destroying the elements that make them significant."
              },
              {
                icon: Shield,
                title: "Waterfront Structure Preservation",
                description: "Specialized restoration for Cortez fishing village structures and other Bradenton waterfront historic buildings. Marine environment exposure demands specific material selections, corrosion protection, and structural approaches different from inland buildings. We use marine-grade fasteners, treated timber, and protective coatings designed for saltwater exposure while maintaining the authentic character of these working waterfront structures."
              },
              {
                icon: FileCheck,
                title: "Historic Tax Credit Projects",
                description: "Management of restoration projects qualifying for federal and state historic tax credits. The 20 percent federal rehabilitation tax credit and Florida's historic preservation tax incentives can significantly offset restoration costs for qualifying Bradenton properties. We execute restoration work in compliance with the Secretary of the Interior's Standards for Rehabilitation and coordinate documentation for tax credit certification."
              },
              {
                icon: BookOpen,
                title: "Building System Upgrades",
                description: "Integration of modern electrical, plumbing, HVAC, and fire protection systems into historic Bradenton buildings. These systems must be routed and installed in ways that do not destroy character-defining features such as original plaster walls, wood floors, decorative trim, and structural elements. We design system routing that uses concealed paths, minimizes visual impact, and maintains the historic integrity required for tax credit eligibility."
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
              Navigating Bradenton's Historic Preservation Landscape
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Historic restoration in Bradenton involves navigating a layered regulatory and permitting environment. Standard building permits go through the <a href="https://www.bradentonfl.gov/217/Building" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of Bradenton Building Division</a> for properties within city limits or the <a href="https://www.mymanatee.org/departments/building_and_development_services" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">Manatee County Building and Development Services</a> for unincorporated areas. Properties in the Cortez Historic District may have additional review requirements through county historic preservation overlay zoning. Projects pursuing historic tax credits add federal and state review processes through the National Park Service and the Florida Division of Historical Resources.
              </p>
              <p className="mb-6">
                The Florida Building Code's historic building provisions offer important flexibility for restoration work. Qualifying historic buildings can use alternative compliance methods that preserve character-defining features while achieving acceptable safety levels. This is particularly important for Bradenton's older buildings, where strict application of current code requirements for new construction would often require destroying the very features that give a building its historic significance. We work with building officials to apply these provisions appropriately, documenting how alternative approaches meet the code's intent while preserving historic character.
              </p>
              <p className="mb-6">
                Gulf Coast weather is the primary adversary of Bradenton's historic buildings. Over 50 inches of annual rainfall, sustained high humidity, intense UV exposure, termite pressure, and periodic hurricane events have been working against these structures for 80 to 100 years. The Village of the Arts' wood frame buildings are particularly vulnerable to moisture infiltration and termite damage. Cortez waterfront structures face additional salt spray and tidal exposure. Downtown masonry buildings show deterioration from moisture-driven efflorescence, mortar joint failure, and spalling of early Portland cement stucco finishes. Understanding these deterioration patterns specific to Bradenton's historic building types allows us to focus restoration work on the conditions that cause the most damage.
              </p>
              <p>
                Our approach to Bradenton historic restoration recognizes that each building is a unique combination of original construction methods, accumulated alterations, environmental exposure history, and current condition. There is no template for this work. A Cortez fish house requires fundamentally different restoration techniques than a Village of the Arts gallery space. A downtown masonry commercial building has different structural concerns than a wood-frame Craftsman bungalow. We evaluate each building individually and develop restoration approaches specific to what that building needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Bradenton Historic Restoration Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Historic restoration requires a careful, methodical process that investigates before it intervenes and preserves before it replaces.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Historic Assessment and Documentation",
                description: "We conduct a thorough assessment of the building's current condition, original construction methods, previous alterations, and character-defining features. For Bradenton properties pursuing tax credits, this assessment includes photographic documentation meeting National Park Service standards. The assessment identifies structural deficiencies, deterioration patterns, and code compliance issues that the restoration must address.",
                icon: BookOpen,
              },
              {
                step: "02",
                title: "Restoration Design and Regulatory Coordination",
                description: "Working with architects experienced in historic preservation, we develop restoration plans that address structural, building system, and envelope needs while preserving historic character. For tax credit projects, plans must demonstrate compliance with the Secretary of the Interior's Standards. We coordinate with the City of Bradenton or Manatee County for building permits and with preservation agencies for any required historic reviews.",
                icon: FileCheck,
              },
              {
                step: "03",
                title: "Selective Demolition and Discovery",
                description: "Historic restoration often reveals conditions not visible during assessment. We perform selective demolition carefully, documenting concealed conditions as they are exposed. In Bradenton's older buildings, this frequently reveals previous alterations, concealed structural modifications, termite damage to framing, and moisture damage to sheathing. We adjust the restoration scope based on actual conditions rather than assumptions.",
                icon: Hammer,
              },
              {
                step: "04",
                title: "Restoration Construction",
                description: "Experienced crews execute structural repairs, facade restoration, building system installation, and interior restoration following the approved plans. For Bradenton historic buildings, this includes using compatible materials and techniques: lime-based mortars for historic masonry, species-matched wood for structural repairs, and period-appropriate finishes. Quality control at every stage ensures the restoration meets both preservation standards and building code requirements.",
                icon: Building2,
              },
              {
                step: "05",
                title: "Completion and Certification",
                description: "Final inspections from the building department, completion photography for tax credit certification, and comprehensive documentation of all work performed. We deliver a complete record of the restoration including before, during, and after photographs, materials specifications, and maintenance recommendations specific to preserving the restored building in Bradenton's Gulf Coast environment.",
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
        title="Bradenton Historic Restoration FAQ"
        description="Common questions about historic building restoration in Bradenton and Manatee County, Florida."
      />

      {/* Internal Links */}
      <RelatedServiceLocations currentCity="Bradenton" currentService="historic-restoration" currentServiceName="Historic Restoration" />

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Restore Your Bradenton Historic Building
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss your historic restoration project in Bradenton. Whether it is a Village of the Arts building, a Cortez waterfront structure, or a downtown commercial property, we will assess the building and develop a restoration approach that preserves its character.
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
