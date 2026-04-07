import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, Building2, Shield, Award, FileCheck, HardHat, Briefcase, AlertTriangle } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/disaster-recovery-sarasota/' },
  title: "Disaster Recovery Sarasota | Hurricane",
  description: "Disaster recovery construction in Sarasota by Florida Construction Specialists. Hurricane response storm surge recovery barrier island rebuilding.",
  openGraph: {
    title: "Disaster Recovery Sarasota | Hurricane",
    description: "Disaster recovery construction in Sarasota by Florida Construction Specialists. Hurricane response storm surge recovery barrier island rebuilding.",
    url: "https://floridaconstructionspecialists.com/disaster-recovery-sarasota/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "What makes Sarasota particularly vulnerable to hurricane-related disasters?",
    answer: "Sarasota faces multiple compounding disaster risks from hurricanes. The barrier islands of Siesta Key, Lido Key, Longboat Key, and Bird Key sit directly in the Gulf of Mexico with no natural protection from storm surge. The bayfront along downtown Sarasota is vulnerable to surge that funnels into Sarasota Bay. Much of the built environment on the keys dates from the 1970s and 1980s and was constructed to less stringent hurricane codes than currently required. Hurricane Ian in 2022 demonstrated these vulnerabilities when surge, wind, and flooding caused catastrophic damage across the barrier islands and bayfront. The combination of Gulf exposure, barrier island geography, aging building stock, and growing property values makes Sarasota one of Florida's highest hurricane risk markets."
  },
  {
    question: "How does FCS prepare for disaster response in the Sarasota area?",
    answer: "We maintain pre-storm preparation protocols that include equipment staging, material pre-positioning, and communication plans with existing clients and emergency management. During hurricane season we monitor National Hurricane Center forecasts and begin preparation when a system threatens the Sarasota area. After a major event, we deploy emergency response teams as soon as roads and bridge access allow. For barrier island properties, we coordinate with Sarasota County Emergency Management regarding bridge reopening timelines and access restrictions. We maintain relationships with specialty subcontractors for emergency services including temporary roofing, water extraction, structural shoring, and debris removal."
  },
  {
    question: "What is the typical recovery timeline for Sarasota properties after a major hurricane?",
    answer: "Recovery timelines in Sarasota depend on the severity of damage and the property's location. Emergency stabilization typically begins within days of road access being restored. Damage assessment and insurance documentation take two to four weeks for comprehensive evaluation. Permitting for substantial repairs through the City of Sarasota Building Department or Sarasota County can take four to eight weeks depending on the volume of concurrent applications after a major storm. Construction timelines range from three to six months for moderate commercial repairs to twelve to twenty-four months for comprehensive rebuilds of severely damaged barrier island properties. Material supply chain disruptions and trade labor availability after a major regional hurricane event can extend timelines beyond normal estimates."
  },
  {
    question: "Does FCS handle both emergency stabilization and long-term disaster recovery construction?",
    answer: "Yes, we provide the full continuum of disaster recovery services from initial emergency response through complete reconstruction. Emergency stabilization includes temporary roofing, water extraction, structural shoring, board-up, and debris management. Long-term recovery includes structural repair or rebuilding, roof system replacement, exterior envelope restoration, interior buildout, mechanical and electrical system replacement, and site restoration. Keeping both phases under one contractor provides continuity of documentation for insurance claims, eliminates the transition gaps that occur when different contractors handle emergency and permanent work, and ensures that emergency work is integrated into the final restoration plan rather than being redone."
  },
  {
    question: "How does the substantial damage rule affect disaster recovery in Sarasota?",
    answer: "Under Florida regulations, when a building sustains damage exceeding 50 percent of its pre-damage market value, it is classified as substantially damaged. Substantially damaged buildings must be brought into compliance with the current Florida Building Code and current FEMA flood zone requirements when repaired. For older buildings on Sarasota's barrier islands, this can mean significant additional construction requirements including flood elevation compliance, enhanced wind resistance, and updated structural systems. The substantial damage determination is made by the local building official and directly affects the scope and cost of recovery construction. We work with building departments and structural engineers to evaluate substantial damage determinations and develop recovery plans that meet current code requirements."
  },
  {
    question: "What role does FEMA play in Sarasota disaster recovery, and how does FCS coordinate with federal programs?",
    answer: "FEMA provides several forms of disaster assistance in Sarasota after a federal disaster declaration. For commercial and multi-family properties, the primary federal programs include SBA disaster loans for businesses and property owners, FEMA Public Assistance for government and nonprofit facilities, and Hazard Mitigation Grant Program funding for projects that reduce future disaster risk. We help Sarasota property owners understand which programs may apply to their situation and ensure that recovery construction documentation meets federal program requirements. For properties being rebuilt with mitigation improvements, we design and construct enhanced hurricane resistance that may qualify for FEMA mitigation funding and reduce future insurance costs."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Disaster Recovery", href: "/disaster-recovery/" },
  { name: "Sarasota", href: "/disaster-recovery-sarasota/" },
];

export default function DisasterRecoverySarasotaPage() {
  return (
    <>
      <LocalBusinessSchema city="Sarasota" service="Disaster Recovery" />
      <ServiceSchema
        serviceName="Disaster Recovery"
        serviceDescription="Disaster recovery construction in Sarasota, FL. Hurricane response, storm surge recovery, barrier island rebuilding, emergency stabilization, commercial reconstruction. Licensed CBC1262722, 40+ years experience."
        city="Sarasota"
        minPrice="500000"
        serviceCategories={["Hurricane Damage Recovery", "Storm Surge Rebuilding", "Emergency Stabilization", "Commercial Reconstruction", "Barrier Island Recovery"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/home-hero-after-great-disasters-sandy-crop/home-hero-after-great-disasters-sandy-crop-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Sarasota, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Disaster Recovery in Sarasota, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              When Hurricane Ian struck Sarasota County in September 2022, barrier island communities, bayfront properties, and inland structures sustained damage that would take years to fully recover from. Florida Construction Specialists provides comprehensive disaster recovery from emergency stabilization through complete reconstruction, combining construction capability with insurance industry expertise to help Sarasota property owners rebuild stronger than before.
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
                <AlertTriangle className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">Emergency Response Ready</span>
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

      {/* Sarasota Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Sarasota's Gulf Coast Exposure Demands Experienced Disaster Recovery
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Sarasota's disaster profile is dominated by hurricane risk, and the geography makes it one of the most exposed municipalities on Florida's Gulf Coast. The barrier islands of Siesta Key, Lido Key, Longboat Key, and Bird Key extend into the Gulf of Mexico with minimal topographic protection from storm surge. Hurricane Ian's 2022 impact demonstrated in real terms what emergency models have long predicted: a direct or near-direct Gulf hurricane can push six to twelve feet of surge across the barrier islands, inundate low-lying bayfront areas downtown, and cause wind damage across the entire county.
              </p>
              <p className="mb-6">
                The disaster recovery challenge in Sarasota is compounded by the age and value of the building stock. Barrier island condominiums built in the 1970s and 1980s sustained more severe damage from Ian than newer structures because they were designed to less stringent wind and flood standards. Downtown commercial buildings that appeared sound before the storm revealed hidden vulnerabilities in their building envelopes. The high property values throughout Sarasota County mean that disaster recovery projects routinely involve millions of dollars in construction scope, complex insurance claims with multiple carriers, and restoration standards that match one of Florida's most affluent property markets.
              </p>
              <p className="mb-6">
                Beyond hurricanes, Sarasota faces disaster risks from severe thunderstorms that produce damaging straight-line winds and localized flooding during the summer rainy season. Tropical storms that do not reach hurricane intensity can still produce enough rainfall to cause significant water damage in low-lying areas. Fire events in commercial properties create localized disaster recovery needs year-round. Each of these scenarios requires rapid response, thorough damage documentation, and construction expertise to restore affected properties.
              </p>
              <p>
                Florida Construction Specialists has supported disaster recovery across the Tampa Bay region for decades. Our principal's combined experience in construction and as an Executive General Adjuster provides Sarasota property owners with a recovery partner who understands both the building science required for proper restoration and the insurance processes required for fair claims resolution. We manage the full recovery process from the first emergency call through final Certificate of Occupancy and claims closure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/oahu-wind-storm-damage-repair-services-1024x683-1/oahu-wind-storm-damage-repair-services-1024x683-1-display.webp"
        alt="Storm damage recovery construction on coastal property"
        title="Rebuilding Sarasota Stronger"
        subtitle="From emergency stabilization through complete reconstruction for hurricane-impacted properties"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Disaster Recovery Capabilities for Sarasota Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            From the first hours after a disaster through complete property restoration, we manage every phase of recovery.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "Emergency Response",
                description: "Rapid deployment for emergency stabilization after hurricanes, severe storms, fires, and flooding events. Temporary roofing, water extraction, structural shoring, board-up, and debris management. We coordinate with Sarasota County Emergency Management on barrier island access and utility restoration."
              },
              {
                icon: Shield,
                title: "Damage Assessment",
                description: "Comprehensive evaluation of all damage including hidden impacts behind walls, above ceilings, and below flood lines. Our insurance industry background ensures damage documentation is thorough and formatted for carrier acceptance. We separate storm damage from pre-existing conditions where applicable."
              },
              {
                icon: Building2,
                title: "Structural Reconstruction",
                description: "Full structural rebuilding for severely damaged properties in Sarasota. When disaster damage triggers substantial damage determinations, we design and construct to current Florida Building Code requirements including enhanced wind resistance and flood zone compliance for barrier island and bayfront properties."
              },
              {
                icon: HardHat,
                title: "Storm Surge Recovery",
                description: "Specialized recovery for properties impacted by salt water storm surge on Sarasota's barrier islands. Complete gut and rebuild of surge-impacted floors, salt-contaminated structural treatment, mechanical and electrical system replacement, and interior restoration with materials appropriate for the coastal environment."
              },
              {
                icon: Briefcase,
                title: "Commercial Property Recovery",
                description: "Disaster recovery for Sarasota commercial buildings, office spaces, retail properties, and hospitality facilities. We understand the urgency of restoring commercial operations and develop phased recovery plans that prioritize business-critical areas while comprehensive restoration continues."
              },
              {
                icon: FileCheck,
                title: "Mitigation Construction",
                description: "Building back stronger with enhanced hurricane resistance that exceeds pre-disaster condition. Impact-rated glazing upgrades, enhanced roof systems, reinforced structural connections, and flood mitigation improvements that reduce vulnerability to future storms and may qualify for insurance premium reductions."
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
              Local Knowledge Critical for Sarasota Disaster Recovery
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Disaster recovery in Sarasota requires understanding the unique logistical, regulatory, and environmental challenges that this coastal market presents. The barrier islands are accessible only by bridge, which means emergency response, material delivery, and construction operations all depend on bridge access that may be interrupted or restricted after a major storm. We plan for these constraints in our emergency response protocols and maintain relationships with Sarasota County Emergency Management to stay informed about access timelines.
              </p>
              <p className="mb-6">
                The <a href="https://www.sarasotafl.gov/government/building-department" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of Sarasota Building Department</a> and Sarasota County Building Services process disaster recovery permits, and after a major hurricane event the volume of concurrent applications creates processing delays that less experienced contractors fail to anticipate. We prepare complete permit packages with detailed engineering documentation to minimize review cycles. When substantial damage determinations apply, we coordinate with the building official on code upgrade requirements and develop construction plans that meet current standards.
              </p>
              <p className="mb-6">
                Sarasota's flood zone designations are critical to disaster recovery construction. Much of the barrier islands fall within FEMA flood zones VE and AE, which impose specific requirements on rebuilt structures including minimum finish floor elevations, breakaway wall construction below flood level, and flood-resistant materials. Properties that trigger the substantial damage rule must bring the rebuilt structure into compliance with current flood zone requirements, which can significantly affect the scope and cost of recovery construction. We work with FEMA elevation specialists and structural engineers to ensure recovered buildings comply with all applicable flood zone requirements.
              </p>
              <p>
                The seasonal population dynamic in Sarasota affects disaster recovery timing and communication. Many barrier island and downtown property owners are seasonal residents who may not be physically present after a storm event. We maintain communication with property owners, property managers, and condominium associations regardless of their physical location, providing regular updates, photographic documentation, and decision packages that enable informed decisions from any location. This is particularly important for condominium associations where board members may be scattered across multiple states.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Sarasota Disaster Recovery Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            A structured recovery process from emergency response through complete reconstruction and claims closure.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Emergency Stabilization",
                description: "Immediate response to prevent further damage. Temporary roofing, water extraction, structural shoring, environmental containment, and debris management. All emergency work is documented for insurance recovery. For Sarasota barrier island properties, we coordinate with emergency management on bridge access and staging areas.",
                icon: AlertTriangle,
              },
              {
                step: "02",
                title: "Damage Assessment and Documentation",
                description: "Comprehensive damage evaluation including destructive investigation where warranted. We document all damage with photographs, moisture readings, structural condition reports, and a detailed scope of loss. Our insurance industry background ensures documentation supports the claims process. We identify substantial damage determination implications early.",
                icon: FileCheck,
              },
              {
                step: "03",
                title: "Recovery Planning and Permitting",
                description: "Development of comprehensive recovery plans that account for code upgrade requirements, flood zone compliance, and the property owner's goals for the rebuilt structure. We manage permitting through the City of Sarasota Building Department or Sarasota County and coordinate insurance claims authorization before major construction begins.",
                icon: Building2,
              },
              {
                step: "04",
                title: "Recovery Construction",
                description: "Full reconstruction managed by experienced project managers with our Sarasota-area subcontractor network. We rebuild to current Florida Building Code standards with enhanced hurricane resistance where triggered by substantial damage rules. Barrier island projects include flood zone compliance, salt-resistant materials, and environmental coordination.",
                icon: HardHat,
              },
              {
                step: "05",
                title: "Closeout and Claims Closure",
                description: "Final inspections, Certificate of Occupancy, warranty documentation, and comprehensive insurance claims closure. We provide the property owner with complete as-built documentation, maintenance recommendations for the recovered structure, and records supporting any remaining insurance payments. For properties rebuilt to enhanced standards, we document mitigation improvements that may reduce future insurance premiums.",
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
        title="Sarasota Disaster Recovery FAQ"
        description="Common questions about disaster recovery and hurricane rebuilding in Sarasota, Florida."
      />

      {/* Internal Links */}
      <RelatedServiceLocations currentCity="Sarasota" currentService="disaster-recovery" currentServiceName="Disaster Recovery" />

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Sarasota Disaster Recovery When You Need It
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for disaster recovery support. Whether responding to an active emergency or planning recovery from existing storm damage, we provide the construction expertise and insurance knowledge Sarasota property owners need to rebuild.
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
              <span>Emergency Response Ready</span>
              <span>{BUSINESS_INFO.yearsInBusiness}+ Years Experience</span>
              <span>Insurance Claims Expertise</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
