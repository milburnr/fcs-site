import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, Building2, Shield, Award, FileCheck, HardHat, Briefcase, AlertTriangle } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/insurance-restoration-sarasota/' },
  title: "Insurance Restoration Sarasota FL | Hurricane Claims, Storm Damage | FCS",
  description: "Insurance restoration in Sarasota by Florida Construction Specialists. Hurricane damage repair, large-loss claims, barrier island restoration, carrier negotiation. Licensed CBC, 40+ years experience.",
};

const faqs = [
  {
    question: "How does FCS help Sarasota property owners navigate the insurance claims process for hurricane damage?",
    answer: "Our principal has 43 years of combined construction and insurance industry experience, including work as an Executive General Adjuster. This dual expertise means we understand both the construction scope needed to properly restore a damaged property and the insurance documentation required to support the claim. We prepare detailed damage assessments with photographic evidence, provide line-item repair estimates in formats insurance carriers accept, and coordinate directly with adjusters during the claims process. For Sarasota properties damaged by Hurricane Ian or subsequent storms, we can identify damage that less experienced contractors might miss, particularly water intrusion damage behind walls and structural impacts that may not be visible without investigation."
  },
  {
    question: "What types of insurance restoration projects does FCS handle in the Sarasota area?",
    answer: "We handle large-loss insurance restoration projects throughout Sarasota County, typically ranging from five hundred thousand dollars to fifteen million dollars or more. This includes hurricane and wind damage repair to commercial buildings, condominium complexes, and multi-family properties. We restore barrier island properties damaged by storm surge and salt water intrusion on Siesta Key, Lido Key, Longboat Key, and Bird Key. We also handle fire damage restoration, water damage from plumbing failures or roof leaks, and structural damage from severe weather events. Our focus is on commercial and large residential properties where the scope and complexity justify our level of expertise and project management capability."
  },
  {
    question: "Why is barrier island insurance restoration more complex than mainland property restoration?",
    answer: "Barrier island properties in Sarasota face multiple compounding damage mechanisms during hurricanes. Storm surge can push salt water through ground floors and parking levels, contaminating structural concrete, electrical systems, and mechanical equipment. Wind damage at 150 mph design wind speed exposure is more severe than mainland locations. Salt water intrusion requires specialized remediation including removal of contaminated drywall and insulation well above the water line, treatment of structural elements exposed to salt water, and replacement of electrical systems that salt water contacted. Additionally, barrier island restoration must account for flood zone compliance, environmental regulations, and the logistics of bringing restoration equipment and materials across bridge access points."
  },
  {
    question: "How quickly can FCS respond to storm damage in Sarasota?",
    answer: "We maintain emergency response capability for Sarasota and maintain pre-storm preparation protocols during hurricane season. After a major weather event, we prioritize emergency stabilization including temporary roof protection, water extraction, emergency board-up, and structural shoring. For Sarasota's barrier islands, we coordinate with emergency management regarding bridge access and utility restoration timelines. Our pre-storm planning with existing clients allows us to begin response within hours of road access being restored. Full damage assessment and restoration planning typically begins within the first week after a major storm event, with construction timelines dependent on permitting, material availability, and insurance carrier authorization."
  },
  {
    question: "What is the difference between emergency stabilization and full insurance restoration?",
    answer: "Emergency stabilization is the immediate work performed to prevent further damage after a loss event. This includes temporary roofing to prevent additional water intrusion, water extraction and initial drying to prevent mold growth, structural shoring to secure compromised building elements, and board-up of broken windows and openings. Full insurance restoration is the comprehensive repair work that returns the property to its pre-loss condition or better. This may include structural repairs, roof replacement, exterior envelope restoration, interior buildout, mechanical and electrical system replacement, and finish work. Emergency stabilization costs are typically covered as part of the insurance claim, and we document all emergency work thoroughly to support the carrier's authorization of the full restoration scope."
  },
  {
    question: "How does FCS handle disputes between property owners and insurance carriers on Sarasota claims?",
    answer: "Insurance claim disputes are common in Sarasota, particularly for hurricane damage claims where the distinction between wind damage, flood damage, and pre-existing deterioration affects coverage. Our insurance industry background gives us credibility with carriers and adjusters. We prepare detailed documentation that clearly separates covered damage from pre-existing conditions, provide construction-grade estimates that align with industry-standard pricing databases, and participate in adjuster meetings to explain technical aspects of the damage and repair scope. When disputes arise over scope or pricing, we provide supplemental documentation including engineering reports, moisture mapping, and comparative repair methodologies. Our goal is to help reach fair settlements through professional documentation rather than adversarial approaches."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Insurance Restoration", href: "/insurance-restoration/" },
  { name: "Sarasota", href: "/insurance-restoration-sarasota/" },
];

export default function InsuranceRestorationSarasotaPage() {
  return (
    <>
      <LocalBusinessSchema city="Sarasota" service="Insurance Restoration" />
      <ServiceSchema
        serviceName="Insurance Restoration"
        serviceDescription="Insurance restoration in Sarasota, FL. Hurricane damage repair, large-loss claims support, barrier island restoration, carrier coordination. Licensed CBC1262722, 40+ years experience."
        city="Sarasota"
        minPrice="500000"
        serviceCategories={["Hurricane Damage Restoration", "Large-Loss Claims Support", "Storm Surge Repair", "Fire Damage Restoration", "Commercial Property Restoration"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hurricane-insurance-restoration/hurricane-insurance-restoration-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Sarasota, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Insurance Restoration in Sarasota, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Hurricane Ian demonstrated what Sarasota property owners already understood: the barrier islands and bayfront face catastrophic storm exposure that can produce millions of dollars in damage overnight. Florida Construction Specialists combines construction expertise with insurance industry knowledge to deliver large-loss restoration across Sarasota County, from emergency stabilization through complete property restoration and carrier claims coordination.
            </p>

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
                <AlertTriangle className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">Insurance Industry Expertise</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta text-center">
                Request a Claims Consultation
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
              Sarasota's Hurricane Exposure Creates Complex Insurance Restoration Needs
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Sarasota's direct Gulf of Mexico frontage and barrier island geography create one of the most hurricane-vulnerable property markets in Florida. When Hurricane Ian made landfall in September 2022, the storm pushed destructive surge across Siesta Key, Lido Key, and into Sarasota Bay, flooding ground floors, destroying exterior systems, and contaminating structures with salt water. Properties on Longboat Key, Bird Key, and the downtown bayfront sustained wind damage and water intrusion that revealed pre-existing vulnerabilities in aging building envelopes. The total insured losses across Sarasota County from that single event ran into the billions.
              </p>
              <p className="mb-6">
                Insurance restoration in Sarasota is fundamentally different from standard construction. Property owners dealing with major storm damage face a simultaneous construction project and insurance negotiation, and the outcome of each directly affects the other. Under-scoped damage assessments lead to inadequate claim settlements. Poorly documented restoration work creates disputes over covered versus non-covered repairs. Contractors who lack insurance industry knowledge may build first and negotiate later, leaving property owners exposed to uncovered costs.
              </p>
              <p className="mb-6">
                Florida Construction Specialists approaches Sarasota insurance restoration from both sides of the equation. Our principal's background as an Executive General Adjuster means we understand how insurance carriers evaluate damage, what documentation supports claims, and how to present restoration scopes in formats that facilitate fair settlements. We assess damage thoroughly, including destructive investigation to identify hidden water intrusion and structural impacts, and prepare comprehensive documentation before restoration begins. This approach protects property owners from both under-restoration and under-recovery on their insurance claims.
              </p>
              <p>
                The Sarasota market adds specific complexity to insurance restoration. Barrier island properties involve both wind and flood policies with different carriers and different coverage terms. Condominium associations face shared claims across common elements and individual units. Luxury properties with high-end finishes require restoration to pre-loss quality standards that generic contractors may not achieve. Properties with pre-existing deferred maintenance, particularly aging condominiums facing SB4-D compliance, need careful separation between insured damage and pre-existing conditions. We navigate all of these complexities for Sarasota property owners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/hurricane-restoration/hurricane-restoration-display.webp"
        alt="Hurricane damage restoration in progress on Sarasota commercial property"
        title="Restoring Sarasota After the Storm"
        subtitle="Large-loss insurance restoration with claims expertise for barrier island and bayfront properties"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Insurance Restoration Capabilities for Sarasota Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            From emergency stabilization through complete restoration, every phase is documented for insurance recovery.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "Emergency Stabilization",
                description: "Immediate response to prevent further damage after a loss event. Temporary roofing, water extraction, structural shoring, emergency board-up, and moisture containment. For barrier island properties, we coordinate with emergency management on access and utility restoration timelines."
              },
              {
                icon: Shield,
                title: "Damage Assessment and Documentation",
                description: "Comprehensive damage evaluation using our insurance industry expertise. Photographic documentation, moisture mapping, destructive investigation where warranted, and detailed scope of loss reports in formats carriers accept. We identify hidden damage that less experienced contractors miss."
              },
              {
                icon: Building2,
                title: "Structural Restoration",
                description: "Full structural repair for hurricane-damaged commercial buildings, condominiums, and multi-family properties in Sarasota. Roof system replacement, structural framing repair, concrete restoration, and building envelope reconstruction to current Florida Building Code standards."
              },
              {
                icon: HardHat,
                title: "Storm Surge Remediation",
                description: "Specialized restoration for properties impacted by salt water storm surge on Sarasota's barrier islands. Salt-contaminated material removal, structural drying, anti-microbial treatment, and complete interior rebuild. Salt water intrusion requires remediation well above the visible water line to prevent long-term corrosion damage."
              },
              {
                icon: Briefcase,
                title: "Claims Coordination",
                description: "Direct coordination with insurance adjusters, carrier engineers, and independent adjusters throughout the restoration process. We present damage documentation professionally, support scope negotiations, and prepare supplemental claims when additional damage is discovered during restoration."
              },
              {
                icon: FileCheck,
                title: "Complete Property Restoration",
                description: "Full restoration to pre-loss condition or better for Sarasota commercial and residential properties. Interior buildout, MEP system replacement, exterior envelope restoration, and finish work that meets the quality standards of Sarasota's premium property market."
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
              Insurance Industry Knowledge Applied to Sarasota Restoration
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Most construction contractors approach insurance restoration as a construction project that happens to be funded by insurance. We approach it differently because our principal has worked both sides. Years of experience as an Executive General Adjuster provided deep understanding of how carriers evaluate claims, what documentation drives fair settlements, and where claims commonly fail. That knowledge now serves Sarasota property owners during their most stressful construction experience.
              </p>
              <p className="mb-6">
                The <a href="https://www.sarasotafl.gov/government/building-department" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of Sarasota Building Department</a> processes restoration permits within city limits, while Sarasota County Building Services handles unincorporated areas and barrier island properties. Restoration permits for substantially damaged structures may trigger Florida Building Code upgrade requirements, meaning the restored building must meet current code standards rather than the code in effect when originally built. This affects insurance claim valuations and must be documented properly for carrier authorization.
              </p>
              <p className="mb-6">
                Sarasota's barrier island properties present the most complex insurance restoration scenarios. A single hurricane event can involve wind damage covered under the property policy, flood damage covered under a separate NFIP or private flood policy, and pre-existing deterioration that is not covered at all. Separating these damage categories requires investigation, documentation, and professional judgment. We work with structural engineers and forensic consultants when needed to establish causation and allocate damage accurately, which protects both the property owner's claim and their relationship with the carrier.
              </p>
              <p>
                The premium quality of Sarasota's property market adds another dimension to insurance restoration. Luxury condominiums on the keys, high-end commercial properties downtown, and upscale retail along St. Armands Circle cannot be restored with generic materials and finishes. We ensure that restoration quality matches the pre-loss condition of the property, which in Sarasota often means premium materials, custom finishes, and construction quality that exceeds what many restoration contractors are accustomed to delivering. Proper documentation of pre-loss property condition and finish quality supports insurance recovery at the appropriate replacement cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Sarasota Insurance Restoration Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Every restoration follows a structured process that integrates construction and claims management from day one.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Emergency Response and Stabilization",
                description: "Immediate deployment to prevent further damage. Temporary roofing, water extraction, structural shoring, and environmental containment. All emergency work is documented for insurance recovery. For Sarasota barrier island properties, we coordinate with emergency management on access availability and utility restoration.",
                icon: AlertTriangle,
              },
              {
                step: "02",
                title: "Comprehensive Damage Assessment",
                description: "Thorough investigation of all damage including destructive testing where warranted to identify hidden impacts. We prepare detailed damage documentation with photographic evidence, moisture mapping, structural condition reports, and a comprehensive scope of loss. Our assessments separate hurricane damage, flood damage, and pre-existing conditions for proper claim allocation.",
                icon: FileCheck,
              },
              {
                step: "03",
                title: "Claims Coordination and Approval",
                description: "We present our damage assessment and restoration scope to the insurance carrier, participate in adjuster inspections, and coordinate with carrier engineers or independent adjusters. Our insurance industry background facilitates professional claims discussions that lead to fair settlements. We handle supplemental claims when additional damage is discovered during restoration.",
                icon: Briefcase,
              },
              {
                step: "04",
                title: "Restoration Construction",
                description: "Full restoration construction managed by experienced project managers with our network of Sarasota subcontractors. We restore properties to pre-loss condition or better, meeting current Florida Building Code requirements where triggered. Quality control ensures restoration matches the premium standards of Sarasota's property market.",
                icon: HardHat,
              },
              {
                step: "05",
                title: "Closeout and Final Documentation",
                description: "Comprehensive project closeout including final inspections, Certificate of Occupancy where applicable, warranty documentation, and complete claims closure documentation. We ensure all insurance-covered work is properly documented for final carrier payment and provide the property owner with complete records for future reference.",
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
        title="Sarasota Insurance Restoration FAQ"
        description="Common questions about insurance restoration and claims support in Sarasota, Florida."
      />

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <RelatedServices city="Sarasota" currentService="insurance-restoration" />
            <NearbyLocations currentCity="Sarasota" service="insurance-restoration" serviceName="Insurance Restoration" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Need Insurance Restoration in Sarasota?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss your insurance restoration needs. Whether dealing with hurricane damage, fire loss, or water damage, we combine construction expertise with insurance claims knowledge to protect your Sarasota property and your recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Discuss Your Loss
            </Link>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all">
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-300">
              <span>License {BUSINESS_INFO.licenseNumber}</span>
              <span>Insurance Industry Background</span>
              <span>{BUSINESS_INFO.yearsInBusiness}+ Years Experience</span>
              <span>Large-Loss Specialists</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
