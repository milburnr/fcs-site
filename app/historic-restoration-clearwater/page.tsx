import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, Building2, Shield, Award, FileCheck, HardHat, Briefcase, BookOpen } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";
import { BUSINESS_INFO } from "@/lib/constants";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/historic-restoration-clearwater/' },
  title: "Historic Restoration Clearwater | Preservation",
  description: "Historic restoration in Clearwater by Florida Construction Specialists. Harbor Oaks historic homes downtown older buildings.",
  openGraph: {
    title: "Historic Restoration Clearwater | Preservation",
    description: "Historic restoration in Clearwater by Florida Construction Specialists. Harbor Oaks historic homes downtown older buildings.",
    url: "https://floridaconstructionspecialists.com/historic-restoration-clearwater/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "Does Clearwater have officially designated historic districts?",
    answer: "Clearwater does not have the large formally designated historic districts found in cities like Tampa's Ybor City or St. Petersburg's Old Northeast. However, several Clearwater neighborhoods contain significant concentrations of historically and architecturally notable structures. The Harbor Oaks neighborhood features Mediterranean Revival and Colonial Revival homes from the 1920s and 1930s. Downtown Clearwater retains commercial buildings from the early to mid-twentieth century that contribute to the city's character. The Clearwater Garden Club and the Plumb House are among the individually recognized heritage structures. Restoration work on these older buildings requires sensitivity to original architectural character even when formal historic designation and preservation board oversight are not in place."
  },
  {
    question: "What types of older buildings in Clearwater typically need restoration?",
    answer: "Clearwater's restoration needs span several categories. Pre-war residential estates in Harbor Oaks and adjacent neighborhoods require foundation stabilization, wood structure repair, period window restoration, and exterior material conservation. Mid-century commercial buildings in downtown Clearwater need facade restoration, structural reinforcement, and interior modernization that preserves their architectural identity. Early Clearwater Beach development from the 1950s and 1960s, including some of the original motels and small commercial buildings that predate the modern resort development, present adaptive reuse opportunities where the original character can be preserved while bringing buildings to current code compliance."
  },
  {
    question: "How does Clearwater's coastal environment affect historic building materials?",
    answer: "Clearwater's proximity to the Gulf creates a salt-laden, high-humidity environment that is particularly destructive to the materials used in older construction. Original wood framing, siding, and trim deteriorate faster than in inland locations due to constant moisture cycling and salt exposure. Masonry and stucco develop efflorescence and spalling from salt crystallization within the porous materials. Original metal hardware, hinges, and decorative elements corrode more aggressively than they would even a few miles inland. Historic restoration in Clearwater must address these material-specific deterioration patterns using repair techniques and replacement materials that maintain period authenticity while improving resistance to the coastal environment."
  },
  {
    question: "Can older Clearwater buildings be modernized while preserving their character?",
    answer: "Yes, and this is where experienced restoration contractors add the most value. Modernization of older Clearwater buildings typically involves upgrading electrical and plumbing systems concealed within original wall and floor cavities, adding hurricane-resistant features without altering exterior appearance, improving energy efficiency through interior-side insulation and upgraded HVAC systems, and making accessibility improvements that work within existing floor plans. The goal is to bring the building to modern performance standards while preserving the architectural elements that define its character. In Harbor Oaks, for example, this might mean installing impact-rated windows that replicate the original muntin patterns, or reinforcing a period roof structure to meet current wind load requirements without changing the roofline."
  },
  {
    question: "What foundation challenges do older Clearwater buildings face?",
    answer: "Many of Clearwater's older buildings were constructed on foundation systems that predate modern understanding of Pinellas County's soil and water table conditions. Pier and beam foundations common in pre-1960s construction can settle unevenly as the sandy soil shifts, particularly in areas near the Intracoastal Waterway or in lower-lying neighborhoods where the water table is high. Concrete block foundations from the mid-century era may show deterioration from moisture wicking and salt exposure. Our restoration approach includes thorough foundation assessment, stabilization through underpinning or helical pier systems where needed, and moisture management improvements that protect the foundation from further deterioration in Clearwater's coastal environment."
  },
  {
    question: "Does FCS handle adaptive reuse of older commercial buildings in Clearwater?",
    answer: "Yes, adaptive reuse is an important part of our Clearwater restoration work. Downtown Clearwater contains commercial buildings from the mid-twentieth century that retain sound structural bones but no longer serve their original purpose. Converting these structures for contemporary commercial, mixed-use, or residential purposes preserves the buildings' contribution to Clearwater's character while creating economically viable properties. Adaptive reuse projects require structural assessment and reinforcement, building code compliance upgrades for the new use, and careful integration of modern building systems within the existing structure. We bring both the restoration sensitivity and the commercial construction capability needed for these complex projects."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Historic Restoration", href: "/historic-restoration/" },
  { name: "Clearwater", href: "/historic-restoration-clearwater/" },
];

export default function HistoricRestorationClearwaterPage() {
  return (
    <>
      <LocalBusinessSchema city="Clearwater" service="Historic Restoration" />
      <ServiceSchema
        serviceName="Historic Restoration"
        serviceDescription="Historic restoration and heritage building preservation in Clearwater, FL. Harbor Oaks homes, downtown commercial buildings, period-appropriate renovation. Licensed CBC1262722, 40+ years experience."
        city="Clearwater"
        minPrice="100000"
        serviceCategories={["Historic Home Restoration", "Heritage Building Preservation", "Adaptive Reuse", "Period-Appropriate Renovation", "Foundation Stabilization"]}
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
              <span className="text-brand-gold font-semibold">Serving Clearwater, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Historic Restoration in Clearwater, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Clearwater's older neighborhoods and downtown commercial buildings represent decades of architectural heritage that predates the city's modern beach tourism identity. From the Mediterranean Revival estates of Harbor Oaks to the mid-century commercial buildings of downtown Clearwater, Florida Construction Specialists brings restoration expertise that preserves architectural character while meeting modern building performance standards in a demanding coastal environment.
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

      {/* Clearwater Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Preserving Clearwater's Pre-Tourism Architectural Heritage
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Before Clearwater Beach became one of America's most celebrated tourist destinations, Clearwater was a Florida Gulf Coast community with a rich built environment shaped by early twentieth-century development patterns. The Harbor Oaks neighborhood, developed in the 1920s during Florida's first real estate boom, features substantial residential estates in Mediterranean Revival, Colonial Revival, and early Florida vernacular styles. These homes, with their original tile roofs, stucco facades, arched entryways, and mature landscaping, represent some of the finest pre-war residential architecture in Pinellas County.
              </p>
              <p className="mb-6">
                Downtown Clearwater retains a collection of commercial and civic buildings from the early to mid-twentieth century. While much of downtown has been redeveloped, remaining older structures along Cleveland Street, Fort Harrison Avenue, and adjacent blocks provide architectural anchors that connect present-day Clearwater to its history. These buildings present restoration opportunities for owners who recognize the value of preserving their character while adapting them for contemporary commercial uses.
              </p>
              <p className="mb-6">
                The challenge of historic restoration in Clearwater is compounded by the coastal environment. Pinellas County's Gulf proximity subjects older buildings to salt air exposure, elevated humidity, intense UV radiation, and hurricane-force wind events that inland historic structures do not face. Original building materials, whether wood framing, clay tile, lime-based stucco, or decorative metalwork, deteriorate under these conditions in ways that require specialized repair knowledge. Generic renovation approaches that substitute modern materials without understanding the original building system often create moisture problems, aesthetic mismatches, and accelerated deterioration.
              </p>
              <p>
                Florida Construction Specialists approaches Clearwater historic restoration with respect for original craftsmanship and realistic understanding of the coastal environment's demands. We assess each building's condition comprehensively, develop restoration plans that address structural, envelope, and aesthetic concerns, and execute repairs using period-appropriate techniques supplemented by modern performance enhancements where they can be integrated without compromising architectural character.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/historic-preservation/historic-preservation-display.webp"
        alt="Historic building restoration and preservation in Clearwater"
        title="Clearwater Historic Preservation"
        subtitle="Restoring Harbor Oaks estates, downtown heritage buildings, and Clearwater's pre-tourism architectural identity"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Historic Restoration Capabilities for Clearwater's Heritage Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Comprehensive restoration services that preserve Clearwater's architectural heritage while addressing the realities of coastal climate and modern building codes.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Period-Appropriate Restoration",
                description: "Restoration of original architectural elements using techniques and materials consistent with the building's era. Mediterranean Revival tile roofs, original stucco systems, wood window restoration, decorative metalwork conservation, and masonry repair for Harbor Oaks estates and downtown Clearwater heritage buildings."
              },
              {
                icon: Building2,
                title: "Structural Stabilization",
                description: "Foundation assessment and repair for Clearwater's older buildings, many of which sit on pre-modern foundation systems in sandy, high-water-table soil. Underpinning, helical pier installation, framing reinforcement, and structural member replacement that stabilizes the building without altering its architectural character."
              },
              {
                icon: Shield,
                title: "Coastal Resilience Upgrades",
                description: "Integration of hurricane resistance and moisture protection into older Clearwater buildings. Impact-rated windows that replicate original profiles, concealed structural reinforcement for wind loads, improved roof tie-downs, and waterproofing systems compatible with original construction materials."
              },
              {
                icon: HardHat,
                title: "Exterior Envelope Restoration",
                description: "Comprehensive exterior restoration addressing salt air damage to stucco, wood, masonry, and metal elements. Original material repair where feasible, period-appropriate replacement where necessary, and protective coating systems that extend material life in Clearwater's Gulf Coast environment."
              },
              {
                icon: Briefcase,
                title: "Adaptive Reuse",
                description: "Conversion of older Clearwater buildings for contemporary uses while preserving architectural character. Downtown commercial buildings adapted for modern office, retail, or mixed-use. Residential properties converted for professional use. Code compliance integration that respects the building's original design."
              },
              {
                icon: FileCheck,
                title: "Systems Modernization",
                description: "Discreet integration of modern electrical, plumbing, HVAC, and fire protection systems within older building structures. Concealed routing that avoids disturbing original finishes, energy efficiency improvements, and technology infrastructure added without compromising period character."
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
              Understanding Clearwater's Older Building Stock and Restoration Needs
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Successful restoration of older Clearwater buildings requires understanding both the original construction methods and the specific deterioration patterns caused by decades of Gulf Coast exposure. A Harbor Oaks home built in 1926 uses construction techniques and material systems fundamentally different from modern building practices, and restoration approaches must work with these original systems rather than against them.
              </p>
              <p className="mb-6">
                The <a href="https://www.clearwater-fl.com/gov/depts/pwa/ds/" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of Clearwater Development Services Department</a> requires permits for restoration work that involves structural modifications, electrical or plumbing system changes, and exterior alterations. While Clearwater does not have the formal historic preservation board oversight found in Tampa's Ybor City or St. Petersburg's historic districts, the city's building code requirements still apply, and bringing older buildings into compliance with current standards requires careful planning that balances code requirements with preservation objectives.
              </p>
              <p className="mb-6">
                Clearwater's climate creates specific material challenges for restoration work. The original lime-based stucco systems used on 1920s Mediterranean Revival buildings breathe differently than modern Portland cement stucco, and patching with incompatible modern stucco creates moisture trapping that accelerates underlying deterioration. Original clay barrel tile roofs require careful repair with salvaged or reproduction tiles that match the original profiles. Wood windows and trim, exposed to Clearwater's salt air for decades, may need selective member replacement rather than wholesale window replacement to maintain period authenticity.
              </p>
              <p>
                The neighborhoods where historic restoration is most active in Clearwater include Harbor Oaks with its concentration of 1920s estates, the Skycrest and Woodlawn areas with mid-century residential architecture, and downtown Clearwater's remaining older commercial buildings along Cleveland Street and Fort Harrison Avenue. Each of these areas presents different architectural styles, construction eras, and restoration requirements. Our experience across these neighborhoods allows us to apply the appropriate restoration techniques for each building's age, style, and current condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Clearwater Historic Restoration Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            A careful approach to restoration that respects Clearwater's architectural heritage while addressing coastal climate demands.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Building Assessment and Documentation",
                description: "Comprehensive evaluation of the building's structural condition, material deterioration, architectural elements, and modification history. We document original construction details, identify previous repairs, and assess salt air and moisture damage patterns specific to the building's location within Clearwater.",
                icon: FileCheck,
              },
              {
                step: "02",
                title: "Restoration Planning and Design",
                description: "Development of a restoration plan that addresses structural stabilization, material repairs, and code compliance while preserving architectural character. Plans specify period-appropriate repair techniques, identify elements requiring replacement versus conservation, and integrate modern performance upgrades discreetly.",
                icon: BookOpen,
              },
              {
                step: "03",
                title: "Permitting and Compliance",
                description: "We navigate the City of Clearwater permitting process for restoration work, ensuring structural modifications and systems upgrades meet current building code while documenting the preservation rationale for approaches that maintain original building character.",
                icon: Briefcase,
              },
              {
                step: "04",
                title: "Restoration Execution",
                description: "Skilled craftsmen perform restoration work using appropriate techniques for each building era and material system. Structural stabilization, exterior restoration, interior preservation, and systems modernization proceed in a coordinated sequence that protects completed work and original elements throughout construction.",
                icon: HardHat,
              },
              {
                step: "05",
                title: "Completion and Maintenance Planning",
                description: "Final documentation of all restoration work including techniques, materials, and specifications. We provide maintenance recommendations specific to Clearwater's coastal environment, helping property owners protect their restoration investment against the ongoing effects of salt air, humidity, and UV exposure.",
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
        title="Clearwater Historic Restoration FAQ"
        description="Common questions about historic restoration and heritage building preservation in Clearwater, Florida."
      />

      {/* Internal Links */}
      <RelatedServiceLocations currentCity="Clearwater" currentService="historic-restoration" currentServiceName="Historic Restoration" />

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Preserve Clearwater's Architectural Heritage
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss your historic restoration project in Clearwater. We bring decades of experience and genuine respect for period architecture to every restoration we undertake.
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
    <RelatedArticles pageSlug="historic-restoration-clearwater" />
    </>
  );
}
