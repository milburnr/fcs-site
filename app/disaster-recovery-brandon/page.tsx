import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, Building2, Shield, Award, FileCheck, HardHat, Briefcase, AlertTriangle, Clock } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/disaster-recovery-brandon/' },
  title: "Disaster Recovery Brandon FL | Storm, Flood, Fire Restoration | FCS",
  description: "Disaster recovery construction in Brandon FL. Hurricane damage, flooding, lightning strikes, fire damage. Emergency response and full restoration. Licensed CBC, 40+ years experience.",
};

const faqs = [
  {
    question: "What kinds of disasters most commonly affect properties in the Brandon area?",
    answer: "Brandon's inland Hillsborough County location creates a specific disaster risk profile. The most frequent events are severe thunderstorms with damaging winds and lightning, tropical storms and hurricanes bringing sustained high winds and heavy rainfall, localized flooding from summer storm events and inadequate drainage, and lightning-caused structural fires. While Brandon avoids the storm surge risk that threatens coastal communities, the community's flat suburban terrain makes it susceptible to flooding when drainage systems are overwhelmed by heavy rain events, particularly near the Alafia River and in low-lying areas of the Bloomingdale and Boyette corridors."
  },
  {
    question: "How quickly can FCS respond to a disaster in Brandon?",
    answer: "Our Ruskin headquarters is approximately twenty minutes from Brandon, allowing rapid deployment of emergency response crews. For major weather events, we pre-position resources and monitor storm tracks to enable immediate response once conditions are safe for deployment. Our emergency services include roof tarping, structural shoring, window boarding, water extraction, and site security. For commercial properties, rapid response is critical to minimize business interruption and prevent secondary damage from water intrusion and mold growth in Florida's humid climate."
  },
  {
    question: "Does FCS handle both emergency stabilization and full reconstruction for Brandon disasters?",
    answer: "Yes, we provide the complete disaster recovery lifecycle from initial emergency response through full reconstruction. Many contractors specialize in either mitigation or construction but not both. We handle emergency board-up and stabilization, damage assessment and documentation, insurance claim support, permitting through Hillsborough County, demolition of damaged components, and complete reconstruction to pre-loss condition or better. This single-source approach eliminates the coordination problems and finger-pointing that occur when emergency response and reconstruction are handled by separate contractors."
  },
  {
    question: "How does Brandon's unincorporated status affect disaster recovery permitting?",
    answer: "Since Brandon is unincorporated, all disaster recovery permits go through Hillsborough County Building Services rather than a municipal building department. After major storms, the county may implement expedited permitting procedures for emergency repairs, but standard reconstruction still requires full plan review and permits. We have established relationships with Hillsborough County building officials that help us navigate both emergency and standard permitting efficiently. The county's development review process applies to reconstruction that changes building footprint or use, which can occur when property owners decide to rebuild differently after a disaster."
  },
  {
    question: "What role does the Florida Building Code play in disaster reconstruction for Brandon properties?",
    answer: "When a building sustains damage exceeding fifty percent of its value, the Florida Building Code requires that reconstruction bring the entire building up to current code standards, not just the damaged portion. This substantially damaged determination can significantly increase reconstruction costs and timelines but also results in a stronger, more resilient building. Even for damage below fifty percent, replaced components must meet current code. For Brandon properties built in the 1980s and 1990s, code upgrades often include enhanced wind resistance, updated electrical systems, improved energy efficiency, and current accessibility requirements."
  },
  {
    question: "Does FCS coordinate with FEMA and other disaster assistance programs for Brandon properties?",
    answer: "We can support property owners navigating FEMA assistance and other disaster recovery programs when federal disaster declarations cover Hillsborough County. This includes documenting damage in formats that support FEMA applications, coordinating reconstruction timelines with grant funding availability, and ensuring repairs meet the requirements for disaster assistance programs. For commercial properties, we also help coordinate with SBA disaster loan programs and business interruption insurance claims. Our experience with multiple disaster recovery funding sources helps property owners maximize available assistance."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Disaster Recovery", href: "/disaster-recovery/" },
  { name: "Brandon", href: "/disaster-recovery-brandon/" },
];

export default function DisasterRecoveryBrandonPage() {
  return (
    <>
      <LocalBusinessSchema city="Brandon" service="Disaster Recovery" />
      <ServiceSchema
        serviceName="Disaster Recovery"
        serviceDescription="Disaster recovery construction in Brandon, FL. Hurricane damage, flooding, lightning strikes, fire restoration. Emergency response and complete reconstruction. Licensed CBC1262722, 40+ years experience."
        city="Brandon"
        minPrice="25000"
        serviceCategories={["Hurricane Damage Restoration", "Flood Damage Recovery", "Fire Damage Reconstruction", "Emergency Stabilization", "Commercial Disaster Recovery"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/construction-crane-silhouette-tampa/construction-crane-silhouette-tampa-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Brandon & Eastern Hillsborough County</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Disaster Recovery in Brandon, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              When hurricanes, flooding, lightning, or fire damage Brandon properties, Florida Construction Specialists provides the emergency response and full-scale reconstruction that gets businesses and communities back to normal. From immediate stabilization through complete rebuilding, we manage every phase of disaster recovery with the construction expertise and insurance industry knowledge that complex losses demand.
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
                <Clock className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">Rapid Emergency Response</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta text-center">
                Request Emergency Response
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
              Understanding Brandon's Disaster Risk Profile
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Brandon occupies a unique position in the Tampa Bay area's disaster risk landscape. As an unincorporated community roughly fifteen miles inland from Tampa Bay, Brandon avoids the storm surge flooding that represents the most catastrophic risk for coastal properties. But inland location does not mean low risk. Brandon sits in one of the most lightning-dense regions in the United States, receives over fifty inches of annual rainfall that frequently overwhelms suburban drainage systems, and remains fully exposed to hurricane-force winds that lose only modest intensity as they move inland from the Gulf of Mexico.
              </p>
              <p className="mb-6">
                The community's flat suburban terrain compounds flood risk during major rain events. Brandon's extensive development has replaced natural drainage with impervious surfaces, streets, parking lots, rooftops, and driveways that channel water into stormwater systems designed for typical storms, not extreme events. When tropical systems stall over eastern Hillsborough County or back-to-back thunderstorms dump rain faster than systems can handle, localized flooding affects properties throughout the community. Low-lying areas near the Alafia River, Buckhorn Creek, and Pemberton Creek are particularly vulnerable, but flooding can occur anywhere when storm intensity exceeds drainage capacity.
              </p>
              <p className="mb-6">
                Lightning strikes cause a surprisingly significant amount of property damage in Brandon. Central Florida's status as the lightning capital of the Western Hemisphere is not just trivia. Lightning strikes ignite structural fires, destroy electrical systems, damage HVAC equipment, and create surge-related damage throughout commercial and residential buildings. For commercial properties along the SR 60 corridor and in Brandon's retail areas, a single lightning strike can cause hundreds of thousands of dollars in damage and weeks of business interruption.
              </p>
              <p>
                Florida Construction Specialists maintains disaster recovery capabilities specifically calibrated for the types of events that affect inland Hillsborough County communities like Brandon. Our emergency response teams are based in nearby Ruskin, enabling rapid deployment when weather events strike. Our construction teams have experience with every type of disaster damage that Brandon properties sustain, from comprehensive hurricane reconstruction to targeted lightning damage repair and flood remediation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/hurricane-restoration-construction/hurricane-restoration-construction-display.webp"
        alt="Disaster recovery construction and restoration work"
        title="Rapid Recovery for Brandon Properties"
        subtitle="Emergency response, damage mitigation, and complete reconstruction for all disaster types"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Disaster Recovery Capabilities for Brandon Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            From emergency stabilization through complete reconstruction, we handle every phase of disaster recovery for Brandon's commercial and residential properties.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "Hurricane and Wind Damage Recovery",
                description: "Complete reconstruction following hurricane and severe storm damage including roof system replacement, structural framing repair, exterior envelope restoration, window and door replacement, and interior reconstruction. We manage the full scope from emergency tarping through final inspection and Certificate of Occupancy from Hillsborough County."
              },
              {
                icon: Shield,
                title: "Flood Damage Remediation",
                description: "Water extraction, structural drying, contamination remediation, and reconstruction following flooding events. Brandon's flat terrain and suburban drainage challenges create flood risk beyond designated flood zones. We address both the immediate water damage and the structural and environmental consequences of flooding."
              },
              {
                icon: Building2,
                title: "Lightning and Fire Damage",
                description: "Structural assessment and reconstruction following lightning strikes and fire damage. Lightning causes both direct structural damage and secondary electrical and fire damage that can affect entire buildings. We coordinate with fire investigators, insurance adjusters, and structural engineers to document and restore lightning-damaged properties."
              },
              {
                icon: Clock,
                title: "Emergency Stabilization",
                description: "Immediate response services including structural shoring, roof tarping, board-up, water extraction, and site security. Rapid stabilization prevents secondary damage that compounds the original loss and demonstrates to insurance carriers that the property owner took reasonable steps to mitigate further damage."
              },
              {
                icon: FileCheck,
                title: "Damage Documentation",
                description: "Comprehensive damage assessment and documentation using drone photography, moisture mapping, structural evaluation, and detailed field measurements. Our documentation supports insurance claims, FEMA applications, and SBA disaster loan requests with the professional detail these programs require."
              },
              {
                icon: HardHat,
                title: "Commercial Business Recovery",
                description: "Disaster recovery for commercial properties with focus on minimizing business interruption. We develop phased reconstruction plans that restore critical business functions first, coordinate with tenants and property managers, and manage the construction timeline to get businesses operational as quickly as possible."
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
              Brandon-Specific Disaster Recovery Knowledge
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Disaster recovery in Brandon requires navigating Hillsborough County's emergency and standard permitting processes. Since Brandon is unincorporated, <a href="https://www.hillsboroughcounty.org/en/residents/property-owners-and-renters/building-and-renovations/permits-and-inspections" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">Hillsborough County Building Services</a> manages all reconstruction permits. After declared disasters, the county may activate emergency permit procedures that allow immediate stabilization and temporary repairs without standard plan review. However, permanent reconstruction still requires full permits and inspections. We understand the boundary between emergency repairs and permitted reconstruction and help property owners stay compliant while moving recovery forward as quickly as possible.
              </p>
              <p className="mb-6">
                Brandon's suburban building stock creates specific reconstruction challenges. Retail centers along the SR 60 corridor often have multiple tenants who are all affected when a building sustains major damage, requiring coordination of individual tenant requirements during reconstruction. Multi-family apartment communities need phased reconstruction approaches that allow some residents to remain while damaged buildings are restored. Distribution and warehouse facilities near I-75 have specialized building systems, crane-rated structures, temperature-controlled environments, and heavy-duty loading systems, that require experienced industrial construction knowledge to restore properly.
              </p>
              <p className="mb-6">
                The substantially damaged determination under the Florida Building Code has particular impact in Brandon. Many commercial and residential buildings in the community were constructed in the 1980s and 1990s under older code editions. When damage exceeds fifty percent of building value, full code compliance upgrades are required. For Brandon properties, this can mean upgrading to current wind resistance standards, installing impact-rated openings where not previously required, upgrading electrical panels to arc-fault standards, and bringing buildings into compliance with current energy and accessibility codes. These upgrades add cost but result in a significantly more resilient rebuilt structure.
              </p>
              <p>
                Our knowledge of eastern Hillsborough County's infrastructure, utility providers, transportation routes, and material suppliers enables efficient disaster reconstruction logistics. We know which staging areas are accessible, which utility companies serve different parts of Brandon, and how to coordinate heavy equipment delivery on Brandon's suburban street network. These logistics details may seem minor, but they significantly affect reconstruction speed and cost when multiple properties need simultaneous disaster recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Brandon Disaster Recovery Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            A proven recovery process that moves from emergency response to completed reconstruction efficiently and transparently.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Emergency Response and Stabilization",
                description: "Immediate deployment for structural shoring, roof tarping, board-up, water extraction, and site security. We document all emergency work for insurance and FEMA purposes while preventing secondary damage. Our Ruskin proximity enables deployment to Brandon within minutes of conditions becoming safe.",
                icon: AlertTriangle,
              },
              {
                step: "02",
                title: "Damage Assessment and Documentation",
                description: "Comprehensive damage evaluation using drone photography, moisture mapping, structural analysis, and detailed field measurements. We prepare documentation packages that support insurance claims, FEMA applications, and SBA disaster loans simultaneously, maximizing available recovery funding.",
                icon: FileCheck,
              },
              {
                step: "03",
                title: "Recovery Planning and Funding Coordination",
                description: "We develop detailed reconstruction plans with accurate cost estimates and realistic timelines. We coordinate with insurance carriers, public adjusters, FEMA representatives, and SBA loan officers as applicable. For commercial properties, we develop phased plans that prioritize critical business function restoration.",
                icon: Briefcase,
              },
              {
                step: "04",
                title: "Permitting and Reconstruction",
                description: "We manage all permitting through Hillsborough County Building Services and execute reconstruction with experienced project managers and qualified subcontractors. Construction proceeds on schedule with strict quality control, regular progress reporting, and coordination with all funding sources.",
                icon: HardHat,
              },
              {
                step: "05",
                title: "Completion and Compliance Closeout",
                description: "Final inspections, Certificate of Occupancy from Hillsborough County, warranty documentation, and closeout packages for insurance carriers and disaster assistance programs. We ensure all reconstruction meets current Florida Building Code standards and all program documentation requirements are satisfied.",
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
        title="Brandon Disaster Recovery FAQ"
        description="Common questions about disaster recovery construction in Brandon, Florida."
      />

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <RelatedServices city="Brandon" currentService="disaster-recovery" />
            <NearbyLocations currentCity="Brandon" service="disaster-recovery" serviceName="Disaster Recovery" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Brandon Disaster Recovery When You Need It Most
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for emergency disaster response or to discuss reconstruction planning for your Brandon property. We are available for rapid deployment and can begin damage assessment immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request Emergency Response
            </Link>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all">
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-300">
              <span>License {BUSINESS_INFO.licenseNumber}</span>
              <span>Emergency Response Capable</span>
              <span>{BUSINESS_INFO.yearsInBusiness}+ Years Experience</span>
              <span>Prime Contractor Only</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
