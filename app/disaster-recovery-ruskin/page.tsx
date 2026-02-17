import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, Building2, Shield, Award, HardHat, FileCheck, Home, AlertTriangle, Droplets } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/disaster-recovery-ruskin/' },
  title: "Disaster Recovery Ruskin FL | Hurricane, Storm, Flood | FCS",
  description: "Disaster recovery in Ruskin FL by Florida Construction Specialists — headquartered locally. Hurricane damage, Tampa Bay flooding, Sun City Center storm recovery, Apollo Beach waterfront restoration. Licensed CBC.",
};

const faqs = [
  {
    question: "How fast can FCS respond to disaster damage in Ruskin?",
    answer: "Florida Construction Specialists is headquartered at 822 Bayview Dr in Ruskin, which means we respond faster than any other licensed general contractor in the region. Our crews, equipment, and project managers are stationed locally. For emergency stabilization — tarping, board-up, water extraction — we can mobilize within hours rather than the half-day or longer it takes contractors commuting from Tampa or St. Petersburg. This response time advantage is particularly critical after hurricanes when every contractor in the region is deployed and travel times increase dramatically."
  },
  {
    question: "What disaster risks are unique to Ruskin and South Hillsborough County?",
    answer: "Ruskin sits at the intersection of several distinct disaster risk zones. Apollo Beach and the Tampa Bay waterfront face significant storm surge exposure — potentially ten to fifteen feet in a major hurricane — plus coastal flooding from tropical systems. The Little Manatee River corridor through Ruskin experiences freshwater flooding during heavy rainfall events. Sun City Center, while inland, faces hurricane wind damage and the particular vulnerability of its aging building stock from the 1970s through 1990s. The US 41 commercial corridor and industrial properties face both wind damage and business interruption losses that require rapid commercial restoration."
  },
  {
    question: "Does FCS specialize in disaster recovery for Sun City Center's senior community?",
    answer: "Yes, we have extensive experience restoring properties in Sun City Center and other 55-plus communities. We understand the unique needs of senior residents: clear and frequent communication, sensitivity to the stress of displacement, accessibility requirements during active construction, phased approaches that allow residents to remain in their units when possible, and coordination with community HOAs and management companies. Our proximity from Ruskin means consistent superintendent presence and rapid response when issues arise during the restoration process."
  },
  {
    question: "How do flood zone requirements affect disaster restoration in Apollo Beach?",
    answer: "Apollo Beach waterfront properties in VE and AE flood zones face strict FEMA requirements during restoration. If damage exceeds fifty percent of the building's pre-damage value, substantial improvement rules require bringing the entire structure to current flood elevation and building code standards. This can mean elevating mechanical systems above base flood elevation, installing flood vents in enclosed areas below the flood level, upgrading to flood-resistant building materials, and potentially raising the structure. FCS has extensive experience navigating these requirements with Hillsborough County and FEMA."
  },
  {
    question: "Does FCS handle insurance claims coordination for Ruskin disaster recovery?",
    answer: "We work directly with all major insurance carriers active in the South Hillsborough market including Citizens Property Insurance, Universal Insurance, Heritage, and major national carriers. Our team provides Xactimate estimates, comprehensive photo and video documentation, moisture mapping reports, and all supporting documentation needed for claim processing. Our principal's combined construction and insurance industry background gives us a unique perspective on maximizing legitimate claim recovery while maintaining the documentation standards that carriers require."
  },
  {
    question: "What types of commercial disaster recovery does FCS handle in the Ruskin area?",
    answer: "We handle disaster recovery for the full range of commercial properties in South Hillsborough County: distribution centers and warehouses along the I-75 corridor, retail and restaurant properties along US 41, medical facilities near Sun City Center, condominium common areas and structural elements, institutional buildings, and agricultural-adjacent commercial properties. For commercial losses, we focus on minimizing business interruption through phased restoration that allows partial operations to resume while construction continues on damaged areas."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Disaster Recovery", href: "/insurance/" },
  { name: "Ruskin", href: "/disaster-recovery-ruskin/" },
];

export default function DisasterRecoveryRuskinPage() {
  return (
    <>
      <LocalBusinessSchema city="Ruskin" service="Disaster Recovery" />
      <ServiceSchema
        serviceName="Disaster Recovery and Insurance Restoration"
        serviceDescription="Emergency disaster recovery contractor headquartered in Ruskin, Florida. Hurricane, flood, storm, and fire damage restoration for Sun City Center, Apollo Beach, South Hillsborough County. Licensed CBC1262722."
        city="Ruskin"
        minPrice="250000"
        serviceCategories={["Hurricane Damage Repair", "Flood Restoration", "Storm Damage Recovery", "Fire Restoration", "Emergency Stabilization"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hurricane-restoration/hurricane-restoration-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <Home className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">FCS Headquarters — Ruskin, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Disaster Recovery in Ruskin, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              When disaster strikes South Hillsborough County, Florida Construction Specialists is already here. Headquartered at 822 Bayview Dr in Ruskin, we respond faster than any other licensed general contractor — deploying crews for emergency stabilization, coordinating insurance documentation, and managing complete restoration from hurricane damage to flood recovery across Apollo Beach, Sun City Center, and the entire SouthShore area.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Home className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">Ruskin Headquartered</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">Direct Insurance Billing</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">License {BUSINESS_INFO.licenseNumber}</span>
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

      {/* Ruskin Market Context */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Disaster Recovery Where We Live
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Ruskin and the SouthShore area face a convergence of disaster risks that demand an experienced local contractor. Apollo Beach waterfront properties sit in FEMA VE and AE flood zones with significant storm surge exposure from Tampa Bay. The Little Manatee River corridor through Ruskin proper experiences freshwater flooding during tropical systems and heavy summer rainfall. Sun City Center's aging condominium and residential buildings are particularly vulnerable to hurricane wind damage and water intrusion.
              </p>
              <p className="mb-6">
                Being headquartered in Ruskin gives Florida Construction Specialists an advantage that no Tampa or St. Petersburg-based contractor can replicate during a disaster event. When a hurricane makes landfall, roads are congested or closed, staging areas are at a premium, and contractors are competing for fuel and supplies. Our crews and equipment are already positioned in South Hillsborough County. We know the local roads, the building stock, the neighborhood vulnerabilities, and the <a href="https://www.hillsboroughcounty.org/en/residents/property-owners-and-renters/building-and-renovations/permits-and-inspections" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">Hillsborough County Building Services</a> staff who will be processing emergency repair permits.
              </p>
              <p>
                Our principal's combined construction and insurance industry experience is particularly valuable during disaster recovery, where documentation quality directly affects claim outcomes. We provide Xactimate estimates, comprehensive damage documentation, and the professional communication with adjusters that maximizes legitimate insurance recovery for property owners throughout South Hillsborough County.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/hurricane-insurance-restoration/hurricane-insurance-restoration-display.webp"
        alt="Hurricane damage restoration in South Hillsborough County"
        title="Responding When South County Needs Us Most"
        subtitle="Emergency stabilization through complete restoration for hurricane, flood, and storm damage"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Disaster Recovery Services for the SouthShore Area
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            From emergency board-up to complete building restoration, we handle every phase of disaster recovery for residential, commercial, and institutional properties across South Hillsborough County.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "Hurricane Damage Restoration",
                description: "Roof damage, structural impacts, water intrusion, and wind damage from tropical storms and hurricanes. Apollo Beach and coastal properties face elevated storm surge risk that can require extensive structural restoration beyond wind damage alone."
              },
              {
                icon: Droplets,
                title: "Flood Recovery",
                description: "Water extraction, structural drying, mold remediation, and flood damage repair for properties along Tampa Bay, the Little Manatee River corridor, and low-lying areas throughout the SouthShore communities. FEMA compliance for properties in designated flood zones."
              },
              {
                icon: Building2,
                title: "Commercial Property Restoration",
                description: "Rapid restoration for commercial and industrial properties along US 41, the I-75 logistics corridor, and Sun City Center commercial areas. We focus on minimizing business interruption through phased approaches that allow partial operations during construction."
              },
              {
                icon: Shield,
                title: "Insurance Claims Coordination",
                description: "Direct communication with all major carriers, Xactimate estimates, comprehensive damage documentation, and claims negotiation. Our insurance industry background means we understand both sides of the claims process and document accordingly."
              },
              {
                icon: HardHat,
                title: "Emergency Stabilization",
                description: "Immediate tarping, board-up, water extraction, and temporary structural support from our local Ruskin headquarters. Our proximity means faster deployment than any competitor — critical in the hours after a disaster when further damage is actively occurring."
              },
              {
                icon: FileCheck,
                title: "Senior Community Restoration",
                description: "Specialized disaster recovery for Sun City Center's retirement community properties. We understand the accessibility needs, communication requirements, and phased construction approaches that serve senior residents during the stress of disaster restoration."
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

      {/* FAQ Section */}
      <FAQWithSchema
        items={faqs}
        title="Ruskin Disaster Recovery FAQ"
        description="Common questions about disaster recovery and insurance restoration in Ruskin, Apollo Beach, and Sun City Center."
      />

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <RelatedServices city="Ruskin" currentService="disaster-recovery" />
            <NearbyLocations currentCity="Ruskin" service="disaster-recovery" serviceName="Disaster Recovery" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Your Ruskin Neighbors for Disaster Recovery
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            When disaster strikes South Hillsborough County, Florida Construction Specialists is already here. Contact our Ruskin headquarters for emergency response or to discuss restoration planning for your property.
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
              <span>Ruskin Headquartered</span>
              <span>{BUSINESS_INFO.yearsInBusiness}+ Years Experience</span>
              <span>Prime Contractor Only</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
