import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, CheckCircle, Building2, Shield, Award, Clock, ArrowRight, FileCheck, HardHat, Briefcase, Home } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";
import { BUSINESS_INFO } from "@/lib/constants";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/luxury-custom-homes-st-petersburg/' },
  title: "Luxury Custom Homes St. Pete | Waterfront",
  description: "Luxury custom home construction in St. Petersburg by Florida Construction Specialists. Snell Isle waterfront estates Shore Acres Isla del Sol.",
  openGraph: {
    title: "Luxury Custom Homes St. Pete | Waterfront",
    description: "Luxury custom home construction in St. Petersburg by Florida Construction Specialists. Snell Isle waterfront estates Shore Acres Isla del Sol.",
    url: "https://floridaconstructionspecialists.com/luxury-custom-homes-st-petersburg/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "What makes waterfront custom home construction on St. Petersburg's peninsula different?",
    answer: "St. Petersburg's peninsula geography means waterfront homes face exposure from Tampa Bay, Boca Ciega Bay, or the Gulf of Mexico -- and in some locations, multiple water bodies simultaneously. This creates engineering requirements that exceed standard coastal construction. Foundation systems must account for both the sandy soil profile and the high water table typical across the peninsula. Structural framing must resist sustained wind from shifting directions rather than a single prevailing weather side. Building envelope design must prevent moisture and salt intrusion from every orientation. Homes on Snell Isle, Shore Acres waterfront, Isla del Sol, and Tierra Verde each face distinct exposure profiles that affect material selection, structural design, and site planning in ways specific to their position on the peninsula."
  },
  {
    question: "Which St. Petersburg neighborhoods are most popular for luxury custom home construction?",
    answer: "Snell Isle remains St. Petersburg's most prestigious custom home address, with waterfront lots on Tampa Bay commanding premium values and supporting new construction or comprehensive rebuilds of existing estates. Shore Acres offers bayfront and canal-front lots where custom homes benefit from water access and views. Isla del Sol, located on the southern end of the peninsula, combines waterfront living with proximity to the Gulf beaches and offers both bayfront and intercoastal settings. Tierra Verde, the barrier island community at the very tip of the peninsula, provides direct Gulf access and the most dramatic waterfront settings. Within the city proper, the Old Northeast attracts custom home buyers who want walkable urban living in a historically significant neighborhood."
  },
  {
    question: "How do flood zone requirements affect custom home design in St. Petersburg?",
    answer: "Significant portions of St. Petersburg's waterfront neighborhoods fall within FEMA flood zones, which directly affect custom home design. New construction in flood zones must have the lowest habitable floor elevated above the base flood elevation, which in St. Petersburg can range from 8 to 14 feet NAVD depending on the specific zone and location. This requirement shapes the architectural design, often resulting in homes elevated on pilings or raised foundations with garage and utility areas below the flood elevation. We integrate these elevation requirements into the architectural design from the earliest concept phase so that the elevated first floor becomes an intentional design feature rather than an awkward afterthought."
  },
  {
    question: "What coastal wind resistance requirements apply to custom homes in St. Petersburg?",
    answer: "Custom homes in St. Petersburg must meet Florida Building Code requirements for coastal wind zones, with design wind speeds ranging from 130 to 150 mph depending on the specific location and exposure category. Waterfront homes with direct water exposure typically face the highest wind speed requirements. Compliance requires impact-rated windows and doors or approved hurricane shutter systems, enhanced roof-to-wall connections, specific roof sheathing attachment patterns, and structural framing engineered for the design wind loads. We exceed minimum code requirements on many custom projects because high-performance hurricane resistance also reduces insurance costs and provides genuine peace of mind for homeowners investing in premium waterfront properties."
  },
  {
    question: "Does FCS provide design-build services for custom homes in St. Petersburg?",
    answer: "Yes, we offer design-build custom home services where we coordinate architectural design, structural engineering, and construction under a single contract. This approach is particularly valuable in St. Petersburg because the peninsula's coastal requirements affect design decisions at every stage. Having the builder involved from the earliest design concepts ensures that structural, code, and constructability considerations inform the architecture rather than constraining it after design is complete. We also work effectively with independent architects if you have already selected a design team, providing pre-construction input on buildability, coastal code compliance, and cost management during the design development phase."
  },
  {
    question: "What is the typical timeline and budget for a luxury custom home in St. Petersburg?",
    answer: "Custom home construction timelines in St. Petersburg typically run 12 to 18 months from permit issuance to completion for homes in the three thousand to five thousand square foot range, with larger or more complex homes requiring 18 to 24 months. Permitting through the City of St. Petersburg adds 4 to 8 weeks for standard residential projects, with additional review time for properties in flood zones, near historic districts, or requiring variances. Construction costs for luxury custom homes in premium St. Petersburg locations like Snell Isle, Shore Acres waterfront, and Isla del Sol typically range from four hundred to six hundred dollars per square foot or higher depending on finishes, site conditions, and coastal construction requirements."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/commercial/" },
  { name: "Luxury Custom Homes", href: "/luxury-custom-homes/" },
  { name: "St. Petersburg", href: "/luxury-custom-homes-st-petersburg/" },
];

export default function LuxuryCustomHomesStPetersburgPage() {
  return (
    <>
      <LocalBusinessSchema city="St. Petersburg" service="Luxury Custom Homes" />
      <ServiceSchema
        serviceName="Luxury Custom Homes"
        serviceDescription="Luxury custom home construction in St. Petersburg, FL. Waterfront estates on Snell Isle, Shore Acres, Isla del Sol, and Tierra Verde. Coastal engineering, flood zone design, hurricane-resistant construction. Licensed CBC1262722, 40+ years experience."
        city="St. Petersburg"
        minPrice="500000"
        serviceCategories={["Waterfront Custom Homes", "Coastal Estate Construction", "Design-Build Custom Homes", "Flood Zone Construction", "Hurricane-Resistant Residential"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/custom-home-construction-1/custom-home-construction-1-large.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving St. Petersburg, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Luxury Custom Homes in St. Petersburg, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              St. Petersburg's peninsula offers waterfront living unlike anywhere else in Tampa Bay -- homes surrounded by bay, Gulf, and intercoastal waters in neighborhoods from Snell Isle to Tierra Verde. Florida Construction Specialists builds luxury custom homes engineered for this unique coastal environment, combining architectural vision with the structural integrity that peninsula construction demands.
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
                Discuss Your Custom Home
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
              Waterfront Custom Homes on Florida's Most Distinctive Peninsula
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Building a luxury custom home in St. Petersburg means building on a peninsula where water defines every aspect of the living experience. Snell Isle's bayfront lots look east across Tampa Bay toward the sunrise. Shore Acres waterfront homes face both open bay and protected canal settings. Isla del Sol sits at the peninsula's southern reach where bay and intercoastal waters converge. Tierra Verde, connected to the mainland by a single bridge, is a barrier island that offers direct Gulf of Mexico access and some of the most dramatic coastal settings in the Tampa Bay region. Each location provides a different relationship with water, and each demands a different approach to custom home construction.
              </p>
              <p className="mb-6">
                The allure of St. Petersburg's waterfront locations comes with engineering complexity that separates experienced peninsula builders from contractors who treat coastal construction as standard residential work with upgraded windows. Homes on Snell Isle must account for bay-facing wind exposure, flood zone elevation requirements, and soil conditions influenced by proximity to the water table. Shore Acres properties in flood-prone areas may require pile foundation systems and elevated first floors that fundamentally shape the architectural design. Isla del Sol and Tierra Verde homes face the most aggressive saltwater environment on the peninsula, with construction materials subjected to salt spray, humidity, and UV exposure from multiple water surfaces simultaneously.
              </p>
              <p className="mb-6">
                Beyond the waterfront enclaves, St. Petersburg's established neighborhoods also attract custom home construction. The Old Northeast, with its tree-canopied streets and proximity to downtown, draws buyers who want custom construction within walking distance of cultural amenities, restaurants, and the bayfront parks. These urban lots present different challenges -- tighter setbacks, neighbor proximity, tree preservation requirements, and in some cases historic district overlay considerations that affect design approval.
              </p>
              <p>
                Florida Construction Specialists brings four decades of Florida construction experience to custom home projects in St. Petersburg. Our in-house engineering coordination ensures that every custom home is designed from the foundation up for the specific conditions of its peninsula location. We understand the City of St. Petersburg's residential permitting process, flood zone construction requirements, and the practical realities of building premium homes in a dense coastal environment where logistics, material selection, and construction sequencing all differ from inland markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/custom-home-construction-1/custom-home-construction-1-large.webp"
        alt="Luxury custom home construction in St. Petersburg"
        title="Custom Homes for Peninsula Living"
        subtitle="Waterfront estates and luxury residences across St. Petersburg's premier neighborhoods"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Custom Home Construction Services for St. Petersburg's Coastal Market
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            From waterfront estates to urban custom homes, we build residences engineered for the peninsula's unique demands.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Waterfront Estate Construction",
                description: "Custom homes on Snell Isle, Shore Acres, Isla del Sol, and Tierra Verde waterfront lots. We engineer these homes for their specific water exposure profile, integrating elevated living areas, marine-grade materials, impact-resistant envelope systems, and outdoor living spaces designed to embrace the waterfront setting while resisting the coastal environment."
              },
              {
                icon: Building2,
                title: "Design-Build Custom Homes",
                description: "Single-source custom home delivery combining architectural design coordination, structural engineering, and construction management. Our design-build approach is particularly effective in St. Petersburg where coastal code requirements, flood zone constraints, and site-specific conditions must inform the design from the earliest concept phase."
              },
              {
                icon: Shield,
                title: "Hurricane-Resistant Construction",
                description: "Custom homes built to exceed Florida Building Code wind resistance requirements. We use reinforced concrete and steel construction, impact-rated fenestration, enhanced roof attachment systems, and structural connections designed for the peninsula's coastal wind exposure. Superior hurricane resistance also translates to meaningfully lower insurance premiums."
              },
              {
                icon: HardHat,
                title: "Flood Zone Custom Design",
                description: "Custom homes on peninsula lots within FEMA flood zones, with elevated first floors integrated as intentional architectural features. We design foundation systems, utility placement, and garage configurations that comply with flood zone requirements while creating graceful entry sequences and usable ground-level spaces below the flood elevation."
              },
              {
                icon: FileCheck,
                title: "Coastal Material Selection",
                description: "Premium material packages specified for the peninsula's aggressive coastal environment. Marine-grade stainless steel hardware, fiber cement or masonry exterior systems, impact-rated aluminum or vinyl window systems, and corrosion-resistant structural connectors that maintain performance and appearance despite constant salt air exposure from multiple water bodies."
              },
              {
                icon: Award,
                title: "Smart Home and Technology",
                description: "Integration of home automation, security, climate control, lighting, and entertainment systems designed for coastal living. Hurricane monitoring, water intrusion detection, and automated storm preparation systems provide practical value in the peninsula environment. We plan technology infrastructure during the design phase for seamless integration."
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
              Building in St. Petersburg's Premier Waterfront Neighborhoods
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Each of St. Petersburg's luxury home neighborhoods presents a distinct construction context shaped by its specific location on the peninsula, its relationship to the surrounding water, and the character expectations of the community.
              </p>
              <p className="mb-6">
                The <a href="https://www.stpete.org/building_and_development_review/" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of St. Petersburg Development Services Department</a> handles residential building permits, with review timelines typically running 4 to 8 weeks for custom home projects. Properties in flood zones require additional review for flood zone compliance. Waterfront properties may require coordination with environmental agencies for seawall work, dock construction, or development near protected shoreline areas. We manage all of these permitting requirements as part of our pre-construction services.
              </p>
              <p className="mb-6">
                Snell Isle represents the pinnacle of St. Petersburg residential addresses. Originally developed by Perry Snell in the 1920s, the island was designed as an exclusive community with generous lot sizes and bayfront access. Today, custom home construction on Snell Isle involves either new construction on rare available lots or comprehensive tear-down-and-rebuild projects that replace aging homes with modern construction designed for contemporary coastal living. The bayfront exposure, mature tree canopy, and neighborhood character expectations all influence design and construction decisions.
              </p>
              <p className="mb-6">
                Shore Acres offers diverse waterfront opportunities ranging from open bay frontage to protected canal-front lots. The neighborhood's flood zone exposure, particularly in areas that experienced significant flooding in recent storm events, makes flood-resistant construction design paramount. Custom homes here must balance the desire for waterfront living with practical engineering for an area where storm surge risk is well documented. Isla del Sol, at the southern end of the peninsula near the Bayway, provides a more secluded waterfront setting with bayfront and intercoastal exposure. Tierra Verde, accessible via a bridge from the mainland peninsula, offers direct Gulf of Mexico waterfront and some of the most exposed coastal building sites in the St. Petersburg area.
              </p>
              <p>
                The practical challenges of custom home construction in St. Petersburg extend beyond design and engineering. Material deliveries to waterfront sites often navigate narrow residential streets with limited staging space. Subcontractor scheduling must account for the peninsula's distance from mainland supply depots. Building during the rainy season requires careful scheduling of exterior work, particularly roofing and exterior envelope installation, to take advantage of morning dry periods before the typical afternoon thunderstorms. We manage these peninsula logistics through detailed planning and established relationships with suppliers and tradespeople who specialize in coastal residential construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            St. Petersburg Custom Home Construction Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            A structured process designed for the unique requirements of peninsula luxury home construction.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Site Analysis and Feasibility",
                description: "We evaluate your St. Petersburg lot for soil conditions, flood zone classification, setback requirements, tree preservation obligations, and utility infrastructure. For waterfront lots, we assess exposure profiles, seawall conditions, and environmental considerations. This analysis informs the architectural design parameters before the first line is drawn.",
                icon: FileCheck,
              },
              {
                step: "02",
                title: "Design Development and Engineering",
                description: "Whether providing design-build services or coordinating with your architect, we ensure the custom home design is optimized for its specific peninsula location. Structural engineering addresses coastal wind loads and flood elevation requirements. Material specifications account for saltwater exposure. Mechanical systems are designed for the peninsula's humidity and salt air conditions.",
                icon: Building2,
              },
              {
                step: "03",
                title: "Permitting Through City of St. Petersburg",
                description: "We manage the complete residential permitting process including building permits, flood zone compliance review, and any additional agency coordination required for waterfront properties. Our established relationships with city review staff support efficient processing of custom home permit applications.",
                icon: Briefcase,
              },
              {
                step: "04",
                title: "Precision Construction",
                description: "Experienced superintendents manage daily construction using our network of skilled Pinellas County subcontractors who specialize in premium residential work. We control quality at every phase, manage material procurement to prevent delays, and coordinate the complex sequencing that luxury custom homes require, particularly on waterfront sites with access and staging constraints.",
                icon: HardHat,
              },
              {
                step: "05",
                title: "Completion and Homeowner Orientation",
                description: "Comprehensive punch list resolution, final inspections, Certificate of Occupancy, and a thorough homeowner orientation covering all building systems, smart home technology, maintenance requirements specific to the peninsula's coastal environment, and warranty documentation. We provide ongoing warranty support after move-in.",
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
        title="St. Petersburg Luxury Custom Homes FAQ"
        description="Common questions about luxury custom home construction in St. Petersburg, Florida."
      />

      {/* Internal Links */}
      <RelatedServiceLocations currentCity="St. Petersburg" currentService="luxury-custom-homes" currentServiceName="Luxury Custom Homes" />

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Build Your St. Petersburg Waterfront Dream Home
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss your custom home vision for St. Petersburg. We will evaluate your site, review coastal construction requirements, and develop a plan that brings your vision to life on the peninsula.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Discuss Your Custom Home
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
    <RelatedArticles pageSlug="luxury-custom-homes-st-petersburg" />
    </>
  );
}
