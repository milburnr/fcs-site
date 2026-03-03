import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, CheckCircle, Building2, Shield, Award, Clock, AlertTriangle, FileCheck, Wrench, Wind, Droplets } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/disaster-recovery-tampa/' },
  title: "Disaster Recovery Tampa | Hurricane & Storm Recovery",
  description: "Disaster recovery construction in Tampa. Hurricane preparedness, emergency response, structural stabilization, commercial and residential recovery.",
  openGraph: {
    title: "Disaster Recovery Tampa | Hurricane & Storm Recovery",
    description: "Disaster recovery construction in Tampa. Hurricane preparedness, emergency response, structural stabilization, commercial and residential recovery.",
    url: "https://floridaconstructionspecialists.com/disaster-recovery-tampa/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "What makes Tampa particularly vulnerable to hurricane-related disasters?",
    answer: "Tampa faces a confluence of disaster risk factors that distinguish it from most other Florida cities. The geography of Tampa Bay creates a natural funnel effect for storm surge, with modeling showing potential surge heights of 10 to 20 feet in a worst-case Category 4 or 5 hurricane approach from the southwest. Much of Tampa's developed land sits at low elevation, including the entire Bayshore corridor, Harbour Island, Davis Islands, and significant portions of downtown and South Tampa. The city also has a large inventory of older buildings constructed before modern hurricane codes took effect in 2002. The combination of surge vulnerability, low elevation, aging building stock, and high property values makes Tampa one of the most disaster-exposed cities in the United States."
  },
  {
    question: "How does FCS prepare for disaster recovery before hurricane season?",
    answer: "Preparation is as important as response. Before each hurricane season, we review and update our emergency response protocols, verify subcontractor and supplier availability commitments, inspect and service our emergency equipment inventory, and confirm material supply chain agreements for tarps, plywood, generators, and pumps. We maintain a prioritized contact list of existing clients and commercial property managers throughout Tampa so we can mobilize response teams efficiently. We also pre-identify staging areas in elevated locations in Hillsborough County and maintain relationships with fuel suppliers to ensure equipment operation when normal supply chains are disrupted."
  },
  {
    question: "What is the difference between emergency stabilization and disaster recovery construction?",
    answer: "Emergency stabilization happens in the first 24 to 72 hours after a disaster event and focuses on preventing additional damage: tarping roof penetrations, extracting standing water, shoring compromised structures, securing building openings, and removing immediate hazards like fallen trees on structures. The goal is to stop the damage from getting worse. Disaster recovery construction is the full restoration phase that follows, which can take weeks to months depending on the damage scope. This phase involves structural repairs, building envelope restoration, MEP system replacement, interior finishes, and code compliance upgrades. For Tampa properties, disaster recovery construction must be permitted through the City of Tampa Building Services Department and pass all required inspections."
  },
  {
    question: "Can FCS handle disaster recovery for multiple Tampa properties simultaneously?",
    answer: "Yes, and this capability is essential in Tampa's disaster scenario. When a major hurricane or severe storm event hits Tampa, the damage is not limited to one property. Commercial property managers in the Westshore Business District may have multiple buildings affected. Condo associations along the Bayshore corridor all sustain similar damage patterns. Our team structure allows us to deploy multiple project managers and superintendent-led crews to different Tampa properties simultaneously, applying consistent quality standards and documentation practices across all sites. We triage properties based on structural severity and life safety, then execute recovery in a coordinated sequence that makes efficient use of subcontractor availability, which is a critical constraint when all of Tampa needs restoration at the same time."
  },
  {
    question: "How does flood damage from storm surge affect disaster recovery in Tampa?",
    answer: "Storm surge flood damage creates recovery challenges that are distinct from wind damage. When surge water enters Tampa buildings, it deposits salt, sediment, and contaminants that affect everything below the water line. Drywall, insulation, electrical wiring, mechanical equipment, and structural wood members below the surge level typically require complete removal and replacement. Salt water is particularly destructive to electrical systems and metal components. For Tampa properties in FEMA flood zones, the recovery process must also address flood insurance policy requirements, which are separate from windstorm coverage. We document surge damage with the specific evidence that flood insurance adjusters require, including high-water marks, salt deposits, and material contamination testing."
  },
  {
    question: "Does the City of Tampa expedite building permits after a declared disaster?",
    answer: "Following a federal or state disaster declaration, the City of Tampa Building Services Department typically activates emergency permitting procedures that streamline the review process for disaster recovery work. Emergency permits can often be obtained within 24 to 48 hours for critical structural stabilization. Full recovery permits still require plan review, but the review timeline is typically compressed compared to normal conditions. We maintain the relationships with Tampa building officials that help us navigate these emergency processes effectively. It is important to note that even under expedited procedures, the work itself must still meet full Florida Building Code requirements, and inspections are still required at each construction milestone."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Disaster Recovery", href: "/disaster-recovery/" },
  { name: "Tampa", href: "/disaster-recovery-tampa/" },
];

export default function DisasterRecoveryTampaPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Disaster Recovery" />
      <ServiceSchema
        serviceName="Disaster Recovery"
        serviceDescription="Disaster recovery construction services in Tampa, FL. Hurricane response, emergency stabilization, structural recovery, commercial and residential restoration. Licensed CBC1262722."
        city="Tampa"
        serviceCategories={["Hurricane Recovery", "Emergency Stabilization", "Structural Recovery", "Flood Damage Restoration", "Commercial Disaster Recovery"]}
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
              <span className="text-brand-gold font-semibold">Serving Tampa, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Disaster Recovery in Tampa, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Tampa sits in one of the highest hurricane risk zones in the United States, with storm surge, wind, and flooding threats that can devastate commercial and residential properties in hours. Florida Construction Specialists provides comprehensive disaster recovery services, from emergency stabilization through complete structural restoration, for property owners across Tampa and Hillsborough County.
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
                <span className="text-white text-sm font-medium">24-48 Hour Emergency Response</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta text-center">
                Emergency Disaster Response
              </Link>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-secondary flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tampa Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              The Disaster Scenario Tampa Has Been Warned About for Decades
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Emergency management professionals have called Tampa Bay the most vulnerable major metropolitan area in the United States for hurricane storm surge. The bay's shallow depth and funnel-shaped geography amplify surge heights well beyond the open coastline, and the city's development pattern places billions of dollars of commercial and residential property at or near sea level. When Hurricane Ian tracked just south of Tampa Bay in 2022, the region experienced a preview of what a direct hit could bring, with significant surge and wind damage despite the storm making landfall over 100 miles to the south.
              </p>
              <p className="mb-6">
                Tampa's disaster risk extends beyond the dramatic hurricane scenario. The city experiences severe thunderstorm activity from May through September that produces wind gusts exceeding 70 mph, torrential rainfall that overwhelms drainage systems, and lightning strikes that start building fires. The Hillsborough River and its tributaries flood during extended heavy rainfall events, affecting properties in Tampa Heights, Seminole Heights, and low-lying areas along the river corridor. Even without a named storm, Tampa's annual thunderstorm season generates wind, water, and fire damage that requires professional disaster recovery services.
              </p>
              <p className="mb-6">
                The built environment in Tampa reflects decades of growth under evolving building codes. Commercial buildings constructed before the Florida Building Code's major 2002 revision lack the hurricane-resistant design features that current code requires. Many of the office buildings in the Westshore Business District, the condo towers along Bayshore Boulevard, the retail structures in established neighborhoods like Hyde Park and SoHo, and the industrial facilities near the Port of Tampa were built to standards that would not withstand a direct major hurricane hit. This older building stock is more vulnerable to damage and more complex to restore, requiring code upgrades during the recovery process.
              </p>
              <p>
                Florida Construction Specialists maintains disaster recovery capabilities specifically calibrated for Tampa's risk profile. Our emergency response protocols, pre-positioned materials and equipment, established subcontractor network, and relationships with the City of Tampa Building Services Department allow us to move from emergency stabilization to full recovery construction efficiently. Our principal's 43 years of combined construction and insurance experience means we manage not just the physical recovery but also the documentation and claims process that property owners depend on for financial recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/tampa-hurricane-damage-restoration/tampa-hurricane-damage-restoration-small.webp"
        alt="Disaster recovery and hurricane damage restoration in Tampa"
        title="Ready When Tampa Needs Us"
        subtitle="Emergency response, structural stabilization, and complete disaster recovery construction"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Disaster Recovery Capabilities for Tampa Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            From the first hours after a disaster through months of recovery construction, we provide the full spectrum of services Tampa property owners need.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "Emergency Stabilization",
                description: "Rapid deployment within 24 to 48 hours of a disaster event in Tampa. Roof tarping, water extraction, structural shoring, building security, debris removal, and temporary weatherproofing to stop the damage from getting worse while recovery planning begins."
              },
              {
                icon: Wind,
                title: "Hurricane Wind Damage Recovery",
                description: "Structural repair and restoration of wind-damaged commercial and residential properties throughout Tampa. Roof system replacement, building envelope repair, structural framing restoration, and window and door replacement to bring damaged buildings back to code compliance."
              },
              {
                icon: Droplets,
                title: "Flood and Surge Damage Recovery",
                description: "Complete restoration of flood-damaged properties, including saltwater surge damage that affects Tampa Bay waterfront buildings. Contamination remediation, structural drying, material replacement below the water line, and mechanical and electrical system restoration."
              },
              {
                icon: Building2,
                title: "Commercial Property Recovery",
                description: "Disaster recovery for Tampa's commercial building inventory, from Westshore office buildings and downtown towers to industrial facilities near the Port and medical offices throughout the city. We manage recovery to minimize business interruption and get Tampa businesses operational again."
              },
              {
                icon: Shield,
                title: "Structural Assessment and Engineering",
                description: "Post-disaster structural assessment using our in-house engineering capabilities. We evaluate structural integrity, identify compromised elements, and develop engineered repair plans that restore the building to code-compliant condition. Essential for Tampa buildings that may have sustained hidden structural damage."
              },
              {
                icon: FileCheck,
                title: "Insurance Documentation and Claims Support",
                description: "Thorough disaster damage documentation in the format that insurance carriers require. Our insurance industry background ensures nothing is missed in the initial assessment, and we prepare supplement documentation for concealed damage discovered during recovery construction."
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

      {/* Local Expertise */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Tampa-Specific Disaster Recovery Knowledge
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Disaster recovery in Tampa requires understanding how the city's geography, building codes, and jurisdictional structure affect the recovery process. The <a href="https://www.tampa.gov/building-services" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of Tampa Building Services Department</a> administers permitting for recovery construction within city limits, with Hillsborough County handling unincorporated areas. Following a disaster declaration, both jurisdictions typically implement expedited permitting procedures, and we know how to navigate these emergency processes to begin recovery construction as quickly as possible.
              </p>
              <p className="mb-6">
                Tampa's flood zone map is a critical factor in disaster recovery planning. Significant portions of the city lie within FEMA Special Flood Hazard Areas, including properties along the Bayshore corridor, on Davis Islands and Harbour Island, in the Channelside waterfront area, along the Hillsborough River corridor through Tampa Heights and Seminole Heights, and in low-lying pockets throughout South Tampa and the Gandy area. Properties in these zones that sustain substantial flood damage may be subject to the NFIP substantial improvement rule, which can require elevating or floodproofing the entire structure during recovery, not just repairing the damage. We identify these requirements early to prevent expensive mid-project surprises.
              </p>
              <p className="mb-6">
                The seasonal pattern of Tampa's disaster risk affects recovery planning and execution. Hurricane season runs June through November, with peak activity in August and September. Severe thunderstorm season overlaps from May through September. Recovery construction for a major disaster event typically extends through multiple weather windows, requiring careful scheduling of exterior work between storm events. We build weather contingencies into every Tampa disaster recovery schedule, protecting newly exposed structural elements and partially completed work from secondary damage during the ongoing storm season.
              </p>
              <p>
                Tampa's two designated historic districts, Ybor City and Hyde Park, present additional recovery challenges. Disaster-damaged buildings in these districts must be restored in a manner that preserves their historic character while meeting current building code requirements. The Barrio Latino Commission in Ybor City and the Architectural Review Commission for Hyde Park both have review authority over exterior restoration work. We have experience working within these constraints, understanding what materials, methods, and design approaches will satisfy both the preservation boards and the Florida Building Code simultaneously.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Tampa Disaster Recovery Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            A structured approach from emergency response through complete property restoration.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Emergency Response and Assessment",
                description: "Rapid deployment to your Tampa property within 24 to 48 hours of a disaster event. We stabilize the structure, prevent additional damage, and conduct an initial assessment to determine the scope of recovery needed. All conditions are thoroughly documented for insurance purposes from the moment we arrive on site."
              },
              {
                step: "02",
                title: "Damage Scope and Recovery Planning",
                description: "Comprehensive assessment of all structural, mechanical, electrical, and finish damage. We develop a recovery plan with realistic timelines, cost estimates, and phasing strategy. For Tampa properties in flood zones or historic districts, we identify special regulatory requirements that affect the recovery approach."
              },
              {
                step: "03",
                title: "Permitting and Insurance Coordination",
                description: "Emergency and standard permit applications through the City of Tampa Building Services Department. Simultaneous insurance claim preparation with the documentation that carriers need to approve recovery funding. We coordinate with adjusters, public adjusters, and insurance attorneys as needed to move the financial recovery alongside the construction recovery."
              },
              {
                step: "04",
                title: "Recovery Construction",
                description: "Full recovery construction with experienced superintendents managing Tampa-based subcontractor crews. Concealed damage discovered during demolition is documented in real time for supplement claims. We schedule exterior work strategically given Tampa's weather patterns and maintain strict quality control on all recovery work."
              },
              {
                step: "05",
                title: "Completion and Re-Occupancy",
                description: "Final inspections, Certificate of Occupancy from the City of Tampa, and comprehensive turnover documentation. For commercial properties, we coordinate re-occupancy logistics with property managers and tenants. Complete project files are compiled for the property owner's records, including all insurance documentation, permits, inspection records, and warranties."
              }
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
        title="Tampa Disaster Recovery FAQ"
        description="Common questions about disaster recovery and emergency construction services in Tampa, Florida."
      />

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <RelatedServices city="Tampa" currentService="disaster-recovery" />
            <NearbyLocations currentCity="Tampa" service="disaster-recovery" serviceName="Disaster Recovery" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Tampa Disaster Recovery Starts With One Call
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you need emergency stabilization right now or are planning disaster recovery for a property already damaged, Florida Construction Specialists has the experience, resources, and local knowledge to restore your Tampa property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Contact Us for Emergency Response
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
