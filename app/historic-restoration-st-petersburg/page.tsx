import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, CheckCircle, Building2, Shield, Award, Clock, ArrowRight, FileCheck, HardHat, Briefcase, Landmark } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/historic-restoration-st-petersburg/' },
  title: "Historic Restoration St. Petersburg FL | Old Northeast, Kenwood, Craftsman | FCS",
  description: "Historic restoration in St. Petersburg by Florida Construction Specialists. Old Northeast estates, Historic Kenwood bungalows, Snell Isle Mediterranean Revival, Crescent Heights preservation. Licensed CBC, 40+ years experience.",
};

const faqs = [
  {
    question: "Which historic districts in St. Petersburg have the strictest restoration requirements?",
    answer: "St. Petersburg has several locally designated historic districts, each with its own character and regulatory framework. The Old Northeast Historic District and Historic Kenwood are the two most prominent, with the Community Planning and Preservation Commission reviewing exterior modifications for Certificate of Appropriateness compliance. Old Northeast contains some of the city's finest Mediterranean Revival and Colonial Revival homes from the 1920s and 1930s, while Historic Kenwood features a concentration of Craftsman bungalows and vernacular Florida homes. Snell Isle, though not a designated historic district, contains architecturally significant estates that homeowners often choose to restore to period standards. The level of review varies by district and by the nature of the proposed work."
  },
  {
    question: "What architectural styles are most common in St. Petersburg's historic homes?",
    answer: "St. Petersburg's historic building stock reflects the architectural trends that defined Florida's early development periods. Mediterranean Revival is the dominant high-style architecture, particularly in Old Northeast and Snell Isle, featuring stucco walls, clay tile roofs, arched openings, and courtyard layouts adapted to the subtropical climate. Craftsman bungalows are concentrated in Historic Kenwood and parts of Crescent Heights, characterized by low-pitched roofs, exposed rafter tails, tapered columns, and built-in cabinetry. Colonial Revival homes appear throughout the older neighborhoods. Frame Vernacular homes, built with local materials and adapted to Florida's heat and humidity, represent the most common everyday construction from the early twentieth century."
  },
  {
    question: "Does historic restoration in St. Petersburg require a Certificate of Appropriateness?",
    answer: "Exterior modifications to properties within locally designated historic districts require a Certificate of Appropriateness from the Community Planning and Preservation Commission before building permits will be issued. This applies to changes visible from the public right-of-way, including roofing material changes, window and door replacements, additions, and exterior finish modifications. Interior work generally does not require historic review unless it affects the exterior appearance or structural integrity of a contributing structure. Properties listed on the National Register but not within a local district have fewer regulatory requirements, though federal tax credit projects must meet the Secretary of the Interior's Standards."
  },
  {
    question: "How does the peninsula's salt air affect historic building materials in St. Petersburg?",
    answer: "Salt air from Tampa Bay and the Gulf of Mexico accelerates deterioration of historic building materials in ways that are often more severe than owners expect. Original clay tile roofs develop salt crystal deposits that can crack tiles from within. Wood trim, soffits, and structural members experience accelerated rot when protective paint films break down in the corrosive atmosphere. Original steel casement windows corrode and lose operability. Stucco and masonry experience efflorescence and spalling as salt migrates through porous materials. Our restoration approach addresses not just the visible deterioration but the underlying moisture and salt intrusion pathways that caused the damage, using repair methods and materials appropriate for the peninsula's aggressive coastal environment."
  },
  {
    question: "Can modern building code requirements be met while preserving historic character?",
    answer: "Yes, but it requires careful planning and experience with both historic preservation standards and the Florida Building Code. The code provides alternative compliance paths for historic structures, including the Florida Existing Building Code provisions that allow reasonable alternatives when strict code compliance would damage historic character. For example, we can often achieve wind resistance improvements through concealed structural reinforcement rather than visible exterior changes. Electrical and plumbing upgrades can be routed through existing chases and cavities to avoid altering historic plaster walls. Window restoration with discrete storm protection can meet impact requirements while preserving original fenestration patterns. The key is designing solutions that satisfy both preservation and safety requirements simultaneously."
  },
  {
    question: "What does a typical historic restoration project cost in St. Petersburg?",
    answer: "Historic restoration costs in St. Petersburg vary widely based on the scope of work, the condition of the existing structure, and the level of historic accuracy required. Targeted restoration projects addressing specific elements like roof replacement with period-appropriate clay tile, window restoration, or exterior envelope repair typically range from seventy-five thousand to two hundred thousand dollars. Comprehensive whole-house restorations that address structural systems, mechanical and electrical upgrades, kitchen and bath renovation, and complete exterior restoration can range from three hundred thousand to over one million dollars for larger homes in Old Northeast or Snell Isle. We develop detailed scopes and budgets during pre-construction to ensure realistic expectations before work begins."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Historic Restoration", href: "/historic-restoration/" },
  { name: "St. Petersburg", href: "/historic-restoration-st-petersburg/" },
];

export default function HistoricRestorationStPetersburgPage() {
  return (
    <>
      <LocalBusinessSchema city="St. Petersburg" service="Historic Restoration" />
      <ServiceSchema
        serviceName="Historic Restoration"
        serviceDescription="Historic restoration in St. Petersburg, FL. Old Northeast estates, Historic Kenwood bungalows, Snell Isle Mediterranean Revival, Craftsman preservation, Certificate of Appropriateness coordination. Licensed CBC1262722, 40+ years experience."
        city="St. Petersburg"
        minPrice="75000"
        serviceCategories={["Mediterranean Revival Restoration", "Craftsman Bungalow Restoration", "Historic Window and Door Restoration", "Certificate of Appropriateness Compliance", "Structural Restoration"]}
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
              <span className="text-brand-gold font-semibold">Serving St. Petersburg, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Historic Restoration in St. Petersburg, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              From the Mediterranean Revival estates of Old Northeast and Snell Isle to the Craftsman bungalows of Historic Kenwood, St. Petersburg holds one of the richest collections of early twentieth-century architecture on Florida's Gulf Coast. Florida Construction Specialists restores these homes to their original character while integrating modern systems, navigating the city's historic preservation review process with four decades of construction expertise.
            </p>

            {/* Trust Badges */}
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
                Discuss Your Restoration
              </Link>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-secondary flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* St. Petersburg Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Preserving the Architecture That Defines St. Petersburg's Most Valued Neighborhoods
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                St. Petersburg's identity is inseparable from its historic architecture. The city's growth during the Florida land boom of the 1920s produced neighborhoods of remarkable architectural quality that survive today as some of the most desirable addresses on the Gulf Coast. The Old Northeast, developed between 1911 and 1940, contains block after block of Mediterranean Revival homes with barrel tile roofs, arched loggias, and courtyard gardens that reflect the era's romantic interpretation of Spanish and Italian architecture. Snell Isle, planned by Perry Snell as an exclusive residential enclave, features waterfront estates that represent the finest residential construction of their period.
              </p>
              <p className="mb-6">
                Historic Kenwood, recognized as one of the largest concentrations of Craftsman-era bungalows in the southeastern United States, preserves a different but equally important layer of St. Petersburg's architectural heritage. These homes, built primarily between 1920 and 1950, feature the characteristic exposed structural elements, natural materials, and handcrafted details that define the Craftsman movement. Crescent Heights, adjacent to Historic Kenwood, adds additional historic housing stock including Frame Vernacular homes that represent everyday Florida construction adapted to the subtropical climate.
              </p>
              <p className="mb-6">
                Restoring historic homes in St. Petersburg presents challenges that go beyond standard renovation work. The peninsula's salt air accelerates material deterioration in ways that inland historic homes do not experience. Original wood siding, window sashes, decorative trim, and structural framing are under constant assault from the corrosive coastal atmosphere. Clay tile roofs, a defining feature of Mediterranean Revival homes, develop internal salt damage that can cause tiles to crack and spall. Stucco finishes absorb moisture and salt, leading to delamination and structural damage to the underlying wall systems. Every restoration project must address not just the visible deterioration but the environmental factors that caused it.
              </p>
              <p>
                Florida Construction Specialists approaches historic restoration in St. Petersburg with respect for both the architecture and the regulatory framework that protects it. We understand the City of St. Petersburg's Certificate of Appropriateness process, work within the Secretary of the Interior's Standards for rehabilitation, and have the construction capability to perform the skilled craftsmanship that these buildings demand. Our principal's 43 years of construction experience provides the depth needed to evaluate structural conditions in aging buildings and develop restoration approaches that preserve character while ensuring long-term durability on the peninsula.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/historic-preservation-home/historic-preservation-home-display.webp"
        alt="Historic home restoration in St. Petersburg's Old Northeast district"
        title="Restoring St. Petersburg's Architectural Heritage"
        subtitle="Mediterranean Revival, Craftsman, and Colonial Revival preservation across the peninsula's historic districts"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Historic Restoration Services for St. Petersburg's Architectural Heritage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Skilled restoration of the distinct architectural styles that define St. Petersburg's historic neighborhoods.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Landmark,
                title: "Mediterranean Revival Restoration",
                description: "Restoration of stucco walls, clay barrel tile roofs, arched openings, decorative ironwork, and courtyard features characteristic of Old Northeast and Snell Isle estates. We source period-appropriate materials and employ techniques that match original construction methods while addressing the salt damage unique to peninsula buildings."
              },
              {
                icon: HardHat,
                title: "Craftsman Bungalow Restoration",
                description: "Preservation of exposed rafter tails, tapered columns, original wood siding, built-in cabinetry, and the distinctive structural honesty of Historic Kenwood and Crescent Heights bungalows. We repair and replicate original woodwork details that define the Craftsman aesthetic while addressing structural wood deterioration from decades of coastal exposure."
              },
              {
                icon: Shield,
                title: "Structural Restoration",
                description: "Assessment and repair of historic structural systems including wood framing, masonry bearing walls, foundation systems, and roof structures. Peninsula buildings experience unique structural stresses from salt corrosion, termite damage, and settlement in St. Petersburg's sandy soil. We stabilize and reinforce structures while preserving the original construction character."
              },
              {
                icon: Building2,
                title: "Window and Door Restoration",
                description: "Repair and restoration of original wood windows, steel casement windows, and historic entry doors. We restore operability, replace deteriorated components with matching materials, and integrate discrete weatherstripping and hardware that improve performance without altering the historic appearance. Storm protection can be added without removing original fenestration."
              },
              {
                icon: FileCheck,
                title: "Certificate of Appropriateness",
                description: "We navigate the Community Planning and Preservation Commission review process for projects within St. Petersburg's locally designated historic districts. Our understanding of what the commission expects in applications, material selections, and design approaches helps avoid delays and redesign requirements that catch inexperienced contractors off guard."
              },
              {
                icon: Award,
                title: "Modern Systems Integration",
                description: "Installation of modern HVAC, electrical, plumbing, and technology systems within historic structures without damaging original materials or altering the building's historic character. We route systems through existing chases, utilize concealed distribution methods, and select equipment that fits within the physical constraints of older construction."
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
              St. Petersburg's Historic Districts: Distinct Character, Distinct Requirements
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Each of St. Petersburg's historic neighborhoods presents a different restoration context. The architectural styles, construction methods, typical deterioration patterns, and regulatory requirements vary by district, and effective restoration requires understanding these distinctions rather than applying a generic approach.
              </p>
              <p className="mb-6">
                The <a href="https://www.stpete.org/building_and_development_review/" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of St. Petersburg Development Services Department</a> administers the local historic preservation program through the Community Planning and Preservation Commission. Properties within locally designated districts must obtain a Certificate of Appropriateness for exterior modifications before building permits are issued. The review evaluates proposed work against the Secretary of the Interior's Standards for Rehabilitation and the specific design guidelines for each district. We prepare applications that address the commission's criteria and attend review hearings to support project approval.
              </p>
              <p className="mb-6">
                The Old Northeast presents the most architecturally significant restoration challenges in St. Petersburg. Homes here range from grand Mediterranean Revival estates with complex clay tile rooflines and elaborate stucco detailing to more modest Colonial Revival and Frame Vernacular houses. The bayfront blocks of the Old Northeast experience the most aggressive salt air exposure in the city, with homes directly facing Tampa Bay absorbing moisture-laden wind that accelerates every form of material deterioration. Restoration in these bayfront locations often requires more extensive material replacement and more robust protective treatments than homes on interior blocks, even within the same district.
              </p>
              <p className="mb-6">
                Historic Kenwood demands a different restoration sensibility. The Craftsman bungalows that define this neighborhood were built with exposed wood structural elements as intentional design features -- the rafter tails, knee braces, and column details are not just decorative but express the Craftsman philosophy of honest construction. When these elements deteriorate in the salt air, simply replacing them with modern materials or concealing them behind new siding destroys the architectural integrity of the home. We repair or faithfully replicate original wood elements using compatible species and profiles, maintaining the handcrafted character that makes Historic Kenwood one of the most significant Craftsman neighborhoods in the Southeast.
              </p>
              <p>
                Snell Isle, though not a locally designated historic district, contains architecturally significant waterfront estates that owners frequently choose to restore to their original grandeur. These homes combine Mediterranean Revival design with the premium construction quality that characterized the area's original development. Snell Isle restoration projects often involve comprehensive scope including structural stabilization, complete exterior envelope restoration, period-appropriate kitchen and bath renovation, and landscape restoration of original courtyard and garden designs. The waterfront setting on Tampa Bay intensifies the salt exposure challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            St. Petersburg Historic Restoration Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            A structured approach that respects the architecture, meets regulatory requirements, and addresses peninsula-specific deterioration.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Historic Assessment and Documentation",
                description: "We conduct a thorough assessment of the building's condition, architectural significance, and construction history. For properties in designated districts, we document existing conditions with photographs and drawings that support the Certificate of Appropriateness application. We identify original materials, construction methods, and areas of deterioration to develop an accurate restoration scope.",
                icon: FileCheck,
              },
              {
                step: "02",
                title: "Preservation Planning and Design",
                description: "We develop a restoration plan that addresses structural needs, material deterioration, modern system integration, and historic character preservation. For properties requiring Certificate of Appropriateness review, we prepare applications that address the commission's criteria. For all projects, we select materials and methods that are compatible with the original construction and appropriate for the peninsula's coastal environment.",
                icon: Building2,
              },
              {
                step: "03",
                title: "Regulatory Review and Permitting",
                description: "We manage the Certificate of Appropriateness process through the Community Planning and Preservation Commission for properties in designated districts, followed by building permit applications through the City of St. Petersburg. We coordinate both processes to minimize delays and ensure the approved restoration plan meets both historic preservation and building code requirements.",
                icon: Briefcase,
              },
              {
                step: "04",
                title: "Skilled Restoration Construction",
                description: "Experienced craftsmen perform restoration work using period-appropriate techniques and materials. Wood repair uses compatible species and profiles. Stucco restoration matches original mix compositions and textures. Clay tile roofing uses salvaged or reproduction tiles that match existing installations. Throughout construction, we protect original materials and features that are being retained.",
                icon: HardHat,
              },
              {
                step: "05",
                title: "Completion and Documentation",
                description: "Final inspections, comprehensive documentation of the completed restoration including materials used and methods employed, and guidance for ongoing maintenance. For properties in historic districts, we provide documentation that supports the property's compliance record. Maintenance guidance is tailored to the specific materials and the peninsula's corrosive environment.",
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
        title="St. Petersburg Historic Restoration FAQ"
        description="Common questions about historic home restoration in St. Petersburg, Florida."
      />

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <RelatedServices city="St. Petersburg" currentService="historic-restoration" />
            <NearbyLocations currentCity="St. Petersburg" service="historic-restoration" serviceName="Historic Restoration" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Restore Your St. Petersburg Historic Home
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss the restoration of your historic property in St. Petersburg. We will assess the building's condition, navigate the preservation review process, and develop a restoration plan that honors its architectural heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Discuss Your Restoration
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
