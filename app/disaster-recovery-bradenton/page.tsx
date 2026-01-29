import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Clock, AlertTriangle, FileText, Wrench, Users, DollarSign } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disaster Recovery Bradenton FL | Hurricane & Storm Damage Restoration | FCS",
  description: "Bradenton disaster recovery contractor specializing in hurricane, storm, and flood damage restoration. Prime contractor for large loss insurance claims $250K-$50M. Anna Maria Island gateway. 24/7 emergency response.",
  keywords: "disaster recovery Bradenton, hurricane damage restoration Bradenton, storm damage repair Bradenton, flood damage Bradenton, insurance restoration Bradenton, Manatee River flood damage, Anna Maria Island storm damage",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Disaster Recovery", href: "/insurance-restoration/" },
  { name: "Bradenton", href: "/disaster-recovery-bradenton/" },
];

const disasterTypes = [
  {
    type: "Hurricane Damage",
    description: "Roof damage, structural impacts, water intrusion, and wind damage from tropical storms affecting Bradenton and Anna Maria Island",
    icon: AlertTriangle,
  },
  {
    type: "Flood Restoration",
    description: "Water extraction, structural drying, mold remediation, and flood damage repair for Manatee River and coastal zone properties",
    icon: Wrench,
  },
  {
    type: "Fire & Smoke Damage",
    description: "Structural repairs, smoke damage remediation, odor removal, and complete fire restoration for commercial and residential properties",
    icon: Building2,
  },
  {
    type: "Storm Damage",
    description: "Severe weather damage repair including hail, lightning, tornadic activity, and heavy rain damage throughout Manatee County",
    icon: Shield,
  },
];

const bradentonFaqs = [
  {
    question: "How quickly can FCS respond to disaster damage in Bradenton?",
    answer: "Florida Construction Specialists provides 24/7 emergency response throughout Bradenton, Anna Maria Island, and Manatee County. For large loss commercial and high-value residential properties, we typically have assessment teams on-site within 2-4 hours of initial contact. Our team maintains emergency response crews ready for immediate deployment, especially during hurricane season when Bradenton's coastal location creates heightened risk.",
  },
  {
    question: "What areas of Bradenton are most vulnerable to hurricane and flood damage?",
    answer: "Bradenton's highest-risk areas include properties along the Manatee River, downtown waterfront areas, and communities near Anna Maria Island. The Cortez fishing village, Palma Sola, and Bayshore Gardens face significant storm surge exposure. Properties in these flood zones often require specialized restoration approaches including flood-resistant materials and elevated mechanical systems. The Village of the Arts historic district requires preservation-conscious restoration methods.",
  },
  {
    question: "Do you work with insurance companies on Bradenton disaster claims?",
    answer: "Yes, FCS specializes in large loss insurance restoration and works directly with all major insurance carriers serving Manatee County. We provide detailed documentation, scope assessments, and claims support for Bradenton property owners. Our experience with Xactimate estimating and insurance adjuster protocols helps expedite claims and ensures property owners receive fair compensation for covered damages.",
  },
  {
    question: "What is the typical timeline for hurricane damage restoration in Bradenton?",
    answer: "Hurricane damage restoration timelines in Bradenton vary by scope: Emergency stabilization (1-3 days), water extraction and drying (5-14 days), structural repairs (30-90 days), and full restoration (90-180 days for large commercial projects). Projects over $1 million may require 6-12 months depending on scope and permit requirements through the City of Bradenton Building Division.",
  },
  {
    question: "What types of properties do you restore in Bradenton?",
    answer: "FCS specializes in large loss disaster recovery for commercial properties, multi-family buildings (condos, apartments), hospitality venues serving Anna Maria Island tourism, retail centers, medical facilities, and high-value residential estates. Our Bradenton projects typically range from $250,000 to $25 million. We work on properties throughout Downtown Bradenton, Village of the Arts, Palma Sola, West Bradenton, and surrounding Manatee County areas.",
  },
  {
    question: "How do historic preservation requirements affect disaster restoration in Bradenton?",
    answer: "The Village of the Arts and Downtown Bradenton Historic District have specific preservation requirements that affect disaster restoration. FCS has experience navigating these regulations while incorporating modern disaster-resistant improvements where permitted. We work with the City of Bradenton and follow appropriate standards to maintain historic character during restoration projects. The Village of the Arts overlay standards require particular attention to architectural compatibility.",
  },
  {
    question: "What documentation do you provide for Bradenton insurance claims?",
    answer: "FCS provides comprehensive documentation including initial damage assessments with photos and video, moisture mapping reports, detailed scope of work documents, Xactimate estimates, material specifications, daily progress reports, and final completion documentation. This thorough documentation helps Bradenton property owners maximize their insurance recovery and provides clear records for supplemental claims.",
  },
  {
    question: "How does Bradenton's proximity to Anna Maria Island affect disaster recovery?",
    answer: "Bradenton serves as the gateway to Anna Maria Island, and properties in this corridor face unique challenges. Storm surge from the Gulf can impact properties along Manatee Avenue and the Cortez Road corridor. We understand the tourism-dependent economy and work efficiently to minimize business interruption for hospitality and retail properties that serve Anna Maria Island visitors. Anna Maria Island itself has separate, stricter building requirements that we navigate regularly.",
  },
];

const costData = [
  { category: "Water Damage Restoration", range: "$13,000 - $65,000", timeline: "1-4 weeks", notes: "Depends on affected area and mold presence" },
  { category: "Hurricane Roof Repair", range: "$42,000 - $425,000", timeline: "4-12 weeks", notes: "Commercial roofing with wind uplift compliance" },
  { category: "Fire Damage Restoration", range: "$85,000 - $1.7M+", timeline: "3-9 months", notes: "Structural repairs and smoke remediation" },
  { category: "Full Building Restoration", range: "$425,000 - $42M+", timeline: "6-18 months", notes: "Complete disaster recovery with code upgrades" },
];

const processSteps = [
  { step: 1, title: "Emergency Response", description: "24/7 rapid response with damage assessment and immediate stabilization to prevent further loss" },
  { step: 2, title: "Documentation", description: "Comprehensive photo/video documentation, moisture mapping, and detailed scope development" },
  { step: 3, title: "Insurance Coordination", description: "Direct carrier communication, Xactimate estimates, and claims negotiation support" },
  { step: 4, title: "Restoration Planning", description: "Engineering assessments, permit applications, and detailed project scheduling" },
  { step: 5, title: "Construction Phase", description: "Professional restoration with quality control, progress reporting, and code compliance" },
  { step: 6, title: "Final Inspection", description: "City inspections, insurance sign-off, warranty documentation, and project closeout" },
];

export default function DisasterRecoveryBradentonPage() {
  return (
    <>
      <LocalBusinessSchema city="Bradenton" service="Disaster Recovery" />
      <ServiceSchema
        serviceName="Disaster Recovery and Insurance Restoration"
        serviceDescription="Professional disaster recovery and insurance restoration services in Bradenton, FL. Prime contractor for hurricane damage, flood restoration, fire damage, and large loss insurance claims. Serving Anna Maria Island gateway and Manatee County. 24/7 emergency response with projects from $250,000 to $25 million."
        city="Bradenton"
        minPrice="250000"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Disaster Recovery Services in Bradenton, FL"
        description="Comprehensive guide to disaster recovery and insurance restoration services in Bradenton. Learn about hurricane damage restoration, Manatee River flood remediation, and large loss insurance claim processes."
        datePublished="2024-01-15"
        dateModified="2025-01-18"
        slug="/disaster-recovery-bradenton/"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hurricane-insurance-restoration/hurricane-insurance-restoration-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Bradenton, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Disaster Recovery & Insurance Restoration in Bradenton
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Manatee County's trusted large loss contractor for hurricane damage, flood restoration, and commercial property disaster recovery. Gateway to Anna Maria Island with specialized coastal restoration expertise. We work directly with insurance companies on claims from $250,000 to $25 million. 24/7 emergency response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                24/7 Emergency Response
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-6 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">24/7 Emergency Response</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">In-House Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Direct Insurance Billing</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Prime Contractor</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Bradenton's Premier Disaster Recovery Contractor
              </h2>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists is Manatee County's trusted prime contractor for large loss disaster recovery and insurance restoration. With Bradenton's strategic position as the gateway to Anna Maria Island and significant exposure to Manatee River flooding, property owners need experienced restoration partners who understand both the technical challenges and insurance complexities of major disaster recovery in this coastal region.
              </p>

              <p className="text-gray-600 mb-6">
                Bradenton's location creates unique disaster recovery challenges. The city experiences approximately 50 inches of annual rainfall, sits within a major hurricane corridor, and has flood zones throughout the Manatee River corridor and coastal areas. The historic Village of the Arts and downtown district require specialized restoration approaches that preserve architectural character while meeting modern building codes. Our team has restored properties throughout Bradenton following hurricanes, severe storms, flooding events, and fires—always working as the prime contractor with direct accountability for project success.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-4 mt-8">
                Bradenton Disaster Recovery Services
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {disasterTypes.map((service) => (
                  <div key={service.type} className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <service.icon className="w-8 h-8 text-brand-green flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-brand-green-dark mb-2">{service.type}</h4>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">
                Bradenton's Hurricane & Flood Risk Profile
              </h3>

              <p className="text-gray-600 mb-4">
                Bradenton and Manatee County face significant hurricane and flood risks due to coastal geography and the Manatee River watershed. Key risk factors for Bradenton properties include:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Manatee River Exposure:</strong> Properties along the Manatee River and its tributaries face flooding during heavy rainfall and storm surge events, with downtown and Riverwalk areas particularly vulnerable</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Anna Maria Island Gateway:</strong> The Cortez Road and Manatee Avenue corridors connecting to Anna Maria Island experience storm surge impacts and serve tourism-dependent businesses requiring rapid restoration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Historic District Considerations:</strong> Village of the Arts and Downtown Bradenton Historic District properties require preservation-sensitive restoration approaches</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Cortez Fishing Village:</strong> This historic working waterfront community has unique restoration requirements balancing heritage preservation with flood resistance</span>
                </li>
              </ul>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Bradenton Property's Disaster Recovery Needs <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">24/7 Emergency Line</h3>
                <p className="text-gray-200 mb-4">
                  Immediate response for disaster damage in Bradenton and Manatee County. Our emergency crews are ready to deploy.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-6 rounded-full hover:bg-brand-gold-light transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <RelatedServices city="Bradenton" currentService="disaster-recovery" />
              <NearbyLocations currentCity="Bradenton" service="disaster-recovery" serviceName="Disaster Recovery" />
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Timeline Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Bradenton Disaster Recovery Costs & Timelines
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Restoration costs in Bradenton typically run 10-15% lower than nearby Sarasota due to lower labor costs and permitting efficiencies. These ranges reflect typical Manatee County projects—actual costs depend on specific conditions and insurance coverage.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Restoration Category</th>
                  <th className="px-6 py-4 text-left">Typical Cost Range</th>
                  <th className="px-6 py-4 text-left">Timeline</th>
                  <th className="px-6 py-4 text-left">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {costData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-brand-green-dark">{item.category}</td>
                    <td className="px-6 py-4 text-gray-700">{item.range}</td>
                    <td className="px-6 py-4 text-gray-700">{item.timeline}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 text-center mt-4">
            * Costs as of 2025. Bradenton projects typically 10-15% below Sarasota rates. Actual project costs depend on damage assessment, insurance coverage, and code requirements.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Bradenton Disaster Recovery Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our proven 6-step process ensures thorough restoration, proper documentation, and maximum insurance recovery for Bradenton and Manatee County property owners.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green-dark mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bradenton-Specific Section */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-heading">
                Local Bradenton Expertise Matters
              </h2>
              <p className="text-gray-200 mb-6">
                Disaster recovery in Bradenton requires contractors who understand local conditions, building codes, and the unique challenges of Manatee County's coastal environment. FCS brings extensive experience in Bradenton and the Anna Maria Island corridor to every restoration project.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>City of Bradenton Permit Expertise:</strong> Established relationships with Bradenton Building Division expedite permit approvals (typically 3-5 weeks for commercial)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Village of the Arts Standards:</strong> Experience navigating historic overlay requirements while incorporating disaster-resistant improvements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Anna Maria Island Coordination:</strong> Understanding of the island's stricter building requirements and tourism-based restoration priorities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Manatee River Flood Expertise:</strong> Specialized knowledge of river setback requirements and flood-resistant construction methods</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <DollarSign className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">$40M+</div>
                <div className="text-gray-300 text-sm">Manatee County Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Building2 className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">100+</div>
                <div className="text-gray-300 text-sm">Properties Restored</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Clock className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">2-4 Hr</div>
                <div className="text-gray-300 text-sm">Emergency Response</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Users className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">20+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FCS */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Bradenton Chooses FCS for Disaster Recovery
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-8">
              <Shield className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Always Prime Contractor</h3>
              <p className="text-gray-600">
                FCS is always the prime contractor on Bradenton disaster recovery projects—never a subcontractor. You get direct accountability and single-point responsibility for your restoration.
              </p>
            </div>
            <div className="card text-center p-8">
              <FileText className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Insurance Expertise</h3>
              <p className="text-gray-600">
                Our team includes insurance restoration specialists who understand claim documentation, Xactimate estimating, and carrier negotiation to maximize your recovery in Manatee County.
              </p>
            </div>
            <div className="card text-center p-8">
              <Award className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Proven Track Record</h3>
              <p className="text-gray-600">
                With $40M+ in completed Manatee County disaster recovery projects, we have the experience, bonding capacity, and local expertise to handle any Bradenton restoration challenge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={bradentonFaqs}
        title="Bradenton Disaster Recovery FAQs"
      />

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Bradenton Disaster Recovery Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From emergency response to complete restoration, FCS is Manatee County's trusted partner for large loss disaster recovery. Serving Bradenton, Anna Maria Island, Cortez, and surrounding areas. Contact us 24/7 for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Emergency Response
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
