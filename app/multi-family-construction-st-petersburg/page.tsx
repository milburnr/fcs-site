import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, CheckCircle, Building2, Shield, Award, Clock, ArrowRight, FileCheck, HardHat, Briefcase, Users } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/multi-family-construction-st-petersburg/' },
  title: "Multi-Family Construction St. Pete | Apartments",
  description: "Multi-family construction in St. Petersburg by Florida Construction Specialists. Apartments, condominiums, townhomes on Florida's densest peninsula.",
  openGraph: {
    title: "Multi-Family Construction St. Pete | Apartments",
    description: "Multi-family construction in St. Petersburg by Florida Construction Specialists. Apartments, condominiums, townhomes on Florida's densest peninsula.",
    url: "https://floridaconstructionspecialists.com/multi-family-construction-st-petersburg/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "Why is multi-family construction booming in St. Petersburg specifically?",
    answer: "St. Petersburg sits on a peninsula in Pinellas County, the most densely populated county in Florida. There is virtually no undeveloped land left for single-family subdivision expansion, so housing demand is met almost exclusively through multi-family development. Downtown St. Pete has added hundreds of condo and apartment units in recent years through projects like One St. Petersburg and other high-rise developments. The combination of geographic constraint, population growth, and the city's transformation into a cultural and employment center has created sustained demand for multi-family construction at every price point, from workforce apartments to luxury waterfront condominiums."
  },
  {
    question: "What are the biggest challenges for multi-family construction on St. Petersburg's peninsula?",
    answer: "The primary challenges are density-related logistics, flood zone compliance, and wind resistance engineering. Staging areas for construction materials and equipment are extremely limited in downtown and established neighborhood infill sites. A significant portion of St. Petersburg falls within FEMA flood zones because the city is surrounded by water on three sides, requiring elevated first floors or flood-resistant construction on many parcels. Every multi-family structure must meet Florida Building Code requirements for coastal wind zones. Additionally, parking requirements in the city's land development regulations often drive site design decisions, particularly for mid-rise and high-rise projects where structured parking becomes necessary."
  },
  {
    question: "Does FCS build both apartments and condominiums in St. Petersburg?",
    answer: "Yes, we construct both rental apartments and for-sale condominiums throughout St. Petersburg. The construction quality expectations differ between the two product types. Condominium projects require particular attention to unit separation, sound transmission control, individual utility metering, and finish quality that meets buyer expectations. We also understand the Florida Condominium Act requirements that affect construction documentation, warranty obligations, and turnover to condominium associations. Our apartment construction delivers institutional-grade durability designed for long-term rental operations, with efficient unit layouts and durable common area finishes."
  },
  {
    question: "How does FCS handle multi-family permitting through the City of St. Petersburg?",
    answer: "Multi-family projects in St. Petersburg go through the City of St. Petersburg Development Services Department. Depending on the project scope and location, additional review may be required from the Development Review Commission, particularly for larger projects that require site plan approval or planned unit development designation. We prepare comprehensive permit packages that address building code, fire code, stormwater management, parking, landscape, and accessibility requirements in a single coordinated submission. For projects in or adjacent to historic overlay districts, we also manage the Certificate of Appropriateness process through the Community Planning and Preservation Commission."
  },
  {
    question: "What areas of St. Petersburg see the most multi-family construction activity?",
    answer: "Downtown St. Petersburg leads in high-rise and mid-rise multi-family development, with condo towers and luxury apartments along the bayfront and within the urban core. The EDGE District and Warehouse Arts District attract mid-rise and townhome development that blends with the neighborhood's creative character. The Gateway corridor sees garden-style and mid-rise apartments supporting the employment base. Infill townhome projects are common in Crescent Heights, Old Southeast, and along major transit corridors. Shore Acres and Isla del Sol see waterfront-oriented multi-family renovation and replacement projects where aging structures are being modernized or rebuilt to current codes."
  },
  {
    question: "What wind and storm resistance requirements apply to multi-family construction in St. Petersburg?",
    answer: "St. Petersburg falls within Florida Building Code wind zones that require design for sustained winds of 130 to 150 mph depending on the specific location and exposure category. Multi-family buildings must use impact-rated windows and doors or approved shutter systems. Roof systems require enhanced attachment schedules with closer fastener spacing and specific underlayment requirements. Concrete and masonry construction, which dominates multi-family building in St. Petersburg, must meet reinforcement and connection standards designed for the coastal wind environment. Elevated buildings in flood zones have additional structural requirements for wave action resistance below the base flood elevation."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Multi-Family Construction", href: "/services/commercial/multi-family/" },
  { name: "St. Petersburg", href: "/multi-family-construction-st-petersburg/" },
];

export default function MultiFamilyConstructionStPetersburgPage() {
  return (
    <>
      <LocalBusinessSchema city="St. Petersburg" service="Multi-Family Construction" />
      <ServiceSchema
        serviceName="Multi-Family Construction"
        serviceDescription="Multi-family construction in St. Petersburg, FL. Apartments, condominiums, townhomes, and mixed-use residential on Florida's densest peninsula. Licensed CBC1262722, 40+ years experience."
        city="St. Petersburg"
        minPrice="500000"
        serviceCategories={["Apartment Construction", "Condominium Construction", "Townhome Development", "Mixed-Use Residential", "Multi-Family Renovation"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/gandy-sherwood-townhomes/gandy-sherwood-townhomes-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving St. Petersburg, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Multi-Family Construction in St. Petersburg, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              In Florida's most densely populated county, housing demand drives vertical. Florida Construction Specialists builds the apartments, condominiums, and townhomes that St. Petersburg's peninsula geography requires, from luxury waterfront towers downtown to infill townhome communities in established neighborhoods across Pinellas County.
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
                Discuss Your Development
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
              Housing Density on a Peninsula: Why St. Petersburg Builds Up
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Pinellas County has no room to sprawl. As the most densely populated county in Florida, bounded by Tampa Bay on one side and the Gulf of Mexico on the other, the land that exists is essentially all spoken for. St. Petersburg, the county's largest city with over 260,000 residents, addresses its housing needs through multi-family development -- apartments, condominiums, and townhomes that accommodate population growth within the peninsula's geographic constraints. This is not a market that can rely on new subdivisions spreading into unincorporated farmland. Growth happens through infill, redevelopment, and vertical construction.
              </p>
              <p className="mb-6">
                Downtown St. Petersburg's transformation from a quiet waterfront district into a high-rise urban center illustrates this trajectory. Projects like One St. Petersburg, 400 Central, and the residential towers along the bayfront have added hundreds of condominium and apartment units to the downtown core. The Sundial district, the Mahaffey Theater waterfront area, and Beach Drive have become destinations that generate residential demand from people who want to live within walking distance of cultural amenities, restaurants, and Tampa Bay waterfront access. This downtown density is reshaping the multi-family construction standards in the market -- projects must compete on design quality, amenity packages, and construction durability.
              </p>
              <p className="mb-6">
                Beyond downtown, multi-family development follows distinct neighborhood patterns across St. Petersburg. The EDGE District and Warehouse Arts District attract mid-rise and townhome projects that fit the creative neighborhood character. Crescent Heights and the Old Southeast see townhome infill on lots where single-family homes once stood. The Gateway corridor builds garden-style and mid-rise apartments to serve the corporate employment base anchored by Raymond James Financial and Jabil. Even neighborhoods like Jungle Terrace, Tyrone, and Pinellas Point are seeing aging apartment complexes renovated or replaced with modern multi-family construction that meets current building code and market expectations.
              </p>
              <p>
                Florida Construction Specialists understands that multi-family construction in St. Petersburg is fundamentally different from mainland markets. Limited staging space, flood zone requirements, aggressive wind load engineering, and the need to coordinate with dense surrounding development shape every project from site planning through certificate of occupancy. We bring the in-house engineering depth and four decades of Florida construction experience needed to navigate these peninsula-specific conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/gandy-sherwood-townhomes/gandy-sherwood-townhomes-display.webp"
        alt="Multi-family townhome construction in St. Petersburg"
        title="Multi-Family Development Across the Peninsula"
        subtitle="Apartments, condominiums, and townhomes throughout St. Petersburg and Pinellas County"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Multi-Family Construction Services for St. Petersburg's Density-Driven Market
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            From high-rise condominiums on the bayfront to townhome communities in established neighborhoods, we deliver multi-family construction calibrated for peninsula conditions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "High-Rise and Mid-Rise",
                description: "Concrete and steel multi-family construction for downtown St. Petersburg and waterfront locations. We engineer these structures for the peninsula's coastal wind exposure, manage the complex logistics of vertical construction in dense urban settings, and deliver the finish quality that luxury condominium buyers and Class A apartment tenants expect."
              },
              {
                icon: Users,
                title: "Garden-Style Apartments",
                description: "Three- and four-story apartment communities throughout St. Petersburg's suburban corridors. The Gateway area, Tyrone, and 4th Street corridor see demand for well-constructed garden-style apartments that balance construction cost efficiency with durability and livability for the long-term rental market."
              },
              {
                icon: HardHat,
                title: "Townhome Communities",
                description: "Infill townhome development on redevelopment sites throughout St. Petersburg. Crescent Heights, Old Southeast, and the EDGE District fringe attract fee-simple townhome projects where our experience with tight-lot construction, shared-wall details, and city stormwater requirements delivers efficient, code-compliant communities."
              },
              {
                icon: Shield,
                title: "Condominium Construction",
                description: "Purpose-built condominiums with the construction documentation, warranty provisions, and quality control that Florida Condominium Act compliance requires. We understand the distinction between condominium and apartment construction, from individual unit metering and sound transmission control to turnover documentation for newly formed associations."
              },
              {
                icon: Briefcase,
                title: "Mixed-Use Residential",
                description: "Multi-family development with ground-floor commercial space, a format that St. Petersburg's downtown and neighborhood commercial districts increasingly demand. We coordinate the distinct construction requirements of retail and residential uses within the same structure, including separate access, utility systems, and code compliance paths."
              },
              {
                icon: Award,
                title: "Multi-Family Renovation",
                description: "Major renovation of existing apartment and condominium buildings throughout St. Petersburg. Aging multi-family buildings across the peninsula need structural upgrades, MEP system replacement, unit modernization, and exterior envelope repair. We perform these renovations while minimizing disruption to existing residents, managing phased occupancy during construction."
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
              Peninsula-Specific Multi-Family Construction Expertise
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Building multi-family housing in St. Petersburg requires understanding how the peninsula's physical geography, regulatory environment, and neighborhood character shape every development decision. The constraints are real, and contractors who approach St. Pete as just another Florida market produce buildings that underperform structurally, financially, or both.
              </p>
              <p className="mb-6">
                The <a href="https://www.stpete.org/building_and_development_review/" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of St. Petersburg Development Services Department</a> reviews multi-family projects for building code compliance, site plan approval, and consistency with the city's land development regulations. Larger multi-family developments typically require Development Review Commission approval, which evaluates site design, parking, stormwater, landscaping, and compatibility with surrounding uses. We prepare comprehensive permit submissions that address all review criteria simultaneously, reducing the back-and-forth that delays less experienced developers.
              </p>
              <p className="mb-6">
                Flood zone engineering is a defining factor in St. Petersburg multi-family construction. With water surrounding the peninsula on three sides, FEMA flood zones cover a substantial percentage of developable land. Shore Acres, Coquina Key, Isla del Sol, and Tierra Verde all have significant flood zone exposure, and even downtown bayfront sites often fall within or adjacent to the coastal high hazard area. Multi-family buildings in these zones require elevated first floors, flood-resistant materials below the base flood elevation, and structural systems designed for wave action and hydrostatic pressure. We engineer these requirements into the project from the earliest design phases rather than treating them as afterthought add-ons.
              </p>
              <p className="mb-6">
                Wind resistance engineering for multi-family buildings on the peninsula goes beyond standard Florida Building Code minimums. St. Petersburg's exposure to both Gulf of Mexico and Tampa Bay wind fields means commercial structures face more sustained wind events than buildings shielded by surrounding development on the mainland. Impact-rated fenestration, enhanced roof attachment, and reinforced structural connections are standard for every multi-family project we build in Pinellas County.
              </p>
              <p>
                The neighborhoods where multi-family development happens in St. Petersburg each present distinct construction contexts. Downtown high-rises require tower crane logistics coordinated with city right-of-way, deep foundation systems for the sandy soil profile, and construction sequencing that accounts for the area's high pedestrian and vehicular traffic. EDGE District mid-rise projects must respect the creative neighborhood's aesthetic while meeting modern structural and life-safety codes. Townhome infill in established neighborhoods like Crescent Heights requires sensitivity to existing residential scale and character. Our experience across all of these St. Petersburg contexts means we adapt our approach to each site rather than applying a one-size-fits-all construction method.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            St. Petersburg Multi-Family Construction Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            A structured process adapted for the peninsula's density, flood zones, and regulatory environment.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Site Evaluation and Feasibility",
                description: "We assess your St. Petersburg site for flood zone classification, geotechnical conditions, utility capacity, and zoning compatibility. Peninsula infill sites often present challenges that affect project feasibility -- existing underground infrastructure, limited construction staging area, and stormwater management constraints that must be identified before design commitments are made.",
                icon: FileCheck,
              },
              {
                step: "02",
                title: "Design and Engineering Coordination",
                description: "We coordinate structural, mechanical, electrical, and plumbing design for St. Petersburg's coastal conditions. Foundation engineering addresses the sandy soil profile and flood elevation requirements. Structural design incorporates hurricane wind loads appropriate for the peninsula's exposure category. Building envelope design accounts for driving rain from multiple directions and persistent salt air.",
                icon: Building2,
              },
              {
                step: "03",
                title: "City of St. Petersburg Permitting",
                description: "We manage the complete permitting process through Development Services, including site plan review by the Development Review Commission where required. For multi-family projects in or near historic overlay districts, we coordinate the Certificate of Appropriateness process. Our established relationships with city review staff help maintain review timelines.",
                icon: Briefcase,
              },
              {
                step: "04",
                title: "Peninsula-Adapted Construction",
                description: "Construction execution accounts for St. Petersburg's specific logistics challenges. Tight infill sites require just-in-time material delivery and creative equipment placement. Rainy season scheduling protects weather-sensitive work. We coordinate with city traffic management for projects that affect public right-of-way, and maintain communication with neighboring property owners throughout construction.",
                icon: HardHat,
              },
              {
                step: "05",
                title: "Completion and Turnover",
                description: "Final inspections, Certificate of Occupancy, and comprehensive project documentation. For condominium projects, we prepare the construction documentation required for developer-to-association turnover under the Florida Condominium Act. For apartment projects, we coordinate unit turnover with property management teams to ensure a smooth transition to operations.",
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
        title="St. Petersburg Multi-Family Construction FAQ"
        description="Common questions about multi-family construction projects in St. Petersburg, Florida."
      />

      {/* Internal Links */}
      <RelatedServiceLocations currentCity="St. Petersburg" currentService="multi-family-construction" currentServiceName="Multi-Family Construction" />

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Plan Your St. Petersburg Multi-Family Development
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss your multi-family project in St. Petersburg. We will evaluate your site, review peninsula-specific construction requirements, and provide a clear development strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request a Development Consultation
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
