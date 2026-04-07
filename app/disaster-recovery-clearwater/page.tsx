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
  alternates: { canonical: 'https://floridaconstructionspecialists.com/disaster-recovery-clearwater/' },
  title: "Disaster Recovery Clearwater | Hurricane",
  description: "Disaster recovery construction in Clearwater by Florida Construction Specialists. Barrier island hurricane response storm surge recovery.",
  openGraph: {
    title: "Disaster Recovery Clearwater | Hurricane",
    description: "Disaster recovery construction in Clearwater by Florida Construction Specialists. Barrier island hurricane response storm surge recovery.",
    url: "https://floridaconstructionspecialists.com/disaster-recovery-clearwater/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "What makes Clearwater's barrier island uniquely vulnerable to disaster events?",
    answer: "Clearwater Beach occupies a narrow barrier island with the Gulf of Mexico on the west and Clearwater Harbor on the east. During hurricanes, the island faces direct Gulf wind impact without any landmass buffering, storm surge that can overtop the island from both Gulf and harbor sides simultaneously, and wave action that erodes foundations and undermines structures. The island's limited evacuation routes across the Memorial Causeway and Sand Key Bridge create logistical constraints for both pre-storm evacuation and post-storm recovery access. These factors combine to make Clearwater Beach one of the most disaster-vulnerable locations in the Tampa Bay region."
  },
  {
    question: "How does FCS coordinate disaster recovery on Clearwater Beach when access is restricted?",
    answer: "After major storm events, Clearwater Beach barrier island access is restricted by the City of Clearwater Emergency Management until bridges are inspected and cleared. We coordinate with city officials to obtain contractor re-entry credentials as soon as possible, typically through Pinellas County's emergency management system. Our pre-storm preparation includes staging materials and equipment at mainland locations near the Memorial Causeway so we can deploy immediately upon bridge reopening. For the initial response phase, we focus on building stabilization and tarping that prevents secondary water damage while we plan the full recovery scope."
  },
  {
    question: "What flood zone considerations affect disaster recovery construction in Clearwater?",
    answer: "Most of Clearwater Beach falls within FEMA VE flood zones, which impose the most stringent construction requirements in the National Flood Insurance Program. When disaster recovery involves substantial improvement or substantial damage to a structure, defined as repair costs exceeding 50 percent of the building's pre-damage market value, the entire structure must be brought into compliance with current flood zone requirements. This can require elevating the building above the current base flood elevation, converting ground-floor enclosed space to breakaway walls, and upgrading all materials below BFE to flood-resistant specifications. Mainland Clearwater areas in AE zones face similar substantial damage triggers but with less restrictive construction requirements."
  },
  {
    question: "Does FCS handle disaster recovery for Clearwater condominium associations?",
    answer: "Yes, condominium disaster recovery is a major component of our Clearwater work. Beach-area condominium buildings often sustain the most significant storm damage due to their size, exposure, and the number of individual units affected. We coordinate with association boards, property managers, and individual unit owners to manage building-wide recovery projects. Common elements including roof systems, building envelope, parking structures, elevators, and common areas are restored under the association's master policy, while unit-interior damage may involve coordination with individual owners' HO-6 policies. Our experience managing these multi-party recovery projects ensures efficient construction while maintaining clear communication with all stakeholders."
  },
  {
    question: "How does Clearwater's rainy season affect disaster recovery timelines?",
    answer: "Clearwater's hurricane season overlaps directly with the June through November rainy season, meaning most disaster events occur during the wettest part of the year. Post-storm recovery work on damaged buildings with compromised envelopes must contend with daily afternoon thunderstorms that can drive additional water into exposed structures. We implement aggressive temporary weatherproofing immediately after storm events, use interior dehumidification systems to control moisture during the recovery period, and schedule exterior restoration work to progress from top down, re-establishing the roof and upper building envelope first to protect interior work below. This weather-aware sequencing prevents the secondary damage that extends recovery timelines and increases costs."
  },
  {
    question: "What role does the City of Clearwater play in disaster recovery permitting?",
    answer: "The City of Clearwater Development Services Department manages disaster recovery permitting, sometimes under expedited emergency procedures that accelerate review timelines after declared disasters. However, the underlying code requirements are not waived during emergencies. Substantial damage determinations trigger full code compliance upgrades including current wind speed requirements, flood zone construction standards, and energy code compliance. The city conducts substantial damage assessments on affected buildings after major storms, and buildings determined to be substantially damaged have limited time to begin repairs before facing additional regulatory consequences. We manage the permitting process for disaster recovery projects and ensure all reconstruction meets current Clearwater building code requirements."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Disaster Recovery", href: "/disaster-recovery/" },
  { name: "Clearwater", href: "/disaster-recovery-clearwater/" },
];

export default function DisasterRecoveryClearwaterPage() {
  return (
    <>
      <LocalBusinessSchema city="Clearwater" service="Disaster Recovery" />
      <ServiceSchema
        serviceName="Disaster Recovery"
        serviceDescription="Disaster recovery construction in Clearwater, FL. Hurricane response, storm surge recovery, emergency stabilization, barrier island rebuilding. Licensed CBC1262722, 40+ years experience."
        city="Clearwater"
        minPrice="100000"
        serviceCategories={["Hurricane Recovery", "Storm Surge Restoration", "Emergency Stabilization", "Flood Damage Repair", "Commercial Rebuilding"]}
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
              <span className="text-brand-gold font-semibold">Serving Clearwater, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Disaster Recovery in Clearwater, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Clearwater's barrier island sits directly in the Gulf of Mexico's path, making it one of the most disaster-exposed communities in Tampa Bay. When hurricanes, storm surge, or severe flooding strikes, Florida Construction Specialists provides the emergency stabilization, structural assessment, and full-scope recovery construction that gets Clearwater properties rebuilt safely and in compliance with current building codes.
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
                Emergency Response Request
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
              Clearwater's Barrier Island Geography Demands Specialized Disaster Response
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Understanding why Clearwater faces elevated disaster risk starts with geography. Clearwater Beach sits on a barrier island separated from the mainland by Clearwater Harbor and the Intracoastal Waterway. The island is narrow, low-lying, and fully exposed to the Gulf of Mexico on its western shore. This configuration means hurricanes approaching from the Gulf deliver unobstructed wind impact, generate storm surge that can overtop the island from both the Gulf and harbor sides, and create wave action that undermines building foundations and scours beach-front sites.
              </p>
              <p className="mb-6">
                Pinellas County's hurricane evacuation zones place Clearwater Beach in Zone A, the first-to-evacuate category. This designation reflects the island's vulnerability to storm surge that can begin affecting low-lying areas before hurricane-force winds even arrive. For building owners, this vulnerability translates into potential damage scenarios that range from wind-driven rain infiltration and roof failures at the moderate end to complete ground-floor inundation and structural compromise from wave action at the severe end. Disaster recovery for these properties must address not just what the storm damaged but how to rebuild with enhanced resilience against future events.
              </p>
              <p className="mb-6">
                Mainland Clearwater faces different but significant disaster risks. The city's flat terrain and high water table create flooding challenges during heavy rainfall events, even without direct hurricane impact. Properties along US 19, the Gulf-to-Bay corridor, and in lower-lying neighborhoods can experience stormwater flooding that damages interiors, electrical systems, and building foundations. Mainland commercial properties also sustain wind damage during hurricanes, including roof failures, facade damage, and signage destruction along the high-traffic US 19 corridor.
              </p>
              <p>
                Florida Construction Specialists has responded to disaster events across the Tampa Bay region throughout our four decades of operation. Our principal's experience as an Executive General Adjuster brings the insurance perspective to disaster recovery, ensuring damage is properly documented, claims are professionally managed, and reconstruction meets both code requirements and carrier expectations. For Clearwater properties, where coastal exposure amplifies both damage severity and recovery complexity, this combined construction and insurance expertise is essential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/hurricane-ian/hurricane-ian-display.webp"
        alt="Hurricane damage and disaster recovery in coastal Florida"
        title="Clearwater Disaster Recovery"
        subtitle="Emergency response, structural stabilization, and full rebuilding for barrier island and mainland properties"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Disaster Recovery Capabilities for Clearwater's Unique Risk Profile
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            From immediate emergency response through complete building reconstruction, we provide full-scope disaster recovery for Clearwater's barrier island and mainland properties.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "Emergency Stabilization",
                description: "Immediate building securing, emergency tarping, water extraction, and structural shoring for storm-damaged Clearwater properties. We coordinate with Clearwater Emergency Management for barrier island re-entry and deploy stabilization teams as soon as access is restored to prevent secondary damage."
              },
              {
                icon: Building2,
                title: "Storm Surge Recovery",
                description: "Specialized recovery for properties inundated by Gulf storm surge. Saltwater damage remediation for structural systems, complete electrical and mechanical system replacement, interior demolition and reconstruction, and mold prevention protocols. Beach-area surge recovery requires different materials and methods than freshwater flood restoration."
              },
              {
                icon: Shield,
                title: "Structural Assessment and Repair",
                description: "Post-disaster structural evaluation of damaged buildings, including foundation assessment for surge-affected barrier island structures, structural framing evaluation, and load-bearing element testing. Repairs designed to restore structural integrity while meeting current Florida Building Code requirements."
              },
              {
                icon: HardHat,
                title: "Complete Building Reconstruction",
                description: "Full-scope reconstruction for substantially damaged Clearwater properties. When disaster damage exceeds 50 percent of building value, reconstruction must meet current code including updated wind speed requirements, flood zone compliance, and energy code standards. We manage the full reconstruction process from design through Certificate of Occupancy."
              },
              {
                icon: FileCheck,
                title: "Code Compliance Upgrades",
                description: "Disaster recovery often triggers code compliance requirements beyond the original damage. Substantially damaged buildings in Clearwater must meet current wind speed, flood zone, accessibility, and energy code standards. We integrate these upgrades into the recovery scope, managing both the damage repair and the code-required improvements."
              },
              {
                icon: Briefcase,
                title: "Insurance Claims Management",
                description: "Professional damage documentation, repair cost estimation, and carrier coordination for disaster claims. Our Executive General Adjuster background ensures damage is documented in ways that support full claim recovery, and we negotiate with carriers on behalf of Clearwater property owners when scope or pricing disputes arise."
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
              Clearwater Disaster Recovery Requires Local Knowledge and Coastal Construction Expertise
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Disaster recovery in Clearwater is not the same as disaster recovery in an inland Florida city. The barrier island's coastal exposure means recovery materials, methods, and timelines must account for the salt environment, wind loads, flood zones, and access constraints that define construction on Clearwater Beach. A recovery contractor without coastal construction experience will underspecify materials, underestimate costs, and deliver rebuilding that deteriorates prematurely in the Gulf environment.
              </p>
              <p className="mb-6">
                The <a href="https://www.clearwater-fl.com/gov/depts/pwa/ds/" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of Clearwater Development Services Department</a> conducts substantial damage assessments after major disaster events. Buildings determined to be substantially damaged, where repair costs exceed 50 percent of the pre-damage market value, must be brought into full compliance with current building codes and flood zone requirements. This can trigger significant additional construction scope beyond the direct damage repair, including raising structures above current base flood elevations, installing impact-rated windows and doors, upgrading roof systems to current wind load standards, and converting enclosed ground-floor space to breakaway walls in VE flood zones.
              </p>
              <p className="mb-6">
                Clearwater Beach's recovery logistics are constrained by the barrier island's geography. The Memorial Causeway and Sand Key Bridge are the only vehicular access points to the barrier island. Heavy construction equipment, building materials, debris removal trucks, and construction crews all compete for capacity across these two bridges. During large-scale disaster recovery events affecting multiple properties, this creates scheduling constraints that require careful coordination between contractors, the city, and bridge management authorities.
              </p>
              <p>
                We approach Clearwater disaster recovery with knowledge of the city's specific neighborhoods and their distinct recovery challenges. Gulf Boulevard resort properties need rapid revenue restoration. Sand Key condominium towers require multi-story scaffolding and high-rise construction management. Mainland US 19 corridor commercial properties need facade and signage restoration that maintains business visibility. Downtown Clearwater buildings require coordination with adjacent properties and the Community Redevelopment Area's design standards. Each recovery project benefits from our established relationships with Clearwater's building officials, subcontractors, and material suppliers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Clearwater Disaster Recovery Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            A structured recovery process designed for Clearwater's barrier island vulnerability and coastal construction requirements.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Emergency Response and Access Coordination",
                description: "Immediate deployment upon safe access. For barrier island properties, we coordinate with Clearwater Emergency Management for bridge re-entry credentials. Teams perform emergency tarping, board-up, water extraction, and structural shoring to stabilize damaged buildings and prevent secondary damage from weather exposure.",
                icon: AlertTriangle,
              },
              {
                step: "02",
                title: "Damage Assessment and Scope Development",
                description: "Comprehensive evaluation of structural, mechanical, electrical, plumbing, and building envelope damage. For Clearwater properties, we assess saltwater exposure levels, structural integrity of flood-affected foundations, and the extent of wind damage to building envelope systems. Findings are documented for insurance claims and permitting.",
                icon: FileCheck,
              },
              {
                step: "03",
                title: "Permitting and Code Compliance Planning",
                description: "We manage permitting through the City of Clearwater, including responses to substantial damage determinations that trigger code compliance upgrades. Recovery plans address both direct damage repair and code-required improvements, providing property owners with clear cost projections for the full scope of required work.",
                icon: Briefcase,
              },
              {
                step: "04",
                title: "Recovery Construction",
                description: "Systematic rebuilding using coastal-rated materials and methods. Work sequences from envelope restoration inward, re-establishing weathertightness before interior reconstruction. Barrier island logistics are managed to optimize material delivery across the Memorial Causeway and minimize traffic impact on the recovering community.",
                icon: HardHat,
              },
              {
                step: "05",
                title: "Closeout and Resilience Verification",
                description: "Final inspections, Certificate of Occupancy from the City of Clearwater, and comprehensive warranty documentation. Recovered buildings are verified to meet current wind speed, flood zone, and energy code requirements. Documentation packages support insurance claim settlement and demonstrate code compliance for future building inspections.",
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
        title="Clearwater Disaster Recovery FAQ"
        description="Common questions about disaster recovery construction in Clearwater, Florida."
      />

      {/* Internal Links */}
      <RelatedServiceLocations currentCity="Clearwater" currentService="disaster-recovery" currentServiceName="Disaster Recovery" />

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Clearwater Disaster Recovery When You Need It Most
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for emergency response, damage assessment, and full disaster recovery construction. We bring decades of coastal construction and insurance expertise to every Clearwater recovery project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Emergency Response Request
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
              <span>Prime Contractor Only</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
