import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, CheckCircle, Building2, Shield, Award, Clock, ArrowRight, FileCheck, HardHat, Briefcase, AlertTriangle } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";
import { BUSINESS_INFO } from "@/lib/constants";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/disaster-recovery-st-petersburg/' },
  title: "Disaster Recovery St. Pete | Storm Surge",
  description: "Disaster recovery construction in St. Petersburg by Florida Construction Specialists. Storm surge restoration hurricane reconstruction.",
  openGraph: {
    title: "Disaster Recovery St. Pete | Storm Surge",
    description: "Disaster recovery construction in St. Petersburg by Florida Construction Specialists. Storm surge restoration hurricane reconstruction.",
    url: "https://floridaconstructionspecialists.com/disaster-recovery-st-petersburg/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "Why is St. Petersburg considered one of the most disaster-vulnerable cities in Florida?",
    answer: "St. Petersburg's disaster vulnerability stems from its peninsula geography. The city is essentially surrounded by water -- Tampa Bay to the east, Boca Ciega Bay to the west, and the Gulf of Mexico beyond. This means hurricane storm surge can inundate the city from multiple directions depending on a storm's approach angle. Much of the city sits at low elevation, with extensive FEMA flood zones covering neighborhoods that are home to thousands of commercial buildings and residences. The peninsula also has limited evacuation routes, primarily I-275 and US-19, which constrains emergency response logistics. This combination of multi-directional surge exposure, low elevation, and limited egress makes St. Petersburg uniquely vulnerable among Florida's major cities."
  },
  {
    question: "What types of disaster recovery projects does FCS perform in St. Petersburg?",
    answer: "We perform large-scale disaster recovery construction on commercial and multi-family properties throughout St. Petersburg. This includes structural reconstruction after hurricane wind damage, building restoration following storm surge inundation, flood damage remediation and rebuild in low-lying areas, fire damage reconstruction, and comprehensive building system replacement after catastrophic events. Our disaster recovery work addresses the full scope of damage -- structural systems, building envelope, mechanical and electrical systems, interior finishes, and site improvements -- returning commercial properties to pre-disaster condition or better. We do not perform single-family residential disaster recovery."
  },
  {
    question: "How quickly can FCS respond to a disaster event in St. Petersburg?",
    answer: "We maintain disaster response readiness throughout hurricane season and year-round. Emergency stabilization teams can deploy within 24 to 48 hours of conditions allowing safe access to the peninsula. Initial stabilization work focuses on preventing additional damage through board-up, temporary roofing, water extraction, and structural shoring. However, it is important to understand that after a major storm event affecting the entire peninsula, access to St. Petersburg may be physically constrained by road conditions, utility outages, and emergency management restrictions. We pre-position materials and coordinate with our subcontractor network before predicted storm events to accelerate post-storm response."
  },
  {
    question: "How does storm surge damage differ from wind damage in disaster recovery construction?",
    answer: "Storm surge and wind damage require fundamentally different recovery approaches. Wind damage primarily affects roofing systems, building envelope components, structural connections, and above-grade building elements. Storm surge damage affects everything at and below the flood level, including foundations, ground-floor structural systems, mechanical and electrical equipment, interior finishes, and the soil beneath the building. Surge water in St. Petersburg is saltwater from the bay and Gulf, which causes corrosion damage to metal components, contaminates building materials, and creates conditions for rapid mold growth. Recovery from surge damage typically requires more extensive demolition, more complete system replacement, and longer construction timelines than wind-only damage."
  },
  {
    question: "Does disaster recovery construction in St. Petersburg require buildings to be upgraded to current code?",
    answer: "Florida law requires that when repair costs exceed 50 percent of the building's value, the entire building must be brought up to current Florida Building Code standards. For commercial buildings in St. Petersburg that sustain substantial disaster damage, this triggers full code compliance including current wind load requirements, flood zone construction standards, energy code, accessibility requirements, and fire protection systems. Even when repairs fall below the 50 percent threshold, the repaired portions must meet current code. We evaluate this threshold early in every disaster recovery project because it fundamentally affects the scope, cost, and timeline of reconstruction."
  },
  {
    question: "What flood zones in St. Petersburg affect disaster recovery planning?",
    answer: "Significant portions of St. Petersburg fall within FEMA-designated flood zones due to the city's peninsula geography and low elevation. Areas with the most extensive flood zone exposure include Shore Acres, which experienced severe flooding during recent storms, Coquina Key and Isla del Sol in the southern part of the city, the Pinellas Point area, portions of downtown along the bayfront, Tierra Verde, and low-lying areas adjacent to Salt Creek and Booker Creek. Disaster recovery construction in these zones must comply with the city's flood damage prevention ordinance, which may require elevation of substantially damaged buildings, flood-resistant construction methods below the base flood elevation, and specific foundation and structural requirements designed for flood and wave conditions."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Disaster Recovery", href: "/disaster-recovery/" },
  { name: "St. Petersburg", href: "/disaster-recovery-st-petersburg/" },
];

export default function DisasterRecoveryStPetersburgPage() {
  return (
    <>
      <LocalBusinessSchema city="St. Petersburg" service="Disaster Recovery" />
      <ServiceSchema
        serviceName="Disaster Recovery"
        serviceDescription="Disaster recovery construction in St. Petersburg, FL. Storm surge restoration, hurricane reconstruction, flood damage repair, emergency stabilization. Licensed CBC1262722, 40+ years experience."
        city="St. Petersburg"
        minPrice="100000"
        serviceCategories={["Hurricane Reconstruction", "Storm Surge Restoration", "Flood Damage Recovery", "Emergency Stabilization", "Commercial Rebuilding"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/oahu-wind-storm-damage-repair-services-1024x683-1/oahu-wind-storm-damage-repair-services-1024x683-1-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving St. Petersburg, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Disaster Recovery in St. Petersburg, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              On a peninsula surrounded by water, disaster recovery is not hypothetical -- it is an operational certainty. Florida Construction Specialists rebuilds commercial and multi-family properties across St. Petersburg after hurricanes, storm surge events, floods, and catastrophic losses, with the structural engineering depth and insurance industry experience to manage the entire recovery process.
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
                Request Emergency Assessment
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
              Disaster Recovery on a Peninsula: The Geography That Changes Everything
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Disaster recovery planning for mainland Florida cities assumes a predictable direction of threat. Coastal communities face storm surge from the ocean. Inland cities face wind and rain but minimal surge risk. St. Petersburg defies this framework entirely. Situated on a peninsula between Tampa Bay and the Gulf of Mexico, with Boca Ciega Bay creating additional water exposure to the west, the city faces surge potential from multiple bodies of water simultaneously. A hurricane tracking north through the Gulf can push surge into the bay, flooding the city's eastern neighborhoods. A storm crossing from the Atlantic can drive bay water westward while Gulf swells approach from the opposite direction. This bidirectional water threat is what makes disaster recovery in St. Petersburg fundamentally different from every other city in the Tampa Bay region.
              </p>
              <p className="mb-6">
                The consequences of this geography have been demonstrated in recent storm events. Shore Acres, a residential and mixed-use neighborhood on the bay side of the city, experienced catastrophic flooding when storms pushed Tampa Bay water inland through low-lying streets. Coquina Key, Isla del Sol, and Tierra Verde, surrounded by water on the southern tip of the peninsula, face surge exposure from virtually every approach angle. Even the Gateway business corridor, the city's largest suburban commercial district, sits close enough to bayou systems and creeks that significant rainfall events can produce localized flooding that damages ground-floor commercial spaces and parking structures.
              </p>
              <p className="mb-6">
                Beyond storm surge, St. Petersburg's disaster profile includes wind damage from hurricanes that cross the peninsula without weakening over land (since the peninsula is too narrow to provide meaningful friction), flooding from rainfall that overwhelms the city's stormwater infrastructure because the water table sits close to the surface, and secondary disasters like fires that can spread rapidly in the aftermath of storm events when municipal response capacity is stretched. The city's dense population, concentrated commercial development, and limited transportation corridors create additional disaster recovery challenges related to access, staging, and resource availability.
              </p>
              <p>
                Florida Construction Specialists approaches disaster recovery in St. Petersburg with the understanding that peninsula events are different in kind, not just in degree, from mainland disasters. Our in-house engineering capability allows us to assess structural damage accurately, and our principal's background as an Executive General Adjuster means we can navigate the insurance claims process that funds most commercial disaster recovery work. We maintain disaster readiness protocols throughout hurricane season and have established supply chain and subcontractor relationships designed to support rapid deployment when events affect the peninsula.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/oahu-wind-storm-damage-repair-services-1024x683-1/oahu-wind-storm-damage-repair-services-1024x683-1-display.webp"
        alt="Storm damage recovery and reconstruction in St. Petersburg"
        title="Rebuilding St. Petersburg's Commercial Properties"
        subtitle="Hurricane reconstruction, storm surge restoration, and flood recovery across the peninsula"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Disaster Recovery Services for St. Petersburg's Unique Threat Profile
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Comprehensive recovery capabilities addressing the multi-directional disaster threats that peninsula commercial properties face.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "Emergency Stabilization",
                description: "Rapid deployment to secure St. Petersburg commercial properties after disaster events. Board-up, temporary roofing, water extraction, structural shoring, and debris removal to prevent secondary damage. We pre-position materials before predicted storm events to accelerate post-event response when peninsula access routes reopen."
              },
              {
                icon: Building2,
                title: "Hurricane Reconstruction",
                description: "Complete structural reconstruction of commercial buildings damaged by hurricane wind events. The peninsula's exposure to both Gulf and bay wind fields means buildings experience sustained winds without the friction reduction that mainland structures benefit from. We rebuild roof systems, structural frames, building envelopes, and interior systems to current Florida Building Code standards."
              },
              {
                icon: Shield,
                title: "Storm Surge Restoration",
                description: "Comprehensive restoration of commercial properties inundated by storm surge from Tampa Bay, Boca Ciega Bay, or the Gulf of Mexico. Saltwater surge requires demolition of contaminated materials, structural drying, mold remediation, MEP system replacement, and reconstruction with flood-resistant materials below the base flood elevation."
              },
              {
                icon: HardHat,
                title: "Flood Damage Recovery",
                description: "Restoration of commercial buildings affected by freshwater flooding from rainfall, stormwater system overflows, and groundwater intrusion. St. Petersburg's high water table and limited stormwater capacity mean heavy rainfall events can flood commercial properties even without storm surge. We address both the water damage and the underlying drainage deficiencies."
              },
              {
                icon: FileCheck,
                title: "Structural Assessment and Engineering",
                description: "In-house engineering coordination for post-disaster structural assessment of commercial buildings. We work with structural engineers to evaluate damage severity, determine whether the 50 percent substantial damage threshold has been reached, and develop reconstruction plans that address both the disaster damage and any code upgrade requirements triggered by the damage level."
              },
              {
                icon: Award,
                title: "Full Commercial Rebuilding",
                description: "Complete demolition and reconstruction of commercial properties that are substantially damaged beyond repair. When disaster damage exceeds the substantial damage threshold, we manage the full rebuilding process including design, permitting, and construction to current code standards, creating a building that is more resilient than the structure it replaces."
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
              Peninsula-Specific Disaster Recovery Knowledge
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Disaster recovery construction in St. Petersburg requires knowledge of both the city's physical environment and the regulatory framework that governs post-disaster rebuilding. Contractors unfamiliar with peninsula-specific conditions often underestimate recovery scope, mismanage insurance documentation, or fail to account for code upgrade triggers.
              </p>
              <p className="mb-6">
                The <a href="https://www.stpete.org/building_and_development_review/" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of St. Petersburg Development Services Department</a> manages building permits for disaster recovery construction. After major events, the city's floodplain management office determines whether individual properties meet the substantial damage threshold, which triggers full code compliance requirements for the rebuilt structure. We coordinate with both the building department and floodplain management office to understand each property's regulatory obligations before developing reconstruction plans.
              </p>
              <p className="mb-6">
                The geographic distribution of disaster vulnerability across St. Petersburg shapes how we plan recovery operations. Shore Acres and the bayfront neighborhoods east of downtown face the highest storm surge risk from Tampa Bay. The Tierra Verde, Isla del Sol, and Coquina Key areas at the southern tip of the peninsula are vulnerable to surge from both the bay and Gulf. The Pinellas Point neighborhood sits in low-lying terrain prone to both surge and rainfall flooding. Even inland commercial areas along 4th Street, US-19, and the Tyrone corridor experience wind damage and localized flooding that can significantly affect commercial operations.
              </p>
              <p className="mb-6">
                Post-disaster logistics on the peninsula present challenges that mainland recovery does not face. Limited road access into St. Petersburg through I-275 and US-19 creates bottlenecks for material delivery and workforce transportation after major events. Power restoration may be delayed in areas where the grid infrastructure is concentrated along narrow corridors. Construction material suppliers outside the peninsula may have their own damage to manage, limiting availability. We address these logistics realities through pre-event planning, supply chain redundancy, and relationships with subcontractors who live and work on the peninsula.
              </p>
              <p>
                Our principal's background as an Executive General Adjuster is particularly relevant to disaster recovery in St. Petersburg because large-loss claims in this market involve complex coverage questions. Flood versus wind damage attribution, building code upgrade cost allocation, business interruption calculations, and disputes over pre-existing versus disaster-caused damage are common in peninsula claims. Our ability to document damage with insurance-grade precision and scope repairs in carrier-recognized formats reduces the disputes that delay recovery timelines for St. Petersburg property owners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            St. Petersburg Disaster Recovery Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            A structured recovery process designed for the peninsula's compound disaster scenarios and regulatory requirements.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Emergency Response and Damage Assessment",
                description: "Rapid deployment to stabilize your St. Petersburg property and conduct a comprehensive damage assessment. We document all damage systematically, distinguishing between wind, surge, flood, and pre-existing conditions. This damage categorization is critical for insurance claims and for determining whether the property meets the substantial damage threshold under the city's floodplain regulations.",
                icon: AlertTriangle,
              },
              {
                step: "02",
                title: "Recovery Planning and Insurance Coordination",
                description: "We develop a detailed recovery scope, coordinate with insurance carriers and their adjusters, and assess code upgrade requirements. For St. Petersburg properties in flood zones, we determine whether elevation or flood-resistant construction modifications are required. Our insurance industry background ensures damage documentation meets carrier standards from the start.",
                icon: FileCheck,
              },
              {
                step: "03",
                title: "Permitting and Regulatory Compliance",
                description: "We secure permits through the City of St. Petersburg, coordinate with the floodplain management office for properties in flood zones, and ensure the recovery plan meets all current code requirements. After major disaster events, the city may implement expedited permitting processes that we leverage to accelerate recovery timelines.",
                icon: Building2,
              },
              {
                step: "04",
                title: "Reconstruction and Restoration",
                description: "Experienced crews execute the recovery construction using Pinellas County subcontractors and material suppliers. We manage the practical challenges of peninsula construction logistics, supplemental insurance claims when hidden damage is discovered, and coordination with adjacent property recovery work in dense urban areas.",
                icon: HardHat,
              },
              {
                step: "05",
                title: "Completion and Resilience Documentation",
                description: "Final inspections, Certificate of Occupancy, and comprehensive documentation of the restored property. We provide elevation certificates for properties rebuilt in flood zones, material certifications for flood-resistant construction, and complete as-built records that serve as the baseline for future disaster preparedness and insurance documentation.",
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
        title="St. Petersburg Disaster Recovery FAQ"
        description="Common questions about disaster recovery construction in St. Petersburg, Florida."
      />

      {/* Internal Links */}
      <RelatedServiceLocations currentCity="St. Petersburg" currentService="disaster-recovery" currentServiceName="Disaster Recovery" />

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Prepare for or Recover from Disaster in St. Petersburg
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for disaster recovery assessment, emergency stabilization, or pre-event planning for your St. Petersburg commercial property. Our peninsula experience and insurance industry background ensure comprehensive recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request Emergency Assessment
            </Link>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all">
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-300">
              <span>License {BUSINESS_INFO.licenseNumber}</span>
              <span>24-48 Hour Emergency Response</span>
              <span>{BUSINESS_INFO.yearsInBusiness}+ Years Experience</span>
              <span>Prime Contractor Only</span>
            </div>
          </div>
        </div>
      </section>
    <RelatedArticles pageSlug="disaster-recovery-st-petersburg" />
    </>
  );
}
