import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, Building2, Shield, Award, FileCheck, HardHat, Briefcase, BookOpen, Landmark } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/historic-restoration-brandon/' },
  title: "Historic Restoration Brandon | Older Buildings",
  description: "Historic restoration and older building renovation in Brandon FL. Pre-1980s commercial restoration adaptive reuse.",
  openGraph: {
    title: "Historic Restoration Brandon | Older Buildings",
    description: "Historic restoration and older building renovation in Brandon FL. Pre-1980s commercial restoration adaptive reuse.",
    url: "https://floridaconstructionspecialists.com/historic-restoration-brandon/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "Does Brandon have any officially designated historic districts?",
    answer: "Brandon does not have formally designated historic districts comparable to Tampa's Ybor City or Hyde Park districts. As an unincorporated community within Hillsborough County, Brandon does not have its own historic preservation board or local historic designation process. However, eastern Hillsborough County does have properties listed on or eligible for the National Register of Historic Places, and Hillsborough County maintains a historic resources inventory that includes older structures in the Brandon and Valrico areas. Our historic restoration work in Brandon focuses on preserving the character and structural integrity of older buildings that define the community's identity."
  },
  {
    question: "What types of older buildings in Brandon typically need historic restoration?",
    answer: "The most common historic restoration candidates in the Brandon area include pre-1980s commercial buildings along the original Brandon Boulevard corridor, older residential structures in established neighborhoods near downtown Brandon, church buildings and civic structures built during Brandon's mid-century growth period, and agricultural-era structures such as former packing houses and farmstead buildings that reflect eastern Hillsborough County's citrus and agricultural heritage. Many of these buildings are sound structurally but need updating to meet current codes while preserving their original character."
  },
  {
    question: "How does restoration of older Brandon buildings differ from renovation of newer construction?",
    answer: "Older Brandon buildings present unique challenges compared to newer suburban construction. Pre-1970s structures often use construction methods and materials that are no longer standard, including solid masonry walls, plaster over wood lath, original wood framing without modern hurricane clips, and outdated electrical and plumbing systems. Restoration requires understanding these original systems, preserving sound materials while replacing deteriorated components, and bringing buildings into code compliance without destroying the character that makes them worth preserving. This demands a different skill set than typical renovation work."
  },
  {
    question: "Can FCS help convert an older Brandon commercial building to a new use while preserving its character?",
    answer: "Adaptive reuse is one of the most rewarding types of historic restoration work in Brandon. We help property owners transform older commercial buildings into new uses, such as converting a former retail building into restaurant space, repurposing a warehouse structure into creative office or event space, or transforming a historic residential property into a professional office. These conversions require careful planning to maintain the building's exterior character while modifying interiors for new uses, and they must satisfy Hillsborough County's building code requirements for the new occupancy classification."
  },
  {
    question: "What building code considerations apply when restoring older buildings in Brandon?",
    answer: "Hillsborough County follows the Florida Building Code, which includes provisions for existing buildings undergoing renovation or restoration. The code allows alternative compliance methods for historic structures that would be impractical to bring to full current standards without destroying historic character. We use the Florida Building Code Existing Building chapter to develop restoration approaches that improve safety and performance while preserving original features. The extent of required code upgrades depends on the scope of work, with major renovations triggering more comprehensive upgrade requirements than targeted restoration projects."
  },
  {
    question: "Does historic restoration in Brandon qualify for any tax incentives or grants?",
    answer: "Properties listed on the National Register of Historic Places may qualify for federal historic preservation tax credits of twenty percent of qualified rehabilitation expenses. Florida also offers an ad valorem tax exemption for improvements to historic properties in some jurisdictions. While Brandon itself does not have local historic incentive programs because it is unincorporated, properties in eastern Hillsborough County that meet eligibility criteria can access state and federal programs. We recommend consulting with a historic preservation consultant and tax advisor to determine which incentives apply to your specific project."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Historic Restoration", href: "/historic-restoration/" },
  { name: "Brandon", href: "/historic-restoration-brandon/" },
];

export default function HistoricRestorationBrandonPage() {
  return (
    <>
      <LocalBusinessSchema city="Brandon" service="Historic Restoration" />
      <ServiceSchema
        serviceName="Historic Restoration"
        serviceDescription="Historic restoration and older building renovation in Brandon, FL. Pre-1980s commercial restoration, adaptive reuse, character preservation for eastern Hillsborough County properties. Licensed CBC1262722, 40+ years experience."
        city="Brandon"
        minPrice="50000"
        serviceCategories={["Historic Building Restoration", "Adaptive Reuse", "Commercial Building Preservation", "Structural Rehabilitation", "Character Preservation"]}
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
              <span className="text-brand-gold font-semibold">Serving Brandon & Eastern Hillsborough County</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Historic Restoration in Brandon, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              While Brandon is primarily known as a modern suburb, its older buildings tell the story of eastern Hillsborough County's growth from agricultural community to Tampa Bay's largest suburb. Florida Construction Specialists restores and preserves these structures, maintaining their character while bringing them into compliance with current building standards and adapting them for continued productive use.
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

      {/* Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Preserving Brandon's Built Heritage Amid Suburban Growth
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Brandon's identity as a modern suburb often overshadows its deeper architectural history. Before the explosive suburban growth of the 1970s through 1990s transformed eastern Hillsborough County into the community of over 115,000 that exists today, Brandon was a small agricultural town with its own downtown commercial district, churches, schools, and civic buildings. Many of these older structures still stand along the original Brandon Boulevard corridor and in established neighborhoods near the community's historic center, though they are increasingly surrounded by and contrasted with modern suburban development.
              </p>
              <p className="mb-6">
                The adjacent community of Valrico, even older than Brandon in settlement history, adds to the stock of pre-war and mid-century structures in eastern Hillsborough County. Valrico's older residential neighborhoods contain early twentieth century homes, Cracker-style farmhouses, and modest bungalows that reflect Florida's rural building traditions before air conditioning and suburban planning changed how communities were built. These structures represent a direct connection to the agricultural era that defined this region for generations.
              </p>
              <p className="mb-6">
                The challenge facing older buildings in the Brandon area is existential. Suburban land values create constant pressure to demolish older structures and replace them with modern development. Without the formal historic district protections that exist in communities like Tampa's Ybor City or St. Petersburg's historic neighborhoods, Brandon's older buildings survive only if their owners see value in preservation. Historic restoration gives these buildings continued economic life by addressing structural deterioration, updating building systems, and adapting spaces for contemporary uses while maintaining the architectural character that makes them distinctive in an increasingly uniform suburban landscape.
              </p>
              <p>
                Florida Construction Specialists brings both the construction expertise and the sensitivity that historic restoration requires. Unlike standard renovation that focuses solely on modernization, our restoration approach begins with understanding what makes a building worth preserving and develops a scope of work that improves performance without sacrificing character. Our four decades of construction experience span the full range of building types and eras found in eastern Hillsborough County, from pre-war masonry commercial buildings to mid-century concrete block structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/historic-preservation-home/historic-preservation-home-display.webp"
        alt="Historic building preservation and restoration work"
        title="Preserving Eastern Hillsborough County's Architectural Heritage"
        subtitle="Thoughtful restoration that maintains character while meeting modern building standards"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Historic Restoration Services for Brandon and Eastern Hillsborough
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Comprehensive restoration capabilities for the range of older building types found throughout the Brandon and Valrico areas.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Landmark,
                title: "Commercial Building Restoration",
                description: "Restoration of older commercial buildings along the original Brandon Boulevard corridor and in eastern Hillsborough's established commercial areas. We repair and preserve original storefronts, masonry facades, wood detailing, and decorative elements while upgrading structural, electrical, and plumbing systems to meet current Hillsborough County building codes."
              },
              {
                icon: Building2,
                title: "Adaptive Reuse and Conversion",
                description: "Transforming older Brandon buildings for new uses while preserving their architectural character. Former retail buildings converted to restaurants or offices, agricultural structures repurposed for commercial use, and residential properties adapted for professional services. Each conversion requires careful code compliance planning for the new occupancy type."
              },
              {
                icon: Shield,
                title: "Structural Rehabilitation",
                description: "Assessment and repair of aging structural systems in older Brandon buildings. Many pre-1980s structures have foundation issues from Florida's challenging soil conditions, wood frame deterioration from decades of humidity and termite exposure, or masonry deterioration from moisture cycling. We restore structural integrity using methods appropriate to the original construction."
              },
              {
                icon: BookOpen,
                title: "Exterior Preservation",
                description: "Repair and preservation of historic exterior elements including original masonry, wood siding, windows, doors, decorative trim, and roofing materials. Where original materials cannot be saved, we source period-appropriate replacements that maintain the building's visual character. Exterior work includes waterproofing improvements that protect the building without altering its appearance."
              },
              {
                icon: HardHat,
                title: "Building Systems Modernization",
                description: "Upgrading electrical, plumbing, HVAC, and fire protection systems in older buildings to meet current codes while minimizing visual impact on historic interiors and exteriors. This includes running modern wiring through original wall cavities, installing efficient HVAC systems in buildings never designed for air conditioning, and adding fire sprinklers where required."
              },
              {
                icon: FileCheck,
                title: "Code Compliance and Permitting",
                description: "Navigating Hillsborough County's building code requirements for older building restoration using the Florida Building Code Existing Building chapter. We develop compliance strategies that achieve safety objectives through alternative methods when standard code provisions would require destructive modifications to historic building elements."
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
              Understanding Brandon's Older Building Stock
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Historic restoration in Brandon operates differently from preservation work in cities with formal historic districts. Since Brandon is unincorporated, there is no local historic preservation board, no Certificate of Appropriateness process, and no municipal review of exterior changes to older buildings. All construction permits go through <a href="https://www.hillsboroughcounty.org/en/residents/property-owners-and-renters/building-and-renovations/permits-and-inspections" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">Hillsborough County Building Services</a>, which applies standard building code requirements rather than historic preservation standards.
              </p>
              <p className="mb-6">
                This regulatory environment creates both advantages and challenges for historic restoration in Brandon. The advantage is that restoration projects are not subject to the lengthy review processes and strict material requirements that preservation boards impose in designated historic districts. The challenge is that there are no regulatory protections preventing demolition or unsympathetic modification of older buildings. This means that property owners who choose restoration must be motivated by the building's value to them and the community, not by regulatory requirement.
              </p>
              <p className="mb-6">
                Eastern Hillsborough County's older buildings fall into several distinct categories. The earliest structures, dating from the late nineteenth and early twentieth centuries, include wood-frame Florida Cracker-style buildings, early masonry commercial buildings in the original Brandon town center, and agricultural structures associated with the area's citrus and cattle heritage. Mid-century buildings from the 1940s through 1960s include concrete block commercial buildings, modest residential construction in the Ranch and bungalow styles, and institutional buildings such as schools and churches that served the growing community. Late mid-century structures from the 1960s through early 1980s represent the transition from small town to suburb and include the first generation of strip retail centers, professional office buildings, and larger-scale commercial construction.
              </p>
              <p>
                Each era presents different structural systems, materials, and restoration challenges. Our experience spans all of these building types, allowing us to develop restoration approaches tailored to each structure's specific construction methods, condition, and preservation priorities. We understand how Florida's climate, humidity, termites, and storm exposure, affects different building materials over decades, and we apply that knowledge to develop repairs that will extend building life for another generation of use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Brandon Historic Restoration Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            A careful, methodical approach to restoration that balances preservation, code compliance, and practical functionality.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Building Assessment and Documentation",
                description: "Thorough evaluation of the existing building including structural condition, material assessment, architectural feature inventory, and historical significance. We document the building's current state with detailed photographs and measurements that guide restoration planning and provide a baseline for tracking preservation outcomes.",
                icon: FileCheck,
              },
              {
                step: "02",
                title: "Restoration Planning and Design",
                description: "Development of a restoration plan that prioritizes preserving character-defining features while addressing structural deficiencies and code compliance needs. We coordinate with architects experienced in historic buildings when needed and develop specifications that balance preservation goals with practical requirements for the building's intended use.",
                icon: Building2,
              },
              {
                step: "03",
                title: "Permitting Through Hillsborough County",
                description: "We prepare permit applications for Hillsborough County Building Services using the Florida Building Code Existing Building provisions that allow alternative compliance methods for older structures. For projects seeking historic tax credits, we coordinate documentation requirements with the State Historic Preservation Office simultaneously.",
                icon: Briefcase,
              },
              {
                step: "04",
                title: "Careful Restoration Construction",
                description: "Experienced crews execute restoration work with attention to preserving original materials and details. We repair rather than replace when possible, use period-appropriate methods and materials for necessary replacements, and protect existing features during construction with proper barriers and handling procedures.",
                icon: HardHat,
              },
              {
                step: "05",
                title: "Documentation and Completion",
                description: "Final documentation of completed restoration work including before and after photographs, material specifications, and maintenance recommendations for ongoing preservation. We coordinate final inspections with Hillsborough County and provide the property owner with comprehensive records of all restoration work performed.",
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
        title="Brandon Historic Restoration FAQ"
        description="Common questions about historic restoration and older building preservation in Brandon, Florida."
      />

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <RelatedServices city="Brandon" currentService="historic-restoration" />
            <NearbyLocations currentCity="Brandon" service="historic-restoration" serviceName="Historic Restoration" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Preserve Your Brandon Building's Character and Value
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss restoring your older Brandon or eastern Hillsborough County building. We will assess the structure, identify preservation priorities, and develop a restoration plan that honors the building's heritage while meeting your practical needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule a Restoration Consultation
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
