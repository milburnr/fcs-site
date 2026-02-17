import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, Building2, Shield, Award, FileCheck, HardHat, Briefcase, Droplets, Layers } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/exterior-waterproofing-lakeland/' },
  title: "Exterior Waterproofing Lakeland FL | Building Envelope, Foundation, Industrial | FCS",
  description: "Exterior waterproofing in Lakeland by Florida Construction Specialists. Building envelope protection, foundation waterproofing, parking deck coatings for inland Central Florida properties. Licensed CBC, 40+ years experience. Request an assessment.",
};

const faqs = [
  {
    question: "Why does Lakeland need a different waterproofing approach than coastal Florida cities?",
    answer: "Lakeland sits inland on the Florida Central Ridge, which creates a fundamentally different moisture profile than Tampa, St. Petersburg, or Clearwater. There is no salt spray or tidal surge exposure, but the city receives approximately 50 inches of annual rainfall concentrated in intense afternoon thunderstorms from June through September. Lakeland sits in Lightning Alley, the most lightning-active corridor in the United States, and these storms deliver massive volumes of water in short periods that stress building envelopes differently than the steady coastal moisture of Gulf cities. The sandy soils of the Central Ridge drain quickly in some areas but the city's 38 named lakes create localized high water tables that fluctuate seasonally. We specify waterproofing systems that handle sudden heavy water loading and inland humidity rather than the salt-resistant systems prioritized on the coast."
  },
  {
    question: "How do Lakeland's sandy soils affect foundation waterproofing requirements?",
    answer: "The sandy soils characteristic of the Florida Central Ridge that runs through Lakeland drain more freely than the clay soils found in other parts of Polk County, which means hydrostatic pressure against foundations can build and dissipate rapidly during storm events. Properties near any of Lakeland's 38 lakes experience higher baseline water tables that rise further during the wet season from June through October. This seasonal fluctuation creates cyclical wetting and drying of below-grade structures that stresses waterproofing membranes through expansion and contraction. We conduct site-specific soil and groundwater analysis before specifying foundation waterproofing systems. Many Lakeland commercial properties benefit from combination systems that include both waterproofing membranes and perimeter drainage to manage the variable hydrostatic conditions created by the lake-influenced water table."
  },
  {
    question: "What types of commercial buildings in Lakeland need exterior waterproofing most urgently?",
    answer: "The most common waterproofing failures we address in Lakeland fall into several categories. Distribution centers and warehouses along the I-4 corridor experience loading dock area water intrusion where grade-level doors meet elevated truck dock floors. Multi-story commercial buildings downtown near Munn Park and Lake Mirror have aging building envelopes where original sealants and flashings have deteriorated after years of UV exposure and thermal cycling. Condominium and apartment buildings near the lakes develop balcony and walkway waterproofing failures from the combination of foot traffic wear and heavy rainfall. Parking structures throughout Lakeland suffer from traffic-bearing membrane deterioration accelerated by standing water and the thermal expansion cycles that are more extreme inland than on the coast where sea breezes moderate temperatures."
  },
  {
    question: "Does the City of Lakeland require permits for exterior waterproofing work?",
    answer: "Permitting requirements for exterior waterproofing in Lakeland depend on the scope of work. The City of Lakeland Community Development Department generally does not require a separate permit for surface-applied waterproofing coatings and sealant replacement on existing buildings. However, waterproofing projects that involve structural repairs, concrete restoration, or modifications to drainage systems typically do require building permits. Projects on buildings within the Munn Park Historic Commercial District or other locally designated historic areas may require additional review to ensure waterproofing materials and methods are compatible with historic construction. For properties in unincorporated Polk County, the Polk County Building Division handles permitting. We manage the entire permitting process when required and ensure all waterproofing work meets Florida Building Code requirements for moisture protection."
  },
  {
    question: "How does Lakeland's summer heat affect waterproofing membrane performance and application?",
    answer: "Lakeland's inland location means summer temperatures regularly exceed 95 degrees Fahrenheit, and surface temperatures on exposed building walls and parking decks can reach 150 degrees or higher. This extreme heat affects both the application and long-term performance of waterproofing systems. During application, we schedule membrane installation for early morning hours to avoid working with materials that become too fluid in extreme heat, which can cause uneven thickness and reduced performance. For long-term durability, we specify UV-stable membranes with high-temperature ratings because Lakeland's inland position produces more extreme temperature swings than coastal areas where Gulf breezes moderate heat. The difference between a summer afternoon surface temperature and a winter morning temperature in Lakeland can exceed 120 degrees, creating significant thermal cycling stress on waterproofing membranes. We select systems with high elongation properties that accommodate this movement without cracking or delaminating."
  },
  {
    question: "What is the typical cost range for commercial exterior waterproofing in Lakeland?",
    answer: "Commercial exterior waterproofing costs in Lakeland vary significantly based on the application. Building envelope wall waterproofing including sealant replacement, flashing repairs, and elastomeric coatings typically ranges from five to fifteen dollars per square foot. Foundation and below-grade waterproofing runs from eight to twenty-two dollars per square foot depending on excavation requirements and drainage system complexity. Parking deck traffic-bearing membrane systems range from fifteen to thirty-five dollars per square foot. Industrial and warehouse floor waterproofing for moisture vapor mitigation costs four to twelve dollars per square foot. Complete commercial waterproofing projects in Lakeland typically fall between fifty thousand and several million dollars depending on building size and scope. Our in-house estimating team provides detailed proposals with unit pricing after conducting a thorough site assessment of your Lakeland property."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Exterior Waterproofing", href: "/commercial/guides/balcony-reconstruction-exterior-waterproofing/" },
  { name: "Lakeland", href: "/exterior-waterproofing-lakeland/" },
];

export default function ExteriorWaterproofingLakelandPage() {
  return (
    <>
      <LocalBusinessSchema city="Lakeland" service="Exterior Waterproofing" />
      <ServiceSchema
        serviceName="Exterior Waterproofing"
        serviceDescription="Professional exterior waterproofing services in Lakeland, FL. Building envelope protection, foundation waterproofing, parking deck coatings, and industrial moisture control for inland Central Florida properties. Licensed CBC1262722, 40+ years experience."
        city="Lakeland"
        minPrice="50000"
        serviceCategories={["Building Envelope Waterproofing", "Foundation Waterproofing", "Parking Deck Coatings", "Industrial Waterproofing", "Sealant and Flashing Systems"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/waterproofing/waterproofing-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Lakeland, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Exterior Waterproofing in Lakeland, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              From the warehouse districts lining the I-4 corridor to the historic commercial buildings around Munn Park, Lakeland's inland Central Florida properties face intense rainfall, extreme heat cycling, and lake-influenced groundwater that demand specialized waterproofing expertise. Florida Construction Specialists delivers building envelope protection, foundation waterproofing, and parking deck coatings engineered specifically for Polk County's unique moisture environment, where the challenges are heavy rain and humidity rather than the salt spray of the coast.
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
                Schedule Waterproofing Assessment
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
              Why Inland Lakeland Demands Specialized Waterproofing Expertise
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Lakeland sits at the heart of what weather professionals call Lightning Alley, the corridor stretching through Central Florida that records more cloud-to-ground lightning strikes per square mile than anywhere else in the country. That distinction comes with a practical consequence for building owners: the same atmospheric conditions that produce all that lightning also produce some of the most intense rainfall events in the southeastern United States. Afternoon thunderstorms from June through September routinely drop two to three inches of rain in under an hour, creating sudden water loads that overwhelm building envelopes, saturate parking deck surfaces, and drive moisture into every gap in a structure's exterior shell.
              </p>
              <p className="mb-6">
                What makes Lakeland's waterproofing challenges distinct from coastal cities like Tampa or St. Petersburg is the absence of one factor and the presence of another. There is no saltwater exposure, which means the corrosion-resistant systems prioritized on the coast are less critical here. But Lakeland's inland position on the Florida Central Ridge produces more extreme temperature cycling than the Gulf coast, where sea breezes moderate both summer highs and winter lows. A parking deck or west-facing wall in Lakeland can see surface temperatures exceed 150 degrees on a July afternoon and drop below 40 degrees on a January morning. That 110-degree-plus temperature range creates expansion and contraction forces that stress waterproofing membranes far more than the moderate cycling experienced ten miles from the coast.
              </p>
              <p className="mb-6">
                The other factor unique to Lakeland is water. Not ocean water, but freshwater. The city takes its name from its 38 named lakes, and those lakes are connected to a broader groundwater system that creates variable water table levels across the area. A commercial building's foundation on the shore of Lake Morton experiences different hydrostatic conditions than an industrial building along the I-4 corridor three miles away. Properties in the South Lakeland corridor toward Bartow sit on different soils than those in North Lakeland near the Publix Super Markets corporate campus. This variability means that effective waterproofing in Lakeland requires site-specific analysis rather than one-size-fits-all approaches.
              </p>
              <p>
                Florida Construction Specialists brings four decades of commercial construction experience to Lakeland's waterproofing challenges. As a prime general contractor, we never subcontract our general contracting responsibility, which means the same team that assesses your building's waterproofing needs also designs the solution, manages the installation, and stands behind the warranty. Our principal's combined 43 years of construction and insurance industry experience provides a risk management perspective that ensures waterproofing systems are specified not just for current conditions but for the long-term exposure your Lakeland property will face over the coming decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/waterproofing/waterproofing-display.webp"
        alt="Professional exterior waterproofing application on commercial building in Lakeland"
        title="Protecting Lakeland Properties from the Inside Out"
        subtitle="Building envelope, foundation, and structural waterproofing for Polk County's inland commercial buildings"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Waterproofing Systems for Every Lakeland Building Type
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Lakeland's diverse commercial building stock requires specialized waterproofing approaches tailored to each structure type and its specific moisture exposure profile.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Building Envelope Waterproofing",
                description: "Complete exterior wall waterproofing for Lakeland's commercial and multi-family buildings. Elastomeric wall coatings, window and door flashing systems, expansion joint treatment, and penetration sealing designed to handle the sudden heavy water loads from Lightning Alley thunderstorms. We address the specific failure points where wind-driven rain enters building envelopes during the intense convective storms that characterize Central Florida's summer weather pattern."
              },
              {
                icon: Layers,
                title: "Foundation and Below-Grade Systems",
                description: "Foundation waterproofing calibrated for Lakeland's specific groundwater conditions. The sandy soils of the Florida Central Ridge drain differently than coastal fill, and the city's lake-connected water table creates variable hydrostatic pressure that changes seasonally. We combine positive-side membranes with perimeter drainage systems engineered for each site's soil conditions, whether the property sits near Lake Hollingsworth or along the I-4 industrial corridor."
              },
              {
                icon: HardHat,
                title: "Parking Deck and Traffic-Bearing Coatings",
                description: "Traffic-bearing membrane systems for Lakeland parking structures and elevated decks. Inland temperature extremes create more thermal cycling stress on deck membranes than coastal locations. We install polyurethane, epoxy, and methacrylate systems rated for the temperature range experienced in Polk County, with proper drainage design to prevent the ponding water conditions that accelerate membrane deterioration during summer storm events."
              },
              {
                icon: Briefcase,
                title: "Industrial and Warehouse Waterproofing",
                description: "Specialized moisture control for Lakeland's booming distribution center and warehouse market along the I-4 corridor. Loading dock waterproofing where grade-level transitions create chronic water entry points, concrete floor moisture vapor mitigation for facilities with sensitive inventory, cold storage envelope protection, and joint sealant programs for the large-format industrial buildings that define Lakeland's logistics economy."
              },
              {
                icon: Droplets,
                title: "Sealant and Joint Systems",
                description: "Comprehensive sealant replacement and expansion joint treatment for commercial buildings throughout Lakeland. Inland thermal cycling degrades sealants faster than the moderate coastal environment, and Lakeland's UV exposure at 28 degrees latitude accelerates elastomeric breakdown. We specify high-performance silicone, polyurethane, and hybrid sealant systems with the elongation capacity to handle Polk County's temperature-driven joint movement without adhesion failure."
              },
              {
                icon: FileCheck,
                title: "Waterproofing Assessment and Diagnostics",
                description: "Comprehensive building moisture diagnostics for Lakeland properties experiencing water intrusion. Infrared thermographic scanning to identify moisture trapped within wall assemblies, water testing to replicate storm-driven rain exposure, core sampling to evaluate existing membrane condition, and groundwater monitoring near lake-adjacent properties. Our diagnostic reports provide the data needed to specify targeted repairs rather than wholesale replacement."
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
              Understanding Lakeland's Moisture Environment
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Effective waterproofing in Lakeland starts with understanding what makes this city's moisture environment different from anywhere else in the Tampa Bay region. The most important distinction is that Lakeland is not a coastal city. It sits roughly 35 miles from the nearest Gulf coastline, perched on the elevated sandy ridge that runs down the center of the Florida peninsula. This position eliminates salt spray exposure but introduces a set of conditions that many waterproofing contractors, accustomed to coastal specifications, overlook.
              </p>
              <p className="mb-6">
                The <a href="https://www.lakelandgov.net/departments/community-development/" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of Lakeland Community Development Department</a> oversees building permits within city limits, while the Polk County Building Division handles unincorporated areas. For waterproofing projects that involve structural repairs or drainage modifications, permitting requirements differ between the two jurisdictions. Properties in the Munn Park Historic Commercial District face additional review requirements to ensure waterproofing treatments are compatible with historic masonry construction. We manage permitting through both agencies and understand which approach each jurisdiction expects.
              </p>
              <p className="mb-6">
                Lakeland's rainfall pattern is perhaps the most critical factor in waterproofing specification. The city averages approximately 50 inches of annual precipitation, but that number understates the intensity of the delivery. The majority falls during the June-through-September wet season, often in thunderstorms that produce two to four inches in a single event lasting less than two hours. These storms create sudden sheet-flow conditions on building facades, overwhelm roof drainage systems that are marginally sized, and drive water through any gap in a building's exterior envelope with hydraulic force. The wind-driven rain component during severe thunderstorms can push water upward and laterally, penetrating joints and flashings that perform adequately during gentle rainfall.
              </p>
              <p className="mb-6">
                Temperature cycling is the second major factor. Without the moderating influence of the Gulf of Mexico, Lakeland experiences wider daily and seasonal temperature swings than Tampa or St. Petersburg. Summer afternoon surface temperatures on dark-colored walls and parking decks can exceed 150 degrees Fahrenheit, then drop to the mid-70s overnight. Winter temperatures occasionally reach the low 30s, creating freeze potential that coastal Hillsborough County rarely sees. This temperature range, applied cyclically over years, creates expansion and contraction forces that eventually fatigue waterproofing membranes, sealants, and flashings. Systems specified for Lakeland must have higher elongation capacity and better UV resistance than systems adequate for coastal installations.
              </p>
              <p>
                The groundwater dimension completes the picture. Lakeland's 38 named lakes are not isolated water bodies. They connect to a regional groundwater system that responds to seasonal rainfall patterns, and water table levels can vary by several feet between the dry season peak in May and the wet season peak in September. Commercial buildings with below-grade space, including parking structures, mechanical rooms, and storage areas, experience changing hydrostatic pressure throughout the year. Foundation waterproofing systems must accommodate this fluctuation without membrane fatigue, and drainage systems must manage the volume during peak water table periods without allowing backup pressure against waterproofing membranes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Lakeland Waterproofing Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Every waterproofing project in Lakeland follows a diagnostic-driven process designed for the inland Central Florida moisture environment and Polk County's specific building conditions.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Building Diagnostics and Site Assessment",
                description: "We evaluate your Lakeland property's specific moisture exposure profile including wall orientation relative to prevailing storm direction, proximity to lakes and associated water table conditions, existing waterproofing system age and condition, drainage adequacy, and the history of water intrusion events. Infrared thermographic scanning identifies trapped moisture not visible to the eye. For foundation projects, we assess soil conditions and groundwater levels specific to your Lakeland location.",
                icon: FileCheck,
              },
              {
                step: "02",
                title: "System Specification and Engineering",
                description: "Based on diagnostic findings, we specify waterproofing systems matched to your building's specific exposure. Lakeland properties require materials with high UV resistance and thermal cycling tolerance appropriate for inland conditions. We select from elastomeric membranes, crystalline systems, traffic-bearing coatings, and hybrid approaches based on substrate type, exposure conditions, and service requirements. All specifications account for the intense rainfall loading characteristic of Central Florida thunderstorms.",
                icon: Building2,
              },
              {
                step: "03",
                title: "Surface Preparation and Concrete Restoration",
                description: "Proper surface preparation determines long-term waterproofing performance. We address spalled concrete, corroded reinforcement, deteriorated sealants, and failed previous waterproofing before applying new systems. Lakeland's humidity and temperature cycling often cause existing coatings to delaminate, requiring complete removal and substrate profiling to achieve the bond strengths that new membrane systems require for reliable performance.",
                icon: HardHat,
              },
              {
                step: "04",
                title: "Waterproofing Installation with Quality Control",
                description: "Application scheduling accounts for Lakeland's weather patterns. Morning installation during summer months avoids afternoon thunderstorms and the extreme surface temperatures that affect membrane application quality. Every installation includes thickness verification, adhesion testing, and detail inspection at penetrations, transitions, and termination points where the majority of waterproofing failures originate. We document conditions and test results throughout the installation process.",
                icon: Briefcase,
              },
              {
                step: "05",
                title: "Testing, Documentation, and Warranty",
                description: "Flood testing on horizontal surfaces, water spray testing on vertical applications, and final inspection of all details, terminations, and transitions. We provide complete documentation including material certifications, test results, and as-built photographs. Our ten-year workmanship warranty covers all installed waterproofing systems, backed by manufacturer material warranties. We recommend annual maintenance inspections to address sealant degradation and minor issues before they compromise the waterproofing system.",
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
        title="Lakeland Exterior Waterproofing FAQ"
        description="Common questions about exterior waterproofing for commercial and industrial buildings in Lakeland, Florida and Polk County."
      />

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <RelatedServices city="Lakeland" currentService="exterior-waterproofing" />
            <NearbyLocations currentCity="Lakeland" service="exterior-waterproofing" serviceName="Exterior Waterproofing" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Protect Your Lakeland Property from Moisture Damage
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a comprehensive waterproofing assessment of your Lakeland commercial property. Whether you are addressing active water intrusion in a downtown building or protecting a new warehouse along the I-4 corridor, we will diagnose the problem and deliver a lasting solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request Waterproofing Assessment
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
